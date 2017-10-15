Game = require('./gameSchema');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

GameModel = {
    createGame : createGame,
    getAllGames : getAllGames,
    getTournamentsByGameId : getTournamentsByGameId,    
    getGameById : getGameById,
    deleteGame : deleteGame,
    updateGame : updateGame
}

module.exports = GameModel;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

function createGame (data){
    return new Promise(function(resolve, reject){
        Game.create({
            name: data.name,
            acronym: data.acronym
        },
        function (err, game) {
            if (err) return reject({
                status: 500,
                message: "There was a problem adding this game."
            })
            resolve(game);
        });
    });      
}

function getAllGames(){
    return new Promise(function(resolve,reject){
        Game.find({},function(err,games){
            if(err) return reject({status: 500, message: "There was a problem getting the list of all games"});
            resolve(games);
        });
    });
}

function getTournamentsByGameId (id){
    return new Promise(function(resolve,reject){
        Game.findById(id, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem finding the game with id "+id+"."})
            if (!game) return reject({status: 404, message: "Game not found."})
            resolve(game.tournaments);
        });
    });
}

function getGameById(id){
    return new Promise(function(resolve,reject){
        Game.findById(id, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem finding the game with id "+id+"."})
            if (!game) return reject({status: 404, message: "Game not found."})
            resolve(game);
        });
    });
}

function deleteGame(id){
    return new Promise(function(resolve,reject){
        Game.findByIdAndRemove(id, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem deleting this game."})
            resolve("Game with id "+ id +" was deleted.");
        });
    });
}

function updateGame(id,data){
    return new Promise(function(resolve,reject){
        Game.findByIdAndUpdate(id, data, {new: true}, function (err, game) {
            if (err) return reject({status: 500, message: "There was a problem updating this game."})
            resolve(game);
        });
    });
}

function updateGameTournaments(id,tournamentsArray){
    return new Promise(function(resolve,reject){
        Game.findByIdAndUpdate(id, {$addToSet : { tournaments : { $each : tournamentsArray }}}, function (err,game){
            if (err) return reject({status: 500, message: "There was a problem updating this game."})
            resolve(game); 
        });
    });
}