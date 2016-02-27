/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$370$$, $callback$$103$$, $callbackObj$$59$$, $bStaticRendering$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$370$$, $callback$$103$$, $callbackObj$$59$$);
  this.$_bStaticRendering$ = $bStaticRendering$$;
  this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$370$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), 
  this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$123$$) {
  this.$Options$ = $options$$123$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$, $container$$98_eventManager$$18_width$$86$$, $ariaId_height$$80_oldShapes_value$$164$$) {
  $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($container$$98_eventManager$$18_width$$86$$) && !(0,window.isNaN)($ariaId_height$$80_oldShapes_value$$164$$) && (this.$Width$ = $container$$98_eventManager$$18_width$$86$$, this.$Height$ = $ariaId_height$$80_oldShapes_value$$164$$);
  $ariaId_height$$80_oldShapes_value$$164$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$98_eventManager$$18_width$$86$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChildAt$($container$$98_eventManager$$18_width$$86$$, 0);
  this.$Render$($container$$98_eventManager$$18_width$$86$$, this.$Width$, this.$Height$);
  var $bData$$inline_6265_newObjs$$inline_11009$$ = $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$ = this.$Width$, $context$$inline_6274_endState$$inline_11015_height$$inline_6268$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_11011_animationOnDataChange$$inline_6270$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDataChange, $animationOnDisplay$$inline_6271_i$$inline_11012$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDisplay, $animationDuration$$inline_6272$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$getOptions$().animationDuration) / 1E3;
  if($animationOnDisplay$$inline_6271_i$$inline_11012$$ || $animatedObjs$$inline_11011_animationOnDataChange$$inline_6270$$) {
    $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$, $context$$inline_6274_endState$$inline_11015_height$$inline_6268$$);
    $context$$inline_6274_endState$$inline_11015_height$$inline_6268$$ = this.$getCtx$();
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_6271_i$$inline_11012$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_6274_endState$$inline_11015_height$$inline_6268$$, $animationOnDisplay$$inline_6271_i$$inline_11012$$, $container$$98_eventManager$$18_width$$86$$, $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$, $animationDuration$$inline_6272$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_6271_i$$inline_11012$$, $animationDuration$$inline_6272$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_11011_animationOnDataChange$$inline_6270$$ && $bData$$inline_6265_newObjs$$inline_11009$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_6274_endState$$inline_11015_height$$inline_6268$$, $animatedObjs$$inline_11011_animationOnDataChange$$inline_6270$$, this.$_container$, $container$$98_eventManager$$18_width$$86$$, $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$, $animationDuration$$inline_6272$$)) {
          $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_6265_newObjs$$inline_11009$$ = this.$__shapes$;
          $animatedObjs$$inline_11011_animationOnDataChange$$inline_6270$$ = [];
          for($animationOnDisplay$$inline_6271_i$$inline_11012$$ = 0;$animationOnDisplay$$inline_6271_i$$inline_11012$$ < $ariaId_height$$80_oldShapes_value$$164$$.length;$animationOnDisplay$$inline_6271_i$$inline_11012$$++) {
            var $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$ = $bData$$inline_6265_newObjs$$inline_11009$$[$animationOnDisplay$$inline_6271_i$$inline_11012$$], $animation$$inline_11016_startState$$inline_11014$$ = $ariaId_height$$80_oldShapes_value$$164$$[$animationOnDisplay$$inline_6271_i$$inline_11012$$].$getAnimationParams$(), $context$$inline_6274_endState$$inline_11015_height$$inline_6268$$ = $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$.$getAnimationParams$();
            $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$.$setAnimationParams$($animation$$inline_11016_startState$$inline_11014$$);
            $animation$$inline_11016_startState$$inline_11014$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$, $animationDuration$$inline_6272$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_11016_startState$$inline_11014$$.$_animator$, "typeNumberArray", $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$, $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$.$getAnimationParams$, $bounds$$inline_6273_newObj$$inline_11013_width$$inline_6267$$.$setAnimationParams$, $context$$inline_6274_endState$$inline_11015_height$$inline_6268$$);
            $animatedObjs$$inline_11011_animationOnDataChange$$inline_6270$$.push($animation$$inline_11016_startState$$inline_11014$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$inline_11011_animationOnDataChange$$inline_6270$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$98_eventManager$$18_width$$86$$
  }
  this.$_editingOverlay$ && this.$Options$.readOnly === D.$JSCompiler_alias_FALSE$$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$));
  !this.$_bStaticRendering$ && !this.$Options$.readOnly && ($container$$98_eventManager$$18_width$$86$$.$setAriaRole$("slider"), $container$$98_eventManager$$18_width$$86$$.$setAriaProperty$("valuemin", this.$Options$.min), $container$$98_eventManager$$18_width$$86$$.$setAriaProperty$("valuemax", this.$Options$.max), $ariaId_height$$80_oldShapes_value$$164$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $container$$98_eventManager$$18_width$$86$$.$setAriaProperty$("valuenow", 
  $ariaId_height$$80_oldShapes_value$$164$$), $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), (0,D.$DvtAgent$isTouchDevice$$)() && (this.$_container$.$setAriaProperty$("live", "assertive"), $ariaId_height$$80_oldShapes_value$$164$$ != $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ && ($bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ = $ariaId_height$$80_oldShapes_value$$164$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "ARIA_LABEL_DESC_DELIMITER") + $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$)), $ariaId_height$$80_oldShapes_value$$164$$ != $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$ && $container$$98_eventManager$$18_width$$86$$.$setAriaProperty$("label", $bBlackBoxUpdate$$inline_6269_options$$124_tooltip$$30$$), this.$_renderCount$ = this.$_renderCount$ != D.$JSCompiler_alias_NULL$$ ? this.$_renderCount$ + 1 : 0, $ariaId_height$$80_oldShapes_value$$164$$ = this.getId() + "_" + this.$_renderCount$, 
  $container$$98_eventManager$$18_width$$86$$.setId($ariaId_height$$80_oldShapes_value$$164$$), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$getCtx$(), $container$$98_eventManager$$18_width$$86$$), ($container$$98_eventManager$$18_width$$86$$ = this.$__getEventManager$()) && $container$$98_eventManager$$18_width$$86$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), D.$JSCompiler_alias_TRUE$$));
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$()
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  var $tooltip$$31$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), $color$$52$$ = D.$DvtGaugeStyleUtils$$.$getColor$(this);
  return new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $tooltip$$31$$, $color$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  this.$render$();
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$ = function $$JSCompiler_StaticMethods_UpdateAriaLiveValue$$$($JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$, $container$$101$$, $value$$165$$) {
  $value$$165$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($value$$165$$ ? $value$$165$$ : $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$.$Options$.value, $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$);
  $container$$101$$.$setAriaProperty$("valuenow", $value$$165$$);
  (0,D.$DvtAgent$isTouchDevice$$)() && $container$$101$$.$setAriaProperty$("label", $value$$165$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$196$$, $y$$170$$) {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$196$$, $y$$170$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$197$$, $y$$171$$) {
  this.$_oldValue$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$197$$, $y$$171$$)), this.$renderUpdate$(), this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$)))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$198$$, $y$$172$$) {
  this.$__processValueChangeMove$($x$$198$$, $y$$172$$);
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $value$$166$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $tooltip$$32$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    $value$$166$$ != $tooltip$$32$$ && ($tooltip$$32$$ = $value$$166$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER") + $tooltip$$32$$, this.$_container$.$setAriaProperty$("label", $tooltip$$32$$))
  }
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$55$$, $b$$40$$) {
  return $a$$55$$.max != D.$JSCompiler_alias_NULL$$ && $b$$40$$.max != D.$JSCompiler_alias_NULL$$ ? $a$$55$$.max - $b$$40$$.max : $a$$55$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
  return new D.$DvtGaugeAutomation$$(this)
};
D.$DvtGauge$$.prototype.getAutomation = D.$DvtGauge$$.prototype.$getAutomation$;
D.$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$14$$) {
  return new D.$DvtGaugeKeyboardHandler$$($manager$$14$$, this)
};
D.$DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "GAUGE")
};
D.$DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
  if(!this.$_bStaticRendering$) {
    var $tooltip$$33$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    (0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this) ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), $tooltip$$33$$ ? [$tooltip$$33$$] : D.$JSCompiler_alias_NULL$$)]))) : 
    (this.$getCtx$().$setAriaRole$("application"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), 
    $tooltip$$33$$ ? [$tooltip$$33$$] : D.$JSCompiler_alias_NULL$$)))
  }
};
D.$DvtGaugeAutomation$$ = (0,D.$JSCompiler_set$$)("$_gauge$");
(0,D.$goog$exportPath_$$)("DvtGaugeAutomation", D.$DvtGaugeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeAutomation$$, D.$DvtAutomation$$, "DvtGaugeAutomation");
D.$DvtGaugeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtGaugeAutomation$$$$$getDomElementForSubId$$($subId$$12$$) {
  return"tooltip" == $subId$$12$$ ? (0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_gauge$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeAutomation$$.prototype.getDomElementForSubId = D.$DvtGaugeAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$getOptions$().value
};
D.$DvtGaugeAutomation$$.prototype.getValue = D.$DvtGaugeAutomation$$.prototype.getValue;
D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
D.$DvtGaugeAutomation$$.prototype.getMetricLabel = D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$;
(0,D.$DvtBundle$addDefaultStrings$$)("DvtGaugeBundle", {});
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"off", scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), textType:"number"}, title:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), position:"auto"}, _thresholdColors:["#D62800", 
"#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$88$$) {
  $defaultsMap$$1_ret$$88$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$88$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$18$$) {
  return"skyros" == $gauge$$18$$.$getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$14_options$$125$$) {
  $gauge$$14_options$$125$$ = $gauge$$14_options$$125$$.$getOptions$();
  return!$gauge$$14_options$$125$$ || (0,window.isNaN)($gauge$$14_options$$125$$.value) || $gauge$$14_options$$125$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$15$$, $value$$167$$) {
  var $options$$126_thresholds$$1$$ = $gauge$$15$$.$getOptions$(), $gaugeValue$$ = $value$$167$$ != D.$JSCompiler_alias_NULL$$ ? $value$$167$$ : $options$$126_thresholds$$1$$.value, $options$$126_thresholds$$1$$ = $options$$126_thresholds$$1$$.thresholds;
  if(!$options$$126_thresholds$$1$$) {
    return-1
  }
  for(var $i$$606$$ = 0;$i$$606$$ < $options$$126_thresholds$$1$$.length;$i$$606$$++) {
    if($gaugeValue$$ <= $options$$126_thresholds$$1$$[$i$$606$$].max) {
      return $i$$606$$
    }
  }
  return $options$$126_thresholds$$1$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$16$$, $index$$204$$) {
  var $thresholds$$2$$ = $gauge$$16$$.$getOptions$().thresholds;
  return $thresholds$$2$$ && 0 <= $index$$204$$ && $index$$204$$ < $thresholds$$2$$.length ? $thresholds$$2$$[$index$$204$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$17$$, $index$$205$$) {
  var $referenceObjects$$ = $gauge$$17$$.$getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$205$$ && $index$$205$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$205$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$19$$) {
  this.Init($gauge$$19$$.$getCtx$(), $gauge$$19$$.$__dispatchEvent$, $gauge$$19$$);
  this.$_gauge$ = $gauge$$19$$;
  this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$27_event$$492$$) {
  this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$27_event$$492$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$27_event$$492$$.pageX, $coords$$27_event$$492$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$27_event$$492$$.x, $coords$$27_event$$492$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$27_event$$492$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$28_event$$493$$) {
  this.$IsMouseEditing$ ? (this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$28_event$$493$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$28_event$$493$$.pageX, $coords$$28_event$$493$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$28_event$$493$$.x, $coords$$28_event$$493$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$28_event$$493$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$494$$) {
  if(this.$IsMouseEditing$) {
    var $coords$$29$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$494$$.pageX, $event$$494$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$29$$.x, $coords$$29$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$IsMouseEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$494$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$495$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$495$$.type && this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$495$$.touches[0].pageX, $event$$495$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$30$$.x, $coords$$30$$.y);
    $event$$495$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$495$$.type && this.$IsMouseEditing$ ? ($coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$495$$.touches[0].pageX, $event$$495$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$30$$.x, $coords$$30$$.y), $event$$495$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$495$$.type && this.$IsMouseEditing$ && (this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$495$$.changedTouches[0].pageX, $event$$495$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$30$$.x, $coords$$30$$.y), $event$$495$$.preventDefault())
  }
  (!this.$IsMouseEditing$ || this.$IsShowingTooltipWhileEditing$()) && D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$495$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$496$$) {
  if(!this.$KeyboardHandler$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  this.$KeyboardHandler$.$processKeyDown$($event$$496$$);
  var $keyCode$$33_pos$$45$$ = $event$$496$$.keyCode;
  if(38 == $keyCode$$33_pos$$45$$ || 37 == $keyCode$$33_pos$$45$$ || 40 == $keyCode$$33_pos$$45$$ || 39 == $keyCode$$33_pos$$45$$ || 9 == $keyCode$$33_pos$$45$$) {
    $keyCode$$33_pos$$45$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_gauge$.$getCtx$()), (0,D.$JSCompiler_StaticMethods_ProcessObjectTooltip$$)(this, $event$$496$$, $keyCode$$33_pos$$45$$.x, $keyCode$$33_pos$$45$$.y, this.$_gauge$.$__getLogicalObject$(), this.$_gauge$)
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$OnBlur$ = function $$JSCompiler_prototypeAlias$$$$OnBlur$$($event$$497$$) {
  D.$DvtGaugeEventManager$$.$superclass$.$OnBlur$.call(this, $event$$497$$);
  this.$hideTooltip$()
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$9_stageCoords$$, $pageY$$9$$) {
  $pageX$$9_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$getCtx$(), $pageX$$9_stageCoords$$, $pageY$$9$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$9_stageCoords$$)
};
D.$DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGaugeKeyboardHandler$$ = function $$DvtGaugeKeyboardHandler$$$($manager$$15$$, $gauge$$20$$) {
  this.Init($manager$$15$$, $gauge$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtGaugeKeyboardHandler");
D.$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$16$$, $gauge$$21$$) {
  D.$DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$16$$);
  this.$_gauge$ = $gauge$$21$$
};
D.$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$498$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$ = $event$$498$$.keyCode, $isR2L$$6_oldValue$$inline_6297_oldValue$$inline_6300$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_gauge$.$getCtx$());
  if(38 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$ == ($isR2L$$6_oldValue$$inline_6297_oldValue$$inline_6300$$ ? 37 : 39)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_6297_oldValue$$inline_6300$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value + $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.max - 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$render$(), 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_6297_oldValue$$inline_6300$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), (0,D.$DvtEventManager$consumeEvent$$)($event$$498$$)
  }else {
    if(40 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$ == ($isR2L$$6_oldValue$$inline_6297_oldValue$$inline_6300$$ ? 39 : 37)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_6297_oldValue$$inline_6300$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value - $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.max - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$render$(), 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_6297_oldValue$$inline_6300$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6299_JSCompiler_StaticMethods___increaseValue$self$$inline_6296_keyCode$$34$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), (0,D.$DvtEventManager$consumeEvent$$)($event$$498$$)
    }
  }
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$29$$) {
  var $options$$137$$ = $gauge$$29$$.$getOptions$(), $thresholdIndex$$1$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$29$$), $threshold$$7$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$29$$, $thresholdIndex$$1$$);
  return $threshold$$7$$ && (!($gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$137$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$29$$, $threshold$$7$$, $thresholdIndex$$1$$) : $options$$137$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$30$$) {
  var $options$$138$$ = $gauge$$30$$.$getOptions$(), $threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$30$$);
  return($threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$30$$, $threshold$$8_thresholdIndex$$2$$)) && $threshold$$8_thresholdIndex$$2$$.borderColor && (!($gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$138$$.thresholdDisplay) ? $threshold$$8_thresholdIndex$$2$$.borderColor : $options$$138$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$31$$) {
  var $options$$139$$ = $gauge$$31$$.$getOptions$(), $thresholdIndex$$3$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$31$$), $threshold$$9$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$31$$, $thresholdIndex$$3$$);
  return $threshold$$9$$ && (!($gauge$$31$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$31$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$139$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$31$$, $threshold$$9$$, $thresholdIndex$$3$$) : $options$$139$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$32_options$$140$$, $threshold$$10$$, $thresholdIndex$$4$$) {
  if($threshold$$10$$.color) {
    return $threshold$$10$$.color
  }
  $gauge$$32_options$$140$$ = $gauge$$32_options$$140$$.$getOptions$();
  return $gauge$$32_options$$140$$._thresholdColors[$thresholdIndex$$4$$ % $gauge$$32_options$$140$$._thresholdColors.length]
};
D.$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$1$$) {
  return"rectangleAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : 
  "rectangleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ : D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
D.$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$1$$) {
  return"needleAntique" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
D.$DvtGaugeStyleUtils$$.$hasTitle$ = function $$DvtGaugeStyleUtils$$$$hasTitle$$($options$$141$$) {
  return!!$options$$141$$.title.text
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$22$$, $container$$102$$, $availSpace$$83$$) {
  var $labelStyle$$14_options$$128$$ = $gauge$$22$$.$getOptions$(), $emptyTextStr$$1$$ = $labelStyle$$14_options$$128$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = (0,D.$DvtBundle$getTranslation$$)($labelStyle$$14_options$$128$$, "labelNoData", "DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  $labelStyle$$14_options$$128$$ = $labelStyle$$14_options$$128$$.metricLabel.style;
  $labelStyle$$14_options$$128$$.$getStyle$("font-size") || $labelStyle$$14_options$$128$$.$setStyle$("font-size", "13px");
  if($gauge$$22$$ instanceof D.$DvtStatusMeterGauge$$) {
    var $labelColor$$1$$ = $labelStyle$$14_options$$128$$.$getStyle$("color");
    $labelStyle$$14_options$$128$$.$setStyle$("color", $labelColor$$1$$ ? $labelColor$$1$$ : "#333333")
  }
  D.$DvtTextUtils$$.$renderEmptyText$($container$$102$$, $emptyTextStr$$1$$, new D.$DvtRectangle$$($availSpace$$83$$.x, $availSpace$$83$$.y, $availSpace$$83$$.$w$, $availSpace$$83$$.$h$), $gauge$$22$$.$__getEventManager$(), $labelStyle$$14_options$$128$$)
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$168$$, $gauge$$23$$) {
  var $options$$129$$ = $gauge$$23$$.$getOptions$();
  return $options$$129$$.metricLabel.text ? $options$$129$$.metricLabel.text : D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$168$$, $gauge$$23$$, $options$$129$$.metricLabel.converter, $options$$129$$.metricLabel.scaling, $options$$129$$.metricLabel.autoPrecision ? $options$$129$$.metricLabel.autoPrecision : "on", "percent" == $options$$129$$.metricLabel.textType)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$169$$, $gauge$$24$$) {
  var $options$$130$$ = $gauge$$24$$.$getOptions$(), $converter$$6$$ = D.$JSCompiler_alias_NULL$$, $isPercent$$1$$ = "percent" == $options$$130$$.tickLabel.textType;
  "on" == $options$$130$$.tickLabel.rendered && $options$$130$$.tickLabel.converter && ($converter$$6$$ = $options$$130$$.tickLabel.converter);
  var $scaling$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$130$$.tickLabel.rendered && $options$$130$$.tickLabel.scaling && ($scaling$$2$$ = $options$$130$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$169$$, $gauge$$24$$, $converter$$6$$, $scaling$$2$$, $options$$130$$.tickLabel.autoPrecision ? $options$$130$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($output_value$$170$$, $formatter$$1_gauge$$25$$, $converter$$7$$, $scaling$$3$$, $autoPrecision$$7$$, $isPercent$$2$$) {
  var $options$$131$$ = $formatter$$1_gauge$$25$$.$getOptions$(), $percentConverter$$1$$ = D.$JSCompiler_alias_NULL$$, $minValue$$12$$ = $options$$131$$.min, $maxValue$$11$$ = $options$$131$$.max, $difference$$ = $maxValue$$11$$ - $minValue$$12$$, $increment$$2$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$) || ($increment$$2$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $isPercent$$2$$ && ($output_value$$170$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$131$$, $options$$131$$.min, $output_value$$170$$), $percentConverter$$1$$ = (0,D.$JSCompiler_StaticMethods_getNumberConverter$$)($formatter$$1_gauge$$25$$.$getCtx$(), {style:"percent", maximumFractionDigits:0}));
  $formatter$$1_gauge$$25$$ = new D.$DvtLinearScaleAxisValueFormatter$$($formatter$$1_gauge$$25$$.$getCtx$(), $minValue$$12$$, $maxValue$$11$$, $increment$$2$$, $scaling$$3$$, $autoPrecision$$7$$);
  $output_value$$170$$ = $converter$$7$$ && $converter$$7$$.getAsString ? $formatter$$1_gauge$$25$$.$format$($output_value$$170$$, $converter$$7$$) : $converter$$7$$ && $converter$$7$$.format ? $formatter$$1_gauge$$25$$.$format$($output_value$$170$$, $converter$$7$$) : $percentConverter$$1$$ ? $formatter$$1_gauge$$25$$.$format$($output_value$$170$$, $percentConverter$$1$$) : $isPercent$$2$$ ? $formatter$$1_gauge$$25$$.$format$(100 * $output_value$$170$$) : $formatter$$1_gauge$$25$$.$format$($output_value$$170$$);
  return $isPercent$$2$$ && (!$percentConverter$$1$$ || $converter$$7$$) ? (0,window.String)($output_value$$170$$) + "%" : $output_value$$170$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$132_percentFill$$, $min$$17$$, $value$$171$$) {
  $options$$132_percentFill$$ = ($value$$171$$ - $min$$17$$) / ($options$$132_percentFill$$.max - $options$$132_percentFill$$.min);
  return $options$$132_percentFill$$ = window.Math.min(window.Math.max(0, $options$$132_percentFill$$), 1)
};
D.$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$26_metricValue$$) {
  var $options$$133$$ = $gauge$$26_metricValue$$.$getOptions$(), $threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$26_metricValue$$), $threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$26_metricValue$$, $threshold$$6_thresholdIndex$$);
  $gauge$$26_metricValue$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$133$$.value, $gauge$$26_metricValue$$);
  return $threshold$$6_thresholdIndex$$ && $threshold$$6_thresholdIndex$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $threshold$$6_thresholdIndex$$.shortDesc : $options$$133$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $options$$133$$.shortDesc : $options$$133$$.title.text ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$options$$133$$.title.text, $gauge$$26_metricValue$$]) : $gauge$$26_metricValue$$
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$27_label$$55$$, $container$$103$$, $bounds$$86$$, $color$$53$$, $halign$$5$$, $valign$$2$$) {
  var $options$$134_size$$31$$ = $gauge$$27_label$$55$$.$getOptions$(), $labelString$$4_rendered$$3$$ = D.$JSCompiler_alias_FALSE$$;
  if("on" == $options$$134_size$$31$$.metricLabel.rendered) {
    var $labelString$$4_rendered$$3$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$134_size$$31$$.value, $gauge$$27_label$$55$$), $minString$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$134_size$$31$$.min, $gauge$$27_label$$55$$), $maxString$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$134_size$$31$$.max, $gauge$$27_label$$55$$);
    $gauge$$27_label$$55$$ = new D.$DvtOutputText$$($gauge$$27_label$$55$$.$getCtx$(), $labelString$$4_rendered$$3$$, $bounds$$86$$.x + $bounds$$86$$.$w$ / 2, $bounds$$86$$.y + $bounds$$86$$.$h$ / 2);
    $gauge$$27_label$$55$$.$setCSSStyle$($options$$134_size$$31$$.metricLabel.style);
    $options$$134_size$$31$$ = ($options$$134_size$$31$$ = $options$$134_size$$31$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($options$$134_size$$31$$) : D.$JSCompiler_alias_NULL$$;
    $options$$134_size$$31$$ || ($options$$134_size$$31$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$4_rendered$$3$$, $minString$$1$$, $maxString$$1$$], $gauge$$27_label$$55$$, $bounds$$86$$), $gauge$$27_label$$55$$.$setTextString$($labelString$$4_rendered$$3$$), $gauge$$27_label$$55$$.$setFontSize$($options$$134_size$$31$$));
    "top" == $valign$$2$$ ? ($gauge$$27_label$$55$$.$setY$($bounds$$86$$.y), $gauge$$27_label$$55$$.$alignTop$()) : "middle" == $valign$$2$$ ? $gauge$$27_label$$55$$.$setY$($bounds$$86$$.y + $bounds$$86$$.$h$ / 2 - D.$DvtTextUtils$$.$getTextHeight$($gauge$$27_label$$55$$) / 2) : "bottom" == $valign$$2$$ && ($gauge$$27_label$$55$$.$setY$($bounds$$86$$.y + $bounds$$86$$.$h$), $gauge$$27_label$$55$$.$alignBottom$());
    "center" == $halign$$5$$ ? $gauge$$27_label$$55$$.$alignCenter$() : "left" == $halign$$5$$ ? ($gauge$$27_label$$55$$.$setX$($bounds$$86$$.x), $gauge$$27_label$$55$$.$alignLeft$()) : "right" == $halign$$5$$ && ($gauge$$27_label$$55$$.$setX$($bounds$$86$$.x + $bounds$$86$$.$w$), $gauge$$27_label$$55$$.$alignRight$());
    $color$$53$$ != D.$JSCompiler_alias_NULL$$ && $gauge$$27_label$$55$$.$setSolidFill$($color$$53$$);
    ($labelString$$4_rendered$$3$$ = D.$DvtTextUtils$$.$fitText$($gauge$$27_label$$55$$, $bounds$$86$$.$w$, $bounds$$86$$.$h$, $container$$103$$)) && $gauge$$27_label$$55$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)
  }
  return $labelString$$4_rendered$$3$$
};
D.$DvtGaugeRenderer$$.$renderTitle$ = function $$DvtGaugeRenderer$$$$renderTitle$$($gauge$$28_textDim$$7$$, $container$$104$$, $bounds$$87$$, $color$$54$$) {
  var $options$$135_title$$11$$ = $gauge$$28_textDim$$7$$.$getOptions$(), $rendered$$4_tempTitle_titleString$$ = D.$JSCompiler_alias_FALSE$$;
  if(D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$135_title$$11$$)) {
    var $rendered$$4_tempTitle_titleString$$ = $options$$135_title$$11$$.title.text, $titleStyle$$ = $options$$135_title$$11$$.title.style, $options$$135_title$$11$$ = new D.$DvtMultilineText$$($gauge$$28_textDim$$7$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$), $fontStyle$$ = $titleStyle$$.$clone$();
    $options$$135_title$$11$$.$setCSSStyle$($titleStyle$$);
    var $size$$32$$ = $titleStyle$$.$getStyle$("font-size"), $size$$32$$ = $size$$32$$ ? (0,window.parseInt)($size$$32$$) : D.$JSCompiler_alias_NULL$$;
    $size$$32$$ || ($rendered$$4_tempTitle_titleString$$ = new D.$DvtOutputText$$($gauge$$28_textDim$$7$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$, 0, 0), $rendered$$4_tempTitle_titleString$$.$setCSSStyle$($titleStyle$$), $size$$32$$ = $rendered$$4_tempTitle_titleString$$.$getOptimalFontSize$($bounds$$87$$), $fontStyle$$.$setFontSize$("font-size", $size$$32$$.toString()));
    $color$$54$$ != D.$JSCompiler_alias_NULL$$ && $fontStyle$$.$setStyle$("color", $color$$54$$);
    $options$$135_title$$11$$.$setCSSStyle$($fontStyle$$);
    ($rendered$$4_tempTitle_titleString$$ = D.$DvtTextUtils$$.$fitText$($options$$135_title$$11$$, $bounds$$87$$.$w$, $bounds$$87$$.$h$, $gauge$$28_textDim$$7$$)) && $options$$135_title$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    $gauge$$28_textDim$$7$$ = $options$$135_title$$11$$.$getDimensions$();
    $options$$135_title$$11$$.$setY$($bounds$$87$$.y + $bounds$$87$$.$h$ / 2 - $gauge$$28_textDim$$7$$.$h$ / 2);
    $options$$135_title$$11$$.$setX$($bounds$$87$$.x + $bounds$$87$$.$w$ / 2);
    $options$$135_title$$11$$.$alignCenter$();
    $container$$104$$.$addChild$($options$$135_title$$11$$)
  }
  return $rendered$$4_tempTitle_titleString$$
};
D.$DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($labels$$18$$, $label$$56$$, $bounds$$88$$) {
  for(var $maxWidth$$18$$ = 0, $maxLabel$$ = D.$JSCompiler_alias_NULL$$, $width$$89$$ = 0, $i$$607$$ = 0;$i$$607$$ < $labels$$18$$.length;$i$$607$$++) {
    $label$$56$$.$setTextString$($labels$$18$$[$i$$607$$]), $width$$89$$ = $label$$56$$.$measureDimensions$().$w$, $width$$89$$ > $maxWidth$$18$$ && ($maxLabel$$ = $labels$$18$$[$i$$607$$], $maxWidth$$18$$ = $width$$89$$)
  }
  $label$$56$$.$setTextString$($maxLabel$$);
  return $label$$56$$.$getOptimalFontSize$($bounds$$88$$)
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$136$$, $value$$172$$) {
  var $step$$3$$ = (0,window.Number)($options$$136$$.step);
  if($step$$3$$ && 0 < $step$$3$$) {
    var $stepNum$$ = ($value$$172$$ - $options$$136$$.min) / $step$$3$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$136$$.max, window.Math.round($stepNum$$) * $step$$3$$ + $options$$136$$.min), $options$$136$$.min) : $options$$136$$.min
  }
  return $value$$172$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$372$$, $callback$$104$$, $callbackObj$$60$$, $bStaticRendering$$1$$) {
  var $gauge$$33$$ = new D.$DvtLedGauge$$;
  $gauge$$33$$.Init($context$$372$$, $callback$$104$$, $callbackObj$$60$$, $bStaticRendering$$1$$);
  return $gauge$$33$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$373$$, $callback$$105$$, $callbackObj$$61$$, $bStaticRendering$$2$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$373$$, $callback$$105$$, $callbackObj$$61$$, $bStaticRendering$$2$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$142$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$142$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$105$$, $width$$90$$, $height$$83$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$105$$, $width$$90$$, $height$$83$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$__RECTANGLE_CORNER_RADIUS$ = 1 / 6;
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$34$$, $container$$106$$, $labelColor$$2_width$$91$$, $bounds$$89_height$$84_labelBounds$$8$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$34$$)) {
    var $options$$143$$ = $gauge$$34$$.$getOptions$(), $bTitleRendered_outerGap$$1_titleBounds$$ = $options$$143$$.__layout.outerGap, $size$$33$$ = $options$$143$$ && (0 <= $options$$143$$.size || 1 > $options$$143$$.size) ? window.Math.sqrt($options$$143$$.size) : 1;
    $bounds$$89_height$$84_labelBounds$$8$$ = new D.$DvtRectangle$$($bTitleRendered_outerGap$$1_titleBounds$$ + ($labelColor$$2_width$$91$$ - 2 * $bTitleRendered_outerGap$$1_titleBounds$$) * (1 - $size$$33$$) / 2, $bTitleRendered_outerGap$$1_titleBounds$$ + ($bounds$$89_height$$84_labelBounds$$8$$ - 2 * $bTitleRendered_outerGap$$1_titleBounds$$) * (1 - $size$$33$$) / 2, ($labelColor$$2_width$$91$$ - 2 * $bTitleRendered_outerGap$$1_titleBounds$$) * $size$$33$$, ($bounds$$89_height$$84_labelBounds$$8$$ - 
    2 * $bTitleRendered_outerGap$$1_titleBounds$$) * $size$$33$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$34$$, $container$$106$$, $bounds$$89_height$$84_labelBounds$$8$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$34$$, $container$$106$$, $bounds$$89_height$$84_labelBounds$$8$$);
    $bTitleRendered_outerGap$$1_titleBounds$$ = D.$JSCompiler_alias_FALSE$$;
    $labelColor$$2_width$$91$$ = D.$DvtColorUtils$$.$getContrastingTextColor$(D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$34$$));
    D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$143$$) && ($bTitleRendered_outerGap$$1_titleBounds$$ = D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$34$$, $bounds$$89_height$$84_labelBounds$$8$$), "on" == $options$$143$$.metricLabel.rendered && ($bTitleRendered_outerGap$$1_titleBounds$$.y += 2 * $bTitleRendered_outerGap$$1_titleBounds$$.$h$ / 3, $bTitleRendered_outerGap$$1_titleBounds$$.$h$ = 1 * $bTitleRendered_outerGap$$1_titleBounds$$.$h$ / 3), $bTitleRendered_outerGap$$1_titleBounds$$ = 
    D.$DvtAgent$_highContrast$$ !== D.$JSCompiler_alias_TRUE$$ && $options$$143$$.title.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$34$$, $container$$106$$, $bTitleRendered_outerGap$$1_titleBounds$$, D.$JSCompiler_alias_NULL$$) : D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$34$$, $container$$106$$, $bTitleRendered_outerGap$$1_titleBounds$$, $labelColor$$2_width$$91$$));
    "on" == $options$$143$$.metricLabel.rendered && ($bounds$$89_height$$84_labelBounds$$8$$ = D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$34$$, $bounds$$89_height$$84_labelBounds$$8$$), $bTitleRendered_outerGap$$1_titleBounds$$ && ($bounds$$89_height$$84_labelBounds$$8$$.$h$ = 2 * $bounds$$89_height$$84_labelBounds$$8$$.$h$ / 3), D.$DvtAgent$_highContrast$$ !== D.$JSCompiler_alias_TRUE$$ && $options$$143$$.metricLabel.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$34$$, 
    $container$$106$$, $bounds$$89_height$$84_labelBounds$$8$$, D.$JSCompiler_alias_NULL$$, "center", "middle") : D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$34$$, $container$$106$$, $bounds$$89_height$$84_labelBounds$$8$$, $labelColor$$2_width$$91$$, "center", "middle"))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$34$$, $container$$106$$, new D.$DvtRectangle$$(0, 0, $labelColor$$2_width$$91$$, $bounds$$89_height$$84_labelBounds$$8$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$35$$, $container$$107$$, $bounds$$90$$) {
  var $context$$374_shape$$52$$ = $gauge$$35$$.$getCtx$(), $options$$144$$ = $gauge$$35$$.$getOptions$(), $type$$229$$ = $options$$144$$.type, $color$$55$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$35$$), $borderColor$$35_eventManager$$19$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$35$$), $arColors$$21_cx$$44_tooltip$$34$$ = $bounds$$90$$.x + $bounds$$90$$.$w$ / 2, $cy$$45_rotation$$2$$ = $bounds$$90$$.y + $bounds$$90$$.$h$ / 2, $r$$36$$ = window.Math.min($bounds$$90$$.$w$, $bounds$$90$$.$h$) / 
  2, $isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$35$$), $cmds$$17$$, $scale$$25$$ = window.Math.min($bounds$$90$$.$w$ / 100, $bounds$$90$$.$h$ / 100);
  "rectangle" == $type$$229$$ ? $context$$374_shape$$52$$ = new D.$DvtRect$$($context$$374_shape$$52$$, $bounds$$90$$.x, $bounds$$90$$.y, $bounds$$90$$.$w$, $bounds$$90$$.$h$) : "diamond" == $type$$229$$ ? $context$$374_shape$$52$$ = new D.$DvtPolygon$$($context$$374_shape$$52$$, [$arColors$$21_cx$$44_tooltip$$34$$ - $r$$36$$, $cy$$45_rotation$$2$$, $arColors$$21_cx$$44_tooltip$$34$$, $cy$$45_rotation$$2$$ - $r$$36$$, $arColors$$21_cx$$44_tooltip$$34$$ + $r$$36$$, $cy$$45_rotation$$2$$, $arColors$$21_cx$$44_tooltip$$34$$, 
  $cy$$45_rotation$$2$$ + $r$$36$$]) : "star" == $type$$229$$ || "triangle" == $type$$229$$ || "arrow" == $type$$229$$ || "human" == $type$$229$$ ? ("star" == $type$$229$$ ? $cmds$$17$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$229$$ ? $cmds$$17$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$229$$ ? $cmds$$17$$ = 
  $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $type$$229$$ && ($cmds$$17$$ = D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$), $isSkyros$$ && "triangle" == $type$$229$$ || $isSkyros$$ && "arrow" == $type$$229$$ || "human" == $type$$229$$ ? ($cmds$$17$$ = D.$DvtPathUtils$$.$transformPath$($cmds$$17$$, $bounds$$90$$.x + $bounds$$90$$.$w$ / 2, $bounds$$90$$.y + $bounds$$90$$.$h$ / 2, $scale$$25$$, $scale$$25$$), $context$$374_shape$$52$$ = 
  new D.$DvtPath$$($context$$374_shape$$52$$, $cmds$$17$$)) : ($cmds$$17$$ = D.$DvtPolygonUtils$$.scale($cmds$$17$$, $scale$$25$$, $scale$$25$$), $cmds$$17$$ = D.$DvtPolygonUtils$$.translate($cmds$$17$$, $bounds$$90$$.x + $bounds$$90$$.$w$ / 2, $bounds$$90$$.y + $bounds$$90$$.$h$ / 2), $context$$374_shape$$52$$ = new D.$DvtPolygon$$($context$$374_shape$$52$$, $cmds$$17$$))) : $context$$374_shape$$52$$ = new D.$DvtCircle$$($context$$374_shape$$52$$, $arColors$$21_cx$$44_tooltip$$34$$, $cy$$45_rotation$$2$$, 
  $r$$36$$);
  $isSkyros$$ || "none" == $options$$144$$.visualEffects ? $context$$374_shape$$52$$.$setSolidFill$($color$$55$$) : ($arColors$$21_cx$$44_tooltip$$34$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$55$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$55$$, -0.04, -0.05)], $cy$$45_rotation$$2$$ = $options$$144$$ && 0 == $options$$144$$.rotation % 90 ? $options$$144$$.rotation : 0, $context$$374_shape$$52$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == $type$$229$$ || "star" == $type$$229$$ || 
  "triangle" == $type$$229$$ ? $cy$$45_rotation$$2$$ - 90 : 270, $arColors$$21_cx$$44_tooltip$$34$$, [1, 1], [0, 1])));
  $borderColor$$35_eventManager$$19$$ && $context$$374_shape$$52$$.$setSolidStroke$($borderColor$$35_eventManager$$19$$);
  $borderColor$$35_eventManager$$19$$ = $gauge$$35$$.$__getEventManager$();
  ($arColors$$21_cx$$44_tooltip$$34$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$35$$)) && $borderColor$$35_eventManager$$19$$ && $borderColor$$35_eventManager$$19$$.$associate$($context$$374_shape$$52$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $arColors$$21_cx$$44_tooltip$$34$$, $color$$55$$));
  $cy$$45_rotation$$2$$ = $isSkyros$$ ? $options$$144$$.rotation + 90 : $options$$144$$.rotation;
  if(0 != $cy$$45_rotation$$2$$ && ("arrow" == $type$$229$$ || "triangle" == $type$$229$$)) {
    $context$$374_shape$$52$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$35$$, $container$$107$$, $context$$374_shape$$52$$, $bounds$$90$$)
  }
  $container$$107$$.$addChild$($context$$374_shape$$52$$)
};
D.$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$36_translateGroup$$, $container$$108_groupDims_matrix$$16_rotation$$3$$, $shape$$53_tx$$24$$, $bounds$$91_ty$$25$$) {
  var $options$$145_rotationMatrix$$2$$ = $gauge$$36_translateGroup$$.$getOptions$();
  $gauge$$36_translateGroup$$ = new D.$DvtContainer$$($gauge$$36_translateGroup$$.$getCtx$());
  $container$$108_groupDims_matrix$$16_rotation$$3$$.$addChild$($gauge$$36_translateGroup$$);
  $gauge$$36_translateGroup$$.$addChild$($shape$$53_tx$$24$$);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = $options$$145_rotationMatrix$$2$$ && 0 == $options$$145_rotationMatrix$$2$$.rotation % 90 ? $options$$145_rotationMatrix$$2$$.rotation : 0;
  $options$$145_rotationMatrix$$2$$ = new D.$DvtMatrix$$;
  $options$$145_rotationMatrix$$2$$.rotate(window.Math.PI * $container$$108_groupDims_matrix$$16_rotation$$3$$ / 180);
  $shape$$53_tx$$24$$.$setMatrix$($options$$145_rotationMatrix$$2$$);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = $gauge$$36_translateGroup$$.$getDimensions$();
  $shape$$53_tx$$24$$ = $bounds$$91_ty$$25$$.x + $bounds$$91_ty$$25$$.$w$ / 2 - ($container$$108_groupDims_matrix$$16_rotation$$3$$.x + $container$$108_groupDims_matrix$$16_rotation$$3$$.$w$ / 2);
  $bounds$$91_ty$$25$$ = $bounds$$91_ty$$25$$.y + $bounds$$91_ty$$25$$.$h$ / 2 - ($container$$108_groupDims_matrix$$16_rotation$$3$$.y + $container$$108_groupDims_matrix$$16_rotation$$3$$.$h$ / 2);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = new D.$DvtMatrix$$;
  $container$$108_groupDims_matrix$$16_rotation$$3$$.translate($shape$$53_tx$$24$$, $bounds$$91_ty$$25$$);
  $gauge$$36_translateGroup$$.$setMatrix$($container$$108_groupDims_matrix$$16_rotation$$3$$);
  return $gauge$$36_translateGroup$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$37$$, $container$$109$$, $bounds$$92$$) {
  var $options$$146$$ = $gauge$$37$$.$getOptions$(), $type$$230$$ = $options$$146$$.type;
  "none" != $options$$146$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$37$$) && ("rectangle" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$37$$, $container$$109$$, $bounds$$92$$) : "diamond" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$37$$, $container$$109$$, $bounds$$92$$) : "triangle" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$37$$, $container$$109$$, $bounds$$92$$) : "star" == $type$$230$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$($gauge$$37$$, $container$$109$$) : "arrow" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$37$$, $container$$109$$, $bounds$$92$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$37$$, $container$$109$$, $bounds$$92$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$38_overlay$$9$$, $container$$110_gradient$$7$$, $bounds$$93_overlayBounds$$1$$) {
  var $dx$$20$$ = 0.05 * $bounds$$93_overlayBounds$$1$$.$w$, $dy$$23$$ = 0.05 * $bounds$$93_overlayBounds$$1$$.$h$;
  $bounds$$93_overlayBounds$$1$$ = new D.$DvtRectangle$$($bounds$$93_overlayBounds$$1$$.x + $dx$$20$$, $bounds$$93_overlayBounds$$1$$.y + $dy$$23$$, $bounds$$93_overlayBounds$$1$$.$w$ - 2 * $dx$$20$$, $bounds$$93_overlayBounds$$1$$.$h$ - 2 * $dy$$23$$);
  $gauge$$38_overlay$$9$$ = new D.$DvtRect$$($gauge$$38_overlay$$9$$.$getCtx$(), $bounds$$93_overlayBounds$$1$$.x, $bounds$$93_overlayBounds$$1$$.y, $bounds$$93_overlayBounds$$1$$.$w$, $bounds$$93_overlayBounds$$1$$.$h$);
  $gauge$$38_overlay$$9$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$110_gradient$$7$$.$addChild$($gauge$$38_overlay$$9$$);
  $container$$110_gradient$$7$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$38_overlay$$9$$.$setFill$($container$$110_gradient$$7$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$39_overlay$$10$$, $container$$111_gradient$$8$$, $bounds$$94_cx$$45$$) {
  var $cy$$46_dx$$21$$ = 0.05 * $bounds$$94_cx$$45$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$ = 0.05 * $bounds$$94_cx$$45$$.$h$, $dy$$24_overlayBounds$$2_r$$37$$ = new D.$DvtRectangle$$($bounds$$94_cx$$45$$.x + $cy$$46_dx$$21$$, $bounds$$94_cx$$45$$.y + $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$94_cx$$45$$.$w$ - 2 * $cy$$46_dx$$21$$, $bounds$$94_cx$$45$$.$h$ - 2 * $dy$$24_overlayBounds$$2_r$$37$$);
  $bounds$$94_cx$$45$$ = $dy$$24_overlayBounds$$2_r$$37$$.x + $dy$$24_overlayBounds$$2_r$$37$$.$w$ / 2;
  $cy$$46_dx$$21$$ = $dy$$24_overlayBounds$$2_r$$37$$.y + $dy$$24_overlayBounds$$2_r$$37$$.$h$ / 2;
  $dy$$24_overlayBounds$$2_r$$37$$ = window.Math.min($dy$$24_overlayBounds$$2_r$$37$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$.$h$) / 2;
  $gauge$$39_overlay$$10$$ = new D.$DvtPolygon$$($gauge$$39_overlay$$10$$.$getCtx$(), [$bounds$$94_cx$$45$$ - $dy$$24_overlayBounds$$2_r$$37$$, $cy$$46_dx$$21$$, $bounds$$94_cx$$45$$, $cy$$46_dx$$21$$ - $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$94_cx$$45$$ + $dy$$24_overlayBounds$$2_r$$37$$, $cy$$46_dx$$21$$, $bounds$$94_cx$$45$$, $cy$$46_dx$$21$$ + $dy$$24_overlayBounds$$2_r$$37$$]);
  $gauge$$39_overlay$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$111_gradient$$8$$.$addChild$($gauge$$39_overlay$$10$$);
  $container$$111_gradient$$8$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$39_overlay$$10$$.$setFill$($container$$111_gradient$$8$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$40$$, $container$$112$$, $bounds$$95_overlay$$11$$) {
  var $dx$$22_overlayBounds$$3$$ = 0.05 * $bounds$$95_overlay$$11$$.$w$, $cmds$$18_dy$$25_options$$147_rotation$$4$$ = 0.05 * $bounds$$95_overlay$$11$$.$h$, $gradient$$9_isSkyros$$1$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$40$$), $dx$$22_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$95_overlay$$11$$.x + $dx$$22_overlayBounds$$3$$, $bounds$$95_overlay$$11$$.y + $cmds$$18_dy$$25_options$$147_rotation$$4$$, $bounds$$95_overlay$$11$$.$w$ - 2 * $dx$$22_overlayBounds$$3$$, $bounds$$95_overlay$$11$$.$h$ - 
  2 * $cmds$$18_dy$$25_options$$147_rotation$$4$$), $cmds$$18_dy$$25_options$$147_rotation$$4$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$26$$ = window.Math.min($dx$$22_overlayBounds$$3$$.$w$ / 100, $dx$$22_overlayBounds$$3$$.$h$ / 100), $cmds$$18_dy$$25_options$$147_rotation$$4$$ = D.$DvtPolygonUtils$$.scale($cmds$$18_dy$$25_options$$147_rotation$$4$$, $scale$$26$$, $scale$$26$$), $cmds$$18_dy$$25_options$$147_rotation$$4$$ = D.$DvtPolygonUtils$$.translate($cmds$$18_dy$$25_options$$147_rotation$$4$$, 
  $bounds$$95_overlay$$11$$.x + $bounds$$95_overlay$$11$$.$w$ / 2, $bounds$$95_overlay$$11$$.y + $bounds$$95_overlay$$11$$.$h$ / 2);
  $bounds$$95_overlay$$11$$ = new D.$DvtPolygon$$($gauge$$40$$.$getCtx$(), $cmds$$18_dy$$25_options$$147_rotation$$4$$);
  $cmds$$18_dy$$25_options$$147_rotation$$4$$ = ($cmds$$18_dy$$25_options$$147_rotation$$4$$ = $gauge$$40$$.$getOptions$()) && 0 == $cmds$$18_dy$$25_options$$147_rotation$$4$$.rotation % 90 ? $cmds$$18_dy$$25_options$$147_rotation$$4$$.rotation : 0;
  $gradient$$9_isSkyros$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$9_isSkyros$$1$$ ? $cmds$$18_dy$$25_options$$147_rotation$$4$$ - 90 : 360 - $cmds$$18_dy$$25_options$$147_rotation$$4$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$95_overlay$$11$$.$setFill$($gradient$$9_isSkyros$$1$$);
  $bounds$$95_overlay$$11$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$40$$, $container$$112$$, $bounds$$95_overlay$$11$$, $dx$$22_overlayBounds$$3$$);
  $bounds$$95_overlay$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$112$$.$addChild$($bounds$$95_overlay$$11$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$41$$, $container$$113$$, $bounds$$96_overlay$$12$$) {
  var $dx$$23_overlayBounds$$4$$ = 0.05 * $bounds$$96_overlay$$12$$.$w$, $cmds$$19_dy$$26_options$$148_rotation$$5$$ = 0.05 * $bounds$$96_overlay$$12$$.$h$, $gradient$$10_isSkyros$$2$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$41$$), $dx$$23_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$96_overlay$$12$$.x + $dx$$23_overlayBounds$$4$$, $bounds$$96_overlay$$12$$.y + $cmds$$19_dy$$26_options$$148_rotation$$5$$, $bounds$$96_overlay$$12$$.$w$ - 2 * $dx$$23_overlayBounds$$4$$, $bounds$$96_overlay$$12$$.$h$ - 
  2 * $cmds$$19_dy$$26_options$$148_rotation$$5$$), $cmds$$19_dy$$26_options$$148_rotation$$5$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$27$$ = window.Math.min($dx$$23_overlayBounds$$4$$.$w$ / 100, $dx$$23_overlayBounds$$4$$.$h$ / 100), $cmds$$19_dy$$26_options$$148_rotation$$5$$ = D.$DvtPolygonUtils$$.scale($cmds$$19_dy$$26_options$$148_rotation$$5$$, $scale$$27$$, $scale$$27$$), $cmds$$19_dy$$26_options$$148_rotation$$5$$ = D.$DvtPolygonUtils$$.translate($cmds$$19_dy$$26_options$$148_rotation$$5$$, 
  $bounds$$96_overlay$$12$$.x + $bounds$$96_overlay$$12$$.$w$ / 2, $bounds$$96_overlay$$12$$.y + $bounds$$96_overlay$$12$$.$h$ / 2);
  $bounds$$96_overlay$$12$$ = new D.$DvtPolygon$$($gauge$$41$$.$getCtx$(), $cmds$$19_dy$$26_options$$148_rotation$$5$$);
  $cmds$$19_dy$$26_options$$148_rotation$$5$$ = ($cmds$$19_dy$$26_options$$148_rotation$$5$$ = $gauge$$41$$.$getOptions$()) && 0 == $cmds$$19_dy$$26_options$$148_rotation$$5$$.rotation % 90 ? $cmds$$19_dy$$26_options$$148_rotation$$5$$.rotation : 0;
  $gradient$$10_isSkyros$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$10_isSkyros$$2$$ ? $cmds$$19_dy$$26_options$$148_rotation$$5$$ - 90 : 360 - $cmds$$19_dy$$26_options$$148_rotation$$5$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$96_overlay$$12$$.$setFill$($gradient$$10_isSkyros$$2$$);
  $bounds$$96_overlay$$12$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$41$$, $container$$113$$, $bounds$$96_overlay$$12$$, $dx$$23_overlayBounds$$4$$);
  $bounds$$96_overlay$$12$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$113$$.$addChild$($bounds$$96_overlay$$12$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayStar$$($gauge$$42$$, $container$$114$$) {
  var $overlay$$13$$ = new D.$DvtPath$$($gauge$$42$$.$getCtx$(), D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$), $gradient$$11_gradientRotation$$3_options$$149$$ = $gauge$$42$$.$getOptions$(), $gradient$$11_gradientRotation$$3_options$$149$$ = 360 - ($gradient$$11_gradientRotation$$3_options$$149$$ && 0 == $gradient$$11_gradientRotation$$3_options$$149$$.rotation % 90 ? $gradient$$11_gradientRotation$$3_options$$149$$.rotation : 0), $arColors$$26_color$$56$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$42$$), 
  $arColors$$26_color$$56$$ = [D.$DvtColorUtils$$.$getDarker$($arColors$$26_color$$56$$, 0.9), $arColors$$26_color$$56$$, D.$DvtColorUtils$$.$getBrighter$($arColors$$26_color$$56$$)], $gradient$$11_gradientRotation$$3_options$$149$$ = new D.$DvtLinearGradientFill$$($gradient$$11_gradientRotation$$3_options$$149$$, $arColors$$26_color$$56$$, [1, 1, 1], [0.1, 0.4, 0.8]);
  $overlay$$13$$.$setFill$($gradient$$11_gradientRotation$$3_options$$149$$);
  $overlay$$13$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$114$$.$addChild$($overlay$$13$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$43_highlight$$, $container$$115_highlightGradient$$, $bounds$$98_gradientBounds$$) {
  var $cx$$46_dx$$24$$ = 0.05 * $bounds$$98_gradientBounds$$.$w$, $cy$$47_dy$$27$$ = 0.05 * $bounds$$98_gradientBounds$$.$h$;
  $bounds$$98_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$98_gradientBounds$$.x + $cx$$46_dx$$24$$, $bounds$$98_gradientBounds$$.y + $cy$$47_dy$$27$$, $bounds$$98_gradientBounds$$.$w$ - 2 * $cx$$46_dx$$24$$, $bounds$$98_gradientBounds$$.$h$ - 2 * $cy$$47_dy$$27$$);
  var $cx$$46_dx$$24$$ = $bounds$$98_gradientBounds$$.x + $bounds$$98_gradientBounds$$.$w$ / 2, $cy$$47_dy$$27$$ = $bounds$$98_gradientBounds$$.y + $bounds$$98_gradientBounds$$.$h$ / 2, $radius$$18_ry$$24$$ = window.Math.min($bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$) / 2, $overlay$$14_rx$$28$$ = new D.$DvtCircle$$($gauge$$43_highlight$$.$getCtx$(), $cx$$46_dx$$24$$, $cy$$47_dy$$27$$, $radius$$18_ry$$24$$);
  $overlay$$14_rx$$28$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$115_highlightGradient$$.$addChild$($overlay$$14_rx$$28$$);
  var $gradient$$12$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$46_dx$$24$$, $cy$$47_dy$$27$$ - 0.6 * $radius$$18_ry$$24$$, 1.5 * $radius$$18_ry$$24$$, [$bounds$$98_gradientBounds$$.x, $bounds$$98_gradientBounds$$.y, $bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$]);
  $overlay$$14_rx$$28$$.$setFill$($gradient$$12$$);
  $overlay$$14_rx$$28$$ = 0.6 * $radius$$18_ry$$24$$;
  $radius$$18_ry$$24$$ *= 0.4;
  $cy$$47_dy$$27$$ -= 0.3 * $radius$$18_ry$$24$$;
  $gauge$$43_highlight$$ = new D.$DvtOval$$($gauge$$43_highlight$$.$getCtx$(), $cx$$46_dx$$24$$, $cy$$47_dy$$27$$ - $radius$$18_ry$$24$$, $overlay$$14_rx$$28$$, $radius$$18_ry$$24$$);
  $gauge$$43_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$115_highlightGradient$$.$addChild$($gauge$$43_highlight$$);
  $container$$115_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$46_dx$$24$$, $cy$$47_dy$$27$$, $overlay$$14_rx$$28$$, [$bounds$$98_gradientBounds$$.x, $bounds$$98_gradientBounds$$.y, $bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$]);
  $gauge$$43_highlight$$.$setFill$($container$$115_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$44$$, $bounds$$99$$) {
  var $options$$150_rotation$$7$$ = $gauge$$44$$.$getOptions$(), $type$$231$$ = $options$$150_rotation$$7$$.type, $options$$150_rotation$$7$$ = 0 == $options$$150_rotation$$7$$.rotation % 90 ? $options$$150_rotation$$7$$.rotation : 0, $minDim$$ = window.Math.min($bounds$$99$$.$w$, $bounds$$99$$.$h$), $newX$$6$$ = $bounds$$99$$.x + $bounds$$99$$.$w$ / 2 - $minDim$$ / 2, $newY$$7$$ = $bounds$$99$$.y + $bounds$$99$$.$h$ / 2 - $minDim$$ / 2, $newWidth$$3$$ = $minDim$$, $newHeight$$2$$ = $minDim$$;
  if("triangle" == $type$$231$$) {
    0 == $options$$150_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.25 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$) : 90 == $options$$150_rotation$$7$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 180 == $options$$150_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.05 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 
    0.3 * $minDim$$) : 270 == $options$$150_rotation$$7$$ && ($newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$)
  }else {
    if("arrow" == $type$$231$$) {
      0 == $options$$150_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 90 == $options$$150_rotation$$7$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.28 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 180 == $options$$150_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 
      0.4 * $minDim$$) : 270 == $options$$150_rotation$$7$$ && ($newX$$6$$ += 0.23 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.28 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$)
    }else {
      if("star" == $type$$231$$) {
        $newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 0.25 * $minDim$$, $newWidth$$3$$ -= 0.5 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$
      }else {
        if("diamond" == $type$$231$$) {
          $newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$
        }else {
          if("rectangle" == $type$$231$$) {
            $newX$$6$$ += 0.1 * $minDim$$, $newY$$7$$ += 0.1 * $minDim$$, $newWidth$$3$$ -= 0.2 * $minDim$$, $newHeight$$2$$ -= 0.2 * $minDim$$
          }else {
            if("circle" == $type$$231$$ || "human" == $type$$231$$) {
              $newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$
            }
          }
        }
      }
    }
  }
  return new D.$DvtRectangle$$($newX$$6$$, $newY$$7$$, $newWidth$$3$$, $newHeight$$2$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$$.newInstance = function $$DvtStatusMeterGauge$$$newInstance$($context$$377$$, $callback$$108$$, $callbackObj$$64$$) {
  var $gauge$$49$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$49$$.Init($context$$377$$, $callback$$108$$, $callbackObj$$64$$);
  return $gauge$$49$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$378$$, $callback$$109$$, $callbackObj$$65$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$378$$, $callback$$109$$, $callbackObj$$65$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$154$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$154$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$120$$, $width$$94$$, $height$$87$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$120$$, $width$$94$$, $height$$87$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$60$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$7$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$609$$ = 0;$i$$609$$ < $objs$$60$$.length;$i$$609$$++) {
    var $obj$$291$$ = $objs$$60$$[$i$$609$$], $endState$$15$$ = $obj$$291$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$291$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[0], $endState$$15$$[2], $endState$$15$$[3]]) : "vertical" == this.$Options$.orientation ? $obj$$291$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], $endState$$15$$[3], $endState$$15$$[3]]) : "circular" == this.$Options$.orientation && $obj$$291$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], 0, $endState$$15$$[3], $endState$$15$$[4]]);
    var $animation$$3$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$291$$, $animationDuration$$7$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$3$$.$_animator$, "typeNumberArray", $obj$$291$$, $obj$$291$$.$getAnimationParams$, $obj$$291$$.$setAnimationParams$, $endState$$15$$);
    $animation$$3$$.$_animator$.$setEasing$(function($objs$$60$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$60$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$3$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$2_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$205$$, $y$$179$$) {
  var $maxValue$$14_options$$155$$ = this.$Options$, $angle$$42_isRTL$$26$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$());
  if("horizontal" == $maxValue$$14_options$$155$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$205$$)
  }
  if("vertical" == $maxValue$$14_options$$155$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$179$$)
  }
  if("circular" == $maxValue$$14_options$$155$$.orientation) {
    var $angleExtent$$9$$ = $maxValue$$14_options$$155$$.angleExtent, $angleRads$$11_minValue$$13_value$$175$$ = window.Math.atan2($y$$179$$ - this.$cy$, $x$$205$$ - this.$cx$), $angle$$42_isRTL$$26$$ = $angle$$42_isRTL$$26$$ ? 180 - (D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$175$$) - $maxValue$$14_options$$155$$.startAngle) : D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$175$$) - (360 - $maxValue$$14_options$$155$$.startAngle), $angle$$42_isRTL$$26$$ = ($angle$$42_isRTL$$26$$ + 
    720) % 360, $angleRads$$11_minValue$$13_value$$175$$ = $maxValue$$14_options$$155$$.min, $maxValue$$14_options$$155$$ = $maxValue$$14_options$$155$$.max, $angleRads$$11_minValue$$13_value$$175$$ = $angle$$42_isRTL$$26$$ / $angleExtent$$9$$ * ($maxValue$$14_options$$155$$ - $angleRads$$11_minValue$$13_value$$175$$) + $angleRads$$11_minValue$$13_value$$175$$;
    $angle$$42_isRTL$$26$$ > $angleExtent$$9$$ && ($angleRads$$11_minValue$$13_value$$175$$ = 0.5 < ($angle$$42_isRTL$$26$$ - $angleExtent$$9$$) / (360 - $angleExtent$$9$$) ? 0 : $maxValue$$14_options$$155$$);
    return $angleRads$$11_minValue$$13_value$$175$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#f5f6f7", borderColor:"#D6DFE6"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {angleExtent:360, borderRadius:"auto", color:"#313842", indicatorSize:1, innerRadius:0.7, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), position:"auto"}, orientation:"horizontal", plotArea:{color:"#AAAAAA", borderColor:"#C6C6C6", rendered:"auto", borderRadius:"auto"}, startAngle:90, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ = 2.5;
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$52$$, $container$$121$$, $bounds$$104_width$$96$$, $height$$89$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$52$$)) {
    var $options$$157$$ = $gauge$$52$$.$getOptions$(), $outerGap$$4$$ = $options$$157$$.__layout.outerGap;
    $bounds$$104_width$$96$$ = new D.$DvtRectangle$$($outerGap$$4$$, $outerGap$$4$$, $bounds$$104_width$$96$$ - 2 * $outerGap$$4$$, $height$$89$$ - 2 * $outerGap$$4$$);
    "horizontal" == $options$$157$$.orientation || "vertical" == $options$$157$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$157$$) && D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$($gauge$$52$$, $container$$121$$, $bounds$$104_width$$96$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$52$$, $container$$121$$, $bounds$$104_width$$96$$)) : "circular" == $options$$157$$.orientation && D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($gauge$$52$$, 
    $container$$121$$, $bounds$$104_width$$96$$)
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$52$$, $container$$121$$, new D.$DvtRectangle$$(0, 0, $bounds$$104_width$$96$$, $height$$89$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($gauge$$53$$, $container$$122_tooltip$$36$$, $bounds$$105_overlayRect$$1$$) {
  var $options$$158$$ = $gauge$$53$$.$getOptions$(), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$53$$.$getCtx$()), $angleExtent$$13_max$$19_percentFill$$1$$ = 0, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = D.$JSCompiler_alias_NULL$$, $angle$$43_value$$176$$ = $options$$158$$.value, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = $options$$158$$.innerRadius, $i$$610_thresholds$$3$$ = $options$$158$$.thresholds, $maxDiameter_referenceLineColor$$ = 
  D.$JSCompiler_alias_NULL$$, $startAngleRads$$1$$ = D.$DvtMath$$.$TWO_PI$ - D.$DvtMath$$.$degreesToRads$($options$$158$$.startAngle), $angleExtentRads$$2$$ = D.$DvtMath$$.$degreesToRads$($options$$158$$.angleExtent), $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = ($startAngleRads$$1$$ + $angleExtentRads$$2$$) % (2 * window.Math.PI);
  $gauge$$53$$.$cx$ = $bounds$$105_overlayRect$$1$$.$w$ / 2;
  $gauge$$53$$.$cy$ = $bounds$$105_overlayRect$$1$$.$h$ / 2;
  $angleExtentRads$$2$$ != 2 * window.Math.PI && ($labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($gauge$$53$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $bounds$$105_overlayRect$$1$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$));
  var $maxDiameter_referenceLineColor$$ = $maxDiameter_referenceLineColor$$ ? $maxDiameter_referenceLineColor$$ : window.Math.min($bounds$$105_overlayRect$$1$$.$w$, $bounds$$105_overlayRect$$1$$.$h$), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = 0.5 * $maxDiameter_referenceLineColor$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 0.5 * $maxDiameter_referenceLineColor$$, $indicatorSize$$ = $options$$158$$.indicatorSize;
  if($indicatorSize$$ && 1 < $indicatorSize$$) {
    var $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ = (1 - 1 / $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$27_referenceLineWidth$$), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = $innerRadiusLength_isRTL$$27_referenceLineWidth$$ + $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = $endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$
  }
  $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ || ($labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = window.Math.min($bounds$$105_overlayRect$$1$$.$w$, $bounds$$105_overlayRect$$1$$.$h$) * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ * window.Math.min($bounds$$105_overlayRect$$1$$.$w$, $bounds$$105_overlayRect$$1$$.$h$) : window.Math.min($bounds$$105_overlayRect$$1$$.$w$, $bounds$$105_overlayRect$$1$$.$h$), 
  $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = new D.$DvtRectangle$$($bounds$$105_overlayRect$$1$$.x + $bounds$$105_overlayRect$$1$$.$w$ / 2 - $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (3 / 7), $bounds$$105_overlayRect$$1$$.y + $bounds$$105_overlayRect$$1$$.$h$ / 2 - $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (2.5 / 7), $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (6 / 7), $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (5 / 7)));
  $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ = D.$JSCompiler_alias_FALSE$$;
  if(D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$158$$) && ($bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ = new D.$DvtRectangle$$($labelBounds$$9_maxInnerDiameter_startAngle$$15$$.x, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.y, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.$w$, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.$h$), "on" == $options$$158$$.metricLabel.rendered && ($bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$.y += 2 * $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$.$h$ / 
  3, $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$.$h$ /= 3), ($bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ = D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$53$$, $container$$122_tooltip$$36$$, $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$, D.$JSCompiler_alias_NULL$$)) && "on" == $options$$158$$.metricLabel.rendered)) {
    $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.$h$ = 2 * $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.$h$ / 3
  }
  D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$53$$, $container$$122_tooltip$$36$$, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$, D.$JSCompiler_alias_NULL$$, "center", "middle");
  $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = $startAngleRads$$1$$;
  $angleExtent$$13_max$$19_percentFill$$1$$ *= $angleExtentRads$$2$$;
  if($i$$610_thresholds$$3$$ && "off" != $options$$158$$.plotArea.rendered && "all" == $options$$158$$.thresholdDisplay) {
    for($bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ = 0;$bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ < $i$$610_thresholds$$3$$.length;$bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$++) {
      var $thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$53$$, $i$$610_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$], $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$), $angleExtent$$13_max$$19_percentFill$$1$$ = $i$$610_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$].max < $options$$158$$.max ? $i$$610_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$].max : 
      $options$$158$$.max, $min$$18$$ = 0 == $bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ ? $options$$158$$.min : $i$$610_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_spaceWidth_titleSpace$$3$$ - 1].max, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = $startAngleRads$$1$$ + $angleExtentRads$$2$$ * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$158$$, $options$$158$$.min, $min$$18$$), $angleExtent$$13_max$$19_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$158$$, 
      $min$$18$$, $angleExtent$$13_max$$19_percentFill$$1$$), $angleExtent$$13_max$$19_percentFill$$1$$ = $angleExtent$$13_max$$19_percentFill$$1$$ * $angleExtentRads$$2$$;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$53$$, $container$$122_tooltip$$36$$, $bounds$$105_overlayRect$$1$$, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$, $angleExtent$$13_max$$19_percentFill$$1$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    "off" != $options$$158$$.plotArea.rendered && (!("auto" == $options$$158$$.plotArea.rendered && "onIndicator" == $options$$158$$.thresholdDisplay) && "all" != $options$$158$$.thresholdDisplay) && ($thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$53$$), D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$53$$, $container$$122_tooltip$$36$$, $bounds$$105_overlayRect$$1$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, 
    $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$))
  }
  $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = 0.5 * $maxDiameter_referenceLineColor$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$;
  $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 0.5 * $maxDiameter_referenceLineColor$$;
  $indicatorSize$$ && 1 > $indicatorSize$$ && ($innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = (1 - $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$27_referenceLineWidth$$), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ += $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ -= $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$);
  $angleExtent$$13_max$$19_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$158$$, $options$$158$$.min, $angle$$43_value$$176$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$53$$, $container$$122_tooltip$$36$$, $bounds$$105_overlayRect$$1$$, $startAngleRads$$1$$, $angleExtent$$13_max$$19_percentFill$$1$$ * $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$53$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = $options$$158$$.referenceLines) {
    for($i$$610_thresholds$$3$$ = 0;$i$$610_thresholds$$3$$ < $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$.length;$i$$610_thresholds$$3$$++) {
      $maxDiameter_referenceLineColor$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$610_thresholds$$3$$].color ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$610_thresholds$$3$$].color : "black", $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$610_thresholds$$3$$].lineWidth ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$610_thresholds$$3$$].lineWidth : 2, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 
      $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$610_thresholds$$3$$].lineStyle, $angle$$43_value$$176$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$610_thresholds$$3$$].value, $angle$$43_value$$176$$ = $startAngleRads$$1$$ + D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$158$$, $options$$158$$.min, $angle$$43_value$$176$$) * $angleExtentRads$$2$$, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$53$$, $container$$122_tooltip$$36$$, $bounds$$105_overlayRect$$1$$, 
      $angle$$43_value$$176$$, $maxDiameter_referenceLineColor$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$)
    }
  }
  $bounds$$105_overlayRect$$1$$ = new D.$DvtRect$$($gauge$$53$$.$getCtx$(), $bounds$$105_overlayRect$$1$$.x, $bounds$$105_overlayRect$$1$$.y, $bounds$$105_overlayRect$$1$$.$w$, $bounds$$105_overlayRect$$1$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bounds$$105_overlayRect$$1$$);
  $container$$122_tooltip$$36$$.$addChild$($bounds$$105_overlayRect$$1$$);
  (($container$$122_tooltip$$36$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$53$$)) || $gauge$$53$$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$53$$.$__getEventManager$().$associate$($bounds$$105_overlayRect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$122_tooltip$$36$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$53$$)))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$54$$, $container$$123_tooltip$$37$$, $axisArea_bounds$$106$$) {
  var $options$$159$$ = $gauge$$54$$.$getOptions$(), $color$$57_isRTL$$28_plotAreaColor$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$54$$.$getCtx$()), $isVert$$9_labelPosition$$5$$ = "vertical" == $options$$159$$.orientation, $axisInfo$$15_axisOptions$$16$$ = {layout:{}};
  $axisInfo$$15_axisOptions$$16$$.layout.gapRatio = 0;
  $axisInfo$$15_axisOptions$$16$$.timeAxisType = "disabled";
  $axisInfo$$15_axisOptions$$16$$.position = $isVert$$9_labelPosition$$5$$ ? "left" : "bottom";
  $axisInfo$$15_axisOptions$$16$$.min = $options$$159$$.min;
  $axisInfo$$15_axisOptions$$16$$.max = $options$$159$$.max;
  $axisInfo$$15_axisOptions$$16$$.dataMin = $options$$159$$.min;
  $axisInfo$$15_axisOptions$$16$$.dataMax = $options$$159$$.max;
  $axisInfo$$15_axisOptions$$16$$.tickLabel = {rendered:"off"};
  $axisInfo$$15_axisOptions$$16$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$54$$.$getCtx$(), $axisInfo$$15_axisOptions$$16$$, $axisArea_bounds$$106$$);
  $gauge$$54$$.$__axisInfo$ = $axisInfo$$15_axisOptions$$16$$;
  var $baseline$$12_indicatorX1$$ = 0;
  0 >= $options$$159$$.max ? $baseline$$12_indicatorX1$$ = $options$$159$$.max : 0 <= $options$$159$$.min && ($baseline$$12_indicatorX1$$ = $options$$159$$.min);
  var $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ = $axisInfo$$15_axisOptions$$16$$.$getCoordAt$($baseline$$12_indicatorX1$$);
  "off" != $options$$159$$.plotArea.rendered && !("auto" == $options$$159$$.plotArea.rendered && "onIndicator" == $options$$159$$.thresholdDisplay) && ($baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ = $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.min));
  var $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.value), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$9_labelPosition$$5$$ ? window.Math.max($axisArea_bounds$$106$$.y, window.Math.min($axisArea_bounds$$106$$.y + $axisArea_bounds$$106$$.$h$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)) : window.Math.max($axisArea_bounds$$106$$.x, window.Math.min($axisArea_bounds$$106$$.x + $axisArea_bounds$$106$$.$w$, 
  $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)), $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = $options$$159$$.indicatorSize, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$, $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$ = 0, $drawnPlotSize_plotY2$$ = 1 > $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$;
  $drawnIndicatorSize_indicatorY2$$ = 1 < $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$;
  $isVert$$9_labelPosition$$5$$ ? ($baseline$$12_indicatorX1$$ = $axisArea_bounds$$106$$.x + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $axisArea_bounds$$106$$.$w$ + 0.5, $indicatorX2$$ = $axisArea_bounds$$106$$.x + $axisArea_bounds$$106$$.$w$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $drawnIndicatorSize_indicatorY2$$ = $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ - 0.5, $indicatorY1$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 0.5, $plotX1$$ = $axisArea_bounds$$106$$.x + 
  (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $axisArea_bounds$$106$$.$w$, $plotX2$$ = $axisArea_bounds$$106$$.x + $axisArea_bounds$$106$$.$w$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2, $plotY1$$ = $axisArea_bounds$$106$$.y, $drawnPlotSize_plotY2$$ = $axisArea_bounds$$106$$.y + $axisArea_bounds$$106$$.$h$) : ($baseline$$12_indicatorX1$$ = $color$$57_isRTL$$28_plotAreaColor$$ ? $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ - 0.5 : $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ + 0.5, $indicatorX2$$ = 
  $color$$57_isRTL$$28_plotAreaColor$$ ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 0.5 : $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ - 0.5, $indicatorY1$$ = $axisArea_bounds$$106$$.y + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $axisArea_bounds$$106$$.$h$ + 0.5, $drawnIndicatorSize_indicatorY2$$ = $axisArea_bounds$$106$$.y + $axisArea_bounds$$106$$.$h$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $plotX1$$ = $axisArea_bounds$$106$$.x, $plotX2$$ = $axisArea_bounds$$106$$.x + 
  $axisArea_bounds$$106$$.$w$, $plotY1$$ = $axisArea_bounds$$106$$.y + (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $axisArea_bounds$$106$$.$h$, $drawnPlotSize_plotY2$$ = $axisArea_bounds$$106$$.y + $axisArea_bounds$$106$$.$h$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ == $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ && ($isVert$$9_labelPosition$$5$$ ? $indicatorY1$$ = $drawnIndicatorSize_indicatorY2$$ : $baseline$$12_indicatorX1$$ = $indicatorX2$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$36_refColor_shadow$$7_stroke$$76$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$54$$), $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$ = $options$$159$$.plotArea.borderColor, $thresholds$$4_value$$177$$ = $options$$159$$.thresholds, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$9_labelPosition$$5$$ ? 0 : 270;
  if($thresholds$$4_value$$177$$ && "off" != $options$$159$$.plotArea.rendered && "all" == $options$$159$$.thresholdDisplay) {
    for($baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ = $thresholds$$4_value$$177$$.length - 1;0 <= $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$;$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$--) {
      var $currentThresholdIndex$$1$$ = $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$, $plotArea$$3_referenceLineSize$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$54$$, $gauge$$54$$.$getCtx$(), $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$), $cp$$4$$ = new D.$DvtClipPath$$("pacp" + $gauge$$54$$.getId());
      $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ == $thresholds$$4_value$$177$$.length - 1 ? !$isVert$$9_labelPosition$$5$$ && $color$$57_isRTL$$28_plotAreaColor$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.max), 0, $axisArea_bounds$$106$$.$w$ + 2, $axisArea_bounds$$106$$.$h$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, $axisArea_bounds$$106$$.$w$ + 2, $axisArea_bounds$$106$$.$h$ + 2, 
      0, 0) : $isVert$$9_labelPosition$$5$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.max), $axisArea_bounds$$106$$.$w$ + 2, 1 * ($options$$159$$.max - $thresholds$$4_value$$177$$[$thresholds$$4_value$$177$$.length - 2 - $currentThresholdIndex$$1$$].max) / window.Math.abs($options$$159$$.min - $options$$159$$.max) * $axisArea_bounds$$106$$.$h$, 0, 0) : $color$$57_isRTL$$28_plotAreaColor$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 
      0, 0, 1 * ($options$$159$$.max - ($thresholds$$4_value$$177$$[$thresholds$$4_value$$177$$.length - 2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$4_value$$177$$[$thresholds$$4_value$$177$$.length - 2 - $currentThresholdIndex$$1$$].max)) / window.Math.abs($options$$159$$.min - $options$$159$$.max) * $axisArea_bounds$$106$$.$w$, $axisArea_bounds$$106$$.$h$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, 1 * ($thresholds$$4_value$$177$$[$currentThresholdIndex$$1$$].max - 
      $options$$159$$.min) / window.Math.abs($options$$159$$.min - $options$$159$$.max) * $axisArea_bounds$$106$$.$w$, $axisArea_bounds$$106$$.$h$ + 2, 0, 0);
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$3_referenceLineSize$$, $cp$$4$$);
      if($color$$57_isRTL$$28_plotAreaColor$$ || $isVert$$9_labelPosition$$5$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$4_value$$177$$.length - 1 - $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$
      }
      $plotArea$$3_referenceLineSize$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$54$$, $thresholds$$4_value$$177$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$3_referenceLineSize$$.$setSolidStroke$($arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$54$$, $container$$123_tooltip$$37$$, $plotArea$$3_referenceLineSize$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$54$$, $thresholds$$4_value$$177$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)
    }
  }else {
    "off" != $options$$159$$.plotArea.rendered && (!("auto" == $options$$159$$.plotArea.rendered && "onIndicator" == $options$$159$$.thresholdDisplay) && "all" != $options$$159$$.thresholdDisplay) && ($plotArea$$3_referenceLineSize$$ = $isVert$$9_labelPosition$$5$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$54$$, $gauge$$54$$.$getCtx$(), $plotX1$$, $plotX2$$, $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.max), $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.min)) : 
    D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$54$$, $gauge$$54$$.$getCtx$(), $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.min), $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($options$$159$$.max), $plotY1$$, $drawnPlotSize_plotY2$$), $color$$57_isRTL$$28_plotAreaColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$54$$), $plotArea$$3_referenceLineSize$$.$setSolidFill$($color$$57_isRTL$$28_plotAreaColor$$), $plotArea$$3_referenceLineSize$$.$setSolidStroke$($arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$), 
    D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$54$$, $container$$123_tooltip$$37$$, $plotArea$$3_referenceLineSize$$, $color$$57_isRTL$$28_plotAreaColor$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$))
  }
  $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ = new D.$DvtStatusMeterGaugeIndicator$$($gauge$$54$$, $gauge$$54$$.$getCtx$(), $baseline$$12_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  $gauge$$54$$.$__shapes$.push($baselineCoord$$8_i$$611_overlay$$15_shape$$54$$);
  $color$$57_isRTL$$28_plotAreaColor$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$54$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$54$$) && "none" != $options$$159$$.visualEffects ? ($arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$57_isRTL$$28_plotAreaColor$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$57_isRTL$$28_plotAreaColor$$, -0.04, -0.05)], $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$ = new D.$DvtLinearGradientFill$$($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$, $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$, 
  [1, 1], [0, 1]), $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$.$setFill$($arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$)) : $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$.$setSolidFill$($color$$57_isRTL$$28_plotAreaColor$$);
  $borderColor$$36_refColor_shadow$$7_stroke$$76$$ && $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$.$setSolidStroke$($borderColor$$36_refColor_shadow$$7_stroke$$76$$);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ && $container$$123_tooltip$$37$$.$addChild$($baselineCoord$$8_i$$611_overlay$$15_shape$$54$$);
  $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$54$$, $gauge$$54$$.$getCtx$(), $baseline$$12_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$54$$, $container$$123_tooltip$$37$$, $baselineCoord$$8_i$$611_overlay$$15_shape$$54$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$);
  if($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $options$$159$$.referenceLines) {
    for($baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ = 0;$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$ < $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$.length;$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$++) {
      $borderColor$$36_refColor_shadow$$7_stroke$$76$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$].color ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$].color : "white", $thresholds$$4_value$$177$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$].value, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = $options$$159$$.indicatorSize, 
      $isVert$$9_labelPosition$$5$$ ? ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$) * $axisArea_bounds$$106$$.$w$, $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$ = $axisArea_bounds$$106$$.x + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$) / 4 * $axisArea_bounds$$106$$.$w$, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($thresholds$$4_value$$177$$), 
      $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = new D.$DvtLine$$($gauge$$54$$.$getCtx$(), $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$, $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$ + $plotArea$$3_referenceLineSize$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$)) : ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$) * 
      $axisArea_bounds$$106$$.$h$, $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$ = $axisInfo$$15_axisOptions$$16$$.$getUnboundedCoordAt$($thresholds$$4_value$$177$$), $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = $axisArea_bounds$$106$$.y + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$) / 4 * $axisArea_bounds$$106$$.$h$, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ = new D.$DvtLine$$($gauge$$54$$.$getCtx$(), $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$, 
      $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$, $arColors$$28_gradient$$13_plotAreaBorderColor_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$ + $plotArea$$3_referenceLineSize$$)), $borderColor$$36_refColor_shadow$$7_stroke$$76$$ = new D.$DvtSolidStroke$$($borderColor$$36_refColor_shadow$$7_stroke$$76$$, 1, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$].lineWidth ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$].lineWidth : 
      2), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$].lineStyle && $borderColor$$36_refColor_shadow$$7_stroke$$76$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$611_overlay$$15_shape$$54$$].lineStyle)), $bRender_indicatorSize$$1_referenceLine_yCoord$$8$$.$setStroke$($borderColor$$36_refColor_shadow$$7_stroke$$76$$), $container$$123_tooltip$$37$$.$addChild$($bRender_indicatorSize$$1_referenceLine_yCoord$$8$$), 
      !(0,D.$DvtAgent$isPlatformIE$$)() && "none" != $options$$159$$.visualEffects && ($borderColor$$36_refColor_shadow$$7_stroke$$76$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)($bRender_indicatorSize$$1_referenceLine_yCoord$$8$$, $borderColor$$36_refColor_shadow$$7_stroke$$76$$))
    }
  }
  $isVert$$9_labelPosition$$5$$ = $options$$159$$.metricLabel.position;
  "on" == $options$$159$$.metricLabel.rendered && !D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$159$$) && !D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$159$$) ? D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$54$$, $container$$123_tooltip$$37$$, $axisArea_bounds$$106$$, $color$$57_isRTL$$28_plotAreaColor$$, $isVert$$9_labelPosition$$5$$, {$x1$:$baseline$$12_indicatorX1$$, $x2$:$indicatorX2$$, $y1$:$indicatorY1$$, $y2$:$drawnIndicatorSize_indicatorY2$$}, 
  {$x1$:$plotX1$$, $x2$:$plotX2$$, $y1$:$plotY1$$, $y2$:$drawnPlotSize_plotY2$$}) : D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$159$$) && D.$DvtStatusMeterGaugeRenderer$$.$_renderTitle$($gauge$$54$$, $container$$123_tooltip$$37$$, $axisArea_bounds$$106$$, $isVert$$9_labelPosition$$5$$);
  $axisArea_bounds$$106$$ = new D.$DvtRect$$($gauge$$54$$.$getCtx$(), $axisArea_bounds$$106$$.x, $axisArea_bounds$$106$$.y, $axisArea_bounds$$106$$.$w$, $axisArea_bounds$$106$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($axisArea_bounds$$106$$);
  $container$$123_tooltip$$37$$.$addChild$($axisArea_bounds$$106$$);
  (($container$$123_tooltip$$37$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$54$$)) || $options$$159$$.readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$54$$.$__getEventManager$().$associate$($axisArea_bounds$$106$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$123_tooltip$$37$$, $color$$57_isRTL$$28_plotAreaColor$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($defaultValue$$4_gauge$$55$$, $context$$383$$, $width$$97_x1$$47$$, $multiplier$$1_x2$$43$$, $height$$90_y1$$37$$, $options$$160_y2$$34$$) {
  var $cmds$$21_x$$207$$ = window.Math.min($width$$97_x1$$47$$, $multiplier$$1_x2$$43$$), $y$$181$$ = window.Math.min($height$$90_y1$$37$$, $options$$160_y2$$34$$);
  $width$$97_x1$$47$$ = window.Math.abs($width$$97_x1$$47$$ - $multiplier$$1_x2$$43$$);
  $height$$90_y1$$37$$ = window.Math.abs($options$$160_y2$$34$$ - $height$$90_y1$$37$$);
  $options$$160_y2$$34$$ = $defaultValue$$4_gauge$$55$$.$getOptions$();
  $multiplier$$1_x2$$43$$ = "vertical" == $options$$160_y2$$34$$.orientation ? $width$$97_x1$$47$$ : $height$$90_y1$$37$$;
  $defaultValue$$4_gauge$$55$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($defaultValue$$4_gauge$$55$$) ? "25%" : "15%";
  $cmds$$21_x$$207$$ = D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$21_x$$207$$, $y$$181$$, $width$$97_x1$$47$$, $height$$90_y1$$37$$, "auto" != $options$$160_y2$$34$$.plotArea.borderRadius ? $options$$160_y2$$34$$.plotArea.borderRadius : $options$$160_y2$$34$$.borderRadius, $multiplier$$1_x2$$43$$, $defaultValue$$4_gauge$$55$$);
  return new D.$DvtPath$$($context$$383$$, $cmds$$21_x$$207$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$56$$, $container$$124$$, $shape$$55$$, $bRender$$1$$, $gradient$$14_gradientAngle$$2$$) {
  "none" != $gauge$$56$$.$getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$56$$) && ($gradient$$14_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$14_gradientAngle$$2$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$55$$.$setFill$($gradient$$14_gradientAngle$$2$$), $gauge$$56$$.$__shapes$.push($shape$$55$$), $shape$$55$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $bRender$$1$$ && $container$$124$$.$addChild$($shape$$55$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$30_gauge$$57$$, $container$$125$$, $shape$$56$$, $color$$58$$, $gradient$$15_gradientAngle$$3$$) {
  var $options$$162$$ = $arColors$$30_gauge$$57$$.$getOptions$();
  $shape$$56$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$125$$.$addChild$($shape$$56$$);
  "none" != $options$$162$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$30_gauge$$57$$) ? ($arColors$$30_gauge$$57$$ = [D.$DvtColorUtils$$.$getDarker$($color$$58$$, 0.9), $color$$58$$, D.$DvtColorUtils$$.$getBrighter$($color$$58$$)], $gradient$$15_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$15_gradientAngle$$3$$, $arColors$$30_gauge$$57$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$30_gauge$$57$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$58$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$58$$, -0.09, 0.04)], $gradient$$15_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$15_gradientAngle$$3$$, $arColors$$30_gauge$$57$$, [1, 1], [0, 1])), $shape$$56$$.$setFill$($gradient$$15_gradientAngle$$3$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelOutsidePlotArea$$($gauge$$58$$, $container$$126$$, $bounds$$107$$) {
  var $computedLabelBounds_options$$163$$ = $gauge$$58$$.$getOptions$(), $isRTL$$29$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$58$$.$getCtx$()), $isVert$$10_size$$35$$ = "vertical" == $computedLabelBounds_options$$163$$.orientation, $label$$57$$ = new D.$DvtOutputText$$($gauge$$58$$.$getCtx$(), ""), $labelString$$5$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$163$$.value, $gauge$$58$$), $labelGap$$ = $computedLabelBounds_options$$163$$.__layout.labelGap, $labelStyle$$15_minLabelDims$$1$$ = 
  $computedLabelBounds_options$$163$$.metricLabel.style, $labelColor$$3_maxLabel$$1_minValue$$14$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("color"), $labelColor$$3_maxLabel$$1_minValue$$14$$ = $labelColor$$3_maxLabel$$1_minValue$$14$$ ? $labelColor$$3_maxLabel$$1_minValue$$14$$ : "#333333", $bound$$8_maxLabelDims$$1_maxValue$$15$$ = D.$JSCompiler_alias_NULL$$;
  $label$$57$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
  $label$$57$$.$setSolidFill$($labelColor$$3_maxLabel$$1_minValue$$14$$);
  if($isVert$$10_size$$35$$ && "on" == $computedLabelBounds_options$$163$$.metricLabel.rendered) {
    $bound$$8_maxLabelDims$$1_maxValue$$15$$ = 0 < $computedLabelBounds_options$$163$$.max ? $computedLabelBounds_options$$163$$.max : $computedLabelBounds_options$$163$$.min;
    $bound$$8_maxLabelDims$$1_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_maxLabelDims$$1_maxValue$$15$$, $gauge$$58$$);
    $labelColor$$3_maxLabel$$1_minValue$$14$$ = new D.$DvtOutputText$$($gauge$$58$$.$getCtx$(), $bound$$8_maxLabelDims$$1_maxValue$$15$$);
    $labelColor$$3_maxLabel$$1_minValue$$14$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
    $computedLabelBounds_options$$163$$ = new D.$DvtRectangle$$($bounds$$107$$.x, $bounds$$107$$.y + 0.8 * $bounds$$107$$.$h$, $bounds$$107$$.$w$, 0.2 * $bounds$$107$$.$h$);
    $isVert$$10_size$$35$$ = ($isVert$$10_size$$35$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$10_size$$35$$) : $labelColor$$3_maxLabel$$1_minValue$$14$$.$getOptimalFontSize$($computedLabelBounds_options$$163$$);
    $bound$$8_maxLabelDims$$1_maxValue$$15$$ = $labelColor$$3_maxLabel$$1_minValue$$14$$.$measureDimensions$();
    $bounds$$107$$.$h$ -= $bound$$8_maxLabelDims$$1_maxValue$$15$$.$h$;
    var $labelSpace$$ = $bound$$8_maxLabelDims$$1_maxValue$$15$$.$w$;
    $label$$57$$.$setFontSize$($isVert$$10_size$$35$$);
    $label$$57$$.$setTextString$($labelString$$5$$);
    $label$$57$$.$setX$($bounds$$107$$.x + $bounds$$107$$.$w$ / 2);
    $label$$57$$.$setY$($bounds$$107$$.y + $bounds$$107$$.$h$);
    $bounds$$107$$.$h$ -= $labelGap$$;
    $label$$57$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$57$$, $bounds$$107$$.$w$, $bounds$$107$$.$h$, $container$$126$$)
  }else {
    if(!$isVert$$10_size$$35$$ && "on" == $computedLabelBounds_options$$163$$.metricLabel.rendered) {
      var $isVert$$10_size$$35$$ = ($isVert$$10_size$$35$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$10_size$$35$$) : 13, $minLabel$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$163$$.min, $gauge$$58$$), $labelColor$$3_maxLabel$$1_minValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$163$$.max, $gauge$$58$$);
      18 > $bounds$$107$$.$h$ && ($isVert$$10_size$$35$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$5$$, $minLabel$$, $labelColor$$3_maxLabel$$1_minValue$$14$$], $label$$57$$, $bounds$$107$$));
      $label$$57$$.$setFontSize$($isVert$$10_size$$35$$);
      var $alignCoord$$;
      if(0 < $computedLabelBounds_options$$163$$.max || "off" != $computedLabelBounds_options$$163$$.plotArea.rendered || !("auto" == $computedLabelBounds_options$$163$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$163$$.thresholdDisplay)) {
        $bound$$8_maxLabelDims$$1_maxValue$$15$$ = 0 < $computedLabelBounds_options$$163$$.max ? $computedLabelBounds_options$$163$$.max : $computedLabelBounds_options$$163$$.min, $bound$$8_maxLabelDims$$1_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_maxLabelDims$$1_maxValue$$15$$, $gauge$$58$$), $labelColor$$3_maxLabel$$1_minValue$$14$$ = new D.$DvtOutputText$$($gauge$$58$$.$getCtx$(), $bound$$8_maxLabelDims$$1_maxValue$$15$$), $labelColor$$3_maxLabel$$1_minValue$$14$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$), 
        $labelColor$$3_maxLabel$$1_minValue$$14$$.$setFontSize$($isVert$$10_size$$35$$), $bound$$8_maxLabelDims$$1_maxValue$$15$$ = $labelColor$$3_maxLabel$$1_minValue$$14$$.$measureDimensions$(), $bound$$8_maxLabelDims$$1_maxValue$$15$$.$w$ = window.Math.min($bound$$8_maxLabelDims$$1_maxValue$$15$$.$w$, $bounds$$107$$.$w$), $alignCoord$$ = $isRTL$$29$$ ? $bounds$$107$$.x + $bound$$8_maxLabelDims$$1_maxValue$$15$$.$w$ : $bounds$$107$$.x + $bounds$$107$$.$w$, $labelSpace$$ = $bound$$8_maxLabelDims$$1_maxValue$$15$$.$w$, 
        $isRTL$$29$$ && ($bounds$$107$$.x += $bound$$8_maxLabelDims$$1_maxValue$$15$$.$w$ + $labelGap$$), $bounds$$107$$.$w$ -= $bound$$8_maxLabelDims$$1_maxValue$$15$$.$w$ + $labelGap$$
      }
      if(0 > $computedLabelBounds_options$$163$$.min && "on" != $computedLabelBounds_options$$163$$.plotArea.rendered && !("auto" == $computedLabelBounds_options$$163$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$163$$.thresholdDisplay)) {
        $labelColor$$3_maxLabel$$1_minValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$163$$.min, $gauge$$58$$);
        $minLabel$$ = new D.$DvtOutputText$$($gauge$$58$$.$getCtx$(), $labelColor$$3_maxLabel$$1_minValue$$14$$);
        $minLabel$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
        $minLabel$$.$setFontSize$($isVert$$10_size$$35$$);
        $labelStyle$$15_minLabelDims$$1$$ = $minLabel$$.$measureDimensions$();
        if(0 > $computedLabelBounds_options$$163$$.value || 0 >= $computedLabelBounds_options$$163$$.max) {
          $alignCoord$$ = $isRTL$$29$$ ? $bounds$$107$$.x + $bounds$$107$$.$w$ : $bounds$$107$$.x + $labelStyle$$15_minLabelDims$$1$$.$w$, $labelSpace$$ = $labelStyle$$15_minLabelDims$$1$$.$w$
        }
        $isRTL$$29$$ || ($bounds$$107$$.x += $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$);
        $bounds$$107$$.$w$ -= $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$
      }
      $label$$57$$.$setTextString$($labelString$$5$$);
      $label$$57$$.$setX$($alignCoord$$);
      $label$$57$$.$setY$($bounds$$107$$.y + $bounds$$107$$.$h$ / 2 - $bound$$8_maxLabelDims$$1_maxValue$$15$$.$h$ / 2);
      $label$$57$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$57$$, $labelSpace$$, $bounds$$107$$.$h$, $container$$126$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelInsidePlotArea$$($gauge$$59$$, $container$$127$$, $bounds$$108$$, $color$$59$$, $labelPosition$$6$$, $indicator$$8$$, $plotArea$$4$$, $repeatedTry$$) {
  var $labelColor$$4_options$$164$$ = $gauge$$59$$.$getOptions$(), $isRTL$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$59$$.$getCtx$()), $isVert$$11$$ = "vertical" == $labelColor$$4_options$$164$$.orientation, $plotAreaRendered$$ = "on" == $labelColor$$4_options$$164$$.plotArea.rendered, $hAlignment$$ = "center", $vAlignment$$ = "middle", $labelSpace$$1$$ = new D.$DvtRectangle$$(window.Math.min($indicator$$8$$.$x1$, $indicator$$8$$.$x2$), window.Math.min($indicator$$8$$.$y1$, $indicator$$8$$.$y2$), 
  window.Math.abs($indicator$$8$$.$x2$ - $indicator$$8$$.$x1$), window.Math.abs($indicator$$8$$.$y2$ - $indicator$$8$$.$y1$)), $labelColor$$4_options$$164$$ = $labelColor$$4_options$$164$$.metricLabel.style.$getStyle$("color");
  "center" == $labelPosition$$6$$ ? ($labelColor$$4_options$$164$$ = $labelColor$$4_options$$164$$ ? $labelColor$$4_options$$164$$ : D.$DvtColorUtils$$.$getContrastingTextColor$($color$$59$$), $isVert$$11$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2) : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2)) : "insideIndicatorEdge" == $labelPosition$$6$$ ? ($labelColor$$4_options$$164$$ = $labelColor$$4_options$$164$$ ? 
  $labelColor$$4_options$$164$$ : D.$DvtColorUtils$$.$getContrastingTextColor$($color$$59$$), $isVert$$11$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = !$plotAreaRendered$$ && $indicator$$8$$.$y1$ > $indicator$$8$$.$y2$ ? "bottom" : "top") : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = $isRTL$$30$$ ? !$plotAreaRendered$$ && $indicator$$8$$.$x1$ < $indicator$$8$$.$x2$ ? 
  "right" : "left" : !$plotAreaRendered$$ && $indicator$$8$$.$x1$ > $indicator$$8$$.$x2$ ? "left" : "right")) : "outsideIndicatorEdge" == $labelPosition$$6$$ && ($isVert$$11$$ ? ($labelSpace$$1$$.$h$ = window.Math.abs($plotArea$$4$$.$y1$ - $indicator$$8$$.$y1$) - $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $plotArea$$4$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "bottom", !$plotAreaRendered$$ && $indicator$$8$$.$y1$ > $indicator$$8$$.$y2$ && ($labelSpace$$1$$.$h$ = window.Math.abs($plotArea$$4$$.$y1$ - 
  $indicator$$8$$.$y1$) - $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $indicator$$8$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "top")) : $isRTL$$30$$ ? !$plotAreaRendered$$ && $indicator$$8$$.$x1$ < $indicator$$8$$.$x2$ ? ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x2$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $indicator$$8$$.$x2$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left") : ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x1$ - $indicator$$8$$.$x2$) - 
  $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : !$plotAreaRendered$$ && $indicator$$8$$.$x1$ > $indicator$$8$$.$x2$ ? ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x1$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x2$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, 
  $labelSpace$$1$$.x = $indicator$$8$$.$x2$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left"));
  !D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$59$$, $container$$127$$, $labelSpace$$1$$, $labelColor$$4_options$$164$$, $hAlignment$$, $vAlignment$$) && !$repeatedTry$$ && ("outsideIndicatorEdge" == $labelPosition$$6$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$59$$, $container$$127$$, $bounds$$108$$, $color$$59$$, "insideIndicatorEdge", $indicator$$8$$, $plotArea$$4$$, D.$JSCompiler_alias_TRUE$$) : ("insideIndicatorEdge" == $labelPosition$$6$$ || "center" == $labelPosition$$6$$) && 
  D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$59$$, $container$$127$$, $bounds$$108$$, $color$$59$$, "outsideIndicatorEdge", $indicator$$8$$, $plotArea$$4$$, D.$JSCompiler_alias_TRUE$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderTitle$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderTitle$$($gauge$$60_titleDim$$, $container$$128$$, $bounds$$109$$) {
  var $isRTL$$31$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$60_titleDim$$.$getCtx$()), $options$$165$$ = $gauge$$60_titleDim$$.$getOptions$(), $isVert$$12$$ = "vertical" == $options$$165$$.orientation, $titleSpace$$4$$ = new D.$DvtRectangle$$($bounds$$109$$.x, $bounds$$109$$.y, $isVert$$12$$ ? $bounds$$109$$.$w$ : $bounds$$109$$.$w$ - $bounds$$109$$.$h$, $isVert$$12$$ ? $bounds$$109$$.$h$ - $bounds$$109$$.$w$ : $bounds$$109$$.$h$), $title$$12_titleString$$1$$ = $options$$165$$.title.text;
  if(!D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$165$$) && "on" == $options$$165$$.metricLabel.rendered) {
    var $fontStyle$$1_labelString$$6$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$165$$.value, $gauge$$60_titleDim$$), $title$$12_titleString$$1$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$title$$12_titleString$$1$$, $fontStyle$$1_labelString$$6$$])
  }
  var $titleStyle$$1$$ = $options$$165$$.title.style, $fontStyle$$1_labelString$$6$$ = $titleStyle$$1$$.$clone$(), $size$$36_tempTitle$$1$$ = $titleStyle$$1$$.$getStyle$("font-size");
  $size$$36_tempTitle$$1$$ || ($size$$36_tempTitle$$1$$ = new D.$DvtOutputText$$($gauge$$60_titleDim$$.$getCtx$(), $title$$12_titleString$$1$$, 0, 0), $size$$36_tempTitle$$1$$.$setCSSStyle$($titleStyle$$1$$), $size$$36_tempTitle$$1$$.$setTextString$($title$$12_titleString$$1$$), $size$$36_tempTitle$$1$$ = $isVert$$12$$ ? $size$$36_tempTitle$$1$$.$getOptimalFontSize$(new D.$DvtRectangle$$($titleSpace$$4$$.x, $titleSpace$$4$$.y, $titleSpace$$4$$.$w$, window.Number.MAX_VALUE)) : $size$$36_tempTitle$$1$$.$getOptimalFontSize$(new D.$DvtRectangle$$($titleSpace$$4$$.x, 
  $titleSpace$$4$$.y, window.Number.MAX_VALUE, $titleSpace$$4$$.$h$)));
  $title$$12_titleString$$1$$ = new D.$DvtMultilineText$$($gauge$$60_titleDim$$.$getCtx$(), $title$$12_titleString$$1$$);
  $fontStyle$$1_labelString$$6$$.$setFontSize$("font-size", $size$$36_tempTitle$$1$$.toString());
  $title$$12_titleString$$1$$.$setCSSStyle$($fontStyle$$1_labelString$$6$$);
  D.$DvtTextUtils$$.$fitText$($title$$12_titleString$$1$$, $titleSpace$$4$$.$w$, $titleSpace$$4$$.$h$, $gauge$$60_titleDim$$);
  $gauge$$60_titleDim$$ = $title$$12_titleString$$1$$.$getDimensions$();
  "center" == $options$$165$$.title.position || "auto" == $options$$165$$.title.position && $isVert$$12$$ ? ($title$$12_titleString$$1$$.$setY$($bounds$$109$$.y + $bounds$$109$$.$h$ / 2 - $gauge$$60_titleDim$$.$h$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $bounds$$109$$.$w$ / 2), $title$$12_titleString$$1$$.$alignCenter$()) : ($title$$12_titleString$$1$$.$setY$($bounds$$109$$.y + $bounds$$109$$.$h$ / 2 - $gauge$$60_titleDim$$.$h$ / 2), !$isVert$$12$$ && $isRTL$$31$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + 
  $bounds$$109$$.$w$ - $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignRight$()) : !$isVert$$12$$ && !$isRTL$$31$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignLeft$()) : $isVert$$12$$ && ($title$$12_titleString$$1$$.$setY$($bounds$$109$$.y + $bounds$$109$$.$h$ - $gauge$$60_titleDim$$.$h$ - $titleSpace$$4$$.$w$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $bounds$$109$$.$w$ / 2), $title$$12_titleString$$1$$.$alignCenter$()));
  $container$$128$$.$addChild$($title$$12_titleString$$1$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$110$$, $radius$$19$$, $angle$$44$$) {
  return{x:window.Math.cos($angle$$44$$) * $radius$$19$$ + $bounds$$110$$.$w$ / 2 + $bounds$$110$$.x, y:window.Math.sin($angle$$44$$) * $radius$$19$$ + $bounds$$110$$.$h$ / 2 + $bounds$$110$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$37_gauge$$61$$, $container$$129$$, $bounds$$111_shape$$57$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$, $color$$60$$, $isPlotArea$$) {
  var $context$$384$$ = $borderColor$$37_gauge$$61$$.$getCtx$();
  (0,D.$DvtAgent$isRightToLeft$$)($borderColor$$37_gauge$$61$$.$getCtx$()) && ($startAngle$$16$$ = window.Math.PI - $startAngle$$16$$ - $angleExtent$$14$$, $startAngle$$16$$ = 0 < $startAngle$$16$$ ? $startAngle$$16$$ : $startAngle$$16$$ + 2 * window.Math.PI);
  $isPlotArea$$ ? $bounds$$111_shape$$57$$ = new D.$DvtPath$$($context$$384$$, D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$111_shape$$57$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$)) : ($bounds$$111_shape$$57$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$384$$, $bounds$$111_shape$$57$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$), $borderColor$$37_gauge$$61$$.$__shapes$.push($bounds$$111_shape$$57$$));
  $bounds$$111_shape$$57$$.$setSolidFill$($color$$60$$);
  ($borderColor$$37_gauge$$61$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$37_gauge$$61$$)) && !$isPlotArea$$ && $bounds$$111_shape$$57$$.$setSolidStroke$($borderColor$$37_gauge$$61$$);
  $container$$129$$.$addChild$($bounds$$111_shape$$57$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$62_p1$$7$$, $container$$130$$, $bounds$$112_p2$$6$$, $angle$$45$$, $color$$61_stroke$$77$$, $lineWidth$$8$$, $lineStyle$$2$$) {
  var $context$$385_shape$$58$$ = $gauge$$62_p1$$7$$.$getCtx$(), $maxDiameter$$1_outerRadius$$5$$ = window.Math.min($bounds$$112_p2$$6$$.$w$, $bounds$$112_p2$$6$$.$h$), $innerRadius$$6$$ = 0.275 * $maxDiameter$$1_outerRadius$$5$$, $maxDiameter$$1_outerRadius$$5$$ = 0.5 * $maxDiameter$$1_outerRadius$$5$$;
  (0,D.$DvtAgent$isRightToLeft$$)($gauge$$62_p1$$7$$.$getCtx$()) && ($angle$$45$$ = window.Math.PI - $angle$$45$$, $angle$$45$$ = 0 < $angle$$45$$ ? $angle$$45$$ : $angle$$45$$ + 2 * window.Math.PI);
  $gauge$$62_p1$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$112_p2$$6$$, $innerRadius$$6$$, $angle$$45$$);
  $bounds$$112_p2$$6$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$112_p2$$6$$, $maxDiameter$$1_outerRadius$$5$$, $angle$$45$$);
  $context$$385_shape$$58$$ = new D.$DvtLine$$($context$$385_shape$$58$$, $gauge$$62_p1$$7$$.x, $gauge$$62_p1$$7$$.y, $bounds$$112_p2$$6$$.x, $bounds$$112_p2$$6$$.y);
  $color$$61_stroke$$77$$ = new D.$DvtSolidStroke$$($color$$61_stroke$$77$$, 1, $lineWidth$$8$$);
  $lineStyle$$2$$ && $color$$61_stroke$$77$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$2$$));
  $context$$385_shape$$58$$.$setStroke$($color$$61_stroke$$77$$);
  $container$$130$$.$addChild$($context$$385_shape$$58$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($bounds$$113_p4$$2$$, $startAngle$$17$$, $angleExtent$$15$$, $innerRadius$$7$$, $cmd$$15_outerRadius$$6$$) {
  var $p1$$8$$, $p2$$7$$, $p3$$2$$;
  $angleExtent$$15$$ < D.$DvtMath$$.$TWO_PI$ ? ($p1$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$ + $angleExtent$$15$$), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$ + $angleExtent$$15$$), $bounds$$113_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, 
  $innerRadius$$7$$, $startAngle$$17$$), $cmd$$15_outerRadius$$6$$ = D.$DvtPathUtils$$.moveTo($p1$$8$$.x, $p1$$8$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.lineTo($p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$, 0, $bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y) + D.$DvtPathUtils$$.closePath()) : ($p1$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, 
  $cmd$$15_outerRadius$$6$$, $startAngle$$17$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$ + $angleExtent$$15$$ / 2), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$), $bounds$$113_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$ + $angleExtent$$15$$ / 2), $cmd$$15_outerRadius$$6$$ = 
  D.$DvtPathUtils$$.moveTo($p1$$8$$.x, $p1$$8$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p1$$8$$.x, $p1$$8$$.y), 0 < $innerRadius$$7$$ && ($cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.moveTo($bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, 
  $angleExtent$$15$$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$ / 2, 0, $bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y)), $cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$15_outerRadius$$6$$
};
D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($angle$$46$$, $bStart$$1$$) {
  var $quadrant$$ = 1;
  if($bStart$$1$$) {
    $angle$$46$$ >= D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ < window.Math.PI ? $quadrant$$ = 2 : $angle$$46$$ >= window.Math.PI && $angle$$46$$ < 1.5 * window.Math.PI ? $quadrant$$ = 3 : $angle$$46$$ >= 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ && ($quadrant$$ = 4)
  }else {
    if($angle$$46$$ > D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ <= window.Math.PI) {
      $quadrant$$ = 2
    }else {
      if($angle$$46$$ > window.Math.PI && $angle$$46$$ <= 1.5 * window.Math.PI) {
        $quadrant$$ = 3
      }else {
        if($angle$$46$$ > 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ || 0 == $angle$$46$$) {
          $quadrant$$ = 4
        }
      }
    }
  }
  return $quadrant$$
};
D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_hasMetricLabelOutsidePlotArea$$($options$$166$$) {
  var $labelPosition$$8$$ = $options$$166$$.metricLabel.position;
  return"auto" == $labelPosition$$8$$ || "outsidePlotArea" == $labelPosition$$8$$ || "withTitle" == $labelPosition$$8$$ && !D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$166$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($gauge$$63$$, $innerRadius$$8_maxInnerDiameter$$1$$, $maxDiameter$$2_startAngleRads$$2$$, $angleExtentRads$$3$$, $endAngle$$4$$, $bounds$$114$$, $isRTL$$33$$) {
  var $labelBounds$$10_labelCenterOffset$$ = D.$JSCompiler_alias_NULL$$, $startQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($maxDiameter$$2_startAngleRads$$2$$, D.$JSCompiler_alias_TRUE$$), $endQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($endAngle$$4$$, D.$JSCompiler_alias_FALSE$$), $width$$98$$ = $bounds$$114$$.$w$, $height$$91$$ = $bounds$$114$$.$h$, $cx$$47$$ = $width$$98$$ / 2, $cy$$48$$ = $height$$91$$ / 2;
  if($startQuadrant$$ == $endQuadrant$$ && $angleExtentRads$$3$$ <= D.$DvtMath$$.$HALF_PI$) {
    if($maxDiameter$$2_startAngleRads$$2$$ = 2 * window.Math.min($bounds$$114$$.$w$, $bounds$$114$$.$h$), $bounds$$114$$.$w$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$114$$.$h$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, !$isRTL$$33$$ && 1 == $startQuadrant$$ || $isRTL$$33$$ && 2 == $startQuadrant$$) {
      $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$47$$ = $width$$98$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$48$$ = $height$$91$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
      (2.5 / 7) - 2)
    }else {
      if(!$isRTL$$33$$ && 2 == $startQuadrant$$ || $isRTL$$33$$ && 1 == $startQuadrant$$) {
        $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$47$$ = $width$$98$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$48$$ = $height$$91$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
        (2.5 / 7) - 2)
      }else {
        if(!$isRTL$$33$$ && 3 == $startQuadrant$$ || $isRTL$$33$$ && 4 == $startQuadrant$$) {
          $cx$$47$$ = $width$$98$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$48$$ = $height$$91$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
          (2.5 / 7) - 2)
        }else {
          if(!$isRTL$$33$$ && 4 == $startQuadrant$$ || $isRTL$$33$$ && 3 == $startQuadrant$$) {
            $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$47$$ = $width$$98$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$48$$ = $height$$91$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
            (2.5 / 7) - 2)
          }
        }
      }
    }
  }else {
    $startQuadrant$$ % 4 + 1 == $endQuadrant$$ && $angleExtentRads$$3$$ <= window.Math.PI ? 1 == $startQuadrant$$ || 3 == $startQuadrant$$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min($bounds$$114$$.$w$, 2 * $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $bounds$$114$$.$w$ > $bounds$$114$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * 
    (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ - ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.75 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7)), 1 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.y = $bounds$$114$$.y + ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.5 / 7), $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$48$$ = $height$$91$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$114$$.y += ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$48$$ = $height$$91$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$)) : ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * $bounds$$114$$.$w$, $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= 
    $maxDiameter$$2_startAngleRads$$2$$, $bounds$$114$$.$w$ < $bounds$$114$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ - ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3.25 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), 
    !$isRTL$$33$$ && 4 == $startQuadrant$$ || $isRTL$$33$$ && 2 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.x = $bounds$$114$$.x + ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.25 / 7), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2 - ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$47$$ = $width$$98$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$114$$.x += ($bounds$$114$$.$w$ - 
    $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$47$$ = $width$$98$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$114$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$)) : $endQuadrant$$ % 4 + 1 == $startQuadrant$$ && $angleExtentRads$$3$$ > window.Math.PI && (1 == $startQuadrant$$ && $bounds$$114$$.$h$ > $bounds$$114$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$) + 1)), 2 * ($bounds$$114$$.$w$ / 
    (window.Math.sin($endAngle$$4$$ - 1.5 * window.Math.PI) + 1)), $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$33$$ ? ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, 
    $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$w$, $cx$$47$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$98$$) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$47$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2), $bounds$$114$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$) : 2 == $startQuadrant$$ && $bounds$$114$$.$h$ < $bounds$$114$$.$w$ ? 
    ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - D.$DvtMath$$.$HALF_PI$) + 1)), 2 * ($bounds$$114$$.$h$ / (window.Math.sin($endAngle$$4$$) + 1)), $bounds$$114$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + 
    $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (1 + (2 * $bounds$$114$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1))), $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$48$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : 3 == $startQuadrant$$ && $bounds$$114$$.$h$ > $bounds$$114$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * 
    ($bounds$$114$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - window.Math.PI) + 1)), 2 * ($bounds$$114$$.$w$ / (window.Math.sin($endAngle$$4$$ - D.$DvtMath$$.$HALF_PI$) + 1)), $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$33$$ ? ($labelBounds$$10_labelCenterOffset$$ = 
    new D.$DvtRectangle$$($bounds$$114$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$47$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + 
    $bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$w$, $cx$$47$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$98$$), $bounds$$114$$.$w$ = 
    $maxDiameter$$2_startAngleRads$$2$$) : 4 == $startQuadrant$$ && $bounds$$114$$.$h$ < $bounds$$114$$.$w$ && ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - 1.5 * window.Math.PI) + 1)), 2 * ($bounds$$114$$.$h$ / (window.Math.sin(D.$DvtMath$$.$TWO_PI$ - $endAngle$$4$$) + 1)), $bounds$$114$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = 
    $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (2 * $bounds$$114$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + $labelBounds$$10_labelCenterOffset$$), 
    $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$h$, $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$48$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $height$$91$$))
  }
  $gauge$$63$$.$cx$ = $cx$$47$$;
  $gauge$$63$$.$cy$ = $cy$$48$$;
  return $labelBounds$$10_labelCenterOffset$$
};
D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$ = function $$DvtStatusMeterGaugeRenderer$$$$rectangleWithBorderRadius$$($x$$209$$, $y$$183$$, $w$$49$$, $h$$46$$, $horiz$$1_radius$$20_split$$1$$, $multiplier$$2$$, $bottomLeftY_defaultValue$$5$$) {
  var $topLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$, $topLeftY$$ = $bottomLeftY_defaultValue$$5$$, $topRightX$$1$$ = $bottomLeftY_defaultValue$$5$$, $topRightY$$ = $bottomLeftY_defaultValue$$5$$, $bottomRightX$$1$$ = $bottomLeftY_defaultValue$$5$$, $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$, $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$;
  if($horiz$$1_radius$$20_split$$1$$) {
    if(-1 != $horiz$$1_radius$$20_split$$1$$.indexOf("/")) {
      var $splitHorizVert_vert$$1$$ = $horiz$$1_radius$$20_split$$1$$.split("/");
      $horiz$$1_radius$$20_split$$1$$ = $splitHorizVert_vert$$1$$[0].trim().split(/\s+/);
      $splitHorizVert_vert$$1$$ = $splitHorizVert_vert$$1$$[1].trim().split(/\s+/);
      1 == $horiz$$1_radius$$20_split$$1$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0] : 2 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1]) : 3 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1], 
      $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[2]) : 4 == $horiz$$1_radius$$20_split$$1$$.length && ($topLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[2], $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[3]);
      1 == $splitHorizVert_vert$$1$$.length ? $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[0] : 2 == $splitHorizVert_vert$$1$$.length ? ($topLeftY$$ = $bottomRightY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[1]) : 3 == $splitHorizVert_vert$$1$$.length ? ($topLeftY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[1], 
      $bottomRightY$$ = $splitHorizVert_vert$$1$$[2]) : 4 == $splitHorizVert_vert$$1$$.length && ($topLeftY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $splitHorizVert_vert$$1$$[1], $bottomRightY$$ = $splitHorizVert_vert$$1$$[2], $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[3])
    }else {
      "auto" != $horiz$$1_radius$$20_split$$1$$ && ($horiz$$1_radius$$20_split$$1$$ = $horiz$$1_radius$$20_split$$1$$.trim().split(/\s+/), 1 == $horiz$$1_radius$$20_split$$1$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[0] : 2 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $topLeftY$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[0], 
      $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[1]) : 3 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $topLeftY$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[2]) : 4 == $horiz$$1_radius$$20_split$$1$$.length && ($topLeftX$$1$$ = 
      $topLeftY$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $topRightY$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[2], $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[3]))
    }
  }
  return D.$DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$($x$$209$$, $y$$183$$, $w$$49$$, $h$$46$$, D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightX$$1$$, 
  $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftY_defaultValue$$5$$, $multiplier$$2$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$ = function $$DvtStatusMeterGaugeRenderer$$$$_parseBorderRadiusItem$$($item$$24$$, $multiplier$$3$$) {
  var $radius$$21$$ = window.Math.min((0,window.parseFloat)($item$$24$$), $multiplier$$3$$ / 2);
  -1 != $item$$24$$.indexOf("%") && ($radius$$21$$ = 0.01 * window.Math.min(50, (0,window.parseFloat)($item$$24$$)) * $multiplier$$3$$);
  return $radius$$21$$ < D.$DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ ? 0 : $radius$$21$$
};
D.$DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$ = function $$DvtStatusMeterGaugeRenderer$$$$_roundedRectangle$$($x$$210$$, $y$$184$$, $w$$50$$, $h$$47$$, $tlcrX$$, $tlcrY$$, $trcrX$$, $trcrY$$, $brcrX$$, $brcrY$$, $blcrX$$, $blcrY$$) {
  $tlcrY$$ = window.Math.min($tlcrY$$, 0.5 * $h$$47$$);
  $trcrY$$ = window.Math.min($trcrY$$, 0.5 * $h$$47$$);
  $brcrY$$ = window.Math.min($brcrY$$, 0.5 * $h$$47$$);
  $blcrY$$ = window.Math.min($blcrY$$, 0.5 * $h$$47$$);
  $tlcrX$$ = window.Math.min($tlcrX$$, 0.5 * $w$$50$$);
  $trcrX$$ = window.Math.min($trcrX$$, 0.5 * $w$$50$$);
  $brcrX$$ = window.Math.min($brcrX$$, 0.5 * $w$$50$$);
  $blcrX$$ = window.Math.min($blcrX$$, 0.5 * $w$$50$$);
  return D.$DvtPathUtils$$.moveTo($x$$210$$ + $tlcrX$$, $y$$184$$) + D.$DvtPathUtils$$.lineTo($x$$210$$ + $w$$50$$ - $trcrX$$, $y$$184$$) + D.$DvtPathUtils$$.arcTo($trcrX$$, $trcrY$$, window.Math.PI / 2, 1, $x$$210$$ + $w$$50$$, $y$$184$$ + $trcrY$$) + D.$DvtPathUtils$$.lineTo($x$$210$$ + $w$$50$$, $y$$184$$ + $h$$47$$ - $brcrY$$) + D.$DvtPathUtils$$.arcTo($brcrX$$, $brcrY$$, window.Math.PI / 2, 1, $x$$210$$ + $w$$50$$ - $brcrX$$, $y$$184$$ + $h$$47$$) + D.$DvtPathUtils$$.lineTo($x$$210$$ + $blcrX$$, 
  $y$$184$$ + $h$$47$$) + D.$DvtPathUtils$$.arcTo($blcrX$$, $blcrY$$, window.Math.PI / 2, 1, $x$$210$$, $y$$184$$ + $h$$47$$ - $blcrY$$) + D.$DvtPathUtils$$.lineTo($x$$210$$, $y$$184$$ + $tlcrY$$) + D.$DvtPathUtils$$.arcTo($tlcrX$$, $tlcrY$$, window.Math.PI / 2, 1, $x$$210$$ + $tlcrX$$, $y$$184$$) + D.$DvtPathUtils$$.closePath()
};
D.$DvtStatusMeterGaugeIndicator$$ = function $$DvtStatusMeterGaugeIndicator$$$($gauge$$50$$, $context$$381$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$) {
  this.Init($gauge$$50$$, $context$$381$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeIndicator");
D.$DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($gauge$$51$$, $context$$382$$, $x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$) {
  D.$DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $context$$382$$);
  this.$_gauge$ = $gauge$$51$$;
  this.$setCoords$($x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($width$$95_x1$$46$$, $multiplier_x2$$42$$, $height$$88_y1$$36$$, $options$$156_y2$$33$$) {
  this.$_x1$ = $width$$95_x1$$46$$;
  this.$_x2$ = $multiplier_x2$$42$$;
  this.$_y1$ = $height$$88_y1$$36$$;
  this.$_y2$ = $options$$156_y2$$33$$;
  var $cmds$$20_x$$206$$ = window.Math.min($width$$95_x1$$46$$, $multiplier_x2$$42$$), $y$$180$$ = window.Math.min($height$$88_y1$$36$$, $options$$156_y2$$33$$);
  $width$$95_x1$$46$$ = window.Math.abs($width$$95_x1$$46$$ - $multiplier_x2$$42$$);
  $height$$88_y1$$36$$ = window.Math.abs($options$$156_y2$$33$$ - $height$$88_y1$$36$$);
  $options$$156_y2$$33$$ = this.$_gauge$.$getOptions$();
  $multiplier_x2$$42$$ = "vertical" == $options$$156_y2$$33$$.orientation ? $width$$95_x1$$46$$ : $height$$88_y1$$36$$;
  var $defaultValue$$3$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)(this.$_gauge$) ? "25%" : "15%", $cmds$$20_x$$206$$ = D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$20_x$$206$$, $y$$180$$, $width$$95_x1$$46$$, $height$$88_y1$$36$$, $options$$156_y2$$33$$.borderRadius, $multiplier_x2$$42$$, $defaultValue$$3$$);
  this.$setCmds$($cmds$$20_x$$206$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($params$$34$$) {
  $params$$34$$ && 4 == $params$$34$$.length && this.$setCoords$($params$$34$$[0], $params$$34$$[1], $params$$34$$[2], $params$$34$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$379$$, $bounds$$101$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$) {
  this.Init($context$$379$$, $bounds$$101$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$380$$, $bounds$$102$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$380$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$102$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$103$$, $startAngle$$14$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$) {
  $bounds$$103$$ && $bounds$$103$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$103$$ : $bounds$$103$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$14$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$12$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$3$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $outerRadius$$2$$;
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$(D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$103$$, $startAngle$$14$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$))
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$33$$) {
  $params$$33$$ && 5 == $params$$33$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$33$$[0], $params$$33$$[1], $params$$33$$[2], $params$$33$$[3], $params$$33$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$$.newInstance = function $$DvtDialGauge$$$newInstance$($context$$367$$, $callback$$101$$, $callbackObj$$57$$) {
  var $gauge$$ = new D.$DvtDialGauge$$;
  $gauge$$.Init($context$$367$$, $callback$$101$$, $callbackObj$$57$$);
  return $gauge$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$368$$, $callback$$102$$, $callbackObj$$58$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$368$$, $callback$$102$$, $callbackObj$$58$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$118$$) {
  var $backgroundType$$ = $options$$118$$.background, $indicatorType$$ = $options$$118$$.indicator;
  "string" === typeof $backgroundType$$ && ($options$$118$$.background = D.$DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$), $options$$118$$.background.images = $options$$118$$._backgroundImages);
  "string" === typeof $indicatorType$$ && ($options$$118$$.indicator = D.$DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$), $options$$118$$.indicator.images = $options$$118$$._indicatorImages);
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$118$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$92$$, $width$$81$$, $height$$75$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$92$$, $width$$81$$, $height$$75$$)
};
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
  var $eventManager$$17$$ = this.$__getEventManager$();
  $eventManager$$17$$ && $eventManager$$17$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$58$$, $animatedObjs_animationType$$, $animationDuration$$3$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$602$$ = 0;$i$$602$$ < $objs$$58$$.length;$i$$602$$++) {
    var $obj$$289$$ = $objs$$58$$[$i$$602$$], $endState$$13$$ = $obj$$289$$.$getAnimationParams$(), $animation$$1_startAngle$$8$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$289$$.$setAngle$($animation$$1_startAngle$$8$$);
    $animation$$1_startAngle$$8$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$289$$, $animationDuration$$3$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$1_startAngle$$8$$.$_animator$, "typeNumberArray", $obj$$289$$, $obj$$289$$.$getAnimationParams$, $obj$$289$$.$setAnimationParams$, $endState$$13$$);
    $animation$$1_startAngle$$8$$.$_animator$.$setEasing$(function($objs$$58$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$58$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$1_startAngle$$8$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$193$$, $y$$168$$) {
  var $angle$$41_ratio$$13$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$168$$ - this.$__anchorPt$.y, $x$$193$$ - this.$__anchorPt$.x));
  0 >= $angle$$41_ratio$$13$$ && ($angle$$41_ratio$$13$$ += 360);
  var $isRTL$$19_minValue$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $angleExtent$$7_backgroundOptions$$ = this.$getOptions$().background, $startAngle$$9$$ = $isRTL$$19_minValue$$9$$ ? 180 + $angleExtent$$7_backgroundOptions$$.startAngle : 360 - $angleExtent$$7_backgroundOptions$$.startAngle, $angleExtent$$7_backgroundOptions$$ = $angleExtent$$7_backgroundOptions$$.angleExtent, $endAngle$$2$$ = $startAngle$$9$$ + $angleExtent$$7_backgroundOptions$$;
  if($isRTL$$19_minValue$$9$$) {
    $endAngle$$2$$ = $startAngle$$9$$;
    for($startAngle$$9$$ -= $angleExtent$$7_backgroundOptions$$;0 > $startAngle$$9$$;) {
      $startAngle$$9$$ += 360, $endAngle$$2$$ += 360
    }
  }
  $angle$$41_ratio$$13$$ + 360 >= $startAngle$$9$$ && $angle$$41_ratio$$13$$ + 360 <= $endAngle$$2$$ ? $angle$$41_ratio$$13$$ += 360 : $angle$$41_ratio$$13$$ >= $startAngle$$9$$ && $angle$$41_ratio$$13$$ <= $endAngle$$2$$ || ($angle$$41_ratio$$13$$ = $angle$$41_ratio$$13$$ > $endAngle$$2$$ ? $startAngle$$9$$ + 360 - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ - $endAngle$$2$$ ? $startAngle$$9$$ : $endAngle$$2$$ : $startAngle$$9$$ - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ + 360 - $endAngle$$2$$ ? 
  $startAngle$$9$$ : $endAngle$$2$$);
  $angle$$41_ratio$$13$$ = ($angle$$41_ratio$$13$$ - $startAngle$$9$$) / $angleExtent$$7_backgroundOptions$$;
  $isRTL$$19_minValue$$9$$ && ($angle$$41_ratio$$13$$ = 1 - $angle$$41_ratio$$13$$);
  $isRTL$$19_minValue$$9$$ = this.$Options$.min;
  return $angle$$41_ratio$$13$$ * (this.$Options$.max - $isRTL$$19_minValue$$9$$) + $isRTL$$19_minValue$$9$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$1$$, $container$$93$$, $bounds$$75_width$$82$$, $height$$76$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$1$$) ? ($bounds$$75_width$$82$$ = new D.$DvtRectangle$$(0, 0, $bounds$$75_width$$82$$, $height$$76$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$1$$, $container$$93$$, $bounds$$75_width$$82$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$1$$, $container$$93$$, $bounds$$75_width$$82$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$1$$, $container$$93$$, new D.$DvtRectangle$$(0, 0, $bounds$$75_width$$82$$, $height$$76$$))
};
D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($gauge$$2$$, $container$$94$$, $width$$83$$, $height$$77$$) {
  $gauge$$2$$.$__indicatorContainer$.$setAngle$(D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$2$$, $gauge$$2$$.$getOptions$().value));
  $container$$94$$.removeChild($gauge$$2$$.$__label$);
  D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$2$$, $container$$94$$, new D.$DvtRectangle$$(0, 0, $width$$83$$, $height$$77$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$3$$, $container$$95$$, $bounds$$76_scale$$23$$) {
  var $options$$119_tooltip$$29$$ = $gauge$$3$$.$getOptions$(), $background$$5_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$3$$, $bounds$$76_scale$$23$$);
  $container$$95$$.$addChild$($background$$5_backgroundAnchor$$);
  $options$$119_tooltip$$29$$.background.majorTickCount && $options$$119_tooltip$$29$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$3$$, $container$$95$$, $bounds$$76_scale$$23$$);
  var $indicator$$7$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$3$$, $bounds$$76_scale$$23$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$3$$.$getCtx$()), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$3$$.$getCtx$());
  $container$$95$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($indicator$$7$$);
  var $indicatorBounds_mat$$43$$ = $indicator$$7$$.$getDimensions$(), $angleRads$$9$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$3$$, $options$$119_tooltip$$29$$.value), $background$$5_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$3$$, $bounds$$76_scale$$23$$), $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$3$$, $indicatorBounds_mat$$43$$);
  $bounds$$76_scale$$23$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$3$$, $bounds$$76_scale$$23$$, $indicatorBounds_mat$$43$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$43$$.scale($bounds$$76_scale$$23$$, $bounds$$76_scale$$23$$);
  $indicator$$7$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $rotateContainer$$.$setAngle$($angleRads$$9$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate($background$$5_backgroundAnchor$$.x, $background$$5_backgroundAnchor$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $gauge$$3$$.$__shapes$.push($rotateContainer$$);
  $gauge$$3$$.$__indicatorContainer$ = $rotateContainer$$;
  (($options$$119_tooltip$$29$$ = $options$$119_tooltip$$29$$.shortDesc) || $gauge$$3$$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$3$$.$__getEventManager$().$associate$($container$$95$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$119_tooltip$$29$$));
  $gauge$$3$$.$__anchorPt$ = $background$$5_backgroundAnchor$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$4$$, $bounds$$77$$) {
  var $backgroundOptions$$1$$ = $gauge$$4$$.$getOptions$().background, $isRTL$$20_radiusScale$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$4$$.$getCtx$()), $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $shape$$50_widthRes$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ ? 2 * $bounds$$77$$.$w$ : $bounds$$77$$.$w$, $heightRes_scale$$24$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ ? 2 * $bounds$$77$$.$h$ : $bounds$$77$$.$h$, $images$$10_tx$$23$$ = 
  $backgroundOptions$$1$$.images;
  if($images$$10_tx$$23$$ && 0 < $images$$10_tx$$23$$.length) {
    var $i$$603_ty$$24$$, $refWidth$$, $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = [];
    for($i$$603_ty$$24$$ = 0;$i$$603_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$603_ty$$24$$++) {
      var $imageDims$$1_isImageRTL_source$$29$$ = "rtl" == $images$$10_tx$$23$$[$i$$603_ty$$24$$].dir;
      $isRTL$$20_radiusScale$$1$$ && $imageDims$$1_isImageRTL_source$$29$$ ? $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.push($images$$10_tx$$23$$[$i$$603_ty$$24$$]) : !$isRTL$$20_radiusScale$$1$$ && !$imageDims$$1_isImageRTL_source$$29$$ && $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.push($images$$10_tx$$23$$[$i$$603_ty$$24$$])
    }
    $images$$10_tx$$23$$ = 0 < $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.length ? $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ : $images$$10_tx$$23$$;
    for($i$$603_ty$$24$$ = 0;$i$$603_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$603_ty$$24$$++) {
      var $height$$78_image$$11$$ = $images$$10_tx$$23$$[$i$$603_ty$$24$$], $imageDims$$1_isImageRTL_source$$29$$ = $height$$78_image$$11$$.src, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = $height$$78_image$$11$$.width, $height$$78_image$$11$$ = $height$$78_image$$11$$.height, $isSvg$$ = $imageDims$$1_isImageRTL_source$$29$$ && -1 < $imageDims$$1_isImageRTL_source$$29$$.search(".svg");
      0 == $i$$603_ty$$24$$ && ($refWidth$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$, $refHeight$$ = $height$$78_image$$11$$);
      if($isSvg$$ || $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ >= $shape$$50_widthRes$$ && $height$$78_image$$11$$ >= $heightRes_scale$$24$$ || $i$$603_ty$$24$$ == $images$$10_tx$$23$$.length - 1) {
        var $shape$$50_widthRes$$ = new D.$DvtImage$$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$29$$, 0, 0, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$, $height$$78_image$$11$$), $matrix$$15$$ = new D.$DvtMatrix$$, $heightRes_scale$$24$$ = window.Math.min($bounds$$77$$.$w$ / $isTouchDevice$$3_locImages_metLblBounds_width$$84$$, $bounds$$77$$.$h$ / $height$$78_image$$11$$), $images$$10_tx$$23$$ = ($bounds$$77$$.$w$ - $heightRes_scale$$24$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$84$$) / 
        2;
        $i$$603_ty$$24$$ = ($bounds$$77$$.$h$ - $heightRes_scale$$24$$ * $height$$78_image$$11$$) / 2;
        $matrix$$15$$.scale($heightRes_scale$$24$$, $heightRes_scale$$24$$);
        $matrix$$15$$.translate($images$$10_tx$$23$$, $i$$603_ty$$24$$);
        $shape$$50_widthRes$$.$setMatrix$($matrix$$15$$);
        $isSvg$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && ($imageDims$$1_isImageRTL_source$$29$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$29$$, D.$DvtObj$$.$createCallback$($shape$$50_widthRes$$, $shape$$50_widthRes$$.$__setDimensions$))) && $shape$$50_widthRes$$.$__setDimensions$($imageDims$$1_isImageRTL_source$$29$$);
        $bounds$$77$$.x += $images$$10_tx$$23$$;
        $bounds$$77$$.y += $i$$603_ty$$24$$;
        $bounds$$77$$.$w$ = $heightRes_scale$$24$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$84$$;
        $bounds$$77$$.$h$ = $heightRes_scale$$24$$ * $height$$78_image$$11$$;
        !(0,window.isNaN)($backgroundOptions$$1$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$1$$.anchorY) && ($backgroundOptions$$1$$._anchorX = $isRTL$$20_radiusScale$$1$$ ? $bounds$$77$$.x + $bounds$$77$$.$w$ - $bounds$$77$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$ : $bounds$$77$$.x + $bounds$$77$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$, $backgroundOptions$$1$$._anchorY = $bounds$$77$$.y + $bounds$$77$$.$h$ * $backgroundOptions$$1$$.anchorY / $refHeight$$);
        $backgroundOptions$$1$$.metricLabelBounds && ($isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = {}, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.width = $bounds$$77$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.width / $refWidth$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.height = $bounds$$77$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.height / $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.y = $bounds$$77$$.y + $bounds$$77$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.y / 
        $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.x = $isRTL$$20_radiusScale$$1$$ ? $bounds$$77$$.x + $bounds$$77$$.$w$ - $bounds$$77$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$ - $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.width : $bounds$$77$$.x + $bounds$$77$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$, $backgroundOptions$$1$$._metricLabelBounds = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$);
        $isRTL$$20_radiusScale$$1$$ = window.Math.min($bounds$$77$$.$w$ / $refWidth$$, $bounds$$77$$.$h$ / $refHeight$$);
        $backgroundOptions$$1$$._radius = $backgroundOptions$$1$$.radius * $isRTL$$20_radiusScale$$1$$;
        $backgroundOptions$$1$$._tickLabelHeight = $backgroundOptions$$1$$.tickLabelHeight * $bounds$$77$$.$h$ / $refHeight$$;
        $backgroundOptions$$1$$._tickLabelWidth = $backgroundOptions$$1$$.tickLabelWidth * $bounds$$77$$.$w$ / $refWidth$$;
        return $shape$$50_widthRes$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$5$$, $bounds$$78$$) {
  var $indicatorOptions$$ = $gauge$$5$$.$getOptions$().indicator, $indicatorLength_source$$30$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$5$$, $bounds$$78$$), $heightRes$$1_shape$$51$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 2 * $indicatorLength_source$$30$$ : $indicatorLength_source$$30$$, $refWidth$$1$$, $refHeight$$1$$, $images$$11$$ = $indicatorOptions$$.images;
  if($images$$11$$ && 0 < $images$$11$$.length) {
    for(var $i$$604$$ = 0;$i$$604$$ < $images$$11$$.length;$i$$604$$++) {
      var $height$$79_image$$12$$ = $images$$11$$[$i$$604$$], $indicatorLength_source$$30$$ = $height$$79_image$$12$$.src, $width$$85$$ = $height$$79_image$$12$$.width, $height$$79_image$$12$$ = $height$$79_image$$12$$.height, $isSvg$$1$$ = $indicatorLength_source$$30$$ && -1 < $indicatorLength_source$$30$$.search(".svg");
      0 == $i$$604$$ && ($refWidth$$1$$ = $width$$85$$, $refHeight$$1$$ = $height$$79_image$$12$$);
      if($isSvg$$1$$ || $height$$79_image$$12$$ >= $heightRes$$1_shape$$51$$ || $i$$604$$ == $images$$11$$.length - 1) {
        return $heightRes$$1_shape$$51$$ = new D.$DvtImage$$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$30$$, 0, 0, $width$$85$$, $height$$79_image$$12$$), $isSvg$$1$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && D.$DvtImageLoader$$.$loadImage$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$30$$, D.$DvtObj$$.$createCallback$($heightRes$$1_shape$$51$$, $heightRes$$1_shape$$51$$.$__setDimensions$)) && ($heightRes$$1_shape$$51$$.$setWidth$($width$$85$$), $heightRes$$1_shape$$51$$.$setHeight$($height$$79_image$$12$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$85$$ / $refWidth$$1$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$79_image$$12$$ / $refHeight$$1$$), $heightRes$$1_shape$$51$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$6_startAngle$$10$$) {
  var $backgroundOptions$$2$$ = $gauge$$6_startAngle$$10$$.$getOptions$().background;
  $gauge$$6_startAngle$$10$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$6_startAngle$$10$$.$getCtx$()) ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle;
  return window.Math.PI * (90 - $gauge$$6_startAngle$$10$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$7$$, $value$$163$$) {
  var $isRTL$$22_maxValue$$9_options$$120$$ = $gauge$$7$$.$getOptions$(), $backgroundOptions$$3$$ = $isRTL$$22_maxValue$$9_options$$120$$.background, $minValue$$10_ratio$$14$$ = $isRTL$$22_maxValue$$9_options$$120$$.min, $isRTL$$22_maxValue$$9_options$$120$$ = $isRTL$$22_maxValue$$9_options$$120$$.max;
  $value$$163$$ = window.Math.max(window.Math.min($value$$163$$, $isRTL$$22_maxValue$$9_options$$120$$), $minValue$$10_ratio$$14$$);
  $minValue$$10_ratio$$14$$ = ($value$$163$$ - $minValue$$10_ratio$$14$$) / ($isRTL$$22_maxValue$$9_options$$120$$ - $minValue$$10_ratio$$14$$);
  $isRTL$$22_maxValue$$9_options$$120$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$7$$.$getCtx$());
  return window.Math.PI * (90 - (($isRTL$$22_maxValue$$9_options$$120$$ ? 180 - $backgroundOptions$$3$$.startAngle : $backgroundOptions$$3$$.startAngle) - $minValue$$10_ratio$$14$$ * ($isRTL$$22_maxValue$$9_options$$120$$ ? -$backgroundOptions$$3$$.angleExtent : $backgroundOptions$$3$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$8$$, $bounds$$79$$) {
  var $anchorY_backgroundOptions$$4$$ = $gauge$$8$$.$getOptions$().background, $anchorX$$ = $anchorY_backgroundOptions$$4$$._anchorX, $anchorY_backgroundOptions$$4$$ = $anchorY_backgroundOptions$$4$$._anchorY;
  return!(0,window.isNaN)($anchorX$$) && !(0,window.isNaN)($anchorY_backgroundOptions$$4$$) ? new D.$DvtPoint$$($anchorX$$, $anchorY_backgroundOptions$$4$$) : new D.$DvtPoint$$($bounds$$79$$.x + $bounds$$79$$.$w$ / 2, $bounds$$79$$.y + $bounds$$79$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$9$$, $bounds$$80$$) {
  var $radius$$16$$ = window.Math.min($bounds$$80$$.$w$, $bounds$$80$$.$h$) / 2;
  return $gauge$$9$$.$getOptions$().background.indicatorLength * $radius$$16$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$10$$, $indicatorBounds$$1$$) {
  var $anchorY$$1_indicatorOptions$$1$$ = $gauge$$10$$.$getOptions$().indicator, $anchorX$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorX, $anchorY$$1_indicatorOptions$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$1$$) && !(0,window.isNaN)($anchorY$$1_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$1$$, $anchorY$$1_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$11$$, $bounds$$82$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$11$$, $bounds$$82$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$12$$, $container$$96$$, $bounds$$83$$) {
  var $options$$121_size$$30$$ = $gauge$$12$$.$getOptions$();
  if("on" == $options$$121_size$$30$$.metricLabel.rendered) {
    var $labelString$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$121_size$$30$$.value, $gauge$$12$$), $minString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$121_size$$30$$.min, $gauge$$12$$), $maxString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$121_size$$30$$.max, $gauge$$12$$), $cx$$42_label$$53$$ = $bounds$$83$$.x + $bounds$$83$$.$w$ / 2, $cy$$43$$ = $bounds$$83$$.y + $bounds$$83$$.$h$ / 2, $labelWidth$$5$$ = $bounds$$83$$.$w$, $labelHeight$$2$$ = 
    $bounds$$83$$.$h$, $metricLabelBounds$$ = $options$$121_size$$30$$.background._metricLabelBounds;
    $metricLabelBounds$$ && ($cx$$42_label$$53$$ = $metricLabelBounds$$.x + $metricLabelBounds$$.width / 2, $cy$$43$$ = $metricLabelBounds$$.y + $metricLabelBounds$$.height / 2, $bounds$$83$$.$w$ = $metricLabelBounds$$.width, $bounds$$83$$.$h$ = $metricLabelBounds$$.height);
    $cx$$42_label$$53$$ = new D.$DvtOutputText$$($gauge$$12$$.$getCtx$(), $labelString$$2$$, $cx$$42_label$$53$$, $cy$$43$$);
    !$options$$121_size$$30$$.metricLabel.style.$getStyle$("color") && $options$$121_size$$30$$.background._isDark && $options$$121_size$$30$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$42_label$$53$$.$setCSSStyle$($options$$121_size$$30$$.metricLabel.style);
    $options$$121_size$$30$$ = ($options$$121_size$$30$$ = (0,window.parseInt)($options$$121_size$$30$$.metricLabel.style.$getFontSize$())) ? (0,window.parseInt)($options$$121_size$$30$$) : D.$JSCompiler_alias_NULL$$;
    $options$$121_size$$30$$ || ($options$$121_size$$30$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$2$$, $minString$$, $maxString$$], $cx$$42_label$$53$$, $bounds$$83$$), $cx$$42_label$$53$$.$setTextString$($labelString$$2$$), $cx$$42_label$$53$$.$setFontSize$($options$$121_size$$30$$));
    $cx$$42_label$$53$$.$alignCenter$();
    $cx$$42_label$$53$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$42_label$$53$$, $labelWidth$$5$$, $labelHeight$$2$$, $container$$96$$) && ($gauge$$12$$.$__label$ = $cx$$42_label$$53$$, $cx$$42_label$$53$$.$isTruncated$() && $gauge$$12$$.$__getEventManager$().$associate$($cx$$42_label$$53$$, new D.$DvtSimpleObjPeer$$($labelString$$2$$)))
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$13$$, $container$$97$$, $bounds$$84$$) {
  var $options$$122$$ = $gauge$$13$$.$getOptions$(), $isRTL$$23$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$13$$.$getCtx$());
  if($options$$122$$.background.radius && $options$$122$$.background.majorTickCount) {
    var $radius$$17$$ = $options$$122$$.background._radius, $minValue$$11$$ = $options$$122$$.min, $maxValue$$10$$ = $options$$122$$.max, $majorTickCount$$1$$ = $options$$122$$.background.majorTickCount, $fontSize$$12$$ = 12, $labelBounds$$7$$ = new D.$DvtRectangle$$($cx$$43_labelValue$$, $angleRads$$10_cy$$44$$, $bounds$$84$$.$w$, $bounds$$84$$.$h$), $style$$86_x$$194$$ = $options$$122$$.metricLabel.style.$getStyle$("font-size");
    $options$$122$$.background._tickLabelHeight && !$style$$86_x$$194$$ && ($labelBounds$$7$$.$h$ = $options$$122$$.background._tickLabelHeight);
    $options$$122$$.background._tickLabelWidth && !$style$$86_x$$194$$ && ($labelBounds$$7$$.$w$ = $options$$122$$.background._tickLabelWidth);
    if(!$style$$86_x$$194$$) {
      var $label$$54_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), "", $cx$$43_labelValue$$, $angleRads$$10_cy$$44$$), $fontSize$$12$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$122$$.max, $gauge$$13$$), D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$122$$.min, $gauge$$13$$)], $label$$54_labelString$$3$$, $labelBounds$$7$$)
    }
    for($style$$86_x$$194$$ = 0;$style$$86_x$$194$$ < $majorTickCount$$1$$;$style$$86_x$$194$$++) {
      var $cx$$43_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * $style$$86_x$$194$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$23$$ && ($cx$$43_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * ($majorTickCount$$1$$ - 1 - $style$$86_x$$194$$) / ($majorTickCount$$1$$ - 1));
      var $label$$54_labelString$$3$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$43_labelValue$$, $gauge$$13$$), $angleRads$$10_cy$$44$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$13$$, $cx$$43_labelValue$$), $anchor$$7$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$13$$, $bounds$$84$$), $cx$$43_labelValue$$ = $anchor$$7$$.x + $radius$$17$$ * window.Math.cos($angleRads$$10_cy$$44$$ - window.Math.PI / 2), $angleRads$$10_cy$$44$$ = $anchor$$7$$.y + $radius$$17$$ * 
      window.Math.sin($angleRads$$10_cy$$44$$ - window.Math.PI / 2), $label$$54_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), $label$$54_labelString$$3$$, $cx$$43_labelValue$$, $angleRads$$10_cy$$44$$);
      !$options$$122$$.tickLabel.style.$getStyle$("color") && $options$$122$$.background._isDark && $options$$122$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$54_labelString$$3$$.$setCSSStyle$($options$$122$$.tickLabel.style);
      $options$$122$$.tickLabel.style.$getStyle$("font-size") || $label$$54_labelString$$3$$.$setFontSize$($fontSize$$12$$);
      $label$$54_labelString$$3$$.$alignCenter$();
      $label$$54_labelString$$3$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$54_labelString$$3$$, $labelBounds$$7$$.$w$ + 0.5, $labelBounds$$7$$.$h$ + 0.5, $container$$97$$) && $label$$54_labelString$$3$$.$isTruncated$() && $gauge$$13$$.$__getEventManager$().$associate$($label$$54_labelString$$3$$, new D.$DvtSimpleObjPeer$$($label$$54_labelString$$3$$.$getUntruncatedTextString$()))
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$369$$) {
  this.Init($context$$369$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$8$$) {
  var $mat$$42$$ = new D.$DvtMatrix$$;
  $mat$$42$$.rotate($angleRads$$8$$);
  this.$setMatrix$($mat$$42$$);
  this.$_angleRads$ = $angleRads$$8$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$32$$) {
  $params$$32$$ && 1 == $params$$32$$.length && this.$setAngle$($params$$32$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$$.newInstance = function $$DvtRatingGauge$$$newInstance$($context$$375$$, $callback$$106$$, $callbackObj$$62$$) {
  var $gauge$$45$$ = new D.$DvtRatingGauge$$;
  $gauge$$45$$.Init($context$$375$$, $callback$$106$$, $callbackObj$$62$$);
  return $gauge$$45$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$376$$, $callback$$107$$, $callbackObj$$63$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$376$$, $callback$$107$$, $callbackObj$$63$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$151$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$151$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$117$$, $width$$92$$, $height$$85$$) {
  var $outerGap$$2$$ = this.$getOptions$().__layout.outerGap, $maxValue$$12$$ = this.$Options$.max, $isVert$$6$$ = "vertical" == this.$Options$.orientation;
  this.$_size$ = $isVert$$6$$ ? window.Math.min($width$$92$$ - 2 * $outerGap$$2$$, ($height$$85$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$) : window.Math.min($height$$85$$ - 2 * $outerGap$$2$$, ($width$$92$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$);
  this.$_bounds$ = $isVert$$6$$ ? new D.$DvtRectangle$$($outerGap$$2$$, (this.$Height$ - this.$_size$ * $maxValue$$12$$) / 2, this.$Width$ - 2 * $outerGap$$2$$, this.$_size$ * $maxValue$$12$$) : new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$12$$) / 2, $outerGap$$2$$, this.$_size$ * $maxValue$$12$$, this.$Height$ - 2 * $outerGap$$2$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$117$$, $width$$92$$, $height$$85$$)
};
D.$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  return new D.$DvtRatingGaugePeer$$(this)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$199$$, $y$$173$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    if("vertical" == this.$Options$.orientation) {
      $y$$173$$ = window.Math.max(window.Math.min($y$$173$$, this.$_bounds$.y + this.$_bounds$.$h$), this.$_bounds$.y), $val$$71$$ = window.Math.max((this.$_bounds$.y + this.$_bounds$.$h$ - $y$$173$$) / this.$_size$, this.$Options$.min)
    }else {
      $x$$199$$ = window.Math.max(window.Math.min($x$$199$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
      var $val$$71$$ = 0, $val$$71$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$199$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$199$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min)
    }
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$71$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$201$$, $y$$175$$) {
  this.$__processValueChangeMove$($x$$201$$, $y$$175$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$202$$, $y$$176$$) {
  var $value$$173$$ = this.$GetValueAt$($x$$202$$, $y$$176$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$173$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$173$$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$203$$, $y$$177$$) {
  var $oldValue$$5$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$203$$, $y$$177$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $value$$174$$, $hoverClip_proc_selContainer_unselContainer$$, $container$$118$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$118$$ || ($container$$118$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$24_selClip_unselClip$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods___updateClipRects$self$$.$getCtx$()), $isVert$$7$$ = "vertical" == $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.orientation;
    $value$$174$$ = window.Math.max(window.Math.min($value$$174$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$56_hoverContainer$$ = 0, $b$$41$$ = $value$$174$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$23$$ = $value$$174$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $hoverClip_proc_selContainer_unselContainer$$ && ($a$$56_hoverContainer$$ = $value$$174$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$41$$ = 0);
    $isVert$$7$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$118$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - 
    $c$$23$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$118$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $a$$56_hoverContainer$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$118$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $b$$41$$)) : $isRTL$$24_selClip_unselClip$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$118$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$118$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, 
    $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$118$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($hoverClip_proc_selContainer_unselContainer$$ = $container$$118$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$118$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), 
    $a$$56_hoverContainer$$ = $container$$118$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($a$$56_hoverContainer$$, $hoverClip_proc_selContainer_unselContainer$$);
    (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)($JSCompiler_StaticMethods___updateClipRects$self$$, $container$$118$$, $value$$174$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventManager$ = function $$DvtRatingGauge$$$$$CreateEventManager$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:D.$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:D.$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:D.$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:D.$JSCompiler_alias_NULL$$}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, step:1};
D.$DvtRatingGaugePeer$$ = function $$DvtRatingGaugePeer$$$($gauge$$47$$) {
  this.Init();
  this.$_gauge$ = $gauge$$47$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugePeer$$, D.$DvtSimpleObjPeer$$, "DvtRatingGaugePeer");
D.$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$152_target$$115$$, $threshold$$11_thresholdIndex$$5_x$$204$$, $y$$178$$) {
  $options$$152_target$$115$$ = this.$_gauge$.$getOptions$();
  $threshold$$11_thresholdIndex$$5_x$$204$$ = this.$_gauge$.$__getEventManager$().$IsMouseEditing$ ? D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$11_thresholdIndex$$5_x$$204$$, $y$$178$$)) : D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$11_thresholdIndex$$5_x$$204$$ = D.$DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$11_thresholdIndex$$5_x$$204$$)) && $threshold$$11_thresholdIndex$$5_x$$204$$.shortDesc ? $threshold$$11_thresholdIndex$$5_x$$204$$.shortDesc : $options$$152_target$$115$$.shortDesc
};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$ = "circle diamond rectangle star triangle human".split(" ");
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$48$$, $container$$119$$, $bounds$$100_width$$93$$, $height$$86_threshold$$12_thresholdIndex$$6$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$48$$)) {
    var $options$$153$$ = $gauge$$48$$.$getOptions$(), $isRTL$$25_overlayRect$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$48$$.$getCtx$()), $isVert$$8$$ = "vertical" == $options$$153$$.orientation, $outerGap$$3_unselectedOptions$$ = $options$$153$$.__layout.outerGap, $maxValue$$13$$ = $options$$153$$.max, $size$$34$$ = $isVert$$8$$ ? window.Math.min($bounds$$100_width$$93$$ - 2 * $outerGap$$3_unselectedOptions$$, ($height$$86_threshold$$12_thresholdIndex$$6$$ - 2 * $outerGap$$3_unselectedOptions$$) / 
    $maxValue$$13$$) : window.Math.min($height$$86_threshold$$12_thresholdIndex$$6$$ - 2 * $outerGap$$3_unselectedOptions$$, ($bounds$$100_width$$93$$ - 2 * $outerGap$$3_unselectedOptions$$) / $maxValue$$13$$);
    $bounds$$100_width$$93$$ = $isVert$$8$$ ? new D.$DvtRectangle$$($outerGap$$3_unselectedOptions$$, ($height$$86_threshold$$12_thresholdIndex$$6$$ - $size$$34$$ * $maxValue$$13$$) / 2, $bounds$$100_width$$93$$ - 2 * $outerGap$$3_unselectedOptions$$, $size$$34$$ * $maxValue$$13$$) : new D.$DvtRectangle$$(($bounds$$100_width$$93$$ - $size$$34$$ * $maxValue$$13$$) / 2, $outerGap$$3_unselectedOptions$$, $size$$34$$ * $maxValue$$13$$, $height$$86_threshold$$12_thresholdIndex$$6$$ - 2 * $outerGap$$3_unselectedOptions$$);
    $height$$86_threshold$$12_thresholdIndex$$6$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$48$$);
    $height$$86_threshold$$12_thresholdIndex$$6$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$48$$, $height$$86_threshold$$12_thresholdIndex$$6$$);
    var $selectedColor_selectedOptions$$ = $options$$153$$.selectedState.color, $changedColor_changedOptions$$ = $options$$153$$.changedState.color, $selectedBorderColor_unselContainer$$1$$ = $options$$153$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$153$$.changedState.borderColor;
    $height$$86_threshold$$12_thresholdIndex$$6$$ && $height$$86_threshold$$12_thresholdIndex$$6$$.color && ($changedColor_changedOptions$$ = $selectedColor_selectedOptions$$ = $height$$86_threshold$$12_thresholdIndex$$6$$.color);
    $height$$86_threshold$$12_thresholdIndex$$6$$ && $height$$86_threshold$$12_thresholdIndex$$6$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor_unselContainer$$1$$ = $height$$86_threshold$$12_thresholdIndex$$6$$.borderColor);
    $outerGap$$3_unselectedOptions$$ = {value:0, type:$options$$153$$.unselectedState.shape, color:$options$$153$$.unselectedState.color, borderColor:$options$$153$$.unselectedState.borderColor, visualEffects:$options$$153$$.visualEffects};
    $selectedColor_selectedOptions$$ = {value:0, type:$options$$153$$.selectedState.shape, color:$selectedColor_selectedOptions$$, borderColor:$selectedBorderColor_unselContainer$$1$$, visualEffects:$options$$153$$.visualEffects};
    $changedColor_changedOptions$$ = {value:0, type:$options$$153$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$153$$.visualEffects};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$153$$.hoverState.shape, color:$options$$153$$.hoverState.color, borderColor:$options$$153$$.hoverState.borderColor, visualEffects:$options$$153$$.visualEffects};
    "dot" == $options$$153$$.unselectedState.shape && ($outerGap$$3_unselectedOptions$$.type = "circle", $outerGap$$3_unselectedOptions$$.visualEffects = "none", $outerGap$$3_unselectedOptions$$.size = 0.05);
    $selectedBorderColor_unselContainer$$1$$ = new D.$DvtContainer$$($gauge$$48$$.$getCtx$());
    $container$$119$$.$addChild$($selectedBorderColor_unselContainer$$1$$);
    var $selContainer$$1$$ = new D.$DvtContainer$$($gauge$$48$$.$getCtx$());
    $container$$119$$.$addChild$($selContainer$$1$$);
    var $hoverContainer$$1$$ = new D.$DvtContainer$$($gauge$$48$$.$getCtx$());
    $container$$119$$.$addChild$($hoverContainer$$1$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$48$$, $options$$153$$.value, "render", $container$$119$$);
    for(var $i$$608$$ = 0;$i$$608$$ < $maxValue$$13$$;$i$$608$$++) {
      if("none" != $options$$153$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$48$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $selectedBorderColor_unselContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ / 2 - $size$$34$$ / 2, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ - ($i$$608$$ + 1) * $size$$34$$) : $isRTL$$25_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ - ($i$$608$$ + 1) * $size$$34$$, 
        $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $i$$608$$ * $size$$34$$, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2);
        -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $outerGap$$3_unselectedOptions$$.type) && ($outerGap$$3_unselectedOptions$$.type = "star");
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap$$3_unselectedOptions$$, $size$$34$$, $size$$34$$)
      }
      $options$$153$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$48$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ / 2 - $size$$34$$ / 2, 
      $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ - ($i$$608$$ + 1) * $size$$34$$) : $isRTL$$25_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ - ($i$$608$$ + 1) * $size$$34$$, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + 
      $i$$608$$ * $size$$34$$, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedColor_changedOptions$$.type) && ($changedColor_changedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedColor_changedOptions$$, $size$$34$$, $size$$34$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$48$$.$getCtx$(), 
      D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ / 2 - $size$$34$$ / 2, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ - ($i$$608$$ + 1) * $size$$34$$) : $isRTL$$25_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, 
      $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ - ($i$$608$$ + 1) * $size$$34$$, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $i$$608$$ * $size$$34$$, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $selectedColor_selectedOptions$$.type) && 
      ($selectedColor_selectedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($selectedColor_selectedOptions$$, $size$$34$$, $size$$34$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$48$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ / 2 - $size$$34$$ / 2, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ - ($i$$608$$ + 1) * $size$$34$$) : $isRTL$$25_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $bounds$$100_width$$93$$.$w$ - ($i$$608$$ + 1) * $size$$34$$, 
      $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$93$$.x + $i$$608$$ * $size$$34$$, $bounds$$100_width$$93$$.y + $bounds$$100_width$$93$$.$h$ / 2 - $size$$34$$ / 2);
      -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedBorderColor_hoverOptions$$.type) && ($changedBorderColor_hoverOptions$$.type = "star");
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedBorderColor_hoverOptions$$, $size$$34$$, $size$$34$$)
    }
    $isRTL$$25_overlayRect$$ = new D.$DvtRect$$($gauge$$48$$.$getCtx$(), $bounds$$100_width$$93$$.x, $bounds$$100_width$$93$$.y, $bounds$$100_width$$93$$.$w$, $bounds$$100_width$$93$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($isRTL$$25_overlayRect$$);
    $container$$119$$.$addChild$($isRTL$$25_overlayRect$$);
    ($height$$86_threshold$$12_thresholdIndex$$6$$ && $height$$86_threshold$$12_thresholdIndex$$6$$.shortDesc ? $height$$86_threshold$$12_thresholdIndex$$6$$.shortDesc : $options$$153$$.shortDesc) && $gauge$$48$$.$__getEventManager$().$associate$($isRTL$$25_overlayRect$$, new D.$DvtRatingGaugePeer$$($gauge$$48$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$48$$, $container$$119$$, new D.$DvtRectangle$$(0, 0, $bounds$$100_width$$93$$, $height$$86_threshold$$12_thresholdIndex$$6$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$46$$) {
  this.Init($gauge$$46$$.$getCtx$(), $gauge$$46$$.$__dispatchEvent$, $gauge$$46$$);
  this.$_gauge$ = $gauge$$46$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$499$$) {
  if(this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    var $coords$$31$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$499$$.pageX, $event$$499$$.pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$31$$.x, $coords$$31$$.y);
    this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$499$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$500$$) {
  if(this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$500$$.pageX, $event$$500$$.pageY);
    var $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6310$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6310$$, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6310$$.$Options$.value, "render");
    $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6310$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6310$$.$Options$.value, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6310$$.$Options$.value, D.$JSCompiler_alias_FALSE$$));
    this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$500$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$501$$) {
  var $coords$$33$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$501$$.pageX, $event$$501$$.pageY);
  this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && (!this.$IsMouseEditing$ && this.$_gauge$.$getOptions$().value != this.$_gauge$.$GetValueAt$($coords$$33$$.x, $coords$$33$$.y)) && (this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$);
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$501$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$502$$) {
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$502$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$503$$) {
  this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$;
  return D.$DvtRatingGaugeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$503$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
  return D;
});