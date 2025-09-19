# Data Quality View

## Overview

The data quality view (`DataQualityIndex`) provides centralized access to all data quality reports organized according to Surfy's main navigation menu structure. This logical and familiar organization allows users to easily navigate between different reports and identify data quality issues in the system.

## Access

The view is accessible from the Company module via the "Data Quality" tab in the index views list.

## Structure

### Organization by Navigation Menu

The view organizes data quality reports according to Surfy's main navigation menu structure, offering a logical and familiar organization for users:

#### 🏢 **Spaces**
- **Buildings** : Structure and organization (`dq-structure`)
- **Floors** : Floor data validation
- **Rooms** : Room information consistency
- **Campus** : Campus organization
- **Structure** : Structure hierarchy

#### 👥 **Collaborators (Human)**
- **Persons** : Duplicate detection (`dq-duplicate`)
- **Person Types** : Person type validation
- **Person Relations** : Relations between persons consistency

#### 🪑 **Furniture (Things)**
- **Workplaces** : Position and assignment (`dq-position`)
- **Items** : Inventory object validation
- **Thing Types** : Furniture type consistency

#### 🔗 **Assignments**
- **Workplace Assignments** : Assignment validation
- **Room Assignments** : Assignment consistency
- **Person to Building Assignments** : Link validation

#### 🏢 **Organizations**
- **Companies** : Workplace inventory (`dq-fix-inventory`)
- **Company Types** : Type validation

#### 📅 **Planning**
- **Person Working Locations** : Planning validation
- **Bookings** : Booking consistency

#### ⚙️ **Administration**
- **Security** : Role and permission validation
- **API** : API access validation
- **Authentication** : Authentication rule validation

### Visual Organization

The interface is organized intuitively to facilitate navigation:

#### **Hierarchical Structure**
- **Main groups** : Main sections (Spaces, Collaborators, Furniture, etc.) are clearly identified
- **Subgroups** : Specific categories are logically organized under each main group
- **Entities** : Each entity type is presented distinctly and accessibly

#### **Navigation Elements**
- **Visual identification** : Each group has a distinctive visual representation
- **Counters** : The number of entities in each group is clearly displayed
- **Clear hierarchy** : The organization allows quick understanding of the structure
- **Intuitive navigation** : The interface naturally guides users to the information they're looking for

#### **Report Presentation**
Each entity presents its reports clearly:
- **Identification** : Each report is clearly identified by its name and description
- **Direct access** : Reports are directly accessible from the main view
- **Contextual information** : Each report includes a description of its purpose and utility

## Navigation

### Access to Reports

Each report in the list is directly accessible from the main view. You can:

- **Click directly** on a report to open it immediately
- **Open in a new tab** using right-click to consult multiple reports simultaneously
- **Navigate easily** between reports thanks to return links
- **Share reports** by copying the page address

### Benefits of this Organization

- **Intuitive navigation** : Direct access to reports from the overview
- **Flexibility** : Ability to open multiple reports in parallel
- **Efficiency** : Quick return to the main view to consult other reports
- **Accessibility** : Interface adapted to all users

### Return to Index View

Each individual report can include a return link to this index view to facilitate navigation.

## Features

### Adaptation to Different Screens

The view automatically adapts to your device to offer the best experience:
- **Computer** : Complete view with all groups visible for quick navigation
- **Tablet** : Interface optimized for touch navigation with easy access to groups
- **Mobile** : Compact organization allowing efficient navigation even on small screens

### Filtering and Search

*Feature planned for future versions*

### Export and Reporting

*Feature planned for future versions*

## Usage

### How to Use the View

1. **Access the view** : Navigate to the Company module and select the "Data Quality" tab
2. **Explore groups** : Browse the different sections organized according to your usual navigation menu
3. **Expand sections** : Click on sections to see available reports
4. **Consult entities** : Each entity type presents its data quality reports
5. **Access reports** : Click on a report to consult details and perform necessary corrections
6. **Navigation** : Use return links to easily return to the overview

### Available Report Types

#### Company Reports
- **Workplace inventory** : Verifies inventory data consistency
- **Element positioning** : Validates geographic positioning of workspaces

#### Person Reports
- **Duplicate detection** : Identifies duplicate records in the database

#### Building Reports
- **Structure and organization** : Verifies building hierarchy and organization

#### Workplace Reports
- **Position and assignment** : Validates workplace positioning and assignments

## Configuration

This view works automatically without required configuration. It automatically adapts to your organization and only shows you reports you have access to according to your permissions.

## Relationship with Other Features

This view integrates naturally with your daily use of Surfy:

1. **Familiar navigation** : Uses the same organization as your main menu for a consistent experience
2. **Consistent terminology** : Uses the same terms and translations as the rest of the application
3. **Respected security** : You only see reports you have access to according to your role in the organization
