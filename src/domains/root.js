var MatchController = require('./match/matchController');
var UserController = require('./user/userController');
var BetRouter = require('./bet/betRouter');
/* ====================================================== */
/*                         API                            */
/* ====================================================== */

var controllers = {
    '/match' : MatchController,
    '/user' : UserController,
    '/bet' : BetRouter
};

module.exports = controllers;