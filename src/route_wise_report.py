import pandas as pd
import matplotlib.pyplot as plt

students = pd.read_csv("data/students.csv")

route_strength = students.groupby("RouteID")["StudentID"].count()

route_strength.plot(
    kind="bar",
    color="green",
    edgecolor="black",
    linewidth=2,
    linestyle="--"
)

plt.title("Route-wise Student Strength")
plt.xlabel("Route")
plt.ylabel("Number of Students")
plt.grid()
plt.savefig("outputs/charts/route_wise_student_strength.png")
plt.show()
