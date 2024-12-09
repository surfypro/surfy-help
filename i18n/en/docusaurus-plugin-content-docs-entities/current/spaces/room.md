# Space
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Basic properties {#properties-base}

### Additional information {#info}

Allows you to keep additional text-type information on the space

*Technical name:* ```info```

### Area {#area}

The qualified floor space for this space

*Technical name:* ```area```

### Bulking rate {#expansionRatio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```

### Capacity excluding seats {#capacity}

The declared capacity can be used to define the number of seats available in a space or to know the maximum number of people that can be put in a space, this figure is added to the number of seats to give the total capacity

*Technical name:* ```capacity```

### Carbon footprint {#carbonFootprint}

The carbon footprint is the number of CO2 emitted

*Technical name:* ```carbonFootprint```

### Cylinder number {#keyCylinderCode}

The cylinder number allows you to define the cylinder number of the space door lock or an element related to the physical access to the space

*Technical name:* ```keyCylinderCode```

### Display name {#prettyName}

Allows to have a display name in addition to the technical name of the space, for example for meeting rooms

*Technical name:* ```prettyName```

### Email used to reserve this space {#bookingEmail}

This email is used to reserve this room via the messaging system

*Technical name:* ```bookingEmail```

### External Id2 {#externalId2}



*Technical name:* ```externalId2```

### Number of assignments {#peopleCount}

The number of people assigned to the space, either directly or through a workstation

*Technical name:* ```peopleCount```

### Number of flex positions {#flexWorkplacesCount}

Number of flex positions in the space

*Technical name:* ```flexWorkplacesCount```

### Number of people in space in real time {#livePeopleCount}

This value is updated by the people counting sensors present in the space and provides the number of people present in real time in the space

*Technical name:* ```livePeopleCount```

### Number of seats {#seatsCount}

The total number of seats

*Technical name:* ```seatsCount```

### Number of shared workstations {#sharedWorkplacesCount}

Number of workstations shared by at least 2 people

*Technical name:* ```sharedWorkplacesCount```

### Number of transit workstations {#transitWorkplacesCount}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```

### Number of vacancies {#freeWorkplacesCount}

Number of free positions in the space

*Technical name:* ```freeWorkplacesCount```

### Number of workstations {#workplacesCount}

The number of workstations in the space is calculated automatically

*Technical name:* ```workplacesCount```

### Occupancy rate {#occupancyRate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```

### Occupancy ratio {#peopleRatio}

The occupancy ratio is the number of square meters of the space divided by the number of people assigned to the spaces, either directly or via a workstation, this value is calculated

*Technical name:* ```peopleRatio```

### Perimeter {#perimeter}

The perimeter of space represents its outline

*Technical name:* ```perimeter```

### Photo from space {#picture}

The photo of the space makes it easy to visualize

*Technical name:* ```picture```

### Rate of flex workstations {#flexRatio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```

### Rate of seats per workstation {#totalCapacityWorkplaceCountRatio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```

### Rate of shared workstations {#sharedWorkplacesRatio}

Rate of workstations shared by at least 2 people compared to all workstations in the space

*Technical name:* ```sharedWorkplacesRatio```

### Ratio per workstation {#workplacesRatio}

The ratio per workstation is the number of square meters of space divided by the number of workstations, this value is calculated automatically

*Technical name:* ```workplacesRatio```

### Seating rate by assignment {#seatsPeopleRatio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```

### Space name {#name}

The space name is used to define it and find it easily.

*Technical name:* ```name```

### Text Anchor {#textAnchor}



*Technical name:* ```textAnchor```

### Total capacity {#totalCapacityCount}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```

### Total number of assignments {#totalPeopleCount}

The total number of people assigned, either directly assigned to spaces or through a workstation

*Technical name:* ```totalPeopleCount```


## Associated entities (unique) {#properties-belongs-to}

### Cost center {#costCenter}

Allows you to know which cost center to associate the space with when it comes to managing re-invoicing to the cost center by space

*Technical name:* ```costCenter```

### Floor {#floor}



*Technical name:* ```floor```

### Occupancy status {#occupancyStatus}

The occupancy status makes it possible to identify the real-time status of a space or workstation, for example if it is free, occupied or squatted, the occupancy status is updated. day by connected objects present in space

*Technical name:* ```occupancyStatus```

### Organization {#organization}



*Technical name:* ```organization```

### Space connector {#roomConnector}

Space connectors allow you to create a link between several spaces on different floors

*Technical name:* ```roomConnector```

### Space typology {#roomType}



*Technical name:* ```roomType```

### Type of cost distribution {#distributionCostType}

Allows you to determine the method of calculating the cost distribution key

*Technical name:* ```distributionCostType```


## Associated entities (list) {#properties-has-many}

### Associations between a point and a space {#roomPointRooms}

The association between a point and a space makes it possible to preserve the order of the points in a space in order to constitute a polyon

*Technical name:* ```roomPointRooms```

### Objects {#items}



*Technical name:* ```items```

### Personal work places {#workplaces}



*Technical name:* ```workplaces```

### Reservations for the people area {#personToRoomBookings}

Reservations for people's spaces are recorded and available with the start and end dates of the reservation

*Technical name:* ```personToRoomBookings```

### Space analysis layers {#dimensionRooms}



*Technical name:* ```dimensionRooms```

### Space assignments {#roomAffectations}



*Technical name:* ```roomAffectations```




