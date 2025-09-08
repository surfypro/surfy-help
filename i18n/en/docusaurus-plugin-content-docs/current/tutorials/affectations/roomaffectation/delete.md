---
sidebar_position: 3
---

# Delete a Space Assignment

## Individual Assignment Deletion

To delete a person's assignment to a space,

-   click on the space, the space card is displayed on the left of the plan
-   click on the "Assignments" tab to display the assignments present in the space
-   click on the "Trash" icon in front of the name of person XXX to unassign: "Delete assignment to space XXX"
-   confirm the deletion
The person's assignment is deleted

:::tip Good to Know
Deleting a person's assignment does not delete the person. However, deleting a person deletes all their assignments!
:::

## Deletion by Filtered Assignment List:

In the List menu on the left of the screen,

-   click on "Assignments", "Space Assignments" then "List Space Assignments"
-   filter the list according to desired criteria: building, floor, space, ... by the first two icons at the top right of the screen: "Select Properties" and "Filter Assignments"
-   Once the list is filtered, you can check each assignment to delete at the beginning of each line, then "delete selected space assignments" by the "trash" icon at the top of the page.


## Bulk Assignment Deletion by Excel File

You can delete assignments in bulk by changing the assigned people to replace them with a person created to be subsequently deleted:
-   create a person whose last name and first name are "DELETE"
-   export the Excel file of assignments to delete
-   replace the name, first name and identifier of assigned people with the name, first name and identifier of the "DELETE" person
-   import the assignments file
-   delete the "DELETE" person

Since the person is deleted, all their assignments are deleted.

### Excel File Creation

You can create the Excel file containing the assignments to delete in different ways:

-   By generating the "Report of people assigned in building XXX" file: 

    -   from the home page, click on the icon at the end of building XXX's color band
    -   click on "Dashboard for building XXX"
    -   click on the icon of the line "Report of people assigned in building XXX" 
    -   the file is downloaded, the "Space Assignments" tab contains the information to modify

-   By generating the filtered list of assignments to delete:

    -   in the List menu on the left of the screen, click on "Assignments", "Space Assignments" then "List Space Assignments"
    -   filter the list according to desired criteria: building, floor, space, ... by the first two icons at the top right of the screen
    -   generate the Excel file of the obtained list, by clicking on the "Download space assignments to Excel" icon at the top right of the screen
    -   the file is downloaded and contains the space assignments of the filtered list.


### Processing Information in the Excel File

In the Excel file, for each assignment line to delete, replace the name, first name and identifier of assigned people with the name, first name and identifier of the "DELETE" person

Once the file is modified, it remains to import it into Surfy then delete the "DELETE" person

### Importing the Modified Excel File

Select the columns of the assignment identifier and the "DELETE" person identifier in two contiguous columns.
A copy-paste in a new tab may be necessary to have contiguous columns.

In the List menu on the left of the screen,

-   click on "Assignments", "Space Assignments" then "import space assignments"
-   paste the contiguous columns in the central box
-   click on "Compare", Surfy proposes the modifications to make
-   click on "Create All", or check the desired boxes and click on "Create"
-   assignments to delete have "DELETE" as assigned person
-   delete the "DELETE" person to delete all their assignments.