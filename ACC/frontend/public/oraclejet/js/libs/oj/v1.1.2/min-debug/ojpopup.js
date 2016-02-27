/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$44$$, $$$$40$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-center oj-bottom", "center-bottom":"oj-center oj-bottom"};
    $oj$$44$$.$__registerWidget$("oj.ojPopup", $$$$40$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"none", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$1$$ = $$$$40$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$1$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$1$$.addClass("oj-component");
      var $content$$24$$ = $$$$40$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$24$$.attr("role", "presentation");
      $content$$24$$.appendTo($rootElement$$1$$);
      this.element.after($rootElement$$1$$);
      this.element.appendTo($content$$24$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$40$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this.isOpen() && this.$_closeImplicitly$();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      delete this.$_popupServiceEvents$;
      $oj$$44$$.$DomUtils$.unwrap(this.element, this.$_rootElement$);
      this.element.hide();
      var $closeDelayTimer$$2$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$2$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$2$$));
      this.$_destroyVoiceOverAssist$();
      this._super();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$10$$, $position$$26$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$10$$);
      var $rootElement$$2$$ = this.$_rootElement$;
      $launcher$$10$$ = this.$_launcher$;
      $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$2$$, jQuery);
      $oj$$44$$.$Assert$.$assertPrototype$($launcher$$10$$, jQuery);
      $oj$$44$$.$StringUtils$.$isEmptyOrUndefined$($rootElement$$2$$.attr("id")) && $rootElement$$2$$.attr("id", this.$_getSubId$("wrapper"));
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$26$$);
        var $options$$361_psOptions$$7_tailDecoration$$ = this.options;
        this.$_setAutoDismiss$($options$$361_psOptions$$7_tailDecoration$$.autoDismiss);
        this.$_addDescribedBy$();
        $rootElement$$2$$.attr("role", "tooltip");
        $position$$26$$ = $options$$361_psOptions$$7_tailDecoration$$.position;
        var $isRtl$$3_layerClass$$ = "rtl" === this.$_GetReadingDirection$();
        $position$$26$$ = $oj$$44$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$26$$, $isRtl$$3_layerClass$$);
        $isRtl$$3_layerClass$$ = "oj-popup-layer";
        $options$$361_psOptions$$7_tailDecoration$$ = $options$$361_psOptions$$7_tailDecoration$$.tail;
        "none" !== $options$$361_psOptions$$7_tailDecoration$$ && ($isRtl$$3_layerClass$$ += " " + ["oj-popup-tail", $options$$361_psOptions$$7_tailDecoration$$].join("-"));
        $options$$361_psOptions$$7_tailDecoration$$ = {};
        $options$$361_psOptions$$7_tailDecoration$$[$oj$$44$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$2$$;
        $options$$361_psOptions$$7_tailDecoration$$[$oj$$44$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$10$$;
        $options$$361_psOptions$$7_tailDecoration$$[$oj$$44$$.$PopupService$.$OPTION$.$POSITION$] = $position$$26$$;
        $options$$361_psOptions$$7_tailDecoration$$[$oj$$44$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
        $options$$361_psOptions$$7_tailDecoration$$[$oj$$44$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = $isRtl$$3_layerClass$$;
        $oj$$44$$.$PopupService$.$getInstance$().open($options$$361_psOptions$$7_tailDecoration$$);
        this._trigger("open");
        this.$_intialFocus$();
        this.$_initVoiceOverAssist$();
        this._on($rootElement$$2$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
        $launcher$$10$$ && 0 < $launcher$$10$$.length && this._on($launcher$$10$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
      }
    }, close:function() {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose") || this.$_ignoreBeforeCloseResultant$)) {
        this.$_restoreFocus$();
        var $launcher$$11_psOptions$$8$$ = this.$_launcher$, $position$$27_rootElement$$3$$ = this.$_rootElement$;
        $oj$$44$$.$Assert$.$assertPrototype$($position$$27_rootElement$$3$$, jQuery);
        $oj$$44$$.$Assert$.$assertPrototype$($launcher$$11_psOptions$$8$$, jQuery);
        this._off($position$$27_rootElement$$3$$, "keydown keyup");
        $launcher$$11_psOptions$$8$$ && 0 < $launcher$$11_psOptions$$8$$.length && this._off($launcher$$11_psOptions$$8$$, "keydown keyup");
        this.$_destroyVoiceOverAssist$();
        $launcher$$11_psOptions$$8$$ = {};
        $launcher$$11_psOptions$$8$$[$oj$$44$$.$PopupService$.$OPTION$.$POPUP$] = $position$$27_rootElement$$3$$;
        $oj$$44$$.$PopupService$.$getInstance$().close($launcher$$11_psOptions$$8$$);
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        delete this.$_launcher$;
        $position$$27_rootElement$$3$$ = this.options.position;
        $position$$27_rootElement$$3$$._ofo && (delete $position$$27_rootElement$$3$$._ofo, delete $position$$27_rootElement$$3$$.of);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, refresh:function() {
      this._super();
      this.isOpen() && this.$_reposition$();
      var $rootElement$$4$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$4$$, jQuery);
      $oj$$44$$.$PopupService$.$getInstance$().$triggerOnDescendents$($rootElement$$4$$, $oj$$44$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($key$$151$$, $value$$265$$) {
      var $options$$362$$ = this.options;
      switch($key$$151$$) {
        case "tail":
          $value$$265$$ !== $options$$362$$.tail && this.$_setTail$($value$$265$$);
          break;
        case "chrome":
          $value$$265$$ !== $options$$362$$.chrome && this.$_setChrome$($value$$265$$);
          break;
        case "position":
          this.$_setPosition$($value$$265$$);
          this.refresh();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$265$$ !== $options$$362$$.autoDismiss && this.$_setAutoDismiss$($value$$265$$);
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_reposition$();
    }, $_createTail$:function($tail$$1_tailDecoration$$1_tailStyle$$) {
      $tail$$1_tailDecoration$$1_tailStyle$$ = $tail$$1_tailDecoration$$1_tailStyle$$ ? $tail$$1_tailDecoration$$1_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration$$1_tailStyle$$) {
        $tail$$1_tailDecoration$$1_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration$$1_tailStyle$$].join("-");
        var $options$$363_tailDom$$ = $$$$40$$("\x3cdiv\x3e").hide();
        $options$$363_tailDom$$.addClass("oj-popup-tail").addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        $options$$363_tailDom$$.attr("role", "presentation");
        this.$_tailId$ = "#" + $options$$363_tailDom$$.attr("id", this.$_getSubId$("tail")).attr("id");
        var $rootElement$$5$$ = this.$_rootElement$;
        $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$5$$, jQuery);
        $options$$363_tailDom$$.appendTo($rootElement$$5$$);
        $rootElement$$5$$.addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        this.isOpen() && ($options$$363_tailDom$$ = {}, $options$$363_tailDom$$[$oj$$44$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$5$$, $options$$363_tailDom$$[$oj$$44$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer " + $tail$$1_tailDecoration$$1_tailStyle$$, $oj$$44$$.$PopupService$.$getInstance$().$changeOptions$($options$$363_tailDom$$));
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$40$$($tailId$$) : null;
    }, $_destroyTail$:function() {
      var $rootElement$$6_tail$$2$$ = this.$_getTail$();
      $rootElement$$6_tail$$2$$ && $rootElement$$6_tail$$2$$.remove();
      delete this.$_tailId$;
      var $options$$364_tailStyle$$1$$ = ["oj-popup-tail", this.options.tail].join("-"), $rootElement$$6_tail$$2$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$6_tail$$2$$, jQuery);
      $rootElement$$6_tail$$2$$.removeClass($options$$364_tailStyle$$1$$);
      this.isOpen() && ($options$$364_tailStyle$$1$$ = {}, $options$$364_tailStyle$$1$$[$oj$$44$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$6_tail$$2$$, $options$$364_tailStyle$$1$$[$oj$$44$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer", $oj$$44$$.$PopupService$.$getInstance$().$changeOptions$($options$$364_tailStyle$$1$$));
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$7$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$7$$, jQuery);
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$7$$.hasClass("oj-popup-no-chrome") ? $rootElement$$7$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$7$$.hasClass("oj-popup-no-chrome") || $rootElement$$7$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$12$$) {
      $launcher$$12$$ ? "string" === $$$$40$$.type($launcher$$12$$) ? $launcher$$12$$ = $$$$40$$($launcher$$12$$) : 1 === $launcher$$12$$.nodeType && ($launcher$$12$$ = $$$$40$$($launcher$$12$$)) : $launcher$$12$$ = $$$$40$$(document.activeElement);
      if ($launcher$$12$$ instanceof jQuery && 1 < $launcher$$12$$.length) {
        var $rootElement$$8$$ = this.$_rootElement$;
        $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$8$$, jQuery);
        for (var $i$$383$$ = 0;$i$$383$$ < $launcher$$12$$.length;$i$$383$$++) {
          var $target$$92$$ = $launcher$$12$$[0];
          if (!$oj$$44$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$8$$[0], $target$$92$$)) {
            $launcher$$12$$ = $$$$40$$($target$$92$$);
            break;
          }
        }
      } else {
        if (!($launcher$$12$$ instanceof jQuery) || $launcher$$12$$ instanceof jQuery && 0 === $launcher$$12$$.length) {
          $launcher$$12$$ = $$$$40$$(document.activeElement);
        }
      }
      $oj$$44$$.$Assert$.$assertPrototype$($launcher$$12$$, jQuery);
      this.$_launcher$ = $launcher$$12$$;
    }, $_setPosition$:function($position$$28$$) {
      var $launcher$$13_options$$365_usingCallback$$1$$ = this.options;
      $position$$28$$ && ($launcher$$13_options$$365_usingCallback$$1$$.position = $$$$40$$.extend($launcher$$13_options$$365_usingCallback$$1$$[$position$$28$$], $position$$28$$));
      $position$$28$$ = $launcher$$13_options$$365_usingCallback$$1$$.position;
      $launcher$$13_options$$365_usingCallback$$1$$ = this.$_usingCallback$;
      $oj$$44$$.$Assert$.$assertFunction$($launcher$$13_options$$365_usingCallback$$1$$);
      $$$$40$$.isFunction($position$$28$$.using) && $position$$28$$.using !== $launcher$$13_options$$365_usingCallback$$1$$ && ($position$$28$$.origUsing = $position$$28$$.using);
      $position$$28$$.using = $launcher$$13_options$$365_usingCallback$$1$$;
      $launcher$$13_options$$365_usingCallback$$1$$ = this.$_launcher$;
      $oj$$44$$.$Assert$.$assertPrototype$($launcher$$13_options$$365_usingCallback$$1$$, jQuery);
      $position$$28$$.of || ($position$$28$$.of = $launcher$$13_options$$365_usingCallback$$1$$, $position$$28$$._ofo = !0);
    }, $_usingHandler$:function($pos$$12$$, $props$$20$$) {
      var $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ = $props$$20$$.element.element;
      $oj$$44$$.$Assert$.$assertPrototype$($leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$, jQuery);
      var $origUsing$$1_tail$$3$$ = this.$_getTail$();
      if ($origUsing$$1_tail$$3$$) {
        $origUsing$$1_tail$$3$$.hide();
        for (var $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$++) {
          $origUsing$$1_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]);
        }
        $origUsing$$1_tail$$3$$.removeAttr("style");
        if ($props$$20$$.target && 0 === $props$$20$$.target.height && 0 === $props$$20$$.target.width && ($i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = "rtl" === this.$_GetReadingDirection$(), $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $oj$$44$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$).my, !$oj$$44$$.$StringUtils$.$isEmptyOrUndefined$($i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$))) {
          var $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.split(" "), $suggestedHrule$$ = $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[0], $suggestedVrule$$ = "middle";
          1 < $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.length && ($suggestedVrule$$ = "center" === $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1] ? "middle" : $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1]);
          $props$$20$$.horizontal = $suggestedHrule$$;
          $props$$20$$.vertical = $suggestedVrule$$;
        }
        $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$20$$.horizontal, $props$$20$$.vertical].join("-")];
        $oj$$44$$.$Assert$.$assertString$($i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing$$1_tail$$3$$.addClass($i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$.addClass($i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing$$1_tail$$3$$.show();
        "left" === $props$$20$$.horizontal || "right" === $props$$20$$.horizontal ? ($i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing$$1_tail$$3$$.outerWidth() - 1) * ("left" === $props$$20$$.horizontal ? 1 : -1), $pos$$12$$.left += $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$) : "center" === $props$$20$$.horizontal && ($i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing$$1_tail$$3$$.outerHeight() - 1) * 
        ("top" === $props$$20$$.vertical ? 1 : -1), $pos$$12$$.top += $i$$384_isRtl$$4_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$.css($pos$$12$$);
        "center" === $props$$20$$.horizontal ? ($leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing$$1_tail$$3$$.outerWidth() / 2) / $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ * 100), $origUsing$$1_tail$$3$$.css({left:$leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ + 
        "%"})) : "middle" === $props$$20$$.vertical && ($leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing$$1_tail$$3$$.outerHeight() / 2) / $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ * 100), $origUsing$$1_tail$$3$$.css({top:$leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$ + 
        "%"}));
      } else {
        $leftPercent_rootElement$$9_rootHeight_rootWidth_topPercent$$.css($pos$$12$$);
      }
      ($origUsing$$1_tail$$3$$ = this.options.position.origUsing) && $origUsing$$1_tail$$3$$($pos$$12$$, $props$$20$$);
    }, $_reposition$:function() {
      var $rootElement$$10$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$10$$, jQuery);
      var $position$$30$$ = this.options.position;
      $oj$$44$$.$Assert$.$assertObject$($position$$30$$);
      var $isRtl$$5$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$10$$.position($oj$$44$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$30$$, $isRtl$$5$$));
    }, $_intialFocus$:function($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$) {
      var $options$$367$$ = this.options;
      if ($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$ || "none" !== $options$$367$$.initialFocus) {
        if ($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$ || "firstFocusable" === $options$$367$$.initialFocus) {
          $first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$ = this.element.find(":focusable"), 0 < $first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$.length ? ($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$ = $first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$[0], $oj$$44$$.$Assert$.$assertDomElement$($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$), $$$$40$$($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$).focus()) : ($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$ = 
          this.$_rootElement$, $oj$$44$$.$Assert$.$assertPrototype$($first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$, jQuery), $first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$.attr("tabindex", "-1"), $first$$10_nodes$$1_rootElement$$11_skipOptionCheck$$.focus()), this._trigger("focus");
        }
      }
    }, $_isFocusInPopup$:function($activeElement$$2$$, $includeChildren$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      $oj$$44$$.$Assert$.$assertDomElement$($activeElement$$2$$);
      if (!$activeElement$$2$$) {
        return!1;
      }
      var $rootElement$$12$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($rootElement$$12$$, jQuery);
      $includeChildren$$ && ($rootElement$$12$$ = $rootElement$$12$$.parent());
      return $oj$$44$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$12$$[0], $activeElement$$2$$);
    }, $_isFocusInLauncher$:function($activeElement$$3$$) {
      $activeElement$$3$$ || ($activeElement$$3$$ = document.activeElement);
      $oj$$44$$.$Assert$.$assertDomElement$($activeElement$$3$$);
      var $launcher$$14$$ = this.$_launcher$;
      $oj$$44$$.$Assert$.$assertPrototype$($launcher$$14$$, jQuery);
      return $oj$$44$$.$DomUtils$.$isAncestorOrSelf$($launcher$$14$$[0], $activeElement$$3$$);
    }, $_restoreFocus$:function() {
      if (this.$_ignoreRestoreFocus$) {
        delete this.$_ignoreRestoreFocus$;
      } else {
        if (this.$_isFocusInPopup$(null, !0)) {
          var $launcher$$15$$ = this.$_launcher$;
          $oj$$44$$.$Assert$.$assertPrototype$($launcher$$15$$, jQuery);
          $launcher$$15$$.focus();
        }
      }
    }, $_keyHandler$:function($event$$499_launcher$$16$$) {
      if (!$event$$499_launcher$$16$$.isDefaultPrevented()) {
        var $eventType$$51_firstNode$$ = $event$$499_launcher$$16$$.type, $target$$93$$ = $event$$499_launcher$$16$$.target;
        $oj$$44$$.$Assert$.$assertDomElement$($target$$93$$);
        if ("keyup" === $eventType$$51_firstNode$$ && $event$$499_launcher$$16$$.keyCode === $$$$40$$.ui.keyCode.ESCAPE && (this.$_isFocusInPopup$($target$$93$$) || this.$_isFocusInLauncher$($target$$93$$))) {
          $event$$499_launcher$$16$$.preventDefault(), this.close();
        } else {
          if ("keydown" === $eventType$$51_firstNode$$ && 117 === $event$$499_launcher$$16$$.keyCode) {
            this.$_isFocusInPopup$($target$$93$$) ? ($event$$499_launcher$$16$$.preventDefault(), $event$$499_launcher$$16$$ = this.$_launcher$, $oj$$44$$.$Assert$.$assertPrototype$($event$$499_launcher$$16$$, jQuery), $event$$499_launcher$$16$$.focus()) : this.$_isFocusInLauncher$($target$$93$$) && ($event$$499_launcher$$16$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if ("keydown" === $eventType$$51_firstNode$$ && $event$$499_launcher$$16$$.keyCode === $$$$40$$.ui.keyCode.TAB && this.$_isFocusInPopup$($target$$93$$)) {
              var $lastNode$$1_nodes$$2$$ = this.element.find(":tabbable");
              0 < $lastNode$$1_nodes$$2$$.length ? ($eventType$$51_firstNode$$ = $lastNode$$1_nodes$$2$$[0], $oj$$44$$.$Assert$.$assertDomElement$($eventType$$51_firstNode$$), $lastNode$$1_nodes$$2$$ = $lastNode$$1_nodes$$2$$[$lastNode$$1_nodes$$2$$.length - 1], $oj$$44$$.$Assert$.$assertDomElement$($lastNode$$1_nodes$$2$$), $eventType$$51_firstNode$$ === $target$$93$$ && $event$$499_launcher$$16$$.shiftKey ? ($event$$499_launcher$$16$$.preventDefault(), $$$$40$$($lastNode$$1_nodes$$2$$).focus()) : 
              $lastNode$$1_nodes$$2$$ !== $target$$93$$ || $event$$499_launcher$$16$$.shiftKey || ($event$$499_launcher$$16$$.preventDefault(), $$$$40$$($eventType$$51_firstNode$$).focus())) : ($event$$499_launcher$$16$$.preventDefault(), $event$$499_launcher$$16$$ = this.$_launcher$, $oj$$44$$.$Assert$.$assertPrototype$($event$$499_launcher$$16$$, jQuery), $event$$499_launcher$$16$$.focus());
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss_rootElement$$13$$) {
      var $focusLossCallback_options$$368$$ = this.$_focusLossCallback$, $events$$6$$ = this.$_getPopupServiceEvents$();
      $focusLossCallback_options$$368$$ && (delete $events$$6$$[$oj$$44$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$], delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss_rootElement$$13$$ && ($focusLossCallback_options$$368$$ = this.$_focusLossCallback$ = $$$$40$$.proxy(this.$_dismissalHandler$, this), $events$$6$$[$oj$$44$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $focusLossCallback_options$$368$$);
      this.isOpen() && ($autoDismiss_rootElement$$13$$ = this.$_rootElement$, $oj$$44$$.$Assert$.$assertPrototype$($autoDismiss_rootElement$$13$$, jQuery), $focusLossCallback_options$$368$$ = {}, $focusLossCallback_options$$368$$[$oj$$44$$.$PopupService$.$OPTION$.$POPUP$] = $autoDismiss_rootElement$$13$$, $focusLossCallback_options$$368$$[$oj$$44$$.$PopupService$.$OPTION$.$EVENTS$] = $events$$6$$, $oj$$44$$.$PopupService$.$getInstance$().$changeOptions$($focusLossCallback_options$$368$$));
    }, $_dismissalHandler$:function($event$$500$$) {
      var $launcher$$17$$ = this.$_launcher$, $layer_rootElement$$14$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($launcher$$17$$, jQuery);
      $oj$$44$$.$Assert$.$assertPrototype$($layer_rootElement$$14$$, jQuery);
      var $layer_rootElement$$14$$ = $layer_rootElement$$14$$.parent(), $target$$94$$ = $event$$500$$.target;
      $oj$$44$$.$Assert$.$assertDomElement$($target$$94$$);
      var $focusSkipLink_link$$1$$ = this.$_focusSkipLink$;
      if ($focusSkipLink_link$$1$$ && ($focusSkipLink_link$$1$$ = $focusSkipLink_link$$1$$.getLink()) && $oj$$44$$.$DomUtils$.$isAncestorOrSelf$($focusSkipLink_link$$1$$[0], $target$$94$$)) {
        return;
      }
      if (!$oj$$44$$.$DomUtils$.$isAncestorOrSelf$($launcher$$17$$[0], $target$$94$$) && !$oj$$44$$.$DomUtils$.$isAncestorOrSelf$($layer_rootElement$$14$$[0], $target$$94$$)) {
        if ($$$$40$$($target$$94$$).is(":focusable")) {
          if ("mousedown" === $event$$500$$.type || "touchstart" === $event$$500$$.type) {
            return;
          }
          this.$_ignoreRestoreFocus$ = !0;
        }
        this.close();
      }
    }, $_addDescribedBy$:function() {
      var $launcher$$18$$ = this.$_launcher$, $popupId_rootElement$$15$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($launcher$$18$$, jQuery);
      $oj$$44$$.$Assert$.$assertPrototype$($popupId_rootElement$$15$$, jQuery);
      var $popupId_rootElement$$15$$ = $popupId_rootElement$$15$$.attr("id"), $describedby$$2_tokens$$5$$ = $launcher$$18$$.attr("aria-describedby"), $describedby$$2_tokens$$5$$ = $describedby$$2_tokens$$5$$ ? $describedby$$2_tokens$$5$$.split(/\s+/) : [];
      $describedby$$2_tokens$$5$$.push($popupId_rootElement$$15$$);
      $describedby$$2_tokens$$5$$ = $$$$40$$.trim($describedby$$2_tokens$$5$$.join(" "));
      $launcher$$18$$.attr("aria-describedby", $describedby$$2_tokens$$5$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$19$$ = this.$_launcher$, $index$$236_popupId$$1_rootElement$$16$$ = this.$_rootElement$;
      $oj$$44$$.$Assert$.$assertPrototype$($launcher$$19$$, jQuery);
      $oj$$44$$.$Assert$.$assertPrototype$($index$$236_popupId$$1_rootElement$$16$$, jQuery);
      var $index$$236_popupId$$1_rootElement$$16$$ = $index$$236_popupId$$1_rootElement$$16$$.attr("id"), $describedby$$3_tokens$$6$$ = $launcher$$19$$.attr("aria-describedby"), $describedby$$3_tokens$$6$$ = $describedby$$3_tokens$$6$$ ? $describedby$$3_tokens$$6$$.split(/\s+/) : [], $index$$236_popupId$$1_rootElement$$16$$ = $$$$40$$.inArray($index$$236_popupId$$1_rootElement$$16$$, $describedby$$3_tokens$$6$$);
      -1 !== $index$$236_popupId$$1_rootElement$$16$$ && $describedby$$3_tokens$$6$$.splice($index$$236_popupId$$1_rootElement$$16$$, 1);
      ($describedby$$3_tokens$$6$$ = $$$$40$$.trim($describedby$$3_tokens$$6$$.join(" "))) ? $launcher$$19$$.attr("aria-describedby", $describedby$$3_tokens$$6$$) : $launcher$$19$$.removeAttr("aria-describedby");
    }, $_initVoiceOverAssist$:function() {
      var $callback$$108_isIOSVOSupported$$ = $oj$$44$$.$AgentUtils$.$getAgentInfo$().os === $oj$$44$$.$AgentUtils$.$OS$.$IOS$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_liveRegion$;
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_liveRegion$ = new $oj$$44$$.$PopupLiveRegion$);
      var $message$$34$$;
      $message$$34$$ = $callback$$108_isIOSVOSupported$$ ? this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNoneTouch" : "ariaLiveRegionInitialFocusFirstFocusableTouch") : this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$.$announce$($message$$34$$);
      if ($callback$$108_isIOSVOSupported$$) {
        if (!this.$_focusSkipLink$) {
          var $closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_getSubId$("focusSkipLink"), $element$$114_launcher$$20$$ = this.$_launcher$, $callback$$108_isIOSVOSupported$$ = $$$$40$$.proxy(this.$_intialFocus$, this, !0);
          $message$$34$$ = this.$getTranslatedString$("ariaFocusSkipLink");
          this.$_focusSkipLink$ = new $oj$$44$$.$PopupSkipLink$($element$$114_launcher$$20$$, $message$$34$$, $callback$$108_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$);
        }
        this.$_closeSkipLink$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_getSubId$("closeSkipLink"), $element$$114_launcher$$20$$ = this.element, $callback$$108_isIOSVOSupported$$ = $$$$40$$.proxy(this.$_closeImplicitly$, this), $message$$34$$ = this.$getTranslatedString$("ariaCloseSkipLink"), this.$_closeSkipLink$ = new $oj$$44$$.$PopupSkipLink$($element$$114_launcher$$20$$, $message$$34$$, $callback$$108_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$));
      }
    }, $_destroyVoiceOverAssist$:function() {
      var $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ = this.$_liveRegion$;
      $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ && ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$.destroy(), delete this.$_liveRegion$);
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ = this.$_focusSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$.destroy(), delete this.$_focusSkipLink$;
      }
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ = this.$_closeSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$.destroy(), delete this.$_closeSkipLink$;
      }
    }, $_getSubId$:function($sub$$1$$) {
      var $id$$45$$ = this.element.attr("id");
      $oj$$44$$.$StringUtils$.$isEmptyOrUndefined$($id$$45$$) && ($id$$45$$ = this.uuid);
      return[$id$$45$$, $sub$$1$$].join("_");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$7$$ = this.$_popupServiceEvents$ = {};
        $events$$7$$[$oj$$44$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$40$$.proxy(this.$_closeImplicitly$, this);
        $events$$7$$[$oj$$44$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$40$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$7$$[$oj$$44$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$40$$.proxy(this.refresh, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
  })();
});
