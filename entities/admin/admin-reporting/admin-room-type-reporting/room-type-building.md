# Typologie d'espace des bâtiments
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="roomTypeBuilding"/>


## Propriétés de base {#properties-base}

### Capacité totale {#total-capacity-count}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```
<PH code="roomTypeBuilding:totalCapacityCount"/>

### Empreinte carbone {#carbon-footprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```
<PH code="roomTypeBuilding:carbonFootprint"/>

### Nombre d'affectations {#people-count}



*Nom technique:* ```peopleCount```
<PH code="roomTypeBuilding:peopleCount"/>

### Nombre d'espaces {#rooms-count}

Le nombre total d'espaces

*Nom technique:* ```roomsCount```
<PH code="roomTypeBuilding:roomsCount"/>

### Nombre de places assises {#seats-count}

Le nombre total de places assises

*Nom technique:* ```seatsCount```
<PH code="roomTypeBuilding:seatsCount"/>

### Nombre de postes de travail {#workplaces-count}

Le nombre total de postes de travail dans les espaces

*Nom technique:* ```workplacesCount```
<PH code="roomTypeBuilding:workplacesCount"/>

### Nombre de postes de travail de passage {#transit-workplaces-count}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```
<PH code="roomTypeBuilding:transitWorkplacesCount"/>

### Nombre de postes de travail partagés {#shared-workplaces-count}

Nombre total de postes de travail partagés par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```
<PH code="roomTypeBuilding:sharedWorkplacesCount"/>

### Nombre de postes flex {#flex-workplaces-count}

Nombre total de postes flex

*Nom technique:* ```flexWorkplacesCount```
<PH code="roomTypeBuilding:flexWorkplacesCount"/>

### Nombre de postes libres {#free-workplaces-count}

Nombre total de postes libres

*Nom technique:* ```freeWorkplacesCount```
<PH code="roomTypeBuilding:freeWorkplacesCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="roomTypeBuilding:totalPeopleCount"/>

### Ratio d'occupation {#people-ratio}

Le ratio d'occupation est le nombre de métres carrés divisé par le nombre de personnes affectées soit directement dans les espaces, soit via un poste de travail

*Nom technique:* ```peopleRatio```
<PH code="roomTypeBuilding:peopleRatio"/>

### Ratio postes de travail {#workplaces-ratio}

Le ratio postes de travail est le nombre de métres carrés divisé par le nombre de postes de travail

*Nom technique:* ```workplacesRatio```
<PH code="roomTypeBuilding:workplacesRatio"/>

### Surface qualifiée {#rooms-area}

La surface qualifiée est la somme des surfaces des espaces

*Nom technique:* ```roomsArea```
<PH code="roomTypeBuilding:roomsArea"/>

### Taux d'occupation {#occupancy-rate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```
<PH code="roomTypeBuilding:occupancyRate"/>

### Taux de foisonnement {#expansion-ratio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```
<PH code="roomTypeBuilding:expansionRatio"/>

### Taux de places assises par affectations {#seats-people-ratio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```
<PH code="roomTypeBuilding:seatsPeopleRatio"/>

### Taux de places assises par postes de travail {#total-capacity-workplace-count-ratio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```
<PH code="roomTypeBuilding:totalCapacityWorkplaceCountRatio"/>

### Taux de postes de travail en flex {#flex-ratio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```
<PH code="roomTypeBuilding:flexRatio"/>

### Taux de postes de travail partagés {#shared-workplaces-ratio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail

*Nom technique:* ```sharedWorkplacesRatio```
<PH code="roomTypeBuilding:sharedWorkplacesRatio"/>


## Entités associées (unique) {#properties-belongs-to}

### Bâtiment {#building}

Le bâtiment est utilisé pour regrouper les étages

*Nom technique:* ```building```
<PH code="roomTypeBuilding:building"/>

### Typologie d'espace {#room-type}



*Nom technique:* ```roomType```
<PH code="roomTypeBuilding:roomType"/>




