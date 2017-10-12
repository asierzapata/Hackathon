const initBets = function (team1,team2) {
    var base_ratio = {team1: 1.80, team2: 1.80};
    var bets = ['win_ratio', 'herald', 'first_blood', 'first_drake', 'first_drake_type', 'first_tower', 'first_tower_lane'];
    var betObject = {}

    bets.forEach(function(element){
        betObject[element] = base_ratio;
    });

    return betObject;
}

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const matchUtils = {
    'initBets' : initBets
}

module.exports = matchUtils;