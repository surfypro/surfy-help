import React from "react";
import { CamelizedObjectTypeNames } from "@site/surfy";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MouseIcon from "@mui/icons-material/Mouse";
import { useTranslations } from "../Translations/translations";

interface CreateObjectTutorialPathProps {
  objectTypeName: CamelizedObjectTypeNames;
}

export function CreateObjectTutorialPath({ objectTypeName }: CreateObjectTutorialPathProps) {
  const entitiesTranslations = useTranslations();
  const objectTypeTranslation = entitiesTranslations.objectTypeTranslations[objectTypeName];
  const objectLabel = objectTypeTranslation?.label?.toLowerCase() || objectTypeName;

  const getCreateActionPath = (type: CamelizedObjectTypeNames) => {
    const paths: Record<string, string> = {
      itemTypeFamily: "Mobiliers > Typologies > Familles de types d'objet",
      building: "Espaces > Bâtiments",
      floor: "Espaces > Étages"
    };
    return paths[type] || "";
  };

  const isMasculine = (label: string) => {
    const masculineWords = ["bâtiment", "étage"];
    return masculineWords.includes(label);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <MouseIcon color="primary" />
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
        primary={
          getCreateActionPath(objectTypeName)
            ? `Dans le menu de gauche, accédez à ${getCreateActionPath(objectTypeName)}`
            : "Cliquer sur le menu contextuel"
        }
        secondary={`puis sur 'Créer ${isMasculine(objectLabel) ? "un" : "une"} ${objectLabel}'`}
      />
    </ListItem>
  );
} 