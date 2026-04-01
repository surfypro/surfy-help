---
sidebar_position: 2
---
# Modify a District Assignment

The simplest way to modify a person's district assignment in Surfy is to delete their assignment to the district then create a new assignment, whether to a district or not.
To move a person from one district to another, see the chapters [Delete a District Assignment](/en/docs/tutorials/affectations/dimensiontoperson/delete) and [Create a District Assignment](/en/docs/tutorials/affectations/dimensiontoperson/create).

## Modify a person’s district assignment from the plan

To modify a person’s district assignment from the plan, you must be in the **"Neighbourhoods"** view, which groups spaces from the same district as single entities.

### Switch to Districts view

To switch to Districts view:

-   click on the vertical **"Change plan view"** icon
-   select the **"Neighbourhoods"** view

Surfy is now in district assignment mode: assignment layers are displayed on the plan and the layer type is selected for district navigation.

District information, assignments, and inventory are accessible like for a regular space: click the district, then use the **"Assignments"** and **"Inventory"** tabs above the district card.

### Modify a district assignment

-   click in the district to select it on the plan
-   click the **"Assignments"** tab to list district assignments
-   click the **"Trash"** icon next to the person to remove that person’s assignment

The person is removed from the district.
To assign the person to another district, see [Create a District Assignment](/en/docs/tutorials/affectations/dimensiontoperson/create).

## Modify district assignments from the person record

You can modify a person’s assignments by editing the person record without changing the plan view.

Use the search icon under the company logo to find a person in the Surfy database.

Clicking the name opens the person record with assignment information.

To modify this information:

-   click the context menu (grey box under the search icon) to **"edit person XXX"**
-   at the bottom of the page, click the **"Assignment layer assignments"** section

The person’s district assignments are available for creation, update, and deletion.

To create a new assignment:

-   click **"Create an assignment to an assignment layer"**
-   choose the analysis layer for the assignment
-   choose the assignment priority (see [Manage Booking District Priorities](/en/docs/tutorials/booking/workstationbooking/intro#manage-booking-district-priorities))
-   choose whether or not to include the assignment in occupancy data
-   validate each new assignment, which is added to the list

To delete an assignment, check the box at the start of the line, click the **"Trash"** icon to **"delete selected assignment layer assignments"**, then confirm.


## Bulk District Assignment Modification by Excel File

You can modify district assignments in bulk by changing assigned people in an Excel file to replace them with other people to assign to the district. This amounts to keeping the assignment identifier, but changing the assigned person's identifier:

### Creating the Excel File of District Assignments

You can create the Excel file containing assignments to modify in different ways:

-   By generating the "Report of people assigned in building XXX" file: 

    -   from the home page, click on the icon at the end of the color band of building XXX
    -   click on "Dashboard for building XXX"
    -   click on the icon of the line "Report of people assigned in building XXX" 
    -   the file is downloaded, the "AffecAuxCalquDAffec" tab contains the assignment layer assignments to modify

-   By generating the filtered list of assignments to modify:

    -   in the List menu on the left of the screen, click on "Assignments", "Assignment Layer Assignments" then "List Assignment Layer Assignments"
    -  filter the list according to layers and layer types using the "Filter Assignment Layer Assignments" icon, at the top right of the screen
    -  generate the Excel file of the obtained list, by clicking on the "Download Assignment Layer Assignments in Excel" icon at the top right of the screen
    -   the file is downloaded and contains the assignment layer assignments from the filtered list.


### Modifying Information in the Excel File

-   open the Excel file of assignments to modify
-   replace the name, first name and identifier of assigned people with the name, first name and identifier of people to assign.


### Import of Modified Excel File

Import preparation,

-   select the columns of the assignment identifier and the person identifier
-   copy the two columns with their header
-   paste the two columns in a new sheet of the Excel file to have two contiguous columns

-   click on "Assignments", "Assignment Layer Assignments" then "import assignment layer assignments"
-   paste the contiguous columns in the center box
-   click on "Compare", Surfy proposes the modifications to be made
-   click on "Create All", or check the desired boxes and click on "Create"
-   assignments have been modified

