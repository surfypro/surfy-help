import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import fr from '../../../src/metaModel/entities.translations.fr.json';
import en from '../../../src/metaModel/entities.translations.en.json';

const locales = { fr, en };

export function useTranslations(){
    const context = useDocusaurusContext();
    const locale = context.i18n.currentLocale;
    const entitiesTranslations = locales[locale][locale];
    return entitiesTranslations;
}