var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); 

app.get('/', function(req, res){
    // res.send('<h1> Hello World </h1>');
    res.sendFile(__dirname + '/src/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg); // this line of code is used to emit the msg got from user to other users.
        console.log('message: ' + msg);
    });
    // socket.on('disconnect', function() {
    //     console.log('user disconnected');
    // });
});

http.listen(3000, function() {
    console.log('Listening on port: 3000');
});
