requirejs.config({
    // Path mappings for the logical module names
    paths: {
        'knockout': 'oraclejet/js/libs/knockout/knockout-3.3.0',
        'jquery': 'oraclejet/js/libs/jquery/jquery-2.1.3.min',
        'jqueryui-amd': 'oraclejet/js/libs/jquery/jqueryui-amd-1.11.4.min',
        'ojs': 'oraclejet/js/libs/oj/v1.1.2/debug',
        'ojL10n': 'oraclejet/js/libs/oj/v1.1.2/ojL10n',
        'ojtranslations': 'oraclejet/js/libs/oj/v1.1.2/resources',
        'text': 'oraclejet/js/libs/require/text',
        'promise': 'oraclejet/js/libs/es6-promise/promise-1.0.0.min',
        'hammerjs': 'oraclejet/js/libs/hammer/hammer-2.0.4.min'
    },
    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    },

    // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
    // resources with a custom translation file.
    // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
    // a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
            }
        }
    }
});


/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback.
 *
 * For a listing of which JET component modules are required for each component, see the specific component
 * demo pages in the JET cookbook.
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojmodule'],
    function (oj, ko, $) {
        // this callback gets executed when all required modules are loaded
        // add any startup code that you want here
        // look for view models and view templates in same folder. That's easier for editing
        oj.ModuleBinding.defaults.modelPath = 'views/';
        ko.applyBindings(); // activate knockout
        // ko.applyBindings(new RootViewModel(), document.getElementById('app'));

        function RootViewModel() {
            console.log('creating RVM');
            //var self = this;
        }

    });
