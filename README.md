# University register system API

An API using express and sequelizer to manage a very simple university register system. It supports CRUD operations with JWT authentication for every table in the database.

## Database diagram

![alt database diagram](./assets/databse-diagram.jpg)

## Requests

The following are the requests supported by the API listed according to the table.

### Course

[add course request](./requests/courses/addCourse.rest)

[update course request](./requests/courses/updateCourse.rest)

[get course request](./requests/courses/getCourse.rest)

### Internship

[add internship request](./requests/internships/addInternship.rest)

[update internship request](./requests/internships/updateInternship.rest)

[get internship request](./requests/internships/getInternship.rest)

### CourseInternship


[add courseinternship request](./requests/internshipCourse/addInternshipCourse.rest)

[update courseinternship request](./requests/internshipCourse/updateInternshipCourse.rest)

[get courseinternship request](./requests/internshipCourse/getInternshipCourse.rest)

### Professor

[add professor request](./requests/professor/addProfessor.rest)

[update professor request](./requests/professor/updateProfessor.rest)

[get professor request](./requests/professor/getProfessor.rest)

### Topic

[add topic request](./requests/topic/addTopic.rest)

[update topic request](./requests/topic/updateTopic.rest)

[get topic request](./requests/topic/getTopic.rest)

### User

[login user request](./requests/user/userLogin.rest)

[register user request](./requests/user/userRegistration.rest)

## Usage

1. Install the necessary packages

    `npm install`

2. Add your database configuration settings in the [database config](./db/db.config.js) file

3. Start the server

    `npm start-dev`

## Request authorzation with JWT

This API uses JWT to authorize requests made to the database, after user registration use the access token provided by the [login request](./requests/user/userLogin.rest) to make request to other tables in the database adding an authorization header. The following is an example to ilustrate the structure of the request.

```
POST http://localhost:5000/add/professor HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZWFscGl6YXJwIiwiaWF0IjoxNjUyMzIxMDExfQ.X6nAQ6KkCc7xOpS3QPHWOALj4swn7_F6JDNLEQhANlo
content-type: application/json

{
    "professorId": "20203481",
    "professorLastName": "Munguia",
    "professorName": "Diego"
}
```

## Tools used in this API

* Sequelize
* Express
* jsonwebtoken
* Rest Client (For testing the requests)

### NOTE

This was made for an assignment at the [Costa Rica institute of Technology](https://www.tec.ac.cr/). 