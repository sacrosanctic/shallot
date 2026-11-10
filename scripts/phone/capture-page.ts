import { captureFrame } from "../../src/core/rendering/capture.ts";

Object.assign(globalThis, {
    shallotCaptureFrame(canvas: HTMLCanvasElement) {
        return captureFrame(canvas);
    },
});
