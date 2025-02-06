import React from "react";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useTranslations } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";
import { VisibleCamelizedObjectTypeNames } from '@site/surfy'
import { objectTypePathMapping } from "@site/src/metaModel/metamodel.json.helper";

export function ObjectType(props: { code: VisibleCamelizedObjectTypeNames }) {
    const entitiesTranslations = useTranslations();
    const { code: objectTypeName } = props;

    const directoryPath = objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const translations: { label: string, description: string | null } = entitiesTranslations.objectTypeTranslations[objectTypeName];

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
