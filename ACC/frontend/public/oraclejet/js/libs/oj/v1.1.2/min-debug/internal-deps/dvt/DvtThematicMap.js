/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$584$$, $callback$$159$$, $callbackObj$$109$$) {
  this.Init($context$$584$$, $callback$$159$$, $callbackObj$$109$$)
};
(0,D.$goog$exportPath_$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$585$$, $callback$$160$$, $callbackObj$$110$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$585$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$585$$, $callback$$160$$, $callbackObj$$110$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$585$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$586$$, $callback$$161$$, $callbackObj$$111$$) {
  return new D.$DvtAmxThematicMap$$($context$$586$$, $callback$$161$$, $callbackObj$$111$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$262$$, $availSpace$$125_width$$155$$, $height$$140$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$262$$);
  this.$_width$ = $availSpace$$125_width$$155$$;
  this.$_height$ = $height$$140$$;
  $availSpace$$125_width$$155$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$125_width$$155$$, $height$$140$$);
  this.$_renderLegend$(this, $availSpace$$125_width$$155$$);
  this.$_tmap$.$render$($options$$262$$, $availSpace$$125_width$$155$$.$w$, $availSpace$$125_width$$155$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$189$$, $availSpace$$126$$) {
  this.$_legend$ && ($container$$189$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$126$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$126$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$28_options$$263$$ = this.$Options$, $position$$61_rendered$$6$$ = $gap$$28_options$$263$$.legend.rendered, $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ = $gap$$28_options$$263$$.legend.scrolling, 
  $legendOptions$$10$$ = D.$DvtJSONUtils$$.$clone$($gap$$28_options$$263$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$10$$);
  if($position$$61_rendered$$6$$ && !($legendOptions$$10$$.$sections$ && 0 == $legendOptions$$10$$.$sections$.length)) {
    $position$$61_rendered$$6$$ = $gap$$28_options$$263$$.legend.position;
    delete $legendOptions$$10$$.position;
    $legendOptions$$10$$.layout.gapRatio = (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this);
    $legendOptions$$10$$.hideAndShowBehavior = "none";
    $legendOptions$$10$$.rolloverBehavior = "none";
    $legendOptions$$10$$.scrolling = $gap$$28_options$$263$$.legend.scrolling;
    var $legend$$31$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$getCtx$());
    $container$$189$$.$addChild$($legend$$31$$);
    "auto" == $position$$61_rendered$$6$$ && "asNeeded" !== $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ ? $position$$61_rendered$$6$$ = "bottom" : "auto" == $position$$61_rendered$$6$$ && "asNeeded" == $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ && ($position$$61_rendered$$6$$ = "end");
    $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$189$$.$getCtx$());
    "start" == $position$$61_rendered$$6$$ ? $position$$61_rendered$$6$$ = $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ ? "right" : "left" : "end" == $position$$61_rendered$$6$$ && ($position$$61_rendered$$6$$ = $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ ? "left" : "right");
    $legendOptions$$10$$.orientation = "left" == $position$$61_rendered$$6$$ || "right" == $position$$61_rendered$$6$$ ? "vertical" : "horizontal";
    $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ = "top" == $position$$61_rendered$$6$$ || "bottom" == $position$$61_rendered$$6$$;
    $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ = $legend$$31$$.$getPreferredSize$($legendOptions$$10$$, $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ ? $availLegendSpace$$.$w$ : $gap$$28_options$$263$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$ ? $gap$$28_options$$263$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$w$ && 0 < $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$h$) {
      switch($legend$$31$$.$render$($legendOptions$$10$$, $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$h$), this.$_legend$ = $legend$$31$$, $gap$$28_options$$263$$ = window.Math.ceil($gap$$28_options$$263$$.layout.legendGap * (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this)), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position$$61_rendered$$6$$, $legend$$31$$, $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$h$, 
      $gap$$28_options$$263$$), $position$$61_rendered$$6$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$126$$.$h$ -= $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$126$$.$w$ -= $actualSize$$2_isHoriz$$16_isRTL$$40_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getGapRatio$$ = function $$JSCompiler_StaticMethods_getGapRatio$$$($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$) {
  if($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio)) {
    return $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio
  }
  var $wRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_width$ / 400, 1);
  $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_height$ / 300, 1);
  return window.Math.min($wRatio$$, $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$106$$, $legendOptions$$11$$) {
  $legendOptions$$11$$.title = $data$$106$$.legend ? $data$$106$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$11$$.sections = [];
  if($data$$106$$ && $data$$106$$.legend && $data$$106$$.legend.sections) {
    for(var $i$$790$$ = 0;$i$$790$$ < $data$$106$$.legend.sections.length;$i$$790$$++) {
      var $dataSection$$1$$ = $data$$106$$.legend.sections[$i$$790$$];
      $dataSection$$1$$ && $legendOptions$$11$$.sections.push({title:$dataSection$$1$$.title, items:$dataSection$$1$$.items, sections:$dataSection$$1$$.sections})
    }
  }
  return $legendOptions$$11$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$597$$, $callback$$162$$, $callbackObj$$112$$) {
  this.Init($context$$597$$, $callback$$162$$, $callbackObj$$112$$)
};
(0,D.$goog$exportPath_$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$598$$, $callback$$163$$, $callbackObj$$113$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$598$$, $callback$$163$$, $callbackObj$$113$$);
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = D.$JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$;
  this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$;
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$_eventHandler$.$associate$(this, this);
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$599$$, $callback$$164$$, $callbackObj$$114$$) {
  return new D.$DvtThematicMap$$($context$$599$$, $callback$$164$$, $callbackObj$$114$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$266$$) {
  D.$DvtThematicMap$$.$superclass$.$SetOptions$.call(this, $options$$266$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
D.$DvtThematicMap$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$20$$) {
  for(var $i$$813$$ = 0;$i$$813$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$813$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$813$$].$LayerName$ == $layerName$$20$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$813$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$20$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$22_featuresOff$$1$$) {
  $attr$$22_featuresOff$$1$$ = (0,window.parseInt)($attr$$22_featuresOff$$1$$);
  var $controls$$5$$ = this.$_displayedControls$;
  if(1 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -17, this.$_panning$ = D.$JSCompiler_alias_FALSE$$
  }
  if(2 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -4098, this.$_zooming$ = D.$JSCompiler_alias_FALSE$$
  }
  if(4 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -257
  }
  this.$_displayedControls$ = $controls$$5$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$27$$) {
  this.$_drillMode$ = $attr$$27$$;
  this.$_eventHandler$.$setDrillMode$($attr$$27$$)
};
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  D.$DvtThematicMap$$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = D.$JSCompiler_alias_NULL$$, this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = 
  new D.$DvtContainer$$(this.$getCtx$()), this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$, this.$_eventHandler$.$removeListeners$(this), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$, this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$associate$(this, 
  this))
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$getCtx$(), $JSCompiler_StaticMethods__createHandlers$self$$.$__dispatchEvent$, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$756_x$$272$$) {
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) || ($event$$756_x$$272$$ = this.getWidth() - 5 - $event$$756_x$$272$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$756_x$$272$$))
};
D.$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendData$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ = "true" == this.$_legendData$.disclosed, $isFixed$$2$$ = "fixed" == this.$_legendData$.display || (0,D.$DvtAgent$isEnvironmentBatik$$)();
    if(!$isFixed$$2$$ || $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$) {
      var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$ = this.$_legendData$.maxWidth, $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$.indexOf("%"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$ = 
      -1 != $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$ ? (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$.substring(0, $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$)) / 100 * this.getWidth() : (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$), 
      $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$ = this.getHeight() - 10;
      "alta" == this.$_skinName$ ? (this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$), this.$_legendPanel$.$setMaxHeight$($collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$), 
      this.$_legendPanel$.$_isFixed$ = $isFixed$$2$$, (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? (this.$_legendPanel$.$_discloseDirection$ = "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.getWidth())) : (this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$getCtx$(), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$, $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$, 
      "col_northeast", (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getSubcomponentStyles$(), $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$, $isFixed$$2$$), this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$ = 
      this.$_legendPanel$, $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$ = this.$_legendData$.collapseTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$.$_expandTooltip$ = this.$_legendData$.expandTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$.$_collapseTooltip$ = $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$);
      $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$ = this.$_legendData$;
      this.$_legend$ = (0,D.$DvtLegend$newInstance$$)(this.$getCtx$(), this.$processLegendEvent$, this);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$ = this.$_legend$.$getPreferredSize$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$());
      this.$_legend$.$render$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$, $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$.$w$, $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$.$h$);
      var $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, this.$_legend$.$getContentDimensions$().$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $downState$$20$$ = new D.$DvtImage$$(this.$getCtx$(), 
        (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$5$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$, $collapse$$inline_8319_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$7$$, $downState$$20$$, $tip$$5$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$ = this.$_legendPanel$, $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_contentContainer$.$addChild$($dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$), $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$), $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_contentContainer$.$getDimensions$(), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_width$ = 
        window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_maxWidth$, $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$.$w$ + 10), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_height$ = window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_maxHeight$, $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$.$h$ + 
        10), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_background$ ? ($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_height$)), $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonFrame$ && $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ && $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_width$)) : 
        ($dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_height$)), 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_styleMap$.borderAlpha, $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_bgAlpha$), 
        $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_borderColor$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8317_alpha$$inline_11391_legendData$$7_maxWidth$$28_upState$$23$$), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_background$ = $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_background$, 0), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$getCtx$(), 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_styleMap$.borderAlpha), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonFrame$), $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseExpandButton$ = $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_styleMap$, $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_styleMap$, $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseExpandButton$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ ? $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_width$ : -10), (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$) : ($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$OnButtonHoverOut$, 
        D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$_collapse$ && (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$ = 
        (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? 5 : this.getWidth() - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$w$ - $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, $dims$$inline_8323_disclosed$$4_object$$inline_8322_rect$$inline_11390_west$$inline_11394_west$$inline_8324_x$$273$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$w$ += 
        5
      }
      if(this.$_isFixedLegend$ = $isFixed$$2$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_8321_legendPanelDim$$.$w$, this.$_pzc$.$setSize$(this.getWidth() - this.$_legendWidth$, this.getHeight(), D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  D.$DvtThematicMap$$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$getCtx$()), $bounds$$156_cpContainer$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($bounds$$156_cpContainer$$);
  this.$_render$($pzcContainer$$, $bounds$$156_cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    $bounds$$156_cpContainer$$ = new D.$DvtRectangle$$(0, 0, this.getWidth(), this.getHeight());
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), this.$_animationOnDisplay$, this.$_pzc$, $bounds$$156_cpContainer$$, this.$_animationDuration$))
    }else {
      var $anim$$43$$ = D.$JSCompiler_alias_NULL$$;
      this.$_bBaseMapChanged$ && !this.$_isResize$ ? $anim$$43$$ = this.$_animationOnMapChange$ : this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$43$$ = this.$_topLayer$.$getAnimation$());
      D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$43$$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $anim$$43$$, this.$_oldPzc$, this.$_pzc$, $bounds$$156_cpContainer$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$)
    }
    this.$_animation$ ? (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play()) : this.$OnAnimationEnd$();
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this]);
    this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$.$_render$ = function $$JSCompiler_prototypeAlias$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$814$$ = 0;$i$$814$$ < this.$_layers$.length;$i$$814$$++) {
    var $layer$$10$$ = this.$_layers$[$i$$814$$];
    if(!this.$_topLayerRendered$ && $layer$$10$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$10$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$10$$.$render$($isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$), !this.$_topLayerRendered$ && $layer$$10$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$10$$)
    }
  }
  this.$_topLayer$ && ($isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$ = this.$_topLayer$.$_isolatedArea$, this.$_isolatedArea$ != $isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$ && (this.$_isolatedArea$ = $isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$, this.$_initialZoom$ = this.$_initialCenterY$ = this.$_initialCenterX$ = D.$JSCompiler_alias_NULL$$), $isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 
  0 == $isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$.length && ($isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && ($isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$ = $isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $isolatedArea$$1_navigable$$inline_8336_navigables$$11_pzcMatrix$$18$$), 
  this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, !this.$_bBaseMapChanged$ && !this.$_isResize$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_pzc$, this.$_initialZoom$), (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_pzc$, this.$_initialCenterX$, this.$_initialCenterY$)) : 
  this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_prototypeAlias$$.$updateLayer$ = function $$JSCompiler_prototypeAlias$$$$updateLayer$$($dataLayerOptions$$, $parentLayer$$2$$, $isAreaDataLayer$$) {
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(new D.$DvtThematicMapJsonParser$$(this), [$dataLayerOptions$$], (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, $parentLayer$$2$$), this.$_topLayer$.$LayerName$, $isAreaDataLayer$$);
  this.$_renderLegend$();
  this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this)
};
D.$DvtThematicMap$$.prototype.updateLayer = D.$DvtThematicMap$$.prototype.$updateLayer$;
D.$JSCompiler_StaticMethods__updateZoomLimits$$ = function $$JSCompiler_StaticMethods__updateZoomLimits$$$($JSCompiler_StaticMethods__updateZoomLimits$self$$) {
  var $fittedZoom_zoomPadding$$inline_8355$$;
  $fittedZoom_zoomPadding$$inline_8355$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$_zoomToFitPadding$;
  var $mapDim$$inline_8356$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_topLayer$.$getLayerDim$(), $pzcDim$$inline_8357$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$getSize$();
  $fittedZoom_zoomPadding$$inline_8355$$ = window.Math.min(($pzcDim$$inline_8357$$.$w$ - 2 * $fittedZoom_zoomPadding$$inline_8355$$) / $mapDim$$inline_8356$$.$w$, ($pzcDim$$inline_8357$$.$h$ - 2 * $fittedZoom_zoomPadding$$inline_8355$$) / $mapDim$$inline_8356$$.$h$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMinZoom$($fittedZoom_zoomPadding$$inline_8355$$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMaxZoom$($fittedZoom_zoomPadding$$inline_8355$$ * ($JSCompiler_StaticMethods__updateZoomLimits$self$$.$_zooming$ ? $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_maxZoomFactor$ : 1))
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$_isolatedArea$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$());
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$)
};
D.$DvtThematicMap$$.prototype.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$19$$) {
  var $mat$$50$$ = new D.$DvtMatrix$$;
  $mat$$50$$.translate($pzcMatrix$$19$$.$_tx$, $pzcMatrix$$19$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$50$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$50$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$757$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, "isLegendDisclosed", "show" == $event$$757$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$127_event$$758$$, $bRecenterObjs_transMat$$) {
  if($animator$$127_event$$758$$ = $animator$$127_event$$758$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$51$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$127_event$$758$$, $contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127_event$$758$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$51$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$51$$.$_tx$, $mat$$51$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127_event$$758$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127_event$$758$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$) {
  switch($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$ = $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$_newZoom$;
        $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$ = this.$_pzc$.$getSize$();
        $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$ = new D.$DvtRectangle$$($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$.$w$ - 2 * $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$.$h$ - 2 * 
        $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$);
        var $legendAdjust$$inline_8393_mapDim$$inline_8388$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_8394_zoomedMapX$$inline_8389$$ = $legendAdjust$$inline_8393_mapDim$$inline_8388$$.x * $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$, $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$ = $legendAdjust$$inline_8393_mapDim$$inline_8388$$.y * $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$, $zoomedMapW$$inline_8391$$ = $legendAdjust$$inline_8393_mapDim$$inline_8388$$.$w$ * 
        $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$, $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$ = $legendAdjust$$inline_8393_mapDim$$inline_8388$$.$h$ * $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$, $legendAdjust$$inline_8393_mapDim$$inline_8388$$ = 0;
        $zoomedMapW$$inline_8391$$ > $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$w$ ? (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8393_mapDim$$inline_8388$$ = this.$_legendWidth$), this.$_pzc$.$_minPanX$ = $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.x + $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$w$ + $legendAdjust$$inline_8393_mapDim$$inline_8388$$ - 
        ($minMaxX$$inline_8394_zoomedMapX$$inline_8389$$ + $zoomedMapW$$inline_8391$$), this.$_pzc$.$_maxPanX$ = $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.x - $minMaxX$$inline_8394_zoomedMapX$$inline_8389$$ + $legendAdjust$$inline_8393_mapDim$$inline_8388$$) : (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8393_mapDim$$inline_8388$$ = 2 * this.$_legendWidth$), $minMaxX$$inline_8394_zoomedMapX$$inline_8389$$ = 
        ($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.x + $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$w$ + $legendAdjust$$inline_8393_mapDim$$inline_8388$$) / 2 - ($minMaxX$$inline_8394_zoomedMapX$$inline_8389$$ + $zoomedMapW$$inline_8391$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_8394_zoomedMapX$$inline_8389$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_8394_zoomedMapX$$inline_8389$$);
        $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$ > $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.y + $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$h$ - ($pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$ + $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$), this.$_pzc$.$_maxPanY$ = $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.y - 
        $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$) : ($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$ = ($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.y + $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$h$) / 2 - ($pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$ + $i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$ / 2), this.$_pzc$.$_minPanY$ = $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, 
        this.$_pzc$.$_maxPanY$ = $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, "panX", $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, "panY", $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$.$_ty$);
        $event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        this.$__dispatchEvent$($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$);
        for($i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$ = 0;$i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$ < this.$_layers$.length;$i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$++) {
          this.$_layers$[$i$$815_zoom$$inline_8384_zoomedMapH$$inline_8392$$].$HandleZoomEvent$($event$$759_minMaxY$$inline_8395_padding$$inline_8385_viewportDim$$inline_8387$$, $pzcDim$$inline_8386_pzcMatrix$$20_zoomedMapY$$inline_8390$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitEnd":
      this.$__dispatchEvent$(new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$760_i$$816_stroke$$114$$) {
  var $subType$$9$$ = $event$$760_i$$816_stroke$$114$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$9$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$760_i$$816_stroke$$114$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$9$$ && $event$$760_i$$816_stroke$$114$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$21_styleMap$$93$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$760_i$$816_stroke$$114$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$760_i$$816_stroke$$114$$, "panX", $pzcMatrix$$21_styleMap$$93$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$760_i$$816_stroke$$114$$, "panY", $pzcMatrix$$21_styleMap$$93$$.$_ty$);
      $event$$760_i$$816_stroke$$114$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      this.$__dispatchEvent$($event$$760_i$$816_stroke$$114$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$21_styleMap$$93$$);
      for($event$$760_i$$816_stroke$$114$$ = 0;$event$$760_i$$816_stroke$$114$$ < this.$_layers$.length;$event$$760_i$$816_stroke$$114$$++) {
        this.$_layers$[$event$$760_i$$816_stroke$$114$$].$HandlePanEvent$($pzcMatrix$$21_styleMap$$93$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$9$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$9$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$21_styleMap$$93$$ = this.$getSubcomponentStyles$(), $event$$760_i$$816_stroke$$114$$ = this.$_legendPanel$.$_background$.$getStroke$().$clone$(), "dragPanBegin" === $subType$$9$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.backgroundDragAlpha), 
  $event$$760_i$$816_stroke$$114$$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$760_i$$816_stroke$$114$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$9$$ && (this.$_legend$.$setAlpha$(1), $event$$760_i$$816_stroke$$114$$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$760_i$$816_stroke$$114$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$GetControlPanelBehavior$ = function $$DvtThematicMap$$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || "alta" == this.$_skinName$) ? "hidden" : D.$DvtThematicMap$$.$superclass$.$GetControlPanelBehavior$.call(this)
};
D.$DvtThematicMap$$.prototype.$GetControlPanel$ = function $$DvtThematicMap$$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$3$$ ? new D.$DvtThematicMapControlPanel$$(this.$getCtx$(), this, "initCollapsed" == $cpBehavior$$3$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$817$$ = 0;$i$$817$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$817$$++) {
    var $layerName$$22$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$817$$].$LayerName$;
    $layerName$$22$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$22$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$22$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$22$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$22$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_8398_removeObjs$$ = [], $addObjs$$ = [], $i$$818_j$$114$$ = this.$_layers$.length - 1;-1 < $i$$818_j$$114$$;$i$$818_j$$114$$--) {
    this.$_layers$[$i$$818_j$$114$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$818_j$$114$$].reset($addObjs$$) : this.$_layers$[$i$$818_j$$114$$].reset($animator$$inline_8398_removeObjs$$)
  }
  for($i$$818_j$$114$$ = 0;$i$$818_j$$114$$ < $animator$$inline_8398_removeObjs$$.length;$i$$818_j$$114$$++) {
    if($animator$$inline_8398_removeObjs$$[$i$$818_j$$114$$]) {
      var $parent$$85$$ = $animator$$inline_8398_removeObjs$$[$i$$818_j$$114$$].getParent();
      $parent$$85$$ && $parent$$85$$.removeChild($animator$$inline_8398_removeObjs$$[$i$$818_j$$114$$])
    }
  }
  for($i$$818_j$$114$$ = 0;$i$$818_j$$114$$ < $addObjs$$.length;$i$$818_j$$114$$++) {
    $addObjs$$[$i$$818_j$$114$$] && $addObjs$$[$i$$818_j$$114$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_8398_removeObjs$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_8398_removeObjs$$);
  $animator$$inline_8398_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$157$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$52$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$52$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$52$$.$_d$;
    $pointBounds$$.x /= $mat$$52$$.$_a$;
    $pointBounds$$.y /= $mat$$52$$.$_d$
  }
  $areaBounds_bounds$$157$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$157$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  var $maxZoom$$4$$;
  $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_bZoomingEnabled$ || ($maxZoom$$4$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$getMaxZoom$(), $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$ * $JSCompiler_StaticMethods__zoomData$self$$.$_maxZoomFactor$));
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && ($JSCompiler_StaticMethods__zoomData$self$$.$_animation$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$getCtx$(), 0.3));
  0 < $areaBounds_bounds$$157$$.$w$ && 0 < $areaBounds_bounds$$157$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $areaBounds_bounds$$157$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__zoomData$self$$.$_animation$ && $JSCompiler_StaticMethods__zoomData$self$$.$_animation$.play();
  $maxZoom$$4$$ && $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$)
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$158$$) {
  var $animator$$128$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$128$$, $bounds$$158$$);
  $animator$$128$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer$$13_selection$$43_selectionHandler$$13$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer$$13_selection$$43_selectionHandler$$13$$ && ($dataLayer$$13_selection$$43_selectionHandler$$13$$ = $dataLayer$$13_selection$$43_selectionHandler$$13$$.$_selectionHandler$)) {
      for(var $dataLayer$$13_selection$$43_selectionHandler$$13$$ = $dataLayer$$13_selection$$43_selectionHandler$$13$$.getSelection(), $i$$819$$ = 0;$i$$819$$ < $dataLayer$$13_selection$$43_selectionHandler$$13$$.length;$i$$819$$++) {
        $dataLayer$$13_selection$$43_selectionHandler$$13$$[$i$$819$$] = $dataLayer$$13_selection$$43_selectionHandler$$13$$[$i$$819$$].$getDisplayable$()
      }
      if(0 < $dataLayer$$13_selection$$43_selectionHandler$$13$$.length) {
        for(var $bounds$$159$$ = $dataLayer$$13_selection$$43_selectionHandler$$13$$[0].$getDimensions$(), $i$$819$$ = 1;$i$$819$$ < $dataLayer$$13_selection$$43_selectionHandler$$13$$.length;$i$$819$$++) {
          $bounds$$159$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$159$$, $dataLayer$$13_selection$$43_selectionHandler$$13$$[$i$$819$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$159$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$23$$) {
  var $parentLayerName$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$23$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$24$$) {
  var $childLayerName$$1$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$24$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$5$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$820$$ = 0;$i$$820$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$820$$++) {
      var $dataLayers$$3$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$820$$].$DataLayers$, $id$$285$$;
      for($id$$285$$ in $dataLayers$$3$$) {
        $disclosed$$5$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$820$$].$LayerName$ ? $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$3$$[$id$$285$$])) : $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$3$$[$id$$285$$]))
      }
    }
  }
  return $disclosed$$5$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$19$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$821$$ = 0;$i$$821$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$821$$++) {
      var $dataLayers$$4$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$821$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$821$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$821$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$286$$ in $dataLayers$$4$$) {
          $navigable$$19$$ = $navigable$$19$$.concat($dataLayers$$4$$[$id$$286$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$19$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$22$$) {
  this.$_currentAnimMatrix$ = $matrix$$22$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$63$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$822_j$$115$$ = 0;$i$$822_j$$115$$ < $numLabelLayers_objs$$63$$.length;$i$$822_j$$115$$++) {
      $numLabelLayers_objs$$63$$[$i$$822_j$$115$$].$HandleZoomEvent$($matrix$$22$$)
    }
    $numLabelLayers_objs$$63$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$822_j$$115$$ = 0;$i$$822_j$$115$$ < $numLabelLayers_objs$$63$$;$i$$822_j$$115$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$822_j$$115$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$10$$ = 0;$k$$10$$ < $numLabels$$1$$;$k$$10$$++) {
        var $label$$98$$ = $labelLayer$$.$getChildAt$($k$$10$$);
        $label$$98$$ instanceof D.$DvtMapLabel$$ && $label$$98$$.update($matrix$$22$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$3$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$5$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    var $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$];
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$3$$.reset($fadeInObjs$$5$$, $selectedAreas$$1$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    for(var $newSelectedAreas$$ = [], $i$$823$$ = 0;$i$$823$$ < $selectedAreas$$1$$.length;$i$$823$$++) {
      var $parentArea$$ = $selectedAreas$$1$$[$i$$823$$], $JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$3$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_8401_j$$116$$ = 0;$areaName$$inline_8401_j$$116$$ < $JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.length;$areaName$$inline_8401_j$$116$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$[$areaName$$inline_8401_j$$116$$]] = $selectedAreas$$1$$[$i$$823$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$, $fadeInObjs$$5$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$ = $parentLayer$$3$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_8401_j$$116$$ = $parentArea$$, $fadeOutObjs$$inline_8402$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$ = 0;$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$ < $JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$].$getLocation$() == $areaName$$inline_8401_j$$116$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_8401_j$$116$$);
            $fadeOutObjs$$inline_8402$$.push($JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$].$getDisplayable$());
            if($i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$ = $JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$].$getLabel$()) {
              $fadeOutObjs$$inline_8402$$.push($i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$), ($i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$ = $i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$.$_leaderLine$) && $fadeOutObjs$$inline_8402$$.push($i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$)
            }
            break
          }
        }
        for($i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$ = 0;$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$ < $JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$].$getLocation$() == $areaName$$inline_8401_j$$116$$) {
            $fadeOutObjs$$inline_8402$$.push($JSCompiler_StaticMethods_drill$self$$inline_8400_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8403_label$$inline_8404_leaderLine$$inline_8405$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$5$$, D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$4$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$6$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$2$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$824$$ = 0;$i$$824$$ < $selectedAreas$$2$$.length;$i$$824$$++) {
    var $index$$241_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$2$$[$i$$824$$]];
    $newSelectedAreas$$1$$.push($index$$241_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$241_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$4$$, $index$$241_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_8407$$ = $parentLayer$$4$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$4$$.$LayerName$]), $areaName$$inline_8408$$ = $index$$241_parentArea$$1$$, $fadeInObjs$$inline_8409$$ = $fadeInObjs$$6$$, $i$$inline_8410_label$$inline_8413$$ = 0;$i$$inline_8410_label$$inline_8413$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_areaObjs$.length;$i$$inline_8410_label$$inline_8413$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_areaObjs$[$i$$inline_8410_label$$inline_8413$$].$getLocation$() == $areaName$$inline_8408$$) {
          var $displayable$$inline_8412_idx$$inline_8411$$ = D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_drilled$, $areaName$$inline_8408$$);
          $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_drilled$.splice($displayable$$inline_8412_idx$$inline_8411$$, 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_areaObjs$[$i$$inline_8410_label$$inline_8413$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          $displayable$$inline_8412_idx$$inline_8411$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_areaObjs$[$i$$inline_8410_label$$inline_8413$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_dataAreaLayer$.$addChild$($displayable$$inline_8412_idx$$inline_8411$$);
          $fadeInObjs$$inline_8409$$.push($displayable$$inline_8412_idx$$inline_8411$$);
          if($i$$inline_8410_label$$inline_8413$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_areaObjs$[$i$$inline_8410_label$$inline_8413$$].$getLabel$()) {
            $i$$inline_8410_label$$inline_8413$$.update($JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_pzcMatrix$), $fadeInObjs$$inline_8409$$.push($i$$inline_8410_label$$inline_8413$$), $fadeInObjs$$inline_8409$$.push($i$$inline_8410_label$$inline_8413$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_8410_label$$inline_8413$$ = 0;$i$$inline_8410_label$$inline_8413$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_dataObjs$.length;$i$$inline_8410_label$$inline_8413$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_dataObjs$[$i$$inline_8410_label$$inline_8413$$].$getLocation$() == $areaName$$inline_8408$$) {
          $displayable$$inline_8412_idx$$inline_8411$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_dataObjs$[$i$$inline_8410_label$$inline_8413$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8407$$.$_dataPointLayer$.$addChild$($displayable$$inline_8412_idx$$inline_8411$$);
          $fadeInObjs$$inline_8409$$.push($displayable$$inline_8412_idx$$inline_8411$$);
          break
        }
      }
      $index$$241_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$241_parentArea$$1$$);
      -1 != $index$$241_parentArea$$1$$ && this.$_drilled$.splice($index$$241_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$6$$, D.$JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$4$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$3$$, $newObjs$$3$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if("zoomToFit" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$130$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), 0.3);
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($animator$$130$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$130$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$130$$ && $animator$$130$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  if((0,D.$DvtAgent$isEnvironmentBrowser$$)() && ("alphaFade" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ || "auto" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$)) {
    $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), "alphaFade", $oldObjs$$3$$, $newObjs$$3$$, D.$JSCompiler_alias_NULL$$, 0.5)
  }
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$761$$) {
  var $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ = $event$$761$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$761$$.getSelection();
      for(var $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$9380$$ = this.$_clickedLayerName$, $selectedObjs$$inline_11421$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_11422$$ = [], $areaObjs$$inline_11423$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_11424$$ = 0;$i$$inline_11424$$ < $selectedObjs$$inline_11421$$.length;$i$$inline_11424$$++) {
        for(var $j$$inline_11425$$ = 0;$j$$inline_11425$$ < $areaObjs$$inline_11423$$.length;$j$$inline_11425$$++) {
          if($areaObjs$$inline_11423$$[$j$$inline_11425$$].getId() == $selectedObjs$$inline_11421$$[$i$$inline_11424$$]) {
            $selectedAreas$$inline_11422$$.push($areaObjs$$inline_11423$$[$j$$inline_11425$$].$getLocation$());
            break
          }
        }
      }
      $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$[$JSCompiler_temp_const$$9380$$] = $selectedAreas$$inline_11422$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$761$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$761$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ = $event$$761$$.$_drillType$, $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$761$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$ || "hidePopup" == $JSCompiler_temp_const$$9381_drillType$$inline_8420_type$$249$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$761$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtThematicMap$$.$superclass$.$__dispatchEvent$.call(this, $event$$761$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$26$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$26$$), $parentLayer$$5$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$26$$);
    $childLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$);
    $parentLayer$$5$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtThematicMap$$.prototype.destroy = D.$DvtThematicMap$$.prototype.$destroy$;
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)(this);
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
  this.$_bListenersRemoved$ && (this.$_eventHandler$.$addListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$825$$ = 0;$i$$825$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$825$$++) {
      var $obj$$354$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$825$$];
      if($obj$$354$$) {
        if($obj$$354$$ instanceof D.$DvtMapLabel$$) {
          $obj$$354$$.reset()
        }else {
          if($obj$$354$$.$isDrilled$ && $obj$$354$$.$isDrilled$()) {
            $obj$$354$$.$setAlpha$(0)
          }else {
            var $parent$$86$$ = $obj$$354$$.getParent();
            $parent$$86$$ && $parent$$86$$.removeChild($obj$$354$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$250$$, $category$$24$$) {
  var $rolloverEvent$$7$$ = new D.$DvtCategoryRolloverEvent$$($type$$250$$, $category$$24$$), $objects$$5$$ = [], $layerId_legendItems$$;
  for($layerId_legendItems$$ in this.$_areas$) {
    for(var $key$$123_wrapper$$ in this.$_areas$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_areas$[$layerId_legendItems$$][$key$$123_wrapper$$])
    }
  }
  for($layerId_legendItems$$ in this.$_markers$) {
    for($key$$123_wrapper$$ in this.$_markers$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_markers$[$layerId_legendItems$$][$key$$123_wrapper$$])
    }
  }
  $layerId_legendItems$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$ in $layerId_legendItems$$) {
    $key$$123_wrapper$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$[$legendCategory$$].$getContentShape$(), $legendCategory$$), $objects$$5$$.push($key$$123_wrapper$$)
  }
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($rolloverEvent$$7$$.$_category$, $objects$$5$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtThematicMap$$.prototype.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$getAutomation$ = function $$DvtThematicMap$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMap$$.prototype.$GetComponentDescription$ = function $$DvtThematicMap$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "THEMATIC_MAP")
};
D.$DvtThematicMap$$.prototype.$processLegendEvent$ = function $$DvtThematicMap$$$$$processLegendEvent$$($event$$764$$) {
  "dvtResizeEvent" == $event$$764$$.$getType$() && this.$_legend$ && this.$_legend$.$FireListener$($event$$764$$)
};
D.$DvtThematicMap$$.prototype.$highlight$ = function $$DvtThematicMap$$$$$highlight$$($categories$$28$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$28$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$28$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), "any" == this.$Options$.highlightMatch)
};
D.$DvtThematicMap$$.prototype.highlight = D.$DvtThematicMap$$.prototype.$highlight$;
D.$DvtThematicMap$$.prototype.$processDefaultHoverEffect$ = function $$DvtThematicMap$$$$$processDefaultHoverEffect$$($id$$288$$, $hovered$$3$$) {
  var $dataItem$$43$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$288$$);
  $dataItem$$43$$ && $dataItem$$43$$.$processDefaultHoverEffect$($hovered$$3$$)
};
D.$DvtThematicMap$$.prototype.processDefaultHoverEffect = D.$DvtThematicMap$$.prototype.$processDefaultHoverEffect$;
D.$DvtThematicMap$$.prototype.$processDefaultSelectionEffect$ = function $$DvtThematicMap$$$$$processDefaultSelectionEffect$$($id$$289$$, $selected$$47$$) {
  var $dataItem$$44$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$289$$);
  $dataItem$$44$$ && $dataItem$$44$$.$processDefaultSelectionEffect$($selected$$47$$)
};
D.$DvtThematicMap$$.prototype.processDefaultSelectionEffect = D.$DvtThematicMap$$.prototype.$processDefaultSelectionEffect$;
D.$DvtThematicMap$$.prototype.$processDefaultFocusEffect$ = function $$DvtThematicMap$$$$$processDefaultFocusEffect$$($id$$290$$, $focused$$4$$) {
  var $dataItem$$45$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$290$$);
  $dataItem$$45$$ && $dataItem$$45$$.$processDefaultFocusEffect$($focused$$4$$)
};
D.$DvtThematicMap$$.prototype.processDefaultFocusEffect = D.$DvtThematicMap$$.prototype.$processDefaultFocusEffect$;
D.$JSCompiler_StaticMethods__getDataItemById$$ = function $$JSCompiler_StaticMethods__getDataItemById$$$($JSCompiler_StaticMethods__getDataItemById$self$$, $id$$291$$) {
  for(var $i$$827$$ = 0;$i$$827$$ < $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$.length;$i$$827$$++) {
    var $dataLayers$$6$$ = $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$[$i$$827$$].$DataLayers$, $dlId$$;
    for($dlId$$ in $dataLayers$$6$$) {
      for(var $dataObjs$$2$$ = $dataLayers$$6$$[$dlId$$].$_dataObjs$, $i$$827$$ = 0;$i$$827$$ < $dataObjs$$2$$.length;$i$$827$$++) {
        if($dataObjs$$2$$[$i$$827$$].getId() === $id$$291$$) {
          return $dataObjs$$2$$[$i$$827$$]
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", highlightMatch:"all", hoverBehavior:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", hoverBehaviorDelay:200, dataAreaDefaults:{borderColor:"#FFFFFF", 
drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:0.5, color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:D.$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, 
layout:{gapRatio:D.$JSCompiler_alias_NULL$$, legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selectionMode:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$838$$ = 0;$i$$838$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$838$$++) {
    var $dataLayers$$10$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$838$$].$DataLayers$, $id$$294$$;
    for($id$$294$$ in $dataLayers$$10$$) {
      var $dragSource$$3$$ = $dataLayers$$10$$[$id$$294$$].$_dragSource$;
      if($dragSource$$3$$ && $dragSource$$3$$.$_dragCandidate$) {
        return $dragSource$$3$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($dragSource$$4_mouseX$$52$$, $mouseY$$52$$, $clientIds$$23$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$4_mouseX$$52$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$4_mouseX$$52$$.$isDragAvailable$($clientIds$$23$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$53$$, $mouseY$$53$$) {
  var $dragSource$$5$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$5$$ ? $dragSource$$5$$.$getDragTransferable$($mouseX$$53$$, $mouseY$$53$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$54$$, $mouseY$$54$$) {
  var $dragSource$$6$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$6$$ ? $dragSource$$6$$.$getDragOverFeedback$($mouseX$$54$$, $mouseY$$54$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$55$$, $mouseY$$55$$) {
  var $dragSource$$7$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$7$$ ? $dragSource$$7$$.$getDragContext$($mouseX$$55$$, $mouseY$$55$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$56$$, $mouseY$$56$$) {
  var $dragSource$$8$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$8$$ ? $dragSource$$8$$.$getDragOffset$($mouseX$$56$$, $mouseY$$56$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$8$$, $yOffset$$11$$) {
  var $dragSource$$9$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$9$$ ? $dragSource$$9$$.$getPointerOffset$($xOffset$$8$$, $yOffset$$11$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  var $dragSource$$10$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  $dragSource$$10$$ && $dragSource$$10$$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  var $dragSource$$11$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  $dragSource$$11$$ && $dragSource$$11$$.$dragDropEnd$();
  (0,D.$JSCompiler_StaticMethods_resetTouchTargets$$)(this.$_panZoomCanvas$)
};
D.$DvtThematicMap$$.prototype.$acceptDrag$ = function $$DvtThematicMap$$$$$acceptDrag$$($mouseX$$58$$, $mouseY$$58$$, $clientIds$$24$$) {
  var $JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$ = this.$_pzc$.$getZoom$();
  $mouseX$$58$$ = ($mouseX$$58$$ - (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_pzc$)) / $JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$;
  $mouseY$$58$$ = ($mouseY$$58$$ - (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_pzc$)) / $JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$;
  a: {
    for(var $JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$ = $mouseX$$58$$, $mouseY$$inline_8664$$ = $mouseY$$58$$, $i$$inline_8665$$ = 0;$i$$inline_8665$$ < this.$_layers$.length;$i$$inline_8665$$++) {
      if(this.$_layers$[$i$$inline_8665$$].$getDropTarget$) {
        var $dropTarget$$inline_8666$$ = this.$_layers$[$i$$inline_8665$$].$_dropTarget$;
        if($dropTarget$$inline_8666$$ && $dropTarget$$inline_8666$$.$getDropSite$($JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$, $mouseY$$inline_8664$$)) {
          $JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$ = $dropTarget$$inline_8666$$;
          break a
        }
      }
    }
    $JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$ = D.$JSCompiler_alias_NULL$$
  }
  return(this.$_dropTarget$ = $JSCompiler_inline_result$$125_mouseX$$inline_8663_zoom$$17$$) ? this.$_dropTarget$.$acceptDrag$($mouseX$$58$$, $mouseY$$58$$, $clientIds$$24$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$getDropSite$ = function $$DvtThematicMap$$$$$getDropSite$$($mouseX$$59$$, $mouseY$$59$$) {
  var $zoom$$18$$ = this.$_pzc$.$getZoom$();
  $mouseX$$59$$ = ($mouseX$$59$$ - (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_pzc$)) / $zoom$$18$$;
  $mouseY$$59$$ = ($mouseY$$59$$ - (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_pzc$)) / $zoom$$18$$;
  return this.$_dropTarget$ ? this.$_dropTarget$.$getDropSite$($mouseX$$59$$, $mouseY$$59$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$, $basemap$$3$$) {
  this.$_areaLayer$ = $areaLayer$$;
  this.$_basemap$ = $basemap$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapDropTarget$$.prototype.$acceptDrag$ = function $$DvtThematicMapDropTarget$$$$$acceptDrag$$($mouseX$$50_obj$$355$$, $mouseY$$50$$, $clientIds$$22$$) {
  if($mouseX$$50_obj$$355$$ = (0,D.$JSCompiler_StaticMethods___getObjectUnderPoint$$)(this.$_areaLayer$, $mouseX$$50_obj$$355$$, $mouseY$$50$$)) {
    $mouseX$$50_obj$$355$$ != this.$_dropSite$ && (this.$_areaLayer$.$__showDropSiteFeedback$($mouseX$$50_obj$$355$$), this.$_dropSite$ = $mouseX$$50_obj$$355$$)
  }else {
    return this.$_areaLayer$.$__showDropSiteFeedback$(D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_NULL$$
  }
  return $clientIds$$22$$[0]
};
D.$DvtThematicMapDropTarget$$.prototype.$getDropSite$ = function $$DvtThematicMapDropTarget$$$$$getDropSite$$($mouseX$$51$$, $mouseY$$51$$) {
  var $obj$$356$$ = (0,D.$JSCompiler_StaticMethods___getObjectUnderPoint$$)(this.$_areaLayer$, $mouseX$$51$$, $mouseY$$51$$);
  if($obj$$356$$) {
    var $projPoint$$ = D.$DvtThematicMapProjections$$.$inverseProject$($mouseX$$51$$, $mouseY$$51$$, this.$_basemap$);
    return{$regionId$:$obj$$356$$.$_areaName$, $localX$:$projPoint$$.x, $localY$:$projPoint$$.y}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
(0,D.$goog$exportPath_$$)("DvtThematicMapAutomation", D.$DvtThematicMapAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$93_logicalObj$$17$$) {
  $displayable$$93_logicalObj$$17$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tmap$.$__getEventManager$(), $displayable$$93_logicalObj$$17$$);
  var $JSCompiler_temp$$461_id$$inline_8452$$;
  if($displayable$$93_logicalObj$$17$$ && ($displayable$$93_logicalObj$$17$$ instanceof D.$DvtMapAreaPeer$$ || $displayable$$93_logicalObj$$17$$ instanceof D.$DvtMapObjPeer$$)) {
    a: {
      for(var $displayable$$inline_8448$$ = $displayable$$93_logicalObj$$17$$.$getDisplayable$(), $layers$$inline_8449$$ = this.$_tmap$.$_layers$, $i$$inline_8450$$ = 0;$i$$inline_8450$$ < $layers$$inline_8449$$.length;$i$$inline_8450$$++) {
        var $dataLayers$$inline_8451$$ = $layers$$inline_8449$$[$i$$inline_8450$$].$DataLayers$;
        for($JSCompiler_temp$$461_id$$inline_8452$$ in $dataLayers$$inline_8451$$) {
          if($displayable$$inline_8448$$ instanceof D.$DvtPath$$) {
            for(var $areas$$inline_8453_markers$$inline_8455$$ = $dataLayers$$inline_8451$$[$JSCompiler_temp$$461_id$$inline_8452$$].$_areaObjs$, $k$$inline_8454$$ = 0;$k$$inline_8454$$ < $areas$$inline_8453_markers$$inline_8455$$.length;$k$$inline_8454$$++) {
              if($areas$$inline_8453_markers$$inline_8455$$[$k$$inline_8454$$] === $displayable$$93_logicalObj$$17$$) {
                $JSCompiler_temp$$461_id$$inline_8452$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$461_id$$inline_8452$$) + ":area[" + $k$$inline_8454$$ + "]";
                break a
              }
            }
          }else {
            if($displayable$$inline_8448$$ instanceof D.$DvtSimpleMarker$$ || $displayable$$inline_8448$$ instanceof D.$DvtImageMarker$$) {
              $areas$$inline_8453_markers$$inline_8455$$ = $dataLayers$$inline_8451$$[$JSCompiler_temp$$461_id$$inline_8452$$].$_dataObjs$;
              for($k$$inline_8454$$ = 0;$k$$inline_8454$$ < $areas$$inline_8453_markers$$inline_8455$$.length;$k$$inline_8454$$++) {
                if($areas$$inline_8453_markers$$inline_8455$$[$k$$inline_8454$$] === $displayable$$93_logicalObj$$17$$) {
                  $JSCompiler_temp$$461_id$$inline_8452$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$461_id$$inline_8452$$) + ":marker[" + $k$$inline_8454$$ + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$461_id$$inline_8452$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$461_id$$inline_8452$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$461_id$$inline_8452$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$) {
  if("tooltip" == $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_tmap$)
  }
  var $colonIdx$$1$$ = $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$.indexOf(":"), $parenIdx$$1$$ = $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$.indexOf("[");
  $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$ = 0 < $colonIdx$$1$$ && 0 < $parenIdx$$1$$ ? ($JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$.substring(0, $colonIdx$$1$$), $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$.substring($colonIdx$$1$$ + 1, $parenIdx$$1$$), (0,window.parseInt)($JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$.substring($parenIdx$$1$$ + 
  1, $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$.length - 1)))) ? $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$183_dataObj$$inline_8461_subId$$25$$
};
D.$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$1_dataObj$$2$$, $data$$112_dataObjType$$1$$, $index$$243_label$$99$$) {
  return($dataLayerId$$1_dataObj$$2$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $dataLayerId$$1_dataObj$$2$$, $data$$112_dataObjType$$1$$, $index$$243_label$$99$$)) ? ($data$$112_dataObjType$$1$$ = {}, $data$$112_dataObjType$$1$$.color = $dataLayerId$$1_dataObj$$2$$.$getDatatipColor$(), $data$$112_dataObjType$$1$$.tooltip = $dataLayerId$$1_dataObj$$2$$.$getShortDesc$(), $index$$243_label$$99$$ = $dataLayerId$$1_dataObj$$2$$.$getLabel$(), $data$$112_dataObjType$$1$$.label = $index$$243_label$$99$$ ? 
  $index$$243_label$$99$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$112_dataObjType$$1$$.selected = $dataLayerId$$1_dataObj$$2$$.$isSelected$(), $data$$112_dataObjType$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = D.$DvtThematicMapAutomation$$.prototype.getData;
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$1$$, $dataLayerId$$3$$, $dataObjType$$3$$, $index$$245$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.$_tmap$.$_layers$;
  for(var $i$$829$$ = 0;$i$$829$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.length;$i$$829$$++) {
    var $dataLayers$$8$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$[$i$$829$$].$DataLayers$, $id$$293$$;
    for($id$$293$$ in $dataLayers$$8$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$293$$) == $dataLayerId$$3$$) {
        if("area" == $dataObjType$$3$$) {
          return $dataLayers$$8$$[$id$$293$$].$_dataAreaCollection$[$index$$245$$]
        }
        if("marker" == $dataObjType$$3$$) {
          return $dataLayers$$8$$[$id$$293$$].$_dataMarkerCollection$[$index$$245$$]
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$4$$) {
  var $colonIdx$$2$$ = $dataLayerId$$4$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$4$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$4$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$589$$, $bSupportsVectorEffects$$) {
  this.Init($context$$589$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$590$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$590$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled_parent$$82$$) {
  this.$_isDrilled$ != $drilled_parent$$82$$ && (this.$_isDrilled$ = $drilled_parent$$82$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $drilled_parent$$82$$ = 
  this.getParent(), $drilled_parent$$82$$.$addChild$(this.$_disclosedOuterShape$), $drilled_parent$$82$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$IsShowingHoverEffect$ = 
  D.$JSCompiler_alias_FALSE$$) : (this.$IsShowingHoverEffect$ && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$43$$) {
  this.$IsSelected$ != $selected$$43$$ && ($selected$$43$$ && (this.$IsShowingHoverEffect$ ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$43$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.$clone$(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.$clone$(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$3$$, $outerStroke$$3$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$3$$, $outerStroke$$3$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$4$$, $outerStroke$$4$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$4$$, $outerStroke$$4$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$5$$, $outerStroke$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$5$$, $outerStroke$$5$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$89$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$107$$ = $shape$$89$$.$getStroke$();
    $stroke$$107$$ && ($stroke$$107$$ = $stroke$$107$$.$clone$(), $stroke$$107$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$89$$.$setStroke$($stroke$$107$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$108$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$108$$ = $adjustedStroke_stroke$$108$$.$clone$(), $adjustedStroke_stroke$$108$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$108$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
D.$DvtCustomDataItem$$ = function $$DvtCustomDataItem$$$($context$$587$$, $dataItem$$41$$, $styles$$16$$) {
  this.Init($context$$587$$, $dataItem$$41$$, $styles$$16$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCustomDataItem$$, D.$DvtContainer$$, "DvtCustomDataItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCustomDataItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$588_his$$3$$, $dataItem$$42_dim$$84_hos$$3$$, $shos$$3_styles$$17$$) {
  D.$DvtCustomDataItem$$.$superclass$.Init.call(this, $context$$588_his$$3$$);
  this.$_dataItem$ = $dataItem$$42_dim$$84_hos$$3$$;
  $dataItem$$42_dim$$84_hos$$3$$ instanceof D.$DvtBaseComponent$$ ? (this.$_width$ = $dataItem$$42_dim$$84_hos$$3$$.getWidth(), this.$_height$ = $dataItem$$42_dim$$84_hos$$3$$.getHeight(), this.$addChild$($dataItem$$42_dim$$84_hos$$3$$)) : (this.$getElem$().appendChild($dataItem$$42_dim$$84_hos$$3$$), $dataItem$$42_dim$$84_hos$$3$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$588_his$$3$$, this), this.$_width$ = $dataItem$$42_dim$$84_hos$$3$$.$w$, this.$_height$ = $dataItem$$42_dim$$84_hos$$3$$.$h$);
  this.$_boundingRect$ = new D.$DvtRect$$($context$$588_his$$3$$, -5, -5, this.$_width$ + 10, this.$_height$ + 10);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_boundingRect$);
  $context$$588_his$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $dataItem$$42_dim$$84_hos$$3$$ = new D.$DvtSolidStroke$$("rgb(235, 236, 237)", 1, 4);
  var $sis$$5$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2), $sos$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedOuterColor, 1, 4), $shis$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $shos$$3_styles$$17$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedOuterColor, 1, 6);
  this.$_boundingRect$.$setHoverStroke$($context$$588_his$$3$$, $dataItem$$42_dim$$84_hos$$3$$).$setSelectedStroke$($sis$$5$$, $sos$$3$$).$setSelectedHoverStroke$($shis$$3$$, $shos$$3_styles$$17$$);
  this.$addChildAt$(this.$_boundingRect$, 0)
};
D.$JSCompiler_prototypeAlias$$.$setAriaProperty$ = function $$JSCompiler_prototypeAlias$$$$setAriaProperty$$($property$$8$$, $value$$186$$) {
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_boundingRect$.$setAriaProperty$($property$$8$$, $value$$186$$) : D.$DvtCustomDataItem$$.$superclass$.$setAriaProperty$.call(this, $property$$8$$, $value$$186$$)
};
D.$JSCompiler_prototypeAlias$$.$setAriaRole$ = function $$JSCompiler_prototypeAlias$$$$setAriaRole$$($role$$3$$) {
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_boundingRect$.$setAriaRole$($role$$3$$) : D.$DvtCustomDataItem$$.$superclass$.$setAriaRole$.call(this, $role$$3$$)
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$2$$) {
  this.$_boundingRect$.$setSelectable$($bSelectable$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_boundingRect$.$isSelectable$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_boundingRect$.$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$42$$) {
  this.$_boundingRect$.$setSelected$($selected$$42$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_boundingRect$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_boundingRect$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getRootElement$ = (0,D.$JSCompiler_get$$)("$_dataItem$");
D.$JSCompiler_prototypeAlias$$.$fireKeyboardListener$ = function $$JSCompiler_prototypeAlias$$$$fireKeyboardListener$$($event$$750$$) {
  this.$_dataItem$ instanceof D.$DvtBaseComponent$$ && this.$_dataItem$.$fireKeyboardListener$($event$$750$$)
};
this ? this.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = this.DvtBaseMapManager : (this.DvtBaseMapManager = D.$DvtBaseMapManager$$ = {}, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]) : window.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = window.DvtBaseMapManager : (D.$DvtBaseMapManager$$ = {}, window.DvtBaseMapManager = D.$DvtBaseMapManager$$, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = 
[[]]);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$];
  return $dimAr_layer$$ && ($dimAr_layer$$ = $dimAr_layer$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$[0], $dimAr_layer$$[1], $dimAr_layer$$[2], $dimAr_layer$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$1$$];
  return $layer$$1$$ ? $layer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$2$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$2$$];
  return $layer$$2$$ ? $layer$$2$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$3$$, $layerName$$3$$, $areaId$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$3$$][$layerName$$3$$];
  var $labels$$26$$;
  $baseMapName$$3_layer$$3$$ && ($labels$$26$$ = $baseMapName$$3_layer$$3$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$26$$ && $labels$$26$$[$areaId$$] ? $labels$$26$$[$areaId$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap_cityLayer_coords$$34$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap_cityLayer_coords$$34$$ && ($basemap_cityLayer_coords$$34$$ = $basemap_cityLayer_coords$$34$$.cities)) {
    if($basemap_cityLayer_coords$$34$$ = $basemap_cityLayer_coords$$34$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap_cityLayer_coords$$34$$[0], $basemap_cityLayer_coords$$34$$[1])
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$5$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$1_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$1_cityLabel_cityLayer$$1$$ && ($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$1_cityLabel_cityLayer$$1$$[1]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$6_path$$38$$, $layerName$$4$$, $areaId$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_labelInfo$$7_layer$$4$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$];
  if($basemap$$2_labelInfo$$7_layer$$4$$ && ($basemap$$2_labelInfo$$7_layer$$4$$ = $basemap$$2_labelInfo$$7_layer$$4$$[$layerName$$4$$])) {
    if(($basemap$$2_labelInfo$$7_layer$$4$$ = $basemap$$2_labelInfo$$7_layer$$4$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$2_labelInfo$$7_layer$$4$$[$areaId$$1$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$2_labelInfo$$7_layer$$4$$[$areaId$$1$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$][$layerName$$4$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$1$$];
    if(!$arPath$$2_baseMapName$$6_path$$38$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtPathUtils$$.$createPathArray$($arPath$$2_baseMapName$$6_path$$38$$);
    return D.$DvtPathUtils$$.$getDimensions$($arPath$$2_baseMapName$$6_path$$38$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$5$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$5$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$5$$];
  return $layer$$5$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$5$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$6$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$7$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$7$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$8$$, $area$$3$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$8$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$3$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$9$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName_children$$15$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$9$$);
  return $childLayerName_children$$15$$ && ($childLayerName_children$$15$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName_children$$15$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName_children$$15$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$238$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$238$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$10$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$239$$, $dim$$83$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$10$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$10$$] = $baseMapName$$13_layerMetadata$$, $index$$239$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$239$$] = $layerName$$10$$));
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$83$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$239$$
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$11$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$11$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$]) && ($baseMapName$$14_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$12$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$12$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$12$$]) {
      for(var $prop$$18$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$12$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$18$$] = $labelMetadata$$2$$[$prop$$18$$]
      }
    }
  }
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$791_index$$240$$, $args$$6$$, $unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS;
  if($unprocessedMaps_unprocessedParentUpdates$$) {
    for($i$$791_index$$240$$ = 0;$i$$791_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$791_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$791_index$$240$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2], $args$$6$$[3], $args$$6$$[4], $args$$6$$[5], $args$$6$$[6], $args$$6$$[7])
    }
    for($i$$791_index$$240$$ = 0;$i$$791_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[1].length;$i$$791_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[1][$i$$791_index$$240$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    for($i$$791_index$$240$$ = 0;$i$$791_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[2].length;$i$$791_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[2][$i$$791_index$$240$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []]
  }
  if($unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
    for($i$$791_index$$240$$ = 0;$i$$791_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$791_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$791_index$$240$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$6$$[1], $layerName$$13_lowerLayer$$ = $args$$6$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$6$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$6$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$791_index$$240$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$791_index$$240$$, 0, $layerName$$13_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$13_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$791_index$$240$$;
          for($i$$791_index$$240$$ += 1;$i$$791_index$$240$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$791_index$$240$$++) {
            ($layerName$$13_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$791_index$$240$$]]) && $layerName$$13_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$6$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$66$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$1$$) {
  if(0 < $zoomFactor$$1$$) {
    $basemapW_scale$$66$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$66$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$1$$);
    if(1 >= $basemapW_scale$$66$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$39$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$39$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = D.$DvtPathUtils$$.$createPathArray$($paths$$[$path$$39$$])), $basemapH_simplifiedPaths$$[$path$$39$$] = D.$DvtPathUtils$$.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$66$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$95$$, $category$$25$$) {
  this.Init($displayable$$95$$, $category$$25$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$96$$, $category$$26$$) {
  this.$_displayable$ = $displayable$$96$$;
  this.$_category$ = $category$$26$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$5$$, $rowKey$$19$$, $action$$28$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$5$$;
  this.$_rowKey$ = $rowKey$$19$$;
  this.$_action$ = $action$$28$$
};
(0,D.$goog$exportPath_$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$594$$, $label$$92$$, $labelInfo$$8$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$594$$, $label$$92$$, $labelInfo$$8$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$595$$, $i$$808_label$$93$$, $labelInfo$$9$$, $labelDisplay$$6_line$$16_polyline$$1$$, $parentContainer$$1_stroke$$112$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$595$$, $i$$808_label$$93$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$6_line$$16_polyline$$1$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$112$$;
  if($labelInfo$$9$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$9$$[0])), 1 < $labelInfo$$9$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$808_label$$93$$ = 1;$i$$808_label$$93$$ < $labelInfo$$9$$.length;$i$$808_label$$93$$++) {
      $labelDisplay$$6_line$$16_polyline$$1$$ = $labelInfo$$9$$[$i$$808_label$$93$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$6_line$$16_polyline$$1$$[0])), $labelDisplay$$6_line$$16_polyline$$1$$ = new D.$DvtPolyline$$($context$$595$$, $labelDisplay$$6_line$$16_polyline$$1$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$6_line$$16_polyline$$1$$), $parentContainer$$1_stroke$$112$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && 
      ($parentContainer$$1_stroke$$112$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $labelDisplay$$6_line$$16_polyline$$1$$.$setStroke$($parentContainer$$1_stroke$$112$$), this.$_leaderLines$.push($labelDisplay$$6_line$$16_polyline$$1$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$12_zoom$$14$$) {
  $pzcMatrix$$12_zoom$$14$$ = $pzcMatrix$$12_zoom$$14$$.$_a$;
  for(var $mat$$49_state$$96_stroke$$113$$ = -1, $center$$12_estimatedDims$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$110$$ = D.$JSCompiler_alias_FALSE$$, $i$$809_leaderLinePoints$$ = 0;$i$$809_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$809_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$809_leaderLinePoints$$].$w$ * $pzcMatrix$$12_zoom$$14$$;
    if($center$$12_estimatedDims$$3$$.$h$ <= this.$_boundRectangle$[$i$$809_leaderLinePoints$$].$h$ * $pzcMatrix$$12_zoom$$14$$) {
      if($center$$12_estimatedDims$$3$$.$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$49_state$$96_stroke$$113$$ = $i$$809_leaderLinePoints$$;
        break
      }else {
        if(this.getParent() || ($labelBox_remove_style$$110$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
          $mat$$49_state$$96_stroke$$113$$ = $i$$809_leaderLinePoints$$;
          break
        }
      }
    }
  }
  -1 == $mat$$49_state$$96_stroke$$113$$ && "on" == this.$_labelDisplay$ && ($mat$$49_state$$96_stroke$$113$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$49_state$$96_stroke$$113$$ ? (-1 == $mat$$49_state$$96_stroke$$113$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$12_estimatedDims$$3$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$113$$].$getCenter$(), this.$setCenter$($center$$12_estimatedDims$$3$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat$$49_state$$96_stroke$$113$$ ? 
  (this.$_leaderLine$ = this.$_leaderLines$[$mat$$49_state$$96_stroke$$113$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$110$$ = this.$getCSSStyle$(), $labelBox_remove_style$$110$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$110$$), $labelBox_remove_style$$110$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$113$$], $i$$809_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$809_leaderLinePoints$$.length, 
  $labelBox_remove_style$$110$$.x > $i$$809_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$110$$.x, $center$$12_estimatedDims$$3$$.y))) : $labelBox_remove_style$$110$$.y > $i$$809_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$12_estimatedDims$$3$$.x, $labelBox_remove_style$$110$$.y))) : $labelBox_remove_style$$110$$.x + 
  $labelBox_remove_style$$110$$.$w$ < $i$$809_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$110$$.x + $labelBox_remove_style$$110$$.$w$, $center$$12_estimatedDims$$3$$.y))) : $labelBox_remove_style$$110$$.y + $labelBox_remove_style$$110$$.$h$ < $i$$809_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$12_estimatedDims$$3$$.x, 
  $labelBox_remove_style$$110$$.y + $labelBox_remove_style$$110$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$110$$ = this.$getCSSStyle$(), $labelBox_remove_style$$110$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$110$$)))), this.$_currentState$ = $mat$$49_state$$96_stroke$$113$$) : -1 == $mat$$49_state$$96_stroke$$113$$ && $labelBox_remove_style$$110$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$49_state$$96_stroke$$113$$ = new D.$DvtMatrix$$, $mat$$49_state$$96_stroke$$113$$.translate($pzcMatrix$$12_zoom$$14$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$12_zoom$$14$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$49_state$$96_stroke$$113$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$12_zoom$$14$$, 0, 0, $pzcMatrix$$12_zoom$$14$$)), this.$_bSupportsVectorEffects$ || ($mat$$49_state$$96_stroke$$113$$ = 
  this.$_leaderLine$.$getStroke$().$clone$(), $mat$$49_state$$96_stroke$$113$$.$setWidth$(1 / $pzcMatrix$$12_zoom$$14$$), this.$_leaderLine$.$setStroke$($mat$$49_state$$96_stroke$$113$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$29$$) {
  this.$_center$ = $p$$29$$;
  this.$setX$($p$$29$$.x);
  this.$setY$($p$$29$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$39$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$39$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$39$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapObjPeer$$ = function $$DvtMapObjPeer$$$($data$$109$$, $dataLayer$$11$$, $displayable$$91$$, $label$$94$$, $center$$13$$) {
  this.Init($data$$109$$, $dataLayer$$11$$, $displayable$$91$$, $label$$94$$, $center$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapObjPeer$$, D.$DvtObj$$, "DvtMapObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$110$$, $dataLayer$$12_mapLayer_preDatatip$$, $displayable$$92_location$$26$$, $label$$95$$, $center$$14$$) {
  this.$_data$ = $data$$110$$;
  this.$_dataLayer$ = $dataLayer$$12_mapLayer_preDatatip$$;
  this.$Displayable$ = $displayable$$92_location$$26$$;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isShowingHoverEffect$ = this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$Displayable$.$setDataColor$ && this.$Displayable$.$setDataColor$($data$$110$$.color);
  this.$_label$ = $label$$95$$;
  this.$_center$ = $center$$14$$;
  this.$_zoom$ = 1;
  this.$_view$ = $dataLayer$$12_mapLayer_preDatatip$$.$_tmap$;
  this.$_data$.categories || this.$_label$ && (this.$_data$.categories = [this.$_label$.$getTextString$()]);
  $displayable$$92_location$$26$$ = $data$$110$$.location;
  "auto" == this.$_view$.$_displayTooltips$ && $displayable$$92_location$$26$$ && ($dataLayer$$12_mapLayer_preDatatip$$ = $dataLayer$$12_mapLayer_preDatatip$$.$_parentLayer$, ($dataLayer$$12_mapLayer_preDatatip$$ = !($dataLayer$$12_mapLayer_preDatatip$$ instanceof D.$DvtMapAreaLayer$$) || $dataLayer$$12_mapLayer_preDatatip$$ instanceof D.$DvtMapCustomAreaLayer$$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_view$.$_mapName$, $displayable$$92_location$$26$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_view$.$_mapName$, 
  $dataLayer$$12_mapLayer_preDatatip$$.$LayerName$, $displayable$$92_location$$26$$)) && (this.$_data$.shortDesc = $data$$110$$.shortDesc ? $dataLayer$$12_mapLayer_preDatatip$$ + ": " + $data$$110$$.shortDesc : $dataLayer$$12_mapLayer_preDatatip$$));
  this.$Displayable$ && ($data$$110$$.destination ? (this.$Displayable$.$setAriaRole$("link"), this.$Displayable$.setCursor("pointer"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$110$$.destination)) : this.$Displayable$.$setAriaRole$("img"));
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = function $$JSCompiler_prototypeAlias$$$$getClientId$$() {
  return this.$_data$.clientId
};
D.$JSCompiler_prototypeAlias$$.$getLocation$ = function $$JSCompiler_prototypeAlias$$$$getLocation$$() {
  return this.$_data$.location
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($center$$15$$) {
  this.$_center$ = $center$$15$$;
  this.$__recenter$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Displayable$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$11$$) {
  this.$Displayable$.$setVisible$($bVisible$$11$$);
  this.$_label$ && this.$_label$.$setVisible$($bVisible$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$Displayable$.getWidth ? this.$Displayable$.getWidth() * this.$Displayable$.getHeight() : 0
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  if("none" != this.$_view$.$_displayTooltips$) {
    var $tooltipFunc$$9$$ = this.$_view$.$getOptions$().tooltip;
    return $tooltipFunc$$9$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$9$$, this.$getDataContext$()) : this.$getShortDesc$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$_label$ ? this.$_label$.$getTextString$() : D.$JSCompiler_alias_NULL$$, color:this.$getDatatipColor$(), location:this.$getLocation$(), x:this.$_data$.x, y:this.$_data$.y}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_data$.color ? this.$_data$.color : "#000000"
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$18$$ = [];
  this.$isSelectable$() && $states$$18$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$getDisplayable$()]
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$27$$ = this.$getAriaLabel$();
    $desc$$27$$ && this.$Displayable$.$setAriaProperty$("label", $desc$$27$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$3$$) {
  this.$Displayable$.$setSelectable$ && this.$Displayable$.$setSelectable$($bSelectable$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Displayable$.$isSelectable$ ? this.$Displayable$.$isSelectable$() : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$45$$) {
  if(this.$isSelectable$()) {
    var $prevState$$7$$ = this.$_getState$();
    this.$_isSelected$ = $selected$$45$$;
    this.$_dataLayer$.$getOptions$().selectionRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().selectionRenderer, this.$_getState$(), $prevState$$7$$) : this.$processDefaultSelectionEffect$($selected$$45$$);
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  var $prevState$$8$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$8$$) : this.$processDefaultHoverEffect$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  var $prevState$$9$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$9$$) : this.$processDefaultHoverEffect$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$21$$) {
  for(var $parentId$$29$$ = this.$_dataLayer$.$getClientId$(), $i$$812$$ = 0;$i$$812$$ < $clientIds$$21$$.length && $clientIds$$21$$[$i$$812$$] != $parentId$$29$$;$i$$812$$++) {
  }
  return $parentId$$29$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$755$$) {
  return $event$$755$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$755$$.keyCode && $event$$755$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$755$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$60$$) {
  return this.$Displayable$.getParent() ? this.$Displayable$ instanceof D.$DvtCustomDataItem$$ ? this.$Displayable$.$getDimensions$($targetCoordinateSpace$$60$$ ? $targetCoordinateSpace$$60$$ : this.$Displayable$.$getCtx$().$_stage$) : this.$Displayable$.$getDimensions$($targetCoordinateSpace$$60$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  var $prevState$$10$$ = this.$_getState$();
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_dataLayer$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$10$$) : this.$processDefaultFocusEffect$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  if(this.$isShowingKeyboardFocusEffect$()) {
    var $prevState$$11$$ = this.$_getState$();
    this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
    this.$_dataLayer$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$11$$) : this.$processDefaultFocusEffect$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$17$$) {
  this.$Displayable$.getParent() && (this.$_zoom$ = $pzcMatrix$$17$$.$_a$, this.$__recenter$())
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$() {
  if(this.$_label$) {
    this.$_label$.$alignCenter$();
    var $x$$271$$ = this.$Displayable$.$getCx$() * this.$_zoom$, $markerY$$2_y$$243$$ = this.$Displayable$.$getCy$() * this.$_zoom$, $markerH$$ = this.$Displayable$.getHeight(), $markerType$$1$$ = this.$Displayable$ instanceof D.$DvtSimpleMarker$$ ? this.$Displayable$.$getType$() : "image", $position$$62$$ = this.$_data$.labelPosition;
    "top" == $position$$62$$ ? ($markerY$$2_y$$243$$ = $markerY$$2_y$$243$$ - $markerH$$ / 2 - 4, this.$_label$.$alignBottom$()) : "bottom" == $position$$62$$ ? ($markerY$$2_y$$243$$ += $markerH$$ / 2, this.$_label$.$alignTop$()) : ($markerY$$2_y$$243$$ = "triangleUp" == $markerType$$1$$ ? $markerY$$2_y$$243$$ + $markerH$$ / 6 : "triangleDown" == $markerType$$1$$ ? $markerY$$2_y$$243$$ - $markerH$$ / 6 : $markerY$$2_y$$243$$, this.$_label$.$alignMiddle$());
    this.$_label$.$setX$($x$$271$$).$setY$($markerY$$2_y$$243$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = function $$JSCompiler_prototypeAlias$$$$__recenter$$() {
  var $width$$157$$ = this.$Displayable$.getWidth(), $height$$142$$ = this.$Displayable$.getHeight();
  if($width$$157$$ != D.$JSCompiler_alias_NULL$$ && $height$$142$$ != D.$JSCompiler_alias_NULL$$ && this.$Displayable$.getParent()) {
    var $rotation$$8_shapeY$$ = 0, $shapeX$$ = this.$_center$.x, $rotation$$8_shapeY$$ = this.$_center$.y;
    this.$Displayable$.$getRotation$ && ($rotation$$8_shapeY$$ = this.$Displayable$.$getRotation$(), $shapeX$$ = this.$_center$.x * window.Math.cos($rotation$$8_shapeY$$) - this.$_center$.y * window.Math.sin($rotation$$8_shapeY$$), $rotation$$8_shapeY$$ = this.$_center$.x * window.Math.sin($rotation$$8_shapeY$$) + this.$_center$.y * window.Math.cos($rotation$$8_shapeY$$));
    $shapeX$$ = this.$_center$.x * this.$_zoom$ - $shapeX$$;
    $rotation$$8_shapeY$$ = this.$_center$.y * this.$_zoom$ - $rotation$$8_shapeY$$;
    this.$Displayable$ instanceof D.$DvtCustomDataItem$$ && ($shapeX$$ += this.$_center$.x - $width$$157$$ / 2, $rotation$$8_shapeY$$ += this.$_center$.y - $height$$142$$ / 2);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Displayable$, $shapeX$$, $rotation$$8_shapeY$$);
    (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$Displayable$);
    this.$positionLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$56$$, $oldObj$$4$$) {
  var $anim$$40$$ = new D.$DvtCustomAnimation$$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $oldDisplayable$$2$$ = $oldObj$$4$$.$getDisplayable$();
  if(this.$Displayable$.$getFill$) {
    var $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = $oldDisplayable$$2$$.$getFill$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = this.$Displayable$.$getFill$();
    $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ instanceof D.$DvtSolidFill$$ && !($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$getColor$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getColor$() && $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$getAlpha$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getAlpha$()) && (this.$Displayable$.$setFill$($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$), 
    $oldObj$$4$$.$getLabel$() && this.$_label$ && ($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getFill$(), this.$_label$.$setFill$($oldObj$$4$$.$getLabel$().$getFill$().$clone$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeFill", this.$_label$, this.$_label$.$getFill$, this.$_label$.$setFill$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
    "typeFill", this.$Displayable$, this.$Displayable$.$getFill$, this.$Displayable$.$setFill$, $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$))
  }
  if(this.$Displayable$.$getCenterDimensions$ && ($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getDisplayable$().$getCenterDimensions$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getCenterDimensions$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.x != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.x || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.y != 
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.y || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$w$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$w$ || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$h$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$h$)) {
    this.$Displayable$.$setCenterDimensions$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeRectangle", this.$Displayable$, this.$Displayable$.$getCenterDimensions$, this.$Displayable$.$setCenterDimensions$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldDisplayable$$2$$.$getRotation$();
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getRotation$();
  if($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$) {
    var $diffRotation_startCenter$$ = $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ - $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$;
    $diffRotation_startCenter$$ > window.Math.PI ? $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ -= 2 * window.Math.PI : $diffRotation_startCenter$$ < -window.Math.PI && ($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ += 2 * window.Math.PI);
    this.$Displayable$.$setRotation$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$Displayable$, this.$Displayable$.$getRotation$, this.$Displayable$.$setRotation$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  var $diffRotation_startCenter$$ = $oldObj$$4$$.$getCenter$(), $endCenter$$ = this.$getCenter$();
  if($diffRotation_startCenter$$ && $endCenter$$ && ($diffRotation_startCenter$$.x != $endCenter$$.x || $diffRotation_startCenter$$.y != $endCenter$$.y || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)) {
    this.$setCenter$(new D.$DvtPoint$$($diffRotation_startCenter$$.x, $diffRotation_startCenter$$.y)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typePoint", this, this.$getCenter$, this.$setCenter$, new D.$DvtPoint$$($endCenter$$.x, $endCenter$$.y))
  }
  this.$_label$ && $oldObj$$4$$.$getLabel$() ? ($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getX$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getX$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setX$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
  "typeNumber", this.$_label$, this.$_label$.$getX$, this.$_label$.$setX$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getY$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getY$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setY$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$), 
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$_label$, this.$_label$.$getY$, this.$_label$.$setY$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $oldObj$$4$$.$getLabel$().$setAlpha$(0)) : $oldObj$$4$$.$getLabel$() && $oldObj$$4$$.$getLabel$().$setAlpha$(0);
  $oldDisplayable$$2$$.$setAlpha$(0);
  $handler$$56$$.add($anim$$40$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$57$$) {
  var $anim$$41_fadeObjs$$ = [this.$Displayable$], $label$$96$$ = this.$getLabel$();
  $label$$96$$ && $anim$$41_fadeObjs$$.push($label$$96$$);
  $anim$$41_fadeObjs$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$getCtx$(), $anim$$41_fadeObjs$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$57$$.add($anim$$41_fadeObjs$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$58$$) {
  var $anim$$42_fadeObjs$$1$$ = [this.$Displayable$];
  this.$Displayable$.$setAlpha$(0);
  var $label$$97$$ = this.$getLabel$();
  $label$$97$$ && ($label$$97$$.$setAlpha$(0), $anim$$42_fadeObjs$$1$$.push($label$$97$$));
  $anim$$42_fadeObjs$$1$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$getCtx$(), $anim$$42_fadeObjs$$1$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$58$$.add($anim$$42_fadeObjs$$1$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultSelectionEffect$$($selected$$46$$) {
  this.$Displayable$.$setSelected$ && this.$Displayable$.$setSelected$($selected$$46$$)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultFocusEffect$$($focused$$3$$) {
  this.$processDefaultHoverEffect$($focused$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultHoverEffect$$($hovered$$2$$) {
  $hovered$$2$$ ? this.$Displayable$.$showHoverEffect$ && this.$Displayable$.$showHoverEffect$() : this.$Displayable$.$hideHoverEffect$ && !this.$isShowingKeyboardFocusEffect$() && this.$Displayable$.$hideHoverEffect$()
};
D.$JSCompiler_StaticMethods__callCustomRenderer$$ = function $$JSCompiler_StaticMethods__callCustomRenderer$$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$, $newRootElem_renderer$$14$$, $context$$596_state$$97$$, $prevState$$12$$) {
  if($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$Displayable$ instanceof D.$DvtCustomDataItem$$) {
    var $contextHandler$$1$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_view$.$getOptions$()._contextHandler;
    $contextHandler$$1$$ && ($context$$596_state$$97$$ = $contextHandler$$1$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$Displayable$.$getElem$(), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$Displayable$.$getRootElement$(), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_data$, $context$$596_state$$97$$, 
    $prevState$$12$$), $newRootElem_renderer$$14$$ = $newRootElem_renderer$$14$$($context$$596_state$$97$$), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$Displayable$, $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_dataItem$ !== $newRootElem_renderer$$14$$ && 
    ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_dataItem$ && ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_dataItem$ instanceof D.$DvtBaseComponent$$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_dataItem$) : 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$getElem$().removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_dataItem$)), $newRootElem_renderer$$14$$ instanceof D.$DvtBaseComponent$$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$addChild$($newRootElem_renderer$$14$$) : $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$getElem$().appendChild($newRootElem_renderer$$14$$), 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8292$$.$_dataItem$ = $newRootElem_renderer$$14$$))
  }
};
D.$DvtMapObjPeer$$.prototype.$_getState$ = function $$DvtMapObjPeer$$$$$_getState$$() {
  return{hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$isShowingKeyboardFocusEffect$()}
};
D.$DvtMapAreaPeer$$ = function $$DvtMapAreaPeer$$$($data$$107$$, $dataLayer$$6$$, $displayable$$82$$, $label$$83$$) {
  this.Init($data$$107$$, $dataLayer$$6$$, $displayable$$82$$, $label$$83$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaPeer$$, D.$DvtMapObjPeer$$, "DvtMapAreaPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$108$$, $dataLayer$$7$$, $displayable$$83$$, $label$$84$$) {
  D.$DvtMapAreaPeer$$.$superclass$.Init.call(this, $data$$108$$, $dataLayer$$7$$, $displayable$$83$$, $label$$84$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$44$$) {
  this.$isSelectable$() && ($selected$$44$$ && !this.$_isShowingHoverEffect$ && this.$_dataAreaLayer$.$addChild$(this.$Displayable$), D.$DvtMapAreaPeer$$.$superclass$.$setSelected$.call(this, $selected$$44$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
  D.$DvtMapAreaPeer$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  D.$DvtMapAreaPeer$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Displayable$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$1$$) {
  $drilled$$1$$ ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  this.$Displayable$.$setDrilled$($drilled$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$5$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$5$$);
  this.$Displayable$.getParent() && ((0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Displayable$, $pzcMatrix$$5$$), this.$isDrilled$() || this.$positionLabel$($pzcMatrix$$5$$))
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$($pzcMatrix$$6$$) {
  this.$getLabel$() && this.$getLabel$().update($pzcMatrix$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$55$$, $oldObj$$3$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$animateUpdate$.call(this, $handler$$55$$, $oldObj$$3$$);
  this.$getDataLayer$().$_parentLayer$.$_renderArea$[this.$getLocation$()] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$591$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$591$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$592_stroke$$109$$, $dvtShape$$1$$, $areaName$$1$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$592_stroke$$109$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$1$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  if($context$$592_stroke$$109$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$592_stroke$$109$$.getWidth()
  }
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$110$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$110$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$74$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$74$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$30$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$23$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$23$$)
};
D.$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDropSiteFeedback$$() {
  return this.$_shape$.$copyShape$()
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$269$$, $y$$241$$) {
  var $dims$$69$$ = this.$getDimensions$();
  return $x$$269$$ >= $dims$$69$$.x && $x$$269$$ <= $dims$$69$$.x + $dims$$69$$.$w$ && $y$$241$$ >= $dims$$69$$.y && $y$$241$$ <= $dims$$69$$.y + $dims$$69$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$1$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().$clone$();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$1$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$6$$, $layerName$$18$$, $eventHandler$$6$$) {
  this.Init($tmap$$6$$, $layerName$$18$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$7$$, $layerName$$19$$, $eventHandler$$7$$) {
  this.$_tmap$ = $tmap$$7$$;
  this.$LayerName$ = $layerName$$19$$;
  this.$EventHandler$ = $eventHandler$$7$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$9$$, $pzcMatrix$$13$$) {
  this.$_animation$ && this.$_animation$.stop(D.$JSCompiler_alias_TRUE$$);
  this.$PzcMatrix$ = $pzcMatrix$$13$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$9$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$9$$.$getClientId$()] = $dataLayer$$9$$;
  $dataLayer$$9$$.$render$(this.$PzcMatrix$);
  $dataLayer$$9$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$39_oldContainers$$ = $dataLayer$$9$$.$getAnimation$(), $animDur$$2$$ = $dataLayer$$9$$.$getAnimationDuration$();
    if("auto" == $anim$$39_oldContainers$$) {
      var $anim2_animHandler_i$$810$$ = new D.$DvtDataAnimationHandler$$(this.$_tmap$.$getCtx$());
      (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim2_animHandler_i$$810$$, this.$_oldDataLayer$.$_dataObjs$.concat(this.$_oldDataLayer$.$_areaObjs$), $dataLayer$$9$$.$_dataObjs$.concat($dataLayer$$9$$.$_areaObjs$));
      this.$_animation$ = $anim2_animHandler_i$$810$$.$getAnimation$()
    }else {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$39_oldContainers$$)) {
        this.$_removeAnimRect$ = D.$JSCompiler_alias_TRUE$$;
        for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_animHandler_i$$810$$ = 0;$anim2_animHandler_i$$810$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_animHandler_i$$810$$++) {
          var $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight());
          $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$);
          $bounds2_oldNonScaledContainers$$[$anim2_animHandler_i$$810$$].$addChild$($rect$$52$$)
        }
        for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$9$$), $anim2_animHandler_i$$810$$ = 0;$anim2_animHandler_i$$810$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler_i$$810$$++) {
          $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler_i$$810$$].$addChild$($rect$$52$$)
        }
        $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$2$$);
        $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$);
        $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
        for($anim2_animHandler_i$$810$$ = 0;$anim2_animHandler_i$$810$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler_i$$810$$++) {
          $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler_i$$810$$].$addChild$($rect$$52$$)
        }
        for(var $newScaledContainers$$ = [$dataLayer$$9$$.$_dataAreaLayer$], $anim2_animHandler_i$$810$$ = 0;$anim2_animHandler_i$$810$$ < $newScaledContainers$$.length;$anim2_animHandler_i$$810$$++) {
          $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_animHandler_i$$810$$].$addChild$($rect$$52$$)
        }
        $anim2_animHandler_i$$810$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$2$$);
        this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$getCtx$(), [$anim1_bounds1$$, $anim2_animHandler_i$$810$$])
      }else {
        $anim$$39_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
        for($anim2_animHandler_i$$810$$ = 0;$anim2_animHandler_i$$810$$ < $anim$$39_oldContainers$$.length;$anim2_animHandler_i$$810$$++) {
          $anim$$39_oldContainers$$[$anim2_animHandler_i$$810$$].getParent().removeChild($anim$$39_oldContainers$$[$anim2_animHandler_i$$810$$])
        }
      }
    }
    this.$PreDataLayerUpdate$();
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$42$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$42$$.$OnAnimationEnd$($dataLayer$$9$$)
      }, this);
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$8$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$8$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$14$$) {
  this.$PzcMatrix$ = $pzcMatrix$$14$$;
  for(var $id$$281$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$281$$].$render$($pzcMatrix$$14$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$2$$) {
  for(var $id$$282$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$282$$].reset($fadeOutContainer$$, $doNotResetAreas$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$754$$, $pzcMatrix$$15$$) {
  this.$PzcMatrix$ = $pzcMatrix$$15$$;
  for(var $id$$283$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$283$$].$HandleZoomEvent$($event$$754$$, $pzcMatrix$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$16$$) {
  this.$PzcMatrix$ = $pzcMatrix$$16$$;
  for(var $id$$284$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$284$$].$HandlePanEvent$($pzcMatrix$$16$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$10_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$811$$ = 0;$i$$811$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$811$$++) {
      var $parent$$84$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$811$$].getParent();
      $parent$$84$$ && $parent$$84$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$811$$])
    }
  }
  if(this.$_removeAnimRect$) {
    this.$_removeAnimRect$ = D.$JSCompiler_alias_FALSE$$;
    $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$10_newScaledContainers$$1$$);
    for($i$$811$$ = 0;$i$$811$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$811$$++) {
      $newNonScaledContainers$$1_oldContainers$$1$$[$i$$811$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$811$$].$getNumChildren$() - 1)
    }
    $dataLayer$$10_newScaledContainers$$1$$ = [$dataLayer$$10_newScaledContainers$$1$$.$_dataAreaLayer$];
    for($i$$811$$ = 0;$i$$811$$ < $dataLayer$$10_newScaledContainers$$1$$.length;$i$$811$$++) {
      $dataLayer$$10_newScaledContainers$$1$$[$i$$811$$].$removeChildAt$($dataLayer$$10_newScaledContainers$$1$$[$i$$811$$].$getNumChildren$() - 1)
    }
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$, $layerName$$14$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$) {
  this.Init($tmap$$, $layerName$$14$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$1$$, $layerName$$15$$, $labelDisplay$$2$$, $labelType$$2$$, $eventHandler$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$1$$, $layerName$$15$$, $eventHandler$$1$$);
  this.$_labelDisplay$ = $labelDisplay$$2$$;
  this.$_labelType$ = $labelType$$2$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = D.$JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getDropTarget$ = (0,D.$JSCompiler_get$$)("$_dropTarget$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$16$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$16$$;
  for(var $area$$4$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$4$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$4$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$7$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$7$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$8$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = D.$DvtPathUtils$$.$getDimensions$(D.$DvtPathUtils$$.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$85$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$85$$.$w$ && 0 < $dim$$85$$.$h$ && (this.$_layerDim$ = $dim$$85$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$12$$, $bForceUpdateArea_label$$79_labelText$$1_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$12$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$79_labelText$$1_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$12$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] || ($bForceUpdateArea_label$$79_labelText$$1_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$, $area$$12$$, 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] = $bForceUpdateArea_label$$79_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$79_labelText$$1_mapArea$$), $bForceUpdateArea_label$$79_labelText$$1_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1] : D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$12$$] && ($bForceUpdateArea_label$$79_labelText$$1_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$], !$bForceUpdateArea_label$$79_labelText$$1_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$79_labelText$$1_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$] ? $bForceUpdateArea_label$$79_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$79_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$), $bForceUpdateArea_label$$79_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$79_labelText$$1_mapArea$$, 
    [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$] = $bForceUpdateArea_label$$79_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$79_labelText$$1_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$13$$, $fadeInObjs$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$13$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]);
    var $label$$80$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$13$$];
    $label$$80$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$] ? $label$$80$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$80$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$13$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$]);
    $fadeInObjs$$ && ($fadeInObjs$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]), $label$$80$$ && ($fadeInObjs$$.push($label$$80$$), $fadeInObjs$$.push($label$$80$$.$_leaderLine$)))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateAreaShape$ = function $$JSCompiler_prototypeAlias$$$$updateAreaShape$$($area$$14$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$20_layerDim$$;
    this.$_paths$ = ($cmd$$20_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$20_layerDim$$.$w$, $cmd$$20_layerDim$$.$h$, this.$_tmap$.getWidth(), this.$_tmap$.getHeight(), this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$20_layerDim$$ = this.$_paths$[$area$$14$$];
  this.$AreaShapes$[$area$$14$$] && $cmd$$20_layerDim$$ ? this.$AreaShapes$[$area$$14$$].$setCmds$($cmd$$20_layerDim$$) : delete this.$AreaShapes$[$area$$14$$]
};
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$5$$, $pzcMatrix$$2$$, $topLayerName$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$5$$, $pzcMatrix$$2$$, $topLayerName$$);
  if($topLayerName$$ == this.$LayerName$) {
    for(var $area$$16$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$16$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$16$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$16$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$3$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$17$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$17$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$17$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$17$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$18$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$18$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$18$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$18$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$19$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$19$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$19$$]);
      var $label$$81_leaderLine$$ = this.$_areaLabels$[$area$$19$$];
      $label$$81_leaderLine$$ && (this.$_renderedLabels$[$area$$19$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$81_leaderLine$$), ($label$$81_leaderLine$$ = $label$$81_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$81_leaderLine$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$1$$, $fadeInObjs$$2$$) {
  for(var $i$$inline_8261$$ = 0;$i$$inline_8261$$ < $areas$$1$$.length;$i$$inline_8261$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8261$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$1$$[$i$$inline_8261$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8261$$], $fadeInObjs$$2$$)
  }
  for(var $id$$278$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$278$$].$discloseAreas$($areas$$1$$, $fadeInObjs$$2$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$2$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$279$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$279$$].$undiscloseAreas$($areas$$2$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$279$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$793$$ = 0;$i$$793$$ < $areas$$2$$.length;$i$$793$$++) {
    var $areaName$$2$$ = $areas$$2$$[$i$$793$$];
    if(this.$Areas$[$areaName$$2$$]) {
      var $idx$$35$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$2$$);
      -1 !== $idx$$35$$ && (this.$_disclosed$.splice($idx$$35$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$2$$]))
    }
    $childAreaLayer_id$$279$$ && $childAreaLayer_id$$279$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$2$$), $fadeOutObjs$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
D.$JSCompiler_StaticMethods___getObjectUnderPoint$$ = function $$JSCompiler_StaticMethods___getObjectUnderPoint$$$($JSCompiler_StaticMethods___getObjectUnderPoint$self$$, $x$$270$$, $y$$242$$) {
  for(var $id$$280$$ in $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$) {
    if($JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$280$$].contains($x$$270$$, $y$$242$$)) {
      return $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$280$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtMapAreaLayer$$.prototype.$__showDropSiteFeedback$ = function $$DvtMapAreaLayer$$$$$__showDropSiteFeedback$$($obj$$348_stroke$$111_strokeWidth$$14$$) {
  this.$_dropSiteFeedback$ && (this.$AreaContainer$.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = D.$JSCompiler_alias_NULL$$);
  if($obj$$348_stroke$$111_strokeWidth$$14$$ && (this.$_dropSiteFeedback$ = $obj$$348_stroke$$111_strokeWidth$$14$$.$getDropSiteFeedback$())) {
    this.$_dropSiteFeedback$.$setFill$(new D.$DvtSolidFill$$(this.$_dropSiteCSSStyle$.$getStyle$("background-color"))), $obj$$348_stroke$$111_strokeWidth$$14$$ = this.$_dropSiteCSSStyle$.$getStyle$("border-width") ? this.$_dropSiteCSSStyle$.$getStyle$("border-width").substring(0, this.$_dropSiteCSSStyle$.$getStyle$("border-width").indexOf("px")) : 1, this.$_tmap$.$_bSupportsVectorEffects$ || ($obj$$348_stroke$$111_strokeWidth$$14$$ /= this.$PzcMatrix$.$_a$), $obj$$348_stroke$$111_strokeWidth$$14$$ = 
    new D.$DvtSolidStroke$$(this.$_dropSiteCSSStyle$.$getStyle$("border-color"), 1, $obj$$348_stroke$$111_strokeWidth$$14$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($obj$$348_stroke$$111_strokeWidth$$14$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$_dropSiteFeedback$.$setStroke$($obj$$348_stroke$$111_strokeWidth$$14$$), this.$AreaContainer$.$addChild$(this.$_dropSiteFeedback$)
  }
  return this.$_dropSiteFeedback$
};
D.$DvtMapAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapAreaLayer$$$$$HandleZoomEvent$$($event$$751$$, $pzcMatrix$$4$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$751$$, $pzcMatrix$$4$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$20$$ in this.$Areas$) {
      this.$Areas$[$area$$20$$].$HandleZoomEvent$($pzcMatrix$$4$$)
    }
  }
  for($area$$20$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$20$$]) {
      var $label$$82$$ = this.$_areaLabels$[$area$$20$$];
      $label$$82$$ && $label$$82$$.update($pzcMatrix$$4$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$2$$, $layerName$$16$$, $labelDisplay$$3$$, $labelType$$3$$, $eventHandler$$2$$) {
  this.Init($tmap$$2$$, $layerName$$16$$, $labelDisplay$$3$$, $labelType$$3$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$3$$, $layerName$$17$$, $labelDisplay$$4$$, $labelType$$4$$, $eventHandler$$3$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$3$$, $layerName$$17$$, $labelDisplay$$4$$, $labelType$$4$$, $eventHandler$$3$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$) {
  var $widthRes$$1$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getWidth(), $heightRes$$2$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getHeight();
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_areaLayerImages$;
  for(var $i$$794$$ = 0;$i$$794$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length;$i$$794$$++) {
    var $height$$141_image$$21$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$[$i$$794$$], $source$$37$$ = $height$$141_image$$21$$.source, $width$$156$$ = $height$$141_image$$21$$.width, $height$$141_image$$21$$ = $height$$141_image$$21$$.height;
    if($source$$37$$ && -1 < $source$$37$$.search(".svg") || $width$$156$$ >= $widthRes$$1$$ && $height$$141_image$$21$$ >= $heightRes$$2$$ || $i$$794$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length - 1) {
      return $source$$37$$
    }
  }
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$752$$, $pzcMatrix$$7$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$752$$, $pzcMatrix$$7$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$4$$, $parentLayer$$, $clientId$$6$$, $eventHandler$$4$$, $options$$264$$) {
  this.Init($tmap$$4$$, $parentLayer$$, $clientId$$6$$, $eventHandler$$4$$, $options$$264$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$5$$, $parentLayer$$1$$, $clientId$$7$$, $eventHandler$$5$$, $options$$265$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$_clientId$ = $clientId$$7$$;
  this.$_options$ = $options$$265$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_dataAreaCollection$ = [];
  this.$_dataMarkerCollection$ = [];
  this.$_eventHandler$ = $eventHandler$$5$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$5$$.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$1$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$DvtMapDataLayer$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$9$$ = [], $i$$796$$ = 0;$i$$796$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$796$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$796$$].$isDrilled$() || $navigables$$9$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$796$$])
  }
  return $navigables$$9$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$10$$ = [], $i$$797$$ = 0;$i$$797$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$797$$++) {
    for(var $j$$108$$ = 0;$j$$108$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$108$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$797$$].$getLocation$() == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$108$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$797$$].$isDrilled$() || $navigables$$10$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$797$$]))
    }
  }
  return $navigables$$10$$
};
D.$JSCompiler_StaticMethods_addDataObject$$ = function $$JSCompiler_StaticMethods_addDataObject$$$($JSCompiler_StaticMethods_addDataObject$self$$, $obj$$349$$) {
  $JSCompiler_StaticMethods_addDataObject$self$$.$_dataMarkerCollection$.push($obj$$349$$);
  $obj$$349$$ && ($JSCompiler_StaticMethods_addDataObject$self$$.$_dataObjs$.push($obj$$349$$), $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($obj$$349$$.$getDisplayable$(), $obj$$349$$))
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$350$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaCollection$.push($obj$$350$$);
  $obj$$350$$ && ($JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$350$$), $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$350$$.$getDisplayable$(), $obj$$350$$), $obj$$350$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$13$$) {
  if(this.$_selectionMode$ = $mode$$13$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$1$$) {
  var $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$;
  $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$];
  var $areaDim$$1_displayable$$85_displayable$$inline_8278$$ = $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$.$getDisplayable$(), $pathToCopy$$inline_8279$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$.$getLocation$()];
  $pathToCopy$$inline_8279$$ ? ($areaDim$$1_displayable$$85_displayable$$inline_8278$$.$setCmds$($pathToCopy$$inline_8279$$.$getCmds$()), $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$), -1 !== 
  $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$ && $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$, 1), $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$) {
    $areaDim$$1_displayable$$85_displayable$$inline_8278$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$85_displayable$$inline_8278$$);
    if($JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$85_displayable$$inline_8278$$ = $areaDim$$1_displayable$$85_displayable$$inline_8278$$.$getDimensions$(), $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$.$_boundRectangle$.push($areaDim$$1_displayable$$85_displayable$$inline_8278$$)), $JSCompiler_inline_result$$405_areaObj$$inline_8277_idx$$inline_11382_label$$85$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($areaLabelsToRemove_pzcMatrix$$8$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $areaLabelsToRemove_pzcMatrix$$8$$;
  $areaLabelsToRemove_pzcMatrix$$8$$ = {};
  var $dataObjs$$ = this.$_dataObjs$.slice();
  $dataObjs$$.sort(function compare($areaLabelsToRemove_pzcMatrix$$8$$, $dataObjs$$) {
    return $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() < $dataObjs$$.$getSize$() ? 1 : $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() > $dataObjs$$.$getSize$() ? -1 : 0
  });
  for(var $i$$798$$ = 0;$i$$798$$ < $dataObjs$$.length;$i$$798$$++) {
    var $dataObj$$1_regionId$$ = $dataObjs$$[$i$$798$$], $displayable$$86$$ = $dataObj$$1_regionId$$.$getDisplayable$(), $label$$86$$ = $dataObj$$1_regionId$$.$getLabel$();
    if($label$$86$$) {
      var $container$$190$$ = new D.$DvtContainer$$($displayable$$86$$.$getCtx$());
      this.$_dataPointLayer$.$addChild$($container$$190$$);
      $container$$190$$.$addChild$($displayable$$86$$);
      $container$$190$$.$addChild$($label$$86$$);
      $dataObj$$1_regionId$$.$positionLabel$()
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$86$$)
    }
    ($dataObj$$1_regionId$$ = $dataObj$$1_regionId$$.$getLocation$()) && ($areaLabelsToRemove_pzcMatrix$$8$$[$dataObj$$1_regionId$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$798$$ = 0;$i$$798$$ < this.$_areaObjs$.length;$i$$798$$++) {
    $areaLabelsToRemove_pzcMatrix$$8$$[this.$_areaObjs$[$i$$798$$].$getLocation$()] && (this.$_areaObjs$[$i$$798$$].$_label$ = D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$798$$) || $i$$798$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$3$$, $fadeInObjs$$3$$, $pzcMatrix$$9_regionId$$1$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$9_regionId$$1$$;
  for(var $drilledAreas$$ = [], $j$$109$$ = 0;$j$$109$$ < $areas$$3$$.length;$j$$109$$++) {
    for(var $i$$799_label$$87_leaderLine$$1$$ = 0;$i$$799_label$$87_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$799_label$$87_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$799_label$$87_leaderLine$$1$$].$getLocation$() == $areas$$3$$[$j$$109$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$799_label$$87_leaderLine$$1$$].$getLocation$());
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$799_label$$87_leaderLine$$1$$);
        var $displayable$$87$$ = this.$_areaObjs$[$i$$799_label$$87_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$3$$.push($displayable$$87$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$87$$, $pzcMatrix$$9_regionId$$1$$);
        if($i$$799_label$$87_leaderLine$$1$$ = this.$_areaObjs$[$i$$799_label$$87_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$3$$.push($i$$799_label$$87_leaderLine$$1$$), ($i$$799_label$$87_leaderLine$$1$$ = $i$$799_label$$87_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$3$$.push($i$$799_label$$87_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$799_label$$87_leaderLine$$1$$ = 0;$i$$799_label$$87_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$799_label$$87_leaderLine$$1$$++) {
    for($j$$109$$ = 0;$j$$109$$ < $areas$$3$$.length;$j$$109$$++) {
      $pzcMatrix$$9_regionId$$1$$ = this.$_dataObjs$[$i$$799_label$$87_leaderLine$$1$$].$getLocation$(), $displayable$$87$$ = this.$_dataObjs$[$i$$799_label$$87_leaderLine$$1$$].$getDisplayable$(), $pzcMatrix$$9_regionId$$1$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$9_regionId$$1$$ == $areas$$3$$[$j$$109$$] && (this.$_dataPointLayer$.$addChild$($displayable$$87$$), $fadeInObjs$$3$$.push($displayable$$87$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$87$$), $fadeInObjs$$3$$.push($displayable$$87$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$4$$, $fadeOutObjs$$2$$) {
  for(var $j$$110$$ = 0;$j$$110$$ < $areas$$4$$.length;$j$$110$$++) {
    for(var $i$$800_label$$88$$ = 0;$i$$800_label$$88$$ < this.$_areaObjs$.length;$i$$800_label$$88$$++) {
      if(this.$_areaObjs$[$i$$800_label$$88$$].$getLocation$() == $areas$$4$$[$j$$110$$]) {
        this.$_areaObjs$[$i$$800_label$$88$$].$isDrilled$() && this.$_areaObjs$[$i$$800_label$$88$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$800_label$$88$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$800_label$$88$$]);
        var $idx$$37$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$4$$[$j$$110$$]);
        if(-1 < $idx$$37$$ && (this.$_disclosed$.splice($idx$$37$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$800_label$$88$$].$getDisplayable$()), $i$$800_label$$88$$ = this.$_areaObjs$[$i$$800_label$$88$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$800_label$$88$$), $fadeOutObjs$$2$$.push($i$$800_label$$88$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$1$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$111_selectedObjs$$ = this.$_selectionHandler$.getSelection(), $i$$803_label$$91$$ = 0;$i$$803_label$$91$$ < $j$$111_selectedObjs$$.length;$i$$803_label$$91$$++) {
      (!$doNotResetAreas$$1$$ || $doNotResetAreas$$1$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$1$$, $j$$111_selectedObjs$$[$i$$803_label$$91$$].$getLocation$())) && this.$_selectionHandler$.$removeFromSelection$($j$$111_selectedObjs$$[$i$$803_label$$91$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$111_selectedObjs$$ = 0;$j$$111_selectedObjs$$ < this.$_drilled$.length;$j$$111_selectedObjs$$++) {
      for($i$$803_label$$91$$ = 0;$i$$803_label$$91$$ < this.$_areaObjs$.length;$i$$803_label$$91$$++) {
        if(this.$_areaObjs$[$i$$803_label$$91$$].$getLocation$() == this.$_drilled$[$j$$111_selectedObjs$$]) {
          this.$_areaObjs$[$i$$803_label$$91$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$89$$ = this.$_areaObjs$[$i$$803_label$$91$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$89$$);
          $fadeOutObjs$$4$$.push($displayable$$89$$);
          if($i$$803_label$$91$$ = this.$_areaObjs$[$i$$803_label$$91$$].$getLabel$()) {
            $i$$803_label$$91$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$803_label$$91$$), $fadeOutObjs$$4$$.push($i$$803_label$$91$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$803_label$$91$$ = 0;$i$$803_label$$91$$ < this.$_dataObjs$.length;$i$$803_label$$91$$++) {
        if(this.$_dataObjs$[$i$$803_label$$91$$].$getLocation$() == this.$_drilled$[$j$$111_selectedObjs$$]) {
          $displayable$$89$$ = this.$_dataObjs$[$i$$803_label$$91$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$89$$);
          $fadeOutObjs$$4$$.push($displayable$$89$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$753$$, $pzcMatrix$$10$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$10$$;
  var $i$$804_zoom$$13$$ = $pzcMatrix$$10$$.$_a$, $areaObjs_dataObjs$$1_j$$112_type$$247$$ = $event$$753$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs_dataObjs$$1_j$$112_type$$247$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs_dataObjs$$1_j$$112_type$$247$$ = 0;$areaObjs_dataObjs$$1_j$$112_type$$247$$ < this.$_areaObjs$.length;$areaObjs_dataObjs$$1_j$$112_type$$247$$++) {
      var $displayable$$90$$ = this.$_areaObjs$[$areaObjs_dataObjs$$1_j$$112_type$$247$$].$getDisplayable$(), $fill$$75$$ = $displayable$$90$$.$_ptFill$;
      if($fill$$75$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$75$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$804_zoom$$13$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$804_zoom$$13$$));
        $displayable$$90$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs_dataObjs$$1_j$$112_type$$247$$ = this.$_areaObjs$;
  for($i$$804_zoom$$13$$ = 0;$i$$804_zoom$$13$$ < $areaObjs_dataObjs$$1_j$$112_type$$247$$.length;$i$$804_zoom$$13$$++) {
    $areaObjs_dataObjs$$1_j$$112_type$$247$$[$i$$804_zoom$$13$$].$HandleZoomEvent$($pzcMatrix$$10$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs_dataObjs$$1_j$$112_type$$247$$ = this.$_dataObjs$;
    for($i$$804_zoom$$13$$ = 0;$i$$804_zoom$$13$$ < $areaObjs_dataObjs$$1_j$$112_type$$247$$.length;$i$$804_zoom$$13$$++) {
      $areaObjs_dataObjs$$1_j$$112_type$$247$$[$i$$804_zoom$$13$$].$HandleZoomEvent$($pzcMatrix$$10$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$352_rowKeys$$3$$) {
  if(this.$_selectionHandler$) {
    $obj$$352_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$352_rowKeys$$3$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$352_rowKeys$$3$$));
    $obj$$352_rowKeys$$3$$ = [];
    for(var $selection$$41$$ = this.$_selectionHandler$.getSelection(), $i$$805$$ = 0;$i$$805$$ < $selection$$41$$.length;$i$$805$$++) {
      $obj$$352_rowKeys$$3$$.push($selection$$41$$[$i$$805$$].getId())
    }
    return $obj$$352_rowKeys$$3$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$29$$ = [], $selection$$42$$ = this.$_selectionHandler$.getSelection(), $i$$806$$ = 0;$i$$806$$ < $selection$$42$$.length;$i$$806$$++) {
    $displayables$$29$$.push($selection$$42$$[$i$$806$$].$getDisplayable$())
  }
  return $displayables$$29$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$11$$, $manager$$28$$) {
  this.Init($tmap$$11$$, $manager$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$12$$, $manager$$29$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init.call(this, $tmap$$12$$, $manager$$29$$);
  this.$_tmap$ = $tmap$$12$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$775$$) {
  return this.$isNavigationEvent$($event$$775$$) && !$event$$775$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$776$$) {
  var $focusObj$$3_keyCode$$50$$ = $event$$776$$.keyCode;
  if(221 == $focusObj$$3_keyCode$$50$$) {
    var $focusObj$$3_keyCode$$50$$ = this.$_eventManager$.$getFocus$(), $navigables$$12$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj$$3_keyCode$$50$$ instanceof D.$DvtMapAreaPeer$$ && 0 < $navigables$$12$$.length && ($focusObj$$3_keyCode$$50$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$50$$, $event$$776$$, $navigables$$12$$));
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$50$$)
  }else {
    219 == $focusObj$$3_keyCode$$50$$ ? ($focusObj$$3_keyCode$$50$$ = this.$_eventManager$.$getFocus$(), $navigables$$12$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj$$3_keyCode$$50$$ instanceof D.$DvtMapAreaPeer$$) && 0 < $navigables$$12$$.length && ($focusObj$$3_keyCode$$50$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$50$$, $event$$776$$, $navigables$$12$$)), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, 
    $focusObj$$3_keyCode$$50$$)) : ($focusObj$$3_keyCode$$50$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$776$$), this.$isNavigationEvent$($event$$776$$) && !$event$$776$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$50$$))
  }
  return $focusObj$$3_keyCode$$50$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$777$$) {
  return 32 == $event$$777$$.keyCode && $event$$777$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$778_keyCode$$51$$) {
  var $isNavigable$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$778_keyCode$$51$$);
  if(!$isNavigable$$ && ($event$$778_keyCode$$51$$ = $event$$778_keyCode$$51$$.keyCode, 219 == $event$$778_keyCode$$51$$ || 221 == $event$$778_keyCode$$51$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$600$$, $callback$$165$$, $callbackObj$$115$$) {
  this.Init($context$$600$$, $callback$$165$$, $callbackObj$$115$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$601$$, $callback$$166$$, $callbackObj$$116$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$601$$, $callback$$166$$, $callbackObj$$116$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$116$$;
  this.$_bPassOnEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$18$$) {
  if($logicalObj$$18$$ && $logicalObj$$18$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$18$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$5$$, $handler$$59$$) {
  this.$_selectionHandlers$[$dataLayerId$$5$$] = $handler$$59$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$12$$, $obj$$357$$) {
  var $selectionHandler$$14$$ = this.$_selectionHandlers$[$clientId$$12$$];
  $selectionHandler$$14$$ && $selectionHandler$$14$$.$removeFromSelection$($obj$$357$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$13_selectionHandler$$15$$) {
  ($clientId$$13_selectionHandler$$15$$ = this.$_selectionHandlers$[$clientId$$13_selectionHandler$$15$$]) && $clientId$$13_selectionHandler$$15$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$765$$) {
  var $obj$$358$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$765$$.target);
  $obj$$358$$ && ($obj$$358$$.$getShowPopupBehaviors$ && $obj$$358$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$358$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$765$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$766$$) {
  this.$_tmap$.$_eventClientId$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$766$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$767$$) {
  var $obj$$359$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$767$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$359$$);
  if(!$obj$$359$$ || !$obj$$359$$.$isSelectable$ || !$obj$$359$$.$isSelectable$()) {
    for(var $clientId$$14$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$14$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$767$$.ctrlKey)) {
        var $selectionEvent$$2$$ = new D.$DvtSelectionEvent$$([]);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$2$$, "clientId", $clientId$$14$$);
        this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$2$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$767$$);
  this.$_handleClick$($obj$$359$$, $event$$767$$.pageX, $event$$767$$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$360$$, $pageX$$13$$, $pageY$$13$$) {
  if($obj$$360$$ instanceof D.$DvtMapObjPeer$$) {
    var $callback$$167$$ = $obj$$360$$.$getLinkCallback$();
    $callback$$167$$ ? $callback$$167$$.call() : $obj$$360$$.$getAction$() != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$360$$, $pageX$$13$$, $pageY$$13$$) : $obj$$360$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$360$$.$getDataLayer$().$getClientId$())
  }
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$361_offset$$35$$, $pageX$$14$$, $pageY$$14$$) {
  var $actionEvent$$3$$ = new D.$DvtMapActionEvent$$($obj$$361_offset$$35$$.$getClientId$(), $obj$$361_offset$$35$$.getId(), $obj$$361_offset$$35$$.$getAction$());
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$3$$, "clientId", $obj$$361_offset$$35$$.$getDataLayer$().$getClientId$());
  $pageX$$14$$ != D.$JSCompiler_alias_NULL$$ && $pageY$$14$$ != D.$JSCompiler_alias_NULL$$ && ($obj$$361_offset$$35$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_HandleAction$self$$.$_tmap$.$getCtx$(), $pageX$$14$$, $pageY$$14$$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$3$$, "pointXY", {x:$obj$$361_offset$$35$$.x, y:$obj$$361_offset$$35$$.y}));
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$3$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$362$$) {
  var $clientId$$15$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$15_mapLayer$$1$$ = D.$JSCompiler_alias_NULL$$, $clickedObj$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$362$$ && ($obj$$362$$ instanceof D.$DvtMapObjPeer$$ ? $clickedObj$$ = $obj$$362$$.$getDisplayable$() : $obj$$362$$ instanceof D.$DvtMapArea$$ && ($clickedObj$$ = $obj$$362$$), $obj$$362$$.$getDataLayer$ && ($dataLayer$$15_mapLayer$$1$$ = $obj$$362$$.$getDataLayer$(), $clientId$$15$$ = $dataLayer$$15_mapLayer$$1$$.$getClientId$(), $dataLayer$$15_mapLayer$$1$$ = $dataLayer$$15_mapLayer$$1$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_8480$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8480$$.$_clickedLayerName$ = $dataLayer$$15_mapLayer$$1$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8480$$.$_clickedDataLayerId$ = $clientId$$15$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8480$$.$_clickedObject$ = $clickedObj$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($drillEvent_event$$768_obj$$363$$) {
  $drillEvent_event$$768_obj$$363$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent_event$$768_obj$$363$$.target);
  this.$getSelectionHandler$($drillEvent_event$$768_obj$$363$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$768_obj$$363$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$768_obj$$363$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($callback$$168_event$$769$$) {
  var $eventConsumed$$7$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$49$$ = $callback$$168_event$$769$$.keyCode, $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$ = this.$getFocus$(), $focusDisp$$1_toFit$$inline_8486$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$getDisplayable$();
  9 != $keyCode$$49$$ && this.$_bPassOnEvent$ ? ($focusDisp$$1_toFit$$inline_8486$$.$fireKeyboardListener$($callback$$168_event$$769$$), $callback$$168_event$$769$$.preventDefault()) : (48 == $keyCode$$49$$ || 96 == $keyCode$$49$$) && $callback$$168_event$$769$$.ctrlKey && $callback$$168_event$$769$$.shiftKey ? (this.$_tmap$.$resetMap$(), $callback$$168_event$$769$$.preventDefault()) : 220 == $keyCode$$49$$ ? (($JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$ = this.$_tmap$.$_legendPanel$) && 
  ($JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$ instanceof D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.isCollapsed()) : $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$isDisclosed$())), 
  $callback$$168_event$$769$$.preventDefault()) : 13 == $keyCode$$49$$ ? $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$ instanceof D.$DvtMapObjPeer$$ ? ($callback$$168_event$$769$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$getLinkCallback$()) ? $callback$$168_event$$769$$.call() : $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$getAction$() != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, 
  $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$) : ($callback$$168_event$$769$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $callback$$168_event$$769$$.preventDefault()) : 32 == $keyCode$$49$$ && $callback$$168_event$$769$$.ctrlKey ? ((0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$, 
  D.$JSCompiler_alias_TRUE$$), $callback$$168_event$$769$$.preventDefault()) : (48 == $keyCode$$49$$ || 96 == $keyCode$$49$$) && $callback$$168_event$$769$$.ctrlKey ? ($callback$$168_event$$769$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$ = this.$_tmap$, $focusDisp$$1_toFit$$inline_8486$$ || ($focusDisp$$1_toFit$$inline_8486$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$_zoomToFitObject$), $focusDisp$$1_toFit$$inline_8486$$ || 
  ($focusDisp$$1_toFit$$inline_8486$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$_clickedObject$), $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$_zoomToFitBounds$($focusDisp$$1_toFit$$inline_8486$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$), $callback$$168_event$$769$$.preventDefault()) : 9 == $keyCode$$49$$ && $focusDisp$$1_toFit$$inline_8486$$ instanceof D.$DvtCustomDataItem$$ ? 
  !$callback$$168_event$$769$$.shiftKey && $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$isShowingKeyboardFocusEffect$() ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$hideKeyboardFocusEffect$(), $focusDisp$$1_toFit$$inline_8486$$.$fireKeyboardListener$($callback$$168_event$$769$$), $callback$$168_event$$769$$.preventDefault(), this.$_bPassOnEvent$ = D.$JSCompiler_alias_TRUE$$) : ($callback$$168_event$$769$$.shiftKey && this.$_bPassOnEvent$ ? 
  (this.$ShowFocusEffect$($callback$$168_event$$769$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$), $callback$$168_event$$769$$.preventDefault()) : (this.$_bPassOnEvent$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8485_focusObj$$2_legendPanel$$.$showKeyboardFocusEffect$(), $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $callback$$168_event$$769$$)), this.$_bPassOnEvent$ = D.$JSCompiler_alias_FALSE$$) : 
  $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $callback$$168_event$$769$$);
  return $eventConsumed$$7$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$770$$) {
  var $obj$$364$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$770$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$364$$);
  if($obj$$364$$ instanceof D.$DvtThematicMap$$) {
    for(var $clientId$$16$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$16$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$770$$.ctrlKey)) {
        for(var $selectedObjs$$2_selectionEvent$$3$$ = this.$_selectionHandlers$[$clientId$$16$$].getSelection(), $selectedIds$$9$$ = [], $i$$830$$ = 0;$i$$830$$ < $selectedObjs$$2_selectionEvent$$3$$.length;$i$$830$$++) {
          $selectedIds$$9$$.push($selectedObjs$$2_selectionEvent$$3$$[$i$$830$$].getId())
        }
        $selectedObjs$$2_selectionEvent$$3$$ = new D.$DvtSelectionEvent$$($selectedIds$$9$$);
        this.$_callback$.call(this.$_callbackObj$, $selectedObjs$$2_selectionEvent$$3$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$770$$);
  this.$_handleClick$($obj$$364$$, $event$$770$$.$touch$.pageX, $event$$770$$.$touch$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$771_obj$$365$$) {
  $event$$771_obj$$365$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$771_obj$$365$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$771_obj$$365$$ && $event$$771_obj$$365$$.$getShowPopupBehaviors$ && $event$$771_obj$$365$$.$getDataLayer$ ? $event$$771_obj$$365$$.$getDataLayer$().$getClientId$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$772_obj$$366$$) {
  $event$$772_obj$$366$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$772_obj$$366$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$772_obj$$366$$ && $event$$772_obj$$366$$.$getShowPopupBehaviors$ && $event$$772_obj$$366$$.$getDataLayer$ ? $event$$772_obj$$366$$.$getDataLayer$().$getClientId$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($drillEvent$$1_event$$773$$) {
  var $obj$$367$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent$$1_event$$773$$.target);
  $obj$$367$$ && (this.$getSelectionHandler$($obj$$367$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$367$$, $drillEvent$$1_event$$773$$.ctrlKey), $drillEvent$$1_event$$773$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$773$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$774$$, $categories$$29_hoverBehaviorDelay$$6_obj$$368$$, $bOver$$13_rolloverEvent$$8$$) {
  var $options$$267$$ = this.$_tmap$.$getOptions$();
  "dim" == $options$$267$$.hoverBehavior && ($categories$$29_hoverBehaviorDelay$$6_obj$$368$$ = $categories$$29_hoverBehaviorDelay$$6_obj$$368$$.$getCategories$ ? $categories$$29_hoverBehaviorDelay$$6_obj$$368$$.$getCategories$() : [], $options$$267$$.highlightedCategories = $bOver$$13_rolloverEvent$$8$$ ? $categories$$29_hoverBehaviorDelay$$6_obj$$368$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$13_rolloverEvent$$8$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$13_rolloverEvent$$8$$ ? "categoryRollOver" : 
  "categoryRollOut", $options$$267$$.highlightedCategories), $categories$$29_hoverBehaviorDelay$$6_obj$$368$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$267$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$13_rolloverEvent$$8$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$)), $categories$$29_hoverBehaviorDelay$$6_obj$$368$$, "any" == $options$$267$$.highlightMatch), 
  $event$$774$$.stopPropagation())
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$9$$) {
  this.Init($tmap$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$DvtThematicMapJsonParser$$.prototype.Init = function $$DvtThematicMapJsonParser$$$$Init$($tmap$$10$$) {
  this.$_tmap$ = $tmap$$10$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_customAreaLayerImages$ = {};
  this.$_customMarkerDefs$ = {}
};
D.$DvtThematicMapJsonParser$$.prototype.parse = function $$DvtThematicMapJsonParser$$$$parse$($options$$268$$) {
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = $options$$268$$.animationDuration;
  "string" == typeof $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ ? "ms" == $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.slice(-2) ? $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = 
  (0,window.parseInt)($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.slice(0, -2)) / 1E3 : "s" == $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.slice(-1) && 
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.slice(0, -1))) : $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ /= 
  1E3;
  this.$_tmap$.$setAnimationDuration$($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$268$$.animationOnDisplay ? "alphaFade" : $options$$268$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$268$$.animationOnMapChange ? "alphaFade" : $options$$268$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$268$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = this.$_tmap$, $attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$ = this.$_isCustomBasemap$ ? "$" + $options$$268$$.basemap : $options$$268$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.$_mapName$ != 
  $attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.$_mapName$ = $attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$;
  this.$_tmap$.$setFeaturesOff$($options$$268$$.featuresOff);
  this.$_tmap$.$_controlPanelBehavior$ = $options$$268$$.controlPanelBehavior;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = $options$$268$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = "shortDescOnly" : "labelAndShortDesc" == 
  $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$;
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = $options$$268$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$));
  this.$_tmap$.$setDrillMode$($options$$268$$.drilling);
  this.$_tmap$.$_animationOnDrill$ = $options$$268$$.animationOnDrill;
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$268$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$268$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$268$$.panning;
  this.$_tmap$.$_zooming$ = "auto" == $options$$268$$.zooming;
  this.$_tmap$.$_initialCenterX$ = $options$$268$$.panX;
  this.$_tmap$.$_initialCenterY$ = $options$$268$$.panY;
  this.$_tmap$.$_initialZoom$ = $options$$268$$.zoom;
  (0,window.isNaN)($options$$268$$.maxZoom) || ($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = window.Math.max($options$$268$$.maxZoom, 1), this.$_tmap$.$_maxZoomFactor$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$);
  $options$$268$$._legend && (this.$_tmap$.$_legendData$ = $options$$268$$._legend);
  $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = $options$$268$$.styleDefaults;
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this.$_tmap$, $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$);
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.areaStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.labelStyle);
  this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.dropTargetStyle);
  this.$_tmap$.$_styleDefaults$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$;
  if(this.$_isCustomBasemap$ && $options$$268$$.sourceXml) {
    for(var $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = (new D.$DvtXmlParser$$).parse($options$$268$$.sourceXml).$getChildNodes$(), $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$, 
    $attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$ = 0;$attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.length;$attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$++) {
      if($childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$[$attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$], $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$ = $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$.getName(), 
      "layer" == $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$) {
        $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$ = $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$;
        $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$ = $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.$getChildNodes$();
        $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$ = $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.$getAttr$("id");
        for(var $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ = D.$JSCompiler_alias_VOID$$, $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$ = [], $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$ = 
        0;$children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$ < $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$.length;$children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$++) {
          if($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ = $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$[$children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$], $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.getName(), 
          "image" == $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$) {
            $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ = {};
            $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$.source = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$getAttr$("source");
            $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$.width = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$getAttr$("width");
            $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$.height = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$getAttr$("height");
            var $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$getAttr$("bidi"), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$getAttr$("dir");
            $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$.dir = "true" == $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$ || "rtl" == $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ ? "rtl" : "ltr";
            $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$.push($JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$)
          }
        }
        this.$_customAreaLayerImages$[$areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$] = $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$
      }else {
        if("points" == $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$) {
          $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$ = $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$.$getChildNodes$();
          $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$ = $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$ = D.$JSCompiler_alias_VOID$$;
          $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$ = {};
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ = {};
          for($JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ = 0;$JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ < $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$.length;$JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$++) {
            $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$ = $childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$[$JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$], $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$ = $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.getName(), 
            "point" == $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$ && ($children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$[$areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.$getAttr$("name")] = [$areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.$getAttr$("x"), $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.$getAttr$("y")], 
            $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$[$areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.$getAttr$("longLabel")])
          }
          D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$, $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
        }
      }
    }
  }
  $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$ = $options$$268$$.areaLayers;
  $attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$ = this.$_tmap$.$_mapName$;
  for($childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$ = 0;$childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$.length;$childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$++) {
    if($areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$ = D.$DvtJSONUtils$$.$merge$($JSCompiler_StaticMethods_setMapName$self$$inline_11436_animDur$$inline_8502_areaLayers$$inline_8520_childNodes$$inline_8514_maxZoomFactor$$inline_11470_popups$$inline_8504_styles$$inline_8510_tooltipDisplay$$inline_8503$$[$childNodes$$inline_11477_childNodes$$inline_11489_i$$inline_8522_node$$inline_8515$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), 
    $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$ = $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.layer) {
      $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.areaStyle);
      $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.labelStyle);
      if(this.$_isCustomBasemap$) {
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ = $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.labelDisplay, 
        $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.labelType, this.$_tmap$.$__getEventManager$());
        $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$ = this.$_customAreaLayerImages$[$children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$];
        $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$_tmap$.$getCtx$());
        if($children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$ && 0 < $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$.length) {
          var $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$ = $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$[0].width, $context$$inline_11508_refHeight$$inline_11501$$ = $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$[0].height;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$_layerWidth$ = $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$_layerHeight$ = $context$$inline_11508_refHeight$$inline_11501$$;
          for(var $area$$inline_11509_locImages$$inline_11502$$ = [], $areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$ = 0;$areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$ < $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$.length;$areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$++) {
            $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ && "rtl" == $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$[$areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$].dir ? $area$$inline_11509_locImages$$inline_11502$$.push($children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$[$areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$]) : 
            !$JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ && "ltr" == $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$[$areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$].dir && $area$$inline_11509_locImages$$inline_11502$$.push($children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$[$areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$])
          }
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$_areaLayerImages$ = 0 < $area$$inline_11509_locImages$$inline_11502$$.length ? $area$$inline_11509_locImages$$inline_11502$$ : $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$);
          $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$_imageSrc$, 0, 0, $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$, 
          $context$$inline_11508_refHeight$$inline_11501$$)
        }
        $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$.$AreaShapes$ = 
        {image:$bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$})
      }else {
        $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.labelDisplay, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.labelType, this.$_tmap$.$__getEventManager$());
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$, $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$);
        $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$ = $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$;
        $areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$;
        $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$ = {};
        $context$$inline_11508_refHeight$$inline_11501$$ = this.$_tmap$.$getCtx$();
        $area$$inline_11509_locImages$$inline_11502$$ = D.$JSCompiler_alias_VOID$$;
        for($area$$inline_11509_locImages$$inline_11502$$ in $areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$) {
          $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$[$area$$inline_11509_locImages$$inline_11502$$] = new D.$DvtPath$$($context$$inline_11508_refHeight$$inline_11501$$);
          if(($areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$ = this.$_areaLayerStyle$.$getStyle$("border-color")) && "transparent" != $areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$) {
            $areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$ = new D.$DvtSolidStroke$$($areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$[$area$$inline_11509_locImages$$inline_11502$$].$setStroke$($areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$)
          }
          $areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$ = this.$_areaLayerStyle$.$getStyle$("background-color");
          "transparent" != $areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$ ? $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$[$area$$inline_11509_locImages$$inline_11502$$].$setSolidFill$($areaNames$$inline_11506_backgroundColor$$inline_11512_borderColor$$inline_11510_i$$inline_11503_stroke$$inline_11511$$) : $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$[$area$$inline_11509_locImages$$inline_11502$$].$setFill$(D.$JSCompiler_alias_NULL$$)
        }
        $JSCompiler_temp_const$$9410_i$$inline_11494_image$$inline_11483_isRTL$$inline_11499_nodeName$$inline_11480$$.$AreaShapes$ = $bidi$$inline_11484_refWidth$$inline_11500_shape$$inline_11498_shapes$$inline_11507$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$);
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$inline_11437_basemap$$inline_8521_i$$inline_8517$$, $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$);
        $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$.$_labelInfo$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11496_areaNames$$inline_8526_dir$$inline_11485_labels$$inline_11493_node$$inline_11479_values$$inline_11518$$;
        $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$);
        $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$.$_children$ = $children$$inline_11521_i$$inline_11482_images$$inline_11497_layer$$inline_8524_points$$inline_11492$$
      }
      $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
      $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$.$setAnimation$("auto" == $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.animationOnLayerChange);
      $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$);
      $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.areaDataLayer && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, [$areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.areaDataLayer], $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.pointDataLayers && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $areaLayer$$inline_8523_layerName$$inline_11478_node$$inline_11490_nodeName$$inline_8516_xmlNode$$inline_11476$$.pointDataLayers, $images$$inline_11481_mapLayer$$inline_8525_nodeName$$inline_11491$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $options$$268$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_ParseDataLayers$$ = function $$JSCompiler_StaticMethods_ParseDataLayers$$$($JSCompiler_StaticMethods_ParseDataLayers$self$$, $dataLayers$$9$$, $parentLayer$$6$$, $topLayerName$$2$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$) {
  if($dataLayers$$9$$) {
    for(var $i$$832$$ = 0;$i$$832$$ < $dataLayers$$9$$.length;$i$$832$$++) {
      var $dataLayerOptions$$1_initSelections$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$9$$[$i$$832$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      if($dataLayerOptions$$1_initSelections$$.markerDefs) {
        var $area$$inline_8583_dataLayer$$16_markerDefs$$ = $dataLayerOptions$$1_initSelections$$.markerDefs, $markerDef$$16$$;
        for($markerDef$$16$$ in $area$$inline_8583_dataLayer$$16_markerDefs$$) {
          if(!$JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$]) {
            var $initDisclosed_xmlNode$$68$$ = (new D.$DvtXmlParser$$).parse($area$$inline_8583_dataLayer$$16_markerDefs$$[$markerDef$$16$$]);
            $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getCtx$(), $initDisclosed_xmlNode$$68$$)
          }
        }
      }
      $dataLayerOptions$$1_initSelections$$.legend && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_legendData$ = $dataLayerOptions$$1_initSelections$$.legend);
      if($parentLayer$$6$$) {
        if($parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$) {
          for($area$$inline_8583_dataLayer$$16_markerDefs$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$ = $parentLayer$$6$$, $area$$inline_8583_dataLayer$$16_markerDefs$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$.$AreaNames$) {
            $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$.$_renderArea$[$area$$inline_8583_dataLayer$$16_markerDefs$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$.$_renderLabel$[$area$$inline_8583_dataLayer$$16_markerDefs$$] = D.$JSCompiler_alias_TRUE$$
          }
        }
      }else {
        $parentLayer$$6$$ = new D.$DvtMapLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$__getEventManager$()), $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_layers$.push($parentLayer$$6$$)
      }
      $area$$inline_8583_dataLayer$$16_markerDefs$$ = new D.$DvtMapDataLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $parentLayer$$6$$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$__getEventManager$(), $dataLayerOptions$$1_initSelections$$);
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$ = $dataLayerOptions$$1_initSelections$$.selectionMode;
      "single" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$ ? $area$$inline_8583_dataLayer$$16_markerDefs$$.$setSelectionMode$("s") : "multiple" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$ && $area$$inline_8583_dataLayer$$16_markerDefs$$.$setSelectionMode$("m");
      $area$$inline_8583_dataLayer$$16_markerDefs$$.$setAnimation$($dataLayerOptions$$1_initSelections$$.animationOnDataChange);
      $area$$inline_8583_dataLayer$$16_markerDefs$$.$setAnimationDuration$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getAnimationDuration$());
      var $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$ = $dataLayerOptions$$1_initSelections$$.isolatedItem);
      var $disclosedItems_isolatedArea$$inline_8614$$ = $dataLayerOptions$$1_initSelections$$.disclosedItems, $initDisclosed_xmlNode$$68$$ = [], $isolatedAreaId$$;
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$ = $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$;
      var $popups$$1$$;
      $dataLayerOptions$$1_initSelections$$.popups && ($popups$$1$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_getShowPopupBehaviors$($dataLayerOptions$$1_initSelections$$.popups));
      var $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$().hiddenCategories, $areas$$6_renderer$$15$$ = $dataLayerOptions$$1_initSelections$$.areas;
      if($areas$$6_renderer$$15$$) {
        for(var $area$$inline_8615_j$$117$$ = 0;$area$$inline_8615_j$$117$$ < $areas$$6_renderer$$15$$.length;$area$$inline_8615_j$$117$$++) {
          if($context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$, $areas$$6_renderer$$15$$[$area$$inline_8615_j$$117$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8583_dataLayer$$16_markerDefs$$, D.$JSCompiler_alias_NULL$$)
          }else {
            var $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $areas$$6_renderer$$15$$[$area$$inline_8615_j$$117$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$ != $areas$$6_renderer$$15$$[$area$$inline_8615_j$$117$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$
              }
            }
            $disclosedItems_isolatedArea$$inline_8614$$ && -1 != $disclosedItems_isolatedArea$$inline_8614$$.indexOf($areas$$6_renderer$$15$$[$area$$inline_8615_j$$117$$].id) && $initDisclosed_xmlNode$$68$$.push($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$);
            var $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$, $layer$$inline_8589_layer$$inline_8602$$ = $parentLayer$$6$$, $dataLayer$$inline_8590_markers$$10$$ = $area$$inline_8583_dataLayer$$16_markerDefs$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $areas$$6_renderer$$15$$[$area$$inline_8615_j$$117$$], $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$ = 
            $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.location;
            if($layer$$inline_8589_layer$$inline_8602$$.$AreaShapes$[$areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$] && $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.color) {
              $layer$$inline_8589_layer$$inline_8602$$.$_renderArea$[$areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$] = D.$JSCompiler_alias_FALSE$$;
              $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$ = new D.$DvtDrillablePath$$($JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$.$_tmap$.$_bSupportsVectorEffects$);
              $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = D.$DvtJSONUtils$$.$merge$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$, $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$.$_tmap$.$_styleDefaults$.dataAreaDefaults);
              $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.labelStyle || ($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.labelStyle = $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$.$_tmap$.$_styleDefaults$.labelStyle);
              var $dis$$inline_8597_hs$$inline_8594_svgElem$$inline_8605$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.hoverColor, 1, 2), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.selectedInnerColor, 1, 1), $dos$$inline_8598_outerStroke$$inline_11546_sos$$inline_8596$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.selectedOuterColor, 
              1, 4);
              $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$.$setHoverStroke$($dis$$inline_8597_hs$$inline_8594_svgElem$$inline_8605$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$, $dos$$inline_8598_outerStroke$$inline_11546_sos$$inline_8596$$);
              $dis$$inline_8597_hs$$inline_8594_svgElem$$inline_8605$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.drilledInnerColor, 1, 2);
              $dos$$inline_8598_outerStroke$$inline_11546_sos$$inline_8596$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.drilledOuterColor, 1, 4);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$ = $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_disclosedInnerStroke$ = $dis$$inline_8597_hs$$inline_8594_svgElem$$inline_8605$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_disclosedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_disclosedOuterStroke$ = $dos$$inline_8598_outerStroke$$inline_11546_sos$$inline_8596$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$.$_disclosedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
              $layer$$inline_8589_layer$$inline_8602$$.$_renderLabel$[$areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.location] = D.$JSCompiler_alias_FALSE$$;
              (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$, $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$);
              $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$ = $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$.$_createLabel$($layer$$inline_8589_layer$$inline_8602$$, $dataLayer$$inline_8590_markers$$10$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$, 
              $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$, D.$JSCompiler_alias_TRUE$$);
              $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = new D.$DvtMapAreaPeer$$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$, $dataLayer$$inline_8590_markers$$10$$, $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$, $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$)
            }else {
              $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = D.$JSCompiler_alias_NULL$$
            }
            $popups$$1$$ && $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ && ($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.$setSelectable$($area$$inline_8583_dataLayer$$16_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8583_dataLayer$$16_markerDefs$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$))
          }
        }
      }
      $areas$$6_renderer$$15$$ = $dataLayerOptions$$1_initSelections$$.renderer;
      if(($dataLayer$$inline_8590_markers$$10$$ = $dataLayerOptions$$1_initSelections$$.markers) && !$areas$$6_renderer$$15$$) {
        for($area$$inline_8615_j$$117$$ = 0;$area$$inline_8615_j$$117$$ < $dataLayer$$inline_8590_markers$$10$$.length;$area$$inline_8615_j$$117$$++) {
          if($context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$, $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8583_dataLayer$$16_markerDefs$$, D.$JSCompiler_alias_NULL$$)
          }else {
            $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$ != $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$
              }
            }
            $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createMarker$($parentLayer$$6$$, $area$$inline_8583_dataLayer$$16_markerDefs$$, $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$);
            $popups$$1$$ && $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ && ($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.$setSelectable$($area$$inline_8583_dataLayer$$16_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8583_dataLayer$$16_markerDefs$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$))
          }
        }
      }
      if($context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$ = $dataLayerOptions$$1_initSelections$$.images) {
        for($area$$inline_8615_j$$117$$ = 0;$area$$inline_8615_j$$117$$ < $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$.length;$area$$inline_8615_j$$117$$++) {
          $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$[$area$$inline_8615_j$$117$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$ != $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$[$area$$inline_8615_j$$117$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$
            }
          }
          $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createImage$($parentLayer$$6$$, $area$$inline_8583_dataLayer$$16_markerDefs$$, $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$[$area$$inline_8615_j$$117$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$);
          $popups$$1$$ && $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ && (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8583_dataLayer$$16_markerDefs$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$)
        }
      }
      if($areas$$6_renderer$$15$$) {
        for($area$$inline_8615_j$$117$$ = 0;$area$$inline_8615_j$$117$$ < $dataLayer$$inline_8590_markers$$10$$.length;$area$$inline_8615_j$$117$$++) {
          $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$ != $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$
            }
          }
          $disclosedItems_isolatedArea$$inline_8614$$ && -1 != $disclosedItems_isolatedArea$$inline_8614$$.indexOf($dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$].id) && $initDisclosed_xmlNode$$68$$.push($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$);
          $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$()._contextHandler($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getElem$(), D.$JSCompiler_alias_NULL$$, $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$], {hovered:D.$JSCompiler_alias_FALSE$$, selected:D.$JSCompiler_alias_FALSE$$, focused:D.$JSCompiler_alias_FALSE$$}, D.$JSCompiler_alias_NULL$$);
          $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$ = $areas$$6_renderer$$15$$($context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$);
          $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$;
          $layer$$inline_8589_layer$$inline_8602$$ = $parentLayer$$6$$;
          $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$ = $area$$inline_8583_dataLayer$$16_markerDefs$$;
          $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = $dataLayer$$inline_8590_markers$$10$$[$area$$inline_8615_j$$117$$];
          $dis$$inline_8597_hs$$inline_8594_svgElem$$inline_8605$$ = $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$;
          $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$ = $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8582_isAreaDataLayer$$1_selectionMode$$14$$;
          ($areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$)) ? ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11544_isParentAreaDataLayer$$inline_8606_sis$$inline_8595$$ && ($layer$$inline_8589_layer$$inline_8602$$.$_renderLabel$[$areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.location] = 
          D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$ = new D.$DvtCustomDataItem$$($JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$.$_tmap$.$getCtx$(), $dis$$inline_8597_hs$$inline_8594_svgElem$$inline_8605$$, $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$.$_tmap$.$_styleDefaults$.dataAreaDefaults), 
          $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = new D.$DvtMapObjPeer$$($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$, $context$$602_dataLayer$$inline_8603_hiddenCategories$$12_images$$22$$, $JSCompiler_StaticMethods__createArea$self$$inline_8588_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8601_dataItem$$inline_8608_label$$inline_8599$$, D.$JSCompiler_alias_NULL$$, $areaId$$inline_8592_center$$inline_8607_path$$inline_8593_svgElem$$2$$)) : $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ = 
          D.$JSCompiler_alias_NULL$$;
          $popups$$1$$ && $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$ && ($areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$.$setSelectable$($area$$inline_8583_dataLayer$$16_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8583_dataLayer$$16_markerDefs$$, $areaId$$2_data$$inline_8591_data$$inline_8604_dataObj$$4$$))
        }
      }
      if($isolatedAreaId$$) {
        for($area$$inline_8615_j$$117$$ in $area$$inline_8583_dataLayer$$16_markerDefs$$.$_isolatedAreaRowKey$ = $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$ = $parentLayer$$6$$, $disclosedItems_isolatedArea$$inline_8614$$ = $isolatedAreaId$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$.$_isolatedArea$ = $disclosedItems_isolatedArea$$inline_8614$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$.$_layerDim$ = 
        D.$JSCompiler_alias_NULL$$, $area$$inline_8615_j$$117$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$.$AreaShapes$) {
          $area$$inline_8615_j$$117$$ != $disclosedItems_isolatedArea$$inline_8614$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8613_isolatedRowKey$$.$_renderArea$[$area$$inline_8615_j$$117$$] = D.$JSCompiler_alias_FALSE$$)
        }
      }
      if(($dataLayerOptions$$1_initSelections$$ = $dataLayerOptions$$1_initSelections$$.selection) && 0 < $dataLayerOptions$$1_initSelections$$.length) {
        $area$$inline_8583_dataLayer$$16_markerDefs$$.$_initSelections$ = $dataLayerOptions$$1_initSelections$$
      }
      $initDisclosed_xmlNode$$68$$ && 0 < $initDisclosed_xmlNode$$68$$.length && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_initDrilled$[$parentLayer$$6$$.$LayerName$] = [$area$$inline_8583_dataLayer$$16_markerDefs$$.$getClientId$(), $initDisclosed_xmlNode$$68$$]);
      $topLayerName$$2$$ ? $parentLayer$$6$$.$updateDataLayer$($area$$inline_8583_dataLayer$$16_markerDefs$$, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), $topLayerName$$2$$) : $parentLayer$$6$$.$DataLayers$[$area$$inline_8583_dataLayer$$16_markerDefs$$.$getClientId$()] = $area$$inline_8583_dataLayer$$16_markerDefs$$
    }
  }
};
D.$DvtThematicMapJsonParser$$.prototype.$_createMarker$ = function $$DvtThematicMapJsonParser$$$$$_createMarker$$($label$$101_layer$$13$$, $dataLayer$$18$$, $data$$114$$, $isParentAreaDataLayer$$) {
  var $center$$16$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$18$$, $data$$114$$);
  if(!$center$$16$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $marker$$18_markerDefaults_sx$$18$$ = this.$_tmap$.$_styleDefaults$.dataMarkerDefaults, $markerLabelStyle_rotation$$9_sy$$18$$ = new D.$DvtCSSStyle$$($marker$$18_markerDefaults_sx$$18$$.labelStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($markerLabelStyle_rotation$$9_sy$$18$$, $data$$114$$.labelStyle);
  $data$$114$$ = D.$DvtJSONUtils$$.$merge$($data$$114$$, $marker$$18_markerDefaults_sx$$18$$);
  $data$$114$$.labelStyle = $markerLabelStyle_rotation$$9_sy$$18$$.toString();
  $marker$$18_markerDefaults_sx$$18$$ = 1;
  (0,window.isNaN)($data$$114$$.scaleX) || ($marker$$18_markerDefaults_sx$$18$$ = $data$$114$$.scaleX);
  $markerLabelStyle_rotation$$9_sy$$18$$ = 1;
  (0,window.isNaN)($data$$114$$.scaleY) || ($markerLabelStyle_rotation$$9_sy$$18$$ = $data$$114$$.scaleY);
  var $w$$68$$ = $data$$114$$.width, $h$$66$$ = $data$$114$$.height;
  if(!$w$$68$$ || (0,window.isNaN)($w$$68$$)) {
    $w$$68$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.width
  }
  if(!$h$$66$$ || (0,window.isNaN)($h$$66$$)) {
    $h$$66$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.height
  }
  if($data$$114$$.source) {
    $marker$$18_markerDefaults_sx$$18$$ = new D.$DvtImageMarker$$(this.$_tmap$.$getCtx$(), $center$$16$$.x, $center$$16$$.y, $w$$68$$ * $marker$$18_markerDefaults_sx$$18$$, $h$$66$$ * $markerLabelStyle_rotation$$9_sy$$18$$, $data$$114$$.source, $data$$114$$.sourceSelected, $data$$114$$.sourceHover, $data$$114$$.sourceHoverSelected)
  }else {
    var $shapeType$$1$$ = $data$$114$$.shape ? $data$$114$$.shape : this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.shape, $marker$$18_markerDefaults_sx$$18$$ = new D.$DvtSimpleMarker$$(this.$_tmap$.$getCtx$(), $shapeType$$1$$, this.$_tmap$.$_skinName$, $center$$16$$.x, $center$$16$$.y, $w$$68$$ * $marker$$18_markerDefaults_sx$$18$$, $h$$66$$ * $markerLabelStyle_rotation$$9_sy$$18$$)
  }
  ($markerLabelStyle_rotation$$9_sy$$18$$ = $data$$114$$.rotation) && $marker$$18_markerDefaults_sx$$18$$.$setRotation$($markerLabelStyle_rotation$$9_sy$$18$$ * window.Math.PI / 180);
  $isParentAreaDataLayer$$ && ($label$$101_layer$$13$$.$_renderLabel$[$data$$114$$.location] = D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, $data$$114$$, $marker$$18_markerDefaults_sx$$18$$);
  $label$$101_layer$$13$$ = this.$_createLabel$($label$$101_layer$$13$$, $dataLayer$$18$$, $data$$114$$, $marker$$18_markerDefaults_sx$$18$$, $isParentAreaDataLayer$$);
  return new D.$DvtMapObjPeer$$($data$$114$$, $dataLayer$$18$$, $marker$$18_markerDefaults_sx$$18$$, $label$$101_layer$$13$$, $center$$16$$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_createImage$ = function $$DvtThematicMapJsonParser$$$$$_createImage$$($layer$$14$$, $dataLayer$$19$$, $data$$115$$, $isParentAreaDataLayer$$1$$) {
  var $center$$17$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$19$$, $data$$115$$);
  if(!$center$$17$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $image$$23$$ = new D.$DvtImage$$(this.$_tmap$.$getCtx$(), $data$$115$$.url), $width$$158$$ = $data$$115$$.width, $height$$143$$ = $data$$115$$.height;
  $width$$158$$ != D.$JSCompiler_alias_NULL$$ && $height$$143$$ != D.$JSCompiler_alias_NULL$$ && ($image$$23$$.$setX$($center$$17$$.x - $width$$158$$ / 2), $image$$23$$.$setY$($center$$17$$.y - $height$$143$$ / 2), $image$$23$$.$setWidth$($width$$158$$), $image$$23$$.$setHeight$($height$$143$$));
  $isParentAreaDataLayer$$1$$ && ($layer$$14$$.$_renderLabel$[$data$$115$$.location] = D.$JSCompiler_alias_FALSE$$);
  var $peer$$33$$ = new D.$DvtMapObjPeer$$($data$$115$$, $dataLayer$$19$$, $image$$23$$, D.$JSCompiler_alias_NULL$$, $center$$17$$);
  (!$width$$158$$ || !$height$$143$$) && D.$DvtImageLoader$$.$loadImage$(this.$_tmap$.$getCtx$(), $data$$115$$.url, function($layer$$14$$) {
    $layer$$14$$ && ($layer$$14$$.width && $layer$$14$$.height) && ($image$$23$$.$setWidth$($layer$$14$$.width), $image$$23$$.$setHeight$($layer$$14$$.height), $image$$23$$.$setX$($center$$17$$.x - $layer$$14$$.width / 2), $image$$23$$.$setY$($center$$17$$.y - $layer$$14$$.height / 2), $peer$$33$$.$__recenter$())
  });
  return $peer$$33$$
};
D.$DvtThematicMapJsonParser$$.prototype.$_createLabel$ = function $$DvtThematicMapJsonParser$$$$$_createLabel$$($fillColor$$10_layer$$16$$, $dataLayer$$21_labelStyle$$20$$, $data$$117$$, $displayable$$97_isArea$$1$$, $isParentAreaDataLayer$$3$$) {
  var $areaId$$4$$ = $data$$117$$.location, $labelText$$2$$ = $data$$117$$.label, $labelDisplay$$7$$ = $labelText$$2$$ ? "on" : "off";
  $isParentAreaDataLayer$$3$$ && ($labelDisplay$$7$$ = $fillColor$$10_layer$$16$$.$getLabelDisplay$());
  $displayable$$97_isArea$$1$$ = $displayable$$97_isArea$$1$$ instanceof D.$DvtPath$$;
  if(!$labelText$$2$$ && $isParentAreaDataLayer$$3$$ && ($displayable$$97_isArea$$1$$ && "off" != $labelDisplay$$7$$ || !$displayable$$97_isArea$$1$$ && "on" == $labelDisplay$$7$$)) {
    $labelText$$2$$ = "long" == $fillColor$$10_layer$$16$$.$_labelType$ ? $fillColor$$10_layer$$16$$.$AreaNames$[$areaId$$4$$][1] : $fillColor$$10_layer$$16$$.$AreaNames$[$areaId$$4$$][0]
  }
  if($labelText$$2$$) {
    var $context$$605_label$$102$$ = this.$_tmap$.$getCtx$(), $context$$605_label$$102$$ = $displayable$$97_isArea$$1$$ ? new D.$DvtMapLabel$$($context$$605_label$$102$$, $labelText$$2$$, $fillColor$$10_layer$$16$$.$getLabelInfoForArea$ ? $fillColor$$10_layer$$16$$.$getLabelInfoForArea$($areaId$$4$$) : D.$JSCompiler_alias_NULL$$, $labelDisplay$$7$$, $dataLayer$$21_labelStyle$$20$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : new D.$DvtOutputText$$($context$$605_label$$102$$, $labelText$$2$$, 
    0, 0);
    $dataLayer$$21_labelStyle$$20$$ = new D.$DvtCSSStyle$$;
    $displayable$$97_isArea$$1$$ && $dataLayer$$21_labelStyle$$20$$.$merge$(new D.$DvtCSSStyle$$($fillColor$$10_layer$$16$$.$_layerCSSStyle$));
    $data$$117$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($dataLayer$$21_labelStyle$$20$$, $data$$117$$.labelStyle);
    $fillColor$$10_layer$$16$$ = $dataLayer$$21_labelStyle$$20$$.$getStyle$("color");
    $dataLayer$$21_labelStyle$$20$$.$setStyle$("color", D.$JSCompiler_alias_NULL$$);
    $context$$605_label$$102$$.$setCSSStyle$($dataLayer$$21_labelStyle$$20$$);
    if($context$$605_label$$102$$ instanceof D.$DvtMapLabel$$ && (D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ || !$fillColor$$10_layer$$16$$)) {
      $fillColor$$10_layer$$16$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($data$$117$$.color)
    }
    $fillColor$$10_layer$$16$$ && $context$$605_label$$102$$.$setSolidFill$($fillColor$$10_layer$$16$$)
  }
  return $context$$605_label$$102$$
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8660$$, $borderColor$$60_style$$111$$, $displayable$$98$$) {
  var $pattern$$14$$ = $borderColor$$60_style$$111$$.pattern, $backgroundColor$$26$$ = $borderColor$$60_style$$111$$.color, $gradient$$16$$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8660$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8660$$.$_tmap$.$_skinName$ ? "none" : $borderColor$$60_style$$111$$.visualEffects;
  if($displayable$$98$$ instanceof D.$DvtSimpleMarker$$) {
    if("none" != $borderColor$$60_style$$111$$.borderStyle) {
      var $borderWidth$$15_opacity$$5$$ = $borderColor$$60_style$$111$$.borderWidth;
      "string" == typeof $borderWidth$$15_opacity$$5$$ && ($borderWidth$$15_opacity$$5$$ = "px" == $borderWidth$$15_opacity$$5$$.slice(-2) ? (0,window.parseFloat)($borderColor$$60_style$$111$$.borderWidth.slice(0, -2)) : (0,window.parseFloat)($borderColor$$60_style$$111$$.borderWidth));
      var $stroke$$116$$ = new D.$DvtSolidStroke$$($borderColor$$60_style$$111$$.borderColor, 1, $borderWidth$$15_opacity$$5$$);
      $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8660$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($stroke$$116$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
      $stroke$$116$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($borderColor$$60_style$$111$$.borderStyle));
      $displayable$$98$$.$setStroke$($stroke$$116$$)
    }
    $borderWidth$$15_opacity$$5$$ = $borderColor$$60_style$$111$$.opacity;
    "none" != $gradient$$16$$ ? $displayable$$98$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$26$$, $displayable$$98$$, $borderWidth$$15_opacity$$5$$)) : $pattern$$14$$ ? $displayable$$98$$.$setFill$(new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF")) : $backgroundColor$$26$$ && $displayable$$98$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$15_opacity$$5$$)
  }else {
    if($displayable$$98$$ instanceof D.$DvtPath$$) {
      if($borderColor$$60_style$$111$$ = $borderColor$$60_style$$111$$.borderColor) {
        $stroke$$116$$ = new D.$DvtSolidStroke$$($borderColor$$60_style$$111$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8660$$.$_tmap$.$_bSupportsVectorEffects$ && ($stroke$$116$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$98$$.$setStroke$($stroke$$116$$)
      }
      $pattern$$14$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8660$$ = new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF"), $displayable$$98$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8660$$) : $displayable$$98$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$15_opacity$$5$$)
    }
  }
};
D.$DvtThematicMapJsonParser$getCenter$$ = function $$DvtThematicMapJsonParser$getCenter$$$($dataLayer$$22$$, $data$$118$$) {
  var $locationCoords_map$$29$$ = $dataLayer$$22$$.$_tmap$, $mapName$$ = $locationCoords_map$$29$$.$_mapName$, $location$$27$$ = $data$$118$$.location;
  return $location$$27$$ ? (($locationCoords_map$$29$$ = D.$DvtBaseMapManager$$.$getAreaCenter$($mapName$$, $dataLayer$$22$$.$_parentLayer$.$LayerName$, $location$$27$$)) || ($locationCoords_map$$29$$ = D.$DvtBaseMapManager$$.$getCityCoordinates$($mapName$$, $location$$27$$)), $locationCoords_map$$29$$) : D.$DvtThematicMapProjections$$.$project$($data$$118$$.x, $data$$118$$.y, $locationCoords_map$$29$$.$_mapName$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_getShowPopupBehaviors$ = function $$DvtThematicMapJsonParser$$$$$_getShowPopupBehaviors$$($popups$$2$$) {
  for(var $spbs$$6$$ = [], $i$$836$$ = 0;$i$$836$$ < $popups$$2$$.length;$i$$836$$++) {
    $spbs$$6$$.push(new D.$DvtShowPopupBehavior$$($popups$$2$$[$i$$836$$].popupId, $popups$$2$$[$i$$836$$].triggerType, D.$JSCompiler_alias_NULL$$, $popups$$2$$[$i$$836$$].align))
  }
  return $spbs$$6$$
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$274$$, $y$$244$$, $basemap$$5$$) {
  var $point$$59$$;
  switch($basemap$$5$$) {
    case "africa":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$274$$, $y$$244$$));
      break;
    case "asia":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$274$$, $y$$244$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$274$$, $y$$244$$);
      break;
    case "europe":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$274$$, $y$$244$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$274$$, $y$$244$$));
      break;
    case "southAmerica":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$274$$, $y$$244$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$274$$, $y$$244$$));
      break;
    case "emea":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$274$$, $y$$244$$));
      break;
    case "latinAmerica":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$274$$, $y$$244$$));
      break;
    case "usaAndCanada":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$274$$, $y$$244$$));
      break;
    case "worldRegions":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$274$$, $y$$244$$);
      break;
    case "usa":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$274$$, $y$$244$$);
      break;
    case "world":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$274$$, $y$$244$$)
  }
  return $point$$59$$ ? new D.$DvtPoint$$(10 * $point$$59$$.x, 10 * $point$$59$$.y) : new D.$DvtPoint$$($x$$274$$, $y$$244$$)
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$275$$, $y$$245$$) {
  var $viewPortTransform$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$275$$, $y$$245$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$275$$, $y$$245$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$275$$, $y$$245$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$275$$, $y$$245$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, new D.$DvtPoint$$($x$$275$$, $y$$245$$))) : 
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$275$$, $y$$245$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$275$$, $y$$245$$))) : new D.$DvtPoint$$($x$$275$$, 
  $y$$245$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$276$$, $y$$246$$) {
  var $viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$276$$, $y$$246$$))
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$277$$, $y$$247$$) {
  var $viewPortTransform$$2$$;
  $viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$277$$, $y$$247$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$277$$, $y$$247$$))
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$60$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$60$$)
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$48_sP1$$, $n$$39_sP2$$, $theta$$4_x$$278$$, $rho_y$$248$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$48_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$48_sP1$$);
  $n$$39_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$39_sP2$$);
  $n$$39_sP2$$ = 0.5 * (window.Math.sin($c$$48_sP1$$) + window.Math.sin($n$$39_sP2$$));
  $c$$48_sP1$$ = window.Math.pow(window.Math.cos($c$$48_sP1$$), 2) + 2 * $n$$39_sP2$$ * window.Math.sin($c$$48_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$48_sP1$$ - 2 * $n$$39_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$39_sP2$$;
  $theta$$4_x$$278$$ = $n$$39_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$4_x$$278$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$248$$ = $c$$48_sP1$$ - 2 * $n$$39_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$248$$));
  $rho_y$$248$$ = window.Math.sqrt($rho_y$$248$$) / $n$$39_sP2$$;
  return new D.$DvtPoint$$($rho_y$$248$$ * window.Math.sin($theta$$4_x$$278$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$248$$ * window.Math.cos($theta$$4_x$$278$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$279$$, $y$$249$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$249$$)));
  return new D.$DvtPoint$$($x$$279$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$19_centerY$$5$$, $radX$$1_x$$280$$, $radY$$1_y$$250$$) {
  $radX$$1_x$$280$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX$$1_x$$280$$);
  $radY$$1_y$$250$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY$$1_y$$250$$);
  var $centerX$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$19_centerY$$5$$.x);
  $center$$19_centerY$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$19_centerY$$5$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY$$1_y$$250$$) * window.Math.sin($radX$$1_x$$280$$ - $centerX$$5$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$19_centerY$$5$$) * window.Math.sin($radY$$1_y$$250$$) - window.Math.sin($center$$19_centerY$$5$$) * window.Math.cos($radY$$1_y$$250$$) * window.Math.cos($radX$$1_x$$280$$ - $centerX$$5$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$281$$, $y$$251$$) {
  var $newY$$13_ycriteria$$ = window.Math.floor(window.Math.abs($y$$251$$) / 5);
  $newY$$13_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$251$$) - 5 * $newY$$13_ycriteria$$) / 5, $newX$$12$$ = $x$$281$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0])), $newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1] + $yInterval$$ * 
  (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1]);
  0 > $y$$251$$ && ($newY$$13_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$12$$, 180 * $newY$$13_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$23$$, $point$$61$$) {
  return new D.$DvtPoint$$($point$$61$$.x * $matrix$$23$$.$_a$ + $matrix$$23$$.$_tx$, $point$$61$$.y * $matrix$$23$$.$_d$ + $matrix$$23$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$837$$ = $deviceView$$.x, $d6_j$$118$$ = $deviceView$$.y, $d$$12$$ = $mapBound$$.$w$, $d1$$1$$ = $mapBound$$.$h$, $d2$$1_d3$$1$$ = 0, $d2$$1_d3$$1$$ = $deviceView$$.$w$ / $d$$12$$, $d4$$ = $deviceView$$.$h$ / $d1$$1$$, $d2$$1_d3$$1$$ = $d2$$1_d3$$1$$ <= $d4$$ ? $d2$$1_d3$$1$$ : $d4$$, $d5_i$$837$$ = $d5_i$$837$$ - $mapBound$$.x * $d2$$1_d3$$1$$, $d6_j$$118$$ = $d6_j$$118$$ + $mapBound$$.y * $d2$$1_d3$$1$$, $d5_i$$837$$ = $d5_i$$837$$ + ($deviceView$$.$w$ - $d$$12$$ * $d2$$1_d3$$1$$) / 
  2, $d6_j$$118$$ = $d6_j$$118$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - $d1$$1$$ * $d2$$1_d3$$1$$) / 2);
  return new D.$DvtMatrix$$($d2$$1_d3$$1$$, 0, 0, -$d2$$1_d3$$1$$, $d5_i$$837$$, $d6_j$$118$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$282$$) {
  return $x$$282$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$283$$) {
  return $x$$283$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$284$$, $y$$252$$, $basemap$$6$$) {
  var $point$$62$$;
  $x$$284$$ /= 10;
  $y$$252$$ /= 10;
  switch($basemap$$6$$) {
    case "africa":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$62$$.x, $point$$62$$.y);
      break;
    case "asia":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$62$$.x, $point$$62$$.y);
      break;
    case "australia":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$284$$, $y$$252$$);
      break;
    case "europe":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$62$$.x, $point$$62$$.y);
      break;
    case "northAmerica":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$62$$.x, $point$$62$$.y);
      break;
    case "southAmerica":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$62$$.x, $point$$62$$.y);
      break;
    case "emea":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$62$$.x, $point$$62$$.y);
      break;
    case "latinAmerica":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$));
      break;
    case "usaAndCanada":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$284$$, $y$$252$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$62$$.x, $point$$62$$.y);
      break;
    case "worldRegions":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$284$$, $y$$252$$);
      break;
    case "usa":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$284$$, $y$$252$$);
      break;
    case "world":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$284$$, $y$$252$$)
  }
  return $point$$62$$ ? $point$$62$$ : new D.$DvtPoint$$($x$$284$$, $y$$252$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$285$$, $y$$253$$) {
  var $point$$63_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$285$$, $y$$253$$) ? ($point$$63_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$63_viewPortTransform$$4$$.$invert$(), $point$$63_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$63_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$285$$, 
  $y$$253$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$63_viewPortTransform$$4$$.x, $point$$63_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$285$$, $y$$253$$) ? ($point$$63_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$63_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$63_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$285$$, $y$$253$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$285$$, $y$$253$$) ? ($point$$63_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$63_viewPortTransform$$4$$.$invert$(), $point$$63_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$63_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$285$$, $y$$253$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$63_viewPortTransform$$4$$.x, $point$$63_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$285$$, $y$$253$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$286$$, $y$$254$$) {
  var $point$$64_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$64_viewPortTransform$$5$$.$invert$();
  $point$$64_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$64_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$286$$, $y$$254$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$64_viewPortTransform$$5$$.x, $point$$64_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$287$$, $y$$255$$) {
  var $point$$65_viewPortTransform$$6$$;
  $point$$65_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$287$$, $y$$255$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$65_viewPortTransform$$6$$.$invert$();
  $point$$65_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$65_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$287$$, $y$$255$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$65_viewPortTransform$$6$$.x, $point$$65_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$66$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$66$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0$$4_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$50_sP1$$1$$, $n$$40_sP2$$1$$, $x$$288$$, $y$$256$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $c$$50_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$50_sP1$$1$$);
  $n$$40_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$40_sP2$$1$$);
  $n$$40_sP2$$1$$ = 0.5 * (window.Math.sin($c$$50_sP1$$1$$) + window.Math.sin($n$$40_sP2$$1$$));
  $c$$50_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$50_sP1$$1$$), 2) + 2 * $n$$40_sP2$$1$$ * window.Math.sin($c$$50_sP1$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = $c$$50_sP1$$1$$ - 2 * $n$$40_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0$$4_phi0$$1$$) / $n$$40_sP2$$1$$;
  var $p$$30$$ = window.Math.sqrt($x$$288$$ * $x$$288$$ + ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$256$$) * ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$256$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$288$$ / ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$256$$)) / $n$$40_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$50_sP1$$1$$ - $p$$30$$ * $p$$30$$ * $n$$40_sP2$$1$$ * $n$$40_sP2$$1$$) / (2 * $n$$40_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$289$$, $y$$257$$) {
  return new D.$DvtPoint$$($x$$289$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$257$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$20$$, $radX$$2_x$$290$$, $radY$$2_y$$258$$) {
  $radX$$2_x$$290$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$2_y$$258$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$6$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$20$$.y), $p$$31$$ = window.Math.sqrt($radX$$2_x$$290$$ * $radX$$2_x$$290$$ + $radY$$2_y$$258$$ * $radY$$2_y$$258$$), $c$$51$$ = window.Math.asin($p$$31$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$20$$.x) + window.Math.atan($radX$$2_x$$290$$ * window.Math.sin($c$$51$$) / ($p$$31$$ * window.Math.cos($centerY$$6$$) * window.Math.cos($c$$51$$) - $radY$$2_y$$258$$ * window.Math.sin($centerY$$6$$) * window.Math.sin($c$$51$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$51$$) * window.Math.sin($centerY$$6$$) + $radY$$2_y$$258$$ * window.Math.sin($c$$51$$) * 
  window.Math.cos($centerY$$6$$) / $p$$31$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$291$$, $y$$259$$) {
  var $criteria$$2_originalX$$ = window.Math.floor(window.Math.abs($y$$259$$) / 5);
  $criteria$$2_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$2_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$259$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$2_originalX$$, $criteria$$2_originalX$$ = $x$$291$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0]));
  0 > $y$$259$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$2_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$606$$, $button$$82$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$9$$, $eventManager$$47$$) {
  this.Init($context$$606$$, $button$$82$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$9$$, $eventManager$$47$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBaseControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($context$$607_proxy$$14$$, $button$$83$$, $mapCallback$$4$$, $panZoomCanvas$$22$$, $btype$$4$$, $eventManager$$48$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $context$$607_proxy$$14$$);
  this.$_btype$ = $btype$$4$$;
  this.$_button$ = $button$$83$$;
  this.$_eventManager$ = $eventManager$$48$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  $context$$607_proxy$$14$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 0 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLUP") : 1 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLDOWN") : 2 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", 
  "CONTROL_PANEL_RESET") : D.$JSCompiler_alias_NULL$$);
  this.$_eventManager$.$associate$(this.$_button$, $context$$607_proxy$$14$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$4$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$21$$) {
  this.$setAlpha$($enabled$$21$$ ? 1 : 0.4);
  this.$_isEnabled$ = $enabled$$21$$;
  this.$_button$.$setEnabled$($enabled$$21$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$779$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$779$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$608$$, $view$$63$$, $state$$98$$) {
  this.Init($context$$608$$, $view$$63$$, $state$$98$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$609$$, $view$$64$$, $state$$99$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$609$$, $view$$64$$, $state$$99$$);
  this.$_drillMode$ = $view$$64$$.$_drillMode$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$64$$);
  this.$_drillUpCallback$ = D.$DvtObj$$.$createCallback$($view$$64$$, $view$$64$$.$drillUp$);
  this.$_drillDownCallback$ = D.$DvtObj$$.$createCallback$($view$$64$$, $view$$64$$.$drillDown$);
  this.$_resetCallback$ = D.$DvtObj$$.$createCallback$($view$$64$$, $view$$64$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$64$$.$getSubcomponentStyles$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$2$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$2$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$2$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$3$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$3$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$3$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$1$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$getCtx$(), this.$_resetCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$1$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$getCtx$(), this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$getCtx$(), this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillUpButton$)
  }
};
  return D;
});