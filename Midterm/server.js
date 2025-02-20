
const express = require('express');    
const path = require('path');         
const connectDB = require('./src/config/db');  
const teamRoutes = require('./src/routes/teamRoutes');  
const app = express();              

// Initialize database connection
connectDB();

// Configure Express middleware
app.use(express.json());              
app.use(express.static(path.join(__dirname))); 

// Set up API routes
app.use('/teams', teamRoutes);        

// Serve frontend at root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Set up server port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});