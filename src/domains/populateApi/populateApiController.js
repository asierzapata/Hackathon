var PopulateApiModel = require('./populateApiModel');
var equivalences = require('../../parser/league-of-legends/leagueEquiv.json');
var parser = require('../../parser/league-of-legends/parser');
var getter = require('../../utils/externalApis/league-of-legends/jsonGetter');
var _ = require('lodash')

/* ====================================================== */
/*                         API                            */
/* ====================================================== */


const populateApiController = {
    'createApiLink' : createApiLink,
    'getApiLinkById' : getApiLinkById,
    'getApiLinkByName' : getApiLinkByName, 
    'getAllApiLinks' :  getAllApiLinks,
    'deleteApiLink' : deleteApiLink,
    'updateApiLink' : updateApiLink,
    'populateTournament' : populateTournament
}

module.exports = populateApiController;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

function createApiLink(req,res) {
    return PopulateApiModel.createApiLink(req.body)
        .then(function(apiLink){
            return res.status(200).send(apiLink);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getAllApiLinks(req,res){
    return PopulateApiModel.getAllApiLinks()
        .then(function(apiLinks){
            return res.status(200).send(apiLinks);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getApiLinkById(req,res) {
    return PopulateApiModel.getApiLinkById(req.params.id)
        .then(function(apiLinks){
            return res.status(200).send(apiLinks);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getApiLinkByName(req,res){
    return PopulateApiModel.getApiLinkByName(req.params.name)
        .then(function(apiLinks){
            return res.status(200).send(apiLinks);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function deleteApiLink(req,res) {
    return PopulateApiModel.deleteApiLink(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateApiLink(req,res) {
    return PopulateApiModel.updateApiLink(req.params.id, req.body)
        .then(function(apiLinks){
            return res.status(200).send(apiLinks);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function populateTournament(req,res) {
    return PopulateApiModel.populateTournament(req.params.name,_.get(equivalences,req.params.name),parser,getter)
        .then(function(tournament){
            return res.status(200).send(tournament);
        },function(err){
            res.status(err.status).send(err.message);
        })
}