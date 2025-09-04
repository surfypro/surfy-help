---
sidebar_position: 2
---
# Edit a Person


## Search for a person

You can access the person's file in several ways:

-       through the magnifying glass by performing a search then clicking on the searched person
-       through the [filtered list](/docs/courses/find/listfindcourse) of people ("collaborators", "People", "List people" then "filter people")
-       through the person's assignment by clicking in the space or on the person's workstation then on the "see more options for the person" icon next to the assigned person's name in the space or workstation file
-       through the file of the object associated with the person, by clicking on the object then on the "see more options for the person" icon
-       through the file of people in relationship with this person (manager, managed person)


:::tip Good to know
From the "See more options for the person" icon, you can also "See the person's information in the sidebar" to display the person's information on the right side of the screen
:::

## Edit a person's information

To edit a person's information,

-   search for the person with the magnifying glass, by name, first name or employee number
-   click on the searched result
-   in the context menu (gray label under the search magnifying glass), click on "edit person XXX". 
-   modify the optional information: 
        -   <P code="person:email" />, <P code="person:picture" />, <P code="person:title" /> of the person, <P code="person:monitorReference" />, <P code="person:computerReference" />, <P code="person:telephone" />, <P code="person:cellphone" />, <P code="person:code" />, <P code="person:startDate" />, <P code="person:endDate" />, <P code="person:info" />
        -   the <P code="person:notAffectable" /> property allows qualifying people who cannot be assigned, people on maternity leave or long-term leave
        -   indicate the person's <P code="person:organization" /> from the list of already created organizations
        -   fill in the <P code="person:personState" />, the <P code="person:personSecurityProfile" />, the <P code="person:costCenter" />, the person's <P code="person:company" />
        -   validate the modifications.




## Identification key

To update people's information in Surfy, an identification key is necessary to find people while avoiding using their first name and last name, which are prone to errors.

Different keys are possible:

-   the person's <P code="person:code" /> is the first reliable key to use.
-   the <P code="person:email" /> is also a unique field and can be used as the person's identification key
-   the "full name" can however be used in the case of a mastered nomenclature (spelling and case)
-   the unique Surfy identifier delivered by Surfy, available from a people export.

The Surfy identifier is the identification key of each entity in Surfy. It is assigned by Surfy and is unique.
Each person has a unique identifier that allows identifying the person during an export then reimport of data.

When importing modifications on people in Surfy and to correctly identify the concerned people, the column with the key must necessarily be joined to the columns containing the information to import.

## Resolve People duplicates

Resolving people duplicates is done in three steps: Duplicate detection, information merging and deletion of the unnecessary duplicate.

<Youtube code="tm65Pwrhogo"/>

Surfy's database may contain people duplicates: Incorrectly spelled names or first names, hyphens or accents present or not, incorrect Email address or employee number. Detected duplicates are isolated in Surfy thanks to the presence of a common key.
Once duplicates are isolated, you can choose and merge information then delete the duplicate person.

To list duplicates, in the left menu of the screen,

-       click on "Collaborators", "People" then "Reports and actions for people data quality"
-       request "Duplicate people"

Duplicates are listed in three categories according to the detected common key: Email, Employee number or Full name.
The number of duplicates is indicated in each category.

To resolve duplicates,

-       click in the category containing duplicates
-       click on the duplicate to resolve
-       choose one of the duplicates as a starting base by checking the corresponding "Merge" box (columns 1 or 2)
-       the "merge result" displays the information of the chosen duplicate (column 3)
-       click on the information of the non-chosen duplicate to retrieve its information in the merge
-       the information selected for the merge is in gray in the duplicate columns and displayed in the "merge result"
-       "Merge" duplicates at the bottom of the page gathers the grayed information in the chosen duplicate, the non-chosen duplicate is deleted.


## Edit people by Excel file

-   export to Excel the list of people to modify through the people report or the [filtered list](/docs/courses/find/listfindcourse) of people
-   complete the information to import in the columns with their headers
-   select the column containing the identification key
-   also select the columns that have been filled in
-   copy/paste into a new sheet of the Excel file. The columns used must be adjacent.
 -  select all with "ctrl A", copy with "ctrl C"
 -  in the people import window in Surfy, paste the information with "ctrl V"
 -  "compare" the file information with Surfy's database to detect modifications made on people.
 -  update all people's information in Surfy by clicking on "Update".
 -  people modifications are imported into Surfy's database.




