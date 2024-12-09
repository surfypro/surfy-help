---
sidebar_position: 2
---
# Modifying an assignment to a district

## Modifying a person's district assignment

The simplest way to modify a person's district assignment in Surfy is to delete the current assignment and create a new one, whether to another district or none at all.  

To move a person from one district to another, see the chapters [Deleting a District Assignment](/docs/tutorials/affectations/dimensiontoperson/delete.md) and [Creating a District Assignment](/docs/tutorials/affectations/dimensiontoperson/create.md).  

---

## Bulk modification of district assignments via Excel file

District assignments can be modified in bulk by updating the assigned persons in an Excel file and replacing them with others. This process keeps the assignment identifier but changes the person’s identifier.

### Generating the Excel file of district assignments

The Excel file with the assignments to be modified can be created in several ways:

- **By generating the "Report of individuals assigned in Building XXX" file:**
  - From the homepage, click on the icon at the end of the color band for Building XXX.  
  - Click on "Dashboard for Building XXX."  
  - Click on the icon in the "Report of individuals assigned in Building XXX" row.  
  - The file will download, and the "AffecAuxCalquDAffec" tab will contain the assignments to be modified.  

- **By generating a filtered list of assignments to modify:**
  - In the menu on the left, click on "Assignments," "Assignments to Assignment Layers," then "List Assignments to Assignment Layers."  
  - Filter the list by layer and layer type using the "Filter Assignments to Assignment Layers" icon in the top right.  
  - Generate the Excel file for the filtered list by clicking the "Download Assignments to Assignment Layers as Excel" icon in the top right.  
  - The file will download and contain the assignments from the filtered list.  

---

### Editing the Excel file

- Open the Excel file containing the assignments to modify.  
- Replace the name, first name, and identifier of the assigned individuals with the name, first name, and identifier of the individuals to assign.  

---

### Importing the modified Excel file

**Preparation for import:**  
- Select the columns for the assignment identifier and the person identifier.  
- Copy the two columns, including their headers.  
- Paste the columns into a new sheet in the Excel file so they are adjacent.  

**Import process:**  
- Click "Assignments," "Assignments to Assignment Layers," then "Import Assignments to Assignment Layers."  
- Paste the adjacent columns into the central field.  
- Click "Compare"; Surfy will propose the modifications to apply.  
- Click "Create All," or select specific rows and click "Create."  
- The assignments have been successfully updated.  
