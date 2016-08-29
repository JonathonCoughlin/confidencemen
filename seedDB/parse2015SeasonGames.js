// Modules
var mongoose = require("mongoose");
var cbsKey = require("./cbsKey.js");

//functions
function weekStringToGames(weekString) {
    var weekArray = weekString.split('\t');
    return weekArray;
}

function gameStringToArray(gameString) {
    var gameArray = gameString.split(' ');
    return gameArray;
}

function buildGameAsObject(season,week,hometeam,awayteam,homescore,awayscore,finalized) {
    //build a single game object in string form
    var gameObject = {
        season: season,
        week: week, 
        kickoffDate: Date('2015-08-28'),
        homeTeam: cbsKey[hometeam],
        awayTeam: cbsKey[awayteam],
        homeScore: homescore,
        awayScore: awayscore,
        finalized: finalized
    };
    
    return gameObject;
}

//data
var Week1 = 'PIT 21 NE 28	GB 31 CHI 23	SEA 31 STL 34	CLE 10 NYJ 31	CAR 20 JAC 9	KC 27 HOU 20	MIA 17 WAS 10	IND 14 BUF 27	NO 19 ARI 31	DET 28 SD 33	BAL 13 DEN 19	TEN 42 TB 14	CIN 33 OAK 13	NYG 26 DAL 27	PHI 24 ATL 26	MIN 3 SF 20	MNF 23',
    Week2 = 'DEN 31 KC 24	TEN 14 CLE 28	TB 26 NO 19	NE 40 BUF 32	ARI 48 CHI 23	SF 18 PIT 43	STL 10 WAS 24	SD 19 CIN 24	HOU 17 CAR 24	ATL 24 NYG 20	DET 16 MIN 26	BAL 33 OAK 37	MIA 20 JAC 23	DAL 20 PHI 10	SEA 17 GB 27	NYJ 20 IND 7	MNF 27',
    Week3 = 'WAS 21 NYG 32	CIN 28 BAL 24	SD 14 MIN 31	OAK 27 CLE 20	ATL 39 DAL 28	TB 9 HOU 19	PHI 24 NYJ 17	PIT 12 STL 6	NO 22 CAR 27	IND 35 TEN 33	JAC 17 NE 51	SF 7 ARI 47	CHI 0 SEA 26	BUF 41 MIA 14	DEN 24 DET 12	KC 28 GB 38	MNF 66',
    Week4 = 'BAL 23 PIT 20	NYJ 27 MIA 14	JAC 13 IND 16	HOU 21 ATL 48	KC 21 CIN 36	NYG 24 BUF 10	OAK 20 CHI 22	PHI 20 WAS 23	CAR 37 TB 23	CLE 27 SD 30	MIN 20 DEN 23	GB 17 SF 3	STL 24 ARI 22	DAL 20 NO 26	DET 10 SEA 13	MNF 23',
    Week5 = 'IND 27 HOU 20	WAS 19 ATL 25	CHI 18 KC 17	CLE 33 BAL 30	SEA 24 CIN 27	JAC 31 TB 38	NO 17 PHI 39	STL 10 GB 24	BUF 14 TEN 13	ARI 42 DET 17	DEN 16 OAK 10	NE 30 DAL 6	SF 27 NYG 30	PIT 24 SD 20	MNF 44',
    Week6 = 'ATL 21 NO 31	ARI 13 PIT 25	WAS 20 NYJ 34	CHI 34 DET 37	CIN 34 BUF 21	HOU 31 JAC 20	DEN 26 CLE 23	KC 10 MIN 16	MIA 38 TEN 10	CAR 27 SEA 23	SD 20 GB 27	BAL 20 SF 25	NE 34 IND 27	NYG 7 PHI 27	MNF 34',
    Week7 = 'SEA 20 SF 3	BUF 31 JAC 34	NO 27 IND 21	PIT 13 KC 23	NYJ 23 NE 30	MIN 28 DET 19	HOU 26 MIA 44	CLE 6 STL 24	ATL 10 TEN 7	TB 30 WAS 31	OAK 37 SD 29	DAL 20 NYG 27	PHI 16 CAR 27	BAL 18 ARI 26	MNF 44',
    Week8 = 'MIA 7 NE 36	DET 10 KC 45	CIN 16 PIT 10	TB 23 ATL 20	NYG 49 NO 52	MIN 23 CHI 20	ARI 34 CLE 20	SD 26 BAL 29	SF 6 STL 27	TEN 6 HOU 20	NYJ 20 OAK 34	SEA 13 DAL 12	GB 10 DEN 29	IND 26 CAR 29	MNF 55',
    Week9 = 'CLE 10 CIN 31	TEN 34 NO 28	MIA 17 BUF 33	WAS 10 NE 27	JAC 23 NYJ 28	OAK 35 PIT 38	STL 18 MIN 21	GB 29 CAR 37	NYG 32 TB 18	ATL 16 SF 17	DEN 24 IND 27	PHI 33 DAL 27	CHI 22 SD 19	MNF 41',
    Week10 = 'BUF 22 NYJ 17	JAC 22 BAL 20	MIA 20 PHI 19	CLE 9 PIT 30	CAR 27 TEN 10	CHI 37 STL 13	DAL 6 TB 10	NO 14 WAS 47	DET 18 GB 16	MIN 30 OAK 14	KC 29 DEN 13	NE 27 NYG 26	ARI 39 SEA 32	HOU 10 CIN 6	MNF 16',
    Week11 = 'TEN 13 JAC 19	STL 13 BAL 16	IND 24 ATL 21	WAS 16 CAR 44	NYJ 17 HOU 24	TB 45 PHI 17	OAK 13 DET 18	DAL 24 MIA 14	DEN 17 CHI 15	KC 33 SD 3	SF 13 SEA 29	GB 30 MIN 13	CIN 31 ARI 34	BUF 13 NE 20	MNF 33',
    Week12 = 'PHI 14 DET 45	CAR 33 DAL 14	CHI 17 GB 13	STL 7 CIN 31	MIN 20 ATL 10	SD 31 JAC 25	OAK 24 TEN 21	NO 6 HOU 24	MIA 20 NYJ 38	BUF 22 KC 30	NYG 14 WAS 20	TB 12 IND 25	ARI 19 SF 13	PIT 30 SEA 39	NE 24 DEN 30	BAL 33 CLE 27	MNF 60',
    Week13 = 'GB 27 DET 23	CIN 37 CLE 3	BAL 13 MIA 15	ATL 19 TB 23	SEA 38 MIN 7	ARI 27 STL 3	SF 26 CHI 20	NYJ 23 NYG 20	JAC 39 TEN 42	HOU 21 BUF 30	DEN 17 SD 3	KC 34 OAK 20	CAR 41 NO 38	PHI 35 NE 28	IND 10 PIT 45	DAL 19 WAS 16	MNF 35',
    Week14 = 'MIN 20 ARI 23	DET 14 STL 21	PIT 33 CIN 20	NO 24 TB 17	IND 16 JAC 51	SD 3 KC 10	WAS 24 CHI 21	SF 10 CLE 24	TEN 8 NYJ 30	ATL 0 CAR 38	SEA 35 BAL 6	BUF 20 PHI 23	OAK 15 DEN 12	DAL 7 GB 28	NE 27 HOU 6	NYG 31 MIA 24	MNF 55',
    Week15 = 'TB 23 STL 31	NYJ 19 DAL 16	HOU 16 IND 10	ATL 23 JAC 17	BUF 25 WAS 35	CAR 38 NYG 35	TEN 16 NE 33	CHI 17 MIN 38	KC 34 BAL 14	CLE 13 SEA 30	GB 30 OAK 20	DEN 27 PIT 34	CIN 24 SF 14	MIA 14 SD 30	ARI 40 PHI 17	DET 35 NO 27	MNF 62',
    Week16 = 'SD 20 OAK 23	WAS 38 PHI 24	HOU 34 TEN 6	PIT 17 BAL 20	NE 20 NYJ 26	CAR 13 ATL 20	IND 18 MIA 12	DAL 6 BUF 16	CLE 13 KC 17	SF 17 DET 32	CHI 26 TB 21	JAC 27 NO 38	STL 23 SEA 17	GB 8 ARI 38	NYG 17 MIN 49	CIN 17 DEN 20	MNF 37',
    Week17 = 'WAS 34 DAL 23	NYJ 17 BUF 22	TEN 24 IND 30	BAL 16 CIN 24	NE 10 MIA 20	DET 24 CHI 20	PIT 28 CLE 12	JAC 6 HOU 30	PHI 35 NYG 30	NO 20 ATL 17	SD 20 DEN 27	STL 16 SF 19	OAK 17 KC 23	TB 10 CAR 38	SEA 36 ARI 6	MIN 20 GB 13	MNF 33';

var scores = [
    Week1,
    Week2,
    Week3,
    Week4,
    Week5,
    Week6,
    Week7,
    Week8,
    Week9,
    Week10,
    Week11,
    Week12,
    Week13,
    Week14,
    Week15,
    Week16,
    Week17 ];

var seasonGamesForDB = [];
var seasonMNFForDB = [];

//parse season of games into db entries
scores.forEach(function(weekScores, index) {
    var currentWeek = index + 1;
    var currentSeason = 2015;
    //console.log(weekScores);
    var gamesArray = weekStringToGames(weekScores);
    //console.log(gamesArray);
    gamesArray.forEach(function(gameString, index) {
        var gameComponents = gameStringToArray(gameString);
        //console.log(gameComponents);
        if (gameComponents[0] != 'MNF'){
            var gameDBObject = buildGameAsObject(
                    currentSeason,
                    currentWeek,
                    gameComponents[0],
                    gameComponents[2],
                    gameComponents[1],
                    gameComponents[3],
                    true);
            //console.log(gameDBObject);
            seasonGamesForDB.push(gameDBObject);
        }
        else {
            // add MNF score to array
            
        }
    })
})

//console.log(seasonGamesForDB);
var exports = module.exports = {};
exports.seasonGamesForDB = seasonGamesForDB;

