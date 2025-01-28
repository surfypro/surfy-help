import React from "react";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import entitiesPath from '../../../src/metaModel/entities.paths.json';
import { useTranslations } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";
import { getPropertyTypeByCode, PropertyTypeCodes} from "@site/schema";

export function PropertyType(props: { code: PropertyTypeCodes }) {
    const entitiesTranslations = useTranslations();
    const { code } = props;

    const propertyType =getPropertyTypeByCode(code);

    const {objectTypeName, name} = propertyType;

    const directoryPath = entitiesPath.objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const translations: { label: string, description: string | null } = entitiesTranslations.propertyTypeTranslations[objectTypeName][name];
    const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    const href = `${directoryPath}/${toDocumentationLinkString(objectTypeName)}#${toDocumentationLinkString(name)}`;

    const Title = <Paper sx={{ p: 2 }}>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <h2 >{translations.label}</h2> {propertyType.options.mandatory ? '*' : ''}
            <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {objectTypeTranslation.label}
            </Box>
        </Box>
        <Box >{translations.description}</Box>
    </Paper >;
    return <HelpTooltipStyled title={Title} slots={{
        transition:Fade
    }} disableInteractive={true}>
        <a href={href}>{translations.label}</a>
    </HelpTooltipStyled>
}
