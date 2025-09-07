---
sidebar_position: 2
---
# Create an Assignment Layer


An assignment layer is an analysis layer whose layer type is associated with one or more buildings.<br />
It allows the assignment of people to "Districts" composed of one or more spaces of the concerned buildings.<br />

For more information on creating an analysis layer, see the chapter [Create an Analysis Layer](/en/docs/tutorials/dimensionType/create.md)

An assignment layer allows you to group, qualify and represent spaces by Districts on the plan, in order to obtain the accumulation of information, the location of grouped spaces and all person assignments to building Districts.

"Assignment layers" of the same nature are grouped in a common "layer type".
For example, the "Building A Districts" layer type groups the "District A1", "District A2", "District A3" assignment layers.

To create an assignment layer, its layer type must exist.

## Créer un type de calque

Pour créer un type de calque, depuis la page d'accueil :

-   cliquer sur "Administration", "Calques d'analyse", "Types de calque" puis "Créer un type de calque".
-   Nommer le type de calque dans <P code="dimensionType:name" /> (ex: "Quartiers Bât A")
-   "valider la création" du type de calque.

Pour associer le type de calque à des bâtiments, en vue de créer des calques d'affectation :

-   dans le menu contextuel, cliquer sur "Modifier le type de calque XXX"
-   en bas de page, cliquer sur "Créer un calque d'affectation du bâtiment"
-   choisir le ou les <P code="dimensionTypeToBuilding:building" /> à associer aux calques d'affectation (ex: "bâtiment A")
-   sauvegarder les modifications

:::tip BON A SAVOIR
Seuls les "bâtiments principaux" peuvent être accessibles à la réservation de poste de travail via un calque d'affectation.
A l'inverse, déplacer sur la page d'accueil un scénario contenant un calque d'affectation issu de son bâtiment d'origine donne la possibilité de réserver sur les quartiers de ce bâtiment et risque de créer des confusions.
Il faut dans ce cas retirer l'association de ce bâtiment au calque d'affectation correspondant afin qu'il n'intervienne pas dans la réservation sur le bâtiment principal.
:::

## Créer et associer un calque d'affectation à un type de calque

Une fois que le type de calque est créé et associé à un ou des bâtiments, on peut créer et lui associer un calque d'affectation:

-   cliquer sur "Administration", "Calques d'analyse", "Calques d'analyse", puis "Créer un calque d'analyse".
-   renseigner le <P code="dimension:name" /> (ex: "Quartier A1")
-   choisir le <P code="dimensionTypeToBuilding:dimensionType" /> associé à un ou des bâtiments dans la liste des types de calque en cliquant sur le "crayon" (ex: "Quartiers Bât A"). Le calque d'analyse devient calque d'affectation.
-   choisir une <P code="dimension:color" /> pour représenter les espaces qualifiés par ce calque d'affectation
-   "valider la création" du calque d'affectation.

:::tip Bon à savoir
On peut également créer des calques d'affectation en modifiant le type de calque afin de lui associer directement les calques à créer : Pour cela, il faut "Modifier le type de calque XXX" puis "Créer un calque d'affectation" et lui donner son nom et sa couleur. Le calque créé aura par défaut le type de calque XXX en modification.
:::

## Qualifier un espace par un calque d'affectation

Après rafraichissement (F5), le calque est disponible pour la qualification des espaces:
-   sélectionner l'espace à qualifier
-   cliquer sur "Modifier" dans la fiche de l'espace, à gauche du plan
-   choisir le type de calque voulu dans la liste des qualifications de l'espace
-   choisir le calque adapté pour l'espace sélectionné

L'espace sélectionné est qualifié par le calque choisi

## Visualiser les calques d'affectation

L'icône verticale "Grille" permet de "colorier les espaces sur le plan en fonction des calques d'affectation" présents sur l'étage.
Après rechargement des données (icône en haut à droite de l'écran) et rafraichissement (F5), les données cumulées pour chaque calque d'affectation sont disponibles en ouvrant le papillon en face de chaque calque, ou en ouvrant le papillon global.

## Rapport des données des calques d'affectation

Le rapport des données des calques d'affectation est disponible pour chaque bâtiment :
-   depuis la page d'accueil, cliquer sur l'icône en bout de ligne de couleur du bâtiment concerné
-   cliquer sur "Tableau de bord pour le bâtiment XXX"
-   cliquer sur "Rapport des calques d'analyse des espaces du bâtiment XXX"

Le fichier Excel obtenu contient toutes les données des espaces liés aux calques d'affectation du bâtiment.


:::tip Bon à savoir
Depuis la page d'accueil, "Lister les bâtiments" dans le menu contextuel permet de sélectionner plusieurs bâtiments et d'obtenir les rapports du tableau de bord sur l'ensemble des bâtiments sélectionnés.
:::
