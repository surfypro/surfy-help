import React from "react";
import { CamelizedObjectTypeNames, useFlattenDeterminants } from "@site/surfy";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MouseIcon from "@mui/icons-material/Mouse";
import { getSecondaryTextProps } from "./helpers/ListItemTextProps";

interface CreateObjectTutorialPathListItemProps {
  objectTypeName: CamelizedObjectTypeNames;
}

export function CreateObjectTutorialPathListItem({ objectTypeName }: CreateObjectTutorialPathListItemProps) {
  const determinants = useFlattenDeterminants(objectTypeName);

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
        secondary={`puis sur 'Créer ${determinants["determinant.undefined"]}'`}
      />
    </ListItem>
  );
} 