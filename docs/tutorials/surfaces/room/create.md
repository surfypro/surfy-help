---
sidebar_position: 2
---


# Créer un espace


<Youtube code="9A0XQaxj6hA"/>

Pour créer un espace (ou pièce) sur un étage qui a déjà son fond de plan et son échelle :

-   depuis le plan de l'étage, cliquer sur le plan pour faire apparaître les icônes dans la zone située au dessus du plan
-   choisir d' "activer le mode édition du plan" en cliquant sur l'icône "crayon".
-   cliquer sur l'icône "Ajouter un espace" permet d'avoir une croix indiquant l'horizontalité et la verticalité afin de faciliter le placement correct des sommets de l'espace à créer.

:::warning Attention
L'icône "Ajouter un espace" n'apparait que si aucun espace ni aucun objet n'est sélectionné (pour cela, cliquer sur une zone non digitalisée du plan), et que l'icône "Activer le mode édition du plan" est activée.
:::


-   cliquer pour créer le premier sommet de l'espace. La possibilité d'avoir un trait horizontal, à 45 degrés ou vertical est annulée en appuyant sur la touche "Shift", permettant de libérer complètement l'emplacement de création du sommet suivant.
-   en zoomant et dézoomant, placer la souris à l'endroit désiré et cliquer pour créer le deuxième sommet.
-   de même, cliquer pour créer le troisième sommet. Surfy propose de clore l'espace ou de continuer à créer des sommets.
-   pour clore l'espace, cliquer pour créer le dernier sommet puis sur l'icone "disquette" au dessus du plan pour "sauvegarder l'espace en cours".
-   l'espace est créé et la fiche de l'espace indique sa surface et son périmètre.

## Créer des espaces contigus

Créer le plan d'un étage implique une certaine continuité entre les espaces. Par exemple entre un bureau fermé et la circulation, ou entre un espace ouvert et la circulation.<br />
Pour assurer cette continuité et créer une "toile d'araignée" plutôt qu'une suite d'espaces indépendants, il est nécessaire de créer des segments communs aux espaces contigus.

Pour créer un segment commun à deux espaces, il faut fusionner un sommet de l'espace A avec un sommet de l'espace B, de chaque coté du segment à rendre commun. Une fois que les sommets de part et d'autre du segment sont communs, le segment est commun et se colorie en rouge.<br />
On peut alors qualifier le segment commun en "Porte" ou "sans cloison".

Les portes sont matérialisées sur la vue 2D des plans, avec leur sens d'ouverture et débattement. Les passages sont représentés en pointillés.
Les portes et passages sont également visualisés dans la vue 3D de l'étage ou du bâtiment.

Plus d'informations sur la [création d'un segment commun à deux espaces](/docs/tutorials/surfaces/doors/create#création-dun-segment-commun-à-deux-espaces)
et sur la [création de portes et passages](/docs/tutorials/surfaces/doors/create#qualification-dun-segment-commun-en-porte-ou-passage).

Une fois les segments communs créés et qualifiés en portes ou passages, l'itinéraire peut être utilisé pour tracer le déplacement sur le plan et obtenir le temps et la distance à parcourir entre le point de départ et le point d'arrivée.<br />
Plus d'informations sur la [création d'un itinéraire](/docs/tutorials/surfaces/pathfinding/create)



### Créer des espaces reliés par des segments communs

Pour créer des espaces reliés par des segments communs,

-   depuis le plan de l'étage, cliquer sur le plan pour faire apparaître les icônes dans la zone située au dessus du plan
-   "activer le mode édition du plan" en cliquant sur l'icône "crayon".
-   créer le premier espace en ayant soin de créer des sommets aux endroits de jonction avec le deuxième espace. En cas d'oubli, ces sommets peuvent être créés postérieurement.
-   créer le deuxième espace. A la jonction entre les deux espaces, maintenir la touche "alt" enfoncée.
-   cliquer sur le premier sommet de jonction du premier espace, allumé en vert. Le sommet créé est commun avec le sommet du premier espace.
-   maintenir la touche "alt" enfoncée et cliquer sur le deuxième sommet de jonction entre les deux espaces. Le deuxième sommet commun est créé, le segment entre les deux sommets communs est maintenant commun.
-   relacher la touche "alt" lors de la création de sommets simples.

En cas d'absence ou d'oubli, une fois l'espace créé et pour créer un sommet supplémentaire afin de le fusionner :

-   cliquer sur un sommet puis sur l'icône "+" gris foncé au dessus du plan pour "ajouter un sommet sur un segment"
-   passer la souris sur le segment sur lequel le sommet est à créer
-   quand le segment est de couleur rouge, cliquer pour ajouter le sommet à l'endroit voulu
-   on peut déplacer le sommet après sa création en le glissant-déplaçant
-   sélectionner (avec "shift" enfoncé) les deux sommets à fusionner puis sur l'icône "fusionner les sommets" au dessus du plan
-   cliquer sur un sommet puis sur l'icône "+" gris foncé pour "arrêter l'ajout d'un sommet sur un segment".

En mode "Edition du plan", les segments communs sont plus larges et coloriés en rouge, permettant de les repérer facilement afin de leur attribuer une porte ou passage.

:::warning ATTENTION
Un segment sera commun si aucun sommet supplémentaire n'existe entre les deux sommets communs. Si un sommet intempestif existe, le supprimer en cliquant dessus puis sur l'icône "Poubelle" pour "supprimer les sommets sélectionnés" et rendre le segment commun.
:::

:::tip BON A SAVOIR
Pour digitaliser efficacement les espaces, on peut créer chacun des espaces indépendants dans un premier temps (bureaux fermés, salles de réunion, ...), puis créer la circulation ensuite, en utilisant la touche "alt" pour fusionner au fur et à mesure les sommets des espaces indépendants avec les sommets de la circulation lors de leur création.
:::

## Qualifier un espace

-   une fois l'espace créé, on doit le "modifier" sur sa fiche à gauche du plan pour lui donner un nom, une capacité éventuelle, une organisation, une typologie de l'espace, un centre de coût.
-   "sauvegarder" les informations.
-   compléter éventuellement les qualifications dans les différents calques d'analyse. La sauvegarde de ces informations est automatique.

Il est important de renseigner au moins une qualification d'espace comme la "typologie", afin de donner une couleur aux espaces des plans. 
Après rafraîchissement, l'espace affiche la couleur de la typologie choisie. Cela permet de savoir quels espaces sont créés et  renseignés.

:::tip Bon à savoir
L'icône "goutte" au dessus du plan permet d'"activer la transparence des couleurs" et de voir les différents éléments présents sur le fond de plan à travers les couleurs des calques de Surfy.
:::

## Rechercher un espace

On peut géolocaliser et accéder à la fiche d'un espace de plusieurs façons :

-   par la loupe en effectuant une recherche puis en cliquant sur l'espace recherché
-   par la [liste filtrée](/docs/courses/find/listfindcourse.md) des espaces ("Espaces", "Espaces", "Lister les espaces" puis "filtrer les espaces")
-   par l'affectation de la personne en cliquant dans l'espace de la personne affectée