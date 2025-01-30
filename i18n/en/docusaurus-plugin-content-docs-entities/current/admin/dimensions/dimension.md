# Analysis layer
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="dimension"/>




## Required Properties {#properties-mandatory}
    
### Name of the analysis layer {#name}

Useful to differentiate the layer among others

*Technical name:* ```name```
<PH code="dimension:name"/>

    


## Basic properties {#properties-base}
    
### Carbon footprint per square meter {#carbon-footprint-per-meter}

The carbon footprint per square meter calculates the carbon footprint in kilograms of CO2 of an analysis layer per square meters

*Technical name:* ```carbonFootprintPerMeter```
<PH code="dimension:carbonFootprintPerMeter"/>

### Color {#color}

The analysis layer color allows you to differentiate spaces on the plan

*Technical name:* ```color```
<PH code="dimension:color"/>

### Number of direct assignments {#people-count}

The number of people who are directly assigned to this assignment layer in the building

*Technical name:* ```peopleCount```
<PH code="dimension:peopleCount"/>

### Number of direct manual assignments {#manual-people-count}

The number of people who are assigned directly to this assignment layer without considering assignments with real people

*Technical name:* ```manualPeopleCount```
<PH code="dimension:manualPeopleCount"/>

### Numerical value {#value}

The value can be used to associate the layer with a numerical value in order to be able to carry out analytical statistics

*Technical name:* ```value```
<PH code="dimension:value"/>

### Total number of direct assignments {#total-people-count}

The total number of people who are assigned directly to this assignment layer in the building, the addition of the actual people assigned and the number of people assigned manually

*Technical name:* ```totalPeopleCount```
<PH code="dimension:totalPeopleCount"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Layer type {#dimension-type}



*Technical name:* ```dimensionType```
<PH code="dimension:dimensionType"/>


## Associated entities (list) {#properties-has-many}

### Analysis layers by building {#dimension-buildings}



*Technical name:* ```dimensionBuildings```
<PH code="dimension:dimensionBuildings"/>

### Analysis layers per floor {#dimension-floors}



*Technical name:* ```dimensionFloors```
<PH code="dimension:dimensionFloors"/>

### Assignments to Assignment Layers {#dimension-to-people}

Allows you to assign a person to a district, territory or village

*Technical name:* ```dimensionToPeople```
<PH code="dimension:dimensionToPeople"/>

### Reservations on the people assignment layer {#person-to-dimension-bookings}

Reservations to people assignment layers are recorded and available with reservation start and end dates

*Technical name:* ```personToDimensionBookings```
<PH code="dimension:personToDimensionBookings"/>

### Space analysis layers {#dimension-rooms}



*Technical name:* ```dimensionRooms```
<PH code="dimension:dimensionRooms"/>




