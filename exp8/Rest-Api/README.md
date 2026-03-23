EXP 8 – Student Record Management REST API

This experiment demonstrates the development of a RESTful backend service using Spring Boot to manage student information. The application performs complete CRUD (Create, Read, Update, Delete) operations and stores data in a MySQL database using Spring Data JPA.

Project Directory

The executable Spring Boot project is located inside the try directory.

Technologies Used
Java 21
Spring Boot
Spring Web (REST API)
Spring Data JPA (ORM)
MySQL Database
Maven Wrapper
Functionalities

The application allows users to manage student records through REST endpoints. The main capabilities include:

Adding a new student to the database
Viewing all student records
Retrieving details of a specific student using ID
Modifying existing student information
Removing student records from the system
API Base Endpoint
http://localhost:8080/api/students
Available REST Endpoints
Method	Endpoint	Description
GET	/api/students	Retrieve list of all students
GET	/api/students/{id}	Fetch details of a particular student
POST	/api/students	Insert a new student record
PUT	/api/students/{id}	Update information of an existing student
DELETE	/api/students/{id}	Remove a student record
Database Configuration
Create a MySQL database:
CREATE DATABASE spring_hibernate_db;
Open the configuration file:
try/src/main/resources/application.properties
Update the database credentials if necessary:
spring.datasource.username=your_username
spring.datasource.password=your_password
Running the Application

Navigate to the try folder and run the following command:

For Windows
mvnw.cmd spring-boot:run
For macOS/Linux
./mvnw spring-boot:run
Server Address

Once the application starts successfully, the API will be available at:

http://localhost:8080

You can test the endpoints using tools like Postman or cURL.


![alt text](image.png)

![alt text](image-1.png)