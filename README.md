# VisiAttend - Face Recognition Attendance System

## Overview

**VisiAttend** is an innovative attendance management system that leverages facial recognition to automate the process of marking student attendance. The project integrates a **React** frontend, **Spring Boot** backend, **MySQL** database, and a **Flask microservice** for face recognition.

### Key Features:
- **Face Recognition**: Flask microservice processes images to identify and match student faces.
- **Automated Attendance**: Teachers upload images of the class, and the system automatically marks attendance.
- **Data Management**: MySQL database stores student, teacher, and attendance data.
- **React Frontend**: A user-friendly interface for uploading images and managing attendance.

### Architecture

- **Frontend (React)**: The React application allows teachers to upload class photos and view attendance data.
- **Backend (Spring Boot)**: Handles business logic, attendance updates, and database interactions.
- **Flask Microservice**: Receives class images, recognizes faces, and returns the list of present students.
- **Database (MySQL)**: Stores student information, attendance records, and class data.

## Technologies Used
- **React** (Frontend)
- **Spring Boot** (Backend)
- **MySQL** (Database)
- **Flask** (Face Recognition Microservice)
- **OpenCV / Face Recognition Libraries** (For face detection in Flask)

