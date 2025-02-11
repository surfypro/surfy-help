import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
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
    
    console.log('Debug Properties:', {
        objectTypeName,
        definition: objectTypeDefinition,
        properties: objectTypeDefinition?.propertiesByName ? Object.values(objectTypeDefinition.propertiesByName) : []
    });

    if (!objectTypeDefinition?.propertiesByName) {
        return (
            <Box sx={{ p: 1 }}>
                <Typography variant="body2" color="text.secondary">
                    Aucune propriété disponible
                </Typography>
            </Box>
        );
    }

    const properties = Object.values(objectTypeDefinition.propertiesByName)
        .filter(propertyTypeDefinition => !propertyTypeDefinition.options.technical)
        .filter(propertyTypeDefinition => !propertyTypeDefinition.options.calculated)
        .filter(propertyTypeDefinition =>
            !propertyTypeDefinition.association?.targetModelName || !isTenantObjectType(propertyTypeDefinition.association?.targetModelName))
        .filter(propertyTypeDefinition => !mandatory || propertyTypeDefinition.options.mandatory);

    if (properties.length === 0) {
        return (
            <Box sx={{ p: 1 }}>
                <Typography variant="body2" color="text.secondary">
                    {mandatory ? "Aucune propriété obligatoire" : "Aucune propriété disponible"}
                </Typography>
            </Box>
        );
    }

    const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    return (
        <Box>
            <List sx={{ 
                '& .MuiListItem-root': {
                    px: 1,
                    py: 0.75,
                    borderRadius: 1,
                    '&:hover': {
                        bgcolor: 'action.hover',
                        transition: 'background-color 0.2s'
                    }
                }
            }}>
                {properties.map(property => {
                    const propertyCode = `${objectTypeName}:${property.name}` as PropertyTypeCodes;
                    return (
                        <ListItem key={property.name} disableGutters>
                            <PropertyType code={propertyCode} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}