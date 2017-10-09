var Match = require('./matchSchema');

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const createMatch = function (req, res) {
    console.log('Post at / of match_controller called');
    Match.create({
        teams: req.body.teams,
        time: req.body.time,
        game: req.body.game,
        competition: req.body.competition
    },
    function (err,match){
        if (err) return res.status(500).send("There was a problem adding this match.") 
        res.status(200).send(match);
    });
}

const getAllMatches = function (req, res) {
    console.log('Get at / of match_controller called');    
    Match.find({}, function (err,matches) {
        if (err) return res.status(500).send("There was a problem finding all matches.") 
        res.status(200).send(matches);
    });
}

const getMatchById = function (req, res) {
    Match.findById(req.params.id, function (err, match) {
        if (err) return res.status(500).send("There was a problem finding the match with id "+req.params.id+".");
        if (!match) return res.status(404).send("Match not found.");
        res.status(200).send(match);
    });
}

const deleteMatch = function (req, res) {
    Match.findByIdAndRemove(req.params.id, function (err, match) {
        if (err) return res.status(500).send("There was a problem deleting the match.");
        res.status(200).send("Match with id "+ req.params.id +" was deleted.");
    });
}

const updateMatch = function (req, res) {  
    Match.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, match) {
        if (err) return res.status(500).send("There was a problem updating the match.");
        res.status(200).send(match);
    });
}

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const matchModel = {
    'createMatch' : createMatch,
    'getAllMatches' :  getAllMatches,
    'getMatchById' : getMatchById,
    'deleteMatch' : deleteMatch,
    'updateMatch' : updateMatch
}

module.exports = matchModel;