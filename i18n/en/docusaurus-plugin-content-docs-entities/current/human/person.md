# Nobody
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

These are the people entered into Surfy's database

<OH code="person"/>


## Basic properties {#properties-base}

### Badge number {#badge-number}

The person's badge number

*Technical name:* ```badgeNumber```
<PH code="person:badgeNumber"/>

### Cellphone {#cellphone}

The person's mobile phone

*Technical name:* ```cellphone```
<PH code="person:cellphone"/>

### Comment {#info}

Comment on the person allowing to keep additional or miscellaneous information

*Technical name:* ```info```
<PH code="person:info"/>

### Computer reference {#computer-reference}

The reference of the computer associated with this person

*Technical name:* ```computerReference```
<PH code="person:computerReference"/>

### E-mail {#email}

The person's email

*Technical name:* ```email```
<PH code="person:email"/>

### Entry date {#start-date}

The date the person joined the company

*Technical name:* ```startDate```
<PH code="person:startDate"/>

### First name {#firstname}

The first name of the person

*Technical name:* ```firstname```
<PH code="person:firstname"/>

### Full Name {#fullname}

The full name of the person making it easier to find

*Technical name:* ```fullname```
<PH code="person:fullname"/>

### Last name {#lastname}

Person's last name

*Technical name:* ```lastname```
<PH code="person:lastname"/>

### Locker number {#box-number}

The person's locker number

*Technical name:* ```boxNumber```
<PH code="person:boxNumber"/>

### Not Assignable {#not-affectable}

The person cannot be assigned to a workstation, space, building or assignment layer

*Technical name:* ```notAffectable```
<PH code="person:notAffectable"/>

### Phone {#telephone}

The person's landline phone

*Technical name:* ```telephone```
<PH code="person:telephone"/>

### Profile picture {#picture}

The photo of the person to have it in the trombinoscope or in research

*Technical name:* ```picture```
<PH code="person:picture"/>

### Registration {#registration-number}

The person's registration number

*Technical name:* ```registrationNumber```
<PH code="person:registrationNumber"/>

### Registration number {#code}

The person's HR number

*Technical name:* ```code```
<PH code="person:code"/>

### Release date {#end-date}

The person's exit date from the company

*Technical name:* ```endDate```
<PH code="person:endDate"/>

### RIE badge {#badge-restaurant}

The reference of the RIE or company restaurant badge

*Technical name:* ```badgeRestaurant```
<PH code="person:badgeRestaurant"/>

### Screen reference {#monitor-reference}

The reference of the computer screen associated with this person

*Technical name:* ```monitorReference```
<PH code="person:monitorReference"/>

### title {#title}

The title of the person

*Technical name:* ```title```
<PH code="person:title"/>


## Associated entities (unique) {#properties-belongs-to}

### Cost center {#cost-center}

The cost center allows spaces to be distributed dynamically for re-invoicing

*Technical name:* ```costCenter```
<PH code="person:costCenter"/>

### Gender of the person {#person-gender}

Allows you to count each gender, for example for managing toilets

*Technical name:* ```personGender```
<PH code="person:personGender"/>

### Security profile {#person-security-profile}

Allows to indicate the security profile of the person for security management

*Technical name:* ```personSecurityProfile```
<PH code="person:personSecurityProfile"/>

### Service provider company {#person-company}

The service provider company allows you to manage service provider personnel by company to which they belong

*Technical name:* ```personCompany```
<PH code="person:personCompany"/>

### Status {#person-state}

Allows you to indicate the type of contract the person has with the company

*Technical name:* ```personState```
<PH code="person:personState"/>

### The organization of the person {#organization}

The person's attachment service

*Technical name:* ```organization```
<PH code="person:organization"/>


## Associated entities (list) {#properties-has-many}

### Assignments to Assignment Layers {#dimension-to-people}

Allows you to assign a person to a district, territory or village

*Technical name:* ```dimensionToPeople```
<PH code="person:dimensionToPeople"/>

### Building assignments {#person-to-buildings}

Allows you to assign a person to a building, without additional information. The assignment can be counted, or not.

*Technical name:* ```personToBuildings```
<PH code="person:personToBuildings"/>

### Business users {#user-companies}

Enterprise users have access to their company's Surfy platform

*Technical name:* ```userCompanies```
<PH code="person:userCompanies"/>

### Object-to-person associations {#item-to-people}

Allows you to associate an object with a person (ergonomic seat, locker)

*Technical name:* ```itemToPeople```
<PH code="person:itemToPeople"/>

### People's work locations {#person-working-locations}

A workplace of people defines the workplace of people

*Technical name:* ```personWorkingLocations```
<PH code="person:personWorkingLocations"/>

### Relations with this person {#person-to-person-targets}

Allows you to know the ascending relationship between two people, for example the hierarchical relationship

*Technical name:* ```personToPersonTargets```
<PH code="person:personToPersonTargets"/>

### Relationships from this person {#person-to-person-sources}

Allows you to know the descending relationship between two people, for example the hierarchical relationship

*Technical name:* ```personToPersonSources```
<PH code="person:personToPersonSources"/>

### Reservations at people's workstations {#person-to-workplace-bookings}

People's workstation reservations are recorded and available with reservation start and end dates

*Technical name:* ```personToWorkplaceBookings```
<PH code="person:personToWorkplaceBookings"/>

### Reservations for the people area {#person-to-room-bookings}

Reservations for people's spaces are recorded and available with the reservation start and end dates

*Technical name:* ```personToRoomBookings```
<PH code="person:personToRoomBookings"/>

### Reservations on the people assignment layer {#person-to-dimension-bookings}

Reservations to people assignment layers are recorded and available with reservation start and end dates

*Technical name:* ```personToDimensionBookings```
<PH code="person:personToDimensionBookings"/>

### Space assignments {#room-affectations}

Allows you to assign a person to a single space

*Technical name:* ```roomAffectations```
<PH code="person:roomAffectations"/>

### Workstation assignments {#workplace-affectations}

Allows a fixed workstation to be assigned to a person

*Technical name:* ```workplaceAffectations```
<PH code="person:workplaceAffectations"/>




