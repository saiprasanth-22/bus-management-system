import pandas as pd
import pymysql as py
import sqlalchemy

# Change only the password before running this file.
engine = sqlalchemy.create_engine(
    "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/SCHOOLTRANSPORT"
)

students = pd.read_sql_query("SELECT * FROM STUDENT", engine)
buses = pd.read_sql_query("SELECT * FROM BUS", engine)
routes = pd.read_sql_query("SELECT * FROM ROUTE", engine)
stops = pd.read_sql_query("SELECT * FROM STOP", engine)
bus_status = pd.read_sql_query("SELECT * FROM BUS_STATUS", engine)
trip_logs = pd.read_sql_query("SELECT * FROM TRIP_LOG", engine)
notifications = pd.read_sql_query("SELECT * FROM NOTIFICATION", engine)

students.to_csv("outputs/students_from_mysql.csv", index=False)
buses.to_csv("outputs/buses_from_mysql.csv", index=False)
routes.to_csv("outputs/routes_from_mysql.csv", index=False)
stops.to_csv("outputs/stops_from_mysql.csv", index=False)
bus_status.to_csv("outputs/bus_status_from_mysql.csv", index=False)
trip_logs.to_csv("outputs/trip_logs_from_mysql.csv", index=False)
notifications.to_csv("outputs/notifications_from_mysql.csv", index=False)

print("MySQL records exported to CSV files in outputs/.")
