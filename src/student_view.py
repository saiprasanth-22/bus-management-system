import pandas as pd

students = pd.read_csv("data/students.csv")
buses = pd.read_csv("data/buses.csv")
routes = pd.read_csv("data/routes.csv")
stops = pd.read_csv("data/stops.csv")

student_id = "ST001"

student = students.loc[students["StudentID"] == student_id]

print("STUDENT TRANSPORT RECORD")
print(student)

print("\nASSIGNED BUS")
print(buses.loc[buses["BusNo"] == "B01"])

print("\nASSIGNED ROUTE")
print(routes.loc[routes["RouteID"] == "R01"])

print("\nBOARDING STOP AND TRANSPORT FEE")
print(stops.loc[stops["StopID"] == "S01"])
