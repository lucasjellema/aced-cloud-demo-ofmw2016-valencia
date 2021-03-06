var email = require('emailjs');
/* http://javascript.tutorialhorizon.com/2015/07/02/send-email-node-js-express/ */


var settings = require("./proxy-settings.js");
var emailerAPI = module.exports;
var apiURL = "/mailer";
var moduleName = "accs.mailerAPI";
var logger = require("./logger.js");


var gmailAccount = "soaringacrosstheclouds@gmail.com";
var gmailPassword = "Ooow2017";

emailerAPI.registerListeners =
    function (app) {
        app.post(apiURL, function (req, res) {
            console.log('Mailer POST - ');
            console.log('Mailer-API POST params ' + JSON.stringify(req.params));
            console.log('body in request' + JSON.stringify(req.body));
            var email = {
                "subject": req.body.subject
                , "mailbody": req.body.mailbody
                , "mailbodytext": req.body.mailbodytext
                , "addressees": req.body.addressees
            };
            logger.log("*** Emailer: send email to " + email.addressees + " about:" + email.subject, moduleName, logger.DEBUG);
            var result = sendEmail(email.subject, email.mailbody, email.addressees, email.mailbodytext);
            if (result) {
                console.log("done sending email; composing response");
                res.statusCode = 422;
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ "status": "email was NOT sent", "err": result }));
            }
            else {
                console.log("done sending email; composing response");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ "status": "email was sent", "email": email }));
            }
        });//post messages

    }//registerListeners

function sendEmail(subject, body, addressees, bodytext) {
    console.log("Send email " + subject + " to:" + addressees);
    var server = email.server.connect({
        user: gmailAccount,
        password: gmailPassword,
        host: "smtp.gmail.com",
        ssl: true
    });
    console.log("connected to mail server");
    // send the message and get a callback with an error or details of the message that was sent
    var sendEmail = {
        text: bodytext,
        from: gmailAccount,
        to: addressees,
        cc: gmailAccount,
        subject: subject,
        attachment:
        [
            { data: body, alternative: true },

        ]
    };
    if (!body || body == null) {
        console.log("no html body, resort to text");
        sendEmail.attachment = [];
    }
    server.send(sendEmail, function (err, message) {
        if (err) {
            logger.log("*** Emailer: email sending failed: " + JSON.stringify(err), moduleName, logger.WARN);
        }
        else {
            logger.log("*** Emailer: email was sent: " + JSON.stringify(message), moduleName, logger.DEBUG);
        }
        return err;
    });

};

//sendEmail("About The SoaringClouds demo", "<H1>We are doing OKAY</h1>", "lucas.jellema@amis.nl;lucasjellema@gmail.com");

console.log("EMailer API (version " + settings.APP_VERSION + ") initialized at " + apiURL + " running against GMail account " + gmailAccount);
