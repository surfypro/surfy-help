---
sidebar_position: 1
---

# Configurer la gestion des espaces de réunion

Pour qu'un espace soit visualisé et accessible depuis la page "Voir et naviquer dans les salles de réunion", il faut que sa typologie d'espace (bulle, box, salle de réunion, ...) soit associée au groupe de typologie d'espace "Espaces de réunion", ou à tout autre groupe de typologie dont le code est "MEETING".


## Choisir les typologies d'espace à afficher

En modification de la typologie d'espace,

-   cliquer sur "Créer une association groupe de typologie d'espace à typologie d'espace"
-   cliquer sur l'icône "crayon" pour ajouter le groupe de typologies d'espace "Espaces de réunion" à la typologie
-   valider la création

Le groupe de typologies d'espace est associée à la typologie, et s'ajoute à la liste des "groupes de typologies d'espace" de la typologie, en dessous de la sélection.
Tous les espaces ayant une des typologies contenues dans le groupe de typologie d'espaces "Espaces de réunion" seront affichés dans la page "Voir et naviquer dans les salles de réunion".

Pour retirer une typologie du groupe de typologies, il faut [modifier la typologie elle même](/docs/tutorials/surfaces/room/roomtype.md#modifier-une-typologie-despace) puis cocher et supprimer l'association au groupe concerné.

## Choisir les équipements à afficher

En plus du mobilier présent dans l'espace de réunion, on peut afficher la liste des types d'objet de services proposés dans l'espace de réunion (écran TV, projecteur, micro, écritoire, ...)

Pour cela, il faut ajouter le code "SERVICES" à la famille de types d'objet concernée (exemple: Equipements de service").

Depuis le menu de gauche,

-   cliquer sur "Mobiliers", "Typologies", puis "Famille de types d'objet" pour "Lister les familles de types d'objet"
-   cliquer sur l'icône en début de ligne de la famille de types d'objet à afficher, pour "Modifier la famille de type d'objet XXX".
-   taper "SERVICES" dans la case "Code"
-   "sauvegarder" pour enregistrer les modifications
-   rafraichir la page (icone circulaire au dessus du logo de l'entreprise, ou Fn+F5)

Les équipements de la famille de types d'objet correspondante seront listés sous la représentation de chaque espace de réunion, avec le nom de l'espace, sa typologie, sa capacité, son bâtiment et son étage d'appartenance.
Cliquer sur l'icône "carte routière" permet de "localiser l'espace sur le plan" et affiche l'espace sur le plan général de l'étage.



