/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "jqueryui-amd/position"], function($oj$$45$$, $$$$41$$) {
  $oj$$45$$.$PopupService$ = function $$oj$$45$$$$PopupService$$() {
    this.Init();
  };
  $oj$$45$$.$Object$.$createSubclass$($oj$$45$$.$PopupService$, $oj$$45$$.$Object$, "oj.PopupService");
  $oj$$45$$.$PopupService$.prototype.Init = function $$oj$$45$$$$PopupService$$$Init$() {
    $oj$$45$$.$PopupService$.$superclass$.Init.call(this);
  };
  $oj$$45$$.$PopupService$.$getInstance$ = function $$oj$$45$$$$PopupService$$$getInstance$$() {
    $oj$$45$$.$PopupService$.$_popupService$ || ($oj$$45$$.$PopupService$.$_popupService$ = new $oj$$45$$.$PopupServiceImpl$);
    return $oj$$45$$.$PopupService$.$_popupService$;
  };
  $oj$$45$$.$PopupService$.prototype.open = function $$oj$$45$$$$PopupService$$$open$() {
    $oj$$45$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$45$$.$PopupService$.prototype.close = function $$oj$$45$$$$PopupService$$$close$() {
    $oj$$45$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$45$$.$PopupService$.prototype.$changeOptions$ = function $$oj$$45$$$$PopupService$$$$changeOptions$$() {
    $oj$$45$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$45$$.$PopupService$.prototype.$triggerOnDescendents$ = function $$oj$$45$$$$PopupService$$$$triggerOnDescendents$$() {
    $oj$$45$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$45$$.$PopupService$.prototype.destroy = function $$oj$$45$$$$PopupService$$$destroy$() {
    delete $oj$$45$$.$PopupService$.$_popupService$;
  };
  $oj$$45$$.$PopupService$.$MODALITY$ = {NONE:"none", $MODAL$:"modal", $MODELESS$:"modeless"};
  $oj$$45$$.$PopupService$.$EVENT$ = {$POPUP_REMOVE$:"ojPopupRemove", $POPUP_CLOSE$:"ojPopupClose", $POPUP_REFRESH$:"ojPopupRefresh", $POPUP_AUTODISMISS$:"ojPopupAutoDismiss"};
  $oj$$45$$.$PopupService$.$OPTION$ = {$POPUP$:"popup", $EVENTS$:"events", $MODALITY$:"modality", $LAUNCHER$:"launcher", $POSITION$:"position", $LAYER_SELECTORS$:"layerSelectors"};
  $oj$$45$$.$PopupServiceImpl$ = function $$oj$$45$$$$PopupServiceImpl$$() {
    this.Init();
  };
  $oj$$45$$.$Object$.$createSubclass$($oj$$45$$.$PopupServiceImpl$, $oj$$45$$.$PopupService$, "oj.PopupServiceImpl");
  $oj$$45$$.$PopupServiceImpl$.prototype.open = function $$oj$$45$$$$PopupServiceImpl$$$open$($layerClass$$3_options$$373$$) {
    $oj$$45$$.$Assert$.$assertObject$($layerClass$$3_options$$373$$);
    var $popup$$4$$ = $layerClass$$3_options$$373$$[$oj$$45$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$45$$.$Assert$.$assertPrototype$($popup$$4$$, jQuery);
    var $launcher$$21$$ = $layerClass$$3_options$$373$$[$oj$$45$$.$PopupService$.$OPTION$.$LAUNCHER$];
    $oj$$45$$.$Assert$.$assertPrototype$($launcher$$21$$, jQuery);
    var $position$$31$$ = $layerClass$$3_options$$373$$[$oj$$45$$.$PopupService$.$OPTION$.$POSITION$];
    $oj$$45$$.$Assert$.$assertObjectOrNull$($position$$31$$);
    var $events$$8$$ = $layerClass$$3_options$$373$$[$oj$$45$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$45$$.$Assert$.$assertObject$($events$$8$$);
    var $modality$$ = $layerClass$$3_options$$373$$[$oj$$45$$.$PopupService$.$OPTION$.$MODALITY$];
    $oj$$45$$.$Assert$.$assertStringOrNull$($modality$$);
    if (!$modality$$ || $oj$$45$$.$PopupService$.$MODALITY$.$MODELESS$ !== $modality$$ && $oj$$45$$.$PopupService$.$MODALITY$.$MODAL$ !== $modality$$) {
      $modality$$ = $oj$$45$$.$PopupService$.$MODALITY$.NONE;
    }
    $layerClass$$3_options$$373$$ = $layerClass$$3_options$$373$$[$oj$$45$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$45$$.$Assert$.$assertString$($layerClass$$3_options$$373$$);
    $oj$$45$$.$DomUtils$.$setLogicalParent$($popup$$4$$, $launcher$$21$$);
    $oj$$45$$.$ZOrderUtils$.$addToAncestorLayer$($popup$$4$$, $launcher$$21$$, $events$$8$$, $modality$$, $layerClass$$3_options$$373$$);
    $popup$$4$$.show();
    $popup$$4$$.removeAttr("aria-hidden");
    $position$$31$$ && $popup$$4$$.position($position$$31$$);
    this.$_assertEventSink$();
    $oj$$45$$.Components.$subtreeShown$($popup$$4$$[0]);
  };
  $oj$$45$$.$PopupServiceImpl$.prototype.close = function $$oj$$45$$$$PopupServiceImpl$$$close$($options$$374_popup$$5$$) {
    $oj$$45$$.$Assert$.$assertObject$($options$$374_popup$$5$$);
    $options$$374_popup$$5$$ = $options$$374_popup$$5$$[$oj$$45$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$45$$.$Assert$.$assertPrototype$($options$$374_popup$$5$$, jQuery);
    $oj$$45$$.$ZOrderUtils$.$removeFromAncestorLayer$($options$$374_popup$$5$$);
    $options$$374_popup$$5$$.hide();
    $options$$374_popup$$5$$.attr("aria-hidden", "true");
    $oj$$45$$.$DomUtils$.$setLogicalParent$($options$$374_popup$$5$$, null);
    this.$_assertEventSink$();
    $oj$$45$$.Components.$subtreeHidden$($options$$374_popup$$5$$[0]);
  };
  $oj$$45$$.$PopupServiceImpl$.prototype.$changeOptions$ = function $$oj$$45$$$$PopupServiceImpl$$$$changeOptions$$($layerClass$$4_options$$375$$) {
    $oj$$45$$.$Assert$.$assertObject$($layerClass$$4_options$$375$$);
    var $layer$$1_popup$$6$$ = $layerClass$$4_options$$375$$[$oj$$45$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$45$$.$Assert$.$assertPrototype$($layer$$1_popup$$6$$, jQuery);
    $layer$$1_popup$$6$$ = $oj$$45$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$1_popup$$6$$);
    $oj$$45$$.$Assert$.$assertPrototype$($layer$$1_popup$$6$$, jQuery);
    var $events$$9_modality$$1$$ = $layerClass$$4_options$$375$$[$oj$$45$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$45$$.$Assert$.$assertObjectOrNull$($events$$9_modality$$1$$);
    $events$$9_modality$$1$$ && $oj$$45$$.$ZOrderUtils$.$applyEvents$($layer$$1_popup$$6$$, $events$$9_modality$$1$$);
    ($events$$9_modality$$1$$ = $layerClass$$4_options$$375$$[$oj$$45$$.$PopupService$.$OPTION$.$MODALITY$]) && $oj$$45$$.$ZOrderUtils$.$applyModality$($layer$$1_popup$$6$$, $events$$9_modality$$1$$);
    $layerClass$$4_options$$375$$ = $layerClass$$4_options$$375$$[$oj$$45$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$45$$.$StringUtils$.$isEmptyOrUndefined$($layerClass$$4_options$$375$$) || $layer$$1_popup$$6$$.attr("class", $layerClass$$4_options$$375$$);
  };
  $oj$$45$$.$PopupServiceImpl$.prototype.$triggerOnDescendents$ = function $$oj$$45$$$$PopupServiceImpl$$$$triggerOnDescendents$$($layer$$2_popup$$7$$, $event$$502$$, $argsArray$$1$$) {
    var $context$$94$$ = {};
    $context$$94$$.event = $event$$502$$;
    $context$$94$$.argsArray = $argsArray$$1$$;
    $layer$$2_popup$$7$$ = $oj$$45$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$2_popup$$7$$);
    $oj$$45$$.$ZOrderUtils$.$postOrderVisit$($layer$$2_popup$$7$$, this.$_triggerOnDescendentsVisitCallback$, $context$$94$$);
  };
  $oj$$45$$.$PopupServiceImpl$.prototype.$_triggerOnDescendentsVisitCallback$ = function $$oj$$45$$$$PopupServiceImpl$$$$_triggerOnDescendentsVisitCallback$$($layer$$3$$, $context$$95$$) {
    var $event$$503$$ = $context$$95$$.event, $argsArray$$2$$ = $context$$95$$.argsArray, $events$$10$$ = $oj$$45$$.$ZOrderUtils$.$getEvents$($layer$$3$$);
    $events$$10$$ && $$$$41$$.isFunction($events$$10$$[$event$$503$$]) && $events$$10$$[$event$$503$$].apply(this, $argsArray$$2$$);
    return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$45$$.$PopupServiceImpl$.prototype.$_assertEventSink$ = function $$oj$$45$$$$PopupServiceImpl$$$$_assertEventSink$$() {
    var $docElement_hasPopupsOpen$$ = $oj$$45$$.$ZOrderUtils$.$hasPopupsOpen$(), $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$;
    if (!$docElement_hasPopupsOpen$$ && $callbackEventFilter_simpleTapRecognizer$$) {
      window.removeEventListener("resize", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      window.removeEventListener("scroll", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$ = document.documentElement;
      $docElement_hasPopupsOpen$$.removeEventListener("mousewheel", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$.removeEventListener("DOMMouseScroll", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      delete this.$_callbackEventFilter$;
      for (var $i$$385$$ = 0;$i$$385$$ < $oj$$45$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$385$$++) {
        var $event$$504$$ = $oj$$45$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$385$$];
        $docElement_hasPopupsOpen$$.removeEventListener($event$$504$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
      }
      if ($callbackEventFilter_simpleTapRecognizer$$ = this.$_simpleTapRecognizer$) {
        $callbackEventFilter_simpleTapRecognizer$$.destroy(), delete this.$_simpleTapRecognizer$;
      }
    } else {
      if ($docElement_hasPopupsOpen$$ && !$callbackEventFilter_simpleTapRecognizer$$) {
        window.addEventListener("resize", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        window.addEventListener("scroll", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$ = document.documentElement;
        $docElement_hasPopupsOpen$$.addEventListener("mousewheel", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$.addEventListener("DOMMouseScroll", $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$ = $$$$41$$.proxy(this.$_eventFilterCallback$, this);
        for ($i$$385$$ = 0;$i$$385$$ < $oj$$45$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$385$$++) {
          $event$$504$$ = $oj$$45$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$385$$], $docElement_hasPopupsOpen$$.addEventListener($event$$504$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
        }
        $oj$$45$$.$DomUtils$.$isTouchSupported$() && (this.$_simpleTapRecognizer$ = new $oj$$45$$.$SimpleTapRecognizer$($callbackEventFilter_simpleTapRecognizer$$));
      }
    }
  };
  $oj$$45$$.$PopupServiceImpl$.prototype.$_eventFilterCallback$ = function $$oj$$45$$$$PopupServiceImpl$$$$_eventFilterCallback$$($event$$505$$) {
    var $context$$96_target$$95$$ = $$$$41$$($event$$505$$.target);
    if (!$oj$$45$$.$ZOrderUtils$.$hasPopupsOpen$()) {
      this.$_assertEventSink$();
    } else {
      if (!$oj$$45$$.$DomUtils$.$isChromeEvent$($event$$505$$) && ("focus" !== $event$$505$$.type || $context$$96_target$$95$$.is(":focusable"))) {
        var $defaultLayer$$ = $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$();
        if ("keydown" === $event$$505$$.type && $oj$$45$$.$ZOrderUtils$.$hasModalDialogOpen$() && !$oj$$45$$.$DomUtils$.$isAncestor$($defaultLayer$$[0], $context$$96_target$$95$$[0])) {
          $oj$$45$$.$ZOrderUtils$.$eatEvent$($$$$41$$.Event($event$$505$$));
        } else {
          var $props$$21_targetWitinLayer$$ = $oj$$45$$.$ZOrderUtils$.$getFirstAncestorLayer$($context$$96_target$$95$$);
          if ($defaultLayer$$[0] !== $props$$21_targetWitinLayer$$[0]) {
            if (!$props$$21_targetWitinLayer$$.hasClass($oj$$45$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$)) {
              var $lastFocusLayer$$ = this.$_lastFocusLayer$;
              $lastFocusLayer$$ && $lastFocusLayer$$.removeClass($oj$$45$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              $props$$21_targetWitinLayer$$.addClass($oj$$45$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              this.$_lastFocusLayer$ = $props$$21_targetWitinLayer$$;
            }
          } else {
            if ($lastFocusLayer$$ = this.$_lastFocusLayer$) {
              $lastFocusLayer$$.removeClass($oj$$45$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$), delete this.$_lastFocusLayer$;
            }
          }
          if ("focus" !== $event$$505$$.type || "-1" !== $context$$96_target$$95$$.attr("tabindex")) {
            var $context$$96_target$$95$$ = {}, $props$$21_targetWitinLayer$$ = {}, $key$$152$$;
            for ($key$$152$$ in $event$$505$$) {
              $$$$41$$.isFunction($event$$505$$[$key$$152$$]) || ($props$$21_targetWitinLayer$$[$key$$152$$] = $event$$505$$[$key$$152$$]);
            }
            $context$$96_target$$95$$.event = $$$$41$$.Event($event$$505$$, $props$$21_targetWitinLayer$$);
            $oj$$45$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$, $oj$$45$$.$PopupServiceImpl$.$_redistributeVisitCallback$, $context$$96_target$$95$$);
          }
        }
      }
    }
  };
  $oj$$45$$.$PopupServiceImpl$.$_redistributeVisitCallback$ = function $$oj$$45$$$$PopupServiceImpl$$$_redistributeVisitCallback$$($layer$$4$$, $context$$97$$) {
    var $events$$11$$ = $oj$$45$$.$ZOrderUtils$.$getEvents$($layer$$4$$), $event$$506$$ = $context$$97$$.event;
    if ($events$$11$$ && $$$$41$$.isFunction($events$$11$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$])) {
      $events$$11$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$]($event$$506$$);
    }
    return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$45$$.$PopupServiceImpl$.$_refreshCallback$ = function $$oj$$45$$$$PopupServiceImpl$$$_refreshCallback$$() {
    isNaN($oj$$45$$.$PopupServiceImpl$.$_refreshTimmer$) && ($oj$$45$$.$PopupServiceImpl$.$_refreshTimmer$ = window.setTimeout(function() {
      delete $oj$$45$$.$PopupServiceImpl$.$_refreshTimmer$;
      var $defaultLayer$$1$$ = $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$();
      $oj$$45$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$1$$, $oj$$45$$.$PopupServiceImpl$.$_refreshVisitCallback$);
    }, $oj$$45$$.$PopupServiceImpl$.$_REFRESH_DELAY$));
  };
  $oj$$45$$.$PopupServiceImpl$.$_refreshVisitCallback$ = function $$oj$$45$$$$PopupServiceImpl$$$_refreshVisitCallback$$($layer$$5$$, $context$$98$$) {
    if (0 < $context$$98$$.level) {
      return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$12$$ = $oj$$45$$.$ZOrderUtils$.$getEvents$($layer$$5$$);
    if ($events$$12$$ && $$$$41$$.isFunction($events$$12$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_REFRESH$])) {
      $events$$12$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_REFRESH$]();
    }
    return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$45$$.$PopupServiceImpl$.prototype.destroy = function $$oj$$45$$$$PopupServiceImpl$$$destroy$() {
    $oj$$45$$.$PopupServiceImpl$.$superclass$.destroy.call(this);
  };
  $oj$$45$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$ = "oj-focus-within";
  $oj$$45$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$ = ["focus", "mousedown", "keydown"];
  $oj$$45$$.$PopupServiceImpl$.$_REFRESH_DELAY$ = 100;
  $oj$$45$$.$ZOrderUtils$ = {};
  $oj$$45$$.$ZOrderUtils$.$getFirstAncestorLayer$ = function $$oj$$45$$$$ZOrderUtils$$$getFirstAncestorLayer$$($launcher$$22_parent$$38$$) {
    if (!$launcher$$22_parent$$38$$) {
      return $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$();
    }
    for (;$launcher$$22_parent$$38$$ && 0 < $launcher$$22_parent$$38$$.length && $launcher$$22_parent$$38$$.attr("oj.ZOrderUtils._SURROGATE_ATTR") !== $oj$$45$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$;) {
      if ($oj$$45$$.$ZOrderUtils$.$_hasSurrogate$($launcher$$22_parent$$38$$[0])) {
        return $launcher$$22_parent$$38$$;
      }
      $launcher$$22_parent$$38$$ = $launcher$$22_parent$$38$$.parent();
    }
    return $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$();
  };
  $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$ = function $$oj$$45$$$$ZOrderUtils$$$getDefaultLayer$$() {
    var $defaultLayer$$2$$ = $$$$41$$("#" + $oj$$45$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    if (0 < $defaultLayer$$2$$.length) {
      return $defaultLayer$$2$$;
    }
    $defaultLayer$$2$$ = $$$$41$$("\x3cdiv\x3e");
    $defaultLayer$$2$$.attr("role", "presentation");
    $defaultLayer$$2$$.attr("id", $oj$$45$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    $defaultLayer$$2$$.prependTo($$$$41$$(document.body));
    return $defaultLayer$$2$$;
  };
  $oj$$45$$.$ZOrderUtils$.$addToAncestorLayer$ = function $$oj$$45$$$$ZOrderUtils$$$addToAncestorLayer$$($popup$$8$$, $ancestorLayer_launcher$$23$$, $events$$13$$, $modality$$2$$, $layerClass$$5_surrogate$$) {
    var $popupDom$$ = $popup$$8$$[0];
    if ($oj$$45$$.$ZOrderUtils$.$_hasSurrogate$($popupDom$$.parentNode)) {
      throw Error("JET Popup is already open - id: " + $popupDom$$.getAttribute("id"));
    }
    $ancestorLayer_launcher$$23$$ = $oj$$45$$.$ZOrderUtils$.$getFirstAncestorLayer$($modality$$2$$ !== $oj$$45$$.$PopupService$.$MODALITY$.NONE ? null : $ancestorLayer_launcher$$23$$);
    var $layer$$6$$ = $$$$41$$("\x3cdiv\x3e"), $popupId$$2$$ = $popup$$8$$.attr("id");
    $oj$$45$$.$StringUtils$.$isEmptyOrUndefined$($popupId$$2$$) ? $layer$$6$$.uniqueId() : $layer$$6$$.attr("id", [$popupId$$2$$, "layer"].join("_"));
    $layer$$6$$.attr("role", "presentation");
    $layer$$6$$.addClass($layerClass$$5_surrogate$$);
    $popup$$8$$.after($layer$$6$$);
    $layerClass$$5_surrogate$$ = $oj$$45$$.$ZOrderUtils$.$_createSurrogate$($layer$$6$$);
    $oj$$45$$.Components.$subtreeDetached$($popupDom$$);
    $popup$$8$$.appendTo($layer$$6$$);
    $layer$$6$$.appendTo($ancestorLayer_launcher$$23$$);
    $oj$$45$$.Components.$subtreeAttached$($popupDom$$);
    $oj$$45$$.$ZOrderUtils$.$applyModality$($layer$$6$$, $modality$$2$$);
    $oj$$45$$.$ZOrderUtils$.$applyEvents$($layer$$6$$, $events$$13$$, $layerClass$$5_surrogate$$);
  };
  $oj$$45$$.$ZOrderUtils$.$applyEvents$ = function $$oj$$45$$$$ZOrderUtils$$$applyEvents$$($layer$$7$$, $events$$14$$, $surrogate$$1$$) {
    if (!$surrogate$$1$$) {
      var $surrogateId$$ = $layer$$7$$.attr($oj$$45$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
      $surrogateId$$ && ($surrogate$$1$$ = $$$$41$$("#" + $surrogateId$$));
    }
    $layer$$7$$.data($oj$$45$$.$ZOrderUtils$.$_EVENTS_DATA$, $events$$14$$);
    $surrogate$$1$$ && $events$$14$$ && $$$$41$$.isFunction($events$$14$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]) && ($surrogate$$1$$.surrogate(), $surrogate$$1$$.surrogate("option", "beforeDestroy", $events$$14$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]));
  };
  $oj$$45$$.$ZOrderUtils$.$getEvents$ = function $$oj$$45$$$$ZOrderUtils$$$getEvents$$($layer$$8$$) {
    return $layer$$8$$.data($oj$$45$$.$ZOrderUtils$.$_EVENTS_DATA$);
  };
  $oj$$45$$.$ZOrderUtils$.$_createSurrogate$ = function $$oj$$45$$$$ZOrderUtils$$$_createSurrogate$$($layer$$9$$) {
    var $surrogate$$2$$ = $$$$41$$("\x3cscript\x3e"), $layerId_surrogateId$$1$$ = $layer$$9$$.attr("id");
    $oj$$45$$.$StringUtils$.$isEmptyOrUndefined$($layerId_surrogateId$$1$$) ? $surrogate$$2$$.uniqueId() : $surrogate$$2$$.attr("id", [$layerId_surrogateId$$1$$, "surrogate"].join("_"));
    $surrogate$$2$$.insertBefore($layer$$9$$);
    $layerId_surrogateId$$1$$ = $surrogate$$2$$.attr("id");
    $layer$$9$$.attr($oj$$45$$.$ZOrderUtils$.$_SURROGATE_ATTR$, $layerId_surrogateId$$1$$);
    return $surrogate$$2$$;
  };
  $oj$$45$$.$ZOrderUtils$.$_removeSurrogate$ = function $$oj$$45$$$$ZOrderUtils$$$_removeSurrogate$$($layer$$10$$) {
    var $surrogate$$3_surrogateId$$2$$ = $layer$$10$$.attr($oj$$45$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $layer$$10$$.removeAttr($oj$$45$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $surrogate$$3_surrogateId$$2$$ = $$$$41$$("#" + $surrogate$$3_surrogateId$$2$$);
    $layer$$10$$.insertAfter($surrogate$$3_surrogateId$$2$$);
    $surrogate$$3_surrogateId$$2$$.surrogate("option", "beforeDestroy", null);
    $surrogate$$3_surrogateId$$2$$.remove();
  };
  $oj$$45$$.$ZOrderUtils$.$removeFromAncestorLayer$ = function $$oj$$45$$$$ZOrderUtils$$$removeFromAncestorLayer$$($popup$$9$$) {
    var $layer$$11$$ = $oj$$45$$.$ZOrderUtils$.$getFirstAncestorLayer$($popup$$9$$);
    $oj$$45$$.$ZOrderUtils$.$preOrderVisit$($layer$$11$$, $oj$$45$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$);
    $oj$$45$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$11$$);
    $layer$$11$$.removeData($oj$$45$$.$ZOrderUtils$.$_EVENTS_DATA$);
    $layer$$11$$.removeData($oj$$45$$.$ZOrderUtils$.$_MODALITY_DATA$);
    var $popupDom$$1$$ = $popup$$9$$[0];
    $oj$$45$$.Components.$subtreeDetached$($popupDom$$1$$);
    $oj$$45$$.$ZOrderUtils$.$_removeSurrogate$($layer$$11$$);
    $oj$$45$$.$DomUtils$.unwrap($popup$$9$$, $layer$$11$$);
    $oj$$45$$.Components.$subtreeAttached$($popupDom$$1$$);
  };
  $oj$$45$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$ = function $$oj$$45$$$$ZOrderUtils$$$_closeDescendantPopupsCallback$$($layer$$12$$, $context$$99$$) {
    if (0 < $context$$99$$.level) {
      return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$16$$ = $layer$$12$$.data($oj$$45$$.$ZOrderUtils$.$_EVENTS_DATA$);
    if ($events$$16$$ && $$$$41$$.isFunction($events$$16$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_CLOSE$])) {
      $events$$16$$[$oj$$45$$.$PopupService$.$EVENT$.$POPUP_CLOSE$]();
    }
    return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$45$$.$ZOrderUtils$.$applyModality$ = function $$oj$$45$$$$ZOrderUtils$$$applyModality$$($layer$$13$$, $modality$$3$$) {
    var $currModality$$ = $layer$$13$$.data($oj$$45$$.$ZOrderUtils$.$_MODALITY_DATA$);
    $layer$$13$$.data($oj$$45$$.$ZOrderUtils$.$_MODALITY_DATA$, $modality$$3$$);
    $oj$$45$$.$StringUtils$.$isEmptyOrUndefined$($currModality$$) ? $oj$$45$$.$PopupService$.$MODALITY$.$MODAL$ === $modality$$3$$ ? $oj$$45$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$13$$) : $oj$$45$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$13$$) : $currModality$$ !== $modality$$3$$ && ($modality$$3$$ !== $currModality$$ && $modality$$3$$ === $oj$$45$$.$PopupService$.$MODALITY$.$MODAL$ ? $oj$$45$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$13$$) : $oj$$45$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$13$$));
  };
  $oj$$45$$.$ZOrderUtils$.$hasModalDialogOpen$ = function $$oj$$45$$$$ZOrderUtils$$$hasModalDialogOpen$$() {
    for (var $children$$22$$ = $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$().children(), $i$$386$$ = $children$$22$$.length - 1;-1 < $i$$386$$;$i$$386$$--) {
      if ($$$$41$$($children$$22$$[$i$$386$$]).hasClass($oj$$45$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$45$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$ = function $$oj$$45$$$$ZOrderUtils$$$_addOverlayToAncestorLayer$$($layer$$14$$) {
    var $overlay_overlayId$$ = $$$$41$$("\x3cdiv\x3e");
    $overlay_overlayId$$.addClass($oj$$45$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$);
    $overlay_overlayId$$.attr("role", "presentation");
    var $layerId$$1$$ = $layer$$14$$.attr("id");
    $oj$$45$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$1$$) ? $overlay_overlayId$$.uniqueId() : $overlay_overlayId$$.attr("id", [$layerId$$1$$, "overlay"].join("_"));
    $layer$$14$$.before($overlay_overlayId$$);
    $overlay_overlayId$$.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus", $oj$$45$$.$ZOrderUtils$.$eatEvent$);
    $overlay_overlayId$$ = $overlay_overlayId$$.attr("id");
    $layer$$14$$.attr($oj$$45$$.$ZOrderUtils$.$_OVERLAY_ATTR$, $overlay_overlayId$$);
  };
  $oj$$45$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$ = function $$oj$$45$$$$ZOrderUtils$$$_removeOverlayFromAncestorLayer$$($layer$$15$$) {
    var $overlayId$$1$$ = $layer$$15$$.attr($oj$$45$$.$ZOrderUtils$.$_OVERLAY_ATTR$);
    $oj$$45$$.$StringUtils$.$isEmptyOrUndefined$($overlayId$$1$$) || ($layer$$15$$.removeAttr($oj$$45$$.$ZOrderUtils$.$_OVERLAY_ATTR$), $$$$41$$("#" + $overlayId$$1$$).remove());
  };
  $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$ = {$ACCEPT$:0, $REJECT$:1, $COMPLETE$:2};
  $oj$$45$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$ = {$PRE_ORDER$:0, $POST_ORDER$:1};
  $oj$$45$$.$ZOrderUtils$.$postOrderVisit$ = function $$oj$$45$$$$ZOrderUtils$$$postOrderVisit$$($layer$$16$$, $callback$$109$$, $context$$100$$) {
    $context$$100$$ || ($context$$100$$ = {});
    $context$$100$$.level = 0;
    $context$$100$$.type = $oj$$45$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$;
    $oj$$45$$.$ZOrderUtils$.$_visitTree$($layer$$16$$, $callback$$109$$, $context$$100$$);
  };
  $oj$$45$$.$ZOrderUtils$.$preOrderVisit$ = function $$oj$$45$$$$ZOrderUtils$$$preOrderVisit$$($layer$$17$$, $callback$$110$$, $context$$101$$) {
    $context$$101$$ || ($context$$101$$ = {});
    $context$$101$$.level = 0;
    $context$$101$$.type = $oj$$45$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$;
    $oj$$45$$.$ZOrderUtils$.$_visitTree$($layer$$17$$, $callback$$110$$, $context$$101$$);
  };
  $oj$$45$$.$ZOrderUtils$.$_visitTree$ = function $$oj$$45$$$$ZOrderUtils$$$_visitTree$$($children$$23_layer$$18$$, $callback$$111$$, $context$$102$$) {
    var $level$$46$$ = $context$$102$$.level;
    $children$$23_layer$$18$$ = $children$$23_layer$$18$$.children();
    for (var $i$$387$$ = $children$$23_layer$$18$$.length - 1;-1 < $i$$387$$;$i$$387$$--) {
      var $child$$22$$ = $$$$41$$($children$$23_layer$$18$$[$i$$387$$]);
      if ($oj$$45$$.$ZOrderUtils$.$_hasSurrogate$($child$$22$$[0])) {
        var $vrtn$$;
        if ($context$$102$$.type === $oj$$45$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$) {
          $vrtn$$ = $callback$$111$$($child$$22$$, $context$$102$$);
          if ($vrtn$$ === $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
        $context$$102$$.level = $level$$46$$ + 1;
        $vrtn$$ = $oj$$45$$.$ZOrderUtils$.$_visitTree$($child$$22$$, $callback$$111$$, $context$$102$$);
        $context$$102$$.level = $level$$46$$;
        if ($vrtn$$ === $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
          return $vrtn$$;
        }
        if ($context$$102$$.type === $oj$$45$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$) {
          $vrtn$$ = $callback$$111$$($child$$22$$, $context$$102$$);
          if ($vrtn$$ === $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
      }
    }
    return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$45$$.$ZOrderUtils$.$_hasSurrogate$ = function $$oj$$45$$$$ZOrderUtils$$$_hasSurrogate$$($element$$116$$) {
    return 1 === $element$$116$$.nodeType && $element$$116$$.hasAttribute($oj$$45$$.$ZOrderUtils$.$_SURROGATE_ATTR$) ? !0 : !1;
  };
  $oj$$45$$.$ZOrderUtils$.$hasPopupsOpen$ = function $$oj$$45$$$$ZOrderUtils$$$hasPopupsOpen$$() {
    return 0 < $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$().children().length;
  };
  $oj$$45$$.$ZOrderUtils$.$getOpenPopupCount$ = function $$oj$$45$$$$ZOrderUtils$$$getOpenPopupCount$$() {
    var $context$$103$$ = {popupCount:0}, $defaultLayer$$5$$ = $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$45$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$5$$, $oj$$45$$.$ZOrderUtils$.$_openPopupCountCallback$, $context$$103$$);
    return $context$$103$$.popupCount;
  };
  $oj$$45$$.$ZOrderUtils$.$_openPopupCountCallback$ = function $$oj$$45$$$$ZOrderUtils$$$_openPopupCountCallback$$($layer$$19$$, $context$$104$$) {
    $context$$104$$.popupCount += 1;
    return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$45$$.$ZOrderUtils$.$findOpenPopups$ = function $$oj$$45$$$$ZOrderUtils$$$findOpenPopups$$() {
    var $context$$105$$ = {}, $defaultLayer$$6_popups$$2$$ = [];
    $context$$105$$.popups = $defaultLayer$$6_popups$$2$$;
    $defaultLayer$$6_popups$$2$$ = $oj$$45$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$45$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$6_popups$$2$$, $oj$$45$$.$ZOrderUtils$.$_openPopupsCallback$, $context$$105$$);
    $defaultLayer$$6_popups$$2$$ = $context$$105$$.popups;
    return $$$$41$$($defaultLayer$$6_popups$$2$$);
  };
  $oj$$45$$.$ZOrderUtils$.$_openPopupsCallback$ = function $$oj$$45$$$$ZOrderUtils$$$_openPopupsCallback$$($layer$$20$$, $context$$106$$) {
    $context$$106$$.popups.push($layer$$20$$[0]);
    return $oj$$45$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$45$$.$ZOrderUtils$.$compareStackingContexts$ = function $$oj$$45$$$$ZOrderUtils$$$compareStackingContexts$$($el1$$1$$, $el2$$1$$) {
    function $describeStackingContext$$($element$$117$$, $allLevels$$) {
      for (var $positions$$ = ["absolute", "relative", "fixed"], $parents$$4$$ = $element$$117$$.parents(), $stack_tmp$$2$$ = [], $i$$389$$ = $parents$$4$$.length - 1;-1 < $i$$389$$;$i$$389$$--) {
        $stack_tmp$$2$$.push($$$$41$$($parents$$4$$[$i$$389$$]));
      }
      $parents$$4$$ = $stack_tmp$$2$$;
      $parents$$4$$.push($element$$117$$);
      for (var $stack_tmp$$2$$ = [], $level$$47$$ = 0, $i$$389$$ = 0;$i$$389$$ < $parents$$4$$.length;$i$$389$$++) {
        var $order_parent$$39$$ = $parents$$4$$[$i$$389$$], $position$$32$$ = $order_parent$$39$$.css("position"), $opacity$$1$$ = $oj$$45$$.$DomUtils$.$getCSSLengthAsFloat$($order_parent$$39$$.css("opacity")), $zindex$$ = $oj$$45$$.$DomUtils$.$getCSSLengthAsInt$($order_parent$$39$$.css("z-index")), $order_parent$$39$$ = $$$$41$$.inArray($order_parent$$39$$[0], $order_parent$$39$$.parent().children());
        -1 < $$$$41$$.inArray($position$$32$$, $positions$$) ? $stack_tmp$$2$$.push({weight:[$level$$47$$++, $zindex$$, $order_parent$$39$$], order:[$order_parent$$39$$]}) : 1 > $opacity$$1$$ ? $stack_tmp$$2$$.push({weight:[$level$$47$$++, 1, $order_parent$$39$$], order:[$order_parent$$39$$]}) : $allLevels$$ && $stack_tmp$$2$$.push({weight:[0, 0, $order_parent$$39$$], order:[$order_parent$$39$$]});
      }
      return $stack_tmp$$2$$;
    }
    function $compareSets$$($n1$$3$$, $n2$$3$$) {
      for (var $maxLen$$1$$ = Math.max($n1$$3$$.length, $n2$$3$$.length), $i$$390$$ = 0;$i$$390$$ < $maxLen$$1$$;$i$$390$$++) {
        var $e1$$1$$ = $i$$390$$ < $n1$$3$$.length ? $n1$$3$$[$i$$390$$] : -1, $e2$$1$$ = $i$$390$$ < $n2$$3$$.length ? $n2$$3$$[$i$$390$$] : -1;
        if ($e1$$1$$ !== $e2$$1$$) {
          return $e1$$1$$ < $e2$$1$$ ? -1 : 1;
        }
      }
      return 0;
    }
    $oj$$45$$.$Assert$.$assertPrototype$($el1$$1$$, jQuery);
    $oj$$45$$.$Assert$.$assertPrototype$($el2$$1$$, jQuery);
    for (var $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !1), $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !1), $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length), $i$$388$$ = 0;$i$$388$$ < $maxLen$$;$i$$388$$++) {
      var $c$$47_e1$$ = $i$$388$$ < $n1$$2$$.length ? $n1$$2$$[$i$$388$$].weight : [-1], $e2$$ = $i$$388$$ < $n2$$2$$.length ? $n2$$2$$[$i$$388$$].weight : [-1], $c$$47_e1$$ = $compareSets$$($c$$47_e1$$, $e2$$);
      if (0 !== $c$$47_e1$$) {
        return $c$$47_e1$$;
      }
    }
    $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !0);
    $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !0);
    $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length);
    for ($i$$388$$ = 0;$i$$388$$ < $maxLen$$;$i$$388$$++) {
      if ($c$$47_e1$$ = $i$$388$$ < $n1$$2$$.length ? $n1$$2$$[$i$$388$$].order : [-1], $e2$$ = $i$$388$$ < $n2$$2$$.length ? $n2$$2$$[$i$$388$$].order : [-1], $c$$47_e1$$ = $compareSets$$($c$$47_e1$$, $e2$$), 0 !== $c$$47_e1$$) {
        return $c$$47_e1$$;
      }
    }
    return 0;
  };
  $oj$$45$$.$ZOrderUtils$.$eatEvent$ = function $$oj$$45$$$$ZOrderUtils$$$eatEvent$$($event$$508$$) {
    $event$$508$$.stopPropagation();
    $event$$508$$.preventDefault();
  };
  $oj$$45$$.$ZOrderUtils$.$_EVENTS_DATA$ = "oj-popup-events";
  $oj$$45$$.$ZOrderUtils$.$_MODALITY_DATA$ = "oj-popup-modality";
  $oj$$45$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$ = "__oj_zorder_container";
  $oj$$45$$.$ZOrderUtils$.$_SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$45$$.$ZOrderUtils$.$_OVERLAY_ATTR$ = "data-oj-overlayid";
  $oj$$45$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$ = "oj-component-overlay";
  $$$$41$$.widget("oj.surrogate", {options:{create:null, beforeDestroy:null}, _create:function() {
    this._super();
    this.element.uniqueId();
  }, _destroy:function() {
    this._trigger("beforeDestroy");
    this.element.removeUniqueId();
    this._super();
  }});
  $oj$$45$$.$SimpleTapRecognizer$ = function $$oj$$45$$$$SimpleTapRecognizer$$($tapCallback$$) {
    this.$_tapCallback$ = $tapCallback$$;
    this.Init();
  };
  $oj$$45$$.$Object$.$createSubclass$($oj$$45$$.$SimpleTapRecognizer$, $oj$$45$$.$Object$, "oj.SimpleTapRecognizer");
  $oj$$45$$.$SimpleTapRecognizer$.prototype.Init = function $$oj$$45$$$$SimpleTapRecognizer$$$Init$() {
    $oj$$45$$.$SimpleTapRecognizer$.$superclass$.Init.call(this);
    for (var $eventHandlerCallback$$ = this.$_eventHandlerCallback$ = $$$$41$$.proxy(this.$_eventHandler$, this), $docElement$$1$$ = document.documentElement, $i$$391$$ = 0;$i$$391$$ < $oj$$45$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$391$$++) {
      $docElement$$1$$.addEventListener($oj$$45$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$391$$], $eventHandlerCallback$$, !0);
    }
  };
  $oj$$45$$.$SimpleTapRecognizer$.prototype.$_eventHandler$ = function $$oj$$45$$$$SimpleTapRecognizer$$$$_eventHandler$$($event$$509$$) {
    var $tapCallback$$1$$ = this.$_tapCallback$, $eventType$$53$$ = $event$$509$$.type;
    "touchstart" === $eventType$$53$$ ? this.$_touchStartEvent$ = $event$$509$$ : "touchmove" === $eventType$$53$$ || "touchcancel" === $eventType$$53$$ ? delete this.$_touchStartEvent$ : "touchend" === $eventType$$53$$ && (this.$_touchStartEvent$ && $tapCallback$$1$$(this.$_touchStartEvent$), delete this.$_touchStartEvent$);
  };
  $oj$$45$$.$SimpleTapRecognizer$.prototype.destroy = function $$oj$$45$$$$SimpleTapRecognizer$$$destroy$() {
    delete this.$_tapCallback$;
    var $eventHandlerCallback$$1$$ = this.$_eventHandlerCallback$;
    delete this.$_eventHandlerCallback$;
    for (var $docElement$$2$$ = document.documentElement, $i$$392$$ = 0;$i$$392$$ < $oj$$45$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$392$$++) {
      $docElement$$2$$.removeEventListener($oj$$45$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$392$$], $eventHandlerCallback$$1$$, !0);
    }
  };
  $oj$$45$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$ = ["touchstart", "touchmove", "touchcancel", "touchend"];
  $oj$$45$$.$PopupLiveRegion$ = function $$oj$$45$$$$PopupLiveRegion$$() {
    this.Init();
  };
  $oj$$45$$.$Object$.$createSubclass$($oj$$45$$.$PopupLiveRegion$, $oj$$45$$.$Object$, "oj.PopupLiveRegion");
  $oj$$45$$.$PopupLiveRegion$.prototype.Init = function $$oj$$45$$$$PopupLiveRegion$$$Init$() {
    $oj$$45$$.$PopupLiveRegion$.$superclass$.Init.call(this);
    isNaN($oj$$45$$.$PopupLiveRegion$.$_refCounter$) ? $oj$$45$$.$PopupLiveRegion$.$_refCounter$ = 1 : ++$oj$$45$$.$PopupLiveRegion$.$_refCounter$;
  };
  $oj$$45$$.$PopupLiveRegion$.prototype.destroy = function $$oj$$45$$$$PopupLiveRegion$$$destroy$() {
    if (!isNaN($oj$$45$$.$PopupLiveRegion$.$_refCounter$) && (--$oj$$45$$.$PopupLiveRegion$.$_refCounter$, 1 > $oj$$45$$.$PopupLiveRegion$.$_refCounter$)) {
      var $liveRegion$$2$$ = $$$$41$$("#" + $oj$$45$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$);
      0 < $liveRegion$$2$$.length && $liveRegion$$2$$.remove();
    }
  };
  $oj$$45$$.$PopupLiveRegion$.prototype.$announce$ = function $$oj$$45$$$$PopupLiveRegion$$$$announce$$($message$$35$$) {
    if (!$oj$$45$$.$StringUtils$.$isEmpty$($message$$35$$)) {
      var $liveRegion$$3$$ = $oj$$45$$.$PopupLiveRegion$.$_getLiveRegion$();
      $liveRegion$$3$$.children().remove();
      $$$$41$$("\x3cdiv\x3e").text($message$$35$$).appendTo($liveRegion$$3$$);
    }
  };
  $oj$$45$$.$PopupLiveRegion$.$_getLiveRegion$ = function $$oj$$45$$$$PopupLiveRegion$$$_getLiveRegion$$() {
    var $liveRegion$$4$$ = $$$$41$$("#" + $oj$$45$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$);
    0 === $liveRegion$$4$$.length && ($liveRegion$$4$$ = $$$$41$$("\x3cdiv\x3e"), $liveRegion$$4$$.attr({id:$oj$$45$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$, role:"log", "aria-live":"polite", "aria-relevant":"additions"}), $liveRegion$$4$$.addClass("oj-helper-hidden-accessible"), $liveRegion$$4$$.appendTo(document.body));
    return $liveRegion$$4$$;
  };
  $oj$$45$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$ = "__oj_popup_arialiveregion";
  $oj$$45$$.$PopupSkipLink$ = function $$oj$$45$$$$PopupSkipLink$$($sibling$$, $message$$36$$, $callback$$112$$, $id$$46$$) {
    $oj$$45$$.$Assert$.$assertPrototype$($sibling$$, jQuery);
    $oj$$45$$.$Assert$.$assertString$($message$$36$$);
    $oj$$45$$.$Assert$.$assertFunction$($callback$$112$$);
    $oj$$45$$.$Assert$.$assertStringOrNull$($id$$46$$);
    this.$_sibling$ = $sibling$$;
    this.$_message$ = $message$$36$$;
    this.$_callback$ = $callback$$112$$;
    this.$_id$ = $id$$46$$ ? $id$$46$$ : "";
    this.Init();
  };
  $oj$$45$$.$Object$.$createSubclass$($oj$$45$$.$PopupSkipLink$, $oj$$45$$.$Object$, "oj.PopupSkipLink");
  $oj$$45$$.$PopupSkipLink$.prototype.Init = function $$oj$$45$$$$PopupSkipLink$$$Init$() {
    $oj$$45$$.$PopupSkipLink$.$superclass$.Init.call(this);
    var $sibling$$1$$ = this.$_sibling$, $callback$$113$$ = this.$_callback$, $message$$37$$ = this.$_message$;
    delete this.$_message$;
    var $id$$47$$ = this.$_id$;
    delete this.$_id$;
    var $link$$2$$ = $$$$41$$("\x3ca\x3e").attr({tabindex:"-1", href:"#"});
    $oj$$45$$.$StringUtils$.$isEmpty$($id$$47$$) || $link$$2$$.attr("id", $id$$47$$);
    $link$$2$$.addClass("oj-helper-hidden-accessible");
    $link$$2$$.text($message$$37$$);
    $link$$2$$.insertAfter($sibling$$1$$);
    $link$$2$$.on("click", $callback$$113$$);
    $sibling$$1$$.data($oj$$45$$.$PopupSkipLink$.$_SKIPLINK_ATTR$, $link$$2$$);
  };
  $oj$$45$$.$PopupSkipLink$.prototype.destroy = function $$oj$$45$$$$PopupSkipLink$$$destroy$() {
    var $sibling$$2$$ = this.$_sibling$;
    delete this.$_sibling$;
    var $callback$$114$$ = this.$_callback$;
    delete this.$_callback$;
    if ($sibling$$2$$) {
      var $link$$3$$ = $sibling$$2$$.data($oj$$45$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $sibling$$2$$.removeData($oj$$45$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $link$$3$$ && ($link$$3$$.off("click", $callback$$114$$), $link$$3$$.remove());
    }
  };
  $oj$$45$$.$PopupSkipLink$.prototype.getLink = function $$oj$$45$$$$PopupSkipLink$$$getLink$() {
    var $sibling$$3$$ = this.$_sibling$, $link$$4$$;
    $sibling$$3$$ && ($link$$4$$ = $sibling$$3$$.data($oj$$45$$.$PopupSkipLink$.$_SKIPLINK_ATTR$));
    return $link$$4$$;
  };
  $oj$$45$$.$PopupSkipLink$.$_SKIPLINK_ATTR$ = "oj-skiplink";
  $oj$$45$$.$PositionUtils$ = {};
  $oj$$45$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$45$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$33$$, $isRtl$$6$$) {
    $oj$$45$$.$Assert$.$assertObject$($position$$33$$, "position");
    for (var $target$$96$$ = $$$$41$$.extend({}, $position$$33$$), $i$$393$$ = 0;$i$$393$$ < $oj$$45$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$393$$++) {
      var $propName$$5$$ = $oj$$45$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$393$$], $align$$ = $target$$96$$[$propName$$5$$];
      $align$$ && ($target$$96$$[$propName$$5$$] = $align$$.replace("start", $isRtl$$6$$ ? "right" : "left").replace("end", $isRtl$$6$$ ? "left" : "right").replace("\x3c", $isRtl$$6$$ ? "+" : "-").replace("\x3e", $isRtl$$6$$ ? "-" : "+"));
    }
    return $target$$96$$;
  };
  $oj$$45$$.$PositionUtils$.$normalizePositionOf$ = function $$oj$$45$$$$PositionUtils$$$normalizePositionOf$$($of$$, $launcher$$24$$, $event$$510$$) {
    return "event" === $of$$ ? $event$$510$$ : null == $of$$ || "launcher" === $of$$ ? $launcher$$24$$ : $of$$;
  };
  $oj$$45$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"];
  $oj$$45$$.$PositionUtils$.$isAligningPositionClipped$ = function $$oj$$45$$$$PositionUtils$$$isAligningPositionClipped$$() {
    return!1;
  };
  $$$$41$$.ui.position.flipcenter = {left:function $$$$$41$$$ui$position$flipcenter$left$($position$$34$$, $data$$158$$) {
    var $posLeft$$ = $position$$34$$.left;
    $$$$41$$.ui.position.flip.left.call(this, $position$$34$$, $data$$158$$);
    var $overRight_within$$ = $data$$158$$.within, $dirFactor_withinOffset$$ = $overRight_within$$.isWindow ? $overRight_within$$.scrollLeft : $overRight_within$$.offset.left, $collisionPosLeft$$ = $position$$34$$.left - $data$$158$$.collisionPosition.marginLeft, $overRight_within$$ = $collisionPosLeft$$ + $data$$158$$.collisionWidth - $overRight_within$$.width - $dirFactor_withinOffset$$;
    if (0 < $dirFactor_withinOffset$$ - $collisionPosLeft$$ || 0 < $overRight_within$$) {
      "right" === $data$$158$$.at[0] ? $posLeft$$ -= $data$$158$$.targetWidth / 2 : "left" === $data$$158$$.at[0] && ($posLeft$$ += $data$$158$$.targetWidth / 2), $dirFactor_withinOffset$$ = "rtl" === $oj$$45$$.$DomUtils$.$getReadingDirection$() ? -1 : 1, $posLeft$$ -= $data$$158$$.elemWidth / 2 * $dirFactor_withinOffset$$, $position$$34$$.left = $posLeft$$;
    }
  }, top:function $$$$$41$$$ui$position$flipcenter$top$($position$$35$$, $data$$159$$) {
    var $posTop$$ = $position$$35$$.top;
    $$$$41$$.ui.position.flip.top.call(this, $position$$35$$, $data$$159$$);
    var $within$$1_withinOffset$$1$$ = $data$$159$$.within, $within$$1_withinOffset$$1$$ = $within$$1_withinOffset$$1$$.isWindow ? $within$$1_withinOffset$$1$$.scrollTop : $within$$1_withinOffset$$1$$.offset.top, $collisionPosTop$$ = $position$$35$$.top - $data$$159$$.collisionPosition.marginTop, $overBottom$$ = $collisionPosTop$$ + $data$$159$$.collisionHeight - $data$$159$$.within.height - $within$$1_withinOffset$$1$$;
    if (0 < $within$$1_withinOffset$$1$$ - $collisionPosTop$$ || 0 < $overBottom$$) {
      "top" === $data$$159$$.at[1] ? $posTop$$ += $data$$159$$.targetHeight / 2 : "bottom" === $data$$159$$.at[1] && ($posTop$$ -= $data$$159$$.targetHeight / 2), $posTop$$ += $data$$159$$.elemHeight / 2, $position$$35$$.top = $posTop$$;
    }
  }};
});
