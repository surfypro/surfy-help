import React from "react";
import { Box, Fade, Paper, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import entitiesPath from '../../metaModel/entities.paths.json';
import { useTranslations } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";



export function ObjectType(props: { code: string }) {
    const entitiesTranslations = useTranslations();
    const { code:objectTypeName } = props;
    // const [objectTypeName, name] = code.split(':');

    const directoryPath = entitiesPath.objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const translations: { label: string, description: string | null } = entitiesTranslations.objectTypeTranslations[objectTypeName];
    // const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    const href = `${directoryPath}/${toDocumentationLinkString(objectTypeName)}`;

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
