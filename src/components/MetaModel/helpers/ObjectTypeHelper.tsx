import React from 'react';
import { isDevMode } from "./dev.helper";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import { IconButton } from "@mui/material";

export function ObjectTypeHelper(props: { code: string }) {
    const { code } = props;

    if (!isDevMode()){
        return null;
    }
    const text = `<OT code="${code}" />`;
    return <>
    <code>
        {text}
    </code>
        <CopyToClipboard text={text}>
            <IconButton><ContentCopyTwoToneIcon/></IconButton>
        </CopyToClipboard>
    </>;
}