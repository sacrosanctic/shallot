import type { BodyType, Filter } from "../common/types.ts";
import type { WorldState } from "../world/world.ts";
import { BodyField, bodyField } from "./bodyrecords.ts";
import { kernel } from "./kernel.ts";
import { SHAPE_STRIDE } from "./shapecolumns.ts";

export function bodyType(world: WorldState, id: number): BodyType {
    return bodyField(world, id, BodyField.type) as BodyType;
}
export function shapeBodyId(world: WorldState, id: number): number {
    return world.shapeStore.shapeU[id * SHAPE_STRIDE + 1] | 0;
}
export function shapeSensorIndex(world: WorldState, id: number): number {
    return world.shapeStore.shapeU[id * SHAPE_STRIDE + 4] | 0;
}
export function writeShapeFilterValue(
    world: WorldState,
    id: number,
    filter: Filter,
    invokeContacts = false,
): void {
    const k = kernel(world.ecsState);
    if (invokeContacts)
        k.shapeSetFilter64(
            world.worldId,
            id,
            filter.categoryBits,
            filter.maskBits,
            filter.groupIndex,
        );
    else
        k.shapeFilterWrite64(
            world.worldId,
            id,
            filter.categoryBits,
            filter.maskBits,
            filter.groupIndex,
        );
}
