---
sidebar_position: 6
pagination_label: "Releasable workstations for booking"
title: "Releasable workstations for booking"
---

# Releasable workstations for booking

A fixed-assignment workstation can be made bookable on a given day when the collaborator assigned to that workstation has declared their absence for that day.

## Configure releasable workstations

### Enable the "releasable workstations" option

To enable for the entire platform the ability to book fixed-assignment but releasable workstations, from the left menu,

-   click on "Administration", "Companies", then "Companies tile view"
-   click on the "Pencil" icon at the bottom of the company card to "modify company XXX"
-   check <P code="company:enableStaticDeskReleaseOnAbsence" />
-   save the modifications

### Configure a releasable workstation

To define a workstation as releasable, from the floor plan,

-   click on the workstation concerned
-   click on "Modify" in the workstation card on the left of the plan
-   check <P code="workplace:isReleasable" />
-   save the modification

## Declaring a released workstation

The collaborator assigned to a releasable workstation can declare remote work or leave from the [booking page](/en/docs/tutorials/booking/workstationbooking/workplace/). <br />
If their workstation is declared "releasable", it becomes available for booking for collaborators assigned to the district that the releasable workstation belongs to.

The color of a releasable and bookable workstation is slightly different from a classic bookable workstation (light green) when booking by authorized collaborators.

A releasable workstation cannot be booked for a half-day, nor on days when the person assigned to the workstation has not declared their absence. In those cases, it remains a classic fixed-assignment workstation.
