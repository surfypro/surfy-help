---
sidebar_position: 3
---

# Supprimer une Affectation à un poste de travail


## Suppression d'affectation manuelle dans Surfy

Pour supprimer dans Surfy l'affectation à un poste de travail,

-   cliquer sur le poste de travail, la fiche du poste de travail s'affiche à gauche du plan
-   cliquer sur l'icône "Poubelle" en face du nom de la personne XXX à désaffecter : "Supprimer l'affectation au poste de travail XXX"
-   confirmer la suppression
L'affectation de la personne est supprimée

:::tip Bon à savoir
Supprimer l'affectation d'une personne ne supprime pas la personne. En revanche, supprimer une personne supprime toutes ses affectations !
:::

## Suppression par la liste filtrée des affectations :

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectations", "Affectations au poste de travail" puis "Lister les affectations au poste de travail"
-   filtrer la liste en fonction des critères voulus: bâtiment, étage, espace, ... par les deux premières icônes en haut à droite de l'écran
-   Une fois la liste filtrée, on peut cocher chaque affectation à supprimer au début de chaque ligne, puis "supprimer les affectations au poste de travail sélectionnées" par l'icône "poubelle" en haut de page.


## Suppression d'affectation en masse par fichier Excel


### Création du fichier Excel

On peut créer le fichier Excel comportant les affectations à supprimer de différentes manières :

-   En générant le fichier "Rapport des personnes affectées dans le bâtiment XXX" : 
    -   depuis la page d'accueil, cliquer sur l'icône au bout de la bande de couleur du bâtiment XXX
    -   cliquer sur "Tableau de bord pour le bâtiment XXX"
    -   cliquer sur l'icône de la ligne "Rapport des personnes affectées dans le bâtiment XXX" 
    -   le fichier est téléchargé

-   En générant la liste filtrée des affectations à supprimer :

    -   dans le menu Liste à gauche de l'écran, cliquer sur "Affectations", "Affectations au poste de travail" puis "Lister les affectations au poste de travail"
    -   filtrer la liste en fonction des critères voulus: bâtiment, étage, espace, ... par les deux premières icônes en haut à droite de l'écran
    -   générer le fichier Excel de la liste obtenue, en cliquant sur l'icône "Télécharger en Excel les affectations au poste de travail" en haut à droite de l'écran
    -   le fichier est téléchargé


### Traitement des informations dans le fichier Excel

Pour supprimer une affectation, il faut :

-   effacer les cases "Identifiant Surfy", "Prénom" et "Nom de famille" (colonnes B, C, D) de la ligne de l'affectation à supprimer.
-   La colonnes A (identifiant de l'affectation) doit rester inchangée.
-   les colonnes à importer sont A,B,C,D et doivent rester contigües
-   copier ces colonnes contigües par "ctrl C".


### Importation du fichier Excel modifié

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectation", "Affectations au poste de travail" puis "importer des affectations au poste de travail"
-   coller les colonnes contigües dans la case centrale
-   cliquer sur "Comparer", Surfy propose les modifications à apporter
-   cliquer sur "Créer tout", ou cocher les cases désirées et cliquer sur "Créer"
-   les affectations cochées sont supprimées


 