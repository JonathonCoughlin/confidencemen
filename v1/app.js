    // Tech
var moment = require("moment"),
    express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    Q = require("q");
    // Models
var Game = require("./models/game"),
    Pick = require("./models/pick"),
    User = require("./models/user");
    //Seeding
var SeedDB = require("./seedDB.js");

//2015 season data
var LegacyData_2015Games = require("../seedDB/parse2015SeasonGames.js");
var LegacyData_2015UsersPicks = require("../seedDB/parse2015Picks.js");

mongoose.connect("mongodb://localhost/confidence_league");
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Ima gonna ween alla tha tennis",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

//Seed DB
//-Use promises to proceed sequentially
SeedDB.SetImportData(LegacyData_2015Games.seasonGamesForDB,LegacyData_2015UsersPicks.userObjects,LegacyData_2015UsersPicks,2015,1);
SeedDB.ImportGames().then(SeedDB.ImportUsers).then(SeedDB.ImportPicks);

// Set system to current week
var currentWeek = 1,
    currentSeason = 2015;

// Set up Moment to be used on all pages
var picksDateFormat = "ddd MMM Do h:mm a";
app.locals.moment = moment;
app.locals.picksDateFormat = picksDateFormat;

// Webpage requests
app.get("/",function(req,res) {
    res.render("index");
})

// PICKS RESTFUL ROUTES

// INDEX
app.get("/picks",function(req,res){
    // current week, current season
    res.redirect("/picks/" + currentWeek + "/" + currentSeason);
})

// SHOW ROUTES
app.get("/picks/:week",function(req,res){
    // find all games in current week
   res.redirect("/picks/:week/" + currentSeason); 
});

app.get("/picks/:week/:season",function(req,res){
    // find all games in proper week/season
    Game.find({week: req.params.week, season: req.params.season}, function(err, foundGames){
        if (err){
            res.redirect("/");
        } else {
            res.render("picks", {games: foundGames});
        }
    })
})

// UPDATE ROUTE

app.get("/standings",function(req, res) {
    res.render("standings");
})

// AUTH ROUTES
// show register page
app.get("/register", function(req, res) {
    res.render("register");
});
//handle sign up logic
app.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user){
        if (err){
            console.log(err);
            return res.render("register");
        }  
        passport.authenticate("local")(req, res, function(){
            res.redirect("/picks");
        });
    });
});

// show login form
app.get("/login",function(req, res) {
    res.render("login");
})

app.post("/login", passport.authenticate("local", 
{
    successRedirect: "/picks", 
    failureRedirect: "/login"
}), function(req, res) {
    
})

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/index");
})

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Confidence Men server has started.");
})
