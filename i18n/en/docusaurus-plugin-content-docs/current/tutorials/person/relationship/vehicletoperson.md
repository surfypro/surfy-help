---
sidebar_position: 3
---

# Vehicle to person association

You can create vehicles in Surfy in order to associate them with people.<br />
This feature helps optimize parking availability based on the vehicle and manage the vehicle fleet.

:::tip GOOD TO KNOW
A vehicle can be associated with several people, and a person can be associated with several vehicles.
:::

## Create a vehicle

To create a vehicle, from the left menu,

-   click on "Collaborators", "Vehicles", "Vehicles" then "Create a vehicle"
-   enter:
    -   the vehicle type (car, motorcycle, bicycle, ...),
    -   the propulsion type (internal combustion, hybrid, electric, ...),
    -   whether the vehicle belongs to the company fleet,
    -   the license plate optionally
-   validate creation.

## Vehicle to person association

Once the vehicle has been created, you can associate it with a person in Surfy.

To associate a vehicle with a person, from the left menu,

-   click on "Collaborators", "Vehicles", "Vehicle assignments" then "Create a vehicle assignment"
-   click on the pencil on the "Person" row to select the relevant person
-   click on the pencil on the "Vehicle" row to select the relevant vehicle
-   validate creation.

### List vehicle to person associations

To obtain the list of vehicle to person associations, from the left menu,

-   click on "Collaborators", "Vehicles", "Vehicle assignments" then "List vehicle assignments"
-   filter the list according to the desired criterion (see the chapter [search in lists](/en/docs/courses/find/listfindcourse))
-   modify or delete the rows selected by the filter.

You can export the resulting list to an Excel file by clicking on the "Download vehicle assignments in Excel" icon at the top right of the screen.

### Delete a vehicle to person association

From the list of vehicle to person associations,

-   filter the list according to an optional criterion (name, license plate)
-   check the box at the beginning of the row for associations to delete
-   click on the "Trash" icon at the top of the page to "Delete selected vehicle assignments"
-   confirm deletion

From the person's card,

-   click in the context menu (grey box in the left menu, below the search magnifying glass)
-   click on "Modify person XXX"
-   in the tabs at the bottom of the page, click on "Vehicle assignments"
-   check the vehicle(s) whose association with the person should be removed
-   click on the "Trash" icon at the top of the list to "delete selected vehicle assignments"

:::tip AT THIS STAGE
You can create a vehicle to person association from the person's card by clicking on "Create a vehicle assignment" to directly associate a vehicle with the person.
:::

## Export vehicle-related data

You can export the filtered list of vehicle to person associations to an Excel file.

From the left menu,

-   click on "Collaborators", "Vehicles", "Vehicle assignments" then "list vehicle assignments".
-   optionally filter the list using the icons at the top right of the screen (see [Search in lists](/en/docs/courses/find/listfindcourse))
-   export the list to an Excel file by clicking on the "Download vehicle assignments in Excel" icon at the top right of the screen.

## Bulk import via Excel file

You can import an Excel file of vehicle to person associations.

The elements to provide are:

-   the employee ID, email, or Surfy identifier of the person
-   the vehicle type, its propulsion type and license plate, or the Surfy identifier of the vehicle.

To import the data, from the left menu,

-   click on "Collaborators", "Vehicles", "Vehicle assignments" then "list vehicle assignments".
-   export the list to an Excel file by clicking on the "Download vehicle assignments in Excel" icon at the top right of the screen.

The downloaded file includes all column headers required for import into Surfy.

-   copy the correct column headers from the export file and paste them as headers in the correct columns of the file to import.

To be imported, the columns used must be adjacent.

-   copy only the filled columns and paste them into a new sheet in the Excel file to import.
-   select the entire new sheet with "ctrl A", copy with "ctrl C".

The data to import concerns vehicle assignments; the copy/paste content must be placed in the corresponding import window.

To access this window,

-   click on "Collaborators", "Vehicles", "Vehicle assignments" then "Import vehicle assignments"

-   in the Surfy vehicle assignment import window, paste the information with "ctrl V"
-   "compare" the file information with the Surfy database to detect vehicle assignments that will be created and those that will be modified.
-   create all vehicle assignments in Surfy by clicking on "Create all".
-   the vehicle assignments are imported into the Surfy database.
