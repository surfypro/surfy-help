---
sidebar_position: 1
---

# Getting Started Guide

## Prerequisites for Using Booking with Surfy

Surfy offers to digitize building plans to globally facilitate workplace environment management.<br />
To use Surfy's booking features, the company must have a Surfy platform.<br />

If the company is not yet using Surfy, it is necessary to contact our teams via our [contact page](https://www.surfy.pro/contact).<br />
A dedicated platform will be assigned to you, a building must be digitized and people created.<br />

If the company's plans are already digitized in Surfy, booking features are available immediately, after the company accepts the booking license with Surfy ([Contact us](https://www.surfy.pro/contact)), and after [configuring assignment neighborhoods](/docs/tutorials/dimensionTypeToBuilding/create) and [assigning collaborators to assignment neighborhoods](/docs/tutorials/affectations/dimensiontoperson/create).



## Available Booking Features

Booking features are only available in French.<br />
Each authorized collaborator can use Surfy's booking features to:

-   book a workstation
-   indicate that you are teleworking
-   see which colleagues have booked a workstation in your neighborhood
-   search for a colleague and get their bookings for the upcoming booking period
-   visualize all bookings on a floor for a given day

## Configure Booking Settings

Booking configuration settings are accessible by the Surfy administrator.<br />

### Configure the Booking Window

To configure the booking window, from the left menu,

-   click on "Administration" then "Companies" then "Company view in tiles"
-   click on the "pencil" icon at the bottom of the company's record to "edit company XXX"
-   defining the "number of planning days" allows you to establish the number of days for the sliding booking window

:::tip AT THIS STAGE
Checking the "Activate dimension overload for booking" box allows you to activate priority management on booking neighborhoods.
If a collaborator's booking neighborhood is saturated, Surfy can propose to the collaborator to book on another neighborhood whose priority is lower.
:::

-   save the modification
-   click on the company logo at the top left of the screen, and refresh (F5).

### Manage Booking Neighborhood Priorities

To activate priority management on assignment neighborhoods, it is necessary to check the "Activate dimension overload for booking" box in the company's record (See above).

Each booking neighborhood has an "overload rate for booking" indicating the fill rate from which it is considered saturated. By default, this rate is set to 85% (0.85).

To modify a booking neighborhood's overload rate, from the left menu,

-   click on "Administration", "Analysis Layers", "Analysis Layers" then "List analysis layers"
-   click on the icon at the beginning of the line of the layer to modify for "Edit analysis layer XXX".
-   modify the value of "Overload rate for booking" (1=100%)
-   save the modifications.

Each collaborator assignment to a neighborhood has a priority number.<br />
By default, the priority number is "0" and corresponds to maximum priority.<br />
The higher the priority number, the lower the neighborhood priority will be.

To modify a neighborhood assignment's priority, from the left menu,

-   click on "Assignments", "Assignments to assignment layers" then "List assignments to assignment layers"
-   click on the icon at the beginning of the line of the assignment to modify for "Edit assignment to assignment layer XXX"
-   modify the "Priority" value
-   save the modifications.

If a collaborator's assignment to a neighborhood has a priority of "0", the corresponding neighborhood will systematically be proposed to the collaborator for booking.

If a neighborhood's overload rate for booking is reached and a collaborator assigned to this neighborhood is also assigned to a lower priority neighborhood on the same building, the lower priority neighborhood is proposed to them for booking.

Several collaborator assignments to neighborhoods can have an identical priority number. The corresponding neighborhoods will then follow an identical priority rule.<br />

:::tip GOOD TO KNOW
A saturated neighborhood can indicate an occupancy of more than 100%. Indeed, if bookings have been made in half-day, the number of bookings can then exceed the number of bookable workstations.
:::


## Access to Booking Features

Booking in Surfy is accessible to collaborators in the application via a browser, or from Teams by adding the "Surfy" application.

To access Surfy via a browser, go to [app.surfy.pro](https://app.surfy.pro/login) from Chrome, Edge, Firefox, Safari,...
then the collaborator uses their account to access the features they are authorized to use.

To add the Surfy application in Teams, the collaborator clicks on "Applications" and searches for "Surfy" to add it to their Teams applications.
Once added in Teams, the application allows the collaborator to access the features they are authorized to use.

Both accesses lead to the same features.<br />
Using Teams offers a more direct experience and better adapted to using booking features on smartphone.

More information on [booking features via the Surfy application](/docs/tutorials/booking/workplace) and for [using Teams for booking features](/docs/tutorials/booking/teams).

# Application Security & Compliance for IT Administrators

The application is hosted at Microsoft Azure France. It complies with GDPR regulations.

Find all our commitments on [security](https://www.surfy.pro/security)

# Deployment & Adoption for IT Administrators

In order to be able to load user images, the company administrator must give their consent.
The requested consents are as follows:

- profile
- email
- openid
- offline_access
- User.Read

# How to Get Support?

Our team remains available to support you, please refer to our [contact page](https://www.surfy.pro/contact) to get help.
