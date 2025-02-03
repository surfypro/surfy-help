import { CamelizedObjectTypeNames } from "@site/surfy";

export type ObjectTypePathMapping = Record<CamelizedObjectTypeNames, string | null>;
export type MetaModelEntitiesPath = { objectTypeMapping: ObjectTypePathMapping }; 