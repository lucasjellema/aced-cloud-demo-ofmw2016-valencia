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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$51$$) {
  (function() {
    $oj$$51$$.$__registerWidget$("oj.ojSwitch", $.oj.editableValue, {version:"1.1.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:!1, readOnly:!1, required:!1, title:void 0, value:!1}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$_element2$;
    }, getNodeBySubId:function($locator$$52_subId$$50$$) {
      var $node$$76$$, $rootElement$$17$$ = this.widget();
      $node$$76$$ = null == $locator$$52_subId$$50$$ || null == $locator$$52_subId$$50$$.subId ? $rootElement$$17$$ : null;
      return $node$$76$$ || ($locator$$52_subId$$50$$ = $locator$$52_subId$$50$$.subId, "oj-switch-thumb" !== $locator$$52_subId$$50$$ && "oj-switch-track" !== $locator$$52_subId$$50$$) ? $node$$76$$ || null : $rootElement$$17$$.find("." + $locator$$52_subId$$50$$)[0];
    }, $_InitOptions$:function($originalDefaults$$17$$, $constructorOptions$$19$$) {
      var $val$$61$$;
      this._super($originalDefaults$$17$$, $constructorOptions$$19$$);
      $oj$$51$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"readonly", option:"readOnly", $defaultOptionValue$:!1, $validateOption$:!1, $coerceDomValue$:function() {
        return!1;
      }}, {$attribute$:"required", $defaultOptionValue$:!1, $validateOption$:!1, $coerceDomValue$:function() {
        return!1;
      }}, {$attribute$:"checked", option:"value", $defaultOptionValue$:!1, $validateOption$:!1, $coerceDomValue$:function($domValue$$3$$) {
        return $domValue$$3$$ ? !0 : !1;
      }}, {$attribute$:"title", $defaultOptionValue$:void 0}], $constructorOptions$$19$$, this);
      $val$$61$$ = this.option("value");
      this.option({readOnly:!1, required:!1, value:!!$val$$61$$}, {_context:{$writeback$:!0, $internalSet$:!0}});
    }, _ComponentCreate:function() {
      this._super();
      if (!this.element.is("input")) {
        throw Error("ojSwitch can be bound to INPUT only.");
      }
      this.$_inputElementOriginalDisplay$ = this.element.css("display");
      this.element.css("display", "none").attr("type", "checkbox").attr("checked", this.option("value")).attr("tabindex", "-1").attr("disabled", this.option("disabled")).attr("readonly", this.option("readOnly"));
      this.$_element2$ = this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent().addClass("oj-switch oj-component oj-form-control");
      this.$_element2$.append("\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e");
      this.$switchThumb$ = this.$_element2$.find(".oj-switch-thumb");
      this.$switchThumb$.attr("role", "switch checkbox");
      this.$_setAriaLabel$(this.element, this.$switchThumb$);
      this.$_setupEvents$();
      this.$_setup$();
    }, $_setAriaLabel$:function($elem$$148$$, $target$$97$$) {
      var $id$$51_switchLabel$$ = $elem$$148$$.prop("id"), $ariaLabelledBy$$ = $elem$$148$$.attr("aria-labelledby"), $ariaLabel$$ = $elem$$148$$.attr("aria-label");
      $ariaLabel$$ ? $target$$97$$.attr("aria-label", $ariaLabel$$) : $ariaLabelledBy$$ ? $target$$97$$.attr("aria-labelledby", $ariaLabelledBy$$) : $id$$51_switchLabel$$ && ($id$$51_switchLabel$$ = $("label[for\x3d'" + $id$$51_switchLabel$$ + "']")) && ($id$$51_switchLabel$$.attr("id") ? $target$$97$$.attr("aria-labelledby", $id$$51_switchLabel$$.attr("id")) : $target$$97$$.attr("aria-label", $($id$$51_switchLabel$$).text()));
    }, $_setup$:function() {
      var $rootElement$$18$$ = $(this.widget()), $thumbTitle$$ = this.option("title");
      void 0 !== $rootElement$$18$$ && (this.element.attr("checked", this.option("value")), $rootElement$$18$$.removeClass("oj-disabled oj-selected oj-hover oj-active"), $(this.$switchThumb$).attr("tabindex", "0"), this.option("disabled") && ($rootElement$$18$$.addClass("oj-disabled"), $(this.$switchThumb$).removeAttr("tabindex")), this.option("value") && $rootElement$$18$$.addClass("oj-selected"), void 0 !== $thumbTitle$$ && $(this.$switchThumb$).attr("title", $thumbTitle$$), $(this.$switchThumb$).attr("aria-checked", 
      this.option("value")), $(this.$switchThumb$).removeAttr("aria-disabled"), $rootElement$$18$$.removeAttr("aria-disabled"), this.$_CanSetValue$() || $(this.$switchThumb$).attr("aria-disabled", "true"));
    }, $_setupEvents$:function() {
      this.$_CanSetValue$() && this._on(this.$_element2$, this.$_switchEvents$);
      this._hoverable(this.$_element2$);
      this._focusable(this.$_element2$);
    }, $_switchEvents$:{keydown:function($event$$529$$) {
      if ($event$$529$$.which === $.ui.keyCode.ENTER || $event$$529$$.which === $.ui.keyCode.SPACE) {
        $($event$$529$$.currentTarget).addClass("oj-active"), $event$$529$$.preventDefault();
      }
    }, keyup:function($event$$530$$) {
      $event$$530$$.which !== $.ui.keyCode.ENTER && $event$$530$$.which !== $.ui.keyCode.SPACE || this.$_SetValue$(!this.option("value"), $event$$530$$);
    }, mousedown:function($event$$531$$) {
      1 === $event$$531$$.which && $($event$$531$$.currentTarget).addClass("oj-active");
    }, mouseup:function($event$$532$$) {
      1 === $event$$532$$.which && this.$_SetValue$(!this.option("value"), $event$$532$$);
    }, $touchstart$:function($event$$533$$) {
      this.$_SetValue$(!this.option("value"), $event$$533$$);
      $event$$533$$.preventDefault();
    }}, _GetDefaultStyleClass:function() {
      return "oj-switch";
    }, $_setSwitchRole$:function() {
      return "switch checkbox";
    }, _destroy:function() {
      this.$_element2$.find(".oj-switch-track").remove();
      $oj$$51$$.$DomUtils$.unwrap(this.element);
      this.$_RestoreAttributes$(this.element);
      return this._super();
    }, $_GetContentElement$:function() {
      return this.$_element2$;
    }, _setOption:function($key$$158$$, $coercedValue$$2_value$$276$$, $flags$$44$$) {
      switch($key$$158$$) {
        case "disabled":
        ;
        case "value":
          $coercedValue$$2_value$$276$$ = !!$coercedValue$$2_value$$276$$;
          break;
        case "readOnly":
        ;
        case "required":
          $coercedValue$$2_value$$276$$ = !1;
          break;
      }
      this._super($key$$158$$, $coercedValue$$2_value$$276$$, $flags$$44$$);
      this.$_setup$();
    }});
  })();
});
