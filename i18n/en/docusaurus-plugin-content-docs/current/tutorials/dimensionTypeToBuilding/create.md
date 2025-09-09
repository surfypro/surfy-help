---
sidebar_position: 2
---
# Create an Assignment Layer


An assignment layer is an analysis layer whose layer type is associated with one or more buildings.<br />
It allows the assignment of people to "Districts" composed of one or more spaces of the concerned buildings.<br />

For more information on creating an analysis layer, see the chapter [Create an Analysis Layer](/en/docs/tutorials/dimensionType/create)

An assignment layer allows you to group, qualify and represent spaces by Districts on the plan, in order to obtain the accumulation of information, the location of grouped spaces and all person assignments to building Districts.

"Assignment layers" of the same nature are grouped in a common "layer type".
For example, the "Building A Districts" layer type groups the "District A1", "District A2", "District A3" assignment layers.

To create an assignment layer, its layer type must exist.

## Create a Layer Type

To create a layer type, from the home page:

-   click on "Administration", "Analysis Layers", "Layer Types" then "Create a layer type".
-   Name the layer type in <P code="dimensionType:name" /> (ex: "Building A Districts")
-   "validate the creation" of the layer type.

To associate the layer type with buildings, in order to create assignment layers:

-   in the context menu, click on "Modify layer type XXX"
-   at the bottom of the page, click on "Create building assignment layer"
-   choose the <P code="dimensionTypeToBuilding:building" /> to associate with assignment layers (ex: "building A")
-   save the modifications

:::tip GOOD TO KNOW
Only "main buildings" can be accessible for workstation booking via an assignment layer.
Conversely, moving a scenario containing an assignment layer from its original building to the home page gives the possibility to book on the districts of this building and risks creating confusion.
In this case, you must remove the association of this building with the corresponding assignment layer so that it does not interfere with booking on the main building.
:::

## Create and Associate an Assignment Layer with a Layer Type

Once the layer type is created and associated with one or more buildings, you can create and associate an assignment layer with it:

-   click on "Administration", "Analysis Layers", "Analysis Layers", then "Create an analysis layer".
-   fill in the <P code="dimension:name" /> (ex: "District A1")
-   choose the <P code="dimensionTypeToBuilding:dimensionType" /> associated with one or more buildings in the layer type list by clicking on the "pencil" (ex: "Building A Districts"). The analysis layer becomes an assignment layer.
-   choose a <P code="dimension:color" /> to represent spaces qualified by this assignment layer
-   "validate the creation" of the assignment layer.

:::tip Good to Know
You can also create assignment layers by modifying the layer type to directly associate the layers to create: For this, you need to "Modify layer type XXX" then "Create an assignment layer" and give it its name and color. The created layer will have the layer type XXX in modification by default.
:::

## Qualify a Space by an Assignment Layer

After refresh (F5), the layer is available for space qualification:
-   select the space to qualify
-   click on "Modify" in the space card, to the left of the plan
-   choose the desired layer type in the space qualification list
-   choose the appropriate layer for the selected space

The selected space is qualified by the chosen layer

## Visualize Assignment Layers

The vertical "Grid" icon allows you to "color spaces on the plan according to assignment layers" present on the floor.
After data reload (icon at the top right of the screen) and refresh (F5), the accumulated data for each assignment layer is available by opening the butterfly in front of each layer, or by opening the global butterfly.

## Assignment Layer Data Report

The assignment layer data report is available for each building:
-   from the home page, click on the icon at the end of the concerned building color line
-   click on "Dashboard for building XXX"
-   click on "Building XXX space analysis layers report"

The obtained Excel file contains all the data of spaces linked to the building's assignment layers.


:::tip Good to Know
From the home page, "List buildings" in the context menu allows you to select multiple buildings and obtain dashboard reports on all selected buildings.
:::
