# BusBuddy presentation guide

This guide is written for the student presenting the project. Do not try to
explain every file or every button. Explain one complete journey clearly:

> A faculty member starts and updates a bus trip. A student signs in, tracks the
> assigned bus and receives updates when the bus reaches a new stop.

## 1. Introduction to say

> Good morning. My project is **BusBuddy**, a school bus tracking and transport
> management system for students from Classes I to XII. Students can sign in to
> view their assigned bus, route, boarding stop, estimated arrival and journey
> notifications. Faculty can manage buses, routes, student records, boarding
> activity and trip progress. The project uses Python, MySQL, Pandas and
> Matplotlib, with a web interface for demonstration.

## 2. The problem

Students often do not know:

- whether their school bus has started;
- which stop it has reached;
- how long it may take to reach them;
- whether a route is delayed or completed.

Faculty also need one place to view bus assignments, routes, stops, student
boarding records and notifications.

BusBuddy connects all this information through one relational database.

## 3. Demo credentials

| Portal | Username | Password |
|---|---|---|
| Student | `student` | `1` |
| Faculty | `faculty` | `1` |

Use student ID **`ST029`** during the presentation. It gives the clearest demo.

## 4. Five-minute website demonstration

### Part A — Student portal

1. Open the BusBuddy home page.
2. Briefly show the school bus hero and say that the system is student-focused.
3. Click **Track my bus**.
4. Sign in using `student` and `1`.
5. Search for student ID `ST029`.
6. Point out:
   - student name: Aarohi Mishra;
   - assigned bus: B03;
   - route: R03, Lake Line;
   - boarding stop: Lotus Junction;
   - current bus stop and last update time;
   - estimated arrival or current journey state;
   - check-in status and bus notifications.

Say:

> The student does not need to understand all transport records. The portal
> selects only the records connected to that student and shows the current
> journey in a simple form.

### Part B — Faculty portal

1. Click **Faculty**.
2. Sign in using `faculty` and `1`.
3. Show the four summary values.
4. Scroll to **Move today's buses**.
5. Find B03 / Lake Line and click **Next stop**.
6. Explain that the current stop and update time are changed.
7. Open **Notifications** to show the new stop update.
8. Optionally return to the Student portal and search `ST029` again. The journey
   now shows the new B03 position and notification.

Say:

> The same bus update is used by both portals. Faculty changes the trip record,
> and students assigned to that bus receive the updated information.

### Part C — DBMS evidence

Briefly open these Faculty sections:

- **Students** — student, bus, route and stop assignments;
- **Buses** — bus, driver, capacity and route;
- **Routes** — route distance and student count;
- **Stops** — stop distance and transport fee;
- **Check in / out** — boarding records;
- **Reports** — summaries generated from the same records.

Do not spend time reading every row.

## 5. System flow

Memorise this flow:

```text
Faculty starts or updates a trip
              ↓
BUS_STATUS stores the current stop and time
              ↓
NOTIFICATION stores the journey message
              ↓
The student signs in
              ↓
The system finds the student's assigned bus
              ↓
Current position and notifications are displayed
```

Tracking in this academic project is **stop-based**, not GPS-based. Faculty
records the latest stop. Real GPS could be added later without changing the
main student, bus, route and stop relationships.

## 6. Technologies used

| Technology | Purpose |
|---|---|
| Python | Executes database and report programs |
| MySQL | Stores related transport records |
| Pandas | Loads CSV data, reads SQL results and creates summaries |
| Matplotlib | Creates report charts |
| HTML | Defines the demonstration pages |
| CSS | Controls the visual design and responsive layout |
| JavaScript | Provides login simulation and interactive trip updates |
| Vercel | Hosts the visual demonstration website |

The assessed DBMS logic is in Python and MySQL. The hosted website is an
interactive demonstration of how students and faculty would use that data.

## 7. Main database tables

### USER_ACCOUNT

Stores the username, demo password, role and optional linked student ID.

### STUDENT

Stores student ID, name, class, section, assigned bus, route, stop and fee
status.

### BUS

Stores bus number, driver name, seating capacity and assigned route.

### ROUTE

Stores route ID, route name and total distance.

### STOP

Stores each boarding stop, its route, distance and transport fee.

### BUS_STATUS

Stores the latest stop, trip state and last update time for each bus.

### TRIP_LOG

Stores student check-in time, check-out time and boarding status.

### NOTIFICATION

Stores start, stop and route-update messages with their time.

## 8. Relationships

```text
ROUTE ──< BUS ──< STUDENT
  │                 │
  └──< STOP ────────┘

BUS ─── BUS_STATUS
BUS ──< TRIP_LOG >── STUDENT
BUS ──< NOTIFICATION
USER_ACCOUNT ─── STUDENT (only for a student account)
```

Symbols:

- `───` means one connected record;
- `──<` means one record can connect to many records.

Examples:

- One route can contain many stops.
- One route can be assigned to a bus.
- One bus can carry many students.
- One student can have many trip-log records over time.

## 9. Important DBMS concepts

### Primary key

A primary key uniquely identifies a record. Examples are `StudentID`, `BusNo`,
`RouteID` and `StopID`.

### Foreign key

A foreign key connects one table to another. For example, `BusNo` in the
`STUDENT` table refers to `BusNo` in the `BUS` table.

### JOIN

A JOIN combines related records. To show a student journey, the project joins
student, bus, route, stop and bus-status information.

### CRUD

CRUD means:

- **Create** — add a student, trip or notification;
- **Read** — display students, buses and journey status;
- **Update** — change the current bus stop or fee status;
- **Delete** — remove an incorrect record when required.

### Aggregate functions

The reports use functions such as `COUNT()`, `AVG()`, `MAX()` and `MIN()` with
`GROUP BY` to create bus-wise, route-wise and class-wise summaries.

## 10. Code map

```text
data/
    Fictional CSV records used to fill the database

sql/schema.sql
    Creates the MySQL database and tables

sql/queries.sql
    Contains SELECT, JOIN, GROUP BY and UPDATE examples

src/database_load.py
    Reads CSV files using Pandas and loads them into MySQL

src/database_login.py
    Demonstrates role-based account lookup from MySQL

src/database_student_view.py
    Joins tables and displays one student's transport journey

src/database_faculty_reports.py
    Reads MySQL records and creates transport summaries and charts

src/database_export.py
    Exports current MySQL records back to CSV

showcase/index.html
    Contains the website page structure

showcase/styles.css
    Contains the responsive visual design

showcase/app.js
    Contains the demonstration data and interactive portal behaviour
```

## 11. One SQL query to explain

```sql
SELECT STUDENT.StudentName,
       STUDENT.BusNo,
       ROUTE.RouteName,
       STOP.StopName
FROM STUDENT
JOIN ROUTE
ON STUDENT.RouteID = ROUTE.RouteID
JOIN STOP
ON STUDENT.StopID = STOP.StopID
WHERE STUDENT.StudentID = 'ST029';
```

Explanation:

> This query selects one student. JOIN connects the student's RouteID and
> StopID to their full route and stop records. WHERE limits the result to
> ST029.

## 12. Common viva questions

### Why did you select this project?

School-bus information is often communicated manually. This project combines
student assignments, route progress, boarding activity and notifications in one
system.

### Why is MySQL suitable?

The data is relational. Students are connected to buses, buses to routes, and
stops to routes. MySQL supports these relationships with primary and foreign
keys.

### Why not keep everything in one table?

That would repeat route, driver and stop information for many students. Separate
tables reduce duplication and improve consistency.

### What is stop-based tracking?

It stores the last stop reached by a bus and the update time. It does not claim
the exact GPS coordinates between stops.

### How does a student receive the correct notification?

The student's record contains an assigned BusNo. Notifications with the same
BusNo are selected and shown to that student.

### How is ETA calculated in the demonstration?

The interface estimates time from the number of registered stops remaining. A
real deployment could calculate ETA using live GPS and traffic information.

### Where is Pandas used?

Pandas reads the CSV seed files, writes DataFrames to MySQL, reads SQL query
results and prepares data for reports.

### Where is Matplotlib used?

It creates bus-wise strength, class-wise usage, route-wise demand and
distance-versus-fee charts.

### Is the website directly connected to production MySQL?

No. The public Vercel page is a safe interactive showcase using fictional demo
data. The repository separately contains the working Python/MySQL implementation
that demonstrates the assessed DBMS operations.

### Are the displayed students real?

No. Every name and transport record is fictional demonstration data.

### Are the passwords production-secure?

No. The simple values are used only to demonstrate the login query during the
college presentation. A real application must store salted password hashes and
use secure authentication.

### What could be added in the future?

Live GPS, parent accounts, push notifications, delay prediction and emergency
alerts could be added later.

## 13. Final conclusion to say

> BusBuddy demonstrates how a relational database can solve a practical school
> transport problem. It connects students, buses, routes, stops, trip logs and
> notifications. The Student portal keeps tracking simple, while the Faculty
> portal manages the records that power it. The project can later be extended
> with real GPS and mobile notifications.

## 14. Presentation safety checklist

Before presenting:

- Open the website once and confirm that it loads.
- Keep `ST029` written somewhere visible.
- Remember both demo logins.
- Do not claim that the website uses real GPS.
- Do not claim that the fictional names are real students.
- Demonstrate one complete journey instead of opening every screen.
- If the internet fails, explain the Python/MySQL files and use screenshots.
- Say “I designed and developed” instead of pretending every feature is a
  production deployment.

