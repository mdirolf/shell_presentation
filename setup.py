from pymongo import Connection

Connection().python.test.insert({"x": 1234567890123456}, safe=True)
