import pandas as pd

students = pd.read_csv("data/students.csv")
buses = pd.read_csv("data/buses.csv")
routes = pd.read_csv("data/routes.csv")
stops = pd.read_csv("data/stops.csv")

print("FACULTY TRANSPORT OVERVIEW")

print("\nSTUDENT RECORDS")
print(students)

print("\nSTUDENTS SORTED BY CLASS")
print(students.sort_values(by=["ClassNo"]))

print("\nCLASS 8 STUDENTS")
print(students.loc[students["ClassNo"] == 8])

print("\nBUS B01 STUDENTS")
print(students.loc[students["BusNo"] == "B01"])

print("\nBUS-WISE STUDENT STRENGTH")
print(students.groupby("BusNo")["StudentID"].count())

print("\nROUTE-WISE STUDENT STRENGTH")
print(students.groupby("RouteID")["StudentID"].count())

print("\nCLASS-WISE TRANSPORT USAGE")
print(students.groupby("ClassNo")["StudentID"].count())

print("\nTOTAL RECORD COUNT")
print(students.count())
