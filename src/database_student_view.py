import pandas as pd
import pymysql as py
import sqlalchemy

# Change only the password before running this file.
engine = sqlalchemy.create_engine(
    "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/SCHOOLTRANSPORT"
)

# Change this value to view another student's record.
student_id = "ST001"

query = """
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

student = pd.read_sql_query(query, engine)

print("STUDENT TRANSPORT RECORD")
print(student)
