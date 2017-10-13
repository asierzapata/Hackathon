// matchController.js
var MatchModel = require('./matchModel');
var TeamModel = require('../team/teamModel');
var _ = require('lodash')
var ObjectId = require('mongodb').ObjectID


const matchController = {
    'createMatch' : createMatch,
    'getMatchesByIdArray' : getMatchesByIdArray,
    'getAllMatches' :  getAllMatches,
    'getMatchById' : getMatchById,
    'deleteMatch' : deleteMatch,
    'updateMatch' : updateMatch
}

module.exports = matchController;

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

function createMatch(req, res) {
    var obj_ids = _.map( req.body.teams,function(id) { return ObjectId(id); });    
    return TeamModel.getTeamsByIdArray(obj_ids)
        .then(function(teams){
            return MatchModel.createMatch(req.body,teams)
        },function(err){
            res.status(err.status).send(err.message);
        })
        .then(function(match){
            return res.status(200).send(match);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getMatchesByIdArray(req, res) {
    var obj_ids = req.body.idArray.map(function(id) { return ObjectId(id); });    
    return MatchModel.getMatchesByIdArray(obj_ids)
        .then ( function(matches) {
            return res.status(200).send(matches);
        }, function(err) {
            res.status(err.status).send(err.message);
        })
}

function getAllMatches(req, res) {
    return MatchModel.getAllMatches()
        .then ( function(matches) {
            return res.status(200).send(matches);
        }, function(err) {
            res.status(err.status).send(err.message);
        })
}

function getMatchById(req, res) {
    return MatchModel.getMatchById(req.params)
    .then ( function(match) {
        return res.status(200).send(match);
    }, function(err) {
        res.status(err.status).send(err.message);
    })
}

function deleteMatch(req, res) {
    return MatchModel.deleteMatch(req.params)
    .then ( function(match) {
        return res.status(200).send(match);
    }, function(err) {
        res.status(err.status).send(err.message);
    })
}

function updateMatch(req, res) {
    return MatchModel.updateMatch(req.params, req.body)
    .then ( function(match) {
        return res.status(200).send(match);
    }, function(err) {
        res.status(err.status).send(err.message);
    })
}