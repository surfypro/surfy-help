import type { JupLanguageCode } from '../../../surfy/src/core/i18n/i18n.models';

/** Locales the Docusaurus help site builds (sidebar JSON + URL prefix logic). */
export type SupportedLanguageCode = Extract<JupLanguageCode, 'fr' | 'en'>;
