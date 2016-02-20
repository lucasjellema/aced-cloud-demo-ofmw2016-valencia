var acts = require("./lib/artistapi_impl");

module.exports = function (service) {


    service.get('/mobile/custom/artistapi/acts', function (req, res) {
        acts.getActs(req,res);
    });

    service.get('/mobile/custom/artistapi/acts/:id', function (req, res) {
        acts.getActDetailsById(req,res);
    });

    service.get('/mobile/custom/artistapi/acts/:id/:imageID', function (req, res) {
        var result = {};
        res.send(200, result);
    });

};
