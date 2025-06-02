---
sidebar_position: 2
---
# Modifier un type de poste de travail

En modifiant un type de poste de travail, tous les postes de travail associés à ce type de poste de travail seront modifiés.

## Modifier les informations du type de poste de travail

On peut modifier le nom et la couleur d'un type de poste de travail en modifiant la fiche du type de poste de travail.


Pour accéder à la fiche du poste de travail, depuis le menu de gauche,

-   cliquer sur "Mobiliers", "Typologies" puis "types de poste de travail" et "Lister les types de poste de travail"
-   au début de la ligne du type de poste de travail, cliquer sur l'icone "Voir plus d'options pour le type de poste de travail XXX" puis sur "Modifier le type de poste de travail XXX"
-   modifier le nom ou la couleur du type de poste de travail à modifier
-   "Sauvegarder" les modifications

## Modifier la composition du type de poste de travail

Un type de poste de travail est composé de un ou plusieurs types d'objet placés les uns par rapport aux autres et regroupé en une seule entité.
On peut ajouter, déplacer ou supprimer un type d'objet dans la composition d'un type de poste de travail afin de le modifier.


Pour modifier la composition d'un type de poste de travail, depuis le menu de gauche,

-   cliquer sur "Mobiliers", "Typologies" puis "types de poste de travail" et "Lister les types de poste de travail"
-   au début de la ligne du type de poste de travail à modifier, cliquer sur l'icone "Voir plus d'options pour le type de poste de travail XXX" puis sur "Editer les formes et l'emplacement des types d'objet pour le type de poste de travail XXX"
-   la composition actuelle apparait sur le plan.
-   cliquer sur l'icône "Commencer la manipulation de l'espace de travail" en haut à gauche de la page, afin de faire apparaitre les icônes de modification de la composition

-   cliquer sur l'icône "+" "Ajouter un type d'objet" permet d'ajouter un type d'objet dans la composition du type de poste de travail
-   cliquer sur l'icône "Déplacer le type d'objet" permet de déplacer les types d'objet les uns par rapport aux autres.
-   cliquer sur "Lister les types d'objet" ouvre une fenêtre à droite de l'écran afin de qualifier les types d'objet:
        -       en définissant le nombre de places assises pour chaque type d'objet dans le papillon en bout de ligne
        -       en cochant la case "Inventaire physique" du type d'objet, permettant l'attribution d'une référence et code d'immobilisation pour le type d'objet concerné afin de générer des objets physiques d'inventaire.
        -       en cliquant sur le signe "=" et glisser pour monter ou descendre un objet dans la liste afin de positionner un objet au dessus d'un autre

:::tip Bon à savoir
On peut accéder directement aux informations ou à la composition d'un type de poste de travail si celui ci est présent sur le plan: En cliquant sur un des postes de travail, l'icône "Voir plus d'options pour le type de poste de travail XXX" sur la fiche du poste de travail à gauche en début de la ligne "type de poste de travail", permet d'accéder directement à la fiche ou à la composition du type de poste de travail.
:::

:::danger Attention
Modifier la composition d'un type de poste de travail peut modifier sa position sur les plans, calculée à partir du point central (barycentre) de la composition du type de poste de travail
:::

 ## Modifier un poste de travail avec des objets "physiques"

Depuis la page de composition du type de poste de travail,

-   cliquer sur l'icône "Lister les types d'objet" pour afficher à droite la liste des types d'objet utilisés
-   cocher la case "inventaire physique" d'un type d'objet utilisé dans la composition du poste de travail permet de définir les objets à déclarer "physiques", permettant l'attribution d'une référence, d'un code d'immobilisation et d'une date d'achat sur l'objet correspondant. Cela permet de créer un inventaire d'objets uniques.

Par défaut, les objets utilisés dans la composition d'un type de poste de travail ne peuvent être référencés et font l'objet d'un simple comptage.

### Création des objets physiques

Une fois la case "Inventaire physique" cochée, il est nécessaire de créer les objets physiques associés.

Pour cela, depuis le menu de gauche,

-   cliquer sur "Administration" puis "Entreprises" puis "Les rapports et actions pour la qualité de données pour les entreprises" puis "cohérence de l'inventaire"
-   la liste des objets physiques à créer apparait, classés par type de poste de travail.
-   cliquer sur la case "CREATE" afin de créer les objets physiques du type de poste de travail correspondant.

### Suppression des objets physiques

Si un type de poste de travail est composé d'objets auparavant "physique" mais qui ont été décochés dans la composition du type de poste de travail, les postes de travail correspondants seront proposés à la suppression.<br />
Cliquer sur "DELETE" supprimera uniquement les objets "Physiques" mais ne supprimera pas les postes de travail correspondants, qui resteront présents mais non référençables.