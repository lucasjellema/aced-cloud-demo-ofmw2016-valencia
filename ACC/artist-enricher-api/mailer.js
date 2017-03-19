var nodemailer = require('nodemailer');
/* http://javascript.tutorialhorizon.com/2015/07/02/send-email-node-js-express/ */


var settings = require("./proxy-settings.js");
var mailerAPI = module.exports;
var apiURL = "/mailer";
var moduleName = "accs.mailerAPI";


var gmailAccount = "soaringacrosstheclouds@gmail.com";
var gmailPassword = "Ooow2016";

mailerAPI.registerListeners =
    function (app) {
        app.post(apiURL, function (req, res) {
            console.log('Mailer POST - ');
            console.log('Mailer-API POST params ' + JSON.stringify(req.params));
            console.log('body in request' + JSON.stringify(req.body));
            var email = {
                "subject": req.body.subject
                , "mailbody": req.body.mailbody
                , "addressees": req.body.addressees
            };
            sendEmail(email.subject, email.mailbody, email.addressees);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ "status": "email was sent", "email": email }));

        });//post messages

    }//registerListeners

function sendEmail(subject, body, addressees) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: gmailAccount, // Your email id
            pass: gmailPassword
        }
    });
    var text = 'Hello world from NodeJS'
    var mailOptions = {
        from: gmailAccount, // sender address
        to: addressees, // list of receivers
        cc: gmailAccount,
        subject: subject, // Subject line
        html: body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        };
    });
};

// sendEmail("About The SoaringClouds demo", "<H1>We are doing OKAY</h1>", "lucas.jellema@amis.nl;lucasjellema@gmail.com");

console.log("Mailer API (version " + settings.APP_VERSION + ") initialized at " + apiURL + " running against GMail account " + gmailAccount);
