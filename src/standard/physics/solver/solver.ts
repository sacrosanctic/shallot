import { mixContacts } from "../collision/collide.ts";
import { advanceStep, kernelState } from "../kernel/kernel.ts";
import type { WorldState } from "../world/world.ts";

/** Run serial user callbacks between kernel continuations of b3World_Step. */
export function solve(world: WorldState): void {
    const state = kernelState(world.ecsState);
    state.collisionWorld = world;
    state.materialWorld = world;
    try {
        let code: number;
        while ((code = advanceStep(world.ecsState)) !== 0) {
            if (code === 2) mixContacts(world);
            else throw new Error(`physics: unknown step yield ${code}`);
        }
    } finally {
        state.collisionWorld = null;
        state.materialWorld = null;
    }
}
