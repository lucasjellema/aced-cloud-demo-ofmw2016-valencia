/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
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
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$455$$, $callback$$129$$, $callbackObj$$80$$) {
  this.Init($context$$455$$, $callback$$129$$, $callbackObj$$80$$)
};
(0,D.$goog$exportPath_$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$456$$, $callback$$130$$, $callbackObj$$81$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$456$$);
  this.$_callback$ = $callback$$130$$;
  this.$_callbackObj$ = $callbackObj$$81$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    this.$EventManager$ = new D.$DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
    this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$37_viewportStart$$, $end$$21_size$$37$$, $overviewLength$$) {
  $overviewLength$$ == D.$JSCompiler_alias_NULL$$ && ($overviewLength$$ = this.$Width$);
  $start$$37_viewportStart$$ = this.$getDatePosition$($start$$37_viewportStart$$);
  var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($end$$21_size$$37$$);
  $start$$37_viewportStart$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this) || ($end$$21_size$$37$$ = window.Math.max($slidingWindow_viewportEnd$$ - $start$$37_viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this)), 0 < $end$$21_size$$37$$ && (0 <= $start$$37_viewportStart$$ && $slidingWindow_viewportEnd$$ <= $overviewLength$$) && ($slidingWindow_viewportEnd$$ = this.$getChildAt$(1), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $overviewLength$$ - ($start$$37_viewportStart$$ + $end$$21_size$$37$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $start$$37_viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow_viewportEnd$$, $end$$21_size$$37$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this)))
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$) {
  if($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ == D.$JSCompiler_alias_NULL$$) {
    var $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = this.$_start$, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = 
    this.$_end$, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = this.$getChildAt$(1), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, 
    $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$);
    $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ != D.$JSCompiler_alias_NULL$$ && 0 != $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ && (this.$_renderStart$ = 
    D.$DvtTimeUtils$$.$getPositionDate$($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, 
    $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ != D.$JSCompiler_alias_NULL$$ && $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, this.$Height$ = $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$);
  $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ && ($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = this.$Parse$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$), this.$_applyParsedProperties$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$));
  $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$);
  if($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$) {
    $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = ($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = this.$isVertical$()) ? 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, 0, "window") : new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "window");
    $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$) {
        var $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ = ($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ - 36) / 2, $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 
        3, 6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 8, 8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 28, 8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 33, 6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 3, -6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 
        8, -8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 28, -8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 33, -6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        var $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$, 
        "lhb"), $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$, "rhb"), $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ = 
        "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, 10), $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, 
          10)
        }else {
          $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$), $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$)
        }
      }else {
        $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ = ($height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ - 36) / 2, $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$ = D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 3, 8, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 
        8) + D.$DvtPathUtils$$.lineTo(8, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 28) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 33, 0, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 36), D.$DvtPathUtils$$.closePath(), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = 
        D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 3, -8, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 8) + D.$DvtPathUtils$$.lineTo(-8, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 28) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 
        33, 0, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ + 36), D.$DvtPathUtils$$.closePath(), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = new D.$DvtRect$$(this.$getCtx$(), 0 - $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
        0, $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "lhb"), $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$ = new D.$DvtRect$$(this.$getCtx$(), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
        0, $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "rhb"), $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ = "col-resize", this.$_handleBackgroundImage$ ? ($bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 
        10, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$), $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$)) : ($bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$), 
        $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$))
      }
      $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$);
      $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$ = new D.$DvtPath$$(this.$getCtx$(), $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$, "lh");
      $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = new D.$DvtPath$$(this.$getCtx$(), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$, 
      "rh");
      $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$.$setSolidStroke$(this.$_handleFillColor$);
      $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$));
      $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.setCursor($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$);
      $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$.setCursor($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$);
      $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$.setCursor($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$);
      $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.setCursor($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$);
      $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$.setCursor($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$);
      $handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$.setCursor($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$);
      $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$addChild$($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$);
      $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$addChild$($leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$);
      $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$addChild$($bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$);
      $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$addChild$($handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$);
      $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$addChild$($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$);
      $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$addChild$($handleX$$inline_7448_handleY$$inline_7456_rightGrippy$$inline_7455$$)
    }
    $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.setCursor("move");
    this.$addChild$($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$);
    $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ ? this.$isRTL$() ? new D.$DvtLine$$(this.$getCtx$(), 
    this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "tab") : new D.$DvtLine$$(this.$getCtx$(), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ - this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ - 
    this.$getTimeAxisWidth$(), $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$getCtx$(), 0, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab") : new D.$DvtLine$$(this.$getCtx$(), 
    0, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab");
    $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$);
    this.$_timeAxisTopBar$ = $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$;
    this.$addChild$($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$);
    this.$isLeftAndRightFilterRendered$() && ($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ ? ($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, 0, "lbg"), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, 
    0, "rbg")) : ($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "lbg"), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "rbg")), $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$), 
    $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$), 
    D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ ? 
    ($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
    "lbgrh"), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
    "rbgrh")) : ($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
    $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "lbgrh"), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
    $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "rbgrh")), $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$), 
    $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$)))
  }
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    this.$isVertical$();
    $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this);
    for($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = 0;$bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ < 
    this.$_ticks$.length;$bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$++) {
      $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = this.$_ticks$[$bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$], $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = 
      (0,window.parseInt)($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.$getAttr$("time"), 10), $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = this.$getDatePosition$($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$), 
      $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.$getAttr$("label"), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = 
      0, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ + 1 < this.$_ticks$.length ? ($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = 
      (0,window.parseInt)(this.$_ticks$[$bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ + 1].$getAttr$("time"), 10), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = 
      this.$getDatePosition$($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$) - $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$) : $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = 
      $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ - $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && 
      ($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ - $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$), 
      this.$addTick$($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "tick" + 
      $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$), this.$addLabel$($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 
      $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$, "label" + $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$)
    }
  }
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = 0;$actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ < 
    this.$_formattedTimeRanges$.length;$actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$++) {
      $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = this.$_formattedTimeRanges$[$actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$], $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = 
      $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ = 
      (0,window.parseInt)($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.$getAttr$("rs"), 10), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = (0,window.parseInt)($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.$getAttr$("re"), 
      10), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$.$getAttr$("c"), $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ != 
      D.$JSCompiler_alias_NULL$$ && $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ != D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ = 
      this.$getDatePosition$($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = this.$getDatePosition$($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$) - 
      $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ = $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$ - $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ - $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$), 
      $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = this.$isVertical$() ? new D.$DvtRect$$(this.$getCtx$(), 0, $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ - 
      this.$getTimeAxisWidth$(), $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$, "ftr") : new D.$DvtRect$$(this.$getCtx$(), $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$, "above" == this.$_overviewPosition$ ? (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) : 
      0, $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), 
      "ftr"), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ != D.$JSCompiler_alias_NULL$$ && $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$.$setSolidFill$($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 
      0.4), $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$.setCursor("move"), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$), 
      this.$addChild$($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ - $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$), 
  $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = new D.$DvtLine$$(this.$getCtx$(), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  0, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, "ocd")), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$), this.$addChild$($actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$));
  this.$parseDataXML$($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$);
  $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ && ($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = 
  $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.$getY$(), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = 
  $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ + 0.5, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ + 
  $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.getHeight(), $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ - 
  0.5, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = 0, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = 0.5, $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$ = 
  $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ - 0.5, $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, 
  $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  "lh"), $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, 
  $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$, "rh"), $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 0, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 
  $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, "ltb"), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 
  $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, 
  "rtb"), $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$, $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, 
  "bb"), $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 
  $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, "tb")) : ($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = 0, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = 
  $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ + 0.5, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, 
  $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ - 0.5, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = 
  $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.$getX$(), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ + 
  0.5, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ = $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ + $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.getWidth(), 
  $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$ = $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ - 0.5, $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 
  $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, 
  "lh"), $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$, $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $leftHandle$$inline_7457_leftHandleCmds$$inline_7449_rightCenter$$inline_7501$$, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, 
  "rh"), $cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$ = new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ + 
  1, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, "ltb"), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = new D.$DvtLine$$(this.$getCtx$(), $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ - 
  1, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  "rtb"), $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, 
  $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$, "bb"), $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$), "none" != this.$_windowBorderLeftStyle$ && $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$), "none" != this.$_windowBorderRightStyle$ && $handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($handleSize$$inline_7445_rightHandle$$inline_7503_rightHandleBackground$$inline_7452_size$$inline_11288$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($cursor$$inline_7453_leftTopBar$$inline_7504_rangeStart$$inline_11285_rangeStart_pos$$inline_11289$$), 
  this.$addChild$($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_7506_bottomCenter$$inline_7497_leftGrippy$$inline_7454$$), "none" != this.$_windowBorderTopStyle$ && $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = this.$isVertical$() ? D.$DvtPathUtils$$.moveTo(6, 0) + D.$DvtPathUtils$$.lineTo(0, 5) + D.$DvtPathUtils$$.lineTo(5, 5) + D.$DvtPathUtils$$.lineTo(5, 17) + D.$DvtPathUtils$$.lineTo(0, 17) + D.$DvtPathUtils$$.lineTo(6, 
  22) + D.$DvtPathUtils$$.lineTo(12, 17) + D.$DvtPathUtils$$.lineTo(7, 17) + D.$DvtPathUtils$$.lineTo(7, 5) + D.$DvtPathUtils$$.lineTo(12, 5) + D.$DvtPathUtils$$.closePath() : D.$DvtPathUtils$$.moveTo(5, 0) + D.$DvtPathUtils$$.lineTo(0, 6) + D.$DvtPathUtils$$.lineTo(5, 12) + D.$DvtPathUtils$$.lineTo(5, 7) + D.$DvtPathUtils$$.lineTo(17, 7) + D.$DvtPathUtils$$.lineTo(17, 12) + D.$DvtPathUtils$$.lineTo(22, 6) + D.$DvtPathUtils$$.lineTo(17, 0) + D.$DvtPathUtils$$.lineTo(17, 4) + D.$DvtPathUtils$$.lineTo(5, 
  4) + D.$DvtPathUtils$$.lineTo(5, 0) + D.$DvtPathUtils$$.closePath(), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = new D.$DvtPath$$(this.$getCtx$(), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, "arr"), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$.$setSolidFill$("#ffffff"), 
  $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$.$setSolidStroke$("#000000"), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$addChild$($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$), 
  this.$_resizeArrow$ = $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$), $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = this.$isVertical$(), $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ = this.$getChildAt$(1), $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = 
  (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ ? this.$Height$ : this.$Width$, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = 
  this.$_width$, $child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$ = this.$_start$, $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = 
  this.$_renderStart$, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = D.$DvtTimeUtils$$.$getPositionDate$($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, 
  $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$, 0, $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$), $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($child$$inline_7470_color$$inline_11287_elem$$inline_11282_label$$inline_7473_leftCenter$$inline_7499_leftHandleBackground$$inline_7451_rightBackground$$inline_7461_slidingWindow$$1_start$$inline_7519$$, $end$$inline_7520_leftHandle$$inline_7502_maxWidth$$inline_7474_next_time$$inline_7475_rangeEnd$$inline_11286_rangeWidth$$inline_11290_rightHandle$$inline_7458_rightHandleCmds$$inline_7450_slidingWindow$$inline_7493_slidingWindowPos$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  $end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$), $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = this.$getDatePosition$($bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$), 
  $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = window.Math.min($actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  this.$getDatePosition$($end$$22_height$$inline_11284_left$$inline_7498_leftBackground$$inline_7460_rangeEndTime$$inline_7523_slidingWindow$$inline_7444_time$$inline_7471_timeAxisTopBar$$inline_7459_time_pos$$inline_7472_timelineWidth$$inline_7518$$)), $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = this.$getDatePosition$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$), 
  $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ -= $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, 
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ - $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ - 
  $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$), 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$ = 
  this.$_width$, $interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$ = this.$_start$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$ = this.$_end$, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 1, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$), 
  $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  2, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$), $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, 
  $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$, 
  $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$), this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$309_props$$2_renderStart$$inline_7521_renderStartPos$$inline_7526_start$$inline_11296_top$$inline_7494_vertical$$inline_7514$$, $actualSize$$inline_7517_end$$inline_11297_handleStart$$inline_7446_i$$inline_7482_line$$inline_7488_newWidth$$inline_7527_rangeEndPos$$inline_7525_rightBackgroundResizeHandle$$inline_7463_size$$inline_7468_time_pos$$inline_7487_topCenter$$inline_7495$$, 
  $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$, $height$$113_right$$inline_7500_timelineWidth$$inline_11295_topBar$$inline_7507_window$$inline_7515$$) - $bottom$$inline_7496_day1$$inline_11298_displayable$$inline_11291_i$$inline_7469_leftBackgroundResizeHandle$$inline_7462_pos1$$inline_11300_rangeStartPos$$inline_7524_rangeStartTime$$inline_7522_start$$38_vertical$$inline_7443_width$$inline_11283$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = this.$_initPos$ / this.$_increment$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$ = 0 - $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_7531_arrow$$inline_7511_arrowCmds$$inline_7510_day2$$inline_11299_rightTopBar$$inline_7505_size$$inline_7516_width$$123$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$311$$) {
  return this.$getParser$($obj$$311$$).parse($obj$$311$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$3$$) {
  this.$_start$ = $props$$3$$.start;
  this.$_end$ = $props$$3$$.end;
  this.$_width$ = $props$$3$$.width;
  this.$_renderStart$ = $props$$3$$.$renderStart$;
  this.$_currentTime$ = $props$$3$$.currentTime;
  this.$_initialFocusTime$ = $props$$3$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$3$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$3$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$3$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$3$$.orientation;
  this.$_overviewPosition$ = $props$$3$$.$overviewPosition$;
  this.$_isRtl$ = $props$$3$$.$isRtl$;
  $props$$3$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$3$$.$featuresOff$.split(" "));
  $props$$3$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$3$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$3$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$3$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$3$$.$timeAxisInfo$;
  $props$$3$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$3$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$3$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$3$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$3$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$3$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$3$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$3$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$3$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$3$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$3$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$3$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$3$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$3$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$3$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$3$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$3$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$3$$.$handleWidth$;
  this.$_handleHeight$ = $props$$3$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$3$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$3$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$3$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$3$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$3$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$3$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$3$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$3$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$3$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$10$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$10$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$54$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$54$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return"true" == this.$_isRtl$
};
D.$JSCompiler_StaticMethods_isHorizontalRTL$$ = function $$JSCompiler_StaticMethods_isHorizontalRTL$$$($JSCompiler_StaticMethods_isHorizontalRTL$self$$) {
  return $JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isRTL$() && !$JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isVertical$()
};
D.$DvtOverview$$.prototype.$isVertical$ = function $$DvtOverview$$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$) {
  var $id$$236$$ = $drawable$$.getId();
  return"lh" == $id$$236$$ || "rh" == $id$$236$$ || "lhb" == $id$$236$$ || "rhb" == $id$$236$$ || "grpy" == $id$$236$$ || "lbgrh" == $id$$236$$ || "rbgrh" == $id$$236$$ || $drawable$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$124$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$124$$) && $width$$124$$ < this.$Width$ ? $width$$124$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$JSCompiler_StaticMethods_getTimeAxisHeight$$ = function $$JSCompiler_StaticMethods_getTimeAxisHeight$$$($JSCompiler_StaticMethods_getTimeAxisHeight$self$$) {
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$114$$ = (0,window.parseInt)($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$.height, 10);
    $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ = !(0,window.isNaN)($height$$114$$) && $height$$114$$ < $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$Height$ ? $height$$114$$ : 20
  }
  return $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$596$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$596$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$596$$.targetTouches.length ? $event$$596$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$596$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$597$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$597$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$597$$.targetTouches.length ? $event$$597$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$597$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightHandle$$ = function $$JSCompiler_StaticMethods_getRightHandle$$$($JSCompiler_StaticMethods_getRightHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightHandle$self$$.$getChildAt$($JSCompiler_StaticMethods_getRightHandle$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_getRightHandle$self$$.$_lastChildIndex$ - 1))
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$12$$, $pos1$$1$$, $pos2$$1$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$1$$ && $line$$12$$.$setY1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setY2$($pos2$$1$$)) : (-1 != $pos1$$1$$ && $line$$12$$.$setX1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setX2$($pos2$$1$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$13$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$13$$.$getY1$() : $line$$13$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$598_target$$124$$) {
  $event$$598_target$$124$$ = $event$$598_target$$124$$.target;
  if($event$$598_target$$124$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$237$$ = $event$$598_target$$124$$.getId();
    if($id$$237$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$237$$.substr($id$$237$$.length - 7)) {
      return this.$getChildAfter$($event$$598_target$$124$$)
    }
    if("tick" != $id$$237$$.substr(0, 4) && "ltb" != $id$$237$$ && "rtb" != $id$$237$$ && "bb" != $id$$237$$ && "tab" != $id$$237$$) {
      return $event$$598_target$$124$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$1$$) {
  return"window" == $drawable$$1$$.getId() || "ftr" == $drawable$$1$$.getId() || "sta" == $drawable$$1$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$1$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$125$$, $height$$115$$) {
  var $background$$12$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$125$$, $height$$115$$, "bg");
  $background$$12$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$12$$);
  this.$addChild$($background$$12$$);
  return $background$$12$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$, $width$$127$$, $height$$117$$) {
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$getCtx$(), $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleBackgroundImage$, ($width$$127$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$) / 2, ($height$$117$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$, 
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$, "grpy");
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$1$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), "grpy"), $color$$78$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$2$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$748$$ = 0;9 > $i$$748$$;$i$$748$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$748$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$748$$ + 1, $starty$$1$$, "dot1" + $i$$748$$);
      $dot$$.$setSolidStroke$($color$$78$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 1 + 2 * $i$$748$$, $starty$$1$$, $startx$$2$$ + 1 + 2 * $i$$748$$ + 1, $starty$$1$$, "dot2" + $i$$748$$);
      $dot$$.$setSolidStroke$($color$$78$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$748$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$748$$ + 1, $starty$$1$$, "dot3" + $i$$748$$);
      $dot$$.$setSolidStroke$($color$$78$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$78$$);
    $grippy$$1$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$2$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$748$$ = 0;9 > $i$$748$$;$i$$748$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$748$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$748$$ + 1, "dot1" + $i$$748$$), $dot$$.$setSolidStroke$($color$$78$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$748$$, $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$748$$ + 1, "dot2" + $i$$748$$), $dot$$.$setSolidStroke$($color$$78$$), 
      $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$748$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$748$$ + 1, "dot3" + $i$$748$$), $dot$$.$setSolidStroke$($color$$78$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$78$$);
    $grippy$$1$$.$addChild$($dot$$);
    $startx$$2$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$78$$);
  $grippy$$1$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$1$$);
  return $grippy$$1$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$42$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$42$$.getHeight() : $rect$$42$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$4$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$4$$.$getTranslateY$() : $slidingWindow$$4$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$, $pos$$56$$) {
  $pos$$56$$ = window.Math.max(0, $pos$$56$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$5$$.$setTranslateY$($pos$$56$$) : $rightStart_slidingWindow$$5$$.$setTranslateX$($pos$$56$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$56$$);
    $rightStart_slidingWindow$$5$$ = $pos$$56$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$5$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$5$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$56$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$5$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$, $size$$40$$) {
  $size$$40$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$40$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$ = $size$$40$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$40$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$7$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$) : $rightGrippy$$1_slidingWindow$$7$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$) + $size$$40$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$7$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$40$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$.$setTranslateY$($size$$40$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateY$($size$$40$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$40$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_7539$$.$setTranslateX$($size$$40$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateX$($size$$40$$ - 10)))
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$14_pos$$57$$, $stroke$$99_width$$131$$, $height$$121$$, $id$$238$$) {
  $line$$14_pos$$57$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$getCtx$(), 0, $line$$14_pos$$57$$, $stroke$$99_width$$131$$, $line$$14_pos$$57$$, $id$$238$$) : new D.$DvtLine$$(this.$getCtx$(), $line$$14_pos$$57$$, 0, $line$$14_pos$$57$$, $height$$121$$, $id$$238$$);
  $stroke$$99_width$$131$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$99_width$$131$$.$setStyle$(1, 3);
  $line$$14_pos$$57$$.$setStroke$($stroke$$99_width$$131$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$14_pos$$57$$);
  this.$addChild$($line$$14_pos$$57$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($pos$$58$$, $label$$71_text$$99$$, $width$$132_y$$219$$, $height$$122$$, $maxWidth$$21$$, $dim$$63_id$$239$$) {
  this.$isVertical$() ? ($label$$71_text$$99$$ = this.$isRTL$() ? new D.$DvtOutputText$$(this.$getCtx$(), $label$$71_text$$99$$, this.$getTimeAxisWidth$() + 4, $pos$$58$$, $dim$$63_id$$239$$) : new D.$DvtOutputText$$(this.$getCtx$(), $label$$71_text$$99$$, 4, $pos$$58$$, $dim$$63_id$$239$$), $label$$71_text$$99$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold"))) : ($width$$132_y$$219$$ = "above" == this.$_overviewPosition$ ? 2 : $height$$122$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) + 
  2, $label$$71_text$$99$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$71_text$$99$$, $pos$$58$$ + 5, $width$$132_y$$219$$, $dim$$63_id$$239$$), $label$$71_text$$99$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold")), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && (this.$addChild$($label$$71_text$$99$$), $dim$$63_id$$239$$ = $label$$71_text$$99$$.$getDimensions$(), this.removeChild($label$$71_text$$99$$), $maxWidth$$21$$ -= 10, $label$$71_text$$99$$.$setX$($pos$$58$$ - window.Math.min($dim$$63_id$$239$$.$w$, 
  $maxWidth$$21$$) - 5)));
  D.$DvtTextUtils$$.$fitText$($label$$71_text$$99$$, $maxWidth$$21$$, window.Infinity, this);
  $label$$71_text$$99$$.$_rawText$ = $label$$71_text$$99$$.$getUntruncatedTextString$()
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$2$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(5);
  if($newLeft$$2$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$105_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$);
    $newLeft$$2$$ = window.Math.max($animator$$105_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$2$$));
    $animator$$105_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getCtx$(), 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $posGetter$$, $posSetter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$2$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $newLeft$$2$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$2$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$105_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$105_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$106$$, $obj$$312$$, $getter$$5$$, $setter$$3$$, $value$$181$$) {
  $animator$$106$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$106$$, "typeNumber", $obj$$312$$, $getter$$5$$, $setter$$3$$, $value$$181$$) : $setter$$3$$.call($obj$$312$$, $value$$181$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$599_relPos$$57$$) {
  var $drawable$$2$$ = this.$_findDrawable$($event$$599_relPos$$57$$);
  if($drawable$$2$$ && !("bg" == $drawable$$2$$.getId() || "ocd" == $drawable$$2$$.getId())) {
    if("label" == $drawable$$2$$.getId().substr(0, 5) && ($drawable$$2$$ instanceof D.$DvtOutputText$$ || $drawable$$2$$ instanceof D.$DvtBackgroundOutputText$$)) {
      $drawable$$2$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$599_relPos$$57$$.pageX, $event$$599_relPos$$57$$.pageY, $drawable$$2$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$) && ($event$$599_relPos$$57$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $event$$599_relPos$$57$$.pageX, $event$$599_relPos$$57$$.pageY), $event$$599_relPos$$57$$ = this.$stageToLocal$($event$$599_relPos$$57$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$599_relPos$$57$$.x + 6, $event$$599_relPos$$57$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$599_relPos$$57$$.x - 6, $event$$599_relPos$$57$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$2$$.getId() || "ftr" == $drawable$$2$$.getId() || "arr" == $drawable$$2$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$2$$
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$3_event$$600$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$3_event$$600$$ = this.$_findDrawable$($drawable$$3_event$$600$$);
  if($drawable$$3_event$$600$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$3_event$$600$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$3_event$$600$$
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$601_newEndTime_relPos$$58_slidingWindow$$9$$, $newPos$$1_pageX$$10$$, $evt$$60_pageY$$10_pos$$59$$) {
  $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$.stopPropagation();
  var $drawable$$4_newStartTime_size$$43$$ = this.$_findDrawable$($event$$601_newEndTime_relPos$$58_slidingWindow$$9$$);
  if($drawable$$4_newStartTime_size$$43$$ && !("window" == $drawable$$4_newStartTime_size$$43$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$4_newStartTime_size$$43$$))) {
    if("bg" == $drawable$$4_newStartTime_size$$43$$.getId() || "label" == $drawable$$4_newStartTime_size$$43$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$43$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$43$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$43$$.getId()) {
      $newPos$$1_pageX$$10$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$1_pageX$$10$$ = $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$.pageX);
      $evt$$60_pageY$$10_pos$$59$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$60_pageY$$10_pos$$59$$ = $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$.pageY);
      $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $newPos$$1_pageX$$10$$, $evt$$60_pageY$$10_pos$$59$$);
      $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$ = this.$stageToLocal$($event$$601_newEndTime_relPos$$58_slidingWindow$$9$$);
      this.$isVertical$() ? ($evt$$60_pageY$$10_pos$$59$$ = $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$.y, $drawable$$4_newStartTime_size$$43$$ = this.$Height$) : ($evt$$60_pageY$$10_pos$$59$$ = $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$.x, $drawable$$4_newStartTime_size$$43$$ = this.$Width$);
      $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$ = this.$getChildAt$(1);
      $newPos$$1_pageX$$10$$ = $evt$$60_pageY$$10_pos$$59$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$1_pageX$$10$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($evt$$60_pageY$$10_pos$$59$$ = this.$Width$ - $evt$$60_pageY$$10_pos$$59$$);
      var $time$$10$$ = this.$getPositionDate$($evt$$60_pageY$$10_pos$$59$$);
      $evt$$60_pageY$$10_pos$$59$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$60_pageY$$10_pos$$59$$.setTime($time$$10$$);
      $newPos$$1_pageX$$10$$ = window.Math.max(0, window.Math.min($newPos$$1_pageX$$10$$, $drawable$$4_newStartTime_size$$43$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($drawable$$4_newStartTime_size$$43$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$1_pageX$$10$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$))), $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$ = this.$getPositionDate$(this.$Width$ - $newPos$$1_pageX$$10$$)) : ($drawable$$4_newStartTime_size$$43$$ = this.$getPositionDate$($newPos$$1_pageX$$10$$), $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$ = 
      this.$getPositionDate$($newPos$$1_pageX$$10$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$60_pageY$$10_pos$$59$$, $drawable$$4_newStartTime_size$$43$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$60_pageY$$10_pos$$59$$, $event$$601_newEndTime_relPos$$58_slidingWindow$$9$$);
      this.dispatchEvent($evt$$60_pageY$$10_pos$$59$$)
    }else {
      return $drawable$$4_newStartTime_size$$43$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($drawable$$5_event$$602_evt$$61$$, $compX_cursor$$inline_7542_slidingWindow$$10$$, $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$) {
  $drawable$$5_event$$602_evt$$61$$ = this.$_findDrawable$($drawable$$5_event$$602_evt$$61$$);
  if($drawable$$5_event$$602_evt$$61$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$5_event$$602_evt$$61$$)) {
    if("ftr" == $drawable$$5_event$$602_evt$$61$$.getId() || "sta" == $drawable$$5_event$$602_evt$$61$$.getId()) {
      $drawable$$5_event$$602_evt$$61$$ = this.$getChildAt$(1)
    }
    this.$_initX$ = $compX_cursor$$inline_7542_slidingWindow$$10$$;
    this.$_initY$ = $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$;
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$5_event$$602_evt$$61$$)) {
      $compX_cursor$$inline_7542_slidingWindow$$10$$ = this.$getChildAt$(1);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (this.$_oldEndPos$ = this.$Width$ - $compX_cursor$$inline_7542_slidingWindow$$10$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $compX_cursor$$inline_7542_slidingWindow$$10$$.getWidth()) : (this.$_oldStartPos$ = $compX_cursor$$inline_7542_slidingWindow$$10$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $compX_cursor$$inline_7542_slidingWindow$$10$$.getWidth());
      "grpy" == $drawable$$5_event$$602_evt$$61$$.getParent().getId() && ($drawable$$5_event$$602_evt$$61$$ = $drawable$$5_event$$602_evt$$61$$.getParent());
      $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ = $drawable$$5_event$$602_evt$$61$$.getId();
      "grpy" == $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ && ($drawable$$5_event$$602_evt$$61$$ = $compX_cursor$$inline_7542_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$602_evt$$61$$), $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ = $drawable$$5_event$$602_evt$$61$$.getId());
      if("lh" == $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ || "rh" == $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$) {
        $drawable$$5_event$$602_evt$$61$$ = $compX_cursor$$inline_7542_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$602_evt$$61$$), $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ = $drawable$$5_event$$602_evt$$61$$.getId()
      }
      "lbgrh" == $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ && ($drawable$$5_event$$602_evt$$61$$ = $compX_cursor$$inline_7542_slidingWindow$$10$$.$getChildAt$(0));
      "rbgrh" == $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ && ($drawable$$5_event$$602_evt$$61$$ = $compX_cursor$$inline_7542_slidingWindow$$10$$.$getChildAt$($compX_cursor$$inline_7542_slidingWindow$$10$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? ($drawable$$5_event$$602_evt$$61$$.$setY$(-20), $drawable$$5_event$$602_evt$$61$$.$setHeight$(2 * ($drawable$$5_event$$602_evt$$61$$.getHeight() + 20))) : ($drawable$$5_event$$602_evt$$61$$.$setX$(-20), $drawable$$5_event$$602_evt$$61$$.$setWidth$(2 * ($drawable$$5_event$$602_evt$$61$$.getWidth() + 20))));
      $compX_cursor$$inline_7542_slidingWindow$$10$$ = $drawable$$5_event$$602_evt$$61$$.getCursor();
      $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ = this.$getChildAt$(1);
      $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ != D.$JSCompiler_alias_NULL$$ && $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$.setCursor($compX_cursor$$inline_7542_slidingWindow$$10$$);
      if(this.$isLeftAndRightFilterRendered$()) {
        $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this);
        var $rightBackground$$inline_7545$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
        $compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7545$$ != D.$JSCompiler_alias_NULL$$ && ($compY_drawableId_leftBackground$$inline_7544_slidingWindow$$inline_7543$$.setCursor($compX_cursor$$inline_7542_slidingWindow$$10$$), $rightBackground$$inline_7545$$.setCursor($compX_cursor$$inline_7542_slidingWindow$$10$$))
      }
    }
    this.$_moveDrawable$ = $drawable$$5_event$$602_evt$$61$$;
    $drawable$$5_event$$602_evt$$61$$ = new D.$DvtOverviewEvent$$("dropCallback");
    this.dispatchEvent($drawable$$5_event$$602_evt$$61$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == this.$_moveDrawable$.getId()) {
      this.$finishWindowDrag$(0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)(this.$_moveDrawable$)) {
        this.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_7549_slidingWindow$$inline_7548$$ = this.$getChildAt$(1);
        $leftBackground$$inline_7549_slidingWindow$$inline_7548$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_7549_slidingWindow$$inline_7548$$.setCursor("move");
        if(this.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_7549_slidingWindow$$inline_7548$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this), $rightBackground$$inline_7550$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
          $leftBackground$$inline_7549_slidingWindow$$inline_7548$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7550$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_7549_slidingWindow$$inline_7548$$.setCursor("default"), $rightBackground$$inline_7550$$.setCursor("default"))
        }
      }
    }
    this.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    this.$_initX$ = -1
  }
};
D.$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($event$$603$$, $compX$$1$$, $compY$$1$$) {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != this.$_initX$) {
    var $diffX$$11$$ = $compX$$1$$ - this.$_initX$, $diffY$$12$$ = $compY$$1$$ - this.$_initY$;
    this.$_initX$ = $compX$$1$$;
    this.$_initY$ = $compY$$1$$;
    "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$11$$, $diffY$$12$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$603$$, $diffX$$11$$, $diffY$$12$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == this.$_moveDrawable$.getId() || "rhb" == this.$_moveDrawable$.getId()) && this.$handleRightHandleDragPositioning$($event$$603$$, $diffX$$11$$, $diffY$$12$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$604$$) {
  var $touches$$10$$ = $event$$604$$.touches;
  this.$_touchStartX$ = $touches$$10$$[0].pageX;
  this.$_touchStartY$ = $touches$$10$$[0].pageY;
  2 == $touches$$10$$.length && ($event$$604$$.preventDefault(), this.$_touchStartX2$ = $touches$$10$$[1].pageX, this.$_touchStartY2$ = $touches$$10$$[1].pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$605_touches$$11$$) {
  $event$$605_touches$$11$$.preventDefault();
  $event$$605_touches$$11$$ = $event$$605_touches$$11$$.touches;
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $event$$605_touches$$11$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $event$$605_touches$$11$$[1].pageX, this.$_counter$ = 0)
  }else {
    var $pageDy$$1$$ = window.Math.abs(this.$_touchStartY$ - $event$$605_touches$$11$$[0].pageY);
    if(3 < window.Math.abs(this.$_touchStartX$ - $event$$605_touches$$11$$[0].pageX) || 3 < $pageDy$$1$$) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$606$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$606$$, this.$_touchStartX$, this.$_touchStartY$);
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$607$$) {
  var $delta$$17_keyCode$$40$$ = $event$$607$$.keyCode;
  if(37 === $delta$$17_keyCode$$40$$ || 39 === $delta$$17_keyCode$$40$$) {
    $delta$$17_keyCode$$40$$ = 37 === $delta$$17_keyCode$$40$$ ? -1 : 1, ($event$$607$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$607$$, $delta$$17_keyCode$$40$$, $delta$$17_keyCode$$40$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$608$$) {
  var $delta$$18_keyCode$$41$$ = $event$$608$$.keyCode;
  if(37 === $delta$$18_keyCode$$41$$ || 39 === $delta$$18_keyCode$$41$$) {
    $delta$$18_keyCode$$41$$ = 37 === $delta$$18_keyCode$$41$$ ? -1 : 1, ($event$$608$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $delta$$18_keyCode$$41$$, $delta$$18_keyCode$$41$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$609$$, $deltaX$$16$$, $deltaY$$19$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$16$$, $deltaY$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($deltaX$$17$$, $deltaY$$20$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$17$$, $deltaY$$20$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$62_type$$241$$, $delta$$19_deltaX$$18$$, $deltaY$$21$$) {
  var $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$63$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$44$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$19_deltaX$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$21$$ : $delta$$19_deltaX$$18$$;
  $pos$$63$$ + $delta$$19_deltaX$$18$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$44$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -2 : -1) : $pos$$63$$ + $newStartTime$$1_scrollTo_size$$44$$ + $delta$$19_deltaX$$18$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$44$$), $newStartTime$$1_scrollTo_size$$44$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $pos$$63$$ + $delta$$19_deltaX$$18$$), $newStartTime$$1_scrollTo_size$$44$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? 
  ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$44$$ - $pos$$63$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$63$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$62_type$$241$$ = new D.$DvtOverviewEvent$$($evt$$62_type$$241$$);
  $evt$$62_type$$241$$.$setPosition$($newStartTime$$1_scrollTo_size$$44$$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? ($newStartTime$$1_scrollTo_size$$44$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$63$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$63$$)) : ($newStartTime$$1_scrollTo_size$$44$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$63$$), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$63$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$62_type$$241$$, $newStartTime$$1_scrollTo_size$$44$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$62_type$$241$$, $newEndTime$$1_slidingWindow$$17$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$62_type$$241$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$611$$, $deltaX$$20$$, $deltaY$$23$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$611$$, $deltaX$$20$$, $deltaY$$23$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $delta$$20_deltaY$$24$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$63_size$$45$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$20_deltaY$$24$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$20_deltaY$$24$$ : $deltaX$$21_newEndTime$$2_slidingWindow$$18$$;
  if(0 != $delta$$20_deltaY$$24$$) {
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$20_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$20_deltaY$$24$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$)).x;
      $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$);
      if(0 < $delta$$20_deltaY$$24$$ && $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ <= $windowPos$$ || 0 > $delta$$20_deltaY$$24$$ && $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowPos$$ + $delta$$20_deltaY$$24$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ - $delta$$20_deltaY$$24$$)
    }else {
      if($windowSize$$ + $delta$$20_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$20_deltaY$$24$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$)).x;
      $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$);
      if(0 < $delta$$20_deltaY$$24$$ && $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$20_deltaY$$24$$ && $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ + $delta$$20_deltaY$$24$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$));
    $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ = $evt$$63_size$$45$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $evt$$63_size$$45$$ = new D.$DvtOverviewEvent$$("rangeChanging");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$45$$, "newSize", $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$);
    $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$45$$, "endHandle", $endHandle$$inline_7561_event$$612_newSize$$1_relPos$$59_time$$12$$);
    $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$45$$, "expand", 0 > $delta$$20_deltaY$$24$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$45$$, "expand", 0 < $delta$$20_deltaY$$24$$);
    (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + 
    (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)));
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$63_size$$45$$, $isLeft$$5_newStartTime$$2$$);
    (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$63_size$$45$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$63_size$$45$$)
  }
};
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$44$$ = this.$_start$, $end$$28_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$46$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$19$$ = this.$getChildAt$(1), $newStartTime$$3_time$$13$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newSize$$2_start$$44$$ = $oldEndTime_size$$46$$ * ($end$$28_oldStartTime$$ - $newSize$$2_start$$44$$) / 
  ($newStartTime$$3_time$$13$$ - $newSize$$2_start$$44$$), $end$$28_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$46$$ = this.$getPositionDate$(this.$_oldEndPos$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($newStartTime$$3_time$$13$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$13$$ = 
  this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)));
  var $evt$$64$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "newSize", $newSize$$2_start$$44$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "oldStartTime", $end$$28_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "oldEndTime", $oldEndTime_size$$46$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$64$$, $newStartTime$$3_time$$13$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$64$$, $newEndTime$$3_slidingWindow$$19$$);
  this.dispatchEvent($evt$$64$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $rightCenter$$1_slidingWindow$$20$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $left$$19$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$), $leftCenter$$1$$ = $left$$19$$ + 0.5, $rightCenter$$1_slidingWindow$$20$$ = $left$$19$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$) - 0.5, $leftHandle$$3$$ = 
  $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, $leftCenter$$1$$, $leftCenter$$1$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, $rightCenter$$1_slidingWindow$$20$$, $rightCenter$$1_slidingWindow$$20$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, $left$$19$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$), -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$613$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$613$$)
};
D.$DvtOverview$$.prototype.$destroy$ = function $$DvtOverview$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : 
  (this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, 
  this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this));
  D.$DvtOverview$$.$superclass$.$destroy$.call(this)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$54$$) {
  this.Init($view$$54$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$99$$) {
  return this.$ParseRootAttributes$($data$$99$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$228$$) {
  var $ret$$92$$ = {};
  $ret$$92$$.$animationOnClick$ = $options$$228$$.animationOnClick;
  $options$$228$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = $options$$228$$.startTime);
  $options$$228$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.end = $options$$228$$.endTime);
  $ret$$92$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = (new window.Date).getTime());
  if($ret$$92$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$92$$.end <= $ret$$92$$.start) {
    $ret$$92$$.end = $ret$$92$$.start + 864E5
  }
  $options$$228$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.currentTime = $options$$228$$.currentTime);
  $options$$228$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$initialFocusTime$ = $options$$228$$.initialFocusTime);
  $ret$$92$$.orientation = "horizontal";
  $options$$228$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.orientation = $options$$228$$.orientation);
  $ret$$92$$.$featuresOff$ = $options$$228$$.featuresOff;
  $ret$$92$$.$minimumWindowSize$ = $options$$228$$.minimumWindowSize;
  $ret$$92$$.$leftMargin$ = $options$$228$$.leftMargin;
  $ret$$92$$.$rightMargin$ = $options$$228$$.rightMargin;
  if($options$$228$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$228$$.viewportEndTime, $viewportStartTime$$ = $ret$$92$$.start;
    $options$$228$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$228$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$228$$.viewportStartTime);
    $ret$$92$$.width = $options$$228$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$228$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$92$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$92$$.$renderStart$ = $ret$$92$$.start
  }
  0 == $ret$$92$$.width && ($ret$$92$$.width = 1E3);
  $ret$$92$$.$overviewPosition$ = "below";
  $ret$$92$$.$selectionMode$ = "none";
  $ret$$92$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$getCtx$()).toString();
  $options$$228$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$isRtl$ = $options$$228$$.rtl.toString());
  $ret$$92$$.$handleFillColor$ = "#FFFFFF";
  $ret$$92$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$92$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$92$$.$windowBackgroundAlpha$ = 1;
  $ret$$92$$.$windowBorderTopStyle$ = "solid";
  $ret$$92$$.$windowBorderRightStyle$ = "solid";
  $ret$$92$$.$windowBorderBottomStyle$ = "solid";
  $ret$$92$$.$windowBorderLeftStyle$ = "solid";
  $ret$$92$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$92$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$92$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$92$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$92$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$92$$.$timeAxisBarOpacity$ = 1;
  $ret$$92$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$92$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$228$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$228$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleFillColor$ = $options$$228$$.style.handleFillColor), $options$$228$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleTextureColor$ = $options$$228$$.style.handleTextureColor), $options$$228$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleBackgroundImage$ = $options$$228$$.style.handleBackgroundImage), 
  $options$$228$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleWidth$ = $options$$228$$.style.handleWidth), $options$$228$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleHeight$ = $options$$228$$.style.handleHeight), $options$$228$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBackgroundColor$ = $options$$228$$.style.windowBackgroundColor), $options$$228$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$windowBackgroundAlpha$ = $options$$228$$.style.windowBackgroundAlpha), $options$$228$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopStyle$ = $options$$228$$.style.windowBorderTopStyle), $options$$228$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightStyle$ = $options$$228$$.style.windowBorderRightStyle), $options$$228$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomStyle$ = 
  $options$$228$$.style.windowBorderBottomStyle), $options$$228$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftStyle$ = $options$$228$$.style.windowBorderLeftStyle), $options$$228$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopColor$ = $options$$228$$.style.windowBorderTopColor), $options$$228$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightColor$ = $options$$228$$.style.windowBorderRightColor), 
  $options$$228$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomColor$ = $options$$228$$.style.windowBorderBottomColor), $options$$228$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftColor$ = $options$$228$$.style.windowBorderLeftColor), $options$$228$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$overviewBackgroundColor$ = $options$$228$$.style.overviewBackgroundColor), $options$$228$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$currentTimeIndicatorColor$ = $options$$228$$.style.currentTimeIndicatorColor), $options$$228$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$timeIndicatorColor$ = $options$$228$$.style.timeIndicatorColor), $options$$228$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$leftFilterPanelColor$ = $options$$228$$.style.leftFilterPanelColor), $options$$228$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$leftFilterPanelAlpha$ = $options$$228$$.style.leftFilterPanelAlpha), $options$$228$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelColor$ = $options$$228$$.style.rightFilterPanelColor), $options$$228$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelAlpha$ = $options$$228$$.style.rightFilterPanelAlpha));
  return $ret$$92$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$1_startTime$$3$$, $endTime$$3$$, $denominator_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$1_startTime$$3$$ = $viewportEndPos$$ * ($endTime$$3$$ - $number$$1_startTime$$3$$);
  $denominator_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator_viewportStartTime$$1$$;
  return 0 == $number$$1_startTime$$3$$ || 0 == $denominator_viewportStartTime$$1$$ ? 0 : $number$$1_startTime$$3$$ / $denominator_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$242$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$242$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$14$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$64$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$64$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
D.$DvtOverviewEventManager$$ = function $$DvtOverviewEventManager$$$($overview$$1$$) {
  this.Init($overview$$1$$.$getCtx$(), $overview$$1$$.$processEvent$, $overview$$1$$);
  this.$_overview$ = $overview$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEventManager$$, D.$DvtEventManager$$, "DvtOverviewEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverviewEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$74$$) {
  D.$DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$74$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$614$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$614$$) : this.$_onMouseDragStart$($event$$614$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$615$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$615$$) : this.$_onMouseDragMove$($event$$615$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$616$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$616$$) : this.$_onMouseDragEnd$($event$$616$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$11$$, $pageY$$11$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$11$$ - this.$_stageAbsolutePosition$.x, $pageY$$11$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$617$$) {
  if(2 != $event$$617$$.button) {
    var $relPos$$60$$ = this.$_getRelativePosition$($event$$617$$.pageX, $event$$617$$.pageY);
    (0,D.$DvtEventManager$consumeEvent$$)($event$$617$$);
    this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
    return this.$_overview$.$beginDragPan$($event$$617$$, $relPos$$60$$.x, $relPos$$60$$.y)
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$618$$) {
  var $relPos$$61$$ = this.$_getRelativePosition$($event$$618$$.pageX, $event$$618$$.pageY);
  $event$$618$$.stopPropagation();
  this.$_overview$.$contDragPan$($event$$618$$, $relPos$$61$$.x, $relPos$$61$$.y);
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($event$$619$$) {
  $event$$619$$.stopPropagation();
  this.$_overview$.$endDragPan$();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$620$$) {
  var $relPos$$62_touches$$12$$ = $event$$620$$.touches;
  $event$$620$$.stopPropagation();
  return 1 == $relPos$$62_touches$$12$$.length ? ($relPos$$62_touches$$12$$ = this.$_getRelativePosition$($relPos$$62_touches$$12$$[0].pageX, $relPos$$62_touches$$12$$[0].pageY), $event$$620$$.preventDefault(), this.$_overview$.$beginDragPan$($event$$620$$, $relPos$$62_touches$$12$$.x, $relPos$$62_touches$$12$$.y)) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$621$$) {
  var $relPos$$63_touches$$13$$ = $event$$621$$.touches;
  1 == $relPos$$63_touches$$13$$.length && ($relPos$$63_touches$$13$$ = this.$_getRelativePosition$($relPos$$63_touches$$13$$[0].pageX, $relPos$$63_touches$$13$$[0].pageY), this.$_overview$.$contDragPan$($event$$621$$, $relPos$$63_touches$$13$$.x, $relPos$$63_touches$$13$$.y), $event$$621$$.preventDefault());
  $event$$621$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$622$$) {
  this.$_overview$.$endDragPan$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$622$$);
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
  return D;
});