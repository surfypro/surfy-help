---
sidebar_position: 1
---

# Recharge Spaces by Cost Center

Surfy offers automatic calculation of distribution keys and cumulative surfaces by cost center on one or more buildings to distribute and recharge building charges in proportion to occupancy surfaces or people assigned to these spaces.


To recharge spaces by cost centers in Surfy, all spaces to be charged must be filled in with their cost center and cost distribution type.

To recharge a space entirely to its cost center, the space's cost distribution type must be "cost center by space".

To recharge surface ratios by workstations of a space to their cost center, all workstations to be charged must be filled in with their cost center and the cost distribution type of their belonging space must be "cost center by workstation".


You can choose the cost distribution type for each space, and thus mix spaces recharged by space and space ratios charged by workstation.

## Visualize Cost Centers on the Plan

You can visualize the cost center of each space and each workstation on the plan by clicking on the vertical "Euro" icon then selecting the cost centers to display on the "SPACES" and "WORKSTATIONS" tabs.
Cumulative data by cost center is available by clicking on the butterfly at the end of the cost center line or on the global opening butterfly.


For more information on cost distribution types, see the chapter [Cost Distribution Type](/en/docs/tutorials/costcenter/create.md#cost-distribution-type).


## Distribution Keys and Qualified Surfaces by Cost Center

Une fois ces informations entrées, à partir de la page d’accueil, cliquer sur l’icône au bout de la ligne de couleur du bâtiment pour demander les « Clés de répartition et surfaces qualifiées par Centre de Coût pour le bâtiment XXX » 

You get, by Cost Center, cumulative surfaces and financial distribution keys. 

Cost centers to be distributed are not distributed in this table. They are present in the list like any other cost center. 

By opening the butterfly to the left of each cost center, you get the detailed list of each space and workstations of each space, attached to the cost center, with the surface to recharge and the internal distribution key to the cost center for the space or workstations of the space. 

Le centre de coût nommé "-" liste les erreurs sur les espaces et les postes de travail qui ont un "type de distribution des coûts" mais pas de "centre de coût". On peut facilement compléter le centre de coût en cliquant sur le nom de chacun des espaces ou postes de travail listés dans cet onglet jusqu’à tout renseigner et retirer de la liste. 

Spaces and workstations without "cost distribution type" appear nowhere and their surface is counted nowhere. 

:::tip Good to Know
Clicking on any space name to the left of the lists returns to the concerned space's environment, on the plans. You can then directly modify the information, then after refresh (F5) return to the updated distribution keys.
:::


## Distribute Common Areas

Example of distributing the "common areas" cost center between two other cost centers:

<Youtube code="hc4hrITcg4o"/>


## Excel File Exports 

Data is available in Excel files, with or without distribution, by floor or for the entire building:



### Excel File, by Floor with Distribution

-   column A: Floor Name  
-   column B: Cost Center (Cost Center Name)
-   column C: Space surfaces including floor distributions (Surface to recharge, by floor and CC)
-   column D: Space surfaces before distribution (Surface attributed to each CC, by floor)
-   column E: Floor distribution keys with distribution (the sum of keys per floor gives 1)
-   column F: Space surfaces to distribute on the floor (proportion of distributed surface on the CC)
-   column G: Total floor surface including surfaces to distribute (Sum of all surfaces having a CC)
-   column H: Total surface to distribute on the floor (Sum of all surfaces to distribute on the floor)
-   column I: Floor surface to distribute on the building (Sum of surfaces to distribute on the building)


 ### Excel File, by Building with Distribution

-   column A: Cost Center (Cost Center Name) 
-   column B: Space surfaces including distributions (Surface to recharge, by CC) 
-   column C: Building distribution keys with distribution (The sum of keys on the building gives 1) 
-   column D: Space surfaces to distribute (proportion of distributed surface on the CC) 
-   column E: Space surfaces before distribution (Surface attributed to each CC) 
-   column F: Total surface to distribute in the building (Sum of all surfaces to distribute on the building) 
-   column G: Total non-distributed building surface (Sum of all non-distributed surfaces on the building) 
-   column H: Total building surface including surfaces to distribute (Sum of all surfaces having a CC) 


### Excel File, without Distribution

-   column A: Cost Center (Cost Center Name) 
-   column B: Surface (Surface to recharge, by CC) 
-   column C: Distribution Keys (the sum of keys on the building gives 1) 


### Excel File, Details without Distribution

-   column A: Cost Center (Cost Center Name) 
-   column B: Type (entity to recharge, space or workstation) 
-   column C: Space (concerned space) 
-   column D: Floor (concerned floor) 
-   column E: Building (concerned building) 
-   column F: Surface (Surface to recharge) 
-   column G: Distribution key for the building (The sum of keys on the building gives 1) 
-   column H: Number of workstations (number of workstations of the CC) 
-   column I: Total number of workstations (total number of workstations in the space) 
-   column J: Distribution key for the cost center (The sum of keys on the CC gives 1) 

