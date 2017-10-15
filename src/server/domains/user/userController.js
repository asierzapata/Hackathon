// UserController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var UserModel = require('./userModel');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', UserModel.createUser);

router.post('/login', UserModel.loginUser);

router.get('/:id', UserModel.getUserInfo);

router.put('/:id', UserModel.profileUpdate);

router.delete('/:id', UserModel.deleteAccount);

module.exports = router;