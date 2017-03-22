requirejs.config({
    // Path mappings for the logical module names
    paths: {
        'knockout': '../bower_components/knockout/dist/knockout',
        'jquery': '../bower_components/jquery/dist/jquery',
        'jqueryui-amd': '../bower_components/jquery-ui/ui',
        'ojs': '../bower_components/oraclejet/dist/js/libs/oj/debug',
        'ojdnd': '../bower_components/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0',
        'ojL10n': '../bower_components/oraclejet/dist/js/libs/oj/ojL10n',
        'ojtranslations': '../bower_components/oraclejet/dist/js/libs/oj/resources',
        'text': '../bower_components/text/text',
        'signals': '../bower_components/js-signals/dist/signals',
        'customElements': '../bower_components/webcomponentsjs/CustomElements',
        'promise': '../bower_components/es6-promise/promise',
        'proj4': '../bower_components/proj4/dist/proj4-src',
        'hammerjs': '../bower_components/hammerjs/hammer',
        'css': '../bower_components/require-css/css'
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
        $('body').addClass('started');
        // ko.applyBindings(new RootViewModel(), document.getElementById('app'));

        function RootViewModel() {
            console.log('creating RVM');
            //var self = this;
        }

    });
