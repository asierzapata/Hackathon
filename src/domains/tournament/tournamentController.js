var TournamentModel = require('./TournamentModel');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getSeriesByTournamentId': getSeriesByTournamentId,
    'createTournament': createTournament,
    'getTournamentById': getTournamentById,
    'deleteTournament': deleteTournament,
    'updateTournament': updateTournament
}

module.exports = api;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const createTournament = function (req,res) {
    return TournamentModel.createTournament(req.body)
        .then(function(tournament){
            return res.status(200).send(tournament);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const getSeriesByTournamentId = function (req,res) {
    return TournamentModel.getSeriesByTournamentId(req.params.id)
        .then(function(series){
            return res.status(200).send(series);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const getTournamentById = function (req,res) {
    return TournamentModel.getTournamentById(req.params.id)
        .then(function(tournament){
            return res.status(200).send(tournament);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const deleteTournament = function (req,res) {
    return TournamentModel.deleteTournament(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const updateTournament = function (req,res) {
    return TournamentModel.updateTournament(req.params.id, req.body)
        .then(function(tournament){
            return res.status(200).send(tournament);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

