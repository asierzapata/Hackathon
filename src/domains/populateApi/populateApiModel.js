var ApiLink = require('./populateApiSchema');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'createApiLink' : createApiLink,
    'getApiLinkById' : getApiLinkById,
    'getApiLinkByName' : getApiLinkByName,     
    'getAllApiLinks' :  getAllApiLinks,
    'deleteApiLink' : deleteApiLink,
    'updateApiLink' : updateApiLink
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

function getApiLinkByName(name){
    return new Promise(function(resolve,reject){
        ApiLink.find({ name : name }, function(err, apiLink){
            console.log(err)
            if (err) return reject({status: 500, message: "There was a problem finding the apiLink with name "+id+"."})
            if (!apiLink) return reject({status: 404, message: "ApiLink not found."})
            resolve(apiLink);
        });
    });
}

function getApiLinkById(id){
    return new Promise(function(resolve,reject){
        ApiLink.findById(id, function (err, apiLink) {
            if (err) return reject({status: 500, message: "There was a problem finding the apiLink with id "+id+"."})
            if (!apiLink) return reject({status: 404, message: "ApiLink not found."})
            resolve(apiLink);
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
