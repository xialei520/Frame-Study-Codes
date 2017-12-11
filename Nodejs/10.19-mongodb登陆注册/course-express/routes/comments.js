const express = require('express');
var router = express.Router();

router.get('/abcd', function(req, res) {
  res.render('comment', {name: 'tom'})
})

module.exports = router;
