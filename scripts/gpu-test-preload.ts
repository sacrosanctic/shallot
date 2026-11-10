import { shallot } from "@dylanebert/shallot/bun";
import { plugin } from "bun";

plugin(shallot({ root: import.meta.dirname }));

const { installConsoleGuard } = await import("./test-console.ts");
installConsoleGuard();
