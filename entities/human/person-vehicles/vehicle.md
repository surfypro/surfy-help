---
search_rank: 0.5
---    
# Véhicule
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un véhicule permet de gérer les informations relatives à un véhicule

<OH code="vehicle"/>






## Propriétés de base {#properties-base}
    
### Appartient à l'entreprise {#belongs-to-the-company}

Indique si le véhicule appartient à l'entreprise

*Nom technique:* ```belongsToTheCompany```
<PH code="vehicle:belongsToTheCompany"/>

### Immatriculation {#vehicle-registration}

Le numéro d'immatriculation du véhicule

*Nom technique:* ```vehicleRegistration```
<PH code="vehicle:vehicleRegistration"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Type de propulsion de véhicule {#vehicle-propulsion-type}

Un type de propulsion de véhicule permet de catégoriser les véhicules selon leur mode de propulsion (électrique, thérmique, hybride, huile de coude, etc.)

*Nom technique:* ```vehiclePropulsionType```
<PH code="vehicle:vehiclePropulsionType"/>

### Type de véhicule {#vehicle-type}

Le type de véhicule associé à ce véhicule

*Nom technique:* ```vehicleType```
<PH code="vehicle:vehicleType"/>


## Entités associées (liste) {#properties-has-many}

### Affectations véhicules {#person-to-vehicles}

Permet d'associer une personne à un ou plusieurs véhicules

*Nom technique:* ```personToVehicles```
<PH code="vehicle:personToVehicles"/>




