import React from "react";
import { Properties } from "./Properties";
import { CamelizedObjectTypeNames } from "@site/surfy";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslations } from "../Translations/translations";
import { CreateObjectTutorialPath } from "./CreateObjectTutorialPath";

interface CreateObjectTutorialProps {
  objectTypeName: CamelizedObjectTypeNames;
}

export function CreateObjectTutorial({
  objectTypeName,
}: CreateObjectTutorialProps) {
  const entitiesTranslations = useTranslations();
  const objectTypeTranslation =
    entitiesTranslations.objectTypeTranslations[objectTypeName];
  const objectLabel =
    objectTypeTranslation?.label?.toLowerCase() ||
    objectTypeName;

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
        <ListItem>
          <ListItemIcon>
            <EditIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={`Indiquez les propriétés obligatoires de l'objet ${objectLabel} :`}
          />
        </ListItem>
        <ListItem sx={{ pl: 4 }}>
          <Box sx={{ width: "100%" }}>
            <Properties objectTypeName={objectTypeName} mandatory={true} />
          </Box>
        </ListItem>
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
