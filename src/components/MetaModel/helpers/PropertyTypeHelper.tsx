import React from 'react';
import { isDevMode } from "./dev.helper";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import { IconButton } from "@mui/material";
import { PropertyType } from "../PropertyType";
import { useTranslation } from '@site/surfy';

export function PropertyTypeHelper(props: { code: string }) {
    const { code } = props;

    const translate = useTranslation('help');

    if (!isDevMode()) {
        return null;
    }
    const text = `<P code="${code}" />`;
    return <>
        {translate('key1', { name: 'Joh2n' })}
        {translate('key2', { name: 'Joh2n' })}
        <code>
            {text}
        </code>
        <CopyToClipboard text={text}>
            <IconButton><ContentCopyTwoToneIcon /></IconButton>
        </CopyToClipboard>
    </>;
}