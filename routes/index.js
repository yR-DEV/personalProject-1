var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Biker\'s Revenge' });
});

router.get('/bG', function(req, res, next) {
  res.render('bikerGame/bG');
})

module.exports = router;
