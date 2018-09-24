var express = require('express');
var router = express.Router();
var Grain = require('../models/grainModel');

router.get('/get', function(req, res, next){
    console.log(">>>DDDD", req.query)
    if (req.query.gr_name) {
        Grain.searchGrain('gr_name', req.query.gr_name, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }else if (req.query.gr_price) {
        Grain.searchGrain('gr_price', req.query.gr_price, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }else{
        Grain.getAllGrains(function(err, rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
          });
    }
});

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {

        Grain.getGrainById(req.params.id, function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function(req, res, next) {

    Grain.addGrain(req.body, function(err, count) {

        //console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});
router.post('/:id', function(req, res, next) {
    Grain.deleteGrain(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.delete('/:id', function(req, res, next) {

    Grain.deleteGrain(req.params.id, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:id', function(req, res, next) {

    Grain.updateGrain(req.params.id, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;