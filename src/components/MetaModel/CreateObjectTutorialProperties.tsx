import React from "react";
import { CamelizedObjectTypeNames } from "@site/surfy";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslations } from "../Translations/translations";
import { Properties } from "./Properties";

interface CreateObjectTutorialPropertiesProps {
  objectTypeName: CamelizedObjectTypeNames;
}

export function CreateObjectTutorialProperties({ objectTypeName }: CreateObjectTutorialPropertiesProps) {
  const entitiesTranslations = useTranslations();
  const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];
  const objectLabel = objectTypeTranslation?.label?.toLowerCase() || objectTypeName;

  return (
    <>
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
    </>
  );
} 