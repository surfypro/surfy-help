import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SaveIcon from "@mui/icons-material/Save";

export function CreateObjectTutorialValidation() {
  return (
    <ListItem>
      <ListItemIcon>
        <SaveIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        slotProps={{
          secondary: {
            component: "span",
            sx: {
              color: "#777",
            },
          },
        }}
        primary="Valider la création"
        secondary="Cliquez sur 'valider la création' pour terminer"
      />
    </ListItem>
  );
} 