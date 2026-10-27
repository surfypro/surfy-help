---
sidebar_position: 2
pagination_label: "Edit a Scaled Object Type"
title: "Edit a Scaled Object Type"
---
# Modify a Scaled Object Type

By modifying an object type, all objects associated with this object type will be modified.

## Modify Object Type Information

You can modify the information of an object type by modifying the object type card:
You can add its photo, change its <P code="itemType:name" />, its <P code="itemType:color" />, its 3D height, fill in its manufacturer, add a 3D model, define seats,... All objects created on plans from this object type will be modified.

To access this card, from the left menu,

-   click on "Furniture", "Typologies", "Object Types" then "List Object Types"
-   search for the object type by clicking on the "Filter Object Types" icon at the top right of the screen
-   fill in the object type to search for to isolate it in the list
-   at the beginning of the object type line, click on the "See more options for object type XXX" icon then on "Modify object type XXX"
-   modify the information of the object type to modify
-   "Save" the modifications

### Modify Object Type Family

To modify the object type family, from the left menu,

-   click on "Furniture", "Typologies" then "Object Types" and "List Object Types"
-   search for the object type to modify by clicking on the "Filter Object Types" icon at the top right of the screen
-   fill in the object type to search for to isolate it in the list
-   at the beginning of the object type line, click on the "See more options for object type XXX" icon then on "Modify object type XXX"
-   modify the <P code="itemType:itemTypeFamily" /> by clicking on the pencil and choose the new family for the concerned object type
-   save the modifications


## Modify Object Type Shape

You can modify the shape of an object type, from the left menu,

-   click on "Furniture", "Typologies" then "Object Types" and "List Object Types"
-   search for the object type by clicking on the "Filter Object Types" icon at the top right of the screen
-   fill in the object type to search for to isolate it in the list
-   at the beginning of the object type line, click on the "See more options for object type XXX" icon then on "Edit object type XXX shape"
-   the current shape appears on the plan.

By clicking on the page, a series of icons appears:

-   clicking on "Center the plan to see everything" allows you to center the object type shape for modifications.
-   clicking on a vertex of the shape allows you to move this vertex, or to create other vertices by clicking on "add a vertex".

### Add a Vertex

From the object type shape,

-   click on the vertex after which to add a new vertex
-   click on the grayed "+" icon to "Add a vertex"
-   an additional vertex is proposed between two existing vertices. The "Shift" key pressed allows you to free the vertex placement. The new vertices created will start from the vertex selected in red to then join the vertex in blue.
-   if the vertex to create is not between the two desired vertices, choose the previous or next vertex to create the vertex at the right place of the shape.
-   click on the place where to create the vertex, the new vertex appears between the red vertex and the blue vertex.
-   click on the grayed "+" icon to "stop adding a vertex".
-   once the shape is modified, click outside the shape. Leaving the page saves the shape.

### Delete a Vertex

-   click on the vertex to delete
-   to delete several vertices, select them with the "shift" key pressed. The vertices selected in red will be deleted
-   click on the "Trash" icon to "delete selected vertices".

:::tip Good to Know
You can directly access the information or shape of an object type if it is present on the plan: By clicking on one of the objects of the object type, the "See more options for object type XXX" icon on the object card on the left at the beginning of the "object type" line allows you to directly access the card or shape of the object type.
:::

:::warning Attention
Modifying the shape of an object type can modify its position on plans, calculated from the central point (barycenter) of the object type shape
:::

### Create Visual Edges on the Object Type Shape

<Youtube code="OyXt9Oi_zM0"/>

From a simple object type shape, you can add linear "Visual Edges" to complete the initial shape and get an improved visualization of the object type.
To do this, from the object type shape,
-   click on "Visual Edges" then on the "Add a visual edge" icon
-   click on or around the shape to place the first vertex of the edge, then the second

The edge is then shown in green; its vertices can be moved more precisely if needed.

Clicking outside the edge validates it, and it turns purple.

Clicking the edge selects it in green, and lets you move its vertices, or delete the edge by clicking the trash icon above the shape.

For example, you can illustrate a "half-height" cabinet type with a "Y".

Edges can be drawn without contact with the initial shape, allowing an advanced illustration of the object type: for example the letter "A".
Edges also let you create, for example, the swinging doors of a cabinet, without affecting its 3D representation, which is based only on the object type shape.

## Change Object Type of Already Created Objects

If objects have already been created and placed on plans, you can change the object type of these objects.

For this:

-   click on the object whose object type is to be changed
-   in the object card on the left, click on "Modify" to modify the object
-   on the "object type" line, click on the pencil icon "change object type"
-   choose the new object type
-   save the information and refresh (F5)

The concerned object has changed object type. You may need to correctly reposition the new object if its orientation or shape is not compatible with the previous one.
