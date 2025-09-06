---
sidebar_position: 2
---
# Modify a Person


## Search for a Person

You can access the person's card in several ways:

-       by the magnifying glass by performing a search then clicking on the searched person
-       by the [filtered list](/en/docs/courses/find/listfindcourse) of people ("collaborators", "People", "List People" then "filter people")
-       by the person's assignment by clicking in the space or on the assigned person's workstation then on the "see more options for person" icon next to the assigned person's name in the space or workstation card
-       by the card of the object associated with the person, by clicking on the object then on the "see more options for person" icon
-       by the card of people in relationship with this person (manager, managed person)


:::tip Good to Know
From the "See more options for person" icon, you can also "View person information in the sidebar" to display person information on the right side of the screen
:::

## Modify Person Information

To modify a person's information,

-   search for the person with the magnifying glass, by name, first name or employee number
-   click on the searched result
-   in the context menu (gray label under the search magnifying glass), click on "modify person XXX". 
-   modify the optional information: 
        -   <P code="person:email" />, <P code="person:picture" />, <P code="person:title" /> of the person, <P code="person:monitorReference" />, <P code="person:computerReference" />, <P code="person:telephone" />, <P code="person:cellphone" />, <P code="person:code" />, <P code="person:startDate" />, <P code="person:endDate" />, <P code="person:info" />
        -   the <P code="person:notAffectable" /> property allows you to qualify people who cannot be assigned, people on maternity leave or long-term leave
        -   indicate the person's <P code="person:organization" /> from the list of already created organizations
        -   fill in the <P code="person:personState" />, <P code="person:personSecurityProfile" />, <P code="person:costCenter" />, the person's <P code="person:company" />
        -   validate the modifications.




## Identification Key

To update people's information in Surfy, an identification key is necessary to find people without using their first and last names, which are prone to errors.

Different keys are possible:

-   the person's <P code="person:code" /> is the first reliable key to use.
-   <P code="person:email" /> is also a unique field and can be used as the person's identification key
-   the "full name" can however be used in the case of a controlled nomenclature (spelling and case)
-   the unique Surfy identifier delivered by Surfy, available from a people export.

The Surfy identifier is the identification key of each entity in Surfy. It is assigned by Surfy and is unique.
Each person has a unique identifier that allows you to identify the person during an export then a data re-import.

When importing modifications on people in Surfy and in order to correctly identify the concerned people, the column with the key must necessarily be joined to the columns containing the information to import.

## Resolve Person Duplicates

Resolving person duplicates is done in three steps: Duplicate detection, information merging and deletion of the unnecessary duplicate.

<Youtube code="tm65Pwrhogo"/>

The Surfy database can contain person duplicates: Misspelled names or first names, hyphens or accents present or not, incorrect Email address or employee number. Detected duplicates are isolated in Surfy thanks to the presence of a common key.
Once duplicates are isolated, you can choose and merge information then delete the duplicate person.

To list duplicates, in the left menu of the screen,

-       click on "Collaborators", "People" then "Reports and actions for data quality for people"
-       request "Duplicate People"

Duplicates are listed in three categories according to the detected common key: Email, Employee Number or Full Name.
The number of duplicates is indicated in each category.

To resolve duplicates,

-       click in the category containing duplicates
-       click on the duplicate to resolve
-       choose one of the duplicates as a starting base by checking the corresponding "Merge" box (columns 1 or 2)
-       the "merge result" displays the information of the chosen duplicate (column 3)
-       click on the information of the non-chosen duplicate to retrieve its information in the merge
-       information selected for merging is grayed out in the duplicate columns and displayed in the "merge result"
-       "Merge" duplicates at the bottom of the page gathers the grayed information in the chosen duplicate, the non-chosen duplicate is deleted.


## Modify People by Excel File

-   export to Excel the list of people to modify by the people report or the [filtered list](/en/docs/courses/find/listfindcourse) of people
-   complete the information to import in the columns with their headers
-   select the column containing the identification key
-   also select the columns that have been filled
-   copy/paste into a new sheet of the Excel file. The columns used must be adjacent.
 -  select all with "ctrl A", copy with "ctrl C"
 -  in the people import window in Surfy, paste the information with "ctrl V"
 -  "compare" the file information with the Surfy database to detect modifications made to people.
 -  update all people's information in Surfy, by clicking on "Update".
 -  people modifications are imported into the Surfy database.


