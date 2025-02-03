# Organization
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Organizations have two hierarchical levels: departments and services, and help define the organizational structure of the company.

<OH code="organization"/>




## Required Properties {#properties-mandatory}
    
### Last name {#name}

Name that will define the organization

*Technical name:* ```name```
<PH code="organization:name"/>

    


## Basic properties {#properties-base}
    
### Code {#code}

This code can be used to contain the organization coding or the key for identification via third party software

*Technical name:* ```code```
<PH code="organization:code"/>

### Color {#color}



*Technical name:* ```color```
<PH code="organization:color"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Direction {#organization}

Organizations have two hierarchical levels: departments and services, and help define the organizational structure of the company.

*Technical name:* ```organization```
<PH code="organization:organization"/>


## Associated entities (list) {#properties-has-many}

### Building organizations {#organization-buildings}



*Technical name:* ```organizationBuildings```
<PH code="organization:organizationBuildings"/>

### Floor organization {#organization-floors}



*Technical name:* ```organizationFloors```
<PH code="organization:organizationFloors"/>

### People {#people}

These are the people entered into Surfy's database

*Technical name:* ```people```
<PH code="organization:people"/>

### Personal work places {#workplaces}



*Technical name:* ```workplaces```
<PH code="organization:workplaces"/>

### Services {#organizations}

Organizations have two hierarchical levels: departments and services, and help define the organizational structure of the company.

*Technical name:* ```organizations```
<PH code="organization:organizations"/>

### Spaces {#rooms}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```rooms```
<PH code="organization:rooms"/>




