/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$4$$, $callback$$36$$, $callbackObj$$1$$) {
  var $axis$$47$$ = new D.$DvtAxis$$;
  $axis$$47$$.Init($context$$4$$, $callback$$36$$, $callbackObj$$1$$);
  return $axis$$47$$
};
D.$DvtAxis$getDefaults$$ = function $$DvtAxis$getDefaults$$$($skin$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$)
};
D.$DvtAxis$$.getDefaults = D.$DvtAxis$getDefaults$$;
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$5$$, $callback$$37$$, $callbackObj$$2$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$5$$, $callback$$37$$, $callbackObj$$2$$);
  this.$Defaults$ = new D.$DvtAxisDefaults$$;
  this.$_eventHandler$ = new D.$DvtAxisEventManager$$(this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtAxis$$.prototype.$SetOptions$ = function $$DvtAxis$$$$$SetOptions$$($options$$6$$) {
  $options$$6$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$6$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtAxis$$.prototype.$getPreferredSize$ = function $$DvtAxis$$$$$getPreferredSize$$($options$$7$$, $maxWidth$$1$$, $maxHeight$$) {
  this.$SetOptions$($options$$7$$);
  return D.$DvtAxisRenderer$$.$getPreferredSize$(this, $maxWidth$$1$$, $maxHeight$$)
};
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$8$$, $width$$31$$, $height$$34$$, $x$$67$$, $y$$48$$) {
  this.$SetOptions$($options$$8$$);
  this.$Width$ = $width$$31$$;
  this.$Height$ = $height$$34$$;
  this.$removeChildren$();
  $x$$67$$ || ($x$$67$$ = 0);
  $y$$48$$ || ($y$$48$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$67$$, $y$$48$$, $width$$31$$, $height$$34$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$98$$, $source$$8$$) {
  this === $source$$8$$ && this.$__dispatchEvent$($event$$98$$)
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventHandler$ && (this.$_eventHandler$.$removeListeners$(this), this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtAxis$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtAxisAutomation$$(this)
};
D.$DvtAxis$$.prototype.getAutomation = D.$DvtAxis$$.prototype.$getAutomation$;
D.$DvtAxisConstants$$ = {};
(0,D.$goog$exportPath_$$)("DvtAxisConstants", D.$DvtAxisConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisConstants$$, D.$DvtObj$$, "DvtAxisConstants");
D.$DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
D.$DvtAxisConstants$$.TICK_LABEL = D.$DvtAxisConstants$$.$TICK_LABEL$;
D.$DvtAxisConstants$$.$TITLE$ = "title";
D.$DvtAxisConstants$$.TITLE = D.$DvtAxisConstants$$.$TITLE$;
D.$DvtAbstractAxisValueFormatter$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractAxisValueFormatter$$, D.$DvtObj$$, "DvtAbstractAxisValueFormatter");
D.$DvtAbstractAxisValueFormatter$$.prototype.$format$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAxisAutomation$$ = function $$DvtAxisAutomation$$$($dvtComponent$$) {
  this.$_axis$ = $dvtComponent$$;
  this.$_options$ = this.$_axis$.$getOptions$();
  this.$_axisInfo$ = this.$_axis$.$Info$
};
(0,D.$goog$exportPath_$$)("DvtAxisAutomation", D.$DvtAxisAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisAutomation$$, D.$DvtAutomation$$, "DvtAxisAutomation");
D.$DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($displayable$$1_level$$36$$) {
  var $labelIndex_logicalObj$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_axis$.$__getEventManager$(), $displayable$$1_level$$36$$);
  if($labelIndex_logicalObj$$ && $labelIndex_logicalObj$$ instanceof D.$DvtSimpleObjPeer$$) {
    if($labelIndex_logicalObj$$.$getParams$().type == D.$DvtAxisConstants$$.$TITLE$) {
      return"title"
    }
    if(this.$_options$.groups) {
      $displayable$$1_level$$36$$ = $labelIndex_logicalObj$$.$getParams$().level;
      for(var $labelIndex_logicalObj$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $labelIndex_logicalObj$$.$getParams$().index, $displayable$$1_level$$36$$), $indexList$$ = "", $levelIdx$$ = 0;$levelIdx$$ <= $displayable$$1_level$$36$$;$levelIdx$$++) {
        for(var $labels$$1$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $levelIdx$$), $i$$95$$ = 0;$i$$95$$ < $labels$$1$$.length;$i$$95$$++) {
          var $index$$106$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($labels$$1$$[$i$$95$$]);
          (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $index$$106$$, $levelIdx$$) <= $labelIndex_logicalObj$$ && this.$_axisInfo$.$getEndIndex$($index$$106$$, $levelIdx$$) >= $labelIndex_logicalObj$$ && ($indexList$$ += "[" + this.$_axisInfo$.$getPosition$($index$$106$$, $levelIdx$$) + "]")
        }
      }
      if(0 < $indexList$$.length) {
        return"item" + $indexList$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($subId$$1_title$$8$$) {
  if("title" == $subId$$1_title$$8$$) {
    if($subId$$1_title$$8$$ = this.$_axisInfo$.$getTitle$()) {
      return $subId$$1_title$$8$$.$getElem$()
    }
  }else {
    if(this.$_axisInfo$ instanceof D.$DvtGroupAxisInfo$$) {
      for(var $labelLevel$$ = $subId$$1_title$$8$$.split("[").length - 1 - 1, $labelIndex$$1$$ = 0, $startIndex$$11$$ = 0, $levelIdx$$1$$ = 0;$levelIdx$$1$$ <= $labelLevel$$;$levelIdx$$1$$++) {
        var $closeParen_labels$$2$$ = $subId$$1_title$$8$$.indexOf("]"), $groupIndex$$ = $subId$$1_title$$8$$.substring($subId$$1_title$$8$$.indexOf("[") + 1, $closeParen_labels$$2$$);
        $subId$$1_title$$8$$ = $subId$$1_title$$8$$.substring($closeParen_labels$$2$$ + 1);
        for(var $closeParen_labels$$2$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $levelIdx$$1$$), $index$$107$$, $i$$96_j$$16$$ = 0;$i$$96_j$$16$$ < $closeParen_labels$$2$$.length;$i$$96_j$$16$$++) {
          if($index$$107$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($closeParen_labels$$2$$[$i$$96_j$$16$$]), (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $index$$107$$, $levelIdx$$1$$) == $startIndex$$11$$) {
            $labelIndex$$1$$ = $index$$107$$;
            break
          }
        }
        for($i$$96_j$$16$$ = $labelIndex$$1$$;$i$$96_j$$16$$ < $closeParen_labels$$2$$.length;$i$$96_j$$16$$++) {
          if($index$$107$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($closeParen_labels$$2$$[$i$$96_j$$16$$]), this.$_axisInfo$.$getPosition$($index$$107$$, $levelIdx$$1$$) == $groupIndex$$) {
            if(0 == $subId$$1_title$$8$$.length) {
              return $closeParen_labels$$2$$[$i$$96_j$$16$$].$getElem$()
            }
            $startIndex$$11$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $index$$107$$, $levelIdx$$1$$);
            break
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.getDomElementForSubId = D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtAxisDefaults$$ = function $$DvtAxisDefaults$$$() {
  this.Init({skyros:D.$DvtAxisDefaults$VERSION_1$$, alta:D.$DvtAxisDefaults$SKIN_ALTA$$, next:D.$DvtAxisDefaults$SKIN_NEXT$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAxisDefaults");
D.$DvtAxisDefaults$SKIN_NEXT$$ = {skin:"next", layout:{titleGap:6}};
D.$DvtAxisDefaults$SKIN_ALTA$$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)", baselineColor:"auto"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.$DvtAxisDefaults$VERSION_1$$ = {position:D.$JSCompiler_alias_NULL$$, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, 
titleStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px; color: #737373;"), startGroupOffset:0, endGroupOffset:0, layout:{titleGap:4, radialLabelGap:5, insideLabelGapWidth:4, insideLabelGapHeight:2, hierarchicalLabelGapHeight:8, hierarchicalLabelGapWidth:15}, _locale:"en-us"};
D.$DvtAxisDefaults$getGapSize$$ = function $$DvtAxisDefaults$getGapSize$$$($axis$$48$$, $defaultSize$$) {
  var $scalingFactor$$ = window.Math.min(D.$DvtTextUtils$$.$getTextStringHeight$($axis$$48$$.$getCtx$(), $axis$$48$$.$getOptions$().tickLabel.style) / 14, 1);
  return window.Math.ceil($defaultSize$$ * $scalingFactor$$)
};
D.$DvtAxisEventManager$$ = function $$DvtAxisEventManager$$$($axis$$49$$) {
  this.Init($axis$$49$$.$getCtx$(), $axis$$49$$.$processEvent$, $axis$$49$$);
  this.$_axis$ = $axis$$49$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisEventManager$$, D.$DvtEventManager$$, "DvtAxisEventManager");
D.$DvtAxisEventManager$getUIEventParams$$ = function $$DvtAxisEventManager$getUIEventParams$$$($type$$59$$, $id$$21$$, $index$$108$$, $level$$37$$) {
  return{type:$type$$59$$, id:$id$$21$$, index:$index$$108$$, level:$level$$37$$}
};
D.$DvtAxisEventManager$$.prototype.$FireUIEvent$ = function $$DvtAxisEventManager$$$$$FireUIEvent$$($type$$60$$, $logicalObj$$1$$) {
  $logicalObj$$1$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$1$$.$getParams$() != D.$JSCompiler_alias_NULL$$ && this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$60$$, $logicalObj$$1$$.$getParams$()), this.$_axis$)
};
D.$DvtAxisEventManager$$.prototype.$OnClick$ = function $$DvtAxisEventManager$$$$$OnClick$$($event$$99$$) {
  D.$DvtAxisEventManager$$.$superclass$.$OnClick$.call(this, $event$$99$$);
  var $obj$$48$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$99$$.target);
  $obj$$48$$ && this.$_processActionEvent$($obj$$48$$) && $event$$99$$.stopPropagation()
};
D.$DvtAxisEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtAxisEventManager$$$$$HandleTouchClickInternal$$($evt$$16_touchEvent$$) {
  var $obj$$49$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$16_touchEvent$$.target);
  $obj$$49$$ && ($evt$$16_touchEvent$$ = $evt$$16_touchEvent$$.$touchEvent$, this.$_processActionEvent$($obj$$49$$) && $evt$$16_touchEvent$$ && $evt$$16_touchEvent$$.preventDefault())
};
D.$DvtAxisEventManager$$.prototype.$_processActionEvent$ = function $$DvtAxisEventManager$$$$$_processActionEvent$$($obj$$50$$) {
  return $obj$$50$$ && $obj$$50$$.$getAction$ && $obj$$50$$.$getAction$() ? (this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$50$$.$getAction$(), $obj$$50$$.getId()), this.$_axis$), D.$JSCompiler_alias_TRUE$$) : $obj$$50$$ instanceof D.$DvtAxisObjPeer$$ && $obj$$50$$.$isDrillable$() ? (this.$FireEvent$(new D.$DvtDrillEvent$$($obj$$50$$.getId(), D.$JSCompiler_alias_NULL$$, $obj$$50$$.$getGroup$()), this.$_axis$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisRenderer$$, D.$DvtObj$$, "DvtAxisRenderer");
D.$DvtAxisRenderer$$.$getPreferredSize$ = function $$DvtAxisRenderer$$$$getPreferredSize$$($axis$$52_innerLabelWidth_innerLabels$$, $availWidth$$4$$, $availHeight$$4$$) {
  var $axisInfo$$1_outerLabelWidth_outerLabels$$ = D.$DvtAxisRenderer$$.$_createAxisInfo$($axis$$52_innerLabelWidth_innerLabels$$, new D.$DvtRectangle$$(0, 0, $availWidth$$4$$, $availHeight$$4$$)), $context$$11$$ = $axis$$52_innerLabelWidth_innerLabels$$.$getCtx$(), $labelHeight_options$$11$$ = $axis$$52_innerLabelWidth_innerLabels$$.$getOptions$(), $size$$14$$ = 0, $bHoriz$$ = "top" == $labelHeight_options$$11$$.position || "bottom" == $labelHeight_options$$11$$.position;
  if("off" == $labelHeight_options$$11$$.rendered || 0 >= $availWidth$$4$$ || 0 >= $availHeight$$4$$) {
    return $bHoriz$$ ? new D.$DvtDimension$$($availWidth$$4$$, 0) : new D.$DvtDimension$$(0, $availHeight$$4$$)
  }
  $labelHeight_options$$11$$.title && ($size$$14$$ = D.$DvtTextUtils$$.$getTextStringHeight$($context$$11$$, $labelHeight_options$$11$$.titleStyle) + D.$DvtAxisRenderer$$.$_getTitleGap$($axis$$52_innerLabelWidth_innerLabels$$), $bHoriz$$ ? $availHeight$$4$$ -= $size$$14$$ : $availWidth$$4$$ -= $size$$14$$);
  "on" == $labelHeight_options$$11$$.tickLabel.rendered && "inside" != $labelHeight_options$$11$$.tickLabel.position && ($bHoriz$$ ? ($labelHeight_options$$11$$ = D.$DvtTextUtils$$.$getTextStringHeight$($context$$11$$, $labelHeight_options$$11$$.tickLabel.style), $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtDataAxisInfo$$ ? $size$$14$$ += $labelHeight_options$$11$$ : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtTimeAxisInfo$$ ? $size$$14$$ += $axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$11$$, 
  1) != D.$JSCompiler_alias_NULL$$ ? 2 * $labelHeight_options$$11$$ : $labelHeight_options$$11$$ : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtGroupAxisInfo$$ && ($size$$14$$ = D.$DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($axis$$52_innerLabelWidth_innerLabels$$, $axisInfo$$1_outerLabelWidth_outerLabels$$, $size$$14$$, $availHeight$$4$$, $bHoriz$$))) : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtDataAxisInfo$$ ? $size$$14$$ += D.$DvtTextUtils$$.$getMaxTextDimensions$($axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$11$$)).$w$ : 
  $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtTimeAxisInfo$$ ? ($axis$$52_innerLabelWidth_innerLabels$$ = $axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$11$$), $axis$$52_innerLabelWidth_innerLabels$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($axis$$52_innerLabelWidth_innerLabels$$).$w$, $axisInfo$$1_outerLabelWidth_outerLabels$$ = $axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$11$$, 1), $axisInfo$$1_outerLabelWidth_outerLabels$$ = $axisInfo$$1_outerLabelWidth_outerLabels$$ != 
  D.$JSCompiler_alias_NULL$$ ? D.$DvtTextUtils$$.$getMaxTextDimensions$($axisInfo$$1_outerLabelWidth_outerLabels$$).$w$ : 0, $size$$14$$ += window.Math.max($axis$$52_innerLabelWidth_innerLabels$$, $axisInfo$$1_outerLabelWidth_outerLabels$$)) : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtGroupAxisInfo$$ && ($size$$14$$ = D.$DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($axis$$52_innerLabelWidth_innerLabels$$, $axisInfo$$1_outerLabelWidth_outerLabels$$, $size$$14$$, $availWidth$$4$$, 
  $bHoriz$$)));
  return $bHoriz$$ ? new D.$DvtDimension$$($availWidth$$4$$, window.Math.min($size$$14$$, $availHeight$$4$$)) : new D.$DvtDimension$$(window.Math.min($size$$14$$, $availWidth$$4$$), $availHeight$$4$$)
};
D.$DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($axis$$53$$, $availSpace$$3$$) {
  var $axisInfo$$2$$ = D.$DvtAxisRenderer$$.$_createAxisInfo$($axis$$53$$, $availSpace$$3$$);
  "off" != $axis$$53$$.$getOptions$().rendered && ($axis$$53$$.$__setBounds$($availSpace$$3$$.$clone$()), D.$DvtAxisRenderer$$.$_renderTitle$($axis$$53$$, $axisInfo$$2$$, $availSpace$$3$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$53$$, $axisInfo$$2$$, $availSpace$$3$$))
};
D.$DvtAxisRenderer$$.$_createAxisInfo$ = function $$DvtAxisRenderer$$$$_createAxisInfo$$($axis$$54$$, $availSpace$$4$$) {
  var $axisInfo$$3$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$54$$.$getCtx$(), $axis$$54$$.$getOptions$(), $availSpace$$4$$);
  return $axis$$54$$.$Info$ = $axisInfo$$3$$
};
D.$DvtAxisRenderer$$.$_getTitleGap$ = function $$DvtAxisRenderer$$$$_getTitleGap$$($axis$$55$$) {
  return(0,D.$DvtAxisDefaults$getGapSize$$)($axis$$55$$, $axis$$55$$.$getOptions$().layout.titleGap)
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$56_isRTL$$1$$, $axisInfo$$4$$, $availSpace$$5$$) {
  var $options$$13_title$$10$$ = $axis$$56_isRTL$$1$$.$getOptions$();
  if($options$$13_title$$10$$.title) {
    var $position$$2$$ = $options$$13_title$$10$$.position;
    if(!("radial" == $position$$2$$ || "tangential" == $position$$2$$)) {
      var $bHoriz$$1_gap$$1$$ = "top" == $options$$13_title$$10$$.position || "bottom" == $options$$13_title$$10$$.position;
      if($options$$13_title$$10$$ = D.$DvtAxisRenderer$$.$_createText$($axis$$56_isRTL$$1$$.$__getEventManager$(), $axis$$56_isRTL$$1$$, $options$$13_title$$10$$.title, $options$$13_title$$10$$.titleStyle, $bHoriz$$1_gap$$1$$ ? $availSpace$$5$$.$w$ : $availSpace$$5$$.$h$, $bHoriz$$1_gap$$1$$ ? $availSpace$$5$$.$h$ : $availSpace$$5$$.$w$)) {
        var $bHoriz$$1_gap$$1$$ = D.$DvtAxisRenderer$$.$_getTitleGap$($axis$$56_isRTL$$1$$), $overflow$$ = ($axisInfo$$4$$.$getStartOverflow$() - $axisInfo$$4$$.$getEndOverflow$()) / 2;
        $axis$$56_isRTL$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$56_isRTL$$1$$.$getCtx$());
        var $titleHeight$$ = D.$DvtTextUtils$$.$getTextHeight$($options$$13_title$$10$$);
        $options$$13_title$$10$$.$alignCenter$();
        "top" == $position$$2$$ ? ($options$$13_title$$10$$.$setX$($availSpace$$5$$.x + $overflow$$ + $availSpace$$5$$.$w$ / 2), $options$$13_title$$10$$.$setY$($availSpace$$5$$.y), $availSpace$$5$$.y += $titleHeight$$ + $bHoriz$$1_gap$$1$$, $availSpace$$5$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$1$$) : "bottom" == $position$$2$$ ? ($options$$13_title$$10$$.$setX$($availSpace$$5$$.x + $overflow$$ + $availSpace$$5$$.$w$ / 2), $options$$13_title$$10$$.$setY$($availSpace$$5$$.y + $availSpace$$5$$.$h$ - 
        $titleHeight$$), $availSpace$$5$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$1$$) : "left" == $position$$2$$ ? ($options$$13_title$$10$$.$alignMiddle$(), $options$$13_title$$10$$.$setRotation$($axis$$56_isRTL$$1$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($options$$13_title$$10$$, $availSpace$$5$$.x + $titleHeight$$ / 2, $availSpace$$5$$.y + $availSpace$$5$$.$h$ / 2), $availSpace$$5$$.x += $titleHeight$$ + $bHoriz$$1_gap$$1$$, $availSpace$$5$$.$w$ -= 
        $titleHeight$$ + $bHoriz$$1_gap$$1$$) : "right" == $position$$2$$ && ($options$$13_title$$10$$.$alignMiddle$(), $options$$13_title$$10$$.$setRotation$($axis$$56_isRTL$$1$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($options$$13_title$$10$$, $availSpace$$5$$.x + $availSpace$$5$$.$w$ - $titleHeight$$ / 2, $availSpace$$5$$.y + $availSpace$$5$$.$h$ / 2), $availSpace$$5$$.$w$ -= $titleHeight$$ + $bHoriz$$1_gap$$1$$);
        $axisInfo$$4$$.$_title$ = $options$$13_title$$10$$
      }
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$57$$, $axisInfo$$5$$, $availSpace$$6$$) {
  var $options$$14_position$$3$$ = $axis$$57$$.$getOptions$();
  "on" == $options$$14_position$$3$$.tickLabel.rendered && ($options$$14_position$$3$$ = $options$$14_position$$3$$.position, "top" == $options$$14_position$$3$$ || "bottom" == $options$$14_position$$3$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$57$$, $axisInfo$$5$$, $availSpace$$6$$) : "tangential" == $options$$14_position$$3$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$57$$, $axisInfo$$5$$, $availSpace$$6$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$57$$, $axisInfo$$5$$, 
  $availSpace$$6$$), D.$DvtAxisRenderer$$.$_renderGroupSeparators$($axis$$57$$, $axisInfo$$5$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$58$$, $axisInfo$$6$$, $availSpace$$7$$) {
  for(var $lv2Labels_options$$15$$ = $axis$$58$$.$getOptions$(), $offset$$15_position$$4$$ = $lv2Labels_options$$15$$.position, $isTickInside_maxOverflow$$ = "inside" == $lv2Labels_options$$15$$.tickLabel.position, $isRTL$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$58$$.$getCtx$()), $isGroupAxis_minOverflow$$ = $axisInfo$$6$$ instanceof D.$DvtGroupAxisInfo$$, $isHierarchical_overflow1_x$$68$$ = $isGroupAxis_minOverflow$$ && 1 < $axisInfo$$6$$.$getNumLevels$(), $levelIdx$$3_overflow2$$ = $isHierarchical_overflow1_x$$68$$ ? 
  0 : D.$JSCompiler_alias_NULL$$, $labels$$7$$ = $axisInfo$$6$$.$getLabels$($axis$$58$$.$getCtx$(), $levelIdx$$3_overflow2$$), $gap$$2$$ = $isHierarchical_overflow1_x$$68$$ ? (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$58$$, $lv2Labels_options$$15$$.layout.hierarchicalLabelGapHeight) : 0;$labels$$7$$;) {
    for(var $height$$35_index$$113$$ = 0, $maxLvlHeight$$ = 0, $i$$99$$ = 0;$i$$99$$ < $labels$$7$$.length;$i$$99$$++) {
      var $label$$13$$ = $labels$$7$$[$i$$99$$];
      if($label$$13$$ != D.$JSCompiler_alias_NULL$$) {
        if($axisInfo$$6$$.$isLabelRotated$($levelIdx$$3_overflow2$$)) {
          if(!D.$DvtTextUtils$$.$fitText$($label$$13$$, $availSpace$$7$$.$h$, $availSpace$$7$$.$w$, $axis$$58$$)) {
            continue
          }
          $isRTL$$2$$ ? $label$$13$$.$alignLeft$() : $label$$13$$.$alignRight$();
          $isHierarchical_overflow1_x$$68$$ ? ($height$$35_index$$113$$ = D.$DvtTextUtils$$.$getTextStringWidth$($axis$$58$$.$getCtx$(), $label$$13$$.$getTextString$(), $label$$13$$.$getCSSStyle$()), $label$$13$$.$setTranslateY$($availSpace$$7$$.$h$ - $height$$35_index$$113$$), $maxLvlHeight$$ = window.Math.max($maxLvlHeight$$, $height$$35_index$$113$$)) : $label$$13$$.$setTranslateY$($availSpace$$7$$.y)
        }else {
          if(!$isTickInside_maxOverflow$$ && D.$DvtTextUtils$$.$guessTextDimensions$($label$$13$$).$h$ - 1 > $availSpace$$7$$.$h$) {
            continue
          }
          $isHierarchical_overflow1_x$$68$$ && "bottom" == $offset$$15_position$$4$$ ? $label$$13$$.$setY$($availSpace$$7$$.$h$) : "bottom" == $offset$$15_position$$4$$ ? $label$$13$$.$setY$($availSpace$$7$$.y) : $label$$13$$.$setY$($availSpace$$7$$.y + $availSpace$$7$$.$h$);
          !$isHierarchical_overflow1_x$$68$$ && ("bottom" == $offset$$15_position$$4$$ && !$isTickInside_maxOverflow$$ || "top" == $offset$$15_position$$4$$ && $isTickInside_maxOverflow$$) ? $label$$13$$.$alignTop$() : $isHierarchical_overflow1_x$$68$$ && "top" == $offset$$15_position$$4$$ ? $label$$13$$.$alignTop$() : $label$$13$$.$alignBottom$();
          if($isHierarchical_overflow1_x$$68$$) {
            $maxLvlHeight$$ = window.Math.max($maxLvlHeight$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$13$$).$h$)
          }else {
            if($isTickInside_maxOverflow$$) {
              var $gap$$2$$ = (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$58$$, $lv2Labels_options$$15$$.layout.insideLabelGapWidth);
              $isRTL$$2$$ ? $label$$13$$.$alignRight$() : $label$$13$$.$alignLeft$();
              $label$$13$$.$setX$($label$$13$$.$getX$() + $gap$$2$$ * ($isRTL$$2$$ ? -1 : 1))
            }
          }
        }
        var $height$$35_index$$113$$ = $isGroupAxis_minOverflow$$ ? (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($label$$13$$) : $i$$99$$, $datatip$$2$$ = $axisInfo$$6$$.$getDatatip$($height$$35_index$$113$$, $levelIdx$$3_overflow2$$), $tooltip$$2$$ = $label$$13$$.$getUntruncatedTextString$(), $action$$5$$ = $axisInfo$$6$$.$getAction$($height$$35_index$$113$$, $levelIdx$$3_overflow2$$), $drillable$$2$$ = $axisInfo$$6$$.$isDrillable$($height$$35_index$$113$$, $levelIdx$$3_overflow2$$), $group$$6$$ = 
        $axisInfo$$6$$.$getGroup$($height$$35_index$$113$$, $levelIdx$$3_overflow2$$);
        $axis$$58$$.$__getEventManager$().$associate$($label$$13$$, new D.$DvtAxisObjPeer$$($axis$$58$$, $label$$13$$, $group$$6$$, $action$$5$$, $drillable$$2$$, $tooltip$$2$$, $datatip$$2$$, (0,D.$DvtAxisEventManager$getUIEventParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $label$$13$$.$getTextString$(), $height$$35_index$$113$$, $levelIdx$$3_overflow2$$)));
        $axis$$58$$.$addChild$($label$$13$$);
        $isHierarchical_overflow1_x$$68$$ ? $axisInfo$$6$$.$_lastRenderedLevel$ = $levelIdx$$3_overflow2$$ : $maxLvlHeight$$ = window.Math.max($maxLvlHeight$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$13$$).$h$)
      }
    }
    $isHierarchical_overflow1_x$$68$$ ? ($availSpace$$7$$.y += $maxLvlHeight$$ + $gap$$2$$, $availSpace$$7$$.$h$ -= $maxLvlHeight$$ + $gap$$2$$, $levelIdx$$3_overflow2$$++, $labels$$7$$ = $axisInfo$$6$$.$getLabels$($axis$$58$$.$getCtx$(), $levelIdx$$3_overflow2$$)) : ($availSpace$$7$$.y += $maxLvlHeight$$, $availSpace$$7$$.$h$ -= $maxLvlHeight$$, $labels$$7$$ = D.$JSCompiler_alias_NULL$$)
  }
  if($axisInfo$$6$$ instanceof D.$DvtTimeAxisInfo$$ && ($labels$$7$$ = $axisInfo$$6$$.$getLabels$($axis$$58$$.$getCtx$()), $lv2Labels_options$$15$$ = $axisInfo$$6$$.$getLabels$($axis$$58$$.$getCtx$(), 1), $offset$$15_position$$4$$ = 0, $lv2Labels_options$$15$$ != D.$JSCompiler_alias_NULL$$)) {
    for($i$$99$$ = 0;$i$$99$$ < $lv2Labels_options$$15$$.length;$i$$99$$++) {
      $label$$13$$ = $lv2Labels_options$$15$$[$i$$99$$], $label$$13$$ != D.$JSCompiler_alias_NULL$$ && !(D.$DvtTextUtils$$.$guessTextDimensions$($label$$13$$).$h$ - 1 > $availSpace$$7$$.$h$) && ($axis$$58$$.$__getEventManager$().$associate$($label$$13$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtAxisEventManager$getUIEventParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $label$$13$$.$getTextString$()))), $levelIdx$$3_overflow2$$ = 
      $isHierarchical_overflow1_x$$68$$ = 0, $isTickInside_maxOverflow$$ = $axisInfo$$6$$.$getOptions$()._maxOverflowCoord, $isGroupAxis_minOverflow$$ = $axisInfo$$6$$.$getOptions$()._minOverflowCoord, $labels$$7$$[$i$$99$$] != D.$JSCompiler_alias_NULL$$ && ($offset$$15_position$$4$$ = $labels$$7$$[$i$$99$$].$measureDimensions$().$w$ / 2, $isHierarchical_overflow1_x$$68$$ = $axisInfo$$6$$.$_level1Overflow$[$i$$99$$], $levelIdx$$3_overflow2$$ = $axisInfo$$6$$.$_level2Overflow$[$i$$99$$]), 0 == $isHierarchical_overflow1_x$$68$$ && 
      0 == $levelIdx$$3_overflow2$$ ? ($isHierarchical_overflow1_x$$68$$ = $label$$13$$.$getX$(), $label$$13$$.$setX$($isRTL$$2$$ ? $isHierarchical_overflow1_x$$68$$ + $offset$$15_position$$4$$ <= $isTickInside_maxOverflow$$ ? $isHierarchical_overflow1_x$$68$$ + $offset$$15_position$$4$$ : $isTickInside_maxOverflow$$ : $isHierarchical_overflow1_x$$68$$ - $offset$$15_position$$4$$ >= $isGroupAxis_minOverflow$$ ? $isHierarchical_overflow1_x$$68$$ - $offset$$15_position$$4$$ : $isGroupAxis_minOverflow$$)) : 
      0 > $isHierarchical_overflow1_x$$68$$ ? $label$$13$$.$setX$($isGroupAxis_minOverflow$$) : 0 < $isHierarchical_overflow1_x$$68$$ && $label$$13$$.$setX$($isTickInside_maxOverflow$$), $label$$13$$.$alignTop$(), $label$$13$$.$setY$($availSpace$$7$$.y), $axis$$58$$.$addChild$($label$$13$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$59$$, $axisInfo$$7$$, $availSpace$$8$$) {
  var $options$$16$$ = $axis$$59$$.$getOptions$(), $position$$5$$ = $options$$16$$.position, $isRTL$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$59$$.$getCtx$()), $isNumerical$$ = $axisInfo$$7$$ instanceof D.$DvtDataAxisInfo$$, $isTickInside$$1$$ = "inside" == $options$$16$$.tickLabel.position, $labels$$8$$, $gap$$3_lv2Labels$$1$$, $maxLvlWidth$$, $isGroupAxis$$1$$ = $axisInfo$$7$$ instanceof D.$DvtGroupAxisInfo$$, $isHierarchical$$1$$ = $isGroupAxis$$1$$ && 1 < $axisInfo$$7$$.$getNumLevels$(), 
  $levelIdx$$4$$ = $isHierarchical$$1$$ ? 0 : D.$JSCompiler_alias_NULL$$;
  $labels$$8$$ = $axisInfo$$7$$.$getLabels$($axis$$59$$.$getCtx$(), $levelIdx$$4$$);
  var $labelX$$ = 0;
  $isHierarchical$$1$$ ? ($gap$$3_lv2Labels$$1$$ = (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$59$$, $options$$16$$.layout.hierarchicalLabelGapWidth), $maxLvlWidth$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$) : "radial" == $position$$5$$ ? ($gap$$3_lv2Labels$$1$$ = (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$59$$, $options$$16$$.layout.radialLabelGap), $labelX$$ = $availSpace$$8$$.x + $availSpace$$8$$.$w$ / 2, $labelX$$ = $isRTL$$3$$ ? $labelX$$ + ($gap$$3_lv2Labels$$1$$ + D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$) : 
  $labelX$$ - $gap$$3_lv2Labels$$1$$) : "left" == $position$$5$$ ? ($labelX$$ = $availSpace$$8$$.x + $availSpace$$8$$.$w$, $isNumerical$$ && $isTickInside$$1$$ && ($labelX$$ += D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$)) : ($labelX$$ = $availSpace$$8$$.x, $isNumerical$$ && !$isTickInside$$1$$ && ($labelX$$ += D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$));
  for(var $formatLabelVert$$ = function $$formatLabelVert$$$($gap$$3_lv2Labels$$1$$, $formatLabelVert$$) {
    if(!($isHierarchical$$1$$ && D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$ - 1 > $availSpace$$8$$.$w$) && ($isHierarchical$$1$$ || $isTickInside$$1$$ || D.$DvtTextUtils$$.$fitText$($gap$$3_lv2Labels$$1$$, $availSpace$$8$$.$w$, $availSpace$$8$$.$h$, $axis$$59$$))) {
      $formatLabelVert$$ = $isGroupAxis$$1$$ ? (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($gap$$3_lv2Labels$$1$$) : $formatLabelVert$$;
      var $label$$14$$ = $axisInfo$$7$$.$getDatatip$($formatLabelVert$$, $levelIdx$$4$$), $i$$100$$ = $gap$$3_lv2Labels$$1$$.$getUntruncatedTextString$(), $action$$6_bbox$$2_cmd_padding$$4$$ = $axisInfo$$7$$.$getAction$($formatLabelVert$$, $levelIdx$$4$$), $bgColor$$5_drillable$$3$$ = $axisInfo$$7$$.$isDrillable$($formatLabelVert$$, $levelIdx$$4$$), $group$$7$$ = $axisInfo$$7$$.$getGroup$($formatLabelVert$$, $levelIdx$$4$$);
      $axis$$59$$.$__getEventManager$().$associate$($gap$$3_lv2Labels$$1$$, new D.$DvtAxisObjPeer$$($axis$$59$$, $gap$$3_lv2Labels$$1$$, $group$$7$$, $action$$6_bbox$$2_cmd_padding$$4$$, $bgColor$$5_drillable$$3$$, $i$$100$$, $label$$14$$, (0,D.$DvtAxisEventManager$getUIEventParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $gap$$3_lv2Labels$$1$$.$getTextString$(), $formatLabelVert$$, $levelIdx$$4$$)));
      $isHierarchical$$1$$ ? ($gap$$3_lv2Labels$$1$$.$alignRight$(), $gap$$3_lv2Labels$$1$$.$setX$($isRTL$$3$$ ? $availSpace$$8$$.$w$ : $availSpace$$8$$.x + $maxLvlWidth$$), $axisInfo$$7$$.$_lastRenderedLevel$ = $levelIdx$$4$$) : ($gap$$3_lv2Labels$$1$$.$setX$($labelX$$), !$isNumerical$$ && "right" == $position$$5$$ ? $gap$$3_lv2Labels$$1$$.$alignLeft$() : $gap$$3_lv2Labels$$1$$.$alignRight$(), $isTickInside$$1$$ && ($gap$$3_lv2Labels$$1$$.$alignBottom$(), $gap$$3_lv2Labels$$1$$.$setY$($gap$$3_lv2Labels$$1$$.$getY$() - 
      (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$59$$, $options$$16$$.layout.insideLabelGapHeight))), "radial" == $position$$5$$ && ($label$$14$$ = $gap$$3_lv2Labels$$1$$.$getY$(), $gap$$3_lv2Labels$$1$$.$setY$($availSpace$$8$$.y + $availSpace$$8$$.$h$ / 2 - $label$$14$$), $i$$100$$ = $gap$$3_lv2Labels$$1$$.$getDimensions$(), $action$$6_bbox$$2_cmd_padding$$4$$ = 0.15 * $i$$100$$.$h$, $action$$6_bbox$$2_cmd_padding$$4$$ = D.$DvtPathUtils$$.$roundedRectangle$($i$$100$$.x - $action$$6_bbox$$2_cmd_padding$$4$$, 
      $i$$100$$.y, $i$$100$$.$w$ + 2 * $action$$6_bbox$$2_cmd_padding$$4$$, $i$$100$$.$h$, 2, 2, 2, 2), $action$$6_bbox$$2_cmd_padding$$4$$ = new D.$DvtPath$$($axis$$59$$.$getCtx$(), $action$$6_bbox$$2_cmd_padding$$4$$), $bgColor$$5_drillable$$3$$ = $gap$$3_lv2Labels$$1$$.$getCSSStyle$().$getStyle$("background-color"), $label$$14$$ = $label$$14$$ + $i$$100$$.$h$ / 2 > $axisInfo$$7$$.$getEndCoord$() && "circle" == $axis$$59$$.$getOptions$().polarGridShape ? 1 : 0.3, $bgColor$$5_drillable$$3$$ ? $action$$6_bbox$$2_cmd_padding$$4$$.$setSolidFill$($bgColor$$5_drillable$$3$$) : 
      $action$$6_bbox$$2_cmd_padding$$4$$.$setSolidFill$("#FFFFFF", $label$$14$$), $axis$$59$$.$addChild$($action$$6_bbox$$2_cmd_padding$$4$$)));
      $axis$$59$$.$addChild$($gap$$3_lv2Labels$$1$$)
    }
  };$labels$$8$$;) {
    for(var $i$$100$$ = 0;$i$$100$$ < $labels$$8$$.length;$i$$100$$++) {
      var $label$$14$$ = $labels$$8$$[$i$$100$$];
      $label$$14$$ != D.$JSCompiler_alias_NULL$$ && $formatLabelVert$$($label$$14$$, $i$$100$$)
    }
    if($isHierarchical$$1$$) {
      $availSpace$$8$$.x += $maxLvlWidth$$ + $gap$$3_lv2Labels$$1$$, $availSpace$$8$$.$w$ -= $maxLvlWidth$$ + $gap$$3_lv2Labels$$1$$, $levelIdx$$4$$++, $maxLvlWidth$$ = ($labels$$8$$ = $axisInfo$$7$$.$getLabels$($axis$$59$$.$getCtx$(), $levelIdx$$4$$)) ? D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$ : D.$JSCompiler_alias_NULL$$
    }else {
      break
    }
  }
  if($axisInfo$$7$$ instanceof D.$DvtTimeAxisInfo$$ && ($gap$$3_lv2Labels$$1$$ = $axisInfo$$7$$.$getLabels$($axis$$59$$.$getCtx$(), 1), $gap$$3_lv2Labels$$1$$ != D.$JSCompiler_alias_NULL$$)) {
    for($i$$100$$ = 0;$i$$100$$ < $gap$$3_lv2Labels$$1$$.length;$i$$100$$++) {
      $label$$14$$ = $gap$$3_lv2Labels$$1$$[$i$$100$$], $label$$14$$ != D.$JSCompiler_alias_NULL$$ && $formatLabelVert$$($label$$14$$, $i$$100$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$60$$, $axisInfo$$8$$, $availSpace$$9$$) {
  for(var $labels$$9$$ = $axisInfo$$8$$.$getLabels$($axis$$60$$.$getCtx$()), $i$$101$$ = 0;$i$$101$$ < $labels$$9$$.length;$i$$101$$++) {
    var $label$$16$$ = $labels$$9$$[$i$$101$$];
    if($label$$16$$ != D.$JSCompiler_alias_NULL$$) {
      var $index$$115_maxWidth$$2$$ = $availSpace$$9$$.$w$ / 2 - window.Math.abs($label$$16$$.$getX$()), $datatip$$4_maxHeight$$1$$ = $availSpace$$9$$.$h$ / 2 - window.Math.abs($label$$16$$.$getY$());
      if(D.$DvtTextUtils$$.$fitText$($label$$16$$, $index$$115_maxWidth$$2$$, $datatip$$4_maxHeight$$1$$, $axis$$60$$)) {
        var $index$$115_maxWidth$$2$$ = $axisInfo$$8$$ instanceof D.$DvtGroupAxisInfo$$ ? (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($label$$16$$) : $i$$101$$, $datatip$$4_maxHeight$$1$$ = $axisInfo$$8$$.$getDatatip$($index$$115_maxWidth$$2$$), $tooltip$$4$$ = $label$$16$$.$getUntruncatedTextString$(), $action$$7$$ = $axisInfo$$8$$.$getAction$($index$$115_maxWidth$$2$$), $drillable$$4$$ = $axisInfo$$8$$.$isDrillable$($index$$115_maxWidth$$2$$), $group$$8$$ = $axisInfo$$8$$.$getGroup$($index$$115_maxWidth$$2$$);
        $axis$$60$$.$__getEventManager$().$associate$($label$$16$$, new D.$DvtAxisObjPeer$$($axis$$60$$, $label$$16$$, $group$$8$$, $action$$7$$, $drillable$$4$$, $tooltip$$4$$, $datatip$$4_maxHeight$$1$$, (0,D.$DvtAxisEventManager$getUIEventParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $label$$16$$.$getTextString$(), $index$$115_maxWidth$$2$$)));
        $label$$16$$.$setTranslateX$($availSpace$$9$$.x + $availSpace$$9$$.$w$ / 2);
        $label$$16$$.$setTranslateY$($availSpace$$9$$.y + $availSpace$$9$$.$h$ / 2);
        $axis$$60$$.$addChild$($label$$16$$)
      }
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$5$$, $container$$9$$, $text$$38_textString$$5$$, $cssStyle$$22$$, $width$$32$$, $height$$36$$) {
  var $params$$6$$ = (0,D.$DvtAxisEventManager$getUIEventParams$$)(D.$DvtAxisConstants$$.$TITLE$);
  $text$$38_textString$$5$$ = new D.$DvtOutputText$$($container$$9$$.$getCtx$(), $text$$38_textString$$5$$, 0, 0);
  $text$$38_textString$$5$$.$setCSSStyle$($cssStyle$$22$$);
  return D.$DvtTextUtils$$.$fitText$($text$$38_textString$$5$$, $width$$32$$, $height$$36$$, $container$$9$$) ? ($eventManager$$5$$.$associate$($text$$38_textString$$5$$, new D.$DvtSimpleObjPeer$$($text$$38_textString$$5$$.$getUntruncatedTextString$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$6$$)), $text$$38_textString$$5$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisRenderer$$.$_renderGroupSeparators$ = function $$DvtAxisRenderer$$$$_renderGroupSeparators$$($axis$$61$$, $axisInfo$$9$$) {
  if($axisInfo$$9$$ instanceof D.$DvtGroupAxisInfo$$ && $axisInfo$$9$$.$_areSeparatorsRendered$ && !(1 >= $axisInfo$$9$$.$getNumLevels$() || 0 >= $axisInfo$$9$$.$_lastRenderedLevel$)) {
    for(var $endOffset_options$$17$$ = $axis$$61$$.$getOptions$(), $isHoriz_position$$6$$ = $endOffset_options$$17$$.position, $isHoriz_position$$6$$ = "top" == $isHoriz_position$$6$$ || "bottom" == $isHoriz_position$$6$$, $isRTL$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$61$$.$getCtx$()), $lineStroke$$ = new D.$DvtSolidStroke$$($axisInfo$$9$$.$_separatorColor$, 1, 1), $prevLevelSize$$ = 0, $gap$$4$$ = $isHoriz_position$$6$$ ? (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$61$$, $endOffset_options$$17$$.layout.hierarchicalLabelGapHeight) : 
    (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$61$$, $endOffset_options$$17$$.layout.hierarchicalLabelGapWidth), $startOffset$$ = $endOffset_options$$17$$.startGroupOffset, $endOffset_options$$17$$ = $endOffset_options$$17$$.endGroupOffset, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1$$, $start$$20_x4$$, $level$$41$$ = $axisInfo$$9$$.$_lastRenderedLevel$;0 <= $level$$41$$;$level$$41$$--) {
      var $labels$$10$$ = $axisInfo$$9$$.$getLabels$($axis$$61$$.$getCtx$(), $level$$41$$);
      $maxDims_x1$$4$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$10$$);
      var $isRotated$$ = $axisInfo$$9$$.$isLabelRotated$($level$$41$$), $levelSize$$ = $isRotated$$ || !$isHoriz_position$$6$$ ? $maxDims_x1$$4$$.$w$ : $maxDims_x1$$4$$.$h$;
      if(0 != $levelSize$$) {
        var $nextLabel_prevLabelRendered$$ = D.$JSCompiler_alias_FALSE$$, $prevLabelEmpty$$ = D.$JSCompiler_alias_NULL$$;
        if($level$$41$$ < $axisInfo$$9$$.$_lastRenderedLevel$) {
          for(var $i$$102$$ = 0;$i$$102$$ < $labels$$10$$.length;$i$$102$$++) {
            var $label$$17$$ = $labels$$10$$[$i$$102$$];
            if($label$$17$$ != D.$JSCompiler_alias_NULL$$) {
              var $index$$116$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($label$$17$$), $isEmptyLabel$$ = 0 == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axisInfo$$9$$, $index$$116$$, $level$$41$$).length;
              if(!$isEmptyLabel$$) {
                var $eraseCornerEdge$$ = $isEmptyLabel$$ && 0 == $level$$41$$ && (0 == $index$$116$$ || $index$$116$$ == $labels$$10$$.length - 1), $isFirstLabel$$ = $label$$17$$ && $labels$$10$$[$index$$116$$ - 1] == D.$JSCompiler_alias_NULL$$, $isLastLabel_spacing$$ = $label$$17$$ && $labels$$10$$[$index$$116$$ + 1] == D.$JSCompiler_alias_NULL$$;
                $start$$20_x4$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)($axisInfo$$9$$, $index$$116$$, $level$$41$$);
                var $drawLeftLine_end$$5$$ = $axisInfo$$9$$.$getEndIndex$($index$$116$$, $level$$41$$);
                if($isHoriz_position$$6$$) {
                  if($label$$17$$ && ($maxDims_x1$$4$$ = $axisInfo$$9$$.$getCoordAt$($start$$20_x4$$ - $startOffset$$), $x3_y1$$3$$ = !$isRotated$$ ? $label$$17$$.$getY$() - $levelSize$$ / 2 - $prevLevelSize$$ - $gap$$4$$ : $label$$17$$.$getY$() + 0.5 * $prevLevelSize$$, $x2$$2$$ = $axisInfo$$9$$.$getCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$17$$), $y2$$1$$ = !$isRotated$$ ? $label$$17$$.$getY$() - $levelSize$$ / 2 : $label$$17$$.$getY$() + $levelSize$$ + $prevLevelSize$$ + 2 * $gap$$4$$, 
                  (!$isEmptyLabel$$ || !$eraseCornerEdge$$) && ($nextLabel_prevLabelRendered$$ == D.$JSCompiler_alias_FALSE$$ && $maxDims_x1$$4$$ != D.$JSCompiler_alias_NULL$$) && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1$$, $maxDims_x1$$4$$, $x3_y1$$3$$), $x2$$2$$ != D.$JSCompiler_alias_NULL$$ && !$eraseCornerEdge$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $x2$$2$$, $y2$$1$$, $x2$$2$$, $x3_y1$$3$$)), !$isEmptyLabel$$) {
                    if($label$$17$$) {
                      var $labelWidth$$1$$ = $isRotated$$ ? D.$DvtTextUtils$$.$getTextHeight$($label$$17$$) : D.$DvtTextUtils$$.$getTextWidth$($label$$17$$)
                    }
                    $maxDims_x1$$4$$ = $isFirstLabel$$ && $prevLabelEmpty$$ == D.$JSCompiler_alias_FALSE$$ ? $axisInfo$$9$$.$getStartCoord$() : $axisInfo$$9$$.$getBoundedCoordAt$($start$$20_x4$$ - $startOffset$$);
                    $nextLabel_prevLabelRendered$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axisInfo$$9$$, $index$$116$$ + 1, $level$$41$$);
                    $x2$$2$$ = $isLastLabel_spacing$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? $axisInfo$$9$$.$getEndCoord$() : $axisInfo$$9$$.$getBoundedCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$17$$);
                    $x3_y1$$3$$ = $label$$17$$ ? $isRTL$$4$$ ? $label$$17$$.$getX$() + 0.5 * $labelWidth$$1$$ : $label$$17$$.$getX$() - 0.5 * $labelWidth$$1$$ : $axisInfo$$9$$.$getBoundedCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$17$$);
                    $start$$20_x4$$ = $label$$17$$ ? $isRTL$$4$$ ? $label$$17$$.$getX$() - 0.5 * $labelWidth$$1$$ : $label$$17$$.$getX$() + 0.5 * $labelWidth$$1$$ : $axisInfo$$9$$.$getBoundedCoordAt$($start$$20_x4$$ - $startOffset$$);
                    $label$$17$$ && ($isRotated$$ ? D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1$$, $x2$$2$$, $y2$$1$$) : ($isLastLabel_spacing$$ = $isRTL$$4$$ ? 0.5 * -D.$DvtTextUtils$$.$getTextHeight$($label$$17$$) : 0.5 * D.$DvtTextUtils$$.$getTextHeight$($label$$17$$), $drawLeftLine_end$$5$$ = $isRTL$$4$$ ? $start$$20_x4$$ + $isLastLabel_spacing$$ > $x2$$2$$ : $start$$20_x4$$ + $isLastLabel_spacing$$ < $x2$$2$$, ($isRTL$$4$$ ? $maxDims_x1$$4$$ > 
                    $x3_y1$$3$$ - $isLastLabel_spacing$$ : $maxDims_x1$$4$$ < $x3_y1$$3$$ - $isLastLabel_spacing$$) && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1$$, $x3_y1$$3$$ - $isLastLabel_spacing$$, $y2$$1$$), $drawLeftLine_end$$5$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $start$$20_x4$$ + $isLastLabel_spacing$$, $y2$$1$$, $x2$$2$$, $y2$$1$$)))
                  }
                }else {
                  $label$$17$$ && ($maxDims_x1$$4$$ = !$isRTL$$4$$ ? $label$$17$$.$getX$() + 0.5 * $gap$$4$$ : $label$$17$$.$getX$() - $levelSize$$ - 0.5 * $gap$$4$$, $x3_y1$$3$$ = $axisInfo$$9$$.$getCoordAt$($start$$20_x4$$ - $startOffset$$), $x2$$2$$ = !$isRTL$$4$$ ? $label$$17$$.$getX$() - $levelSize$$ - 0.5 * $gap$$4$$ : $label$$17$$.$getX$() + 0.5 * $gap$$4$$, $y2$$1$$ = $axisInfo$$9$$.$getCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$17$$), (!$isEmptyLabel$$ && $nextLabel_prevLabelRendered$$ == 
                  D.$JSCompiler_alias_FALSE$$ || 0 == $index$$116$$ && $isEmptyLabel$$ && 0 != $level$$41$$) && $x3_y1$$3$$ != D.$JSCompiler_alias_NULL$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $x3_y1$$3$$), $y2$$1$$ != D.$JSCompiler_alias_NULL$$ && !$eraseCornerEdge$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $x2$$2$$, $y2$$1$$, $maxDims_x1$$4$$, $y2$$1$$)), $isEmptyLabel$$ || ($x3_y1$$3$$ = $isFirstLabel$$ && 
                  $prevLabelEmpty$$ == D.$JSCompiler_alias_FALSE$$ ? 0 : $axisInfo$$9$$.$getBoundedCoordAt$($start$$20_x4$$ - $startOffset$$), $nextLabel_prevLabelRendered$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axisInfo$$9$$, $index$$116$$ + 1, $level$$41$$), $y2$$1$$ = $isLastLabel_spacing$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? $axisInfo$$9$$.$getEndCoord$() : $axisInfo$$9$$.$getBoundedCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$17$$), 
                  $label$$17$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $x2$$2$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1$$))
                }
                $nextLabel_prevLabelRendered$$ = !$isEmptyLabel$$ && $label$$17$$ != D.$JSCompiler_alias_NULL$$;
                $prevLabelEmpty$$ = $label$$17$$ != D.$JSCompiler_alias_NULL$$ || $label$$17$$ == D.$JSCompiler_alias_NULL$$ && $isEmptyLabel$$
              }
            }
          }
        }
      }
      $prevLevelSize$$ = $levelSize$$
    }
  }
};
D.$DvtAxisRenderer$$.$_addSeparatorLine$ = function $$DvtAxisRenderer$$$$_addSeparatorLine$$($axis$$62$$, $lineStroke$$1$$, $line$$5_x1$$5$$, $y1$$4$$, $x2$$3$$, $y2$$2$$) {
  $line$$5_x1$$5$$ = new D.$DvtLine$$($axis$$62$$.$getCtx$(), $line$$5_x1$$5$$, $y1$$4$$, $x2$$3$$, $y2$$2$$);
  $line$$5_x1$$5$$.$setStroke$($lineStroke$$1$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$5_x1$$5$$);
  $axis$$62$$.$addChild$($line$$5_x1$$5$$)
};
D.$DvtAxisRenderer$$.$_getGroupAxisPreferredSize$ = function $$DvtAxisRenderer$$$$_getGroupAxisPreferredSize$$($axis$$63$$, $axisInfo$$10$$, $size$$15$$, $availSize$$, $bHoriz$$2$$) {
  for(var $numLevels$$1$$ = $axisInfo$$10$$.$getNumLevels$(), $gap$$5$$ = 1 < $numLevels$$1$$ ? (0,D.$DvtAxisDefaults$getGapSize$$)($axis$$63$$, $axis$$63$$.$getOptions$().layout[$bHoriz$$2$$ ? "hierarchicalLabelGapHeight" : "hierarchicalLabelGapWidth"]) : 0, $level$$42$$ = 0;$level$$42$$ < $numLevels$$1$$;$level$$42$$++) {
    var $labelSize_labels$$11_maxDims$$1$$ = $axisInfo$$10$$.$getLabels$($axis$$63$$.$getCtx$(), $level$$42$$);
    $bHoriz$$2$$ ? ($labelSize_labels$$11_maxDims$$1$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labelSize_labels$$11_maxDims$$1$$), $labelSize_labels$$11_maxDims$$1$$ = $axisInfo$$10$$.$isLabelRotated$($level$$42$$) ? window.Math.ceil($labelSize_labels$$11_maxDims$$1$$.$w$) : $labelSize_labels$$11_maxDims$$1$$.$h$) : $labelSize_labels$$11_maxDims$$1$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labelSize_labels$$11_maxDims$$1$$).$w$;
    if($size$$15$$ + $labelSize_labels$$11_maxDims$$1$$ <= $availSize$$) {
      $size$$15$$ += $labelSize_labels$$11_maxDims$$1$$ + $gap$$5$$
    }else {
      0 == $level$$42$$ && ($size$$15$$ = $availSize$$);
      break
    }
  }
  0 != $level$$42$$ && ($size$$15$$ -= $gap$$5$$);
  return $size$$15$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$6$$, $options$$9$$, $availSpace$$1$$) {
  return $options$$9$$.timeAxisType && "disabled" != $options$$9$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$6$$, $options$$9$$, $availSpace$$1$$) : (0,window.isNaN)($options$$9$$.dataMin) && (0,window.isNaN)($options$$9$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$6$$, $options$$9$$, $availSpace$$1$$) : new D.$DvtDataAxisInfo$$($context$$6$$, $options$$9$$, $availSpace$$1$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$7$$, $options$$10$$, $availSpace$$2$$) {
  this.$_context$ = $context$$7$$;
  this.$Position$ = $options$$10$$.position;
  this.$_radius$ = $options$$10$$._radius;
  this.$_title$ = D.$JSCompiler_alias_NULL$$;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$2$$.x, this.$EndCoord$ = $availSpace$$2$$.x + $availSpace$$2$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$2$$.y, this.$EndCoord$ = $availSpace$$2$$.y + $availSpace$$2$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && ((0,D.$DvtAgent$isRightToLeft$$)($context$$7$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = D.$JSCompiler_alias_NULL$$;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  $options$$10$$.leftBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$10$$.leftBuffer = window.Infinity);
  $options$$10$$.rightBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$10$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$10$$
};
D.$JSCompiler_prototypeAlias$$.$getCtx$ = (0,D.$JSCompiler_get$$)("$_context$");
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$getLabels$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getValueAt$ = function $$JSCompiler_prototypeAlias$$$$getValueAt$$($coord$$) {
  var $minCoord$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  return $coord$$ < $minCoord$$ || $coord$$ > $maxCoord$$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedValueAt$($coord$$)
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$62$$) {
  return $value$$62$$ < this.$MinValue$ || $value$$62$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$62$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$1$$) {
  var $minCoord$$1$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$1$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$1$$ < $minCoord$$1$$ ? $coord$$1$$ = $minCoord$$1$$ : $coord$$1$$ > $maxCoord$$1$$ && ($coord$$1$$ = $maxCoord$$1$$);
  return this.$getUnboundedValueAt$($coord$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$63$$) {
  $value$$63$$ < this.$MinValue$ ? $value$$63$$ = this.$MinValue$ : $value$$63$$ >= this.$MaxValue$ && ($value$$63$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$63$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$isLabelRotated$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$10_text$$35$$, $label$$10$$, $coord$$3$$, $style$$46$$) {
  if("tangential" == this.$Position$) {
    var $vTol$$ = 16 / 180 * window.Math.PI, $hTol$$ = 1 / 180 * window.Math.PI, $offset$$14_xcoord$$ = 0.5 * this.$getTickLabelFontSize$(), $dist_ycoord$$ = this.$_radius$ + $offset$$14_xcoord$$;
    if($coord$$3$$ < $hTol$$ || $coord$$3$$ > 2 * window.Math.PI - $hTol$$) {
      $dist_ycoord$$ += $offset$$14_xcoord$$
    }
    $offset$$14_xcoord$$ = window.Math.round($dist_ycoord$$ * window.Math.sin($coord$$3$$));
    $dist_ycoord$$ = window.Math.round(-$dist_ycoord$$ * window.Math.cos($coord$$3$$));
    $context$$10_text$$35$$ = $style$$46$$ ? new D.$DvtBackgroundOutputText$$($context$$10_text$$35$$, $label$$10$$, $offset$$14_xcoord$$, $dist_ycoord$$, $style$$46$$) : new D.$DvtOutputText$$($context$$10_text$$35$$, $label$$10$$, $offset$$14_xcoord$$, $dist_ycoord$$);
    $coord$$3$$ < $hTol$$ || window.Math.abs($coord$$3$$ - window.Math.PI) < $hTol$$ || $coord$$3$$ > 2 * window.Math.PI - $hTol$$ ? $context$$10_text$$35$$.$alignCenter$() : $coord$$3$$ < window.Math.PI ? $context$$10_text$$35$$.$alignLeft$() : $context$$10_text$$35$$.$alignRight$();
    window.Math.abs($coord$$3$$ - window.Math.PI / 2) < $vTol$$ || window.Math.abs($coord$$3$$ - 3 * window.Math.PI / 2) < $vTol$$ ? $context$$10_text$$35$$.$alignMiddle$() : $coord$$3$$ < window.Math.PI / 2 || $coord$$3$$ > 3 * window.Math.PI / 2 ? $context$$10_text$$35$$.$alignBottom$() : $context$$10_text$$35$$.$alignTop$()
  }else {
    $context$$10_text$$35$$ = $style$$46$$ ? new D.$DvtBackgroundOutputText$$($context$$10_text$$35$$, $label$$10$$, $coord$$3$$, $coord$$3$$, $style$$46$$) : new D.$DvtOutputText$$($context$$10_text$$35$$, $label$$10$$, $coord$$3$$, $coord$$3$$), $context$$10_text$$35$$.$alignMiddle$(), $context$$10_text$$35$$.$alignCenter$()
  }
  $context$$10_text$$35$$ instanceof D.$DvtBackgroundOutputText$$ || $context$$10_text$$35$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$10_text$$35$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_gap$$, $labelDims$$, $skippedLabels$$) {
  if(!$labelDims$$ || 0 >= $labelDims$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $isVert$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$Position$, $isRTL$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$getCtx$());
  $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ = (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)($JSCompiler_StaticMethods_IsOverlapping$self_gap$$);
  for(var $pointA1$$, $pointA2$$, $pointB1$$, $pointB2$$, $j$$17$$ = 0;$j$$17$$ < $labelDims$$.length;$j$$17$$ += $skippedLabels$$ + 1) {
    if($labelDims$$[$j$$17$$] != D.$JSCompiler_alias_NULL$$) {
      if($pointA1$$ == D.$JSCompiler_alias_NULL$$ || $pointA2$$ == D.$JSCompiler_alias_NULL$$) {
        $isVert$$ ? ($pointA1$$ = $labelDims$$[$j$$17$$].y, $pointA2$$ = $labelDims$$[$j$$17$$].y + $labelDims$$[$j$$17$$].$h$) : ($pointA1$$ = $labelDims$$[$j$$17$$].x, $pointA2$$ = $labelDims$$[$j$$17$$].x + $labelDims$$[$j$$17$$].$w$)
      }else {
        if($isVert$$) {
          if($pointB1$$ = $labelDims$$[$j$$17$$].y, $pointB2$$ = $labelDims$$[$j$$17$$].y + $labelDims$$[$j$$17$$].$h$, $pointB1$$ >= $pointA1$$ && $pointB1$$ - $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ < $pointA2$$ || $pointB1$$ < $pointA1$$ && $pointB2$$ + $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ > $pointA1$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }else {
          if($pointB1$$ = $labelDims$$[$j$$17$$].x, $pointB2$$ = $labelDims$$[$j$$17$$].x + $labelDims$$[$j$$17$$].$w$, !$isRTL$$ && $pointB1$$ - $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ < $pointA2$$ || $isRTL$$ && $pointB2$$ + $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ > $pointA1$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }
        $pointA1$$ = $pointB1$$;
        $pointA2$$ = $pointB2$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_IsOverlappingDims$$ = function $$JSCompiler_StaticMethods_IsOverlappingDims$$$($labelDims1$$, $labelDims2$$) {
  if(!$labelDims1$$ || !$labelDims2$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $pointA1$$1$$ = $labelDims1$$.y, $pointA2$$1$$ = $labelDims1$$.y + $labelDims1$$.$h$, $pointA3$$ = $labelDims1$$.x, $pointA4$$ = $labelDims1$$.x + $labelDims1$$.$w$, $pointB1$$1$$ = $labelDims2$$.y, $pointB2$$1$$ = $labelDims2$$.y + $labelDims2$$.$h$, $pointB3$$ = $labelDims2$$.x, $pointB4$$ = $labelDims2$$.x + $labelDims2$$.$w$;
  return($pointB3$$ < $pointA4$$ && $pointB3$$ > $pointA3$$ || $pointA3$$ < $pointB4$$ && $pointB4$$ < $pointA4$$) && ($pointB1$$1$$ >= $pointA1$$1$$ && $pointB1$$1$$ < $pointA2$$1$$ || $pointB1$$1$$ < $pointA1$$1$$ && $pointB2$$1$$ > $pointA1$$1$$)
};
D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$ = function $$JSCompiler_StaticMethods_GetTickLabelGapSize$$$($JSCompiler_StaticMethods_GetTickLabelGapSize$self$$) {
  var $fontSize$$4_gapVert$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$getTickLabelFontSize$(), $gapHoriz$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.3 * $fontSize$$4_gapVert$$ : 1 * $fontSize$$4_gapVert$$, $fontSize$$4_gapVert$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.1 * $fontSize$$4_gapVert$$ : 0.35 * $fontSize$$4_gapVert$$;
  return"left" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$ || ("right" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$ || "radial" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$) || $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$isLabelRotated$() ? $fontSize$$4_gapVert$$ : $gapHoriz$$
};
D.$DvtAxisInfo$$.prototype.$getTickLabelFontSize$ = function $$DvtAxisInfo$$$$$getTickLabelFontSize$$() {
  return D.$DvtTextUtils$$.$getTextStringHeight$(this.$getCtx$(), this.$Options$.tickLabel.style) * (11 / 14)
};
D.$JSCompiler_StaticMethods_SkipLabels$$ = function $$JSCompiler_StaticMethods_SkipLabels$$$($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $labels$$3$$, $j$$18_labelDims$$1$$) {
  for(var $skippedLabels$$1$$ = 0, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$18_labelDims$$1$$, $skippedLabels$$1$$);$bOverlaps$$;) {
    $skippedLabels$$1$$++, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$18_labelDims$$1$$, $skippedLabels$$1$$)
  }
  if(0 < $skippedLabels$$1$$) {
    $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$ = [];
    for($j$$18_labelDims$$1$$ = 0;$j$$18_labelDims$$1$$ < $labels$$3$$.length;$j$$18_labelDims$$1$$ += $skippedLabels$$1$$ + 1) {
      $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$.push($labels$$3$$[$j$$18_labelDims$$1$$])
    }
    return $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$
  }
  return $labels$$3$$
};
D.$JSCompiler_StaticMethods_GetLabelDims$$ = function $$JSCompiler_StaticMethods_GetLabelDims$$$($labels$$5$$, $container$$7$$) {
  for(var $labelDims$$3$$ = [], $i$$97$$ = 0;$i$$97$$ < $labels$$5$$.length;$i$$97$$++) {
    var $dims$$2_text$$36$$ = $labels$$5$$[$i$$97$$];
    $dims$$2_text$$36$$ == D.$JSCompiler_alias_NULL$$ ? $labelDims$$3$$.push(D.$JSCompiler_alias_NULL$$) : ($dims$$2_text$$36$$ = $dims$$2_text$$36$$.$measureDimensions$($container$$7$$), $dims$$2_text$$36$$.$w$ && $dims$$2_text$$36$$.$h$ ? $labelDims$$3$$.push($dims$$2_text$$36$$) : $labelDims$$3$$.push(D.$JSCompiler_alias_NULL$$))
  }
  return $labelDims$$3$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$6$$, $container$$8$$, $fudgeFactor$$, $level$$39$$) {
  var $labelDims$$4$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$98$$ = 0;$i$$98$$ < $labels$$6$$.length;$i$$98$$++) {
    var $dims$$3_text$$37$$ = $labels$$6$$[$i$$98$$];
    if($dims$$3_text$$37$$ == D.$JSCompiler_alias_NULL$$) {
      $labelDims$$4$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      $container$$8$$.$addChild$($dims$$3_text$$37$$);
      var $estH_estimatedSize$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$3_text$$37$$), $estW$$ = $estH_estimatedSize$$.$w$ * $fudgeFactor$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
      $container$$8$$.removeChild($dims$$3_text$$37$$);
      $dims$$3_text$$37$$ = $JSCompiler_StaticMethods_GuessLabelDims$self$$.$isLabelRotated$($level$$39$$) ? new D.$DvtRectangle$$($dims$$3_text$$37$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $dims$$3_text$$37$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new D.$DvtRectangle$$($dims$$3_text$$37$$.$getX$() - $estW$$ / 2, $dims$$3_text$$37$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
      $labelDims$$4$$.push($dims$$3_text$$37$$)
    }
  }
  return $labelDims$$4$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getStartCoord$ = (0,D.$JSCompiler_get$$)("$StartCoord$");
D.$JSCompiler_prototypeAlias$$.$getEndCoord$ = (0,D.$JSCompiler_get$$)("$EndCoord$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = (0,D.$JSCompiler_get$$)("$StartOverflow$");
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = (0,D.$JSCompiler_get$$)("$EndOverflow$");
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = (0,D.$JSCompiler_identityFn$$)();
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$12$$, $options$$18$$, $availSpace$$11$$) {
  this.Init($context$$12$$, $options$$18$$, $availSpace$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$13_continuousExtent$$inline_1664$$, $options$$19_scaleUnit$$inline_1665$$, $availSpace$$12$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$13_continuousExtent$$inline_1664$$, $options$$19_scaleUnit$$inline_1665$$, $availSpace$$12$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $options$$19_scaleUnit$$inline_1665$$.tickLabel.rendered && "off" != $options$$19_scaleUnit$$inline_1665$$.rendered && (this.$StartOverflow$ = window.Math.max(10 - $options$$19_scaleUnit$$inline_1665$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $options$$19_scaleUnit$$inline_1665$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$13_continuousExtent$$inline_1664$$) ? (this.$_minCoord$ = this.$EndCoord$ - 
  this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$DataMin$ = $options$$19_scaleUnit$$inline_1665$$.dataMin;
  this.$DataMax$ = $options$$19_scaleUnit$$inline_1665$$.dataMax;
  this.$_isLog$ = "log" == $options$$19_scaleUnit$$inline_1665$$.scale && 0 < this.$DataMin$ && 0 < this.$DataMax$;
  this.$_globalMin$ = this.$actualToLinear$($options$$19_scaleUnit$$inline_1665$$.min);
  this.$_globalMax$ = this.$actualToLinear$($options$$19_scaleUnit$$inline_1665$$.max);
  this.$_minValue$ = $options$$19_scaleUnit$$inline_1665$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$_globalMin$ : this.$actualToLinear$($options$$19_scaleUnit$$inline_1665$$.viewportMin);
  this.$_maxValue$ = $options$$19_scaleUnit$$inline_1665$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$_globalMax$ : this.$actualToLinear$($options$$19_scaleUnit$$inline_1665$$.viewportMax);
  this.$_dataMin$ = this.$actualToLinear$(this.$DataMin$);
  this.$_dataMax$ = this.$actualToLinear$(this.$DataMax$);
  this.$_majorIncrement$ = this.$actualToLinear$($options$$19_scaleUnit$$inline_1665$$.step);
  this.$_minorIncrement$ = this.$actualToLinear$($options$$19_scaleUnit$$inline_1665$$.minorStep);
  this.$_minMajorIncrement$ = this.$actualToLinear$($options$$19_scaleUnit$$inline_1665$$.minStep);
  this.$_majorTickCount$ = $options$$19_scaleUnit$$inline_1665$$._majorTickCount;
  this.$_minorTickCount$ = $options$$19_scaleUnit$$inline_1665$$._minorTickCount;
  this.$_zeroBaseline$ = !this.$_isLog$ && "zero" == $options$$19_scaleUnit$$inline_1665$$.baselineScaling;
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $options$$19_scaleUnit$$inline_1665$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $options$$19_scaleUnit$$inline_1665$$.tickLabel.converter);
  $context$$13_continuousExtent$$inline_1664$$ = "on" == this.$Options$._continuousExtent;
  this.$_zeroBaseline$ && (this.$_dataMin$ = window.Math.min(0, this.$_dataMin$), this.$_dataMax$ = window.Math.max(0, this.$_dataMax$));
  $options$$19_scaleUnit$$inline_1665$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$_globalMin$ != D.$JSCompiler_alias_NULL$$ ? this.$_globalMin$ : this.$_dataMin$, this.$_globalMax$ != D.$JSCompiler_alias_NULL$$ ? this.$_globalMax$ : this.$_dataMax$);
  this.$_dataMin$ == this.$_dataMax$ && (0 == this.$_dataMin$ ? this.$_dataMax$ += 5 * $options$$19_scaleUnit$$inline_1665$$ : (this.$_dataMin$ -= 2 * $options$$19_scaleUnit$$inline_1665$$, this.$_dataMax$ += 2 * $options$$19_scaleUnit$$inline_1665$$));
  if(this.$_globalMin$ == D.$JSCompiler_alias_NULL$$) {
    if(this.$_zeroBaseline$ && 0 <= this.$_dataMin$) {
      this.$_globalMin$ = 0
    }else {
      if($context$$13_continuousExtent$$inline_1664$$) {
        this.$_globalMin$ = this.$_dataMin$ - 0.1 * (this.$_dataMax$ - this.$_dataMin$)
      }else {
        if(!this.$_zeroBaseline$ && this.$_globalMax$ != D.$JSCompiler_alias_NULL$$) {
          for(this.$_globalMin$ = this.$_globalMax$;this.$_globalMin$ >= this.$_dataMin$;) {
            this.$_globalMin$ -= $options$$19_scaleUnit$$inline_1665$$
          }
        }else {
          this.$_globalMin$ = (window.Math.ceil(this.$_dataMin$ / $options$$19_scaleUnit$$inline_1665$$) - 1) * $options$$19_scaleUnit$$inline_1665$$
        }
      }
    }
    0 <= this.$_dataMin$ && (this.$_globalMin$ = window.Math.max(this.$_globalMin$, 0))
  }
  if(this.$_globalMax$ == D.$JSCompiler_alias_NULL$$) {
    if(this.$_majorTickCount$) {
      this.$_globalMax$ = this.$_globalMin$ + this.$_majorTickCount$ * $options$$19_scaleUnit$$inline_1665$$
    }else {
      if(this.$_zeroBaseline$ && 0 >= this.$_dataMax$) {
        this.$_globalMax$ = 0
      }else {
        if($context$$13_continuousExtent$$inline_1664$$) {
          this.$_globalMax$ = this.$_dataMax$ + 0.1 * (this.$_dataMax$ - this.$_dataMin$)
        }else {
          if(this.$_zeroBaseline$) {
            this.$_globalMax$ = (window.Math.floor(this.$_dataMax$ / $options$$19_scaleUnit$$inline_1665$$) + 1) * $options$$19_scaleUnit$$inline_1665$$
          }else {
            for(this.$_globalMax$ = this.$_globalMin$;this.$_globalMax$ <= this.$_dataMax$;) {
              this.$_globalMax$ += $options$$19_scaleUnit$$inline_1665$$
            }
          }
        }
      }
    }
    0 >= this.$_dataMax$ && (this.$_globalMax$ = window.Math.min(this.$_globalMax$, 0))
  }
  this.$_globalMax$ == this.$_globalMin$ && (this.$_globalMax$ = 100, this.$_globalMin$ = 0, $options$$19_scaleUnit$$inline_1665$$ = (this.$_globalMax$ - this.$_globalMin$) / 10);
  this.$_minValue$ == D.$JSCompiler_alias_NULL$$ && (this.$_minValue$ = this.$_globalMin$);
  this.$_maxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$_maxValue$ = this.$_globalMax$);
  if(this.$_minValue$ != this.$_globalMin$ || this.$_maxValue$ != this.$_globalMax$) {
    $options$$19_scaleUnit$$inline_1665$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$_minValue$, this.$_maxValue$)
  }
  this.$_globalMin$ > this.$_minValue$ && (this.$_globalMin$ = this.$_minValue$);
  this.$_globalMax$ < this.$_maxValue$ && (this.$_globalMax$ = this.$_maxValue$);
  this.$_majorIncrement$ || (this.$_majorIncrement$ = this.$_majorTickCount$ ? (this.$_maxValue$ - this.$_minValue$) / this.$_majorTickCount$ : window.Math.max($options$$19_scaleUnit$$inline_1665$$, this.$_minMajorIncrement$));
  this.$_majorTickCount$ || (this.$_majorTickCount$ = (this.$_maxValue$ - this.$_minValue$) / this.$_majorIncrement$);
  this.$_minorTickCount$ || (this.$_minorTickCount$ = this.$_minorIncrement$ ? this.$_majorIncrement$ / this.$_minorIncrement$ : this.$_isLog$ ? this.$_majorIncrement$ : 2);
  this.$_minorIncrement$ || (this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$);
  this.$GlobalMin$ = this.$linearToActual$(this.$_globalMin$);
  this.$GlobalMax$ = this.$linearToActual$(this.$_globalMax$);
  this.$MinValue$ = this.$linearToActual$(this.$_minValue$);
  this.$MaxValue$ = this.$linearToActual$(this.$_maxValue$)
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return this.$_zeroBaseline$ || "on" == this.$Options$._continuousExtent && this.$Options$.min == D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(this.$_minValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$_minValue$ - this.$_globalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$_globalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$14$$, $levelIdx$$5$$) {
  if($levelIdx$$5$$ && 0 < $levelIdx$$5$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $labels$$12$$ = [], $container$$10_labelDims$$5$$ = [], $container$$10_labelDims$$5$$ = $context$$14$$.$_stage$;
  if(this.$Options$.tickLabel && this.$Options$.tickLabel.scaling) {
    var $autoPrecision$$ = this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on";
    this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$($context$$14$$, this.$_minValue$, this.$_maxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, $autoPrecision$$)
  }
  for(var $i$$103$$ = 0;$i$$103$$ <= this.$_majorTickCount$;$i$$103$$++) {
    var $label$$18_value$$67$$ = $i$$103$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if($label$$18_value$$67$$ > this.$_maxValue$) {
      break
    }
    var $coord$$4_text$$39$$ = (0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $label$$18_value$$67$$);
    if(this.$Options$._skipHighestTick) {
      if($label$$18_value$$67$$ == this.$_maxValue$) {
        continue
      }
      if("tangential" != this.$Position$ && window.Math.abs($coord$$4_text$$39$$ - this.$_maxCoord$) < this.$getTickLabelFontSize$()) {
        continue
      }
    }
    this.$_isLog$ && ($label$$18_value$$67$$ = this.$linearToActual$($label$$18_value$$67$$), this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$($context$$14$$, $label$$18_value$$67$$, $label$$18_value$$67$$, $label$$18_value$$67$$, this.$Options$.tickLabel.scaling, $autoPrecision$$));
    $label$$18_value$$67$$ = (0,D.$JSCompiler_StaticMethods__formatValue$$)(this, $label$$18_value$$67$$);
    $coord$$4_text$$39$$ = this.$CreateLabel$($context$$14$$, $label$$18_value$$67$$, $coord$$4_text$$39$$);
    $labels$$12$$.push($coord$$4_text$$39$$)
  }
  "tangential" != this.$Position$ && ($container$$10_labelDims$$5$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$12$$, $container$$10_labelDims$$5$$), $labels$$12$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$12$$, $container$$10_labelDims$$5$$));
  return $labels$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  for(var $coords$$ = [], $i$$104$$ = 0;$i$$104$$ <= this.$_majorTickCount$;$i$$104$$++) {
    var $value$$68$$ = $i$$104$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if($value$$68$$ > this.$_maxValue$) {
      break
    }
    this.$Options$._skipHighestTick && $value$$68$$ == this.$_maxValue$ || $coords$$.push((0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $value$$68$$))
  }
  return $coords$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  for(var $coords$$1$$ = [], $i$$105$$ = -1;$i$$105$$ <= this.$_majorTickCount$;$i$$105$$++) {
    var $value$$69$$ = $i$$105$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(this.$_isLog$ && 1 == this.$_majorIncrement$ && 1 == this.$_minorIncrement$) {
      for(var $j$$20$$ = 2;9 >= $j$$20$$;$j$$20$$++) {
        var $coord$$6_linearValue_minorValue$$ = $value$$69$$ + D.$DvtMath$$.$log10$($j$$20$$);
        if($coord$$6_linearValue_minorValue$$ > this.$_maxValue$) {
          break
        }
        $coord$$6_linearValue_minorValue$$ < this.$_minValue$ || ($coord$$6_linearValue_minorValue$$ = (0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $coord$$6_linearValue_minorValue$$), $coords$$1$$.push($coord$$6_linearValue_minorValue$$))
      }
    }else {
      for($j$$20$$ = 1;$j$$20$$ < this.$_minorTickCount$;$j$$20$$++) {
        $coord$$6_linearValue_minorValue$$ = $value$$69$$ + $j$$20$$ * this.$_minorIncrement$;
        if($coord$$6_linearValue_minorValue$$ > this.$_maxValue$) {
          break
        }
        $coord$$6_linearValue_minorValue$$ < this.$_minValue$ || ($coord$$6_linearValue_minorValue$$ = (0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $coord$$6_linearValue_minorValue$$), $coords$$1$$.push($coord$$6_linearValue_minorValue$$))
      }
    }
  }
  return $coords$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return this.$_isLog$ ? this.$_minCoord$ : this.$getBoundedCoordAt$(0)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$7$$) {
  return this.$linearToActual$(this.$_minValue$ + ($coord$$7$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$_maxValue$ - this.$_minValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$71$$) {
  return(0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, this.$actualToLinear$($value$$71$$))
};
D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$ = function $$JSCompiler_StaticMethods__getUnboundedCoordAt$$$($JSCompiler_StaticMethods__getUnboundedCoordAt$self$$, $value$$72$$) {
  return $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minCoord$ + ($value$$72$$ - $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minValue$) / ($JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_maxValue$ - $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minValue$) * ($JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_maxCoord$ - $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minCoord$)
};
D.$JSCompiler_StaticMethods__formatValue$$ = function $$JSCompiler_StaticMethods__formatValue$$$($JSCompiler_StaticMethods__formatValue$self$$, $value$$73$$) {
  if($JSCompiler_StaticMethods__formatValue$self$$.$_converter$ && ($JSCompiler_StaticMethods__formatValue$self$$.$_converter$.getAsString || $JSCompiler_StaticMethods__formatValue$self$$.$_converter$.format)) {
    if($JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$.$format$($value$$73$$, $JSCompiler_StaticMethods__formatValue$self$$.$_converter$)
    }
    if($JSCompiler_StaticMethods__formatValue$self$$.$_converter$.getAsString) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_converter$.getAsString($value$$73$$)
    }
    if($JSCompiler_StaticMethods__formatValue$self$$.$_converter$.format) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_converter$.format($value$$73$$)
    }
  }else {
    if($JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$.$format$($value$$73$$)
    }
    var $decimals_t$$9$$ = D.$DvtMath$$.$log10$($JSCompiler_StaticMethods__formatValue$self$$.$_majorIncrement$), $decimals_t$$9$$ = window.Math.max(window.Math.ceil(-$decimals_t$$9$$), 0);
    return $value$$73$$.toFixed($decimals_t$$9$$)
  }
};
D.$JSCompiler_StaticMethods__calcAxisScale$$ = function $$JSCompiler_StaticMethods__calcAxisScale$$$($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$, $min$$, $first2Digits_firstDigit_increment_max_spread$$) {
  if($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorIncrement$) {
    return $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorIncrement$
  }
  $first2Digits_firstDigit_increment_max_spread$$ -= $min$$;
  if($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_isLog$) {
    return window.Math.floor($first2Digits_firstDigit_increment_max_spread$$ / 8) + 1
  }
  if(0 == $first2Digits_firstDigit_increment_max_spread$$) {
    return 0 == $min$$ ? 10 : window.Math.pow(10, window.Math.floor(D.$DvtMath$$.$log10$($min$$)) - 1)
  }
  if($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorTickCount$) {
    return $first2Digits_firstDigit_increment_max_spread$$ /= $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorTickCount$, $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$ = window.Math.pow(10, window.Math.ceil(D.$DvtMath$$.$log10$($first2Digits_firstDigit_increment_max_spread$$) - 1)), $first2Digits_firstDigit_increment_max_spread$$ /= $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$, $first2Digits_firstDigit_increment_max_spread$$ = 1 < $first2Digits_firstDigit_increment_max_spread$$ && 
    1.5 >= $first2Digits_firstDigit_increment_max_spread$$ ? 1.5 : 5 < $first2Digits_firstDigit_increment_max_spread$$ ? 10 : window.Math.ceil($first2Digits_firstDigit_increment_max_spread$$), $first2Digits_firstDigit_increment_max_spread$$ * $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$
  }
  $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$ = D.$DvtMath$$.$log10$($first2Digits_firstDigit_increment_max_spread$$);
  $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$ = window.Math.pow(10, window.Math.ceil($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$) - 2);
  $first2Digits_firstDigit_increment_max_spread$$ = window.Math.round($first2Digits_firstDigit_increment_max_spread$$ / $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$);
  return(10 <= $first2Digits_firstDigit_increment_max_spread$$ && 14 >= $first2Digits_firstDigit_increment_max_spread$$ ? 2 : 15 <= $first2Digits_firstDigit_increment_max_spread$$ && 19 >= $first2Digits_firstDigit_increment_max_spread$$ ? 3 : 20 <= $first2Digits_firstDigit_increment_max_spread$$ && 24 >= $first2Digits_firstDigit_increment_max_spread$$ ? 4 : 25 <= $first2Digits_firstDigit_increment_max_spread$$ && 45 >= $first2Digits_firstDigit_increment_max_spread$$ ? 5 : 46 <= $first2Digits_firstDigit_increment_max_spread$$ && 
  80 >= $first2Digits_firstDigit_increment_max_spread$$ ? 10 : 20) * $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_get$$)("$_majorTickCount$");
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_get$$)("$_minorTickCount$");
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMajorIncrement$$() {
  return this.$linearToActual$(this.$_majorIncrement$)
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return(this.$_globalMax$ - this.$_globalMin$) / 64
};
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$
};
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = function $$JSCompiler_prototypeAlias$$$$linearToActual$$($value$$74$$) {
  return $value$$74$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_isLog$ ? window.Math.pow(10, $value$$74$$) : $value$$74$$
};
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = function $$JSCompiler_prototypeAlias$$$$actualToLinear$$($value$$75$$) {
  return $value$$75$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_isLog$ ? 0 < $value$$75$$ ? D.$DvtMath$$.$log10$($value$$75$$) : D.$JSCompiler_alias_NULL$$ : $value$$75$$
};
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$15$$, $options$$20$$, $availSpace$$13$$) {
  this.Init($context$$15$$, $options$$20$$, $availSpace$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$16_i$$106_isRTL$$5$$, $options$$21$$, $availSpace$$14_endOffset$$1_temp$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$16_i$$106_isRTL$$5$$, $options$$21$$, $availSpace$$14_endOffset$$1_temp$$);
  $context$$16_i$$106_isRTL$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$16_i$$106_isRTL$$5$$);
  if(("top" == this.$Position$ || "bottom" == this.$Position$) && $context$$16_i$$106_isRTL$$5$$) {
    $availSpace$$14_endOffset$$1_temp$$ = this.$StartCoord$, this.$StartCoord$ = this.$EndCoord$, this.$EndCoord$ = $availSpace$$14_endOffset$$1_temp$$
  }
  this.$_levelsArray$ = [];
  this.$_groupCount$ = (0,D.$JSCompiler_StaticMethods__generateLevelsArray$$)(this, $options$$21$$.groups, 0, this.$_levelsArray$, 0);
  this.$_numLevels$ = this.$_levelsArray$.length;
  this.$_areSeparatorsRendered$ = "on" == $options$$21$$.groupSeparators.rendered;
  this.$_separatorColor$ = $options$$21$$.groupSeparators.color;
  this.$_lastRenderedLevel$ = D.$JSCompiler_alias_NULL$$;
  this.$_drilling$ = $options$$21$$.drilling;
  $availSpace$$14_endOffset$$1_temp$$ = 0 < $options$$21$$.endGroupOffset ? (0,window.Number)($options$$21$$.endGroupOffset) : 0;
  var $startOffset$$1$$ = 0 < $options$$21$$.startGroupOffset ? (0,window.Number)($options$$21$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groupCount$ - 1;
  this.$GlobalMin$ = $options$$21$$.min == D.$JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$1$$ : $options$$21$$.min;
  this.$GlobalMax$ = $options$$21$$.max == D.$JSCompiler_alias_NULL$$ ? this.$DataMax$ + $availSpace$$14_endOffset$$1_temp$$ : $options$$21$$.max;
  var $startIndex$$12$$ = this.$getGroupIndex$($options$$21$$.viewportStartGroup), $endIndex$$12$$ = this.$getGroupIndex$($options$$21$$.viewportEndGroup);
  -1 != $startIndex$$12$$ && (this.$MinValue$ = $startIndex$$12$$ - $startOffset$$1$$);
  -1 != $endIndex$$12$$ && (this.$MaxValue$ = $endIndex$$12$$ + $availSpace$$14_endOffset$$1_temp$$);
  $options$$21$$.viewportMin != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $options$$21$$.viewportMin);
  $options$$21$$.viewportMax != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $options$$21$$.viewportMax);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
  this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
  this.$_groupWidthRatios$ = $options$$21$$._groupWidthRatios;
  (0,D.$JSCompiler_StaticMethods__processGroupWidthRatios$$)(this);
  this.$_startBuffer$ = $context$$16_i$$106_isRTL$$5$$ ? $options$$21$$.rightBuffer : $options$$21$$.leftBuffer;
  this.$_endBuffer$ = $context$$16_i$$106_isRTL$$5$$ ? $options$$21$$.leftBuffer : $options$$21$$.rightBuffer;
  this.$_isLabelRotated$ = [];
  for($context$$16_i$$106_isRTL$$5$$ = 0;$context$$16_i$$106_isRTL$$5$$ < this.$_numLevels$;$context$$16_i$$106_isRTL$$5$$++) {
    this.$_isLabelRotated$.push(D.$JSCompiler_alias_FALSE$$)
  }
  this.$_renderGridAtLabels$ = $options$$21$$._renderGridAtLabels;
  this.$_labels$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processGroupWidthRatios$$ = function $$JSCompiler_StaticMethods__processGroupWidthRatios$$$($JSCompiler_StaticMethods__processGroupWidthRatios$self$$) {
  if(!$JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$ || 2 > $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$.length) {
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$ = D.$JSCompiler_alias_NULL$$
  }else {
    for(var $sum$$ = 0, $anchor$$2_groupMin$$, $groupMax$$, $g$$ = 0;$g$$ < $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupCount$;$g$$++) {
      $anchor$$2_groupMin$$ = 0 == $g$$ ? $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$ : window.Math.max($g$$ - 0.5, $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$), $groupMax$$ = $g$$ == $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupCount$ - 1 ? $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MaxValue$ : window.Math.min($g$$ + 0.5, $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MaxValue$), $groupMax$$ > $anchor$$2_groupMin$$ && 
      ($sum$$ += ($groupMax$$ - $anchor$$2_groupMin$$) * $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$[$g$$])
    }
    var $totalWidth$$1$$ = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$EndCoord$ - $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$StartCoord$;
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$ = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$.map(function($JSCompiler_StaticMethods__processGroupWidthRatios$self$$) {
      return $JSCompiler_StaticMethods__processGroupWidthRatios$self$$ * $totalWidth$$1$$ / $sum$$
    });
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$ = [];
    for($g$$ = 0;$g$$ < $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$.length - 1;$g$$++) {
      $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$.push($g$$ + 0.5)
    }
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$ = [];
    $anchor$$2_groupMin$$ = window.Math.min(window.Math.max(window.Math.round($JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$), 0), $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$.length - 1);
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$anchor$$2_groupMin$$] = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$StartCoord$ + ($JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$[$anchor$$2_groupMin$$] - $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$) * $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$[$anchor$$2_groupMin$$];
    for($g$$ = $anchor$$2_groupMin$$ + 1;$g$$ < $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$.length;$g$$++) {
      $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$] = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$ - 1] + $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$[$g$$]
    }
    for($g$$ = $anchor$$2_groupMin$$ - 1;0 <= $g$$;$g$$--) {
      $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$] = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$ + 1] - $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$[$g$$ + 1]
    }
  }
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$13$$, $container$$11_labelDims$$6$$, $overflow$$1_text$$40$$, $level$$43$$) {
  var $x$$70$$, $isRTL$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__rotateLabels$self$$.$getCtx$());
  $level$$43$$ == D.$JSCompiler_alias_NULL$$ && ($level$$43$$ = $JSCompiler_StaticMethods__rotateLabels$self$$.$_numLevels$ - 1);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$[$level$$43$$] = D.$JSCompiler_alias_TRUE$$;
  1 == $JSCompiler_StaticMethods__rotateLabels$self$$.$_numLevels$ && $JSCompiler_StaticMethods__rotateLabels$self$$.$_setOverflow$($overflow$$1_text$$40$$, $overflow$$1_text$$40$$, $labels$$13$$);
  for(var $i$$107$$ = 0;$i$$107$$ < $labels$$13$$.length;$i$$107$$++) {
    $overflow$$1_text$$40$$ = $labels$$13$$[$i$$107$$], $overflow$$1_text$$40$$ != D.$JSCompiler_alias_NULL$$ && ($x$$70$$ = $overflow$$1_text$$40$$.$getX$(), $overflow$$1_text$$40$$.$setX$(0), $overflow$$1_text$$40$$.$setY$(0), $isRTL$$6$$ ? $overflow$$1_text$$40$$.$setRotation$(window.Math.PI / 2) : $overflow$$1_text$$40$$.$setRotation$(3 * window.Math.PI / 2), $overflow$$1_text$$40$$.$setTranslateX$($x$$70$$))
  }
  $container$$11_labelDims$$6$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$13$$, $container$$11_labelDims$$6$$, D.$JSCompiler_alias_NULL$$, $level$$43$$);
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$13$$, $container$$11_labelDims$$6$$)
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = function $$DvtGroupAxisInfo$$$$$isLabelRotated$$($level$$44$$) {
  $level$$44$$ == D.$JSCompiler_alias_NULL$$ && ($level$$44$$ = this.$_numLevels$ - 1);
  return this.$_isLabelRotated$[$level$$44$$]
};
D.$DvtGroupAxisInfo$$.prototype.$_setOverflow$ = function $$DvtGroupAxisInfo$$$$$_setOverflow$$($startOverflow$$, $endOverflow$$, $isRTL$$7_labels$$14$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - this.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - this.$_endBuffer$, 0);
  $isRTL$$7_labels$$14$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$());
  this.$StartCoord$ += ($startOverflow$$ - this.$StartOverflow$) * ($isRTL$$7_labels$$14$$ ? -1 : 1);
  this.$EndCoord$ -= ($endOverflow$$ - this.$EndOverflow$) * ($isRTL$$7_labels$$14$$ ? -1 : 1);
  (0,D.$JSCompiler_StaticMethods__processGroupWidthRatios$$)(this);
  for(var $j$$21$$ = 0;$j$$21$$ < this.$_numLevels$;$j$$21$$++) {
    $isRTL$$7_labels$$14$$ = this.$_labels$[$j$$21$$];
    for(var $i$$108$$ = 0;$i$$108$$ < $isRTL$$7_labels$$14$$.length;$i$$108$$++) {
      var $text$$41$$ = $isRTL$$7_labels$$14$$[$i$$108$$];
      if($text$$41$$) {
        var $coord$$8$$ = (0,D.$JSCompiler_StaticMethods__getLabelCoord$$)(this, $j$$21$$, (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($text$$41$$));
        $text$$41$$.$setX$($coord$$8$$)
      }
    }
  }
  this.$StartOverflow$ = $startOverflow$$;
  this.$EndOverflow$ = $endOverflow$$
};
D.$DvtGroupAxisInfo$$.prototype.$getLabels$ = function $$DvtGroupAxisInfo$$$$$getLabels$$($context$$17$$, $level$$45$$) {
  $level$$45$$ == D.$JSCompiler_alias_NULL$$ && ($level$$45$$ = this.$_numLevels$ - 1);
  this.$_labels$ || this.$_generateLabels$($context$$17$$);
  return this.$_labels$[$level$$45$$]
};
D.$JSCompiler_StaticMethods__getLabelCoord$$ = function $$JSCompiler_StaticMethods__getLabelCoord$$$($JSCompiler_StaticMethods__getLabelCoord$self$$, $endValue_level$$46$$, $index$$117$$) {
  var $startValue$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)($JSCompiler_StaticMethods__getLabelCoord$self$$, $index$$117$$, $endValue_level$$46$$);
  $endValue_level$$46$$ = $JSCompiler_StaticMethods__getLabelCoord$self$$.$getEndIndex$($index$$117$$, $endValue_level$$46$$);
  if($startValue$$ == D.$JSCompiler_alias_NULL$$ || $endValue_level$$46$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $startValue$$ < $JSCompiler_StaticMethods__getLabelCoord$self$$.$MinValue$ && $endValue_level$$46$$ > $JSCompiler_StaticMethods__getLabelCoord$self$$.$MinValue$ && ($startValue$$ = $JSCompiler_StaticMethods__getLabelCoord$self$$.$MinValue$);
  $endValue_level$$46$$ > $JSCompiler_StaticMethods__getLabelCoord$self$$.$MaxValue$ && $startValue$$ < $JSCompiler_StaticMethods__getLabelCoord$self$$.$MaxValue$ && ($endValue_level$$46$$ = $JSCompiler_StaticMethods__getLabelCoord$self$$.$MaxValue$);
  return $JSCompiler_StaticMethods__getLabelCoord$self$$.$getCoordAt$($endValue_level$$46$$ ? $startValue$$ + ($endValue_level$$46$$ - $startValue$$) / 2 : $startValue$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$18_labelDims$$7$$) {
  var $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$ = [];
  this.$_labels$ = [];
  for(var $JSCompiler_temp_const$$295_container$$12$$ = $context$$18_labelDims$$7$$.$_stage$, $isHoriz$$1_labelDims$$inline_1675$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$18_labelDims$$7$$), $label$$19_text$$42$$, $firstLabel$$, $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$, $cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$, $level$$47_numLabels$$inline_1677_startOverflow$$1$$ = 
  0;$level$$47_numLabels$$inline_1677_startOverflow$$1$$ < this.$_numLevels$;$level$$47_numLabels$$inline_1677_startOverflow$$1$$++) {
    for(var $levels$$ = this.$_levelsArray$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$], $i$$109$$ = 0;$i$$109$$ < $levels$$.length;$i$$109$$++) {
      if($levels$$[$i$$109$$]) {
        $label$$19_text$$42$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$109$$, $level$$47_numLabels$$inline_1677_startOverflow$$1$$);
        var $coord$$9$$ = (0,D.$JSCompiler_StaticMethods__getLabelCoord$$)(this, $level$$47_numLabels$$inline_1677_startOverflow$$1$$, $i$$109$$);
        $coord$$9$$ != D.$JSCompiler_alias_NULL$$ ? (($cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$ = (0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $i$$109$$, $level$$47_numLabels$$inline_1677_startOverflow$$1$$, "labelStyle")) ? ($cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$ = new D.$DvtCSSStyle$$($cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$), $cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$.$getStyle$("font-size") || $cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$.$setStyle$("font-size", 
        this.$Options$.tickLabel.style.$getStyle$("font-size"))) : $cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$ = D.$JSCompiler_alias_NULL$$, $label$$19_text$$42$$ = this.$CreateLabel$($context$$18_labelDims$$7$$, $label$$19_text$$42$$, $coord$$9$$, $cssStyle$$23_cssStyle$$inline_1671_labelStyle$$inline_1670$$), $label$$19_text$$42$$.$_index$ = $i$$109$$, $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$.push($label$$19_text$$42$$), !$firstLabel$$ && 0 == $level$$47_numLabels$$inline_1677_startOverflow$$1$$ && 
        ($firstLabel$$ = $label$$19_text$$42$$), 0 == $level$$47_numLabels$$inline_1677_startOverflow$$1$$ && ($j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$ = $label$$19_text$$42$$)) : $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$.push(D.$JSCompiler_alias_NULL$$)
      }else {
        $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    this.$_labels$.push($JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$);
    $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$ = []
  }
  $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$ = this.$_labels$[this.$_numLevels$ - 1];
  $context$$18_labelDims$$7$$ = [];
  if("tangential" == this.$Position$) {
    $context$$18_labelDims$$7$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $JSCompiler_temp_const$$295_container$$12$$);
    $JSCompiler_temp_const$$295_container$$12$$ = this.$_labels$;
    $isHoriz$$1_labelDims$$inline_1675$$ = $context$$18_labelDims$$7$$;
    $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ = [];
    $level$$47_numLabels$$inline_1677_startOverflow$$1$$ = $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$.length;
    if(1 < $level$$47_numLabels$$inline_1677_startOverflow$$1$$) {
      var $firstLabelDim_prevLabelDims$$inline_1678$$;
      for($j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$ = 0;$j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$ < $level$$47_numLabels$$inline_1677_startOverflow$$1$$ - 1;$j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$++) {
        if($isHoriz$$1_labelDims$$inline_1675$$[$j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$] && (!$firstLabelDim_prevLabelDims$$inline_1678$$ || $firstLabelDim_prevLabelDims$$inline_1678$$ && !(0,D.$JSCompiler_StaticMethods_IsOverlappingDims$$)($firstLabelDim_prevLabelDims$$inline_1678$$, $isHoriz$$1_labelDims$$inline_1675$$[$j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$]))) {
          $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$.push($JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$[$j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$]), $firstLabelDim_prevLabelDims$$inline_1678$$ = $isHoriz$$1_labelDims$$inline_1675$$[$j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$]
        }
      }
      !(0,D.$JSCompiler_StaticMethods_IsOverlappingDims$$)($firstLabelDim_prevLabelDims$$inline_1678$$, $isHoriz$$1_labelDims$$inline_1675$$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$ - 1]) && !(0,D.$JSCompiler_StaticMethods_IsOverlappingDims$$)($isHoriz$$1_labelDims$$inline_1675$$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$ - 1], $isHoriz$$1_labelDims$$inline_1675$$[0]) && $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$.push($JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$ - 
      1]);
      $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$ = $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$
    }
    $JSCompiler_temp_const$$295_container$$12$$[0] = $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$
  }else {
    $firstLabelDim_prevLabelDims$$inline_1678$$ = $firstLabel$$.$measureDimensions$();
    $isHoriz$$1_labelDims$$inline_1675$$ && (this.$Options$._startOverflow != D.$JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != D.$JSCompiler_alias_NULL$$ ? ($level$$47_numLabels$$inline_1677_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ = this.$Options$._endOverflow) : ($j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$ = $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$.$measureDimensions$(), $level$$47_numLabels$$inline_1677_startOverflow$$1$$ = 
    $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ ? $firstLabelDim_prevLabelDims$$inline_1678$$.$w$ + $firstLabelDim_prevLabelDims$$inline_1678$$.x - this.$StartCoord$ : this.$StartCoord$ - $firstLabelDim_prevLabelDims$$inline_1678$$.x, $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ = $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ ? this.$EndCoord$ - $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$.x : $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$.$w$ + 
    $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$.x - this.$EndCoord$), ($level$$47_numLabels$$inline_1677_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ > this.$_endBuffer$) && this.$_setOverflow$($level$$47_numLabels$$inline_1677_startOverflow$$1$$, $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$, $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$));
    for($level$$47_numLabels$$inline_1677_startOverflow$$1$$ = this.$_numLevels$ - 1;0 <= $level$$47_numLabels$$inline_1677_startOverflow$$1$$;$level$$47_numLabels$$inline_1677_startOverflow$$1$$--) {
      $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$ = this.$_labels$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$], $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $JSCompiler_temp_const$$295_container$$12$$, 0.3, $level$$47_numLabels$$inline_1677_startOverflow$$1$$), $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, 
      $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $JSCompiler_temp_const$$295_container$$12$$, D.$JSCompiler_alias_NULL$$, $level$$47_numLabels$$inline_1677_startOverflow$$1$$), (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$, 0) || (this.$_labels$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$] = $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$), $isHoriz$$1_labelDims$$inline_1675$$ ? "auto" == 
      this.$Options$.tickLabel.rotation ? (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$8_minLabelDims_renderedLabels$$inline_1676$$, 0) ? this.$_labels$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $JSCompiler_temp_const$$295_container$$12$$, $firstLabelDim_prevLabelDims$$inline_1678$$.$h$ / 2, $level$$47_numLabels$$inline_1677_startOverflow$$1$$) : 
      ($context$$18_labelDims$$7$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $JSCompiler_temp_const$$295_container$$12$$), this.$_labels$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $context$$18_labelDims$$7$$, 0) ? (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $JSCompiler_temp_const$$295_container$$12$$, 
      $firstLabelDim_prevLabelDims$$inline_1678$$.$h$ / 2, $level$$47_numLabels$$inline_1677_startOverflow$$1$$) : $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$) : ($context$$18_labelDims$$7$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $JSCompiler_temp_const$$295_container$$12$$), this.$_labels$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, 
      $context$$18_labelDims$$7$$)) : this.$_labels$[$level$$47_numLabels$$inline_1677_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $JSCompiler_inline_result$$296_labels$$15_labels$$inline_1674$$, $j$$inline_1679_lastLabel_lastLabelDim_maxLabelDims$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  for(var $coords$$2$$ = [], $coord$$10_start$$21$$, $maxIndex$$ = "tangential" == this.$Position$ ? this.$getGroupCount$() : this.$getGroupCount$() - 1, $i$$110$$ = 0;$i$$110$$ < this.$_levelsArray$[0].length;$i$$110$$++) {
    if(this.$_levelsArray$[0][$i$$110$$]) {
      $coord$$10_start$$21$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $i$$110$$, 0);
      var $end$$6$$ = this.$getEndIndex$($i$$110$$, 0);
      $coord$$10_start$$21$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($coord$$10_start$$21$$ + 0.5 * ($end$$6$$ - $coord$$10_start$$21$$)) : $end$$6$$ + 0.5 < $maxIndex$$ ? this.$getCoordAt$($end$$6$$ + 0.5) : D.$JSCompiler_alias_NULL$$;
      $coord$$10_start$$21$$ != D.$JSCompiler_alias_NULL$$ && $coords$$2$$.push($coord$$10_start$$21$$)
    }
  }
  return $coords$$2$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  var $coords$$3$$ = [], $coord$$11_start$$22$$;
  if(!this.$_levelsArray$[1]) {
    return $coords$$3$$
  }
  for(var $i$$111$$ = 0;$i$$111$$ < this.$_levelsArray$[1].length;$i$$111$$++) {
    if(this.$_levelsArray$[1][$i$$111$$]) {
      $coord$$11_start$$22$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $i$$111$$, 1);
      var $end$$7$$ = this.$getEndIndex$($i$$111$$, 1);
      $coord$$11_start$$22$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($coord$$11_start$$22$$ + 0.5 * ($end$$7$$ - $coord$$11_start$$22$$)) : $end$$7$$ + 0.5 < this.$getGroupCount$() - 1 ? this.$getCoordAt$($end$$7$$ + 0.5) : D.$JSCompiler_alias_NULL$$;
      $coord$$11_start$$22$$ != D.$JSCompiler_alias_NULL$$ && $coords$$3$$.push($coord$$11_start$$22$$)
    }
  }
  return $coords$$3$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$12$$) {
  if(this.$_groupWidthRatios$) {
    for(var $anchor$$3$$ = this.$_borderCoords$.length, $g$$1$$ = 0;$g$$1$$ < this.$_borderCoords$.length;$g$$1$$++) {
      if($coord$$12$$ <= this.$_borderCoords$[$g$$1$$]) {
        $anchor$$3$$ = $g$$1$$;
        break
      }
    }
    return 0 == $anchor$$3$$ ? this.$_borderValues$[0] - (this.$_borderCoords$[0] - $coord$$12$$) / this.$_groupWidths$[0] : this.$_borderValues$[$anchor$$3$$ - 1] + ($coord$$12$$ - this.$_borderCoords$[$anchor$$3$$ - 1]) / this.$_groupWidths$[$anchor$$3$$]
  }
  return this.$MinValue$ + ($coord$$12$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$76$$) {
  if(this.$_groupWidthRatios$) {
    for(var $anchor$$4$$ = this.$_borderValues$.length, $g$$2$$ = 0;$g$$2$$ < this.$_borderValues$.length;$g$$2$$++) {
      if($value$$76$$ <= this.$_borderValues$[$g$$2$$]) {
        $anchor$$4$$ = $g$$2$$;
        break
      }
    }
    return 0 == $anchor$$4$$ ? this.$_borderCoords$[0] - this.$_groupWidths$[0] * (this.$_borderValues$[0] - $value$$76$$) : this.$_borderCoords$[$anchor$$4$$ - 1] + this.$_groupWidths$[$anchor$$4$$] * ($value$$76$$ - this.$_borderValues$[$anchor$$4$$ - 1])
  }
  return this.$StartCoord$ + ($value$$76$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_StaticMethods_getLabelAt$$ = function $$JSCompiler_StaticMethods_getLabelAt$$$($JSCompiler_StaticMethods_getLabelAt$self_label$$20$$, $index$$118$$, $level$$48$$) {
  $level$$48$$ == D.$JSCompiler_alias_NULL$$ && ($level$$48$$ = $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$.$_numLevels$ - 1);
  $index$$118$$ = window.Math.round($index$$118$$);
  if(0 > $index$$118$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  ($JSCompiler_StaticMethods_getLabelAt$self_label$$20$$ = $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$.$_levelsArray$[$level$$48$$] && $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$.$_levelsArray$[$level$$48$$][$index$$118$$] ? $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$.$_levelsArray$[$level$$48$$][$index$$118$$].item : D.$JSCompiler_alias_NULL$$) && ($JSCompiler_StaticMethods_getLabelAt$self_label$$20$$.name ? $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$ = $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$.name : 
  $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$.id != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getLabelAt$self_label$$20$$ = ""));
  return $JSCompiler_StaticMethods_getLabelAt$self_label$$20$$
};
D.$JSCompiler_StaticMethods_getGroupAt$$ = function $$JSCompiler_StaticMethods_getGroupAt$$$($JSCompiler_StaticMethods_getGroupAt$self_label$$21$$, $index$$119$$, $level$$49$$) {
  $level$$49$$ == D.$JSCompiler_alias_NULL$$ && ($level$$49$$ = $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.$_numLevels$ - 1);
  $index$$119$$ = window.Math.round($index$$119$$);
  if(0 > $index$$119$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if($JSCompiler_StaticMethods_getGroupAt$self_label$$21$$ = $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.$_levelsArray$[$level$$49$$] && $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.$_levelsArray$[$level$$49$$][$index$$119$$] ? $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.$_levelsArray$[$level$$49$$][$index$$119$$].item : D.$JSCompiler_alias_NULL$$) {
    if($JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.id) {
      return $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.id
    }
    if($JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.name || "" == $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.name) {
      return $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$.name
    }
  }
  return $JSCompiler_StaticMethods_getGroupAt$self_label$$21$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($index$$121$$, $level$$51$$) {
  return(0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $index$$121$$, $level$$51$$, "shortDesc")
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$($index$$122$$, $level$$52$$) {
  return(0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $index$$122$$, $level$$52$$, "action")
};
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = function $$JSCompiler_prototypeAlias$$$$isDrillable$$($index$$123$$, $level$$53$$) {
  var $drilling$$ = (0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $index$$123$$, $level$$53$$, "drilling");
  return"on" == $drilling$$ ? D.$JSCompiler_alias_TRUE$$ : "off" == $drilling$$ ? D.$JSCompiler_alias_FALSE$$ : "on" == this.$_drilling$ || "groupsOnly" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$getGroup$ = function $$JSCompiler_prototypeAlias$$$$getGroup$$($index$$124$$, $level$$54$$) {
  if(0 > $index$$124$$ || $index$$124$$ > this.$getGroupCount$() - 1) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $groupLabels$$ = [];
  $level$$54$$ == D.$JSCompiler_alias_NULL$$ && ($level$$54$$ = this.$_numLevels$ - 1);
  for(var $startIndex$$13$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $index$$124$$, $level$$54$$), $levelIndex$$ = 0;$levelIndex$$ <= $level$$54$$;$levelIndex$$++) {
    for(var $levelArray$$ = this.$_levelsArray$[$levelIndex$$], $i$$112$$ = 0;$i$$112$$ < $levelArray$$.length;$i$$112$$++) {
      (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $i$$112$$, $levelIndex$$) <= $startIndex$$13$$ && this.$getEndIndex$($i$$112$$, $levelIndex$$) >= $startIndex$$13$$ && $groupLabels$$.push((0,D.$JSCompiler_StaticMethods_getGroupAt$$)(this, $i$$112$$, $levelIndex$$))
    }
  }
  return 0 < $groupLabels$$.length ? 1 == $groupLabels$$.length ? $groupLabels$$[0] : $groupLabels$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = function $$JSCompiler_prototypeAlias$$$$getGroupIndex$$($group$$9$$) {
  if($group$$9$$ == D.$JSCompiler_alias_NULL$$) {
    return-1
  }
  for(var $index$$125$$ = -1, $i$$113$$ = 0;$i$$113$$ < this.$_groupCount$;$i$$113$$++) {
    var $curGroup$$ = this.$getGroup$($i$$113$$);
    if($group$$9$$ instanceof window.Array && $curGroup$$ instanceof window.Array ? D.$DvtArrayUtils$$.$equals$($group$$9$$, $curGroup$$) : $group$$9$$ == $curGroup$$) {
      $index$$125$$ = $i$$113$$;
      break
    }
  }
  return $index$$125$$
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(1);
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return window.Math.abs(this.$EndCoord$ - this.$StartCoord$) / window.Math.abs(this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getGroupCount$ = (0,D.$JSCompiler_get$$)("$_groupCount$");
D.$JSCompiler_prototypeAlias$$.$getNumLevels$ = (0,D.$JSCompiler_get$$)("$_numLevels$");
D.$JSCompiler_StaticMethods__generateLevelsArray$$ = function $$JSCompiler_StaticMethods__generateLevelsArray$$$($JSCompiler_StaticMethods__generateLevelsArray$self$$, $groupsArray$$, $level$$56$$, $levelsArray$$, $groupIndex$$1_lastIndex$$) {
  for(var $i$$114$$ = 0;$i$$114$$ < $groupsArray$$.length;$i$$114$$++) {
    if($levelsArray$$[$level$$56$$] || ($levelsArray$$[$level$$56$$] = []), $levelsArray$$[$level$$56$$].push({item:$groupsArray$$[$i$$114$$], start:$groupIndex$$1_lastIndex$$, end:$groupIndex$$1_lastIndex$$, position:$i$$114$$}), $groupsArray$$[$i$$114$$] && $groupsArray$$[$i$$114$$].groups) {
      $groupIndex$$1_lastIndex$$ = $levelsArray$$[$level$$56$$].length - 1;
      var $numChildren$$4$$ = (0,D.$JSCompiler_StaticMethods__generateLevelsArray$$)($JSCompiler_StaticMethods__generateLevelsArray$self$$, $groupsArray$$[$i$$114$$].groups, $level$$56$$ + 1, $levelsArray$$, $levelsArray$$[$level$$56$$][$groupIndex$$1_lastIndex$$].start);
      $levelsArray$$[$level$$56$$][$groupIndex$$1_lastIndex$$].end = $numChildren$$4$$ - 1;
      $groupIndex$$1_lastIndex$$ = $numChildren$$4$$
    }else {
      $groupIndex$$1_lastIndex$$++
    }
  }
  return $groupIndex$$1_lastIndex$$
};
D.$JSCompiler_StaticMethods__getGroupAttribute$$ = function $$JSCompiler_StaticMethods__getGroupAttribute$$$($JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$, $index$$126$$, $level$$57$$, $attribute$$1$$) {
  $level$$57$$ == D.$JSCompiler_alias_NULL$$ && ($level$$57$$ = $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_numLevels$ - 1);
  return($JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$ = $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_levelsArray$[$level$$57$$] && $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_levelsArray$[$level$$57$$][$index$$126$$] ? $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_levelsArray$[$level$$57$$][$index$$126$$].item : D.$JSCompiler_alias_NULL$$) ? $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$[$attribute$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getStartIndex$$ = function $$JSCompiler_StaticMethods_getStartIndex$$$($JSCompiler_StaticMethods_getStartIndex$self$$, $index$$127$$, $level$$58$$) {
  $level$$58$$ == D.$JSCompiler_alias_NULL$$ && ($level$$58$$ = $JSCompiler_StaticMethods_getStartIndex$self$$.$_numLevels$ - 1);
  return $JSCompiler_StaticMethods_getStartIndex$self$$.$_levelsArray$[$level$$58$$] && $JSCompiler_StaticMethods_getStartIndex$self$$.$_levelsArray$[$level$$58$$][$index$$127$$] ? $JSCompiler_StaticMethods_getStartIndex$self$$.$_levelsArray$[$level$$58$$][$index$$127$$].start : D.$JSCompiler_alias_NULL$$
};
D.$DvtGroupAxisInfo$$.prototype.$getEndIndex$ = function $$DvtGroupAxisInfo$$$$$getEndIndex$$($index$$128$$, $level$$59$$) {
  $level$$59$$ == D.$JSCompiler_alias_NULL$$ && ($level$$59$$ = this.$_numLevels$ - 1);
  return this.$_levelsArray$[$level$$59$$] && this.$_levelsArray$[$level$$59$$][$index$$128$$] ? this.$_levelsArray$[$level$$59$$][$index$$128$$].end : D.$JSCompiler_alias_NULL$$
};
D.$DvtGroupAxisInfo$$.prototype.$getPosition$ = function $$DvtGroupAxisInfo$$$$$getPosition$$($index$$129$$, $level$$60$$) {
  $level$$60$$ == D.$JSCompiler_alias_NULL$$ && ($level$$60$$ = this.$_numLevels$ - 1);
  return this.$_levelsArray$[$level$$60$$] && this.$_levelsArray$[$level$$60$$][$index$$129$$] ? this.$_levelsArray$[$level$$60$$][$index$$129$$].position : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getLabelIndex$$ = function $$JSCompiler_StaticMethods_getLabelIndex$$$($label$$23$$) {
  return 0 <= $label$$23$$.$_index$ ? $label$$23$$.$_index$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisObjPeer$$ = function $$DvtAxisObjPeer$$$($axis$$50$$, $label$$11$$, $group$$4$$, $action$$3$$, $drillable$$, $tooltip$$, $datatip$$, $params$$1$$) {
  this.Init($axis$$50$$, $label$$11$$, $group$$4$$, $action$$3$$, $drillable$$, $tooltip$$, $datatip$$, $params$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisObjPeer$$, D.$DvtSimpleObjPeer$$, "DvtAxisObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($axis$$51$$, $label$$12$$, $group$$5$$, $action$$4$$, $drillable$$1$$, $tooltip$$1$$, $datatip$$1$$, $params$$2$$) {
  D.$DvtAxisObjPeer$$.$superclass$.Init.call(this, $tooltip$$1$$, $datatip$$1$$, D.$JSCompiler_alias_NULL$$, $params$$2$$);
  this.$_axis$ = $axis$$51$$;
  this.$_label$ = $label$$12$$;
  this.$_group$ = $group$$5$$;
  this.$_action$ = $action$$4$$;
  this.$_drillable$ = $drillable$$1$$;
  (this.$_action$ || this.$_drillable$) && $label$$12$$.setCursor("pointer")
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$;
  this.$isDrillable$() && ($states$$ = [(0,D.$DvtBundle$getTranslation$$)(this.$_axis$.$getOptions$(), "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE")]);
  if(this.$getDatatip$() != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$)
  }
  if($states$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getLabel$().$getTextString$(), $states$$)
  }
};
D.$DvtLinearScaleAxisValueFormatter$$ = function $$DvtLinearScaleAxisValueFormatter$$$($context$$20$$, $minValue$$1$$, $maxValue$$, $tickStep$$, $scale$$2$$, $autoPrecision$$1$$) {
  this.Init($context$$20$$, $minValue$$1$$, $maxValue$$, $tickStep$$, $scale$$2$$, $autoPrecision$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLinearScaleAxisValueFormatter$$, D.$DvtAbstractAxisValueFormatter$$, "DvtLinearScaleAxisValueFormatter");
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$, $minValue$$2_scaleFactorDiff$$inline_1702$$, $maxValue$$1$$, $tickStep$$1$$, $i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$, $autoPrecision$$2$$) {
  this.$_context$ = $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$;
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$ = function $$context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$$($context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$, $minValue$$2_scaleFactorDiff$$inline_1702$$, $maxValue$$1$$) {
    var $tickStep$$1$$;
    $maxValue$$1$$ && ($tickStep$$1$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $maxValue$$1$$));
    $maxValue$$1$$ = {$scaleFactor$:$minValue$$2_scaleFactorDiff$$inline_1702$$, $localizedSuffix$:$tickStep$$1$$};
    this.$_scales$[$context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$] = $maxValue$$1$$;
    this.$_scalesOrder$.push($maxValue$$1$$);
    this.$_factorToScaleMapping$[$minValue$$2_scaleFactorDiff$$inline_1702$$] = $maxValue$$1$$
  };
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.call(this, "none", 0);
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$, $minValue$$2_scaleFactorDiff$$inline_1702$$) {
    return $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.$scaleFactor$ < $minValue$$2_scaleFactorDiff$$inline_1702$$.$scaleFactor$ ? -1 : $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$.$scaleFactor$ > $minValue$$2_scaleFactorDiff$$inline_1702$$.$scaleFactor$ ? 1 : 0
  });
  var $findScale$$inline_1697_scaleFactor$$inline_9795$$ = D.$JSCompiler_alias_FALSE$$, $decimalPlaces$$inline_1698$$, $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$;
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$ = D.$JSCompiler_alias_FALSE$$;
  "off" !== $autoPrecision$$2$$ && ($context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$ = D.$JSCompiler_alias_TRUE$$);
  $i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$ || ($i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$ = "auto");
  if($i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$ = this.$_scales$[$i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$]) {
    $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ = $i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$.$scaleFactor$
  }
  "number" !== typeof $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ && ($findScale$$inline_1697_scaleFactor$$inline_9795$$ = D.$JSCompiler_alias_TRUE$$);
  if($findScale$$inline_1697_scaleFactor$$inline_9795$$) {
    $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ = window.Math.max(window.Math.abs($minValue$$2_scaleFactorDiff$$inline_1702$$), window.Math.abs($maxValue$$1$$));
    $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$);
    $findScale$$inline_1697_scaleFactor$$inline_9795$$ = 0;
    if($absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ <= this.$_scalesOrder$[0].$scaleFactor$) {
      $findScale$$inline_1697_scaleFactor$$inline_9795$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $findScale$$inline_1697_scaleFactor$$inline_9795$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$;$i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$--) {
          if(this.$_scalesOrder$[$i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$].$scaleFactor$ <= $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$) {
            $findScale$$inline_1697_scaleFactor$$inline_9795$$ = this.$_scalesOrder$[$i$$inline_9796_scale$$3_scale$$inline_9791_scaleName$$inline_9789$$].$scaleFactor$;
            break
          }
        }
      }
    }
    $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ = $findScale$$inline_1697_scaleFactor$$inline_9795$$
  }
  $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$ === D.$JSCompiler_alias_TRUE$$ && (0 == $tickStep$$1$$ && $minValue$$2_scaleFactorDiff$$inline_1702$$ == $maxValue$$1$$ ? ($minValue$$2_scaleFactorDiff$$inline_1702$$ = $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$1$$), $decimalPlaces$$inline_1698$$ = 0 >= $minValue$$2_scaleFactorDiff$$inline_1702$$ ? window.Math.max($minValue$$2_scaleFactorDiff$$inline_1702$$ + 
  3, 0) : window.Math.max($minValue$$2_scaleFactorDiff$$inline_1702$$, 4)) : $decimalPlaces$$inline_1698$$ = window.Math.max($absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $context$$21_createScale$$inline_1682_useAutoPrecision$$inline_1700$$;
  this.$_scaleFactor$ = $absMax$$inline_1701_scaleFactor$$inline_1699_scaleFactor$$inline_9790_value$$inline_9794$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_1698$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$78$$, $converter$$) {
  var $formatted$$inline_1706_parsed$$ = (0,window.parseFloat)($value$$78$$);
  if((0,window.isNaN)($formatted$$inline_1706_parsed$$)) {
    return $value$$78$$
  }
  var $i$$116_suffix$$1$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$116_suffix$$1$$ = 0;$i$$116_suffix$$1$$ < this.$_scaleFactor$;$i$$116_suffix$$1$$++) {
      $formatted$$inline_1706_parsed$$ /= 10
    }
    $i$$116_suffix$$1$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$ && $converter$$.getAsString) {
    $formatted$$inline_1706_parsed$$ = $converter$$.getAsString($formatted$$inline_1706_parsed$$)
  }else {
    if($converter$$ && $converter$$.format) {
      $formatted$$inline_1706_parsed$$ = $converter$$.format($formatted$$inline_1706_parsed$$)
    }else {
      var $decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$ = (0,D.$JSCompiler_StaticMethods_getNumberConverter$$)(this.$_context$, {minimumFractionDigits:this.$_decimalPlaces$, maximumFractionDigits:this.$_decimalPlaces$});
      if($decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$ && $decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$.format) {
        $formatted$$inline_1706_parsed$$ = $decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$.format($formatted$$inline_1706_parsed$$)
      }else {
        if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_1706_parsed$$)) && ($formatted$$inline_1706_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_1706_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_1706_parsed$$ = $formatted$$inline_1706_parsed$$.toString(), -1 == $formatted$$inline_1706_parsed$$.indexOf("e") && ($decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$ = ".", $decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$ = 
        (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NUMBER_FORMAT_DECIMAL_SEPARATOR"), 0 < this.$_decimalPlaces$))) {
          $formatted$$inline_1706_parsed$$ = -1 == $formatted$$inline_1706_parsed$$.indexOf(".") ? $formatted$$inline_1706_parsed$$ + $decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$ : $formatted$$inline_1706_parsed$$.replace(".", $decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$);
          for($decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$ = $formatted$$inline_1706_parsed$$.substring($formatted$$inline_1706_parsed$$.indexOf($decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$) + 1).length;$decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$ < this.$_decimalPlaces$;) {
            $formatted$$inline_1706_parsed$$ += "0", $decimalSep$$inline_1707_defaultConverter_existingPlacesCount$$inline_1708$$++
          }
        }
      }
    }
  }
  "string" === typeof $i$$116_suffix$$1$$ && 0 != $value$$78$$ && ($formatted$$inline_1706_parsed$$ += $i$$116_suffix$$1$$);
  return $formatted$$inline_1706_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$80$$) {
  $value$$80$$ = 0 <= $value$$80$$ ? $value$$80$$ : -$value$$80$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$80$$) {
    return 0
  }
  if(window.Infinity == $value$$80$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$80$$) {
    for(;10 <= $value$$80$$;) {
      $power$$1$$ += 1, $value$$80$$ /= 10
    }
  }else {
    if(1 > $value$$80$$) {
      for(;1 > $value$$80$$;) {
        $power$$1$$ -= 1, $value$$80$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$22$$, $options$$22$$, $availSpace$$15$$) {
  this.Init($context$$22$$, $options$$22$$, $availSpace$$15$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($context$$23_endOffset$$2_timeAxisType$$, $options$$23$$, $availSpace$$16_converter$$1_startOffset$$2$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $context$$23_endOffset$$2_timeAxisType$$, $options$$23$$, $availSpace$$16_converter$$1_startOffset$$2$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$options$$23$$._isOverview && "on" == $options$$23$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $options$$23$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $options$$23$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$23_endOffset$$2_timeAxisType$$) ? (this.$_startCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_endCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_startCoord$ = 
  this.$StartCoord$ + this.$StartOverflow$, this.$_endCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_startCoord$ = this.$StartCoord$, this.$_endCoord$ = this.$EndCoord$);
  this.$_label1Converter$ = ($availSpace$$16_converter$$1_startOffset$$2$$ = $options$$23$$.tickLabel != D.$JSCompiler_alias_NULL$$ ? $options$$23$$.tickLabel.converter : D.$JSCompiler_alias_NULL$$) && $availSpace$$16_converter$$1_startOffset$$2$$[0] ? $availSpace$$16_converter$$1_startOffset$$2$$[0] : $availSpace$$16_converter$$1_startOffset$$2$$;
  this.$_label2Converter$ = $availSpace$$16_converter$$1_startOffset$$2$$ && $availSpace$$16_converter$$1_startOffset$$2$$[1] ? $availSpace$$16_converter$$1_startOffset$$2$$[1] : D.$JSCompiler_alias_NULL$$;
  this.$_dateToIsoConverter$ = $context$$23_endOffset$$2_timeAxisType$$.$getLocaleHelpers$().dateToIsoConverter;
  this.$_groups$ = $options$$23$$.groups;
  $context$$23_endOffset$$2_timeAxisType$$ = $options$$23$$.timeAxisType;
  this.$_skipGaps$ = "skipGaps" == $context$$23_endOffset$$2_timeAxisType$$;
  this.$_mixedFrequency$ = "mixedFrequency" == $context$$23_endOffset$$2_timeAxisType$$;
  this.$DataMin$ = $options$$23$$.dataMin;
  this.$DataMax$ = $options$$23$$.dataMax;
  this.$_averageInterval$ = 1 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0 < this.$DataMax$ - this.$DataMin$ ? this.$DataMax$ - this.$DataMin$ : 36E4;
  this.$_step$ = $options$$23$$.step;
  $context$$23_endOffset$$2_timeAxisType$$ = 0 < $options$$23$$.endGroupOffset ? $options$$23$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$16_converter$$1_startOffset$$2$$ = 0 < $options$$23$$.startGroupOffset ? $options$$23$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = $options$$23$$.min != D.$JSCompiler_alias_NULL$$ ? $options$$23$$.min : this.$DataMin$ - $availSpace$$16_converter$$1_startOffset$$2$$;
  this.$GlobalMax$ = $options$$23$$.max != D.$JSCompiler_alias_NULL$$ ? $options$$23$$.max : this.$DataMax$ + $context$$23_endOffset$$2_timeAxisType$$;
  $options$$23$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $options$$23$$.viewportStartGroup - $availSpace$$16_converter$$1_startOffset$$2$$);
  $options$$23$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $options$$23$$.viewportEndGroup + $context$$23_endOffset$$2_timeAxisType$$);
  $options$$23$$.viewportMin != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $options$$23$$.viewportMin);
  $options$$23$$.viewportMax != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $options$$23$$.viewportMax);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
  this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$;
  this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$;
  this.$_level1Overflow$ = [];
  this.$_level2Overflow$ = [];
  this.$_locale$ = $options$$23$$._locale.toLowerCase();
  this.$_monthResources$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JANUARY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_FEBRUARY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MARCH"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_APRIL"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MAY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JUNE"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_JULY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_AUGUST"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_SEPTEMBER"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_OCTOBER"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_NOVEMBER"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_DECEMBER")]
};
D.$DvtTimeAxisInfo$_getAMString$$ = function $$DvtTimeAxisInfo$_getAMString$$$($locale$$) {
  if("en-au" == $locale$$ || "en-ie" == $locale$$ || "en-ph" == $locale$$) {
    return"am"
  }
  if("en-gb" == $locale$$) {
    return""
  }
  switch($locale$$.substring(0, 2)) {
    case "en":
      return"AM";
    case "ar":
      return"\u0635";
    case "el":
      return"\u03c0\u03bc";
    case "ko":
      return"\uc624\uc804";
    case "zh":
      return"\u4e0a\u5348";
    default:
      return""
  }
};
D.$DvtTimeAxisInfo$_getPMString$$ = function $$DvtTimeAxisInfo$_getPMString$$$($locale$$1$$) {
  if("en-au" == $locale$$1$$ || "en-ie" == $locale$$1$$ || "en-ph" == $locale$$1$$) {
    return"pm"
  }
  if("en-gb" == $locale$$1$$) {
    return""
  }
  switch($locale$$1$$.substring(0, 2)) {
    case "en":
      return"PM";
    case "ar":
      return"\u0645";
    case "el":
      return"\u03bc\u03bc";
    case "ko":
      return"\uc624\ud6c4";
    case "zh":
      return"\u4e0b\u5348";
    default:
      return""
  }
};
D.$DvtTimeAxisInfo$_getDMYOrder$$ = function $$DvtTimeAxisInfo$_getDMYOrder$$$($locale$$3$$) {
  var $language$$3$$ = $locale$$3$$.substring(0, 2);
  return"en-us" == $locale$$3$$ || "en-ph" == $locale$$3$$ ? "MDY" : "fa" == $language$$3$$ || "hu" == $language$$3$$ || "ja" == $language$$3$$ || "ko" == $language$$3$$ || "lt" == $language$$3$$ || "mn" == $language$$3$$ || "zh" == $language$$3$$ ? "YMD" : "DMY"
};
D.$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$ = function $$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$$($JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$, $date$$2$$, $prevDate$$, $converter$$2$$) {
  if($converter$$2$$) {
    var $label$$24$$ = D.$JSCompiler_alias_NULL$$, $prevLabel$$ = D.$JSCompiler_alias_NULL$$;
    $converter$$2$$.getAsString ? ($label$$24$$ = $converter$$2$$.getAsString($date$$2$$), $prevLabel$$ = $converter$$2$$.getAsString($prevDate$$)) : $converter$$2$$.format && ($label$$24$$ = $converter$$2$$.format($JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$($date$$2$$) : $date$$2$$), $prevLabel$$ = $converter$$2$$.format($JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$ ? 
    $JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$($prevDate$$) : $prevDate$$));
    if($prevLabel$$ != $label$$24$$) {
      return $label$$24$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__formatAxisLabel$$ = function $$JSCompiler_StaticMethods__formatAxisLabel$$$($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, $prevDate$$1$$, $bOneLabel$$) {
  var $label1$$ = D.$JSCompiler_alias_NULL$$, $label2$$ = D.$JSCompiler_alias_NULL$$, $isVert$$2$$ = "left" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ || "right" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$;
  if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label1Converter$ || $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label2Converter$) {
    return $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label1Converter$ && ($label1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, $prevDate$$1$$, $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label1Converter$)), $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label2Converter$ && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, 
    $date$$3$$, $prevDate$$1$$, $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label2Converter$)), [$label1$$, $label2$$]
  }
  if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 189216E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
    $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
  }else {
    if(24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 145152E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
      if($prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getMonth() != $date$$3$$.getMonth()) {
        $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
      }
      if($prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getYear() != $date$$3$$.getYear()) {
        $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
      }
    }else {
      if(864E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 5184E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
        if($bOneLabel$$) {
          $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
        }else {
          if($prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getDate() != $date$$3$$.getDate()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)
          }
          $prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getYear() != $date$$3$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$1$$.getMonth() != $date$$3$$.getMonth() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_FALSE$$, 
          D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$))
        }
      }else {
        if(36E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 216E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
          if($prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getHours() != $date$$3$$.getHours()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)
          }
        }else {
          if(6E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 36E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
            if($prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getMinutes() != $date$$3$$.getMinutes()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
            }
          }else {
            if($prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getSeconds() != $date$$3$$.getSeconds()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
            }
          }
        }
        if($isVert$$2$$) {
          if($prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getDate() != $date$$3$$.getDate()) {
            $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
          }
        }else {
          $prevDate$$1$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$1$$.getYear() != $date$$3$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$1$$.getMonth() != $date$$3$$.getMonth() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, 
          D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : $prevDate$$1$$.getDate() != $date$$3$$.getDate() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$))
        }
      }
    }
  }
  return[$label1$$, $label2$$]
};
D.$JSCompiler_StaticMethods__formatDate$$ = function $$JSCompiler_StaticMethods__formatDate$$$($JSCompiler_StaticMethods__formatDate$self_dmyOrder$$, $date$$4_dayStr$$, $showDay$$, $showMonth$$, $showYear$$) {
  var $yearStr$$ = "th" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.substring(0, 2) ? $date$$4_dayStr$$.getFullYear() + 543 : $date$$4_dayStr$$.getFullYear(), $monthStr$$;
  $monthStr$$ = $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_monthResources$ && 12 <= $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_monthResources$.length ? $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_monthResources$[$date$$4_dayStr$$.getMonth()] : $date$$4_dayStr$$.toString().split(" ")[1];
  $date$$4_dayStr$$ = $date$$4_dayStr$$.getDate();
  $yearStr$$ += 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ja") || 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("zh") ? "\u5e74" : 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ko") ? "\ub144" : "";
  $date$$4_dayStr$$ += 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ja") || 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("zh") ? "\u65e5" : 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ko") ? "\uc77c" : "";
  $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$ = (0,D.$DvtTimeAxisInfo$_getDMYOrder$$)($JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$);
  for(var $dateStr$$ = "", $i$$117$$ = 0;$i$$117$$ < $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.length;$i$$117$$++) {
    $showDay$$ && "D" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$[$i$$117$$] ? $dateStr$$ += $date$$4_dayStr$$ + " " : $showMonth$$ && "M" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$[$i$$117$$] ? $dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$[$i$$117$$] && ($dateStr$$ += $yearStr$$ + " ")
  }
  return 0 < $dateStr$$.length ? $dateStr$$.slice(0, $dateStr$$.length - 1) : $dateStr$$
};
D.$JSCompiler_StaticMethods__formatTime$$ = function $$JSCompiler_StaticMethods__formatTime$$$($JSCompiler_StaticMethods__formatTime$self$$, $date$$5_secs$$, $showMinute$$, $showSecond$$) {
  var $hours$$ = $date$$5_secs$$.getHours(), $mins$$ = $date$$5_secs$$.getMinutes();
  $date$$5_secs$$ = $date$$5_secs$$.getSeconds();
  var $am$$ = (0,D.$DvtTimeAxisInfo$_getAMString$$)($JSCompiler_StaticMethods__formatTime$self$$.$_locale$), $pm$$ = (0,D.$DvtTimeAxisInfo$_getPMString$$)($JSCompiler_StaticMethods__formatTime$self$$.$_locale$), $ampmBefore_language$$inline_1711$$;
  $ampmBefore_language$$inline_1711$$ = $JSCompiler_StaticMethods__formatTime$self$$.$_locale$.substring(0, 2);
  $ampmBefore_language$$inline_1711$$ = "ko" == $ampmBefore_language$$inline_1711$$ || "zh" == $ampmBefore_language$$inline_1711$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  var $b12HFormat$$ = "" != $am$$ && "" != $pm$$, $ampm$$, $timeLabel$$ = "";
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__formatTime$self$$.$getCtx$()) && ($timeLabel$$ = "\u200f");
  if($b12HFormat$$) {
    if(12 > $hours$$ ? ($ampm$$ = $am$$, 0 == $hours$$ && ($hours$$ = 12)) : ($ampm$$ = $pm$$, 12 < $hours$$ && ($hours$$ -= 12)), $timeLabel$$ += $hours$$, $showMinute$$ || 0 != $mins$$) {
      $timeLabel$$ += ":" + (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($mins$$)
    }
  }else {
    $timeLabel$$ += (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($hours$$) + ":" + (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($mins$$)
  }
  $showSecond$$ && ($timeLabel$$ += ":" + (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($date$$5_secs$$));
  return $b12HFormat$$ ? $ampmBefore_language$$inline_1711$$ ? $ampm$$ + " " + $timeLabel$$ : $timeLabel$$ + " " + $ampm$$ : $timeLabel$$
};
D.$JSCompiler_StaticMethods__doubleDigit$$ = function $$JSCompiler_StaticMethods__doubleDigit$$$($num$$6$$) {
  return 10 > $num$$6$$ ? "0" + $num$$6$$ : "" + $num$$6$$
};
D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$ = function $$JSCompiler_StaticMethods__getMixedFrequencyStep$$$($JSCompiler_StaticMethods__getMixedFrequencyStep$self$$) {
  return 189216E6 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 31536E6 : 145152E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 24192E5 : 5184E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 864E5 : 864E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 108E5 : 216E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 36E5 : 36E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 
  9E5 : 18E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 3E5 : 36E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 6E4 : 6E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 15E3 : 3E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 5E3 : 1E3
};
D.$DvtTimeAxisInfo$_getLabelPositions$$ = function $$DvtTimeAxisInfo$_getLabelPositions$$$($start$$23$$, $end$$9$$, $step$$) {
  var $anchor$$5_time$$2$$ = new window.Date($start$$23$$);
  $anchor$$5_time$$2$$.setMonth(0, 1);
  $anchor$$5_time$$2$$.setHours(0, 0, 0, 0);
  var $anchor$$5_time$$2$$ = $anchor$$5_time$$2$$.getTime(), $times$$ = [];
  if(31536E6 <= $step$$ && 316224E5 >= $step$$) {
    for(;$anchor$$5_time$$2$$ < $start$$23$$;) {
      $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneYear$$)($anchor$$5_time$$2$$)
    }
    for(;$anchor$$5_time$$2$$ <= $end$$9$$;) {
      $times$$.push($anchor$$5_time$$2$$), $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneYear$$)($anchor$$5_time$$2$$)
    }
  }else {
    if(24192E5 <= $step$$ && 26784E5 >= $step$$) {
      for(;$anchor$$5_time$$2$$ < $start$$23$$;) {
        $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneMonth$$)($anchor$$5_time$$2$$)
      }
      for(;$anchor$$5_time$$2$$ <= $end$$9$$;) {
        $times$$.push($anchor$$5_time$$2$$), $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneMonth$$)($anchor$$5_time$$2$$)
      }
    }else {
      for($anchor$$5_time$$2$$ += window.Math.ceil(($start$$23$$ - $anchor$$5_time$$2$$) / $step$$) * $step$$;$anchor$$5_time$$2$$ <= $end$$9$$;) {
        $times$$.push($anchor$$5_time$$2$$), $anchor$$5_time$$2$$ += $step$$
      }
    }
  }
  return $times$$
};
D.$DvtTimeAxisInfo$_addOneYear$$ = function $$DvtTimeAxisInfo$_addOneYear$$$($date$$6_time$$3$$) {
  $date$$6_time$$3$$ = new window.Date($date$$6_time$$3$$);
  $date$$6_time$$3$$.setFullYear($date$$6_time$$3$$.getFullYear() + 1);
  return $date$$6_time$$3$$.getTime()
};
D.$DvtTimeAxisInfo$_addOneMonth$$ = function $$DvtTimeAxisInfo$_addOneMonth$$$($date$$7_time$$4$$) {
  $date$$7_time$$4$$ = new window.Date($date$$7_time$$4$$);
  $date$$7_time$$4$$.setMonth($date$$7_time$$4$$.getMonth() + 1);
  return $date$$7_time$$4$$.getTime()
};
D.$DvtTimeAxisInfo$$.prototype.$_generateLabels$ = function $$DvtTimeAxisInfo$$$$$_generateLabels$$($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$) {
  var $labels1$$ = [], $labels2$$ = [], $isOverlapping$$inline_1736_j$$22_labelInfos1$$ = [], $coords1$$ = [], $coords2$$ = [], $label1$$1_prevDate$$2_text$$43$$ = D.$JSCompiler_alias_NULL$$, $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ = 0, $c2_i$$inline_1739$$ = 0, $container$$13$$ = $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$.$_stage$, $isRTL$$9_labels1$$inline_1733$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$), 
  $isVert$$3_labels2$$inline_1734$$ = "left" == this.$Position$ || "right" == this.$Position$, $lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ = "off" != this.$Options$.zoomAndScroll, $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = D.$JSCompiler_alias_TRUE$$, $levelsGap_skip$$inline_1726$$ = 0;
  $isVert$$3_labels2$$inline_1734$$ && (0,D.$DvtAgent$isBrowserChrome$$)() && ($levelsGap_skip$$inline_1726$$ = 0.2 * this.$getTickLabelFontSize$());
  var $times$$1$$ = [];
  if(this.$_step$ != D.$JSCompiler_alias_NULL$$) {
    $times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$)
  }else {
    if(this.$_mixedFrequency$) {
      this.$_step$ = (0,D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$)(this), $times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$)
    }else {
      for(var $firstLabel$$1_i$$118$$ = 0;$firstLabel$$1_i$$118$$ < this.$_groups$.length;$firstLabel$$1_i$$118$$++) {
        this.$_groups$[$firstLabel$$1_i$$118$$] >= this.$MinValue$ && this.$_groups$[$firstLabel$$1_i$$118$$] <= this.$MaxValue$ && $times$$1$$.push(this.$_groups$[$firstLabel$$1_i$$118$$])
      }
      this.$_step$ = this.$_averageInterval$;
      if(!this.$_skipGaps$ && ($firstLabel$$1_i$$118$$ = new D.$DvtOutputText$$($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$, (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, new window.Date($times$$1$$[0]))[0], 0, 0), (($isVert$$3_labels2$$inline_1734$$ ? D.$DvtTextUtils$$.$guessTextDimensions$($firstLabel$$1_i$$118$$).$h$ : $firstLabel$$1_i$$118$$.$measureDimensions$().$w$) + (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)(this)) * ($times$$1$$.length - 
      1) > window.Math.abs(this.$_endCoord$ - this.$_startCoord$))) {
        this.$_step$ = (0,D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$)(this), $times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$)
      }
    }
  }
  0 == $times$$1$$.length && ($times$$1$$ = [this.$MinValue$]);
  for($firstLabel$$1_i$$118$$ = 0;$firstLabel$$1_i$$118$$ < $times$$1$$.length;$firstLabel$$1_i$$118$$++) {
    var $date$$8_time$$5$$ = $times$$1$$[$firstLabel$$1_i$$118$$], $coord$$13$$ = this.$getCoordAt$($date$$8_time$$5$$);
    if($coord$$13$$ != D.$JSCompiler_alias_NULL$$) {
      var $date$$8_time$$5$$ = new window.Date($date$$8_time$$5$$), $label2$$1_twoLabels$$1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$8_time$$5$$, $label1$$1_prevDate$$2_text$$43$$), $label1$$1_prevDate$$2_text$$43$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
      $label1$$1_prevDate$$2_text$$43$$ != D.$JSCompiler_alias_NULL$$ ? ($isOverlapping$$inline_1736_j$$22_labelInfos1$$.push({text:$label1$$1_prevDate$$2_text$$43$$, $coord$:$label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? $coord$$13$$ + $levelsGap_skip$$inline_1726$$ : $coord$$13$$}), $coords1$$.push($coord$$13$$), $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$++) : ($isOverlapping$$inline_1736_j$$22_labelInfos1$$.push(D.$JSCompiler_alias_NULL$$), 
      $coords1$$.push(D.$JSCompiler_alias_NULL$$));
      $labels1$$.push(D.$JSCompiler_alias_NULL$$);
      $lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ && $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ && ($coord$$13$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$13$$);
      $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = D.$JSCompiler_alias_FALSE$$;
      $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($label1$$1_prevDate$$2_text$$43$$ = this.$CreateLabel$($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$, $label2$$1_twoLabels$$1$$, $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? $coord$$13$$ - $levelsGap_skip$$inline_1726$$ : $coord$$13$$), $coords2$$.push($coord$$13$$), $isVert$$3_labels2$$inline_1734$$ || ($isRTL$$9_labels1$$inline_1733$$ ? $label1$$1_prevDate$$2_text$$43$$.$alignRight$() : 
      $label1$$1_prevDate$$2_text$$43$$.$alignLeft$()), $labels2$$.push($label1$$1_prevDate$$2_text$$43$$), this.$_isOneLevel$ = D.$JSCompiler_alias_FALSE$$, $c2_i$$inline_1739$$++) : ($labels2$$.push(D.$JSCompiler_alias_NULL$$), $coords2$$.push(D.$JSCompiler_alias_NULL$$));
      $label1$$1_prevDate$$2_text$$43$$ = $date$$8_time$$5$$
    }
  }
  $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$ = $labels1$$;
  for(var $rLabelInfos$$inline_1718$$ = [], $rLabelDims$$inline_1719$$ = [], $availWidth$$inline_1720$$ = window.Math.abs(this.$_endCoord$ - this.$_startCoord$), $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = 0;$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ < $isOverlapping$$inline_1736_j$$22_labelInfos1$$.length;$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$++) {
    $isOverlapping$$inline_1736_j$$22_labelInfos1$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$] != D.$JSCompiler_alias_NULL$$ && ($rLabelInfos$$inline_1718$$.push($isOverlapping$$inline_1736_j$$22_labelInfos1$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$]), $rLabelDims$$inline_1719$$.push(D.$JSCompiler_alias_NULL$$), this.$_level1Overflow$.push(0))
  }
  for(var $isVert$$inline_1722$$ = "left" == this.$Position$ || "right" == this.$Position$, $_this$$inline_1723$$ = this, $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ = function $$c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$$($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$) {
    if($rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$] == D.$JSCompiler_alias_NULL$$) {
      if($rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].label = $_this$$inline_1723$$.$CreateLabel$($container$$13$$.$getCtx$(), $rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].text, $rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$coord$), $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$] = 
      $rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].label.$measureDimensions$($container$$13$$), $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$w$ > $availWidth$$inline_1720$$) {
        $rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].label = D.$JSCompiler_alias_NULL$$, $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$w$ = 0, $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$h$ = 0
      }else {
        var $labels1$$ = (0,D.$JSCompiler_StaticMethods__getLabelOverflow$$)($_this$$inline_1723$$, $rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$coord$, $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$w$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$);
        0 != $labels1$$ && ($rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$coord$ -= $labels1$$, $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].x -= $labels1$$, $rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].label.$setX$($rLabelInfos$$inline_1718$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].label.$getX$() - 
        $labels1$$), $_this$$inline_1723$$.$_level1Overflow$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$] = $labels1$$)
      }
    }
    return $isVert$$inline_1722$$ ? $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$h$ : $rLabelDims$$inline_1719$$[$context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$].$w$
  }, $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = ($c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$(0) + (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)(this)) * ($rLabelInfos$$inline_1718$$.length - 1), $levelsGap_skip$$inline_1726$$ = 0 < $availWidth$$inline_1720$$ ? window.Math.ceil($bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ / $availWidth$$inline_1720$$) - 
  1 : 0, $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = D.$JSCompiler_alias_TRUE$$;$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$;) {
    for($bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = 0;$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ < $rLabelInfos$$inline_1718$$.length;$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$++) {
      0 == $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ % ($levelsGap_skip$$inline_1726$$ + 1) ? ($c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$($bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$), $rLabelInfos$$inline_1718$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$].$skipped$ = D.$JSCompiler_alias_FALSE$$) : $rLabelInfos$$inline_1718$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$].$skipped$ = 
      D.$JSCompiler_alias_TRUE$$
    }
    $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $rLabelDims$$inline_1719$$, $levelsGap_skip$$inline_1726$$);
    $levelsGap_skip$$inline_1726$$++
  }
  for($bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ = 0;$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ < $isOverlapping$$inline_1736_j$$22_labelInfos1$$.length;$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$++) {
    $isOverlapping$$inline_1736_j$$22_labelInfos1$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$] != D.$JSCompiler_alias_NULL$$ && !$isOverlapping$$inline_1736_j$$22_labelInfos1$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$].$skipped$ && ($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$] = 
    $isOverlapping$$inline_1736_j$$22_labelInfos1$$[$bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$].label, $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$++)
  }
  if(!$lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ && 1 < $c2_i$$inline_1739$$ && $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ < 1.5 * $c2_i$$inline_1739$$) {
    $labels1$$ = $labels2$$;
    $labels2$$ = D.$JSCompiler_alias_NULL$$;
    for($isOverlapping$$inline_1736_j$$22_labelInfos1$$ = 0;$isOverlapping$$inline_1736_j$$22_labelInfos1$$ < $labels1$$.length;$isOverlapping$$inline_1736_j$$22_labelInfos1$$++) {
      $labels1$$[$isOverlapping$$inline_1736_j$$22_labelInfos1$$] != D.$JSCompiler_alias_NULL$$ && $labels1$$[$isOverlapping$$inline_1736_j$$22_labelInfos1$$].$alignCenter$()
    }
    (0,D.$JSCompiler_StaticMethods__skipLabelsGreedy$$)(this, $labels1$$, (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels1$$, $container$$13$$), D.$JSCompiler_alias_FALSE$$, $isRTL$$9_labels1$$inline_1733$$)
  }else {
    $c2_i$$inline_1739$$ = (0,D.$JSCompiler_StaticMethods__skipLabelsGreedy$$)(this, $labels2$$, (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$, $container$$13$$), D.$JSCompiler_alias_TRUE$$, $isRTL$$9_labels1$$inline_1733$$), 0 == $c2_i$$inline_1739$$ && ($labels2$$ = D.$JSCompiler_alias_NULL$$)
  }
  if($isVert$$3_labels2$$inline_1734$$ && $labels2$$ != D.$JSCompiler_alias_NULL$$) {
    var $isRTL$$9_labels1$$inline_1733$$ = $labels1$$, $isVert$$3_labels2$$inline_1734$$ = $labels2$$, $gap$$inline_1735$$ = 0.1 * this.$getTickLabelFontSize$(), $isOverlapping$$inline_1736_j$$22_labelInfos1$$ = function $$isOverlapping$$inline_1736_j$$22_labelInfos1$$$($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$, $labels1$$) {
      return $labels1$$.y >= $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$.y && $labels1$$.y - $gap$$inline_1735$$ < $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$.y + $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$.$h$ || $labels1$$.y < $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$.y && $labels1$$.y + $labels1$$.$h$ + $gap$$inline_1735$$ > $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$.y ? 
      D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
    }, $lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ = D.$JSCompiler_alias_NULL$$;
    $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$ = D.$JSCompiler_alias_FALSE$$;
    for($c2_i$$inline_1739$$ = 0;$c2_i$$inline_1739$$ < $isRTL$$9_labels1$$inline_1733$$.length;$c2_i$$inline_1739$$++) {
      if($isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$] && $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$]) {
        $isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$].$alignTop$();
        $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$].$alignBottom$();
        if($lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ && $isOverlapping$$inline_1736_j$$22_labelInfos1$$($lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$, $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$].$measureDimensions$())) {
          $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
        $lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ = $isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$].$measureDimensions$()
      }else {
        if($isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$] || $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$]) {
          $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ = $isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$] ? $isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$] : $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$];
          if($lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ && $isOverlapping$$inline_1736_j$$22_labelInfos1$$($lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$, $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$.$measureDimensions$())) {
            $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }
          $lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ = $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$.$measureDimensions$()
        }
      }
    }
    if($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$) {
      $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ = $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$ = $lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ = D.$JSCompiler_alias_NULL$$;
      for($c2_i$$inline_1739$$ = 0;$c2_i$$inline_1739$$ < $isRTL$$9_labels1$$inline_1733$$.length;$c2_i$$inline_1739$$++) {
        $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$] ? ($isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$] = D.$JSCompiler_alias_NULL$$, $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$].$alignMiddle$(), $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = $isVert$$3_labels2$$inline_1734$$[$c2_i$$inline_1739$$].$measureDimensions$(), $context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$ && $isOverlapping$$inline_1736_j$$22_labelInfos1$$($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$, 
        $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$) && ($isRTL$$9_labels1$$inline_1733$$[$lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$] = D.$JSCompiler_alias_NULL$$), $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ = $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$) : $isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$] && ($bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$ = 
        $isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$].$measureDimensions$(), $c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$ && $isOverlapping$$inline_1736_j$$22_labelInfos1$$($c1_count$$inline_1728_getDim$$inline_1724_label$$inline_1740_lastLv2Dims$$inline_1743$$, $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$) ? $isRTL$$9_labels1$$inline_1733$$[$c2_i$$inline_1739$$] = D.$JSCompiler_alias_NULL$$ : ($context$$24_labels$$inline_1715_lastLv1Dims$$inline_1742_overlapping$$inline_1738$$ = 
        $bOverlaps$$inline_1727_dims$$inline_1744_first$$2_j$$inline_1721_totalWidth$$inline_1725$$, $lastDims$$inline_1737_lastLv1Idx$$inline_1741_scrollable$$ = $c2_i$$inline_1739$$))
      }
    }
  }
  this.$_level1Labels$ = $labels1$$;
  this.$_level2Labels$ = $labels2$$;
  this.$_level1Coords$ = $coords1$$;
  this.$_level2Coords$ = $coords2$$
};
D.$JSCompiler_StaticMethods__getLabelOverflow$$ = function $$JSCompiler_StaticMethods__getLabelOverflow$$$($JSCompiler_StaticMethods__getLabelOverflow$self$$, $coord$$14_maxOverflow$$1$$, $labelLength$$, $isStartAligned$$, $isRTL$$10$$) {
  var $minOverflow$$1$$ = $coord$$14_maxOverflow$$1$$ - ($isStartAligned$$ ? $isRTL$$10$$ ? $labelLength$$ : 0 : 0.5 * $labelLength$$);
  if($minOverflow$$1$$ < $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._minOverflowCoord) {
    return window.Math.floor($minOverflow$$1$$ - $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._minOverflowCoord)
  }
  $coord$$14_maxOverflow$$1$$ += $isStartAligned$$ ? $isRTL$$10$$ ? 0 : $labelLength$$ : 0.5 * $labelLength$$;
  return $coord$$14_maxOverflow$$1$$ > $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._maxOverflowCoord ? window.Math.ceil($coord$$14_maxOverflow$$1$$ - $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._maxOverflowCoord) : 0
};
D.$JSCompiler_StaticMethods__skipLabelsGreedy$$ = function $$JSCompiler_StaticMethods__skipLabelsGreedy$$$($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$, $labels$$16$$, $labelDims$$8$$, $isStartAligned$$1_pointB2$$3$$, $isRTL$$11$$) {
  if(!$labelDims$$8$$ || 0 >= $labelDims$$8$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $isVert$$4$$ = "left" == $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$Position$ || "right" == $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$Position$, $fontSize$$5_gap$$7$$ = $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$getTickLabelFontSize$(), $fontSize$$5_gap$$7$$ = $isVert$$4$$ ? 0.1 * $fontSize$$5_gap$$7$$ : 0.3 * $fontSize$$5_gap$$7$$, $count$$9$$ = 0, $pointA1$$3$$, $pointA2$$3$$, $label$$25$$, $availWidth$$6$$ = window.Math.abs($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_endCoord$ - 
  $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_startCoord$), $j$$23$$ = 0;$j$$23$$ < $labelDims$$8$$.length;$j$$23$$++) {
    if($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_level2Overflow$.push(0), $labels$$16$$[$j$$23$$] != D.$JSCompiler_alias_NULL$$) {
      $label$$25$$ = $labels$$16$$[$j$$23$$];
      var $labelLength$$1_overflow$$2$$ = D.$DvtTextUtils$$.$getTextWidth$($label$$25$$);
      $labelDims$$8$$[$j$$23$$].$w$ > $availWidth$$6$$ ? $labels$$16$$[$j$$23$$] = D.$JSCompiler_alias_NULL$$ : ($labelLength$$1_overflow$$2$$ = (0,D.$JSCompiler_StaticMethods__getLabelOverflow$$)($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$, $label$$25$$.$getX$(), $labelLength$$1_overflow$$2$$, $isStartAligned$$1_pointB2$$3$$, $isRTL$$11$$), $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_level2Overflow$[$j$$23$$] = $labelLength$$1_overflow$$2$$, 0 != $labelLength$$1_overflow$$2$$ && 
      ($label$$25$$.$setX$($label$$25$$.$getX$() - $labelLength$$1_overflow$$2$$), $labelDims$$8$$[$j$$23$$].x -= $labelLength$$1_overflow$$2$$))
    }
  }
  for($j$$23$$ = 0;$j$$23$$ < $labelDims$$8$$.length;$j$$23$$++) {
    $labelDims$$8$$[$j$$23$$] != D.$JSCompiler_alias_NULL$$ && ($isVert$$4$$ ? ($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ = $labelDims$$8$$[$j$$23$$].y, $isStartAligned$$1_pointB2$$3$$ = $labelDims$$8$$[$j$$23$$].y + $labelDims$$8$$[$j$$23$$].$h$) : ($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ = $labelDims$$8$$[$j$$23$$].x, $isStartAligned$$1_pointB2$$3$$ = $labelDims$$8$$[$j$$23$$].x + $labelDims$$8$$[$j$$23$$].$w$), $pointA1$$3$$ != D.$JSCompiler_alias_NULL$$ && 
    ($pointA2$$3$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ >= $pointA1$$3$$ && $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ - $fontSize$$5_gap$$7$$ < $pointA2$$3$$ || $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ < $pointA1$$3$$ && $isStartAligned$$1_pointB2$$3$$ + $fontSize$$5_gap$$7$$ > $pointA1$$3$$)) && ($labels$$16$$[$j$$23$$] = D.$JSCompiler_alias_NULL$$), $labels$$16$$[$j$$23$$] != D.$JSCompiler_alias_NULL$$ && 
    ($pointA1$$3$$ = $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$, $pointA2$$3$$ = $isStartAligned$$1_pointB2$$3$$, $count$$9$$++))
  }
  return $count$$9$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$25$$, $levelIdx$$6$$) {
  if($levelIdx$$6$$ && 1 < $levelIdx$$6$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || this.$_generateLabels$($context$$25$$);
  return 1 == $levelIdx$$6$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  var $coords$$4$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$121$$ = 0;$i$$121$$ < this.$_level1Coords$.length;$i$$121$$++) {
      this.$_level1Coords$[$i$$121$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$121$$] != D.$JSCompiler_alias_NULL$$ && $coords$$4$$.push(this.$_level1Coords$[$i$$121$$])
    }
  }else {
    for($i$$121$$ = 1;$i$$121$$ < this.$_level2Coords$.length;$i$$121$$++) {
      this.$_level2Coords$[$i$$121$$] != D.$JSCompiler_alias_NULL$$ && $coords$$4$$.push(this.$_level2Coords$[$i$$121$$])
    }
  }
  return $coords$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  if(this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$5$$ = [], $i$$122$$ = 0;$i$$122$$ < this.$_level1Coords$.length;$i$$122$$++) {
    this.$_level1Coords$[$i$$122$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$122$$] != D.$JSCompiler_alias_NULL$$ && $coords$$5$$.push(this.$_level1Coords$[$i$$122$$])
  }
  return $coords$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$15_ratio$$3$$) {
  $coord$$15_ratio$$3$$ = ($coord$$15_ratio$$3$$ - this.$_startCoord$) / (this.$_endCoord$ - this.$_startCoord$);
  if(this.$_skipGaps$) {
    var $minVal$$ = (0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MinValue$);
    return(0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, $minVal$$ + $coord$$15_ratio$$3$$ * ((0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MaxValue$) - $minVal$$))
  }
  return this.$MinValue$ + $coord$$15_ratio$$3$$ * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($ratio$$4_value$$81$$) {
  if(this.$_skipGaps$) {
    var $minVal$$1$$ = (0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MinValue$);
    $ratio$$4_value$$81$$ = ((0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, $ratio$$4_value$$81$$) - $minVal$$1$$) / ((0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MaxValue$) - $minVal$$1$$)
  }else {
    $ratio$$4_value$$81$$ = ($ratio$$4_value$$81$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$)
  }
  return this.$_startCoord$ + $ratio$$4_value$$81$$ * (this.$_endCoord$ - this.$_startCoord$)
};
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = function $$JSCompiler_prototypeAlias$$$$linearToActual$$($value$$82$$) {
  return $value$$82$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_skipGaps$ ? (0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, $value$$82$$) : $value$$82$$
};
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = function $$JSCompiler_prototypeAlias$$$$actualToLinear$$($value$$83$$) {
  return $value$$83$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_skipGaps$ ? (0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, $value$$83$$) : $value$$83$$
};
D.$JSCompiler_StaticMethods__timeToIndex$$ = function $$JSCompiler_StaticMethods__timeToIndex$$$($JSCompiler_StaticMethods__timeToIndex$self$$, $time$$6$$) {
  for(var $endIndex$$15$$ = $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$.length, $i$$123_startIndex$$15$$ = 0;$i$$123_startIndex$$15$$ < $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$.length;$i$$123_startIndex$$15$$++) {
    if($time$$6$$ <= $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$i$$123_startIndex$$15$$]) {
      $endIndex$$15$$ = $i$$123_startIndex$$15$$;
      break
    }
  }
  var $i$$123_startIndex$$15$$ = $endIndex$$15$$ - 1, $startTime$$ = $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$i$$123_startIndex$$15$$] !== D.$JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$i$$123_startIndex$$15$$] : $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[0] - $JSCompiler_StaticMethods__timeToIndex$self$$.$_averageInterval$;
  return $i$$123_startIndex$$15$$ + ($time$$6$$ - $startTime$$) / (($JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$endIndex$$15$$] !== D.$JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$endIndex$$15$$] : $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$.length - 1] + $JSCompiler_StaticMethods__timeToIndex$self$$.$_averageInterval$) - $startTime$$)
};
D.$JSCompiler_StaticMethods__indexToTime$$ = function $$JSCompiler_StaticMethods__indexToTime$$$($JSCompiler_StaticMethods__indexToTime$self$$, $index$$130$$) {
  var $endIndex$$16$$ = window.Math.min(window.Math.max(window.Math.ceil($index$$130$$), 0), $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$.length), $startIndex$$16$$ = $endIndex$$16$$ - 1, $startTime$$1$$ = $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$startIndex$$16$$] !== D.$JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$startIndex$$16$$] : $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[0] - $JSCompiler_StaticMethods__indexToTime$self$$.$_averageInterval$;
  return $startTime$$1$$ + ($index$$130$$ - $startIndex$$16$$) * (($JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$endIndex$$16$$] !== D.$JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$endIndex$$16$$] : $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$JSCompiler_StaticMethods__indexToTime$self$$.$_groups$.length - 1] + $JSCompiler_StaticMethods__indexToTime$self$$.$_averageInterval$) - $startTime$$1$$)
};
D.$DvtTimeAxisInfo$$.prototype.$getGroupWidth$ = function $$DvtTimeAxisInfo$$$$$getGroupWidth$$() {
  return this.$_skipGaps$ ? window.Math.abs(this.$getUnboundedCoordAt$((0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, 1)) - this.$getUnboundedCoordAt$((0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, 0))) : window.Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$))
};
D.$DvtTimeAxisInfo$$.prototype.$getMinimumExtent$ = function $$DvtTimeAxisInfo$$$$$getMinimumExtent$$() {
  return this.$_skipGaps$ ? 1 : this.$_mixedFrequency$ ? window.Math.min(this.$_timeRange$ / 8, this.$_averageInterval$) : this.$_averageInterval$
};
D.$DvtTimeAxisInfo$$.prototype.$getStartOverflow$ = function $$DvtTimeAxisInfo$$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$DvtTimeAxisInfo$$.prototype.$getEndOverflow$ = function $$DvtTimeAxisInfo$$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$
};
  return D;
});