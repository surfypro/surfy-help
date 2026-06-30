---
search_rank: 0.5
sidebar_key: company
sidebar_label: "Business"
---

# Business
<ObjectTypeMenuBreadcrumb code="company" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A business represents an organization or company that uses the Surfy platform to manage its workspaces and resources

<OH code="company"/>




## Required Properties {#properties-mandatory}
    
### Company Name {#name}

Company Name

*Technical name:* ```name```
<PH code="company:name"/>

    


## Basic properties {#properties-base}
    
### Allow Surfy to track user activity to improve the user experience {#track-user-activity}

Allow Surfy to track user activity to improve the user experience

*Technical name:* ```trackUserActivity```
<PH code="company:trackUserActivity"/>

### Claim code JWT {#jwt-claim-code}

Expected value in the JWT token to associate the user with this company when the authentication rule uses a custom claim

*Technical name:* ```jwtClaimCode```
<PH code="company:jwtClaimCode"/>

### Create a calendar invitation for each reservation {#workplace-booking-agenda-sync-enabled}

For each workstation or parking reservation, an invitation is sent to the employee's calendar (Outlook, Gmail, etc.); the invitation is removed in case of cancellation.

*Technical name:* ```workplaceBookingAgendaSyncEnabled```
<PH code="company:workplaceBookingAgendaSyncEnabled"/>

### Display name {#pretty-name}

Company name displayed in the interface, in addition to the technical identifier (name)

*Technical name:* ```prettyName```
<PH code="company:prettyName"/>

### Enable booking by building when all dimensions are overloaded {#enable-building-booking-when-all-dimensions-are-crowded}

Enables direct booking by building and floor when all dimensions are overloaded, providing an alternative booking option when no areas are available

*Technical name:* ```enableBuildingBookingWhenAllDimensionsAreCrowded```
<PH code="company:enableBuildingBookingWhenAllDimensionsAreCrowded"/>

### Enable dimension override for booking {#enable-crowded-dimension-for-booking}

Enables the dimension overload feature for reservations, allowing occupancy thresholds to be set beyond which a space is considered overloaded and enables priority over territories assignments

*Technical name:* ```enableCrowdedDimensionForBooking```
<PH code="company:enableCrowdedDimensionForBooking"/>

### Enable pathfinding {#enable-pathfinding}

Enable path finding functionality

*Technical name:* ```enablePathfinding```
<PH code="company:enablePathfinding"/>

### Icon {#icon-path}

The company logo in square

*Technical name:* ```iconPath```
<PH code="company:iconPath"/>

### Logo {#logo-path}

The path of your company's logo

*Technical name:* ```logoPath```
<PH code="company:logoPath"/>

### Number of planning days {#planning-number-of-days}

Number of days for planning

*Technical name:* ```planningNumberOfDays```
<PH code="company:planningNumberOfDays"/>

### Number of working days per week {#working-days-count}

The number of working days per week can be 5 for working days, 6 including Saturday and 7 including Sunday

*Technical name:* ```workingDaysCount```
<PH code="company:workingDaysCount"/>

### Proxy images {#proxy-images}

Enable proxy for images

*Technical name:* ```proxyImages```
<PH code="company:proxyImages"/>

### Workstation booking confirmation window {#workplace-booking-confirmation-range}

Time range during which users can confirm their workstation reservations. Required format: HH:MM-HH:MM@IANA Timezone (e.g., 06:00-10:30@Europe/Paris). Leave this field blank to disable workstation reservation confirmation. IANA Timezone: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

*Technical name:* ```workplaceBookingConfirmationRange```
<PH code="company:workplaceBookingConfirmationRange"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Type of company {#company-type}

A business type allows businesses to be categorized according to their use

*Technical name:* ```companyType```
<PH code="company:companyType"/>


## Associated entities (list) {#properties-has-many}

### Buildings {#buildings}

The building is used to group the floors

*Technical name:* ```buildings```
<PH code="company:buildings"/>

### Business users {#user-companies}

Enterprise users have access to their company's Surfy platform

*Technical name:* ```userCompanies```
<PH code="company:userCompanies"/>

### Company work locations {#company-working-locations}

A company work location allows a company to customize people's work locations for booking

*Technical name:* ```companyWorkingLocations```
<PH code="company:companyWorkingLocations"/>

### Types of buildings {#building-types}

A building type allows buildings to be categorized according to their use

*Technical name:* ```buildingTypes```
<PH code="company:buildingTypes"/>




