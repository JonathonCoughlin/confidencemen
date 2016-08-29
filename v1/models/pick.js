var mongoose = require("mongoose");

// Picks schemas
var pickSchema = new mongoose.Schema({
    gameID: Number,
    team: String,
    points: Number,
    userID: Number
})

module.exports = mongoose.model("Pick",pickSchema);
