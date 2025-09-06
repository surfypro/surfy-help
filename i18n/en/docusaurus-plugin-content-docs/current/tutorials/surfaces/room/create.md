---
sidebar_position: 2
---


# Create a Space


<Youtube code="9A0XQaxj6hA"/>

To create a space (or room) on a floor that already has its plan background and scale:

-   from the floor plan, click on the plan to make icons appear in the area above the plan
-   choose to "activate plan editing mode" by clicking on the "pencil" icon.
-   clicking on the "Add a space" icon allows you to have a cross indicating horizontality and verticality to facilitate correct placement of the vertices of the space to create.

:::warning Attention
The "Add a space" icon only appears if no space or object is selected (for this, click on a non-digitized area of the plan), and the "Activate plan editing mode" icon is activated.
:::


-   click to create the first vertex of the space. The possibility of having a horizontal, 45-degree or vertical line is canceled by pressing the "Shift" key, allowing you to completely free the creation location of the next vertex.
-   by zooming in and out, place the mouse at the desired location and click to create the second vertex.
-   similarly, click to create the third vertex. Surfy offers to close the space or continue creating vertices.
-   to close the space, click to create the last vertex then on the "disk" icon above the plan to "save the current space".
-   the space is created and the space card indicates its surface and perimeter.

## Create Contiguous Spaces

Creating a floor plan involves some continuity between spaces. For example between a closed office and circulation, or between an open space and circulation.<br />
To ensure this continuity and create a "spider web" rather than a series of independent spaces, it is necessary to create common segments for contiguous spaces.

To create a common segment between two spaces, you must merge a vertex of space A with a vertex of space B, on each side of the segment to be made common. Once the vertices on either side of the segment are common, the segment is common and turns red.<br />
You can then qualify the common segment as "Door" or "without partition".

Doors are materialized on the 2D view of plans, with their opening direction and swing. Passages are represented by dotted lines.
Doors and passages are also visualized in the 3D view of the floor or building.

More information on [creating a common segment between two spaces](/en/docs/tutorials/surfaces/doors/create#creating-a-common-segment-between-two-spaces)
and on [creating doors and passages](/en/docs/tutorials/surfaces/doors/create#qualifying-a-common-segment-as-door-or-passage).

Once common segments are created and qualified as doors or passages, the route can be used to trace movement on the plan and get the time and distance to travel between the starting point and the arrival point.<br />
More information on [creating a route](/en/docs/tutorials/surfaces/pathfinding/create)



### Créer des espaces reliés par des segments communs

Pour créer des espaces reliés par des segments communs,

-   from the floor plan, click on the plan to make icons appear in the area above the plan
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

-   une fois l'espace créé, on doit le "modifier" sur sa fiche à gauche du plan pour lui donner un <P code="room:name" />, une <P code="room:capacity" /> éventuelle, une <P code="room:organization" />, une <P code="room:roomType" /> de l'espace, un <P code="room:costCenter" />.
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
-   par la [liste filtrée](/en/docs/courses/find/listfindcourse.md) des espaces ("Espaces", "Espaces", "Lister les espaces" puis "filtrer les espaces")
-   par l'affectation de la personne en cliquant dans l'espace de la personne affectée