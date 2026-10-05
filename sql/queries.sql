-- View all student transport records
SELECT * FROM STUDENT;

-- Students in a particular class
SELECT * FROM STUDENT
WHERE ClassNo = 8;

-- Students travelling in a particular bus
SELECT * FROM STUDENT
WHERE BusNo = 'B01';

-- Students assigned to a particular route
SELECT * FROM STUDENT
WHERE RouteID = 'R02';

-- Students boarding at a particular stop
SELECT * FROM STUDENT
WHERE StopID = 'S08';

-- Sort students by class
SELECT * FROM STUDENT
ORDER BY ClassNo;

-- Bus-wise student strength
SELECT BusNo, COUNT(*) AS StudentStrength
FROM STUDENT
GROUP BY BusNo
ORDER BY BusNo;

-- Route-wise student strength
SELECT RouteID, COUNT(*) AS StudentStrength
FROM STUDENT
GROUP BY RouteID
ORDER BY RouteID;

-- Class-wise transport usage
SELECT ClassNo, COUNT(*) AS StudentStrength
FROM STUDENT
GROUP BY ClassNo
ORDER BY ClassNo;

-- Average stop-based transport fee
SELECT AVG(TransportFee)
FROM STOP;

-- Highest and lowest stop-based transport fee
SELECT MAX(TransportFee), MIN(TransportFee)
FROM STOP;

-- Buses with more than 7 assigned students
SELECT BusNo, COUNT(*) AS StudentStrength
FROM STUDENT
GROUP BY BusNo
HAVING COUNT(*) > 7;

-- Student with bus details using JOIN
SELECT STUDENT.StudentID, STUDENT.StudentName, STUDENT.BusNo,
       BUS.DriverName, BUS.Capacity
FROM STUDENT JOIN BUS
ON STUDENT.BusNo = BUS.BusNo;

-- Student with route details using JOIN
SELECT STUDENT.StudentID, STUDENT.StudentName, STUDENT.RouteID,
       ROUTE.RouteName, ROUTE.DistanceKm
FROM STUDENT JOIN ROUTE
ON STUDENT.RouteID = ROUTE.RouteID;

-- Student with boarding stop and fee using JOIN
SELECT STUDENT.StudentID, STUDENT.StudentName, STUDENT.StopID,
       STOP.StopName, STOP.DistanceKm, STOP.TransportFee
FROM STUDENT JOIN STOP
ON STUDENT.StopID = STOP.StopID;

-- Example faculty update
UPDATE STUDENT
SET FeeStatus = 'Paid'
WHERE StudentID = 'ST003';
