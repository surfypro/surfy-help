---
sidebar_position: 1
---
# Create a Person


## Create a Person

<Youtube code="eBXD7Atx9Dg"/>

To create a person in Surfy from the home page,
-   click on "collaborators", "people" then on "create a person". 
-   fill in <P code="person:lastname" /> and <P code="person:firstname" />, these two properties are mandatory.
-   "validate" the creation, or complete the optional information: 
        -   <P code="person:email" />, <P code="person:picture" />, <P code="person:title" />, <P code="person:monitorReference" />, <P code="person:computerReference" />, <P code="person:telephone" />, <P code="person:cellphone" />, <P code="person:code" />, <P code="person:startDate" />, <P code="person:endDate" />, <P code="person:info" />
        -   the <P code="person:notAffectable" /> property allows you to qualify people who cannot be assigned, people on maternity leave or long-term leave
        -   indicate <P code="person:organization" /> from the list of already created organizations
        -   fill in <P code="person:personState" />, <P code="person:personSecurityProfile" />, <P code="person:costCenter" />, and optionally the person's Company for service providers.
        -   validate the creation.

:::tip Good to Know
 In the context menu, "list people" allows you to get the list of people already entered in the database. The first person in the list is the last person entered in the database.
 :::


## Identification Key

In order to correctly create people in Surfy and avoid duplicates, an identification key is necessary. It allows you to find people without using their first and last names, which are prone to errors.

Different keys are possible:

-   the person's employee number is the first reliable key to use.
-   email is also a unique field and can be used as the person's identification key
-   the "full name" can however be used in the case of a controlled nomenclature (spelling and case)
-   the unique Surfy identifier delivered by Surfy, available from a people export once people are created in Surfy.

The Surfy identifier is the identification key of each entity in Surfy. It is assigned by Surfy and is unique.
Each person has a unique identifier that allows you to identify the person during an export then a data re-import.


## Import People 

<Youtube code="J-SiqS2Wq8I"/>

You can import people in bulk into Surfy via Excel.

-   from the home page, click on "collaborators", "people", "import people".
-   the "help on data import for people", at the top right of the screen allows you to "download the import template"
-   the downloaded file includes all columns necessary for import in Surfy: first name, last name, email, title, screen reference, computer reference, landline, mobile, employee number, and all possible information to import.

:::tip Good to Know
Column A "Surfy Identifier" is not to be filled in. The identifier is assigned by Surfy, it is unique, non-modifiable and becomes the true identity of the person in the Surfy database.
:::

-   select only the columns that have been filled and copy/paste them into a new sheet of the Excel file. The columns used must be adjacent.
 -  select all with "ctrl A", copy with "ctrl C"
 -  in the people import window in Surfy, paste the information with "ctrl V"
 -  "compare" the file information with the Surfy database to detect people who will be created.
 -  create all people in Surfy, by clicking on "Create All".
 -  people are imported into the Surfy database.


The "help on data import for people" also allows you to choose properties to import thanks to the "copy" icon next to each property:
 
-   copy each desired property for import
-   paste each property as column headers in a blank Excel file
-   fill in the rows with the information to import.
-   select only the columns that have been filled and copy/paste them into a new sheet of the Excel file so that the columns used are adjacent.
 -  select all with "ctrl A", copy with "ctrl C"
 -  in the people import window in Surfy, paste the information with "ctrl V"
 -  "compare" the file information with the Surfy database to detect people who will be created.
 -  create all people in Surfy, by clicking on "Create All".
 -  people are imported into the Surfy database.




:::tip Good to Know
From the "See more options for person" icon, you can also "View person information in the sidebar" to display person information on the right side of the screen
:::