---
sidebar_position: 1
---
# Créer un calque d'analyse

Un calque d'analyse permet de qualifier et représenter les espaces sur le plan afin d'obtenir le cumul des informations et la localisation des espaces regroupés.
Les "calques d'analyse" de même nature sont regroupés dans un "type de calque d'analyse" commun.
Par exemple, le type de calque d'analyse "Nature des sols" regroupe les calques d'analyse "Moquette", "Carrelage" ou "Lino".

Pour créer un calque d'analyse, il faut que son type de calque d'analyse existe.

## Créer un type de calque d'analyse

Pour créer un type de calque d'analyse, depuis la page d'accueil :

-   cliquer sur "Administration", "Calques d'analyse", "Types de calque d'analyse" puis "Créer un type de calque d'analyse".
-   Nommer le type de calque dans "Nom du type de dimension" (ex: "Nature des sols")
-   "valider la création" du type de calque.

Le type de calque étant créé, on peut associer des calques d'analyse à ce type de calque

## Créer et associer un calque d'analyse à un type de calque d'analyse


Une fois que le type de calque d'analyse est créé ou s'il est déjà existant, on peut créer et lui associer un calque d'analyse:

-   cliquer sur "Administration", "Calques d'analyse", "Calques d'analyse", puis "Créer un calque d'analyse".
-   renseigner le "Nom du calque d'analyse" (ex: "Moquette")
-   choisir le "Type de calque d'analyse" dans la liste des types de calque en cliquant sur le "crayon" (ex: "Nature des sols")
-   choisir une couleur pour représenter les espaces qualifiés par ce calque d'analyse
-   "valider la création" du calque d'analyse.

:::tip Bon à savoir
On peut également créer des calques d'analyse en modifiant le type de calque afin de lui associer directement les calques à créer : Pour cela, il faut "Modifier le type de calque d'analyse XXX" puis "Créer un calque d'analyse" et lui donner son nom et sa couleur. Le calque créé aura par défaut le type de calque XXX en modification.
:::

## Qualifier un espace par un calque d'analyse

Après rafraichissement (F5), le calque est disponible pour la qualification des espaces:
-   sélectionner l'espace à qualifier
-   cliquer sur "Modifier" dans la fiche de la pièce, à gauche du plan
-   choisir le type de calque voulu dans la liste des qualifications d'espace
-   choisir le calque adapté pour l'espace sélectionné

L'espace sélectionné est qualifié par le calque choisi

## Visualiser les calques d'analyse

L'icône verticale "Palette" permet de visualiser sur le plan tous les calques d'analyse présents sur l'étage.
Après rechargement des données (icône en haut à droite de l'écran) et rafraichissement (F5), les données cumulées pour chaque calque sont disponibles en ouvrant le papillon en face de chaque calque, ou en ouvrant le papillon global.

## Rapport des données des calques d'analyse

Le rapport des données des calques d'analyse est disponible pour chaque bâtiment :
-   depuis la page d'accueil, cliquer sur l'icône en bout de ligne de couleur du bâtiment concerné
-   cliquer sur "Tableau de bord pour le bâtiment XXX"
-   cliquer sur "Rapport des calques d'analyse des espaces du bâtiment XXX"

Le fichier Excel obtenu contient toutes les données liées aux calques d'analyse du bâtiment.


:::tip Bon à savoir
Depuis la page d'accueil, "Lister les bâtiments" dans le menu contextuel permet de sélectionner plusieurs bâtiments et d'obtenir les rapports du tableau de bord sur l'ensemble des bâtiments sélectionnés.
:::

