/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtTimelineOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimeUtils$$ = {$supportsTouch$:function() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$4$$, $number$$2_time$$15$$, $width$$137$$) {
  $number$$2_time$$15$$ = ($number$$2_time$$15$$ - $denominator$$1_startTime$$4$$) * $width$$137$$;
  $denominator$$1_startTime$$4$$ = $endTime$$4$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$15$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$15$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$5_number$$3$$, $pos$$65$$, $width$$138$$) {
  $endTime$$5_number$$3$$ = $pos$$65$$ * ($endTime$$5_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$5_number$$3$$ || 0 == $width$$138$$ ? $startTime$$5$$ : $endTime$$5_number$$3$$ / $width$$138$$ + $startTime$$5$$
};
D.$DvtTimeComponent$$ = function $$DvtTimeComponent$$$($context$$610$$, $callback$$170$$, $callbackObj$$117$$) {
  this.Init($context$$610$$, $callback$$170$$, $callbackObj$$117$$)
};
(0,D.$goog$exportPath_$$)("DvtTimeComponent", D.$DvtTimeComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponent$$, D.$DvtBaseComponent$$, "DvtTimeComponent");
D.$DvtTimeComponent$$.prototype.Init = function $$DvtTimeComponent$$$$Init$($context$$611$$, $callback$$171$$, $callbackObj$$118$$) {
  D.$DvtTimeComponent$$.$superclass$.Init.call(this, $context$$611$$);
  this.$_callback$ = $callback$$171$$;
  this.$_callbackObj$ = $callbackObj$$118$$;
  this.$_virtualize$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtTimeComponent$$.prototype.$render$ = function $$DvtTimeComponent$$$$$render$$($props$$6_width$$159$$, $height$$144$$, $options$$270$$) {
  $options$$270$$ && this.$SetOptions$($options$$270$$);
  this.$Width$ = $props$$6_width$$159$$;
  this.$Height$ = $height$$144$$;
  this.$Options$ && ($props$$6_width$$159$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($props$$6_width$$159$$))
};
D.$DvtTimeComponent$$.prototype.render = D.$DvtTimeComponent$$.prototype.$render$;
D.$DvtTimeComponent$$.prototype.$SetOptions$ = function $$DvtTimeComponent$$$$$SetOptions$$($options$$271$$) {
  this.$Options$ = D.$DvtJSONUtils$$.$clone$($options$$271$$)
};
D.$DvtTimeComponent$$.prototype.$addTick$ = function $$DvtTimeComponent$$$$$addTick$$($container$$192$$, $line$$17_x1$$54$$, $x2$$50$$, $y1$$44$$, $y2$$41$$, $stroke$$117$$, $id$$295$$) {
  $line$$17_x1$$54$$ = new D.$DvtLine$$(this.$getCtx$(), $line$$17_x1$$54$$, $y1$$44$$, $x2$$50$$, $y2$$41$$, $id$$295$$);
  $line$$17_x1$$54$$.$setStroke$($stroke$$117$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$17_x1$$54$$);
  $container$$192$$.$addChild$($line$$17_x1$$54$$);
  return $line$$17_x1$$54$$
};
D.$JSCompiler_StaticMethods_addAxisLabel$$ = function $$JSCompiler_StaticMethods_addAxisLabel$$$($container$$193$$, $label$$103$$, $x$$292$$, $y$$260$$, $maxLength$$) {
  $label$$103$$.$setX$($x$$292$$);
  $label$$103$$.$setY$($y$$260$$);
  $label$$103$$.$isTruncated$() && $label$$103$$.$setTextString$($label$$103$$.$getUntruncatedTextString$());
  D.$DvtTextUtils$$.$fitText$($label$$103$$, $maxLength$$, window.Infinity, $container$$193$$);
  $label$$103$$.$alignCenter$()
};
D.$DvtTimeComponent$$.prototype.$addLabel$ = function $$DvtTimeComponent$$$$$addLabel$$($container$$194$$, $backgroundRect$$1_pos$$73$$, $label$$104_text$$110$$, $maxLength$$1$$, $y$$261$$, $labelStyle$$21$$, $id$$296$$, $renderBackground_width$$160$$, $labelPadding$$, $labelList$$, $isRTL$$42$$) {
  $label$$104_text$$110$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$104_text$$110$$, $backgroundRect$$1_pos$$73$$, 0, $id$$296$$);
  $labelStyle$$21$$ != D.$JSCompiler_alias_NULL$$ && $label$$104_text$$110$$.$setCSSStyle$($labelStyle$$21$$);
  $container$$194$$.$addChild$($label$$104_text$$110$$);
  var $dim$$86$$ = $label$$104_text$$110$$.$getDimensions$();
  $container$$194$$.removeChild($label$$104_text$$110$$);
  $y$$261$$ -= $dim$$86$$.$h$;
  $label$$104_text$$110$$.$setY$($y$$261$$);
  $isRTL$$42$$ && $label$$104_text$$110$$.$setX$($backgroundRect$$1_pos$$73$$ - $dim$$86$$.$w$);
  $renderBackground_width$$160$$ && ($renderBackground_width$$160$$ = window.Math.min($dim$$86$$.$w$ + 2 * $labelPadding$$, $maxLength$$1$$), $backgroundRect$$1_pos$$73$$ = new D.$DvtRect$$(this.$getCtx$(), ($isRTL$$42$$ ? $backgroundRect$$1_pos$$73$$ - $renderBackground_width$$160$$ + 2 * $labelPadding$$ : $backgroundRect$$1_pos$$73$$) - $labelPadding$$, $y$$261$$ - $labelPadding$$, $renderBackground_width$$160$$, $dim$$86$$.$h$ + 2 * $labelPadding$$, "ob_" + $id$$296$$), $backgroundRect$$1_pos$$73$$.$setCSSStyle$($labelStyle$$21$$), 
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backgroundRect$$1_pos$$73$$, 3), $container$$194$$.$addChild$($backgroundRect$$1_pos$$73$$), $labelList$$ && $labelList$$.push($backgroundRect$$1_pos$$73$$));
  D.$DvtTextUtils$$.$fitText$($label$$104_text$$110$$, $maxLength$$1$$, window.Infinity, $container$$194$$);
  $labelList$$ && $labelList$$.push($label$$104_text$$110$$);
  return $label$$104_text$$110$$
};
D.$DvtTimeComponent$$.prototype.$_applyParsedProperties$ = function $$DvtTimeComponent$$$$$_applyParsedProperties$$($props$$7$$) {
  this.$_origStart$ = $props$$7$$.$origStart$;
  this.$_origEnd$ = $props$$7$$.$origEnd$;
  this.$_start$ = $props$$7$$.start;
  this.$_end$ = $props$$7$$.end;
  this.$_inlineStyle$ = $props$$7$$.$inlineStyle$;
  this.$_scale$ = $props$$7$$.scale;
  this.$_converter$ = $props$$7$$.$converter$;
  this.$applyStyleValues$()
};
D.$DvtTimeComponent$$.prototype.$applyStyleValues$ = function $$DvtTimeComponent$$$$$applyStyleValues$$() {
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, this.$_inlineStyle$)
};
D.$JSCompiler_StaticMethods_setContentLength$$ = function $$JSCompiler_StaticMethods_setContentLength$$$($JSCompiler_StaticMethods_setContentLength$self$$, $length$$25$$) {
  $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$ < $length$$25$$ ? $length$$25$$ : $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$;
  $JSCompiler_StaticMethods_setContentLength$self$$.$_virtualize$ || ($JSCompiler_StaticMethods_setContentLength$self$$.$_fetchStartPos$ = 0, $JSCompiler_StaticMethods_setContentLength$self$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$)
};
D.$JSCompiler_StaticMethods_renderScrollableCanvas$$ = function $$JSCompiler_StaticMethods_renderScrollableCanvas$$$($JSCompiler_StaticMethods_renderScrollableCanvas$self$$) {
  $JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$_canvas$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$getCtx$(), "canvas");
  $JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$addChild$($JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$_canvas$)
};
D.$DvtTimeComponent$$.prototype.$isRTL$ = function $$DvtTimeComponent$$$$$isRTL$$() {
  return(0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$())
};
D.$DvtTimeComponentAxis$$ = function $$DvtTimeComponentAxis$$$($context$$612$$, $callback$$172$$, $callbackObj$$119$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$) {
  this.Init($context$$612$$, $callback$$172$$, $callbackObj$$119$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentAxis$$, D.$DvtContainer$$, "DvtTimeComponentAxis");
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ = 50;
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$ = 2;
D.$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$ = 1;
D.$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
D.$DvtTimeComponentAxis$$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeComponentAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$613$$, $callback$$173$$, $callbackObj$$120$$, $isVertical$$2$$, $zoomOrder$$1$$, $dateFormatStrings$$) {
  D.$DvtTimeComponentAxis$$.$superclass$.Init.call(this, $context$$613$$);
  this.$_calendar$ = new D.$DvtTimeComponentCalendar$$;
  this.$_formatter$ = new D.$DvtTimeComponentAxisFormatter$$(D.$DvtTimeComponentAxisFormatter$$.SHORT, $dateFormatStrings$$);
  this.$_contentSize$ = $isVertical$$2$$ ? D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ : D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
  this.$_borderWidth$ = D.$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$;
  this.$_zoomOrder$ = $zoomOrder$$1$$;
  this.$_dateToIsoConverter$ = $context$$613$$.$getLocaleHelpers$().dateToIsoConverter
};
D.$JSCompiler_prototypeAlias$$.$setScale$ = (0,D.$JSCompiler_set$$)("$_scale$");
D.$JSCompiler_prototypeAlias$$.$getTimeAxisWidth$ = function $$JSCompiler_prototypeAlias$$$$getTimeAxisWidth$$() {
  this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$ && (this.$_timeAxisWidth$ = 30);
  return this.$_timeAxisWidth$
};
D.$JSCompiler_prototypeAlias$$.$setBorderWidth$ = (0,D.$JSCompiler_set$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getBorderWidth$ = (0,D.$JSCompiler_get$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_contentSize$ + 2 * this.$_borderWidth$
};
D.$JSCompiler_prototypeAlias$$.$setType$ = function $$JSCompiler_prototypeAlias$$$$setType$$($type$$252$$, $dateFormatStrings$$1$$) {
  this.$_formatter$ = new D.$DvtTimeComponentAxisFormatter$$($type$$252$$, $dateFormatStrings$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$11$$) {
  return this.$_calendar$.$adjustDate$(new window.Date($date$$11$$), this.$_scale$)
};
D.$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($date$$12$$) {
  return this.$_calendar$.$getNextDate$(new window.Date($date$$12$$), this.$_scale$)
};
D.$JSCompiler_StaticMethods_formatDate$$ = function $$JSCompiler_StaticMethods_formatDate$$$($JSCompiler_StaticMethods_formatDate$self$$, $date$$13$$) {
  if($JSCompiler_StaticMethods_formatDate$self$$.$_converter$) {
    var $converter$$9$$;
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$;
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$)
    }
  }
  if($JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$ && $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$]) {
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$];
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$)
    }
  }
  return $JSCompiler_StaticMethods_formatDate$self$$.$_formatter$.$format$($date$$13$$, $JSCompiler_StaticMethods_formatDate$self$$.$_scale$)
};
D.$DvtTimeComponentAxisFormatter$$ = function $$DvtTimeComponentAxisFormatter$$$($type$$253$$, $locale$$8$$) {
  this.Init($type$$253$$, $locale$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentAxisFormatter$$, D.$DvtObj$$, "DvtTimeComponentAxisFormatter");
D.$DvtTimeComponentAxisFormatter$$.$LONG$ = 0;
D.$DvtTimeComponentAxisFormatter$$.SHORT = 1;
D.$DvtTimeComponentAxisFormatter$$.prototype.Init = function $$DvtTimeComponentAxisFormatter$$$$Init$($type$$254$$, $dateFormatStrings$$2$$) {
  this.$_type$ = $type$$254$$;
  this.$_dateFormatStrings$ = $dateFormatStrings$$2$$;
  this.$_formats$ = [];
  this.$_formats$[0] = {};
  this.$_formats$[0].seconds = "HH:MM:ss";
  this.$_formats$[0].minutes = "HH:MM";
  this.$_formats$[0].hours = "HH:MM";
  this.$_formats$[0].days = "dddd";
  this.$_formats$[0].weeks = "m/dd";
  this.$_formats$[0].months = "mmmm";
  this.$_formats$[0].quarters = "mmmm";
  this.$_formats$[0].halfyears = "yyyy";
  this.$_formats$[0].years = "yyyy";
  this.$_formats$[0].twoyears = "yyyy";
  this.$_formats$[1] = {};
  this.$_formats$[1].seconds = "HH:MM:ss";
  this.$_formats$[1].minutes = "HH:MM";
  this.$_formats$[1].hours = "HH:MM";
  this.$_formats$[1].days = "m/dd";
  this.$_formats$[1].weeks = "m/dd";
  this.$_formats$[1].months = "mmm";
  this.$_formats$[1].quarters = "mmm";
  this.$_formats$[1].halfyears = "yy";
  this.$_formats$[1].years = "yy";
  this.$_formats$[1].twoyears = "yy"
};
D.$DvtTimeComponentAxisFormatter$$.prototype.$format$ = function $$DvtTimeComponentAxisFormatter$$$$$format$$($date$$14$$, $scale$$69$$) {
  var $format$$9$$ = this.$_formats$[this.$_type$][$scale$$69$$];
  return $format$$9$$ != D.$JSCompiler_alias_NULL$$ ? $date$$14$$.$format$($format$$9$$, D.$JSCompiler_alias_NULL$$, this.$_dateFormatStrings$) : $date$$14$$.toLocaleString()
};
D.$token$$inline_8672$$ = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
D.$timezone$$inline_8673$$ = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
D.$timezoneClip$$inline_8674$$ = /[^-+\dA-Z]/g;
D.$pad$$inline_8675$$ = function $$pad$$inline_8675$$$($val$$inline_8676$$, $len$$inline_8677$$) {
  $val$$inline_8676$$ = (0,window.String)($val$$inline_8676$$);
  for($len$$inline_8677$$ = $len$$inline_8677$$ || 2;$val$$inline_8676$$.length < $len$$inline_8677$$;) {
    $val$$inline_8676$$ = "0" + $val$$inline_8676$$
  }
  return $val$$inline_8676$$
};
D.$dateFormat$$ = function $$dateFormat$$$($date$$inline_8678$$, $mask$$inline_8679$$, $utc$$inline_8680$$, $dateFormatStrings$$inline_8681$$) {
  1 == arguments.length && ("[object String]" == window.Object.prototype.toString.call($date$$inline_8678$$) && !/\d/.test($date$$inline_8678$$)) && ($mask$$inline_8679$$ = $date$$inline_8678$$, $date$$inline_8678$$ = D.$JSCompiler_alias_VOID$$);
  $date$$inline_8678$$ = $date$$inline_8678$$ ? new window.Date($date$$inline_8678$$) : new window.Date;
  if((0,window.isNaN)($date$$inline_8678$$)) {
    throw(0,window.SyntaxError)("invalid date");
  }
  $mask$$inline_8679$$ = (0,window.String)(D.$dateFormat$$.$masks$[$mask$$inline_8679$$] || $mask$$inline_8679$$ || D.$dateFormat$$.$masks$["default"]);
  "UTC:" == $mask$$inline_8679$$.slice(0, 4) && ($mask$$inline_8679$$ = $mask$$inline_8679$$.slice(4), $utc$$inline_8680$$ = D.$JSCompiler_alias_TRUE$$);
  var $L$$inline_8690__$$inline_8682$$ = $utc$$inline_8680$$ ? "getUTC" : "get", $d$$inline_8683$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + "Date"](), $D$$inline_8684$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + "Day"](), $m$$inline_8685$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + "Month"](), $y$$inline_8686$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + "FullYear"](), $H$$inline_8687$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + 
  "Hours"](), $M$$inline_8688$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + "Minutes"](), $s$$inline_8689$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + "Seconds"](), $L$$inline_8690__$$inline_8682$$ = $date$$inline_8678$$[$L$$inline_8690__$$inline_8682$$ + "Milliseconds"](), $o$$inline_8691$$ = $utc$$inline_8680$$ ? 0 : $date$$inline_8678$$.getTimezoneOffset(), $flags$$inline_8692$$ = {d:$d$$inline_8683$$, dd:(0,D.$pad$$inline_8675$$)($d$$inline_8683$$), ddd:$dateFormatStrings$$inline_8681$$.$dayNames$[$D$$inline_8684$$], 
  dddd:$dateFormatStrings$$inline_8681$$.$dayNames$[$D$$inline_8684$$ + 7], m:$m$$inline_8685$$ + 1, mm:(0,D.$pad$$inline_8675$$)($m$$inline_8685$$ + 1), mmm:$dateFormatStrings$$inline_8681$$.$monthNames$[$m$$inline_8685$$], mmmm:$dateFormatStrings$$inline_8681$$.$monthNames$[$m$$inline_8685$$ + 12], yy:(0,window.String)($y$$inline_8686$$).slice(2), yyyy:$y$$inline_8686$$, h:$H$$inline_8687$$ % 12 || 12, hh:(0,D.$pad$$inline_8675$$)($H$$inline_8687$$ % 12 || 12), H:$H$$inline_8687$$, HH:(0,D.$pad$$inline_8675$$)($H$$inline_8687$$), 
  M:$M$$inline_8688$$, MM:(0,D.$pad$$inline_8675$$)($M$$inline_8688$$), s:$s$$inline_8689$$, ss:(0,D.$pad$$inline_8675$$)($s$$inline_8689$$), l:(0,D.$pad$$inline_8675$$)($L$$inline_8690__$$inline_8682$$, 3), L:(0,D.$pad$$inline_8675$$)(99 < $L$$inline_8690__$$inline_8682$$ ? window.Math.round($L$$inline_8690__$$inline_8682$$ / 10) : $L$$inline_8690__$$inline_8682$$), t:12 > $H$$inline_8687$$ ? "a" : "p", tt:12 > $H$$inline_8687$$ ? "am" : "pm", T:12 > $H$$inline_8687$$ ? "A" : "P", TT:12 > $H$$inline_8687$$ ? 
  "AM" : "PM", Z:$utc$$inline_8680$$ ? "UTC" : ((0,window.String)($date$$inline_8678$$).match(D.$timezone$$inline_8673$$) || [""]).pop().replace(D.$timezoneClip$$inline_8674$$, ""), o:(0 < $o$$inline_8691$$ ? "-" : "+") + (0,D.$pad$$inline_8675$$)(100 * window.Math.floor(window.Math.abs($o$$inline_8691$$) / 60) + window.Math.abs($o$$inline_8691$$) % 60, 4), S:["th", "st", "nd", "rd"][3 < $d$$inline_8683$$ % 10 ? 0 : (10 != $d$$inline_8683$$ % 100 - $d$$inline_8683$$ % 10) * $d$$inline_8683$$ % 10]};
  return $mask$$inline_8679$$.replace(D.$token$$inline_8672$$, function($date$$inline_8678$$) {
    return $date$$inline_8678$$ in $flags$$inline_8692$$ ? $flags$$inline_8692$$[$date$$inline_8678$$] : $date$$inline_8678$$.slice(1, $date$$inline_8678$$.length - 1)
  })
};
D.$dateFormat$$.$masks$ = {"default":"ddd mmm dd yyyy HH:MM:ss", $shortDate$:"m/d/yy", $mediumDate$:"mmm d, yyyy", $longDate$:"mmmm d, yyyy", $fullDate$:"dddd, mmmm d, yyyy", $shortTime$:"h:MM TT", $mediumTime$:"h:MM:ss TT", $longTime$:"h:MM:ss TT Z", $isoDate$:"yyyy-mm-dd", $isoTime$:"HH:MM:ss", $isoDateTime$:"yyyy-mm-dd'T'HH:MM:ss", $isoUtcDateTime$:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};
window.Date.prototype.$format$ = function $Date$$$format$$($mask$$8$$, $utc$$1$$, $dateFormatStrings$$5$$) {
  return(0,D.$dateFormat$$)(this, $mask$$8$$, $utc$$1$$, $dateFormatStrings$$5$$)
};
D.$DvtTimeComponentCalendar$$ = function $$DvtTimeComponentCalendar$$$($options$$272$$) {
  this.Init($options$$272$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentCalendar$$, D.$DvtObj$$, "DvtTimeComponentCalendar");
D.$DvtTimeComponentCalendar$$.prototype.Init = function $$DvtTimeComponentCalendar$$$$Init$() {
  this.$_dayInMillis$ = 864E5
};
D.$DvtTimeComponentCalendar$$.prototype.$adjustDate$ = function $$DvtTimeComponentCalendar$$$$$adjustDate$$($date$$16$$, $scale$$70$$) {
  var $_adjustedDate$$ = new window.Date($date$$16$$.getTime());
  if("weeks" == $scale$$70$$) {
    $_adjustedDate$$.setHours(0, 0, 0);
    var $roll_amt$$ = ($date$$16$$.getDay() - 0 + 7) % 7;
    0 < $roll_amt$$ && $_adjustedDate$$.setTime($_adjustedDate$$.getTime() - $roll_amt$$ * this.$_dayInMillis$)
  }else {
    "months" == $scale$$70$$ ? $_adjustedDate$$.setDate(1) : "days" == $scale$$70$$ ? $_adjustedDate$$.setHours(0, 0, 0) : "hours" == $scale$$70$$ ? $_adjustedDate$$.setMinutes(0, 0, 0) : "minutes" == $scale$$70$$ ? $_adjustedDate$$.setSeconds(0, 0) : "seconds" == $scale$$70$$ ? $_adjustedDate$$.setMilliseconds(0) : "quarters" == $scale$$70$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 2 - ($date$$16$$.getMonth() + 11) % 3, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + 
    $roll_amt$$)) : "halfyears" == $scale$$70$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 5 - ($date$$16$$.getMonth() + 11) % 6, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + $roll_amt$$)) : "years" == $scale$$70$$ ? ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1)) : "twoyears" == $scale$$70$$ && ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1))
  }
  return $_adjustedDate$$
};
D.$DvtTimeComponentCalendar$$.prototype.$getNextDate$ = function $$DvtTimeComponentCalendar$$$$$getNextDate$$($date$$17$$, $scale$$71$$) {
  var $_nextDate$$ = new window.Date($date$$17$$.getTime());
  "seconds" == $scale$$71$$ ? $_nextDate$$.setSeconds($date$$17$$.getSeconds() + 1) : "minutes" == $scale$$71$$ ? $_nextDate$$.setMinutes($date$$17$$.getMinutes() + 1) : "hours" == $scale$$71$$ ? $_nextDate$$.setHours($date$$17$$.getHours() + 1) : "days" == $scale$$71$$ ? $_nextDate$$.setDate($date$$17$$.getDate() + 1) : "weeks" == $scale$$71$$ ? $_nextDate$$.setDate($date$$17$$.getDate() + 7) : "months" == $scale$$71$$ ? $_nextDate$$.setMonth($date$$17$$.getMonth() + 1) : "quarters" == $scale$$71$$ ? 
  $_nextDate$$.setMonth($date$$17$$.getMonth() + 3) : "halfyears" == $scale$$71$$ ? $_nextDate$$.setMonth($date$$17$$.getMonth() + 6) : "years" == $scale$$71$$ ? $_nextDate$$.setFullYear($date$$17$$.getFullYear() + 1) : "twoyears" == $scale$$71$$ ? $_nextDate$$.setFullYear($date$$17$$.getFullYear() + 2) : $_nextDate$$.setYear($date$$17$$.getYear() + 1);
  return $_nextDate$$
};
D.$DvtTimeComponentParser$$ = function $$DvtTimeComponentParser$$$($view$$65$$) {
  this.Init($view$$65$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentParser$$, D.$DvtObj$$, "DvtTimeComponentParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeComponentParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($view$$66$$) {
  this.$_view$ = $view$$66$$;
  this.$_calendar$ = new D.$DvtTimeComponentCalendar$$
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$273$$) {
  this.$_startTime$ = new window.Date($options$$273$$.start);
  this.$_endTime$ = new window.Date($options$$273$$.end);
  var $ret$$97$$ = this.$ParseRootAttributes$();
  $ret$$97$$.$inlineStyle$ = $options$$273$$.style;
  return $ret$$97$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$() {
  var $ret$$98$$ = {};
  $ret$$98$$.$origStart$ = this.$_startTime$;
  $ret$$98$$.$origEnd$ = this.$_endTime$;
  $ret$$98$$.orientation = "horizontal";
  return $ret$$98$$
};
D.$JSCompiler_prototypeAlias$$.getDate = function $$JSCompiler_prototypeAlias$$$getDate$($date$$18$$) {
  return $date$$18$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $date$$18$$.getTime ? $date$$18$$.getTime() : (0,window.isNaN)($date$$18$$) ? (new window.Date($date$$18$$)).getTime() + 0 : $date$$18$$
};
D.$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$19$$, $scale$$72$$) {
  return this.$_calendar$.$adjustDate$($date$$19$$, $scale$$72$$)
};
D.$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($date$$20$$, $scale$$73$$) {
  return this.$_calendar$.$getNextDate$($date$$20$$, $scale$$73$$)
};
D.$DvtTimelineKeyboardHandler$$ = function $$DvtTimelineKeyboardHandler$$$($manager$$30$$) {
  this.Init($manager$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtTimelineKeyboardHandler");
D.$DvtTimelineKeyboardHandler$$.prototype.Init = function $$DvtTimelineKeyboardHandler$$$$Init$($manager$$31$$) {
  D.$DvtTimelineKeyboardHandler$$.$superclass$.Init.call(this, $manager$$31$$)
};
D.$DvtTimelineKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isSelectionEvent$$($event$$810$$) {
  return this.$isNavigationEvent$($event$$810$$) && !$event$$810$$.ctrlKey
};
D.$DvtTimelineKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isMultiSelectEvent$$($event$$811$$) {
  return 32 == $event$$811$$.keyCode && $event$$811$$.ctrlKey
};
D.$DvtTimelineKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtTimelineKeyboardHandler$$$$$processKeyDown$$($event$$812$$) {
  var $keyCode$$52$$ = $event$$812$$.keyCode;
  (0,D.$DvtKeyboardEvent$isEquals$$)($event$$812$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$812$$) ? this.$_eventManager$.$zoomBy$(1 / 1.5) : (0,D.$DvtKeyboardEvent$isMinus$$)($event$$812$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$812$$) ? this.$_eventManager$.$zoomBy$(1.5) : 33 == $keyCode$$52$$ ? ($event$$812$$.shiftKey ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$812$$)) : 34 == $keyCode$$52$$ && 
  ($event$$812$$.shiftKey ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$812$$));
  return D.$DvtTimelineKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$812$$)
};
D.$DvtTimelineKeyboardHandler$getNextNavigable$$ = function $$DvtTimelineKeyboardHandler$getNextNavigable$$$($currentNavigable$$16$$, $event$$813$$, $navigableItems$$5$$) {
  var $isVertical$$3_series$$29$$ = $currentNavigable$$16$$.$getSeries$(), $seriesIndex$$116$$ = $currentNavigable$$16$$.$getSeriesIndex$(), $isRTL$$43$$ = (0,D.$DvtAgent$isRightToLeft$$)($isVertical$$3_series$$29$$.$getCtx$()), $isVertical$$3_series$$29$$ = $isVertical$$3_series$$29$$.$isVertical$(), $isDualSeries$$ = 1 < $navigableItems$$5$$.length;
  if(!$isRTL$$43$$ && 39 == $event$$813$$.keyCode || $isRTL$$43$$ && 37 == $event$$813$$.keyCode) {
    if($isVertical$$3_series$$29$$) {
      if($isDualSeries$$ && 1 != $seriesIndex$$116$$) {
        return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[1])
      }
    }else {
      return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    if(!$isRTL$$43$$ && 37 == $event$$813$$.keyCode || $isRTL$$43$$ && 39 == $event$$813$$.keyCode) {
      if($isVertical$$3_series$$29$$) {
        if($isDualSeries$$ && 0 != $seriesIndex$$116$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[0])
        }
      }else {
        return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_FALSE$$)
      }
    }else {
      if(40 == $event$$813$$.keyCode) {
        if($isVertical$$3_series$$29$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_TRUE$$)
        }
        if($isDualSeries$$ && 1 != $seriesIndex$$116$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[1])
        }
      }else {
        if(38 == $event$$813$$.keyCode) {
          if($isVertical$$3_series$$29$$) {
            return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_FALSE$$)
          }
          if($isDualSeries$$ && 0 != $seriesIndex$$116$$) {
            return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$16$$, $navigableItems$$5$$[0])
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineKeyboardHandler$getNextItem$$ = function $$DvtTimelineKeyboardHandler$getNextItem$$$($item$$56_nextIndex$$5$$, $navigableItems$$6$$, $isNext$$) {
  $item$$56_nextIndex$$5$$ = $navigableItems$$6$$.indexOf($item$$56_nextIndex$$5$$) + ($isNext$$ ? 1 : -1);
  return 0 <= $item$$56_nextIndex$$5$$ && $item$$56_nextIndex$$5$$ < $navigableItems$$6$$.length ? $navigableItems$$6$$[$item$$56_nextIndex$$5$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineKeyboardHandler$getClosestItem$$ = function $$DvtTimelineKeyboardHandler$getClosestItem$$$($item$$57$$, $navigableItems$$7$$) {
  if(0 < $navigableItems$$7$$.length) {
    for(var $closest$$ = $navigableItems$$7$$[0], $itemLoc$$ = $item$$57$$.$_loc$, $dist$$2$$ = window.Math.abs($itemLoc$$ - $closest$$.$_loc$), $i$$856$$ = 1;$i$$856$$ < $navigableItems$$7$$.length;$i$$856$$++) {
      var $testDist$$ = window.Math.abs($itemLoc$$ - $navigableItems$$7$$[$i$$856$$].$_loc$);
      $testDist$$ < $dist$$2$$ && ($dist$$2$$ = $testDist$$, $closest$$ = $navigableItems$$7$$[$i$$856$$])
    }
    return $closest$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineEventManager$$ = function $$DvtTimelineEventManager$$$($timeline$$2$$) {
  this.Init($timeline$$2$$.$getCtx$(), $timeline$$2$$.$processEvent$, $timeline$$2$$);
  this.$_timeline$ = $timeline$$2$$;
  this.$_isPinchZoom$ = this.$_isDragPanning$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineEventManager$$, D.$DvtEventManager$$, "DvtTimelineEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$100_stage$$21$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$100_stage$$21$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_timeline$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$100_stage$$21$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$100_stage$$21$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isPlatformIE$$)() && ($displayable$$100_stage$$21$$ = this.$getCtx$().$_stage$, $displayable$$100_stage$$21$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, 
  D.$JSCompiler_alias_FALSE$$, this), $displayable$$100_stage$$21$$.$addEvtListener$("mouseleave", this.$OnMouseLeave$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$101_stage$$22$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$101_stage$$22$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$101_stage$$22$$.$removeEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$101_stage$$22$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isPlatformIE$$)() && ($displayable$$101_stage$$22$$ = this.$getCtx$().$_stage$, $displayable$$101_stage$$22$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, 
  D.$JSCompiler_alias_FALSE$$, this), $displayable$$101_stage$$22$$.$removeEvtListener$("mouseleave", this.$OnMouseLeave$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnKeyDown$ = function $$JSCompiler_prototypeAlias$$$$OnKeyDown$$($event$$789$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnKeyDown$.call(this, $event$$789$$);
  this.$_timeline$.$HandleKeyDown$($event$$789$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$790$$) {
  this.$_isDragPanning$ || (D.$DvtTimelineEventManager$$.$superclass$.$OnClick$.call(this, $event$$790$$), (0,D.$JSCompiler_StaticMethods_handleShapeClick$$)(this.$_timeline$, $event$$790$$))
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOver$$($event$$791$$) {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $event$$791$$);
  !(0,D.$DvtAgent$isPlatformIE$$)() && !this.$isMouseOver$ && (this.$isMouseOver$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this.$_timeline$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseEnter$ = function $$JSCompiler_prototypeAlias$$$$OnMouseEnter$$() {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  this.$isMouseOver$ || (this.$isMouseOver$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this.$_timeline$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseLeave$ = function $$JSCompiler_prototypeAlias$$$$OnMouseLeave$$() {
  this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
  this.$_mouseOutTimer$.reset();
  this.$_mouseOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOut$$($event$$794$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $event$$794$$);
  (0,D.$DvtAgent$isPlatformIE$$)() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$_onMouseOutTimerEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseOutTimerEnd$$() {
  this.$isMouseOver$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseDown$$($event$$795$$) {
  this.$_isDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseDown$.call(this, $event$$795$$);
  this.$_timeline$.$HandleMouseDown$($event$$795$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($compLoc$$inline_8930_event$$796$$) {
  var $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$ = this.$_timeline$;
  (0,D.$DvtEventManager$consumeEvent$$)($compLoc$$inline_8930_event$$796$$);
  var $wheelDelta$$inline_8928$$ = $compLoc$$inline_8930_event$$796$$.wheelDelta;
  if($wheelDelta$$inline_8928$$) {
    var $compPagePos$$inline_8929_time$$inline_8931$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$.$getCtx$());
    $compLoc$$inline_8930_event$$796$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$.$_isVertical$ ? $compLoc$$inline_8930_event$$796$$.pageY - $compPagePos$$inline_8929_time$$inline_8931$$.y : $compLoc$$inline_8930_event$$796$$.pageX - $compPagePos$$inline_8929_time$$inline_8931$$.x;
    $compPagePos$$inline_8929_time$$inline_8931$$ = ($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$.$_end$ - $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$.$_start$) / $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$.$_contentLength$ * $compLoc$$inline_8930_event$$796$$ + $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$.$_viewStartTime$;
    (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$, $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8926$$.$_contentLength$ * (0.02 * $wheelDelta$$inline_8928$$ + 1), $compPagePos$$inline_8929_time$$inline_8931$$, $compLoc$$inline_8930_event$$796$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnTouchStartBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchStartBubble$$($event$$797$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnTouchStartBubble$.call(this, $event$$797$$);
  this.$_timeline$.$HandleTouchStart$($event$$797$$);
  this.$_timeline$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus()
};
D.$JSCompiler_prototypeAlias$$.$OnTouchEndBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchEndBubble$$($event$$798$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnTouchEndBubble$.call(this, $event$$798$$);
  this.$_timeline$.$HandleTouchEnd$($event$$798$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$799$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$799$$) : this.$_onMouseDragStart$($event$$799$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$800$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$800$$) : this.$_onMouseDragMove$($event$$800$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$801$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$801$$) : this.$_onMouseDragEnd$($event$$801$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$15$$, $pageY$$15$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$15$$ - this.$_stageAbsolutePosition$.x, $pageY$$15$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$802_relPos$$66$$) {
  return 2 != $event$$802_relPos$$66$$.button ? ($event$$802_relPos$$66$$ = this.$_getRelativePosition$($event$$802_relPos$$66$$.pageX, $event$$802_relPos$$66$$.pageY), this.$_timeline$.$beginDragPan$($event$$802_relPos$$66$$.x, $event$$802_relPos$$66$$.y), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$803_relPos$$67$$) {
  $event$$803_relPos$$67$$ = this.$_getRelativePosition$($event$$803_relPos$$67$$.pageX, $event$$803_relPos$$67$$.pageY);
  this.$_timeline$.$contDragPan$($event$$803_relPos$$67$$.x, $event$$803_relPos$$67$$.y) && (this.$_isDragPanning$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$() {
  this.$_timeline$.$endDragPan$();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$805_relPos$$68$$) {
  var $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$ = $event$$805_relPos$$68$$.touches;
  if(1 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.length) {
    return $event$$805_relPos$$68$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$[0].pageY), this.$_timeline$.$beginDragPan$($event$$805_relPos$$68$$.x, $event$$805_relPos$$68$$.y), D.$JSCompiler_alias_TRUE$$
  }
  if(2 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.length) {
    this.$_timeline$.$endDragPan$();
    this.$_isPinchZoom$ = D.$JSCompiler_alias_TRUE$$;
    var $relPos1$$4_y1$$inline_8935$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$[0].pageY), $relPos2$$4_y2$$inline_8937$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$[1].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$[1].pageY), $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$ = 
    this.$_timeline$, $x1$$inline_8934$$ = $relPos1$$4_y1$$inline_8935$$.x, $relPos1$$4_y1$$inline_8935$$ = $relPos1$$4_y1$$inline_8935$$.y, $x2$$inline_8936$$ = $relPos2$$4_y2$$inline_8937$$.x, $relPos2$$4_y2$$inline_8937$$ = $relPos2$$4_y2$$inline_8937$$.y;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_initialPinchZoomLoc$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_isVertical$ ? window.Math.sqrt(($relPos1$$4_y1$$inline_8935$$ - $relPos2$$4_y2$$inline_8937$$) * ($relPos1$$4_y1$$inline_8935$$ - $relPos2$$4_y2$$inline_8937$$)) + ($relPos1$$4_y1$$inline_8935$$ < $relPos2$$4_y2$$inline_8937$$ ? $relPos1$$4_y1$$inline_8935$$ : $relPos2$$4_y2$$inline_8937$$) : window.Math.sqrt(($x1$$inline_8934$$ - 
    $x2$$inline_8936$$) * ($x1$$inline_8934$$ - $x2$$inline_8936$$)) + ($x1$$inline_8934$$ < $x2$$inline_8936$$ ? $x1$$inline_8934$$ : $x2$$inline_8936$$);
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_initialPinchZoomTime$ = ($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_end$ - $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_start$) / $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_contentLength$ * $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_initialPinchZoomLoc$ + $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_initialPinchZoomDist$ = window.Math.sqrt(($x1$$inline_8934$$ - $x2$$inline_8936$$) * ($x1$$inline_8934$$ - $x2$$inline_8936$$) + ($relPos1$$4_y1$$inline_8935$$ - $relPos2$$4_y2$$inline_8937$$) * ($relPos1$$4_y1$$inline_8935$$ - $relPos2$$4_y2$$inline_8937$$));
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_initialPinchZoomLength$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8933_touches$$16$$.$_contentLength$;
    (0,D.$DvtEventManager$consumeEvent$$)($event$$805_relPos$$68$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$806$$) {
  var $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$ = $event$$806$$.touches;
  if(1 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.length) {
    $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$[0].pageY), this.$_timeline$.$contDragPan$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.x, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.y), 
    $event$$806$$.preventDefault()
  }else {
    if(2 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.length) {
      var $relPos1$$5_y1$$inline_8941$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$[0].pageY), $relPos2$$5_y2$$inline_8943$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$[1].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$[1].pageY), 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$ = this.$_timeline$, $currPinchZoomDist$$inline_8944_x1$$inline_8940$$ = $relPos1$$5_y1$$inline_8941$$.x, $relPos1$$5_y1$$inline_8941$$ = $relPos1$$5_y1$$inline_8941$$.y, $x2$$inline_8942$$ = $relPos2$$5_y2$$inline_8943$$.x, $relPos2$$5_y2$$inline_8943$$ = $relPos2$$5_y2$$inline_8943$$.y, $currPinchZoomDist$$inline_8944_x1$$inline_8940$$ = window.Math.sqrt(($currPinchZoomDist$$inline_8944_x1$$inline_8940$$ - $x2$$inline_8942$$) * 
      ($currPinchZoomDist$$inline_8944_x1$$inline_8940$$ - $x2$$inline_8942$$) + ($relPos1$$5_y1$$inline_8941$$ - $relPos2$$5_y2$$inline_8943$$) * ($relPos1$$5_y1$$inline_8941$$ - $relPos2$$5_y2$$inline_8943$$));
      $currPinchZoomDist$$inline_8944_x1$$inline_8940$$ != $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.$_initialPinchZoomDist$ && ($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.$_triggerViewportChange$ = D.$JSCompiler_alias_TRUE$$);
      (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$, $currPinchZoomDist$$inline_8944_x1$$inline_8940$$ / $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.$_initialPinchZoomDist$ * $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.$_initialPinchZoomLength$, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.$_initialPinchZoomTime$, 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8939_relPos$$69_touches$$17$$.$_initialPinchZoomLoc$, D.$JSCompiler_alias_FALSE$$);
      $event$$806$$.preventDefault()
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$807$$) {
  if(this.$_isPinchZoom$) {
    this.$_isPinchZoom$ = D.$JSCompiler_alias_FALSE$$;
    var $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$ = this.$_timeline$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_initialPinchZoomDist$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_initialPinchZoomLoc$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_initialPinchZoomLength$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_initialPinchZoomTime$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_triggerViewportChange$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8946$$.$_scale$)))
  }else {
    this.$_timeline$.$endDragPan$()
  }
  $event$$807$$.preventDefault();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$14$$) {
  this.$_timeline$.$zoomBy$($dz$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$33$$, $dy$$36$$) {
  var $deltaX$$27$$ = $dx$$33$$ * this.$_timeline$.$_canvasLength$ * ((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? -1 : 1), $deltaY$$30$$ = $dy$$36$$ * this.$_timeline$.$_seriesSize$;
  0 != $deltaX$$27$$ && (this.$_timeline$.$_triggerViewportChange$ = D.$JSCompiler_alias_TRUE$$);
  var $focusObj$$4$$ = this.$getFocus$();
  $focusObj$$4$$ && (this.$_timeline$.$_dragPanSeries$ = $focusObj$$4$$.$_series$);
  this.$_timeline$.$panBy$($deltaX$$27$$, $deltaY$$30$$);
  (0,D.$JSCompiler_StaticMethods_endPan$$)(this.$_timeline$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  this.$_timeline$.$zoomBy$(1 / 1.5)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  this.$_timeline$.$zoomBy$(1.5)
};
D.$DvtTimeline$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtTimeline", D.$DvtTimeline$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimeline$$, D.$DvtTimeComponent$$, "DvtTimeline");
D.$DvtTimeline$$.newInstance = function $$DvtTimeline$$$newInstance$($context$$614$$, $callback$$174$$, $callbackObj$$121$$) {
  var $timeline$$ = new D.$DvtTimeline$$;
  $timeline$$.Init($context$$614$$, $callback$$174$$, $callbackObj$$121$$);
  return $timeline$$
};
D.$DvtTimeline$$.prototype.Init = function $$DvtTimeline$$$$Init$($context$$615$$, $callback$$175$$, $callbackObj$$122$$) {
  D.$DvtTimeline$$.$superclass$.Init.call(this, $context$$615$$, $callback$$175$$, $callbackObj$$122$$);
  this.$EventManager$ = new D.$DvtTimelineEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : (this.$_keyboardHandler$ = new D.$DvtTimelineKeyboardHandler$$(this.$EventManager$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$_keyboardHandler$))
};
D.$DvtTimeline$$.prototype.$Parse$ = function $$DvtTimeline$$$$$Parse$$($options$$274$$) {
  this.$_parser$ = new D.$DvtTimelineParser$$(this);
  return this.$_parser$.parse($options$$274$$)
};
D.$DvtTimeline$$.prototype.$_applyParsedProperties$ = function $$DvtTimeline$$$$$_applyParsedProperties$$($props$$8$$) {
  var $orientation$$3$$ = $props$$8$$.orientation;
  this.$_isVertical$ = $orientation$$3$$ && "vertical" == $orientation$$3$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_hasOverview$ = $props$$8$$.$hasOverview$;
  this.$_viewStartTime$ = $props$$8$$.$viewStart$;
  this.$_viewEndTime$ = $props$$8$$.$viewEnd$;
  this.$_selectionMode$ = $props$$8$$.$selectionMode$;
  this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == this.$_selectionMode$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  this.$_axisInlineStyle$ = $props$$8$$.$axisStyle$;
  this.$_shortDesc$ = $props$$8$$.$shortDesc$;
  this.$_id$ = $props$$8$$.id;
  this.$_referenceObjects$ = $props$$8$$.$referenceObjects$;
  this.$_zoomOrder$ = $props$$8$$.$zoomOrder$;
  this.$_seriesScale$ = $props$$8$$.$seriesScale$;
  this.$_dateFormatStrings$ = {$dayNames$:[(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_SUNDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_MONDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_TUESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_WEDNESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "DAY_SHORT_THURSDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_FRIDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_SATURDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SUNDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_MONDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "DAY_TUESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_WEDNESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_THURSDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_FRIDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SATURDAY", D.$JSCompiler_alias_NULL$$)], $monthNames$:[(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SEPTEMBER", 
  D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_DECEMBER", D.$JSCompiler_alias_NULL$$)]};
  this.$_seriesScale$ && (this.$_seriesConverter$ = $props$$8$$.$seriesConverter$, this.$_seriesTimeAxis$ = new D.$DvtTimeComponentAxis$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_isVertical$), this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$_converter$ = this.$_seriesConverter$, this.$_isVertical$ ? (this.$_seriesTimeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = 
  this.$_resources$.converterVert) : (this.$_seriesTimeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.$LONG$, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converter));
  this.$_defaultInversions$ = [D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$];
  D.$DvtTimeline$$.$superclass$.$_applyParsedProperties$.call(this, $props$$8$$)
};
D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$ = function $$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$$($JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$, $seriesCount$$25$$) {
  return!$JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_hasOverview$ && 1 == $seriesCount$$25$$ ? $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() - $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getBorderWidth$() : $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$()
};
D.$DvtTimeline$$.prototype.select = function $$DvtTimeline$$$$select$($selection$$44$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$44$$);
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_applyInitialSelections$$)(this)
};
D.$DvtTimeline$$.prototype.select = D.$DvtTimeline$$.prototype.select;
D.$DvtTimeline$$.prototype.$render$ = function $$DvtTimeline$$$$$render$$($options$$275$$, $width$$161$$, $height$$145$$) {
  $options$$275$$ && this.$SetOptions$($options$$275$$);
  this.$_overviewCanvas$ = this.$_overview$ = this.$_innerCanvas$ = this.$_canvas$ = this.$_axis$ = this.$_series$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$ && (this.$_resources$ = this.$Options$._resources, this.$_resources$ == D.$JSCompiler_alias_NULL$$ && (this.$_resources$ = []));
  this.$Width$ = $width$$161$$;
  this.$Height$ = $height$$145$$;
  if($options$$275$$) {
    var $props$$9$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($props$$9$$)
  }else {
    this.$applyStyleValues$()
  }
  this.$_fetchStartPos$ = 0;
  this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$145$$ : $width$$161$$;
  this.$removeChildren$();
  this.$Options$.styleDefaults && (this.$_axisStyleDefaults$ = this.$Options$.styleDefaults.minorAxis, this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_itemStyleDefaults$ = this.$Options$.styleDefaults.item, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series, this.$_referenceObjectStyleDefaults$ = this.$Options$.styleDefaults.referenceObject, this.$_overviewStyleDefaults$ = this.$Options$.styleDefaults.overview);
  this.$_setLength$ = D.$JSCompiler_alias_TRUE$$;
  this.$_startPos$ = 0;
  this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
  if(this.$_viewStartTime$ && this.$_viewEndTime$) {
    var $viewTime$$inline_8713$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    if(0 < $viewTime$$inline_8713$$) {
      this.$_setLength$ = D.$JSCompiler_alias_FALSE$$;
      var $widthFactor$$inline_8714$$ = this.$_canvasLength$ / $viewTime$$inline_8713$$;
      (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $widthFactor$$inline_8714$$ * (this.$_end$ - this.$_start$));
      this.$_startPos$ = $widthFactor$$inline_8714$$ * (this.$_start$ - this.$_viewStartTime$);
      this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)
    }
  }
  if(this.$_scale$) {
    var $startDate$$inline_8717$$ = this.$_start$, $endDate$$inline_8718$$ = this.$_end$, $context$$inline_8719$$ = this.$getCtx$(), $axisLabelStyle$$inline_8720$$ = new D.$DvtCSSStyle$$("color:#333333;font-size:12px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
    this.$_axisStyleDefaults$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($axisLabelStyle$$inline_8720$$, this.$_axisStyleDefaults$.labelStyle);
    this.$_timeAxis$ = new D.$DvtTimeComponentAxis$$($context$$inline_8719$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_isVertical$, this.$_zoomOrder$);
    this.$_timeAxis$.$_converter$ = this.$_converter$;
    this.$_timeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$);
    this.$_dates$ = [];
    this.$_labels$ = [];
    this.$_zoomLevelLengths$ = [];
    if(this.$_isVertical$) {
      var $defaultLength$$inline_8721$$ = D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
      this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converterVert
    }else {
      $defaultLength$$inline_8721$$ = D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$, this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converter
    }
    for(var $i$$inline_8722$$ = 0;$i$$inline_8722$$ < this.$_timeAxis$.$_zoomOrder$.length;$i$$inline_8722$$++) {
      var $scale$$inline_8723$$ = this.$_timeAxis$.$_zoomOrder$[$i$$inline_8722$$];
      this.$_timeAxis$.$setScale$($scale$$inline_8723$$);
      var $axis$$inline_8724$$ = new D.$DvtRect$$($context$$inline_8719$$, 0, 0, 0, 0, "tempAxis"), $minLength$$inline_8725$$ = window.Infinity, $maxSize$$inline_8726$$ = 0, $dates$$inline_8727$$ = [], $labels$$inline_8728$$ = [], $currentDate$$inline_8729$$ = this.$_timeAxis$.$adjustDate$($startDate$$inline_8717$$).getTime();
      for($dates$$inline_8727$$.push($currentDate$$inline_8729$$);$currentDate$$inline_8729$$ < $endDate$$inline_8718$$;) {
        var $labelText$$inline_8730$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)(this.$_timeAxis$, this.$_timeAxis$.$adjustDate$($currentDate$$inline_8729$$)), $label$$inline_8731$$ = new D.$DvtOutputText$$($context$$inline_8719$$, $labelText$$inline_8730$$, 0, 0, "s_label" + $currentDate$$inline_8729$$);
        $label$$inline_8731$$.$setCSSStyle$($axisLabelStyle$$inline_8720$$);
        $label$$inline_8731$$.time = $currentDate$$inline_8729$$;
        $labels$$inline_8728$$.push($label$$inline_8731$$);
        var $nextDate$$inline_8732$$ = this.$_timeAxis$.$getNextDate$(this.$_timeAxis$.$adjustDate$($currentDate$$inline_8729$$)).getTime();
        $axis$$inline_8724$$.$addChild$($label$$inline_8731$$);
        var $dim$$inline_8733$$ = $label$$inline_8731$$.$getDimensions$();
        $axis$$inline_8724$$.removeChild($label$$inline_8731$$);
        if(this.$_isVertical$) {
          var $lengthDim$$inline_8734$$ = $dim$$inline_8733$$.$h$, $sizeDim$$inline_8735$$ = $dim$$inline_8733$$.$w$
        }else {
          $lengthDim$$inline_8734$$ = $dim$$inline_8733$$.$w$, $sizeDim$$inline_8735$$ = $dim$$inline_8733$$.$h$
        }
        var $labelLength$$inline_8736$$ = window.Math.max($defaultLength$$inline_8721$$, $lengthDim$$inline_8734$$ + 2 * D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$), $lengthFactor$$inline_8737$$ = ($nextDate$$inline_8732$$ - $currentDate$$inline_8729$$) / $labelLength$$inline_8736$$;
        $lengthFactor$$inline_8737$$ < $minLength$$inline_8725$$ && ($minLength$$inline_8725$$ = $lengthFactor$$inline_8737$$);
        $sizeDim$$inline_8735$$ > $maxSize$$inline_8726$$ && ($maxSize$$inline_8726$$ = $sizeDim$$inline_8735$$);
        $currentDate$$inline_8729$$ = $nextDate$$inline_8732$$;
        $dates$$inline_8727$$.push($currentDate$$inline_8729$$)
      }
      var $JSCompiler_StaticMethods_setContentSize$self$$inline_11571$$ = this.$_timeAxis$, $contentSize$$inline_11572$$ = $maxSize$$inline_8726$$ + 2 * D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$;
      $contentSize$$inline_11572$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_11571$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_11571$$.$_contentSize$ = $contentSize$$inline_11572$$);
      this.$_dates$.push($dates$$inline_8727$$);
      this.$_labels$.push($labels$$inline_8728$$);
      var $zoomLevelLength$$inline_8738$$ = ($endDate$$inline_8718$$ - $startDate$$inline_8717$$) / $minLength$$inline_8725$$;
      this.$_zoomLevelLengths$.push($zoomLevelLength$$inline_8738$$);
      if($scale$$inline_8723$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $i$$inline_8722$$, this.$_setLength$)) {
        if((0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $zoomLevelLength$$inline_8738$$), this.$_setLength$ = D.$JSCompiler_alias_FALSE$$, this.$_viewStartTime$ == D.$JSCompiler_alias_NULL$$) {
          if(this.$_viewEndTime$ != D.$JSCompiler_alias_NULL$$) {
            this.$_viewStartTime$ = this.$_viewEndTime$ - this.$_canvasLength$ / $zoomLevelLength$$inline_8738$$ * ($endDate$$inline_8718$$ - $startDate$$inline_8717$$);
            this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$);
            var $viewTime$$inline_8739$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $widthFactor$$inline_8740$$ = this.$_canvasLength$ / $viewTime$$inline_8739$$;
            (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $widthFactor$$inline_8740$$ * (this.$_end$ - this.$_start$));
            this.$_startPos$ = $widthFactor$$inline_8740$$ * (this.$_start$ - this.$_viewStartTime$);
            this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)
          }else {
            this.$_viewStartTime$ = this.$_start$, this.$_startPos$ = 0, this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), this.$_viewEndTime$ = this.$_canvasLength$ / $zoomLevelLength$$inline_8738$$ * ($endDate$$inline_8718$$ - $startDate$$inline_8717$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$)
          }
        }else {
          this.$_viewEndTime$ = this.$_canvasLength$ / $zoomLevelLength$$inline_8738$$ * ($endDate$$inline_8718$$ - $startDate$$inline_8717$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), $viewTime$$inline_8739$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $widthFactor$$inline_8740$$ = this.$_canvasLength$ / $viewTime$$inline_8739$$, (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $widthFactor$$inline_8740$$ * (this.$_end$ - this.$_start$)), 
          this.$_startPos$ = $widthFactor$$inline_8740$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)
        }
      }
      0 == $i$$inline_8722$$ && (this.$_maxContentLength$ = $labels$$inline_8728$$.length * this.$_canvasLength$)
    }
    this.$_timeAxis$.$setScale$(this.$_scale$);
    this.$_series$ = [];
    this.$_seriesOptions$ = [];
    var $series$$inline_8743$$ = this.$Options$.series;
    if($series$$inline_8743$$) {
      for(var $seriesCount$$inline_8744$$ = window.Math.min($series$$inline_8743$$.length, 2), $i$$inline_8745$$ = 0;$i$$inline_8745$$ < $seriesCount$$inline_8744$$;$i$$inline_8745$$++) {
        var $seriesOptions$$inline_8746$$ = $series$$inline_8743$$[$i$$inline_8745$$];
        $seriesOptions$$inline_8746$$.start = this.$_start$;
        $seriesOptions$$inline_8746$$.end = this.$_end$;
        $seriesOptions$$inline_8746$$.inverted = this.$_defaultInversions$[$i$$inline_8745$$];
        $seriesOptions$$inline_8746$$.orientation = this.$Options$.orientation;
        $seriesOptions$$inline_8746$$.referenceObjects = this.$_referenceObjects$;
        $seriesOptions$$inline_8746$$.timeline = this;
        $seriesOptions$$inline_8746$$.index = $i$$inline_8745$$;
        this.$Options$.majorAxis && ($seriesOptions$$inline_8746$$.scale = this.$Options$.majorAxis.scale, $seriesOptions$$inline_8746$$.timeAxis = this.$_seriesTimeAxis$);
        this.$Options$.styleDefaults && ($seriesOptions$$inline_8746$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $seriesOptions$$inline_8746$$.itemStyleDefaults = this.$_itemStyleDefaults$, $seriesOptions$$inline_8746$$.referenceObjectStyleDefaults = this.$_referenceObjectStyleDefaults$, $seriesOptions$$inline_8746$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$);
        this.$_seriesOptions$.push($seriesOptions$$inline_8746$$);
        var $s$$inline_8747$$ = new D.$DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this);
        this.$_series$.push($s$$inline_8747$$)
      }
    }
    (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)(this)
  }
  this.$createBackground$();
  (0,D.$JSCompiler_StaticMethods_renderScrollableCanvas$$)(this);
  this.$_innerCanvas$ = new D.$DvtContainer$$(this.$getCtx$(), "iCanvas");
  var $cp$$inline_8750$$ = new D.$DvtClipPath$$;
  this.$_isVertical$ ? ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8750$$, this.$_startX$, this.$_startY$, this.$_canvasSize$, this.$_canvasLength$), this.$_innerCanvas$.$setTranslateX$(this.$_startX$), this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$)) : ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8750$$, this.$_startX$, this.$_startY$, this.$_canvasLength$, this.$_canvasSize$), this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.$_innerCanvas$.$setTranslateY$(this.$_startY$));
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_canvas$, $cp$$inline_8750$$);
  this.$_canvas$.$addChild$(this.$_innerCanvas$);
  var $hasValidStartAndEnd$$inline_8753$$ = this.$_start$ && this.$_end$ && this.$_end$ > this.$_start$, $hasValidSeries$$inline_8754$$ = this.$_series$ && 0 < this.$_series$.length, $hasValidSeriesScale$$inline_8755$$ = this.$_seriesScale$ ? -1 != D.$DvtTimeComponentAxis$$.$_VALID_SCALES$.indexOf(this.$_seriesScale$) : D.$JSCompiler_alias_TRUE$$, $hasValidViewport$$inline_8756$$ = this.$_viewStartTime$ && this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_viewStartTime$ : D.$JSCompiler_alias_TRUE$$, 
  $hasValidViewStart$$inline_8757$$ = this.$_viewStartTime$ ? this.$_viewStartTime$ >= this.$_start$ && this.$_viewStartTime$ < this.$_end$ : D.$JSCompiler_alias_TRUE$$, $hasValidViewEnd$$inline_8758$$ = this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_start$ && this.$_viewEndTime$ <= this.$_end$ : D.$JSCompiler_alias_TRUE$$;
  if(this.$_scale$ && -1 != D.$DvtTimeComponentAxis$$.$_VALID_SCALES$.indexOf(this.$_scale$) && $hasValidStartAndEnd$$inline_8753$$ && $hasValidSeries$$inline_8754$$ && $hasValidSeriesScale$$inline_8755$$ && $hasValidViewport$$inline_8756$$ && $hasValidViewStart$$inline_8757$$ && $hasValidViewEnd$$inline_8758$$) {
    if(this.$_series$) {
      var $seriesCount$$inline_8761$$ = this.$_series$.length, $axisSize$$inline_8762$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8761$$);
      if(!this.$_isVertical$ && 1 < $seriesCount$$inline_8761$$ && this.$_canvasSize$ % 2 != $axisSize$$inline_8762$$ % 2) {
        var $JSCompiler_StaticMethods_setContentSize$self$$inline_11574$$ = this.$_timeAxis$, $contentSize$$inline_11575$$ = this.$_timeAxis$.$_contentSize$ + 1;
        $contentSize$$inline_11575$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_11574$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_11574$$.$_contentSize$ = $contentSize$$inline_11575$$);
        $axisSize$$inline_8762$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8761$$)
      }
      this.$_seriesSize$ = (this.$_canvasSize$ - $axisSize$$inline_8762$$) / $seriesCount$$inline_8761$$;
      for(var $i$$inline_8763$$ = 0;$i$$inline_8763$$ < $seriesCount$$inline_8761$$;$i$$inline_8763$$++) {
        var $series$$inline_8764$$ = this.$_series$[$i$$inline_8763$$], $cp$$inline_8765$$ = new D.$DvtClipPath$$;
        if(this.$_isVertical$) {
          var $key$$inline_8766$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8763$$ - 1) : $i$$inline_8763$$;
          if(this.$isRTL$() && 1 == this.$_series$.length) {
            (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8765$$, $axisSize$$inline_8762$$, 0, this.$_seriesSize$, this.$_contentLength$);
            var $posMatrix$$inline_8767$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $axisSize$$inline_8762$$, 0)
          }else {
            (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8765$$, $key$$inline_8766$$ * (this.$_seriesSize$ + $axisSize$$inline_8762$$), 0, this.$_seriesSize$, this.$_contentLength$), $posMatrix$$inline_8767$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $key$$inline_8766$$ * (this.$_seriesSize$ + $axisSize$$inline_8762$$), 0)
          }
          var $width$$inline_8768$$ = this.$_seriesSize$, $height$$inline_8769$$ = this.$_contentLength$
        }else {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8765$$, 0, $i$$inline_8763$$ * (this.$_seriesSize$ + $axisSize$$inline_8762$$), this.$_contentLength$, this.$_seriesSize$), $posMatrix$$inline_8767$$ = new D.$DvtMatrix$$(1, 0, 0, 1, 0, $i$$inline_8763$$ * (this.$_seriesSize$ + $axisSize$$inline_8762$$)), $width$$inline_8768$$ = this.$_contentLength$, $height$$inline_8769$$ = this.$_seriesSize$
        }
        (0,D.$JSCompiler_StaticMethods_setClipPath$$)($series$$inline_8764$$, $cp$$inline_8765$$);
        $series$$inline_8764$$.$setMatrix$($posMatrix$$inline_8767$$);
        this.$_innerCanvas$.$addChild$($series$$inline_8764$$);
        $series$$inline_8764$$.$render$($width$$inline_8768$$, $height$$inline_8769$$, this.$_seriesOptions$[$i$$inline_8763$$])
      }
    }
    if(this.$_series$) {
      for(var $seriesCount$$inline_8772$$ = this.$_series$.length, $i$$inline_8773$$ = 0;$i$$inline_8773$$ < $seriesCount$$inline_8772$$;$i$$inline_8773$$++) {
        var $series$$inline_8774$$ = this.$_series$[$i$$inline_8773$$], $seriesLabel$$inline_8775$$ = $series$$inline_8774$$.$getLabel$();
        if($seriesLabel$$inline_8775$$ != D.$JSCompiler_alias_NULL$$) {
          var $seriesLabelStyle$$inline_8776$$ = $series$$inline_8774$$.$getLabelStyle$();
          this.$_seriesBackgroundOverlayStyle$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($seriesLabelStyle$$inline_8776$$, this.$_seriesBackgroundOverlayStyle$);
          var $seriesLabelElem$$inline_8777$$ = new D.$DvtOutputText$$(this.$getCtx$(), $seriesLabel$$inline_8775$$, 0, 0, "sl_s" + $i$$inline_8773$$);
          $seriesLabelElem$$inline_8777$$.$setCSSStyle$($seriesLabelStyle$$inline_8776$$);
          this.$addChild$($seriesLabelElem$$inline_8777$$);
          var $dim$$inline_8778$$ = $seriesLabelElem$$inline_8777$$.$getDimensions$();
          this.removeChild($seriesLabelElem$$inline_8777$$);
          var $width$$inline_8779$$ = window.Math.min($dim$$inline_8778$$.$w$, (this.$_isVertical$ ? this.$_seriesSize$ : this.$_canvasLength$) - -38 * ($i$$inline_8773$$ - 1) - 40), $backgroundRect$$inline_8780$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$inline_8779$$ + 4, $dim$$inline_8778$$.$h$ + 4, "slb_s" + $i$$inline_8773$$);
          $backgroundRect$$inline_8780$$.$setCSSStyle$($seriesLabelStyle$$inline_8776$$);
          (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backgroundRect$$inline_8780$$, 3);
          if(this.$_isVertical$) {
            $posX$$inline_8781$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8773$$ - 1) * (this.$_canvasSize$ - $width$$inline_8779$$ - 40) + 20 + this.$_startX$ + 38 * ($i$$inline_8773$$ - 1) : $i$$inline_8773$$ * (this.$_canvasSize$ - $width$$inline_8779$$ - 40) + 20 + this.$_startX$ + -38 * ($i$$inline_8773$$ - 1), $posY$$inline_8782$$ = this.$_startY$ + 20
          }else {
            var $posX$$inline_8781$$ = this.$isRTL$() ? this.$_canvasLength$ - $width$$inline_8779$$ - 20 - -38 * ($i$$inline_8773$$ - 1) : this.$_startX$ + 20 + -38 * ($i$$inline_8773$$ - 1), $posY$$inline_8782$$ = $i$$inline_8773$$ * (this.$_canvasSize$ - $dim$$inline_8778$$.$h$ - 40) + 20 + this.$_startY$
          }
          var $posMatrix$$inline_8783$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $posX$$inline_8781$$, $posY$$inline_8782$$);
          $seriesLabelElem$$inline_8777$$.$setMatrix$($posMatrix$$inline_8783$$);
          $posMatrix$$inline_8783$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $posX$$inline_8781$$ - 2, $posY$$inline_8782$$ - 2);
          $backgroundRect$$inline_8780$$.$setMatrix$($posMatrix$$inline_8783$$);
          this.$addChild$($backgroundRect$$inline_8780$$);
          D.$DvtTextUtils$$.$fitText$($seriesLabelElem$$inline_8777$$, $width$$inline_8779$$, window.Infinity, this)
        }
        if($series$$inline_8774$$.$_isEmpty$) {
          var $seriesEmptyText$$inline_8784$$ = $series$$inline_8774$$.$getEmptyText$();
          if($seriesEmptyText$$inline_8784$$ != D.$JSCompiler_alias_NULL$$) {
            var $seriesEmptyTextStyle$$inline_8785$$ = $series$$inline_8774$$.$_emptyTextStyle$, $seriesEmptyTextElem$$inline_8786$$ = new D.$DvtOutputText$$(this.$getCtx$(), $seriesEmptyText$$inline_8784$$, 0, 0, "et_s" + $i$$inline_8773$$);
            $seriesEmptyTextElem$$inline_8786$$.$setCSSStyle$($seriesEmptyTextStyle$$inline_8785$$);
            this.$addChild$($seriesEmptyTextElem$$inline_8786$$);
            $dim$$inline_8778$$ = $seriesEmptyTextElem$$inline_8786$$.$getDimensions$();
            this.removeChild($seriesEmptyTextElem$$inline_8786$$);
            $posMatrix$$inline_8783$$ = new D.$DvtMatrix$$(1, 0, 0, 1, (this.$_canvasLength$ - $dim$$inline_8778$$.$w$) / 2 + this.$_startX$, $i$$inline_8773$$ * (this.$_seriesSize$ + (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8772$$)) + (this.$_seriesSize$ - $dim$$inline_8778$$.$h$) / 2 + this.$_startY$);
            $seriesEmptyTextElem$$inline_8786$$.$setMatrix$($posMatrix$$inline_8783$$);
            this.$addChild$($seriesEmptyTextElem$$inline_8786$$)
          }
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_renderAxis$$)(this);
    if(this.$_hasOverview$) {
      this.$_overviewCanvas$ = new D.$DvtContainer$$(this.$getCtx$(), "oCanvas");
      var $borderWidth$$inline_8789$$ = this.$_style$.$getBorderWidth$(), $halfBorderWidth$$inline_8790$$ = $borderWidth$$inline_8789$$ / 2;
      if(this.$_isVertical$) {
        var $width$$inline_8791$$ = this.$_overviewSize$, $height$$inline_8792$$ = this.$Height$ - $borderWidth$$inline_8789$$;
        this.$isRTL$() ? this.$_overviewCanvas$.$setTranslateX$($halfBorderWidth$$inline_8790$$) : this.$_overviewCanvas$.$setTranslateX$(this.$Width$ - this.$_overviewSize$ - $halfBorderWidth$$inline_8790$$);
        this.$_overviewCanvas$.$setTranslateY$($halfBorderWidth$$inline_8790$$)
      }else {
        $width$$inline_8791$$ = this.$Width$ - $borderWidth$$inline_8789$$, $height$$inline_8792$$ = this.$_overviewSize$, this.$_overviewCanvas$.$setTranslateY$(this.$Height$ - this.$_overviewSize$ - $halfBorderWidth$$inline_8790$$), this.$_overviewCanvas$.$setTranslateX$($halfBorderWidth$$inline_8790$$)
      }
      this.$addChild$(this.$_overviewCanvas$);
      this.$_overview$ = new D.$DvtTimelineOverview$$(this.$getCtx$(), this.$HandleEvent$, this);
      this.$_overviewCanvas$.$addChild$(this.$_overview$);
      var $sizing$$inline_11578$$ = this.$_isVertical$ ? "" : '_ds\x3d"square" _dsx\x3d"1.3d" _dsy\x3d"0.9d" ', $windowBorderColor$$inline_11579$$ = this.$_overviewStyleDefaults$ && this.$_overviewStyleDefaults$.window && this.$_overviewStyleDefaults$.window.borderColor ? this.$_overviewStyleDefaults$.window.borderColor : "#4f4f4f", $JSCompiler_temp_const$$inline_11580$$ = '\x3ctimelineOverview renstart\x3d"' + this.$_viewStartTime$ + '" start\x3d"' + this.$_start$ + '" end\x3d"' + this.$_end$ + 
      '" width\x3d"' + this.$_contentLength$ + '" orn\x3d"' + (this.$_isVertical$ ? "vertical" : "horizontal") + (this.$_referenceObjects$ && 0 < this.$_referenceObjects$.length && this.$_referenceObjects$[0] ? '" ocd\x3d"' + this.$_referenceObjects$[0].getTime() : "") + '" _hbi\x3d"' + (this.$_isVertical$ ? this.$_resources$.overviewHandleVert + '" _hw\x3d"15" _hh\x3d"3"' : this.$_resources$.overviewHandleHor + '" _hw\x3d"3" _hh\x3d"15"') + ' ovp\x3d"below" selmode\x3d"' + this.$_selectionMode$ + 
      '" rtl\x3d"' + this.$isRTL$() + '" sid\x3d"ts1" _bts\x3d"none" _btc\x3d"#4f4f4f" _fc\x3d"#aadd77" ' + $sizing$$inline_11578$$ + '_do\x3d"0" _wbc\x3d"' + (this.$_overviewStyleDefaults$ && this.$_overviewStyleDefaults$.window && this.$_overviewStyleDefaults$.window.backgroundColor ? this.$_overviewStyleDefaults$.window.backgroundColor : "#ffffff") + '" _wbts\x3d"solid" _wbrs\x3d"solid" _wbbs\x3d"solid" _wbls\x3d"solid" _wbtc\x3d"' + $windowBorderColor$$inline_11579$$ + '" _wbrc\x3d"' + $windowBorderColor$$inline_11579$$ + 
      '" _wbbc\x3d"' + $windowBorderColor$$inline_11579$$ + '" _wblc\x3d"' + $windowBorderColor$$inline_11579$$ + '" _hfc\x3d"#FFFFFF" _obc\x3d"' + (this.$_overviewStyleDefaults$ && this.$_overviewStyleDefaults$.backgroundColor ? this.$_overviewStyleDefaults$.backgroundColor : "#e6ecf3") + '" _ctic\x3d"#FF591F" _tic\x3d"#BCC7D2" _tabc\x3d"#D9DFE3" _tabo\x3d"1" _bs\x3d"solid" _bc\x3d"#648BAF" _bw\x3d"1px" _bof\x3d"0px" _dbs\x3d"solid" _dbc\x3d"#648BAF" _dbw\x3d"1px" _hbs\x3d"solid" _hbc\x3d"#85bbe7" _hbw\x3d"2px" _hbof\x3d"0px" _hgc\x3d"#ebeced" _hgo\x3d"1" _hdbs\x3d"solid" _hdbc\x3d"#85bbe7" _hdbw\x3d"2px" _sbs\x3d"solid" _sbc\x3d"#000000" _sbw\x3d"2px" _sbof\x3d"0px" _sbo\x3d"1" _sdbs\x3d"solid" _sdbc\x3d"#000000" _sdbw\x3d"2px" _asbs\x3d"solid" _asbc\x3d"#000000" _asbw\x3d"2px" _asbof\x3d"0px" _asbo\x3d"1" _asgc\x3d"#e4f0fa" _asgo\x3d"1" _asdbs\x3d"solid" _asdbc\x3d"#000000" _asdbw\x3d"2px" _aoc\x3d"off"\x3e', 
      $xml$$inline_11581$$ = "\x3cticks\x3e";
      if(this.$_seriesTimeAxis$) {
        for(var $start$$inline_11582$$ = this.$_start$, $end$$inline_11583$$ = this.$_end$, $length$$inline_11584$$ = this.$_isVertical$ ? this.$Height$ : this.$Width$, $startDate$$inline_11585$$ = D.$DvtTimeUtils$$.$getPositionDate$($start$$inline_11582$$, $end$$inline_11583$$, this.$_fetchStartPos$, $length$$inline_11584$$), $adjustedStartDate$$inline_11586$$ = this.$_seriesTimeAxis$.$adjustDate$($startDate$$inline_11585$$), $current$$inline_11587$$ = new window.Date($adjustedStartDate$$inline_11586$$), 
        $currentPos$$inline_11588$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$inline_11582$$, $end$$inline_11583$$, $adjustedStartDate$$inline_11586$$, $length$$inline_11584$$);$currentPos$$inline_11588$$ < this.$_fetchEndPos$;) {
          var $label$$inline_11589$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)(this.$_seriesTimeAxis$, this.$_seriesTimeAxis$.$adjustDate$($current$$inline_11587$$)), $next$$inline_11590$$ = this.$_seriesTimeAxis$.$getNextDate$(this.$_seriesTimeAxis$.$adjustDate$($current$$inline_11587$$)), $next_time_pos$$inline_11591$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$inline_11582$$, $end$$inline_11583$$, $next$$inline_11590$$, $length$$inline_11584$$), $xml$$inline_11581$$ = $xml$$inline_11581$$ + 
          ('\x3ctick time\x3d"' + $current$$inline_11587$$.getTime() + '" label\x3d"' + $label$$inline_11589$$ + '"/\x3e'), $current$$inline_11587$$ = $next$$inline_11590$$, $currentPos$$inline_11588$$ = $next_time_pos$$inline_11591$$
        }
      }
      var $xml$$inline_11581$$ = $xml$$inline_11581$$ + "\x3c/ticks\x3e", $JSCompiler_temp_const$$inline_11592$$ = $JSCompiler_temp_const$$inline_11580$$ + $xml$$inline_11581$$, $JSCompiler_inline_result$$inline_11593$$;
      if(this.$_series$) {
        for(var $overviewMarkers$$inline_11594$$ = "\x3cmarkers\x3e", $seriesCount$$inline_11595$$ = this.$_series$.length, $i$$inline_11596$$ = 0;$i$$inline_11596$$ < $seriesCount$$inline_11595$$;$i$$inline_11596$$++) {
          for(var $items$$inline_11597$$ = this.$_series$[$i$$inline_11596$$].$_items$, $j$$inline_11598$$ = 0;$j$$inline_11598$$ < $items$$inline_11597$$.length;$j$$inline_11598$$++) {
            var $item$$inline_11599$$ = $items$$inline_11597$$[$j$$inline_11598$$], $overviewMarkers$$inline_11594$$ = $overviewMarkers$$inline_11594$$ + ('\x3cti rk\x3d"' + $j$$inline_11598$$), $overviewMarkers$$inline_11594$$ = $overviewMarkers$$inline_11594$$ + ('" tid\x3d"' + $item$$inline_11599$$.getId()), $overviewMarkers$$inline_11594$$ = $overviewMarkers$$inline_11594$$ + ('" t\x3d"' + $item$$inline_11599$$.$_startTime$), $endTime$$inline_11600$$ = $item$$inline_11599$$.$_endTime$;
            if($endTime$$inline_11600$$) {
              var $overviewMarkers$$inline_11594$$ = $overviewMarkers$$inline_11594$$ + ('" et\x3d"' + $endTime$$inline_11600$$), $durationFillColor$$inline_11601$$ = $item$$inline_11599$$.$_durationFillColor$;
              $durationFillColor$$inline_11601$$ && ($overviewMarkers$$inline_11594$$ += '" dfc\x3d"' + $durationFillColor$$inline_11601$$)
            }
            $overviewMarkers$$inline_11594$$ += '" _sd\x3d"true"/\x3e'
          }
        }
        $JSCompiler_inline_result$$inline_11593$$ = $overviewMarkers$$inline_11594$$ += "\x3c/markers\x3e"
      }else {
        $JSCompiler_inline_result$$inline_11593$$ = D.$JSCompiler_alias_VOID$$
      }
      this.$_overview$.$render$($JSCompiler_temp_const$$inline_11592$$ + $JSCompiler_inline_result$$inline_11593$$ + "\x3c/timelineOverview\x3e", $width$$inline_8791$$, $height$$inline_8792$$)
    }
    if(this.$_keyboardHandler$) {
      for(var $i$$840$$ = 0;$i$$840$$ < this.$_series$.length;$i$$840$$++) {
        var $series$$19$$ = this.$_series$[$i$$840$$];
        if($series$$19$$.$_items$ && 0 < $series$$19$$.$_items$.length) {
          (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $series$$19$$.$_items$[0]);
          break
        }
      }
    }
    if(this.$_series$) {
      var $seriesCount$$inline_8796$$ = this.$_series$.length, $axisSize$$inline_8797$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8796$$);
      this.$_scrollHotspots$ = [];
      for(var $i$$inline_8798$$ = 0;$i$$inline_8798$$ < $seriesCount$$inline_8796$$;$i$$inline_8798$$++) {
        var $scrollHotspots$$inline_8799$$ = new D.$DvtContainer$$(this.$getCtx$(), "hotspots_s" + $i$$inline_8798$$);
        this.$addChild$($scrollHotspots$$inline_8799$$);
        if(this.$_isVertical$) {
          var $key$$inline_8800$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8798$$ - 1) : $i$$inline_8798$$, $forwardX$$inline_8802$$ = $backX$$inline_8801$$ = this.$_startX$ + $key$$inline_8800$$ * (this.$_seriesSize$ + $axisSize$$inline_8797$$) + (this.$_seriesSize$ - 28) / 2, $backY$$inline_8803$$ = this.$_startY$ + 3, $forwardY$$inline_8804$$ = this.$_startY$ + this.$_canvasLength$ - 28 - 3, $arrowForwardX$$inline_8806$$ = $arrowBackX$$inline_8805$$ = $backX$$inline_8801$$ + 7, $arrowBackY$$inline_8807$$ = 
          $backY$$inline_8803$$ + 7, $arrowForwardY$$inline_8808$$ = $forwardY$$inline_8804$$ + 7, $arrowBackResource$$inline_8809$$ = this.$_resources$.scrollUp, $arrowForwardResource$$inline_8810$$ = this.$_resources$.scrollDown
        }else {
          var $backX$$inline_8801$$ = this.$_startX$ + 3, $forwardX$$inline_8802$$ = this.$_startX$ + this.$_canvasLength$ - 28 - 3, $backY$$inline_8803$$ = this.$_startY$ + $i$$inline_8798$$ * (this.$_seriesSize$ + $axisSize$$inline_8797$$) + (this.$_seriesSize$ - 28) / 2, $forwardY$$inline_8804$$ = $backY$$inline_8803$$, $arrowBackX$$inline_8805$$ = $backX$$inline_8801$$ + 7, $arrowForwardX$$inline_8806$$ = $forwardX$$inline_8802$$ + 7, $arrowBackY$$inline_8807$$ = $backY$$inline_8803$$ + 7, $arrowForwardY$$inline_8808$$ = 
          $arrowBackY$$inline_8807$$, $arrowBackResource$$inline_8809$$ = this.$_resources$.scrollLeft, $arrowForwardResource$$inline_8810$$ = this.$_resources$.scrollRight
        }
        var $leftHotspot$$inline_8811$$ = new D.$DvtRect$$(this.$getCtx$(), $backX$$inline_8801$$, $backY$$inline_8803$$, 28, 28, "lhs");
        $leftHotspot$$inline_8811$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($leftHotspot$$inline_8811$$, 2);
        $leftHotspot$$inline_8811$$.$hotspot$ = "left";
        $leftHotspot$$inline_8811$$.$setAlpha$(0);
        $leftHotspot$$inline_8811$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $leftArrow$$inline_8812$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowBackResource$$inline_8809$$, $arrowBackX$$inline_8805$$, $arrowBackY$$inline_8807$$, 14, 14, "lhs_arr");
        $leftArrow$$inline_8812$$.$hotspot$ = "left";
        $leftHotspot$$inline_8811$$.$addChild$($leftArrow$$inline_8812$$);
        var $rightHotspot$$inline_8813$$ = new D.$DvtRect$$(this.$getCtx$(), $forwardX$$inline_8802$$, $forwardY$$inline_8804$$, 28, 28, "rhs");
        $rightHotspot$$inline_8813$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($rightHotspot$$inline_8813$$, 2);
        $rightHotspot$$inline_8813$$.$hotspot$ = "right";
        $rightHotspot$$inline_8813$$.$setAlpha$(0);
        $rightHotspot$$inline_8813$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $rightArrow$$inline_8814$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowForwardResource$$inline_8810$$, $arrowForwardX$$inline_8806$$, $arrowForwardY$$inline_8808$$, 14, 14, "rhs_arr");
        $rightArrow$$inline_8814$$.$hotspot$ = "right";
        $rightHotspot$$inline_8813$$.$addChild$($rightArrow$$inline_8814$$);
        $scrollHotspots$$inline_8799$$.$addChild$($leftHotspot$$inline_8811$$);
        this.$_scrollHotspots$.push($leftHotspot$$inline_8811$$);
        $scrollHotspots$$inline_8799$$.$addChild$($rightHotspot$$inline_8813$$);
        this.$_scrollHotspots$.push($rightHotspot$$inline_8813$$);
        if(this.$_isVertical$) {
          $key$$inline_8800$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8798$$ - 1) : $i$$inline_8798$$, $topX$$inline_8815$$ = this.$_startX$ + $key$$inline_8800$$ * (this.$_seriesSize$ + $axisSize$$inline_8797$$) + 3, $bottomX$$inline_8816$$ = this.$_startX$ + ($key$$inline_8800$$ + 1) * this.$_seriesSize$ + $key$$inline_8800$$ * $axisSize$$inline_8797$$ - 28 - 3, $bottomY$$inline_8818$$ = $topY$$inline_8817$$ = this.$_startY$ + (this.$_canvasLength$ - 28) / 2, $arrowTopX$$inline_8819$$ = $topX$$inline_8815$$ + 
          7, $arrowBottomX$$inline_8820$$ = $bottomX$$inline_8816$$ + 7, $arrowBottomY$$inline_8822$$ = $arrowTopY$$inline_8821$$ = $topY$$inline_8817$$ + 7, $arrowTopResource$$inline_8823$$ = this.$_resources$.scrollLeft, $arrowBottomResource$$inline_8824$$ = this.$_resources$.scrollRight
        }else {
          var $topX$$inline_8815$$ = this.$_startX$ + (this.$_canvasLength$ - 28) / 2, $bottomX$$inline_8816$$ = $topX$$inline_8815$$, $topY$$inline_8817$$ = this.$_startY$ + $i$$inline_8798$$ * (this.$_seriesSize$ + $axisSize$$inline_8797$$) + 3, $bottomY$$inline_8818$$ = this.$_startY$ + ($i$$inline_8798$$ + 1) * this.$_seriesSize$ + $i$$inline_8798$$ * $axisSize$$inline_8797$$ - 28 - 3, $arrowTopX$$inline_8819$$ = $topX$$inline_8815$$ + 7, $arrowBottomX$$inline_8820$$ = $arrowTopX$$inline_8819$$, 
          $arrowTopY$$inline_8821$$ = $topY$$inline_8817$$ + 7, $arrowBottomY$$inline_8822$$ = $bottomY$$inline_8818$$ + 7, $arrowTopResource$$inline_8823$$ = this.$_resources$.scrollUp, $arrowBottomResource$$inline_8824$$ = this.$_resources$.scrollDown
        }
        var $topHotspot$$inline_8825$$ = new D.$DvtRect$$(this.$getCtx$(), $topX$$inline_8815$$, $topY$$inline_8817$$, 28, 28, "ths");
        $topHotspot$$inline_8825$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($topHotspot$$inline_8825$$, 2);
        $topHotspot$$inline_8825$$.$hotspot$ = "top";
        $topHotspot$$inline_8825$$.$setAlpha$(0);
        $topHotspot$$inline_8825$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $upArrow$$inline_8826$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowTopResource$$inline_8823$$, $arrowTopX$$inline_8819$$, $arrowTopY$$inline_8821$$, 14, 14, "ths_arr");
        $upArrow$$inline_8826$$.$hotspot$ = "top";
        $topHotspot$$inline_8825$$.$addChild$($upArrow$$inline_8826$$);
        var $bottomHotspot$$inline_8827$$ = new D.$DvtRect$$(this.$getCtx$(), $bottomX$$inline_8816$$, $bottomY$$inline_8818$$, 28, 28, "bhs");
        $bottomHotspot$$inline_8827$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($bottomHotspot$$inline_8827$$, 2);
        $bottomHotspot$$inline_8827$$.$hotspot$ = "bottom";
        $bottomHotspot$$inline_8827$$.$setAlpha$(0);
        $bottomHotspot$$inline_8827$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $downArrow$$inline_8828$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowBottomResource$$inline_8824$$, $arrowBottomX$$inline_8820$$, $arrowBottomY$$inline_8822$$, 14, 14, "bhs_arr");
        $downArrow$$inline_8828$$.$hotspot$ = "bottom";
        $bottomHotspot$$inline_8827$$.$addChild$($downArrow$$inline_8828$$);
        $scrollHotspots$$inline_8799$$.$addChild$($topHotspot$$inline_8825$$);
        this.$_scrollHotspots$.push($topHotspot$$inline_8825$$);
        $scrollHotspots$$inline_8799$$.$addChild$($bottomHotspot$$inline_8827$$);
        this.$_scrollHotspots$.push($bottomHotspot$$inline_8827$$)
      }
    }
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() && (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this);
    var $context$$inline_8831$$ = this.$getCtx$(), $upState$$inline_8832$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, this.$_resources$.zoomIn), $overState$$inline_8833$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, this.$_resources$.zoomIn_h), $downState$$inline_8834$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, this.$_resources$.zoomIn_a), $disabledState$$inline_8835$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, 
    this.$_resources$.zoomIn_d);
    this.$zoomin$ = new D.$DvtTransientButton$$(this.$getCtx$(), $upState$$inline_8832$$, $overState$$inline_8833$$, $downState$$inline_8834$$, $disabledState$$inline_8835$$, this.$EventManager$, this.$EventManager$.$HandleZoomInClick$);
    this.$zoomin$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_IN", D.$JSCompiler_alias_NULL$$));
    $upState$$inline_8832$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, this.$_resources$.zoomOut);
    $overState$$inline_8833$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, this.$_resources$.zoomOut_h);
    $downState$$inline_8834$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, this.$_resources$.zoomOut_a);
    $disabledState$$inline_8835$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8831$$, this.$_resources$.zoomOut_d);
    this.$zoomout$ = new D.$DvtTransientButton$$(this.$getCtx$(), $upState$$inline_8832$$, $overState$$inline_8833$$, $downState$$inline_8834$$, $disabledState$$inline_8835$$, this.$EventManager$, this.$EventManager$.$HandleZoomOutClick$);
    this.$zoomout$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_OUT", D.$JSCompiler_alias_NULL$$));
    this.$zoomin$.$hide$();
    this.$zoomout$.$hide$();
    D.$DvtTimeUtils$$.$supportsTouch$() && (D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomin$.$getElem$(), "role", "button"), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomin$.$getElem$(), "aria-label", (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_IN", D.$JSCompiler_alias_NULL$$)), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomout$.$getElem$(), "role", "button"), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomout$.$getElem$(), "aria-label", (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
    "ZOOM_OUT", D.$JSCompiler_alias_NULL$$)));
    this.$EventManager$.$associate$(this.$zoomin$, this.$zoomin$);
    this.$EventManager$.$associate$(this.$zoomout$, this.$zoomout$);
    this.$isRTL$() ? (this.$zoomin$.$setTranslateX$(this.$_backgroundWidth$ - 44), this.$zoomout$.$setTranslateX$(this.$_backgroundWidth$ - 44)) : (this.$zoomin$.$setTranslateX$(this.$_startX$ + 11), this.$zoomout$.$setTranslateX$(this.$_startX$ + 11));
    this.$zoomin$.$setTranslateY$(this.$_startY$ + 11);
    this.$zoomout$.$setTranslateY$(this.$_startY$ + 48);
    this.$_canvas$.$addChild$(this.$zoomin$);
    this.$_canvas$.$addChild$(this.$zoomout$);
    var $contentLength$$inline_8836$$ = this.$_contentLength$;
    $contentLength$$inline_8836$$ >= this.$_maxContentLength$ && (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)(this, D.$JSCompiler_alias_TRUE$$);
    this.$_canvasLength$ >= $contentLength$$inline_8836$$ && (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)(this, D.$JSCompiler_alias_FALSE$$);
    this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_applyInitialSelections$$)(this);
    D.$DvtTimeUtils$$.$supportsTouch$() && (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)(this, "flowto", this.$_series$[0].getId())
  }else {
    this.$renderEmptyText$()
  }
  this.$UpdateAriaAttributes$();
  (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this])
};
D.$DvtTimeline$$.prototype.render = D.$DvtTimeline$$.prototype.$render$;
D.$DvtTimeline$$.prototype.$renderEmptyText$ = function $$DvtTimeline$$$$$renderEmptyText$$() {
  var $emptyTextStr$$4$$ = this.$Options$.series ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "INVALID_DATA", D.$JSCompiler_alias_NULL$$) : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$);
  D.$DvtTextUtils$$.$renderEmptyText$(this.$_canvas$, $emptyTextStr$$4$$, new D.$DvtRectangle$$(0, 0, this.$_backgroundWidth$, this.$_backgroundHeight$), this.$EventManager$, new D.$DvtCSSStyle$$("color:#333333;white-space:nowrap;font-size:12px;font-weight:normal;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;"))
};
D.$DvtTimeline$$.prototype.$GetComponentDescription$ = function $$DvtTimeline$$$$$GetComponentDescription$$() {
  return this.$_shortDesc$ ? this.$_shortDesc$ : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "TIMELINE")
};
D.$JSCompiler_StaticMethods_showThenHideHotspots$$ = function $$JSCompiler_StaticMethods_showThenHideHotspots$$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$, $series$$20$$) {
  for(var $animator$$131$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$getCtx$(), 0.3, 0, D.$DvtEasing$linear$$), $i$$842$$ = 0;$i$$842$$ < $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$.length;$i$$842$$++) {
    var $hotspot$$ = $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$[$i$$842$$], $id$$297$$ = $hotspot$$.getId(), $show$$2$$ = D.$JSCompiler_alias_TRUE$$;
    if($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_contentLength$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_canvasLength$ && ("lhs" == $id$$297$$ || "rhs" == $id$$297$$)) {
      $show$$2$$ = D.$JSCompiler_alias_FALSE$$
    }
    var $pId$$1_parentSeries$$ = $hotspot$$.getParent().getId();
    if($pId$$1_parentSeries$$ && ($pId$$1_parentSeries$$ = $pId$$1_parentSeries$$.substring($pId$$1_parentSeries$$.length - 1), $series$$20$$ != D.$JSCompiler_alias_NULL$$ && $series$$20$$ != $pId$$1_parentSeries$$ && ($show$$2$$ = D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_series$[$pId$$1_parentSeries$$].$_maxOverflowValue$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_seriesSize$ && ("ths" == $id$$297$$ || "bhs" == $id$$297$$))) {
      $show$$2$$ = D.$JSCompiler_alias_FALSE$$
    }
    $show$$2$$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$131$$, "typeNumber", $hotspot$$, $hotspot$$.$getAlpha$, $hotspot$$.$setAlpha$, 0.6)
  }
  (0,D.$DvtPlayable$appendOnEnd$$)($animator$$131$$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hideHotspots$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$);
  $animator$$131$$.play()
};
D.$DvtTimeline$$.prototype.$hideHotspots$ = function $$DvtTimeline$$$$$hideHotspots$$() {
  var $hotSpotsLength$$ = this.$_scrollHotspots$.length;
  if(0 != $hotSpotsLength$$) {
    for(var $animator$$132$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3, 0, D.$DvtEasing$linear$$), $i$$843$$ = 0;$i$$843$$ < $hotSpotsLength$$;$i$$843$$++) {
      var $hotspot$$1$$ = this.$_scrollHotspots$[$i$$843$$];
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132$$, "typeNumber", $hotspot$$1$$, $hotspot$$1$$.$getAlpha$, $hotspot$$1$$.$setAlpha$, 0)
    }
    $animator$$132$$.play()
  }
};
D.$DvtTimeline$$.prototype.$applyStyleValues$ = function $$DvtTimeline$$$$$applyStyleValues$$() {
  this.$_style$ = new D.$DvtCSSStyle$$("border:1px #d9dfe3;background-color:#f9f9f9;");
  if(this.$Options$.styleDefaults) {
    var $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$ = this.$Options$.styleDefaults.borderColor;
    $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "border-color:" + $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$ + ";")
  }
  if(this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? 60 : 100, $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$ = this.$Options$.overview.style)) {
    for(var $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$ = $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$.split(";"), $doubleBorderWidth_i$$844$$ = 0;$doubleBorderWidth_i$$844$$ < $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$.length;$doubleBorderWidth_i$$844$$++) {
      var $s$$161$$ = $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$[$doubleBorderWidth_i$$844$$];
      if($s$$161$$ && 0 < $s$$161$$.length) {
        var $colonIndex$$3$$ = $s$$161$$.indexOf(":");
        if(-1 < $colonIndex$$3$$) {
          var $attrName$$4$$ = D.$DvtStringUtils$$.trim($s$$161$$.substring(0, $colonIndex$$3$$));
          if(this.$_isVertical$ && "width" == $attrName$$4$$ || !this.$_isVertical$ && "height" == $attrName$$4$$) {
            this.$_overviewSize$ = (0,window.parseInt)(D.$DvtStringUtils$$.trim($s$$161$$.substring($colonIndex$$3$$ + 1)), 10);
            break
          }
        }
      }
    }
  }
  D.$DvtTimeline$$.$superclass$.$applyStyleValues$.call(this);
  $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$ = this.$_style$.$getBorderWidth$();
  $doubleBorderWidth_i$$844$$ = 2 * $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$;
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "border:" + $doubleBorderWidth_i$$844$$ + "px;");
  this.$_startY$ = this.$_startX$ = $borderWidth$$17_overviewStyle$$6_splits$$2_style$$112$$;
  this.$_backgroundWidth$ = this.$Width$;
  this.$_backgroundHeight$ = this.$Height$;
  this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $doubleBorderWidth_i$$844$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $doubleBorderWidth_i$$844$$, this.$isRTL$() && (this.$_startX$ += this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$844$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$844$$, this.$_canvasSize$ = this.$_hasOverview$ ? this.$Height$ - 
  this.$_overviewSize$ - $doubleBorderWidth_i$$844$$ : this.$Height$ - $doubleBorderWidth_i$$844$$)
};
D.$JSCompiler_StaticMethods_applyAxisStyleValues$$ = function $$JSCompiler_StaticMethods_applyAxisStyleValues$$$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$) {
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$ = new D.$DvtCSSStyle$$("background-color:#f9f9f9;border:1px #d9dfe3;");
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$) {
    var $axisStyles_r$$93$$ = "", $g$$29_style$$113$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.backgroundColor;
    $g$$29_style$$113$$ && ($axisStyles_r$$93$$ = $axisStyles_r$$93$$ + "background-color:" + $g$$29_style$$113$$ + ";");
    ($g$$29_style$$113$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderColor) && ($axisStyles_r$$93$$ = $axisStyles_r$$93$$ + "border-color:" + $g$$29_style$$113$$ + ";");
    ($g$$29_style$$113$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderWidth) && ($axisStyles_r$$93$$ = $axisStyles_r$$93$$ + "border-width:" + $g$$29_style$$113$$ + ";");
    (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, $axisStyles_r$$93$$)
  }
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisInlineStyle$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$getBorderWidth$();
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, "border:" + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ + "px;");
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_timeAxis$.$setBorderWidth$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisLength$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_contentLength$ + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ - D.$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$;
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$ && $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor) {
    var $b$$65_bgColor$$16$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor, $axisStyles_r$$93$$ = D.$DvtColorUtils$$.$getRed$($b$$65_bgColor$$16$$), $g$$29_style$$113$$ = D.$DvtColorUtils$$.$getGreen$($b$$65_bgColor$$16$$), $b$$65_bgColor$$16$$ = D.$DvtColorUtils$$.$getBlue$($b$$65_bgColor$$16$$);
    $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesBackgroundOverlayStyle$ = "background-color:rgba(" + $axisStyles_r$$93$$ + "," + $g$$29_style$$113$$ + "," + $b$$65_bgColor$$16$$ + ",0.8);"
  }
};
D.$DvtTimeline$$.prototype.$createBackground$ = function $$DvtTimeline$$$$$createBackground$$() {
  this.$_background$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, this.$_backgroundWidth$, this.$_backgroundHeight$, "bg");
  this.$_background$.$setCSSStyle$(this.$_style$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_background$);
  var $cp$$9$$ = new D.$DvtClipPath$$;
  (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$9$$, 0, 0, this.$_backgroundWidth$, this.$_backgroundHeight$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_background$, $cp$$9$$);
  this.$addChild$(this.$_background$)
};
D.$JSCompiler_StaticMethods_renderAxis$$ = function $$JSCompiler_StaticMethods_renderAxis$$$($JSCompiler_StaticMethods_renderAxis$self$$) {
  var $axisStart_seriesCount$$28$$ = $JSCompiler_StaticMethods_renderAxis$self$$.$_series$.length, $axisSize$$2$$ = $JSCompiler_StaticMethods_renderAxis$self$$.$_timeAxis$.$getSize$(), $axisVisibleSize_cp$$11$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($JSCompiler_StaticMethods_renderAxis$self$$, $axisStart_seriesCount$$28$$), $axisStart_seriesCount$$28$$ = 1 == $axisStart_seriesCount$$28$$ ? $JSCompiler_StaticMethods_renderAxis$self$$.$_canvasSize$ - $axisVisibleSize_cp$$11$$ : 
  $JSCompiler_StaticMethods_renderAxis$self$$.$_canvasSize$ / $axisStart_seriesCount$$28$$ - $axisVisibleSize_cp$$11$$ / 2;
  $JSCompiler_StaticMethods_renderAxis$self$$.$isRTL$() && ($JSCompiler_StaticMethods_renderAxis$self$$.$_isVertical$ && 1 == $JSCompiler_StaticMethods_renderAxis$self$$.$_series$.length) && ($axisStart_seriesCount$$28$$ = 0);
  $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$ == D.$JSCompiler_alias_NULL$$ ? ($axisVisibleSize_cp$$11$$ = new D.$DvtClipPath$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_isVertical$ ? ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$ = new D.$DvtRect$$($JSCompiler_StaticMethods_renderAxis$self$$.$getCtx$(), $axisStart_seriesCount$$28$$, -$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$, $axisSize$$2$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$, "axis"), 
  (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, $axisStart_seriesCount$$28$$, 0, $axisSize$$2$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$)) : ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$ = new D.$DvtRect$$($JSCompiler_StaticMethods_renderAxis$self$$.$getCtx$(), -$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$, $axisStart_seriesCount$$28$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$, $axisSize$$2$$, "axis"), (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, 
  0, $axisStart_seriesCount$$28$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$, $axisSize$$2$$)), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setCSSStyle$($JSCompiler_StaticMethods_renderAxis$self$$.$_axisStyle$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$, $axisVisibleSize_cp$$11$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_innerCanvas$.$addChild$($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$)) : 
  ($axisVisibleSize_cp$$11$$ = new D.$DvtClipPath$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_isVertical$ ? ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setX$($axisStart_seriesCount$$28$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setY$(-$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setWidth$($axisSize$$2$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setHeight$($JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$), 
  (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, $axisStart_seriesCount$$28$$, 0, $axisSize$$2$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$)) : ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setX$(-$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setY$($axisStart_seriesCount$$28$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setWidth$($JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$), 
  $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setHeight$($axisSize$$2$$), (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, 0, $axisStart_seriesCount$$28$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$, $axisSize$$2$$)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$, $axisVisibleSize_cp$$11$$));
  $JSCompiler_StaticMethods_renderAxis$self$$.$createSeriesTicks$($JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$, $axisStart_seriesCount$$28$$)
};
D.$DvtTimeline$$.prototype.$createSeriesTicks$ = function $$DvtTimeline$$$$$createSeriesTicks$$($length$$26$$, $axisStartPos$$) {
  this.$_axis$.$removeChildren$();
  var $separatorStroke_separatorStyle$$ = new D.$DvtCSSStyle$$("color:#bcc7d2;"), $seriesAxisLabelStyle$$ = new D.$DvtCSSStyle$$("background-color:rgba(249,249,249,0.8);color:#4f4f4f;white-space:nowrap;font-size:14px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
  if(this.$_axisStyleDefaults$) {
    var $axisStart$$1_separatorColor$$ = this.$_axisStyleDefaults$.separatorColor;
    $axisStart$$1_separatorColor$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($separatorStroke_separatorStyle$$, "color:" + $axisStart$$1_separatorColor$$ + ";");
    this.$_seriesBackgroundOverlayStyle$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($seriesAxisLabelStyle$$, this.$_seriesBackgroundOverlayStyle$);
    this.$_majorAxisStyleDefaults$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($seriesAxisLabelStyle$$, this.$_majorAxisStyleDefaults$.labelStyle)
  }
  var $separatorStroke_separatorStyle$$ = new D.$DvtSolidStroke$$($separatorStroke_separatorStyle$$.$getStyle$("color")), $axisStart$$1_separatorColor$$ = $axisStartPos$$ + this.$_timeAxis$.$_borderWidth$, $dates$$inline_8861_startPos$$inline_8852$$ = this.$_fetchStartPos$, $endPos$$inline_8853_labels$$inline_8862$$ = this.$_fetchEndPos$, $container$$inline_8854_i$$inline_8863$$ = this.$_axis$, $axisEnd$$inline_8856$$ = $axisStart$$1_separatorColor$$ + this.$_timeAxis$.$_contentSize$, $block$$inline_8860$$ = 
  new D.$DvtContainer$$(this.$getCtx$(), "block_" + $dates$$inline_8861_startPos$$inline_8852$$ + "_" + $endPos$$inline_8853_labels$$inline_8862$$);
  $block$$inline_8860$$.$startPos$ = $dates$$inline_8861_startPos$$inline_8852$$;
  $block$$inline_8860$$.$endPos$ = $endPos$$inline_8853_labels$$inline_8862$$;
  $container$$inline_8854_i$$inline_8863$$.$addChild$($block$$inline_8860$$);
  $dates$$inline_8861_startPos$$inline_8852$$ = this.$_dates$[this.$_zoomLevelOrder$];
  $endPos$$inline_8853_labels$$inline_8862$$ = this.$_labels$[this.$_zoomLevelOrder$];
  for($container$$inline_8854_i$$inline_8863$$ = 0;$container$$inline_8854_i$$inline_8863$$ < $dates$$inline_8861_startPos$$inline_8852$$.length - 1;$container$$inline_8854_i$$inline_8863$$++) {
    var $date$$inline_8864$$ = $dates$$inline_8861_startPos$$inline_8852$$[$container$$inline_8854_i$$inline_8863$$], $next$$inline_8865_nextPos$$inline_8867$$ = $dates$$inline_8861_startPos$$inline_8852$$[$container$$inline_8854_i$$inline_8863$$ + 1], $currentPos$$inline_8866$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$inline_8864$$, $length$$26$$), $next$$inline_8865_nextPos$$inline_8867$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $next$$inline_8865_nextPos$$inline_8867$$, 
    $length$$26$$), $maxLength$$inline_8868$$ = $next$$inline_8865_nextPos$$inline_8867$$ - $currentPos$$inline_8866$$;
    0 != $currentPos$$inline_8866$$ && ((this.$_isVertical$ ? this.$addTick$($block$$inline_8860$$, $axisEnd$$inline_8856$$, $axisStart$$1_separatorColor$$, $currentPos$$inline_8866$$, $currentPos$$inline_8866$$, $separatorStroke_separatorStyle$$, "s_tick" + $date$$inline_8864$$) : this.$isRTL$() ? this.$addTick$($block$$inline_8860$$, $length$$26$$ - $currentPos$$inline_8866$$, $length$$26$$ - $currentPos$$inline_8866$$, $axisEnd$$inline_8856$$, $axisStart$$1_separatorColor$$, $separatorStroke_separatorStyle$$, 
    "s_tick" + $date$$inline_8864$$) : this.$addTick$($block$$inline_8860$$, $currentPos$$inline_8866$$, $currentPos$$inline_8866$$, $axisEnd$$inline_8856$$, $axisStart$$1_separatorColor$$, $separatorStroke_separatorStyle$$, "s_tick" + $date$$inline_8864$$)).time = $date$$inline_8864$$);
    this.$_isVertical$ ? (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block$$inline_8860$$, $endPos$$inline_8853_labels$$inline_8862$$[$container$$inline_8854_i$$inline_8863$$], $axisStart$$1_separatorColor$$ + ($axisEnd$$inline_8856$$ - $axisStart$$1_separatorColor$$) / 2, $currentPos$$inline_8866$$ + ($next$$inline_8865_nextPos$$inline_8867$$ - $currentPos$$inline_8866$$) / 2 - 7, $axisEnd$$inline_8856$$ - $axisStart$$1_separatorColor$$) : this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block$$inline_8860$$, 
    $endPos$$inline_8853_labels$$inline_8862$$[$container$$inline_8854_i$$inline_8863$$], $length$$26$$ - ($currentPos$$inline_8866$$ + ($next$$inline_8865_nextPos$$inline_8867$$ - $currentPos$$inline_8866$$) / 2), $axisStart$$1_separatorColor$$ + 2, $maxLength$$inline_8868$$) : (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block$$inline_8860$$, $endPos$$inline_8853_labels$$inline_8862$$[$container$$inline_8854_i$$inline_8863$$], $currentPos$$inline_8866$$ + ($next$$inline_8865_nextPos$$inline_8867$$ - 
    $currentPos$$inline_8866$$) / 2, $axisStart$$1_separatorColor$$ + 2, $maxLength$$inline_8868$$)
  }
  this.$_seriesScale$ && this.$renderSeriesTimeAxis$(this.$_fetchStartPos$, this.$_fetchEndPos$, this.$_innerCanvas$, "o_", $length$$26$$, $seriesAxisLabelStyle$$)
};
D.$DvtTimeline$$.prototype.$renderSeriesTimeAxis$ = function $$DvtTimeline$$$$$renderSeriesTimeAxis$$($current$$8_startDate$$1_startPos$$4$$, $endPos$$6$$, $container$$196$$, $prefix$$6$$, $length$$28$$, $labelStyle$$22$$) {
  if(this.$_majorAxisLabels$) {
    for(var $i$$848_start$$45$$ = 0;$i$$848_start$$45$$ < this.$_majorAxisLabels$.length;$i$$848_start$$45$$++) {
      $container$$196$$.removeChild(this.$_majorAxisLabels$[$i$$848_start$$45$$])
    }
  }
  this.$_majorAxisLabels$ = [];
  var $i$$848_start$$45$$ = this.$_start$, $end$$29$$ = this.$_end$;
  $current$$8_startDate$$1_startPos$$4$$ = D.$DvtTimeUtils$$.$getPositionDate$($i$$848_start$$45$$, $end$$29$$, $current$$8_startDate$$1_startPos$$4$$, $length$$28$$);
  var $adjustedStartDate_currentPos$$1$$ = this.$_seriesTimeAxis$.$adjustDate$($current$$8_startDate$$1_startPos$$4$$);
  $current$$8_startDate$$1_startPos$$4$$ = new window.Date($adjustedStartDate_currentPos$$1$$);
  for($adjustedStartDate_currentPos$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($i$$848_start$$45$$, $end$$29$$, $adjustedStartDate_currentPos$$1$$, $length$$28$$);$adjustedStartDate_currentPos$$1$$ < $endPos$$6$$;) {
    var $label$$106$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)(this.$_seriesTimeAxis$, this.$_seriesTimeAxis$.$adjustDate$($current$$8_startDate$$1_startPos$$4$$)), $next$$19$$ = this.$_seriesTimeAxis$.$getNextDate$(this.$_seriesTimeAxis$.$adjustDate$($current$$8_startDate$$1_startPos$$4$$)), $next_time_pos$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($i$$848_start$$45$$, $end$$29$$, $next$$19$$, $length$$28$$), $maxLength$$3$$ = $next_time_pos$$1$$ - $adjustedStartDate_currentPos$$1$$, $time_pos$$2$$ = 
    $adjustedStartDate_currentPos$$1$$;
    (this.$isRTL$() ? this.$_isVertical$ ? this.$addLabel$($container$$196$$, this.$_canvasSize$ - 5, $label$$106$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $labelStyle$$22$$, $prefix$$6$$ + "label" + $adjustedStartDate_currentPos$$1$$ + "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$()) : this.$addLabel$($container$$196$$, $length$$28$$ - ($time_pos$$2$$ + 5), $label$$106$$, $maxLength$$3$$, this.$_seriesSize$ - 2, $labelStyle$$22$$, $prefix$$6$$ + "label" + $adjustedStartDate_currentPos$$1$$ + 
    "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$()) : this.$_isVertical$ ? this.$addLabel$($container$$196$$, 5, $label$$106$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $labelStyle$$22$$, $prefix$$6$$ + "label" + $adjustedStartDate_currentPos$$1$$ + "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$()) : this.$addLabel$($container$$196$$, $time_pos$$2$$ + 5, $label$$106$$, $maxLength$$3$$, this.$_seriesSize$ - 2, $labelStyle$$22$$, $prefix$$6$$ + 
    "label" + $adjustedStartDate_currentPos$$1$$ + "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$())).time = $current$$8_startDate$$1_startPos$$4$$.getTime();
    $current$$8_startDate$$1_startPos$$4$$ = $next$$19$$;
    $adjustedStartDate_currentPos$$1$$ = $next_time_pos$$1$$
  }
};
D.$DvtTimeline$$.prototype.$HandleTouchStart$ = function $$DvtTimeline$$$$$HandleTouchStart$$($event$$780$$) {
  if(1 == $event$$780$$.touches.length) {
    if(this.$_dragPanSeries$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)(this, $event$$780$$.target)) {
      var $series$$24$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
    }
    (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this, $series$$24$$)
  }
};
D.$JSCompiler_StaticMethods_handleZoomWheel$$ = function $$JSCompiler_StaticMethods_handleZoomWheel$$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$, $compLoc$$1_s$$inline_8894_s$$inline_8897$$, $triggerViewportChangeEvent$$) {
  $newLength_viewTime$$2$$ > $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$, (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_TRUE$$)) : (0,D.$JSCompiler_StaticMethods_enableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$ > $newLength_viewTime$$2$$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$, (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_FALSE$$)) : (0,D.$JSCompiler_StaticMethods_enableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_FALSE$$);
  var $zoomIn$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ <= $newLength_viewTime$$2$$, $viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$) / ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) * $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$;
  (0,D.$JSCompiler_StaticMethods_setContentLength$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$);
  $newLength_viewTime$$2$$ = $viewLength_widthFactor$$4$$ / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$);
  $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$ ? ($viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$ - 
  $compLoc$$1_s$$inline_8894_s$$inline_8897$$ * $viewLength_widthFactor$$4$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ > 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$)), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 1 / $viewLength_widthFactor$$4$$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$)) : ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + 
  $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 0);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$isRTL$() && !$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Height$ : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Width$);
  if($zoomIn$$) {
    for(;0 < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ - 1], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ >= $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$--;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_8894_s$$inline_8897$$ = 1;$compLoc$$1_s$$inline_8894_s$$inline_8897$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_zoomOrder$.length;$compLoc$$1_s$$inline_8894_s$$inline_8897$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8894_s$$inline_8897$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8894_s$$inline_8897$$ - 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }else {
    for(;$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$.length - 1;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$++;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_8894_s$$inline_8897$$ = 0;$compLoc$$1_s$$inline_8894_s$$inline_8897$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_zoomOrder$.length - 1;$compLoc$$1_s$$inline_8894_s$$inline_8897$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8894_s$$inline_8897$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8893_JSCompiler_StaticMethods_increaseScale$self$$inline_8896_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8894_s$$inline_8897$$ + 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  (0,D.$JSCompiler_StaticMethods_renderAxis$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  (0,D.$JSCompiler_StaticMethods_updateSeries$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startY$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$) : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startX$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $triggerViewportChangeEvent$$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$))
};
D.$DvtTimeline$$.prototype.$zoomBy$ = function $$DvtTimeline$$$$$zoomBy$$($dz$$13$$) {
  var $compLoc$$2$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
  (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)(this, this.$_contentLength$ * ((1 / $dz$$13$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$2$$ + this.$_viewStartTime$, $compLoc$$2$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_updateSeries$$ = function $$JSCompiler_StaticMethods_updateSeries$$$($JSCompiler_StaticMethods_updateSeries$self$$) {
  if($JSCompiler_StaticMethods_updateSeries$self$$.$_series$) {
    var $seriesCount$$32$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length, $axisSize$$5$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($JSCompiler_StaticMethods_updateSeries$self$$, $seriesCount$$32$$);
    $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ = ($JSCompiler_StaticMethods_updateSeries$self$$.$_canvasSize$ - $axisSize$$5$$) / $seriesCount$$32$$;
    for(var $i$$852$$ = 0;$i$$852$$ < $seriesCount$$32$$;$i$$852$$++) {
      var $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$[$i$$852$$];
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$, D.$JSCompiler_alias_NULL$$);
      var $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ = new D.$DvtClipPath$$;
      if($JSCompiler_StaticMethods_updateSeries$self$$.$_isVertical$) {
        var $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() ? window.Math.abs($i$$852$$ - 1) : $i$$852$$;
        if($JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() && 1 == $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length) {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$, $axisSize$$5$$, 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$);
          var $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $axisSize$$5$$, 0)
        }else {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$), 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = 
          new D.$DvtMatrix$$(1, 0, 0, 1, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$), 0)
        }
        var $endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$
      }else {
        (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$, 0, $i$$852$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$), $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$), $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = new D.$DvtMatrix$$(1, 0, 0, 1, 0, $i$$852$$ * 
        ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$)), $endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$
      }
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$, $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$setMatrix$($block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$);
      $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ = $endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_canvas$.$setTranslateY$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_canvas$.$setTranslateX$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$Width$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$Height$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_fetchStartPos$ = 0;
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_isVertical$ ? ($JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$, $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_maxOverflowValue$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$, $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_length$ = 
      $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$, $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_size$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$) : ($JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_fetchEndPos$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$, $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_maxOverflowValue$ = 
      $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$, $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_length$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$, $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_size$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_background$.$setWidth$($cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$.$_background$.$setHeight$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$);
      $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$ = $JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$;
      if(!($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$ == D.$JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$.length)) {
        $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$isRTL$();
        $endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_fetchEndPos$;
        $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_blocks$[0];
        $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$.$startPos$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_fetchStartPos$;
        $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$.$endPos$ = $endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$;
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$prepareDurations$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$);
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_initialSpacing$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isVertical$ ? 20 * (0 < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_maxDurationSize$ ? 1 : 0) + 15 + 10 * $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_maxDurationSize$ : 
        35 + 10 * $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_maxDurationSize$;
        for($endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ = 0;$endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$.length;$endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$++) {
          var $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$[$endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$], $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_startTime$, $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = 
          D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_start$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_end$, $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_length$), 
          $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_endTime$;
          $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ && $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ != $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ && ($feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_start$, 
          $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_end$, $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_length$) - $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$, $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ += 
          window.Math.min(10, $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ / 2));
          $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_loc$ = $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$;
          $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_spacing$ = D.$JSCompiler_alias_NULL$$
        }
        for($endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ = 0;$endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$.length;$endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$++) {
          if($duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$[$endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$], $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_startTime$, !($block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ < 
          $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_start$ || $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ > $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_end$)) {
            $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_loc$;
            $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$, $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$.length);
            $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_spacing$ = $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$;
            var $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_displayable$, $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.getWidth(), $itemHeight$$inline_11618_transY$$inline_11620$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.getHeight();
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isVertical$ ? ($itemHeight$$inline_11618_transY$$inline_11620$$ = $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ - $itemHeight$$inline_11618_transY$$inline_11620$$ / 2, $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ && 
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ || !$cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ && !$JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ ? $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_size$ - ($endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ + 
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_initialSpacing$) : $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_initialSpacing$) : ($endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ ? $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_length$ - 
            $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ - $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ + 20 : $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ - 20, $itemHeight$$inline_11618_transY$$inline_11620$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ ? 
            $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ : $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$Height$ - $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ - $itemHeight$$inline_11618_transY$$inline_11620$$);
            (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$, $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$, $itemHeight$$inline_11618_transY$$inline_11620$$);
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isVertical$ || ($duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$ = $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$_feeler$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ ? $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ = 
            0 : ($bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$Height$, $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$Height$ - $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$), 
            $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ ? $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_length$ - $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ : $block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$, 
            $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setTranslateY$(0), $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setX1$($block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$), $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setY1$($bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$), $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setX2$($block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$), 
            $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setY2$($feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$))
          }
        }
        $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$isRTL$();
        for($endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_maxDurationSize$;0 < $endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$;$endPos$$inline_11606_i$$inline_11626_j$$inline_11608_width$$165$$--) {
          for($block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ = 0;$block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$ < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$.length;$block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$++) {
            $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_items$[$block$$inline_11607_feelerX$$inline_11624_itemTime$$inline_11614_j$$inline_11627_loc$$inline_11611_posMatrix$$2$$], $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$ = $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$.$_durationBar$, 
            $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isVertical$ ? $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setTranslateY$(0) : $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setTranslateX$(0), $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ = 
            D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_start$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_end$, $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$.$_startTime$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_length$), 
            $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ = 22 + 10 * $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$.$_durationLevel$, $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_start$, 
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_end$, $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$.$_endTime$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_length$), $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isVertical$ ? (!$cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ && 
            !$JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ || $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ && $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ ? $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setX$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_size$ - 
            $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ + 5) : $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setX$(-5), $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setY$($feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$), $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setWidth$($bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$), 
            $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setHeight$($endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ - $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$)) : ($endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$ -= $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$, 
            $cp$$13_isRTL$$inline_11605_isRTL$$inline_11625_width$$inline_8900$$ ? $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setX$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_length$ - $feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$ - $endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$) : 
            $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setX$($feelerHeight$$inline_11623_loc$$inline_11630_spacing$$inline_11615_span$$inline_11613_startTime$$inline_11610$$), $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ ? $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setY$(-5) : $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setY$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_size$ - 
            $bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$ + 5), $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setWidth$($endLoc$$inline_11632_itemWidth$$inline_11617_node$$inline_11628_transX$$inline_11619_width$$inline_11633$$), $duration$$inline_11629_feeler$$inline_11621_item$$inline_11609$$.$setHeight$($bubble$$inline_11616_durationSize$$inline_11631_endTime$$inline_11612_feelerY$$inline_11622$$)))
          }
        }
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isVertical$ || (0,D.$JSCompiler_StaticMethods_adjustFeelers$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$);
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$.$_isInverted$ || ((0,D.$JSCompiler_StaticMethods_adjustDurations$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$), (0,D.$JSCompiler_StaticMethods_adjustItems$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$));
        (0,D.$JSCompiler_StaticMethods_adjustBackground$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11604_height$$148_height$$inline_8901_key$$127$$)
      }
      (0,D.$JSCompiler_StaticMethods_updateReferenceObjects$$)($JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$);
      (0,D.$JSCompiler_StaticMethods_updateSeriesTicks$$)($JSCompiler_StaticMethods_reRender$self$$inline_8899_series$$25$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeline$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$782$$) {
  (39 == $event$$782$$.keyCode || 37 == $event$$782$$.keyCode || 40 == $event$$782$$.keyCode || 38 == $event$$782$$.keyCode) && (0,D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$)(this, this.$EventManager$.$getFocus$())
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$783$$) {
  this.$_dragPanSeries$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)(this, $event$$783$$.target)
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($compX$$2$$, $compY$$2$$) {
  this.$_currentX$ = $compX$$2$$;
  this.$_currentY$ = $compY$$2$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$784$$) {
  "none" != this.$_selectionMode$ && (0,D.$JSCompiler_StaticMethods_handleShapeClick$$)(this, $event$$784$$)
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  this.$_dragPanSeries$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_endPan$$)(this)
};
D.$JSCompiler_StaticMethods_endPan$$ = function $$JSCompiler_StaticMethods_endPan$$$($JSCompiler_StaticMethods_endPan$self$$) {
  $JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPan$self$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_endPan$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPan$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPan$self$$.$_scale$)))
};
D.$DvtTimeline$$.prototype.$contDragPan$ = function $$DvtTimeline$$$$$contDragPan$$($compX$$3$$, $compY$$3$$) {
  if(this.$_currentX$ && this.$_currentY$) {
    var $deltaX$$25$$ = this.$_currentX$ - $compX$$3$$, $deltaY$$28$$ = this.$_currentY$ - $compY$$3$$;
    if(0 == $deltaX$$25$$ && 0 == $deltaY$$28$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
    this.$_triggerViewportChange$ = D.$JSCompiler_alias_TRUE$$;
    this.$_currentX$ = $compX$$3$$;
    this.$_currentY$ = $compY$$3$$;
    this.$panBy$($deltaX$$25$$, $deltaY$$28$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtTimeline$$.prototype.$panBy$ = function $$DvtTimeline$$$$$panBy$$($deltaX$$26$$, $deltaY$$29$$) {
  var $axisSize$$6_maxTranslateY$$1$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, this.$_series$.length);
  if(this.$_isVertical$) {
    var $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$;
    if(this.$_dragPanSeries$) {
      var $newTranslateX$$ = this.$_dragPanSeries$.$getTranslateX$() - $deltaX$$26$$;
      1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$) ? ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$6_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_dragPanSeries$.$Width$ + $axisSize$$6_maxTranslateY$$1$$) : this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? 
      ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $axisSize$$6_maxTranslateY$$1$$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = $axisSize$$6_maxTranslateY$$1$$) : ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = 0, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
      $newTranslateX$$ < $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ && ($newTranslateX$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$);
      this.$_dragPanSeries$.$setTranslateX$($newTranslateX$$)
    }
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_innerCanvas$.$getTranslateY$() - $deltaY$$29$$;
    $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startY$);
    $axisSize$$6_maxTranslateY$$1$$ = this.$_startY$;
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ ? $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ : $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ > $axisSize$$6_maxTranslateY$$1$$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$6_maxTranslateY$$1$$);
    this.$_innerCanvas$.$setTranslateY$($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$);
    this.$_startPos$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ - this.$_startY$;
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - this.$_startPos$ / $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$;
    this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$;
    this.$_hasOverview$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }else {
    $newTranslateX$$ = this.$_innerCanvas$.$getTranslateX$() - $deltaX$$26$$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startX$), $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_startX$, $newTranslateX$$ < $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ && 
    ($newTranslateX$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$), this.$_innerCanvas$.$setTranslateX$($newTranslateX$$), this.$_startPos$ = $newTranslateX$$ - this.$_startX$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$, 
    this.$_viewStartTime$ = this.$_start$ - this.$_startPos$ / $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$, this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), this.$_hasOverview$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, 
    this.$_viewEndTime$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$)), this.$_dragPanSeries$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_dragPanSeries$.$getTranslateY$() - $deltaY$$29$$, this.$_dragPanSeries$.$_isInverted$ ? ($maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = $axisSize$$6_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$6_maxTranslateY$$1$$ = this.$_dragPanSeries$.$Height$ + 
    $axisSize$$6_maxTranslateY$$1$$) : ($maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = 0, $axisSize$$6_maxTranslateY$$1$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ ? $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ : $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ > 
    $axisSize$$6_maxTranslateY$$1$$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$6_maxTranslateY$$1$$), this.$_dragPanSeries$.$setTranslateY$($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }
};
D.$DvtTimeline$$.prototype.$HandleEvent$ = function $$DvtTimeline$$$$$HandleEvent$$($event$$786_i$$853_isMultiSelect$$inline_8904$$) {
  var $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getType$();
  if("selection" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ || "dvtAct" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
    D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$786_i$$853_isMultiSelect$$inline_8904$$)
  }else {
    if("overview" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
      $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getSubType$();
      if("rangeChanging" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ || "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
        var $item$$53_oldViewTime$$1_zoomLevelOrder$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        this.$_viewStartTime$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getParamValue$("newStartTime");
        this.$_viewEndTime$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getParamValue$("newEndTime");
        var $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        if(0 < $isMultiSelect$$2_minLength$$2_viewTime$$4$$) {
          var $s$$163_viewSize$$inline_8908_widthFactor$$7$$ = this.$_canvasLength$ / $isMultiSelect$$2_minLength$$2_viewTime$$4$$;
          (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $s$$163_viewSize$$inline_8908_widthFactor$$7$$ * (this.$_end$ - this.$_start$));
          this.$_startPos$ = $s$$163_viewSize$$inline_8908_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$);
          this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
          if($item$$53_oldViewTime$$1_zoomLevelOrder$$ > $isMultiSelect$$2_minLength$$2_viewTime$$4$$) {
            $item$$53_oldViewTime$$1_zoomLevelOrder$$ = this.$_zoomLevelLengths$.length;
            for($isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$ - 1];this.$_contentLength$ >= $isMultiSelect$$2_minLength$$2_viewTime$$4$$ && 0 < $item$$53_oldViewTime$$1_zoomLevelOrder$$;) {
              $item$$53_oldViewTime$$1_zoomLevelOrder$$--, $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$ - 1]
            }
            $item$$53_oldViewTime$$1_zoomLevelOrder$$ == this.$_zoomLevelLengths$.length && $item$$53_oldViewTime$$1_zoomLevelOrder$$--
          }else {
            $item$$53_oldViewTime$$1_zoomLevelOrder$$ = 0;
            for($isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$];this.$_contentLength$ < $isMultiSelect$$2_minLength$$2_viewTime$$4$$ && $item$$53_oldViewTime$$1_zoomLevelOrder$$ < this.$_zoomLevelLengths$.length - 1;) {
              $item$$53_oldViewTime$$1_zoomLevelOrder$$++, $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$]
            }
          }
          this.$_zoomLevelOrder$ = $item$$53_oldViewTime$$1_zoomLevelOrder$$;
          this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$item$$53_oldViewTime$$1_zoomLevelOrder$$]);
          this.$_scale$ = this.$_timeAxis$.$_scale$;
          (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)(this);
          (0,D.$JSCompiler_StaticMethods_renderAxis$$)(this);
          (0,D.$JSCompiler_StaticMethods_updateSeries$$)(this);
          this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$)
        }
        "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ && this.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
      if("scrollPos" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ || "scrollTime" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
        this.$_viewStartTime$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getParamValue$("newStartTime"), this.$_viewEndTime$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getParamValue$("newEndTime"), $s$$163_viewSize$$inline_8908_widthFactor$$7$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), this.$_startPos$ = $s$$163_viewSize$$inline_8908_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - 
        this.$_contentLength$ - this.$_startPos$), this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
    }else {
      if($itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getSubType$(), "selection" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
        $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getItemId$();
        $event$$786_i$$853_isMultiSelect$$inline_8904$$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getParamValue$("multiSelect");
        $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = ($event$$786_i$$853_isMultiSelect$$inline_8904$$ != D.$JSCompiler_alias_NULL$$ ? $event$$786_i$$853_isMultiSelect$$inline_8904$$ : D.$JSCompiler_alias_FALSE$$) && "multiple" == this.$_selectionMode$;
        for($event$$786_i$$853_isMultiSelect$$inline_8904$$ = 0;$event$$786_i$$853_isMultiSelect$$inline_8904$$ < this.$_series$.length;$event$$786_i$$853_isMultiSelect$$inline_8904$$++) {
          for(var $s$$163_viewSize$$inline_8908_widthFactor$$7$$ = this.$_series$[$event$$786_i$$853_isMultiSelect$$inline_8904$$], $j$$120$$ = 0;$j$$120$$ < $s$$163_viewSize$$inline_8908_widthFactor$$7$$.$_items$.length;$j$$120$$++) {
            if($item$$53_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8908_widthFactor$$7$$.$_items$[$j$$120$$], $item$$53_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
              (0,D.$JSCompiler_StaticMethods__addToSelection$$)(this.$SelectionHandler$, $item$$53_oldViewTime$$1_zoomLevelOrder$$, $isMultiSelect$$2_minLength$$2_viewTime$$4$$);
              (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $item$$53_oldViewTime$$1_zoomLevelOrder$$);
              $s$$163_viewSize$$inline_8908_widthFactor$$7$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
              this.$_viewStartTime$ = $item$$53_oldViewTime$$1_zoomLevelOrder$$.$_startTime$ - $s$$163_viewSize$$inline_8908_widthFactor$$7$$ / 2;
              this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $s$$163_viewSize$$inline_8908_widthFactor$$7$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $s$$163_viewSize$$inline_8908_widthFactor$$7$$);
              this.$_viewEndTime$ = this.$_viewStartTime$ + $s$$163_viewSize$$inline_8908_widthFactor$$7$$;
              this.$_startPos$ = this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$);
              this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
              this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$);
              this.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
              break
            }
          }
        }
      }else {
        if("highlight" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
          $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getItemId$();
          for($event$$786_i$$853_isMultiSelect$$inline_8904$$ = 0;$event$$786_i$$853_isMultiSelect$$inline_8904$$ < this.$_series$.length;$event$$786_i$$853_isMultiSelect$$inline_8904$$++) {
            $s$$163_viewSize$$inline_8908_widthFactor$$7$$ = this.$_series$[$event$$786_i$$853_isMultiSelect$$inline_8904$$];
            for($j$$120$$ = 0;$j$$120$$ < $s$$163_viewSize$$inline_8908_widthFactor$$7$$.$_items$.length;$j$$120$$++) {
              if($item$$53_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8908_widthFactor$$7$$.$_items$[$j$$120$$], $item$$53_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
                $item$$53_oldViewTime$$1_zoomLevelOrder$$.$showHoverEffect$(D.$JSCompiler_alias_TRUE$$);
                break
              }
            }
          }
        }else {
          if("unhighlight" == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
            $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$ = $event$$786_i$$853_isMultiSelect$$inline_8904$$.$getItemId$();
            for($event$$786_i$$853_isMultiSelect$$inline_8904$$ = 0;$event$$786_i$$853_isMultiSelect$$inline_8904$$ < this.$_series$.length;$event$$786_i$$853_isMultiSelect$$inline_8904$$++) {
              $s$$163_viewSize$$inline_8908_widthFactor$$7$$ = this.$_series$[$event$$786_i$$853_isMultiSelect$$inline_8904$$];
              for($j$$120$$ = 0;$j$$120$$ < $s$$163_viewSize$$inline_8908_widthFactor$$7$$.$_items$.length;$j$$120$$++) {
                if($item$$53_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8908_widthFactor$$7$$.$_items$[$j$$120$$], $item$$53_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$255$$) {
                  $item$$53_oldViewTime$$1_zoomLevelOrder$$.$hideHoverEffect$(D.$JSCompiler_alias_TRUE$$);
                  break
                }
              }
            }
          }
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_enableZoomButton$$ = function $$JSCompiler_StaticMethods_enableZoomButton$$$($JSCompiler_StaticMethods_enableZoomButton$self$$, $isZoomIn$$) {
  $isZoomIn$$ ? ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$setEnabled$(D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_drawUpState$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$)) : ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$setEnabled$(D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_drawUpState$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$))
};
D.$JSCompiler_StaticMethods_disableZoomButton$$ = function $$JSCompiler_StaticMethods_disableZoomButton$$$($JSCompiler_StaticMethods_disableZoomButton$self$$, $isZoomIn$$1$$) {
  $isZoomIn$$1$$ ? ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$setEnabled$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.setCursor(D.$JSCompiler_alias_NULL$$)) : ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$setEnabled$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$), 
  $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.setCursor(D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$ = function $$JSCompiler_StaticMethods_updateScrollForItemNavigation$$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $item$$55$$) {
  var $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $item$$55$$.getHeight() : $item$$55$$.getWidth(), $itemStart_widthFactor$$9$$ = $item$$55$$.$_loc$ - ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $itemEnd_itemSize_viewTime$$5$$ / 2 + 2 : 22);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($itemStart_widthFactor$$9$$ -= 2, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  var $itemEnd_itemSize_viewTime$$5$$ = $itemStart_widthFactor$$9$$ + $itemEnd_itemSize_viewTime$$5$$ + 4, $endPos$$7$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$;
  -$itemStart_widthFactor$$9$$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemStart_widthFactor$$9$$ : -$itemEnd_itemSize_viewTime$$5$$ < $endPos$$7$$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemEnd_itemSize_viewTime$$5$$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$);
  $itemStart_widthFactor$$9$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$);
  $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ / $itemStart_widthFactor$$9$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * 
  $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ + $itemEnd_itemSize_viewTime$$5$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $itemEnd_itemSize_viewTime$$5$$, 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startY$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$) : $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startX$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Height$ : 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Width$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_scale$))
};
D.$JSCompiler_StaticMethods_handleShapeClick$$ = function $$JSCompiler_StaticMethods_handleShapeClick$$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $event$$787$$) {
  if($event$$787$$) {
    var $drawable$$6_event$$inline_8913_item$$inline_8911$$ = $JSCompiler_StaticMethods_handleShapeClick$self$$.$_findDrawable$($event$$787$$.target);
    if($drawable$$6_event$$inline_8913_item$$inline_8911$$) {
      var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8910_series$$26$$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_8913_item$$inline_8911$$);
      if($drawable$$6_event$$inline_8913_item$$inline_8911$$.$_node$) {
        var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8910_series$$26$$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_8913_item$$inline_8911$$), $drawable$$6_event$$inline_8913_item$$inline_8911$$ = $drawable$$6_event$$inline_8913_item$$inline_8911$$.$_node$, $action$$inline_8912$$ = $drawable$$6_event$$inline_8913_item$$inline_8911$$.$getAction$();
        $action$$inline_8912$$ && ($drawable$$6_event$$inline_8913_item$$inline_8911$$ = new D.$DvtTimelineSeriesActionEvent$$($action$$inline_8912$$, $drawable$$6_event$$inline_8913_item$$inline_8911$$.getId()), D.$DvtEventDispatcher$$.dispatchEvent($JSCompiler_StaticMethods_HandleItemAction$self$$inline_8910_series$$26$$.$_callback$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8910_series$$26$$.$_callbackObj$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8910_series$$26$$, 
        $drawable$$6_event$$inline_8913_item$$inline_8911$$))
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applyInitialSelections$$ = function $$JSCompiler_StaticMethods_applyInitialSelections$$$($JSCompiler_StaticMethods_applyInitialSelections$self$$) {
  if($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection) {
    for(var $items$$39$$ = [], $i$$854$$ = 0;$i$$854$$ < $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$.length;$i$$854$$++) {
      for(var $s$$164$$ = $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$[$i$$854$$], $j$$121$$ = 0;$j$$121$$ < $s$$164$$.$_items$.length;$j$$121$$++) {
        $items$$39$$.push($s$$164$$.$_items$[$j$$121$$])
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($JSCompiler_StaticMethods_applyInitialSelections$self$$.$SelectionHandler$, $JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection, $items$$39$$)
};
D.$DvtTimeline$$.prototype.$processEvent$ = function $$DvtTimeline$$$$$processEvent$$($event$$788$$) {
  $event$$788$$ && this.$__dispatchEvent$($event$$788$$)
};
D.$JSCompiler_StaticMethods__findSeries$$ = function $$JSCompiler_StaticMethods__findSeries$$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$127$$) {
  if($target$$127$$ && $target$$127$$ != $JSCompiler_StaticMethods__findSeries$self$$) {
    var $id$$298$$ = $target$$127$$.getId();
    return $target$$127$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] || 1 < $JSCompiler_StaticMethods__findSeries$self$$.$_series$.length && $target$$127$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] ? $target$$127$$ : $id$$298$$ && "_s0" == $id$$298$$.substring($id$$298$$.length - 3, $id$$298$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] : $id$$298$$ && "_s1" == $id$$298$$.substring($id$$298$$.length - 3, $id$$298$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] : 
    (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods__findSeries$self$$, $target$$127$$.getParent())
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimeline$$.prototype.$_findDrawable$ = function $$DvtTimeline$$$$$_findDrawable$$($grandParent_target$$128$$) {
  if($grandParent_target$$128$$) {
    var $id$$299$$ = $grandParent_target$$128$$.getId();
    if($id$$299$$ && "_duration_" == $id$$299$$.substring(0, 10) && $grandParent_target$$128$$.$_node$) {
      return $grandParent_target$$128$$
    }
    var $parent$$87$$ = $grandParent_target$$128$$.getParent();
    if($parent$$87$$) {
      if($id$$299$$ && "zoom" == $id$$299$$.substring(0, 4)) {
        return $grandParent_target$$128$$
      }
      if($id$$299$$ && "_bubble_" == $id$$299$$.substring(0, 8) && $parent$$87$$.$_node$) {
        return $parent$$87$$
      }
      if($grandParent_target$$128$$ = $parent$$87$$.getParent()) {
        if($id$$299$$ && "_bubble_" == $id$$299$$.substring(0, 8) && $grandParent_target$$128$$.$_node$) {
          return $grandParent_target$$128$$
        }
        if(($id$$299$$ = $grandParent_target$$128$$.getId()) && "_bubble_" == $id$$299$$.substring(0, 8) && $grandParent_target$$128$$.getParent()) {
          return $grandParent_target$$128$$.getParent()
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimeline$$.prototype.$getAutomation$ = function $$DvtTimeline$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtTimelineAutomation$$(this));
  return this.$Automation$
};
D.$DvtTimeline$$.prototype.getAutomation = D.$DvtTimeline$$.prototype.$getAutomation$;
D.$DvtTimeline$$.prototype.$isVertical$ = (0,D.$JSCompiler_get$$)("$_isVertical$");
D.$DvtTimeline$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtTimelineAutomation$$ = (0,D.$JSCompiler_set$$)("$_timeline$");
(0,D.$goog$exportPath_$$)("DvtTimelineAutomation", D.$DvtTimelineAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineAutomation$$, D.$DvtAutomation$$, "DvtTimelineAutomation");
D.$DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($displayable$$99_logicalObj$$19$$) {
  if(($displayable$$99_logicalObj$$19$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_timeline$.$EventManager$, $displayable$$99_logicalObj$$19$$)) && $displayable$$99_logicalObj$$19$$ instanceof D.$DvtTimelineSeriesNode$$) {
    for(var $i$$855$$ = 0;$i$$855$$ < this.$_timeline$.$_series$.length;$i$$855$$++) {
      var $itemIndex$$11$$ = this.$_timeline$.$_series$[$i$$855$$].$_items$.indexOf($displayable$$99_logicalObj$$19$$);
      if(-1 != $itemIndex$$11$$) {
        return"timelineItem[" + $i$$855$$ + "][" + $itemIndex$$11$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($series$$28_subId$$26$$) {
  if($series$$28_subId$$26$$) {
    var $parenIndex$$ = $series$$28_subId$$26$$.indexOf("[");
    if(0 < $parenIndex$$ && "timelineItem" === $series$$28_subId$$26$$.substring(0, $parenIndex$$)) {
      var $endParenIndex$$ = $series$$28_subId$$26$$.indexOf("]");
      if(0 < $endParenIndex$$) {
        var $itemIndex$$12_node$$303$$ = (0,window.parseInt)($series$$28_subId$$26$$.substring($endParenIndex$$ + 2, $series$$28_subId$$26$$.length - 1));
        if($series$$28_subId$$26$$ = this.$_timeline$.$_series$[(0,window.parseInt)($series$$28_subId$$26$$.substring($parenIndex$$ + 1, $endParenIndex$$))]) {
          if($itemIndex$$12_node$$303$$ = $series$$28_subId$$26$$.$_items$[$itemIndex$$12_node$$303$$]) {
            return $itemIndex$$12_node$$303$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineAutomation$$.prototype.getDomElementForSubId = D.$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtTimelineParser$$ = function $$DvtTimelineParser$$$($timeline$$3$$) {
  this.Init($timeline$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineParser$$, D.$DvtTimeComponentParser$$, "DvtTimelineParser");
D.$DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($options$$276_overview$$7$$) {
  this.$_itemSelection$ = $options$$276_overview$$7$$.selectionMode;
  $options$$276_overview$$7$$.viewportStart && (this.$_viewStartTime$ = new window.Date($options$$276_overview$$7$$.viewportStart));
  $options$$276_overview$$7$$.viewportEnd && (this.$_viewEndTime$ = new window.Date($options$$276_overview$$7$$.viewportEnd));
  var $ret$$103$$ = D.$DvtTimelineParser$$.$superclass$.parse.call(this, $options$$276_overview$$7$$), $majorAxis_minorAxis_referenceObjects$$3$$ = $options$$276_overview$$7$$.minorAxis;
  if($majorAxis_minorAxis_referenceObjects$$3$$) {
    var $referenceObjectsValueArray_scale$$75$$ = $majorAxis_minorAxis_referenceObjects$$3$$.scale;
    $ret$$103$$.scale = $referenceObjectsValueArray_scale$$75$$;
    var $i$$874_zoomOrder$$3$$ = $majorAxis_minorAxis_referenceObjects$$3$$.zoomOrder;
    $i$$874_zoomOrder$$3$$ == D.$JSCompiler_alias_NULL$$ ? $i$$874_zoomOrder$$3$$ = [$referenceObjectsValueArray_scale$$75$$] : $i$$874_zoomOrder$$3$$.reverse();
    $ret$$103$$.$zoomOrder$ = $i$$874_zoomOrder$$3$$;
    $ret$$103$$.$converter$ = $majorAxis_minorAxis_referenceObjects$$3$$.converter;
    $ret$$103$$.$axisStyle$ = $majorAxis_minorAxis_referenceObjects$$3$$.style
  }
  if($majorAxis_minorAxis_referenceObjects$$3$$ = $options$$276_overview$$7$$.majorAxis) {
    $ret$$103$$.$seriesScale$ = $majorAxis_minorAxis_referenceObjects$$3$$.scale, $ret$$103$$.$seriesConverter$ = $majorAxis_minorAxis_referenceObjects$$3$$.converter
  }
  $ret$$103$$.$shortDesc$ = $options$$276_overview$$7$$.shortDesc;
  $ret$$103$$.id = $options$$276_overview$$7$$.id;
  $ret$$103$$.orientation = $options$$276_overview$$7$$.orientation;
  if(($majorAxis_minorAxis_referenceObjects$$3$$ = $options$$276_overview$$7$$.referenceObjects) && 0 < $majorAxis_minorAxis_referenceObjects$$3$$.length) {
    $referenceObjectsValueArray_scale$$75$$ = [];
    for($i$$874_zoomOrder$$3$$ = 0;$i$$874_zoomOrder$$3$$ < $majorAxis_minorAxis_referenceObjects$$3$$.length;$i$$874_zoomOrder$$3$$++) {
      $referenceObjectsValueArray_scale$$75$$.push(new window.Date($majorAxis_minorAxis_referenceObjects$$3$$[$i$$874_zoomOrder$$3$$].value))
    }
    $ret$$103$$.$referenceObjects$ = $referenceObjectsValueArray_scale$$75$$
  }
  $options$$276_overview$$7$$ = $options$$276_overview$$7$$.overview;
  $ret$$103$$.$hasOverview$ = $options$$276_overview$$7$$ != D.$JSCompiler_alias_NULL$$ && "on" == $options$$276_overview$$7$$.rendered ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  return $ret$$103$$
};
D.$DvtTimelineParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineParser$$$$$ParseRootAttributes$$() {
  var $ret$$104$$ = D.$DvtTimelineParser$$.$superclass$.$ParseRootAttributes$.call(this);
  $ret$$104$$.start = this.$_startTime$.getTime();
  $ret$$104$$.end = this.$_endTime$.getTime();
  this.$_viewStartTime$ && ($ret$$104$$.$viewStart$ = this.$_viewStartTime$.getTime());
  this.$_viewEndTime$ && ($ret$$104$$.$viewEnd$ = this.$_viewEndTime$.getTime());
  $ret$$104$$.$selectionMode$ = "none";
  this.$_itemSelection$ != D.$JSCompiler_alias_NULL$$ && ($ret$$104$$.$selectionMode$ = this.$_itemSelection$);
  return $ret$$104$$
};
D.$DvtTimelineSeries$$ = function $$DvtTimelineSeries$$$($context$$621$$, $callback$$178$$, $callbackObj$$125$$) {
  this.Init($context$$621$$, $callback$$178$$, $callbackObj$$125$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeries$$, D.$DvtTimeComponent$$, "DvtTimelineSeries");
D.$DvtTimelineSeries$DEFAULT_COLORS_ARRAY$$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeries$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$622$$, $callback$$179$$, $callbackObj$$126$$) {
  D.$DvtTimelineSeries$$.$superclass$.Init.call(this, $context$$622$$, $callback$$179$$, $callbackObj$$126$$);
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$_seriesTicksArray$ = [];
  this.$_itemListeners$ = []
};
D.$JSCompiler_prototypeAlias$$.$startAnimations$ = function $$JSCompiler_prototypeAlias$$$$startAnimations$$() {
  this.$_animatorQueue$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_animatorQueue$.length ? (this.$_animatorQueue$.shift().play(), this.$_animationTimer$ == D.$JSCompiler_alias_NULL$$ && (this.$_animationTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 2500 / this.$_animatorQueue$.length / 2, this.$startAnimations$, this), this.$_animationTimer$.start())) : this.$_animationTimer$ != D.$JSCompiler_alias_NULL$$ && this.$_animationTimer$.stop()
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($desc$$28_width$$173$$, $height$$154_maxRefObjects$$inline_9026$$, $i$$inline_9027_options$$277_orientation$$5$$) {
  this.$_canvas$ = D.$JSCompiler_alias_NULL$$;
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$removeChildren$();
  D.$DvtTimelineSeries$$.$superclass$.$render$.call(this, $desc$$28_width$$173$$, $height$$154_maxRefObjects$$inline_9026$$, $i$$inline_9027_options$$277_orientation$$5$$);
  this.$_isVertical$ = ($i$$inline_9027_options$$277_orientation$$5$$ = this.$Options$.orientation) && "vertical" == $i$$inline_9027_options$$277_orientation$$5$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_fetchStartPos$ = 0;
  this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$154_maxRefObjects$$inline_9026$$, this.$_maxOverflowValue$ = $desc$$28_width$$173$$, this.$_length$ = $height$$154_maxRefObjects$$inline_9026$$, this.$_size$ = $desc$$28_width$$173$$) : (this.$_fetchEndPos$ = $desc$$28_width$$173$$, this.$_maxOverflowValue$ = $height$$154_maxRefObjects$$inline_9026$$, this.$_length$ = $desc$$28_width$$173$$, this.$_size$ = $height$$154_maxRefObjects$$inline_9026$$);
  this.$_isInverted$ = this.$Options$.inverted;
  this.$_maxDurationSize$ = this.$_colorCount$ = 0;
  this.$createBackground$($desc$$28_width$$173$$, $height$$154_maxRefObjects$$inline_9026$$);
  (0,D.$JSCompiler_StaticMethods_renderScrollableCanvas$$)(this);
  if(this.$_referenceObjects$) {
    $height$$154_maxRefObjects$$inline_9026$$ = window.Math.min(1, this.$_referenceObjects$.length);
    for($i$$inline_9027_options$$277_orientation$$5$$ = 0;$i$$inline_9027_options$$277_orientation$$5$$ < $height$$154_maxRefObjects$$inline_9026$$;$i$$inline_9027_options$$277_orientation$$5$$++) {
      var $refObject$$inline_9028$$ = this.$_referenceObjects$[$i$$inline_9027_options$$277_orientation$$5$$];
      if($refObject$$inline_9028$$) {
        var $pos$$inline_9029_ref$$inline_9030$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $refObject$$inline_9028$$, this.$_length$);
        this.$_isVertical$ ? $pos$$inline_9029_ref$$inline_9030$$ = new D.$DvtLine$$(this.$getCtx$(), 0, $pos$$inline_9029_ref$$inline_9030$$, this.$_maxOverflowValue$, $pos$$inline_9029_ref$$inline_9030$$, "zoomOrder[i]") : (this.$isRTL$() && ($pos$$inline_9029_ref$$inline_9030$$ = this.$_length$ - $pos$$inline_9029_ref$$inline_9030$$), $pos$$inline_9029_ref$$inline_9030$$ = new D.$DvtLine$$(this.$getCtx$(), $pos$$inline_9029_ref$$inline_9030$$, 0, $pos$$inline_9029_ref$$inline_9030$$, this.$_maxOverflowValue$, 
        "zoomOrder[i]"));
        var $referenceObjectStroke$$inline_9031$$ = new D.$DvtSolidStroke$$(this.$_referenceObjectStyle$.$getStyle$("color"));
        $pos$$inline_9029_ref$$inline_9030$$.$setStroke$($referenceObjectStroke$$inline_9031$$);
        (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($pos$$inline_9029_ref$$inline_9030$$);
        $pos$$inline_9029_ref$$inline_9030$$.$date$ = $refObject$$inline_9028$$;
        this.$_canvas$.$addChild$($pos$$inline_9029_ref$$inline_9030$$);
        this.$_renderedReferenceObjects$[$i$$inline_9027_options$$277_orientation$$5$$] = $pos$$inline_9029_ref$$inline_9030$$
      }
    }
  }
  this.$_scale$ && this.$_timeAxis$ && this.$createSeriesTicks$($desc$$28_width$$173$$);
  this.$parseDataXML$();
  (0,D.$JSCompiler_StaticMethods_updateReferenceObjects$$)(this);
  (0,D.$JSCompiler_StaticMethods_updateSeriesTicks$$)(this);
  D.$DvtTimeUtils$$.$supportsTouch$() && 0 < this.$_items$.length && (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)(this, "flowto", "_bt_" + this.$_items$[0].getId());
  if($desc$$28_width$$173$$ = this.$GetComponentDescription$()) {
    D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$getElem$(), "role", "group"), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$getElem$(), "aria-label", D.$DvtStringUtils$$.$processAriaLabel$($desc$$28_width$$173$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  var $seriesDescArray$$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "TIMELINE_SERIES")];
  this.$_label$ ? $seriesDescArray$$.push(this.$_label$) : $seriesDescArray$$.push(this.$Options$.index + 1);
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", $seriesDescArray$$)
};
D.$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new D.$DvtCSSStyle$$("background-color:#f9f9f9;");
  this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
  this.$_itemStyleDefaults$ = this.$Options$.itemStyleDefaults;
  this.$_referenceObjectStyleDefaults$ = this.$Options$.referenceObjectStyleDefaults;
  this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
  this.$_colors$ = D.$DvtTimelineSeries$DEFAULT_COLORS_ARRAY$$;
  this.$_labelStyle$ = new D.$DvtCSSStyle$$("background-color:rgba(249,249,249,0.8);color:#252525;white-space:nowrap;font-size:13px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
  this.$_emptyTextStyle$ = new D.$DvtCSSStyle$$("color:#333333;white-space:nowrap;font-size:12px;font-weight:normal;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
  this.$_referenceObjects$ = this.$Options$.referenceObjects;
  if(this.$_seriesStyleDefaults$) {
    var $style$$115$$ = this.$_seriesStyleDefaults$.backgroundColor;
    $style$$115$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "background-color:" + $style$$115$$ + ";");
    if($style$$115$$ = this.$_seriesStyleDefaults$.colors) {
      this.$_colors$ = $style$$115$$
    }
    ($style$$115$$ = this.$_seriesStyleDefaults$.labelStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_labelStyle$, $style$$115$$);
    ($style$$115$$ = this.$_seriesStyleDefaults$.emptyTextStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_emptyTextStyle$, $style$$115$$)
  }
  this.$_referenceObjectStyleDefaults$ && ($style$$115$$ = this.$_referenceObjectStyleDefaults$.color) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_referenceObjectStyle$, "color:" + $style$$115$$ + ";");
  D.$DvtTimeline$$.$superclass$.$applyStyleValues$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = (0,D.$JSCompiler_set$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$createSeriesTicks$ = function $$JSCompiler_prototypeAlias$$$$createSeriesTicks$$($width$$176$$) {
  var $separatorStroke$$1_separatorStyle$$1$$ = new D.$DvtCSSStyle$$("color:#bcc7d2");
  if(this.$_axisStyleDefaults$) {
    var $separatorColor$$1$$ = this.$_axisStyleDefaults$.separatorColor;
    $separatorColor$$1$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($separatorStroke$$1_separatorStyle$$1$$, "color:" + $separatorColor$$1$$ + ";")
  }
  $separatorStroke$$1_separatorStyle$$1$$ = new D.$DvtSolidStroke$$($separatorStroke$$1_separatorStyle$$1$$.$getStyle$("color"));
  $separatorStroke$$1_separatorStyle$$1$$.$setStyle$(1, 3);
  this.$_seriesTicks$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$renderSeriesTimeAxis$(this.$_fetchStartPos$, this.$_fetchEndPos$, this.$_seriesTicks$, "o_", $width$$176$$, $separatorStroke$$1_separatorStyle$$1$$);
  this.$_canvas$.$addChild$(this.$_seriesTicks$)
};
D.$JSCompiler_prototypeAlias$$.$renderSeriesTimeAxis$ = function $$JSCompiler_prototypeAlias$$$$renderSeriesTimeAxis$$($current$$11_startDate$$3_startPos$$6$$, $endPos$$9$$, $container$$197$$, $prefix$$7$$, $start$$53_width$$177$$, $stroke$$121$$) {
  $start$$53_width$$177$$ = this.$_start$;
  var $end$$37$$ = this.$_end$;
  $current$$11_startDate$$3_startPos$$6$$ = D.$DvtTimeUtils$$.$getPositionDate$($start$$53_width$$177$$, $end$$37$$, $current$$11_startDate$$3_startPos$$6$$, this.$_length$);
  var $adjustedStartDate$$2_next$$21$$ = this.$_timeAxis$.$adjustDate$($current$$11_startDate$$3_startPos$$6$$);
  $current$$11_startDate$$3_startPos$$6$$ = new window.Date($current$$11_startDate$$3_startPos$$6$$);
  for(var $currentPos$$3_tickElem$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$53_width$$177$$, $end$$37$$, $adjustedStartDate$$2_next$$21$$, this.$_length$);$currentPos$$3_tickElem$$1$$ < $endPos$$9$$;) {
    var $adjustedStartDate$$2_next$$21$$ = this.$_timeAxis$.$getNextDate$(this.$_timeAxis$.$adjustDate$($current$$11_startDate$$3_startPos$$6$$)), $next_time_pos$$3$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$53_width$$177$$, $end$$37$$, $adjustedStartDate$$2_next$$21$$, this.$_length$), $pos$$76_y2$$44$$ = !this.$_isVertical$ && this.$isRTL$() ? this.$_length$ - $currentPos$$3_tickElem$$1$$ : $currentPos$$3_tickElem$$1$$;
    if(this.$_isVertical$) {
      var $x1$$57$$ = 0, $y1$$47$$ = $pos$$76_y2$$44$$, $x2$$54$$ = this.$_maxOverflowValue$
    }else {
      $x1$$57$$ = $pos$$76_y2$$44$$, $y1$$47$$ = 0, $x2$$54$$ = $pos$$76_y2$$44$$, $pos$$76_y2$$44$$ = this.$_maxOverflowValue$
    }
    $currentPos$$3_tickElem$$1$$ = this.$addTick$($container$$197$$, $x1$$57$$, $x2$$54$$, $y1$$47$$, $pos$$76_y2$$44$$, $stroke$$121$$, $prefix$$7$$ + "tick" + $currentPos$$3_tickElem$$1$$);
    $currentPos$$3_tickElem$$1$$.time = $current$$11_startDate$$3_startPos$$6$$.getTime();
    this.$_seriesTicksArray$.push($currentPos$$3_tickElem$$1$$);
    $current$$11_startDate$$3_startPos$$6$$ = $adjustedStartDate$$2_next$$21$$;
    $currentPos$$3_tickElem$$1$$ = $next_time_pos$$3$$
  }
};
D.$JSCompiler_prototypeAlias$$.$createBackground$ = function $$JSCompiler_prototypeAlias$$$$createBackground$$($width$$178$$, $height$$156$$) {
  this.$_background$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$178$$, $height$$156$$, "bg");
  this.$_background$.$setCSSStyle$(this.$_style$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_background$);
  this.$_background$.setCursor("move");
  this.$addChild$(this.$_background$)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$279$$) {
  this.$_parser$ = new D.$DvtTimelineSeriesParser$$(this);
  return this.$_parser$.parse($options$$279$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$15$$) {
  this.$_isEmpty$ = (this.$_items$ = $props$$15$$.$items$) && 0 < this.$_items$.length ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_defaultStyles$ = $props$$15$$.$defaultStyles$;
  this.$_itemTitleStyle$ = $props$$15$$.$itemTitleStyle$;
  this.$_itemDescriptionStyle$ = $props$$15$$.$itemDescriptionStyle$;
  this.$_referenceObjectStyle$ = $props$$15$$.$referenceObjectStyle$;
  this.$_label$ = $props$$15$$.label;
  this.$_timeAxis$ = $props$$15$$.$timeAxis$;
  this.$_emptyText$ = $props$$15$$.$emptyText$;
  this.$_emptyText$ == D.$JSCompiler_alias_NULL$$ && (this.$_emptyText$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  D.$DvtTimelineSeries$$.$superclass$.$_applyParsedProperties$.call(this, $props$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$() {
  if(!(this.$_items$ == D.$JSCompiler_alias_NULL$$ || 0 == this.$_items$.length)) {
    if(this.$_animatorQueue$ != D.$JSCompiler_alias_NULL$$) {
      for(var $block$$inline_9069_i$$inline_9063$$ = 0;$block$$inline_9069_i$$inline_9063$$ < this.$_animatorQueue$.length;$block$$inline_9069_i$$inline_9063$$++) {
        this.$_animatorQueue$[$block$$inline_9069_i$$inline_9063$$].stop(D.$JSCompiler_alias_TRUE$$)
      }
    }
    this.$_animationTimer$ != D.$JSCompiler_alias_NULL$$ && this.$_animationTimer$.stop();
    delete this.$_animatorQueue$;
    delete this.$_animationTimer$;
    var $durationBlock$$inline_11675_startPos$$inline_9066$$ = this.$_fetchStartPos$, $context$$inline_11676_endPos$$inline_9067$$ = this.$_fetchEndPos$, $block$$inline_9069_i$$inline_9063$$ = new D.$DvtContainer$$(this.$getCtx$(), "itemBlock_" + $durationBlock$$inline_11675_startPos$$inline_9066$$ + "_" + $context$$inline_11676_endPos$$inline_9067$$);
    $block$$inline_9069_i$$inline_9063$$.$startPos$ = $durationBlock$$inline_11675_startPos$$inline_9066$$;
    $block$$inline_9069_i$$inline_9063$$.$endPos$ = $context$$inline_11676_endPos$$inline_9067$$;
    this.$prepareDurations$(this.$_items$);
    this.$_initialSpacing$ = this.$_isVertical$ ? 20 * (0 < this.$_maxDurationSize$ ? 1 : 0) + 15 + 10 * this.$_maxDurationSize$ : 35 + 10 * this.$_maxDurationSize$;
    this.$_layoutItems$ = [];
    for(var $i$$inline_9070_j$$inline_11679_k$$inline_9077$$ = 0;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$ < this.$_items$.length;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$++) {
      var $isRTL$$inline_11677_item$$inline_9071$$ = this.$_items$[$i$$inline_9070_j$$inline_11679_k$$inline_9077$$], $i$$inline_11678_loc$$inline_9072$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $isRTL$$inline_11677_item$$inline_9071$$.$_startTime$, this.$_length$), $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ = $isRTL$$inline_11677_item$$inline_9071$$.$_endTime$;
      $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ && $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ != $isRTL$$inline_11677_item$$inline_9071$$.$_startTime$ && ($add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$, this.$_length$) - $i$$inline_11678_loc$$inline_9072$$, 
      $i$$inline_11678_loc$$inline_9072$$ += window.Math.min(10, $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ / 2));
      $isRTL$$inline_11677_item$$inline_9071$$.$_loc$ = $i$$inline_11678_loc$$inline_9072$$;
      for(var $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ = D.$JSCompiler_alias_TRUE$$, $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ = 0;$durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ < this.$_layoutItems$.length;$durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$++) {
        if($i$$inline_11678_loc$$inline_9072$$ < this.$_layoutItems$[$durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$].$_loc$) {
          this.$_layoutItems$.splice($durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$, 0, $isRTL$$inline_11677_item$$inline_9071$$);
          $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ = D.$JSCompiler_alias_FALSE$$;
          break
        }
      }
      $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ && this.$_layoutItems$.push($isRTL$$inline_11677_item$$inline_9071$$)
    }
    for($i$$inline_9070_j$$inline_11679_k$$inline_9077$$ = 0;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$ < this.$_layoutItems$.length;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$++) {
      $isRTL$$inline_11677_item$$inline_9071$$ = this.$_layoutItems$[$i$$inline_9070_j$$inline_11679_k$$inline_9077$$], $i$$inline_11678_loc$$inline_9072$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $isRTL$$inline_11677_item$$inline_9071$$.$_startTime$, this.$_length$), $i$$inline_11678_loc$$inline_9072$$ < $durationBlock$$inline_11675_startPos$$inline_9066$$ || $i$$inline_11678_loc$$inline_9072$$ > $context$$inline_11676_endPos$$inline_9067$$ || this.$addItem$($block$$inline_9069_i$$inline_9063$$, 
      $block$$inline_9069_i$$inline_9063$$.$feelers$, $block$$inline_9069_i$$inline_9063$$.$durations$, $isRTL$$inline_11677_item$$inline_9071$$, D.$JSCompiler_alias_VOID$$)
    }
    if(D.$DvtTimeUtils$$.$supportsTouch$()) {
      for($i$$inline_9070_j$$inline_11679_k$$inline_9077$$ = 0;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$ < this.$_layoutItems$.length - 1;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$++) {
        $isRTL$$inline_11677_item$$inline_9071$$ = this.$_layoutItems$[$i$$inline_9070_j$$inline_11679_k$$inline_9077$$], (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)($isRTL$$inline_11677_item$$inline_9071$$.$_displayable$, "flowto", "_bt_" + this.$_layoutItems$[$i$$inline_9070_j$$inline_11679_k$$inline_9077$$ + 1].getId())
      }
    }
    $durationBlock$$inline_11675_startPos$$inline_9066$$ = $block$$inline_9069_i$$inline_9063$$.$durations$;
    $context$$inline_11676_endPos$$inline_9067$$ = this.$getCtx$();
    $isRTL$$inline_11677_item$$inline_9071$$ = this.$isRTL$();
    for($i$$inline_11678_loc$$inline_9072$$ = this.$_maxDurationSize$;0 < $i$$inline_11678_loc$$inline_9072$$;$i$$inline_11678_loc$$inline_9072$$--) {
      for($i$$inline_9070_j$$inline_11679_k$$inline_9077$$ = 0;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$ < this.$_items$.length;$i$$inline_9070_j$$inline_11679_k$$inline_9077$$++) {
        var $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$ = this.$_items$[$i$$inline_9070_j$$inline_11679_k$$inline_9077$$], $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ = $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.$_startTime$, $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ = $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.$_endTime$;
        if($endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ && $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ != $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ && $i$$inline_11678_loc$$inline_9072$$ == $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.$_durationLevel$) {
          var $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$, this.$_length$), $duration$$inline_11687_durationId$$inline_11684$$ = "_duration_" + $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.getId(), $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ = 22 + 10 * $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.$_durationLevel$, 
          $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$, this.$_length$);
          this.$_isVertical$ ? ($duration$$inline_11687_durationId$$inline_11684$$ = !$isRTL$$inline_11677_item$$inline_9071$$ && !this.$_isInverted$ || $isRTL$$inline_11677_item$$inline_9071$$ && this.$_isInverted$ ? new D.$DvtRect$$($context$$inline_11676_endPos$$inline_9067$$, this.$_size$ - $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ + 5, $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$, 
          $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ - $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, $duration$$inline_11687_durationId$$inline_11684$$) : new D.$DvtRect$$($context$$inline_11676_endPos$$inline_9067$$, -5, $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$, $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ - 
          $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, $duration$$inline_11687_durationId$$inline_11684$$), $duration$$inline_11687_durationId$$inline_11684$$.$setY$($feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$), $duration$$inline_11687_durationId$$inline_11684$$.$setWidth$($durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$), $duration$$inline_11687_durationId$$inline_11684$$.$setHeight$($endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ - 
          $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$)) : ($endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ -= $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$ = $isRTL$$inline_11677_item$$inline_9071$$ ? this.$_length$ - $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$ - 
          $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ : $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, $duration$$inline_11687_durationId$$inline_11684$$ = this.$_isInverted$ ? new D.$DvtRect$$($context$$inline_11676_endPos$$inline_9067$$, $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, -5, $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$, 
          $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$, $duration$$inline_11687_durationId$$inline_11684$$) : new D.$DvtRect$$($context$$inline_11676_endPos$$inline_9067$$, $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$, this.$_size$ - $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ + 5, $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$, $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$, 
          $duration$$inline_11687_durationId$$inline_11684$$));
          (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($duration$$inline_11687_durationId$$inline_11684$$, 5);
          $duration$$inline_11687_durationId$$inline_11684$$.$setSolidFill$($add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.$_durationFillColor$);
          $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$ = this.$getStyle$("enfw");
          $endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$ = this.$getStyle$("enfc");
          $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$ = new D.$DvtSolidStroke$$($endLoc$$inline_11686_endTime$$inline_11682_feelerColor$$inline_11691_width$$inline_11688$$, 1, $feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$);
          $duration$$inline_11687_durationId$$inline_11684$$.$setStroke$($feelerStroke$$inline_11692_feelerWidth$$inline_11690_loc$$inline_11683_transX$$inline_11689$$);
          $duration$$inline_11687_durationId$$inline_11684$$.$_node$ = $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$;
          this.$_callbackObj$.$EventManager$.$associate$($duration$$inline_11687_durationId$$inline_11684$$, $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$);
          $durationBlock$$inline_11675_startPos$$inline_9066$$.$addChild$($duration$$inline_11687_durationId$$inline_11684$$);
          $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.$_durationBar$ = $duration$$inline_11687_durationId$$inline_11684$$;
          $add$$inline_9075_endTime$$inline_9073_node$$inline_11680_span$$inline_9074$$.$_durationSize$ = $durationSize$$inline_11685_j$$inline_9076_startTime$$inline_11681$$ - 5
        }
      }
    }
    this.$_canvas$.$addChild$($block$$inline_9069_i$$inline_9063$$);
    this.$_blocks$.push($block$$inline_9069_i$$inline_9063$$);
    this.$_isVertical$ || (0,D.$JSCompiler_StaticMethods_adjustFeelers$$)(this);
    this.$_isInverted$ || ((0,D.$JSCompiler_StaticMethods_adjustDurations$$)(this), (0,D.$JSCompiler_StaticMethods_adjustItems$$)(this));
    (0,D.$JSCompiler_StaticMethods_adjustBackground$$)(this);
    this.$startAnimations$()
  }
};
D.$JSCompiler_StaticMethods_adjustBackground$$ = function $$JSCompiler_StaticMethods_adjustBackground$$$($JSCompiler_StaticMethods_adjustBackground$self$$) {
  if($JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustBackground$self$$.$_size$) {
    $JSCompiler_StaticMethods_adjustBackground$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setWidth$($JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$) : $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setHeight$($JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$);
    var $sizeDiff$$ = $JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustBackground$self$$.$_size$
  }else {
    $sizeDiff$$ = 0
  }
  $JSCompiler_StaticMethods_adjustBackground$self$$.$_isVertical$ ? (!$JSCompiler_StaticMethods_adjustBackground$self$$.$_isInverted$ && !$JSCompiler_StaticMethods_adjustBackground$self$$.$isRTL$() || $JSCompiler_StaticMethods_adjustBackground$self$$.$_isInverted$ && $JSCompiler_StaticMethods_adjustBackground$self$$.$isRTL$()) && $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setTranslateX$(-$sizeDiff$$) : $JSCompiler_StaticMethods_adjustBackground$self$$.$_isInverted$ || $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setTranslateY$(-$sizeDiff$$)
};
D.$JSCompiler_StaticMethods_calculateSpacing$$ = function $$JSCompiler_StaticMethods_calculateSpacing$$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$61$$, $index$$250$$) {
  if(!($JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$ == D.$JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$.length)) {
    var $x$$297$$ = $item$$61$$.$_loc$, $y$$265$$ = $item$$61$$.$_spacing$;
    $y$$265$$ == D.$JSCompiler_alias_NULL$$ && ($y$$265$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
    var $maxOverflowValue$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$;
    if($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isVertical$) {
      for($i$$879$$ = 0;$i$$879$$ < $index$$250$$;$i$$879$$++) {
        $currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$879$$], $currWidth$$ = $currItem$$1_curry$$1$$.getWidth() + 10, $maxOverflowValue$$ < $y$$265$$ + $currWidth$$ && ($maxOverflowValue$$ = $y$$265$$ + $currWidth$$)
      }
    }else {
      for(var $i$$879$$ = 0;$i$$879$$ < $index$$250$$;$i$$879$$++) {
        var $currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$879$$], $currWidth$$ = $currItem$$1_curry$$1$$.getWidth() + 10, $currHeight$$ = $currItem$$1_curry$$1$$.getHeight();
        if($currItem$$1_curry$$1$$.$_loc$ != D.$JSCompiler_alias_NULL$$ && $currItem$$1_curry$$1$$ != $item$$61$$) {
          var $currx$$ = $currItem$$1_curry$$1$$.$_loc$;
          $currx$$ == D.$JSCompiler_alias_NULL$$ && ($currx$$ = 0);
          $currItem$$1_curry$$1$$ = $currItem$$1_curry$$1$$.$_spacing$;
          $currItem$$1_curry$$1$$ == D.$JSCompiler_alias_NULL$$ && ($currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
          $x$$297$$ >= $currx$$ && ($x$$297$$ <= $currx$$ + $currWidth$$ && $y$$265$$ >= $currItem$$1_curry$$1$$ && $y$$265$$ <= $currItem$$1_curry$$1$$ + $currHeight$$) && ($y$$265$$ = $currItem$$1_curry$$1$$ + $currHeight$$ + 15, $item$$61$$.$_spacing$ = $y$$265$$, $y$$265$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$61$$, $index$$250$$))
        }
        $maxOverflowValue$$ < $y$$265$$ + $currHeight$$ && ($maxOverflowValue$$ = $y$$265$$ + $currHeight$$)
      }
    }
    $maxOverflowValue$$ > $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $maxOverflowValue$$ + 15);
    return $y$$265$$
  }
};
D.$JSCompiler_StaticMethods_calculateDurationSize$$ = function $$JSCompiler_StaticMethods_calculateDurationSize$$$($JSCompiler_StaticMethods_calculateDurationSize$self$$, $item$$62$$, $index$$251$$) {
  if(!($JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$ == D.$JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$.length)) {
    var $startTime$$9$$ = $item$$62$$.$_startTime$, $endTime$$10_y$$266$$ = $item$$62$$.$_endTime$;
    if($endTime$$10_y$$266$$ && $endTime$$10_y$$266$$ != $startTime$$9$$) {
      $endTime$$10_y$$266$$ = $item$$62$$.$_durationLevel$;
      $endTime$$10_y$$266$$ == D.$JSCompiler_alias_NULL$$ && ($endTime$$10_y$$266$$ = 1);
      for(var $i$$880$$ = 0;$i$$880$$ < $index$$251$$;$i$$880$$++) {
        var $currItem$$2_curry$$2$$ = $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$[$i$$880$$];
        if($currItem$$2_curry$$2$$ != $item$$62$$) {
          var $currStartTime$$1$$ = $currItem$$2_curry$$2$$.$_startTime$, $currEndTime$$1$$ = $currItem$$2_curry$$2$$.$_endTime$;
          $currEndTime$$1$$ && $currEndTime$$1$$ != $currStartTime$$1$$ && ($currItem$$2_curry$$2$$ = $currItem$$2_curry$$2$$.$_durationLevel$, $currItem$$2_curry$$2$$ == D.$JSCompiler_alias_NULL$$ && ($currItem$$2_curry$$2$$ = 1), $startTime$$9$$ >= $currStartTime$$1$$ && ($startTime$$9$$ <= $currEndTime$$1$$ && $endTime$$10_y$$266$$ == $currItem$$2_curry$$2$$) && ($endTime$$10_y$$266$$ = $currItem$$2_curry$$2$$ + 1, $item$$62$$.$_durationLevel$ = $endTime$$10_y$$266$$, $endTime$$10_y$$266$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationSize$$)($JSCompiler_StaticMethods_calculateDurationSize$self$$, 
          $item$$62$$, $index$$251$$)))
        }
      }
      $endTime$$10_y$$266$$ > $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ && ($JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ = $endTime$$10_y$$266$$);
      return $endTime$$10_y$$266$$
    }
  }
};
D.$DvtTimelineSeries$$.prototype.$prepareDurations$ = function $$DvtTimelineSeries$$$$$prepareDurations$$() {
  for(var $i$$881$$ = 0;$i$$881$$ < this.$_items$.length;$i$$881$$++) {
    var $node$$311$$ = this.$_items$[$i$$881$$], $durationLevel$$inline_9086_startTime$$10$$ = $node$$311$$.$_startTime$, $endTime$$11$$ = $node$$311$$.$_endTime$;
    $endTime$$11$$ && $endTime$$11$$ != $durationLevel$$inline_9086_startTime$$10$$ && ($durationLevel$$inline_9086_startTime$$10$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationSize$$)(this, $node$$311$$, this.$_items$.length), $node$$311$$.$_durationLevel$ = $durationLevel$$inline_9086_startTime$$10$$, $node$$311$$.$_durationFillColor$ == D.$JSCompiler_alias_NULL$$ && ($node$$311$$.$_durationFillColor$ = this.$_colors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_colors$.length && 
    (this.$_colorCount$ = 0)))
  }
};
D.$JSCompiler_StaticMethods_updateReferenceObjects$$ = function $$JSCompiler_StaticMethods_updateReferenceObjects$$$($JSCompiler_StaticMethods_updateReferenceObjects$self$$) {
  for(var $i$$883$$ = 0;$i$$883$$ < $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_renderedReferenceObjects$.length;$i$$883$$++) {
    var $ref$$3$$ = $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_renderedReferenceObjects$[$i$$883$$], $pos$$78$$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_start$, $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_end$, $ref$$3$$.$date$, $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_length$);
    $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_isVertical$ ? ($ref$$3$$.$setX1$(0), $ref$$3$$.$setY1$($pos$$78$$), $ref$$3$$.$setX2$($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_maxOverflowValue$), $ref$$3$$.$setY2$($pos$$78$$)) : ($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$isRTL$() && ($pos$$78$$ = $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_length$ - $pos$$78$$), $ref$$3$$.$setX1$($pos$$78$$), $ref$$3$$.$setY1$(0), $ref$$3$$.$setX2$($pos$$78$$), 
    $ref$$3$$.$setY2$($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_maxOverflowValue$))
  }
};
D.$JSCompiler_StaticMethods_updateSeriesTicks$$ = function $$JSCompiler_StaticMethods_updateSeriesTicks$$$($JSCompiler_StaticMethods_updateSeriesTicks$self$$) {
  for(var $i$$884$$ = 0;$i$$884$$ < $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_seriesTicksArray$.length;$i$$884$$++) {
    var $tick$$ = $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_seriesTicksArray$[$i$$884$$], $pos$$79$$ = !$JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_isVertical$ && $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$isRTL$() ? $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_length$ - D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_start$, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_end$, $tick$$.time, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_length$) : 
    D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_start$, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_end$, $tick$$.time, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_length$);
    $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_isVertical$ ? ($tick$$.$setX1$(0), $tick$$.$setY1$($pos$$79$$), $tick$$.$setX2$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_maxOverflowValue$), $tick$$.$setY2$($pos$$79$$)) : ($tick$$.$setX1$($pos$$79$$), $tick$$.$setY1$(0), $tick$$.$setX2$($pos$$79$$), $tick$$.$setY2$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_maxOverflowValue$))
  }
};
D.$DvtTimelineSeries$$.prototype.$addItem$ = function $$DvtTimelineSeries$$$$$addItem$$($animator$$134_block$$3$$, $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$, $durationBlock$$1_loc$$4$$, $node$$312$$, $animate$$3$$) {
  var $context$$624$$ = this.$getCtx$(), $bubbleContainer_nodeId$$145$$ = $node$$312$$.getId(), $isRTL$$47_transX$$9$$ = this.$isRTL$();
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ == D.$JSCompiler_alias_NULL$$ && ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = new D.$DvtContainer$$($context$$624$$, "feelers"), $animator$$134_block$$3$$.$addChild$($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$), $animator$$134_block$$3$$.$feelers$ = $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$);
  $durationBlock$$1_loc$$4$$ == D.$JSCompiler_alias_NULL$$ && ($durationBlock$$1_loc$$4$$ = new D.$DvtContainer$$($context$$624$$, "durations"), $animator$$134_block$$3$$.$addChild$($durationBlock$$1_loc$$4$$), $animator$$134_block$$3$$.$durations$ = $durationBlock$$1_loc$$4$$);
  $durationBlock$$1_loc$$4$$ = $node$$312$$.$_loc$;
  var $spacing$$3_transY$$1$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)(this, $node$$312$$, this.$_items$.length);
  $node$$312$$.$_spacing$ = $spacing$$3_transY$$1$$;
  $node$$312$$.$getStyle$();
  var $context$$inline_9096_nodeHeight$$7$$ = this.$getCtx$(), $isRTL$$inline_9097$$ = this.$isRTL$(), $startOffset$$3_title$$inline_9098_width$$inline_9104$$ = $node$$312$$.$getTitle$(), $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$ = $node$$312$$.$_desc$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ = $node$$312$$.$_thumbnail$, $container$$inline_9101$$ = new D.$DvtContainer$$($context$$inline_9096_nodeHeight$$7$$), $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = 
  0, $offsetY$$inline_9103$$ = 0;
  if($isRTL$$inline_9097$$) {
    $startOffset$$3_title$$inline_9098_width$$inline_9104$$ != D.$JSCompiler_alias_NULL$$ && ($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ = new D.$DvtOutputText$$(this.$getCtx$(), $startOffset$$3_title$$inline_9098_width$$inline_9104$$, 0, $offsetY$$inline_9103$$), $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$setCSSStyle$(this.$_itemTitleStyle$), $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$measureDimensions$().$w$ + 
    2, $offsetY$$inline_9103$$ = 15, $container$$inline_9101$$.$addChild$($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$)), $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$ != D.$JSCompiler_alias_NULL$$ && ($desc$$inline_9099_descText$$inline_9107_endOffset$$4$$ = new D.$DvtOutputText$$(this.$getCtx$(), $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, 0, $offsetY$$inline_9103$$), $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$.$setCSSStyle$(this.$_itemDescriptionStyle$), 
    $startOffset$$3_title$$inline_9098_width$$inline_9104$$ = $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$.$measureDimensions$().$w$ + 2, 0 != $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ && $startOffset$$3_title$$inline_9098_width$$inline_9104$$ != $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ ? $startOffset$$3_title$$inline_9098_width$$inline_9104$$ > $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ ? ($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$setX$($startOffset$$3_title$$inline_9098_width$$inline_9104$$ - 
    $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$), $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = $startOffset$$3_title$$inline_9098_width$$inline_9104$$) : $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$.$setX$($feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ - $startOffset$$3_title$$inline_9098_width$$inline_9104$$) : $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = $startOffset$$3_title$$inline_9098_width$$inline_9104$$, 
    $container$$inline_9101$$.$addChild$($desc$$inline_9099_descText$$inline_9107_endOffset$$4$$)), $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ != D.$JSCompiler_alias_NULL$$ && ($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ = new D.$DvtImage$$($context$$inline_9096_nodeHeight$$7$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, 0, 32, 32, "_tn"), 
    $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $container$$inline_9101$$.$addChild$($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$))
  }else {
    if($bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ != D.$JSCompiler_alias_NULL$$) {
      var $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ = new D.$DvtImage$$($context$$inline_9096_nodeHeight$$7$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$, 0, 0, 32, 32, "_tn");
      $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      $container$$inline_9101$$.$addChild$($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$);
      $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = 34
    }
    $startOffset$$3_title$$inline_9098_width$$inline_9104$$ != D.$JSCompiler_alias_NULL$$ && ($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ = new D.$DvtOutputText$$(this.$getCtx$(), $startOffset$$3_title$$inline_9098_width$$inline_9104$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $offsetY$$inline_9103$$), $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$setCSSStyle$(this.$_itemTitleStyle$), $offsetY$$inline_9103$$ = 15, $container$$inline_9101$$.$addChild$($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$));
    $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$ != D.$JSCompiler_alias_NULL$$ && ($desc$$inline_9099_descText$$inline_9107_endOffset$$4$$ = new D.$DvtOutputText$$(this.$getCtx$(), $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $offsetY$$inline_9103$$), $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$.$setCSSStyle$(this.$_itemDescriptionStyle$), $container$$inline_9101$$.$addChild$($desc$$inline_9099_descText$$inline_9107_endOffset$$4$$))
  }
  this.$addChild$($container$$inline_9101$$);
  $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ = $container$$inline_9101$$.$getDimensions$();
  this.removeChild($container$$inline_9101$$);
  $node$$312$$.$setWidth$($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$w$ + 10);
  $node$$312$$.$setHeight$($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$.$h$ + 10);
  $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ = $node$$312$$.getWidth();
  $context$$inline_9096_nodeHeight$$7$$ = $node$$312$$.getHeight();
  $animate$$3$$ == D.$JSCompiler_alias_VOID$$ && ($animate$$3$$ = D.$JSCompiler_alias_FALSE$$);
  if(!this.$_isVertical$) {
    if(this.$_isInverted$) {
      $feeler$$2_feelerY$$1$$ = 0, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ = $spacing$$3_transY$$1$$
    }else {
      var $feeler$$2_feelerY$$1$$ = this.$Height$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ = this.$Height$ - $spacing$$3_transY$$1$$
    }
    $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = $isRTL$$47_transX$$9$$ ? this.$_length$ - $durationBlock$$1_loc$$4$$ : $durationBlock$$1_loc$$4$$;
    $feeler$$2_feelerY$$1$$ = new D.$DvtLine$$($context$$624$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $feeler$$2_feelerY$$1$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$, "_feeler_" + $bubbleContainer_nodeId$$145$$);
    $animate$$3$$ && $feeler$$2_feelerY$$1$$.$setAlpha$(0);
    $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$.$addChild$($feeler$$2_feelerY$$1$$);
    $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = this.$getStyle$("enfw");
    $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ = this.$getStyle$("enfc");
    $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = new D.$DvtSolidStroke$$($bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$, 1, $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$);
    $feeler$$2_feelerY$$1$$.$setStroke$($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$);
    $feeler$$2_feelerY$$1$$.$_node$ = $node$$312$$
  }
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ = "_bubble_" + $bubbleContainer_nodeId$$145$$;
  this.$_isVertical$ ? ($feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = $context$$inline_9096_nodeHeight$$7$$ / 2, $startOffset$$3_title$$inline_9098_width$$inline_9104$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ - 6, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ + 6, !$isRTL$$47_transX$$9$$ && this.$_isInverted$ || $isRTL$$47_transX$$9$$ && !this.$_isInverted$ ? ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = 
  [0, 0, 0, $startOffset$$3_title$$inline_9098_width$$inline_9104$$, -6, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, 0, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, 0, $context$$inline_9096_nodeHeight$$7$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, $context$$inline_9096_nodeHeight$$7$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, 0, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = [2, 
  2, 2, $startOffset$$3_title$$inline_9098_width$$inline_9104$$, -4, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, 2, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, 2, $context$$inline_9096_nodeHeight$$7$$ - 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, $context$$inline_9096_nodeHeight$$7$$ - 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, 2, 2, 2]) : ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = 
  [0, 0, 0, $context$$inline_9096_nodeHeight$$7$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, $context$$inline_9096_nodeHeight$$7$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ + 6, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, 
  $startOffset$$3_title$$inline_9098_width$$inline_9104$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, 0, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = [2, 2, 2, $context$$inline_9096_nodeHeight$$7$$ - 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, $context$$inline_9096_nodeHeight$$7$$ - 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, 
  $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ + 4, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, $startOffset$$3_title$$inline_9098_width$$inline_9104$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, 2, 2, 2])) : ($feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = $isRTL$$47_transX$$9$$ ? $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 
  20 : 20, $startOffset$$3_title$$inline_9098_width$$inline_9104$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ - 6, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ + 6, this.$_isInverted$ ? ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = [0, 0, $startOffset$$3_title$$inline_9098_width$$inline_9104$$, 0, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, -6, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, 
  0, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, 0, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, $context$$inline_9096_nodeHeight$$7$$, 0, $context$$inline_9096_nodeHeight$$7$$, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = [2, 2, $startOffset$$3_title$$inline_9098_width$$inline_9104$$, 2, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, -4, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 
  2, 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, $context$$inline_9096_nodeHeight$$7$$ - 2, 2, $context$$inline_9096_nodeHeight$$7$$ - 2, 2, 2]) : ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = [0, 0, 0, $context$$inline_9096_nodeHeight$$7$$, $startOffset$$3_title$$inline_9098_width$$inline_9104$$, $context$$inline_9096_nodeHeight$$7$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $context$$inline_9096_nodeHeight$$7$$ + 6, 
  $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, $context$$inline_9096_nodeHeight$$7$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, $context$$inline_9096_nodeHeight$$7$$, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$, 0, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$ = [2, 2, 2, $context$$inline_9096_nodeHeight$$7$$ - 2, $startOffset$$3_title$$inline_9098_width$$inline_9104$$, $context$$inline_9096_nodeHeight$$7$$ - 
  2, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $context$$inline_9096_nodeHeight$$7$$ + 4, $desc$$inline_9099_descText$$inline_9107_endOffset$$4$$, $context$$inline_9096_nodeHeight$$7$$ - 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, $context$$inline_9096_nodeHeight$$7$$ - 2, $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ - 2, 2, 2, 2]));
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$ = new D.$DvtPolygon$$($context$$624$$, $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$);
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ = new D.$DvtPolygon$$($context$$624$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9102$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$ + "_i");
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$.$setSolidFill$(this.$getStyle$("enbc"));
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$.$setStroke$(new D.$DvtSolidStroke$$(this.$getStyle$("enbsc")));
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$.$setSolidFill$("rgba(249,249,249,0)");
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$.$setStroke$(new D.$DvtSolidStroke$$("rgba(249,249,249,0)", 1, 2));
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($container$$inline_9101$$, 5, 5);
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$.$addChild$($bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9100$$);
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$.$addChild$($container$$inline_9101$$);
  $bubbleContainer_nodeId$$145$$ = new D.$DvtTimelineSeriesItem$$($context$$624$$, this.$_defaultStyles$, "_bt_" + $bubbleContainer_nodeId$$145$$);
  $animate$$3$$ && $bubbleContainer_nodeId$$145$$.$setAlpha$(0);
  $bubbleContainer_nodeId$$145$$.$addChild$($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$);
  D.$DvtTimeUtils$$.$supportsTouch$() && D.$DvtToolkitUtils$$.$setAttrNullNS$($bubbleContainer_nodeId$$145$$.$_elem$, "id", $bubbleContainer_nodeId$$145$$.$_id$);
  $bubbleContainer_nodeId$$145$$.$_node$ = $node$$312$$;
  this.$_isVertical$ ? ($spacing$$3_transY$$1$$ = $durationBlock$$1_loc$$4$$ - $context$$inline_9096_nodeHeight$$7$$ / 2, $isRTL$$47_transX$$9$$ = $isRTL$$47_transX$$9$$ && this.$_isInverted$ || !$isRTL$$47_transX$$9$$ && !this.$_isInverted$ ? this.$_size$ - ($dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ + this.$_initialSpacing$) : this.$_initialSpacing$) : ($isRTL$$47_transX$$9$$ = $isRTL$$47_transX$$9$$ ? this.$_length$ - $durationBlock$$1_loc$$4$$ - $dim$$89_nodeWidth$$4_thumbImage$$inline_9105_titleText$$inline_9106$$ + 
  20 : $durationBlock$$1_loc$$4$$ - 20, $spacing$$3_transY$$1$$ = this.$_isInverted$ ? $spacing$$3_transY$$1$$ : this.$Height$ - $spacing$$3_transY$$1$$ - $context$$inline_9096_nodeHeight$$7$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bubbleContainer_nodeId$$145$$, $isRTL$$47_transX$$9$$, $spacing$$3_transY$$1$$);
  0 <= $durationBlock$$1_loc$$4$$ && $animator$$134_block$$3$$.$addChild$($bubbleContainer_nodeId$$145$$);
  $node$$312$$.$_displayable$ = $bubbleContainer_nodeId$$145$$;
  $bubbleContainer_nodeId$$145$$.$setAriaRole$("group");
  $node$$312$$.$_updateAriaLabel$();
  this.$_callbackObj$.$EventManager$.$associate$($bubbleContainer_nodeId$$145$$, $node$$312$$);
  this.$_isVertical$ || ($node$$312$$.$_feeler$ = $feeler$$2_feelerY$$1$$);
  $animate$$3$$ && ($animator$$134_block$$3$$ = new D.$DvtAnimator$$($context$$624$$, 1, 0, D.$DvtEasing$linear$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$134_block$$3$$, "typeNumber", $bubbleContainer_nodeId$$145$$, $bubbleContainer_nodeId$$145$$.$getAlpha$, $bubbleContainer_nodeId$$145$$.$setAlpha$, 1), this.$_isVertical$ || (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$134_block$$3$$, "typeNumber", $feeler$$2_feelerY$$1$$, $feeler$$2_feelerY$$1$$.$getAlpha$, $feeler$$2_feelerY$$1$$.$setAlpha$, 
  1), this.$_animatorQueue$ == D.$JSCompiler_alias_NULL$$ && (this.$_animatorQueue$ = []), this.$_animatorQueue$.push($animator$$134_block$$3$$));
  return $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$122$$
};
D.$DvtTimelineSeries$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$DvtTimelineSeries$$.prototype.$getLabelStyle$ = (0,D.$JSCompiler_get$$)("$_labelStyle$");
D.$DvtTimelineSeries$$.prototype.$getEmptyText$ = (0,D.$JSCompiler_get$$)("$_emptyText$");
D.$JSCompiler_StaticMethods_adjustFeelers$$ = function $$JSCompiler_StaticMethods_adjustFeelers$$$($JSCompiler_StaticMethods_adjustFeelers$self$$) {
  if($JSCompiler_StaticMethods_adjustFeelers$self$$.$_isInverted$) {
    var $durationSign$$ = 1
  }else {
    if($durationSign$$ = -1, $JSCompiler_StaticMethods_adjustFeelers$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustFeelers$self$$.$Height$) {
      for(var $durationSize$$2_heightDiff$$ = $JSCompiler_StaticMethods_adjustFeelers$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustFeelers$self$$.$Height$, $i$$885$$ = 0;$i$$885$$ < $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$.length;$i$$885$$++) {
        var $block$$4_feelers$$ = $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$[$i$$885$$];
        if($block$$4_feelers$$ = $block$$4_feelers$$.$feelers$) {
          for(var $count$$25$$ = $block$$4_feelers$$.$getNumChildren$(), $j$$128$$ = 0;$j$$128$$ < $count$$25$$;$j$$128$$++) {
            var $feeler$$3$$ = $block$$4_feelers$$.$getChildAt$($j$$128$$);
            $feeler$$3$$.$setTranslateY$($feeler$$3$$.$getTranslateY$() + $durationSize$$2_heightDiff$$)
          }
        }
      }
    }
  }
  for($i$$885$$ = 0;$i$$885$$ < $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$.length;$i$$885$$++) {
    $block$$4_feelers$$ = $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$[$i$$885$$];
    $block$$4_feelers$$ = $block$$4_feelers$$.$feelers$;
    $count$$25$$ = $block$$4_feelers$$.$getNumChildren$();
    for($j$$128$$ = 0;$j$$128$$ < $count$$25$$;$j$$128$$++) {
      $feeler$$3$$ = $block$$4_feelers$$.$getChildAt$($j$$128$$), ($durationSize$$2_heightDiff$$ = $feeler$$3$$.$_node$.$_durationSize$) && $feeler$$3$$.$setY1$($feeler$$3$$.$getY1$() + $durationSize$$2_heightDiff$$ * $durationSign$$)
    }
  }
};
D.$JSCompiler_StaticMethods_adjustDurations$$ = function $$JSCompiler_StaticMethods_adjustDurations$$$($JSCompiler_StaticMethods_adjustDurations$self$$) {
  for(var $sizeDiff$$1$$ = $JSCompiler_StaticMethods_adjustDurations$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustDurations$self$$.$_size$ ? $JSCompiler_StaticMethods_adjustDurations$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustDurations$self$$.$_size$ : 0, $i$$886$$ = 0;$i$$886$$ < $JSCompiler_StaticMethods_adjustDurations$self$$.$_blocks$.length;$i$$886$$++) {
    for(var $durations$$ = $JSCompiler_StaticMethods_adjustDurations$self$$.$_blocks$[$i$$886$$].$durations$, $count$$26$$ = $durations$$.$getNumChildren$(), $j$$129$$ = 0;$j$$129$$ < $count$$26$$;$j$$129$$++) {
      var $duration$$110$$ = $durations$$.$getChildAt$($j$$129$$);
      $JSCompiler_StaticMethods_adjustDurations$self$$.$_isVertical$ ? $duration$$110$$.$setTranslateX$($sizeDiff$$1$$) : $duration$$110$$.$setTranslateY$($sizeDiff$$1$$)
    }
  }
};
D.$JSCompiler_StaticMethods_adjustItems$$ = function $$JSCompiler_StaticMethods_adjustItems$$$($JSCompiler_StaticMethods_adjustItems$self$$) {
  if($JSCompiler_StaticMethods_adjustItems$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustItems$self$$.$_size$) {
    for(var $sizeDiff$$2$$ = $JSCompiler_StaticMethods_adjustItems$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustItems$self$$.$_size$, $i$$887$$ = 0;$i$$887$$ < $JSCompiler_StaticMethods_adjustItems$self$$.$_blocks$.length;$i$$887$$++) {
      for(var $block$$6$$ = $JSCompiler_StaticMethods_adjustItems$self$$.$_blocks$[$i$$887$$], $count$$27$$ = $block$$6$$.$getNumChildren$(), $j$$130$$ = 2;$j$$130$$ < $count$$27$$;$j$$130$$++) {
        var $elem$$69$$ = $block$$6$$.$getChildAt$($j$$130$$);
        $JSCompiler_StaticMethods_adjustItems$self$$.$_isVertical$ ? $elem$$69$$.$setTranslateX$($elem$$69$$.$getTranslateX$() + $sizeDiff$$2$$) : $elem$$69$$.$setTranslateY$($elem$$69$$.$getTranslateY$() + $sizeDiff$$2$$)
      }
    }
    $JSCompiler_StaticMethods_adjustItems$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$.$setTranslateX$(0 - $sizeDiff$$2$$) : $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$.$setTranslateY$(0 - $sizeDiff$$2$$)
  }
};
D.$DvtTimelineSeries$$.prototype.$getStyle$ = function $$DvtTimelineSeries$$$$$getStyle$$($key$$128_style$$116$$) {
  $key$$128_style$$116$$ = this.$_defaultStyles$[$key$$128_style$$116$$];
  return $key$$128_style$$116$$ instanceof D.$DvtCSSStyle$$ ? $key$$128_style$$116$$.$clone$() : $key$$128_style$$116$$
};
D.$DvtTimelineSeriesActionEvent$$ = function $$DvtTimelineSeriesActionEvent$$$($action$$30$$, $itemId$$14$$) {
  D.$DvtTimelineSeriesActionEvent$$.$superclass$.constructor.call(this, "action", $action$$30$$, $itemId$$14$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineSeriesActionEvent", D.$DvtTimelineSeriesActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesActionEvent$$, D.$DvtActionEvent$$, "DvtTimelineSeriesActionEvent");
D.$DvtTimelineSeries$$.prototype.$isVertical$ = (0,D.$JSCompiler_get$$)("$_isVertical$");
D.$DvtTimelineSeriesItem$$ = function $$DvtTimelineSeriesItem$$$($context$$626$$, $styles$$19$$, $id$$305$$) {
  this.Init($context$$626$$, $styles$$19$$, $id$$305$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesItem$$, D.$DvtContainer$$, "DvtTimelineSeriesItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeriesItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$627$$, $styles$$20$$, $id$$306$$) {
  D.$DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $context$$627$$, "g", $id$$306$$);
  this.$_styles$ = $styles$$20$$
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($isSelected$$3$$) {
  this.$_isSelected$ != $isSelected$$3$$ && ((this.$_isSelected$ = $isSelected$$3$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$("asel") : this.$applyState$("sel") : this.$applyState$("en"))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($isFocused$$2$$) {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$, this.$_isSelected$ && $isFocused$$2$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("hl"))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($isFocused$$3$$) {
  this.$_isSelected$ && $isFocused$$3$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("en");
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($feelerColor$$2_feelerStroke$$2_state$$103$$) {
  var $feeler$$4_item$$65$$ = this.$_node$, $duration$$111_itemElem$$ = $feeler$$4_item$$65$$.$_displayable$;
  if($duration$$111_itemElem$$ != D.$JSCompiler_alias_NULL$$) {
    var $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$ = $duration$$111_itemElem$$.$getChildAt$(0), $bubbleInner_feelerWidth$$2$$ = $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$.$getChildAt$(0), $duration$$111_itemElem$$ = $feeler$$4_item$$65$$.$_durationBar$;
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$.$setSolidFill$(this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$103$$ + "bc"));
    var $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$103$$ + "bsc"), $bubbleStrokeWidth$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$103$$ + "bsw"), $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$ = new D.$DvtSolidStroke$$($bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$, 1, $bubbleStrokeWidth$$);
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$.$setStroke$($bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$);
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$103$$ + "bisc");
    $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$103$$ + "bisw");
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$ = new D.$DvtSolidStroke$$($bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$, 1, $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$);
    $bubbleInner_feelerWidth$$2$$.$setStroke$($bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$);
    $bubbleInner_feelerWidth$$2$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$103$$ + "fw");
    $feelerColor$$2_feelerStroke$$2_state$$103$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$103$$ + "fc");
    $feelerColor$$2_feelerStroke$$2_state$$103$$ = new D.$DvtSolidStroke$$($feelerColor$$2_feelerStroke$$2_state$$103$$, 1, $bubbleInner_feelerWidth$$2$$);
    ($feeler$$4_item$$65$$ = $feeler$$4_item$$65$$.$_feeler$) && $feeler$$4_item$$65$$.$setStroke$($feelerColor$$2_feelerStroke$$2_state$$103$$);
    $duration$$111_itemElem$$ && $duration$$111_itemElem$$.$setStroke$($feelerColor$$2_feelerStroke$$2_state$$103$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($key$$129_style$$117$$) {
  $key$$129_style$$117$$ = this.$_styles$[$key$$129_style$$117$$];
  return $key$$129_style$$117$$ instanceof D.$DvtCSSStyle$$ ? $key$$129_style$$117$$.$clone$() : $key$$129_style$$117$$
};
D.$DvtTimelineSeriesNode$$ = function $$DvtTimelineSeriesNode$$$($timeline$$4$$, $series$$30$$, $props$$16$$) {
  this.Init($timeline$$4$$, $series$$30$$, $props$$16$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesNode$$, D.$DvtKeyboardNavigable$$, "DvtTimelineSeriesNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeriesNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($timeline$$5$$, $seriesIndex$$118$$, $props$$17$$) {
  this.$_timeline$ = $timeline$$5$$;
  this.$_seriesIndex$ = $seriesIndex$$118$$;
  this.$_series$ = $timeline$$5$$.$_series$[$seriesIndex$$118$$];
  this.$_id$ = $props$$17$$.id;
  this.$_rowKey$ = $props$$17$$.$rowKey$;
  this.$_startTime$ = (0,window.parseInt)($props$$17$$.startTime);
  $props$$17$$.$endTime$ && (this.$_endTime$ = (0,window.parseInt)($props$$17$$.$endTime$));
  this.$_title$ = $props$$17$$.title;
  this.$_desc$ = $props$$17$$.$desc$;
  this.$_thumbnail$ = $props$$17$$.$thumbnail$;
  this.$_style$ = $props$$17$$.style;
  this.$_data$ = $props$$17$$.data;
  this.$_action$ = $props$$17$$.action;
  this.$_durationFillColor$ = $props$$17$$.$durationFillColor$
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.$getStyle$ = (0,D.$JSCompiler_get$$)("$_style$");
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_endTime$ != D.$JSCompiler_alias_NULL$$ ? "Start Time: " + (new window.Date(this.$_startTime$)).toLocaleString() + "; End Time: " + (new window.Date(this.$_endTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new window.Date(this.$_startTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_w$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_w$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_h$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_h$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$819$$) {
  var $keyboardHandler$$8_navigableItems$$8$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
  if($event$$819$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$8_navigableItems$$8$$.$isMultiSelectEvent$($event$$819$$)) {
    return this
  }
  if($keyboardHandler$$8_navigableItems$$8$$.$isNavigationEvent$($event$$819$$)) {
    for(var $keyboardHandler$$8_navigableItems$$8$$ = [], $i$$889$$ = 0;$i$$889$$ < this.$_timeline$.$_series$.length;$i$$889$$++) {
      $keyboardHandler$$8_navigableItems$$8$$.push(this.$_timeline$.$_series$[$i$$889$$].$_items$)
    }
    return(0,D.$DvtTimelineKeyboardHandler$getNextNavigable$$)(this, $event$$819$$, $keyboardHandler$$8_navigableItems$$8$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$61$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$61$$)
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  (0,D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$)(this.$_timeline$, this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$19$$ = [];
  this.$isSelectable$() && $states$$19$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getLabel$(), $states$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_isSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_get$$)("$_isSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$) {
  this.$_isSelected$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$;
  this.$_displayable$.$setSelected$($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$);
  this.$_updateAriaLabel$();
  if(this.$_timeline$.$_hasOverview$) {
    if($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$) {
      $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$ = this.$_timeline$.$_overview$;
      var $drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$ = this.getId(), $drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$, $drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$);
      if($drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$ != D.$JSCompiler_alias_NULL$$) {
        $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$ = []);
        var $index$$inline_11703_lastSelectedMarker$$inline_11699$$ = D.$JSCompiler_alias_NULL$$;
        0 < $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$.length && ($index$$inline_11703_lastSelectedMarker$$inline_11699$$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$[$JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$.length - 
        1]);
        $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$.push($drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$);
        $index$$inline_11703_lastSelectedMarker$$inline_11699$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$applyState$($index$$inline_11703_lastSelectedMarker$$inline_11699$$, "_s");
        $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$applyState$($drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$, "_as")
      }
    }else {
      if($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$ = this.$_timeline$.$_overview$, $drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$ = this.getId(), $drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$, 
      $drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$), $drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
        for(var $index$$inline_11703_lastSelectedMarker$$inline_11699$$ = -1, $i$$inline_11704$$ = 0;$i$$inline_11704$$ < $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$.length;$i$$inline_11704$$++) {
          if($drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$ == $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$[$i$$inline_11704$$]) {
            $index$$inline_11703_lastSelectedMarker$$inline_11699$$ = $i$$inline_11704$$;
            break
          }
        }
        -1 != $index$$inline_11703_lastSelectedMarker$$inline_11699$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$applyState$($drawable$$inline_9126_drawable$$inline_9130_itemId$$inline_9125_itemId$$inline_9129$$, "_"), $JSCompiler_StaticMethods_selSelectItem$self$$inline_9124_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9128_isSelected$$4$$.$_selectedMarkers$.splice($index$$inline_11703_lastSelectedMarker$$inline_11699$$, 
        1))
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($JSCompiler_StaticMethods_highlightItem$self$$inline_9132_ignoreOverview$$) {
  this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_highlightItem$self$$inline_9132_ignoreOverview$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_highlightItem$self$$inline_9132_ignoreOverview$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_9134_itemId$$inline_9133$$ = this.getId(), $drawable$$inline_9134_itemId$$inline_9133$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_highlightItem$self$$inline_9132_ignoreOverview$$, $drawable$$inline_9134_itemId$$inline_9133$$);
    $drawable$$inline_9134_itemId$$inline_9133$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightMarker$$)($JSCompiler_StaticMethods_highlightItem$self$$inline_9132_ignoreOverview$$, $drawable$$inline_9134_itemId$$inline_9133$$)
  }
  this.$_timeline$.$_isVertical$ && (this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9136_ignoreOverview$$1$$) {
  this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_unhighlightItem$self$$inline_9136_ignoreOverview$$1$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_unhighlightItem$self$$inline_9136_ignoreOverview$$1$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_9138_itemId$$inline_9137$$ = this.getId(), $drawable$$inline_9138_itemId$$inline_9137$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9136_ignoreOverview$$1$$, $drawable$$inline_9138_itemId$$inline_9137$$);
    $drawable$$inline_9138_itemId$$inline_9137$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9136_ignoreOverview$$1$$, $drawable$$inline_9138_itemId$$inline_9137$$)
  }
  this.$_timeline$.$_isVertical$ && (this.$_index$ && !this.$_isSelected$) && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtTimelineSeriesParser$$ = function $$DvtTimelineSeriesParser$$$($timelineSeries$$) {
  this.Init($timelineSeries$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesParser$$, D.$DvtTimeComponentParser$$, "DvtTimelineSeriesParser");
D.$DvtTimelineSeriesParser$$.prototype.parse = function $$DvtTimelineSeriesParser$$$$parse$($itemStyleDefaults_options$$280$$) {
  var $defaultStyles$$2_itemArray$$inline_9142$$ = [], $ret$$105_seriesItems$$inline_9143$$ = $itemStyleDefaults_options$$280$$.items;
  if($ret$$105_seriesItems$$inline_9143$$) {
    for(var $itemEnabledFillColor_j$$inline_9144$$ = 0;$itemEnabledFillColor_j$$inline_9144$$ < $ret$$105_seriesItems$$inline_9143$$.length;$itemEnabledFillColor_j$$inline_9144$$++) {
      $defaultStyles$$2_itemArray$$inline_9142$$.push($ret$$105_seriesItems$$inline_9143$$[$itemEnabledFillColor_j$$inline_9144$$])
    }
  }
  $ret$$105_seriesItems$$inline_9143$$ = D.$DvtTimelineSeriesParser$$.$superclass$.parse.call(this, $itemStyleDefaults_options$$280$$);
  $ret$$105_seriesItems$$inline_9143$$.scale = $itemStyleDefaults_options$$280$$.scale;
  $ret$$105_seriesItems$$inline_9143$$.$timeAxis$ = $itemStyleDefaults_options$$280$$.timeAxis;
  $ret$$105_seriesItems$$inline_9143$$.label = $itemStyleDefaults_options$$280$$.label;
  $ret$$105_seriesItems$$inline_9143$$.$emptyText$ = $itemStyleDefaults_options$$280$$.emptyText;
  $ret$$105_seriesItems$$inline_9143$$.$items$ = this.$_parseDataNode$($itemStyleDefaults_options$$280$$.timeline, $itemStyleDefaults_options$$280$$.index, $defaultStyles$$2_itemArray$$inline_9142$$);
  $ret$$105_seriesItems$$inline_9143$$.$rtl$ = "false";
  var $defaultStyles$$2_itemArray$$inline_9142$$ = {}, $itemSelectedFillColor$$ = $itemEnabledFillColor_j$$inline_9144$$ = "#ffffff", $itemActiveSelectedFillColor$$ = "#ffffff", $itemHighlightedFillColor$$ = "#ffffff", $itemEnabledStrokeColor$$ = "#648baf", $itemSelectedStrokeColor$$ = "#000000", $itemActiveSelectedStrokeColor$$ = "#000000", $itemHighlightedStrokeColor$$ = "#85bbe7", $feelerEnabledStrokeColor$$ = "#648baf", $feelerSelectedStrokeColor$$ = "#000000", $feelerActiveSelectedStrokeColor$$ = 
  "#000000", $feelerHighlightedStrokeColor$$ = "#85bbe7", $itemTitleStyle$$ = new D.$DvtCSSStyle$$("color:#000000;white-space:nowrap;font-size:12px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;"), $itemDescriptionStyle$$ = new D.$DvtCSSStyle$$("color:#084B8A;white-space:nowrap;font-size:12px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;"), $referenceObjectStyle$$ = new D.$DvtCSSStyle$$("color:#ff591f");
  if($itemStyleDefaults_options$$280$$ = $itemStyleDefaults_options$$280$$.itemStyleDefaults) {
    var $style$$118$$ = $itemStyleDefaults_options$$280$$.backgroundColor;
    $style$$118$$ && ($itemEnabledFillColor_j$$inline_9144$$ = $style$$118$$);
    ($style$$118$$ = $itemStyleDefaults_options$$280$$.hoverBackgroundColor) && ($itemHighlightedFillColor$$ = $style$$118$$);
    if($style$$118$$ = $itemStyleDefaults_options$$280$$.selectedBackgroundColor) {
      $itemActiveSelectedFillColor$$ = $itemSelectedFillColor$$ = $style$$118$$
    }
    if($style$$118$$ = $itemStyleDefaults_options$$280$$.borderColor) {
      $feelerEnabledStrokeColor$$ = $itemEnabledStrokeColor$$ = $style$$118$$
    }
    if($style$$118$$ = $itemStyleDefaults_options$$280$$.hoverBorderColor) {
      $feelerHighlightedStrokeColor$$ = $itemHighlightedStrokeColor$$ = $style$$118$$
    }
    if($style$$118$$ = $itemStyleDefaults_options$$280$$.selectedBorderColor) {
      $feelerActiveSelectedStrokeColor$$ = $feelerSelectedStrokeColor$$ = $itemActiveSelectedStrokeColor$$ = $itemSelectedStrokeColor$$ = $style$$118$$
    }
    ($style$$118$$ = $itemStyleDefaults_options$$280$$.titleStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($itemTitleStyle$$, $style$$118$$);
    ($style$$118$$ = $itemStyleDefaults_options$$280$$.descriptionStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($itemDescriptionStyle$$, $style$$118$$)
  }
  $defaultStyles$$2_itemArray$$inline_9142$$.enfw = 1;
  $defaultStyles$$2_itemArray$$inline_9142$$.selfw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.aselfw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.hlfw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.enfc = $feelerEnabledStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.selfc = $feelerSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.aselfc = $feelerActiveSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.hlfc = $feelerHighlightedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.enbc = $itemEnabledFillColor_j$$inline_9144$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.selbc = $itemSelectedFillColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.aselbc = $itemActiveSelectedFillColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.hlbc = $itemHighlightedFillColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.enbsc = $itemEnabledStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.selbsc = $itemSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.aselbsc = $itemActiveSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.hlbsc = $itemHighlightedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9142$$.enbsw = 1;
  $defaultStyles$$2_itemArray$$inline_9142$$.selbsw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.aselbsw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.hlbsw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.enbisc = "rgba(249,249,249,0)";
  $defaultStyles$$2_itemArray$$inline_9142$$.selbisc = "rgba(249,249,249,0)";
  $defaultStyles$$2_itemArray$$inline_9142$$.aselbisc = "#e4f0fa";
  $defaultStyles$$2_itemArray$$inline_9142$$.hlbisc = "#e4f0fa";
  $defaultStyles$$2_itemArray$$inline_9142$$.enbisw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.selbisw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.aselbisw = 2;
  $defaultStyles$$2_itemArray$$inline_9142$$.hlbisw = 2;
  $ret$$105_seriesItems$$inline_9143$$.$itemTitleStyle$ = $itemTitleStyle$$;
  $ret$$105_seriesItems$$inline_9143$$.$itemDescriptionStyle$ = $itemDescriptionStyle$$;
  $ret$$105_seriesItems$$inline_9143$$.$referenceObjectStyle$ = $referenceObjectStyle$$;
  $ret$$105_seriesItems$$inline_9143$$.$defaultStyles$ = $defaultStyles$$2_itemArray$$inline_9142$$;
  return $ret$$105_seriesItems$$inline_9143$$
};
D.$DvtTimelineSeriesParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineSeriesParser$$$$$ParseRootAttributes$$() {
  var $ret$$106$$ = D.$DvtTimelineSeriesParser$$.$superclass$.$ParseRootAttributes$.call(this);
  $ret$$106$$.start = this.$_startTime$.getTime();
  $ret$$106$$.end = this.$_endTime$.getTime();
  return $ret$$106$$
};
D.$DvtTimelineSeriesParser$$.prototype.$_parseDataNode$ = function $$DvtTimelineSeriesParser$$$$$_parseDataNode$$($timeline$$6$$, $seriesIndex$$119$$, $data$$120$$) {
  var $treeNodes$$1$$ = [];
  if($data$$120$$) {
    for(var $i$$890$$ = 0;$i$$890$$ < $data$$120$$.length;$i$$890$$++) {
      var $props$$18_treeNode$$2$$ = this.$ParseNodeAttributes$($data$$120$$[$i$$890$$]);
      if($props$$18_treeNode$$2$$) {
        $props$$18_treeNode$$2$$ = new D.$DvtTimelineSeriesNode$$($timeline$$6$$, $seriesIndex$$119$$, $props$$18_treeNode$$2$$);
        $props$$18_treeNode$$2$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
        for(var $startTime$$11$$ = $props$$18_treeNode$$2$$.$_startTime$, $add$$1$$ = D.$JSCompiler_alias_TRUE$$, $j$$132$$ = 0;$j$$132$$ < $treeNodes$$1$$.length;$j$$132$$++) {
          if($startTime$$11$$ < $treeNodes$$1$$[$j$$132$$].$_startTime$) {
            $treeNodes$$1$$.splice($j$$132$$, 0, $props$$18_treeNode$$2$$);
            $add$$1$$ = D.$JSCompiler_alias_FALSE$$;
            break
          }
        }
        $add$$1$$ && $treeNodes$$1$$.push($props$$18_treeNode$$2$$)
      }
    }
  }
  return $treeNodes$$1$$
};
D.$DvtTimelineSeriesParser$$.prototype.$ParseNodeAttributes$ = function $$DvtTimelineSeriesParser$$$$$ParseNodeAttributes$$($data$$121$$) {
  var $ret$$107$$ = {};
  $ret$$107$$.id = $data$$121$$.id;
  $ret$$107$$.$rowKey$ = $ret$$107$$.id;
  $ret$$107$$.startTime = this.getDate($data$$121$$.start);
  $ret$$107$$.$endTime$ = this.getDate($data$$121$$.end);
  if(($ret$$107$$.$endTime$ ? $ret$$107$$.$endTime$ : $ret$$107$$.startTime) < this.$_startTime$.getTime() || $ret$$107$$.startTime > this.$_endTime$.getTime()) {
    return D.$JSCompiler_alias_NULL$$
  }
  $ret$$107$$.title = $data$$121$$.title;
  $ret$$107$$.$desc$ = $data$$121$$.description;
  $ret$$107$$.$thumbnail$ = $data$$121$$.thumbnail;
  $ret$$107$$.data = $data$$121$$;
  $ret$$107$$.style = $data$$121$$.style;
  $ret$$107$$.action = $data$$121$$.action;
  $ret$$107$$.$durationFillColor$ = $data$$121$$.durationFillColor;
  return $ret$$107$$
};
D.$DvtTimelineViewportChangeEvent$$ = function $$DvtTimelineViewportChangeEvent$$$($type$$257$$, $viewportStart$$1$$, $viewportEnd$$1$$, $minorAxisScale$$) {
  D.$DvtTimelineViewportChangeEvent$$.$superclass$.Init.call(this, $type$$257$$);
  this.$_viewportStart$ = $viewportStart$$1$$;
  this.$_viewportEnd$ = $viewportEnd$$1$$;
  this.$_minorAxisScale$ = $minorAxisScale$$
};
(0,D.$goog$exportPath_$$)("DvtTimelineViewportChangeEvent", D.$DvtTimelineViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtTimelineViewportChangeEvent");
D.$DvtTimelineViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportStart$ = (0,D.$JSCompiler_get$$)("$_viewportStart$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getViewportStart = D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportStart$;
D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportEnd$ = (0,D.$JSCompiler_get$$)("$_viewportEnd$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getViewportEnd = D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportEnd$;
D.$DvtTimelineViewportChangeEvent$$.prototype.$getMinorAxisScale$ = (0,D.$JSCompiler_get$$)("$_minorAxisScale$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getMinorAxisScale = D.$DvtTimelineViewportChangeEvent$$.prototype.$getMinorAxisScale$;
  return D;
});