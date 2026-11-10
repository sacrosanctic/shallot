import type { Plugin } from "@dylanebert/shallot";
import { DiagnosticsOverlayPlugin } from "@dylanebert/shallot/extras";
import { CityPlugin } from "./city.ts";

export const AppPlugin: Plugin = {
    name: "CityApp",
    dependencies: [CityPlugin, DiagnosticsOverlayPlugin],
};
