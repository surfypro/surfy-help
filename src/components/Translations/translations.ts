import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import fr from '../../../src/metaModel/entities.translations.fr.json';
import en from '../../../src/metaModel/entities.translations.en.json';
import { LocalFiles, SupportedLanguageCode } from "./translations.models";


const locales: LocalFiles = { ...fr, ...en };


export function useCurrentLocale() {
    const context = useDocusaurusContext();
    const currentLocale = context.i18n.currentLocale as SupportedLanguageCode;
    return currentLocale;
}

export function useTranslations() {
    const currentLocale = useCurrentLocale();
    const entitiesTranslations = locales[currentLocale];
    return entitiesTranslations;
}