// TournamentRouter.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json()); 

var TournamentController = require('./tournamentController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.get('/', TournamentController.getAllTournaments);

router.post('/', TournamentController.createTournament);

router.get('/:id/series', TournamentController.getSeriesByTournamentId);

router.get('/:id', TournamentController.getTournamentById);

router.delete('/:id', TournamentController.deleteTournament);

router.put('/:id', TournamentController.updateTournament);

router.put('/:id/series', TournamentController.updateTournamentSeries);


module.exports = router;