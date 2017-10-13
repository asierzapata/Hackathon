var MatchRouter = require('./match/matchRouter');
var TeamRouter = require('./team/teamRouter');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

var controllers = {
    '/match' : MatchRouter,
    '/team' : TeamRouter
};

module.exports = controllers;