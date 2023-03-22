var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      title: 'Welcome to my example of learning git',
      name: req.login.auth ? req.login.username : "guest"
    });
});

router.get('/home/landing', function (req, res, next) {
  res.render('index', { title: "page: home" });
});

router.get('/m(ca)+ts', function (req, res, next) {
  res.render('index', { title: "catatatat....", name: "Dan" });
});

router.get('/cats?dogs', function (req, res, next) {
  res.render('index', { title: "cats", name: "kitties" });
});

module.exports = router;
