
# Attendance management App
CRUD operations are the bread and butter of backend systems. This is because they allow you to "Create", "Read", "Update", and "Delete" data through your API.So, in this app CRUD operation have been used + MongoDB is also used in it.


## Features

- Mark attendance
- View all attendance records
- View a specific attendance record by ID
- Update an attendance record
- Delete an attendance record
## Setting up
To set up  app you need to install some packages by running commands in terminal.

1 . Install node.js.

2 . Initialize project by running (npm init -y) in terminal

3 . Install express.js
          
    npm install express
    npm i mongoose

## Installation

Install my-project with 

```bash
  git clone https://github.com/hareem09/Attendance-management-mongoDB/tree/main
```
Change directory by running

```bash
cd Attendance
```
    
## Usage
Start the server
```bash
node index.js
```
The server will be running at port:
```bash
http://localhost:3000
```


## dataSchema
Make a separate file attendanceModel.js then require mongoose.
to connect with mongoDB :
```bash
const mongodb=require('mongoose')
mongodb.connect('mongodb://localhost:27017/data')
let statusSchema=new mongodb.Schema({
    status:String,
    date:String
})
module.exports = mongodb.model('attendance',statusSchema);
```
Then make a separate file name app.js and import that in a variable.
## MongoDB CRUD operations 
Here's a quick overview of the  methods used in it:

1. db.collection.find() => to view all students
2. db.collection.findOneAndUpdate( filter, update, options ) => old one, new one , true:new  
3. db.collection.findOneAndDelete( filter, options ) => the name which you want to delete,true:new.

## API Endpoints
1. Get all attendance
```bash
GET/attendance
```
2. Mark attendance
```bash
POST/attendance
```
Body
```bash
{
    "status":"Present",
    "date":"2025-04-15"
}
```
3. Update status
```bash
PUT/updateattendance/:id
```
Body
```bash
{
    "status":"Absent",
}
```
5. Delete attendance
```bash
DELETE/attendance/:id
```
6. Get attendance by id
```bash
GET/attendance/:id
```
7. Get attendance by date
```bash
GET/attendance/:date
```