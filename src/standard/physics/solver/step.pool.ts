import { init } from "../kernel/kernel.ts";

// Initialize before corpus helpers can lazily acquire the standalone kernel.
await init(undefined, { threads: 4 });
