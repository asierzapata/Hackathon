const _ = require('lodash');
const teamModel = require('../../domains/team/teamModel');
const matchModel = require('../../domains/match/matchModel');
const jsonGetter = require('../../utils/externalApis/league-of-legends/jsonGetter');
const populateApi = require('../../domains/populateApi/populateApiModel')
const seriesModel =require('../../domains/series/seriesModel');
const tournamentModel = require('../../domains/tournament/tournamentModel');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const API = {
    'parseTournament' : parseTournament,
    'parseSeries' : parseSeries,
    'parseMatch' : parseMatch
}

module.exports = API;

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

// tournaments = highlanderTournaments[x] <-- some index
// Riot api divides the tournaments by an id of a league (ex: league=9 is worlds)
// inside this json the brackets will be our series
function parseTournament(tournament,gameSlug){
    return new Promise(function(resolve,reject){
        console.log('-------- ENTERING TOURNAMENT PARSE --------');
        console.log('TYPEOF TOURNAMENT ',typeof tournament);

        console.log(tournament);
        var name = _.kebabCase(tournament.title);
        var seriesIDs = [];

        var seriesTournament = tournament.brackets;

        _.forIn(tournament.rosters,function(value,key){
            parseTeam(value,tournament);
        })

        _.forIn(seriesTournament,function(value,key) {
            parseSeries(value,tournament,name)
        })

        tournamentModel.createTournament({
            name: _.capitalize(_.lowerCase(name)),
            slug: name,
            series: seriesIDs,
            game_slug: gameSlug
        }).then(function(tournament){
            resolve(tournament)
        },function(err){
            reject(err)
        })
});   
}

function parseSeries(series,tournament,tournamentSlug){
    console.log('------ TOURNAMENT SLUG FOR SERIES ------',tournamentSlug);
    var name = _.kebabCase(series.name);
    var seriesType = series.bracketType.identifier;
    var seriesMatchesType = _.kebabCase(series.matchType.identifier+'_'+series.matchType.options.best_of);

    var teamsIDs = [];
    var matchesIDs = [];    

    var matchesSeries = series.matches;

    _.forIn(matchesSeries,function(value,key){
        parseMatch(value,tournament,name)
    });

    seriesModel.createSeries({
        name: _.capitalize(_.lowerCase(name)),
        slug: name,
        tournament_slug: tournamentSlug,
        matches : matchesIDs,
        matches_type : seriesMatchesType
    }).then(function(series){
        resolve(series._id);
    },function(err){
        reject(err);
    })

}

function parseMatch(match,tournament,seriesSlug){
    var name = match.name;
    var matchGames = match.games;
    var teams = [];
    var matchIDs = [];
    var nameGame, gameId, gameRealm, gameHash, matchDetail;
    var gameHashes = []

    return new Promise(function(resolve,reject){
        populateApi.getApiLinkByName('match-detail',{tournamentId: tournament.id, matchId: match.id})
        .then(function(link){
            return jsonGetter.jsonGetter(link);
        },
        function(err){ 
            throw err 
        }).then(function(json){
            console.log('--- MATCH PROMISE ---');
            matchDetail = json

            var start_time = matchDetail.scheduleItems[0].scheduledTime
            
            matchDetail.gameIdMappins.forEach(function(mapping){
                gameHashes.push(mapping.gameHash)
            });

            matchDetail.teams.forEach(function(element){
                getTeamEntity(element.acronym).then(function(team){
                    teams.push(team);
                },function(err){
                    reject(err)
                });
            })
            setInterval(function(){
                if(teams.length === 2) resolve(teams);
            },2000)
        },function(err){ 
            throw err 
        }).then(function(teams){
            _.forIn(matchGames,function(value,key){
                console.log('--- MATCH MATCHES PROMISE ---');
                nameGame = name+'-'+value.name;
                gameId = value.gameId;
                gameRealm = value.gameRealm;
                gameHash = gameHashes[_.toInteger(value.name.substr(value.name.length - 1))];
                // game id -- 59e0923376f1b30771a3cbaf LoL
                matchModel.createMatch({
                    name: name,
                    time: start_time,
                    game: '59e0923376f1b30771a3cbaf',
                    series_slug: seriesSlug
                },teams).then(function(match){
                    console.log(match)
                    matchModel.updateMatch({id: _.last(matchIDs)},{
                        match_history:{
                            gameId: gameId, 
                            gameRealm: gameRealm, 
                            gameHash: gameHash
                        }
                    }).then(function(match){
                    },function(err){
                        reject(err)
                    });
                },function(err){
                    reject(err)
                });
            });
        },function(err){
            reject(err);
        })   
    });
}

function parseTeam(team,tournament){
    teamModel.createTeam({name: team.name, acronym: team.name})
        .then(function(team){
            return team
        },function(err){
            if (err.status === 409) return
            else throw err
        })
}

function getTeamEntity(acronym){
    return new Promise(function(resolve,reject){
        teamModel.getTeamByAcronym(acronym)
            .then(function(team){
                resolve(team);
            },function(err){
                reject(err)
            })
    });
}
