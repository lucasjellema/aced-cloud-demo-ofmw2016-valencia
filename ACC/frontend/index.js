var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));
app.use('/mobile/*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var url = process.env.MCS_URL + req.originalUrl;
    req.pipe(request({
        url: url,
        headers: { 'oracle-mobile-backend-id': process.env.MCS_BACKEND_ID },
        auth: { user: process.env.MCS_USER, pass: process.env.MCS_PWD }
    })).pipe(res);
});


var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});
