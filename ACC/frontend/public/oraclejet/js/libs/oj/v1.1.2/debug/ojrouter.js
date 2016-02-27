/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'knockout', 'signals', 'promise'], function(oj, ko, signals)
{

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true*/
/*global oj, ko, Promise, signals */

/**
 * The ojRouter module.
 */

// Wrap in a IIFE to prevents the possiblity of collision in a non-AMD scenario.
(function() {
"use strict";
/**
 * Hold the base URL.
 * static
 * @private
 * @type {string}
 */
var _ojBaseUrl;
/**
 * Hold the base path name.
 * @private
 * @type {string}
 */
var _basePathName;
/**
 * Hold the current page, usually 'index.html'
 * @private
 * @const
 * @type {string}
 */
var _thisPage = getThisPage();
/**
 * Hold the url adapter to be used.
 * @private
 * @type {Object}
 */
var _urlAdapter;

/**
 * The name of the request param for bookmarkable data.
 * @private
 * @const
 * @type {string}
 */
var _ROUTER_PARAM = 'oj_Router=';

/**
 * Maximum size of URL
 * @private
 * @const
 * @type {number}
 */
var _MAX_URL_LENGTH = 1024;

/**
 * Utility to compress JSON to store on the URL.
 * @private
 */
var LZString = {

   // private property
   _f : String.fromCharCode,
   _keyStrUriSafe : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
   _getBaseValue : function(alphabet, character) {
      var i;

      if (!LZString._baseReverseDic) {
         LZString._baseReverseDic = {};
      }
      if (!LZString._baseReverseDic[alphabet]) {
         LZString._baseReverseDic[alphabet] = {};
         for (i=0 ; i<alphabet.length ; i++) {
            LZString._baseReverseDic[alphabet][alphabet[i]] = i;
         }
      }
      return LZString._baseReverseDic[alphabet][character];
   },

   //compress into a string that is already URI encoded
   compressToEncodedURIComponent: function (input) {
      if (input == null) {
         return '';
      }
      return LZString._compress(input, 6, function(a) {
         return LZString._keyStrUriSafe.charAt(a);
      });
   },

   //decompress from an output of compressToEncodedURIComponent
   decompressFromEncodedURIComponent:function (input) {
      if (input == null) {
         return '';
      }
      if (input == '') {
         return null;
      }
      return LZString._decompress(input.length, 32, function(index) {
         return LZString._getBaseValue(LZString._keyStrUriSafe, input.charAt(index));
      });
   },

   _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
      if (uncompressed == null) {
         return '';
      }
      var i, value,
         context_dictionary= {},
         context_dictionaryToCreate= {},
         context_c='',
         context_wc='',
         context_w='',
         context_enlargeIn= 2, // Compensate for the first entry which should not count
         context_dictSize= 3,
         context_numBits= 2,
         context_data_string='',
         context_data_val=0,
         context_data_position=0,
         ii,
         f=LZString._f;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed[ii];
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data_string += getCharFromInt(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data_string += getCharFromInt(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data_string += getCharFromInt(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data_string += getCharFromInt(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data_string += getCharFromInt(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data_string += getCharFromInt(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data_string += getCharFromInt(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data_string += getCharFromInt(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data_string += getCharFromInt(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data_string += getCharFromInt(context_data_val);
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data_string += getCharFromInt(context_data_val);
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data_string += getCharFromInt(context_data_val);
        break;
      }
      else context_data_position++;
    }
    return context_data_string;
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = '',
        result = '',
        i,
        w,
        bits, resb, maxpower, power,
        c,
        f = LZString._f,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = result = c;
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result;
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w[0];
        } else {
          return null;
        }
      }
      result += entry;

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry[0];
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};

// Static private methods

/**
 * Calculate the base URL, the href without the page reference at the end.
 */
function getBaseUrl() {
   // Remove the hash for HTML4 case
   var base = window.location.href.split('#')[0];
   // Then extract the base URL
   return removeLastSegment(base);
};

function getUrl() {
   return window.location.href;
};

/**
 * Retrieve the name of the current page if exist (index.html, page.html)
 */
function getThisPage() {
   var result = '';
   var url = window.location.pathname;
   if (url.indexOf('.html', url.length - '.html'.length) !== -1) {
      result = url.split('/').pop();
   }

   return result;
};

/**
 * Retrieve the part of the URL up to the last '/'
 */
function removeLastSegment(url) {
   return url.substring(0, url.lastIndexOf('/'));
};

/**
 * Return key/value object of query parameters.
 * @return {!Object.<string, string>}
 */
function parseQueryParam(queryString) {
   var params = {};

   if (queryString) {
      var keyValPairs = [];
      keyValPairs = queryString.split('&');
      for (var pairNum in keyValPairs)
      {
         var parts = keyValPairs[pairNum].split(/=(.+)?/);
         var key = parts[0];

         if (!key.length) {
            continue;
         }
         if (typeof params[key] === 'undefined') {
            params[key] = [];
         }
         var value = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, ' '));
         params[key].push(value);
      }
   }

   return params;
}

/**
 * Return the {@link oj.RouterState} object for a specific router given a state id.
 * @param {oj.Router} router The router object.
 * @param {string} stateId The state id.
 * @return {oj.RouterState | undefined} The state object.
 */
 //TODO: Add associative array for better performance.
function getStateFromId(router, stateId) {
   var state;

   if (stateId && router._states) {
      oj.Assert.assertString(stateId);

      for (var i = 0; i < router._states.length; i++) {
         var stateAt = router._states[i];
         if (stateAt.id === stateId) {
            state = stateAt;
            break;
         }
      }
   }
   return state;
};

function getShortUrl() {
   var shortUrl;
   // For HTML4 browser, the hash is used
   if (window.location.hash && window.location.hash.length > 0) {
      shortUrl = window.location.hash.replace(/[^#]*#/, '');
      shortUrl = shortUrl.replace(_basePathName + '/', '');
   } else {
      shortUrl = getUrl().replace(_ojBaseUrl + '/', '');
   }

   return shortUrl;
};

function getRouterFullName(router) {
   if (router.parent) {
      return getRouterFullName(router.parent) + '.' + router.name;
   }

   return router.name;
};

/**
 * Return the child router for a specific branch
 * @param {oj.Router} router
 * @param {string|undefined} value
 * @return {oj.Router|undefined}
 */
function getChildRouter(router, value) {
   var subRouter;

   //TODO: Merge functionality with handlePopState
   for (var i = 0; i < router._childRouters.length; i++) {
      var sr = router._childRouters[i].router;
      if (!sr._parentState || (sr._parentState === value)) {
         subRouter = sr;
         break;
      }
   }

   return subRouter;
}

/**
 * Encode and compress the a state object. This is used for bookmarkable data.
 * @param {!Object} extraState
 * @return {string}
 * @throws An error if bookmarkable state is too big.
 */
function encodeStateParam(extraState) {
   var jsonState = JSON.stringify(extraState);
   var encodedState = encodeURIComponent(jsonState);
   var compressedState = LZString.compressToEncodedURIComponent(jsonState);
   var useCompressed = false;
   var param = _ROUTER_PARAM;

   if (compressedState.length <= encodedState.length) {
      useCompressed = true;
   }

   if (useCompressed) {
      param += '1' + compressedState;
   }
   else {
      param += '0' + encodedState;
   }

   if (param.length > _MAX_URL_LENGTH) {
      throw new Error('Size of bookmarkable data is too big.');
   }

   return param;
}

/**
 * Decompress and decode the state param from the URL.  This is used for bookmarkable data.
 * @param {!string} param
 * @throws An error if parsing fails or format is invalid.
 */
function decodeStateParam(param) {
   // First character is the compression type. Right now only 0 and 1 are supported.
   // 0 for no compression, 1 for LZW
   var compressionType = param.charAt(0);

   param = param.slice(1);

   if (compressionType === '0') {
      param = decodeURIComponent(param);
   }
   else if (compressionType === '1') {
      param = LZString.decompressFromEncodedURIComponent(param);
   }
   else {
      throw new Error('Error retrieving bookmarkable data. Format is invalid');
   }

   return JSON.parse(param);
}

/**
 * Build the state param and add it to the URL.
 * @param {!string} url the url to which the param will be added
 * @param {Object} extraState the object to be stored in the param
 * @return {string} the URL with the state param
 */
function addStateParam(url, extraState) {
   if (extraState && Object.getOwnPropertyNames(extraState).length > 0) {
      var sep;
      if (url.indexOf('?') == -1) {
         sep = '?';
      }
      else {
         sep = '&';
      }

      url +=  sep + encodeStateParam(extraState);
   }

   return url;
}

/**
 * Function use to handle the popstate event.
 */
function handlePopState(event) {
   oj.Logger.info('Handling popState event with URL: ' + window.location.href);

   // First retrieve the sub-router associated with the current state, if there is one.
   var subRouter = null;
   for (var i = 0; i < rootRouter._childRouters.length; i++) {
      var sr = rootRouter._childRouters[i].router;
      if (rootRouter._stateId() && rootRouter._stateId() === sr._parentState) {
         subRouter = sr;
         break;
      }
   }

   _canExit(subRouter).then(function (canExit) {
      if (canExit) {
         return parseAndUpdate(getShortUrl()).
            then(function(params) {
               dispatchTransitionedToState(params['hasChanged']);
            });
      }
      else {
         dispatchTransitionedToState(false);
         return Promise.resolve({ 'hasChanged': false });
      }
   }).then(null, function(error) {
      oj.Logger.error('Error while changing state in handlePopState: ' + error.message);
   });
};

/**
 * Dispatch the transitionedToState signal
 * @param {boolean} hasChanged
 */
function dispatchTransitionedToState(hasChanged) {
   oj.Router['transitionedToState'].dispatch({ 'hasChanged': hasChanged });
};

/**
 * Build an array of objects by visiting the parent hierarchy.
 * Each element of the array represent the state of a router.
 * @param {!oj.Router} router
 * @param {number=} level
 * @param {oj.RouterState=} state
 * @return {Array.<{router:oj.Router, stateId:string}>}
 */
function _buildState(router, level, state) {
   var newStates = [];

   if (router.parent) {
      newStates = _buildState(router.parent, level + 1);
   }

   var sId;
   if (typeof state === 'undefined') {
      var st = router._currentState();
      if (st) {
         sId = st.id;
      }
   } else {
      sId = state.id;
   }

   // If a default state is defined, simplify the URL by removing param
   if (sId === router._defaultStateId && level === 0) {
      sId = null;
   }

   newStates.push({
      router: router,
      stateId: sId
   });

   return newStates;
};

/**
 * Execute a lifecycle callback given its name. Used for enter and exit.
 * @private
 * @param {oj.Router} router - the router for the context
 * @param {!string} name - name of the callback to execute
 * @param {oj.RouterState=} state
 */
function _executeCallback(router, name, state) {
   //TODO: handle promise
   //TODO: invoke callback with query parameters as a parameter.
   if (state) {
      // Callback on router state has already been checked for validity in constructor.
      var callback = state[name];
      if (callback) {
         // Use the router as context
         callback.call(router);
      }
   }
}

/**
 * Traverse the child router and build and array of promise for each canExit callback.
 * If the router doesn't have a canExit callback, make a promise resolved to true.
 * If the callback is not a promise, make a promise resolved to the value returned by the callback.
 * @private
 * @param {oj.Router} router
 * @param {!Array} promisesArray - Array of promises.
 * @return {boolean} - false if one of the callback returned false.
 */
function _buildAllCanExitPromises(router, promisesArray) {
   var canExit = true;
   var promise = Promise.resolve(true);
   var currentState = router.stateFromIdCallback(router._stateId());

   if (currentState) {
      // Traverse each child router and ask for canExit
      for (var i = 0; i < router._childRouters.length; i++) {
         //TODO: Indicate to canExit which state is transitioning
         canExit = _buildAllCanExitPromises(router._childRouters[i].router, promisesArray);
         // Quick way out
         if (!canExit) {
            return false;
         }
      }

      var canExitCallback;

      // A callback defined on bound viewModel has precedence.
      if (currentState.viewModel && currentState.viewModel['canExit']) {
         canExitCallback = currentState.viewModel['canExit'];
      } else {
         canExitCallback = currentState['canExit'];
      }

      if (typeof canExitCallback === 'function') {
         //TODO: Might need to invoke with different context using apply.
         var result;

         try {
            result = canExitCallback();
         }
         catch (err) {
            oj.Logger.error('Error when executing canExit callback: ' + err.message);
            return false;
         }

         if (result && result.then) {
            promise = result;
         }
         else {
            if (!result) {
               oj.Logger.info('canExit is false for state ' + currentState.id);
            }
            canExit = result;
         }
      }
   }

   promisesArray.push(promise)

   return canExit;
};

/**
 * Invoke canExit callbacks in a a deferred way.
 * @param {oj.Router} router
 */
function _canExit(router) {
   if (!router) {
      return Promise.resolve(true);
   }
   var allPromises = [];
   var canExit = _buildAllCanExitPromises(router, allPromises);

   if (!canExit) {
      return Promise.resolve(canExit);
   }

   return Promise.all(allPromises).then(function(results) {
      for (var i = 0; i < results.length; i++) {
         if (!results[i]) {
            oj.Logger.info('CanExit promise at position ' + i + ' returned false.');
            return false;
         }
      }

      return true;
   });
};

/**
 * Return a promise resolving to true if can transition to new state in allChanges
 * @param {!Array.<{value:string, router:oj.Router}>} allChanges
 */
var _canEnter = function(allChanges) {
   oj.Logger.info('Start _canEnter.');

   var canEnter = true;
   var promise = Promise.resolve(true);
   var allPromises = [];
   for (var i = 0; i < allChanges.length; i++) {
      var change = allChanges[i];
      var canEnterCallback;
      var newState = change.router.stateFromIdCallback(change.value);

      // It is allowed to transition to an undefined state, but no state
      // callback need to be executed.
      if (newState) {
         canEnterCallback = newState['canEnter'];

         // Check if we can enter this new state by executing the callback.
         // If it is a promise, add it to the array to be resolved later.
         // If it is a boolean, break if it is false.
         if (typeof canEnterCallback === 'function') {
            //TODO: Might need to invoke with different context using apply.
            var result;

            try {
               result = canEnterCallback();
            }
            catch (err) {
               oj.Logger.error('Error when executing canEnter callback: ' + err.message);
               return Promise.resolve([]);
            }
            if (result && result.then) {
               promise = result;
            }
            else {
               canEnter = result;
               if (!canEnter) {
                  oj.Logger.info('canEnter is false for state: ' + newState.id);
                  break;
               }
            }
         }
      }

      allPromises.push(promise);
   }

   if (!canEnter) {
      return Promise.resolve([]);
   }

   return Promise.all(allPromises).then(function(results) {
      for (var i = 0; i < results.length; i++) {
         if (!results[i]) {
            oj.Logger.info('CanEnter promise at position ' + i + ' returned false.');
            return [];
         }
      }

      return allChanges;
   });
}

/**
 * Update the state of all routers in the change array.
 * @param {!Array.<{value:string, router:oj.Router}>} allChanges
 * @return { {'hasChanged': boolean} }
 */
var _updateAll = function(allChanges) {
   oj.Logger.info('Entering _updateAll.');
   var hasChanged = false;

   // Make all updates
   for (var i = 0; i < allChanges.length; i++) {
      var change = allChanges[i];
      hasChanged = change.router._update(change.value);
      if (!hasChanged) {
         break;
      }
   }

   oj.Logger.info('_updateAll returns ' + (hasChanged ? 'true' : 'false'));
   return { 'hasChanged': hasChanged };
}

/**
 *
 * @param {!string} url
 * @return {!Array.<{value:string, router:oj.Router}>}
 * @throws Error when parsing of query param fails.
 */
function _parseUrl(url) {
   var extra = {},
       search = url.split('?')[1] || '';

   oj.Logger.info('Parsing: ' + url);
   url = _urlAdapter.cleanUrl(url);

   // Retrieve the extra state from request param oj_Router
   var stateStr = search.split(_ROUTER_PARAM)[1];
   if (stateStr) {
      stateStr = stateStr.split('&')[0];
      extra = decodeStateParam(stateStr);
   }

   if (oj.Logger.option('level') === oj.Logger.LEVEL_INFO) {
      oj.Logger.info('Bookmarkable data: ');
      for (var name in extra) {
         oj.Logger.info('   { router: ' + name + ', value: ' + extra[name]);
      }
   }

   var allChanges = [];
   var reducedChanges = [];

   allChanges = _urlAdapter.parse(url);

   for (var index = 0; index < allChanges.length; index++) {
      var change = allChanges[index];

      // Update the bookmarkable data
      var ex = extra[change.router.name];
      if (ex) {
         change.router._extra = ex;
      }

      // Only keep changes where the value doesn't match the router state
      if (change.value !== change.router._stateId()) {
         reducedChanges.push(change);
      }
   }

   if (oj.Logger.option('level') === oj.Logger.LEVEL_INFO) {
      oj.Logger.info('Potential changes are: ');
      for (var i=0; i<reducedChanges.length; i++) {
         oj.Logger.info('   { router: ' + getRouterFullName(reducedChanges[i].router) +
                        ', value: ' + reducedChanges[i].value + '}');
      }
   }

   return reducedChanges;
}

/**
 * Use to update the state with the given URL.
 * Parse the new URL and update state.
 * @param {!string} url
 */
function parseAndUpdate(url) {
   var allChanges;

   try {
      allChanges = _parseUrl(url);
   }
   catch (error) {
      return Promise.reject(error);
   }

   return _canEnter(allChanges).then(_updateAll);
}

//TODO: Change constructor to take options.
/**
 * @class
 * @requires ojs/ojcore
 * @requires knockout
 * @since 1.1.0
 * @classdesc
 * <h3>JET Router</h3>
 * <p>The router is designed to simplify writing navigation for Single Page Applications.
 * The approach taken is to think of navigation in terms of states and transitions instead
 * of URLs and hashes. A router is always in one in a number of possible states and when
 * a UI action is taken in the application, a transition between states is executed. The
 * router is responsible to properly format the URL to reflect the current state and to
 * restore the application to the matching state when the URL changes.
 * <p>Building navigation is done in three steps:
 * <h6>Define the states that can be taken by the router:</h6>
 * <pre class="prettyprint"><code>
 * var router = oj.Router.rootInstance;
 * // Add three states to the router with id 'home', 'book' and 'tables
 * router.configure({
 *    'home':   { label: 'Home',   value: 'homeContent', isDefault: true },
 *    'book':   { label: 'Book',   value: 'bookContent' },
 *    'tables': { label: 'Tables', value: 'tablesContent' }
 * });
 *
 * var viewModel = {
 *    router: router
 * };
 *
 * oj.Router.sync().then(
 *    function() {
 *       ko.applyBindings(viewModel);
 *       $('#globalBody').show();
 *    },
 *    function(error) {
 *       oj.Logger.error('Error when starting router: ' + error.message);
 *    });
 * </code></pre>
 *
 * <h6>Trigger a state transition when user ask to navigate:</h6>
 * <pre class="prettyprint"><code>
 * &lt;div id="routing-container">
 *    &lt;div id='buttons-container' data-bind="foreach: router.states">
 *      &lt;!-- Use the go function of the state as the handler for a click binding -->
 *      &lt;input type="button"
 *             data-bind="click: go,  attr: {id: id},
 *             ojComponent: {component: 'ojButton', label: label}"/>
 *    &lt;/div>
 * &lt;/div>
 * </code></pre>
 *
 * <h6>Listen to the state change and updates the dependent parts:</h6>
 * <pre class="prettyprint"><code>
 * &lt;!-- Display the content of the current state -->
 * &lt;h2 id="pageContent" data-bind="text: router.currentValue"/>
 * </code></pre>
 *
 * @desc
 * A Router cannot be instantiated. A static Router is created when the module is loaded and can be
 * accessed using the method {@link oj.Router.rootInstance|rootInstance}.
 * A child router can be created using the method {@link oj.Router#createChildRouter|createChildRouter}.
 * @see oj.Router.rootInstance
 * @see oj.Router#createChildRouter
 * @constructor
 * @export
 */
oj.Router = function(key, parentRouter) {
   var router = this;

   /**
    * The state of the parent router when this router is current.
    * @private
    * @type {!string | undefined}
    */
   this._parentState = parentRouter ? parentRouter._stateId() : undefined;

   /**
    * Array of child router.
    * @private
    * @type {Array.<{name: string, router: oj.Router}>}
    */
   this._childRouters = [];

   /**
    * Used to store the bookmarkable data.
    * @private
    * @type {Object|undefined}
    */
   this._extra = undefined;

   /**
    * A Knockout observable that returns the id of the current state of the router.
    * @name oj.Router#stateId
    * @type {function(string=): string}
    * @readonly
    */
   this._stateId = ko.observable();

   /**
    * An array of all the possible states of the router. This array is null if the router is configured
    * using a callback.
    * @name oj.Router#states
    * @type {Array.<oj.RouterState>|null}
    * @readonly
    * @see oj.RouterState
    */
   this._states = null;

   /**
    * The state id of the default state for this router. The value is set when
    * {@link oj.Router#configure|configure} is called on the router and the state isDefault property is true.
    * If it is undefined, the router will start without a state selected.
    * This property is writable and can be used to set the default state id when the router is configured using a callback.
    * @name oj.Router#defaultStateId
    * @type {string|undefined}
    */
   this._defaultStateId = undefined;

   /**
    * A Knockout observable that returns the current {@link oj.RouterState|RouterState} if it is defined.
    * @name oj.Router#currentState
    * @type {function():(oj.RouterState|undefined)}
    * @readonly
    *
    * @example <caption>Hide a panel when the state of the router is not yet defined:</caption>
    *    &lt;div data-bind="if: router.currentState()"&gt;
    *       &lt;!-- content of the panel --&gt;
    *    &lt;/div&gt;
    */
   this._currentState = ko.pureComputed(function() {
         return ko.ignoreDependencies(router.stateFromIdCallback, router, [router._stateId()]);
      });

   /**
    * A Knockout observable that returns the value property of the current state.<br>
    * The state value property is the part of the state object that will be used in the application.
    * It is a shortcut for <code class="prettyprint">router.currentState().value;</code>
    * @name oj.Router#currentValue
    * @type {function()}
    * @readonly
    *
    * @example <caption>Display the content of the current state:</caption>
    * &lt;h2 id="pageContent" data-bind="text: router.currentValue"/&gt;
    */
   this._currentValue = ko.pureComputed(function() {
         var retValue;
         var currentState = ko.ignoreDependencies(router.stateFromIdCallback, router, [router._stateId()]);
         if (currentState) {
            retValue = currentState.value;
         }
         return retValue;
      });

   /**
    * An object to simplify integration between ojRouter and ojModule.
    * Use this object to configure an ojModule where the module name is the router
    * state. When the router changes state, ojModule will automatically load and
    * render the content of the module name specified in the {@link oj.RouterState#value|value}
    * of the current {@link oj.RouterState|RouterState} object.<br>
    * The object moduleConfig provide the following functionality to the ojModule binding:
    * <ol>
    *   <li>the name of ojModule binding will be the {@link oj.RouterState#value|value} property
    * of the current state of the router. If <code class="prettyprint">value</code> is not defined
    * or if it is not a string, the {@link oj.RouterState#id|id} property will be used</li>
    *   <li>The router object is passed as a parameter to the viewModel of the module</li>
    *   <li>The callback <code class="prettyprint">canExit</code> will be invoked on the viewModel.
    * If <code class="prettyprint">canExit</code> is not defined on the viewModel,
    * it will be invoked on the {@link oj.RouterState|RouterState}</li>
    * </ol>
    *
    * @name oj.Router#moduleConfig
    * @readonly
    *
    * @example <caption>Configure an ojModule binding with a router</caption>
    * &lt;!-- This is where your main page content will be loaded --&gt;
    * &lt;div id="mainContainer" data-bind="ojModule: router.moduleConfig"&gt;&lt;/div&gt;
    *
    * @example <caption>Creates a child router in the viewModel of a module</caption>
    * var viewModel = {
    *    initialize: function(params) {
    *       // Retrieve the parent router from the parameters
    *       var parentRouter = params.valueAccessor().params;
    *       // Create a child router for this viewModel
    *       this.router = parentRouter.createChildRouter('chapter')
    *          .configure({
    *             'preface':  { label: 'Preface',   value: storage['preface']  },
    *             'chapter1': { label: 'Chapter 1', value: storage['chapter1'] },
    *             'chapter2': { label: 'Chapter 2', value: storage['chapter2'] },
    *             'chapter3': { label: 'Chapter 3', value: storage['chapter3'] }
    *          });
    *       oj.Router.sync();
    *    },
    *
    *    // canExit callback will be called here
    *    canExit: function() {
    *       return (okToExit) ? true: false;
    *    }
    * };
    */
   this._moduleConfig = Object.create(null, {
      'name': {
         value: ko.pureComputed(function() {
            var retValue;
            var currentState = this.stateFromIdCallback(this._stateId());
            if (currentState) {
               retValue = currentState.value;
               if (!retValue || (typeof retValue !== 'string')) {
                  retValue = currentState.id;
               }
            }
            return retValue;
         }, router)
      },

      'params': { value: router },

      'lifecycleListener': {
         value: Object.create(null, {
            'attached': {
               value: function(params) {
                  // Retrieve router passed as a parameter to ojModule using params defined above.
                  var paramRouter = params['valueAccessor']()['params'];
                  var state = paramRouter['currentState']();
                  if (state) {
                     state.viewModel = params['viewModel'];
                  }
               }
            }
         })
      }
   });

   Object.defineProperties(this, {
      'parent': { value:
         /**
          * The parent router if it exits.
          * Only the 'root' router does not have a parent router.
          * @name oj.Router#parent
          * @member
          * @type {oj.Router|undefined}
          * @readonly
          */
         parentRouter, enumerable: true
      },
      'name': { value:
         /**
          * A string identifier of the router. It is required the name is unique within all the
          * sibling routers.
          * @name oj.Router#name
          * @member
          * @readonly
          * @type {!string}
          * @see oj.Router#createChildRouter
          */
         key,  enumerable: true
      }
   });

};

Object.defineProperties(oj.Router.prototype, {
   'states': { get: function () { return this._states; }, enumerable: true },
   'stateId': { get: function () { return this._stateId; }, enumerable: true },
   'currentState': { get: function () { return this._currentState; }, enumerable: true },
   'currentValue': { get: function () { return this._currentValue; }, enumerable: true },
   'defaultStateId': { get: function () { return this._defaultStateId; },
                       set: function(newValue) { this._defaultStateId = newValue; },
                       enumerable: true },
   'moduleConfig': { get: function () { return this._moduleConfig; }, enumerable: true }
});

/**
 * Create a child router with the given name.
 * @param {!string} name The unique name representing the router.
 * @return {oj.Router} the child router
 * @throws An error if a child router exist with the same name.
 * @export
 * @example <caption>Create a child router of the root:</caption>
 * router = oj.Router.rootInstance;
 * childRouter = router.createChildRouter('chapter');
 */
oj.Router.prototype.createChildRouter = function(name) {
   oj.Assert.assertString(name);
   // Trim the router name
   name = name.replace(oj.StringUtils._TRIM_ALL_RE, '');
   // Make sure it doesn't already exist.
   for (var i = 0; i < this._childRouters.length; i++) {
      var sr = this._childRouters[i].router;
      if (sr.name === name) {
         throw new Error('Invalid router name "' + name + '", it already exists.');
      }
      else if (sr._parentState === this._stateId()) {
         throw new Error('Cannot create more than one child router for parent state id "' + sr._parentState + '".');
      }
   }

   var childRouter = new oj.Router(name, this);

   this._childRouters.push({ name: name, router: childRouter });

   return childRouter;
};

/**
 * @private
 * @param {string} stateId The state id.
 * @return {oj.RouterState | undefined} The state object.
 */
oj.Router.prototype.stateFromIdCallback = function(stateId) {
   return getStateFromId(this, stateId);
};

/**
 * Update the state of a router with the new value.
 * @param {string=} newValue
 * @param {Object=} extra
 * @private
 */
oj.Router.prototype._update = function(newValue, extra) {
   var hasChanged = false;

   if (newValue && !this.stateFromIdCallback(newValue)) {
      oj.Logger.error('State id: "' + newValue + '" is not a valid state for ' + getRouterFullName(this));
   }
   else {
      oj.Logger.info('Updating state of ' + getRouterFullName(this) + ' to ' + newValue);

      // Execute exit on the current state
      _executeCallback(this, 'exit', this.stateFromIdCallback(this._stateId()));

      // Change the value of the stateId
      this._stateId(newValue);
      hasChanged = true;

      if (newValue) {
         // Execute enter on the new state
         _executeCallback(this, 'enter', this.stateFromIdCallback(newValue));
      }
   }

   return hasChanged;
};

/**
 * Configure the states of the router. The router can be configured in two ways:
 * <ul>
 *  <li>By describing all of the possible states that can be taken by this router.</li>
 *  <li>By providing a callback returning a {@link oj.RouterState|RouterState}
 *      object given a string state id.</li>
 * </ul>
 * This operation reset any previous configuration.<br>
 * This operation is chainable.
 * @param {!(Object.<string, {label: string, value, isDefault: boolean}> | function(string): (oj.RouterState | undefined)) } option
 * Either a callback or a dictionary of states.
 * <h6>A callback:</h6>
 * <h4 id="stateFromIdCallback" class="name">
 *    stateFromIdCallback
 *    <span class="signature">(stateId)</span>
 *    <span class="type-signature">
 *       → {<a href="oj.RouterState.html">oj.RouterState</a>|undefined}
 *    </span>
 * </h4>
 * A function returning a {@link oj.RouterState|RouterState} given a string state id.<br>
 * When using a callback, the {@link oj.Router.states|states} property will always be null since
 * states are defined on the fly.<br>See second example below.
 * <h6>A dictionary of states:</h6>
 * It is a dictionary in which the keys are state {@link oj.Router#id|id}s and values are objects
 * defining the state.<br>See first example below.
 * <h6>Key</h6>
 * <table class="params">
 *   <thead><tr>
 *     <th>Type</th>
 *     <th class="last">Description</th>
 *   </tr></thead>
 *   <tbody>
 *     <tr>
 *       <td class="type">
 *         <span class="param-type">string</span>
 *       </td>
 *       <td class="description last">the state id.
 *       See the RouterState <a href="oj.RouterState.html#id">id</a> property.</td>
 *    </tr>
 *   </tbody>
 * </table>
 * @param {string=} option.label the string for the link.
 * See the {@link oj.RouterState#label} property.
 * @param {*=} option.value the object associated with this state.
 * See the {@link oj.RouterState#value} property.
 * @param {boolean=} option.isDefault true if this state is the default.
 * See the Router {@link oj.Router#defaultStateId|defaultStateId} property.
 * @param {(function(): boolean) | (function(): Promise)=} option.canEnter A callback that either
 * returns a boolean or the Promise of a boolean. If the boolean is true the transition will continue.
 * The default value is a method that always returns true.
 * See the {@link oj.RouterState#canEnter} property.
 * @param {function()=} option.enter The callback executed when entering this state.
 * See the {@link oj.RouterState#enter} property.
 * @param {(function(): boolean)|(function(): Promise)=} option.canExit  A callback that either
 * returns a boolean or the Promise of a boolean. If the boolean is true the transition will continue.
 * The default value is a method that always returns true.
 * See the {@link oj.RouterState#canExit} property.
 * @param {function()=} option.exit The callback executed when exiting this state.
 * See the {@link oj.RouterState#exit} property.
 * @return {!oj.Router} the oj.Router object this method was called on.
 * @export
 * @see oj.RouterState
 * @example <caption>Add three states with id 'home', 'book' and 'tables':</caption>
 * router.configure({
 *    'home':   { label: 'Home',   value: 'homeContent', isDefault: true },
 *    'book':   { label: 'Book',   value: 'bookContent' },
 *    'tables': { label: 'Tables', value: 'tablesContent' }
 * });
 * @example <caption>Define a function to retrieve the state:</caption>
 * router.configure(function(stateId) {
 *    var state;
 *
 *    if (stateId) {
 *       var data = getStates(); // Return a array of RouterState keyed by stateId
 *       if (data) {
 *          state = data[stateId];
 *       }
 *    }
 *    return state;
 * });
 */
oj.Router.prototype.configure = function(option) {
   this._stateId(undefined);
   delete this._defaultStateId;

   if (typeof option === 'function') {
      this._states = null;
      // Override prototype
      this.stateFromIdCallback = option;
   }
   else {
      this._states = [];
      // Restore prototype
      delete this.stateFromIdCallback;

      Object.keys(option).forEach(function(key) {
         var rsOptions = option[key];
         this._states.push(new oj.RouterState(key, rsOptions, this));
         // Set the defaultStateId of the router from the isDefault property
         if ((typeof(rsOptions['isDefault']) === 'boolean') && rsOptions['isDefault']) {
            this._defaultStateId = key;
         }
      }, this);
   }

   return this;
};

/**
 * Return the {@link oj.RouterState} object which state id matches one of the possible states of the router.
 * @param {string} stateId - the id of the requested {@link oj.RouterState} object.
 * @return {oj.RouterState|undefined} the state object matching the id.
 * @export
 * @example <caption>Retrieve the RouterState for id 'home':</caption>
 * var homeState = router.getState('home');
 * var homeStateValue = homeState.value;
 */
oj.Router.prototype.getState = function(stateId) {
   return this.stateFromIdCallback(stateId);
};

/**
 * Go is used to transition to a new state using a state id.
 * If the state id is undefined, go to the default state of the router.<br>
 * A {@link oj.Router.transitionedToState|transitionedToState} signal is dispatched when the
 * state transition has completed.
 * @param {string=} stateId The id of the state to transition to.
 * @return {!Promise} A Promise that resolves when the router is done with
 * the state transition.<br>
 * When the promise is fullfilled, the parameter value is an object with the property
 * <code class="prettyprint">hasChanged</code>.<br>
 * The value of <code class="prettyprint">hasChanged</code> is:
 * <ul>
 *   <li>true: If the router state changed.</li>
 * </ul>
 * When the Promise is rejected, the parameter value is:
 * <ul>
 *   <li>An Error object stipulating the reason for the rejection when an error
 * occurred during the resolution.</li>
 * </ul>
 * @export
 * @example <caption>Transition a router to the state id 'home':</caption>
 * router.go('home');
 * @example <caption>Transition a router to its default state and handle errors:</caption>
 * router.go().then(
 *    function(result) {
 *       if (result.hasChanged) {
 *          oj.Logger.info('Router transitioned to default state.');
 *       }
 *       else {
 *          oj.Logger.info('No transition, Router was already in default state.');
 *       }
 *    },
 *    function(error) {
 *       oj.Logger.error('Transition to default state failed: ' + error.message);
 *    }
 * );
 */
oj.Router.prototype.go = function(stateId) {
   var state;
   var useDefault = true;
   if (stateId) {
      if (typeof stateId === 'string') {
         if (stateId.length > 0) {
            state = this.stateFromIdCallback(stateId);
            if (!state) {
               dispatchTransitionedToState(false);
               return Promise.reject(new Error('State id "' + stateId + '" does not exist.'));
            }

            useDefault = false;
            oj.Logger.info('Going to state ' + stateId + ' on router ' + getRouterFullName(this));
         }
      }
      else {
         dispatchTransitionedToState(false);
         return Promise.reject(new Error('Invalid object type for state id.'));
      }
   }

   if (useDefault) {
      if (this._defaultStateId) {
         state = this.stateFromIdCallback(this._defaultStateId);
         oj.Logger.info('Going to default state ' + state.id + ' on router ' + getRouterFullName(this));
      }
      else {
         // No default defined, so nowhere to go.
         oj.Logger.info('Undefined state id with no default id on router ' + getRouterFullName(this));
         dispatchTransitionedToState(false);
         return Promise.resolve({ 'hasChanged': false });
      }
   }

   var allStates = _buildState(this, 0, state);
   var newUrl = _urlAdapter.buildUrlFromStates(allStates);
   var shortUrl = '/' + _urlAdapter.cleanUrl(getShortUrl()).replace(_thisPage, '');

   var _changeState = function(canExit) {
      if (canExit) {
         // Remove first '/' if exist before parsing
         //TODO: Check if removing / is needed.
         return parseAndUpdate(newUrl.replace(/^\//, '')).
            then(function(params) {
               if (params['hasChanged']) {
                  var fullUrl = _ojBaseUrl + newUrl;
                  oj.Logger.info('Changing URL to ' + fullUrl);
                  history.pushState(null, '', fullUrl);
               }
               dispatchTransitionedToState(params['hasChanged']);
               return params;
            });
      }
      else {
         dispatchTransitionedToState(false);
         return Promise.resolve({ 'hasChanged': false });
      }
   };

   // Do not do anything if the new URL is the same.
   // This compare URLs without the bookmarkable data.
   // TODO: better match for empty page "" vs. "/" vs. "index.html"
   // TODO: match query param in any order
   if (_urlAdapter.cleanUrl(newUrl) !== shortUrl) {
      oj.Logger.info('New URL is different.');
      return _canExit(this).then(_changeState);
   }
   else {
      dispatchTransitionedToState(false);
      return Promise.resolve({ 'hasChanged': false });
   }
};

/**
 * Store additional data for this router that will be added in a compressed form to the URL
 * so it can be bookmarked. When calling this method, the URL is immediately modified.
 * @param {!Object} data the data to store with this state.
 * @throws An error if the bookmarkable state is too big.
 * @export
 * @example <caption>Store a color in the URL:</caption>
 * try {
 *    var color = '#99CCFF';
 *    router.store(color);
 *    $('#chapter').css('background', color);
 * }
 * catch (error) {
 *    oj.Logger.error('Error while storing data: ' + error.message);
 * }
 */
oj.Router.prototype.store = function(data, sep) {
   this._extra = data;

   var extraState = {},
       router = this;

   // Walk the parent routers
   while (router) {
      if (router._extra) {
         extraState[router.name] = router._extra;
      }
      router = router.parent;
   }

   // and the children routers
   router = this;
   var nextLevel;
   while (router) {
      for (var i = 0; i < router._childRouters.length; i++) {
         var sr = router._childRouters[i].router;
         if (router._stateId() && router._stateId() === sr._parentState) {
            if (sr._extra) {
               extraState[sr.name] = sr._extra;
            }
            nextLevel = sr;
            break;
         }
      }
      router = nextLevel;
      nextLevel = undefined;
   }

   var url = _ojBaseUrl + '/' + _urlAdapter.cleanUrl(getShortUrl());
   url = addStateParam(url, extraState);

   history.replaceState(null, '', url);
};

/**
 * Retrieve the additional data stored in the URL.
 * @return {*} the content stored in the URL
 * @export
 * @example <caption>Retrieve the value of the background color stored in the URL:</caption>
 *  oj.Router.sync().then(
 *     function() {
 *        var color = viewModel.router.retrieve();
 *        if (color) {
 *           $('#chapter').css('background', color);
 *        }
 *     },
 *     function(error) {
 *        oj.Logger.error('Error during sync: ' + error.message);
 *     }
 *  );
 */
oj.Router.prototype.retrieve = function() {
   return this._extra;
};

/**
 * Dispose the router.<br>
 * Erase all states of this router and its children.
 * Remove itself from parent router child list.<br>
 * When this method is invoked on the {@link oj.Router.rootInstance|rootInstance}, it
 * also remove internal event listeners and re-initialize the
 * {@link oj.Router.defaults|defaults}.
 * @export
 */
oj.Router.prototype.dispose = function() {
   // Depth first
   while (this._childRouters.length > 0) {
      this._childRouters[0].router.dispose();
   }

   // If this is the root, clean up statics
   if (!this['parent']) {
      _ojBaseUrl = '';
      _basePathName = '';
      _urlAdapter = {};

      window.removeEventListener('popstate', handlePopState);
      oj.Router['transitionedToState'].removeAll();
      oj.Router.initialized = false;
   }
   // Remove itself from parent children array.
   else {
      var parentChildren = this['parent']._childRouters;
      for (var i = 0; i < parentChildren.length; i++) {
         if (parentChildren[i].router.name === this.name) {
            parentChildren.splice(i, 1);
            break;
         }
      }

      delete this._parentState;
   }

   this._states = null;
   delete this._defaultStateId;
   delete this._extra;
};

/**
 * Create the instance of the root router.
 * @type {oj.Router}
 */
var rootRouter = new oj.Router('root', undefined);

Object.defineProperties(oj.Router, {
   'rootInstance': { value:
      /**
       * The static instance of {@link oj.Router} representing the unique root router.
       * This instance is created at the time the module is loaded.<br>
       * All other routers will be children of this object.
       * The name property of this router is 'root'. The parent property is null.
       * @name oj.Router.rootInstance
       * @type oj.Router
       * @readonly
       * @example <caption>Retrieve the root router and configure it:</caption>
       * var router = oj.Router.rootInstance;
       * router.configure({
       *    'home':   { label: 'Home',   value: 'homeContent', isDefault: true },
       *    'book':   { label: 'Book',   value: 'bookContent' },
       *    'tables': { label: 'Tables', value: 'tablesContent' }
       * });
       */
      rootRouter, enumerable: true
   },
   'transitionedToState': { value:
      /**
       * A {@link http://millermedeiros.github.io/js-signals/|signal} dispatched when the state transition
       * has completed either by successfully changing the state or cancelling.<br>
       * The parameter of the event handler is a boolean true when the state has changed.<br>
       * This is usefull when some post processing is needed or to test the result after a state change.
       * @name oj.Router.transitionedToState
       * @readonly
       * @example <caption>Creates promise that resolve when the state transition is complete.</caption>
       * var promise = new Promise(function(resolve, reject) {
       *       oj.Router.transitionedToState.add(function(result) {
       *          if (result.hasChanged) {
       *             oj.Logger.info('The state has changed');
       *          }
       *          resolve();
       *       });
       */
      new signals.Signal, enumerable: true
   }
});

/**
 * A set of Router defaults properties.<br>
 * <h6>Warning: </h6>Defaults can not be changed after the first call to {@link oj.Router.sync|sync()}
 * has been made. To re-initialize the router, you need to call {@link oj.Router#dispose|dispose()} on
 * the {@link oj.Router.rootInstance|rootInstance} first then change the defaults.
 * @property {Object} urlAdapter an instance of the url adapter to use.
 * Possible values are an instance of {@link oj.Router.urlPathAdapter} or {@link oj.Router.urlParamAdapter}.
 * @property {string} baseUrl the base URL to be used for relative URL addresses. If not defined,
 * it is the current URL without the document.
 * For example <code class="prettyprint">http://www.example.com/myApp</code>. This is needed
 * by the Router to properly parse the URL.
 * @export
 * @example <caption>Change the default URL adapter to the urlParamAdapter</caption>
 * oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
 * @example <caption>Change the base URL</caption>
 * oj.Router.defaults['baseUrl'] = 'http://www.example.com/myApp';
 */
oj.Router.defaults = {};

Object.defineProperties(oj.Router.defaults, {
   'urlAdapter': {
      get: function() {
         if (!_urlAdapter) {
            _urlAdapter = new oj.Router.urlPathAdapter();
         }
         return _urlAdapter;
      },
      set: function(urlAdapter) {
         if (oj.Router.initialized) {
            throw new Error('Incorrect operation. Cannot change URL adapter after calling sync().');
         }
         _urlAdapter = urlAdapter
      },
      enumerable: true,
      readonly: false
   },
   'baseUrl': {
      get: function() {
         if (!_ojBaseUrl) {
            _ojBaseUrl = getBaseUrl();
            _basePathName = removeLastSegment(window.location.pathname);
         }
         return _ojBaseUrl;
      },
      set: function(baseUrl) {
         if (oj.Router.initialized) {
            throw new Error('Incorrect operation. Cannot change base URL after calling sync().');
         }
         // Assumption is _ojBaseUrl does not have a trailing /
         _ojBaseUrl = baseUrl.replace(/\/$/, '');
         _basePathName = _ojBaseUrl.replace(window.location.protocol + '//' + window.location.host, '');
      },
      enumerable: true,
      readonly: false
   }
});

/**
 * Synchronise the router with the current URL. The process parse the URL and
 * <ol>
 *   <li>transition the router to a new state matching the URL.</li>
 *   <li>initialize the bookmarkable storage.</li>
 *   <li>dispatch a {@link oj.Router.transitionedToState|transitionedToState} signal.</li>
 * </ol>
 * It has to be called after a router is configured, to synchronise the URL with the
 * router state.<br>
 * If a default state is defined, the router will transition to it, otherwise no transition will
 * occur and the router will be in an undefined state.<br>
 * Because the process of transitioning between two states invokes callbacks (canExit, canEnter)
 * that are promises, this function also returns a promise.
 * @return {!Promise.<{hasChanged: boolean}>} A Promise that resolves when the router is done with
 * the state transition.<br>
 * When the Promise is fullfilled, the parameter value is an object with the property
 * <code class="prettyprint">hasChanged</code>.<br>
 * The value of <code class="prettyprint">hasChanged</code> is:
 * <ul>
 *   <li>true: If the router state changed.</li>
 * </ul>
 * When the Promise is rejected, the parameter value is:
 * <ul>
 *   <li>An Error object stipulating the reason for the rejection when an error
 * occurred during the resolution.</li>
 * </ul>
 * @export
 * @example <caption>Start the root instance</caption>
 * var router = oj.Router.rootInstance;
 * // Add three states to the router with id 'home', 'book' and 'tables
 * router.configure({
 *    'home':   { label: 'Home',   value: 'homeContent', isDefault: true },
 *    'book':   { label: 'Book',   value: 'bookContent' },
 *    'tables': { label: 'Tables', value: 'tablesContent' }
 * });
 *
 * var viewModel = {
 *    router: router
 * };
 *
 * oj.Router.sync().then(
 *    function() {
 *       ko.applyBindings(viewModel);
 *       $('#globalBody').show();
 *    },
 *    function(error) {
 *       oj.Logger.error('Error when starting the router: ' + error.message);
 *    }
 * );
 * @example <caption>Synchronise a newly created child Router and retrieve the bookmarkable state</caption>
 *  oj.Router.sync().then(
 *     function() {
 *        var color = viewModel.router.retrieve();
 *        if (color) {
 *           $('#chapter').css('background', color);
 *        }
 *     },
 *     function(error) {
 *        oj.Logger.error('Error during sync: ' + error.message);
 *     }
 *  );
 *
 */
oj.Router.sync = function() {
   if (!oj.Router.initialized) {
      // Initialize the default values if needed.
      if (!_urlAdapter) {
         _urlAdapter = new oj.Router.urlPathAdapter();
      }
      if (!_ojBaseUrl) {
         _ojBaseUrl = getBaseUrl();
         _basePathName = removeLastSegment(window.location.pathname);
      }

      /**
       * Listen to URL changes caused by back/forward button
       * using the popstate event. Call handlePopState to dispatch the change of URL.
       */
      window.addEventListener('popstate', handlePopState, false);

      oj.Logger.info('Initializing rootInstance.');
      oj.Logger.info('Base URL is ' + _ojBaseUrl);
      oj.Logger.info('This page is ' + _thisPage);
      oj.Logger.info('Current URL is ' + window.location.href);

      oj.Router.initialized = true;
   }

   return parseAndUpdate(getShortUrl()).
      then(function(params) {
         dispatchTransitionedToState(params['hasChanged']);
         return params;
      });
};

/*------------------------------------------------------------------------------
  URL Apdaters section
  ------------------------------------------------------------------------------*/

/**
 *
 * @class
 * @since 1.1.0
 * @classdesc Url adapter used by the {@link oj.Router} to manage URL in the form of
 * <code class="prettyprint">/book/chapter2</code>. The UrlPathAdapter is the default
 * adapter used by the {@link oj.Router|router}.<br> There are two available adapters,
 * this one and the {@link oj.Router.urlParamAdapter|urlParamAdapter}.
 * @see oj.Router.urlParamAdapter
 * @see oj.Router.start
 * @constructor
 * @export
 */
oj.Router.urlPathAdapter = function () {
   /**
    * Construct an array of changes where each item is an object made of a router and
    * the new state for it.
    * @ignore
    * @param {string} url
    */
   this.parse = function(url) {
      var index = 0,
          router = rootRouter,
          segments = url.split('/'),
          changes = [];

      do {
         var value = segments[index++];
         if (value) {
            if (value.length === 0 || /\.html$/i.test(value)) {
               value = undefined;
            }
         }

         value = value || router._defaultStateId;
         changes.push({ value: value, router: router });

         router = getChildRouter(router, value);
      } while (router);

      return changes;
   };

   /**
    * Given an ordered array of states, build the URL representing all
    * the states.
    * Always starts with a '/': /index.html, /book/chapter2
    * @ignore
    * @param {Array.<{router:oj.Router, stateId:string}>} newStates
    * @return {!string} the URL representing the states
    */
   this.buildUrlFromStates = function(newStates) {
      var newUrl = '',
          extraState = {}; // Compound object of all extra states

      // Build the new URL
      newStates.forEach(function(ns) {
         if (ns.stateId) {
            newUrl += '/' + ns.stateId;
         }
         if (ns.router.extra) {
            extraState[ns.router.name] = ns.router._extra;
         }
      });

      // No page or this page are aliases.
      if (newUrl === '') {
         //TODO: Remove _thisPage
         newUrl = '/' + _thisPage;
      }

      try {
         newUrl = addStateParam(newUrl, extraState);
      }
      catch (err) {
         oj.Logger.error('Error while building URL: ' + err);
      }

      return newUrl;
   };

   /**
    * Return the significant part of an URL.
    * @ignore
    * @param {!string} url
    * @return {!string} the short URL
    */
   this.cleanUrl = function(url) {
      return url.split('?')[0];
   };

   /**
    * Return extra query param
    * @ignore
    * @param {string} url
    * @return {!Object.<string, string>}
    */
   this.getQueryParam = function(url) {
      var queryIndex = url.indexOf('?');
      var queryString = null;

      if (queryIndex != -1) {
         queryString = url.substr(queryIndex + 1);
      }

      return parseQueryParam(queryString);
   };
};

/**
 * @class
 * @since 1.1.0
 * @classdesc Url adapter used by the {@link oj.Router} to manage URL in the form of
 * <code class="prettyprint">/index.html?book=chapter2</code>. There are two available
 * adapters, this one and the {@link oj.Router.urlPathAdapter|urlPathAdapter}.
 * @see oj.Router.urlPathAdapter
 * @see oj.Router.defaults
 * @constructor
 * @export
 * @example <caption>Change the default URL adapter to urlParamAdapter instead of urlPathAdapter:</caption>
 * oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
 */
oj.Router.urlParamAdapter = function () {
   /**
    * Construct an array of changes where each item is an object made of a router and
    * the new state for it.
    * @ignore
    * @param {string} url
    */
   this.parse = function(url) {
      var params = this.getQueryParam(url),
          router = rootRouter,
          changes = [];

      do {
         var value = params[router.name];
         if (value) {
            value = value[0];
            delete params[router.name];
         }

         value = value || router._defaultStateId;
         changes.push({ value: value, router: router });

         router = getChildRouter(router, value);
      } while (router);

      return changes;
   };

   /**
    * Given an ordered array of states, build the URL representing all
    * the states.
    * Always starts with a '/': /index.html, /book/chapter2
    * @ignore
    * @param {Array.<{router:oj.Router, stateId:string}>} newStates
    * @return {!string} the URL representing the states
    * @throws An error if bookmarkable state is too big.
    */
   this.buildUrlFromStates = function(newStates) {
      var newUrl = '/' + _thisPage,
          extraState = {}, // Compound object of all extra states
          sep = '?';

      // Build the new URL
      newStates.forEach(function(ns) {
         if (ns.stateId) {
            newUrl += sep + ns.router.name + '=' + ns.stateId;
            sep = '&'; // From now on, use this separator
         }
         if (ns.router._extra) {
            extraState[ns.router.name] = ns.router._extra;
         }
      });

      try {
         newUrl = addStateParam(newUrl, extraState);
      }
      catch (err) {
         oj.Logger.error('Error while building URL: ' + err);
      }

      return newUrl;
   };

   /**
    * Return the significant part of an URL.
    * @ignore
    * @param {!string} url
    * @return {!string} the short URL
    */
   this.cleanUrl = function(url) {
      var index = url.indexOf(_ROUTER_PARAM);
      if (index != -1) {
         return url.substr(0, index - 1);
      }
      return url;
   };

   /**
    * Return extra query param
    * @ignore
    * @param {string} url
    * @return {!Object.<string, string>}
    */
   this.getQueryParam = function(url) {
      var queryIndex = url.indexOf('?');
      var queryString = null;
      var params = {};

      if (queryIndex != -1) {
         queryString = url.substr(queryIndex + 1);
         params = parseQueryParam(queryString);
      }

      //TODO: Need to remove state parameter from the list.
      return params;
   };


};

return rootRouter;

})();
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true*/
/*global oj, Promise */

/**
 * The RouterState module.
 */

// Wrap in a IIFE to prevents the possiblity of collision in a non-AMD scenario.
(function() {
"use strict";
   /**
    * @class
    * @since 1.1.0
    * @classdesc
    * Object representing a state of the router.
    * @desc
    * It is the type of the {@link oj.Router#currentState|currentState} property and type of
    * the value returned by {@link oj.Router#getState|getState(String)}.
    * @param {!string} id the state id.
    * See the {@link oj.RouterState#id} property.
    * @param {!Object=} options an object defining the state.
    * @param {string=} options.label the string to be displayed in the command component.
    * See the {@link oj.RouterState#label} property.
    * @param {*=} options.value the object associated with this state.
    * See the {@link oj.RouterState#value} property.
    * @param {boolean=} options.isDefault true if this state is the default.
    * See the {@link oj.Router#defaultStateId|defaultStateId} property.
    * @param {(function(): boolean) | (function(): Promise)=} options.canEnter A callback that either
    * returns a boolean or the Promise of a boolean. If the boolean is true the transition will continue.
    * The default value is a method that always returns true.
    * See the {@link oj.RouterState#canEnter} property.
    * @param {function()=} options.enter The callback executed when entering this state.
    * See the {@link oj.RouterState#enter} property.
    * @param {(function(): boolean)|(function(): Promise)=} options.canExit  A callback that either
    * returns a boolean or the Promise of a boolean. If the boolean is true the transition will continue.
    * The default value is a method that always returns true.
    * See the {@link oj.RouterState#canExit} property.
    * @param {function()=} options.exit The callback executed when exiting this state.
    * See the {@link oj.RouterState#canExit} property.
    * @param {oj.Router=} router The router this state belongs to. If undefined, the method
    * {@link oj.RouterState#go|go} and {@link oj.RouterState#isCurrent|isCurrent} will not work.
    * @constructor
    * @export
    */
   oj.RouterState = function (id, options, router) {
      options = options || {};
      oj.Assert.assertString(id);

      // Encode the id since it will be part of the URL
      // We cannot have duplicate because the format of the object parameter
      // doesn't allow it.
      id = encodeURIComponent(id.replace(oj.StringUtils._TRIM_ALL_RE, ''));

      if (options['canEnter']) {
         oj.Assert.assertFunctionOrNull(options['canEnter']);
      }

      if (options['enter']) {
         oj.Assert.assertFunctionOrNull(options['enter']);
      }

      if (options['canExit']) {
         oj.Assert.assertFunctionOrNull(options['canExit']);
      }

      if (options['exit']) {
         oj.Assert.assertFunctionOrNull(options['exit']);
      }

      /**
       * @private
       * @type {oj.Router|undefined}
       *
       */
      this._router = router;

      /**
       * This property is used when the router states are ojModule names.
       * When the router transition to this state, it will attempt to execute the callbacks canExit, canEnter,
       * enter and exit on the viewModel object first. If the callback is not defined on the viewModel, the
       * router will attempt to execute the callback on the {@link oj.RouterState|RouterState}.
       * @private
       * @type {Object|undefined}
       */
      this.viewModel = undefined;

      Object.defineProperties(this, {
         'id': { value:
            /**
             * The id of this state.<br>
             * It uniquely identify a state object in a router. The id property can be used as the
             * attribute id of a navigation component like link or button.
             * @name oj.RouterState#id
             * @readonly
             * @type {!string}
             * @example <caption>Use the state id property for the attribute id of anchor tags in a list:</caption>
             * &lt;ul id="foreachMenu" data-bind="foreach: router.states">
             *   &lt;li>
             *     &lt;a data-bind="text: label, css: {'active': isCurrent()},
             *                   attr: {id: id}, click: go"> &lt;/a>
             *   &lt;/li>
             * &lt;/ul>
             */
            id, enumerable: true
         },
         'value': { value:
            /**
             * The value associated with this state. When this state is the current state of the
             * router, it is the value returned by the observable {@link oj.Router#currentValue}.
             * @name oj.RouterState#value
             * @type {*}
             */
            (options['value']), writable: true, enumerable: true
         },
         'label': { value:
            /**
             * The string to be used for the navigation component that will transition to this state.
             * When building the navigation command on the
             * @name oj.RouterState#label
             * @type {string|undefined}
             * @example <caption>Use the label property for the text of anchor tags in a list:</caption>
             * &lt;ul id="foreachMenu" data-bind="foreach: router.states">
             *   &lt;li>
             *     &lt;a data-bind="text: label, css: {'active': isCurrent()},
             *                   attr: {id: id}, click: go"> &lt;/a>
             *   &lt;/li>
             * &lt;/ul>
             */
            (options['label']), writable: true, enumerable: true
         },
         'canEnter': { value:
            /**
             * A callback that either returns a boolean or the Promise of a boolean.
             * When defined, this callback is executed before entering this state. If the boolean
             * is true the transition will continue, otherwise the state is not entered and the
             * current state of the router does not change.
             * The default value is a method that always returns true.
             * @name oj.RouterState#canEnter
             * @type {(function(): boolean)|(function(): Promise)|undefined}
             */
             (options['canEnter']), writable: true, enumerable: true
         },
         'enter': { value:
            /**
             * The enter callback.
             * This callback is executed when the router enter this state.
             * @name oj.RouterState#enter
             * @type {function()|undefined}
             */
             (options['enter']), writable: true, enumerable: true
         },
         'canExit': { value:
            /**
             * A callback that either returns a boolean or the Promise of a boolean.
             * When defined, this callback is executed before exiting this state. If the boolean
             * is true the transition will continue, otherwise the state is not exited and the
             * current state of the router does not change.
             * The default value is a method that always returns true.
             * @name oj.RouterState#canExit
             * @type {(function(): boolean)|(function(): Promise)|undefined}
             */
             (options['canExit']), writable: true, enumerable: true
         },
         'exit': { value:
            /**
             * The exit callback.
             * This callback is executed when the router exit this state.
             * @name oj.RouterState#exit
             * @type {function()|undefined}
             */
             (options['exit']), writable: true, enumerable: true
         }
      });
   };

   /**
    * Transition the router to this state.
    * This is a convenience method used as the event handler for a Knockout click binding on
    * a button or <code class="prettyprint">a</code> tag.<br>
    * A {@link oj.Router.transitionedToState|transitionedToState} signal is dispatched when the
    * state transition has completed.
    * @return {!Promise} A Promise that resolves when the router is done
    * with the state transition.<br>
    * When the promise is fullfilled, the parameter value is an object with the property
    * <code class="prettyprint">hasChanged</code>.<br>
    * The value of <code class="prettyprint">hasChanged</code> is:
    * <ul>
    *   <li>true: If the router state changed.</li>
    * </ul>
    * When the Promise is rejected, the parameter value is:
    * <ul>
    *   <li>An Error object stipulating the reason for the rejection when an error
    * occurred during the resolution.</li>
    * </ul>
    * @export
    * @example <caption>Use the go function as the handler for a click binding:</caption>
    * &lt;ul id="foreachMenu" data-bind="foreach: router.states">
    *   &lt;li>
    *     &lt;a data-bind="text: label, css: {'active': isCurrent()},
    *                   attr: {id: id}, click: go"> &lt;/a>
    *   &lt;/li>
    * &lt;/ul>
    */
   oj.RouterState.prototype.go = function() {
      if (!this._router) {
         oj.Router['transitionedToState'].dispatch({ 'hasChanged': false });
         return Promise.reject(new Error('Router is not defined for this RouterState object.'));
      }
      return this._router.go(this.id);
   };

   /**
    * Determine if the router current state is this state.
    * This method is typically used by elements in the markup to show the appropriate selection value.
    * @return {boolean} true if this state is the current router state.
    * @throws An error if an owning router was not specified when the state was
    * created.
    * @export
    * @example <caption>Use the is function to change the css of the state links:</caption>
    * &lt;ul id="foreachMenu" data-bind="foreach: router.states">
    *   &lt;li>
    *     &lt;a data-bind="text: label, css: {'active': isCurrent()},
    *                   attr: {id: id}, click: go"> &lt;/a>
    *   &lt;/li>
    * &lt;/ul>
    */
   oj.RouterState.prototype.isCurrent = function() {
      if (!this._router) {
         throw new Error('Router is not defined for this RouterState object.');
      }
      return this._router._stateId() === this.id;
   };

}());
});
