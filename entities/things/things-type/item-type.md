# Type d'objet
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="itemType"/>


## Propriétés de base {#properties-base}

### Activer la navigation {#exclude-from-pathfinding}

Permet d'activer la navigation pour ce type d'objet

*Nom technique:* ```excludeFromPathfinding```
<PH code="itemType:excludeFromPathfinding"/>

### Afficher les informations sur le plan {#display-item-reference-in-map}

Permet d’afficher le champ « Référence » de chaque objet sur le plan

*Nom technique:* ```displayItemReferenceInMap```
<PH code="itemType:displayItemReferenceInMap"/>

### Code {#code}

Permet d'avoir accès rapidement au type d’objet en tapant le code dans la recherche lors de la création d’objet

*Nom technique:* ```code```
<PH code="itemType:code"/>

### Couleur {#color}

Peut être choisie parmi une pré sélection, ou en sélection avancée par code Hexa ou RGB pour respecter votre charte graphique

*Nom technique:* ```color```
<PH code="itemType:color"/>

### Couleur de bordure de l'icône {#icon-border-color}

La couleur de bordure permet de configurer correctement les icones multi-couleurs, notamment triangulaires

*Nom technique:* ```iconBorderColor```
<PH code="itemType:iconBorderColor"/>

### Couleur de fond de l'icône {#icon-background-color}

La couleur de fond permet de configurer correctement les icones multi-couleurs, notamment triangulaires

*Nom technique:* ```iconBackgroundColor```
<PH code="itemType:iconBackgroundColor"/>

### Description {#description}

Permet d'avoir des informations supplémentaires sur le type d'objet

*Nom technique:* ```description```
<PH code="itemType:description"/>

### Empreinte Carbone {#carbon-footprint}

L'empreinte carbone est le poids en Kilogrammes de CO2 émis par chaque objet issu de ce type d'objet; il est donné par le fabricant

*Nom technique:* ```carbonFootprint```
<PH code="itemType:carbonFootprint"/>

### Est associable à une personne ? {#is-affectable}

Permet de savoir si le type d'objet est associable à une personne

*Nom technique:* ```isAffectable```
<PH code="itemType:isAffectable"/>

### Forme de l'icone {#icon-shape}

La forme de l'icone permet d'influencer son affichage sur le plan

*Nom technique:* ```iconShape```
<PH code="itemType:iconShape"/>

### Hauteur {#height}

Permet de donner la hauteur en centimètres du type d'objet dans la vision en 3d

*Nom technique:* ```height```
<PH code="itemType:height"/>

### Icône {#icon}

Vous donne accès à trois types d’icône: 1) Les Icones de « Fontawsome », visibles en cochant « tout afficher » ou en recherchant par mot clé en anglais dans la case de recherche; 2) Les Icones « SURFY » destinées aux illustrations ajoutées sur les plans aux endroits stratégiques (Toilettes, Escaliers, Ascenseurs, Points Copie, etc) mais qui peuvent également être utilisées comme des icones classiques; 3) Les Icones « SURFY 2 » listant les icones réglementaires de la norme de Sécurité ISO 7010; Leur forme peut être ronde, carrée ou triangulaire

*Nom technique:* ```icon```
<PH code="itemType:icon"/>

### Indice de hauteur {#z-index}

Plus l'indice de hauteur est élevé plus l'objet sera positionné au dessus des autres; Il peut être négatif; par exemple pour un siège: -1; Conseil: pour les Icones, fixer l'indice à 9

*Nom technique:* ```zIndex```
<PH code="itemType:zIndex"/>

### Nom du type d'objet {#name}

Permet d'identifier rapidement le type d'objet avec un nom complet, logique et descriptif; On peut y indiquer les dimensions, par exemple: Table de Réunion 340x120; Conseil: commencer toujours par la dimension la plus grande

*Nom technique:* ```name```
<PH code="itemType:name"/>

### Nombre de places assises {#seats-count}

Le nombre de places assises de ce type d'objet (fauteuil, siège, canapé, etc) est cumulé dans Surfy par espace, étage et bâtiment

*Nom technique:* ```seatsCount```
<PH code="itemType:seatsCount"/>

### Photo {#picture}

Permet de charger la photo du type d’objet, qui sera visible dans l’inventaire en pdf et sur la fiche de l’objet sélectionné sur le plan

*Nom technique:* ```picture```
<PH code="itemType:picture"/>

### Prix {#price}

Le prix d'achat du type d'objet

*Nom technique:* ```price```
<PH code="itemType:price"/>


## Entités associées (unique) {#properties-belongs-to}

### Fabricant du type d'objet {#manufacturer}

Permet d'identifier le fabricant du type d'objet

*Nom technique:* ```manufacturer```
<PH code="itemType:manufacturer"/>

### Famille de types d'objet {#item-type-family}

Permet d’afficher les objets par Famille sur les plans et dans l’inventaire en pdf

*Nom technique:* ```itemTypeFamily```
<PH code="itemType:itemTypeFamily"/>

### Modèle 3d {#object-3d-model}

Le Modèle 3D permet une représentation 3D réaliste des objets placés sur le plan; En absence de modèle 3D les objets sont représentés en forme pleine dans la vue 3D

*Nom technique:* ```object3dModel```
<PH code="itemType:object3dModel"/>


## Entités associées (liste) {#properties-has-many}

### Objets {#items}



*Nom technique:* ```items```
<PH code="itemType:items"/>

### Points des types d'objet {#item-type-points}



*Nom technique:* ```itemTypePoints```
<PH code="itemType:itemTypePoints"/>

### Types d'objet dans type de poste de travail {#workplace-type-item-types}



*Nom technique:* ```workplaceTypeItemTypes```
<PH code="itemType:workplaceTypeItemTypes"/>

### Types d'objets des prestataires {#person-company-to-item-types}

Les types d'objets des prestataires permettent de définir une relation entre le type d'objet et le prestataires et d'y définir la mission

*Nom technique:* ```personCompanyToItemTypes```
<PH code="itemType:personCompanyToItemTypes"/>




