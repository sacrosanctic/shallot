import { setDefaultTimeout } from "bun:test";
import { TIMEOUT } from "@dylanebert/shallot/testing";
import { testCategorySwitches } from "./switch-category.ts";

setDefaultTimeout(TIMEOUT.node);

testCategorySwitches("Mesh");
