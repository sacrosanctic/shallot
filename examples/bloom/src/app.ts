import type { Plugin } from "@dylanebert/shallot";
import { DiagnosticsOverlayPlugin } from "@dylanebert/shallot/extras";
import { ScenePlugin } from "./scene.ts";

export const AppPlugin: Plugin = {
    name: "BloomApp",
    dependencies: [ScenePlugin, DiagnosticsOverlayPlugin],
};
