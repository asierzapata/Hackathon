var Team = require('./teamSchema');
var _ = require('lodash')

const teamModel = {
    'createTeam' : createTeam,
    'getTeamsByIdArray' : getTeamsByIdArray,
    'getAllTeams' : getAllTeams,
    'getTeamByAcronym' : getTeamByAcronym,
    'getTeamById' : getTeamById,
    'deleteTeam' : deleteTeam,
    'updateTeam' : updateTeam
}

module.exports = teamModel;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

function createTeam(body) {
    return new Promise(function(resolve, reject) {
        Team.create({
            name: body.name,
            acronym: body.acronym,
            /*region: body.region,
            players: body.players*/
        }, function (err, team) {
            if (err && err.code === 11000) return reject({
                status: 409,
                message: "The team already exists."
            });

            if (err) return reject({
                status: 500,
                message: "There was a problem adding this team."
            });
            resolve(team);
        });
    });
}

function getTeamsByIdArray(idArray) {
    return new Promise(function(resolve, reject) {
        Team.find( { _id: {$in: idArray} }, function(err, teams) {
            if (err) return reject({status: 500,message: "No matching teams."});
            if (!teams) return reject({status: 404,message: "No teams found."});
            resolve(teams);
        });
    });
}

function getAllTeams() {
    return new Promise(function(resolve, reject) {
        Team.find({},function(err, teams) {
            if (err) return reject({
                status: 500,
                message: "Error getting all the teams."
            });
            if (!teams) return reject({
                status: 404,
                message: "No teams found."
            });
            resolve(teams);
        });
    });
}

function getTeamByAcronym(acronym) {
    acronym = _.upperCase(acronym);
    return new Promise(function(resolve, reject) {
        Team.find({acronym: acronym}, function(err, team) {
            if (err) return reject({
                status: 500,
                message: "Problem getting the team."
            });
            if (!team) return reject({
                status: 404,
                message: "No team found with that acronym."
            });
            resolve(team);
        });
    });
}

function getTeamById(id) {
    return new Promise(function(resolve, reject) {
        Team.findById(id, function(err, team) {
            if (err) return reject({
                status: 500,
                message: "Problem getting the team."
            });
            if (!team) return reject({
                status: 404,
                message: "No team found with that id."
            });
            resolve(team);
        });
    });
}

function deleteTeam(id) {
    return new Promise(function(resolve, reject) {
        Team.findByIdAndRemove(id, function(err, team) {
            if (err) return reject({
                status: 500,
                message: "Problem deleting the team."
            });
            if (!team) return reject({
                status: 404,
                message: "No team found with that id."
            });
            resolve(team);
        });
    });
}

function updateTeam(params, body) {
    return new Promise(function(resolve, reject) {
        Team.findByIdAndUpdate(params.id, body, function(err, team) {
            if (err) return reject({
                status: 500,
                message: "Error updating the team."
            });
            if (!team) return reject({
                status: 404,
                message: "No team found with that id."
            });
            resolve(team);
        });
    });
}