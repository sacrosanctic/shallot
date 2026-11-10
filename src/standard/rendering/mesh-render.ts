import { MeshPlugin } from "../../core/mesh";
import { RenderingPlugin } from "../../core/rendering";
import type { Plugin } from "../../engine";
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
