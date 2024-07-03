---
sidebar_position: 3
---

# Supprimer une Affectation à un quartier

Pour supprimer l'affectation d'une personne à un quartier, il faut être en mode "Navigation par calque d'affectation".

## Passer en navigation par quartiers

Pour passer en navigation "par quartiers", ou "par calques d'affectation",

-   cliquer sur l'icone verticale "Grille" pour "Colorier les espaces sur le plan en fonction des calques d'affectation"
-   cliquer sur l'icone en bout de ligne du nom du calque pour "sélectionner le type de calque pour la navigation" afin d'activer la sélection par quartiers
-   les informations du quartier, ses affectations et son inventaire sont accessibles de la même manière que pour un espace classique, en cliquant dans le quartier.


:::tip Vision du plan
Cliquer sur l'icône verticale "Changer la vision du plan" et sélectionner "Calques d'affectation" permet en 2 clics de configurer Surfy en mode affectation par quartier : Les calques d'affectation s'affichent sur le plan et le type de calque est sélectionné pour la navigation. Tant que la vision n'est pas changée, elle reste effective même après rafraichissement (F5). Il faut donc penser à revenir dans la vision par défaut "Typologies des espaces" pour une utilisation standard.
:::


Les affectations au quartier sont accessibles en cliquant dans le quartier pour le sélectionner.

## Suppression d'affectation individuelle

Pour supprimer l'affectation d'une personne à un quartier,

-   cliquer sur le quartier pour le sélectionner, la fiche du quartier s'affiche à gauche du plan
-   cliquer sur l'onglet "Affectations" afin d'afficher les affectations présentes dans le quartier
-   cliquer sur l'icône "Poubelle" en face du nom de la personne XXX à désaffecter : "Supprimer l'affectation au espace XXX"
-   confirmer la suppression

L'affectation de la personne au quartier est supprimée

:::tip Bon à savoir
Supprimer l'affectation d'une personne ne supprime pas la personne. En revanche, supprimer une personne supprime toutes ses affectations !
:::

## Suppression par la liste filtrée des affectations :

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectations", "Affectations aux calques d'affectation" puis "Lister les affectations aux calques d'affectation"
-   filtrer la liste en fonction des calques et types de calque à l'aide de l'icône "Filtrer les affectations aux calques d'affectation", en haut à droite de l'écran
-   cocher les affectations à supprimer au début de chaque ligne, puis "supprimer les affectations aux calques d'affectation sélectionnées" par l'icône "poubelle" en haut de page.


## Suppression d'affectation en masse par fichier Excel

On peut supprimer en masse des affectations en changeant les personnes affectées pour les remplacer par une personne créée pour être ensuite supprimée :
-   créer une personne dont le nom et le prénom sont "SUPPRIMER"
-   sortir le fichier Excel des affectations à supprimer
-   remplacer le nom, prénom et identifiant des personnes affectées par le nom, le prénom et l'identifiant de la personne "SUPPRIMER"
-   importer le fichier des affectations
-   supprimer la personne "SUPPRIMER"

La personne étant supprimée, toutes ses affectations sont supprimées.



### Création du fichier Excel

On peut créer le fichier Excel comportant les affectations à supprimer de différentes manières :

-   En générant le fichier "Rapport des personnes affectées dans le bâtiment XXX" : 

    -   depuis la page d'accueil, cliquer sur l'icône au bout de la bande de couleur du bâtiment XXX
    -   cliquer sur "Tableau de bord pour le bâtiment XXX"
    -   cliquer sur l'icône de la ligne "Rapport des personnes affectées dans le bâtiment XXX" 
    -   le fichier est téléchargé, l'onglet "AffecAuxCalquDAffec" contient les affectations aux calques d'affectation à modifier

-   En générant la liste filtrée des affectations à supprimer :

    -   dans le menu Liste à gauche de l'écran, cliquer sur "Affectations", "Affectations aux calques d'affectation" puis "Lister les affectations aux calques d'affectation"
    -  filtrer la liste en fonction des calques et types de calque à l'aide de l'icône "Filtrer les affectations aux calques d'affectation", en haut à droite de l'écran
    -  générer le fichier Excel de la liste obtenue, en cliquant sur l'icône "Télécharger en Excel les affectations aux calques d'affectation" en haut à droite de l'écran
    -   le fichier est téléchargé et contient les affectations aux calques d'affectation de la liste filtrée.


### Traitement des informations dans le fichier Excel

Dans le fichier Excel, à chaque ligne d'affectation à supprimer, remplacer le nom prénom et identifiant des personnes affectées par le nom prénom et identifiant de la personne "SUPPRIMER"

Une fois le fichier modifié, il reste à l'importer dans Surfy puis à supprimer la personne "SUPPRIMER"

### Importation du fichier Excel modifié

Sélectionner les colonnes de l'identifiant de l'affectation et de l'identifiant de la personne "SUPPRIMER" en deux colonnes contigües.
Un copier-coller dans un nouvel onglet peut être nécessaire afin d'avoir des colonnes contigües.

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectations", "Affectations aux calques d'affectation" puis "importer des affectations aux calques d'affectation"
-   coller les colonnes contigües dans la case centrale
-   cliquer sur "Comparer", Surfy propose les modifications à apporter
-   cliquer sur "Créer tout", ou cocher les cases désirées et cliquer sur "Créer"
-   les affectations à supprimer ont pour personne affectée "SUPPRIMER"
-   supprimer la personne "SUPPRIMER" pour supprimer toutes ses affectations.