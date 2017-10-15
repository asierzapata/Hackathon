var TournamentModel = require('./TournamentModel');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getSeriesByTournamentId': getSeriesByTournamentId,
    'getAllTournaments' : getAllTournaments,
    'createTournament': createTournament,
    'getTournamentById': getTournamentById,
    'deleteTournament': deleteTournament,
    'updateTournament': updateTournament,
    'updateTournamentSeries': updateTournamentSeries
}

module.exports = api;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

function createTournament(req,res) {
    return TournamentModel.createTournament(req.body)
        .then(function(tournament){
            return res.status(200).send(tournament);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getAllTournaments(req,res){
    return TournamentModel.getAllTournaments()
        .then(function(tournaments){
            return res.status(200).send(tournaments);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getSeriesByTournamentId(req,res) {
    return TournamentModel.getSeriesByTournamentId(req.params.id)
        .then(function(Tournament){
            return res.status(200).send(Tournament);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getTournamentById(req,res) {
    return TournamentModel.getTournamentById(req.params.id)
        .then(function(tournament){
            return res.status(200).send(tournament);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function deleteTournament(req,res) {
    return TournamentModel.deleteTournament(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateTournament(req,res) {
    return TournamentModel.updateTournament(req.params.id, req.body)
        .then(function(tournament){
            return res.status(200).send(tournament);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateTournamentSeries(req,res){
    var series = (_.isArray(req.body.series)) ? req.body.series : [req.body.series];
    return TournamentModel.updateTournamentSeries(req.params.id,series)
        .then(function(tournament){
            return res.status(200).send(tournament);            
        },function(err){
            res.status(err.status).send(err.message);            
        })
}