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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$23$$, $$$$22$$) {
  (function() {
    $oj$$23$$.$__registerWidget$("oj.ojAccordion", $$$$22$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.options.expanded = this.$_expandedIndexToId$(this.options.expanded);
      this.$_refresh$();
    }, $_NotifyContextMenuGesture$:function($menu$$9$$, $event$$296$$, $eventType$$43$$) {
      this.$_OpenContextMenu$($event$$296$$, $eventType$$43$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$136$$, $value$$233$$, $flags$$30$$) {
      if ("multiple" === $key$$136$$) {
        !1 == $value$$233$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1);
      } else {
        if ("expanded" === $key$$136$$) {
          this.$_setExpandedOption$($value$$233$$);
          return;
        }
      }
      this._super($key$$136$$, $value$$233$$, $flags$$30$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_internalSetExpanded$ = !0;
      this._setOption("expanded", this.options.expanded);
      this.$_internalSetExpanded$ = !1;
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$22$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$collapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$2$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$collapsibles$);
      this._on(this.$collapsibles$, $events$$2$$);
    }, $_keydown$:function($event$$297$$) {
      if (!$event$$297$$.altKey && !$event$$297$$.ctrlKey && ($$$$22$$($event$$297$$.target).hasClass("oj-collapsible-header") || $$$$22$$($event$$297$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$17$$ = $$$$22$$.ui.keyCode, $enabledCollapsibles$$ = this.$collapsibles$.not(".oj-disabled"), $length$$15$$ = $enabledCollapsibles$$.length, $target$$85$$ = $$$$22$$($event$$297$$.target).closest(".oj-collapsible"), $currentIndex$$3$$ = $enabledCollapsibles$$.index($target$$85$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$3$$) {
          switch($event$$297$$.keyCode) {
            case $keyCode$$17$$.RIGHT:
            ;
            case $keyCode$$17$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$3$$ + 1) % $length$$15$$];
              break;
            case $keyCode$$17$$.LEFT:
            ;
            case $keyCode$$17$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$3$$ - 1 + $length$$15$$) % $length$$15$$];
              break;
            case $keyCode$$17$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$17$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$15$$ - 1];
          }
        }
        $toFocus$$ && ($target$$85$$ && $$$$22$$($target$$85$$).trigger("ojfocusout"), $$$$22$$($toFocus$$).trigger("ojfocus"), $event$$297$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$298$$) {
      return!this.options.multiple && ($closestCollapsible_event$$298$$ = $$$$22$$($closestCollapsible_event$$298$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$298$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$298$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$22$$(this).data("oj-ojCollapsible");
      }) : $$$$22$$();
    }, $_beforeExpandHandler$:function($event$$299$$) {
      if (!this.$_isTargetMyCollapsible$($event$$299$$)) {
        return!0;
      }
      var $result$$60$$, $self$$130$$ = this, $newData$$1$$;
      this.$_findTargetSiblings$($event$$299$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$1$$ = $self$$130$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$22$$($event$$299$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$60$$ = this._trigger("beforeCollapse", $event$$299$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$1$$ || ($newData$$1$$ = $self$$130$$.$_initEventData$(null, $$$$22$$($event$$299$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$299$$, $newData$$1$$);
      return $result$$60$$;
    }, $_expandHandler$:function($event$$300$$, $eventData$$9$$) {
      if (this.$_isTargetMyCollapsible$($event$$300$$) && !this.$_duringSetExpandedOption$) {
        var $newData$$2$$, $self$$131$$ = this;
        this.$_findTargetSiblings$($event$$300$$).each(function() {
          this.collapse(!1, $event$$300$$, $eventData$$9$$);
          $newData$$2$$ = $self$$131$$.$_initEventData$(this.element, $$$$22$$($event$$300$$.target));
        });
        $newData$$2$$ || ($newData$$2$$ = $self$$131$$.$_initEventData$(null, $$$$22$$($event$$300$$.target)));
        this.options.multiple || this._trigger("expand", $event$$300$$, $newData$$2$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$301$$, $eventData$$10$$) {
      return this.$_isTargetMyCollapsible$($event$$301$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$301$$, this.$_initCollapseEventData$($event$$301$$, $eventData$$10$$)) : !0;
    }, $_collapseHandler$:function($event$$302$$, $eventData$$11$$) {
      if (!this.$_duringSetExpandedOption$ && this.$_isTargetMyCollapsible$($event$$302$$)) {
        var $newData$$3$$ = this.$_initCollapseEventData$($event$$302$$, $eventData$$11$$);
        this.options.multiple || this._trigger("collapse", $event$$302$$, $newData$$3$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$303$$, $eventData$$13$$) {
      var $newData$$4$$;
      if ($eventData$$13$$.toCollapsible) {
        $newData$$4$$ = $eventData$$13$$;
      } else {
        if ($event$$303$$.originalEvent && $event$$303$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$22$$($event$$303$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$4$$ = this.$_initEventData$($$$$22$$($event$$303$$.target), $collapsible$$1$$));
        }
        $newData$$4$$ || ($newData$$4$$ = this.$_initEventData$($$$$22$$($event$$303$$.target), null));
      }
      return $newData$$4$$;
    }, $_isTargetMyCollapsible$:function($event$$304$$) {
      return $$$$22$$($event$$304$$.target).is(this.$collapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$9$$, $result$$61$$ = [];
      this.$collapsibles$.each(function($index$$203$$) {
        $$$$22$$(this).ojCollapsible("option", "expanded") && ($cid$$9$$ = $$$$22$$(this).attr("id"), $result$$61$$.push($cid$$9$$ ? $cid$$9$$ : $index$$203$$));
      });
      $oj$$23$$.$Object$.$_compareSet$(this.options.expanded, $result$$61$$) || this.option("expanded", $result$$61$$, {_context:{$internalSet$:!0, $writeback$:!0}});
    }, $_expandedIndexToId$:function($expanded$$10$$) {
      if (Array.isArray($expanded$$10$$)) {
        var $id$$35$$, $newExp$$ = [];
        this.element.children().each(function($index$$204$$) {
          ($id$$35$$ = $$$$22$$(this).attr("id")) ? -1 != $expanded$$10$$.indexOf($id$$35$$) ? $newExp$$.push($id$$35$$) : -1 != $expanded$$10$$.indexOf($index$$204$$) && $newExp$$.push($id$$35$$) : -1 != $expanded$$10$$.indexOf($index$$204$$) && $newExp$$.push($index$$204$$);
        });
        !this.options.multiple && 1 < $newExp$$.length && ($newExp$$ = [$newExp$$[$newExp$$.length - 1]]);
        return $newExp$$;
      }
      return null;
    }, $_setExpandedOption$:function($expanded$$11$$) {
      this.$_internalSetExpanded$ || ($expanded$$11$$ = this.$_expandedIndexToId$($expanded$$11$$));
      if ($expanded$$11$$) {
        var $self$$132$$ = this, $child$$6$$, $childId$$, $parentExp$$, $iexp$$ = 0;
        this.$collapsibles$.each(function($index$$205$$) {
          $child$$6$$ = $$$$22$$(this);
          $childId$$ = $child$$6$$.attr("id");
          $parentExp$$ = !1;
          $childId$$ ? $childId$$ == $expanded$$11$$[$iexp$$] && ($parentExp$$ = !0) : $index$$205$$ == $expanded$$11$$[$iexp$$] && ($parentExp$$ = !0);
          $parentExp$$ && $iexp$$++;
          $child$$6$$.ojCollapsible("option", "expanded") !== $parentExp$$ && ($oj$$23$$.$Logger$.warn("JET Accordion: override collapsible " + $index$$205$$ + " expanded setting"), $self$$132$$.$_duringSetExpandedOption$ = !0, $child$$6$$.ojCollapsible("option", "expanded", $parentExp$$), $self$$132$$.$_duringSetExpandedOption$ = !1);
        });
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_index$$206_locator$$30$$) {
      if (null == $collapsible$$2_index$$206_locator$$30$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$30$$ = $collapsible$$2_index$$206_locator$$30$$.subId;
      $collapsible$$2_index$$206_locator$$30$$ = $collapsible$$2_index$$206_locator$$30$$.index;
      if ("number" !== typeof $collapsible$$2_index$$206_locator$$30$$ || 0 > $collapsible$$2_index$$206_locator$$30$$ || $collapsible$$2_index$$206_locator$$30$$ >= this.$collapsibles$.length) {
        return null;
      }
      $collapsible$$2_index$$206_locator$$30$$ = this.$collapsibles$[$collapsible$$2_index$$206_locator$$30$$];
      switch($subId$$30$$) {
        case "oj-accordion-content":
          $subId$$30$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$30$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-header-icon":
          $subId$$30$$ = "oj-collapsible-header-icon";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_index$$206_locator$$30$$;
        default:
          return null;
      }
      return $$$$22$$($collapsible$$2_index$$206_locator$$30$$).ojCollapsible("getNodeBySubId", {subId:$subId$$30$$});
    }});
  })();
});
