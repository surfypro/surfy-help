# Cost center
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

The cost center allows spaces to be distributed dynamically for re-invoicing

<OH code="costCenter"/>




## Required Properties {#properties-mandatory}
    
### Name of cost center {#name}



*Technical name:* ```name```
<PH code="costCenter:name"/>

    


## Basic properties {#properties-base}
    
### Code {#code}



*Technical name:* ```code```
<PH code="costCenter:code"/>

### Color {#color}



*Technical name:* ```color```
<PH code="costCenter:color"/>

### Distribute by building {#distribute-by-building}

Prorate the space used by this cost center in the building to the other cost centers in the building

*Technical name:* ```distributeByBuilding```
<PH code="costCenter:distributeByBuilding"/>

### Distribute by floor {#distribute-by-floor}

Prorate the space used by this cost center on the floor to other cost centers on the same floor

*Technical name:* ```distributeByFloor```
<PH code="costCenter:distributeByFloor"/>

### Info {#info}



*Technical name:* ```info```
<PH code="costCenter:info"/>

    



## Associated entities (list) {#properties-has-many}

### Building cost centers {#cost-center-buildings}



*Technical name:* ```costCenterBuildings```
<PH code="costCenter:costCenterBuildings"/>

### Floor cost centers {#cost-center-floors}



*Technical name:* ```costCenterFloors```
<PH code="costCenter:costCenterFloors"/>

### People {#people}

These are the people entered into Surfy's database

*Technical name:* ```people```
<PH code="costCenter:people"/>

### Personal work places {#workplaces}



*Technical name:* ```workplaces```
<PH code="costCenter:workplaces"/>

### Spaces {#rooms}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```rooms```
<PH code="costCenter:rooms"/>




