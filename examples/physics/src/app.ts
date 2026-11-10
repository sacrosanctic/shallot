import { type Plugin, StandardPhysicsPlugin } from "@dylanebert/shallot";
import {
    DiagnosticsOverlayPlugin,
    LinesPlugin,
    OrbitPlugin,
    TextPlugin,
} from "@dylanebert/shallot/extras";
import { PhysicsWorldDefinition } from "@dylanebert/shallot/standard/physics";
import { BenchmarkSamplePlugin } from "./benchmarks.ts";
import { BodySamplePlugin } from "./bodies.ts";
import { CharacterSamplePlugin } from "./character.ts";
import { CollisionPlugin } from "./collision.ts";
import { CollisionDebugPlugin } from "./collision-debug.ts";
import { CollisionGeometryPlugin } from "./collision-geometry.ts";
import { ContinuousSamplePlugin } from "./continuous.ts";
import { DeterminismPlugin } from "./determinism.ts";
import { DynamicMoverPlugin } from "./dynamic-mover-scene.ts";
import { EventSamplePlugin, SampleInputPlugin } from "./events.ts";
import { GeometricMoverPlugin } from "./geometric-mover.ts";
import { GeometryPlugin } from "./geometry.ts";
import { GrabPlugin } from "./grab.ts";
import { JointSamplePlugin } from "./joints.ts";
import { ManifoldPlugin } from "./manifold.ts";
import { ShapeMaterialPlugin } from "./material.ts";
import { MeshSamplePlugin } from "./mesh.ts";
import { RagdollPlugin } from "./ragdoll.ts";
import { RigidBodyPlugin } from "./rigid-body.ts";
import { RobustnessSamplePlugin } from "./robustness.ts";
import { ShapesSamplePlugin } from "./shapes.ts";
import { StackingSamplePlugin } from "./stacking.ts";
import { TreeBenchmarkPlugin } from "./tree.ts";
import { createViewer } from "./view.ts";
import { VillagePlugin } from "./village.ts";
import { WorldSamplePlugin } from "./world.ts";

export const Viewer = { create: createViewer };

export const AppPlugin: Plugin = {
    name: "PhysicsApp",
    initialize(world) {
        world.resource(PhysicsWorldDefinition).maximumMemory = 4 * 1024 ** 3;
    },
    dependencies: [
        StandardPhysicsPlugin,
        ShapeMaterialPlugin,
        EventSamplePlugin,
        BenchmarkSamplePlugin,
        StackingSamplePlugin,
        RagdollPlugin,
        CollisionPlugin,
        CollisionDebugPlugin,
        CollisionGeometryPlugin,
        GeometryPlugin,
        ManifoldPlugin,
        MeshSamplePlugin,
        ShapesSamplePlugin,
        JointSamplePlugin,
        BodySamplePlugin,
        CharacterSamplePlugin,
        ContinuousSamplePlugin,
        GeometricMoverPlugin,
        DynamicMoverPlugin,
        VillagePlugin,
        RigidBodyPlugin,
        RobustnessSamplePlugin,
        WorldSamplePlugin,
        DeterminismPlugin,
        TreeBenchmarkPlugin,

        SampleInputPlugin,
        TextPlugin,
        OrbitPlugin,
        LinesPlugin,
        GrabPlugin,
        {
            name: "SampleViewer",
            dependencies: [OrbitPlugin],
            initialize(world) {
                world.resource(Viewer);
            },
        },
        DiagnosticsOverlayPlugin,
    ],
};
