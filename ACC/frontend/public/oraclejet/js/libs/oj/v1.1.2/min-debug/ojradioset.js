/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$48$$, $$$$44$$) {
  (function() {
    $oj$$48$$.$__registerWidget$("oj.ojRadioset", $$$$44$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiRadioset$;
    }, $_InitOptions$:function($originalDefaults$$15$$, $constructorOptions$$17$$) {
      var $checkedRadio_domValue$$2$$;
      this._super($originalDefaults$$15$$, $constructorOptions$$17$$);
      $oj$$48$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}], $constructorOptions$$17$$, this);
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      void 0 === $constructorOptions$$17$$.value && ($checkedRadio_domValue$$2$$ = this.$$radios$.filter(":checked"), $checkedRadio_domValue$$2$$ = 0 === $checkedRadio_domValue$$2$$.length ? void 0 : $checkedRadio_domValue$$2$$.val(), void 0 !== $checkedRadio_domValue$$2$$ && this.option("value", $checkedRadio_domValue$$2$$, {_context:{$writeback$:!0, $internalSet$:!0}}), void 0 === this.options.value && (this.options.value = null));
    }, _ComponentCreate:function() {
      var $element$$120$$ = this.element;
      this._super();
      if ($element$$120$$.is("fieldset")) {
        throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$radios$._ojRadioCheckbox();
      this.$uiRadioset$ = $element$$120$$.addClass("oj-radioset oj-component").attr("role", "radiogroup");
      this._on(this.$_events$);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      this.$$radios$.filter(".oj-radio").each(function() {
        var $disabledValue$$1$$ = void 0 !== $$$$44$$(this).attr("disabled") ? !!$$$$44$$(this).prop("disabled") : !1;
        $$$$44$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$1$$);
      });
      this.$$radios$.not(".oj-radio")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findRadiosWithMatchingName$:function() {
      var $allradios_element$$121$$ = this.element, $first$$11_name$$113$$ = $allradios_element$$121$$.find("input[type\x3dradio]:first");
      0 === $first$$11_name$$113$$.length && $oj$$48$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
      $first$$11_name$$113$$ = $first$$11_name$$113$$.attr("name");
      return void 0 === $first$$11_name$$113$$ ? ($allradios_element$$121$$ = $allradios_element$$121$$.find("input[type\x3dradio]"), $allradios_element$$121$$.not("[name]")) : $allradios_element$$121$$.find("input[type\x3dradio][name\x3d" + $first$$11_name$$113$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$25_menu$$22_radios$$, $event$$511$$, $eventType$$54$$) {
      $launcher$$25_menu$$22_radios$$ = this.element.find("input[type\x3dradio]");
      var $checked$$5$$ = $launcher$$25_menu$$22_radios$$.filter(":checked");
      $launcher$$25_menu$$22_radios$$ = $checked$$5$$.length ? $checked$$5$$ : $launcher$$25_menu$$22_radios$$.filter(":enabled").first();
      this.$_OpenContextMenu$($event$$511$$, $eventType$$54$$, {launcher:$launcher$$25_menu$$22_radios$$});
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$512$$) {
      this.$_HandleChangeEvent$($event$$512$$);
    }}, $_HandleChangeEvent$:function($event$$513$$) {
      var $submittedValue$$4$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$4$$, $event$$513$$, $_sValueChangeCheckFalse$$1$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$) {
      $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ + "']";
      void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$radios$ && ($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = this.$$radios$.filter($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$), void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && 0 < $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.length ? $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.prop("checked") || $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", 
      "checked", !0) : this.$$radios$._ojRadioCheckbox("option", "checked", !1));
    }, $_GetElementValue$:function() {
      var $checkedRadio$$1$$ = this.$$radios$.filter(":checked");
      return 0 === $checkedRadio$$1$$.length ? null : $checkedRadio$$1$$.val();
    }, _GetDefaultStyleClass:function() {
      return "oj-radioset";
    }, $_GetContentElement$:function() {
      return this.$_findRadiosWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$8$$) {
      $disabled$$8$$ = !!$disabled$$8$$;
      this.$$radios$.each(function() {
        $$$$44$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$8$$);
      });
      this.$$radios$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$155$$, $value$$272$$) {
      this._superApply(arguments);
      "disabled" === $key$$155$$ && this.$_propagateDisabled$($value$$272$$);
    }, getNodeBySubId:function($locator$$48_subId$$46$$) {
      var $node$$72$$ = this._super($locator$$48_subId$$46$$);
      $node$$72$$ || ($locator$$48_subId$$46$$ = $locator$$48_subId$$46$$.subId, "oj-radioset-inputs" === $locator$$48_subId$$46$$ && ($node$$72$$ = this.$$radios$.get()));
      return $node$$72$$ || null;
    }, _destroy:function() {
      var $ret$$54$$ = this._super();
      this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
      return $ret$$54$$;
    }});
    var $_sValueChangeCheckFalse$$1$$ = {$doValueChangeCheck$:!1};
  })();
});
