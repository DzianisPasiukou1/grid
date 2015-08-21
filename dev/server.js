var express = require('express');
var path = require('path');
var port = process.env.PORT || 9000;

var app = express();

app.use('/src' , express.static(__dirname + '/src'));

app.get('/', function (req, res) {
	res.sendfile(path.join(__dirname, 'src/index.html'));
});

app.listen(port);
console.log('Server listen on port: ' + port);
