# Type of provider space
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

The types of spaces of the service providers make it possible to define a relationship between a type of space and the service provider and to define a mission.

<OH code="personCompanyToRoomType"/>


## Basic properties {#properties-base}



## Associated entities (unique) {#properties-belongs-to}

### Mission of the service provider {#person-company-mission}

The missions of the service providers make it possible to know the area of ​​intervention of the service providers

*Technical name:* ```personCompanyMission```
<PH code="personCompanyToRoomType:personCompanyMission"/>

### Service provider company {#person-company}

The service provider company makes it possible to keep information about the company of a service provider to know, for example, the number of positions or the space occupied by the latter, or to know what types of equipment or type of spaces are available. he is in management

*Technical name:* ```personCompany```
<PH code="personCompanyToRoomType:personCompany"/>

### Space typology {#room-type}



*Technical name:* ```roomType```
<PH code="personCompanyToRoomType:roomType"/>





