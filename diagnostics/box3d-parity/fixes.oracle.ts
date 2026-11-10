import { expect, test } from "bun:test";
import { BodyType } from "../../src/core/physics/index.ts";
import { init } from "../../src/standard/physics/api/index.ts";
import { BodyField, bodyField } from "../../src/standard/physics/kernel/bodyrecords.ts";
import { simFlags } from "../../src/standard/physics/kernel/bodycolumns.ts";
import { createSphereShape } from "../../src/standard/physics/shapes/shape.ts";
import { createFilterJoint, defaultJointDef } from "../../src/standard/physics/solver/joint.ts";
import { createTestBody, createTestWorld, destroyTestWorld, stepTestWorld, testShapeDef } from "../../src/standard/physics/testing.ts";
import { BodyFlags, BodyProperty, bodyGetProperty, bodySetProperty, getBodySim } from "../../src/standard/physics/world/body.ts";
import { hashWorldState } from "../../src/standard/physics/world/hash.ts";
import { nativeSseOutput } from "./native-evidence.ts";

await init(undefined, { threads: 0 });
const native = nativeSseOutput("fixes.c", "").trim().split("\n");
const sphere = { center: { x: 0, y: 0, z: 0 }, radius: 0.5 };
const hash = (world: ReturnType<typeof createTestWorld>) => hashWorldState(world).toString(16).padStart(16, "0");

test("non-default safetyFactor and its live setter control continuous-collision fast-body selection", () => {
    const world = createTestWorld({ gravity: { x: 0, y: 0, z: 0 }, enableSleep: false });
    try {
        const body = createTestBody(world, { type: BodyType.Dynamic, linearVelocity: { x: 1, y: 0, z: 0 }, safetyFactor: 0.01 });
        createSphereShape(world, body, testShapeDef(), sphere);
        for (let i = 0; i < 3; ++i) {
            if (i === 1) bodySetProperty(world, body, BodyProperty.safetyFactor, 0.5);
            if (i === 2) bodySetProperty(world, body, BodyProperty.safetyFactor, 0.01);
            expect(bodyGetProperty(world, body, BodyProperty.safetyFactor)).toBe(Math.fround(i === 1 ? 0.5 : 0.01));
            stepTestWorld(world, 1 / 60, 4);
            const fast = Number((simFlags(world, getBodySim(world, body)) & BodyFlags.isFast) !== 0);
            expect(`${fast} ${hash(world)}`).toBe(native[i]!);
        }
    } finally { destroyTestWorld(world); }
});

test("creating a non-colliding joint over touching bodies removes contacts before moving solver arrays", () => {
    const world = createTestWorld({ gravity: { x: 0, y: 0, z: 0 }, enableSleep: false });
    try {
        const a = createTestBody(world);
        createSphereShape(world, a, testShapeDef(), sphere);
        const b = createTestBody(world, { type: BodyType.Dynamic, position: { x: 0, y: 0.9, z: 0 } });
        createSphereShape(world, b, testShapeDef(), sphere);
        stepTestWorld(world, 1 / 60, 4);
        expect(String(bodyField(world, b, BodyField.contactCount))).toBe(native[3]!);
        createFilterJoint(world, { ...defaultJointDef(), bodyIdA: a, bodyIdB: b });
        expect(String(bodyField(world, b, BodyField.contactCount))).toBe(native[4]!);
        stepTestWorld(world, 1 / 60, 4);
        expect(hash(world)).toBe(native[5]!);
    } finally { destroyTestWorld(world); }
});
