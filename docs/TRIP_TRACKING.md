# Check-In, Check-Out, Bus Tracking and Notifications

These features are implemented as **database state**, not as GPS or phone push services.

That distinction keeps the assessed project inside the MySQL/Pandas scope while still representing the transport workflow requested by the student.

## New tables

### BUS_STATUS

Stores the latest recorded operating state of each bus.

| Field | Meaning |
|---|---|
| BusNo | Bus being tracked |
| CurrentStopID | Last recorded stop |
| TripStatus | ON ROUTE / COMPLETED |
| LastUpdateTime | Time of the latest status update |

This is **stop-based tracking**. It does not claim to be a live GPS coordinate.

### TRIP_LOG

Stores one student's boarding record.

| Field | Meaning |
|---|---|
| LogID | Unique trip-log record |
| StudentID | Student |
| BusNo | Assigned bus |
| TripDate | Date of the trip |
| CheckInTime | Boarding time |
| CheckOutTime | Leaving time |
| TripStatus | ON BUS / CHECKED OUT / NOT BOARDED |

### NOTIFICATION

Stores route start/stop events.

| Field | Meaning |
|---|---|
| NotificationID | Unique notification record |
| BusNo | Bus concerned |
| StudentID | Optional student reference |
| NotificationType | START / STOP |
| Message | Notice text |
| NotificationTime | Event time |

## Real academic workflow

The seed data contains an example morning trip for all 48 fictional students.

- 41 records have a check-in.
- 6 of those also have a check-out.
- 7 are marked Not Boarded.
- Five buses are On Route.
- One bus is Completed.
- Start/stop notification records are stored separately.

Faculty can inspect or change the current state with SQL queries from `sql/queries.sql`.

The Python student view then uses `read_sql_query()` to display:

1. assigned transport details,
2. current bus stop and trip status,
3. check-in/check-out record,
4. start/stop notifications.

## Hosted showcase

The Vercel interface includes an interactive simulation:

- **Trip Monitor** advances buses from stop to stop.
- finishing a route creates a STOP notification,
- restarting a completed route creates a START notification,
- **Check In / Out** changes a student's displayed boarding state,
- the Student Portal reflects those changes during the current browser session.

Those browser interactions are a presentation prototype. The assessed implementation remains the MySQL/Pandas data model described above.
