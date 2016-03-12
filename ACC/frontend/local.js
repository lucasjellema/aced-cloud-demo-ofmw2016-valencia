var settings = require('./deployment.json');
Object.keys(settings.environment).forEach(function (key) {
    process.env[key] = settings.environment[key];
});

require('./index');
