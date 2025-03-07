# Floor
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Floors represent a work platform or a level of a building.

<OH code="floor"/>




## Required Properties {#properties-mandatory}
    
### Level {#level}

The level of the floor allows to define its position relative to the other floors, for example use 0 for the ground floor or -1 for the car parks

*Technical name:* ```level```
<PH code="floor:level"/>

### Name of the floor {#name}

The name of the floor is used to be able to find it easily.

*Technical name:* ```name```
<PH code="floor:name"/>

    


## Basic properties {#properties-base}
    
### Background {#background-layout}

The background allows you to have a first layer level in order to redraw the plans, it must be to scale

*Technical name:* ```backgroundLayout```
<PH code="floor:backgroundLayout"/>

### Background opacity {#background-layout-opacity}

The opacity allows you to see more or less the background

*Technical name:* ```backgroundLayoutOpacity```
<PH code="floor:backgroundLayoutOpacity"/>

### Carbon footprint {#carbon-footprint}

The carbon footprint is the number of CO2 emitted

*Technical name:* ```carbonFootprint```
<PH code="floor:carbonFootprint"/>

### Ceiling height {#height}

The height under the ceiling of the floor

*Technical name:* ```height```
<PH code="floor:height"/>

### Expansion rate {#expansion-ratio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```
<PH code="floor:expansionRatio"/>

### Floor navigation graph {#pathfinding-graph}

The navigation graph allows you to calculate the shortest paths between the points on the floor

*Technical name:* ```pathfindingGraph```
<PH code="floor:pathfindingGraph"/>

### Number of assignments {#people-count}

The number of people assigned to the floor, either directly assigned to spaces, or through a workstation

*Technical name:* ```peopleCount```
<PH code="floor:peopleCount"/>

### Number of flex positions {#flex-workplaces-count}

Number of flex posts in the floor

*Technical name:* ```flexWorkplacesCount```
<PH code="floor:flexWorkplacesCount"/>

### Number of seats {#seats-count}

The total number of seats

*Technical name:* ```seatsCount```
<PH code="floor:seatsCount"/>

### Number of shared workstations {#shared-workplaces-count}

Number of workstations shared on the floor by at least 2 people

*Technical name:* ```sharedWorkplacesCount```
<PH code="floor:sharedWorkplacesCount"/>

### Number of spaces {#rooms-count}

The number of spaces present in this floor

*Technical name:* ```roomsCount```
<PH code="floor:roomsCount"/>

### Number of total assignments {#total-people-count}

The number of people assigned to the floor, either directly assigned to spaces, or through a workstation

*Technical name:* ```totalPeopleCount```
<PH code="floor:totalPeopleCount"/>

### Number of transit workstations {#transit-workplaces-count}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```
<PH code="floor:transitWorkplacesCount"/>

### Number of vacancies {#free-workplaces-count}

Number of free extensions on the floor

*Technical name:* ```freeWorkplacesCount```
<PH code="floor:freeWorkplacesCount"/>

### Number of workstations {#workplaces-count}

The number of workstations in the floor is calculated automatically

*Technical name:* ```workplacesCount```
<PH code="floor:workplacesCount"/>

### Occupancy rate {#occupancy-rate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```
<PH code="floor:occupancyRate"/>

### Occupancy ratio {#people-ratio}

The occupancy ratio is the number of square meters on the floor divided by the number of people assigned either directly to the spaces or via a workstation, this value is calculated

*Technical name:* ```peopleRatio```
<PH code="floor:peopleRatio"/>

### Qualified surface {#rooms-area}

The qualified surface is the sum of the surfaces of the spaces

*Technical name:* ```roomsArea```
<PH code="floor:roomsArea"/>

### Rate of flex workstations {#flex-ratio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```
<PH code="floor:flexRatio"/>

### Rate of seats per workstation {#total-capacity-workplace-count-ratio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```
<PH code="floor:totalCapacityWorkplaceCountRatio"/>

### Rate of shared workstations {#shared-workplaces-ratio}

Rate of workstations shared by at least 2 people compared to all the workstations on the floor

*Technical name:* ```sharedWorkplacesRatio```
<PH code="floor:sharedWorkplacesRatio"/>

### Regulatory capacity {#regulatory-capacity}

The regulatory capacity of the platform, makes it possible to manage the evacuation of the public and employees

*Technical name:* ```regulatoryCapacity```
<PH code="floor:regulatoryCapacity"/>

### Seating rate by assignment {#seats-people-ratio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```
<PH code="floor:seatsPeopleRatio"/>

### Total capacity {#total-capacity-count}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```
<PH code="floor:totalCapacityCount"/>

### Workstation ratio {#workplaces-ratio}

The workstation ratio is the number of square meters in the floor divided by the number of workstations, this value is calculated automatically

*Technical name:* ```workplacesRatio```
<PH code="floor:workplacesRatio"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Building {#building}

The building is used to group the floors

*Technical name:* ```building```
<PH code="floor:building"/>

### Plan scale {#map-scale}

The scale allows us to calculate in proportion the actual areas and sizes of objects

*Technical name:* ```mapScale```
<PH code="floor:mapScale"/>

### Structure {#structure}



*Technical name:* ```structure```
<PH code="floor:structure"/>


## Associated entities (list) {#properties-has-many}

### Analysis layers per floor {#dimension-floors}



*Technical name:* ```dimensionFloors```
<PH code="floor:dimensionFloors"/>

### Floor cost centers {#cost-center-floors}



*Technical name:* ```costCenterFloors```
<PH code="floor:costCenterFloors"/>

### Floor organization {#organization-floors}



*Technical name:* ```organizationFloors```
<PH code="floor:organizationFloors"/>

### Floor space typologies {#room-type-floors}



*Technical name:* ```roomTypeFloors```
<PH code="floor:roomTypeFloors"/>

### Floor space typology groups {#room-type-group-floors}



*Technical name:* ```roomTypeGroupFloors```
<PH code="floor:roomTypeGroupFloors"/>

### Floors included in the configuration of the transformation of partner exports {#partner-export-mapping-configuration-to-floors}



*Technical name:* ```partnerExportMappingConfigurationToFloors```
<PH code="floor:partnerExportMappingConfigurationToFloors"/>

### Points of spaces {#room-points}



*Technical name:* ```roomPoints```
<PH code="floor:roomPoints"/>

### Role associations of content to floors {#content-role-to-floors}



*Technical name:* ```contentRoleToFloors```
<PH code="floor:contentRoleToFloors"/>

### Spaces {#rooms}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```rooms```
<PH code="floor:rooms"/>




