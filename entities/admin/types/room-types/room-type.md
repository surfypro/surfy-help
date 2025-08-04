# Typologie d'espace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="roomType"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom de la typologie d'espace {#name}



*Nom technique:* ```name```
<PH code="roomType:name"/>

    


## Propriétés de base {#properties-base}
    
### Afficher les murs {#display-walls-on-3d}

Permet d'afficher ou non les murs de l'espace dans le plan 3d de l'étage, les murs non affichés sont en pointillés en 2d, cela permet d'avoir une vue plus agréable notament pour les open spaces

*Nom technique:* ```displayWallsOn3d```
<PH code="roomType:displayWallsOn3d"/>

### Cadence {#cadence}

La cadence est une valeur numérique permettant d'indiquer la difficulté de nettoyage de la typologie de l'espace. Elle est égale au nombre de m² pouvant être traités en une heure dans cette typologie (circulation, laboratoire, ...)

*Nom technique:* ```cadence```
<PH code="roomType:cadence"/>

### Code {#code}



*Nom technique:* ```code```
<PH code="roomType:code"/>

### Couleur en 2d {#color}

La couleur du type d'espace permet de differencier chaque type sur le plan en 2d

*Nom technique:* ```color```
<PH code="roomType:color"/>

### Couleur en 3d {#color-3d}

Permet de gérer la couleur du type d'espace en 3d, cette option est uniquement applicable à la vision 3d de l'étage

*Nom technique:* ```color3d```
<PH code="roomType:color3d"/>

### Est réservable ? {#is-bookable}

Cocher cette case si ce type d'espace est réservable

*Nom technique:* ```isBookable```
<PH code="roomType:isBookable"/>

### Icône {#icon}

L'icône pour le type d'espace permet d'afficher pour ce type d'espace une icône dans les plans en 2d et en 3d à la place des informations classiques sur le plan, associé à la couleur de fond cela permet de rendre la lecture du plan plus agréable

*Nom technique:* ```icon```
<PH code="roomType:icon"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Type de distribution des coûts {#distribution-cost-type}

Un type de distribution des coûts permet de définir les méthodes de répartition des coûts entre les différents centres de coût

*Nom technique:* ```distributionCostType```
<PH code="roomType:distributionCostType"/>


## Entités associées (liste) {#properties-has-many}

### Associations groupes de typologies d'espace à typologies d'espace {#room-type-group-to-room-types}



*Nom technique:* ```roomTypeGroupToRoomTypes```
<PH code="roomType:roomTypeGroupToRoomTypes"/>

### Espaces {#rooms}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```rooms```
<PH code="roomType:rooms"/>

### Transformations des exports partenaires pour les types d'espaces {#partner-export-mapping-to-room-types}



*Nom technique:* ```partnerExportMappingToRoomTypes```
<PH code="roomType:partnerExportMappingToRoomTypes"/>

### Types d'espaces des prestataires {#person-company-to-room-types}

Les types d'espaces des prestataires permettent de définir une relation entre un type d'espaces et le prestataire et d'y définir une mission

*Nom technique:* ```personCompanyToRoomTypes```
<PH code="roomType:personCompanyToRoomTypes"/>

### Typologies d'espace des bâtiments {#room-type-buildings}



*Nom technique:* ```roomTypeBuildings```
<PH code="roomType:roomTypeBuildings"/>

### Typologies d'espace des étages {#room-type-floors}



*Nom technique:* ```roomTypeFloors```
<PH code="roomType:roomTypeFloors"/>




