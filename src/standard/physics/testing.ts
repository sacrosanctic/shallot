import type { World } from "../../engine";
import {
    type BodyDef,
    defaultBodyDef,
    defaultShapeDef,
    defaultWorldDef,
    type ShapeDef,
    type WorldDef,
} from "./common/types.ts";
import { step } from "./solver/step.ts";
import { createBody } from "./world/body.ts";
import type { WorldId, WorldState } from "./world/world.ts";
import { createWorld, destroyWorld, getWorld } from "./world/world.ts";

/** Create a direct world-state fixture for physics tests and native parity oracles. */
export function createTestWorld(def: Partial<WorldDef> = {}, owner?: World): WorldState {
    const id: WorldId = createWorld(owner, { ...defaultWorldDef(), ...def });
    return getWorld(id)!;
}

/** Create a body fixture and return its kernel index. */
export function createTestBody(world: WorldState, def: Partial<BodyDef> = {}): number {
    return createBody(world, { ...defaultBodyDef(), ...def });
}

/** Destroy a direct world-state fixture. */
export function destroyTestWorld(world: WorldState): void {
    destroyWorld(world);
}

/** Step a direct world-state fixture. */
export function stepTestWorld(world: WorldState, timeStep: number, subStepCount = 4): void {
    step(world, timeStep, subStepCount);
}

/** Merge a partial authored shape definition with the Box3D default. */
export function testShapeDef(def: Partial<ShapeDef> = {}): ShapeDef {
    return { ...defaultShapeDef(), ...def };
}
