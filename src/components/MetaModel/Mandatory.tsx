import React from "react";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useTranslations } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";
import { getPropertyTypeByCode, PropertyTypeCodes } from "@site/surfy";

type Translation = {
    label: string;
    description: string | null;
    mandatory?: boolean;
};

type PropertyTypeTranslations = {
    [key: string]: Translation;
};

/**
 * Component that displays the list of mandatory properties for a given object type.
 * It uses the translation system to display labels and descriptions
 * in the appropriate language.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {PropertyTypeCodes} props.code - The code identifying the object type
 * @returns {JSX.Element} A React element displaying the mandatory properties
 *
 * @example
 * ```tsx
 * <Mandatory code="building" />
 * ```
 */
export function Mandatory(props: { code: PropertyTypeCodes}) {
    const entitiesTranslations = useTranslations();
    const { code } = props;
    
    const propertyType = getPropertyTypeByCode(code);
    const { objectTypeName } = propertyType;

    const translations = entitiesTranslations.propertyTypeTranslations[objectTypeName] as PropertyTypeTranslations;
    const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    return (
        <Box>
            <h2>{objectTypeTranslation.label}</h2>
            <Box component="ul">
                {Object.entries(translations).map(([name, translation]) => (
                    <Box component="li" key={name}>
                        <HelpTooltipStyled 
                            title={translation.description || ''} 
                            slots={{ transition: Fade }}
                        >
                            <span>
                                {translation.label}
                                {translation.mandatory && ' *'}
                            </span>
                        </HelpTooltipStyled>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}