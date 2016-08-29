var mongoose = require("mongoose");


// Functions
function buildUserObject(username) {
    var userObject = {
        username: username,
        password: 'defaultpassword'
    };
    return userObject;
}

function buildPickObject(){
    
}


var Week1 = [
    'Bryan Reese	NE (16)	GB (15)	STL (2)	NYJ (7)	CAR (12)	KC (6)	MIA (10)	BUF (1)	ARI (8)	SD (11)	DEN (14)	TB (9)	OAK (4)	DAL (13)	ATL (3)	SF (5)	45',
	'Geoff Osier	NE (10)	GB (15)	SEA (4)	NYJ (5)	CAR (13)	KC (7)	MIA (14)	IND (11)	ARI (6)	SD (8)	DEN (9)	TB (3)	CIN (12)	DAL (16)	PHI (2)	MIN (1)	40',
	'Jonathan Newb	NE (16)	GB (15)	SEA (12)	NYJ (8)	CAR (14)	KC (2)	MIA (9)	IND (10)	ARI (6)	SD (5)	DEN (13)	TB (4)	CIN (7)	DAL (11)	PHI (3)	SF (1)	40',
	'John Aitchiso	NE (14)	GB (16)	SEA (12)	NYJ (4)	CAR (8)	KC (3)	MIA (11)	IND (9)	ARI (6)	SD (5)	DEN (13)	TB (7)	CIN (10)	DAL (15)	PHI (2)	SF (1)	46',
	'Michael Cross	NE (16)	GB (15)	SEA (12)	NYJ (9)	CAR (10)	HOU (1)	MIA (11)	IND (2)	ARI (4)	SD (8)	DEN (13)	TB (7)	CIN (6)	DAL (14)	PHI (5)	MIN (3)	41',
	'Mark Schmecht	NE (16)	GB (15)	SEA (14)	NYJ (13)	CAR (12)	KC (2)	MIA (11)	IND (10)	ARI (9)	SD (8)	DEN (3)	TB (5)	CIN (7)	DAL (6)	PHI (4)	SF (1)	38',
	'Andrea Coughl	NE (15)	GB (16)	SEA (14)	NYJ (4)	CAR (10)	HOU (2)	MIA (11)	IND (9)	ARI (7)	SD (6)	DEN (12)	TB (5)	CIN (8)	DAL (13)	PHI (3)	MIN (1)	39',
	'John McMahon	NE (13)	GB (16)	SEA (12)	NYJ (10)	CAR (8)	KC (6)	MIA (9)	IND (11)	NO (5)	SD (4)	DEN (15)	TB (3)	CIN (7)	DAL (14)	PHI (2)	MIN (1)	45',
	'Alison Coughl	NE (14)	GB (16)	SEA (15)	NYJ (9)	CAR (12)	KC (3)	WAS (2)	IND (13)	ARI (8)	SD (7)	DEN (10)	TB (6)	CIN (5)	DAL (11)	ATL (1)	SF (4)	39',
	'Brian LeCompt	NE (16)	GB (15)	STL (5)	CLE (7)	CAR (14)	HOU (13)	MIA (12)	BUF (11)	ARI (10)	SD (9)	BAL (8)	TB (6)	CIN (4)	DAL (3)	PHI (2)	SF (1)	53	00',  
	'Daniel Coughl	NE (14)	GB (16)	SEA (15)	NYJ (13)	CAR (12)	HOU (5)	MIA (10)	IND (11)	ARI (7)	SD (3)	DEN (9)	TB (4)	CIN (6)	DAL (8)	PHI (1)	SF (2)	35	00',
	'Bill Coughlin	NE (1)	GB (16)	SEA (14)	NYJ (15)	CAR (9)	KC (3)	MIA (13)	IND (6)	ARI (5)	SD (4)	DEN (12)	TB (10)	CIN (11)	DAL (7)	PHI (8)	SF (2)	38',	
	'Kevin Wade	NE (15)	GB (14)	SEA (13)	NYJ (11)	CAR (8)	KC (1)	MIA (9)	IND (5)	ARI (2)	SD (4)	DEN (12)	TB (10)	CIN (6)	DAL (16)	PHI (7)	MIN (3)	42',	
	'Brad Keifer	NE (16)	GB (12)	STL (4)	NYJ (3)	CAR (8)	KC (11)	MIA (13)	IND (15)	ARI (10)	SD (5)	BAL (2)	TB (7)	CIN (14)	DAL (1)	PHI (6)	MIN (9)	42',	
	'Jill Steinhof	NE (9)	GB (16)	SEA (15)	NYJ (7)	CAR (8)	KC (3)	MIA (12)	IND (14)	NO (1)	SD (6)	DEN (13)	TB (4)	CIN (10)	DAL (11)	PHI (5)	SF (2)	42',	
	'jim coughlin	NE (14)	GB (16)	SEA (15)	NYJ (3)	CAR (9)	HOU (2)	MIA (11)	IND (10)	ARI (8)	SD (7)	DEN (12)	TB (5)	CIN (4)	DAL (13)	PHI (6)	MIN (1)	41',	
	'Willie Goeltz	NE (16)	GB (15)	SEA (13)	NYJ (1)	CAR (10)	HOU (5)	MIA (14)	IND (12)	ARI (9)	SD (7)	DEN (6)	TB (2)	CIN (11)	DAL (8)	PHI (4)	MIN (3)	54',	
	'Zach Rasmor	NE (15)	GB (14)	SEA (16)	CLE (4)	CAR (13)	KC (3)	MIA (10)	IND (12)	ARI (11)	SD (8)	DEN (6)	TB (5)	CIN (9)	DAL (7)	PHI (2)	SF (1)	42',	
	'Jessica Cough	NE (14)	GB (7)	SEA (16)	CLE (2)	CAR (13)	KC (3)	MIA (12)	IND (8)	ARI (9)	DET (6)	DEN (15)	TB (5)	CIN (10)	DAL (11)	ATL (1)	MIN (4)	41',	
	'Mike Coughlin	NE (6)	GB (16)	SEA (15)	NYJ (9)	CAR (14)	HOU (2)	MIA (13)	IND (5)	ARI (7)	DET (8)	DEN (10)	TB (1)	CIN (12)	DAL (4)	PHI (11)	SF (3)	38',	
	'Rob Davis	NE (7)	GB (15)	SEA (16)	NYJ (8)	CAR (6)	HOU (4)	MIA (14)	IND (9)	ARI (5)	SD (10)	DEN (13)	TB (11)	CIN (12)	DAL (3)	PHI (2)	MIN (1)	41',	
	'zachary Folk	NE (12)	GB (15)	SEA (11)	NYJ (7)	CAR (13)	KC (4)	MIA (14)	IND (16)	ARI (10)	SD (3)	DEN (9)	TB (2)	OAK (1)	DAL (6)	PHI (8)	MIN (5)	50',	
	'Charles Walst	NE (16)	GB (15)	SEA (14)	NYJ (12)	CAR (11)	HOU (10)	MIA (9)	IND (13)	ARI (7)	SD (6)	DEN (5)	TB (4)	CIN (3)	DAL (8)	PHI (2)	MIN (1)	34',	
	'Andrew Coughl	NE (15)	GB (16)	SEA (14)	CLE (5)	CAR (13)	KC (4)	WAS (6)	IND (12)	ARI (3)	SD (8)	DEN (11)	TB (9)	CIN (10)	DAL (7)	ATL (2)	SF (1)	42',	
	'Michael Reede	PIT (5)	GB (16)	SEA (14)	CLE (1)	CAR (10)	KC (9)	MIA (11)	IND (6)	ARI (2)	SD (15)	DEN (7)	TEN (3)	CIN (4)	DAL (13)	PHI (12)	MIN (8)	42',	
	'Jon Coughlin	NE (15)	GB (16)	SEA (14)	NYJ (11)	CAR (8)	HOU (2)	MIA (7)	IND (9)	NO (4)	DET (3)	DEN (12)	TEN (1)	CIN (5)	DAL (13)	PHI (6)	MIN (10)	42',	
	'Matt Coughlin	NE (4)	GB (7)	SEA (16)	NYJ (11)	CAR (9)	KC (8)	MIA (14)	IND (10)	ARI (6)	DET (5)	DEN (13)	TB (3)	CIN (15)	NYG (2)	PHI (12)	SF (1)	41',	
	'Jeff Houpt	NE (14)	CHI (16)	SEA (13)	CLE (2)	CAR (11)	KC (3)	MIA (12)	BUF (1)	ARI (10)	SD (9)	DEN (15)	TB (8)	CIN (4)	DAL (7)	PHI (6)	MIN (5)	38',	
	'Caleb Frey	NE (16)	GB (15)	SEA (14)	CLE (5)	CAR (10)	HOU (9)	MIA (11)	IND (12)	NO (4)	SD (7)	DEN (13)	TB (3)	CIN (1)	DAL (8)	PHI (6)	SF (2)	38',	
	'Tom Zydowsky	NE (16)	GB (14)	SEA (11)	CLE (4)	CAR (12)	HOU (2)	MIA (10)	IND (15)	NO (1)	DET (7)	DEN (9)	TB (3)	CIN (8)	DAL (13)	PHI (6)	MIN (5)	41'];	


var picksArrays = [];
var usersList = [];
var usersAndPicks = [];
var usersAndMNF = [];

Week1.forEach(function(userPicksString,index){
    var picksArray = userPicksString.split('\t');
    var arrayLength = picksArray.length;
    picksArrays.push(picksArray);
    usersList.push(picksArray[0]);//username is first value in array
    usersAndPicks.push(picksArray.slice(0,arrayLength-1));// Last value is MNF score, all others are picks + username
    usersAndMNF.push([picksArray[0],picksArray[arrayLength - 1]]);//Name and MNF score
});

//console.log(picksArrays);
//console.log(usersList);
var userObjects = [];
usersList.forEach(function(user){
    userObjects.push(buildUserObject(user));
});
//console.log(userObjects);
//console.log(usersAndPicks);

//console.log(usersAndMNF);

var exports = module.exports = {};
exports.userObjects = userObjects;
exports.usersAndMNF = usersAndMNF;
exports.usersAndPicks = usersAndPicks;