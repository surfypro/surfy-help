import React from "react";
import { Box, Fade, Paper, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import entitiesPath from '../../../src/metaModel/entities.paths.json';
import { styled } from '@mui/material/styles';
import { useTranslations } from "../Translations/translations";
import {toDocumentationLinkString} from "../../../../surfy/src/back/documentation/documentionStyle";



export function PropertyType(props: { code: string }) {
    const entitiesTranslations = useTranslations();
    const { code } = props;
    const [objectTypeName, name] = code.split(':');

    const directoryPath = entitiesPath.objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const translations: { label: string, description: string | null } = entitiesTranslations.propertyTypeTranslations[objectTypeName][name];
    const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];

    const href = `${directoryPath}/${toDocumentationLinkString(objectTypeName)}#${toDocumentationLinkString(name)}`;

    const Title = <Paper sx={{ p: 2 }}>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <h2 >{translations.label}</h2>
            <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {objectTypeTranslation.label}
            </Box>
        </Box>
        <Box >{translations.description}</Box>
    </Paper >;
    return <HelpTooltipStyled title={Title} TransitionComponent={Fade} disableInteractive={true}>
        <a href={href}>{translations.label}</a>
    </HelpTooltipStyled>
}


const HelpTooltipStyled = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        maxWidth: 500,
        minWidth: 500,
        fontSize: 14
    },
}));



// const defaultHelpTooltipStyle = {
//     backgroundColor: 'red',
//     padding: 0,
//     maxWidth: 500,
//     fontSize: 14
// };
// const HelpTooltipStyled = styled(() => ({
//     tooltip: {
//         ...defaultHelpTooltipStyle
//     }
// }))(Tooltip);

