---
sidebar_position: 1
pagination_label: "Getting Started Guide"
title: "Getting Started Guide"
---

# Getting Started Guide

This guide details the process for implementing workstation booking with Surfy.

## Prerequisites for using booking with Surfy

Surfy offers to digitize building plans to facilitate overall workplace environment management.<br />
To use Surfy's booking features, the company must have a Surfy platform.<br />

If the company is not yet using Surfy, it is necessary to contact our teams via our [contact page](https://www.surfy.pro/en-gb/contact).<br />
A dedicated platform will be assigned to you, a building must be digitized, and people must be created.<br />

If the company's plans are already digitized in Surfy, booking features are available immediately, after the company accepts the booking license with Surfy ([Contact us](https://www.surfy.pro/en-gb/contact)), and after [configuring assignment districts](/en/docs/tutorials/dimensiontypetobuilding/create) and [assigning collaborators to assignment districts](/en/docs/tutorials/affectations/dimensiontoperson/create).

## Workstation booking features

Each authorized collaborator can use Surfy's workstation booking features to:

-   book a workstation
-   indicate that they are working remotely
-   see which colleagues have booked a workstation in their district
-   search for a colleague and view their bookings for the upcoming booking period
-   view all bookings on a floor on a given day

## Booking configuration settings

Booking configuration settings are accessible to users with an Administrator role in Surfy.

To access booking configuration settings, from the left menu,

-   click on "Administration" then "Companies" then "Company tile view"
-   click on the "pencil" icon at the bottom of the company card to "modify company XXX"

The following settings are available:

### Number of planning days

The "number of planning days" corresponds to the number of working days available to users in the booking window.

### Enable dimension overload for booking

Checking the "Enable dimension overload for booking" box activates priority management on booking districts.<br />
If a collaborator's booking district is saturated, Surfy can offer the collaborator to book in another district with lower priority.<br />

### Enable booking by building when all dimensions are overloaded

Checking the "Enable booking by building when all dimensions are overloaded" box enables booking across the entire building if all of a collaborator's booking districts are saturated.

Districts checked with "Workplaces bookable only via dimension" will not be accessible for booking. See the chapter [Enable building booking when all dimensions are crowded](/en/entities/user-guide/booking/enable-building-booking-when-all-dimensions-are-crowded).

### Workstation booking confirmation time window

By defining a time window, the presence confirmation feature is enabled.<br />
On the day of the booking and within this time window, the user can:

-   confirm their presence by clicking on "Confirm your presence"; their workstation is reserved.
-   not confirm their presence; their workstation is released at the end of the confirmation window.

Save the modifications and refresh the page (F5).<br />

## Manage booking district priorities

To activate priority management on assignment districts, you must check the "Enable dimension overload for booking" box in the company card (see above).

Each booking district has an "overload rate for booking" indicating the fill rate from which it is considered saturated. By default, this rate is set to 85% (0.85).

To modify the overload rate of a booking district, from the left menu,

-   click on "Administration", "Analysis layers", "Analysis layers" then "List analysis layers"
-   click on the icon at the beginning of the row of the layer to modify to "Modify analysis layer XXX".
-   modify the value of the "Overload rate for booking" (1=100%)
-   save the modifications.

:::tip GOOD TO KNOW
Checking the "Workplaces bookable only via dimension" box for a layer excludes access to booking for collaborators not directly assigned to this layer, who will not be able to book in this district if their original district is overloaded. Collaborators assigned to the layer retain all options if the district is saturated. This option prevents a district from being saturated when opening booking to the entire building following saturation.
:::

Each collaborator assignment to a district has a priority number.<br />
By default, the priority number is "0" and corresponds to maximum priority.<br />
The higher the priority number, the lower the district priority will be.

To modify the priority of an assignment to a district, from the left menu,

-   click on "Assignments", "Assignment layer assignments" then "List assignment layer assignments"
-   click on the icon at the beginning of the row of the assignment to modify to "Modify assignment layer assignment XXX"
-   modify the "Priority" value
-   save the modifications.

If a collaborator's assignment to a district has a priority of "0", the corresponding district will always be offered to the collaborator for booking.

If the overload rate for booking a district is reached and a collaborator assigned to this district is also assigned to a lower-priority district in the same building, the lower-priority district is offered to them for booking.

Multiple assignments of a collaborator to districts can have the same priority number. The corresponding districts will then follow the same priority rule.<br />

:::tip GOOD TO KNOW
A saturated district can show occupancy of more than 100%. Indeed, if bookings have been made for half-days, the number of bookings can exceed the number of bookable workstations.
:::

## Access to booking features

Booking in Surfy is accessible to collaborators in the application via a browser, or from Teams by adding the "Surfy" application.

To access Surfy via a browser, go to [app.surfy.pro](https://app.surfy.pro/login) from Chrome, Edge, Firefox, Safari,...<br />
The collaborator then uses their account to access the features they are authorized for.

To add the Surfy application in Teams, click on "Applications" and search for "Surfy" to add it to Teams applications.
Once added in Teams, the application provides access to the authorized Surfy features.

Both access methods lead to the same features.<br />
Using Teams offers a more direct experience and is better suited for using booking features on a smartphone.

More information on [booking features via the Surfy application](/en/docs/tutorials/booking/workstationbooking/workplace) and [using Teams for booking features](/en/docs/tutorials/booking/workstationbooking/teams).

# Application security & compliance for IT administrators

The application is hosted at Microsoft Azure France. It complies with GDPR regulations.

Find all our commitments on [security](https://www.surfy.pro/en-gb/security)

# Deployment & adoption for IT administrators

In order to load user images, the company administrator must give their consent.
The requested consents are as follows:

- profile
- email
- openid
- offline_access
- User.Read

# How to get support?

Our team remains available to support you. Please refer to our [contact page](https://www.surfy.pro/en-gb/contact) for help.
