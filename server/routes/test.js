const express = require('express');
const router = express.Router();
const { getTestController } = require('../controllers/test');
//import controllers


//import middlewares


//api routers
router.get('/test', getTestController);

module.exports = router;