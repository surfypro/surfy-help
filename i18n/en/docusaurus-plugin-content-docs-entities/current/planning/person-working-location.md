# People's work location
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A workplace of people defines the workplace of people

<OH code="personWorkingLocation"/>


## Basic properties {#properties-base}

### Date {#date}



*Technical name:* ```date```
<PH code="personWorkingLocation:date"/>

### Day Slot Type {#day-slot-type}



*Technical name:* ```daySlotType```
<PH code="personWorkingLocation:daySlotType"/>


## Associated entities (unique) {#properties-belongs-to}

###  Working Location {#working-location}



*Technical name:* ```workingLocation```
<PH code="personWorkingLocation:workingLocation"/>

### Person {#person}

These are the people entered into Surfy's database

*Technical name:* ```person```
<PH code="personWorkingLocation:person"/>


## Associated entities (list) {#properties-has-many}

### Reservations at people's workstations {#person-to-workplace-bookings}

People's workstation reservations are recorded and available with reservation start and end dates

*Technical name:* ```personToWorkplaceBookings```
<PH code="personWorkingLocation:personToWorkplaceBookings"/>

### Reservations for the people area {#person-to-room-bookings}

Reservations for people's spaces are recorded and available with the reservation start and end dates

*Technical name:* ```personToRoomBookings```
<PH code="personWorkingLocation:personToRoomBookings"/>

### Reservations on the people assignment layer {#person-to-dimension-bookings}

Reservations to people assignment layers are recorded and available with reservation start and end dates

*Technical name:* ```personToDimensionBookings```
<PH code="personWorkingLocation:personToDimensionBookings"/>




