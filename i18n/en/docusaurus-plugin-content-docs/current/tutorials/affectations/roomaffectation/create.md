---
sidebar_position: 1
---
# Create a Space Assignment
Space assignments correspond to free assignments in a defined space. You can find the location of the space occupied by the person or know the person assigned to the chosen space by searching for the person or the space.

Space assignment is always done from the space, to which one or several people can be assigned.

## Assign a Person to a Space

To assign a person to a space,

-   click on the space to assign
-   in the space's record to the left, click on "Assign a person"
-   click on the person in the proposed list
-   the person is assigned to the space.
-   If the person is already assigned elsewhere, a window allows you to choose which assignments to delete.

The list of people assigned to a space or to the workstations of this space is available by clicking in the concerned space then in the "Assignments" tab of the space's record.


:::tip Good to know
You can display the names of people assigned to spaces by clicking on the "Manage space display texts" icon above the plan and selecting the information to display.
:::


## Create and Assign a Person to a Space

If the person to assign is not yet created in Surfy's database, you can create and assign them in one move:

-   click on the space to assign
-   in the space's record to the left, click on "Assign a person"
-   search for the person
-   if the person does not exist in Surfy, click on "create and associate a person"
-   complete the person's record
-   validate the person's creation
-   the person is created and assigned to the space.


## Assign People to Spaces by Excel Import

You can assign people in bulk by importing the corresponding Excel file.
This file must be composed at minimum of:
-   the identifier of the <P code="roomAffectation:person" /> to assign
-   the identifier of the <P code="roomAffectation:room" /> for the assignment
-   correct headers on the columns to import.


:::warning Attention
New assignments created by import are added to existing assignments, without proposing to delete these assignments.
It is therefore necessary to ensure that all obsolete assignments are deleted before importing the file.
Assignments to keep require filling in the "Assignment Identifier" in the import to avoid creating a duplicate assignment
:::
