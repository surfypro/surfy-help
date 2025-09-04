---
sidebar_position: 2
---


# Create a Space


<Youtube code="9A0XQaxj6hA"/>

To create a space (or room) on a floor that already has its background plan and scale:

-   from the floor plan, click on the plan to make the icons appear in the area above the plan
-   choose to "activate plan editing mode" by clicking on the "pencil" icon.
-   clicking on the "Add a space" icon allows you to have a cross indicating horizontality and verticality to facilitate the correct placement of the vertices of the space to create.

:::warning Attention
The "Add a space" icon only appears if no space or object is selected (for this, click on a non-digitized area of the plan), and the "Activate plan editing mode" icon is activated.
:::


-   click to create the first vertex of the space. The possibility of having a horizontal, 45-degree or vertical line is canceled by pressing the "Shift" key, allowing complete freedom in placing the next vertex.
-   by zooming in and out, place the mouse at the desired location and click to create the second vertex.
-   similarly, click to create the third vertex. Surfy suggests closing the space or continuing to create vertices.
-   to close the space, click to create the last vertex then on the "disk" icon above the plan to "save the current space".
-   the space is created and the space's record indicates its surface area and perimeter.

## Create Contiguous Spaces

Creating a floor plan implies a certain continuity between spaces. For example between a closed office and circulation, or between an open space and circulation.<br />
To ensure this continuity and create a "spider web" rather than a series of independent spaces, it is necessary to create segments common to contiguous spaces.

To create a segment common to two spaces, you must merge a vertex of space A with a vertex of space B, on each side of the segment to make common. Once the vertices on each side of the segment are common, the segment is common and colors in red.<br />
You can then qualify the common segment as "Door" or "without partition".

Doors are materialized on the 2D view of plans, with their opening direction and swing. Passages are represented by dotted lines.
Doors and passages are also visualized in the 3D view of the floor or building.

More information on [creating a segment common to two spaces](/docs/tutorials/surfaces/doors/create#création-dun-segment-commun-à-deux-espaces)
and on [creating doors and passages](/docs/tutorials/surfaces/doors/create#qualification-dun-segment-commun-en-porte-ou-passage).

Once the common segments are created and qualified as doors or passages, the route can be used to trace movement on the plan and obtain the time and distance to travel between the starting point and the arrival point.<br />
More information on [creating a route](/docs/tutorials/surfaces/pathfinding/create)



### Create Spaces Connected by Common Segments

To create spaces connected by common segments,

-   from the floor plan, click on the plan to make the icons appear in the area above the plan
-   "activate plan editing mode" by clicking on the "pencil" icon.
-   create the first space by being careful to create vertices at the junction points with the second space. In case of oversight, these vertices can be created subsequently.
-   create the second space. At the junction between the two spaces, hold down the "alt" key.
-   click on the first junction vertex of the first space, lit in green. The created vertex is common with the first space's vertex.
-   hold down the "alt" key and click on the second junction vertex between the two spaces. The second common vertex is created, the segment between the two common vertices is now common.
-   release the "alt" key when creating simple vertices.

In case of absence or oversight, once the space is created and to create an additional vertex to merge it:

-   click on a vertex then on the dark gray "+" icon above the plan to "add a vertex on a segment"
-   move the mouse over the segment on which the vertex is to be created
-   when the segment is red, click to add the vertex at the desired location
-   you can move the vertex after its creation by dragging it
-   select (with "shift" pressed) the two vertices to merge then on the "merge vertices" icon above the plan
-   click on a vertex then on the dark gray "+" icon to "stop adding a vertex on a segment".

In "Plan Editing" mode, common segments are wider and colored red, making them easy to spot to assign them a door or passage.

:::warning ATTENTION
A segment will be common if no additional vertex exists between the two common vertices. If an untimely vertex exists, delete it by clicking on it then on the "Trash" icon to "delete selected vertices" and make the segment common.
:::

:::tip GOOD TO KNOW
To efficiently digitize spaces, you can create each of the independent spaces first (closed offices, meeting rooms, ...), then create the circulation afterwards, using the "alt" key to gradually merge the vertices of independent spaces with the circulation vertices during their creation.
:::

## Qualify a Space

-   once the space is created, you must "modify" it on its record to the left of the plan to give it a <P code="room:name" />, a possible <P code="room:capacity" />, a <P code="room:organization" />, a <P code="room:roomType" /> of the space, a <P code="room:costCenter" />.
-   "save" the information.
-   optionally complete the qualifications in the different analysis layers. Saving this information is automatic.

It is important to fill in at least one space qualification like "typology", to give a color to the spaces on plans. 
After refreshing, the space displays the color of the chosen typology. This allows you to know which spaces are created and filled in.

:::tip Good to know
The "drop" icon above the plan allows you to "activate color transparency" and see the different elements present on the background plan through Surfy's layer colors.
:::

## Search for a Space

You can geolocate and access a space's record in several ways:

-   through the magnifying glass by performing a search then clicking on the searched space
-   through the [filtered list](/docs/courses/find/listfindcourse.md) of spaces ("Spaces", "Spaces", "List spaces" then "filter spaces")
-   through the person's assignment by clicking in the assigned person's space

