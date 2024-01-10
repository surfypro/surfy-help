---
sidebar_position: 2
---
# Modifier une Affectation à un quartier

La meilleure manière de "modifier une affectation" est de supprimer puis recréer une affectation à un quartier.
Par exemple, si une personne change de quartier, son affectation initiale doit être supprimée et sa nouvelle affectation créée dans le nouveau quartier.


:::info Mode Expert
Pour une modification en masse par fichier Excel, on peut utiliser l'Identifiant de l'affectation et remplacer la personne affectée, notamment pour transférer des équipes d'un quartier à un autre par import Excel. 
:::

## Modification d'affectation en masse par fichier Excel

On peut modifier en masse des affectations à un quartier en changeant les personnes affectées dans un fichier Excel pour les remplacer par d'autres personnes à affecter au quartier. Cela revient à garder l'identifiant de l'affectation, mais à changer l'identifiant de la personne affectée :

### Création du fichier Excel

On peut créer le fichier Excel comportant les affectations à modifier de différentes manières :

-   En générant le fichier "Rapport des personnes affectées dans le bâtiment XXX" : 

    -   depuis la page d'accueil, cliquer sur l'icône au bout de la bande de couleur du bâtiment XXX
    -   cliquer sur "Tableau de bord pour le bâtiment XXX"
    -   cliquer sur l'icône de la ligne "Rapport des personnes affectées dans le bâtiment XXX" 
    -   le fichier est téléchargé, l'onglet "AffecAuxCalquDAffec" contient les affectations aux calques d'affectation à modifier

-   En générant la liste filtrée des affectations à modifier :

    -   dans le menu Liste à gauche de l'écran, cliquer sur "Affectations", "Affectations aux calques d'affectation" puis "Lister les affectations aux calques d'affectation"
    -  filtrer la liste en fonction des calques et types de calque à l'aide de l'icône "Filtrer les affectations aux calques d'affectation", en haut à droite de l'écran
    -  générer le fichier Excel de la liste obtenue, en cliquant sur l'icône "Télécharger en Excel les affectations aux calques d'affectation" en haut à droite de l'écran
    -   le fichier est téléchargé et contient les affectations aux calques d'affectation de la liste filtrée.


### Traitement des informations dans le fichier Excel

-   ouvrir le fichier Excel des affectations à modifier
-   remplacer le nom, prénom et identifiant des personnes affectées par le nom, le prénom et l'identifiant des personnes à affecter


### Importation du fichier Excel modifié

Sélectionner les colonnes de l'identifiant de l'affectation et de l'identifiant de la personne en deux colonnes contigües.
Un copier-coller dans un nouvel onglet peut être nécessaire afin d'avoir des colonnes contigües.

### Importation du fichier Excel modifié

-   copier les colonnes "Identifiant de l'affectation" et "Identifiant de la personne" de manière contigüe
-   cliquer sur "Affectations", "Affectations aux calques d'affectation" puis "importer des affectations aux calques d'affectation"
-   coller les colonnes contigües dans la case centrale
-   cliquer sur "Comparer", Surfy propose les modifications à apporter
-   cliquer sur "Créer tout", ou cocher les cases désirées et cliquer sur "Créer"
-   les affectations ont été modifiées

