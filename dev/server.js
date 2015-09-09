var express = require('express');
var path = require('path');
var port = process.env.PORT || 9000;

var app = express();

app.use('/src', express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/release', express.static(__dirname + '/release'));

app.get('/', function (req, res) {
	res.sendfile(path.join(__dirname, 'dist/index.html'));
});

app.get('*', function (req, res) {
	res.sendfile(path.join(__dirname, 'dist/index.html'));
});

app.get('/doc', function (req, res) {
	res.sendfile(path.join(__dirname, 'doc/index.html'));
});


app.listen(port);
console.log('Server listen on port: ' + port);