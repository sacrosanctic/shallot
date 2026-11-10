import { test } from "playwright/test";
import { continuousScenes } from "../src/continuous.ts";
import { capture } from "./capture.ts";

for (const id of Object.keys(continuousScenes)) {
    test(`${id} continuous look review`, async ({ page }) => {
        page.on("pageerror", (error) => {
            throw error;
        });
        await page.goto(`/?scene=${id}`);
        await page.getByRole("button", { name: "Scene", exact: true }).waitFor();
        await capture(page, `${id}-default`);
        await page.waitForTimeout(10000);
        await capture(page, `${id}-settled`);
    });
}
