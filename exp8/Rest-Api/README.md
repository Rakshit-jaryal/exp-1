EXP 8 – Student Management REST API

This experiment implements a Student Management REST API using Spring Boot. The application allows users to perform CRUD operations (Create, Read, Update, Delete) on student records stored in a MySQL database using Spring Data JPA.

Project Folder

The runnable Spring Boot project is located in the try folder.

Technologies Used
Java 21
Spring Boot
Spring Web
Spring Data JPA
MySQL
Maven Wrapper
Features
Create a new student record
View all students
View a student by ID
Update student details
Delete a student
API Base URL
http://localhost:8080/api/students
API Endpoints
GET /api/students – Get all students
GET /api/students/{id} – Get a student by ID
POST /api/students – Create a new student
PUT /api/students/{id} – Update student details
DELETE /api/students/{id} – Delete a student
Database Setup

Create the database in MySQL:

CREATE DATABASE spring_hibernate_db;

Then open:

try/src/main/resources/application.properties

Set your MySQL username and password if required.

Run the Project

Go to the try folder and run:

Windows

mvnw.cmd spring-boot:run

macOS/Linux

./mvnw spring-boot:run

The application will run at:

http://localhost:8080

You can test the API using tools like Postman.


![alt text](image.png)

![alt text](image-1.png)