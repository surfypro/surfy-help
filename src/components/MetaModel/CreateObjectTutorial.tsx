import React from "react";
import { CamelizedObjectTypeNames } from "@site/surfy";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SaveIcon from "@mui/icons-material/Save";
import { CreateObjectTutorialPath } from "./CreateObjectTutorialPath";
import { CreateObjectTutorialProperties } from "./CreateObjectTutorialProperties";
import { CreateObjectTutorialOptionalProperties } from "./CreateObjectTutorialOptionalProperties";

interface CreateObjectTutorialProps {
  objectTypeName: CamelizedObjectTypeNames;
}

export function CreateObjectTutorial({
  objectTypeName,
}: CreateObjectTutorialProps) {
  return (
    <Box>
      <List
        sx={{
          "& .MuiListItem-root": {
            px: 1,
            py: 0.75,
            borderRadius: 1,
            "&:hover": {
              bgcolor: "action.hover",
              transition: "background-color 0.2s",
            },
          },
        }}
      >
        <CreateObjectTutorialPath objectTypeName={objectTypeName} />
        <CreateObjectTutorialProperties objectTypeName={objectTypeName} />
        <CreateObjectTutorialOptionalProperties />
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
      </List>
    </Box>
  );
}
