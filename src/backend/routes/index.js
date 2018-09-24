var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Yes  >>>>>>")
    res.json({'a':'Welcome Ravi'});
});

module.exports = router;