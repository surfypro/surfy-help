---
search_rank: 0.5
---    
# Vehicle
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A vehicle allows you to manage information related to a vehicle

<OH code="vehicle"/>






## Basic properties {#properties-base}
    
### Belongs to the company {#belongs-to-the-company}

Indicates whether the vehicle belongs to the company

*Technical name:* ```belongsToTheCompany```
<PH code="vehicle:belongsToTheCompany"/>

### Registration {#vehicle-registration}

The vehicle registration number

*Technical name:* ```vehicleRegistration```
<PH code="vehicle:vehicleRegistration"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Vehicle propulsion type {#vehicle-propulsion-type}

A vehicle propulsion type allows us to categorize vehicles according to their propulsion method (electric, thermal, hybrid, manual, etc.)

*Technical name:* ```vehiclePropulsionType```
<PH code="vehicle:vehiclePropulsionType"/>

### Vehicle type {#vehicle-type}

The type of vehicle associated with this vehicle

*Technical name:* ```vehicleType```
<PH code="vehicle:vehicleType"/>


## Associated entities (list) {#properties-has-many}

### Vehicle assignments {#person-to-vehicles}

Allows you to associate a person with one or more vehicles

*Technical name:* ```personToVehicles```
<PH code="vehicle:personToVehicles"/>




