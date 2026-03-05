# Login App

A full-stack login application built with **React + Vite** (frontend) and **Node.js + Express** (backend). Supports credential validation, protected routes, and persistent username memory via localStorage.

---

## Tech Stack

| Layer       | Technology                                    |
| ----------- | --------------------------------------------- |
| Frontend    | React 18, Vite, React Router v6, Tailwind CSS |
| Backend     | Node.js, Express                              |
| Environment | dotenv                                        |

---

## Project Structure

```
login-app/
├── backend/
│   ├── controllers/
│   │   └── authController.js     # Login logic
│   ├── middleware/
│   │   └── validation.js         # Input validation
│   ├── routes/
│   │   └── auth.js               # POST /api/login route
│   ├── .env                      # Environment variables
│   ├── server.js                 # Express server entry point
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/
    │   │   └── authApi.js         # Fetch API calls
    │   ├── components/
    │   │   └── ProtectedRoute.jsx # Guards authenticated routes
    │   ├── hooks/
    │   │   └── useAuth.js         # Login/logout/session logic
    │   ├── pages/
    │   │   ├── LoginPage.jsx
    │   │   └── WelcomePage.jsx
    │   ├── App.jsx                # Route definitions
    │   ├── main.jsx               # React entry point
    │   └── index.css              # Tailwind directives
    ├── .env                       # Vite environment variables
    ├── vite.config.js             # Vite + proxy config
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### 1. Clone the repository

```bash
git clone https://github.com/sourabhBisht27/login_app.git
cd login_app
```

### 2. Setup & run the Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`

### 3. Setup & run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

---

## Environment Variables

### `backend/.env`

```
PORT=5000
CLIENT_URL=http://localhost:3000
```

### `frontend/.env`

```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## API Reference

### `POST /api/login`

**Request Body**

```json
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response — 200**

```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "username": "admin",
    "role": "admin",
    "loginTime": "2024-01-01T00:00:00.000Z"
  }
}
```

**Invalid Credentials — 401**

```json
{
  "success": false,
  "message": "Invalid username or password. Please try again."
}
```

**Missing Fields — 400**

```json
{
  "success": false,
  "message": "Username is required."
}
```

---

## Features

- Login form with client-side and server-side validation
- Correct credentials (`admin` / `admin`) redirect to a Welcome page
- Wrong credentials display an error message
- Remember username across sessions via localStorage
- Protected `/welcome` route — redirects to `/login` if not authenticated
- Loading spinner during API call
- Clean logout that clears the session

---

## Test Credentials

```
Username: admin
Password: admin
```
