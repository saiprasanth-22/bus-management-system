const routes=[["R01","North Line",12,["S01","S02","S03"]],["R02","East Line",10.5,["S04","S05","S06"]],["R03","Lake Line",8,["S07","S08","S09"]],["R04","Central Line",6.5,["S10","S11","S12"]],["R05","West Line",11,["S13","S14","S15"]],["R06","Garden Line",9,["S16","S17","S18"]]].map(x=>({id:x[0],name:x[1],distance:x[2],stops:x[3]}));
const stops=[["S01","Maple Gate","R01",4,900],["S02","North Market","R01",8,1200],["S03","Hill View","R01",12,1400],["S04","Sunrise Circle","R02",3.5,850],["S05","East Park","R02",7,1100],["S06","River Gate","R02",10.5,1350],["S07","Lake Road","R03",2.5,800],["S08","Lotus Junction","R03",5,950],["S09","Blue Lake","R03",8,1150],["S10","City Square","R04",2,800],["S11","Central Avenue","R04",4,950],["S12","Station Road","R04",6.5,1050],["S13","West End","R05",3.5,850],["S14","Stadium Cross","R05",7,1100],["S15","Orchard Road","R05",11,1350],["S16","Garden Gate","R06",3,850],["S17","Green Park","R06",6,1000],["S18","Valley Road","R06",9,1200]].map(x=>({id:x[0],name:x[1],route:x[2],distance:x[3],fee:x[4]}));
const buses=[["B01","Anil Kumar",40,"R01"],["B02","Ramesh Patel",40,"R02"],["B03","Suresh Rao",40,"R03"],["B04","Mahesh Singh",40,"R04"],["B05","Dinesh Kumar",40,"R05"],["B06","Rajesh Verma",40,"R06"]].map(x=>({id:x[0],driver:x[1],capacity:x[2],route:x[3]}));
const raw=[["ST001","Aarav Sharma",1,"A","B01","R01","S01","Paid"],["ST002","Diya Patel",1,"B","B01","R01","S02","Paid"],["ST003","Vivaan Rao",1,"A","B01","R01","S01","Pending"],["ST004","Anaya Singh",2,"A","B02","R02","S04","Paid"],["ST005","Arjun Mehta",2,"B","B03","R03","S07","Paid"],["ST006","Isha Nair",2,"A","B05","R05","S13","Paid"],["ST007","Kabir Shah",2,"B","B01","R01","S02","Pending"],["ST008","Meera Joshi",3,"A","B04","R04","S11","Paid"],["ST009","Reyansh Verma",3,"B","B02","R02","S04","Paid"],["ST010","Saanvi Kumar",3,"A","B02","R02","S05","Paid"],["ST011","Aditya Reddy",3,"B","B03","R03","S08","Pending"],["ST012","Kiara Das",3,"A","B05","R05","S14","Paid"],["ST013","Atharv Gupta",4,"A","B01","R01","S03","Paid"],["ST014","Myra Iyer",4,"B","B04","R04","S12","Paid"],["ST015","Dhruv Jain",4,"A","B06","R06","S18","Pending"],["ST016","Riya Kapoor",5,"A","B02","R02","S06","Paid"],["ST017","Ishaan Malhotra",5,"B","B03","R03","S09","Paid"],["ST018","Tara Bose",5,"A","B05","R05","S15","Paid"],["ST019","Krish Yadav",5,"B","B01","R01","S01","Paid"],["ST020","Siya Kulkarni",6,"A","B04","R04","S10","Paid"],["ST021","Advait Menon",6,"B","B06","R06","S16","Pending"],["ST022","Nitya Chawla",6,"A","B02","R02","S04","Paid"],["ST023","Veer Desai",6,"B","B03","R03","S07","Paid"],["ST024","Aanya Rao",6,"A","B05","R05","S13","Paid"],["ST025","Arnav Sethi",7,"A","B01","R01","S02","Paid"],["ST026","Kavya Bhat",7,"B","B04","R04","S11","Paid"],["ST027","Vihaan Saxena",7,"A","B06","R06","S17","Paid"],["ST028","Prisha Roy",7,"B","B02","R02","S05","Pending"],["ST029","Aarohi Mishra",8,"A","B03","R03","S08","Paid"],["ST030","Rohan Pillai",8,"B","B05","R05","S14","Paid"],["ST031","Navya Arora",8,"A","B01","R01","S03","Paid"],["ST032","Yash Jain",8,"B","B04","R04","S12","Pending"],["ST033","Sanvi Reddy",8,"A","B06","R06","S18","Paid"],["ST034","Dev Patel",8,"B","B02","R02","S06","Paid"],["ST035","Anvi Khanna",9,"A","B03","R03","S09","Paid"],["ST036","Shaurya Das",9,"B","B05","R05","S15","Paid"],["ST037","Trisha Nair",9,"A","B01","R01","S01","Pending"],["ST038","Kunal Mehta",9,"B","B04","R04","S10","Paid"],["ST039","Ira Singh",10,"A","B06","R06","S16","Paid"],["ST040","Ayaan Joshi",10,"B","B02","R02","S04","Paid"],["ST041","Samaira Shah",10,"A","B03","R03","S07","Paid"],["ST042","Rishabh Rao",10,"B","B05","R05","S13","Paid"],["ST043","Anika Verma",10,"A","B01","R01","S02","Pending"],["ST044","Neil Kumar",11,"A","B04","R04","S11","Paid"],["ST045","Pari Kapoor",11,"B","B06","R06","S17","Paid"],["ST046","Harsh Gupta",11,"A","B02","R02","S05","Pending"],["ST047","Sneha Iyer",12,"A","B03","R03","S08","Paid"],["ST048","Om Malhotra",12,"B","B05","R05","S14","Paid"]];
const students=raw.map(x=>({id:x[0],name:x[1],classNo:x[2],section:x[3],bus:x[4],route:x[5],stop:x[6],feeStatus:x[7]}));
const $=id=>document.getElementById(id), by=(a,k,v)=>a.find(x=>x[k]===v), count=(a,k)=>a.reduce((m,x)=>(m[x[k]]=(m[x[k]]||0)+1,m),{});
function go(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$(id).classList.add("active");document.querySelectorAll("nav [data-go]").forEach(x=>x.classList.toggle("active",x.dataset.go===id));if(id==="student")renderStudent($("studentId").value);if(id==="faculty")renderFaculty("dashboard");scrollTo({top:0,behavior:"smooth"})}
document.addEventListener("click",e=>{let g=e.target.closest("[data-go]");if(g)go(g.dataset.go);let v=e.target.closest("[data-view]");if(v)renderFaculty(v.dataset.view)});
function cell(l,v){return '<div class="cell"><span>'+l+'</span><strong>'+v+'</strong></div>'}
function renderStudent(id){id=(id||"ST001").trim().toUpperCase();let s=by(students,"id",id);if(!s){$("studentPass").innerHTML='<div class="pass-head"><div><small>LOOKUP</small><h2>No record found</h2></div></div>';$("studentRoute").innerHTML='<h2>Try ST001, ST029 or ST047</h2>';return}let st=by(stops,"id",s.stop),r=by(routes,"id",s.route),b=by(buses,"id",s.bus);$("studentPass").innerHTML='<div class="pass-head"><div><small>STUDENT TRANSPORT PASS</small><h2>'+s.name+'</h2><small>Class '+s.classNo+' · Section '+s.section+'</small></div><div class="pass-id"><small>STUDENT ID</small><b>'+s.id+'</b></div></div><div class="pass-grid">'+cell("Bus",s.bus)+cell("Route",s.route+" · "+r.name)+cell("Boarding stop",st.name)+cell("Distance",st.distance+" km")+cell("Transport fee","₹"+st.fee)+'<div class="cell"><span>Fee status</span><strong class="pill '+s.feeStatus.toLowerCase()+'">'+s.feeStatus+'</strong></div>'+cell("Driver",b.driver)+cell("Capacity",b.capacity+" seats")+'</div>';
$("studentRoute").innerHTML='<div class="panel-head"><div><h2>'+r.name+'</h2><p>Your route from school to boarding stop.</p></div><span class="route-code">'+r.id+'</span></div><div style="margin-top:22px"><div class="stop"><i></i><div><strong>School Campus</strong><span>Route origin</span></div><span>0 km</span></div>'+r.stops.map(id=>{let x=by(stops,"id",id);return '<div class="stop '+(id===s.stop?'active':'')+'"><i></i><div><strong>'+x.name+'</strong><span>'+x.id+(id===s.stop?' · Your stop':'')+'</span></div><span>'+x.distance+' km</span></div>'}).join("")+'</div><div class="route-summary"><div><span>Bus</span><strong>'+s.bus+'</strong></div><div><span>Your stop</span><strong>'+s.stop+'</strong></div><div><span>Route</span><strong>'+r.distance+' km</strong></div></div>'}
$("findStudent").onclick=()=>renderStudent($("studentId").value);$("studentId").onkeydown=e=>{if(e.key==="Enter")renderStudent(e.target.value)};
const meta={dashboard:["TRANSPORT CONTROL","Network status, assignments and operating totals."],students:["STUDENT RECORDS","Student transport assignments across Classes I–XII."],buses:["BUS OPERATIONS","Bus assignments, drivers and current student strength."],routes:["ROUTE NETWORK","Route lines, stops and student demand."],stops:["BOARDING STOPS","Distance bands, assigned routes and transport fees."],reports:["NETWORK REPORTS","Transport records converted into visual summaries."]};
function table(rows){return '<div class="tablewrap"><table><thead><tr><th>ID</th><th>Student</th><th>Class</th><th>Bus</th><th>Route</th><th>Stop</th><th>Status</th></tr></thead><tbody>'+rows.map(s=>'<tr><td><b>'+s.id+'</b></td><td>'+s.name+'</td><td>'+s.classNo+'-'+s.section+'</td><td>'+s.bus+'</td><td>'+s.route+'</td><td>'+s.stop+'</td><td><span class="pill '+s.feeStatus.toLowerCase()+'">'+s.feeStatus+'</span></td></tr>').join("")+'</tbody></table></div>'}
function bars(c){let ks=Object.keys(c).sort(),max=Math.max(...ks.map(k=>c[k]));return '<div class="bars">'+ks.map(k=>'<div class="bar"><i style="height:'+Math.max(12,c[k]/max*115)+'px"></i><span>'+k+' · '+c[k]+'</span></div>').join("")+'</div>'}
function line(c){let vals=Array.from({length:12},(_,i)=>c[i+1]||0),w=500,h=140,max=Math.max(...vals),pts=vals.map((v,i)=>[18+i*(464/11),120-v/max*95]),p=pts.map(x=>x.join(",")).join(" ");return '<svg viewBox="0 0 500 140" preserveAspectRatio="none"><line class="gridline" x1="0" y1="40" x2="500" y2="40"/><line class="gridline" x1="0" y1="80" x2="500" y2="80"/><line class="gridline" x1="0" y1="120" x2="500" y2="120"/><polyline class="plot" points="'+p+'"/>'+pts.map(x=>'<circle class="pt" cx="'+x[0]+'" cy="'+x[1]+'" r="4"/>').join("")+'</svg>'}
function renderFaculty(v){document.querySelectorAll("[data-view]").forEach(x=>x.classList.toggle("active",x.dataset.view===v));$("facultyTitle").textContent=meta[v][0];$("facultySub").textContent=meta[v][1];let out="",bc=count(students,"bus"),rc=count(students,"route"),cc=count(students,"classNo");
if(v==="dashboard")out='<div class="stats">'+[["Students",48],["Buses",6],["Routes",6],["Pending fees",students.filter(x=>x.feeStatus==="Pending").length]].map(x=>'<div class="stat"><span>'+x[0]+'</span><b>'+x[1]+'</b></div>').join("")+'</div><div class="dashgrid"><section class="data-card"><div class="datahead"><div><h2>Bus-wise strength</h2><p>Students assigned to each bus</p></div></div>'+bars(bc)+'</section><section class="data-card"><div class="datahead"><div><h2>Class-wise usage</h2><p>Classes I–XII</p></div></div>'+line(cc)+'</section><section class="data-card wide"><div class="datahead"><div><h2>Recent records</h2><p>Sample fictional dataset</p></div></div>'+table(students.slice(0,8))+'</section></div>';
if(v==="students")out='<section class="data-card"><div class="datahead"><div><h2>Student records</h2><p>48 fictional assignments</p></div></div>'+table(students)+'</section>';
if(v==="buses")out='<section class="data-card">'+buses.map(b=>{let r=by(routes,"id",b.route);return '<div class="listrow"><span class="tag">'+b.id+'</span><div><b>'+b.driver+'</b><div class="muted">Driver</div></div><div><b>'+r.name+'</b><div class="muted">'+b.route+' · '+r.distance+' km</div></div><div><b>'+bc[b.id]+' / '+b.capacity+'</b><div class="muted">Students / capacity</div></div></div>'}).join("")+'</section>';
if(v==="routes")out='<section class="data-card">'+routes.map(r=>'<div class="listrow"><span class="tag">'+r.id+'</span><div><b>'+r.name+'</b><div class="muted">'+r.stops.length+' stops · '+r.distance+' km</div></div><div></div><b>'+rc[r.id]+' students</b></div>').join("")+'</section>';
if(v==="stops")out='<section class="data-card"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:9px">'+stops.map(s=>'<div class="listrow" style="grid-template-columns:46px 1fr auto"><span class="tag">'+s.id+'</span><div><b>'+s.name+'</b><div class="muted">'+s.route+' · '+s.distance+' km</div></div><div><b>₹'+s.fee+'</b><div class="muted">Fee</div></div></div>').join("")+'</div></section>';
if(v==="reports")out='<div class="reportgrid"><section class="report-card"><h2>Bus-wise strength</h2>'+bars(bc)+'</section><section class="report-card"><h2>Class-wise usage</h2>'+line(cc)+'</section><section class="report-card"><h2>Route-wise strength</h2>'+bars(rc)+'</section><section class="report-card"><h2>Distance vs fee</h2><div class="scatter">'+stops.map(s=>'<i title="'+s.name+'" style="left:'+(s.distance/12*92+3)+'%;bottom:'+((s.fee-800)/600*80+5)+'%"></i>').join("")+'</div></section></div>';$("facultyContent").innerHTML=out}
const tourSteps=[["SCHOOL TRANSIT / START","A transport management platform for Classes I–XII. One school, connected transport records.",'<div class="route blue" style="width:100%"><i>START</i><b></b><span></span><b></b><span></span><b></b><span></span><b></b></div>'],["ONE CONNECTED NETWORK","Every student record points to a bus, route and boarding stop. The same data supports faculty analysis.",'<div class="mini-net"><div><b>BUS</b><br><small>B01–B06</small></div><div><b>ROUTE</b><br><small>R01–R06</small></div><div><b>STOP</b><br><small>S01–S18</small></div><div><b>STUDENT</b><br><small>ST001–ST048</small></div></div>'],["YOUR ROUTE. YOUR STOP. YOUR BUS.","The student side behaves like a transport pass: bus, route, stop, distance, fee and status.",'<div class="mini-pass"><b>Aarav Sharma · ST001</b><div><span>Bus<br><b>B01</b></span><span>Route<br><b>R01</b></span><span>Stop<br><b>S01</b></span><span>Status<br><b style="color:var(--green)">PAID</b></span></div></div>'],["TRANSPORT CONTROL","Faculty get students, buses, routes, stops and reports in one operational view.",'<div class="mini-net"><div><b>48</b><br><small>Students</small></div><div><b>6</b><br><small>Buses</small></div><div><b>6</b><br><small>Routes</small></div><div><b>18</b><br><small>Stops</small></div></div>'],["NETWORK REPORTS","Bus strength, class usage, route demand and distance versus fee are visualised in the academic project with NCERT-supported Pandas and Matplotlib.",'<div style="width:100%">'+bars({"B01":9,"B02":9,"B03":7,"B04":7,"B05":8,"B06":8})+'</div>']];
let ti=0;function openTour(i=0){ti=i;$("tour").classList.add("open");renderTour()}function renderTour(){$("progress").innerHTML=tourSteps.map((_,i)=>'<i class="'+(i<=ti?'on':'')+'"></i>').join("");$("tourBody").innerHTML='<div><span class="eyebrow">STEP '+(ti+1)+' OF 5</span><h2>'+tourSteps[ti][0]+'</h2><p>'+tourSteps[ti][1]+'</p></div><div class="tour-visual">'+tourSteps[ti][2]+'</div>';$("prev").style.visibility=ti?'visible':'hidden';$("next").textContent=ti===4?'Enter Student Portal →':'Next →'}$("tourBtn").onclick=$("heroTour").onclick=()=>openTour();$("facultyTour").onclick=()=>openTour(3);$("closeTour").onclick=()=>$("tour").classList.remove("open");$("prev").onclick=()=>{if(ti){ti--;renderTour()}};$("next").onclick=()=>{if(ti<4){ti++;renderTour()}else{$("tour").classList.remove("open");go("student")}};$("tour").onclick=e=>{if(e.target===$("tour"))$("tour").classList.remove("open")};document.onkeydown=e=>{if(e.key==="Escape")$("tour").classList.remove("open")};

const liveBusStates=[
  {bus:"B01",stop:"S02",status:"ON ROUTE",time:"07:28"},
  {bus:"B02",stop:"S05",status:"ON ROUTE",time:"07:31"},
  {bus:"B03",stop:"S08",status:"ON ROUTE",time:"07:34"},
  {bus:"B04",stop:"S11",status:"ON ROUTE",time:"07:36"},
  {bus:"B05",stop:"S14",status:"ON ROUTE",time:"07:32"},
  {bus:"B06",stop:"S18",status:"COMPLETED",time:"07:54"}
];

const tripState=students.map((s,i)=>({
  student:s.id,
  bus:s.bus,
  checkIn:i<41?"07:"+String(10+(i%23)).padStart(2,"0"):"",
  checkOut:i<6?"07:"+String(46+i).padStart(2,"0"):"",
  status:i<6?"CHECKED OUT":i<41?"ON BUS":"NOT BOARDED"
}));

const liveNotices=[
  {id:"N001",bus:"B01",type:"START",time:"07:00",message:"Bus B01 started North Line"},
  {id:"N002",bus:"B02",type:"START",time:"07:02",message:"Bus B02 started East Line"},
  {id:"N003",bus:"B03",type:"START",time:"07:04",message:"Bus B03 started Lake Line"},
  {id:"N004",bus:"B04",type:"START",time:"07:05",message:"Bus B04 started Central Line"},
  {id:"N005",bus:"B05",type:"START",time:"07:06",message:"Bus B05 started West Line"},
  {id:"N006",bus:"B06",type:"START",time:"07:03",message:"Bus B06 started Garden Line"},
  {id:"N007",bus:"B06",type:"STOP",time:"07:54",message:"Bus B06 completed Garden Line"}
];

let demoMinute=38;
function demoTime(){
  demoMinute++;
  return "07:"+String(demoMinute).padStart(2,"0");
}
function busState(bus){return liveBusStates.find(x=>x.bus===bus)}
function tripFor(id){return tripState.find(x=>x.student===id)}
function noticeForBus(bus){return liveNotices.filter(x=>x.bus===bus).sort((a,b)=>a.time.localeCompare(b.time))}
function statusChip(s){
  let c=s==="COMPLETED"?"complete":s==="NOT STARTED"?"wait":"";
  return '<span class="live-chip '+c+'">'+s+'</span>'
}
function routeProgress(bus){
  let b=by(buses,"id",bus),r=by(routes,"id",b.route),state=busState(bus);
  let current=r.stops.indexOf(state.stop);
  return '<div class="trip-line"><div class="trip-station done"><i></i><span>SCHOOL</span></div>'+
    r.stops.map((id,i)=>{
      let st=by(stops,"id",id),cls=i<current?"done":i===current?"current":"";
      if(state.status==="COMPLETED")cls="done";
      return '<div class="trip-station '+cls+'"><i></i><span>'+st.name.toUpperCase()+'</span></div>'
    }).join("")+'</div>';
}
function studentTripPanel(s){
  let t=tripFor(s.id),state=busState(s.bus),st=by(stops,"id",state.stop);
  let rows=[
    ["ROUTE START",noticeForBus(s.bus).find(x=>x.type==="START")?.time||"—","Bus "+s.bus+" departed","done"],
    ["CHECK IN",t.checkIn||"—",t.checkIn?"Student boarded":"Not recorded",t.checkIn?"done":""],
    ["BUS POSITION",state.time,state.status==="COMPLETED"?"Route completed":"Near "+st.name,state.status==="ON ROUTE"?"current":"done"],
    ["CHECK OUT",t.checkOut||"—",t.checkOut?"Student left bus":"Not recorded",t.checkOut?"done":""]
  ];
  return '<div class="ops-head"><div><span class="ops-kicker">TODAY / CHECK-IN STATUS</span><h2>'+t.status+'</h2></div>'+statusChip(state.status)+'</div><div class="timeline">'+rows.map(x=>'<div class="timeline-row '+x[3]+'"><time>'+x[1]+'</time><i></i><strong>'+x[0]+'</strong><small>'+x[2]+'</small></div>').join("")+'</div>';
}
function studentNoticesPanel(s){
  let ns=noticeForBus(s.bus);
  return '<div class="ops-head"><div><span class="ops-kicker">NOTIFICATIONS / '+s.bus+'</span><h2>ROUTE EVENTS</h2></div><span class="route-code">'+s.route+'</span></div><div class="notice-list">'+
    (ns.length?ns.slice().reverse().map(n=>'<div class="notice-item"><time>'+n.time+'</time><div><strong>'+n.message+'</strong><small>'+n.type+' / '+n.bus+'</small></div></div>').join(""):'<div class="notice-item"><time>—</time><div><strong>No route events yet</strong><small>WAITING</small></div></div>')+
    '</div><div class="track-note">STOP-BASED STATUS DEMO / NOT GPS POSITIONING</div>';
}

function renderStudent(id){
  id=(id||"ST001").trim().toUpperCase();
  let s=by(students,"id",id);
  if(!s){
    $("studentPass").innerHTML='<div class="pass-head"><div><small>LOOKUP</small><h2>NO RECORD FOUND</h2></div></div>';
    $("studentRoute").innerHTML='<div class="panel-head"><h2>TRY ST001 / ST029 / ST047</h2></div>';
    $("studentTrip").innerHTML="";
    $("studentNotices").innerHTML="";
    return;
  }
  let st=by(stops,"id",s.stop),r=by(routes,"id",s.route),b=by(buses,"id",s.bus),state=busState(s.bus);
  $("studentPass").innerHTML='<div class="pass-head"><div><small>STUDENT TRANSPORT PASS</small><h2>'+s.name+'</h2><small>Class '+s.classNo+' · Section '+s.section+'</small></div><div class="pass-id"><small>STUDENT ID</small><b>'+s.id+'</b></div></div><div class="pass-grid">'+cell("Bus",s.bus)+cell("Route",s.route+" · "+r.name)+cell("Boarding stop",st.name)+cell("Distance",st.distance+" km")+cell("Transport fee","₹"+st.fee)+'<div class="cell"><span>Fee status</span><strong class="pill '+s.feeStatus.toLowerCase()+'">'+s.feeStatus+'</strong></div>'+cell("Driver",b.driver)+cell("Trip status",state.status)+'</div>';
  $("studentRoute").innerHTML='<div class="panel-head"><div><h2>'+r.name+'</h2><p>Assigned stop and current bus progress.</p></div>'+statusChip(state.status)+'</div><div style="margin-top:22px"><div class="stop"><i></i><div><strong>School Campus</strong><span>Route origin</span></div><span>0 km</span></div>'+r.stops.map(id=>{let x=by(stops,"id",id);return '<div class="stop '+(id===state.stop?'current ':'')+(id===s.stop?'your-stop':'')+'"><i></i><div><strong>'+x.name+'</strong><span>'+x.id+(id===state.stop?' · Current bus stop':'')+'</span></div><span>'+x.distance+' km</span></div>'}).join("")+'</div><div class="route-summary"><div><span>Bus</span><strong>'+s.bus+'</strong></div><div><span>Your stop</span><strong>'+s.stop+'</strong></div><div><span>Last update</span><strong>'+state.time+'</strong></div></div><div class="track-note">TRACKING IS REPRESENTED BY THE LAST RECORDED STOP, NOT LIVE GPS.</div>';
  $("studentTrip").innerHTML=studentTripPanel(s);
  $("studentNotices").innerHTML=studentNoticesPanel(s);
}

const operationsMeta={
  dashboard:["TRANSPORT CONTROL","Current trip state, check-ins and route operations."],
  students:["STUDENT RECORDS","Student transport assignments across Classes I–XII."],
  buses:["BUS OPERATIONS","Drivers, assigned routes and last recorded stop."],
  routes:["ROUTE NETWORK","Route lines, stops and student demand."],
  stops:["BOARDING STOPS","Distance bands, assigned routes and transport fees."],
  trips:["TRIP MONITOR","Stop-based bus progress. Advance a bus to simulate route movement."],
  checkin:["CHECK IN / OUT","Record the student's current boarding state in the showcase."],
  notifications:["NOTIFICATIONS","Start and stop route events generated during the trip."],
  reports:["NETWORK REPORTS","Transport records converted into visual summaries."]
};

function liveTripBoard(){
  return '<div class="trip-board">'+buses.map(b=>{
    let r=by(routes,"id",b.route),state=busState(b.id),st=by(stops,"id",state.stop);
    return '<article class="trip-bus"><div class="trip-top"><div><span class="ops-kicker">'+b.id+' / '+r.id+'</span><h3>'+r.name+'</h3><div class="trip-meta">'+b.driver+' / LAST STOP: '+st.name.toUpperCase()+' / '+state.time+'</div></div><div class="trip-actions">'+statusChip(state.status)+'<button class="trip-action" data-trip-action="advance" data-bus="'+b.id+'">'+(state.status==="COMPLETED"?"Restart":"Advance")+'</button></div></div>'+routeProgress(b.id)+'</article>'
  }).join("")+'</div>';
}

function checkTable(){
  return '<div class="tablewrap"><table class="ops-table"><thead><tr><th>ID</th><th>Student</th><th>Bus</th><th>Check In</th><th>Check Out</th><th>Trip Status</th><th>Action</th></tr></thead><tbody>'+
    students.map(s=>{
      let t=tripFor(s.id),action=!t.checkIn?'<button class="ops-btn" data-check-action="in" data-student="'+s.id+'">Check in</button>':!t.checkOut?'<button class="ops-btn out" data-check-action="out" data-student="'+s.id+'">Check out</button>':'<button class="ops-btn done" disabled>Done</button>';
      return '<tr><td><b>'+s.id+'</b></td><td>'+s.name+'</td><td>'+s.bus+'</td><td>'+(t.checkIn||"—")+'</td><td>'+(t.checkOut||"—")+'</td><td>'+t.status+'</td><td>'+action+'</td></tr>'
    }).join("")+'</tbody></table></div>';
}
function notificationFeed(){
  return '<div class="feed">'+liveNotices.slice().reverse().map(n=>'<div class="feed-item"><time>'+n.time+'</time><strong>'+n.message+'</strong><span class="feed-type '+n.type.toLowerCase()+'">'+n.type+'</span></div>').join("")+'</div>';
}

function renderFaculty(v){
  document.querySelectorAll("[data-view]").forEach(x=>x.classList.toggle("active",x.dataset.view===v));
  let m=operationsMeta[v]||operationsMeta.dashboard;
  $("facultyTitle").textContent=m[0];$("facultySub").textContent=m[1];
  let out="",bc=count(students,"bus"),rc=count(students,"route"),cc=count(students,"classNo");
  let checked=tripState.filter(x=>x.checkIn).length,onBus=tripState.filter(x=>x.checkIn&&!x.checkOut).length,notBoarded=tripState.filter(x=>!x.checkIn).length,onRoute=liveBusStates.filter(x=>x.status==="ON ROUTE").length;
  if(v==="dashboard")out='<div class="stats">'+[["Checked in",checked],["On bus",onBus],["Not boarded",notBoarded],["Buses on route",onRoute]].map(x=>'<div class="stat"><span>'+x[0]+'</span><b>'+x[1]+'</b></div>').join("")+'</div><div class="dashgrid"><section class="data-card wide"><div class="datahead"><div><h2>Live trip board</h2><p>Stop-based tracking / showcase state</p></div></div>'+liveTripBoard()+'</section><section class="data-card"><div class="datahead"><div><h2>Bus-wise strength</h2><p>Students assigned to each bus</p></div></div>'+bars(bc)+'</section><section class="data-card"><div class="datahead"><div><h2>Class-wise usage</h2><p>Classes I–XII</p></div></div>'+line(cc)+'</section></div>';
  if(v==="students")out='<section class="data-card"><div class="datahead"><div><h2>Student records</h2><p>48 fictional assignments</p></div></div>'+table(students)+'</section>';
  if(v==="buses")out='<section class="data-card">'+buses.map(b=>{let r=by(routes,"id",b.route),s=busState(b.id),st=by(stops,"id",s.stop);return '<div class="listrow"><span class="tag">'+b.id+'</span><div><b>'+b.driver+'</b><div class="muted">DRIVER</div></div><div><b>'+r.name+'</b><div class="muted">'+r.id+' / '+st.name+' / '+s.time+'</div></div><div>'+statusChip(s.status)+'<div class="muted">'+bc[b.id]+' STUDENTS</div></div></div>'}).join("")+'</section>';
  if(v==="routes")out='<section class="data-card">'+routes.map(r=>'<div class="listrow"><span class="tag">'+r.id+'</span><div><b>'+r.name+'</b><div class="muted">'+r.stops.length+' STOPS / '+r.distance+' KM</div></div><div></div><b>'+rc[r.id]+' STUDENTS</b></div>').join("")+'</section>';
  if(v==="stops")out='<section class="data-card"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:9px">'+stops.map(s=>'<div class="listrow" style="grid-template-columns:46px 1fr auto"><span class="tag">'+s.id+'</span><div><b>'+s.name+'</b><div class="muted">'+s.route+' / '+s.distance+' KM</div></div><div><b>₹'+s.fee+'</b><div class="muted">FEE</div></div></div>').join("")+'</div></section>';
  if(v==="trips")out='<div class="data-card"><div class="datahead"><div><h2>Stop-based route tracking</h2><p>ADVANCE changes the current recorded stop and creates START / STOP events.</p></div><span class="status-sub">DEMO / NOT GPS</span></div>'+liveTripBoard()+'</div>';
  if(v==="checkin")out='<section class="data-card"><div class="datahead"><div><h2>Student boarding log</h2><p>Check in when boarding; check out when leaving the bus.</p></div><span class="status-sub">'+checked+' CHECKED IN</span></div>'+checkTable()+'</section>';
  if(v==="notifications")out='<section class="data-card"><div class="datahead"><div><h2>Route event feed</h2><p>Start and completion notices for each bus.</p></div><span class="status-sub">'+liveNotices.length+' EVENTS</span></div>'+notificationFeed()+'</section>';
  if(v==="reports")out='<div class="reportgrid"><section class="report-card"><h2>Bus-wise strength</h2>'+bars(bc)+'</section><section class="report-card"><h2>Class-wise usage</h2>'+line(cc)+'</section><section class="report-card"><h2>Route-wise strength</h2>'+bars(rc)+'</section><section class="report-card"><h2>Distance vs fee</h2><div class="scatter">'+stops.map(s=>'<i title="'+s.name+'" style="left:'+(s.distance/12*92+3)+'%;bottom:'+((s.fee-800)/600*80+5)+'%"></i>').join("")+'</div></section></div>';
  $("facultyContent").innerHTML=out;
}

function advanceBus(id){
  let state=busState(id),b=by(buses,"id",id),r=by(routes,"id",b.route),idx=r.stops.indexOf(state.stop);
  if(state.status==="COMPLETED"){
    state.stop=r.stops[0];state.status="ON ROUTE";state.time=demoTime();
    liveNotices.push({id:"N"+String(liveNotices.length+1).padStart(3,"0"),bus:id,type:"START",time:state.time,message:"Bus "+id+" started "+r.name});
  }else if(idx<r.stops.length-1){
    state.stop=r.stops[idx+1];state.time=demoTime();
  }else{
    state.status="COMPLETED";state.time=demoTime();
    liveNotices.push({id:"N"+String(liveNotices.length+1).padStart(3,"0"),bus:id,type:"STOP",time:state.time,message:"Bus "+id+" completed "+r.name});
  }
}
function changeCheck(id,action){
  let t=tripFor(id),s=by(students,"id",id);
  if(action==="in"&&!t.checkIn){
    t.checkIn=demoTime();t.status="ON BUS";
  }else if(action==="out"&&t.checkIn&&!t.checkOut){
    t.checkOut=demoTime();t.status="CHECKED OUT";
  }
  if($("studentId").value.trim().toUpperCase()===id)renderStudent(id);
}

document.addEventListener("click",e=>{
  let trip=e.target.closest("[data-trip-action]");
  if(trip){advanceBus(trip.dataset.bus);renderFaculty("trips")}
  let check=e.target.closest("[data-check-action]");
  if(check){changeCheck(check.dataset.student,check.dataset.checkAction);renderFaculty("checkin")}
});

renderStudent("ST001");
renderFaculty("dashboard");
