var express = require('express'),
   app = express(),
   bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.post('/add', urlencodedParser, function (req, res) {
   var result = parseInt(req.body.a) + parseInt(req.body.b);
   res.send('Result = ' + result);
});

app.listen(7000);
console.log("SERVER IS READY")