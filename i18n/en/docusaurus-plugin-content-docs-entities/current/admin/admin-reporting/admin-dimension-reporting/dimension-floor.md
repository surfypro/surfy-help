# Analysis layer per floor
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="dimensionFloor"/>




## Required Properties {#properties-mandatory}
    
### Carbon footprint {#carbon-footprint}

The carbon footprint is the number of CO2 emitted

*Technical name:* ```carbonFootprint```
<PH code="dimensionFloor:carbonFootprint"/>

### Expansion rate {#expansion-ratio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```
<PH code="dimensionFloor:expansionRatio"/>

### Number of assignments {#people-count}

The number of people assigned, either directly assigned to spaces, or through a workstation for this floor

*Technical name:* ```peopleCount```
<PH code="dimensionFloor:peopleCount"/>

### Number of flex positions {#flex-workplaces-count}

Total number of flex positions

*Technical name:* ```flexWorkplacesCount```
<PH code="dimensionFloor:flexWorkplacesCount"/>

### Number of seats {#seats-count}

The total number of seats

*Technical name:* ```seatsCount```
<PH code="dimensionFloor:seatsCount"/>

### Number of shared workstations {#shared-workplaces-count}

Total number of workstations shared by at least 2 people

*Technical name:* ```sharedWorkplacesCount```
<PH code="dimensionFloor:sharedWorkplacesCount"/>

### Number of spaces {#rooms-count}

The total number of spaces

*Technical name:* ```roomsCount```
<PH code="dimensionFloor:roomsCount"/>

### Number of transit workstations {#transit-workplaces-count}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```
<PH code="dimensionFloor:transitWorkplacesCount"/>

### Number of vacancies {#free-workplaces-count}

Total number of vacancies

*Technical name:* ```freeWorkplacesCount```
<PH code="dimensionFloor:freeWorkplacesCount"/>

### Number of workstations {#workplaces-count}

The total number of workstations in the spaces

*Technical name:* ```workplacesCount```
<PH code="dimensionFloor:workplacesCount"/>

### Occupancy rate {#occupancy-rate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```
<PH code="dimensionFloor:occupancyRate"/>

### Occupancy ratio {#people-ratio}

The occupancy ratio is the number of square meters divided by the number of people assigned either directly to the spaces or via a workstation

*Technical name:* ```peopleRatio```
<PH code="dimensionFloor:peopleRatio"/>

### Qualified surface {#rooms-area}

The qualified surface is the sum of the surfaces of the spaces

*Technical name:* ```roomsArea```
<PH code="dimensionFloor:roomsArea"/>

### Rate of flex workstations {#flex-ratio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```
<PH code="dimensionFloor:flexRatio"/>

### Rate of seats per workstation {#total-capacity-workplace-count-ratio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```
<PH code="dimensionFloor:totalCapacityWorkplaceCountRatio"/>

### Rate of shared workstations {#shared-workplaces-ratio}

Percentage of workstations shared by at least 2 people compared to all workstations

*Technical name:* ```sharedWorkplacesRatio```
<PH code="dimensionFloor:sharedWorkplacesRatio"/>

### Seating rate by assignment {#seats-people-ratio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```
<PH code="dimensionFloor:seatsPeopleRatio"/>

### Total capacity {#total-capacity-count}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```
<PH code="dimensionFloor:totalCapacityCount"/>

### Total number of indirect assignments on the floor {#total-people-count}

The total number of people indirectly assigned to the floor, either directly assigned to spaces, or through a workstation, but not via the assignment layers which are only at the building level

*Technical name:* ```totalPeopleCount```
<PH code="dimensionFloor:totalPeopleCount"/>

### Workstation ratio {#workplaces-ratio}

The workstation ratio is the number of square meters divided by the number of workstations

*Technical name:* ```workplacesRatio```
<PH code="dimensionFloor:workplacesRatio"/>

    



## Associated entities (unique) {#properties-belongs-to}

### Analysis layer {#dimension}



*Technical name:* ```dimension```
<PH code="dimensionFloor:dimension"/>

### Floor {#floor}

Floors represent a work platform or a level of a building.

*Technical name:* ```floor```
<PH code="dimensionFloor:floor"/>

### Layer type {#dimension-type}



*Technical name:* ```dimensionType```
<PH code="dimensionFloor:dimensionType"/>





