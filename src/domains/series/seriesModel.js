var Series = require('./SeriesSchema');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const api = {
    'getMatchesBySeriesId': getMatchesBySeriesId,
    'createSeries': createSeries,
    'getSeriesById': getSeriesById,
    'deleteSeries': deleteSeries,
    'updateSeries': updateSeries
}

module.exports = api;

const createSeries = function(data){
    return new Promise(function(resolve, reject){
        Series.create({
            name: data.name,
            slug: data.slug,
            place: data.place,
            start_time: data.start_time,
            end_time: data.end_time
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

const getMatchesBySeriesId = function(id){
    return new Promise(function(resolve,reject){
        Series.findById(id, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem finding the series with id "+id+"."})
            if (!series) return reject({status: 404, message: "Series not found."})
            resolve(series.matches);
        });
    });
}

const getSeriesById = function(id){
    return new Promise(function(resolve,reject){
        Series.findById(id, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem finding the series with id "+id+"."})
            if (!series) return reject({status: 404, message: "Series not found."})
            resolve(series);
        });
    });
}

const deleteSeries = function(id){
    return new Promise(function(resolve,reject){
        Series.findByIdAndRemove(id, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem deleting this series."})
            resolve("Series with id "+ id +" was deleted.");
        });
    });
}

const updateSeries = function(id,data){
    return new Promise(function(resolve,reject){
        Series.findByIdAndUpdate(id, data, {new: true}, function (err, series) {
            if (err) return reject({status: 500, message: "There was a problem updating this series."})
            resolve(series);
        });
    });
}