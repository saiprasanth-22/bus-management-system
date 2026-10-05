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
bus_status = pd.read_csv("data/bus_status.csv")
trip_logs = pd.read_csv("data/trip_logs.csv")
notifications = pd.read_csv("data/notifications.csv")

routes.to_sql("ROUTE", engine, if_exists="append", index=False)
stops.to_sql("STOP", engine, if_exists="append", index=False)
buses.to_sql("BUS", engine, if_exists="append", index=False)
students.to_sql("STUDENT", engine, if_exists="append", index=False)
bus_status.to_sql("BUS_STATUS", engine, if_exists="append", index=False)
trip_logs.to_sql("TRIP_LOG", engine, if_exists="append", index=False)
notifications.to_sql("NOTIFICATION", engine, if_exists="append", index=False)

print("Transport records loaded into MySQL.")
print("Routes:", routes.count())
print("Stops:", stops.count())
print("Buses:", buses.count())
print("Students:", students.count())
print("Bus status:", bus_status.count())
print("Trip logs:", trip_logs.count())
print("Notifications:", notifications.count())
