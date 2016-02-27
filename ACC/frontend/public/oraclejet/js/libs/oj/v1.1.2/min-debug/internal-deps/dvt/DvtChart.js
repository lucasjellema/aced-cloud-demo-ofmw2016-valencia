/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSelectableWedge$$ = function $$DvtSelectableWedge$$$($cmds$$inline_2421_context$$49$$, $cx$$6$$, $cy$$7$$, $rx$$1$$, $ry$$1$$, $sa$$1$$, $ae$$1$$, $gap$$14$$, $ir$$2$$, $id$$32$$) {
  this.Init($cmds$$inline_2421_context$$49$$, D.$JSCompiler_alias_NULL$$, $id$$32$$);
  this.$_cx$ = $cx$$6$$;
  this.$_cy$ = $cy$$7$$;
  this.$_rx$ = $rx$$1$$;
  this.$_ry$ = $ry$$1$$;
  this.$_sa$ = $sa$$1$$;
  this.$_ae$ = $ae$$1$$;
  this.$_gap$ = $gap$$14$$;
  this.$_ir$ = $ir$$2$$;
  $cmds$$inline_2421_context$$49$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, 0);
  this.$setCmds$($cmds$$inline_2421_context$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSelectableWedge$$, D.$DvtPath$$, "DvtSelectableWedge");
D.$DvtSelectableWedge$$.prototype.Init = function $$DvtSelectableWedge$$$$Init$($context$$50$$, $cmds$$8$$, $id$$33$$) {
  D.$DvtSelectableWedge$$.$superclass$.Init.call(this, $context$$50$$, $cmds$$8$$, $id$$33$$)
};
D.$JSCompiler_StaticMethods__makeWedgePath$$ = function $$JSCompiler_StaticMethods__makeWedgePath$$$($JSCompiler_StaticMethods__makeWedgePath$self$$, $inset$$2$$) {
  var $rx$$3$$ = window.Math.max($JSCompiler_StaticMethods__makeWedgePath$self$$.$_rx$ - $inset$$2$$, 0), $ry$$3$$ = window.Math.max($JSCompiler_StaticMethods__makeWedgePath$self$$.$_ry$ - $inset$$2$$, 0), $ir$$4$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ir$ ? $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ir$ + $inset$$2$$ : 0, $angleExtentRads$$ = 360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? D.$DvtMath$$.$degreesToRads$(359.99) : D.$DvtMath$$.$degreesToRads$($JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$), 
  $pathCommands$$1_startAngleRads$$ = D.$DvtMath$$.$degreesToRads$($JSCompiler_StaticMethods__makeWedgePath$self$$.$_sa$), $dataItemGaps_innerPointY$$ = (360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ || $rx$$3$$ < $inset$$2$$ ? 0 : $JSCompiler_StaticMethods__makeWedgePath$self$$.$_gap$ + 2 * $inset$$2$$) / 2, $arcPoint2Y_gapAngle$$ = $dataItemGaps_innerPointY$$ < $rx$$3$$ ? window.Math.asin($dataItemGaps_innerPointY$$ / $rx$$3$$) : 0, $arcPointX_centerLineAngle$$ = -$angleExtentRads$$ / 
  2 - $pathCommands$$1_startAngleRads$$, $arcPointY_distanceToStartPointX$$ = window.Math.min(5 * $dataItemGaps_innerPointY$$, 0 < $angleExtentRads$$ ? window.Math.abs($dataItemGaps_innerPointY$$ / window.Math.sin($angleExtentRads$$ / 2)) : 0), $innerPointX_startPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos($arcPointX_centerLineAngle$$) * $arcPointY_distanceToStartPointX$$, $innerPoint2X_startPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin($arcPointX_centerLineAngle$$) * 
  (0 == $rx$$3$$ ? $arcPointY_distanceToStartPointX$$ : $arcPointY_distanceToStartPointX$$ * $ry$$3$$ / $rx$$3$$), $arcPointX_centerLineAngle$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos(-$arcPoint2Y_gapAngle$$ - $pathCommands$$1_startAngleRads$$) * $rx$$3$$, $arcPointY_distanceToStartPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$arcPoint2Y_gapAngle$$ - $pathCommands$$1_startAngleRads$$) * $ry$$3$$, $arcPoint2X$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + 
  window.Math.cos(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $arcPoint2Y_gapAngle$$) * $rx$$3$$, $arcPoint2Y_gapAngle$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $arcPoint2Y_gapAngle$$) * $ry$$3$$;
  if(0 < $ir$$4$$) {
    var $innerGapAngle_innerPoint2Y$$ = $dataItemGaps_innerPointY$$ < $ir$$4$$ ? window.Math.asin($dataItemGaps_innerPointY$$ / $ir$$4$$) : 0, $innerPointX_startPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos(-$innerGapAngle_innerPoint2Y$$ - $pathCommands$$1_startAngleRads$$) * $ir$$4$$, $dataItemGaps_innerPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$innerGapAngle_innerPoint2Y$$ - $pathCommands$$1_startAngleRads$$) * $ir$$4$$, 
    $innerPoint2X_startPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $innerGapAngle_innerPoint2Y$$) * $ir$$4$$, $innerGapAngle_innerPoint2Y$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $innerGapAngle_innerPoint2Y$$) * $ir$$4$$;
    360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.moveTo($innerPointX_startPointX$$, 
    $dataItemGaps_innerPointY$$)) : ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($innerPoint2X_startPointY$$, $innerGapAngle_innerPoint2Y$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($innerPointX_startPointX$$, 
    $dataItemGaps_innerPointY$$));
    $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($ir$$4$$, $ir$$4$$, $angleExtentRads$$, 0, $innerPoint2X_startPointY$$, $innerGapAngle_innerPoint2Y$$)
  }else {
    360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$)) : ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($innerPointX_startPointX$$, $innerPoint2X_startPointY$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($arcPoint2X$$, 
    $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($innerPointX_startPointX$$, $innerPoint2X_startPointY$$))
  }
  return $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSelectableWedge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  var $innerChildCmds_outerBorderWidth$$2$$ = this.$isSelected$() ? 2 : 1.25, $outerChildCmds$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, $innerChildCmds_outerBorderWidth$$2$$), $innerChildCmds_outerBorderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, $innerChildCmds_outerBorderWidth$$2$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setCmds$($outerChildCmds$$), this.$InnerChild$.$setCmds$($innerChildCmds_outerBorderWidth$$2$$)) : (this.$OuterChild$ = new D.$DvtPath$$(this.$getCtx$(), $outerChildCmds$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$), this.$OuterChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new D.$DvtPath$$(this.$getCtx$(), $innerChildCmds_outerBorderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$), 
  this.$InnerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$addChild$(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$_showNestedBorders$ = function $$JSCompiler_prototypeAlias$$$$_showNestedBorders$$($outerBorderColor$$1$$, $innerBorderColor$$1$$) {
  this.$_initializeSelectionEffects$();
  $innerBorderColor$$1$$ ? (this.$setSolidFill$($outerBorderColor$$1$$), this.$setStroke$(D.$JSCompiler_alias_NULL$$), this.$OuterChild$.$setSolidFill$($innerBorderColor$$1$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($outerBorderColor$$1$$ ? (this.$setSolidFill$($outerBorderColor$$1$$), this.$setStroke$(D.$JSCompiler_alias_NULL$$), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_shapeStroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$)), 
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$11$$, $stroke$$19$$, $dataColor$$11$$, $innerColor$$8$$, $outerColor$$9$$) {
  this.$_fill$ = $fill$$11$$;
  this.$_shapeStroke$ = $stroke$$19$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$11$$);
  this.$_innerColor$ = $innerColor$$8$$;
  this.$_outerColor$ = $outerColor$$9$$;
  this.$setFill$($fill$$11$$);
  $stroke$$19$$ && this.$setStroke$($stroke$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$10$$) {
  this.$IsSelected$ != $selected$$10$$ && (this.$IsSelected$ = $selected$$10$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtSelectableRectangularPolygon$$ = function $$DvtSelectableRectangularPolygon$$$($context$$48$$, $arPoints$$1$$, $id$$31$$) {
  this.$_x1$ = window.Math.min($arPoints$$1$$[0], $arPoints$$1$$[4]);
  this.$_x2$ = window.Math.max($arPoints$$1$$[0], $arPoints$$1$$[4]);
  this.$_y1$ = window.Math.min($arPoints$$1$$[1], $arPoints$$1$$[5]);
  this.$_y2$ = window.Math.max($arPoints$$1$$[1], $arPoints$$1$$[5]);
  this.Init($context$$48$$, [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y1$, this.$_x2$, this.$_y2$, this.$_x1$, this.$_y2$], $id$$31$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSelectableRectangularPolygon$$, D.$DvtPolygon$$, "DvtSelectableRectangularPolygon");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSelectableRectangularPolygon$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$10$$, $stroke$$18$$, $dataColor$$10$$, $innerColor$$7$$, $outerColor$$8$$) {
  this.$_fill$ = $fill$$10$$;
  this.$_borderStroke$ = $stroke$$18$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$10$$);
  this.$_innerColor$ = $innerColor$$7$$;
  this.$_outerColor$ = $outerColor$$8$$;
  this.$setFill$($fill$$10$$);
  $stroke$$18$$ && this.$setStroke$($stroke$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$6$$) {
  this.$_x1$ = window.Math.min($ar$$6$$[0], $ar$$6$$[4]);
  this.$_x2$ = window.Math.max($ar$$6$$[0], $ar$$6$$[4]);
  this.$_y1$ = window.Math.min($ar$$6$$[1], $ar$$6$$[5]);
  this.$_y2$ = window.Math.max($ar$$6$$[1], $ar$$6$$[5]);
  this.$setPoints$($ar$$6$$);
  this.$_initializeSelectionEffects$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$9$$) {
  this.$IsSelected$ != $selected$$9$$ && (this.$IsSelected$ = $selected$$9$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getPrimaryFill$ = (0,D.$JSCompiler_get$$)("$_fill$");
D.$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  this.$setPoints$(this.$_createPointsArray$(this.$isSelected$() ? -1 : 0));
  var $innerChildPoints$$1_outerBorderWidth$$1$$ = this.$isSelected$() ? 1 : 1.25, $outerChildPoints$$1$$ = this.$_createPointsArray$($innerChildPoints$$1_outerBorderWidth$$1$$), $innerChildPoints$$1_outerBorderWidth$$1$$ = this.$_createPointsArray$($innerChildPoints$$1_outerBorderWidth$$1$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($outerChildPoints$$1$$), this.$InnerChild$.$setPoints$($innerChildPoints$$1_outerBorderWidth$$1$$)) : (this.$OuterChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $outerChildPoints$$1$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$), this.$OuterChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $innerChildPoints$$1_outerBorderWidth$$1$$), 
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$), this.$InnerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$addChild$(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$_showNestedBorders$ = function $$JSCompiler_prototypeAlias$$$$_showNestedBorders$$($outerBorderColor$$, $innerBorderColor$$) {
  this.$_initializeSelectionEffects$();
  $innerBorderColor$$ ? (this.$setSolidFill$($outerBorderColor$$), this.$setStroke$(D.$JSCompiler_alias_NULL$$), this.$OuterChild$.$setSolidFill$($innerBorderColor$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($outerBorderColor$$ ? (this.$setSolidFill$($outerBorderColor$$), this.$setStroke$(D.$JSCompiler_alias_NULL$$), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_borderStroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$)), 
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$_createPointsArray$ = function $$JSCompiler_prototypeAlias$$$$_createPointsArray$$($inset$$1_y2$$8$$) {
  var $x1$$16$$ = this.$_x1$ + $inset$$1_y2$$8$$, $x2$$14$$ = this.$_x2$ - $inset$$1_y2$$8$$, $y1$$10$$ = this.$_y1$ + $inset$$1_y2$$8$$;
  $inset$$1_y2$$8$$ = this.$_y2$ - $inset$$1_y2$$8$$;
  return[$x1$$16$$, $y1$$10$$, $x2$$14$$, $y1$$10$$, $x2$$14$$, $inset$$1_y2$$8$$, $x1$$16$$, $inset$$1_y2$$8$$]
};
D.$DvtChartAxis$$ = function $$DvtChartAxis$$$($context$$42$$, $callback$$42$$, $callbackObj$$7$$) {
  this.Init($context$$42$$, $callback$$42$$, $callbackObj$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxis$$, D.$DvtAxis$$, "DvtChartAxis");
D.$JSCompiler_StaticMethods_axisToPlotArea$$ = function $$JSCompiler_StaticMethods_axisToPlotArea$$$($JSCompiler_StaticMethods_axisToPlotArea$self$$, $coord$$21$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self$$.$getOptions$().position) {
    return $coord$$21$$
  }
  if($coord$$21$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ret$$6$$ = $coord$$21$$ - (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_axisToPlotArea$self$$);
  return window.Math.round(10 * $ret$$6$$) / 10
};
D.$JSCompiler_StaticMethods_plotAreaToAxis$$ = function $$JSCompiler_StaticMethods_plotAreaToAxis$$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$22$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$22$$
  }
  if($coord$$22$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ret$$7$$ = $coord$$22$$ + (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return window.Math.round($ret$$7$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = function $$JSCompiler_prototypeAlias$$$$linearToActual$$($value$$93$$) {
  return this.$Info$.$linearToActual$($value$$93$$)
};
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = function $$JSCompiler_prototypeAlias$$$$actualToLinear$$($value$$94$$) {
  return this.$Info$.$actualToLinear$($value$$94$$)
};
D.$JSCompiler_prototypeAlias$$.$getValueAt$ = function $$JSCompiler_prototypeAlias$$$$getValueAt$$($coord$$23$$) {
  return this.$Info$.$getValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$23$$))
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$95$$) {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getCoordAt$($value$$95$$))
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$24$$) {
  return this.$Info$.$getBoundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$24$$))
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$96$$) {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBoundedCoordAt$($value$$96$$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$25$$) {
  return this.$Info$.$getUnboundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$25$$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$97$$) {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getUnboundedCoordAt$($value$$97$$))
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$())
};
D.$JSCompiler_prototypeAlias$$.$getPosition$ = function $$JSCompiler_prototypeAlias$$$$getPosition$$() {
  return this.$getOptions$().position
};
D.$JSCompiler_StaticMethods_isGroupAxis$$ = function $$JSCompiler_StaticMethods_isGroupAxis$$$($JSCompiler_StaticMethods_isGroupAxis$self$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$self$$.$Info$ instanceof D.$DvtGroupAxisInfo$$
};
D.$DvtChartAxis$$.prototype.$getMajorTickCoords$ = function $$DvtChartAxis$$$$$getMajorTickCoords$$() {
  for(var $coords$$14$$ = this.$Info$ ? this.$Info$.$getMajorTickCoords$() : [], $i$$162$$ = 0;$i$$162$$ < $coords$$14$$.length;$i$$162$$++) {
    $coords$$14$$[$i$$162$$] = (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, $coords$$14$$[$i$$162$$])
  }
  return $coords$$14$$
};
D.$DvtChartAxis$$.prototype.$getMinorTickCoords$ = function $$DvtChartAxis$$$$$getMinorTickCoords$$() {
  for(var $coords$$15$$ = this.$Info$ ? this.$Info$.$getMinorTickCoords$() : [], $i$$163$$ = 0;$i$$163$$ < $coords$$15$$.length;$i$$163$$++) {
    $coords$$15$$[$i$$163$$] = (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, $coords$$15$$[$i$$163$$])
  }
  return $coords$$15$$
};
D.$DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$())
};
D.$JSCompiler_StaticMethods_getLinearViewportMin$$ = function $$JSCompiler_StaticMethods_getLinearViewportMin$$$($JSCompiler_StaticMethods_getLinearViewportMin$self$$) {
  return $JSCompiler_StaticMethods_getLinearViewportMin$self$$.$actualToLinear$($JSCompiler_StaticMethods_getLinearViewportMin$self$$.$Info$.$MinValue$)
};
D.$JSCompiler_StaticMethods_getLinearViewportMax$$ = function $$JSCompiler_StaticMethods_getLinearViewportMax$$$($JSCompiler_StaticMethods_getLinearViewportMax$self$$) {
  return $JSCompiler_StaticMethods_getLinearViewportMax$self$$.$actualToLinear$($JSCompiler_StaticMethods_getLinearViewportMax$self$$.$Info$.$MaxValue$)
};
D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$ = function $$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$$($JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$, $coord$$26$$) {
  return $JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$.$Info$.$actualToLinear$($JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$.$getUnboundedValueAt$($coord$$26$$))
};
D.$JSCompiler_StaticMethods_isFullViewport$$ = function $$JSCompiler_StaticMethods_isFullViewport$$$($JSCompiler_StaticMethods_isFullViewport$self$$) {
  return $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$MinValue$ == $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$GlobalMin$ && $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$MaxValue$ == $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$GlobalMax$
};
D.$JSCompiler_StaticMethods_getLeftOverflow$$ = function $$JSCompiler_StaticMethods_getLeftOverflow$$$($JSCompiler_StaticMethods_getLeftOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getLeftOverflow$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getEndOverflow$() : $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getStartOverflow$()
};
D.$JSCompiler_StaticMethods_getRightOverflow$$ = function $$JSCompiler_StaticMethods_getRightOverflow$$$($JSCompiler_StaticMethods_getRightOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getRightOverflow$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getStartOverflow$() : $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getEndOverflow$()
};
D.$DvtChartBar$$ = function $$DvtChartBar$$$($chart$$102$$, $axisCoord$$1$$, $baselineCoord$$3$$, $endCoord$$, $x1$$7$$, $x2$$5$$) {
  this.Init($chart$$102$$.$getCtx$());
  this.$_bHoriz$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$102$$);
  this.$_bStacked$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$102$$);
  this.$_barGapRatio$ = D.$DvtChartStyleUtils$$.$getBarGapRatio$($chart$$102$$);
  this.$_dataItemGaps$ = D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$102$$);
  this.$_axisCoord$ = $axisCoord$$1$$;
  this.$_setBarCoords$($baselineCoord$$3$$, $endCoord$$, $x1$$7$$, $x2$$5$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartBar$$, D.$DvtSelectableRectangularPolygon$$, "DvtChartBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$3$$) {
  this.$IsSelected$ != $selected$$3$$ && (this.$IsSelected$ = $selected$$3$$, this.$isSelected$() ? (this.$_tempX1$ = this.$_x1$, this.$_tempX2$ = this.$_x2$, this.$_tempBaselineCoord$ = this.$_baselineCoord$, this.$_x1$ = this.$_origX1$, this.$_x2$ = this.$_origX2$, this.$_baselineCoord$ = this.$_origBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$)) : (this.$_x1$ = this.$_tempX1$, 
  this.$_x2$ = this.$_tempX2$, this.$_baselineCoord$ = this.$_tempBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : D.$JSCompiler_alias_NULL$$)))
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($bFlip$$2$$) {
  return $bFlip$$2$$ ? this.$_bHoriz$ ? [this.$_x2$, this.$_x1$, this.$_baselineCoord$, this.$_endCoord$] : [this.$_x1$, this.$_x2$, this.$_endCoord$, this.$_baselineCoord$] : [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$15$$, $indicator$$2$$) {
  this.$_setBarCoords$($params$$15$$[0], $params$$15$$[1], $params$$15$$[2], $params$$15$$[3], D.$JSCompiler_alias_FALSE$$);
  if($indicator$$2$$) {
    var $indicatorPosition_x$$inline_2276$$, $widthCoord$$inline_2275_y$$inline_2277$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_2279_midLength$$inline_2278$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_2276$$ = this.$_bHoriz$ ? $lengthCoord$$inline_2279_midLength$$inline_2278$$ : $widthCoord$$inline_2275_y$$inline_2277$$;
    $widthCoord$$inline_2275_y$$inline_2277$$ = this.$_bHoriz$ ? $widthCoord$$inline_2275_y$$inline_2277$$ : $lengthCoord$$inline_2279_midLength$$inline_2278$$;
    $indicatorPosition_x$$inline_2276$$ = new D.$DvtPoint$$($indicatorPosition_x$$inline_2276$$, $widthCoord$$inline_2275_y$$inline_2277$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$2$$, $indicatorPosition_x$$inline_2276$$.x, $indicatorPosition_x$$inline_2276$$.y);
    $indicator$$2$$.$setAlpha$(1);
    $indicator$$2$$.getParent().$addChild$($indicator$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$30_nodePlayable$$19$$) {
  var $endState$$7$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$30_nodePlayable$$19$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$30_nodePlayable$$19$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$30_nodePlayable$$19$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$7$$);
  return $duration$$30_nodePlayable$$19$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$31_nodePlayable$$20$$) {
  var $endState$$8$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$31_nodePlayable$$20$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$31_nodePlayable$$20$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$31_nodePlayable$$20$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$8$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$31_nodePlayable$$20$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$31_nodePlayable$$20$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$32_nodePlayable$$21$$) {
  this.$setAlpha$(0);
  $duration$$32_nodePlayable$$21$$ = this.$getDisplayAnimation$($duration$$32_nodePlayable$$21$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$32_nodePlayable$$21$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$32_nodePlayable$$21$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$4_gapSize$$2$$, $barWidth$$2_endCoord$$1$$, $bStartsAtBaseline_x1$$8$$, $x2$$6$$, $bAdjustForGaps$$) {
  this.$_baselineCoord$ = $baselineCoord$$4_gapSize$$2$$;
  this.$_endCoord$ = $barWidth$$2_endCoord$$1$$;
  this.$_x1$ = $bStartsAtBaseline_x1$$8$$;
  this.$_x2$ = $x2$$6$$;
  this.$_origX1$ = this.$_x1$;
  this.$_origX2$ = this.$_x2$;
  this.$_origBaselineCoord$ = this.$_baselineCoord$;
  0 < this.$_dataItemGaps$ && ($bAdjustForGaps$$ && !this.$isSelected$()) && ($baselineCoord$$4_gapSize$$2$$ = window.Math.ceil(2 * this.$_dataItemGaps$), $barWidth$$2_endCoord$$1$$ = this.$_x2$ - this.$_x1$, $bStartsAtBaseline_x1$$8$$ = this.$_axisCoord$ == this.$_baselineCoord$, 5 <= window.Math.abs(this.$_baselineCoord$ - this.$_endCoord$) && (this.$_bStacked$ && !$bStartsAtBaseline_x1$$8$$) && (this.$_baselineCoord$ += this.$_endCoord$ > this.$_baselineCoord$ ? $baselineCoord$$4_gapSize$$2$$ : 
  -$baselineCoord$$4_gapSize$$2$$), 5 <= $barWidth$$2_endCoord$$1$$ && (1 == (0,D.$DvtAgent$getDevicePixelRatio$$)() && 0 < this.$_barGapRatio$ && 15 < $barWidth$$2_endCoord$$1$$ ? ((0,D.$DvtAgent$isPlatformGecko$$)() || (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this), this.$_x1$ = window.Math.round(this.$_x1$), this.$_x2$ = window.Math.round(this.$_x2$), this.$_origX1$ = this.$_x1$, this.$_origX2$ = this.$_x2$, this.$_x2$ -= $baselineCoord$$4_gapSize$$2$$) : (this.$_x1$ += $baselineCoord$$4_gapSize$$2$$ / 
  2, this.$_x2$ -= $baselineCoord$$4_gapSize$$2$$ / 2)));
  this.$setPoints$(this.$_createPointsArray$());
  this.$OuterChild$ && this.$OuterChild$.$setPoints$(this.$_createPointsArray$(2));
  this.$InnerChild$ && this.$InnerChild$.$setPoints$(this.$_createPointsArray$(3))
};
D.$JSCompiler_prototypeAlias$$.$_createPointsArray$ = function $$JSCompiler_prototypeAlias$$$$_createPointsArray$$($inset$$) {
  var $baselineCoord$$5$$ = this.$_baselineCoord$, $endCoord$$2$$ = this.$_endCoord$, $x1$$9$$ = this.$_x1$, $x2$$7$$ = this.$_x2$;
  if(0 < $inset$$) {
    if(window.Math.abs($x1$$9$$ - $x2$$7$$) < 2 * $inset$$ || window.Math.abs($baselineCoord$$5$$ - $endCoord$$2$$) < 2 * $inset$$) {
      return[]
    }
    $x1$$9$$ += $inset$$;
    $x2$$7$$ -= $inset$$;
    $endCoord$$2$$ < $baselineCoord$$5$$ ? ($baselineCoord$$5$$ -= $inset$$, $endCoord$$2$$ += $inset$$) : ($baselineCoord$$5$$ += $inset$$, $endCoord$$2$$ -= $inset$$)
  }
  return this.$_bHoriz$ ? [$endCoord$$2$$, $x1$$9$$, $endCoord$$2$$, $x2$$7$$, $baselineCoord$$5$$, $x2$$7$$, $baselineCoord$$5$$, $x1$$9$$] : [$x1$$9$$, $endCoord$$2$$, $x2$$7$$, $endCoord$$2$$, $x2$$7$$, $baselineCoord$$5$$, $x1$$9$$, $baselineCoord$$5$$]
};
D.$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  var $innerChildPoints_outerBorderWidth$$ = this.$isSelected$() ? 2 : 1.25, $outerChildPoints$$ = this.$_createPointsArray$($innerChildPoints_outerBorderWidth$$), $innerChildPoints_outerBorderWidth$$ = this.$_createPointsArray$($innerChildPoints_outerBorderWidth$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($outerChildPoints$$), this.$InnerChild$.$setPoints$($innerChildPoints_outerBorderWidth$$)) : (this.$OuterChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $outerChildPoints$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$), this.$OuterChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $innerChildPoints_outerBorderWidth$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$), 
  this.$InnerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$addChild$(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getBoundingBox$$() {
  var $x$$79$$ = window.Math.min(this.$_x2$, this.$_x1$), $y$$58$$ = window.Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$7$$ = window.Math.abs(this.$_x2$ - this.$_x1$), $h$$5$$ = window.Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new D.$DvtRectangle$$($y$$58$$, $x$$79$$, $h$$5$$, $w$$7$$) : new D.$DvtRectangle$$($x$$79$$, $y$$58$$, $w$$7$$, $h$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$getDimensionsSelf$ = function $$JSCompiler_prototypeAlias$$$$getDimensionsSelf$$($targetCoordinateSpace$$4$$) {
  return(0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$getBoundingBox$(), $targetCoordinateSpace$$4$$)
};
D.$DvtChartCandlestick$$ = function $$DvtChartCandlestick$$$($context$$43$$, $rangeX1_xCoord$$6$$, $barWidth$$3_x2$$8$$, $openCoord$$1$$, $closeCoord$$1$$, $lowCoord$$3$$, $highCoord$$3$$) {
  this.Init($context$$43$$);
  $barWidth$$3_x2$$8$$ = window.Math.max(2 * window.Math.round($barWidth$$3_x2$$8$$ / 2), 1);
  var $rangeWidth_rangeX2$$ = window.Math.min(2 * window.Math.ceil(0.3 * $barWidth$$3_x2$$8$$ / 2), $barWidth$$3_x2$$8$$), $x1$$10$$ = window.Math.round($rangeX1_xCoord$$6$$) - $barWidth$$3_x2$$8$$ / 2;
  $barWidth$$3_x2$$8$$ = $x1$$10$$ + $barWidth$$3_x2$$8$$;
  $lowCoord$$3$$ != D.$JSCompiler_alias_NULL$$ && $highCoord$$3$$ != D.$JSCompiler_alias_NULL$$ && ($rangeX1_xCoord$$6$$ = window.Math.round($rangeX1_xCoord$$6$$) - $rangeWidth_rangeX2$$ / 2, $rangeWidth_rangeX2$$ = $rangeX1_xCoord$$6$$ + $rangeWidth_rangeX2$$, this.$_rangeShape$ = new D.$DvtSelectableRectangularPolygon$$($context$$43$$, [$rangeX1_xCoord$$6$$, $lowCoord$$3$$, $rangeWidth_rangeX2$$, $lowCoord$$3$$, $rangeWidth_rangeX2$$, $highCoord$$3$$, $rangeX1_xCoord$$6$$, $highCoord$$3$$]), this.$addChild$(this.$_rangeShape$));
  this.$_changeShape$ = new D.$DvtSelectableRectangularPolygon$$($context$$43$$, [$x1$$10$$, $openCoord$$1$$, $barWidth$$3_x2$$8$$, $openCoord$$1$$, $barWidth$$3_x2$$8$$, $closeCoord$$1$$, $x1$$10$$, $closeCoord$$1$$]);
  this.$addChild$(this.$_changeShape$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartCandlestick$$, D.$DvtContainer$$, "DvtChartCandlestick");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartCandlestick$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$4$$) {
  this.$_changeShape$.$setSelected$($selected$$4$$);
  this.$_rangeShape$ && this.$_rangeShape$.$setSelected$($selected$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_changeShape$.$showHoverEffect$();
  this.$_rangeShape$ && this.$_rangeShape$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_changeShape$.$hideHoverEffect$();
  this.$_rangeShape$ && this.$_rangeShape$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$33_nodePlayable$$22$$) {
  $duration$$33_nodePlayable$$22$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$33_nodePlayable$$22$$);
  var $endStateChange_endStateRange$$ = this.$_changeShape$.$getPoints$();
  this.$_changeShape$.$setPoints$((0,D.$DvtChartCandlestick$_getInitialPoints$$)($endStateChange_endStateRange$$));
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$33_nodePlayable$$22$$.$_animator$, "typeNumberArray", this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $endStateChange_endStateRange$$);
  this.$_rangeShape$ && ($endStateChange_endStateRange$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$((0,D.$DvtChartCandlestick$_getInitialPoints$$)($endStateChange_endStateRange$$)), (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$33_nodePlayable$$22$$.$_animator$, "typeNumberArray", this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $endStateChange_endStateRange$$));
  return $duration$$33_nodePlayable$$22$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$34_nodePlayable$$23$$) {
  $duration$$34_nodePlayable$$23$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$34_nodePlayable$$23$$);
  var $endStateChange$$1_endStateRange$$1$$ = (0,D.$DvtChartCandlestick$_getInitialPoints$$)(this.$_changeShape$.$getPoints$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$34_nodePlayable$$23$$.$_animator$, "typeNumberArray", this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $endStateChange$$1_endStateRange$$1$$);
  this.$_rangeShape$ && ($endStateChange$$1_endStateRange$$1$$ = (0,D.$DvtChartCandlestick$_getInitialPoints$$)(this.$_rangeShape$.$getPoints$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$34_nodePlayable$$23$$.$_animator$, "typeNumberArray", this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $endStateChange$$1_endStateRange$$1$$));
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$34_nodePlayable$$23$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$34_nodePlayable$$23$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$35_nodePlayable$$24$$) {
  this.$setAlpha$(0);
  $duration$$35_nodePlayable$$24$$ = this.$getDisplayAnimation$($duration$$35_nodePlayable$$24$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$35_nodePlayable$$24$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$35_nodePlayable$$24$$
};
D.$JSCompiler_prototypeAlias$$.$getUpdateAnimation$ = function $$JSCompiler_prototypeAlias$$$$getUpdateAnimation$$($duration$$36$$, $oldShape$$1$$) {
  var $nodePlayable$$25$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$36$$), $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ = this.$_changeShape$.$getPoints$();
  this.$_changeShape$.$setPoints$($oldShape$$1$$.$_changeShape$.$getPoints$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$25$$.$_animator$, "typeNumberArray", this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$);
  var $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ = $oldShape$$1$$.$_changeShape$.$isSelected$() || this.$_changeShape$.$isSelected$(), $startFill$$2$$ = $oldShape$$1$$.$_changeShape$.$getPrimaryFill$().$clone$(), $endFill$$2$$ = this.$_changeShape$.$getPrimaryFill$();
  $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ || (this.$_changeShape$.$setFill$($startFill$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$25$$.$_animator$, "typeFill", this.$_changeShape$, this.$_changeShape$.$getFill$, this.$_changeShape$.$setFill$, $endFill$$2$$));
  this.$_rangeShape$ && $oldShape$$1$$.$_rangeShape$ && ($bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($oldShape$$1$$.$_rangeShape$.$getPoints$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$25$$.$_animator$, "typeNumberArray", this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$));
  return $nodePlayable$$25$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartCandlestick$_getInitialPoints$$ = function $$DvtChartCandlestick$_getInitialPoints$$$($points$$8_yMid$$) {
  var $x1$$11$$ = $points$$8_yMid$$[0], $x2$$9$$ = $points$$8_yMid$$[2];
  $points$$8_yMid$$ = ($points$$8_yMid$$[1] + $points$$8_yMid$$[5]) / 2;
  return[$x1$$11$$, $points$$8_yMid$$, $x2$$9$$, $points$$8_yMid$$, $x2$$9$$, $points$$8_yMid$$, $x1$$11$$, $points$$8_yMid$$]
};
D.$DvtChartCoord$$ = function $$DvtChartCoord$$$($x$$80$$, $y1$$6$$, $y2$$4$$, $groupIndex$$21$$, $group$$14$$, $filtered$$1$$) {
  this.x = $x$$80$$;
  this.$y1$ = $y1$$6$$;
  this.$y2$ = $y2$$4$$;
  this.$groupIndex$ = $groupIndex$$21$$;
  this.group = $group$$14$$;
  this.$filtered$ = $filtered$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartCoord$$, D.$DvtObj$$, "DvtChartCoord");
D.$JSCompiler_StaticMethods_isUpstep$$ = function $$JSCompiler_StaticMethods_isUpstep$$$($JSCompiler_StaticMethods_isUpstep$self$$, $baseline$$4$$) {
  return window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y2$ - $baseline$$4$$) > window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y1$ - $baseline$$4$$)
};
D.$DvtChartCoord$$.prototype.$clone$ = function $$DvtChartCoord$$$$$clone$$() {
  return new D.$DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$)
};
D.$DvtChartLineArea$$ = function $$DvtChartLineArea$$$($chart$$103$$, $bArea$$, $availSpace$$73$$, $baseline$$5$$, $fill$$8$$, $stroke$$14$$, $type$$80$$, $arCoord$$, $baseType$$1$$, $arBaseCoord$$) {
  this.Init($chart$$103$$.$getCtx$());
  this.$_chart$ = $chart$$103$$;
  this.$_bArea$ = $bArea$$;
  this.$_availSpace$ = $availSpace$$73$$;
  this.$_baseline$ = $baseline$$5$$;
  this.$_fill$ = $fill$$8$$;
  this.$_stroke$ = $stroke$$14$$;
  this.$_type$ = $type$$80$$;
  this.$_baseType$ = $baseType$$1$$ ? $baseType$$1$$ : $type$$80$$;
  this.$_indicatorMap$ = {};
  this.$setCoords$($arCoord$$, $arBaseCoord$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineArea$$, D.$DvtContainer$$, "DvtChartLineArea");
D.$DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($arCoord$$1$$, $arBaseCoord$$1$$) {
  this.$_arCoord$ = $arCoord$$1$$;
  $arBaseCoord$$1$$ && (this.$_arBaseCoord$ = $arBaseCoord$$1$$);
  this.$removeChildren$();
  this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
  for(var $indicator$$inline_2283_indicatorObj$$inline_2282$$, $pos$$inline_2284_y$$inline_2285$$, $coord$$inline_2286$$, $i$$inline_2287$$ = 0;$i$$inline_2287$$ < this.$_arCoord$.length;$i$$inline_2287$$++) {
    if($coord$$inline_2286$$ = this.$_arCoord$[$i$$inline_2287$$], ($indicator$$inline_2283_indicatorObj$$inline_2282$$ = this.$_indicatorMap$[$coord$$inline_2286$$.$groupIndex$]) && $indicator$$inline_2283_indicatorObj$$inline_2282$$.$indicator$) {
      $pos$$inline_2284_y$$inline_2285$$ = ((0,D.$JSCompiler_StaticMethods_isUpstep$$)($coord$$inline_2286$$, this.$_baseline$) ? $coord$$inline_2286$$.$y2$ : $coord$$inline_2286$$.$y1$) + 8 * ($indicator$$inline_2283_indicatorObj$$inline_2282$$.direction == D.$DvtDCChartUtils$$.$DIR_UP$ ? -1 : 1), $pos$$inline_2284_y$$inline_2285$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new D.$DvtPoint$$($coord$$inline_2286$$.x, $pos$$inline_2284_y$$inline_2285$$), this.$_availSpace$), $indicator$$inline_2283_indicatorObj$$inline_2282$$ = 
      $indicator$$inline_2283_indicatorObj$$inline_2282$$.$indicator$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$inline_2283_indicatorObj$$inline_2282$$, $pos$$inline_2284_y$$inline_2285$$.x, $pos$$inline_2284_y$$inline_2285$$.y), $indicator$$inline_2283_indicatorObj$$inline_2282$$.$setAlpha$(1), $indicator$$inline_2283_indicatorObj$$inline_2282$$.getParent().$addChild$($indicator$$inline_2283_indicatorObj$$inline_2282$$)
    }
  }
};
D.$DvtChartLineArea$$.prototype.$isArea$ = (0,D.$JSCompiler_get$$)("$_bArea$");
D.$JSCompiler_StaticMethods__getPointArrays$$ = function $$JSCompiler_StaticMethods__getPointArrays$$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $coords$$16_coords$$inline_2289$$, $type$$81$$) {
  var $pointsArrays$$1$$ = [], $points$$9$$ = [];
  $pointsArrays$$1$$.push($points$$9$$);
  for(var $isPolar$$3_pointCoords$$inline_2290$$ = [], $i$$inline_2291_isCentered$$ = 0;$i$$inline_2291_isCentered$$ < $coords$$16_coords$$inline_2289$$.length;$i$$inline_2291_isCentered$$++) {
    if(!$coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].$filtered$) {
      if($coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].x == D.$JSCompiler_alias_NULL$$) {
        $isPolar$$3_pointCoords$$inline_2290$$.push(D.$JSCompiler_alias_NULL$$)
      }else {
        if($isPolar$$3_pointCoords$$inline_2290$$.push(new D.$DvtPoint$$($coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].x, $coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].$y1$)), $coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].$y1$ != $coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].$y2$) {
          var $isParallel_p2$$inline_2292$$ = new D.$DvtPoint$$($coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].x, $coords$$16_coords$$inline_2289$$[$i$$inline_2291_isCentered$$].$y2$);
          $isParallel_p2$$inline_2292$$.$_isY2$ = D.$JSCompiler_alias_TRUE$$;
          $isPolar$$3_pointCoords$$inline_2290$$.push($isParallel_p2$$inline_2292$$)
        }
      }
    }
  }
  $coords$$16_coords$$inline_2289$$ = $isPolar$$3_pointCoords$$inline_2290$$;
  var $isPolar$$3_pointCoords$$inline_2290$$ = D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $isParallel_p2$$inline_2292$$ = ($i$$inline_2291_isCentered$$ = "centeredStepped" == $type$$81$$ || "centeredSegmented" == $type$$81$$) || "stepped" == $type$$81$$ || "segmented" == $type$$81$$, $groupWidth$$ = D.$DvtChartStyleUtils$$.$getGroupWidth$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $dir$$22$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$getCtx$()) && 
  D.$DvtChartTypeUtils$$.$isVertical$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) ? -1 : 1, $lastCoord$$;
  $isPolar$$3_pointCoords$$inline_2290$$ && ($lastCoord$$ = $coords$$16_coords$$inline_2289$$[$coords$$16_coords$$inline_2289$$.length - 1]);
  for(var $coord$$27_finalXCoord$$, $xCoord$$7$$, $isY2$$, $inBump$$ = D.$JSCompiler_alias_FALSE$$, $i$$164$$ = 0;$i$$164$$ < $coords$$16_coords$$inline_2289$$.length;$i$$164$$++) {
    if($coords$$16_coords$$inline_2289$$[$i$$164$$] == D.$JSCompiler_alias_NULL$$) {
      if(!D.$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) && ($isParallel_p2$$inline_2292$$ && !$isPolar$$3_pointCoords$$inline_2290$$ && $lastCoord$$ && !$isY2$$) && ($coord$$27_finalXCoord$$ = $i$$inline_2291_isCentered$$ ? $lastCoord$$.x + 0.5 * $groupWidth$$ * $dir$$22$$ : $lastCoord$$.x + $groupWidth$$ * $dir$$22$$, (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, 
      $coord$$27_finalXCoord$$, $lastCoord$$.y)), "next" == $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$.$getSkin$() || !D.$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$)) {
        $points$$9$$ = [], $pointsArrays$$1$$.push($points$$9$$), $lastCoord$$ = D.$JSCompiler_alias_NULL$$
      }
    }else {
      $coord$$27_finalXCoord$$ = $coords$$16_coords$$inline_2289$$[$i$$164$$];
      $isY2$$ = $coords$$16_coords$$inline_2289$$[$i$$164$$].$_isY2$;
      $xCoord$$7$$ = $i$$inline_2291_isCentered$$ ? $coord$$27_finalXCoord$$.x - $groupWidth$$ / 2 * $dir$$22$$ : $coord$$27_finalXCoord$$.x;
      $isY2$$ && ($inBump$$ && $isParallel_p2$$inline_2292$$ && ($xCoord$$7$$ += $groupWidth$$ * $dir$$22$$), $inBump$$ = !$inBump$$);
      "curved" == $type$$81$$ && $isY2$$ && $points$$9$$.push(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
      $lastCoord$$ && $isParallel_p2$$inline_2292$$ && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, $xCoord$$7$$, $lastCoord$$.y);
      if(!$JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_bArea$ && ("segmented" == $type$$81$$ || "centeredSegmented" == $type$$81$$)) {
        $points$$9$$ = [], $pointsArrays$$1$$.push($points$$9$$)
      }
      (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, $xCoord$$7$$, $coord$$27_finalXCoord$$.y);
      $lastCoord$$ = $coord$$27_finalXCoord$$
    }
  }
  $isParallel_p2$$inline_2292$$ && (!$isPolar$$3_pointCoords$$inline_2290$$ && $lastCoord$$ && !$isY2$$) && ($coord$$27_finalXCoord$$ = $i$$inline_2291_isCentered$$ ? $lastCoord$$.x + 0.5 * $groupWidth$$ * $dir$$22$$ : $lastCoord$$.x + $groupWidth$$ * $dir$$22$$, (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, $coord$$27_finalXCoord$$, $lastCoord$$.y));
  $isPolar$$3_pointCoords$$inline_2290$$ && 1 < $pointsArrays$$1$$.length && ($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$ = $pointsArrays$$1$$.pop(), $pointsArrays$$1$$[0] = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.concat($pointsArrays$$1$$[0]));
  return $pointsArrays$$1$$
};
D.$JSCompiler_StaticMethods__pushCoord$$ = function $$JSCompiler_StaticMethods__pushCoord$$$($JSCompiler_StaticMethods__pushCoord$self_coord$$28$$, $pointArray$$, $x$$81$$, $y$$59$$) {
  $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.$_chart$, new D.$DvtPoint$$($x$$81$$, $y$$59$$), $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.$_availSpace$);
  $pointArray$$.push(window.Math.round(10 * $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.x) / 10, window.Math.round(10 * $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.y) / 10)
};
D.$JSCompiler_StaticMethods__isRing$$ = function $$JSCompiler_StaticMethods__isRing$$$($JSCompiler_StaticMethods__isRing$self$$) {
  if(!D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length < D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__isRing$self$$.$_chart$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$165$$ = 0;$i$$165$$ < $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length;$i$$165$$++) {
    if($JSCompiler_StaticMethods__isRing$self$$.$_arCoord$[$i$$165$$].x == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__getSplineType$$ = function $$JSCompiler_StaticMethods__getSplineType$$$($JSCompiler_StaticMethods__getSplineType$self$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? (0,D.$JSCompiler_StaticMethods__isRing$$)($JSCompiler_StaticMethods__getSplineType$self$$) ? D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL_CLOSED$ : D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? 
  D.$DvtPathUtils$$.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : D.$DvtPathUtils$$.$SPLINE_TYPE_MONOTONE_VERTICAL$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_renderLines$ = function $$JSCompiler_prototypeAlias$$$$_renderLines$$() {
  for(var $pointArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $cmd$$3_line$$9_points$$10$$, $i$$166$$ = 0;$i$$166$$ < $pointArrays$$.length;$i$$166$$++) {
    if(($cmd$$3_line$$9_points$$10$$ = $pointArrays$$[$i$$166$$]) && 1 < $cmd$$3_line$$9_points$$10$$.length) {
      "curved" == this.$_type$ ? ($cmd$$3_line$$9_points$$10$$ = (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$3_line$$9_points$$10$$, D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this)), $cmd$$3_line$$9_points$$10$$ = new D.$DvtPath$$(this.$getCtx$(), $cmd$$3_line$$9_points$$10$$), $cmd$$3_line$$9_points$$10$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__isRing$$)(this) ? ($cmd$$3_line$$9_points$$10$$ = new D.$DvtPolygon$$(this.$getCtx$(), 
      $cmd$$3_line$$9_points$$10$$), $cmd$$3_line$$9_points$$10$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $cmd$$3_line$$9_points$$10$$ = new D.$DvtPolyline$$(this.$getCtx$(), $cmd$$3_line$$9_points$$10$$), $cmd$$3_line$$9_points$$10$$.$setStroke$(this.$_stroke$), this.$addChild$($cmd$$3_line$$9_points$$10$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_renderAreas$ = function $$JSCompiler_prototypeAlias$$$$_renderAreas$$() {
  var $arCoord$$2_highArrays$$ = this.$_arCoord$, $arBaseCoord$$2_lowArrays$$ = this.$_arBaseCoord$;
  !D.$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) && (0 < $arCoord$$2_highArrays$$.length && 0 < $arBaseCoord$$2_lowArrays$$.length) && ($arCoord$$2_highArrays$$ = $arCoord$$2_highArrays$$.slice(0), $arBaseCoord$$2_lowArrays$$ = $arBaseCoord$$2_lowArrays$$.slice(0), $arCoord$$2_highArrays$$[0].x != D.$JSCompiler_alias_NULL$$ && $arBaseCoord$$2_lowArrays$$[0].x != D.$JSCompiler_alias_NULL$$ && ((0,D.$DvtChartLineArea$_removeAreaEdge$$)($arCoord$$2_highArrays$$, 0, this.$_baseline$), (0,D.$DvtChartLineArea$_removeAreaEdge$$)($arBaseCoord$$2_lowArrays$$, 
  0, this.$_baseline$), $arBaseCoord$$2_lowArrays$$[0].x = $arCoord$$2_highArrays$$[0].x), $arCoord$$2_highArrays$$[$arCoord$$2_highArrays$$.length - 1].x != D.$JSCompiler_alias_NULL$$ && $arBaseCoord$$2_lowArrays$$[$arBaseCoord$$2_lowArrays$$.length - 1].x != D.$JSCompiler_alias_NULL$$ && ((0,D.$DvtChartLineArea$_removeAreaEdge$$)($arCoord$$2_highArrays$$, $arCoord$$2_highArrays$$.length - 1, this.$_baseline$), (0,D.$DvtChartLineArea$_removeAreaEdge$$)($arBaseCoord$$2_lowArrays$$, $arBaseCoord$$2_lowArrays$$.length - 
  1, this.$_baseline$), $arBaseCoord$$2_lowArrays$$[$arBaseCoord$$2_lowArrays$$.length - 1].x = $arCoord$$2_highArrays$$[$arCoord$$2_highArrays$$.length - 1].x));
  $arCoord$$2_highArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, $arCoord$$2_highArrays$$, this.$_type$);
  $arBaseCoord$$2_lowArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, $arBaseCoord$$2_lowArrays$$, this.$_baseType$);
  if($arCoord$$2_highArrays$$.length == $arBaseCoord$$2_lowArrays$$.length) {
    for(var $area$$1_lowCurved_points$$11$$, $i$$167$$ = 0;$i$$167$$ < $arCoord$$2_highArrays$$.length;$i$$167$$++) {
      var $cmd$$4_highArray$$ = $arCoord$$2_highArrays$$[$i$$167$$], $lowArray_splineType$$ = $arBaseCoord$$2_lowArrays$$[$i$$167$$];
      if(!(2 > $cmd$$4_highArray$$.length)) {
        var $highCurved$$ = "curved" == this.$_type$;
        $area$$1_lowCurved_points$$11$$ = "curved" == this.$_baseType$;
        (0,D.$JSCompiler_StaticMethods__isRing$$)(this) && ($highCurved$$ || $cmd$$4_highArray$$.push($cmd$$4_highArray$$[0], $cmd$$4_highArray$$[1]), 2 <= $lowArray_splineType$$.length && !$area$$1_lowCurved_points$$11$$ && $lowArray_splineType$$.push($lowArray_splineType$$[0], $lowArray_splineType$$[1]));
        for(var $revLowArray$$ = [], $j$$29$$ = 0;$j$$29$$ < $lowArray_splineType$$.length;$j$$29$$ += 2) {
          $revLowArray$$.unshift($lowArray_splineType$$[$j$$29$$], $lowArray_splineType$$[$j$$29$$ + 1])
        }
        $highCurved$$ || $area$$1_lowCurved_points$$11$$ ? ($lowArray_splineType$$ = (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this), $cmd$$4_highArray$$ = $highCurved$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$4_highArray$$, D.$JSCompiler_alias_FALSE$$, $lowArray_splineType$$) : D.$DvtPathUtils$$.$polyline$($cmd$$4_highArray$$, D.$JSCompiler_alias_FALSE$$), $cmd$$4_highArray$$ += $area$$1_lowCurved_points$$11$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($revLowArray$$, 
        D.$JSCompiler_alias_TRUE$$, $lowArray_splineType$$) : D.$DvtPathUtils$$.$polyline$($revLowArray$$, D.$JSCompiler_alias_TRUE$$), $cmd$$4_highArray$$ += D.$DvtPathUtils$$.closePath(), $area$$1_lowCurved_points$$11$$ = new D.$DvtPath$$(this.$getCtx$(), $cmd$$4_highArray$$)) : ($area$$1_lowCurved_points$$11$$ = $revLowArray$$.concat($cmd$$4_highArray$$), $area$$1_lowCurved_points$$11$$ = new D.$DvtPolygon$$(this.$getCtx$(), $area$$1_lowCurved_points$$11$$));
        $area$$1_lowCurved_points$$11$$.$setFill$(this.$_fill$);
        this.$_stroke$ && $area$$1_lowCurved_points$$11$$.$setStroke$(this.$_stroke$);
        this.$addChild$($area$$1_lowCurved_points$$11$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($other$$4$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arCoord$, $other$$4$$ ? $other$$4$$.$_arCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($coords$$17_params$$16$$) {
  $coords$$17_params$$16$$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($coords$$17_params$$16$$);
  this.$setCoords$($coords$$17_params$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getBaseAnimationParams$$($other$$5$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arBaseCoord$, $other$$5$$ ? $other$$5$$.$_arBaseCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setBaseAnimationParams$$($params$$17$$) {
  this.$_arBaseCoord$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($params$$17$$)
};
D.$JSCompiler_StaticMethods_getCommonGroupIndices$$ = function $$JSCompiler_StaticMethods_getCommonGroupIndices$$$($JSCompiler_StaticMethods_getCommonGroupIndices$self$$, $other$$6$$) {
  for(var $indices$$5$$ = [], $i$$169$$ = 0;$i$$169$$ < $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$.length;$i$$169$$++) {
    if(!($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$169$$].$filtered$ || $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$169$$].x == D.$JSCompiler_alias_NULL$$)) {
      for(var $j$$30$$ = 0;$j$$30$$ < $other$$6$$.$_arCoord$.length;$j$$30$$++) {
        if(!($other$$6$$.$_arCoord$[$j$$30$$].$filtered$ || $other$$6$$.$_arCoord$[$j$$30$$].x == D.$JSCompiler_alias_NULL$$) && $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$169$$].group == $other$$6$$.$_arCoord$[$j$$30$$].group) {
          $indices$$5$$.push($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$169$$].$groupIndex$);
          break
        }
      }
    }
  }
  return $indices$$5$$
};
D.$DvtChartLineArea$_coordsToAnimationParams$$ = function $$DvtChartLineArea$_coordsToAnimationParams$$$($coords$$19$$, $otherCoords_otherGroups$$, $baseline$$6_params$$18$$) {
  if($otherCoords_otherGroups$$ && 0 < $otherCoords_otherGroups$$.length) {
    if($coords$$19$$ && 0 < $coords$$19$$.length) {
      $coords$$19$$ = $coords$$19$$.slice(0);
      $otherCoords_otherGroups$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($otherCoords_otherGroups$$);
      for(var $groups$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($coords$$19$$), $idx$$3$$ = $coords$$19$$.length, $dummyCoord_group$$15_groupIdx$$, $g$$3_i$$171$$ = $otherCoords_otherGroups$$.length - 1;0 <= $g$$3_i$$171$$;$g$$3_i$$171$$--) {
        if($dummyCoord_group$$15_groupIdx$$ = $otherCoords_otherGroups$$[$g$$3_i$$171$$], $dummyCoord_group$$15_groupIdx$$ = $groups$$.indexOf($dummyCoord_group$$15_groupIdx$$), -1 == $dummyCoord_group$$15_groupIdx$$) {
          if(0 == $idx$$3$$) {
            $dummyCoord_group$$15_groupIdx$$ = $coords$$19$$[0].$clone$();
            $coords$$19$$[0] = $coords$$19$$[0].$clone$();
            var $startCoord$$inline_2294_startCoord$$inline_2298$$ = $dummyCoord_group$$15_groupIdx$$, $endCoord$$inline_2295$$ = $coords$$19$$[0];
            (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_2294_startCoord$$inline_2298$$, $baseline$$6_params$$18$$) ? $endCoord$$inline_2295$$.$y1$ = $endCoord$$inline_2295$$.$y2$ : $startCoord$$inline_2294_startCoord$$inline_2298$$.$y2$ = $startCoord$$inline_2294_startCoord$$inline_2298$$.$y1$
          }else {
            $dummyCoord_group$$15_groupIdx$$ = $coords$$19$$[$idx$$3$$ - 1].$clone$(), $coords$$19$$[$idx$$3$$ - 1] = $coords$$19$$[$idx$$3$$ - 1].$clone$(), $startCoord$$inline_2294_startCoord$$inline_2298$$ = $coords$$19$$[$idx$$3$$ - 1], (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_2294_startCoord$$inline_2298$$, $baseline$$6_params$$18$$) ? $dummyCoord_group$$15_groupIdx$$.$y1$ = $dummyCoord_group$$15_groupIdx$$.$y2$ : $startCoord$$inline_2294_startCoord$$inline_2298$$.$y2$ = 
            $startCoord$$inline_2294_startCoord$$inline_2298$$.$y1$
          }
          $dummyCoord_group$$15_groupIdx$$.$groupIndex$ = -1;
          $coords$$19$$.splice($idx$$3$$, 0, $dummyCoord_group$$15_groupIdx$$)
        }else {
          $idx$$3$$ = $dummyCoord_group$$15_groupIdx$$
        }
      }
    }else {
      $coords$$19$$ = [];
      for($g$$3_i$$171$$ = 0;$g$$3_i$$171$$ < $otherCoords_otherGroups$$.length;$g$$3_i$$171$$++) {
        $coords$$19$$.push(new D.$DvtChartCoord$$($otherCoords_otherGroups$$[$g$$3_i$$171$$].x, $baseline$$6_params$$18$$, $baseline$$6_params$$18$$))
      }
    }
  }
  $baseline$$6_params$$18$$ = [];
  for($g$$3_i$$171$$ = 0;$g$$3_i$$171$$ < $coords$$19$$.length;$g$$3_i$$171$$++) {
    $coords$$19$$[$g$$3_i$$171$$].$filtered$ || ($coords$$19$$[$g$$3_i$$171$$].x == D.$JSCompiler_alias_NULL$$ ? ($baseline$$6_params$$18$$.push(window.Infinity), $baseline$$6_params$$18$$.push(window.Infinity), $baseline$$6_params$$18$$.push(window.Infinity)) : ($baseline$$6_params$$18$$.push($coords$$19$$[$g$$3_i$$171$$].x), $baseline$$6_params$$18$$.push($coords$$19$$[$g$$3_i$$171$$].$y1$), $baseline$$6_params$$18$$.push($coords$$19$$[$g$$3_i$$171$$].$y2$)), $baseline$$6_params$$18$$.push($coords$$19$$[$g$$3_i$$171$$].$groupIndex$))
  }
  return $baseline$$6_params$$18$$
};
D.$DvtChartLineArea$_animationParamsToCoords$$ = function $$DvtChartLineArea$_animationParamsToCoords$$$($params$$19$$) {
  for(var $coords$$20$$ = [], $i$$172$$ = 0;$i$$172$$ < $params$$19$$.length;$i$$172$$ += 4) {
    window.Infinity == $params$$19$$[$i$$172$$] || (0,window.isNaN)($params$$19$$[$i$$172$$]) ? $coords$$20$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$19$$[$i$$172$$ + 3])) : $coords$$20$$.push(new D.$DvtChartCoord$$($params$$19$$[$i$$172$$], $params$$19$$[$i$$172$$ + 1], $params$$19$$[$i$$172$$ + 2], $params$$19$$[$i$$172$$ + 3]))
  }
  return $coords$$20$$
};
D.$DvtChartLineArea$_coordsToGroups$$ = function $$DvtChartLineArea$_coordsToGroups$$$($coords$$21$$) {
  for(var $groups$$1$$ = [], $i$$173$$ = 0;$i$$173$$ < $coords$$21$$.length;$i$$173$$++) {
    $coords$$21$$[$i$$173$$].$filtered$ || $groups$$1$$.push($coords$$21$$[$i$$173$$].group)
  }
  return $groups$$1$$
};
D.$DvtChartLineArea$_getCurvedPathCommands$$ = function $$DvtChartLineArea$_getCurvedPathCommands$$$($cmd$$5_points$$12$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$) {
  var $arP$$ = [], $p$$2$$ = [];
  $arP$$.push($p$$2$$);
  for(var $i$$174$$ = 0;$i$$174$$ < $cmd$$5_points$$12$$.length;$i$$174$$ += 2) {
    $cmd$$5_points$$12$$[$i$$174$$] == D.$JSCompiler_alias_NULL$$ ? ($p$$2$$ = [], $arP$$.push($p$$2$$)) : $p$$2$$.push($cmd$$5_points$$12$$[$i$$174$$], $cmd$$5_points$$12$$[$i$$174$$ + 1])
  }
  $lastPoints$$1_splineType$$1$$ == D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $arP$$.length && ($lastPoints$$1_splineType$$1$$ = $arP$$.pop(), $arP$$[0] = $lastPoints$$1_splineType$$1$$.concat($arP$$[0]), $lastPoints$$1_splineType$$1$$ = D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$);
  $cmd$$5_points$$12$$ = "";
  for($i$$174$$ = 0;$i$$174$$ < $arP$$.length;$i$$174$$++) {
    $p$$2$$ = $arP$$[$i$$174$$], $cmd$$5_points$$12$$ += D.$DvtPathUtils$$.$curveThroughPoints$($p$$2$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$), $connectWithLine$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $cmd$$5_points$$12$$
};
D.$DvtChartLineArea$_removeAreaEdge$$ = function $$DvtChartLineArea$_removeAreaEdge$$$($arCoord$$3$$, $index$$138$$, $baseline$$8$$) {
  var $coord$$30$$ = $arCoord$$3$$[$index$$138$$].$clone$();
  (0,D.$JSCompiler_StaticMethods_isUpstep$$)($coord$$30$$, $baseline$$8$$) ? $coord$$30$$.$y1$ = $coord$$30$$.$y2$ : $coord$$30$$.$y2$ = $coord$$30$$.$y1$;
  $arCoord$$3$$[$index$$138$$] = $coord$$30$$
};
D.$DvtChartLineMarker$$ = function $$DvtChartLineMarker$$$($context$$44$$, $type$$82$$, $cx$$4$$, $cy$$5$$, $size$$18$$, $bOptimizeStroke$$2$$) {
  this.Init($context$$44$$, $type$$82$$, D.$JSCompiler_alias_NULL$$, $cx$$4$$, $cy$$5$$, $size$$18$$, $size$$18$$);
  $bOptimizeStroke$$2$$ && this.$setStroke$(D.$DvtChartLineMarker$DEFAULT_STROKE$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineMarker$$, D.$DvtSimpleMarker$$, "DvtChartLineMarker");
D.$DvtChartLineMarker$DEFAULT_STROKE$$ = new D.$DvtSolidStroke$$("none");
D.$DvtChartLineMarker$SELECTED_FILL$$ = new D.$DvtSolidFill$$("#FFFFFF");
D.$DvtChartLineMarker$SELECTED_STROKE$$ = new D.$DvtSolidStroke$$("#5A5A5A", 1, 1.5);
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$7$$) {
  this.$_dataColor$ = $dataColor$$7$$;
  this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$7$$, 1, 1.5)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$setStroke$(this.$_hoverStroke$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$SELECTED_STROKE$$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$5$$) {
  this.$IsSelected$ != $selected$$5$$ && (this.$IsSelected$ = $selected$$5$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$SELECTED_FILL$$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$)))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartOverview$$ = function $$DvtChartOverview$$$($chart$$104$$) {
  this.Init($chart$$104$$.$getCtx$(), $chart$$104$$.$processEvent$, $chart$$104$$);
  this.$_parentChart$ = $chart$$104$$;
  this.$_chart$ = $chart$$104$$.$overview$ ? $chart$$104$$.$overview$.$_chart$ : D.$JSCompiler_alias_NULL$$;
  this.$_id$ = $chart$$104$$.getId() + "_overview"
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartOverview$$, D.$DvtOverview$$, "DvtChartOverview");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$createBackground$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$56$$, $width$$40$$, $glassPane$$inline_2306_height$$43$$) {
  $options$$56$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$56$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$56$$.animationOnClick = "off";
  var $options$$inline_2303$$ = $options$$56$$.chart;
  this.$_chartContainer$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_chartContainer$);
  $options$$inline_2303$$ = D.$DvtJSONUtils$$.$merge$({zoomAndScroll:"off", legend:{rendered:"off", size:D.$JSCompiler_alias_NULL$$}, xAxis:{viewportMin:D.$JSCompiler_alias_NULL$$, viewportMax:D.$JSCompiler_alias_NULL$$, viewportStartGroup:D.$JSCompiler_alias_NULL$$, viewportEndGroup:D.$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, size:D.$JSCompiler_alias_NULL$$, maxSize:0.5, title:D.$JSCompiler_alias_NULL$$}, yAxis:{rendered:"off", size:D.$JSCompiler_alias_NULL$$}, y2Axis:{rendered:"off", 
  size:D.$JSCompiler_alias_NULL$$}, splitDualY:"off", title:{text:D.$JSCompiler_alias_NULL$$}, subtitle:{text:D.$JSCompiler_alias_NULL$$}, footnote:{text:D.$JSCompiler_alias_NULL$$}, titleSeparator:{rendered:"off"}, styleDefaults:{animationIndicators:"none"}, layout:{outerGapWidth:0, outerGapHeight:0}, _isOverview:D.$JSCompiler_alias_TRUE$$}, $options$$inline_2303$$);
  D.$DvtChartAxisUtils$$.$hasGroupAxis$(this.$_parentChart$) && ($options$$inline_2303$$.xAxis.tickLabel.rendered = "off");
  D.$DvtChartTypeUtils$$.$isStock$(this.$_parentChart$) && ($options$$inline_2303$$.series && $options$$inline_2303$$.series[0]) && ($options$$inline_2303$$.series = [$options$$inline_2303$$.series[0]], $options$$inline_2303$$.series[0].type = "lineWithArea");
  this.$_chart$ || (this.$_chart$ = (0,D.$DvtChart$newInstance$$)(this.$getCtx$()), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_2303$$, $width$$40$$, $glassPane$$inline_2306_height$$43$$);
  $glassPane$$inline_2306_height$$43$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$40$$, $glassPane$$inline_2306_height$$43$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($glassPane$$inline_2306_height$$43$$);
  this.$_chartContainer$.$addChild$($glassPane$$inline_2306_height$$43$$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_chart$.$__getEventManager$(), D.$JSCompiler_alias_NULL$$);
  D.$DvtChartOverview$$.$superclass$.$render$.call(this, $options$$56$$, $width$$40$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  D.$DvtChartOverview$$.$superclass$.$destroy$.call(this);
  this.$_chart$ = this.$_parentChart$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartPolarBar$$ = function $$DvtChartPolarBar$$$($chart$$105$$, $axisCoord$$2$$, $baselineCoord$$6$$, $endCoord$$4$$, $x1$$12$$, $x2$$10$$, $availSpace$$74$$) {
  this.Init($chart$$105$$.$getCtx$());
  this.$_axisCoord$ = $axisCoord$$2$$;
  this.$_availSpace$ = $availSpace$$74$$.$clone$();
  this.$_bbox$ = D.$JSCompiler_alias_NULL$$;
  this.$_dataItemGaps$ = 3 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$105$$);
  this.$_setBarCoords$($baselineCoord$$6$$, $endCoord$$4$$, $x1$$12$$, $x2$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartPolarBar$$, D.$DvtSelectableWedge$$, "DvtChartPolarBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartPolarBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$20$$) {
  this.$_setBarCoords$($params$$20$$[0], $params$$20$$[1], $params$$20$$[2], $params$$20$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getPrimaryFill$ = function $$JSCompiler_prototypeAlias$$$$getPrimaryFill$$() {
  return this.$getFill$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$37_nodePlayable$$26$$) {
  var $endState$$9$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$37_nodePlayable$$26$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$37_nodePlayable$$26$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$37_nodePlayable$$26$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$9$$);
  return $duration$$37_nodePlayable$$26$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$38_nodePlayable$$27$$) {
  var $endState$$10$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$38_nodePlayable$$27$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$38_nodePlayable$$27$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$38_nodePlayable$$27$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$10$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$38_nodePlayable$$27$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$38_nodePlayable$$27$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$39_nodePlayable$$28$$) {
  this.$setAlpha$(0);
  var $endState$$11$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$39_nodePlayable$$28$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$39_nodePlayable$$28$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$39_nodePlayable$$28$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$11$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$39_nodePlayable$$28$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$39_nodePlayable$$28$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$7$$, $endCoord$$5$$, $x1$$13$$, $x2$$11$$) {
  var $cmds$$inline_2317_cx$$5_minX$$ = this.$_availSpace$.x + this.$_availSpace$.$w$ / 2, $cy$$6_maxX$$ = this.$_availSpace$.y + this.$_availSpace$.$h$ / 2, $minY_r$$3$$ = window.Math.max($endCoord$$5$$, $baselineCoord$$7$$), $inner1_ir_maxY$$ = 4 <= window.Math.abs($endCoord$$5$$ - $baselineCoord$$7$$) && this.$_axisCoord$ != $baselineCoord$$7$$ ? window.Math.min($endCoord$$5$$, $baselineCoord$$7$$) + this.$_dataItemGaps$ : window.Math.min($endCoord$$5$$, $baselineCoord$$7$$), $inner2_sa$$inline_2313$$ = 
  360 - D.$DvtMath$$.$radsToDegrees$(window.Math.max($x1$$13$$, $x2$$11$$)) + 90, $ae$$inline_2314_outer1$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.abs($x2$$11$$ - $x1$$13$$)), $gap$$inline_2315_outer2$$ = this.$_dataItemGaps$;
  this.$_cx$ = $cmds$$inline_2317_cx$$5_minX$$;
  this.$_cy$ = $cy$$6_maxX$$;
  this.$_ry$ = this.$_rx$ = $minY_r$$3$$;
  this.$_sa$ = $inner2_sa$$inline_2313$$;
  this.$_ae$ = $ae$$inline_2314_outer1$$;
  this.$_gap$ = $gap$$inline_2315_outer2$$;
  this.$_ir$ = $inner1_ir_maxY$$;
  $cmds$$inline_2317_cx$$5_minX$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, 0);
  this.$setCmds$($cmds$$inline_2317_cx$$5_minX$$);
  $inner1_ir_maxY$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$7$$, $x1$$13$$, this.$_availSpace$);
  $inner2_sa$$inline_2313$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$7$$, $x2$$11$$, this.$_availSpace$);
  $ae$$inline_2314_outer1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$5$$, $x1$$13$$, this.$_availSpace$);
  $gap$$inline_2315_outer2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$5$$, $x2$$11$$, this.$_availSpace$);
  $cmds$$inline_2317_cx$$5_minX$$ = window.Math.min($inner1_ir_maxY$$.x, $inner2_sa$$inline_2313$$.x, $ae$$inline_2314_outer1$$.x, $gap$$inline_2315_outer2$$.x);
  $cy$$6_maxX$$ = window.Math.max($inner1_ir_maxY$$.x, $inner2_sa$$inline_2313$$.x, $ae$$inline_2314_outer1$$.x, $gap$$inline_2315_outer2$$.x);
  $minY_r$$3$$ = window.Math.min($inner1_ir_maxY$$.y, $inner2_sa$$inline_2313$$.y, $ae$$inline_2314_outer1$$.y, $gap$$inline_2315_outer2$$.y);
  $inner1_ir_maxY$$ = window.Math.max($inner1_ir_maxY$$.y, $inner2_sa$$inline_2313$$.y, $ae$$inline_2314_outer1$$.y, $gap$$inline_2315_outer2$$.y);
  this.$_bbox$ = new D.$DvtRectangle$$($cmds$$inline_2317_cx$$5_minX$$, $minY_r$$3$$, $cy$$6_maxX$$ - $cmds$$inline_2317_cx$$5_minX$$, $inner1_ir_maxY$$ - $minY_r$$3$$);
  this.$_baselineCoord$ = $baselineCoord$$7$$;
  this.$_endCoord$ = $endCoord$$5$$;
  this.$_x1$ = $x1$$13$$;
  this.$_x2$ = $x2$$11$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = (0,D.$JSCompiler_get$$)("$_bbox$");
D.$DvtChartRangeMarker$$ = function $$DvtChartRangeMarker$$$($context$$45$$, $x1$$14$$, $y1$$7$$, $x2$$12$$, $y2$$5$$, $markerSize$$2$$, $isInvisible$$) {
  this.Init($context$$45$$);
  this.$_markerSize$ = $markerSize$$2$$;
  this.$_isInvisible$ = $isInvisible$$;
  (0,D.$JSCompiler_StaticMethods__drawPath$$)(this, $x1$$14$$, $y1$$7$$, $x2$$12$$, $y2$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRangeMarker$$, D.$DvtPath$$, "DvtChartRangeMarker");
D.$JSCompiler_StaticMethods__drawPath$$ = function $$JSCompiler_StaticMethods__drawPath$$$($JSCompiler_StaticMethods__drawPath$self$$, $x1$$15$$, $y1$$8$$, $x2$$13$$, $y2$$6$$) {
  var $angle$$4_cmds$$5$$ = window.Math.atan2($y2$$6$$ - $y1$$8$$, $x2$$13$$ - $x1$$15$$), $r$$4$$ = $JSCompiler_StaticMethods__drawPath$self$$.$_markerSize$ / 2, $lineAngle$$ = window.Math.PI / 8, $angle$$4_cmds$$5$$ = D.$DvtPathUtils$$.moveTo($x1$$15$$ + $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ + $lineAngle$$), $y1$$8$$ + $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ + $lineAngle$$)) + D.$DvtPathUtils$$.arcTo($r$$4$$, $r$$4$$, 2 * (window.Math.PI - $lineAngle$$), 1, $x1$$15$$ + $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ - 
  $lineAngle$$), $y1$$8$$ + $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ - $lineAngle$$)) + D.$DvtPathUtils$$.lineTo($x2$$13$$ - $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ + $lineAngle$$), $y2$$6$$ - $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ + $lineAngle$$)) + D.$DvtPathUtils$$.arcTo($r$$4$$, $r$$4$$, 2 * (window.Math.PI - $lineAngle$$), 1, $x2$$13$$ - $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ - $lineAngle$$), $y2$$6$$ - $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ - $lineAngle$$)) + 
  D.$DvtPathUtils$$.closePath();
  $JSCompiler_StaticMethods__drawPath$self$$.$setCmds$($angle$$4_cmds$$5$$);
  $JSCompiler_StaticMethods__drawPath$self$$.$_x1$ = $x1$$15$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_y1$ = $y1$$8$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_x2$ = $x2$$13$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_y2$ = $y2$$6$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartRangeMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$9$$, $stroke$$15$$, $dataColor$$8_hoverColor$$1$$, $innerColor$$5$$, $outerColor$$6$$) {
  this.$_dataColor$ = $dataColor$$8_hoverColor$$1$$;
  $dataColor$$8_hoverColor$$1$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$8_hoverColor$$1$$);
  this.$_isInvisible$ ? ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$8_hoverColor$$1$$, 1, 1.5)) : (this.$setFill$($fill$$9$$), this.$setStroke$($stroke$$15$$), this.$setHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 1, 1), new D.$DvtSolidStroke$$($dataColor$$8_hoverColor$$1$$, 1, 3.5)), this.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 1, 1.5), new D.$DvtSolidStroke$$($outerColor$$6$$, 1, 4.5)), this.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 
  1, 1.5), new D.$DvtSolidStroke$$($dataColor$$8_hoverColor$$1$$, 1, 4.5)))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$, this.$setStroke$(this.$_hoverStroke$)) : D.$DvtChartRangeMarker$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$, this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$SELECTED_STROKE$$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$)) : D.$DvtChartRangeMarker$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$6$$) {
  this.$_isInvisible$ ? this.$IsSelected$ != $selected$$6$$ && (this.$IsSelected$ = $selected$$6$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$SELECTED_FILL$$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$))) : D.$DvtChartRangeMarker$$.$superclass$.$setSelected$.call(this, 
  $selected$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$UpdateSelectionEffect$$() {
  this.$_isInvisible$ || D.$DvtChartRangeMarker$$.$superclass$.$UpdateSelectionEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_y1$, this.$_x2$, this.$_y2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$21$$) {
  (0,D.$JSCompiler_StaticMethods__drawPath$$)(this, $params$$21$$[0], $params$$21$$[1], $params$$21$$[2], $params$$21$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getBoundingBox$$() {
  return(0,D.$JSCompiler_StaticMethods_getUnion$$)((0,D.$JSCompiler_StaticMethods_getBoundingBox1$$)(this), (0,D.$JSCompiler_StaticMethods_getBoundingBox2$$)(this))
};
D.$JSCompiler_StaticMethods_getBoundingBox1$$ = function $$JSCompiler_StaticMethods_getBoundingBox1$$$($JSCompiler_StaticMethods_getBoundingBox1$self$$) {
  return new D.$DvtRectangle$$($JSCompiler_StaticMethods_getBoundingBox1$self$$.$_x1$ - $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_y1$ - $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$)
};
D.$JSCompiler_StaticMethods_getBoundingBox2$$ = function $$JSCompiler_StaticMethods_getBoundingBox2$$$($JSCompiler_StaticMethods_getBoundingBox2$self$$) {
  return new D.$DvtRectangle$$($JSCompiler_StaticMethods_getBoundingBox2$self$$.$_x2$ - $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_y2$ - $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$)
};
D.$DvtDataCursor$$ = function $$DvtDataCursor$$$($context$$46$$, $options$$57$$, $bHoriz$$7$$) {
  this.Init($context$$46$$, $options$$57$$, $bHoriz$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursor$$, D.$DvtContainer$$, "DvtDataCursor");
D.$DvtDataCursor$$.prototype.Init = function $$DvtDataCursor$$$$Init$($context$$47_lineWidth$$3_middleCircle$$, $markerSize$$3_options$$58$$, $bHoriz$$8_lineColor$$1$$) {
  D.$DvtDataCursor$$.$superclass$.Init.call(this, $context$$47_lineWidth$$3_middleCircle$$);
  this.$_bHoriz$ = $bHoriz$$8_lineColor$$1$$;
  this.$_options$ = $markerSize$$3_options$$58$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $context$$47_lineWidth$$3_middleCircle$$ = $markerSize$$3_options$$58$$.lineWidth;
  $bHoriz$$8_lineColor$$1$$ = $markerSize$$3_options$$58$$.lineColor;
  var $lineStyle$$1_outerCircle$$ = (0,D.$DvtStroke$convertTypeString$$)($markerSize$$3_options$$58$$.lineStyle), $stroke$$16$$ = new D.$DvtSolidStroke$$($bHoriz$$8_lineColor$$1$$, 1, $context$$47_lineWidth$$3_middleCircle$$);
  $stroke$$16$$.$setStyle$($lineStyle$$1_outerCircle$$);
  this.$_cursorLine$ = new D.$DvtLine$$(this.$getCtx$(), 0, 0, 0, 0, "dcLine");
  this.$_cursorLine$.$setStroke$($stroke$$16$$);
  this.$addChild$(this.$_cursorLine$);
  "off" != $markerSize$$3_options$$58$$.markerDisplayed && (this.$_marker$ = new D.$DvtContainer$$(this.$_context$), this.$_marker$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$addChild$(this.$_marker$), $markerSize$$3_options$$58$$ = $markerSize$$3_options$$58$$.markerSize, $lineStyle$$1_outerCircle$$ = new D.$DvtSimpleMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, $markerSize$$3_options$$58$$ + 4 * $context$$47_lineWidth$$3_middleCircle$$, $markerSize$$3_options$$58$$ + 
  4 * $context$$47_lineWidth$$3_middleCircle$$), $lineStyle$$1_outerCircle$$.$setSolidFill$($bHoriz$$8_lineColor$$1$$), this.$_marker$.$addChild$($lineStyle$$1_outerCircle$$), $context$$47_lineWidth$$3_middleCircle$$ = new D.$DvtSimpleMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, $markerSize$$3_options$$58$$ + 2 * $context$$47_lineWidth$$3_middleCircle$$, $markerSize$$3_options$$58$$ + 2 * $context$$47_lineWidth$$3_middleCircle$$), $context$$47_lineWidth$$3_middleCircle$$.$setSolidFill$("white"), 
  this.$_marker$.$addChild$($context$$47_lineWidth$$3_middleCircle$$), this.$_markerInnerCircle$ = new D.$DvtSimpleMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, $markerSize$$3_options$$58$$, $markerSize$$3_options$$58$$), this.$_marker$.$addChild$(this.$_markerInnerCircle$))
};
D.$DvtDataCursor$$.prototype.$render$ = function $$DvtDataCursor$$$$$render$$($markerColor_plotAreaBounds$$10$$, $dataX$$, $dataY$$, $lineCoord$$2$$, $markerSizeOuter_text$$45$$, $dataColor$$9$$) {
  var $bHoriz$$9$$ = this.$isHorizontal$(), $bRtl$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $tooltipBounds$$;
  if($markerSizeOuter_text$$45$$ != D.$JSCompiler_alias_NULL$$ && "" != $markerSizeOuter_text$$45$$) {
    var $stagePageCoords$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$getCtx$()), $tooltipManager$$ = this.$getCtx$().$getTooltipManager$("_dvtDataCursor");
    $tooltipManager$$.$showDatatip$($dataX$$ + $stagePageCoords$$.x, $dataY$$ + $stagePageCoords$$.y, $markerSizeOuter_text$$45$$, $dataColor$$9$$, D.$JSCompiler_alias_FALSE$$);
    $tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
    $markerSizeOuter_text$$45$$ = this.$_options$.markerSize + 4 * this.$_options$.lineWidth;
    var $tooltipX$$, $tooltipY$$;
    $bHoriz$$9$$ ? ($tooltipX$$ = $bRtl$$ ? $markerColor_plotAreaBounds$$10$$.x - 0.75 * $tooltipBounds$$.$w$ : $markerColor_plotAreaBounds$$10$$.x + $markerColor_plotAreaBounds$$10$$.$w$ - $tooltipBounds$$.$w$ / 4, $tooltipY$$ = $lineCoord$$2$$ - $tooltipBounds$$.$h$ / 2, !$bRtl$$ && $tooltipX$$ - $dataX$$ < $markerSizeOuter_text$$45$$ ? $tooltipX$$ = $dataX$$ + $markerSizeOuter_text$$45$$ : $bRtl$$ && $dataX$$ - ($tooltipX$$ + $tooltipBounds$$.$w$) < $markerSizeOuter_text$$45$$ && ($tooltipX$$ = 
    $dataX$$ - $markerSizeOuter_text$$45$$ - $tooltipBounds$$.$w$)) : ($tooltipX$$ = $lineCoord$$2$$ - $tooltipBounds$$.$w$ / 2, $tooltipY$$ = $markerColor_plotAreaBounds$$10$$.y - 0.75 * $tooltipBounds$$.$h$, $dataY$$ - ($tooltipY$$ + $tooltipBounds$$.$h$) < $markerSizeOuter_text$$45$$ && ($tooltipY$$ = $dataY$$ - $markerSizeOuter_text$$45$$ - $tooltipBounds$$.$h$));
    (0,D.$JSCompiler_StaticMethods_positionTip$$)($tooltipManager$$, $tooltipX$$ + $stagePageCoords$$.x, $tooltipY$$ + $stagePageCoords$$.y);
    $tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
    $tooltipBounds$$.x -= $stagePageCoords$$.x;
    $tooltipBounds$$.y -= $stagePageCoords$$.y
  }
  $bHoriz$$9$$ ? (this.$_cursorLine$.$setTranslateY$($lineCoord$$2$$), $bRtl$$ ? (this.$_cursorLine$.$setX1$($tooltipBounds$$ ? $tooltipBounds$$.x + $tooltipBounds$$.$w$ - 1 : $markerColor_plotAreaBounds$$10$$.x), this.$_cursorLine$.$setX2$($markerColor_plotAreaBounds$$10$$.x + $markerColor_plotAreaBounds$$10$$.$w$)) : (this.$_cursorLine$.$setX1$($markerColor_plotAreaBounds$$10$$.x), this.$_cursorLine$.$setX2$($tooltipBounds$$ ? $tooltipBounds$$.x + 1 : $markerColor_plotAreaBounds$$10$$.x + $markerColor_plotAreaBounds$$10$$.$w$))) : 
  (this.$_cursorLine$.$setTranslateX$($lineCoord$$2$$), this.$_cursorLine$.$setY1$($tooltipBounds$$ ? $tooltipBounds$$.y + $tooltipBounds$$.$h$ - 1 : $markerColor_plotAreaBounds$$10$$.y), this.$_cursorLine$.$setY2$($markerColor_plotAreaBounds$$10$$.y + $markerColor_plotAreaBounds$$10$$.$h$));
  this.$_marker$ && ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX$$, $dataY$$), $markerColor_plotAreaBounds$$10$$ = this.$_options$.markerColor, this.$_markerInnerCircle$.$setSolidFill$($markerColor_plotAreaBounds$$10$$ ? $markerColor_plotAreaBounds$$10$$ : $dataColor$$9$$), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$_marker$))
};
D.$DvtDataCursor$$.prototype.$isHorizontal$ = (0,D.$JSCompiler_get$$)("$_bHoriz$");
D.$DvtFunnelSlice$$ = function $$DvtFunnelSlice$$$($chart$$106$$, $seriesIndex$$36$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$12$$) {
  this.Init($chart$$106$$, $seriesIndex$$36$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$12$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelSlice$$, D.$DvtPath$$, "DvtFunnelSlice");
D.$DvtFunnelSlice$$.prototype.Init = function $$DvtFunnelSlice$$$$Init$($bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$, $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$, $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$, $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$, $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$, 
$backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$, $textDim$$inline_2338_valuePercent$$1$$, $fillPercent$$1_pos$$inline_2339$$, $displacement$$inline_2341_gap$$13$$) {
  D.$DvtFunnelSlice$$.$superclass$.Init.call(this, $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$.$getCtx$());
  this.$_chart$ = $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$;
  $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$ = $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$.$getOptions$();
  this.$_seriesIndex$ = $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$;
  this.$_numDrawnSeries$ = $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$;
  this.$_funnelWidth$ = $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$;
  this.$_funnelHeight$ = $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$;
  this.$_startPercent$ = $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$;
  this.$_valuePercent$ = $textDim$$inline_2338_valuePercent$$1$$;
  this.$_fillPercent$ = $fillPercent$$1_pos$$inline_2339$$;
  this.$_3dRatio$ = "on" == $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$.styleDefaults.threeDEffect ? 1 : 0;
  this.$_gap$ = $displacement$$inline_2341_gap$$13$$;
  $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$_dataColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$.styleDefaults.backgroundColor;
  this.$_backgroundColor$ || (this.$_backgroundColor$ = D.$DvtFunnelSlice$_BACKGROUND_COLOR$$);
  this.$setCmds$($barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$.slice);
  $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$.bar && (this.$_bar$ = new D.$DvtPath$$(this.$getCtx$(), $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$ = $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$.sliceBounds;
  $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$);
  $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ == D.$JSCompiler_alias_NULL$$ && 0 < this.$_3dRatio$ && ($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ = "#FFFFFF");
  $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$, D.$JSCompiler_alias_TRUE$$);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$), this.$_bar$.$setFill$($JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$)) : this.$setFill$($JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$);
  $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ && this.$setSolidStroke$($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$, D.$JSCompiler_alias_NULL$$, $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$);
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$(this.$_dataColor$), $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$.$setHoverStroke$(new D.$DvtSolidStroke$$($JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$, 
  1, 2)), $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$, 1, 1.5), new D.$DvtSolidStroke$$($funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$, 1, 4.5)), $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$, 
  1, 1.5), new D.$DvtSolidStroke$$($JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$, 1, 4.5)), this.setCursor("pointer"));
  a: {
    $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$ = $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$.sliceBounds;
    $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$ = $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$.barBounds;
    ($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ = D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, this.$_seriesIndex$, 0)) || ($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    if($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ && "none" != D.$DvtChartStyleUtils$$.$getDataLabelPosition$(this.$_chart$, this.$_seriesIndex$, 0) && ($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$ = new D.$DvtOutputText$$(this.$getCtx$(), $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$, 0, 0), $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$ = 
    D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != D.$JSCompiler_alias_NULL$$, $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$ = [this.$_chart$.$getOptions$().styleDefaults.dataLabelStyle, this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle, new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], $backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$ = 
    (0,D.$DvtCSSStyle$mergeStyles$$)($backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$), $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$.$setCSSStyle$($backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$), D.$DvtTextUtils$$.$fitText$($funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$, 
    $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$.$h$ - 10, $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$.$w$, this, 3))) {
      $textDim$$inline_2338_valuePercent$$1$$ = $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$.$measureDimensions$();
      $fillPercent$$1_pos$$inline_2339$$ = (0,D.$JSCompiler_StaticMethods__getLabelPosition$$)(this, $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$);
      $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$ && ($bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$ = 0.15 * $textDim$$inline_2338_valuePercent$$1$$.$h$, $displacement$$inline_2341_gap$$13$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? 0.5 : -0.5, $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$ = D.$DvtPathUtils$$.$roundedRectangle$($textDim$$inline_2338_valuePercent$$1$$.x - 
      $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$, $textDim$$inline_2338_valuePercent$$1$$.y, $textDim$$inline_2338_valuePercent$$1$$.$w$ + 2 * $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$, $textDim$$inline_2338_valuePercent$$1$$.$h$, 2, 2, 2, 2), $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$ = new D.$DvtPath$$(this.$getCtx$(), $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$), 
      $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$.$setSolidFill$("#FFFFFF", 0.9), $fillPercent$$1_pos$$inline_2339$$.translate($displacement$$inline_2341_gap$$13$$ * $textDim$$inline_2338_valuePercent$$1$$.$h$, -$displacement$$inline_2341_gap$$13$$ * $textDim$$inline_2338_valuePercent$$1$$.$w$), $bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$.$setMatrix$($fillPercent$$1_pos$$inline_2339$$), this.$addChild$($bbox$$inline_2343_chart$$107_cmd$$inline_2342_options$$59_padding$$inline_2340$$));
      $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$ = $funnelHeight$$1_isPatternBg$$inline_2335_outerColor$$inline_2327_sliceBorderWidth$$inline_2323$$ ? "#000000" : (0,D.$JSCompiler_StaticMethods_containsPoint$$)($barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$, $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$.x, $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$.y + 
      ($JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$.$h$ - $textDim$$inline_2338_valuePercent$$1$$.$w$) / 2) ? D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_dataColor$) : D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_backgroundColor$);
      (!$backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$.$getStyle$("color") || D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$) && $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$.$setCSSStyle$($backgroundFill$$inline_2324_labelStyleArray$$inline_2336_shapeForSelection$$inline_2328_sliceBounds$$inline_2320_startPercent$$1_style$$inline_2337$$.$setStyle$("color", 
      $barBounds$$inline_2332_cmds$$6_labelColor$$inline_2344_numDrawnSeries$$2$$));
      $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getLabelPosition$$)(this, $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$));
      $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$.$alignCenter$();
      $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$.$alignMiddle$();
      $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$ = $funnelWidth$$1_innerColor$$inline_2326_label$$inline_2334_labelString$$inline_2333_sliceBorder$$inline_2322$$;
      break a
    }
    $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$ = D.$JSCompiler_alias_VOID$$
  }
  this.$_label$ = $JSCompiler_inline_result$$377_hoverColor$$inline_2325_seriesIndex$$37_sliceBounds$$inline_2331_sliceFill$$inline_2321$$;
  this.$_label$ != D.$JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
};
D.$DvtFunnelSlice$_FUNNEL_RATIO$$ = 6 / 22;
D.$DvtFunnelSlice$_BACKGROUND_COLOR$$ = "#EDEDED";
D.$JSCompiler_StaticMethods__getPath$$ = function $$JSCompiler_StaticMethods__getPath$$$($JSCompiler_StaticMethods__getPath$self$$) {
  var $alpha$$4_isBiDi$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPath$self$$.$getCtx$()), $gapCount_rx$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self$$.$_chart$), $ar$$2_offset$$16$$ = ($JSCompiler_StaticMethods__getPath$self$$.$_numDrawnSeries$ + 1) * $JSCompiler_StaticMethods__getPath$self$$.$_gap$, $angle$$5$$ = D.$DvtMath$$.$degreesToRads$(31 - 2 * $JSCompiler_StaticMethods__getPath$self$$.$_3dRatio$), $gapCount_rx$$ = ($JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - 
  $gapCount_rx$$ * $JSCompiler_StaticMethods__getPath$self$$.$_gap$) / window.Math.sin(D.$DvtMath$$.$degreesToRads$(31)), $ry$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ / window.Math.sin($angle$$5$$), $ratio$$5$$ = 0.12 * ($JSCompiler_StaticMethods__getPath$self$$.$_3dRatio$ * $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$);
  1E-5 > $ratio$$5$$ && ($ratio$$5$$ = 0);
  var $arcDir1_delta$$4$$ = $angle$$5$$ * (1 - $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$), $arcDir2_gamma$$ = $angle$$5$$ * (1 - $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$), $c1$$1_pathCommands$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ + $ry$$, $barCommands_c2$$1$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ - 
  $ry$$;
  $alpha$$4_isBiDi$$ ? ($ar$$2_offset$$16$$ = [$gapCount_rx$$ * window.Math.sin($arcDir1_delta$$4$$) + $ar$$2_offset$$16$$, $c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir1_delta$$4$$), $gapCount_rx$$ * window.Math.sin($arcDir2_gamma$$) + $ar$$2_offset$$16$$, $c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir2_gamma$$), $gapCount_rx$$ * window.Math.sin($arcDir2_gamma$$) + $ar$$2_offset$$16$$, $barCommands_c2$$1$$ + $ry$$ * window.Math.cos($arcDir2_gamma$$), $gapCount_rx$$ * window.Math.sin($arcDir1_delta$$4$$) + 
  $ar$$2_offset$$16$$, $barCommands_c2$$1$$ + $ry$$ * window.Math.cos($arcDir1_delta$$4$$)], $arcDir1_delta$$4$$ = 0, $arcDir2_gamma$$ = 1) : ($ar$$2_offset$$16$$ = [$JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir1_delta$$4$$), $c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir1_delta$$4$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir2_gamma$$), 
  $c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir2_gamma$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir2_gamma$$), $barCommands_c2$$1$$ + $ry$$ * window.Math.cos($arcDir2_gamma$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir1_delta$$4$$), $barCommands_c2$$1$$ + $ry$$ * window.Math.cos($arcDir1_delta$$4$$)], $arcDir1_delta$$4$$ = 1, $arcDir2_gamma$$ = 
  0);
  var $c1$$1_pathCommands$$ = D.$DvtPathUtils$$.moveTo($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]), $barCommands_c2$$1$$ = D.$JSCompiler_alias_NULL$$, $c1$$1_pathCommands$$ = $c1$$1_pathCommands$$ + D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, window.Math.PI, $arcDir2_gamma$$, $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[7]), $c1$$1_pathCommands$$ = $c1$$1_pathCommands$$ + D.$DvtPathUtils$$.arcTo($ratio$$5$$ * 
  ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, window.Math.PI, $arcDir2_gamma$$, $ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]), $c1$$1_pathCommands$$ = $c1$$1_pathCommands$$ + D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_delta$$4$$, $ar$$2_offset$$16$$[2], $ar$$2_offset$$16$$[3]), $c1$$1_pathCommands$$ = $c1$$1_pathCommands$$ + D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 
  2, ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2, window.Math.PI, $arcDir2_gamma$$, $ar$$2_offset$$16$$[4], $ar$$2_offset$$16$$[5]), $c1$$1_pathCommands$$ = $c1$$1_pathCommands$$ + D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_delta$$4$$, $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[7]), $sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[2]), $ar$$2_offset$$16$$[5], window.Math.abs($ar$$2_offset$$16$$[0] - $ar$$2_offset$$16$$[2]), 
  window.Math.abs($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]));
  if($JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$) {
    var $barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$, 1), 0), $alpha$$4_isBiDi$$ = $alpha$$4_isBiDi$$ ? -$barBounds_percent$$1$$ * window.Math.PI : $barBounds_percent$$1$$ * window.Math.PI, $barCommands_c2$$1$$ = D.$DvtPathUtils$$.moveTo($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]), $barCommands_c2$$1$$ = $barCommands_c2$$1$$ + D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_delta$$4$$, $ar$$2_offset$$16$$[2], 
    $ar$$2_offset$$16$$[3]), $barCommands_c2$$1$$ = $barCommands_c2$$1$$ + D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2, ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2, $alpha$$4_isBiDi$$, $arcDir2_gamma$$, $ar$$2_offset$$16$$[2] + $ratio$$5$$ * ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2 * window.Math.sin($alpha$$4_isBiDi$$), ($ar$$2_offset$$16$$[5] + $ar$$2_offset$$16$$[3]) / 2 + ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 
    2 * window.Math.cos($alpha$$4_isBiDi$$)), $barCommands_c2$$1$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ ? $barCommands_c2$$1$$ + D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_delta$$4$$, $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[1] + $barBounds_percent$$1$$ * ($ar$$2_offset$$16$$[7] - $ar$$2_offset$$16$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ ? $barCommands_c2$$1$$ + D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, 
    $angle$$5$$, $arcDir2_gamma$$, $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[1] + $barBounds_percent$$1$$ * ($ar$$2_offset$$16$$[7] - $ar$$2_offset$$16$$[1])) : $barCommands_c2$$1$$ + D.$DvtPathUtils$$.lineTo($ar$$2_offset$$16$$[6] + $ratio$$5$$ * ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2 * window.Math.sin($alpha$$4_isBiDi$$), ($ar$$2_offset$$16$$[7] + $ar$$2_offset$$16$$[1]) / 2 + ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2 * window.Math.cos($alpha$$4_isBiDi$$)), $barCommands_c2$$1$$ = 
    $barCommands_c2$$1$$ + D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, $alpha$$4_isBiDi$$, $arcDir1_delta$$4$$, $ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]), $barCommands_c2$$1$$ = $barCommands_c2$$1$$ + D.$DvtPathUtils$$.closePath(), $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[2]), $ar$$2_offset$$16$$[5] + window.Math.abs($ar$$2_offset$$16$$[3] - 
    $ar$$2_offset$$16$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$2_offset$$16$$[0] - $ar$$2_offset$$16$$[2]), window.Math.abs($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) * $barBounds_percent$$1$$)
  }
  return{slice:$c1$$1_pathCommands$$, bar:$barCommands_c2$$1$$, sliceBounds:$sliceBounds$$, barBounds:$barCommands_c2$$1$$ ? $barBounds_percent$$1$$ : $sliceBounds$$}
};
D.$JSCompiler_StaticMethods__getLabelPosition$$ = function $$JSCompiler_StaticMethods__getLabelPosition$$$($JSCompiler_StaticMethods__getLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$1$$ = $JSCompiler_StaticMethods__getLabelPosition$self$$.$_3dRatio$ * (0.12 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getLabelPosition$self$$.$_funnelHeight$) / 2), $rotationMatrix$$1$$ = new D.$DvtMatrix$$;
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getLabelPosition$self$$.$getCtx$()) ? ($rotationMatrix$$1$$.rotate(window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$1$$.rotate(3 * window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 
  2));
  return $rotationMatrix$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtFunnelSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$(), this.$_3dRatio$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$3_cmds$$7$$) {
  this.$_startPercent$ = $ar$$3_cmds$$7$$[0];
  this.$_valuePercent$ = $ar$$3_cmds$$7$$[1];
  this.$_fillPercent$ = this.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ ? $ar$$3_cmds$$7$$[2] : D.$JSCompiler_alias_NULL$$;
  this.$setAlpha$($ar$$3_cmds$$7$$[3]);
  this.$_3dRatio$ = $ar$$3_cmds$$7$$[4];
  $ar$$3_cmds$$7$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$setCmds$($ar$$3_cmds$$7$$.slice);
  $ar$$3_cmds$$7$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$3_cmds$$7$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getLabelPosition$$)(this, $ar$$3_cmds$$7$$.sliceBounds))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$7$$) {
  if(this.$_bar$ != D.$JSCompiler_alias_NULL$$) {
    if(this.$IsSelected$ == $selected$$7$$) {
      return
    }
    this.$IsSelected$ = $selected$$7$$;
    this.$_bar$.$setSelected$($selected$$7$$)
  }else {
    D.$DvtFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$7$$)
  }
  var $dims$$7$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $w$$8$$ = $dims$$7$$.$w$;
  $selected$$7$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$8$$ - 3) / $w$$8$$), $shapeForSelection$$1$$.$setTranslateX$(window.Math.ceil(1.5) + 3 / $w$$8$$ * $dims$$7$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$showHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$hideHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$copyShape$ = function $$JSCompiler_prototypeAlias$$$$copyShape$$() {
  return new D.$DvtFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
};
D.$DvtPieChart$$ = function $$DvtPieChart$$$($chart$$108$$, $availSpace$$75$$, $callback$$43$$, $callbackObj$$8$$) {
  this.Init($chart$$108$$, $availSpace$$75$$, $callback$$43$$, $callbackObj$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChart$$, D.$DvtContainer$$, "DvtPieChart");
D.$DvtPieChart$$.prototype.Init = function $$DvtPieChart$$$$Init$($chart$$109$$, $availSpace$$76$$) {
  D.$DvtPieChart$$.$superclass$.Init.call(this, $chart$$109$$.$getCtx$());
  this.$chart$ = $chart$$109$$;
  this.$_options$ = $chart$$109$$.$getOptions$();
  this.$_frame$ = $availSpace$$76$$.$clone$();
  $chart$$109$$.$pieChart$ = this;
  for(var $labelPosition$$1_slices$$inline_2347$$ = this.$getLabelPosition$(), $numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$109$$), $otherValue$$inline_2351_seriesIndex$$38$$ = 0;$otherValue$$inline_2351_seriesIndex$$38$$ < $numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$;$otherValue$$inline_2351_seriesIndex$$38$$++) {
    var $data$$26_i$$inline_2352$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$109$$, $otherValue$$inline_2351_seriesIndex$$38$$, 0);
    if($data$$26_i$$inline_2352$$ && ("center" == $labelPosition$$1_slices$$inline_2347$$ || "none" == $labelPosition$$1_slices$$inline_2347$$) && "outsideSlice" == $data$$26_i$$inline_2352$$.labelPosition) {
      $labelPosition$$1_slices$$inline_2347$$ = "outsideSlice"
    }
  }
  this.$_center$ = new D.$DvtPoint$$($availSpace$$76$$.x + window.Math.floor($availSpace$$76$$.$w$ / 2), $availSpace$$76$$.y + window.Math.floor($availSpace$$76$$.$h$ / 2));
  this.$_radiusY$ = this.$_radiusX$ = window.Math.floor(window.Math.min($availSpace$$76$$.$w$, $availSpace$$76$$.$h$) * ("center" == $labelPosition$$1_slices$$inline_2347$$ || "none" == $labelPosition$$1_slices$$inline_2347$$ ? 0.45 : 0.38));
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  (0,D.$JSCompiler_StaticMethods_is3D$$)(this) && (this.$_depth$ = 0.1 * $availSpace$$76$$.$h$, this.$_center$.y -= window.Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= 0.59);
  for(var $labelPosition$$1_slices$$inline_2347$$ = [], $seriesIndex$$inline_2350_slice$$inline_2348$$, $numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_2351_seriesIndex$$38$$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$chart$), $data$$26_i$$inline_2352$$ = 0;$data$$26_i$$inline_2352$$ < $numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$.length;$data$$26_i$$inline_2352$$++) {
    $seriesIndex$$inline_2350_slice$$inline_2348$$ = $numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$[$data$$26_i$$inline_2352$$], D.$DvtChartStyleUtils$$.$isDataItemRendered$(this.$chart$, $seriesIndex$$inline_2350_slice$$inline_2348$$) && ($seriesIndex$$inline_2350_slice$$inline_2348$$ = new D.$DvtPieSlice$$(this, $seriesIndex$$inline_2350_slice$$inline_2348$$), 0 >= $seriesIndex$$inline_2350_slice$$inline_2348$$.getValue() || $labelPosition$$1_slices$$inline_2347$$.push($seriesIndex$$inline_2350_slice$$inline_2348$$))
  }
  0 < $otherValue$$inline_2351_seriesIndex$$38$$ && ($numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$ = new D.$DvtPieSlice$$(this), "ascending" == this.$chart$.$getOptions$().sorting ? $labelPosition$$1_slices$$inline_2347$$.unshift($numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$) : $labelPosition$$1_slices$$inline_2347$$.push($numSeries_otherSlice$$inline_2353_seriesIndices$$inline_2349$$));
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && $labelPosition$$1_slices$$inline_2347$$.reverse();
  this.$_slices$ = $labelPosition$$1_slices$$inline_2347$$;
  this.$_shapesContainer$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtPieChart$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$DvtPieChart$$.prototype.$highlight$ = function $$DvtPieChart$$$$$highlight$$($categories$$2$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$2$$, this.$_slices$, "any" == this.$getOptions$().highlightMatch)
};
(0,D.$goog$exportPath_$$)("DvtPieChart.prototype.highlight", D.$DvtPieChart$$.prototype.$highlight$);
D.$DvtPieChart$$.prototype.$setInitialSelection$ = function $$DvtPieChart$$$$$setInitialSelection$$() {
  var $handler$$28$$ = this.$chart$.$getSelectionHandler$();
  if($handler$$28$$) {
    for(var $otherPeerId_selected$$8$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this.$chart$), $selectedIds$$1$$ = [], $i$$176$$ = 0;$i$$176$$ < $otherPeerId_selected$$8$$.length;$i$$176$$++) {
      for(var $j$$31$$ = 0;$j$$31$$ < this.$_slices$.length;$j$$31$$++) {
        var $peerId$$ = this.$_slices$[$j$$31$$].getId();
        $peerId$$ && ($otherPeerId_selected$$8$$[$i$$176$$].id && $peerId$$.getId() == $otherPeerId_selected$$8$$[$i$$176$$].id || $peerId$$.$getSeries$() == $otherPeerId_selected$$8$$[$i$$176$$].series && $peerId$$.$getGroup$() == $otherPeerId_selected$$8$$[$i$$176$$].group) && $selectedIds$$1$$.push($peerId$$)
      }
    }
    D.$DvtPieChartUtils$$.$isOtherSliceSelected$(this.$chart$, $otherPeerId_selected$$8$$) && ($otherPeerId_selected$$8$$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$chart$), $selectedIds$$1$$.push($otherPeerId_selected$$8$$));
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$28$$, $selectedIds$$1$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$render$ = function $$DvtPieChart$$$$$render$$() {
  var $shadow$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new D.$DvtContainer$$(this.$getCtx$())), this.$addChild$(this.$_shapesContainer$), !(0,D.$JSCompiler_StaticMethods_is3D$$)(this) && "skyros" == this.$getSkin$() && ($shadow$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)));
  var $i$$177_i$$inline_2383_slices$$inline_2355$$ = this.$_slices$, $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$, $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$, $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ = 
  0, $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = $i$$177_i$$inline_2383_slices$$inline_2355$$ ? $i$$177_i$$inline_2383_slices$$inline_2355$$.length : 0;
  360 < $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ && ($anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ -= 360);
  0 > $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ && ($anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ += 360);
  var $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ = $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ = 0;
  0 < $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ && ($accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ = $i$$177_i$$inline_2383_slices$$inline_2355$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$ < $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$;$JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$++) {
    $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$ = $i$$177_i$$inline_2383_slices$$inline_2355$$[$JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$], $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ = $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$.getValue(), $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ = 
    0 == $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ ? 0 : 100 * (window.Math.abs($angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$) / $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$), $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ *= 
    3.6, $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ -= $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$, 0 > $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ && ($anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ += 
    360), $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$.$setAngleStart$($anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$), $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$.$setAngleExtent$($angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$), $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = 
    $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$.$getAngleStart$()
  }
  for($i$$177_i$$inline_2383_slices$$inline_2355$$ = 0;$i$$177_i$$inline_2383_slices$$inline_2355$$ < this.$_slices$.length;$i$$177_i$$inline_2383_slices$$inline_2355$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$ = this.$_slices$[$i$$177_i$$inline_2383_slices$$inline_2355$$];
    $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_bFillerSlice$ ? "color" : D.$DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_chart$);
    $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$getFillColor$();
    $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$getFillPattern$();
    $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = D.$JSCompiler_alias_VOID$$;
    if("pattern" == $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ || $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ != D.$JSCompiler_alias_NULL$$) {
      $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = new D.$DvtPatternFill$$($accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$, $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$), $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = 
      "pattern"
    }else {
      if("gradient" == $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$) {
        var $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_pieChart$.$getSkin$(), $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = "skyros" == $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ ? 
        297 : 270, $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ = !(0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_pieChart$) ? "2D" : "3D", $arColors$$inline_2374$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$), 
        $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$, $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$), $arAlphas$$inline_2375$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$), $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$), 
        $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = new D.$DvtLinearGradientFill$$($anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$, $arColors$$inline_2374$$, $arAlphas$$inline_2375$$, D.$DvtPieRenderUtils$$.$getGradientRatios$($angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$, 
        $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$), [window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_centerX$ - $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_radiusX$), window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_centerY$ - 
        $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_radiusY$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_radiusX$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_radiusY$)])
      }else {
        $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = new D.$DvtSolidFill$$($color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$)
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_topSurface$ = D.$DvtPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$, $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$);
    if(0 < $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_depth$ || $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_radiusY$) {
      $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = "gradient" == $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$, $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ = new D.$DvtSolidFill$$(D.$DvtColorUtils$$.$getDarker$($color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$, 
      0.6)), $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$ = $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ ? D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$, D.$DvtPieRenderUtils$$.$SIDE$) : $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$, 
      $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ ? D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$, D.$DvtPieRenderUtils$$.$CRUST$) : 
      $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$, $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_leftSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$, D.$DvtPieRenderUtils$$.$SURFACE_LEFT$, $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$), 
      $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_rightSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$, D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$, $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$), $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.$_crustSurface$ = 
      D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$, D.$DvtPieRenderUtils$$.$SURFACE_CRUST$, $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$)
    }
  }
  $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$ = [];
  $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$ = $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ ? $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$.length : 0;
  for(var $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = -1, $accumAngleThreshold$$inline_2394_sliceSpanBeforeNoon$$inline_2390$$, $i$$177_i$$inline_2383_slices$$inline_2355$$ = 0;$i$$177_i$$inline_2383_slices$$inline_2355$$ < $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$;$i$$177_i$$inline_2383_slices$$inline_2355$$++) {
    if($angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$[$i$$177_i$$inline_2383_slices$$inline_2355$$], $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ = $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$.$getAngleStart$(), 
    $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$.$getAngleExtent$(), $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = 
    $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ + $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$, 360 < $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ && ($angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ -= 
    360), 0 > $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ && ($angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ += 360), 90 == $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ || 
    90 > $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ && 90 < $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$) {
      $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = $i$$177_i$$inline_2383_slices$$inline_2355$$;
      $accumAngleThreshold$$inline_2394_sliceSpanBeforeNoon$$inline_2390$$ = $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ - 90;
      break
    }
  }
  $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$ = [];
  for($i$$177_i$$inline_2383_slices$$inline_2355$$ = $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$;$i$$177_i$$inline_2383_slices$$inline_2355$$ < $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$;$i$$177_i$$inline_2383_slices$$inline_2355$$++) {
    $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$.push($accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$[$i$$177_i$$inline_2383_slices$$inline_2355$$])
  }
  for($i$$177_i$$inline_2383_slices$$inline_2355$$ = 0;$i$$177_i$$inline_2383_slices$$inline_2355$$ < $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$;$i$$177_i$$inline_2383_slices$$inline_2355$$++) {
    $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$.push($accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$[$i$$177_i$$inline_2383_slices$$inline_2355$$])
  }
  $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ = 0;
  $accumAngleThreshold$$inline_2394_sliceSpanBeforeNoon$$inline_2390$$ = 180 + $accumAngleThreshold$$inline_2394_sliceSpanBeforeNoon$$inline_2390$$;
  for($i$$177_i$$inline_2383_slices$$inline_2355$$ = 0;$i$$177_i$$inline_2383_slices$$inline_2355$$ < $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$;$i$$177_i$$inline_2383_slices$$inline_2355$$++) {
    if($angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$[$i$$177_i$$inline_2383_slices$$inline_2355$$]) {
      if($accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ + $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$.$getAngleExtent$() > $accumAngleThreshold$$inline_2394_sliceSpanBeforeNoon$$inline_2390$$) {
        $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$ = $i$$177_i$$inline_2383_slices$$inline_2355$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.push($angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$);
      $accumAngle$$inline_2392_dataTotal$$inline_2363_lateralFill$$inline_2377_pattern$$inline_2369_skin$$inline_2371_slices$$inline_2381$$ += $angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$.$getAngleExtent$()
    }
  }
  for($i$$177_i$$inline_2383_slices$$inline_2355$$ = $color$$inline_2368_nSlices$$inline_2384_sideFill$$inline_2378_slice$$inline_2358$$ - 1;$i$$177_i$$inline_2383_slices$$inline_2355$$ >= $anchorOffset$$inline_2356_angle$$inline_2359_grAngle$$inline_2372_lastSliceIndexToProcess$$inline_2393_rotateIdx$$inline_2386_topFill$$inline_2370$$;$i$$177_i$$inline_2383_slices$$inline_2355$$--) {
    ($angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$ = $angleStart$$inline_2387_arc$$inline_2360_percentage$$inline_2362_rotatedSlices$$inline_2391_style$$inline_2373_value$$inline_2364$$[$i$$177_i$$inline_2383_slices$$inline_2355$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.push($angleExtent$$inline_2388_crustFill$$inline_2379_fillType$$inline_2367_nSlices$$inline_2361_slice$$inline_2385_sliceSpanEnd$$inline_2389_useGradientFill$$inline_2376$$)
  }
  D.$DvtPieLabelUtils$$.$createPieCenterLabel$(this);
  this.$_duringDisplayAnim$ || D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$177_i$$inline_2383_slices$$inline_2355$$ = 0;$i$$177_i$$inline_2383_slices$$inline_2355$$ < $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$.length;$i$$177_i$$inline_2383_slices$$inline_2355$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_2366_i$$inline_2357_zOrderedSlices$$inline_2382$$[$i$$177_i$$inline_2383_slices$$inline_2355$$].$render$(this.$_duringDisplayAnim$)
  }
  (0,D.$DvtAgent$isPlatformWebkit$$)() || $shadow$$ && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shapesContainer$, $shadow$$);
  this.$setInitialSelection$();
  this.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$(this.$chart$))
};
D.$DvtPieChart$$.prototype.$getTotalValue$ = function $$DvtPieChart$$$$$getTotalValue$$() {
  for(var $total$$1$$ = 0, $i$$178$$ = 0;$i$$178$$ < this.$_slices$.length;$i$$178$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$178$$].getValue();
    0 <= $sliceValue$$ && ($total$$1$$ += $sliceValue$$)
  }
  return $total$$1$$
};
D.$JSCompiler_StaticMethods_is3D$$ = function $$JSCompiler_StaticMethods_is3D$$$($JSCompiler_StaticMethods_is3D$self$$) {
  return"on" == $JSCompiler_StaticMethods_is3D$self$$.$_options$.styleDefaults.threeDEffect
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return D.$DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_TRUE$$;
  var $anim_handler$$29$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this), $duration$$40_labelAnim$$ = this.$getAnimationDuration$(), $ar$$4_fillerAnim_value$$inline_2397$$ = this.$getTotalValue$(), $i$$181_renderAnim_slice$$inline_2398$$ = new D.$DvtPieSlice$$(this);
  $i$$181_renderAnim_slice$$inline_2398$$.$_value$ = $ar$$4_fillerAnim_value$$inline_2397$$;
  $i$$181_renderAnim_slice$$inline_2398$$.$_bFillerSlice$ = D.$JSCompiler_alias_TRUE$$;
  $i$$181_renderAnim_slice$$inline_2398$$.$_centerX$ = this.$getCenter$().x;
  $i$$181_renderAnim_slice$$inline_2398$$.$_centerY$ = this.$getCenter$().y;
  $i$$181_renderAnim_slice$$inline_2398$$.$_fillColor$ = "rgba(255,255,255,0)";
  $i$$181_renderAnim_slice$$inline_2398$$.$_strokeColor$ = "rgba(255,255,255,0)";
  $i$$181_renderAnim_slice$$inline_2398$$.$_id$ = new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
  this.$_slices$.push($i$$181_renderAnim_slice$$inline_2398$$);
  $ar$$4_fillerAnim_value$$inline_2397$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $i$$181_renderAnim_slice$$inline_2398$$, $duration$$40_labelAnim$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($ar$$4_fillerAnim_value$$inline_2397$$.$_animator$, "typeNumberArray", $i$$181_renderAnim_slice$$inline_2398$$, $i$$181_renderAnim_slice$$inline_2398$$.$GetAnimationParams$, $i$$181_renderAnim_slice$$inline_2398$$.$SetAnimationParams$, (0,D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$)($i$$181_renderAnim_slice$$inline_2398$$));
  $ar$$4_fillerAnim_value$$inline_2397$$.$setOnEnd$($i$$181_renderAnim_slice$$inline_2398$$.$_removeDeletedSlice$, $i$$181_renderAnim_slice$$inline_2398$$);
  $anim_handler$$29$$.add($ar$$4_fillerAnim_value$$inline_2397$$, 0);
  for($i$$181_renderAnim_slice$$inline_2398$$ = 0;$i$$181_renderAnim_slice$$inline_2398$$ < this.$_slices$.length - 1;$i$$181_renderAnim_slice$$inline_2398$$++) {
    this.$_slices$[$i$$181_renderAnim_slice$$inline_2398$$].$animateInsert$($anim_handler$$29$$)
  }
  $i$$181_renderAnim_slice$$inline_2398$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$40_labelAnim$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($i$$181_renderAnim_slice$$inline_2398$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim_handler$$29$$.add($i$$181_renderAnim_slice$$inline_2398$$, 0);
  $ar$$4_fillerAnim_value$$inline_2397$$ = [];
  for($i$$181_renderAnim_slice$$inline_2398$$ = 0;$i$$181_renderAnim_slice$$inline_2398$$ < this.$_slices$.length;$i$$181_renderAnim_slice$$inline_2398$$++) {
    $ar$$4_fillerAnim_value$$inline_2397$$ = $ar$$4_fillerAnim_value$$inline_2397$$.concat((0,D.$JSCompiler_StaticMethods_getLabelAndFeeler$$)(this.$_slices$[$i$$181_renderAnim_slice$$inline_2398$$]))
  }
  $duration$$40_labelAnim$$ = new D.$DvtAnimFadeIn$$(this.$_context$, $ar$$4_fillerAnim_value$$inline_2397$$, $duration$$40_labelAnim$$);
  $anim_handler$$29$$.add($duration$$40_labelAnim$$, 0);
  this.$_setAnimationParams$();
  $anim_handler$$29$$ = $anim_handler$$29$$.$getAnimation$(D.$JSCompiler_alias_TRUE$$);
  $anim_handler$$29$$.$setOnEnd$(this.$_onEnd$, this);
  return $anim_handler$$29$$
};
D.$JSCompiler_prototypeAlias$$.$_onEnd$ = function $$JSCompiler_prototypeAlias$$$$_onEnd$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_FALSE$$;
  this.$_setAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$getInnerRadius$ = function $$JSCompiler_prototypeAlias$$$$getInnerRadius$$() {
  return(0,D.$JSCompiler_StaticMethods_is3D$$)(this) ? 0 : 0.95 * this.$_options$.styleDefaults.pieInnerRadius * window.Math.min(this.$_radiusX$, this.$_radiusY$)
};
D.$JSCompiler_prototypeAlias$$.getDepth = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$30$$, $oldPie$$) {
  var $anim$$1_sliceAnim_sliceHandler$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim$$1_sliceAnim_sliceHandler$$, $oldPie$$.$_slices$, this.$_slices$);
  var $anim$$1_sliceAnim_sliceHandler$$ = $anim$$1_sliceAnim_sliceHandler$$.$getAnimation$(D.$JSCompiler_alias_TRUE$$), $renderAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($renderAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$1_sliceAnim_sliceHandler$$ = new D.$DvtParallelPlayable$$(this.$getCtx$(), $anim$$1_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$1_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$30$$.add($anim$$1_sliceAnim_sliceHandler$$, 0);
  this.$_setAnimationParams$([$oldPie$$.getDepth(), $oldPie$$.$_radiusY$, $oldPie$$.$getCenter$().y])
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[this.$_depth$, this.$_radiusY$, this.$_center$.y]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$22$$) {
  this.$removeChildren$();
  this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
  this.$_shapesContainer$ = D.$JSCompiler_alias_NULL$$;
  $params$$22$$ && (this.$_depth$ = $params$$22$$[0], this.$_radiusY$ = $params$$22$$[1], this.$_center$.y = $params$$22$$[2]);
  this.$render$()
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$5$$) {
  var $par$$2$$ = $slice$$5$$.$_pieChart$.$_shapesContainer$;
  if($par$$2$$) {
    var $parentChildCount$$2$$ = $par$$2$$.$getNumChildren$();
    1 < $parentChildCount$$2$$ - this.$_numFrontObjs$ && ($par$$2$$.removeChild($slice$$5$$.$_topSurface$[0]), $par$$2$$.$addChildAt$($slice$$5$$.$_topSurface$[0], $parentChildCount$$2$$ - this.$_numFrontObjs$ - 1))
  }
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$6$$) {
  for(var $len$$2_par$$3$$ = this.$_slices$.length, $counter_newIndex$$6$$ = 0, $i$$182$$ = 0;$i$$182$$ < $len$$2_par$$3$$;$i$$182$$++) {
    this.$_slices$[$i$$182$$].$isSelected$() && $counter_newIndex$$6$$++
  }
  this.$_numSelectedObjsInFront$ = $counter_newIndex$$6$$;
  if($len$$2_par$$3$$ = $slice$$6$$.$_pieChart$.$_shapesContainer$) {
    $counter_newIndex$$6$$ = $len$$2_par$$3$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter_newIndex$$6$$ && ($len$$2_par$$3$$.removeChild($slice$$6$$.$_topSurface$[0]), $len$$2_par$$3$$.$addChildAt$($slice$$6$$.$_topSurface$[0], $counter_newIndex$$6$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$getLabelPosition$$() {
  var $position$$21$$ = this.$_options$.styleDefaults.sliceLabelPosition;
  $position$$21$$ || ($position$$21$$ = this.$_options$.styleDefaults.dataLabelPosition);
  return(0,D.$DvtPieChart$parseLabelPosition$$)($position$$21$$)
};
D.$JSCompiler_StaticMethods_getSeriesLabelPosition$$ = function $$JSCompiler_StaticMethods_getSeriesLabelPosition$$$($JSCompiler_StaticMethods_getSeriesLabelPosition$self$$, $seriesIndex$$40$$) {
  var $position$$22$$ = $JSCompiler_StaticMethods_getSeriesLabelPosition$self$$.$getLabelPosition$(), $data$$27$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods_getSeriesLabelPosition$self$$.$chart$, $seriesIndex$$40$$, 0);
  $data$$27$$ && $data$$27$$.labelPosition && ($position$$22$$ = $data$$27$$.labelPosition);
  return(0,D.$DvtPieChart$parseLabelPosition$$)($position$$22$$)
};
D.$DvtPieChart$parseLabelPosition$$ = function $$DvtPieChart$parseLabelPosition$$$($position$$23$$) {
  return"center" == $position$$23$$ || "inside" == $position$$23$$ ? "center" : "outsideSlice" == $position$$23$$ || "outside" == $position$$23$$ ? "outsideSlice" : "none" == $position$$23$$ ? "none" : "auto"
};
D.$DvtPieChart$$.prototype.$getSkin$ = function $$DvtPieChart$$$$$getSkin$$() {
  return this.$_options$.skin
};
D.$DvtPieSlice$$ = function $$DvtPieSlice$$$($pieChart$$1$$, $seriesIndex$$41$$) {
  this.Init($pieChart$$1$$, $seriesIndex$$41$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieSlice$$, D.$DvtObj$$, "DvtPieSlice");
D.$DvtPieSlice$$.prototype.Init = function $$DvtPieSlice$$$$Init$($pieChart$$2$$, $seriesIndex$$42$$) {
  this.$_pieChart$ = $pieChart$$2$$;
  this.$_chart$ = $pieChart$$2$$.$chart$;
  this.$_angleExtent$ = this.$_angleStart$ = 0;
  this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = D.$JSCompiler_alias_NULL$$;
  this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_sliceLabelString$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = D.$JSCompiler_alias_NULL$$;
  this.$_selecting$ = this.$_selected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_centerX$ = this.$_pieChart$.$getCenter$().x;
  this.$_centerY$ = this.$_pieChart$.$getCenter$().y;
  this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
  this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
  this.$_depth$ = this.$_pieChart$.getDepth();
  var $dataItem$$11_options$$60$$ = this.$_chart$.$getOptions$();
  $seriesIndex$$42$$ != D.$JSCompiler_alias_NULL$$ ? ($dataItem$$11_options$$60$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$42$$, 0), this.$_value$ = D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$42$$, 0), this.$_explode$ = D.$DvtPieChartUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$42$$), this.$_fillColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$42$$), this.$_fillPattern$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
  $seriesIndex$$42$$, 0), this.$_strokeColor$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$42$$), this.$_borderWidth$ = D.$DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, $seriesIndex$$42$$), this.$_customLabel$ = $dataItem$$11_options$$60$$.label, this.$_seriesLabel$ = D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$42$$), this.$_action$ = $dataItem$$11_options$$60$$.action, this.$_drillable$ = D.$DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, 
  $seriesIndex$$42$$, 0), this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$11_options$$60$$._id), this.$_id$ = D.$DvtPieChartUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$42$$), this.$_seriesIndex$ = $seriesIndex$$42$$, this.$_categories$ = $dataItem$$11_options$$60$$.categories ? $dataItem$$11_options$$60$$.categories : D.$DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, $seriesIndex$$42$$).categories) : (this.$_value$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$_chart$), 
  this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$11_options$$60$$.styleDefaults.otherColor, this.$_fillPattern$ = D.$JSCompiler_alias_NULL$$, this.$_strokeColor$ = $dataItem$$11_options$$60$$.styleDefaults.borderColor, this.$_borderWidth$ = $dataItem$$11_options$$60$$.styleDefaults.borderWidth, this.$_customLabel$ = D.$JSCompiler_alias_NULL$$, this.$_seriesLabel$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), this.$_action$ = D.$JSCompiler_alias_NULL$$, 
  this.$_drillable$ = D.$JSCompiler_alias_FALSE$$, this.$_showPopupBehaviors$ = D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$_chart$))
};
D.$DvtPieSlice$$.prototype.$render$ = function $$DvtPieSlice$$$$$render$$($displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$) {
  var $i$$183_topSurface$$inline_2400$$ = this.$_topSurface$, $leftSurface$$inline_2401_len$$3$$ = this.$_leftSurface$, $rightSurface$$inline_2402_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_2403_shapeCount$$ = this.$_crustSurface$, $angleStart$$inline_2404_j$$32$$ = this.$_angleStart$, $angleExtent$$inline_2405$$ = this.$_angleExtent$, $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$ = [];
  $leftSurface$$inline_2401_len$$3$$ && ($rightSurface$$inline_2402_shapeArray$$ && $crustSurface$$inline_2403_shapeCount$$) && (270 >= $angleStart$$inline_2404_j$$32$$ && 270 < $angleStart$$inline_2404_j$$32$$ + $angleExtent$$inline_2405$$ ? ($feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($leftSurface$$inline_2401_len$$3$$), $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($rightSurface$$inline_2402_shapeArray$$), $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($crustSurface$$inline_2403_shapeCount$$)) : 
  270 < $angleStart$$inline_2404_j$$32$$ || 90 >= $angleStart$$inline_2404_j$$32$$ + $angleExtent$$inline_2405$$ ? ($feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($leftSurface$$inline_2401_len$$3$$), $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($crustSurface$$inline_2403_shapeCount$$), $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($rightSurface$$inline_2402_shapeArray$$)) : ($feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($rightSurface$$inline_2402_shapeArray$$), 
  $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($crustSurface$$inline_2403_shapeCount$$), $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($leftSurface$$inline_2401_len$$3$$)));
  $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.push($i$$183_topSurface$$inline_2400$$);
  $leftSurface$$inline_2401_len$$3$$ = $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$.length;
  for($i$$183_topSurface$$inline_2400$$ = 0;$i$$183_topSurface$$inline_2400$$ < $leftSurface$$inline_2401_len$$3$$;$i$$183_topSurface$$inline_2400$$++) {
    $rightSurface$$inline_2402_shapeArray$$ = $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$[$i$$183_topSurface$$inline_2400$$];
    $crustSurface$$inline_2403_shapeCount$$ = $rightSurface$$inline_2402_shapeArray$$.length;
    for($angleStart$$inline_2404_j$$32$$ = 0;$angleStart$$inline_2404_j$$32$$ < $crustSurface$$inline_2403_shapeCount$$;$angleStart$$inline_2404_j$$32$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($rightSurface$$inline_2402_shapeArray$$[$angleStart$$inline_2404_j$$32$$]), $rightSurface$$inline_2402_shapeArray$$[$angleStart$$inline_2404_j$$32$$].$render$ && $rightSurface$$inline_2402_shapeArray$$[$angleStart$$inline_2404_j$$32$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), D.$DvtPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), $displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerStart$, 
  this.$_outsideFeelerMid$), $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_2410_sortedSurfaces$$inline_2406$$));
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this);
  if(this.$_action$ || this.$_drillable$) {
    $displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$ = this.$getDisplayables$();
    for($i$$183_topSurface$$inline_2400$$ = 0;$i$$183_topSurface$$inline_2400$$ < $displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$.length;$i$$183_topSurface$$inline_2400$$++) {
      $displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$[$i$$183_topSurface$$inline_2400$$].setCursor("pointer")
    }
  }
  if($displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this)) {
    $displayable$$9_duringDisplayAnim_feelerRad$$inline_2409_sliceDisplayables$$.$setAriaRole$("img"), this.$_updateAriaLabel$()
  }
};
D.$JSCompiler_StaticMethods__feelerFromPts$$ = function $$JSCompiler_StaticMethods__feelerFromPts$$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler_pt1$$, $color$$11_pt2_stroke$$17$$) {
  $feeler_pt1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getCtx$(), $feeler_pt1$$.x, $feeler_pt1$$.y, $color$$11_pt2_stroke$$17$$.x, $color$$11_pt2_stroke$$17$$.y);
  $color$$11_pt2_stroke$$17$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$11_pt2_stroke$$17$$ = new D.$DvtSolidStroke$$($color$$11_pt2_stroke$$17$$);
  $feeler_pt1$$.$setStroke$($color$$11_pt2_stroke$$17$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler_pt1$$);
  return $feeler_pt1$$
};
D.$JSCompiler_StaticMethods__explodeSlice$$ = function $$JSCompiler_StaticMethods__explodeSlice$$$($JSCompiler_StaticMethods__explodeSlice$self$$) {
  if(0 != $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$) {
    var $offsets_oldStartX_radian$$ = (360 - ($JSCompiler_StaticMethods__explodeSlice$self$$.$_angleStart$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_angleExtent$ / 2)) * D.$DvtMath$$.$RADS_PER_DEGREE$, $oldStartY_tilt$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) ? 0.59 : 1, $explodeOffset_newStartX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$ * $JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$.$_radiusX$ * 
    (0.5 / 0.45 - 1);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.cos($offsets_oldStartX_radian$$) * $explodeOffset_newStartX$$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.sin($offsets_oldStartX_radian$$) * $oldStartY_tilt$$ * $explodeOffset_newStartX$$;
    (0,D.$DvtAgent$isPlatformWebkit$$)() && ($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$))
  }else {
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = 0, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = 0
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$ && ($offsets_oldStartX_radian$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) && $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$[0].$getSelectionOffset$ ? $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$[0].$getSelectionOffset$() : [], (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$, $offsets_oldStartX_radian$$[0] ? 
  $offsets_oldStartX_radian$$[0] + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ : $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $offsets_oldStartX_radian$$[1] ? $offsets_oldStartX_radian$$[1] + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ : $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$));
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  if($JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$) {
    var $offsets_oldStartX_radian$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.x, $oldStartY_tilt$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.y, $explodeOffset_newStartX$$ = $offsets_oldStartX_radian$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $newStartY$$ = $oldStartY_tilt$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX1$($explodeOffset_newStartX$$);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY1$($newStartY$$);
    var $oldMidX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.x, $oldMidY$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.y;
    0 < $oldMidX$$ - $offsets_oldStartX_radian$$ != 0 < $oldMidX$$ - $explodeOffset_newStartX$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($explodeOffset_newStartX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($explodeOffset_newStartX$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($oldMidX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($oldMidX$$));
    0 < $oldMidY$$ - $oldStartY_tilt$$ != 0 < $oldMidY$$ - $newStartY$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($newStartY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($newStartY$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($oldMidY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($oldMidY$$))
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$ && !$JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$)
};
D.$DvtPieSlice$_translateShapes$$ = function $$DvtPieSlice$_translateShapes$$$($shapes$$2$$, $tx$$, $ty$$) {
  if($shapes$$2$$) {
    for(var $len$$4$$ = $shapes$$2$$.length, $i$$184$$ = 0;$i$$184$$ < $len$$4$$;$i$$184$$++) {
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shapes$$2$$[$i$$184$$], $tx$$, $ty$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getCenter$ = function $$JSCompiler_prototypeAlias$$$$getCenter$$() {
  return new D.$DvtPoint$$(this.$_centerX$, this.$_centerY$)
};
D.$JSCompiler_prototypeAlias$$.getDepth = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$setAngleExtent$ = (0,D.$JSCompiler_set$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$getAngleStart$ = (0,D.$JSCompiler_get$$)("$_angleStart$");
D.$JSCompiler_prototypeAlias$$.$setAngleStart$ = (0,D.$JSCompiler_set$$)("$_angleStart$");
D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$ = function $$JSCompiler_StaticMethods_setNoOutsideFeeler$$$($JSCompiler_StaticMethods_setNoOutsideFeeler$self$$) {
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerStart$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerMid$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerEnd$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getLabelAndFeeler$$ = function $$JSCompiler_StaticMethods_getLabelAndFeeler$$$($JSCompiler_StaticMethods_getLabelAndFeeler$self$$) {
  var $ar$$5$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$5$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$5$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$5$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$5$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getValue = (0,D.$JSCompiler_get$$)("$_value$");
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$83$$, $y$$61$$) {
  for(var $ir$$1$$ = this.$_pieChart$.$getInnerRadius$(), $angle$$8_c$$4_containsAngle$$ = this.$_pieChart$.$getCenter$(), $cos_distance$$1$$ = ($x$$83$$ - $angle$$8_c$$4_containsAngle$$.x) / this.$_radiusX$, $sin$$ = ($y$$61$$ - $angle$$8_c$$4_containsAngle$$.y) / this.$_radiusY$, $angle$$8_c$$4_containsAngle$$ = -window.Math.atan2($sin$$, $cos_distance$$1$$) * (180 / window.Math.PI);$angle$$8_c$$4_containsAngle$$ < this.$_angleStart$;) {
    $angle$$8_c$$4_containsAngle$$ += 360
  }
  for(;360 <= $angle$$8_c$$4_containsAngle$$ - this.$_angleStart$;) {
    $angle$$8_c$$4_containsAngle$$ -= 360
  }
  $cos_distance$$1$$ = window.Math.pow($cos_distance$$1$$, 2) + window.Math.pow($sin$$, 2);
  $angle$$8_c$$4_containsAngle$$ = $angle$$8_c$$4_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return window.Math.sqrt($cos_distance$$1$$) > $ir$$1$$ / this.$_radiusX$ && 1 >= $cos_distance$$1$$ && $angle$$8_c$$4_containsAngle$$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$5$$ = D.$DvtColorUtils$$.$getRed$(this.$_fillColor$), $g$$4$$ = D.$DvtColorUtils$$.$getGreen$(this.$_fillColor$), $b$$2$$ = D.$DvtColorUtils$$.$getBlue$(this.$_fillColor$), $a$$23$$ = D.$DvtColorUtils$$.$getAlpha$(this.$_fillColor$);
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$, this.$_centerX$, this.$_centerY$, this.$_depth$, $r$$5$$, $g$$4$$, $b$$2$$, $a$$23$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$23$$) {
  this.$_value$ = $params$$23$$[0];
  this.$_radiusX$ = $params$$23$$[1];
  this.$_radiusY$ = $params$$23$$[2];
  this.$_explode$ = $params$$23$$[3];
  this.$_centerX$ = $params$$23$$[4];
  this.$_centerY$ = $params$$23$$[5];
  this.$_depth$ = $params$$23$$[6];
  this.$_fillColor$ = D.$DvtColorUtils$$.$makeRGBA$(window.Math.round($params$$23$$[7]), window.Math.round($params$$23$$[8]), window.Math.round($params$$23$$[9]), window.Math.round($params$$23$$[10]))
};
D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$ = function $$JSCompiler_StaticMethods_getDeletedAnimationParams$$$($JSCompiler_StaticMethods_getDeletedAnimationParams$self$$) {
  var $params$$24$$ = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$GetAnimationParams$();
  $params$$24$$[0] = 0;
  $params$$24$$[1] = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$getInnerRadius$();
  $params$$24$$[2] = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$getInnerRadius$();
  $params$$24$$[3] = 0;
  return $params$$24$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$33$$, $oldSlice$$) {
  var $startState$$5$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$12$$ = this.$GetAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$5$$, $endState$$12$$)) {
    var $anim$$2$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$2$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$12$$);
    $handler$$33$$.add($anim$$2$$, 0);
    this.$SetAnimationParams$($startState$$5$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$34$$) {
  var $anim$$3$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$3$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$34$$.add($anim$$3$$, 0);
  this.$SetAnimationParams$((0,D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$35$$, $container$$66$$) {
  var $anim$$4_newSlices$$ = $container$$66$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$185_prevIndex$$2$$ = D.$DvtArrayUtils$$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$185_prevIndex$$2$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$185_prevIndex$$2$$].getId();
    for($i$$185_prevIndex$$2$$ = 0;$i$$185_prevIndex$$2$$ < $anim$$4_newSlices$$.length;$i$$185_prevIndex$$2$$++) {
      if($anim$$4_newSlices$$[$i$$185_prevIndex$$2$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$4_newSlices$$.splice($i$$185_prevIndex$$2$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$4_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$66$$;
  $anim$$4_newSlices$$ = new D.$DvtCustomAnimation$$($container$$66$$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$4_newSlices$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, (0,D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$)(this));
  $anim$$4_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$35$$.add($anim$$4_newSlices$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$3$$ = this.$_pieChart$.$_slices$, $index$$139$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$3$$, this);
  0 <= $index$$139$$ && $slices$$3$$.splice($index$$139$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$8$$ = [];
  this.$_topSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$8$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$8$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$8$$.push(this.$_feelerHoriz$);
  return $ret$$8$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $shortDesc$$2$$;
  $shortDesc$$2$$ = this.$_seriesIndex$ == D.$JSCompiler_alias_NULL$$ ? D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, D.$JSCompiler_alias_FALSE$$) : D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, D.$JSCompiler_alias_FALSE$$);
  var $percentageLabel_states$$2$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_PERCENTAGE", D.$JSCompiler_alias_NULL$$), $percentage$$1$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$(this, "percent");
  $shortDesc$$2$$ += "; " + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$percentageLabel_states$$2$$, $percentage$$1$$]);
  $percentageLabel_states$$2$$ = [];
  this.$isSelectable$() && $percentageLabel_states$$2$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  D.$DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$) && $percentageLabel_states$$2$$.push((0,D.$DvtBundle$getTranslation$$)(this.$_pieChart$.$getOptions$(), "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($shortDesc$$2$$, $percentageLabel_states$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  var $displayable$$10$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this);
  $displayable$$10$$ && !(0,D.$DvtAgent$deferAriaCreation$$)() && $displayable$$10$$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_StaticMethods_getTopDisplayable$$ = function $$JSCompiler_StaticMethods_getTopDisplayable$$$($JSCompiler_StaticMethods_getTopDisplayable$self$$) {
  return $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$ && 0 < $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$.length ? $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_chart$.$isSelectionSupported$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$1$$, $isInitial$$) {
  (this.$_selected$ = $bSelected$$1$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  if(D.$DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
    for(var $explode_shapeArr$$ = this.$getDisplayables$(), $anim$$5_i$$186$$ = 0;$anim$$5_i$$186$$ < $explode_shapeArr$$.length;$anim$$5_i$$186$$++) {
      $explode_shapeArr$$[$anim$$5_i$$186$$] instanceof D.$DvtSelectableWedge$$ && $explode_shapeArr$$[$anim$$5_i$$186$$].$setSelected$($bSelected$$1$$)
    }
  }
  D.$DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($explode_shapeArr$$ = $bSelected$$1$$ ? 1 : 0, !$isInitial$$ && "none" != D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? ($anim$$5_i$$186$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$() / 2), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$5_i$$186$$.$_animator$, "typeNumber", this, this.$getExplode$, this.$setExplode$, $explode_shapeArr$$), $anim$$5_i$$186$$.play()) : 
  this.$setExplode$($explode_shapeArr$$));
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pieChart$.$bringToFrontOfSelection$(this);
  for(var $shapeArr$$1$$ = this.$getDisplayables$(), $i$$187$$ = 0;$i$$187$$ < $shapeArr$$1$$.length;$i$$187$$++) {
    $shapeArr$$1$$[$i$$187$$] instanceof D.$DvtSelectableWedge$$ && $shapeArr$$1$$[$i$$187$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  for(var $shapeArr$$2$$ = this.$getDisplayables$(), $i$$188$$ = 0;$i$$188$$ < $shapeArr$$2$$.length;$i$$188$$++) {
    $shapeArr$$2$$[$i$$188$$] instanceof D.$DvtSelectableWedge$$ && $shapeArr$$2$$[$i$$188$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$58$$) {
  return $target$$58$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_categories$ && 0 < this.$_categories$.length ? this.$_categories$ : [this.getId().$getSeries$()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$140$$) {
  if($event$$140$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $event$$140$$.keyCode && $event$$140$$.ctrlKey) {
    return this
  }
  var $slices$$4$$ = this.$_pieChart$.$_slices$, $idx$$4$$ = $slices$$4$$.indexOf(this), $next$$1$$ = D.$JSCompiler_alias_NULL$$;
  39 == $event$$140$$.keyCode ? $next$$1$$ = $idx$$4$$ < $slices$$4$$.length - 1 ? $slices$$4$$[$idx$$4$$ + 1] : $slices$$4$$[0] : 37 == $event$$140$$.keyCode && ($next$$1$$ = 0 == $idx$$4$$ ? $slices$$4$$[$slices$$4$$.length - 1] : $slices$$4$$[$idx$$4$$ - 1]);
  return $next$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$5$$) {
  var $displayables$$4$$ = this.$getDisplayables$();
  return $displayables$$4$$[0] ? $displayables$$4$$[0].$getDimensions$($targetCoordinateSpace$$5$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  var $displayables$$5$$ = this.$getDisplayables$();
  return $displayables$$5$$[0] ? $displayables$$5$$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getExplode$ = (0,D.$JSCompiler_get$$)("$_explode$");
D.$JSCompiler_prototypeAlias$$.$setExplode$ = function $$JSCompiler_prototypeAlias$$$$setExplode$$($explode$$1$$) {
  this.$_explode$ = $explode$$1$$;
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesLabel$ = (0,D.$JSCompiler_get$$)("$_seriesLabel$");
D.$JSCompiler_prototypeAlias$$.$getFillColor$ = (0,D.$JSCompiler_get$$)("$_fillColor$");
D.$JSCompiler_prototypeAlias$$.$getFillPattern$ = (0,D.$JSCompiler_get$$)("$_fillPattern$");
D.$JSCompiler_prototypeAlias$$.$getStrokeColor$ = (0,D.$JSCompiler_get$$)("$_strokeColor$");
D.$JSCompiler_prototypeAlias$$.$getBorderWidth$ = (0,D.$JSCompiler_get$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getInnerRadius$ = function $$JSCompiler_prototypeAlias$$$$getInnerRadius$$() {
  return this.$_pieChart$.$getInnerRadius$()
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$() {
  return this.$_seriesIndex$ == D.$JSCompiler_alias_NULL$$ ? D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, (0,D.$DvtChartDefaults$isPostAltaSkin$$)(this.$_chart$)) : D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, (0,D.$DvtChartDefaults$isPostAltaSkin$$)(this.$_chart$))
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtChart$$ = function $$DvtChart$$$($context$$26$$, $callback$$38$$, $callbackObj$$3$$) {
  this.Init($context$$26$$, $callback$$38$$, $callbackObj$$3$$)
};
(0,D.$goog$exportPath_$$)("DvtChart", D.$DvtChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChart$$, D.$DvtBaseComponent$$, "DvtChart");
D.$DvtChart$newInstance$$ = function $$DvtChart$newInstance$$$($context$$27$$, $callback$$39$$, $callbackObj$$4$$) {
  return new D.$DvtChart$$($context$$27$$, $callback$$39$$, $callbackObj$$4$$)
};
D.$DvtChart$$.newInstance = D.$DvtChart$newInstance$$;
D.$DvtChart$$.getDefaults = function $$DvtChart$$$getDefaults$($skin$$1$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtChartDefaults$$, $skin$$1$$)
};
D.$DvtChart$$.prototype.Init = function $$DvtChart$$$$Init$($context$$28$$, $callback$$40$$, $callbackObj$$5$$) {
  D.$DvtChart$$.$superclass$.Init.call(this, $context$$28$$, $callback$$40$$, $callbackObj$$5$$);
  this.$Defaults$ = new D.$DvtChartDefaults$$;
  this.$EventManager$ = new D.$DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$Peers$ = [];
  this.$SeriesStyleArray$ = [];
  this.$Cache$ = {};
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
  this.$_dataLabels$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$GetComponentDescription$ = function $$DvtChart$$$$$GetComponentDescription$$() {
  var $options$$24$$ = this.$getOptions$(), $compName$$ = (0,D.$DvtBundle$getTranslation$$)($options$$24$$, "componentName", "DvtUtilBundle", "CHART"), $compDesc$$ = "", $delimiter$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER");
  $options$$24$$.title.text && ($compDesc$$ += this.$Options$.title.text, $options$$24$$.subtitle.text && ($compDesc$$ += $delimiter$$ + this.$Options$.subtitle.text));
  $options$$24$$.footnote.text && ($compDesc$$ = 0 == $compDesc$$.length ? this.$Options$.footnote.text : $compDesc$$.concat($delimiter$$, this.$Options$.footnote.text));
  return 0 < $compDesc$$.length ? (0,D.$DvtBundle$getTranslation$$)($options$$24$$, "labelAndValue", "DvtUtilBundle", "COLON_SEP_LIST", [$compName$$, $compDesc$$]) : $compName$$
};
D.$DvtChart$$.prototype.$SetOptions$ = function $$DvtChart$$$$$SetOptions$$($options$$25_popupBehaviors_selectionMode$$5$$) {
  $options$$25_popupBehaviors_selectionMode$$5$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$25_popupBehaviors_selectionMode$$5$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), D.$DvtChartDataUtils$$.$processDataObject$(this), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$25_popupBehaviors_selectionMode$$5$$ = this.$Options$.selectionMode;
  this.$_selectionHandler$ = "single" == $options$$25_popupBehaviors_selectionMode$$5$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$25_popupBehaviors_selectionMode$$5$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$25_popupBehaviors_selectionMode$$5$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$ in $options$$25_popupBehaviors_selectionMode$$5$$) {
      for(var $popupBehaviorArray$$ = $options$$25_popupBehaviors_selectionMode$$5$$[$stampId$$], $i$$124$$ = 0;$i$$124$$ < $popupBehaviorArray$$.length;$i$$124$$++) {
        this.$_popupBehaviors$[$stampId$$] || (this.$_popupBehaviors$[$stampId$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$124$$];
        this.$_popupBehaviors$[$stampId$$].push(new D.$DvtShowPopupBehavior$$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
D.$DvtChart$$.prototype.$render$ = function $$DvtChart$$$$$render$$($options$$26_paSpace$$, $container$$16_width$$33$$, $animationDuration$$1_height$$37$$) {
  var $context$$29$$ = this.$getCtx$(), $animationOnDataChange$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this), $oldChart$$ = this.$Options$ && "none" != $animationOnDataChange$$ ? new D.$DvtDCChart$$(this) : D.$JSCompiler_alias_NULL$$;
  this.$__cleanUp$();
  this.$SetOptions$($options$$26_paSpace$$);
  !(0,window.isNaN)($container$$16_width$$33$$) && !(0,window.isNaN)($animationDuration$$1_height$$37$$) && (this.$Width$ = $container$$16_width$$33$$, this.$Height$ = $animationDuration$$1_height$$37$$);
  $container$$16_width$$33$$ = new D.$DvtContainer$$($context$$29$$);
  this.$addChild$($container$$16_width$$33$$);
  D.$DvtChartRenderer$$.$render$(this, $container$$16_width$$33$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  !D.$DvtChartTypeUtils$$.$isOverview$(this) && !D.$DvtChartTypeUtils$$.$isSpark$(this) && (this.$legend$ && this.$legend$.$isNavigable$() ? (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)($context$$29$$, [this, this.$legend$]) : (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)($context$$29$$, [this]));
  D.$DvtChartTypeUtils$$.$isSpark$(this) && this.$EventManager$.$removeListeners$(this);
  this.$_animation$ && this.$_animation$.stop();
  var $animationOnDisplay$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration$$1_height$$37$$ = D.$DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$3$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange$$ && $options$$26_paSpace$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$29$$, $animationOnDataChange$$, this.$_container$, $container$$16_width$$33$$, $bounds$$3$$, $animationDuration$$1_height$$37$$)) ? $bBlackBoxUpdate$$ = D.$JSCompiler_alias_TRUE$$ : "auto" == $animationOnDataChange$$ && this.$getPlotArea$() && ($options$$26_paSpace$$ = this.$_plotAreaSpace$, this.$_delContainer$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$(this, 
  this.$_container$, new D.$DvtRectangle$$(0, 0, $options$$26_paSpace$$.$w$, $options$$26_paSpace$$.$h$)), this.$_animation$ = D.$DvtAnimOnDC$$.$createAnimation$($oldChart$$, this, $animationOnDataChange$$, $animationDuration$$1_height$$37$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().$addChild$(this.$_delContainer$))) : "none" != $animationOnDisplay$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$29$$, $animationOnDisplay$$, 
  $container$$16_width$$33$$, $bounds$$3$$, $animationDuration$$1_height$$37$$), !this.$_animation$ && "auto" == $animationOnDisplay$$ && (this.$_animation$ = D.$DvtAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$, $animationDuration$$1_height$$37$$)));
  this.$_animation$ && (this.$_animation$.play(), (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, this.$_onAnimationEnd$, this));
  $bBlackBoxUpdate$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = D.$JSCompiler_alias_NULL$$);
  this.$_container$ = $container$$16_width$$33$$;
  this.$_dataCursor$ = D.$DvtChartRenderer$$.$renderDataCursor$(this);
  this.$UpdateAriaAttributes$()
};
D.$DvtChart$$.prototype.render = D.$DvtChart$$.prototype.$render$;
D.$DvtChart$$.prototype.$destroy$ = function $$DvtChart$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtChart$$.$superclass$.$destroy$.call(this)
};
D.$DvtChart$$.prototype.destroy = D.$DvtChart$$.prototype.$destroy$;
D.$DvtChart$$.prototype.$__cleanUp$ = function $$DvtChart$$$$$__cleanUp$$() {
  this.$_dataCursor$ && (this.removeChild(this.$_dataCursor$), this.$_dataCursor$ = D.$JSCompiler_alias_NULL$$);
  this.$EventManager$ && (0,D.$JSCompiler_StaticMethods_hideHoverFeedback$$)(this.$EventManager$);
  this.$Peers$ = [];
  this.$yScrollbar$ = this.$xScrollbar$ = D.$JSCompiler_alias_NULL$$;
  this.$dragButtons$ && (this.removeChild(this.$dragButtons$), this.$dragButtons$.$destroy$(), this.$dragButtons$ = D.$JSCompiler_alias_NULL$$, this.$EventManager$.$panButton$ = D.$JSCompiler_alias_NULL$$, this.$EventManager$.$zoomButton$ = D.$JSCompiler_alias_NULL$$, this.$EventManager$.$selectButton$ = D.$JSCompiler_alias_NULL$$);
  this.$_dataLabels$ = this.$_areaContainer$ = this.$_plotArea$ = D.$JSCompiler_alias_NULL$$;
  this.$Cache$ = {}
};
D.$DvtChart$$.prototype.$_onAnimationEnd$ = function $$DvtChart$$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().removeChild(this.$_delContainer$);
  this.$_animation$ = this.$_delContainer$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$CreateKeyboardHandler$ = function $$DvtChart$$$$$CreateKeyboardHandler$$($manager$$) {
  return new D.$DvtChartKeyboardHandler$$($manager$$, this)
};
D.$DvtChart$$.prototype.$getAutomation$ = function $$DvtChart$$$$$getAutomation$$() {
  return new D.$DvtChartAutomation$$(this)
};
D.$DvtChart$$.prototype.getAutomation = D.$DvtChart$$.prototype.$getAutomation$;
D.$DvtChart$$.prototype.$getValuesAt$ = function $$DvtChart$$$$$getValuesAt$$($x$$71$$, $y$$50$$) {
  var $paBounds_r$$1$$ = this.$_plotAreaSpace$, $relX_theta$$ = $x$$71$$ - $paBounds_r$$1$$.x, $relY$$ = $y$$50$$ - $paBounds_r$$1$$.y, $isPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$(this), $isHoriz$$2$$ = D.$DvtChartTypeUtils$$.$isHorizontal$(this);
  return $isPolar$$ ? ($relX_theta$$ -= $paBounds_r$$1$$.$w$ / 2, $relY$$ -= $paBounds_r$$1$$.$h$ / 2, $paBounds_r$$1$$ = window.Math.sqrt($relX_theta$$ * $relX_theta$$ + $relY$$ * $relY$$), $relX_theta$$ = window.Math.atan2($relX_theta$$, -$relY$$), 0 > $relX_theta$$ && ($relX_theta$$ += 2 * window.Math.PI), {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($relX_theta$$) : D.$JSCompiler_alias_NULL$$, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($paBounds_r$$1$$) : D.$JSCompiler_alias_NULL$$}) : {x:this.$xAxis$ ? 
  this.$xAxis$.$getValueAt$($isHoriz$$2$$ ? $relY$$ : $relX_theta$$) : D.$JSCompiler_alias_NULL$$, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($isHoriz$$2$$ ? $relX_theta$$ : $relY$$) : D.$JSCompiler_alias_NULL$$, y2:this.$y2Axis$ ? this.$y2Axis$.$getValueAt$($isHoriz$$2$$ ? $relX_theta$$ : $relY$$) : D.$JSCompiler_alias_NULL$$}
};
D.$DvtChart$$.prototype.getValuesAt = D.$DvtChart$$.prototype.$getValuesAt$;
D.$DvtChart$$.prototype.filter = function $$DvtChart$$$$filter$($category$$, $type$$61$$) {
  D.$DvtChartEventUtils$$.$setVisibility$(this, $category$$, "out" == $type$$61$$ ? "hidden" : "visible");
  var $chartFocus$$ = this.$EventManager$.$getFocus$(), $legendFocus$$, $isShowingFocusEffect$$;
  this.$legend$ && ($legendFocus$$ = this.$legend$.$getKeyboardFocus$()) && ($isShowingFocusEffect$$ = $legendFocus$$.$isShowingKeyboardFocusEffect$());
  this.$render$(this.$Options$);
  if($chartFocus$$) {
    for(var $navigables$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this), $i$$125$$ = 0;$i$$125$$ < $navigables$$.length;$i$$125$$++) {
      var $id$$22$$ = $navigables$$[$i$$125$$].getId();
      if($id$$22$$ instanceof D.$DvtChartDataItem$$ && $id$$22$$.$equals$($chartFocus$$.getId())) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $navigables$$[$i$$125$$]);
        break
      }
      (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($navigables$$))
    }
  }
  $legendFocus$$ && this.$legend$ && ((0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this, this.$legend$]), (0,D.$JSCompiler_StaticMethods_nextKeyboardFocus$$)(this.$getCtx$()), (0,D.$JSCompiler_StaticMethods_setKeyboardFocus$$)(this.$legend$, $legendFocus$$, $isShowingFocusEffect$$))
};
D.$DvtChart$$.prototype.filter = D.$DvtChart$$.prototype.filter;
D.$DvtChart$$.prototype.$highlight$ = function $$DvtChart$$$$$highlight$$($categories$$) {
  this.$getOptions$().highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$, this.$getObjects$(), "any" == this.$getOptions$().highlightMatch);
  this.$legend$ && this.$legend$.$highlight$($categories$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$);
  this.$overview$ && this.$overview$.$_chart$.$highlight$($categories$$)
};
D.$DvtChart$$.prototype.highlight = D.$DvtChart$$.prototype.$highlight$;
D.$DvtChart$$.prototype.select = function $$DvtChart$$$$select$($selected_selection$$11$$) {
  this.$getOptions$().selection = D.$DvtJSONUtils$$.$clone$($selected_selection$$11$$);
  $selected_selection$$11$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this);
  D.$DvtChartEventUtils$$.$setInitialSelection$(this, $selected_selection$$11$$);
  this.$pieChart$ && this.$pieChart$.$setInitialSelection$()
};
D.$DvtChart$$.prototype.select = D.$DvtChart$$.prototype.select;
D.$DvtChart$$.prototype.$positionDataCursor$ = function $$DvtChart$$$$$positionDataCursor$$($paBounds$$1_position$$7$$) {
  var $handler$$4$$ = this.$__getEventManager$().$_dataCursorHandler$;
  if($handler$$4$$) {
    if($paBounds$$1_position$$7$$) {
      var $paCoords_xCoord$$ = this.$xAxis$ && $paBounds$$1_position$$7$$.x != D.$JSCompiler_alias_NULL$$ ? this.$xAxis$.$getCoordAt$($paBounds$$1_position$$7$$.x) : D.$JSCompiler_alias_NULL$$, $yCoord$$ = D.$JSCompiler_alias_NULL$$;
      D.$DvtChartTypeUtils$$.$isBLAC$(this) ? this.$yAxis$ && $paBounds$$1_position$$7$$.y != D.$JSCompiler_alias_NULL$$ ? $yCoord$$ = this.$yAxis$.$getBoundedCoordAt$($paBounds$$1_position$$7$$.y) : this.$y2Axis$ && $paBounds$$1_position$$7$$.y2 != D.$JSCompiler_alias_NULL$$ && ($yCoord$$ = this.$yAxis$.$getBoundedCoordAt$($paBounds$$1_position$$7$$.y2)) : $yCoord$$ = this.$yAxis$ && $paBounds$$1_position$$7$$.y != D.$JSCompiler_alias_NULL$$ ? this.$yAxis$.$getCoordAt$($paBounds$$1_position$$7$$.y) : 
      D.$JSCompiler_alias_NULL$$;
      if($paCoords_xCoord$$ != D.$JSCompiler_alias_NULL$$ && $yCoord$$ != D.$JSCompiler_alias_NULL$$) {
        $paBounds$$1_position$$7$$ = this.$_plotAreaSpace$;
        $paCoords_xCoord$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$(this, new D.$DvtPoint$$($paCoords_xCoord$$, $yCoord$$), $paBounds$$1_position$$7$$);
        (0,D.$JSCompiler_StaticMethods_processMove$$)($handler$$4$$, new D.$DvtPoint$$($paBounds$$1_position$$7$$.x + $paCoords_xCoord$$.x, $paBounds$$1_position$$7$$.y + $paCoords_xCoord$$.y), D.$JSCompiler_alias_TRUE$$);
        return
      }
    }
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($handler$$4$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtChart$$.prototype.positionDataCursor = D.$DvtChart$$.prototype.$positionDataCursor$;
D.$DvtChart$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_StaticMethods_getFromCachedMap2D$$ = function $$JSCompiler_StaticMethods_getFromCachedMap2D$$$($JSCompiler_StaticMethods_getFromCachedMap2D$self$$, $mapKey$$2$$, $itemKeyA$$, $itemKeyB$$) {
  var $map$$2$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$self$$.$Cache$[$mapKey$$2$$];
  $map$$2$$ || ($map$$2$$ = new D.$DvtMap2D$$, $JSCompiler_StaticMethods_getFromCachedMap2D$self$$.$Cache$[$mapKey$$2$$] = $map$$2$$);
  return $map$$2$$.get($itemKeyA$$, $itemKeyB$$)
};
D.$JSCompiler_StaticMethods_putToCachedMap2D$$ = function $$JSCompiler_StaticMethods_putToCachedMap2D$$$($JSCompiler_StaticMethods_putToCachedMap2D$self$$, $mapKey$$3$$, $itemKeyA$$1$$, $itemKeyB$$1$$, $value$$86$$) {
  var $map$$3$$ = $JSCompiler_StaticMethods_putToCachedMap2D$self$$.$Cache$[$mapKey$$3$$];
  $map$$3$$ || ($map$$3$$ = new D.$DvtMap2D$$, $JSCompiler_StaticMethods_putToCachedMap2D$self$$.$Cache$[$mapKey$$3$$] = $map$$3$$);
  $map$$3$$.put($itemKeyA$$1$$, $itemKeyB$$1$$, $value$$86$$)
};
D.$DvtChart$$.prototype.$processEvent$ = function $$DvtChart$$$$$processEvent$$($event$$100$$, $source$$9$$) {
  var $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = $event$$100$$.$getType$();
  if($actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    this.filter($event$$100$$.$_category$, $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ ? "out" : "in")
  }else {
    if("categoryRollOver" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ || "categoryRollOut" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$) {
      this != $source$$9$$ && this.$highlight$($event$$100$$.categories), this.$legend$ && this.$legend$ != $source$$9$$ && this.$legend$.$processEvent$($event$$100$$, $source$$9$$)
    }else {
      if("selection" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$) {
        $event$$100$$ = this.$_processSelectionEvent$($event$$100$$)
      }else {
        if("dvtPanZoom" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$) {
          var $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$ = $event$$100$$, $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ = $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$getSubtype$(), $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = "dvtPanEndEvent" == $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ || "dvtZoomEvent" == $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ || 
          "dvtPinchEndEvent" == $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$, $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ = "dvtPanStartEvent" == $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ || "dvtPinchStartEvent" == $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$;
          (0,D.$DvtAgent$isTouchDevice$$)() && ($actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          D.$DvtChartEventUtils$$.$isLiveScroll$(this) ? ($bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dxMin$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dxMax$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dyMin$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dyMax$), 
          $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ || ((0,D.$JSCompiler_StaticMethods__setViewport$$)(this, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$, $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$), (0,D.$JSCompiler_StaticMethods__setScrollbarViewport$$)(this, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$))) : ($bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$ = 
          D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dxMinTotal$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dxMaxTotal$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dyMinTotal$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$dyMaxTotal$), (0,D.$JSCompiler_StaticMethods__setScrollbarViewport$$)(this, 
          $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$), $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ && (0,D.$JSCompiler_StaticMethods__setViewport$$)(this, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$, $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$));
          $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ && (D.$DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = D.$JSCompiler_alias_NULL$$));
          $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ ? "viewportChange" : "viewportChangeInput";
          $event$$100$$ = D.$DvtChartTypeUtils$$.$isBLAC$(this) ? new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$xMin$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$xMax$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$startGroup$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$endGroup$, 
          D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$xMin$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$yMin$, 
          $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.$yMax$)
        }else {
          if("dvtMarquee" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$) {
            $event$$100$$ = (0,D.$JSCompiler_StaticMethods__processMarqueeEvent$$)(this, $event$$100$$)
          }else {
            if("overview" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$) {
              $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = $event$$100$$.$getSubType$();
              if("dropCallback" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$) {
                return
              }
              $event$$100$$ = (0,D.$JSCompiler_StaticMethods__processScrollbarEvent$$)(this, $event$$100$$.$getParamValue$("newStartTime"), $event$$100$$.$getParamValue$("newEndTime"), "scrollTime" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ || "scrollEnd" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ || "rangeChange" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$, 
              $source$$9$$)
            }else {
              "dvtSimpleScrollbar" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ ? $event$$100$$ = (0,D.$JSCompiler_StaticMethods__processScrollbarEvent$$)(this, $event$$100$$.$_newMin$, $event$$100$$.$_newMax$, "dvtEndEvent" == $event$$100$$.$getSubtype$(), $source$$9$$) : "showPopup" == $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ ? ($actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = 
              $event$$100$$, "mouseHover" != $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$.triggerType && (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$ = D.$DvtChartEventUtils$$.$processIds$(this, (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$getSelectionHandler$())), $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = 
              new D.$DvtShowPopupEvent$$($actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$.$_showPopupBehavior$, $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$.$_launcherBounds$, $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$.$_launcherId$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$, 
              "clientRowKey", $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$)), $event$$100$$ = $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$) : $event$$100$$ instanceof D.$DvtComponentUIEvent$$ && ($event$$100$$ = (0,D.$JSCompiler_StaticMethods__processComponentUIEvent$$)(this, $event$$100$$, $source$$9$$))
            }
          }
        }
      }
    }
  }
  if($event$$100$$ instanceof D.$DvtChartSelectionEvent$$) {
    var $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$ = this.$getOptions$(), $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.selection, $newItems_removedSet$$ = D.$DvtChartDataUtils$$.$getCurrentSelection$(this);
    "selectionInput" != $event$$100$$.$getType$() && ($bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$.selection = $newItems_removedSet$$);
    var $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ = $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ ? $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$ : [], $newItems_removedSet$$ = $newItems_removedSet$$ ? $newItems_removedSet$$ : [], $newIndex$$2_oldIndex$$, $oldItemId_oldSet$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$.length;$newIndex$$2_oldIndex$$++) {
      $oldItemId_oldSet$$[$actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$[$newIndex$$2_oldIndex$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $newItems_removedSet$$.length;$newIndex$$2_oldIndex$$++) {
      $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$[$newItems_removedSet$$[$newIndex$$2_oldIndex$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $newItems_removedSet$$.length;$newIndex$$2_oldIndex$$++) {
      var $newItemId$$ = $newItems_removedSet$$[$newIndex$$2_oldIndex$$].id;
      $oldItemId_oldSet$$[$newItemId$$] || ($actionStart$$inline_1811_addedSet_subtype$$inline_1809$$[$newItemId$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $newItems_removedSet$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$.length;$newIndex$$2_oldIndex$$++) {
      $oldItemId_oldSet$$ = $actionDone$$inline_1810_event$$inline_1816_eventType$$inline_1813_oldItems_subtype_type$$62$$[$newIndex$$2_oldIndex$$].id, $bounds$$inline_1812_event$$inline_1808_newSet_options$$28_selection$$inline_1817$$[$oldItemId_oldSet$$] || ($newItems_removedSet$$[$oldItemId_oldSet$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $event$$100$$.addedSet = $actionStart$$inline_1811_addedSet_subtype$$inline_1809$$;
    $event$$100$$.removedSet = $newItems_removedSet$$
  }
  $event$$100$$ && this.$__dispatchEvent$($event$$100$$)
};
D.$DvtChart$$.prototype.$_processSelectionEvent$ = function $$DvtChart$$$$$_processSelectionEvent$$($event$$101_selection$$12$$) {
  $event$$101_selection$$12$$ = D.$DvtChartEventUtils$$.$processIds$(this, $event$$101_selection$$12$$.getSelection());
  (0,D.$JSCompiler_StaticMethods__updateOverviewSelection$$)(this);
  return new D.$DvtChartSelectionEvent$$($event$$101_selection$$12$$, "selection")
};
D.$JSCompiler_StaticMethods__processMarqueeEvent$$ = function $$JSCompiler_StaticMethods__processMarqueeEvent$$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$103$$) {
  var $subtype$$2$$ = $event$$103$$.$getSubtype$(), $bounds$$5_em_selectionEvent_selectionHandler$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$;
  D.$DvtChartEventUtils$$.$adjustBounds$($event$$103$$);
  if("select" == $bounds$$5_em_selectionEvent_selectionHandler$$.$_dragMode$) {
    $bounds$$5_em_selectionEvent_selectionHandler$$ = $bounds$$5_em_selectionEvent_selectionHandler$$.$getSelectionHandler$();
    if("dvtMarqueeStartEvent" == $subtype$$2$$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$103$$.ctrlKey ? (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$5_em_selectionEvent_selectionHandler$$) : []
    }else {
      var $selection$$13_targets$$ = D.$DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$103$$);
      (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$5_em_selectionEvent_selectionHandler$$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$));
      for(var $target$$inline_1822$$, $i$$inline_1823$$ = 0;$i$$inline_1823$$ < $selection$$13_targets$$.length;$i$$inline_1823$$++) {
        $target$$inline_1822$$ = $selection$$13_targets$$[$i$$inline_1823$$], (!$target$$inline_1822$$ || !$target$$inline_1822$$.$isUnrelatedToSelection$) && (0,D.$JSCompiler_StaticMethods__addToSelection$$)($bounds$$5_em_selectionEvent_selectionHandler$$, $target$$inline_1822$$, D.$JSCompiler_alias_TRUE$$)
      }
    }
    $selection$$13_targets$$ = D.$DvtChartEventUtils$$.$getSelectedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$103$$, $bounds$$5_em_selectionEvent_selectionHandler$$);
    $bounds$$5_em_selectionEvent_selectionHandler$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$103$$, D.$JSCompiler_alias_FALSE$$);
    $bounds$$5_em_selectionEvent_selectionHandler$$ = new D.$DvtChartSelectionEvent$$($selection$$13_targets$$, "dvtMarqueeEndEvent" == $subtype$$2$$ ? "selection" : "selectionInput", $bounds$$5_em_selectionEvent_selectionHandler$$.$xMin$, $bounds$$5_em_selectionEvent_selectionHandler$$.$xMax$, $bounds$$5_em_selectionEvent_selectionHandler$$.$startGroup$, $bounds$$5_em_selectionEvent_selectionHandler$$.$endGroup$, $bounds$$5_em_selectionEvent_selectionHandler$$.$yMin$, $bounds$$5_em_selectionEvent_selectionHandler$$.$yMax$, 
    $bounds$$5_em_selectionEvent_selectionHandler$$.$y2Min$, $bounds$$5_em_selectionEvent_selectionHandler$$.$y2Max$);
    "dvtMarqueeEndEvent" == $subtype$$2$$ && (0,D.$JSCompiler_StaticMethods__updateOverviewSelection$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return $bounds$$5_em_selectionEvent_selectionHandler$$
  }
  if("zoom" == $bounds$$5_em_selectionEvent_selectionHandler$$.$_dragMode$) {
    if("dvtMarqueeEndEvent" != $subtype$$2$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $bounds$$5_em_selectionEvent_selectionHandler$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$103$$, D.$JSCompiler_alias_TRUE$$);
    (0,D.$JSCompiler_StaticMethods__setViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$5_em_selectionEvent_selectionHandler$$, D.$JSCompiler_alias_TRUE$$);
    (0,D.$JSCompiler_StaticMethods__setScrollbarViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$5_em_selectionEvent_selectionHandler$$);
    D.$DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? new D.$DvtChartViewportChangeEvent$$("viewportChange", $bounds$$5_em_selectionEvent_selectionHandler$$.$xMin$, $bounds$$5_em_selectionEvent_selectionHandler$$.$xMax$, $bounds$$5_em_selectionEvent_selectionHandler$$.$startGroup$, $bounds$$5_em_selectionEvent_selectionHandler$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$("viewportChange", 
    $bounds$$5_em_selectionEvent_selectionHandler$$.$xMin$, $bounds$$5_em_selectionEvent_selectionHandler$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$5_em_selectionEvent_selectionHandler$$.$yMin$, $bounds$$5_em_selectionEvent_selectionHandler$$.$yMax$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processScrollbarEvent$$ = function $$JSCompiler_StaticMethods__processScrollbarEvent$$$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, $start$$24$$, $end$$10$$, $actionDone$$2_eventType$$7$$, $source$$10$$) {
  var $axis$$64$$ = $source$$10$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$ ? $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yAxis$ : $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$xAxis$;
  $start$$24$$ = $axis$$64$$.$linearToActual$($start$$24$$);
  $end$$10$$ = $axis$$64$$.$linearToActual$($end$$10$$);
  if(D.$DvtChartEventUtils$$.$isLiveScroll$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$) || $actionDone$$2_eventType$$7$$) {
    $source$$10$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$ ? (0,D.$JSCompiler_StaticMethods__setViewport$$)($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, {$yMin$:$start$$24$$, $yMax$:$end$$10$$}, $actionDone$$2_eventType$$7$$) : (0,D.$JSCompiler_StaticMethods__setViewport$$)($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, {$xMin$:$start$$24$$, $xMax$:$end$$10$$}, $actionDone$$2_eventType$$7$$)
  }
  $actionDone$$2_eventType$$7$$ = $actionDone$$2_eventType$$7$$ ? "viewportChange" : "viewportChangeInput";
  if($source$$10$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$) {
    return new D.$DvtChartViewportChangeEvent$$($actionDone$$2_eventType$$7$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $start$$24$$, $end$$10$$)
  }
  $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$xAxis$, $start$$24$$, $end$$10$$);
  return new D.$DvtChartViewportChangeEvent$$($actionDone$$2_eventType$$7$$, $start$$24$$, $end$$10$$, $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$startGroup$, $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__processComponentUIEvent$$ = function $$JSCompiler_StaticMethods__processComponentUIEvent$$$($JSCompiler_StaticMethods__processComponentUIEvent$self$$, $event$$105$$, $source$$11$$) {
  var $params$$7$$ = $event$$105$$.params, $chartObjType$$ = $params$$7$$.type;
  return $source$$11$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$legend$ ? ($chartObjType$$ == D.$DvtLegendConstants$$.$LEGEND_ITEM$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_ITEM$ : $chartObjType$$ == D.$DvtLegendConstants$$.$TITLE$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_TITLE$ : $chartObjType$$ == D.$DvtLegendConstants$$.$BACKGROUND$ && ($chartObjType$$ = D.$DvtChartConstants$$.$LEGEND$), new D.$DvtComponentUIEvent$$($event$$105$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, 
  D.$JSCompiler_alias_NULL$$, $params$$7$$.id))) : $source$$11$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$xAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$105$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$7$$.id))) : 
  $source$$11$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$yAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$105$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$7$$.id))) : $source$$11$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$y2Axis$ ? 
  ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$105$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$7$$.id))) : $event$$105$$
};
D.$JSCompiler_StaticMethods__updateOverviewSelection$$ = function $$JSCompiler_StaticMethods__updateOverviewSelection$$$($JSCompiler_StaticMethods__updateOverviewSelection$self$$) {
  if($JSCompiler_StaticMethods__updateOverviewSelection$self$$.$overview$) {
    var $ovChart$$ = $JSCompiler_StaticMethods__updateOverviewSelection$self$$.$overview$.$_chart$;
    $ovChart$$.$getOptions$().selection = D.$DvtChartDataUtils$$.$getCurrentSelection$($JSCompiler_StaticMethods__updateOverviewSelection$self$$);
    $ovChart$$.$render$()
  }
};
D.$JSCompiler_StaticMethods_changeOption$$ = function $$JSCompiler_StaticMethods_changeOption$$$($JSCompiler_StaticMethods_changeOption$self$$, $value$$87$$) {
  $JSCompiler_StaticMethods_changeOption$self$$.$getOptions$().dataCursorPosition = $value$$87$$;
  $JSCompiler_StaticMethods_changeOption$self$$.$__dispatchEvent$(new D.$DvtOptionChangeEvent$$("dataCursorPosition", $value$$87$$, D.$JSCompiler_alias_VOID$$))
};
D.$DvtChart$$.prototype.$registerObject$ = function $$DvtChart$$$$$registerObject$$($peer$$) {
  this.$Peers$.push($peer$$)
};
D.$DvtChart$$.prototype.$getObjects$ = (0,D.$JSCompiler_get$$)("$Peers$");
D.$JSCompiler_StaticMethods_getChartObjPeers$$ = function $$JSCompiler_StaticMethods_getChartObjPeers$$$($JSCompiler_StaticMethods_getChartObjPeers$self$$) {
  for(var $chartObjPeers$$ = [], $i$$126$$ = 0;$i$$126$$ < $JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$.length;$i$$126$$++) {
    $JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$[$i$$126$$] instanceof D.$DvtChartObjPeer$$ && $chartObjPeers$$.push($JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$[$i$$126$$])
  }
  return $chartObjPeers$$
};
D.$JSCompiler_StaticMethods_getObject$$ = function $$JSCompiler_StaticMethods_getObject$$$($JSCompiler_StaticMethods_getObject$self$$, $seriesIndex$$, $groupIndex$$2$$) {
  for(var $i$$128$$ = 0;$i$$128$$ < $JSCompiler_StaticMethods_getObject$self$$.$Peers$.length;$i$$128$$++) {
    if($JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$128$$].$getSeriesIndex$() == $seriesIndex$$ && $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$128$$].$getGroupIndex$() == $groupIndex$$2$$) {
      return $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$128$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getPlotArea$ = (0,D.$JSCompiler_get$$)("$_plotArea$");
D.$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
D.$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$getOptions$().skin
};
D.$JSCompiler_StaticMethods_getGapWidthRatio$$ = function $$JSCompiler_StaticMethods_getGapWidthRatio$$$($JSCompiler_StaticMethods_getGapWidthRatio$self$$) {
  var $options$$29$$ = $JSCompiler_StaticMethods_getGapWidthRatio$self$$.$getOptions$();
  return $options$$29$$.layout.gapWidthRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$29$$.layout.gapWidthRatio) ? $options$$29$$.layout.gapWidthRatio : window.Math.min($JSCompiler_StaticMethods_getGapWidthRatio$self$$.$Width$ / 400, 1)
};
D.$JSCompiler_StaticMethods_getGapHeightRatio$$ = function $$JSCompiler_StaticMethods_getGapHeightRatio$$$($JSCompiler_StaticMethods_getGapHeightRatio$self$$) {
  var $options$$30$$ = $JSCompiler_StaticMethods_getGapHeightRatio$self$$.$getOptions$();
  return $options$$30$$.layout.gapHeightRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$30$$.layout.gapHeightRatio) ? $options$$30$$.layout.gapHeightRatio : window.Math.min($JSCompiler_StaticMethods_getGapHeightRatio$self$$.$Height$ / 300, 1)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$1$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$ = $detObj$$.getParent();
  if($par$$) {
    var $parentChildCount$$ = $par$$.$getNumChildren$();
    1 < $parentChildCount$$ - this.$_numFrontObjs$ && ($par$$.removeChild($detObj$$), $par$$.$addChildAt$($detObj$$, $parentChildCount$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$IsShowingHoverEffect$) && this.$_numSelectedObjsInFront$++
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$1$$ = $detObj$$1$$.getParent();
  if($par$$1$$) {
    var $newIndex$$4$$ = $par$$1$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$4$$ && ($par$$1$$.removeChild($detObj$$1$$), $par$$1$$.$addChildAt$($detObj$$1$$, $newIndex$$4$$))
  }
};
D.$JSCompiler_StaticMethods__setViewport$$ = function $$JSCompiler_StaticMethods__setViewport$$$($JSCompiler_StaticMethods__setViewport$self$$, $bounds$$6$$, $actionDone$$3$$) {
  $bounds$$6$$.$xMax$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportMax = $bounds$$6$$.$xMax$);
  $bounds$$6$$.$xMin$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportMin = $bounds$$6$$.$xMin$);
  D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__setViewport$self$$) ? ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportStartGroup = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportEndGroup = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__setViewport$self$$.$Options$._initialZoomed = D.$JSCompiler_alias_FALSE$$) : ($bounds$$6$$.$yMax$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.yAxis.viewportMax = 
  $bounds$$6$$.$yMax$), $bounds$$6$$.$yMin$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.yAxis.viewportMin = $bounds$$6$$.$yMin$));
  $JSCompiler_StaticMethods__setViewport$self$$.$Options$._duringAnimation = !$actionDone$$3$$;
  D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$($JSCompiler_StaticMethods__setViewport$self$$, $JSCompiler_StaticMethods__setViewport$self$$.$_container$)
};
D.$JSCompiler_StaticMethods__setScrollbarViewport$$ = function $$JSCompiler_StaticMethods__setScrollbarViewport$$$($JSCompiler_StaticMethods__setScrollbarViewport$self$$, $bounds$$7$$) {
  if($JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$ && $bounds$$7$$.$xMin$ != D.$JSCompiler_alias_NULL$$ && $bounds$$7$$.$xMax$ != D.$JSCompiler_alias_NULL$$) {
    var $xMin_yMin$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$.$actualToLinear$($bounds$$7$$.$xMin$), $xMax_yMax$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$.$actualToLinear$($bounds$$7$$.$xMax$);
    $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$overview$.$setViewportRange$($xMin_yMin$$, $xMax_yMax$$);
    $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($xMin_yMin$$, $xMax_yMax$$)
  }
  $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$ && ($bounds$$7$$.$yMin$ != D.$JSCompiler_alias_NULL$$ && $bounds$$7$$.$yMax$ != D.$JSCompiler_alias_NULL$$) && ($xMin_yMin$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$.$actualToLinear$($bounds$$7$$.$yMin$), $xMax_yMax$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$.$actualToLinear$($bounds$$7$$.$yMax$), $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($xMin_yMin$$, 
  $xMax_yMax$$))
};
D.$DvtChart$$.prototype.$getRadius$ = (0,D.$JSCompiler_get$$)("$_radius$");
D.$JSCompiler_StaticMethods_getDataLabels$$ = function $$JSCompiler_StaticMethods_getDataLabels$$$($JSCompiler_StaticMethods_getDataLabels$self$$) {
  $JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$ || ($JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$ = []);
  return $JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$
};
D.$DvtChart$$.prototype.$processActiveDataChanges$ = function $$DvtChart$$$$$processActiveDataChanges$$($changes$$) {
  for(var $optionsOld$$ = D.$DvtJSONUtils$$.$clone$(this.$Options$), $optionsNew$$ = this.$Options$, $changeIndex$$ = 0;$changeIndex$$ < $changes$$.length;$changeIndex$$++) {
    var $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$ = $changes$$[$changeIndex$$], $data$$inline_9842_data$$inline_9849_type$$inline_2108$$ = $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.type;
    if("u" == $data$$inline_9842_data$$inline_9849_type$$inline_2108$$) {
      for(var $data$$inline_9842_data$$inline_9849_type$$inline_2108$$ = $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.data, $i$$inline_9843_i$$inline_9850$$ = 0;$i$$inline_9843_i$$inline_9850$$ < $data$$inline_9842_data$$inline_9849_type$$inline_2108$$.length;$i$$inline_9843_i$$inline_9850$$++) {
        var $dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)(this, $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.id, $data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$]._id);
        if($dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$) {
          for(var $key$$inline_9845$$ in $data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$]) {
            "_id" != $key$$inline_9845$$ && ($dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$.item[$key$$inline_9845$$] = $data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$][$key$$inline_9845$$])
          }
        }
      }
    }else {
      if("ia" == $data$$inline_9842_data$$inline_9849_type$$inline_2108$$ || "ib" == $data$$inline_9842_data$$inline_9849_type$$inline_2108$$) {
        $data$$inline_9842_data$$inline_9849_type$$inline_2108$$ = $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.data;
        for($i$$inline_9843_i$$inline_9850$$ = 0;$i$$inline_9843_i$$inline_9850$$ < $data$$inline_9842_data$$inline_9849_type$$inline_2108$$.length;$i$$inline_9843_i$$inline_9850$$++) {
          this.$Cache$ = {};
          var $insertId$$inline_9851$$ = $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.insertId, $dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$ = $data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$].group, $insertedSeries$$inline_9853_seriesItems$$inline_9858$$ = $data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$].series, $seriesCount$$inline_9854$$ = D.$DvtChartDataUtils$$.$getSeriesCount$(this), 
          $groupCount$$inline_9855_seriesIndex$$inline_9861$$ = D.$DvtChartDataUtils$$.$getGroupCount$(this), $insertedSeriesIndex$$inline_9856$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$(this, $insertedSeries$$inline_9853_seriesItems$$inline_9858$$), $dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$ = D.$DvtChartDataUtils$$.$getGroupIndex$(this, $dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$);
          if(0 <= $insertedSeriesIndex$$inline_9856$$ && 0 <= $dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$) {
            $insertedSeries$$inline_9853_seriesItems$$inline_9858$$ = D.$DvtChartDataUtils$$.$getSeriesItem$(this, $insertedSeriesIndex$$inline_9856$$).items, $insertedSeries$$inline_9853_seriesItems$$inline_9858$$[$dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$] = {id:$entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.id}, (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$], $insertedSeries$$inline_9853_seriesItems$$inline_9858$$[$dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$])
          }else {
            if(0 <= $dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$) {
              $dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$ = (0,window.Array)($groupCount$$inline_9855_seriesIndex$$inline_9861$$), $dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$[$dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$] = {id:$entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.id}, (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$], 
              $dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$[$dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$]), this.$Options$.series.push({name:$insertedSeries$$inline_9853_seriesItems$$inline_9858$$, items:$dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$})
            }else {
              $dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$ = ($dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)(this, $insertId$$inline_9851$$)) ? "ia" == $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.type ? $dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$.$groupIndex$ + 1 : $dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$.$groupIndex$ : 0;
              0 > $insertedSeriesIndex$$inline_9856$$ && (this.$Options$.series.push({name:$insertedSeries$$inline_9853_seriesItems$$inline_9858$$, items:(0,window.Array)($groupCount$$inline_9855_seriesIndex$$inline_9861$$)}), $insertedSeriesIndex$$inline_9856$$ = $seriesCount$$inline_9854$$, $seriesCount$$inline_9854$$++);
              for($groupCount$$inline_9855_seriesIndex$$inline_9861$$ = 0;$groupCount$$inline_9855_seriesIndex$$inline_9861$$ < $seriesCount$$inline_9854$$;$groupCount$$inline_9855_seriesIndex$$inline_9861$$++) {
                $insertedSeries$$inline_9853_seriesItems$$inline_9858$$ = D.$DvtChartDataUtils$$.$getSeriesItem$(this, $groupCount$$inline_9855_seriesIndex$$inline_9861$$).items, $insertedSeries$$inline_9853_seriesItems$$inline_9858$$.splice($dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$, 0, {id:$entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$.id}), $groupCount$$inline_9855_seriesIndex$$inline_9861$$ == $insertedSeriesIndex$$inline_9856$$ && (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_9842_data$$inline_9849_type$$inline_2108$$[$i$$inline_9843_i$$inline_9850$$], 
                $insertedSeries$$inline_9853_seriesItems$$inline_9858$$[$dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$])
              }
              this.$Options$.groups.splice($dataItemInfo$$inline_9860_insertedGroupIndex$$inline_9857$$, 0, $dataItemInfo$$inline_9844_insertedGroup$$inline_9852_items$$inline_9859$$)
            }
          }
        }
      }else {
        "d" == $data$$inline_9842_data$$inline_9849_type$$inline_2108$$ && (0,D.$JSCompiler_StaticMethods__processActiveDataDelete$$)(this, $entry$$inline_2107_entry$$inline_9841_entry$$inline_9848$$)
      }
    }
  }
  this.$Options$ = $optionsOld$$;
  this.$render$($optionsNew$$)
};
D.$DvtChart$$.prototype.processActiveDataChanges = D.$DvtChart$$.prototype.$processActiveDataChanges$;
D.$JSCompiler_StaticMethods__processActiveDataDelete$$ = function $$JSCompiler_StaticMethods__processActiveDataDelete$$$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$3$$) {
  $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Cache$ = {};
  var $dataItemInfo$$2$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$3$$.id);
  if($dataItemInfo$$2$$) {
    for(var $dataItem$$3_key$$52$$ in $dataItemInfo$$2$$.item) {
      $dataItemInfo$$2$$.item[$dataItem$$3_key$$52$$] = D.$JSCompiler_alias_NULL$$
    }
    $dataItemInfo$$2$$.item._deleted = D.$JSCompiler_alias_TRUE$$;
    for(var $seriesCount$$3$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__processActiveDataDelete$self$$), $groupCount$$2$$ = D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__processActiveDataDelete$self$$), $bDeleteGroup$$ = D.$JSCompiler_alias_TRUE$$, $groupIndex$$9_seriesIndex$$14$$ = 0;$groupIndex$$9_seriesIndex$$14$$ < $seriesCount$$3$$;$groupIndex$$9_seriesIndex$$14$$++) {
      if(($dataItem$$3_key$$52$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $groupIndex$$9_seriesIndex$$14$$, $dataItemInfo$$2$$.$groupIndex$)) && !$dataItem$$3_key$$52$$._deleted) {
        $bDeleteGroup$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
    for(var $bDeleteSeries$$ = D.$JSCompiler_alias_TRUE$$, $groupIndex$$9_seriesIndex$$14$$ = 0;$groupIndex$$9_seriesIndex$$14$$ < $groupCount$$2$$;$groupIndex$$9_seriesIndex$$14$$++) {
      if(($dataItem$$3_key$$52$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $dataItemInfo$$2$$.$seriesIndex$, $groupIndex$$9_seriesIndex$$14$$)) && !$dataItem$$3_key$$52$$._deleted) {
        $bDeleteSeries$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
    if($bDeleteGroup$$) {
      for($groupIndex$$9_seriesIndex$$14$$ = 0;$groupIndex$$9_seriesIndex$$14$$ < $seriesCount$$3$$;$groupIndex$$9_seriesIndex$$14$$++) {
        D.$DvtChartDataUtils$$.$getSeriesItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $groupIndex$$9_seriesIndex$$14$$).$items$.splice($dataItemInfo$$2$$.$groupIndex$, 1)
      }
      $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Options$.groups.splice($dataItemInfo$$2$$.$groupIndex$, 1)
    }
    $bDeleteSeries$$ && $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Options$.series.splice($dataItemInfo$$2$$.$seriesIndex$, 1);
    (0,D.$JSCompiler_StaticMethods__processActiveDataDelete$$)($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$3$$)
  }
};
D.$DvtChart$_copyActiveDataProperties$$ = function $$DvtChart$_copyActiveDataProperties$$$($entry$$4$$, $item$$1$$) {
  for(var $key$$53$$ in $entry$$4$$) {
    $item$$1$$[$key$$53$$] = $entry$$4$$[$key$$53$$]
  }
};
D.$JSCompiler_StaticMethods__findDataItemById$$ = function $$JSCompiler_StaticMethods__findDataItemById$$$($JSCompiler_StaticMethods__findDataItemById$self$$, $id$$29$$, $stampId$$2$$) {
  if($id$$29$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $seriesCount$$4$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $groupCount$$3$$ = D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $seriesIndex$$15$$ = 0;$seriesIndex$$15$$ < $seriesCount$$4$$;$seriesIndex$$15$$++) {
    for(var $groupIndex$$10$$ = 0;$groupIndex$$10$$ < $groupCount$$3$$;$groupIndex$$10$$++) {
      var $dataItem$$4$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__findDataItemById$self$$, $seriesIndex$$15$$, $groupIndex$$10$$);
      if($dataItem$$4$$ != D.$JSCompiler_alias_NULL$$ && $dataItem$$4$$.id === $id$$29$$ && ($stampId$$2$$ == D.$JSCompiler_alias_NULL$$ || $stampId$$2$$ === $dataItem$$4$$._id)) {
        return{item:$dataItem$$4$$, $seriesIndex$:$seriesIndex$$15$$, $groupIndex$:$groupIndex$$10$$}
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartConstants$$ = {};
(0,D.$goog$exportPath_$$)("DvtChartConstants", D.$DvtChartConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartConstants$$, D.$DvtObj$$, "DvtChartConstants");
D.$DvtChartConstants$$.$BACKGROUND$ = "background";
D.$DvtChartConstants$$.BACKGROUND = D.$DvtChartConstants$$.$BACKGROUND$;
D.$DvtChartConstants$$.$DATA_ITEM$ = "dataItem";
D.$DvtChartConstants$$.DATA_ITEM = D.$DvtChartConstants$$.$DATA_ITEM$;
D.$DvtChartConstants$$.$DATA_ITEM_OTHER$ = "dataItemOther";
D.$DvtChartConstants$$.DATA_ITEM_OTHER = D.$DvtChartConstants$$.$DATA_ITEM_OTHER$;
D.$DvtChartConstants$$.$FOOTNOTE$ = "footnote";
D.$DvtChartConstants$$.FOOTNOTE = D.$DvtChartConstants$$.$FOOTNOTE$;
D.$DvtChartConstants$$.$LEGEND$ = "legend";
D.$DvtChartConstants$$.LEGEND = D.$DvtChartConstants$$.$LEGEND$;
D.$DvtChartConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtChartConstants$$.LEGEND_ITEM = D.$DvtChartConstants$$.$LEGEND_ITEM$;
D.$DvtChartConstants$$.$LEGEND_TITLE$ = "legendTitle";
D.$DvtChartConstants$$.LEGEND_TITLE = D.$DvtChartConstants$$.$LEGEND_TITLE$;
D.$DvtChartConstants$$.$PLOT_AREA$ = "plotArea";
D.$DvtChartConstants$$.PLOT_AREA = D.$DvtChartConstants$$.$PLOT_AREA$;
D.$DvtChartConstants$$.$SERIES$ = "series";
D.$DvtChartConstants$$.SERIES = D.$DvtChartConstants$$.$SERIES$;
D.$DvtChartConstants$$.$SUBTITLE$ = "subtitle";
D.$DvtChartConstants$$.SUBTITLE = D.$DvtChartConstants$$.$SUBTITLE$;
D.$DvtChartConstants$$.$TITLE$ = "title";
D.$DvtChartConstants$$.TITLE = D.$DvtChartConstants$$.$TITLE$;
D.$DvtChartConstants$$.$X_AXIS_LABEL$ = "xAxisLabel";
D.$DvtChartConstants$$.X_AXIS_LABEL = D.$DvtChartConstants$$.$X_AXIS_LABEL$;
D.$DvtChartConstants$$.$X_AXIS_TITLE$ = "xAxisTitle";
D.$DvtChartConstants$$.X_AXIS_TITLE = D.$DvtChartConstants$$.$X_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y_AXIS_LABEL$ = "yAxisLabel";
D.$DvtChartConstants$$.Y_AXIS_LABEL = D.$DvtChartConstants$$.$Y_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y_AXIS_TITLE$ = "yAxisTitle";
D.$DvtChartConstants$$.Y_AXIS_TITLE = D.$DvtChartConstants$$.$Y_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ = "y2AxisLabel";
D.$DvtChartConstants$$.Y2_AXIS_LABEL = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y2_AXIS_TITLE$ = "y2AxisTitle";
D.$DvtChartConstants$$.Y2_AXIS_TITLE = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$;
D.$DvtChartSelectionEvent$$ = function $$DvtChartSelectionEvent$$$($selection$$15$$, $type$$67$$, $xMin$$1$$, $xMax$$1$$, $startGroup$$, $endGroup$$, $yMin$$1$$, $yMax$$1$$, $y2Min$$, $y2Max$$) {
  D.$DvtChartSelectionEvent$$.$superclass$.Init.call(this, $selection$$15$$, $type$$67$$);
  this.$_xMin$ = $xMin$$1$$;
  this.$_xMax$ = $xMax$$1$$;
  this.$_startGroup$ = $startGroup$$;
  this.$_endGroup$ = $endGroup$$;
  this.$_yMin$ = $yMin$$1$$;
  this.$_yMax$ = $yMax$$1$$;
  this.$_y2Min$ = $y2Min$$;
  this.$_y2Max$ = $y2Max$$;
  this.$removedSet$ = this.$addedSet$ = D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtChartSelectionEvent", D.$DvtChartSelectionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartSelectionEvent$$, D.$DvtSelectionEvent$$, "DvtChartSelectionEvent");
D.$DvtChartSelectionEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartSelectionEvent$$.prototype.getXMin = D.$DvtChartSelectionEvent$$.prototype.$getXMin$;
D.$DvtChartSelectionEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartSelectionEvent$$.prototype.getXMax = D.$DvtChartSelectionEvent$$.prototype.$getXMax$;
D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartSelectionEvent$$.prototype.getStartGroup = D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartSelectionEvent$$.prototype.getEndGroup = D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartSelectionEvent$$.prototype.getYMin = D.$DvtChartSelectionEvent$$.prototype.$getYMin$;
D.$DvtChartSelectionEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartSelectionEvent$$.prototype.getYMax = D.$DvtChartSelectionEvent$$.prototype.$getYMax$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Min$ = (0,D.$JSCompiler_get$$)("$_y2Min$");
D.$DvtChartSelectionEvent$$.prototype.getY2Min = D.$DvtChartSelectionEvent$$.prototype.$getY2Min$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Max$ = (0,D.$JSCompiler_get$$)("$_y2Max$");
D.$DvtChartSelectionEvent$$.prototype.getY2Max = D.$DvtChartSelectionEvent$$.prototype.$getY2Max$;
D.$DvtChartViewportChangeEvent$$ = function $$DvtChartViewportChangeEvent$$$($type$$68$$, $xMin$$2$$, $xMax$$2$$, $startGroup$$1$$, $endGroup$$1$$, $yMin$$2$$, $yMax$$2$$) {
  D.$DvtChartViewportChangeEvent$$.$superclass$.Init.call(this, $type$$68$$);
  this.$_xMin$ = $xMin$$2$$;
  this.$_xMax$ = $xMax$$2$$;
  this.$_startGroup$ = $startGroup$$1$$;
  this.$_endGroup$ = $endGroup$$1$$;
  this.$_yMin$ = $yMin$$2$$;
  this.$_yMax$ = $yMax$$2$$
};
(0,D.$goog$exportPath_$$)("DvtChartViewportChangeEvent", D.$DvtChartViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtChartViewportChangeEvent");
D.$DvtChartViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtChartViewportChangeEvent$$.TYPE_INPUT = "viewportChangeInput";
D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMin = D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMax = D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$;
D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getStartGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getEndGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMin = D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMax = D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$;
D.$DvtChartAutomation$$ = function $$DvtChartAutomation$$$($dvtComponent$$1$$) {
  this.$_chart$ = $dvtComponent$$1$$;
  this.$_options$ = this.$_chart$.$getOptions$();
  this.$_legend$ = this.$_chart$.$legend$;
  this.$_xAxis$ = this.$_chart$.$xAxis$;
  this.$_yAxis$ = this.$_chart$.$yAxis$;
  this.$_y2Axis$ = this.$_chart$.$y2Axis$;
  this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : D.$JSCompiler_alias_NULL$$;
  this.$_xAxisAutomation$ = this.$_xAxis$ ? this.$_xAxis$.$getAutomation$() : D.$JSCompiler_alias_NULL$$;
  this.$_yAxisAutomation$ = this.$_yAxis$ ? this.$_yAxis$.$getAutomation$() : D.$JSCompiler_alias_NULL$$;
  this.$_y2AxisAutomation$ = this.$_y2Axis$ ? this.$_y2Axis$.$getAutomation$() : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtChartAutomation", D.$DvtChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartAutomation$$, D.$DvtAutomation$$, "DvtChartAutomation");
D.$DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$) {
  var $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$isDescendantOf$(this.$_xAxis$)) {
    return $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = this.$_xAxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$), (0,D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$)($axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$, "xAxis")
  }
  if($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$isDescendantOf$(this.$_yAxis$)) {
    return $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = this.$_yAxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$), (0,D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$)($axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$, "yAxis")
  }
  if($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$isDescendantOf$(this.$_y2Axis$)) {
    return $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = this.$_y2AxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$), (0,D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$)($axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$, "y2Axis")
  }
  if($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$isDescendantOf$(this.$_legend$)) {
    a: {
      if($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$), $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = this.$_legend$.$getOptions$(), $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this.$_legendAutomation$, 
      $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$, $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$)) {
        for(var $s$$inline_1829$$ = 0;$s$$inline_1829$$ < this.$_options$.series.length;$s$$inline_1829$$++) {
          if(this.$_options$.series[$s$$inline_1829$$].name == $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$.text) {
            $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ = "series[" + $s$$inline_1829$$ + "]";
            break a
          }
        }
        $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ = "legend:" + $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$
      }else {
        $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    return $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$
  }
  if(($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_chart$.$__getEventManager$(), $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$)) && "pie" == this.$_options$.type) {
    return"dataItem[" + $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$getSeriesIndex$() + "]"
  }
  if($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ instanceof D.$DvtChartObjPeer$$) {
    $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$getSeriesIndex$();
    $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ = $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$getGroupIndex$();
    if($axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ && "funnel" != this.$_options$.type) {
      return"dataItem[" + $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ + "][" + $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ + "]"
    }
    if($axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ == D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
      return"dataItem[" + $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ + "]"
    }
    if($axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ == D.$JSCompiler_alias_NULL$$ || 0 > $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$)) {
      return"series[" + $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ + "]"
    }
  }else {
    if($JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ instanceof D.$DvtRefObjPeer$$) {
      return $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ = $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$_axisType$, $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ = $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$.$getIndex$(), $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ && 
      0 <= $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ ? $axisSubId_axisType_legendItem$$inline_1828_legendOptions$$inline_1827_seriesIndex$$1$$ + ":referenceObject[" + $JSCompiler_inline_result$$147_displayable$$2_itemIndex_logicalObj$$2_refObjIndex_subId$$inline_1826$$ + "]" : D.$JSCompiler_alias_NULL$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$ = function $$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$$($subId$$3$$, $axisType$$1$$) {
  if("title" == $subId$$3$$ && $axisType$$1$$) {
    return $axisType$$1$$ + ":" + $subId$$3$$
  }
  var $indexList$$1$$ = $subId$$3$$.substring($subId$$3$$.indexOf("["));
  return $indexList$$1$$ ? "group" + $indexList$$1$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$) {
  if("tooltip" == $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_chart$, D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$(this.$_chart$) ? "_dvtDataCursor" : D.$JSCompiler_alias_NULL$$)
  }
  var $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.indexOf("["), $closeParen1_peers$$inline_1844$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.indexOf("]"), $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$, $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.indexOf(":");
  if(0 < $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ && 0 < $closeParen1_peers$$inline_1844$$ || 0 < $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$) {
    $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = 0 > $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ ? $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring(0, $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$) : $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring(0, $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$);
    if("group" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
      return this.$_xAxisAutomation$.$getDomElementForSubId$($itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$)
    }
    if("series" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
      return $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring($itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.indexOf("[") + 1, $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.indexOf("]")), $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$ = this.$_legend$.$getOptions$(), $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$ = "section" + (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)(this.$_legendAutomation$, 
      this.$_options$.series[$openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$], $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$), this.$_legendAutomation$.$getDomElementForSubId$($itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$)
    }
    if("legend" == $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring(0, $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$)) {
      return $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring($axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ + 1), this.$_legendAutomation$.$getDomElementForSubId$($itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$)
    }
    $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring($openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ + 1, $closeParen1_peers$$inline_1844$$);
    if("xAxis" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ || "yAxis" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ || "y2Axis" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
      if($axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring($axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ + 1), "title" == $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$) {
        if("xAxis" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
          return this.$_xAxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$)
        }
        if("yAxis" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
          return this.$_yAxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$)
        }
        if("y2Axis" == $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
          return this.$_y2AxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$)
        }
      }else {
        if($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$.indexOf("["), $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$ = $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$.indexOf("]"), "referenceObject" == $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$.substring(0, $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$)) {
          a: {
            $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$.substring($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ + 1, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$);
            $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$ = this.$_chart$;
            for(var $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ = [], $i$$inline_9806$$ = 0;$i$$inline_9806$$ < $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$.$Peers$.length;$i$$inline_9806$$++) {
              $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$.$Peers$[$i$$inline_9806$$] instanceof D.$DvtRefObjPeer$$ && $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$.push($JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$.$Peers$[$i$$inline_9806$$])
            }
            for($JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$ = 0;$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$ < $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$.length;$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$++) {
              if($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ == $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$[$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$].$getIndex$()) {
                $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$[$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$];
                break a
              }
            }
            $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = D.$JSCompiler_alias_NULL$$
          }
          if($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
            return $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
    if("pie" == this.$_options$.type && ($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = 0 <= $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ && $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ < this.$_chart$.$pieChart$.$_slices$.length ? (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this.$_chart$.$pieChart$.$_slices$[$openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$]) : D.$JSCompiler_alias_NULL$$)) {
      return $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$.$getElem$()
    }
    if("funnel" == this.$_options$.type) {
      var $i$$inline_1845_itemIndex$$1$$ = D.$DvtFunnelRenderer$$.$_GROUP_INDEX$
    }else {
      $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring($closeParen1_peers$$inline_1844$$ + 1), $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.indexOf("["), $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.indexOf("]"), 
      0 <= $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ && 0 <= $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$ && ($i$$inline_1845_itemIndex$$1$$ = $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$.substring($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ + 1, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9804_closeParen2_i$$inline_1839$$))
    }
    a: {
      $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$ = $i$$inline_1845_itemIndex$$1$$;
      $closeParen1_peers$$inline_1844$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)(this.$_chart$);
      for($i$$inline_1845_itemIndex$$1$$ = 0;$i$$inline_1845_itemIndex$$1$$ < $closeParen1_peers$$inline_1844$$.length;$i$$inline_1845_itemIndex$$1$$++) {
        if($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = $closeParen1_peers$$inline_1844$$[$i$$inline_1845_itemIndex$$1$$].$getSeriesIndex$(), $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ = $closeParen1_peers$$inline_1844$$[$i$$inline_1845_itemIndex$$1$$].$getGroupIndex$(), $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ == $openParen1_seriesIndex$$2_seriesIndex$$inline_1833$$ && $axisObjectType_colon_item$$inline_1847_refObjPeers$$inline_9805$$ == 
        $itemIndex$$inline_1843_legendOptions$$inline_1834_subId$$4$$) {
          $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = $closeParen1_peers$$inline_1844$$[$i$$inline_1845_itemIndex$$1$$];
          break a
        }
      }
      $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$ = D.$JSCompiler_alias_NULL$$
    }
    if($index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$) {
      return $index$$inline_1837_logicalObj$$3_objType_openParen2_pieSlice_series$$inline_1846$$.$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getDomElementForSubId = D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($seriesIndex$$5$$, $itemIndex$$3$$) {
  if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
    $itemIndex$$3$$ = 0
  }
  var $dataItem$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$);
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), label:D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), targetValue:D.$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $seriesIndex$$5$$), tooltip:D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$, D.$JSCompiler_alias_FALSE$$), 
  value:D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), open:$dataItem$$ ? $dataItem$$.open : D.$JSCompiler_alias_NULL$$, close:$dataItem$$ ? $dataItem$$.close : D.$JSCompiler_alias_NULL$$, high:D.$DvtChartDataUtils$$.$getHighValue$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), low:D.$DvtChartDataUtils$$.$getLowValue$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), volume:$dataItem$$ ? $dataItem$$.volume : D.$JSCompiler_alias_NULL$$, x:D.$DvtChartDataUtils$$.$getXValue$(this.$_chart$, 
  $seriesIndex$$5$$, $itemIndex$$3$$), y:$dataItem$$ ? $dataItem$$.y : D.$JSCompiler_alias_NULL$$, z:$dataItem$$ ? $dataItem$$.z : D.$JSCompiler_alias_NULL$$, min:$dataItem$$ ? $dataItem$$.min : D.$JSCompiler_alias_NULL$$, max:$dataItem$$ ? $dataItem$$.max : D.$JSCompiler_alias_NULL$$, group:D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $itemIndex$$3$$), series:D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$5$$), selected:D.$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, 
  $seriesIndex$$5$$, $itemIndex$$3$$)}
};
D.$DvtChartAutomation$$.prototype.getDataItem = D.$DvtChartAutomation$$.prototype.$getDataItem$;
D.$DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($itemIndex$$4$$) {
  return D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $itemIndex$$4$$)
};
D.$DvtChartAutomation$$.prototype.getGroup = D.$DvtChartAutomation$$.prototype.$getGroup$;
D.$DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($seriesIndex$$6$$) {
  return this.$_options$.series[$seriesIndex$$6$$].name
};
D.$DvtChartAutomation$$.prototype.getSeries = D.$DvtChartAutomation$$.prototype.$getSeries$;
D.$DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
  return D.$DvtChartDataUtils$$.$getGroupCount$(this.$_chart$)
};
D.$DvtChartAutomation$$.prototype.getGroupCount = D.$DvtChartAutomation$$.prototype.$getGroupCount$;
D.$DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
  return this.$_options$.series.length
};
D.$DvtChartAutomation$$.prototype.getSeriesCount = D.$DvtChartAutomation$$.prototype.$getSeriesCount$;
D.$DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
  return this.$_options$.title.text
};
D.$DvtChartAutomation$$.prototype.getTitle = D.$DvtChartAutomation$$.prototype.$getTitle$;
D.$DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
  var $legendSpace$$ = this.$_legend$.$_bounds$, $point$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_chart$, new D.$DvtPoint$$($legendSpace$$.x, $legendSpace$$.y));
  return{bounds:{x:$point$$4$$.x, y:$point$$4$$.y, width:$legendSpace$$.$w$, height:$legendSpace$$.$h$}, title:this.$_legend$.$getOptions$().title}
};
D.$DvtChartAutomation$$.prototype.getLegend = D.$DvtChartAutomation$$.prototype.$getLegend$;
D.$DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
  var $plotAreaSpace$$ = this.$_chart$.$_plotAreaSpace$;
  return{bounds:{x:$plotAreaSpace$$.x, y:$plotAreaSpace$$.y, width:$plotAreaSpace$$.$w$, height:$plotAreaSpace$$.$h$}}
};
D.$DvtChartAutomation$$.prototype.getPlotArea = D.$DvtChartAutomation$$.prototype.$getPlotArea$;
D.$DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
  return this.$_getAxis$("x")
};
D.$DvtChartAutomation$$.prototype.getXAxis = D.$DvtChartAutomation$$.prototype.$getXAxis$;
D.$DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
  return this.$_getAxis$("y")
};
D.$DvtChartAutomation$$.prototype.getYAxis = D.$DvtChartAutomation$$.prototype.$getYAxis$;
D.$DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
  return this.$_getAxis$("y2")
};
D.$DvtChartAutomation$$.prototype.getY2Axis = D.$DvtChartAutomation$$.prototype.$getY2Axis$;
D.$DvtChartAutomation$$.prototype.$_getAxis$ = function $$DvtChartAutomation$$$$$_getAxis$$($type$$63$$) {
  var $axis$$65$$ = "x" == $type$$63$$ ? this.$_xAxis$ : "y" == $type$$63$$ ? this.$_yAxis$ : this.$_y2Axis$;
  if($axis$$65$$) {
    var $axisSpace$$ = $axis$$65$$.$_bounds$, $stageCoord$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($axis$$65$$, new D.$DvtPoint$$($axisSpace$$.x, $axisSpace$$.y)), $chart$$ = this.$_chart$;
    return{bounds:{x:$stageCoord$$.x, y:$stageCoord$$.y, width:$axisSpace$$.$w$, height:$axisSpace$$.$h$}, title:this.$_options$[$type$$63$$ + "Axis"].title, getPreferredSize:function($axisSpace$$, $stageCoord$$) {
      var $axisOptions_prefSize$$ = $axis$$65$$.$getOptions$(), $position$$8$$ = $axisOptions_prefSize$$.position, $tickLabelGap$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$, $type$$63$$), $outerGap$$ = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$) ? 2 : 0;
      "top" == $position$$8$$ || "bottom" == $position$$8$$ ? ($axisOptions_prefSize$$ = $axis$$65$$.$getPreferredSize$($axisOptions_prefSize$$, $axisSpace$$, $stageCoord$$ - $tickLabelGap$$ - $outerGap$$), $axisOptions_prefSize$$.$h$ = window.Math.ceil($axisOptions_prefSize$$.$h$ + $tickLabelGap$$ + $outerGap$$)) : ($axisOptions_prefSize$$ = $axis$$65$$.$getPreferredSize$($axisOptions_prefSize$$, $axisSpace$$ - $tickLabelGap$$ - $outerGap$$, $stageCoord$$), $axisOptions_prefSize$$.$w$ = window.Math.ceil($axisOptions_prefSize$$.$w$ + 
      $tickLabelGap$$ + $outerGap$$));
      return{width:$axisOptions_prefSize$$.$w$, height:$axisOptions_prefSize$$.$h$}
    }}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAutomation$$.prototype.$IsTooltipElement$ = function $$DvtAutomation$$$$$IsTooltipElement$$($domElement$$3_id$$24$$) {
  return($domElement$$3_id$$24$$ = $domElement$$3_id$$24$$.getAttribute("id")) && (0 == $domElement$$3_id$$24$$.indexOf("_dvtDataCursor") || 0 == $domElement$$3_id$$24$$.indexOf(D.$DvtHtmlTooltipManager$_TOOLTIP_DIV_ID$$)) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
(0,D.$DvtBundle$addDefaultStrings$$)("DvtChartBundle", {DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series", LABEL_GROUP:"Group", LABEL_VALUE:"Value", LABEL_TARGET_VALUE:"Target", LABEL_X:"X", LABEL_Y:"Y", LABEL_Z:"Z", LABEL_PERCENTAGE:"Percentage", LABEL_MIN:"Min", LABEL_MAX:"Max", LABEL_HIGH:"High", LABEL_LOW:"Low", LABEL_OPEN:"Open", LABEL_CLOSE:"Close", LABEL_VOLUME:"Volume", LABEL_OTHER:"Other", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom", PAN:"Pan"});
D.$DvtChartEventManager$$ = function $$DvtChartEventManager$$$($chart$$5$$) {
  D.$DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$5$$.$getCtx$(), $chart$$5$$.$processEvent$, $chart$$5$$);
  this.$_chart$ = $chart$$5$$;
  this.$_dragMode$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragButtonsVisible$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$selectButton$ = this.$zoomButton$ = this.$panButton$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventManager$$, D.$DvtEventManager$$, "DvtChartEventManager");
D.$DvtChartEventManager$getUIEventParams$$ = function $$DvtChartEventManager$getUIEventParams$$$($type$$64$$, $id$$27$$, $series$$5$$) {
  return{type:$type$$64$$, id:$id$$27$$, series:$series$$5$$, group:D.$JSCompiler_alias_VOID$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$3$$) {
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  D.$DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$3$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$3$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$3$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$4$$) {
  D.$DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$4$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$4$$.$removeEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$4$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$55$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $target$$55$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$1$$, $pageY$$1$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$1$$ - this.$_stageAbsolutePosition$.x, $pageY$$1$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_StaticMethods__getDragHandler$$ = function $$JSCompiler_StaticMethods__getDragHandler$$$($JSCompiler_StaticMethods__getDragHandler$self$$, $relPos$$) {
  if($relPos$$ && "user" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_chart$.$getOptions$().dragMode && D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__getDragHandler$self$$.$_chart$) && ("pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ || "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$)) {
    $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ = (0,D.$JSCompiler_StaticMethods_isWithinBounds$$)($JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$, $relPos$$) ? "pan" : "zoom"
  }
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$106$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$106$$) : this.$_onMouseDragStart$($event$$106$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$107$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$107$$) : this.$_onMouseDragMove$($event$$107$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$108$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$108$$) : this.$_onMouseDragEnd$($event$$108$$)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$109$$) {
  var $relPos$$1$$ = this.$_getRelativePosition$($event$$109$$.pageX, $event$$109$$.pageY), $dragHandler$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this, $relPos$$1$$), $chartEvent$$, $obj$$51$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$109$$));
  if((!$obj$$51$$ || !$obj$$51$$.$isSelectable$ || !$obj$$51$$.$isSelectable$()) && 0 == $event$$109$$.button && $dragHandler$$) {
    ($chartEvent$$ = $dragHandler$$.$processDragStart$($relPos$$1$$, $event$$109$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$), this.$_chart$.setCursor($dragHandler$$.getCursor($relPos$$1$$)), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$), this.$_chart$ != (this.$getCtx$().$_keyboardFocusArray$.length <= this.$getCtx$().$_keyboardFocusIndex$ ? D.$JSCompiler_alias_NULL$$ : this.$getCtx$().$_keyboardFocusArray$[this.$getCtx$().$_keyboardFocusIndex$]) && 
    (0,D.$JSCompiler_StaticMethods_setCurrentKeyboardFocus$$)(this.$getCtx$(), this.$_chart$)
  }
  return $chartEvent$$ ? (this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, D.$JSCompiler_alias_VOID$$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$110$$) {
  var $relPos$$2$$ = this.$_getRelativePosition$($event$$110$$.pageX, $event$$110$$.pageY), $dragHandler$$1$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$1$$;
  if($dragHandler$$1$$ && ($chartEvent$$1$$ = $dragHandler$$1$$.$processDragMove$($relPos$$2$$, $event$$110$$.ctrlKey))) {
    this.$_callback$.call(this.$_callbackObj$, $chartEvent$$1$$), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
  }
  $chartEvent$$1$$ && $event$$110$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($chartEvent$$2_event$$111$$) {
  var $relPos$$3$$ = this.$_getRelativePosition$($chartEvent$$2_event$$111$$.pageX, $chartEvent$$2_event$$111$$.pageY), $axisSpace$$1_dragHandler$$2$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
  if($axisSpace$$1_dragHandler$$2$$) {
    if($chartEvent$$2_event$$111$$ = $axisSpace$$1_dragHandler$$2$$.$processDragEnd$($relPos$$3$$, $chartEvent$$2_event$$111$$.ctrlKey)) {
      this.$_callback$.call(this.$_callbackObj$, $chartEvent$$2_event$$111$$), (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)(this)
    }
    this.$_chart$.setCursor($axisSpace$$1_dragHandler$$2$$.getCursor($relPos$$3$$));
    ($axisSpace$$1_dragHandler$$2$$ = this.$_chart$.$_axisSpace$) && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($axisSpace$$1_dragHandler$$2$$, $relPos$$3$$.x, $relPos$$3$$.y))
  }
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($dragHandler$$3_event$$112$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $dragHandler$$3_event$$112$$);
  var $relPos$$4$$ = this.$_getRelativePosition$($dragHandler$$3_event$$112$$.pageX, $dragHandler$$3_event$$112$$.pageY);
  this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($dragHandler$$3_event$$112$$) instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, D.$JSCompiler_alias_VOID$$) : (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $relPos$$4$$));
  ($dragHandler$$3_event$$112$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this, $relPos$$4$$)) ? this.$_chart$.setCursor($dragHandler$$3_event$$112$$.getCursor($relPos$$4$$)) : this.$_chart$.setCursor("inherit")
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$113$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$113$$);
  var $relPos$$5$$ = this.$_getRelativePosition$($event$$113$$.pageX, $event$$113$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_1983_axisSpace$$2$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_1983_axisSpace$$2$$ && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_1983_axisSpace$$2$$, $relPos$$5$$.x, $relPos$$5$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_1983_axisSpace$$2$$ = this.$_dataCursorHandler$, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_1983_axisSpace$$2$$.$_chart$.$_plotAreaSpace$, $relPos$$5$$.x, $relPos$$5$$.y) || (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processOut$self$$inline_1983_axisSpace$$2$$, D.$JSCompiler_alias_VOID$$));
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$113$$.target)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$114$$) {
  if(D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$3_deltaXMin$$inline_1991$$ = $event$$114$$.wheelDelta != D.$JSCompiler_alias_NULL$$ ? $event$$114$$.wheelDelta : 0, $relPos$$6$$ = this.$_getRelativePosition$($event$$114$$.pageX, $event$$114$$.pageY);
    if(this.$_panZoomHandler$) {
      var $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$;
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$ = this.$_panZoomHandler$;
      var $delta$$inline_1989$$ = $delta$$3_deltaXMin$$inline_1991$$, $startPt$$inline_1990$$ = $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_container$.$stageToLocal$($relPos$$6$$);
      if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_bounds$, $startPt$$inline_1990$$.x, $startPt$$inline_1990$$.y)) {
        var $delta$$inline_1989$$ = $delta$$inline_1989$$ * $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_zoomRate$, $delta$$3_deltaXMin$$inline_1991$$ = $delta$$inline_1989$$ * ($startPt$$inline_1990$$.x - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_bounds$.x), $deltaXMax$$inline_1992$$ = -$delta$$inline_1989$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_bounds$.x + 
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_bounds$.$w$ - $startPt$$inline_1990$$.x), $deltaYMin$$inline_1993$$ = $delta$$inline_1989$$ * ($startPt$$inline_1990$$.y - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_bounds$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$ = -$delta$$inline_1989$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_bounds$.y + $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$.$_bounds$.$h$ - $startPt$$inline_1990$$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$ = new D.$DvtPanZoomEvent$$("dvtZoomEvent", $delta$$3_deltaXMin$$inline_1991$$, $deltaXMax$$inline_1992$$, $deltaYMin$$inline_1993$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$, $delta$$3_deltaXMin$$inline_1991$$, $deltaXMax$$inline_1992$$, $deltaYMin$$inline_1993$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$)
      }else {
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$ && ($event$$114$$.preventDefault(), $event$$114$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1987_deltaYMax$$inline_1994_panZoomEvent$$), this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $relPos$$6$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ShowFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$ShowFocusEffect$$($event$$115$$, $navigable$$) {
  if(this.$_dataCursorHandler$) {
    var $pos$$5$$ = $navigable$$.$_dataPos$;
    if($pos$$5$$) {
      var $plotAreaBounds$$1$$ = this.$_chart$.$_plotAreaSpace$;
      (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, new D.$DvtPoint$$($pos$$5$$.x + $plotAreaBounds$$1$$.x, $pos$$5$$.y + $plotAreaBounds$$1$$.y))
    }
  }
  D.$DvtChartEventManager$$.$superclass$.$ShowFocusEffect$.call(this, $event$$115$$, $navigable$$)
};
D.$JSCompiler_prototypeAlias$$.$OnBlur$ = function $$JSCompiler_prototypeAlias$$$$OnBlur$$($event$$116$$) {
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, D.$JSCompiler_alias_VOID$$);
  D.$DvtChartEventManager$$.$superclass$.$OnBlur$.call(this, $event$$116$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$117_pos$$6$$) {
  var $obj$$53$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$117_pos$$6$$.target);
  $event$$117_pos$$6$$ = this.$_getRelativePosition$($event$$117_pos$$6$$.pageX, $event$$117_pos$$6$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$117_pos$$6$$, $obj$$53$$);
  $obj$$53$$ && (this.$_processActionEvent$($obj$$53$$), (!$obj$$53$$.$isSelectable$ || !$obj$$53$$.$isSelectable$()) && this.$_processDrillEvent$($obj$$53$$))
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$118_obj$$54$$) {
  ($event$$118_obj$$54$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$118_obj$$54$$.target)) && $event$$118_obj$$54$$.$isSelectable$ && $event$$118_obj$$54$$.$isSelectable$() && this.$_processDrillEvent$($event$$118_obj$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$119$$) {
  var $dlo$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$119$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$119$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($event$$120$$) {
  var $dlo$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$120$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$120$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$1$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$121_obj$$55$$) {
  if($event$$121_obj$$55$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$121_obj$$55$$.target)) {
    this.$_processActionEvent$($event$$121_obj$$55$$), (!$event$$121_obj$$55$$.$isSelectable$ || !$event$$121_obj$$55$$.$isSelectable$()) && this.$_processDrillEvent$($event$$121_obj$$55$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$122_obj$$56$$) {
  if($event$$122_obj$$56$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$122_obj$$56$$.target)) {
    this.$_processActionEvent$($event$$122_obj$$56$$), (!$event$$122_obj$$56$$.$isSelectable$ || !$event$$122_obj$$56$$.$isSelectable$()) && this.$_processDrillEvent$($event$$122_obj$$56$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$123_obj$$57$$) {
  ($event$$123_obj$$57$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$123_obj$$57$$.target)) && $event$$123_obj$$57$$.$isSelectable$ && $event$$123_obj$$57$$.$isSelectable$() && this.$_processDrillEvent$($event$$123_obj$$57$$)
};
D.$JSCompiler_prototypeAlias$$.$_processActionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processActionEvent$$($obj$$58$$) {
  $obj$$58$$ && ($obj$$58$$.$getAction$ && $obj$$58$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$58$$.$getAction$(), $obj$$58$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$_processDrillEvent$ = function $$JSCompiler_prototypeAlias$$$$_processDrillEvent$$($obj$$59$$) {
  if($obj$$59$$ && $obj$$59$$.$isDrillable$ && $obj$$59$$.$isDrillable$()) {
    var $id$$28$$ = $obj$$59$$.getId();
    $obj$$59$$ instanceof D.$DvtChartObjPeer$$ ? this.$FireEvent$(new D.$DvtDrillEvent$$($id$$28$$.getId ? $id$$28$$.getId() : $id$$28$$, $obj$$59$$.$getSeries$(), $obj$$59$$.$getGroup$())) : $obj$$59$$ instanceof D.$DvtPieSlice$$ && this.$FireEvent$(new D.$DvtDrillEvent$$($id$$28$$.getId(), $id$$28$$.$getSeries$(), $id$$28$$.$getGroup$()))
  }
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$124_options$$31$$, $categories$$1_hoverBehaviorDelay_obj$$60$$, $bOver_rolloverEvent$$) {
  $event$$124_options$$31$$ = this.$_chart$.$getOptions$();
  if("dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this.$_chart$)) {
    $categories$$1_hoverBehaviorDelay_obj$$60$$ = $categories$$1_hoverBehaviorDelay_obj$$60$$.$getCategories$ ? $categories$$1_hoverBehaviorDelay_obj$$60$$.$getCategories$() : [];
    $event$$124_options$$31$$.highlightedCategories = $bOver_rolloverEvent$$ ? $categories$$1_hoverBehaviorDelay_obj$$60$$.slice() : D.$JSCompiler_alias_NULL$$;
    $bOver_rolloverEvent$$ = new D.$DvtCategoryRolloverEvent$$($bOver_rolloverEvent$$ ? "categoryRollOver" : "categoryRollOut", $event$$124_options$$31$$.highlightedCategories);
    $categories$$1_hoverBehaviorDelay_obj$$60$$ = D.$DvtChartStyleUtils$$.$getHoverBehaviorDelay$(this.$_chart$);
    var $objs$$ = this.$_chart$.$getObjects$();
    this.$_chart$.$pieChart$ && ($objs$$ = $objs$$.concat(this.$_chart$.$pieChart$.$_slices$));
    this.$RolloverHandler$.$processEvent$($bOver_rolloverEvent$$, $objs$$, $categories$$1_hoverBehaviorDelay_obj$$60$$, "any" == $event$$124_options$$31$$.highlightMatch)
  }
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$125$$) {
  var $relPos$$7_relPos2_touches$$2$$ = $event$$125$$.touches, $chartEvent$$3_relPos1$$, $dataCursorOn$$;
  if(1 == $relPos$$7_relPos2_touches$$2$$.length) {
    var $relPos$$7_relPos2_touches$$2$$ = this.$_getRelativePosition$($relPos$$7_relPos2_touches$$2$$[0].pageX, $relPos$$7_relPos2_touches$$2$$[0].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$ ? $chartEvent$$3_relPos1$$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$processDragStart$($relPos$$7_relPos2_touches$$2$$, D.$JSCompiler_alias_TRUE$$) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $relPos$$7_relPos2_touches$$2$$), $dataCursorOn$$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    2 == $relPos$$7_relPos2_touches$$2$$.length && (this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && (this.$endDrag$(), $chartEvent$$3_relPos1$$ = this.$_getRelativePosition$($relPos$$7_relPos2_touches$$2$$[0].pageX, $relPos$$7_relPos2_touches$$2$$[0].pageY), $relPos$$7_relPos2_touches$$2$$ = this.$_getRelativePosition$($relPos$$7_relPos2_touches$$2$$[1].pageX, $relPos$$7_relPos2_touches$$2$$[1].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$ = 
    this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_pinchOn$ ? $chartEvent$$3_relPos1$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_container$.$stageToLocal$($chartEvent$$3_relPos1$$), $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_container$.$stageToLocal$($relPos$$7_relPos2_touches$$2$$), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_lastPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_lastPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt2$, !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_bounds$, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt1$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt1$.y) || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt2$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_origPt2$.y) ? 
    $chartEvent$$3_relPos1$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_1999_dragHandler$$4$$.$_pinchOn$ = D.$JSCompiler_alias_TRUE$$, $chartEvent$$3_relPos1$$ = new D.$DvtPanZoomEvent$$("dvtPinchStartEvent", 0, 0, 0, 0, 0, 0, 0, 0))))
  }
  $chartEvent$$3_relPos1$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$3_relPos1$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
  return $chartEvent$$3_relPos1$$ || $dataCursorOn$$ ? ($event$$125$$.preventDefault(), $event$$125$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$126$$) {
  var $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$ = $event$$126$$.touches, $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$, $dataCursorOn$$1$$;
  if(1 == $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$.length) {
    var $newPt1$$inline_2006_relPos$$8_relPos1$$1$$ = this.$_getRelativePosition$($dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$[0].pageX, $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$[0].pageY);
    ($dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) ? $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$ = $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$.$processDragMove$($newPt1$$inline_2006_relPos$$8_relPos1$$1$$, D.$JSCompiler_alias_TRUE$$) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $newPt1$$inline_2006_relPos$$8_relPos1$$1$$), 
    $dataCursorOn$$1$$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    if(2 == $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$.length && this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      if($newPt1$$inline_2006_relPos$$8_relPos1$$1$$ = this.$_getRelativePosition$($dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$[0].pageX, $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$[0].pageY), $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$ = this.$_getRelativePosition$($dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$[1].pageX, $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$[1].pageY), $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$ = 
      this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_pinchOn$) {
        var $newPt1$$inline_2006_relPos$$8_relPos1$$1$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_container$.$stageToLocal$($newPt1$$inline_2006_relPos$$8_relPos1$$1$$), $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_container$.$stageToLocal$($dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$), $deltas$$inline_2008$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$, 
        $newPt1$$inline_2006_relPos$$8_relPos1$$1$$, $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_lastPt2$), $totalDeltas$$inline_2009$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$, $newPt1$$inline_2006_relPos$$8_relPos1$$1$$, $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$, 
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_origPt2$);
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_lastPt1$ = $newPt1$$inline_2006_relPos$$8_relPos1$$1$$;
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$.$_lastPt2$ = $dragHandler$$5_newPt2$$inline_2007_relPos2$$1_touches$$3$$;
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$ = new D.$DvtPanZoomEvent$$("dvtPinchMoveEvent", $deltas$$inline_2008$$.$dxMin$, $deltas$$inline_2008$$.$dxMax$, $deltas$$inline_2008$$.$dyMin$, $deltas$$inline_2008$$.$dyMax$, $totalDeltas$$inline_2009$$.$dxMin$, $totalDeltas$$inline_2009$$.$dxMax$, $totalDeltas$$inline_2009$$.$dyMin$, $totalDeltas$$inline_2009$$.$dyMax$)
      }else {
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }
  ($JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$ || $dataCursorOn$$1$$) && $event$$126$$.preventDefault();
  $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$ && (this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_2003_chartEvent$$4$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$())
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$127$$) {
  var $chartEvent1$$ = this.$endDrag$(), $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$;
  if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$ = this.$_panZoomHandler$;
    if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_pinchOn$) {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_pinchOn$ = D.$JSCompiler_alias_FALSE$$;
      var $totalDeltas$$inline_2012$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_lastPt2$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_origPt2$);
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_lastPt1$ = D.$JSCompiler_alias_NULL$$;
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$.$_lastPt2$ = D.$JSCompiler_alias_NULL$$;
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$ = new D.$DvtPanZoomEvent$$("dvtPinchEndEvent", 0, 0, 0, 0, $totalDeltas$$inline_2012$$.$dxMin$, $totalDeltas$$inline_2012$$.$dxMax$, $totalDeltas$$inline_2012$$.$dyMin$, $totalDeltas$$inline_2012$$.$dyMax$)
    }else {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$ = D.$JSCompiler_alias_NULL$$
    }
    $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$ && this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$)
  }
  if($chartEvent1$$ || $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2011_chartEvent2$$) {
    $event$$127$$.preventDefault(), this.$getCtx$().$getTooltipManager$().$hideTooltip$()
  }
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$6$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$5$$;
  $dragHandler$$6$$ && ($chartEvent$$5$$ = $dragHandler$$6$$.$processDragEnd$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, D.$JSCompiler_alias_VOID$$);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($chartEvent$$6_dz$$) {
  this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($chartEvent$$6_dz$$ = this.$_panZoomHandler$.$zoomBy$($chartEvent$$6_dz$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$6_dz$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$4$$, $dy$$6$$) {
  if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
    var $chartEvent$$7$$ = this.$_panZoomHandler$.$panBy$($dx$$4$$, $dy$$6$$);
    $chartEvent$$7$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$7$$)
  }
};
D.$JSCompiler_StaticMethods_hideHoverFeedback$$ = function $$JSCompiler_StaticMethods_hideHoverFeedback$$$($JSCompiler_StaticMethods_hideHoverFeedback$self$$) {
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$.$_dataCursorHandler$, D.$JSCompiler_alias_VOID$$)
};
D.$DvtChartEventManager$$.prototype.$hideTooltip$ = function $$DvtChartEventManager$$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && D.$DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
D.$DvtChartEventManager$$.prototype.$getTooltipsEnabled$ = function $$DvtChartEventManager$$$$$getTooltipsEnabled$$($logicalObj$$5$$) {
  return this.$_dataCursorHandler$ && ($logicalObj$$5$$ instanceof D.$DvtChartObjPeer$$ || $logicalObj$$5$$ instanceof D.$DvtRefObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
D.$DvtChartEventManager$$.prototype.$cancelMarquee$ = function $$DvtChartEventManager$$$$$cancelMarquee$$($event$$128$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$128$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
};
D.$JSCompiler_StaticMethods_setDragMode$$ = function $$JSCompiler_StaticMethods_setDragMode$$$($JSCompiler_StaticMethods_setDragMode$self$$, $dragMode$$) {
  $JSCompiler_StaticMethods_setDragMode$self$$.$_dragMode$ = $dragMode$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$DvtAgent$isTouchDevice$$)() ? "off" : D.$DvtChartEventUtils$$.$isScrollable$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$) ? "pan" : "multiple" == $JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$getOptions$().selectionMode ? "select" : D.$JSCompiler_alias_NULL$$ : $dragMode$$;
  (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$xAxis$) && (!$JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$ || (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$)) && (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($JSCompiler_StaticMethods_setDragMode$self$$)
};
D.$DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
  this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "zoom")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
  this.$panButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "pan")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
  this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$zoomButton$, D.$JSCompiler_alias_FALSE$$), this.$panButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$panButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "select")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setDragButtonsVisible$$ = function $$JSCompiler_StaticMethods_setDragButtonsVisible$$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$3$$) {
  if($visible$$3$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2022_JSCompiler_StaticMethods_showDragButtons$self$$inline_2020$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2022_JSCompiler_StaticMethods_showDragButtons$self$$inline_2020$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2022_JSCompiler_StaticMethods_showDragButtons$self$$inline_2020$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_TRUE$$
  }else {
    !$visible$$3$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ($JSCompiler_StaticMethods_hideDragButtons$self$$inline_2022_JSCompiler_StaticMethods_showDragButtons$self$$inline_2020$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$, $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2022_JSCompiler_StaticMethods_showDragButtons$self$$inline_2020$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2022_JSCompiler_StaticMethods_showDragButtons$self$$inline_2020$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_FALSE$$), 
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods_autoToggleZoomButton$$ = function $$JSCompiler_StaticMethods_autoToggleZoomButton$$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !(0,D.$DvtAgent$isTouchDevice$$)() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ((0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, 
  D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()))
};
D.$DvtChartKeyboardHandler$$ = function $$DvtChartKeyboardHandler$$$($manager$$1$$, $chart$$6$$) {
  this.Init($manager$$1$$, $chart$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtChartKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($manager$$2$$, $chart$$7$$) {
  D.$DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$2$$);
  this.$_chart$ = $chart$$7$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$132$$) {
  return this.$isNavigationEvent$($event$$132$$) && !$event$$132$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$133$$) {
  return 32 == $event$$133$$.keyCode && $event$$133$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$134$$) {
  var $currentNavigable_keyCode$$11_navigables$$1$$ = $event$$134$$.keyCode;
  if(9 == $currentNavigable_keyCode$$11_navigables$$1$$) {
    if($currentNavigable_keyCode$$11_navigables$$1$$ = this.$_eventManager$.$getFocus$()) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$134$$), $currentNavigable_keyCode$$11_navigables$$1$$
    }
    $currentNavigable_keyCode$$11_navigables$$1$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
    if(0 < $currentNavigable_keyCode$$11_navigables$$1$$.length) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$134$$), this.$getDefaultNavigable$($currentNavigable_keyCode$$11_navigables$$1$$)
    }
  }else {
    27 == $currentNavigable_keyCode$$11_navigables$$1$$ ? this.$_eventManager$.$cancelMarquee$($event$$134$$) : 33 == $currentNavigable_keyCode$$11_navigables$$1$$ ? ($event$$134$$.ctrlKey || $event$$134$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$134$$)) : 34 == $currentNavigable_keyCode$$11_navigables$$1$$ ? ($event$$134$$.ctrlKey || $event$$134$$.shiftKey || 
    D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$134$$)) : (0,D.$DvtKeyboardEvent$isEquals$$)($event$$134$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$134$$) ? this.$_eventManager$.$zoomBy$(1.5) : ((0,D.$DvtKeyboardEvent$isMinus$$)($event$$134$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$134$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5)
  }
  return D.$DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$134$$)
};
D.$JSCompiler_prototypeAlias$$.$getDefaultNavigable$ = function $$JSCompiler_prototypeAlias$$$$getDefaultNavigable$$($navigableItems$$) {
  if(!$navigableItems$$ || 0 >= $navigableItems$$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $isPie$$ = D.$DvtChartTypeUtils$$.$isPie$(this.$_chart$), $defaultNavigable$$, $defaultSeries$$, $defaultGroup$$, $navigable$$1$$, $i$$132$$ = 0;$i$$132$$ < $navigableItems$$.length;$i$$132$$++) {
    $navigable$$1$$ = $navigableItems$$[$i$$132$$], !$defaultNavigable$$ || $navigable$$1$$.$getSeriesIndex$() < $defaultSeries$$ ? ($defaultNavigable$$ = $navigable$$1$$, $defaultSeries$$ = $navigable$$1$$.$getSeriesIndex$(), $isPie$$ || ($defaultGroup$$ = $navigable$$1$$.$getGroupIndex$())) : !$isPie$$ && $navigable$$1$$.$getGroupIndex$() < $defaultGroup$$ && ($defaultNavigable$$ = $navigable$$1$$, $defaultSeries$$ = $navigable$$1$$.$getSeriesIndex$(), $defaultGroup$$ = $navigable$$1$$.$getGroupIndex$())
  }
  return $defaultNavigable$$
};
D.$DvtChartObjPeer$$ = function $$DvtChartObjPeer$$$($chart$$8$$, $displayables$$, $seriesIndex$$7$$, $groupIndex$$3$$, $dataPos$$) {
  this.Init($chart$$8$$, $displayables$$, $seriesIndex$$7$$, $groupIndex$$3$$, $dataPos$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartObjPeer$$, D.$DvtObj$$, "DvtChartObjPeer");
D.$DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($chart$$9_i$$133_index$$133$$, $displayables$$1$$, $displayable$$5_seriesIndex$$8$$, $groupIndex$$4$$, $dataItem$$2_dataPos$$1_seriesItem$$) {
  this.$_chart$ = $chart$$9_i$$133_index$$133$$;
  this.$_displayables$ = $displayables$$1$$;
  this.$_seriesIndex$ = !(0,window.isNaN)($displayable$$5_seriesIndex$$8$$) ? $displayable$$5_seriesIndex$$8$$ : -1;
  this.$_groupIndex$ = !(0,window.isNaN)($groupIndex$$4$$) ? $groupIndex$$4$$ : -1;
  this.$_dataPos$ = $dataItem$$2_dataPos$$1_seriesItem$$;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  0 <= $displayable$$5_seriesIndex$$8$$ && (this.$_series$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$9_i$$133_index$$133$$, $displayable$$5_seriesIndex$$8$$));
  0 <= $groupIndex$$4$$ && (this.$_group$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$9_i$$133_index$$133$$, $groupIndex$$4$$));
  if($dataItem$$2_dataPos$$1_seriesItem$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$9_i$$133_index$$133$$, $displayable$$5_seriesIndex$$8$$)) {
    this.$_action$ = $dataItem$$2_dataPos$$1_seriesItem$$.action, this.$_drillable$ = D.$DvtChartEventUtils$$.$isSeriesDrillable$($chart$$9_i$$133_index$$133$$, $displayable$$5_seriesIndex$$8$$), this.$_stampId$ = $dataItem$$2_dataPos$$1_seriesItem$$._id
  }
  this.$_categories$ = $dataItem$$2_dataPos$$1_seriesItem$$.categories ? $dataItem$$2_dataPos$$1_seriesItem$$.categories : $dataItem$$2_dataPos$$1_seriesItem$$.name ? [$dataItem$$2_dataPos$$1_seriesItem$$.name] : [];
  if($dataItem$$2_dataPos$$1_seriesItem$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$9_i$$133_index$$133$$, $displayable$$5_seriesIndex$$8$$, $groupIndex$$4$$)) {
    $dataItem$$2_dataPos$$1_seriesItem$$.categories && (this.$_categories$ = this.$_categories$.concat($dataItem$$2_dataPos$$1_seriesItem$$.categories)), this.$_dataItemId$ = $dataItem$$2_dataPos$$1_seriesItem$$.id, this.$_action$ = $dataItem$$2_dataPos$$1_seriesItem$$.action, this.$_drillable$ = D.$DvtChartEventUtils$$.$isDataItemDrillable$($chart$$9_i$$133_index$$133$$, $displayable$$5_seriesIndex$$8$$, $groupIndex$$4$$), this.$_stampId$ = $dataItem$$2_dataPos$$1_seriesItem$$._id
  }
  if(this.$_action$ || this.$_drillable$) {
    for($chart$$9_i$$133_index$$133$$ = 0;$chart$$9_i$$133_index$$133$$ < this.$_displayables$.length;$chart$$9_i$$133_index$$133$$++) {
      this.$_displayables$[$chart$$9_i$$133_index$$133$$].setCursor("pointer")
    }
  }
  for($chart$$9_i$$133_index$$133$$ = 0;$chart$$9_i$$133_index$$133$$ < $displayables$$1$$.length;$chart$$9_i$$133_index$$133$$++) {
    $displayable$$5_seriesIndex$$8$$ = $displayables$$1$$[$chart$$9_i$$133_index$$133$$], $displayable$$5_seriesIndex$$8$$ instanceof D.$DvtChartLineArea$$ || $displayable$$5_seriesIndex$$8$$.$setAriaRole$("img"), this.$_updateAriaLabel$($displayable$$5_seriesIndex$$8$$)
  }
};
D.$DvtChartObjPeer$associate$$ = function $$DvtChartObjPeer$associate$$$($displayable$$6$$, $chart$$10$$, $identObj_seriesIndex$$9$$, $groupIndex$$5$$, $dataPos$$2$$) {
  $displayable$$6$$ && ($identObj_seriesIndex$$9$$ = new D.$DvtChartObjPeer$$($chart$$10$$, [$displayable$$6$$], $identObj_seriesIndex$$9$$, $groupIndex$$5$$, $dataPos$$2$$), $chart$$10$$.$registerObject$($identObj_seriesIndex$$9$$), $chart$$10$$.$__getEventManager$().$associate$($displayable$$6$$, $identObj_seriesIndex$$9$$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return 0 <= this.$_seriesIndex$ && 0 <= this.$_groupIndex$ ? new D.$DvtChartDataItem$$(this.$_dataItemId$, this.$getSeries$(), this.$getGroup$()) : 0 <= this.$_seriesIndex$ ? this.$getSeries$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = (0,D.$JSCompiler_get$$)("$_groupIndex$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getSeriesType$ = function $$JSCompiler_prototypeAlias$$$$getSeriesType$$() {
  return D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesItem$ = function $$JSCompiler_prototypeAlias$$$$getSeriesItem$$() {
  return D.$DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, (0,D.$DvtChartDefaults$isPostAltaSkin$$)(this.$_chart$))
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return D.$DvtChartStyleUtils$$.$isSelectable$(this.$_chart$, this.$getSeriesIndex$(), this.$getGroupIndex$())
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$) {
  this.$_isSelected$ = $bSelected$$;
  for(var $i$$134$$ = 0;$i$$134$$ < this.$_displayables$.length;$i$$134$$++) {
    this.$_displayables$[$i$$134$$].$setSelected$ && (this.$_displayables$[$i$$134$$].$setSelected$($bSelected$$), this.$_updateAriaLabel$(this.$_displayables$[$i$$134$$]))
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$135$$ = 0;$i$$135$$ < this.$_displayables$.length;$i$$135$$++) {
    this.$_displayables$[$i$$135$$].$showHoverEffect$ && this.$_displayables$[$i$$135$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$136$$ = 0;$i$$136$$ < this.$_displayables$.length;$i$$136$$++) {
    this.$_displayables$[$i$$136$$].$hideHoverEffect$ && this.$_displayables$[$i$$136$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$1$$ = [], $options$$32_shortDesc$$1$$ = this.$_chart$.$getOptions$();
  this.$isSelectable$() && $states$$1$$.push((0,D.$DvtBundle$getTranslation$$)($options$$32_shortDesc$$1$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", "DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$isDrillable$() && $states$$1$$.push((0,D.$DvtBundle$getTranslation$$)($options$$32_shortDesc$$1$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  $options$$32_shortDesc$$1$$ = D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, D.$JSCompiler_alias_FALSE$$);
  $options$$32_shortDesc$$1$$ == D.$JSCompiler_alias_NULL$$ && (0 > this.$_groupIndex$ && 0 < $states$$1$$.length) && ($options$$32_shortDesc$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($options$$32_shortDesc$$1$$, $states$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$($displayable$$7$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || $displayable$$7$$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_2027_event$$135$$) {
  var $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$, $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$;
  $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$ = $chart$$inline_2027_event$$135$$.keyCode;
  if($chart$$inline_2027_event$$135$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$ && $chart$$inline_2027_event$$135$$.ctrlKey) {
    return this
  }
  $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$ = this.$_chart$;
  for(var $chartObjs_groupIndex$$inline_2030$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$11_keyCode$$12_seriesIndex$$inline_2029$$), $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ = [], $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ = 0;$groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ < $chartObjs_groupIndex$$inline_2030$$.length;$groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$++) {
    $chartObjs_groupIndex$$inline_2030$$[$groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$].$isNavigable$() && $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$.push($chartObjs_groupIndex$$inline_2030$$[$groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$])
  }
  if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$11_keyCode$$12_seriesIndex$$inline_2029$$)) {
    $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $chart$$inline_2027_event$$135$$, $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isLineArea$($chart$$11_keyCode$$12_seriesIndex$$inline_2029$$) || D.$DvtChartTypeUtils$$.$isStacked$($chart$$11_keyCode$$12_seriesIndex$$inline_2029$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$11_keyCode$$12_seriesIndex$$inline_2029$$)) {
      $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ = $chart$$inline_2027_event$$135$$.keyCode;
      $chart$$inline_2027_event$$135$$ = this.$_chart$;
      var $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ = $chart$$inline_2027_event$$135$$.$getCtx$();
      $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$ = this.$getSeriesIndex$();
      var $chartObjs_groupIndex$$inline_2030$$ = this.$getGroupIndex$(), $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$inline_2027_event$$135$$), $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$, $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$inline_2027_event$$135$$), $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ = 
      D.$DvtChartTypeUtils$$.$isPolar$($chart$$inline_2027_event$$135$$), $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$), $isDown$$inline_2037$$ = $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ ? $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ ? 39 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : 
      37 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : 40 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$, $isLeft$$inline_2038$$ = $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ ? 38 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ ? 39 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : 
      37 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$, $isRight$$inline_2039$$ = $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ ? 40 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ ? 37 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : 39 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$;
      if($i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ ? $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ ? 37 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : 39 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ : 38 == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$) {
        $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = $chartObjs_groupIndex$$inline_2030$$;
        $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_2027_event$$135$$);
        $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2027_event$$135$$, $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$, $chartObjs_groupIndex$$inline_2030$$);
        $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ = $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ = D.$JSCompiler_alias_NULL$$;
        for($i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ = 0;$i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ < $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$;$i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$++) {
          if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_2027_event$$135$$, $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$) && ($context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2027_event$$135$$, $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$, $chartObjs_groupIndex$$inline_2030$$), $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ > $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ || 
          $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ == $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ && $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ > $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$)) {
            if($groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ !== D.$JSCompiler_alias_NULL$$ && $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$ < $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ || $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ == D.$JSCompiler_alias_NULL$$) {
              $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ = $context$$inline_2028_isRTL$$inline_2036_itemValue$$inline_9822$$, $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ = $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$
            }
          }
        }
        $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ = $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$
      }else {
        if($isDown$$inline_2037$$) {
          $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = $chartObjs_groupIndex$$inline_2030$$;
          $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_2027_event$$135$$);
          $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2027_event$$135$$, $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$, $chartObjs_groupIndex$$inline_2030$$);
          $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ = $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ = D.$JSCompiler_alias_NULL$$;
          for($i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ -= 1;0 <= $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$;$i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$--) {
            if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_2027_event$$135$$, $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$) && ($i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2027_event$$135$$, $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$, $chartObjs_groupIndex$$inline_2030$$), $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ < 
            $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ || $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ == $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ && $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$ < $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$)) {
              if($currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ !== D.$JSCompiler_alias_NULL$$ && $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ > $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ || $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ == D.$JSCompiler_alias_NULL$$) {
                $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$ = $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$, $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ = $i$$inline_9831_isHoriz$$inline_2034_nextSeriesIndex$$inline_9820_seriesCount$$inline_9827$$
              }
            }
          }
          $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ = $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$
        }else {
          if($isRight$$inline_2039$$) {
            $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ = $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$;
            $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = $chartObjs_groupIndex$$inline_2030$$;
            do {
              $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$++, $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ && $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ >= $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ && ($next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = 0)
            }while((0,D.$JSCompiler_StaticMethods_getObject$$)($chart$$inline_2027_event$$135$$, $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$, $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$) == D.$JSCompiler_alias_NULL$$ && $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ < $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$)
          }else {
            if($isLeft$$inline_2038$$) {
              $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$ = $chart$$11_keyCode$$12_seriesIndex$$inline_2029$$;
              $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = $chartObjs_groupIndex$$inline_2030$$;
              do {
                $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$--, $i$$inline_9821_isPolar$$inline_2035_itemValue$$inline_9832$$ && 0 > $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ && ($next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = $groupCount$$inline_2031_i$$137_nextSeriesIndex$$inline_9830_nextValue$$inline_9819$$ - 1)
              }while((0,D.$JSCompiler_StaticMethods_getObject$$)($chart$$inline_2027_event$$135$$, $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$, $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$) == D.$JSCompiler_alias_NULL$$ && -1 < $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$)
            }
          }
        }
      }
      $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = ($next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = (0,D.$JSCompiler_StaticMethods_getObject$$)($chart$$inline_2027_event$$135$$, $currentValue$$inline_9828_nextSeriesIndex$$inline_2032_seriesCount$$inline_9817$$, $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$)) && $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$.$isNavigable$() ? $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ : this
    }else {
      D.$DvtChartTypeUtils$$.$isFunnel$($chart$$11_keyCode$$12_seriesIndex$$inline_2029$$) && (38 == $chart$$inline_2027_event$$135$$.keyCode || 40 == $chart$$inline_2027_event$$135$$.keyCode) ? ($chart$$inline_2027_event$$135$$.keyCode -= 1, $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_2027_event$$135$$, $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$)) : $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$ = 
      (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_2027_event$$135$$, $currentValue$$inline_9818_keyCode$$inline_2026_navigables$$2_nextValue$$inline_9829$$, D.$JSCompiler_alias_TRUE$$)
    }
  }
  return $next_nextGroupIndex$$inline_2033_nextObj$$inline_2040$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$3$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$3$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$, this.$showHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$isNavigable$ = function $$JSCompiler_prototypeAlias$$$$isNavigable$$() {
  return-1 != this.$getGroupIndex$() && -1 != this.$getSeriesIndex$()
};
D.$DvtRefObjPeer$$ = function $$DvtRefObjPeer$$$($chart$$17$$, $displayables$$2$$, $refObj$$, $index$$134$$, $axisType$$2$$) {
  this.Init($chart$$17$$, $displayables$$2$$, $refObj$$, $index$$134$$, $axisType$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjPeer$$, D.$DvtObj$$, "DvtRefObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRefObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($chart$$18_i$$146$$, $displayables$$3$$, $refObj$$1$$, $displayable$$8_index$$135$$, $axisType$$3$$) {
  this.$_chart$ = $chart$$18_i$$146$$;
  this.$_displayables$ = $displayables$$3$$;
  this.$_refObj$ = $refObj$$1$$;
  this.$_index$ = $displayable$$8_index$$135$$;
  this.$_axisType$ = $axisType$$3$$;
  for($chart$$18_i$$146$$ = 0;$chart$$18_i$$146$$ < $displayables$$3$$.length;$chart$$18_i$$146$$++) {
    $displayable$$8_index$$135$$ = $displayables$$3$$[$chart$$18_i$$146$$], $displayable$$8_index$$135$$.$setAriaRole$("img"), $displayable$$8_index$$135$$.$setAriaProperty$("label", $refObj$$1$$.shortDesc)
  }
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[D.$DvtChartRefObjUtils$$.getId(this.$_refObj$)]
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return D.$DvtChartTooltipUtils$$.$getRefObjTooltip$(this.$_chart$, this.$_refObj$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartRefObjUtils$$.$getColor$(this.$_refObj$)
};
D.$DvtChartDataItem$$ = function $$DvtChartDataItem$$$($id$$25$$, $series$$3$$, $group$$10$$) {
  this.Init($id$$25$$, $series$$3$$, $group$$10$$)
};
(0,D.$goog$exportPath_$$)("DvtChartDataItem", D.$DvtChartDataItem$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataItem$$, D.$DvtObj$$, "DvtChartDataItem");
D.$DvtChartDataItem$$.prototype.Init = function $$DvtChartDataItem$$$$Init$($id$$26$$, $series$$4$$, $group$$11$$) {
  this.$_id$ = $id$$26$$;
  this.$_series$ = $series$$4$$;
  this.$_group$ = $group$$11$$
};
D.$DvtChartDataItem$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtChartDataItem$$.prototype.getId = D.$DvtChartDataItem$$.prototype.getId;
D.$DvtChartDataItem$$.prototype.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$DvtChartDataItem$$.prototype.getSeries = D.$DvtChartDataItem$$.prototype.$getSeries$;
D.$DvtChartDataItem$$.prototype.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$DvtChartDataItem$$.prototype.getGroup = D.$DvtChartDataItem$$.prototype.$getGroup$;
D.$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$1$$) {
  return $dataItem$$1$$ instanceof D.$DvtChartDataItem$$ ? this.$_group$ === $dataItem$$1$$.$getGroup$() && this.$_series$ === $dataItem$$1$$.$getSeries$() : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDefaults$$ = function $$DvtChartDefaults$$$() {
  this.Init({skyros:D.$DvtChartDefaults$VERSION_1$$, alta:D.$DvtChartDefaults$SKIN_ALTA$$, next:D.$DvtChartDefaults$SKIN_NEXT$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtChartDefaults");
D.$DvtChartDefaults$SKIN_NEXT$$ = {skin:"next", styleDefaults:{dataItemGaps:"auto", markerSize:10, marqueeColor:"rgba(255,255,255,0.4)", marqueeBorderColor:"#0572ce", _tooltipStyle:new D.$DvtCSSStyle$$("border-collapse: separate; border-spacing: 2px"), tooltipLabelStyle:new D.$DvtCSSStyle$$("color: #737373; padding: 0px 2px"), tooltipValueStyle:new D.$DvtCSSStyle$$("color: #333333; padding: 0px 2px")}, yAxis:{axisLine:{rendered:"auto"}}, y2Axis:{axisLine:{rendered:"auto"}}, layout:{titlePlotAreaGap:16, 
footnoteGap:10, legendGapWidth:15, legendGapHeight:10, tickLabelGapHeight:8, tickLabelGapWidth:9}};
D.$DvtChartDefaults$SKIN_ALTA$$ = {skin:"alta", title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;")}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #252525;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{seriesEffect:"color", colors:D.$DvtCSSStyle$COLORS_ALTA$$, sliceLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), 
pieCenterLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, dataLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), stockRisingColor:"#6b6f74", stockFallingColor:"#ED6647"}};
D.$DvtChartDefaults$VERSION_1$$ = {skin:"skyros", emptyText:D.$JSCompiler_alias_NULL$$, type:"bar", stack:"off", orientation:"vertical", polarGridShape:"circle", selectionMode:"none", hideAndShowBehavior:"none", hoverBehavior:"none", zoomAndScroll:"off", initialZooming:"none", dragMode:"user", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", __sparkBarSpacing:"subpixel", __spark:D.$JSCompiler_alias_FALSE$$, dataCursor:"auto", dataCursorBehavior:"auto", drilling:"off", 
highlightMatch:"all", series:[], groups:[], title:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b; font-weight: bold"), halign:"start"}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 10px; color: #333333;"), halign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, xAxis:{tickLabel:{rendered:"on"}, 
majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, yAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, y2Axis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33, alignTickMarks:"on"}, plotArea:{backgroundColor:D.$JSCompiler_alias_NULL$$}, legend:{position:"auto", 
rendered:"on", maxSize:0.3, layout:{gapRatio:1}, seriesSection:{}, referenceObjectSection:{}, sections:[]}, overview:{rendered:"off"}, styleDefaults:{colors:D.$DvtCSSStyle$COLORS_SKYROS$$, borderColor:"auto", borderWidth:"auto", patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), shapes:"square circle diamond plus triangleDown triangleUp".split(" "), 
seriesEffect:"gradient", threeDEffect:"off", selectionEffect:"highlight", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:D.$JSCompiler_alias_NULL$$, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", pieInnerRadius:0, selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", pieCenterLabel:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;")}, 
sliceLabelType:"percent", otherColor:"#4b4b4b", stockRisingColor:"#006666", stockFallingColor:"#CC3300", stockRangeColor:"#B8B8B8", dataItemGaps:"0%", dataLabelStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px;"), dataLabelPosition:"auto", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E", hoverBehaviorDelay:200, dataCursor:{markerSize:8, markerDisplayed:"on", 
lineColor:"#5a5a5a", lineWidth:2, lineStyle:"solid"}, groupSeparators:{rendered:"on", color:"rgba(138,141,172,0.4)"}, padding:"auto"}, layout:{gapWidthRatio:D.$JSCompiler_alias_NULL$$, gapHeightRatio:D.$JSCompiler_alias_NULL$$, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGapWidth:10, legendGapHeight:10, tickLabelGapHeight:5, tickLabelGapWidth:7}, _locale:"en-us", _resources:{}};
D.$DvtChartDefaults$getGapHeight$$ = function $$DvtChartDefaults$getGapHeight$$$($chart$$2$$, $defaultHeight$$1$$) {
  return window.Math.ceil($defaultHeight$$1$$ * (0,D.$JSCompiler_StaticMethods_getGapHeightRatio$$)($chart$$2$$))
};
D.$DvtChartDefaults$isPostAltaSkin$$ = function $$DvtChartDefaults$isPostAltaSkin$$$($chart$$4$$) {
  return"skyros" != $chart$$4$$.$getSkin$() && "alta" != $chart$$4$$.$getSkin$()
};
D.$DvtDataCursorHandler$$ = function $$DvtDataCursorHandler$$$($chart$$15$$, $dataCursor$$) {
  this.Init($chart$$15$$, $dataCursor$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursorHandler$$, D.$DvtObj$$, "DvtDataCursorHandler");
D.$DvtDataCursorHandler$$.prototype.Init = function $$DvtDataCursorHandler$$$$Init$($chart$$16$$, $dataCursor$$1$$) {
  this.$_context$ = $chart$$16$$.$getCtx$();
  this.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_chart$ = $chart$$16$$
};
D.$JSCompiler_StaticMethods_processMove$$ = function $$JSCompiler_StaticMethods_processMove$$$($JSCompiler_StaticMethods_processMove$self$$, $pos$$7_y$$inline_2117$$, $bSuppressEvent_values$$inline_2127$$) {
  var $plotRect$$ = $JSCompiler_StaticMethods_processMove$self$$.$_chart$.$_plotAreaSpace$;
  if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($plotRect$$, $pos$$7_y$$inline_2117$$.x, $pos$$7_y$$inline_2117$$.y)) {
    var $x$$inline_2116$$ = $pos$$7_y$$inline_2117$$.x;
    $pos$$7_y$$inline_2117$$ = $pos$$7_y$$inline_2117$$.y;
    if((0,D.$JSCompiler_StaticMethods_isOffscreen$$)($JSCompiler_StaticMethods_processMove$self$$.$_context$)) {
      (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2127$$)
    }else {
      var $dataCursor$$inline_2119$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$, $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$, $centerPoint$$inline_2121_horizontal$$inline_9866$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods_processMove$self$$.$_chart$), $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$ = D.$DvtChartTypeUtils$$.$isLineArea$($JSCompiler_StaticMethods_processMove$self$$.$_chart$) && 
      !D.$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods_processMove$self$$.$_chart$), $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$ = $JSCompiler_StaticMethods_processMove$self$$.$_findMatches$(), $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$;
      $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ = window.Infinity;
      $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ = [];
      for(var $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$ = 0;$closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$ < $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$.length;$closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$++) {
        var $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$ = $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$[$closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$], $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$ = window.Math.round(window.Math.abs((($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$.$matchRegion$.y : $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$.$matchRegion$.x) + 
        ($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$.$matchRegion$.y + $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$.$matchRegion$.$h$ : $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$.$matchRegion$.x + $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$.$matchRegion$.$w$)) / 2 - ($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $pos$$7_y$$inline_2117$$ : $x$$inline_2116$$)));
        $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$ <= $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ && ($closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$ < $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ && ($closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ = []), $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$.push($diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$), 
        $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ = $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$)
      }
      $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ = $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$;
      if(!D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods_processMove$self$$.$_chart$)) {
        $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ = window.Infinity;
        $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$ = -window.Infinity;
        $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$ = D.$JSCompiler_alias_NULL$$;
        for($diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$ = 0;$diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$ < $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$.length;$diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$++) {
          $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$ = $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$[$diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$], $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ = window.Math.min($closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$, 
          $centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$.$matchRegion$.x), $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$ = window.Math.max($closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$, $centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$.$matchRegion$.y + 
          $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$ = $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$.$gidx$
        }
        for($diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$ = 0;$diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$ < $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$.length;$diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$++) {
          var $match$$inline_9880$$ = $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$[$diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$], $itemGroup$$inline_9881_midPoint$$inline_9882$$ = $match$$inline_9880$$.$gidx$;
          $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$ ? $closestFirstDirectionMatch$$inline_9879_closestGroup$$inline_9877_diffValue$$inline_9874$$ == $itemGroup$$inline_9881_midPoint$$inline_9882$$ && $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$.push($match$$inline_9880$$) : ($itemGroup$$inline_9881_midPoint$$inline_9882$$ = (($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $match$$inline_9880$$.$matchRegion$.y : $match$$inline_9880$$.$matchRegion$.x) + 
          ($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $match$$inline_9880$$.$matchRegion$.y + $match$$inline_9880$$.$matchRegion$.$h$ : $match$$inline_9880$$.$matchRegion$.x + $match$$inline_9880$$.$matchRegion$.$w$)) / 2, $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$ >= $itemGroup$$inline_9881_midPoint$$inline_9882$$ && $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ <= 
          $itemGroup$$inline_9881_midPoint$$inline_9882$$ && $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$.push($match$$inline_9880$$))
        }
      }
      $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$ = D.$JSCompiler_alias_NULL$$;
      $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$ = window.Infinity;
      for($closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ = 0;$closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ < $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$.length;$closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$++) {
        $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$ = $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$[$closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$], $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$ = window.Math.round(window.Math.abs((($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$.$matchRegion$.x : 
        $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$.$matchRegion$.y) + ($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$.$matchRegion$.x + $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$.$matchRegion$.$w$ : $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$.$matchRegion$.y + $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$.$matchRegion$.$h$)) / 
        2 - ($centerPoint$$inline_2121_horizontal$$inline_9866$$ ? $x$$inline_2116$$ : $pos$$7_y$$inline_2117$$))), $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$ < $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$ && ($dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$ = $diffValue$$inline_9887_i$$inline_9878_matchObj$$inline_9873$$, $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$ = 
        $closestHigherBound$$inline_9876_i$$inline_9872_match$$inline_9886$$)
      }
      $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ = $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$;
      $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2127$$) : ($centerPoint$$inline_2121_horizontal$$inline_9866$$ = D.$DvtGeomUtils$$.$getCenterPoint$($closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$.$matchRegion$), 
      $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$ = $x$$inline_2116$$, $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ = $pos$$7_y$$inline_2117$$, "SNAP" == ($dataCursor$$inline_2119$$.$_behavior$ ? $dataCursor$$inline_2119$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_2119$$.$isHorizontal$() ? $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ = window.Math.min(window.Math.max($centerPoint$$inline_2121_horizontal$$inline_9866$$.y, 
      $plotRect$$.y), $plotRect$$.y + $plotRect$$.$h$) : $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$ = window.Math.min(window.Math.max($centerPoint$$inline_2121_horizontal$$inline_9866$$.x, $plotRect$$.x), $plotRect$$.x + $plotRect$$.$w$)), $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$ = D.$DvtChartTooltipUtils$$.$getDatatip$($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$.$sidx$, 
      $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$.$gidx$, (0,D.$DvtChartDefaults$isPostAltaSkin$$)($JSCompiler_StaticMethods_processMove$self$$.$_chart$)), ($closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$ == D.$JSCompiler_alias_NULL$$ || "" == $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$) && "on" != $JSCompiler_StaticMethods_processMove$self$$.$_chart$.$getOptions$().dataCursor ? 
      $dataCursor$$inline_2119$$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : ($dataCursor$$inline_2119$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$ = D.$DvtChartTooltipUtils$$.$getDatatipColor$($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$.$sidx$, 
      $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$.$gidx$), $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$ = $dataCursor$$inline_2119$$.$isHorizontal$() ? $dcY$$inline_2123_matchesInBounds$$inline_9869_minDiff$$inline_9870$$ : $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$, $dataCursor$$inline_2119$$.$render$($plotRect$$, $centerPoint$$inline_2121_horizontal$$inline_9866$$.x, 
      $centerPoint$$inline_2121_horizontal$$inline_9866$$.y, $dcX$$inline_2122_lineCoord$$inline_2126_matches$$inline_9868_minDiff$$inline_9884$$, $closestMatch$$inline_9883_tooltipText$$inline_2124_useAllInGroup$$inline_9867$$, $closestFirstDirectionMatches$$inline_9871_closestLowerBound$$inline_9875_closestMatch$$inline_2120_i$$inline_9885_seriesColor$$inline_2125$$), $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_TRUE$$, $bSuppressEvent_values$$inline_2127$$ || 
      ($bSuppressEvent_values$$inline_2127$$ = $JSCompiler_StaticMethods_processMove$self$$.$_chart$.$getValuesAt$($x$$inline_2116$$, $pos$$7_y$$inline_2117$$), (0,D.$JSCompiler_StaticMethods_changeOption$$)($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $bSuppressEvent_values$$inline_2127$$))))
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2127$$)
  }
};
D.$JSCompiler_StaticMethods__removeDataCursor$$ = function $$JSCompiler_StaticMethods__removeDataCursor$$$($JSCompiler_StaticMethods__removeDataCursor$self$$, $bSuppressEvent$$4$$) {
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$_bVisible$ && $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_context$.$getTooltipManager$("_dvtDataCursor").$hideTooltip$();
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$;
  $bSuppressEvent$$4$$ || (0,D.$JSCompiler_StaticMethods_changeOption$$)($JSCompiler_StaticMethods__removeDataCursor$self$$.$_chart$, D.$JSCompiler_alias_NULL$$)
};
D.$DvtDataCursorHandler$$.prototype.$_findMatches$ = function $$DvtDataCursorHandler$$$$$_findMatches$$() {
  var $stage$$5$$ = this.$_context$.$_stage$, $eventManager$$6$$ = this.$_chart$.$__getEventManager$(), $matches$$2$$ = [];
  if(!this.$_chart$.$_currentMarkers$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$144$$ = 0;$i$$144$$ < this.$_chart$.$_currentMarkers$.length;$i$$144$$++) {
    for(var $markers$$ = this.$_chart$.$_currentMarkers$[$i$$144$$], $numMarkers$$ = $markers$$.length, $idx$$2$$ = 0;$idx$$2$$ < $numMarkers$$;$idx$$2$$++) {
      var $item$$2_match$$2$$ = $markers$$[$idx$$2$$], $logicalObject$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($eventManager$$6$$, $item$$2_match$$2$$), $dims$$5$$ = $item$$2_match$$2$$.$getDimensionsSelf$ ? $item$$2_match$$2$$.$getDimensionsSelf$($stage$$5$$) : $item$$2_match$$2$$.$getDimensions$($stage$$5$$), $item$$2_match$$2$$ = {$obj$:$item$$2_match$$2$$, $matchRegion$:$dims$$5$$, $gidx$:$logicalObject$$1$$.$getGroupIndex$(), $sidx$:$logicalObject$$1$$.$getSeriesIndex$(), $marker$:D.$JSCompiler_alias_NULL$$};
      $matches$$2$$.push($item$$2_match$$2$$)
    }
  }
  return $matches$$2$$
};
D.$DvtAnimOnDisplay$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDisplay$$, D.$DvtObj$$, "DvtAnimOnDisplay");
D.$DvtAnimOnDisplay$$.$createAnimation$ = function $$DvtAnimOnDisplay$$$$createAnimation$$($chart$$19$$, $arPlayables_type$$71$$, $duration$$12$$) {
  $arPlayables_type$$71$$ = [];
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$19$$)) {
    D.$DvtAnimOnDisplay$$.$_animBarLineArea$($chart$$19$$, $duration$$12$$, $arPlayables_type$$71$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$19$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$19$$)) {
      D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$($chart$$19$$, $duration$$12$$, $arPlayables_type$$71$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isPie$($chart$$19$$) && $chart$$19$$.$pieChart$) {
        return $chart$$19$$.$pieChart$.$getDisplayAnimation$()
      }
    }
  }
  return 0 < $arPlayables_type$$71$$.length ? new D.$DvtParallelPlayable$$($chart$$19$$.$getCtx$(), $arPlayables_type$$71$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtAnimOnDisplay$$$$_animBarLineArea$$($chart$$20$$, $duration$$13$$, $arPlayables$$1$$) {
  var $objs$$1$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$20$$), $objCount$$ = $objs$$1$$ ? $objs$$1$$.length : 0;
  if($objCount$$) {
    for(var $obj$$62$$, $nodePlayable_peer$$3$$, $i$$149$$ = 0;$i$$149$$ < $objCount$$;$i$$149$$++) {
      $nodePlayable_peer$$3$$ = $objs$$1$$[$i$$149$$];
      $obj$$62$$ = $nodePlayable_peer$$3$$.$getDisplayables$()[0];
      var $seriesType$$ = $nodePlayable_peer$$3$$.$getSeriesType$();
      $nodePlayable_peer$$3$$ = D.$JSCompiler_alias_NULL$$;
      if($obj$$62$$ instanceof D.$DvtChartBar$$ || $obj$$62$$ instanceof D.$DvtChartPolarBar$$ || $obj$$62$$ instanceof D.$DvtChartCandlestick$$) {
        $nodePlayable_peer$$3$$ = $obj$$62$$.$getDisplayAnimation$($duration$$13$$)
      }else {
        if($obj$$62$$ instanceof D.$DvtChartLineArea$$) {
          $nodePlayable_peer$$3$$ = "line" == $seriesType$$ ? D.$DvtAnimOnDisplay$$.$_getLinePlayable$($chart$$20$$, $obj$$62$$, $duration$$13$$) : D.$DvtAnimOnDisplay$$.$_getAreaPlayable$($chart$$20$$, $obj$$62$$, $duration$$13$$)
        }else {
          if($obj$$62$$ instanceof D.$DvtSimpleMarker$$ || $obj$$62$$ instanceof D.$DvtChartRangeMarker$$) {
            if($obj$$62$$ instanceof D.$DvtChartLineMarker$$ && !$obj$$62$$.$isSelected$()) {
              continue
            }
            $nodePlayable_peer$$3$$ = new D.$DvtAnimFadeIn$$($chart$$20$$.$getCtx$(), $obj$$62$$, $duration$$13$$ - 0.8, 0.8)
          }
        }
      }
      $nodePlayable_peer$$3$$ && $arPlayables$$1$$.push($nodePlayable_peer$$3$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$21$$, $duration$$14$$, $arPlayables$$2$$) {
  var $objs$$2$$ = $chart$$21$$.$getObjects$(), $objCount$$1$$ = $objs$$2$$ ? $objs$$2$$.length : 0;
  if($objCount$$1$$) {
    for(var $obj$$63_peer$$4$$, $nodePlayable$$1$$, $i$$150$$ = 0;$i$$150$$ < $objCount$$1$$;$i$$150$$++) {
      $obj$$63_peer$$4$$ = $objs$$2$$[$i$$150$$], $obj$$63_peer$$4$$ = $obj$$63_peer$$4$$.$getDisplayables$()[0], $obj$$63_peer$$4$$ instanceof D.$DvtSimpleMarker$$ ? $nodePlayable$$1$$ = new D.$DvtAnimPopIn$$($chart$$21$$.$getCtx$(), $obj$$63_peer$$4$$, D.$JSCompiler_alias_TRUE$$, $duration$$14$$) : $obj$$63_peer$$4$$ instanceof D.$DvtFunnelSlice$$ && ($nodePlayable$$1$$ = D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$($chart$$21$$, $obj$$63_peer$$4$$, $duration$$14$$)), $nodePlayable$$1$$ && $arPlayables$$2$$.push($nodePlayable$$1$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getAreaPlayable$$($chart$$22_nodePlayable$$2$$, $shape$$23$$, $duration$$15_topAnim$$) {
  var $context$$31$$ = $chart$$22_nodePlayable$$2$$.$getCtx$(), $baselineCoord$$ = $shape$$23$$.$_baseline$, $baseAnim_baseParams$$;
  if($shape$$23$$.$isArea$()) {
    var $baseCoords$$ = $shape$$23$$.$_arBaseCoord$;
    $baseAnim_baseParams$$ = $shape$$23$$.$getBaseAnimationParams$();
    for(var $baseEndState_endState$$ = $baseAnim_baseParams$$.slice(0), $j$$27$$ = 0;$j$$27$$ < $baseAnim_baseParams$$.length;$j$$27$$++) {
      if(1 == $j$$27$$ % 4 || 2 == $j$$27$$ % 4) {
        $baseAnim_baseParams$$[$j$$27$$] = $baselineCoord$$
      }
    }
    $shape$$23$$.$setBaseAnimationParams$($baseAnim_baseParams$$);
    $baseAnim_baseParams$$ = new D.$DvtCustomAnimation$$($context$$31$$, $shape$$23$$, $duration$$15_topAnim$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim_baseParams$$.$_animator$, "typeNumberArray", $shape$$23$$, $shape$$23$$.$getBaseAnimationParams$, $shape$$23$$.$setBaseAnimationParams$, $baseEndState_endState$$)
  }
  for(var $coords$$6$$ = $shape$$23$$.$_arCoord$, $params$$8$$ = $shape$$23$$.$getAnimationParams$(), $baseEndState_endState$$ = $params$$8$$.slice(0), $j$$27$$ = 0;$j$$27$$ < $params$$8$$.length;$j$$27$$++) {
    if(1 == $j$$27$$ % 4 || 2 == $j$$27$$ % 4) {
      $params$$8$$[$j$$27$$] = $baselineCoord$$
    }
  }
  $shape$$23$$.$setAnimationParams$($params$$8$$);
  $duration$$15_topAnim$$ = new D.$DvtCustomAnimation$$($context$$31$$, $shape$$23$$, $duration$$15_topAnim$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$15_topAnim$$.$_animator$, "typeNumberArray", $shape$$23$$, $shape$$23$$.$getAnimationParams$, $shape$$23$$.$setAnimationParams$, $baseEndState_endState$$);
  $chart$$22_nodePlayable$$2$$ = new D.$DvtParallelPlayable$$($chart$$22_nodePlayable$$2$$.$getCtx$(), $baseAnim_baseParams$$, $duration$$15_topAnim$$);
  $chart$$22_nodePlayable$$2$$.$setOnEnd$(function() {
    $shape$$23$$.$setCoords$($coords$$6$$, $baseCoords$$)
  });
  return $chart$$22_nodePlayable$$2$$
};
D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$23_context$$32$$, $slice$$, $duration$$16_nodePlayable2$$) {
  $chart$$23_context$$32$$ = $chart$$23_context$$32$$.$getCtx$();
  var $arPoints_nodePlayable1$$ = $slice$$.$getAnimationParams$(), $endState1$$ = $arPoints_nodePlayable1$$.slice(0), $endState2$$ = $arPoints_nodePlayable1$$.slice(0);
  $arPoints_nodePlayable1$$[0] = 0;
  $arPoints_nodePlayable1$$[2] = 0;
  $endState1$$[2] = 0;
  $slice$$.$setAnimationParams$($arPoints_nodePlayable1$$);
  $arPoints_nodePlayable1$$ = new D.$DvtCustomAnimation$$($chart$$23_context$$32$$, $slice$$, $duration$$16_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($arPoints_nodePlayable1$$.$_animator$, "typeNumberArray", $slice$$, $slice$$.$getAnimationParams$, $slice$$.$setAnimationParams$, $endState1$$);
  $duration$$16_nodePlayable2$$ = new D.$DvtCustomAnimation$$($chart$$23_context$$32$$, $slice$$, $duration$$16_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$16_nodePlayable2$$.$_animator$, "typeNumberArray", $slice$$, $slice$$.$getAnimationParams$, $slice$$.$setAnimationParams$, $endState2$$);
  return new D.$DvtSequentialPlayable$$($chart$$23_context$$32$$, [$arPoints_nodePlayable1$$, $duration$$16_nodePlayable2$$])
};
D.$DvtAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtAnimOnDisplay$$$$_getLinePlayable$$($chart$$24_nodePlayable$$3$$, $line$$6$$, $duration$$17$$) {
  var $coords$$7$$ = $line$$6$$.$_arCoord$, $params$$9$$ = $line$$6$$.$getAnimationParams$(), $endState$$1$$ = $params$$9$$.slice(0);
  D.$DvtAnimOnDisplay$$.$_getMeanPoints$($params$$9$$);
  $line$$6$$.$setAnimationParams$($params$$9$$);
  $chart$$24_nodePlayable$$3$$ = new D.$DvtCustomAnimation$$($chart$$24_nodePlayable$$3$$.$getCtx$(), $line$$6$$, $duration$$17$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$24_nodePlayable$$3$$.$_animator$, "typeNumberArray", $line$$6$$, $line$$6$$.$getAnimationParams$, $line$$6$$.$setAnimationParams$, $endState$$1$$);
  $chart$$24_nodePlayable$$3$$.$setOnEnd$(function() {
    $line$$6$$.$setCoords$($coords$$7$$)
  });
  return $chart$$24_nodePlayable$$3$$
};
D.$DvtAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtAnimOnDisplay$$$$_getMeanPoints$$($params$$10$$) {
  var $mean$$ = 0, $min$$1$$ = window.Number.MAX_VALUE, $max$$1$$ = window.Number.MIN_VALUE, $len$$1$$ = $params$$10$$.length, $i$$151$$;
  for($i$$151$$ = 0;$i$$151$$ < $len$$1$$;$i$$151$$++) {
    var $v$$2$$ = $params$$10$$[$i$$151$$];
    0 == $i$$151$$ % 4 || (3 == $i$$151$$ % 4 || window.Infinity == $v$$2$$) || ($v$$2$$ < $min$$1$$ && ($min$$1$$ = $v$$2$$), $v$$2$$ > $max$$1$$ && ($max$$1$$ = $v$$2$$), $mean$$ += $v$$2$$)
  }
  8 < $len$$1$$ ? ($mean$$ = $mean$$ - 2 * $min$$1$$ - 2 * $max$$1$$, $mean$$ /= $len$$1$$ / 2 - 4) : $mean$$ /= $len$$1$$ / 2;
  for($i$$151$$ = 0;$i$$151$$ < $len$$1$$;$i$$151$$++) {
    if(1 == $i$$151$$ % 4 || 2 == $i$$151$$ % 4) {
      $params$$10$$[$i$$151$$] = $mean$$
    }
  }
};
D.$DvtAnimOnDC$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDC$$, D.$DvtObj$$, "DvtAnimOnDC");
D.$DvtAnimOnDC$$.$createAnimation$ = function $$DvtAnimOnDC$$$$createAnimation$$($handler$$9_i$$147_oldChart$$1$$, $newChart_newLabels$$, $ctx_type$$70$$, $duration$$10$$, $delContainer$$) {
  if(!D.$DvtAnimOnDC$$.$_canAnimate$($handler$$9_i$$147_oldChart$$1$$, $newChart_newLabels$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $ctx_type$$70$$ = $newChart_newLabels$$.$getCtx$();
  var $arOldList$$ = [], $arNewList$$ = [];
  D.$DvtChartTypeUtils$$.$isPie$($newChart_newLabels$$) ? ($arOldList$$.push($handler$$9_i$$147_oldChart$$1$$.$pieChart$), $arNewList$$.push($newChart_newLabels$$.$pieChart$)) : D.$DvtAnimOnDC$$.$_buildAnimLists$($arOldList$$, $handler$$9_i$$147_oldChart$$1$$, $arNewList$$, $newChart_newLabels$$, $duration$$10$$);
  var $playable$$3$$;
  $handler$$9_i$$147_oldChart$$1$$ = new D.$DvtDataAnimationHandler$$($ctx_type$$70$$, $delContainer$$);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$9_i$$147_oldChart$$1$$, $arOldList$$, $arNewList$$);
  0 < $handler$$9_i$$147_oldChart$$1$$.$_playables$.length && ($playable$$3$$ = $handler$$9_i$$147_oldChart$$1$$.$getAnimation$(D.$JSCompiler_alias_TRUE$$));
  $newChart_newLabels$$ = (0,D.$JSCompiler_StaticMethods_getDataLabels$$)($newChart_newLabels$$);
  if($playable$$3$$ && 0 < $newChart_newLabels$$.length) {
    for($handler$$9_i$$147_oldChart$$1$$ = 0;$handler$$9_i$$147_oldChart$$1$$ < $newChart_newLabels$$.length;$handler$$9_i$$147_oldChart$$1$$++) {
      $newChart_newLabels$$[$handler$$9_i$$147_oldChart$$1$$].$setAlpha$(0)
    }
    $playable$$3$$ = new D.$DvtSequentialPlayable$$($ctx_type$$70$$, $playable$$3$$, new D.$DvtAnimFadeIn$$($ctx_type$$70$$, $newChart_newLabels$$, $duration$$10$$ / 4))
  }
  return $playable$$3$$
};
D.$DvtAnimOnDC$$.$_buildAnimLists$ = function $$DvtAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$148$$, $oldChart$$2$$, $arNewList$$1$$, $newChart$$1$$, $duration$$11$$) {
  var $j$$26$$, $ar$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($oldChart$$2$$), $aOut$$ = $arOldList$$1_i$$148$$, $peer$$2$$, $obj$$61$$, $dch$$;
  for($arOldList$$1_i$$148$$ = 0;2 > $arOldList$$1_i$$148$$;$arOldList$$1_i$$148$$++) {
    for($j$$26$$ = 0;$j$$26$$ < $ar$$.length;$j$$26$$++) {
      $peer$$2$$ = $ar$$[$j$$26$$];
      $obj$$61$$ = $peer$$2$$.$getDisplayables$()[0];
      $dch$$ = D.$JSCompiler_alias_NULL$$;
      if($obj$$61$$ instanceof D.$DvtFunnelSlice$$) {
        $dch$$ = new D.$DvtDCFunnelSlice$$($peer$$2$$, $duration$$11$$)
      }else {
        if($obj$$61$$ instanceof D.$DvtChartBar$$ || $obj$$61$$ instanceof D.$DvtChartPolarBar$$) {
          $dch$$ = new D.$DvtDCChart2DBar$$($peer$$2$$, $duration$$11$$)
        }else {
          if($obj$$61$$ instanceof D.$DvtChartLineArea$$) {
            $dch$$ = new D.$DvtDCChartLineArea$$($peer$$2$$, $duration$$11$$)
          }else {
            if($obj$$61$$ instanceof D.$DvtSimpleMarker$$) {
              if($obj$$61$$ instanceof D.$DvtChartLineMarker$$ && !$obj$$61$$.$isSelected$()) {
                continue
              }
              $dch$$ = new D.$DvtDCChartMarker$$($peer$$2$$, $duration$$11$$)
            }else {
              if($obj$$61$$ instanceof D.$DvtChartRangeMarker$$) {
                if($obj$$61$$.$_isInvisible$ && !$obj$$61$$.$isSelected$()) {
                  continue
                }
                $dch$$ = new D.$DvtDCChartRangeMarker$$($peer$$2$$, $duration$$11$$)
              }else {
                $obj$$61$$ instanceof D.$DvtChartCandlestick$$ && ($dch$$ = new D.$DvtDCChartAbstract$$($peer$$2$$, $duration$$11$$))
              }
            }
          }
        }
      }
      $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$2$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($newChart$$1$$)
  }
};
D.$DvtAnimOnDC$$.$_canAnimate$ = function $$DvtAnimOnDC$$$$_canAnimate$$($oldChart$$3$$, $newChart$$2$$) {
  return D.$DvtChartTypeUtils$$.$isPie$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isPie$($newChart$$2$$) ? $oldChart$$3$$ && $newChart$$2$$ : D.$DvtChartTypeUtils$$.$isPolar$($oldChart$$3$$) != D.$DvtChartTypeUtils$$.$isPolar$($newChart$$2$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isBLAC$($newChart$$2$$) ? D.$JSCompiler_alias_TRUE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($newChart$$2$$) ? 
  D.$JSCompiler_alias_TRUE$$ : $oldChart$$3$$.$getType$() == $newChart$$2$$.$getType$() ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDCChart$$ = function $$DvtDCChart$$$($chart$$25$$) {
  this.$Options$ = $chart$$25$$.$Options$;
  this.$Peers$ = $chart$$25$$.$Peers$;
  this.$SeriesStyleArray$ = $chart$$25$$.$SeriesStyleArray$;
  this.$Cache$ = $chart$$25$$.$Cache$;
  this.$pieChart$ = $chart$$25$$.$pieChart$
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart$$, D.$DvtChart$$, "DvtDCChart");
D.$DvtDCChartAbstract$$ = function $$DvtDCChartAbstract$$$($peer$$7$$, $duration$$20$$) {
  this.Init($peer$$7$$, $duration$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartAbstract$$, D.$DvtObj$$, "DvtDCChartAbstract");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartAbstract$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$13$$, $oldNode$$2$$) {
  var $oldShape$$ = $oldNode$$2$$.$_shape$;
  this.$_shape$ && this.$_shape$.$getUpdateAnimation$ && $handler$$13$$.add(this.$_shape$.$getUpdateAnimation$(this.$_updateDuration$, $oldShape$$), 1)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$14$$) {
  if(this.$_shape$ && this.$_shape$.$getInsertAnimation$) {
    $handler$$14$$.add(this.$_shape$.$getInsertAnimation$(this.$_insertDuration$), 2)
  }else {
    var $nodePlayable$$5$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $handler$$14$$.add($nodePlayable$$5$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$15$$, $delContainer$$2$$) {
  $delContainer$$2$$.$addChild$(this.$_shape$);
  if(this.$_shape$ && this.$_shape$.$getDeleteAnimation$) {
    $handler$$15$$.add(this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$), 0)
  }else {
    var $nodePlayable$$6$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $handler$$15$$.add($nodePlayable$$6$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_animId$");
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$8$$, $duration$$21$$) {
  this.$_peer$ = $peer$$8$$;
  this.$_updateDuration$ = 0.75 * $duration$$21$$;
  this.$_insertDuration$ = 0.5 * $duration$$21$$;
  this.$_deleteDuration$ = 0.5 * $duration$$21$$;
  this.$_shape$ = $peer$$8$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$8$$.$getSeries$() + "/" + $peer$$8$$.$getGroup$()
};
D.$DvtDCChart2DBar$$ = function $$DvtDCChart2DBar$$$($peer$$5$$, $duration$$18$$) {
  this.Init($peer$$5$$, $duration$$18$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart2DBar$$, D.$DvtDCChartAbstract$$, "DvtDCChart2DBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChart2DBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$6$$, $duration$$19$$) {
  D.$DvtDCChart2DBar$$.$superclass$.Init.call(this, $peer$$6$$, $duration$$19$$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$;
  this.$_animId$ += "/bar"
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$10$$) {
  var $playable$$4$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
  $handler$$10$$.add($playable$$4$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$11$$, $delContainer$$1$$) {
  $delContainer$$1$$.$addChild$(this.$_shape$);
  var $playable$$5$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
  $handler$$11$$.add($playable$$5$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$12$$, $oldDC$$) {
  var $nodePlayable$$4_oldChart$$4$$ = this.$_oldChart$, $newChart$$3$$ = this.$_peer$.$_chart$, $bFlip_endState$$2$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($nodePlayable$$4_oldChart$$4$$) != D.$DvtChartTypeUtils$$.$isHorizontal$($newChart$$3$$), $startState$$ = $oldDC$$.$_getAnimationParams$($bFlip_endState$$2$$), $bFlip_endState$$2$$ = this.$_getAnimationParams$(), $bSkipFillAnimation$$ = $oldDC$$.$_shape$.$isSelected$() || this.$_shape$.$isSelected$(), $startFill$$ = $oldDC$$.$_shape$.$getPrimaryFill$().$clone$(), 
  $endFill$$ = this.$_shape$.$getPrimaryFill$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$, $bFlip_endState$$2$$) || !$startFill$$.$equals$($endFill$$)) {
    var $newSIdx$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$ = $oldDC$$.$_peer$.$getSeriesIndex$(), $newGIdx$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$ = $oldDC$$.$_peer$.$getGroupIndex$();
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$3$$) && (this.$_indicator$ = D.$DvtDCChartUtils$$.$makeIndicator$($nodePlayable$$4_oldChart$$4$$, $oldSIdx$$, $oldGIdx$$, $newChart$$3$$, $newSIdx$$, $newGIdx$$));
    this.$_setAnimationParams$($startState$$);
    $bSkipFillAnimation$$ || this.$_shape$.$setFill$($startFill$$);
    $nodePlayable$$4_oldChart$$4$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$4_oldChart$$4$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $bFlip_endState$$2$$);
    $bSkipFillAnimation$$ || (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$4_oldChart$$4$$.$_animator$, "typeFill", this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $endFill$$);
    this.$_indicator$ && ($nodePlayable$$4_oldChart$$4$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
    $handler$$12$$.add($nodePlayable$$4_oldChart$$4$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($bFlip$$1$$) {
  return this.$_shape$.$getAnimationParams$($bFlip$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$1$$) {
  this.$_shape$.$setAnimationParams$($ar$$1$$, this.$_indicator$)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDCChartLineArea$$ = function $$DvtDCChartLineArea$$$($peer$$9$$, $duration$$22$$) {
  this.Init($peer$$9$$, $duration$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartLineArea$$, D.$DvtDCChartAbstract$$, "DvtDCChartLineArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$16$$, $oldDC$$1$$) {
  this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
  this.$_coords$ = this.$_shape$.$_arCoord$;
  var $i$$152_isArea$$ = this.$_shape$.$isArea$(), $nodePlayable$$7_oldChart$$5$$ = this.$_oldChart$, $newChart$$4$$ = this.$_chart$, $newSIdx$$1$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$1$$ = $oldDC$$1$$.$_peer$.$getSeriesIndex$(), $newGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)(this.$_shape$, $oldDC$$1$$.$_shape$), $oldGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)($oldDC$$1$$.$_shape$, this.$_shape$), $baseAnim$$1$$;
  if($i$$152_isArea$$) {
    var $JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$ = $oldDC$$1$$.$_getBaseAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$ = this.$_getBaseAnimationParams$($oldDC$$1$$.$_shape$);
    (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$);
    D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$) || (this.$_setBaseAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$), $baseAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getBaseAnimationParams$, 
    this.$_setBaseAnimationParams$, $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$))
  }
  var $topAnim$$1$$, $JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$ = $oldDC$$1$$.$_getAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$ = this.$_getAnimationParams$($oldDC$$1$$.$_shape$);
  (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$);
  D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$) || (this.$_setAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$), $topAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($topAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, 
  this.$_setAnimationParams$, $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$));
  if("none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$4$$) && !($i$$152_isArea$$ && "lineWithArea" == this.$_peer$.$getSeriesType$())) {
    for(var $direction$$12_direction$$inline_2154$$, $indicator_indicator$$inline_2155$$, $i$$152_isArea$$ = 0;$i$$152_isArea$$ < $newGIdcs$$.length;$i$$152_isArea$$++) {
      if($direction$$12_direction$$inline_2154$$ = D.$DvtDCChartUtils$$.$getDirection$($nodePlayable$$7_oldChart$$5$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$152_isArea$$], $newChart$$4$$, $newSIdx$$1$$, $newGIdcs$$[$i$$152_isArea$$]), $indicator_indicator$$inline_2155$$ = D.$DvtDCChartUtils$$.$makeIndicator$($nodePlayable$$7_oldChart$$5$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$152_isArea$$], $newChart$$4$$, $newSIdx$$1$$, $newGIdcs$$[$i$$152_isArea$$])) {
        $JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$ = this.$_shape$, $baseEndState$$1_endState$$3_groupIndex$$inline_2153$$ = $newGIdcs$$[$i$$152_isArea$$], $indicator_indicator$$inline_2155$$.$setAlpha$(0), $JSCompiler_StaticMethods_addIndicator$self$$inline_2152_baseStartState_startState$$1$$.$_indicatorMap$[$baseEndState$$1_endState$$3_groupIndex$$inline_2153$$] = {direction:$direction$$12_direction$$inline_2154$$, $indicator$:$indicator_indicator$$inline_2155$$}
      }
    }
  }
  if($baseAnim$$1$$ || $topAnim$$1$$) {
    $nodePlayable$$7_oldChart$$5$$ = new D.$DvtParallelPlayable$$(this.$_context$, $baseAnim$$1$$, $topAnim$$1$$), $nodePlayable$$7_oldChart$$5$$.$setOnEnd$(this.$_onAnimationEnd$, this), $handler$$16$$.add($nodePlayable$$7_oldChart$$5$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$17$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$8$$ = new D.$DvtAnimFadeIn$$(this.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$17$$.add($nodePlayable$$8$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$18$$, $delContainer$$3$$) {
  var $areaContainer_nodePlayable$$9$$;
  "area" == D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($areaContainer_nodePlayable$$9$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $areaContainer_nodePlayable$$9$$ && ($areaContainer_nodePlayable$$9$$.$addChild$(this.$_deletedAreas$), $areaContainer_nodePlayable$$9$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $areaContainer_nodePlayable$$9$$.$setOnEnd$(this.$_removeDeletedAreas$, 
  this), $handler$$18$$.add($areaContainer_nodePlayable$$9$$, 0))) : ($delContainer$$3$$.$addChild$(this.$_shape$), $areaContainer_nodePlayable$$9$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $handler$$18$$.add($areaContainer_nodePlayable$$9$$, 0))
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  var $areaContainer$$1$$ = this.$_chart$.$_areaContainer$;
  $areaContainer$$1$$ && $areaContainer$$1$$.removeChild(this.$_deletedAreas$)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($otherShape$$) {
  return this.$_shape$.$getAnimationParams$($otherShape$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$11$$) {
  this.$_shape$.$setAnimationParams$($params$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$_getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getBaseAnimationParams$$($otherShape$$1$$) {
  return this.$_shape$.$getBaseAnimationParams$($otherShape$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setBaseAnimationParams$$($params$$12$$) {
  this.$_shape$.$setBaseAnimationParams$($params$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  var $JSCompiler_StaticMethods_removeIndicators$self$$inline_2157$$ = this.$_shape$, $groupIndex$$inline_2158$$;
  for($groupIndex$$inline_2158$$ in $JSCompiler_StaticMethods_removeIndicators$self$$inline_2157$$.$_indicatorMap$) {
    var $indicator$$inline_2159$$ = $JSCompiler_StaticMethods_removeIndicators$self$$inline_2157$$.$_indicatorMap$[$groupIndex$$inline_2158$$].$indicator$;
    $indicator$$inline_2159$$ && $indicator$$inline_2159$$.getParent().removeChild($indicator$$inline_2159$$)
  }
  $JSCompiler_StaticMethods_removeIndicators$self$$inline_2157$$.$_indicatorMap$ = {};
  this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$)
};
D.$DvtDCChartLineArea$_matchGroupIndices$$ = function $$DvtDCChartLineArea$_matchGroupIndices$$$($startParams$$, $endParams$$) {
  for(var $i$$153$$ = 3;$i$$153$$ < $startParams$$.length;$i$$153$$ += 4) {
    $startParams$$[$i$$153$$] = $endParams$$[$i$$153$$]
  }
};
D.$DvtDCChartLineArea$$.prototype.Init = function $$DvtDCChartLineArea$$$$Init$($peer$$10$$, $duration$$23$$) {
  D.$DvtDCChartLineArea$$.$superclass$.Init.call(this, $peer$$10$$, $duration$$23$$);
  this.$_context$ = this.$_shape$.$getCtx$();
  this.$_chart$ = this.$_peer$.$_chart$;
  this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line")
};
D.$DvtDCChartMarker$$ = function $$DvtDCChartMarker$$$($peer$$11$$, $duration$$24$$) {
  this.Init($peer$$11$$, $duration$$24$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$19$$, $oldDC$$2$$) {
  var $startRect$$ = $oldDC$$2$$.$_shape$.$getCenterDimensions$(), $endRect$$ = this.$_shape$.$getCenterDimensions$();
  if(!$endRect$$.$equals$($startRect$$)) {
    this.$_shape$.$setCenterDimensions$($startRect$$);
    var $nodePlayable$$10$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$10$$.$_animator$, "typeRectangle", this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, $endRect$$);
    var $chart$$27_overlay$$ = this.$_peer$.$_chart$, $bRet$$inline_2163_oldSIdx$$inline_2164$$ = D.$JSCompiler_alias_FALSE$$;
    if($oldDC$$2$$) {
      var $bRet$$inline_2163_oldSIdx$$inline_2164$$ = $oldDC$$2$$.$_peer$.$getSeriesIndex$(), $oldGIdx$$inline_2165$$ = $oldDC$$2$$.$_peer$.$getGroupIndex$(), $newSIdx$$inline_2166$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_2167$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_2168$$ = $oldDC$$2$$.$_oldChart$.$getOptions$(), $newData$$inline_2169$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_2170$$ = $oldData$$inline_2168$$.series[$bRet$$inline_2163_oldSIdx$$inline_2164$$].items[$oldGIdx$$inline_2165$$].y, 
      $oldZ$$inline_2171$$ = $oldData$$inline_2168$$.series[$bRet$$inline_2163_oldSIdx$$inline_2164$$].items[$oldGIdx$$inline_2165$$].z, $newY$$inline_2172$$ = $newData$$inline_2169$$.series[$newSIdx$$inline_2166$$].items[$newGIdx$$inline_2167$$].y, $newZ$$inline_2173$$ = $newData$$inline_2169$$.series[$newSIdx$$inline_2166$$].items[$newGIdx$$inline_2167$$].z, $bRet$$inline_2163_oldSIdx$$inline_2164$$ = $newData$$inline_2169$$.series[$newSIdx$$inline_2166$$].items[$newGIdx$$inline_2167$$].x !== $oldData$$inline_2168$$.series[$bRet$$inline_2163_oldSIdx$$inline_2164$$].items[$oldGIdx$$inline_2165$$].x || 
      $newY$$inline_2172$$ !== $oldY$$inline_2170$$ || $newZ$$inline_2173$$ !== $oldZ$$inline_2171$$
    }
    $bRet$$inline_2163_oldSIdx$$inline_2164$$ && ("none" != D.$DvtChartStyleUtils$$.$getAnimationIndicators$($chart$$27_overlay$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$27_overlay$$)) && ($chart$$27_overlay$$ = $oldDC$$2$$.$_shape$, $chart$$27_overlay$$.$setSolidFill$("#FFFF2B", 0.9), $chart$$27_overlay$$.$setCenterDimensions$($startRect$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($chart$$27_overlay$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$10$$.$_animator$, 
    "typeRectangle", $chart$$27_overlay$$, $chart$$27_overlay$$.$getCenterDimensions$, $chart$$27_overlay$$.$setCenterDimensions$, $endRect$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$10$$.$_animator$, "typeNumber", $chart$$27_overlay$$, $chart$$27_overlay$$.$getAlpha$, $chart$$27_overlay$$.$setAlpha$, 0), this.$_overlay$ = $chart$$27_overlay$$, $nodePlayable$$10$$.$setOnEnd$(this.$_onEndAnimation$, this));
    $handler$$19$$.add($nodePlayable$$10$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$20$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$11$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
  $handler$$20$$.add($nodePlayable$$11$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$21$$, $delContainer$$4$$) {
  $delContainer$$4$$.$addChild$(this.$_shape$);
  var $nodePlayable$$12$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
  $handler$$21$$.add($nodePlayable$$12$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$12$$, $duration$$25$$) {
  D.$DvtDCChartMarker$$.$superclass$.Init.call(this, $peer$$12$$, $duration$$25$$);
  this.$_animId$ += "/marker"
};
D.$DvtDCChartRangeMarker$$ = function $$DvtDCChartRangeMarker$$$($peer$$13$$, $duration$$26$$) {
  this.Init($peer$$13$$, $duration$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartRangeMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartRangeMarker");
D.$DvtDCChartRangeMarker$$.prototype.Init = function $$DvtDCChartRangeMarker$$$$Init$($peer$$14$$, $duration$$27$$) {
  D.$DvtDCChartRangeMarker$$.$superclass$.Init.call(this, $peer$$14$$, $duration$$27$$);
  this.$_animId$ += "/rangeMarker"
};
D.$DvtDCChartRangeMarker$$.prototype.$animateInsert$ = function $$DvtDCChartRangeMarker$$$$$animateInsert$$($handler$$22$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$13$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
  $handler$$22$$.add($nodePlayable$$13$$, 2)
};
D.$DvtDCChartRangeMarker$$.prototype.$animateDelete$ = function $$DvtDCChartRangeMarker$$$$$animateDelete$$($handler$$23$$, $delContainer$$5$$) {
  $delContainer$$5$$.$addChild$(this.$_shape$);
  var $nodePlayable$$14$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
  $handler$$23$$.add($nodePlayable$$14$$, 0)
};
D.$DvtDCChartRangeMarker$$.prototype.$animateUpdate$ = function $$DvtDCChartRangeMarker$$$$$animateUpdate$$($handler$$24$$, $oldDC$$4$$) {
  var $nodePlayable$$15_start$$25$$ = $oldDC$$4$$.$_shape$.$getAnimationParams$(), $end$$11$$ = this.$_shape$.$getAnimationParams$();
  this.$_shape$.$setAnimationParams$($nodePlayable$$15_start$$25$$);
  $nodePlayable$$15_start$$25$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$15_start$$25$$.$_animator$, "typeNumberArray", this.$_shape$, this.$_shape$.$getAnimationParams$, this.$_shape$.$setAnimationParams$, $end$$11$$);
  $handler$$24$$.add($nodePlayable$$15_start$$25$$, 1)
};
D.$DvtDCChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartUtils$$, D.$DvtObj$$, "DvtDCChartUtils");
D.$DvtDCChartUtils$$.$DIR_UP$ = 0;
D.$DvtDCChartUtils$$.$DIR_DOWN$ = 1;
D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ = 2;
D.$DvtDCChartUtils$$.$makeIndicator$ = function $$DvtDCChartUtils$$$$makeIndicator$$($bDown_indicator$$1_oldChart$$6_uiDirection$$, $fc$$1_oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($newChart$$5$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $bDown_indicator$$1_oldChart$$6_uiDirection$$ = D.$DvtDCChartUtils$$.$getDirection$($bDown_indicator$$1_oldChart$$6_uiDirection$$, $fc$$1_oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$);
  if($bDown_indicator$$1_oldChart$$6_uiDirection$$ == D.$DvtDCChartUtils$$.$DIR_NOCHANGE$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $fc$$1_oldSIdx$$3$$ = ($bDown_indicator$$1_oldChart$$6_uiDirection$$ = $bDown_indicator$$1_oldChart$$6_uiDirection$$ === D.$DvtDCChartUtils$$.$DIR_DOWN$) ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$5$$) : D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$5$$);
  $bDown_indicator$$1_oldChart$$6_uiDirection$$ = D.$DvtDCChartUtils$$.$_drawIndicator$($newChart$$5$$.$getCtx$(), $bDown_indicator$$1_oldChart$$6_uiDirection$$, D.$DvtChartTypeUtils$$.$isHorizontal$($newChart$$5$$), $fc$$1_oldSIdx$$3$$);
  $newChart$$5$$.$getPlotArea$().$addChild$($bDown_indicator$$1_oldChart$$6_uiDirection$$);
  return $bDown_indicator$$1_oldChart$$6_uiDirection$$
};
D.$DvtDCChartUtils$$.$getDirection$ = function $$DvtDCChartUtils$$$$getDirection$$($oldChart$$7_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$, $newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$) {
  $oldChart$$7_oldValue$$ = D.$DvtChartDataUtils$$.getValue($oldChart$$7_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$);
  $newChart$$6_newValue$$ = D.$DvtChartDataUtils$$.getValue($newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$);
  return $newChart$$6_newValue$$ == D.$JSCompiler_alias_NULL$$ || $oldChart$$7_oldValue$$ == D.$JSCompiler_alias_NULL$$ || $newChart$$6_newValue$$ == $oldChart$$7_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ : $newChart$$6_newValue$$ > $oldChart$$7_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_UP$ : D.$DvtDCChartUtils$$.$DIR_DOWN$
};
D.$DvtDCChartUtils$$.$_drawIndicator$ = function $$DvtDCChartUtils$$$$_drawIndicator$$($context$$33_ret$$3$$, $bDown$$1_ptrCmds$$, $bHoriz$$3$$, $fc$$2$$) {
  $bDown$$1_ptrCmds$$ = $bHoriz$$3$$ ? ((0,D.$DvtAgent$isRightToLeft$$)($context$$33_ret$$3$$) ? !$bDown$$1_ptrCmds$$ : $bDown$$1_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown$$1_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$33_ret$$3$$ = new D.$DvtPath$$($context$$33_ret$$3$$, $bDown$$1_ptrCmds$$);
  $context$$33_ret$$3$$.$setSolidFill$($fc$$2$$);
  return $context$$33_ret$$3$$
};
D.$DvtDCFunnelSlice$$ = function $$DvtDCFunnelSlice$$$($peer$$15$$, $duration$$28$$) {
  this.Init($peer$$15$$, $duration$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCFunnelSlice$$, D.$DvtDCChartAbstract$$, "DvtDCFunnelSlice");
D.$DvtDCFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtDCFunnelSlice$$$$$animateUpdate$$($handler$$25$$, $oldDC$$5$$) {
  var $obj$$64$$ = this.$_shape$, $nodePlayable$$16_startState$$2$$ = $oldDC$$5$$.$_shape$.$getAnimationParams$(), $endState$$4$$ = $obj$$64$$.$getAnimationParams$(), $startFill$$1$$ = $oldDC$$5$$.$_shape$.$getFill$().$clone$(), $endFill$$1$$ = this.$_shape$.$getFill$();
  if(!D.$DvtArrayUtils$$.$equals$($nodePlayable$$16_startState$$2$$, $endState$$4$$) || !$startFill$$1$$.$equals$($endFill$$1$$)) {
    $obj$$64$$.$setAnimationParams$($nodePlayable$$16_startState$$2$$), this.$_shape$.$setFill$($startFill$$1$$), $nodePlayable$$16_startState$$2$$ = new D.$DvtCustomAnimation$$($obj$$64$$.$getCtx$(), this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$16_startState$$2$$.$_animator$, "typeNumberArray", $obj$$64$$, $obj$$64$$.$getAnimationParams$, $obj$$64$$.$setAnimationParams$, $endState$$4$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$16_startState$$2$$.$_animator$, 
    "typeFill", this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $endFill$$1$$), this.$_indicator$ && $nodePlayable$$16_startState$$2$$.$setOnEnd$(this.$_onEndAnimation$, this), $handler$$25$$.add($nodePlayable$$16_startState$$2$$, 1)
  }
};
D.$DvtDCFunnelSlice$$.prototype.$animateInsert$ = function $$DvtDCFunnelSlice$$$$$animateInsert$$($handler$$26$$) {
  var $obj$$65$$ = this.$_shape$, $endState$$5$$ = $obj$$65$$.$getAnimationParams$(), $nodePlayable$$17_startState$$3$$ = $endState$$5$$.slice(0);
  $nodePlayable$$17_startState$$3$$[0] += $nodePlayable$$17_startState$$3$$[1] / 2;
  $nodePlayable$$17_startState$$3$$[1] = 0;
  $nodePlayable$$17_startState$$3$$[3] = 0;
  $obj$$65$$.$setAnimationParams$($nodePlayable$$17_startState$$3$$);
  $nodePlayable$$17_startState$$3$$ = new D.$DvtCustomAnimation$$($obj$$65$$.$getCtx$(), this, this.$_insertDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$17_startState$$3$$.$_animator$, "typeNumberArray", $obj$$65$$, $obj$$65$$.$getAnimationParams$, $obj$$65$$.$setAnimationParams$, $endState$$5$$);
  $handler$$26$$.add($nodePlayable$$17_startState$$3$$, 2)
};
D.$DvtDCFunnelSlice$$.prototype.$animateDelete$ = function $$DvtDCFunnelSlice$$$$$animateDelete$$($handler$$27$$, $delContainer$$6$$) {
  var $obj$$66$$ = this.$_shape$;
  $delContainer$$6$$.$addChild$($obj$$66$$);
  var $nodePlayable$$18_startState$$4$$ = $obj$$66$$.$getAnimationParams$(), $endState$$6$$ = $nodePlayable$$18_startState$$4$$.slice(0);
  $endState$$6$$[0] += $nodePlayable$$18_startState$$4$$[1] / 2;
  $endState$$6$$[1] = 0;
  $endState$$6$$[3] = 0;
  $nodePlayable$$18_startState$$4$$ = new D.$DvtCustomAnimation$$($obj$$66$$.$getCtx$(), this, this.$_deleteDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$18_startState$$4$$.$_animator$, "typeNumberArray", $obj$$66$$, $obj$$66$$.$getAnimationParams$, $obj$$66$$.$setAnimationParams$, $endState$$6$$);
  $handler$$27$$.add($nodePlayable$$18_startState$$4$$, 0)
};
D.$DvtDCFunnelSlice$$.prototype.Init = function $$DvtDCFunnelSlice$$$$Init$($peer$$16$$, $duration$$29$$) {
  D.$DvtDCFunnelSlice$$.$superclass$.Init.call(this, $peer$$16$$, $duration$$29$$);
  this.$_animId$ += "/funnel"
};
D.$DvtChartAxisUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisUtils$$, D.$DvtObj$$, "DvtChartAxisUtils");
D.$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$110$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$110$$) ? "tangential" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$110$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$110$$.$getCtx$()) ? "right" : "left" : "bottom"
};
D.$DvtChartAxisUtils$$.$getBaselineScaling$ = function $$DvtChartAxisUtils$$$$getBaselineScaling$$($chart$$111$$, $type$$83$$) {
  var $baselineScaling$$ = $chart$$111$$.$getOptions$()[$type$$83$$ + "Axis"].baselineScaling;
  return $baselineScaling$$ && ("zero" == $baselineScaling$$ || "min" == $baselineScaling$$) ? $baselineScaling$$ : D.$DvtChartTypeUtils$$.$isStock$($chart$$111$$) ? "min" : "zero"
};
D.$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$112$$) {
  var $position$$24$$ = $chart$$112$$.$getOptions$().yAxis.position;
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$112$$)) {
    return"radial"
  }
  if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$112$$)) {
    return $position$$24$$ && ("top" == $position$$24$$ || "bottom" == $position$$24$$) ? $position$$24$$ : "bottom"
  }
  D.$DvtChartTypeUtils$$.$isStock$($chart$$112$$) && ($position$$24$$ = $position$$24$$ ? $position$$24$$ : "end");
  return(0,D.$DvtAgent$isRightToLeft$$)($chart$$112$$.$getCtx$()) ? $position$$24$$ && "end" == $position$$24$$ ? "left" : "right" : $position$$24$$ && "end" == $position$$24$$ ? "right" : "left"
};
D.$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$113$$) {
  var $position$$25$$ = $chart$$113$$.$getOptions$().y2Axis.position;
  return D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$113$$) ? $position$$25$$ && ("top" == $position$$25$$ || "bottom" == $position$$25$$) ? $position$$25$$ : "top" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$113$$.$getCtx$()) ? $position$$25$$ && "start" == $position$$25$$ ? "right" : "left" : $position$$25$$ && "start" == $position$$25$$ ? "left" : "right"
};
D.$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$114$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$114$$) && "disabled" != D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$114$$)
};
D.$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$115$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$115$$) && "disabled" == D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$115$$)
};
D.$DvtChartAxisUtils$$.$getTimeAxisType$ = function $$DvtChartAxisUtils$$$$getTimeAxisType$$($chart$$116$$) {
  var $timeAxisType$$1$$ = $chart$$116$$.$getOptions$().timeAxisType;
  return $timeAxisType$$1$$ && "auto" != $timeAxisType$$1$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$116$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$116$$) ? $timeAxisType$$1$$ : D.$DvtChartTypeUtils$$.$isStock$($chart$$116$$) ? "skipGaps" : "disabled"
};
D.$DvtChartAxisUtils$$.$isMixedFrequency$ = function $$DvtChartAxisUtils$$$$isMixedFrequency$$($chart$$117$$) {
  return"mixedFrequency" == D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$117$$)
};
D.$DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($chart$$118$$) {
  var $axisOffset$$1_groupSeparators_maxOffset$$ = $chart$$118$$.$Cache$.axisOffset;
  if($axisOffset$$1_groupSeparators_maxOffset$$ != D.$JSCompiler_alias_NULL$$) {
    return $axisOffset$$1_groupSeparators_maxOffset$$
  }
  $axisOffset$$1_groupSeparators_maxOffset$$ = $chart$$118$$.$getOptions$().styleDefaults.groupSeparators;
  D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$118$$) && 1 < D.$DvtChartDataUtils$$.$getNumLevels$($chart$$118$$) && "on" == $axisOffset$$1_groupSeparators_maxOffset$$.rendered ? $axisOffset$$1_groupSeparators_maxOffset$$ = 0.5 : D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$118$$) || D.$DvtChartTypeUtils$$.$hasCenteredSeries$($chart$$118$$) || D.$DvtChartTypeUtils$$.$hasCandlestickSeries$($chart$$118$$) || D.$DvtChartTypeUtils$$.$isBLAC$($chart$$118$$) && 1 == D.$DvtChartDataUtils$$.$getGroupCount$($chart$$118$$) ? 
  $axisOffset$$1_groupSeparators_maxOffset$$ = 0.5 : (0,D.$DvtChartDefaults$isPostAltaSkin$$)($chart$$118$$) && !D.$DvtChartTypeUtils$$.$isSpark$($chart$$118$$) && !D.$DvtChartEventUtils$$.$isScrollable$($chart$$118$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$118$$) ? ($axisOffset$$1_groupSeparators_maxOffset$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$118$$) ? 0.2 : 0.5, $axisOffset$$1_groupSeparators_maxOffset$$ -= $axisOffset$$1_groupSeparators_maxOffset$$ / window.Math.sqrt(D.$DvtChartDataUtils$$.$getGroupCount$($chart$$118$$))) : 
  $axisOffset$$1_groupSeparators_maxOffset$$ = 0;
  return $chart$$118$$.$Cache$.axisOffset = $axisOffset$$1_groupSeparators_maxOffset$$
};
D.$DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($chart$$119$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$119$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$11$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$119$$), $i$$189$$ = 0;$i$$189$$ < $seriesCount$$11$$;$i$$189$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$119$$, $i$$189$$)) {
      var $seriesType$$4$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$119$$, $i$$189$$), $lineType$$4$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$119$$, $i$$189$$);
      if("bar" != $seriesType$$4$$ && "centeredSegmented" != $lineType$$4$$ && "centeredStepped" != $lineType$$4$$) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$120$$) {
  return!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$120$$) || D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$120$$) ? D.$JSCompiler_alias_FALSE$$ : "polygon" == $chart$$120$$.$getOptions$().polarGridShape
};
D.$DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($chart$$121$$, $type$$84$$) {
  if("y" == $type$$84$$ && D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$121$$) || "y2" == $type$$84$$ && !D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$121$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $axisOptions$$7$$ = $chart$$121$$.$getOptions$()[$type$$84$$ + "Axis"];
  return"off" == $axisOptions$$7$$.rendered || "off" == $axisOptions$$7$$.tickLabel.rendered && !$axisOptions$$7$$.title ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isAxisLineRendered$ = function $$DvtChartAxisUtils$$$$isAxisLineRendered$$($chart$$122$$, $type$$85$$) {
  var $axisOptions$$8$$ = $chart$$122$$.$getOptions$()[$type$$85$$ + "Axis"];
  return"off" == $axisOptions$$8$$.rendered || "off" == $axisOptions$$8$$.axisLine.rendered ? D.$JSCompiler_alias_FALSE$$ : "auto" == $axisOptions$$8$$.axisLine.rendered && "x" != $type$$85$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$122$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$122$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isMajorTickRendered$ = function $$DvtChartAxisUtils$$$$isMajorTickRendered$$($chart$$123$$, $type$$86$$) {
  var $axisOptions$$9$$ = $chart$$123$$.$getOptions$()[$type$$86$$ + "Axis"];
  return"off" == $axisOptions$$9$$.rendered || "off" == $axisOptions$$9$$.majorTick.rendered ? D.$JSCompiler_alias_FALSE$$ : "auto" == $axisOptions$$9$$.majorTick.rendered && "x" == $type$$86$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$123$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$123$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isMinorTickRendered$ = function $$DvtChartAxisUtils$$$$isMinorTickRendered$$($chart$$124$$, $type$$87$$) {
  var $axisOptions$$10$$ = $chart$$124$$.$getOptions$()[$type$$87$$ + "Axis"];
  return"off" == $axisOptions$$10$$.rendered || "off" == $axisOptions$$10$$.minorTick.rendered ? D.$JSCompiler_alias_FALSE$$ : "on" == $axisOptions$$10$$.minorTick.rendered ? D.$JSCompiler_alias_TRUE$$ : D.$DvtChartAxisUtils$$.$isLog$($chart$$124$$, $type$$87$$)
};
D.$DvtChartAxisUtils$$.$isLog$ = function $$DvtChartAxisUtils$$$$isLog$$($chart$$125$$, $type$$88$$) {
  var $axisOptions$$11$$ = $chart$$125$$.$getOptions$()[$type$$88$$ + "Axis"], $minMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$125$$, $type$$88$$, D.$JSCompiler_alias_TRUE$$);
  return"log" == $axisOptions$$11$$.scale && 0 < $minMax$$.min && 0 < $minMax$$.max
};
D.$DvtChartAxisUtils$$.$getTickLabelFontSize$ = function $$DvtChartAxisUtils$$$$getTickLabelFontSize$$($chart$$126$$, $type$$89$$) {
  var $options$$62$$ = $chart$$126$$.$getOptions$(), $tickLabelStyle$$ = $options$$62$$[$type$$89$$ + "Axis"].tickLabel.style;
  $tickLabelStyle$$ instanceof D.$DvtCSSStyle$$ || ($tickLabelStyle$$ = new D.$DvtCSSStyle$$($tickLabelStyle$$));
  (0,D.$JSCompiler_StaticMethods_mergeUnder$$)($tickLabelStyle$$, (0,D.$DvtAxis$getDefaults$$)($options$$62$$.skin).tickLabel.style);
  return D.$DvtTextUtils$$.$getTextStringHeight$($chart$$126$$.$getCtx$(), $tickLabelStyle$$) * (11 / 14)
};
D.$DvtChartAxisUtils$$.$getTickLabelGapSize$ = function $$DvtChartAxisUtils$$$$getTickLabelGapSize$$($chart$$127$$, $type$$90$$) {
  if(D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$127$$, $type$$90$$)) {
    return 0
  }
  var $gapHeight$$1_options$$63$$ = $chart$$127$$.$getOptions$(), $isHoriz$$10$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$127$$), $scalingFactor$$1$$ = D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$127$$, $type$$90$$), $gapWidth$$1$$ = window.Math.ceil($gapHeight$$1_options$$63$$.layout.tickLabelGapWidth * $scalingFactor$$1$$), $gapHeight$$1_options$$63$$ = window.Math.ceil($gapHeight$$1_options$$63$$.layout.tickLabelGapHeight * $scalingFactor$$1$$);
  return"x" == $type$$90$$ ? $isHoriz$$10$$ ? $gapWidth$$1$$ : $gapHeight$$1_options$$63$$ : $isHoriz$$10$$ ? $gapHeight$$1_options$$63$$ : $gapWidth$$1$$
};
D.$DvtChartAxisUtils$$.$getGapScalingFactor$ = function $$DvtChartAxisUtils$$$$getGapScalingFactor$$($chart$$128$$, $type$$91$$) {
  return D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$128$$, $type$$91$$) ? D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$128$$, $type$$91$$) / 11 : 0
};
D.$DvtChartAxisUtils$$.$isTickLabelInside$ = function $$DvtChartAxisUtils$$$$isTickLabelInside$$($chart$$129$$, $type$$92$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$129$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$129$$) || D.$DvtChartTypeUtils$$.$isBLAC$($chart$$129$$) && "x" == $type$$92$$ ? D.$JSCompiler_alias_FALSE$$ : "inside" == $chart$$129$$.$getOptions$()[$type$$92$$ + "Axis"].tickLabel.position
};
D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisViewportMinMax$$($chart$$130$$, $useGlobal$$) {
  var $options$$64$$ = $chart$$130$$.$getOptions$().xAxis, $isGroupAxis$$2$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$130$$), $groupOffset$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$130$$);
  if($useGlobal$$) {
    var $globalMinMax$$ = D.$DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($chart$$130$$)
  }
  var $min$$2$$ = D.$JSCompiler_alias_NULL$$;
  $options$$64$$.viewportMin != D.$JSCompiler_alias_NULL$$ ? $min$$2$$ = $options$$64$$.viewportMin : $options$$64$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ ? $min$$2$$ = $isGroupAxis$$2$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$130$$, $options$$64$$.viewportStartGroup) - $groupOffset$$ : $options$$64$$.viewportStartGroup : $useGlobal$$ && ($min$$2$$ = $globalMinMax$$.min);
  var $max$$2$$ = D.$JSCompiler_alias_NULL$$;
  $options$$64$$.viewportMax != D.$JSCompiler_alias_NULL$$ ? $max$$2$$ = $options$$64$$.viewportMax : $options$$64$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ ? $max$$2$$ = $isGroupAxis$$2$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$130$$, $options$$64$$.viewportEndGroup) + $groupOffset$$ : $options$$64$$.viewportEndGroup : $useGlobal$$ && ($max$$2$$ = $globalMinMax$$.max);
  return{min:$min$$2$$, max:$max$$2$$}
};
D.$DvtChartAxisUtils$$.$getXAxisGlobalMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisGlobalMinMax$$($chart$$131$$) {
  var $options$$65$$ = $chart$$131$$.$getOptions$().xAxis, $isGroupAxis$$3$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$131$$), $groupOffset$$1$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$131$$);
  if(!$isGroupAxis$$3$$) {
    var $minMax$$1$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$131$$, "x")
  }
  var $min$$3$$ = D.$JSCompiler_alias_NULL$$, $min$$3$$ = $options$$65$$.min != D.$JSCompiler_alias_NULL$$ ? $options$$65$$.min : $isGroupAxis$$3$$ ? 0 - $groupOffset$$1$$ : $minMax$$1$$.min, $max$$3$$ = D.$JSCompiler_alias_NULL$$, $max$$3$$ = $options$$65$$.max != D.$JSCompiler_alias_NULL$$ ? $options$$65$$.max : $isGroupAxis$$3$$ ? D.$DvtChartDataUtils$$.$getGroupCount$($chart$$131$$) - 1 + $groupOffset$$1$$ : $minMax$$1$$.max;
  return{min:$min$$3$$, max:$max$$3$$}
};
D.$DvtChartAxisUtils$$.$applyInitialZooming$ = function $$DvtChartAxisUtils$$$$applyInitialZooming$$($chart$$132$$, $availSpace$$77$$) {
  var $options$$66$$ = $chart$$132$$.$getOptions$(), $axisOptions$$13$$ = $options$$66$$.xAxis, $axisWidth_globalMin_initialZooming$$ = $options$$66$$.initialZooming;
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$132$$) && !("off" == $options$$66$$.zoomAndScroll || "none" == $axisWidth_globalMin_initialZooming$$)) {
    $options$$66$$._initialZoomed && ("last" == $axisWidth_globalMin_initialZooming$$ ? $axisOptions$$13$$.viewportMin = D.$JSCompiler_alias_NULL$$ : $axisOptions$$13$$.viewportMax = D.$JSCompiler_alias_NULL$$);
    var $viewportMax$$1_viewportMinMax$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$132$$, D.$JSCompiler_alias_FALSE$$), $viewportMin$$1$$ = $viewportMax$$1_viewportMinMax$$.min, $viewportMax$$1_viewportMinMax$$ = $viewportMax$$1_viewportMinMax$$.max;
    if(!("last" == $axisWidth_globalMin_initialZooming$$ && $viewportMin$$1$$ != D.$JSCompiler_alias_NULL$$ || "first" == $axisWidth_globalMin_initialZooming$$ && $viewportMax$$1_viewportMinMax$$ != D.$JSCompiler_alias_NULL$$)) {
      var $axisWidth_globalMin_initialZooming$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$132$$) ? $availSpace$$77$$.$h$ : $availSpace$$77$$.$w$, $maxNumGroups_maxViewportSize$$ = window.Math.floor($axisWidth_globalMin_initialZooming$$ / (2.5 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$132$$, "x"))) + D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$132$$), $numGroups$$5$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$132$$) - 1;
      if(!($numGroups$$5$$ <= $maxNumGroups_maxViewportSize$$)) {
        var $globalMax_globalMinMax$$1$$;
        D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$132$$) ? ($axisWidth_globalMin_initialZooming$$ = 0, $globalMax_globalMinMax$$1$$ = $numGroups$$5$$) : ($globalMax_globalMinMax$$1$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$132$$, "x"), $axisWidth_globalMin_initialZooming$$ = $globalMax_globalMinMax$$1$$.min, $globalMax_globalMinMax$$1$$ = $globalMax_globalMinMax$$1$$.max);
        $maxNumGroups_maxViewportSize$$ = $maxNumGroups_maxViewportSize$$ / $numGroups$$5$$ * ($globalMax_globalMinMax$$1$$ - $axisWidth_globalMin_initialZooming$$);
        "last" == $options$$66$$.initialZooming ? ($viewportMax$$1_viewportMinMax$$ == D.$JSCompiler_alias_NULL$$ && ($viewportMax$$1_viewportMinMax$$ = $globalMax_globalMinMax$$1$$), $axisOptions$$13$$.viewportMin = window.Math.max($viewportMax$$1_viewportMinMax$$ - $maxNumGroups_maxViewportSize$$, $axisWidth_globalMin_initialZooming$$)) : ($viewportMin$$1$$ == D.$JSCompiler_alias_NULL$$ && ($viewportMin$$1$$ = $axisWidth_globalMin_initialZooming$$), $axisOptions$$13$$.viewportMax = window.Math.min($viewportMin$$1$$ + 
        $maxNumGroups_maxViewportSize$$, $globalMax_globalMinMax$$1$$));
        $options$$66$$._initialZoomed = D.$JSCompiler_alias_TRUE$$
      }
    }
  }
};
D.$DvtChartAxisUtils$$.$getGroupWidthRatios$ = function $$DvtChartAxisUtils$$$$getGroupWidthRatios$$($barWidthSum_chart$$133$$) {
  if(!D.$DvtChartTypeUtils$$.$hasBarSeries$($barWidthSum_chart$$133$$) && !D.$DvtChartTypeUtils$$.$hasCandlestickSeries$($barWidthSum_chart$$133$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $options$$67$$ = $barWidthSum_chart$$133$$.$getOptions$(), $barGapRatio_groupWidths$$ = D.$DvtChartStyleUtils$$.$getBarGapRatio$($barWidthSum_chart$$133$$);
  if(1 <= $barGapRatio_groupWidths$$) {
    return $options$$67$$._averageGroupZ = window.Infinity, D.$JSCompiler_alias_NULL$$
  }
  $options$$67$$._averageGroupZ = 0;
  for(var $numGroups$$6$$ = D.$DvtChartDataUtils$$.$getGroupCount$($barWidthSum_chart$$133$$), $isSplitDualY$$1$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($barWidthSum_chart$$133$$), $categories$$3$$ = D.$DvtChartDataUtils$$.$getStackCategories$($barWidthSum_chart$$133$$, "bar"), $barWidths$$ = [], $yWidth$$, $y2Width$$, $i$$190$$, $g$$6$$ = 0;$g$$6$$ < $numGroups$$6$$;$g$$6$$++) {
    for($i$$190$$ = $yWidth$$ = 0;$i$$190$$ < $categories$$3$$.y.length;$i$$190$$++) {
      $yWidth$$ += D.$DvtChartDataUtils$$.$getBarCategoryZ$($barWidthSum_chart$$133$$, $categories$$3$$.y[$i$$190$$], $g$$6$$, D.$JSCompiler_alias_FALSE$$)
    }
    for($i$$190$$ = $y2Width$$ = 0;$i$$190$$ < $categories$$3$$.y2.length;$i$$190$$++) {
      $y2Width$$ += D.$DvtChartDataUtils$$.$getBarCategoryZ$($barWidthSum_chart$$133$$, $categories$$3$$.y2[$i$$190$$], $g$$6$$, D.$JSCompiler_alias_TRUE$$)
    }
    $barWidths$$.push($isSplitDualY$$1$$ ? window.Math.max($yWidth$$, $y2Width$$) : $yWidth$$ + $y2Width$$)
  }
  $barWidthSum_chart$$133$$ = $barWidths$$.reduce(function($barWidthSum_chart$$133$$, $options$$67$$) {
    return $barWidthSum_chart$$133$$ + $options$$67$$
  });
  var $gapWidthSum$$ = $barWidthSum_chart$$133$$ * $barGapRatio_groupWidths$$ / (1 - $barGapRatio_groupWidths$$), $barGapRatio_groupWidths$$ = $barWidths$$.map(function($barWidthSum_chart$$133$$) {
    return $barWidthSum_chart$$133$$ + $gapWidthSum$$ / $numGroups$$6$$
  });
  $options$$67$$._averageGroupZ = ($barWidthSum_chart$$133$$ + $gapWidthSum$$) / $numGroups$$6$$;
  return $barGapRatio_groupWidths$$
};
D.$DvtChartDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataUtils$$, D.$DvtObj$$, "DvtChartDataUtils");
D.$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$134$$) {
  var $options$$68_seriesCount$$12$$ = $chart$$134$$.$getOptions$();
  if(!$options$$68_seriesCount$$12$$ || !$options$$68_seriesCount$$12$$.series || 1 > $options$$68_seriesCount$$12$$.series.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $options$$68_seriesCount$$12$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$134$$), $i$$191$$ = 0;$i$$191$$ < $options$$68_seriesCount$$12$$;$i$$191$$++) {
    var $seriesItem$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$134$$, $i$$191$$);
    if($seriesItem$$2$$ && $seriesItem$$2$$.items && 1 <= $seriesItem$$2$$.items.length) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasInvalidData$ = function $$DvtChartDataUtils$$$$hasInvalidData$$($chart$$135$$) {
  return!D.$DvtChartDataUtils$$.$hasData$($chart$$135$$) || D.$DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$135$$)
};
D.$DvtChartDataUtils$$.$hasInvalidTimeData$ = function $$DvtChartDataUtils$$$$hasInvalidTimeData$$($chart$$136$$) {
  if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$136$$) || D.$DvtChartTypeUtils$$.$isPie$($chart$$136$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $groupIndex$$24_options$$69$$ = $chart$$136$$.$getOptions$(), $groupCount$$5$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$136$$);
  if(!$groupIndex$$24_options$$69$$ || (!$groupIndex$$24_options$$69$$.series || 1 > $groupIndex$$24_options$$69$$.series.length) || 1 > $groupCount$$5$$) {
    return D.$JSCompiler_alias_TRUE$$
  }
  var $groupItem$$1_seriesIndex$$43$$, $seriesCount$$13$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$136$$);
  if(D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$136$$)) {
    for($groupItem$$1_seriesIndex$$43$$ = 0;$groupItem$$1_seriesIndex$$43$$ < $seriesCount$$13$$;$groupItem$$1_seriesIndex$$43$$++) {
      for($groupIndex$$24_options$$69$$ = 0;$groupIndex$$24_options$$69$$ < $groupCount$$5$$;$groupIndex$$24_options$$69$$++) {
        var $dataItem$$12$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$136$$, $groupItem$$1_seriesIndex$$43$$, $groupIndex$$24_options$$69$$);
        if($dataItem$$12$$ && ($dataItem$$12$$.x == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataItem$$12$$.x))) {
          return D.$JSCompiler_alias_TRUE$$
        }
      }
    }
  }else {
    if(D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$136$$)) {
      for($groupIndex$$24_options$$69$$ = 0;$groupIndex$$24_options$$69$$ < $groupCount$$5$$;$groupIndex$$24_options$$69$$++) {
        if($groupItem$$1_seriesIndex$$43$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$136$$, $groupIndex$$24_options$$69$$), $groupItem$$1_seriesIndex$$43$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupItem$$1_seriesIndex$$43$$)) {
          return D.$JSCompiler_alias_TRUE$$
        }
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$137$$, $seriesIndex$$44$$) {
  var $dataItems$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$137$$, $seriesIndex$$44$$).items;
  if($dataItems$$) {
    for(var $i$$192$$ = 0;$i$$192$$ < $dataItems$$.length;$i$$192$$++) {
      if($dataItems$$[$i$$192$$] != D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$138$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$138$$)) {
    var $options$$70_refObjs$$1$$ = $chart$$138$$.$getOptions$();
    D.$DvtChartTypeUtils$$.$isValidType$($chart$$138$$) || ($options$$70_refObjs$$1$$.type = "bar");
    var $isStock_total$$2_volumeItem$$ = D.$DvtChartTypeUtils$$.$isStock$($chart$$138$$);
    $isStock_total$$2_volumeItem$$ && ($options$$70_refObjs$$1$$._hasVolume = D.$JSCompiler_alias_FALSE$$, 1 < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$138$$) && ($options$$70_refObjs$$1$$.series = $options$$70_refObjs$$1$$.series.slice(0, 1)));
    for(var $groups$$2_maxGroups$$ = 0, $arSeriesStyle_value$$100$$ = $chart$$138$$.$SeriesStyleArray$, $groupItems_seriesCount$$14$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$138$$), $i$$193_volumeSeries$$ = 0;$i$$193_volumeSeries$$ < $groupItems_seriesCount$$14$$;$i$$193_volumeSeries$$++) {
      var $groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$138$$, $i$$193_volumeSeries$$);
      $groupCount$$6_itemIndex$$5_j$$33_series$$7$$ != D.$JSCompiler_alias_NULL$$ && 0 > D.$DvtArrayUtils$$.$getIndex$($arSeriesStyle_value$$100$$, $groupCount$$6_itemIndex$$5_j$$33_series$$7$$) && $arSeriesStyle_value$$100$$.push($groupCount$$6_itemIndex$$5_j$$33_series$$7$$);
      var $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$138$$, $i$$193_volumeSeries$$);
      $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items && $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items.length > $groups$$2_maxGroups$$) && ($groups$$2_maxGroups$$ = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items.length);
      if("hidden" == $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.visibility) {
        var $hiddenCategories$$1_items$$4$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$138$$);
        0 > D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$1_items$$4$$, $groupCount$$6_itemIndex$$5_j$$33_series$$7$$) && $hiddenCategories$$1_items$$4$$.push($groupCount$$6_itemIndex$$5_j$$33_series$$7$$)
      }
      $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.visibility = D.$JSCompiler_alias_NULL$$;
      if($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items) {
        $hiddenCategories$$1_items$$4$$ = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items;
        for($groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = 0;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$ < $hiddenCategories$$1_items$$4$$.length;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$++) {
          $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$] && (!(0,window.isNaN)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$]) && $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$] ? $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$] = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$]) : (!D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$138$$) && 
          $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].x && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].x = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].x)), $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].y && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].y = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].y)), 
          $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].z && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].z = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].z)), $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].value && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].value = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].value)), 
          $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].targetValue && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].targetValue = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].targetValue)), $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].open && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].open = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].open)), 
          $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].close && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].close = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].close)), $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].low && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].low = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].low)), 
          $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].high && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].high = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].high)), $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].volume && ($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].volume = (0,window.Number)($hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].volume), 
          $options$$70_refObjs$$1$$._hasVolume = D.$JSCompiler_alias_TRUE$$)))
        }
      }
    }
    if($isStock_total$$2_volumeItem$$ && D.$DvtChartDataUtils$$.$hasVolumeSeries$($chart$$138$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$138$$)) {
      $i$$193_volumeSeries$$ = D.$DvtJSONUtils$$.$clone$(D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$138$$, 0));
      $i$$193_volumeSeries$$.assignedToY2 = "on";
      $i$$193_volumeSeries$$.type = "bar";
      $i$$193_volumeSeries$$.categories = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.categories || [D.$DvtChartDataUtils$$.$getSeries$($chart$$138$$, 0)];
      $i$$193_volumeSeries$$.id = "_volume";
      $i$$193_volumeSeries$$._selectable = "off";
      $i$$193_volumeSeries$$.items = [];
      for($groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = 0;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$ < $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items.length;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$++) {
        $isStock_total$$2_volumeItem$$ = {}, $isStock_total$$2_volumeItem$$.color = D.$DvtChartStyleUtils$$.$getStockVolumeColor$($chart$$138$$, $groupCount$$6_itemIndex$$5_j$$33_series$$7$$), $isStock_total$$2_volumeItem$$.x = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].x, $isStock_total$$2_volumeItem$$.value = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$].volume, $i$$193_volumeSeries$$.items.push($isStock_total$$2_volumeItem$$)
      }
      $options$$70_refObjs$$1$$.series.push($i$$193_volumeSeries$$)
    }
    $options$$70_refObjs$$1$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$138$$);
    for($i$$193_volumeSeries$$ = 0;$i$$193_volumeSeries$$ < $options$$70_refObjs$$1$$.length;$i$$193_volumeSeries$$++) {
      if($hiddenCategories$$1_items$$4$$ = $options$$70_refObjs$$1$$[$i$$193_volumeSeries$$].items) {
        for($groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = 0;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$ < $hiddenCategories$$1_items$$4$$.length;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$++) {
          if($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$]) {
            (0,window.isNaN)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$) ? (!D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$138$$) && $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.x && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.x = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.x)), $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.max && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.max = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.max)), 
            $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.min && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.min = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.min)), $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.value && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.value = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.value))) : $hiddenCategories$$1_items$$4$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$] = 
            (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$)
          }
        }
      }
    }
    $options$$70_refObjs$$1$$ = $chart$$138$$.$getOptions$();
    $options$$70_refObjs$$1$$.groups || ($options$$70_refObjs$$1$$.groups = []);
    $groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$138$$);
    for($i$$193_volumeSeries$$ = 0;$i$$193_volumeSeries$$ < $groups$$2_maxGroups$$ - $groupCount$$6_itemIndex$$5_j$$33_series$$7$$;$i$$193_volumeSeries$$++) {
      $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = (0,D.$DvtBundle$getTranslation$$)($options$$70_refObjs$$1$$, "labelDefaultGroupName", "DvtChartBundle", "DEFAULT_GROUP_NAME", $options$$70_refObjs$$1$$.groups.length + 1), $options$$70_refObjs$$1$$.groups.push($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$)
    }
    $chart$$138$$.$Cache$.groupsArray = D.$JSCompiler_alias_NULL$$;
    D.$DvtChartDataUtils$$.$_processTimeAxis$($chart$$138$$);
    $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = $options$$70_refObjs$$1$$.sorting;
    $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = "on" == $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ ? "descending" : "ascending" != $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && "descending" != $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ ? "off" : $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$;
    if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$138$$) && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$138$$) && "off" != $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && 1 == D.$DvtChartDataUtils$$.$getNumLevels$($chart$$138$$)) {
      for(var $groups$$2_maxGroups$$ = D.$DvtChartDataUtils$$.$getGroups$($chart$$138$$), $totalsMap$$ = {}, $groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = 0;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$ < $groups$$2_maxGroups$$.length;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$++) {
        for($i$$193_volumeSeries$$ = $isStock_total$$2_volumeItem$$ = 0;$i$$193_volumeSeries$$ <= $groupItems_seriesCount$$14$$;$i$$193_volumeSeries$$++) {
          D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$138$$, $i$$193_volumeSeries$$) && !D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$138$$, $i$$193_volumeSeries$$) && ($arSeriesStyle_value$$100$$ = D.$DvtChartDataUtils$$.getValue($chart$$138$$, $i$$193_volumeSeries$$, $groupCount$$6_itemIndex$$5_j$$33_series$$7$$), $isStock_total$$2_volumeItem$$ += $arSeriesStyle_value$$100$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($arSeriesStyle_value$$100$$) ? 0 : $arSeriesStyle_value$$100$$)
        }
        $totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$]] = {index:$groupCount$$6_itemIndex$$5_j$$33_series$$7$$, total:$isStock_total$$2_volumeItem$$, group:$options$$70_refObjs$$1$$.groups[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$]}
      }
      "ascending" == $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ ? $groups$$2_maxGroups$$.sort(function($chart$$138$$, $options$$70_refObjs$$1$$) {
        return $totalsMap$$[$chart$$138$$].total - $totalsMap$$[$options$$70_refObjs$$1$$].total
      }) : $groups$$2_maxGroups$$.sort(function($chart$$138$$, $options$$70_refObjs$$1$$) {
        return $totalsMap$$[$options$$70_refObjs$$1$$].total - $totalsMap$$[$chart$$138$$].total
      });
      for($i$$193_volumeSeries$$ = 0;$i$$193_volumeSeries$$ < $groupItems_seriesCount$$14$$;$i$$193_volumeSeries$$++) {
        $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = [];
        for($groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = 0;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$ < $groups$$2_maxGroups$$.length;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$++) {
          $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.push(D.$DvtChartDataUtils$$.$getDataItem$($chart$$138$$, $i$$193_volumeSeries$$, $totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$]].index))
        }
        $options$$70_refObjs$$1$$.series[$i$$193_volumeSeries$$].items = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$
      }
      $groupItems_seriesCount$$14$$ = [];
      for($groupCount$$6_itemIndex$$5_j$$33_series$$7$$ = 0;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$ < $groups$$2_maxGroups$$.length;$groupCount$$6_itemIndex$$5_j$$33_series$$7$$++) {
        $groupItems_seriesCount$$14$$.push($totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$6_itemIndex$$5_j$$33_series$$7$$]].group)
      }
      $options$$70_refObjs$$1$$.groups = $groupItems_seriesCount$$14$$;
      $chart$$138$$.$Cache$ = {}
    }
    D.$DvtChartDataUtils$$.$_sanitizeAxis$($options$$70_refObjs$$1$$.xAxis);
    D.$DvtChartDataUtils$$.$_sanitizeAxis$($options$$70_refObjs$$1$$.yAxis);
    D.$DvtChartDataUtils$$.$_sanitizeAxis$($options$$70_refObjs$$1$$.y2Axis)
  }
};
D.$DvtChartDataUtils$$.$_sanitizeAxis$ = function $$DvtChartDataUtils$$$$_sanitizeAxis$$($axisOptions$$14$$) {
  $axisOptions$$14$$.min == $axisOptions$$14$$.max && ($axisOptions$$14$$.min = D.$JSCompiler_alias_NULL$$, $axisOptions$$14$$.max = D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartDataUtils$$.$_sanitizeDateTime$ = function $$DvtChartDataUtils$$$$_sanitizeDateTime$$($context$$51$$, $dateTime$$) {
  var $ret$$9$$ = D.$JSCompiler_alias_NULL$$, $isoToDateConverter$$ = $context$$51$$.$getLocaleHelpers$.isoToDateConverter;
  if($isoToDateConverter$$) {
    try {
      $ret$$9$$ = $isoToDateConverter$$($dateTime$$)
    }catch($err$$) {
      $ret$$9$$ = D.$JSCompiler_alias_NULL$$
    }
    $ret$$9$$ != D.$JSCompiler_alias_NULL$$ && ($ret$$9$$ = $ret$$9$$.getTime())
  }
  $ret$$9$$ == D.$JSCompiler_alias_NULL$$ && ($ret$$9$$ = window.Date.parse($dateTime$$));
  (0,window.isNaN)($ret$$9$$) && ($ret$$9$$ = (0,window.Number)($dateTime$$));
  return $ret$$9$$
};
D.$DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($chart$$139_refObjs$$2$$) {
  var $context$$52$$ = $chart$$139_refObjs$$2$$.$getCtx$(), $i$$194_options$$71_xOptions$$ = $chart$$139_refObjs$$2$$.$getOptions$(), $group$$17_seriesIndex$$45$$, $groupIndex$$25_items$$5$$, $seriesCount$$15$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$139_refObjs$$2$$), $groupCount$$7_j$$34$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$139_refObjs$$2$$);
  if(D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$139_refObjs$$2$$)) {
    for($group$$17_seriesIndex$$45$$ = 0;$group$$17_seriesIndex$$45$$ < $seriesCount$$15$$;$group$$17_seriesIndex$$45$$++) {
      for($groupIndex$$25_items$$5$$ = 0;$groupIndex$$25_items$$5$$ < $groupCount$$7_j$$34$$;$groupIndex$$25_items$$5$$++) {
        var $dataItem$$13$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$139_refObjs$$2$$, $group$$17_seriesIndex$$45$$, $groupIndex$$25_items$$5$$);
        $dataItem$$13$$ != D.$JSCompiler_alias_NULL$$ && "string" == typeof $dataItem$$13$$.x && $dataItem$$13$$.x != D.$JSCompiler_alias_NULL$$ && ($dataItem$$13$$.x = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $dataItem$$13$$.x))
      }
    }
  }else {
    if(D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$139_refObjs$$2$$)) {
      for($groupIndex$$25_items$$5$$ = 0;$groupIndex$$25_items$$5$$ < $groupCount$$7_j$$34$$;$groupIndex$$25_items$$5$$++) {
        $group$$17_seriesIndex$$45$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$139_refObjs$$2$$, $groupIndex$$25_items$$5$$), $group$$17_seriesIndex$$45$$ != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.groups[$groupIndex$$25_items$$5$$] = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $group$$17_seriesIndex$$45$$))
      }
      $chart$$139_refObjs$$2$$.$Cache$.groupsArray = D.$JSCompiler_alias_NULL$$
    }
  }
  if(D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$139_refObjs$$2$$)) {
    $i$$194_options$$71_xOptions$$ = $i$$194_options$$71_xOptions$$.xAxis;
    $i$$194_options$$71_xOptions$$.dataMin != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.dataMin = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.dataMin));
    $i$$194_options$$71_xOptions$$.dataMax != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.dataMax = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.dataMax));
    $i$$194_options$$71_xOptions$$.min != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.min = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.min));
    $i$$194_options$$71_xOptions$$.max != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.max = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.max));
    $i$$194_options$$71_xOptions$$.viewportMin != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.viewportMin = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.viewportMin));
    $i$$194_options$$71_xOptions$$.viewportMax != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.viewportMax = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.viewportMax));
    $i$$194_options$$71_xOptions$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.viewportStartGroup = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.viewportStartGroup));
    $i$$194_options$$71_xOptions$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && ($i$$194_options$$71_xOptions$$.viewportEndGroup = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $i$$194_options$$71_xOptions$$.viewportEndGroup));
    $chart$$139_refObjs$$2$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$139_refObjs$$2$$);
    for($i$$194_options$$71_xOptions$$ = 0;$i$$194_options$$71_xOptions$$ < $chart$$139_refObjs$$2$$.length;$i$$194_options$$71_xOptions$$++) {
      if($groupIndex$$25_items$$5$$ = $chart$$139_refObjs$$2$$[$i$$194_options$$71_xOptions$$].items) {
        for($groupCount$$7_j$$34$$ = 0;$groupCount$$7_j$$34$$ < $groupIndex$$25_items$$5$$.length;$groupCount$$7_j$$34$$++) {
          $groupIndex$$25_items$$5$$[$groupCount$$7_j$$34$$].x != D.$JSCompiler_alias_NULL$$ && ($groupIndex$$25_items$$5$$[$groupCount$$7_j$$34$$].x = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$52$$, $groupIndex$$25_items$$5$$[$groupCount$$7_j$$34$$].x))
        }
      }
    }
  }
};
D.$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$140$$) {
  return $chart$$140$$.$getOptions$().series.length
};
D.$DvtChartDataUtils$$.$getY2SeriesCount$ = function $$DvtChartDataUtils$$$$getY2SeriesCount$$($chart$$141$$) {
  for(var $y2SeriesCount$$ = 0, $seriesCount$$16$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$141$$), $seriesIndex$$46$$ = 0;$seriesIndex$$46$$ < $seriesCount$$16$$;$seriesIndex$$46$$++) {
    D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$141$$, $seriesIndex$$46$$) && $y2SeriesCount$$++
  }
  return $y2SeriesCount$$
};
D.$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$142$$, $seriesIndex$$47$$) {
  var $seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$142$$, $seriesIndex$$47$$);
  return $seriesItem$$5$$ ? $seriesItem$$5$$.id ? $seriesItem$$5$$.id : $seriesItem$$5$$.name || "" == $seriesItem$$5$$.name ? $seriesItem$$5$$.name : (0,window.String)($seriesIndex$$47$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$143$$, $seriesIndex$$48$$) {
  var $seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$143$$, $seriesIndex$$48$$);
  return $seriesItem$$6$$ && ($seriesItem$$6$$.name || "" == $seriesItem$$6$$.name) ? $seriesItem$$6$$.name : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$144$$, $series$$8$$) {
  for(var $numSeries$$1$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$144$$), $seriesIndex$$49$$ = 0;$seriesIndex$$49$$ < $numSeries$$1$$;$seriesIndex$$49$$++) {
    if(D.$DvtChartDataUtils$$.$getSeries$($chart$$144$$, $seriesIndex$$49$$) == $series$$8$$) {
      return $seriesIndex$$49$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$145$$, $series$$9$$) {
  return $series$$9$$ ? D.$DvtArrayUtils$$.$getIndex$($chart$$145$$.$SeriesStyleArray$, $series$$9$$) : D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$145$$, $series$$9$$)
};
D.$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$146$$, $seriesIndex$$50$$) {
  if((0,window.isNaN)($seriesIndex$$50$$) || $seriesIndex$$50$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $options$$72$$ = $chart$$146$$.$getOptions$();
  if($options$$72$$.series && $options$$72$$.series.length > $seriesIndex$$50$$) {
    return $options$$72$$.series[$seriesIndex$$50$$]
  }
};
D.$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$147_seriesItem$$7$$, $seriesIndex$$51$$, $groupIndex$$26$$) {
  return(0,window.isNaN)($groupIndex$$26$$) || $groupIndex$$26$$ == D.$JSCompiler_alias_NULL$$ || 0 > $groupIndex$$26$$ ? D.$JSCompiler_alias_NULL$$ : ($chart$$147_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$147_seriesItem$$7$$, $seriesIndex$$51$$)) && $chart$$147_seriesItem$$7$$.items && $chart$$147_seriesItem$$7$$.items.length > $groupIndex$$26$$ ? $chart$$147_seriesItem$$7$$.items[$groupIndex$$26$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$148$$) {
  return D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$148$$).length
};
D.$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$149$$, $groupIndex$$27$$) {
  if(0 <= $groupIndex$$27$$ && $groupIndex$$27$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$149$$)) {
    var $group$$18$$ = D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$149$$)[$groupIndex$$27$$];
    if($group$$18$$) {
      return $group$$18$$.id ? $group$$18$$.id : $group$$18$$.name || "" == $group$$18$$.name ? $group$$18$$.name : $group$$18$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$150$$, $group$$19$$) {
  for(var $groups$$3$$ = D.$DvtChartDataUtils$$.$getGroups$($chart$$150$$), $i$$195$$ = 0;$i$$195$$ < $groups$$3$$.length;$i$$195$$++) {
    if($group$$19$$ instanceof window.Array && $groups$$3$$[$i$$195$$] instanceof window.Array ? D.$DvtArrayUtils$$.$equals$($group$$19$$, $groups$$3$$[$i$$195$$]) : $group$$19$$ == $groups$$3$$[$i$$195$$]) {
      return $i$$195$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$151$$, $groupIndex$$28$$) {
  if(0 <= $groupIndex$$28$$ && $groupIndex$$28$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$151$$)) {
    var $group$$20$$ = D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$151$$)[$groupIndex$$28$$];
    if($group$$20$$) {
      return $group$$20$$.name ? $group$$20$$.name : $group$$20$$.id != D.$JSCompiler_alias_NULL$$ ? "" : $group$$20$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$152$$) {
  for(var $groupCount$$8$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$152$$), $groups$$4$$ = [], $groupIndex$$29$$ = 0;$groupIndex$$29$$ < $groupCount$$8$$;$groupIndex$$29$$++) {
    $groups$$4$$.push(D.$DvtChartDataUtils$$.$getGroup$($chart$$152$$, $groupIndex$$29$$))
  }
  return $groups$$4$$
};
D.$DvtChartDataUtils$$.$_getGroupsArray$ = function $$DvtChartDataUtils$$$$_getGroupsArray$$($chart$$153$$) {
  var $i$$196_options$$73$$ = $chart$$153$$.$getOptions$(), $groupsArray$$1$$ = $chart$$153$$.$Cache$.groupsArray;
  if(!$groupsArray$$1$$) {
    $groupsArray$$1$$ = [];
    $i$$196_options$$73$$.groups && ($groupsArray$$1$$ = D.$DvtChartDataUtils$$.$_getNestedGroups$($i$$196_options$$73$$.groups, $groupsArray$$1$$));
    for($i$$196_options$$73$$ = 0;$i$$196_options$$73$$ < $groupsArray$$1$$.length;$i$$196_options$$73$$++) {
      1 == $groupsArray$$1$$[$i$$196_options$$73$$].id.length && ($groupsArray$$1$$[$i$$196_options$$73$$].id = $groupsArray$$1$$[$i$$196_options$$73$$].id[0], $groupsArray$$1$$[$i$$196_options$$73$$].name = $groupsArray$$1$$[$i$$196_options$$73$$].name[0])
    }
    $chart$$153$$.$Cache$.groupsArray = $groupsArray$$1$$
  }
  return $groupsArray$$1$$
};
D.$DvtChartDataUtils$$.$_getNestedGroups$ = function $$DvtChartDataUtils$$$$_getNestedGroups$$($groupObject$$, $groupsArray$$2$$) {
  if($groupObject$$) {
    for(var $i$$197$$ = 0;$i$$197$$ < $groupObject$$.length;$i$$197$$++) {
      var $array$$10_groupElement$$ = $groupObject$$[$i$$197$$], $elementId$$ = $array$$10_groupElement$$.id ? $array$$10_groupElement$$.id : $array$$10_groupElement$$.name ? $array$$10_groupElement$$.name : $array$$10_groupElement$$, $elementName$$1$$ = $array$$10_groupElement$$.name ? $array$$10_groupElement$$.name : $array$$10_groupElement$$;
      "object" == typeof $elementId$$ && ($elementId$$ = D.$JSCompiler_alias_NULL$$);
      "object" == typeof $elementName$$1$$ && ($elementName$$1$$ = D.$JSCompiler_alias_NULL$$);
      if($array$$10_groupElement$$.groups) {
        ($array$$10_groupElement$$ = D.$DvtChartDataUtils$$.$_getNestedGroups$($array$$10_groupElement$$.groups, [])) || ($array$$10_groupElement$$ = [{id:[], name:[]}]);
        for(var $j$$35$$ = 0;$j$$35$$ < $array$$10_groupElement$$.length;$j$$35$$++) {
          $array$$10_groupElement$$[$j$$35$$].id.unshift($elementId$$), $array$$10_groupElement$$[$j$$35$$].name.unshift($elementName$$1$$)
        }
        $groupsArray$$2$$ = $groupsArray$$2$$.concat($array$$10_groupElement$$)
      }else {
        $groupsArray$$2$$.push({id:[$elementId$$], name:[$elementName$$1$$]})
      }
    }
    return $groupsArray$$2$$
  }
};
D.$DvtChartDataUtils$$.$getNumLevels$ = function $$DvtChartDataUtils$$$$getNumLevels$$($chart$$154_groupsArray$$3$$) {
  $chart$$154_groupsArray$$3$$ = D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$154_groupsArray$$3$$);
  for(var $numLevels$$2$$ = 0, $i$$198$$ = 0;$i$$198$$ < $chart$$154_groupsArray$$3$$.length;$i$$198$$++) {
    var $group$$21_length$$12$$ = $chart$$154_groupsArray$$3$$[$i$$198$$];
    $group$$21_length$$12$$ && $group$$21_length$$12$$.id && ($group$$21_length$$12$$ = D.$DvtArrayUtils$$.isArray($group$$21_length$$12$$.id) ? $group$$21_length$$12$$.id.length : 1, $numLevels$$2$$ = window.Math.max($numLevels$$2$$, $group$$21_length$$12$$))
  }
  return $numLevels$$2$$
};
D.$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$155$$, $seriesIndex$$52$$, $groupIndex$$30$$) {
  var $val$$19$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$155$$, "value", $seriesIndex$$52$$, $groupIndex$$30$$);
  if($val$$19$$ !== D.$JSCompiler_alias_VOID$$) {
    return $val$$19$$
  }
  var $val$$19$$ = D.$JSCompiler_alias_NULL$$, $dataItem$$14$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$155$$, $seriesIndex$$52$$, $groupIndex$$30$$);
  $dataItem$$14$$ != D.$JSCompiler_alias_NULL$$ && ((0,window.isNaN)($dataItem$$14$$) ? D.$DvtChartTypeUtils$$.$isStock$($chart$$155$$) && $dataItem$$14$$.close != D.$JSCompiler_alias_NULL$$ ? $val$$19$$ = $dataItem$$14$$.close : $dataItem$$14$$.value != D.$JSCompiler_alias_NULL$$ ? $val$$19$$ = $dataItem$$14$$.value : $dataItem$$14$$.y != D.$JSCompiler_alias_NULL$$ && ($val$$19$$ = $dataItem$$14$$.y) : $val$$19$$ = $dataItem$$14$$);
  (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$155$$, "value", $seriesIndex$$52$$, $groupIndex$$30$$, $val$$19$$);
  return $val$$19$$
};
D.$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$156$$, $seriesIndex$$53$$, $groupIndex$$31$$, $bIncludeHiddenSeries$$1$$) {
  var $cacheKey$$4$$ = $bIncludeHiddenSeries$$1$$ ? "cumValueH" : "cumValue", $cumVal$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$156$$, $cacheKey$$4$$, $seriesIndex$$53$$, $groupIndex$$31$$);
  if($cumVal$$ !== D.$JSCompiler_alias_VOID$$) {
    return $cumVal$$
  }
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$156$$)) {
    for(var $seriesType$$5$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$156$$, $seriesIndex$$53$$), $bAssignedToY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$156$$, $seriesIndex$$53$$), $cumVal$$ = 0, $category$$4$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$156$$, $seriesIndex$$53$$), $i$$199$$ = 0;$i$$199$$ <= $seriesIndex$$53$$;$i$$199$$++) {
      if(($bIncludeHiddenSeries$$1$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$156$$, $i$$199$$, $groupIndex$$31$$)) && $seriesType$$5$$ == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$156$$, $i$$199$$) && $bAssignedToY2$$ == D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$156$$, $i$$199$$) && D.$DvtChartDataUtils$$.$getStackCategory$($chart$$156$$, $i$$199$$) == $category$$4$$) {
        var $groupValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$156$$, $i$$199$$, $groupIndex$$31$$), $cumVal$$ = $cumVal$$ + ($groupValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupValue$$) ? 0 : $groupValue$$)
      }
    }
  }else {
    $cumVal$$ = D.$DvtChartDataUtils$$.getValue($chart$$156$$, $seriesIndex$$53$$, $groupIndex$$31$$)
  }
  (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$156$$, $cacheKey$$4$$, $seriesIndex$$53$$, $groupIndex$$31$$, $cumVal$$);
  return $cumVal$$
};
D.$DvtChartDataUtils$$.$getLowValue$ = function $$DvtChartDataUtils$$$$getLowValue$$($chart$$157$$, $seriesIndex$$54$$, $dataItem$$15_groupIndex$$32$$) {
  $dataItem$$15_groupIndex$$32$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$157$$, $seriesIndex$$54$$, $dataItem$$15_groupIndex$$32$$);
  return $dataItem$$15_groupIndex$$32$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$157$$, $seriesIndex$$54$$) ? $dataItem$$15_groupIndex$$32$$.low == D.$JSCompiler_alias_NULL$$ && $dataItem$$15_groupIndex$$32$$.close != D.$JSCompiler_alias_NULL$$ ? $dataItem$$15_groupIndex$$32$$.open != D.$JSCompiler_alias_NULL$$ ? window.Math.min($dataItem$$15_groupIndex$$32$$.close, $dataItem$$15_groupIndex$$32$$.open) : $dataItem$$15_groupIndex$$32$$.close : 
  $dataItem$$15_groupIndex$$32$$.low : $dataItem$$15_groupIndex$$32$$.low != D.$JSCompiler_alias_NULL$$ && $dataItem$$15_groupIndex$$32$$.close == D.$JSCompiler_alias_NULL$$ ? $dataItem$$15_groupIndex$$32$$.low : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getHighValue$ = function $$DvtChartDataUtils$$$$getHighValue$$($chart$$158$$, $seriesIndex$$55$$, $dataItem$$16_groupIndex$$33$$) {
  $dataItem$$16_groupIndex$$33$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$158$$, $seriesIndex$$55$$, $dataItem$$16_groupIndex$$33$$);
  return $dataItem$$16_groupIndex$$33$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$158$$, $seriesIndex$$55$$) ? $dataItem$$16_groupIndex$$33$$.high == D.$JSCompiler_alias_NULL$$ ? $dataItem$$16_groupIndex$$33$$.open != D.$JSCompiler_alias_NULL$$ ? window.Math.max($dataItem$$16_groupIndex$$33$$.close, $dataItem$$16_groupIndex$$33$$.open) : $dataItem$$16_groupIndex$$33$$.close : $dataItem$$16_groupIndex$$33$$.high : 
  $dataItem$$16_groupIndex$$33$$.high != D.$JSCompiler_alias_NULL$$ && $dataItem$$16_groupIndex$$33$$.close == D.$JSCompiler_alias_NULL$$ ? $dataItem$$16_groupIndex$$33$$.high : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$159$$, $dataItem$$17_seriesIndex$$56_xVal$$, $groupIndex$$34$$) {
  if(D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$159$$)) {
    return $groupIndex$$34$$
  }
  $dataItem$$17_seriesIndex$$56_xVal$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$159$$, $dataItem$$17_seriesIndex$$56_xVal$$, $groupIndex$$34$$);
  if($dataItem$$17_seriesIndex$$56_xVal$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataItem$$17_seriesIndex$$56_xVal$$ = $dataItem$$17_seriesIndex$$56_xVal$$.x;
  return(0,window.isNaN)($dataItem$$17_seriesIndex$$56_xVal$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$159$$, $groupIndex$$34$$) : $dataItem$$17_seriesIndex$$56_xVal$$
};
D.$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$160$$, $seriesIndex$$57$$) {
  var $dataItem$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$160$$, $seriesIndex$$57$$, 0);
  return!(0,window.isNaN)($dataItem$$18$$) || $dataItem$$18$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $dataItem$$18$$.targetValue
};
D.$DvtChartDataUtils$$.$getZValue$ = function $$DvtChartDataUtils$$$$getZValue$$($chart$$161_dataItem$$19$$, $seriesIndex$$58$$, $groupIndex$$35$$, $defaultVal$$) {
  $chart$$161_dataItem$$19$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$161_dataItem$$19$$, $seriesIndex$$58$$, $groupIndex$$35$$);
  return!(0,window.isNaN)($chart$$161_dataItem$$19$$) || $chart$$161_dataItem$$19$$ == D.$JSCompiler_alias_NULL$$ ? $defaultVal$$ : $chart$$161_dataItem$$19$$.z != D.$JSCompiler_alias_NULL$$ ? $chart$$161_dataItem$$19$$.z : $defaultVal$$
};
D.$DvtChartDataUtils$$.$isStockValueRising$ = function $$DvtChartDataUtils$$$$isStockValueRising$$($chart$$162_dataItem$$20$$, $seriesIndex$$59$$, $groupIndex$$36$$) {
  return($chart$$162_dataItem$$20$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$162_dataItem$$20$$, $seriesIndex$$59$$, $groupIndex$$36$$)) ? $chart$$162_dataItem$$20$$.open <= $chart$$162_dataItem$$20$$.close : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartDataUtils$$.$isXValInViewport$ = function $$DvtChartDataUtils$$$$isXValInViewport$$($chart$$163$$, $xVal$$1$$) {
  if((0,window.isNaN)($xVal$$1$$) || $xVal$$1$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $minMax$$2$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$163$$, D.$JSCompiler_alias_TRUE$$);
  return!($minMax$$2$$.min != D.$JSCompiler_alias_NULL$$ && $xVal$$1$$ < $minMax$$2$$.min) && !($minMax$$2$$.max != D.$JSCompiler_alias_NULL$$ && $xVal$$1$$ > $minMax$$2$$.max)
};
D.$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$164$$, $seriesIndex$$60$$, $groupIndex$$37$$) {
  var $isXInViewport_xVal$$2$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$164$$, "isXInViewport", $seriesIndex$$60$$, $groupIndex$$37$$);
  $isXInViewport_xVal$$2$$ == D.$JSCompiler_alias_NULL$$ && ($isXInViewport_xVal$$2$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$164$$, $seriesIndex$$60$$, $groupIndex$$37$$), $isXInViewport_xVal$$2$$ = D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$164$$, $isXInViewport_xVal$$2$$), (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$164$$, "isXInViewport", $seriesIndex$$60$$, $groupIndex$$37$$, $isXInViewport_xVal$$2$$));
  return $isXInViewport_xVal$$2$$
};
D.$DvtChartDataUtils$$.$isRefObjInViewport$ = function $$DvtChartDataUtils$$$$isRefObjInViewport$$($chart$$165$$, $items$$6_nextVal$$, $index$$140$$) {
  var $xVal$$3$$ = D.$DvtChartRefObjUtils$$.$getXValue$($chart$$165$$, $items$$6_nextVal$$, $index$$140$$), $isRefObjInViewport_previousVal$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$165$$, "isRefObjInViewport", $xVal$$3$$);
  $isRefObjInViewport_previousVal$$ == D.$JSCompiler_alias_NULL$$ && ($isRefObjInViewport_previousVal$$ = D.$DvtChartRefObjUtils$$.$getXValue$($chart$$165$$, $items$$6_nextVal$$, $index$$140$$ - 1), $items$$6_nextVal$$ = D.$DvtChartRefObjUtils$$.$getXValue$($chart$$165$$, $items$$6_nextVal$$, $index$$140$$ + 1), $isRefObjInViewport_previousVal$$ = D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$165$$, $xVal$$3$$) || D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$165$$, $isRefObjInViewport_previousVal$$) || 
  D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$165$$, $items$$6_nextVal$$), (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$165$$, "isRefObjInViewport", $xVal$$3$$, $isRefObjInViewport_previousVal$$));
  return $isRefObjInViewport_previousVal$$
};
D.$DvtChartDataUtils$$.$isDataItemInViewport$ = function $$DvtChartDataUtils$$$$isDataItemInViewport$$($chart$$166$$, $seriesIndex$$61$$, $groupIndex$$38$$) {
  return!D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$166$$, $seriesIndex$$61$$, $groupIndex$$38$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartDataUtils$$.$isXInViewport$($chart$$166$$, $seriesIndex$$61$$, $groupIndex$$38$$) || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$166$$, $seriesIndex$$61$$, $groupIndex$$38$$ - 1) || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$166$$, $seriesIndex$$61$$, $groupIndex$$38$$ + 1)
};
D.$DvtChartDataUtils$$.$getViewportGroupCount$ = function $$DvtChartDataUtils$$$$getViewportGroupCount$$($chart$$167$$) {
  var $ratio$$6_viewportMinMax$$1$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$167$$, D.$JSCompiler_alias_TRUE$$), $globalMinMax$$2$$ = D.$DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($chart$$167$$), $ratio$$6_viewportMinMax$$1$$ = ($ratio$$6_viewportMinMax$$1$$.max - $ratio$$6_viewportMinMax$$1$$.min) / ($globalMinMax$$2$$.max - $globalMinMax$$2$$.min);
  return(0,window.isNaN)($ratio$$6_viewportMinMax$$1$$) ? 1 : $ratio$$6_viewportMinMax$$1$$ * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$167$$)
};
D.$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($isLog$$, $x1$$17_y$$63$$, $y1$$11$$, $x2$$15$$, $y2$$9$$, $x$$85$$) {
  $isLog$$ && ($y1$$11$$ = D.$DvtMath$$.$log10$($y1$$11$$), $y2$$9$$ = D.$DvtMath$$.$log10$($y2$$9$$));
  $x1$$17_y$$63$$ = $y1$$11$$ + ($y2$$9$$ - $y1$$11$$) * ($x$$85$$ - $x1$$17_y$$63$$) / ($x2$$15$$ - $x1$$17_y$$63$$);
  return $isLog$$ ? window.Math.pow(10, $x1$$17_y$$63$$) : $x1$$17_y$$63$$
};
D.$DvtChartDataUtils$$.$_getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$_getViewportEdgeYValues$$($chart$$168$$, $seriesIndex$$62$$) {
  var $seriesData$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$168$$, $seriesIndex$$62$$).items;
  if(!$seriesData$$) {
    return{min:D.$JSCompiler_alias_NULL$$, max:D.$JSCompiler_alias_NULL$$}
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$168$$), $max$$4_minMax$$3$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$168$$, D.$JSCompiler_alias_TRUE$$), $min$$4$$ = $max$$4_minMax$$3$$.min, $max$$4_minMax$$3$$ = $max$$4_minMax$$3$$.max, $isLog$$1$$ = D.$DvtChartAxisUtils$$.$isLog$($chart$$168$$, D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$168$$, $seriesIndex$$62$$) ? "y2" : "y"), $x$$86$$, $y$$64$$, $prevX$$, 
  $prevY$$, $yMin$$3$$, $yMax$$3$$, $groupIndex$$39$$ = 0;$groupIndex$$39$$ < $seriesData$$.length;$groupIndex$$39$$++) {
    if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$168$$, $seriesIndex$$62$$, $groupIndex$$39$$)) {
      $x$$86$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$168$$, $seriesIndex$$62$$, $groupIndex$$39$$), $y$$64$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$168$$, $seriesIndex$$62$$, $groupIndex$$39$$, $bIncludeHiddenSeries$$2$$), $prevX$$ != D.$JSCompiler_alias_NULL$$ && ($min$$4$$ != D.$JSCompiler_alias_NULL$$ && ($min$$4$$ > $prevX$$ && $min$$4$$ < $x$$86$$) && ($yMin$$3$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($isLog$$1$$, $prevX$$, $prevY$$, $x$$86$$, $y$$64$$, $min$$4$$)), 
      $max$$4_minMax$$3$$ != D.$JSCompiler_alias_NULL$$ && ($max$$4_minMax$$3$$ > $prevX$$ && $max$$4_minMax$$3$$ < $x$$86$$) && ($yMax$$3$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($isLog$$1$$, $prevX$$, $prevY$$, $x$$86$$, $y$$64$$, $max$$4_minMax$$3$$))), $prevX$$ = $x$$86$$, $prevY$$ = $y$$64$$
    }
  }
  return{min:$yMin$$3$$, max:$yMax$$3$$}
};
D.$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$169$$, $type$$94$$, $isDataOnly$$) {
  var $cacheKey$$7$$ = $type$$94$$ + ($isDataOnly$$ ? "MinMaxDO" : "MinMax"), $isLog$$2_minMax$$4$$ = $chart$$169$$.$Cache$[$cacheKey$$7$$];
  if($isLog$$2_minMax$$4$$) {
    return $isLog$$2_minMax$$4$$
  }
  var $isLog$$2_minMax$$4$$ = !$isDataOnly$$ && "z" != $type$$94$$ && D.$DvtChartAxisUtils$$.$isLog$($chart$$169$$, $type$$94$$), $isY2Value$$ = "y2" == $type$$94$$;
  $isY2Value$$ && ($type$$94$$ = "y");
  for(var $isYValue$$ = "y" == $type$$94$$, $limitToViewport$$ = !$isDataOnly$$ && $isYValue$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$169$$), $bIncludeHiddenSeries$$3$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$169$$) || "x" == $type$$94$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$169$$), $maxValue$$4$$ = -window.Infinity, $minValue$$5$$ = window.Infinity, $seriesCount$$17$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$169$$), $seriesIndex$$63$$ = 
  0;$seriesIndex$$63$$ < $seriesCount$$17$$;$seriesIndex$$63$$++) {
    var $data$$28_edgeValues_hidden_high_seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$169$$, $seriesIndex$$63$$), $isRange$$2_refObjects$$ = $isYValue$$ && (D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$169$$, $seriesIndex$$63$$) || "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$169$$, $seriesIndex$$63$$));
    if($bIncludeHiddenSeries$$3$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$169$$, $seriesIndex$$63$$)) {
      var $isY2Series_low_value$$101$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$169$$, $seriesIndex$$63$$);
      if(!($isYValue$$ && $isY2Value$$ != $isY2Series_low_value$$101$$)) {
        var $i$$200_seriesData$$1$$ = $data$$28_edgeValues_hidden_high_seriesItem$$9$$.items;
        if($i$$200_seriesData$$1$$) {
          for(var $groupIndex$$40_items$$7$$ = 0;$groupIndex$$40_items$$7$$ < $i$$200_seriesData$$1$$.length;$groupIndex$$40_items$$7$$++) {
            if($bIncludeHiddenSeries$$3$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$169$$, $seriesIndex$$63$$, $groupIndex$$40_items$$7$$)) {
              if("object" != typeof $i$$200_seriesData$$1$$[$groupIndex$$40_items$$7$$] && ($i$$200_seriesData$$1$$[$groupIndex$$40_items$$7$$] = {y:$i$$200_seriesData$$1$$[$groupIndex$$40_items$$7$$]}), $data$$28_edgeValues_hidden_high_seriesItem$$9$$ = $i$$200_seriesData$$1$$[$groupIndex$$40_items$$7$$], $isY2Series_low_value$$101$$ = D.$JSCompiler_alias_NULL$$, $isYValue$$ ? $isRange$$2_refObjects$$ || ($isY2Series_low_value$$101$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$169$$, $seriesIndex$$63$$, 
              $groupIndex$$40_items$$7$$, $bIncludeHiddenSeries$$3$$)) : "x" == $type$$94$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$169$$) && !D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$169$$) ? ($isY2Series_low_value$$101$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$169$$, $groupIndex$$40_items$$7$$), $data$$28_edgeValues_hidden_high_seriesItem$$9$$ != D.$JSCompiler_alias_NULL$$ && ($data$$28_edgeValues_hidden_high_seriesItem$$9$$.x = $isY2Series_low_value$$101$$)) : $data$$28_edgeValues_hidden_high_seriesItem$$9$$ != 
              D.$JSCompiler_alias_NULL$$ && ($isY2Series_low_value$$101$$ = $data$$28_edgeValues_hidden_high_seriesItem$$9$$[$type$$94$$]), !$limitToViewport$$ || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$169$$, $seriesIndex$$63$$, $groupIndex$$40_items$$7$$)) {
                if(!$isRange$$2_refObjects$$ && $isY2Series_low_value$$101$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($isY2Series_low_value$$101$$)) {
                  var $j$$36_radius$$4_refObj$$6$$ = 0;
                  D.$DvtChartTypeUtils$$.$isBubble$($chart$$169$$) && (!$isDataOnly$$ && 0 < $data$$28_edgeValues_hidden_high_seriesItem$$9$$.markerSize) && ($isYValue$$ ? $j$$36_radius$$4_refObj$$6$$ = $data$$28_edgeValues_hidden_high_seriesItem$$9$$._yAxisRadius : "x" == $type$$94$$ && ($j$$36_radius$$4_refObj$$6$$ = $data$$28_edgeValues_hidden_high_seriesItem$$9$$._xAxisRadius));
                  $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $isLog$$2_minMax$$4$$ ? $isY2Series_low_value$$101$$ * window.Math.pow(10, $j$$36_radius$$4_refObj$$6$$) : $isY2Series_low_value$$101$$ + $j$$36_radius$$4_refObj$$6$$);
                  $minValue$$5$$ = window.Math.min($minValue$$5$$, $isLog$$2_minMax$$4$$ ? $isY2Series_low_value$$101$$ / window.Math.pow(10, $j$$36_radius$$4_refObj$$6$$) : $isY2Series_low_value$$101$$ - $j$$36_radius$$4_refObj$$6$$)
                }
                $isRange$$2_refObjects$$ && ($data$$28_edgeValues_hidden_high_seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$169$$, $seriesIndex$$63$$, $groupIndex$$40_items$$7$$), $isY2Series_low_value$$101$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$169$$, $seriesIndex$$63$$, $groupIndex$$40_items$$7$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$, $isY2Series_low_value$$101$$), $minValue$$5$$ = window.Math.min($minValue$$5$$, 
                $data$$28_edgeValues_hidden_high_seriesItem$$9$$, $isY2Series_low_value$$101$$))
              }
            }
          }
          $isRange$$2_refObjects$$ = D.$JSCompiler_alias_NULL$$;
          "x" == $type$$94$$ ? $isRange$$2_refObjects$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$169$$, "x") : $isY2Value$$ ? $isRange$$2_refObjects$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$169$$, "y2") : $isYValue$$ && ($isRange$$2_refObjects$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$169$$, "y"));
          if($isRange$$2_refObjects$$ != D.$JSCompiler_alias_NULL$$) {
            for($i$$200_seriesData$$1$$ = 0;$i$$200_seriesData$$1$$ < $isRange$$2_refObjects$$.length;$i$$200_seriesData$$1$$++) {
              if($j$$36_radius$$4_refObj$$6$$ = $isRange$$2_refObjects$$[$i$$200_seriesData$$1$$], $groupIndex$$40_items$$7$$ = $j$$36_radius$$4_refObj$$6$$.items, $data$$28_edgeValues_hidden_high_seriesItem$$9$$ = "withRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$169$$) && "hidden" == $j$$36_radius$$4_refObj$$6$$.visibility, !$data$$28_edgeValues_hidden_high_seriesItem$$9$$) {
                if($groupIndex$$40_items$$7$$ && !$data$$28_edgeValues_hidden_high_seriesItem$$9$$) {
                  for($j$$36_radius$$4_refObj$$6$$ = 0;$j$$36_radius$$4_refObj$$6$$ < $groupIndex$$40_items$$7$$.length;$j$$36_radius$$4_refObj$$6$$++) {
                    if(!($groupIndex$$40_items$$7$$[$j$$36_radius$$4_refObj$$6$$] == D.$JSCompiler_alias_NULL$$ || $limitToViewport$$ && !D.$DvtChartDataUtils$$.$isRefObjInViewport$($chart$$169$$, $groupIndex$$40_items$$7$$, $j$$36_radius$$4_refObj$$6$$))) {
                      var $isY2Series_low_value$$101$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($groupIndex$$40_items$$7$$[$j$$36_radius$$4_refObj$$6$$]), $data$$28_edgeValues_hidden_high_seriesItem$$9$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($groupIndex$$40_items$$7$$[$j$$36_radius$$4_refObj$$6$$]), $val$$20$$ = (0,window.isNaN)($groupIndex$$40_items$$7$$[$j$$36_radius$$4_refObj$$6$$]) ? $groupIndex$$40_items$$7$$[$j$$36_radius$$4_refObj$$6$$].value : $groupIndex$$40_items$$7$$[$j$$36_radius$$4_refObj$$6$$];
                      $isY2Series_low_value$$101$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($isY2Series_low_value$$101$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $isY2Series_low_value$$101$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $isY2Series_low_value$$101$$));
                      $data$$28_edgeValues_hidden_high_seriesItem$$9$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($data$$28_edgeValues_hidden_high_seriesItem$$9$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$));
                      $val$$20$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($val$$20$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $val$$20$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $val$$20$$))
                    }
                  }
                }else {
                  $isY2Series_low_value$$101$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($j$$36_radius$$4_refObj$$6$$), $data$$28_edgeValues_hidden_high_seriesItem$$9$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($j$$36_radius$$4_refObj$$6$$), $val$$20$$ = $j$$36_radius$$4_refObj$$6$$.value, $isY2Series_low_value$$101$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($isY2Series_low_value$$101$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $isY2Series_low_value$$101$$), $maxValue$$4$$ = 
                  window.Math.max($maxValue$$4$$, $isY2Series_low_value$$101$$)), $data$$28_edgeValues_hidden_high_seriesItem$$9$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($data$$28_edgeValues_hidden_high_seriesItem$$9$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$)), $val$$20$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($val$$20$$) && 
                  ($minValue$$5$$ = window.Math.min($minValue$$5$$, $val$$20$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $val$$20$$))
                }
              }
            }
          }
          $limitToViewport$$ && ($data$$28_edgeValues_hidden_high_seriesItem$$9$$ = D.$DvtChartDataUtils$$.$_getViewportEdgeYValues$($chart$$169$$, $seriesIndex$$63$$), $data$$28_edgeValues_hidden_high_seriesItem$$9$$.min != D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$.min), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$.min)), $data$$28_edgeValues_hidden_high_seriesItem$$9$$.max != 
          D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$.max), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$28_edgeValues_hidden_high_seriesItem$$9$$.max)))
        }
      }
    }
  }
  $isLog$$2_minMax$$4$$ = {min:$minValue$$5$$, max:$maxValue$$4$$};
  return $chart$$169$$.$Cache$[$cacheKey$$7$$] = $isLog$$2_minMax$$4$$
};
D.$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$170$$, $seriesIndex$$64$$) {
  var $seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$170$$, $seriesIndex$$64$$);
  return $seriesItem$$10$$ && "on" == $seriesItem$$10$$.assignedToY2 && D.$DvtChartTypeUtils$$.$isDualY$($chart$$170$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$171_peers$$2$$) {
  var $selection$$16$$ = $chart$$171_peers$$2$$.$getOptions$().selection;
  $selection$$16$$ || ($selection$$16$$ = []);
  $chart$$171_peers$$2$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$171_peers$$2$$);
  for(var $i$$201$$ = 0;$i$$201$$ < $selection$$16$$.length;$i$$201$$++) {
    var $id$$34$$;
    "string" == typeof $selection$$16$$[$i$$201$$] ? ($id$$34$$ = $selection$$16$$[$i$$201$$], $selection$$16$$[$i$$201$$] = {id:$id$$34$$}) : $id$$34$$ = $selection$$16$$[$i$$201$$].id;
    if($id$$34$$ != D.$JSCompiler_alias_NULL$$ && (!$selection$$16$$[$i$$201$$].series || !$selection$$16$$[$i$$201$$].group)) {
      for(var $j$$37$$ = 0;$j$$37$$ < $chart$$171_peers$$2$$.length;$j$$37$$++) {
        var $peer$$17$$ = $chart$$171_peers$$2$$[$j$$37$$];
        if($id$$34$$ == $peer$$17$$.$_dataItemId$) {
          $selection$$16$$[$i$$201$$].series = $peer$$17$$.$getSeries$();
          $selection$$16$$[$i$$201$$].group = $peer$$17$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$16$$
};
D.$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$172_handler$$36_selectedIds$$2$$) {
  var $selection$$17$$ = [];
  if($chart$$172_handler$$36_selectedIds$$2$$ = $chart$$172_handler$$36_selectedIds$$2$$.$getSelectionHandler$()) {
    $chart$$172_handler$$36_selectedIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($chart$$172_handler$$36_selectedIds$$2$$);
    for(var $i$$202$$ = 0;$i$$202$$ < $chart$$172_handler$$36_selectedIds$$2$$.length;$i$$202$$++) {
      var $selectedId$$ = $chart$$172_handler$$36_selectedIds$$2$$[$i$$202$$];
      $selection$$17$$.push({series:$selectedId$$.$getSeries$(), group:$selectedId$$.$getGroup$(), id:$selectedId$$.getId()})
    }
  }
  return $selection$$17$$
};
D.$DvtChartDataUtils$$.$hasVolumeSeries$ = function $$DvtChartDataUtils$$$$hasVolumeSeries$$($chart$$173_hasVolume$$) {
  return($chart$$173_hasVolume$$ = $chart$$173_hasVolume$$.$getOptions$()._hasVolume) ? $chart$$173_hasVolume$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$174_selection$$18$$, $series$$10_seriesIndex$$65$$, $group$$22_groupIndex$$41$$) {
  var $id$$35$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$174_selection$$18$$, $series$$10_seriesIndex$$65$$, $group$$22_groupIndex$$41$$).id;
  $series$$10_seriesIndex$$65$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$174_selection$$18$$, $series$$10_seriesIndex$$65$$);
  $group$$22_groupIndex$$41$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$174_selection$$18$$, $group$$22_groupIndex$$41$$);
  ($chart$$174_selection$$18$$ = $chart$$174_selection$$18$$.$getOptions$().selection) || ($chart$$174_selection$$18$$ = []);
  for(var $i$$203$$ = 0;$i$$203$$ < $chart$$174_selection$$18$$.length;$i$$203$$++) {
    if($id$$35$$ != D.$JSCompiler_alias_NULL$$ && ($id$$35$$ == $chart$$174_selection$$18$$[$i$$203$$] || $id$$35$$ == $chart$$174_selection$$18$$[$i$$203$$].id) || $series$$10_seriesIndex$$65$$ == $chart$$174_selection$$18$$[$i$$203$$].series && $group$$22_groupIndex$$41$$ == $chart$$174_selection$$18$$[$i$$203$$].group) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($chart$$175$$, $axis$$78_seriesIndex$$66_valueFormat$$, $dataItem$$21_groupIndex$$42_label$$30$$, $type$$95$$) {
  $dataItem$$21_groupIndex$$42_label$$30$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$175$$, $axis$$78_seriesIndex$$66_valueFormat$$, $dataItem$$21_groupIndex$$42_label$$30$$);
  if(!$dataItem$$21_groupIndex$$42_label$$30$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataItem$$21_groupIndex$$42_label$$30$$ = $dataItem$$21_groupIndex$$42_label$$30$$.label;
  "low" == $type$$95$$ ? $dataItem$$21_groupIndex$$42_label$$30$$ = $dataItem$$21_groupIndex$$42_label$$30$$ instanceof window.Array ? $dataItem$$21_groupIndex$$42_label$$30$$[0] : $dataItem$$21_groupIndex$$42_label$$30$$ : "high" == $type$$95$$ && ($dataItem$$21_groupIndex$$42_label$$30$$ = $dataItem$$21_groupIndex$$42_label$$30$$ instanceof window.Array ? $dataItem$$21_groupIndex$$42_label$$30$$[1] : D.$JSCompiler_alias_NULL$$);
  if($dataItem$$21_groupIndex$$42_label$$30$$ != D.$JSCompiler_alias_NULL$$) {
    if("number" == typeof $dataItem$$21_groupIndex$$42_label$$30$$) {
      var $min$$5$$, $max$$5$$, $axisInfo$$14_majorIncrement$$;
      if($axis$$78_seriesIndex$$66_valueFormat$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$175$$, $axis$$78_seriesIndex$$66_valueFormat$$) && $chart$$175$$.$y2Axis$ ? $chart$$175$$.$y2Axis$ : $chart$$175$$.$yAxis$) {
        $axisInfo$$14_majorIncrement$$ = $axis$$78_seriesIndex$$66_valueFormat$$.$Info$, $min$$5$$ = $axisInfo$$14_majorIncrement$$.$GlobalMin$, $max$$5$$ = $axisInfo$$14_majorIncrement$$.$GlobalMax$, $axisInfo$$14_majorIncrement$$ = $axisInfo$$14_majorIncrement$$.$getMajorIncrement$()
      }
      $axis$$78_seriesIndex$$66_valueFormat$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$175$$, "label");
      return D.$DvtChartTooltipUtils$$.$formatValue$($chart$$175$$.$getCtx$(), $axis$$78_seriesIndex$$66_valueFormat$$, $dataItem$$21_groupIndex$$42_label$$30$$, $min$$5$$, $max$$5$$, $axisInfo$$14_majorIncrement$$)
    }
    return $dataItem$$21_groupIndex$$42_label$$30$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getStackCategory$ = function $$DvtChartDataUtils$$$$getStackCategory$$($chart$$176$$, $seriesIndex$$67$$) {
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$176$$) ? D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$176$$, $seriesIndex$$67$$).stackCategory : D.$DvtChartDataUtils$$.$getSeries$($chart$$176$$, $seriesIndex$$67$$)
};
D.$DvtChartDataUtils$$.$getStackCategories$ = function $$DvtChartDataUtils$$$$getStackCategories$$($chart$$177$$, $type$$96$$, $bIncludeHiddenSeries$$4$$) {
  for(var $yCategories$$ = [], $y2Categories$$ = [], $s$$12$$ = 0;$s$$12$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$177$$);$s$$12$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$177$$, $s$$12$$) || $bIncludeHiddenSeries$$4$$) {
      if($type$$96$$) {
        var $category$$5_seriesType$$6$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$177$$, $s$$12$$);
        "candlestick" == $category$$5_seriesType$$6$$ && ($category$$5_seriesType$$6$$ = "bar");
        if($type$$96$$ != $category$$5_seriesType$$6$$) {
          continue
        }
      }
      $category$$5_seriesType$$6$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$177$$, $s$$12$$);
      D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$177$$, $s$$12$$) ? -1 == $y2Categories$$.indexOf($category$$5_seriesType$$6$$) && $y2Categories$$.push($category$$5_seriesType$$6$$) : -1 == $yCategories$$.indexOf($category$$5_seriesType$$6$$) && $yCategories$$.push($category$$5_seriesType$$6$$)
    }
  }
  return{y:$yCategories$$, y2:$y2Categories$$}
};
D.$DvtChartDataUtils$$.$getBarCategoryZ$ = function $$DvtChartDataUtils$$$$getBarCategoryZ$$($chart$$178$$, $category$$6$$, $groupIndex$$43$$, $isY2$$1$$) {
  for(var $width$$41$$ = 0, $s$$13$$ = 0;$s$$13$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$178$$);$s$$13$$++) {
    if(!("bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$178$$, $s$$13$$) && "candlestick" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$178$$, $s$$13$$) || D.$DvtChartDataUtils$$.$getStackCategory$($chart$$178$$, $s$$13$$) != $category$$6$$ || !D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$178$$, $s$$13$$))) {
      var $isSeriesY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$178$$, $s$$13$$);
      if($isY2$$1$$ && $isSeriesY2$$ || !$isY2$$1$$ && !$isSeriesY2$$) {
        $width$$41$$ = window.Math.max($width$$41$$, D.$DvtChartDataUtils$$.$getZValue$($chart$$178$$, $s$$13$$, $groupIndex$$43$$, 1))
      }
    }
  }
  return $width$$41$$
};
D.$DvtChartDataUtils$$.$getBarInfo$ = function $$DvtChartDataUtils$$$$getBarInfo$$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$, $groupIndex$$44_stackWidth$$, $availSpace$$78$$) {
  var $bHoriz$$10_x1$$18$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$179_dataPos$$5$$), $bStacked$$1_baseCoord$$1_highValue$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$179_dataPos$$5$$), $isRTL$$15_x2$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$179_dataPos$$5$$.$getCtx$()), $axisCoord$$3_xAxis$$3$$ = $chart$$179_dataPos$$5$$.$xAxis$, $bRange$$ = D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$), $itemOffset_offsetMap$$ = D.$DvtChartStyleUtils$$.$getBarCategoryOffsetMap$($chart$$179_dataPos$$5$$, 
  $groupIndex$$44_stackWidth$$), $xValue$$2_yAxis$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$, $groupIndex$$44_stackWidth$$), $xCoord$$8$$ = $axisCoord$$3_xAxis$$3$$.$getUnboundedCoordAt$($xValue$$2_yAxis$$3$$), $bY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$), $xValue$$2_yAxis$$3$$ = $bY2Series$$ ? $chart$$179_dataPos$$5$$.$y2Axis$ : $chart$$179_dataPos$$5$$.$yAxis$, $axisCoord$$3_xAxis$$3$$ = 
  $xValue$$2_yAxis$$3$$.$getBaselineCoord$(), $lowValue$$1_yCoord$$4$$;
  if($bRange$$) {
    $lowValue$$1_yCoord$$4$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$, $groupIndex$$44_stackWidth$$);
    $bStacked$$1_baseCoord$$1_highValue$$1$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$, $groupIndex$$44_stackWidth$$);
    if($lowValue$$1_yCoord$$4$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($lowValue$$1_yCoord$$4$$) || $bStacked$$1_baseCoord$$1_highValue$$1$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($bStacked$$1_baseCoord$$1_highValue$$1$$)) {
      return D.$JSCompiler_alias_NULL$$
    }
    $lowValue$$1_yCoord$$4$$ = $xValue$$2_yAxis$$3$$.$getBoundedCoordAt$($lowValue$$1_yCoord$$4$$);
    $bStacked$$1_baseCoord$$1_highValue$$1$$ = $xValue$$2_yAxis$$3$$.$getBoundedCoordAt$($bStacked$$1_baseCoord$$1_highValue$$1$$)
  }else {
    var $category$$7_yValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$, $groupIndex$$44_stackWidth$$), $totalYValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$, $groupIndex$$44_stackWidth$$);
    if($category$$7_yValue$$1$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($category$$7_yValue$$1$$)) {
      return D.$JSCompiler_alias_NULL$$
    }
    $lowValue$$1_yCoord$$4$$ = $xValue$$2_yAxis$$3$$.$getBoundedCoordAt$($totalYValue$$);
    $bStacked$$1_baseCoord$$1_highValue$$1$$ = $bStacked$$1_baseCoord$$1_highValue$$1$$ ? $xValue$$2_yAxis$$3$$.$getBoundedCoordAt$($totalYValue$$ - $category$$7_yValue$$1$$) : $axisCoord$$3_xAxis$$3$$
  }
  if($lowValue$$1_yCoord$$4$$ == $bStacked$$1_baseCoord$$1_highValue$$1$$ && $xValue$$2_yAxis$$3$$.$getCoordAt$($totalYValue$$) === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $category$$7_yValue$$1$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$);
  $barWidth$$6_seriesIndex$$68$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$179_dataPos$$5$$, $barWidth$$6_seriesIndex$$68$$, $groupIndex$$44_stackWidth$$);
  $groupIndex$$44_stackWidth$$ = D.$DvtChartStyleUtils$$.$getBarStackWidth$($chart$$179_dataPos$$5$$, $category$$7_yValue$$1$$, $groupIndex$$44_stackWidth$$, $bY2Series$$);
  if("pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$179_dataPos$$5$$) && (0,D.$DvtAgent$isPlatformGecko$$)()) {
    var $groupWidth$$1$$ = $barWidth$$6_seriesIndex$$68$$ / (1 - D.$DvtChartStyleUtils$$.$getBarGapRatio$($chart$$179_dataPos$$5$$));
    1 < $barWidth$$6_seriesIndex$$68$$ && 2 > $groupWidth$$1$$ - $barWidth$$6_seriesIndex$$68$$ && ($barWidth$$6_seriesIndex$$68$$--, $groupIndex$$44_stackWidth$$ = $barWidth$$6_seriesIndex$$68$$)
  }
  $itemOffset_offsetMap$$ = $itemOffset_offsetMap$$[$bY2Series$$ ? "y2" : "y"][$category$$7_yValue$$1$$] + 0.5 * ($groupIndex$$44_stackWidth$$ - $barWidth$$6_seriesIndex$$68$$);
  $bHoriz$$10_x1$$18$$ = $isRTL$$15_x2$$16$$ && !$bHoriz$$10_x1$$18$$ ? $xCoord$$8$$ - $itemOffset_offsetMap$$ - $barWidth$$6_seriesIndex$$68$$ : $xCoord$$8$$ + $itemOffset_offsetMap$$;
  $isRTL$$15_x2$$16$$ = $bHoriz$$10_x1$$18$$ + $barWidth$$6_seriesIndex$$68$$;
  if($lowValue$$1_yCoord$$4$$ == $bStacked$$1_baseCoord$$1_highValue$$1$$ && $xValue$$2_yAxis$$3$$.$getCoordAt$($totalYValue$$) === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $chart$$179_dataPos$$5$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$179_dataPos$$5$$, new D.$DvtPoint$$(($bHoriz$$10_x1$$18$$ + $isRTL$$15_x2$$16$$) / 2, $bRange$$ ? ($lowValue$$1_yCoord$$4$$ + $bStacked$$1_baseCoord$$1_highValue$$1$$) / 2 : $lowValue$$1_yCoord$$4$$), $availSpace$$78$$);
  return{$x1$:$bHoriz$$10_x1$$18$$, $x2$:$isRTL$$15_x2$$16$$, $axisCoord$:$axisCoord$$3_xAxis$$3$$, $baseCoord$:$bStacked$$1_baseCoord$$1_highValue$$1$$, $yCoord$:$lowValue$$1_yCoord$$4$$, $dataPos$:$chart$$179_dataPos$$5$$, $barWidth$:$barWidth$$6_seriesIndex$$68$$}
};
D.$DvtChartDataUtils$$.$getMarkerPosition$ = function $$DvtChartDataUtils$$$$getMarkerPosition$$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$, $groupIndex$$45_yCoord$$5$$, $availSpace$$79$$) {
  var $xAxis$$4$$ = $chart$$180$$.$xAxis$, $highCoord$$4_yAxis$$4$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$) ? $chart$$180$$.$y2Axis$ : $chart$$180$$.$yAxis$, $isPolar$$4$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$180$$), $bRange$$1$$ = D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$), $xValue$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$, $groupIndex$$45_yCoord$$5$$), $lowCoord$$4_yValue$$2$$ = 
  D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$, $groupIndex$$45_yCoord$$5$$);
  if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$180$$)) {
    if($isPolar$$4$$ && $lowCoord$$4_yValue$$2$$ < $highCoord$$4_yAxis$$4$$.$Info$.$MinValue$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $seriesIndex$$69_xCoord$$9$$ = $isPolar$$4$$ ? $xAxis$$4$$.$getCoordAt$($xValue$$3$$) : $xAxis$$4$$.$getUnboundedCoordAt$($xValue$$3$$);
    $groupIndex$$45_yCoord$$5$$ = $highCoord$$4_yAxis$$4$$.$getUnboundedCoordAt$($lowCoord$$4_yValue$$2$$)
  }else {
    $bRange$$1$$ ? ($lowCoord$$4_yValue$$2$$ = $highCoord$$4_yAxis$$4$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getLowValue$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$, $groupIndex$$45_yCoord$$5$$)), $highCoord$$4_yAxis$$4$$ = $highCoord$$4_yAxis$$4$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getHighValue$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$, $groupIndex$$45_yCoord$$5$$)), $seriesIndex$$69_xCoord$$9$$ = $xAxis$$4$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getXValue$($chart$$180$$, $seriesIndex$$69_xCoord$$9$$, 
    $groupIndex$$45_yCoord$$5$$)), $groupIndex$$45_yCoord$$5$$ = ($lowCoord$$4_yValue$$2$$ + $highCoord$$4_yAxis$$4$$) / 2) : ($seriesIndex$$69_xCoord$$9$$ = $xAxis$$4$$.$getCoordAt$($xValue$$3$$), $groupIndex$$45_yCoord$$5$$ = $highCoord$$4_yAxis$$4$$.$getCoordAt$($lowCoord$$4_yValue$$2$$))
  }
  return $seriesIndex$$69_xCoord$$9$$ == D.$JSCompiler_alias_NULL$$ || $groupIndex$$45_yCoord$$5$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$180$$, new D.$DvtPoint$$($seriesIndex$$69_xCoord$$9$$, $groupIndex$$45_yCoord$$5$$), $availSpace$$79$$)
};
D.$DvtChartEventUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventUtils$$, D.$DvtObj$$, "DvtChartEventUtils");
D.$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$181$$) {
  return $chart$$181$$.$getOptions$().hideAndShowBehavior
};
D.$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$182$$) {
  return $chart$$182$$.$getOptions$().hoverBehavior
};
D.$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$183_options$$74$$, $category$$8$$, $visibility$$2$$) {
  var $hiddenCategories$$2_i$$204_refObj$$7$$ = D.$DvtChartRefObjUtils$$.$getRefObj$($chart$$183_options$$74$$, $category$$8$$);
  if($hiddenCategories$$2_i$$204_refObj$$7$$ != D.$JSCompiler_alias_NULL$$) {
    $hiddenCategories$$2_i$$204_refObj$$7$$.visibility = $visibility$$2$$
  }else {
    var $hiddenCategories$$2_i$$204_refObj$$7$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$183_options$$74$$), $dataSection_index$$141$$ = D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$2_i$$204_refObj$$7$$, $category$$8$$);
    "hidden" == $visibility$$2$$ && 0 > $dataSection_index$$141$$ ? $hiddenCategories$$2_i$$204_refObj$$7$$.push($category$$8$$) : "visible" == $visibility$$2$$ && 0 <= $dataSection_index$$141$$ && $hiddenCategories$$2_i$$204_refObj$$7$$.splice($dataSection_index$$141$$, 1);
    if(($chart$$183_options$$74$$ = $chart$$183_options$$74$$.$getOptions$()) && $chart$$183_options$$74$$.legend && $chart$$183_options$$74$$.legend.sections) {
      for($hiddenCategories$$2_i$$204_refObj$$7$$ = 0;$hiddenCategories$$2_i$$204_refObj$$7$$ < $chart$$183_options$$74$$.legend.sections.length;$hiddenCategories$$2_i$$204_refObj$$7$$++) {
        if(($dataSection_index$$141$$ = $chart$$183_options$$74$$.legend.sections[$hiddenCategories$$2_i$$204_refObj$$7$$]) && $dataSection_index$$141$$.items) {
          for(var $j$$38$$ = 0;$j$$38$$ < $dataSection_index$$141$$.items.length;$j$$38$$++) {
            $dataSection_index$$141$$.items[$j$$38$$].id == $category$$8$$ && ($dataSection_index$$141$$.items[$j$$38$$].categoryVisibility = $visibility$$2$$)
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$184$$) {
  return!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$184$$) ? D.$JSCompiler_alias_FALSE$$ : "off" != $chart$$184$$.$getOptions$().zoomAndScroll
};
D.$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$185_zs$$) {
  if(!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$185_zs$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$185_zs$$ = $chart$$185_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$185_zs$$ || "delayed" == $chart$$185_zs$$
};
D.$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$186_zs$$1$$) {
  if(!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$186_zs$$1$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$186_zs$$1$$ = $chart$$186_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$186_zs$$1$$ || "liveScrollOnly" == $chart$$186_zs$$1$$
};
D.$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$187_zs$$2$$) {
  if(!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$187_zs$$2$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$187_zs$$2$$ = $chart$$187_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$187_zs$$2$$ || "delayedScrollOnly" == $chart$$187_zs$$2$$
};
D.$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$188$$, $selection$$19$$) {
  for(var $ret$$10$$ = [], $i$$205$$ = 0;$i$$205$$ < $selection$$19$$.length;$i$$205$$++) {
    var $item$$4_otherItems$$ = $selection$$19$$[$i$$205$$];
    $item$$4_otherItems$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$4_otherItems$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$188$$), $ret$$10$$ = $ret$$10$$.concat($item$$4_otherItems$$)) : $ret$$10$$.push($item$$4_otherItems$$)
  }
  return $ret$$10$$
};
D.$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$141$$) {
  $event$$141$$.x != D.$JSCompiler_alias_NULL$$ && ($event$$141$$.x -= 1);
  $event$$141$$.$w$ != D.$JSCompiler_alias_NULL$$ && ($event$$141$$.$w$ += 2);
  $event$$141$$.y != D.$JSCompiler_alias_NULL$$ && ($event$$141$$.y -= 1);
  $event$$141$$.$h$ != D.$JSCompiler_alias_NULL$$ && ($event$$141$$.$h$ += 2)
};
D.$DvtChartEventUtils$$.$getSelectedObjects$ = function $$DvtChartEventUtils$$$$getSelectedObjects$$($chart$$189$$, $event$$142$$, $boundedObjects_selectionHandler$$2$$) {
  if(!$chart$$189$$.$Cache$.dataFiltered) {
    return(0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($boundedObjects_selectionHandler$$2$$)
  }
  $boundedObjects_selectionHandler$$2$$ = [];
  var $dataPositions$$ = $chart$$189$$.$Cache$.dataPositions;
  if(!$dataPositions$$) {
    for(var $dataPositions$$ = [], $i$$206_seriesIdx$$1$$ = 0;$i$$206_seriesIdx$$1$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$189$$);$i$$206_seriesIdx$$1$$++) {
      for(var $groupIdx$$1_withinY$$ = 0;$groupIdx$$1_withinY$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$189$$);$groupIdx$$1_withinY$$++) {
        var $dataPos$$7$$;
        if($dataPos$$7$$ = "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$189$$, $i$$206_seriesIdx$$1$$) ? D.$DvtChartDataUtils$$.$getBarInfo$($chart$$189$$, $i$$206_seriesIdx$$1$$, $groupIdx$$1_withinY$$).$dataPos$ : D.$DvtChartDataUtils$$.$getMarkerPosition$($chart$$189$$, $i$$206_seriesIdx$$1$$, $groupIdx$$1_withinY$$)) {
          $dataPos$$7$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$189$$.$getPlotArea$(), $dataPos$$7$$), $dataPositions$$.push({$seriesIndex$:$i$$206_seriesIdx$$1$$, $groupIndex$:$groupIdx$$1_withinY$$, $pos$:$dataPos$$7$$})
        }
      }
    }
    $chart$$189$$.$Cache$.dataPositions = $dataPositions$$
  }
  for($i$$206_seriesIdx$$1$$ = 0;$i$$206_seriesIdx$$1$$ < $dataPositions$$.length;$i$$206_seriesIdx$$1$$++) {
    if($dataPos$$7$$ = $dataPositions$$[$i$$206_seriesIdx$$1$$].$pos$) {
      $groupIdx$$1_withinY$$ = $event$$142$$.y == D.$JSCompiler_alias_NULL$$ || $dataPos$$7$$.y >= $event$$142$$.y && $dataPos$$7$$.y <= $event$$142$$.y + $event$$142$$.$h$, ($event$$142$$.x == D.$JSCompiler_alias_NULL$$ || $dataPos$$7$$.x >= $event$$142$$.x && $dataPos$$7$$.x <= $event$$142$$.x + $event$$142$$.$w$) && $groupIdx$$1_withinY$$ && $boundedObjects_selectionHandler$$2$$.push(new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$DvtChartDataUtils$$.$getSeries$($chart$$189$$, $dataPositions$$[$i$$206_seriesIdx$$1$$].$seriesIndex$), 
      D.$DvtChartDataUtils$$.$getGroup$($chart$$189$$, $dataPositions$$[$i$$206_seriesIdx$$1$$].$groupIndex$)))
    }
  }
  return $boundedObjects_selectionHandler$$2$$
};
D.$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$190$$, $event$$143$$) {
  for(var $peers$$3$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$190$$), $boundedPeers$$ = [], $i$$207$$ = 0;$i$$207$$ < $peers$$3$$.length;$i$$207$$++) {
    var $peer$$18$$ = $peers$$3$$[$i$$207$$], $dataPos$$8$$ = $peer$$18$$.$_dataPos$;
    if($dataPos$$8$$) {
      var $dataPos$$8$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$190$$.$getPlotArea$(), $dataPos$$8$$), $withinY$$1$$ = $event$$143$$.y == D.$JSCompiler_alias_NULL$$ || $dataPos$$8$$.y >= $event$$143$$.y && $dataPos$$8$$.y <= $event$$143$$.y + $event$$143$$.$h$;
      ($event$$143$$.x == D.$JSCompiler_alias_NULL$$ || $dataPos$$8$$.x >= $event$$143$$.x && $dataPos$$8$$.x <= $event$$143$$.x + $event$$143$$.$w$) && $withinY$$1$$ && $boundedPeers$$.push($peer$$18$$)
    }
  }
  return $boundedPeers$$
};
D.$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$191$$, $coords$$22_event$$144$$, $limitExtent$$) {
  var $maxPt_plotArea$$2_yMinMax$$ = $chart$$191$$.$getPlotArea$(), $minPt_xMinMax$$ = $maxPt_plotArea$$2_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($coords$$22_event$$144$$.x, $coords$$22_event$$144$$.y)), $maxPt_plotArea$$2_yMinMax$$ = $maxPt_plotArea$$2_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($coords$$22_event$$144$$.x + $coords$$22_event$$144$$.$w$, $coords$$22_event$$144$$.y + $coords$$22_event$$144$$.$h$));
  $coords$$22_event$$144$$.x == D.$JSCompiler_alias_NULL$$ && ($minPt_xMinMax$$.x = D.$JSCompiler_alias_NULL$$, $maxPt_plotArea$$2_yMinMax$$.x = D.$JSCompiler_alias_NULL$$);
  $coords$$22_event$$144$$.y == D.$JSCompiler_alias_NULL$$ && ($minPt_xMinMax$$.y = D.$JSCompiler_alias_NULL$$, $maxPt_plotArea$$2_yMinMax$$.y = D.$JSCompiler_alias_NULL$$);
  $coords$$22_event$$144$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$191$$, $minPt_xMinMax$$.x, $maxPt_plotArea$$2_yMinMax$$.x, $minPt_xMinMax$$.y, $maxPt_plotArea$$2_yMinMax$$.y);
  var $minPt_xMinMax$$ = {}, $maxPt_plotArea$$2_yMinMax$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$1$$ = {};
  $chart$$191$$.$xAxis$ && ($minPt_xMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$191$$.$xAxis$, $coords$$22_event$$144$$.$xMin$, $coords$$22_event$$144$$.$xMax$, $limitExtent$$), $startEndGroup$$1$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$191$$.$xAxis$, $minPt_xMinMax$$.min, $minPt_xMinMax$$.max));
  $chart$$191$$.$yAxis$ && ($maxPt_plotArea$$2_yMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$191$$.$yAxis$, $coords$$22_event$$144$$.$yMin$, $coords$$22_event$$144$$.$yMax$, $limitExtent$$));
  $chart$$191$$.$y2Axis$ && ($y2MinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$191$$.$y2Axis$, $coords$$22_event$$144$$.$yMin$, $coords$$22_event$$144$$.$yMax$, $limitExtent$$));
  return{$xMin$:$minPt_xMinMax$$.min, $xMax$:$minPt_xMinMax$$.max, $yMin$:$maxPt_plotArea$$2_yMinMax$$.min, $yMax$:$maxPt_plotArea$$2_yMinMax$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$79$$, $center$$1_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$, $limitExtent$$1_minExtent$$) {
  if($center$$1_min$$6_minCoord$$2$$ == D.$JSCompiler_alias_NULL$$ || $max$$6_maxCoord$$2$$ == D.$JSCompiler_alias_NULL$$) {
    return{min:D.$JSCompiler_alias_NULL$$, max:D.$JSCompiler_alias_NULL$$}
  }
  $center$$1_min$$6_minCoord$$2$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$79$$, $center$$1_min$$6_minCoord$$2$$);
  $max$$6_maxCoord$$2$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$79$$, $max$$6_maxCoord$$2$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$79$$.$Info$.$getMinimumExtent$(), $max$$6_maxCoord$$2$$ - $center$$1_min$$6_minCoord$$2$$ < $limitExtent$$1_minExtent$$ && ($center$$1_min$$6_minCoord$$2$$ = ($max$$6_maxCoord$$2$$ + $center$$1_min$$6_minCoord$$2$$) / 2, $max$$6_maxCoord$$2$$ = $center$$1_min$$6_minCoord$$2$$ + $limitExtent$$1_minExtent$$ / 2, $center$$1_min$$6_minCoord$$2$$ -= $limitExtent$$1_minExtent$$ / 2), D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$79$$, 
  $center$$1_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$)) : D.$DvtChartEventUtils$$.$_getActualMinMax$($axis$$79$$, $center$$1_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$)
};
D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$192$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$) {
  $deltas_xMinDelta$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$192$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$);
  $xMaxDelta_xMinMax$$1$$ = {};
  $yMinDelta_yMinMax$$1$$ = {};
  $y2MinMax$$1_yMaxDelta$$ = {};
  var $startEndGroup$$2$$ = {};
  $chart$$192$$.$xAxis$ && ($xMaxDelta_xMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$192$$.$xAxis$, $deltas_xMinDelta$$.$xMin$, $deltas_xMinDelta$$.$xMax$), $startEndGroup$$2$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$192$$.$xAxis$, $xMaxDelta_xMinMax$$1$$.min, $xMaxDelta_xMinMax$$1$$.max));
  $chart$$192$$.$yAxis$ && ($yMinDelta_yMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$192$$.$yAxis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  $chart$$192$$.$y2Axis$ && ($y2MinMax$$1_yMaxDelta$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$192$$.$y2Axis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  return{$xMin$:$xMaxDelta_xMinMax$$1$$.min, $xMax$:$xMaxDelta_xMinMax$$1$$.max, $yMin$:$yMinDelta_yMinMax$$1$$.min, $yMax$:$yMinDelta_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$1_yMaxDelta$$.min, $y2Max$:$y2MinMax$$1_yMaxDelta$$.max, $startGroup$:$startEndGroup$$2$$.$startGroup$, $endGroup$:$startEndGroup$$2$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$80$$, $minDelta$$, $maxDelta$$) {
  var $min$$7$$ = (0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($axis$$80$$), $max$$7$$ = (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($axis$$80$$);
  if($maxDelta$$ == $minDelta$$ && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($axis$$80$$)) {
    return D.$DvtChartEventUtils$$.$_getActualMinMax$($axis$$80$$, $min$$7$$, $max$$7$$)
  }
  var $minDeltaVal$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$80$$, $minDelta$$) - (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$80$$, 0), $maxDeltaVal$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$80$$, $maxDelta$$) - (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$80$$, 0), $weight$$ = 1, $newExtent$$ = $max$$7$$ + $maxDeltaVal$$ - ($min$$7$$ + $minDeltaVal$$), $minExtent$$1$$ = $axis$$80$$.$Info$.$getMinimumExtent$();
  $minDelta$$ != $maxDelta$$ && $newExtent$$ < $minExtent$$1$$ && ($weight$$ = ($max$$7$$ - $min$$7$$ - $minExtent$$1$$) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$80$$, $min$$7$$ + $minDeltaVal$$ * $weight$$, $max$$7$$ + $maxDeltaVal$$ * $weight$$)
};
D.$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$193$$, $xMin$$3$$, $xMax$$3$$, $yMin$$4$$, $yMax$$4$$) {
  var $axisCoord$$4$$ = {}, $isRTL$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$193$$.$getCtx$());
  D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$193$$) ? ($axisCoord$$4$$.$xMin$ = $yMin$$4$$, $axisCoord$$4$$.$xMax$ = $yMax$$4$$, $axisCoord$$4$$.$yMin$ = $isRTL$$16$$ ? $xMax$$3$$ : $xMin$$3$$, $axisCoord$$4$$.$yMax$ = $isRTL$$16$$ ? $xMin$$3$$ : $xMax$$3$$) : ($axisCoord$$4$$.$xMin$ = $isRTL$$16$$ ? $xMax$$3$$ : $xMin$$3$$, $axisCoord$$4$$.$xMax$ = $isRTL$$16$$ ? $xMin$$3$$ : $xMax$$3$$, $axisCoord$$4$$.$yMin$ = $yMax$$4$$, $axisCoord$$4$$.$yMax$ = $yMin$$4$$);
  return $axisCoord$$4$$
};
D.$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$81$$, $min$$8$$, $max$$8$$) {
  var $globalMin$$1$$ = $axis$$81$$.$actualToLinear$($axis$$81$$.$Info$.$GlobalMin$), $globalMax$$1$$ = $axis$$81$$.$actualToLinear$($axis$$81$$.$Info$.$GlobalMax$);
  $max$$8$$ - $min$$8$$ >= $globalMax$$1$$ - $globalMin$$1$$ ? ($min$$8$$ = $globalMin$$1$$, $max$$8$$ = $globalMax$$1$$) : $min$$8$$ < $globalMin$$1$$ ? ($max$$8$$ += $globalMin$$1$$ - $min$$8$$, $min$$8$$ = $globalMin$$1$$) : $max$$8$$ > $globalMax$$1$$ && ($min$$8$$ -= $max$$8$$ - $globalMax$$1$$, $max$$8$$ = $globalMax$$1$$);
  return D.$DvtChartEventUtils$$.$_getActualMinMax$($axis$$81$$, $min$$8$$, $max$$8$$)
};
D.$DvtChartEventUtils$$.$_getActualMinMax$ = function $$DvtChartEventUtils$$$$_getActualMinMax$$($axis$$82$$, $min$$9$$, $max$$9$$) {
  return{min:$axis$$82$$.$linearToActual$($min$$9$$), max:$axis$$82$$.$linearToActual$($max$$9$$)}
};
D.$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$83_endGroup$$2$$, $min$$10_startGroup$$2_startIdx$$, $endIdx_max$$10$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$83_endGroup$$2$$) && ($min$$10_startGroup$$2_startIdx$$ != D.$JSCompiler_alias_NULL$$ && $endIdx_max$$10$$ != D.$JSCompiler_alias_NULL$$) && ($min$$10_startGroup$$2_startIdx$$ = window.Math.ceil($min$$10_startGroup$$2_startIdx$$), $endIdx_max$$10$$ = window.Math.floor($endIdx_max$$10$$), $endIdx_max$$10$$ >= $min$$10_startGroup$$2_startIdx$$) ? ($min$$10_startGroup$$2_startIdx$$ = $axis$$83_endGroup$$2$$.$Info$.$getGroup$($min$$10_startGroup$$2_startIdx$$), 
  $axis$$83_endGroup$$2$$ = $axis$$83_endGroup$$2$$.$Info$.$getGroup$($endIdx_max$$10$$), {$startGroup$:$min$$10_startGroup$$2_startIdx$$, $endGroup$:$axis$$83_endGroup$$2$$}) : {$startGroup$:D.$JSCompiler_alias_NULL$$, $endGroup$:D.$JSCompiler_alias_NULL$$}
};
D.$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$194$$, $selected$$11$$) {
  var $handler$$37$$ = $chart$$194$$.$getSelectionHandler$();
  if($handler$$37$$) {
    for(var $peers$$4$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$194$$), $selectedIds$$3$$ = [], $i$$208$$ = 0;$i$$208$$ < $selected$$11$$.length;$i$$208$$++) {
      for(var $j$$39$$ = 0;$j$$39$$ < $peers$$4$$.length;$j$$39$$++) {
        var $peer$$19$$ = $peers$$4$$[$j$$39$$];
        $peer$$19$$.$getSeries$() === $selected$$11$$[$i$$208$$].series && $peer$$19$$.$getGroup$() === $selected$$11$$[$i$$208$$].group && $selectedIds$$3$$.push($peer$$19$$.getId())
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$37$$, $selectedIds$$3$$, $peers$$4$$)
  }
};
D.$DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($chart$$195_peers$$5$$) {
  var $navigables$$3$$ = [];
  if(D.$DvtChartTypeUtils$$.$isPie$($chart$$195_peers$$5$$)) {
    for(var $slices$$5$$ = $chart$$195_peers$$5$$.$pieChart$.$_slices$, $i$$209$$ = 0;$i$$209$$ < $slices$$5$$.length;$i$$209$$++) {
      D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$195_peers$$5$$, $slices$$5$$[$i$$209$$].$getSeriesIndex$()) && $navigables$$3$$.push($slices$$5$$[$i$$209$$])
    }
  }else {
    $chart$$195_peers$$5$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$195_peers$$5$$);
    for($i$$209$$ = 0;$i$$209$$ < $chart$$195_peers$$5$$.length;$i$$209$$++) {
      $chart$$195_peers$$5$$[$i$$209$$].$isNavigable$() && $navigables$$3$$.push($chart$$195_peers$$5$$[$i$$209$$])
    }
  }
  return $navigables$$3$$
};
D.$DvtChartEventUtils$$.$isSeriesDrillable$ = function $$DvtChartEventUtils$$$$isSeriesDrillable$$($chart$$196$$, $seriesIndex$$70$$) {
  var $drilling$$1_series$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$196$$, $seriesIndex$$70$$), $drilling$$1_series$$11$$ = $drilling$$1_series$$11$$ != D.$JSCompiler_alias_NULL$$ ? $drilling$$1_series$$11$$.drilling : "inherit";
  if("on" == $drilling$$1_series$$11$$) {
    return D.$JSCompiler_alias_TRUE$$
  }
  if("off" == $drilling$$1_series$$11$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $drilling$$1_series$$11$$ = $chart$$196$$.$getOptions$().drilling;
  return"on" == $drilling$$1_series$$11$$ || "seriesOnly" == $drilling$$1_series$$11$$
};
D.$DvtChartEventUtils$$.$isDataItemDrillable$ = function $$DvtChartEventUtils$$$$isDataItemDrillable$$($chart$$197$$, $drilling$$2_item$$5_seriesIndex$$71$$, $groupIndex$$46$$) {
  $drilling$$2_item$$5_seriesIndex$$71$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$197$$, $drilling$$2_item$$5_seriesIndex$$71$$, $groupIndex$$46$$);
  $drilling$$2_item$$5_seriesIndex$$71$$ = $drilling$$2_item$$5_seriesIndex$$71$$ != D.$JSCompiler_alias_NULL$$ ? $drilling$$2_item$$5_seriesIndex$$71$$.drilling : "inherit";
  if("on" == $drilling$$2_item$$5_seriesIndex$$71$$) {
    return D.$JSCompiler_alias_TRUE$$
  }
  if("off" == $drilling$$2_item$$5_seriesIndex$$71$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $drilling$$2_item$$5_seriesIndex$$71$$ = $chart$$197$$.$getOptions$().drilling;
  return"on" == $drilling$$2_item$$5_seriesIndex$$71$$
};
D.$DvtChartRefObjUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRefObjUtils$$, D.$DvtObj$$, "DvtChartRefObjUtils");
D.$DvtChartRefObjUtils$$.$getRefObjs$ = function $$DvtChartRefObjUtils$$$$getRefObjs$$($chart$$202_y2$$12$$) {
  var $x$$87$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$202_y2$$12$$, "x"), $y$$65$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$202_y2$$12$$, "y");
  $chart$$202_y2$$12$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$202_y2$$12$$, "y2");
  return $x$$87$$.concat($y$$65$$, $chart$$202_y2$$12$$)
};
D.$DvtChartRefObjUtils$$.$getAxisRefObjs$ = function $$DvtChartRefObjUtils$$$$getAxisRefObjs$$($chart$$203$$, $axisType$$5$$) {
  var $options$$75$$ = $chart$$203$$.$getOptions$();
  return $options$$75$$ && $options$$75$$[$axisType$$5$$ + "Axis"] && $options$$75$$[$axisType$$5$$ + "Axis"].referenceObjects ? $options$$75$$[$axisType$$5$$ + "Axis"].referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$8$$) {
  return"area" == $refObj$$8$$.type ? "area" : "line"
};
D.$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$9$$) {
  return"front" == $refObj$$9$$.location ? "front" : "back"
};
D.$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$10$$) {
  return $refObj$$10$$.color ? $refObj$$10$$.color : "#333333"
};
D.$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$11$$) {
  return $refObj$$11$$.lineWidth ? $refObj$$11$$.lineWidth : 1
};
D.$DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($refObj$$12$$) {
  return $refObj$$12$$.lineType ? $refObj$$12$$.lineType : "straight"
};
D.$DvtChartRefObjUtils$$.$isObjectRendered$ = function $$DvtChartRefObjUtils$$$$isObjectRendered$$($refObj$$13$$) {
  return"hidden" != $refObj$$13$$.visibility
};
D.$DvtChartRefObjUtils$$.getId = function $$DvtChartRefObjUtils$$$getId$($refObj$$14$$) {
  return $refObj$$14$$.id != D.$JSCompiler_alias_NULL$$ ? $refObj$$14$$.id : $refObj$$14$$.text
};
D.$DvtChartRefObjUtils$$.$getRefObj$ = function $$DvtChartRefObjUtils$$$$getRefObj$$($chart$$204$$, $id$$36$$) {
  for(var $refObjs$$3$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$204$$), $i$$210$$ = 0;$i$$210$$ < $refObjs$$3$$.length;$i$$210$$++) {
    if(D.$DvtChartRefObjUtils$$.getId($refObjs$$3$$[$i$$210$$]) == $id$$36$$) {
      return $refObjs$$3$$[$i$$210$$]
    }
  }
};
D.$DvtChartRefObjUtils$$.$getLowValue$ = function $$DvtChartRefObjUtils$$$$getLowValue$$($item$$6$$) {
  return $item$$6$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $item$$6$$.min != D.$JSCompiler_alias_NULL$$ ? $item$$6$$.min : $item$$6$$.low
};
D.$DvtChartRefObjUtils$$.$getHighValue$ = function $$DvtChartRefObjUtils$$$$getHighValue$$($item$$7$$) {
  return $item$$7$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $item$$7$$.max != D.$JSCompiler_alias_NULL$$ ? $item$$7$$.max : $item$$7$$.high
};
D.$DvtChartRefObjUtils$$.$getXValue$ = function $$DvtChartRefObjUtils$$$$getXValue$$($chart$$205$$, $items$$8$$, $index$$142$$) {
  return $items$$8$$[$index$$142$$] && !(0,window.isNaN)($items$$8$$[$index$$142$$].x) ? $items$$8$$[$index$$142$$].x : D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$205$$) && !D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$205$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$205$$, $index$$142$$) : $index$$142$$
};
D.$DvtChartSeriesEffectUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesEffectUtils$$, D.$DvtObj$$, "DvtChartSeriesEffectUtils");
D.$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$206_colors$$, $pattern$$2_seriesIndex$$74$$, $groupIndex$$47_seriesEffect$$, $angle$$9_bHoriz$$11$$, $barWidth$$7$$) {
  var $color$$13_stops$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$206_colors$$, $pattern$$2_seriesIndex$$74$$, $groupIndex$$47_seriesEffect$$);
  $pattern$$2_seriesIndex$$74$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$206_colors$$, $pattern$$2_seriesIndex$$74$$, $groupIndex$$47_seriesEffect$$);
  $groupIndex$$47_seriesEffect$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$206_colors$$);
  return $pattern$$2_seriesIndex$$74$$ ? new D.$DvtPatternFill$$($pattern$$2_seriesIndex$$74$$, $color$$13_stops$$) : "gradient" == $groupIndex$$47_seriesEffect$$ && 3 < $barWidth$$7$$ ? ($angle$$9_bHoriz$$11$$ = $angle$$9_bHoriz$$11$$ ? 270 : 0, D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$206_colors$$) ? ($chart$$206_colors$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$13_stops$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$13_stops$$, -0.04, -0.05)], $color$$13_stops$$ = [0, 
  1]) : ($chart$$206_colors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.15), D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.45), D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.25), $color$$13_stops$$, D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.15), D.$DvtColorUtils$$.$getDarker$($color$$13_stops$$, 0.9)], $color$$13_stops$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new D.$DvtLinearGradientFill$$($angle$$9_bHoriz$$11$$, $chart$$206_colors$$, D.$JSCompiler_alias_NULL$$, 
  $color$$13_stops$$)) : new D.$DvtSolidFill$$($color$$13_stops$$)
};
D.$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$207$$, $seriesIndex$$75$$) {
  var $alpha$$6_colors$$1_isLineWithArea$$2$$ = "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$207$$, $seriesIndex$$75$$), $color$$14_seriesItem$$13_stops$$1$$;
  ($color$$14_seriesItem$$13_stops$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$207$$, $seriesIndex$$75$$)) && $color$$14_seriesItem$$13_stops$$1$$.areaColor ? $color$$14_seriesItem$$13_stops$$1$$ = $color$$14_seriesItem$$13_stops$$1$$.areaColor : ($color$$14_seriesItem$$13_stops$$1$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$207$$, $seriesIndex$$75$$), $alpha$$6_colors$$1_isLineWithArea$$2$$ && ($color$$14_seriesItem$$13_stops$$1$$ = D.$DvtColorUtils$$.$setAlpha$($color$$14_seriesItem$$13_stops$$1$$, 
  0.2)));
  var $angle$$10_pattern$$3$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$207$$, $seriesIndex$$75$$), $seriesEffect$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$207$$);
  return $angle$$10_pattern$$3$$ ? new D.$DvtPatternFill$$($angle$$10_pattern$$3$$, $color$$14_seriesItem$$13_stops$$1$$) : "gradient" == $seriesEffect$$1$$ ? ($angle$$10_pattern$$3$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$207$$) ? 180 : 270, $alpha$$6_colors$$1_isLineWithArea$$2$$ ? ($alpha$$6_colors$$1_isLineWithArea$$2$$ = D.$DvtColorUtils$$.$getAlpha$($color$$14_seriesItem$$13_stops$$1$$), $alpha$$6_colors$$1_isLineWithArea$$2$$ = [D.$DvtColorUtils$$.$setAlpha$($color$$14_seriesItem$$13_stops$$1$$, 
  window.Math.min($alpha$$6_colors$$1_isLineWithArea$$2$$ + 0.2, 1)), D.$DvtColorUtils$$.$setAlpha$($color$$14_seriesItem$$13_stops$$1$$, window.Math.max($alpha$$6_colors$$1_isLineWithArea$$2$$ - 0.15, 0))], $color$$14_seriesItem$$13_stops$$1$$ = [0, 1]) : D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$207$$) ? ($alpha$$6_colors$$1_isLineWithArea$$2$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$14_seriesItem$$13_stops$$1$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$14_seriesItem$$13_stops$$1$$, 
  -0.04, -0.05)], $color$$14_seriesItem$$13_stops$$1$$ = [0, 1]) : ($alpha$$6_colors$$1_isLineWithArea$$2$$ = D.$DvtChartTypeUtils$$.$isSpark$($chart$$207$$) ? [D.$DvtColorUtils$$.$getDarker$($color$$14_seriesItem$$13_stops$$1$$, 0.5), $color$$14_seriesItem$$13_stops$$1$$, D.$DvtColorUtils$$.$getPastel$($color$$14_seriesItem$$13_stops$$1$$, 0.5)] : [D.$DvtColorUtils$$.$getPastel$($color$$14_seriesItem$$13_stops$$1$$, 0.5), $color$$14_seriesItem$$13_stops$$1$$, D.$DvtColorUtils$$.$getDarker$($color$$14_seriesItem$$13_stops$$1$$, 
  0.7)], $color$$14_seriesItem$$13_stops$$1$$ = [0, 0.5, 1]), new D.$DvtLinearGradientFill$$($angle$$10_pattern$$3$$, $alpha$$6_colors$$1_isLineWithArea$$2$$, D.$JSCompiler_alias_NULL$$, $color$$14_seriesItem$$13_stops$$1$$)) : new D.$DvtSolidFill$$($color$$14_seriesItem$$13_stops$$1$$)
};
D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$208_colors$$2_linearColors_radialColors$$, $seriesIndex$$76$$, $groupIndex$$48$$) {
  var $color$$15$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$208_colors$$2_linearColors_radialColors$$, $seriesIndex$$76$$, $groupIndex$$48$$), $pattern$$4$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$208_colors$$2_linearColors_radialColors$$, $seriesIndex$$76$$, $groupIndex$$48$$);
  if("bubble" == $chart$$208_colors$$2_linearColors_radialColors$$.$getType$()) {
    var $seriesEffect$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$208_colors$$2_linearColors_radialColors$$);
    if($pattern$$4$$) {
      return new D.$DvtPatternFill$$($pattern$$4$$, $color$$15$$)
    }
    if("gradient" == $seriesEffect$$2$$) {
      if(D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$208_colors$$2_linearColors_radialColors$$)) {
        return $chart$$208_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$15$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$15$$, -0.04, -0.05)], new D.$DvtLinearGradientFill$$(270, $chart$$208_colors$$2_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 1])
      }
      if("human" == D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$208_colors$$2_linearColors_radialColors$$, $seriesIndex$$76$$, $groupIndex$$48$$)) {
        return $chart$$208_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$15$$, 0.2), D.$DvtColorUtils$$.$getPastel$($color$$15$$, 0.1), $color$$15$$, D.$DvtColorUtils$$.$getDarker$($color$$15$$, 0.8)], new D.$DvtLinearGradientFill$$(315, $chart$$208_colors$$2_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
      }
      $chart$$208_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$15$$, 0.15), $color$$15$$, D.$DvtColorUtils$$.$getDarker$($color$$15$$, 0.9), D.$DvtColorUtils$$.$getDarker$($color$$15$$, 0.8)];
      return new D.$DvtRadialGradientFill$$($chart$$208_colors$$2_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
    }
  }
  return new D.$DvtSolidFill$$($color$$15$$)
};
D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$209_colors$$3$$, $pattern$$5_seriesIndex$$77$$, $color$$16_stops$$3$$, $dimensions_fill$$12$$, $bBackground$$) {
  $pattern$$5_seriesIndex$$77$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$209_colors$$3$$, $pattern$$5_seriesIndex$$77$$, 0);
  var $seriesEffect$$3$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$209_colors$$3$$);
  return $pattern$$5_seriesIndex$$77$$ && !$bBackground$$ ? ($dimensions_fill$$12$$ = new D.$DvtPatternFill$$($pattern$$5_seriesIndex$$77$$, $color$$16_stops$$3$$), "vertical" == $chart$$209_colors$$3$$.$getOptions$().orientation && ((0,D.$DvtAgent$isRightToLeft$$)($chart$$209_colors$$3$$.$getCtx$()) ? $dimensions_fill$$12$$.$setMatrix$(new D.$DvtMatrix$$(0, -1, 1, 0)) : $dimensions_fill$$12$$.$setMatrix$(new D.$DvtMatrix$$(0, 1, -1, 0))), $dimensions_fill$$12$$) : "gradient" == $seriesEffect$$3$$ ? 
  ("on" == $chart$$209_colors$$3$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$209_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, 0, -0.1), D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, 0, 0.12), $color$$16_stops$$3$$], $color$$16_stops$$3$$ = [0, 0.65, 1]) : ($chart$$209_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, -0.04, -0.05)], $color$$16_stops$$3$$ = [0, 1]), new D.$DvtLinearGradientFill$$(90, 
  $chart$$209_colors$$3$$, D.$JSCompiler_alias_NULL$$, $color$$16_stops$$3$$, [$dimensions_fill$$12$$.x, $dimensions_fill$$12$$.y, $dimensions_fill$$12$$.$w$, $dimensions_fill$$12$$.$h$])) : new D.$DvtSolidFill$$($color$$16_stops$$3$$)
};
D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$210$$) {
  return"skyros" != $chart$$210$$.$getSkin$()
};
D.$DvtChartStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartStyleUtils$$, D.$DvtObj$$, "DvtChartStyleUtils");
D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
D.$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$211$$, $seriesIndex$$78$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$211$$)) {
    return"auto"
  }
  var $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$211$$, $seriesIndex$$78$$), $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ = $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ ? $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$.type : D.$JSCompiler_alias_NULL$$;
  !D.$DvtChartTypeUtils$$.$isStock$($chart$$211$$) && "candlestick" == $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ && ($series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ = "auto");
  if(!$series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ || "auto" == $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$) {
    if(D.$DvtChartTypeUtils$$.$isBar$($chart$$211$$)) {
      return"bar"
    }
    if(D.$DvtChartTypeUtils$$.$isLine$($chart$$211$$)) {
      return"line"
    }
    if(D.$DvtChartTypeUtils$$.$isArea$($chart$$211$$)) {
      return"area"
    }
    if(D.$DvtChartTypeUtils$$.$isLineWithArea$($chart$$211$$)) {
      return"lineWithArea"
    }
    if(D.$DvtChartTypeUtils$$.$isStock$($chart$$211$$)) {
      return"candlestick"
    }
    if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$211$$)) {
      return $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$211$$, $seriesIndex$$78$$), $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$211$$, $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$) % D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$12_seriesItem$$14_seriesType$$7_typeIndex$$]
    }
  }else {
    return $series$$12_seriesItem$$14_seriesType$$7_typeIndex$$
  }
};
D.$DvtChartStyleUtils$$.$isRangeSeries$ = function $$DvtChartStyleUtils$$$$isRangeSeries$$($chart$$212$$, $seriesIndex$$79$$) {
  var $isRange$$3_map$$inline_2450$$;
  $isRange$$3_map$$inline_2450$$ = $chart$$212$$.$Cache$.isRange;
  $isRange$$3_map$$inline_2450$$ || ($isRange$$3_map$$inline_2450$$ = {}, $chart$$212$$.$Cache$.isRange = $isRange$$3_map$$inline_2450$$);
  $isRange$$3_map$$inline_2450$$ = $isRange$$3_map$$inline_2450$$[$seriesIndex$$79$$];
  if($isRange$$3_map$$inline_2450$$ != D.$JSCompiler_alias_NULL$$) {
    return $isRange$$3_map$$inline_2450$$
  }
  $isRange$$3_map$$inline_2450$$ = D.$JSCompiler_alias_FALSE$$;
  var $g$$7_map$$inline_2456_seriesType$$8$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$212$$, $seriesIndex$$79$$);
  if("bar" == $g$$7_map$$inline_2456_seriesType$$8$$ || "area" == $g$$7_map$$inline_2456_seriesType$$8$$) {
    for($g$$7_map$$inline_2456_seriesType$$8$$ = 0;$g$$7_map$$inline_2456_seriesType$$8$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$212$$);$g$$7_map$$inline_2456_seriesType$$8$$++) {
      if(D.$DvtChartDataUtils$$.$getLowValue$($chart$$212$$, $seriesIndex$$79$$, $g$$7_map$$inline_2456_seriesType$$8$$) != D.$JSCompiler_alias_NULL$$ || D.$DvtChartDataUtils$$.$getHighValue$($chart$$212$$, $seriesIndex$$79$$, $g$$7_map$$inline_2456_seriesType$$8$$) != D.$JSCompiler_alias_NULL$$) {
        $isRange$$3_map$$inline_2450$$ = D.$JSCompiler_alias_TRUE$$;
        break
      }
    }
  }
  $g$$7_map$$inline_2456_seriesType$$8$$ = $chart$$212$$.$Cache$.isRange;
  $g$$7_map$$inline_2456_seriesType$$8$$ || ($g$$7_map$$inline_2456_seriesType$$8$$ = {}, $chart$$212$$.$Cache$.isRange = $g$$7_map$$inline_2456_seriesType$$8$$);
  return $g$$7_map$$inline_2456_seriesType$$8$$[$seriesIndex$$79$$] = $isRange$$3_map$$inline_2450$$
};
D.$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$213$$) {
  return $chart$$213$$.$getOptions$().styleDefaults.seriesEffect
};
D.$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$214_colorIndex$$, $series$$13_seriesIndex$$80$$, $groupIndex$$49_options$$77_seriesItem$$15$$) {
  var $dataItem$$24_defaultColors$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$214_colorIndex$$, $series$$13_seriesIndex$$80$$, $groupIndex$$49_options$$77_seriesItem$$15$$);
  if($dataItem$$24_defaultColors$$ && $dataItem$$24_defaultColors$$.color) {
    return $dataItem$$24_defaultColors$$.color
  }
  if("candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$214_colorIndex$$, $series$$13_seriesIndex$$80$$)) {
    return D.$DvtChartStyleUtils$$.$getStockItemColor$($chart$$214_colorIndex$$, $series$$13_seriesIndex$$80$$, $groupIndex$$49_options$$77_seriesItem$$15$$)
  }
  if(($groupIndex$$49_options$$77_seriesItem$$15$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$214_colorIndex$$, $series$$13_seriesIndex$$80$$)) && $groupIndex$$49_options$$77_seriesItem$$15$$.color) {
    return $groupIndex$$49_options$$77_seriesItem$$15$$.color
  }
  $groupIndex$$49_options$$77_seriesItem$$15$$ = $chart$$214_colorIndex$$.$getOptions$();
  $dataItem$$24_defaultColors$$ = $groupIndex$$49_options$$77_seriesItem$$15$$.styleDefaults.colors;
  $series$$13_seriesIndex$$80$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$214_colorIndex$$, $series$$13_seriesIndex$$80$$);
  $chart$$214_colorIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$214_colorIndex$$, $series$$13_seriesIndex$$80$$) % $dataItem$$24_defaultColors$$.length;
  return $groupIndex$$49_options$$77_seriesItem$$15$$.styleDefaults.colors[$chart$$214_colorIndex$$]
};
D.$DvtChartStyleUtils$$.$getStockItemColor$ = function $$DvtChartStyleUtils$$$$getStockItemColor$$($chart$$215$$, $seriesIndex$$81$$, $groupIndex$$50$$) {
  var $options$$78$$ = $chart$$215$$.$getOptions$();
  return D.$DvtChartDataUtils$$.$isStockValueRising$($chart$$215$$, $seriesIndex$$81$$, $groupIndex$$50$$) ? $options$$78$$.styleDefaults.stockRisingColor : $options$$78$$.styleDefaults.stockFallingColor
};
D.$DvtChartStyleUtils$$.$getStockVolumeColor$ = function $$DvtChartStyleUtils$$$$getStockVolumeColor$$($chart$$216$$, $groupIndex$$51$$) {
  var $dataItem$$25_options$$79$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$216$$, 0, $groupIndex$$51$$);
  if($dataItem$$25_options$$79$$ && $dataItem$$25_options$$79$$.color) {
    return $dataItem$$25_options$$79$$.color
  }
  $dataItem$$25_options$$79$$ = $chart$$216$$.$getOptions$();
  return $dataItem$$25_options$$79$$.styleDefaults.stockVolumeColor ? $dataItem$$25_options$$79$$.styleDefaults.stockVolumeColor : D.$DvtChartStyleUtils$$.$getStockItemColor$($chart$$216$$, 0, $groupIndex$$51$$)
};
D.$DvtChartStyleUtils$$.$getSplitterPosition$ = function $$DvtChartStyleUtils$$$$getSplitterPosition$$($chart$$217$$) {
  var $splitterPosition$$1$$ = $chart$$217$$.$getOptions$().splitterPosition;
  return $splitterPosition$$1$$ != D.$JSCompiler_alias_NULL$$ ? $splitterPosition$$1$$ : D.$DvtChartTypeUtils$$.$isStock$($chart$$217$$) ? 0.8 : 0.5
};
D.$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$, $groupIndex$$52_options$$81$$) {
  if(D.$DvtChartTypeUtils$$.$isScatter$($bRtl$$1_chart$$218_patternIndex$$) || "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $dataItem$$26_defaultPatterns_seriesItem$$16$$ = D.$DvtChartDataUtils$$.$getDataItem$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$, $groupIndex$$52_options$$81$$);
  if($dataItem$$26_defaultPatterns_seriesItem$$16$$ && $dataItem$$26_defaultPatterns_seriesItem$$16$$.pattern && "auto" != $dataItem$$26_defaultPatterns_seriesItem$$16$$.pattern || ($dataItem$$26_defaultPatterns_seriesItem$$16$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$)) && $dataItem$$26_defaultPatterns_seriesItem$$16$$.pattern && "auto" != $dataItem$$26_defaultPatterns_seriesItem$$16$$.pattern) {
    return $dataItem$$26_defaultPatterns_seriesItem$$16$$.pattern
  }
  if("pattern" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($bRtl$$1_chart$$218_patternIndex$$)) {
    if(D.$DvtChartTypeUtils$$.$isStock$ && "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$)) {
      return $bRisingValue_series$$14_seriesIndex$$83$$ = D.$DvtChartDataUtils$$.$isStockValueRising$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$, $groupIndex$$52_options$$81$$), $bRtl$$1_chart$$218_patternIndex$$ = (0,D.$DvtAgent$isRightToLeft$$)($bRtl$$1_chart$$218_patternIndex$$.$getCtx$()), $bRisingValue_series$$14_seriesIndex$$83$$ ? $bRtl$$1_chart$$218_patternIndex$$ ? "smallDiagonalLeft" : "smallDiagonalRight" : $bRtl$$1_chart$$218_patternIndex$$ ? "smallDiagonalRight" : 
      "smallDiagonalLeft"
    }
    $groupIndex$$52_options$$81$$ = $bRtl$$1_chart$$218_patternIndex$$.$getOptions$();
    $dataItem$$26_defaultPatterns_seriesItem$$16$$ = $groupIndex$$52_options$$81$$.styleDefaults.patterns;
    $bRisingValue_series$$14_seriesIndex$$83$$ = D.$DvtChartDataUtils$$.$getSeries$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$);
    $bRtl$$1_chart$$218_patternIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($bRtl$$1_chart$$218_patternIndex$$, $bRisingValue_series$$14_seriesIndex$$83$$) % $dataItem$$26_defaultPatterns_seriesItem$$16$$.length;
    return $groupIndex$$52_options$$81$$.styleDefaults.patterns[$bRtl$$1_chart$$218_patternIndex$$]
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getMarkerBorderColor$ = function $$DvtChartStyleUtils$$$$getMarkerBorderColor$$($chart$$219_markerColor$$1$$, $seriesIndex$$84$$, $groupIndex$$53$$) {
  var $borderColor$$15$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$219_markerColor$$1$$, $seriesIndex$$84$$, $groupIndex$$53$$);
  return $borderColor$$15$$ ? $borderColor$$15$$ : 0 < D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$219_markerColor$$1$$) && "lineWithArea" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$219_markerColor$$1$$, $seriesIndex$$84$$) ? D.$DvtChartStyleUtils$$.$getBackgroundColor$($chart$$219_markerColor$$1$$, D.$JSCompiler_alias_TRUE$$) : D.$DvtChartTypeUtils$$.$isBubble$($chart$$219_markerColor$$1$$) && ("skyros" != $chart$$219_markerColor$$1$$.$getSkin$() && "gradient" != D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$219_markerColor$$1$$)) && 
  ($chart$$219_markerColor$$1$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$219_markerColor$$1$$, $seriesIndex$$84$$, $groupIndex$$53$$)) ? D.$DvtColorUtils$$.$adjustHSL$($chart$$219_markerColor$$1$$, 0.15, -0.25) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$220_styleDefaults$$, $seriesIndex$$85_seriesItem$$17$$, $dataItem$$27_groupIndex$$54$$) {
  if(($dataItem$$27_groupIndex$$54$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$220_styleDefaults$$, $seriesIndex$$85_seriesItem$$17$$, $dataItem$$27_groupIndex$$54$$)) && $dataItem$$27_groupIndex$$54$$.borderColor) {
    return $dataItem$$27_groupIndex$$54$$.borderColor
  }
  if(($seriesIndex$$85_seriesItem$$17$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$220_styleDefaults$$, $seriesIndex$$85_seriesItem$$17$$)) && $seriesIndex$$85_seriesItem$$17$$.borderColor) {
    return $seriesIndex$$85_seriesItem$$17$$.borderColor
  }
  $chart$$220_styleDefaults$$ = $chart$$220_styleDefaults$$.$getOptions$().styleDefaults;
  return"auto" != $chart$$220_styleDefaults$$.borderColor ? $chart$$220_styleDefaults$$.borderColor : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getBorderWidth$ = function $$DvtChartStyleUtils$$$$getBorderWidth$$($chart$$221$$, $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$, $dataItem$$28_groupIndex$$55$$) {
  if(($dataItem$$28_groupIndex$$55$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$221$$, $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$, $dataItem$$28_groupIndex$$55$$)) && $dataItem$$28_groupIndex$$55$$.borderWidth) {
    return $dataItem$$28_groupIndex$$55$$.borderWidth
  }
  if(($seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$221$$, $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$)) && $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$.borderWidth) {
    return $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$.borderWidth
  }
  $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$ = $chart$$221$$.$getOptions$().styleDefaults;
  return"auto" != $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$.borderWidth ? $seriesIndex$$86_seriesItem$$18_styleDefaults$$1$$.borderWidth : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$221$$) || D.$DvtChartTypeUtils$$.$isLineArea$($chart$$221$$) ? 1.25 : 1
};
D.$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$222$$, $seriesIndex$$87$$, $groupIndex$$56$$) {
  if(!D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$222$$, $seriesIndex$$87$$, $groupIndex$$56$$)) {
    return D.$DvtChartStyleUtils$$.$getColor$($chart$$222$$, $seriesIndex$$87$$, $groupIndex$$56$$)
  }
  var $dataItem$$29_defaultMarkerColor_seriesItem$$19$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$222$$, $seriesIndex$$87$$, $groupIndex$$56$$);
  return $dataItem$$29_defaultMarkerColor_seriesItem$$19$$ && $dataItem$$29_defaultMarkerColor_seriesItem$$19$$.color ? $dataItem$$29_defaultMarkerColor_seriesItem$$19$$.color : ($dataItem$$29_defaultMarkerColor_seriesItem$$19$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$222$$, $seriesIndex$$87$$)) && $dataItem$$29_defaultMarkerColor_seriesItem$$19$$.markerColor ? $dataItem$$29_defaultMarkerColor_seriesItem$$19$$.markerColor : ($dataItem$$29_defaultMarkerColor_seriesItem$$19$$ = $chart$$222$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$29_defaultMarkerColor_seriesItem$$19$$ : D.$DvtChartStyleUtils$$.$getColor$($chart$$222$$, $seriesIndex$$87$$, $groupIndex$$56$$)
};
D.$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$223_styleIndex$$3$$, $series$$15_seriesIndex$$88$$, $dataItem$$30_groupIndex$$57$$) {
  var $options$$84_shapeRamp$$ = $chart$$223_styleIndex$$3$$.$getOptions$(), $shape$$32$$ = $options$$84_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$223_styleIndex$$3$$, $series$$15_seriesIndex$$88$$);
  $seriesItem$$20$$ && $seriesItem$$20$$.markerShape && ($shape$$32$$ = $seriesItem$$20$$.markerShape);
  ($dataItem$$30_groupIndex$$57$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$223_styleIndex$$3$$, $series$$15_seriesIndex$$88$$, $dataItem$$30_groupIndex$$57$$)) && $dataItem$$30_groupIndex$$57$$.markerShape && ($shape$$32$$ = $dataItem$$30_groupIndex$$57$$.markerShape);
  "auto" == $shape$$32$$ && ("bubble" == $chart$$223_styleIndex$$3$$.$getType$() || D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$223_styleIndex$$3$$, $series$$15_seriesIndex$$88$$) ? $shape$$32$$ = "circle" : ($series$$15_seriesIndex$$88$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$223_styleIndex$$3$$, $series$$15_seriesIndex$$88$$), $chart$$223_styleIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$223_styleIndex$$3$$, $series$$15_seriesIndex$$88$$), $options$$84_shapeRamp$$ = 
  $options$$84_shapeRamp$$.styleDefaults.shapes, $shape$$32$$ = $options$$84_shapeRamp$$[$chart$$223_styleIndex$$3$$ % $options$$84_shapeRamp$$.length]));
  return $shape$$32$$
};
D.$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$224$$, $seriesIndex$$89_seriesItem$$21$$, $dataItem$$31_groupIndex$$58_markerSize$$6$$) {
  $dataItem$$31_groupIndex$$58_markerSize$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$224$$, $seriesIndex$$89_seriesItem$$21$$, $dataItem$$31_groupIndex$$58_markerSize$$6$$);
  $seriesIndex$$89_seriesItem$$21$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$224$$, $seriesIndex$$89_seriesItem$$21$$);
  var $options$$85$$ = $chart$$224$$.$getOptions$();
  $dataItem$$31_groupIndex$$58_markerSize$$6$$ = $dataItem$$31_groupIndex$$58_markerSize$$6$$ && (0,window.Number)($dataItem$$31_groupIndex$$58_markerSize$$6$$.markerSize) ? (0,window.Number)($dataItem$$31_groupIndex$$58_markerSize$$6$$.markerSize) : $seriesIndex$$89_seriesItem$$21$$ && (0,window.Number)($seriesIndex$$89_seriesItem$$21$$.markerSize) ? (0,window.Number)($seriesIndex$$89_seriesItem$$21$$.markerSize) : (0,window.Number)($options$$85$$.styleDefaults.markerSize);
  D.$DvtChartTypeUtils$$.$isOverview$($chart$$224$$) && ($dataItem$$31_groupIndex$$58_markerSize$$6$$ = window.Math.ceil(0.6 * $dataItem$$31_groupIndex$$58_markerSize$$6$$));
  return $dataItem$$31_groupIndex$$58_markerSize$$6$$
};
D.$DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($chart$$225$$, $seriesIndex$$90$$, $dataItem$$32_displayed_groupIndex$$59$$) {
  $dataItem$$32_displayed_groupIndex$$59$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$225$$, $seriesIndex$$90$$, $dataItem$$32_displayed_groupIndex$$59$$);
  var $seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$225$$, $seriesIndex$$90$$);
  $dataItem$$32_displayed_groupIndex$$59$$ = $dataItem$$32_displayed_groupIndex$$59$$ && $dataItem$$32_displayed_groupIndex$$59$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $dataItem$$32_displayed_groupIndex$$59$$.markerDisplayed : $seriesItem$$22$$ && $seriesItem$$22$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $seriesItem$$22$$.markerDisplayed : $chart$$225$$.$getOptions$().styleDefaults.markerDisplayed;
  return"on" == $dataItem$$32_displayed_groupIndex$$59$$ ? D.$JSCompiler_alias_TRUE$$ : "off" == $dataItem$$32_displayed_groupIndex$$59$$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$225$$) || "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$225$$, $seriesIndex$$90$$)
};
D.$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$226$$, $seriesIndex$$91$$) {
  var $lineWidth$$4_seriesItem$$23$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$226$$, $seriesIndex$$91$$), $options$$86$$ = $chart$$226$$.$getOptions$(), $lineWidth$$4_seriesItem$$23$$ = $lineWidth$$4_seriesItem$$23$$ && $lineWidth$$4_seriesItem$$23$$.lineWidth ? $lineWidth$$4_seriesItem$$23$$.lineWidth : $options$$86$$.styleDefaults.lineWidth ? $options$$86$$.styleDefaults.lineWidth : "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$226$$, $seriesIndex$$91$$) ? 2 : 3;
  D.$DvtChartTypeUtils$$.$isOverview$($chart$$226$$) && ($lineWidth$$4_seriesItem$$23$$ = window.Math.ceil(0.6 * $lineWidth$$4_seriesItem$$23$$));
  return $lineWidth$$4_seriesItem$$23$$
};
D.$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$227$$, $seriesIndex$$92$$) {
  var $seriesItem$$24$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$227$$, $seriesIndex$$92$$);
  return $seriesItem$$24$$ && $seriesItem$$24$$.lineStyle ? $seriesItem$$24$$.lineStyle : $chart$$227$$.$getOptions$().styleDefaults.lineStyle
};
D.$DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($chart$$228$$, $seriesIndex$$93$$) {
  var $lineType$$5_seriesItem$$25$$;
  $lineType$$5_seriesItem$$25$$ = ($lineType$$5_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$228$$, $seriesIndex$$93$$)) && $lineType$$5_seriesItem$$25$$.lineType ? $lineType$$5_seriesItem$$25$$.lineType : $chart$$228$$.$getOptions$().styleDefaults.lineType;
  "auto" == $lineType$$5_seriesItem$$25$$ && ($lineType$$5_seriesItem$$25$$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$228$$) ? "none" : "straight");
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$228$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$228$$)) {
    "centeredSegmented" == $lineType$$5_seriesItem$$25$$ && ($lineType$$5_seriesItem$$25$$ = "segmented"), "centeredStepped" == $lineType$$5_seriesItem$$25$$ && ($lineType$$5_seriesItem$$25$$ = "stepped")
  }
  return $lineType$$5_seriesItem$$25$$
};
D.$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$229$$) {
  return $chart$$229$$.$getOptions$().__sparkBarSpacing
};
D.$DvtChartStyleUtils$$.$getBarGapRatio$ = function $$DvtChartStyleUtils$$$$getBarGapRatio$$($chart$$230$$) {
  var $barGapRatio$$1_numStacks_numYStacks$$ = $chart$$230$$.$getOptions$().styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$1_numStacks_numYStacks$$ && "%" == $barGapRatio$$1_numStacks_numYStacks$$.slice(-1) && ($barGapRatio$$1_numStacks_numYStacks$$ = (0,window.Number)($barGapRatio$$1_numStacks_numYStacks$$.slice(0, -1)) / 100);
  if($barGapRatio$$1_numStacks_numYStacks$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($barGapRatio$$1_numStacks_numYStacks$$)) {
    return $barGapRatio$$1_numStacks_numYStacks$$
  }
  var $categories$$4_numY2Stacks$$ = D.$DvtChartDataUtils$$.$getStackCategories$($chart$$230$$, "bar"), $barGapRatio$$1_numStacks_numYStacks$$ = $categories$$4_numY2Stacks$$.y.length, $categories$$4_numY2Stacks$$ = $categories$$4_numY2Stacks$$.y2.length, $barGapRatio$$1_numStacks_numYStacks$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$230$$) ? window.Math.max($barGapRatio$$1_numStacks_numYStacks$$, $categories$$4_numY2Stacks$$) : $barGapRatio$$1_numStacks_numYStacks$$ + $categories$$4_numY2Stacks$$;
  return $barGapRatio$$1_numStacks_numYStacks$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$230$$) ? 1 == $barGapRatio$$1_numStacks_numYStacks$$ ? 0 : 0.25 : 1 == $barGapRatio$$1_numStacks_numYStacks$$ ? 0.37 + 0.26 / D.$DvtChartDataUtils$$.$getViewportGroupCount$($chart$$230$$) : 0.25
};
D.$DvtChartStyleUtils$$.$getMaxBarWidth$ = function $$DvtChartStyleUtils$$$$getMaxBarWidth$$($chart$$231$$) {
  var $maxBarWidth$$ = $chart$$231$$.$getOptions$().styleDefaults.maxBarWidth;
  return $maxBarWidth$$ != D.$JSCompiler_alias_NULL$$ && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$231$$) ? $maxBarWidth$$ : window.Infinity
};
D.$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$232$$, $ratio$$7_seriesIndex$$94$$, $groupIndex$$60$$) {
  $ratio$$7_seriesIndex$$94$$ = D.$DvtChartDataUtils$$.$getZValue$($chart$$232$$, $ratio$$7_seriesIndex$$94$$, $groupIndex$$60$$, 1) / $chart$$232$$.$getOptions$()._averageGroupZ;
  return window.Math.min($ratio$$7_seriesIndex$$94$$ * D.$DvtChartStyleUtils$$.$getGroupWidth$($chart$$232$$), D.$DvtChartStyleUtils$$.$getMaxBarWidth$($chart$$232$$))
};
D.$DvtChartStyleUtils$$.$getBarStackWidth$ = function $$DvtChartStyleUtils$$$$getBarStackWidth$$($chart$$233$$, $category$$9_ratio$$8$$, $groupIndex$$61$$, $isY2$$2$$) {
  $category$$9_ratio$$8$$ = D.$DvtChartDataUtils$$.$getBarCategoryZ$($chart$$233$$, $category$$9_ratio$$8$$, $groupIndex$$61$$, $isY2$$2$$) / $chart$$233$$.$getOptions$()._averageGroupZ;
  return window.Math.min($category$$9_ratio$$8$$ * D.$DvtChartStyleUtils$$.$getGroupWidth$($chart$$233$$), D.$DvtChartStyleUtils$$.$getMaxBarWidth$($chart$$233$$))
};
D.$DvtChartStyleUtils$$.$getBarCategoryOffsetMap$ = function $$DvtChartStyleUtils$$$$getBarCategoryOffsetMap$$($chart$$234$$, $groupIndex$$62$$) {
  var $categories$$5$$ = D.$DvtChartDataUtils$$.$getStackCategories$($chart$$234$$, "bar"), $isMixedFreq$$ = D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$234$$), $isSplitDualY$$2$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$234$$), $yOffsetMap$$ = {}, $y2OffsetMap$$ = {}, $yTotalWidth$$ = 0, $y2TotalWidth$$ = 0, $stackWidth$$1$$, $i$$211$$;
  for($i$$211$$ = 0;$i$$211$$ < $categories$$5$$.y.length;$i$$211$$++) {
    $stackWidth$$1$$ = D.$DvtChartStyleUtils$$.$getBarStackWidth$($chart$$234$$, $categories$$5$$.y[$i$$211$$], $groupIndex$$62$$, D.$JSCompiler_alias_FALSE$$), $isMixedFreq$$ ? $yOffsetMap$$[$categories$$5$$.y[$i$$211$$]] = -0.5 * $stackWidth$$1$$ : ($yOffsetMap$$[$categories$$5$$.y[$i$$211$$]] = $yTotalWidth$$, $yTotalWidth$$ += $stackWidth$$1$$)
  }
  $isSplitDualY$$2$$ || ($y2TotalWidth$$ = $yTotalWidth$$);
  for($i$$211$$ = 0;$i$$211$$ < $categories$$5$$.y2.length;$i$$211$$++) {
    $stackWidth$$1$$ = D.$DvtChartStyleUtils$$.$getBarStackWidth$($chart$$234$$, $categories$$5$$.y2[$i$$211$$], $groupIndex$$62$$, D.$JSCompiler_alias_TRUE$$), $isMixedFreq$$ ? $y2OffsetMap$$[$categories$$5$$.y2[$i$$211$$]] = -0.5 * $stackWidth$$1$$ : ($y2OffsetMap$$[$categories$$5$$.y2[$i$$211$$]] = $y2TotalWidth$$, $y2TotalWidth$$ += $stackWidth$$1$$)
  }
  $isSplitDualY$$2$$ || ($yTotalWidth$$ = $y2TotalWidth$$);
  for(var $category$$10$$ in $yOffsetMap$$) {
    $yOffsetMap$$[$category$$10$$] -= $yTotalWidth$$ / 2
  }
  for($category$$10$$ in $y2OffsetMap$$) {
    $y2OffsetMap$$[$category$$10$$] -= $y2TotalWidth$$ / 2
  }
  return{y:$yOffsetMap$$, y2:$y2OffsetMap$$}
};
D.$DvtChartStyleUtils$$.$getDataItemGaps$ = function $$DvtChartStyleUtils$$$$getDataItemGaps$$($chart$$235_dataItemGaps$$1$$) {
  var $options$$89_percentIndex$$ = $chart$$235_dataItemGaps$$1$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$235_dataItemGaps$$1$$) && "on" == $options$$89_percentIndex$$.styleDefaults.funnelSliceGaps) {
    return 1
  }
  if($options$$89_percentIndex$$.styleDefaults.sliceGaps != D.$JSCompiler_alias_NULL$$) {
    return $options$$89_percentIndex$$.styleDefaults.sliceGaps
  }
  $chart$$235_dataItemGaps$$1$$ = $options$$89_percentIndex$$.styleDefaults.dataItemGaps;
  "auto" == $chart$$235_dataItemGaps$$1$$ && ($chart$$235_dataItemGaps$$1$$ = "on" == $options$$89_percentIndex$$.styleDefaults.threeDEffect ? "0%" : "50%");
  $options$$89_percentIndex$$ = $chart$$235_dataItemGaps$$1$$ && $chart$$235_dataItemGaps$$1$$.indexOf ? $chart$$235_dataItemGaps$$1$$.indexOf("%") : -1;
  return 0 <= $options$$89_percentIndex$$ ? ($chart$$235_dataItemGaps$$1$$ = $chart$$235_dataItemGaps$$1$$.substring(0, $options$$89_percentIndex$$), $chart$$235_dataItemGaps$$1$$ / 100) : 0
};
D.$DvtChartStyleUtils$$.$isSelectable$ = function $$DvtChartStyleUtils$$$$isSelectable$$($chart$$236$$, $seriesIndex$$95$$, $groupIndex$$63$$) {
  var $seriesItem$$26$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$236$$, $seriesIndex$$95$$);
  return $seriesItem$$26$$ && "off" == $seriesItem$$26$$._selectable ? D.$JSCompiler_alias_FALSE$$ : $chart$$236$$.$isSelectionSupported$() && 0 <= $seriesIndex$$95$$ && 0 <= $groupIndex$$63$$
};
D.$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$237$$, $seriesIndex$$96$$) {
  var $hiddenCategories$$3$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$237$$), $seriesItem$$27$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$237$$, $seriesIndex$$96$$);
  if(0 < $hiddenCategories$$3$$.length && $seriesItem$$27$$) {
    if($seriesItem$$27$$.categories) {
      for(var $i$$212$$ = 0;$i$$212$$ < $seriesItem$$27$$.categories.length;$i$$212$$++) {
        if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$3$$, $seriesItem$$27$$.categories[$i$$212$$])) {
          return D.$JSCompiler_alias_FALSE$$
        }
      }
    }else {
      if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$3$$, D.$DvtChartDataUtils$$.$getSeries$($chart$$237$$, $seriesIndex$$96$$))) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$238_i$$213$$, $seriesIndex$$97$$, $dataItem$$33_groupIndex$$64$$) {
  if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$238_i$$213$$, $seriesIndex$$97$$)) {
    var $hiddenCategories$$4$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$238_i$$213$$);
    if(D.$DvtChartTypeUtils$$.$isPie$($chart$$238_i$$213$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$238_i$$213$$)) {
      $dataItem$$33_groupIndex$$64$$ = 0
    }
    $dataItem$$33_groupIndex$$64$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$238_i$$213$$, $seriesIndex$$97$$, $dataItem$$33_groupIndex$$64$$);
    if(0 < $hiddenCategories$$4$$.length && $dataItem$$33_groupIndex$$64$$) {
      if($dataItem$$33_groupIndex$$64$$.categories) {
        for($chart$$238_i$$213$$ = 0;$chart$$238_i$$213$$ < $dataItem$$33_groupIndex$$64$$.categories.length;$chart$$238_i$$213$$++) {
          if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$4$$, $dataItem$$33_groupIndex$$64$$.categories[$chart$$238_i$$213$$])) {
            return D.$JSCompiler_alias_FALSE$$
          }
        }
      }else {
        if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$4$$, D.$DvtChartDataUtils$$.$getSeries$($chart$$238_i$$213$$, $seriesIndex$$97$$))) {
          return D.$JSCompiler_alias_FALSE$$
        }
      }
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$239$$) {
  return $chart$$239$$.$getOptions$().animationOnDisplay
};
D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$240$$) {
  return $chart$$240$$.$getOptions$().animationOnDataChange
};
D.$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$241$$) {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)($chart$$241$$.$getOptions$().styleDefaults.animationDuration) / 1E3
};
D.$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$242$$) {
  return $chart$$242$$.$getOptions$().styleDefaults.animationIndicators
};
D.$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$243$$) {
  return $chart$$243$$.$getOptions$().styleDefaults.animationUpColor
};
D.$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$244$$) {
  return $chart$$244$$.$getOptions$().styleDefaults.animationDownColor
};
D.$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$245_options$$90$$) {
  $chart$$245_options$$90$$ = $chart$$245_options$$90$$.$getOptions$();
  $chart$$245_options$$90$$.hiddenCategories || ($chart$$245_options$$90$$.hiddenCategories = []);
  return $chart$$245_options$$90$$.hiddenCategories
};
D.$DvtChartStyleUtils$$.$getHighlightedCategories$ = function $$DvtChartStyleUtils$$$$getHighlightedCategories$$($chart$$246_options$$91$$) {
  $chart$$246_options$$91$$ = $chart$$246_options$$91$$.$getOptions$();
  $chart$$246_options$$91$$.highlightedCategories || ($chart$$246_options$$91$$.highlightedCategories = []);
  return $chart$$246_options$$91$$.highlightedCategories
};
D.$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$247$$) {
  return $chart$$247$$.$getOptions$().styleDefaults.selectedInnerColor
};
D.$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$248$$) {
  return $chart$$248$$.$getOptions$().styleDefaults.selectedOuterColor
};
D.$DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($chart$$249_effect$$5$$) {
  $chart$$249_effect$$5$$ = $chart$$249_effect$$5$$.$getOptions$().styleDefaults.selectionEffect;
  return"highlight" == $chart$$249_effect$$5$$ || "highlightAndExplode" == $chart$$249_effect$$5$$
};
D.$DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($chart$$250_effect$$6$$) {
  $chart$$250_effect$$6$$ = $chart$$250_effect$$6$$.$getOptions$().styleDefaults.selectionEffect;
  return"explode" == $chart$$250_effect$$6$$ || "highlightAndExplode" == $chart$$250_effect$$6$$
};
D.$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$251$$, $seriesIndex$$98$$, $groupIndex$$65$$, $dataColor$$12$$, $position$$26$$, $type$$98$$) {
  var $labelStyleArray$$1$$ = [], $contrastingColor$$;
  $dataColor$$12$$ && ("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$251$$, $seriesIndex$$98$$) || D.$DvtChartTypeUtils$$.$isBubble$($chart$$251$$)) && ("center" == $position$$26$$ || "inBottom" == $position$$26$$ || "inTop" == $position$$26$$ || "inRight" == $position$$26$$ || "inLeft" == $position$$26$$) ? ($contrastingColor$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$251$$, $seriesIndex$$98$$, $groupIndex$$65$$) != D.$JSCompiler_alias_NULL$$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($dataColor$$12$$), 
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"))) : $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: #333333;"));
  $labelStyleArray$$1$$.push(D.$DvtChartStyleUtils$$.$_parseLowHighArray$($chart$$251$$.$getOptions$().styleDefaults.dataLabelStyle, $type$$98$$));
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$(D.$DvtChartStyleUtils$$.$_parseLowHighArray$(D.$DvtChartDataUtils$$.$getDataItem$($chart$$251$$, $seriesIndex$$98$$, $groupIndex$$65$$).labelStyle, $type$$98$$)));
  $contrastingColor$$ && D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"));
  return(0,D.$DvtCSSStyle$mergeStyles$$)($labelStyleArray$$1$$)
};
D.$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($bNegative_chart$$252$$, $seriesIndex$$99$$, $groupIndex$$66$$, $type$$99$$) {
  var $position$$27$$ = D.$DvtChartDataUtils$$.$getDataItem$($bNegative_chart$$252$$, $seriesIndex$$99$$, $groupIndex$$66$$).labelPosition;
  $position$$27$$ || ($position$$27$$ = $bNegative_chart$$252$$.$getOptions$().styleDefaults.dataLabelPosition);
  var $position$$27$$ = D.$DvtChartStyleUtils$$.$_parseLowHighArray$($position$$27$$, $type$$99$$), $bRTL$$ = (0,D.$DvtAgent$isRightToLeft$$)($bNegative_chart$$252$$.$getCtx$()), $bHorizontal$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($bNegative_chart$$252$$), $bPolar$$3$$ = D.$DvtChartTypeUtils$$.$isPolar$($bNegative_chart$$252$$);
  if(D.$DvtChartTypeUtils$$.$isFunnel$($bNegative_chart$$252$$)) {
    return"none" == $position$$27$$ ? "none" : "center"
  }
  if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($bNegative_chart$$252$$, $seriesIndex$$99$$)) {
    if("center" == $position$$27$$ || $bPolar$$3$$) {
      return"center"
    }
    if("insideBarEdge" != $position$$27$$) {
      if(D.$DvtChartTypeUtils$$.$isStacked$($bNegative_chart$$252$$)) {
        return"center"
      }
      "outsideBarEdge" != $position$$27$$ && ($position$$27$$ = "insideBarEdge")
    }
    $bNegative_chart$$252$$ = "low" == $type$$99$$ ? D.$JSCompiler_alias_TRUE$$ : "high" == $type$$99$$ ? D.$JSCompiler_alias_FALSE$$ : 0 > D.$DvtChartDataUtils$$.getValue($bNegative_chart$$252$$, $seriesIndex$$99$$, $groupIndex$$66$$);
    return"outsideBarEdge" == $position$$27$$ ? $bHorizontal$$ ? !$bNegative_chart$$252$$ && !$bRTL$$ || $bNegative_chart$$252$$ && $bRTL$$ ? "right" : "left" : $bNegative_chart$$252$$ ? "bottom" : "top" : $bHorizontal$$ ? !$bNegative_chart$$252$$ && !$bRTL$$ || $bNegative_chart$$252$$ && $bRTL$$ ? "inRight" : "inLeft" : $bNegative_chart$$252$$ ? "inBottom" : "inTop"
  }
  if("center" == $position$$27$$) {
    return"center"
  }
  if("belowMarker" == $position$$27$$) {
    return"bottom"
  }
  if("aboveMarker" == $position$$27$$) {
    return"top"
  }
  if("afterMarker" != $position$$27$$ && "beforeMarker" != $position$$27$$) {
    if(D.$DvtChartTypeUtils$$.$isBubble$($bNegative_chart$$252$$)) {
      return"center"
    }
    if("low" == $type$$99$$ && !$bPolar$$3$$) {
      if($bHorizontal$$) {
        $position$$27$$ = "beforeMarker"
      }else {
        return"bottom"
      }
    }else {
      if("high" == $type$$99$$ && !$bPolar$$3$$) {
        if($bHorizontal$$) {
          $position$$27$$ = "afterMarker"
        }else {
          return"top"
        }
      }else {
        $position$$27$$ = "afterMarker"
      }
    }
  }
  return!$bRTL$$ && "afterMarker" == $position$$27$$ || $bRTL$$ && "beforeMarker" == $position$$27$$ ? "right" : "left"
};
D.$DvtChartStyleUtils$$.$_parseLowHighArray$ = function $$DvtChartStyleUtils$$$$_parseLowHighArray$$($value$$102$$, $type$$100$$) {
  return $value$$102$$ instanceof window.Array ? "high" == $type$$100$$ ? $value$$102$$[1] : $value$$102$$[0] : $value$$102$$
};
D.$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$253$$) {
  var $options$$92$$ = $chart$$253$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isOverviewSupported$($chart$$253$$) && "off" != $options$$92$$.overview.rendered
};
D.$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$254$$) {
  var $height$$45$$ = $chart$$254$$.$getOptions$().overview.height;
  $height$$45$$ == D.$JSCompiler_alias_NULL$$ && ($height$$45$$ = D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$254$$) ? 0.25 : 0.2);
  return D.$DvtChartStyleUtils$$.$getSizeInPixels$($height$$45$$, $chart$$254$$.getHeight())
};
D.$DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($size$$19$$, $totalSize$$) {
  if("string" == typeof $size$$19$$) {
    if("%" == $size$$19$$.slice(-1)) {
      return $totalSize$$ * (0,window.Number)($size$$19$$.slice(0, -1)) / 100
    }
    if("px" == $size$$19$$.slice(-2)) {
      return(0,window.Number)($size$$19$$.slice(0, -2))
    }
    $size$$19$$ = (0,window.Number)($size$$19$$)
  }
  return(0,window.isNaN)($size$$19$$) ? 0 : 1 >= $size$$19$$ ? $totalSize$$ * $size$$19$$ : $size$$19$$
};
D.$DvtChartStyleUtils$$.$getBackgroundColor$ = function $$DvtChartStyleUtils$$$$getBackgroundColor$$($chart$$255$$, $useDefault$$) {
  var $options$$94$$ = $chart$$255$$.$getOptions$();
  return $options$$94$$.plotArea.backgroundColor ? $options$$94$$.plotArea.backgroundColor : $useDefault$$ ? "#FFFFFF" : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getHoverBehaviorDelay$ = function $$DvtChartStyleUtils$$$$getHoverBehaviorDelay$$($chart$$256$$) {
  var $delay$$5$$ = $chart$$256$$.$getOptions$().styleDefaults.hoverBehaviorDelay;
  return $delay$$5$$ ? ($delay$$5$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($delay$$5$$), D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$256$$) || D.$DvtChartTypeUtils$$.$isLine$($chart$$256$$) ? 0.75 * $delay$$5$$ : 1.25 * $delay$$5$$) : 0
};
D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$ = function $$DvtChartStyleUtils$$$$optimizeMarkerStroke$$($chart$$257$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$257$$)
};
D.$DvtChartStyleUtils$$.$getGroupWidth$ = function $$DvtChartStyleUtils$$$$getGroupWidth$$($chart$$258$$) {
  var $width$$43$$ = $chart$$258$$.$Cache$.groupWidth;
  $width$$43$$ == D.$JSCompiler_alias_NULL$$ && ($width$$43$$ = $chart$$258$$.$xAxis$.$Info$.$getGroupWidth$(), $chart$$258$$.$Cache$.groupWidth = $width$$43$$);
  return $width$$43$$
};
D.$DvtChartTextUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTextUtils$$, D.$DvtObj$$, "DvtChartTextUtils");
D.$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$8$$, $container$$67$$, $text$$46_textString$$6$$, $cssStyle$$25$$, $x$$88$$, $y$$66$$, $width$$44$$, $height$$46$$, $params$$25$$) {
  $text$$46_textString$$6$$ = new D.$DvtOutputText$$($container$$67$$.$getCtx$(), $text$$46_textString$$6$$, $x$$88$$, $y$$66$$);
  $text$$46_textString$$6$$.$setCSSStyle$($cssStyle$$25$$);
  return D.$DvtTextUtils$$.$fitText$($text$$46_textString$$6$$, $width$$44$$, $height$$46$$, $container$$67$$) ? ($eventManager$$8$$.$associate$($text$$46_textString$$6$$, new D.$DvtSimpleObjPeer$$($text$$46_textString$$6$$.$getUntruncatedTextString$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$25$$)), $text$$46_textString$$6$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($chart$$259_options$$95$$) {
  $chart$$259_options$$95$$ = $chart$$259_options$$95$$.$getOptions$();
  return $chart$$259_options$$95$$.title.text || $chart$$259_options$$95$$.subtitle.text || $chart$$259_options$$95$$.footnote.text
};
D.$DvtChartTooltipUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTooltipUtils$$, D.$DvtObj$$, "DvtChartTooltipUtils");
D.$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$260$$, $seriesIndex$$100$$, $groupIndex$$67$$) {
  return D.$DvtChartTypeUtils$$.$isStock$($chart$$260$$) ? D.$DvtChartStyleUtils$$.$getColor$($chart$$260$$, 0, $groupIndex$$67$$) : D.$DvtChartStyleUtils$$.$getColor$($chart$$260$$, $seriesIndex$$100$$, $groupIndex$$67$$)
};
D.$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$, $isTabular_tooltipManager$$1$$) {
  if(D.$DvtChartTypeUtils$$.$isSpark$($chart$$261_dataContext$$) || D.$DvtChartTypeUtils$$.$isOverview$($chart$$261_dataContext$$) || 0 > $seriesIndex$$101$$ || 0 > $groupIndex$$68$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $dataItem$$34$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$), $datatip$$5_tooltipFunc$$ = $chart$$261_dataContext$$.$getOptions$().tooltip;
  if($isTabular_tooltipManager$$1$$ && $datatip$$5_tooltipFunc$$) {
    return $isTabular_tooltipManager$$1$$ = $chart$$261_dataContext$$.$getCtx$().$getTooltipManager$(D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$261_dataContext$$) ? "_dvtDataCursor" : D.$JSCompiler_alias_NULL$$), $chart$$261_dataContext$$ = {id:$dataItem$$34$$.id, label:$dataItem$$34$$.label, series:D.$DvtChartDataUtils$$.$getSeries$($chart$$261_dataContext$$, $seriesIndex$$101$$), group:D.$DvtChartDataUtils$$.$getGroup$($chart$$261_dataContext$$, $groupIndex$$68$$), value:D.$DvtChartDataUtils$$.getValue($chart$$261_dataContext$$, 
    $seriesIndex$$101$$, $groupIndex$$68$$), targetValue:D.$DvtChartDataUtils$$.getValue($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$), x:D.$DvtChartDataUtils$$.$getXValue$($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$), y:D.$DvtChartDataUtils$$.getValue($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$), z:D.$DvtChartDataUtils$$.$getZValue$($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$), low:D.$DvtChartDataUtils$$.$getLowValue$($chart$$261_dataContext$$, 
    $seriesIndex$$101$$, $groupIndex$$68$$), high:D.$DvtChartDataUtils$$.$getHighValue$($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$), color:D.$DvtChartStyleUtils$$.$getColor$($chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$), open:$dataItem$$34$$.open, close:$dataItem$$34$$.close, volume:$dataItem$$34$$.volume}, (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($isTabular_tooltipManager$$1$$, $datatip$$5_tooltipFunc$$, $chart$$261_dataContext$$)
  }
  if($dataItem$$34$$ && $dataItem$$34$$.shortDesc != D.$JSCompiler_alias_NULL$$) {
    return $dataItem$$34$$.shortDesc
  }
  $datatip$$5_tooltipFunc$$ = "";
  D.$DvtChartTypeUtils$$.$isStock$($chart$$261_dataContext$$) ? $datatip$$5_tooltipFunc$$ += D.$DvtChartTooltipUtils$$.$getStockDatatip$($chart$$261_dataContext$$, $groupIndex$$68$$, $isTabular_tooltipManager$$1$$) : ($datatip$$5_tooltipFunc$$ = D.$DvtChartTooltipUtils$$.$_addSeriesDatatip$($datatip$$5_tooltipFunc$$, $chart$$261_dataContext$$, $seriesIndex$$101$$, $isTabular_tooltipManager$$1$$), $datatip$$5_tooltipFunc$$ = D.$DvtChartTooltipUtils$$.$_addGroupDatatip$($datatip$$5_tooltipFunc$$, $chart$$261_dataContext$$, 
  $seriesIndex$$101$$, $groupIndex$$68$$, $isTabular_tooltipManager$$1$$), $datatip$$5_tooltipFunc$$ = D.$DvtChartTooltipUtils$$.$_addValueDatatip$($datatip$$5_tooltipFunc$$, $chart$$261_dataContext$$, $seriesIndex$$101$$, $groupIndex$$68$$, $isTabular_tooltipManager$$1$$));
  return D.$DvtChartTooltipUtils$$.$_processDatatip$($datatip$$5_tooltipFunc$$, $chart$$261_dataContext$$, $isTabular_tooltipManager$$1$$)
};
D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$262$$, $dataContext$$1_otherValue$$1$$, $isTabular$$1$$) {
  var $otherStr$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), $datatip$$6_tooltipFunc$$1$$ = $chart$$262$$.$getOptions$().tooltip;
  if($isTabular$$1$$ && $datatip$$6_tooltipFunc$$1$$) {
    return $dataContext$$1_otherValue$$1$$ = {id:$otherStr$$, series:$otherStr$$, group:D.$DvtChartDataUtils$$.$getGroup$($chart$$262$$, 0), value:$dataContext$$1_otherValue$$1$$}, (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($chart$$262$$.$getCtx$().$getTooltipManager$(), $datatip$$6_tooltipFunc$$1$$, $dataContext$$1_otherValue$$1$$)
  }
  $datatip$$6_tooltipFunc$$1$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$("", $chart$$262$$, "series", "SERIES", $otherStr$$, $isTabular$$1$$);
  $datatip$$6_tooltipFunc$$1$$ = D.$DvtChartTooltipUtils$$.$_addGroupDatatip$($datatip$$6_tooltipFunc$$1$$, $chart$$262$$, 0, 0, $isTabular$$1$$);
  $datatip$$6_tooltipFunc$$1$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$6_tooltipFunc$$1$$, $chart$$262$$, "value", "VALUE", $dataContext$$1_otherValue$$1$$, $isTabular$$1$$);
  return D.$DvtChartTooltipUtils$$.$_processDatatip$($datatip$$6_tooltipFunc$$1$$, $chart$$262$$, $isTabular$$1$$)
};
D.$DvtChartTooltipUtils$$.$_processDatatip$ = function $$DvtChartTooltipUtils$$$$_processDatatip$$($datatip$$7$$, $chart$$263$$, $isTabular$$2$$) {
  return"" == $datatip$$7$$ ? D.$JSCompiler_alias_NULL$$ : $isTabular$$2$$ ? (0,D.$DvtHtmlTooltipManager$createStartTag$$)("table", $chart$$263$$.$getOptions$().styleDefaults._tooltipStyle) + $datatip$$7$$ + "\x3c/table\x3e" : $datatip$$7$$
};
D.$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($chart$$264$$, $refObj$$15$$) {
  var $tooltipFunc$$2$$ = $chart$$264$$.$getOptions$().tooltip;
  if($tooltipFunc$$2$$ && $refObj$$15$$.id != D.$JSCompiler_alias_NULL$$) {
    var $tooltipManager$$2$$ = $chart$$264$$.$getCtx$().$getTooltipManager$(D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$264$$) ? "_dvtDataCursor" : D.$JSCompiler_alias_NULL$$), $dataContext$$2$$ = {id:D.$DvtChartRefObjUtils$$.getId($refObj$$15$$), label:$refObj$$15$$.text, value:$refObj$$15$$.value, low:D.$DvtChartRefObjUtils$$.$getLowValue$($refObj$$15$$), high:D.$DvtChartRefObjUtils$$.$getHighValue$($refObj$$15$$), color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$15$$)};
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($tooltipManager$$2$$, $tooltipFunc$$2$$, $dataContext$$2$$)
  }
  return $refObj$$15$$.shortDesc
};
D.$DvtChartTooltipUtils$$.$getStockDatatip$ = function $$DvtChartTooltipUtils$$$$getStockDatatip$$($chart$$265$$, $datatip$$8_groupIndex$$69$$, $isTabular$$3$$) {
  var $dataItem$$35$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$265$$, 0, $datatip$$8_groupIndex$$69$$);
  $datatip$$8_groupIndex$$69$$ = D.$DvtChartTooltipUtils$$.$_addGroupDatatip$("", $chart$$265$$, 0, $datatip$$8_groupIndex$$69$$, $isTabular$$3$$);
  $dataItem$$35$$ && ($datatip$$8_groupIndex$$69$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$69$$, $chart$$265$$, "open", "OPEN", $dataItem$$35$$.open, $isTabular$$3$$), $datatip$$8_groupIndex$$69$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$69$$, $chart$$265$$, "close", "CLOSE", $dataItem$$35$$.close, $isTabular$$3$$), $datatip$$8_groupIndex$$69$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$69$$, $chart$$265$$, "high", 
  "HIGH", $dataItem$$35$$.high, $isTabular$$3$$), $datatip$$8_groupIndex$$69$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$69$$, $chart$$265$$, "low", "LOW", $dataItem$$35$$.low, $isTabular$$3$$), $datatip$$8_groupIndex$$69$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$69$$, $chart$$265$$, "volume", "VOLUME", $dataItem$$35$$.volume, $isTabular$$3$$));
  return $datatip$$8_groupIndex$$69$$
};
D.$DvtChartTooltipUtils$$.$_addSeriesDatatip$ = function $$DvtChartTooltipUtils$$$$_addSeriesDatatip$$($datatip$$9$$, $chart$$266$$, $seriesIndex$$103_seriesLabel$$1$$, $isTabular$$4$$) {
  $seriesIndex$$103_seriesLabel$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$266$$, $seriesIndex$$103_seriesLabel$$1$$);
  return D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$9$$, $chart$$266$$, "series", "SERIES", $seriesIndex$$103_seriesLabel$$1$$, $isTabular$$4$$)
};
D.$DvtChartTooltipUtils$$.$_addGroupDatatip$ = function $$DvtChartTooltipUtils$$$$_addGroupDatatip$$($datatip$$10$$, $chart$$267$$, $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$, $groupIndex$$71_levelIndex$$1_numLevels$$3$$, $isTabular$$5$$) {
  var $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$;
  D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$267$$) ? ($JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$267$$, "group"), $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$267$$, $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$, $groupIndex$$71_levelIndex$$1_numLevels$$3$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$ = 
  D.$DvtChartTooltipUtils$$.$formatDateValue$($JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$, new window.Date($defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$)), $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$ = $chart$$267$$.$xAxis$.$Info$, $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$ = 
  (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$, new window.Date($defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$ = $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$[1] != D.$JSCompiler_alias_NULL$$ ? "YMD" == (0,D.$DvtTimeAxisInfo$_getDMYOrder$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$.$_locale$) || 
  24192E5 > $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$.$_timeRange$ && 864E5 > $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$.$_step$ ? $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$[1] + " " + $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$[0] : $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$[0] + " " + $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$[1] : 
  $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$[0])) : $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$267$$, $groupIndex$$71_levelIndex$$1_numLevels$$3$$);
  $groupIndex$$71_levelIndex$$1_numLevels$$3$$ = D.$DvtChartDataUtils$$.$getNumLevels$($chart$$267$$);
  $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$ = "GROUP";
  if(1 == $groupIndex$$71_levelIndex$$1_numLevels$$3$$ || !D.$DvtArrayUtils$$.isArray($JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$)) {
    $datatip$$10$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$10$$, $chart$$267$$, "group", $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$, $isTabular$$5$$)
  }else {
    for($groupIndex$$71_levelIndex$$1_numLevels$$3$$ -= 1;0 <= $groupIndex$$71_levelIndex$$1_numLevels$$3$$;$groupIndex$$71_levelIndex$$1_numLevels$$3$$--) {
      $datatip$$10$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$10$$, $chart$$267$$, "group", $defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$[$groupIndex$$71_levelIndex$$1_numLevels$$3$$], $isTabular$$5$$, $groupIndex$$71_levelIndex$$1_numLevels$$3$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_2462_groupLabel_valueFormat$$1$$[$groupIndex$$71_levelIndex$$1_numLevels$$3$$] && 
      ($defaultLabel_seriesIndex$$104_twoLabels$$inline_2464_value$$103$$ = D.$JSCompiler_alias_NULL$$)
    }
  }
  return $datatip$$10$$
};
D.$DvtChartTooltipUtils$$.$_addValueDatatip$ = function $$DvtChartTooltipUtils$$$$_addValueDatatip$$($datatip$$11$$, $chart$$268$$, $seriesIndex$$105_type$$101$$, $groupIndex$$72_highVal$$1$$, $isTabular$$6$$) {
  var $target$$59_val$$21$$ = D.$DvtChartDataUtils$$.getValue($chart$$268$$, $seriesIndex$$105_type$$101$$, $groupIndex$$72_highVal$$1$$), $xVal$$4$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$268$$, $seriesIndex$$105_type$$101$$, $groupIndex$$72_highVal$$1$$), $zVal$$ = D.$DvtChartDataUtils$$.$getZValue$($chart$$268$$, $seriesIndex$$105_type$$101$$, $groupIndex$$72_highVal$$1$$), $lowVal$$1$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$268$$, $seriesIndex$$105_type$$101$$, $groupIndex$$72_highVal$$1$$);
  $groupIndex$$72_highVal$$1$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$268$$, $seriesIndex$$105_type$$101$$, $groupIndex$$72_highVal$$1$$);
  D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$268$$) ? ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "x", "X", $xVal$$4$$, $isTabular$$6$$), $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "y", "Y", $target$$59_val$$21$$, $isTabular$$6$$), D.$DvtChartTypeUtils$$.$isBubble$($chart$$268$$) && ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "z", "Z", $zVal$$, $isTabular$$6$$))) : 
  D.$DvtChartTypeUtils$$.$isPie$($chart$$268$$) ? $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "value", "VALUE", $target$$59_val$$21$$, $isTabular$$6$$) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$268$$) ? ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "value", "VALUE", $target$$59_val$$21$$, $isTabular$$6$$), $target$$59_val$$21$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$268$$, $seriesIndex$$105_type$$101$$), 
  $target$$59_val$$21$$ != D.$JSCompiler_alias_NULL$$ && ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "targetValue", "TARGET_VALUE", $target$$59_val$$21$$, $isTabular$$6$$))) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$268$$) && ($seriesIndex$$105_type$$101$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$268$$, $seriesIndex$$105_type$$101$$) ? "y2" : "y", $lowVal$$1$$ != D.$JSCompiler_alias_NULL$$ || $groupIndex$$72_highVal$$1$$ != D.$JSCompiler_alias_NULL$$ ? 
  ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "high", "HIGH", $groupIndex$$72_highVal$$1$$, $isTabular$$6$$), $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "low", "LOW", $lowVal$$1$$, $isTabular$$6$$), $zVal$$ != D.$JSCompiler_alias_NULL$$ && ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "z", "Z", $zVal$$, $isTabular$$6$$))) : $zVal$$ != D.$JSCompiler_alias_NULL$$ ? 
  ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, $seriesIndex$$105_type$$101$$, "Y", $target$$59_val$$21$$, $isTabular$$6$$), $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, "z", "Z", $zVal$$, $isTabular$$6$$)) : $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$268$$, $seriesIndex$$105_type$$101$$, "VALUE", $target$$59_val$$21$$, $isTabular$$6$$));
  return $datatip$$11$$
};
D.$DvtChartTooltipUtils$$.$_addDatatipRow$ = function $$DvtChartTooltipUtils$$$$_addDatatipRow$$($datatip$$12$$, $chart$$269_isRTL$$17$$, $type$$102$$, $defaultLabel$$1$$, $value$$104$$, $isTabular$$7$$, $index$$143$$) {
  if($value$$104$$ == D.$JSCompiler_alias_NULL$$ || "" === $value$$104$$) {
    return $datatip$$12$$
  }
  var $options$$96$$ = $chart$$269_isRTL$$17$$.$getOptions$().styleDefaults, $valueFormat$$2$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$269_isRTL$$17$$, $type$$102$$), $tooltipDisplay$$ = $valueFormat$$2$$.tooltipDisplay;
  if(!$tooltipDisplay$$ || "auto" == $tooltipDisplay$$) {
    if("series" == $type$$102$$ && "none" == $options$$96$$.seriesTooltipType || "group" == $type$$102$$ && ("none" == $options$$96$$.groupTooltipType || D.$DvtChartTypeUtils$$.$isPie$($chart$$269_isRTL$$17$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$269_isRTL$$17$$)) || "series" != $type$$102$$ && ("group" != $type$$102$$ && "label" != $type$$102$$) && "none" == $options$$96$$.valueTooltipType) {
      $tooltipDisplay$$ = "off"
    }
  }
  if("off" == $tooltipDisplay$$) {
    return $datatip$$12$$
  }
  var $tooltipLabel$$;
  "string" === typeof $valueFormat$$2$$.tooltipLabel ? $tooltipLabel$$ = $valueFormat$$2$$.tooltipLabel : $valueFormat$$2$$.tooltipLabel && $index$$143$$ != D.$JSCompiler_alias_NULL$$ && ($tooltipLabel$$ = $valueFormat$$2$$.tooltipLabel[$index$$143$$]);
  $tooltipLabel$$ == D.$JSCompiler_alias_NULL$$ && ($tooltipLabel$$ = $defaultLabel$$1$$ == D.$JSCompiler_alias_NULL$$ ? "" : "GROUP" == $defaultLabel$$1$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$269_isRTL$$17$$) ? (0,D.$DvtBundle$getTranslation$$)($chart$$269_isRTL$$17$$.$getOptions$(), "labelDate", "DvtChartBundle", "LABEL_GROUP") : (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_" + $defaultLabel$$1$$, ""));
  "series" != $type$$102$$ && "group" != $type$$102$$ && ($value$$104$$ = D.$DvtChartTooltipUtils$$.$formatValue$($chart$$269_isRTL$$17$$.$getCtx$(), $valueFormat$$2$$, $value$$104$$));
  if($isTabular$$7$$) {
    return $chart$$269_isRTL$$17$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$269_isRTL$$17$$.$getCtx$()), $options$$96$$.tooltipLabelStyle.$setStyle$("text-align", $chart$$269_isRTL$$17$$ ? "left" : "right"), $options$$96$$.tooltipValueStyle.$setStyle$("text-align", $chart$$269_isRTL$$17$$ ? "right" : "left"), $datatip$$12$$ + "\x3ctr\x3e" + (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", $options$$96$$.tooltipLabelStyle) + $tooltipLabel$$ + "\x3c/td\x3e" + (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", 
    $options$$96$$.tooltipValueStyle) + $value$$104$$ + "\x3c/td\x3e\x3c/tr\x3e"
  }
  0 < $datatip$$12$$.length && ($datatip$$12$$ += "\x3cbr\x3e");
  return $datatip$$12$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$tooltipLabel$$, $value$$104$$])
};
D.$DvtChartTooltipUtils$$.$getValueFormat$ = function $$DvtChartTooltipUtils$$$$getValueFormat$$($chart$$270$$, $type$$103$$) {
  var $valueFormats$$ = $chart$$270$$.$getOptions$().valueFormats;
  if(!$valueFormats$$) {
    return{}
  }
  for(var $i$$214$$ = 0;$i$$214$$ < $valueFormats$$.length;$i$$214$$++) {
    if($valueFormats$$[$i$$214$$].type == $type$$103$$) {
      return $valueFormats$$[$i$$214$$]
    }
  }
  return"group" == $type$$103$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$270$$) ? D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$270$$, "x") : ("y" == $type$$103$$ || "y2" == $type$$103$$ || "min" == $type$$103$$ || "max" == $type$$103$$) && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$270$$) ? D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$270$$, "value") : {}
};
D.$DvtChartTooltipUtils$$.$formatValue$ = function $$DvtChartTooltipUtils$$$$formatValue$$($context$$53_formatter$$, $valueFormat$$3$$, $value$$105$$, $min$$12$$, $max$$12$$, $majorIncrement$$1$$) {
  var $scaling$$ = "auto", $autoPrecision$$4$$ = "on", $converter$$3$$;
  $valueFormat$$3$$.scaling && ($scaling$$ = $valueFormat$$3$$.scaling);
  $valueFormat$$3$$.autoPrecision && ($autoPrecision$$4$$ = $valueFormat$$3$$.autoPrecision);
  $valueFormat$$3$$.converter && ($converter$$3$$ = $valueFormat$$3$$.converter);
  $context$$53_formatter$$ = new D.$DvtLinearScaleAxisValueFormatter$$($context$$53_formatter$$, $min$$12$$ != D.$JSCompiler_alias_NULL$$ ? $min$$12$$ : $value$$105$$, $max$$12$$ != D.$JSCompiler_alias_NULL$$ ? $max$$12$$ : $value$$105$$, $majorIncrement$$1$$ != D.$JSCompiler_alias_NULL$$ ? $majorIncrement$$1$$ : 0, $scaling$$, $autoPrecision$$4$$);
  return $converter$$3$$ && ($converter$$3$$.getAsString || $converter$$3$$.format) ? $context$$53_formatter$$.$format$($value$$105$$, $converter$$3$$) : $context$$53_formatter$$.$format$($value$$105$$)
};
D.$DvtChartTooltipUtils$$.$formatDateValue$ = function $$DvtChartTooltipUtils$$$$formatDateValue$$($valueFormat$$4$$, $date$$9$$) {
  var $converter$$4$$ = $valueFormat$$4$$.converter;
  return!$converter$$4$$ ? D.$JSCompiler_alias_NULL$$ : $converter$$4$$.getAsString ? $converter$$4$$.getAsString($date$$9$$) : $converter$$4$$.format ? $converter$$4$$.format($date$$9$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$ = function $$DvtChartTooltipUtils$$$$isDataCursorEnabled$$($chart$$271$$) {
  if(D.$DvtChartTypeUtils$$.$isPie$($chart$$271$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$271$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$271$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $options$$97$$ = $chart$$271$$.$getOptions$();
  return"on" == $options$$97$$.dataCursor ? D.$JSCompiler_alias_TRUE$$ : "off" == $options$$97$$.dataCursor ? D.$JSCompiler_alias_FALSE$$ : (0,D.$DvtAgent$isTouchDevice$$)() && D.$DvtChartTypeUtils$$.$isLineArea$($chart$$271$$)
};
D.$DvtChartTooltipUtils$$.$getDataCursorBehavior$ = function $$DvtChartTooltipUtils$$$$getDataCursorBehavior$$($chart$$272$$) {
  var $dataCursorBehavior$$ = $chart$$272$$.$getOptions$().dataCursorBehavior;
  return"snap" == $dataCursorBehavior$$ ? "SNAP" : "smooth" == $dataCursorBehavior$$ ? "SMOOTH" : D.$DvtChartTypeUtils$$.$isLineArea$($chart$$272$$) ? "SMOOTH" : "SNAP"
};
D.$DvtChartTypeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTypeUtils$$, D.$DvtObj$$, "DvtChartTypeUtils");
D.$DvtChartTypeUtils$$.$_SUPPORTED_TYPES$ = "bar line area lineWithArea combo pie bubble scatter funnel stock".split(" ");
D.$DvtChartTypeUtils$$.$isValidType$ = function $$DvtChartTypeUtils$$$$isValidType$$($chart$$273$$) {
  return 0 <= D.$DvtChartTypeUtils$$.$_SUPPORTED_TYPES$.indexOf($chart$$273$$.$getType$())
};
D.$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$274$$) {
  return $chart$$274$$.$getOptions$().__spark
};
D.$DvtChartTypeUtils$$.$isOverview$ = function $$DvtChartTypeUtils$$$$isOverview$$($chart$$275$$) {
  return $chart$$275$$.$getOptions$()._isOverview
};
D.$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$276$$) {
  return"combo" == $chart$$276$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$277$$) {
  return!D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$277$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$277$$)
};
D.$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$278$$) {
  return"horizontal" == $chart$$278$$.$getOptions$().orientation && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$278$$) && !D.$DvtChartTypeUtils$$.$isStock$($chart$$278$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$278$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$278$$))
};
D.$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$279$$) {
  return"polar" == $chart$$279$$.$getOptions$().coordinateSystem
};
D.$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$280$$) {
  return"on" != $chart$$280$$.$getOptions$().stack || D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$280$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$280$$)
};
D.$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$281$$) {
  return"bar" == $chart$$281$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isStock$ = function $$DvtChartTypeUtils$$$$isStock$$($chart$$282$$) {
  return"stock" == $chart$$282$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$283$$) {
  return"line" == $chart$$283$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($chart$$284$$) {
  return"lineWithArea" == $chart$$284$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$285$$) {
  return"area" == $chart$$285$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$286$$) {
  return"scatter" == $chart$$286$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$287$$) {
  return"bubble" == $chart$$287$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$288$$) {
  return"pie" == $chart$$288$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$289$$) {
  return"funnel" == $chart$$289$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$290$$) {
  return!D.$DvtChartTypeUtils$$.$hasAxes$($chart$$290$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$290$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$290$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isSplitDualY$ = function $$DvtChartTypeUtils$$$$isSplitDualY$$($chart$$291$$) {
  return D.$DvtChartTypeUtils$$.$isStock$($chart$$291$$) && D.$DvtChartDataUtils$$.$hasVolumeSeries$($chart$$291$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$291$$) ? D.$JSCompiler_alias_TRUE$$ : "on" == $chart$$291$$.$getOptions$().splitDualY && D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$291$$) && !D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$291$$)
};
D.$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$292_type$$104$$) {
  $chart$$292_type$$104$$ = $chart$$292_type$$104$$.$getType$();
  return"bar" == $chart$$292_type$$104$$ || "line" == $chart$$292_type$$104$$ || "area" == $chart$$292_type$$104$$ || "lineWithArea" == $chart$$292_type$$104$$ || "combo" == $chart$$292_type$$104$$ || "stock" == $chart$$292_type$$104$$
};
D.$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$293_type$$105$$) {
  $chart$$293_type$$105$$ = $chart$$293_type$$105$$.$getType$();
  return"scatter" == $chart$$293_type$$105$$ || "bubble" == $chart$$293_type$$105$$
};
D.$DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($chart$$294_type$$106$$) {
  $chart$$294_type$$106$$ = $chart$$294_type$$106$$.$getType$();
  return"line" == $chart$$294_type$$106$$ || "area" == $chart$$294_type$$106$$ || "lineWithArea" == $chart$$294_type$$106$$
};
D.$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$295$$) {
  return!D.$DvtChartTypeUtils$$.$isPie$($chart$$295$$) && !D.$DvtChartTypeUtils$$.$isFunnel$($chart$$295$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$295$$)
};
D.$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$296$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$296$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$296$$)
};
D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$297$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$297$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$297$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$297$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$297$$)
};
D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$298$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$298$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$298$$) && D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$298$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$298$$)
};
D.$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$299$$) {
  return!("pie" == $chart$$299$$.$getType$() || "funnel" == $chart$$299$$.$getType$())
};
D.$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$300$$) {
  return!D.$DvtChartTypeUtils$$.$isDualY$($chart$$300$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartDataUtils$$.$getY2SeriesCount$($chart$$300$$) == D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$300$$)
};
D.$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$301$$) {
  return!D.$DvtChartTypeUtils$$.$isDualY$($chart$$301$$) ? D.$JSCompiler_alias_FALSE$$ : 0 < D.$DvtChartDataUtils$$.$getY2SeriesCount$($chart$$301$$)
};
D.$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$302$$) {
  return D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$302$$)
};
D.$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$303$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$303$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasCandlestickSeries$ = function $$DvtChartTypeUtils$$$$hasCandlestickSeries$$($chart$$304$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$304$$, "candlestick")
};
D.$DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($chart$$305$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$305$$, "line")
};
D.$DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($chart$$306$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$306$$, "area")
};
D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($chart$$307$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$307$$, "lineWithArea")
};
D.$DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($chart$$308$$, $type$$108$$) {
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$308$$)) {
    for(var $seriesCount$$20$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$308$$), $seriesIndex$$106$$ = 0;$seriesIndex$$106$$ < $seriesCount$$20$$;$seriesIndex$$106$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$308$$, $seriesIndex$$106$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$308$$, $seriesIndex$$106$$) == $type$$108$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($chart$$309$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$309$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$21$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$309$$), $seriesIndex$$107$$ = 0;$seriesIndex$$107$$ < $seriesCount$$21$$;$seriesIndex$$107$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$309$$, $seriesIndex$$107$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$309$$, $seriesIndex$$107$$)) {
      var $lineType$$6$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$309$$, $seriesIndex$$107$$);
      if("centeredSegmented" == $lineType$$6$$ || "centeredStepped" == $lineType$$6$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($chart$$310$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$310$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$22$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$310$$), $seriesIndex$$108$$ = 0;$seriesIndex$$108$$ < $seriesCount$$22$$;$seriesIndex$$108$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$310$$, $seriesIndex$$108$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$310$$, $seriesIndex$$108$$)) {
      var $lineType$$7$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$310$$, $seriesIndex$$108$$);
      if("segmented" == $lineType$$7$$ || "stepped" == $lineType$$7$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($chart$$311$$) {
  var $options$$99$$ = $chart$$311$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$311$$) || "off" != $options$$99$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$311$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$311$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$311$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($chart$$312$$) {
  var $options$$100$$ = $chart$$312$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$312$$) || "off" != $options$$100$$.legend.rendered || "off" != $options$$100$$.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$312$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$312$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($chart$$313$$) {
  var $options$$101$$ = $chart$$313$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$313$$) || "off" != $options$$101$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$313$$, "x") || "off" != $options$$101$$.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$313$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($chart$$314$$) {
  var $options$$102$$ = $chart$$314$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$314$$) || "off" != $options$$102$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$314$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$314$$, "y") || "off" != $options$$102$$.plotArea.rendered ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartMarkerUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartMarkerUtils$$, D.$DvtObj$$, "DvtChartMarkerUtils");
D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 2.5;
D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
D.$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$198$$, $width$$42$$, $height$$44$$) {
  var $isPolar$$5$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$198$$), $minMax$$5_xAxisValueRange$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$198$$, "z"), $minValue$$6$$ = $minMax$$5_xAxisValueRange$$.min, $maxValue$$5_valueRange$$ = $minMax$$5_xAxisValueRange$$.max, $minMax$$5_xAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$198$$, "x"), $yAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$198$$, "y"), $axisWidth$$1$$, $axisHeight$$;
  $isPolar$$5$$ ? ($axisWidth$$1$$ = window.Infinity, $axisHeight$$ = $chart$$198$$.$getRadius$()) : ($axisWidth$$1$$ = $width$$42$$ - 3 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$198$$, "y"), $axisHeight$$ = $height$$44$$ - 2 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$198$$, "x"));
  var $minArea$$ = window.Math.PI * window.Math.pow(D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2), $areaRange_maxRadius_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * window.Math.min($width$$42$$, $height$$44$$), $maxArea_maxMarkerSize_seriesCount$$18$$ = window.Math.PI * window.Math.pow($areaRange_maxRadius_minMaxArea$$, 2), $areaRange_maxRadius_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$198$$, $minArea$$, $maxArea_maxMarkerSize_seriesCount$$18$$, 
  $minValue$$6$$, $maxValue$$5_valueRange$$), $minArea$$ = $areaRange_maxRadius_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$18$$ = $areaRange_maxRadius_minMaxArea$$.maxArea, $areaRange_maxRadius_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $maxArea_maxMarkerSize_seriesCount$$18$$, $minValue$$6$$, $maxValue$$5_valueRange$$), $minArea$$ = $areaRange_maxRadius_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$18$$ = $areaRange_maxRadius_minMaxArea$$.maxArea, 
  $maxValue$$5_valueRange$$ = $maxValue$$5_valueRange$$ - $minValue$$6$$, $areaRange_maxRadius_minMaxArea$$ = $maxArea_maxMarkerSize_seriesCount$$18$$ - $minArea$$, $maxArea_maxMarkerSize_seriesCount$$18$$ = 2 * window.Math.sqrt($maxArea_maxMarkerSize_seriesCount$$18$$ / window.Math.PI);
  $axisWidth$$1$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$18$$;
  $axisHeight$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$18$$;
  for(var $maxArea_maxMarkerSize_seriesCount$$18$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$198$$), $seriesIndex$$72$$ = 0;$seriesIndex$$72$$ < $maxArea_maxMarkerSize_seriesCount$$18$$;$seriesIndex$$72$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$198$$, $seriesIndex$$72$$)) {
      for(var $seriesItem$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$198$$, $seriesIndex$$72$$), $numGroups$$7$$ = $seriesItem$$11$$.items ? $seriesItem$$11$$.items.length : 0, $j$$40$$ = 0;$j$$40$$ < $numGroups$$7$$;$j$$40$$++) {
        var $dataItem$$22$$ = $seriesItem$$11$$.items[$j$$40$$];
        $dataItem$$22$$ && $dataItem$$22$$.z && ($dataItem$$22$$.markerSize = 0 < $maxValue$$5_valueRange$$ ? 2 * window.Math.sqrt(($minArea$$ + ($dataItem$$22$$.z - $minValue$$6$$) / $maxValue$$5_valueRange$$ * $areaRange_maxRadius_minMaxArea$$) / window.Math.PI) : D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * window.Math.min($width$$42$$, $height$$44$$), $dataItem$$22$$._xAxisRadius = 0 < $minMax$$5_xAxisValueRange$$ ? 0.5 * ($dataItem$$22$$.markerSize / $axisWidth$$1$$) * $minMax$$5_xAxisValueRange$$ : 
        $isPolar$$5$$ ? 0 : 29, $dataItem$$22$$._yAxisRadius = 0 < $yAxisValueRange$$ ? 0.5 * ($dataItem$$22$$.markerSize / $axisHeight$$) * $yAxisValueRange$$ : 29)
      }
    }
  }
};
D.$DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($chart$$199$$, $type$$97$$) {
  var $axisOptions$$15_max$$11$$ = $chart$$199$$.$getOptions$()[$type$$97$$ + "Axis"], $isLog$$3$$ = D.$DvtChartAxisUtils$$.$isLog$($chart$$199$$, $type$$97$$), $zeroBaseline$$ = !$isLog$$3$$ && "zero" == D.$DvtChartAxisUtils$$.$getBaselineScaling$($chart$$199$$, $type$$97$$), $minMax$$6$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$199$$, $type$$97$$, D.$JSCompiler_alias_TRUE$$), $min$$11$$ = $axisOptions$$15_max$$11$$.min;
  $min$$11$$ == D.$JSCompiler_alias_NULL$$ && ($min$$11$$ = $zeroBaseline$$ ? window.Math.min(0, $minMax$$6$$.min) : $minMax$$6$$.min);
  $axisOptions$$15_max$$11$$ = $axisOptions$$15_max$$11$$.max;
  $axisOptions$$15_max$$11$$ == D.$JSCompiler_alias_NULL$$ && ($axisOptions$$15_max$$11$$ = $zeroBaseline$$ ? window.Math.max(0, $minMax$$6$$.max) : $minMax$$6$$.max);
  return $isLog$$3$$ && 0 < $axisOptions$$15_max$$11$$ && 0 < $min$$11$$ ? $axisOptions$$15_max$$11$$ == $min$$11$$ ? 6 : D.$DvtMath$$.$log10$($axisOptions$$15_max$$11$$ / $min$$11$$) : $axisOptions$$15_max$$11$$ == $min$$11$$ ? 60 : $axisOptions$$15_max$$11$$ - $min$$11$$
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$200_s2$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$7_s1_t1$$, $maxValue$$6_t2$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$19$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$200_s2$$), $seriesIndex$$73$$ = 0;$seriesIndex$$73$$ < $seriesCount$$19$$;$seriesIndex$$73$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($avgRelSize_chart$$200_s2$$, $seriesIndex$$73$$)) {
      for(var $seriesItem$$12$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$200_s2$$, $seriesIndex$$73$$), $numDataItems$$ = $seriesItem$$12$$.items.length, $j$$41$$ = 0;$j$$41$$ < $numDataItems$$;$j$$41$$++) {
        var $dataItem$$23$$ = $seriesItem$$12$$.items[$seriesIndex$$73$$];
        $dataItem$$23$$ && $dataItem$$23$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$23$$.z)
      }
    }
  }
  $avgRelSize_chart$$200_s2$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$7_s1_t1$$) / ($maxValue$$6_t2$$ - $minValue$$7_s1_t1$$);
  $minValue$$7_s1_t1$$ = 15 + window.Math.floor(30 * (1 - $avgRelSize_chart$$200_s2$$));
  $maxValue$$6_t2$$ = 30 + window.Math.floor(150 * (1 - $avgRelSize_chart$$200_s2$$));
  $bubbleCount$$ >= $maxValue$$6_t2$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$7_s1_t1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$6_t2$$ - $minValue$$7_s1_t1$$) * ($bubbleCount$$ - $minValue$$7_s1_t1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$7_s1_t1$$ = 5 + window.Math.floor(15 * (1 - $avgRelSize_chart$$200_s2$$));
  $avgRelSize_chart$$200_s2$$ = 30 + window.Math.floor(70 * (1 - $avgRelSize_chart$$200_s2$$));
  $bubbleCount$$ < $minValue$$7_s1_t1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$200_s2$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$200_s2$$ - $minValue$$7_s1_t1$$) * ($bubbleCount$$ - $minValue$$7_s1_t1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$9_minValue$$8$$, $maxValue$$7$$) {
  if(0 != $maxValue$$7$$ - $buffer$$9_minValue$$8$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$7$$ && 0 < $buffer$$9_minValue$$8$$ ? $dataRatio$$ = $maxValue$$7$$ / $buffer$$9_minValue$$8$$ : 0 > $buffer$$9_minValue$$8$$ && 0 > $maxValue$$7$$ && ($dataRatio$$ = $buffer$$9_minValue$$8$$ / $maxValue$$7$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$9_minValue$$8$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$9_minValue$$8$$ && ($minArea$$2$$ += $buffer$$9_minValue$$8$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
D.$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$8$$) {
  $markers$$8$$.sort(D.$DvtChartMarkerUtils$$.$_compareSize$)
};
D.$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$27$$, $b$$6$$) {
  var $aSize$$ = $a$$27$$.$getSize$ ? $a$$27$$.$getSize$() : $a$$27$$.size, $bSize$$ = $b$$6$$.$getSize$ ? $b$$6$$.$getSize$() : $b$$6$$.size;
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
D.$DvtChartMarkerUtils$$.$checkPixelMap$ = function $$DvtChartMarkerUtils$$$$checkPixelMap$$($pixelMap$$1$$, $markerX_x2$$17$$, $markerY_y2$$10$$, $markerSize$$4_x1$$19$$) {
  var $halfSize$$ = $markerSize$$4_x1$$19$$ / 2;
  $markerSize$$4_x1$$19$$ = window.Math.max(window.Math.floor($markerX_x2$$17$$ - $halfSize$$), 0);
  var $y1$$12$$ = window.Math.max(window.Math.floor($markerY_y2$$10$$ - $halfSize$$), 0);
  $markerX_x2$$17$$ = window.Math.max(window.Math.ceil($markerX_x2$$17$$ + $halfSize$$), 0);
  $markerY_y2$$10$$ = window.Math.max(window.Math.ceil($markerY_y2$$10$$ + $halfSize$$), 0);
  return(0,D.$JSCompiler_StaticMethods_isObscured$$)($pixelMap$$1$$, $markerSize$$4_x1$$19$$, $y1$$12$$, $markerX_x2$$17$$, $markerY_y2$$10$$)
};
D.$DvtChartMarkerUtils$$.$updatePixelMap$ = function $$DvtChartMarkerUtils$$$$updatePixelMap$$($pixelMap$$2$$, $markerX$$1_x2$$18$$, $markerY$$1_y2$$11$$, $markerSize$$5_x1$$20$$, $alpha$$5$$) {
  var $halfSize$$1$$ = 0.4 * $markerSize$$5_x1$$20$$;
  $markerSize$$5_x1$$20$$ = window.Math.max(window.Math.round($markerX$$1_x2$$18$$ - $halfSize$$1$$), 0);
  $markerX$$1_x2$$18$$ = window.Math.max(window.Math.round($markerX$$1_x2$$18$$ + $halfSize$$1$$), 0);
  var $y1$$13$$ = window.Math.max(window.Math.round($markerY$$1_y2$$11$$ - $halfSize$$1$$), 0);
  $markerY$$1_y2$$11$$ = window.Math.max(window.Math.round($markerY$$1_y2$$11$$ + $halfSize$$1$$), 0);
  (0,D.$JSCompiler_StaticMethods_obscure$$)($pixelMap$$2$$, $markerSize$$5_x1$$20$$, $y1$$13$$, $markerX$$1_x2$$18$$, $markerY$$1_y2$$11$$, $alpha$$5$$)
};
D.$DvtPieChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChartUtils$$, D.$DvtObj$$, "DvtPieChartUtils");
D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
D.$DvtPieChartUtils$$.$getSliceId$ = function $$DvtPieChartUtils$$$$getSliceId$$($chart$$315$$, $seriesIndex$$109$$) {
  var $dataItem$$36_id$$37$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$315$$, $seriesIndex$$109$$, 0), $dataItem$$36_id$$37$$ = $dataItem$$36_id$$37$$ ? $dataItem$$36_id$$37$$.id : D.$JSCompiler_alias_NULL$$, $series$$16$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$315$$, $seriesIndex$$109$$), $group$$23$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$315$$, 0);
  return new D.$DvtChartDataItem$$($dataItem$$36_id$$37$$, $series$$16$$, $group$$23$$)
};
D.$DvtPieChartUtils$$.$getOtherSliceId$ = function $$DvtPieChartUtils$$$$getOtherSliceId$$($chart$$316_group$$24$$) {
  $chart$$316_group$$24$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$316_group$$24$$, 0);
  return new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$316_group$$24$$)
};
D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$ = function $$DvtPieChartUtils$$$$getRenderedSeriesIndices$$($chart$$317$$) {
  return D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$317$$).$rendered$
};
D.$DvtPieChartUtils$$.$hasOtherSeries$ = function $$DvtPieChartUtils$$$$hasOtherSeries$$($chart$$318$$) {
  return 0 < D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$318$$).$other$.length
};
D.$DvtPieChartUtils$$.$getOtherValue$ = function $$DvtPieChartUtils$$$$getOtherValue$$($chart$$319$$) {
  for(var $otherSeries$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$319$$).$other$, $otherValue$$2$$ = 0, $i$$215$$ = 0;$i$$215$$ < $otherSeries$$.length;$i$$215$$++) {
    var $seriesIndex$$110_value$$106$$ = $otherSeries$$[$i$$215$$];
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$319$$, $seriesIndex$$110_value$$106$$) && ($seriesIndex$$110_value$$106$$ = D.$DvtChartDataUtils$$.getValue($chart$$319$$, $seriesIndex$$110_value$$106$$, 0), 0 < $seriesIndex$$110_value$$106$$ && ($otherValue$$2$$ += $seriesIndex$$110_value$$106$$))
  }
  return $otherValue$$2$$
};
D.$DvtPieChartUtils$$.$getOtherSliceIds$ = function $$DvtPieChartUtils$$$$getOtherSliceIds$$($chart$$320$$) {
  for(var $otherSeries$$1$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$320$$).$other$, $seriesIds$$ = [], $i$$216$$ = 0;$i$$216$$ < $otherSeries$$1$$.length;$i$$216$$++) {
    $seriesIds$$.push(D.$DvtPieChartUtils$$.$getSliceId$($chart$$320$$, $otherSeries$$1$$[$i$$216$$]))
  }
  return $seriesIds$$
};
D.$DvtPieChartUtils$$.$isOtherSliceSelected$ = function $$DvtPieChartUtils$$$$isOtherSliceSelected$$($chart$$321$$, $selected$$12$$) {
  for(var $otherIds$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$321$$), $j$$42$$ = 0;$j$$42$$ < $otherIds$$.length;$j$$42$$++) {
    for(var $sliceId$$ = $otherIds$$[$j$$42$$], $sliceSelected$$ = D.$JSCompiler_alias_FALSE$$, $i$$217$$ = 0;$i$$217$$ < $selected$$12$$.length;$i$$217$$++) {
      if($selected$$12$$[$i$$217$$].id && $sliceId$$.getId() === $selected$$12$$[$i$$217$$].id || $sliceId$$.$getSeries$() === $selected$$12$$[$i$$217$$].series && $sliceId$$.$getGroup$() === $selected$$12$$[$i$$217$$].group) {
        $sliceSelected$$ = D.$JSCompiler_alias_TRUE$$;
        break
      }
    }
    if(!$sliceSelected$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$ = function $$DvtPieChartUtils$$$$_getSeriesIndicesArrays$$($chart$$322$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$2$$ = [], $seriesCount$$23$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$322$$), $options$$103$$ = $chart$$322$$.$getOptions$(), $otherThreshold$$ = $options$$103$$.otherThreshold * D.$DvtPieChartUtils$$.$getTotalValue$($chart$$322$$), $seriesIndex$$112$$ = 0;$seriesIndex$$112$$ < $seriesCount$$23$$;$seriesIndex$$112$$++) {
    var $value$$107$$ = D.$DvtChartDataUtils$$.getValue($chart$$322$$, $seriesIndex$$112$$, 0);
    0 < $otherThreshold$$ && $value$$107$$ < $otherThreshold$$ ? $otherSeries$$2$$.push($seriesIndex$$112$$) : $renderedSeries$$.push($seriesIndex$$112$$)
  }
  "ascending" == $options$$103$$.sorting ? $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$2$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$322$$, $renderedSeries$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$322$$, $otherSeries$$2$$, 0)
  }) : ("on" == $options$$103$$.sorting || "descending" == $options$$103$$.sorting) && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$2$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$322$$, $otherSeries$$2$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$322$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$2$$}
};
D.$DvtPieChartUtils$$.$getTotalValue$ = function $$DvtPieChartUtils$$$$getTotalValue$$($chart$$323$$) {
  for(var $seriesCount$$24$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$323$$), $totalValue$$1$$ = 0, $seriesIndex$$113$$ = 0;$seriesIndex$$113$$ < $seriesCount$$24$$;$seriesIndex$$113$$++) {
    var $value$$108$$ = D.$DvtChartDataUtils$$.getValue($chart$$323$$, $seriesIndex$$113$$, 0);
    0 < $value$$108$$ && ($totalValue$$1$$ += $value$$108$$)
  }
  return $totalValue$$1$$
};
D.$DvtPieChartUtils$$.$getSliceExplode$ = function $$DvtPieChartUtils$$$$getSliceExplode$$($chart$$324$$, $seriesIndex$$114$$) {
  var $seriesItem$$28$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$324$$, $seriesIndex$$114$$);
  return $seriesItem$$28$$ && $seriesItem$$28$$.pieSliceExplode ? $seriesItem$$28$$.pieSliceExplode : 0
};
D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtPieChartUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$325$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$325$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$325$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$325$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$, 0)._id, $chart$$325$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$)
  }
};
D.$DvtPieRenderUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieRenderUtils$$, D.$DvtObj$$, "DvtPieRenderUtils");
D.$DvtPieRenderUtils$$.$TWOD$ = "2D";
D.$DvtPieRenderUtils$$.$THREED$ = "3D";
D.$DvtPieRenderUtils$$.$CRUST$ = "CRUST";
D.$DvtPieRenderUtils$$.$SIDE$ = "SIDE";
D.$DvtPieRenderUtils$$.$BORDER$ = "BORDER";
D.$DvtPieRenderUtils$$.$SURFACE_CRUST$ = 0;
D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ = 1;
D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
D.$DvtPieRenderUtils$$.$SURFACE_TOP$ = 3;
D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$13_radian$$1$$, $cx$$8$$, $cy$$9$$, $rx$$4$$, $ry$$4$$) {
  $angle$$13_radian$$1$$ = D.$DvtMath$$.$degreesToRads$(360 - $angle$$13_radian$$1$$);
  return{x:$cx$$8$$ + window.Math.cos($angle$$13_radian$$1$$) * $rx$$4$$, y:$cy$$9$$ + window.Math.sin($angle$$13_radian$$1$$) * $ry$$4$$}
};
D.$DvtPieRenderUtils$$.$getGradientColors$ = function $$DvtPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$4_style$$53$$, $c$$5_skin$$3$$) {
  if($c$$5_skin$$3$$ && "skyros" != $c$$5_skin$$3$$) {
    if($arColors$$4_style$$53$$ == D.$DvtPieRenderUtils$$.$TWOD$ || $arColors$$4_style$$53$$ == D.$DvtPieRenderUtils$$.$THREED$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$4_style$$53$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$4_style$$53$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$4_style$$53$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
      return $arColors$$4_style$$53$$ = [], $arColors$$4_style$$53$$[0] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$4_style$$53$$[1] = $arColors$$4_style$$53$$[0], $arColors$$4_style$$53$$[2] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$4_style$$53$$
    }
    if($arColors$$4_style$$53$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$5_skin$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$2$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$2$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$4_style$$53$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[$c$$5_skin$$3$$, $c2$$2$$, $baseColor_c3$$, $c$$5_skin$$3$$]
    }
    if("SIDE" == $arColors$$4_style$$53$$) {
      return[$c$$5_skin$$3$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$4_style$$53$$) {
      return[$baseColor_c3$$, $c2$$2$$, $c$$5_skin$$3$$, $c1$$2$$, $baseColor_c3$$]
    }
  }
};
D.$DvtPieRenderUtils$$.$getGradientAlphas$ = function $$DvtPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$54$$) {
  var $alpha$$7$$ = $baseAlpha$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$54$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[$alpha$$7$$, $alpha$$7$$, $alpha$$7$$]
  }
  if($style$$54$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[$alpha$$7$$ / 1.59375, $alpha$$7$$ / 5.3125, $alpha$$7$$ / 2.65625]
  }
  if($style$$54$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[$alpha$$7$$, $alpha$$7$$, $alpha$$7$$, $alpha$$7$$, $alpha$$7$$]
  }
  if($style$$54$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[$alpha$$7$$, $alpha$$7$$, $alpha$$7$$, $alpha$$7$$]
  }
  if($style$$54$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[$alpha$$7$$, $alpha$$7$$]
  }
};
D.$DvtPieRenderUtils$$.$getGradientRatios$ = function $$DvtPieRenderUtils$$$$getGradientRatios$$($style$$55$$, $skin$$4$$) {
  if($skin$$4$$ && "skyros" != $skin$$4$$) {
    return[0, 1]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
D.$DvtPieRenderUtils$$.$createTopSurface$ = function $$DvtPieRenderUtils$$$$createTopSurface$$($slice$$19$$, $fill$$13$$) {
  var $edge_pieChart$$8$$ = $slice$$19$$.$_pieChart$, $context$$55_shapes$$3_wedge$$ = $edge_pieChart$$8$$.$getCtx$(), $innerColor$$9_pieCenter$$ = $slice$$19$$.$getCenter$(), $innerRadius_outerColor$$10$$ = $slice$$19$$.$getInnerRadius$(), $sliceGaps_stroke$$20$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$8$$) || (0 == $slice$$19$$.$_depth$ ? 3 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($slice$$19$$.$_chart$) : 0) > window.Math.sin(D.$DvtMath$$.$degreesToRads$($slice$$19$$.$getAngleExtent$())) * 
  $slice$$19$$.$_radiusX$ + 1 ? D.$JSCompiler_alias_NULL$$ : 0 == $slice$$19$$.$_depth$ ? 3 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($slice$$19$$.$_chart$) : 0, $context$$55_shapes$$3_wedge$$ = new D.$DvtSelectableWedge$$($context$$55_shapes$$3_wedge$$, $innerColor$$9_pieCenter$$.x, $innerColor$$9_pieCenter$$.y, $slice$$19$$.$_radiusX$, $slice$$19$$.$_radiusY$, $slice$$19$$.$getAngleStart$(), $slice$$19$$.$getAngleExtent$(), $sliceGaps_stroke$$20$$, $innerRadius_outerColor$$10$$), $innerColor$$9_pieCenter$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$8$$.$chart$), $innerRadius_outerColor$$10$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$8$$.$chart$), $sliceGaps_stroke$$20$$ = new D.$DvtSolidStroke$$($slice$$19$$.$getStrokeColor$(), D.$JSCompiler_alias_NULL$$, $slice$$19$$.$getBorderWidth$());
  $context$$55_shapes$$3_wedge$$.$setStyleProperties$($fill$$13$$, $sliceGaps_stroke$$20$$, $slice$$19$$.$getFillColor$(), $innerColor$$9_pieCenter$$, $innerRadius_outerColor$$10$$);
  $context$$55_shapes$$3_wedge$$ = [$context$$55_shapes$$3_wedge$$];
  if(!$slice$$19$$.$getStrokeColor$() && "skyros" == $edge_pieChart$$8$$.$getSkin$() && (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$8$$) && 0 < $slice$$19$$.getDepth() && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$8$$.$chart$) && (180 <= $slice$$19$$.$getAngleStart$() || 180 <= $slice$$19$$.$getAngleStart$() + $slice$$19$$.$getAngleExtent$() || 360 == $slice$$19$$.$getAngleExtent$())) {
    $edge_pieChart$$8$$ = D.$DvtPieRenderUtils$$.$_createGradientPieBorder$($slice$$19$$, $fill$$13$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($edge_pieChart$$8$$, $slice$$19$$.$_explodeOffsetX$, $slice$$19$$.$_explodeOffsetY$), $context$$55_shapes$$3_wedge$$.push($edge_pieChart$$8$$)
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$19$$, $context$$55_shapes$$3_wedge$$);
  return $context$$55_shapes$$3_wedge$$
};
D.$DvtPieRenderUtils$$.$associate$ = function $$DvtPieRenderUtils$$$$associate$$($slice$$20$$, $displayables$$6$$) {
  if($displayables$$6$$) {
    for(var $i$$224$$ = 0;$i$$224$$ < $displayables$$6$$.length;$i$$224$$++) {
      $slice$$20$$.$_pieChart$.$chart$.$__getEventManager$().$associate$($displayables$$6$$[$i$$224$$], $slice$$20$$)
    }
  }
};
D.$DvtPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtPieRenderUtils$$$$_createGradientPieBorder$$($slice$$21$$, $topFill$$1$$) {
  var $angExtent_arRatios$$1_diff$$4_style$$56$$ = D.$DvtPieRenderUtils$$.$BORDER$, $arColors$$5_gradBorder$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff$$4_style$$56$$), $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff$$4_style$$56$$), $angExtent_arRatios$$1_diff$$4_style$$56$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios$$1_diff$$4_style$$56$$), 
  $arBounds$$1_pieChart$$9$$ = $topFill$$1$$.$getBounds$(), $arColors$$5_gradBorder$$ = new D.$DvtLinearGradientStroke$$(120, $arColors$$5_gradBorder$$, $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$4_style$$56$$, $arBounds$$1_pieChart$$9$$);
  $arColors$$5_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = $slice$$21$$.$getAngleStart$();
  $angExtent_arRatios$$1_diff$$4_style$$56$$ = 180 > $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios$$1_diff$$4_style$$56$$ ? 180 : $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios$$1_diff$$4_style$$56$$ = $slice$$21$$.$getAngleExtent$() - $angExtent_arRatios$$1_diff$$4_style$$56$$;
  360 < $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ + $angExtent_arRatios$$1_diff$$4_style$$56$$ && ($angExtent_arRatios$$1_diff$$4_style$$56$$ = 360 - $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$);
  var $arBounds$$1_pieChart$$9$$ = $slice$$21$$.$_pieChart$, $pieCenter$$1$$ = $slice$$21$$.$getCenter$(), $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = new D.$DvtArc$$($arBounds$$1_pieChart$$9$$.$getCtx$(), $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$1_pieChart$$9$$.$_radiusX$, $arBounds$$1_pieChart$$9$$.$_radiusY$, $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$4_style$$56$$, "OPEN");
  $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$5_gradBorder$$);
  return $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$
};
D.$DvtPieRenderUtils$$.$createLateralSurface$ = function $$DvtPieRenderUtils$$$$createLateralSurface$$($slice$$22$$, $pathType$$, $fill$$14$$) {
  if(0 == $slice$$22$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$4$$ = [];
  if(0 < D.$DvtColorUtils$$.$getAlpha$($slice$$22$$.$getFillColor$())) {
    if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$4$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$22$$, $pathType$$, D.$JSCompiler_alias_NULL$$, $fill$$14$$))
    }else {
      if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$2$$ = D.$DvtPieRenderUtils$$.$_createCrustPathCommands$($slice$$22$$), $len$$5$$ = $pathCommands$$2$$.length, $i$$225$$ = 0;$i$$225$$ < $len$$5$$;$i$$225$$++) {
          $shapes$$4$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$22$$, $pathType$$, $pathCommands$$2$$[$i$$225$$], $fill$$14$$))
        }
      }
    }
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$22$$, $shapes$$4$$);
  return $shapes$$4$$
};
D.$DvtPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtPieRenderUtils$$$$generateLateralGradientFill$$($slice$$23$$, $objType$$1$$) {
  var $pieChart$$10$$ = $slice$$23$$.$_pieChart$, $skin$$5$$ = $pieChart$$10$$.$getSkin$(), $yOffset$$ = $objType$$1$$ == D.$DvtPieRenderUtils$$.$CRUST$ ? $slice$$23$$.getDepth() : 0, $angle$$14$$ = "skyros" == $skin$$5$$ ? 0 : 270, $arColors$$6$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($slice$$23$$.$getFillColor$()), $objType$$1$$, $skin$$5$$), $arAlphas$$5$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($slice$$23$$.$getFillColor$()), 
  $objType$$1$$), $arRatios$$2$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($objType$$1$$, $skin$$5$$), $arBounds$$2$$ = D.$JSCompiler_alias_NULL$$;
  "skyros" == $skin$$5$$ && ($arBounds$$2$$ = [window.Math.floor($slice$$23$$.$getCenter$().x - $pieChart$$10$$.$_radiusX$), window.Math.floor($slice$$23$$.$getCenter$().y - $pieChart$$10$$.$_radiusY$) + $yOffset$$, window.Math.ceil(2 * $pieChart$$10$$.$_radiusX$), window.Math.ceil(2 * $pieChart$$10$$.$_radiusY$)]);
  return new D.$DvtLinearGradientFill$$($angle$$14$$, $arColors$$6$$, $arAlphas$$5$$, $arRatios$$2$$, $arBounds$$2$$)
};
D.$DvtPieRenderUtils$$.$_generateLateralShape$ = function $$DvtPieRenderUtils$$$$_generateLateralShape$$($slice$$24$$, $pathType$$1_pointArray$$1_pt$$, $pathCommand_points$$13_xCenter$$, $fill$$15$$) {
  var $context$$56_path$$6_polygon$$ = $slice$$24$$.$_pieChart$.$getCtx$();
  if($pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$15$$ = $slice$$24$$.$getAngleStart$(), $arc$$2$$ = $slice$$24$$.$getAngleExtent$();
    $pathCommand_points$$13_xCenter$$ = $slice$$24$$.$getCenter$().x;
    var $i$$226_yCenter$$ = $slice$$24$$.$getCenter$().y, $xRadius$$ = $slice$$24$$.$_radiusX$, $yRadius$$ = $slice$$24$$.$_radiusY$, $depth$$3$$ = $slice$$24$$.getDepth();
    $pathType$$1_pointArray$$1_pt$$ = $pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ ? D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$15$$ + $arc$$2$$, $pathCommand_points$$13_xCenter$$, $i$$226_yCenter$$, $xRadius$$, $yRadius$$) : D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$15$$, $pathCommand_points$$13_xCenter$$, $i$$226_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray$$1_pt$$ = D.$DvtPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$13_xCenter$$, $i$$226_yCenter$$, $pathType$$1_pointArray$$1_pt$$.x, $pathType$$1_pointArray$$1_pt$$.y, $depth$$3$$);
    $pathCommand_points$$13_xCenter$$ = [];
    for($i$$226_yCenter$$ = 0;$i$$226_yCenter$$ < $pathType$$1_pointArray$$1_pt$$.length;$i$$226_yCenter$$++) {
      $pathCommand_points$$13_xCenter$$.push($pathType$$1_pointArray$$1_pt$$[$i$$226_yCenter$$].x, $pathType$$1_pointArray$$1_pt$$[$i$$226_yCenter$$].y)
    }
    $context$$56_path$$6_polygon$$ = new D.$DvtPolygon$$($context$$56_path$$6_polygon$$, $pathCommand_points$$13_xCenter$$);
    $context$$56_path$$6_polygon$$.$setFill$($fill$$15$$);
    $slice$$24$$.$getStrokeColor$() && $context$$56_path$$6_polygon$$.$setSolidStroke$($slice$$24$$.$getStrokeColor$());
    return $context$$56_path$$6_polygon$$
  }
  return $pathCommand_points$$13_xCenter$$ ? ($context$$56_path$$6_polygon$$ = new D.$DvtPath$$($context$$56_path$$6_polygon$$, D.$JSCompiler_alias_NULL$$), $context$$56_path$$6_polygon$$.$setCmds$($pathCommand_points$$13_xCenter$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$56_path$$6_polygon$$, $slice$$24$$.$_explodeOffsetX$, $slice$$24$$.$_explodeOffsetY$), $context$$56_path$$6_polygon$$.$setFill$($fill$$15$$), $slice$$24$$.$getStrokeColor$() && $context$$56_path$$6_polygon$$.$setSolidStroke$($slice$$24$$.$getStrokeColor$()), 
  $context$$56_path$$6_polygon$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtPieRenderUtils$$$$_createCrustPathCommands$$($depth$$4_slice$$25$$) {
  var $angle$$16$$ = $depth$$4_slice$$25$$.$getAngleStart$(), $arc$$3$$ = $depth$$4_slice$$25$$.$getAngleExtent$(), $angleEnd$$ = $angle$$16$$ + $arc$$3$$, $xCenter$$1$$ = $depth$$4_slice$$25$$.$getCenter$().x, $yCenter$$1$$ = $depth$$4_slice$$25$$.$getCenter$().y, $xRadius$$1$$ = $depth$$4_slice$$25$$.$_radiusX$, $yRadius$$1$$ = $depth$$4_slice$$25$$.$_radiusY$;
  $depth$$4_slice$$25$$ = $depth$$4_slice$$25$$.getDepth();
  var $arOuterPath$$ = [];
  180 > $angle$$16$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$4_slice$$25$$, $angle$$16$$, 180 - $angle$$16$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$4_slice$$25$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, 
  $depth$$4_slice$$25$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$4_slice$$25$$, $angle$$16$$, 360 - $angle$$16$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$4_slice$$25$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$16$$ && 180 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, 
  $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$4_slice$$25$$, $angle$$16$$, 180 - $angle$$16$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$4_slice$$25$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$4_slice$$25$$, $angle$$16$$, $arc$$3$$));
  return $arOuterPath$$
};
D.$DvtPieRenderUtils$$.$_makeOuterPath$ = function $$DvtPieRenderUtils$$$$_makeOuterPath$$($cx$$9_endPointTopX$$, $cy$$10_endPointTopY$$, $rx$$5$$, $ry$$5$$, $depth$$5$$, $startAngle$$3_startPointTop$$, $angleExtent$$2_angleExtentRads$$1$$) {
  $angleExtent$$2_angleExtentRads$$1$$ = D.$DvtMath$$.$degreesToRads$($angleExtent$$2_angleExtentRads$$1$$);
  var $endAngleRads_pathCommands$$3$$ = -(D.$DvtMath$$.$degreesToRads$($startAngle$$3_startPointTop$$) + $angleExtent$$2_angleExtentRads$$1$$);
  $startAngle$$3_startPointTop$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$3_startPointTop$$, $cx$$9_endPointTopX$$, $cy$$10_endPointTopY$$, $rx$$5$$, $ry$$5$$);
  $cx$$9_endPointTopX$$ += window.Math.cos($endAngleRads_pathCommands$$3$$) * $rx$$5$$;
  $cy$$10_endPointTopY$$ += window.Math.sin($endAngleRads_pathCommands$$3$$) * $ry$$5$$;
  $endAngleRads_pathCommands$$3$$ = D.$DvtPathUtils$$.moveTo($startAngle$$3_startPointTop$$.x, $startAngle$$3_startPointTop$$.y);
  $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.arcTo($rx$$5$$, $ry$$5$$, $angleExtent$$2_angleExtentRads$$1$$, 0, $cx$$9_endPointTopX$$, $cy$$10_endPointTopY$$);
  $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.lineTo($cx$$9_endPointTopX$$, $cy$$10_endPointTopY$$ + $depth$$5$$);
  $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.arcTo($rx$$5$$, $ry$$5$$, $angleExtent$$2_angleExtentRads$$1$$, 1, $startAngle$$3_startPointTop$$.x, $startAngle$$3_startPointTop$$.y + $depth$$5$$);
  return $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.lineTo($startAngle$$3_startPointTop$$.x, $startAngle$$3_startPointTop$$.y)
};
D.$DvtPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtPieRenderUtils$$$$_generateInnerPoints$$($cx$$10$$, $cy$$11$$, $xpos$$, $ypos$$, $tilt$$4$$) {
  var $pointArray$$2$$ = [];
  $pointArray$$2$$.push({x:$cx$$10$$, y:$cy$$11$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$4$$});
  $pointArray$$2$$.push({x:$cx$$10$$, y:$cy$$11$$ + $tilt$$4$$});
  return $pointArray$$2$$
};
D.$DvtPieLabelInfo$$ = function $$DvtPieLabelInfo$$$() {
  this.$_slice$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_minY$ = this.$_maxY$ = -1
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelInfo$$, D.$DvtObj$$, "DvtPieLabelInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAngle$ = (0,D.$JSCompiler_get$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.$setAngle$ = (0,D.$JSCompiler_set$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$getMaxY$ = (0,D.$JSCompiler_get$$)("$_maxY$");
D.$JSCompiler_prototypeAlias$$.$getMinY$ = (0,D.$JSCompiler_get$$)("$_minY$");
D.$JSCompiler_StaticMethods_boundY$$ = function $$JSCompiler_StaticMethods_boundY$$$($JSCompiler_StaticMethods_boundY$self$$, $y$$67$$) {
  $y$$67$$ = window.Math.max($y$$67$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$);
  return $y$$67$$ = window.Math.min($y$$67$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getPosition$ = (0,D.$JSCompiler_get$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setPosition$ = (0,D.$JSCompiler_set$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtPieLabelUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelUtils$$, D.$DvtObj$$, "DvtPieLabelUtils");
D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 1.04;
D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
D.$DvtPieLabelUtils$$.$_NO_COLLISION$ = 0;
D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ = 1;
D.$DvtPieLabelUtils$$.$_ALL_COLLISION$ = 2;
D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$) {
  var $labelPosition$$2$$ = $pie$$.$getLabelPosition$();
  D.$DvtPieLabelUtils$$.$_layoutInsideLabels$($pie$$, "auto" == $labelPosition$$2$$);
  D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$)
};
D.$DvtPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtPieLabelUtils$$$$_layoutInsideLabels$$($pie$$1$$, $isHybrid$$) {
  for(var $slices$$6$$ = $pie$$1$$.$_slices$, $i$$218$$ = 0;$i$$218$$ < $slices$$6$$.length;$i$$218$$++) {
    var $slice$$11$$ = $slices$$6$$[$i$$218$$], $labelPosition$$3_stage$$6$$ = (0,D.$JSCompiler_StaticMethods_getSeriesLabelPosition$$)($pie$$1$$, $slice$$11$$.$getSeriesIndex$());
    if(!("none" == $labelPosition$$3_stage$$6$$ || "outsideSlice" == $labelPosition$$3_stage$$6$$)) {
      var $estimatedDims_midAngle$$ = $slice$$11$$.$getAngleStart$() + $slice$$11$$.$getAngleExtent$() / 2, $ir$$5_x1$$21$$ = $slice$$11$$.$getInnerRadius$(), $center$$2_x2$$19$$ = $slice$$11$$.$getCenter$(), $offset$$17_posX_usableSpace$$ = 0, $midPt$$1_posY_y2$$13$$ = 0, $sliceLabel$$1$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$11$$, D.$JSCompiler_alias_TRUE$$);
      1 == $slices$$6$$.length ? ($offset$$17_posX_usableSpace$$ = $center$$2_x2$$19$$.x, $midPt$$1_posY_y2$$13$$ = $center$$2_x2$$19$$.y) : ($offset$$17_posX_usableSpace$$ = window.Math.max(0.45, 0.65 - 0.45 * $ir$$5_x1$$21$$ / window.Math.max($slice$$11$$.$_radiusY$, 0.001)), $midPt$$1_posY_y2$$13$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims_midAngle$$, $center$$2_x2$$19$$.x, $center$$2_x2$$19$$.y, $ir$$5_x1$$21$$ + ($slice$$11$$.$_radiusX$ - $ir$$5_x1$$21$$) * $offset$$17_posX_usableSpace$$, 
      $ir$$5_x1$$21$$ + ($slice$$11$$.$_radiusY$ - $ir$$5_x1$$21$$) * $offset$$17_posX_usableSpace$$), $offset$$17_posX_usableSpace$$ = $midPt$$1_posY_y2$$13$$.x, $midPt$$1_posY_y2$$13$$ = $midPt$$1_posY_y2$$13$$.y);
      $sliceLabel$$1$$.$setX$($offset$$17_posX_usableSpace$$);
      $sliceLabel$$1$$.$setY$($midPt$$1_posY_y2$$13$$);
      $sliceLabel$$1$$.$alignMiddle$();
      $sliceLabel$$1$$.$alignCenter$();
      for(var $estimatedDims_midAngle$$ = D.$DvtTextUtils$$.$guessTextDimensions$($sliceLabel$$1$$), $center$$2_x2$$19$$ = $ir$$5_x1$$21$$ = $offset$$17_posX_usableSpace$$, $y1$$14$$ = $midPt$$1_posY_y2$$13$$ - $estimatedDims_midAngle$$.$h$ / 2, $midPt$$1_posY_y2$$13$$ = $midPt$$1_posY_y2$$13$$ + $estimatedDims_midAngle$$.$h$ / 2;$slice$$11$$.contains($ir$$5_x1$$21$$, $y1$$14$$) && $slice$$11$$.contains($ir$$5_x1$$21$$, $midPt$$1_posY_y2$$13$$);) {
        $ir$$5_x1$$21$$--
      }
      for(;$slice$$11$$.contains($center$$2_x2$$19$$, $y1$$14$$) && $slice$$11$$.contains($center$$2_x2$$19$$, $midPt$$1_posY_y2$$13$$);) {
        $center$$2_x2$$19$$++
      }
      $ir$$5_x1$$21$$ = window.Math.ceil($ir$$5_x1$$21$$ + 3);
      $center$$2_x2$$19$$ = window.Math.floor($center$$2_x2$$19$$ - 3);
      $offset$$17_posX_usableSpace$$ = 2 * window.Math.min($offset$$17_posX_usableSpace$$ - $ir$$5_x1$$21$$, $center$$2_x2$$19$$ - $offset$$17_posX_usableSpace$$);
      $offset$$17_posX_usableSpace$$ < $estimatedDims_midAngle$$.$w$ && ($sliceLabel$$1$$.$setX$(($ir$$5_x1$$21$$ + $center$$2_x2$$19$$) / 2), $offset$$17_posX_usableSpace$$ = $center$$2_x2$$19$$ - $ir$$5_x1$$21$$);
      $isHybrid$$ && "center" != $labelPosition$$3_stage$$6$$ ? $sliceLabel$$1$$.$getDimensions$().$w$ < $offset$$17_posX_usableSpace$$ ? $slice$$11$$.$setSliceLabel$($sliceLabel$$1$$) : $slice$$11$$.$setSliceLabel$(D.$JSCompiler_alias_NULL$$) : ($labelPosition$$3_stage$$6$$ = $pie$$1$$.$getCtx$().$_stage$, D.$DvtTextUtils$$.$fitText$($sliceLabel$$1$$, $offset$$17_posX_usableSpace$$, $estimatedDims_midAngle$$.$h$, $labelPosition$$3_stage$$6$$) && ($labelPosition$$3_stage$$6$$.removeChild($sliceLabel$$1$$), 
      $slice$$11$$.$setSliceLabel$($sliceLabel$$1$$)));
      $slice$$11$$.$_sliceLabel$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($slice$$11$$)
    }
  }
};
D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$2$$) {
  var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = D.$DvtPieLabelUtils$$.$_generateInitialLayout$($pie$$2$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$2$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$2$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
  $leftColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$2$$, $leftLabels$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
  $leftColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$2$$, $alabels_rightLabels$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
  D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$2$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
  D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$2$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
};
D.$DvtPieLabelUtils$$.$_createLabel$ = function $$DvtPieLabelUtils$$$$_createLabel$$($slice$$12$$, $isInside$$) {
  var $dataItem$$37_pieChart$$4_style$$51$$ = $slice$$12$$.$_pieChart$, $context$$54_sliceLabel$$2$$ = $dataItem$$37_pieChart$$4_style$$51$$.$getCtx$(), $context$$54_sliceLabel$$2$$ = $isInside$$ ? new D.$DvtOutputText$$($context$$54_sliceLabel$$2$$) : new D.$DvtMultilineText$$($context$$54_sliceLabel$$2$$), $labelStr$$1_styleDefaults$$2$$ = $dataItem$$37_pieChart$$4_style$$51$$.$getOptions$().styleDefaults, $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = [$labelStr$$1_styleDefaults$$2$$.dataLabelStyle, 
  $labelStr$$1_styleDefaults$$2$$.sliceLabelStyle];
  ($dataItem$$37_pieChart$$4_style$$51$$ = D.$DvtChartDataUtils$$.$getDataItem$($dataItem$$37_pieChart$$4_style$$51$$.$chart$, $slice$$12$$.$getSeriesIndex$(), 0)) && $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$.push(new D.$DvtCSSStyle$$($dataItem$$37_pieChart$$4_style$$51$$.labelStyle));
  $dataItem$$37_pieChart$$4_style$$51$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($bColorDefined_contrastingColor$$1_labelStyleArray$$2$$);
  $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = $dataItem$$37_pieChart$$4_style$$51$$.$getStyle$("color") != D.$JSCompiler_alias_NULL$$;
  $isInside$$ && (!$bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ || D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$) ? ($bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($slice$$12$$.$getFillColor$()), $dataItem$$37_pieChart$$4_style$$51$$.$setStyle$("color", $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$)) : $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ || $dataItem$$37_pieChart$$4_style$$51$$.$setStyle$("color", 
  $labelStr$$1_styleDefaults$$2$$._defaultSliceLabelColor);
  $context$$54_sliceLabel$$2$$.$setCSSStyle$($dataItem$$37_pieChart$$4_style$$51$$);
  $labelStr$$1_styleDefaults$$2$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$($slice$$12$$, $labelStr$$1_styleDefaults$$2$$.sliceLabelType);
  $context$$54_sliceLabel$$2$$.$setTextString$($labelStr$$1_styleDefaults$$2$$);
  $slice$$12$$.$_sliceLabelString$ = $labelStr$$1_styleDefaults$$2$$;
  return $context$$54_sliceLabel$$2$$
};
D.$DvtPieLabelUtils$$.$createPieCenterLabel$ = function $$DvtPieLabelUtils$$$$createPieCenterLabel$$($pieChart$$5$$) {
  var $pieCenterLabel_textDim$$5$$ = $pieChart$$5$$.$getOptions$().pieCenterLabel;
  if($pieCenterLabel_textDim$$5$$) {
    var $centerStyle$$ = $pieCenterLabel_textDim$$5$$.style, $availSpace$$80_ir$$6$$ = 0 < $pieChart$$5$$.$getInnerRadius$() ? $pieChart$$5$$.$getInnerRadius$() : 0.5 * $pieChart$$5$$.$_radiusX$, $center$$3$$ = $pieChart$$5$$.$getCenter$(), $centerLabel$$ = new D.$DvtMultilineText$$($pieChart$$5$$.$getCtx$()), $availSpace$$80_ir$$6$$ = new D.$DvtRectangle$$($center$$3$$.x, $center$$3$$.y, $availSpace$$80_ir$$6$$ * window.Math.sqrt(2), $availSpace$$80_ir$$6$$ * window.Math.sqrt(2));
    $centerLabel$$.$setCSSStyle$(new D.$DvtCSSStyle$$($centerStyle$$));
    $centerLabel$$.$setTextString$($pieCenterLabel_textDim$$5$$.text);
    D.$DvtTextUtils$$.$fitText$($centerLabel$$, $availSpace$$80_ir$$6$$.$w$, $availSpace$$80_ir$$6$$.$h$, $pieChart$$5$$);
    $pieCenterLabel_textDim$$5$$ = $centerLabel$$.$getDimensions$();
    $centerLabel$$.$setY$($availSpace$$80_ir$$6$$.y - $pieCenterLabel_textDim$$5$$.$h$ / 2);
    $centerLabel$$.$setX$($availSpace$$80_ir$$6$$.x);
    $centerLabel$$.$alignCenter$();
    $pieChart$$5$$.$addChild$($centerLabel$$)
  }
};
D.$DvtPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtPieLabelUtils$$$$generateSliceLabelString$$($slice$$13$$, $labelType$$) {
  var $pieChart$$6_svalue$$ = $slice$$13$$.$_pieChart$, $customLabel_value$$109$$ = $slice$$13$$.$_customLabel$, $stext_valueFormat$$5$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($pieChart$$6_svalue$$.$chart$, "label");
  if($customLabel_value$$109$$ != D.$JSCompiler_alias_NULL$$) {
    return"number" == typeof $customLabel_value$$109$$ ? D.$DvtChartTooltipUtils$$.$formatValue$($pieChart$$6_svalue$$.$getCtx$(), $stext_valueFormat$$5$$, $customLabel_value$$109$$) : $customLabel_value$$109$$
  }
  var $customLabel_value$$109$$ = $slice$$13$$.getValue(), $decDigits_spercent_totalValue$$2$$ = $pieChart$$6_svalue$$.$getTotalValue$(), $percentage$$2$$ = 0 == $decDigits_spercent_totalValue$$2$$ ? 0 : $customLabel_value$$109$$ / $decDigits_spercent_totalValue$$2$$, $decDigits_spercent_totalValue$$2$$ = 0.01 > $percentage$$2$$ ? 4 : 0.1 > $percentage$$2$$ ? 3 : 1 > $percentage$$2$$ ? 2 : 0, $percentConverter$$ = (0,D.$JSCompiler_StaticMethods_getNumberConverter$$)($pieChart$$6_svalue$$.$getCtx$(), 
  {style:"percent", maximumFractionDigits:$decDigits_spercent_totalValue$$2$$, minimumFractionDigits:$decDigits_spercent_totalValue$$2$$}), $decDigits_spercent_totalValue$$2$$ = "";
  $percentConverter$$ && $percentConverter$$.getAsString ? $decDigits_spercent_totalValue$$2$$ = $percentConverter$$.getAsString($percentage$$2$$) : $percentConverter$$ && $percentConverter$$.format ? $decDigits_spercent_totalValue$$2$$ = $percentConverter$$.format($percentage$$2$$) : ($percentage$$2$$ *= 100, $decDigits_spercent_totalValue$$2$$ = D.$DvtChartTooltipUtils$$.$formatValue$($pieChart$$6_svalue$$.$getCtx$(), {}, $percentage$$2$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 
  100 == $percentage$$2$$ ? 1 : D.$JSCompiler_alias_NULL$$) + "%");
  $pieChart$$6_svalue$$ = D.$DvtChartTooltipUtils$$.$formatValue$($pieChart$$6_svalue$$.$getCtx$(), $stext_valueFormat$$5$$, $customLabel_value$$109$$);
  $stext_valueFormat$$5$$ = $slice$$13$$.$getSeriesLabel$();
  return"percent" == $labelType$$ ? $decDigits_spercent_totalValue$$2$$ : "number" == $labelType$$ ? $pieChart$$6_svalue$$ : "text" == $labelType$$ ? $stext_valueFormat$$5$$ : "textAndPercent" == $labelType$$ ? $stext_valueFormat$$5$$ + ", " + $decDigits_spercent_totalValue$$2$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtPieLabelUtils$$$$_refineInitialLayout$$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$ = $pie$$3$$.$_frame$.y, $collisionTop$$ = D.$JSCompiler_alias_FALSE$$, $collisionCentral$$ = D.$JSCompiler_alias_FALSE$$, $collisionBottom$$ = D.$JSCompiler_alias_FALSE$$, $labelBottom$$ = 0, $collide_labelInfo$$, $bottomQuarter$$ = D.$JSCompiler_alias_FALSE$$, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$ = D.$JSCompiler_alias_FALSE$$;
    $isLeftSideLabels_side$$ = $isLeftSideLabels_side$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$219$$ = 0;$i$$219$$ < $labelInfoArray$$.length;$i$$219$$++) {
      $collide_labelInfo$$ = $labelInfoArray$$[$i$$219$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$.$getPosition$() && ($bottomQuarter$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ = $collide_labelInfo$$.$getY$() + $collide_labelInfo$$.getHeight(), ($collide_labelInfo$$ = $lastY$$ - $collide_labelInfo$$.$getY$() > D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = D.$JSCompiler_alias_TRUE$$ : 
      $collisionBottom$$ = D.$JSCompiler_alias_TRUE$$ : $collisionTop$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ > $lastY$$ && ($lastY$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? 
    (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : D.$DvtPieLabelUtils$$.$_NO_COLLISION$
  }
};
D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$4$$, $alabels$$1$$, $i$$220_side$$1$$) {
  if(!($alabels$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$14$$, $sliceLabel$$3$$, $labelInfo$$1$$, $isLeftSide$$ = $i$$220_side$$1$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $excessWidth$$ = window.Infinity;
    for($i$$220_side$$1$$ = 0;$i$$220_side$$1$$ < $alabels$$1$$.length;$i$$220_side$$1$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$220_side$$1$$], $excessLength_slice$$14$$ = $labelInfo$$1$$.$_slice$, $labelInfo$$1$$.$_hasFeeler$ ? ($excessLength_slice$$14$$ = D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$14$$, $isLeftSide$$), $excessWidth$$ = window.Math.min($excessWidth$$, $excessLength_slice$$14$$)) : (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$14$$)
    }
    for($i$$220_side$$1$$ = 0;$i$$220_side$$1$$ < $alabels$$1$$.length;$i$$220_side$$1$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$220_side$$1$$];
      $excessLength_slice$$14$$ = $labelInfo$$1$$.$_slice$;
      $sliceLabel$$3$$ = $labelInfo$$1$$.$_sliceLabel$;
      $labelInfo$$1$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() + $excessWidth$$) : $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() - $excessWidth$$), D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$14$$, $isLeftSide$$), (0,D.$JSCompiler_StaticMethods_setMaxLines$$)($sliceLabel$$3$$, 1));
      $sliceLabel$$3$$.$setY$($labelInfo$$1$$.$getY$());
      $sliceLabel$$3$$.$setX$($labelInfo$$1$$.$getX$());
      var $frame$$ = $pie$$4$$.$_frame$;
      $labelInfo$$1$$.$getY$() < $frame$$.y || $labelInfo$$1$$.$getY$() + $labelInfo$$1$$.getHeight() > $frame$$.y + $frame$$.$h$ ? ($excessLength_slice$$14$$.$setSliceLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$14$$)) : (D.$DvtPieLabelUtils$$.$_truncateSliceLabel$($pie$$4$$, $excessLength_slice$$14$$, $labelInfo$$1$$, $isLeftSide$$), $excessLength_slice$$14$$.$setSliceLabel$($sliceLabel$$3$$), (0 == $labelInfo$$1$$.getWidth() || 0 == 
      $labelInfo$$1$$.getHeight()) && (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$14$$))
    }
  }
};
D.$DvtPieLabelUtils$$.$_calculateFeeler$ = function $$DvtPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$2_pa$$, $slice$$15$$, $isLeft$$1$$) {
  var $endPt$$1_targetX$$ = $labelInfo$$2_pa$$.$getX$(), $radFeelerAngle_targetY_tilt$$1$$ = $labelInfo$$2_pa$$.$getY$() + $labelInfo$$2_pa$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $slice$$15$$.$_radiusX$, $midPt$$2_midX$$;
  $isLeft$$1$$ ? ($endPt$$1_targetX$$ += D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ + $minHorizLength$$) : ($endPt$$1_targetX$$ -= D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ - $minHorizLength$$);
  var $ma_startPt$$1$$ = {x:0, y:0};
  $midPt$$2_midX$$ = {x:$midPt$$2_midX$$, y:$radFeelerAngle_targetY_tilt$$1$$};
  $endPt$$1_targetX$$ = {x:$endPt$$1_targetX$$, y:$radFeelerAngle_targetY_tilt$$1$$};
  $ma_startPt$$1$$ = $labelInfo$$2_pa$$.$getAngle$();
  $radFeelerAngle_targetY_tilt$$1$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$1$$, $slice$$15$$.getDepth());
  $ma_startPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$1$$, $slice$$15$$.$getCenter$().x, $slice$$15$$.$getCenter$().y + $radFeelerAngle_targetY_tilt$$1$$, $slice$$15$$.$_radiusX$, $slice$$15$$.$_radiusY$);
  $labelInfo$$2_pa$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$2_pa$$.$getPosition$());
  var $radFeelerAngle_targetY_tilt$$1$$ = window.Math.abs(window.Math.atan2($midPt$$2_midX$$.x - $ma_startPt$$1$$.x, $ma_startPt$$1$$.y - $midPt$$2_midX$$.y)), $horizOffset$$ = ($ma_startPt$$1$$.y - $midPt$$2_midX$$.y) * window.Math.tan($labelInfo$$2_pa$$);
  if($labelInfo$$2_pa$$ > window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ > window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ < $labelInfo$$2_pa$$ || $labelInfo$$2_pa$$ < window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ < window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ > $labelInfo$$2_pa$$) {
    $midPt$$2_midX$$.x = $isLeft$$1$$ ? $ma_startPt$$1$$.x - $horizOffset$$ : $ma_startPt$$1$$.x + $horizOffset$$
  }
  $slice$$15$$.$_outsideFeelerStart$ = $ma_startPt$$1$$;
  $slice$$15$$.$_outsideFeelerMid$ = $midPt$$2_midX$$;
  $slice$$15$$.$_outsideFeelerEnd$ = $endPt$$1_targetX$$;
  $slice$$15$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$;
  return window.Math.abs($endPt$$1_targetX$$.x - $midPt$$2_midX$$.x) - $minHorizLength$$
};
D.$DvtPieLabelUtils$$.$_adjustForDepth$ = function $$DvtPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$2$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$2$$ = $pieDepth$$);
  return $depth$$2$$
};
D.$DvtPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$221$$ = 0;$i$$221$$ < $alabels$$2$$.length;$i$$221$$++) {
    var $pa$$1$$ = $alabels$$2$$[$i$$221$$].$getPosition$();
    window.Math.abs($pa$$1$$ - 90) < $bestAngle$$ && ($bestAngle$$ = window.Math.abs($pa$$1$$ - 90), $bestIndex$$ = $i$$221$$)
  }
  return $bestIndex$$
};
D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$5$$, $labelInfo$$3$$, $b$$9_heightFromCenter_vertX$$) {
  $labelInfo$$3$$.$setX$($b$$9_heightFromCenter_vertX$$);
  $b$$9_heightFromCenter_vertX$$ = $optimalY_pie$$5$$.$_radiusY$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$);
  var $angleInRad_tilt$$2$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$3$$.$getPosition$());
  $b$$9_heightFromCenter_vertX$$ *= window.Math.cos($angleInRad_tilt$$2$$);
  $angleInRad_tilt$$2$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$3$$.$getAngle$(), $optimalY_pie$$5$$.getDepth());
  $optimalY_pie$$5$$ = $optimalY_pie$$5$$.$getCenter$().y - $b$$9_heightFromCenter_vertX$$ - $labelInfo$$3$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $angleInRad_tilt$$2$$;
  $labelInfo$$3$$.$setY$((0,D.$JSCompiler_StaticMethods_boundY$$)($labelInfo$$3$$, $optimalY_pie$$5$$))
};
D.$DvtPieLabelUtils$$.$_columnLabels$ = function $$DvtPieLabelUtils$$$$_columnLabels$$($pie$$6$$, $alabels$$3$$, $i$$222_isLeft$$3_startLabel$$, $isTop_labelInfo$$4$$, $isBottom$$) {
  var $frame$$1_vertX$$1$$ = $pie$$6$$.$_frame$, $minY$$2_startIndex$$17$$ = $frame$$1_vertX$$1$$.y, $highestY_isStartAtTop_maxY$$2$$ = $frame$$1_vertX$$1$$.y + $frame$$1_vertX$$1$$.$h$, $frame$$1_vertX$$1$$ = $pie$$6$$.$getCenter$().x, $lowestY_minFeelerDist$$ = $pie$$6$$.$_radiusX$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$), $frame$$1_vertX$$1$$ = $i$$222_isLeft$$3_startLabel$$ ? $frame$$1_vertX$$1$$ - $lowestY_minFeelerDist$$ : $frame$$1_vertX$$1$$ + 
  $lowestY_minFeelerDist$$;
  for($i$$222_isLeft$$3_startLabel$$ = 0;$i$$222_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$222_isLeft$$3_startLabel$$++) {
    $alabels$$3$$[$i$$222_isLeft$$3_startLabel$$].$_minY$ = $minY$$2_startIndex$$17$$, $minY$$2_startIndex$$17$$ += $alabels$$3$$[$i$$222_isLeft$$3_startLabel$$].getHeight()
  }
  for($i$$222_isLeft$$3_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$222_isLeft$$3_startLabel$$;$i$$222_isLeft$$3_startLabel$$--) {
    $highestY_isStartAtTop_maxY$$2$$ -= $alabels$$3$$[$i$$222_isLeft$$3_startLabel$$].getHeight(), $alabels$$3$$[$i$$222_isLeft$$3_startLabel$$].$_maxY$ = $highestY_isStartAtTop_maxY$$2$$
  }
  if($alabels$$3$$[0].$_minY$ >= $alabels$$3$$[0].$_maxY$) {
    for($i$$222_isLeft$$3_startLabel$$ = 0;$i$$222_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$222_isLeft$$3_startLabel$$++) {
      $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$222_isLeft$$3_startLabel$$], $isTop_labelInfo$$4$$.$setX$($frame$$1_vertX$$1$$), $isTop_labelInfo$$4$$.$setY$(($isTop_labelInfo$$4$$.$_minY$ + $isTop_labelInfo$$4$$.$_maxY$) / 2), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
  }else {
    $minY$$2_startIndex$$17$$ = D.$DvtPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
    $i$$222_isLeft$$3_startLabel$$ = $alabels$$3$$[$minY$$2_startIndex$$17$$];
    $highestY_isStartAtTop_maxY$$2$$ = 90 >= $i$$222_isLeft$$3_startLabel$$.$getPosition$();
    $isTop_labelInfo$$4$$ && !$isBottom$$ && $i$$222_isLeft$$3_startLabel$$.$_minY$ + $i$$222_isLeft$$3_startLabel$$.getHeight() > $pie$$6$$.$getCenter$().y && ($isBottom$$ = D.$JSCompiler_alias_TRUE$$);
    $isBottom$$ && !$isTop_labelInfo$$4$$ && $i$$222_isLeft$$3_startLabel$$.$_maxY$ < $pie$$6$$.$getCenter$().y && ($isTop_labelInfo$$4$$ = D.$JSCompiler_alias_TRUE$$);
    if($isTop_labelInfo$$4$$ && $highestY_isStartAtTop_maxY$$2$$ || $isBottom$$ && !$highestY_isStartAtTop_maxY$$2$$) {
      D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $i$$222_isLeft$$3_startLabel$$, $frame$$1_vertX$$1$$), $i$$222_isLeft$$3_startLabel$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
    var $highestY_isStartAtTop_maxY$$2$$ = $i$$222_isLeft$$3_startLabel$$.$getY$(), $lowestY_minFeelerDist$$ = $i$$222_isLeft$$3_startLabel$$.$getY$() + $i$$222_isLeft$$3_startLabel$$.getHeight(), $optimalY$$1$$, $labelHeight$$1$$;
    if($isTop_labelInfo$$4$$) {
      for($i$$222_isLeft$$3_startLabel$$ = $minY$$2_startIndex$$17$$ - 1;0 <= $i$$222_isLeft$$3_startLabel$$;$i$$222_isLeft$$3_startLabel$$--) {
        $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$222_isLeft$$3_startLabel$$], $labelHeight$$1$$ = $isTop_labelInfo$$4$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $isTop_labelInfo$$4$$, $frame$$1_vertX$$1$$), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$4$$.$getY$(), $highestY_isStartAtTop_maxY$$2$$ = $optimalY$$1$$ + $labelHeight$$1$$ < $highestY_isStartAtTop_maxY$$2$$ ? $optimalY$$1$$ : $highestY_isStartAtTop_maxY$$2$$ - 
        $labelHeight$$1$$, $isTop_labelInfo$$4$$.$setY$($highestY_isStartAtTop_maxY$$2$$)
      }
    }
    if($isBottom$$) {
      for($i$$222_isLeft$$3_startLabel$$ = $minY$$2_startIndex$$17$$ + 1;$i$$222_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$222_isLeft$$3_startLabel$$++) {
        $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$222_isLeft$$3_startLabel$$], $labelHeight$$1$$ = $isTop_labelInfo$$4$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $isTop_labelInfo$$4$$, $frame$$1_vertX$$1$$), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$4$$.$getY$(), $lowestY_minFeelerDist$$ = $optimalY$$1$$ > $lowestY_minFeelerDist$$ ? $optimalY$$1$$ + $labelHeight$$1$$ : $lowestY_minFeelerDist$$ + $labelHeight$$1$$, 
        $isTop_labelInfo$$4$$.$setY$($lowestY_minFeelerDist$$ - $labelHeight$$1$$)
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtPieLabelUtils$$$$_truncateSliceLabel$$($pie$$7_tmDimPt$$, $frame$$2_slice$$16$$, $labelInfo$$5$$, $isLeft$$4$$) {
  var $sliceLabel$$4$$ = $labelInfo$$5$$.$_sliceLabel$, $style$$52$$ = $sliceLabel$$4$$.$getCSSStyle$(), $maxLabelWidth$$2_numChildren$$5$$ = 0, $maxLabelWidth$$2_numChildren$$5$$ = $pie$$7_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = D.$JSCompiler_alias_FALSE$$;
  $pie$$7_tmDimPt$$.contains($sliceLabel$$4$$) || ($pie$$7_tmDimPt$$.$addChild$($sliceLabel$$4$$), $removeTextArea$$ = D.$JSCompiler_alias_TRUE$$);
  $sliceLabel$$4$$.$setCSSStyle$($style$$52$$);
  $sliceLabel$$4$$.$setTextString$($frame$$2_slice$$16$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$7_tmDimPt$$.$removeChildAt$($maxLabelWidth$$2_numChildren$$5$$);
  $frame$$2_slice$$16$$ = $pie$$7_tmDimPt$$.$_frame$;
  $maxLabelWidth$$2_numChildren$$5$$ = $isLeft$$4$$ ? $labelInfo$$5$$.$getX$() - $frame$$2_slice$$16$$.x : $frame$$2_slice$$16$$.x + $frame$$2_slice$$16$$.$w$ - $labelInfo$$5$$.$getX$();
  $pie$$7_tmDimPt$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$7_tmDimPt$$, $sliceLabel$$4$$, $maxLabelWidth$$2_numChildren$$5$$, $labelInfo$$5$$.$_initialNumLines$);
  $labelInfo$$5$$.$setWidth$($pie$$7_tmDimPt$$.x);
  $labelInfo$$5$$.getHeight() != $pie$$7_tmDimPt$$.y && $labelInfo$$5$$.$setHeight$($pie$$7_tmDimPt$$.y)
};
D.$DvtPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtPieLabelUtils$$$$_generateInitialLayout$$($pie$$8$$) {
  for(var $arArrays$$ = (0,window.Array)(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $slices$$7$$ = $pie$$8$$.$_slices$, $frame$$3$$ = $pie$$8$$.$_frame$, $i$$223$$ = 0;$i$$223$$ < $slices$$7$$.length;$i$$223$$++) {
    var $slice$$17$$ = $slices$$7$$[$i$$223$$], $labelPosition$$4_s_label$$ = (0,D.$JSCompiler_StaticMethods_getSeriesLabelPosition$$)($pie$$8$$, $slice$$17$$.$getSeriesIndex$());
    if(!($slice$$17$$.$_sliceLabel$ != D.$JSCompiler_alias_NULL$$ || "none" == $labelPosition$$4_s_label$$ || "center" == $labelPosition$$4_s_label$$)) {
      var $labelPosition$$4_s_label$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$17$$, D.$JSCompiler_alias_FALSE$$), $ma$$2$$ = $slice$$17$$.$getAngleStart$() + $slice$$17$$.$getAngleExtent$() / 2;
      360 < $ma$$2$$ && ($ma$$2$$ -= 360);
      0 > $ma$$2$$ && ($ma$$2$$ += 360);
      var $labelPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$2$$, $pie$$8$$.$getCenter$().x, $pie$$8$$.$getCenter$().y, $pie$$8$$.$_radiusX$ * D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $pie$$8$$.$_radiusY$ * D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$), $tmDimPt$$1$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$8$$, $labelPosition$$4_s_label$$, 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? $labelPt$$.x - $frame$$3$$.x : $frame$$3$$.x + $frame$$3$$.$w$ - $labelPt$$.x, D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$);
      165 > $ma$$2$$ && 15 < $ma$$2$$ ? $labelPt$$.y -= 1 * $tmDimPt$$1$$.y : 15 > $ma$$2$$ || 345 < $ma$$2$$ ? ($labelPt$$.y -= 0.5 * $tmDimPt$$1$$.y, $labelPt$$.x += 0.2 * $tmDimPt$$1$$.y) : 165 < $ma$$2$$ && 195 > $ma$$2$$ && ($labelPt$$.y -= 0.5 * $tmDimPt$$1$$.y, $labelPt$$.x -= 0.2 * $tmDimPt$$1$$.y);
      var $pa$$2_tilt$$3$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma$$2$$, $pie$$8$$.getDepth());
      $labelPt$$.y += $pa$$2_tilt$$3$$;
      1 == $slices$$7$$.length && ($labelPt$$.x -= $tmDimPt$$1$$.x / 2);
      $labelPt$$.y < $frame$$3$$.y || $labelPt$$.y + $tmDimPt$$1$$.y > $frame$$3$$.y + $frame$$3$$.$h$ || (90 <= $ma$$2$$ && 270 > $ma$$2$$ ? ($labelPosition$$4_s_label$$.$alignRight$(), $pa$$2_tilt$$3$$ = $ma$$2$$ - 90, D.$DvtPieLabelUtils$$.$_createLabelInfo$($slice$$17$$, $labelPosition$$4_s_label$$, $ma$$2$$, $pa$$2_tilt$$3$$, $tmDimPt$$1$$, $labelPt$$, $leftLabels$$1$$)) : ($pa$$2_tilt$$3$$ = 90 >= $ma$$2$$ ? window.Math.abs(90 - $ma$$2$$) : 180 - ($ma$$2$$ - 270), D.$DvtPieLabelUtils$$.$_createLabelInfo$($slice$$17$$, 
      $labelPosition$$4_s_label$$, $ma$$2$$, $pa$$2_tilt$$3$$, $tmDimPt$$1$$, $labelPt$$, $rightLabels$$1$$)))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
D.$DvtPieLabelUtils$$.$_createLabelInfo$ = function $$DvtPieLabelUtils$$$$_createLabelInfo$$($slice$$18$$, $sliceLabel$$5$$, $ma$$3$$, $pa$$3$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $insertPos$$ = -1, $labelInfo$$6$$, $j$$43$$ = 0;$j$$43$$ < $labelInfoArray$$1$$.length;$j$$43$$++) {
    if($labelInfo$$6$$ = $labelInfoArray$$1$$[$j$$43$$], $labelInfo$$6$$.$getPosition$() > $pa$$3$$) {
      $insertPos$$ = $j$$43$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$6$$ = new D.$DvtPieLabelInfo$$;
  $labelInfo$$6$$.$setPosition$($pa$$3$$);
  $labelInfo$$6$$.$setAngle$($ma$$3$$);
  $labelInfo$$6$$.$setSliceLabel$($sliceLabel$$5$$);
  $labelInfo$$6$$.$_slice$ = $slice$$18$$;
  $labelInfo$$6$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$6$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$6$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$6$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$6$$)
};
D.$DvtPieLabelUtils$$.$_getTextDimension$ = function $$DvtPieLabelUtils$$$$_getTextDimension$$($pieChart$$7$$, $sliceLabel$$6$$, $dimensions$$1_maxWidth$$5$$, $maxLines$$) {
  (0,D.$JSCompiler_StaticMethods_setMaxLines$$)($sliceLabel$$6$$, $maxLines$$);
  D.$DvtTextUtils$$.$fitText$($sliceLabel$$6$$, $dimensions$$1_maxWidth$$5$$, window.Infinity, $pieChart$$7$$);
  $pieChart$$7$$.$addChild$($sliceLabel$$6$$);
  $dimensions$$1_maxWidth$$5$$ = $sliceLabel$$6$$.$getDimensions$();
  $pieChart$$7$$.removeChild($sliceLabel$$6$$);
  return{x:$dimensions$$1_maxWidth$$5$$.$w$, y:$dimensions$$1_maxWidth$$5$$.$h$}
};
D.$DvtChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRenderer$$, D.$DvtObj$$, "DvtChartRenderer");
D.$DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
D.$DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
D.$DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
D.$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$44$$, $container$$25$$, $availSpace$$29$$) {
  D.$DvtChartRenderer$$.$_renderBackground$($chart$$44$$, $container$$25$$, $availSpace$$29$$);
  if(D.$DvtChartDataUtils$$.$hasInvalidData$($chart$$44$$)) {
    D.$DvtChartRenderer$$.$renderEmptyText$($chart$$44$$, $container$$25$$, $availSpace$$29$$)
  }else {
    D.$DvtChartTypeUtils$$.$isOverview$($chart$$44$$) || ($chart$$44$$.$getOptions$()._maxOverflowCoord = $availSpace$$29$$.x + $availSpace$$29$$.$w$, $chart$$44$$.$getOptions$()._minOverflowCoord = $availSpace$$29$$.x);
    D.$DvtChartRenderer$$.$_addOuterGaps$($chart$$44$$, $availSpace$$29$$);
    var $titleSpace$$ = $availSpace$$29$$.$clone$();
    D.$DvtChartRenderer$$.$_renderTitles$($chart$$44$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    D.$DvtChartLegendRenderer$$.$render$($chart$$44$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    var $horizSbDim$$ = D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$44$$, $container$$25$$, $availSpace$$29$$), $vertSbDim$$ = D.$DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$44$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    var $maxHeight$$inline_2178_space$$inline_2176$$ = $availSpace$$29$$.$clone$();
    $chart$$44$$.$_axisSpace$ = $maxHeight$$inline_2178_space$$inline_2176$$;
    var $maxWidth$$inline_2177_space$$inline_2181$$;
    D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$44$$, "x") ? ($maxWidth$$inline_2177_space$$inline_2181$$ = 0.8 * $maxHeight$$inline_2178_space$$inline_2176$$.$w$, $maxHeight$$inline_2178_space$$inline_2176$$ = $maxHeight$$inline_2178_space$$inline_2176$$.$h$ - 5 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$44$$, "x")) : D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$44$$, "y") ? ($maxWidth$$inline_2177_space$$inline_2181$$ = $maxHeight$$inline_2178_space$$inline_2176$$.$w$, $maxHeight$$inline_2178_space$$inline_2176$$ = 
    $maxHeight$$inline_2178_space$$inline_2176$$.$h$ - D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$44$$, "y")) : ($maxWidth$$inline_2177_space$$inline_2181$$ = $maxHeight$$inline_2178_space$$inline_2176$$.$w$, $maxHeight$$inline_2178_space$$inline_2176$$ = $maxHeight$$inline_2178_space$$inline_2176$$.$h$);
    $chart$$44$$.$_radius$ = window.Math.min($maxWidth$$inline_2177_space$$inline_2181$$, $maxHeight$$inline_2178_space$$inline_2176$$) / 2;
    D.$DvtChartAxisRenderer$$.$render$($chart$$44$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    D.$DvtChartRenderer$$.$_positionLegend$($chart$$44$$.$legend$, $availSpace$$29$$);
    $maxWidth$$inline_2177_space$$inline_2181$$ = $availSpace$$29$$.$clone$();
    $chart$$44$$.$_plotAreaSpace$ = $maxWidth$$inline_2177_space$$inline_2181$$;
    D.$DvtChartRenderer$$.$_setEventHandlers$($chart$$44$$);
    D.$DvtChartRenderer$$.$_renderScrollbars$($chart$$44$$, $horizSbDim$$, $vertSbDim$$);
    D.$DvtChartRenderer$$.$_updateTitles$($chart$$44$$, $container$$25$$, $titleSpace$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$44$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$44$$) && $container$$25$$.$addChild$($chart$$44$$.$yAxis$);
    D.$DvtChartRenderer$$.$_renderDragButtons$($chart$$44$$)
  }
};
D.$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$45$$) {
  var $options$$39$$ = $chart$$45$$.$getOptions$(), $em$$1$$ = $chart$$45$$.$__getEventManager$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$45$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$45$$)) {
    var $chartBounds$$ = new D.$DvtRectangle$$(0, 0, $chart$$45$$.getWidth(), $chart$$45$$.getHeight()), $plotAreaBounds$$2$$ = $chart$$45$$.$_plotAreaSpace$, $axisBounds$$1_vertAxisBounds$$ = $chart$$45$$.$_axisSpace$, $horizAxisBounds$$ = new D.$DvtRectangle$$($plotAreaBounds$$2$$.x, $axisBounds$$1_vertAxisBounds$$.y, $plotAreaBounds$$2$$.$w$, $axisBounds$$1_vertAxisBounds$$.$h$), $axisBounds$$1_vertAxisBounds$$ = new D.$DvtRectangle$$($axisBounds$$1_vertAxisBounds$$.x, $plotAreaBounds$$2$$.y, 
    $axisBounds$$1_vertAxisBounds$$.$w$, $plotAreaBounds$$2$$.$h$), $marqueeFill$$ = new D.$DvtSolidFill$$($options$$39$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new D.$DvtSolidStroke$$($options$$39$$.styleDefaults.marqueeBorderColor), $marqueeHandler_panZoomHandler_zoomRate$$;
    if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$45$$)) {
      $marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartEventUtils$$.$isDelayedScroll$($chart$$45$$) ? D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$;
      $marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtPanZoomHandler$$($chart$$45$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeHandler_panZoomHandler_zoomRate$$);
      var $panUpCursor$$inline_2184$$ = $options$$39$$._resources.panCursorUp, $panDownCursor$$inline_2185$$ = $options$$39$$._resources.panCursorDown;
      (0,D.$DvtAgent$isPlatformIE$$)() || ($panUpCursor$$inline_2184$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panUpCursor$ = "url(" + $panUpCursor$$inline_2184$$ + ") 8 8, auto"), $panDownCursor$$inline_2185$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panDownCursor$ = "url(" + $panDownCursor$$inline_2185$$ + ") 8 8, auto"));
      $em$$1$$.$_panZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$;
      D.$DvtChartEventUtils$$.$isZoomable$($chart$$45$$) && ($marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$45$$) ? new D.$DvtMarqueeHandler$$($chart$$45$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_NULL$$, $axisBounds$$1_vertAxisBounds$$) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$45$$) ? new D.$DvtMarqueeHandler$$($chart$$45$$, $plotAreaBounds$$2$$, 
      $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $horizAxisBounds$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtMarqueeHandler$$($chart$$45$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds$$1_vertAxisBounds$$), $em$$1$$.$_marqueeZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
    }
    "multiple" == $options$$39$$.selectionMode && ($marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtMarqueeHandler$$($chart$$45$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds$$1_vertAxisBounds$$), $em$$1$$.$_marqueeSelectHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
  }
};
D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$46$$, $container$$26$$) {
  if(!D.$DvtChartDataUtils$$.$hasInvalidData$($chart$$46$$)) {
    var $availSpace$$30$$ = $chart$$46$$.$_axisSpace$.$clone$(), $selectionHandler$$1$$ = $chart$$46$$.$getSelectionHandler$();
    if($selectionHandler$$1$$) {
      var $selectedIds$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($selectionHandler$$1$$)
    }
    (0,D.$JSCompiler_StaticMethods_hideHoverFeedback$$)($chart$$46$$.$EventManager$);
    $chart$$46$$.$Peers$ = [];
    $chart$$46$$.$_container$.removeChild($chart$$46$$.$xAxis$);
    $chart$$46$$.$_container$.removeChild($chart$$46$$.$yAxis$);
    $chart$$46$$.$_container$.removeChild($chart$$46$$.$y2Axis$);
    $chart$$46$$.$_plotArea$ && $chart$$46$$.$_plotArea$ == $chart$$46$$.$_panZoomTarget$ ? $chart$$46$$.$_plotArea$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : $chart$$46$$.$_container$.removeChild($chart$$46$$.$_plotArea$);
    $chart$$46$$.$_plotArea$ = D.$JSCompiler_alias_NULL$$;
    $chart$$46$$.$Cache$ = {};
    D.$DvtChartAxisRenderer$$.$render$($chart$$46$$, $container$$26$$, $availSpace$$30$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$30$$);
    var $space$$inline_2199$$ = $availSpace$$30$$.$clone$();
    $chart$$46$$.$_plotAreaSpace$ = $space$$inline_2199$$;
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$46$$, $container$$26$$, $availSpace$$30$$);
    $selectionHandler$$1$$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($selectionHandler$$1$$, $selectedIds$$, (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$46$$));
    (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($chart$$46$$.$__getEventManager$());
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$46$$);
    $chart$$46$$.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$46$$))
  }
};
D.$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$47$$, $container$$27$$, $availSpace$$31_rect$$1$$) {
  $availSpace$$31_rect$$1$$ = new D.$DvtRect$$($chart$$47$$.$getCtx$(), $availSpace$$31_rect$$1$$.x, $availSpace$$31_rect$$1$$.y, $availSpace$$31_rect$$1$$.$w$, $availSpace$$31_rect$$1$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$31_rect$$1$$);
  $container$$27$$.$addChild$($availSpace$$31_rect$$1$$);
  $chart$$47$$.$__getEventManager$().$associate$($availSpace$$31_rect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$BACKGROUND$)))
};
D.$DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($chart$$48$$, $availSpace$$32$$) {
  var $options$$40$$ = $chart$$48$$.$getOptions$(), $gapWidth$$ = window.Math.ceil($options$$40$$.layout.outerGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$48$$)), $gapHeight$$ = (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$48$$, $options$$40$$.layout.outerGapHeight);
  if("none" == $options$$40$$.styleDefaults.padding || D.$DvtChartTypeUtils$$.$isStandalonePlotArea$($chart$$48$$) || D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$48$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$48$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$48$$)) {
    $gapWidth$$ = window.Math.min($gapWidth$$, 1), $gapHeight$$ = window.Math.min($gapHeight$$, 1)
  }
  $availSpace$$32$$.x += $gapWidth$$;
  $availSpace$$32$$.$w$ -= 2 * $gapWidth$$;
  $availSpace$$32$$.y += $gapHeight$$;
  $availSpace$$32$$.$h$ -= 2 * $gapHeight$$
};
D.$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$49$$, $container$$28_footnoteObj$$, $availSpace$$33$$) {
  var $options$$41$$ = $chart$$49$$.$getOptions$();
  if($options$$41$$.title.text) {
    var $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$49$$.$__getEventManager$(), $container$$28_footnoteObj$$, $options$$41$$.title.text, $options$$41$$.title.style, $availSpace$$33$$.x, $availSpace$$33$$.y, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$TITLE$)), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $footnoteDims_titleDims$$, $titleAlign$$ = 
    $options$$41$$.title.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$41$$.title.hAlign : $options$$41$$.title.halign, $alignTitlesToPlotArea$$ = "plotArea" == $titleAlign$$.substring(0, 8);
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ ? ($footnoteDims_titleDims$$ = $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = $footnoteDims_titleDims$$.$h$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setAriaProperty$("hidden", D.$JSCompiler_alias_NULL$$)) : ($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = 0, $footnoteDims_titleDims$$ = new D.$DvtRectangle$$(0, 
    0, 0, 0));
    if($options$$41$$.subtitle.text) {
      var $subtitleObj$$ = new D.$DvtOutputText$$($chart$$49$$.$getCtx$(), $options$$41$$.subtitle.text, $availSpace$$33$$.x, $availSpace$$33$$.y);
      if($subtitleObj$$) {
        $subtitleObj$$.$setCSSStyle$($options$$41$$.subtitle.style);
        $container$$28_footnoteObj$$.$addChild$($subtitleObj$$);
        var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = window.Math.ceil($options$$41$$.layout.titleSubtitleGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$49$$)), $titleSpace$$1$$ = $footnoteDims_titleDims$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
        $titleSpace$$1$$ > $availSpace$$33$$.$w$ || $alignTitlesToPlotArea$$ ? ($titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$49$$, $options$$41$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$33$$.y + $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), D.$DvtTextUtils$$.$fitText$($subtitleObj$$, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$, $container$$28_footnoteObj$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
        $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$49$$.$getCtx$()) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$33$$.$w$ - $subtitleDims$$.$w$), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$33$$.$w$ - $footnoteDims_titleDims$$.$w$)))) : ($subtitleObj$$.$setY$($footnoteDims_titleDims$$.$h$ - 
        $subtitleDims$$.$h$ + $availSpace$$33$$.y), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && ((0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, $titleAlign$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$1$$), (0,D.$DvtAgent$isRightToLeft$$)($chart$$49$$.$getCtx$()) ? ($subtitleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + 
        $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : $subtitleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $titleSpace$$1$$ - $subtitleDims$$.$w$)));
        $subtitleObj$$.$setAriaProperty$("hidden", D.$JSCompiler_alias_NULL$$);
        $chart$$49$$.$__getEventManager$().$associate$($subtitleObj$$, new D.$DvtSimpleObjPeer$$($subtitleObj$$.$getUntruncatedTextString$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$SUBTITLE$)))
      }
    }else {
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, $titleAlign$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $footnoteDims_titleDims$$.$w$)
    }
    $alignTitlesToPlotArea$$ && ($chart$$49$$.$Cache$.title = $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $chart$$49$$.$Cache$.subtitle = $subtitleObj$$);
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$41$$.titleSeparator.rendered ? $options$$41$$.layout.titleSeparatorGap : $options$$41$$.layout.titlePlotAreaGap;
    $availSpace$$33$$.y += $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$49$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$33$$.$h$ -= $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$49$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$41$$.titleSeparator.rendered && ($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = new D.$DvtLine$$($chart$$49$$.$getCtx$(), $availSpace$$33$$.x, $availSpace$$33$$.y, $availSpace$$33$$.x + $availSpace$$33$$.$w$, $availSpace$$33$$.y), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = new D.$DvtLine$$($chart$$49$$.$getCtx$(), $availSpace$$33$$.x, $availSpace$$33$$.y + 1, $availSpace$$33$$.x + $availSpace$$33$$.$w$, $availSpace$$33$$.y + 1), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$41$$.titleSeparator.upperColor), 
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$41$$.titleSeparator.lowerColor), $container$$28_footnoteObj$$.$addChild$($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$), $container$$28_footnoteObj$$.$addChild$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = 2 + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$49$$, $options$$41$$.layout.titlePlotAreaGap), $availSpace$$33$$.y += 
    $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $availSpace$$33$$.$h$ -= $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$)
  }
  $options$$41$$.footnote.text && ($container$$28_footnoteObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$49$$.$__getEventManager$(), $container$$28_footnoteObj$$, $options$$41$$.footnote.text, $options$$41$$.footnote.style, $availSpace$$33$$.x, 0, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$FOOTNOTE$)), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = $options$$41$$.footnote.hAlign != D.$JSCompiler_alias_NULL$$ ? 
  $options$$41$$.footnote.hAlign : $options$$41$$.footnote.halign, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = "plotArea" == $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$.substring(0, 8), $container$$28_footnoteObj$$ && ($footnoteDims_titleDims$$ = $container$$28_footnoteObj$$.$getDimensions$(), $container$$28_footnoteObj$$.$setY$($availSpace$$33$$.y + $availSpace$$33$$.$h$ - $footnoteDims_titleDims$$.$h$), $availSpace$$33$$.$h$ -= $footnoteDims_titleDims$$.$h$ + 
  (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$49$$, $options$$41$$.layout.footnoteGap), (0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $container$$28_footnoteObj$$, $footnoteDims_titleDims$$.$w$), $container$$28_footnoteObj$$.$setAriaProperty$("hidden", D.$JSCompiler_alias_NULL$$)), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && ($chart$$49$$.$Cache$.footnote = $container$$28_footnoteObj$$))
};
D.$DvtChartRenderer$$.$_updateTitles$ = function $$DvtChartRenderer$$$$_updateTitles$$($chart$$50_footnoteObj$$1$$, $container$$29$$, $titleSpace$$2$$, $availSpace$$34_subtitleObj$$1$$) {
  var $options$$42_updateFootnote$$ = $chart$$50_footnoteObj$$1$$.$getOptions$(), $footnoteDims$$1_titleAlign$$1$$ = $options$$42_updateFootnote$$.title.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$42_updateFootnote$$.title.hAlign : $options$$42_updateFootnote$$.title.halign, $footnoteAlign$$1$$ = $options$$42_updateFootnote$$.footnote.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$42_updateFootnote$$.footnote.hAlign : $options$$42_updateFootnote$$.footnote.halign, $subtitleDims$$1_titleObj$$1_updateTitle$$ = 
  $options$$42_updateFootnote$$.title.text && "plotArea" == $footnoteDims$$1_titleAlign$$1$$.substring(0, 8), $options$$42_updateFootnote$$ = $options$$42_updateFootnote$$.footnote.text && "plotArea" == $footnoteAlign$$1$$.substring(0, 8);
  $titleSpace$$2$$.x = $availSpace$$34_subtitleObj$$1$$.x;
  $titleSpace$$2$$.$w$ = $availSpace$$34_subtitleObj$$1$$.$w$;
  if($subtitleDims$$1_titleObj$$1_updateTitle$$) {
    $subtitleDims$$1_titleObj$$1_updateTitle$$ = $chart$$50_footnoteObj$$1$$.$Cache$.title;
    $availSpace$$34_subtitleObj$$1$$ = $chart$$50_footnoteObj$$1$$.$Cache$.subtitle;
    var $titleDims$$1$$ = $subtitleDims$$1_titleObj$$1_updateTitle$$.$getDimensions$();
    D.$DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteDims$$1_titleAlign$$1$$, $subtitleDims$$1_titleObj$$1_updateTitle$$, $titleDims$$1$$.$w$);
    $availSpace$$34_subtitleObj$$1$$ && ($subtitleDims$$1_titleObj$$1_updateTitle$$ = $availSpace$$34_subtitleObj$$1$$.$getDimensions$(), D.$DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteDims$$1_titleAlign$$1$$, $availSpace$$34_subtitleObj$$1$$, $subtitleDims$$1_titleObj$$1_updateTitle$$.$w$))
  }
  $options$$42_updateFootnote$$ && ($chart$$50_footnoteObj$$1$$ = $chart$$50_footnoteObj$$1$$.$Cache$.footnote, $footnoteDims$$1_titleAlign$$1$$ = $chart$$50_footnoteObj$$1$$.$getDimensions$(), D.$DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteAlign$$1$$, $chart$$50_footnoteObj$$1$$, $footnoteDims$$1_titleAlign$$1$$.$w$))
};
D.$DvtChartRenderer$$.$_alignTextToPlotArea$ = function $$DvtChartRenderer$$$$_alignTextToPlotArea$$($container$$30$$, $availSpace$$35$$, $halign$$, $text$$44$$, $width$$35$$) {
  D.$DvtTextUtils$$.$fitText$($text$$44$$, $availSpace$$35$$.$w$, $availSpace$$35$$.$h$, $container$$30$$) && ("plotAreaStart" == $halign$$ ? (0,D.$DvtLayoutUtils$align$$)($availSpace$$35$$, "start", $text$$44$$, $width$$35$$) : "plotAreaCenter" == $halign$$ ? (0,D.$DvtLayoutUtils$align$$)($availSpace$$35$$, "center", $text$$44$$, $width$$35$$) : "plotAreaEnd" == $halign$$ && (0,D.$DvtLayoutUtils$align$$)($availSpace$$35$$, "end", $text$$44$$, $width$$35$$))
};
D.$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$51$$, $container$$31$$, $availSpace$$36$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$51$$)) {
    var $pieChart_plotArea$$1$$ = new D.$DvtContainer$$($chart$$51$$.$getCtx$());
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($pieChart_plotArea$$1$$, $availSpace$$36$$.x, $availSpace$$36$$.y);
    $container$$31$$.$addChild$($pieChart_plotArea$$1$$);
    $chart$$51$$.$_plotArea$ = $pieChart_plotArea$$1$$;
    D.$DvtPlotAreaRenderer$$.$render$($chart$$51$$, $pieChart_plotArea$$1$$, new D.$DvtRectangle$$(0, 0, $availSpace$$36$$.$w$, $availSpace$$36$$.$h$))
  }else {
    D.$DvtChartTypeUtils$$.$isPie$($chart$$51$$) ? ($pieChart_plotArea$$1$$ = new D.$DvtPieChart$$($chart$$51$$, $availSpace$$36$$), 0 < $pieChart_plotArea$$1$$.$_slices$.length ? ($container$$31$$.$addChild$($pieChart_plotArea$$1$$), $chart$$51$$.$_plotArea$ = $pieChart_plotArea$$1$$, $pieChart_plotArea$$1$$.$render$()) : D.$DvtChartRenderer$$.$renderEmptyText$($chart$$51$$, $container$$31$$, $availSpace$$36$$)) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$51$$) && D.$DvtFunnelRenderer$$.$render$($chart$$51$$, 
    $container$$31$$, $availSpace$$36$$)
  }
  $availSpace$$36$$.$w$ = 0;
  $availSpace$$36$$.$h$ = 0
};
D.$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$52$$, $container$$32$$, $availSpace$$37$$) {
  var $options$$43$$ = $chart$$52$$.$getOptions$();
  if(D.$DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$52$$) && D.$DvtChartDataUtils$$.$hasData$($chart$$52$$)) {
    var $emptyTextStr$$ = (0,D.$DvtBundle$getTranslation$$)($options$$43$$, "labelInvalidData", "DvtUtilBundle", "INVALID_DATA")
  }else {
    ($emptyTextStr$$ = $options$$43$$.emptyText) || ($emptyTextStr$$ = (0,D.$DvtBundle$getTranslation$$)($options$$43$$, "labelNoData", "DvtUtilBundle", "NO_DATA"))
  }
  D.$DvtTextUtils$$.$renderEmptyText$($container$$32$$, $emptyTextStr$$, new D.$DvtRectangle$$($availSpace$$37$$.x, $availSpace$$37$$.y, $availSpace$$37$$.$w$, $availSpace$$37$$.$h$), $chart$$52$$.$__getEventManager$(), $options$$43$$.title.style)
};
D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$53$$, $container$$33$$, $availSpace$$38$$) {
  var $width$$36$$ = $availSpace$$38$$.$w$, $height$$39$$ = 0;
  D.$DvtChartEventUtils$$.$isScrollable$($chart$$53$$) && D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$53$$) ? D.$DvtChartStyleUtils$$.$isOverviewRendered$($chart$$53$$) ? ($height$$39$$ = window.Math.min(D.$DvtChartStyleUtils$$.$getOverviewHeight$($chart$$53$$), $availSpace$$38$$.$h$), 0 < $height$$39$$ && ($chart$$53$$.$overview$ = new D.$DvtChartOverview$$($chart$$53$$), $container$$33$$.$addChild$($chart$$53$$.$overview$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$38$$, "bottom", 
  $chart$$53$$.$overview$, $width$$36$$, $height$$39$$, 10))) : ($height$$39$$ = $chart$$53$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$53$$.$xScrollbar$ = new D.$DvtSimpleScrollbar$$($chart$$53$$.$getCtx$(), $chart$$53$$.$processEvent$, $chart$$53$$), $container$$33$$.$addChild$($chart$$53$$.$xScrollbar$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$38$$, "bottom", $chart$$53$$.$xScrollbar$, $width$$36$$, $height$$39$$, 8), $chart$$53$$.$overview$ = D.$JSCompiler_alias_NULL$$) : $chart$$53$$.$overview$ = 
  D.$JSCompiler_alias_NULL$$;
  return new D.$DvtDimension$$($width$$36$$, $height$$39$$)
};
D.$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$54$$, $container$$34$$, $availSpace$$39$$) {
  var $width$$37$$ = 0, $height$$40$$ = $availSpace$$39$$.$h$;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$54$$) && D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$54$$)) {
    var $width$$37$$ = $chart$$54$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$ = new D.$DvtSimpleScrollbar$$($chart$$54$$.$getCtx$(), $chart$$54$$.$processEvent$, $chart$$54$$);
    $container$$34$$.$addChild$($scrollbar$$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$39$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$54$$.$getCtx$()) ? "right" : "left", $scrollbar$$, $width$$37$$, $height$$40$$, 8);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$54$$) ? $chart$$54$$.$xScrollbar$ = $scrollbar$$ : $chart$$54$$.$yScrollbar$ = $scrollbar$$
  }
  return new D.$DvtDimension$$($width$$37$$, $height$$40$$)
};
D.$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$55$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$44$$ = $chart$$55$$.$getOptions$(), $sbOptions$$ = {color:$options$$44$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$44$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$55$$.$_plotAreaSpace$;
  $chart$$55$$.$xScrollbar$ && ($sbOptions$$.min = $chart$$55$$.$xAxis$.$actualToLinear$($chart$$55$$.$xAxis$.$Info$.$GlobalMin$), $sbOptions$$.max = $chart$$55$$.$xAxis$.$actualToLinear$($chart$$55$$.$xAxis$.$Info$.$GlobalMax$), D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$55$$) ? ($sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_FALSE$$, $chart$$55$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$55$$.$xScrollbar$.$render$($sbOptions$$, 
  $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)) : ($sbOptions$$.isHorizontal = D.$JSCompiler_alias_TRUE$$, $sbOptions$$.isReversed = (0,D.$DvtAgent$isRightToLeft$$)($chart$$55$$.$getCtx$()), $chart$$55$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x), $chart$$55$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$)), $chart$$55$$.$xScrollbar$.$setViewportRange$((0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$55$$.$xAxis$), (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$55$$.$xAxis$)));
  $chart$$55$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$55$$.$yAxis$.$actualToLinear$($chart$$55$$.$yAxis$.$Info$.$GlobalMin$), $sbOptions$$.max = $chart$$55$$.$yAxis$.$actualToLinear$($chart$$55$$.$yAxis$.$Info$.$GlobalMax$), $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_TRUE$$, $chart$$55$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$55$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), 
  $chart$$55$$.$yScrollbar$.$setViewportRange$((0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$55$$.$yAxis$), (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$55$$.$yAxis$)));
  $chart$$55$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$55$$.$xAxis$.$actualToLinear$($chart$$55$$.$xAxis$.$Info$.$GlobalMin$), endTime:$chart$$55$$.$xAxis$.$actualToLinear$($chart$$55$$.$xAxis$.$Info$.$GlobalMax$), viewportStartTime:(0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$55$$.$xAxis$), viewportEndTime:(0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$55$$.$xAxis$), minimumWindowSize:$chart$$55$$.$xAxis$.$Info$.$getMinimumExtent$(), chart:D.$DvtJSONUtils$$.$clone$($options$$44$$)}, 
  D.$DvtChartEventUtils$$.$isZoomable$($chart$$55$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $ovOptions_vertScrollbarDim$$.chart._minOverflowCoord = $options$$44$$._minOverflowCoord - $plotAreaDim$$.x, $ovOptions_vertScrollbarDim$$.chart._maxOverflowCoord = $options$$44$$._maxOverflowCoord - $plotAreaDim$$.x, $chart$$55$$.$overview$.$setTranslateX$($plotAreaDim$$.x), $chart$$55$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$55$$.$overview$.$setViewportRange$((0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$55$$.$xAxis$), 
  (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$55$$.$xAxis$)))
};
D.$DvtChartRenderer$$.$_positionLegend$ = function $$DvtChartRenderer$$$$_positionLegend$$($legend$$2$$, $availSpace$$40$$) {
  if($legend$$2$$) {
    var $dims$$6$$ = $legend$$2$$.$getDimensions$(), $orientation$$ = $legend$$2$$.$getOptions$().orientation;
    "vertical" == $orientation$$ && $dims$$6$$.$h$ <= $availSpace$$40$$.$h$ ? $legend$$2$$.$setTranslateY$(window.Math.round($availSpace$$40$$.y + $availSpace$$40$$.$h$ / 2 - $dims$$6$$.$h$ / 2)) : "horizontal" == $orientation$$ && $dims$$6$$.$w$ <= $availSpace$$40$$.$w$ && $legend$$2$$.$setTranslateX$(window.Math.round($availSpace$$40$$.x + $availSpace$$40$$.$w$ / 2 - $dims$$6$$.$w$ / 2))
  }
};
D.$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$56$$) {
  var $options$$45$$ = $chart$$56$$.$getOptions$(), $em$$2$$ = $chart$$56$$.$__getEventManager$(), $dragMode$$1_isTouch$$ = $options$$45$$.dragMode;
  if("user" != $dragMode$$1_isTouch$$) {
    "pan" == $dragMode$$1_isTouch$$ ? (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "pan") : "zoom" == $dragMode$$1_isTouch$$ ? (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "zoom") : "select" == $dragMode$$1_isTouch$$ ? (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "select") : (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "off")
  }else {
    if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$56$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$56$$)) {
      var $dragMode$$1_isTouch$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $isScrollable$$ = D.$DvtChartEventUtils$$.$isScrollable$($chart$$56$$);
      $chart$$56$$.$dragButtons$ = new D.$DvtContainer$$($chart$$56$$.$getCtx$());
      var $resources$$3$$ = $options$$45$$._resources, $position$$12_tooltip$$5$$;
      if("multiple" == $options$$45$$.selectionMode && ($dragMode$$1_isTouch$$ || $isScrollable$$)) {
        $position$$12_tooltip$$5$$ = $isScrollable$$ && ($dragMode$$1_isTouch$$ || D.$DvtChartEventUtils$$.$isZoomable$($chart$$56$$)) ? "end" : "solo", $em$$2$$.$selectButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$56$$, $chart$$56$$.$dragButtons$, $resources$$3$$.selectUp, $resources$$3$$.selectDown, $em$$2$$.$onSelectButtonClick$, $em$$2$$, $position$$12_tooltip$$5$$), $position$$12_tooltip$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$45$$, "tooltipSelect", "DvtChartBundle", 
        "MARQUEE_SELECT"), $em$$2$$.$selectButton$.$setAriaRole$("button"), $em$$2$$.$selectButton$.$setAriaProperty$("label", $position$$12_tooltip$$5$$), $em$$2$$.$associate$($em$$2$$.$selectButton$, new D.$DvtSimpleObjPeer$$($position$$12_tooltip$$5$$))
      }
      $isScrollable$$ && ($position$$12_tooltip$$5$$ = $em$$2$$.$selectButton$ == D.$JSCompiler_alias_NULL$$ ? "solo" : "start", $dragMode$$1_isTouch$$ ? ($em$$2$$.$panButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$56$$, $chart$$56$$.$dragButtons$, $resources$$3$$.panUp, $resources$$3$$.panDown, $em$$2$$.$onPanButtonClick$, $em$$2$$, $position$$12_tooltip$$5$$), $position$$12_tooltip$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$45$$, "tooltipPan", "DvtChartBundle", "PAN"), $em$$2$$.$panButton$.$setAriaRole$("button"), 
      $em$$2$$.$panButton$.$setAriaProperty$("label", $position$$12_tooltip$$5$$), $em$$2$$.$associate$($em$$2$$.$panButton$, new D.$DvtSimpleObjPeer$$($position$$12_tooltip$$5$$))) : D.$DvtChartEventUtils$$.$isZoomable$($chart$$56$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$56$$) && ($em$$2$$.$zoomButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$56$$, $chart$$56$$.$dragButtons$, $resources$$3$$.zoomUp, $resources$$3$$.zoomDown, $em$$2$$.$onZoomButtonClick$, $em$$2$$, $position$$12_tooltip$$5$$), 
      $position$$12_tooltip$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$45$$, "tooltipZoom", "DvtChartBundle", "MARQUEE_ZOOM"), $em$$2$$.$associate$($em$$2$$.$zoomButton$, new D.$DvtSimpleObjPeer$$($position$$12_tooltip$$5$$))));
      D.$DvtChartRenderer$$.$positionDragButtons$($chart$$56$$);
      (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, D.$JSCompiler_alias_NULL$$);
      0 < $chart$$56$$.$dragButtons$.$getNumChildren$() && ($chart$$56$$.$addChild$($chart$$56$$.$dragButtons$), $dragMode$$1_isTouch$$ ? $isScrollable$$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($em$$2$$.$panButton$, D.$JSCompiler_alias_TRUE$$), $em$$2$$.$onPanButtonClick$()) : $chart$$56$$.$dragButtons$ && $chart$$56$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $chart$$56$$.$dragButtons$.setCursor("default"))
    }
  }
};
D.$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$57_transX$$, $button$$4$$, $availSpace$$41$$) {
  (0,D.$DvtAgent$isRightToLeft$$)($chart$$57_transX$$.$getCtx$()) ? ($chart$$57_transX$$ = $availSpace$$41$$.x + D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$41$$.x += D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$57_transX$$ = $availSpace$$41$$.x + $availSpace$$41$$.$w$ - D.$DvtChartRenderer$$.$_BUTTON_SIZE$ - D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$41$$.$w$ -= D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$4$$, $chart$$57_transX$$, $availSpace$$41$$.y + D.$DvtChartRenderer$$.$_BUTTON_PADDING$)
};
D.$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$58$$) {
  var $availSpace$$42$$ = $chart$$58$$.$_plotAreaSpace$.$clone$();
  $availSpace$$42$$.x += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$42$$.$w$ -= 2 * D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$42$$.y += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$3$$ = $chart$$58$$.$__getEventManager$();
  $em$$3$$.$selectButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$58$$, $em$$3$$.$selectButton$, $availSpace$$42$$);
  $em$$3$$.$panButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$58$$, $em$$3$$.$panButton$, $availSpace$$42$$);
  $em$$3$$.$zoomButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$58$$, $em$$3$$.$zoomButton$, $availSpace$$42$$)
};
D.$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$34$$, $position$$13$$) {
  var $background_blcr_cmd$$1$$ = 2, $trcr$$ = 2, $isR2L$$3_pos$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$34$$);
  "start" == $position$$13$$ ? $isR2L$$3_pos$$9$$ ? $background_blcr_cmd$$1$$ = 0 : $trcr$$ = 0 : "end" == $position$$13$$ && ($isR2L$$3_pos$$9$$ ? $trcr$$ = 0 : $background_blcr_cmd$$1$$ = 0);
  var $isR2L$$3_pos$$9$$ = -D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$16$$ = D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $background_blcr_cmd$$1$$ = D.$DvtPathUtils$$.$roundedRectangle$($isR2L$$3_pos$$9$$, $isR2L$$3_pos$$9$$, $size$$16$$, $size$$16$$, $background_blcr_cmd$$1$$, $trcr$$, $trcr$$, $background_blcr_cmd$$1$$), $background_blcr_cmd$$1$$ = new D.$DvtPath$$($context$$34$$, $background_blcr_cmd$$1$$);
  1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? ($background_blcr_cmd$$1$$.$setSolidStroke$("#D8DEE3", 1, 1), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background_blcr_cmd$$1$$)) : $background_blcr_cmd$$1$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background_blcr_cmd$$1$$
};
D.$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$59_context$$35$$, $container$$36_isR2L$$4$$, $overDownState_upSrc$$, $button$$5_downSrc$$, $callback$$41_enabled$$inline_2223_hitPadding$$, $callbackObj$$6$$, $hitArea_position$$14$$) {
  $chart$$59_context$$35$$ = $chart$$59_context$$35$$.$getCtx$();
  var $upState$$2$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$59_context$$35$$, $hitArea_position$$14$$);
  $upState$$2$$.$setSolidFill$("#FFFFFF", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$2$$.$addChild$(new D.$DvtImage$$($chart$$59_context$$35$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$2$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$59_context$$35$$, $hitArea_position$$14$$);
  $overState$$2$$.$setSolidFill$("#E2E3E4", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$2$$.$addChild$(new D.$DvtImage$$($chart$$59_context$$35$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$2$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$59_context$$35$$, $hitArea_position$$14$$);
  $downState$$2$$.$setFill$(new D.$DvtLinearGradientFill$$(90, ["#0527CE", "#0586F0"], [D.$DvtChartRenderer$$.$_BUTTON_OPACITY$, D.$DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$2$$.$addChild$(new D.$DvtImage$$($chart$$59_context$$35$$, $button$$5_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState_upSrc$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$59_context$$35$$, $hitArea_position$$14$$);
  $overDownState_upSrc$$.$setSolidFill$("#0586F0", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState_upSrc$$.$addChild$(new D.$DvtImage$$($chart$$59_context$$35$$, $button$$5_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$5_downSrc$$ = new D.$DvtButton$$($chart$$59_context$$35$$, $upState$$2$$, $overState$$2$$, $downState$$2$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $callback$$41_enabled$$inline_2223_hitPadding$$, $callbackObj$$6$$);
  if(!$button$$5_downSrc$$.$overDownState$ || $button$$5_downSrc$$.$overDownState$ == $overDownState_upSrc$$) {
    $callback$$41_enabled$$inline_2223_hitPadding$$ = D.$JSCompiler_alias_FALSE$$, $button$$5_downSrc$$.$overDownState$ && ($callback$$41_enabled$$inline_2223_hitPadding$$ = (0,D.$JSCompiler_StaticMethods__isButtonEnabled$$)($button$$5_downSrc$$.$overDownState$), $button$$5_downSrc$$.removeChild($button$$5_downSrc$$.$overDownState$)), $overDownState_upSrc$$ && $button$$5_downSrc$$.$addChild$($overDownState_upSrc$$), $button$$5_downSrc$$.$overDownState$ = $overDownState_upSrc$$, (0,D.$JSCompiler_StaticMethods__enableButton$$)($button$$5_downSrc$$.$overDownState$, 
    $callback$$41_enabled$$inline_2223_hitPadding$$)
  }
  $button$$5_downSrc$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $container$$36_isR2L$$4$$.$addChild$($button$$5_downSrc$$);
  $button$$5_downSrc$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, function($chart$$59_context$$35$$) {
    $chart$$59_context$$35$$.stopPropagation()
  });
  (0,D.$DvtAgent$isTouchDevice$$)() && ($container$$36_isR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$59_context$$35$$), $callback$$41_enabled$$inline_2223_hitPadding$$ = 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea_position$$14$$ = "solo" == $hitArea_position$$14$$ ? new D.$DvtRect$$($chart$$59_context$$35$$, -$callback$$41_enabled$$inline_2223_hitPadding$$, -$callback$$41_enabled$$inline_2223_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$41_enabled$$inline_2223_hitPadding$$, 
  D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$41_enabled$$inline_2223_hitPadding$$) : "start" == $hitArea_position$$14$$ && !$container$$36_isR2L$$4$$ || "end" == $hitArea_position$$14$$ && $container$$36_isR2L$$4$$ ? new D.$DvtRect$$($chart$$59_context$$35$$, -$callback$$41_enabled$$inline_2223_hitPadding$$, -$callback$$41_enabled$$inline_2223_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$41_enabled$$inline_2223_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  2 * $callback$$41_enabled$$inline_2223_hitPadding$$) : new D.$DvtRect$$($chart$$59_context$$35$$, -0.5 * $callback$$41_enabled$$inline_2223_hitPadding$$, -$callback$$41_enabled$$inline_2223_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$41_enabled$$inline_2223_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$41_enabled$$inline_2223_hitPadding$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea_position$$14$$), $button$$5_downSrc$$.$addChild$($hitArea_position$$14$$));
  return $button$$5_downSrc$$
};
D.$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$43$$) {
  $availSpace$$43$$.x = window.Math.round($availSpace$$43$$.x);
  $availSpace$$43$$.y = window.Math.round($availSpace$$43$$.y);
  $availSpace$$43$$.$w$ = window.Math.round($availSpace$$43$$.$w$);
  $availSpace$$43$$.$h$ = window.Math.round($availSpace$$43$$.$h$)
};
D.$DvtChartRenderer$$.$renderDataCursor$ = function $$DvtChartRenderer$$$$renderDataCursor$$($chart$$60$$) {
  var $dataCursor$$3$$ = D.$JSCompiler_alias_NULL$$, $options$$46$$ = $chart$$60$$.$getOptions$(), $eventManager$$7$$ = $chart$$60$$.$__getEventManager$();
  if(D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$60$$)) {
    var $dataCursor$$3$$ = new D.$DvtDataCursor$$($chart$$60$$.$getCtx$(), $options$$46$$.styleDefaults.dataCursor, D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$60$$)), $behavior$$inline_2226_dataCursorHandler$$ = D.$DvtChartTooltipUtils$$.$getDataCursorBehavior$($chart$$60$$);
    $dataCursor$$3$$.$_behavior$ = $behavior$$inline_2226_dataCursorHandler$$;
    $chart$$60$$.$addChild$($dataCursor$$3$$);
    $behavior$$inline_2226_dataCursorHandler$$ = new D.$DvtDataCursorHandler$$($chart$$60$$, $dataCursor$$3$$);
    $eventManager$$7$$.$_dataCursorHandler$ = $behavior$$inline_2226_dataCursorHandler$$;
    $chart$$60$$.$positionDataCursor$($options$$46$$.dataCursorPosition)
  }else {
    $eventManager$$7$$.$_dataCursorHandler$ = D.$JSCompiler_alias_NULL$$
  }
  return $dataCursor$$3$$
};
D.$DvtChartAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisRenderer$$, D.$DvtObj$$, "DvtChartAxisRenderer");
D.$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$28$$, $container$$18$$, $availSpace$$17$$) {
  D.$DvtChartTypeUtils$$.$hasAxes$($chart$$28$$) && (D.$DvtChartAxisUtils$$.$applyInitialZooming$($chart$$28$$, $availSpace$$17$$), D.$DvtChartTypeUtils$$.$isBubble$($chart$$28$$) && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$28$$, $availSpace$$17$$.$w$, $availSpace$$17$$.$h$), D.$DvtChartTypeUtils$$.$isPolar$($chart$$28$$) ? D.$DvtChartAxisRenderer$$.$_renderPolar$($chart$$28$$, $container$$18$$, $availSpace$$17$$) : D.$DvtChartAxisRenderer$$.$_renderCartesian$($chart$$28$$, $container$$18$$, 
  $availSpace$$17$$))
};
D.$DvtChartAxisRenderer$$.$_renderCartesian$ = function $$DvtChartAxisRenderer$$$$_renderCartesian$$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$) {
  var $bAligned_options$$33$$ = $chart$$29$$.$getOptions$(), $isHoriz$$4$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$29$$), $isSplitDualY$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$29$$), $totalAvailSpace_yAvailSpace$$ = $availSpace$$18$$.$clone$(), $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($chart$$29$$), $isR2L_y2Position$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$29$$);
  D.$DvtChartAxisRenderer$$.$_addAxisGaps$($chart$$29$$, $availSpace$$18$$);
  $isSplitDualY$$ && $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ == $isR2L_y2Position$$ && ($bAligned_options$$33$$.yAxis._skipHighestTick = $isHoriz$$4$$, $bAligned_options$$33$$.y2Axis._skipHighestTick = !$isHoriz$$4$$);
  var $yInfo$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$), $y2Info$$ = D.$DvtChartAxisRenderer$$.$_createY2Axis$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$);
  if(($bAligned_options$$33$$ = !$isSplitDualY$$ && "on" == $bAligned_options$$33$$.y2Axis.alignTickMarks && $bAligned_options$$33$$.y2Axis.step == D.$JSCompiler_alias_NULL$$) && $yInfo$$ && $y2Info$$) {
    D.$DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $isHoriz$$4$$ || ($y2Info$$.$dim$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$29$$, $y2Info$$.axis, $chart$$29$$.$y2Axis$, $y2Info$$.options, "y2", $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$))
  }
  var $yGap$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$29$$, "y"), $y2Gap$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$29$$, "y2");
  $isSplitDualY$$ && $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ == $isR2L_y2Position$$ ? ($isHoriz$$4$$ ? ($maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = window.Math.max($yInfo$$.$dim$.$h$ + $yGap$$, $y2Info$$.$dim$.$h$ + $y2Gap$$), $yInfo$$.$dim$.$h$ = $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $yGap$$, $y2Info$$.$dim$.$h$ = $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $y2Gap$$) : 
  ($maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = window.Math.max($yInfo$$.$dim$.$w$ + $yGap$$, $y2Info$$.$dim$.$w$ + $y2Gap$$), $yInfo$$.$dim$.$w$ = $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $yGap$$, $y2Info$$.$dim$.$w$ = $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $y2Gap$$), D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$.$clone$(), $yInfo$$, $yGap$$)) : D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$, 
  $yInfo$$, $yGap$$);
  D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$, $y2Info$$, $y2Gap$$);
  $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$29$$);
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$29$$) && D.$DvtChartTypeUtils$$.$isBar$($chart$$29$$) && $availSpace$$18$$.$w$ > $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ && ($maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ *= window.Math.floor($availSpace$$18$$.$w$ / $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$), $availSpace$$18$$.x += ($availSpace$$18$$.$w$ - $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$) / 
  2, $availSpace$$18$$.$w$ = $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$);
  $container$$19_xInfo$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$);
  $container$$19_xInfo$$.axis.$render$($container$$19_xInfo$$.options, $container$$19_xInfo$$.$dim$.$w$, $container$$19_xInfo$$.$dim$.$h$);
  D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$, $container$$19_xInfo$$, D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$29$$, "x"));
  $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartStyleUtils$$.$getSplitterPosition$($chart$$29$$);
  $isR2L_y2Position$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$29$$.$getCtx$());
  $totalAvailSpace_yAvailSpace$$ = D.$DvtChartAxisRenderer$$.$_getSplitAvailSpace$($availSpace$$18$$, $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$, $isHoriz$$4$$, $isHoriz$$4$$ && $isR2L_y2Position$$);
  $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartAxisRenderer$$.$_getSplitAvailSpace$($availSpace$$18$$, 1 - $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$, $isHoriz$$4$$, !$isHoriz$$4$$ || !$isR2L_y2Position$$);
  $isHoriz$$4$$ ? ($yInfo$$ && ($yInfo$$.axis.$setTranslateX$($availSpace$$18$$.x), $isSplitDualY$$ ? $yInfo$$.axis.$render$($yInfo$$.options, $totalAvailSpace_yAvailSpace$$.$w$, $yInfo$$.$dim$.$h$, $totalAvailSpace_yAvailSpace$$.x, 0) : $yInfo$$.axis.$render$($yInfo$$.options, $availSpace$$18$$.$w$, $yInfo$$.$dim$.$h$)), $bAligned_options$$33$$ && ($yInfo$$ && $y2Info$$) && D.$DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $y2Info$$ && ($y2Info$$.axis.$setTranslateX$($availSpace$$18$$.x), 
  $isSplitDualY$$ ? $y2Info$$.axis.$render$($y2Info$$.options, $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$.$w$, $y2Info$$.$dim$.$h$, $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$.x, 0) : $y2Info$$.axis.$render$($y2Info$$.options, $availSpace$$18$$.$w$, $y2Info$$.$dim$.$h$)), D.$DvtChartAxisRenderer$$.$_setOverflow$($availSpace$$18$$, $yInfo$$, $container$$19_xInfo$$)) : ($yInfo$$ && ($isSplitDualY$$ ? $yInfo$$.axis.$render$($yInfo$$.options, 
  $yInfo$$.$dim$.$w$, $totalAvailSpace_yAvailSpace$$.$h$, 0, $totalAvailSpace_yAvailSpace$$.y) : $yInfo$$.axis.$render$($yInfo$$.options, $yInfo$$.$dim$.$w$, $availSpace$$18$$.$h$)), $bAligned_options$$33$$ && ($yInfo$$ && $y2Info$$) && D.$DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $y2Info$$ && ($isSplitDualY$$ ? $y2Info$$.axis.$render$($y2Info$$.options, $y2Info$$.$dim$.$w$, $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$.$h$, 0, $maxSize_newWidth$$1_numGroups_splitterPosition_y2AvailSpace_yPosition$$.y) : 
  $y2Info$$.axis.$render$($y2Info$$.options, $y2Info$$.$dim$.$w$, $availSpace$$18$$.$h$)), D.$DvtChartAxisRenderer$$.$_setOverflow$($availSpace$$18$$, $container$$19_xInfo$$, $yInfo$$, $y2Info$$));
  D.$DvtChartAxisRenderer$$.$_storeAxes$($chart$$29$$, $container$$19_xInfo$$, $yInfo$$, $y2Info$$)
};
D.$DvtChartAxisRenderer$$.$_renderPolar$ = function $$DvtChartAxisRenderer$$$$_renderPolar$$($chart$$30$$, $container$$20_yInfo$$1$$, $availSpace$$19$$) {
  var $xInfo$$1$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$30$$, $container$$20_yInfo$$1$$, $availSpace$$19$$, $availSpace$$19$$);
  $xInfo$$1$$.axis.$setTranslateX$($availSpace$$19$$.x);
  $xInfo$$1$$.axis.$setTranslateY$($availSpace$$19$$.y);
  $xInfo$$1$$.axis.$render$($xInfo$$1$$.options, $availSpace$$19$$.$w$, $availSpace$$19$$.$h$);
  $container$$20_yInfo$$1$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$30$$, $container$$20_yInfo$$1$$, $availSpace$$19$$, $availSpace$$19$$);
  $container$$20_yInfo$$1$$.axis.$setTranslateX$($availSpace$$19$$.x);
  $container$$20_yInfo$$1$$.axis.$setTranslateY$($availSpace$$19$$.y);
  $container$$20_yInfo$$1$$.axis.$render$($container$$20_yInfo$$1$$.options, $availSpace$$19$$.$w$, $availSpace$$19$$.$h$);
  D.$DvtChartAxisRenderer$$.$_storeAxes$($chart$$30$$, $xInfo$$1$$, $container$$20_yInfo$$1$$)
};
D.$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$31_preferredSize$$, $container$$21$$, $availSpace$$20$$, $totalAvailSpace$$1$$) {
  var $options$$34$$ = $chart$$31_preferredSize$$.$getOptions$(), $axisOffset_numGroups$$1_position$$9$$ = D.$DvtChartAxisUtils$$.$getXAxisPosition$($chart$$31_preferredSize$$), $axisOptions$$1$$ = D.$DvtJSONUtils$$.$clone$($options$$34$$.xAxis);
  $axisOptions$$1$$.position = $axisOffset_numGroups$$1_position$$9$$;
  $axisOptions$$1$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$31_preferredSize$$);
  $axisOptions$$1$$.groupSeparators = $options$$34$$.styleDefaults.groupSeparators;
  D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$1$$, "x", $chart$$31_preferredSize$$);
  $axisOptions$$1$$.groups = $options$$34$$.groups;
  $axisOptions$$1$$._groupWidthRatios = D.$DvtChartAxisUtils$$.$getGroupWidthRatios$($chart$$31_preferredSize$$);
  $axisOptions$$1$$.timeAxisType = D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$31_preferredSize$$);
  $axisOptions$$1$$._locale = $options$$34$$._locale;
  $axisOptions$$1$$.drilling = $options$$34$$.drilling;
  var $axis$$66_isHoriz$$5$$ = "top" == $axisOffset_numGroups$$1_position$$9$$ || "bottom" == $axisOffset_numGroups$$1_position$$9$$, $isGridShifted$$ = D.$DvtChartAxisUtils$$.$isGridShifted$($chart$$31_preferredSize$$);
  "tangential" == $axisOffset_numGroups$$1_position$$9$$ && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$31_preferredSize$$) ? $isGridShifted$$ ? ($axisOptions$$1$$.startGroupOffset = 0.5, $axisOptions$$1$$.endGroupOffset = 0.5) : $axisOptions$$1$$.endGroupOffset = 1 : ($axisOffset_numGroups$$1_position$$9$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$31_preferredSize$$), $axisOptions$$1$$.startGroupOffset = $axisOffset_numGroups$$1_position$$9$$, $axisOptions$$1$$.endGroupOffset = $axisOffset_numGroups$$1_position$$9$$, 
  D.$DvtChartTypeUtils$$.$hasUncenteredSeries$($chart$$31_preferredSize$$) && ($axisOptions$$1$$.endGroupOffset += 1), !D.$DvtChartEventUtils$$.$isScrollable$($chart$$31_preferredSize$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$31_preferredSize$$) && ($axisOffset_numGroups$$1_position$$9$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$31_preferredSize$$), D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$31_preferredSize$$, "y") && D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$31_preferredSize$$, 
  "y") && ($axisOptions$$1$$[($axis$$66_isHoriz$$5$$ ? "start" : "end") + "GroupOffset"] += 0.04 * $axisOffset_numGroups$$1_position$$9$$), D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$31_preferredSize$$, "y2") && D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$31_preferredSize$$, "y2") && ($axisOptions$$1$$[($axis$$66_isHoriz$$5$$ ? "end" : "start") + "GroupOffset"] += 0.04 * $axisOffset_numGroups$$1_position$$9$$)));
  $axisOptions$$1$$.leftBuffer = $axis$$66_isHoriz$$5$$ ? $availSpace$$20$$.x - $totalAvailSpace$$1$$.x : 0;
  $axisOptions$$1$$.rightBuffer = $axis$$66_isHoriz$$5$$ ? $totalAvailSpace$$1$$.$w$ + $totalAvailSpace$$1$$.x - ($availSpace$$20$$.$w$ + $availSpace$$20$$.x) : 0;
  $axisOptions$$1$$._renderGridAtLabels = !$isGridShifted$$ || D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$31_preferredSize$$);
  $axis$$66_isHoriz$$5$$ = new D.$DvtChartAxis$$($chart$$31_preferredSize$$.$getCtx$(), $chart$$31_preferredSize$$.$processEvent$, $chart$$31_preferredSize$$);
  $container$$21$$.$addChild$($axis$$66_isHoriz$$5$$);
  $chart$$31_preferredSize$$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$31_preferredSize$$, $axis$$66_isHoriz$$5$$, $chart$$31_preferredSize$$.$xAxis$, $axisOptions$$1$$, "x", $availSpace$$20$$, $totalAvailSpace$$1$$);
  $axisOptions$$1$$._minOverflowCoord = $options$$34$$._minOverflowCoord - $availSpace$$20$$.x;
  $axisOptions$$1$$._maxOverflowCoord = $options$$34$$._maxOverflowCoord - $availSpace$$20$$.x;
  return{axis:$axis$$66_isHoriz$$5$$, options:$axisOptions$$1$$, $dim$:$chart$$31_preferredSize$$}
};
D.$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($chart$$32_preferredSize$$1$$, $container$$22$$, $availSpace$$21$$, $totalAvailSpace$$2$$) {
  var $options$$35$$ = $chart$$32_preferredSize$$1$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$32_preferredSize$$1$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $axisOptions$$2$$ = D.$DvtJSONUtils$$.$clone$($options$$35$$.yAxis);
  $axisOptions$$2$$.position = D.$DvtChartAxisUtils$$.$getYAxisPosition$($chart$$32_preferredSize$$1$$);
  $axisOptions$$2$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$32_preferredSize$$1$$);
  D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$2$$, "y", $chart$$32_preferredSize$$1$$);
  D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$2$$, $chart$$32_preferredSize$$1$$);
  var $axis$$67$$ = new D.$DvtChartAxis$$($chart$$32_preferredSize$$1$$.$getCtx$(), $chart$$32_preferredSize$$1$$.$processEvent$, $chart$$32_preferredSize$$1$$);
  $container$$22$$.$addChild$($axis$$67$$);
  $chart$$32_preferredSize$$1$$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$32_preferredSize$$1$$, $axis$$67$$, $chart$$32_preferredSize$$1$$.$yAxis$, $axisOptions$$2$$, "y", $availSpace$$21$$, $totalAvailSpace$$2$$);
  $options$$35$$.yAxis.min = $axisOptions$$2$$.min;
  $options$$35$$.yAxis.max = $axisOptions$$2$$.max;
  return{axis:$axis$$67$$, options:$axisOptions$$2$$, $dim$:$chart$$32_preferredSize$$1$$}
};
D.$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($chart$$33_preferredSize$$2$$, $container$$23$$, $availSpace$$22$$, $totalAvailSpace$$3$$) {
  var $options$$36$$ = $chart$$33_preferredSize$$2$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$33_preferredSize$$2$$)) {
    var $axisOptions$$3$$ = D.$DvtJSONUtils$$.$clone$($options$$36$$.y2Axis);
    $axisOptions$$3$$.position = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$33_preferredSize$$2$$);
    $axisOptions$$3$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$33_preferredSize$$2$$);
    D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$3$$, "y2", $chart$$33_preferredSize$$2$$);
    D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$3$$, $chart$$33_preferredSize$$2$$);
    var $axis$$68$$ = new D.$DvtChartAxis$$($chart$$33_preferredSize$$2$$.$getCtx$(), $chart$$33_preferredSize$$2$$.$processEvent$, $chart$$33_preferredSize$$2$$);
    $container$$23$$.$addChild$($axis$$68$$);
    $chart$$33_preferredSize$$2$$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$33_preferredSize$$2$$, $axis$$68$$, $chart$$33_preferredSize$$2$$.$y2Axis$, $axisOptions$$3$$, "y2", $availSpace$$22$$, $totalAvailSpace$$3$$);
    $options$$36$$.y2Axis.min = $axisOptions$$3$$.min;
    $options$$36$$.y2Axis.max = $axisOptions$$3$$.max;
    return{axis:$axis$$68$$, options:$axisOptions$$3$$, $dim$:$chart$$33_preferredSize$$2$$}
  }
};
D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonAxisAttributes$$($axisOptions$$4$$, $dataValues_type$$72$$, $chart$$34$$) {
  var $options$$37$$ = $chart$$34$$.$getOptions$();
  $axisOptions$$4$$.skin = $options$$37$$.skin;
  $axisOptions$$4$$.tickLabel.position = D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$34$$, $dataValues_type$$72$$) ? "inside" : "outside";
  $axisOptions$$4$$.baselineScaling = D.$DvtChartAxisUtils$$.$getBaselineScaling$($chart$$34$$, $dataValues_type$$72$$);
  if(D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$34$$, $dataValues_type$$72$$) || "tangential" == $axisOptions$$4$$.position) {
    $axisOptions$$4$$._skipHighestTick = D.$JSCompiler_alias_TRUE$$
  }
  $axisOptions$$4$$.zoomAndScroll = D.$DvtChartTypeUtils$$.$isPolar$($chart$$34$$) ? "off" : $options$$37$$.zoomAndScroll;
  $axisOptions$$4$$._isOverview = D.$DvtChartTypeUtils$$.$isOverview$($chart$$34$$);
  if("x" != $dataValues_type$$72$$ || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$34$$)) {
    $dataValues_type$$72$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$34$$, $dataValues_type$$72$$), $axisOptions$$4$$.dataMin = $axisOptions$$4$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$4$$.dataMin : $dataValues_type$$72$$.min, $axisOptions$$4$$.dataMax = $axisOptions$$4$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$4$$.dataMax : $dataValues_type$$72$$.max
  }
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$34$$) && ($axisOptions$$4$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$34$$) ? "polygon" : "circle", $axisOptions$$4$$._radius = $chart$$34$$.$getRadius$())
};
D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonYAxisAttributes$$($axisOptions$$5$$, $chart$$35$$) {
  $axisOptions$$5$$.timeAxisType = "disabled";
  D.$DvtChartEventUtils$$.$isLiveScroll$($chart$$35$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$35$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$35$$)) && ($axisOptions$$5$$._continuousExtent = "on");
  if($axisOptions$$5$$.isStandalone) {
    $axisOptions$$5$$.leftBuffer = 0, $axisOptions$$5$$.rightBuffer = 0
  }else {
    if(D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$35$$)) {
      $axisOptions$$5$$.leftBuffer = window.Infinity, $axisOptions$$5$$.rightBuffer = window.Infinity
    }else {
      var $isR2L$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$35$$.$getCtx$());
      $axisOptions$$5$$.leftBuffer = $isR2L$$1$$ ? 0 : 10;
      $axisOptions$$5$$.rightBuffer = $isR2L$$1$$ ? 10 : 0
    }
  }
};
D.$DvtChartAxisRenderer$$.$_getPreferredSize$ = function $$DvtChartAxisRenderer$$$$_getPreferredSize$$($chart$$36$$, $axis$$69_isR2L$$2$$, $maxSize$$1_oldAxis$$, $axisOptions$$6$$, $gap$$9_type$$73$$, $availSpace$$23$$, $totalAvailSpace$$4$$) {
  var $axisSize_isStandalone$$ = $axisOptions$$6$$.isStandalone, $position$$10$$ = $axisOptions$$6$$.position, $isHoriz$$6$$ = "top" == $position$$10$$ || "bottom" == $position$$10$$;
  if("radial" == $position$$10$$ || "tangential" == $position$$10$$) {
    return new D.$DvtDimension$$(0, 0)
  }
  $gap$$9_type$$73$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$36$$, $gap$$9_type$$73$$);
  if($axisSize_isStandalone$$) {
    return $isHoriz$$6$$ ? new D.$DvtDimension$$($availSpace$$23$$.$w$, $availSpace$$23$$.$h$ - $gap$$9_type$$73$$) : new D.$DvtDimension$$($availSpace$$23$$.$w$ - $gap$$9_type$$73$$, $availSpace$$23$$.$h$)
  }
  $axisSize_isStandalone$$ = $axisOptions$$6$$.size;
  if($axisSize_isStandalone$$ != D.$JSCompiler_alias_NULL$$) {
    return $isHoriz$$6$$ ? new D.$DvtDimension$$($availSpace$$23$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize_isStandalone$$, $totalAvailSpace$$4$$.$h$) - $gap$$9_type$$73$$) : new D.$DvtDimension$$(D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize_isStandalone$$, $totalAvailSpace$$4$$.$w$) - $gap$$9_type$$73$$, $availSpace$$23$$.$h$)
  }
  if($chart$$36$$.$getOptions$()._duringAnimation) {
    return $isHoriz$$6$$ ? ($axis$$69_isR2L$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$36$$.$getCtx$()), $axisOptions$$6$$._startOverflow = $axis$$69_isR2L$$2$$ ? (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($maxSize$$1_oldAxis$$) : (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($maxSize$$1_oldAxis$$), $axisOptions$$6$$._endOverflow = $axis$$69_isR2L$$2$$ ? (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($maxSize$$1_oldAxis$$) : (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($maxSize$$1_oldAxis$$), 
    new D.$DvtDimension$$($availSpace$$23$$.$w$, $maxSize$$1_oldAxis$$.getHeight())) : new D.$DvtDimension$$($maxSize$$1_oldAxis$$.getWidth(), $availSpace$$23$$.$h$)
  }
  $maxSize$$1_oldAxis$$ = $axisOptions$$6$$.maxSize;
  return $isHoriz$$6$$ ? $axis$$69_isR2L$$2$$.$getPreferredSize$($axisOptions$$6$$, $availSpace$$23$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($maxSize$$1_oldAxis$$, $totalAvailSpace$$4$$.$h$) - $gap$$9_type$$73$$) : $axis$$69_isR2L$$2$$.$getPreferredSize$($axisOptions$$6$$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($maxSize$$1_oldAxis$$, $totalAvailSpace$$4$$.$w$) - $gap$$9_type$$73$$, $availSpace$$23$$.$h$)
};
D.$DvtChartAxisRenderer$$.$_addAxisGaps$ = function $$DvtChartAxisRenderer$$$$_addAxisGaps$$($chart$$37$$, $availSpace$$24$$) {
  var $isHoriz$$7$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$37$$), $yPosition$$1$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($chart$$37$$), $y2Position$$1$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$37$$), $isXRendered$$ = D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$37$$, "x"), $isYRendered$$ = D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$37$$, "y"), $isY2Rendered$$ = D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$37$$, "y2"), $axisGap$$ = $chart$$37$$.$getOptions$().layout.verticalAxisGap, 
  $axisGap$$ = $isHoriz$$7$$ ? $axisGap$$ * D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$37$$, "x") : $axisGap$$ * window.Math.max(D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$37$$, "y"), D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$37$$, "y2")), $axisGap$$ = window.Math.ceil($axisGap$$);
  if($isHoriz$$7$$ && !("top" == $yPosition$$1$$ && $isYRendered$$) && !("top" == $y2Position$$1$$ && $isY2Rendered$$) || !$isHoriz$$7$$) {
    $availSpace$$24$$.y += $axisGap$$, $availSpace$$24$$.$h$ -= $axisGap$$
  }
  if($isHoriz$$7$$ && !("bottom" == $yPosition$$1$$ && $isYRendered$$) && !("bottom" == $y2Position$$1$$ && $isY2Rendered$$) || !$isHoriz$$7$$ && !$isXRendered$$) {
    $availSpace$$24$$.$h$ -= $axisGap$$
  }
};
D.$DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($availSpace$$25$$, $axisInfo$$11$$, $gap$$10$$) {
  $axisInfo$$11$$ && (0,D.$DvtLayoutUtils$position$$)($availSpace$$25$$, $axisInfo$$11$$.options.position, $axisInfo$$11$$.axis, $axisInfo$$11$$.$dim$.$w$, $axisInfo$$11$$.$dim$.$h$, $gap$$10$$)
};
D.$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($yInfo$$2$$, $y2Info$$1$$) {
  var $yAxisInfo$$ = $yInfo$$2$$.axis.$Info$;
  if($yAxisInfo$$) {
    var $minorTickCount$$ = $yAxisInfo$$.$getMinorTickCount$(), $y2Options$$ = $y2Info$$1$$.options;
    $y2Options$$._majorTickCount = $yAxisInfo$$.$getMajorTickCount$();
    $y2Options$$._minorTickCount = $minorTickCount$$
  }
};
D.$DvtChartAxisRenderer$$.$_getSplitAvailSpace$ = function $$DvtChartAxisRenderer$$$$_getSplitAvailSpace$$($availSpace$$26$$, $splitRatio$$, $isHoriz$$8$$, $isEnd$$) {
  var $splitSpace$$ = $availSpace$$26$$.$clone$();
  $isHoriz$$8$$ ? ($splitSpace$$.$w$ = $availSpace$$26$$.$w$ * $splitRatio$$, $splitSpace$$.x = $isEnd$$ ? $availSpace$$26$$.$w$ * (1 - $splitRatio$$) : 0) : ($splitSpace$$.$h$ = $availSpace$$26$$.$h$ * $splitRatio$$, $splitSpace$$.y = $isEnd$$ ? $availSpace$$26$$.$h$ * (1 - $splitRatio$$) : 0);
  return $splitSpace$$
};
D.$DvtChartAxisRenderer$$.$_setOverflow$ = function $$DvtChartAxisRenderer$$$$_setOverflow$$($availSpace$$27$$, $rightOverflow_xInfo$$2$$, $yInfo$$3$$, $y2Info$$2$$) {
  if($rightOverflow_xInfo$$2$$) {
    var $leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($rightOverflow_xInfo$$2$$.axis);
    $rightOverflow_xInfo$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($rightOverflow_xInfo$$2$$.axis);
    $availSpace$$27$$.x += $leftOverflow$$;
    $availSpace$$27$$.$w$ -= $leftOverflow$$ + $rightOverflow_xInfo$$2$$;
    $yInfo$$3$$ && $yInfo$$3$$.axis.$setTranslateX$($yInfo$$3$$.axis.$getTranslateX$() + ("left" == $yInfo$$3$$.options.position ? $leftOverflow$$ : -$rightOverflow_xInfo$$2$$));
    $y2Info$$2$$ && $y2Info$$2$$.axis.$setTranslateX$($y2Info$$2$$.axis.$getTranslateX$() + ("left" == $y2Info$$2$$.options.position ? $leftOverflow$$ : -$rightOverflow_xInfo$$2$$))
  }
};
D.$DvtChartAxisRenderer$$.$_storeAxes$ = function $$DvtChartAxisRenderer$$$$_storeAxes$$($chart$$38$$, $xInfo$$3$$, $yInfo$$4$$, $y2Info$$3$$) {
  $chart$$38$$.$xAxis$ && ($chart$$38$$.$xAxis$.$destroy$(), $chart$$38$$.removeChild($chart$$38$$.$xAxis$));
  $chart$$38$$.$yAxis$ && ($chart$$38$$.$yAxis$.$destroy$(), $chart$$38$$.removeChild($chart$$38$$.$yAxis$));
  $chart$$38$$.$y2Axis$ && ($chart$$38$$.$y2Axis$.$destroy$(), $chart$$38$$.removeChild($chart$$38$$.$y2Axis$));
  $chart$$38$$.$xAxis$ = $xInfo$$3$$.axis;
  $chart$$38$$.$yAxis$ = $yInfo$$4$$ ? $yInfo$$4$$.axis : D.$JSCompiler_alias_NULL$$;
  $chart$$38$$.$y2Axis$ = $y2Info$$3$$ ? $y2Info$$3$$.axis : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLegendRenderer$$, D.$DvtObj$$, "DvtChartLegendRenderer");
D.$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$39$$, $container$$24$$, $availSpace$$28_bounds$$8$$) {
  var $options$$38$$ = $chart$$39$$.$getOptions$(), $position$$11$$ = $options$$38$$.legend.position;
  if("on" == $options$$38$$.legend.rendered) {
    var $gap$$11_legendOptions$$2$$ = D.$DvtJSONUtils$$.$clone$($options$$38$$.legend);
    delete $gap$$11_legendOptions$$2$$.position;
    $gap$$11_legendOptions$$2$$.skin = $options$$38$$.skin;
    $gap$$11_legendOptions$$2$$.hideAndShowBehavior = D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$39$$);
    $gap$$11_legendOptions$$2$$.hoverBehavior = D.$DvtChartEventUtils$$.$getHoverBehavior$($chart$$39$$);
    $gap$$11_legendOptions$$2$$.hoverBehaviorDelay = D.$DvtChartStyleUtils$$.$getHoverBehaviorDelay$($chart$$39$$);
    $gap$$11_legendOptions$$2$$.hiddenCategories = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$39$$);
    $gap$$11_legendOptions$$2$$.highlightedCategories = D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$39$$);
    "auto" == $position$$11$$ && ($position$$11$$ = $availSpace$$28_bounds$$8$$.$w$ >= $availSpace$$28_bounds$$8$$.$h$ ? "end" : "bottom");
    var $isHoriz$$9_shiftedPos$$ = "top" == $position$$11$$ || "bottom" == $position$$11$$;
    $gap$$11_legendOptions$$2$$.orientation = $isHoriz$$9_shiftedPos$$ ? "horizontal" : "vertical";
    "start" == $position$$11$$ && ($gap$$11_legendOptions$$2$$.halign = "end");
    if("start" == $position$$11$$ || "end" == $position$$11$$) {
      $gap$$11_legendOptions$$2$$.valign = "middle"
    }
    "top" == $position$$11$$ && ($gap$$11_legendOptions$$2$$.valign = "bottom");
    if("top" == $position$$11$$ || "bottom" == $position$$11$$) {
      $gap$$11_legendOptions$$2$$.halign = "center"
    }
    D.$DvtChartLegendRenderer$$.$_addLegendData$($chart$$39$$, $gap$$11_legendOptions$$2$$);
    if(0 != $gap$$11_legendOptions$$2$$.sections.length) {
      var $legend$$1$$ = (0,D.$DvtLegend$newInstance$$)($chart$$39$$.$getCtx$(), $chart$$39$$.$processEvent$, $chart$$39$$);
      $chart$$39$$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$1$$.setId($chart$$39$$.getId() + "legend");
      $container$$24$$.$addChild$($legend$$1$$);
      var $actualSize_isRTL$$14_maxWidth$$4$$;
      if($gap$$11_legendOptions$$2$$.size != D.$JSCompiler_alias_NULL$$) {
        $actualSize_isRTL$$14_maxWidth$$4$$ = $isHoriz$$9_shiftedPos$$ ? new D.$DvtDimension$$($availSpace$$28_bounds$$8$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$11_legendOptions$$2$$.size, $availSpace$$28_bounds$$8$$.$h$)) : new D.$DvtDimension$$(D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$11_legendOptions$$2$$.size, $availSpace$$28_bounds$$8$$.$w$), $availSpace$$28_bounds$$8$$.$h$)
      }else {
        $actualSize_isRTL$$14_maxWidth$$4$$ = $isHoriz$$9_shiftedPos$$ ? $availSpace$$28_bounds$$8$$.$w$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$11_legendOptions$$2$$.maxSize, $availSpace$$28_bounds$$8$$.$w$);
        var $maxHeight$$3$$ = $isHoriz$$9_shiftedPos$$ ? D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$11_legendOptions$$2$$.maxSize, $availSpace$$28_bounds$$8$$.$h$) : $availSpace$$28_bounds$$8$$.$h$;
        $actualSize_isRTL$$14_maxWidth$$4$$ = $legend$$1$$.$getPreferredSize$($gap$$11_legendOptions$$2$$, $actualSize_isRTL$$14_maxWidth$$4$$, $maxHeight$$3$$)
      }
      $legend$$1$$.$render$($gap$$11_legendOptions$$2$$, $actualSize_isRTL$$14_maxWidth$$4$$.$w$, $actualSize_isRTL$$14_maxWidth$$4$$.$h$);
      $gap$$11_legendOptions$$2$$ = $isHoriz$$9_shiftedPos$$ ? (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$39$$, $options$$38$$.layout.legendGapHeight) : window.Math.ceil($options$$38$$.layout.legendGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$39$$));
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$28_bounds$$8$$, $position$$11$$, $legend$$1$$, $actualSize_isRTL$$14_maxWidth$$4$$.$w$, $actualSize_isRTL$$14_maxWidth$$4$$.$h$, $gap$$11_legendOptions$$2$$);
      $availSpace$$28_bounds$$8$$ = $legend$$1$$.$_bounds$;
      $isHoriz$$9_shiftedPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($legend$$1$$, new D.$DvtPoint$$($availSpace$$28_bounds$$8$$.x, $availSpace$$28_bounds$$8$$.y));
      $availSpace$$28_bounds$$8$$.x = $isHoriz$$9_shiftedPos$$.x;
      $availSpace$$28_bounds$$8$$.y = $isHoriz$$9_shiftedPos$$.y;
      D.$DvtChartTypeUtils$$.$isOverview$($chart$$39$$) || ($actualSize_isRTL$$14_maxWidth$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$39$$.$getCtx$()), "end" == $position$$11$$ ? $actualSize_isRTL$$14_maxWidth$$4$$ ? $options$$38$$._minOverflowCoord = $isHoriz$$9_shiftedPos$$.x + $availSpace$$28_bounds$$8$$.$w$ + $gap$$11_legendOptions$$2$$ / 2 : $options$$38$$._maxOverflowCoord = $isHoriz$$9_shiftedPos$$.x - $gap$$11_legendOptions$$2$$ / 2 : "start" == $position$$11$$ && ($actualSize_isRTL$$14_maxWidth$$4$$ ? 
      $options$$38$$._maxOverflowCoord = $isHoriz$$9_shiftedPos$$.x - $gap$$11_legendOptions$$2$$ / 2 : $options$$38$$._minOverflowCoord = $isHoriz$$9_shiftedPos$$.x + $availSpace$$28_bounds$$8$$.$w$ + $gap$$11_legendOptions$$2$$ / 2));
      $chart$$39$$.$legend$ && ($chart$$39$$.$legend$.$destroy$(), $container$$24$$.removeChild($chart$$39$$.$legend$));
      $chart$$39$$.$legend$ = $legend$$1$$
    }
  }
};
D.$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$40$$, $legendOptions$$3$$) {
  var $refObjItems_seriesItems$$2$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$40$$, "vertical" == $legendOptions$$3$$.orientation);
  if(0 < $refObjItems_seriesItems$$2$$.length) {
    var $refObjSection_seriesSection$$ = $legendOptions$$3$$.seriesSection;
    $refObjSection_seriesSection$$.items = $refObjItems_seriesItems$$2$$;
    $legendOptions$$3$$.sections.unshift($refObjSection_seriesSection$$)
  }
  $refObjItems_seriesItems$$2$$ = D.$DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$40$$);
  0 < $refObjItems_seriesItems$$2$$.length && ($refObjSection_seriesSection$$ = $legendOptions$$3$$.referenceObjectSection, $refObjSection_seriesSection$$.items = $refObjItems_seriesItems$$2$$, $legendOptions$$3$$.referenceObjectTitle && ($refObjSection_seriesSection$$.title = $legendOptions$$3$$.referenceObjectTitle), $legendOptions$$3$$.sections.push($refObjSection_seriesSection$$))
};
D.$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$41$$, $isVertical$$) {
  var $ret$$4$$ = [], $categoryKeys_legendItem$$1$$, $bReversed_seriesIndex$$16$$;
  if("pie" == $chart$$41$$.$getType$()) {
    for(var $seriesIndices_yCategoryMap$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$($chart$$41$$), $i$$154_y2CategoryMap$$ = 0;$i$$154_y2CategoryMap$$ < $seriesIndices_yCategoryMap$$.length;$i$$154_y2CategoryMap$$++) {
      $bReversed_seriesIndex$$16$$ = $seriesIndices_yCategoryMap$$[$i$$154_y2CategoryMap$$], ($categoryKeys_legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$41$$, $bReversed_seriesIndex$$16$$)) && $ret$$4$$.push($categoryKeys_legendItem$$1$$)
    }
    D.$DvtPieChartUtils$$.$hasOtherSeries$($chart$$41$$) && ($categoryKeys_legendItem$$1$$ = {id:D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, text:(0,D.$DvtBundle$getTranslation$$)($chart$$41$$.$getOptions$(), "labelOther", "DvtChartBundle", "LABEL_OTHER"), categoryVisibility:0 <= D.$DvtArrayUtils$$.$getIndex$(D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$41$$), D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$) ? "hidden" : "visible", symbolType:"marker", color:$chart$$41$$.$getOptions$().styleDefaults.otherColor, 
    borderColor:$chart$$41$$.$getOptions$().styleDefaults.borderColor}, $ret$$4$$.push($categoryKeys_legendItem$$1$$))
  }else {
    var $seriesIndices_yCategoryMap$$ = {}, $i$$154_y2CategoryMap$$ = {}, $seriesCount$$5$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$41$$);
    for($bReversed_seriesIndex$$16$$ = 0;$bReversed_seriesIndex$$16$$ < $seriesCount$$5$$;$bReversed_seriesIndex$$16$$++) {
      if($categoryKeys_legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$41$$, $bReversed_seriesIndex$$16$$)) {
        var $category$$2$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$41$$, $bReversed_seriesIndex$$16$$);
        D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$41$$, $bReversed_seriesIndex$$16$$) ? $i$$154_y2CategoryMap$$[$category$$2$$] ? $i$$154_y2CategoryMap$$[$category$$2$$].push($categoryKeys_legendItem$$1$$) : $i$$154_y2CategoryMap$$[$category$$2$$] = [$categoryKeys_legendItem$$1$$] : $seriesIndices_yCategoryMap$$[$category$$2$$] ? $seriesIndices_yCategoryMap$$[$category$$2$$].push($categoryKeys_legendItem$$1$$) : $seriesIndices_yCategoryMap$$[$category$$2$$] = [$categoryKeys_legendItem$$1$$]
      }
    }
    $categoryKeys_legendItem$$1$$ = D.$DvtChartDataUtils$$.$getStackCategories$($chart$$41$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
    $bReversed_seriesIndex$$16$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$41$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$41$$) && $isVertical$$;
    $ret$$4$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($seriesIndices_yCategoryMap$$, $categoryKeys_legendItem$$1$$.y, $bReversed_seriesIndex$$16$$, $ret$$4$$);
    $ret$$4$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($i$$154_y2CategoryMap$$, $categoryKeys_legendItem$$1$$.y2, $bReversed_seriesIndex$$16$$, $ret$$4$$)
  }
  return $ret$$4$$
};
D.$DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$ = function $$DvtChartLegendRenderer$$$$_getSeriesItemsForAxis$$($categoryMap$$, $categoryKeys$$1$$, $bReversed$$1$$, $ret$$5$$) {
  for(var $legendItemArray$$, $categoryIndex$$ = 0;$categoryIndex$$ < $categoryKeys$$1$$.length;$categoryIndex$$++) {
    ($legendItemArray$$ = $categoryMap$$[$categoryKeys$$1$$[$categoryIndex$$]]) && ($ret$$5$$ = $bReversed$$1$$ ? $ret$$5$$.concat($legendItemArray$$.reverse()) : $ret$$5$$.concat($legendItemArray$$))
  }
  return $ret$$5$$
};
D.$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$42$$, $seriesIndex$$17$$) {
  var $seriesItem$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$42$$, $seriesIndex$$17$$), $chartType$$ = $chart$$42$$.$getType$(), $seriesType$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$42$$, $seriesIndex$$17$$), $lineType$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$42$$, $seriesIndex$$17$$), $displayInLegend_series$$6$$ = $seriesItem$$1$$.displayInLegend;
  if(!$seriesItem$$1$$ || "off" == $displayInLegend_series$$6$$ || "on" != $displayInLegend_series$$6$$ && (D.$DvtChartTypeUtils$$.$isFunnel$($chart$$42$$) || D.$DvtChartTypeUtils$$.$isStock$($chart$$42$$)) || "on" != $displayInLegend_series$$6$$ && !D.$DvtChartDataUtils$$.$hasSeriesData$($chart$$42$$, $seriesIndex$$17$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $legendItem$$2_seriesLabel$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$42$$, $seriesIndex$$17$$);
  if("on" != $displayInLegend_series$$6$$ && (!$legendItem$$2_seriesLabel$$ || 0 >= $legendItem$$2_seriesLabel$$.trim().length)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $displayInLegend_series$$6$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$42$$, $seriesIndex$$17$$), $hiddenCategories_index$$136$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$42$$), $hiddenCategories_index$$136$$ = D.$DvtArrayUtils$$.$getIndex$($hiddenCategories_index$$136$$, $displayInLegend_series$$6$$), $legendItem$$2_seriesLabel$$ = {id:$displayInLegend_series$$6$$, text:$legendItem$$2_seriesLabel$$, categoryVisibility:0 <= $hiddenCategories_index$$136$$ ? "hidden" : "visible"};
  "line" == $seriesType$$2$$ || "lineWithArea" == $seriesType$$2$$ || "scatter" == $chartType$$ || "bubble" == $chartType$$ ? ($legendItem$$2_seriesLabel$$.lineStyle = D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$42$$, $seriesIndex$$17$$), $legendItem$$2_seriesLabel$$.lineWidth = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$42$$, $seriesIndex$$17$$), D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$42$$, $seriesIndex$$17$$) ? ($legendItem$$2_seriesLabel$$.symbolType = "none" == $lineType$$ ? 
  "marker" : "lineWithMarker", $legendItem$$2_seriesLabel$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$42$$, $seriesIndex$$17$$), $legendItem$$2_seriesLabel$$.markerColor = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$42$$, $seriesIndex$$17$$)) : $legendItem$$2_seriesLabel$$.symbolType = "line") : ($legendItem$$2_seriesLabel$$.symbolType = "marker", "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$42$$, $seriesIndex$$17$$) && ($legendItem$$2_seriesLabel$$.markerShape = 
  D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$42$$, $seriesIndex$$17$$)));
  $legendItem$$2_seriesLabel$$.color = D.$DvtChartStyleUtils$$.$getColor$($chart$$42$$, $seriesIndex$$17$$);
  $legendItem$$2_seriesLabel$$.borderColor = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$42$$, $seriesIndex$$17$$);
  $legendItem$$2_seriesLabel$$.pattern = D.$DvtChartStyleUtils$$.$getPattern$($chart$$42$$, $seriesIndex$$17$$);
  $legendItem$$2_seriesLabel$$.action = $seriesItem$$1$$.action;
  $legendItem$$2_seriesLabel$$._spb = $chart$$42$$.$getShowPopupBehaviors$($seriesItem$$1$$._id);
  $legendItem$$2_seriesLabel$$.drilling = D.$DvtChartEventUtils$$.$isSeriesDrillable$($chart$$42$$, $seriesIndex$$17$$) ? "on" : "off";
  $legendItem$$2_seriesLabel$$.shortDesc = $seriesItem$$1$$.shortDesc;
  return $legendItem$$2_seriesLabel$$
};
D.$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$43_refObjs$$) {
  $chart$$43_refObjs$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$43_refObjs$$);
  if(0 >= $chart$$43_refObjs$$.length) {
    return[]
  }
  for(var $items$$1$$ = [], $i$$155$$ = 0;$i$$155$$ < $chart$$43_refObjs$$.length;$i$$155$$++) {
    var $refObj$$2$$ = $chart$$43_refObjs$$[$i$$155$$];
    if($refObj$$2$$ && "on" == $refObj$$2$$.displayInLegend && $refObj$$2$$.text) {
      var $type$$74$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$2$$);
      $items$$1$$.push({symbolType:"area" == $type$$74$$ ? "square" : "line", text:$refObj$$2$$.text, color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$2$$), lineStyle:$refObj$$2$$.lineStyle, lineWidth:D.$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$2$$), categoryVisibility:$refObj$$2$$.visibility, shortDesc:$refObj$$2$$.shortDesc})
    }
  }
  return $items$$1$$
};
D.$DvtPlotAreaRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPlotAreaRenderer$$, D.$DvtObj$$, "DvtPlotAreaRenderer");
D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
D.$DvtPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$ = 1E4;
D.$DvtPlotAreaRenderer$$.$render$ = function $$DvtPlotAreaRenderer$$$$render$$($chart$$63$$, $container$$39$$, $availSpace$$46$$) {
  "off" == $chart$$63$$.$getOptions$().plotArea.rendered ? D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$63$$, $container$$39$$, $availSpace$$46$$) : 0 < $availSpace$$46$$.$w$ && 0 < $availSpace$$46$$.$h$ && ($chart$$63$$.$_currentMarkers$ = [], $chart$$63$$.$_currentAreas$ = [], D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$63$$, $container$$39$$, $availSpace$$46$$), D.$DvtPlotAreaRenderer$$.$_renderTicks$($chart$$63$$, $container$$39$$, $availSpace$$46$$), D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$63$$, 
  $container$$39$$, $availSpace$$46$$))
};
D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$64$$, $container$$40$$, $availSpace$$47$$) {
  var $clipGroup_options$$48$$ = $chart$$64$$.$getOptions$(), $background$$1_cx_points$$2$$, $areaContainer$$2_context$$36$$ = $chart$$64$$.$getCtx$();
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$64$$)) {
    $background$$1_cx_points$$2$$ = $availSpace$$47$$.x + $availSpace$$47$$.$w$ / 2;
    var $backgroundColor$$6_cy$$1$$ = $availSpace$$47$$.y + $availSpace$$47$$.$h$ / 2;
    D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$64$$) ? ($background$$1_cx_points$$2$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($background$$1_cx_points$$2$$, $backgroundColor$$6_cy$$1$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$64$$), $chart$$64$$.$getRadius$()), $background$$1_cx_points$$2$$ = new D.$DvtPolygon$$($areaContainer$$2_context$$36$$, $background$$1_cx_points$$2$$)) : $background$$1_cx_points$$2$$ = new D.$DvtCircle$$($areaContainer$$2_context$$36$$, $background$$1_cx_points$$2$$, 
    $backgroundColor$$6_cy$$1$$, $chart$$64$$.$getRadius$())
  }else {
    $background$$1_cx_points$$2$$ = new D.$DvtRect$$($areaContainer$$2_context$$36$$, $availSpace$$47$$.x, $availSpace$$47$$.y, $availSpace$$47$$.$w$, $availSpace$$47$$.$h$)
  }
  ($backgroundColor$$6_cy$$1$$ = D.$DvtChartStyleUtils$$.$getBackgroundColor$($chart$$64$$)) ? $background$$1_cx_points$$2$$.$setSolidFill$($backgroundColor$$6_cy$$1$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$1_cx_points$$2$$);
  $container$$40$$.$addChild$($background$$1_cx_points$$2$$);
  $chart$$64$$.$__getEventManager$().$associate$($background$$1_cx_points$$2$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$PLOT_AREA$)));
  if($clipGroup_options$$48$$.xAxis.referenceObjects || $clipGroup_options$$48$$.yAxis.referenceObjects || $clipGroup_options$$48$$.y2Axis.referenceObjects) {
    $clipGroup_options$$48$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$64$$, $container$$40$$, $availSpace$$47$$), D.$DvtRefObjRenderer$$.$renderBackgroundObjects$($chart$$64$$, $clipGroup_options$$48$$, $availSpace$$47$$)
  }
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$64$$) && ($areaContainer$$2_context$$36$$ = new D.$DvtContainer$$($areaContainer$$2_context$$36$$), $container$$40$$.$addChild$($areaContainer$$2_context$$36$$), $chart$$64$$.$_areaContainer$ = $areaContainer$$2_context$$36$$, D.$DvtChartTypeUtils$$.$hasAreaSeries$($chart$$64$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$64$$, $areaContainer$$2_context$$36$$, $availSpace$$47$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtPlotAreaRenderer$$.$_renderTicks$ = function $$DvtPlotAreaRenderer$$$$_renderTicks$$($chart$$65$$, $container$$41$$, $availSpace$$48$$) {
  $chart$$65$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$65$$, "x") && D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$($chart$$65$$, $container$$41$$, $chart$$65$$.$xAxis$, $availSpace$$48$$);
  $chart$$65$$.$yAxis$ && D.$DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$65$$, "y") && D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$($chart$$65$$, $container$$41$$, $chart$$65$$.$yAxis$, $availSpace$$48$$);
  $chart$$65$$.$y2Axis$ && D.$DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$65$$, "y2") && D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$($chart$$65$$, $container$$41$$, $chart$$65$$.$y2Axis$, $availSpace$$48$$);
  $chart$$65$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$65$$, "x") && D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$($chart$$65$$, $container$$41$$, $chart$$65$$.$xAxis$, $availSpace$$48$$);
  $chart$$65$$.$yAxis$ && D.$DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$65$$, "y") && D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$($chart$$65$$, $container$$41$$, $chart$$65$$.$yAxis$, $availSpace$$48$$);
  $chart$$65$$.$y2Axis$ && D.$DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$65$$, "y2") && D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$($chart$$65$$, $container$$41$$, $chart$$65$$.$y2Axis$, $availSpace$$48$$)
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLines$$($chart$$66$$, $container$$42$$, $availSpace$$49$$) {
  $chart$$66$$.$xAxis$ && ($chart$$66$$.$yAxis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$66$$, "x")) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$66$$, $container$$42$$, $chart$$66$$.$xAxis$, $chart$$66$$.$yAxis$, $availSpace$$49$$);
  $chart$$66$$.$xAxis$ && $chart$$66$$.$y2Axis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$66$$, "x") && (!$chart$$66$$.$yAxis$ || D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$66$$)) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$66$$, $container$$42$$, $chart$$66$$.$xAxis$, $chart$$66$$.$y2Axis$, $availSpace$$49$$);
  $chart$$66$$.$yAxis$ && ($chart$$66$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$66$$, "y")) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$66$$, $container$$42$$, $chart$$66$$.$yAxis$, $chart$$66$$.$xAxis$, $availSpace$$49$$);
  $chart$$66$$.$y2Axis$ && ($chart$$66$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$66$$, "y2")) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$66$$, $container$$42$$, $chart$$66$$.$y2Axis$, $chart$$66$$.$xAxis$, $availSpace$$49$$)
};
D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$ = function $$DvtPlotAreaRenderer$$$$_renderMajorTicks$$($chart$$67$$, $container$$43$$, $axis$$70$$, $availSpace$$50$$) {
  D.$DvtPlotAreaRenderer$$.$_renderGridlines$($chart$$67$$, $container$$43$$, $axis$$70$$.$getOptions$().majorTick, $axis$$70$$.$getPosition$(), $axis$$70$$.$getMajorTickCoords$(), $axis$$70$$.$getBaselineCoord$(), $availSpace$$50$$)
};
D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$ = function $$DvtPlotAreaRenderer$$$$_renderMinorTicks$$($chart$$68$$, $container$$44$$, $axis$$71$$, $availSpace$$51$$) {
  D.$DvtPlotAreaRenderer$$.$_renderGridlines$($chart$$68$$, $container$$44$$, $axis$$71$$.$getOptions$().minorTick, $axis$$71$$.$getPosition$(), $axis$$71$$.$getMinorTickCoords$(), D.$JSCompiler_alias_NULL$$, $availSpace$$51$$)
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLine$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLine$$($chart$$69$$, $container$$45$$, $oAxis_options$$49$$, $dAxis$$, $availSpace$$52$$) {
  $oAxis_options$$49$$ = $oAxis_options$$49$$.$getOptions$();
  var $coord$$16_position$$15$$ = $oAxis_options$$49$$.position, $coord$$16_position$$15$$ = "bottom" == $coord$$16_position$$15$$ || "right" == $coord$$16_position$$15$$ || "tangential" == $coord$$16_position$$15$$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($dAxis$$, window.Math.max($dAxis$$.$Info$.$getStartCoord$(), $dAxis$$.$Info$.$getEndCoord$())) : (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($dAxis$$, window.Math.min($dAxis$$.$Info$.$getStartCoord$(), $dAxis$$.$Info$.$getEndCoord$()));
  D.$DvtPlotAreaRenderer$$.$_renderGridlines$($chart$$69$$, $container$$45$$, $oAxis_options$$49$$.axisLine, $dAxis$$.$getPosition$(), [$coord$$16_position$$15$$], D.$JSCompiler_alias_NULL$$, $availSpace$$52$$)
};
D.$DvtPlotAreaRenderer$$.$_renderGridlines$ = function $$DvtPlotAreaRenderer$$$$_renderGridlines$$($chart$$70$$, $container$$46$$, $i$$156_options$$50$$, $position$$16$$, $coords$$8$$, $baselineCoord$$1$$, $availSpace$$53$$) {
  var $baselineColor_lineColor$$ = $i$$156_options$$50$$.lineColor, $lineStroke$$2$$ = new D.$DvtSolidStroke$$($baselineColor_lineColor$$, 1, $i$$156_options$$50$$.lineWidth);
  $i$$156_options$$50$$.lineStyle && $lineStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$156_options$$50$$.lineStyle));
  var $baselineStroke$$ = $lineStroke$$2$$.$clone$();
  "inherit" != $i$$156_options$$50$$.baselineColor && ($baselineColor_lineColor$$ = "auto" == $i$$156_options$$50$$.baselineColor ? D.$DvtColorUtils$$.$getDarker$($baselineColor_lineColor$$, 0.4) : $i$$156_options$$50$$.baselineColor, $baselineStroke$$.$setColor$($baselineColor_lineColor$$));
  $baselineStroke$$.$setWidth$($i$$156_options$$50$$.baselineWidth != D.$JSCompiler_alias_NULL$$ ? $i$$156_options$$50$$.baselineWidth : $i$$156_options$$50$$.lineWidth);
  $baselineStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$156_options$$50$$.baselineStyle ? $i$$156_options$$50$$.baselineStyle : $i$$156_options$$50$$.lineStyle));
  for($i$$156_options$$50$$ = 0;$i$$156_options$$50$$ < $coords$$8$$.length;$i$$156_options$$50$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderGridline$($chart$$70$$, $container$$46$$, $position$$16$$, $coords$$8$$[$i$$156_options$$50$$], $baselineCoord$$1$$ != D.$JSCompiler_alias_NULL$$ && $coords$$8$$[$i$$156_options$$50$$] == $baselineCoord$$1$$ ? $baselineStroke$$ : $lineStroke$$2$$, $availSpace$$53$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderGridline$ = function $$DvtPlotAreaRenderer$$$$_renderGridline$$($chart$$71$$, $container$$47$$, $position$$17$$, $coord$$17_points$$3$$, $stroke$$5$$, $availSpace$$54$$) {
  var $context$$37_line$$7$$;
  $context$$37_line$$7$$ = $container$$47$$.$getCtx$();
  var $usePixelHinting$$ = !(0,D.$DvtAgent$isTouchDevice$$)() || 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)();
  "radial" == $position$$17$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$71$$) ? ($coord$$17_points$$3$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$71$$), $coord$$17_points$$3$$), $context$$37_line$$7$$ = new D.$DvtPolygon$$($context$$37_line$$7$$, $coord$$17_points$$3$$)) : $context$$37_line$$7$$ = new D.$DvtCircle$$($context$$37_line$$7$$, 0, 0, $coord$$17_points$$3$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$37_line$$7$$), 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$37_line$$7$$, $availSpace$$54$$.x + $availSpace$$54$$.$w$ / 2, $availSpace$$54$$.y + $availSpace$$54$$.$h$ / 2)) : "tangential" == $position$$17$$ ? ($context$$37_line$$7$$ = new D.$DvtLine$$($context$$37_line$$7$$, 0, 0, $chart$$71$$.$getRadius$() * window.Math.sin($coord$$17_points$$3$$), -$chart$$71$$.$getRadius$() * window.Math.cos($coord$$17_points$$3$$)), 0.01 > $coord$$17_points$$3$$ % window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$37_line$$7$$), 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$37_line$$7$$, $availSpace$$54$$.x + $availSpace$$54$$.$w$ / 2, $availSpace$$54$$.y + $availSpace$$54$$.$h$ / 2)) : ($context$$37_line$$7$$ = "top" == $position$$17$$ || "bottom" == $position$$17$$ ? new D.$DvtLine$$($context$$37_line$$7$$, $coord$$17_points$$3$$, $availSpace$$54$$.y, $coord$$17_points$$3$$, $availSpace$$54$$.y + $availSpace$$54$$.$h$) : new D.$DvtLine$$($context$$37_line$$7$$, $availSpace$$54$$.x, $coord$$17_points$$3$$, 
  $availSpace$$54$$.x + $availSpace$$54$$.$w$, $coord$$17_points$$3$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$37_line$$7$$));
  $context$$37_line$$7$$.$setStroke$($stroke$$5$$);
  $context$$37_line$$7$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$47$$.$addChild$($context$$37_line$$7$$)
};
D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$72$$, $container$$48_selected$$2$$, $availSpace$$55$$) {
  var $bBLAC_options$$51$$ = D.$DvtChartTypeUtils$$.$isBLAC$($chart$$72$$), $bBarSeries$$ = D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$72$$), $bLineSeries$$ = D.$DvtChartTypeUtils$$.$hasLineSeries$($chart$$72$$), $bStockSeries$$ = D.$DvtChartTypeUtils$$.$hasCandlestickSeries$($chart$$72$$), $bLineWithAreaSeries$$ = D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$72$$), $bAxisLinesInForeground$$ = $bBLAC_options$$51$$ && $bBarSeries$$ && !$bLineSeries$$ && !$bLineWithAreaSeries$$ && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$72$$);
  $bAxisLinesInForeground$$ || D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$72$$, $container$$48_selected$$2$$, $availSpace$$55$$);
  var $clipGroup$$1$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$72$$, $container$$48_selected$$2$$, $availSpace$$55$$);
  $bBLAC_options$$51$$ ? ($bLineWithAreaSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$72$$, $container$$48_selected$$2$$, $availSpace$$55$$, D.$JSCompiler_alias_TRUE$$), $bBarSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$72$$, $clipGroup$$1$$, $availSpace$$55$$), $bLineSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$72$$, $container$$48_selected$$2$$, $clipGroup$$1$$, $availSpace$$55$$), $bStockSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderStock$($chart$$72$$, 
  $clipGroup$$1$$), $bAxisLinesInForeground$$ && D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$72$$, $container$$48_selected$$2$$, $availSpace$$55$$)) : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$72$$) && D.$DvtPlotAreaRenderer$$.$_renderScatterBubble$($chart$$72$$, $container$$48_selected$$2$$, $clipGroup$$1$$, $availSpace$$55$$);
  $bBLAC_options$$51$$ = $chart$$72$$.$getOptions$();
  if($bBLAC_options$$51$$.xAxis.referenceObjects || $bBLAC_options$$51$$.yAxis.referenceObjects || $bBLAC_options$$51$$.y2Axis.referenceObjects) {
    $clipGroup$$1$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$72$$, $container$$48_selected$$2$$, $availSpace$$55$$), D.$DvtRefObjRenderer$$.$renderForegroundObjects$($chart$$72$$, $clipGroup$$1$$, $availSpace$$55$$)
  }
  $container$$48_selected$$2$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$72$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$72$$, $container$$48_selected$$2$$);
  $chart$$72$$.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$72$$))
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabel$$($chart$$73$$, $container$$49$$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$, $seriesIndex$$19$$, $groupIndex$$11$$, $dataColor_style$$48_textDim$$3$$, $type$$75$$) {
  if(!D.$DvtChartTypeUtils$$.$isOverview$($chart$$73$$)) {
    var $label$$28_labelString$$ = D.$DvtChartDataUtils$$.$getDataLabel$($chart$$73$$, $seriesIndex$$19$$, $groupIndex$$11$$, $type$$75$$);
    if($label$$28_labelString$$ != D.$JSCompiler_alias_NULL$$) {
      $label$$28_labelString$$ = new D.$DvtOutputText$$($chart$$73$$.$getCtx$(), $label$$28_labelString$$, 0, 0);
      $label$$28_labelString$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      var $position$$18_size$$17$$ = D.$DvtChartStyleUtils$$.$getDataLabelPosition$($chart$$73$$, $seriesIndex$$19$$, $groupIndex$$11$$, $type$$75$$);
      $dataColor_style$$48_textDim$$3$$ = D.$DvtChartStyleUtils$$.$getDataLabelStyle$($chart$$73$$, $seriesIndex$$19$$, $groupIndex$$11$$, $dataColor_style$$48_textDim$$3$$, $position$$18_size$$17$$, $type$$75$$);
      $label$$28_labelString$$.$setCSSStyle$($dataColor_style$$48_textDim$$3$$);
      $label$$28_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ / 2);
      $label$$28_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ / 2);
      $label$$28_labelString$$.$alignCenter$();
      $label$$28_labelString$$.$alignMiddle$();
      $dataColor_style$$48_textDim$$3$$ = $label$$28_labelString$$.$measureDimensions$();
      if("left" == $position$$18_size$$17$$) {
        $label$$28_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x - $dataColor_style$$48_textDim$$3$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
      }else {
        if("right" == $position$$18_size$$17$$) {
          $label$$28_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ + $dataColor_style$$48_textDim$$3$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
        }else {
          if("top" == $position$$18_size$$17$$) {
            $label$$28_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y - $dataColor_style$$48_textDim$$3$$.$h$ / 2)
          }else {
            if("bottom" == $position$$18_size$$17$$) {
              $label$$28_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ + $dataColor_style$$48_textDim$$3$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
            }else {
              if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$73$$, $seriesIndex$$19$$)) {
                if($dataColor_style$$48_textDim$$3$$.$w$ > $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ || $dataColor_style$$48_textDim$$3$$.$h$ > $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$) {
                  return
                }
                "inLeft" == $position$$18_size$$17$$ ? $label$$28_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $dataColor_style$$48_textDim$$3$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inRight" == $position$$18_size$$17$$ ? $label$$28_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ - $dataColor_style$$48_textDim$$3$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == 
                $position$$18_size$$17$$ ? $label$$28_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $dataColor_style$$48_textDim$$3$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$18_size$$17$$ && $label$$28_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ - $dataColor_style$$48_textDim$$3$$.$h$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
              }else {
                if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$73$$) && ($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ -= 2 * D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ -= 2 * D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $position$$18_size$$17$$ = 
                $label$$28_labelString$$.$getOptimalFontSize$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$), $label$$28_labelString$$.$setFontSize$($position$$18_size$$17$$), !D.$DvtTextUtils$$.$fitText$($label$$28_labelString$$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$, $container$$49$$, D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
                  return
                }
              }
              D.$DvtChartStyleUtils$$.$getPattern$($chart$$73$$, $seriesIndex$$19$$, $groupIndex$$11$$) != D.$JSCompiler_alias_NULL$$ && ($dataColor_style$$48_textDim$$3$$ = $label$$28_labelString$$.$getDimensions$(), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$ = 0.15 * $dataColor_style$$48_textDim$$3$$.$h$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$ = D.$DvtPathUtils$$.$roundedRectangle$($dataColor_style$$48_textDim$$3$$.x - $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$, $dataColor_style$$48_textDim$$3$$.y, 
              $dataColor_style$$48_textDim$$3$$.$w$ + 2 * $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$, $dataColor_style$$48_textDim$$3$$.$h$, 2, 2, 2, 2), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$ = new D.$DvtPath$$($chart$$73$$.$getCtx$(), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$setSolidFill$("#FFFFFF", 0.9), $container$$49$$.$addChild$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$))
            }
          }
        }
      }
      D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$73$$) && $label$$28_labelString$$.$setSolidStroke$("none");
      $container$$49$$.$addChild$($label$$28_labelString$$);
      (0,D.$JSCompiler_StaticMethods_getDataLabels$$)($chart$$73$$).push($label$$28_labelString$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabelForMarker$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabelForMarker$$($chart$$74$$, $container$$50$$, $marker$$3$$) {
  var $groupIndex$$12_logicalObject$$2$$ = $chart$$74$$.$__getEventManager$().$getLogicalObject$($marker$$3$$), $seriesIndex$$20$$ = $groupIndex$$12_logicalObject$$2$$.$getSeriesIndex$(), $groupIndex$$12_logicalObject$$2$$ = $groupIndex$$12_logicalObject$$2$$.$getGroupIndex$();
  if($marker$$3$$ instanceof D.$DvtSimpleMarker$$) {
    var $markerBounds$$ = new D.$DvtRectangle$$($marker$$3$$.$getCx$() - $marker$$3$$.getWidth() / 2, $marker$$3$$.$getCy$() - $marker$$3$$.getHeight() / 2, $marker$$3$$.getWidth(), $marker$$3$$.getHeight());
    D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$74$$, $container$$50$$, $markerBounds$$, $seriesIndex$$20$$, $groupIndex$$12_logicalObject$$2$$, $marker$$3$$.$_dataColor$)
  }else {
    $marker$$3$$ instanceof D.$DvtChartRangeMarker$$ && (D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$74$$, $container$$50$$, (0,D.$JSCompiler_StaticMethods_getBoundingBox1$$)($marker$$3$$), $seriesIndex$$20$$, $groupIndex$$12_logicalObject$$2$$, $marker$$3$$.$_dataColor$, "low"), D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$74$$, $container$$50$$, (0,D.$JSCompiler_StaticMethods_getBoundingBox2$$)($marker$$3$$), $seriesIndex$$20$$, $groupIndex$$12_logicalObject$$2$$, $marker$$3$$.$_dataColor$, 
    "high"))
  }
};
D.$DvtPlotAreaRenderer$$.$_renderScatterBubble$ = function $$DvtPlotAreaRenderer$$$$_renderScatterBubble$$($chart$$75$$, $container$$51$$, $clipGroup$$2$$, $availSpace$$56$$) {
  D.$DvtPlotAreaRenderer$$.$_filterScatterBubble$($chart$$75$$, $availSpace$$56$$);
  for(var $borderColor$$8_defaultStroke$$ = D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$75$$), $borderWidth$$2_markers$$1$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$75$$), $borderColor$$8_defaultStroke$$ = new D.$DvtSolidStroke$$($borderColor$$8_defaultStroke$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$2_markers$$1$$), $borderWidth$$2_markers$$1$$ = [], $seriesCount$$7$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$75$$), $seriesIndex$$21$$ = 0;$seriesIndex$$21$$ < $seriesCount$$7$$;$seriesIndex$$21$$++) {
    "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$75$$, $seriesIndex$$21$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$75$$, $clipGroup$$2$$, $seriesIndex$$21$$, $availSpace$$56$$);
    var $seriesMarkers$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$75$$, $seriesIndex$$21$$, $availSpace$$56$$, $borderColor$$8_defaultStroke$$), $borderWidth$$2_markers$$1$$ = $borderWidth$$2_markers$$1$$.concat($seriesMarkers$$)
  }
  D.$DvtChartMarkerUtils$$.$sortMarkers$($borderWidth$$2_markers$$1$$);
  D.$DvtChartTypeUtils$$.$isBubble$($chart$$75$$) ? D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$75$$, $clipGroup$$2$$, $borderWidth$$2_markers$$1$$, $borderColor$$8_defaultStroke$$) : D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$75$$, $container$$51$$, $borderWidth$$2_markers$$1$$, $borderColor$$8_defaultStroke$$)
};
D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderMarkersForSeries$$($chart$$76$$, $container$$52$$, $markers$$2_seriesIndex$$22$$, $availSpace$$57$$) {
  var $borderColor$$9_defaultStroke$$1$$ = D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$76$$, $markers$$2_seriesIndex$$22$$), $borderWidth$$3$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$76$$, $markers$$2_seriesIndex$$22$$), $borderColor$$9_defaultStroke$$1$$ = new D.$DvtSolidStroke$$($borderColor$$9_defaultStroke$$1$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$3$$);
  $markers$$2_seriesIndex$$22$$ = D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$76$$, $markers$$2_seriesIndex$$22$$) ? D.$DvtPlotAreaRenderer$$.$_getRangeMarkersForSeries$($chart$$76$$, $markers$$2_seriesIndex$$22$$, $availSpace$$57$$) : D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$76$$, $markers$$2_seriesIndex$$22$$, $availSpace$$57$$, $borderColor$$9_defaultStroke$$1$$);
  D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$76$$, $container$$52$$, $markers$$2_seriesIndex$$22$$, $borderColor$$9_defaultStroke$$1$$)
};
D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$ = function $$DvtPlotAreaRenderer$$$$_addMarkersToContainer$$($chart$$77$$, $container$$53_i$$157$$, $markers$$3$$, $defaultStroke$$2$$) {
  var $markerContainer$$ = $container$$53_i$$157$$;
  D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$77$$) && ($markerContainer$$ = new D.$DvtContainer$$($chart$$77$$.$getCtx$()), $markerContainer$$.$setStroke$($defaultStroke$$2$$), $container$$53_i$$157$$.$addChild$($markerContainer$$));
  for($container$$53_i$$157$$ = 0;$container$$53_i$$157$$ < $markers$$3$$.length;$container$$53_i$$157$$++) {
    $markerContainer$$.$addChild$($markers$$3$$[$container$$53_i$$157$$]), D.$DvtPlotAreaRenderer$$.$_renderDataLabelForMarker$($chart$$77$$, $markerContainer$$, $markers$$3$$[$container$$53_i$$157$$])
  }
  $chart$$77$$.$_currentMarkers$.push($markers$$3$$)
};
D.$DvtPlotAreaRenderer$$.$_getMarkerInfo$ = function $$DvtPlotAreaRenderer$$$$_getMarkerInfo$$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$, $availSpace$$58_pos$$10$$) {
  var $options$$52_shape$$24$$ = $chart$$78_markerSize$$.$getOptions$(), $isPolar$$2_prevValue$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$78_markerSize$$), $nextIndex$$1_nextValue$$2_numGroups$$2$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$78_markerSize$$), $bMarkerDisplayed_dataValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  if($bMarkerDisplayed_dataValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($bMarkerDisplayed_dataValue$$) || D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$) || !D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $availSpace$$58_pos$$10$$ = D.$DvtChartDataUtils$$.$getMarkerPosition$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$, $availSpace$$58_pos$$10$$);
  if(!$availSpace$$58_pos$$10$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $bMarkerDisplayed_dataValue$$ = D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  if(!$bMarkerDisplayed_dataValue$$) {
    if("next" != $chart$$78_markerSize$$.$getSkin$() && D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$78_markerSize$$)) {
      2 > $nextIndex$$1_nextValue$$2_numGroups$$2$$ && ($bMarkerDisplayed_dataValue$$ = D.$JSCompiler_alias_TRUE$$)
    }else {
      var $lastIndex$$1$$ = $nextIndex$$1_nextValue$$2_numGroups$$2$$ - 1, $nextIndex$$1_nextValue$$2_numGroups$$2$$ = $isPolar$$2_prevValue$$ && 0 < $lastIndex$$1$$ && $groupIndex$$13$$ == $lastIndex$$1$$ ? 0 : $groupIndex$$13$$ + 1, $isPolar$$2_prevValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$78_markerSize$$, $seriesIndex$$23$$, $isPolar$$2_prevValue$$ && 0 < $lastIndex$$1$$ && 0 == $groupIndex$$13$$ ? $lastIndex$$1$$ : $groupIndex$$13$$ - 1), $nextIndex$$1_nextValue$$2_numGroups$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$78_markerSize$$, 
      $seriesIndex$$23$$, $nextIndex$$1_nextValue$$2_numGroups$$2$$);
      if(($isPolar$$2_prevValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($isPolar$$2_prevValue$$)) && ($nextIndex$$1_nextValue$$2_numGroups$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($nextIndex$$1_nextValue$$2_numGroups$$2$$))) {
        $bMarkerDisplayed_dataValue$$ = D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  if(($options$$52_shape$$24$$._duringAnimation || D.$DvtChartTypeUtils$$.$isOverview$($chart$$78_markerSize$$) || D.$DvtChartTypeUtils$$.$isSpark$($chart$$78_markerSize$$)) && !$bMarkerDisplayed_dataValue$$ && !D.$DvtChartDataUtils$$.$isDataSelected$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $options$$52_shape$$24$$ = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  $chart$$78_markerSize$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$78_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  return{$seriesIndex$:$seriesIndex$$23$$, $groupIndex$:$groupIndex$$13$$, x:$availSpace$$58_pos$$10$$.x, y:$availSpace$$58_pos$$10$$.y, shape:$options$$52_shape$$24$$, size:$chart$$78_markerSize$$, $markerDisplayed$:$bMarkerDisplayed_dataValue$$}
};
D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$79$$, $seriesIndex$$24$$, $availSpace$$59$$, $defaultBorderWidth_defaultStroke$$3$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$79$$, $seriesIndex$$24$$)) {
    return[]
  }
  var $isTouchDevice$$1$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $context$$38$$ = $chart$$79$$.$getCtx$(), $bOptimizeStroke$$ = D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$79$$), $defaultBorderColor$$ = $bOptimizeStroke$$ ? $defaultBorderWidth_defaultStroke$$3$$.$getColor$() : D.$JSCompiler_alias_NULL$$;
  $defaultBorderWidth_defaultStroke$$3$$ = $bOptimizeStroke$$ ? $defaultBorderWidth_defaultStroke$$3$$.getWidth() : D.$JSCompiler_alias_NULL$$;
  for(var $markers$$4$$ = [], $numGroups$$3$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$79$$), $groupIndex$$14$$ = 0;$groupIndex$$14$$ < $numGroups$$3$$;$groupIndex$$14$$++) {
    var $markerInfo$$ = D.$DvtPlotAreaRenderer$$.$_getMarkerInfo$($chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$, $availSpace$$59$$);
    if($markerInfo$$) {
      var $marker$$4$$ = D.$JSCompiler_alias_NULL$$, $dataColor$$1_hoverColor$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$);
      if($markerInfo$$.$markerDisplayed$) {
        $marker$$4$$ = new D.$DvtSimpleMarker$$($context$$38$$, $markerInfo$$.shape, $chart$$79$$.$getSkin$(), $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $markerInfo$$.size);
        D.$DvtChartStyleUtils$$.$isSelectable$($chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$) && $marker$$4$$.setCursor("pointer");
        $marker$$4$$.$setFill$(D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$));
        var $borderColor$$10_innerColor$$ = D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$), $borderWidth$$4_outerColor$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$);
        ($borderColor$$10_innerColor$$ != $defaultBorderColor$$ || $borderWidth$$4_outerColor$$ != $defaultBorderWidth_defaultStroke$$3$$) && $marker$$4$$.$setSolidStroke$($borderColor$$10_innerColor$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$4_outerColor$$);
        $marker$$4$$.$setDataColor$($dataColor$$1_hoverColor$$, D.$JSCompiler_alias_TRUE$$);
        $dataColor$$1_hoverColor$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$1_hoverColor$$);
        $borderColor$$10_innerColor$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$79$$);
        $borderWidth$$4_outerColor$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$79$$);
        $marker$$4$$.$setHoverStroke$(new D.$DvtSolidStroke$$($borderColor$$10_innerColor$$, 1, 1), new D.$DvtSolidStroke$$($dataColor$$1_hoverColor$$, 1, 3.5));
        $marker$$4$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($borderColor$$10_innerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($borderWidth$$4_outerColor$$, 1, 4.5));
        $marker$$4$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($borderColor$$10_innerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($dataColor$$1_hoverColor$$, 1, 4.5));
        $isTouchDevice$$1$$ && $markerInfo$$.size < D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && D.$DvtPlotAreaRenderer$$.$_addMarkerHitArea$($marker$$4$$, $markerInfo$$.x, $markerInfo$$.y, $bOptimizeStroke$$)
      }else {
        D.$DvtChartStyleUtils$$.$isSelectable$($chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$) ? ($marker$$4$$ = new D.$DvtChartLineMarker$$($context$$38$$, $markerInfo$$.shape, $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $bOptimizeStroke$$), $marker$$4$$.setCursor("pointer"), $isTouchDevice$$1$$ && D.$DvtPlotAreaRenderer$$.$_addMarkerHitArea$($marker$$4$$, $markerInfo$$.x, $markerInfo$$.y, $bOptimizeStroke$$)) : ($isTouchDevice$$1$$ && ($markerInfo$$.size = D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), 
        $marker$$4$$ = new D.$DvtChartLineMarker$$($context$$38$$, "square", $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $bOptimizeStroke$$)), $marker$$4$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($marker$$4$$), $marker$$4$$.$setDataColor$($dataColor$$1_hoverColor$$))
      }
      $marker$$4$$ != D.$JSCompiler_alias_NULL$$ && ($markers$$4$$.push($marker$$4$$), (0,D.$DvtChartObjPeer$associate$$)($marker$$4$$, $chart$$79$$, $seriesIndex$$24$$, $groupIndex$$14$$, $markerInfo$$))
    }
  }
  return $markers$$4$$
};
D.$DvtPlotAreaRenderer$$.$_addMarkerHitArea$ = function $$DvtPlotAreaRenderer$$$$_addMarkerHitArea$$($marker$$5$$, $hitArea$$1_x$$76$$, $y$$55$$, $bOptimizeStroke$$1$$) {
  $hitArea$$1_x$$76$$ = new D.$DvtRect$$($marker$$5$$.$getCtx$(), $hitArea$$1_x$$76$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $y$$55$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$);
  $bOptimizeStroke$$1$$ && $hitArea$$1_x$$76$$.$setSolidStroke$("none");
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1_x$$76$$);
  $marker$$5$$.$addChild$($hitArea$$1_x$$76$$)
};
D.$DvtPlotAreaRenderer$$.$_getRangeMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getRangeMarkersForSeries$$($chart$$80$$, $seriesIndex$$25$$, $availSpace$$60$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$80$$, $seriesIndex$$25$$)) {
    return[]
  }
  for(var $isTouchDevice$$2$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $context$$39$$ = $chart$$80$$.$getCtx$(), $xAxis$$ = $chart$$80$$.$xAxis$, $yAxis$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$80$$, $seriesIndex$$25$$) ? $chart$$80$$.$y2Axis$ : $chart$$80$$.$yAxis$, $options$$53$$ = $chart$$80$$.$getOptions$(), $numGroups$$4$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$80$$), $markers$$5$$ = [], $groupIndex$$15$$ = 0;$groupIndex$$15$$ < $numGroups$$4$$;$groupIndex$$15$$++) {
    if(!D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$) && D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$)) {
      var $dataPos$$3_xCoord$$1$$ = $xAxis$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getXValue$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$)), $hitArea$$2_lowCoord_pLow$$ = $yAxis$$.$getUnboundedCoordAt$(D.$DvtChartDataUtils$$.$getLowValue$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$)), $highCoord_markerSize$$1$$ = $yAxis$$.$getUnboundedCoordAt$(D.$DvtChartDataUtils$$.$getHighValue$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$));
      if(!($dataPos$$3_xCoord$$1$$ == D.$JSCompiler_alias_NULL$$ || $hitArea$$2_lowCoord_pLow$$ == D.$JSCompiler_alias_NULL$$ || $highCoord_markerSize$$1$$ == D.$JSCompiler_alias_NULL$$)) {
        var $bMarkerDisplayed$$1_marker$$6$$ = D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$);
        if(!$options$$53$$._duringAnimation && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$80$$) && !D.$DvtChartTypeUtils$$.$isSpark$($chart$$80$$) || $bMarkerDisplayed$$1_marker$$6$$ || D.$DvtChartDataUtils$$.$isDataSelected$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$)) {
          var $hitArea$$2_lowCoord_pLow$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$80$$, new D.$DvtPoint$$($dataPos$$3_xCoord$$1$$, $hitArea$$2_lowCoord_pLow$$), $availSpace$$60$$), $pHigh$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$80$$, new D.$DvtPoint$$($dataPos$$3_xCoord$$1$$, $highCoord_markerSize$$1$$), $availSpace$$60$$), $dataPos$$3_xCoord$$1$$ = new D.$DvtPoint$$(($hitArea$$2_lowCoord_pLow$$.x + $pHigh$$.x) / 2, ($hitArea$$2_lowCoord_pLow$$.y + $pHigh$$.y) / 2), 
          $highCoord_markerSize$$1$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$), $bMarkerDisplayed$$1_marker$$6$$ = new D.$DvtChartRangeMarker$$($context$$39$$, $hitArea$$2_lowCoord_pLow$$.x, $hitArea$$2_lowCoord_pLow$$.y, $pHigh$$.x, $pHigh$$.y, $highCoord_markerSize$$1$$, !$bMarkerDisplayed$$1_marker$$6$$), $fill$$2$$ = D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$), $borderColor$$11_stroke$$6$$ = 
          D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$), $borderWidth$$5_dataColor$$2$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$), $borderColor$$11_stroke$$6$$ = new D.$DvtSolidStroke$$($borderColor$$11_stroke$$6$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$5_dataColor$$2$$), $borderWidth$$5_dataColor$$2$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$), 
          $innerColor$$1$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$80$$), $outerColor$$1$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$80$$);
          $bMarkerDisplayed$$1_marker$$6$$.$setStyleProperties$($fill$$2$$, $borderColor$$11_stroke$$6$$, $borderWidth$$5_dataColor$$2$$, $innerColor$$1$$, $outerColor$$1$$);
          D.$DvtChartStyleUtils$$.$isSelectable$($chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$) && $bMarkerDisplayed$$1_marker$$6$$.setCursor("pointer");
          $hitArea$$2_lowCoord_pLow$$ = new D.$DvtLine$$($context$$39$$, $hitArea$$2_lowCoord_pLow$$.x, $hitArea$$2_lowCoord_pLow$$.y, $pHigh$$.x, $pHigh$$.y);
          $hitArea$$2_lowCoord_pLow$$.$setSolidStroke$("rgba(0,0,0,0)", D.$JSCompiler_alias_NULL$$, $isTouchDevice$$2$$ ? window.Math.max($highCoord_markerSize$$1$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$) : $highCoord_markerSize$$1$$);
          $bMarkerDisplayed$$1_marker$$6$$.$addChild$($hitArea$$2_lowCoord_pLow$$);
          $markers$$5$$.push($bMarkerDisplayed$$1_marker$$6$$);
          (0,D.$DvtChartObjPeer$associate$$)($bMarkerDisplayed$$1_marker$$6$$, $chart$$80$$, $seriesIndex$$25$$, $groupIndex$$15$$, $dataPos$$3_xCoord$$1$$)
        }
      }
    }
  }
  return $markers$$5$$
};
D.$DvtPlotAreaRenderer$$.$_renderBars$ = function $$DvtPlotAreaRenderer$$$$_renderBars$$($chart$$81$$, $container$$54$$, $availSpace$$61$$) {
  for(var $bHoriz$$4$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$81$$), $bPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$81$$), $bStock$$ = D.$DvtChartTypeUtils$$.$isStock$($chart$$81$$), $bPixelSpacing$$ = "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$81$$), $isR2L$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$81$$.$getCtx$()), $groupIndex$$16$$ = 0;$groupIndex$$16$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$81$$);$groupIndex$$16$$++) {
    for(var $seriesIndex$$26$$ = 0;$seriesIndex$$26$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$81$$);$seriesIndex$$26$$++) {
      if(D.$DvtChartDataUtils$$.$isDataItemInViewport$($chart$$81$$, $seriesIndex$$26$$, $groupIndex$$16$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$81$$, $seriesIndex$$26$$)) {
        var $barData_markers$$6$$ = D.$DvtChartDataUtils$$.$getBarInfo$($chart$$81$$, $seriesIndex$$26$$, $groupIndex$$16$$, $availSpace$$61$$);
        if($barData_markers$$6$$ != D.$JSCompiler_alias_NULL$$) {
          var $shape$$25_yCoord$$1$$ = $barData_markers$$6$$.$yCoord$, $baseCoord_stroke$$7$$ = $barData_markers$$6$$.$baseCoord$, $axisCoord_borderWidth$$6_innerColor$$2$$ = $barData_markers$$6$$.$axisCoord$, $outerColor$$2_x1$$6$$ = $barData_markers$$6$$.$x1$, $x2$$4$$ = $barData_markers$$6$$.$x2$, $barWidth_fill$$3$$ = $barData_markers$$6$$.$barWidth$, $bInvisible_borderColor$$12_dataColor$$3$$ = D.$JSCompiler_alias_FALSE$$;
          1 > window.Math.abs($shape$$25_yCoord$$1$$ - $baseCoord_stroke$$7$$) && (D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$81$$, $seriesIndex$$26$$) ? $shape$$25_yCoord$$1$$-- : ($bInvisible_borderColor$$12_dataColor$$3$$ = D.$JSCompiler_alias_TRUE$$, $shape$$25_yCoord$$1$$ = $shape$$25_yCoord$$1$$ > $baseCoord_stroke$$7$$ || $bHoriz$$4$$ && !$isR2L$$5$$ && $shape$$25_yCoord$$1$$ == $baseCoord_stroke$$7$$ ? $baseCoord_stroke$$7$$ + 3 : $baseCoord_stroke$$7$$ - 3));
          $shape$$25_yCoord$$1$$ = $bPolar$$ ? new D.$DvtChartPolarBar$$($chart$$81$$, $axisCoord_borderWidth$$6_innerColor$$2$$, $baseCoord_stroke$$7$$, $shape$$25_yCoord$$1$$, $outerColor$$2_x1$$6$$, $x2$$4$$, $availSpace$$61$$) : new D.$DvtChartBar$$($chart$$81$$, $axisCoord_borderWidth$$6_innerColor$$2$$, $baseCoord_stroke$$7$$, $shape$$25_yCoord$$1$$, $outerColor$$2_x1$$6$$, $x2$$4$$);
          $container$$54$$.$addChild$($shape$$25_yCoord$$1$$);
          D.$DvtChartStyleUtils$$.$isSelectable$($chart$$81$$, $seriesIndex$$26$$, $groupIndex$$16$$) && $shape$$25_yCoord$$1$$.setCursor("pointer");
          $baseCoord_stroke$$7$$ = D.$JSCompiler_alias_NULL$$;
          $bInvisible_borderColor$$12_dataColor$$3$$ ? $barWidth_fill$$3$$ = (0,D.$DvtSolidFill$invisibleFill$$)() : ($barWidth_fill$$3$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$81$$, $seriesIndex$$26$$, $groupIndex$$16$$, $bHoriz$$4$$, $barWidth_fill$$3$$), $bInvisible_borderColor$$12_dataColor$$3$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$81$$, $seriesIndex$$26$$, $groupIndex$$16$$), $axisCoord_borderWidth$$6_innerColor$$2$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$81$$, 
          $seriesIndex$$26$$, $groupIndex$$16$$), $bInvisible_borderColor$$12_dataColor$$3$$ && ($baseCoord_stroke$$7$$ = new D.$DvtSolidStroke$$($bInvisible_borderColor$$12_dataColor$$3$$, D.$JSCompiler_alias_NULL$$, $axisCoord_borderWidth$$6_innerColor$$2$$)));
          $bInvisible_borderColor$$12_dataColor$$3$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$81$$, $seriesIndex$$26$$, $groupIndex$$16$$);
          $axisCoord_borderWidth$$6_innerColor$$2$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$81$$);
          $outerColor$$2_x1$$6$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$81$$);
          $shape$$25_yCoord$$1$$.$setStyleProperties$($barWidth_fill$$3$$, $baseCoord_stroke$$7$$, $bInvisible_borderColor$$12_dataColor$$3$$, $axisCoord_borderWidth$$6_innerColor$$2$$, $outerColor$$2_x1$$6$$);
          $bPixelSpacing$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($shape$$25_yCoord$$1$$);
          (0,D.$DvtChartObjPeer$associate$$)($shape$$25_yCoord$$1$$, $chart$$81$$, $seriesIndex$$26$$, $groupIndex$$16$$, $barData_markers$$6$$.$dataPos$);
          D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$81$$, $seriesIndex$$26$$) ? (D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$81$$, $container$$54$$, $shape$$25_yCoord$$1$$.$getBoundingBox$(), $seriesIndex$$26$$, $groupIndex$$16$$, $bInvisible_borderColor$$12_dataColor$$3$$, "low"), D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$81$$, $container$$54$$, $shape$$25_yCoord$$1$$.$getBoundingBox$(), $seriesIndex$$26$$, $groupIndex$$16$$, $bInvisible_borderColor$$12_dataColor$$3$$, "high")) : 
          D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$81$$, $container$$54$$, $shape$$25_yCoord$$1$$.$getBoundingBox$(), $seriesIndex$$26$$, $groupIndex$$16$$, $bInvisible_borderColor$$12_dataColor$$3$$);
          $barData_markers$$6$$ = [];
          $barData_markers$$6$$.push($shape$$25_yCoord$$1$$);
          $bStock$$ && 0 != $seriesIndex$$26$$ || $chart$$81$$.$_currentMarkers$.push($barData_markers$$6$$)
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderStock$ = function $$DvtPlotAreaRenderer$$$$_renderStock$$($chart$$82$$, $container$$55$$) {
  var $options$$54$$ = $chart$$82$$.$getOptions$(), $xAxis$$1$$ = $chart$$82$$.$xAxis$, $yAxis$$1$$ = $chart$$82$$.$yAxis$;
  if("candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$82$$, 0)) {
    for(var $groupIndex$$17$$ = 0;$groupIndex$$17$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$82$$);$groupIndex$$17$$++) {
      if(D.$DvtChartDataUtils$$.$isDataItemInViewport$($chart$$82$$, 0, $groupIndex$$17$$)) {
        var $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$82$$, 0, $groupIndex$$17$$), $dataItem$$5_openCoord$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$82$$, 0, $groupIndex$$17$$), $openValue$$, $closeValue$$, $lowValue$$, $candlestick_highValue$$ = D.$JSCompiler_alias_NULL$$;
        $dataItem$$5_openCoord$$ && ($openValue$$ = $dataItem$$5_openCoord$$.open, $closeValue$$ = $dataItem$$5_openCoord$$.close, $lowValue$$ = $dataItem$$5_openCoord$$.low, $candlestick_highValue$$ = $dataItem$$5_openCoord$$.high);
        var $renderRange_stroke$$8$$ = $lowValue$$ != D.$JSCompiler_alias_NULL$$ && $candlestick_highValue$$ != D.$JSCompiler_alias_NULL$$;
        if(!($openValue$$ == D.$JSCompiler_alias_NULL$$ || $closeValue$$ == D.$JSCompiler_alias_NULL$$)) {
          var $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = $xAxis$$1$$.$getUnboundedCoordAt$($dataPos$$4_markers$$7_xCoord$$2_xValue$$), $barWidth$$1_fill$$4_fill$$inline_2251$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$82$$, 0, $groupIndex$$17$$), $dataItem$$5_openCoord$$ = $yAxis$$1$$.$getBoundedCoordAt$($openValue$$), $closeCoord$$ = $yAxis$$1$$.$getBoundedCoordAt$($closeValue$$), $lowCoord$$1$$, $borderColor$$13_highCoord$$1_outerColor$$3$$ = D.$JSCompiler_alias_NULL$$;
          $renderRange_stroke$$8$$ && ($lowCoord$$1$$ = $yAxis$$1$$.$getBoundedCoordAt$($lowValue$$), $borderColor$$13_highCoord$$1_outerColor$$3$$ = $yAxis$$1$$.$getBoundedCoordAt$($candlestick_highValue$$));
          $candlestick_highValue$$ = new D.$DvtChartCandlestick$$($chart$$82$$.$getCtx$(), $dataPos$$4_markers$$7_xCoord$$2_xValue$$, $barWidth$$1_fill$$4_fill$$inline_2251$$, $dataItem$$5_openCoord$$, $closeCoord$$, $lowCoord$$1$$, $borderColor$$13_highCoord$$1_outerColor$$3$$);
          $container$$55$$.$addChild$($candlestick_highValue$$);
          D.$DvtChartStyleUtils$$.$isSelectable$($chart$$82$$, 0, $groupIndex$$17$$) && $candlestick_highValue$$.setCursor("pointer");
          var $barWidth$$1_fill$$4_fill$$inline_2251$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$82$$, 0, $groupIndex$$17$$, D.$JSCompiler_alias_FALSE$$, $barWidth$$1_fill$$4_fill$$inline_2251$$), $renderRange_stroke$$8$$ = D.$JSCompiler_alias_NULL$$, $borderColor$$13_highCoord$$1_outerColor$$3$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$82$$, 0, $groupIndex$$17$$), $borderWidth$$7_rangeColor$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$82$$, 0, $groupIndex$$17$$);
          $borderColor$$13_highCoord$$1_outerColor$$3$$ ? $renderRange_stroke$$8$$ = new D.$DvtSolidStroke$$($borderColor$$13_highCoord$$1_outerColor$$3$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$7_rangeColor$$) : $barWidth$$1_fill$$4_fill$$inline_2251$$ instanceof D.$DvtPatternFill$$ && ($renderRange_stroke$$8$$ = new D.$DvtSolidStroke$$($barWidth$$1_fill$$4_fill$$inline_2251$$.$getColor$(), D.$JSCompiler_alias_NULL$$, $borderWidth$$7_rangeColor$$));
          var $dataColor$$4$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$82$$, 0, $groupIndex$$17$$), $innerColor$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$82$$), $borderColor$$13_highCoord$$1_outerColor$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$82$$), $borderWidth$$7_rangeColor$$ = $options$$54$$.styleDefaults.stockRangeColor;
          $candlestick_highValue$$.$_changeShape$.$setStyleProperties$($barWidth$$1_fill$$4_fill$$inline_2251$$, $renderRange_stroke$$8$$, $dataColor$$4$$, $innerColor$$3$$, $borderColor$$13_highCoord$$1_outerColor$$3$$);
          $barWidth$$1_fill$$4_fill$$inline_2251$$ = new D.$DvtSolidFill$$($borderWidth$$7_rangeColor$$);
          $candlestick_highValue$$.$_rangeShape$ && $candlestick_highValue$$.$_rangeShape$.$setStyleProperties$($barWidth$$1_fill$$4_fill$$inline_2251$$, $renderRange_stroke$$8$$, $borderWidth$$7_rangeColor$$, D.$JSCompiler_alias_NULL$$, $borderColor$$13_highCoord$$1_outerColor$$3$$);
          $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = new D.$DvtPoint$$($dataPos$$4_markers$$7_xCoord$$2_xValue$$, ($dataItem$$5_openCoord$$ + $closeCoord$$) / 2);
          (0,D.$DvtChartObjPeer$associate$$)($candlestick_highValue$$, $chart$$82$$, 0, $groupIndex$$17$$, $dataPos$$4_markers$$7_xCoord$$2_xValue$$);
          $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = [];
          $dataPos$$4_markers$$7_xCoord$$2_xValue$$.push($candlestick_highValue$$.$_changeShape$);
          $chart$$82$$.$_currentMarkers$.push($dataPos$$4_markers$$7_xCoord$$2_xValue$$)
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLines$ = function $$DvtPlotAreaRenderer$$$$_renderLines$$($chart$$83$$, $container$$56$$, $clipGroup$$3$$, $availSpace$$63$$) {
  var $lineSeries$$ = [], $seriesIndex$$27$$, $lineIndex_seriesCount$$8$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$83$$);
  for($seriesIndex$$27$$ = 0;$seriesIndex$$27$$ < $lineIndex_seriesCount$$8$$;$seriesIndex$$27$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$83$$, $seriesIndex$$27$$) && "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$83$$, $seriesIndex$$27$$) && $lineSeries$$.push($seriesIndex$$27$$)
  }
  for($lineIndex_seriesCount$$8$$ = 0;$lineIndex_seriesCount$$8$$ < $lineSeries$$.length;$lineIndex_seriesCount$$8$$++) {
    $seriesIndex$$27$$ = $lineSeries$$[$lineIndex_seriesCount$$8$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$83$$, $seriesIndex$$27$$) && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$83$$) || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$83$$, $seriesIndex$$27$$), D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$83$$, $clipGroup$$3$$, $seriesIndex$$27$$, $availSpace$$63$$))
  }
  for($lineIndex_seriesCount$$8$$ = 0;$lineIndex_seriesCount$$8$$ < $lineSeries$$.length;$lineIndex_seriesCount$$8$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$83$$, $container$$56$$, $lineSeries$$[$lineIndex_seriesCount$$8$$], $availSpace$$63$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderAreas$ = function $$DvtPlotAreaRenderer$$$$_renderAreas$$($chart$$84$$, $container$$57$$, $availSpace$$64$$, $isLineWithArea$$) {
  for(var $seriesCount$$9$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$84$$), $seriesType$$3$$ = $isLineWithArea$$ ? "lineWithArea" : "area", $yAreaSeries$$ = [], $y2AreaSeries$$ = [], $seriesIndex$$28$$ = 0;$seriesIndex$$28$$ < $seriesCount$$9$$;$seriesIndex$$28$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$84$$, $seriesIndex$$28$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$84$$, $seriesIndex$$28$$) == $seriesType$$3$$ && (D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$84$$, $seriesIndex$$28$$) ? $y2AreaSeries$$.push($seriesIndex$$28$$) : $yAreaSeries$$.push($seriesIndex$$28$$))
  }
  0 < $yAreaSeries$$.length && D.$DvtPlotAreaRenderer$$.$_renderAreasForAxis$($chart$$84$$, $container$$57$$, $yAreaSeries$$, $chart$$84$$.$yAxis$.$getBaselineCoord$(), $availSpace$$64$$, $isLineWithArea$$);
  0 < $y2AreaSeries$$.length && D.$DvtPlotAreaRenderer$$.$_renderAreasForAxis$($chart$$84$$, $container$$57$$, $y2AreaSeries$$, $chart$$84$$.$y2Axis$.$getBaselineCoord$(), $availSpace$$64$$, $isLineWithArea$$)
};
D.$DvtPlotAreaRenderer$$.$_renderAreasForAxis$ = function $$DvtPlotAreaRenderer$$$$_renderAreasForAxis$$($chart$$85$$, $container$$58$$, $areaSeries$$, $baselineCoord$$2_hasBorder$$, $availSpace$$65$$, $isLineWithArea$$1$$) {
  for(var $bStacked$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$85$$), $bPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$85$$), $clippedGroup$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$85$$, $container$$58$$, $availSpace$$65$$), $prevCoordsMap$$ = {}, $prevTypeMap$$ = {}, $baselineCoords$$ = [], $areaIndex_i$$158$$ = 0;$areaIndex_i$$158$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$85$$);$areaIndex_i$$158$$++) {
    $baselineCoords$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, $baselineCoord$$2_hasBorder$$, $baselineCoord$$2_hasBorder$$, $areaIndex_i$$158$$, D.$DvtChartDataUtils$$.$getGroup$($chart$$85$$, $areaIndex_i$$158$$), D.$JSCompiler_alias_TRUE$$))
  }
  for($areaIndex_i$$158$$ = 0;$areaIndex_i$$158$$ < $areaSeries$$.length;$areaIndex_i$$158$$++) {
    var $seriesIndex$$29$$ = $areaSeries$$[$areaIndex_i$$158$$], $category$$3$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$85$$, $seriesIndex$$29$$), $baseCoords$$1_prevCoords$$ = $prevCoordsMap$$[$category$$3$$], $baseType_prevType$$ = $prevTypeMap$$[$category$$3$$];
    if("none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$85$$, $seriesIndex$$29$$)) {
      D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$85$$, $container$$58$$, $seriesIndex$$29$$, $availSpace$$65$$)
    }else {
      var $area_fill$$5$$ = D.$DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$85$$, $seriesIndex$$29$$), $borderColor$$14$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$85$$, $seriesIndex$$29$$), $borderWidth$$8_type$$76$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$85$$, $seriesIndex$$29$$), $stroke$$9$$ = $borderColor$$14$$ ? new D.$DvtSolidStroke$$($borderColor$$14$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$8_type$$76$$) : D.$JSCompiler_alias_NULL$$, $borderWidth$$8_type$$76$$ = 
      D.$DvtChartStyleUtils$$.$getLineType$($chart$$85$$, $seriesIndex$$29$$);
      $bPolar$$1$$ || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$85$$, $seriesIndex$$29$$);
      var $coords$$9$$;
      D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$85$$, $seriesIndex$$29$$) ? ($coords$$9$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$85$$, $seriesIndex$$29$$, "high"), $baseCoords$$1_prevCoords$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$85$$, $seriesIndex$$29$$, "low"), $baseType_prevType$$ = $borderWidth$$8_type$$76$$) : ($coords$$9$$ = D.$DvtPlotAreaRenderer$$.$_getAreaCoordsForSeries$($chart$$85$$, $seriesIndex$$29$$, $baseCoords$$1_prevCoords$$ ? $baseCoords$$1_prevCoords$$ : 
      $baselineCoords$$), $baseCoords$$1_prevCoords$$ = $baseCoords$$1_prevCoords$$ ? $baseCoords$$1_prevCoords$$ : []);
      $area_fill$$5$$ = new D.$DvtChartLineArea$$($chart$$85$$, D.$JSCompiler_alias_TRUE$$, $availSpace$$65$$, $baselineCoord$$2_hasBorder$$, $area_fill$$5$$, $stroke$$9$$, $borderWidth$$8_type$$76$$, $coords$$9$$, $baseType_prevType$$, $baseCoords$$1_prevCoords$$);
      $clippedGroup$$.$addChild$($area_fill$$5$$);
      $chart$$85$$.$_currentAreas$.push($area_fill$$5$$);
      (0,D.$DvtChartObjPeer$associate$$)($area_fill$$5$$, $chart$$85$$, $seriesIndex$$29$$);
      $prevCoordsMap$$[$category$$3$$] = $coords$$9$$;
      $prevTypeMap$$[$category$$3$$] = $borderWidth$$8_type$$76$$;
      $bStacked$$ || (($isLineWithArea$$1$$ || 0 < D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$85$$) && !$borderColor$$14$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$85$$, $clippedGroup$$, $seriesIndex$$29$$, $availSpace$$65$$, !$isLineWithArea$$1$$), $isLineWithArea$$1$$ || D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$85$$, $container$$58$$, $seriesIndex$$29$$, $availSpace$$65$$), $areaIndex_i$$158$$ + 1 < $areaSeries$$.length && ($clippedGroup$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$85$$, 
      $container$$58$$, $availSpace$$65$$)))
    }
  }
  for($areaIndex_i$$158$$ = 0;$areaIndex_i$$158$$ < $areaSeries$$.length;$areaIndex_i$$158$$++) {
    $seriesIndex$$29$$ = $areaSeries$$[$areaIndex_i$$158$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$85$$, $seriesIndex$$29$$) && ($baselineCoord$$2_hasBorder$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$85$$, $seriesIndex$$29$$) || D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$85$$, $seriesIndex$$29$$ + 1), $bStacked$$ && ($isLineWithArea$$1$$ || 0 < D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$85$$) && !$baselineCoord$$2_hasBorder$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$85$$, 
    $clippedGroup$$, $seriesIndex$$29$$, $availSpace$$65$$, !$isLineWithArea$$1$$), ($bStacked$$ || $isLineWithArea$$1$$) && D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$85$$, $container$$58$$, $seriesIndex$$29$$, $availSpace$$65$$))
  }
};
D.$DvtPlotAreaRenderer$$.$_getAreaCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getAreaCoordsForSeries$$($bPolar$$2_chart$$86$$, $rawCoords_seriesIndex$$30$$, $lastIndex$$2_prevCoords$$1$$) {
  $rawCoords_seriesIndex$$30$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($bPolar$$2_chart$$86$$, $rawCoords_seriesIndex$$30$$);
  for(var $coords$$10$$ = [], $i$$159$$ = 0;$i$$159$$ < $lastIndex$$2_prevCoords$$1$$.length;$i$$159$$++) {
    $coords$$10$$.push($lastIndex$$2_prevCoords$$1$$[$i$$159$$].$clone$())
  }
  $lastIndex$$2_prevCoords$$1$$ = $rawCoords_seriesIndex$$30$$.length - 1;
  $bPolar$$2_chart$$86$$ = D.$DvtChartTypeUtils$$.$isPolar$($bPolar$$2_chart$$86$$);
  for($i$$159$$ = 0;$i$$159$$ < $rawCoords_seriesIndex$$30$$.length;$i$$159$$++) {
    if($rawCoords_seriesIndex$$30$$[$i$$159$$].x != D.$JSCompiler_alias_NULL$$) {
      var $coord$$18$$ = $coords$$10$$[$rawCoords_seriesIndex$$30$$[$i$$159$$].$groupIndex$], $prevIndex$$1$$ = $bPolar$$2_chart$$86$$ && 0 == $i$$159$$ ? $lastIndex$$2_prevCoords$$1$$ : $i$$159$$ - 1, $nextIndex$$2$$ = $bPolar$$2_chart$$86$$ && $i$$159$$ == $lastIndex$$2_prevCoords$$1$$ ? 0 : $i$$159$$ + 1;
      0 <= $prevIndex$$1$$ && $rawCoords_seriesIndex$$30$$[$prevIndex$$1$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$18$$.$y1$ = $rawCoords_seriesIndex$$30$$[$i$$159$$].$y1$);
      $nextIndex$$2$$ <= $lastIndex$$2_prevCoords$$1$$ && $rawCoords_seriesIndex$$30$$[$nextIndex$$2$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$18$$.$y2$ = $rawCoords_seriesIndex$$30$$[$i$$159$$].$y2$);
      $coord$$18$$.x = $rawCoords_seriesIndex$$30$$[$i$$159$$].x;
      $coord$$18$$.$filtered$ = $coord$$18$$.$y1$ == $coord$$18$$.$y2$ ? $rawCoords_seriesIndex$$30$$[$i$$159$$].$filtered$ : D.$JSCompiler_alias_FALSE$$
    }
  }
  return $coords$$10$$
};
D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderLinesForSeries$$($chart$$87$$, $container$$59$$, $seriesIndex$$31$$, $availSpace$$67$$, $color$$8_gapSize$$1_isDataItemGap_renderLine$$) {
  var $stroke$$10$$;
  if($color$$8_gapSize$$1_isDataItemGap_renderLine$$) {
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = 2.5 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$87$$), $stroke$$10$$ = new D.$DvtSolidStroke$$(D.$DvtChartStyleUtils$$.$getBackgroundColor$($chart$$87$$, D.$JSCompiler_alias_TRUE$$), 1, $color$$8_gapSize$$1_isDataItemGap_renderLine$$)
  }else {
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$87$$, $seriesIndex$$31$$);
    var $lineWidth$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$87$$, $seriesIndex$$31$$), $lineStyle$$ = (0,D.$DvtStroke$convertTypeString$$)(D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$87$$, $seriesIndex$$31$$));
    $stroke$$10$$ = new D.$DvtSolidStroke$$($color$$8_gapSize$$1_isDataItemGap_renderLine$$, 1, $lineWidth$$);
    $stroke$$10$$.$setStyle$($lineStyle$$)
  }
  var $baseline$$3$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$87$$, $seriesIndex$$31$$) ? $chart$$87$$.$y2Axis$.$getBaselineCoord$() : $chart$$87$$.$yAxis$.$getBaselineCoord$(), $lineType$$1$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$87$$, $seriesIndex$$31$$);
  $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = function $$color$$8_gapSize$$1_isDataItemGap_renderLine$$$($color$$8_gapSize$$1_isDataItemGap_renderLine$$) {
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$87$$, $seriesIndex$$31$$, $color$$8_gapSize$$1_isDataItemGap_renderLine$$);
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = new D.$DvtChartLineArea$$($chart$$87$$, D.$JSCompiler_alias_FALSE$$, $availSpace$$67$$, $baseline$$3$$, D.$JSCompiler_alias_NULL$$, $stroke$$10$$, $lineType$$1$$, $color$$8_gapSize$$1_isDataItemGap_renderLine$$);
    $container$$59$$.$addChild$($color$$8_gapSize$$1_isDataItemGap_renderLine$$);
    (0,D.$DvtChartObjPeer$associate$$)($color$$8_gapSize$$1_isDataItemGap_renderLine$$, $chart$$87$$, $seriesIndex$$31$$)
  };
  D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$87$$, $seriesIndex$$31$$) ? ($color$$8_gapSize$$1_isDataItemGap_renderLine$$("high"), $color$$8_gapSize$$1_isDataItemGap_renderLine$$("low")) : $color$$8_gapSize$$1_isDataItemGap_renderLine$$("value")
};
D.$DvtPlotAreaRenderer$$.$_filterScatterBubble$ = function $$DvtPlotAreaRenderer$$$$_filterScatterBubble$$($chart$$88$$, $availSpace$$68$$) {
  var $pixelMap_seriesCount$$10$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$88$$), $groupCount$$4_markerIndex$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$88$$);
  if(!($pixelMap_seriesCount$$10$$ * $groupCount$$4_markerIndex$$ < D.$DvtPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$)) {
    for(var $markerInfo$$1$$, $markerInfos$$ = [], $alpha$$3_dataColor$$5_seriesIndex$$32$$ = 0;$alpha$$3_dataColor$$5_seriesIndex$$32$$ < $pixelMap_seriesCount$$10$$;$alpha$$3_dataColor$$5_seriesIndex$$32$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$88$$, $alpha$$3_dataColor$$5_seriesIndex$$32$$)) {
        for(var $dataItem$$6_groupIndex$$18$$ = 0;$dataItem$$6_groupIndex$$18$$ < $groupCount$$4_markerIndex$$;$dataItem$$6_groupIndex$$18$$++) {
          $markerInfo$$1$$ = D.$DvtPlotAreaRenderer$$.$_getMarkerInfo$($chart$$88$$, $alpha$$3_dataColor$$5_seriesIndex$$32$$, $dataItem$$6_groupIndex$$18$$, $availSpace$$68$$), $markerInfo$$1$$ != D.$JSCompiler_alias_NULL$$ && $markerInfos$$.push($markerInfo$$1$$)
        }
      }
    }
    if(!($markerInfos$$.length < D.$DvtPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$)) {
      D.$DvtChartMarkerUtils$$.$sortMarkers$($markerInfos$$);
      $pixelMap_seriesCount$$10$$ = new D.$DvtPixelMap$$(25, new D.$DvtPixelMap$$(5, new D.$DvtPixelMap$$));
      for($groupCount$$4_markerIndex$$ = $markerInfos$$.length - 1;0 <= $groupCount$$4_markerIndex$$;$groupCount$$4_markerIndex$$--) {
        $markerInfo$$1$$ = $markerInfos$$[$groupCount$$4_markerIndex$$], $alpha$$3_dataColor$$5_seriesIndex$$32$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$88$$, $markerInfo$$1$$.$seriesIndex$, $markerInfo$$1$$.$groupIndex$), $alpha$$3_dataColor$$5_seriesIndex$$32$$ = $markerInfo$$1$$.$markerDisplayed$ ? D.$DvtColorUtils$$.$getAlpha$($alpha$$3_dataColor$$5_seriesIndex$$32$$) : 0, $dataItem$$6_groupIndex$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$88$$, $markerInfo$$1$$.$seriesIndex$, 
        $markerInfo$$1$$.$groupIndex$), D.$DvtChartMarkerUtils$$.$checkPixelMap$($pixelMap_seriesCount$$10$$, $markerInfo$$1$$.x, $markerInfo$$1$$.y, $markerInfo$$1$$.size) ? $dataItem$$6_groupIndex$$18$$._filtered = D.$JSCompiler_alias_TRUE$$ : 0 < $alpha$$3_dataColor$$5_seriesIndex$$32$$ && (D.$DvtChartMarkerUtils$$.$updatePixelMap$($pixelMap_seriesCount$$10$$, $markerInfo$$1$$.x, $markerInfo$$1$$.y, $markerInfo$$1$$.size, $alpha$$3_dataColor$$5_seriesIndex$$32$$), $dataItem$$6_groupIndex$$18$$._filtered = 
        D.$JSCompiler_alias_FALSE$$)
      }
      $chart$$88$$.$Cache$.dataFiltered = D.$JSCompiler_alias_TRUE$$
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$89$$, $seriesIndex$$33$$) {
  var $maxNumPts_setSize$$ = $chart$$89$$.$_plotAreaSpace$.$w$, $seriesItems$$3$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$89$$, $seriesIndex$$33$$).items, $axisInfo$$12_i$$160$$ = $chart$$89$$.$xAxis$.$Info$, $maxNumPts_setSize$$ = window.Math.round(2 * ($seriesItems$$3$$.length / (($axisInfo$$12_i$$160$$.$DataMax$ - $axisInfo$$12_i$$160$$.$DataMin$) / ($axisInfo$$12_i$$160$$.$MaxValue$ - $axisInfo$$12_i$$160$$.$MinValue$))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for($axisInfo$$12_i$$160$$ = 0;$axisInfo$$12_i$$160$$ < $seriesItems$$3$$.length;$axisInfo$$12_i$$160$$++) {
      ($dataItem$$7$$ = $seriesItems$$3$$[$axisInfo$$12_i$$160$$]) && ($dataItem$$7$$._filtered = D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    for(var $maxIndex$$1$$, $maxValue$$3$$, $minIndex$$, $minValue$$4$$, $dataItem$$7$$, $dataValue$$1$$, $filtered$$ = D.$JSCompiler_alias_FALSE$$, $axisInfo$$12_i$$160$$ = 0;$axisInfo$$12_i$$160$$ < $seriesItems$$3$$.length;$axisInfo$$12_i$$160$$ += $maxNumPts_setSize$$) {
      $maxIndex$$1$$ = -1;
      $maxValue$$3$$ = -window.Infinity;
      $minIndex$$ = -1;
      $minValue$$4$$ = window.Infinity;
      for(var $j$$28$$ = $axisInfo$$12_i$$160$$;$j$$28$$ < window.Math.min($axisInfo$$12_i$$160$$ + $maxNumPts_setSize$$, $seriesItems$$3$$.length);$j$$28$$++) {
        $dataValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$89$$, $seriesIndex$$33$$, $j$$28$$), $dataItem$$7$$ = $seriesItems$$3$$[$j$$28$$], $dataValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$7$$ == D.$JSCompiler_alias_NULL$$ || ($dataValue$$1$$ > $maxValue$$3$$ && ($maxIndex$$1$$ = $j$$28$$, $maxValue$$3$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$4$$ && ($minIndex$$ = $j$$28$$, $minValue$$4$$ = $dataValue$$1$$), $filtered$$ = $dataItem$$7$$._filtered = D.$JSCompiler_alias_TRUE$$)
      }
      for($j$$28$$ = $axisInfo$$12_i$$160$$;$j$$28$$ < window.Math.min($axisInfo$$12_i$$160$$ + $maxNumPts_setSize$$, $seriesItems$$3$$.length);$j$$28$$++) {
        if($dataItem$$7$$ = $seriesItems$$3$$[$j$$28$$], $dataItem$$7$$ != D.$JSCompiler_alias_NULL$$ && ($j$$28$$ == $maxIndex$$1$$ || $j$$28$$ == $minIndex$$)) {
          $dataItem$$7$$._filtered = D.$JSCompiler_alias_FALSE$$
        }
      }
    }
    $chart$$89$$.$Cache$.dataFiltered = $filtered$$
  }
};
D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtPlotAreaRenderer$$$$_isDataItemFiltered$$($chart$$90_dataItem$$8$$, $seriesIndex$$34$$, $groupIndex$$19$$) {
  return($chart$$90_dataItem$$8$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$90_dataItem$$8$$, $seriesIndex$$34$$, $groupIndex$$19$$)) && $chart$$90_dataItem$$8$$._filtered ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$91$$, $seriesIndex$$35$$, $type$$78$$) {
  var $xAxis$$2$$ = $chart$$91$$.$xAxis$, $yAxis$$2$$ = $chart$$91$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$91$$, $seriesIndex$$35$$) && ($yAxis$$2$$ = $chart$$91$$.$y2Axis$);
  for(var $coords$$12$$ = [], $groupIndex$$20$$ = 0;$groupIndex$$20$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$91$$);$groupIndex$$20$$++) {
    var $coord$$19_group$$13$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$91$$, $groupIndex$$20$$), $dataValue$$2_xCoord$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$91$$, $seriesIndex$$35$$, $groupIndex$$20$$), $xValue$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$91$$, $seriesIndex$$35$$, $groupIndex$$20$$), $yCoord$$2_yValue$$ = D.$JSCompiler_alias_NULL$$;
    "low" == $type$$78$$ ? $yCoord$$2_yValue$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$91$$, $seriesIndex$$35$$, $groupIndex$$20$$) : "high" == $type$$78$$ ? $yCoord$$2_yValue$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$91$$, $seriesIndex$$35$$, $groupIndex$$20$$) : $dataValue$$2_xCoord$$3$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($dataValue$$2_xCoord$$3$$) && ($yCoord$$2_yValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$91$$, $seriesIndex$$35$$, $groupIndex$$20$$));
    $yCoord$$2_yValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($yCoord$$2_yValue$$) || !D.$DvtChartDataUtils$$.$isDataItemInViewport$($chart$$91$$, $seriesIndex$$35$$, $groupIndex$$20$$) ? $coords$$12$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $groupIndex$$20$$, $coord$$19_group$$13$$, D.$JSCompiler_alias_FALSE$$)) : (D.$DvtChartTypeUtils$$.$isPolar$($chart$$91$$) && ($yCoord$$2_yValue$$ = window.Math.max($yCoord$$2_yValue$$, 
    $yAxis$$2$$.$Info$.$MinValue$)), $dataValue$$2_xCoord$$3$$ = $xAxis$$2$$.$getUnboundedCoordAt$($xValue$$1$$), $yCoord$$2_yValue$$ = $yAxis$$2$$.$getUnboundedCoordAt$($yCoord$$2_yValue$$), $coord$$19_group$$13$$ = new D.$DvtChartCoord$$($dataValue$$2_xCoord$$3$$, $yCoord$$2_yValue$$, $yCoord$$2_yValue$$, $groupIndex$$20$$, $coord$$19_group$$13$$, D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$91$$, $seriesIndex$$35$$, $groupIndex$$20$$)), $coords$$12$$.push($coord$$19_group$$13$$))
  }
  return $coords$$12$$
};
D.$DvtPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtPlotAreaRenderer$$$$createClippedGroup$$($chart$$92_points$$4_r$$inline_2271$$, $clip$$1_container$$60$$, $availSpace$$70_cy$$2$$) {
  var $clipGroup$$4$$ = new D.$DvtContainer$$($clip$$1_container$$60$$.$getCtx$());
  $clip$$1_container$$60$$.$addChild$($clipGroup$$4$$);
  $clip$$1_container$$60$$ = new D.$DvtClipPath$$($chart$$92_points$$4_r$$inline_2271$$.getId());
  var $buffer$$8_cx$$1_obj$$inline_2266$$ = D.$DvtPlotAreaRenderer$$.$_extendClipGroup$($chart$$92_points$$4_r$$inline_2271$$);
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$92_points$$4_r$$inline_2271$$)) {
    if($buffer$$8_cx$$1_obj$$inline_2266$$ = $availSpace$$70_cy$$2$$.x + $availSpace$$70_cy$$2$$.$w$ / 2, $availSpace$$70_cy$$2$$ = $availSpace$$70_cy$$2$$.y + $availSpace$$70_cy$$2$$.$h$ / 2, D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$92_points$$4_r$$inline_2271$$)) {
      $chart$$92_points$$4_r$$inline_2271$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($buffer$$8_cx$$1_obj$$inline_2266$$, $availSpace$$70_cy$$2$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$92_points$$4_r$$inline_2271$$), $chart$$92_points$$4_r$$inline_2271$$.$getRadius$()), $buffer$$8_cx$$1_obj$$inline_2266$$ = {type:3}, $buffer$$8_cx$$1_obj$$inline_2266$$.$points$ = $chart$$92_points$$4_r$$inline_2271$$, $buffer$$8_cx$$1_obj$$inline_2266$$ && $clip$$1_container$$60$$.$_regions$.push($buffer$$8_cx$$1_obj$$inline_2266$$)
    }else {
      $chart$$92_points$$4_r$$inline_2271$$ = $chart$$92_points$$4_r$$inline_2271$$.$getRadius$();
      var $obj$$inline_2272$$ = {type:5};
      $obj$$inline_2272$$.$cx$ = $buffer$$8_cx$$1_obj$$inline_2266$$;
      $obj$$inline_2272$$.$cy$ = $availSpace$$70_cy$$2$$;
      $obj$$inline_2272$$.$r$ = $chart$$92_points$$4_r$$inline_2271$$;
      $obj$$inline_2272$$ && $clip$$1_container$$60$$.$_regions$.push($obj$$inline_2272$$)
    }
  }else {
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$92_points$$4_r$$inline_2271$$) ? (0,D.$JSCompiler_StaticMethods_addRect$$)($clip$$1_container$$60$$, $availSpace$$70_cy$$2$$.x - $buffer$$8_cx$$1_obj$$inline_2266$$, $availSpace$$70_cy$$2$$.y, $availSpace$$70_cy$$2$$.$w$ + 2 * $buffer$$8_cx$$1_obj$$inline_2266$$, $availSpace$$70_cy$$2$$.$h$) : (0,D.$JSCompiler_StaticMethods_addRect$$)($clip$$1_container$$60$$, $availSpace$$70_cy$$2$$.x, $availSpace$$70_cy$$2$$.y - $buffer$$8_cx$$1_obj$$inline_2266$$, 
    $availSpace$$70_cy$$2$$.$w$, $availSpace$$70_cy$$2$$.$h$ + 2 * $buffer$$8_cx$$1_obj$$inline_2266$$)
  }
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($clipGroup$$4$$, $clip$$1_container$$60$$);
  return $clipGroup$$4$$
};
D.$DvtPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtPlotAreaRenderer$$$$polarToCartesian$$($r$$2$$, $theta$$1$$, $availSpace$$71$$) {
  return new D.$DvtPoint$$($availSpace$$71$$.x + $availSpace$$71$$.$w$ / 2 + $r$$2$$ * window.Math.sin($theta$$1$$), $availSpace$$71$$.y + $availSpace$$71$$.$h$ / 2 - $r$$2$$ * window.Math.cos($theta$$1$$))
};
D.$DvtPlotAreaRenderer$$.$convertAxisCoord$ = function $$DvtPlotAreaRenderer$$$$convertAxisCoord$$($cartesian_chart$$93$$, $coord$$20$$, $availSpace$$72$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($cartesian_chart$$93$$) ? ($cartesian_chart$$93$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($coord$$20$$.y, $coord$$20$$.x, $availSpace$$72$$), new D.$DvtPoint$$($cartesian_chart$$93$$.x, $cartesian_chart$$93$$.y)) : D.$DvtChartTypeUtils$$.$isHorizontal$($cartesian_chart$$93$$) ? new D.$DvtPoint$$($coord$$20$$.y, $coord$$20$$.x) : new D.$DvtPoint$$($coord$$20$$.x, $coord$$20$$.y)
};
D.$DvtPlotAreaRenderer$$.$_extendClipGroup$ = function $$DvtPlotAreaRenderer$$$$_extendClipGroup$$($chart$$94$$) {
  if(D.$DvtChartTypeUtils$$.$hasLineSeries$($chart$$94$$) || D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$94$$)) {
    var $lineWidth$$1$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$94$$), $hasEdgeData$$ = function $$hasEdgeData$$$($chart$$94$$) {
      var $hasEdgeData$$ = $chart$$94$$.$Info$;
      $chart$$94$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$GlobalMax$);
      var $dataMaxCoord$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$DataMax$), $globalMinCoord$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$GlobalMin$), $hasEdgeData$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$DataMin$);
      return $chart$$94$$ != D.$JSCompiler_alias_NULL$$ && $dataMaxCoord$$ != D.$JSCompiler_alias_NULL$$ && $dataMaxCoord$$ - $chart$$94$$ <= $lineWidth$$1$$ / 2 || $globalMinCoord$$ != D.$JSCompiler_alias_NULL$$ && $hasEdgeData$$ != D.$JSCompiler_alias_NULL$$ && $globalMinCoord$$ - $hasEdgeData$$ <= $lineWidth$$1$$ / 2 ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
    };
    if($chart$$94$$.$yAxis$ && $hasEdgeData$$($chart$$94$$.$yAxis$) || $chart$$94$$.$y2Axis$ && $hasEdgeData$$($chart$$94$$.$y2Axis$)) {
      return window.Math.ceil($lineWidth$$1$$ / 2)
    }
  }
  return 0
};
D.$DvtFunnelRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelRenderer$$, D.$DvtObj$$, "DvtFunnelRenderer");
D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 70;
D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ = 0;
D.$DvtFunnelRenderer$$.$render$ = function $$DvtFunnelRenderer$$$$render$$($chart$$61$$, $container$$37_selected$$1$$, $availSpace$$44$$) {
  var $funnelContainer$$ = new D.$DvtContainer$$($chart$$61$$.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($funnelContainer$$, $availSpace$$44$$.x, $availSpace$$44$$.y);
  $container$$37_selected$$1$$.$addChild$($funnelContainer$$);
  $chart$$61$$.$_plotArea$ = $funnelContainer$$;
  var $bbox$$4$$;
  if("horizontal" == $chart$$61$$.$getOptions$().orientation) {
    $bbox$$4$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$44$$.$w$, $availSpace$$44$$.$h$)
  }else {
    var $rotationMatrix$$ = new D.$DvtMatrix$$;
    (0,D.$DvtAgent$isRightToLeft$$)($chart$$61$$.$getCtx$()) ? ($rotationMatrix$$.translate(-$availSpace$$44$$.y - $availSpace$$44$$.$h$ / 2, -$availSpace$$44$$.x - $availSpace$$44$$.$w$ / 2), $rotationMatrix$$.rotate(-window.Math.PI / 2), $rotationMatrix$$.translate($availSpace$$44$$.y + $availSpace$$44$$.$w$ / 2, $availSpace$$44$$.x + $availSpace$$44$$.$h$ / 2)) : ($rotationMatrix$$.translate(-$availSpace$$44$$.$h$ / 2, -$availSpace$$44$$.$w$ / 2), $rotationMatrix$$.rotate(window.Math.PI / 2), 
    $rotationMatrix$$.translate($availSpace$$44$$.$w$ / 2, $availSpace$$44$$.y + $availSpace$$44$$.$h$ / 2));
    $bbox$$4$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$44$$.$h$, $availSpace$$44$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$)
  }
  D.$DvtFunnelRenderer$$.$_renderFunnelSlices$($chart$$61$$, $funnelContainer$$, $bbox$$4$$) || D.$DvtChartRenderer$$.$renderEmptyText$($chart$$61$$, $container$$37_selected$$1$$, $availSpace$$44$$);
  $container$$37_selected$$1$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$61$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$61$$, $container$$37_selected$$1$$);
  $chart$$61$$.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$61$$))
};
D.$DvtFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtFunnelRenderer$$$$_renderFunnelSlices$$($chart$$62$$, $container$$38$$, $availSpace$$45$$) {
  for(var $maxGapSize_options$$47_totalValue$$ = $chart$$62$$.$getOptions$(), $seriesCount$$6_slice$$1_targetValue$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$62$$), $gapRatio_gapSize$$ = D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$62$$), $maxGapSize_options$$47_totalValue$$ = window.Math.min(D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * $availSpace$$45$$.$w$ / ($seriesCount$$6_slice$$1_targetValue$$ - 1), ("on" == $maxGapSize_options$$47_totalValue$$.styleDefaults.threeDEffect ? D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ : 
  D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$) * $availSpace$$45$$.$w$), $gapRatio_gapSize$$ = $gapRatio_gapSize$$ * $maxGapSize_options$$47_totalValue$$, $numDrawnSeries$$ = $maxGapSize_options$$47_totalValue$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$18$$ = 0;$seriesIndex$$18$$ < $seriesCount$$6_slice$$1_targetValue$$;$seriesIndex$$18$$++) {
    if(D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$62$$, $seriesIndex$$18$$)) {
      var $value$$90$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$62$$, $seriesIndex$$18$$);
      $value$$90$$ == D.$JSCompiler_alias_NULL$$ && ($value$$90$$ = D.$DvtChartDataUtils$$.getValue($chart$$62$$, $seriesIndex$$18$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$90$$ || ($maxGapSize_options$$47_totalValue$$ += $value$$90$$)
    }
  }
  if(0 == $maxGapSize_options$$47_totalValue$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for($seriesIndex$$18$$ = $seriesCount$$6_slice$$1_targetValue$$ - 1;0 <= $seriesIndex$$18$$;$seriesIndex$$18$$--) {
    D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$62$$, $seriesIndex$$18$$) && ($value$$90$$ = D.$DvtChartDataUtils$$.getValue($chart$$62$$, $seriesIndex$$18$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount$$6_slice$$1_targetValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$62$$, $seriesIndex$$18$$), 0 >= $value$$90$$ && $seriesCount$$6_slice$$1_targetValue$$ == D.$JSCompiler_alias_NULL$$ || $seriesCount$$6_slice$$1_targetValue$$ != D.$JSCompiler_alias_NULL$$ && 0 >= $seriesCount$$6_slice$$1_targetValue$$ || 
    ($seriesCount$$6_slice$$1_targetValue$$ != D.$JSCompiler_alias_NULL$$ ? ($cumulativeValue$$ += $seriesCount$$6_slice$$1_targetValue$$ / $maxGapSize_options$$47_totalValue$$, $seriesCount$$6_slice$$1_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$62$$, $seriesIndex$$18$$, $numDrawnSeries$$, $availSpace$$45$$.$w$, $availSpace$$45$$.$h$, 1 - $cumulativeValue$$, $seriesCount$$6_slice$$1_targetValue$$ / $maxGapSize_options$$47_totalValue$$, $value$$90$$ / $seriesCount$$6_slice$$1_targetValue$$, $gapRatio_gapSize$$)) : 
    ($cumulativeValue$$ += $value$$90$$ / $maxGapSize_options$$47_totalValue$$, $seriesCount$$6_slice$$1_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$62$$, $seriesIndex$$18$$, $numDrawnSeries$$, $availSpace$$45$$.$w$, $availSpace$$45$$.$h$, 1 - $cumulativeValue$$, $value$$90$$ / $maxGapSize_options$$47_totalValue$$, D.$JSCompiler_alias_NULL$$, $gapRatio_gapSize$$)), $numDrawnSeries$$++, $container$$38$$.$addChild$($seriesCount$$6_slice$$1_targetValue$$), (0,D.$DvtChartObjPeer$associate$$)($seriesCount$$6_slice$$1_targetValue$$, 
    $chart$$62$$, $seriesIndex$$18$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtRefObjRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjRenderer$$, D.$DvtObj$$, "DvtRefObjRenderer");
D.$DvtRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtRefObjRenderer$$$$renderBackgroundObjects$$($chart$$95$$, $container$$61$$, $plotAreaBounds$$4$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$95$$, $container$$61$$, $plotAreaBounds$$4$$, "back")
};
D.$DvtRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtRefObjRenderer$$$$renderForegroundObjects$$($chart$$96$$, $container$$62$$, $plotAreaBounds$$5$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$96$$, $container$$62$$, $plotAreaBounds$$5$$, "front")
};
D.$DvtRefObjRenderer$$.$_renderObjects$ = function $$DvtRefObjRenderer$$$$_renderObjects$$($chart$$97$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$) {
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$97$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$, $chart$$97$$.$xAxis$, D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$97$$, "x"));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$97$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$, $chart$$97$$.$yAxis$, D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$97$$, "y"));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$97$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$, $chart$$97$$.$y2Axis$, D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$97$$, "y2"))
};
D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$98$$, $container$$64$$, $plotAreaBounds$$7$$, $location$$22$$, $axis$$73$$, $objects$$) {
  if($objects$$ && $axis$$73$$) {
    for(var $i$$161$$ = 0;$i$$161$$ < $objects$$.length;$i$$161$$++) {
      var $refObj$$3_refObjPeer$$ = $objects$$[$i$$161$$];
      if(D.$DvtChartRefObjUtils$$.$isObjectRendered$($refObj$$3_refObjPeer$$) && $refObj$$3_refObjPeer$$ && D.$DvtChartRefObjUtils$$.$getLocation$($refObj$$3_refObjPeer$$) == $location$$22$$) {
        var $shape$$26$$, $type$$79$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$3_refObjPeer$$);
        "area" == $type$$79$$ ? $shape$$26$$ = D.$DvtRefObjRenderer$$.$_createReferenceArea$($refObj$$3_refObjPeer$$, $chart$$98$$, $plotAreaBounds$$7$$, $axis$$73$$) : "line" == $type$$79$$ && ($shape$$26$$ = D.$DvtRefObjRenderer$$.$_createReferenceLine$($refObj$$3_refObjPeer$$, $chart$$98$$, $plotAreaBounds$$7$$, $axis$$73$$));
        $shape$$26$$ != D.$JSCompiler_alias_NULL$$ && ($refObj$$3_refObjPeer$$ = new D.$DvtRefObjPeer$$($chart$$98$$, [$shape$$26$$], $refObj$$3_refObjPeer$$, $i$$161$$, $axis$$73$$ == $chart$$98$$.$xAxis$ ? "xAxis" : $axis$$73$$ == $chart$$98$$.$yAxis$ ? "yAxis" : "y2Axis"), $chart$$98$$.$registerObject$($refObj$$3_refObjPeer$$), $chart$$98$$.$__getEventManager$().$associate$($shape$$26$$, $refObj$$3_refObjPeer$$), $container$$64$$.$addChild$($shape$$26$$))
      }
    }
  }
};
D.$DvtRefObjRenderer$$.$_createReferenceArea$ = function $$DvtRefObjRenderer$$$$_createReferenceArea$$($cy$$3_highVal_pointIndex_refObj$$4$$, $chart$$99_outerPoints_radius$$3$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, $axis$$74_highCoord$$2$$) {
  var $context$$40_items$$2$$ = $chart$$99_outerPoints_radius$$3$$.$getCtx$(), $color$$9_position$$19$$ = $axis$$74_highCoord$$2$$.$getPosition$(), $bHoriz$$5_cx$$2_lowCoords$$ = "top" == $color$$9_position$$19$$ || "bottom" == $color$$9_position$$19$$, $bRadial_highCoords_pLow$$1$$ = "radial" == $color$$9_position$$19$$, $color$$9_position$$19$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$3_highVal_pointIndex_refObj$$4$$), $lineType$$2_lowCoord$$2_lowVal$$ = D.$DvtChartRefObjUtils$$.$getLineType$($cy$$3_highVal_pointIndex_refObj$$4$$);
  if($cy$$3_highVal_pointIndex_refObj$$4$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$74_highCoord$$2$$ == $chart$$99_outerPoints_radius$$3$$.$yAxis$) {
    $context$$40_items$$2$$ = $cy$$3_highVal_pointIndex_refObj$$4$$.items;
    $bRadial_highCoords_pLow$$1$$ = [];
    $bHoriz$$5_cx$$2_lowCoords$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($chart$$99_outerPoints_radius$$3$$.$xAxis$)) {
      for(;$context$$40_items$$2$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$99_outerPoints_radius$$3$$);) {
        $context$$40_items$$2$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    for($cy$$3_highVal_pointIndex_refObj$$4$$ = 0;$cy$$3_highVal_pointIndex_refObj$$4$$ < $context$$40_items$$2$$.length;$cy$$3_highVal_pointIndex_refObj$$4$$++) {
      var $dataItem$$9_hCoord_hVal$$ = $context$$40_items$$2$$[$cy$$3_highVal_pointIndex_refObj$$4$$], $lCoord_lVal$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($dataItem$$9_hCoord_hVal$$), $dataItem$$9_hCoord_hVal$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($dataItem$$9_hCoord_hVal$$);
      if($lCoord_lVal$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$9_hCoord_hVal$$ == D.$JSCompiler_alias_NULL$$) {
        $bRadial_highCoords_pLow$$1$$.push(new D.$DvtChartCoord$$), $bHoriz$$5_cx$$2_lowCoords$$.push(new D.$DvtChartCoord$$)
      }else {
        var $lCoord_lVal$$ = $axis$$74_highCoord$$2$$.$getUnboundedCoordAt$($lCoord_lVal$$), $dataItem$$9_hCoord_hVal$$ = $axis$$74_highCoord$$2$$.$getUnboundedCoordAt$($dataItem$$9_hCoord_hVal$$), $xCoord$$4$$ = $chart$$99_outerPoints_radius$$3$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtChartRefObjUtils$$.$getXValue$($chart$$99_outerPoints_radius$$3$$, $context$$40_items$$2$$, $cy$$3_highVal_pointIndex_refObj$$4$$));
        $bRadial_highCoords_pLow$$1$$.push(new D.$DvtChartCoord$$($xCoord$$4$$, $dataItem$$9_hCoord_hVal$$, $dataItem$$9_hCoord_hVal$$));
        $bHoriz$$5_cx$$2_lowCoords$$.push(new D.$DvtChartCoord$$($xCoord$$4$$, $lCoord_lVal$$, $lCoord_lVal$$))
      }
    }
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = new D.$DvtChartLineArea$$($chart$$99_outerPoints_radius$$3$$, D.$JSCompiler_alias_TRUE$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, D.$JSCompiler_alias_NULL$$, new D.$DvtSolidFill$$($color$$9_position$$19$$), D.$JSCompiler_alias_NULL$$, $lineType$$2_lowCoord$$2_lowVal$$, $bRadial_highCoords_pLow$$1$$, $lineType$$2_lowCoord$$2_lowVal$$, $bHoriz$$5_cx$$2_lowCoords$$)
  }else {
    $lineType$$2_lowCoord$$2_lowVal$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($cy$$3_highVal_pointIndex_refObj$$4$$);
    $cy$$3_highVal_pointIndex_refObj$$4$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($cy$$3_highVal_pointIndex_refObj$$4$$);
    if($lineType$$2_lowCoord$$2_lowVal$$ == D.$JSCompiler_alias_NULL$$ || -window.Infinity == $lineType$$2_lowCoord$$2_lowVal$$) {
      $lineType$$2_lowCoord$$2_lowVal$$ = $axis$$74_highCoord$$2$$.$Info$.$GlobalMin$
    }
    if($cy$$3_highVal_pointIndex_refObj$$4$$ == D.$JSCompiler_alias_NULL$$ || window.Infinity == $cy$$3_highVal_pointIndex_refObj$$4$$) {
      $cy$$3_highVal_pointIndex_refObj$$4$$ = $axis$$74_highCoord$$2$$.$Info$.$GlobalMax$
    }
    $lineType$$2_lowCoord$$2_lowVal$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$99_outerPoints_radius$$3$$, $axis$$74_highCoord$$2$$, $lineType$$2_lowCoord$$2_lowVal$$);
    $axis$$74_highCoord$$2$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$99_outerPoints_radius$$3$$, $axis$$74_highCoord$$2$$, $cy$$3_highVal_pointIndex_refObj$$4$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$99_outerPoints_radius$$3$$) ? ($bHoriz$$5_cx$$2_lowCoords$$ = $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.x + $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$w$ / 2, $cy$$3_highVal_pointIndex_refObj$$4$$ = $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.y + $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$h$ / 2, $bRadial_highCoords_pLow$$1$$ ? D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$99_outerPoints_radius$$3$$) ? 
    ($cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$99_outerPoints_radius$$3$$), $chart$$99_outerPoints_radius$$3$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$5_cx$$2_lowCoords$$, $cy$$3_highVal_pointIndex_refObj$$4$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, $axis$$74_highCoord$$2$$, 1), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$5_cx$$2_lowCoords$$, 
    $cy$$3_highVal_pointIndex_refObj$$4$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, $lineType$$2_lowCoord$$2_lowVal$$, 0), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPathUtils$$.$polyline$($chart$$99_outerPoints_radius$$3$$) + D.$DvtPathUtils$$.$polyline$($cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$) + D.$DvtPathUtils$$.closePath()) : $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPathUtils$$.moveTo($bHoriz$$5_cx$$2_lowCoords$$, 
    $cy$$3_highVal_pointIndex_refObj$$4$$ - $axis$$74_highCoord$$2$$) + D.$DvtPathUtils$$.arcTo($axis$$74_highCoord$$2$$, $axis$$74_highCoord$$2$$, window.Math.PI, 1, $bHoriz$$5_cx$$2_lowCoords$$, $cy$$3_highVal_pointIndex_refObj$$4$$ + $axis$$74_highCoord$$2$$) + D.$DvtPathUtils$$.arcTo($axis$$74_highCoord$$2$$, $axis$$74_highCoord$$2$$, window.Math.PI, 1, $bHoriz$$5_cx$$2_lowCoords$$, $cy$$3_highVal_pointIndex_refObj$$4$$ - $axis$$74_highCoord$$2$$) + D.$DvtPathUtils$$.moveTo($bHoriz$$5_cx$$2_lowCoords$$, 
    $cy$$3_highVal_pointIndex_refObj$$4$$ - $lineType$$2_lowCoord$$2_lowVal$$) + D.$DvtPathUtils$$.arcTo($lineType$$2_lowCoord$$2_lowVal$$, $lineType$$2_lowCoord$$2_lowVal$$, window.Math.PI, 0, $bHoriz$$5_cx$$2_lowCoords$$, $cy$$3_highVal_pointIndex_refObj$$4$$ + $lineType$$2_lowCoord$$2_lowVal$$) + D.$DvtPathUtils$$.arcTo($lineType$$2_lowCoord$$2_lowVal$$, $lineType$$2_lowCoord$$2_lowVal$$, window.Math.PI, 0, $bHoriz$$5_cx$$2_lowCoords$$, $cy$$3_highVal_pointIndex_refObj$$4$$ - $lineType$$2_lowCoord$$2_lowVal$$) + 
    D.$DvtPathUtils$$.closePath() : ($chart$$99_outerPoints_radius$$3$$ = $chart$$99_outerPoints_radius$$3$$.$getRadius$(), $bRadial_highCoords_pLow$$1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$99_outerPoints_radius$$3$$, $lineType$$2_lowCoord$$2_lowVal$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$99_outerPoints_radius$$3$$, $axis$$74_highCoord$$2$$, 
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPathUtils$$.moveTo($bHoriz$$5_cx$$2_lowCoords$$, $cy$$3_highVal_pointIndex_refObj$$4$$) + D.$DvtPathUtils$$.lineTo($bRadial_highCoords_pLow$$1$$.x, $bRadial_highCoords_pLow$$1$$.y) + D.$DvtPathUtils$$.arcTo($chart$$99_outerPoints_radius$$3$$, $chart$$99_outerPoints_radius$$3$$, $axis$$74_highCoord$$2$$ - $lineType$$2_lowCoord$$2_lowVal$$, (0,D.$DvtAgent$isRightToLeft$$)($context$$40_items$$2$$) ? 
    0 : 1, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.x, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.y) + D.$DvtPathUtils$$.lineTo($cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.x, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.y) + D.$DvtPathUtils$$.closePath()), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = new D.$DvtPath$$($context$$40_items$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$)) : 
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = new D.$DvtPolygon$$($context$$40_items$$2$$, $bHoriz$$5_cx$$2_lowCoords$$ ? [$lineType$$2_lowCoord$$2_lowVal$$, 0, $axis$$74_highCoord$$2$$, 0, $axis$$74_highCoord$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$h$, $lineType$$2_lowCoord$$2_lowVal$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$h$] : [0, $lineType$$2_lowCoord$$2_lowVal$$, 0, $axis$$74_highCoord$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$w$, 
    $axis$$74_highCoord$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$w$, $lineType$$2_lowCoord$$2_lowVal$$]);
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$setSolidFill$($color$$9_position$$19$$)
  }
  return $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$
};
D.$DvtRefObjRenderer$$.$_createReferenceLine$ = function $$DvtRefObjRenderer$$$$_createReferenceLine$$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $cartesian$$1_chart$$100_shape$$28$$, $plotAreaBounds$$9$$, $axis$$75_cx$$3$$) {
  var $lineWidth$$2_position$$20_stroke$$11$$ = $axis$$75_cx$$3$$.$getPosition$(), $bHoriz$$6_items$$3$$ = "top" == $lineWidth$$2_position$$20_stroke$$11$$ || "bottom" == $lineWidth$$2_position$$20_stroke$$11$$, $bRadial$$1_coords$$13_points$$6$$ = "radial" == $lineWidth$$2_position$$20_stroke$$11$$, $bTangential_pointIndex$$1$$ = "tangential" == $lineWidth$$2_position$$20_stroke$$11$$, $lineWidth$$2_position$$20_stroke$$11$$ = D.$DvtChartRefObjUtils$$.$getLineWidth$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), 
  $cy$$4_lineType$$3$$ = D.$DvtChartRefObjUtils$$.$getLineType$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $color$$10_context$$41_dataItem$$10_yCoord$$3$$ = D.$DvtChartRefObjUtils$$.$getColor$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $lineWidth$$2_position$$20_stroke$$11$$ = new D.$DvtSolidStroke$$($color$$10_context$$41_dataItem$$10_yCoord$$3$$, 1, $lineWidth$$2_position$$20_stroke$$11$$);
  $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.lineStyle && $lineWidth$$2_position$$20_stroke$$11$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.lineStyle));
  $color$$10_context$$41_dataItem$$10_yCoord$$3$$ = $cartesian$$1_chart$$100_shape$$28$$.$getCtx$();
  if($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$75_cx$$3$$ == $cartesian$$1_chart$$100_shape$$28$$.$yAxis$) {
    $bHoriz$$6_items$$3$$ = $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.items;
    $bRadial$$1_coords$$13_points$$6$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($cartesian$$1_chart$$100_shape$$28$$.$xAxis$)) {
      for(;$bHoriz$$6_items$$3$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$100_shape$$28$$);) {
        $bHoriz$$6_items$$3$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    $bRadial$$1_coords$$13_points$$6$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$6_items$$3$$.length;$bTangential_pointIndex$$1$$++) {
      $color$$10_context$$41_dataItem$$10_yCoord$$3$$ = $bHoriz$$6_items$$3$$[$bTangential_pointIndex$$1$$], $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = D.$JSCompiler_alias_NULL$$, $color$$10_context$$41_dataItem$$10_yCoord$$3$$ != D.$JSCompiler_alias_NULL$$ && ((0,window.isNaN)($color$$10_context$$41_dataItem$$10_yCoord$$3$$) ? $color$$10_context$$41_dataItem$$10_yCoord$$3$$.value != D.$JSCompiler_alias_NULL$$ && ($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = $color$$10_context$$41_dataItem$$10_yCoord$$3$$.value) : 
      $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = $color$$10_context$$41_dataItem$$10_yCoord$$3$$), $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ == D.$JSCompiler_alias_NULL$$ ? $bRadial$$1_coords$$13_points$$6$$.push(new D.$DvtChartCoord$$) : ($color$$10_context$$41_dataItem$$10_yCoord$$3$$ = $axis$$75_cx$$3$$.$getUnboundedCoordAt$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = $cartesian$$1_chart$$100_shape$$28$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtChartRefObjUtils$$.$getXValue$($cartesian$$1_chart$$100_shape$$28$$, 
      $bHoriz$$6_items$$3$$, $bTangential_pointIndex$$1$$)), $bRadial$$1_coords$$13_points$$6$$.push(new D.$DvtChartCoord$$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $color$$10_context$$41_dataItem$$10_yCoord$$3$$, $color$$10_context$$41_dataItem$$10_yCoord$$3$$)))
    }
    $cartesian$$1_chart$$100_shape$$28$$ = new D.$DvtChartLineArea$$($cartesian$$1_chart$$100_shape$$28$$, D.$JSCompiler_alias_FALSE$$, $plotAreaBounds$$9$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $lineWidth$$2_position$$20_stroke$$11$$, $cy$$4_lineType$$3$$, $bRadial$$1_coords$$13_points$$6$$)
  }else {
    if($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.value) {
      $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($cartesian$$1_chart$$100_shape$$28$$, $axis$$75_cx$$3$$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.value);
      if($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ == D.$JSCompiler_alias_NULL$$ || window.Infinity == $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ || -window.Infinity == $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $axis$$75_cx$$3$$ = $plotAreaBounds$$9$$.x + $plotAreaBounds$$9$$.$w$ / 2;
      $cy$$4_lineType$$3$$ = $plotAreaBounds$$9$$.y + $plotAreaBounds$$9$$.$h$ / 2;
      $bRadial$$1_coords$$13_points$$6$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($cartesian$$1_chart$$100_shape$$28$$) ? ($bRadial$$1_coords$$13_points$$6$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($axis$$75_cx$$3$$, $cy$$4_lineType$$3$$, D.$DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$100_shape$$28$$), $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $cartesian$$1_chart$$100_shape$$28$$ = new D.$DvtPolygon$$($color$$10_context$$41_dataItem$$10_yCoord$$3$$, $bRadial$$1_coords$$13_points$$6$$)) : 
      $cartesian$$1_chart$$100_shape$$28$$ = new D.$DvtCircle$$($color$$10_context$$41_dataItem$$10_yCoord$$3$$, $axis$$75_cx$$3$$, $cy$$4_lineType$$3$$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $cartesian$$1_chart$$100_shape$$28$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $bTangential_pointIndex$$1$$ ? ($cartesian$$1_chart$$100_shape$$28$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_chart$$100_shape$$28$$.$getRadius$(), $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $plotAreaBounds$$9$$), 
      $cartesian$$1_chart$$100_shape$$28$$ = new D.$DvtLine$$($color$$10_context$$41_dataItem$$10_yCoord$$3$$, $axis$$75_cx$$3$$, $cy$$4_lineType$$3$$, $cartesian$$1_chart$$100_shape$$28$$.x, $cartesian$$1_chart$$100_shape$$28$$.y)) : ($cartesian$$1_chart$$100_shape$$28$$ = $bHoriz$$6_items$$3$$ ? new D.$DvtLine$$($color$$10_context$$41_dataItem$$10_yCoord$$3$$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, 0, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $plotAreaBounds$$9$$.$h$) : new D.$DvtLine$$($color$$10_context$$41_dataItem$$10_yCoord$$3$$, 
      0, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $plotAreaBounds$$9$$.$w$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cartesian$$1_chart$$100_shape$$28$$));
      $cartesian$$1_chart$$100_shape$$28$$.$setStroke$($lineWidth$$2_position$$20_stroke$$11$$)
    }else {
      return D.$JSCompiler_alias_NULL$$
    }
  }
  return $cartesian$$1_chart$$100_shape$$28$$
};
D.$DvtRefObjRenderer$$.$_getAxisCoord$ = function $$DvtRefObjRenderer$$$$_getAxisCoord$$($chart$$101_index$$137$$, $axis$$76$$, $value$$92$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$76$$) && ($chart$$101_index$$137$$ = D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$101_index$$137$$, $value$$92$$), 0 <= $chart$$101_index$$137$$) ? $axis$$76$$.$getUnboundedCoordAt$($chart$$101_index$$137$$) : !(0,window.isNaN)($value$$92$$) ? $axis$$76$$.$getUnboundedCoordAt$($value$$92$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtSparkChart", D.$DvtSparkChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChart$$, D.$DvtBaseComponent$$, "DvtSparkChart");
D.$DvtSparkChart$$.newInstance = function $$DvtSparkChart$$$newInstance$($context$$545$$, $callback$$141$$, $callbackObj$$92$$) {
  var $sparkChart$$ = new D.$DvtSparkChart$$;
  $sparkChart$$.Init($context$$545$$, $callback$$141$$, $callbackObj$$92$$);
  return $sparkChart$$
};
D.$DvtSparkChart$$.getDefaults = function $$DvtSparkChart$$$getDefaults$($skin$$18$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSparkChartDefaults$$, $skin$$18$$)
};
D.$DvtSparkChart$$.prototype.Init = function $$DvtSparkChart$$$$Init$($context$$546$$, $callback$$142$$, $callbackObj$$93$$) {
  D.$DvtSparkChart$$.$superclass$.Init.call(this, $context$$546$$, $callback$$142$$, $callbackObj$$93$$);
  this.$Defaults$ = new D.$DvtSparkChartDefaults$$;
  this.$_eventManager$ = new D.$DvtSparkChartEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_chart$ = (0,D.$DvtChart$newInstance$$)($context$$546$$);
  this.$addChild$(this.$_chart$);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtKeyboardHandler$$(this.$_eventManager$));
  this.$_tooltipMask$ = new D.$DvtRect$$($context$$546$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$DvtSparkChart$$.prototype.$SetOptions$ = function $$DvtSparkChart$$$$$SetOptions$$($options$$239$$) {
  $options$$239$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$239$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtSparkChart$$.prototype.setId = function $$DvtSparkChart$$$$setId$($id$$249$$) {
  D.$DvtSparkChart$$.$superclass$.setId.call(this, $id$$249$$);
  this.$_chart$ && this.$_chart$.setId($id$$249$$ + "chart")
};
D.$DvtSparkChart$$.prototype.$render$ = function $$DvtSparkChart$$$$$render$$($options$$240_tooltip$$51$$, $width$$146$$, $height$$134$$) {
  this.$SetOptions$($options$$240_tooltip$$51$$);
  !(0,window.isNaN)($width$$146$$) && !(0,window.isNaN)($height$$134$$) && (this.$Width$ = $width$$146$$, this.$Height$ = $height$$134$$);
  D.$DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$240_tooltip$$51$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_tooltipMask$);
  $options$$240_tooltip$$51$$ ? (this.$_peer$ = new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$240_tooltip$$51$$, this.$Options$.color), this.$_eventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : this.$_peer$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$()
};
D.$DvtSparkChart$$.prototype.render = D.$DvtSparkChart$$.prototype.$render$;
D.$DvtSparkChart$$.prototype.$getAutomation$ = function $$DvtSparkChart$$$$$getAutomation$$() {
  return new D.$DvtSparkChartAutomation$$(this)
};
D.$DvtSparkChart$$.prototype.getAutomation = D.$DvtSparkChart$$.prototype.$getAutomation$;
D.$DvtSparkChart$$.prototype.$GetComponentDescription$ = function $$DvtSparkChart$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "CHART")
};
D.$DvtSparkChart$$.prototype.$UpdateAriaAttributes$ = function $$DvtSparkChart$$$$$UpdateAriaAttributes$$() {
  var $desc$$26$$ = (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), this.$Options$.shortDesc ? [this.$Options$.shortDesc] : D.$JSCompiler_alias_NULL$$);
  (0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this) ? (this.$getCtx$().$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), $desc$$26$$]))) : (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $desc$$26$$))
};
D.$DvtSparkChart$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtSparkChart$$.prototype.$__getLogicalObject$ = (0,D.$JSCompiler_get$$)("$_peer$");
D.$DvtSparkChartAutomation$$ = (0,D.$JSCompiler_set$$)("$_sparkChart$");
(0,D.$goog$exportPath_$$)("DvtSparkChartAutomation", D.$DvtSparkChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartAutomation$$, D.$DvtAutomation$$, "DvtSparkChartAutomation");
D.$DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($dataItem$$39_itemIndex$$10$$) {
  $dataItem$$39_itemIndex$$10$$ = this.$_sparkChart$.$_chart$.$getAutomation$().$getDataItem$(0, $dataItem$$39_itemIndex$$10$$);
  return{borderColor:$dataItem$$39_itemIndex$$10$$.borderColor, color:$dataItem$$39_itemIndex$$10$$.color, date:$dataItem$$39_itemIndex$$10$$.x, low:$dataItem$$39_itemIndex$$10$$.low, high:$dataItem$$39_itemIndex$$10$$.high, value:$dataItem$$39_itemIndex$$10$$.low == D.$JSCompiler_alias_NULL$$ || $dataItem$$39_itemIndex$$10$$.high == D.$JSCompiler_alias_NULL$$ ? $dataItem$$39_itemIndex$$10$$.value : $dataItem$$39_itemIndex$$10$$.high - $dataItem$$39_itemIndex$$10$$.low}
};
D.$DvtSparkChartAutomation$$.prototype.getDataItem = D.$DvtSparkChartAutomation$$.prototype.$getDataItem$;
D.$DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$() {
  this.Init({skyros:D.$DvtSparkChartDefaults$VERSION_1$$, alta:D.$DvtSparkChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtSparkChartDefaults");
D.$DvtSparkChartDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#267db3"};
D.$DvtSparkChartDefaults$VERSION_1$$ = {skin:"skyros", type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, color:"#666699", firstColor:D.$JSCompiler_alias_NULL$$, lastColor:D.$JSCompiler_alias_NULL$$, highColor:D.$JSCompiler_alias_NULL$$, lowColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:0.25};
D.$DvtSparkChartEventManager$$ = function $$DvtSparkChartEventManager$$$($sparkChart$$1$$) {
  this.Init($sparkChart$$1$$.$getCtx$(), $sparkChart$$1$$.$__dispatchEvent$, $sparkChart$$1$$);
  this.$_sparkChart$ = $sparkChart$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartEventManager$$, D.$DvtEventManager$$, "DvtSparkChartEventManager");
D.$DvtSparkChartEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtSparkChartEventManager$$$$$ProcessKeyboardEvent$$($event$$705$$) {
  if(!this.$KeyboardHandler$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  if(9 == $event$$705$$.keyCode) {
    var $pos$$69$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_sparkChart$.$getCtx$());
    (0,D.$JSCompiler_StaticMethods_ProcessObjectTooltip$$)(this, $event$$705$$, $pos$$69$$.x, $pos$$69$$.y, this.$_sparkChart$.$__getLogicalObject$(), this.$_sparkChart$)
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtSparkChartEventManager$$.prototype.$OnBlur$ = function $$DvtSparkChartEventManager$$$$$OnBlur$$($event$$706$$) {
  D.$DvtSparkChartEventManager$$.$superclass$.$OnBlur$.call(this, $event$$706$$);
  this.$hideTooltip$()
};
D.$DvtSparkChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartRenderer$$, D.$DvtObj$$, "DvtSparkChartRenderer");
D.$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items$$30_spark$$, $width$$147$$, $height$$135$$) {
  var $chart$$327$$ = $items$$30_spark$$.$_chart$, $chartOptions$$ = D.$DvtSparkChartRenderer$$.$_convertOptionsObj$($items$$30_spark$$), $markerGap$$1_options$$241$$ = $items$$30_spark$$.$getOptions$();
  if("area" == $markerGap$$1_options$$241$$.type || "line" == $markerGap$$1_options$$241$$.type || "lineWithArea" == $markerGap$$1_options$$241$$.type) {
    $items$$30_spark$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$30_spark$$);
    var $hasMarkers$$ = D.$JSCompiler_alias_FALSE$$;
    if($markerGap$$1_options$$241$$.firstColor || $markerGap$$1_options$$241$$.lastColor || $markerGap$$1_options$$241$$.highColor || $markerGap$$1_options$$241$$.lowColor) {
      $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$
    }else {
      for(var $i$$759$$ = 0;$i$$759$$ < $items$$30_spark$$.length;$i$$759$$++) {
        if($items$$30_spark$$[$i$$759$$] && "on" == $items$$30_spark$$[$i$$759$$].markerDisplayed) {
          $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    if($hasMarkers$$ && 0 < $items$$30_spark$$.length || "none" == $markerGap$$1_options$$241$$.lineType) {
      $markerGap$$1_options$$241$$ = $markerGap$$1_options$$241$$.markerSize / 2, $width$$147$$ -= 2 * $markerGap$$1_options$$241$$, $height$$135$$ -= 2 * $markerGap$$1_options$$241$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($chart$$327$$, $markerGap$$1_options$$241$$, $markerGap$$1_options$$241$$)
    }
  }
  $chart$$327$$.$render$($chartOptions$$, $width$$147$$, $height$$135$$)
};
D.$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$242_spark$$1$$) {
  return($options$$242_spark$$1$$ = $options$$242_spark$$1$$.$getOptions$()) && $options$$242_spark$$1$$.items ? $options$$242_spark$$1$$.items : []
};
D.$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$31_spark$$2$$) {
  var $options$$243$$ = $items$$31_spark$$2$$.$getOptions$(), $chartOptions$$1$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]};
  $chartOptions$$1$$.translations = $options$$243$$.translations;
  var $bFloatingBar_zeroBaseline$$1$$ = "floatingBar" == $options$$243$$.type, $axisGap$$1_barSpacing_chartItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$2$$ = -window.Infinity, $lowValue$$2$$ = window.Infinity;
  $items$$31_spark$$2$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$31_spark$$2$$);
  for(var $i$$760$$ = 0;$i$$760$$ < $items$$31_spark$$2$$.length;$i$$760$$++) {
    var $item$$49_topValue$$ = $items$$31_spark$$2$$[$i$$760$$], $baseValue_chartItem$$ = {};
    $item$$49_topValue$$ instanceof window.Object ? ($bFloatingBar_zeroBaseline$$1$$ ? ($baseValue_chartItem$$.low = $item$$49_topValue$$.floatValue, $baseValue_chartItem$$.high = $item$$49_topValue$$.floatValue + $item$$49_topValue$$.value) : ($baseValue_chartItem$$.value = $item$$49_topValue$$.value, $baseValue_chartItem$$.low = $item$$49_topValue$$.low, $baseValue_chartItem$$.high = $item$$49_topValue$$.high), $item$$49_topValue$$.date && ($chartOptions$$1$$.timeAxisType = "enabled", $chartOptions$$1$$.groups.push($item$$49_topValue$$.date)), 
    "on" == $item$$49_topValue$$.markerDisplayed && ($baseValue_chartItem$$.markerDisplayed = "on"), $item$$49_topValue$$.color && ($baseValue_chartItem$$.color = $item$$49_topValue$$.color), $item$$49_topValue$$.borderColor && ($baseValue_chartItem$$.borderColor = $item$$49_topValue$$.borderColor), $item$$49_topValue$$.markerShape && ($baseValue_chartItem$$.markerShape = $item$$49_topValue$$.markerShape), $item$$49_topValue$$.markerSize && ($baseValue_chartItem$$.markerSize = $item$$49_topValue$$.markerSize)) : 
    $baseValue_chartItem$$.value = $item$$49_topValue$$;
    $axisGap$$1_barSpacing_chartItems$$.push($baseValue_chartItem$$);
    $item$$49_topValue$$ = $baseValue_chartItem$$.value != D.$JSCompiler_alias_NULL$$ ? $baseValue_chartItem$$.value : window.Math.max($baseValue_chartItem$$.low, $baseValue_chartItem$$.high);
    $highValue$$2$$ < $item$$49_topValue$$ && ($highValue$$2$$ = $item$$49_topValue$$, $highIndex$$ = $i$$760$$);
    $baseValue_chartItem$$ = $baseValue_chartItem$$.value != D.$JSCompiler_alias_NULL$$ ? $baseValue_chartItem$$.value : window.Math.min($baseValue_chartItem$$.low, $baseValue_chartItem$$.high);
    $lowValue$$2$$ > $baseValue_chartItem$$ && ($lowValue$$2$$ = $baseValue_chartItem$$, $lowIndex$$ = $i$$760$$)
  }
  $options$$243$$.highColor && 0 <= $highIndex$$ && ($axisGap$$1_barSpacing_chartItems$$[$highIndex$$].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$highIndex$$].color || ($axisGap$$1_barSpacing_chartItems$$[$highIndex$$].color = $options$$243$$.highColor));
  $options$$243$$.lowColor && 0 <= $lowIndex$$ && ($axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].color || ($axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].color = $options$$243$$.lowColor));
  $options$$243$$.firstColor && 0 < $axisGap$$1_barSpacing_chartItems$$.length && ($axisGap$$1_barSpacing_chartItems$$[0].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[0].color || ($axisGap$$1_barSpacing_chartItems$$[0].color = $options$$243$$.firstColor));
  $options$$243$$.lastColor && 0 < $axisGap$$1_barSpacing_chartItems$$.length && ($axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].color || ($axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].color = $options$$243$$.lastColor));
  $chartOptions$$1$$.series = [{items:$axisGap$$1_barSpacing_chartItems$$, areaColor:$options$$243$$.areaColor}];
  $options$$243$$.referenceObjects && ($chartOptions$$1$$.yAxis.referenceObjects = $options$$243$$.referenceObjects);
  $chartOptions$$1$$.__spark = D.$JSCompiler_alias_TRUE$$;
  $axisGap$$1_barSpacing_chartItems$$ = $options$$243$$.barSpacing;
  "auto" == $axisGap$$1_barSpacing_chartItems$$ && ($axisGap$$1_barSpacing_chartItems$$ = 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? "subpixel" : "pixel");
  $chartOptions$$1$$.__sparkBarSpacing = $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$1$$.type = $bFloatingBar_zeroBaseline$$1$$ ? "bar" : $options$$243$$.type;
  $chartOptions$$1$$.animationOnDataChange = $options$$243$$.animationOnDataChange;
  $chartOptions$$1$$.animationOnDisplay = $options$$243$$.animationOnDisplay;
  $chartOptions$$1$$.emptyText = $options$$243$$.emptyText;
  $chartOptions$$1$$.styleDefaults.colors = [$options$$243$$.color];
  $chartOptions$$1$$.styleDefaults.animationDuration = $options$$243$$.animationDuration;
  $chartOptions$$1$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$1$$.styleDefaults.lineWidth = $options$$243$$.lineWidth;
  $chartOptions$$1$$.styleDefaults.lineStyle = $options$$243$$.lineStyle;
  $chartOptions$$1$$.styleDefaults.lineType = $options$$243$$.lineType;
  $chartOptions$$1$$.styleDefaults.markerSize = $options$$243$$.markerSize;
  $chartOptions$$1$$.styleDefaults.markerShape = $options$$243$$.markerShape;
  $chartOptions$$1$$.styleDefaults.barGapRatio = $options$$243$$.barGapRatio;
  $chartOptions$$1$$.styleDefaults.dataItemGaps = "0%";
  $chartOptions$$1$$.xAxis.rendered = "off";
  $chartOptions$$1$$.yAxis.rendered = "off";
  $bFloatingBar_zeroBaseline$$1$$ = "zero" == $options$$243$$.baselineScaling;
  $axisGap$$1_barSpacing_chartItems$$ = $highValue$$2$$ != $lowValue$$2$$ ? 0.1 * ($highValue$$2$$ - $lowValue$$2$$) : 0.1 * window.Math.abs($highValue$$2$$);
  $chartOptions$$1$$.yAxis.min = $bFloatingBar_zeroBaseline$$1$$ && 0 <= $lowValue$$2$$ ? 0 : $lowValue$$2$$ - $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$1$$.yAxis.max = $bFloatingBar_zeroBaseline$$1$$ && 0 >= $highValue$$2$$ ? 0 : $highValue$$2$$ + $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$1$$.styleDefaults.seriesEffect = "none" == $options$$243$$.visualEffects || !("area" == $options$$243$$.type || "lineWithArea" == $options$$243$$.type) ? "color" : "gradient";
  $chartOptions$$1$$.layout = {gapWidthRatio:0, gapHeightRatio:0};
  $chartOptions$$1$$.legend = {rendered:"off"};
  $chartOptions$$1$$.title = $chartOptions$$1$$.title ? $chartOptions$$1$$.title : {};
  $chartOptions$$1$$.title.style = "font-size: 12px; color: #404259;";
  return $chartOptions$$1$$
};
  return D;
});