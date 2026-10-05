import pandas as pd
import pymysql as py
import sqlalchemy
import matplotlib.pyplot as plt

# Change only the password before running this file.
engine = sqlalchemy.create_engine(
    "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/SCHOOLTRANSPORT"
)

students = pd.read_sql_query(
    "SELECT * FROM STUDENT ORDER BY ClassNo, StudentName",
    engine
)

bus_strength = pd.read_sql_query(
    """
    SELECT BusNo, COUNT(*) AS StudentStrength
    FROM STUDENT
    GROUP BY BusNo
    ORDER BY BusNo
    """,
    engine
)

class_strength = pd.read_sql_query(
    """
    SELECT ClassNo, COUNT(*) AS StudentStrength
    FROM STUDENT
    GROUP BY ClassNo
    ORDER BY ClassNo
    """,
    engine
)

route_strength = pd.read_sql_query(
    """
    SELECT RouteID, COUNT(*) AS StudentStrength
    FROM STUDENT
    GROUP BY RouteID
    ORDER BY RouteID
    """,
    engine
)

distance_fee = pd.read_sql_query(
    "SELECT StopID, StopName, DistanceKm, TransportFee FROM STOP ORDER BY DistanceKm",
    engine
)

print("FACULTY TRANSPORT OVERVIEW")
print("\nSTUDENT RECORDS")
print(students)

print("\nBUS-WISE STUDENT STRENGTH")
print(bus_strength)

print("\nCLASS-WISE TRANSPORT USAGE")
print(class_strength)

print("\nROUTE-WISE STUDENT STRENGTH")
print(route_strength)

bus_status = pd.read_sql_query(
    """
    SELECT BUS_STATUS.BusNo,
           ROUTE.RouteName,
           STOP.StopName,
           BUS_STATUS.TripStatus,
           BUS_STATUS.LastUpdateTime
    FROM BUS_STATUS
    JOIN BUS
    ON BUS_STATUS.BusNo = BUS.BusNo
    JOIN ROUTE
    ON BUS.RouteID = ROUTE.RouteID
    JOIN STOP
    ON BUS_STATUS.CurrentStopID = STOP.StopID
    ORDER BY BUS_STATUS.BusNo
    """,
    engine
)

trip_status = pd.read_sql_query(
    """
    SELECT TripStatus, COUNT(*) AS StudentCount
    FROM TRIP_LOG
    GROUP BY TripStatus
    """,
    engine
)

notifications = pd.read_sql_query(
    "SELECT * FROM NOTIFICATION ORDER BY NotificationTime",
    engine
)

print("\nCURRENT BUS TRACKING")
print(bus_status)

print("\nCHECK-IN / CHECK-OUT SUMMARY")
print(trip_status)

print("\nSTART / STOP NOTIFICATIONS")
print(notifications)

bus_strength.plot(
    kind="bar",
    x="BusNo",
    y="StudentStrength",
    color="blue",
    edgecolor="black",
    linewidth=2
)
plt.title("Bus-wise Student Strength")
plt.xlabel("Bus Number")
plt.ylabel("Number of Students")
plt.grid()
plt.savefig("outputs/charts/mysql_bus_wise_student_strength.png")
plt.show()

class_strength.plot(
    kind="line",
    x="ClassNo",
    y="StudentStrength",
    color="blue",
    marker="*",
    markersize=10,
    linewidth=2,
    linestyle="--"
)
plt.title("Class-wise Transport Usage")
plt.xlabel("Class")
plt.ylabel("Number of Students")
plt.grid()
plt.savefig("outputs/charts/mysql_class_wise_transport_usage.png")
plt.show()

route_strength.plot(
    kind="bar",
    x="RouteID",
    y="StudentStrength",
    color="green",
    edgecolor="black",
    linewidth=2,
    linestyle="--"
)
plt.title("Route-wise Student Strength")
plt.xlabel("Route")
plt.ylabel("Number of Students")
plt.grid()
plt.savefig("outputs/charts/mysql_route_wise_student_strength.png")
plt.show()

distance_fee.plot(
    kind="scatter",
    x="DistanceKm",
    y="TransportFee",
    color="blue",
    marker="*"
)
plt.title("Distance vs Transport Fee")
plt.xlabel("Distance from School (km)")
plt.ylabel("Transport Fee")
plt.grid()
plt.savefig("outputs/charts/mysql_distance_vs_transport_fee.png")
plt.show()
