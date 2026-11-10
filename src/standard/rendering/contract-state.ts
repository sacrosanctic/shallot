import type { Background } from "./contract.ts";

/** Registered fullscreen backgrounds owned by the active World. */
export const backgroundsKey = { create: () => new Map<number, Background>() };
