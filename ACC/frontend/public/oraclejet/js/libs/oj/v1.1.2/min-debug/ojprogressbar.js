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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$46$$, $$$$42$$) {
  (function() {
    $oj$$46$$.$__registerWidget$("oj.ojProgressbar", $$$$42$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _ComponentCreate:function() {
      this._super();
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$42$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
    }, $_InitOptions$:function($originalDefaults$$13$$, $constructorOptions$$15$$) {
      var $dom_element$$118$$ = this.element;
      this._super($originalDefaults$$13$$, $constructorOptions$$15$$);
      void 0 === $constructorOptions$$15$$.max && ($dom_element$$118$$ = $dom_element$$118$$.attr("max") || void 0, null != $dom_element$$118$$ && (this.options.max = $dom_element$$118$$));
    }, $_constrainedValue$:function($newValue$$14$$) {
      void 0 === $newValue$$14$$ && ($newValue$$14$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$14$$;
      "number" !== typeof $newValue$$14$$ && ($newValue$$14$$ = isNaN($newValue$$14$$) ? 0 : Number($newValue$$14$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$14$$));
    }, _setOptions:function($options$$376$$, $flags$$41$$) {
      var $value$$266$$ = $options$$376$$.value;
      delete $options$$376$$.value;
      this._super($options$$376$$, $flags$$41$$);
      this.options.disabled || (this.options.value = this.$_constrainedValue$($value$$266$$), this.$_refreshValue$());
    }, _setOption:function($key$$153$$, $value$$267$$, $flags$$42$$) {
      "max" === $key$$153$$ && ($value$$267$$ = Math.max(this.min, $value$$267$$));
      this._super($key$$153$$, $value$$267$$, $flags$$42$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$268$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$268$$ > this.min).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$42$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$), this.$overlayDiv$.addClass("oj-indeterminate"))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$268$$}), this.$overlayDiv$ && 
      (this.$overlayDiv$.remove(), this.$overlayDiv$ = null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
    }});
  })();
});
