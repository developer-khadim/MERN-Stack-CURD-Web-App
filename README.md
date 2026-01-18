# Full Stack User Management System (MERN)

> **Day 1: Learning Backend Journey** 🚀
> This project marks the beginning of my journey into backend development. I built this full-stack application to practice connecting a React frontend with a Node.js/Express backend and MongoDB.

A modern, responsive User Management application built with the MERN stack (MongoDB, Express, React, Node.js). It features a beautiful UI using Tailwind CSS and supports full CRUD (Create, Read, Update, Delete) operations.

## 🌟 Features

- **Create**: Add new users with Name, Email, and Username via a modal form.
- **Read**: View all users in a responsive grid layout.
- **Update**: Edit existing user details easily.
- **Delete**: Remove users from the system with confirmation.
- **Search**: Real-time filtering by name or email.
- **Stats**: key metrics dashboard.
- **Responsive Design**: Fully responsive interface that works on desktop and mobile.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)
- **Axios** (API Requests)

### Backend
- **Node.js**
- **Express.js**
- **Mongoose** (ODM)
- **MongoDB** (Database)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running locally

### 1. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd Backend
npm install
```

Start the server:

```bash
node app.js
```

The backend server will start on `http://localhost:3000`.

> **Note**: Ensure your MongoDB instance is running. The application connects to a local MongoDB database. Check `config/db.js` if you need to configure the connection string.

### 2. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend application will be running at `http://localhost:5173` (or the port shown in your terminal).

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/readall` | Get all users |
| `POST` | `/api/create` | Create a new user |
| `PUT` | `/api/update/:id` | Update a user by ID |
| `DELETE` | `/api/delete/:id` | Delete a user by ID |

## 📂 Project Structure

```
CURD/
├── Backend/
│   ├── config/         # Database configuration
│   ├── model/          # Mongoose models
│   ├── app.js          # Main server file
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/ # Reusable UI components (UserForm, UserCard, etc.)
    │   ├── pages/      # Main application pages
    │   └── App.jsx     # App entry point
    ├── vite.config.js
    └── package.json
```

## 🎨 UI Highlights

- **Glassmorphism Effects**: Modern translucent UI elements.
- **Smooth Animations**: Hover effects and transitions.
- **Interactive Forms**: Modal-based creation and editing flows.

---
Created with ❤️ by the **Antigravity** team.
"# MERN-Stack-CURD-Web-App" 
