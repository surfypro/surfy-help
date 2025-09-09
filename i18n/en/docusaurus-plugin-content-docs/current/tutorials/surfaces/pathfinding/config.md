---
sidebar_position: 1
---

# Configure Route Search

A point-to-point route allows you to obtain the path from an origin point to a destination point in Surfy.

## Pathfinding Feature

To get a point-to-point route in Surfy, the "Pathfinding" feature must be validated.
Once this feature is validated, a vertical "serpentine" icon allowing to "Find your way in spaces" is available at the end of the vertical icons list.

To validate the "Pathfinding" feature, from the left menu,

-   click on "Administration" then "Companies" and "Tile view of companies"
-   click on the icon at the end of the company line to "See more options for company XXX"
-   click on "Modify company XXX"
-   in the company card, check the "Enable Pathfinding" box
-   save modifications.

Click on the company logo to return to the home page.
After refresh, the vertical "serpentine" icon appears, allowing to "Find your way in spaces".

The "Pathfinding" feature is operational.

## Doors and Passages

To use point-to-point routing, it is necessary to [create doors and passages](/en/docs/tutorials/surfaces/doors/create) between different spaces.

## Space Connector

The space connector allows two non-contiguous spaces to communicate virtually, for example between two levels via elevators or stairs. This data is used in point-to-point routing to change level or building.

### Space Connector Type

A space connector is associated with a space connector type: Elevator or Stairs.
To create an additional space connector type (ex: Shuttle,...) from the left menu,

-   click on "Administration", "Connectors" then "Room Connector Types" and "Create RoomConnectorType"
-   fill in the <P code="roomConnectorType:name" /> of the connector type (ex: Shuttle)
-   validate creation

### Configure Space Connector

A space connector is defined for stairs or an elevator serving several levels, but also for an unidentified route in Surfy: Taxi, shuttle, cable car, ...
The transfer duration by the space connector is taken into account in the total duration calculation of the route.

To create a space connector, from the left menu,

-   click on "Administration", "Connectors" then "Space connectors" and "Create a space connector"
-   fill in the <P code="roomConnector:name" /> (ex: Stairs C) and the <P code="roomConnector:roomConnectorType" /> (Stairs)
-   fill in the <P code="roomConnector:waitingTime" /> and the <P code="roomConnector:transferTime" /> between each floor
-   validate creation

To associate the space connector with spaces from the connector card,

-   click on the context menu (gray box in the left menu, under search), then on "Modify space connector XXX"
-   click on the "Associate a space" tab
-   search and select spaces to connect by validating each one

The list of spaces connected by the space connector is displayed at the bottom of the page.

:::warning ATTENTION
Checking and deleting a space line on this page deletes the space and all its content!
To remove a connector from a space, you must modify the space by removing the connector from the space card.
:::

### Associate Space Connectors with Spaces from Plan

To associate a space connector with a space from the floor plan,

-   click in the space to associate
-   in the space card, click on "Modify" to modify space information
-   click on the "pencil" icon next to "Space connector"
-   choose the appropriate connector for the space. The space connector type is indicated in brackets
-   save modifications

The associated space is connected to other spaces having the same associated connector.


Level change during a route is under development.