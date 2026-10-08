# Database Design

## Core entities

### USER_ACCOUNT

| Field | Purpose |
|---|---|
| AccountID | Unique account identifier |
| Username | Login name |
| DemoPassword | Presentation-only password value |
| UserRole | STUDENT or FACULTY |
| StudentID | Optional linked student record |

The demonstration keeps the login query readable for a Class XII viva. A real
production system must store a secure password hash rather than a plain value.

### STUDENT

| Field | Purpose |
|---|---|
| StudentID | Unique student identifier |
| StudentName | Student name |
| ClassNo | Class from 1 to 12 |
| Section | School section |
| BusNo | Assigned bus |
| RouteID | Assigned route |
| StopID | Boarding stop |
| FeeStatus | Paid/Pending |

### BUS

| Field | Purpose |
|---|---|
| BusNo | Unique bus identifier |
| DriverName | Driver name |
| Capacity | Maximum seating capacity |
| RouteID | Route assigned to the bus |

### ROUTE

| Field | Purpose |
|---|---|
| RouteID | Unique route identifier |
| RouteName | Human-readable route name |
| DistanceKm | Total route distance |

### STOP

| Field | Purpose |
|---|---|
| StopID | Unique stop identifier |
| StopName | Human-readable stop name |
| RouteID | Route containing the stop |
| DistanceKm | Distance of stop from school |
| TransportFee | Fee assigned to that stop |

## Relationships

```text
ROUTE
├── BUS
│   └── STUDENT
└── STOP
    └── STUDENT
```

A student record therefore connects to:

```text
STUDENT -> BUS
STUDENT -> ROUTE
STUDENT -> STOP
USER_ACCOUNT -> STUDENT (student accounts only)
BUS     -> ROUTE
STOP    -> ROUTE
```

The transport fee is attached to the stop rather than repeated in every student record. This keeps one fee value for each boarding stop.

## Data consistency rules

- `StudentID`, `BusNo`, `RouteID` and `StopID` are unique identifiers in their own tables.
- `ClassNo` stays between 1 and 12.
- A student's route should match the route of the assigned bus.
- A student's stop should belong to the assigned route.
- Bus capacity must not be exceeded.
- Fee status is kept as `Paid` or `Pending`.
- Public repository data must remain fictional.
- Username values are unique and each student account links to one student.

## Current sample dataset

- 48 students
- 12 classes
- 6 buses
- 6 routes
- 18 stops

## Operational transport tables

### BUS_STATUS

| Field | Purpose |
|---|---|
| BusNo | Bus identifier |
| CurrentStopID | Last recorded stop |
| TripStatus | ON ROUTE / COMPLETED |
| LastUpdateTime | Time of latest recorded movement |

### TRIP_LOG

| Field | Purpose |
|---|---|
| LogID | Unique log record |
| StudentID | Student |
| BusNo | Bus used for the trip |
| TripDate | Date |
| CheckInTime | Boarding time |
| CheckOutTime | Leaving time |
| TripStatus | ON BUS / CHECKED OUT / NOT BOARDED |

### NOTIFICATION

| Field | Purpose |
|---|---|
| NotificationID | Unique notice |
| BusNo | Bus concerned |
| StudentID | Optional student reference |
| NotificationType | START / STOP |
| Message | Event message |
| NotificationTime | Event time |

### Extended relationship

```text
ROUTE
├── BUS
│   ├── BUS_STATUS
│   └── STUDENT
│       └── TRIP_LOG
├── STOP
└── NOTIFICATION
```

`BUS_STATUS` represents the last recorded stop and therefore provides **stop-based tracking**, not GPS tracking.
