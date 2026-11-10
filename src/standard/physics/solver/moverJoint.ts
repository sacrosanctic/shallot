import type { Vec3 } from "../common/records.ts";
import { kernel } from "../kernel/kernel.ts";
import type { WorldState } from "../world/world.ts";
import { finishJointCreation, type Joint, type JointDef, writeJointDefinition } from "./joint.ts";

/** b3MoverJointDef, with resolved body handles. */
export type MoverJointDef = { base: JointDef; linearVelocity: Vec3; maxForce: number };
export function defaultMoverJointDef(base: JointDef): MoverJointDef {
    return { base, linearVelocity: { x: 0, y: 0, z: 0 }, maxForce: 0 };
}
export function createMoverJoint(world: WorldState, def: MoverJointDef): { joint: Joint } {
    const joint = kernel(world.ecsState).jointCreateMover(
        world.worldId,
        writeJointDefinition(world, def.base),
        def.linearVelocity.x,
        def.linearVelocity.y,
        def.linearVelocity.z,
        def.maxForce,
    );
    return finishJointCreation(world, def.base, joint);
}
