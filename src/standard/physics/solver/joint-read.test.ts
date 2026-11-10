import { expect, test } from "bun:test";
import gold from "../../../../crates/physics/tests/joint_read.gold.json" with { type: "json" };
import { visitJointReaders } from "./joint-read.fixture.ts";

test("joint rotation and separation readers equal native Box3D bits", () => {
    visitJointReaders(gold, (actual, expected, label) => expect(actual, label).toBe(expected));
});
