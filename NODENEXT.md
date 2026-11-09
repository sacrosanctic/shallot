# Plan: drop the compile-to-JS step, run the CLI from TypeScript source

Each step lands as its own jj change. The only compilation performed today is the
`Bun.build` bundling of `bin/shallot.ts` → `dist/cli/shallot.js` in
`scripts/tooling.ts`; the package already ships TypeScript sources for everything else
(`main`/`exports` point at `src/**/*.ts`, `erasableSyntaxOnly` is already on, and the
`dist/testing.d.ts` / `dist/vite.d.ts` outputs are tsc declaration emit — type-only, no
JavaScript).

Premise: since Node 22.18, type stripping is on by default and the bin stays
`#!/usr/bin/env node`.

## Step 1 — nodenext conversion

Landable as one change; bisecting the sweep is impractical.

- `tsconfig.base.json`: `module` and `moduleResolution` → `"nodenext"`, add
  `"allowImportingTsExtensions": true` (safe: the repo is `noEmit`-mode). Keep
  `verbatimModuleSyntax` and `erasableSyntaxOnly` unchanged.
- Sweep every relative import to an explicit extension: `.ts` on TypeScript sources,
  `.js` on the committed JavaScript files (`src/project/testing.js`, `vite.js`,
  `assets.js`, …). Covers `src/`, `bin/`, `scripts/` and `examples/` relative
  specifiers. `@dylanebert/shallot/...` self-imports and bare imports stay untouched.
- `scripts/project-declaration.ts`: its scratch config keeps `emitDeclarationOnly`
  (which satisfies `allowImportingTsExtensions`); make sure its `files: [source]`
  graph still resolves under nodenext.
- Loop: `bun check`, `bun run lint`, non-GPU `bun run test`; browser and Playwright
  subjects keep running through Bun/Vite, so nothing else changes.

## Step 2 — bin and manifest switch

- `package.json`: `bin.shallot` → `./bin/shallot.ts`; `engines.node` → `">=22.18.0"`.
- `bin/shallot.ts`: shebang stays `#!/usr/bin/env node`; only its import extension
  changes (from step 1).
- Known fallback if a node-installed consumer reports
  `ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING` (Node refuses type stripping under
  `node_modules`): revisit the shebang or introduce a small committed JS launcher as
  the bin. Note this in the migration entry as a known fallback.

## Step 3 — remove the bundling step

- `scripts/tooling.ts`: delete the `Bun.build` block; keep the declaration
  generation; update the final log line (declaration generation only).
- `"files"` keeps `"dist"`: it now ships the two declarations only.

## Step 4 — retarget the packed and publish tests

- `src/cli/publish.oracle.ts` (5 references), `src/cli/publish.node.ts` (2) point at
  `dist/cli/shallot.js`; retarget them via the manifest `bin` path.
- `scripts/packed-install-fixture.ts`, `scripts/packed-install-cli.node.ts` and
  `scripts/packed-install.node.ts` likewise.
- `scripts/icons-packed.node.ts` and `scripts/package-shape-pin.oracle.ts` resolve
  dynamically (via `manifest.bin.shallot` or `bin/shallot.ts`) and should pass
  untouched.
- Check `scripts/check-package.node.ts` and `scripts/check-commands.test.ts` for bin
  or dist-path assertions.

## Step 5 — docs

- `CONTRIBUTING.md`: rephrase line 324 ("The `shallot` bin runs the TypeScript source
  under node ≥ 22.18").
- `README.md`: engine requirements (node ≥ 22.18, bun ≥ 1.4.3).
- `MIGRATION.md`: entry for the node floor and the bin-path change (breaking for any
  consumer invoking the bin with node < 22.18), plus the type-stripping fallback note
  from step 2.

## Verification

Run the pre-land check after each step and fix forward within that same jj change:

```sh
bun check
bun run lint
bun run test --path-ignore-patterns '**/*.gpu.test.ts'
bun test --todo ./scripts/check-*.node.ts
{ git diff --quiet origin/main -- crates || cargo fmt --check; }
sh scripts/clippy.sh
```

CLI and manifest changes additionally require a packed tarball installed in a scratch
project (CONTRIBUTING): run the `packed-install*` tests and
`src/cli/publish.oracle.ts` with `bun run prepare` fresh.

## jj mechanics

One jj change per step:

1. work, verify with the pre-land check
2. `jj describe -m "<step message>"` then `jj new`
