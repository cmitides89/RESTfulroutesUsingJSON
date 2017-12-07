var express = require('express');
var router = express.Router();
var openDB = require('json-file-db');
var db = openDB('donuts.json');

/* GET donuts listing. this is what happens when you type /donuts*/
router.get('/', function (req, res, next) {
    db.get(function(err, data){
        if(err){
            console.log("sry something messedup");
        }else{
            // var donuts = JSON.parse(data);
            res.send(data);
        }
    });

});
// get a single donut by id
router.get('/:id', function (req, res) {
    //read the first donut
    // fs.readFile(__dirname + "/" + "donuts.json", 'utf8', function (err, data) {
    //   var donuts = JSON.parse(data);
    //   var donut = donuts["donut" + req.params.id]
    //   console.log(donut);
    //   res.send(donut);
    // });
    db.get(function (err, data) {
        if (err) {
            console.log("srry something went wrong");
            console.log(err);
        } else {
            // var donuts = JSON.parse(data);
            // var donut = donuts["donut" + req.params.id]
            var donut = data["donut" + req.params.id];
            // donut = donuts
            res.send(donut);
        }
    });
});


module.exports = router;
