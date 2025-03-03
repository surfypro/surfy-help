import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SaveIcon from "@mui/icons-material/Save";
import { getSecondaryTextProps } from "./helpers/ListItemTextProps";

export function CreateObjectTutorialValidationListItem() {
  return (
    <ListItem>
      <ListItemIcon>
        <SaveIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        slotProps={getSecondaryTextProps()}
        primary="Valider la création"
        secondary="Cliquez sur 'valider la création' pour terminer"
      />
    </ListItem>
  );
} 