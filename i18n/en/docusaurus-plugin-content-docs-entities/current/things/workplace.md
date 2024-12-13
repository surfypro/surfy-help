# Workplace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="workplace"/>


## Basic properties {#properties-base}

### Average assignment rate {#workplace-affectations-calculated-rate-sum}

Average assignment rate of the workstation according to the assignment of the days of presence of the people

*Technical name:* ```workplaceAffectationsCalculatedRateSum```
<PH code="workplace:workplaceAffectationsCalculatedRateSum"/>

### Comment {#comment}

Additional information about the workstation

*Technical name:* ```comment```
<PH code="workplace:comment"/>

### Is bookable? {#is-bookable}

If this workstation is reservable in a reservation system

*Technical name:* ```isBookable```
<PH code="workplace:isBookable"/>

### Is flex? {#is-flex}

If this station is used in Flex mode

*Technical name:* ```isFlex```
<PH code="workplace:isFlex"/>

### Is passing through? {#is-transit}

If this position is transient, this position will be excluded from free workstations without being reservable in flex, a transient position makes it possible to have a workstation available for all those who wish to use it without being included in a system of reservation

*Technical name:* ```isTransit```
<PH code="workplace:isTransit"/>

### Is shared ? {#is-shared}

If this workstation is shared by several people, this automatic field is validated as soon as there are at least 2 assignments on the workstation

*Technical name:* ```isShared```
<PH code="workplace:isShared"/>

### Number of assignments {#workplace-affectations-count}

Number of assignments on the workstation

*Technical name:* ```workplaceAffectationsCount```
<PH code="workplace:workplaceAffectationsCount"/>

### Position {#position}

The position of the workstation in space

*Technical name:* ```position```
<PH code="workplace:position"/>

### Rotation {#rotation}

The angle of rotation of the workstation in space

*Technical name:* ```rotation```
<PH code="workplace:rotation"/>

### Text Anchor {#text-anchor}



*Technical name:* ```textAnchor```
<PH code="workplace:textAnchor"/>

### Workstation name {#name}

The name of the workstation is used to identify it more simply

*Technical name:* ```name```
<PH code="workplace:name"/>


## Associated entities (unique) {#properties-belongs-to}

### Cost center {#cost-center}

The cost center allows spaces to be distributed dynamically for re-invoicing

*Technical name:* ```costCenter```
<PH code="workplace:costCenter"/>

### Organization {#organization}



*Technical name:* ```organization```
<PH code="workplace:organization"/>

### Type of workstation {#workplace-type}



*Technical name:* ```workplaceType```
<PH code="workplace:workplaceType"/>

### Workstation space {#room}



*Technical name:* ```room```
<PH code="workplace:room"/>


## Associated entities (list) {#properties-has-many}

### Objects {#items}



*Technical name:* ```items```
<PH code="workplace:items"/>

### Reservations at people's workstations {#person-to-workplace-bookings}

People's workstation reservations are recorded and available with reservation start and end dates

*Technical name:* ```personToWorkplaceBookings```
<PH code="workplace:personToWorkplaceBookings"/>

### Workstation assignments {#workplace-affectations}

Allows a fixed workstation to be assigned to a person

*Technical name:* ```workplaceAffectations```
<PH code="workplace:workplaceAffectations"/>




