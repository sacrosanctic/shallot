export type { Manifold, ManifoldPoint } from "../collision/contact.ts";
export type { ShapeProxy } from "../collision/distance.ts";
export {
    type CollisionPlane,
    clipVector,
    type PlaneResult,
    type PlaneSolverResult,
    solvePlanes,
} from "../collision/mover.ts";
export type { AABB, Mat3, Pos, Quat, Transform, Vec3, WorldTransform } from "../common/records.ts";
export {
    type BodyDef,
    BodyType,
    type Capacity,
    defaultBodyDef,
    defaultFilter,
    defaultQueryFilter,
    defaultShapeDef,
    defaultSurfaceMaterial,
    defaultWorldDef,
    type Filter,
    type MotionLocks,
    type QueryFilter,
    type ShapeDef,
    ShapeType,
    type SurfaceMaterial,
    type WorldDef,
} from "../common/types.ts";
export { type InitOptions, init, shutdown, threads } from "../kernel/kernel.ts";
export type { TreeStats } from "../kernel/treecolumns.ts";
export {
    createCone,
    createCylinder,
    createHull,
    createRock,
    makeBoxHull,
    makeCubeHull,
    makeOffsetBoxHull,
    makeScaledBoxHull,
    makeTransformedBoxHull,
} from "../shapes/build-hull.ts";
export {
    type CompoundCapsuleDef,
    type CompoundData,
    type CompoundDef,
    type CompoundHullDef,
    type CompoundMeshDef,
    type CompoundSphereDef,
    createCompound,
} from "../shapes/compound.ts";
export type { Capsule, MassData, Sphere } from "../shapes/geometry.ts";
export {
    createGrid,
    createHeightField,
    createWave,
    HEIGHT_FIELD_HOLE,
    type HeightFieldData,
    type HeightFieldDef,
} from "../shapes/heightfield.ts";
export type { HullData } from "../shapes/hull.ts";
export { computeCapsuleMass, computeHullMass } from "../shapes/mass.ts";
export {
    createBoxMesh,
    createGridMesh,
    createHollowBoxMesh,
    createMesh,
    createTorusMesh,
    createWaveMesh,
    type Mesh,
    type MeshData,
    type MeshDef,
    MeshEdgeFlags,
} from "../shapes/mesh.ts";
export { JointType } from "../solver/joint.ts";
export { DebugColor, type DebugDraw, defaultDebugDraw } from "../world/draw.ts";
export { hashWorldState } from "../world/hash.ts";
export type { StepProfile } from "../world/profile.ts";
export type { Counters, WorldState } from "../world/world.ts";
export type {
    BaseJointConfig,
    CustomFilterCallback,
    DistanceJointConfig,
    MotorJointConfig,
    ParallelJointConfig,
    PreSolveCallback,
    PrismaticJointConfig,
    RevoluteJointConfig,
    SphericalJointConfig,
    WeldJointConfig,
    WheelJointConfig,
} from "./config.ts";
export { type PhysicsSnapshot, restore, snapshot } from "./snapshot.ts";
