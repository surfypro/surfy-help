# Calque d'analyse
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="dimension"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom du calque d'analyse {#name}

Utile pour différencier le calque parmis d'autres

*Nom technique:* ```name```
<PH code="dimension:name"/>

    


## Propriétés de base {#properties-base}
    
### Couleur {#color}

La couleur de calque d'analyse permet de différencier les espaces sur le plan

*Nom technique:* ```color```
<PH code="dimension:color"/>

### Empreinte carbone par mètre carré {#carbon-footprint-per-meter}

L'empreinte carbone par mètre carré permet de calculer l'empreinte carbone en kilogramme de CO2 d'un calque d'analyse par mètres carrés

*Nom technique:* ```carbonFootprintPerMeter```
<PH code="dimension:carbonFootprintPerMeter"/>

### Nombre d'affectations directes {#people-count}

Le nombre de personnes qui sont affectées directement à ce calque d'affectation dans le bâtiment

*Nom technique:* ```peopleCount```
<PH code="dimension:peopleCount"/>

### Nombre d'affectations directes manuelle {#manual-people-count}

Le nombre de personnes qui sont affectées directement à ce calque d'affectation sans tenir compte des affectations avec des personnes réelles

*Nom technique:* ```manualPeopleCount```
<PH code="dimension:manualPeopleCount"/>

### Nombre total d'affectations directes {#total-people-count}

Le nombre de personnes total qui sont affectées directement à ce calque d'affectation dans le bâtiment, l'addition des personnes réelles affectés et du nombre de personnes affectés manuellement

*Nom technique:* ```totalPeopleCount```
<PH code="dimension:totalPeopleCount"/>

### Valeur numérique {#value}

La valeur peut être utilisé pour associé le calque à une valeur numérique afin de pouvoir réaliser des statisques analytiques

*Nom technique:* ```value```
<PH code="dimension:value"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Type de calque {#dimension-type}



*Nom technique:* ```dimensionType```
<PH code="dimension:dimensionType"/>


## Entités associées (liste) {#properties-has-many}

### Affectations aux calques d'affectation {#dimension-to-people}

Permet d'affecter une personne à un quartier, territoire ou village

*Nom technique:* ```dimensionToPeople```
<PH code="dimension:dimensionToPeople"/>

### Calques d'analyse des espaces {#dimension-rooms}



*Nom technique:* ```dimensionRooms```
<PH code="dimension:dimensionRooms"/>

### Calques d'analyse par bâtiment {#dimension-buildings}



*Nom technique:* ```dimensionBuildings```
<PH code="dimension:dimensionBuildings"/>

### Calques d'analyse par étage {#dimension-floors}



*Nom technique:* ```dimensionFloors```
<PH code="dimension:dimensionFloors"/>

### Réservations au calque d'affectation des personnes {#person-to-dimension-bookings}

Les réservations aux calques d'affectation des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

*Nom technique:* ```personToDimensionBookings```
<PH code="dimension:personToDimensionBookings"/>




