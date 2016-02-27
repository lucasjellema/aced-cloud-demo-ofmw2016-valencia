/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$57$$, $$$$52$$) {
  (function() {
    $oj$$57$$.$__registerWidget$("oj.ojToolbar", $$$$52$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{}, $_InitOptions$:function($originalDefaults$$19$$, $constructorOptions$$21$$) {
      this._super($originalDefaults$$19$$, $constructorOptions$$21$$);
      "disabled" in $constructorOptions$$21$$ && $oj$$57$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.");
    }, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-toolbar oj-component").attr("role", "toolbar");
      this.$_setup$(!0);
    }, $_NotifyContextMenuGesture$:function($currentButton$$1_menu$$26$$, $event$$548$$, $eventType$$56$$) {
      $currentButton$$1_menu$$26$$ = this.element.find(":oj-button[tabindex\x3d0]");
      this.$_OpenContextMenu$($event$$548$$, $eventType$$56$$, {launcher:$currentButton$$1_menu$$26$$, position:{of:"keyboard" === $eventType$$56$$ ? $currentButton$$1_menu$$26$$.ojButton("widget") : $event$$548$$}});
    }, _setOption:function($key$$160$$, $value$$279$$) {
      "disabled" === $key$$160$$ ? $oj$$57$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call.") : this._superApply(arguments);
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$3$$) {
      var $self$$184$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(":oj-button").unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$549$$) {
        $self$$184$$.$_handleKeyDown$($event$$549$$, $$$$52$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$52$$(this).ojButton("option", "disabled") || $self$$184$$.$_setTabStop$($$$$52$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$184$$.$_setTabStop$($$$$52$$(this));
      });
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$52$$(this).ojButton("option", "disabled");
      });
      this.$_initTabindexes$($isCreate$$3$$);
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$4$$) {
      var $$last$$1$$ = $$$$52$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$4$$ = $$newTabStop$$1_isCreate$$4$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$4$$);
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$274$$, $elem$$152$$) {
        if ("radio" != $elem$$152$$.type || $elem$$152$$.checked || "" == $elem$$152$$.name) {
          return $elem$$152$$;
        }
        var $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$ = $elem$$152$$.name;
        $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$ ? ($$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$ = $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$.replace(/'/g, "\\'"), $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$ = $$enabledButtons$$2$$.filter(":radio[name\x3d'" + $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$ + "']:oj-button")) : $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$ = $$enabledButtons$$2$$.filter($elem$$152$$).filter(":oj-button");
        $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$ = $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$.filter(":checked");
        return $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$.length ? $$checkedRadio$$1_$radios$$inline_987_name$$inline_986$$[0] : $elem$$152$$;
      });
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$1$$ = $$button$$4$$[0], $last$$6$$ = this.$_lastTabStop$;
      $button$$1$$ !== $last$$6$$ && ($$$$52$$($last$$6$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$1$$);
    }, $_handleKeyDown$:function($event$$552$$, $$button$$5$$) {
      switch($event$$552$$.which) {
        case $$$$52$$.ui.keyCode.LEFT:
        ;
        case $$$$52$$.ui.keyCode.RIGHT:
          $event$$552$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$19$$ = $$enabledButtons$$3$$.length;
          if (2 > $length$$19$$) {
            break;
          }
          var $oldIndex$$2$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$2$$ + ($event$$552$$.which == $$$$52$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$19$$) % $length$$19$$).focus();
          break;
        case $$$$52$$.ui.keyCode.UP:
        ;
        case $$$$52$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$552$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-component").removeAttr("role");
      this.$$buttons$.attr("tabindex", "0");
    }});
  })();
});
