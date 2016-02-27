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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "jqueryui-amd/draggable", "ojs/ojtouchproxy"], function($oj$$49$$, $$$$45$$) {
  (function() {
    $oj$$49$$.$__registerWidget$("oj.ojSlider", $$$$45$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", version:"1.1.1", widgetEventPrefix:"oj", options:{distance:0, max:100, min:0, orientation:"horizontal", readOnly:!1, disabled:!1, step:1, type:"fromMin", value:0}, $_numPages$:5, $_isRTL$:function() {
      return "rtl" === $oj$$49$$.$DomUtils$.$getReadingDirection$();
    }, _ComponentCreate:function() {
      this._super();
      this.$_newMultiValue$ = [];
      this.element.removeAttr("pattern");
      this.$_dragInProgress$ = this.$_keySliding$ = !1;
      this.$_thumbIndex$ = null;
      this.$_inputtag$ = !1;
      this.element.is("INPUT") ? (this.$_inputtag$ = !0, this.element[0].style && (this.$_styleFromInputTag$ = this.element[0].style.cssText), this.$_inputElementOriginalDisplay$ = this.element.css("display"), this.element.css("display", "none"), this.$_elementWrapped$ = $$$$45$$(this.element).wrap("\x3cdiv\x3e \x3c/div\x3e").parent()) : this.$_elementWrapped$ = this.element;
      var $classes$$1$$ = "oj-slider ", $classes$$1$$ = this.$_isVertical$() ? $classes$$1$$ + "oj-slider-vertical" : $classes$$1$$ + "oj-slider-horizontal";
      this.$_elementWrapped$.addClass($classes$$1$$ + " ui-widget ui-widget-content");
      this.$_multipleThumbs$ = "range" === this.options.type ? !0 : !1;
      this.$_calculateNewMax$();
      this.$_setup$();
      this.$_setupEvents$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$_makeDraggable$();
      var $ariaLabelString_label$$13$$ = this.$_GetLabelElementLocal$();
      if ($ariaLabelString_label$$13$$) {
        var $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $labelId$$ = $ariaLabelString_label$$13$$.attr("id");
        $labelId$$ || ($labelId$$ = $ariaLabelString_label$$13$$.attr("for"));
        $thumb$$.attr("aria-labelledby", $labelId$$);
        1 < $ariaLabelString_label$$13$$.length && 1 < $thumb$$.length && $thumb$$[1].attr("aria-labelledby", String($labelId$$));
      } else {
        if ($ariaLabelString_label$$13$$ = this.element.attr("aria-label")) {
          $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $thumb$$.attr("aria-label", $ariaLabelString_label$$13$$);
        }
      }
    }, $_GetLabelElementLocal$:function() {
      var $queryResult$$1$$ = this.$_getAriaLabelledByElementLocal$();
      if (null !== $queryResult$$1$$ && 0 !== $queryResult$$1$$.length) {
        return $queryResult$$1$$;
      }
      $queryResult$$1$$ = this.$_getAriaLabelForElementLocal$();
      if (null !== $queryResult$$1$$ && 0 !== $queryResult$$1$$.length) {
        return $queryResult$$1$$;
      }
    }, $_getAriaLabelForElementLocal$:function() {
      var $id$$49_spanQuery$$ = this.element.prop("id");
      if (void 0 !== $id$$49_spanQuery$$) {
        var $jqLabelQuery$$ = $$$$45$$("label[for\x3d'" + $id$$49_spanQuery$$ + "']");
        if (0 < $jqLabelQuery$$.length) {
          return $jqLabelQuery$$;
        }
        $id$$49_spanQuery$$ = "span[for\x3d'" + $id$$49_spanQuery$$ + "']";
        if (0 !== $$$$45$$($id$$49_spanQuery$$).length) {
          return $$$$45$$($id$$49_spanQuery$$);
        }
      }
      return null;
    }, $_getAriaLabelledByElementLocal$:function() {
      var $ariaId$$1_jqSpanQuery$$ = this.element.attr("aria-labelledby");
      if (void 0 !== $ariaId$$1_jqSpanQuery$$) {
        var $jqLabelQuery$$1$$ = $$$$45$$("label[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $jqLabelQuery$$1$$.length) {
          return $jqLabelQuery$$1$$;
        }
        $ariaId$$1_jqSpanQuery$$ = $$$$45$$("span[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $ariaId$$1_jqSpanQuery$$.length) {
          return $ariaId$$1_jqSpanQuery$$;
        }
      } else {
        return null;
      }
    }, widget:function() {
      return this.$_elementWrapped$;
    }, $_setup$:function() {
      this.$_createSliderContainer$();
      this.$_createBarBackground$();
      this.$_createRange$();
      this.$_createThumbs$();
      this.$_refreshValue$();
    }, $_getElementId$:function() {
      return this.element[0].id;
    }, $_getThumbId$:function($index$$237$$) {
      return this.$_getElementId$() + "-thumb" + $index$$237$$;
    }, $_getBarValueId$:function() {
      return this.$_getElementId$() + "-barValue";
    }, $_getBarBackgroundId$:function() {
      return this.$_getElementId$() + "-barBack";
    }, $_getSliderWrapperId$:function() {
      return this.$_getElementId$() + "-sliderWrapper";
    }, $_createThumbs$:function() {
      var $i$$394$$, $thumbCount$$, $thumb$$1$$ = "", $thumbClasses$$ = "class\x3d'oj-slider-thumb ui-state-default' tabindex\x3d'0' role\x3d'slider'" + ("aria-valuemin \x3d '" + this.$_valueMin$() + "' ") + ("aria-valuemax \x3d '" + this.$_valueMax$() + "' ") + "\x3e\x3c/span\x3e", $thumbs$$ = [];
      $thumbCount$$ = this.$_multipleThumbs$ ? this.options.value.length : 1;
      for ($i$$394$$ = 0;$i$$394$$ < $thumbCount$$;$i$$394$$++) {
        $thumb$$1$$ = "\x3cspan " + ("id\x3d'" + this.$_getThumbId$($i$$394$$) + "' ") + $thumbClasses$$, $thumbs$$.push($thumb$$1$$);
      }
      this.$_thumbs$ = $$$$45$$($thumbs$$.join("")).appendTo(this.$_sliderContainer$);
      this.$_thumb$ = this.$_thumbs$.eq(0);
      var $that$$13$$ = this;
      this.$_thumbs$.each(function($i$$395$$) {
        $$$$45$$(this).data("oj-slider-thumb-index", $i$$395$$);
        $that$$13$$.$_isVertical$() && $$$$45$$(this).attr("aria-orientation", "vertical");
        $that$$13$$.options.disabled ? ($$$$45$$(this).attr("aria-disabled", "true"), $$$$45$$(this).removeAttr("tabindex")) : $$$$45$$(this).removeAttr("aria-disabled");
        $that$$13$$.options.readOnly ? $$$$45$$(this).attr("title", "read only") : $$$$45$$(this).removeAttr("title");
      });
    }, $_createSliderContainer$:function() {
      var $sliderWrapperId$$1$$ = this.$_getSliderWrapperId$(), $existingSliderWrapper$$ = this.$_elementWrapped$.find("#" + $sliderWrapperId$$1$$);
      $existingSliderWrapper$$.length && $existingSliderWrapper$$.remove();
      this.$_sliderContainer$ = $$$$45$$("\x3cdiv\x3e\x3c/div\x3e");
      $$$$45$$(this.$_sliderContainer$).attr("id", $sliderWrapperId$$1$$);
      this.$_sliderContainer$.addClass("oj-slider-container");
      this.element.after(this.$_sliderContainer$);
      this.$_sliderContainer$[0].style.cssText = this.$_styleFromInputTag$;
      this.$_isVertical$() && "" == this.$_sliderContainer$[0].style.height && (this.$_sliderContainer$[0].style.height = "150px");
    }, $_createBarBackground$:function() {
      var $barId$$ = this.$_getBarBackgroundId$(), $classes$$2_existingBarBack$$ = this.$_elementWrapped$.find("#" + $barId$$);
      $classes$$2_existingBarBack$$.length && $classes$$2_existingBarBack$$.remove();
      this.$_barback$ = $$$$45$$("\x3cdiv\x3e\x3c/div\x3e");
      $classes$$2_existingBarBack$$ = "oj-slider-bar";
      $classes$$2_existingBarBack$$ = this.$_isVertical$() ? $classes$$2_existingBarBack$$ + " oj-slider-vertical" : $classes$$2_existingBarBack$$ + " oj-slider-horizontal";
      $$$$45$$(this.$_barback$).attr("id", $barId$$);
      this.$_barback$.addClass($classes$$2_existingBarBack$$);
      this.$_sliderContainer$.append(this.$_barback$);
      var $that$$14$$ = this;
      this.$_barback$.on("mousedown" + $that$$14$$.eventNamespace, function($event$$514$$) {
        $that$$14$$.$_initDragging$($event$$514$$, !1);
        $that$$14$$.$_mouseStop$($event$$514$$);
        $that$$14$$.$_refreshContainment$();
        $that$$14$$.$_getActiveThumb$().addClass("ui-state-active").focus();
      });
    }, $_createRange$:function() {
      var $options$$378$$ = this.options, $classes$$3$$ = "";
      if ($options$$378$$.type) {
        this.options.value ? this.$_multipleThumbs$ && (2 === this.options.value.length ? this.options.value = this.options.value.slice(0) : (this.options.value = [this.options.value[0], this.$_valueMax$()], this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}}))) : (this.options.value = this.$_multipleThumbs$ ? [this.$_valueMin$(), this.$_valueMax$()] : this.$_valueMin$(), this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}}));
        if (this.$_range$ && this.$_range$.length) {
          this.$_range$.removeClass("oj-slider-range-min oj-slider-range-max").css({left:"", top:""});
        } else {
          this.$_range$ = $$$$45$$("\x3cdiv\x3e\x3c/div\x3e");
          $$$$45$$(this.$_range$).attr("id", this.$_getBarValueId$());
          this.$_sliderContainer$.append(this.$_range$);
          var $classes$$3$$ = "oj-slider-range oj-slider-bar-value", $that$$15$$ = this;
          this.$_range$.on("mousedown" + $that$$15$$.eventNamespace, function($event$$515$$) {
            $that$$15$$.$_initDragging$($event$$515$$, !1);
            $that$$15$$.$_mouseStop$($event$$515$$);
            $that$$15$$.$_refreshContainment$();
            $that$$15$$.$_getActiveThumb$().addClass("ui-state-active").focus();
          });
        }
        this.$_range$ = this.$_sliderContainer$.find("#" + this.$_getBarValueId$());
        var $newClass$$ = "";
        "fromMin" === $options$$378$$.type ? $newClass$$ = " oj-slider-range-min" : "fromMax" === $options$$378$$.type && ($newClass$$ = " oj-slider-range-max");
        this.$_range$.addClass($classes$$3$$ + $newClass$$);
      } else {
        this.$_range$ && this.$_range$.remove(), this.$_range$ = null;
      }
    }, $_setupTouch$:function($e$$109$$) {
      this.$_touchProxy$ = $oj$$49$$.$_TouchProxy$.$addTouchListeners$($e$$109$$);
    }, $_tearDownTouch$:function($e$$110$$) {
      $oj$$49$$.$_TouchProxy$.$removeTouchListeners$($e$$110$$);
    }, $_setupEvents$:function() {
      this.$_thumbs$.toArray().forEach(function($current$$18_thumb$$4$$) {
        $current$$18_thumb$$4$$ = $$$$45$$($current$$18_thumb$$4$$);
        this.$_UnregisterChildNode$($current$$18_thumb$$4$$);
        this._on($current$$18_thumb$$4$$, this.$_thumbEvents$);
        this.$_setupTouch$($current$$18_thumb$$4$$);
        this._hoverable($current$$18_thumb$$4$$);
        this._focusable($current$$18_thumb$$4$$);
      }, this);
    }, _destroy:function() {
      this.$_thumbs$.toArray().forEach(function($current$$19_thumb$$5$$) {
        $current$$19_thumb$$5$$ = $$$$45$$($current$$19_thumb$$5$$);
        this.$_tearDownTouch$($current$$19_thumb$$5$$);
      }, this);
      this.$_sliderContainer$.remove();
      $oj$$49$$.$DomUtils$.unwrap(this.element, this.$_elementWrapped$);
      this.element.css("display", this.$_inputElementOriginalDisplay$);
      this.$_RestoreAttributes$(this.element);
      return this._super();
    }, $_initDragging$:function($event$$516$$, $fromThumb$$) {
      var $position$$36$$, $normValue$$, $distance$$, $index$$241$$, $that$$16$$ = this, $o$$11$$ = this.options;
      this.$_closestThumb$ = this.$_thumb$;
      if ($o$$11$$.disabled || $o$$11$$.readOnly) {
        return!1;
      }
      !$fromThumb$$ || this.$_multipleThumbs$ ? ($position$$36$$ = {x:$event$$516$$.pageX, y:$event$$516$$.pageY}, $normValue$$ = this.$_getNormValueFromMouse$($position$$36$$)) : $normValue$$ = this.$_getNormValueFromThumb$();
      $distance$$ = this.$_valueMax$() - this.$_valueMin$() + 1;
      this.$_multipleThumbs$ && this.$_thumbs$.each(function($i$$398$$) {
        var $thisDistance$$ = Math.abs($normValue$$ - $that$$16$$.$_getMultiValues$($i$$398$$));
        if ($distance$$ > $thisDistance$$ || $distance$$ === $thisDistance$$ && ($i$$398$$ === $that$$16$$.$_lastChangedValueIndex$ || $that$$16$$.$_getMultiValues$($i$$398$$) === $o$$11$$.min)) {
          $distance$$ = $thisDistance$$, this.$_closestThumb$ = $$$$45$$(this), $index$$241$$ = $i$$398$$;
        }
      });
      this.$_dragInProgress$ = !0;
      this.$_thumbIndex$ = $index$$241$$;
      if (this.$_closestThumb$) {
        return this.$_thumbs$.hasClass("ui-state-hover") || this.$_slide$($event$$516$$, $index$$241$$, $normValue$$), this.$_getActiveThumb$().addClass("ui-state-active").focus(), !0;
      }
    }, $_mouseStart$:function() {
      return!0;
    }, $_mouseDrag$:function() {
      var $pct$$ = 100 * this.$_getFracFromThumb$();
      this.$_multipleThumbs$ ? this.$_setRangeMultiThumb$($pct$$, this.$_thumbIndex$) : this.$_setRange$($pct$$);
      return!1;
    }, $_mouseStop$:function($event$$518$$) {
      this.$_thumbs$.removeClass("ui-state-active");
      this.$_dragInProgress$ = !1;
      var $normValue$$1$$ = this.$_getNormValueFromThumb$();
      this.$_slide$($event$$518$$, this.$_thumbIndex$, $normValue$$1$$);
      this.$_change$($event$$518$$, this.$_thumbIndex$);
      this.$_thumbIndex$ = null;
      return!1;
    }, $_isVertical$:function() {
      return "vertical" === this.options.orientation;
    }, $_getOrientationAdjustedFrac$:function($frac$$) {
      1 < $frac$$ && ($frac$$ = 1);
      0 > $frac$$ && ($frac$$ = 0);
      this.$_isVertical$() && ($frac$$ = 1 - $frac$$);
      return $frac$$;
    }, $_getNormValueFromMouse$:function($position$$37_valueTotal$$) {
      var $fracMouse$$ = this.$_getFracFromMouse$($position$$37_valueTotal$$);
      $position$$37_valueTotal$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracMouse$$ = 1 - $fracMouse$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracMouse$$ * $position$$37_valueTotal$$);
    }, $_getFracFromMouse$:function($pixelMouse$$1_position$$38$$) {
      var $fracMouse$$1_pixelTotal$$1$$;
      this.$_isVertical$() ? ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.height(), $pixelMouse$$1_position$$38$$ = $pixelMouse$$1_position$$38$$.y - this.$_barback$.offset().top) : ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.width(), $pixelMouse$$1_position$$38$$ = $pixelMouse$$1_position$$38$$.x - this.$_barback$.offset().left);
      return 0 == $fracMouse$$1_pixelTotal$$1$$ ? 1 : $fracMouse$$1_pixelTotal$$1$$ = this.$_getOrientationAdjustedFrac$($pixelMouse$$1_position$$38$$ / $fracMouse$$1_pixelTotal$$1$$);
    }, $_getActiveThumb$:function() {
      return this.$_multipleThumbs$ ? $$$$45$$(this.$_thumbs$[this.$_thumbIndex$]) : this.$_thumb$;
    }, $_getFracFromThumb$:function() {
      var $fracThumb_pixelTotal$$2_thumb$$7$$, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$;
      $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_getActiveThumb$();
      this.$_isVertical$() ? ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$ = $fracThumb_pixelTotal$$2_thumb$$7$$.outerHeight() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$ = $fracThumb_pixelTotal$$2_thumb$$7$$.offset().top + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$, $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_barback$.height(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$ -= this.$_barback$.offset().top) : ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$ = 
      $fracThumb_pixelTotal$$2_thumb$$7$$.outerWidth() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$ = $fracThumb_pixelTotal$$2_thumb$$7$$.offset().left + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$, $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_barback$.width(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$ -= this.$_barback$.offset().left);
      return 0 == $fracThumb_pixelTotal$$2_thumb$$7$$ ? 1 : $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_getOrientationAdjustedFrac$($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$13$$ / $fracThumb_pixelTotal$$2_thumb$$7$$);
    }, $_getNormValueFromThumb$:function() {
      var $fracThumb$$1$$, $valueTotal$$1$$;
      $fracThumb$$1$$ = this.$_getFracFromThumb$();
      $valueTotal$$1$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracThumb$$1$$ = 1 - $fracThumb$$1$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracThumb$$1$$ * $valueTotal$$1$$);
    }, $_slide$:function($event$$519$$, $index$$242$$, $newVal$$1$$) {
      var $otherVal$$;
      this.$_multipleThumbs$ ? ($otherVal$$ = this.$_getMultiValues$($index$$242$$ ? 0 : 1), 2 === this.options.value.length && (0 === $index$$242$$ && $newVal$$1$$ > $otherVal$$ || 1 === $index$$242$$ && $newVal$$1$$ < $otherVal$$) && ($newVal$$1$$ = $otherVal$$), $newVal$$1$$ !== this.$_getMultiValues$($index$$242$$) && this.$_setMultiValue$($event$$519$$, $index$$242$$, $newVal$$1$$)) : $newVal$$1$$ !== this.$_getSingleValue$() && (this.$_setSingleValue$($event$$519$$, $newVal$$1$$), this.$_inputtag$ && 
      this.element.val($newVal$$1$$));
    }, $_change$:function($event$$520$$, $index$$243$$) {
      this.$_keySliding$ || this.$_dragInProgress$ || (this.$_multipleThumbs$ ? (this.$_lastChangedValues$ = this.$_getNewValues$($index$$243$$, this.$_newMultiValue$[$index$$243$$]), this.$_SetValue$(this.$_lastChangedValues$, $event$$520$$)) : this.$_SetValue$(this.$_newValue$, $event$$520$$), this.$_lastChangedValueIndex$ = $index$$243$$);
    }, $_getSingleValue$:function() {
      return this.$_keySliding$ || this.$_dragInProgress$ ? isNaN(this.$_newValue$) ? this.$_getValueAligned$() : this.$_newValue$ : this.$_getValueAligned$();
    }, $_setSingleValue$:function($event$$521$$, $newValue$$15$$) {
      this.$_newValue$ = this.$_trimAlignValue$($newValue$$15$$);
      this.$_change$($event$$521$$, 0);
      this.$_refreshValue$();
    }, $_getMultiValues$:function($index$$244$$) {
      return this.$_multipleThumbs$ ? this.$_keySliding$ || this.$_dragInProgress$ ? $index$$244$$ !== this.$_thumbIndex$ || isNaN(this.$_newMultiValue$[$index$$244$$]) ? this.$_getValuesAligned$($index$$244$$) : this.$_newMultiValue$[$index$$244$$] : this.$_getValuesAligned$($index$$244$$) : this.$_getSingleValue$();
    }, $_setMultiValue$:function($event$$522$$, $index$$245$$, $newValue$$16$$) {
      this.$_newMultiValue$[$index$$245$$] = this.$_trimAlignValue$($newValue$$16$$);
      this.$_change$($event$$522$$, $index$$245$$);
      this.$_refreshValue$();
    }, _setOption:function($key$$156$$, $coercedValue$$1_value$$273$$, $flags$$43$$) {
      "value" === $key$$156$$ && (Array.isArray($coercedValue$$1_value$$273$$) ? this.$_multipleThumbs$ = !0 : (this.$_multipleThumbs$ = !1, this.$_parse$($key$$156$$, $coercedValue$$1_value$$273$$)));
      $coercedValue$$1_value$$273$$ = "max" === $key$$156$$ || "min" === $key$$156$$ ? this.$_parse$($key$$156$$, $coercedValue$$1_value$$273$$) : "step" === $key$$156$$ ? this.$_parseStep$($coercedValue$$1_value$$273$$) : $coercedValue$$1_value$$273$$;
      "disabled" != $key$$156$$ && this._super($key$$156$$, $coercedValue$$1_value$$273$$, $flags$$43$$);
      "readOnly" === $key$$156$$ && (this.$_elementWrapped$.toggleClass("oj-read-only", !!$coercedValue$$1_value$$273$$), this.$_setup$());
      "disabled" === $key$$156$$ && (this.$_disableDraggable$(), this.$_elementWrapped$.toggleClass("oj-disabled", !!$coercedValue$$1_value$$273$$), this.options.disabled = $coercedValue$$1_value$$273$$, this.$_setup$());
      switch($key$$156$$) {
        case "orientation":
          this.$_elementWrapped$.removeClass("oj-slider-horizontal oj-slider-vertical");
          this.$_barback$.removeClass("oj-slider-horizontal oj-slider-vertical");
          this.$_isVertical$() ? (this.$_elementWrapped$.addClass("oj-slider-vertical"), this.$_barback$.addClass("oj-slider-vertical")) : (this.$_elementWrapped$.addClass("oj-slider-horizontal"), this.$_barback$.addClass("oj-slider-horizontal"));
          this.$_refreshValue$();
          this.$_thumbs$.css("horizontal" === $coercedValue$$1_value$$273$$ ? "top" : "left", "");
          this.$_makeDraggable$();
          break;
        case "value":
          this.$_refreshValue$();
          this.$_makeDraggable$();
          break;
        case "step":
        ;
        case "min":
        ;
        case "max":
          this.$_calculateNewMax$();
          this.$_refreshValue$();
          this.$_makeDraggable$();
          break;
        case "range":
          this.$_setup$();
      }
    }, $_getValueAligned$:function() {
      var $val$$54$$ = this.options.value;
      return $val$$54$$ = this.$_trimAlignValue$($val$$54$$);
    }, $_getValuesAligned$:function($index$$246$$) {
      return this.$_trimAlignValue$(this.options.value[$index$$246$$]);
    }, $_getNewValues$:function($index$$247$$, $newValue$$17$$) {
      var $vals$$, $i$$400$$;
      $vals$$ = this.options.value.slice();
      for ($i$$400$$ = 0;$i$$400$$ < $vals$$.length;$i$$400$$ += 1) {
        $vals$$[$i$$400$$] = this.$_trimAlignValue$($vals$$[$i$$400$$]);
      }
      $index$$247$$ === this.$_thumbIndex$ && ($vals$$[$index$$247$$] = $newValue$$17$$);
      return $vals$$;
    }, $_trimAlignValue$:function($alignValue_val$$56$$) {
      if ($alignValue_val$$56$$ <= this.$_valueMin$()) {
        return this.$_valueMin$();
      }
      if ($alignValue_val$$56$$ >= this.$_valueMax$()) {
        return this.$_valueMax$();
      }
      var $step$$2$$ = 0 < this.options.step ? this.options.step : 1, $valModStep$$ = ($alignValue_val$$56$$ - this.$_valueMin$()) % $step$$2$$;
      $alignValue_val$$56$$ -= $valModStep$$;
      2 * Math.abs($valModStep$$) >= $step$$2$$ && ($alignValue_val$$56$$ += 0 < $valModStep$$ ? $step$$2$$ : -$step$$2$$);
      return parseFloat($alignValue_val$$56$$.toFixed(5));
    }, $_calculateNewMax$:function() {
      var $min$$7$$ = this.$_valueMin$();
      this.max = 0 !== (this.options.max - $min$$7$$) / this.options.step % 1 ? this.options.max - (this.options.max - $min$$7$$) % this.options.step : this.options.max;
    }, $_valueMin$:function() {
      return this.options.min;
    }, $_valueMax$:function() {
      return this.max;
    }, $_getGrid$:function() {
      var $numIntervals_pixelInterval$$;
      $numIntervals_pixelInterval$$ = 0 < this.options.step ? (this.$_valueMax$() - this.$_valueMin$()) / this.options.step : 100;
      $numIntervals_pixelInterval$$ = (this.$_isVertical$() ? this.$_barback$.height() : this.$_barback$.width()) / $numIntervals_pixelInterval$$;
      1 > $numIntervals_pixelInterval$$ && ($numIntervals_pixelInterval$$ = 1);
      return this.$_isVertical$() ? [1, $numIntervals_pixelInterval$$] : [$numIntervals_pixelInterval$$, 1];
    }, $_getThumbsValueFrac$:function($index$$248$$) {
      return(this.$_getMultiValues$($index$$248$$) - this.$_valueMin$()) / (this.$_valueMax$() - this.$_valueMin$());
    }, $_refreshValue$:function() {
      var $valPercent$$, $value$$274$$, $valueMin$$, $valueMax$$;
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$20$$, $i$$401$$) {
        var $thumb$$8$$ = $$$$45$$($current$$20$$);
        $valPercent$$ = 100 * this.$_getThumbsValueFrac$($i$$401$$);
        this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$);
        this.$_isVertical$() ? $$$$45$$($thumb$$8$$).css({top:100 - $valPercent$$ + "%"}) : $$$$45$$($thumb$$8$$).css({left:$valPercent$$ + "%"});
        $$$$45$$($thumb$$8$$).attr("aria-valuenow", this.$_getMultiValues$($i$$401$$));
        this.$_setRangeMultiThumb$($valPercent$$, $i$$401$$);
      }, this) : ($value$$274$$ = this.$_getValueAligned$(), $valueMin$$ = this.$_valueMin$(), $valueMax$$ = this.$_valueMax$(), $valPercent$$ = $valueMax$$ !== $valueMin$$ ? ($value$$274$$ - $valueMin$$) / ($valueMax$$ - $valueMin$$) * 100 : 0, this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$), this.$_isVertical$() ? this.$_thumb$.css({top:100 - $valPercent$$ + "%"}) : this.$_thumb$.css({left:$valPercent$$ + "%"}), $$$$45$$(this.$_thumb$).attr("aria-valuenow", $value$$274$$), 
      this.$_setRange$($valPercent$$));
    }, $_setRange$:function($val$$57$$) {
      var $oRange$$ = this.options.type;
      this.$_isVertical$() ? ("fromMin" === $oRange$$ && this.$_range$.css({height:$val$$57$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({height:100 - $val$$57$$ + "%"})) : this.$_isRTL$() ? ("fromMin" === $oRange$$ && this.$_range$.css({width:100 - $val$$57$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:$val$$57$$ + "%"})) : ("fromMin" === $oRange$$ && this.$_range$.css({width:$val$$57$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:100 - $val$$57$$ + "%"}));
    }, $_setRangeMultiThumb$:function($val$$58$$, $index$$249$$) {
      var $id$$50_thumb1Pct$$ = this.$_range$.attr("id");
      if (0 == $index$$249$$) {
        switch($id$$50_thumb1Pct$$ = 100 * this.$_getThumbsValueFrac$(1), this.options.type) {
          case "fromMin":
            this.$_isVertical$() ? this.$_range$.css({height:$val$$58$$ + "%"}) : this.$_range$.css({width:$val$$58$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? (this.$_range$.css({top:100 - $id$$50_thumb1Pct$$ + "%"}), this.$_range$.css({height:$id$$50_thumb1Pct$$ - $val$$58$$ + "%"})) : this.$_isRTL$() ? (this.$_range$.css({left:100 - $id$$50_thumb1Pct$$ + "%"}), this.$_range$.css({width:$id$$50_thumb1Pct$$ - (100 - $val$$58$$) + "%"})) : (this.$_range$.css({left:$val$$58$$ + "%"}), this.$_range$.css({width:$id$$50_thumb1Pct$$ - $val$$58$$ + "%"}));
        }
      } else {
        var $thumb0Pct$$ = 100 * this.$_getThumbsValueFrac$(0);
        switch(this.options.type) {
          case "fromMax":
            this.$_isVertical$() ? this.$_range$.css({height:100 - $val$$58$$ + "%"}) : this.$_range$.css({width:100 - $val$$58$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? document.getElementById($id$$50_thumb1Pct$$) && (this.$_range$.css({top:100 - $val$$58$$ + "%"}), this.$_range$.css({height:$val$$58$$ - $thumb0Pct$$ + "%"})) : this.$_isRTL$() ? document.getElementById($id$$50_thumb1Pct$$) && (this.$_range$.css({left:$val$$58$$ + "%"}), this.$_range$.css({width:-$val$$58$$ + 100 - $thumb0Pct$$ + "%"})) : document.getElementById($id$$50_thumb1Pct$$) && this.$_range$.css({width:$val$$58$$ - parseInt(document.getElementById($id$$50_thumb1Pct$$).style.left, 
            10) + "%"});
        }
      }
    }, $_thumbEvents$:{keydown:function($event$$523$$) {
      var $curVal_tempVal$$, $newVal$$2$$, $step$$3$$, $index$$250$$ = $$$$45$$($event$$523$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$250$$;
      switch($event$$523$$.keyCode) {
        case $$$$45$$.ui.keyCode.HOME:
        ;
        case $$$$45$$.ui.keyCode.END:
        ;
        case $$$$45$$.ui.keyCode.PAGE_UP:
        ;
        case $$$$45$$.ui.keyCode.PAGE_DOWN:
        ;
        case $$$$45$$.ui.keyCode.UP:
        ;
        case $$$$45$$.ui.keyCode.RIGHT:
        ;
        case $$$$45$$.ui.keyCode.DOWN:
        ;
        case $$$$45$$.ui.keyCode.LEFT:
          $event$$523$$.preventDefault(), this.$_keySliding$ || (this.$_keySliding$ = !0, $$$$45$$($event$$523$$.target).addClass("ui-state-active"));
      }
      $step$$3$$ = this.options.step;
      $curVal_tempVal$$ = this.$_multipleThumbs$ ? $newVal$$2$$ = this.$_getMultiValues$($index$$250$$) : $newVal$$2$$ = this.$_getSingleValue$();
      switch($event$$523$$.keyCode) {
        case $$$$45$$.ui.keyCode.HOME:
          $newVal$$2$$ = this.$_valueMin$();
          break;
        case $$$$45$$.ui.keyCode.END:
          $newVal$$2$$ = this.$_valueMax$();
          break;
        case $$$$45$$.ui.keyCode.PAGE_UP:
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ + (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$45$$.ui.keyCode.PAGE_DOWN:
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ - (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$45$$.ui.keyCode.UP:
        ;
        case $$$$45$$.ui.keyCode.RIGHT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$3$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$3$$;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$);
          break;
        case $$$$45$$.ui.keyCode.DOWN:
        ;
        case $$$$45$$.ui.keyCode.LEFT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$3$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$3$$;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$);
      }
      this.$_slide$($event$$523$$, $index$$250$$, $newVal$$2$$);
    }, keyup:function($event$$524$$) {
      var $index$$251$$ = $$$$45$$($event$$524$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$251$$;
      this.$_keySliding$ && (this.$_keySliding$ = !1, this.$_change$($event$$524$$, $index$$251$$), $$$$45$$($event$$524$$.target).removeClass("ui-state-active"));
      this.$_thumbIndex$ = null;
      this.$_refreshContainment$();
    }}, $_InitOptions$:function($originalDefaults$$16$$, $constructorOptions$$18$$) {
      var $opts$$37$$ = this.options, $self$$169$$ = this;
      this._superApply(arguments);
      $oj$$49$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"value", $defaultOptionValue$:null}, {$attribute$:"readonly", option:"readOnly", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}, {$attribute$:"min", $defaultOptionValue$:null}, 
      {$attribute$:"max", $defaultOptionValue$:null}, {$attribute$:"step", $defaultOptionValue$:1}], $constructorOptions$$18$$, this, function($initializedOptions$$2$$) {
        for (var $toParse$$1$$ = ["value", "step", "min", "max"], $i$$402$$ = 0;$i$$402$$ < $toParse$$1$$.length;$i$$402$$++) {
          var $opt$$21$$ = $toParse$$1$$[$i$$402$$], $value$$275$$ = $opt$$21$$ in $initializedOptions$$2$$ ? $initializedOptions$$2$$[$opt$$21$$] : $opts$$37$$[$opt$$21$$];
          null != $value$$275$$ && ("step" === $opt$$21$$ ? $initializedOptions$$2$$[$opt$$21$$] = $self$$169$$.$_parseStep$($value$$275$$) : "min" === $opt$$21$$ || "max" === $opt$$21$$ ? $initializedOptions$$2$$[$opt$$21$$] = $self$$169$$.$_parse$($opt$$21$$, $value$$275$$) : "value" === $opt$$21$$ && (Array.isArray($value$$275$$) ? $initializedOptions$$2$$[$opt$$21$$] = $value$$275$$ : $initializedOptions$$2$$[$opt$$21$$] = $self$$169$$.$_parse$($opt$$21$$, $value$$275$$)));
        }
      });
      if (void 0 === $opts$$37$$.value) {
        throw Error(this.$getTranslatedString$("noValue"));
      }
      if (null != $opts$$37$$.min && null != $opts$$37$$.max) {
        if ($opts$$37$$.max < $opts$$37$$.min) {
          throw Error(this.$getTranslatedString$("maxMin"));
        }
        if ($opts$$37$$.value < $opts$$37$$.min || $opts$$37$$.value > $opts$$37$$.max) {
          throw Error(this.$getTranslatedString$("valueRange"));
        }
      }
    }, getNodeBySubId:function($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$) {
      if (null == $barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$) {
        return this.element ? this.element[0] : null;
      }
      $barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ = $barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$.subId;
      return "oj-slider-thumb-0" === $barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ = "#" + this.$_getThumbId$(0), this.widget().find($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$)[0]) : "oj-slider-thumb-1" === $barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ = "#" + this.$_getThumbId$(1), this.widget().find($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$)[0]) : 
      "oj-slider-bar" === $barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ = "#" + this.$_getBarBackgroundId$(), this.widget().find($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$)[0]) : "oj-slider-bar-value" === $barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$ = "#" + this.$_getBarValueId$(), this.widget().find($barId$$1_barValueId_locator$$49_subId$$47_thumbId$$4$$)[0]) : 
      null;
    }, getSubIdByNode:function($node$$74$$) {
      if (null != $node$$74$$) {
        if ($node$$74$$.id === this.$_getThumbId$(0) && $$$$45$$($node$$74$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-0"};
        }
        if ($node$$74$$.id === this.$_getThumbId$(1) && $$$$45$$($node$$74$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-1"};
        }
        if ($node$$74$$.id === this.$_getBarBackgroundId$() && $$$$45$$($node$$74$$).hasClass("oj-slider-bar")) {
          return{subId:"oj-slider-bar"};
        }
        if ($node$$74$$.id === this.$_getBarValueId$() && $$$$45$$($node$$74$$).hasClass("oj-slider-bar-value")) {
          return{subId:"oj-slider-bar-value"};
        }
      }
      return null;
    }, _GetDefaultStyleClass:function() {
      return "oj-slider";
    }, $_parse$:function($option$$33$$, $val$$59$$) {
      var $returnValue$$3$$;
      $returnValue$$3$$ = null !== $val$$59$$ ? +$val$$59$$ : $val$$59$$;
      if (isNaN($returnValue$$3$$)) {
        throw Error(this.$getTranslatedString$("optionNum", {option:$option$$33$$}));
      }
      return $returnValue$$3$$;
    }, $_parseStep$:function($parsedStep$$1_val$$60$$) {
      if (null === $parsedStep$$1_val$$60$$) {
        return 1;
      }
      $parsedStep$$1_val$$60$$ = this.$_parse$("step", $parsedStep$$1_val$$60$$);
      if (0 >= $parsedStep$$1_val$$60$$) {
        throw Error(this.$getTranslatedString$("invalidStep"));
      }
      if (null === $parsedStep$$1_val$$60$$ || 0 >= $parsedStep$$1_val$$60$$) {
        $parsedStep$$1_val$$60$$ = 1;
      }
      return $parsedStep$$1_val$$60$$;
    }, $_getEndInterval$:function() {
      return this.$_barback$.offset().left + this.$_barback$.width();
    }, $_getStartInterval$:function() {
      return this.$_barback$.offset().left;
    }, $_getContainmentArrayRange$:function($index$$252_valFrac$$) {
      var $c$$48_y2$$1$$ = this.$_getContainmentArray$(), $x1$$3$$ = $c$$48_y2$$1$$[0], $y1$$3$$ = $c$$48_y2$$1$$[1], $x2$$1$$ = $c$$48_y2$$1$$[2], $c$$48_y2$$1$$ = $c$$48_y2$$1$$[3];
      this.$_thumb$.outerHeight();
      switch($index$$252_valFrac$$) {
        case 0:
          $index$$252_valFrac$$ = this.$_getThumbsValueFrac$(1);
          this.$_isVertical$() ? ($c$$48_y2$$1$$ = this.$_barback$.offset().top + this.$_barback$.height(), $y1$$3$$ = this.$_barback$.offset().top + (1 - $index$$252_valFrac$$) * this.$_barback$.height()) : this.$_isRTL$() ? ($x2$$1$$ = this.$_getEndInterval$(), $x1$$3$$ = $x2$$1$$ - $index$$252_valFrac$$ * this.$_barback$.width()) : $x2$$1$$ = $x1$$3$$ + $index$$252_valFrac$$ * this.$_barback$.width();
          break;
        case 1:
          $index$$252_valFrac$$ = this.$_getThumbsValueFrac$(0), this.$_isVertical$() ? ($y1$$3$$ = this.$_barback$.offset().top, $c$$48_y2$$1$$ = $y1$$3$$ + (1 - $index$$252_valFrac$$) * this.$_barback$.height()) : this.$_isRTL$() ? ($x1$$3$$ = this.$_getStartInterval$(), $x2$$1$$ = $x1$$3$$ + (1 - $index$$252_valFrac$$) * this.$_barback$.width()) : $x1$$3$$ = this.$_barback$.offset().left + $index$$252_valFrac$$ * this.$_barback$.width();
      }
      return[$x1$$3$$, $y1$$3$$, $x2$$1$$, $c$$48_y2$$1$$];
    }, $_getContainmentArray$:function() {
      var $x1$$4$$ = this.$_barback$.offset().left, $y1$$4$$;
      $y1$$4$$ = this.$_barback$.offset().top;
      var $x2$$2$$ = $x1$$4$$ + this.$_barback$.width(), $y2$$2$$ = $y1$$4$$ + this.$_barback$.height();
      return[$x1$$4$$, $y1$$4$$, $x2$$2$$, $y2$$2$$];
    }, $_callDraggable$:function($thumbParam$$, $containmentArray$$) {
      var $g$$1$$ = this.$_getGrid$(), $that$$17$$ = this;
      $thumbParam$$.draggable({axis:this.$_isVertical$() ? "y" : "x", containment:$containmentArray$$, grid:$g$$1$$, disabled:!1, start:function($event$$525$$) {
        $that$$17$$.$_initDragging$($event$$525$$, !0);
      }, drag:function($event$$526$$) {
        $that$$17$$.$_mouseDrag$($event$$526$$);
      }, stop:function($event$$527$$) {
        $that$$17$$.$_mouseStop$($event$$527$$);
        $that$$17$$.$_refreshContainment$();
      }});
    }, $_refreshContainment$:function() {
      var $containmentArray$$1$$;
      this.$_multipleThumbs$ && this.$_thumbs$.toArray().forEach(function($current$$21$$, $i$$403$$) {
        var $thumb$$9$$ = $$$$45$$($current$$21$$);
        $containmentArray$$1$$ = this.$_getContainmentArrayRange$($i$$403$$);
        $thumb$$9$$.draggable("option", "containment", $containmentArray$$1$$);
      }, this);
    }, $_makeDraggable$:function() {
      if (!this.options.disabled) {
        var $containmentArray$$2$$;
        this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$22$$, $i$$404$$) {
          var $thumb$$10$$ = $$$$45$$($current$$22$$);
          $containmentArray$$2$$ = this.$_getContainmentArrayRange$($i$$404$$);
          this.$_callDraggable$($thumb$$10$$, $containmentArray$$2$$);
        }, this) : ($containmentArray$$2$$ = this.$_getContainmentArray$(), this.$_callDraggable$(this.$_thumb$, $containmentArray$$2$$));
      }
    }, $_disableDraggable$:function() {
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$23_thumb$$11$$) {
        $current$$23_thumb$$11$$ = $$$$45$$($current$$23_thumb$$11$$);
        $current$$23_thumb$$11$$.is(".ui-draggable") && $current$$23_thumb$$11$$.draggable("disable");
      }, this) : this.$_thumb$.is(".ui-draggable") && this.$_thumb$.draggable("disable");
    }});
  })();
});
