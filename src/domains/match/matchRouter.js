// matchRouter.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var MatchController = require('./matchController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', MatchController.createMatch);

router.post('/bundle', MatchController.getMatchesByIdArray);

router.get('/', MatchController.getAllMatches);

router.get('/:id', MatchController.getMatchById);

router.delete('/:id', MatchController.deleteMatch);

router.put('/:id', MatchController.updateMatch);

module.exports = router;