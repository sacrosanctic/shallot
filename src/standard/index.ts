export {
    Body,
    BodyMotionLock,
    BodyType,
    DistanceJoint,
    FilterJoint,
    MotorJoint,
    ParallelJoint,
    PrismaticJoint,
    RevoluteJoint,
    ShapeKind,
    SphericalJoint,
    WeldJoint,
    WheelJoint,
} from "../core/physics/index.ts";
export { composeGlobalTransform, GlobalTransform, Transform } from "../core/transform/index.ts";
export { loadClip, StandardAudioPlugin } from "./audio/index.ts";
export {
    type SplashOptions,
    type SplashProfile,
    shallotDark,
} from "./loading/index.ts";
export {
    applyAngularImpulse,
    applyForce,
    applyForceToCenter,
    applyLinearImpulse,
    applyLinearImpulseToCenter,
    applyTorque,
    Character,
    CharacterPlugin,
    GroundState,
    hashPhysics,
    StandardPhysicsPlugin,
    StepPhysicsSystem,
    type StepProfile,
    setAngularVelocity,
    setAwake,
    setLinearVelocity,
    setTargetTransform,
    setTransform,
    shapeEdges,
    shapeMesh,
} from "./physics/index.ts";
export {
    AlphaMode,
    AlphaModeCode,
    applyPbrLighting,
    BaseColor,
    CameraBackground,
    CullModeCode,
    DirectionalLightShadowMap,
    extendedMaterial,
    MAX_CASCADES,
    MAX_DIRECTIONAL_LIGHTS,
    MAX_POINT_CASTERS,
    Materials,
    MeshMaterial,
    MeshRenderPlugin,
    PbrInput,
    PointShadows,
    type ProducerTable,
    pbrInputFromStandardMaterial,
    registerProducerTable,
    ScreenSpaceAmbientOcclusion,
    ScreenSpaceAmbientOcclusionPlugin,
    ScreenSpaceAmbientOcclusionQualityLevel,
    StandardMaterial,
    StandardRenderer,
    StandardRenderingPlugin,
    SurfaceOcclusion,
    surfaceOcclusion,
    VertexMaterialType,
} from "./rendering/index.ts";

import { BrowserInputPlugin, InputPlugin } from "../core/input/index.ts";
import { CorePipelinePlugin, RenderingPlugin } from "../core/rendering/index.ts";
import type { Plugin } from "../engine/index.ts";
import { setDefaultLoading, setDefaultPlugins } from "../engine/app/index.ts";
import { shallotDark } from "./loading/index.ts";
import { MeshRenderPlugin, StandardRenderingPlugin } from "./rendering/index.ts";

export const DEFAULT_PLUGINS: readonly Plugin[] = [
    InputPlugin,
    BrowserInputPlugin,
    RenderingPlugin,
    MeshRenderPlugin,
    StandardRenderingPlugin,
    CorePipelinePlugin,
];

setDefaultPlugins(DEFAULT_PLUGINS);
setDefaultLoading(shallotDark);
