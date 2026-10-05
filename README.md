# Bus Management System

A **Class XII Informatics Practices DBMS project** for managing school transport records for students from **Classes I-XII**.

The assessed project core is intentionally constrained to concepts and methods supported by the supplied NCERT Informatics Practices Class XII textbook. The hosted website is kept as a separate presentation layer so the visual demo does not contaminate the syllabus-scoped Python/MySQL/Pandas/Matplotlib build.

## Project idea

The system models four connected record sets:

```text
BUS ---- ROUTE ---- STOP
  \                  /
        STUDENT
```

The project has two user views:

- **Student Portal** — view assigned bus, route, boarding stop, stop-based transport fee and fee status.
- **Faculty Portal** — maintain transport records and analyse student/bus/route usage.

The visual direction is **Modern Transit**: bright school-tech UI, metro-map route language, clean cards and clear transport data.

## Real build architecture

```text
CSV seed data
     |
     v
Pandas read_csv()
     |
     v
MySQL relational tables
     |
     v
Pandas read_sql_query()
     |
     +--> student record
     +--> faculty summaries
     +--> grouped reports
     |
     v
Matplotlib charts
```

The MySQL-connected implementation is documented in **`docs/REAL_BUILD.md`**.

## Repository structure

```text
bus-management-system/
├── README.md
├── requirements.txt
├── data/
│   ├── students.csv
│   ├── buses.csv
│   ├── routes.csv
│   └── stops.csv
├── docs/
│   ├── PROJECT_PLAN.md
│   ├── DATABASE_DESIGN.md
│   ├── UX_FLOW.md
│   ├── NCERT_METHODS.md
│   ├── REAL_BUILD.md
│   ├── TRIP_TRACKING.md
│   └── VIVA_MAP.md
├── sql/
│   ├── schema.sql
│   └── queries.sql
├── src/
│   ├── student_view.py
│   ├── faculty_overview.py
│   ├── bus_wise_report.py
│   ├── class_wise_report.py
│   ├── route_wise_report.py
│   ├── distance_fee_report.py
│   ├── database_load.py
│   ├── database_student_view.py
│   ├── database_faculty_reports.py
│   └── database_export.py
├── showcase/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── README.md
└── outputs/
    └── charts/
```

## Current scope

- 48 fictional student transport records
- Classes 1-12 represented
- 6 buses
- 6 routes
- 18 stops with distance and fee data
- relational MySQL schema with primary and foreign keys
- Pandas CSV-to-MySQL loader
- MySQL-backed Student record query
- student check-in / check-out trip logs
- stop-based bus tracking records
- route START / STOP notification records
- MySQL-backed Faculty reports
- four Matplotlib report charts
- MySQL-to-CSV export
- SQL query collection
- NCERT method whitelist
- hosted Modern Transit showcase
- viva/demo map

## Run the real database build

First create the database using `sql/schema.sql`, then replace `YOUR_PASSWORD` in the database scripts with the local MySQL password.

```bash
python src/database_load.py
python src/database_student_view.py
python src/database_faculty_reports.py
python src/database_export.py
```

For the full setup sequence, read `docs/REAL_BUILD.md`.

## Offline CSV examples

The earlier CSV-only scripts remain useful when MySQL is not available:

```bash
python src/student_view.py
python src/faculty_overview.py
python src/bus_wise_report.py
python src/class_wise_report.py
python src/route_wise_report.py
python src/distance_fee_report.py
```

## Hosted showcase

The `showcase/` folder contains the presentation-only HTML/CSS/JavaScript interface deployed to Vercel. It is visually representative of the Student and Faculty portals but is **not** the assessed NCERT-scoped program logic.

## Data safety

All names and transport records in this repository are **fictional demonstration data**. No real school-student personal information should be committed to this public repository.
