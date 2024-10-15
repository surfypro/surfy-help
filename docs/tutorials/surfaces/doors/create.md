---
sidebar_position: 1
---

# Créer une porte ou un passage

Créer une porte ou un passage dans Surfy permet de marquer les passages possibles d'un espace à un autre afin de guider l'utilisateur dans son déplacement d'un endroit à un autre par un itinéraire point à point.

Pour créer un passage entre deux espaces différents, il faut tout d'abord créer un segment commun entre les deux espaces.
Ce segment commun sera ensuite qualifié avec ou sans porte afin de refléter la réalité.


## Création d'un segment commun à deux espaces
    
Un segment est une partie du périmètre d'un espace, délimitée par deux sommets.
Un segment commun est un segment délimité par deux sommets communs à deux espaces.

<Youtube code="iior39hytfk"/>


Pour créer un segment commun il faut "fusionner les sommets" des deux espaces, de chaque coté du segment.

### Création des sommets à fusionner

-   "activer le mode édition du plan" en cliquant sur l'icône "crayon" au dessus du plan

-   cliquer dans le premier des deux espaces
-   créer le segment à convertir, il doit être encadré par deux sommets :
    -   cliquer sur l'icône "+" au dessus du plan pour "ajouter un sommet sur un segment"
    -   passer la souris sur le segment
    -   quand le segment est de couleur rouge, cliquer pour ajouter le sommet à l'endroit voulu
    -   on peut déplacer le sommet après sa création en le glissant-déplaçant

-   cliquer dans le deuxième espace
-   créer un segment de la largeur approximative du segment du premier espace :
    -   cliquer sur l'icône "+" au dessus du plan pour "ajouter un sommet sur un segment"
    -   passer la souris sur le segment
    -   quand le segment est de couleur rouge, cliquer pour ajouter les deux sommets près des sommets du premier espace

-   une fois les sommets créés, cliquer sur l'icône "+" pour "arrêter l'ajout d'un sommet sur un segment".


### Fusionner les sommets

-   cliquer sur le premier sommet du premier espace
-   enfoncer la touche "shift" et cliquer sur le premier sommet du deuxième espace
-   les deux sommets sont sélectionnés en rouge
-   cliquer sur l'icône "fusionner les sommets" au dessus du plan
-   le premier sommet est commun aux deux espaces.

-   cliquer sur le deuxième sommet du premier espace
-   enfoncer la touche "shift" et cliquer sur le deuxième sommet du deuxième espace
-   les deux sommets sont sélectionnés en rouge
-   cliquer sur l'icône "fusionner les sommets" au dessus du plan
-   le deuxième sommet est commun aux deux espaces.

Une fois que les deux sommets des segments sont fusionnés, le segment obtenu est un segment commun.
En mode "Edition du plan", les segments communs sont plus larges et affichés en rouge.

On peut modifier la longueur ou la position d'un segment commun en déplaçant les sommets du segment.

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


## Le connecteur d'espaces

Le connecteur d'espace permet à deux espaces non contigüs de communiquer virtuellement, par exemple entre deux niveaux via les ascenseurs ou les escaliers. Cette donnée est utilisée dans l'itinéraire point à point pour changer de niveau ou de bâtiment.

### Le type de connecteur d'espace 

Un connecteur d'espace est associé à un type de connecteur d'espace : Ascenseur ou Escalier.
Pour créer un type de connecteur d'espace supplémentaire (navette,...) depuis le menu de gauche,

-   cliquer sur "Administration", "Connecteurs" puis "Room Connector Types" et "Créer RoomConnectorType"
-   renseigner le nom du type de connecteur (ex: Navette)
-   valider la création

### Configurer le connecteur d'espaces

On définit un connecteur d'espace pour un escalier ou un ascenseur déservant plusieurs niveaux, mais également pour un trajet non identifié dans Surfy : Taxi, navette, téléphérique, ...
La durée du transfert par le connecteur d'espace est prise en compte dans le calcul total de la durée de l'itinéraire.

Pour créer un connecteur d'espace, depuis le menu de gauche,

-   cliquer sur "Administration", "Connecteurs" puis "Connecteurs d'espace" et "Créer un connecteur d'espace"
-   renseigner le nom (ex: Escalier C) et le type de connecteur d'espace (Escalier)
-   renseigner le temps d'attente moyen et le temps de transfert entre chaque étage
-   valider la création

Pour associer le connecteur d'espace aux espaces depuis la fiche du connecteur,

-   cliquer sur le menu contextuel (case grise dans le menu de gauche, sous la recherche), puis sur "Modifier le connecteur d'espace XXX"
-   cliquer sur l'onglet "Associer un espace"
-   rechercher et sélectionner les espaces à connecter en validant chacun d'eux

La liste des espaces connectés par le connecteur d'espace s'affiche en bas de page.

:::warning ATTENTION
Cocher et supprimer la ligne d'un espace sur cette page supprime l'espace et tout son contenu !
Pour retirer un connecteur à un espace, il faut modifier l'espace en retirant le connecteur depuis la fiche de l'espace.
:::

### Associer les connecteurs d'espace aux espaces depuis le plan

Pour associer un connecteur d'espace à un espace depuis le plan de l'étage,

-   cliquer dans l'espace à associer
-   dans la fiche de l'espace, cliquer sur "Modifier" afin de modifier les informations de l'espace
-   cliquer sur le crayon face à "Connecteur d'espace"
-   choisir le connecteur appropriée à l'espace. Le type de connecteur d'espace est indiqué entre crochet
-   sauvegarder les modifications

L'espace associé permet de le connecter aux autres espaces ayant le même connecteur associé.

## Qualification d'un segment simple en cloison simple

Un segment simple n'appartient qu'à un seul espace. Il ne peut donc pas créer de passage.

La qualification d'un segment simple est identique à celle d'un segment commun.
On peut qualifier un segment simple en "porte" mais celle ci ne sera qu'une représentation graphique sur le plan.

Un segment simple peut être qualifié en "cloison simple" s'il sert à délimiter les murs périphériques d'un espace sans cloison, comme par exemple un espace ouvert ou une circulation.
