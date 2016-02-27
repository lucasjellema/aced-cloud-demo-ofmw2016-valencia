/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSunburstRotationEvent$$ = function $$DvtSunburstRotationEvent$$$($startAngle$$4$$, $bComplete$$) {
  this.Init($bComplete$$ === D.$JSCompiler_alias_FALSE$$ ? "sunburstRotationInput" : "sunburstRotation");
  this.$_startAngle$ = $startAngle$$4$$ % 360
};
(0,D.$goog$exportPath_$$)("DvtSunburstRotationEvent", D.$DvtSunburstRotationEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstRotationEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstRotationEvent");
D.$DvtSunburstRotationEvent$$.TYPE = "sunburstRotation";
D.$DvtSunburstRotationEvent$$.TYPE_INPUT = "sunburstRotationInput";
D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$ = (0,D.$JSCompiler_get$$)("$_startAngle$");
D.$DvtSunburstRotationEvent$$.prototype.getStartAngle = D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$;
D.$DvtSunburst$$ = function $$DvtSunburst$$$($context$$570$$, $callback$$149$$, $callbackObj$$100$$) {
  this.Init($context$$570$$, $callback$$149$$, $callbackObj$$100$$)
};
(0,D.$goog$exportPath_$$)("DvtSunburst", D.$DvtSunburst$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburst$$, D.$DvtBaseTreeView$$, "DvtSunburst");
D.$DvtSunburst$$.newInstance = function $$DvtSunburst$$$newInstance$($context$$571$$, $callback$$150$$, $callbackObj$$101$$) {
  return new D.$DvtSunburst$$($context$$571$$, $callback$$150$$, $callbackObj$$101$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$572$$, $callback$$151$$, $callbackObj$$102$$) {
  D.$DvtSunburst$$.$superclass$.Init.call(this, $context$$572$$, $callback$$151$$, $callbackObj$$102$$);
  this.$Defaults$ = new D.$DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * window.Math.PI
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($options$$253_props$$4$$) {
  D.$DvtSunburst$$.$superclass$.$ApplyParsedProperties$.call(this, $options$$253_props$$4$$);
  $options$$253_props$$4$$ = this.$getOptions$();
  this.$_rotateCursor$ = (0,D.$DvtAgent$isPlatformIE$$)() ? "url(" + $options$$253_props$$4$$._resources.rotateCursor + "), auto" : "url(" + $options$$253_props$$4$$._resources.rotateCursor + ") 8 8, auto";
  this.$_startAngle$ = (360 - $options$$253_props$$4$$.startAngle) * D.$DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > window.Math.PI && (this.$_startAngle$ -= D.$DvtSunburstNode$TWO_PI$$);
  "auto" == $options$$253_props$$4$$.animationOnDisplay && ($options$$253_props$$4$$.animationOnDisplay = "fan")
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$115$$) {
  var $bufferSpace$$ = window.Math.max(window.Math.ceil(3 * window.Math.min($availSpace$$115$$.$w$, $availSpace$$115$$.$h$) / 400), 2);
  $availSpace$$115$$.x += $bufferSpace$$;
  $availSpace$$115$$.y += $bufferSpace$$;
  $availSpace$$115$$.$w$ -= 2 * $bufferSpace$$;
  $availSpace$$115$$.$h$ -= 2 * $bufferSpace$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$115$$);
  this.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$(this, $availSpace$$115$$, this.$_legendSource$);
  this.$_totalRadius$ = window.Math.floor(window.Math.min($availSpace$$115$$.$w$, $availSpace$$115$$.$h$) / 2);
  this.$_root$ && D.$DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$getOptions$().sorting)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$177$$, $bounds$$148$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$177$$);
  this.$_breadcrumbs$ && $container$$177$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$177$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new D.$DvtPoint$$($bounds$$148$$.x + $bounds$$148$$.$w$ / 2, $bounds$$148$$.y + $bounds$$148$$.$h$ / 2);
  if("off" != this.$getOptions$().rotation && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $buffer$$11_nodeContainer$$12_rotationShape$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 60 : 15, $buffer$$11_nodeContainer$$12_rotationShape$$ = new D.$DvtCircle$$(this.$getCtx$(), $bounds$$148$$.x + $bounds$$148$$.$w$ / 2, $bounds$$148$$.y + $bounds$$148$$.$h$ / 2, this.$_totalRadius$ + $buffer$$11_nodeContainer$$12_rotationShape$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($buffer$$11_nodeContainer$$12_rotationShape$$);
    $buffer$$11_nodeContainer$$12_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$177$$.$addChild$($buffer$$11_nodeContainer$$12_rotationShape$$);
    this.$__getEventManager$().$associate$($buffer$$11_nodeContainer$$12_rotationShape$$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$11_nodeContainer$$12_rotationShape$$ = new D.$DvtContainer$$(this.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buffer$$11_nodeContainer$$12_rotationShape$$, this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$177$$.$addChild$($buffer$$11_nodeContainer$$12_rotationShape$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $nodeLayer$$ = new D.$DvtContainer$$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    (0,D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$)(this, this.$_root$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$177$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$60$$, $context$$573$$, $callback$$152$$, $callbackObj$$103$$) {
  return new D.$DvtSunburstEventManager$$($view$$60$$, $context$$573$$, $callback$$152$$, $callbackObj$$103$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$178$$, $bounds$$149$$) {
  if("fan" === this.$getOptions$().animationOnDisplay && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$37$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, this.$AnimationDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$37$$.$_animator$, "typeNumber", this, this.$__getAngleExtent$, this.$_animateAngleExtent$, 2 * window.Math.PI);
    return $anim$$37$$
  }
  return D.$DvtSunburst$$.$superclass$.$GetDisplayAnimation$.call(this, $container$$178$$, $bounds$$149$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$95$$ = D.$DvtSunburst$$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$95$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($ret$$95$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$95$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$116_selectedNodes$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$116_selectedNodes$$);
    this.$Render$(this.$_container$, $availSpace$$116_selectedNodes$$);
    for(var $availSpace$$116_selectedNodes$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$778$$ = 0;$i$$778$$ < $availSpace$$116_selectedNodes$$.length;$i$$778$$++) {
      $availSpace$$116_selectedNodes$$[$i$$778$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  this.$_angleExtent$ < 2 * window.Math.PI && this.$_animateAngleExtent$(2 * window.Math.PI);
  D.$DvtSunburst$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$78$$) {
  this.$_selectedLayer$.$addChild$($displayable$$78$$);
  !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_selectedLayer$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_selectedLayer$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$))
};
D.$JSCompiler_prototypeAlias$$.$__getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$3$$) {
  this.$_angleExtent$ = $extent$$3$$;
  this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this.$_root$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods___setRotationAnchor$$ = function $$JSCompiler_StaticMethods___setRotationAnchor$$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$54$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$54$$;
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$ = new D.$DvtRect$$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$getCtx$(), 0, 0, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Width$, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.setCursor($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotateCursor$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$addChild$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$__getEventManager$().$associate$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
};
D.$JSCompiler_StaticMethods___rotate$$ = function $$JSCompiler_StaticMethods___rotate$$$($JSCompiler_StaticMethods___rotate$self$$, $newAngle$$) {
  var $change$$1$$ = $newAngle$$ - $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$;
  $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$ = $newAngle$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += $change$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ < -window.Math.PI ? $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += 2 * window.Math.PI : $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ > window.Math.PI && ($JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ -= 2 * window.Math.PI);
  $JSCompiler_StaticMethods___rotate$self$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___rotate$self$$.$Width$, $JSCompiler_StaticMethods___rotate$self$$.$Height$));
  $JSCompiler_StaticMethods___rotate$self$$.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)($JSCompiler_StaticMethods___rotate$self$$.$_root$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods___rotate$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$(360 - window.Math.round(180 * $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ / window.Math.PI), D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods___endRotation$$ = function $$JSCompiler_StaticMethods___endRotation$$$($JSCompiler_StaticMethods___endRotation$self$$) {
  $JSCompiler_StaticMethods___endRotation$self$$.$_currentAngle$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods___endRotation$self$$.removeChild($JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$ = D.$JSCompiler_alias_NULL$$;
  var $degrees$$8$$ = 360 - window.Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / window.Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__calcAngle$$ = function $$JSCompiler_StaticMethods__calcAngle$$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$258$$, $y$$231$$) {
  return window.Math.atan2($y$$231$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$258$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$259$$, $y$$232$$) {
  return this.$_root$.$getNodeUnderPoint$($x$$259$$ - this.$_translatePt$.x, $y$$232$$ - this.$_translatePt$.y)
};
D.$JSCompiler_prototypeAlias$$.$__showDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$__showDropSiteFeedback$$($feedback$$2_node$$292$$) {
  ($feedback$$2_node$$292$$ = D.$DvtSunburst$$.$superclass$.$__showDropSiteFeedback$.call(this, $feedback$$2_node$$292$$)) && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($feedback$$2_node$$292$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $feedback$$2_node$$292$$
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "SUNBURST")
};
D.$JSCompiler_prototypeAlias$$.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSunburstBundle");
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($nodeOptions$$1$$) {
  return new D.$DvtSunburstNode$$(this, $nodeOptions$$1$$)
};
D.$DvtSunburstNode$$ = function $$DvtSunburstNode$$$($sunburst$$1$$, $props$$5$$) {
  this.Init($sunburst$$1$$, $props$$5$$);
  var $nodeDefaults$$ = this.$_view$.$getOptions$().nodeDefaults;
  this.$_labelDisplay$ = $props$$5$$.labelDisplay ? $props$$5$$.labelDisplay : $nodeDefaults$$.labelDisplay;
  this.$_labelHalign$ = $props$$5$$.labelHalign ? $props$$5$$.labelHalign : $nodeDefaults$$.labelHalign;
  this.$_radius$ = $props$$5$$.radius
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstNode$$, D.$DvtBaseTreeNode$$, "DvtSunburstNode");
D.$DvtSunburstNode$TWO_PI$$ = 2 * window.Math.PI;
D.$DvtSunburstNode$$.prototype.$render$ = function $$DvtSunburstNode$$$$$render$$($container$$179$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$179$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$179$$.$addChild$(this.$_shape$);
    var $afRoot$$10_template$$24$$ = (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this);
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$) && $afRoot$$10_template$$24$$) {
      var $dims$$65_elAttrs$$1_sqrt2$$ = window.Math.sqrt(2), $aw$$3_matrix$$21$$ = this.$_outerRadius$ * $dims$$65_elAttrs$$1_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $dims$$65_elAttrs$$1_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $dims$$65_elAttrs$$1_sqrt2$$ + 2;
      var $dims$$65_elAttrs$$1_sqrt2$$ = this.$getOptions$()._cf, $afContext$$63$$ = this.$_view$.$_afContext$;
      $afContext$$63$$.$_elContext$ = $dims$$65_elAttrs$$1_sqrt2$$;
      0 < $aw$$3_matrix$$21$$ && 0 < $aw$$3_matrix$$21$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$63$$, $aw$$3_matrix$$21$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$63$$, $aw$$3_matrix$$21$$), $afContext$$63$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$10_template$$24$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$63$$, $afRoot$$10_template$$24$$, this.$_shape$), $dims$$65_elAttrs$$1_sqrt2$$ = 
      $afRoot$$10_template$$24$$.$getDimensions$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$10_template$$24$$, this.$_x$ + ($aw$$3_matrix$$21$$ - $dims$$65_elAttrs$$1_sqrt2$$.$w$) / 2, this.$_y$ + ($aw$$3_matrix$$21$$ - $dims$$65_elAttrs$$1_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($dims$$65_elAttrs$$1_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $dims$$65_elAttrs$$1_sqrt2$$.x, $dims$$65_elAttrs$$1_sqrt2$$.y, $dims$$65_elAttrs$$1_sqrt2$$.$w$, $dims$$65_elAttrs$$1_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw$$3_matrix$$21$$ = this.$_text$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_isIdentity$$)($aw$$3_matrix$$21$$) || this.$_textBackground$.$setMatrix$($aw$$3_matrix$$21$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$();
    this.$renderChildren$($container$$179$$)
  }
};
D.$DvtSunburstNode$$.prototype.$setSelected$ = function $$DvtSunburstNode$$$$$setSelected$$($selected$$41$$) {
  D.$DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$41$$);
  this.$isSelected$() ? (this.$_shape$.$setSelected$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$(D.$JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$showHoverEffect$ = function $$DvtSunburstNode$$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$hideHoverEffect$ = function $$DvtSunburstNode$$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$ = function $$JSCompiler_StaticMethods_isExpandCollapseEnabled$$$($JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$) {
  return"insert" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$ || "insertAndReplace" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$
};
D.$DvtSunburstNode$$.prototype.$getNextNavigable$ = function $$DvtSunburstNode$$$$$getNextNavigable$$($event$$738_next$$16$$) {
  var $keyCode$$47_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$8$$, $i$$inline_8061_idx$$34$$, $root$$28$$;
  if($event$$738_next$$16$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$738_next$$16$$)
  }
  $keyCode$$47_lastVisitedChild$$ = $event$$738_next$$16$$.keyCode;
  if(32 == $keyCode$$47_lastVisitedChild$$ && $event$$738_next$$16$$.ctrlKey) {
    return this
  }
  for($root$$28$$ = this;$root$$28$$.$_parent$;) {
    $root$$28$$ = $root$$28$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$8$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$28$$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this));
  a: {
    for($i$$inline_8061_idx$$34$$ = 0;$i$$inline_8061_idx$$34$$ < $lastVisitedMidAngle_navigables$$8$$.length;$i$$inline_8061_idx$$34$$++) {
      if(this === $lastVisitedMidAngle_navigables$$8$$[$i$$inline_8061_idx$$34$$]) {
        break a
      }
    }
    $i$$inline_8061_idx$$34$$ = -1
  }
  var $midAngle$$1$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$1$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($midAngle$$1$$);
  switch($keyCode$$47_lastVisitedChild$$) {
    case 38:
      if(this === $root$$28$$ || 180 < $midAngle$$1$$) {
        if($keyCode$$47_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$8$$ = $keyCode$$47_lastVisitedChild$$.$_startAngle$ + $keyCode$$47_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$8$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$8$$), 180 < $lastVisitedMidAngle_navigables$$8$$) {
            return $keyCode$$47_lastVisitedChild$$
          }
        }
        $event$$738_next$$16$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$738_next$$16$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$738_next$$16$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 40:
      if(this === $root$$28$$ || 0 <= $midAngle$$1$$ && 180 >= $midAngle$$1$$) {
        if($keyCode$$47_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$8$$ = $keyCode$$47_lastVisitedChild$$.$_startAngle$ + $keyCode$$47_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$8$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$8$$), 0 <= $lastVisitedMidAngle_navigables$$8$$ && 180 >= $lastVisitedMidAngle_navigables$$8$$) {
            return $keyCode$$47_lastVisitedChild$$
          }
        }
        $event$$738_next$$16$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$738_next$$16$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$738_next$$16$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 37:
      $event$$738_next$$16$$ = 1 == $lastVisitedMidAngle_navigables$$8$$.length ? this : 0 == $i$$inline_8061_idx$$34$$ ? $lastVisitedMidAngle_navigables$$8$$[$lastVisitedMidAngle_navigables$$8$$.length - 1] : $lastVisitedMidAngle_navigables$$8$$[$i$$inline_8061_idx$$34$$ - 1];
      break;
    case 39:
      $event$$738_next$$16$$ = 1 == $lastVisitedMidAngle_navigables$$8$$.length ? this : $i$$inline_8061_idx$$34$$ == $lastVisitedMidAngle_navigables$$8$$.length - 1 ? $lastVisitedMidAngle_navigables$$8$$[0] : $lastVisitedMidAngle_navigables$$8$$[$i$$inline_8061_idx$$34$$ + 1];
      break;
    default:
      $event$$738_next$$16$$ = this
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$738_next$$16$$);
  return $event$$738_next$$16$$
};
D.$JSCompiler_StaticMethods__navigateToParent$$ = function $$JSCompiler_StaticMethods__navigateToParent$$$($JSCompiler_StaticMethods__navigateToParent$self_next$$17$$) {
  var $parent$$81$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$17$$.$_parent$;
  $parent$$81$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$17$$ = $parent$$81$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($parent$$81$$));
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($JSCompiler_StaticMethods__navigateToParent$self_next$$17$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$17$$
};
D.$DvtSunburstNode$_normalizedRadToDeg$$ = function $$DvtSunburstNode$_normalizedRadToDeg$$$($deg$$1_rad$$2$$) {
  $deg$$1_rad$$2$$ = D.$DvtMath$$.$radsToDegrees$($deg$$1_rad$$2$$);
  0 > $deg$$1_rad$$2$$ ? $deg$$1_rad$$2$$ += 360 : 360 < $deg$$1_rad$$2$$ && ($deg$$1_rad$$2$$ -= 360);
  return $deg$$1_rad$$2$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$152$$ = this.$_shape$.$getDimensions$(), $point$$57$$ = new D.$DvtPoint$$($bounds$$152$$.x, $bounds$$152$$.y), $point$$57$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, $point$$57$$);
    $bounds$$152$$.x = $point$$57$$.x;
    $bounds$$152$$.y = $point$$57$$.y;
    return $bounds$$152$$
  }
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return(0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, (0,D.$DvtSunburstNode$_calcPointOnArc$$)(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$10$$, $outerRadius$$8$$, $startAngle$$20$$, $angleExtent$$18$$) {
  this.$_innerRadius$ = $innerRadius$$10$$;
  this.$_outerRadius$ = $outerRadius$$8$$;
  this.$_startAngle$ = $startAngle$$20$$;
  this.$_angleExtent$ = $angleExtent$$18$$;
  this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? (0,D.$DvtSolidFill$invisibleFill$$)() : D.$DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$($endStartAngle_endState$$16$$) {
  var $r$$90$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$26$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$60$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$), $startAngle$$21$$ = this.$_startAngle$;
  $endStartAngle_endState$$16$$ && !(0,window.isNaN)($endStartAngle_endState$$16$$[2]) && ($endStartAngle_endState$$16$$ = $endStartAngle_endState$$16$$[2], $endStartAngle_endState$$16$$ - this.$_startAngle$ > window.Math.PI ? $startAngle$$21$$ += D.$DvtSunburstNode$TWO_PI$$ : this.$_startAngle$ - $endStartAngle_endState$$16$$ > window.Math.PI && ($startAngle$$21$$ -= D.$DvtSunburstNode$TWO_PI$$));
  return[this.$_innerRadius$, this.$_outerRadius$, $startAngle$$21$$, this.$_angleExtent$, $r$$90$$, $g$$26$$, $b$$60$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$64$$) {
  this.$setLayoutParams$($params$$64$$[0], $params$$64$$[1], $params$$64$$[2], $params$$64$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$64$$[4]), window.Math.round($params$$64$$[5]), window.Math.round($params$$64$$[6]));
  (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$51$$, $oldNode$$18$$) {
  $oldNode$$18$$.$_hasLayout$ && 0 < $oldNode$$18$$.$_angleExtent$ ? D.$DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$51$$, $oldNode$$18$$) : this.$animateInsert$($handler$$51$$)
};
D.$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$getNodeUnderPoint$$($x$$260$$, $y$$233$$) {
  if(this.contains($x$$260$$, $y$$233$$)) {
    return this
  }
  for(var $childNodes$$23$$ = this.$getChildNodes$(), $i$$781$$ = 0;$i$$781$$ < $childNodes$$23$$.length;$i$$781$$++) {
    var $ret$$96$$ = $childNodes$$23$$[$i$$781$$].$getNodeUnderPoint$($x$$260$$, $y$$233$$);
    if($ret$$96$$) {
      return $ret$$96$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$261$$, $y$$234$$) {
  var $angle$$55$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($x$$261$$, $y$$234$$);
  return window.Math.sqrt($x$$261$$ * $x$$261$$ + $y$$234$$ * $y$$234$$) >= this.$_innerRadius$ && window.Math.sqrt($x$$261$$ * $x$$261$$ + $y$$234$$ * $y$$234$$) <= this.$_outerRadius$ && (0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $angle$$55$$)
};
D.$JSCompiler_StaticMethods_ContainsAngle$$ = function $$JSCompiler_StaticMethods_ContainsAngle$$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$56$$) {
  for(;$angle$$56$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$56$$ += D.$DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$56$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > D.$DvtSunburstNode$TWO_PI$$;) {
    $angle$$56$$ -= D.$DvtSunburstNode$TWO_PI$$
  }
  return $angle$$56$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$56$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
};
D.$DvtSunburstNode$_calcPointOnArc$$ = function $$DvtSunburstNode$_calcPointOnArc$$$($radius$$27$$, $angle$$57$$) {
  return{x:window.Math.cos($angle$$57$$) * $radius$$27$$, y:window.Math.sin($angle$$57$$) * $radius$$27$$}
};
D.$DvtSunburstNode$_calcAngle$$ = function $$DvtSunburstNode$_calcAngle$$$($x$$263$$, $y$$236$$) {
  var $angle$$58$$ = window.Math.atan2($y$$236$$, $x$$263$$);
  0 > $angle$$58$$ ? $angle$$58$$ += D.$DvtSunburstNode$TWO_PI$$ : $angle$$58$$ > D.$DvtSunburstNode$TWO_PI$$ && ($angle$$58$$ -= D.$DvtSunburstNode$TWO_PI$$);
  return $angle$$58$$
};
D.$DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cmd$$17_shape$$88$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)(this), $cmd$$17_shape$$88$$ = new D.$DvtPath$$(this.$_view$.$getCtx$(), $cmd$$17_shape$$88$$);
  this.$_view$.$__getEventManager$().$associate$($cmd$$17_shape$$88$$, this);
  $cmd$$17_shape$$88$$.$setAlpha$(this.$getAlpha$());
  $cmd$$17_shape$$88$$.$setFill$(this.$GetFill$());
  var $nodeDefaults$$1$$ = this.$_view$.$getOptions$().nodeDefaults;
  $cmd$$17_shape$$88$$.$setStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.borderColor, 0.3));
  $cmd$$17_shape$$88$$.$setHoverStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.hoverColor, 1, 3));
  $cmd$$17_shape$$88$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.selectedInnerColor, 1, 1.5), new D.$DvtSolidStroke$$($nodeDefaults$$1$$.selectedOuterColor, 1, 3.5));
  $cmd$$17_shape$$88$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.hoverColor, 1, 3));
  $cmd$$17_shape$$88$$.$setSelectable$(this.$isSelectable$());
  this.$_bArtificialRoot$ && ($cmd$$17_shape$$88$$.$setAlpha$(0.001), $cmd$$17_shape$$88$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  return $cmd$$17_shape$$88$$
};
D.$JSCompiler_StaticMethods__createPathCmd$$ = function $$JSCompiler_StaticMethods__createPathCmd$$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$18_p1$$9$$, $p2$$8$$, $p3$$3$$, $p4$$3$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$ ? ($cmd$$18_p1$$9$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$8$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$18_p1$$9$$ = D.$DvtPathUtils$$.moveTo($cmd$$18_p1$$9$$.x, $cmd$$18_p1$$9$$.y) + 
  D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$8$$.x, $p2$$8$$.y) + D.$DvtPathUtils$$.lineTo($p3$$3$$.x, $p3$$3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 
  0, $p4$$3$$.x, $p4$$3$$.y) + D.$DvtPathUtils$$.closePath()) : ($cmd$$18_p1$$9$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$8$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), 
  $p3$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$18_p1$$9$$ = D.$DvtPathUtils$$.moveTo($cmd$$18_p1$$9$$.x, $cmd$$18_p1$$9$$.y) + 
  D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$8$$.x, $p2$$8$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$18_p1$$9$$.x, $cmd$$18_p1$$9$$.y), 
  0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$18_p1$$9$$ += D.$DvtPathUtils$$.moveTo($p4$$3$$.x, $p4$$3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p3$$3$$.x, $p3$$3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$3$$.x, $p4$$3$$.y)), $cmd$$18_p1$$9$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$18_p1$$9$$
};
D.$DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$) {
  if(!this.$_textStr$ || (!$JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) || this == this.$_view$.$_root$ && this.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = D.$JSCompiler_alias_FALSE$$;
  if("auto" == this.$_labelDisplay$) {
    if($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = !(0,D.$DvtAgent$isPlatformIE$$)()) {
      (0,D.$DvtAgent$_initialize$$)(), $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = "Windows" == D.$DvtAgent$_os$$
    }
    $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
  }else {
    "rotated" == this.$_labelDisplay$ && ($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = D.$JSCompiler_alias_TRUE$$)
  }
  if($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ && this.$_angleExtent$ < this.$_view$.$_angleExtent$) {
    var $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ = window.Math.max(this.$_innerRadius$, 10), $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$ = this.$_outerRadius$ - $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ - 6, $availHeight$$inline_8068_x1$$inline_8082$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ + 
    6);
    if(6 >= $availHeight$$inline_8068_x1$$inline_8082$$) {
      $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$, 0, 0), $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$), 
      D.$DvtTextUtils$$.$fitText$($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$, $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$, $availHeight$$inline_8068_x1$$inline_8082$$, $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$)) {
        $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$ = ($angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ + this.$_outerRadius$) / 2;
        if("inner" == this.$_labelHalign$ || "outer" == this.$_labelHalign$) {
          $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$.$addChild$($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$), $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ = $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.$getDimensions$().$w$, "inner" == this.$_labelHalign$ ? $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$ = 
          $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ + 4.5 + $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ / 2 : "outer" == this.$_labelHalign$ && ($anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$ = this.$_outerRadius$ - 4.5 - $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ / 2)
        }
        $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.$alignCenter$();
        $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.$alignMiddle$();
        $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ = $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ >= D.$DvtSunburstNode$TWO_PI$$ ? $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ - D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$;
        $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ = 0 > $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ ? $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ + D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$;
        $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ > 0.5 * window.Math.PI && $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ < 1.5 * window.Math.PI && ($angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ += window.Math.PI);
        $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.$setRotation$($angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$, $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$.x, $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$.y);
        $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ = $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$
      }else {
        $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = {x:0, y:0}
    }else {
      if($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ = 3 * (0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) / 2, $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$ = 
      (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.x + $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ / 2, $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.y), !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.x - 
      $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ / 2, $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.y)) || !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$)) {
        $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    if($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$) {
      $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$, $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.x, $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.y, D.$JSCompiler_alias_NULL$$);
      $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$);
      $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$.$alignCenter$();
      $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$.$alignMiddle$();
      $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      for(var $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$ = D.$DvtTextUtils$$.$guessTextDimensions$($angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$), $x2$$inline_8083$$ = $availHeight$$inline_8068_x1$$inline_8082$$ = $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.x, $y1$$inline_8084$$ = $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.y - 
      $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$.$h$ / 2, $y2$$inline_8085$$ = $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.y + $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$.$h$ / 2;this.contains($availHeight$$inline_8068_x1$$inline_8082$$, $y1$$inline_8084$$) && this.contains($availHeight$$inline_8068_x1$$inline_8082$$, $y2$$inline_8085$$);) {
        $availHeight$$inline_8068_x1$$inline_8082$$--
      }
      for(;this.contains($x2$$inline_8083$$, $y1$$inline_8084$$) && this.contains($x2$$inline_8083$$, $y2$$inline_8085$$);) {
        $x2$$inline_8083$$++
      }
      $availHeight$$inline_8068_x1$$inline_8082$$ += 3;
      $x2$$inline_8083$$ -= 3;
      $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = 2 * window.Math.min($JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.x - $availHeight$$inline_8068_x1$$inline_8082$$, $x2$$inline_8083$$ - $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$.x);
      $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ < $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$.$w$ && ($angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$.$setX$(($availHeight$$inline_8068_x1$$inline_8082$$ + $x2$$inline_8083$$) / 2), $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$ = $x2$$inline_8083$$ - 
      $availHeight$$inline_8068_x1$$inline_8082$$);
      $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ = D.$DvtTextUtils$$.$fitText$($angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$, $JSCompiler_temp$$28_bRotated_text$$inline_8069_textAnchor$$inline_8077_usableSpace$$inline_8086$$, $anchorRadius$$inline_8070_availWidth$$inline_8067_estimatedDims$$inline_8081_rightAngle$$inline_8079$$.$h$, $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$) ? 
      $angle$$inline_8073_approxWidth$$inline_8078_innerStartCoord$$inline_8066_text$$inline_8080$$ : D.$JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$ = D.$JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$457_actualTextWidth$$inline_8071_container$$181_textAnchor$$inline_8072$$
};
D.$DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$;
    $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$ = this.$_shape$;
    var $JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$ = this.$isDisclosed$();
    if(!$JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$ || !(0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this) || !this.$hasChildren$() && $JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$) {
      $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$) {
        var $JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$ = this.$_view$.$getCtx$(), $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$ = this.$_view$.$getOptions$()._resources, $center$$inline_8092_upState$$inline_11343_upState$$inline_11351$$ = new D.$DvtImage$$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, 
        $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$.collapse, 0, 0, 16, 16), $overState$$inline_11344_overState$$inline_11352$$ = new D.$DvtImage$$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$.collapseOver, 0, 0, 16, 16), $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$ = this.$_view$.$getCtx$(), $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$ = this.$_view$.$getOptions$()._resources, $center$$inline_8092_upState$$inline_11343_upState$$inline_11351$$ = new D.$DvtImage$$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, 
        $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$.expand, 0, 0, 16, 16), $overState$$inline_11344_overState$$inline_11352$$ = new D.$DvtImage$$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$.expandOver, 0, 0, 16, 16), $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$.expandDown, 0, 0, 16, 16)
      }
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($center$$inline_8092_upState$$inline_11343_upState$$inline_11351$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_11344_overState$$inline_11352$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$);
      $JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$ = new D.$DvtButton$$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, $center$$inline_8092_upState$$inline_11343_upState$$inline_11351$$, $overState$$inline_11344_overState$$inline_11352$$, $downState$$inline_11345_downState$$inline_11353_resources$$inline_11342_resources$$inline_11350$$);
      $JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$expandCollapseNode$, D.$JSCompiler_alias_FALSE$$, this);
      $center$$inline_8092_upState$$inline_11343_upState$$inline_11351$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, $center$$inline_8092_upState$$inline_11343_upState$$inline_11351$$.x - 8, $center$$inline_8092_upState$$inline_11343_upState$$inline_11351$$.y - 8);
      $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$.$addChild$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$);
      $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isDisclosed$() ? "COLLAPSE" : "EXPAND");
      this.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$, new D.$DvtBaseTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$));
      $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$ = $JSCompiler_temp$$9376_bDisclosed$$inline_8090_button$$inline_11346_button$$inline_11354_button$$inline_8091_context$$inline_11341_context$$inline_11349$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$364_container$$inline_8089_tooltip$$inline_8093$$
  }
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods_updateShapes$$ = function $$JSCompiler_StaticMethods_updateShapes$$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$14_cmd$$19$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$14_cmd$$19$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = D.$JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$14_cmd$$19$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$783$$ = 0;$i$$783$$ < $children$$14_cmd$$19$$.length;$i$$783$$++) {
        (0,D.$JSCompiler_StaticMethods_updateShapes$$)($children$$14_cmd$$19$$[$i$$783$$], D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$DvtSunburstNode$$.prototype.$getDropSiteFeedback$ = function $$DvtSunburstNode$$$$$getDropSiteFeedback$$() {
  return this.$_shape$ instanceof D.$DvtCircle$$ ? new D.$DvtCircle$$(this.$_view$.$getCtx$(), this.$_shape$.$getCx$(), this.$_shape$.$getCy$(), this.$_shape$.$getRadius$()) : this.$_shape$ instanceof D.$DvtPath$$ ? new D.$DvtPath$$(this.$_view$.$getCtx$(), this.$_shape$.$getCmds$()) : D.$JSCompiler_alias_NULL$$
};
D.$DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$($event$$739$$) {
  this.$setDisclosed$(!this.$isDisclosed$());
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$ = this.$_view$, $bDisclosed$$inline_8097_nodeOptions$$inline_8098$$ = this.$isDisclosed$(), $id$$inline_11357$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$.$_navigableIdToFocus$ = $id$$inline_11357$$;
  $bDisclosed$$inline_8097_nodeOptions$$inline_8098$$ ? ($bDisclosed$$inline_8097_nodeOptions$$inline_8098$$ = this.$getOptions$(), $bDisclosed$$inline_8097_nodeOptions$$inline_8098$$.nodes && 0 < $bDisclosed$$inline_8097_nodeOptions$$inline_8098$$.nodes.length && $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$.$render$($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$.$getOptions$()), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstExpand", 
  this.getId()))) : ($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$.$render$($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$.$getOptions$()), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8095$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstCollapse", this.getId())));
  this.$UpdateAriaLabel$();
  $event$$739$$.stopPropagation()
};
D.$JSCompiler_StaticMethods___getRadius$$ = function $$JSCompiler_StaticMethods___getRadius$$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != D.$JSCompiler_alias_NULL$$ ? (0,window.Number)($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : (0,D.$JSCompiler_StaticMethods_GetTemplate$$)($JSCompiler_StaticMethods___getRadius$self$$) ? 1 : 0.5
};
D.$DvtSunburstNode$$.prototype.$getAriaLabel$ = function $$DvtSunburstNode$$$$$getAriaLabel$$() {
  var $options$$254$$ = this.$_view$.$getOptions$(), $states$$16$$ = [];
  this.$isSelectable$() && $states$$16$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this) && $states$$16$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isDisclosed$() ? "STATE_EXPANDED" : "STATE_COLLAPSED"));
  this.$isDrillReplaceEnabled$() && $states$$16$$.push((0,D.$DvtBundle$getTranslation$$)($options$$254$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$16$$)
};
D.$DvtSunburstNode$$.prototype.$UpdateAriaLabel$ = function $$DvtSunburstNode$$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtSunburstNode$$.prototype.$getDataContext$ = function $$DvtSunburstNode$$$$$getDataContext$$() {
  var $dataContext$$6$$ = D.$DvtSunburstNode$$.$superclass$.$getDataContext$.call(this);
  $dataContext$$6$$.radius = (0,D.$JSCompiler_StaticMethods___getRadius$$)(this);
  return $dataContext$$6$$
};
D.$DvtSunburstLayout$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstLayout$$, D.$DvtObj$$, "DvtSunburstLayout");
D.$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$27$$, $startAngle$$18$$, $angleExtent$$16$$, $sorting$$1$$) {
  var $longestRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($root$$27$$);
  D.$DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$27$$, $startAngle$$18$$, $angleExtent$$16$$, $sorting$$1$$, 0)
};
D.$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$779_node$$295$$, $childStartAngle_startAngle$$19$$, $angleExtent$$17$$, $sorting$$2$$, $children$$12_innerRadius$$9$$) {
  var $outerRadius$$7$$ = $children$$12_innerRadius$$9$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($i$$779_node$$295$$) * $radiusPerDepth$$1$$;
  $i$$779_node$$295$$.$setLayoutParams$($children$$12_innerRadius$$9$$, $outerRadius$$7$$, $childStartAngle_startAngle$$19$$, $angleExtent$$17$$);
  $children$$12_innerRadius$$9$$ = $i$$779_node$$295$$.$getChildNodes$();
  if($children$$12_innerRadius$$9$$ != D.$JSCompiler_alias_NULL$$ && $i$$779_node$$295$$.$isDisclosed$()) {
    "on" == $sorting$$2$$ && ($children$$12_innerRadius$$9$$ = $children$$12_innerRadius$$9$$.slice(0), $children$$12_innerRadius$$9$$.sort(function($radiusPerDepth$$1$$, $i$$779_node$$295$$) {
      return $i$$779_node$$295$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    (0,D.$DvtAgent$isRightToLeft$$)($i$$779_node$$295$$.$_view$.$getCtx$()) && ($children$$12_innerRadius$$9$$ = $children$$12_innerRadius$$9$$.slice(0).reverse());
    var $total$$7$$ = 0;
    for($i$$779_node$$295$$ = 0;$i$$779_node$$295$$ < $children$$12_innerRadius$$9$$.length;$i$$779_node$$295$$++) {
      $total$$7$$ += 0 < $children$$12_innerRadius$$9$$[$i$$779_node$$295$$].$getSize$() ? $children$$12_innerRadius$$9$$[$i$$779_node$$295$$].$getSize$() : 0
    }
    for($i$$779_node$$295$$ = 0;$i$$779_node$$295$$ < $children$$12_innerRadius$$9$$.length;$i$$779_node$$295$$++) {
      var $child$$77$$ = $children$$12_innerRadius$$9$$[$i$$779_node$$295$$];
      if(!(0 >= $child$$77$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$77$$.$getSize$() / $total$$7$$ * $angleExtent$$17$$;
        D.$DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$77$$, $childStartAngle_startAngle$$19$$, $childAngleExtent$$, $sorting$$2$$, $outerRadius$$7$$);
        $childStartAngle_startAngle$$19$$ += $childAngleExtent$$
      }
    }
  }
};
D.$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$296$$) {
  var $maxRadius$$2$$ = 0, $children$$13$$ = $node$$296$$.$getChildNodes$();
  if($children$$13$$ && 0 < $children$$13$$.length) {
    for(var $i$$780$$ = 0;$i$$780$$ < $children$$13$$.length;$i$$780$$++) {
      var $childRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($children$$13$$[$i$$780$$]), $maxRadius$$2$$ = window.Math.max($maxRadius$$2$$, $childRadius$$)
    }
    return $maxRadius$$2$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$296$$)
  }
  return(0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$296$$)
};
D.$DvtSunburstExpandCollapseEvent$$ = function $$DvtSunburstExpandCollapseEvent$$$($type$$244$$, $id$$273$$) {
  this.Init($type$$244$$);
  this.$_id$ = $id$$273$$ ? $id$$273$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstExpandCollapseEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstExpandCollapseEvent");
D.$DvtSunburstExpandCollapseEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtSunburstEventManager$$ = function $$DvtSunburstEventManager$$$($view$$61$$, $context$$574$$, $callback$$153$$, $callbackObj$$104$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$61$$, $context$$574$$, $callback$$153$$, $callbackObj$$104$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtSunburstEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$728_relPos$$64$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_8037_obj$$340$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$728_relPos$$64$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_8037_obj$$340$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_8037_obj$$340$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_8037_obj$$340$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_TRUE$$, $event$$728_relPos$$64$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$728_relPos$$64$$.pageX, $event$$728_relPos$$64$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_8037_obj$$340$$ = 
  this.$_view$, (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8037_obj$$340$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8037_obj$$340$$, $event$$728_relPos$$64$$.x, $event$$728_relPos$$64$$.y))) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$728_relPos$$64$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$729_relPos$$65$$) {
  if(this.$_bRotating$) {
    $event$$729_relPos$$65$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$729_relPos$$65$$.pageX, $event$$729_relPos$$65$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_8041$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8041$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8041$$, $event$$729_relPos$$65$$.x, $event$$729_relPos$$65$$.y))
  }else {
    D.$DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$729_relPos$$65$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$730$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$730$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$731$$) {
  var $eventConsumed$$5$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$46_newAngle$$1$$ = $event$$731$$.keyCode, $node$$294$$ = this.$getFocus$(), $sunburst$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)($node$$294$$) && ((0,D.$DvtKeyboardEvent$isPlus$$)($event$$731$$) && !$node$$294$$.$isDisclosed$() || (0,D.$DvtKeyboardEvent$isMinus$$)($event$$731$$) && $node$$294$$.$isDisclosed$() || $event$$731$$.ctrlKey && 13 == $keyCode$$46_newAngle$$1$$) ? ($node$$294$$.$expandCollapseNode$(), (0,D.$DvtEventManager$consumeEvent$$)($event$$731$$)) : $sunburst$$ && "off" != $sunburst$$.$getOptions$().rotation && (37 == $keyCode$$46_newAngle$$1$$ || 
  39 == $keyCode$$46_newAngle$$1$$) && !$event$$731$$.ctrlKey && $event$$731$$.altKey && $event$$731$$.shiftKey ? ($keyCode$$46_newAngle$$1$$ = 37 == $keyCode$$46_newAngle$$1$$ ? -5 * (window.Math.PI / 180) : 5 * (window.Math.PI / 180), (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($sunburst$$, 0), (0,D.$JSCompiler_StaticMethods___rotate$$)($sunburst$$, $keyCode$$46_newAngle$$1$$), (0,D.$JSCompiler_StaticMethods___endRotation$$)($sunburst$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$731$$)) : 
  $eventConsumed$$5$$ = D.$DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$731$$);
  return $eventConsumed$$5$$
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$732$$) {
  var $obj$$341$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$732$$.target);
  $obj$$341$$ && ($obj$$341$$.getId && "_rotationShape" == $obj$$341$$.getId()) && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$732$$, this.$RotateStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$733$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$733$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$734$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$734$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$735$$, $touch$$48$$) {
  if(1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "rotateKey").length) {
    (0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$48$$.identifier, "rotateKey", "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$48$$.identifier, D.$JSCompiler_alias_FALSE$$);
    var $pos$$71$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$48$$.pageX, $touch$$48$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_8045$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8045$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8045$$, $pos$$71$$.x, $pos$$71$$.y));
    $event$$735$$.$blockTouchHold$()
  }
};
D.$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$736$$, $touch$$49$$) {
  var $pos$$72$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$49$$.pageX, $touch$$49$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_8049$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8049$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8049$$, $pos$$72$$.x, $pos$$72$$.y));
  $event$$736$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)
};
(0,D.$DvtBundle$addDefaultStrings$$)("DvtSunburstBundle", {COLOR:"Color", OTHER:"Other", SIZE:"Size"});
D.$DvtSunburstDefaults$$ = function $$DvtSunburstDefaults$$$() {
  this.Init({skyros:D.$DvtSunburstDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtSunburstDefaults");
D.$DvtSunburstDefaults$VERSION_1$$ = {nodeDefaults:{borderColor:"#FFFFFF", hoverColor:"#FFFFFF", labelDisplay:"auto", labelHalign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, rotation:"on", startAngle:90};
  return D;
});