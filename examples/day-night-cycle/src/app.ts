import type { Plugin } from "@dylanebert/shallot";
import { DiagnosticsOverlayPlugin } from "@dylanebert/shallot/extras";
import { CyclePlugin } from "./cycle/index.ts";

export const AppPlugin: Plugin = {
    name: "DayNightCycleApp",
    dependencies: [CyclePlugin, DiagnosticsOverlayPlugin],
};
