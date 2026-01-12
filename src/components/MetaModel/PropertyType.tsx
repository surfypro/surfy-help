import { Box, Fade, Paper } from '@mui/material';
import { useTranslations, useCurrentLocale } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";
import { getPropertyTypeByCode, ObjectTypeSingularCapitalizedLabel, PropertyTypeCodes, PropertyTypeDescription, PropertyTypeLabel, PropertyTypeMandatoryLabel } from "@site/surfy";
import { objectTypePathMapping } from "@site/src/metaModel/metamodel.json.helper";

export function PropertyType(props: { code: PropertyTypeCodes }) {
    const currentLocale = useCurrentLocale();
    const { code } = props;

    const propertyType = getPropertyTypeByCode(code);

    const { objectTypeName, name } = propertyType;

    // Use the appropriate mapping based on locale
    const pathMapping = objectTypePathMapping;
    const directoryPath = pathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    // Add locale prefix for non-default locales
    const localePrefix = currentLocale === 'fr' ? '' : `/${currentLocale}`;
    const href = `${localePrefix}${directoryPath}/${toDocumentationLinkString(objectTypeName)}#${toDocumentationLinkString(name)}`;

    const Title = <Paper sx={{ p: 2 }}>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <h2><PropertyTypeLabel propertyType={propertyType} /></h2>
            <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <ObjectTypeSingularCapitalizedLabel objectTypeName={objectTypeName} />
            </Box>
        </Box>
        <Box><PropertyTypeDescription propertyType={propertyType} /></Box>
        <Box sx={{ mt: 2 }}>
            {propertyType.options.mandatory === true && <PropertyTypeMandatoryLabel propertyType={propertyType} />}
        </Box>
    </Paper >;
    return <HelpTooltipStyled title={Title} slots={{
        transition: Fade
    }} disableInteractive={true}>
        <a href={href}><PropertyTypeLabel propertyType={propertyType} /></a>
    </HelpTooltipStyled>
}
