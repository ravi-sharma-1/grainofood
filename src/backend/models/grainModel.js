var db = require('../dbconn'); //reference of dbconnection.js

var grainModel = {

    getAllGrains: function(callback) {

        return db.query("Select * from grain", callback);

    },
    getGrainById: function(id, callback) {

        return db.query("select * from grain where pid=?", [id], callback);
    },
    searchGrain: function(key, value, callback) {
        if(key == 'gr_name'){
            var sqlqry = "select * from grain where" +key+"=?"+value;
            console.log(sqlqry);
            return db.query("select * from grain where " +key+" like ?",value+"%", callback);
        }else if(key=='gr_price'){
            return db.query("select * from grain where " +key+"<=?", [value], callback);
        }else{
            callback('',{"message":"No Records Found"}); 
        }
       
    },
    addGrain: function(Grain, callback) {
        console.log(Grain);
        return db.query("Insert into grain (gr_name, gr_quantity, gr_price, pr_year) values(?,?,?,?)", [Grain.gName, Grain.gQuantity, Grain.gPrice, Grain.gTime], callback);
    },
    deleteGrain: function(id, callback) {
        return db.query("delete from grain where pid=?", [id], callback);
    },
    updateGrain: function(id, Grain, callback) {
        console.log(Grain);
        return db.query("update grain set gr_name=?, gr_quantity=? ,gr_price=? where pid=?", [Grain.gName, Grain.gQuantity, Grain.gPrice, id], callback);
    }

};
module.exports = grainModel;