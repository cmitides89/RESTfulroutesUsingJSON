var express = require('express');
var router = express.Router();
var openDB = require('json-file-db');
var db = openDB('donuts.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  db.get(function (err, data) {
    if (err) {
      console.log("sry something messedup");
    } else {
      // var donuts = JSON.parse(data);
      res.send(data);
    }
  });
});

module.exports = router;
