---
sidebar_position: 3
---

# Deleting an assignment to a district

To remove a person’s assignment to a district, you must first enable the "Assignment Layer Navigation" mode.

---

## Switching to district navigation

To switch to "District Navigation" or "Assignment Layer Navigation":

- Click on the vertical "Grid" icon to "Color spaces on the plan according to assignment layers."  
- Click on the icon at the end of the layer's name to "select the layer type for navigation," enabling district selection.  
- District information, assignments, and inventory become accessible just like for standard spaces by clicking on the district.  

:::tip Plan View
Clicking the vertical "Change plan view" icon and selecting "Districts" configures Surfy for district assignment mode in just two clicks:  
Assignment layers are displayed on the plan, and the layer type is selected for navigation. This view remains active even after refreshing (F5). For standard use, remember to switch back to the default "Space Typologies" view. See [District View](/docs/courses/views/planviews.md#vision-quartiers).  
:::

Assignments in the district can be accessed by clicking on the district to select it.

---

## Individual assignment deletion

To delete a person’s district assignment:

1. Click on the district to select it; the district's details will appear on the left of the plan.  
2. Open the "Assignments" tab to display current assignments in the district.  
3. Click on the "Trash" icon next to the name of the person you want to unassign: **"Delete assignment to space XXX."**  
4. Confirm the deletion.  

The person’s assignment to the district is now deleted.

:::tip Good to Know
Deleting a person’s assignment does not delete the person. However, deleting a person will remove all their assignments.  
:::

---

## Deleting assignments using a filtered list

In the menu on the left side of the screen:

1. Click on "Assignments," "Assignments to Assignment Layers," and then "List Assignments to Assignment Layers."  
2. Filter the list by layer and layer type using the "Filter Assignments to Assignment Layers" icon in the top-right corner.  
3. Select the assignments to delete by checking the box at the beginning of each row.  
4. Click the "Trash" icon at the top of the page to delete the selected assignments.  

---

## Bulk deletion of assignments via Excel file

To bulk delete assignments, replace assigned persons with a placeholder person named "DELETE," then delete the placeholder person.  

### Steps:

1. **Create a placeholder person:**  
   - Name the person "DELETE."  

2. **Export the Excel file of assignments to delete:**  
   - Follow one of the methods below to generate the file.  

3. **Edit the Excel file:**  
   - Replace the name, first name, and identifier of assigned persons with those of the placeholder "DELETE."  

4. **Import the modified file:**  
   - Upload the edited Excel file to Surfy.  

5. **Delete the placeholder person:**  
   - Deleting the "DELETE" person removes all their assignments.

---

### Generating the Excel file of assignments to delete

- **Option 1: Generate the "Report of individuals assigned in Building XXX":**
  - From the homepage, click the icon at the end of the color band for Building XXX.  
  - Click on "Dashboard for Building XXX."  
  - Click on the icon for "Report of individuals assigned in Building XXX."  
  - Download the file; the "AffecAuxCalquDAffec" tab contains the assignments.  

- **Option 2: Generate a filtered list of assignments to delete:**
  - In the menu on the left, click on "Assignments," "Assignments to Assignment Layers," and "List Assignments to Assignment Layers."  
  - Filter the list by layer and layer type using the "Filter Assignments to Assignment Layers" icon.  
  - Generate an Excel file for the filtered list by clicking "Download Assignments to Assignment Layers as Excel."  

---

### Editing the Excel file

- Open the Excel file.  
- Replace the name, first name, and identifier of assigned persons with those of the placeholder "DELETE."  

---

### Importing the edited file

1. Ensure the columns for assignment identifier and the "DELETE" person's identifier are contiguous.  
2. If needed, copy and paste these columns into a new sheet.  

Go back to Surfy, on the left menu

- Go to "Assignments," "Assignments to Assignment Layers," and "Import Assignments to Assignment Layers."  
- Paste the contiguous columns into the central field.  
- Click "Compare"; Surfy will show the proposed changes.  
- Click "Create All," or select specific rows and click "Create."  

All assignments now point to the placeholder "DELETE."

---

### Final deletion step

- Delete the "DELETE" person.  
- This will remove all associated assignments.