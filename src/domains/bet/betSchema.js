var mongoose = require("mongoose");

var BetSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    match_id: {type: String, required: true},
    bet: Object // {}
}, { timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 
});

mongoose.model("Bet",BetSchema);

module.exports = mongoose.model("Bet");