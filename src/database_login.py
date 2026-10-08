import pandas as pd
import pymysql as py
import sqlalchemy

# Change only the password before running this file.
engine = sqlalchemy.create_engine(
    "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/SCHOOLTRANSPORT"
)

# Demonstration credentials used by the hosted Student portal.
username = "student"
password = "1"

login_query = """
SELECT USER_ACCOUNT.Username,
       USER_ACCOUNT.UserRole,
       USER_ACCOUNT.StudentID,
       STUDENT.StudentName
FROM USER_ACCOUNT
LEFT JOIN STUDENT
ON USER_ACCOUNT.StudentID = STUDENT.StudentID
WHERE USER_ACCOUNT.Username = '""" + username + """'
AND USER_ACCOUNT.DemoPassword = '""" + password + """'
"""

account = pd.read_sql_query(login_query, engine)

if account.empty:
    print("Invalid username or password.")
else:
    print("LOGIN SUCCESSFUL")
    print(account)

# The plain demo password keeps the Class XII query easy to explain.
# A real production application must store a secure password hash instead.
