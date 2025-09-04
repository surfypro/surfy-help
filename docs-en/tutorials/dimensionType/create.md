---
sidebar_position: 1
---
# Create an Analysis Layer

An analysis layer allows you to group, qualify and represent spaces on the plan to obtain information totals and location of grouped spaces.
Analysis "layers" of the same nature are grouped in a common "layer type".
For example, the "Floor Nature" layer type groups the analysis layers "Carpet", "Tiles" or "Linoleum".

To create an analysis layer, its layer type must exist.

<Youtube code="G3d1bubX8FU"/>

## Create a Layer Type

To create a layer type, from the home page:

-   click on "Administration", "Analysis Layers", "Layer Types" then "Create a layer type".
-   Name the layer type in <P code="dimensionType:name" /> (ex: "Floor Nature")
-   "validate the creation" of the layer type.

Once the layer type is created, analysis layers can be associated with this layer type

## Create and Associate an Analysis Layer with a Layer Type

Once the layer type is created or if it already exists, you can create and associate an analysis layer with it:

-   click on "Administration", "Analysis Layers", "Analysis Layers", then "Create an analysis layer".
-   fill in the <P code="dimension:name" /> (ex: "Carpet")
-   choose the <P code="dimension:dimensionType" /> from the list of layer types by clicking on the "pencil" (ex: "Floor Nature")
-   choose a <P code="dimension:color" /> to represent spaces qualified by this analysis layer
-   "validate the creation" of the analysis layer.

:::tip Good to know
You can also create analysis layers by modifying the layer type to directly associate the layers to create: For this, you need to "Edit layer type XXX" then "Create an analysis layer" and give it its name and color. The created layer will have layer type XXX in modification by default.
:::

After refresh (F5), the layer is available for qualifying spaces.

## Qualify a Space with an Analysis Layer

To qualify a space with an analysis layer,

-   select the space to qualify
-   click on "Edit" in the room's record, to the left of the plan
-   in the desired layer type, choose the appropriate layer for the selected space
-   The selected space is qualified by the chosen layer, saving is automatic.

:::tip Good to know
Automatic saving of layers allows rapid qualification of spaces by clicking and qualifying the next space directly, and so on without having to "edit" and "save" each space
:::

## Visualize Analysis Layers

The vertical "Palette" icon allows you to visualize on the plan all analysis layers present on the floor.
After recalculating data (icon at the top right of the screen "Reload plan data") and refresh (F5), the cumulative data for each layer is available by opening the butterfly opposite each layer, or by opening the global butterfly for all present layers.

## Analysis Layer Data Report

The analysis layer data report is available for each building:
-   from the home page, click on the icon at the end of the building's color line
-   click on "Dashboard for building XXX"
-   click on "Analysis layers report of building XXX spaces"

The obtained Excel file contains all data of spaces linked to the building's analysis layers.


:::tip Good to know
From the home page, "List buildings" in the context menu allows you to select several buildings and obtain dashboard reports on all selected buildings.
:::
