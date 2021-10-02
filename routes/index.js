var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', userName: 'meh' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', userName: 'meh' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', userName: 'meh' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', userName: 'meh' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', userName: 'meh' });
});

module.exports = router;
