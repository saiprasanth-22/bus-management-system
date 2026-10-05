import pandas as pd
import matplotlib.pyplot as plt

students = pd.read_csv("data/students.csv")
stops = pd.read_csv("data/stops.csv")

student_stop = students.join(
    stops.set_index("StopID"),
    on="StopID",
    rsuffix="_Stop"
)

student_stop.plot(
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
plt.savefig("outputs/charts/distance_vs_transport_fee.png")
plt.show()
