---
sidebar_position: 1
---

# Manage Inventory

## Object Inventory

Each object can be inventoried in Surfy thanks to its reference or asset code.<br />
It thus becomes a unique object, geolocatable on plans by the search magnifying glass.<br />
Each object also has a purchase date.<br />
Other information (price, description, manufacturer) is accessible and modifiable in the object's object type and concerns all objects of the same type.

## Reference an Object

To give a reference (or an asset code, or a purchase date) to an object, from a floor plan,

-   click on the object
-   click on "Modify" in the object card on the left
-   type the <P code="item:reference" /> (or the <P code="item:code" />) in the concerned box
-   optionally indicate the object's <P code="item:purchaseDate" />
-   "Save" the modifications

:::tip Good to Know
The object's "Reference" can be displayed on all objects of the same type by checking the "Display information on plan" box in the [object type card](/en/docs/tutorials/objects/itemtype/types-d-objet-a-l-echelle/edit#modify-object-type-information). The reference can be searched with the magnifying glass to geolocate the object on the plan, and is visible by passing the mouse over the object.<br />
The "Asset code" can be searched with the magnifying glass to geolocate the object on the plan. It is visible by passing the mouse over the object but is not displayable on the object.<br />
:::

## Reference Objects of a Workstation Type

A workstation is composed of one or more grouped "virtual" objects.<br />
By default, these "virtual" objects cannot be referenced individually.<br />

To assign specific information to each workstation object, it is necessary to make these objects "physical".

### Configure Physical Objects for a Workstation Type

To make objects of a workstation type "physical", from a floor plan,

-   click on one of the relevant workstations
-   in the workstation card, to the left, click on the icon at the beginning of the "workstation type" line to "see more options for workstation type XXX"
-   choose to "edit shapes and location of object types for workstation type XXX"

The workstation composition is displayed on the screen.

-   open the icon at the top left of the page to "start workspace manipulation"
-   click on the last icon of the line to "list object types"

The list of objects composing the workstation type appears on the right.

-   check the "physical inventory" box for objects to make "physical"

:::tip Good to know
At this stage, clicking on the "butterfly" to the right of the object allows defining the number of seats represented by the object
:::

Once this operation is completed, you need to create "Physical" workstations.

### Create Physical Workstations

Once the objects composing the workstation have been checked, it is necessary to create "physical" workstations.

To do this, from the left menu,

-   click on "Administration", "Companies" then "Reports and actions for data quality for companies" then "Inventory consistency"

Workstations corresponding to the workstation type to create as "physical" are displayed.

-   click on "CREATE" to create the relevant physical objects.

:::warning GOOD TO KNOW
If "physical" workstations have been created and the "physical object" box has been subsequently unchecked on the objects composing the workstation type, these formerly "physical" workstations are proposed for deletion. Clicking on "DELETE" will only delete their "physical" representation and will not delete workstations on plans, these being virtual.<br />
However, if some formerly "physical" objects have kept their own referencing information, they cannot be deleted and will display as errors on this page.
:::

Physical workstations are created.<br />
The creation/deletion page indicates "All is fine".<br />
On the plan, you can now reference each physical object of the workstations.

### Reference Workstation Objects

To reference an object composing a workstation, it must be declared "physical".<br />
By clicking on a workstation on the plan, the list of objects composing it is displayed at the bottom of the workstation card.

-   Click on the "pencil" icon to "modify the object" at the end of the line of the object to reference allows access to the reference, asset code and purchase date of the object to the right of the screen.

If the "pencil" icon does not appear, it means the object has not been declared "physical". In this case, see how to [configure physical objects for a workstation type](/en/docs/tutorials/objects/inventory/#configure-physical-objects-for-a-workstation-type)
-   complete the information and "save".

The object composing the workstation is referenced.

The "Reference", "Asset Code" and "Purchase Date" fields appear in the Excel file of the ["inventory report"](/en/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting#building-inventory-report) from the [Building Dashboard](/en/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting).


