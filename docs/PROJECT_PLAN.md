# Project Plan

## Title

**Bus Transport Management System for School Students — Classes I-XII**

## Objective

Create a DBMS-oriented school transport project that can:

1. store student transport records,
2. connect students with buses, routes and stops,
3. retrieve and filter records,
4. sort and group transport data,
5. update or remove records using syllabus-supported methods,
6. generate useful transport reports,
7. visualise the data using Matplotlib.

## Hard technical rule

The supplied NCERT Informatics Practices Class XII textbook is the technical ceiling.

A method is allowed only when it is supported by the book or is directly part of a textbook example. If a useful modern framework or convenience method is outside that scope, it stays out of the executable project.

## Product structure

### Student experience

Purpose: answer only the information a student needs.

- Student details
- Assigned bus
- Assigned route
- Boarding stop
- Distance
- Transport fee
- Fee status

### Faculty experience

Purpose: manage and analyse transport records.

- Dashboard overview
- Student records
- Bus records
- Route records
- Stop records
- Reports

## Platform tour

The walkthrough is a five-step product explanation:

1. **Welcome** — introduces the transport system.
2. **Connected Network** — explains BUS -> ROUTE -> STOP -> STUDENT.
3. **Student Portal** — shows the simple student-facing view.
4. **Faculty Portal** — shows management and reporting.
5. **Reports** — shows how stored records become charts and insights.

The tour is part of the UX design and report presentation. It does not justify adding unsupported frontend code.

## Visual direction

**Modern Transit**

- light/off-white base
- dark navy text
- strong transit blue
- teal/green for positive states
- amber for highlighted transport information
- red only for warnings/errors
- metro-line motif: `●────●────●────●`
- clear tables and transport cards
- flat transport illustrations rather than realistic photographs

## Development phases

### Phase 1 — Foundation
- lock scope
- define database model
- create fictional dataset
- define NCERT whitelist
- define UX flow

### Phase 2 — DBMS
- create MySQL tables
- test SELECT, WHERE, ORDER BY, GROUP BY, HAVING and JOIN queries
- test record updates
- verify relationships

### Phase 3 — Pandas
- import CSV data
- display and filter records
- sort records
- group and count transport usage
- export updated records where required

### Phase 4 — Visualisation
- bus-wise student strength
- class-wise transport usage
- route-wise student strength
- distance vs transport fee

### Phase 5 — Submission
- screenshots
- project report
- schema explanation
- output examples
- viva notes
- final NCERT method audit
