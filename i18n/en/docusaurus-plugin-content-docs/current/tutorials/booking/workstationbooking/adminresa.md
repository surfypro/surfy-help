---
sidebar_position: 2
---

# Manage district booking in Surfy

This page summarizes the actions the booking administrator must take to ensure a smooth experience for users.

:::tip GLOSSARY
- **Collaborator** : person entered in the Surfy database (first and last name at minimum, email address strongly recommended).
- **User** : person connecting to Surfy via their Office 365 account, or other, to use the booking tool.
- **Booking district** : territory represented by an assignment layer.
:::

## Manage booking access

### Booking prerequisites

To be able to book, the booking user must:

**Be a collaborator present in the Surfy database, with their email address.**

-   If the collaborator was already created with their email address before logging in, they are recognized when logging in and matched with the user.
-   If the collaborator does not exist in the database or does not have an email address in Surfy, they will be created with their email address when the user connects to the Surfy platform.
-   The email address is the matching point between user and collaborator. No booking can be made without the person's email address.

**Be a collaborator assigned to one or more booking districts or to a building.**

-   Assignment of a collaborator to a booking district or building is granted in Surfy by the administrator, manually or by bulk import.
-   Assignment to a district or building can be created before the user logs in for a smooth, direct experience. To do this, the collaborator must already be created with their email address before logging in as a user.

**Have the appropriate user roles:**

-   The "Reader" role allows viewing plans in read-only mode.
-   The "Planning User" role allows using booking tools.
-   The "Meeting room reader" role allows access to meeting room search and location.

**Have a content role compatible with the assignment district:**

-   They must be able to view the building where they are assigned.
-   If no content role is assigned to them, the user will have access to all buildings on the company's Surfy platform.

The booking user can then book by following the [Teams booking user guide](/en/docs/tutorials/booking/workstationbooking/teams).

### Booking administrator actions

All collaborators with a company domain email address are potential booking users and can automatically connect to Surfy via their Office 365 account and automatic authentication.

Several cases require administrator intervention:

#### Collaborators not entered in the Surfy database

When the user logs in, a collaborator is created with their email address from their Office 365 account.<br />
This newly created collaborator has no assignment for booking.<br />
It is necessary to detect these collaborators and assign them to a district or building so they can book (usually a request raised by the person or department).

#### Collaborators entered in Surfy with assignment but without email address

Some collaborators may be entered in Surfy without their email address (from badge creation, for example).<br />
When the user logs in, a new collaborator with the same name is created with their email address from their Office 365 account.<br />
It is necessary to resolve the duplicate collaborators in order to merge the two people with the same name along with any assignments of the previously entered collaborator, to create a single complete collaborator who can book.

#### Collaborators entered in Surfy with email address but without assignment

When the user logs in, they will be recognized but will not be able to book until the associated collaborator is assigned to a district.<br />
It is necessary to assign the collaborator to a district or building.

#### Collaborators entered in Surfy without email address and without assignment

When the user logs in, a new collaborator is created with their email address from their Office 365 account.<br />
It is necessary to resolve the duplicate collaborators in order to merge the two people with the same name to obtain a single collaborator.<br />
It is necessary to assign the collaborator to a district or building so the user can book.

#### Collaborators entered in Surfy with email address and assignment

When the user logs in, they will have direct access to booking in their designated highest-priority non-saturated district, or across their entire building. No administrator intervention is required.

#### Manage booking priority across districts

Depending on the configuration, when their district's saturation rate is reached, users can book in lower-priority districts or on any floor of the building, except in excluded districts (see [Manage priority on district assignments](#manage-priority-on-district-assignments)).

## Booking administrator action methods

### Check and resolve duplicates

Some collaborators may be entered in Surfy and possibly assigned to districts, without their email address being filled in.<br />
However, providing an email address is essential to match the collaborator with the user so the user can book.<br />
When this user accesses the platform via their Office 365 account, a new collaborator with the same name is created with their email address filled in, generating a duplicate collaborator.<br />
The information from both records must then be merged onto a single collaborator. To do this, it is recommended to use duplicate management:

-   from the left menu, click on "Collaborators", "People", "Reports and data quality actions for people", then "Duplicate people".
-   some duplicates may be due to collaborators with identical first and last names on the platform, but with different email addresses. These collaborators should not be deduplicated.
-   for collaborators to deduplicate, open the duplicate and select one of the two records, then click on missing information present on the other record to add it to the merge.
-   merge the duplicate to keep only the sum of correct information on a single collaborator (email, assignments, bookings, ...).

Duplicate management can also be useful in case of errors in spelling or case of names or first names, employee ID, or email address.

### Users without assignment

Users connecting to Surfy have an associated collaborator who is not necessarily assigned to a district.<br />
In this case, the user will not be able to book a workstation.

#### Check the collaborator's assignment

-   to check whether a collaborator is assigned to a booking district or building, type their name in the search magnifying glass.
-   the collaborator's assignments appear under their name.
-   if no assignment is in effect or known, find out the collaborator's district or building assignment so the user can book.

#### Assign a collaborator to a known booking district or building

-   type the collaborator's name in the search magnifying glass.
-   the collaborator's assignments appear under their name.
-   if the assignment is known but not shown, click on the collaborator's name to open their record.
-   click on the context menu (grey box below the search magnifying glass) to "modify person XXX".

**District assignment:**

-   at the bottom of the page, under the collaborator's information, click on "Assignment layer assignments" then "Create an assignment layer assignment".
-   click on the "Pencil" icon for "Analysis layer" to choose the assignment district.
-   set the "Priority" level, with "0" being the highest priority.
-   check/uncheck the assignment counting option as appropriate.
-   validate creation.
-   the assignment district is added to the list of any districts already assigned to the collaborator.

**Building assignment:**

-   at the bottom of the page, under the collaborator's information, click on "Building assignments" then "Create a building assignment".
-   click on the "Pencil" icon for "Building" to choose the assignment building.
-   check/uncheck the counting option.
-   check "Allow workstation booking in the building via floors".
-   check "Allow parking booking in the building" if parking booking in Surfy is operational.
-   validate creation.
-   the assignment building is added to the list of any buildings already assigned to the collaborator.

### Manage priority on district assignments

Access to districts for booking can be managed by priority for each collaborator assignment to a district.<br />
For good management of booking district priorities, it is recommended to assign collaborators to their home district with priority 0 (highest priority).<br />
Lower-priority districts should be set to priority 1, then 2, ...<br />
If all of a collaborator's district(s) are saturated, building-wide bookings can be opened, with a choice by floor. Only districts excluded when saturated are inaccessible for booking.

-   set the assignment priority. By default, priority 0 grants the user access to booking in the corresponding district. A higher priority number will only grant the user access to the corresponding district if all their lower-numbered booking districts in the building are saturated.
-   validate creation. The validated district appears in the list below the creation window.
-   if several districts must be assigned to a collaborator, click again on the "pencil" icon for the "analysis layer", choose the district and priority and validate creation. The district is added to the list below the creation window.
-   check assignments by typing the collaborator's name in the search magnifying glass. Their highest-priority assignments appear under their name.

### Automatic authentication for company domain users

All users with a company domain email address or a specific domain who use their Office 365 account via Teams or web browser can access the platform, for example in "Reader" + "Planning User" + "Meeting room reader" mode for buildings open to booking via the automatic authentication procedure. Automatic authentication rules are configurable.<br />
Users with a company domain email address are therefore directly set up for booking, provided their associated collaborator is assigned to at least one booking district or building.

Users with a company domain email address whose email addresses and booking districts have been entered in Surfy can book directly as soon as they connect to Surfy, without administrator intervention.

### Enable access for users outside the company domain

Users who do not have a company domain email address or a specific domain do not benefit from automatic authentication.<br />
To connect to Surfy, they must request access by following the [Office 365 first connection procedure](/en/docs/access/office365), then submit the form at step 5) of the procedure or notify the internal Surfy administrator of their pending access request.

Upon receiving the request, the Surfy administrator must:

-   from the left menu, click on "Administration", "Security", "Company users" then "Create a company user".
-   click on the "pencil" icon for "User".
-   type the full email address of the user to add in the search and select the future user's name. If their name does not appear, the user's request was not completed correctly and must be repeated.
-   validate creation.
-   once validated, the record offers "security associations for the company user".

For the user to access Surfy, they must be given a user role, for example "Reader", "Planning User" and "Meeting room reader".<br />
A content role can be given to the user, limiting access to only the buildings included in the content role.<br />
If no content role is given, the user will see all buildings on the platform, including any scenarios.

See the chapter [Assign a user role](/en/docs/access/intro#assign-a-user-role) to assign roles.

**To assign a role to the user:**

-   click on "Company user roles" then on "Create a company user role".
-   click on the "pencil" icon for "Role" to choose the desired role (in this case "Reader" and "Planning User", add "Planning Administrator" for the internal Surfy administrator or "Book on behalf of others" for assistants). User roles are pre-programmed and can only be modified by the Surfy team.
-   validate creation, the validated role appears in the list below the creation window.
-   if several roles must be assigned, click again on the "pencil" icon for "Role" and choose the new role then validate creation. Roles are added to the list below the creation window.

**To give a content role:**

-   click on "Company user content roles" then on "Create a company user content role".
-   click on the "pencil" icon for "content role".
-   select the appropriate content role. Content roles are pre-programmed and can be modified or added by the internal Surfy administrator.
-   validate creation, the validated content role appears in the list below the creation window.

To verify each person's roles, from the left menu, click on "Administration", "Security", "Company users" then "List company users".<br />
You can then filter the list to search for a user and verify their rights.

As with any user, for a user without a company domain email address to book, it is necessary to assign the collaborator to a district (see [Assign a collaborator to a known booking district or building](#assign-a-collaborator-to-a-known-booking-district-or-building)) and verify that the collaborator's email address matches the user's email address.

## For reference

### Change a district's saturation rate

Each district's saturation rate defines at what fill rate of the district concerned lower-priority districts or the building open for booking.

To change this rate, from the left menu,

-   click on "Administration", "Analysis layers", "Analysis layers" then "List analysis layers".
-   click on the icon at the beginning of the row of the layer to modify to "modify analysis layer XXX".
-   change the "overload rate for booking" (between 0.1 i.e. 10% and 1 i.e. 100%, or even 1.2 i.e. 120% if district saturation should not grant access to other districts).
-   save the modification.

### Exclude a district when saturated

A district can be excluded from opening for booking when another district is saturated. This allows the excluded district to only have collaborators assigned to the district for booking, without additional bookings due to saturation of another district in the building.

To designate a district as "excluded from booking when saturated", from the left menu,

-   click on "Administration", "Analysis layers", "Analysis layers" then "List analysis layers".
-   click on the icon at the beginning of the row of the layer (district) to exclude to "Modify analysis layer XXX".
-   check the "Workplaces bookable only via dimension" box.
-   save the modification.

### The "Planning Administrator" user role

This role provides access to statistics and lists of bookings made by users.

See the chapter [Planning Administrator](/en/docs/tutorials/booking/workstationbooking/admin).
