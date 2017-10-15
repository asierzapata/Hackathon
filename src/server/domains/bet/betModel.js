var Bet = require('./betSchema');
var _ = require('lodash');

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const BetModel = {
    'createBet' : createBet,
    'getAllBets' :  getAllBets,
    'getBetById' : getBetById,
    'getBetByUserAndMatch': getBetByUserAndMatch,    
    'deleteBet' : deleteBet,
    'updateBet' : updateBet,
    'updateBetByUserAndMatch': updateBetByUserAndMatch
}

module.exports = BetModel;

function createBet(data){
    return new Promise(function(resolve,reject){
        getBetByUserAndMatch(data.match_id,data.user_id)
            .then(function(bet){
                if(_.isEmpty(bet)){
                    Bet.create({
                        user_id : data.user_id,
                        match_id : data.match_id,
                        bet : data.bet
                    },function(err,bet){
                        if(err) reject({status: 500, message: "There was a problem creating the bet"});
                        resolve(bet);
                    });
                } else reject({status: 409, message: "The bet already exists"});
            },function(err){
                reject({status: 500, message: "There was a problem creating the bet"});
            })
    });
}

function getAllBets(){
    return new Promise(function(resolve,reject){
        Bet.find({},function(err,bets){
            if(err) reject({status: 500, message: "There was a problem creating the list of bets"});
            resolve(bets);
        });
    });
}

function getBetById(id){
    return new Promise(function(resolve,reject){
        Bet.findById(id,function(err,bet){
            if(err) reject({status: 500, message: "There was a problem finding the bet"});
            resolve(bet);
        });
    });
}

function getBetByUserAndMatch(match,user){
    return new Promise(function(resolve,reject){
        console.log(match,user)
        console.log(typeof user)        
        Bet.find({user_id : user},function(err,bet){
            if(err) reject({status: 500, message: "There was a problem finding the bet"});
            if(!bet || _.isEmpty(bet)) reject({status: 404, message: "Bet not found"});
            resolve(bet)
        })
    });
}

function deleteBet(id){
    return new Promise(function(resolve,reject){
        Bet.findByIdAndRemove(id,function(err,bet){
            if (err) return reject({status: 500, message: "There was a problem deleting the bet."});
            if (!bet) return reject({status: 404, message: "Bet not found."});
            resolve("Bet deleted.");
        });
    });
}

function updateBet(id,data){
    return new Promise(function(resolve,reject){
        Bet.findByIdAndUpdate(id,{ $set: data },function(err,bet){
            if(err) return reject({status: 500, message: "There was a problem updating the bet."});
            resolve(bet);
        });
    });
}

function updateBetByUserAndMatch(match,user){
    return new Promise(function(resolve,reject){
        Bet.find({ $and : [{user_id : user}, {match_id: match}] },{ $set: data },function(err,bet){
            if(err) return reject({status: 500, message: "There was a problem updating the bet."});
            resolve(bet);
        });
    });
}