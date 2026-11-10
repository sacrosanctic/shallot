import { fileURLToPath } from "node:url";
import config from "../../vite.config.ts";

export default { ...config, root: fileURLToPath(new URL("../../", import.meta.url)) };
