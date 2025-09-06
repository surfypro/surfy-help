---
sidebar_position: 1
---
# Create an Organization

Organizations in Surfy have two hierarchical levels: Departments and Services.

:::warning Important
You can only attach a space, person or workstation to a Service.
:::

Using organizations allows you to attach spaces to Services that themselves report to Departments.
You can then visualize space qualification by colors on plans and obtain [cumulative data, by Service or by Department](/en/docs/tutorials/organization/edit.md#visualize-organizations-on-plans).

People and workstations can also be attached to Services.
You can then list people or workstations by organization in filtered lists or in data reports, or know which organization a person belongs to by searching their file with the magnifying glass.


<Youtube code="bvOEaYs1prg"/>



## Organization hierarchy

-   A Service is always attached to a Department.
-   An organization that has no Department is, by default, itself a Department.
-   A Department should never be attached to a Department.
-   Only Services are proposed for attaching spaces, people or workstations.


### Hierarchize organizations in Surfy:

A "Service" has a Department but no attached Service                                  
A "Department" can have attached Services but no Department


:::warning Important
An organization cannot have a "Department" AND one or more "Services".                                        
Indeed, in this case the organization is neither a Department, because it has a Department itself, nor a Service because it has Services itself. The organization not being clearly defined, this corrupts the database in Surfy as well as the display on plans.
:::

To visualize the organization hierarchy in Surfy, from the left menu,

-   click on "organizations", "organizations" then "see organization hierarchy".
-   Departments are at the head of the obtained blocks, Services are listed in each block.
-   clicking on the icon at the end of the line "see more options for organization XXX" then "see organization XXX" allows you to visualize the concerned organization's information.

## Create a Department

A Department has NO "Department" and can have "Services".

To create a Department, from the left menu,

-   click on "organizations", "organizations" then "create an organization" (or click on the context menu then "create an organization" if already on the organizations page)
-   fill in the Department's name and its <P code="organization:color"/>
-   do not fill in a "Department", leave the field empty.
-   validate the creation

The created organization is considered to be a Department
When displaying "Organization Hierarchy", this Department appears at the head of the block and will be followed by Services attached to this Department. If no Service is yet associated with this Department, the block is not created and only the Department is displayed.

## Create a Service

A Service must have a "Department" and has NO "Service".

To create a Service, its Department must first have been created in Surfy. 

Once the Department is created, to create a Service, from the left menu,

-   click on "organizations", "organizations" then "create an organization" (or click on the context menu then "create an organization" if already on the organizations page)
-   fill in the Service's name and its <P code="organization:color"/>
-   fill in the Service's Department by clicking on the pencil of the "<P code="organization:organization" />" and selecting a Department
-   validate the creation

The created organization is considered to be a Service (Department present)
When displaying "Organization Hierarchy", this Service appears in its attachment Department's block.


## List Organizations

Listing organizations allows you to verify that no organization is attached at the same time to a "Department and to one or more "Services".
The list also allows you to modify each organization by clicking on the icon at the beginning of the concerned organization's line.

To list organizations, from the left menu,

-   click on "organizations", "organizations" then "list organizations" (or click on the context menu then "list organizations" if already on the organizations page)
-   the list gives the Department or Services for each organization


## Attach an organization to an entity

A space, workstation or person can be attached to a Service that itself attaches to its Department.
The Service's Department is indicated in parentheses behind the Service's name. This allows giving the same name to two Services from different Departments: Example: "Accounting" Service at the "Logistics" Department and "Accounting" Service at the "Procurement" Department.


:::warning Important
If an organization does not appear in the list of Services to attach, it means no Department is attached to this organization. It is therefore considered itself as a Department. The second possible cause is that this organization is not yet created.
:::

### Attach a Service to a space
