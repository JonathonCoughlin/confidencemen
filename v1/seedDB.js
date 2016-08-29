var mongoose = require("mongoose");
var Game = require("./models/game");
var User = require("./models/user");
var Pick = require("./models/pick");
var cbsKey = require("../seedDB/cbsKey.js");
var Q = require("q");

//Connect mongoose to DB 
mongoose.createConnection("mongodb://localhost/confidence_league");

var seasonGames = [],
    users = [],
    userPicksList = [],
    season = 2015,
    week = 1;

function SetImportData(importGames,importUsers,importUserPicks,importSeason,importWeek) {
    seasonGames = importGames;
    users = importUsers;
    userPicksList = importUserPicks;
    season = importSeason;
    week = importWeek;
}

function ImportGames(){
    var deferred = Q.defer();
    // Remove all games
    Game.remove({}, function(err){
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
        });
        deferred.resolve();
    });
    return deferred.promise;
}

function ImportUsers() {
    var deferred = Q.defer();
    User.remove({}, function(err){
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
            });
        });
        deferred.resolve();
    });
    return deferred.promise;
}

function ImportPicks() {
    var deferred = Q.defer();
    Pick.remove({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log("removed picks!");
        BuildPickObjects(userPicksList,season,week);
        deferred.resolve();
    });
    return deferred.promise; //to interface with promises
}

//build picks from list of users and picks
function BuildPickObjects(usersPicks, season, week) {
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

exports.SetImportData = SetImportData;
exports.ImportGames = ImportGames;
exports.ImportUsers = ImportUsers;
exports.ImportPicks = ImportPicks;