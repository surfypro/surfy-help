---
sidebar_position: 1
---
# Create a Cost Center

Cost centers allow the recharging of spaces, people and surface ratios per workstation to different entities.
Surfy offers automatic calculation of distribution keys and cumulative surfaces by cost center on one or more buildings to distribute and recharge building charges in proportion to occupancy surfaces or people assigned to these spaces.

For more information on recharging calculation in Surfy, see the chapter [Recharge Spaces in Surfy](/en/docs/tutorials/cost-distribution-by-cost-center/create).

## Create a Cost Center

 To create a cost center, from the left menu,

 -  click on "Administration", "Typologies", "cost centers" then "Create a cost center"
 -  fill in the cost center's <P code="costCenter:name" /> and its <P code="costCenter:color" /> for representation on plans
 -  for cost centers to be distributed (for example common areas), indicate if distribution is by floor or by building
 -  validate the creation


## Assign a Cost Center

The cost center can be assigned to a space, person or workstation.
To attach an entity to a cost center, it must first be created.

We define the "cost distribution type" to define if a space is recharged entirely to its cost center, or to the cost centers of the space's workstations in proportion to each.

### Cost Distribution Type

The cost distribution type allows you to recharge the entire surface of the space to its cost center (cost center by space) or to recharge the surface ratio of each workstation to the workstation's cost center (cost center by workstation). 

The "cost distribution type" of the space or workstations is essential to calculate the recharging of the space or workstation. If it is not present or not adapted, the distribution will be null or bad. 

:::tip Good to Know
You can mix cost distribution types and choose the best recharging calculation for each space.
:::

If you want not to charge a space or workstation, just leave the "cost distribution type" field empty. This can be the case of common areas at the owner's expense that you don't want to count in recharging, for example. 

On the other hand, if you assign a "cost distribution type" but no cost center, Surfy points out the missing information and allows you to remedy it quickly. 

We use a "cost center by space" for all spaces that have no workstation (meeting rooms, restrooms, circulation, Reprography, etc).

We can use a "cost center by workstation" in spaces that have workstations (closed offices or open spaces) whose cost center is different from that of the space (for example, a workstation charged to IT in a space charged to accounting).

Workstations will then have their surface ratio recharged to their cost center and not to that of the space.
The cost center of the concerned workstations must be filled in or they will not be charged.

If all workstations in the same space are at the space's cost center, you can use either cost center by space or by workstation, the result is the same. 

If you only recharge entire space surfaces, all rooms must be configured as "cost center by space".


You can import this information in bulk, via Excel file. The distribution type can easily be assigned according to space typology. 


### Assign a Cost Center and Cost Distribution Type to a Space

-   click in the concerned space
-   click on "modify" to modify the space information
-   click on the "pencil" icon of the space's "cost center"
-   select the cost center to assign to the space
-   click on the "pencil" icon of the "cost distribution type"
-   select the cost distribution type to assign to the space
-   save the modifications

Once spaces are modified, it is necessary to "reload plan data" by clicking on the icon at the top right of the screen, then refresh (F5). Cumulative data is then updated.

You can import cost centers and cost distribution types in bulk from an Excel file. 

### Assign a Cost Center to a Person

To assign a cost center to a person, you must "modify the person":

-   search for the person with the search magnifying glass, under the company logo at the top left of the screen
-   click on the search result to display the person's card
-   click on the context menu (gray box under the search) then on "Modify person XXX"
-   click on the "pencil" icon of the "Cost Center" and select the cost center from the list
-   "save" the modifications

### Assign a Cost Center to a Workstation

To assign a cost center to a workstation from the plan,

-   click on the workstation to attach
-   in the workstation card on the left of the plan, click on "Modify"
-   click on the "pencil" icon of the "Cost Center" and select the cost center from the list
-   "save" the modifications

