import config from "./playwright.config.ts";

// Run with SHALLOT_CAPTURE_DIR=<directory> bunx playwright test -c examples/physics/capture.config.ts.
export default { ...config, testMatch: "**/*.capture.ts" };
