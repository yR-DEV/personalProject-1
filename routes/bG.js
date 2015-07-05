var express = require('express');
var router = express.Router();
var loginLogic = require('../public/javascripts/loginLogic.js');
var db = require('monk')('localhost/person-demo');
var loginDb = db.get('logins');

router.get('/bikerGame', function(req, res, next){
  res.render('bikerGame/');
});

router.get('/login', function(req, res,next){
  res.render('login/');
});

module.exports = router;
