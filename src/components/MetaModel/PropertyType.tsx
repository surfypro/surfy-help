import React, { Fragment } from "react";
import { Tooltip } from '@mui/material';
import entitiesPath from '../../../src/metaModel/entities.paths.json';
import entitiesTranslations from '../../../src/metaModel/entities.translations.json';
// import { PropertyTypeHelpTooltip } from '../../../../surfy/src/front/jup/Entities/Entity/PropertyTypeHelpTooltip'

import { PropertyTypeMandatoryIcon } from '../../../../surfy/src/front/jup/Entities/Entity/PropertyTypeIcons/PropertyTypeMandatoryIcon'

export function PropertyType(props: { objectTypeName: string, name: string }) {
    const { objectTypeName, name } = props;

    // throw new Error("object type or property not found")
    const directoryPath = entitiesPath.objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const translations: { label: string, description: string | null } = entitiesTranslations['fr'].propertyTypeTranslations[objectTypeName][name];

    const href = `${directoryPath}/${objectTypeName}#${name}`;
    return <Fragment>
        {/* <PropertyTypeMandatoryIcon /> */}
        <Tooltip title={name}><a href={href}>{translations.label} </a></Tooltip>
    </Fragment>;
    // c

    const a = objectTypeName as any;

    // return <PropertyTypeHelpTooltip propertyType={{ objectTypeName: a, name } as any} ><span>{translations.label}</span></PropertyTypeHelpTooltip>
}

