---
sidebar_position: 1
---
# Créer un type de poste de travail

<Youtube code="EV6UUY1utws"/>


Pour créer un type de poste de travail dans Surfy, depuis le menu de gauche, 

-   cliquer sur "Mobiliers", "Typologies", "Types de poste de travail" puis "créer un type de poste de travail".
-   renseigner le <P code="workplaceType:name" /> du type de poste de travail (par exemple: PdT 180x80C) et la <P code="workplaceType:color" /> (blanc par défaut)
-   valider la création du type de poste de travail

## Composer le type de poste de travail
 
:::tip Bon à savoir
Pour composer un type de poste de travail, les types d'objet composant le type de poste de travail doivent être créés au préalable.
:::

 -  cliquer sur la page blanche pour afficher les icônes de commande, ou cliquer sur l'icône en haut à gauche de la page "Commencer la manipulation de l'espace de travail".
 -  cliquer sur l'icône "Ajouter un type d'objet"
 -  choisir le premier objet composant le type de poste de travail (exemple: Bureau 180x80) et le déposer sur la feuille blanche
 -  ajouter les objets nécessaires à la composition du type de poste de travail (exemple: fauteuil et Caisson)
-   déplacer et tourner les objets en cliquant sur "déplaçer le type d'objet" pour composer le type de poste de travail
-   cliquer sur "Lister les types d'objet" pour afficher la liste des types d'objet utilisés
-   placer les éléments de la liste les uns sur/sous les autres en glissant déplaçant le signe "=" du type d'objet du haut vers le bas
 -  cliquer sur le "papillon" à droite du nom des types d'objet afin de définir le nombre de places assises pour chacun d'entre eux (exemple: 1 place assise pour le fauteuil Bureau)
 -  quitter la page permet la sauvegarde de la composition
 -  le type de poste de travail créé est disponible à l'ajoût d'un poste de travail dans les espaces.
 
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