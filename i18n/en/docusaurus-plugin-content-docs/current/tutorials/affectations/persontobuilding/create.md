---
sidebar_position: 1
---
# Create a Building Assignment

Building assignment allows you to pre-select people by assigning them a building before giving them a more specific assignment, for example in the case of multi-site management.
The building assignment can be counted in the building's assignment count, or not.

Building assignment can also allow booking on all bookable workstations of the building (with the required configuration). See [Book a workstation](/en/docs/tutorials/booking/workstationbooking/workplace).

## Assign a person to a building from the person record

You can update a person’s assignments by editing the person record.

Use the search icon under the company logo to search for a person in the Surfy database.

Clicking the name opens the person record, including assignment information.

To edit this information:

- click the context menu (grey box under the search icon) to **"edit person XXX"**
- at the bottom of the page, click the **"Building assignments"** section

To create a new building assignment:

- click **"Create a building assignment"**
- choose the building for the assignment
- choose whether or not to include the assignment in occupancy data
- choose whether or not to allow booking across the whole building
- choose whether or not to allow parking booking on this building
- validate creation (each assignment is added to the list)

If the person is not yet created in the Surfy database, you can **"Create and associate"** the person with the building:

- click **"Create and associate"**
- fill in the person record
- validate the person creation

The person is created and assigned to the corresponding building.


## Assign a person to a building

To assign a person to a building, from the home page,

-   click on "Assignments", "Building Assignments", then "Create a building assignment".
-   search for the <P code="personToBuilding:person" /> to assign by clicking on the "pencil" of the "Person"
-   search for the <P code="personToBuilding:building" /> assignment by clicking on the "pencil" of the "Building"
-   choose whether or not to include the assignment in occupancy data
-   choose whether or not to allow booking across the whole building
-   choose whether or not to allow parking booking on this building
-   validate the creation

The person is assigned to the building.

:::tip Good to know
From the home page and for updating building information, it is necessary to "reload visible data" by clicking on the icon at the top right of the screen. Once the data is recalculated, refresh with the rotating arrow at the top left of the screen, or by F5 to get the correct information on the building sheet.
:::

## Create and assign a person to the building

If the person to be assigned to the building is not yet created in the Surfy database, they can be created and assigned in one move:

-   click on "Assignments", "Building Assignments", then "Create a building assignment".
-   search for the <P code="personToBuilding:person" /> to assign by clicking on the "pencil" of the "Person"
-   if the person does not exist in Surfy, click on "create and associate a person"
-   fill in the person creation information and "validate the creation" of the person
-   search for the <P code="personToBuilding:building" /> assignment by clicking on the "pencil" of the "Building"
-   choose whether or not to include the assignment in occupancy data
-   choose whether or not to allow booking across the whole building
-   choose whether or not to allow parking booking on this building
-   validate the creation

The person is created and assigned to the building.

## Assign people to the building by Excel import

-   click on "Assignments", "Building Assignments", then "Import building assignments".
-   compose the import template by clicking on the "View help on data import for building assignments" icon at the top right of the screen
-   fill in the Excel import file: person identification, building identification.
-   import the necessary columns by copying and pasting into the box provided for this purpose
-   "Compare" then "Create" the listed building assignments.

The building assignments are created.