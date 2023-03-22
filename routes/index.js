var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to my example of learning git', name: `Joshua's` });
});

router.get('home/landing', function (req, res, next) {
  res.render('index', { title: "page: home" });
});

module.exports = router;
