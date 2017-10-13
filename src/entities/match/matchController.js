// matchController.js
var MatchModel = require('./matchModel');

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
    return MatchModel.createMatch(req.body)
    .then(function(match){
        return res.status(200).send(match);
    }, function(err){
        res.status(err.status).send(err.message);
    })
}

function getMatchesByIdArray(req, res) {
    return MatchModel.getMatchesByIdArray(req.body)
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