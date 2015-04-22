var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'La Palapa',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

module.exports = router;
