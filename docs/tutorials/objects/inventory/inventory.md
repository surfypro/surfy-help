---
sidebar_position: 1
---

# Gérer l'inventaire

## L'inventaire des objets

Chaque objet peut être inventorié dans Surfy grâce à sa référence ou à son code d'immobilisation.<br />
Il devient ainsi un objet unique, géolocalisable sur les plans par la loupe de recherche.<br />
Chaque objet dispose également d'une date d'achat.<br />
Les autres informations (prix, description, fabricant) sont accessibles et modifiables dans le type d'objet de l'objet et concernent tous les objets du même type.

## Référencer un objet

Pour donner une référence (ou un code d'immobilisation, ou une date d'achat) à un objet, depuis le plan d'un étage,

-   cliquer sur l'objet
-   cliquer sur "Modifier" dans la fiche de l'objet à gauche
-   taper la référence (ou le code d'immobilisation) dans la case concernée
-   indiquer éventuellement la date d'achat de l'objet
-   "Sauvegarder" les modifications

:::tip Bon à savoir
La "Référence" de l'objet peut être affichée sur tous les objets du même type en cochant la case "Afficher les informations sur le plan" dans la [fiche du type d'objet](/docs/tutorials/objects/itemtype/types-d-objet-a-l-echelle/edit#modifier-les-informations-du-type-dobjet). La référence peut être recherchée avec la loupe afin de géolocaliser l'objet sur le plan, et est visible en passant la souris sur l'objet.<br />
Le "Code d'immobilisation" peut être recherché avec la loupe afin de géolocaliser l'objet sur le plan. Il est visible en passant la souris sur l'objet mais n'est pas affichable sur l'objet.<br />
:::

## Référencer les objets d'un type de poste de travail

Un poste de travail est composé d'un ou plusieurs objets "virtuels" regroupés.<br />
Par défaut, ces objets "virtuels" ne peuvent pas être référencés individuellement.<br />

Pour attribuer à chaque objet du poste de travail des informations propres, il est nécessaire de rendre ces objets "physiques".

### Configurer les objets physiques pour un type de poste de travail

Pour rendre "physiques" les objets d'un type de poste de travail, depuis le plan d'un étage,

-   cliquer sur un des postes de travail concerné
-   dans la fiche du poste de travail, à gauche, cliquer sur l'icône en début de ligne du "type de poste de travail" pour "voir plus d'option pour le type de poste de travail XXX"
-   choisir d' "éditer les formes et l'emplacement des types d'objet pour le type de poste de travail XXX"

La composition du poste de travail est affichée sur l'écran.

-   ouvrir l'icône en haut à gauche de la page pour "commencer la manipulation de l'espace de travail"
-   cliquer sur la dernière icône de la ligne pour "lister les types d'objet"

La liste des objets composant le type de poste de travail apparait à droite.

-   cocher la case "inventaire physique" des objets à rendre "physiques"

:::tip Bon à savoir
A ce stade, cliquer sur le "papillon" à droite de l'objet permet de définir le nombre de places assises représentées par l'objet
:::

Une fois cette opération effectuée, il faut créer les postes de travail "Physiques".

### Créer les postes de travail physiques

Une fois que les objets composant le poste de travail ont été cochés, il est nécessaire de créer les postes de travail "physiques".

Pour cela, depuis le menu de gauche,

-   cliquer sur "Administration, "Entreprises" puis "Les rapports et les actions pour la qualité de données pour les entreprises" puis "Cohérence de l'inventaire"

Les postes de travail correspondant au type de poste de travail à créer en "physique" s'affichent.

-   cliquer sur "Create" pour créer les objets physiques concernés.

Les postes de travail physiques sont créés.<br />
Sur le plan, on peut maintenant indiquer une référence à chaque objet physique des postes de travail.

### Référencer les objets des postes de travail

Pour référencer un objet composant un poste de travail, celui ci doit être déclaré "physique".<br />
En cliquant sur un poste de travail sur le plan, la liste des objets le composant s'affiche en bas de la fiche du poste de travail.

-   Cliquer sur l'icône "crayon" pour "modifier l'objet" en bout de ligne de l'objet à référencer permet d'accéder à la référence, au code d'immobilisation et à la date d'achat de l'objet à droite de l'écran.

Si l'icône "crayon" n'apparait pas, c'est que l'objet n'a pas été déclaré "physique". Voir dans ce cas comment [configurer les objets physiques pour un type de poste de travail](/docs/tutorials/objects/inventory/#configurer-les-objets-physiques-pour-un-type-de-poste-de-travail)
-   compléter les informations et "sauvegarder".

L'objet composant le poste de travail est référencé.

Les champs "Référence", "Code d'immobilisation" et "Date d'achat" apparaissent dans le fichier Excel du ["rapport de l'inventaire"](/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting#rapport-de-linventaire-du-bâtiment) depuis le [Tableau de bord du bâtiment](/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting).


