---
sidebar_position: 1
---
# Create a Workstation Assignment

Workstation assignments correspond to fixed assignments. You can find the workstation's location or know the person assigned to a chosen workstation by searching for the person or the workstation or space.

Workstation assignment is always done from the workstation, to which one or several people can be assigned.

## Assign a Person to a Workstation

To assign a person to a workstation,

-   click on the workstation to assign
-   in the workstation's record to the left, click on "Assign a person"
-   click on the person in the proposed list
-   the person is assigned to the workstation.
-   If the person is already assigned elsewhere, a window allows you to choose which assignments to delete.

The assigned person's name appears on the workstation's record and on the plan by hovering over the workstation. The list of people assigned to a space or to the workstations of this space is available by clicking in the concerned space then in the "Assignments" tab of the space's record.


:::tip Good to know
You can display the names of people assigned to workstations by clicking on the "Manage workstation display texts" icon above the plan and selecting the information to display.
:::


## Create and Assign a Person to a Workstation

If the person to assign is not yet created in Surfy's database, you can create and assign them in one move.

<Youtube code="gqpkHBE_0Lw"/>

To "create and associate" a new person,

-   click on the workstation to assign
-   in the workstation's record to the left, click on "Assign a person"
-   search for the person
-   if the person does not exist in Surfy, click on "create and associate a person"
-   complete the person's record
-   validate the person's creation
-   the person is created and assigned to the workstation.


## Assign People to Workstations by Excel Import

You can assign people in bulk by importing the corresponding Excel file.
This file must be composed at minimum of:
-   the identifier of the person to assign
-   the identifier of the workstation for the assignment
-   correct headers on the columns to import.

For this:
-	Export the Excel file "workstation report" to obtain the workstation identifiers
-	Export the "people list" in Excel to obtain their identifiers
-	Export the template for assigning people to a workstation to obtain the correct headers for reimporting the Excel file
-	Fill in the columns "Surfy Identifier (<P code="workplaceAffectation:person" />)" with the person's identifier, and "Workstation Identifier (<P code="workplaceAffectation:workplace" />)" with the workstation's identifier.
-	Import these two columns only, in "import workstation assignments".


:::warning Attention
New assignments created by import are added to existing assignments, without proposing to delete these assignments.
It is therefore necessary to ensure that all obsolete assignments are deleted before importing the file.
Assignments to keep require filling in the "Assignment Identifier" in the import to avoid creating a duplicate assignment
 :::
