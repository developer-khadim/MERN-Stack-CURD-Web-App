# CURD Backend

This is a simple backend API built with Node.js, Express, and Mongoose for managing User data. It demonstrates basic CRUD (Create, Read, Update, Delete) operations.

## Technology Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Make sure your MongoDB server is running or you have a connection string configured in `config/db.js`)

## Installation

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

To start the server, run:

```bash
node app.js
```

Or if you want to use nodemon for hot-reloading (installed as a dev dependency):

```bash
npx nodemon app.js
```

The server will start on **http://localhost:3000**.

## API Endpoints

The following endpoints are available. 

**Note:** Currently, all operations are intentionally triggered via `GET` requests for demonstration purposes.

| Method | Endpoint    | Description                                      |
|--------|-------------|--------------------------------------------------|
| GET    | `/`         | Returns "Hello World!" status check.            |
| GET    | `/create`   | Creates a new hardcoded user (Hamad).           |
| GET    | `/readall`  | Retrieves all users from the database.          |
| GET    | `/readone`  | Retrieves a specific user (username: hamad123). |
| GET    | `/update`   | Updates a user (Finds 'Khadim' -> Updates to 'Khadim Ali'). |
| GET    | `/delete`   | Deletes a specific user (username: hamad123).   |

## Project Structure

- `app.js`: Main application entry point defining routes and server setup.
- `config/db.js`: Database connection logic.
- `model/usermodel.js`: Mongoose schema definition for the User.
