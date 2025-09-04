---
sidebar_position: 2
---
# Create an Assignment Layer


An assignment layer is an analysis layer whose layer type is associated with one or several buildings.<br />
It allows the assignment of people to "Neighborhoods" composed of one or several spaces of the concerned buildings.<br />

For more information on creating an analysis layer, see the chapter [Create an Analysis Layer](/docs/tutorials/dimensionType/create.md)

An assignment layer allows you to group, qualify and represent spaces by Neighborhoods on the plan, to obtain information totals, location of grouped spaces and all assignments of people to building Neighborhoods.

"Assignment layers" of the same nature are grouped in a common "layer type".
For example, the "Building A Neighborhoods" layer type groups the assignment layers "Neighborhood A1", "Neighborhood A2", "Neighborhood A3".

To create an assignment layer, its layer type must exist.

## Create a Layer Type

To create a layer type, from the home page:

-   click on "Administration", "Analysis Layers", "Layer Types" then "Create a layer type".
-   Name the layer type in <P code="dimensionType:name" /> (ex: "Building A Neighborhoods")
-   "validate the creation" of the layer type.

To associate the layer type with buildings, with a view to creating assignment layers:

-   in the context menu, click on "Edit layer type XXX"
-   at the bottom of the page, click on "Create a building assignment layer"
-   choose the <P code="dimensionTypeToBuilding:building" /> to associate with assignment layers (ex: "building A")
-   save the modifications

:::tip GOOD TO KNOW
Only "main buildings" can be accessible to workstation booking via an assignment layer.
Conversely, moving on the home page a scenario containing an assignment layer from its original building gives the possibility to book on this building's neighborhoods and risks creating confusion.
In this case, you must remove the association of this building to the corresponding assignment layer so that it does not interfere with booking on the main building.
:::

## Create and Associate an Assignment Layer with a Layer Type

Once the layer type is created and associated with one or several buildings, you can create and associate an assignment layer with it:

-   click on "Administration", "Analysis Layers", "Analysis Layers", then "Create an analysis layer".
-   fill in the <P code="dimension:name" /> (ex: "Neighborhood A1")
-   choose the <P code="dimensionTypeToBuilding:dimensionType" /> associated with one or several buildings from the list of layer types by clicking on the "pencil" (ex: "Building A Neighborhoods"). The analysis layer becomes an assignment layer.
-   choose a <P code="dimension:color" /> to represent spaces qualified by this assignment layer
-   "validate the creation" of the assignment layer.

:::tip Good to know
You can also create assignment layers by modifying the layer type to directly associate the layers to create: For this, you need to "Edit layer type XXX" then "Create an assignment layer" and give it its name and color. The created layer will have layer type XXX in modification by default.
:::

## Qualify a Space with an Assignment Layer

After refresh (F5), the layer is available for qualifying spaces:
-   select the space to qualify
-   click on "Edit" in the space's record, to the left of the plan
-   choose the desired layer type from the list of space qualifications
-   choose the appropriate layer for the selected space

The selected space is qualified by the chosen layer

## Visualize Assignment Layers

The vertical "Grid" icon allows you to "color spaces on the plan according to assignment layers" present on the floor.
After reloading data (icon at the top right of the screen) and refresh (F5), the cumulative data for each assignment layer is available by opening the butterfly opposite each layer, or by opening the global butterfly.

## Assignment Layer Data Report

The assignment layer data report is available for each building:
-   from the home page, click on the icon at the end of the building's color line
-   click on "Dashboard for building XXX"
-   click on "Analysis layers report of building XXX spaces"

The obtained Excel file contains all data of spaces linked to the building's assignment layers.


:::tip Good to know
From the home page, "List buildings" in the context menu allows you to select several buildings and obtain dashboard reports on all selected buildings.
:::
