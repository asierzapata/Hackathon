const _ = require('lodash');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const API = {
    'parseNewMatches' : parseNewMatches,
    'parseMatchDone' : parseMatchDone
}

module.exports = API;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

/*
    Matches will be an array of objects(matches)
    In PandaScore, series are our tournaments (general competition) and series are tournaments (specific to format)
*/
const parseNewSeries = function(series,id_tournament,id_game){
    var newObj = {};
    series = (_.isArray(series)) ? series : [series];
    matches.forEach(function(element) {
        var serie = _.kebabCase(element.name); //name of serie will be unique key and primary
        var tournament = id_tournament; 
        var game = id_game; 
        var teams // api call
        
    });
}

const parseNewMatches = function(matches){

}

const parseMatchDone = function(match){

}



