/// <reference types="@webgpu/types" />

// the extras barrel lists each module's author names explicitly; extension names stay on the module.

export { Bloom, BloomCompositeMode, BloomPlugin } from "./bloom/index.ts";
export {
    ChromaticAberration,
    EffectStackPlugin,
    LensDistortion,
    Vignette,
    VignettePlugin,
} from "./effect-stack/index.ts";
export {
    Fog,
    FogPlugin,
    fogReadBindGroup,
    fogReadLayout,
    NoFog,
    readFog,
    readFogInScatter,
} from "./fog/index.ts";
export {
    deformationBindings,
    deformationVertex,
    type Gltf,
    type GltfPlacement,
    GltfPlugin,
    type GltfPrimitive,
    type GltfSceneInstance,
    loadGltfScene,
    MorphedMesh,
    poseGltfScene,
    SkinnedMaterial,
    SkinnedMesh,
    SkinPalette,
    spawnGltfScene,
    VertexDeformation,
} from "./gltf/index.ts";
export {
    drawArrow,
    drawLine,
    drawWireBox,
    Gizmo,
    GizmoAsset,
    LinesPlugin,
    registerGizmo,
} from "./lines/index.ts";
export {
    Orbit,
    OrbitMode,
    OrbitPlugin,
} from "./orbit/index.ts";
export {
    Outline,
    OutlinePlugin,
} from "./outline/index.ts";
export {
    DiagnosticsOverlayPlugin,
    ProfilePlugin,
    profilerBounds,
    showProfiler,
} from "./profile/index.ts";
export {
    Sky,
    SkyPlugin,
    skyBackgroundHandle,
} from "./sky/index.ts";
export {
    Sprite,
    SpriteAlphaMode,
    SpriteFill,
    SpritePlugin,
} from "./sprite/index.ts";
export {
    Content,
    Fonts,
    internText,
    Justify,
    registerFont,
    Text,
    TextPlugin,
} from "./text/index.ts";
