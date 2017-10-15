var GameModel = require('./gameModel');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getTournamentsByGameId': getTournamentsByGameId,
    'getAllGames': getAllGames,
    'createGame': createGame,
    'getGameById': getGameById,
    'deleteGame': deleteGame,
    'updateGame': updateGame,
    'updateGameTournaments': updateGameTournaments
}

module.exports = api;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

function createGame(req,res) {
    return GameModel.createGame(req.body)
        .then(function(game){
            return res.status(200).send(game);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getAllGames(req,res){
    return GameModel.getAllGames()
        .then(function(games){
            return res.status(200).send(games)
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getTournamentsByGameId(req,res) {
    return GameModel.getTournamentsByGameId(req.params.id)
        .then(function(tournaments){
            return res.status(200).send(tournaments);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getGameById(req,res) {
    return GameModel.getGameById(req.params.id)
        .then(function(game){
            return res.status(200).send(game);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function deleteGame(req,res) {
    return GameModel.deleteGame(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateGame(req,res) {
    if(_.isArray(req.body)) res.status(400).send('Array not accepted as a type')
    return GameModel.updateGame(req.params.id, req.body)
        .then(function(game){
            return res.status(200).send(game);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateGameTournaments(req,res){
    var tournaments = (_.isArray(req.body.tournaments)) ? req.body.tournaments : [req.body.tournaments];
    return GameModel.updateGameTournaments(req.params.id,tournaments)
        .then(function(game){
            return res.status(200).send(game);            
        },function(err){
            res.status(err.status).send(err.message);            
        })
}

