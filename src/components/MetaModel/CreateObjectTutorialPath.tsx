import React from "react";
import { CamelizedObjectTypeNames } from "@site/surfy";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MouseIcon from "@mui/icons-material/Mouse";
import { useTranslations } from "../Translations/translations";
import { getSecondaryTextProps } from "./helpers/ListItemTextProps";

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
      // le premier composant : 2 parametres
      // building et create : trouver le chemin pour creer un batiment
      // 1 Libre (pas de mandatory BT) - ex : bat ou famille type objet
      // 2 : 1 mandatory BT - ex : type  d'objet ou étage
      // 3 : 2 mandatory BT dont un qui est espace, et ils ont des coordonnées ex : objet, poste de travail
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
        slotProps={getSecondaryTextProps()}
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