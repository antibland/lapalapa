var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Submit content' });
});

module.exports = router;

/*  Content.find(function(err, docs) {
      if (err) {
        res.send(500);
        return;
      }
      res.render('index', {docs: docs});
  });*/
