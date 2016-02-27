/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$42$$, $$$$38$$, $Hammer$$4$$) {
  $oj$$42$$.$OffcanvasUtils$ = {};
  $goog$exportPath_$$("OffcanvasUtils", $oj$$42$$.$OffcanvasUtils$, $oj$$42$$);
  $oj$$42$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$ = "oj-offcanvasEdge";
  $oj$$42$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$ = "oj-offcanvas";
  $oj$$42$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$ = "oj-mediaQueryListener";
  $oj$$42$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$ = "oj-offcanvasHammer";
  $oj$$42$$.$OffcanvasUtils$.$_shiftSelector$ = {start:"oj-offcanvas-shift-start", end:"oj-offcanvas-shift-end", top:"oj-offcanvas-shift-down", bottom:"oj-offcanvas-shift-up"};
  $oj$$42$$.$OffcanvasUtils$.$_drawerSelector$ = {start:"oj-offcanvas-start", end:"oj-offcanvas-end", top:"oj-offcanvas-top", bottom:"oj-offcanvas-bottom"};
  $oj$$42$$.$OffcanvasUtils$.$_isOpen$ = function $$oj$$42$$$$OffcanvasUtils$$$_isOpen$$($drawer$$) {
    return $drawer$$.hasClass("oj-offcanvas-open");
  };
  $oj$$42$$.$OffcanvasUtils$.$_getOuterWrapper$ = function $$oj$$42$$$$OffcanvasUtils$$$_getOuterWrapper$$($drawer$$1$$) {
    return $drawer$$1$$.closest(".oj-offcanvas-outer-wrapper");
  };
  $oj$$42$$.$OffcanvasUtils$.$_getAnimateWrapper$ = function $$oj$$42$$$$OffcanvasUtils$$$_getAnimateWrapper$$($offcanvas$$) {
    var $wrapper$$2$$ = $$$$38$$($offcanvas$$.selector);
    return "push" === $offcanvas$$.displayMode ? $wrapper$$2$$.parent() : $wrapper$$2$$;
  };
  $oj$$42$$.$OffcanvasUtils$.$_getShiftSelector$ = function $$oj$$42$$$$OffcanvasUtils$$$_getShiftSelector$$($edge$$2$$) {
    var $selector$$32$$ = $oj$$42$$.$OffcanvasUtils$.$_shiftSelector$[$edge$$2$$];
    if (!$selector$$32$$) {
      throw "Invalid edge: " + $edge$$2$$;
    }
    return $selector$$32$$;
  };
  $oj$$42$$.$OffcanvasUtils$.$_isRTL$ = function $$oj$$42$$$$OffcanvasUtils$$$_isRTL$$() {
    return "rtl" === $oj$$42$$.$DomUtils$.$getReadingDirection$();
  };
  $oj$$42$$.$OffcanvasUtils$.$_setTransform$ = function $$oj$$42$$$$OffcanvasUtils$$$_setTransform$$($wrapper$$3$$, $transform$$2$$) {
    $wrapper$$3$$.css({"-webkit-transform":$transform$$2$$, "-ms-transform":$transform$$2$$, transform:$transform$$2$$});
  };
  $oj$$42$$.$OffcanvasUtils$.$_setTranslationX$ = function $$oj$$42$$$$OffcanvasUtils$$$_setTranslationX$$($wrapper$$4$$, $edge$$3_minus$$, $width$$31$$) {
    $edge$$3_minus$$ = "end" === $edge$$3_minus$$;
    $oj$$42$$.$OffcanvasUtils$.$_isRTL$() && ($edge$$3_minus$$ = !$edge$$3_minus$$);
    $oj$$42$$.$OffcanvasUtils$.$_setTransform$($wrapper$$4$$, "translate3d(" + ($edge$$3_minus$$ ? "-" : "") + $width$$31$$ + ", 0, 0)");
  };
  $oj$$42$$.$OffcanvasUtils$.$_setTranslationY$ = function $$oj$$42$$$$OffcanvasUtils$$$_setTranslationY$$($wrapper$$5$$, $edge$$4$$, $height$$29$$) {
    $oj$$42$$.$OffcanvasUtils$.$_setTransform$($wrapper$$5$$, "translate3d(0, " + ("bottom" === $edge$$4$$ ? "-" : "") + $height$$29$$ + ", 0)");
  };
  $oj$$42$$.$OffcanvasUtils$.$_saveEdge$ = function $$oj$$42$$$$OffcanvasUtils$$$_saveEdge$$($drawer$$2_offcanvas$$1$$) {
    var $edge$$5$$ = $drawer$$2_offcanvas$$1$$.edge;
    $drawer$$2_offcanvas$$1$$ = $$$$38$$($drawer$$2_offcanvas$$1$$.selector);
    $edge$$5$$ && $edge$$5$$.length || ($edge$$5$$ = $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-start") ? "start" : $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-end") ? "end" : $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-top") ? "top" : $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-bottom") ? "bottom" : "start");
    $$$$38$$.data($drawer$$2_offcanvas$$1$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$5$$);
    return $edge$$5$$;
  };
  $oj$$42$$.$OffcanvasUtils$.$_getEdge$ = function $$oj$$42$$$$OffcanvasUtils$$$_getEdge$$($drawer$$3$$) {
    return $$$$38$$.data($drawer$$3$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$);
  };
  $oj$$42$$.$OffcanvasUtils$.$_toggleClass$ = function $$oj$$42$$$$OffcanvasUtils$$$_toggleClass$$($offcanvas$$2$$, $wrapper$$6$$, $isOpen$$1_oTabIndex$$) {
    var $displayMode_wrapperClass$$ = $offcanvas$$2$$.displayMode, $drawer$$4$$ = $$$$38$$($offcanvas$$2$$.selector), $displayMode_wrapperClass$$ = "overlay" === $displayMode_wrapperClass$$ ? "oj-offcanvas-transition oj-offcanvas-overlay" : "oj-offcanvas-transition";
    $isOpen$$1_oTabIndex$$ ? ($isOpen$$1_oTabIndex$$ = $drawer$$4$$.attr("tabIndex"), void 0 !== $isOpen$$1_oTabIndex$$ && ($offcanvas$$2$$.tabIndex = $isOpen$$1_oTabIndex$$), $drawer$$4$$.addClass("oj-offcanvas-open").attr("tabIndex", "-1"), $wrapper$$6$$.addClass($displayMode_wrapperClass$$)) : ($isOpen$$1_oTabIndex$$ = $offcanvas$$2$$.tabIndex, void 0 === $isOpen$$1_oTabIndex$$ ? $drawer$$4$$.removeAttr("tabIndex") : $drawer$$4$$.attr("tabIndex", $isOpen$$1_oTabIndex$$), $drawer$$4$$.removeClass("oj-offcanvas-open"), 
    $wrapper$$6$$.removeClass($displayMode_wrapperClass$$));
  };
  $oj$$42$$.$OffcanvasUtils$.$_isAutoDismiss$ = function $$oj$$42$$$$OffcanvasUtils$$$_isAutoDismiss$$($offcanvas$$3$$) {
    return "none" != $offcanvas$$3$$.autoDismiss;
  };
  $oj$$42$$.$OffcanvasUtils$.$_onTransitionEnd$ = function $$oj$$42$$$$OffcanvasUtils$$$_onTransitionEnd$$($wrapper$$7$$, $handler$$52$$) {
    function $listener$$41$$() {
      $handler$$52$$();
      $wrapper$$7$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$);
    }
    $wrapper$$7$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$);
  };
  $oj$$42$$.$OffcanvasUtils$.$_registerCloseHandler$ = function $$oj$$42$$$$OffcanvasUtils$$$_registerCloseHandler$$($offcanvas$$4$$) {
    $oj$$42$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$4$$);
    if ($oj$$42$$.$OffcanvasUtils$.$_isAutoDismiss$($offcanvas$$4$$)) {
      var $drawer$$5$$ = $$$$38$$($offcanvas$$4$$.selector), $dismisHandler$$ = $offcanvas$$4$$.dismisHandler = function $$offcanvas$$4$$$dismisHandler$($event$$492$$) {
        var $target$$91$$ = $event$$492$$.target;
        $oj$$42$$.$DomUtils$.$isChromeEvent$($event$$492$$) || "focus" === $event$$492$$.type && !$$$$38$$($target$$91$$).is(":focusable") || $oj$$42$$.$DomUtils$.$isLogicalAncestorOrSelf$($drawer$$5$$[0], $target$$91$$) || $oj$$42$$.$OffcanvasUtils$.close($offcanvas$$4$$);
      }, $documentElement$$ = document.documentElement;
      $oj$$42$$.$DomUtils$.$isTouchSupported$() && $documentElement$$.addEventListener("touchstart", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("mousedown", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("focus", $dismisHandler$$, !0);
    }
    $oj$$42$$.$OffcanvasUtils$.$_registerSwipeHandler$($offcanvas$$4$$);
  };
  $oj$$42$$.$OffcanvasUtils$.$_unregisterCloseHandler$ = function $$oj$$42$$$$OffcanvasUtils$$$_unregisterCloseHandler$$($offcanvas$$5$$) {
    var $dismisHandler$$1$$ = $offcanvas$$5$$.dismisHandler;
    if ($dismisHandler$$1$$) {
      var $documentElement$$1$$ = document.documentElement;
      $oj$$42$$.$DomUtils$.$isTouchSupported$() && $documentElement$$1$$.removeEventListener("touchstart", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("mousedown", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("focus", $dismisHandler$$1$$, !0);
      delete $offcanvas$$5$$.dismisHandler;
      $offcanvas$$5$$.dismisHandler = null;
    }
    $oj$$42$$.$OffcanvasUtils$.$_unregisterSwipeHandler$($offcanvas$$5$$);
  };
  $oj$$42$$.$OffcanvasUtils$.$_registerSwipeHandler$ = function $$oj$$42$$$$OffcanvasUtils$$$_registerSwipeHandler$$($offcanvas$$6$$) {
    if ($oj$$42$$.$DomUtils$.$isTouchSupported$()) {
      var $selector$$33$$ = $offcanvas$$6$$.selector, $drawer$$6_drawerHammer$$ = $$$$38$$($selector$$33$$), $edge$$6$$ = $oj$$42$$.$OffcanvasUtils$.$_getEdge$($drawer$$6_drawerHammer$$), $swipeEvent$$, $options$$352$$;
      "start" == $edge$$6$$ && !$oj$$42$$.$OffcanvasUtils$.$_isRTL$() || "end" == $edge$$6$$ && $oj$$42$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$352$$ = {recognizers:[[$Hammer$$4$$.Swipe, {direction:$Hammer$$4$$.DIRECTION_LEFT}]]}, $swipeEvent$$ = "swipeleft") : "start" == $edge$$6$$ && $oj$$42$$.$OffcanvasUtils$.$_isRTL$() || "end" == $edge$$6$$ && !$oj$$42$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$352$$ = {recognizers:[[$Hammer$$4$$.Swipe, {direction:$Hammer$$4$$.DIRECTION_RIGHT}]]}, $swipeEvent$$ = 
      "swiperight") : "top" == $edge$$6$$ ? ($options$$352$$ = {recognizers:[[$Hammer$$4$$.Swipe, {direction:$Hammer$$4$$.DIRECTION_UP}]]}, $swipeEvent$$ = "swipeup") : "bottom" == $edge$$6$$ && ($options$$352$$ = {recognizers:[[$Hammer$$4$$.Swipe, {direction:$Hammer$$4$$.DIRECTION_DOWN}]]}, $swipeEvent$$ = "swipedown");
      $drawer$$6_drawerHammer$$ = $drawer$$6_drawerHammer$$.$ojHammer$($options$$352$$).on($swipeEvent$$, function($event$$493$$) {
        $event$$493$$.preventDefault();
        $oj$$42$$.$OffcanvasUtils$.close($offcanvas$$6$$);
      });
      $$$$38$$.data($$$$38$$($selector$$33$$)[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$, {event:$swipeEvent$$, hammer:$drawer$$6_drawerHammer$$});
    }
  };
  $oj$$42$$.$OffcanvasUtils$.$_unregisterSwipeHandler$ = function $$oj$$42$$$$OffcanvasUtils$$$_unregisterSwipeHandler$$($dHammer_drawer$$7_offcanvas$$7$$) {
    $dHammer_drawer$$7_offcanvas$$7$$ = $$$$38$$($dHammer_drawer$$7_offcanvas$$7$$.selector);
    ($dHammer_drawer$$7_offcanvas$$7$$ = $$$$38$$.data($dHammer_drawer$$7_offcanvas$$7$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$)) && $dHammer_drawer$$7_offcanvas$$7$$.hammer.off($dHammer_drawer$$7_offcanvas$$7$$.event);
  };
  $oj$$42$$.$OffcanvasUtils$.$_afterCloseHandler$ = function $$oj$$42$$$$OffcanvasUtils$$$_afterCloseHandler$$($offcanvas$$8$$) {
    var $drawer$$8$$ = $$$$38$$($offcanvas$$8$$.selector);
    $oj$$42$$.$OffcanvasUtils$.$_getEdge$($drawer$$8$$);
    var $wrapper$$8$$ = $oj$$42$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$8$$);
    $oj$$42$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$8$$, $wrapper$$8$$, !1);
    $oj$$42$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$8$$);
    $drawer$$8$$.trigger("ojclose", $offcanvas$$8$$);
    $$$$38$$.removeData($drawer$$8$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
  };
  $oj$$42$$.$OffcanvasUtils$.$_setVisible$ = function $$oj$$42$$$$OffcanvasUtils$$$_setVisible$$($selector$$34$$, $visible$$1$$, $edge$$8$$) {
    var $drawer$$9$$ = $$$$38$$($selector$$34$$);
    ($visible$$1$$ = !!$visible$$1$$) && $oj$$42$$.$OffcanvasUtils$.$_isOpen$($drawer$$9$$) && $oj$$42$$.$OffcanvasUtils$.$_close$($selector$$34$$, !1);
    $drawer$$9$$.toggleClass($oj$$42$$.$OffcanvasUtils$.$_drawerSelector$[$edge$$8$$], !$visible$$1$$);
  };
  $oj$$42$$.$OffcanvasUtils$.$setupResponsive$ = function $$oj$$42$$$$OffcanvasUtils$$$setupResponsive$$($mqListener_offcanvas$$9$$) {
    var $mqs_query$$9$$ = $mqListener_offcanvas$$9$$.query;
    if (null !== $mqs_query$$9$$) {
      var $selector$$35$$ = $mqListener_offcanvas$$9$$.selector, $mqs_query$$9$$ = window.matchMedia($mqs_query$$9$$), $edge$$9$$ = $oj$$42$$.$OffcanvasUtils$.$_saveEdge$($mqListener_offcanvas$$9$$);
      $mqListener_offcanvas$$9$$ = function $$mqListener_offcanvas$$9$$$($event$$494$$) {
        $oj$$42$$.$OffcanvasUtils$.$_setVisible$($selector$$35$$, $event$$494$$.matches, $edge$$9$$);
      };
      $mqs_query$$9$$.addListener($mqListener_offcanvas$$9$$);
      $oj$$42$$.$OffcanvasUtils$.$_setVisible$($selector$$35$$, $mqs_query$$9$$.matches, $edge$$9$$);
      $$$$38$$.data($$$$38$$($selector$$35$$)[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$, {mqList:$mqs_query$$9$$, mqListener:$mqListener_offcanvas$$9$$});
    }
  };
  $goog$exportPath_$$("OffcanvasUtils.setupResponsive", $oj$$42$$.$OffcanvasUtils$.$setupResponsive$, $oj$$42$$);
  $oj$$42$$.$OffcanvasUtils$.$tearDownResponsive$ = function $$oj$$42$$$$OffcanvasUtils$$$tearDownResponsive$$($drawer$$10_offcanvas$$10$$) {
    $drawer$$10_offcanvas$$10$$ = $$$$38$$($drawer$$10_offcanvas$$10$$.selector);
    var $mql$$ = $$$$38$$.data($drawer$$10_offcanvas$$10$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$);
    $mql$$ && ($mql$$.mqList.removeListener($mql$$.mqListener), $$$$38$$.removeData($drawer$$10_offcanvas$$10$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$));
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownResponsive", $oj$$42$$.$OffcanvasUtils$.$tearDownResponsive$, $oj$$42$$);
  $oj$$42$$.$OffcanvasUtils$.open = function $$oj$$42$$$$OffcanvasUtils$$open$($offcanvas$$11$$) {
    var $drawer$$11$$ = $$$$38$$($offcanvas$$11$$.selector), $oldOffcanvas_promise$$3$$ = $$$$38$$.data($drawer$$11$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($oldOffcanvas_promise$$3$$) {
      if ($oldOffcanvas_promise$$3$$._closePromise) {
        return $oldOffcanvas_promise$$3$$._closePromise;
      }
      if ($oldOffcanvas_promise$$3$$._openPromise) {
        return $oldOffcanvas_promise$$3$$._openPromise;
      }
    }
    var $oldOffcanvas_promise$$3$$ = new Promise(function($resolve$$51$$, $reject$$50$$) {
      $oj$$42$$.$Assert$.$assertPrototype$($drawer$$11$$, jQuery);
      var $edge$$10$$ = $oj$$42$$.$OffcanvasUtils$.$_saveEdge$($offcanvas$$11$$), $displayMode$$1_event$$495$$ = $$$$38$$.Event("ojbeforeopen");
      $drawer$$11$$.trigger($displayMode$$1_event$$495$$, $offcanvas$$11$$);
      if (!1 === $displayMode$$1_event$$495$$.result) {
        $reject$$50$$("ojbeforeopen veto");
      } else {
        var $size$$22$$, $displayMode$$1_event$$495$$ = $offcanvas$$11$$.displayMode, $wrapper$$9$$ = $oj$$42$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$11$$);
        $oj$$42$$.$Assert$.$assertPrototype$($wrapper$$9$$, jQuery);
        var $myOffcanvas$$ = $$$$38$$.extend({}, $offcanvas$$11$$);
        $$$$38$$.data($drawer$$11$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $myOffcanvas$$);
        $oj$$42$$.$OffcanvasUtils$.$_toggleClass$($myOffcanvas$$, $wrapper$$9$$, !0);
        "start" == $edge$$10$$ || "end" == $edge$$10$$ ? ($size$$22$$ = void 0 === $size$$22$$ ? $drawer$$11$$.outerWidth(!0) + "px" : $size$$22$$, "push" == $displayMode$$1_event$$495$$ && $oj$$42$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$9$$, $edge$$10$$, $size$$22$$)) : ($size$$22$$ = void 0 === $size$$22$$ ? $drawer$$11$$.outerHeight(!0) + "px" : $size$$22$$, "push" == $displayMode$$1_event$$495$$ && $oj$$42$$.$OffcanvasUtils$.$_setTranslationY$($wrapper$$9$$, $edge$$10$$, $size$$22$$));
        window.setTimeout(function() {
          var $outerWrapper$$ = $oj$$42$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$11$$);
          $oj$$42$$.$Assert$.$assertPrototype$($outerWrapper$$, jQuery);
          $outerWrapper$$.addClass($oj$$42$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$10$$));
        }, 0);
        $oj$$42$$.$OffcanvasUtils$.$_onTransitionEnd$($wrapper$$9$$, function() {
          $wrapper$$9$$.removeClass("oj-offcanvas-transition");
          $oj$$42$$.$FocusUtils$.$focusElement$($drawer$$11$$[0]);
          $drawer$$11$$.trigger("ojopen", $myOffcanvas$$);
          $oj$$42$$.$OffcanvasUtils$.$_registerCloseHandler$($myOffcanvas$$);
          $resolve$$51$$(!0);
        });
      }
    }), $nOffcanvas$$ = $$$$38$$.data($drawer$$11$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    $nOffcanvas$$ && ($nOffcanvas$$._openPromise = $oldOffcanvas_promise$$3$$);
    return $oldOffcanvas_promise$$3$$;
  };
  $goog$exportPath_$$("OffcanvasUtils.open", $oj$$42$$.$OffcanvasUtils$.open, $oj$$42$$);
  $oj$$42$$.$OffcanvasUtils$.close = function $$oj$$42$$$$OffcanvasUtils$$close$($offcanvas$$12$$) {
    return $oj$$42$$.$OffcanvasUtils$.$_close$($offcanvas$$12$$.selector, !0);
  };
  $goog$exportPath_$$("OffcanvasUtils.close", $oj$$42$$.$OffcanvasUtils$.close, $oj$$42$$);
  $oj$$42$$.$OffcanvasUtils$.$_close$ = function $$oj$$42$$$$OffcanvasUtils$$$_close$$($selector$$36$$, $animation$$) {
    var $drawer$$12$$ = $$$$38$$($selector$$36$$);
    $oj$$42$$.$Assert$.$assertPrototype$($drawer$$12$$, jQuery);
    var $offcanvas$$13$$ = $$$$38$$.data($drawer$$12$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($offcanvas$$13$$ && $offcanvas$$13$$._closePromise) {
      return $offcanvas$$13$$._closePromise;
    }
    var $promise$$4$$ = new Promise(function($resolve$$52$$, $reject$$51$$) {
      if ($oj$$42$$.$OffcanvasUtils$.$_isOpen$($drawer$$12$$)) {
        $selector$$36$$ != $offcanvas$$13$$.selector && $resolve$$52$$(!0);
        var $edge$$11_shiftSelector$$ = $oj$$42$$.$OffcanvasUtils$.$_getEdge$($drawer$$12$$), $displayMode$$2$$ = $offcanvas$$13$$.displayMode, $edge$$11_shiftSelector$$ = $oj$$42$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$11_shiftSelector$$), $outerWrapper$$1$$ = $oj$$42$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$12$$);
        $oj$$42$$.$Assert$.$assertPrototype$($outerWrapper$$1$$, jQuery);
        $outerWrapper$$1$$.hasClass($edge$$11_shiftSelector$$) || $resolve$$52$$(!0);
        var $event$$496_wrapper$$10$$ = $$$$38$$.Event("ojbeforeclose");
        $drawer$$12$$.trigger($event$$496_wrapper$$10$$, $offcanvas$$13$$);
        !1 === $event$$496_wrapper$$10$$.result ? $reject$$51$$("beforeClose veto") : ($event$$496_wrapper$$10$$ = $oj$$42$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$13$$), $animation$$ && $oj$$42$$.$OffcanvasUtils$.$_onTransitionEnd$($event$$496_wrapper$$10$$, function() {
          $oj$$42$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$13$$);
          $resolve$$52$$(!0);
        }), "push" == $displayMode$$2$$ && $oj$$42$$.$OffcanvasUtils$.$_setTransform$($event$$496_wrapper$$10$$, ""), $outerWrapper$$1$$.removeClass($edge$$11_shiftSelector$$), $animation$$ ? $event$$496_wrapper$$10$$.addClass("oj-offcanvas-transition") : ($oj$$42$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$13$$), $resolve$$52$$(!0)));
      } else {
        $resolve$$52$$(!0);
      }
    });
    ($offcanvas$$13$$ = $$$$38$$.data($drawer$$12$$[0], $oj$$42$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($offcanvas$$13$$._closePromise = $promise$$4$$);
    return $promise$$4$$;
  };
  $oj$$42$$.$OffcanvasUtils$.toggle = function $$oj$$42$$$$OffcanvasUtils$$toggle$($offcanvas$$14$$) {
    var $drawer$$13$$ = $$$$38$$($offcanvas$$14$$.selector);
    $oj$$42$$.$Assert$.$assertPrototype$($drawer$$13$$, jQuery);
    return $oj$$42$$.$OffcanvasUtils$.$_isOpen$($drawer$$13$$) ? $oj$$42$$.$OffcanvasUtils$.close($offcanvas$$14$$) : $oj$$42$$.$OffcanvasUtils$.open($offcanvas$$14$$);
  };
  $goog$exportPath_$$("OffcanvasUtils.toggle", $oj$$42$$.$OffcanvasUtils$.toggle, $oj$$42$$);
});
