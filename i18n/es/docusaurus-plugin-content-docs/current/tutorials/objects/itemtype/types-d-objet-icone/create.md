---
sidebar_position: 1
---


# Créer un type d'objet Icône

<Youtube code="89my-CVLjOo"/>

Pour créer un type d'objet sous forme d'icône, depuis le menu de gauche,

-	cliquer sur « Mobiliers », « Typologies », « Types d'objet », puis « Créer un type d'objet ».
-	renseigner le <P code="itemType:name" /> du type d'icône à créer
-	placer l'<P code="itemType:zIndex" /> à « 9 » afin que les icônes soient systématiquement au-dessus des autres objets, donc visibles. (Par défaut, l'indice de hauteur est à 0. Il peut être négatif)
-	la <P code="itemType:itemTypeFamily" /> permet d'afficher les objets par Famille sur les plans et dans l'inventaire en pdf.

Ces trois premiers champs (Nom, Indice de hauteur, Famille) sont obligatoires.

-	le champ <P code="itemType:picture" /> permet de charger la photo du type d'objet, qui sera visible dans l'inventaire en pdf et sur la fiche de l'objet sélectionné sur le plan.
-	cocher <P code="itemType:displayItemReferenceInMap" /> permet d'afficher le champ « Référence » de chaque objet sur le plan.
-	un <P code="itemType:code" /> particulier vous donnera accès directement au type d'objet en le tapant dans la recherche lors de la création d'objet.
-	dans le champ <P code="itemType:icon" />, le « Crayon » vous donne accès à trois types d'icône :
    -   les Icônes de « Fontawsome », visibles en cochant « tout afficher » ou en recherchant par mot clé en anglais dans la case de recherche.
    -   les Icônes « SURFY » destinées aux illustrations ajoutées sur les plans aux endroits stratégiques (Toilettes, Escaliers, Ascenseurs, Points Copie, …) mais qui peuvent également être utilisées comme des icônes classiques.
    -   les Icônes « SURFY 2 » représentant les icônes réglementaires de la norme de Sécurité ISO 7010. Leur forme originale peut être carrée ou triangulaire. Les couleurs et formes des icônes "SURFY 2" sont automatiquement renseignées dans Surfy et peuvent être modifiées.

-	la <P code="itemType:color" /> peut être choisie parmi une sélection, ou par code Hexa ou RGB pour respecter votre charte graphique.
-	la <P code="itemType:height" /> donnera dans ce cas la hauteur du modèle 3D associé, s'il existe.
-	<P code="itemType:description" /> et <P code="itemType:price" /> peuvent être renseignés.
-	<P code="itemType:seatsCount" /> (uniquement pour les assises, sièges, canapés, etc…) et <P code="itemType:carbonFootprint" /> (donnée éventuellement par le fabricant, par objet) peuvent être renseignés et sont cumulés dans Surfy par pièce, étage ou bâtiment.
-	la <P code="itemType:iconShape" /> permet de définir un type d'icône carré, rond ou triangulaire. Les <P code="itemType:iconBackgroundColor" /> et <P code="itemType:iconBorderColor" /> permettent de configurer correctement les icônes multi-couleurs, notamment triangulaires.
-	le <P code="itemType:manufacturer" /> du mobilier peut être renseigné
-	le <P code="itemType:object3dModel" /> permet une visualisation 3D des Icônes issues du type d'icône et placées sur le plan (copieurs, extincteurs, fontaines à eau, portes manteaux). L'orientation de l'icone se fait en mode "édition du plan". Pour plus de lisibilité, la sortie de ce mode remet l'icone en position d'origine mais le modèle 3D sera orienté suivant l'orientation de l'icone en mode "édition du plan".
-	la « Clé externe » permet d'identifier le type d'objet avec une utilisation extérieure à Surfy (interopérabilité avec des applications tiers)

Après validation de la création de type d'objet, le type d'objet correspondant est disponible pour la création d'objets.
