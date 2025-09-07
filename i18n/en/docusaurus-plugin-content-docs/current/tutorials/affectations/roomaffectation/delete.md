---
sidebar_position: 3
---

# Delete a Space Assignment

## Individual Assignment Deletion

To delete a person's assignment to a space,

-   click on the space, the space card is displayed on the left of the plan
-   click on the "Assignments" tab to display the assignments present in the space
-   click on the "Trash" icon in front of the name of person XXX to unassign: "Delete assignment to space XXX"
-   confirm the deletion
The person's assignment is deleted

:::tip Good to Know
Deleting a person's assignment does not delete the person. However, deleting a person deletes all their assignments!
:::

## Suppression par la liste filtrée des affectations :

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectations", "Affectations d'espace" puis "Lister les affectations d'espace"
-   filtrer la liste en fonction des critères voulus: bâtiment, étage, espace, ... par les deux premières icônes en haut à droite de l'écran : Sélectionner les propriétés" et "Filtrer les affectations"
-   Une fois la liste filtrée, on peut cocher chaque affectation à supprimer au début de chaque ligne, puis "supprimer les affectations d'espace sélectionnées" par l'icône "poubelle" en haut de page.


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
    -   le fichier est téléchargé, l'onglet "Affectations d'espace" contient les informations à modifier

-   En générant la liste filtrée des affectations à supprimer :

    -   dans le menu Liste à gauche de l'écran, cliquer sur "Affectations", "Affectations d'espace" puis "Lister les affectations d'espace"
    -   filtrer la liste en fonction des critères voulus: bâtiment, étage, espace, ... par les deux premières icônes en haut à droite de l'écran
    -   générer le fichier Excel de la liste obtenue, en cliquant sur l'icône "Télécharger en Excel les affectations d'espace" en haut à droite de l'écran
    -   le fichier est téléchargé et contient les affectations aux espaces de la liste filtrée.


### Traitement des informations dans le fichier Excel

Dans le fichier Excel, à chaque ligne d'affectation à supprimer, remplacer le nom prénom et identifiant des personnes affectées par le nom prénom et identifiant de la personne "SUPPRIMER"

Une fois le fichier modifié, il reste à l'importer dans Surfy puis à supprimer la personne "SUPPRIMER"

### Importation du fichier Excel modifié

Sélectionner les colonnes de l'identifiant de l'affectation et de l'identifiant de la personne "SUPPRIMER" en deux colonnes contigües.
Un copier-coller dans un nouvel onglet peut être nécessaire afin d'avoir des colonnes contigües.

Dans le menu Liste à gauche de l'écran,

-   cliquer sur "Affectations", "Affectations d'espace" puis "importer des affectations d'espace"
-   coller les colonnes contigües dans la case centrale
-   cliquer sur "Comparer", Surfy propose les modifications à apporter
-   cliquer sur "Créer tout", ou cocher les cases désirées et cliquer sur "Créer"
-   les affectations à supprimer ont pour personne affectée "SUPPRIMER"
-   supprimer la personne "SUPPRIMER" pour supprimer toutes ses affectations.