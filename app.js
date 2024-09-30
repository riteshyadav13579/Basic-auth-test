// Import required modules
const express = require("express");

// Initialize the app
const app = express();

// Define a GET route
app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("Hello, world!");
});

// Set the port for the server
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
