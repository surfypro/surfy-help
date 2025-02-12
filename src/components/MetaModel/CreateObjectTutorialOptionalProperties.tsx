import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function CreateObjectTutorialOptionalProperties() {
  return (
    <ListItem>
      <ListItemIcon>
        <CheckCircleIcon color="primary" />
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
        primary="Vous pouvez saisir d'autres propriétés optionnelles"
        secondary="Ces informations pourront être complétées ultérieurement"
      />
    </ListItem>
  );
} 