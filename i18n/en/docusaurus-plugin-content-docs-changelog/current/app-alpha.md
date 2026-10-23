---
sidebar_position: 2
---

# What's New (alpha)

This page describes **visible changes** already **deployed** on the **Surfy alpha application** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, only **features** are moved to [What's New](./app.md); the **Fixed bugs** sections are **not** copied to production (they are for the test team during the alpha cycle). This page is then hidden by renaming it to `_app-alpha.md`.

## October 23, 2026

- MapLibre 3D Map — detail loading feedback
  - On the <LIV code="building:3d-maplibre" /> view, the first time you enter **Building mode**, a **loading indicator** appears on the building pin / name, with **step detail** in the global loading indicator while the detail is not ready yet.
  - When you **approach** a building, detail preparation can start **before** you click, for a smoother transition.
  - Guide: [MapLibre 3D Map](/entities/user-guide/floor-plan/carte-3d-maplibre#detail-loading).

## October 22, 2026

- Scenario → reference building sync
  - New <LSV code="building:scenarioSync" /> view: from the **reference building**, pick a linked **scenario** to list **gaps** (creates, deletes, edits, different geometry) for spaces, desks, and objects.
  - Then push scenario values to the reference **step by step**: for matching spaces, <P code="room:roomType" />, <P code="room:costCenter" />, then <P code="room:organization" />; for desks and objects, **position / rotation** first, then **properties** (e.g. type).
  - Each step updates **all** matching items at once. Creates and deletes stay visible in the inventory; **space outlines** are listed but **not** applied in this version.

- MapLibre 3D Map — Structure mode and Building mode
  - On the <LIV code="building:3d-maplibre" /> view, start with building **volumes** (**Structure mode**), using the **name list** on the left.
  - A click (or zoom on a building) enters **Building mode**: **read-only** 3D detail, with the **same floor controls** as the Pathfinding view (no route creation).
  - Only one building at a time in Building mode; **zoom out** returns to Structure mode.
  - Guide: [MapLibre 3D Map](/entities/user-guide/floor-plan/carte-3d-maplibre).

## October 5, 2026

- Connectors mode (building Pathfinding)
  - On the <LSV code="building:building-pathfinding" /> view, turn on **Connectors mode** (off by default) to highlight spaces and links tied to connectors, with **vertical lines** between floors.
  - Colors follow the connector type (<OT code="roomConnectorType" /> and <OT code="segmentConnectorType" />); with no color set → **gray**. Edit colors on the type records.
  - Guide: [Pathfinding — Connectors mode](/entities/user-guide/floor-plan/pathfinding-campus#connectors-mode).

## September 30, 2026

- Pathfinding inside a building
  - New <LSV code="building:building-pathfinding" /> view: from a <OT code="building" /> record, choose an **origin** and a **destination** (spaces in that building), then follow the **3D route** on the building map.
  - Available when <P code="company:enablePathfinding" /> is enabled for the company.
  - **Admin**: you can **refresh navigation** for the building so **space connectors** between floors are taken into account; Surfy stays usable while the calculation runs.
  - Guide: [Pathfinding — navigating inside a building](/entities/user-guide/floor-plan/pathfinding-campus).

## September 28, 2026

- 3D room preview from the floor plan
  - On a floor plan (<LIV code="floor:map" />), select a <OT code="room" />: at the bottom of its card, the **3D room preview** icon opens a panel on the right.
  - You see **this room only** in 3D (shape + desks and objects inside), **without** neighboring rooms. Orbit the view with the mouse. **Read-only**: nothing on the plan is changed.
  - Guide: [3D room preview](/entities/user-guide/floor-plan/room-3d-preview).
  <CloudinaryAsset publicId="help/changelog/v3.5.55/room-3d-preview-en" kind="video" asGif width={640} gifFps={8} alt="3D room preview from the floor plan: card icon, right panel, single room only" />

## September 17, 2026 - v3.5.54

- Store new images on Azure (France)
  - New company option <P code="company:storeNewImagesOnAzureFrance" /> (company record). When enabled, **new** product image uploads are hosted in **France**. Display (sizes / previews) stays the same. Existing images are **not** migrated.
  - Do not confuse this with <P code="company:proxyImages" />. Accepted formats when adding an image stay **unchanged** per upload path.
  - Guide: [Store new images on Azure (France)](/entities/user-guide/company-store-new-images-on-azure-france).
- Booking confirmation (desk and parking)
  - The <P code="company:workplaceBookingConfirmationRange" /> window now applies to same-day **desk** and **parking** bookings (full-day or morning slots).
  - A booking created **on the same day** (desk or parking) is **confirmed automatically**: no confirmation button appears for that booking.
  - In <LIV code="personWorkingLocation:my-planning" />, you can confirm the **desk**, the **parking spot**, or **both in one click** when both still need confirmation for the same slot.
  - Reminder and cancellation emails combine desk and parking into **one message** when they concern the same person on the same day.
  - Guide: [Desk and parking booking confirmation](/entities/user-guide/booking-system/workplace-booking-confirmation-window).
