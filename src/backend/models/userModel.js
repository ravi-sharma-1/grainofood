var db = require('../dbconn'); //reference of dbconnection.js

var userModel = {

    getAllUsers: function(callback) {

        return db.query("Select * from users", callback);

    }

};
module.exports = userModel;