// Import the Express module, which is a web framework for Node.js
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen for requests
const port = 3000;

// Define a route handler for the root URL ('/')
// When a GET request is made to the root URL, send a response with 'Hello World!'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and have it listen on the specified port
// When the server is running, log a message to the console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
