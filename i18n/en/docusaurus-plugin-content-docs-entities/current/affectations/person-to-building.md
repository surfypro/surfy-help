---
search_rank: 0.5
---    
# Building assignment
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Allows assigning a person to a building, without additional information. The assignment can be counted or not.

<OH code="personToBuilding"/>






## Basic properties {#properties-base}
    
### Allow parking booking in the building {#allow-parking-booking-in-the-building}

Allows the person to book a parking space in this building

*Technical name:* ```allowParkingBookingInTheBuilding```
<PH code="personToBuilding:allowParkingBookingInTheBuilding"/>

### Allow workplace booking in the building {#allow-workplace-booking-in-the-building}

Allows the person to book a workplace in this building

*Technical name:* ```allowWorkplaceBookingInTheBuilding```
<PH code="personToBuilding:allowWorkplaceBookingInTheBuilding"/>

### Count the assignment {#add-to-people-count}

Add this assignment to the total number of people assigned to the building

*Technical name:* ```addToPeopleCount```
<PH code="personToBuilding:addToPeopleCount"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Building {#building}

The building is used to group the floors

*Technical name:* ```building```
<PH code="personToBuilding:building"/>

### Person {#person}

These are the people entered into Surfy's database

*Technical name:* ```person```
<PH code="personToBuilding:person"/>





