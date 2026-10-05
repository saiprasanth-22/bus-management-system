import pandas as pd
import pymysql as py
import sqlalchemy

# Change only the password before running this file.
engine = sqlalchemy.create_engine(
    "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/SCHOOLTRANSPORT"
)

# Change this value to view another student's record.
student_id = "ST001"

student_query = """
SELECT STUDENT.StudentID,
       STUDENT.StudentName,
       STUDENT.ClassNo,
       STUDENT.Section,
       STUDENT.BusNo,
       BUS.DriverName,
       STUDENT.RouteID,
       ROUTE.RouteName,
       STUDENT.StopID,
       STOP.StopName,
       STOP.DistanceKm,
       STOP.TransportFee,
       STUDENT.FeeStatus
FROM STUDENT
JOIN BUS
ON STUDENT.BusNo = BUS.BusNo
JOIN ROUTE
ON STUDENT.RouteID = ROUTE.RouteID
JOIN STOP
ON STUDENT.StopID = STOP.StopID
WHERE STUDENT.StudentID = '""" + student_id + """'
"""

tracking_query = """
SELECT BUS_STATUS.BusNo,
       BUS_STATUS.TripStatus,
       BUS_STATUS.LastUpdateTime,
       STOP.StopID,
       STOP.StopName
FROM BUS_STATUS
JOIN STUDENT
ON BUS_STATUS.BusNo = STUDENT.BusNo
JOIN STOP
ON BUS_STATUS.CurrentStopID = STOP.StopID
WHERE STUDENT.StudentID = '""" + student_id + """'
"""

trip_query = """
SELECT TripDate, CheckInTime, CheckOutTime, TripStatus
FROM TRIP_LOG
WHERE StudentID = '""" + student_id + """'
"""

notification_query = """
SELECT NOTIFICATION.NotificationType,
       NOTIFICATION.Message,
       NOTIFICATION.NotificationTime
FROM NOTIFICATION
JOIN STUDENT
ON NOTIFICATION.BusNo = STUDENT.BusNo
WHERE STUDENT.StudentID = '""" + student_id + """'
ORDER BY NOTIFICATION.NotificationTime
"""

student = pd.read_sql_query(student_query, engine)
tracking = pd.read_sql_query(tracking_query, engine)
trip = pd.read_sql_query(trip_query, engine)
notifications = pd.read_sql_query(notification_query, engine)

print("STUDENT TRANSPORT RECORD")
print(student)

print("\nCURRENT BUS STATUS")
print(tracking)

print("\nTODAY'S CHECK-IN / CHECK-OUT")
print(trip)

print("\nSTART / STOP NOTIFICATIONS")
print(notifications)
