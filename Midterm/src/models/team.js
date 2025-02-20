const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamId: Number,
    teamName: String,
    city: String,
    founded: String,
    coach: String
});

module.exports = mongoose.model('Team', teamSchema);