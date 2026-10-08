# Viva Map

Use this file as the short explanation of how the real project works.

## What is the project?

A school bus tracking and transport management system for students from Classes
I-XII. Students sign in to follow their assigned bus and receive route updates;
faculty sign in to update stops, boarding records and trip status.

## What are the main tables?

- `ROUTE` stores the route itself.
- `STOP` stores the boarding stops that belong to a route.
- `BUS` stores buses assigned to routes.
- `STUDENT` stores the student's bus, route, stop and fee status.
- `USER_ACCOUNT` connects login credentials and roles to a student when needed.
- `BUS_STATUS`, `TRIP_LOG` and `NOTIFICATION` record the live journey.

This avoids putting every detail into one large table and makes the relationships easier to explain.

## Where is the DBMS part?

The MySQL database contains the four related tables with primary keys and foreign keys.

The project uses queries such as:

- `SELECT`
- `WHERE`
- `ORDER BY`
- `GROUP BY`
- `HAVING`
- `JOIN ... ON`
- aggregate functions such as `COUNT()`, `AVG()`, `MAX()` and `MIN()`
- `UPDATE`

## Where is Pandas used?

Pandas is used to:

- read the seed CSV files,
- write the seed DataFrames into MySQL,
- read SQL query results into DataFrames,
- display and analyse records,
- export database records back to CSV,
- provide DataFrames for plotting.

## Where is Matplotlib used?

The project plots:

1. bus-wise student strength — bar graph,
2. class-wise transport usage — line graph,
3. route-wise student strength — bar graph,
4. distance vs transport fee — scatter graph.

## Why is the hosted website separate?

The hosted site is a presentation prototype of the Student and Faculty UX. The school submission core is deliberately kept in textbook-level MySQL, Pandas and Matplotlib so every assessed operation remains explainable.

## Demo sequence

A clean demonstration is:

1. Show the four MySQL tables.
2. Run `database_login.py` to demonstrate role-based login.
3. Run `database_student_view.py` for one Student ID.
4. Open the hosted Student portal and show the assigned bus and notifications.
5. Open the Faculty portal, advance a bus to its next stop, then return to the
   Student portal to show the updated journey.
6. Run one or two queries from `sql/queries.sql`.
7. Run `database_faculty_reports.py` and show the saved charts.
