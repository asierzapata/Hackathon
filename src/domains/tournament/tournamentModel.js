var Tournament = require('./tournamentSchema');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getSeriesByTournamentId': getSeriesByTournamentId,
    'getAllTournaments': getAllTournaments,
    'createTournament': createTournament,
    'getTournamentById': getTournamentById,
    'deleteTournament': deleteTournament,
    'updateTournament': updateTournament,
    'updateTournamentSeries': updateTournamentSeries
}

module.exports = api;

function createTournament(data){
    return new Promise(function(resolve, reject){
        Tournament.create({
            name: data.name,
            slug: data.slug
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

function getAllTournaments(){
    return new Promise(function(resolve,reject){
        Tournament.find({}, function (err, tournaments) {
            if (err) return reject({status: 500, message: "There was a problem creating the list of tournaments."})
            resolve(tournaments);
        });
    });
}

function getSeriesByTournamentId(id){
    return new Promise(function(resolve,reject){
        Tournament.findById(id, function (err, tournament) {
            if (err) return reject({status: 500, message: "There was a problem finding the list of Tournaments with id "+id+"."})
            if (!tournament) return reject({status: 404, message: "Tournament not found."})
            resolve(tournament.series);
        });
    });
}

function getTournamentById(id){
    return new Promise(function(resolve,reject){
        Tournament.findById(id, function (err, tournament) {
            if (err) return reject({status: 500, message: "There was a problem finding the Tournament with id "+id+"."})
            if (!tournament) return reject({status: 404, message: "Tournament not found."})
            resolve(tournament);
        });
    });
}

function deleteTournament(id){
    return new Promise(function(resolve,reject){
        Tournament.findByIdAndRemove(id, function (err, Tournament) {
            if (err) return reject({status: 500, message: "There was a problem deleting this Tournament."})
            resolve("Tournament with id "+ id +" was deleted.");
        });
    });
}

function updateTournament(id,data){
    return new Promise(function(resolve,reject){
        Tournament.findByIdAndUpdate(id, data, {new: true}, function (err, tournament) {
            if (err) return reject({status: 500, message: "There was a problem updating this Tournament."})
            resolve(tournament);
        });
    });
}

function updateTournamentSeries(id,seriesArray){
    return new Promise(function(resolve,reject){
        Tournament.findByIdAndUpdate(id, {$addToSet : { series : { $each : seriesArray }}}, function (err,tournament){
            if (err) return reject({status: 500, message: "There was a problem updating this series."})
            resolve(tournament); 
        });
    });
}