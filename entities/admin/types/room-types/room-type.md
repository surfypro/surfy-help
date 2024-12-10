# Typologie d'espace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Propriétés de base {#properties-base}

### Afficher les murs {#display-walls-on-3d}

Permet d'afficher ou non les murs de l'espace dans le plan 3d de l'étage, les murs non affichés sont en pointillés en 2d, cela permet d'avoir une vue plus agréable notament pour les open spaces

*Nom technique:* ```displayWallsOn3d```

### Cadence {#cadence}

La cadence est une valeur numérique permettant d'indiquer la difficulté de nettoyage de la typologie de l'espace. Elle est égale au nombre de m² pouvant être traités en une heure dans cette typologie (circulation, laboratoire, ...)

*Nom technique:* ```cadence```

### Code {#code}



*Nom technique:* ```code```

### Couleur en 2d {#color}

La couleur du type d'espace permet de differencier chaque type sur le plan en 2d

*Nom technique:* ```color```

### Couleur en 3d {#color-3d}

Permet de gérer la couleur du type d'espace en 3d, cette option est uniquement applicable à la vision 3d de l'étage

*Nom technique:* ```color3d```

### Est réservable ? {#is-bookable}

Cocher cette case si ce type d'espace est réservable

*Nom technique:* ```isBookable```

### Icône {#icon}

L'icône pour le type d'espace permet d'afficher pour ce type d'espace une icône dans les plans en 2d et en 3d à la place des informations classiques sur le plan, associé à la couleur de fond cela permet de rendre la lecture du plan plus agréable

*Nom technique:* ```icon```

### Nom de la typologie d'espace {#name}



*Nom technique:* ```name```


## Entités associées (unique) {#properties-belongs-to}

### Type de distribution des coûts {#distribution-cost-type}



*Nom technique:* ```distributionCostType```


## Entités associées (liste) {#properties-has-many}

###  Partner Export Mapping To Room Types {#partner-export-mapping-to-room-types}



*Nom technique:* ```partnerExportMappingToRoomTypes```

### Associations groupes de typologies d'espace à typologies d'espace {#room-type-group-to-room-types}



*Nom technique:* ```roomTypeGroupToRoomTypes```

### Espaces {#rooms}



*Nom technique:* ```rooms```

### Types d'espaces des prestataires {#person-company-to-room-types}

Les types d'espaces des prestataires permettent de définir une relation entre un type d'espaces et le prestataire et d'y définir une mission

*Nom technique:* ```personCompanyToRoomTypes```

### Typologies d'espace des bâtiments {#room-type-buildings}



*Nom technique:* ```roomTypeBuildings```

### Typologies d'espace des étages {#room-type-floors}



*Nom technique:* ```roomTypeFloors```




