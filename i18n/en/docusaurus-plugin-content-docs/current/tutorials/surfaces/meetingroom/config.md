---
sidebar_position: 1
---

# Configure Meeting Room Management

For a space to be visualized and accessible from the "View and navigate in meeting rooms" page, its space typology (bubble, box, meeting room, ...) must be associated with the "Meeting Spaces" space typology group, or any other typology group whose code is "MEETING".


## Choose Space Typologies to Display

When modifying the space typology,

-   click on "Create a space typology group to space typology association"
-   click on the "pencil" icon to add the "Meeting Spaces" space typology group to the typology
-   validate creation

The space typology group is associated with the typology, and is added to the list of "space typology groups" of the typology, below the selection.
All spaces having one of the typologies contained in the "Meeting Spaces" space typology group will be displayed in the "View and navigate in meeting rooms" page.

To remove a typology from the typology group, you must [modify the typology itself](/en/docs/tutorials/surfaces/room/roomtype#modify-a-space-typology) then check and delete the association to the relevant group.

## Choose Equipment to Display

In addition to the furniture present in the meeting space, you can display the list of service object types offered in the meeting space (TV screen, projector, microphone, writing desk, ...)

To do this, you must add the "SERVICES" code to the relevant object type family (example: "Service equipment").

From the left menu,

-   click on "Spaces", "Object types", "Object type families" then "list object type families"
-   click on the "pencil" icon of the relevant object type family
-   in the "Code" line, enter "SERVICES"
-   validate the modification

All object types belonging to this family will be displayed in the meeting space information.

## Configure Meeting Room Access

To configure meeting room access, from the left menu,

-   click on "Administration", "Security", "Content roles" then "list content roles"
-   click on the "pencil" icon of the relevant content role
-   in "Content role associations to floors", check the floors containing meeting spaces
-   validate the modification

Users with this content role will have access to meeting spaces on the selected floors.