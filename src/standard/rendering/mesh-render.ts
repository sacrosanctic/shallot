import { MeshPlugin } from "../../core/mesh/index.ts";
import { RenderingPlugin } from "../../core/rendering/index.ts";
import type { Plugin } from "../../engine/index.ts";
import { MeshMaterial } from "./material.ts";
import {
    initializeMeshPreprocess,
    initMeshPreprocess,
    MeshPairingSystem,
    MeshPreprocessSystem,
    warmMeshPreprocess,
} from "./preprocess.ts";

/** Packs mesh instances into per-view, per-surface indirect draws. */
export const MeshRenderPlugin: Plugin = {
    gpu: {},
    name: "MeshRender",
    systems: [MeshPairingSystem, MeshPreprocessSystem],
    components: [MeshMaterial],
    dependencies: [RenderingPlugin, MeshPlugin],
    initialize(world) {
        initializeMeshPreprocess(world);
        initMeshPreprocess(world);
    },
    warm: warmMeshPreprocess,
};
