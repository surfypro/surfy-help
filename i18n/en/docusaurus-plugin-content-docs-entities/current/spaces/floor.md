# Floor
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Basic properties {#properties-base}

### Background {#background-layout}

The background allows you to have a first layer level in order to redraw the plans, it must be to scale

*Technical name:* ```backgroundLayout```

### Background opacity {#background-layout-opacity}

The opacity allows you to see more or less the background

*Technical name:* ```backgroundLayoutOpacity```

### Bulking rate {#expansion-ratio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```

### Carbon footprint {#carbon-footprint}

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

### Number of assignments {#people-count}

The number of people assigned to the floor, either directly assigned to spaces, or through a workstation

*Technical name:* ```peopleCount```

### Number of flex positions {#flex-workplaces-count}

Number of flex posts in the floor

*Technical name:* ```flexWorkplacesCount```

### Number of seats {#seats-count}

The total number of seats

*Technical name:* ```seatsCount```

### Number of shared workstations {#shared-workplaces-count}

Number of workstations shared on the floor by at least 2 people

*Technical name:* ```sharedWorkplacesCount```

### Number of spaces {#rooms-count}

The number of spaces present in this floor

*Technical name:* ```roomsCount```

### Number of total assignments {#total-people-count}

The number of people assigned to the floor, either directly assigned to spaces, or through a workstation

*Technical name:* ```totalPeopleCount```

### Number of transit workstations {#transit-workplaces-count}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```

### Number of vacancies {#free-workplaces-count}

Number of free extensions on the floor

*Technical name:* ```freeWorkplacesCount```

### Number of workstations {#workplaces-count}

The number of workstations in the floor is calculated automatically

*Technical name:* ```workplacesCount```

### Occupancy rate {#occupancy-rate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```

### Occupancy ratio {#people-ratio}

The occupancy ratio is the number of square meters on the floor divided by the number of people assigned either directly to the spaces or via a workstation, this value is calculated

*Technical name:* ```peopleRatio```

### Qualified surface {#rooms-area}

The qualified surface is the sum of the surfaces of the spaces

*Technical name:* ```roomsArea```

### Rate of flex workstations {#flex-ratio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```

### Rate of seats per workstation {#total-capacity-workplace-count-ratio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```

### Rate of shared workstations {#shared-workplaces-ratio}

Rate of workstations shared by at least 2 people compared to all the workstations on the floor

*Technical name:* ```sharedWorkplacesRatio```

### Regulatory capacity {#regulatory-capacity}

The regulatory capacity of the platform, makes it possible to manage the evacuation of the public and employees

*Technical name:* ```regulatoryCapacity```

### Seating rate by assignment {#seats-people-ratio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```

### Total capacity {#total-capacity-count}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```

### Workstation ratio {#workplaces-ratio}

The workstation ratio is the number of square meters in the floor divided by the number of workstations, this value is calculated automatically

*Technical name:* ```workplacesRatio```


## Associated entities (unique) {#properties-belongs-to}

### Building {#building}

The building is used to group the floors

*Technical name:* ```building```

### Plan scale {#map-scale}

The scale allows us to calculate in proportion the actual areas and sizes of objects

*Technical name:* ```mapScale```

### Structure {#structure}



*Technical name:* ```structure```


## Associated entities (list) {#properties-has-many}

###  Partner Export Mapping Configuration To Floors {#partner-export-mapping-configuration-to-floors}



*Technical name:* ```partnerExportMappingConfigurationToFloors```

### Analysis layers per floor {#dimension-floors}



*Technical name:* ```dimensionFloors```

### Floor cost centers {#cost-center-floors}



*Technical name:* ```costCenterFloors```

### Floor organization {#organization-floors}



*Technical name:* ```organizationFloors```

### Floor space typologies {#room-type-floors}



*Technical name:* ```roomTypeFloors```

### Floor space typology groups {#room-type-group-floors}



*Technical name:* ```roomTypeGroupFloors```

### Points of spaces {#room-points}



*Technical name:* ```roomPoints```

### Role associations of content to floors {#content-role-to-floors}



*Technical name:* ```contentRoleToFloors```

### Spaces {#rooms}



*Technical name:* ```rooms```




