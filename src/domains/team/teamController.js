// teamController.js
var TeamModel = require('./teamModel');

const teamController = {
    'createTeam' : createTeam,
    'getTeamsByIdArray' : getTeamsByIdArray,
    'getAllTeams' : getAllTeams,
    'getTeamByAcronym' : getTeamByAcronym,
    'getTeamById' : getTeamById,
    'deleteTeam' : deleteTeam,
    'updateTeam' : updateTeam
}

module.exports = teamController;

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

function createTeam(req, res) {
    return TeamModel.createTeam(req.body)
    .then(function(team) {
        return res.status(200).send(team);
    }, function (err) {
        return res.status(err.status).send(err.message);
    })
}

function getTeamsByIdArray(req, res) {
    return TeamModel.getTeamsByIdArray(req.body)
    .then(function(teams) {
        return res.status(200).send(teams);
    }, function (err) {
        return res.status(err.status).send(err.message);
    })
}

function getAllTeams(req, res) {
    return TeamModel.getAllTeams()
    .then(function(teams) {
        return res.status(200).send(teams);
    }, function (err) {
        return res.status(err.status).send(err.message);
    })
}

function getTeamByAcronym(req, res) {
    return TeamModel.getTeamByAcronym(req.params.acronym)
    .then(function(team) {
        return res.status(200).send(team);
    }, function (err) {
        return res.status(err.status).send(err.message);
    })
}

function getTeamById(req, res) {
    return TeamModel.getTeamById(req.params.id)
        .then(function(team) {
            return res.status(200).send(team);
        }, function (err) {
            return res.status(err.status).send(err.message);
        })
}

function deleteTeam(req, res) {
    return TeamModel.deleteTeam(req.params.id)
    .then(function(team) {
        return res.status(200).send(team);
    }, function (err) {
        return res.status(err.status).send(err.message);
    })
}

function updateTeam(req, res) {
    return TeamModel.updateTeam(req.params, req.body)
    .then(function(team) {
        return res.status(200).send(team);
    }, function (err) {
        return res.status(err.status).send(err.message);
    })
}