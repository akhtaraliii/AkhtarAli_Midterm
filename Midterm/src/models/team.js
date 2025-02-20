const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamId: {
        type: Number,
        unique: true
    },
    teamName: {
        type: String
    },
    city: {
        type: String
    },
    founded: {
        type: String
    },
    coach: {
        type: String
    }
});

module.exports = mongoose.model('Team', teamSchema);