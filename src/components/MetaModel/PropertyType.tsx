import React from "react";
import { Tooltip } from '@mui/material';
import entities from '../../../entities.json';

export function PropertyType(props: { objectTypeName: string, name: string }) {
    const { objectTypeName, name } = props;

    // throw new Error("object type or property not found")
    const directoryPath = entities.objectTypePathMapping[objectTypeName];
    if (!directoryPath) {
        throw new Error(`object type ${objectTypeName} not found in entities`);
    }

    const href = `${directoryPath}/${objectTypeName}#${name}`;
    return <Tooltip title={name}><a href={href}>{name}</a></Tooltip>;
    // return <a href={href}>{name}</a>;
}