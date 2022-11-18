var express = require('express');//requires express module
var router = express.Router();//create a new router

/* GET users listing. */
router.get('/', function(req, res, next) { //get request
  res.send('This is a User Page'); //response when users try to open page
});

module.exports = router;
