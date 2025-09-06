---
sidebar_position: 1
---
# Create a Workstation Assignment

Workstation assignments correspond to fixed assignments. You can find the workstation location or know the person assigned to a chosen workstation by searching for the person or the workstation or space.

Workstation assignment is always done from the workstation, to which you can assign one or more people.

## Assign a Person to a Workstation

To assign a person to a workstation,

-   click on the workstation to assign
-   in the workstation card on the left, click on "Assign a Person"
-   click on the person in the proposed list
-   the person is assigned to the workstation.
-   If the person is already assigned elsewhere, a window allows you to choose which assignments to delete.

The assigned person's name appears on the workstation card and on the plan when hovering over the workstation. The list of people assigned to a space or to the workstations of that space is available by clicking in the concerned space then in the "Assignments" tab of the space card.


:::tip Good to Know
You can display the names of people assigned to workstations by clicking on the "Manage workstation display texts" icon above the plan and selecting the information to display.
:::


## Create and Assign a Person to a Workstation

If the person to assign is not yet created in the Surfy database, you can create and assign them in one move.

<Youtube code="gqpkHBE_0Lw"/>

To "create and associate" a new person,

-   click on the workstation to assign
-   in the workstation card on the left, click on "Assign a Person"
-   search for the person
-   if the person does not exist in Surfy, click on "create and associate a person"
-   complete the person's card
-   validate the person's creation
-   the person is created and assigned to the workstation.


## Assign People to Workstations by Excel Import

You can assign people in bulk by importing the corresponding Excel file.
This file must be composed at minimum of:
-   the identifier of the person to assign
-   the identifier of the assignment workstation
-   the correct headers on the columns to import.

To do this:
-	Export the Excel file "workstation report" to get workstation identifiers
-	Export the "person list" in Excel to get their identifier
-	Export the person to workstation assignment template to get the correct headers for Excel file re-import
-	Fill the columns "Surfy Identifier (<P code="workplaceAffectation:person" />)" with the person's identifier, and "Workstation Identifier (<P code="workplaceAffectation:workplace" />)" with the workstation identifier.
-	Import these two columns only, in "import workstation assignments".


:::warning Attention
New assignments created by import are added to existing assignments, without proposing to delete these assignments.
You must therefore ensure to delete all obsolete assignments before importing the file.
Assignments to keep require filling in the "Assignment Identifier" in the import to avoid creating a duplicate assignment
 :::