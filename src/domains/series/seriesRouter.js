// SeriesRouter.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var SeriesController = require('./seriesController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', SeriesController.createSeries);

router.get('/:id/matches', SeriesController.getMatchesBySeriesId); // Discuss how to implement (return id's or the entity?)

router.get('/:id', SeriesController.getSeriesById);

router.delete('/:id', SeriesController.deleteSeries);

router.put('/:id', SeriesController.updateSeries);

module.exports = router;