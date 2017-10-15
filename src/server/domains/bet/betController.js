var BetModel = require('./betModel');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const BetController = {
    'createBet' : createBet,
    'getAllBets' :  getAllBets,
    'getBetById' : getBetById,
    'getBetByUserAndMatch': getBetByUserAndMatch,    
    'deleteBet' : deleteBet,
    'updateBet' : updateBet,
    'updateBetByUserAndMatch': updateBetByUserAndMatch
}

module.exports = BetController;

function createBet(req,res){
    BetModel.createBet(req.body)
        .then(function(bet){
            return res.status(200).send(bet);
        },function(err){
            res.status(err.status).send(err.message);
        })
}

function getAllBets(req,res){
    return BetModel.getAllBets()
        .then(function(bets){
            return res.status(200).send(bets);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getBetById(req,res) {
    return BetModel.getBetById(req.params.id)
        .then(function(bet){
            return res.status(200).send(bet);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function getBetByUserAndMatch(req,res){
    return BetModel.getBetByUserAndMatch(req.body.match,req.body.user)
        .then(function(bet){
            return res.status(200).send(bet);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function deleteBet(req,res) {
    return BetModel.deleteBet(req.params.id)
        .then(function(msg){
            return res.status(200).send(msg);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateBet(req,res) {
    return BetModel.updateBet(req.params.id, req.body)
        .then(function(bet){
            return res.status(200).send(bet);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}

function updateBetByUserAndMatch(req,res){
    return BetModel.updateBetByUserAndMatch(req.body)
        .then(function(bet){
            return res.status(200).send(bet);
        }, function(err){
            res.status(err.status).send(err.message);
        })
}