
const express = require('express');    
const path = require('path');          
const connectDB = require('./src/config/db');  
const teamRoutes = require('./src/routes/teamRoutes');  
const Team = require('./src/models/team');    
const fs = require('fs').promises;     
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

const initializeDatabase = async () => {
    try {
        // Check if teams exist
        const existingTeams = await Team.find();
        
        // If no teams exist, load from teams.json
        if (existingTeams.length === 0) {
            // Read and parse teams.json
            const teamsData = await fs.readFile(
                path.join(__dirname, 'teams.json'), 
                'utf-8'
            );
            const teams = JSON.parse(teamsData);
            
            // Insert teams into database
            await Team.insertMany(teams);
            console.log('✓ Database initialized with teams data');
        }
    } catch (error) {
        console.error('✗ Error initializing database:', error);
    }
};

// Set up server port
const PORT = process.env.PORT || 3000;

// Start server and initialize database
app.listen(PORT, async () => {
    console.log(`✓ Server running at: http://localhost:${PORT}`);
    await initializeDatabase();
});