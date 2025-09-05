---
sidebar_position: 1
---
# Create a Cost Center

Cost centers allow the recharging of spaces, people and surface ratios per workstation to different entities.
Surfy offers automatic calculation of distribution keys and cumulative surfaces per cost center on one or several buildings to distribute and recharge building charges proportionally to occupation surfaces or people assigned to these spaces.

For more information on cost calculation in Surfy, see the chapter [Recharge Spaces in Surfy](/docs/tutorials/cost-distribution-by-cost-center/create.md).

## Create a Cost Center

 To create a cost center, from the left menu,

 -  click on "Administration", "Typologies", "cost centers" then "Create a cost center"
 -  fill in the <P code="costCenter:name" /> of the cost center and its <P code="costCenter:color" /> for representation on plans
 -  for cost centers to be distributed (for example common areas), indicate if distribution is by floor or by building
 -  validate the creation


## Assign a Cost Center

The cost center can be assigned to a space, a person or a workstation.
To link an entity to a cost center, it must first be created.

We define the "cost distribution type" to define if a space is fully recharged to its cost center, or to the cost centers of the space's workstations proportionally to each one.

### Cost Distribution Type

The cost distribution type allows you to recharge the entire surface of the space to its cost center (cost center by space) or to recharge the surface ratio of each workstation to the workstation's cost center (cost center by workstation). 

The "cost distribution type" of the space or workstations is essential to calculate the recharging of the space or workstation. If it is not present or not adapted, the distribution will be null or bad. 

:::tip Good to know
You can mix cost distribution types and choose for each space the best recharging calculation.
:::

If you want not to charge a space or workstation, simply leave the "cost distribution type" field empty. This can be the case for common areas at the owner's expense that you don't want to count in the recharging, for example. 

However, if you assign a "cost distribution type" but no cost center, Surfy points out the missing information and allows you to remedy it quickly. 

We use a "cost center by space" for all spaces that don't have workstations (meeting rooms, sanitary facilities, circulation, Reprography, etc).

We can use a "cost center by workstation" in spaces that have workstations (closed offices or open spaces) whose cost center is different from that of the space (for example, a workstation charged to IT in a space charged to accounting).

The workstations will then have their surface ratio recharged to their cost center and not to that of the space.
The cost center of the concerned workstations must be filled in under penalty of not being charged.

If all workstations in the same space are at the space's cost center, you can use indifferently the cost center by space or by workstation, the result is the same. 

If you only recharge the entire surfaces of spaces, all rooms must be configured in "cost center by space".


You can import this information in bulk, by Excel file. The distribution type can easily be assigned according to space typology. 


### Assign a Cost Center and Cost Distribution Type to a Space

-   click in the concerned space
-   click on "edit" to modify the space's information
-   click on the "pencil" icon of the space's "cost center"
-   select the cost center to assign to the space
-   click on the "pencil" icon of the "cost distribution type"
-   select the cost distribution type to assign to the space
-   save the modifications

Once the spaces are modified, it is necessary to "reload plan data" by clicking on the icon at the top right of the screen, then refresh (F5). The cumulative data is then updated.

You can import in bulk the cost centers and cost distribution types from an Excel file. 

### Assign a Cost Center to a Person

To assign a cost center to a person, you need to "edit the person":

-   search for the person using the search magnifying glass, under the company logo at the top left of the screen
-   click on the search result to display the person's record
-   click on the context menu (gray box under the search) then on "Edit person XXX"
-   click on the "pencil" icon of the "Cost center" and select the cost center from the list
-   "save" the modifications

### Assign a Cost Center to a Workstation

To assign a cost center to a workstation from the plan,

-   click on the workstation to link
-   in the workstation's record to the left of the plan, click on "Edit"
-   click on the "pencil" icon of the "Cost center" and select the cost center from the list
-   "save" the modifications
