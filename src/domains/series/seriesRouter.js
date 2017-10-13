// SeriesRouter.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var SeriesController = require('./seriesController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.get('/', SeriesController.getAllSeries);

router.post('/', SeriesController.createSeries);

router.get('/:id/matches', SeriesController.getMatchesBySeriesId); 

router.get('/:id', SeriesController.getSeriesById);

router.delete('/:id', SeriesController.deleteSeries);

router.put('/:id', SeriesController.updateSeries);

router.put('/:id/matches', SeriesController.updateSeriesMatches);


module.exports = router;