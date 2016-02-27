/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$47$$, $$$$43$$) {
  $oj$$47$$.$__registerWidget$("oj._ojRadioCheckbox", $$$$43$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null, type:null}, label:function() {
    void 0 === this.$$label$ && (this.$$label$ = this.$_getLabelsForElement$());
    return this.$$label$;
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, refreshDisabled:function() {
    this.$_renderDisabled$();
  }, widget:function() {
    return this.$uiRadioCheckbox$;
  }, $_InitOptions$:function($originalDefaults$$14$$, $constructorOptions$$16$$) {
    var $checkedFromDom_disabledFromDom$$;
    this._super($originalDefaults$$14$$, $constructorOptions$$16$$);
    "checked" in $constructorOptions$$16$$ || (this.$initCheckedFromDom$ = !0, $checkedFromDom_disabledFromDom$$ = !!this.element.prop("checked"), this.option("checked", $checkedFromDom_disabledFromDom$$, {_context:{$internalSet$:!0}}));
    if ("boolean" !== typeof this.options.checked) {
      throw Error("checked option must be a boolean");
    }
    "disabled" in $constructorOptions$$16$$ || ($checkedFromDom_disabledFromDom$$ = !!this.element.prop("disabled"), this.option("disabled", $checkedFromDom_disabledFromDom$$, {_context:{$internalSet$:!0}}));
    if ("boolean" !== typeof this.options.disabled) {
      throw Error("disabled option must be a boolean");
    }
    "type" in $constructorOptions$$16$$ || this.option("type", this.element.prop("type"), {_context:{$internalSet$:!0}});
  }, _ComponentCreate:function() {
    this._super();
    var $type$$96$$ = this.options.type;
    "checkbox" == $type$$96$$ ? (this.$uiRadioCheckbox$ = this.element.addClass("oj-checkbox oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-checkbox-label")) : "radio" == $type$$96$$ && (this.$uiRadioCheckbox$ = this.element.addClass("oj-radio oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-radio-label"));
    var $self$$168$$ = this;
    this._hoverable(this.element);
    this._focusable(this.element);
    this.$_activeable$(this.element);
    $$$$43$$.each($self$$168$$.$$label$, function() {
      $self$$168$$._hoverable(this);
      $self$$168$$._focusable(this);
      $self$$168$$.$_activeable$(this);
    });
    this.$_setup$();
  }, $_SaveAttributes$:function($element$$119$$) {
    this.$_savedClasses$ = $element$$119$$.attr("class");
  }, $_RestoreAttributes$:function() {
    this.$_savedClasses$ ? this.element.attr("class", this.$_savedClasses$) : this.element.removeAttr("class");
  }, $_setup$:function() {
    this.$_renderDisabled$();
    this.$initCheckedFromDom$ || this.$_setCheckedOnDom$(this.options.checked);
    this.element.toggleClass("oj-selected", this.options.checked);
  }, $_setCheckedOnDom$:function($checked$$4$$) {
    this.element.prop("checked", !!$checked$$4$$);
  }, $_renderDisabled$:function() {
    this.$_IsEffectivelyDisabled$() ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled"));
  }, _setOption:function($key$$154$$, $value$$269$$) {
    this._superApply(arguments);
    "disabled" === $key$$154$$ && ($value$$269$$ = !!$value$$269$$, this.$_renderDisabled$($value$$269$$));
    "checked" === $key$$154$$ && (this.$_setCheckedOnDom$($value$$269$$), this.element.toggleClass("oj-selected", $value$$269$$));
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$ = this.element.closest("label"), $labelForQuery$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$.add($$$$43$$($labelForQuery$$));
  }, getNodeBySubId:function($locator$$47_subId$$45$$) {
    var $node$$70$$ = this._super($locator$$47_subId$$45$$);
    $node$$70$$ || ($locator$$47_subId$$45$$ = $locator$$47_subId$$45$$.subId, "oj-radiocheckbox-input" === $locator$$47_subId$$45$$ && ($node$$70$$ = this.element[0]), "oj-radiocheckbox-label" === $locator$$47_subId$$45$$ && ($node$$70$$ = this.label()[0]));
    return $node$$70$$ || null;
  }, _destroy:function() {
    var $ret$$53$$ = this._super(), $type$$97$$ = this.options.type;
    "checkbox" == $type$$97$$ ? this.$$label$.removeClass("oj-enabled oj-disabled oj-checkbox-label") : "radio" == $type$$97$$ && this.$$label$.removeClass("oj-enabled oj-disabled oj-radio-label");
    return $ret$$53$$;
  }});
});
