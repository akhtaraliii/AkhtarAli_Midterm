const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Get all teams
router.get('/', teamController.getAllTeams);

module.exports = router;