import type { Plugin } from "../../engine/index.ts";
import { MeshInstance } from "./instance.ts";

export { MeshInstance } from "./instance.ts";
export { capsule, cube, sphere } from "./primitives.ts";
export { generateTangents } from "./tangents.ts";
export {
    decodeColor,
    decodePos,
    decodeTangent,
    decodeUv,
    decodeUv1,
    encodePos,
    encodeTangent,
    encodeUv,
    MeshQuant,
    meshIdOf,
    packTangent,
    posQuantPackWgsl,
    posQuantWgsl,
} from "./vertex.ts";

import {
    clearMeshes,
    flushMeshes,
    initializeMeshState,
    PrepareMeshesSystem,
    setDefaultMeshHandle,
} from "./mesh.ts";
import { initMeshes } from "./primitives.ts";

export type { Mesh, MeshBinding, MeshData, MeshHandle, MeshIndex } from "./mesh.ts";
export { flushMeshes, Meshes, meshResourcesKey } from "./mesh.ts";

/**
 * Owns this world's mesh registry and GPU storage, including the default unit cube. Add
 * other primitive geometry explicitly. Meshes added during initialization pack at warm before
 * the first draw; later ones pack at the start of the next draw group. `Meshes.add`
 * refuses before this plugin initializes.
 */
export const MeshPlugin: Plugin = {
    gpu: {},
    name: "Mesh",
    components: [MeshInstance],
    systems: [PrepareMeshesSystem],
    initialize(world) {
        initializeMeshState(world);
        clearMeshes(world);
        setDefaultMeshHandle(world, initMeshes(world));
    },
    warm: flushMeshes,
};
