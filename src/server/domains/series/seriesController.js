var SeriesModel = require('./seriesModel');
var _ = require('lodash');
/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getMatchesBySeriesId': getMatchesBySeriesId,
    'getAllSeries': getAllSeries,
    'createSeries': createSeries,
    'getSeriesById': getSeriesById,
    'deleteSeries': deleteSeries,
    'updateSeries': updateSeries,
    'updateSeriesMatches' : updateSeriesMatches
}

module.exports = api;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

function createSeries(req,res) {
    return SeriesModel.createSeries(req.body)
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getAllSeries(req,res){
    return SeriesModel.getAllSeries()
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getMatchesBySeriesId(req,res) {
    return SeriesModel.getMatchesBySeriesId(req.params.id)
        .then(function(matches){
            return res.status(200).send(matches);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getSeriesById(req,res) {
    return SeriesModel.getSeriesById(req.params.id)
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function deleteSeries(req,res) {
    return SeriesModel.deleteSeries(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateSeries(req,res) {
    return SeriesModel.updateSeries(req.params.id, req.body)
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateSeriesMatches(req,res){
    var matches = (_.isArray(req.body.matches)) ? req.body.matches : [req.body.matches];
    return SeriesModel.updateSeriesMatches(req.params.id,matches)
        .then(function(series){
            return res.status(200).send(series);            
        },function(err){
            res.status(err.status).send(err.message);            
        })
}