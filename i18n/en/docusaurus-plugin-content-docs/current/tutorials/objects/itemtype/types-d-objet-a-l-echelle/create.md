---
sidebar_position: 1
---
# Créer un type d'objet à l'échelle

## Créer la fiche du type d'objet

<Youtube code="89my-CVLjOo"/>

Pour créer un type d'objet à l'échelle, depuis le menu de gauche,

-	cliquer sur « Mobiliers », « Typologies », « Types d'objet », puis « Créer un type d'objet ».
-	renseigner le <P code="itemType:name" /> du type d'objet à créer
-	par défaut, l'<P code="itemType:zIndex" /> est à 0. Il peut être négatif. En cas de chevauchement entre deux types d'objet, celui avec l'indice le plus haut sera systématiquement placé au-dessus de l'autre.
-	la <P code="itemType:itemTypeFamily" /> permet d'afficher les objets par Famille sur les plans et dans l'inventaire en pdf.

Ces trois premiers champs (Nom, Indice de hauteur, Famille) sont obligatoires.

-	le champ <P code="itemType:picture" /> permet de charger la photo du type d'objet, qui sera visible dans l'inventaire en pdf et sur la fiche de l'objet sélectionné sur le plan.
-	cocher <P code="itemType:displayItemReferenceInMap" /> permet d'afficher le champ « Référence » de chaque objet sur le plan.
-	un <P code="itemType:code" /> particulier vous donnera accès directement au type d'objet en le tapant dans la recherche lors de la création d'objet.
-	le choix « Icône » ne doit pas être renseigné dans le cas de création de type d'objet à l'échelle.
-	la <P code="itemType:color" /> peut être choisie parmi une sélection, ou par code Hexa ou RGB pour respecter votre charte graphique.
-	la <P code="itemType:height" /> donnera dans ce cas la hauteur du modèle 3D associé, s'il existe.
-	<P code="itemType:description" /> et <P code="itemType:price" /> peuvent être renseignés.
-	<P code="itemType:seatsCount" /> (uniquement pour les assises, sièges, canapés, etc…) et <P code="itemType:carbonFootprint" /> (donnée éventuellement par le fabricant, par objet) peuvent être renseignés et sont cumulés dans Surfy par pièce, étage ou bâtiment.
-	les champs « Forme de l'icône », « Couleur de fond » et « couleur de bordure » sont réservés aux créations d'icônes et ne sont pas à renseigner en création de types d'objet à l'échelle.
-	le <P code="itemType:manufacturer" /> peut être renseigné. Si le fabricant n'est pas dans la liste, on peut "créer et associer un fabricant de type d'objet" directement depuis la liste.
-	le <P code="itemType:object3dModel" /> permet une visualisation 3D des Objets issus du type d'objet et placés sur le plan.
-	la « Clé externe » permet d'identifier le type d'objet avec une utilisation extérieure à Surfy (interopérabilité avec des applications tiers)
-	« Valider la création ».

Il reste maintenant à créer la forme pour le type d'objet à l'échelle.

## Créer la forme du type d’objet à l'échelle

### Les modèles 3D
Surfy dispose d'un ensemble de modèles 3D représentant le mobilier courant: tables, assises, bureaux, armoires, etc... pouvant être associés aux types d'objet pour les représenter en vision 3D du bâtiment ou de l'étage.
Ces modèles sont orientés dans l'espace. La composition de la forme en 2D d'un type d'objet nécessite de se conformer à l'orientation du modèle 3D que l'on veut associer à ce type d'objet. 

L'orientation de la forme 2D à dessiner est définie ci-dessous :

### Orientation des formes en association aux modèles 3D

Afin que les formes dessinées en 2D soient compatibles avec les modèles 3D, l'orientation suivante est nécessaire lors du dessin de la forme 2D :
-   Armoires: ouverture en bas
-   Tables: longueur horizontale, largeur verticale
-   Bureaux: longueur horizontale, largeur verticale
-   Assises: dossier en haut, assise en bas
-   Bulles : ouverture en bas

### Créer la forme en 2D

Depuis la fiche du type d'objet, cliquer sur le menu contextuel (case grise sous la loupe de recherche), puis :

-	cliquer sur « Editer la forme du type d'objet XXX » pour dessiner la forme du type d’objet.
-   cliquer sur la page blanche afin de faire apparaitre les icônes de création.
-	on peut afficher le fond de plan d’un étage avec l’icône « choisir un plan de référence pour créer la forme » afin de décalquer la forme voulue.
-   cliquer sur l'icône "+" afin d' "ajouter une forme".
-   chaque clic dépose un sommet. Le dessin d'une forme suit la logique du fil unique. On peut s'affranchir de l'aide à la verticalité en maintenant la touche "Shift" enfoncée. Respecter la compatibilité avec les modèles 3D permet d'associer une représentation bien orientée de l'objet dans les vues 3D de l'étage ou du bâtiment. Voir [Orientation des formes en association aux modèles 3D](/en/docs/tutorials/objects/itemtype/types-d-objet-a-l-echelle/create#orientation-des-formes-en-association-aux-modèles-3d)

Il est conseillé de matérialiser la poignée d'ouverture en bas de la forme des armoires afin que celles-ci soient bien orientées lors du placement sur le plan en 2D et également en vue 3D.

:::tip BON A SAVOIR
Pour créer une forme aux dimensions exactes, après avoir cliqué le premier point, entrer la valeur du segment à dessiner (en mètres) puis en maintenant la souris dans la direction du segment à créer, appuyer sur "Enter". Le segment à la bonne longueur est créé.
:::

-	une fois la forme à l'échelle dessinée, cliquer sur l'icône verte pour valider la création de la forme.
-	pour supprimer un sommet de la forme, cliquer sur le sommet puis sur « Supprimer le sommet ».
-	pour ajouter un sommet entre deux sommets existants, cliquer sur un des sommets puis sur « ajouter un sommet ». Appuyer sur la touche « shift » pour libérer l'horizontalité du placement de sommet. Le sommet à ajouter est situé entre les deux sommets. Si le sommet à ajouter n'est pas bien situé, cliquer sur le sommet adjacent puis sur « ajouter un sommet » pour créer le nouveau sommet au bon endroit.
-	pour supprimer la forme de l'objet, cliquer en dehors de la forme puis sur « Supprimer la forme ».
-	une fois votre forme validée, vous pouvez cliquer en dehors de la forme puis quitter la page, votre forme est sauvegardée.

Chaque objet créé à partir du type d'objet aura la forme, la couleur et les caractéristiques du type d'objet créé.