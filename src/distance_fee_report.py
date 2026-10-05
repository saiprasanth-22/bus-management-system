import pandas as pd
import matplotlib.pyplot as plt

stops = pd.read_csv("data/stops.csv")

stops.plot(
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
