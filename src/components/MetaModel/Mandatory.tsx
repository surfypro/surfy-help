import React from "react";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import entitiesPath from '../../../src/metaModel/entities.paths.json';
import { useTranslations } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";

export function Mandatory(props: { code: string }) {
    const entitiesTranslations = useTranslations();
    const { code } = props;
    const objectTypeName = code
    // const name = 'address'
    // const [objectTypeName, name] = code.split(':');

    const directoryPath = entitiesPath.objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    console.log(objectTypeName)
    console.log(directoryPath)
    const translations: { label: string, description: string | null } = entitiesTranslations.propertyTypeTranslations[objectTypeName];
    const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    const href = `${directoryPath}/${toDocumentationLinkString(objectTypeName)}`;

    return <p>
        <a href={href}>{objectTypeTranslation.label}</a>
        <ul>
            {Object.entries(entitiesTranslations.propertyTypeTranslations[objectTypeName]).filter((o) => o).map(([name, translation]) => (
                <li key={name}>
                    <a href={`${href}#${toDocumentationLinkString(name)}`}>{translation}{mandatory ? '*' : ''}</a>
                </li>
            ))}
        </ul>
    </p>
}

        // <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        //     <h2 >{translations.label}</h2>
        //     <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        //         {objectTypeTranslation.label}
        //     </Box>
        // </Box>
        // <Box >{translations.description}</Box>