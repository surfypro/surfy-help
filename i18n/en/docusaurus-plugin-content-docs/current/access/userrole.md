---
sidebar_position: 1
pagination_label: "User roles in Surfy"
title: "User roles in Surfy"
---

# User roles in Surfy

A user role allows you to give the appropriate rights to each user according to the desired profile.

User roles can be combined to assign the necessary rights to each user.

More information about [assigning a user role](/en/docs/access/intro#assign-a-user-role).

## Basic user roles

Basic user roles can be assigned to a user without any complementary user role.<br />
These roles are sufficient on their own but can be completed by any additional user role.

This is the case for the following user roles:

-   Company Administrator (`ADMIN-TENANT`)
-   Reader (`READ`)
-   Simplified Reader (`READLIGHT`)
-   Planning User (`PLANNING-USER`)

The basic user role Planning User (`PLANNING-USER`) can be added to another basic user role to access booking features.

### Company Administrator (`ADMIN-TENANT`)

This is the most complete basic user role.<br />
It allows managing the entire Surfy database: people, furniture, assignments, spaces, buildings, organizations, cost centers, etc...<br />
Only access to booking features and some technical features (calibrator, copy-paste basket, connections, ...) are not included in the Company Administrator (`ADMIN-TENANT`) role, and remain accessible by adding additional roles.

With this role, the user's home page shows the main buildings tile view with cumulative building information.<br />
The user can create, view, modify or delete the entire database and plans.<br />


### Reader (`READ`)

The Reader role allows consulting without modifying the entire Surfy database, only on main buildings (excluding scenarios).

With this role, the user's home page shows the main buildings view (excluding scenarios) with photos.<br />
The Reader can search and consult people, spaces (floors, buildings, campuses), assignments, organizations, analysis layers.  
They can also use display options on plans (text display, image export,...).

Creating, modifying or deleting data or plans is not allowed.

This user role serves as a base for adding additional roles to complete the features accessible to the user.

### Simplified Reader (`READLIGHT`)

With this role, the user's home page shows the main buildings view (excluding scenarios) with photos.<br />
The Simplified Reader role allows consulting the plans of main buildings (excluding scenarios), searching for people, spaces, furniture or assignments, but does not have quantitative data cards for spaces or furniture, nor analysis layer visualizations and vertical icons.
The default plan view is the space typology.

### Planning User (`PLANNING-USER`)

The Planning User role is a basic user role, but can be added to one of the three other basic user roles in order to open booking to the user.

 Used without another basic user role, it only allows access to workstation or parking space booking features, as well as consulting collaborator booking locations on plans.<br />
The home page then shows the booking planning view.<br />
Only plans related to bookings and the geolocation of collaborators who have booked are visible.<br />
No other data is accessible to the user.

Used in addition to another basic user role, it completes that role with the ability to access booking features.

This role is only effective on platforms that have subscribed to the booking option in Surfy.<br />
It is not included by default in the basic Company Administrator (`ADMIN-TENANT`) role.

More information about [booking a workstation](/en/docs/tutorials/booking/workstationbooking/workplace) and on [parking booking](/en/docs/tutorials/booking/parkingbooking/parkingresa).


## Additional user roles

It is necessary to assign a basic Reader (`READ`) role to the user before completing their access with an additional user role.<br />
Several additional user roles can be added to a user's Reader (`READ`) role.


For example, you can give the Reader (`READ`) role to a user as well as the Person Assignment (`AFFECTATIONS`) role allowing them to manage people and their assignments, without being able to modify other data (furniture, spaces, ...) which will only be read-only.

You can also add to the basic Company Administrator (`ADMIN-TENANT`) user role certain user roles that are not included in this role: Planning User (`PLANNING-USER`), Meeting room reader (`READ-MEETING-ROOM`), Planning Administrator (`ADMIN-PLANNING`), or technical user roles for example.

### Roles for people and their assignments

These roles are included by default in the basic Company Administrator (`ADMIN-TENANT`) user role

#### Person Assignment (`AFFECTATIONS`)

This role, added to the basic Reader (`READ`) user role, allows creating people, viewing the list of people entered in Surfy, assigning these people or removing their assignment to workstations, assignment districts or spaces.<br />
It allows creating a transfer matrix but does not allow importing it into Surfy to execute the assignment transfer.

This role does not allow deleting people from the database.

The home page shows the main buildings view (excluding scenarios) with photos. The main buildings tile view is accessible.<br />

More information about [assignments](/en/docs/tutorials/affectations/intro).

#### People Deletion (`SUPPERS`)

This role, added to the basic Reader (`READ`) user role, allows deleting people from the Surfy database. 

#### People List View (`VISU-PERS`)

This role, added to the basic Reader (`READ`) user role, allows listing, filtering and exporting to an Excel file the people present in the Surfy database, without being able to modify or delete them.

#### Transfer Matrix (`MOVE-MATRIX`)

This role, added to the basic Reader (`READ`) user role as well as the Person Assignment (`AFFECTATIONS`) role, allows importing transfer matrices in order to move a set of people from workstations to workstations, or from spaces to spaces.

More information about [using the transfer matrix](/en/docs/tutorials/affectations/workplaceaffectation/edit#use-the-transfer-matrix).

### Roles for spaces and plans

These roles are included by default in the basic Company Administrator (`ADMIN-TENANT`) user role

#### Plan Management (`GESTPLANS`)

This role, added to the basic Reader (`READ`) user role, allows activating "Plan editing" mode, modifying spaces, furniture, font sizes, text placement and information of spaces, workstations and objects.

Deleting spaces, objects or workstations as well as person assignment movements are not allowed in this role.

More information about [editing a space](/en/docs/tutorials/surfaces/room/edit).

#### Scenarios Reader (`SCEN`)

This role, added to the basic Reader (`READ`) user role, allows access to the buildings tile view with cumulative building information as well as to the scenarios of the different buildings, in Reader mode.

More information about [creating a scenario](/en/docs/tutorials/surfaces/building/create#create-scenario).

#### Meeting room reader (`READ-MEETING-ROOM`)

This role, added to a basic user role, allows consulting and geolocating meeting spaces with their equipment, by building, floor, space type and capacity.

More information about [consulting meeting rooms](/en/docs/tutorials/surfaces/meetingroom/read).

#### Info Display (`VISU-INFOS`)

This role, added to the basic Reader (`READ`) user role, allows displaying buildings as tiles on the platform home page.

More information about [the building information card](/en/docs/tutorials/BuildingData/Infocard).

#### Building List (`LISTBAT`)

This role, added to the basic Reader (`READ`) or Simplified Reader (`READLIGHT`) user role, allows listing, filtering and exporting to an Excel file all buildings accessible to the user and obtaining data reports in Excel files for all or part of the buildings.

If no content role is assigned to the user, all buildings, including scenarios, are listed and their data reports can be exported to Excel files.

More information about [searching in lists](/en/docs/courses/find/listfindcourse) and about [the content role](/en/docs/access/intro#content-role).

#### Space List (`LISTESPACE`)

This role, added to the basic Reader (`READ`) or Simplified Reader (`READLIGHT`) user role, allows listing, filtering and exporting to an Excel file all spaces of buildings accessible to the user.

If no content role is assigned to the user, the spaces of all buildings accessible to the user are listed.

More information about [searching in lists](/en/docs/courses/find/listfindcourse) and about [the content role](/en/docs/access/intro#content-role).

#### Building Modification (`BUILDMODIF`)

This role, added to the basic Reader (`READ`) or Simplified Reader (`READLIGHT`) user role, allows modifying the information of buildings accessible to the user and proposing by default the buildings tile view and the real estate assets view.

#### Space Qualification (`QUAL-PIECE`)

This role, added to the basic Reader (`READ`) user role, allows modifying space information (Typology, organization, cost center, analysis layers, ...) by space or by group of spaces.

More information about [qualifying a space](/en/docs/tutorials/surfaces/room/edit#qualify-a-space-or-modify-space-information).


### Roles for furniture

These roles are included by default in the basic Company Administrator (`ADMIN-TENANT`) user role

#### Furniture Creation (`CREAMOB`)

This role, added to the basic Reader (`READ`) user role, allows adding objects and workstations on plans, modifying their information, moving them and deleting them.

This role does not allow modifying or deleting spaces, nor creating or deleting person assignments.

More information about [creating a workstation](/en/docs/tutorials/objects/workplace/create) and on [creating an object](/en/docs/tutorials/objects/item/create).

#### Workstation Info Edit (`INFOS-PdT`)

This role, added to the basic Reader (`READ`) user role, allows modifying workstation information (workstation type, organization, cost center, workstation qualifications).
Moving, modifying assignment or deleting the workstation are not allowed in this role.

More information about [editing a workstation](/en/docs/tutorials/objects/workplace/edit).

### Roles for booking

These roles are not included by default in the basic Company Administrator (`ADMIN-TENANT`) user role

#### Planning User (`PLANNING-USER`)

The Planning User role is a basic user role, but can be added to one of the three other basic user roles in order to open booking to the user.

 Used without another basic user role, it only allows access to workstation or parking space booking features, as well as consulting collaborator booking locations on plans.<br />
The home page then shows the booking planning view.<br />
Only plans related to bookings and the geolocation of collaborators who have booked are visible.<br />
No other data is accessible to the user.

Used in addition to another basic user role, it completes that role with the ability to access booking features.

This role is only effective on platforms that have subscribed to the booking option in Surfy.<br />

More information about [booking a workstation](/en/docs/tutorials/booking/workstationbooking/workplace) and on [parking booking](/en/docs/tutorials/booking/parkingbooking/parkingresa).

#### Book on behalf of others (`RESTIERS`)

This role, added to the basic Planning User (`PLANNING-USER`) user role, allows booking on behalf of a collaborator, present in the database or to be created by the role user.<br />
This role is only effective on platforms that have subscribed to the booking option in Surfy.

More information about [booking on behalf of someone else](/en/docs/tutorials/booking/workstationbooking/thirdpartbooking).

#### External Guest Booking (`RESINVIT`)

This role, added to the basic Planning User (`PLANNING-USER`) user role, allows booking for a guest external to the company, temporarily created in the database.<br />
Guests are listed and can be deleted.<br />
This role is only effective on platforms that have subscribed to the booking option in Surfy.

More information about [booking for an external guest](/en/docs/tutorials/booking/workstationbooking/thirdpartbooking#book-for-an-external-guest).


#### Security Profiles Planning (`PLANSECU`)

This role, added to any basic user role, allows locating on plans Security team members who have booked a workstation, according to the booking date, building, booking district, Security profile type and floor.<br />
This role is only effective on platforms that have subscribed to the booking option in Surfy.

More information about [security profiles](/en/docs/tutorials/person/personSecurityProfile/create) and on [displaying security profiles on the plan](/en/docs/courses/views/2Dviews#display-security-profiles-on-plan).

#### Planning Administrator (`ADMIN-PLANNING`)

This role, added to any basic user role, allows listing people's workstation bookings and accessing the people's workstation booking dashboard to obtain charts linked to the use of booking features.

This role also allows viewing the monthly saturation of districts by building and identifying threshold exceedance days.<br />
This role is only effective on platforms that have subscribed to the booking option in Surfy.

More information about [the Planning Administrator](/en/docs/tutorials/booking/workstationbooking/admin).

### Roles for views and exports

These roles are included by default in the basic Company Administrator (`ADMIN-TENANT`) user role

#### Billing View (`VISIOFAC`)

This role, added to the basic Simplified Reader (`READLIGHT`) user role, allows direct and default access to the "Rebilling" view displaying cost centers in colors and text on plans.

It complements the Cost Allocation Keys (`CLE-REPART`) role which allows financial cost allocation on the building.

More information about [the "Rebilling" view](/en/docs/courses/views/planviews#rebilling-view).

#### Cost Allocation Keys (`CLE-REPART`)

This role allows access to the allocation key and surfaces qualified by cost center for buildings.<br />
It allows Excel file export, with or without common areas allocation.<br />
This role also allows viewing the detailed card of each accessible building, including the building's real estate information.<br />
It includes the buildings tile view.

More information about [space rebilling](/en/docs/tutorials/cost-distribution-by-cost-center/create).

#### Excel Reports (`RAPP`)

This role allows access to the dashboard and inventory of accessible buildings.<br />
It includes the buildings tile view.

More information about [data reports](/en/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting) and about [the building inventory report](/en/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting#building-inventory-report).


### Technical user roles

These roles are not included by default in the basic Company Administrator (`ADMIN-TENANT`) user role

#### Structures (`STRUCTURE`)

This role allows creating the peripheral dimensions of a floor in order to define its perimeter for better visualization of the 3D view of the floor or building.
The drawn structure provides a solid base to receive digitized spaces within a defined perimeter.

#### Calibrator (`CALIB`)

This role allows resizing all digitized spaces of a floor to the new plan background that does not have the dimensions of the original plan background.

Recalibrating spaces requires resetting the scale to adapt it to the new dimensions of the plan background.

More information about [creating the scale](/en/docs/tutorials/surfaces/mapscale/create).

#### Copy Paste Basket (`PAN`)

This role allows copy-pasting object types with their shape from one platform to another.
On request, the Catalog platform can be made available in addition to this role in order to import new object types into the user's platform.


#### SOC (`SOC`)



#### API (`API`)



#### IMPORT-PICTURE-MS (`Import Photo Microsoft`)



#### Z#bre Integration (`ZBRE`)



#### Talentsoft (`TALENTSOFT`)



#### API Districts Reader (`API-READ-TERRITORY`)
