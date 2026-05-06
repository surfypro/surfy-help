import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import type { SupportedLanguageCode } from './translations.models';

/** Docusaurus locale for URL prefixes (must stay Docusaurus-specific; labels use `useTranslation` + `translations/i18n-ln`). */
export function useCurrentLocale() {
    const context = useDocusaurusContext();
    return context.i18n.currentLocale as SupportedLanguageCode;
}
