---
sidebar_position: 2
---


# Create a Space


<Youtube code="wGCPVpyd1C0"/>

To create a space (or room) on a floor that already has its plan background and scale:

-   from the floor plan, click on the plan to make icons appear in the area above the plan
-   choose to "activate plan editing mode" by clicking on the "pencil" icon.
-   clicking on the "Add a space" icon allows you to have a cross indicating horizontality and verticality to facilitate correct placement of the vertices of the space to create.

:::warning Attention
The "Add a space" icon only appears if no space or object is selected (for this, click on a non-digitized area of the plan), and the "Activate plan editing mode" icon is activated.
:::


-   click to create the first vertex of the space. The possibility of having a horizontal, 45-degree or vertical line is canceled by pressing the "Shift" key, allowing you to completely free the creation location of the next vertex.
-   by zooming in and out, place the mouse at the desired location and click to create the second vertex.
-   similarly, click to create the third vertex. Surfy offers to close the space or continue creating vertices.
-   to close the space, click to create the last vertex then on the "disk" icon above the plan to "save the current space".
-   the space is created and the space card indicates its surface and perimeter.

## Create Contiguous Spaces

Creating a floor plan involves some continuity between spaces. For example between a closed office and circulation, or between an open space and circulation.<br />
To ensure this continuity and create a "spider web" rather than a series of independent spaces, it is necessary to create common segments for contiguous spaces.

To create a common segment between two spaces, you must merge a vertex of space A with a vertex of space B, on each side of the segment to be made common. Once the vertices on either side of the segment are common, the segment is common and turns red.<br />
You can then qualify the common segment as "Door" or "without partition".

Doors are materialized on the 2D view of plans, with their opening direction and swing. Passages are represented by dotted lines.
Doors and passages are also visualized in the 3D view of the floor or building.

More information on [creating a common segment between two spaces](/en/docs/tutorials/surfaces/doors/create#creating-a-common-segment-between-two-spaces)
and on [creating doors and passages](/en/docs/tutorials/surfaces/doors/create#qualifying-a-common-segment-as-door-or-passage).

Once common segments are created and qualified as doors or passages, the route can be used to trace movement on the plan and get the time and distance to travel between the starting point and the arrival point.<br />
More information on [creating a route](/en/docs/tutorials/surfaces/pathfinding/create)



### Create Spaces Connected by Common Segments

To create spaces connected by common segments,

-   from the floor plan, click on the plan to make icons appear in the area above the plan
-   "activate plan editing mode" by clicking on the "pencil" icon.
-   create the first space by taking care to create vertices at the junction points with the second space. In case of oversight, these vertices can be created later.
-   create the second space. At the junction between the two spaces, hold the "alt" key.
-   click on the first junction vertex of the first space, lit in green. The created vertex is common with the vertex of the first space.
-   hold the "alt" key and click on the second junction vertex between the two spaces. The second common vertex is created, the segment between the two common vertices is now common.
-   release the "alt" key when creating simple vertices.

In case of absence or oversight, once the space is created and to create an additional vertex to merge it:

-   click on a vertex then on the dark gray "+" icon above the plan to "add a vertex on a segment"
-   pass the mouse over the segment on which the vertex is to be created
-   when the segment is red, click to add the vertex at the desired location
-   you can move the vertex after its creation by dragging it
-   select (with "shift" pressed) the two vertices to merge then on the "merge vertices" icon above the plan
-   click on a vertex then on the dark gray "+" icon to "stop adding a vertex on a segment".

In "Plan editing" mode, common segments are wider and colored in red, making them easy to identify in order to assign them a door or passage.

:::warning ATTENTION
A segment will be common if no additional vertex exists between the two common vertices. If an untimely vertex exists, delete it by clicking on it then on the "Trash" icon to "delete selected vertices" and make the segment common.
:::

:::tip GOOD TO KNOW
To efficiently digitize spaces, you can first create each of the independent spaces (closed offices, meeting rooms, ...), then create the circulation afterwards, using the "alt" key to gradually merge the vertices of the independent spaces with the circulation vertices during their creation.
:::

## Qualify a Space

-   once the space is created, you must "modify" it on its card on the left of the plan to give it a <P code="room:name" />, an optional <P code="room:capacity" />, a <P code="room:organization" />, a <P code="room:roomType" /> of the space, a <P code="room:costCenter" />.
-   "save" the information.
-   optionally complete the qualifications in the different analysis layers. Saving this information is automatic.

It is important to fill in at least one space qualification such as "typology", in order to give a color to the spaces on the plans. 
After refresh, the space displays the color of the chosen typology. This allows you to know which spaces are created and filled in.

:::tip Good to Know
The "drop" icon above the plan allows you to "activate color transparency" and see the different elements present on the plan background through the colors of Surfy's layers.
:::

## Search for a Space

You can geolocate and access a space's card in several ways:

-   by the magnifying glass by performing a search then clicking on the searched space
-   by the [filtered list](/en/docs/courses/find/listfindcourse) of spaces ("Spaces", "Spaces", "List spaces" then "filter spaces")
-   by the person's assignment by clicking in the assigned person's space