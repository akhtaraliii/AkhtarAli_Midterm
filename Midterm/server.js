const express = require('express');    // Web framework
const path = require('path');          // Path manipulation utility
const app = express();                 // Create Express app instance

// Configure Express middleware
app.use(express.json());              // Parse JSON request bodies
app.use(express.static(path.join(__dirname))); // Serve static files

// Set up server port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});