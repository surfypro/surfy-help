---
sidebar_position: 1
---

# Recharge Spaces by Cost Center

Surfy offers automatic calculation of distribution keys and cumulative surfaces per cost center on one or several buildings to distribute and recharge building charges proportionally to occupation surfaces or people assigned to these spaces.


To recharge spaces by cost centers in Surfy, all spaces to be charged must be filled in on their cost center and cost distribution type.

To recharge a space entirely to its cost center, the space's cost distribution type must be "cost center by space".

To recharge surface ratios by workstations of a space to their cost center, all workstations to be charged must be filled in on their cost center and the cost distribution type of their belonging space must be "cost center by workstation".


You can choose the cost distribution type for each space, and thus mix spaces recharged by space and space ratios charged by workstation.

## Visualize Cost Centers on the Plan

You can visualize the cost centers of each space and each workstation on the plan by clicking on the vertical "Euro" icon then selecting the cost centers to display on the "SPACES" and "WORKSTATIONS" tabs.
Cumulative data per cost center is available by clicking on the butterfly at the end of the cost center line or on the global opening butterfly.


For more information on cost distribution types, see the chapter [Cost Distribution Type](/docs/tutorials/costcenter/create.md#cost-distribution-type).


## Distribution Keys and Qualified Surfaces by Cost Center

Once this information is entered, from the home page, click on the icon at the end of the building's color line to request the "Distribution Keys and Qualified Surfaces by Cost Center for building XXX" 

You obtain, per Cost Center, the cumulative surfaces and financial distribution keys. 

Cost centers to be distributed are not distributed in this table. They are present in the list like any other cost center. 

By opening the butterfly to the left of each cost center, you obtain the detailed list of each space and the workstations of each space, linked to the cost center, with the surface to recharge and the internal distribution key to the cost center for the space or the space's workstations. 

The cost center named "-" lists errors on spaces and workstations that have a "cost distribution type" but no "cost center". You can easily complete the cost center by clicking on the name of each space or workstation listed in this tab until everything is filled in and removed from the list. 

Spaces and workstations without "cost distribution type" don't appear anywhere and their surface is not counted anywhere. 

:::tip Good to know
Clicking on any space name to the left of the lists returns to the concerned space's environment, on the plans. You can then modify the information directly, then after refresh (F5) return to the updated distribution keys.
:::


## Distribute Common Areas

Example of distributing the "common areas" cost center between two other cost centers:

<Youtube code="hc4hrITcg4o"/>


## Excel File Exports 

The data is available in Excel files, with or without distribution, by floor or for the entire building:



### The Excel file, by Floor with distribution

-   column A: Floor name  
-   column B: Cost center (Cost Center name)
-   column C: Space surfaces including floor distributions (Surface to recharge, by floor and CC)
-   column D: Space surfaces before distribution (Surface assigned to each CC, by floor)
-   column E: Floor distribution keys with distribution (the sum of keys per floor gives 1)
-   column F: Space surfaces to distribute on the floor (surface distribution ratio on the CC)
-   column G: Total floor surface including surfaces to distribute (Sum of all surfaces having a CC)
-   column H: Total surface to distribute on the floor (Sum of all surfaces to distribute on the floor)
-   column I: Floor surface to distribute on the building (Sum of surfaces to distribute on the building)


 ### The Excel file, by Building with distribution

-   column A: Cost center (Cost Center name) 
-   column B: Space surfaces including distributions (Surface to recharge, by CC) 
-   column C: Building distribution keys with distribution (The sum of keys on the building gives 1) 
-   column D: Space surfaces to distribute (surface distribution ratio on the CC) 
-   column E: Space surfaces before distribution (Surface assigned to each CC) 
-   column F: Total surface to distribute in the building (Sum of all surfaces to distribute on the building) 
-   column G: Total building surface not distributed (Sum of all non-distributed surfaces on the building) 
-   column H: Total building surface including surfaces to distribute (Sum of all surfaces having a CC) 


### The Excel file, without distribution

-   column A: Cost center (Cost Center name) 
-   column B: Surface (Surface to recharge, by CC) 
-   column C: Distribution keys (the sum of keys on the building gives 1) 


### The Excel file, details without distribution

-   column A: Cost center (Cost Center name) 
-   column B: Type (entity to recharge, space or workstation) 
-   column C: Space (concerned space) 
-   column D: Floor (concerned floor) 
-   column E: Building (concerned building) 
-   column F: Surface (Surface to recharge) 
-   column G: Distribution key for the building (The sum of keys on the building gives 1) 
-   column H: Number of workstations (number of workstations of the CC) 
-   column I: Total number of workstations (total number of workstations of the space) 
-   column J: Distribution key for the cost center (The sum of keys on the CC gives 1)
