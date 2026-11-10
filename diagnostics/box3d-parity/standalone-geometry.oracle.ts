import { expect, test } from "bun:test";
import gold from "../../src/standard/physics/standalone-geometry.gold.json" with { type: "json" };
import { nativeBinary, run } from "./native.ts";

test("standalone geometry records equal native Box3D", () => {
    expect(JSON.parse(run([nativeBinary("standalone-geometry.c")]))).toEqual(gold);
});
