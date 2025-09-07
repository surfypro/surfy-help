---
sidebar_position: 1
---

# Create a Door or Passage

Creating a door or passage in Surfy allows you to mark possible passages from one space to another in order to guide the user in their movement from one place to another by a point-to-point route.

To create a passage between two different spaces, you must first create a common segment between the two spaces.
This common segment will then be qualified with or without a door to reflect reality.


## Création d'un segment commun à deux espaces
    
Un segment est une partie du périmètre d'un espace, délimitée par deux sommets.
Un segment commun est un segment délimité par deux sommets communs à deux espaces.

<Youtube code="iior39hytfk"/>


Pour créer un segment commun à deux espaces indépendants, il faut "fusionner les sommets" des deux espaces, de chaque coté du segment à rendre commun.

### Création des sommets à fusionner

-   "activer le mode édition du plan" en cliquant sur l'icône "crayon" au dessus du plan

-   cliquer dans le premier des deux espaces
-   pour créer le segment à convertir, il doit être encadré par deux sommets :
    -   cliquer sur l'icône "+" gris foncé au dessus du plan pour "ajouter un sommet sur un segment"
    -   passer la souris sur le segment
    -   quand le segment est de couleur rouge, cliquer pour ajouter le sommet à l'endroit voulu
    -   on peut déplacer le sommet après sa création en le glissant-déplaçant

-   cliquer dans le deuxième espace
-   créer un segment de la largeur approximative du segment du premier espace :
    -   cliquer sur l'icône "+" gris foncé au dessus du plan pour "ajouter un sommet sur un segment"
    -   passer la souris sur le segment
    -   quand le segment est de couleur rouge, cliquer pour ajouter les deux sommets près des sommets du premier espace

-   une fois les sommets créés, cliquer sur un sommet puis sur l'icône "+" gris foncé pour "arrêter l'ajout d'un sommet sur un segment".


### Fusionner les sommets

-   cliquer sur le premier sommet du premier espace. Le sommet fusionné prendra sa position.
-   enfoncer la touche "shift" et cliquer sur le premier sommet du deuxième espace
-   les deux sommets sont sélectionnés en rouge
-   cliquer sur l'icône "fusionner les sommets" au dessus du plan
-   le premier sommet est commun aux deux espaces, positionné sur le premier sommet sélectionné pour la fusion.

-   cliquer sur le deuxième sommet du premier espace. Le sommet fusionné prendra sa position.
-   enfoncer la touche "shift" et cliquer sur le deuxième sommet du deuxième espace
-   les deux sommets sont sélectionnés en rouge
-   cliquer sur l'icône "fusionner les sommets" au dessus du plan
-   le deuxième sommet est commun aux deux espaces, positionné sur le premier sommet sélectionné pour la fusion.

Une fois que les deux sommets des segments sont fusionnés, le segment obtenu est un segment commun.
En mode "Edition du plan", les segments communs sont plus larges et coloriés en rouge.

On peut modifier la longueur ou la position d'un segment commun en glissant-déplaçant les sommets du segment.

:::tip Bon à savoir
Lors de la fusion des sommets, le premier sommet sélectionné pour la fusion donnera sa place au sommet fusionné.
:::

 Le segment commun va pouvoir être qualifié afin de placer une porte ou un passage pour les itinéraires point à point.


## Qualification d'un segment commun en porte ou passage

On peut donner différentes qualifications à un segment :

-   sans cloison : permet de définir un passage sans cloison ni porte entre deux espaces différents
-   cloison simple : permet de définir une cloison sans passage entre deux espaces, ou en périphérie d'espace ouvert
-   porte à ouverture à droite : permet de définir une porte ouvrant à droite. Le sens peut être inversé pour correspondre à la réalité
-   porte à ouverture à gauche : permet de définir une porte ouvrant à gauche. Le sens peut être inversé pour correspondre à la réalité


Pour qualifier un segment,

-   cliquer sur l'icône "crayon" au dessus du plan afin d'"activer le mode édition du plan".
-   zoomer sur le segment pour le visualiser confortablement
-   sélectionner le segment en passant la souris dessus, le segment devient rouge
-   cliquer sur le segment quand il est sélectionné et rouge
-   renseigner le type segment dans la fiche du segment à gauche du plan
-   La sauvegarde est automatique


si besoin on peut inverser le sens de la porte ou afficher un double ouvrant,

-   cliquer sur "modifier"
-   cocher la case "inverser les points" pour changer le sens de la porte
-   cocher la case "afficher des deux cotés" pour représenter une porte à double ouvrant
-   sauvegarder les informations

:::tip Bon à savoir
La qualification du segment est valable sur toute la longueur du segment.
Ainsi, la représentation de la porte couvrira toute la longueur du segment qualifié.
:::


## Qualification d'un segment simple en cloison simple

Un segment simple n'appartient qu'à un seul espace. Il ne peut donc pas créer de passage.

La qualification d'un segment simple est identique à celle d'un segment commun.
On peut qualifier un segment simple en "porte" mais celle ci ne sera qu'une représentation graphique sur le plan.

Un segment simple peut être qualifié en "cloison simple" s'il sert à délimiter les murs périphériques d'un espace sans cloison, comme par exemple un espace ouvert ou une circulation.
