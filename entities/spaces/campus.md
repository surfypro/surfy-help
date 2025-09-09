# Campus
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Le campus est utilisé pour regrouper des bâtiments qui sont au même endroit.

<OH code="campus"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Couleur {#color}

Couleur du campus pour différencier sur les plans

*Nom technique:* ```color```
<PH code="campus:color"/>

### Nom du campus {#name}

Nom du campus

*Nom technique:* ```name```
<PH code="campus:name"/>

    


## Propriétés de base {#properties-base}
    
### Adresse {#address}

Adresse du campus

*Nom technique:* ```address```
<PH code="campus:address"/>

### Capacité totale {#total-capacity-count}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```
<PH code="campus:totalCapacityCount"/>

### Empreinte carbone {#carbon-footprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```
<PH code="campus:carbonFootprint"/>

### Nombre d'affectations {#people-count}



*Nom technique:* ```peopleCount```
<PH code="campus:peopleCount"/>

### Nombre d'espaces {#rooms-count}

Le nombre total d'espaces

*Nom technique:* ```roomsCount```
<PH code="campus:roomsCount"/>

### Nombre de places assises {#seats-count}

Le nombre total de places assises

*Nom technique:* ```seatsCount```
<PH code="campus:seatsCount"/>

### Nombre de postes de travail {#workplaces-count}

Le nombre total de postes de travail dans les espaces

*Nom technique:* ```workplacesCount```
<PH code="campus:workplacesCount"/>

### Nombre de postes de travail de passage {#transit-workplaces-count}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```
<PH code="campus:transitWorkplacesCount"/>

### Nombre de postes de travail partagés {#shared-workplaces-count}

Nombre total de postes de travail partagés par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```
<PH code="campus:sharedWorkplacesCount"/>

### Nombre de postes flex {#flex-workplaces-count}

Nombre total de postes flex

*Nom technique:* ```flexWorkplacesCount```
<PH code="campus:flexWorkplacesCount"/>

### Nombre de postes libres {#free-workplaces-count}

Nombre total de postes libres

*Nom technique:* ```freeWorkplacesCount```
<PH code="campus:freeWorkplacesCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="campus:totalPeopleCount"/>

### Ratio d'occupation {#people-ratio}

Le ratio d'occupation est le nombre de métres carrés divisé par le nombre de personnes affectées soit directement dans les espaces, soit via un poste de travail

*Nom technique:* ```peopleRatio```
<PH code="campus:peopleRatio"/>

### Ratio postes de travail {#workplaces-ratio}

Le ratio postes de travail est le nombre de métres carrés divisé par le nombre de postes de travail

*Nom technique:* ```workplacesRatio```
<PH code="campus:workplacesRatio"/>

### Surface qualifiée {#rooms-area}

La surface qualifiée est la somme des surfaces des espaces

*Nom technique:* ```roomsArea```
<PH code="campus:roomsArea"/>

### Taux d'occupation {#occupancy-rate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```
<PH code="campus:occupancyRate"/>

### Taux de foisonnement {#expansion-ratio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```
<PH code="campus:expansionRatio"/>

### Taux de places assises par affectations {#seats-people-ratio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```
<PH code="campus:seatsPeopleRatio"/>

### Taux de places assises par postes de travail {#total-capacity-workplace-count-ratio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```
<PH code="campus:totalCapacityWorkplaceCountRatio"/>

### Taux de postes de travail en flex {#flex-ratio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```
<PH code="campus:flexRatio"/>

### Taux de postes de travail partagés {#shared-workplaces-ratio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail

*Nom technique:* ```sharedWorkplacesRatio```
<PH code="campus:sharedWorkplacesRatio"/>

    



## Entités associées (liste) {#properties-has-many}

### Bâtiments {#buildings}

Le bâtiment est utilisé pour regrouper les étages

*Nom technique:* ```buildings```
<PH code="campus:buildings"/>




