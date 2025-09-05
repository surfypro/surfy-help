---
sidebar_position: 1
---


# Create an Icon Object Type

<Youtube code="89my-CVLjOo"/>

To create an icon object type, from the left menu,

-	click on "Furniture", "Typologies", "Object Types", then "Create an object type".
-	fill in the <P code="itemType:name" /> of the icon type to create
-	set the <P code="itemType:zIndex" /> to "9" so that icons are systematically above other objects, therefore visible. (By default, the height index is 0. It can be negative)
-	the <P code="itemType:itemTypeFamily" /> allows you to display objects by Family on plans and in the pdf inventory.

These first three fields (Name, Height Index, Family) are mandatory.

-	the <P code="itemType:picture" /> field allows you to load the object type's photo, which will be visible in the pdf inventory and on the selected object's record on the plan.
-	checking <P code="itemType:displayItemReferenceInMap" /> allows you to display the "Reference" field of each object on the plan.
-	a particular <P code="itemType:code" /> will give you direct access to the object type by typing it in the search when creating an object.
-	in the <P code="itemType:icon" /> field, the "Pencil" gives you access to three types of icons:
    -   "Fontawesome" Icons, visible by checking "show all" or by searching by keyword in English in the search box.
    -   "SURFY" Icons intended for illustrations added on plans at strategic locations (Toilets, Stairs, Elevators, Copy Points, …) but which can also be used as classic icons.
    -   "SURFY 2" Icons representing regulatory icons from the ISO 7010 Security standard. Their original shape can be square or triangular. The colors and shapes of "SURFY 2" icons are automatically filled in Surfy and can be modified.

-	the <P code="itemType:color" /> can be chosen from a selection, or by Hexa or RGB code to respect your graphic charter.
-	the <P code="itemType:height" /> will in this case give the height of the associated 3D model, if it exists.
-	<P code="itemType:description" /> and <P code="itemType:price" /> can be filled in.
-	<P code="itemType:seatsCount" /> (only for seats, chairs, sofas, etc…) and <P code="itemType:carbonFootprint" /> (data possibly provided by the manufacturer, per object) can be filled in and are cumulated in Surfy by room, floor or building.
-	the <P code="itemType:iconShape" /> allows you to define a square, round or triangular icon type. The <P code="itemType:iconBackgroundColor" /> and <P code="itemType:iconBorderColor" /> allow you to properly configure multi-color icons, especially triangular ones.
-	the <P code="itemType:manufacturer" /> of the furniture can be filled in
-	the <P code="itemType:object3dModel" /> allows 3D visualization of Icons from the icon type and placed on the plan (copiers, fire extinguishers, water fountains, coat racks). Icon orientation is done in "plan editing" mode. For better readability, exiting this mode resets the icon to its original position but the 3D model will be oriented according to the icon's orientation in "plan editing" mode.
-	the "External Key" allows you to identify the object type with external use to Surfy (interoperability with third-party applications)

After validating the object type creation, the corresponding object type is available for object creation.
