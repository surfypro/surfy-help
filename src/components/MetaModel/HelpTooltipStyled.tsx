import React from 'react';
import { styled } from '@mui/material/styles';
import { TooltipProps, Tooltip, tooltipClasses } from "@mui/material";

export const HelpTooltipStyled = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));
