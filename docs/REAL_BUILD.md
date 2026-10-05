# Real Build

The Vercel site is the presentation layer. The actual Informatics Practices build lives in the Python, MySQL, Pandas and Matplotlib files.

## Runtime architecture

```text
CSV seed data
     |
     v
Pandas read_csv()
     |
     v
MySQL tables
ROUTE -> BUS
  |
  -> STOP
      |
      -> STUDENT
     |
     v
Pandas read_sql_query()
     |
     +--> Student transport record
     +--> Faculty tables
     +--> GROUP BY reports
     |
     v
Matplotlib charts
```

## Actual database workflow

### 1. Install the required packages

```bash
pip install pandas
pip install matplotlib
pip install pymysql
pip install sqlalchemy
```

### 2. Create the database

Open MySQL and run:

```text
sql/schema.sql
```

This creates:

- `ROUTE`
- `STOP`
- `BUS`
- `STUDENT`

with primary and foreign keys.

### 3. Add the database password

Open these files:

- `src/database_load.py`
- `src/database_student_view.py`
- `src/database_faculty_reports.py`
- `src/database_export.py`

Replace:

```text
YOUR_PASSWORD
```

with the local MySQL root password.

Do not commit a real password to GitHub.

### 4. Load the fictional records

From the repository root:

```bash
python src/database_load.py
```

The loader reads the four CSV files using Pandas and appends them to the corresponding MySQL tables.

Run it once after creating a fresh database. Running it repeatedly without clearing the tables will conflict with the primary keys.

### 5. View a student's real database record

Open:

```text
src/database_student_view.py
```

Change:

```python
student_id = "ST001"
```

to another fictional ID such as `ST029` or `ST047`, then run:

```bash
python src/database_student_view.py
```

The output is read from MySQL, not from the CSV file.

### 6. Run faculty reports from MySQL

```bash
python src/database_faculty_reports.py
```

This reads database records, prints grouped summaries and saves four report charts.

### 7. Export the live MySQL records back to CSV

```bash
python src/database_export.py
```

The exported copies appear under `outputs/`.

## Faculty record changes

The project keeps record-editing SQL visible in:

```text
sql/queries.sql
```

For example, fee status can be changed with an `UPDATE` query and then the Python reports can be rerun to show the current database state.

## Submission boundary

The real syllabus-scoped build is:

```text
data/
sql/
src/
outputs/
docs/
```

The `showcase/` folder is only a hosted visual demonstration and is intentionally separated from the assessed Python/MySQL/Pandas/Matplotlib code.
