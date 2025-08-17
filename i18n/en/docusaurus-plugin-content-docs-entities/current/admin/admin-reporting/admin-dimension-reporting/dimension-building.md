# Association of analysis layer to buildings
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

An analysis layer association with buildings allows you to define specific analysis layers for each building

<OH code="dimensionBuilding"/>




## Required Properties {#properties-mandatory}
    
### Carbon footprint {#carbon-footprint}

The carbon footprint is the number of CO2 emitted

*Technical name:* ```carbonFootprint```
<PH code="dimensionBuilding:carbonFootprint"/>

### Expansion rate {#expansion-ratio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```
<PH code="dimensionBuilding:expansionRatio"/>

### Number of assignments {#people-count}



*Technical name:* ```peopleCount```
<PH code="dimensionBuilding:peopleCount"/>

### Number of assignments directly to this assignment layer {#dimension-people-count}

The number of people who are assigned to this assignment layer for the entire building

*Technical name:* ```dimensionPeopleCount```
<PH code="dimensionBuilding:dimensionPeopleCount"/>

### Number of flex positions {#flex-workplaces-count}

Total number of flex positions

*Technical name:* ```flexWorkplacesCount```
<PH code="dimensionBuilding:flexWorkplacesCount"/>

### Number of seats {#seats-count}

The total number of seats

*Technical name:* ```seatsCount```
<PH code="dimensionBuilding:seatsCount"/>

### Number of shared workstations {#shared-workplaces-count}

Total number of workstations shared by at least 2 people

*Technical name:* ```sharedWorkplacesCount```
<PH code="dimensionBuilding:sharedWorkplacesCount"/>

### Number of spaces {#rooms-count}

The total number of spaces

*Technical name:* ```roomsCount```
<PH code="dimensionBuilding:roomsCount"/>

### Number of transit workstations {#transit-workplaces-count}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```
<PH code="dimensionBuilding:transitWorkplacesCount"/>

### Number of vacancies {#free-workplaces-count}

Total number of vacancies

*Technical name:* ```freeWorkplacesCount```
<PH code="dimensionBuilding:freeWorkplacesCount"/>

### Number of workstations {#workplaces-count}

The total number of workstations in the spaces

*Technical name:* ```workplacesCount```
<PH code="dimensionBuilding:workplacesCount"/>

### Occupancy rate {#occupancy-rate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```
<PH code="dimensionBuilding:occupancyRate"/>

### Occupancy ratio {#people-ratio}

The occupancy ratio is the number of square meters divided by the number of people assigned either directly to the spaces or via a workstation

*Technical name:* ```peopleRatio```
<PH code="dimensionBuilding:peopleRatio"/>

### Qualified surface {#rooms-area}

The qualified surface is the sum of the surfaces of the spaces

*Technical name:* ```roomsArea```
<PH code="dimensionBuilding:roomsArea"/>

### Rate of flex workstations {#flex-ratio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```
<PH code="dimensionBuilding:flexRatio"/>

### Rate of seats per workstation {#total-capacity-workplace-count-ratio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```
<PH code="dimensionBuilding:totalCapacityWorkplaceCountRatio"/>

### Rate of shared workstations {#shared-workplaces-ratio}

Percentage of workstations shared by at least 2 people compared to all workstations

*Technical name:* ```sharedWorkplacesRatio```
<PH code="dimensionBuilding:sharedWorkplacesRatio"/>

### Seating rate by assignment {#seats-people-ratio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```
<PH code="dimensionBuilding:seatsPeopleRatio"/>

### Total capacity {#total-capacity-count}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```
<PH code="dimensionBuilding:totalCapacityCount"/>

### Total number of assignments {#total-people-count}

The total number of people assigned, either directly assigned to spaces or through a workstation

*Technical name:* ```totalPeopleCount```
<PH code="dimensionBuilding:totalPeopleCount"/>

### Workstation ratio {#workplaces-ratio}

The workstation ratio is the number of square meters divided by the number of workstations

*Technical name:* ```workplacesRatio```
<PH code="dimensionBuilding:workplacesRatio"/>

    



## Associated entities (unique) {#properties-belongs-to}

### Analysis layer {#dimension}

An analysis layer allows spaces to be categorized and analyzed according to different criteria for statistical and reporting analyses.

*Technical name:* ```dimension```
<PH code="dimensionBuilding:dimension"/>

### Building {#building}

The building is used to group the floors

*Technical name:* ```building```
<PH code="dimensionBuilding:building"/>

### Layer type {#dimension-type}

A layer type allows you to categorize analysis layers according to their use or area of application.

*Technical name:* ```dimensionType```
<PH code="dimensionBuilding:dimensionType"/>





