---
search_rank: 0.5
---    
# Calque d'analyse
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un calque d'analyse permet de catégoriser et analyser les espaces selon différents critères pour des analyses statistiques et de reporting

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

### Manual People Count {#manual-people-count}



*Nom technique:* ```manualPeopleCount```
<PH code="dimension:manualPeopleCount"/>

### Nombre d'affectations {#people-count}



*Nom technique:* ```peopleCount```
<PH code="dimension:peopleCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="dimension:totalPeopleCount"/>

### Taux de surcharge pour la réservation {#crowded-for-booking-rate}

Le taux de surcharge pour la réservation permet de définir le pourcentage d'occupation au-delà duquel un espace est considéré comme surchargé pour les réservations

*Nom technique:* ```crowdedForBookingRate```
<PH code="dimension:crowdedForBookingRate"/>

### Valeur numérique {#value}

La valeur peut être utilisé pour associé le calque à une valeur numérique afin de pouvoir réaliser des statisques analytiques

*Nom technique:* ```value```
<PH code="dimension:value"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Type de calque {#dimension-type}

Un type de calque permet de catégoriser les calques d'analyse selon leur usage ou leur domaine d'application

*Nom technique:* ```dimensionType```
<PH code="dimension:dimensionType"/>


## Entités associées (liste) {#properties-has-many}

### Affectations aux calques d'affectation {#dimension-to-people}

Permet d'affecter une personne à un quartier, territoire ou village

*Nom technique:* ```dimensionToPeople```
<PH code="dimension:dimensionToPeople"/>

### Associations calque d'analyse aux bâtiments {#dimension-buildings}

Une association calque d'analyse aux bâtiments permet de définir les calques d'analyse spécifiques pour chaque bâtiment

*Nom technique:* ```dimensionBuildings```
<PH code="dimension:dimensionBuildings"/>

### Associations calque d'analyse aux espaces {#dimension-rooms}

Une association calque d'analyse aux espaces permet de définir les calques d'analyse spécifiques pour chaque espace

*Nom technique:* ```dimensionRooms```
<PH code="dimension:dimensionRooms"/>

### Associations calque d'analyse aux étages {#dimension-floors}

Une association calque d'analyse aux étages permet de définir les calques d'analyse spécifiques pour chaque étage

*Nom technique:* ```dimensionFloors```
<PH code="dimension:dimensionFloors"/>

### Réservations au calque d'affectation des personnes {#person-to-dimension-bookings}

Les réservations aux calques d'affectation des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

*Nom technique:* ```personToDimensionBookings```
<PH code="dimension:personToDimensionBookings"/>




