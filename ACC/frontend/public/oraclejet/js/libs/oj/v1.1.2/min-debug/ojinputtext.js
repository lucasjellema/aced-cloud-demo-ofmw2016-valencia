/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$5$$, $$$$5$$) {
  $oj$$5$$.$__registerWidget$("oj.inputBase", $$$$5$$.oj.editableValue, {version:"1.0.0", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"", _WIDGET_CLASS_NAMES:"", _ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"", _GET_INIT_OPTIONS_PROPS:[{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"pattern", $defaultOptionValue$:""}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"value", $defaultOptionValue$:null}, {$attribute$:"readonly", option:"readOnly", 
  $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}], _INPUT_HELPER_KEY:"", $_BLUR_HANDLER_KEY$:"blur", $_KEYDOWN_HANDLER_KEY$:"keydown", $_INPUT_HANDLER_KEY$:"input", $_DROP_HANDLER_KEY$:"drop", options:{converter:void 0, placeholder:void 0, rawValue:void 0, readOnly:void 0}, $_SaveAttributes$:function($element$$38$$) {
    var $ret$$3$$ = this._superApply(arguments);
    this.$_processAttrCheck$();
    return $ret$$3$$;
  }, $_InitOptions$:function($originalDefaults$$5$$, $constructorOptions$$7$$) {
    this._super($originalDefaults$$5$$, $constructorOptions$$7$$);
    $oj$$5$$.$EditableValueUtils$.$initializeOptionsFromDom$(this._GET_INIT_OPTIONS_PROPS, $constructorOptions$$7$$, this);
  }, _ComponentCreate:function() {
    var $node$$19$$ = this.element, $ret$$4$$ = this._superApply(arguments), $savedAttributes$$2$$ = this.$_GetSavedAttributes$($node$$19$$), $readOnly$$1$$ = this.options.readOnly;
    this.$_rtl$ = "rtl" === this.$_GetReadingDirection$();
    "boolean" === typeof $readOnly$$1$$ && this.element.prop("readonly", $readOnly$$1$$);
    this.$_DoWrapElement$() && (this.$_wrapElementInRootDomElement$(), this.$_DoWrapElementAndTriggers$() && this.$_wrapElement$());
    "pattern" in $savedAttributes$$2$$ && $node$$19$$.removeAttr("pattern");
    this.$_defaultRegExpValidator$ = {};
    this.$_eventHandlers$ = null;
    return $ret$$4$$;
  }, $_AfterCreate$:function() {
    var $ret$$5$$ = this._superApply(arguments), $self$$41$$ = this;
    this._CLASS_NAMES && this.element.addClass(this._CLASS_NAMES);
    this.$_attachDetachEventHandlers$();
    this.$_AppendInputHelper$();
    $$$$5$$.each(["disabled", "readOnly"], function($index$$88$$, $ele$$1$$) {
      $self$$41$$.options[$ele$$1$$] && $self$$41$$.$_processDisabledReadOnly$($ele$$1$$, $self$$41$$.options[$ele$$1$$]);
    });
    return $ret$$5$$;
  }, $_processDisabledReadOnly$:function __processDisabledReadOnly($key$$37$$, $value$$96$$) {
    "disabled" === $key$$37$$ && this.element.prop("disabled", $value$$96$$);
    "readOnly" === $key$$37$$ && (this.element.prop("readonly", $value$$96$$), this.$_refreshStateTheming$("readOnly", $value$$96$$));
    "disabled" !== $key$$37$$ && "readOnly" !== $key$$37$$ || this.$_attachDetachEventHandlers$();
  }, _setOption:function __setOption($key$$38$$, $value$$97$$) {
    var $retVal$$5$$ = this._superApply(arguments);
    "disabled" !== $key$$38$$ && "readOnly" !== $key$$38$$ || this.$_processDisabledReadOnly$($key$$38$$, $value$$97$$);
    "pattern" === $key$$38$$ && (this.$_defaultRegExpValidator$[$oj$$5$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP] = this.$_getImplicitRegExpValidator$(), this.$_AfterSetOptionValidators$());
    return $retVal$$5$$;
  }, _destroy:function __destroy() {
    var $ret$$6$$ = this._superApply(arguments);
    this.element.off("blur drop keydown input");
    this.$_inputHelper$ && this.$_inputHelper$.remove();
    this.$_DoWrapElement$() && (this.$_DoWrapElementAndTriggers$() ? $oj$$5$$.$DomUtils$.unwrap(this.element, this.$_wrapper$) : $oj$$5$$.$DomUtils$.unwrap(this.element));
    return $ret$$6$$;
  }, $_attachDetachEventHandlers$:function __attachDetachEventHandlers() {
    if (!this.options.readOnly && !this.options.disabled) {
      this.$_eventHandlers$ = {};
      var $blurHandler_eventEntries$$ = $$$$5$$.proxy(this.$_onBlurHandler$, this), $i$$109_keyDownHandler$$ = $$$$5$$.proxy(this.$_onKeyDownHandler$, this), $inputHandler_j$$10$$ = $$$$5$$.proxy(this.$_onInputHandler$, this), $dropHandler$$ = function $$dropHandler$$$() {
        this.focus();
      };
      this.element.on("blur", $blurHandler_eventEntries$$);
      this.element.on("keydown", $i$$109_keyDownHandler$$);
      this.element.on("input", $inputHandler_j$$10$$);
      this.element.on("drop", $dropHandler$$);
      this.$_eventHandlers$[this.$_BLUR_HANDLER_KEY$] = $blurHandler_eventEntries$$;
      this.$_eventHandlers$[this.$_KEYDOWN_HANDLER_KEY$] = $i$$109_keyDownHandler$$;
      this.$_eventHandlers$[this.$_INPUT_HANDLER_KEY$] = $inputHandler_j$$10$$;
      this.$_eventHandlers$[this.$_DROP_HANDLER_KEY$] = $dropHandler$$;
    } else {
      if (this.$_eventHandlers$) {
        for ($blurHandler_eventEntries$$ = [this.$_BLUR_HANDLER_KEY$, this.$_KEYDOWN_HANDLER_KEY$, this.$_INPUT_HANDLER_KEY$, this.$_DROP_HANDLER_KEY$], $i$$109_keyDownHandler$$ = 0, $inputHandler_j$$10$$ = $blurHandler_eventEntries$$.length;$i$$109_keyDownHandler$$ < $inputHandler_j$$10$$;$i$$109_keyDownHandler$$++) {
          this.$_eventHandlers$[$blurHandler_eventEntries$$[$i$$109_keyDownHandler$$]] && (this.element.off($blurHandler_eventEntries$$[$i$$109_keyDownHandler$$], this.$_eventHandlers$[$blurHandler_eventEntries$$[$i$$109_keyDownHandler$$]]), delete this.$_eventHandlers$[$blurHandler_eventEntries$$[$i$$109_keyDownHandler$$]]);
        }
      }
    }
  }, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_processAttrCheck$:function __processAttrCheck() {
    for (var $attrCheck$$ = this._ATTR_CHECK, $i$$110$$ = 0, $j$$11$$ = $attrCheck$$.length;$i$$110$$ < $j$$11$$;$i$$110$$++) {
      var $attr$$12$$ = $attrCheck$$[$i$$110$$].attr;
      "setMandatory" in $attrCheck$$[$i$$110$$] && this.element.attr($attr$$12$$, $attrCheck$$[$i$$110$$].setMandatory);
    }
  }, $_onBlurHandler$:function __onBlurHandler($event$$53$$) {
    this.$_SetValue$(this.$_GetDisplayValue$(), $event$$53$$);
  }, $_onKeyDownHandler$:function __onKeyDownHandler($event$$54$$) {
    $event$$54$$.keyCode === $$$$5$$.ui.keyCode.ENTER && this.$_SetValue$(this.$_GetDisplayValue$(), $event$$54$$);
  }, $_onInputHandler$:function __onInputHandler($event$$55$$) {
    this.$_SetRawValue$($event$$55$$, this.$_GetContentElement$().val());
  }, $_DoWrapElement$:function() {
    return this._WIDGET_CLASS_NAMES;
  }, $_DoWrapElementAndTriggers$:function() {
    return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES;
  }, $_wrapElementInRootDomElement$:function _wrapElementInRootDomElement() {
    $$$$5$$(this.element).wrap($$$$5$$("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));
    this.$_wrapper$ = this.element.parent();
  }, $_wrapElement$:function _wrapElement() {
    $$$$5$$(this.element).wrap($$$$5$$("\x3cdiv\x3e").addClass(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES));
  }, $_AppendInputHelper$:function __AppendInputHelper() {
    if (this._INPUT_HELPER_KEY && this.$_DoWrapElement$()) {
      var $describedBy$$ = this.element.attr("aria-describedby") || "", $helperDescribedById$$ = this.$_GetSubId$(this._INPUT_HELPER_KEY);
      this.element.attr("aria-describedby", $describedBy$$ + (" " + $helperDescribedById$$));
      this.$_inputHelper$ = $$$$5$$("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'" + $helperDescribedById$$ + "'\x3e" + this.$_EscapeXSS$(this.$getTranslatedString$(this._INPUT_HELPER_KEY)) + "\x3c/div\x3e");
      this.$_AppendInputHelperParent$().append(this.$_inputHelper$);
    }
  }, $_EscapeXSS$:function __EscapeXSS($escapeMe$$) {
    return $$$$5$$("\x3cspan\x3e" + $escapeMe$$ + "\x3c/span\x3e").text();
  }, $_AppendInputHelperParent$:function __AppendInputHelperParent() {
    return this.widget();
  }, $_GetImplicitValidators$:function() {
    var $ret$$7$$ = this._superApply(arguments);
    this.options.pattern && (this.$_defaultRegExpValidator$[$oj$$5$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP] = this.$_getImplicitRegExpValidator$());
    return $$$$5$$.extend(this.$_defaultRegExpValidator$, $ret$$7$$);
  }, $_refreshStateTheming$:function($option$$13$$, $value$$98$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$13$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$13$$], !!$value$$98$$);
  }, $_getImplicitRegExpValidator$:function() {
    if (!this.options.pattern) {
      return null;
    }
    var $regexpOptions$$ = {pattern:this.options.pattern, label:this.$_getLabelText$()};
    $$$$5$$.extend($regexpOptions$$, this.options.translations.regexp || {});
    return $oj$$5$$.$Validation$.$validatorFactory$($oj$$5$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP).createValidator($regexpOptions$$);
  }, $_GetSubId$:function __getSubId($sub$$) {
    return this.uuid + "_" + $sub$$;
  }, $_IsRTL$:function() {
    return this.$_rtl$;
  }, refresh:function() {
    var $retVal$$6$$ = this._superApply(arguments);
    this.$_rtl$ = "rtl" === this.$_GetReadingDirection$();
    return $retVal$$6$$;
  }, getNodeBySubId:function($locator$$6$$) {
    return this._super($locator$$6$$);
  }, widget:function _widget() {
    return this.$_DoWrapElement$() ? this.$_wrapper$ : this.element;
  }}, !0);
  $oj$$5$$.$__registerWidget$("oj.ojInputPassword", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"password"}], _CLASS_NAMES:"oj-inputpassword-input", _WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component", options:{pattern:void 0}, getNodeBySubId:function($locator$$7$$) {
    var $node$$20$$ = this._superApply(arguments), $subId$$1$$;
    $node$$20$$ || ($subId$$1$$ = $locator$$7$$.subId, "oj-inputpassword-input" === $subId$$1$$ && ($node$$20$$ = this.element ? this.element[0] : null));
    return $node$$20$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-inputpassword";
  }});
  $oj$$5$$.$__registerWidget$("oj.ojInputText", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _CLASS_NAMES:"oj-inputtext-input", _WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component", options:{pattern:void 0}, getNodeBySubId:function($locator$$8$$) {
    var $node$$21$$ = this._superApply(arguments), $subId$$2$$;
    $node$$21$$ || ($subId$$2$$ = $locator$$8$$.subId, "oj-inputtext-input" === $subId$$2$$ && ($node$$21$$ = this.element ? this.element[0] : null));
    return $node$$21$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-inputtext";
  }, $_GetTranslationsSectionName$:function() {
    return "oj-inputBase";
  }});
  $oj$$5$$.$__registerWidget$("oj.ojTextArea", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3ctextarea\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"oj-textarea-input", _WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component", options:{pattern:void 0}, getNodeBySubId:function($locator$$9$$) {
    var $node$$22$$ = this._superApply(arguments), $subId$$3$$;
    $node$$22$$ || ($subId$$3$$ = $locator$$9$$.subId, "oj-textarea-input" === $subId$$3$$ && ($node$$22$$ = this.element ? this.element[0] : null));
    return $node$$22$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-textarea";
  }, $_GetTranslationsSectionName$:function() {
    return "oj-inputBase";
  }});
});
