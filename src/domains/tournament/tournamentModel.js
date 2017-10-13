var Tournament = require('./tournamentSchema');

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

const createTournament = function(data){
    return new Promise(function(resolve, reject){
        Tournament.create({
            name: data.name,
            slug: data.slug,
            start_time: data.start_time,
            end_time: data.end_time
        },
     function (err, tournament) {
            if (err) return reject({
                status: 500,
                message: "There was a problem adding this Tournament."
            })
            resolve(tournament);
        });
    });   
}

const getSeriesByTournamentId = function(id){
    return new Promise(function(resolve,reject){
        Tournament.findById(id, function (err, tournament) {
            if (err) return reject({status: 500, message: "There was a problem finding the Tournament with id "+id+"."})
            if (!tournament) return reject({status: 404, message: "Tournament not found."})
            resolve(tournament.series);
        });
    });
}

const getTournamentById = function(id){
    return new Promise(function(resolve,reject){
        Tournament.findById(id, function (err, tournament) {
            if (err) return reject({status: 500, message: "There was a problem finding the Tournament with id "+id+"."})
            if (!tournament) return reject({status: 404, message: "Tournament not found."})
            resolve(tournament);
        });
    });
}

const deleteTournament = function(id){
    return new Promise(function(resolve,reject){
        Tournament.findByIdAndRemove(id, function (err, Tournament) {
            if (err) return reject({status: 500, message: "There was a problem deleting this Tournament."})
            resolve("Tournament with id "+ id +" was deleted.");
        });
    });
}

const updateTournament = function(id,data){
    return new Promise(function(resolve,reject){
        Tournament.findByIdAndUpdate(id, data, {new: true}, function (err, tournament) {
            if (err) return reject({status: 500, message: "There was a problem updating this Tournament."})
            resolve(tournament);
        });
    });
}