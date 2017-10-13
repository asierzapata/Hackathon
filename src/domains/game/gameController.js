var GameModel = require('./gameModel');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getTournamentsByGameId': getTournamentsByGameId,
    'createGame': createGame,
    'getGameById': getGameById,
    'deleteGame': deleteGame,
    'updateGame': updateGame
}

module.exports = api;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const createGame = function (req,res) {
    return GameModel.createGame(req.body)
        .then(function(game){
            return res.status(200).send(game);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const getTournamentsByGameId = function (req,res) {
    return GameModel.getTournamentsByGameId(req.params.id)
        .then(function(tournaments){
            return res.status(200).send(tournaments);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const getGameById = function (req,res) {
    return GameModel.getGameById(req.params.id)
        .then(function(game){
            return res.status(200).send(game);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const deleteGame = function (req,res) {
    return GameModel.deleteGame(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

const updateGame = function (req,res) {
    return GameModel.updateGame(req.params.id, req.body)
        .then(function(game){
            return res.status(200).send(game);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

