---
sidebar_position: 2
---
# Modify a Workstation Assignment



## Move a Person's Assignment

If a person is already assigned to a workstation or space:

Assigning them to another workstation or space opens a window listing all the person's assignments.
By default, only assignments on the same building are checked for deletion.
By clicking on "Delete Selected Assignments", pre-existing assignments on the same building will be deleted.
They will be kept by clicking on "Close".
Unchecked assignments remain unchanged but can be checked to be deleted.



## Use the Transfer Matrix

<Youtube code="0GBrwaLa6i4"/>

The transfer matrix allows you to move a team from one space to another space, or from workstations to other workstations across all digitized buildings in Surfy.


### Create the Transfer Matrix

-   select the spaces where the teams to move are currently located
-   the "shift" key allows you to select multiple spaces.
-   spaces are accumulated on the left of the screen.
-   select all concerned spaces by checking the boxes
-   click on the icon "create a transfer matrix in Excel allowing to easily carry out my collaborators' moves". 
-   Open the downloaded Excel file.


### Complete the Transfer Matrix

The Excel file has 2 tabs:

-   The "workstation assignments" tab lists people with their current assignment: workstation, space, floor and building, as well as the four empty columns of the destination assignment: workstation, space, floor and building.
-   complete the destination workstation assignment information
-   save the file.

-   The "space assignments" tab lists people with their current space assignment: space, floor and building, as well as the three empty columns of the destination assignment: space, floor and building. 
-   complete the destination space assignment information
-   save the file.

The matrix does not transfer workstation assignments to space assignments and vice versa.

:::warning Important
The "Identifier" or "Id" columns must not be modified or deleted. They are essential for the proper execution of the transfer.
Person information cannot be modified in this matrix.
The only information to fill in are the destination assignment columns.
:::


### Import the Transfer Matrix

Once completed, the file is imported according to the tab that is used.
If both tabs have been used, both imports are necessary.

If the "Workstation Assignments" tab has been used,

-   in the left menu, click on "assignments", "workstation assignments", then "import Workstation Transfer Matrices".
-   move and drag the Excel file into the designated area.
-   Surfy indicates the detected modifications to apply
-   check all or part of the proposed lines and update.
-   People have been moved to the corresponding workstations.

If the "Space Assignments" tab has been used,

-   in the left menu, click on "assignments", "space assignments", then "import Space Transfer Matrices".
-   move and drag the Excel file into the designated area.
-   Surfy indicates the detected modifications to apply
-   check all or part of the proposed lines and update.
-   People have been moved to the corresponding spaces.
