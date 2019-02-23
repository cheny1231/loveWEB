/**
 * Module dependencies.
 */

 var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var db = require('./mysql');
var path = require('path')
// use local css files
app.use(express.static(path.join(__dirname, 'public')));
// respond with html file
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function (socket) {
//     // Forward and save chat message
//     socket.on('chat message', function (msg) {
//         var d = new Date();
//         var conn = db.connect();
//         var time = d.toLocaleString();
//         io.emit('chat message', {msg: msg, user: socket.username, time: time});
//         var sql = "INSERT INTO history (name, time, message) VALUES ('" + socket.username
//             + "', '" + time + "', '" + msg + "')";
//         conn.query(sql, function(err, result) {
//             if(err) throw err;
//             console.log("message inserted");
//         });
//         conn.end();
//     });

//     // Check and register the user
//     socket.on('register', function(username, password, callback) {
//         var conn = db.connect();
//         conn.query("SELECT password FROM users WHERE name='" + username + "'", function(err, result, fields) {
//             console.log(result);
//             if(result.length != 0) {
//                 callback(false);
//                 conn.end();
//             } else {
//                 socket.username = username;
//                 callback(true);
//                 var sql = "INSERT INTO users (name, password) VALUES ('" + username + "', '" + password + "')";
//                 conn.query(sql, function(err, result) {
//                     if (err) throw err;
//                     console.log(username + " inserted");
//                     // Send chat history to user
//                     conn.query("SELECT * FROM history", function(err, result, fields) {
//                         io.emit('history', result);
//                         conn.end();
//                     });
//                 });
//             }
//         });


//     });
//     // Check and let user log in
//     socket.on('login', function(username, password, callback) {
//         var conn = db.connect();
//         conn.query("SELECT password FROM users WHERE name='" + username + "'", function(err, result, fields) {
//             if(result.length != 0) {
//                 if(result[0].password === password) {
//                     callback(true);
//                     socket.username = username;
//                     console.log(username + " login successfully");
//                     // Send chat history to user
//                     conn.query("SELECT * FROM history", function(err, result, fields) {
//                         io.emit('history', result);
//                     });
//                 } else {
//                     callback(false);
//                 }
//             } else {
//                 callback(false);
//             }
//             conn.end();
//         });

//     });
// });
// Listen for connection
http.listen(3000, function () {
    console.log('listening on *:3000');
});

