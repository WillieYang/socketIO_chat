var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    // res.send('<h1> Hello World </h1>');
    res.sendFile(__dirname + '/src/index.html');
});

http.listen(3000, function() {
    console.log('Listening on port: 3000');
});
