# Floor
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Basic properties {#properties-base}

### Background {#backgroundLayout}

The background allows you to have a first layer level in order to redraw the plans, it must be to scale

*Technical name:* ```backgroundLayout```

### Background opacity {#backgroundLayoutOpacity}

The opacity allows you to see more or less the background

*Technical name:* ```backgroundLayoutOpacity```

### Bulking rate {#expansionRatio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```

### Carbon footprint {#carbonFootprint}

The carbon footprint is the number of CO2 emitted

*Technical name:* ```carbonFootprint```

### Ceiling height {#height}

The height under the ceiling of the floor

*Technical name:* ```height```

### Level {#level}

The level of the floor allows to define its position relative to the other floors, for example use 0 for the ground floor or -1 for the car parks

*Technical name:* ```level```

### Name of the floor {#name}

The name of the floor is used to be able to find it easily.

*Technical name:* ```name```

### Number of assignments {#peopleCount}

The number of people assigned to the floor, either directly assigned to spaces, or through a workstation

*Technical name:* ```peopleCount```

### Number of flex positions {#flexWorkplacesCount}

Number of flex posts in the floor

*Technical name:* ```flexWorkplacesCount```

### Number of seats {#seatsCount}

The total number of seats

*Technical name:* ```seatsCount```

### Number of shared workstations {#sharedWorkplacesCount}

Number of workstations shared on the floor by at least 2 people

*Technical name:* ```sharedWorkplacesCount```

### Number of spaces {#roomsCount}

The number of spaces present in this floor

*Technical name:* ```roomsCount```

### Number of total assignments {#totalPeopleCount}

The number of people assigned to the floor, either directly assigned to spaces, or through a workstation

*Technical name:* ```totalPeopleCount```

### Number of transit workstations {#transitWorkplacesCount}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```

### Number of vacancies {#freeWorkplacesCount}

Number of free extensions on the floor

*Technical name:* ```freeWorkplacesCount```

### Number of workstations {#workplacesCount}

The number of workstations in the floor is calculated automatically

*Technical name:* ```workplacesCount```

### Occupancy rate {#occupancyRate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```

### Occupancy ratio {#peopleRatio}

The occupancy ratio is the number of square meters on the floor divided by the number of people assigned either directly to the spaces or via a workstation, this value is calculated

*Technical name:* ```peopleRatio```

### Qualified surface {#roomsArea}

The qualified surface is the sum of the surfaces of the spaces

*Technical name:* ```roomsArea```

### Rate of flex workstations {#flexRatio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```

### Rate of seats per workstation {#totalCapacityWorkplaceCountRatio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```

### Rate of shared workstations {#sharedWorkplacesRatio}

Rate of workstations shared by at least 2 people compared to all the workstations on the floor

*Technical name:* ```sharedWorkplacesRatio```

### Regulatory capacity {#regulatoryCapacity}

The regulatory capacity of the platform, makes it possible to manage the evacuation of the public and employees

*Technical name:* ```regulatoryCapacity```

### Seating rate by assignment {#seatsPeopleRatio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```

### Total capacity {#totalCapacityCount}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```

### Workstation ratio {#workplacesRatio}

The workstation ratio is the number of square meters in the floor divided by the number of workstations, this value is calculated automatically

*Technical name:* ```workplacesRatio```


## Associated entities (unique) {#properties-belongs-to}

### Building {#building}

The building is used to group the floors

*Technical name:* ```building```

### Plan scale {#mapScale}

The scale allows us to calculate in proportion the actual areas and sizes of objects

*Technical name:* ```mapScale```

### Structure {#structure}



*Technical name:* ```structure```


## Associated entities (list) {#properties-has-many}

###  Partner Export Mapping Configuration To Floors {#partnerExportMappingConfigurationToFloors}



*Technical name:* ```partnerExportMappingConfigurationToFloors```

### Analysis layers per floor {#dimensionFloors}



*Technical name:* ```dimensionFloors```

### Floor cost centers {#costCenterFloors}



*Technical name:* ```costCenterFloors```

### Floor organization {#organizationFloors}



*Technical name:* ```organizationFloors```

### Floor space typologies {#roomTypeFloors}



*Technical name:* ```roomTypeFloors```

### Floor space typology groups {#roomTypeGroupFloors}



*Technical name:* ```roomTypeGroupFloors```

### Points of spaces {#roomPoints}



*Technical name:* ```roomPoints```

### Role associations of content to floors {#contentRoleToFloors}



*Technical name:* ```contentRoleToFloors```

### Spaces {#rooms}



*Technical name:* ```rooms```




