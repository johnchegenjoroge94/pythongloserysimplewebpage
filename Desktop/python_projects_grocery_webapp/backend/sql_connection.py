import mysql.connector
from mysql.connector import Error

__cnx = None

def get_sql_connection():
    global __cnx
    if __cnx is not None and __cnx.is_connected():
        return __cnx

    try:
        print("Opening MySQL connection...")
        __cnx = mysql.connector.connect(
            host="127.0.0.1",   # localhost
            port=3306,          # default MySQL port
            user="root",        # change if different
            password="",        # XAMPP default is empty
            database="grocery_store"  # make sure DB exists
        )
        print("MySQL connection established")
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        __cnx = None
    return __cnx


