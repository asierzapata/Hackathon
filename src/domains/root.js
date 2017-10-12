var MatchController = require('./match/matchController');
var UserController = require('./user/userController');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

var controllers = {
    '/match' : MatchController,
    '/user' : UserController
};

module.exports = controllers;