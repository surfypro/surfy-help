# Analysis layer
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Basic properties {#properties-base}

### Carbon footprint per square meter {#carbonFootprintPerMeter}

The carbon footprint per square meter calculates the carbon footprint in kilograms of CO2 of an analysis layer per square meters

*Technical name:* ```carbonFootprintPerMeter```

### Color {#color}

The analysis layer color allows you to differentiate spaces on the plan

*Technical name:* ```color```

### Name of the analysis layer {#name}

Useful to differentiate the layer among others

*Technical name:* ```name```

### Number of direct assignments {#peopleCount}

The number of people who are directly assigned to this assignment layer in the building

*Technical name:* ```peopleCount```

### Number of direct manual assignments {#manualPeopleCount}

The number of people who are assigned directly to this assignment layer without considering assignments with real people

*Technical name:* ```manualPeopleCount```

### Numerical value {#value}

The value can be used to associate the layer with a numerical value in order to be able to carry out analytical statistics

*Technical name:* ```value```

### Total number of direct assignments {#totalPeopleCount}

The total number of people who are assigned directly to this assignment layer in the building, the addition of the actual people assigned and the number of people assigned manually

*Technical name:* ```totalPeopleCount```


## Associated entities (unique) {#properties-belongs-to}

### Layer type {#dimensionType}



*Technical name:* ```dimensionType```


## Associated entities (list) {#properties-has-many}

### Analysis layers by building {#dimensionBuildings}



*Technical name:* ```dimensionBuildings```

### Analysis layers per floor {#dimensionFloors}



*Technical name:* ```dimensionFloors```

### Assignments to Assignment Layers {#dimensionToPeople}



*Technical name:* ```dimensionToPeople```

### Reservations on the people assignment layer {#personToDimensionBookings}

Reservations on people assignment layers are recorded and available with the start and end dates of the reservation

*Technical name:* ```personToDimensionBookings```

### Space analysis layers {#dimensionRooms}



*Technical name:* ```dimensionRooms```




