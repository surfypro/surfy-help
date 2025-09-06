---
sidebar_position: 3
---

# Delete a District Assignment

To delete a person's assignment to a district, you must be in "Assignment Layer Navigation" mode.

## Switch to District Navigation

To switch to "district" or "assignment layer" navigation,

-   click on the vertical "Grid" icon to "Color spaces on the plan according to assignment layers"
-   click on the icon at the end of the layer name line to "select the layer type for navigation" to activate district selection
-   district information, its assignments and inventory are accessible in the same way as for a classic space, by clicking in the district.


:::tip Plan View
Clicking on the vertical "Change plan view" icon and selecting the "Districts" view allows you to configure Surfy in district assignment mode in 2 clicks: Assignment layers are displayed on the plan and the layer type is selected for navigation. As long as the view is not changed, it remains effective even after refresh (F5). You must therefore remember to return to the default view "Space Typologies" for standard use. See [district view](/en/docs/courses/views/planviews.md#district-view).
:::


District assignments are accessible by clicking in the district to select it.

## Individual Assignment Deletion

To delete a person's assignment to a district,

-   click on the district to select it, the district card appears on the left of the plan
-   click on the "Assignments" tab to display assignments present in the district
-   click on the "Trash" icon next to the name of person XXX to unassign: "Delete assignment to space XXX"
-   confirm the deletion

The person's assignment to the district is deleted

:::tip Good to Know
Deleting a person's assignment does not delete the person. However, deleting a person deletes all their assignments!
:::

## Deletion by Filtered Assignment List:

In the List menu on the left of the screen,

-   click on "Assignments", "Assignment Layer Assignments" then "List Assignment Layer Assignments"
-   filter the list according to layers and layer types using the "Filter Assignment Layer Assignments" icon, at the top right of the screen
-   check the assignments to delete at the beginning of each line, then "delete selected assignment layer assignments" using the "trash" icon at the top of the page.


## Bulk Assignment Deletion by Excel File

You can delete assignments in bulk by changing assigned people to replace them with a person created to be subsequently deleted:
-   create a person whose name and first name are "DELETE"
-   export the Excel file of assignments to delete
-   replace the name, first name and identifier of assigned people with the name, first name and identifier of the "DELETE" person
-   import the assignment file
-   delete the "DELETE" person

Since the person is deleted, all their assignments are deleted.



### Excel File Creation

You can create the Excel file containing assignments to delete in different ways:

-   By generating the "Report of people assigned in building XXX" file: 

    -   from the home page, click on the icon at the end of the color band of building XXX
    -   click on "Dashboard for building XXX"
    -   click on the icon of the line "Report of people assigned in building XXX" 
    -   the file is downloaded, the "AffecAuxCalquDAffec" tab contains the assignment layer assignments to modify

-   By generating the filtered list of assignments to delete:

    -   in the List menu on the left of the screen, click on "Assignments", "Assignment Layer Assignments" then "List Assignment Layer Assignments"
    -  filter the list according to layers and layer types using the "Filter Assignment Layer Assignments" icon, at the top right of the screen
    -  generate the Excel file of the obtained list, by clicking on the "Download Assignment Layer Assignments in Excel" icon at the top right of the screen
    -   the file is downloaded and contains the assignment layer assignments from the filtered list.


### Processing Information in the Excel File

In the Excel file, for each assignment line to delete, replace the name, first name and identifier of assigned people with the name, first name and identifier of the "DELETE" person

Once the file is modified, it remains to import it into Surfy then delete the "DELETE" person

### Importing the Modified Excel File

Select the columns of the assignment identifier and the "DELETE" person identifier in two contiguous columns.
A copy-paste in a new tab may be necessary to have contiguous columns.

In the List menu on the left of the screen,

-   click on "Assignments", "Assignment Layer Assignments" then "import assignment layer assignments"
-   paste the contiguous columns in the center box
-   click on "Compare", Surfy proposes the modifications to be made
-   click on "Create All", or check the desired boxes and click on "Create"
-   assignments to delete have "DELETE" as assigned person
-   delete the "DELETE" person to delete all their assignments.