/// <reference types="@webgpu/types" />

export { ShadowFilteringMethod, ShadowFilteringMethodMode } from "../../core/rendering";
export {
    pointAtlasView,
    pointShadowCasters,
    pointShadowRects,
    shadowSampler,
    sunShadowParams,
    sunShadowView,
} from "./atlas.ts";
export { Clusters, clusterCell, LightClusters, LightCull } from "./cluster.ts";
export type { Background, BackgroundHandle } from "./contract.ts";
export { BackgroundContext, Backgrounds, backgroundLayout, registerBackground } from "./contract.ts";
export {
    engineLayout,
    lit,
    prepassDepth,
    prepassNormal,
    SurfaceOcclusion,
    surfaceOcclusion,
} from "./engine.ts";
export type { FogSource } from "./fog.ts";
export { FogInput, registerFogSource } from "./fog.ts";
export {
    CameraBackground,
    preparePipelines,
    ShadowMapSystem,
    StandardRenderer,
    StandardRenderingPlugin,
} from "./forward.ts";
export type { IndirectLightSource } from "./indirect.ts";
export {
    IndirectLightInput,
    indirectLight,
    indirectLightSlot,
    indirectLightSources,
    registerIndirectLightSource,
} from "./indirect.ts";
export { type InstanceData, instanceData } from "./instance-data.ts";
export {
    DirectionalLightGpu,
    distanceAttenuation,
    Lighting,
    LightingGpu,
    MAX_DIRECTIONAL_LIGHTS,
    PointLightGpu,
    spotFactor,
} from "./lighting.ts";
export {
    AlphaMode,
    AlphaModeCode,
    AlphaPipelineKey,
    CullModeCode,
    MaterialPlugin,
    Materials,
    MaterialTypes,
    MeshMaterial,
    materialType,
    materialTypeId,
    StandardMaterial,
    VertexMaterialType,
} from "./material.ts";
export {
    BaseColor,
    MeshInstanceInput,
    StandardMaterialInput,
    type TextureTransform,
} from "./material-data.ts";
export type {
    MaterialBinding,
    MaterialFragmentFn,
    MaterialHandle,
    MaterialLayout,
    MaterialRowOptions,
    MaterialSource,
    MaterialType,
    MaterialVertexFn,
} from "./material-type.ts";
export { alphaPipelineKey, MaterialAssets, materialLayout, pipelineKey } from "./material-type.ts";
export { MeshRenderPlugin } from "./mesh-render.ts";
export { MeshPreprocessSystem, meshInstanceTable } from "./preprocess.ts";
export { type ProducerTable, registerProducerTable } from "./producer-table.ts";
export type { Draw } from "./registry.ts";
export { DrawIndexedIndirect, Draws } from "./registry.ts";
export {
    pointCastersSchema,
    pointShadowRef,
    SunShadow,
    sampleSunShadow,
    tileRectsSchema,
} from "./shade.ts";
export {
    cascadeComboEids,
    DirectionalLightShadowMap,
    MAX_CASCADES,
    MAX_POINT_CASTERS,
    PointShadows,
    pointComboEids,
} from "./shadows.ts";
export {
    ScreenSpaceAmbientOcclusion,
    ScreenSpaceAmbientOcclusionPlugin,
    ScreenSpaceAmbientOcclusionQualityLevel,
} from "./ssao.ts";
export {
    applyPbrLighting,
    type ExtensionLayout,
    extendedMaterial,
    extensionLayout,
    PbrInput,
    pbrInputFromMaterial,
    pbrInputFromStandardMaterial,
} from "./standard-material.ts";
