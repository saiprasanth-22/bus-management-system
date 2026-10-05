import pandas as pd
import matplotlib.pyplot as plt

students = pd.read_csv("data/students.csv")

class_strength = students.groupby("ClassNo")["StudentID"].count()

class_strength.plot(
    kind="line",
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
plt.savefig("outputs/charts/class_wise_transport_usage.png")
plt.show()
