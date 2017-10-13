var Match = require('./matchSchema');
var MatchUtils = require('../../utils/domains/match/matchUtils');
var _ = require('lodash');

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

/**
 * @api {post} /match Adds a new match
 * @apiGroup Matchs
 * @apiParam {String[]} teams The teams of the match
 * @apiParam {Date} time The date in JS format
 * @apiParam {String} game Game of this match
 * @apiParam {String} competition League or tournament where this match will take place
 * @apiSuccess {Object} match The resultant object inserted in the db
 * @apiSuccessExample {Object} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": "59dbbcf933f189109ccef174",
 *      "game": "League of Legends",
 *      "competition": "Worlds",
 *      "__v": 0,
 *      "time": "2017-10-09 20:16:25.754",
 *      "teams": [
 *          "LZ",
 *          "GAM"
 *      ]
 *    }]
 * @apiExample {curl} Example usage:
 *      curl --request POST --url http://localhost/match/ --header 'content-type: application/x-www-form-urlencoded' --data 'teams=IMT&teams=FNC&game=League%20of%20Legends&competition=Worlds'
 * @apiErrorExample {String} DB error:
 *    HTTP/1.1 500 Internal Server Error
 *      There was a problem adding this match.
 */

function createMatch(body,teams) {
    const init_bets = MatchUtils.initBets(teams[0]._id, teams[1]._id);
    return new Promise(function(resolve, reject){
        Match.create({
            teams: teams,
            time: body.time,
            game: body.game,
            tournament: body.tournament,
            series: body.series,
            bet_net: init_bets
        }, function (err,match){
            if (err) return reject({
                status: 500,
                message: "There was a problem adding this match."
            });
            resolve(match);
        });
    })
}


function getMatchesByIdArray(idArray) {
    return new Promise(function(resolve, reject) {
        Match.find( { _id: {$in: idArray} }, function(err, matches) {
            if (err) return reject({
                status: 500,
                message: "There was a problem finding the matches."
            });
            if (!matches) return reject({
                status: 404,
                message: "No matching matches."
            });
            resolve(matches);
        });
    });
}

/**
 * @api {get} /match List of all matches
 * @apiGroup Matchs
 * @apiSuccess {Object[]} matches Array of all matches
 * @apiExample {curl} Example usage:
 *      curl --request GET --url http://localhost/match/
 * @apiErrorExample {String} DB error:
 *    HTTP/1.1 500 Internal Server Error
 *      "There was a problem finding all matches."
 */

function getAllMatches() {
    return new Promise (function(resolve, reject) {
        Match.find({},{"teams":1,"game":1,"start_time":1},function(err, matches) {
            if (err) return reject ({
                status: 500,
                message: "There was a problem finding all matches."
            });
            if (!matches) return reject ({
                status: 404,
                message: "Any matches found."
            });
            matches.forEach(function(element){
                if(_.isObject(element.teams[0]) || _.isObject(element.teams[1])){
                    element.teams.forEach(function(team){
                        element.teams.push([team._id,team.acronym]);
                    });
                    element.teams = _.takeRight(element.teams, 2);
                }
            });         
            resolve(matches);
        })
    });
}

/**
 * @api {get} /match/:id Obtain match by id
 * @apiGroup Matchs
 * @apiParam {String} id 
 * @apiSuccess {Object} match 
 * @apiExample {curl} Example usage:
 *      curl --request GET --url http://localhost/match/59dbbcf933f189109ccef174
 * @apiSuccessExample {Object} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": "59dbbcf933f189109ccef174",
 *      "game": "League of Legends",
 *      "competition": "Worlds",
 *      "__v": 0,
 *      "time": "2017-10-09 20:16:25.754",
 *      "teams": [
 *          "LZ",
 *          "GAM"
 *      ]
 *    }]
 * @apiErrorExample {String} DB error:
 *    HTTP/1.1 500 Internal Server Error
 *      "There was a problem finding the match with id :id."
 * @apiErrorExample {String} Match error:
 *    HTTP/1.1 404 Not Found
 *      "Match not found."
 */

function getMatchById(params) {
    return new Promise(function(resolve, reject) {
        Match.findById(params.id, function(err, match) {
            if (err) return reject ({
                status: 500,
                message: "There was a problem finding all matches."
            });
            if (!match) return reject ({
                status: 404,
                message: "Match not found."
            });
            resolve(match);
        })
    });
}

/**
 * @api {delete} /match/:id Delete match by id
 * @apiGroup Matchs
 * @apiParam {String} id 
 * @apiSuccess {String} confirmation 
 * @apiExample {curl} Example usage:
 *      curl --request DELETE --url http://localhost/match/59dbbd5233f189109ccef175
 * @apiSuccessExample {Object} Success
 *    HTTP/1.1 200 OK
 *      "Match with id :id was deleted."
 * @apiErrorExample {String} DB error:
 *    HTTP/1.1 500 Internal Server Error
 *      "There was a problem deleting the match."
 */

function deleteMatch(params) {
    return new Promise(function(resolve, reject) {
        Match.findByIdAndRemove(params.id, function (err, match) {
            if (err) return reject({
                status: 500,
                message: "There was a problem deleting the match."
            });
            if (!match) return reject({
                status: 404,
                message: "No match found with that id."
            })
            resolve(match);
        });
    });
}

/**
 * @api {put} /match/:id Update a match by id
 * @apiGroup Matchs
 * @apiParam {String} id 
 * @apiSuccess {Object} match New match object updated 
 * @apiExample {curl} Example usage:
 *     curl --request PUT --url http://localhost/match/59dbbcf933f189109ccef174 --header 'content-type: application/x-www-form-urlencoded' --data 'teams=FNC&teams=GAM'
 * @apiSuccessExample {Object} Success
 *    HTTP/1.1 200 OK
 *      [{
 *      "_id": "59dbbcf933f189109ccef174",
 *      "game": "League of Legends",
 *      "competition": "Worlds",
 *      "__v": 0,
 *      "time": "2017-10-09 20:16:25.754",
 *      "teams": [
 *          "FNC",
 *          "GAM"
 *      ]
 *    }]
 * @apiErrorExample {String} DB error:
 *    HTTP/1.1 500 Internal Server Error
 *      "There was a problem deleting the match."
 */

function updateMatch(params, body) {
    return new Promise(function(resolve, reject) {
        Match.findByIdAndUpdate(params.id, body, {new: true}, function(err, match) {
            if (err) return reject({
                status: 500,
                message: "There was a problem updating this match."
            });
            if (!match) return reject({
                status: 404,
                message: "Match with that id not found."
            });
            resolve(match);
        });
    });
}

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const matchModel = {
    'createMatch' : createMatch,
    'getMatchesByIdArray' : getMatchesByIdArray,
    'getAllMatches' : getAllMatches,
    'getMatchById' : getMatchById,
    'deleteMatch' : deleteMatch,
    'updateMatch' : updateMatch
}

module.exports = matchModel;