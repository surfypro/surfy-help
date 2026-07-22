---
sidebar_position: 7
sidebar_label: Icon badge on an object type
---

# Create an object type with an icon badge

When creating an <OT code="itemType" />, first attach an **icon**, then an **icon badge** (<P code="itemType:iconBadge" />): a vertical strip on the **right inside** the icon square, with short text and colors. Useful to tell apart variants that share the same pictogram (e.g. CO² / water / ABC extinguishers).

<CloudinaryAsset publicId="help/changelog/v3.5.23/item-type-icon-badge-create-en" kind="video" asGif width={640} gifFps={8} alt="Create an object type with an icon badge" />

## Prerequisites

- Rights to edit object types.
- Know which pictogram to use (e.g. fire extinguisher).

## Steps

1. **Open object-type creation**  
   Starting point: create form for an <OT code="itemType" />.

2. **Enter the object type Name**  
   Example: *Extincteur CO²*.

3. **Change the object type family**  
   Opens the family list so you can pick one for the type.

4. **Choose Sécurité incendie**  
   Select the family in the list.

5. **Change icon**  
   The badge is available **only** when an icon is already set. Choose the extinguisher pictogram.

6. **Open the badge editor (text and colors)**  
   Click **Create badge** to open the editor.

7. **Enter the badge Text**  
   Example: *CO²* (Unicode **²**, not a plain “2”).

8. **Enter the background color**  
   Open the palette and pick a color for the strip.

9. **Enter the text color**  
   Open the palette and pick a color for the badge text.

10. **Click the Validate creation button**  
    Saves the object type with the icon and badge.

## Limits

- Without an icon on the type, the badge stays unavailable.
- Badge text is short; rendering is a strip **inside** the icon square (not beside it).

## See also

- [Text anchor (workstation type)](./workplace-type-text-anchor)
