var mongoose = require("mongoose");
var Game = require("./models/game");
var User = require("./models/user");
var Pick = require("./models/pick");
var cbsKey = require("../seedDB/cbsKey.js");

//Connect mongoose to DB 
mongoose.createConnection("mongodb://localhost/confidence_league");

function importGames(seasonGames){
    // Remove all games
    return Game.remove({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("removed games!");
        //add Games
        seasonGames.forEach(function(seed){
            Game.create(seed, function(err,game){
                if (err){
                    console.log(err);
                } else {
                    console.log("added a game");
                }
            });
        })
    });
}

function importUsers(users) {
    return User.remove({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log("removed users!");
        //add users
        users.forEach(function(seed){
            User.create(seed, function(err,user){
                if (err){
                    console.log(err);
                } else {
                    console.log("added a user");
                }
            })
        });
    });
}

function importPicks(userPicksList,season,week) {
    Pick.remove({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log("removed picks!");
        buildPickObjects(userPicksList,season,week);
    });
    return 1; //to interface with promises
}

//build picks from list of users and picks
function buildPickObjects(usersPicks, season, week) {
    //get games for week&season from DB
    var dbGames = [];
    Game.find({week: week, season: season}, function(err, games){
        if (err) {
            console.log(err);
        } else {
            dbGames.push(games);
        }
    });
    console.log("Games retrieved from database: \n" + dbGames);
        
    var picksObject = [];
    // go through each user's picks
    for (var ii = 0; ii < usersPicks.length; ii++){
        var userPicks = usersPicks[ii];
        //separate user and picks
        var user = userPicks[0],
            picks = userPicks.slice(1);
        
        //get userID from DB
        var dbUser = User.find({username: user});
        console.log("User from DB: " + dbUser);
    
    };
    
}

var exports = module.exports = {};

exports.importGames = importGames;
exports.importUsers = importUsers;
exports.importPicks = importPicks;