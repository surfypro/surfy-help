# Building
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

The building is used to group the floors

## Basic properties {#properties-base}

### Address {#address}

The address of the building to locate it on the map

*Technical name:* ```address```

### Amount of annual fees {#yearly-tax-fees}

Total amount of taxes

*Technical name:* ```yearlyTaxFees```

### Annual charges {#yearly-condominium-fees}

Amount of annual management or co-ownership charges, for example

*Technical name:* ```yearlyCondominiumFees```

### Annual operating expenses {#yearly-exploitation-fees}

Annual amount of operating expenses (example: water, electricity)

*Technical name:* ```yearlyExploitationFees```

### Annual rent {#yearly-rent}

Annual rent amount for this building

*Technical name:* ```yearlyRent```

### Annual rent for car parks {#yearly-parking-rent}

Share of rent allocated to parking

*Technical name:* ```yearlyParkingRent```

### Building purchase date {#purchase-date}

Building purchase date

*Technical name:* ```purchaseDate```

### Bulking rate {#expansion-ratio}

Allows to know the rate of use of workstations, it is the inverse of the number of people affected divided by the number of workstations

*Technical name:* ```expansionRatio```

### Carbon footprint {#carbon-footprint}

The carbon footprint is the number of CO2 emitted

*Technical name:* ```carbonFootprint```

### Color {#color}

The color of the building is used to define the background color in the presentations of the floors or the building and to be able to distinguish this building from the others

*Technical name:* ```color```

### End date of the lease {#lease-end-date}

End date of the lease

*Technical name:* ```leaseEndDate```

### Lease start date {#lease-start-date}

Lease start date

*Technical name:* ```leaseStartDate```

### Name of Building {#name}

Name of building or scenario

*Technical name:* ```name```

### Number of assignments {#people-count}

The number of people assigned to the building, neighborhoods, spaces or workstations

*Technical name:* ```peopleCount```

### Number of flex positions {#flex-workplaces-count}

Number of flex workstations in the building

*Technical name:* ```flexWorkplacesCount```

### Number of layer assignments {#dimension-people-count}

The number of people who are assigned to the assignment layers associated with this building

*Technical name:* ```dimensionPeopleCount```

### Number of parking spaces {#parking-space-count}

Number of parking spaces available

*Technical name:* ```parkingSpaceCount```

### Number of seats {#seats-count}

The total number of seats

*Technical name:* ```seatsCount```

### Number of shared workstations {#shared-workplaces-count}

Number of workstations shared in the building by at least 2 people

*Technical name:* ```sharedWorkplacesCount```

### Number of spaces {#rooms-count}

The number of spaces created in this building

*Technical name:* ```roomsCount```

### Number of transit workstations {#transit-workplaces-count}

Number of temporary workstations, these positions are not counted in free positions and are not flex

*Technical name:* ```transitWorkplacesCount```

### Number of vacancies {#free-workplaces-count}

Number of free positions in the building

*Technical name:* ```freeWorkplacesCount```

### Number of workstations {#workplaces-count}

The number of workstations in the building is calculated automatically

*Technical name:* ```workplacesCount```

### Occupancy rate {#occupancy-rate}

Allows you to know the occupancy rate of workstations, it is the number of people assigned divided by the number of workstations

*Technical name:* ```occupancyRate```

### Occupancy ratio {#people-ratio}

The occupancy ratio is the number of square meters in the building divided by the number of people assigned either directly to the neighborhoods, spaces, or workstations, this value is calculated

*Technical name:* ```peopleRatio```

### Photo of the building {#picture}

You can use a photo of your building to quickly find it from the home page (see buildings with photos) or to illustrate collaborators' views

*Technical name:* ```picture```

### Qualified surface {#rooms-area}

The qualified surface represents all of the areas modeled in Surfy

*Technical name:* ```roomsArea```

### Rate of flex workstations {#flex-ratio}

The flex workstation rate is calculated by dividing the number of flex workstations by the total number of workstations

*Technical name:* ```flexRatio```

### Rate of seats per workstation {#total-capacity-workplace-count-ratio}

The rate of places per workstation is the total capacity of the spaces divided by the number of workstations, this allows us to understand the rate of places according to the number of workstations

*Technical name:* ```totalCapacityWorkplaceCountRatio```

### Rate of shared workstations {#shared-workplaces-ratio}

Rate of workstations shared by at least 2 people compared to all workstations in the building

*Technical name:* ```sharedWorkplacesRatio```

### Regulatory capacity {#regulatory-capacity}

The regulatory capacity of the platform, makes it possible to manage the evacuation of the public and employees

*Technical name:* ```regulatoryCapacity```

### Related documents {#documents}

Maintain a link to the location of documents associated with this building in your GED

*Technical name:* ```documents```

### Rent benchmark {#rent-reference-index}

The Rent Reference Index (RRI) is used as the basis for revising the rents for empty or furnished dwellings

*Technical name:* ```rentReferenceIndex```

### Seating rate by assignment {#seats-people-ratio}

The number of seats per person affected

*Technical name:* ```seatsPeopleRatio```

### Security deposit {#security-deposit}

Amount of the deposit deposited upon signing the lease

*Technical name:* ```securityDeposit```

### Surface {#surface}



*Technical name:* ```surface```

### Total capacity {#total-capacity-count}

The total seat capacity is the sum of the number of seats and the non-seated capacity at the space level.

*Technical name:* ```totalCapacityCount```

### Total number of assignments {#total-people-count}

The total number of people assigned, either directly assigned to spaces or through a workstation

*Technical name:* ```totalPeopleCount```

### Workstation ratio {#workplaces-ratio}

The ratio per workstation is the number of square meters in the building divided by the number of workstations, this value is calculated automatically

*Technical name:* ```workplacesRatio```

### Year of construction of the building {#construction-year}

Year of construction of the building allowing its obsolescence to be measured

*Technical name:* ```constructionYear```


## Associated entities (unique) {#properties-belongs-to}

### Building owner user {#user-company-owner}

The user who owns the building always sees the building even in the presence of a content role, in the event of a scenario creation, the user who created the scenario becomes the owner, the owner can be changed later

*Technical name:* ```userCompanyOwner```

### Campus {#campus}

The campus is used to group buildings that are in the same location.

*Technical name:* ```campus```

### Original building {#building}

The original or reference building is used in the creation of scenarios, it allows you to identify the original building from which the building was created

*Technical name:* ```building```

### Type of building {#building-type}



*Technical name:* ```buildingType```

### Vision of the default plan {#jup-ui-layout}

When a plan of this building is first opened, the default vision will be selected, following the first opening, it will be the current vision which will be applied

*Technical name:* ```jupUiLayout```


## Associated entities (list) {#properties-has-many}

### Analysis layers by building {#dimension-buildings}



*Technical name:* ```dimensionBuildings```

### Building assignment layers {#dimension-type-to-buildings}



*Technical name:* ```dimensionTypeToBuildings```

### Building assignments {#person-to-buildings}



*Technical name:* ```personToBuildings```

### Building cost centers {#cost-center-buildings}



*Technical name:* ```costCenterBuildings```

### Building organizations {#organization-buildings}



*Technical name:* ```organizationBuildings```

### Building space typologies {#room-type-buildings}



*Technical name:* ```roomTypeBuildings```

### Buildings scenarios {#buildings}

Scenarios generated from this building

*Technical name:* ```buildings```

### Facts {#facts}



*Technical name:* ```facts```

### Floors {#floors}



*Technical name:* ```floors```

### Groups of building space typologies {#room-type-group-buildings}



*Technical name:* ```roomTypeGroupBuildings```

### Role associations of content to buildings {#content-role-to-buildings}



*Technical name:* ```contentRoleToBuildings```




