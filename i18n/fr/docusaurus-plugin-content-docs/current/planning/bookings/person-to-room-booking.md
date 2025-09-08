---
search_rank: 0.5
---    
# Reservation for the people area
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Reservations for people's spaces are recorded and available with the reservation start and end dates

<OH code="personToRoomBooking"/>




## Required Properties {#properties-mandatory}
    
### End of reservation {#end-datetime}

The date and time the reservation ends

*Technical name:* ```endDatetime```
<PH code="personToRoomBooking:endDatetime"/>

### Start of booking {#start-datetime}

The start date and time of the reservation

*Technical name:* ```startDatetime```
<PH code="personToRoomBooking:startDatetime"/>

    



## Associated entities (unique) {#properties-belongs-to}

### People's work location {#person-working-location}

A workplace of people defines the workplace of people

*Technical name:* ```personWorkingLocation```
<PH code="personToRoomBooking:personWorkingLocation"/>

### Person {#person}

These are the people entered into Surfy's database

*Technical name:* ```person```
<PH code="personToRoomBooking:person"/>

### Space {#room}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```room```
<PH code="personToRoomBooking:room"/>





