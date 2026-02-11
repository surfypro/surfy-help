---
sidebar_position: 1
---
# Créer une Affectation à un quartier

Pour affecter des personnes à des quartiers, il faut tout d'abord créer des calques d'affectation puis définir les quartiers en qualifiant les espaces. Consulter la rubrique [Calques d'affectation](/docs/tutorials/dimensiontypetobuilding/create.md) pour tout savoir sur la création, modification ou suppression d'un calque d'affectation.

Une fois les quartiers créés sur les plans et pour créer l'affectation d'une personne à un quartier, il faut être en vision "Quartiers" regroupant les espaces d'un même quartier en entités uniques.

Pour changer la vision en mode Quartiers,

-   cliquer sur l'icône verticale "Changer la vision du plan"
-   sélectionner la vision "Quartiers"

Surfy est en mode affectation par quartier : Les calques d'affectation s'affichent sur le plan et le type de calque est sélectionné pour la navigation par quartiers.

Les informations du quartier, ses affectations et son inventaire sont accessibles de la même manière que pour un espace classique, en cliquant dans le quartier puis dans les onglets "Affectations" et "Inventaire" au dessus de la fiche du quartier.

## Affecter une personne à un quartier depuis le plan

Pour affecter une personne à un quartier depuis le plan, 

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



Si la personne n'est pas encore créée dans la base de données de Surfy, on peut "Créer et associer" cette personne au calque d'affectation :

-   cliquer sur "Créer et associer"
-   remplir la fiche de la personne
-   "valider la création" de la personne

La personne est créée et affectée au quartier correspondant.

## Visualiser les affectations à un quartier

Pour visualiser dans Surfy les affectations à un quartier :
-   cliquer sur le quartier pour le sélectionner
-   dans la fiche du quartier, cliquer sur l'onglet "Affectations"

On visualise alors la liste de l'ensemble des personnes affectées au quartier, par ordre alphabétique.

## Rapport de données des affectations aux quartiers

On peut exporter la liste des personnes affectées aux quartiers d'un bâtiment en fichier Excel.

Depuis la page d'accueil,

-   cliquer sur l'icône au bout de la bande de couleur du bâtiment concerné
-   demander le "Tableau de bord pour le bâtiment XXX", la liste des "rapports Excel" apparait
-   cliquer sur l'icône en bout de ligne du "Rapport des personnes affectées dans le bâtiment XXX"
-   ouvrir le fichier Excel correspondant, présent dans les téléchargements.
-   ouvrir l'onglet "AffecAuxCalquDAffec"

On obtient la liste des affectations aux calques d'affectation du bâtiment, ainsi que toutes les informations relatives aux personnes affectées à ces calques.


:::tip Bon à savoir
Depuis la page d'accueil, "Lister les bâtiments" dans le menu contextuel permet de sélectionner plusieurs bâtiments et d'obtenir les rapports du tableau de bord sur l'ensemble des bâtiments sélectionnés en cliquant sur l'icône appropriée en haut de page.
:::

## Affecter des personnes aux quartiers par import Excel

