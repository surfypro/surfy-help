# Workplace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Basic properties {#properties-base}

### Average assignment rate {#workplaceAffectationsCalculatedRateSum}

Average assignment rate of the workstation according to the assignment of the days of presence of the people

*Technical name:* ```workplaceAffectationsCalculatedRateSum```

### Comment {#comment}

Additional information about the workstation

*Technical name:* ```comment```

### Is bookable? {#isBookable}

If this workstation is reservable in a reservation system

*Technical name:* ```isBookable```

### Is flex? {#isFlex}

If this station is used in Flex mode

*Technical name:* ```isFlex```

### Is passing through? {#isTransit}

If this position is transient, this position will be excluded from free workstations without being reservable in flex, a transient position makes it possible to have a workstation available for all those who wish to use it without being included in a system of reservation

*Technical name:* ```isTransit```

### Is shared ? {#isShared}

If this workstation is shared by several people, this automatic field is validated as soon as there are at least 2 assignments on the workstation

*Technical name:* ```isShared```

### Number of assignments {#workplaceAffectationsCount}

Number of assignments on the workstation

*Technical name:* ```workplaceAffectationsCount```

### Position {#position}

The position of the workstation in space

*Technical name:* ```position```

### Rotation {#rotation}

The angle of rotation of the workstation in space

*Technical name:* ```rotation```

### Text Anchor {#textAnchor}



*Technical name:* ```textAnchor```

### Workstation name {#name}

The name of the workstation is used to identify it more simply

*Technical name:* ```name```


## Associated entities (unique) {#properties-belongs-to}

### Cost center {#costCenter}

The cost center allows you to distribute spaces dynamically for re-invoicing

*Technical name:* ```costCenter```

### Organization {#organization}



*Technical name:* ```organization```

### Type of workstation {#workplaceType}



*Technical name:* ```workplaceType```

### Workstation space {#room}



*Technical name:* ```room```


## Associated entities (list) {#properties-has-many}

### Objects {#items}



*Technical name:* ```items```

### Reservations at people's workstations {#personToWorkplaceBookings}

People's workstation reservations are recorded and available with the start and end dates of the reservation

*Technical name:* ```personToWorkplaceBookings```

### Workstation assignments {#workplaceAffectations}



*Technical name:* ```workplaceAffectations```




