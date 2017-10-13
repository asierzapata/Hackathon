const initBets = function (team1,team2) {
    var bets = ['win_ratio', 'herald', 'first_blood', 'first_drake', 'first_drake_type', 'first_tower', 'first_tower_lane'];
    var betObject = []

    bets.forEach(function(element){
        betObject.push({
            name: element,
            odds: [
                {team: team1, value: 1.80},
                {team: team2, value: 1.80}
            ]
        });
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