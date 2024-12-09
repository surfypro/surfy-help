---
sidebar_position: 1
---
# Les Typologies d'espace

Pour gérer la typologie des espaces, il est conseillé d'utiliser la vision "Typologie des espaces".
En savoir plus sur [les visions du plan](/docs/courses/views/planviews.md#vision-typologies-des-espaces).

La typologie d'un espace est la première qualification qu'on peut donner à un espace, étant souvent déductible des informations du fond de plan.
Elle permet de colorier les plans au fur et à mesure de la digitalisation et d'obtenir les informations cumulées par typologie.

:::warning IMPORTANT
Avant de créer une nouvelle typologie, comme dans tout choix multiple il est important de vérifier que la typologie n'existe pas déjà dans la base de données. Un doublon fausserait les cumuls en fractionnant les données sur plusieurs typologies identiques.
:::

## Créer une typologie d'espace

Pour créer une typologie d'espace depuis la page d'accueil :

-   cliquer sur "Administration", "Typologies", "Typologies d'espaces", "Typologies d'espace" puis "Créer une typologie d'espace".
-   nommer la typologie dans "Nom de la typologie d'espace" (ex: "Point Repro").
-   donner une couleur à la typologie pour la vue 2D.
-   on peut donner une couleur  différente pour la vue 3D. A défaut, c'est la couleur 2D qui est utilisée en 3D.
-   on peut définir une icône qui sera affichée sur les espaces de la typologie en vue 3D, et en vue 2D en cliquant sur l'icône "Activer l'affichage des icônes sur le plan en 2D" au dessus du plan en 2D. Cela permet de mettre en avant des points stratégiques (Toilettes, Repro, ascenseurs, ...) sur les plans fournis.

Pour plus d'informations sur les champs à compléter, voir les [propriétés de base de la Typologie d'espace](/entities/admin/types/roomTypes/roomType).

-   "valider la création" de la typologie.

La typologie est créée.

## Associer une typologie à un espace

Pour qualifier un espace par une typologie existante :

-   cliquer dans l'espace concerné
-   "Modifier" l'espace, en haut à gauche de la fiche de l'espace
-   cliquer sur l'icône "crayon" de la ligne "Typologie d'espace"
-   choisir la typologie adéquate avec la recherche
-   "Sauvegarder" les modifications

L'espace est qualifié par sa typologie.

## Créer et associer une typologie à un espace

On peut créer une nouvelle typologie si celle ci n'est pas présente dans la liste de choix au moment de la qualification d'un espace.
Cette nouvelle typologie sera directement associée à l'espace après avoir été créée :

-   cliquer dans l'espace concerné
-   "Modifier" l'espace, en haut à gauche de la fiche de l'espace
-   cliquer sur l'icône "crayon" de la ligne "Typologie d'espace"

La typologie désirée n'apparait pas.

-   cliquer sur "Créer et associer une typologie d'espace" en haut de l'écran, la page de création de typologie apparait.
-   nommer et renseigner les informations de la typologie, voir [Créer une typologie d'espace](/docs/tutorials/surfaces/room/roomtype.md#cr%C3%A9er-une-typologie-despace)
-   "Valider la création"

La nouvelle typologie est créée et associée à l'espace sélectionné.
Pour visualiser le plan colorié avec la nouvelle typologie, il est nécessaire de rafraichir la page (F5).

Les espaces suivants pourront être qualifiés par cette nouvelle typologie qui apparaitra dans la liste de choix.


## Visualiser la typologie des espaces

Pour afficher les plans et les cumuls de données par typologie, cliquer sur l'icône verticale "Colorier les espaces sur le plan en fonction des typologies"

Le plan apparait avec les couleurs des typologies.
A gauche du plan sont regroupés les légendes (noms des typologies présentes avec leur couleur).
Le cumul d'informations pour chaque typologie est affiché en cliquant sur le "papillon" en bout de ligne de la typologie, ou sur le "papillon" général en haut à droite des légendes, "Ouvrir tous les détails et indicateurs".

:::tip BON A SAVOIR
Si la typologie choisie est utilisée pour la première fois sur l'étage, il est nécessaire de rafraichir la page (F5) pour obtenir la couleur de la typologie sur les plans.
:::

## Modifier une typologie d'espace

Pour modifier une typologie d'espace, par exemple sont nom ou sa couleur, depuis la page d'accueil :

-   cliquer sur "Administration", "Typologies", "Typologies d'espaces", "Typologies d'espace" puis "Lister les typologies d'espace".
-   rechercher la typologie à modifier, un filtre est disponible en haut à droite de l'écran " Filtrer les typologies d'espace".
-   cliquer sur l'icône en début de ligne de la typologie pour "modifier la typologie d'espace XXX".
-   modifier les informations,
-   "Sauvegarder" les modifications.

Pour plus d'informations sur les champs à compléter, voir les [propriétés de base de la Typologie d'espace](/entities/admin/types/roomTypes/roomType).

:::tip BON A SAVOIR
On peut aussi modifier une typologie depuis un espace qualifié par cette typologie, en cliquant dans l'espace puis sur l'icône à droite de la ligne "Typologie d'espace" de la fiche de l'espace. Cette icône "Voir plus d'option pour la typologie XXX" permet de "Modifier la typologie d'espace XXX" et d'accéder directement à la modification de la typologie.
:::


## Supprimer une typologie d'espace

Supprimer une typologie supprime toutes les qualifications des espaces et les cumuls d'informations liés à cette typologie.

Pour supprimer une typologie d'espace, depuis la page d'accueil :

-   cliquer sur "Administration", "Typologies", "Typologies d'espaces", "Typologies d'espace" puis "Lister les typologies d'espace".
-   rechercher la typologie à supprimer, un filtre est disponible en haut à droite de l'écran " Filtrer les typologies d'espace".
-   cocher la case en début de ligne de la typologie à supprimer.
-   cliquer sur l'icône Poubelle en haut de la page, "Supprimer les typologies d'espace sélectionnées"
-   confirmer la suppression

La typologie d'espace est supprimée.

## Les groupes de typologies d'espace

On peut regrouper plusieurs typologies dans un groupe de typologies, permettant le regroupement de plusieurs espaces de typologies différentes (exemple: tous les espaces de réunion, bulles box et salles comprises), ou l'exclusion de certaines typologies (exemple: sous-sols hors parkings)

Des groupes de typologies sont proposés à l'utilisation. Depuis le menu de gauche,

-   cliquer sur "Administration", "Typologies", "Typologies d'espace" puis "Groupes de typologie d'espace" et "Lister les groupes de typologie d'espace"
-   cliquer sur l'icône en début de ligne du groupe de typologie d'espace choisi (exemple: "Espaces de réunion") pour "Modifier le groupe de typologie d'espace XXX"
-   cliquer sur "Créer une association groupe de typologie d'espace à typologie d'espace"
-   cliquer sur l'icône "crayon" pour ajouter une typologie d'espace au groupe (exemple: "Box de réunion")
-   valider la création

La typologie d'espace est ajoutée au groupe, et s'ajoute à la liste des typologies du groupe, en dessous de la sélection.

### Visualiser les groupes de typologies :

Pour obtenir les informations des groupes, depuis le plan de l'étage,

-   cliquer sur l'icône verticale "Voir les indicateurs des espaces sur le plan en fonction des groupes de typologies d'espace"

Les informations cumulées pour chaque groupe de typologies d'espace sont affichées en ouvrant le "papillon" en fin de ligne.
La liste des typologies groupée s'obtient en passant la souris sur l'icône "?".
