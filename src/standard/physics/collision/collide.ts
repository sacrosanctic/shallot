import { kernel, kernelState, rethrowQueryError } from "../kernel/kernel.ts";
import type { WorldState } from "../world/world.ts";

/** Run user material callbacks at the kernel's post-collide serial point. */
export function mixContacts(world: WorldState): void {
    const state = kernelState(world.ecsState);
    const previous = state.materialWorld;
    state.materialWorld = world;
    try {
        kernel(world.ecsState).mixContacts(world.worldId);
        // The step reports callback errors only after Rust and host finalization have completed.
        if (state.collisionWorld === null) rethrowQueryError(world.ecsState);
    } finally {
        state.materialWorld = previous;
    }
}
