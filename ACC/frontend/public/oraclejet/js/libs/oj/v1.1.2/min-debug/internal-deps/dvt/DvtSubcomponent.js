/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAttrGroups$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAttrGroups$$, D.$DvtObj$$, "DvtAttrGroups");
D.$DvtAttrGroups$$.prototype.get = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtDiscreteAttrGroups$$ = function $$DvtDiscreteAttrGroups$$$() {
  this.$_results$ = []
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiscreteAttrGroups$$, D.$DvtAttrGroups$$, "DvtDiscreteAttrGroups");
D.$DvtDiscreteAttrGroups$$.prototype.add = function $$DvtDiscreteAttrGroups$$$$add$($group$$35$$, $groupLabel$$1$$, $params$$63$$) {
  this.$_results$.push({group:$group$$35$$, $groupLabel$:$groupLabel$$1$$, $params$:$params$$63$$})
};
D.$DvtDiscreteAttrGroups$$.prototype.get = function $$DvtDiscreteAttrGroups$$$$get$($group$$36$$) {
  if($group$$36$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$770$$ = 0;$i$$770$$ < this.$_results$.length;$i$$770$$++) {
    if(this.$_results$[$i$$770$$].group == $group$$36$$) {
      return this.$_results$[$i$$770$$].$params$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtContinuousAttrGroups$$ = function $$DvtContinuousAttrGroups$$$($minValue$$15$$, $maxValue$$16$$, $minLabel$$1$$, $maxLabel$$2$$, $ramp$$) {
  this.$_minValue$ = $minValue$$15$$;
  this.$_maxValue$ = $maxValue$$16$$;
  this.$_minLabel$ = $minLabel$$1$$ ? $minLabel$$1$$ : this.$_minValue$;
  this.$_maxLabel$ = $maxLabel$$2$$ ? $maxLabel$$2$$ : this.$_maxValue$;
  this.$_ramp$ = $ramp$$;
  this.$_range$ = this.$_maxValue$ - this.$_minValue$
};
D.$DvtObj$$.$createSubclass$(D.$DvtContinuousAttrGroups$$, D.$DvtAttrGroups$$, "DvtContinuousAttrGroups");
D.$DvtContinuousAttrGroups$$.prototype.get = function $$DvtContinuousAttrGroups$$$$get$($index$$232_ratio$$17_value$$183$$) {
  if((0,window.isNaN)($index$$232_ratio$$17_value$$183$$) || $index$$232_ratio$$17_value$$183$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $index$$232_ratio$$17_value$$183$$ = 0 < this.$_range$ ? ($index$$232_ratio$$17_value$$183$$ - this.$_minValue$) / this.$_range$ : 0.5;
  $index$$232_ratio$$17_value$$183$$ = window.Math.max(window.Math.min($index$$232_ratio$$17_value$$183$$, 1), 0);
  $index$$232_ratio$$17_value$$183$$ *= this.$_ramp$.length - 1;
  return $index$$232_ratio$$17_value$$183$$ === window.Math.round($index$$232_ratio$$17_value$$183$$) ? this.$_ramp$[$index$$232_ratio$$17_value$$183$$] : D.$DvtColorUtils$$.$interpolateColor$(this.$_ramp$[window.Math.floor($index$$232_ratio$$17_value$$183$$)], this.$_ramp$[window.Math.ceil($index$$232_ratio$$17_value$$183$$)], $index$$232_ratio$$17_value$$183$$ - window.Math.floor($index$$232_ratio$$17_value$$183$$))
};
D.$DvtContinuousAttrGroups$$.prototype.$getMinLabel$ = (0,D.$JSCompiler_get$$)("$_minLabel$");
D.$DvtLegendAttrGroupsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAttrGroupsRenderer$$, D.$DvtObj$$, "DvtLegendAttrGroupsRenderer");
D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$ = 0.4;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$ = 1;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$ = 5;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_VALUE_COLOR$ = "#333333";
D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$ = function $$DvtLegendAttrGroupsRenderer$$$$renderAttrGroups$$($context$$555$$, $eventManager$$40$$, $container$$171$$, $availWidth$$12$$, $availHeight$$9$$, $attrGroups$$3$$, $styles$$13$$) {
  var $colorContainer$$ = D.$JSCompiler_alias_NULL$$;
  $attrGroups$$3$$ && ($attrGroups$$3$$ instanceof D.$DvtContinuousAttrGroups$$ ? $colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$($context$$555$$, $eventManager$$40$$, $container$$171$$, $availWidth$$12$$, $attrGroups$$3$$, $styles$$13$$) : $attrGroups$$3$$ instanceof D.$DvtDiscreteAttrGroups$$ && ($colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$($context$$555$$, $container$$171$$, $availWidth$$12$$, $availHeight$$9$$, $attrGroups$$3$$, 
  $styles$$13$$)));
  return $colorContainer$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsContinuous$$($context$$556_maxLabel$$3$$, $eventManager$$41$$, $container$$172_minLabelStr$$, $availWidth$$13$$, $attrGroups$$4_maxLabelStr$$, $maxLabelWidth$$5_minLabelWidth_styles$$14$$) {
  var $isRTL$$39$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$556_maxLabel$$3$$), $labelY$$3$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, $colorContainer$$1$$ = new D.$DvtContainer$$($context$$556_maxLabel$$3$$);
  $container$$172_minLabelStr$$.$addChild$($colorContainer$$1$$);
  $container$$172_minLabelStr$$ = $attrGroups$$4_maxLabelStr$$.$getMinLabel$();
  var $minLabel$$2$$ = new D.$DvtOutputText$$($context$$556_maxLabel$$3$$, $container$$172_minLabelStr$$, 0, $labelY$$3$$);
  $minLabel$$2$$.$setCSSStyle$($maxLabelWidth$$5_minLabelWidth_styles$$14$$.$labelStyle$);
  $minLabel$$2$$.$alignMiddle$();
  $colorContainer$$1$$.$addChild$($minLabel$$2$$);
  var $gradientRect$$ = new D.$DvtRect$$($context$$556_maxLabel$$3$$, 0, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$1$$ = $isRTL$$39$$ ? $attrGroups$$4_maxLabelStr$$.$_ramp$.slice(0).slice().reverse() : $attrGroups$$4_maxLabelStr$$.$_ramp$.slice(0);
  $gradientRect$$.$setFill$(new D.$DvtLinearGradientFill$$(0, $gradientWidth_ramp$$1$$));
  $maxLabelWidth$$5_minLabelWidth_styles$$14$$.borderColor && $gradientRect$$.$setSolidStroke$($maxLabelWidth$$5_minLabelWidth_styles$$14$$.borderColor);
  $colorContainer$$1$$.$addChild$($gradientRect$$);
  $gradientWidth_ramp$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$;
  $attrGroups$$4_maxLabelStr$$ = $attrGroups$$4_maxLabelStr$$.$_maxLabel$;
  $context$$556_maxLabel$$3$$ = new D.$DvtOutputText$$($context$$556_maxLabel$$3$$, $attrGroups$$4_maxLabelStr$$, 0, $labelY$$3$$);
  $context$$556_maxLabel$$3$$.$setCSSStyle$($maxLabelWidth$$5_minLabelWidth_styles$$14$$.$labelStyle$);
  $context$$556_maxLabel$$3$$.$alignMiddle$();
  $colorContainer$$1$$.$addChild$($context$$556_maxLabel$$3$$);
  $isRTL$$39$$ ? ($maxLabelWidth$$5_minLabelWidth_styles$$14$$ = $context$$556_maxLabel$$3$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$), $minLabel$$2$$.$setX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$ + $gradientWidth_ramp$$1$$)) : ($maxLabelWidth$$5_minLabelWidth_styles$$14$$ = $minLabel$$2$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, 
  $gradientRect$$.$setTranslateX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$), $context$$556_maxLabel$$3$$.$setX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$ + $gradientWidth_ramp$$1$$));
  $eventManager$$41$$.$associate$($gradientRect$$, new D.$DvtSimpleObjPeer$$($container$$172_minLabelStr$$ + " - " + $attrGroups$$4_maxLabelStr$$));
  $colorContainer$$1$$.$getDimensions$().$w$ > $availWidth$$13$$ && ($colorContainer$$1$$.removeChild($minLabel$$2$$), $colorContainer$$1$$.removeChild($context$$556_maxLabel$$3$$), $gradientRect$$.$setTranslateX$(0));
  return $colorContainer$$1$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsDiscrete$$($context$$557_rect$$46$$, $component$$27_container$$173_items$$32$$, $actualDims_availWidth$$14$$, $availHeight$$11_preferredDims$$, $attrGroups$$5_mappings$$, $legendOptions$$8_styles$$15$$) {
  var $ret$$94$$ = new D.$DvtContainer$$($context$$557_rect$$46$$);
  $component$$27_container$$173_items$$32$$.$addChild$($ret$$94$$);
  $component$$27_container$$173_items$$32$$ = [];
  $attrGroups$$5_mappings$$ = $attrGroups$$5_mappings$$.$_results$.slice(0);
  for(var $i$$771$$ = 0;$i$$771$$ < $attrGroups$$5_mappings$$.length;$i$$771$$++) {
    var $mapping$$3$$ = $attrGroups$$5_mappings$$[$i$$771$$];
    $component$$27_container$$173_items$$32$$.push({text:$mapping$$3$$.$groupLabel$, color:$mapping$$3$$.$params$.color, pattern:$mapping$$3$$.$params$.pattern, borderColor:$legendOptions$$8_styles$$15$$.borderColor})
  }
  $legendOptions$$8_styles$$15$$ = {sections:[{items:$component$$27_container$$173_items$$32$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$legendOptions$$8_styles$$15$$.$labelStyle$.toString()};
  $component$$27_container$$173_items$$32$$ = (0,D.$DvtLegend$newInstance$$)($context$$557_rect$$46$$);
  $component$$27_container$$173_items$$32$$.setId(D.$JSCompiler_alias_NULL$$);
  $ret$$94$$.$addChild$($component$$27_container$$173_items$$32$$);
  $availHeight$$11_preferredDims$$ = $component$$27_container$$173_items$$32$$.$getPreferredSize$($legendOptions$$8_styles$$15$$, $actualDims_availWidth$$14$$, $availHeight$$11_preferredDims$$ * D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$);
  $component$$27_container$$173_items$$32$$.$render$($legendOptions$$8_styles$$15$$, $actualDims_availWidth$$14$$, $availHeight$$11_preferredDims$$.$h$);
  $actualDims_availWidth$$14$$ = $component$$27_container$$173_items$$32$$.$getContentDimensions$();
  $context$$557_rect$$46$$ = new D.$DvtRect$$($context$$557_rect$$46$$, 0, 0, $actualDims_availWidth$$14$$.$w$, $availHeight$$11_preferredDims$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$557_rect$$46$$);
  $ret$$94$$.$addChildAt$($context$$557_rect$$46$$, 0);
  return $ret$$94$$
};
D.$DvtBreadcrumbsDrillEvent$$ = function $$DvtBreadcrumbsDrillEvent$$$($id$$259$$) {
  this.Init("breadcrumbsDrill");
  this.$_id$ = $id$$259$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtBreadcrumbsDrillEvent");
D.$DvtBreadcrumbsDrillEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbs$$ = function $$DvtBreadcrumbs$$$($context$$558$$, $callback$$143$$, $callbackObj$$94$$, $options$$244$$) {
  this.Init($context$$558$$, $callback$$143$$, $callbackObj$$94$$, $options$$244$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbs$$, D.$DvtContainer$$, "DvtBreadcrumbs");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBreadcrumbs$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$559$$, $callback$$144$$, $callbackObj$$95$$, $options$$245$$) {
  D.$DvtBreadcrumbs$$.$superclass$.Init.call(this, $context$$559$$);
  this.$setOptions$($options$$245$$);
  this.$_eventHandler$ = new D.$DvtBreadcrumbsEventManager$$(this, $context$$559$$, $callback$$144$$, $callbackObj$$95$$);
  this.$_eventHandler$.$addListeners$(this);
  this.setId("breadcrumbs1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_curCrumbIdx$ = -1;
  this.$_crumbs$ = this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setOptions$ = function $$JSCompiler_prototypeAlias$$$$setOptions$$($options$$246$$) {
  this.$_options$ = D.$DvtBreadcrumbsDefaults$$.$calcOptions$($options$$246$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($data$$101$$, $width$$150$$) {
  this.$_data$ = $data$$101$$ ? D.$DvtJSONUtils$$.$clone$($data$$101$$) : this.$_data$;
  this.$removeChildren$();
  this.$_crumbs$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtBreadcrumbsRenderer$$.$render$(this, this, $width$$150$$)
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  var $prevCrumbIdx$$ = this.$_curCrumbIdx$;
  this.$_curCrumbIdx$ = -1;
  this.$_updateKeyboardFocusEffect$($prevCrumbIdx$$, this.$_curCrumbIdx$)
};
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$($prevIdx$$, $nextIdx$$) {
  var $prevKeyboardFocusRect$$ = this.$_keyboardFocusRect$, $context$$560_nextKeyboardFocusRect$$ = D.$JSCompiler_alias_NULL$$, $matrix$$20_nextCrumbObj$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, $nextIdx$$);
  if($matrix$$20_nextCrumbObj$$) {
    var $bounds$$147_peer$$26$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $matrix$$20_nextCrumbObj$$);
    $bounds$$147_peer$$26$$ && $bounds$$147_peer$$26$$.$isDrillable$ && $bounds$$147_peer$$26$$.$isDrillable$() ? ($context$$560_nextKeyboardFocusRect$$ = this.$getCtx$(), $bounds$$147_peer$$26$$ = $matrix$$20_nextCrumbObj$$.$getDimensions$(), $matrix$$20_nextCrumbObj$$ = $matrix$$20_nextCrumbObj$$.$getMatrix$(), this.$_keyboardFocusRect$ = $context$$560_nextKeyboardFocusRect$$ = new D.$DvtKeyboardFocusEffect$$($context$$560_nextKeyboardFocusRect$$, this, $bounds$$147_peer$$26$$, $matrix$$20_nextCrumbObj$$)) : 
    this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
  }
  $prevKeyboardFocusRect$$ && $prevKeyboardFocusRect$$.$hide$();
  $context$$560_nextKeyboardFocusRect$$ && $context$$560_nextKeyboardFocusRect$$.show()
};
D.$JSCompiler_StaticMethods_getCrumb$$ = function $$JSCompiler_StaticMethods_getCrumb$$$($JSCompiler_StaticMethods_getCrumb$self$$, $crumbIdx$$) {
  var $crumbs$$ = $JSCompiler_StaticMethods_getCrumb$self$$.$_crumbs$;
  return 0 > $crumbIdx$$ || !$crumbs$$ || $crumbIdx$$ >= $crumbs$$.length ? D.$JSCompiler_alias_NULL$$ : $crumbs$$[$crumbIdx$$]
};
D.$JSCompiler_StaticMethods_getCrumbIndex$$ = function $$JSCompiler_StaticMethods_getCrumbIndex$$$($JSCompiler_StaticMethods_getCrumbIndex$self$$, $crumb$$) {
  for(var $crumbs$$1$$ = $JSCompiler_StaticMethods_getCrumbIndex$self$$.$_crumbs$, $i$$772$$ = 0;$i$$772$$ < $crumbs$$1$$.length;$i$$772$$++) {
    if($crumbs$$1$$[$i$$772$$] == $crumb$$) {
      return $i$$772$$
    }
  }
};
D.$DvtBreadcrumbsDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDefaults$$, D.$DvtObj$$, "DvtBreadcrumbsDefaults");
D.$DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #003286;", disabledLabelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
D.$DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($userOptions$$5$$) {
  var $defaults$$8$$ = D.$DvtBreadcrumbsDefaults$$.$_getDefaults$($userOptions$$5$$);
  return $userOptions$$5$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$5$$, $defaults$$8$$) : $defaults$$8$$
};
D.$DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
  return D.$DvtJSONUtils$$.$clone$(D.$DvtBreadcrumbsDefaults$$.$VERSION_1$)
};
D.$DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($options$$247$$, $defaultSize$$2$$) {
  return window.Math.ceil($defaultSize$$2$$ * $options$$247$$.layout.gapRatio)
};
D.$DvtBreadcrumbsEventManager$$ = function $$DvtBreadcrumbsEventManager$$$($breadcrumbs$$, $context$$561$$, $callback$$145$$, $callbackObj$$96$$) {
  this.Init($context$$561$$, $callback$$145$$, $callbackObj$$96$$);
  this.$_breadcrumbs$ = $breadcrumbs$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsEventManager$$, D.$DvtEventManager$$, "DvtBreadcrumbsEventManager");
D.$DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($event$$711$$) {
  D.$DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $event$$711$$);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$711$$.target))
};
D.$DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($event$$712$$) {
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$712$$.target))
};
D.$JSCompiler_StaticMethods__processBreadcrumbs$$ = function $$JSCompiler_StaticMethods__processBreadcrumbs$$$($JSCompiler_StaticMethods__processBreadcrumbs$self$$, $obj$$334$$) {
  if($obj$$334$$ && $obj$$334$$ instanceof D.$DvtBreadcrumbsPeer$$ && $obj$$334$$.$isDrillable$()) {
    var $event$$713$$ = new D.$DvtBreadcrumbsDrillEvent$$($obj$$334$$.getId());
    $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$FireEvent$($event$$713$$, $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$_breadcrumbs$)
  }
};
D.$DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($event$$714$$) {
  var $eventConsumed$$4$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$ = $event$$714$$.keyCode;
  if(9 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$) {
    var $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$ = this.$_breadcrumbs$, $prevCrumbIdx$$inline_7970$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$.$_curCrumbIdx$, $JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$;
    $JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$ = $prevCrumbIdx$$inline_7970$$;
    var $bForward$$inline_11333$$ = !$event$$714$$.shiftKey;
    $JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$ = -1 == $JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$ ? $bForward$$inline_11333$$ ? 0 : $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$.$_data$.$items$.length - 2 : $bForward$$inline_11333$$ ? $JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$ == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$.$_data$.$items$.length - 2 ? -1 : ++$JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$ : 
    0 == $JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$ ? -1 : --$JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$.$_curCrumbIdx$ = $JSCompiler_inline_result$$9416_prevIndex$$inline_11332$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$.$_updateKeyboardFocusEffect$($prevCrumbIdx$$inline_7970$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$.$_curCrumbIdx$);
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$.$_curCrumbIdx$;
    -1 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$ ? $eventConsumed$$4$$ = D.$JSCompiler_alias_FALSE$$ : this.$UpdateActiveElement$((0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$))
  }else {
    13 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7968_curCrumbIdx_keyCode$$43$$ && (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, this.$_breadcrumbs$.$_curCrumbIdx$)))
  }
  $eventConsumed$$4$$ && (0,D.$DvtEventManager$consumeEvent$$)($event$$714$$);
  return $eventConsumed$$4$$
};
D.$DvtBreadcrumbsPeer$$ = function $$DvtBreadcrumbsPeer$$$($id$$260$$, $displayable$$76$$) {
  this.Init();
  this.$_id$ = $id$$260$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayable$ = $displayable$$76$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsPeer$$, D.$DvtSimpleObjPeer$$, "DvtBreadcrumbsPeer");
D.$DvtBreadcrumbsPeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$DvtBreadcrumbsRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtBreadcrumbsRenderer");
D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
D.$DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($breadcrumbs$$1$$, $container$$174$$, $width$$151$$) {
  for(var $context$$562$$ = $breadcrumbs$$1$$.$getCtx$(), $dataItems$$1$$ = ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ ? ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ : [], $options$$248$$ = $breadcrumbs$$1$$.$_options$, $eventManager$$43$$ = $breadcrumbs$$1$$.$getEventManager$(), $labels$$23$$ = [], $peers$$8$$ = [], $i$$773$$ = 0;$i$$773$$ < $dataItems$$1$$.length;$i$$773$$++) {
    var $dataItem$$40_peer$$27$$ = $dataItems$$1$$[$i$$773$$];
    if($dataItem$$40_peer$$27$$) {
      var $label$$74$$ = D.$DvtBreadcrumbsRenderer$$.$_createLabel$($context$$562$$, $dataItem$$40_peer$$27$$.label ? $dataItem$$40_peer$$27$$.label : "", $options$$248$$, $i$$773$$ < $dataItems$$1$$.length - 1);
      $labels$$23$$.push($label$$74$$);
      $dataItem$$40_peer$$27$$ = new D.$DvtBreadcrumbsPeer$$($dataItem$$40_peer$$27$$.id, $label$$74$$);
      $eventManager$$43$$.$associate$($label$$74$$, $dataItem$$40_peer$$27$$);
      $peers$$8$$.push($dataItem$$40_peer$$27$$);
      $i$$773$$ < $dataItems$$1$$.length - 1 && $dataItem$$40_peer$$27$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  $breadcrumbs$$1$$.$_crumbs$ = $labels$$23$$;
  (0,D.$DvtAgent$isRightToLeft$$)($context$$562$$) ? D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($breadcrumbs$$1$$, $container$$174$$, $width$$151$$, $labels$$23$$, $peers$$8$$) : D.$DvtBreadcrumbsRenderer$$.$_positionLabels$($breadcrumbs$$1$$, $container$$174$$, $width$$151$$, $labels$$23$$, $peers$$8$$)
};
D.$DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($context$$563_state$$95$$, $dvtText_text$$104$$, $cssStyle$$37$$) {
  $dvtText_text$$104$$ = new D.$DvtOutputText$$($context$$563_state$$95$$, $dvtText_text$$104$$, 0, 0);
  $dvtText_text$$104$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $dvtText_text$$104$$.$setCSSStyle$($cssStyle$$37$$);
  var $padTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-top"), $padRight$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-right"), $padBottom$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-bottom"), $padLeft$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-left"), $labelDims$$10$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$563_state$$95$$, $dvtText_text$$104$$);
  $context$$563_state$$95$$ = new D.$DvtRect$$($context$$563_state$$95$$, 0, 0, $labelDims$$10$$.$w$ + $padLeft$$1$$ + $padRight$$1$$, $labelDims$$10$$.$h$ + $padTop$$1$$ + $padBottom$$1$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$563_state$$95$$);
  $context$$563_state$$95$$.$setCSSStyle$($cssStyle$$37$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dvtText_text$$104$$, $padLeft$$1$$, $padTop$$1$$);
  $context$$563_state$$95$$.$addChild$($dvtText_text$$104$$);
  return $context$$563_state$$95$$
};
D.$DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($context$$564_label$$75$$, $textStr$$11$$, $dwn$$16_dwnCss_options$$249$$, $bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$) {
  if($bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$ && ($dwn$$16_dwnCss_options$$249$$.$labelStyleOver$ || $dwn$$16_dwnCss_options$$249$$.$labelStyleDown$)) {
    var $ena$$20_enaCss$$ = new D.$DvtCSSStyle$$($dwn$$16_dwnCss_options$$249$$.$labelStyle$);
    $bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$ = new D.$DvtCSSStyle$$($dwn$$16_dwnCss_options$$249$$.$labelStyleOver$);
    $dwn$$16_dwnCss_options$$249$$ = new D.$DvtCSSStyle$$($dwn$$16_dwnCss_options$$249$$.$labelStyleDown$);
    $ena$$20_enaCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$564_label$$75$$, $textStr$$11$$, $ena$$20_enaCss$$);
    $bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$564_label$$75$$, $textStr$$11$$, $bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$);
    $dwn$$16_dwnCss_options$$249$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$564_label$$75$$, $textStr$$11$$, $dwn$$16_dwnCss_options$$249$$);
    $context$$564_label$$75$$ = new D.$DvtButton$$($context$$564_label$$75$$, $ena$$20_enaCss$$, $bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$, $dwn$$16_dwnCss_options$$249$$);
    $context$$564_label$$75$$.$setAriaRole$("link");
    $context$$564_label$$75$$.$setAriaProperty$("label", $textStr$$11$$)
  }else {
    $bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$ = new D.$DvtCSSStyle$$($bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$ ? $dwn$$16_dwnCss_options$$249$$.$labelStyle$ : $dwn$$16_dwnCss_options$$249$$.$disabledLabelStyle$), (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$, "padding-left") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$, "padding-right") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$, 
    "padding-top") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$, "padding-bottom") ? $context$$564_label$$75$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$564_label$$75$$, $textStr$$11$$, $bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$) : ($context$$564_label$$75$$ = new D.$DvtOutputText$$($context$$564_label$$75$$, $textStr$$11$$, 0, 0), $context$$564_label$$75$$.$setCSSStyle$($bEnabled$$6_cssStyle$$38_ovr$$16_ovrCss$$))
  }
  return $context$$564_label$$75$$
};
D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($label$$76_text$$105$$) {
  if($label$$76_text$$105$$ instanceof D.$DvtButton$$) {
    return $label$$76_text$$105$$ = $label$$76_text$$105$$.$upState$.$getChildAt$(0), $label$$76_text$$105$$.$getTextString$()
  }
  $label$$76_text$$105$$ instanceof D.$DvtRect$$ && ($label$$76_text$$105$$ = $label$$76_text$$105$$.$getChildAt$(0));
  return $label$$76_text$$105$$.$getTextString$()
};
D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($label$$77$$, $maxWidth$$25$$) {
  if($label$$77$$ instanceof D.$DvtButton$$) {
    var $text$$106$$ = $label$$77$$.$upState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$106$$, window.Math.max($maxWidth$$25$$ - $text$$106$$.$getTranslateX$(), 0), window.Infinity, $text$$106$$.getParent());
    $text$$106$$ = $label$$77$$.$overState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$106$$, window.Math.max($maxWidth$$25$$ - $text$$106$$.$getTranslateX$(), 0), window.Infinity, $text$$106$$.getParent());
    $text$$106$$ = $label$$77$$.$downState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$106$$, window.Math.max($maxWidth$$25$$ - $text$$106$$.$getTranslateX$(), 0), window.Infinity, $text$$106$$.getParent())
  }else {
    $label$$77$$ instanceof D.$DvtRect$$ ? ($text$$106$$ = $label$$77$$.$getChildAt$(0), D.$DvtTextUtils$$.$fitText$($text$$106$$, window.Math.max($maxWidth$$25$$ - $text$$106$$.$getTranslateX$(), 0), window.Infinity, $text$$106$$.getParent())) : D.$DvtTextUtils$$.$fitText$($label$$77$$, $maxWidth$$25$$, window.Infinity, $label$$77$$.getParent())
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($breadcrumbs$$2_labelString$$7$$, $container$$175$$, $availWidth$$15$$, $labels$$24$$, $peers$$9$$) {
  for(var $options$$250$$ = $breadcrumbs$$2_labelString$$7$$.$_options$, $eventManager$$44$$ = $breadcrumbs$$2_labelString$$7$$.$getEventManager$(), $arDims$$ = [], $maxHeight$$14$$ = 0, $i$$774$$ = 0;$i$$774$$ < $labels$$24$$.length;$i$$774$$++) {
    $container$$175$$.$addChild$($labels$$24$$[$i$$774$$]);
    var $dims$$62_separator$$1$$ = $labels$$24$$[$i$$774$$].$getDimensions$();
    $arDims$$[$i$$774$$] = $dims$$62_separator$$1$$;
    $maxHeight$$14$$ = window.Math.max($dims$$62_separator$$1$$.$h$, $maxHeight$$14$$);
    $container$$175$$.removeChild($labels$$24$$[$i$$774$$])
  }
  for(var $x$$256$$ = 0, $i$$774$$ = 0;$i$$774$$ < $labels$$24$$.length;$i$$774$$++) {
    $container$$175$$.$addChild$($labels$$24$$[$i$$774$$]);
    $dims$$62_separator$$1$$ = $arDims$$[$i$$774$$];
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($labels$$24$$[$i$$774$$], $x$$256$$, 0.5 * ($maxHeight$$14$$ - $dims$$62_separator$$1$$.$h$));
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$47_sepDims_separatorWidth$$ = new D.$DvtRect$$($container$$175$$.$getCtx$(), -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$62_separator$$1$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$62_separator$$1$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$47_sepDims_separatorWidth$$);
      $labels$$24$$[$i$$774$$].$addChild$($rect$$47_sepDims_separatorWidth$$);
      $i$$774$$ < $peers$$9$$.length && $eventManager$$44$$.$associate$($rect$$47_sepDims_separatorWidth$$, $peers$$9$$[$i$$774$$])
    }
    if($x$$256$$ + $dims$$62_separator$$1$$.$w$ > $availWidth$$15$$) {
      $breadcrumbs$$2_labelString$$7$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$24$$[$i$$774$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$24$$[$i$$774$$], $availWidth$$15$$ - $x$$256$$);
      $i$$774$$ < $peers$$9$$.length ? $peers$$9$$[$i$$774$$].$setTooltip$($breadcrumbs$$2_labelString$$7$$) : $eventManager$$44$$.$associate$($labels$$24$$[$i$$774$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$2_labelString$$7$$));
      break
    }else {
      $x$$256$$ += $dims$$62_separator$$1$$.$w$ + $options$$250$$.$__labelGap$
    }
    if($i$$774$$ < $labels$$24$$.length - 1) {
      $dims$$62_separator$$1$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$2_labelString$$7$$);
      $container$$175$$.$addChild$($dims$$62_separator$$1$$);
      $rect$$47_sepDims_separatorWidth$$ = $dims$$62_separator$$1$$.$getDimensions$();
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dims$$62_separator$$1$$, $x$$256$$, 0.5 * ($maxHeight$$14$$ - $rect$$47_sepDims_separatorWidth$$.$h$));
      $rect$$47_sepDims_separatorWidth$$ = $rect$$47_sepDims_separatorWidth$$.$w$;
      if($x$$256$$ + $rect$$47_sepDims_separatorWidth$$ > $availWidth$$15$$) {
        $container$$175$$.removeChild($dims$$62_separator$$1$$);
        break
      }
      $x$$256$$ += $rect$$47_sepDims_separatorWidth$$ + $options$$250$$.$__labelGap$
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($breadcrumbs$$3_labelString$$8$$, $container$$176$$, $availWidth$$16_x$$257$$, $labels$$25$$, $peers$$10$$) {
  for(var $options$$251$$ = $breadcrumbs$$3_labelString$$8$$.$_options$, $eventManager$$45$$ = $breadcrumbs$$3_labelString$$8$$.$getEventManager$(), $i$$775$$ = 0;$i$$775$$ < $labels$$25$$.length;$i$$775$$++) {
    $container$$176$$.$addChild$($labels$$25$$[$i$$775$$]);
    var $dims$$63_separator$$2$$ = $labels$$25$$[$i$$775$$].$getDimensions$();
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$48_separatorWidth$$1$$ = new D.$DvtRect$$($container$$176$$.$getCtx$(), -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$63_separator$$2$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$63_separator$$2$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$48_separatorWidth$$1$$);
      $labels$$25$$[$i$$775$$].$addChild$($rect$$48_separatorWidth$$1$$);
      $i$$775$$ < $peers$$10$$.length && $eventManager$$45$$.$associate$($rect$$48_separatorWidth$$1$$, $peers$$10$$[$i$$775$$])
    }
    if(0 > $availWidth$$16_x$$257$$ - $dims$$63_separator$$2$$.$w$) {
      $breadcrumbs$$3_labelString$$8$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$25$$[$i$$775$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$25$$[$i$$775$$], $availWidth$$16_x$$257$$);
      $labels$$25$$[$i$$775$$].$setTranslateX$(0);
      $i$$775$$ < $peers$$10$$.length ? $peers$$10$$[$i$$775$$].$setTooltip$($breadcrumbs$$3_labelString$$8$$) : $eventManager$$45$$.$associate$($labels$$25$$[$i$$775$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$3_labelString$$8$$));
      break
    }else {
      $labels$$25$$[$i$$775$$].$setTranslateX$($availWidth$$16_x$$257$$ - $dims$$63_separator$$2$$.$w$), $availWidth$$16_x$$257$$ -= $dims$$63_separator$$2$$.$w$ + $options$$251$$.$__labelGap$
    }
    if($i$$775$$ < $labels$$25$$.length - 1) {
      if($dims$$63_separator$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$3_labelString$$8$$), $container$$176$$.$addChild$($dims$$63_separator$$2$$), $rect$$48_separatorWidth$$1$$ = $dims$$63_separator$$2$$.$getDimensions$().$w$, 0 > $availWidth$$16_x$$257$$ - $rect$$48_separatorWidth$$1$$) {
        $container$$176$$.removeChild($dims$$63_separator$$2$$);
        break
      }else {
        $dims$$63_separator$$2$$.$setTranslateX$($availWidth$$16_x$$257$$ - $rect$$48_separatorWidth$$1$$), $availWidth$$16_x$$257$$ -= $rect$$48_separatorWidth$$1$$ + $options$$251$$.$__labelGap$
      }
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($breadcrumbs$$4_label$$78$$) {
  var $options$$252$$ = $breadcrumbs$$4_label$$78$$.$_options$;
  $breadcrumbs$$4_label$$78$$ = new D.$DvtOutputText$$($breadcrumbs$$4_label$$78$$.$getCtx$(), $options$$252$$.$__labelSeparator$, 0, 0);
  $breadcrumbs$$4_label$$78$$.$setCSSStyle$(new D.$DvtCSSStyle$$($options$$252$$.$labelStyle$));
  return $breadcrumbs$$4_label$$78$$
};
D.$DvtPanelDrawerEvent$$ = function $$DvtPanelDrawerEvent$$$($subtype$$13$$, $activePanel$$) {
  this.Init("dvtPanelDrawerEvent");
  this.$_subtype$ = $subtype$$13$$;
  this.$_activePanel$ = $activePanel$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanelDrawerEvent");
D.$DvtPanelDrawerEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanelDrawer$$ = function $$DvtPanelDrawer$$$($context$$565$$, $callback$$146$$, $callbackObj$$97$$, $sid$$1$$) {
  this.Init($context$$565$$, $callback$$146$$, $callbackObj$$97$$, $sid$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawer$$, D.$DvtContainer$$, "DvtPanelDrawer");
D.$DvtPanelDrawer$$.prototype.Init = function $$DvtPanelDrawer$$$$Init$($context$$566$$, $callback$$147$$, $callbackObj$$98$$, $sid$$2$$) {
  D.$DvtPanelDrawer$$.$superclass$.Init.call(this, $context$$566$$, D.$JSCompiler_alias_NULL$$, "panelDrawer" + $sid$$2$$);
  this.$_sid$ = $sid$$2$$;
  this.$_eventManager$ = new D.$DvtPanelDrawerEventManager$$($context$$566$$, $callback$$147$$, $callbackObj$$98$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanelDrawer$$);
  this.$_eventManager$.$associate$(this, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtPanelDrawerKeyboardHandler$$(this.$_eventManager$, this));
  this.$_callback$ = $callback$$147$$;
  this.$_callbackObj$ = $callbackObj$$98$$;
  this.$_panels$ = {};
  this.$_panelOrder$ = [];
  this.$_maxHeight$ = this.$_maxWidth$ = window.Number.MAX_VALUE;
  this.$_minWidth$ = 5;
  this.$_minHeight$ = 0;
  this.$_displayedPanelId$;
  this.$_oldDisplayedPanelId$;
  this.$_bTransition$ = this.$_bDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_contentPane$;
  this.$_activeContent$;
  this.$_expandedContent$;
  this.$_contentClipPath$;
  this.$_expandedBorder$;
  this.$_expandedBorderResizable$;
  this.$_tabs$ = {};
  this.$_discloseDirection$ = "left";
  this.$_dockSide$ = "top";
  this.$_isFixed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  $callbackObj$$98$$ && (this.$_styleMap$ = $callbackObj$$98$$.$getSubcomponentStyles$());
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", "#bbc7d0");
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 2));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", "#ffffff");
  this.$_bgInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-color-inactive", "#dee4e7");
  this.$_borderInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-border-color-inactive", "#c1cede");
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this);
  this.$_contentPadding$ = 10
};
D.$JSCompiler_StaticMethods_addPanel$$ = function $$JSCompiler_StaticMethods_addPanel$$$($JSCompiler_StaticMethods_addPanel$self$$, $panel$$4$$, $upState$$19$$, $overState$$16$$, $downState$$16$$, $tooltip$$54$$, $id$$261$$) {
  $JSCompiler_StaticMethods_addPanel$self$$.$_panels$[$id$$261$$] = {panel:$panel$$4$$, iconUp:$upState$$19$$, iconOver:$overState$$16$$, iconDown:$downState$$16$$, tooltip:$tooltip$$54$$};
  $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.push($id$$261$$);
  $JSCompiler_StaticMethods_addPanel$self$$.$_minHeight$ = 15 + 42 * $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.length
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$JSCompiler_prototypeAlias$$.$getMaxContentWidth$ = function $$JSCompiler_prototypeAlias$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 2 * this.$_contentPadding$
};
D.$JSCompiler_prototypeAlias$$.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$JSCompiler_prototypeAlias$$.$getMaxContentHeight$ = function $$JSCompiler_prototypeAlias$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 2 * this.$_contentPadding$
};
D.$JSCompiler_prototypeAlias$$.$GetIcon$ = function $$JSCompiler_prototypeAlias$$$$GetIcon$$($id$$263$$) {
  return this.$_panels$[$id$$263$$].icon
};
D.$JSCompiler_StaticMethods_setDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_setDisplayedPanelId$$$($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$266$$, $bImmediate$$20$$, $onEnd$$8$$) {
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$ = $id$$266$$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$isDisclosed$() && ($JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$266$$, $bImmediate$$20$$, $onEnd$$8$$));
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_getDisplayedPanelId$$$($JSCompiler_StaticMethods_getDisplayedPanelId$self$$) {
  var $panelId$$1$$ = $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_displayedPanelId$;
  return!$panelId$$1$$ && 0 < $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$.length ? $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$[0] : $panelId$$1$$
};
D.$DvtPanelDrawer$$.prototype.$setDisclosed$ = function $$DvtPanelDrawer$$$$$setDisclosed$$($bDisclosed$$11_destX$$inline_7981$$, $anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, $onEnd$$9$$) {
  if(!this.$_bTransition$) {
    var $oldDisclosed$$1$$ = this.$_bDisclosed$;
    this.$_bDisclosed$ = $bDisclosed$$11_destX$$inline_7981$$;
    if($oldDisclosed$$1$$ != $bDisclosed$$11_destX$$inline_7981$$) {
      if(this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$, $bDisclosed$$11_destX$$inline_7981$$) {
        (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $bDisclosed$$11_destX$$inline_7981$$ = -(0.8 * this.$_expandedContent$.getWidth());
        "right" == this.$_discloseDirection$ && ($bDisclosed$$11_destX$$inline_7981$$ = -$bDisclosed$$11_destX$$inline_7981$$, this.$_expandedContent$.$setX$((0.8 - 1) * this.$_expandedContent$.getWidth()));
        if($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$) {
          this.$_contentPane$.$setTranslateX$($bDisclosed$$11_destX$$inline_7981$$), $onEnd$$9$$ && $onEnd$$9$$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          if($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25), $anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$.$setEasing$(D.$DvtEasing$backOut$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $bDisclosed$$11_destX$$inline_7981$$), $onEnd$$9$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, 
          $onEnd$$9$$), $anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$) {
            var $thisRef$$inline_7983$$ = this;
            (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, function() {
              $thisRef$$inline_7983$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
            });
            $anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$.play()
          }
        }
        this.$ChangeTabsState$()
      }else {
        if($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$) {
          this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $onEnd$$9$$ && $onEnd$$9$$(), this.$ChangeTabsState$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          $anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25);
          $anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$.$setEasing$(D.$DvtEasing$backIn$$);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, this.$RemoveExpandedContent$, this);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, this.$ChangeTabsState$, this);
          $onEnd$$9$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, $onEnd$$9$$);
          var $thisRef$$inline_7989$$ = this;
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$, function() {
            $thisRef$$inline_7989$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
          });
          $anim$$inline_7982_anim$$inline_7988_bImmediate$$21$$.play()
        }
      }
    }
  }
};
D.$DvtPanelDrawer$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtPanelDrawer$$.prototype.$renderComponent$ = function $$DvtPanelDrawer$$$$$renderComponent$$() {
  this.$_contentPane$ || (this.$_contentPane$ = new D.$DvtContainer$$(this.$getCtx$(), "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new D.$DvtContainer$$(this.$getCtx$(), "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
  if(!this.$_isFixed$) {
    var $currX$$inline_7992$$ = -42;
    "right" == this.$_discloseDirection$ && ($currX$$inline_7992$$ = 0);
    var $currY$$inline_7993$$ = 15;
    if("top" == this.$_dockSide$) {
      for(var $i$$inline_7994$$ = 0;$i$$inline_7994$$ < this.$_panelOrder$.length;$i$$inline_7994$$++) {
        var $panelId$$inline_7995_tab$$inline_7996$$ = this.$_panelOrder$[$i$$inline_7994$$], $panelId$$inline_7995_tab$$inline_7996$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_7995_tab$$inline_7996$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_7995_tab$$inline_7996$$, $currX$$inline_7992$$, $currY$$inline_7993$$);
        $currY$$inline_7993$$ += 42
      }
    }else {
      if("bottom" == this.$_dockSide$) {
        $currY$$inline_7993$$ = -57;
        for($i$$inline_7994$$ = this.$_panelOrder$.length - 1;0 <= $i$$inline_7994$$;$i$$inline_7994$$--) {
          $panelId$$inline_7995_tab$$inline_7996$$ = this.$_panelOrder$[$i$$inline_7994$$], $panelId$$inline_7995_tab$$inline_7996$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_7995_tab$$inline_7996$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_7995_tab$$inline_7996$$, $currX$$inline_7992$$, $currY$$inline_7993$$), $currY$$inline_7993$$ -= 42
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_RenderTab$$ = function $$JSCompiler_StaticMethods_RenderTab$$$($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$) {
  var $closedPath_downState$$17$$, $arPoints$$inline_7999_tab$$1$$;
  switch($JSCompiler_StaticMethods_RenderTab$self$$.$_discloseDirection$) {
    case "right":
      $arPoints$$inline_7999_tab$$1$$ = ["M", 0, 0, "L", 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 1, 42, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 42, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 1, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 0, 42];
      break;
    default:
      $arPoints$$inline_7999_tab$$1$$ = ["M", 42, 0, "L", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 0, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 42, 42]
  }
  $closedPath_downState$$17$$ = $arPoints$$inline_7999_tab$$1$$;
  $arPoints$$inline_7999_tab$$1$$ = new D.$DvtPanelDrawerTab$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$, $panelId$$3$$, $JSCompiler_StaticMethods_RenderTab$self$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arPoints$$inline_7999_tab$$1$$);
  $arPoints$$inline_7999_tab$$1$$.setCursor("pointer");
  $JSCompiler_StaticMethods_RenderTab$self$$.$_contentPane$.$addChildAt$($arPoints$$inline_7999_tab$$1$$, 0);
  $arPoints$$inline_7999_tab$$1$$.$setSolidFill$($JSCompiler_StaticMethods_RenderTab$self$$.$_bgInactiveColor$, $JSCompiler_StaticMethods_RenderTab$self$$.$_bgAlpha$);
  $arPoints$$inline_7999_tab$$1$$.$setSolidStroke$($JSCompiler_StaticMethods_RenderTab$self$$.$_borderInactiveColor$, 1, 1);
  var $panelObj$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$], $icon$$48_upState$$20$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($icon$$48_upState$$20$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconUp, 9, 9);
  $icon$$48_upState$$20$$.$addChild$($panelObj$$.iconUp);
  var $overState$$17$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconOver, 9, 9);
  $overState$$17$$.$addChild$($panelObj$$.iconOver);
  $closedPath_downState$$17$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconDown, 9, 9);
  $closedPath_downState$$17$$.$addChild$($panelObj$$.iconDown);
  $icon$$48_upState$$20$$ = new D.$DvtButton$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $icon$$48_upState$$20$$, $overState$$17$$, $closedPath_downState$$17$$);
  $icon$$48_upState$$20$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $panelObj$$.icon = $icon$$48_upState$$20$$;
  $arPoints$$inline_7999_tab$$1$$.$addChild$($icon$$48_upState$$20$$);
  $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$3$$] = $arPoints$$inline_7999_tab$$1$$;
  $JSCompiler_StaticMethods_RenderTab$self$$.$_eventManager$.$associate$($arPoints$$inline_7999_tab$$1$$, {$HandleClick$:function() {
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)($JSCompiler_StaticMethods_RenderTab$self$$);
    $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$ = $panelId$$3$$;
    var $closedPath_downState$$17$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$3$$].$isShowingKeyboardFocusEffect$(), $arPoints$$inline_7999_tab$$1$$ = function $$arPoints$$inline_7999_tab$$1$$$() {
      var $panelId$$3$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$().$getTooltipManager$();
      $panelId$$3$$ && $panelId$$3$$.$hideTooltip$()
    };
    $JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ == $panelId$$3$$ ? $JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, $arPoints$$inline_7999_tab$$1$$) : ($JSCompiler_StaticMethods_RenderTab$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$, D.$JSCompiler_alias_FALSE$$)) : 
    ($JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $arPoints$$inline_7999_tab$$1$$), $JSCompiler_StaticMethods_RenderTab$self$$.$ApplyAlphasRollover$());
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_RenderTab$self$$.$FireListener$(new D.$DvtPanelDrawerEvent$$($JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? "show" : "hide", $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$));
    $closedPath_downState$$17$$ && (0,D.$JSCompiler_StaticMethods_setCurrentKeyboardFocus$$)($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderTab$self$$)
  }, $getTooltip$:function() {
    return $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip
  }});
  $arPoints$$inline_7999_tab$$1$$.$addAccessibilityAttributes$();
  return $arPoints$$inline_7999_tab$$1$$
};
D.$JSCompiler_StaticMethods_ChangePanels$$ = function $$JSCompiler_StaticMethods_ChangePanels$$$($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $bImmediate$$22_oldPanel$$1$$, $onEnd$$10$$) {
  var $anim$$30$$ = D.$JSCompiler_alias_NULL$$;
  $bImmediate$$22_oldPanel$$1$$ || ($anim$$30$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_ChangePanels$self$$.$getCtx$(), 0.25));
  $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$ && ($bImmediate$$22_oldPanel$$1$$ = $JSCompiler_StaticMethods_ChangePanels$self$$.$_panels$[$JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$].panel) && $JSCompiler_StaticMethods_ChangePanels$self$$.$_expandedContentPanel$.removeChild($bImmediate$$22_oldPanel$$1$$);
  (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $anim$$30$$);
  $anim$$30$$ ? ($JSCompiler_StaticMethods_ChangePanels$self$$.$ApplyAlphasRollover$(), $onEnd$$10$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$30$$, $onEnd$$10$$), $anim$$30$$.play()) : $onEnd$$10$$ && $onEnd$$10$$()
};
D.$DvtPanelDrawer$$.prototype.$RemoveExpandedContent$ = function $$DvtPanelDrawer$$$$$RemoveExpandedContent$$() {
  this.$_expandedContent$ && (this.$_contentClipPath$ = D.$JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), (0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_activeContent$), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_DisplayPanel$$ = function $$JSCompiler_StaticMethods_DisplayPanel$$$($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$267$$, $anim$$33$$) {
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ = new D.$DvtRect$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$getCtx$(), 0, 0, 1, 1, "pdcp_expandedContent"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_activeContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$setSolidFill$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgColor$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgAlpha$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$));
  var $ecw$$inline_8012_panel$$5$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_panels$[$id$$267$$].panel;
  if($ecw$$inline_8012_panel$$5$$) {
    $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$addChild$($ecw$$inline_8012_panel$$5$$);
    if($JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$) {
      var $ech$$inline_8013_oldPanel$$2$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_panels$[$JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$].panel;
      $ech$$inline_8013_oldPanel$$2$$ && $ech$$inline_8013_oldPanel$$2$$.$removeEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
    }
    $ecw$$inline_8012_panel$$5$$.$addEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
  }
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setFill$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 
  1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$));
  var $dims$$inline_8016_panel$$inline_8011$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_panels$[$id$$267$$].panel, $ecw$$inline_8012_panel$$5$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $ech$$inline_8013_oldPanel$$2$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $xx$$inline_8014$$ = 0, $yy$$inline_8015$$ = 0;
  $dims$$inline_8016_panel$$inline_8011$$ && ($dims$$inline_8016_panel$$inline_8011$$ = $dims$$inline_8016_panel$$inline_8011$$.$getDimensionsWithStroke$(), $ecw$$inline_8012_panel$$5$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_8016_panel$$inline_8011$$.$w$), $ech$$inline_8013_oldPanel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_8016_panel$$inline_8011$$.$h$), 
  $xx$$inline_8014$$ = $dims$$inline_8016_panel$$inline_8011$$.x, $yy$$inline_8015$$ = $dims$$inline_8016_panel$$inline_8011$$.y);
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$267$$, $anim$$33$$, $ecw$$inline_8012_panel$$5$$, $ech$$inline_8013_oldPanel$$2$$, $xx$$inline_8014$$, $yy$$inline_8015$$)
};
D.$DvtPanelDrawer$$.prototype.$HandlePanelResize$ = function $$DvtPanelDrawer$$$$$HandlePanelResize$$($event$$716_yy$$61$$) {
  var $anim$$34$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25), $ecw_resizeWidth$$1$$ = $event$$716_yy$$61$$.getWidth(), $ech_resizeHeight$$1$$ = $event$$716_yy$$61$$.getHeight(), $ecw_resizeWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)(this, $ecw_resizeWidth$$1$$), $ech_resizeHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)(this, $ech_resizeHeight$$1$$), $xx$$61$$ = $event$$716_yy$$61$$.$getX$() ? $event$$716_yy$$61$$.$getX$() : 0;
  $event$$716_yy$$61$$ = $event$$716_yy$$61$$.$getY$() ? $event$$716_yy$$61$$.$getY$() : 0;
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $anim$$34$$, $ecw_resizeWidth$$1$$, $ech_resizeHeight$$1$$, $xx$$61$$, $event$$716_yy$$61$$);
  $anim$$34$$.play()
};
D.$JSCompiler_StaticMethods__refreshPanelSize$$ = function $$JSCompiler_StaticMethods__refreshPanelSize$$$($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$269$$, $anim$$36$$, $ecw$$2_firstTab_lastTab$$, $ech$$2$$, $clipRect_tab$$2_xx$$63$$, $expandedContentWidth_yy$$63$$) {
  var $panel$$7$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panels$[$edgeX_id$$269$$].panel;
  $anim$$36$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $panel$$7$$, $panel$$7$$.$getTranslateX$, $panel$$7$$.$setTranslateX$, -$clipRect_tab$$2_xx$$63$$) : $panel$$7$$.$setTranslateX$(-$clipRect_tab$$2_xx$$63$$);
  $anim$$36$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $panel$$7$$, $panel$$7$$.$getTranslateY$, $panel$$7$$.$setTranslateY$, -$expandedContentWidth_yy$$63$$) : $panel$$7$$.$setTranslateY$(-$expandedContentWidth_yy$$63$$);
  $clipRect_tab$$2_xx$$63$$ = new D.$DvtRectangle$$($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ecw$$2_firstTab_lastTab$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ech$$2$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$);
  $expandedContentWidth_yy$$63$$ = 1.25 * $ecw$$2_firstTab_lastTab$$;
  $anim$$36$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getWidth, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$, $expandedContentWidth_yy$$63$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getHeight, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeRectangle", $JSCompiler_StaticMethods__refreshPanelSize$self$$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_getContentClipPath$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$, $clipRect_tab$$2_xx$$63$$), "left" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$) : "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$, 
  $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateY$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$, -$ech$$2$$))) : ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$($expandedContentWidth_yy$$63$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$($ech$$2$$), "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && 
  ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$(-$ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$($ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$($ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$(-$ech$$2$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$($ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$($ech$$2$$)), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect_tab$$2_xx$$63$$));
  $clipRect_tab$$2_xx$$63$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$edgeX_id$$269$$];
  var $borderPath$$;
  $edgeX_id$$269$$ = $ecw$$2_firstTab_lastTab$$;
  "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($edgeX_id$$269$$ = -$ecw$$2_firstTab_lastTab$$);
  "top" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ ? $clipRect_tab$$2_xx$$63$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$(), "M", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$() + 42], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$.length - 1]], $borderPath$$.push("L", 
  0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42, "L", 0, $ech$$2$$, "L", 1.25 * $edgeX_id$$269$$, $ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, $ech$$2$$, "L", $edgeX_id$$269$$, $ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)) : "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && 
  ($clipRect_tab$$2_xx$$63$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$() + 42, "M", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$()], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[0]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$()), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), 
  $edgeX_id$$269$$ *= 1.25, $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$(), "L", 0, -$ech$$2$$, "L", $edgeX_id$$269$$, -$ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, -$ech$$2$$, "L", $edgeX_id$$269$$, -$ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)));
  $anim$$36$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typePath", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getCommands$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$, $borderPath$$) : $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$($borderPath$$)
};
D.$DvtPanelDrawer$$.prototype.$_setContentClipPath$ = function $$DvtPanelDrawer$$$$$_setContentClipPath$$($rect$$49$$) {
  if(this.$_expandedContentPanel$ && $rect$$49$$) {
    var $clipPath$$15$$ = new D.$DvtClipPath$$("pdcp" + this.$_sid$);
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$15$$, $rect$$49$$.x, $rect$$49$$.y, $rect$$49$$.$w$, $rect$$49$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_expandedContentPanel$, $clipPath$$15$$)
  }
  this.$_contentClipPath$ = $rect$$49$$
};
D.$DvtPanelDrawer$$.prototype.$_getContentClipPath$ = (0,D.$JSCompiler_get$$)("$_contentClipPath$");
D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$ = function $$JSCompiler_StaticMethods_GetExpandedContentWidth$$$($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$, $preferredWidth$$) {
  var $ww$$120$$ = $preferredWidth$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) && $ww$$120$$ < $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) {
    $ww$$120$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$
  }
  $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && $ww$$120$$ > $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && ($ww$$120$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$);
  return $ww$$120$$
};
D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$ = function $$JSCompiler_StaticMethods_GetExpandedContentHeight$$$($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$, $preferredHeight$$) {
  var $hh$$104$$ = $preferredHeight$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) && $hh$$104$$ < $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) {
    $hh$$104$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$
  }
  $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && $hh$$104$$ > $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && ($hh$$104$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$);
  return $hh$$104$$
};
D.$JSCompiler_StaticMethods_ApplyFillAlpha$$ = function $$JSCompiler_StaticMethods_ApplyFillAlpha$$$($JSCompiler_StaticMethods_ApplyFillAlpha$self$$, $alpha$$49$$) {
  if($JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$) {
    var $fill$$72$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$getFill$().$clone$();
    $fill$$72$$.$setAlpha$($alpha$$49$$);
    $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$setFill$($fill$$72$$)
  }
  for(var $panelId$$6$$ in $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$) {
    var $tab$$3$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$[$panelId$$6$$];
    $tab$$3$$ && ($fill$$72$$ = $tab$$3$$.$getFill$().$clone$(), $fill$$72$$.$setAlpha$($alpha$$49$$), $tab$$3$$.$setFill$($fill$$72$$))
  }
};
D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$ = function $$JSCompiler_StaticMethods_ApplyStrokeAlpha$$$($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$) {
  if($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$) {
    var $stroke$$106$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$getStroke$().$clone$();
    $stroke$$106$$.$setAlpha$(1);
    $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$setStroke$($stroke$$106$$)
  }
  $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$ && ($stroke$$106$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$getStroke$().$clone$(), $stroke$$106$$.$setAlpha$(1), $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$setStroke$($stroke$$106$$));
  for(var $panelId$$7$$ in $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$) {
    var $tab$$4$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$[$panelId$$7$$];
    $tab$$4$$ && ($stroke$$106$$ = $tab$$4$$.$getStroke$().$clone$(), $stroke$$106$$.$setAlpha$(1), $tab$$4$$.$setStroke$($stroke$$106$$))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$deEmphasizeStart$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeStart$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$8$$ in this.$_tabs$) {
    var $icon$$49$$ = this.$GetIcon$($panelId$$8$$);
    $icon$$49$$ && $icon$$49$$.$setAlpha$(1)
  }
};
D.$JSCompiler_prototypeAlias$$.$deEmphasizeEnd$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeEnd$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$9$$ in this.$_tabs$) {
    var $icon$$50$$ = this.$GetIcon$($panelId$$9$$);
    $icon$$50$$ && $icon$$50$$.$setAlpha$(1)
  }
  this.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOver$$() {
  this.$ApplyAlphasRollover$()
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOut$$() {
  this.$_bFocus$ || this.$ApplyAlphasRollout$()
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollover$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollover$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1)
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollout$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollout$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$)
};
D.$JSCompiler_prototypeAlias$$.$ChangeTabsState$ = function $$JSCompiler_prototypeAlias$$$$ChangeTabsState$$() {
  for(var $panelId$$10$$ in this.$_tabs$) {
    var $tab$$5$$ = this.$_tabs$[$panelId$$10$$];
    $tab$$5$$ && ($panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this) && this.$isDisclosed$() ? ($tab$$5$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderColor$, 1), $tab$$5$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$)) : ($tab$$5$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderInactiveColor$, 1), $tab$$5$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$)));
    var $bActivePanel$$ = this.$isDisclosed$() && $panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $icon$$51$$ = this.$GetIcon$($panelId$$10$$);
    $icon$$51$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($icon$$51$$, $bActivePanel$$);
    $bActivePanel$$ ? this.$_activeContent$.$addChild$($tab$$5$$) : this.$_contentPane$.$addChildAt$($tab$$5$$, 0)
  }
};
D.$JSCompiler_StaticMethods_setMaxContainerHeight$$ = function $$JSCompiler_StaticMethods_setMaxContainerHeight$$$($JSCompiler_StaticMethods_setMaxContainerHeight$self$$, $height$$138$$) {
  if(!$JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ || $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ < $height$$138$$) {
    $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ = $height$$138$$
  }
};
D.$DvtPanelDrawer$$.prototype.$getDimensions$ = function $$DvtPanelDrawer$$$$$getDimensions$$($dim$$80_targetCoordinateSpace$$56$$) {
  $dim$$80_targetCoordinateSpace$$56$$ = D.$DvtPanelDrawer$$.$superclass$.$getDimensions$.call(this, $dim$$80_targetCoordinateSpace$$56$$);
  $dim$$80_targetCoordinateSpace$$56$$.$w$ /= 1.25;
  return $dim$$80_targetCoordinateSpace$$56$$
};
D.$DvtPanelDrawer$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtPanelDrawerTab$$ = function $$DvtPanelDrawerTab$$$($context$$568$$, $cmds$$28$$, $id$$270$$, $panelDrawer$$7$$) {
  this.Init($context$$568$$, $cmds$$28$$, $id$$270$$, $panelDrawer$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerTab$$, D.$DvtPath$$, "DvtPanelDrawerTab");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerTab$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$569$$, $cmds$$29$$, $id$$271$$, $panelDrawer$$8$$) {
  D.$DvtPanelDrawerTab$$.$superclass$.Init.call(this, $context$$569$$, $cmds$$29$$, "pdcp_tab_" + $id$$271$$);
  this.$_panelDrawer$ = $panelDrawer$$8$$;
  this.$_isDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panelId$ = $id$$271$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$726_mouseEvent$$6$$) {
  var $eventManager$$46_keyCode$$45$$ = $event$$726_mouseEvent$$6$$.keyCode;
  if(13 == $eventManager$$46_keyCode$$45$$ || 32 == $eventManager$$46_keyCode$$45$$) {
    var $eventManager$$46_keyCode$$45$$ = this.$_panelDrawer$.$getEventManager$(), $point$$56$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0));
    $event$$726_mouseEvent$$6$$ = D.$DvtSvgEventFactory$$.$generateMouseEventFromKeyboardEvent$($event$$726_mouseEvent$$6$$, $eventManager$$46_keyCode$$45$$.$_context$, $point$$56$$.x, $point$$56$$.y);
    $event$$726_mouseEvent$$6$$.target = this;
    $eventManager$$46_keyCode$$45$$.$PreOnClick$($event$$726_mouseEvent$$6$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = function $$JSCompiler_prototypeAlias$$$$setDisclosed$$($bDisclosed$$12$$) {
  this.$_isDisclosed$ != $bDisclosed$$12$$ ? (this.$_isDisclosed$ = $bDisclosed$$12$$, this.$updateAccessibilityAttributes$()) : this.$_isDisclosed$ = $bDisclosed$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$15$$ = [];
  $states$$15$$.push(this.$isDisclosed$() ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_EXPANDED") : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_COLLAPSED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_panelDrawer$.$_panels$[this.$_panelId$].tooltip, $states$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$addAccessibilityAttributes$$() {
  this.$setAriaRole$("button");
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$updateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$updateAccessibilityAttributes$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$57$$) {
  return this.$getDimensions$($targetCoordinateSpace$$57$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
  this.$_keyboardFocusEffect$.show();
  (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
  this.$_keyboardFocusEffect$.$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$727$$) {
  return this.$_panelDrawer$.$getEventManager$().$KeyboardHandler$.$getNextNavigable$(this, $event$$727$$)
};
D.$JSCompiler_prototypeAlias$$.$_createKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_createKeyboardFocusEffect$$() {
  var $dim$$81$$ = this.$getDimensions$();
  this.$_keyboardFocusEffect$ = new D.$DvtKeyboardFocusEffect$$(this.$getCtx$(), this, new D.$DvtRectangle$$($dim$$81$$.x + 1, $dim$$81$$.y + 1, $dim$$81$$.$w$ - 2, $dim$$81$$.$h$ - 2), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtPanelDrawerEventManager$$ = function $$DvtPanelDrawerEventManager$$$($context$$567$$, $callback$$148$$, $callbackObj$$99$$) {
  this.Init($context$$567$$, $callback$$148$$, $callbackObj$$99$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEventManager$$, D.$DvtEventManager$$, "DvtPanelDrawerEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$719$$) {
  var $obj$$335$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$719$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $event$$719$$);
  $obj$$335$$ && ($obj$$335$$.$HandleClick$ && $obj$$335$$.$HandleClick$($event$$719$$), $event$$719$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$720$$) {
  var $obj$$336$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$720$$));
  $obj$$336$$ && ($obj$$336$$.$isDoubleClickable$ && ($obj$$336$$.$isDoubleClickable$() && $obj$$336$$.$HandleDblClick$) && $obj$$336$$.$HandleDblClick$($event$$720$$), $event$$720$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$721$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$721$$);
  var $obj$$337$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$721$$));
  $obj$$337$$ && $obj$$337$$.$HandleRollOver$ && $obj$$337$$.$HandleRollOver$($event$$721$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$722$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$722$$);
  var $obj$$338$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$722$$));
  $obj$$338$$ && $obj$$338$$.$HandleRollOut$ && $obj$$338$$.$HandleRollOut$($event$$722$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$723$$) {
  var $obj$$339$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$723$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$723$$);
  $obj$$339$$ && ($obj$$339$$.$HandleClick$ && $obj$$339$$.$HandleClick$($event$$723$$), $event$$723$$.stopPropagation())
};
D.$DvtPanelDrawerKeyboardHandler$$ = function $$DvtPanelDrawerKeyboardHandler$$$($manager$$24$$, $panelDrawer$$5$$) {
  this.Init($manager$$24$$, $panelDrawer$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanelDrawerKeyboardHandler");
D.$DvtPanelDrawerKeyboardHandler$$.prototype.Init = function $$DvtPanelDrawerKeyboardHandler$$$$Init$($manager$$25$$, $panelDrawer$$6$$) {
  D.$DvtPanelDrawerKeyboardHandler$$.$superclass$.Init.call(this, $manager$$25$$);
  this.$_panelDrawer$ = $panelDrawer$$6$$
};
D.$DvtPanelDrawerKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanelDrawerKeyboardHandler$$$$$processKeyDown$$($event$$724$$) {
  var $keyCode$$44_next$$14$$ = $event$$724$$.keyCode, $currentNavigable$$13$$ = this.$_eventManager$.$getFocus$();
  return 9 == $keyCode$$44_next$$14$$ ? ($keyCode$$44_next$$14$$ = D.$JSCompiler_alias_NULL$$, (0,D.$DvtEventManager$consumeEvent$$)($event$$724$$), $keyCode$$44_next$$14$$ = $currentNavigable$$13$$ ? $currentNavigable$$13$$ : this.$_panelDrawer$.$_tabs$[this.$_panelDrawer$.$_panelOrder$[0]]) : 13 == $keyCode$$44_next$$14$$ || 32 == $keyCode$$44_next$$14$$ ? ($currentNavigable$$13$$.$HandleKeyboardEvent$($event$$724$$), D.$JSCompiler_alias_NULL$$) : D.$DvtPanelDrawerKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, 
  $event$$724$$)
};
D.$DvtPanelDrawerKeyboardHandler$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerKeyboardHandler$$$$$getNextNavigable$$($currentNavigable$$14$$, $event$$725$$) {
  if(!(40 == $event$$725$$.keyCode || 38 == $event$$725$$.keyCode)) {
    return $currentNavigable$$14$$
  }
  for(var $next$$15$$ = $currentNavigable$$14$$, $bForward$$10$$ = 40 == $event$$725$$.keyCode ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $panelIds$$1$$ = this.$_panelDrawer$.$_panelOrder$, $panelIndex$$ = -1, $i$$777$$ = 0;$i$$777$$ < $panelIds$$1$$.length;$i$$777$$++) {
    if($currentNavigable$$14$$ == this.$_panelDrawer$.$_tabs$[$panelIds$$1$$[$i$$777$$]]) {
      $panelIndex$$ = $bForward$$10$$ ? $i$$777$$ == $panelIds$$1$$.length - 1 ? -1 : $i$$777$$ + 1 : 0 == $i$$777$$ ? -1 : $i$$777$$ - 1;
      break
    }
  }
  0 <= $panelIndex$$ && ($next$$15$$ = this.$_panelDrawer$.$_tabs$[$panelIds$$1$$[$panelIndex$$]]);
  return $next$$15$$
};
D.$DvtAccordion$$ = function $$DvtAccordion$$$($context$$547$$, $id$$250$$, $w$$64$$, $h$$62$$, $eventManager$$33$$, $images$$16$$, $styleMap$$89$$) {
  this.Init($context$$547$$, $id$$250$$, $w$$64$$, $h$$62$$, $eventManager$$33$$, $images$$16$$, $styleMap$$89$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordion$$, D.$DvtContainer$$, "DvtAccordion");
D.$DvtAccordion$$.prototype.Init = function $$DvtAccordion$$$$Init$($context$$548$$, $id$$251$$, $w$$65$$, $h$$63$$, $eventManager$$34$$, $images$$17$$, $styleMap$$90$$) {
  D.$DvtAccordion$$.$superclass$.Init.call(this, $context$$548$$, D.$JSCompiler_alias_NULL$$, $id$$251$$);
  this.$_images$ = $images$$17$$;
  this.$_styleMap$ = (new D.$DvtAccordionDefaults$$).$calcOptions$($styleMap$$90$$);
  this.$_sections$ = {};
  this.$_sectionOrder$ = [];
  this.$_maxWidth$ = $w$$65$$;
  this.$_minWidth$ = 0;
  this.$_maxHeight$ = $h$$63$$;
  this.$_bExpandMany$ = this.$_bCollapseAll$ = D.$JSCompiler_alias_FALSE$$;
  this.$_eventManager$ = $eventManager$$34$$
};
D.$JSCompiler_StaticMethods_addSection$$ = function $$JSCompiler_StaticMethods_addSection$$$($JSCompiler_StaticMethods_addSection$self$$, $accordionSection_title$$18$$, $sectionContent$$3$$, $isActive$$1$$, $id$$252$$) {
  $id$$252$$ || ($id$$252$$ = "accordion_" + $accordionSection_title$$18$$.replace(/ /g, "_") + window.Math.floor(1E9 * window.Math.random()));
  $accordionSection_title$$18$$ = new D.$DvtAccordionSection$$($JSCompiler_StaticMethods_addSection$self$$.$getCtx$(), $sectionContent$$3$$, $accordionSection_title$$18$$, $isActive$$1$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_addSection$self$$, $JSCompiler_StaticMethods_addSection$self$$.$_eventManager$, $id$$252$$, $JSCompiler_StaticMethods_addSection$self$$.$_images$, $JSCompiler_StaticMethods_addSection$self$$.$_styleMap$);
  $JSCompiler_StaticMethods_addSection$self$$.$_sections$[$id$$252$$] = $accordionSection_title$$18$$;
  $JSCompiler_StaticMethods_addSection$self$$.$_sectionOrder$.push($id$$252$$);
  $JSCompiler_StaticMethods_addSection$self$$.$addChild$($accordionSection_title$$18$$)
};
D.$DvtAccordion$$.prototype.$render$ = function $$DvtAccordion$$$$$render$$() {
  for(var $maxSectionWidth$$ = (0,D.$JSCompiler_StaticMethods_getMaxSectionWidth$$)(this), $bHasActive$$ = D.$JSCompiler_alias_FALSE$$, $i$$761$$ = 0;$i$$761$$ < this.$_sectionOrder$.length;$i$$761$$++) {
    var $section$$11$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$761$$);
    $section$$11$$.$render$($maxSectionWidth$$);
    $bHasActive$$ && !this.$_bExpandMany$ && $section$$11$$.setActive(D.$JSCompiler_alias_FALSE$$);
    $section$$11$$.$_isActive$ && $section$$11$$.$_isCollapsible$ && ($bHasActive$$ = D.$JSCompiler_alias_TRUE$$)
  }
  !$bHasActive$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, 0).setActive(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtAccordion$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtAccordion$$.prototype.update = function $$DvtAccordion$$$$update$($activeSection_activeSectionId$$1$$) {
  $activeSection_activeSectionId$$1$$ = this.$_sections$[$activeSection_activeSectionId$$1$$];
  var $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ = $activeSection_activeSectionId$$1$$.$_isActive$;
  if($JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$) {
    if($JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$) {
      if($activeSection_activeSectionId$$1$$.$_isCollapsible$) {
        if(this.$_bCollapseAll$) {
          $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          for(var $expandedSectionCounter$$inline_7916$$ = 0, $i$$inline_7917$$ = 0;$i$$inline_7917$$ < this.$_sectionOrder$.length;$i$$inline_7917$$++) {
            $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$inline_7917$$), $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$.$_isActive$ && $expandedSectionCounter$$inline_7916$$++
          }
          $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ = 1 < $expandedSectionCounter$$inline_7916$$
        }
      }else {
        $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ = D.$JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ && $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_FALSE$$)
  }else {
    if(!this.$_bExpandMany$) {
      for($JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ = 0;$JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$ < this.$_sectionOrder$.length;$JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$++) {
        (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $JSCompiler_temp$$219_currActiveState_i$$762_section$$inline_7915$$).setActive(D.$JSCompiler_alias_FALSE$$)
      }
    }
    $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$JSCompiler_StaticMethods_getMaxSectionWidth$$ = function $$JSCompiler_StaticMethods_getMaxSectionWidth$$$($JSCompiler_StaticMethods_getMaxSectionWidth$self$$) {
  if(!$JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$) {
    for(var $maxSectionWidth$$1$$ = 0, $paddingX$$1$$ = $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_styleMap$.paddingX, $i$$763$$ = 0;$i$$763$$ < $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_sectionOrder$.length;$i$$763$$++) {
      var $secWidth_section$$12$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods_getMaxSectionWidth$self$$, $i$$763$$), $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$ = $secWidth_section$$12$$;
      if(!$JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_titleDim$) {
        var $dim$$inline_7921_text$$inline_7920$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_context$, $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_title$);
        $dim$$inline_7921_text$$inline_7920$$.$setCSSStyle$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_titleStyle$);
        if($dim$$inline_7921_text$$inline_7920$$ = $dim$$inline_7921_text$$inline_7920$$.$measureDimensions$()) {
          $dim$$inline_7921_text$$inline_7920$$.$w$ = $dim$$inline_7921_text$$inline_7920$$.$w$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_imageWidth$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_textPadding$
        }
        $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_titleDim$ = $dim$$inline_7921_text$$inline_7920$$
      }
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$_titleDim$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$w$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7919_dim$$72$$.$w$);
      $secWidth_section$$12$$ = $secWidth_section$$12$$.$getContentDimensions$().$w$ + 2 * $paddingX$$1$$;
      $secWidth_section$$12$$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $secWidth_section$$12$$)
    }
    $maxSectionWidth$$1$$ = window.Math.min($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxWidth$);
    $maxSectionWidth$$1$$ = window.Math.max($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_minWidth$);
    $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$ = $maxSectionWidth$$1$$
  }
  return $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$
};
D.$DvtAccordion$$.prototype.$getExpandedHeight$ = function $$DvtAccordion$$$$$getExpandedHeight$$() {
  if(!this.$_maxHeight$) {
    for(var $maxCollapsibleSectionHeight$$ = 0, $maxFixedSectionHeight$$ = 0, $i$$764$$ = 0;$i$$764$$ < this.$_sectionOrder$.length;$i$$764$$++) {
      var $section$$13$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$764$$), $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$ = $section$$13$$, $dim$$inline_7924$$ = D.$JSCompiler_alias_NULL$$;
      0 > $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$getChildIndex$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_sectionContent$) ? ($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$addChild$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_sectionContent$), $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_sectionContent$.$setTranslateX$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_paddingX$), 
      $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_sectionContent$.$setTranslateY$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_headerHeight$ + $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_paddingY$), $dim$$inline_7924$$ = $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$getDimensionsWithStroke$(), $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.removeChild($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$_sectionContent$)) : 
      $dim$$inline_7924$$ = $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$.$getDimensionsWithStroke$();
      $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$ = $dim$$inline_7924$$.$h$;
      if($section$$13$$.$_isCollapsible$ && $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$ > $maxCollapsibleSectionHeight$$) {
        $maxCollapsibleSectionHeight$$ = $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$
      }else {
        if(!$section$$13$$.$_isCollapsible$ || this.$_bExpandMany$) {
          $maxFixedSectionHeight$$ += $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7923_sectionHeight$$
        }
      }
    }
    this.$_maxHeight$ = $maxCollapsibleSectionHeight$$ + $maxFixedSectionHeight$$
  }
  return this.$_maxHeight$
};
D.$JSCompiler_StaticMethods_getSectionByIndex$$ = function $$JSCompiler_StaticMethods_getSectionByIndex$$$($JSCompiler_StaticMethods_getSectionByIndex$self$$, $index$$229$$) {
  return 0 <= $index$$229$$ && $index$$229$$ < $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$.length ? $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sections$[$JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$[$index$$229$$]] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__drawSections$$ = function $$JSCompiler_StaticMethods__drawSections$$$($JSCompiler_StaticMethods__drawSections$self$$) {
  for(var $currY$$21_dims$$60$$ = 0, $i$$766$$ = 0;$i$$766$$ < $JSCompiler_StaticMethods__drawSections$self$$.$_sectionOrder$.length;$i$$766$$++) {
    var $section$$15$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods__drawSections$self$$, $i$$766$$);
    $section$$15$$.$setTranslateY$($currY$$21_dims$$60$$);
    $section$$15$$.$_isActive$ ? ($section$$15$$.expand(), $currY$$21_dims$$60$$ += $section$$15$$.$getDimensionsWithStroke$().$h$, $currY$$21_dims$$60$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.paddingY) : ($section$$15$$.collapse(), $currY$$21_dims$$60$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.sectionHeader.headerHeight)
  }
  $currY$$21_dims$$60$$ = $JSCompiler_StaticMethods__drawSections$self$$.$getDimensionsWithStroke$();
  $JSCompiler_StaticMethods__drawSections$self$$.$FireListener$(new D.$DvtResizeEvent$$($currY$$21_dims$$60$$.$w$, $currY$$21_dims$$60$$.$h$, 0, 0))
};
D.$DvtAccordion$$.prototype.$getSections$ = function $$DvtAccordion$$$$$getSections$$() {
  for(var $sections$$5$$ = [], $i$$767$$ = 0;$i$$767$$ < this.$_sectionOrder$.length;$i$$767$$++) {
    $sections$$5$$.push((0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$767$$))
  }
  return $sections$$5$$
};
D.$DvtAccordionSection$$ = function $$DvtAccordionSection$$$($context$$549$$, $section$$16$$, $title$$19$$, $isActive$$2$$, $isCollapsible$$2$$, $parent$$78$$, $eventManager$$35$$, $id$$253$$, $images$$18$$, $styleMap$$91$$) {
  this.Init($context$$549$$, $section$$16$$, $title$$19$$, $isActive$$2$$, $isCollapsible$$2$$, $parent$$78$$, $eventManager$$35$$, $id$$253$$, $images$$18$$, $styleMap$$91$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionSection$$, D.$DvtContainer$$, "DvtAccordionSection");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$550$$, $section$$17$$, $title$$20$$, $isActive$$3$$, $isCollapsible$$3$$, $parent$$79$$, $eventManager$$36$$, $id$$254$$, $images$$19$$, $styleMap$$92$$) {
  D.$DvtAccordionSection$$.$superclass$.Init.call(this, $context$$550$$, D.$JSCompiler_alias_NULL$$, $id$$254$$);
  this.$_parent$ = $parent$$79$$;
  this.$_images$ = $images$$19$$;
  this.$_title$ = $title$$20$$;
  this.$_id$ = $id$$254$$;
  this.$_sectionContent$ = $section$$17$$;
  this.$_collapsedBtn$ = this.$_expandedBtn$ = D.$JSCompiler_alias_NULL$$;
  this.$_isActive$ = (this.$_isCollapsible$ = $isCollapsible$$3$$) ? $isActive$$3$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_eventManager$ = $eventManager$$36$$;
  this.$_styleMap$ = $styleMap$$92$$;
  this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
  this.$_paddingX$ = this.$_styleMap$.paddingX;
  this.$_paddingY$ = this.$_styleMap$.paddingY;
  this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
  this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
  this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
  this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.setActive = (0,D.$JSCompiler_set$$)("$_isActive$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  var $dim$$73$$ = D.$JSCompiler_alias_NULL$$;
  0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dim$$73$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dim$$73$$ = this.$_sectionContent$.$getDimensions$();
  return $dim$$73$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($base$$inline_7933_width$$148$$) {
  var $height$$inline_7928_text$$inline_7934$$ = this.$_headerHeight$;
  if(this.$_isCollapsible$) {
    var $ariaLabel$$inline_7932_ena$$inline_7929$$, $ovr$$inline_7930$$, $dwn$$inline_7931$$;
    this.$_images$.$getAttr$ ? ($ariaLabel$$inline_7932_ena$$inline_7929$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionExpEna"), this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $ovr$$inline_7930$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionExpOvr"), this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $dwn$$inline_7931$$ = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionExpDwn"), this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$)) : ($ariaLabel$$inline_7932_ena$$inline_7929$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionExpEna, this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $ovr$$inline_7930$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionExpOvr, this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $dwn$$inline_7931$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionExpDwn, this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$));
    this.$_expandedBtn$ = new D.$DvtButton$$(this.$_context$, $ariaLabel$$inline_7932_ena$$inline_7929$$, $ovr$$inline_7930$$, $dwn$$inline_7931$$);
    this.$_expandedBtn$.$setAriaRole$("button");
    $ariaLabel$$inline_7932_ena$$inline_7929$$ = (0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_title$, [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_EXPANDED")]);
    this.$_expandedBtn$.$setAriaProperty$("label", $ariaLabel$$inline_7932_ena$$inline_7929$$);
    this.$_images$.$getAttr$ ? ($ariaLabel$$inline_7932_ena$$inline_7929$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionColEna"), this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $ovr$$inline_7930$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionColOvr"), this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $dwn$$inline_7931$$ = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionColDwn"), this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$)) : ($ariaLabel$$inline_7932_ena$$inline_7929$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionColEna, this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $ovr$$inline_7930$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionColOvr, this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $dwn$$inline_7931$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionColDwn, this.$_title$, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$));
    this.$_collapsedBtn$ = new D.$DvtButton$$(this.$_context$, $ariaLabel$$inline_7932_ena$$inline_7929$$, $ovr$$inline_7930$$, $dwn$$inline_7931$$);
    this.$_collapsedBtn$.$setAriaRole$("button");
    $ariaLabel$$inline_7932_ena$$inline_7929$$ = (0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_title$, [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_COLLAPSED")]);
    this.$_collapsedBtn$.$setAriaProperty$("label", $ariaLabel$$inline_7932_ena$$inline_7929$$);
    this.$_eventManager$.$associate$(this.$_expandedBtn$, this);
    this.$_eventManager$.$associate$(this.$_collapsedBtn$, this)
  }else {
    $base$$inline_7933_width$$148$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)(this, 3, $base$$inline_7933_width$$148$$, $height$$inline_7928_text$$inline_7934$$), $height$$inline_7928_text$$inline_7934$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)(this, this.$_title$), this.$_header$ = new D.$DvtContainer$$(this.$_context$), this.$_header$.$addChild$($base$$inline_7933_width$$148$$), this.$_header$.$addChild$($height$$inline_7928_text$$inline_7934$$)
  }
  this.$_isCollapsible$ ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
  this.$_paddingY$))
};
D.$JSCompiler_prototypeAlias$$.collapse = function $$JSCompiler_prototypeAlias$$$collapse$() {
  this.$_isCollapsible$ && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive(D.$JSCompiler_alias_FALSE$$), this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$())
};
D.$JSCompiler_prototypeAlias$$.expand = function $$JSCompiler_prototypeAlias$$$expand$() {
  0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
  this.$addChild$(this.$_expandedBtn$);
  this.$addChild$(this.$_sectionContent$);
  this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
  this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
  this.setActive(D.$JSCompiler_alias_TRUE$$);
  this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$()
};
D.$JSCompiler_StaticMethods__createHeaderState$$ = function $$JSCompiler_StaticMethods__createHeaderState$$$($JSCompiler_StaticMethods__createHeaderState$self$$, $base$$6_state$$91$$, $image$$20_uri$$21$$, $label$$72_text$$102$$, $ww$$115$$, $dim$$77_hh$$99$$) {
  var $imageWidth$$ = $JSCompiler_StaticMethods__createHeaderState$self$$.$_imageWidth$, $imageHeight$$ = $JSCompiler_StaticMethods__createHeaderState$self$$.$_imageHeight$, $imageOffsetY$$ = ($JSCompiler_StaticMethods__createHeaderState$self$$.$_headerHeight$ - $imageHeight$$) / 2, $buttonState$$4$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__createHeaderState$self$$.$_context$);
  $base$$6_state$$91$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)($JSCompiler_StaticMethods__createHeaderState$self$$, $base$$6_state$$91$$, $ww$$115$$, $dim$$77_hh$$99$$);
  $buttonState$$4$$.$addChild$($base$$6_state$$91$$);
  ($image$$20_uri$$21$$ = $image$$20_uri$$21$$ ? new D.$DvtImage$$($JSCompiler_StaticMethods__createHeaderState$self$$.$_context$, $image$$20_uri$$21$$, 0, $imageOffsetY$$, $imageWidth$$, $imageHeight$$) : D.$JSCompiler_alias_NULL$$) && $buttonState$$4$$.$addChild$($image$$20_uri$$21$$);
  $label$$72_text$$102$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)($JSCompiler_StaticMethods__createHeaderState$self$$, $label$$72_text$$102$$, $ww$$115$$ - $imageWidth$$ - 0, $dim$$77_hh$$99$$, $buttonState$$4$$);
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createHeaderState$self$$.$_context$) ? ($dim$$77_hh$$99$$ = $label$$72_text$$102$$.$measureDimensions$(), $label$$72_text$$102$$.$setTranslateX$($ww$$115$$ - $dim$$77_hh$$99$$.$w$ - $imageWidth$$), $image$$20_uri$$21$$ && $image$$20_uri$$21$$.$setTranslateX$($ww$$115$$ - $imageWidth$$)) : $label$$72_text$$102$$.$setTranslateX$($imageWidth$$);
  $JSCompiler_StaticMethods__createHeaderState$self$$.$_keyboardFocusEffect$ || $JSCompiler_StaticMethods__createHeaderState$self$$.$_createKeyboardFocusEffect$($image$$20_uri$$21$$ ? $image$$20_uri$$21$$ : $label$$72_text$$102$$);
  return $buttonState$$4$$
};
D.$JSCompiler_StaticMethods__createButtonText$$ = function $$JSCompiler_StaticMethods__createButtonText$$$($JSCompiler_StaticMethods__createButtonText$self$$, $dims$$61_label$$73$$, $ww$$116$$, $hh$$100$$, $container$$170$$) {
  var $text$$103$$ = D.$JSCompiler_alias_NULL$$;
  if($dims$$61_label$$73$$) {
    $text$$103$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods__createButtonText$self$$.$_context$, $dims$$61_label$$73$$);
    $text$$103$$.$setCSSStyle$($JSCompiler_StaticMethods__createButtonText$self$$.$_titleStyle$);
    D.$DvtTextUtils$$.$fitText$($text$$103$$, $ww$$116$$, $hh$$100$$, $container$$170$$);
    $dims$$61_label$$73$$ = $text$$103$$.$measureDimensions$();
    if(!$JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$w$ < $dims$$61_label$$73$$.$w$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$h$ < $dims$$61_label$$73$$.$h$) {
      $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ = $dims$$61_label$$73$$
    }
    $text$$103$$.$setTranslateY$(($JSCompiler_StaticMethods__createButtonText$self$$.$_headerHeight$ - $dims$$61_label$$73$$.$h$) / 2)
  }
  return $text$$103$$
};
D.$JSCompiler_StaticMethods__createButtonBase$$ = function $$JSCompiler_StaticMethods__createButtonBase$$$($JSCompiler_StaticMethods__createButtonBase$self_base$$7$$, $state$$93$$, $ww$$117$$, $hh$$101$$) {
  var $style$$99$$ = D.$JSCompiler_alias_NULL$$;
  switch($state$$93$$) {
    case 1:
      $style$$99$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleOvr;
      break;
    case 2:
      $style$$99$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleDwn;
      break;
    case 3:
      $style$$99$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleDis;
      break;
    default:
      $style$$99$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleEna
  }
  $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$ = new D.$DvtRect$$($JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_context$, 0, 0, $ww$$117$$, $hh$$101$$);
  $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$setStroke$((0,D.$DvtAccordionSection$_getStroke$$)($style$$99$$));
  $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$setFill$((0,D.$DvtAccordionSection$_getFill$$)($style$$99$$));
  return $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$
};
D.$DvtAccordionSection$_getFill$$ = function $$DvtAccordionSection$_getFill$$$($angle$$53_gradObj$$6_style$$100$$) {
  var $arColors$$34_color$$86$$ = $angle$$53_gradObj$$6_style$$100$$.$getStyle$("background-color");
  $angle$$53_gradObj$$6_style$$100$$ = (0,D.$JSCompiler_StaticMethods_getBackgroundImage$$)($angle$$53_gradObj$$6_style$$100$$);
  var $arAlphas$$32_fill$$71$$ = D.$JSCompiler_alias_NULL$$;
  if($angle$$53_gradObj$$6_style$$100$$ && $angle$$53_gradObj$$6_style$$100$$ instanceof D.$DvtCSSGradient$$) {
    var $arColors$$34_color$$86$$ = $angle$$53_gradObj$$6_style$$100$$.$_arColors$, $arAlphas$$32_fill$$71$$ = $angle$$53_gradObj$$6_style$$100$$.$_arAlphas$, $arStops$$27$$ = $angle$$53_gradObj$$6_style$$100$$.$_arRatios$;
    $angle$$53_gradObj$$6_style$$100$$ = $angle$$53_gradObj$$6_style$$100$$.$getAngle$();
    $arAlphas$$32_fill$$71$$ = new D.$DvtLinearGradientFill$$($angle$$53_gradObj$$6_style$$100$$, $arColors$$34_color$$86$$, $arAlphas$$32_fill$$71$$, $arStops$$27$$)
  }else {
    $arColors$$34_color$$86$$ && ($arAlphas$$32_fill$$71$$ = new D.$DvtSolidFill$$($arColors$$34_color$$86$$, 1))
  }
  return $arAlphas$$32_fill$$71$$
};
D.$DvtAccordionSection$_getStroke$$ = function $$DvtAccordionSection$_getStroke$$$($color$$87_style$$101$$) {
  $color$$87_style$$101$$ = $color$$87_style$$101$$.$getStyle$("border-color");
  return new D.$DvtSolidStroke$$($color$$87_style$$101$$, 1, 1)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  var $obj$$329_stageP2$$5$$ = this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$, $bounds$$145$$ = $obj$$329_stageP2$$5$$.$getDimensions$(), $stageP1$$5$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$329_stageP2$$5$$, new D.$DvtPoint$$($bounds$$145$$.x, $bounds$$145$$.y)), $obj$$329_stageP2$$5$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$329_stageP2$$5$$, new D.$DvtPoint$$($bounds$$145$$.x + $bounds$$145$$.$w$, $bounds$$145$$.y + $bounds$$145$$.$h$));
  return new D.$DvtRectangle$$($stageP1$$5$$.x, $stageP1$$5$$.y, $obj$$329_stageP2$$5$$.x - $stageP1$$5$$.x, $obj$$329_stageP2$$5$$.y - $stageP1$$5$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return(this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$).$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_keyboardFocusEffect$.show();
  (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_keyboardFocusEffect$.$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$708$$) {
  return this.$_eventManager$.$KeyboardHandler$.$getNextNavigable$(this, $event$$708$$)
};
D.$JSCompiler_prototypeAlias$$.$_createKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_createKeyboardFocusEffect$$($obj$$331_y$$228$$) {
  var $dim$$78$$ = $obj$$331_y$$228$$.$getDimensions$(), $x$$253$$ = $obj$$331_y$$228$$.$getTranslateX$() || $dim$$78$$.x;
  $obj$$331_y$$228$$ = $obj$$331_y$$228$$.$getTranslateY$() || $dim$$78$$.y;
  this.$_keyboardFocusEffect$ = new D.$DvtKeyboardFocusEffect$$(this.$getCtx$(), this, new D.$DvtRectangle$$($x$$253$$, $obj$$331_y$$228$$, $dim$$78$$.$w$, $dim$$78$$.$h$), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtAccordionDefaults$$ = function $$DvtAccordionDefaults$$$() {
  this.Init({skyros:D.$DvtAccordionDefaults$VERSION_1$$, alta:D.$DvtAccordionDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAccordionDefaults");
D.$DvtAccordionDefaults$VERSION_1$$ = {skin:"alta", sectionHeader:{styleEna:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
styleDis:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
D.$DvtAccordionDefaults$SKIN_ALTA$$ = {};
D.$DvtTrain$$ = function $$DvtTrain$$$($context$$553$$, $eventManager$$37$$, $labels$$21$$, $buttonStyles$$12$$, $id$$257$$, $isAltaSkin$$4$$) {
  this.Init($context$$553$$, $eventManager$$37$$, $labels$$21$$, $buttonStyles$$12$$, $id$$257$$, $isAltaSkin$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTrain$$, D.$DvtContainer$$, "DvtTrain");
D.$DvtTrain$$.prototype.Init = function $$DvtTrain$$$$Init$($context$$554$$, $eventManager$$38$$, $labels$$22$$, $buttonStyles$$13$$, $id$$258$$, $isAltaSkin$$5$$) {
  D.$DvtTrain$$.$superclass$.Init.call(this, $context$$554$$, D.$JSCompiler_alias_NULL$$, $id$$258$$);
  this.$_tooltipManager$ = $context$$554$$.$getTooltipManager$();
  this.$_labels$ = $labels$$22$$;
  this.$_buttonStyles$ = $buttonStyles$$13$$;
  this.$_count$ = $labels$$22$$.length;
  this.$_buttons$ = (0,window.Array)(this.$_count$);
  this.$_selectedIndex$ = 0;
  this.$_isAltaSkin$ = $isAltaSkin$$5$$;
  this.$RenderSelf$($eventManager$$38$$)
};
D.$DvtTrain$$.prototype.$setSelectedIndex$ = function $$DvtTrain$$$$$setSelectedIndex$$($index$$230$$) {
  0 <= $index$$230$$ && $index$$230$$ < this.$_count$ && (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, this.$_selectedIndex$, $index$$230$$)
};
D.$DvtTrain$$.prototype.$HandleClick$ = function $$DvtTrain$$$$$HandleClick$$($event$$709_selIndex$$3$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$709_selIndex$$3$$);
  for(var $event$$inline_7940_i$$768$$ = 0;$event$$inline_7940_i$$768$$ < this.$_buttons$.length;$event$$inline_7940_i$$768$$++) {
    var $target$$126$$ = $event$$709_selIndex$$3$$.target;
    if(this.$_buttons$[$event$$inline_7940_i$$768$$] === $target$$126$$ || this.$_buttons$[$event$$inline_7940_i$$768$$] === $target$$126$$.getParent()) {
      $event$$709_selIndex$$3$$ = this.$_selectedIndex$;
      (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, $event$$709_selIndex$$3$$, $event$$inline_7940_i$$768$$);
      $event$$709_selIndex$$3$$ != $event$$inline_7940_i$$768$$ && ($event$$inline_7940_i$$768$$ = new D.$DvtTrainEvent$$(this.$_selectedIndex$), this.$FireListener$($event$$inline_7940_i$$768$$, D.$JSCompiler_alias_FALSE$$));
      break
    }
  }
};
D.$JSCompiler_StaticMethods_SelectedIndexChanged$$ = function $$JSCompiler_StaticMethods_SelectedIndexChanged$$$($JSCompiler_StaticMethods_SelectedIndexChanged$self$$, $button$$74_oldIndex$$3$$, $newIndex$$8$$) {
  $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_selectedIndex$ = $newIndex$$8$$;
  if($button$$74_oldIndex$$3$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$button$$74_oldIndex$$3$$]) {
    $button$$74_oldIndex$$3$$.$overState$ && $button$$74_oldIndex$$3$$.$overState$.setCursor("pointer"), $button$$74_oldIndex$$3$$.$downState$ && $button$$74_oldIndex$$3$$.$downState$.setCursor("pointer"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$74_oldIndex$$3$$, D.$JSCompiler_alias_FALSE$$)
  }
  if($button$$74_oldIndex$$3$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$newIndex$$8$$]) {
    $button$$74_oldIndex$$3$$.$overState$ && $button$$74_oldIndex$$3$$.$overState$.setCursor("default"), $button$$74_oldIndex$$3$$.$downState$ && $button$$74_oldIndex$$3$$.$downState$.setCursor("default"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$74_oldIndex$$3$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtTrain$$.prototype.$RenderSelf$ = function $$DvtTrain$$$$$RenderSelf$$($eventManager$$39$$) {
  var $bBiDi$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $buttonSize_buttonStyle$$inline_7943$$;
  if(!this.$_buttonSize$) {
    if(this.$_buttonStyles$ && ($buttonSize_buttonStyle$$inline_7943$$ = this.$_buttonStyles$[0])) {
      this.$_buttonSize$ = (0,D.$DvtCSSStyle$toNumber$$)($buttonSize_buttonStyle$$inline_7943$$.getWidth())
    }
    this.$_buttonSize$ || (this.$_buttonSize$ = 8)
  }
  $buttonSize_buttonStyle$$inline_7943$$ = this.$_buttonSize$;
  for(var $i$$769$$ = 0;$i$$769$$ < this.$_count$;$i$$769$$++) {
    var $button$$75$$, $button$$inline_7946_j$$105$$ = $button$$75$$ = this.$CreateButton$($buttonSize_buttonStyle$$inline_7943$$, $i$$769$$ == this.$_selectedIndex$, this.$_labels$[$i$$769$$]);
    $button$$inline_7946_j$$105$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    (0,D.$DvtAgent$isTouchDevice$$)() || $button$$inline_7946_j$$105$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    $button$$inline_7946_j$$105$$ = $i$$769$$;
    $bBiDi$$6$$ && ($button$$inline_7946_j$$105$$ = this.$_count$ - 1 - $i$$769$$);
    $eventManager$$39$$ && $eventManager$$39$$.$associate$($button$$75$$, $button$$75$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$75$$, $button$$inline_7946_j$$105$$ * ($buttonSize_buttonStyle$$inline_7943$$ + 3), this.$_isAltaSkin$ ? 0 : 1);
    this.$addChild$($button$$75$$);
    this.$_buttons$[$i$$769$$] = $button$$75$$
  }
};
D.$DvtTrain$$.prototype.$CreateButtonState$ = function $$DvtTrain$$$$$CreateButtonState$$($url$$26$$, $buttonSize$$2$$) {
  return new D.$DvtImage$$(this.$getCtx$(), $url$$26$$, 0, 0, $buttonSize$$2$$, $buttonSize$$2$$)
};
D.$JSCompiler_StaticMethods_MakeButtonState$$ = function $$JSCompiler_StaticMethods_MakeButtonState$$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$, $buttonSize$$3$$, $state$$94$$, $bSelected$$6$$) {
  var $bdColor$$inline_7952_style$$102_url$$27$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$_buttonStyles$ ? $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$_buttonStyles$[$state$$94$$] : D.$JSCompiler_alias_NULL$$;
  if($bdColor$$inline_7952_style$$102_url$$27$$ = $bdColor$$inline_7952_style$$102_url$$27$$ ? $bdColor$$inline_7952_style$$102_url$$27$$.$getStyle$("content") : D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$CreateButtonState$($bdColor$$inline_7952_style$$102_url$$27$$, $buttonSize$$3$$)
  }else {
    var $buttonStyle$$inline_7951$$, $bgColor$$inline_7953$$, $offset$$inline_7954$$;
    2 == $state$$94$$ ? ($offset$$inline_7954$$ = 0, $bgColor$$inline_7953$$ = "#61bde3", $bdColor$$inline_7952_style$$102_url$$27$$ = "#0066ff", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$_buttonStyles$ && ($buttonStyle$$inline_7951$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$_buttonStyles$[2])) : ($offset$$inline_7954$$ = 1, $bgColor$$inline_7953$$ = "#c0cbd5", $bdColor$$inline_7952_style$$102_url$$27$$ = 
    "#5d7891", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$_buttonStyles$ && ($buttonStyle$$inline_7951$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$_buttonStyles$[0]));
    $buttonStyle$$inline_7951$$ && ($buttonStyle$$inline_7951$$.$getStyle$("border-color") && ($bdColor$$inline_7952_style$$102_url$$27$$ = $buttonStyle$$inline_7951$$.$getStyle$("border-color")), $buttonStyle$$inline_7951$$.$getStyle$("background-color") && ($bgColor$$inline_7953$$ = $buttonStyle$$inline_7951$$.$getStyle$("background-color")));
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$getCtx$(), $offset$$inline_7954$$, $offset$$inline_7954$$, $buttonSize$$3$$ - 2 * $offset$$inline_7954$$, $buttonSize$$3$$ - 2 * $offset$$inline_7954$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$setSolidFill$($bgColor$$inline_7953$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.$setSolidStroke$($bdColor$$inline_7952_style$$102_url$$27$$)
  }
  $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$.setCursor(0 == $state$$94$$ || $bSelected$$6$$ ? "default" : "pointer");
  return $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7955$$
};
D.$DvtTrain$$.prototype.$CreateButton$ = function $$DvtTrain$$$$$CreateButton$$($button$$78_buttonSize$$4$$, $bSelected$$7$$, $tooltip$$52$$) {
  $button$$78_buttonSize$$4$$ = new D.$DvtButton$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$78_buttonSize$$4$$, 0, $bSelected$$7$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$78_buttonSize$$4$$, 1, $bSelected$$7$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$78_buttonSize$$4$$, 2, $bSelected$$7$$), D.$JSCompiler_alias_NULL$$);
  $button$$78_buttonSize$$4$$.$setTooltip$($tooltip$$52$$);
  $button$$78_buttonSize$$4$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $bSelected$$7$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$78_buttonSize$$4$$, $bSelected$$7$$);
  return $button$$78_buttonSize$$4$$
};
D.$DvtTrainEvent$$ = function $$DvtTrainEvent$$$($index$$231$$) {
  this.Init("dvtTrain");
  this.type = this.$getType$();
  this.$_index$ = $index$$231$$
};
(0,D.$goog$exportPath_$$)("DvtTrainEvent", D.$DvtTrainEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTrainEvent$$, D.$DvtBaseComponentEvent$$, "DvtTrainEvent");
D.$DvtTrainEvent$$.TYPE = "dvtTrain";
D.$DvtTrainEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtTrainEvent$$.prototype.getIndex = D.$DvtTrainEvent$$.prototype.$getIndex$;
D.DvtOverviewWindow = function $DvtOverviewWindow$($context$$551$$, $id$$255$$, $x$$254$$, $y$$229$$, $ww$$118$$, $hh$$102$$) {
  this.Init($context$$551$$, $id$$255$$, $x$$254$$, $y$$229$$, $ww$$118$$, $hh$$102$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtOverviewWindow, D.$DvtContainer$$, "DvtOverviewWindow");
D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
D.DvtOverviewWindow.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$552$$, $id$$256$$, $x$$255$$, $y$$230$$, $ww$$119$$, $hh$$103$$) {
  D.DvtOverviewWindow.$superclass$.Init.call(this, $context$$552$$, D.$JSCompiler_alias_NULL$$, $id$$256$$);
  this.$_x$ = $x$$255$$;
  this.$_y$ = $y$$230$$;
  this.$_ww$ = $ww$$119$$;
  this.$_hh$ = $hh$$103$$;
  this.$_skinStyle$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  this.$_md$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panEnable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_overview$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, D.$JSCompiler_alias_NULL$$));
  this.$removeChildren$();
  this.$_overview$ = this.$_viewport$ = D.$JSCompiler_alias_NULL$$;
  var $bgColor$$14_clipPath$$14$$ = new D.$DvtClipPath$$(this.getId());
  (0,D.$JSCompiler_StaticMethods_addRect$$)($bgColor$$14_clipPath$$14$$, 0, 0, this.$_ww$, this.$_hh$);
  this.$_overview$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, $bgColor$$14_clipPath$$14$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overview$);
  this.$addChild$(this.$_overview$);
  this.$_viewport$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
  $bgColor$$14_clipPath$$14$$ = this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$);
  this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$), D.$JSCompiler_alias_NULL$$, 2);
  this.$_viewport$.$setSolidFill$($bgColor$$14_clipPath$$14$$);
  this.$_viewport$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_overview$.$addChild$(this.$_viewport$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, 
  this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_setViewportDimensions$$ = function $$JSCompiler_StaticMethods_setViewportDimensions$$$($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$79_vx$$, $animator$$125$$) {
  var $topLeft$$4_vh$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$79_vx$$.x, $dim$$79_vx$$.y, $animator$$125$$), $bottomRight$$4$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$79_vx$$.x + $dim$$79_vx$$.$w$, $dim$$79_vx$$.y + $dim$$79_vx$$.$h$, $animator$$125$$);
  $dim$$79_vx$$ = $topLeft$$4_vh$$.x;
  var $vy$$ = $topLeft$$4_vh$$.y, $vw$$ = $bottomRight$$4$$.x - $topLeft$$4_vh$$.x, $topLeft$$4_vh$$ = $bottomRight$$4$$.y - $topLeft$$4_vh$$.y;
  $animator$$125$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$125$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getX$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$, $dim$$79_vx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$125$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getY$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$, $vy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$125$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getWidth, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$, $vw$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$125$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getHeight, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$, $topLeft$$4_vh$$)) : ($JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$($dim$$79_vx$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$($vy$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$($vw$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$($topLeft$$4_vh$$))
};
D.$JSCompiler_StaticMethods_getViewportDimensions$$ = function $$JSCompiler_StaticMethods_getViewportDimensions$$$($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$) {
  var $topLeft$$5$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getX$(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getY$());
  $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getX$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.getWidth(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getY$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.getHeight());
  return new D.$DvtRectangle$$($topLeft$$5$$.x, $topLeft$$5$$.y, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.x - $topLeft$$5$$.x, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.y - $topLeft$$5$$.y)
};
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.$_mouseDown$ = function $$JSCompiler_prototypeAlias$$$$_mouseDown$$($evt$$70_viewportEvent$$) {
  if(!this.$_md$ && this.$_panEnable$) {
    this.$_md$ = D.$JSCompiler_alias_TRUE$$;
    var $offset$$32$$ = this.$_getRelativePosition$($evt$$70_viewportEvent$$);
    $evt$$70_viewportEvent$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$32$$), $evt$$70_viewportEvent$$);
    this.$FireListener$($evt$$70_viewportEvent$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseMove$ = function $$JSCompiler_prototypeAlias$$$$_mouseMove$$($evt$$71_viewportEvent$$1$$) {
  if(this.$_md$ && this.$_panEnable$) {
    var $offset$$33$$ = this.$_getRelativePosition$($evt$$71_viewportEvent$$1$$);
    $evt$$71_viewportEvent$$1$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$33$$), $evt$$71_viewportEvent$$1$$);
    this.$FireListener$($evt$$71_viewportEvent$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseUp$ = function $$JSCompiler_prototypeAlias$$$$_mouseUp$$() {
  this.$_md$ && this.$_panEnable$ && (this.$_md$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$_mouseOut$ = function $$JSCompiler_prototypeAlias$$$$_mouseOut$$() {
  this.$_mouseUp$()
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($evt$$74_touches$$14$$) {
  var $pageX$$12$$, $pageY$$12$$;
  (0,D.$DvtAgent$isTouchDevice$$)() ? ($evt$$74_touches$$14$$ = $evt$$74_touches$$14$$.touches, 0 < $evt$$74_touches$$14$$.length && ($pageX$$12$$ = $evt$$74_touches$$14$$[0].pageX, $pageY$$12$$ = $evt$$74_touches$$14$$[0].pageY)) : ($pageX$$12$$ = $evt$$74_touches$$14$$.pageX, $pageY$$12$$ = $evt$$74_touches$$14$$.pageY);
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $pageX$$12$$, $pageY$$12$$)
};
D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$ = function $$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$$($JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$, $vx$$1$$, $vy$$1$$) {
  var $tx$$27$$ = 0, $ty$$28$$ = 0, $sx$$16$$ = 1, $sy$$16$$ = 1;
  $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$ && ($tx$$27$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateX$(), $ty$$28$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateY$(), $sx$$16$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleX$(), $sy$$16$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$(($vx$$1$$ - $tx$$27$$) / $sx$$16$$, ($vy$$1$$ - $ty$$28$$) / $sy$$16$$)
};
D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$ = function $$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$$($JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$, $cx$$56$$, $cy$$57$$, $animator$$126$$) {
  var $tx$$28$$ = 0, $ty$$29$$ = 0, $sx$$17$$ = 1, $sy$$17$$ = 1;
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$ && ($tx$$28$$ = $animator$$126$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$126$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$(), $ty$$29$$ = 
  $animator$$126$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$126$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$(), $sx$$17$$ = $animator$$126$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$126$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$(), $sy$$17$$ = $animator$$126$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$126$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$, D.$JSCompiler_alias_TRUE$$) : 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$($cx$$56$$ * $sx$$17$$ + $tx$$28$$, $cy$$57$$ * $sy$$17$$ + $ty$$29$$)
};
D.DvtOverviewWindow.prototype.$getSkinStyle$ = (0,D.$JSCompiler_get$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$setSkinStyle$ = (0,D.$JSCompiler_set$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$getSkinStyleAttr$ = function $DvtOverviewWindow$$$getSkinStyleAttr$$($attr$$16$$) {
  return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$attr$$16$$] ? this.$_skinStyle$[$attr$$16$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$ = function $$JSCompiler_StaticMethods__getCenteredViewportDimensions$$$($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $pos$$70$$) {
  var $overviewStart_topLeft$$6$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_overview$, new D.$DvtPoint$$(0, 0)), $bottomRight$$6_viewportDims$$ = $JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_viewport$.$getDimensions$(), $centeredViewportX$$ = $pos$$70$$.x - $overviewStart_topLeft$$6$$.x - $bottomRight$$6_viewportDims$$.$w$ / 2, $centeredViewportY$$ = $pos$$70$$.y - $overviewStart_topLeft$$6$$.y - $bottomRight$$6_viewportDims$$.$h$ / 
  2, $overviewStart_topLeft$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$, $centeredViewportY$$), $bottomRight$$6_viewportDims$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$ + $bottomRight$$6_viewportDims$$.$w$, $centeredViewportY$$ + $bottomRight$$6_viewportDims$$.$h$);
  return new D.$DvtRectangle$$($overviewStart_topLeft$$6$$.x, $overviewStart_topLeft$$6$$.y, $bottomRight$$6_viewportDims$$.x - $overviewStart_topLeft$$6$$.x, $bottomRight$$6_viewportDims$$.y - $overviewStart_topLeft$$6$$.y)
};
D.DvtOverviewWindow.prototype.$SetViewportRectangle$ = function $DvtOverviewWindow$$$SetViewportRectangle$$($rect$$45$$) {
  this.$_viewport$.$setX$($rect$$45$$.x);
  this.$_viewport$.$setY$($rect$$45$$.y);
  this.$_viewport$.$setWidth$($rect$$45$$.$w$);
  this.$_viewport$.$setHeight$($rect$$45$$.$h$)
};
D.DvtOverviewWindow.prototype.$GetViewportRectangle$ = function $DvtOverviewWindow$$$GetViewportRectangle$$() {
  return new D.$DvtRectangle$$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
};
D.DvtOverviewWindow.prototype.$getDimensions$ = function $DvtOverviewWindow$$$getDimensions$$($targetCoordinateSpace$$54$$) {
  var $bounds$$146$$ = new D.$DvtRectangle$$(0, 0, this.$_ww$, this.$_hh$);
  return!$targetCoordinateSpace$$54$$ || $targetCoordinateSpace$$54$$ === this ? $bounds$$146$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$146$$, $targetCoordinateSpace$$54$$)
};
D.DvtOverviewWindow.prototype.$getDimensionsWithStroke$ = function $DvtOverviewWindow$$$getDimensionsWithStroke$$($targetCoordinateSpace$$55$$) {
  return this.$getDimensions$($targetCoordinateSpace$$55$$)
};
(0,D.$DvtBundle$addDefaultStrings$$)("DvtSubcomponentBundle", {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", CONTROL_PANEL_LAYOUT_RADIAL:"Radial", 
CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", SEARCH_RESULTS_ALTA:"{0} Results", 
SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"});
  return D;
});