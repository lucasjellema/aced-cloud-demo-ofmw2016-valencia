/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'hammerjs', 'promise', 'ojs/ojjquery-hammer', 'ojs/ojcomponentcore'],
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        * @param {Object} Hammer
        */
       function(oj, $, Hammer)
 
{

/**
 * Copyright (c) 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class Utility methods for offcanvas.
 * @since 1.1.0
 * @export
 *
 * @classdesc
 * This class provides functions used for controlling offcanvas regions.  Offcanvas regions can be used in either static (simply displaying and hiding in response to user interactions) or responsive (using media queries to dynamically move application content between the main viewport and offcanvas regions) contexts.  The open, close and toggle methods can be used to directly control the display of an offcanvas region in both the static and responsive cases.  The setupResponsive and tearDownResponsive methods are only needed for responsive usages and are used to add and remove listeners that use the specified media queries to configure the offcanvas in response to changes in browser size.
 *
 * <ul>
 * <li>open: show the offcanvas by sliding it into the viewport.</li>
 * <li>close: hide the offcanvas by sliding it out of the viewport.</li>
 * <li>toggle: toggle the offcanvas in or out of the viewport.</li>
 * <li>setupResponsive: setup offcanvas for the responsive layout.</li>
 * <li>tearDownResponsive: remove listeners that were added in setupResponsive.</li><br>
 * </ul>
 *
 * <h3 id="styling-section">
 *   Styling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#styling-section"></a>
 * </h3>
 *
 *
 * <table class="generic-table styling-table">
 *   <thead>
 *     <tr>
 *       <th>Class(es)</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>oj-offcanvas-outer-wrapper</td>
 *       <td>Applied to the outer most element of the offcanvas.</td>
 *     </tr>
 *     <tr>
 *       <td>oj-offcanvas-inner-push-wrapper<br>
 *       <td>Applied to the inner wrapper of the offcanvas in push mode.</td>
 *     </tr>
 *     <tr>
 *       <td>oj-offcanvas-start<br>
 *       <td>Applied to the offcanvas on the start edge.</td>
 *     </tr>
 *     <tr>
 *       <td>oj-offcanvas-end<br>
 *       <td>Applied to the offcanvas on the end edge.</td>
 *     </tr>
 *     <tr>
 *       <td>oj-offcanvas-top<br>
 *       <td>Applied to the offcanvas on the top edge.</td>
 *     </tr>
 *     <tr>
 *       <td>oj-offcanvas-bottom<br>
 *       <td>Applied to the offcanvas on the bottom edge.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 */
oj.OffcanvasUtils = {};

oj.OffcanvasUtils._DATA_EDGE_KEY = "oj-offcanvasEdge";
oj.OffcanvasUtils._DATA_OFFCANVAS_KEY = "oj-offcanvas";
oj.OffcanvasUtils._DATA_MEDIA_QUERY_KEY = "oj-mediaQueryListener";
oj.OffcanvasUtils._DATA_HAMMER_KEY = "oj-offcanvasHammer";


oj.OffcanvasUtils._shiftSelector =
{
  "start": "oj-offcanvas-shift-start",
  "end": "oj-offcanvas-shift-end",
  "top": "oj-offcanvas-shift-down",
  "bottom": "oj-offcanvas-shift-up"
};

oj.OffcanvasUtils._drawerSelector =
{
  "start": "oj-offcanvas-start",
  "end": "oj-offcanvas-end",
  "top": "oj-offcanvas-top",
  "bottom": "oj-offcanvas-bottom"
};

//Returns whether the drawer is currently open.
oj.OffcanvasUtils._isOpen = function(drawer)
{
  return drawer.hasClass("oj-offcanvas-open");
};

oj.OffcanvasUtils._getOuterWrapper = function(drawer)
{
  return drawer.closest(".oj-offcanvas-outer-wrapper");
};

//selector
//displayMode
oj.OffcanvasUtils._getAnimateWrapper = function(offcanvas)
{
  var wrapper = $(offcanvas["selector"]);
  return (offcanvas["displayMode"] === "push") ? wrapper.parent() : wrapper;
};


oj.OffcanvasUtils._getShiftSelector = function(edge)
{
  var selector = oj.OffcanvasUtils._shiftSelector[edge];
  if (! selector)
    throw "Invalid edge: " + edge;

  return selector;
};

oj.OffcanvasUtils._isRTL = function()
{
  return oj.DomUtils.getReadingDirection() === "rtl";
};

oj.OffcanvasUtils._setTransform = function(wrapper, transform)
{
  wrapper.css({
    "-webkit-transform": transform,
    "-ms-transform": transform,
    "transform": transform
    });
};

oj.OffcanvasUtils._setTranslationX = function(wrapper, edge, width)
{
  var minus = (edge === "end");

  if (oj.OffcanvasUtils._isRTL())
    minus = ! minus;

  //set transform
  oj.OffcanvasUtils._setTransform(wrapper, "translate3d(" + (minus? "-" : "")  + width + ", 0, 0)");

};

oj.OffcanvasUtils._setTranslationY = function(wrapper, edge, height)
{
  var minus = (edge === "bottom") ? "-" : "";
  oj.OffcanvasUtils._setTransform(wrapper, "translate3d(0, " + minus + height + ", 0)");

};

oj.OffcanvasUtils._saveEdge = function(offcanvas)
{
  var edge = offcanvas["edge"];
  var drawer = $(offcanvas["selector"]);

  if (! edge || ! edge.length)
  {
    if (drawer.hasClass("oj-offcanvas-start"))
      edge = "start";
    else if (drawer.hasClass("oj-offcanvas-end"))
      edge = "end";
    else if (drawer.hasClass("oj-offcanvas-top"))
      edge = "top";
    else if (drawer.hasClass("oj-offcanvas-bottom"))
      edge = "bottom";
    //default to start edge
    else
      edge = "start";
  }
  $.data(drawer[0], oj.OffcanvasUtils._DATA_EDGE_KEY, edge);

  return edge;
};

oj.OffcanvasUtils._getEdge = function(drawer)
{
  return $.data(drawer[0], oj.OffcanvasUtils._DATA_EDGE_KEY);
};


//This method is called right before open and after close animation
//selector
//edge
//displayMode
oj.OffcanvasUtils._toggleClass = function(offcanvas, wrapper, isOpen)
{
  var displayMode = offcanvas["displayMode"],
      drawer = $(offcanvas["selector"]),

      drawerClass = "oj-offcanvas-open",
      wrapperClass = (displayMode === "overlay") ?
                      "oj-offcanvas-transition oj-offcanvas-overlay" :
                      "oj-offcanvas-transition";

  //toggle offcanvas and inner wrapper classes
  if (isOpen)
  {
    var oTabIndex = drawer.attr("tabIndex");
    if (oTabIndex !== undefined)
    {
      //save the original tabIndex
      offcanvas["tabIndex"] = oTabIndex;
    }

    // set tabIndex so the div is focusable
    drawer.addClass(drawerClass)
          .attr("tabIndex", "-1");
    wrapper.addClass(wrapperClass);
  }
  else
  {
    //restore the original tabIndex
    var oTabIndex = offcanvas["tabIndex"];
    if (oTabIndex === undefined)
      drawer.removeAttr("tabIndex");
    else
      drawer.attr("tabIndex", oTabIndex);

    drawer.removeClass(drawerClass);
    wrapper.removeClass(wrapperClass);
  }

};

oj.OffcanvasUtils._isAutoDismiss = function(offcanvas)
{
  return offcanvas["autoDismiss"] != "none";
};

oj.OffcanvasUtils._onTransitionEnd = function(wrapper, handler)
{
  var endEvents = "transitionend webkitTransitionEnd otransitionend oTransitionEnd";
  var listener =
    function ()
    {
      handler();

      //remove handler
      wrapper.off(endEvents, listener);
    };

  //add transition end listener
  wrapper.on(endEvents, listener);

};

//check offcanvas.autoDismiss
//update offcanvas.dismisHandler
oj.OffcanvasUtils._registerCloseHandler = function(offcanvas)
{
  //unregister the old handler if exists
  oj.OffcanvasUtils._unregisterCloseHandler(offcanvas);

  if (oj.OffcanvasUtils._isAutoDismiss(offcanvas))
  {
    var drawer = $(offcanvas["selector"]);

    //save dismisHandler
    var dismisHandler = offcanvas["dismisHandler"] =
      function(event)
      {
        var target = event.target;

        // Ignore mouse events on the scrollbar. FF and Chrome, raises focus events on the
        // scroll container too.
        if (oj.DomUtils.isChromeEvent(event) ||
            ("focus" === event.type && !$(target).is(":focusable")))
          return;

        // if event target is not the offcanvas dom subtrees, dismiss it
        if (! oj.DomUtils.isLogicalAncestorOrSelf(drawer[0], target))
        {
          oj.OffcanvasUtils.close(offcanvas);
        }
      };

    var documentElement = document.documentElement;
    if (oj.DomUtils.isTouchSupported())
      documentElement.addEventListener("touchstart", dismisHandler, true);

    documentElement.addEventListener("mousedown", dismisHandler, true);
    documentElement.addEventListener("focus", dismisHandler, true);
  }

  //register swipe handler
  oj.OffcanvasUtils._registerSwipeHandler(offcanvas);
};

//check offcanvas.autoDismiss
//update offcanvas.dismisHandler
oj.OffcanvasUtils._unregisterCloseHandler = function(offcanvas)
{
  var dismisHandler = offcanvas["dismisHandler"];
  if (dismisHandler) {
    var documentElement = document.documentElement;

    if (oj.DomUtils.isTouchSupported())
      documentElement.removeEventListener("touchstart", dismisHandler, true);

    documentElement.removeEventListener("mousedown", dismisHandler, true);
    documentElement.removeEventListener("focus", dismisHandler, true);
    delete offcanvas["dismisHandler"];

    offcanvas["dismisHandler"] = null;
  }

  //unregister swipe handler
  oj.OffcanvasUtils._unregisterSwipeHandler(offcanvas);

};

oj.OffcanvasUtils._registerSwipeHandler = function(offcanvas)
{
  if (oj.DomUtils.isTouchSupported())
  {
    var selector = offcanvas["selector"],
        drawer = $(selector),
        edge = oj.OffcanvasUtils._getEdge(drawer),
        swipeEvent,
        options,
        drawerHammer;

    if ((edge == "start" && ! oj.OffcanvasUtils._isRTL()) ||
        (edge == "end" && oj.OffcanvasUtils._isRTL()))
    {
      options = {
        "recognizers": [
          [Hammer.Swipe, {"direction": Hammer["DIRECTION_LEFT"]}]
      ]};

      swipeEvent = "swipeleft";
    }
    else if ((edge == "start" && oj.OffcanvasUtils._isRTL()) ||
             (edge == "end" && ! oj.OffcanvasUtils._isRTL()))
    {
      options = {
        "recognizers": [
          [Hammer.Swipe, {"direction": Hammer["DIRECTION_RIGHT"]}]
      ]};

      swipeEvent = "swiperight";
    }
    else if (edge == "top")
    {
      options = {
        "recognizers": [
          [Hammer.Swipe, {"direction": Hammer["DIRECTION_UP"]}]
      ]};

      swipeEvent = "swipeup";
    }
    else if (edge == "bottom")
    {
      options = {
        "recognizers": [
          [Hammer.Swipe, {"direction": Hammer["DIRECTION_DOWN"]}]
      ]};

      swipeEvent = "swipedown";
    }

    drawerHammer = drawer
      .ojHammer(options)
      .on(swipeEvent, function(event)
      {
        event.preventDefault();
        oj.OffcanvasUtils.close(offcanvas);
      });

    //keep the hammer in the offcanvas jquery data
    $.data($(selector)[0], oj.OffcanvasUtils._DATA_HAMMER_KEY,
           {"event": swipeEvent,
            "hammer": drawerHammer
           });
  }
};

oj.OffcanvasUtils._unregisterSwipeHandler = function(offcanvas)
{
  var drawer = $(offcanvas["selector"]);
  var dHammer = $.data(drawer[0], oj.OffcanvasUtils._DATA_HAMMER_KEY);
  if (dHammer)
  {
    dHammer["hammer"].off(dHammer["event"]);
  }

};

oj.OffcanvasUtils._afterCloseHandler = function(offcanvas)
{
  var drawer = $(offcanvas["selector"]),
      edge = oj.OffcanvasUtils._getEdge(drawer),
      wrapper = oj.OffcanvasUtils._getAnimateWrapper(offcanvas);

  //clear width setting
/*
  if (edge == "start" || edge == "end")
    drawer.css("width", "");
  else
    drawer.css("height", "");
*/

  //After animation, set display:none and remove transition class
  oj.OffcanvasUtils._toggleClass(offcanvas, wrapper, false);

  //unregister dismiss handler
  oj.OffcanvasUtils._unregisterCloseHandler(offcanvas);

  //fire after close event
  drawer.trigger("ojclose", offcanvas);

  //remove data associate with the offcanvas
  $.removeData(drawer[0], oj.OffcanvasUtils._DATA_OFFCANVAS_KEY);

};

//Set whether the offcanvas is fixed inside the viewport
oj.OffcanvasUtils._setVisible = function(selector, visible, edge)
{
  var drawer = $(selector);
  visible = !! visible;

  //close the offcanvas without animation if it's open
  if (visible && oj.OffcanvasUtils._isOpen(drawer)) {
    //hide offcanvas without animation
    oj.OffcanvasUtils._close(selector, false);
  }

  //toggle "oj-offcanvas-" + edge class
  drawer.toggleClass(oj.OffcanvasUtils._drawerSelector[edge], ! visible);


};


/**
 * Setup offcanvas for the responsive layout.
 * This method adds a listener based on the media query specified in offcanvas.query.
 * When the media query matches the listener is called and offcanvas behavior is removed.
 * When the media query does not match the listener is called and off canvas behavior is added.
 *
 * @export
 * @param {Object} offcanvas An Object contains the properties in the following table.
 * @property {string} offcanvas.selector JQ selector identifying the offcanvas
 * @property {string} offcanvas.edge the edge of the offcanvas, valid values are start, end, top, bottom. This property is optional if the offcanvas element has a "oj-offcanvas-" + <edge> class specified.
 * @property {string} offcanvas.query the media query determine when the offcanvas is fixed inside the viewport.
 *
 * @see #tearDownResponsive
 *
 * @example <caption>Setup the offcanvas:</caption>
 *    var offcanvas = {
 *      "selector": "#startDrawer",
 *      "edge": "start",
 *      "query": oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP)
 *    };
 *
 * oj.OffcanvasUtils.setupResponsive(offcanvas);
 *
 */
oj.OffcanvasUtils.setupResponsive = function(offcanvas)
{
  var mqs = offcanvas["query"];
  if (mqs !== null)
  {
    var selector = offcanvas["selector"],
        query = window.matchMedia(mqs);

    //save the edge
    var edge = oj.OffcanvasUtils._saveEdge(offcanvas);
    var mqListener = function(event)
    {
      //when event.matches=true fix the offcanvas inside the visible viewport.
      oj.OffcanvasUtils._setVisible(selector, event.matches, edge);
    }

    query.addListener(mqListener);
    oj.OffcanvasUtils._setVisible(selector, query.matches, edge);

    //keep the listener in the offcanvas jquery data
    $.data($(selector)[0], oj.OffcanvasUtils._DATA_MEDIA_QUERY_KEY,
           {"mqList": query,
            "mqListener": mqListener
           });
  }
};

/**
 * Removes the listener that was added in setupResponsive.  Page authors should call tearDownResponsive when the offcanvas is no longer needed.
 *
 * @export
 * @param {Object} offcanvas An Object contains the properties in the following table.
 * @property {string} offcanvas.selector JQ selector identifying the offcanvas
 * @see #setupResponsive
 *
 * @example <caption>TearDown the offcanvas:</caption>
 *    var offcanvas = {
 *      "selector": "#startDrawer"
 *    };
 *
 * oj.OffcanvasUtils.tearDownResponsive(offcanvas);
 *
 */
oj.OffcanvasUtils.tearDownResponsive = function(offcanvas)
{
  var drawer = $(offcanvas["selector"]);
  var mql = $.data(drawer[0], oj.OffcanvasUtils._DATA_MEDIA_QUERY_KEY);
  if (mql)
  {
    mql["mqList"].removeListener(mql["mqListener"]);
    $.removeData(drawer[0], oj.OffcanvasUtils._DATA_MEDIA_QUERY_KEY);
  }
};


/**
 * Shows the offcanvas by sliding it into the viewport.  This method fire an ojbeforeopen event which can be vetoed by attaching a listener and returning false.  If the open is not vetoed, this method will fire an ojopen event once animation has completed.
 *
 *<p>Upon opening an offcanvas, focus is automatically moved to the offcanvas itself.
 *
 * @export
 * @param {Object} offcanvas An Object contains the properties in the following table.
 * @property {string} offcanvas.selector JQ selector identifying the offcanvas
 * @property {string} offcanvas.edge the edge of the offcanvas, valid values are start, end, top, bottom. This property is optional if the offcanvas element has a "oj-offcanvas-" + <edge> class specified.
 * @property {string} offcanvas.displayMode how to show the offcanvas, valid values are push or overlay. Default: push
 * @property {string} offcanvas.autoDismiss close behavior, valid values are focusLoss and none. If autoDismiss is default(focusLoss) then any click outside the offcanvas will close it.
 * @property {string} offcanvas.size size width or height of the offcanvas: width if edge is start or end and height if edge is to and bottom. Default to the computed width or height of the offcanvas.

 * @returns {Promise} A promise that is resolved when all transitions have completed. The promise is rejected if the ojbeforeopen event is vetoed.
 * @see #close
 * @see #toggle
 *
 * @example <caption>Slide the offcanvas into the viewport:</caption>
 *    var offcanvas = {
 *      "selector": "#startDrawer",
 *      "edge": "start",
 *      "displayMode": "overlay",
 *      "size": "200px"
 *    };
 *
 * oj.OffcanvasUtils.open(offcanvas);
 *
 */
oj.OffcanvasUtils.open = function(offcanvas)
{
  var drawer = $(offcanvas["selector"]);
  var oldOffcanvas = $.data(drawer[0], oj.OffcanvasUtils._DATA_OFFCANVAS_KEY);
  if (oldOffcanvas) {
    //if we are in the middle of closing, then return the previous saved promise
    if (oldOffcanvas["_closePromise"])
      return oldOffcanvas["_closePromise"];

    //if we are in the middle of opening, then return the previous saved promise
    if (oldOffcanvas["_openPromise"])
      return oldOffcanvas["_openPromise"];
  }

  var promise = new Promise(function(resolve, reject)
  {
    oj.Assert.assertPrototype(drawer, jQuery);

    //save the edge
    var edge = oj.OffcanvasUtils._saveEdge(offcanvas);

    //fire before open event
    var event = $.Event("ojbeforeopen");
    drawer.trigger(event, offcanvas);
    if (event.result === false)
    {
      //TODO: translate
      reject("ojbeforeopen veto");
      return;
    }

    var size,
        displayMode = offcanvas["displayMode"],
        wrapper = oj.OffcanvasUtils._getAnimateWrapper(offcanvas);

    oj.Assert.assertPrototype(wrapper, jQuery);

    //save a copy of offcanvas object in offcanvas jquery data
    var myOffcanvas = $.extend({}, offcanvas);
    $.data(drawer[0], oj.OffcanvasUtils._DATA_OFFCANVAS_KEY, myOffcanvas);

    //Before animation, remove display:none and add transition class
    oj.OffcanvasUtils._toggleClass(myOffcanvas, wrapper, true);

    if (edge == "start" || edge == "end")
    {
      //if size is missing, outerWidth is used
      size = (size === undefined) ? (drawer.outerWidth(true) + "px") : size;
//      drawer.css("width", size);

      //don't set transform for "Overlay"
      if (displayMode == "push")
        oj.OffcanvasUtils._setTranslationX(wrapper, edge, size);
    }
    else
    {
      //if size is missing, outerHeight is used
      size = (size === undefined) ? (drawer.outerHeight(true) + "px") : size;
//      drawer.css("height", size);

      //don't set transform for "Overlay"
      if (displayMode == "push")
        oj.OffcanvasUtils._setTranslationY(wrapper, edge, size);
    }

    //show the drawer
    window.setTimeout(function ()
    {
      var outerWrapper = oj.OffcanvasUtils._getOuterWrapper(drawer);
      oj.Assert.assertPrototype( outerWrapper, jQuery);

      outerWrapper.addClass(oj.OffcanvasUtils._getShiftSelector(edge));

    }, 0);

    //add transition end listener
    oj.OffcanvasUtils._onTransitionEnd(wrapper,
      function ()
      {
        //After animation, remove transition class
        wrapper.removeClass("oj-offcanvas-transition");

/*
        // Set focus to the first match:
        // 1. First element inside the offcanvas matching [autofocus]
        // 2. Tabbable element inside the offcanvas
        // 3. The offcanvas itself
        var firstTabStop = drawer.find("[autofocus]")[0];
        if (! firstTabStop) {
          firstTabStop = oj.FocusUtils.getFirstTabStop(drawer[0]);
        }

        oj.FocusUtils.focusElement(firstTabStop ? firstTabStop : drawer[0]);
*/
        oj.FocusUtils.focusElement(drawer[0]);

        //fire after open event
        drawer.trigger("ojopen", myOffcanvas);

        //Bug 20951397 - push and overlay demos don't work in ie11
        //register dismiss handler as late as possible because IE raises focus event
        //on the launcher that will close the offcanvas if autoDismiss is true
        oj.OffcanvasUtils._registerCloseHandler(myOffcanvas);

        resolve(true);
      });
  });


  //save away the current promise
  var nOffcanvas = $.data(drawer[0], oj.OffcanvasUtils._DATA_OFFCANVAS_KEY);
  if (nOffcanvas) {
    nOffcanvas["_openPromise"] = promise;
  }
  return promise;
};

/**
 * Hides the offcanvas by sliding it out of the viewport.  This method fires an ojbeforeclose event which can be vetoed by attaching a listener and returning false.  If the close is not vetoed, this method will fire an ojclose event once animation has completed.
 *
 * @export
 * @param {Object} offcanvas An Object contains the properties in the following table.
 * @property {string} offcanvas.selector JQ selector identifying the offcanvas
 *
 * @returns {Promise} A promise that is resolved when all transitions have completed. The promise is rejected if the ojbeforeclose event is vetoed.
 * @see #open
 * @see #toggle
 *
 * @example <caption>Slide the offcanvas out of the viewport:</caption>
 *    var offcanvas = {
 *      "selector": "#startDrawer"
 *    };
 *
 * oj.OffcanvasUtils.close(offcanvas);
 *
 */
oj.OffcanvasUtils.close = function(offcanvas)
{
  return oj.OffcanvasUtils._close(offcanvas["selector"], true);
};

oj.OffcanvasUtils._close = function(selector, animation)
{
  var drawer = $(selector);

  oj.Assert.assertPrototype(drawer, jQuery);

  var offcanvas = $.data(drawer[0], oj.OffcanvasUtils._DATA_OFFCANVAS_KEY);

  //if we are in the middle of closing, then return the previous saved promise
  if (offcanvas && offcanvas["_closePromise"]) {
    return offcanvas["_closePromise"];
  }

  var promise = new Promise(function(resolve, reject)
  {
    if (oj.OffcanvasUtils._isOpen(drawer))
    {
      if (selector != offcanvas["selector"])
        resolve(true);

      var edge = oj.OffcanvasUtils._getEdge(drawer),
        displayMode = offcanvas["displayMode"],
        shiftSelector = oj.OffcanvasUtils._getShiftSelector(edge),
        outerWrapper = oj.OffcanvasUtils._getOuterWrapper(drawer);

      oj.Assert.assertPrototype(outerWrapper, jQuery);

      if (! outerWrapper.hasClass(shiftSelector))
        resolve(true);

      //fire before close event
      var event = $.Event("ojbeforeclose");
      drawer.trigger(event, offcanvas);
      if (event.result === false)
      {
        reject("beforeClose veto");
        return;
      }

      var wrapper = oj.OffcanvasUtils._getAnimateWrapper(offcanvas);
      if (animation)
      {
        //add transition end listener
        oj.OffcanvasUtils._onTransitionEnd(wrapper,
          function ()
          {
            oj.OffcanvasUtils._afterCloseHandler(offcanvas);
            resolve(true);
          });
      }

      //clear transform
      if (displayMode == "push") {
        oj.OffcanvasUtils._setTransform(wrapper, "");
      }
      outerWrapper.removeClass(shiftSelector);

      if (animation) {
        //Before animation, add transition class
        wrapper.addClass("oj-offcanvas-transition");
      }
      else {
        oj.OffcanvasUtils._afterCloseHandler(offcanvas);
        resolve(true);
      }
    }
    else {
      resolve(true);
    }
  });

  //save away the current promise
  offcanvas = $.data(drawer[0], oj.OffcanvasUtils._DATA_OFFCANVAS_KEY);
  if (offcanvas) {
    offcanvas["_closePromise"] = promise;
  }

  return promise;
};

/**
 * Toggles the offcanvas in or out of the viewport.  This method simply delegates to the open or close methods as appropriate.
 *
 * @export
 * @param {Object} offcanvas An Object contains the properties in the following table.
 * @property {string} offcanvas.selector JQ selector identifying the offcanvas
 * @property {string} offcanvas.edge the edge of the offcanvas, valid values are start, end, top, bottom. This property is optional if the offcanvas element has a "oj-offcanvas-" + <edge> class specified.
 * @property {string} offcanvas.displayMode how to show the offcanvas, valid values are push or overlay. Default: push
 * @property {string} offcanvas.autoDismiss close behavior, valid values are focusLoss and none. If autoDismiss is default(focusLoss) then any click outside the offcanvas will close it.
 * @property {string} offcanvas.size size width or height of the offcanvas: width if edge is start or end and height if edge is top and bottom. Default to the computed width or height of the offcanvas.
 *
 * @returns {Promise} A promise that is resolved when all transitions have completed
 * @see #open
 * @see #close
 *
 * @example <caption>Toggle the offcanvas in or out of the viewport:</caption>
 *    var offcanvas = {
 *      "selector": "#startDrawer",
 *      "edge": "start",
 *      "displayMode": "overlay"
 *    };
 *
 * oj.OffcanvasUtils.toggle(offcanvas);
 *
 */
oj.OffcanvasUtils.toggle = function(offcanvas)
{
  var drawer = $(offcanvas["selector"]);
  oj.Assert.assertPrototype(drawer, jQuery);

  if (oj.OffcanvasUtils._isOpen(drawer)) {
    return oj.OffcanvasUtils.close(offcanvas);
  }
  else {
    return oj.OffcanvasUtils.open(offcanvas);
  }

};


});
