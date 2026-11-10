import { expect, test } from "bun:test";
import { defaultSurfaceMaterial } from "../../src/standard/physics/common/types.ts";
import { createCompound } from "../../src/standard/physics/shapes/compound.ts";
import { createMesh } from "../../src/standard/physics/shapes/mesh.ts";
import { createCompoundShape } from "../../src/standard/physics/shapes/shape.ts";
import { defaultBodyDef, defaultShapeDef, defaultWorldDef } from "../../src/standard/physics/common/types.ts";
import { createBody } from "../../src/standard/physics/world/body.ts";
import { createWorld, getWorld, destroyWorld } from "../../src/standard/physics/world/world.ts";
import { worldCastRayClosest } from "../../src/standard/physics/world/query.ts";
import { nativeSseOutput } from "./native-evidence.ts";

test("a compound mesh child retains six distinct materials", () => {
    const vertices = Array.from({ length: 6 }, (_, i) => [
        { x: 3 * i, y: 0, z: 0 },
        { x: 3 * i, y: 0, z: 1 },
        { x: 3 * i + 1, y: 0, z: 0 },
    ]).flat();
    const meshData = createMesh({ vertices, indices: vertices.map((_, i) => i), materialIndices: [0, 1, 2, 3, 4, 5] })!;
    const compound = createCompound({ meshes: [{
        meshData,
        transform: { p: { x: 0, y: 0, z: 0 }, q: { v: { x: 0, y: 0, z: 0 }, s: 1 } },
        scale: { x: 1, y: 1, z: 1 },
        materials: Array.from({ length: 6 }, (_, i) => ({ ...defaultSurfaceMaterial(), userMaterialId: BigInt(100 + i) })),
        materialCount: 6,
    }] })!;
    const native = nativeSseOutput("compound-materials.c", "").trim().split(/\s+/).map(Number);
    expect(native).toEqual([6, 100, 101, 102, 103, 104, 105]);
    expect(compound.materialCount).toBe(6);
    expect(compound.meshes[0].materialIndices).toEqual([0, 1, 2, 3, 4, 5]);
    const world = getWorld(createWorld(undefined, defaultWorldDef()))!;
    try {
        const body = createBody(world, defaultBodyDef());
        expect(createCompoundShape(world, body, defaultShapeDef(), compound)).not.toBeNull();
        for (let i = 0; i < 6; ++i) {
            const hit = worldCastRayClosest(world, { x: 3 * i + 0.2, y: 1, z: 0.2 }, { x: 0, y: -2, z: 0 });
            expect(hit.hit).toBe(true);
            expect(hit.userMaterialId).toBe(BigInt(native[i + 1]));
        }
    } finally {
        destroyWorld(world);
    }
});
