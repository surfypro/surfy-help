---
sidebar_position: 1
---
# Créer un calque d'analyse

Un calque d'analyse permet de regrouper, qualifier et représenter les espaces sur le plan afin d'obtenir le cumul des informations et la localisation des espaces regroupés.
Les "calques d'analyse" de même nature sont regroupés dans un "type de calque" commun.
Par exemple, le type de calque "Nature des sols" regroupe les calques d'analyse "Moquette", "Carrelage" ou "Lino".

Pour créer un calque d'analyse, il faut que son type de calque existe.

<Youtube code="G3d1bubX8FU"/>

## Créer un type de calque

Pour créer un type de calque, depuis la page d'accueil :

-   cliquer sur "Administration", "Calques d'analyse", "Types de calque" puis "Créer un type de calque".
-   Nommer le type de calque dans <P code="dimensionType:name" /> (ex: "Nature des sols")
-   "valider la création" du type de calque.

The layer type being created, you can associate analysis layers with this layer type

## Create and Associate an Analysis Layer with a Layer Type

Once the layer type is created or if it already exists, you can create and associate an analysis layer with it:

-   click on "Administration", "Analysis Layers", "Analysis Layers", then "Create an analysis layer".
-   fill in the <P code="dimension:name" /> (ex: "Carpet")
-   choose the <P code="dimension:dimensionType" /> in the layer type list by clicking on the "pencil" (ex: "Floor Nature")
-   choose a <P code="dimension:color" /> to represent spaces qualified by this analysis layer
-   "validate the creation" of the analysis layer.

:::tip Good to Know
You can also create analysis layers by modifying the layer type to directly associate the layers to create: For this, you need to "Modify layer type XXX" then "Create an analysis layer" and give it its name and color. The created layer will have the layer type XXX in modification by default.
:::

After refresh (F5), the layer is available for space qualification.

## Qualify a Space by an Analysis Layer

To qualify a space by an analysis layer,

-   select the space to qualify
-   click on "Modify" in the room card, to the left of the plan
-   in the desired layer type, choose the appropriate layer for the selected space
-   The selected space is qualified by the chosen layer, saving is automatic.

:::tip Good to Know
Automatic layer saving allows rapid space qualification by clicking and qualifying the next space directly, and so on without having to "modify" and "save" each space
:::

## Visualize Analysis Layers

The vertical "Palette" icon allows you to visualize on the plan all analysis layers present on the floor.
After data recalculation (icon at the top right of the screen "Reload plan data") and refresh (F5), the accumulated data for each layer is available by opening the butterfly in front of each layer, or by opening the global butterfly for all present layers.

## Analysis Layer Data Report

The analysis layer data report is available for each building:
-   from the home page, click on the icon at the end of the concerned building color line
-   click on "Dashboard for building XXX"
-   click on "Building XXX space analysis layers report"

The obtained Excel file contains all the data of spaces linked to the building's analysis layers.


:::tip Good to Know
From the home page, "List buildings" in the context menu allows you to select multiple buildings and obtain dashboard reports on all selected buildings.
:::

