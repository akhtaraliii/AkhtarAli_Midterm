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

// Get team by ID
exports.getTeamById = async (req, res) => {
    try {
        const team = await Team.findOne({ teamId: req.params.id });
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.json(team);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching team',
            error: error.message 
        });
    }
};

// Get teams by city
exports.getTeamsByCity = async (req, res) => {
    try {
        const teams = await Team.find({ 
            city: { $regex: new RegExp(req.params.city, 'i') }
        });
        if (teams.length === 0) {
            return res.status(404).json({ message: 'No teams found in this city' });
        }
        res.json(teams);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching teams by city',
            error: error.message 
        });
    }
};