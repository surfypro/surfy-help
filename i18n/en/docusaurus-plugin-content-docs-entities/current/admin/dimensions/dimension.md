# Analysis layer
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

An analysis layer allows spaces to be categorized and analyzed according to different criteria for statistical and reporting analyses.

<OH code="dimension"/>




## Required Properties {#properties-mandatory}
    
### Name of the analysis layer {#name}

Useful to differentiate the layer among others

*Technical name:* ```name```
<PH code="dimension:name"/>

    


## Basic properties {#properties-base}
    
### Booking surcharge rate {#crowded-for-booking-rate}

The reservation overload rate allows you to define the occupancy percentage beyond which a space is considered overloaded for reservations.

*Technical name:* ```crowdedForBookingRate```
<PH code="dimension:crowdedForBookingRate"/>

### Carbon footprint per square meter {#carbon-footprint-per-meter}

The carbon footprint per square meter calculates the carbon footprint in kilograms of CO2 of an analysis layer per square meters

*Technical name:* ```carbonFootprintPerMeter```
<PH code="dimension:carbonFootprintPerMeter"/>

### Color {#color}

The analysis layer color allows you to differentiate spaces on the plan

*Technical name:* ```color```
<PH code="dimension:color"/>

### Manual People Count {#manual-people-count}



*Technical name:* ```manualPeopleCount```
<PH code="dimension:manualPeopleCount"/>

### Number of assignments {#people-count}



*Technical name:* ```peopleCount```
<PH code="dimension:peopleCount"/>

### Numerical value {#value}

The value can be used to associate the layer with a numerical value in order to be able to carry out analytical statistics

*Technical name:* ```value```
<PH code="dimension:value"/>

### Total number of assignments {#total-people-count}

The total number of people assigned, either directly assigned to spaces or through a workstation

*Technical name:* ```totalPeopleCount```
<PH code="dimension:totalPeopleCount"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Layer type {#dimension-type}

A layer type allows you to categorize analysis layers according to their use or area of application.

*Technical name:* ```dimensionType```
<PH code="dimension:dimensionType"/>


## Associated entities (list) {#properties-has-many}

### Analysis layer associations to buildings {#dimension-buildings}

An analysis layer association with buildings allows you to define specific analysis layers for each building

*Technical name:* ```dimensionBuildings```
<PH code="dimension:dimensionBuildings"/>

### Analysis layer associations to floors {#dimension-floors}

An analysis layer to floor association allows you to define specific analysis layers for each floor

*Technical name:* ```dimensionFloors```
<PH code="dimension:dimensionFloors"/>

### Analysis layer associations to spaces {#dimension-rooms}

An analysis layer association to spaces allows you to define specific analysis layers for each space

*Technical name:* ```dimensionRooms```
<PH code="dimension:dimensionRooms"/>

### Assignments to Assignment Layers {#dimension-to-people}

Allows you to assign a person to a district, territory or village

*Technical name:* ```dimensionToPeople```
<PH code="dimension:dimensionToPeople"/>

### Reservations on the people assignment layer {#person-to-dimension-bookings}

Reservations to people assignment layers are recorded and available with reservation start and end dates

*Technical name:* ```personToDimensionBookings```
<PH code="dimension:personToDimensionBookings"/>




