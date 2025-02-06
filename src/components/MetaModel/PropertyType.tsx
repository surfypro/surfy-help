import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useTranslations } from "../Translations/translations";
import { HelpTooltipStyled } from "./HelpTooltipStyled";
import { toDocumentationLinkString } from "@site/src/utils/documentionStyle";
import { getPropertyTypeByCode, PropertyTypeCodes, PropertyTypeLabel, PropertyTypeMandatoryLabel } from "@site/surfy";
import { objectTypePathMapping } from "@site/src/metaModel/metamodel.json.helper";

export function PropertyType(props: { code: PropertyTypeCodes }) {
    const entitiesTranslations = useTranslations();
    const { code } = props;

    const propertyType = getPropertyTypeByCode(code);

    const { objectTypeName, name } = propertyType;
    const directoryPath = objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const translations = entitiesTranslations.propertyTypeTranslations[objectTypeName][name];
    const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    const href = `${directoryPath}/${toDocumentationLinkString(objectTypeName)}#${toDocumentationLinkString(name)}`;

    const Title = <Paper sx={{ p: 2 }}>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <h2 ><PropertyTypeLabel propertyType={propertyType} /></h2>
            <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {objectTypeTranslation.label}
            </Box>
        </Box>
        <Box >{translations.description}</Box>
        <Box sx={{ mt: 2 }}>
            {propertyType.options.mandatory === true && <PropertyTypeMandatoryLabel propertyType={propertyType} />}
        </Box>
    </Paper >;
    return <HelpTooltipStyled title={Title} slots={{
        transition: Fade
    }} disableInteractive={true}>
        <a href={href}>{translations.label}</a>
    </HelpTooltipStyled>
}
