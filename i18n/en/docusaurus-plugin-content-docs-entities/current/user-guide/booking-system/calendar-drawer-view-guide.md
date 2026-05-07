# Calendar Drawer View User Guide

## Overview

The Calendar Drawer View is an interactive weekly calendar interface that allows you to view room availability and book meeting rooms. The calendar displays a week view (Monday through Friday) with 30-minute time slots, making it easy to see when rooms are available and quickly book them.

## Visual Layout

### Calendar Grid
- **Days**: Displayed horizontally across the top (Monday through Friday)
- **Time Slots**: Displayed vertically on the left side in 30-minute intervals
- **Working Hours**: Highlighted to show the standard business day (typically 8:00 AM to 6:30 PM)
- **Today Indicator**: The current day is highlighted with a different background color

### Day Headers
Each day column shows:
- Day of the week abbreviation (e.g., "Mon", "Tue")
- Day number (e.g., "15", "16")
- Month abbreviation (e.g., "Jan", "Feb")
- Today's date is highlighted in a primary color

## Slot Status Indicators

The calendar uses color coding to show the availability status of each time slot:

### Available Slots (White/Default Background)
- **Appearance**: Clean white background with subtle borders
- **Meaning**: The room is free and can be booked
- **Interaction**: 
  - Hover over an available slot to see a green highlight preview
  - Click and drag to select multiple consecutive slots
  - Tooltip shows: "Click to book [day] at [time]"

### Booked Slots (Red Background)
- **Appearance**: Red background with reduced opacity
- **Meaning**: The room is already booked by someone else
- **Information Displayed**:
  - Organizer name is shown on the first slot of each booking
  - Tooltip shows booking details including:
    - Start and end time
    - Organizer name
- **Interaction**: Cannot be clicked or selected (cursor shows "not-allowed")

### Past Slots (Gray Background)
- **Appearance**: Gray background with reduced opacity
- **Meaning**: These time slots are in the past and cannot be booked
- **Interaction**: Cannot be clicked or selected
- **Tooltip**: Shows "Past time" or "Past day" depending on context

### Refreshing Slots (Orange/Yellow Background)
- **Appearance**: Orange/yellow background with pulsing animation
- **Meaning**: A booking was just made (optimistic update) and the calendar is refreshing to confirm
- **Behavior**: Automatically updates to show the correct status once the server confirms the booking

### Selected Slots (Blue Highlight)
- **Appearance**: Blue background with reduced opacity
- **Meaning**: You are currently selecting a time range
- **Behavior**: 
  - Appears when you click and drag across multiple slots
  - Shows the time range you're about to book
  - Tooltip displays the selected time range (e.g., "Selecting range: 09:00 - 10:30")

## Features

### 1. Viewing Availability

- **Real-time Data**: The calendar automatically fetches and displays current bookings from Microsoft Office Calendar
- **Week Navigation**: Use the navigation controls to move between weeks:
  - Previous Week button (←)
  - Next Week button (→)
  - "This Week" button to quickly return to the current week
- **Auto-scroll**: The calendar automatically scrolls to show working hours (8:00 AM) when opened

### 2. Selecting Time Slots

#### Single Slot Selection
- Click on any available time slot to select it
- The booking dialog will open with that single slot pre-selected

#### Multi-Slot Selection (Drag to Select)
- **Click and Hold**: Click on an available slot and hold the mouse button down
- **Drag**: While holding, drag your mouse across multiple consecutive slots
- **Visual Feedback**: 
  - Selected slots are highlighted in blue
  - Tooltip shows the time range you're selecting
  - Only slots within the same day can be selected together
- **Release**: Release the mouse button to confirm your selection
- **Booking Dialog**: The booking dialog opens with your selected time range

#### Selection Rules
- You can only select slots within the same day
- You cannot select past time slots
- You cannot select already booked slots
- If you try to select a range that includes unavailable slots, the booking dialog will not open

### 3. Booking a Room

#### Opening the Booking Dialog
- Click on an available slot, or
- Drag to select multiple slots and release

#### Booking Dialog Features
- **Room Information**: Shows the room name at the top
- **Time Selection**:
  - Start time picker (pre-filled with your selection)
  - End time picker (pre-filled with your selection, minimum is start time)
  - You can adjust both times if needed
- **Meeting Details**:
  - **Subject**: Required field for the meeting title
  - **Description**: Optional field for meeting notes
  - **Attendees**: Optional field to add meeting participants
    - Type email addresses or names to search
    - Supports autocomplete for users in your organization
- **Teams Meeting**: Toggle switch to create a Microsoft Teams meeting link
- **Actions**:
  - Cancel button to close without booking
  - Book button to confirm and create the booking

#### Booking Process
1. Select your desired time slots
2. Fill in the meeting subject (required)
3. Optionally add description, attendees, or enable Teams meeting
4. Click "Book" to confirm
5. The calendar shows an optimistic update (orange/yellow) while processing
6. Once confirmed, the slot turns red to show it's booked

### 4. Viewing Existing Bookings

- **Organizer Information**: The name of the person who booked the room is displayed on the first slot of each booking
- **Tooltip Details**: Hover over any booked slot to see:
  - Start and end time of the booking
  - Organizer name
- **Visual Continuity**: Multiple consecutive slots for the same booking are displayed as a unified block without internal borders

### 5. Calendar Controls

#### Header Section
- **Room Name**: Displays the name of the room you're viewing
- **Selected Time Range**: When selecting slots, shows the time range you've selected
- **Refresh Button**: 
  - Manually refresh the calendar to get the latest bookings
  - Shows a loading indicator while fetching
  - Tooltip: "Refresh calendar"

#### Legend
The legend at the top shows what each color means:
- Available (white)
- Booked (red)
- Past (gray)

#### Week Navigation
- Navigate between weeks to plan ahead or review past bookings
- "This Week" button provides quick access to the current week

### 6. Responsive Behavior

- **Scrollable**: The calendar is scrollable vertically to view all time slots
- **Sticky Headers**: Day headers and time labels remain visible while scrolling
- **Mouse Leave**: If you move your mouse outside the calendar while selecting, the selection is automatically cancelled

## Tips and Best Practices

1. **Plan Ahead**: Use week navigation to check availability for future dates
2. **Quick Booking**: For single-slot bookings, a simple click is faster than dragging
3. **Time Range**: Use drag selection for meetings longer than 30 minutes
4. **Check Tooltips**: Hover over slots to see detailed information before booking
5. **Refresh Regularly**: Use the refresh button if you suspect the calendar might be out of date
6. **Teams Integration**: Enable Teams meeting when you need a video conference link
7. **Attendees**: Add attendees when booking to automatically send them calendar invitations

## Accessibility

- **Keyboard Navigation**: The interface supports keyboard navigation
- **Tooltips**: All interactive elements have helpful tooltips
- **Color Coding**: Uses both color and visual patterns to convey information
- **Clear Labels**: All buttons and controls have clear labels and tooltips

## Error Handling

- **Unavailable Slots**: If you try to book an unavailable slot, the booking dialog will not open
- **Network Issues**: If there's a problem fetching calendar data, an error message is displayed
- **Booking Failures**: If a booking fails, an error message is shown and the calendar is refreshed

## Status Indicators Summary

| Status | Color | Meaning | Can Book? |
|--------|-------|---------|-----------|
| Available | White | Room is free | Yes |
| Booked | Red | Room is occupied | No |
| Past | Gray | Time has passed | No |
| Refreshing | Orange/Yellow | Booking in progress | No |
| Selected | Blue | Your current selection | Yes (after release) |
