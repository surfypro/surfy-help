# Étage
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Propriétés de base {#properties-base}

### Capacité réglementaire {#regulatoryCapacity}

La capacité réglementaire du plateau, permet de gérer l'évacuation du public et des employés

*Nom technique:* ```regulatoryCapacity```

### Capacité totale {#totalCapacityCount}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```

### Empreinte carbone {#carbonFootprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```

### Fond de plan {#backgroundLayout}

Le fond de plan permet d'avoir un premier niveau de calque afin de pouvoir redessiner les plans, il doit être à l'échelle

*Nom technique:* ```backgroundLayout```

### Hauteur sous plafond {#height}

La hauteur sous plafond de l'étage

*Nom technique:* ```height```

### Niveau {#level}

Le niveau de l'étage permet de définir sa position par rapport aux autres étages, par exemple utilisez 0 pour le RDC ou -1 pour les parkings

*Nom technique:* ```level```

### Nom de l'étage {#name}

Le nom de l'étage est utilisé pour pouvoir le retrouver facilement.

*Nom technique:* ```name```

### Nombre d'affectations {#peopleCount}

Le nombre de personnes affectées dans la l'étage, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```peopleCount```

### Nombre d'affectations totale {#totalPeopleCount}

Le nombre de personnes affectées dans la l'étage, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```

### Nombre d'espaces {#roomsCount}

Le nombre d'espaces présent dans cet étage

*Nom technique:* ```roomsCount```

### Nombre de places assises {#seatsCount}

Le nombre total de places assises

*Nom technique:* ```seatsCount```

### Nombre de postes de travail {#workplacesCount}

Le nombre de postes de travail dans l'étage est calculé automatiquement

*Nom technique:* ```workplacesCount```

### Nombre de postes de travail de passage {#transitWorkplacesCount}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```

### Nombre de postes de travail partagés {#sharedWorkplacesCount}

Nombre de postes de travail partagés dans l'étage par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```

### Nombre de postes flex {#flexWorkplacesCount}

Nombre de postes flex dans l'étage

*Nom technique:* ```flexWorkplacesCount```

### Nombre de postes libres {#freeWorkplacesCount}

Nombre de postes libres dans l'étage

*Nom technique:* ```freeWorkplacesCount```

### Opacité du fond de plan {#backgroundLayoutOpacity}

L'opacité permet de voir plus ou moins le fond de plan

*Nom technique:* ```backgroundLayoutOpacity```

### Ratio d'occupation {#peopleRatio}

Le ratio d'occupation est le nombre de métres carrés dans l'étage divisé par le nombre de personnes affectées soit directement dans les espaces, soit via un poste de travail, cette valeur est calculée

*Nom technique:* ```peopleRatio```

### Ratio postes de travail {#workplacesRatio}

Le ratio postes de travail est le nombre de métres carrés dans l'étage divisé par le nombre de postes de travail, cette valeur est calculé automatiquement

*Nom technique:* ```workplacesRatio```

### Surface qualifiée {#roomsArea}

La surface qualifiée est la somme des surfaces des espaces

*Nom technique:* ```roomsArea```

### Taux d'occupation {#occupancyRate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```

### Taux de foisonnement {#expansionRatio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```

### Taux de places assises par affectations {#seatsPeopleRatio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```

### Taux de places assises par postes de travail {#totalCapacityWorkplaceCountRatio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```

### Taux de postes de travail en flex {#flexRatio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```

### Taux de postes de travail partagés {#sharedWorkplacesRatio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail de l'étage

*Nom technique:* ```sharedWorkplacesRatio```


## Entités associées (unique) {#properties-belongs-to}

### Bâtiment {#building}

Le bâtiment est utilisé pour regrouper les étages

*Nom technique:* ```building```

### Échelle du plan {#mapScale}

L'échelle permet de calculer en proportion les surfaces réelles et la taille des objets

*Nom technique:* ```mapScale```

### Structure {#structure}



*Nom technique:* ```structure```


## Entités associées (liste) {#properties-has-many}

###  Partner Export Mapping Configuration To Floors {#partnerExportMappingConfigurationToFloors}



*Nom technique:* ```partnerExportMappingConfigurationToFloors```

### Associations rôle de contenu aux étages {#contentRoleToFloors}



*Nom technique:* ```contentRoleToFloors```

### Calques d'analyse par étage {#dimensionFloors}



*Nom technique:* ```dimensionFloors```

### Centres de coût des étages {#costCenterFloors}



*Nom technique:* ```costCenterFloors```

### Espaces {#rooms}



*Nom technique:* ```rooms```

### Groupes de typologies d'espace des étages {#roomTypeGroupFloors}



*Nom technique:* ```roomTypeGroupFloors```

### Organisations des étages {#organizationFloors}



*Nom technique:* ```organizationFloors```

### Points des espaces {#roomPoints}



*Nom technique:* ```roomPoints```

### Typologies d'espace des étages {#roomTypeFloors}



*Nom technique:* ```roomTypeFloors```




