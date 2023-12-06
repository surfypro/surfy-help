---
sidebar_position: 3
---

# Supprimer une Affectation à un espace

## Suppression d'affectation manuelle dans Surfy

Pour supprimer dans Surfy l'affectation à un espace,

-   cliquer sur l'espace, la fiche de l'espace s'affiche à gauche du plan
-   cliquer sur l'onglet "Affectations" afin d'afficher les affectations présentes dans l'espace
-   cliquer sur l'icône "Poubelle" en face du nom de la personne XXX à désaffecter : "Supprimer l'affectation au espace XXX"
-   confirmer la suppression
L'affectation de la personne est supprimée

:::tip Bon à savoir
Supprimer l'affectation d'une personne ne supprime pas la personne. En revanche, supprimer une personne supprime toutes ses affectations !
:::

## Suppression par la liste filtrée des affectations :

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectations", "Affectations d'espace" puis "Lister les affectations d'espace"
-   filtrer la liste en fonction des critères voulus: bâtiment, étage, espace, ... par les deux premières icônes en haut à droite de l'écran
-   Une fois la liste filtrée, on peut cocher chaque affectation à supprimer au début de chaque ligne, puis "supprimer les affectations d'espace sélectionnées" par l'icône "poubelle" en haut de page.


## Suppression d'affectation en masse par fichier Excel (fonctionnalité non disponible)


### Création du fichier Excel

On peut créer le fichier Excel comportant les affectations à supprimer de différentes manières :

-   En générant le fichier "Rapport des personnes affectées dans le bâtiment XXX" : 
    -   depuis la page d'accueil, cliquer sur l'icône au bout de la bande de couleur du bâtiment XXX
    -   cliquer sur "Tableau de bord pour le bâtiment XXX"
    -   cliquer sur l'icône de la ligne "Rapport des personnes affectées dans le bâtiment XXX" 
    -   le fichier est téléchargé, l'onglet "Affectations d'espace" contient les informations à modifier

-   En générant la liste filtrée des affectations à supprimer :

    -   dans le menu Liste à gauche de l'écran, cliquer sur "Affectations", "Affectations d'espace" puis "Lister les affectations d'espace"
    -   filtrer la liste en fonction des critères voulus: bâtiment, étage, espace, ... par les deux premières icônes en haut à droite de l'écran
    -   générer le fichier Excel de la liste obtenue, en cliquant sur l'icône "Télécharger en Excel les affectations d'espace" en haut à droite de l'écran
    -   le fichier est téléchargé


### Traitement des informations dans le fichier Excel

Pour supprimer une affectation, il faut :

-   effacer les cases "Identifiant Surfy", "Prénom" et "Nom de famille" (colonnes B, C, D) de la ligne de l'affectation à supprimer.
-   La colonnes A (identifiant de l'affectation) doit rester inchangée.
-   les colonnes à importer sont A,B,C,D et doivent rester contigües
-   copier ces colonnes contigües par "ctrl C".


### Importation du fichier Excel modifié

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectation", "Affectations d'espace" puis "importer des affectations d'espace"
-   coller les colonnes contigües dans la case centrale
-   cliquer sur "Comparer", Surfy propose les modifications à apporter
-   cliquer sur "Créer tout", ou cocher les cases désirées et cliquer sur "Créer"
-   les affectations cochées sont supprimées