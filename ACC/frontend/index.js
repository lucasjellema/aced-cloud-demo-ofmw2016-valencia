var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));
app.use('/bower_components', express.static('bower_components'));
app.use('/mobile/*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    var url = process.env.MCS_URL + req.originalUrl;
    console.log(new Date().toISOString() + ' - Forwaring request ' + req.originalUrl + ' to ' + url);

    //Send info to OMC
    var options = { method: 'POST',
                    url: 'https://artist-enricher-api-partnercloud17.apaas.us6.oraclecloud.com/logger-api',
                    headers:
                    {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json' },
                    body:
                    {   logLevel: 'info',
                        module: 'accs.jet.artists-portal.node-server',
                        message: 'Artist Proposal Portal is making a request to: ' + url },
                    json: true 
                  };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    });
    //End of sending info to OMC

    req.pipe(request({
        url: url,
        headers: { 'oracle-mobile-backend-id': process.env.MCS_BACKEND_ID },
        auth: { user: process.env.MCS_USER, pass: process.env.MCS_PWD }
    })).pipe(res);
});


var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
    console.log('MCS backend id is ' + process.env.MCS_BACKEND_ID);
});
