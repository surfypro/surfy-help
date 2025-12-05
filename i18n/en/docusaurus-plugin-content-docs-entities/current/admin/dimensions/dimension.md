---
search_rank: 0.5
---    
# Analysis Layer
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

An analysis layer allows categorizing and analyzing spaces according to different criteria for statistical analysis and reporting

<OH code="dimension"/>




## Required Properties {#properties-mandatory}
    
### Analysis Layer Name {#name}

Useful for differentiating the layer among others

*Technical name:* ```name```
<PH code="dimension:name"/>

    


## Basic properties {#properties-base}
    
### Carbon Footprint per Square Meter {#carbon-footprint-per-meter}

The carbon footprint per square meter allows calculating the carbon footprint in kilograms of CO2 of an analysis layer per square meters

*Technical name:* ```carbonFootprintPerMeter```
<PH code="dimension:carbonFootprintPerMeter"/>

### Color {#color}

The analysis layer color allows differentiating spaces on the plan

*Technical name:* ```color```
<PH code="dimension:color"/>

### Crowding Rate for Booking {#crowded-for-booking-rate}

The crowding rate for booking allows defining the occupancy percentage beyond which a space is considered crowded for bookings

*Technical name:* ```crowdedForBookingRate```
<PH code="dimension:crowdedForBookingRate"/>

### Manual People Count {#manual-people-count}



*Technical name:* ```manualPeopleCount```
<PH code="dimension:manualPeopleCount"/>

### Number of direct assignments to the layer {#people-count}

The number of assignments directly to the layer

*Technical name:* ```peopleCount```
<PH code="dimension:peopleCount"/>

### Numeric Value {#value}

The value can be used to associate the layer with a numeric value to perform analytical statistics

*Technical name:* ```value```
<PH code="dimension:value"/>

### Total number of assignments to the layer {#total-people-count}

The total number of assignments to the layer directly, either via a workstation or via a workspace

*Technical name:* ```totalPeopleCount```
<PH code="dimension:totalPeopleCount"/>

### Workplaces Bookable Only Via Dimension {#workplaces-bookable-only-via-dimension}

When enabled, workplaces in this dimension can only be booked via direct assignment to the dimension, and are excluded from floor-based bookings

*Technical name:* ```workplacesBookableOnlyViaDimension```
<PH code="dimension:workplacesBookableOnlyViaDimension"/>

    

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




