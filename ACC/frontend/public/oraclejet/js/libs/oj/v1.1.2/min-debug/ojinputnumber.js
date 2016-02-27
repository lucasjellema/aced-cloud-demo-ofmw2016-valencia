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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojbutton"], function($oj$$34$$, $$$$32$$) {
  $oj$$34$$.$__registerWidget$("oj.ojInputNumber", $$$$32$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$34$$.$Validation$.$converterFactory$($oj$$34$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:null, min:null, placeholder:void 0, rawValue:void 0, readOnly:!1, step:1, value:null}, getNodeBySubId:function($locator$$40$$) {
    var $node$$61$$ = this._superApply(arguments), $subId$$40$$;
    $node$$61$$ || ($subId$$40$$ = $locator$$40$$.subId, "oj-inputnumber-up" === $subId$$40$$ && ($node$$61$$ = this.widget().find(".oj-inputnumber-up")[0]), "oj-inputnumber-down" === $subId$$40$$ && ($node$$61$$ = this.widget().find(".oj-inputnumber-down")[0]), "oj-inputnumber-input" === $subId$$40$$ && ($node$$61$$ = this.widget().find(".oj-inputnumber-input")[0]));
    return $node$$61$$ || null;
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, stepDown:function($steps$$) {
    this.$_step$($steps$$, !1);
  }, stepUp:function($steps$$1$$) {
    this.$_step$($steps$$1$$, !0);
  }, widget:function() {
    return this.$uiInputNumber$;
  }, $_InitOptions$:function($originalDefaults$$12$$, $constructorOptions$$14$$) {
    var $opts$$30$$ = this.options, $self$$152$$ = this;
    this._superApply(arguments);
    $oj$$34$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"value", $defaultOptionValue$:null}, {$attribute$:"readonly", option:"readOnly", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}, {$attribute$:"min", $defaultOptionValue$:null}, 
    {$attribute$:"max", $defaultOptionValue$:null}, {$attribute$:"step", $defaultOptionValue$:1}], $constructorOptions$$14$$, this, function($initializedOptions$$1$$) {
      for (var $toParse$$ = ["value", "step", "min", "max"], $i$$346$$ = 0;$i$$346$$ < $toParse$$.length;$i$$346$$++) {
        var $opt$$20$$ = $toParse$$[$i$$346$$], $value$$249$$ = $opt$$20$$ in $initializedOptions$$1$$ ? $initializedOptions$$1$$[$opt$$20$$] : $opts$$30$$[$opt$$20$$];
        null != $value$$249$$ && ($initializedOptions$$1$$[$opt$$20$$] = "step" === $opt$$20$$ ? $self$$152$$.$_parseStep$($value$$249$$) : $self$$152$$.$_parse$($opt$$20$$, $value$$249$$));
      }
    });
    if (void 0 === $opts$$30$$.value) {
      throw Error("ojInputNumber has no value");
    }
    if (null != $opts$$30$$.min && null != $opts$$30$$.max && $opts$$30$$.max < $opts$$30$$.min) {
      throw Error("ojInputNumber's max must not be less than min");
    }
  }, _ComponentCreate:function() {
    var $node$$62$$ = this.element;
    this._super();
    this.$_draw$();
    $node$$62$$.removeAttr("pattern");
    this.$_inputNumberDefaultValidators$ = {};
    this.$_setup$();
    this._on(this.$_events$);
  }, $_AfterSetOption$:function($option$$29$$, $previous$$1$$, $flags$$38$$) {
    this._superApply(arguments);
    switch($option$$29$$) {
      case "min":
      ;
      case "max":
        this.$_Refresh$($option$$29$$, this.options[$option$$29$$]);
    }
  }, _setOption:function($key$$146$$, $value$$250$$, $flags$$39$$) {
    var $coercedValue$$;
    $coercedValue$$ = "value" === $key$$146$$ || "max" === $key$$146$$ || "min" === $key$$146$$ ? this.$_parse$($key$$146$$, $value$$250$$) : "step" === $key$$146$$ ? this.$_parseStep$($value$$250$$) : $value$$250$$;
    this._super($key$$146$$, $coercedValue$$, $flags$$39$$);
    if ("max" === $key$$146$$ || "min" === $key$$146$$) {
      this.$_createRangeValidator$(), this.$_AfterSetOptionValidators$();
    }
    "disabled" === $key$$146$$ && this.element.prop("disabled", !!$value$$250$$);
    "readOnly" === $key$$146$$ && (this.element.prop("readonly", !!$value$$250$$), this.$_refreshStateTheming$("readOnly", this.options.readOnly), this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly));
  }, _destroy:function() {
    var $ret$$41$$ = this._super();
    this.$upButton$.ojButton("destroy");
    this.$downButton$.ojButton("destroy");
    this.$upButton$.remove();
    this.$downButton$.remove();
    this.$downButton$ = this.$upButton$ = null;
    $oj$$34$$.$DomUtils$.unwrap(this.element, this.$uiInputNumber$);
    clearTimeout(this.$timer$);
    return $ret$$41$$;
  }, $_Refresh$:function($name$$111$$, $value$$251$$, $forceDisplayValueRefresh$$1$$) {
    this._superApply(arguments);
    var $valueMinMax$$ = "value" === $name$$111$$ || "max" === $name$$111$$ || "min" === $name$$111$$, $valueMinMaxDisabled$$ = $valueMinMax$$ || "disabled" === $name$$111$$, $valuenow$$;
    $valueMinMaxDisabled$$ && ($valuenow$$ = this.$_getConvertedDisplayValue$());
    $valueMinMax$$ && this.$_refreshAriaMinMaxValue$($valuenow$$);
    $valueMinMaxDisabled$$ && this.$_updateButtons$($valuenow$$);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$32$$.oj.ojInputNumber.prototype.options.converter;
  }, $_GetImplicitValidators$:function() {
    var $ret$$42$$ = this._superApply(arguments);
    null == this.options.min && null == this.options.max || this.$_createRangeValidator$();
    return $$$$32$$.extend(this.$_inputNumberDefaultValidators$, $ret$$42$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-inputnumber";
  }, $_events$:{input:function($event$$426$$) {
    this.$_SetRawValue$($event$$426$$, this.element.val());
  }, keydown:function($event$$427$$) {
    $event$$427$$.keyCode === $$$$32$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$427$$), $event$$427$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$427$$) && $event$$427$$.preventDefault();
  }, keyup:function($event$$428$$) {
    this.$_stop$($event$$428$$);
  }, focus:function() {
    this.$previous$ = this.element.val();
  }, blur:function($event$$429$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$429$$);
  }, "mousedown .oj-inputnumber-button":function($event$$430$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.$previous$ = $previous$$2$$, this._delay(function() {
        this.$previous$ = $previous$$2$$;
      }));
    }
    var $previous$$2$$;
    $previous$$2$$ = this.element[0] === this.document[0].activeElement ? this.$previous$ : this.element.val();
    $event$$430$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this);
    });
    this.$_start$();
    this.$_repeat$(null, $$$$32$$($event$$430$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$430$$);
  }, "mouseup .oj-inputnumber-button":function($event$$431$$) {
    this.$_stop$($event$$431$$);
  }, "mouseenter .oj-inputnumber-button":function($event$$432$$) {
    $$$$32$$($event$$432$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$32$$($event$$432$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$432$$));
  }, "mouseleave .oj-inputnumber-button":function($event$$433$$) {
    this.$_stop$($event$$433$$);
  }}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_setup$:function() {
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$), $valuenow$$1$$ = this.$_getConvertedDisplayValue$();
    this.$upButton$.ojButton({label:$incrementString$$});
    this.$downButton$.ojButton({label:$decrementString$$});
    this.$_refreshAriaMinMaxValue$($valuenow$$1$$);
    this.$_updateButtons$($valuenow$$1$$);
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_refreshStateTheming$("readOnly", this.options.readOnly);
    this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly);
  }, $_createOjButton$:function() {
    this.$upButton$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});
    this.$downButton$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}});
  }, $_draw$:function() {
    var $element$$109$$ = this.element, $uiInputNumber$$ = this.$uiInputNumber$ = $element$$109$$.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e").wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();
    this.saveType = $element$$109$$.prop("type");
    $element$$109$$.attr("type", "text");
    $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
    this.$_createOjButton$();
  }, $_keydown$:function($event$$434$$) {
    var $keyCode$$20$$ = $$$$32$$.ui.keyCode;
    switch($event$$434$$.keyCode) {
      case $keyCode$$20$$.UP:
        return this.$_repeat$(null, 1, $event$$434$$), !0;
      case $keyCode$$20$$.DOWN:
        return this.$_repeat$(null, -1, $event$$434$$), !0;
    }
    return!1;
  }, $_uiInputNumberHtml$:function() {
    return "\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e";
  }, $_buttonHtml$:function() {
    return "\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e";
  }, $_start$:function() {
    return this.$spinning$ = !0;
  }, $_repeat$:function($i$$347$$, $steps$$2$$, $event$$435$$) {
    $i$$347$$ = $i$$347$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$2$$, $event$$435$$);
    }, $i$$347$$);
    this.$_spin$($steps$$2$$ * this.options.step, $event$$435$$);
  }, $_spin$:function($step$$, $event$$436$$) {
    var $value$$252$$ = this.$_getConvertedDisplayValue$(), $value$$252$$ = this.$_adjustValue$($value$$252$$, $step$$);
    this.$_SetValue$($value$$252$$, $event$$436$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
  }, $_precision$:function() {
    var $opts$$31_precision$$1$$ = this.options, $minOpt$$ = $opts$$31_precision$$1$$.min, $opts$$31_precision$$1$$ = this.$_precisionOf$($opts$$31_precision$$1$$.step);
    null != $minOpt$$ && ($opts$$31_precision$$1$$ = Math.max($opts$$31_precision$$1$$, this.$_precisionOf$($minOpt$$)));
    return $opts$$31_precision$$1$$;
  }, $_precisionOf$:function($num$$9_str$$21$$) {
    $num$$9_str$$21$$ = $num$$9_str$$21$$.toString();
    var $decimal$$ = $num$$9_str$$21$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$21$$.length - $decimal$$ - 1;
  }, $_adjustValue$:function($value$$253$$, $step$$1$$) {
    var $aboveMin_newValue$$13$$, $stepBase$$, $options$$336_precision$$2$$ = this.options, $minOpt$$1_validMax$$ = $options$$336_precision$$2$$.min, $stepOpt$$ = $options$$336_precision$$2$$.step, $maxOpt$$ = $options$$336_precision$$2$$.max, $options$$336_precision$$2$$ = this.$_precision$();
    $stepBase$$ = null != $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : 0;
    $aboveMin_newValue$$13$$ = $value$$253$$ - $stepBase$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$13$$ / $stepOpt$$) * $stepOpt$$, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($options$$336_precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$13$$ ? ($aboveMin_newValue$$13$$ = 0 > $step$$1$$ ? Math.ceil($aboveMin_newValue$$13$$ / $stepOpt$$) * $stepOpt$$ : Math.floor($aboveMin_newValue$$13$$ / $stepOpt$$) * $stepOpt$$, $aboveMin_newValue$$13$$ = $stepBase$$ + $aboveMin_newValue$$13$$ + $step$$1$$) : $aboveMin_newValue$$13$$ = $value$$253$$ + $step$$1$$;
    $aboveMin_newValue$$13$$ = parseFloat($aboveMin_newValue$$13$$.toFixed($options$$336_precision$$2$$));
    return null != $minOpt$$1_validMax$$ && $aboveMin_newValue$$13$$ < $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : null != $maxOpt$$ && $aboveMin_newValue$$13$$ > $maxOpt$$ ? ($minOpt$$1_validMax$$ = Math.floor(($maxOpt$$ - $stepBase$$) / $stepOpt$$) * $stepOpt$$ + $stepBase$$, $minOpt$$1_validMax$$ = parseFloat($minOpt$$1_validMax$$.toFixed($options$$336_precision$$2$$))) : $aboveMin_newValue$$13$$;
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1);
  }, $_updateButtons$:function($valuenow$$2$$) {
    var $options$$337$$ = this.options, $minOpt$$2$$ = $options$$337$$.min, $maxOpt$$1$$ = $options$$337$$.max;
    if (this.$uiInputNumber$) {
      var $downButton$$ = this.$downButton$, $upButton$$ = this.$upButton$;
      $options$$337$$.disabled || void 0 === $valuenow$$2$$ ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null != $maxOpt$$1$$ && $valuenow$$2$$ >= $maxOpt$$1$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null != $minOpt$$2$$ && $valuenow$$2$$ <= $minOpt$$2$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"));
    }
  }, $_getConvertedDisplayValue$:function() {
    var $value$$254$$, $displayValue$$9$$;
    try {
      $displayValue$$9$$ = this.$_GetDisplayValue$() || 0, $value$$254$$ = this.$_parseValue$($displayValue$$9$$);
    } catch ($e$$98$$) {
      $value$$254$$ = void 0;
    }
    return $value$$254$$;
  }, $_blurEnterSetValue$:function($event$$438$$) {
    var $val$$49$$ = this.element.val();
    this.$_stop$();
    var $valuenow$$3$$ = this.$_getConvertedDisplayValue$();
    this.$_refreshAriaMinMaxValue$($valuenow$$3$$);
    this.$_updateButtons$($valuenow$$3$$);
    this.$_SetValue$($val$$49$$, $event$$438$$);
  }, $_createRangeValidator$:function() {
    var $hint$$8_options$$338_translations$$15$$ = this.options, $minOpt$$3_numberRangeOptions$$ = $hint$$8_options$$338_translations$$15$$.min, $maxOpt$$2$$ = $hint$$8_options$$338_translations$$15$$.max, $messageSummary$$1_reqTrans$$1$$ = ($hint$$8_options$$338_translations$$15$$ = $hint$$8_options$$338_translations$$15$$.translations) ? $hint$$8_options$$338_translations$$15$$.numberRange || {} : {}, $hintMin$$, $hintMax$$, $hintInRange$$3$$, $messageDetailRangeOverflow$$2$$, $messageDetailRangeUnderflow$$2$$, 
    $messageSummaryRangeOverflow$$2$$, $messageSummaryRangeUnderflow$$2$$, $hint$$8_options$$338_translations$$15$$ = $messageSummary$$1_reqTrans$$1$$.hint || {}, $messageDetail$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageDetail || {}, $messageSummary$$1_reqTrans$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageSummary || {};
    null !== $hint$$8_options$$338_translations$$15$$ && ($hintMin$$ = $hint$$8_options$$338_translations$$15$$.min || null, $hintMax$$ = $hint$$8_options$$338_translations$$15$$.max || null, $hintInRange$$3$$ = $hint$$8_options$$338_translations$$15$$.inRange || null);
    null !== $messageDetail$$1$$ && ($messageDetailRangeOverflow$$2$$ = $messageDetail$$1$$.rangeOverflow || null, $messageDetailRangeUnderflow$$2$$ = $messageDetail$$1$$.rangeUnderflow || null);
    null !== $messageSummary$$1_reqTrans$$1$$ && ($messageSummaryRangeOverflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeOverflow || null, $messageSummaryRangeUnderflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeUnderflow || null);
    $minOpt$$3_numberRangeOptions$$ = {min:null != $minOpt$$3_numberRangeOptions$$ ? $minOpt$$3_numberRangeOptions$$ : void 0, max:null != $maxOpt$$2$$ ? $maxOpt$$2$$ : void 0, hint:{min:$hintMin$$ || null, max:$hintMax$$ || null, inRange:$hintInRange$$3$$ || null}, messageDetail:{rangeOverflow:$messageDetailRangeOverflow$$2$$ || null, rangeUnderflow:$messageDetailRangeUnderflow$$2$$ || null}, messageSummary:{rangeOverflow:$messageSummaryRangeOverflow$$2$$ || null, rangeUnderflow:$messageSummaryRangeUnderflow$$2$$ || 
    null}, converter:this.$_GetConverter$()};
    this.$_inputNumberDefaultValidators$[$oj$$34$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$34$$.$Validation$.$validatorFactory$($oj$$34$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($minOpt$$3_numberRangeOptions$$);
  }, $_parse$:function($option$$30$$, $val$$50$$) {
    var $returnValue$$2$$;
    $returnValue$$2$$ = null !== $val$$50$$ ? +$val$$50$$ : $val$$50$$;
    if (isNaN($returnValue$$2$$)) {
      throw Error("ojInputNumber's " + $option$$30$$ + " option is not a number");
    }
    return $returnValue$$2$$;
  }, $_parseStep$:function($parsedStep_val$$51$$) {
    if (null === $parsedStep_val$$51$$) {
      return 1;
    }
    $parsedStep_val$$51$$ = this.$_parse$("step", $parsedStep_val$$51$$);
    if (0 >= $parsedStep_val$$51$$) {
      throw Error("Invalid step for ojInputNumber; step must be \x3e 0");
    }
    if (null === $parsedStep_val$$51$$ || 0 >= $parsedStep_val$$51$$) {
      $parsedStep_val$$51$$ = 1;
    }
    return $parsedStep_val$$51$$;
  }, $_refreshStateTheming$:function($option$$31$$, $value$$255$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$31$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$31$$], !!$value$$255$$);
  }, $_refreshRoleSpinbutton$:function($option$$32$$, $readOnly$$2$$) {
    $readOnly$$2$$ ? this.element.removeAttr("role") : this.element.attr("role", "spinbutton");
  }, $_refreshAriaMinMaxValue$:function($valuenow$$4$$) {
    var $element$$110$$ = this.element, $valuetext$$ = $element$$110$$.val();
    $element$$110$$.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$4$$});
    this.$_CompareOptionValues$("value", "" + $valuenow$$4$$, $valuetext$$) || $element$$110$$.attr({"aria-valuetext":$valuetext$$});
  }, $_step$:function($steps$$3$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$3$$ || 1) * this.options.step) : this.$_spin$(($steps$$3$$ || 1) * -this.options.step);
    this.$_stop$();
  }});
});
