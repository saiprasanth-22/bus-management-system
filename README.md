# Bus Management System

A **Class XII Informatics Practices DBMS project** for managing school transport records for students from **Classes I-XII**.

The project is intentionally constrained to concepts and methods supported by the supplied NCERT Informatics Practices Class XII textbook. The goal is to make the project look polished without introducing code the student cannot defend in a viva.

## Project idea

The system models four connected record sets:

```text
BUS ---- ROUTE ---- STOP
  \                  /
        STUDENT
```

The project has two conceptual user experiences:

- **Student Portal** — view assigned bus, route, boarding stop, stop-based transport fee and fee status.
- **Faculty Portal** — maintain transport records and analyse student/bus/route usage.

The visual direction is **Modern Transit**: bright school-tech UI, metro-map route language, clean cards, route colours and restrained transport graphics.

> Important: the website/dashboard UX is currently a design specification only. Runtime implementation remains within the NCERT-supported Python/Pandas/MySQL/Matplotlib scope unless the teacher explicitly allows additional frontend technologies.

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
│   └── NCERT_METHODS.md
├── sql/
│   ├── schema.sql
│   └── queries.sql
├── src/
│   ├── student_view.py
│   ├── faculty_overview.py
│   ├── bus_wise_report.py
│   ├── class_wise_report.py
│   ├── route_wise_report.py
│   └── distance_fee_report.py
└── outputs/
    └── charts/
```

## Current scope

- 48 fictional student transport records
- Classes 1-12 represented
- 6 buses
- 6 routes
- 18 stops with distance and fee data
- Student-side record view demo using Pandas filtering
- Faculty-side overview using sorting, filtering, grouping and counting
- Four report scripts using NCERT-supported Matplotlib/Pandas plotting
- MySQL schema and example queries
- Full UX/walkthrough specification
- NCERT method whitelist

## Run the Python examples

Run scripts from the repository root.

```bash
python src/student_view.py
python src/faculty_overview.py
python src/bus_wise_report.py
python src/class_wise_report.py
python src/route_wise_report.py
python src/distance_fee_report.py
```

The chart scripts save PNG files into `outputs/charts/`.

## Data safety

All names and transport records in this repository are **fictional demonstration data**. No real school-student personal information should be committed to this public repository.
