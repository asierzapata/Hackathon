var SeriesModel = require('./seriesModel');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getMatchesBySeriesId': getMatchesBySeriesId,
    'createSeries': createSeries,
    'getSeriesById': getSeriesById,
    'deleteSeries': deleteSeries,
    'updateSeries': updateSeries
}

module.exports = api;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const createSeries = function (req,res) {
    return SeriesModel.createSeries(req.body)
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const getMatchesBySeriesId = function (req,res) {
    return SeriesModel.getSeriessBySeriesId(req.params.id)
        .then(function(matches){
            return res.status(200).send(matches);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const getSeriesById = function (req,res) {
    return SeriesModel.getSeriesById(req.params.id)
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const deleteSeries = function (req,res) {
    return SeriesModel.deleteSeries(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const updateSeries = function (req,res) {
    return SeriesModel.updateSeries(req.params.id, req.body)
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

