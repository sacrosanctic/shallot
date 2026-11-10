import { CharacterPlugin, PhysicsPlugin, type Plugin } from "@dylanebert/shallot";
import { Demo } from "./demo.ts";
import { PlayerPlugin } from "./player.ts";

export const APP_PLUGINS: Plugin[] = [PhysicsPlugin, CharacterPlugin, PlayerPlugin, Demo];
