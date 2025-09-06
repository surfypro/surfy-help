---
sidebar_position: 3
---

# Modifier un espace

<Youtube code="_B7Jb3eAn4I"/>

Pour modifier la surface d'un espace dans Surfy,

-   activer le "mode édition du plan" en cliquant sur l'icône "crayon" au dessus du plan.
-   cliquer dans l'espace pour faire apparaître ses sommets.
-   en cliquant sur un sommet, le sommet passe en rouge et peut être glissé-déplacé. La valeur de la surface change instantanément dans la fenêtre d'information de l'espace.
-   en appuyant sur "Shift" lors de la sélection de plusieurs sommets on peut déplacer l'ensemble de ces sommets en même temps.
-   On peut supprimer un ou plusieurs sommets en les sélectionnant avec le "shift" puis en cliquant sur l'icône "corbeille" pour "supprimer les sommets sélectionnés".
-   On peut recréer d'autres sommets d'un espace en sélectionnant le sommet précédant les sommets à ajouter, puis en cliquant sur l'icône "+" gris clair afin d' "ajouter un sommet". En appuyant sur "ctrl", la liberté de mouvement nous permet de recréer un ou plusieurs sommets consécutifs à partir du sommet sélectionné en rouge afin de compléter la conception de l'espace. Une fois les sommets ajoutés, cliquer sur "arrêter l'ajout d'un sommet".
-   On peut ajouter un sommet sur un segment en cliquant sur un sommet puis sur l'icône "+" gris foncé pour "ajouter un sommet sur un segment". En passant la souris sur le segment désiré, le segment s'allume en rouge et un cercle rouge apparaît. En cliquant, on crée un sommet. Une fois les sommets créés, cliquer sur "arrêter l'ajout de sommets sur un segment".
-   pour séparer un espace en deux à partir de deux sommets, sélectionner les deux sommets avec le "Shift" et cliquer sur "séparer l'espace". Les deux espaces créés sont séparés par un segment commun.
-   On peut séparer complètement les deux espaces en cliquant sur l'icône "séparer le sommet" en deux afin d'avoir un sommet sur l'espace de gauche et un sommet sur l'espace de droite.
-   pour regrouper plusieurs sommets en un seul, sélectionner les sommets avec "shift" et cliquer sur l'icône "fusionner les sommets".

## Qualifier un espace ou modifier les informations d'un espace

Une fois l'espace créé, on peut modifier ou compléter ses informations :

-   cliquer sur la touche "Modifier" sur la fiche de l'espace, à gauche du plan, pour lui donner un <P code="room:name" />, une <P code="room:capacity" /> éventuelle, une <P code="room:organization" />, une <P code="room:roomType" /> de l'espace, un <P code="room:costCenter" />.
-   cliquer sur le crayon de la ligne à modifier pour choisir la bonne qualification dans le cas de choix multiples (typologie, organisation, centre de coût, ...)
-   "sauvegarder" les informations. 
-   Les calques d'analyse peuvent aussi être renseignés, la sauvegarde des calques est automatique et permet de qualifier rapidement d'un espace à un autre.

Il est important de renseigner au moins une qualification d'espace comme la "typologie", afin de donner une couleur aux espaces des plans. 
Après rafraîchissement, l'espace affiche la couleur de la typologie choisie. Cela permet de savoir quels espaces sont créés et  renseignés.

:::tip Bon à savoir
L'icône "goutte" au dessus du plan permet d'"activer la transparence des couleurs" et de voir les différents éléments présents sur le fond de plan à travers les couleurs des calques de Surfy.
:::

## Importer en masse des informations aux espaces

On peut importer un fichier excel comportant les informations à compléter aux espaces.<br />
Il est nécessaire d'importer la colonne comportant l'identifiant Surfy de l'espace, ainsi que la colonne comportant les informations à compléter en utilisant les bons en-têtes pour chaque colonne. Ces colonnes doivent être contiguës pour être importées dans Surfy.<br />
Pour plus de détail sur l'import en masse, merci de [nous contacter](https://www.surfy.pro/contact)

## Rechercher un espace

On peut géolocaliser et accéder à la fiche d'un espace de plusieurs façons :

-   par la loupe en effectuant une recherche puis en cliquant sur l'espace recherché
-   par la [liste filtrée](/docs/courses/find/listfindcourse.md) des espaces ("Espaces", "Espaces", "Lister les espaces" puis "filtrer les espaces")
-   par l'affectation de la personne en cliquant dans l'espace de la personne affectée


## Séparer un espace en deux


On peut séparer une espace dans Surfy pour créer deux espaces différents.
Pour cela, on sélectionne deux sommets de l'espace pour séparer l'espace en deux entre ces deux sommets.
Ces sommets doivent être positionnés sur les segments de l'espace.


<Youtube code="OH0KcuzeSgU"/>


### Créer les sommets pour la séparation

-   accéder à l'étage de l'espace à séparer
-   "activer le mode édition du plan" en cliquant sur l'icône "crayon" au dessus du plan de l'étage
-   cliquer dans l'espace à séparer
-   cliquer sur l'icône "+" noire au dessus du plan afin d'"ajouter un sommet sur un segment".

Un segment est une ligne droite entre deux sommets du périmètre de l'espace.
Il se colorie en rouge lors du passage de la souris et permet alors d'ajouter le sommet sur ce segment:

-   zoomer sur le segment
-   au passage de la souris sur le segment celui ci passe en rouge et affiche un cercle rouge pour créer un sommet. 
-   cliquer dans le cercle pour créer le sommet.
-   renouveller l'opération pour créer le deuxième sommet sur l'autre segment à séparer
-   cliquer sur l'icône "arrêter l'ajout d'un sommet sur un segment" au dessus du plan

### Séparer l'espace

Les deux sommets servant à la séparation étant créés,

-   sélectionner un des deux sommets qui passe en rouge
-   en maintenant la touche "shift" enfoncée, sélectionner le deuxième sommet qui passe également en rouge
-   cliquer sur l'icône "séparer l'espace" afin de couper l'espace en deux depuis les deux sommets sélectionnés

L'espace "XXX" est séparé en deux espaces : "XXX" et "XXX(2)"

Surfy propose d'attribuer au nouvel espace "XXX(2)" tout le mobilier et les affectations aux postes de travail qui correspondent à cet espace en cliquant sur "appliquer le changement d'espace". En cliquant sur "Fermer", le mobilier et les affectations aux postes de travail restent propriété de l'espace d'origine "XXX".
Dans tous les cas, les affectations à l'espace restent affectées à l'espace "XXX".

Le nouvel espace créé peut être renseigné sur son nom, sa typologie et tous les calques et informations nécessaires.

