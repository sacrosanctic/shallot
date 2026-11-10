import type { Plugin } from "@dylanebert/shallot";
import { DiagnosticsOverlayPlugin } from "@dylanebert/shallot/extras";
import { DemoPlugin } from "./demo.ts";
export const AppPlugin: Plugin = {
    name: "SnowTrailsApp",
    dependencies: [DemoPlugin, DiagnosticsOverlayPlugin],
};
