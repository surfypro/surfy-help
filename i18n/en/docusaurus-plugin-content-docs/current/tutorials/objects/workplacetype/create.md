---
sidebar_position: 1
---
# Create a Workstation Type

<Youtube code="EV6UUY1utws"/>


To create a workstation type in Surfy, from the left menu, 

-   click on "Furniture", "Typologies", "Workstation Types" then "create a workstation type".
-   fill in the <P code="workplaceType:name" /> of the workstation type (for example: WST 180x80C) and the <P code="workplaceType:color" /> (white by default)
-   validate the workstation type creation

## Compose the Workstation Type
 
:::tip Good to know
To compose a workstation type, the object types composing the workstation type must be created beforehand.
:::

 -  click on the white page to display the command icons, or click on the icon at the top left of the page "Start workspace manipulation".
 -  click on the "Add an object type" icon
 -  choose the first object composing the workstation type (example: Desk 180x80) and drop it on the white sheet
 -  add the objects necessary for the workstation type composition (example: chair and Cabinet)
-   move and rotate the objects by clicking on "move object type" to compose the workstation type
-   click on "List object types" to display the list of used object types
-   place the list elements one above/below the other by dragging the "=" sign of the object type from top to bottom
 -  click on the "butterfly" to the right of the object type names to define the number of seats for each of them (example: 1 seat for the Desk chair)
 -  exiting the page allows the composition to be saved
 -  the created workstation type is available for adding a workstation in spaces.
 
 ## Compose a workstation with "physical" objects

From the workstation type composition page,

-   click on the "List object types" icon to display the list of used object types on the right
-   checking the "physical inventory" box of an object type used in the workstation composition allows you to define objects to be declared "physical", allowing the assignment of a <P code="item:reference" />, a <P code="item:code" /> and a <P code="item:purchaseDate" /> on the corresponding object. This allows you to create an inventory of unique objects.

By default, objects used in the composition of a workstation type cannot be referenced and are subject to simple counting.

### Creation of physical objects

Once the "Physical inventory" box is checked, it is necessary to create the associated physical objects.

For this, from the left menu,

-   click on "Administration" then "Companies" then "Reports and actions for data quality for companies" then "inventory consistency"
-   the list of physical objects to create appears, classified by workstation type.
-   click on the "CREATE" box to create the physical objects of the corresponding workstation type.

:::tip AT THIS STAGE
If a workstation type is composed of objects previously "physical" but which have been unchecked in the workstation type composition, the corresponding workstations will be proposed for deletion.<br />
Clicking on "DELETE" will only delete the "Physical" objects but will not delete the corresponding workstations, which will remain present but not referenceable.
:::

### Fill in the information of created "physical" objects

From the plan, 

-   click on a concerned workstation, the workstation's record appears
-   in the "workstation's physical inventory", click on the "pencil" icon opposite the "physical" object to fill in

The object's information (<P code="item:reference" />, <P code="item:code" /> and <P code="item:purchaseDate" />) are accessible on the right side of the screen and can be filled in or modified.
