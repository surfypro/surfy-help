---
sidebar_position: 1
---
# Créer un type de poste de travail

<Youtube code="EV6UUY1utws"/>


Pour créer un type de poste de travail dans Surfy, depuis le menu de gauche, 

-   cliquer sur "Mobiliers", "Typologies", "Types de poste de travail" puis "créer un type de poste de travail".
-   renseigner le <P code="workplaceType:name" /> du type de poste de travail (par exemple: PdT 180x80C) et la <P code="workplaceType:color" /> (blanc par défaut)
-   valider la création du type de poste de travail

## Compose the Workstation Type
 
:::tip Good to Know
To compose a workstation type, the object types composing the workstation type must be created beforehand.
:::

 -  click on the white page to display the command icons, or click on the icon at the top left of the page "Start workspace manipulation".
 -  click on the "Add an object type" icon
 -  choose the first object composing the workstation type (example: Desk 180x80) and drop it on the white sheet
 -  add the objects necessary for the workstation type composition (example: chair and Cabinet)
-   move and rotate the objects by clicking on "move the object type" to compose the workstation type
-   click on "List object types" to display the list of used object types
-   place the list elements on top of/below each other by dragging the "=" sign of the object type from top to bottom
 -  click on the "butterfly" to the right of the object type names to define the number of seats for each of them (example: 1 seat for the Desk chair)
 -  leaving the page saves the composition
 -  the created workstation type is available for adding a workstation in spaces.
 
 ## Composer un poste de travail avec des objets "physiques"

Depuis la page de composition du type de poste de travail,

-   cliquer sur l'icône "Lister les types d'objet" pour afficher à droite la liste des types d'objet utilisés
-   cocher la case "inventaire physique" d'un type d'objet utilisé dans la composition du poste de travail permet de définir les objets à déclarer "physiques", permettant l'attribution d'une <P code="item:reference" />, d'un <P code="item:code" /> et d'une <P code="item:purchaseDate" /> sur l'objet correspondant. Cela permet de créer un inventaire d'objets uniques.

Par défaut, les objets utilisés dans la composition d'un type de poste de travail ne peuvent être référencés et font l'objet d'un simple comptage.

### Création des objets physiques

Une fois la case "Inventaire physique" cochée, il est nécessaire de créer les objets physiques associés.

Pour cela, depuis le menu de gauche,

-   cliquer sur "Administration" puis "Entreprises" puis "Les rapports et actions pour la qualité de données pour les entreprises" puis "cohérence de l'inventaire"
-   la liste des objets physiques à créer apparait, classés par type de poste de travail.
-   cliquer sur la case "CREATE" afin de créer les objets physiques du type de poste de travail correspondant.

:::tip A CE STADE
Si un type de poste de travail est composé d'objets auparavant "physique" mais qui ont été décochés dans la composition du type de poste de travail, les postes de travail correspondants seront proposés à la suppression.<br />
Cliquer sur "DELETE" supprimera uniquement les objets "Physiques" mais ne supprimera pas les postes de travail correspondants, qui resteront présents mais non référençables.
:::

### Renseigner les informations des objets "physiques" créés

Depuis le plan, 

-   cliquer sur un poste de travail concerné, la fiche du poste de travail apparait
-   dans l'"inventaire physique du poste de travail", cliquer sur l'icône "crayon" face à l'objet "physique" à renseigner

Les informations de l'objet (<P code="item:reference" />, <P code="item:code" /> et <P code="item:purchaseDate" />) sont accessibles à droite de l'écran et peuvent être renseignés ou modifiés.