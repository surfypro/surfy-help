---
sidebar_position: 1
---

# Configurer la recherche d'itinéraire

Un itinéraire point à point permet d'obtenir le cheminement d'un point d'origine vers un point d'arrivée dans Surfy.

## La fonctionnalité Pathfinding

Pour obtenir un itinéraire point à point dans Surfy, la fonctionnalité "Pathfinding" doit être validée.
Une fois cette fonctionnalité validée, une icône verticale "serpentin" permettant de "Trouver son chemin dans les espaces" est disponible en fin de liste des icônes verticales.

Pour valider la fonctionnalité "Pathfinding", depuis le menu de gauche,

-   cliquer sur "Administration" puis "Entreprises" et "Vue des entreprises en tuile"
-   cliquer sur l'icône en bout de ligne de l'entreprise pour "Voir plus d'option pour l'entreprise XXX"
-   cliquer sur "Modifier l'entreprise XXX"
-   dans la fiche de l'entreprise, cocher la case "Enable Pathfinding"
-   sauvegarder les modifications.

Cliquer sur le logo de l'entreprise pour revenir sur la page d'accueil.
Après rafraichissement, l'icône verticale "serpentin" apparait, permettant de "Trouver son chemin dans les espaces".

La fonctionnalité "Pathfinding" est opérationnelle.

## Les portes et passages

Pour utiliser l'itinéraire point à point, il est nécessaire de [créer les portes et passages](/docs/tutorials/surfaces/doors/create.md) entre les différents espaces.

## Le connecteur d'espace

Le connecteur d'espace permet à deux espaces non contigüs de communiquer virtuellement, par exemple entre deux niveaux via les ascenseurs ou les escaliers. Cette donnée est utilisée dans l'itinéraire point à point pour changer de niveau ou de bâtiment.

### Le type de connecteur d'espace 

Un connecteur d'espace est associé à un type de connecteur d'espace : Ascenseur ou Escalier.
Pour créer un type de connecteur d'espace supplémentaire (ex: Navette,...) depuis le menu de gauche,

-   cliquer sur "Administration", "Connecteurs" puis "Room Connector Types" et "Créer RoomConnectorType"
-   renseigner le <P code="roomConnectorType:name" /> du type de connecteur (ex: Navette)
-   valider la création

### Configurer le connecteur d'espace

On définit un connecteur d'espace pour un escalier ou un ascenseur desservant plusieurs niveaux, mais également pour un trajet non identifié dans Surfy : Taxi, navette, téléphérique, ...
La durée du transfert par le connecteur d'espace est prise en compte dans le calcul total de la durée de l'itinéraire.

Pour créer un connecteur d'espace, depuis le menu de gauche,

-   cliquer sur "Administration", "Connecteurs" puis "Connecteurs d'espace" et "Créer un connecteur d'espace"
-   renseigner le <P code="roomConnector:name" /> (ex: Escalier C) et le <P code="roomConnector:roomConnectorType" /> (Escalier)
-   renseigner le <P code="roomConnector:waitTime" /> et le <P code="roomConnector:timePerFloor" /> entre chaque étage
-   valider la création

Pour associer le connecteur d'espace aux espaces depuis la fiche du connecteur,

-   cliquer sur le menu contextuel (case grise dans le menu de gauche, sous la recherche), puis sur "Modifier le connecteur d'espace XXX"
-   cliquer sur l'onglet "Associer un espace"
-   rechercher et sélectionner les espaces à connecter en validant chacun d'eux

La liste des espaces connectés par le connecteur d'espace s'affiche en bas de page.

:::warning ATTENTION
Cocher et supprimer la ligne d'un espace sur cette page supprime l'espace et tout son contenu !
Pour retirer un connecteur à un espace, il faut modifier l'espace en retirant le connecteur depuis la fiche de l'espace.
:::

### Associer les connecteurs d'espace aux espaces depuis le plan

Pour associer un connecteur d'espace à un espace depuis le plan de l'étage,

-   cliquer dans l'espace à associer
-   dans la fiche de l'espace, cliquer sur "Modifier" afin de modifier les informations de l'espace
-   cliquer sur l'icône "crayon" face à "Connecteur d'espace"
-   choisir le connecteur appropriée à l'espace. Le type de connecteur d'espace est indiqué entre crochets
-   sauvegarder les modifications

L'espace associé est connecté aux autres espaces ayant le même connecteur associé.


Le changement de niveau au cours d'un itinéraire est en cours de développement.