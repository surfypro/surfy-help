
import { JupLanguageCode, CamelizedObjectTypeNames } from "@site/surfy";

export type SupportedLanguageCode = Extract<JupLanguageCode, 'fr' | 'en'>;

type ObjectTypeTranslations = Record<CamelizedObjectTypeNames, { label: string, description: string | null }>;
type PropertyTypeTranslations = Record<CamelizedObjectTypeNames, Record<string, { label: string, description: string | null }>>;

interface ITranslations {
    objectTypeTranslations: ObjectTypeTranslations;
    propertyTypeTranslations: PropertyTypeTranslations;
}

export type LocalFiles = Record<SupportedLanguageCode, ITranslations>;
