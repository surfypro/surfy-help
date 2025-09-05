---
sidebar_position: 1
---

# Create a Building

<Youtube code="M26SIN2q0Mk"/>

To create a new building from the Surfy home page,

-   click on the context menu, then on "Create a building".
-   indicate the <P code="building:name" /> and <P code="building:color" /> properties for its environment. These two properties are mandatory.
-   click on "validate creation" or complete the information then "validate creation".
-   adding the <P code="building:address" /> property of the building allows you to place buildings on a map for optimized multi-site management.
-   the "reference building" is the building behind which the new building will be hidden. This one will be considered as a scenario of its reference building. Without a reference building, the building will be on the first page (home page) and will be considered as "main building".
-   when creating a scenario, the default "reference building" is the building from which the scenario was created.

:::tip The Reference Building
The reference building can also be any building behind which you position the building in question. This allows you to establish a ranking on several levels of different projects. Buildings visible on the home page are "main buildings" and searches can optionally under the magnifying glass only apply to these buildings.
:::

## Create a Scenario {#create-scenario} ##

Creating a scenario in Surfy means making a partial or total copy of a building for redevelopment, or simply to make a backup copy.

<Youtube code="6o7F-9XlyqM"/>

To create a new scenario, from the home page,

-   click on the icon at the bottom right of the building's record to get "scenarios and projects of building XXX"
-   existing scenario records appear
-   click on "create a new scenario"
-   fill in the <P code="building:name" /> of the scenario to create (example: project 1, accounting redevelopment proposal, ...)
-   give a <P code="building:color" /> different from that of the original building to avoid building errors during modifications
-   you can duplicate or not:
        -   workstations
        -   assignments
        -   objects
        -   space organizations
        -   space analysis layers
-   select floors to duplicate
-   click on "Create a scenario"


After copying the building, the new scenario appears on the scenarios page of its original building.
The icon at the bottom right of the original building increments by one additional scenario.



## Move the Scenario

You can move the scenario to the home page,

-   click on the "pencil" icon at the bottom of the building's record to "edit building XXX"
-   on the "Original building" line, click on the cross to "remove the building"
-   save the modification

The scenario building no longer having an original building, it finds itself on the home page, as "Main building".

You can place any building A behind any other building B, from building A's record,

-   click on the "pencil" icon at the bottom of building A's record to "edit building A"
-   on the "Original building" line, click on the "pencil" icon to "change the building"
-   choose "Building B"
-   save the modification

Building A is now placed "behind" building B.
Building B increments the number of its scenarios on the "scenarios and projects of building B" icon at the bottom right of its record.

You can therefore create a building hierarchy by organizing these buildings on several levels.

:::tip GOOD TO KNOW
If the scenario was created from a building with an assignment layer, this scenario does not intervene in the possibility of reserving a workstation as long as it remains a scenario behind a main building. Only "main buildings" can be accessible for workstation reservation via an assignment layer.
Conversely, moving to the home page a scenario containing an assignment layer from its original building gives the possibility to reserve on the districts of this building and risks creating confusion.
In this case, you must remove the association of this building to the corresponding assignment layer so that it does not intervene in the reservation on the main building.
:::
