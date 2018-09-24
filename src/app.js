// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');

const bodyParser = require('body-parser');
const flatfile = require('flat-file-db');
var db = flatfile('./backend/graino.db');

db.on('open', function () {
});

// var routes = require('./backend/routes/index');
// var grain = require('./backend/routes/grain');
// var users = require('./backend/routes/user');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, '')));

app.get('/user/:key', function (req, resp) {
    console.log(req.params);
    var keyValue = req.headers.email;
    if (keyValue) {
        var data = db.get(keyValue);
        if (data) {
            resp.json(data)
        } else {
            resp.status(500).send({ "error": "No Data Found" });
        }
    } else {
        resp.status(401).send({ "error": "Invalid User" });
    }
})

app.post('/user/:key', function (req, resp) {
    var key = req.params.key;
    console.log(key);
    switch (key) {
        case 'address' || 'shipping' || 'billing' || 'payment':
            console.log(req.body);
            if (req.body.email) {
                req.body[key] = '';
                var data = db.put(key, req.body);
                //resp.send(data);
                resp.send(req.body);
            }
        default:
            resp.status(401).send({ "error": "Invalid User" });
    }
});

// Set our api routes
//app.use('/api', api);

// Catch all other routes and return the index file
//app.get('*', function(req, res) {
//  res.sendFile(path.join(__dirname, 'dist/index.html'));
//});


// Get our API routes
// const api = require('./server/routes/api');



//no
// Parsers for POST data
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
}));



// app.use('/api', routes);
// app.use('/api/grain', grain);
// app.use('/api/user', users);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });


// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.json('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }


// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.json('error', {
//         message: err.message,
//         error: {}
//     });
// });


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
module.exports = app;