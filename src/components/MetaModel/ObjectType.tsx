import React from "react";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useTranslations, useCurrentLocale } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";
import { VisibleCamelizedObjectTypeNames } from '@site/surfy'
import { objectTypePathMapping, objectTypePathMappingEn } from "@site/src/metaModel/metamodel.json.helper";

export function ObjectType(props: { code: VisibleCamelizedObjectTypeNames }) {
    const entitiesTranslations = useTranslations();
    const currentLocale = useCurrentLocale();
    const { code: objectTypeName } = props;

    // Use the appropriate mapping based on locale
    const pathMapping = currentLocale === 'fr' ? objectTypePathMapping : objectTypePathMappingEn;
    const directoryPath = pathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const translations: { label: string, description: string | null } = entitiesTranslations.objectTypeTranslations[objectTypeName];

    // Add locale prefix for non-default locales
    const localePrefix = currentLocale === 'fr' ? '' : `/${currentLocale}`;
    const href = `${localePrefix}${directoryPath}/${toDocumentationLinkString(objectTypeName)}`;

    const Title = <Paper sx={{ p: 2 }}>
        <Box style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <h2 >{translations.label}</h2>
        </Box>
        <Box >{translations.description}</Box>
    </Paper >;
    return <HelpTooltipStyled title={Title} TransitionComponent={Fade} disableInteractive={true}>
        <a href={href}>{translations.label}</a>
    </HelpTooltipStyled>
}
