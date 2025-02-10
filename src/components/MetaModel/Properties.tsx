import React from "react";
import Box from '@mui/material/Box';
import { useTranslations } from "../Translations/translations";
import { isTenantObjectType, getObjectTypeDefinitionByName, CamelizedObjectTypeNames, PropertyTypeCodes } from "@site/surfy";
import { PropertyType } from "./PropertyType";

/**
 * Component that displays the list of properties for a given object type.
 * It uses the translation system to display labels and descriptions
 * in the appropriate language.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {CamelizedObjectTypeNames} props.objectTypeName - The name of the object type
 * @param {boolean} [props.mandatory] - If true, only show mandatory properties
 * @returns {JSX.Element} A React element displaying the properties
 *
 * @example
 * ```tsx
 * <Properties objectTypeName="building" mandatory={true} />
 * ```
 */
export function Properties(props: { objectTypeName: CamelizedObjectTypeNames; mandatory?: boolean }) {
    const entitiesTranslations = useTranslations();
    const { objectTypeName, mandatory } = props;
    
    const objectTypeDefinition = getObjectTypeDefinitionByName(objectTypeName);
    const properties = Object.values(objectTypeDefinition.propertiesByName)
        .filter(propertyTypeDefinition => !propertyTypeDefinition.options.technical)
        .filter(propertyTypeDefinition => !propertyTypeDefinition.options.calculated)
        .filter(propertyTypeDefinition =>
            propertyTypeDefinition.association?.targetModelName && !isTenantObjectType(propertyTypeDefinition.association?.targetModelName))
        .filter(propertyTypeDefinition => !mandatory || propertyTypeDefinition.options.mandatory);

    const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    return (
        <Box>
            <h2>{objectTypeTranslation.label}</h2>
            <Box component="ul">
                {properties.map(property => {
                    const propertyCode = `${objectTypeName}:${property.name}` as PropertyTypeCodes;
                    return (
                        <li key={property.name}>
                            <PropertyType code={propertyCode} />
                        </li>
                    );
                })}
            </Box>
        </Box>
    );
}