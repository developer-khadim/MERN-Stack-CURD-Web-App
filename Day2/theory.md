# Backend Development Theory Notes

## JavaScript Basics Recap
### Arrays and Objects
- **forEach**: Iterates over array elements.
- **map**: Creates a new array by transforming elements.
- **filter**: Creates a new array with elements that pass a test.
- **find**: Returns the first element that matches a condition.
- **indexOf**: Returns the index of a specific element.
- **Object Freeze**: `Object.freeze()` prevents modification of an object.

### Async/Await
- **Async Functions**: Allow cleaner handling of asynchronous operations (like fetching data) compared to callbacks or promises.

---

## Node.js Fundamentals
**Node.js** is not a programming language; it is a **runtime environment**.
- It allows us to run JavaScript code outside the browser (server-side).
- To run Node.js code, you must install it from the official website.

---

## File System (fs) Module
The `fs` module allows us to work with the file system on our computer.

- **writeFileSync / writeFile**: Create or overwrite a file.
- **rename**: Rename a file.
- **copyFile**: Copy a file from one location to another.
- **unlink**: Delete a file.
- **rm / rmdir**: Delete a directory (folder). `recursive: true` is needed for non-empty folders.
- **mkdir**: Create a new directory.

---

## Express.js Framework
**Express.js** is the most popular web application framework for Node.js. It is designed for building web applications and APIs. It is "unopinionated," meaning it doesn't force you into a specific project structure.

### Core Concepts

#### 1. Server Initialization
To create an Express app, we require the module and invoke it:
```javascript
const express = require('express');
const app = express();
```

#### 2. Routing
Routing determines how an application responds to a client request to a particular endpoint (URI) and specific HTTP request method (GET, POST, etc.).
- **GET**: Retrieve data (`app.get('/', ...)`).
- **POST**: Submit data (`app.post('/login', ...)`).
- **PUT/PATCH**: Update data.
- **DELETE**: Remove data.
- **Dynamic Routing**: We can use dynamic parameters in routes, e.g., `/profile/:username`. Access these via `req.params.username`.

### Middleware
Middleware functions are the heart of Express. They are functions that have access to the **request object (req)**, the **response object (res)**, and the **next middleware function** in the application’s request-response cycle.

**Capabilities of Middleware:**
- Execute any code.
- Make changes to the request and response objects.
- End the request-response cycle.
- Call the next middleware in the stack using `next()`.

**Common Built-in Middleware:**
- `express.json()`: Parses incoming JSON requests (puts data in `req.body`).
- `express.urlencoded({ extended: true })`: Parses incoming requests with URL-encoded payloads (from HTML forms).
- `express.static('public')`: Serves static files (images, CSS, JS) from a directory.

### Request (req) and Response (res) Objects
Express enhances the standard Node.js HTTP objects.

**The Request Object (req):**
- `req.body`: Key-value pairs of data submitted in the request body (needs middleware).
- `req.params`: Route parameters (e.g., `:id` in the URL).
- `req.query`: URL query string parameters (e.g., `?search=term`).

**The Response Object (res):**
- `res.send()`: Sends the HTTP response (string, object, HTML).
- `res.json()`: Sends a JSON response (common for APIs).
- `res.render()`: Renders a view template.
- `res.status(code)`: Sets the HTTP status code (e.g., `res.status(404)`).

### Error Handling
Express comes with a default error handler, but you can define custom error-handling middleware.
- Signature: `(err, req, res, next)` <-- Must have 4 arguments.
- It should be defined **after** all other `app.use()` and route calls.

### Development Tools
- **Nodemon**: A utility that monitors for changes in your source and automatically restarts the server.

### Sessions and Cookies
Since HTTP is stateless, we use cookies and sessions to maintain user state.
- **Cookies**: Data sent by the server and stored in the user's browser. Sent back to the server with every request.
- **Sessions**: Stored on the server side. The browser gets a "Session ID" (usually in a cookie) to match the user to their server-side data.
