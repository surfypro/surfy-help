---
sidebar_position: 2
---
# Modifier une Affectation à un quartier


## Modifier l'affectation d'une personne à un quartier depuis le plan

Pour modifier l'affectation d'une personne à un quartier depuis le plan, il faut être en vision "Quartiers" regroupant les espaces d'un même quartier en entités uniques.

Pour changer la vision en mode Quartiers,

-   cliquer sur l'icône verticale "Changer la vision du plan"
-   sélectionner la vision "Quartiers"

Surfy est en mode affectation par quartier : Les calques d'affectation s'affichent sur le plan et le type de calque est sélectionné pour la navigation par quartiers.

Les informations du quartier, ses affectations et son inventaire sont accessibles de la même manière que pour un espace classique, en cliquant dans le quartier puis dans les onglets "Affectations" et "Inventaire" au dessus de la fiche du quartier.




-   cliquer dans le quartier pour le sélectionner sur le plan
-   cliquer sur l'icône "Affecter une personne à XXX" en haut à gauche de la fiche du quartier
-   Rechercher et sélectionner dans la liste la <P code="dimensionToPerson:person" /> à affecter

La personne est affectée au quartier.

## Affecter une personne à un quartier depuis la fiche de la personne

On peut modifier les affectations d'une personne en modifiant la fiche de la personne.

La loupe de recherche sous le logo de l'entreprise permet de rechercher une personne dans la base de données de Surfy.

Cliquer sur le nom ouvre la fiche de la personne, avec ses informations d'affectations.

Pour modifier ces informations,

-   cliquer dans le menu contextuel (case grise sous la loupe de recherche) pour "modifier la personne XXX"
-   en bas de page, cliquer sur la bande "Affectations aux calques d'affectation"

Les quartiers d'affectation de la personne sont disponibles à la création, modification ou suppression.

Pour créer une nouvelle affectation,

-   cliquer sur "Créer une affectation au calque d'affectation"
-   choisir le calque d'analyse pour l'affectation
-   choisir la priorité d'affectation (voir [Gérer les priorités des quartiers de réservation](/docs/tutorials/booking/workstationbooking/intro#gérer-les-priorités-des-quartiers-de-réservation))
-   comptabiliser ou non l'affectation dans les données d'occupation


## Modification de l'affectation à un quartier d'une personne

La manière la plus simple de modifier l'affectation à un quartier d'une personne dans Surfy est de supprimer son affectation au quartier puis de créer une nouvelle affectation, qu'elle soit à un quartier ou non.
Pour déplacer une personne d'un quartier à un autre, voir les chapitres [Supprimer une affectation à un quartier](/docs/tutorials/affectations/dimensiontoperson/delete.md) et [Créer une affectation à un quartier](/docs/tutorials/affectations/dimensiontoperson/create.md).


## Modification d'affectation à un quartier en masse par fichier Excel

On peut modifier en masse des affectations à un quartier en changeant les personnes affectées dans un fichier Excel pour les remplacer par d'autres personnes à affecter au quartier. Cela revient à garder l'identifiant de l'affectation, mais à changer l'identifiant de la personne affectée :

### Création du fichier Excel des affectations à un quartier

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


### Modification des informations dans le fichier Excel

-   ouvrir le fichier Excel des affectations à modifier
-   remplacer le nom, prénom et identifiant des personnes affectées par le nom, le prénom et l'identifiant des personnes à affecter.


### Import du fichier Excel modifié

Préparation de l'importation,

-   sélectionner les colonnes de l'identifiant de l'affectation et de l'identifiant de la personne
-   copier les deux colonnes avec leur en-tête
-   coller les deux colonnes dans une nouvelle feuille du fichier Excel afin d'avoir deux colonnes contigües

-   cliquer sur "Affectations", "Affectations aux calques d'affectation" puis "importer des affectations aux calques d'affectation"
-   coller les colonnes contigües dans la case centrale
-   cliquer sur "Comparer", Surfy propose les modifications à apporter
-   cliquer sur "Créer tout", ou cocher les cases désirées et cliquer sur "Créer"
-   les affectations ont été modifiées

