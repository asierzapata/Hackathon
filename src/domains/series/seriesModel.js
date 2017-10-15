var Series = require('./SeriesSchema');
var _ = require('lodash');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getMatchesBySeriesId': getMatchesBySeriesId,
    'getAllSeries': getAllSeries,    
    'createSeries': createSeries,
    'getSeriesById': getSeriesById,
    'deleteSeries': deleteSeries,
    'updateSeries': updateSeries,
    'updateSeriesMatches' : updateSeriesMatches
}

module.exports = api;

function createSeries(data){
    return new Promise(function(resolve, reject){
        Series.create({
            name: data.name,
            slug: data.slug,
            /*place: data.place,
            start_time: data.start_time,
            end_time: data.end_time*/
            matches : data.matches,
            matches_type : data.matches_type
        },
        function (err, series) {
            if (err) return reject({
                status: 500,
                message: "There was a problem adding this Series."
            })
            resolve(series);
        });
    });   
}

function getAllSeries(){
    return new Promise(function(resolve,reject){
        Series.find({}, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem creating the list of series."})
            resolve(series);
        });
    });
}

function getMatchesBySeriesId(id){
    return new Promise(function(resolve,reject){
        Series.findById(id, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem finding the series with id "+id+"."})
            if (!series) return reject({status: 404, message: "Series not found."})
            resolve(series.matches);
        });
    });
}

function getSeriesById(id){
    return new Promise(function(resolve,reject){
        Series.findById(id, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem finding the series with id "+id+"."})
            if (!series) return reject({status: 404, message: "Series not found."})
            resolve(series);
        });
    });
}

function deleteSeries(id){
    return new Promise(function(resolve,reject){
        Series.findByIdAndRemove(id, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem deleting this series."})
            resolve("Series with id "+ id +" was deleted.");
        });
    });
}

function updateSeries(id,data){
    return new Promise(function(resolve,reject){
        Series.findByIdAndUpdate(id, data, {new: true}, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem updating this series."})
            resolve(series);
        });
    });
}

function updateSeriesMatches(id,matchesArray){
    return new Promise(function(resolve,reject){
        Series.findByIdAndUpdate(id, {$addToSet : { matches : { $each : matchesArray }}}, function (err,series){
            if (err) return reject({status: 500, message: "There was a problem updating this series."})
            resolve(series); 
        });
    });
}