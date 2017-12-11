var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/a', function(req, res, next) {
  res.render('login', {});
});

module.exports = router;