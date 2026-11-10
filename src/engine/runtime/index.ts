/// <reference types="@webgpu/types" />

export * from "./adapter.ts";
export {
    beginComputePass,
    beginRenderPass,
    continueSubmissionFence,
    createFrameEncoder,
    dispatchWorkgroups,
    dispatchWorkgroups2,
    dispatchWorkgroups3,
    dispatchWorkgroupsIndirect,
    draw,
    drawIndexedIndirect,
    drawInstances,
    endComputePass,
    endRenderPass,
    finishFrameEncoder,
    setComputeBindGroup,
    setComputePipeline,
    setIndexBuffer,
    setRenderBindGroup,
    setRenderPipeline,
    setViewport,
    submissionFence,
    submitFrame,
} from "./allocation-site.ts";
export {
    adapterNotice,
    checkStorageBinding,
    checkTextureLimits,
    checkTgsl,
    deviceFailure,
    deviceLost,
    GpuError,
    type GpuErrorKind,
    type GpuRequirements,
    type NamedGpuRequirements,
    observeDevice,
    observedDeviceError,
    PIPELINE_COMPILE_MEASURE_PREFIX,
    PLUGIN_HOOK_MEASURE_PREFIX,
    precompile,
    precompileAll,
    precompileScope,
    rawDevice,
    requestGPU,
    type ShaderArtifact,
    stampAdapter,
    tgslCanary,
    UnsupportedError,
    validateGpu,
    type WorldGpu,
    withPipelineOwner,
} from "./gpu.ts";
export { drainLog, type GpuLog } from "./log.ts";
export { now, Runtime, readBinary, readFile, requestFrame } from "./platform.ts";
export {
    type BufferProbe,
    type BufferProbeOptions,
    type ProbeEncode,
    probeBuffer,
    probeTexture,
    type TextureProbe,
    type TextureProbeOptions,
} from "./probe.ts";
export { ReadbackPool, type ReadbackStamp } from "./readback.ts";

export { reportStartup } from "./startup.ts";
export { resizeViewport, type Viewport, Viewports } from "./viewport.ts";
