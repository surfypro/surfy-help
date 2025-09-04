---
sidebar_position: 2
---
# Edit a Workstation Type

When modifying a workstation type, all workstations associated with this workstation type will be modified.

## Edit Workstation Type Information

You can modify the <P code="workplaceType:name" /> and <P code="workplaceType:color" /> of a workstation type by editing the workstation type's record.


To access the workstation's record, from the left menu,

-   click on "Furniture", "Typologies" then "workstation types" and "List workstation types"
-   at the beginning of the workstation type line, click on the "See more options for workstation type XXX" icon then on "Edit workstation type XXX"
-   modify the <P code="workplaceType:name" /> or <P code="workplaceType:color" /> of the workstation type to modify
-   "Save" the modifications

## Modify the Workstation Type Composition

A workstation type is composed of one or more object types placed relative to each other and grouped into a single entity.
You can add, move or delete an object type in a workstation type's composition to modify it.


To modify a workstation type's composition, from the left menu,

-   click on "Furniture", "Typologies" then "workstation types" and "List workstation types"
-   at the beginning of the workstation type line to modify, click on the "See more options for workstation type XXX" icon then on "Edit shapes and placement of object types for workstation type XXX"
-   the current composition appears on the plan.
-   click on the "Start workspace manipulation" icon at the top left of the page, to make the composition modification icons appear

-   clicking on the "+" "Add an object type" icon allows you to add an object type in the workstation type's composition
-   clicking on the "Move object type" icon allows you to move object types relative to each other.
-   clicking on "List object types" opens a window on the right side of the screen to qualify object types:
        -       by defining the number of seats for each object type in the butterfly at the end of the line
        -       by checking the "Physical inventory" box of the object type, allowing the assignment of a <P code="item:reference" /> and <P code="item:code" /> for the concerned object type to generate physical inventory objects.
        -       by clicking on the "=" sign and dragging to move an object up or down in the list to position an object above another

:::tip Good to know
You can directly access a workstation type's information or composition if it is present on the plan: By clicking on one of the workstations, the "See more options for workstation type XXX" icon on the workstation's record to the left at the beginning of the "workstation type" line, allows you to directly access the workstation type's record or composition.
:::

:::danger Attention
Modifying a workstation type's composition can modify its position on plans, calculated from the central point (barycenter) of the workstation type's composition
:::

 ## Modify a workstation with "physical" objects

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

### Deletion of physical objects

If a workstation type is composed of objects previously "physical" but which have been unchecked in the workstation type composition, the corresponding workstations will be proposed for deletion.<br />
Clicking on "DELETE" will only delete the "Physical" objects but will not delete the corresponding workstations, which will remain present but not referenceable.
