var Game = require('./gameSchema');

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

const createGame = function(data){
    Game.create({
            name: body.name,
            acronym: body.acronym
        },
        function (err, game) {
            if (err) return reject({
                status: 500,
                message: "There was a problem adding this game."
            })
            resolve(game);
        });
}

const getTournamentsByGameId = function(id){
    return new Promise(function(resolve,reject){
        Game.findById(id, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem finding the game with id "+id+"."})
            if (!game) return reject({status: 404, message: "Game not found."})
            resolve(game.tournaments);
        });
    });
}

const getGameById = function(id){
    return new Promise(function(resolve,reject){
        Game.findById(id, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem finding the game with id "+id+"."})
            if (!game) return reject({status: 404, message: "Game not found."})
            resolve(game);
        });
    });
}

const deleteGame = function(id){
    return new Promise(function(resolve,reject){
        Game.findByIdAndRemove(id, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem deleting this game."})
            resolve("Game with id "+ id +" was deleted.");
        });
    });
}

const updateGame = function(id){
    return new Promise(function(resolve,reject){
        Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem updating this game."})
            resolve(game);
        });
    });
}