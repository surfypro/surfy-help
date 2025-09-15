---
sidebar_position: 1
---
# Create an Organization

Organizations in Surfy have two hierarchical levels: Departments and Services.

:::warning Important
You can only attach a space, person or workstation to a Service.
:::

Using organizations allows you to attach spaces to Services that report to Departments.
You can then visualize space qualification in colors on plans and get [cumulative data, by Service or by Department](/en/docs/tutorials/organization/edit#visualize-organizations-on-plans).

People and workstations can also be attached to Services.
You can then list people or workstations by organization in filtered lists or in data reports, or know which organization a person belongs to by searching their card with the magnifying glass.


<Youtube code="abpTpTG-4-k"/>



## Organization Hierarchy

-   A Service is always attached to a Department.
-   An organization that has no Department is, in fact, itself a Department.
-   A Department should never be attached to a Department.
-   Only Services are offered for attachment of spaces, people or workstations.


### Hierarchize Organizations in Surfy:

A "Service" has a Department but no attached Service                                  
A "Department" can have attached Services but no Department


:::warning Important
An organization cannot have a "Department" AND one or more "Services".                                        
Indeed, in this case the organization is neither a Department, because it has itself a Department, nor a Service because it has itself Services. The organization not being clearly defined, this corrupts the database in Surfy as well as the display on plans.
:::

To visualize the organization hierarchy in Surfy, from the left menu,

-   click on "organizations", "organizations" then "view organization hierarchy".
-   Departments are at the head of the obtained blocks, Services are listed in each block.
-   clicking on the icon at the end of the line "see more options for organization XXX" then "view organization XXX" allows you to visualize the information of the concerned organization.

## Create a Department

A Department has NO "Department" and can have "Services".

To create a Department, from the left menu,

-   click on "organizations", "organizations" then "create an organization" (or click on the context menu then "create an organization" if already on the organizations page)
-   fill in the Department name and its <P code="organization:color"/>
-   do not fill in a "Department", leave the field empty.
-   validate the creation

The created organization is considered to be a Department
When displaying the "Organization Hierarchy", this Department appears at the head of the block and will be followed by Services attached to this Department. If no Service is yet associated with this Department, the block is not created and only the Department is displayed.

## Create a Service

A Service must have a "Department" and has NO "Service".

To create a Service, its Department must first have been created in Surfy. 

Once the Department is created, to create a Service, from the left menu,

-   click on "organizations", "organizations" then "create an organization" (or click on the context menu then "create an organization" if already on the organizations page)
-   fill in the Service name and its <P code="organization:color"/>
-   fill in the Service's Department by clicking on the pencil of the "<P code="organization:organization" />" and selecting a Department
-   validate the creation

The created organization is considered to be a Service (Department present)
When displaying the "Organization Hierarchy", this Service appears in the block of its attachment Department.


## List Organizations

Listing organizations allows you to verify that no organization is attached at the same time to a "Department and to one or more "Services".
The list also allows you to modify each organization by clicking on the icon at the beginning of the line of the concerned organization.

To list organizations, from the left menu,

-   click on "organizations", "organizations" then "list organizations" (or click on the context menu then "list organizations" if already on the organizations page)
-   the list gives the Department or Services for each organization


## Attach an Organization to an Entity

A space, workstation or person can be attached to a Service which itself is attached to its Department.
The Service's Department is indicated in parentheses behind the Service name. This allows you to give the same name to two Services from different Departments: Example: "Accounting" Service in the "Logistics" Department and "Accounting" Service in the "Purchasing" Department.


:::warning Important
If an organization does not appear in the list of Services to attach, it means no Department is attached to this organization. It is therefore considered itself as a Department. The second possible cause is that this organization is not yet created.
:::

### Attach a Service to a Space

To attach a Service to a space, from the floor plan,

-   click in the space to attach
-   in the space card on the left of the plan, click on "modify" the space
-   click on the "pencil" icon of the "Organization" line to "change organization"
-   choose the space's attachment Service. Its Department is indicated in parentheses.
-   "save" the modification

The space is attached to the concerned Service.

Once spaces are attached, it is necessary to "reload plan data" by clicking on the icon at the top right of the screen, then refresh (F5).
From the floor or building plan, click on the vertical icon "Color spaces on the plan according to organizations" to visualize organizations in color on plans.

Three tabs are offered:
-   SERVICES: displays Services in color and cumulative information of Services
-   DEPARTMENTS: displays Departments in color and cumulative information of Departments
-   HIERARCHY: displays Services in color and cumulative information of Services by Department

By opening the "butterfly" at the end of each organization's line, you get cumulative information for the organization, for the floor or building visualized.

### Attach a Service to a District

Attaching a service to a district involves attaching all spaces in the district to this service.

You must therefore first exit district navigation to be able to access each space in the district:

-   by clicking on the triangular icon at the end of the blue information banner "You are in District navigation, spaces will be grouped together during selection"
-   or by clicking on the vertical icon "Change plan view" then on the "Space Typologies" view.


You can then "Modify" each space to attach its Service (see [Attach a Service to a Space](/en/docs/tutorials/organization/create#attach-a-service-to-a-space)) and thus to all spaces in the concerned district.

To return to district navigation,

-   click on the "Change plan view" icon
-   select the "Districts" view

District navigation is selected and district spaces are attached to the chosen Service.

:::tip Good to Know
The distribution of Services on spaces is independent of the grouping of spaces by district, even if the two entities "Service" and "District" often encompass identical perimeters.
:::


### Attach a Service to a Person

To attach a Service to a person,

-   search for the person with the magnifying glass, under the company logo at the top left of the screen
-   click on the person's name
-   click on the context menu (gray box under the magnifying glass) then on "Modify person XXX"
-   click on the "pencil" icon of "Person's Organization"
-   choose the Service corresponding to the person
-   "Save" the modifications


### Attach a Service to a Workstation

To attach a Service to a workstation,

-   click on the workstation on the plan
-   on the workstation card on the left, click on "Modify"
-   click on the "pencil" icon of the "Organization" line
-   choose the Service corresponding to the workstation
-   "Save" the modifications

