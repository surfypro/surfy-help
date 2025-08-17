# Space
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

<OH code="room"/>






## Basic properties {#properties-base}
    
### Additional information {#info}

Allows you to keep additional text-type information on the space

*Technical name:* ```info```
<PH code="room:info"/>

### Area {#area}

The qualified floor space for this space

*Technical name:* ```area```
<PH code="room:area"/>

### Capacity excluding seats {#capacity}

The declared capacity can be used to define the number of seats available in a space or to know the maximum number of people that can be put in a space, this figure is added to the number of seats to give the total capacity

*Technical name:* ```capacity```
<PH code="room:capacity"/>

### Carbon footprint {#carbon-footprint}

The carbon footprint is the number of CO2 emitted

*Technical name:* ```carbonFootprint```
<PH code="room:carbonFootprint"/>

### Cylinder number {#key-cylinder-code}

The cylinder number allows you to define the cylinder number of the space door lock or an element related to the physical access to the space

*Technical name:* ```keyCylinderCode```
<PH code="room:keyCylinderCode"/>

### Display name {#pretty-name}

Allows to have a display name in addition to the technical name of the space, for example for meeting rooms

*Technical name:* ```prettyName```
<PH code="room:prettyName"/>

### Email used to reserve this space {#booking-email}

This email is used to reserve this room via the messaging system

*Technical name:* ```bookingEmail```
<PH code="room:bookingEmail"/>

### Expansion rate {#expansion-ratio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```
<PH code="room:expansionRatio"/>

### External Id2 {#external-id-2}



*Technical name:* ```externalId2```
<PH code="room:externalId2"/>

### Number of assignments {#people-count}



*Technical name:* ```peopleCount```
<PH code="room:peopleCount"/>

### Number of flex positions {#flex-workplaces-count}

Total number of flex positions

*Technical name:* ```flexWorkplacesCount```
<PH code="room:flexWorkplacesCount"/>

### Number of people in space in real time {#live-people-count}

This value is updated by the people counting sensors present in the space and provides the number of people present in real time in the space

*Technical name:* ```livePeopleCount```
<PH code="room:livePeopleCount"/>

### Number of seats {#seats-count}

The total number of seats

*Technical name:* ```seatsCount```
<PH code="room:seatsCount"/>

### Number of shared workstations {#shared-workplaces-count}

Total number of workstations shared by at least 2 people

*Technical name:* ```sharedWorkplacesCount```
<PH code="room:sharedWorkplacesCount"/>

### Number of transit workstations {#transit-workplaces-count}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```
<PH code="room:transitWorkplacesCount"/>

### Number of vacancies {#free-workplaces-count}

Total number of vacancies

*Technical name:* ```freeWorkplacesCount```
<PH code="room:freeWorkplacesCount"/>

### Number of workstations {#workplaces-count}

The total number of workstations in the spaces

*Technical name:* ```workplacesCount```
<PH code="room:workplacesCount"/>

### Occupancy rate {#occupancy-rate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```
<PH code="room:occupancyRate"/>

### Occupancy ratio {#people-ratio}

The occupancy ratio is the number of square meters divided by the number of people assigned either directly to the spaces or via a workstation

*Technical name:* ```peopleRatio```
<PH code="room:peopleRatio"/>

### Perimeter {#perimeter}

The perimeter of space represents its outline

*Technical name:* ```perimeter```
<PH code="room:perimeter"/>

### Photo from space {#picture}

The photo of the space makes it easy to visualize

*Technical name:* ```picture```
<PH code="room:picture"/>

### Rate of flex workstations {#flex-ratio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```
<PH code="room:flexRatio"/>

### Rate of seats per workstation {#total-capacity-workplace-count-ratio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```
<PH code="room:totalCapacityWorkplaceCountRatio"/>

### Rate of shared workstations {#shared-workplaces-ratio}

Percentage of workstations shared by at least 2 people compared to all workstations

*Technical name:* ```sharedWorkplacesRatio```
<PH code="room:sharedWorkplacesRatio"/>

### Seating rate by assignment {#seats-people-ratio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```
<PH code="room:seatsPeopleRatio"/>

### Space name {#name}

The space name is used to define it and find it easily.

*Technical name:* ```name```
<PH code="room:name"/>

### Text Anchor {#text-anchor}



*Technical name:* ```textAnchor```
<PH code="room:textAnchor"/>

### Total capacity {#total-capacity-count}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```
<PH code="room:totalCapacityCount"/>

### Total number of assignments {#total-people-count}

The total number of people assigned, either directly assigned to spaces or through a workstation

*Technical name:* ```totalPeopleCount```
<PH code="room:totalPeopleCount"/>

### Workstation ratio {#workplaces-ratio}

The workstation ratio is the number of square meters divided by the number of workstations

*Technical name:* ```workplacesRatio```
<PH code="room:workplacesRatio"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Cost center {#cost-center}

Allows you to know which cost center to associate the space with when it comes to managing re-invoicing to the cost center by space

*Technical name:* ```costCenter```
<PH code="room:costCenter"/>

### Floor {#floor}

Floors represent a work platform or a level of a building.

*Technical name:* ```floor```
<PH code="room:floor"/>

### Occupancy status {#occupancy-status}

The occupancy status makes it possible to identify the real-time status of a space or workstation, for example if it is free, occupied or squatted, the occupancy status is updated. day by connected objects present in space

*Technical name:* ```occupancyStatus```
<PH code="room:occupancyStatus"/>

### Organization {#organization}

Organizations have two hierarchical levels: departments and services, and help define the organizational structure of the company.

*Technical name:* ```organization```
<PH code="room:organization"/>

### Space connector {#room-connector}

Space connectors allow you to create a link between several spaces on different floors

*Technical name:* ```roomConnector```
<PH code="room:roomConnector"/>

### Space typology {#room-type}



*Technical name:* ```roomType```
<PH code="room:roomType"/>

### Type of cost distribution {#distribution-cost-type}

Allows you to determine the method of calculating the cost distribution key

*Technical name:* ```distributionCostType```
<PH code="room:distributionCostType"/>


## Associated entities (list) {#properties-has-many}

### Associations between a point and a space {#room-point-rooms}

The association between a point and a space makes it possible to preserve the order of the points in a space in order to constitute a polyon

*Technical name:* ```roomPointRooms```
<PH code="room:roomPointRooms"/>

### Objects {#items}

An object represents a physical or material element present in workspaces

*Technical name:* ```items```
<PH code="room:items"/>

### Personal work places {#workplaces}



*Technical name:* ```workplaces```
<PH code="room:workplaces"/>

### Reservations for the people area {#person-to-room-bookings}

Reservations for people's spaces are recorded and available with the reservation start and end dates

*Technical name:* ```personToRoomBookings```
<PH code="room:personToRoomBookings"/>

### Space analysis layers {#dimension-rooms}



*Technical name:* ```dimensionRooms```
<PH code="room:dimensionRooms"/>

### Space assignments {#room-affectations}

Allows you to assign a person to a single space

*Technical name:* ```roomAffectations```
<PH code="room:roomAffectations"/>




