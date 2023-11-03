# Environment Variables
```
PORT = 8000
DB_URI = mongodb://localhost:27017/catalysis
```

# API Endpoints

* ```POST /api/register```
Send the request with the following details in the Requst body as shown in the sample below
```
{
    "name": "John Doe",
    "usn": "1DS21IS200",
    "phoneNumber": "9876543210",
    "emailId": "1ds21is200@dsce.edu.com",
    "semester":5,
    "branch":"Information Science & Engineering",
    "events":["Quiz Up"]
}
```