---
sidebar_position: 0
---

# Access to Surfy

## SaaS Mode

SaaS, or Software as a Service, is a licensing and distribution model used to provide software applications over the Internet as a service. Users access applications through a subscription.

Access to Surfy is done in SaaS mode. The application and data are hosted in France on Microsoft Azure servers.

## Data Security

[Why data security is our priority](https://www.surfy.pro/en-gb/security)

## Who can access Surfy?

The future user accesses their company's Surfy platform by creating a secure account validated by the company.
Accessible features are determined by the company, based on the rights reserved for the user.
Visible content is also determined by the company based on the user.

## Create a User

### Account Creation Request

To access Surfy, the company must be subscribed to the solution.<br />
The future user can then create a [SURFY](/en/docs/access/surfy) account, a Microsoft [OFFICE 365](/en/docs/access/office365) account, or a [GOOGLE](/en/docs/access/google) account and request connection to the relevant company platform.<br />
If the company uses secure access via a [BUSINESS](/en/docs/access/company) account, the future user can directly access the relevant platform by clicking on this box.

### Company User

The company's Surfy administrator receives the connection request from the future user.

To accept the future user, the administrator must:

-   in the left menu, click on "Administration" then "Security" and "Company Users" to "Create a Company User". 
-   click on the "pencil" icon next to "User"
-   type the complete email address of the future user
-   click on the future user's email address to select it
-   validate the creation.

:::tip GOOD TO KNOW
If no email address appears when typing the complete and exact address of the future user, the account creation request is incomplete or must be repeated.
:::

The company user is created, it remains to assign them a user role, and possibly a content role.<br />
Once these roles are given, the user can freely access the platform according to the assigned roles.


## User Role

User roles are pre-programmed in Surfy.<br />
They cannot be modified by the company's Surfy administrator.<br />
Each user role is created for a specific set of features.
The company's Surfy administrator can assign features by combining roles to different users from an exhaustive list of roles.


### Assign a User Role

To assign a user role to a user, from the left menu,

-   click on "Administration" then "Security" and "Company Users" to "List Company Users".
-   click on the "red dot" icon at the beginning of the line of the concerned user to "modify company user xxxx@xx"
-   click on "Company User Role" then on "CREATE A COMPANY USER ROLE"
-   click on the "Pencil" icon of the "Role".

The list of available roles appears

-   choose the role to assign then "Validate Creation"

The role is added to the list at the bottom of the box. Multiple roles can be combined for the same user.

-   click on "Administration" then "Security" and "Company Users" to "List Company Users" to verify the roles assigned to each.

:::tip TIP
To verify the correct access configuration of a user, you can use a third-party account, configure it with the desired settings and then access the platform.
To access both accounts simultaneously (admin and third-party), it is necessary to use two different browsers or be in private browsing.
:::


### Modify a User's Role

To modify a company user's role, you can remove a role and then assign another role more suitable for their use of Surfy.

To remove a role from a company user,

-   click on "Administration" then "Security" and "Company Users" to "List Company Users".
-   click on the "red dot" icon at the beginning of the line of the concerned user to "modify company user xxxx@xx"
-   click on "Company User Role"
-   check the box at the beginning of the line of the role to remove
-   click on the trash can that appears
-   confirm the deletion

## Content Role

### Assign a Content Role to a Company User

The content role allows you to choose the floors or buildings that will be visible to the concerned user.

To assign a content role to a company user, in the left menu,

-   click on "Administration" then "Security" and "Company Users" to "List Company Users".
-   click on the "red dot" icon at the beginning of the line of the concerned user to "modify company user xxxx@xx"
-   click on "Company User Content Role" then on "CREATE A COMPANY USER CONTENT ROLE"

The list of available content roles appears. If the desired content role does not appear, you must [create a content role](docs/access/intro#create-a-content-role) in order to assign it to the user.

-   choose the content role to assign to the user then "Validate Creation".

The content role is added to the list at the bottom of the box. Multiple content roles can be combined for the same user.

-   click on "Administration" then "Security" and "Company Users" to "List Company Users" to verify the roles assigned to each.

:::tip TIP
To verify the correct access configuration of a user, you can use a third-party account, configure it with the desired settings and then access the platform.
To access both accounts simultaneously (admin and third-party), it is necessary to use two different browsers or be in private browsing.
:::

### Modify a Company User's Content Role

To modify a company user's content role, you can remove a content role and/or assign another content role more suitable for their use of Surfy.

To remove a content role from a company user,

-   click on "Administration" then "Security" and "Company Users" to "List Company Users".
-   click on the "red dot" icon at the beginning of the line of the concerned user to "modify company user xxxx@xx"
-   click on "Company User Content Role"
-   check the box at the beginning of the line of the content role to remove
-   click on the trash can that appears
-   confirm the deletion


## Create a Content Role

You can create content roles composed of floors or buildings.

:::warning ATTENTION
If you only use content roles composed of entire buildings, creating floor-level content roles is not necessary.
However, if a content role contains one or more floors of a building, content roles containing the entire building must include all floors of the building and not the entire building.
:::

### Building Content Role

To create a content role assignable to users, in the left menu,

-   click on "Administration" then "Security" then "Content Role" to "create a content role".
-   name the content role to create (example: BUILDING A only) and validate the creation
-   click on "Content Role Association to Buildings" then on "CREATE A CONTENT ROLE ASSOCIATION TO BUILDINGS"
-   click on the "Pencil" icon next to the "Building" line to select a building entering the content role, and validate the creation
-   add all accessible buildings to the content role

The selected buildings are added to any buildings already associated with the content role, listed at the bottom of the box.


### Floor Content Role

To define a content role by floor, each concerned floor must be included in a content role.<br />

-   click on "Administration" then "Security" then "Content Role" to "create a content role".
-   name the content role to create (example: R+1 BUILDING A only) and validate the creation
-   click on "Content Role Association to Floors" then on "CREATE A CONTENT ROLE ASSOCIATION TO FLOORS"
-   click on the "Pencil" icon next to the "Floor" line to select a floor entering the content role, and validate the creation
-   add all accessible floors to the content role

If you use a floor content role for a building, to view the complete building you must integrate all floors of the building into a building-specific content role and assign it to the user, or add the content roles of each floor to the concerned user.

## Remove a Company User

To remove a company user, in the left menu,

-   click on "Administration" then "Security" and "Company Users" to "List Company Users".
-   check the box at the beginning of the line of the user to remove
-   click on the trash can at the top of the page
-   confirm the deletion

As soon as they are removed, the user no longer has access to the company's Surfy platform.

:::tip GOOD TO KNOW
The user removed from their company is still potentially reassignable to the platform. Simply follow the same company user creation procedure, without the user having to request access again.
:::

## Automatic Authentication

Automatic authentication allows automatically granting access to a platform to future users, if they meet the necessary conditions:

-   Email with a domain name specified in automatic authentication
-   Connection type compliant with the choice indicated in automatic authentication

The user then has direct access to the platform, following the rights specified in automatic authentication.

### Create an Automatic Authentication Rule

To create an authentication rule, from the left menu,

-   click on "Administration" then "Authentication" and "Create an Authentication Rule".
-   click on the "Pencil" icon of the "authentication connection" to choose the connection type:

        -   by OFFICE365: choose "AzureADv2"
        -   by GOOGLE: choose "google-oauth2"
        -   by SURFY ACCOUNT: choose "auth0"

-   in the "Name" box, give a name to the authentication
-   in the "Domains" box, indicate the domain name(s) accepted by the authentication (@XXX.com). If multiple domain names are accepted, separate the domain names with a space
-   check the "Automatically associate roles" box to give a common role to users accepted by automatic authentication
-   validate the creation

You can then associate a user role and possibly a content role for users accepted by automatic authentication:

-   click on "Authentication Rule Associations to Role" then "CREATE AN AUTHENTICATION RULE ASSOCIATION TO ROLE" to choose the user role for accepted collaborators.
-    click on "Authentication Rule Associations to Content" then "CREATE AN AUTHENTICATION RULE ASSOCIATION TO CONTENT" to choose the content role visible to accepted collaborators.

If no content role is associated, accepted users will have access to all buildings on the platform.<br />
If no user role is associated, or if the "Automatically associate roles" box is not checked, the user is accepted on the platform but cannot access it until the administrator has given them a user role.