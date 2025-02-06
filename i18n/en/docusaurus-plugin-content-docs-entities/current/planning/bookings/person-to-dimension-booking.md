# Reservation to the people assignment layer
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Reservations to people assignment layers are recorded and available with reservation start and end dates

<OH code="personToDimensionBooking"/>




## Required Properties {#properties-mandatory}
    
### End of reservation {#end-datetime}

The date and time the reservation ends

*Technical name:* ```endDatetime```
<PH code="personToDimensionBooking:endDatetime"/>

### Start of booking {#start-datetime}

The start date and time of the reservation

*Technical name:* ```startDatetime```
<PH code="personToDimensionBooking:startDatetime"/>

    



## Associated entities (unique) {#properties-belongs-to}

### Analysis layer {#dimension}



*Technical name:* ```dimension```
<PH code="personToDimensionBooking:dimension"/>

### People's work location {#person-working-location}

A workplace of people defines the workplace of people

*Technical name:* ```personWorkingLocation```
<PH code="personToDimensionBooking:personWorkingLocation"/>

### Person {#person}

These are the people entered into Surfy's database

*Technical name:* ```person```
<PH code="personToDimensionBooking:person"/>





