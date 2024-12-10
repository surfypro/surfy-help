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

### Nobody {#person}



*Technical name:* ```person```
<PH code="personWorkingLocation:person"/>


## Associated entities (list) {#properties-has-many}

### Reservations at people's workstations {#person-to-workplace-bookings}

People's workstation reservations are recorded and available with the start and end dates of the reservation

*Technical name:* ```personToWorkplaceBookings```
<PH code="personWorkingLocation:personToWorkplaceBookings"/>

### Reservations for the people area {#person-to-room-bookings}

Reservations for people's spaces are recorded and available with the start and end dates of the reservation

*Technical name:* ```personToRoomBookings```
<PH code="personWorkingLocation:personToRoomBookings"/>

### Reservations on the people assignment layer {#person-to-dimension-bookings}

Reservations on people assignment layers are recorded and available with the start and end dates of the reservation

*Technical name:* ```personToDimensionBookings```
<PH code="personWorkingLocation:personToDimensionBookings"/>




