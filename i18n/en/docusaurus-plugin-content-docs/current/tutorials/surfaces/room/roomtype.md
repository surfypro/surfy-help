---
sidebar_position: 1
---
# Space Typologies

To manage space typology, it is recommended to use the "Space Typology" view.
Learn more about [plan views](/en/docs/courses/views/planviews.md#space-typology-view).

A space's typology is the first qualification you can give to a space, often deducible from the plan background information.
It allows you to color the plans as digitization progresses and obtain cumulative information by typology.

:::warning IMPORTANT
Before creating a new typology, as in any multiple choice it is important to check that the typology does not already exist in the database. A duplicate would distort the cumulations by splitting the data across several identical typologies.
:::

## Create a Space Typology

To create a space typology from the home page:

-   click on "Administration", "Typologies", "Space Typologies", "Space Typology" then "Create a space typology".
-   name the typology in the <P code="roomType:name" /> (ex: "Repro Point").
-   give a <P code="roomType:color" /> to the typology for the 2D view.
-   you can give a different <P code="roomType:color3d" /> for the 3D view. By default, it's the 2D color that is used in 3D.
-   you can define a <P code="roomType:icon" /> that will be displayed on the typology spaces in 3D view, and in 2D view by clicking on the "Activate icon display on 2D plan" icon above the 2D plan. This allows you to highlight strategic points (Toilets, Repro, elevators, ...) on the provided plans.

For more information on the fields to complete, see the [basic properties of Space Typology](/entities/admin/types/room-types/room-type).

-   "validate the creation" of the typology.

The typology is created.

## Associate a Typology to a Space

To qualify a space by an existing typology:

-   click in the concerned space
-   "Modify" the space, at the top left of the space card
-   click on the "pencil" icon of the "Space Typology" line
-   choose the appropriate typology with the search
-   "Save" the modifications

The space is qualified by its typology.

## Créer et associer une typologie à un espace

On peut créer une nouvelle typologie si celle ci n'est pas présente dans la liste de choix au moment de la qualification d'un espace.
Cette nouvelle typologie sera directement associée à l'espace après avoir été créée :

-   cliquer dans l'espace concerné
-   "Modifier" l'espace, en haut à gauche de la fiche de l'espace
-   cliquer sur l'icône "crayon" de la ligne "Typologie d'espace"

La typologie désirée n'apparait pas.

-   cliquer sur "Créer et associer une typologie d'espace" en haut de l'écran, la page de création de typologie apparait.
-   nommer et renseigner les informations de la typologie, voir [Créer une typologie d'espace](/en/docs/tutorials/surfaces/room/roomtype.md#cr%C3%A9er-une-typologie-despace)
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

Pour plus d'informations sur les champs à compléter, voir les [propriétés de base de la Typologie d'espace](/entities/admin/types/room-types/room-type).

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

-   cliquer sur "Administration", "Typologies", "Typologies d'espace" puis "Lister les typologies d'espace"
-   cliquer sur l'icône en début de la typologie d'espace choisi (exemple: "Salle de réunion") pour "Modifier la typologie d'espace XXX"
-   cliquer sur "Association groupe de typologie d'espace à typologie d'espace" puis "Créer une association groupe de typologie d'espace à typologie d'espace"
-   cliquer sur l'icône "crayon" pour donner le groupe de typologie d'espace "Espaces de réunion" à la typologie d'espace
-   valider la création

Le groupe de typologie d'espace est donné à la typologie, et s'ajoute à la liste des groupes de typologie de la typologie, en dessous de la sélection.

### Visualiser les groupes de typologies :

Pour obtenir les informations des groupes, depuis le plan de l'étage,

-   cliquer sur l'icône verticale "Voir les indicateurs des espaces sur le plan en fonction des groupes de typologies d'espace"

Les informations cumulées pour chaque groupe de typologies d'espace sont affichées en ouvrant le "papillon" en fin de ligne.
La liste des typologies groupée s'obtient en passant la souris sur l'icône "?".
