---
sidebar_position: 1
---
# Create a Scaled Object Type

## Create the Object Type Record

<Youtube code="89my-CVLjOo"/>

To create a scaled object type, from the left menu,

-	click on "Furniture", "Typologies", "Object Types", then "Create an object type".
-	fill in the <P code="itemType:name" /> of the object type to create
-	by default, the <P code="itemType:zIndex" /> is 0. It can be negative. In case of overlap between two object types, the one with the highest index will systematically be placed above the other.
-	the <P code="itemType:itemTypeFamily" /> allows you to display objects by Family on plans and in the pdf inventory.

These first three fields (Name, Height Index, Family) are mandatory.

-	the <P code="itemType:picture" /> field allows you to load the object type's photo, which will be visible in the pdf inventory and on the selected object's record on the plan.
-	checking <P code="itemType:displayItemReferenceInMap" /> allows you to display the "Reference" field of each object on the plan.
-	a particular <P code="itemType:code" /> will give you direct access to the object type by typing it in the search when creating an object.
-	the "Icon" choice should not be filled in when creating a scaled object type.
-	the <P code="itemType:color" /> can be chosen from a selection, or by Hexa or RGB code to respect your graphic charter.
-	the <P code="itemType:height" /> will in this case give the height of the associated 3D model, if it exists.
-	<P code="itemType:description" /> and <P code="itemType:price" /> can be filled in.
-	<P code="itemType:seatsCount" /> (only for seats, chairs, sofas, etc…) and <P code="itemType:carbonFootprint" /> (data possibly provided by the manufacturer, per object) can be filled in and are cumulated in Surfy by room, floor or building.
-	the "Icon Shape", "Background Color" and "Border Color" fields are reserved for icon creations and should not be filled in when creating scaled object types.
-	the <P code="itemType:manufacturer" /> can be filled in. If the manufacturer is not in the list, you can "create and associate an object type manufacturer" directly from the list.
-	the <P code="itemType:object3dModel" /> allows 3D visualization of Objects from the object type and placed on the plan.
-	the "External Key" allows you to identify the object type with external use to Surfy (interoperability with third-party applications)
-	"Validate creation".

It now remains to create the shape for the scaled object type.

## Create the Scaled Object Type Shape

### 3D Models
Surfy has a set of 3D models representing common furniture: tables, seats, desks, cabinets, etc... that can be associated with object types to represent them in 3D view of the building or floor.
These models are oriented in space. The composition of a 2D shape for an object type requires conforming to the orientation of the 3D model you want to associate with this object type. 

The orientation of the 2D shape to draw is defined below:

### Shape Orientation in Association with 3D Models

In order for 2D drawn shapes to be compatible with 3D models, the following orientation is necessary when drawing the 2D shape:
-   Cabinets: opening at the bottom
-   Tables: horizontal length, vertical width
-   Desks: horizontal length, vertical width
-   Seats: backrest at the top, seat at the bottom
-   Bubbles: opening at the bottom

### Create the 2D Shape

From the object type record, click on the context menu (gray box under the search magnifying glass), then:

-	click on "Edit the shape of object type XXX" to draw the object type's shape.
-   click on the white page to make the creation icons appear.
-	you can display a floor's background plan with the "choose a reference plan to create the shape" icon to trace the desired shape.
-   click on the "+" icon to "add a shape".
-   each click places a vertex. Drawing a shape follows the single thread logic. You can free yourself from verticality help by holding down the "Shift" key. Respecting compatibility with 3D models allows you to associate a well-oriented representation of the object in 3D views of the floor or building. See [Shape Orientation in Association with 3D Models](/docs/tutorials/objects/itemtype/types-d-objet-a-l-echelle/create#orientation-des-formes-en-association-aux-modèles-3d)

It is recommended to materialize the opening handle at the bottom of cabinet shapes so that they are well oriented when placed on the 2D plan and also in 3D view.

:::tip GOOD TO KNOW
To create a shape with exact dimensions, after clicking the first point, enter the value of the segment to draw (in meters) then while keeping the mouse in the direction of the segment to create, press "Enter". The segment with the correct length is created.
:::

-	once the scaled shape is drawn, click on the green icon to validate the shape creation.
-	to delete a vertex from the shape, click on the vertex then on "Delete vertex".
-	to add a vertex between two existing vertices, click on one of the vertices then on "add a vertex". Press the "shift" key to free the horizontality of vertex placement. The vertex to add is located between the two vertices. If the vertex to add is not well positioned, click on the adjacent vertex then on "add a vertex" to create the new vertex in the right place.
-	to delete the object's shape, click outside the shape then on "Delete shape".
-	once your shape is validated, you can click outside the shape then exit the page, your shape is saved.

Each object created from the object type will have the shape, color and characteristics of the created object type.
