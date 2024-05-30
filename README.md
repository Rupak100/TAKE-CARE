# Doctor Booking Web App

This project is a Doctor Booking Web Application built using the MERN stack (MongoDB, Express, React, Node.js). It allows patients to book appointments with doctors, manage their bookings, and view available doctors. Doctors can manage their schedules and view patient appointments.

## Features

- User authentication and authorization
- Role-based access control for patients and doctors
- Booking appointments with doctors
- Viewing available doctors and their schedules
- Managing appointments for both patients and doctors
- Responsive design for mobile and desktop use

## Tech Stack

- **Frontend**: React.js, Redux, CSS/SCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance running

### Clone the Repository

```bash
git clone https://github.com/Rupak100/TAKE-CARE.git
cd TAKE-CARE
```
## Install Dependencies

### For Backend
```bash
cd backend
npm install
```
### For Frontend
```bash
cd backend
npm install
```
## Configuration
### For Backend
-Create a .env file in the backend directory with the following environment variables
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
### For Frontend
-Create a .env file in the backend directory with the following environment variables
```bash
REACT_APP_API_URL=http://localhost:5000

```
## Running the Application
### Start the Backend

```bash
cd backend
npm run dev
```
### Start the Frontend

```bash
cd frontend
npm run dev
```

