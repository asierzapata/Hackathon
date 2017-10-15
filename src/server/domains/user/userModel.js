var User = require('./userSchema');

const createUser = function (req, res) {
    User.create({ 'email' : req.body.email, 'password' : req.body.password }, function(err, user) {
        if (err) return res.status(500).send("There was a problem creating this user.");
        res.status(200).send(user);
    });
}

const loginUser = function (req, res) {
    User.findOne({'email': req.body.email, 'password': req.body.password}, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user with email "+req.body.email+".");
        if (!user) return res.status(404).send("User not found.");
        res.status(200).send(user);
    });
}

const getUserInfo = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user's information.");
        if (!user) return res.status(404).send("User not found.");
        res.status(200).send(user);
    });
}

const profileUpdate = function (req, res) {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user's information.");
        if (!user) return res.status(404).send("User not found.");
        res.status(200).send(user)
    });
}

const deleteAccount = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the account.");
        if (!user) return res.status(404).send("User not found.");
        res.status(200).send("User deleted.");
    });
}

/* ====================================================== */
/*                         API                            */
/* ====================================================== */

const userModel = {
    'createUser' : createUser,
    'loginUser' : loginUser,
    'getUserInfo' : getUserInfo,
    'profileUpdate' : profileUpdate,
    'deleteAccount' : deleteAccount
}

module.exports = userModel;