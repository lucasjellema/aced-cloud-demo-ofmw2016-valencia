/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
var acts = require("./lib/artistapiREST_impl");
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.get('/mobile/custom/artistapi/acts', function(req,res) {
                acts.getActs(req,res);
	});

	service.get('/mobile/custom/artistapi/acts/:id/:imageID', function(req,res) {
            var result = {};
            var statusCode = 200;
            res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/artistapi/acts/:id', function(req,res) {
           acts.getActDetailsById(req,res);
	});

};
