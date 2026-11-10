import { JointField, jointCapacity, jointField } from "../kernel/jointrecords.ts";
import type { WorldState } from "../world/world.ts";

export function jointIds(world: WorldState): number[] {
    const ids: number[] = [];
    for (let id = 0; id < jointCapacity(world); ++id)
        if (jointField(world, id, JointField.setIndex) !== -1) ids.push(id);
    return ids;
}
