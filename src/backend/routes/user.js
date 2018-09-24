var express = require('express');
var router = express.Router();
var Users = require('../models/userModel');

router.get('/all', function(req, res, next){
    console.log(">>>Users")
 Users.getAllUsers(function(err, rows){
    if(err){
        res.json(err);
    }else{
        res.json(rows);
    }
  })
});

module.exports = router;