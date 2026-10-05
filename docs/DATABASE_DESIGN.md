# Database Design

## Core entities

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
| TransportFee | Transport fee |
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
BUS     -> ROUTE
STOP    -> ROUTE
```

## Data consistency rules

- `StudentID`, `BusNo`, `RouteID` and `StopID` are unique identifiers in their own tables.
- `ClassNo` stays between 1 and 12.
- A student's route should match the route of the assigned bus.
- A student's stop should belong to the assigned route.
- Bus capacity must not be exceeded.
- Fee status is kept as `Paid` or `Pending`.
- Public repository data must remain fictional.

## Current sample dataset

- 48 students
- 12 classes
- 6 buses
- 6 routes
- 18 stops
