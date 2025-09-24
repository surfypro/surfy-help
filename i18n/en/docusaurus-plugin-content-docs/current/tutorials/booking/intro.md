---
sidebar_position: 1
pagination_label: "Getting Started Guide"
title: "Getting Started Guide"
---

# Getting Started Guide

## Prerequisites for Using Booking with Surfy

Surfy offers to digitize building plans to facilitate overall workplace environment management.<br />
To use Surfy's booking features, the company must have a Surfy platform.<br />

If the company is not yet using Surfy, it is necessary to contact our teams via our [contact page](https://www.surfy.pro/en-gb/contact).<br />
A dedicated platform will be assigned to you, a building must be digitized and people created.<br />

If the company's plans are already digitized in Surfy, booking features are available immediately, after the company accepts the booking license with Surfy ([Contact us](https://www.surfy.pro/en-gb/contact)), and after [configuring assignment districts](/en/docs/tutorials/dimensionTypeToBuilding/create) and [assigning collaborators to assignment districts](/en/docs/tutorials/affectations/dimensiontoperson/create).



## Available Booking Features

Booking features are available only in French.<br />
Each authorized collaborator can use Surfy's booking features to:

-   book a workstation
-   indicate that you are working remotely
-   see which colleagues have booked a workstation in your district
-   search for a colleague and get their bookings for the upcoming booking period
-   view all bookings on a floor on a given day

## Booking Settings Configuration

Booking configuration settings are accessible by the Surfy administrator.<br />

### Booking Window Configuration

To configure the booking window, from the left menu,

-   click on "Administration" then "Companies" then "Company Tile View"
-   click on the "pencil" icon at the bottom of the company card to "modify company XXX"
-   defining the "number of planning days" allows you to establish the number of days in the sliding booking window

:::tip AT THIS STAGE
Checking the "Enable dimension overload for booking" box allows you to activate priority management on booking districts.
If a collaborator's booking district is saturated, Surfy can offer the collaborator to book on another district with lower priority.
:::

-   save the modification
-   click on the company logo at the top left of the screen, and refresh (F5).

### Manage Booking District Priorities

To activate priority management on assignment districts, it is necessary to check the "Enable dimension overload for booking" box in the company card (See above).

Each booking district has an "overload rate for booking" indicating the fill rate from which it is considered saturated. By default, this rate is set to 85% (0.85).

To modify the overload rate of a booking district, from the left menu,

-   click on "Administration", "Analysis Layers", "Analysis Layers" then "List Analysis Layers"
-   click on the icon at the beginning of the line of the layer to modify to "Modify Analysis Layer XXX".
-   modify the value of the "Overload Rate for Booking" (1=100%)
-   save the modifications.

Each collaborator assignment to a district has a priority number.<br />
By default, the priority number is "0" and corresponds to maximum priority.<br />
The higher the priority number, the lower the district priority will be.

To modify the priority of an assignment to a district, from the left menu,

-   click on "Assignments", "Assignment Layer Assignments" then "List Assignment Layer Assignments"
-   click on the icon at the beginning of the line of the assignment to modify to "Modify Assignment Layer Assignment XXX"
-   modify the "Priority" value
-   save the modifications.

If a collaborator's assignment to a district has a priority of "0", the corresponding district will be systematically offered to the collaborator for booking.

If the overload rate for booking a district is reached and a collaborator assigned to this district is also assigned to a lower priority district in the same building, the lower priority district is offered to them for booking.

Multiple assignments of a collaborator to districts can have the same priority number. The corresponding districts will then follow the same priority rule.<br />

:::tip GOOD TO KNOW
A saturated district can indicate occupancy of more than 100%. Indeed, if bookings have been made in half-days, the number of bookings can then exceed the number of bookable workstations.
:::


## Access to Booking Features

Booking in Surfy is accessible to collaborators in the application via a browser, or from Teams by adding the "Surfy" application.

To access Surfy via a browser, go to [app.surfy.pro](https://app.surfy.pro/login) from Chrome, Edge, Firefox, Safari,...
then the collaborator uses their account to access the features they are authorized for.

To add the Surfy application in Teams, the collaborator clicks on "Applications" and searches for "Surfy" to add it to their Teams applications.
Once added to Teams, the application allows the collaborator to access the features they are authorized for.

Both accesses lead to the same features.<br />
Using Teams offers a more direct experience and better suited for using booking features on smartphone.

More information on [booking features via the Surfy application](/en/docs/tutorials/booking/workplace) and for [using Teams for booking features](/en/docs/tutorials/booking/teams).

# Application Security & Compliance for IT Administrators

The application is hosted at Microsoft Azure France. It complies with GDPR regulations.

Find all our commitments on [security](https://www.surfy.pro/en-gb/security)

# Deployment & Adoption for IT Administrators

In order to load user images, the company administrator must give their consent.
The requested consents are as follows:

- profile
- email
- openid
- offline_access
- User.Read

# How to Get Support?

Our team remains available to support you, please refer to our [contact page](https://www.surfy.pro/en-gb/contact) to get help.
