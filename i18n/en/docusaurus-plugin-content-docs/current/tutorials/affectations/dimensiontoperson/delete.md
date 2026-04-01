---
sidebar_position: 3
pagination_label: "Delete a District Assignment"
title: "Delete a District Assignment"
---

# Delete a District Assignment

## Delete a district assignment from the plan

To delete a person’s district assignment from the plan, you must be in the **"Neighbourhoods"** view, which groups spaces from the same district as single entities.

### Switch to Neighbourhoods view

To switch to Neighbourhoods view:

-   click on the vertical **"Change plan view"** icon
-   select the **"Neighbourhoods"** view


:::tip Plan View
Clicking on the vertical "Change plan view" icon and selecting the "Neighbourhoods" view allows you to configure Surfy in district assignment mode in 2 clicks: Assignment layers are displayed on the plan and the layer type is selected for navigation. As long as the view is not changed, it remains effective even after refresh (F5). You must therefore remember to return to the default view "Space Typologies" for standard use. See [district view](/en/docs/courses/views/planviews#district-view).
:::


District assignments are accessible by clicking in the district to select it.

### Delete a district assignment from the plan

To delete a person’s district assignment from the plan:

-   click on the district to select it, the district card appears on the left of the plan
-   click on the "Assignments" tab to display assignments present in the district
-   click on the "Trash" icon next to the name of person XXX to unassign: "Delete assignment to space XXX"
-   confirm the deletion

The person's assignment to the district is deleted

:::tip Good to Know
Deleting a person's assignment does not delete the person. However, deleting a person deletes all their assignments!
:::

## Delete district assignments from the person record

You can delete a person’s assignments from that person’s record without changing the plan view.

Use the search icon under the company logo to find a person in the Surfy database.

Clicking the name opens the person record with assignment information.

To delete an assignment:

-   click the context menu (grey box under the search icon) to **"edit person XXX"**
-   at the bottom of the page, click the **"Assignment layer assignments"** section
-   check the box for the district assignment to remove
-   click the icon at the top of the list to **"delete selected assignment layer assignments"**

## Deletion by Filtered Assignment List:

From the left menu,

-   click on "Assignments", "Assignment Layer Assignments" then "List Assignment Layer Assignments"
-   filter the list according to layers and layer types using the "Filter Assignment Layer Assignments" icon, at the top right of the screen
-   check the assignments to delete at the beginning of each line, then "delete selected assignment layer assignments" using the "trash" icon at the top of the page.

More details about filtered lists: [Filtered Lists](/en/docs/courses/find/listfindcourse)


## Bulk Assignment Deletion by Excel File

You can delete assignments in bulk by changing assigned people to replace them with a person created to be subsequently deleted:
-   create a person whose name and first name are "DELETE"
-   export the Excel file of assignments to delete
-   replace the name, first name, and especially the identifier of assigned people with the name, first name, and identifier of the "DELETE" person
-   import the assignment file: copy and paste the contiguous columns for **"assignment identifier"** and the person’s **"Surfy identifier"**
-   compare and update import data

Assignments to remove are now assigned to the "DELETE" person.

-   delete the "DELETE" person to remove all their assignments.



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

Select the columns of the assignment identifier and the "DELETE" person identifier.
A copy-paste in a new tab is necessary so that both columns are contiguous.

In the List menu on the left of the screen,

-   click on "Assignments", "Assignment Layer Assignments" then "import assignment layer assignments"
-   paste the contiguous columns in the center box
-   click on "Compare", Surfy proposes the modifications to be made
-   click on "Create All", or check the desired boxes and click on "Create"
-   assignments to delete have "DELETE" as assigned person
-   delete the "DELETE" person to delete all their assignments.

:::danger WARNING
You must configure the column header syntax correctly before importing into Surfy so the app can interpret the expected updates.
Without careful checks, you may import a large amount of incorrect data into the database.
For more details about bulk import, please [contact us](https://www.surfy.pro/contact).
:::