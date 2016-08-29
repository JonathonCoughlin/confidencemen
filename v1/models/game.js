var mongoose = require("mongoose");

// Database schemas
var gameSchema = new mongoose.Schema({
    season: Number, 
    week: Number,
    kickoffDate: Date,
    homeTeam: String,
    awayTeam: String,
    homeScore: Number,
    awayScore: Number,
    finalized: Boolean
});

module.exports = mongoose.model("Game",gameSchema);