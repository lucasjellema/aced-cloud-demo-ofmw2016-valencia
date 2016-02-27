/**
 * config for non-debug libraries
 */

requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': 'libs/knockout/knockout-3.3.0',
    'jquery': 'libs/jquery/jquery-2.1.3.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
    'ojs': 'libs/oj/v1.1.2/min',
    'ojL10n': 'libs/oj/v1.1.2/ojL10n',
    'ojtranslations': 'libs/oj/v1.1.2/resources',
    'signals': 'libs/js-signals/signals.min',
    'crossroads': 'libs/crossroads/crossroads.min',
    'history': 'libs/history/history.iegte8.min',
    'text': 'libs/require/text',
    'promise': 'libs/es6-promise/promise-1.0.0.min',
    'hammerjs': 'libs/hammer/hammer-2.0.4.min'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    },
    'crossroads': {
      deps: ['signals'],
      exports: 'crossroads'
    }
  }  
});
