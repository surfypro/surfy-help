---
sidebar_position: 2
---

# Create a Route

A point-to-point route allows you to obtain the path from an origin point to a destination point in Surfy.

The origin point is a space.
The destination point can be a space or an object. You can thus guide the user's movement towards an object (defibrillator, fire extinguisher, any object) or a space to reach (a person's assignment space, any space).

The route is traced on Surfy plans.
Distance information, walking time, running time are displayed in the info bubble.
The route uses existing doors and passages while avoiding objects found on its path.
It uses space connectors to change floors or buildings and ensure route continuity by integrating the use of stairs, elevators or any other means of transportation from one site to another (shuttle, taxi, cable car,...)

To create a point-to-point route, you need to:

-   define the origin space
-   generate the orientation graph, if it is no longer correct since the last graph generation (furniture movement, partition or door modifications)
-   "Activate path tracing from source space" to make the trace appear from the origin point to the mouse position (destination point of the floor). If the destination point has a space connector, the route can use it to change level or location.



### Define the Route Origin Point

Clicking on the vertical "serpentine" icon opens the route window.

You can first select the origin space by clicking in the relevant space, then on the vertical "serpentine" icon to "find your way in spaces". Then clicking on "Select origin space" selects the relevant space as origin space.

You can also choose your origin space by clicking in the box to choose the origin space from the list of floor spaces.

### Generate Orientation Graph

To get a coherent route, it may be necessary to "generate the orientation graph".
Clicking on this box allows generating a spider web and a set of nodes usable by the route, avoiding present objects and using doors and passages.

## Find Your Route to the Destination Point

Once the graph is generated, moving the mouse on the plan allows displaying the route from the origin point to the mouse location (destination point). Distance and necessary time are indicated in the info bubble.

## Change Level in Point-to-Point Route

Level change during a route is under development.