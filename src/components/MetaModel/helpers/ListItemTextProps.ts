import { ListItemProps } from "@mui/material";
import { ListItemTextProps } from "@mui/material/ListItemText";

export const getSecondaryTextProps = (): ListItemTextProps['slotProps'] => ({
  secondary: {
    component: "span",
    sx: {
      color: "#777",
    },
  },
});

