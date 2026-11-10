import config from "./playwright.config.ts";
export default { ...config, testMatch: "**/capture.oracle.ts" };
