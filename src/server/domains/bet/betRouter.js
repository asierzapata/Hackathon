// BetRouter.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var BetController = require('./BetController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.get('/', BetController.getAllBets);

router.post('/', BetController.createBet);

router.get('/:id', BetController.getBetById);

router.post('/detail', BetController.getBetByUserAndMatch);

router.delete('/:id', BetController.deleteBet);

router.put('/:id', BetController.updateBet);

router.put('/detail', BetController.updateBetByUserAndMatch);


module.exports = router;