import pandas as pd
import pymysql as py
import sqlalchemy

# Change only the password before running this file.
engine = sqlalchemy.create_engine(
    "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/SCHOOLTRANSPORT"
)

routes = pd.read_csv("data/routes.csv")
stops = pd.read_csv("data/stops.csv")
buses = pd.read_csv("data/buses.csv")
students = pd.read_csv("data/students.csv")

routes.to_sql("ROUTE", engine, if_exists="append", index=False)
stops.to_sql("STOP", engine, if_exists="append", index=False)
buses.to_sql("BUS", engine, if_exists="append", index=False)
students.to_sql("STUDENT", engine, if_exists="append", index=False)

print("Transport records loaded into MySQL.")
print("Routes:", routes.count())
print("Stops:", stops.count())
print("Buses:", buses.count())
print("Students:", students.count())
