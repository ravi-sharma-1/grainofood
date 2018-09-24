var mysql = require('mysql');
// var connection = mysql.createPool({
//     connectionLimit : 1000,
//     connectTimeout  : 60 * 60 * 1000,
//     aquireTimeout   : 60 * 60 * 1000,
//     timeout         : 60 * 60 * 1000,
//     host: 'sql311.epizy.com',
//     user: 'epiz_22115365',
//     password: 'Wl5AIXQ3VK0x',
//     database: 'epiz_22115365_onlinegrainstore'
// });
var connection = mysql.createPool({
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    aquireTimeout   : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12238583',
    password: 'r1uzRFnd3X',
    database: 'sql12238583'
});
connection.getConnection(function(err, conn){
   // console.log(conn, err);
});
module.exports = connection;