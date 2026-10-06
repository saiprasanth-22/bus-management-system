
const DATA = {
  students: [{"StudentID":"ST001","StudentName":"Aarav Sharma","ClassNo":"1","Section":"A","BusNo":"B01","RouteID":"R01","StopID":"S01","FeeStatus":"Paid"},{"StudentID":"ST002","StudentName":"Diya Patel","ClassNo":"1","Section":"B","BusNo":"B01","RouteID":"R01","StopID":"S02","FeeStatus":"Paid"},{"StudentID":"ST003","StudentName":"Vivaan Rao","ClassNo":"1","Section":"A","BusNo":"B01","RouteID":"R01","StopID":"S01","FeeStatus":"Pending"},{"StudentID":"ST004","StudentName":"Anaya Singh","ClassNo":"2","Section":"A","BusNo":"B02","RouteID":"R02","StopID":"S04","FeeStatus":"Paid"},{"StudentID":"ST005","StudentName":"Arjun Mehta","ClassNo":"2","Section":"B","BusNo":"B03","RouteID":"R03","StopID":"S07","FeeStatus":"Paid"},{"StudentID":"ST006","StudentName":"Isha Nair","ClassNo":"2","Section":"A","BusNo":"B05","RouteID":"R05","StopID":"S13","FeeStatus":"Paid"},{"StudentID":"ST007","StudentName":"Kabir Shah","ClassNo":"2","Section":"B","BusNo":"B01","RouteID":"R01","StopID":"S02","FeeStatus":"Pending"},{"StudentID":"ST008","StudentName":"Meera Joshi","ClassNo":"3","Section":"A","BusNo":"B04","RouteID":"R04","StopID":"S11","FeeStatus":"Paid"},{"StudentID":"ST009","StudentName":"Reyansh Verma","ClassNo":"3","Section":"B","BusNo":"B02","RouteID":"R02","StopID":"S04","FeeStatus":"Paid"},{"StudentID":"ST010","StudentName":"Saanvi Kumar","ClassNo":"3","Section":"A","BusNo":"B02","RouteID":"R02","StopID":"S05","FeeStatus":"Paid"},{"StudentID":"ST011","StudentName":"Aditya Reddy","ClassNo":"3","Section":"B","BusNo":"B03","RouteID":"R03","StopID":"S08","FeeStatus":"Pending"},{"StudentID":"ST012","StudentName":"Kiara Das","ClassNo":"3","Section":"A","BusNo":"B05","RouteID":"R05","StopID":"S14","FeeStatus":"Paid"},{"StudentID":"ST013","StudentName":"Atharv Gupta","ClassNo":"4","Section":"A","BusNo":"B01","RouteID":"R01","StopID":"S03","FeeStatus":"Paid"},{"StudentID":"ST014","StudentName":"Myra Iyer","ClassNo":"4","Section":"B","BusNo":"B04","RouteID":"R04","StopID":"S12","FeeStatus":"Paid"},{"StudentID":"ST015","StudentName":"Dhruv Jain","ClassNo":"4","Section":"A","BusNo":"B06","RouteID":"R06","StopID":"S18","FeeStatus":"Pending"},{"StudentID":"ST016","StudentName":"Riya Kapoor","ClassNo":"5","Section":"A","BusNo":"B02","RouteID":"R02","StopID":"S06","FeeStatus":"Paid"},{"StudentID":"ST017","StudentName":"Ishaan Malhotra","ClassNo":"5","Section":"B","BusNo":"B03","RouteID":"R03","StopID":"S09","FeeStatus":"Paid"},{"StudentID":"ST018","StudentName":"Tara Bose","ClassNo":"5","Section":"A","BusNo":"B05","RouteID":"R05","StopID":"S15","FeeStatus":"Paid"},{"StudentID":"ST019","StudentName":"Krish Yadav","ClassNo":"5","Section":"B","BusNo":"B01","RouteID":"R01","StopID":"S01","FeeStatus":"Paid"},{"StudentID":"ST020","StudentName":"Siya Kulkarni","ClassNo":"6","Section":"A","BusNo":"B04","RouteID":"R04","StopID":"S10","FeeStatus":"Paid"},{"StudentID":"ST021","StudentName":"Advait Menon","ClassNo":"6","Section":"B","BusNo":"B06","RouteID":"R06","StopID":"S16","FeeStatus":"Pending"},{"StudentID":"ST022","StudentName":"Nitya Chawla","ClassNo":"6","Section":"A","BusNo":"B02","RouteID":"R02","StopID":"S04","FeeStatus":"Paid"},{"StudentID":"ST023","StudentName":"Veer Desai","ClassNo":"6","Section":"B","BusNo":"B03","RouteID":"R03","StopID":"S07","FeeStatus":"Paid"},{"StudentID":"ST024","StudentName":"Aanya Rao","ClassNo":"6","Section":"A","BusNo":"B05","RouteID":"R05","StopID":"S13","FeeStatus":"Paid"},{"StudentID":"ST025","StudentName":"Arnav Sethi","ClassNo":"7","Section":"A","BusNo":"B01","RouteID":"R01","StopID":"S02","FeeStatus":"Paid"},{"StudentID":"ST026","StudentName":"Kavya Bhat","ClassNo":"7","Section":"B","BusNo":"B04","RouteID":"R04","StopID":"S11","FeeStatus":"Paid"},{"StudentID":"ST027","StudentName":"Vihaan Saxena","ClassNo":"7","Section":"A","BusNo":"B06","RouteID":"R06","StopID":"S17","FeeStatus":"Paid"},{"StudentID":"ST028","StudentName":"Prisha Roy","ClassNo":"7","Section":"B","BusNo":"B02","RouteID":"R02","StopID":"S05","FeeStatus":"Pending"},{"StudentID":"ST029","StudentName":"Aarohi Mishra","ClassNo":"8","Section":"A","BusNo":"B03","RouteID":"R03","StopID":"S08","FeeStatus":"Paid"},{"StudentID":"ST030","StudentName":"Rohan Pillai","ClassNo":"8","Section":"B","BusNo":"B05","RouteID":"R05","StopID":"S14","FeeStatus":"Paid"},{"StudentID":"ST031","StudentName":"Navya Arora","ClassNo":"8","Section":"A","BusNo":"B01","RouteID":"R01","StopID":"S03","FeeStatus":"Paid"},{"StudentID":"ST032","StudentName":"Yash Jain","ClassNo":"8","Section":"B","BusNo":"B04","RouteID":"R04","StopID":"S12","FeeStatus":"Pending"},{"StudentID":"ST033","StudentName":"Sanvi Reddy","ClassNo":"8","Section":"A","BusNo":"B06","RouteID":"R06","StopID":"S18","FeeStatus":"Paid"},{"StudentID":"ST034","StudentName":"Dev Patel","ClassNo":"8","Section":"B","BusNo":"B02","RouteID":"R02","StopID":"S06","FeeStatus":"Paid"},{"StudentID":"ST035","StudentName":"Anvi Khanna","ClassNo":"9","Section":"A","BusNo":"B03","RouteID":"R03","StopID":"S09","FeeStatus":"Paid"},{"StudentID":"ST036","StudentName":"Shaurya Das","ClassNo":"9","Section":"B","BusNo":"B05","RouteID":"R05","StopID":"S15","FeeStatus":"Paid"},{"StudentID":"ST037","StudentName":"Trisha Nair","ClassNo":"9","Section":"A","BusNo":"B01","RouteID":"R01","StopID":"S01","FeeStatus":"Pending"},{"StudentID":"ST038","StudentName":"Kunal Mehta","ClassNo":"9","Section":"B","BusNo":"B04","RouteID":"R04","StopID":"S10","FeeStatus":"Paid"},{"StudentID":"ST039","StudentName":"Ira Singh","ClassNo":"10","Section":"A","BusNo":"B06","RouteID":"R06","StopID":"S16","FeeStatus":"Paid"},{"StudentID":"ST040","StudentName":"Ayaan Joshi","ClassNo":"10","Section":"B","BusNo":"B02","RouteID":"R02","StopID":"S04","FeeStatus":"Paid"},{"StudentID":"ST041","StudentName":"Samaira Shah","ClassNo":"10","Section":"A","BusNo":"B03","RouteID":"R03","StopID":"S07","FeeStatus":"Paid"},{"StudentID":"ST042","StudentName":"Rishabh Rao","ClassNo":"10","Section":"B","BusNo":"B05","RouteID":"R05","StopID":"S13","FeeStatus":"Paid"},{"StudentID":"ST043","StudentName":"Anika Verma","ClassNo":"10","Section":"A","BusNo":"B01","RouteID":"R01","StopID":"S02","FeeStatus":"Pending"},{"StudentID":"ST044","StudentName":"Neil Kumar","ClassNo":"11","Section":"A","BusNo":"B04","RouteID":"R04","StopID":"S11","FeeStatus":"Paid"},{"StudentID":"ST045","StudentName":"Pari Kapoor","ClassNo":"11","Section":"B","BusNo":"B06","RouteID":"R06","StopID":"S17","FeeStatus":"Paid"},{"StudentID":"ST046","StudentName":"Harsh Gupta","ClassNo":"11","Section":"A","BusNo":"B02","RouteID":"R02","StopID":"S05","FeeStatus":"Pending"},{"StudentID":"ST047","StudentName":"Sneha Iyer","ClassNo":"12","Section":"A","BusNo":"B03","RouteID":"R03","StopID":"S08","FeeStatus":"Paid"},{"StudentID":"ST048","StudentName":"Om Malhotra","ClassNo":"12","Section":"B","BusNo":"B05","RouteID":"R05","StopID":"S14","FeeStatus":"Paid"}],
  buses: [{"BusNo":"B01","DriverName":"Anil Kumar","Capacity":"40","RouteID":"R01"},{"BusNo":"B02","DriverName":"Ramesh Patel","Capacity":"40","RouteID":"R02"},{"BusNo":"B03","DriverName":"Suresh Rao","Capacity":"40","RouteID":"R03"},{"BusNo":"B04","DriverName":"Mahesh Singh","Capacity":"40","RouteID":"R04"},{"BusNo":"B05","DriverName":"Dinesh Kumar","Capacity":"40","RouteID":"R05"},{"BusNo":"B06","DriverName":"Rajesh Verma","Capacity":"40","RouteID":"R06"}],
  routes: [{"RouteID":"R01","RouteName":"North Line","DistanceKm":"12.0"},{"RouteID":"R02","RouteName":"East Line","DistanceKm":"10.5"},{"RouteID":"R03","RouteName":"Lake Line","DistanceKm":"8.0"},{"RouteID":"R04","RouteName":"Central Line","DistanceKm":"6.5"},{"RouteID":"R05","RouteName":"West Line","DistanceKm":"11.0"},{"RouteID":"R06","RouteName":"Garden Line","DistanceKm":"9.0"}],
  stops: [{"StopID":"S01","StopName":"Maple Gate","RouteID":"R01","DistanceKm":"4.0","TransportFee":"900"},{"StopID":"S02","StopName":"North Market","RouteID":"R01","DistanceKm":"8.0","TransportFee":"1200"},{"StopID":"S03","StopName":"Hill View","RouteID":"R01","DistanceKm":"12.0","TransportFee":"1400"},{"StopID":"S04","StopName":"Sunrise Circle","RouteID":"R02","DistanceKm":"3.5","TransportFee":"850"},{"StopID":"S05","StopName":"East Park","RouteID":"R02","DistanceKm":"7.0","TransportFee":"1100"},{"StopID":"S06","StopName":"River Gate","RouteID":"R02","DistanceKm":"10.5","TransportFee":"1350"},{"StopID":"S07","StopName":"Lake Road","RouteID":"R03","DistanceKm":"2.5","TransportFee":"800"},{"StopID":"S08","StopName":"Lotus Junction","RouteID":"R03","DistanceKm":"5.0","TransportFee":"950"},{"StopID":"S09","StopName":"Blue Lake","RouteID":"R03","DistanceKm":"8.0","TransportFee":"1150"},{"StopID":"S10","StopName":"City Square","RouteID":"R04","DistanceKm":"2.0","TransportFee":"800"},{"StopID":"S11","StopName":"Central Avenue","RouteID":"R04","DistanceKm":"4.0","TransportFee":"950"},{"StopID":"S12","StopName":"Station Road","RouteID":"R04","DistanceKm":"6.5","TransportFee":"1050"},{"StopID":"S13","StopName":"West End","RouteID":"R05","DistanceKm":"3.5","TransportFee":"850"},{"StopID":"S14","StopName":"Stadium Cross","RouteID":"R05","DistanceKm":"7.0","TransportFee":"1100"},{"StopID":"S15","StopName":"Orchard Road","RouteID":"R05","DistanceKm":"11.0","TransportFee":"1350"},{"StopID":"S16","StopName":"Garden Gate","RouteID":"R06","DistanceKm":"3.0","TransportFee":"850"},{"StopID":"S17","StopName":"Green Park","RouteID":"R06","DistanceKm":"6.0","TransportFee":"1000"},{"StopID":"S18","StopName":"Valley Road","RouteID":"R06","DistanceKm":"9.0","TransportFee":"1200"}],
  busStatus: [{"BusNo":"B01","CurrentStopID":"S02","TripStatus":"ON ROUTE","LastUpdateTime":"07:28:00"},{"BusNo":"B02","CurrentStopID":"S05","TripStatus":"ON ROUTE","LastUpdateTime":"07:31:00"},{"BusNo":"B03","CurrentStopID":"S08","TripStatus":"ON ROUTE","LastUpdateTime":"07:34:00"},{"BusNo":"B04","CurrentStopID":"S11","TripStatus":"ON ROUTE","LastUpdateTime":"07:36:00"},{"BusNo":"B05","CurrentStopID":"S14","TripStatus":"ON ROUTE","LastUpdateTime":"07:32:00"},{"BusNo":"B06","CurrentStopID":"S18","TripStatus":"COMPLETED","LastUpdateTime":"07:54:00"}],
  tripLogs: [{"LogID":"L001","StudentID":"ST001","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:10:00","CheckOutTime":"07:46:00","TripStatus":"Checked Out"},{"LogID":"L002","StudentID":"ST002","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:11:00","CheckOutTime":"07:47:00","TripStatus":"Checked Out"},{"LogID":"L003","StudentID":"ST003","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:12:00","CheckOutTime":"07:48:00","TripStatus":"Checked Out"},{"LogID":"L004","StudentID":"ST004","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:13:00","CheckOutTime":"07:49:00","TripStatus":"Checked Out"},{"LogID":"L005","StudentID":"ST005","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"07:14:00","CheckOutTime":"07:50:00","TripStatus":"Checked Out"},{"LogID":"L006","StudentID":"ST006","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"07:15:00","CheckOutTime":"07:51:00","TripStatus":"Checked Out"},{"LogID":"L007","StudentID":"ST007","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:16:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L008","StudentID":"ST008","BusNo":"B04","TripDate":"2026-10-06","CheckInTime":"07:17:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L009","StudentID":"ST009","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:18:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L010","StudentID":"ST010","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:19:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L011","StudentID":"ST011","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"07:20:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L012","StudentID":"ST012","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"07:21:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L013","StudentID":"ST013","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:22:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L014","StudentID":"ST014","BusNo":"B04","TripDate":"2026-10-06","CheckInTime":"07:23:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L015","StudentID":"ST015","BusNo":"B06","TripDate":"2026-10-06","CheckInTime":"07:24:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L016","StudentID":"ST016","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:25:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L017","StudentID":"ST017","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"07:26:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L018","StudentID":"ST018","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"07:27:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L019","StudentID":"ST019","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:28:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L020","StudentID":"ST020","BusNo":"B04","TripDate":"2026-10-06","CheckInTime":"07:29:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L021","StudentID":"ST021","BusNo":"B06","TripDate":"2026-10-06","CheckInTime":"07:30:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L022","StudentID":"ST022","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:31:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L023","StudentID":"ST023","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"07:32:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L024","StudentID":"ST024","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"07:10:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L025","StudentID":"ST025","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:11:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L026","StudentID":"ST026","BusNo":"B04","TripDate":"2026-10-06","CheckInTime":"07:12:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L027","StudentID":"ST027","BusNo":"B06","TripDate":"2026-10-06","CheckInTime":"07:13:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L028","StudentID":"ST028","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:14:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L029","StudentID":"ST029","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"07:15:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L030","StudentID":"ST030","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"07:16:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L031","StudentID":"ST031","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:17:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L032","StudentID":"ST032","BusNo":"B04","TripDate":"2026-10-06","CheckInTime":"07:18:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L033","StudentID":"ST033","BusNo":"B06","TripDate":"2026-10-06","CheckInTime":"07:19:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L034","StudentID":"ST034","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:20:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L035","StudentID":"ST035","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"07:21:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L036","StudentID":"ST036","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"07:22:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L037","StudentID":"ST037","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"07:23:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L038","StudentID":"ST038","BusNo":"B04","TripDate":"2026-10-06","CheckInTime":"07:24:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L039","StudentID":"ST039","BusNo":"B06","TripDate":"2026-10-06","CheckInTime":"07:25:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L040","StudentID":"ST040","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"07:26:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L041","StudentID":"ST041","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"07:27:00","CheckOutTime":"","TripStatus":"On Bus"},{"LogID":"L042","StudentID":"ST042","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"","CheckOutTime":"","TripStatus":"Not Boarded"},{"LogID":"L043","StudentID":"ST043","BusNo":"B01","TripDate":"2026-10-06","CheckInTime":"","CheckOutTime":"","TripStatus":"Not Boarded"},{"LogID":"L044","StudentID":"ST044","BusNo":"B04","TripDate":"2026-10-06","CheckInTime":"","CheckOutTime":"","TripStatus":"Not Boarded"},{"LogID":"L045","StudentID":"ST045","BusNo":"B06","TripDate":"2026-10-06","CheckInTime":"","CheckOutTime":"","TripStatus":"Not Boarded"},{"LogID":"L046","StudentID":"ST046","BusNo":"B02","TripDate":"2026-10-06","CheckInTime":"","CheckOutTime":"","TripStatus":"Not Boarded"},{"LogID":"L047","StudentID":"ST047","BusNo":"B03","TripDate":"2026-10-06","CheckInTime":"","CheckOutTime":"","TripStatus":"Not Boarded"},{"LogID":"L048","StudentID":"ST048","BusNo":"B05","TripDate":"2026-10-06","CheckInTime":"","CheckOutTime":"","TripStatus":"Not Boarded"}],
  notifications: [{"NotificationID":"N001","BusNo":"B01","StudentID":"","NotificationType":"START","Message":"Bus B01 started North Line","NotificationTime":"07:00:00"},{"NotificationID":"N002","BusNo":"B02","StudentID":"","NotificationType":"START","Message":"Bus B02 started East Line","NotificationTime":"07:02:00"},{"NotificationID":"N003","BusNo":"B03","StudentID":"","NotificationType":"START","Message":"Bus B03 started Lake Line","NotificationTime":"07:04:00"},{"NotificationID":"N004","BusNo":"B04","StudentID":"","NotificationType":"START","Message":"Bus B04 started Central Line","NotificationTime":"07:05:00"},{"NotificationID":"N005","BusNo":"B05","StudentID":"","NotificationType":"START","Message":"Bus B05 started West Line","NotificationTime":"07:06:00"},{"NotificationID":"N006","BusNo":"B06","StudentID":"","NotificationType":"START","Message":"Bus B06 started Garden Line","NotificationTime":"07:03:00"},{"NotificationID":"N007","BusNo":"B06","StudentID":"","NotificationType":"STOP","Message":"Bus B06 completed Garden Line","NotificationTime":"07:54:00"}]
};

const $ = id => document.getElementById(id);
const find = (arr,key,val) => arr.find(x => x[key] === val);
const byBus = bus => DATA.students.filter(x => x.BusNo === bus);
const byRoute = route => DATA.students.filter(x => x.RouteID === route);
const tripFor = id => find(DATA.tripLogs,"StudentID",id);
const stateFor = bus => find(DATA.busStatus,"BusNo",bus);
const stopFor = id => find(DATA.stops,"StopID",id);
const routeFor = id => find(DATA.routes,"RouteID",id);
const busFor = id => find(DATA.buses,"BusNo",id);
let demoMinute = 55;

function timeNow(){
  demoMinute += 1;
  return "07:" + String(demoMinute).padStart(2,"0") + ":00";
}
function shortTime(value){
  return value ? value.slice(0,5) : "—";
}
function humanStatus(value){
  if(!value) return "Unknown";
  return value.replaceAll("_"," ").replace(/\b\w/g,m=>m.toUpperCase());
}
function statusClass(value){
  return String(value||"").toLowerCase().replaceAll(" ","");
}
function statusChip(value){
  return '<span class="status-chip ' + statusClass(value) + '">' + humanStatus(value) + '</span>';
}
function go(screen){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  $(screen).classList.add("active");
  document.querySelectorAll(".site-nav [data-go]").forEach(x=>x.classList.toggle("active",x.dataset.go===screen));
  if(screen==="student") renderStudent($("studentId").value || "ST001");
  if(screen==="faculty") renderFaculty("dashboard");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
  const goEl=e.target.closest("[data-go]");
  if(goEl) go(goEl.dataset.go);
  const viewEl=e.target.closest("[data-view]");
  if(viewEl) renderFaculty(viewEl.dataset.view);
  const adv=e.target.closest("[data-advance]");
  if(adv){ advanceBus(adv.dataset.advance); renderFaculty("trips"); }
  const check=e.target.closest("[data-check]");
  if(check){ changeCheck(check.dataset.student,check.dataset.check); renderFaculty("checkin"); }
});
document.addEventListener("keydown",e=>{
  const card=e.target.closest("[data-go][tabindex]");
  if(card && (e.key==="Enter" || e.key===" ")){ e.preventDefault(); go(card.dataset.go); }
});

function renderStudent(id){
  id=(id||"").trim().toUpperCase();
  const s=find(DATA.students,"StudentID",id);
  if(!s){
    $("studentContent").innerHTML='<div class="empty-state"><h2>No student record found</h2><p>Try ST001, ST029 or ST047.</p></div>';
    return;
  }

  const bus=busFor(s.BusNo);
  const route=routeFor(s.RouteID);
  const stop=stopFor(s.StopID);
  const trip=tripFor(s.StudentID);
  const state=stateFor(s.BusNo);
  const currentStop=stopFor(state.CurrentStopID);
  const routeStops=DATA.stops.filter(x=>x.RouteID===route.RouteID);
  const notices=DATA.notifications.filter(x=>x.BusNo===s.BusNo).slice().sort((a,b)=>a.NotificationTime.localeCompare(b.NotificationTime));
  const currentIndex=routeStops.findIndex(x=>x.StopID===state.CurrentStopID);

  const routeRows = [
    {name:"School Campus",id:"ORIGIN",distance:"0 km",kind:"origin"},
    ...routeStops.map((x,i)=>({
      name:x.StopName,id:x.StopID,distance:x.DistanceKm+" km",
      kind:(x.StopID===state.CurrentStopID?"current ":"")+(x.StopID===s.StopID?"mine":""),
      passed: state.TripStatus==="COMPLETED" || i<currentIndex
    }))
  ];

  const startNotice=notices.find(x=>x.NotificationType==="START");
  const timeline=[
    {label:"Route started",time:startNotice?.NotificationTime||"",detail:s.BusNo+" / "+route.RouteName,done:!!startNotice},
    {label:"Checked in",time:trip.CheckInTime,detail:trip.CheckInTime?"Student boarded":"No check-in recorded",done:!!trip.CheckInTime},
    {label:"Current bus state",time:state.LastUpdateTime,detail:state.TripStatus==="COMPLETED"?"Route completed":"Last recorded stop: "+currentStop.StopName,current:state.TripStatus!=="COMPLETED",done:state.TripStatus==="COMPLETED"},
    {label:"Checked out",time:trip.CheckOutTime,detail:trip.CheckOutTime?"Student left bus":"No check-out recorded",done:!!trip.CheckOutTime}
  ];

  $("studentContent").innerHTML = `
    <div class="student-overview-grid">
      <section class="panel">
        <div class="student-identity">
          <div class="student-identity-top">
            <div>
              <span class="section-kicker">STUDENT TRANSPORT RECORD</span>
              <h2>${s.StudentName}</h2>
              <p>Class ${s.ClassNo} · Section ${s.Section}</p>
            </div>
            <span class="student-id-chip">${s.StudentID}</span>
          </div>
        </div>
        <div class="record-grid">
          <div class="record-field"><span>Assigned bus</span><strong class="mono">${s.BusNo}</strong></div>
          <div class="record-field"><span>Route</span><strong>${s.RouteID} · ${route.RouteName}</strong></div>
          <div class="record-field"><span>Boarding stop</span><strong>${stop.StopName}</strong></div>
          <div class="record-field"><span>Distance</span><strong class="mono">${stop.DistanceKm} km</strong></div>
          <div class="record-field"><span>Transport fee</span><strong class="mono">₹${stop.TransportFee}</strong></div>
          <div class="record-field"><span>Fee status</span><strong>${statusChip(s.FeeStatus)}</strong></div>
          <div class="record-field"><span>Driver</span><strong>${bus.DriverName}</strong></div>
          <div class="record-field"><span>Trip status</span><strong>${statusChip(trip.TripStatus)}</strong></div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div><span class="section-kicker">ROUTE STATUS</span><h2>${route.RouteName}</h2></div>
          ${statusChip(state.TripStatus)}
        </div>
        <div class="route-panel-body">
          <div class="route-summary-line"><span>${s.BusNo} / ${s.RouteID}</span><span>LAST UPDATE ${shortTime(state.LastUpdateTime)}</span></div>
          <div class="student-route-track">
            ${routeRows.map((x,i)=>`
              <div class="student-route-stop ${x.kind||""}">
                <i></i>
                <div><strong>${x.name}</strong><small>${x.id}${x.kind?.includes("mine")?" / YOUR STOP":""}</small></div>
                <time>${x.distance}</time>
              </div>`).join("")}
          </div>
        </div>
      </section>
    </div>

    <div class="student-secondary-grid">
      <section class="panel">
        <div class="panel-header">
          <div><span class="section-kicker">TODAY</span><h2>Trip activity</h2></div>
          <span class="badge neutral">06 OCT 2026</span>
        </div>
        <div class="timeline-list">
          ${timeline.map(x=>`
            <div class="timeline-item ${x.current?"current":x.done?"done":""}">
              <time>${shortTime(x.time)}</time><i></i>
              <div><strong>${x.label}</strong><small>${x.detail}</small></div>
              <span></span>
            </div>`).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div><span class="section-kicker">ROUTE EVENTS</span><h2>Notifications</h2></div>
          <span class="badge neutral">${notices.length} events</span>
        </div>
        <div class="notice-list">
          ${notices.length ? notices.slice().reverse().map(n=>`
            <div class="notice-item">
              <time>${shortTime(n.NotificationTime)}</time>
              <div><strong>${n.Message}</strong><small>${n.BusNo}</small></div>
              <span class="notice-type">${n.NotificationType}</span>
            </div>`).join("") : '<div class="notice-item"><time>—</time><div><strong>No events recorded</strong><small>Waiting for route activity</small></div><span></span></div>'}
        </div>
      </section>
    </div>`;
}
$("findStudent").addEventListener("click",()=>renderStudent($("studentId").value));
$("studentId").addEventListener("keydown",e=>{if(e.key==="Enter")renderStudent(e.target.value)});

const viewMeta={
  dashboard:["Overview","Current transport activity and record status."],
  students:["Students","Student assignments and current boarding state."],
  buses:["Buses","Vehicle assignments, drivers and route status."],
  routes:["Routes","Configured routes, distances and student demand."],
  stops:["Stops","Boarding locations, route assignments and fees."],
  trips:["Trip monitor","Stop-based progress for each active route."],
  checkin:["Check in / out","Current student boarding records for the morning service."],
  notifications:["Notifications","Recorded route start and completion events."],
  reports:["Reports","Operational summaries derived from the demonstration dataset."]
};

function renderFaculty(view){
  document.querySelectorAll(".sidebar-nav [data-view]").forEach(x=>x.classList.toggle("active",x.dataset.view===view));
  const meta=viewMeta[view]||viewMeta.dashboard;
  $("facultyTitle").textContent=meta[0];
  $("facultySub").textContent=meta[1];

  const checked=DATA.tripLogs.filter(x=>x.CheckInTime).length;
  const onBus=DATA.tripLogs.filter(x=>x.CheckInTime && !x.CheckOutTime).length;
  const notBoarded=DATA.tripLogs.filter(x=>!x.CheckInTime).length;
  const onRoute=DATA.busStatus.filter(x=>x.TripStatus==="ON ROUTE").length;

  let html="";
  if(view==="dashboard"){
    html=`
      <div class="metric-grid">
        ${metric("Checked in",checked,"students with boarding time")}
        ${metric("On bus",onBus,"currently not checked out")}
        ${metric("Not boarded",notBoarded,"no boarding time")}
        ${metric("Buses on route",onRoute,"of "+DATA.buses.length+" buses")}
      </div>
      <div class="workspace-grid">
        <section class="workspace-panel">
          <div class="workspace-panel-header"><div><h2>Active route status</h2><p>Last recorded stop for each bus</p></div><span class="badge success"><i></i> Morning service</span></div>
          <div class="panel-body">${tripList(false)}</div>
        </section>
        <section class="workspace-panel">
          <div class="workspace-panel-header"><div><h2>Route events</h2><p>Latest start and completion records</p></div></div>
          <div class="panel-body">${notificationFeed(DATA.notifications.slice().reverse().slice(0,7))}</div>
        </section>
        <section class="workspace-panel wide">
          <div class="workspace-panel-header"><div><h2>Student records</h2><p>Most recent rows from the fictional dataset</p></div><button class="small-button" data-view="students">View all</button></div>
          ${studentTable(DATA.students.slice(0,10))}
        </section>
      </div>`;
  }
  if(view==="students"){
    html=`<section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Student transport assignments</h2><p>48 fictional records across Classes I–XII</p></div><span class="badge neutral">${DATA.students.length} records</span></div>${studentTable(DATA.students)}</section>`;
  }
  if(view==="buses"){
    html=`<section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Bus register</h2><p>Driver, route, student load and current state</p></div></div><div class="panel-body"><div class="list-stack">${DATA.buses.map(b=>{
      const route=routeFor(b.RouteID),state=stateFor(b.BusNo),stop=stopFor(state.CurrentStopID);
      return listCard(b.BusNo,b.DriverName,route.RouteName+" · "+stop.StopName,byBus(b.BusNo).length+" / "+b.Capacity+" students · "+humanStatus(state.TripStatus));
    }).join("")}</div></div></section>`;
  }
  if(view==="routes"){
    html=`<section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Route register</h2><p>Distance, stops and assigned students</p></div></div><div class="panel-body"><div class="list-stack">${DATA.routes.map(r=>{
      const stopCount=DATA.stops.filter(x=>x.RouteID===r.RouteID).length;
      return listCard(r.RouteID,r.RouteName,r.DistanceKm+" km · "+stopCount+" stops",byRoute(r.RouteID).length+" students");
    }).join("")}</div></div></section>`;
  }
  if(view==="stops"){
    html=`<section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Boarding stops</h2><p>Configured route, distance and transport fee</p></div></div>${stopTable()}</section>`;
  }
  if(view==="trips"){
    html=`<section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Morning trip monitor</h2><p>Stop-based demonstration status — not GPS positioning</p></div><span class="badge warning">Simulation</span></div><div class="panel-body">${tripList(true)}</div></section>`;
  }
  if(view==="checkin"){
    html=`<section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Boarding log</h2><p>Check-in and check-out state for 06 October 2026</p></div><span class="badge neutral">${checked} checked in</span></div>${checkTable()}</section>`;
  }
  if(view==="notifications"){
    html=`<section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Route notification log</h2><p>Start and completion events recorded by bus</p></div><span class="badge neutral">${DATA.notifications.length} events</span></div><div class="panel-body">${notificationFeed(DATA.notifications.slice().reverse())}</div></section>`;
  }
  if(view==="reports"){
    html=reportView();
  }
  $("facultyContent").innerHTML=html;
}
function metric(label,value,detail){
  return `<article class="metric-card"><span>${label}</span><strong>${String(value).padStart(2,"0")}</strong><small>${detail}</small></article>`;
}
function listCard(code,title,sub,meta){
  return `<div class="list-card"><span class="list-code">${code}</span><div><strong>${title}</strong><small>${sub}</small></div><span class="list-meta">${meta}</span></div>`;
}
function studentTable(rows){
  return `<div class="table-wrap"><table class="data-table"><thead><tr><th>ID</th><th>Student</th><th>Class</th><th>Bus</th><th>Route</th><th>Stop</th><th>Trip</th><th>Fee</th></tr></thead><tbody>${rows.map(s=>{
    const trip=tripFor(s.StudentID);
    return `<tr><td class="mono">${s.StudentID}</td><td>${s.StudentName}</td><td class="mono">${s.ClassNo}-${s.Section}</td><td class="mono">${s.BusNo}</td><td class="mono">${s.RouteID}</td><td class="mono">${s.StopID}</td><td>${statusChip(trip.TripStatus)}</td><td>${statusChip(s.FeeStatus)}</td></tr>`;
  }).join("")}</tbody></table></div>`;
}
function stopTable(){
  return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Stop</th><th>Name</th><th>Route</th><th>Distance</th><th>Fee</th></tr></thead><tbody>${DATA.stops.map(s=>`<tr><td class="mono">${s.StopID}</td><td>${s.StopName}</td><td class="mono">${s.RouteID}</td><td class="mono">${s.DistanceKm} km</td><td class="mono">₹${s.TransportFee}</td></tr>`).join("")}</tbody></table></div>`;
}
function tripList(interactive){
  return `<div class="trip-list">${DATA.buses.map(b=>{
    const r=routeFor(b.RouteID),state=stateFor(b.BusNo),current=stopFor(state.CurrentStopID);
    const rs=DATA.stops.filter(x=>x.RouteID===r.RouteID);
    const idx=rs.findIndex(x=>x.StopID===state.CurrentStopID);
    return `<article class="trip-card">
      <div class="trip-card-head">
        <div><span class="section-kicker">${b.BusNo} / ${r.RouteID}</span><h3>${r.RouteName}</h3><small>${b.DriverName} · last stop ${current.StopName} · ${shortTime(state.LastUpdateTime)}</small></div>
        <div class="trip-card-actions">${statusChip(state.TripStatus)}${interactive?'<button class="small-button" data-advance="'+b.BusNo+'">'+(state.TripStatus==="COMPLETED"?"Restart":"Advance")+'</button>':""}</div>
      </div>
      <div class="mini-track">
        <div class="mini-stop done"><i></i><span>School</span></div><b></b>
        ${rs.map((s,i)=>`<div class="mini-stop ${state.TripStatus==="COMPLETED"||i<idx?"done":i===idx?"current":""}"><i></i><span>${s.StopName}</span></div>${i<rs.length-1?"<b></b>":""}`).join("")}
      </div>
    </article>`;
  }).join("")}</div>`;
}
function notificationFeed(rows){
  return `<div class="notification-feed">${rows.map(n=>`<div class="notification-row"><time>${shortTime(n.NotificationTime)}</time><strong>${n.Message}</strong><span>${n.NotificationType}</span></div>`).join("")}</div>`;
}
function checkTable(){
  return `<div class="table-wrap"><table class="data-table"><thead><tr><th>ID</th><th>Student</th><th>Bus</th><th>Check in</th><th>Check out</th><th>Status</th><th>Action</th></tr></thead><tbody>${DATA.students.map(s=>{
    const t=tripFor(s.StudentID);
    let action='<button class="small-button" data-student="'+s.StudentID+'" data-check="in">Check in</button>';
    if(t.CheckInTime&&!t.CheckOutTime) action='<button class="small-button" data-student="'+s.StudentID+'" data-check="out">Check out</button>';
    if(t.CheckOutTime) action='<span class="list-meta">Complete</span>';
    return `<tr><td class="mono">${s.StudentID}</td><td>${s.StudentName}</td><td class="mono">${s.BusNo}</td><td class="mono">${shortTime(t.CheckInTime)}</td><td class="mono">${shortTime(t.CheckOutTime)}</td><td>${statusChip(t.TripStatus)}</td><td>${action}</td></tr>`;
  }).join("")}</tbody></table></div>`;
}
function advanceBus(busNo){
  const state=stateFor(busNo);
  const bus=busFor(busNo);
  const route=routeFor(bus.RouteID);
  const rs=DATA.stops.filter(x=>x.RouteID===route.RouteID);
  const idx=rs.findIndex(x=>x.StopID===state.CurrentStopID);
  const t=timeNow();
  if(state.TripStatus==="COMPLETED"){
    state.CurrentStopID=rs[0].StopID;
    state.TripStatus="ON ROUTE";
    state.LastUpdateTime=t;
    DATA.notifications.push({NotificationID:"N"+String(DATA.notifications.length+1).padStart(3,"0"),BusNo:busNo,StudentID:"",NotificationType:"START",Message:"Bus "+busNo+" started "+route.RouteName,NotificationTime:t});
  }else if(idx<rs.length-1){
    state.CurrentStopID=rs[idx+1].StopID;
    state.LastUpdateTime=t;
  }else{
    state.TripStatus="COMPLETED";
    state.LastUpdateTime=t;
    DATA.notifications.push({NotificationID:"N"+String(DATA.notifications.length+1).padStart(3,"0"),BusNo:busNo,StudentID:"",NotificationType:"STOP",Message:"Bus "+busNo+" completed "+route.RouteName,NotificationTime:t});
  }
}
function changeCheck(id,action){
  const t=tripFor(id);
  if(action==="in"&&!t.CheckInTime){
    t.CheckInTime=timeNow();
    t.TripStatus="On Bus";
  }
  if(action==="out"&&t.CheckInTime&&!t.CheckOutTime){
    t.CheckOutTime=timeNow();
    t.TripStatus="Checked Out";
  }
  if(($("studentId").value||"").trim().toUpperCase()===id) renderStudent(id);
}
function countBy(key){
  return DATA.students.reduce((acc,x)=>{
    acc[x[key]]=(acc[x[key]]||0)+1;
    return acc;
  },{});
}
function barChart(counts){
  const keys=Object.keys(counts).sort();
  const max=Math.max(...keys.map(k=>counts[k]));
  return `<div class="chart">${keys.map(k=>`<div class="chart-col"><i style="--h:${Math.max(10,counts[k]/max*100)}%"></i><span>${k}</span></div>`).join("")}</div>`;
}
function lineChart(){
  const counts=countBy("ClassNo");
  const vals=Array.from({length:12},(_,i)=>counts[String(i+1)]||0);
  const max=Math.max(...vals);
  const pts=vals.map((v,i)=>[18+i*(464/11),145-(v/max*112)]);
  return `<svg class="line-chart" viewBox="0 0 500 170" preserveAspectRatio="none">
    <line class="grid" x1="0" y1="40" x2="500" y2="40"/><line class="grid" x1="0" y1="85" x2="500" y2="85"/><line class="grid" x1="0" y1="145" x2="500" y2="145"/>
    <polyline class="line" points="${pts.map(p=>p.join(",")).join(" ")}"/>
    ${pts.map(p=>`<circle class="dot" cx="${p[0]}" cy="${p[1]}" r="3.5"/>`).join("")}
  </svg>`;
}
function scatterChart(){
  return `<div class="scatter-chart">${DATA.stops.map(s=>`<i title="${s.StopName}" style="left:${Number(s.DistanceKm)/12*94}%;bottom:${(Number(s.TransportFee)-800)/600*88+4}%"></i>`).join("")}</div>`;
}
function reportView(){
  return `<div class="workspace-grid">
    <section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Bus-wise student strength</h2><p>Assigned students by bus</p></div></div><div class="panel-body">${barChart(countBy("BusNo"))}</div></section>
    <section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Class-wise usage</h2><p>Transport users across Classes I–XII</p></div></div><div class="panel-body">${lineChart()}</div></section>
    <section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Route-wise demand</h2><p>Assigned students by route</p></div></div><div class="panel-body">${barChart(countBy("RouteID"))}</div></section>
    <section class="workspace-panel"><div class="workspace-panel-header"><div><h2>Distance vs transport fee</h2><p>Stop distance and configured fee</p></div></div><div class="panel-body">${scatterChart()}</div></section>
  </div>`;
}

/* tour */
const tourSteps=[
  {
    title:"One connected transport record",
    text:"The project links buses, routes, stops and students so the same source data can support both student lookup and faculty operations.",
    visual:'<div class="tour-mini-grid"><div><strong>06</strong><small>BUSES</small></div><div><strong>06</strong><small>ROUTES</small></div><div><strong>18</strong><small>STOPS</small></div><div><strong>48</strong><small>STUDENTS</small></div></div>'
  },
  {
    title:"Student access stays focused",
    text:"The student view shows only the assigned transport record, current trip state, boarding activity and route events.",
    visual:'<div class="tour-record"><header><small>STUDENT TRANSPORT RECORD</small><strong>Aarav Sharma · ST001</strong></header><section><span>BUS / B01</span><span>ROUTE / R01</span><span>STOP / S01</span><span>STATUS / ON BUS</span></section></div>'
  },
  {
    title:"Faculty get an operations workspace",
    text:"The faculty view is deliberately denser: current trips, student assignments, buses, routes, boarding logs, notifications and reports.",
    visual:'<div class="tour-mini-grid"><div><strong>41</strong><small>CHECKED IN</small></div><div><strong>35</strong><small>ON BUS</small></div><div><strong>07</strong><small>NOT BOARDED</small></div><div><strong>05</strong><small>ON ROUTE</small></div></div>'
  },
  {
    title:"Tracking is stop-based",
    text:"For the academic build, the current bus state is represented by the last recorded stop and time. The hosted demo does not claim GPS positioning.",
    visual:'<div class="tour-record"><header><small>R01 / NORTH LINE</small><strong>B01 · ON ROUTE</strong></header><section><span>SCHOOL</span><span>S01 / MAPLE GATE</span><span>S02 / CURRENT</span><span>S03 / HILL VIEW</span></section></div>'
  },
  {
    title:"Records become reports",
    text:"The same data produces bus strength, class usage, route demand and distance-versus-fee charts in the MySQL/Pandas/Matplotlib project core.",
    visual:'<div class="tour-mini-grid"><div><strong>BAR</strong><small>BUS STRENGTH</small></div><div><strong>LINE</strong><small>CLASS USAGE</small></div><div><strong>BAR</strong><small>ROUTE DEMAND</small></div><div><strong>SCATTER</strong><small>DISTANCE / FEE</small></div></div>'
  }
];
let tourIndex=0;
function openTour(index=0){
  tourIndex=index;
  $("tour").classList.add("open");
  $("tour").setAttribute("aria-hidden","false");
  renderTour();
}
function closeTour(){
  $("tour").classList.remove("open");
  $("tour").setAttribute("aria-hidden","true");
}
function renderTour(){
  const step=tourSteps[tourIndex];
  $("progress").innerHTML=tourSteps.map((_,i)=>'<i class="'+(i<=tourIndex?"active":"")+'"></i>').join("");
  $("tourBody").innerHTML='<div class="tour-copy"><span class="section-kicker">STEP '+(tourIndex+1)+' OF '+tourSteps.length+'</span><h2>'+step.title+'</h2><p>'+step.text+'</p></div><div class="tour-visual">'+step.visual+'</div>';
  $("prev").style.visibility=tourIndex===0?"hidden":"visible";
  $("next").textContent=tourIndex===tourSteps.length-1?"Finish":"Next";
}
$("tourBtn").addEventListener("click",()=>openTour());
$("heroTour").addEventListener("click",()=>openTour());
$("facultyTour").addEventListener("click",()=>openTour(2));
$("closeTour").addEventListener("click",closeTour);
$("prev").addEventListener("click",()=>{if(tourIndex>0){tourIndex--;renderTour()}});
$("next").addEventListener("click",()=>{if(tourIndex<tourSteps.length-1){tourIndex++;renderTour()}else closeTour()});
$("tour").addEventListener("click",e=>{if(e.target===$("tour"))closeTour()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeTour()});

renderStudent("ST001");
renderFaculty("dashboard");
