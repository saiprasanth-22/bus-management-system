# Viva Map

Use this file as the short explanation of how the real project works.

## What is the project?

A school bus transport management system for students from Classes I-XII. It stores students, buses, routes and stops in related tables and uses the stored records for retrieval and analysis.

## Why four tables?

- `ROUTE` stores the route itself.
- `STOP` stores the boarding stops that belong to a route.
- `BUS` stores buses assigned to routes.
- `STUDENT` stores the student's bus, route, stop and fee status.

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
2. Run `database_student_view.py` for one Student ID.
3. Run one or two queries from `sql/queries.sql`.
4. Run `database_faculty_reports.py`.
5. Show the saved charts.
6. Open the hosted showcase only as the visual concept.
