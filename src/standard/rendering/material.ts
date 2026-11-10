import { MeshMaterial, StandardMaterial, StandardMaterialInput } from "./material-data.ts";
import { Materials, VertexMaterialType } from "./standard-material.ts";

export type { MaterialHandle, MaterialType } from "./material-type.ts";
export {
    AlphaMode,
    AlphaModeCode,
    AlphaPipelineKey,
    CullModeCode,
    MaterialPlugin,
    MaterialTypes,
    materialType,
    materialTypeId,
} from "./material-type.ts";
export { Materials, MeshMaterial, StandardMaterial, StandardMaterialInput, VertexMaterialType };
