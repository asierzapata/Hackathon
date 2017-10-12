// GameController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json()); // Maybe change to JSON

var GameController = require('./gameController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', GameController.createGame);

router.get('/:id/tournaments', GameController.getTournamentsByGameId);

router.get('/:id', GameController.getGameById);

router.delete('/:id', GameController.deleteGame);

router.put('/:id', GameController.updateGame);

module.exports = router;