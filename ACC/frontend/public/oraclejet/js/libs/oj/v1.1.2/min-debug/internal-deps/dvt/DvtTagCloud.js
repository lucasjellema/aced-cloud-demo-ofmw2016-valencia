/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTagCloud$$ = function $$DvtTagCloud$$$($context$$577$$, $callback$$154$$, $callbackObj$$105$$) {
  this.Init($context$$577$$, $callback$$154$$, $callbackObj$$105$$)
};
(0,D.$goog$exportPath_$$)("DvtTagCloud", D.$DvtTagCloud$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloud$$, D.$DvtBaseComponent$$, "DvtTagCloud");
D.$DvtTagCloud$$.newInstance = function $$DvtTagCloud$$$newInstance$($context$$578$$, $callback$$155$$, $callbackObj$$106$$) {
  return new D.$DvtTagCloud$$($context$$578$$, $callback$$155$$, $callbackObj$$106$$)
};
D.$DvtTagCloud$$.prototype.Init = function $$DvtTagCloud$$$$Init$($context$$579$$, $callback$$156$$, $callbackObj$$107$$) {
  D.$DvtTagCloud$$.$superclass$.Init.call(this, $context$$579$$, $callback$$156$$, $callbackObj$$107$$);
  this.$getCtx$().$_stage$.$getElem$().setAttributeNS(D.$JSCompiler_alias_NULL$$, "text-rendering", "geometricPrecision");
  this.$EventManager$ = new D.$DvtTagCloudEventManager$$(this, $context$$579$$, this.$processEvent$, this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, new D.$DvtTagCloudKeyboardHandler$$(this.$EventManager$));
  this.$Defaults$ = new D.$DvtTagCloudDefaults$$;
  this.$_items$ = [];
  this.$_peers$ = [];
  this.$legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragSource$ = new D.$DvtDragSource$$(this.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$EventManager$, this.$_dragSource$)
};
D.$DvtTagCloud$$.prototype.$render$ = function $$DvtTagCloud$$$$$render$$($ah$$4_options$$255$$, $animationDuration$$10_width$$153$$, $bounds$$153_height$$139$$) {
  !(0,window.isNaN)($animationDuration$$10_width$$153$$) && !(0,window.isNaN)($bounds$$153_height$$139$$) && (this.$Width$ = $animationDuration$$10_width$$153$$, this.$Height$ = $bounds$$153_height$$139$$);
  this.$__cleanUp$();
  this.$SetOptions$($ah$$4_options$$255$$);
  this.$_animation$ && this.$_animation$.stop();
  this.$_oldContainer$ = this.$_container$;
  this.$_oldItems$ = this.$_items$;
  this.$_items$ = [];
  this.$_itemCollection$ = [];
  this.$_container$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_container$);
  D.$DvtTagCloudRenderer$$.$render$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  $animationDuration$$10_width$$153$$ = this.$Options$.animationDuration;
  $bounds$$153_height$$139$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$_oldContainer$ ? "none" !== this.$Options$.animationOnDataChange && $ah$$4_options$$255$$ && (this.$_deleteContainer$ = new D.$DvtContainer$$(this.$getCtx$()), this.$addChild$(this.$_deleteContainer$), $ah$$4_options$$255$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$4_options$$255$$, this.$_oldItems$, this.$_items$), this.$_animation$ = $ah$$4_options$$255$$.$getAnimation$()) : "none" !== this.$Options$.animationOnDisplay && 
  (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$, this.$_container$, $bounds$$153_height$$139$$, $animationDuration$$10_width$$153$$));
  this.$_animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnRenderEnd$, this), this.$_animation$.play()) : this.$OnRenderEnd$();
  this.$UpdateAriaAttributes$()
};
D.$DvtTagCloud$$.prototype.render = D.$DvtTagCloud$$.prototype.$render$;
D.$DvtTagCloud$$.prototype.$getAutomation$ = function $$DvtTagCloud$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtTagCloudAutomation$$(this));
  return this.$Automation$
};
D.$DvtTagCloud$$.prototype.getAutomation = D.$DvtTagCloud$$.prototype.$getAutomation$;
D.$DvtTagCloud$$.prototype.$registerObject$ = function $$DvtTagCloud$$$$$registerObject$$($peer$$28$$, $index$$233$$) {
  this.$_peers$.push($peer$$28$$);
  this.$_itemCollection$[$index$$233$$] = $peer$$28$$
};
D.$DvtTagCloud$$.prototype.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$DvtTagCloud$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_itemCollection$");
D.$DvtTagCloud$$.prototype.$highlight$ = function $$DvtTagCloud$$$$$highlight$$($categories$$26$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$26$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$26$$, this.$getObjects$(), "any" === this.$Options$.highlightMatch);
  this.$legend$ && this.$legend$.$highlight$($categories$$26$$)
};
D.$DvtTagCloud$$.prototype.highlight = D.$DvtTagCloud$$.prototype.$highlight$;
D.$DvtTagCloud$$.prototype.select = function $$DvtTagCloud$$$$select$($selection$$38$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$38$$);
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$())
};
D.$DvtTagCloud$$.prototype.select = D.$DvtTagCloud$$.prototype.select;
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloud$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$256_selectionMode$$13$$) {
  $options$$256_selectionMode$$13$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$256_selectionMode$$13$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$256_selectionMode$$13$$ = this.$Options$.selectionMode;
  this.$SelectionHandler$ = "single" === $options$$256_selectionMode$$13$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" === $options$$256_selectionMode$$13$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "TAG_CLOUD")
};
D.$JSCompiler_prototypeAlias$$.$OnRenderEnd$ = function $$JSCompiler_prototypeAlias$$$$OnRenderEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$(), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ && (this.$_animation$ = D.$JSCompiler_alias_NULL$$, this.$EventManager$.$addListeners$(this));
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$());
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$740$$, $source$$36$$) {
  var $type$$245$$ = $event$$740$$.$getType$();
  if($type$$245$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $type$$245$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    var $category$$23$$ = $event$$740$$.$_category$, $index$$234$$ = this.$Options$.hiddenCategories.indexOf($category$$23$$);
    $type$$245$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ && 0 > $index$$234$$ && this.$Options$.hiddenCategories.push($category$$23$$);
    $type$$245$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ && 0 <= $index$$234$$ && this.$Options$.hiddenCategories.splice($index$$234$$, 1);
    this.$render$(this.$Options$, this.$Width$, this.$Height$)
  }else {
    if("categoryRollOver" == $type$$245$$ || "categoryRollOut" == $type$$245$$) {
      this != $source$$36$$ ? this.$highlight$($event$$740$$.categories) : this.$legend$ && this.$legend$ != $source$$36$$ && this.$legend$.$processEvent$($event$$740$$, $source$$36$$)
    }
  }
  $event$$740$$ && this.$__dispatchEvent$($event$$740$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  for(var $displayables$$28$$ = [], $selection$$40$$ = this.$SelectionHandler$.getSelection(), $i$$785$$ = 0;$i$$785$$ < $selection$$40$$.length;$i$$785$$++) {
    $displayables$$28$$ = $displayables$$28$$.concat($selection$$40$$[$i$$785$$].$getDisplayables$())
  }
  return $displayables$$28$$
};
D.$DvtTagCloud$$.prototype.$isDragAvailable$ = function $$DvtTagCloud$$$$$isDragAvailable$$($mouseX$$42$$, $mouseY$$42$$, $clientIds$$19$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$19$$)
};
D.$DvtTagCloud$$.prototype.isDragAvailable = D.$DvtTagCloud$$.prototype.$isDragAvailable$;
D.$DvtTagCloud$$.prototype.$getDragTransferable$ = function $$DvtTagCloud$$$$$getDragTransferable$$($mouseX$$43$$, $mouseY$$43$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$43$$, $mouseY$$43$$)
};
D.$DvtTagCloud$$.prototype.getDragTransferable = D.$DvtTagCloud$$.prototype.$getDragTransferable$;
D.$DvtTagCloud$$.prototype.$getDragOverFeedback$ = function $$DvtTagCloud$$$$$getDragOverFeedback$$($mouseX$$44$$, $mouseY$$44$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$44$$, $mouseY$$44$$)
};
D.$DvtTagCloud$$.prototype.getDragOverFeedback = D.$DvtTagCloud$$.prototype.$getDragOverFeedback$;
D.$DvtTagCloud$$.prototype.$getDragContext$ = function $$DvtTagCloud$$$$$getDragContext$$($mouseX$$45$$, $mouseY$$45$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$45$$, $mouseY$$45$$)
};
D.$DvtTagCloud$$.prototype.getDragContext = D.$DvtTagCloud$$.prototype.$getDragContext$;
D.$DvtTagCloud$$.prototype.$getDragOffset$ = function $$DvtTagCloud$$$$$getDragOffset$$($mouseX$$46$$, $mouseY$$46$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$46$$, $mouseY$$46$$)
};
D.$DvtTagCloud$$.prototype.getDragOffset = D.$DvtTagCloud$$.prototype.$getDragOffset$;
D.$DvtTagCloud$$.prototype.$getPointerOffset$ = function $$DvtTagCloud$$$$$getPointerOffset$$($xOffset$$7$$, $yOffset$$10$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$7$$, $yOffset$$10$$)
};
D.$DvtTagCloud$$.prototype.getPointerOffset = D.$DvtTagCloud$$.prototype.$getPointerOffset$;
D.$DvtTagCloud$$.prototype.$initiateDrag$ = function $$DvtTagCloud$$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$DvtTagCloud$$.prototype.initiateDrag = D.$DvtTagCloud$$.prototype.$initiateDrag$;
D.$DvtTagCloud$$.prototype.$dragDropEnd$ = function $$DvtTagCloud$$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtTagCloud$$.prototype.dragDropEnd = D.$DvtTagCloud$$.prototype.$dragDropEnd$;
D.$DvtTagCloud$$.prototype.$acceptDrag$ = function $$DvtTagCloud$$$$$acceptDrag$$($mouseX$$47$$, $mouseY$$47$$, $clientIds$$20$$) {
  this.$_dropTarget$ || (this.$_dropTarget$ = new D.$DvtTagCloudDropTarget$$);
  return this.$_dropTarget$.$acceptDrag$($mouseX$$47$$, $mouseY$$47$$, $clientIds$$20$$)
};
D.$DvtTagCloud$$.prototype.acceptDrag = D.$DvtTagCloud$$.prototype.$acceptDrag$;
D.$DvtTagCloudAutomation$$ = (0,D.$JSCompiler_set$$)("$_tagCloud$");
(0,D.$goog$exportPath_$$)("DvtTagCloudAutomation", D.$DvtTagCloudAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudAutomation$$, D.$DvtAutomation$$, "DvtTagCloudAutomation");
D.$DvtTagCloudAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTagCloudAutomation$$$$$GetSubIdForDomElement$$($displayable$$79_logicalObj$$16$$) {
  return($displayable$$79_logicalObj$$16$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tagCloud$.$EventManager$, $displayable$$79_logicalObj$$16$$)) && $displayable$$79_logicalObj$$16$$ instanceof D.$DvtTagCloudObjPeer$$ ? "item[" + this.$_tagCloud$.$getItems$().indexOf($displayable$$79_logicalObj$$16$$) + "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTagCloudAutomation$$$$$getDomElementForSubId$$($index$$236_peer$$30_subId$$24$$) {
  if("tooltip" == $index$$236_peer$$30_subId$$24$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_tagCloud$)
  }
  var $parenIdx$$ = $index$$236_peer$$30_subId$$24$$.indexOf("[");
  return 0 < $parenIdx$$ && "item" === $index$$236_peer$$30_subId$$24$$.substring(0, $parenIdx$$) && ($index$$236_peer$$30_subId$$24$$ = (0,window.parseInt)($index$$236_peer$$30_subId$$24$$.substring($parenIdx$$ + 1, $index$$236_peer$$30_subId$$24$$.length - 1)), $index$$236_peer$$30_subId$$24$$ = this.$_tagCloud$.$getItems$()[$index$$236_peer$$30_subId$$24$$]) ? $index$$236_peer$$30_subId$$24$$.$getDisplayables$()[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.getDomElementForSubId = D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtTagCloudAutomation$$.prototype.getItem = function $$DvtTagCloudAutomation$$$$getItem$($index$$237_peer$$31$$) {
  if($index$$237_peer$$31$$ = this.$_tagCloud$.$getItems$()[$index$$237_peer$$31$$]) {
    var $data$$102$$ = {};
    $data$$102$$.color = $index$$237_peer$$31$$.$getDatatipColor$();
    $data$$102$$.tooltip = $index$$237_peer$$31$$.$getShortDesc$();
    $data$$102$$.label = $index$$237_peer$$31$$.$getLabel$();
    $data$$102$$.value = $index$$237_peer$$31$$.getValue();
    $data$$102$$.selected = $index$$237_peer$$31$$.$isSelected$();
    return $data$$102$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.getItem = D.$DvtTagCloudAutomation$$.prototype.getItem;
D.$DvtTagCloudAutomation$$.prototype.$getItemCount$ = function $$DvtTagCloudAutomation$$$$$getItemCount$$() {
  return this.$_tagCloud$.$getObjects$().length
};
D.$DvtTagCloudAutomation$$.prototype.getItemCount = D.$DvtTagCloudAutomation$$.prototype.$getItemCount$;
D.$DvtTagCloudItem$$ = function $$DvtTagCloudItem$$$($tagCloud$$, $context$$581$$, $textStr$$12$$, $x$$265$$, $y$$238$$, $style$$103$$, $id$$274$$) {
  this.Init($tagCloud$$, $context$$581$$, $textStr$$12$$, $x$$265$$, $y$$238$$, $style$$103$$, $id$$274$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudItem$$, D.$DvtBackgroundOutputText$$, "DvtTagCloudItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$1$$, $context$$582$$, $textStr$$13$$, $x$$266$$, $y$$239$$, $style$$104$$, $id$$275$$) {
  D.$DvtTagCloudItem$$.$superclass$.Init.call(this, $context$$582$$, $textStr$$13$$, $x$$266$$, $y$$239$$, $style$$104$$, $id$$275$$);
  this.$_tagCloud$ = $tagCloud$$1$$;
  $style$$104$$ && (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, $style$$104$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateBackground$ = function $$JSCompiler_prototypeAlias$$$$CreateBackground$$($context$$583$$, $text$$109$$) {
  this.$alignAuto$();
  return D.$DvtTagCloudItem$$.$superclass$.$CreateBackground$.call(this, $context$$583$$, $text$$109$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$8$$) {
  this.$_isSelected$ != $bSelected$$8$$ && ((this.$_isSelected$ = $bSelected$$8$$) ? this.$_isShowingHoverEffect$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$, this.$_isSelected$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_hoverStyle$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isSelected$ ? this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$);
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$52$$, $oldObj$$2$$) {
  var $anim$$38$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $endSize_endX$$1_endY$$1_style$$105$$ = this.$getCSSStyle$(), $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getCSSStyle$(), $bSizeChange_startY$$6_x$$inline_8133$$ = D.$JSCompiler_alias_FALSE$$, $dims$$inline_8135_startColor$$14_startX$$5$$ = $oldStyle_startAlign_startSize$$.$getStyle$("color"), $endAlign_endColor$$17$$ = $endSize_endX$$1_endY$$1_style$$105$$.$getStyle$("color");
  if($dims$$inline_8135_startColor$$14_startX$$5$$ != $endAlign_endColor$$17$$) {
    var $tag$$2$$ = this;
    this.$setCSSStyle$($endSize_endX$$1_endY$$1_style$$105$$.$setStyle$("color", $dims$$inline_8135_startColor$$14_startX$$5$$));
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeColor", this, function() {
      return $tag$$2$$.$getCSSStyle$().$getStyle$("color")
    }, function($handler$$52$$) {
      $tag$$2$$.$setCSSStyle$($tag$$2$$.$getCSSStyle$().$setStyle$("color", $handler$$52$$))
    }, $endAlign_endColor$$17$$)
  }
  $oldStyle_startAlign_startSize$$ = (0,window.parseFloat)($oldStyle_startAlign_startSize$$.$getStyle$("font-size"));
  $endSize_endX$$1_endY$$1_style$$105$$ = (0,window.parseFloat)($endSize_endX$$1_endY$$1_style$$105$$.$getStyle$("font-size"));
  $oldStyle_startAlign_startSize$$ != $endSize_endX$$1_endY$$1_style$$105$$ && ($bSizeChange_startY$$6_x$$inline_8133$$ = D.$JSCompiler_alias_TRUE$$, $tag$$2$$ = this, this.$setFontSize$($oldStyle_startAlign_startSize$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, function() {
    return(0,window.parseFloat)($tag$$2$$.$getCSSStyle$().$getStyle$("font-size"))
  }, this.$setFontSize$, $endSize_endX$$1_endY$$1_style$$105$$));
  $dims$$inline_8135_startColor$$14_startX$$5$$ = $oldObj$$2$$.$getX$();
  $endSize_endX$$1_endY$$1_style$$105$$ = this.$getX$();
  $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getHorizAlignment$();
  $endAlign_endColor$$17$$ = this.$getHorizAlignment$();
  if($endSize_endX$$1_endY$$1_style$$105$$ != $dims$$inline_8135_startColor$$14_startX$$5$$ || $bSizeChange_startY$$6_x$$inline_8133$$ && $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$) {
    $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$ && ($bSizeChange_startY$$6_x$$inline_8133$$ = $dims$$inline_8135_startColor$$14_startX$$5$$, $dims$$inline_8135_startColor$$14_startX$$5$$ = $oldObj$$2$$.$_outputText$.$getDimensions$(D.$JSCompiler_alias_VOID$$), $dims$$inline_8135_startColor$$14_startX$$5$$ = "left" == $oldStyle_startAlign_startSize$$ ? $bSizeChange_startY$$6_x$$inline_8133$$ + $dims$$inline_8135_startColor$$14_startX$$5$$.$w$ : "right" == $oldStyle_startAlign_startSize$$ ? 
    $bSizeChange_startY$$6_x$$inline_8133$$ - $dims$$inline_8135_startColor$$14_startX$$5$$.$w$ : $bSizeChange_startY$$6_x$$inline_8133$$), this.$setX$($dims$$inline_8135_startColor$$14_startX$$5$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getX$, this.$setX$, $endSize_endX$$1_endY$$1_style$$105$$)
  }
  $bSizeChange_startY$$6_x$$inline_8133$$ = $oldObj$$2$$.$getY$();
  $endSize_endX$$1_endY$$1_style$$105$$ = this.$getY$();
  $endSize_endX$$1_endY$$1_style$$105$$ != $bSizeChange_startY$$6_x$$inline_8133$$ && (this.$setY$($bSizeChange_startY$$6_x$$inline_8133$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getY$, this.$setY$, $endSize_endX$$1_endY$$1_style$$105$$));
  $oldObj$$2$$.$setAlpha$(0);
  $handler$$52$$.add($anim$$38$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$53$$) {
  $handler$$53$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$54$$) {
  this.$setAlpha$(0);
  $handler$$54$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 2)
};
D.$JSCompiler_prototypeAlias$$.$setFontSize$ = function $$JSCompiler_prototypeAlias$$$$setFontSize$$($size$$47$$) {
  D.$DvtTagCloudItem$$.$superclass$.$setFontSize$.call(this, $size$$47$$);
  (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, this.$getCSSStyle$())
};
D.$JSCompiler_StaticMethods__createFeedbackStyles$$ = function $$JSCompiler_StaticMethods__createFeedbackStyles$$$($JSCompiler_StaticMethods__createFeedbackStyles$self$$, $style$$106$$) {
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$ = $style$$106$$;
  var $color$$88_hoverSelectedColor$$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$getStyle$("color");
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$setStyle$("background-color", D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  var $hoverColor$$8$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$88_hoverSelectedColor$$, 0.3);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("background-color", $hoverColor$$8$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($hoverColor$$8$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("background-color", $color$$88_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$88_hoverSelectedColor$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $color$$88_hoverSelectedColor$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$88_hoverSelectedColor$$, 0.6);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("background-color", $color$$88_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$88_hoverSelectedColor$$))
};
D.$DvtTagCloudItem$_lightenColor$$ = function $$DvtTagCloudItem$_lightenColor$$$($color$$89$$, $opacity$$4$$) {
  var $r$$92$$ = D.$DvtColorUtils$$.$getRed$($color$$89$$), $g$$28$$ = D.$DvtColorUtils$$.$getGreen$($color$$89$$), $b$$62$$ = D.$DvtColorUtils$$.$getBlue$($color$$89$$);
  return D.$DvtColorUtils$$.$makeRGB$(window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $r$$92$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $g$$28$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $b$$62$$))
};
D.$DvtTagCloudObjPeer$$ = function $$DvtTagCloudObjPeer$$$($tagCloud$$2$$, $displayable$$80$$, $data$$103$$) {
  this.Init($tagCloud$$2$$, $displayable$$80$$, $data$$103$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudObjPeer$$, D.$DvtObj$$, "DvtTagCloudObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$3$$, $displayable$$81$$, $data$$104$$) {
  this.$_view$ = $tagCloud$$3$$;
  this.$_displayable$ = $displayable$$81$$;
  this.$_data$ = $data$$104$$;
  this.$_bSelectable$ = this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  $data$$104$$.url ? ($displayable$$81$$.$setAriaRole$("link"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$104$$.url)) : $displayable$$81$$.$setAriaRole$("img");
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_data$.label
};
D.$JSCompiler_prototypeAlias$$.getValue = function $$JSCompiler_prototypeAlias$$$getValue$() {
  return this.$_data$.value
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$8$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$8$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$8$$, this.$getDataContext$()) : this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), color:this.$getDatatipColor$(), value:this.getValue()}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  this.$_dataColor$ || (this.$_dataColor$ = (new D.$DvtCSSStyle$$(this.$_data$.style)).$getStyle$("color"));
  return this.$_dataColor$
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_get$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$9$$) {
  this.$_isSelected$ = $bSelected$$9$$;
  this.$_displayable$.$setSelected$($bSelected$$9$$);
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_displayable$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_displayable$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$) {
  var $keyboardHandler$$7_navigableItems$$inline_8139$$ = this.$_view$.$EventManager$.$KeyboardHandler$;
  $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$7_navigableItems$$inline_8139$$.$isMultiSelectEvent$($JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$) ? $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$ = this : $keyboardHandler$$7_navigableItems$$inline_8139$$.$isNavigationEvent$($JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$) ? 
  ($keyboardHandler$$7_navigableItems$$inline_8139$$ = this.$_view$.$getObjects$(), $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$ = $keyboardHandler$$7_navigableItems$$inline_8139$$.indexOf(this) + (39 == $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$.keyCode || 40 == $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$.keyCode ? 1 : -1), $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$ = 
  $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$ < $keyboardHandler$$7_navigableItems$$inline_8139$$.length && 0 <= $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$ ? $keyboardHandler$$7_navigableItems$$inline_8139$$[$JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$] : D.$JSCompiler_alias_NULL$$) : $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$ = D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$230_JSCompiler_temp$$231_event$$749_nextIdx$$inline_8140$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$59$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$59$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$17$$ = [];
  this.$isSelectable$() && $states$$17$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_data$.showPopupBehaviors)) {
    for(var $spbs$$4$$ = this.$_data$.showPopupBehaviors, $si$$ = 0;$si$$ < $spbs$$4$$.length;$si$$++) {
      this.$_showPopupBehaviors$.push(new D.$DvtShowPopupBehavior$$($spbs$$4$$[$si$$].popupId, $spbs$$4$$[$si$$].triggerType, $spbs$$4$$[$si$$].alignId, $spbs$$4$$[$si$$].align))
    }
  }
  return this.$_showPopupBehaviors$
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$18$$) {
  return this.$_view$.$SelectionHandler$ ? $clientIds$$18$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  var $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8142_selection$$inline_8145$$ = this.$_view$;
  this.$isSelected$() || ($JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8142_selection$$inline_8145$$.$SelectionHandler$.$processClick$(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8142_selection$$inline_8145$$.$EventManager$.$fireSelectionEvent$());
  for(var $rowKeys$$inline_8144$$ = [], $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8142_selection$$inline_8145$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8142_selection$$inline_8145$$.$SelectionHandler$.getSelection(), $i$$inline_8146$$ = 0;$i$$inline_8146$$ < $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8142_selection$$inline_8145$$.length;$i$$inline_8146$$++) {
    var $item$$inline_8147$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8142_selection$$inline_8145$$[$i$$inline_8146$$];
    $item$$inline_8147$$ instanceof D.$DvtTagCloudObjPeer$$ && $rowKeys$$inline_8144$$.push($item$$inline_8147$$.getId())
  }
  return $rowKeys$$inline_8144$$
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$getDragFeedback$()
};
D.$DvtTagCloudDefaults$$ = function $$DvtTagCloudDefaults$$$() {
  this.Init({alta:D.$DvtTagCloudDefaults$VERSION_1$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtTagCloudDefaults");
D.$DvtTagCloudDefaults$VERSION_1$$ = {animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, hiddenCategories:[], hideAndShowBehavior:"none", highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", layout:"rectangular", selectionMode:"none", styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, style:new D.$DvtCSSStyle$$('font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #333333;')}};
D.$DvtTagCloudRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudRenderer$$, D.$DvtObj$$, "DvtTagCloudRenderer");
D.$DvtTagCloudRenderer$$.$render$ = function $$DvtTagCloudRenderer$$$$render$$($tagCloud$$4$$, $container$$184$$, $availSpace$$119$$) {
  D.$DvtTagCloudRenderer$$.$_renderBackground$($tagCloud$$4$$, $container$$184$$, $availSpace$$119$$);
  D.$DvtTagCloudRenderer$$.$_renderLegend$($tagCloud$$4$$, $container$$184$$, $availSpace$$119$$);
  D.$DvtTagCloudRenderer$$.$_adjustAvailSpace$($availSpace$$119$$);
  var $items$$36_options$$258$$ = $tagCloud$$4$$.$getOptions$();
  $items$$36_options$$258$$.items && 0 < $items$$36_options$$258$$.items.length ? ($items$$36_options$$258$$ = D.$DvtTagCloudRenderer$$.$_renderItems$($tagCloud$$4$$, $container$$184$$, $availSpace$$119$$), 0 < $items$$36_options$$258$$.length ? ($tagCloud$$4$$.$_items$ = $items$$36_options$$258$$, (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($tagCloud$$4$$.$EventManager$, $tagCloud$$4$$.$getObjects$()[0])) : D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$184$$, $availSpace$$119$$)) : 
  D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$184$$, $availSpace$$119$$)
};
D.$DvtTagCloudRenderer$$.$_renderEmptyText$ = function $$DvtTagCloudRenderer$$$$_renderEmptyText$$($tagCloud$$5$$, $container$$185$$, $availSpace$$120$$) {
  var $options$$259$$ = $tagCloud$$5$$.$getOptions$(), $emptyTextStr$$3$$ = $options$$259$$.emptyText;
  $emptyTextStr$$3$$ || ($emptyTextStr$$3$$ = (0,D.$DvtBundle$getTranslation$$)($options$$259$$, "labelNoData", "DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  D.$DvtTextUtils$$.$renderEmptyText$($container$$185$$, $emptyTextStr$$3$$, new D.$DvtRectangle$$($availSpace$$120$$.x, $availSpace$$120$$.y, $availSpace$$120$$.$w$, $availSpace$$120$$.$h$), $tagCloud$$5$$.$EventManager$, $options$$259$$.styleDefaults.style)
};
D.$DvtTagCloudRenderer$$.$_renderBackground$ = function $$DvtTagCloudRenderer$$$$_renderBackground$$($rect$$51_tagCloud$$6$$, $container$$186$$, $availSpace$$121$$) {
  $rect$$51_tagCloud$$6$$ = new D.$DvtRect$$($rect$$51_tagCloud$$6$$.$getCtx$(), $availSpace$$121$$.x, $availSpace$$121$$.y, $availSpace$$121$$.$w$, $availSpace$$121$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$51_tagCloud$$6$$);
  $container$$186$$.$addChild$($rect$$51_tagCloud$$6$$)
};
D.$DvtTagCloudRenderer$$.$_renderItems$ = function $$DvtTagCloudRenderer$$$$_renderItems$$($tagCloud$$7$$, $container$$187$$, $availSpace$$122$$) {
  for(var $options$$260$$ = $tagCloud$$7$$.$getOptions$(), $items$$37$$ = [], $dataItems$$2$$ = $options$$260$$.items, $fontSizeFunction_minValue$$17$$ = window.Number.MAX_VALUE, $categoryMap$$1_maxValue$$18$$ = -window.Number.MAX_VALUE, $i$$789$$ = 0;$i$$789$$ < $dataItems$$2$$.length;$i$$789$$++) {
    $fontSizeFunction_minValue$$17$$ = window.Math.min($fontSizeFunction_minValue$$17$$, $dataItems$$2$$[$i$$789$$].value), $categoryMap$$1_maxValue$$18$$ = window.Math.max($categoryMap$$1_maxValue$$18$$, $dataItems$$2$$[$i$$789$$].value)
  }
  $fontSizeFunction_minValue$$17$$ = D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$($fontSizeFunction_minValue$$17$$, $categoryMap$$1_maxValue$$18$$);
  $categoryMap$$1_maxValue$$18$$ = D.$DvtArrayUtils$$.$createBooleanMap$($options$$260$$.hiddenCategories);
  for($i$$789$$ = 0;$i$$789$$ < $dataItems$$2$$.length;$i$$789$$++) {
    var $data$$105$$ = $dataItems$$2$$[$i$$789$$];
    $data$$105$$.categories || ($data$$105$$.categories = [$data$$105$$.label]);
    if(!$categoryMap$$1_maxValue$$18$$ || !D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$1_maxValue$$18$$, $data$$105$$.categories)) {
      var $item$$51_style$$107$$ = $options$$260$$.styleDefaults.style.$clone$();
      (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($item$$51_style$$107$$, $data$$105$$.style);
      $item$$51_style$$107$$.$setStyle$("font-size", $fontSizeFunction_minValue$$17$$.call(D.$JSCompiler_alias_NULL$$, $data$$105$$.value).toString());
      var $item$$51_style$$107$$ = new D.$DvtTagCloudItem$$($tagCloud$$7$$, $tagCloud$$7$$.$getCtx$(), $data$$105$$.label, 0, 0, $item$$51_style$$107$$, $data$$105$$.id), $peer$$32$$ = new D.$DvtTagCloudObjPeer$$($tagCloud$$7$$, $item$$51_style$$107$$, $data$$105$$);
      $tagCloud$$7$$.$EventManager$.$associate$($item$$51_style$$107$$, $peer$$32$$);
      $tagCloud$$7$$.$registerObject$($peer$$32$$, $i$$789$$);
      "none" !== $options$$260$$.selectionMode && $peer$$32$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
      ($peer$$32$$.$isSelectable$() || $data$$105$$.url || $peer$$32$$.$getAction$()) && $item$$51_style$$107$$.setCursor("pointer");
      $items$$37$$.push($item$$51_style$$107$$);
      $container$$187$$.$addChild$($item$$51_style$$107$$)
    }
  }
  0 < $items$$37$$.length && ("cloud" === $options$$260$$.layout ? D.$DvtTagCloudLayoutUtils$$.$cloudLayout$($availSpace$$122$$, $items$$37$$) : D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$($availSpace$$122$$, $items$$37$$, (0,D.$DvtAgent$isRightToLeft$$)($tagCloud$$7$$.$getCtx$())));
  return $items$$37$$
};
D.$DvtTagCloudRenderer$$.$_renderLegend$ = function $$DvtTagCloudRenderer$$$$_renderLegend$$($tagCloud$$8$$, $container$$188$$, $availSpace$$123$$) {
  var $legend$$30_options$$261$$ = $tagCloud$$8$$.$getOptions$(), $legendData$$6_legendOptions$$9$$ = $legend$$30_options$$261$$.legend;
  if($legendData$$6_legendOptions$$9$$ && $legendData$$6_legendOptions$$9$$.sections) {
    $legendData$$6_legendOptions$$9$$ = D.$DvtJSONUtils$$.$clone$($legendData$$6_legendOptions$$9$$);
    $legendData$$6_legendOptions$$9$$.orientation = "horizontal";
    $legendData$$6_legendOptions$$9$$.halign = "center";
    $legendData$$6_legendOptions$$9$$.hoverBehavior = $legend$$30_options$$261$$.hoverBehavior;
    $legendData$$6_legendOptions$$9$$.hideAndShowBehavior = $legend$$30_options$$261$$.hideAndShowBehavior;
    $legendData$$6_legendOptions$$9$$.hiddenCategories = $legend$$30_options$$261$$.hiddenCategories;
    $legend$$30_options$$261$$ = (0,D.$DvtLegend$newInstance$$)($tagCloud$$8$$.$getCtx$(), $tagCloud$$8$$.$processEvent$, $tagCloud$$8$$);
    $container$$188$$.$addChild$($legend$$30_options$$261$$);
    var $preferredSize$$6$$ = $legend$$30_options$$261$$.$getPreferredSize$($legendData$$6_legendOptions$$9$$, $availSpace$$123$$.$w$, $availSpace$$123$$.$h$ / 3);
    $legend$$30_options$$261$$.$render$($legendData$$6_legendOptions$$9$$, $preferredSize$$6$$.$w$, $preferredSize$$6$$.$h$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$123$$, "bottom", $legend$$30_options$$261$$, $preferredSize$$6$$.$w$, $preferredSize$$6$$.$h$, 0);
    $tagCloud$$8$$.$legend$ && ($tagCloud$$8$$.$legend$.$destroy$(), $container$$188$$.removeChild($tagCloud$$8$$.$legend$));
    $tagCloud$$8$$.$legend$ = $legend$$30_options$$261$$
  }
};
D.$DvtTagCloudRenderer$$.$_adjustAvailSpace$ = function $$DvtTagCloudRenderer$$$$_adjustAvailSpace$$($availSpace$$124$$) {
  $availSpace$$124$$.x = window.Math.round($availSpace$$124$$.x);
  $availSpace$$124$$.y = window.Math.round($availSpace$$124$$.y);
  $availSpace$$124$$.$w$ = window.Math.round($availSpace$$124$$.$w$);
  $availSpace$$124$$.$h$ = window.Math.round($availSpace$$124$$.$h$)
};
D.$DvtTagCloudLayoutUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudLayoutUtils$$, D.$DvtObj$$, "DvtTagCloudLayoutUtils");
D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$ = function $$DvtTagCloudLayoutUtils$$$$getFontSizeFunction$$($minValue$$16$$, $maxValue$$17$$) {
  return function($value$$185$$) {
    return 12 + window.Math.ceil(12 * (2 * ($value$$185$$ - $minValue$$16$$) / ($maxValue$$17$$ - $minValue$$16$$)))
  }
};
D.$DvtTagCloudLayoutUtils$$.$cloudLayout$ = function $$DvtTagCloudLayoutUtils$$$$cloudLayout$$($availSpace$$117$$, $items$$34$$) {
  var $positions$$2_scale$$64$$ = [], $cx$$57_xrStep$$ = 10 / 180, $fontSize$$15_yrStep$$ = 10 / 180;
  $availSpace$$117$$.$w$ > $availSpace$$117$$.$h$ ? $cx$$57_xrStep$$ *= $availSpace$$117$$.$w$ / $availSpace$$117$$.$h$ : $fontSize$$15_yrStep$$ *= $availSpace$$117$$.$h$ / $availSpace$$117$$.$w$;
  for(var $thetaStep$$1$$ = 2 * window.Math.PI / 180, $bounds$$154_cy$$58$$ = D.$JSCompiler_alias_NULL$$, $maxFontSize$$ = 0, $cosCache$$ = [], $sinCache$$ = [], $i$$786$$ = 0;$i$$786$$ < $items$$34$$.length;$i$$786$$++) {
    for(var $placed$$ = D.$JSCompiler_alias_FALSE$$, $step$$5$$ = 0, $stepIncrement$$ = 4, $tag$$4$$ = $items$$34$$[$i$$786$$], $dims$$67$$ = $tag$$4$$.$getDimensions$(), $maxFontSize$$ = window.Math.max($maxFontSize$$, (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size"))), $lastCollisionIndex$$ = -1;!$placed$$;) {
      var $j$$106_lookup$$ = $step$$5$$ % 180;
      $cosCache$$[$j$$106_lookup$$] === D.$JSCompiler_alias_VOID$$ && ($cosCache$$[$j$$106_lookup$$] = window.Math.cos($step$$5$$ * $thetaStep$$1$$));
      $sinCache$$[$j$$106_lookup$$] === D.$JSCompiler_alias_VOID$$ && ($sinCache$$[$j$$106_lookup$$] = window.Math.sin($step$$5$$ * $thetaStep$$1$$));
      var $x$$268$$ = $cx$$57_xrStep$$ * $step$$5$$ * $cosCache$$[$j$$106_lookup$$], $y$$240$$ = $fontSize$$15_yrStep$$ * $step$$5$$ * $sinCache$$[$j$$106_lookup$$], $rect$$50$$ = new D.$DvtRectangle$$($x$$268$$, $y$$240$$, $dims$$67$$.$w$, $dims$$67$$.$h$), $placed$$ = D.$JSCompiler_alias_TRUE$$;
      -1 != $lastCollisionIndex$$ && $positions$$2_scale$$64$$[$lastCollisionIndex$$].$intersects$($rect$$50$$) && ($placed$$ = D.$JSCompiler_alias_FALSE$$);
      if($placed$$) {
        for($j$$106_lookup$$ = 0;$j$$106_lookup$$ < $i$$786$$;$j$$106_lookup$$++) {
          if($positions$$2_scale$$64$$[$j$$106_lookup$$].$intersects$($rect$$50$$)) {
            $lastCollisionIndex$$ = $j$$106_lookup$$;
            $placed$$ = D.$JSCompiler_alias_FALSE$$;
            break
          }
        }
      }
      $placed$$ && ($bounds$$154_cy$$58$$ = $bounds$$154_cy$$58$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$154_cy$$58$$, $rect$$50$$) : $rect$$50$$, $lastCollisionIndex$$ = -1, $positions$$2_scale$$64$$[$i$$786$$] = $rect$$50$$, $tag$$4$$.$setX$($x$$268$$), $tag$$4$$.$setY$(-$dims$$67$$.y + $y$$240$$));
      3600 === $step$$5$$ ? $stepIncrement$$ = 3 : 5400 === $step$$5$$ ? $stepIncrement$$ = 2 : 10800 === $step$$5$$ && ($stepIncrement$$ = 1);
      $step$$5$$ += $stepIncrement$$
    }
  }
  $positions$$2_scale$$64$$ = window.Math.max($bounds$$154_cy$$58$$.$w$ / $availSpace$$117$$.$w$, $bounds$$154_cy$$58$$.$h$ / $availSpace$$117$$.$h$);
  $cx$$57_xrStep$$ = $bounds$$154_cy$$58$$.x + $bounds$$154_cy$$58$$.$w$ / 2;
  $bounds$$154_cy$$58$$ = $bounds$$154_cy$$58$$.y + $bounds$$154_cy$$58$$.$h$ / 2;
  for($j$$106_lookup$$ = 0;$j$$106_lookup$$ < $items$$34$$.length;$j$$106_lookup$$++) {
    $tag$$4$$ = $items$$34$$[$j$$106_lookup$$], $tag$$4$$.$setX$($availSpace$$117$$.x + $tag$$4$$.$getX$() / $positions$$2_scale$$64$$ + ($availSpace$$117$$.$w$ / 2 - $cx$$57_xrStep$$ / $positions$$2_scale$$64$$)), $tag$$4$$.$setY$($availSpace$$117$$.y + $tag$$4$$.$getY$() / $positions$$2_scale$$64$$ + ($availSpace$$117$$.$h$ / 2 - $bounds$$154_cy$$58$$ / $positions$$2_scale$$64$$)), $fontSize$$15_yrStep$$ = (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size")), $tag$$4$$.$setFontSize$($fontSize$$15_yrStep$$ / 
    $positions$$2_scale$$64$$)
  }
};
D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$ = function $$DvtTagCloudLayoutUtils$$$$rectangleLayout$$($availSpace$$118$$, $items$$35$$, $isBidi$$) {
  for(var $arDims$$1$$ = [], $maxWidth$$26_scale$$65$$ = 0, $maxHeight$$15$$ = 0, $arLines_maxFontSize$$1$$ = 0, $i$$787_minScale$$9$$ = 0;$i$$787_minScale$$9$$ < $items$$35$$.length;$i$$787_minScale$$9$$++) {
    var $lineWidth$$9_maxScale_tag$$5$$ = $items$$35$$[$i$$787_minScale$$9$$], $dims$$68_lineStart$$ = $lineWidth$$9_maxScale_tag$$5$$.$getDimensions$(), $maxWidth$$26_scale$$65$$ = window.Math.max($maxWidth$$26_scale$$65$$, $dims$$68_lineStart$$.$w$), $maxHeight$$15$$ = window.Math.max($maxHeight$$15$$, $dims$$68_lineStart$$.$h$), $arLines_maxFontSize$$1$$ = window.Math.max($arLines_maxFontSize$$1$$, (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size")));
    $arDims$$1$$.push(new D.$DvtDimension$$($dims$$68_lineStart$$.$w$, $dims$$68_lineStart$$.$h$))
  }
  $i$$787_minScale$$9$$ = 0;
  for($lineWidth$$9_maxScale_tag$$5$$ = ($availSpace$$118$$.$w$ - 10) / $maxWidth$$26_scale$$65$$;0.001 < $lineWidth$$9_maxScale_tag$$5$$ - $i$$787_minScale$$9$$;) {
    $maxWidth$$26_scale$$65$$ = ($i$$787_minScale$$9$$ + $lineWidth$$9_maxScale_tag$$5$$) / 2, $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$118$$.$w$ - 10) / $maxWidth$$26_scale$$65$$), $arLines_maxFontSize$$1$$.length * ($maxWidth$$26_scale$$65$$ * $maxHeight$$15$$ + 2) - 2 > $availSpace$$118$$.$h$ - 10 ? $lineWidth$$9_maxScale_tag$$5$$ = $maxWidth$$26_scale$$65$$ : $i$$787_minScale$$9$$ = $maxWidth$$26_scale$$65$$
  }
  $maxWidth$$26_scale$$65$$ = $i$$787_minScale$$9$$;
  $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$118$$.$w$ - 10) / $maxWidth$$26_scale$$65$$);
  $arLines_maxFontSize$$1$$.push($items$$35$$.length);
  for($i$$787_minScale$$9$$ = 0;$i$$787_minScale$$9$$ < $arLines_maxFontSize$$1$$.length - 1;$i$$787_minScale$$9$$++) {
    var $dims$$68_lineStart$$ = $arLines_maxFontSize$$1$$[$i$$787_minScale$$9$$], $lineEnd$$ = $arLines_maxFontSize$$1$$[$i$$787_minScale$$9$$ + 1], $hPadding$$1$$ = 0, $bottomY$$2_maxLineHeight$$ = 0, $justified$$ = D.$JSCompiler_alias_TRUE$$;
    if(1 < $lineEnd$$ - $dims$$68_lineStart$$) {
      for(var $lineWidth$$9_maxScale_tag$$5$$ = 0, $flowPadding_j$$107$$ = $dims$$68_lineStart$$;$flowPadding_j$$107$$ < $lineEnd$$;$flowPadding_j$$107$$++) {
        $lineWidth$$9_maxScale_tag$$5$$ += $arDims$$1$$[$flowPadding_j$$107$$].$w$ * $maxWidth$$26_scale$$65$$, $bottomY$$2_maxLineHeight$$ = window.Math.max($bottomY$$2_maxLineHeight$$, $arDims$$1$$[$flowPadding_j$$107$$].$h$ * $maxWidth$$26_scale$$65$$)
      }
      $hPadding$$1$$ = ($availSpace$$118$$.$w$ - 10 - $lineWidth$$9_maxScale_tag$$5$$) / ($lineEnd$$ - $dims$$68_lineStart$$ - 1);
      $i$$787_minScale$$9$$ == $arLines_maxFontSize$$1$$.length - 2 && ($flowPadding_j$$107$$ = 0.5 * $bottomY$$2_maxLineHeight$$, $flowPadding_j$$107$$ < $hPadding$$1$$ && $lineWidth$$9_maxScale_tag$$5$$ + ($lineEnd$$ - $dims$$68_lineStart$$) * $flowPadding_j$$107$$ < 0.9 * ($availSpace$$118$$.$w$ - 10) && ($hPadding$$1$$ = $flowPadding_j$$107$$, $justified$$ = D.$JSCompiler_alias_FALSE$$))
    }
    for(var $bottomY$$2_maxLineHeight$$ = 5 + ($i$$787_minScale$$9$$ + 1) * ($maxHeight$$15$$ * $maxWidth$$26_scale$$65$$ + 2) - 2, $curX$$2$$ = $isBidi$$ ? $availSpace$$118$$.$w$ - 5 : 5, $flowPadding_j$$107$$ = $dims$$68_lineStart$$;$flowPadding_j$$107$$ < $lineEnd$$;$flowPadding_j$$107$$++) {
      var $lineWidth$$9_maxScale_tag$$5$$ = $items$$35$$[$flowPadding_j$$107$$], $fontSize$$16$$ = (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size"));
      $lineWidth$$9_maxScale_tag$$5$$.$setFontSize$($fontSize$$16$$ * $maxWidth$$26_scale$$65$$);
      $lineWidth$$9_maxScale_tag$$5$$.$setY$($availSpace$$118$$.y + $bottomY$$2_maxLineHeight$$);
      $justified$$ && $flowPadding_j$$107$$ == $lineEnd$$ - 1 && $flowPadding_j$$107$$ != $dims$$68_lineStart$$ ? $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$118$$.x + 5)) : ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$118$$.x + $availSpace$$118$$.$w$ - 5)) : ($lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$118$$.x + $curX$$2$$), $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), 
      $curX$$2$$ -= $arDims$$1$$[$flowPadding_j$$107$$].$w$ * $maxWidth$$26_scale$$65$$ + $hPadding$$1$$) : ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $curX$$2$$ += $arDims$$1$$[$flowPadding_j$$107$$].$w$ * $maxWidth$$26_scale$$65$$ + $hPadding$$1$$))
    }
  }
};
D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$ = function $$DvtTagCloudLayoutUtils$$$$_calculateLineBreaks$$($arDims$$2$$, $width$$154$$) {
  var $lines$$1$$ = [0], $curWidth$$ = $arDims$$2$$[0].$w$ + 2;
  if(1 < $arDims$$2$$.length) {
    for(var $i$$788$$ = 1;$i$$788$$ < $arDims$$2$$.length;$i$$788$$++) {
      $curWidth$$ + $arDims$$2$$[$i$$788$$].$w$ > $width$$154$$ && ($lines$$1$$.push($i$$788$$), $curWidth$$ = 0), $curWidth$$ += $arDims$$2$$[$i$$788$$].$w$ + 2
    }
  }
  return $lines$$1$$
};
D.$DvtTagCloudStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudStyleUtils$$, D.$DvtObj$$, "DvtTagCloudStyleUtils");
D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$ = function $$DvtTagCloudStyleUtils$$$$getAnimationDuration$$($tagCloud$$9$$) {
  return $tagCloud$$9$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtTagCloudEventManager$$ = function $$DvtTagCloudEventManager$$$($view$$62$$, $context$$580$$, $callback$$157$$, $callbackObj$$108$$) {
  this.Init($context$$580$$, $callback$$157$$, $callbackObj$$108$$);
  this.$_view$ = $view$$62$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudEventManager$$, D.$DvtEventManager$$, "DvtTagCloudEventManager");
D.$DvtTagCloudEventManager$$.prototype.$OnClickInternal$ = function $$DvtTagCloudEventManager$$$$$OnClickInternal$$($event$$741_obj$$342$$) {
  $event$$741_obj$$342$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$741_obj$$342$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$741_obj$$342$$);
  this.$_processActionEvent$($event$$741_obj$$342$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchHoverEndInternal$$($event$$742_obj$$343$$) {
  $event$$742_obj$$343$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$742_obj$$343$$.target);
  this.$_processActionEvent$($event$$742_obj$$343$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchClickInternal$$($event$$743_obj$$344$$) {
  $event$$743_obj$$344$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$743_obj$$344$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$743_obj$$344$$);
  this.$_processActionEvent$($event$$743_obj$$344$$)
};
D.$JSCompiler_StaticMethods__handleLinkCallback$$ = function $$JSCompiler_StaticMethods__handleLinkCallback$$$($callback$$158_obj$$345$$) {
  $callback$$158_obj$$345$$ instanceof D.$DvtTagCloudObjPeer$$ && ($callback$$158_obj$$345$$ = $callback$$158_obj$$345$$.$getLinkCallback$()) && $callback$$158_obj$$345$$.call()
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessKeyboardEvent$$($event$$744$$) {
  var $eventConsumed$$6$$ = D.$JSCompiler_alias_TRUE$$, $focusObj$$1$$ = this.$getFocus$();
  13 == $event$$744$$.keyCode ? (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($focusObj$$1$$) : $eventConsumed$$6$$ = D.$DvtTagCloudEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$744$$);
  return $eventConsumed$$6$$
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessRolloverEvent$$($event$$745$$, $categories$$27_hoverBehaviorDelay$$5_obj$$346$$, $bOver$$12_rolloverEvent$$6$$) {
  var $options$$257$$ = this.$_view$.$getOptions$();
  "dim" == $options$$257$$.hoverBehavior && ($categories$$27_hoverBehaviorDelay$$5_obj$$346$$ = $categories$$27_hoverBehaviorDelay$$5_obj$$346$$.$getCategories$ ? $categories$$27_hoverBehaviorDelay$$5_obj$$346$$.$getCategories$() : [], $options$$257$$.highlightedCategories = $bOver$$12_rolloverEvent$$6$$ ? $categories$$27_hoverBehaviorDelay$$5_obj$$346$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$12_rolloverEvent$$6$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$12_rolloverEvent$$6$$ ? "categoryRollOver" : 
  "categoryRollOut", $options$$257$$.highlightedCategories), $categories$$27_hoverBehaviorDelay$$5_obj$$346$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$257$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$12_rolloverEvent$$6$$, this.$_view$.$getObjects$(), $categories$$27_hoverBehaviorDelay$$5_obj$$346$$, "any" == $options$$257$$.highlightMatch), $event$$745$$.stopPropagation())
};
D.$DvtTagCloudEventManager$$.prototype.$_processActionEvent$ = function $$DvtTagCloudEventManager$$$$$_processActionEvent$$($obj$$347$$) {
  $obj$$347$$ && ($obj$$347$$.$getAction$ && $obj$$347$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$347$$.$getAction$(), $obj$$347$$.getId()))
};
D.$DvtTagCloudKeyboardHandler$$ = function $$DvtTagCloudKeyboardHandler$$$($manager$$26$$) {
  this.Init($manager$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtTagCloudKeyboardHandler");
D.$DvtTagCloudKeyboardHandler$$.prototype.Init = function $$DvtTagCloudKeyboardHandler$$$$Init$($manager$$27$$) {
  D.$DvtTagCloudKeyboardHandler$$.$superclass$.Init.call(this, $manager$$27$$)
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isSelectionEvent$$($event$$746$$) {
  return this.$isNavigationEvent$($event$$746$$) && !$event$$746$$.ctrlKey
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isMultiSelectEvent$$($event$$747$$) {
  return 32 == $event$$747$$.keyCode && $event$$747$$.ctrlKey
};
D.$DvtTagCloudDropTarget$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudDropTarget$$, D.$DvtDropTarget$$, "DvtTagCloudDropTarget");
D.$DvtTagCloudDropTarget$$.prototype.$acceptDrag$ = function $$DvtTagCloudDropTarget$$$$$acceptDrag$$($mouseX$$39$$, $mouseY$$39$$, $clientIds$$17$$) {
  return $clientIds$$17$$[0]
};
  return D;
});