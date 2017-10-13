// PopulateApiRouter.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var PopulateApiController = require('./PopulateApiController');

/* ====================================================== */
/*                       ROUTES                           */
/* ====================================================== */

router.post('/', PopulateApiController.createApiLink);

router.get('/:id', PopulateApiController.getApiLinkById);

router.get('/', PopulateApiController.getAllApiLinks);

router.get('/name/:name', PopulateApiController.getApiLinkByName);

router.delete('/:id', PopulateApiController.deleteApiLink);

router.put('/:id', PopulateApiController.updateApiLink);

module.exports = router;