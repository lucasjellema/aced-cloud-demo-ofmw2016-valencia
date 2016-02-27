/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$26$$, $$$$25$$) {
  (function() {
    $oj$$26$$.$__registerWidget$("oj.ojCheckboxset", $$$$25$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiCheckboxset$;
    }, $_InitOptions$:function($originalDefaults$$11$$, $constructorOptions$$13$$) {
      var $checkedValues$$ = [], $selectedCheckbox$$;
      this._super($originalDefaults$$11$$, $constructorOptions$$13$$);
      $oj$$26$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}], $constructorOptions$$13$$, this);
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      void 0 === $constructorOptions$$13$$.value && ($selectedCheckbox$$ = this.$$checkboxes$.filter(":checked"), 0 < $selectedCheckbox$$.length && ($selectedCheckbox$$.each(function() {
        $checkedValues$$.push($$$$25$$(this).val());
      }), this.option("value", $checkedValues$$, {_context:{$writeback$:!0, $internalSet$:!0}})), void 0 === this.options.value && (this.options.value = []));
    }, _ComponentCreate:function() {
      this._super();
      if (this.element.is("fieldset")) {
        throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$checkboxes$._ojRadioCheckbox();
      this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group");
      this._on(this.$_events$);
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      this.$$checkboxes$.filter(".oj-checkbox").each(function() {
        var $disabledValue$$ = void 0 !== $$$$25$$(this).attr("disabled") ? !!$$$$25$$(this).prop("disabled") : !1;
        $$$$25$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$);
      });
      this.$$checkboxes$.not(".oj-checkbox")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findCheckboxesWithMatchingName$:function() {
      var $allcheckboxes_first$$7_name$$109$$ = this.element.find("input[type\x3dcheckbox]:first");
      0 === $allcheckboxes_first$$7_name$$109$$.length && $oj$$26$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
      $allcheckboxes_first$$7_name$$109$$ = $allcheckboxes_first$$7_name$$109$$.attr("name");
      return void 0 === $allcheckboxes_first$$7_name$$109$$ ? ($allcheckboxes_first$$7_name$$109$$ = this.element.find("input[type\x3dcheckbox]"), $allcheckboxes_first$$7_name$$109$$.not("[name]")) : this.element.find("input[type\x3dcheckbox][name\x3d" + $allcheckboxes_first$$7_name$$109$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$8_menu$$13$$, $event$$329$$, $eventType$$46$$) {
      $launcher$$8_menu$$13$$ = this.element.find("input[type\x3dcheckbox]:tabbable").first();
      this.$_OpenContextMenu$($event$$329$$, $eventType$$46$$, {launcher:$launcher$$8_menu$$13$$});
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$330$$) {
      this.$_HandleChangeEvent$($event$$330$$);
    }}, $_HandleChangeEvent$:function($event$$331$$) {
      var $submittedValue$$3$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$3$$, $event$$331$$, $_sValueChangeCheckFalse$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($checkedBoxes$$) {
      var $checkboxWithMatchingValue_displayValue$$8_valueFilter$$;
      this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
      if (null != $checkedBoxes$$) {
        for (var $i$$324$$ = 0;$i$$324$$ < $checkedBoxes$$.length;$i$$324$$++) {
          $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = $checkedBoxes$$[$i$$324$$], $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = "[value\x3d'" + $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ + "']", $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_displayValue$$8_valueFilter$$), void 0 !== $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ && 0 < $checkboxWithMatchingValue_displayValue$$8_valueFilter$$.length && 
          ($checkboxWithMatchingValue_displayValue$$8_valueFilter$$.prop("checked") || $checkboxWithMatchingValue_displayValue$$8_valueFilter$$._ojRadioCheckbox("option", "checked", !0));
        }
      }
    }, $_GetElementValue$:function() {
      var $checkedValues$$1$$ = [], $selectedCheckbox$$1$$ = this.$$checkboxes$.filter(":checked");
      if (0 === $selectedCheckbox$$1$$.length) {
        return[];
      }
      $selectedCheckbox$$1$$.each(function() {
        $checkedValues$$1$$.push($$$$25$$(this).val());
      });
      return $checkedValues$$1$$;
    }, _GetDefaultStyleClass:function() {
      return "oj-checkboxset";
    }, $_GetContentElement$:function() {
      return this.$_findCheckboxesWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$7$$) {
      $disabled$$7$$ = !!$disabled$$7$$;
      this.$$checkboxes$.each(function() {
        $$$$25$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$7$$);
      });
      this.$$checkboxes$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$139$$, $value$$238$$, $flags$$33$$) {
      this._super($key$$139$$, $value$$238$$, $flags$$33$$);
      "disabled" === $key$$139$$ && this.$_propagateDisabled$($value$$238$$);
    }, getNodeBySubId:function($locator$$33_subId$$33$$) {
      var $node$$57$$ = this._super($locator$$33_subId$$33$$);
      return $node$$57$$ || ($locator$$33_subId$$33$$ = $locator$$33_subId$$33$$.subId, "oj-checkboxset-inputs" !== $locator$$33_subId$$33$$) ? $node$$57$$ || null : this.$$checkboxes$.get();
    }, _destroy:function() {
      var $ret$$39$$ = this._super();
      this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy");
      return $ret$$39$$;
    }});
    var $_sValueChangeCheckFalse$$ = {$doValueChangeCheck$:!1};
  })();
});
