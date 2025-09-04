---
sidebar_position: 2
---
# Display 2D Plans

## Visualize a 2D Plan

To visualize a 2D plan from the home page, click on the floor name of the concerned building.
If the plan to display concerns a scenario, click on the "building XXX scenarios and projects" icon at the bottom right of its original building's record then click on the desired floor.

You can display the 2D plan from the left menu, by clicking on "Buildings" then on the concerned building.
Then click on the floor to display, or on the "building XXX scenarios and projects" icon then on the desired floor.

The floor plan is visualized according to the [View](/docs/courses/views/planviews.md) used.

Information and data linked to the plan are displayed on the left part of the screen and can be reduced by clicking on the vertical "Close plan menu" icon.
The left menu of the screen (Lists Menu) can also be reduced by clicking on the three horizontal lines "Reduce menu" under the company logo at the top left of the screen.

## Manage Space Display Text

To display space information on the plan, from the floor plan,

-   click on the "Manage space display text" icon above the plan
-   a record appears on the right of the screen, with "PLAN" and "TOOLTIP" tabs.

The "PLAN" tab allows the choice of displaying information:
    -   of "SPACES" by checking the space information to display on the plan
    -   of "PEOPLE" whose assignment type is selected in the "SPACES" tab, with or without their security profile.

The "TOOLTIP" tab allows the choice of displaying information in the tooltip displayed when hovering over the plan.

 You can change the display order of information by dragging and dropping the "=" sign from bottom to top.

## Manage Workstation Display Text

To display workstation information on the plan, from the floor plan,

-   click on the "Manage workstation display text" icon above the plan
-   a record appears on the right of the screen, with "WORKSTATIONS" and "PEOPLE" tabs.

The "WORKSTATIONS" tab allows the choice of displaying workstation information, as well as people assigned to workstations and their information selected in the adjacent "PEOPLE" tab.

The "PEOPLE" tab allows the choice of displaying information of people assigned to workstations. These people are only displayed if the "Display people" option is validated in the "WORKSTATIONS" tab.

 You can change the display order of information by dragging and dropping the "=" sign from bottom to top.

## Manage Display Font Sizes

To change the display font sizes of spaces or objects, from the floor plan,

-   click on the "Manage scale" icon above the plan then:
    -   modify the "Space text size"
    -   modify the "Text size on objects"

In all size choices,

        -   clicking on the green checkmark allows you to validate the display font size until the next change.
        -   clicking on the red cross cancels the display font size change.
        -   checking nothing allows you to keep the modified font size until the next refresh (F5). The size then returns to the last value validated with the green checkmark.

## Modify Icon Sizes on the Plan

To change icon sizes on the plan, from the floor plan,

-   click on the "Manage scale" icon above the plan then on "modify Object type icon sizes".
-   adjust icon sizes. All icons are displayed at the same size.

As in all size choices,
        -   clicking on the green checkmark allows you to validate icon sizes until the next change.
        -   clicking on the red cross cancels the icon size change.
        -   checking nothing allows you to keep the modified icon sizes until the next refresh (F5). Icon sizes then return to the last value validated with the green checkmark.

## Move Display Text

You can move the display text of spaces, workstations or objects,

-   click on the "Pencil" icon above the plan to "Activate plan edit mode"
-   click in the space, on the workstation or on the concerned object
-   click on the "Define display text location" icon (oblique "A" icon above the plan)

A red circle appears behind the space, workstation or object text, and a record opens on the right of the screen to "define display text location".

-   click-drag the circle to move the entity display
-   on the right record, "activate anchor display" allows you to draw a line between the text and the space, workstation or object the text belongs to in order to indicate this belonging
-   on the right record, "reset text position" allows you to replace the text at its original position at the barycenter of the space, workstation or object.

Once texts are moved,
-   click on the oblique "A" icon to "stop managing display text"
-   click on the "pencil" icon above the plan to "deactivate plan edit mode".

The text is moved, and possibly anchored to its entity.
Text movements are individual. Resetting their location is also.

## Display Layers on the Plan

Displaying layers on the plan allows you to color spaces according to various qualifications.
Grouped spaces have their cumulative information by layer by clicking on the corresponding vertical icon:

-   "color spaces on the plan according to space typologies" displays and gives totals by space typology
-   "color spaces on the plan according to analysis layers" displays and gives totals by analysis layer
-   "color spaces on the plan according to assignment layers" displays and gives totals by assignment layer
-   "color spaces on the plan according to organizations" displays and gives totals by Service and by Department
-   "color spaces and workstations according to cost centers" displays and gives totals by cost center, for spaces, workstations and people.

:::tip GOOD TO KNOW
You can visualize the totals of different layers for the entire building by [visualizing the building in 3D](/docs/courses/views/3Dviews.md#display-3d-plan-of-a-building)
:::

## Display Workstation Status on the Plan

Clicking on the vertical "color workstations according to their status" icon allows you to color workstations:
-   in green for assignable but free workstations. This qualification is automatic
-   in pink for workstations declared as "Flex"
-   in orange for workstations shared by several people. This qualification is automatic
-   in dark blue for workstations declared "passing"
-   in sky blue for workstations declared "bookable"

Workstations not concerned by these qualifications remain in their original color (white).
Workstations declared "as Flex" or "passing" cannot be assigned to a person.

## Display Security Profiles on the Plan

Clicking on the vertical "color workstations according to people" icon allows you to color workstations of assigned people according to their security profile.
Two or even three assignments of different security profiles on the same workstation will stripe the workstation with the security profile colors of assigned people.
For more information on Security profiles, see the chapter [Visualize Security Profiles on Plans](/docs/tutorials/person/personSecurityProfile/list.md#visualize-security-profiles-on-plans).

## Display Objects on the Plan

Clicking on the vertical "Display objects on the plan by family and object type" icon allows you to display or not objects according to their family and object type.

## Display Workstations on the Plan

Clicking on the vertical "Display workstations on the plan by workstation type" icon allows you to display or not workstations according to their workstation type.
