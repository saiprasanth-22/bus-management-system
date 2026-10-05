import pandas as pd
import matplotlib.pyplot as plt

students = pd.read_csv("data/students.csv")

bus_strength = students.groupby("BusNo")["StudentID"].count()

bus_strength.plot(kind="bar", color="blue", edgecolor="black", linewidth=2)

plt.title("Bus-wise Student Strength")
plt.xlabel("Bus Number")
plt.ylabel("Number of Students")
plt.grid()
plt.savefig("outputs/charts/bus_wise_student_strength.png")
plt.show()
