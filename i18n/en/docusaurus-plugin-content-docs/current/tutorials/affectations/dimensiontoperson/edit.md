---
sidebar_position: 2
---
# Modify a District Assignment

## Modifying a Person's District Assignment

The simplest way to modify a person's district assignment in Surfy is to delete their assignment to the district then create a new assignment, whether to a district or not.
To move a person from one district to another, see the chapters [Delete a District Assignment](/en/docs/tutorials/affectations/dimensionToPerson/delete) and [Create a District Assignment](/en/docs/tutorials/affectations/dimensionToPerson/create).


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

