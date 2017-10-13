var MatchRouter = require('./match/matchRouter'); 
var UserRouter = require('./user/userController');  // TODO Change to router when pull is made
var GameRouter = require('./game/gameRouter');
var TournamentRouter = require('./tournament/tournamentRouter');
var SeriesRouter = require('./series/seriesRouter');
var BetRouter = require('./bet/betRouter');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

var Routers = { 
    '/user' : UserRouter,
    '/game' : GameRouter,
    '/tournament' : TournamentRouter, 
    '/series' : SeriesRouter,
    '/match' : MatchRouter,
    '/bet' : BetRouter
};

module.exports = Routers;