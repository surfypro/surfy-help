import { styled} from '@mui/material/styles';

import { TooltipProps, Tooltip, tooltipClasses } from "@mui/material";

export const HelpTooltipStyled = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        maxWidth: 500,
        minWidth: 500,
        fontSize: 14
    },
}));
