const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Get all teams
router.get('/', teamController.getAllTeams);

// Get teams by city
router.get('/city/:city', teamController.getTeamsByCity);

// Get team by ID
router.get('/:id', teamController.getTeamById);

module.exports = router;