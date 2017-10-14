var ApiLink = require('./populateApiSchema');
var utils = require('../../utils/domains/populateApi/populateApiUtils');
/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'createApiLink' : createApiLink,
    'getApiLinkById' : getApiLinkById,
    'getApiLinkByName' : getApiLinkByName,     
    'getAllApiLinks' :  getAllApiLinks,
    'deleteApiLink' : deleteApiLink,
    'updateApiLink' : updateApiLink,
    'populateTournament' : populateTournament
}

module.exports = api;

function createApiLink(data){
    return new Promise(function(resolve, reject){
        ApiLink.create({
            name: data.name,
            link: data.link
        },
        function (err, apiLink) {
            if (err) return reject({
                status: 500,
                message: "There was a problem adding this ApiLink."
            })
            resolve(apiLink);
        });
    });   
}

function getAllApiLinks(){
    return new Promise(function(resolve,reject){
        ApiLink.find({}, function (err, apiLink) {
            if (err) return reject({status: 500, message: "There was a problem creating the list of ApiLink."})
            resolve(apiLink);
        });
    });
}

function getApiLinkByName(name,params = {}){
    return new Promise(function(resolve,reject){
        ApiLink.find({ name : name }, function(err, apiLink){
            console.log(err)
            if (err) return reject({status: 500, message: "There was a problem finding the apiLink with name "+id+"."})
            if (!apiLink) return reject({status: 404, message: "ApiLink not found."})
            resolve(utils.resolveLink(apiLink,params));
        });
    });
}

function getApiLinkById(id,params = {}){
    return new Promise(function(resolve,reject){
        ApiLink.findById(id, function (err, apiLink) {
            if (err) return reject({status: 500, message: "There was a problem finding the apiLink with id "+id+"."})
            if (!apiLink) return reject({status: 404, message: "ApiLink not found."})
            resolve(utils.resolveLink(apiLink,params));
        });
    });
}

function deleteApiLink(id){
    return new Promise(function(resolve,reject){
        ApiLink.findByIdAndRemove(id, function (err, apiLink) {
            if (err) return reject({status: 500, message: "There was a problem deleting this ApiLink."})
            resolve("ApiLink with id "+ id +" was deleted.");
        });
    });
}

function updateApiLink(id,data){
    return new Promise(function(resolve,reject){
        ApiLink.findByIdAndUpdate(id, data, {new: true}, function (err, apiLink) {
            if (err) return reject({status: 500, message: "There was a problem updating this ApiLink."})
            resolve(apiLink);
        });
    });
}

function populateTournament(name,id,parser,getter){

    return new Promise(function(resolve,reject){
        var apiLink = 'http://api.lolesports.com/api/v2/highlanderTournaments?league='+id
        console.log(apiLink)
        var jsonApi 
        getter.jsonGetter(apiLink).then(function(json){
            return parser.parseTournament(json.highlanderTournaments[2]); // we need to change this to iterate through all tournaments or do another level of abstration 
        },function(err){
            throw err
        }).then(function(tournament){
            console.log('--- TOURNAMENT PROMISE RETURNED ---');
            resolve(tournament)
        },function(err){
            throw err
        })
    })
}