// MatchController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // Maybe change to JSON

var MatchModel = require('./matchModel');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

const createMatch = function (req,res) {
    return MatchModel.createMatch(req.body)
    .then(function(match){
        return res.status(200).send(match);
    }, function(err){
        res.status(err.status).send(err.message);
    })
}

const getAllMatches = function (req, res) {
    return MatchModel.getAllMatches(req.body)
    .then( function(matches) {
        return res.status(200).send(matches);
    }, function(err) {
        res.status(err.status).send(err.message);
    })
}

/*router.get('/', MatchModel.getAllMatches);*/

const getMatchById = function (req, res) {
    
}

router.get('/:id', MatchModel.getMatchById);

router.delete('/:id', MatchModel.deleteMatch);

router.put('/:id', MatchModel.updateMatch);



module.exports = router;