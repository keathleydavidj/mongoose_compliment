var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

/* GET home page. */
router.get('/', function(req, res, next) {
  Compliment.justPickOne(function(err, compliment){
    var comp = compliment.toObject();
    res.render('index', {
      title: 'Express',
      compliment: comp.compliment
    });
  });
});

router.post('/', function(req, res, next) {
  var newCompliment = new Compliment({
    compliment: req.body.compliment
  });

  newCompliment.save(function(err, compliment) {
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).json({
        status: 'OK',
        compliment: compliment
      });
    }
  });
});

module.exports = router;
