// MatchController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // Maybe change to JSON

var MatchController = require('./matchController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', MatchController.createMatch);

router.get('/', MatchController.getAllMatches);

router.get('/:id', MatchController.getMatchById);

router.delete('/:id', MatchController.deleteMatch);

router.put('/:id', MatchController.updateMatch);

module.exports = router;