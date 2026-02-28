# User Management RESTful API

##  Project Description

This project is a RESTful API built using Node.js and Express.  
The API allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of users stored in memory.

The purpose of this project is to demonstrate understanding of:

. Routing
. Middleware
. HTTP methods
. Status codes
. Error handling
. In-memory data storage

##  Technologies Used
- Node.js
- Express.js
- Nodemon (for development)
- Postman / ThunderClient (for testing)

## 📁 Project Structure

user-api/
│
├── node_modules/  removed
├── package.json
├── package-lock.json
├── server.js
└── README.md

## ⚙️ Installation and Setup

1️⃣ Clone or Download the Project

Navigate to the project folder:
cd user-api

2️⃣ Install Dependencies
npm install
3️⃣ Start the Server

For normal run:
npm start
For development mode (auto restart):
npm run dev
Server will run at:
http://localhost:3000

## API Endpoints

1. Get All Users

// GET /users  //

Returns the list of all users.

Status Code: 200 OK

2. Get User by ID

// GET /users/:id  //

Returns details of a specific user.

Status Codes:
-200 OK
- 404 Not Found (if user does not exist)

3. Create New User

// POST /user //

Request Body (JSON):
json
{
  "firstName": "Ram",
  "lastName": "Pothineni",
  "hobby": "Acting"
}

Status Codes:
201 Created

400 Bad Request (if required fields are missing)

4. Update User

// PUT /user/:id //

Request Body (JSON):

{
  "firstName": "Updated",
  "lastName": "User",
  "hobby": "Reading"
}

Status Codes:

200 OK

404 Not Found

400 Bad Request
5. Delete User 

// DELETE /user/:id //

Status Codes:

200 OK

404 Not Found

Middleware Implementation
->Logging Middleware

Logs request method, URL, and status code for every request.

-> Validation Middleware

Ensures required fields (firstName, lastName, hobby) are present in POST and PUT requests.

## Error Handling 

The API returns appropriate HTTP status codes:

200 → Successful request

201 → Resource created

400 → Invalid input

404 → Resource not found

500 → Internal server error

## Data Storage

User data is stored in-memory using a JavaScript array.
No database is used in this project.
## Git link
"https://github.com/1Vandhana/user-api-"
