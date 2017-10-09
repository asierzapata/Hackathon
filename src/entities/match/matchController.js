// MatchController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // Maybe change to JSON

var MatchModel = require('./matchModel');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', MatchModel.createMatch);

router.get('/', MatchModel.getAllMatches);

router.get('/:id', MatchModel.getMatchById);

router.delete('/:id', MatchModel.deleteMatch);

router.put('/:id', MatchModel.updateMatch);

module.exports = router;