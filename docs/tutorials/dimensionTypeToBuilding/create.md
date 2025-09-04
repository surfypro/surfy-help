---
sidebar_position: 2
---
# Créer un calque d'affectation


Un calque d'affectation est un calque d'analyse dont le type de calque est associé à un ou plusieurs bâtiments.<br />
Il permet l'affectation de personnes à des "Quartiers" composés de un ou plusieurs espaces des bâtiments concernés.<br />

Pour plus d'information sur la création d'un calque d'analyse, voir le chapitre [Créer un calque d'analyse](/docs/tutorials/dimensionType/create.md)

Un calque d'affectation permet de regrouper, qualifier et représenter les espaces par Quartiers sur le plan, afin d'obtenir le cumul des informations, la localisation des espaces regroupés et l'ensemble des affectations des personnes aux Quartiers des bâtiments.

Les "calques d'affectation" de même nature sont regroupés dans un "type de calque" commun.
Par exemple, le type de calque "Quartiers Bât A" regroupe les calques d'affectation "Quartier A1", "Quartier A2", "Quartier A3".

Pour créer un calque d'affectation, il faut que son type de calque existe.

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
