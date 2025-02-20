const Team = require('../models/team');

// Get all teams
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching teams',
            error: error.message 
        });
    }
};