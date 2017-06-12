
var settings = module.exports;
//settings.PORT= 80;  // Note: 5100 for running locally, 80 for running in the cloud
settings.PORT= 5101;  // Note: 5100 for running locally, 80 for running in the cloud

settings.logFile = 'mediator-proxy.txt';

settings.APP_VERSION = "0.1.03";

settings.ChangeHistory ="Local cache-api (that invokes remote on ACCS); local likes and log processing (using in memory array i/o Kafka";

settings.runLocally = function () {
    return !(process.env.PORT);
}