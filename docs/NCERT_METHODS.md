# NCERT Method Whitelist

This file is the guardrail for the project.

Source basis: the supplied **NCERT Informatics Practices Textbook for Class XII**. The project should not introduce programming techniques simply because they are convenient.

## Python libraries explicitly used in the textbook

Allowed:

```python
import pandas as pd
import matplotlib.pyplot as plt
```

The textbook also discusses `pymysql` and `sqlalchemy` for transfer between Pandas and MySQL.

## Pandas operations approved for this project

The textbook covers or demonstrates:

- `pd.DataFrame(...)`
- `pd.read_csv(...)`
- `DataFrame.to_csv(...)`
- column selection
- row/column label selection with `.loc[]`
- adding/changing rows using `.loc[]`
- `DataFrame.drop(...)`
- `DataFrame.sort_values(...)`
- `DataFrame.count()`
- descriptive statistics
- aggregation: `max`, `min`, `sum`, `count`, `std`, `var`
- grouping with `groupby()`
- `pivot()`
- `pivot_table()`
- handling missing values
- import/export between Pandas and MySQL
- DataFrame plotting with `.plot(...)`

Only a subset is used in the first implementation.

## Matplotlib / plotting operations approved

The textbook lists:

- `plt.plot(...)`
- `plt.bar(...)`
- `plt.boxplot(...)`
- `plt.hist(...)`
- `plt.pie(...)`
- `plt.scatter(...)`
- `plt.grid(...)`
- `plt.legend(...)`
- `plt.savefig(...)`
- `plt.show(...)`
- `plt.title(...)`
- `plt.xlabel(...)`
- `plt.ylabel(...)`
- `plt.xticks(...)`
- `plt.yticks(...)`

Pandas plot kinds covered include:

- `line`
- `bar`
- `barh`
- `hist`
- `box`
- `area`
- `pie`
- `scatter`

The textbook also demonstrates chart customisation such as colour, marker, marker size, edge colour, line width, line style, fill and hatch.

## SQL features approved for project queries

The textbook covers or directly exercises:

- `SELECT`
- `WHERE`
- `ORDER BY`
- `GROUP BY`
- `HAVING`
- `DISTINCT`
- aggregate functions `MAX()`, `MIN()`, `AVG()`, `SUM()`, `COUNT()`, `COUNT(*)`
- `LIKE`
- `JOIN ... ON`
- `NATURAL JOIN`
- arithmetic expressions
- `ALTER TABLE`
- `UPDATE ... SET ...`
- numeric functions `POWER()`, `ROUND()`, `MOD()`
- string functions `UCASE()/UPPER()`, `LOWER()/LCASE()`, `MID()/SUBSTRING()/SUBSTR()`, `LENGTH()`, `LEFT()`, `RIGHT()`, `INSTR()`, `LTRIM()`, `RTRIM()`, `TRIM()`
- date functions `NOW()`, `DATE()`, `MONTH()`, `MONTHNAME()`, `YEAR()`, `DAY()`, `DAYNAME()`

The chapter also assumes previously learned database/table creation and manipulation from Class XI, and its exercises require table creation with appropriate data types and constraints.

## Deliberately excluded unless teacher explicitly allows them

Do not add these to the executable project by default:

- Flask
- Django
- FastAPI
- React
- Vue
- Node.js
- JavaScript application logic
- HTML/CSS frontend implementation
- Tkinter
- PyQt
- Streamlit
- Plotly
- Seaborn
- APIs
- GPS/live tracking
- QR/RFID systems
- authentication frameworks
- ORM frameworks
- AI features
- advanced Python classes/OOP
- decorators
- list/dict comprehensions used as clever shortcuts
- `input()`-driven menus until basic Python scope is explicitly confirmed by the teacher

## Rule for future commits

Before adding a new Python/Pandas/SQL/Matplotlib method:

1. verify that it appears in the textbook,
2. add it to this whitelist,
3. only then use it in project code.
