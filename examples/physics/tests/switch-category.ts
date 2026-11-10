import { test } from "bun:test";
import { categories } from "../src/scenes.ts";
import { manualParityScenes } from "./manual-parity.ts";
import { expectSwitchesEqualFresh } from "./switch.ts";

export function testCategorySwitches(name: string): void {
    const category = categories.find((category) => category.name === name);
    if (!category) throw new Error(`Unknown scene category: ${name}`);
    test(`switching ${name} equals fresh scenes through 600 steps after a changed, grabbed Bridge`, () =>
        expectSwitchesEqualFresh(
            category.scenes
                .map((scene) => scene.id)
                // Bridge and Dominoes have separate files; manual scenes switch in their oracle.
                .filter(
                    (scene) =>
                        scene !== "bridge" &&
                        scene !== "dominoes" &&
                        !manualParityScenes.has(scene),
                ),
        ));
}
