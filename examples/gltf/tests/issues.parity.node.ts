import { setDefaultTimeout } from "bun:test";
import { TIMEOUT } from "@dylanebert/shallot/testing";
import { parity } from "./parity.ts";

setDefaultTimeout(TIMEOUT.node);
parity("issues");
