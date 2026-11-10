import { resolve } from "node:path";
import { $ } from "bun";
import { audioArtifactIsFresh } from "../crates/audio/scripts/audio-inputs.ts";
import { gltfArtifactIsFresh } from "../crates/gltf/scripts/inputs.ts";
import { mikktspaceArtifactIsFresh } from "../crates/mikktspace/scripts/inputs.ts";
import { kernelArtifactsAreFresh } from "../crates/physics/scripts/kernel-inputs.ts";

const root = resolve(import.meta.dirname, "..");
if (!audioArtifactIsFresh(root)) await $`bun scripts/audio.ts`.cwd(root);
if (!gltfArtifactIsFresh(root)) await $`bun crates/gltf/scripts/build.ts`.cwd(root);
if (!mikktspaceArtifactIsFresh(root)) await $`bun crates/mikktspace/scripts/build.ts`.cwd(root);
await $`bun scripts/tooling.ts`.cwd(root);
if (!kernelArtifactsAreFresh(root)) await $`bun crates/physics/scripts/build-kernel.ts`.cwd(root);
