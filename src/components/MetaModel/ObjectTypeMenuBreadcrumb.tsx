import React, { useMemo } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@docusaurus/Link';
import type { VisibleCamelizedObjectTypeNames } from '@site/surfy';
import { objectTypePathMapping } from '@site/src/metaModel/metamodel.json.helper';
import enSidebar from '../../../i18n/en/docusaurus-plugin-content-docs-entities/current.json';
import frSidebar from '../../../i18n/fr/docusaurus-plugin-content-docs-entities/current.json';
import { useCurrentLocale, useTranslations } from '../Translations/translations';
import type { SupportedLanguageCode } from '../Translations/translations.models';

type SidebarPack = Record<string, { message: string; description?: string }>;

const sidebarByLocale: Record<SupportedLanguageCode, SidebarPack> = {
    fr: frSidebar as SidebarPack,
    en: enSidebar as SidebarPack,
};

const BREADCRUMB_ROOT_KEY = 'breadcrumb.entitiesRoot';

function sidebarCategoryLabel(locale: SupportedLanguageCode, slug: string): string {
    const pack = sidebarByLocale[locale] ?? sidebarByLocale.fr;
    const key = `sidebar.help-sidebar.category.${slug}`;
    const entry = pack[key];
    return entry?.message ?? slug;
}

/**
 * Breadcrumb matching the Surfy app menu hierarchy: uses `objectTypePathMapping` (same tree as
 * `getNewMenu()` documentation generation) and sidebar category labels.
 */
export function ObjectTypeMenuBreadcrumb(props: { code: VisibleCamelizedObjectTypeNames }) {
    const { code } = props;
    const entitiesTranslations = useTranslations();
    const currentLocale = useCurrentLocale();

    const directoryPath = objectTypePathMapping[code];
    const items = useMemo(() => {
        if (!directoryPath || typeof directoryPath !== 'string') {
            return null;
        }
        const segments = directoryPath.replace(/^\//, '').split('/').filter(Boolean);
        if (segments.length === 0 || segments[0] !== 'entities') {
            return null;
        }

        const localePrefix = currentLocale === 'fr' ? '' : `/${currentLocale}`;
        const rootPack = sidebarByLocale[currentLocale] ?? sidebarByLocale.fr;
        const rootLabel = rootPack[BREADCRUMB_ROOT_KEY]?.message ?? 'Références';

        const nodes: React.ReactNode[] = [
            <Link key="entities-root" color="inherit" to={`${localePrefix}/entities/intro`}>
                {rootLabel}
            </Link>,
        ];

        for (let i = 1; i < segments.length; i++) {
            const slug = segments[i];
            const hrefPath = `/${segments.slice(0, i + 1).join('/')}`;
            const href = `${localePrefix}${hrefPath}`;
            const label = sidebarCategoryLabel(currentLocale, slug);
            nodes.push(
                <Link key={href} color="inherit" to={href}>
                    {label}
                </Link>,
            );
        }

        const otLabel = entitiesTranslations.objectTypeTranslations[code]?.label ?? code;
        nodes.push(
            <Typography key="current" color="text.primary" component="span" variant="body2" sx={{ fontWeight: 600 }}>
                {otLabel}
            </Typography>,
        );

        return nodes;
    }, [code, currentLocale, directoryPath, entitiesTranslations]);

    if (!items) {
        return null;
    }

    return (
        <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb" separator="›">
            {items}
        </Breadcrumbs>
    );
}
