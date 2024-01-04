---
sidebar_position: 2
---
# Créer un calque d'affectation

Un calque d'affectation est un calque d'analyse dont le type de calque est associé à un ou plusieurs bâtiments.
Pour créer un calque d'affectation, il faut que son type de calque existe et soit associé à un ou plusieurs bâtiments.

## Créer un type de calque d'affectation

Pour créer un type de calque d'affectation, depuis la page d'accueil :

-   cliquer sur "Administration", "Calques d'affectation", "Types de calque d'affectation" puis "Créer un type de calque d'affectation".
-   Nommer le type de calque dans "Nom du type de dimension" (ex: "Nature des sols")
-   "valider la création" du type de calque.

Le type de calque étant créé, on peut associer des calques d'affectation à ce type de calque

## Créer et associer un calque d'affectation à un type de calque d'affectation

Une fois que le type de calque d'affectation est créé ou s'il est déjà existant, on peut créer et lui associer un calque d'affectation:

-   cliquer sur "Administration", "Calques d'affectation", "Calques d'affectation", puis "Créer un calque d'affectation".
-   renseigner le "Nom du calque d'affectation" (ex: "Moquette")
-   choisir le "Type de calque d'affectation" dans la liste des types de calque en cliquant sur le "crayon" (ex: "Nature des sols")
-   choisir une couleur pour représenter les espaces qualifiés par ce calque d'affectation
-   "valider la création" du calque d'affectation.

:::tip Bon à savoir
On peut également créer des calques d'affectation en modifiant le type de calque afin de lui associer directement les calques à créer : Pour cela, il faut "Modifier le type de calque d'affectation XXX" puis "Créer un calque d'affectation" et lui donner son nom et sa couleur. Le calque créé aura par défaut le type de calque XXX en modification.
:::

## Qualifier un espace par un calque d'affectation

Après rafraichissement (F5), le calque est disponible pour la qualification des espaces:
-   sélectionner l'espace à qualifier
-   cliquer sur "Modifier" dans la fiche de l'espace, à gauche du plan
-   choisir le type de calque voulu dans la liste des qualifications d'espace
-   choisir le calque adapté pour l'espace sélectionné

L'espace sélectionné est qualifié par le calque choisi

## Visualiser les calques d'affectation

L'icône verticale "Palette" permet de visualiser sur le plan tous les calques d'affectation présents sur l'étage.
Après rechargement des données (icône en haut à droite de l'écran) et rafraichissement (F5), les données cumulées pour chaque calque sont disponibles en ouvrant le papillon en face de chaque calque, ou en ouvrant le papillon global.

## Rapport des données des calques d'affectation

Le rapport des données des calques d'affectation est disponible pour chaque bâtiment :
-   depuis la page d'accueil, cliquer sur l'icône en bout de ligne de couleur du bâtiment concerné
-   cliquer sur "Tableau de bord pour le bâtiment XXX"
-   cliquer sur "Rapport des calques d'affectation des espaces du bâtiment XXX"

Le fichier Excel obtenu contient toutes les données liées aux calques d'affectation du bâtiment.


:::tip Bon à savoir
Depuis la page d'accueil, "Lister les bâtiments" dans le menu contextuel permet de sélectionner plusieurs bâtiments et d'obtenir les rapports du tableau de bord sur l'ensemble des bâtiments sélectionnés.
:::
