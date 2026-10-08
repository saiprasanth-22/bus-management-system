-- View all student transport records
SELECT * FROM STUDENT;

-- Role-based login with an optional linked student record
SELECT USER_ACCOUNT.Username,
       USER_ACCOUNT.UserRole,
       USER_ACCOUNT.StudentID,
       STUDENT.StudentName
FROM USER_ACCOUNT
LEFT JOIN STUDENT
ON USER_ACCOUNT.StudentID = STUDENT.StudentID
WHERE USER_ACCOUNT.Username = 'student'
AND USER_ACCOUNT.DemoPassword = '1';

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

-- Current stop-based bus tracking
SELECT BUS_STATUS.BusNo,
       ROUTE.RouteName,
       STOP.StopName,
       BUS_STATUS.TripStatus,
       BUS_STATUS.LastUpdateTime
FROM BUS_STATUS
JOIN BUS
ON BUS_STATUS.BusNo = BUS.BusNo
JOIN ROUTE
ON BUS.RouteID = ROUTE.RouteID
JOIN STOP
ON BUS_STATUS.CurrentStopID = STOP.StopID
ORDER BY BUS_STATUS.BusNo;

-- Today's check-in and check-out records
SELECT StudentID, BusNo, CheckInTime, CheckOutTime, TripStatus
FROM TRIP_LOG
WHERE TripDate = '2026-10-06'
ORDER BY CheckInTime;

-- Check one student's trip record
SELECT * FROM TRIP_LOG
WHERE StudentID = 'ST001';

-- Count students by trip status
SELECT TripStatus, COUNT(*) AS StudentCount
FROM TRIP_LOG
GROUP BY TripStatus;

-- Start/stop notification records for one bus
SELECT NotificationType, Message, NotificationTime
FROM NOTIFICATION
WHERE BusNo = 'B01'
ORDER BY NotificationTime;

-- Example: move bus B01 to the next stop
UPDATE BUS_STATUS
SET CurrentStopID = 'S03',
    TripStatus = 'ON ROUTE',
    LastUpdateTime = '07:42:00'
WHERE BusNo = 'B01';

-- Example: check out student ST001
UPDATE TRIP_LOG
SET CheckOutTime = '07:48:00',
    TripStatus = 'Checked Out'
WHERE StudentID = 'ST001'
AND TripDate = '2026-10-06';

-- Example: mark bus B01 route as completed
UPDATE BUS_STATUS
SET TripStatus = 'COMPLETED',
    LastUpdateTime = '07:55:00'
WHERE BusNo = 'B01';
