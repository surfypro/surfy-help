---
sidebar_position: 1
---

# Manage Inventory

## Object Inventory

Each object can be inventoried in Surfy thanks to its reference or asset code.<br />
It thus becomes a unique object, geolocatable on plans by the search magnifying glass.<br />
Each object also has a purchase date.<br />
Other information (price, description, manufacturer) is accessible and modifiable in the object's object type and concerns all objects of the same type.

## Reference an Object

To give a reference (or an asset code, or a purchase date) to an object, from a floor plan,

-   click on the object
-   click on "Modify" in the object card on the left
-   type the <P code="item:reference" /> (or the <P code="item:code" />) in the concerned box
-   optionally indicate the object's <P code="item:purchaseDate" />
-   "Save" the modifications

:::tip Good to Know
The object's "Reference" can be displayed on all objects of the same type by checking the "Display information on plan" box in the [object type card](/en/docs/tutorials/objects/itemtype/types-d-objet-a-l-echelle/edit#modify-object-type-information). The reference can be searched with the magnifying glass to geolocate the object on the plan, and is visible by passing the mouse over the object.<br />
The "Asset code" can be searched with the magnifying glass to geolocate the object on the plan. It is visible by passing the mouse over the object but is not displayable on the object.<br />
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

-   cliquer sur "CREATE" pour créer les objets physiques concernés.

:::warning BON A SAVOIR
Si des postes de travail "physiques" ont été créés et que la case "objet physique" a été ensuite décochée sur les objets composant le type de poste de travail, ces postes de travail anciennement "physiques" sont proposés à la suppression. Cliquer sur "DELETE" ne supprimera que leur représentation "physique" et ne supprimera pas les postes de travail sur les plans, ceux-ci étant virtuels.<br />
Cependant, si certains objets anciennement "physiques" ont gardé une information de référencement propre, ils ne pourront pas être supprimés et s'afficheront en erreur dans cette page.
:::

Les postes de travail physiques sont créés.<br />
La page de création/suppression indique "All is fine".<br />
Sur le plan, on peut maintenant référencer chaque objet physique des postes de travail.

### Référencer les objets des postes de travail

Pour référencer un objet composant un poste de travail, celui ci doit être déclaré "physique".<br />
En cliquant sur un poste de travail sur le plan, la liste des objets le composant s'affiche en bas de la fiche du poste de travail.

-   Cliquer sur l'icône "crayon" pour "modifier l'objet" en bout de ligne de l'objet à référencer permet d'accéder à la référence, au code d'immobilisation et à la date d'achat de l'objet à droite de l'écran.

Si l'icône "crayon" n'apparait pas, c'est que l'objet n'a pas été déclaré "physique". Voir dans ce cas comment [configurer les objets physiques pour un type de poste de travail](/en/docs/tutorials/objects/inventory/#configurer-les-objets-physiques-pour-un-type-de-poste-de-travail)
-   compléter les informations et "sauvegarder".

L'objet composant le poste de travail est référencé.

Les champs "Référence", "Code d'immobilisation" et "Date d'achat" apparaissent dans le fichier Excel du ["rapport de l'inventaire"](/en/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting#rapport-de-linventaire-du-bâtiment) depuis le [Tableau de bord du bâtiment](/en/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting).


