---
sidebar_position: 3
pagination_label: "Delete a Workstation Assignment"
title: "Delete a Workstation Assignment"
---

# Delete a Workstation Assignment


## Manual Assignment Deletion in Surfy

To delete a workstation assignment in Surfy,

-   click on the workstation, the workstation card appears on the left of the plan
-   click on the "Trash" icon next to the name of person XXX to unassign: "Delete assignment to workstation XXX"
-   confirm the deletion
The person's assignment is deleted

:::tip Good to Know
Deleting a person's assignment does not delete the person. However, deleting a person deletes all their assignments!
:::

## Deletion by Filtered Assignment List

In the List menu on the left of the screen,

-   click on "Assignments", "Workstation Assignments" then "List Workstation Assignments"
-   filter the list according to desired criteria: building, floor, space, ... by the two first icons at the top right of the screen
-   Once the list is filtered, you can check each assignment to delete at the beginning of each line, then "delete selected workstation assignments" using the "trash" icon at the top of the page.


## Bulk Assignment Deletion by Excel File (feature not available)


### Excel File Creation

You can create the Excel file containing assignments to delete in different ways:

-   By generating the "Report of people assigned in building XXX" file: 
    -   from the home page, click on the icon at the end of the color band of building XXX
    -   click on "Dashboard for building XXX"
    -   click on the icon of the line "Report of people assigned in building XXX" 
    -   the file is downloaded, the "Workstation Assignments" tab contains the information to modify

-   By generating the filtered list of assignments to delete:

    -   in the List menu on the left of the screen, click on "Assignments", "Workstation Assignments" then "List Workstation Assignments"
    -   filter the list according to desired criteria: building, floor, space, ... by the two first icons at the top right of the screen
    -   generate the Excel file of the obtained list, by clicking on the "Download Workstation Assignments in Excel" icon at the top right of the screen
    -   the file is downloaded


### Processing Information in the Excel File

To delete an assignment, you must:

-   clear the "Surfy Identifier", "First Name" and "Last Name" cells (columns B, C, D) of the assignment line to delete.
-   Column A (assignment identifier) must remain unchanged.
-   the columns to import are A,B,C,D and must remain contiguous
-   copy these contiguous columns with "ctrl C".


### Importing the Modified Excel File

In the List menu on the left of the screen,

-   click on "Assignment", "Workstation Assignments" then "import workstation assignments"
-   paste the contiguous columns in the center box
-   click on "Compare", Surfy proposes the modifications to be made
-   click on "Create All", or check the desired boxes and click on "Create"
-   checked assignments are deleted


 