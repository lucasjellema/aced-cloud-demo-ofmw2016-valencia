/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$27$$, $$$$26$$) {
  (function() {
    var $uid$$ = 0;
    $oj$$27$$.$__registerWidget$("oj.ojCollapsible", $$$$26$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, disabled:null, expandOn:"click", expandArea:"disclosureIcon", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
      this.$_initialRender$ = !0;
      var $elem$$59$$ = this.element[0];
      this.$_expandCollapseHandler$({type:this.options.expanded ? "ojexpand" : "ojcollapse", target:$elem$$59$$, currentTarget:$elem$$59$$, preventDefault:$$$$26$$.noop});
      this.$_initialRender$ = void 0;
    }, $_NotifyContextMenuGesture$:function($menu$$14$$, $event$$332$$, $eventType$$47$$) {
      this.$_OpenContextMenu$($event$$332$$, $eventType$$47$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, $_createIcons$:function() {
      var $icon$$3$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      (this.$_isDisabled$() ? $$$$26$$("\x3cspan\x3e") : $$$$26$$("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon-nocontext oj-collapsible-header-icon " + $icon$$3$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && ($oj$$27$$.$DomUtils$.unwrap(this.content), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled");
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, _setOption:function($key$$140$$, $value$$239$$, $flags$$34$$) {
      "expanded" === $key$$140$$ ? $value$$239$$ !== this.options.expanded && this.$_setExpanded$($value$$239$$) : "disabled" === $key$$140$$ ? (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$239$$)) : "expandOn" === $key$$140$$ || "expandArea" === $key$$140$$ ? (this.$_tearDownEvents$(), this._super($key$$140$$, $value$$239$$, $flags$$34$$), this.$_setupEvents$()) : this._super($key$$140$$, $value$$239$$, $flags$$34$$);
    }, $_keydown$:function($event$$333$$) {
      if (!$event$$333$$.altKey && !$event$$333$$.ctrlKey) {
        var $keyCode$$18$$ = $$$$26$$.ui.keyCode;
        switch($event$$333$$.keyCode) {
          case $keyCode$$18$$.SPACE:
          ;
          case $keyCode$$18$$.ENTER:
            this.$_toggleHandler$($event$$333$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1);
    }, $_refresh$:function() {
      var $focusable$$2_header$$8$$ = this.header, $content$$20$$ = this.content, $options$$315$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $focusable$$2_header$$8$$.attr("id"), $contentId$$ = $content$$20$$.attr("id");
      $headerId$$ || $focusable$$2_header$$8$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$20$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$2_header$$8$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$2_header$$8$$.attr("role", "button").attr("aria-controls", $contentId$$).attr("aria-expanded", $options$$315$$.expanded);
      this.$_isDisabled$() && $focusable$$2_header$$8$$.attr("aria-disabled", "true");
      $options$$315$$.expanded ? $content$$20$$.removeAttr("aria-hidden") : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$20$$.attr("aria-hidden", "true"));
      this.$_setupEvents$();
    }, $_setExpanded$:function($expanded$$12$$) {
      $expanded$$12$$ ? this.expand(!0) : this.collapse(!0);
    }, $_setupEvents$:function() {
      var $events$$3$$ = {keydown:this.$_keydown$}, $event$$334_expandArea$$ = this.options.expandOn;
      if ($event$$334_expandArea$$) {
        var $self$$137$$ = this;
        $$$$26$$.each($event$$334_expandArea$$.split(" "), function($index$$211$$, $eventName$$1$$) {
          $oj$$27$$.$DomUtils$.$isValidIdentifier$($eventName$$1$$) && ($events$$3$$[$eventName$$1$$] = $self$$137$$.$_toggleHandler$);
        });
      }
      $event$$334_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$334_expandArea$$, $events$$3$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($event$$334_expandArea$$), this._focusable($event$$334_expandArea$$), this.$_activeable$($event$$334_expandArea$$));
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$335$$) {
      this.$_isDisabled$() || (this.options.expanded ? this.collapse(!0, $event$$335$$) : this.expand(!0, $event$$335$$), $event$$335$$.preventDefault(), $event$$335$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus());
    }, $_expandCollapseHandler$:function($event$$336$$) {
      if (!this.$_isDisabled$() && $event$$336$$.target === this.element[0] && (this.$_initialRender$ || !$event$$336$$.isDefaultPrevented())) {
        var $element$$104$$ = this.element, $options$$316$$ = this.options, $content$$21$$ = this.content, $wrapper$$ = this.$wrapper$, $isExpanded$$ = "ojexpand" === $event$$336$$.type;
        $event$$336$$.preventDefault();
        this.$_initialRender$ ? ($options$$316$$.expanded = $isExpanded$$) ? ($element$$104$$.removeClass("oj-collapsed"), $element$$104$$.addClass("oj-expanded"), $oj$$27$$.Components.$subtreeShown$($wrapper$$[0])) : ($element$$104$$.removeClass("oj-expanded"), $element$$104$$.addClass("oj-collapsed"), $wrapper$$.css("max-height", 0), $wrapper$$.hide(), $oj$$27$$.Components.$subtreeHidden$($wrapper$$[0])) : (this.$_changeExpandedOption$($isExpanded$$, $event$$336$$), $wrapper$$.$contentHeight$ = 
        $wrapper$$.outerHeight(), $isExpanded$$ ? ($wrapper$$.show(), setTimeout(function() {
          $wrapper$$.$contentHeight$ += $content$$21$$.outerHeight();
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$.$contentHeight$});
          $element$$104$$.removeClass("oj-collapsed");
          $element$$104$$.addClass("oj-expanded");
          $oj$$27$$.Components.$subtreeShown$($wrapper$$[0]);
        }, 1)) : ($wrapper$$.removeClass("oj-collapsible-transition"), $wrapper$$.css({"max-height":$wrapper$$.$contentHeight$, "overflow-y":"hidden"}), setTimeout(function() {
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$104$$.removeClass("oj-expanded");
          $element$$104$$.addClass("oj-collapsed");
          $oj$$27$$.Components.$subtreeHidden$($wrapper$$[0]);
        }, 10)));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", $isExpanded$$).toggleClass("oj-collapsible-close-icon", !$isExpanded$$ || !1).end();
        $isExpanded$$ ? this.content.removeAttr("aria-hidden") : this.content.attr("aria-hidden", "true");
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", $isExpanded$$);
      }
    }, $_focusHandler$:function($event$$337$$) {
      if (this.$_isDisabled$()) {
        return null;
      }
      "ojfocusout" == $event$$337$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$337$$.preventDefault(), $event$$337$$.stopPropagation()) : "ojfocus" == $event$$337$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$337$$.preventDefault(), $event$$337$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_findFocusables$:function($start$$48$$) {
      return this.$_isDisabled$() ? $start$$48$$.find("span") : $start$$48$$.find("a,:input");
    }, expand:function($vetoable$$4$$, $event$$338$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$14$$ = {header:this.header, content:this.content};
        $vetoable$$4$$ && !1 === this._trigger("beforeExpand", $event$$338$$, $eventData$$14$$) || this._trigger("expand", $event$$338$$, $eventData$$14$$);
      }
    }, collapse:function($vetoable$$5$$, $event$$339$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$15$$ = {header:this.header, content:this.content};
        $vetoable$$5$$ && !1 === this._trigger("beforeCollapse", $event$$339$$, $eventData$$15$$) || this._trigger("collapse", $event$$339$$, $eventData$$15$$);
      }
    }, $_transitionEndHandler$:function($event$$340$$) {
      this.$_isDisabled$() || ("max-height" == ($event$$340$$.originalEvent ? $event$$340$$.originalEvent.propertyName : null) && ($event$$340$$.preventDefault(), $event$$340$$.stopPropagation()), this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide(), this.$wrapper$.removeClass("oj-collapsible-transition"));
    }, $_changeExpandedOption$:function($value$$240$$, $originalEvent$$1$$) {
      this.option("expanded", $value$$240$$, {_context:{originalEvent:$originalEvent$$1$$, $writeback$:!0, $internalSet$:!0}});
    }, getNodeBySubId:function($locator$$34_subId$$34$$) {
      if (null == $locator$$34_subId$$34$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$34_subId$$34$$ = $locator$$34_subId$$34$$.subId;
      switch($locator$$34_subId$$34$$) {
        case "oj-collapsible-content":
          return this.content[0];
        case "oj-collapsible-header":
          return this.header[0];
        case "oj-collapsible-header-icon":
          return this.header.find("." + $locator$$34_subId$$34$$)[0];
      }
      return null;
    }});
  })();
});
