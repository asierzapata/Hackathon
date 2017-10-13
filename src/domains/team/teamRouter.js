// teamRouter.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var TeamController = require('./teamController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', TeamController.createTeam);

router.post('/teamBundle', TeamController.getTeamsByIdArray);

router.get('/', TeamController.getAllTeams);

router.get('/acronym/:acronym', TeamController.getTeamByAcronym);

router.get('/:id', TeamController.getTeamById);

router.delete('/:id', TeamController.deleteTeam);

router.put('/:id', TeamController.updateTeam);

module.exports = router;