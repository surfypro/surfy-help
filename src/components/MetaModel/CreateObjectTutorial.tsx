import React from "react";
import { Properties } from "./Properties";
import { CamelizedObjectTypeNames } from "@site/surfy";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MouseIcon from "@mui/icons-material/Mouse";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslations } from "../Translations/translations";

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
    objectTypeTranslation?.label?.toLowerCase()
    objectTypeName;

  const getCreateActionPath = (type: CamelizedObjectTypeNames) => {
    const paths: Record<string, string> = {
      itemTypeFamily: "Mobiliers > Typologies > Familles de types d'objet",
      building: "Espaces > Bâtiments",
      floor: "Espaces > Étages"
//       spliter en 4 composants
// le premier composant : 2 parametres
//     building et create : trouver le chemin pour creer un batiment
      // 1 Libre (pas de mandatory BT) - ex : bat ou famille type objet
      // 2 : 1 mandatory BT - ex : type  d'objet ou étage
      // 3 : 2 mandatory BT dont un qui est espace, et ils ont des coordonnées ex : objet, poste de travail
      // Ajoutez d'autres chemins ici si nécessaire
    };
    return paths[type] || "";
  };

  const isMasculine = (label: string) => {
    const masculineWords = ["bâtiment", "étage"];
    return masculineWords.includes(label);
  };

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
