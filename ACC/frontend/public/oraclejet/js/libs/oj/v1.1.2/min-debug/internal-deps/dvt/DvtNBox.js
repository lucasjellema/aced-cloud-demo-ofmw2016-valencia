/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtNBox$$ = function $$DvtNBox$$$($context$$450$$, $callback$$122$$, $callbackObj$$75$$) {
  this.Init($context$$450$$, $callback$$122$$, $callbackObj$$75$$)
};
(0,D.$goog$exportPath_$$)("DvtNBox", D.$DvtNBox$$);
D.$DvtObj$$.$createSubclass$(D.$DvtNBox$$, D.$DvtBaseComponent$$, "DvtNBox");
D.$DvtNBox$$.newInstance = function $$DvtNBox$$$newInstance$($context$$451$$, $callback$$123$$, $callbackObj$$76$$) {
  return new D.$DvtNBox$$($context$$451$$, $callback$$123$$, $callbackObj$$76$$)
};
D.$DvtNBox$$.getDefaults = function $$DvtNBox$$$getDefaults$($skin$$17$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtNBoxDefaults$$, $skin$$17$$)
};
D.$DvtNBox$$.prototype.Init = function $$DvtNBox$$$$Init$($context$$452$$, $callback$$124$$, $callbackObj$$77$$) {
  D.$DvtNBox$$.$superclass$.Init.call(this, $context$$452$$, $callback$$124$$, $callbackObj$$77$$);
  this.$Defaults$ = new D.$DvtNBoxDefaults$$;
  this.$EventManager$ = new D.$DvtNBoxEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$452$$);
  this.$_dropTarget$ = new D.$DvtNBoxDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$EventManager$, this.$_dragSource$);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("nbox1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$legend$ = this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_peers$ = []
};
D.$DvtNBox$$.prototype.$SetOptions$ = function $$DvtNBox$$$$$SetOptions$$($options$$193_selectionMode$$8$$) {
  $options$$193_selectionMode$$8$$ || ($options$$193_selectionMode$$8$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this));
  $options$$193_selectionMode$$8$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$193_selectionMode$$8$$), D.$DvtNBoxDataUtils$$.$processDataObject$(this), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$[D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$] = "none", this.$Options$[D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$] = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  this.$_displayables$ = [];
  $options$$193_selectionMode$$8$$ = this.$Options$[D.$DvtNBoxConstants$$.$SELECTION_MODE$];
  this.$_selectionHandler$ = "single" == $options$$193_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$193_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$)
};
D.$DvtNBox$$.prototype.$render$ = function $$DvtNBox$$$$$render$$($ah$$2_options$$194$$, $container$$139_width$$117$$, $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$) {
  var $animationOnDataChange$$2$$ = D.$DvtNBoxStyleUtils$$.$getAnimationOnDataChange$(this), $oldNBox$$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$ && "none" !== $animationOnDataChange$$2$$ && ($oldNBox$$ = {options:this.$Options$, getOptions:(0,D.$JSCompiler_get$$)("options"), displayables:this.$_displayables$, getDisplayables:(0,D.$JSCompiler_get$$)("displayables"), id:this.getId(), getId:(0,D.$JSCompiler_get$$)("id")}, $oldNBox$$.$getOptions$ = $oldNBox$$.getOptions, $oldNBox$$.$getDisplayables$ = $oldNBox$$.getDisplayables, $oldNBox$$.getId = $oldNBox$$.getId);
  this.$__cleanUp$();
  this.$SetOptions$($ah$$2_options$$194$$);
  !(0,window.isNaN)($container$$139_width$$117$$) && !(0,window.isNaN)($bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$) && (this.$Width$ = $container$$139_width$$117$$, this.$Height$ = $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$);
  $container$$139_width$$117$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$($container$$139_width$$117$$);
  D.$DvtNBoxRenderer$$.$render$(this, $container$$139_width$$117$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$ = [this];
  var $animationOnDisplay$$3_legend$$27_legendData$$3$$ = D.$DvtNBoxDataUtils$$.$getLegend$(this);
  if($animationOnDisplay$$3_legend$$27_legendData$$3$$ && $animationOnDisplay$$3_legend$$27_legendData$$3$$.sections) {
    var $animationDuration$$8_panelDrawer$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$3_legend$$27_legendData$$3$$, "panelDrawer");
    $animationDuration$$8_panelDrawer$$2$$ && ($bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$.push($animationDuration$$8_panelDrawer$$2$$), $animationDuration$$8_panelDrawer$$2$$.$isDisclosed$() && ($animationOnDisplay$$3_legend$$27_legendData$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$3_legend$$27_legendData$$3$$, "legend"), $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$.push($animationOnDisplay$$3_legend$$27_legendData$$3$$)))
  }
  (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$);
  $ah$$2_options$$194$$ && (D.$DvtNBoxDataUtils$$.$getDrawer$(this) && D.$DvtNBoxDataUtils$$.$getGrouping$(this)) && ($bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, D.$DvtNBoxDataUtils$$.$getDrawer$(this)), this.$EventManager$.$setFocus$($bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$), this.$EventManager$.$setFocused$(D.$JSCompiler_alias_FALSE$$));
  this.$_updateKeyboardFocusEffect$();
  this.$_animation$ && (this.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.stop());
  var $animationOnDisplay$$3_legend$$27_legendData$$3$$ = D.$DvtNBoxStyleUtils$$.$getAnimationOnDisplay$(this), $animationDuration$$8_panelDrawer$$2$$ = D.$DvtNBoxStyleUtils$$.$getAnimationDuration$(this), $bounds$$139$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange$$2$$ && $ah$$2_options$$194$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $animationOnDataChange$$2$$, this.$_container$, $container$$139_width$$117$$, $bounds$$139$$, $animationDuration$$8_panelDrawer$$2$$)) ? $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$ = D.$JSCompiler_alias_TRUE$$ : (this.$_deleteContainer$ = new D.$DvtContainer$$(this.$getCtx$(), "DeleteContainer"), this.$addChild$(this.$_deleteContainer$), 
  $ah$$2_options$$194$$ = new D.$DvtNBoxDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$, $oldNBox$$, this), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$2_options$$194$$, [$oldNBox$$], [this]), this.$_animation$ = $ah$$2_options$$194$$.$getAnimation$())) : "none" !== $animationOnDisplay$$3_legend$$27_legendData$$3$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), $animationOnDisplay$$3_legend$$27_legendData$$3$$, $container$$139_width$$117$$, 
  $bounds$$139$$, $animationDuration$$8_panelDrawer$$2$$));
  this.$_animation$ && (this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this), this.$_animation$.play());
  $bBlackBoxUpdate$$2_drawer_height$$109_keyboardHandlers$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$());
  this.$_container$ = $container$$139_width$$117$$;
  this.$UpdateAriaAttributes$()
};
D.$DvtNBox$$.prototype.render = D.$DvtNBox$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
  this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$19$$) {
  return new D.$DvtNBoxKeyboardHandler$$($manager$$19$$, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_container$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$() {
  var $navigable$$15$$ = this.$EventManager$.$getFocus$(), $isShowingKeyboardFocusEffect$$ = D.$JSCompiler_alias_FALSE$$;
  if($navigable$$15$$) {
    var $newNavigable$$, $isShowingKeyboardFocusEffect$$ = $navigable$$15$$.$isShowingKeyboardFocusEffect$();
    $navigable$$15$$.$getKeyboardFocusDisplayable$ && ($newNavigable$$ = $navigable$$15$$.$getKeyboardFocusDisplayable$());
    $newNavigable$$ && $isShowingKeyboardFocusEffect$$ && $newNavigable$$.$showKeyboardFocusEffect$();
    this.$EventManager$.$setFocus$($newNavigable$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$558$$) {
  var $disclosure_type$$238$$ = $event$$558$$.$getType$(), $options$$195$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this);
  $disclosure_type$$238$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $disclosure_type$$238$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ ? $event$$558$$ = this.$_processHideShowEvent$($event$$558$$) : "categoryRollOver" == $disclosure_type$$238$$ || "categoryRollOut" == $disclosure_type$$238$$ ? $event$$558$$ = this.$_processRolloverEvent$($event$$558$$) : "selection" == $disclosure_type$$238$$ ? $event$$558$$ = this.$_processSelectionEvent$($event$$558$$) : $options$$195$$._legend && "dvtPanelDrawerEvent" == 
  $disclosure_type$$238$$ && ($disclosure_type$$238$$ = "hide" == $event$$558$$.$getSubType$() ? "undisclosed" : "disclosed", $event$$558$$ = new D.$DvtSetPropertyEvent$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$558$$, D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$, $disclosure_type$$238$$), $options$$195$$[D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$] = $disclosure_type$$238$$, this.$render$($options$$195$$));
  $event$$558$$ && this.$__dispatchEvent$($event$$558$$)
};
D.$JSCompiler_prototypeAlias$$.$_processHideShowEvent$ = function $$JSCompiler_prototypeAlias$$$$_processHideShowEvent$$($event$$559$$) {
  var $options$$196$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this), $hiddenCategories$$10$$ = $options$$196$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$];
  $hiddenCategories$$10$$ || ($hiddenCategories$$10$$ = []);
  var $categoryIndex$$2$$ = D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$10$$, $event$$559$$.$_category$);
  $event$$559$$.$getType$() == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ && -1 == $categoryIndex$$2$$ && $hiddenCategories$$10$$.push($event$$559$$.$_category$);
  $event$$559$$.$getType$() == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ && -1 != $categoryIndex$$2$$ && $hiddenCategories$$10$$.splice($categoryIndex$$2$$, 1);
  0 == $hiddenCategories$$10$$.length && ($hiddenCategories$$10$$ = D.$JSCompiler_alias_NULL$$);
  $event$$559$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$559$$, D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$, $hiddenCategories$$10$$);
  $options$$196$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$] = $hiddenCategories$$10$$;
  this.$render$($options$$196$$);
  return $event$$559$$
};
D.$JSCompiler_prototypeAlias$$.$_processRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$_processRolloverEvent$$($event$$560$$) {
  this.$_processHighlighting$($event$$560$$.categories);
  return $event$$560$$
};
D.$JSCompiler_prototypeAlias$$.$_processSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processSelectionEvent$$($event$$561_selectedMap$$) {
  var $eventSelection_objects$$3_selection$$35$$ = $event$$561_selectedMap$$.getSelection(), $i$$710_selectedItems$$ = D.$JSCompiler_alias_NULL$$;
  if($eventSelection_objects$$3_selection$$35$$) {
    $event$$561_selectedMap$$ = {};
    for($i$$710_selectedItems$$ = 0;$i$$710_selectedItems$$ < $eventSelection_objects$$3_selection$$35$$.length;$i$$710_selectedItems$$++) {
      $event$$561_selectedMap$$[$eventSelection_objects$$3_selection$$35$$[$i$$710_selectedItems$$]] = D.$JSCompiler_alias_TRUE$$
    }
    var $eventSelection_objects$$3_selection$$35$$ = this.$getObjects$(), $drawer$$1$$ = D.$JSCompiler_alias_NULL$$;
    if(D.$DvtNBoxDataUtils$$.$getGrouping$(this)) {
      for($i$$710_selectedItems$$ = 0;$i$$710_selectedItems$$ < $eventSelection_objects$$3_selection$$35$$.length;$i$$710_selectedItems$$++) {
        if($eventSelection_objects$$3_selection$$35$$[$i$$710_selectedItems$$] instanceof D.$DvtNBoxCategoryNode$$) {
          if($event$$561_selectedMap$$[$eventSelection_objects$$3_selection$$35$$[$i$$710_selectedItems$$].getId()]) {
            $event$$561_selectedMap$$[$eventSelection_objects$$3_selection$$35$$[$i$$710_selectedItems$$].getId()] = D.$JSCompiler_alias_FALSE$$;
            for(var $nodeIndices$$1$$ = $eventSelection_objects$$3_selection$$35$$[$i$$710_selectedItems$$].getData().nodeIndices, $j$$93$$ = 0;$j$$93$$ < $nodeIndices$$1$$.length;$j$$93$$++) {
              var $node$$249$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$1$$[$j$$93$$]);
              $event$$561_selectedMap$$[$node$$249$$[D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
            }
          }
        }else {
          $eventSelection_objects$$3_selection$$35$$[$i$$710_selectedItems$$] instanceof D.$DvtNBoxDrawer$$ && ($drawer$$1$$ = $eventSelection_objects$$3_selection$$35$$[$i$$710_selectedItems$$])
        }
      }
    }
    var $eventSelection_objects$$3_selection$$35$$ = [], $i$$710_selectedItems$$ = [], $id$$223$$;
    for($id$$223$$ in $event$$561_selectedMap$$) {
      $event$$561_selectedMap$$[$id$$223$$] && ($eventSelection_objects$$3_selection$$35$$.push($id$$223$$), $i$$710_selectedItems$$.push($id$$223$$))
    }
    $event$$561_selectedMap$$ = new D.$DvtSelectionEvent$$($eventSelection_objects$$3_selection$$35$$)
  }
  D.$DvtNBoxDataUtils$$.$setSelectedItems$(this, $i$$710_selectedItems$$);
  $drawer$$1$$ && $drawer$$1$$.$UpdateAccessibilityAttributes$();
  return $event$$561_selectedMap$$
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$24$$) {
  this.$_peers$.push($peer$$24$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$14$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$14$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$7$$, $oldNBox$$1$$) {
  D.$DvtNBoxRenderer$$.$animateUpdate$($animationHandler$$7$$, $oldNBox$$1$$, this)
};
D.$JSCompiler_StaticMethods_getSanitizedOptions$$ = function $$JSCompiler_StaticMethods_getSanitizedOptions$$$($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
  return D.$DvtJSONUtils$$.$clone$($JSCompiler_StaticMethods_getSanitizedOptions$self$$.$getOptions$(), function($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
    return 0 != $JSCompiler_StaticMethods_getSanitizedOptions$self$$.indexOf("__")
  })
};
D.$DvtNBox$$.prototype.$getSubcomponentStyles$ = function $$DvtNBox$$$$$getSubcomponentStyles$$() {
  return{}
};
D.$DvtNBox$$.prototype.$__isDragAvailable$ = function $$DvtNBox$$$$$__isDragAvailable$$($clientIds$$10$$) {
  return this.$_selectionHandler$ ? $clientIds$$10$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBox$$.prototype.$__getDragTransferable$ = function $$DvtNBox$$$$$__getDragTransferable$$($node$$250_rowKeys$$1$$) {
  $node$$250_rowKeys$$1$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$250_rowKeys$$1$$, D.$JSCompiler_alias_FALSE$$), this.$EventManager$.$fireSelectionEvent$());
  $node$$250_rowKeys$$1$$ = [];
  for(var $selection$$36$$ = this.$_selectionHandler$.getSelection(), $i$$711$$ = 0;$i$$711$$ < $selection$$36$$.length;$i$$711$$++) {
    var $item$$43_nodeIndices$$2$$ = $selection$$36$$[$i$$711$$];
    if($item$$43_nodeIndices$$2$$ instanceof D.$DvtNBoxNode$$) {
      $node$$250_rowKeys$$1$$.push($item$$43_nodeIndices$$2$$.getData()[D.$DvtNBoxConstants$$.ID])
    }else {
      if($item$$43_nodeIndices$$2$$ instanceof D.$DvtNBoxCategoryNode$$) {
        for(var $item$$43_nodeIndices$$2$$ = $item$$43_nodeIndices$$2$$.getData().nodeIndices, $j$$94$$ = 0;$j$$94$$ < $item$$43_nodeIndices$$2$$.length;$j$$94$$++) {
          $node$$250_rowKeys$$1$$.push(D.$DvtNBoxDataUtils$$.$getNode$(this, $item$$43_nodeIndices$$2$$[$j$$94$$])[D.$DvtNBoxConstants$$.ID])
        }
      }
    }
  }
  return $node$$250_rowKeys$$1$$
};
D.$DvtNBox$$.prototype.$__getDragFeedback$ = function $$DvtNBox$$$$$__getDragFeedback$$() {
  return this.$_selectionHandler$.getSelection().slice(0)
};
D.$JSCompiler_StaticMethods___getCellUnderPoint$$ = function $$JSCompiler_StaticMethods___getCellUnderPoint$$$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $x$$236$$, $y$$210$$) {
  for(var $cellCount$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$), $i$$712$$ = 0;$i$$712$$ < $cellCount$$;$i$$712$$++) {
    var $cell$$30$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, D.$DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $i$$712$$));
    if($cell$$30$$.contains($x$$236$$, $y$$210$$)) {
      return $cell$$30$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBox$$.prototype.$__showDropSiteFeedback$ = function $$DvtNBox$$$$$__showDropSiteFeedback$$($cell$$31$$) {
  this.$_dropSiteFeedback$ && (this.$_dropSiteFeedback$.getParent().removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = D.$JSCompiler_alias_NULL$$);
  $cell$$31$$ && (this.$_dropSiteFeedback$ = $cell$$31$$.$renderDropSiteFeedback$());
  return this.$_dropSiteFeedback$
};
D.$DvtNBox$$.prototype.$getAutomation$ = function $$DvtNBox$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtNBoxAutomation$$(this));
  return this.$Automation$
};
D.$DvtNBox$$.prototype.getAutomation = D.$DvtNBox$$.prototype.$getAutomation$;
D.$DvtNBox$$.prototype.$GetComponentDescription$ = function $$DvtNBox$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NBOX", D.$DvtNBoxDataUtils$$.$getColumnCount$(this) * D.$DvtNBoxDataUtils$$.$getRowCount$(this))
};
D.$DvtNBox$$.prototype.$highlight$ = function $$DvtNBox$$$$$highlight$$($categories$$17$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$17$$);
  this.$_processHighlighting$($categories$$17$$)
};
D.$DvtNBox$$.prototype.highlight = D.$DvtNBox$$.prototype.$highlight$;
D.$DvtNBox$$.prototype.$_processHighlighting$ = function $$DvtNBox$$$$$_processHighlighting$$($categories$$18$$) {
  var $displayables$$24$$ = (0,D.$JSCompiler_StaticMethods_getNodeDisplayables$$)(this), $cellCount$$1_highlightedMap$$ = D.$DvtNBoxDataUtils$$.$getRowCount$(this) * D.$DvtNBoxDataUtils$$.$getColumnCount$(this);
  this.$getOptions$().__highlightedMap = D.$JSCompiler_alias_NULL$$;
  for(var $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$(this), $i$$713$$ = 0;$i$$713$$ < $cellCount$$1_highlightedMap$$;$i$$713$$++) {
    var $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$ = D.$DvtNBoxDataUtils$$.$getCell$(this, $i$$713$$), $cell$$32_i$$inline_7367_j$$95$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$);
    D.$DvtNBoxCellRenderer$$.$renderHeader$(this, $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$, $cell$$32_i$$inline_7367_j$$95$$, $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$, D.$JSCompiler_alias_FALSE$$)
  }
  $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$(this);
  $cellCount$$1_highlightedMap$$ = {};
  if($JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$) {
    for(var $i$$713$$ = 0;$i$$713$$ < $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.length;$i$$713$$++) {
      $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$[$i$$713$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
  }
  for($i$$713$$ = 0;$i$$713$$ < $displayables$$24$$.length;$i$$713$$++) {
    if($JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = $categories$$18$$) {
      if($JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = 0 < $categories$$18$$.length) {
        a: {
          $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = $displayables$$24$$[$i$$713$$];
          if($JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ instanceof D.$DvtNBoxNode$$) {
            if($JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.$getCategories$()) {
              $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = "all" == this.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllItems$($categories$$18$$, $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.$getCategories$()) : D.$DvtArrayUtils$$.$hasAnyItem$($categories$$18$$, 
              $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.$getCategories$());
              break a
            }
          }else {
            if($JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ instanceof D.$DvtNBoxCategoryNode$$) {
              $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.getData();
              $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$ = $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.nodeIndices.length;
              for($cell$$32_i$$inline_7367_j$$95$$ = 0;$cell$$32_i$$inline_7367_j$$95$$ < $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$;$cell$$32_i$$inline_7367_j$$95$$++) {
                var $nodeData$$inline_7368$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.nodeIndices[$cell$$32_i$$inline_7367_j$$95$$]);
                if($nodeData$$inline_7368$$[D.$DvtNBoxConstants$$.$CATEGORIES$] && ("all" == this.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllItems$($categories$$18$$, $nodeData$$inline_7368$$[D.$DvtNBoxConstants$$.$CATEGORIES$]) : D.$DvtArrayUtils$$.$hasAnyItem$($categories$$18$$, $nodeData$$inline_7368$$[D.$DvtNBoxConstants$$.$CATEGORIES$]))) {
                  $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = D.$JSCompiler_alias_TRUE$$;
                  break a
                }
              }
            }
          }
          $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = D.$JSCompiler_alias_FALSE$$
        }
        $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = !$JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$
      }
    }
    $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ ? $displayables$$24$$[$i$$713$$].$setAlpha$(D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$(this)) : $displayables$$24$$[$i$$713$$].$setAlpha$(1);
    if($displayables$$24$$[$i$$713$$] instanceof D.$DvtNBoxCategoryNode$$) {
      $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$ = 0;
      $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$ = $displayables$$24$$[$i$$713$$].getData();
      for($cell$$32_i$$inline_7367_j$$95$$ = 0;$cell$$32_i$$inline_7367_j$$95$$ < $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.nodeIndices.length;$cell$$32_i$$inline_7367_j$$95$$++) {
        $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.nodeIndices[$cell$$32_i$$inline_7367_j$$95$$]] && ($bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$ += 1)
      }
      $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.highlightedCount = $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$;
      $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$(this, $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$) != D.$JSCompiler_alias_NULL$$ || D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this, $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$) != 
      D.$JSCompiler_alias_NULL$$;
      D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$(this, $displayables$$24$$[$i$$713$$].getData(), $displayables$$24$$[$i$$713$$], $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.__scale, $bIndicator_categoryNodeCount$$inline_7366_cellData$$1_count$$17$$, $JSCompiler_inline_result$$398_JSCompiler_temp$$396_JSCompiler_temp$$397_cellCounts_data$$72_data$$inline_7365_disp$$inline_7364_highlightedItems$$.__gap)
    }
  }
};
D.$JSCompiler_StaticMethods_getNodeDisplayables$$ = function $$JSCompiler_StaticMethods_getNodeDisplayables$$$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) {
  for(var $dataObjects$$ = [], $displayable$$60_groupInfo_nodeCount$$5$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$715$$ = 0;$groupBehavior_i$$715$$ < $displayable$$60_groupInfo_nodeCount$$5$$;$groupBehavior_i$$715$$++) {
    $dataObjects$$.push(D.$DvtNBoxDataUtils$$.$getNode$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $groupBehavior_i$$715$$))
  }
  $groupBehavior_i$$715$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($JSCompiler_StaticMethods_getNodeDisplayables$self$$);
  if($displayable$$60_groupInfo_nodeCount$$5$$ = $JSCompiler_StaticMethods_getNodeDisplayables$self$$.$getOptions$().__groups) {
    if($groupBehavior_i$$715$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$2$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$715$$ = 0;$groupBehavior_i$$715$$ < $cellCount$$2$$;$groupBehavior_i$$715$$++) {
        var $cellGroups$$ = $displayable$$60_groupInfo_nodeCount$$5$$[$groupBehavior_i$$715$$ + ""], $displayables$$25_id$$224$$;
        for($displayables$$25_id$$224$$ in $cellGroups$$) {
          $dataObjects$$.push($cellGroups$$[$displayables$$25_id$$224$$])
        }
      }
    }else {
      for($displayables$$25_id$$224$$ in $displayable$$60_groupInfo_nodeCount$$5$$) {
        $dataObjects$$.push($displayable$$60_groupInfo_nodeCount$$5$$[$displayables$$25_id$$224$$])
      }
    }
  }
  $displayables$$25_id$$224$$ = [];
  for($groupBehavior_i$$715$$ = 0;$groupBehavior_i$$715$$ < $dataObjects$$.length;$groupBehavior_i$$715$$++) {
    ($displayable$$60_groupInfo_nodeCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $dataObjects$$[$groupBehavior_i$$715$$])) && $displayables$$25_id$$224$$.push($displayable$$60_groupInfo_nodeCount$$5$$)
  }
  return $displayables$$25_id$$224$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$30$$, $mouseY$$30$$, $clientIds$$14$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$31$$, $mouseY$$31$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$31$$, $mouseY$$31$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$32$$, $mouseY$$32$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$32$$, $mouseY$$32$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$33$$, $mouseY$$33$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$33$$, $mouseY$$33$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$34$$, $mouseY$$34$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$34$$, $mouseY$$34$$)
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$4$$, $yOffset$$6$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$4$$, $yOffset$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtNBox$$.prototype.$acceptDrag$ = function $$DvtNBox$$$$$acceptDrag$$($mouseX$$35$$, $mouseY$$35$$, $clientIds$$15$$) {
  return this.$_dropTarget$.$acceptDrag$($mouseX$$35$$, $mouseY$$35$$, $clientIds$$15$$)
};
D.$DvtNBox$$.prototype.$getDropSite$ = function $$DvtNBox$$$$$getDropSite$$($mouseX$$36$$, $mouseY$$36$$) {
  return this.$_dropTarget$.$getDropSite$($mouseX$$36$$, $mouseY$$36$$)
};
D.$DvtNBoxConstants$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxConstants$$, D.$DvtObj$$, "DvtNBoxConstants");
D.$DvtNBoxConstants$$.$COLUMN$ = "column";
D.$DvtNBoxConstants$$.$COLUMNS$ = "columns";
D.$DvtNBoxConstants$$.$COLUMNS_TITLE$ = "columnsTitle";
D.$DvtNBoxConstants$$.$COLUMNS_TITLE_STYLE$ = "columnsTitleStyle";
D.$DvtNBoxConstants$$.$COLUMN_LABEL_STYLE$ = "columnLabelStyle";
D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$ = "maximizedColumn";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.MAXIMIZED_COLUMN", D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$);
D.$DvtNBoxConstants$$.$ROW$ = "row";
D.$DvtNBoxConstants$$.$ROWS$ = "rows";
D.$DvtNBoxConstants$$.$ROWS_TITLE$ = "rowsTitle";
D.$DvtNBoxConstants$$.$ROWS_TITLE_STYLE$ = "rowsTitleStyle";
D.$DvtNBoxConstants$$.$ROW_LABEL_STYLE$ = "rowLabelStyle";
D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$ = "maximizedRow";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.MAXIMIZED_ROW", D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$);
D.$DvtNBoxConstants$$.$CELL$ = "cell";
D.$DvtNBoxConstants$$.$CELLS$ = "cells";
D.$DvtNBoxConstants$$.$CELL_DEFAULTS$ = "cellDefaults";
D.$DvtNBoxConstants$$.$NODES$ = "nodes";
D.$DvtNBoxConstants$$.$NODE_DEFAULTS$ = "nodeDefaults";
D.$DvtNBoxConstants$$.$CATEGORIES$ = "categories";
D.$DvtNBoxConstants$$.$ICON$ = "icon";
D.$DvtNBoxConstants$$.$ICON_DEFAULTS$ = "iconDefaults";
D.$DvtNBoxConstants$$.$INDICATOR$ = "indicator";
D.$DvtNBoxConstants$$.$INDICATOR_ICON$ = "indicatorIcon";
D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$ = "indicatorIconDefaults";
D.$DvtNBoxConstants$$.$INDICATOR_COLOR$ = "indicatorColor";
D.$DvtNBoxConstants$$.$X_PERCENTAGE$ = "xPercentage";
D.$DvtNBoxConstants$$.$Y_PERCENTAGE$ = "yPercentage";
D.$DvtNBoxConstants$$.$SELECTION$ = "selection";
D.$DvtNBoxConstants$$.$SELECTION_MODE$ = "selectionMode";
D.$DvtNBoxConstants$$.$SELECTION_INFO$ = "selectionInfo";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.SELECTION_INFO", D.$DvtNBoxConstants$$.$SELECTION_INFO$);
D.$DvtNBoxConstants$$.$HAS_SELECTION_LISTENER$ = "hasSelectionListener";
D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$ = "highlightedCategories";
D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$ = "highlightMatch";
D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$ = "hiddenCategories";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.HIDDEN_CATEGORIES", D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$);
D.$DvtNBoxConstants$$.$HOVER_BEHAVIOR$ = "hoverBehavior";
D.$DvtNBoxConstants$$.$GROUP_CATEGORY$ = "groupCategory";
D.$DvtNBoxConstants$$.$GROUP_ATTRIBUTES$ = "groupAttributes";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$ = "groupBehavior";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ = "withinCell";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ = "acrossCells";
D.$DvtNBoxConstants$$.$OTHER_COLOR$ = "otherColor";
D.$DvtNBoxConstants$$.$OTHER_THRESHOLD$ = "otherThreshold";
D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$ = "animationOnDataChange";
D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$ = "animationOnDisplay";
D.$DvtNBoxConstants$$.$ANIMATION_DURATION$ = "animationDuration";
D.$DvtNBoxConstants$$.$DRAWER$ = "_drawer";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.DRAWER", D.$DvtNBoxConstants$$.$DRAWER$);
D.$DvtNBoxConstants$$.$LEGEND$ = "_legend";
D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$ = "legendDisclosure";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.LEGEND_DISCLOSURE", D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$);
D.$DvtNBoxConstants$$.ID = "id";
D.$DvtNBoxConstants$$.$LABEL$ = "label";
D.$DvtNBoxConstants$$.$LABEL_STYLE$ = "labelStyle";
D.$DvtNBoxConstants$$.$LABEL_HALIGN$ = "labelHalign";
D.$DvtNBoxConstants$$.$SECONDARY_LABEL$ = "secondaryLabel";
D.$DvtNBoxConstants$$.$SECONDARY_LABEL_STYLE$ = "secondaryLabelStyle";
D.$DvtNBoxConstants$$.$SHORT_DESC$ = "shortDesc";
D.$DvtNBoxConstants$$.$SHOW_COUNT$ = "showCount";
D.$DvtNBoxConstants$$.$STYLE$ = "style";
D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$ = "styleDefaults";
D.$DvtNBoxConstants$$.$BORDER_COLOR$ = "borderColor";
D.$DvtNBoxConstants$$.$BORDER_RADIUS$ = "borderRadius";
D.$DvtNBoxConstants$$.$BORDER_WIDTH$ = "borderWidth";
D.$DvtNBoxConstants$$.$COLOR$ = "color";
D.$DvtNBoxConstants$$.$PATTERN$ = "pattern";
D.$DvtNBoxConstants$$.$OPACITY$ = "opacity";
D.$DvtNBoxConstants$$.$SHAPE$ = "shape";
D.$DvtNBoxConstants$$.$SOURCE$ = "source";
D.$DvtNBoxConstants$$.$HEIGHT$ = "height";
D.$DvtNBoxConstants$$.$WIDTH$ = "width";
(0,D.$DvtBundle$addDefaultStrings$$)("DvtNBoxBundle", {HIGHLIGHTED_COUNT:"{0}/{1}", COMMA_SEP_LIST:"{0}, {1}", OTHER:"Other", LEGEND:"Legend", GROUP_NODE:"Group", ADDITIONAL_DATA:"Additional Data", SIZE:"Size"});
D.$DvtNBoxDefaults$$ = function $$DvtNBoxDefaults$$$() {
  this.Init({skyros:D.$DvtNBoxDefaults$VERSION_1$$, alta:D.$DvtNBoxDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtNBoxDefaults");
D.$DvtNBoxDefaults$VERSION_1$$ = {skin:"alta", selectionMode:"multiple", animationOnDataChange:"none", animationOnDisplay:"none", cellMaximize:"on", cellContent:"auto", legendDisplay:"auto", legendDisclosure:"disclosed", groupBehavior:"withinCell", otherColor:"#636363", otherThreshold:0, hoverBehavior:"none", highlightMatch:"all", highlightedCategories:[], styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, columnLabelStyle:new D.$DvtCSSStyle$$('font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), 
rowLabelStyle:new D.$DvtCSSStyle$$('font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), columnsTitleStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), rowsTitleStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), cellDefaults:{style:new D.$DvtCSSStyle$$("background-color:#e5e5e5"), minimizedStyle:new D.$DvtCSSStyle$$("background-color:#f0f0f0"), 
labelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), countLabelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), bodyCountLabelStyle:new D.$DvtCSSStyle$$('color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), dropTargetStyle:new D.$DvtCSSStyle$$("background-color:rgba(217, 244, 250, .75);border-color:#ccf6ff"), 
showCount:"off", showMaximize:"on"}, __scrollbar:{scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333"}, __drawerDefaults:{background:"#e5e5e5", borderColor:"#c4ced7", borderRadius:1, headerBackground:"linear-gradient(to bottom, #f5f5f5 0%, #f0f0f0 100%)", labelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), 
countLabelStyle:new D.$DvtCSSStyle$$('font-size: 14px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), countBorderRadius:1}, nodeDefaults:{color:"#FFFFFF", labelStyle:new D.$DvtCSSStyle$$('font-size: 12px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), secondaryLabelStyle:new D.$DvtCSSStyle$$('font-size: 11px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), alphaFade:0.2, borderRadius:1, hoverColor:"#FFFFFF", selectionColor:"#000000", iconDefaults:{preferredSize:19, 
preferredSizeTouch:34, shapePaddingRatio:0.15, sourcePaddingRatio:0, opacity:1, pattern:"none", borderWidth:1, borderRadius:0, shape:"circle"}, indicatorIconDefaults:{width:10, height:10, opacity:1, pattern:"none", borderWidth:1, borderRadius:0, shape:"circle"}}, __legendDefaults:{sectionStyle:'font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; font-weight:bold', itemStyle:'font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif', 
markerColor:"#808080"}, __categoryNodeDefaults:{labelStyle:new D.$DvtCSSStyle$$('font-family:"Helvetica Neue", Helvetica, Arial, sans-serif')}}, __layout:{componentGap:8, titleGap:4, titleComponentGap:4, nodeLabelOnlyStartLabelGap:5, nodeStartLabelGap:3, nodeEndLabelGap:5, nodeSingleLabelGap:2, nodeDualLabelGap:2, nodeInterLabelGap:0, nodeIndicatorGap:3, nodeSwatchSize:10, categoryNodeLabelGap:5, minimumCellSize:34, cellGap:3, gridGap:6, cellStartGap:6, cellEndGap:6, cellTopGap:6, cellBottomGap:6, 
cellLabelGap:6, countLabelGap:10, markerGap:3, minimumLabelWidth:55, maximumLabelWidth:148, drawerButtonGap:10, drawerCountHorizontalGap:5, drawerCountVerticalGap:3, drawerStartGap:10, drawerLabelGap:7, drawerHeaderHeight:31, legendBottomGap:10}};
D.$DvtNBoxDefaults$SKIN_ALTA$$ = {};
D.$DvtNBoxCell$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCell$$, D.$DvtContainer$$, "DvtNBoxCell");
D.$DvtNBoxCell$$.newInstance = function $$DvtNBoxCell$$$newInstance$($nbox$$3$$, $data$$84$$) {
  var $component$$21$$ = new D.$DvtNBoxCell$$;
  $component$$21$$.Init($nbox$$3$$, $data$$84$$);
  return $component$$21$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCell$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$4$$, $data$$85$$) {
  var $r$$55$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$4$$, $data$$85$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$36$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$4$$, $data$$85$$[D.$DvtNBoxConstants$$.$COLUMN$]);
  D.$DvtNBoxCell$$.$superclass$.Init.call(this, $nbox$$4$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, "c:" + $r$$55$$ + "," + $c$$36$$);
  this.$_nbox$ = $nbox$$4$$;
  this.$_data$ = $data$$85$$;
  this.$_scrollContainer$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$144$$, $cellLayout$$, $cellCounts$$1$$, $availSpace$$95$$) {
  this.$_cellCounts$ = $cellCounts$$1$$;
  $container$$144$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  D.$DvtNBoxCellRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $cellLayout$$, $cellCounts$$1$$, $availSpace$$95$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$setChildContainer$ = (0,D.$JSCompiler_set$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$11$$, $oldCell$$) {
  D.$DvtNBoxCellRenderer$$.$animateUpdate$($animationHandler$$11$$, $oldCell$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$12$$) {
  D.$DvtNBoxCellRenderer$$.$animateDelete$($animationHandler$$12$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$13$$) {
  D.$DvtNBoxCellRenderer$$.$animateInsert$($animationHandler$$13$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$)
};
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  if(this.$isDoubleClickable$()) {
    var $maximizedRow_oldFocus$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $options$$198$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$), $event$$568$$ = new D.$DvtSetPropertyEvent$$, $drawer$$5$$ = $options$$198$$[D.$DvtNBoxConstants$$.$DRAWER$];
    $options$$198$$[D.$DvtNBoxConstants$$.$DRAWER$] = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$568$$, D.$DvtNBoxConstants$$.$DRAWER$, D.$JSCompiler_alias_NULL$$);
    !$drawer$$5$$ && $maximizedRow_oldFocus$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? ($options$$198$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$568$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$, D.$JSCompiler_alias_NULL$$), $options$$198$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$568$$, 
    D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$, D.$JSCompiler_alias_NULL$$)) : ($options$$198$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = this.$_data$[D.$DvtNBoxConstants$$.$ROW$], (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$568$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$, this.$_data$[D.$DvtNBoxConstants$$.$ROW$]), $options$$198$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$], (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$568$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$, 
    this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$]));
    var $otherCell$$;
    ($maximizedRow_oldFocus$$ = this.$_nbox$.$EventManager$.$getFocus$()) ? $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxNode$$ ? $otherCell$$ = this.$getCellIndex$() != D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $maximizedRow_oldFocus$$.getData()) : $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxNodeOverflow$$ ? $otherCell$$ = this != $maximizedRow_oldFocus$$.$_cell$ : $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxCell$$ ? $otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.$getCellIndex$() : 
    $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxCategoryNode$$ && ($otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.getData().cell) : (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_nbox$.$EventManager$, this);
    $otherCell$$ && ((0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_nbox$.$EventManager$, this), this.$_nbox$.$EventManager$.$setFocused$(D.$JSCompiler_alias_FALSE$$));
    this.$_nbox$.$processEvent$($event$$568$$);
    this.$_nbox$.$render$($options$$198$$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$238$$, $y$$212$$) {
  var $background$$9_maxY$$16$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background"), $minX$$17$$ = this.$getTranslateX$() + $background$$9_maxY$$16$$.$getX$(), $minY$$19$$ = this.$getTranslateY$() + $background$$9_maxY$$16$$.$getY$(), $maxX$$14$$ = $minX$$17$$ + $background$$9_maxY$$16$$.getWidth(), $background$$9_maxY$$16$$ = $minY$$19$$ + $background$$9_maxY$$16$$.getHeight();
  return $minX$$17$$ <= $x$$238$$ && $x$$238$$ <= $maxX$$14$$ && $minY$$19$$ <= $y$$212$$ && $y$$212$$ <= $background$$9_maxY$$16$$
};
D.$JSCompiler_prototypeAlias$$.$renderDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$renderDropSiteFeedback$$() {
  return D.$DvtNBoxCellRenderer$$.$renderDropSiteFeedback$(this.$_nbox$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$569$$) {
  var $isCellMaximized_maximizedRow$$1$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$1$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized_maximizedRow$$1$$ = $isCellMaximized_maximizedRow$$1$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$1$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  (!$isCellMaximized_maximizedRow$$1$$ && 13 == $event$$569$$.keyCode || $isCellMaximized_maximizedRow$$1$$ && 27 == $event$$569$$.keyCode) && this.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $cellIndex$$2$$ = this.$getCellIndex$(), $states$$12$$ = [];
  D.$DvtNBoxDataUtils$$.$isCellMaximized$(this.$_nbox$, $cellIndex$$2$$) ? $states$$12$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_MAXIMIZED")) : D.$DvtNBoxDataUtils$$.$isCellMinimized$(this.$_nbox$, $cellIndex$$2$$) && $states$$12$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_MINIMIZED"));
  $states$$12$$.push([(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), this.$getNodeCount$()]);
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().shortDesc, $states$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$235_event$$570$$) {
  var $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($JSCompiler_temp$$235_event$$570$$)) {
    if(219 == $JSCompiler_temp$$235_event$$570$$.keyCode) {
      var $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = D.$JSCompiler_alias_NULL$$, $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $cellCount$$inline_7431_maximizedColumn$$inline_7421_nodes$$inline_7424$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
      if($drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$ && $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ == this.getData()[D.$DvtNBoxConstants$$.$ROW$] && $cellCount$$inline_7431_maximizedColumn$$inline_7421_nodes$$inline_7424$$ == this.getData()[D.$DvtNBoxConstants$$.$COLUMN$]) {
        $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$)
      }else {
        if($cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = this.$getChildContainer$(), $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.$getScrollingPane$ && ($cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.$_container$), 0 < $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.$getNumChildren$() && 
        ($cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.$getChildAt$(0) instanceof D.$DvtNBoxNode$$ || $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.$getChildAt$(0) instanceof D.$DvtNBoxNodeOverflow$$)) {
          $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$)
        }else {
          $cellCount$$inline_7431_maximizedColumn$$inline_7421_nodes$$inline_7424$$ = [];
          for($drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$ = 0;$drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$ < $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.$getNumChildren$();$drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$++) {
            var $child$$inline_7426$$ = $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.$getChildAt$($drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$);
            $child$$inline_7426$$ instanceof D.$DvtNBoxCategoryNode$$ && $cellCount$$inline_7431_maximizedColumn$$inline_7421_nodes$$inline_7424$$.push($child$$inline_7426$$)
          }
          $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$235_event$$570$$, $cellCount$$inline_7431_maximizedColumn$$inline_7421_nodes$$inline_7424$$)
        }
      }
      $JSCompiler_temp$$235_event$$570$$ = $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$
    }else {
      $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = [];
      $cellCount$$inline_7431_maximizedColumn$$inline_7421_nodes$$inline_7424$$ = D.$DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) * D.$DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$);
      for($drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$ = 0;$drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$ < $cellCount$$inline_7431_maximizedColumn$$inline_7421_nodes$$inline_7424$$;$drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$++) {
        $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $drawerData$$inline_7422_i$$inline_7425_i$$inline_7432$$)))
      }
      $JSCompiler_temp$$235_event$$570$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $JSCompiler_temp$$235_event$$570$$, $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$)
    }
    $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$ = $JSCompiler_temp$$235_event$$570$$
  }
  return $cells$$inline_7430_childObj$$inline_7419_container$$inline_7423_maximizedRow$$inline_7420_next$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getCellIndex$ = function $$JSCompiler_prototypeAlias$$$$getCellIndex$$() {
  return D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.$ROW$], this.getData()[D.$DvtNBoxConstants$$.$COLUMN$])
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  var $label$$62$$ = this.getData()[D.$DvtNBoxConstants$$.$LABEL$];
  return $label$$62$$ ? $label$$62$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getNodeCount$ = function $$JSCompiler_prototypeAlias$$$$getNodeCount$$() {
  this.$_cellCounts$ || (this.$_cellCounts$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$(this.$_nbox$));
  var $index$$221$$ = this.$getCellIndex$();
  return this.$_cellCounts$.total[$index$$221$$]
};
D.$JSCompiler_prototypeAlias$$.$getNode$ = function $$JSCompiler_prototypeAlias$$$$getNode$$($index$$222$$) {
  var $nodes$$14$$ = this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$];
  if($nodes$$14$$) {
    for(var $nodeIndex$$10$$ = 0, $idx$$33$$ = 0;$idx$$33$$ < $nodes$$14$$.length;$idx$$33$$++) {
      if(this.getData()[D.$DvtNBoxConstants$$.$ROW$] == $nodes$$14$$[$idx$$33$$][D.$DvtNBoxConstants$$.$ROW$] && this.getData()[D.$DvtNBoxConstants$$.$COLUMN$] == $nodes$$14$$[$idx$$33$$][D.$DvtNBoxConstants$$.$COLUMN$] && !D.$DvtNBoxDataUtils$$.$isNodeHidden$(this.$_nbox$, $nodes$$14$$[$idx$$33$$])) {
        if($index$$222$$ == $nodeIndex$$10$$) {
          return $nodes$$14$$[$idx$$33$$]
        }
        $nodeIndex$$10$$++
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  return D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) != D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ || !this.$_nbox$.$getOptions$().__groups ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.getData()))) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNode$$, D.$DvtContainer$$, "DvtNBoxNode");
D.$DvtNBoxNode$$.newInstance = function $$DvtNBoxNode$$$newInstance$($nbox$$10$$, $data$$89$$) {
  var $component$$23$$ = new D.$DvtNBoxNode$$;
  $component$$23$$.Init($nbox$$10$$, $data$$89$$);
  return $component$$23$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$11$$, $data$$90$$) {
  D.$DvtNBoxNode$$.$superclass$.Init.call(this, $nbox$$11$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, $data$$90$$[D.$DvtNBoxConstants$$.ID]);
  this.$_nbox$ = $nbox$$11$$;
  this.$_data$ = $data$$90$$;
  this.$_nbox$.$registerObject$(this);
  var $selectionMode$$11$$ = this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$];
  ("single" == $selectionMode$$11$$ || "multiple" == $selectionMode$$11$$ || this.$getAction$()) && this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$150$$, $nodeLayout$$) {
  D.$DvtNBoxNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $nodeLayout$$);
  $container$$150$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$37$$) {
  this.$getSelectionShape$().$setSelected$($selected$$37$$);
  this.$UpdateAccessibilityAttributes$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$setSelectionShape$ = (0,D.$JSCompiler_set$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getSelectionShape$ = (0,D.$JSCompiler_get$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$7$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$7$$) {
    var $dataContext$$5$$ = {id:this.$_data$.id, label:this.$_data$.label, secondaryLabel:this.$_data$.secondaryLabel, row:this.$_data$.row, column:this.$_data$.column, color:D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nbox$, this.$_data$)};
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_nbox$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$7$$, $dataContext$$5$$)
  }
  return this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$[D.$DvtNBoxConstants$$.$SHORT_DESC$]
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$)
};
D.$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$4$$) {
  this.$_maxAlpha$ = $maxAlpha$$4$$;
  this.$setAlpha$(this.$getAlpha$())
};
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$44$$) {
  D.$DvtNBoxNode$$.$superclass$.$setAlpha$.call(this, window.Math.min($alpha$$44$$, this.$_maxAlpha$))
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$17$$, $oldNode$$11$$) {
  D.$DvtNBoxNodeRenderer$$.$animateUpdate$($animationHandler$$17$$, $oldNode$$11$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$18$$) {
  D.$DvtNBoxNodeRenderer$$.$animateDelete$($animationHandler$$18$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$19$$) {
  D.$DvtNBoxNodeRenderer$$.$animateInsert$($animationHandler$$19$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  (0,D.$JSCompiler_StaticMethods__getParentContainer$$)(this).$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$) {
    this.$_showPopupBehaviors$ = [];
    var $spbs$$3$$ = this.$_data$.showPopupBehaviors;
    if($spbs$$3$$) {
      for(var $i$$726$$ = 0;$i$$726$$ < $spbs$$3$$.length;$i$$726$$++) {
        this.$_showPopupBehaviors$.push(new D.$DvtShowPopupBehavior$$($spbs$$3$$[$i$$726$$].popupId, $spbs$$3$$[$i$$726$$].triggerType, $spbs$$3$$[$i$$726$$].alignId, $spbs$$3$$[$i$$726$$].align))
      }
    }
  }
  return this.$_showPopupBehaviors$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$13_matrix$$17$$) {
  if($behavior$$13_matrix$$17$$ && $behavior$$13_matrix$$17$$.$getAlign$()) {
    $behavior$$13_matrix$$17$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$(this);
    var $background$$10$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background");
    return new D.$DvtRectangle$$($behavior$$13_matrix$$17$$.$_tx$ + $background$$10$$.$getX$(), $behavior$$13_matrix$$17$$.$_ty$ + $background$$10$$.$getY$(), $background$$10$$.getWidth(), $background$$10$$.getHeight())
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$13$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
D.$JSCompiler_StaticMethods__getParentContainer$$ = function $$JSCompiler_StaticMethods__getParentContainer$$$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$) {
  var $cellData$$6_cellIndex$$3_drawerData$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$);
  $cellData$$6_cellIndex$$3_drawerData$$3$$ || ($cellData$$6_cellIndex$$3_drawerData$$3$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$, $JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_data$), $cellData$$6_cellIndex$$3_drawerData$$3$$ = D.$DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$, $cellData$$6_cellIndex$$3_drawerData$$3$$));
  return $JSCompiler_StaticMethods__getParentContainer$self_container$$151$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$, $cellData$$6_cellIndex$$3_drawerData$$3$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$20$$ = this.$getAriaLabel$();
    $desc$$20$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$20$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] ? this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] : []
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  var $scrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$(this.$_nbox$, this);
  $scrollContainer$$ && $scrollContainer$$.scrollIntoView(this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$588$$) {
  var $next$$11$$ = D.$JSCompiler_alias_NULL$$;
  if(32 == $event$$588$$.keyCode && $event$$588$$.ctrlKey) {
    return this
  }
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$588$$) ? $next$$11$$ = 221 == $event$$588$$.keyCode ? (0,D.$JSCompiler_StaticMethods__getParentContainer$$)(this) : 219 == $event$$588$$.keyCode ? this : D.$DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$588$$) : $event$$588$$.type == D.$DvtMouseEvent$CLICK$$ && ($next$$11$$ = this);
  return $next$$11$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$589$$) {
  if(D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$) && 27 == $event$$589$$.keyCode) {
    this.$handleDoubleClick$()
  }else {
    var $isCellMaximized$$1_maximizedRow$$3$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$3$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized$$1_maximizedRow$$3$$ = $isCellMaximized$$1_maximizedRow$$3$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$3$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
    (!$isCellMaximized$$1_maximizedRow$$3$$ && 13 == $event$$589$$.keyCode || $isCellMaximized$$1_maximizedRow$$3$$ && 27 == $event$$589$$.keyCode) && this.$handleDoubleClick$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $cell$$38_cellData$$7_node$$254$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.ID]));
  if($cell$$38_cellData$$7_node$$254$$) {
    var $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$38_cellData$$7_node$$254$$);
    if($ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$) {
      return $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$
    }
    $cell$$38_cellData$$7_node$$254$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $cell$$38_cellData$$7_node$$254$$));
    $cell$$38_cellData$$7_node$$254$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$38_cellData$$7_node$$254$$);
    $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ = D.$DvtNBoxDataUtils$$.$getLastNavigableNode$(this.$_nbox$, $cell$$38_cellData$$7_node$$254$$.$getChildContainer$());
    if($ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ instanceof D.$DvtNBoxNodeOverflow$$) {
      return $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$
    }
    a: {
      for($ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ = this;$ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ && $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$.getParent;) {
        if($ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ = $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$.getParent(), $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ instanceof D.$DvtNBoxDrawer$$) {
          break a
        }
      }
      $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ = D.$JSCompiler_alias_NULL$$
    }
    return $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$ ? $ancestor$$inline_7435_displayable$$67_drawer$$6_lastNode$$1$$.$getKeyboardFocusDisplayable$() : $cell$$38_cellData$$7_node$$254$$.$getKeyboardFocusDisplayable$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxNodeOverflow$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNodeOverflow$$, D.$DvtContainer$$, "DvtNBoxNodeOverflow");
D.$DvtNBoxNodeOverflow$$.newInstance = function $$DvtNBoxNodeOverflow$$$newInstance$($nbox$$12$$, $cell$$39$$) {
  var $component$$24$$ = new D.$DvtNBoxNodeOverflow$$;
  $component$$24$$.Init($nbox$$12$$, $cell$$39$$);
  return $component$$24$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNodeOverflow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$13$$, $cell$$40$$) {
  D.$DvtNBoxNodeOverflow$$.$superclass$.Init.call(this, $nbox$$13$$.$getCtx$());
  this.$_nbox$ = $nbox$$13$$;
  this.$_cell$ = $cell$$40$$;
  this.$_button$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$152$$, $keyboardFocusEffect_width$$118$$, $height$$110$$) {
  var $options$$202$$ = this.$_nbox$.$getOptions$(), $w$$57$$ = $options$$202$$._resources.overflow_ena.width, $h$$52$$ = $options$$202$$._resources.overflow_ena.height, $scale$$56_x$$240$$ = 1;
  if($keyboardFocusEffect_width$$118$$ < $w$$57$$ || $height$$110$$ < $h$$52$$) {
    $scale$$56_x$$240$$ = window.Math.min($keyboardFocusEffect_width$$118$$ / $w$$57$$, $height$$110$$ / $h$$52$$)
  }
  var $w$$57$$ = $scale$$56_x$$240$$ * $w$$57$$, $h$$52$$ = $scale$$56_x$$240$$ * $h$$52$$, $scale$$56_x$$240$$ = ($keyboardFocusEffect_width$$118$$ - $w$$57$$) / 2, $y$$214$$ = ($height$$110$$ - $h$$52$$) / 2, $ctx$$4$$ = this.$_nbox$.$getCtx$(), $upRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$118$$, $height$$110$$), $overRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$118$$, $height$$110$$), $downRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$118$$, 
  $height$$110$$), $disRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$118$$, $height$$110$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($disRect$$);
  var $upState$$18$$ = new D.$DvtContainer$$($ctx$$4$$), $overState$$15$$ = new D.$DvtContainer$$($ctx$$4$$), $downState$$15$$ = new D.$DvtContainer$$($ctx$$4$$), $disState$$ = new D.$DvtContainer$$($ctx$$4$$);
  $upState$$18$$.$addChild$($upRect$$);
  $overState$$15$$.$addChild$($overRect$$);
  $downState$$15$$.$addChild$($downRect$$);
  $disState$$.$addChild$($disRect$$);
  $upState$$18$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$202$$._resources.overflow_ena.src, $scale$$56_x$$240$$, $y$$214$$, $w$$57$$, $h$$52$$));
  $overState$$15$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$202$$._resources.overflow_ovr.src, $scale$$56_x$$240$$, $y$$214$$, $w$$57$$, $h$$52$$));
  $downState$$15$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$202$$._resources.overflow_dwn.src, $scale$$56_x$$240$$, $y$$214$$, $w$$57$$, $h$$52$$));
  $disState$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$202$$._resources.overflow_dis.src, $scale$$56_x$$240$$, $y$$214$$, $w$$57$$, $h$$52$$));
  this.$_button$ = new D.$DvtButton$$($ctx$$4$$, $upState$$18$$, $overState$$15$$, $downState$$15$$, $disState$$, D.$JSCompiler_alias_NULL$$, this.$HandleClick$, this);
  D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$) || (this.$_button$.$setEnabled$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)(this.$_button$));
  this.$addChild$(this.$_button$);
  $keyboardFocusEffect_width$$118$$ = new D.$DvtKeyboardFocusEffect$$(this.$_nbox$.$getCtx$(), this, new D.$DvtRectangle$$(-1, -1, $keyboardFocusEffect_width$$118$$ + 2, $height$$110$$ + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this, $keyboardFocusEffect_width$$118$$, "focusEffect");
  $container$$152$$.$addChild$(this);
  this.$_addAccessibilityAttributes$();
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$590$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$590$$);
  this.$_cell$.$handleDoubleClick$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$591$$) {
  13 == $event$$591$$.keyCode && this.$_cell$.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$_addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$_addAccessibilityAttributes$$() {
  this.$setAriaRole$("button");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$21$$ = this.$getAriaLabel$();
    $desc$$21$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$21$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "ADDITIONAL_DATA")
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return this.$getDatatip$()
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$592$$) {
  var $next$$12$$ = D.$JSCompiler_alias_NULL$$;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$592$$) && ($next$$12$$ = 221 == $event$$592$$.keyCode ? this.$_cell$ : D.$DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$592$$));
  return $next$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $newNode$$8$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.__prev[D.$DvtNBoxConstants$$.ID])).__next;
  return D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $newNode$$8$$)
};
D.$DvtNBoxCategoryNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryNode$$, D.$DvtContainer$$, "DvtNBoxCategoryNode");
D.$DvtNBoxCategoryNode$$.newInstance = function $$DvtNBoxCategoryNode$$$newInstance$($nbox$$1$$, $data$$82$$) {
  var $component$$20$$ = new D.$DvtNBoxCategoryNode$$;
  $component$$20$$.Init($nbox$$1$$, $data$$82$$);
  return $component$$20$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCategoryNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$2$$, $data$$83$$) {
  D.$DvtNBoxCategoryNode$$.$superclass$.Init.call(this, $nbox$$2$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, (0,window.isNaN)($data$$83$$[D.$DvtNBoxConstants$$.$CELL$]) ? $data$$83$$[D.$DvtNBoxConstants$$.ID] : $data$$83$$[D.$DvtNBoxConstants$$.$CELL$] + ":" + $data$$83$$[D.$DvtNBoxConstants$$.ID]);
  this.$_nbox$ = $nbox$$2$$;
  this.$_data$ = $data$$83$$;
  this.$_nbox$.$registerObject$(this);
  "multiple" == this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$] && this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$142$$, $scale$$55$$, $gap$$21$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $scale$$55$$, $gap$$21$$);
  $container$$142$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"multiple" == this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$]
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$35$$) {
  this.$getSelectionShape$().$setSelected$($selected$$35$$);
  this.$UpdateAccessibilityAttributes$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$setSelectionShape$ = (0,D.$JSCompiler_set$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getSelectionShape$ = (0,D.$JSCompiler_get$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  for(var $labels$$19$$ = D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$);1 < $labels$$19$$.length;) {
    var $joined$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "COMMA_SEP_LIST", [$labels$$19$$[0], $labels$$19$$[1]]);
    $labels$$19$$.splice(0, 2, $joined$$)
  }
  return $labels$$19$$[0]
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$6$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$6$$) {
    var $dataContext$$4$$ = {id:this.$_data$.id, color:D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nbox$, this.$_data$), size:this.$_data$.nodeIndices.length};
    "withinCell" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) && ($dataContext$$4$$.row = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).row, $dataContext$$4$$.column = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).column);
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_nbox$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$6$$, $dataContext$$4$$)
  }
  return this.$getShortDesc$() + "\n" + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), this.$_data$.nodeIndices.length])
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$).join("\n")
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$)
};
D.$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$3$$) {
  this.$_maxAlpha$ = $maxAlpha$$3$$;
  this.$setAlpha$(this.$getAlpha$())
};
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$43$$) {
  D.$DvtNBoxCategoryNode$$.$superclass$.$setAlpha$.call(this, window.Math.min($alpha$$43$$, this.$_maxAlpha$))
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  var $options$$197$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$);
  $options$$197$$[D.$DvtNBoxConstants$$.$DRAWER$] = {id:this.getId()};
  var $event$$563$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$563$$, D.$DvtNBoxConstants$$.$DRAWER$, this.getId());
  this.$_nbox$.$processEvent$($event$$563$$);
  this.$_nbox$.$render$($options$$197$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$8$$, $oldNode$$10$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateUpdate$($animationHandler$$8$$, $oldNode$$10$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$9$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateDelete$($animationHandler$$9$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$10$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateInsert$($animationHandler$$10$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$11$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$564$$) {
  if(13 == $event$$564$$.keyCode) {
    this.$handleDoubleClick$()
  }else {
    if(27 == $event$$564$$.keyCode && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      var $cellData$$4$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.$cell$);
      D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$4$$).$HandleKeyboardEvent$($event$$564$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$18$$ = this.$getAriaLabel$();
    $desc$$18$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$18$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  var $categories$$20$$ = this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$];
  if(!$categories$$20$$) {
    for(var $intersect$$ = function $$intersect$$$($categories$$20$$, $intersect$$) {
      return $categories$$20$$.filter(function($categories$$20$$) {
        return-1 < $intersect$$.indexOf($categories$$20$$)
      })
    }, $indices$$11$$ = this.getData().nodeIndices, $categories$$20$$ = D.$JSCompiler_alias_NULL$$, $i$$721$$ = 0;$i$$721$$ < $indices$$11$$.length;$i$$721$$++) {
      var $nodeCategories$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $indices$$11$$[$i$$721$$])[D.$DvtNBoxConstants$$.$CATEGORIES$];
      if(!$nodeCategories$$) {
        $categories$$20$$ = [];
        break
      }
      $categories$$20$$ = $categories$$20$$ == D.$JSCompiler_alias_NULL$$ ? $nodeCategories$$ : $intersect$$($categories$$20$$, $nodeCategories$$)
    }
    this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] = $categories$$20$$
  }
  return $categories$$20$$
};
D.$DvtNBoxCategoryNode$$.$compareSize$ = function $$DvtNBoxCategoryNode$$$$compareSize$$($a$$69$$, $b$$49$$) {
  var $alength$$ = $a$$69$$.nodeIndices.length, $blength$$ = $b$$49$$.nodeIndices.length;
  return $alength$$ == $blength$$ ? 0 : $alength$$ < $blength$$ ? 1 : -1
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCategoryNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
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
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($cellData$$5_event$$565$$) {
  var $groups$$5_next$$6_nodes$$12$$ = D.$JSCompiler_alias_NULL$$;
  if(32 == $cellData$$5_event$$565$$.keyCode && $cellData$$5_event$$565$$.ctrlKey) {
    return this
  }
  if(221 == $cellData$$5_event$$565$$.keyCode && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    $cellData$$5_event$$565$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.$CELL$]), $groups$$5_next$$6_nodes$$12$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$5_event$$565$$)
  }else {
    if(221 == $cellData$$5_event$$565$$.keyCode || 219 == $cellData$$5_event$$565$$.keyCode) {
      $groups$$5_next$$6_nodes$$12$$ = this
    }else {
      if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($cellData$$5_event$$565$$)) {
        if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
          var $groups$$5_next$$6_nodes$$12$$ = this.$_nbox$.$getOptions$().__groups, $groupNodes_i$$722$$ = [], $container$$143_id$$227$$;
          for($container$$143_id$$227$$ in $groups$$5_next$$6_nodes$$12$$) {
            var $displayable$$64$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groups$$5_next$$6_nodes$$12$$[$container$$143_id$$227$$]);
            $displayable$$64$$ && $groupNodes_i$$722$$.push($displayable$$64$$)
          }
          $groups$$5_next$$6_nodes$$12$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(this, $cellData$$5_event$$565$$, $groupNodes_i$$722$$)
        }else {
          $container$$143_id$$227$$ = this.getParent();
          $groups$$5_next$$6_nodes$$12$$ = [];
          for($groupNodes_i$$722$$ = 0;$groupNodes_i$$722$$ < $container$$143_id$$227$$.$getNumChildren$();$groupNodes_i$$722$$++) {
            $container$$143_id$$227$$.$getChildAt$($groupNodes_i$$722$$) instanceof D.$DvtNBoxCategoryNode$$ && $groups$$5_next$$6_nodes$$12$$.push($container$$143_id$$227$$.$getChildAt$($groupNodes_i$$722$$))
          }
          $groups$$5_next$$6_nodes$$12$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(this, $cellData$$5_event$$565$$, $groups$$5_next$$6_nodes$$12$$)
        }
      }else {
        $cellData$$5_event$$565$$.type == D.$DvtMouseEvent$CLICK$$ && ($groups$$5_next$$6_nodes$$12$$ = this)
      }
    }
  }
  return $groups$$5_next$$6_nodes$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $drawerData_groupNodeData$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
  return $drawerData_groupNodeData$$ || D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nbox$) && ($drawerData_groupNodeData$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getId())) ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData_groupNodeData$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxCategoryRolloverHandler$$ = function $$DvtNBoxCategoryRolloverHandler$$$($callback$$125$$, $callbackObj$$78$$) {
  D.$DvtNBoxCategoryRolloverHandler$$.$superclass$.constructor.call(this, $callback$$125$$, $callbackObj$$78$$);
  this.$_nbox$ = $callbackObj$$78$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryRolloverHandler$$, D.$DvtCategoryRolloverHandler$$, "DvtNBoxCategoryRolloverHandler");
D.$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloverCallback$$($event$$566$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    this.$_bHighlightMode$ = D.$JSCompiler_alias_TRUE$$;
    this.$_nbox$.$processEvent$($event$$566$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$566$$, this.$_source$)
  })
};
D.$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloutCallback$$($event$$567$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    (0,D.$JSCompiler_StaticMethods_SetHighlightModeTimeout$$)(this);
    this.$_nbox$.$processEvent$($event$$567$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$567$$, this.$_source$)
  })
};
D.$DvtNBoxDrawer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDrawer$$, D.$DvtContainer$$, "DvtNBoxDrawer");
D.$DvtNBoxDrawer$$.newInstance = function $$DvtNBoxDrawer$$$newInstance$($nbox$$5$$, $data$$86$$) {
  var $component$$22$$ = new D.$DvtNBoxDrawer$$;
  $component$$22$$.Init($nbox$$5$$, $data$$86$$);
  return $component$$22$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$6$$, $data$$87$$) {
  D.$DvtNBoxDrawer$$.$superclass$.Init.call(this, $nbox$$6$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, $data$$87$$.id + "_d");
  this.$_nbox$ = $nbox$$6$$;
  this.$_data$ = $data$$87$$;
  this.$_nbox$.$registerObject$(this)
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$147$$, $availSpace$$96$$) {
  $container$$147$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  D.$DvtNBoxDrawerRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $availSpace$$96$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$setChildContainer$ = (0,D.$JSCompiler_set$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  this.$closeDrawer$()
};
D.$JSCompiler_prototypeAlias$$.$closeDrawer$ = function $$JSCompiler_prototypeAlias$$$$closeDrawer$$() {
  var $options$$200$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$);
  $options$$200$$[D.$DvtNBoxConstants$$.$DRAWER$] = D.$JSCompiler_alias_NULL$$;
  var $event$$573$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$573$$, D.$DvtNBoxConstants$$.$DRAWER$, D.$JSCompiler_alias_NULL$$);
  this.$_nbox$.$processEvent$($event$$573$$);
  this.$_nbox$.$render$($options$$200$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$14$$, $oldDrawer$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateUpdate$($animationHandler$$14$$, $oldDrawer$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$15$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateDelete$($animationHandler$$15$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$16$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateInsert$($animationHandler$$16$$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$574$$) {
  27 == $event$$574$$.keyCode && this.$closeDrawer$()
};
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$19$$ = this.$getAriaLabel$();
    $desc$$19$$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "background") : this).$setAriaProperty$("label", $desc$$19$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $categoryNode$$4$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData().id)), $selected$$36$$ = D.$DvtNBoxDataUtils$$.$isDrawerSelected$(this.$_nbox$, $categoryNode$$4$$);
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, $categoryNode$$4$$.$getShortDesc$(), $selected$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($container$$149_event$$575_maximizedCellIndex$$) {
  var $next$$8$$ = D.$JSCompiler_alias_NULL$$;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($container$$149_event$$575_maximizedCellIndex$$) && (219 == $container$$149_event$$575_maximizedCellIndex$$.keyCode ? ($container$$149_event$$575_maximizedCellIndex$$ = this.$getChildContainer$(), $container$$149_event$$575_maximizedCellIndex$$.$getScrollingPane$ && ($container$$149_event$$575_maximizedCellIndex$$ = $container$$149_event$$575_maximizedCellIndex$$.$_container$), $next$$8$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, 
  $container$$149_event$$575_maximizedCellIndex$$)) : 221 == $container$$149_event$$575_maximizedCellIndex$$.keyCode && ($container$$149_event$$575_maximizedCellIndex$$ = D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$), $next$$8$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $container$$149_event$$575_maximizedCellIndex$$))));
  return $next$$8$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  if(this.$_nbox$.$getOptions$()._drawer) {
    return this
  }
  var $groupNodeData$$1$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.ID]);
  return $groupNodeData$$1$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groupNodeData$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataAnimationHandler$$ = function $$DvtNBoxDataAnimationHandler$$$($context$$453$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$) {
  this.Init($context$$453$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDataAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtNBoxDataAnimationHandler");
D.$DvtNBoxDataAnimationHandler$$.prototype.Init = function $$DvtNBoxDataAnimationHandler$$$$Init$($context$$454$$, $deleteContainer$$10$$, $oldNBox$$3$$, $newNBox$$1$$) {
  D.$DvtNBoxDataAnimationHandler$$.$superclass$.Init.call(this, $context$$454$$, $deleteContainer$$10$$);
  this.$_oldNBox$ = $oldNBox$$3$$;
  this.$_newNBox$ = $newNBox$$1$$
};
D.$DvtNBoxDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtNBoxDataAnimationHandler$$$$$getAnimationDuration$$() {
  return D.$DvtNBoxStyleUtils$$.$getAnimationDuration$(this.$_oldNBox$)
};
D.$DvtNBoxDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDropTarget$$, D.$DvtDropTarget$$, "DvtNBoxDropTarget");
D.$DvtNBoxDropTarget$$.prototype.$acceptDrag$ = function $$DvtNBoxDropTarget$$$$$acceptDrag$$($cell$$36_mouseX$$26$$, $mouseY$$26$$, $clientIds$$12$$) {
  if($cell$$36_mouseX$$26$$ = (0,D.$JSCompiler_StaticMethods___getCellUnderPoint$$)(this.$_view$, $cell$$36_mouseX$$26$$, $mouseY$$26$$)) {
    $cell$$36_mouseX$$26$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($cell$$36_mouseX$$26$$), this.$_dropSite$ = $cell$$36_mouseX$$26$$)
  }else {
    return this.$_view$.$__showDropSiteFeedback$(D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_NULL$$
  }
  return $clientIds$$12$$[0]
};
D.$DvtNBoxDropTarget$$.prototype.$getDropSite$ = function $$DvtNBoxDropTarget$$$$$getDropSite$$($mouseX$$27$$, $mouseY$$27$$) {
  var $cell$$37_data$$88$$ = (0,D.$JSCompiler_StaticMethods___getCellUnderPoint$$)(this.$_view$, $mouseX$$27$$, $mouseY$$27$$);
  return $cell$$37_data$$88$$ ? ($cell$$37_data$$88$$ = $cell$$37_data$$88$$.getData(), {$row$:$cell$$37_data$$88$$[D.$DvtNBoxConstants$$.$ROW$], $column$:$cell$$37_data$$88$$[D.$DvtNBoxConstants$$.$COLUMN$]}) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxEventManager$$ = function $$DvtNBoxEventManager$$$($nbox$$7$$) {
  this.Init($nbox$$7$$.$getCtx$(), $nbox$$7$$.$processEvent$, $nbox$$7$$);
  this.$_nbox$ = $nbox$$7$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxEventManager$$, D.$DvtEventManager$$, "DvtNBoxEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$576_obj$$303$$) {
  $event$$576_obj$$303$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$576_obj$$303$$.target);
  this.$_processActionEvent$($event$$576_obj$$303$$)
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$577$$) {
  (0,D.$JSCompiler_StaticMethods__handleDblClick$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$577$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$578$$) {
  (0,D.$JSCompiler_StaticMethods__handleDblClick$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$578$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$579_obj$$304$$) {
  $event$$579_obj$$304$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$579_obj$$304$$.target);
  this.$_processActionEvent$($event$$579_obj$$304$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$580_obj$$305$$) {
  $event$$580_obj$$305$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$580_obj$$305$$.target);
  this.$_processActionEvent$($event$$580_obj$$305$$)
};
D.$JSCompiler_StaticMethods__handleDblClick$$ = function $$JSCompiler_StaticMethods__handleDblClick$$$($JSCompiler_StaticMethods__handleDblClick$self$$, $displayable$$65$$) {
  var $logicalObject$$12$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods__handleDblClick$self$$, $displayable$$65$$);
  $logicalObject$$12$$ && ($logicalObject$$12$$.$isDoubleClickable$ && $logicalObject$$12$$.$isDoubleClickable$() && $logicalObject$$12$$.$handleDoubleClick$) && $logicalObject$$12$$.$handleDoubleClick$()
};
D.$DvtNBoxEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtNBoxEventManager$$$$$ProcessKeyboardEvent$$($event$$581$$) {
  var $eventConsumed$$3$$ = D.$JSCompiler_alias_FALSE$$, $keyCode$$38$$ = $event$$581$$.keyCode, $navigable$$16$$ = this.$getFocus$();
  if(13 == $keyCode$$38$$ || 27 == $keyCode$$38$$) {
    $navigable$$16$$ && $navigable$$16$$.$HandleKeyboardEvent$ && $navigable$$16$$.$HandleKeyboardEvent$($event$$581$$)
  }else {
    if(32 == $event$$581$$.keyCode && $event$$581$$.ctrlKey) {
      if($navigable$$16$$ instanceof D.$DvtNBoxCategoryNode$$ || $navigable$$16$$ instanceof D.$DvtNBoxNode$$) {
        $eventConsumed$$3$$ = D.$DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$581$$)
      }
    }else {
      $eventConsumed$$3$$ = D.$DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$581$$)
    }
  }
  return $eventConsumed$$3$$
};
D.$DvtNBoxEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtNBoxEventManager$$$$$ProcessRolloverEvent$$($event$$582$$, $categories$$21_hoverBehaviorDelay$$3_obj$$306$$, $bOver$$10_rolloverEvent$$4$$) {
  var $options$$201$$ = this.$_nbox$.$getOptions$();
  "dim" == $options$$201$$.hoverBehavior && ($categories$$21_hoverBehaviorDelay$$3_obj$$306$$ = $categories$$21_hoverBehaviorDelay$$3_obj$$306$$.$getCategories$ ? $categories$$21_hoverBehaviorDelay$$3_obj$$306$$.$getCategories$() : [], $options$$201$$.highlightedCategories = $bOver$$10_rolloverEvent$$4$$ ? $categories$$21_hoverBehaviorDelay$$3_obj$$306$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$10_rolloverEvent$$4$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$10_rolloverEvent$$4$$ ? "categoryRollOver" : 
  "categoryRollOut", $options$$201$$.highlightedCategories), $categories$$21_hoverBehaviorDelay$$3_obj$$306$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$201$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$10_rolloverEvent$$4$$, (0,D.$JSCompiler_StaticMethods_getNodeDisplayables$$)(this.$_nbox$), $categories$$21_hoverBehaviorDelay$$3_obj$$306$$, "any" == $options$$201$$.highlightMatch), $event$$582$$.stopPropagation())
};
D.$DvtNBoxEventManager$$.prototype.$CreateCategoryRolloverHandler$ = function $$DvtNBoxEventManager$$$$$CreateCategoryRolloverHandler$$($callback$$128$$, $callbackObj$$79$$) {
  return new D.$DvtNBoxCategoryRolloverHandler$$($callback$$128$$, $callbackObj$$79$$)
};
D.$DvtNBoxEventManager$$.prototype.$_processActionEvent$ = function $$DvtNBoxEventManager$$$$$_processActionEvent$$($obj$$307$$) {
  $obj$$307$$ && ($obj$$307$$.$getAction$ && $obj$$307$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$307$$.$getAction$(), $obj$$307$$.getId()))
};
D.$DvtNBoxKeyboardHandler$$ = function $$DvtNBoxKeyboardHandler$$$($manager$$20$$, $nbox$$8$$) {
  this.Init($manager$$20$$, $nbox$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtNBoxKeyboardHandler");
D.$DvtNBoxKeyboardHandler$$.prototype.Init = function $$DvtNBoxKeyboardHandler$$$$Init$($manager$$21$$, $nbox$$9$$) {
  D.$DvtNBoxKeyboardHandler$$.$superclass$.Init.call(this, $manager$$21$$);
  this.$_nbox$ = $nbox$$9$$
};
D.$DvtNBoxKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtNBoxKeyboardHandler$$$$$processKeyDown$$($event$$583_index$$223$$) {
  if(9 == $event$$583_index$$223$$.keyCode) {
    var $currentNavigable$$12_drawerData$$2_groups$$6$$ = this.$_eventManager$.$getFocus$(), $groupNodes$$1_next$$9$$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$DvtEventManager$consumeEvent$$)($event$$583_index$$223$$);
    if($currentNavigable$$12_drawerData$$2_groups$$6$$) {
      $groupNodes$$1_next$$9$$ = $currentNavigable$$12_drawerData$$2_groups$$6$$
    }else {
      if($currentNavigable$$12_drawerData$$2_groups$$6$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$)) {
        $groupNodes$$1_next$$9$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$12_drawerData$$2_groups$$6$$)
      }else {
        if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($currentNavigable$$12_drawerData$$2_groups$$6$$ = this.$_nbox$.$getOptions$().__groups)) {
          var $groupNodes$$1_next$$9$$ = [], $id$$228$$;
          for($id$$228$$ in $currentNavigable$$12_drawerData$$2_groups$$6$$) {
            var $displayable$$66$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$12_drawerData$$2_groups$$6$$[$id$$228$$]);
            $displayable$$66$$ && $groupNodes$$1_next$$9$$.push($displayable$$66$$)
          }
          $groupNodes$$1_next$$9$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(D.$JSCompiler_alias_NULL$$, $event$$583_index$$223$$, $groupNodes$$1_next$$9$$)
        }
      }
      $groupNodes$$1_next$$9$$ || ($event$$583_index$$223$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$) * (D.$DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) - 1), $groupNodes$$1_next$$9$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $event$$583_index$$223$$)))
    }
    return $groupNodes$$1_next$$9$$
  }
  return D.$DvtNBoxKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$583_index$$223$$)
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isSelectionEvent$$($event$$584$$) {
  return 9 == $event$$584$$.keyCode ? D.$JSCompiler_alias_FALSE$$ : this.$isNavigationEvent$($event$$584$$) && !$event$$584$$.ctrlKey
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isMultiSelectEvent$$($event$$585$$) {
  return 32 == $event$$585$$.keyCode && $event$$585$$.ctrlKey
};
D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$ = function $$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$$($obj$$308_stageP2$$4$$) {
  var $bounds$$140$$ = $obj$$308_stageP2$$4$$.$getDimensions$(), $stageP1$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$308_stageP2$$4$$, new D.$DvtPoint$$($bounds$$140$$.x, $bounds$$140$$.y));
  $obj$$308_stageP2$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$308_stageP2$$4$$, new D.$DvtPoint$$($bounds$$140$$.x + $bounds$$140$$.$w$, $bounds$$140$$.y + $bounds$$140$$.$h$));
  return new D.$DvtRectangle$$($stageP1$$4$$.x, $stageP1$$4$$.y, $obj$$308_stageP2$$4$$.x - $stageP1$$4$$.x, $obj$$308_stageP2$$4$$.y - $stageP1$$4$$.y)
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isNavigationEvent$$($event$$586$$) {
  var $retVal$$2$$ = D.$JSCompiler_alias_FALSE$$;
  switch($event$$586$$.keyCode) {
    case 219:
    ;
    case 221:
      $retVal$$2$$ = D.$JSCompiler_alias_TRUE$$;
      break;
    default:
      $retVal$$2$$ = D.$DvtNBoxKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$586$$)
  }
  return $retVal$$2$$
};
D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$ = function $$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$$($curr$$, $bNext$$6_event$$587$$, $navigableItems$$3$$) {
  if(!$navigableItems$$3$$ || 0 >= $navigableItems$$3$$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  $navigableItems$$3$$[0] instanceof D.$DvtNBoxCategoryNode$$ && $navigableItems$$3$$.sort(function($curr$$, $bNext$$6_event$$587$$) {
    return D.$DvtNBoxCategoryNode$$.$compareSize$($curr$$.getData(), $bNext$$6_event$$587$$.getData())
  });
  if($curr$$ == D.$JSCompiler_alias_NULL$$) {
    return $navigableItems$$3$$[0]
  }
  var $next$$10$$ = $curr$$;
  $bNext$$6_event$$587$$ = 39 == $bNext$$6_event$$587$$.keyCode || 40 == $bNext$$6_event$$587$$.keyCode ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  for(var $itemCount$$1$$ = $navigableItems$$3$$.length, $i$$725$$ = 0;$i$$725$$ < $itemCount$$1$$;$i$$725$$++) {
    if($navigableItems$$3$$[$i$$725$$] === $curr$$) {
      $next$$10$$ = $navigableItems$$3$$[$bNext$$6_event$$587$$ ? $i$$725$$ + 1 < $itemCount$$1$$ ? $i$$725$$ + 1 : $i$$725$$ : 0 <= $i$$725$$ - 1 ? $i$$725$$ - 1 : $i$$725$$];
      break
    }
  }
  return $next$$10$$
};
D.$DvtNBoxAutomation$$ = function $$DvtNBoxAutomation$$$($dvtComponent$$12$$) {
  this.Init($dvtComponent$$12$$)
};
(0,D.$goog$exportPath_$$)("DvtNBoxAutomation", D.$DvtNBoxAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxAutomation$$, D.$DvtAutomation$$, "DvtNBoxAutomation");
D.$DvtNBoxAutomation$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_nBox$");
D.$DvtNBoxAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtNBoxAutomation$$$$$GetSubIdForDomElement$$($displayable$$61$$) {
  if($displayable$$61$$) {
    var $nBox$$ = this.$getComponent$(), $component$$16_r$$54_values$$10$$, $action$$24$$, $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$61$$, "DvtNBoxCell");
    if($cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$) {
      $component$$16_r$$54_values$$10$$ = $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$.getData().row;
      var $c$$35_index$$218_indices$$10$$ = $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$.getData().column, $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$.$getChildContainer$();
      $component$$16_r$$54_values$$10$$ = (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$component$$16_r$$54_values$$10$$, $c$$35_index$$218_indices$$10$$]);
      $component$$16_r$$54_values$$10$$ = "cell" + $component$$16_r$$54_values$$10$$;
      if($displayable$$61$$ instanceof D.$DvtNBoxCell$$) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$24$$)
      }
      if($displayable$$61$$ instanceof D.$DvtButton$$ && (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$61$$, "DvtNBoxNodeOverflow")) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, "overflow")
      }
      if($displayable$$61$$ instanceof D.$DvtNBoxNode$$) {
        $c$$35_index$$218_indices$$10$$ = 0;
        for($cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$($nBox$$, $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$);$cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$;) {
          if($cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ == $displayable$$61$$) {
            return $action$$24$$ = "node" + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$c$$35_index$$218_indices$$10$$]), this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$24$$)
          }
          $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nBox$$, $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$.getData().__next);
          $c$$35_index$$218_indices$$10$$ += 1
        }
      }
      if($displayable$$61$$ instanceof D.$DvtNBoxCategoryNode$$) {
        return $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = $displayable$$61$$.getData().id, $action$$24$$ = "groupNode", $action$$24$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$61$$.getData().nodeIndices[0]).groupCategory ? $action$$24$$ + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$]) : $action$$24$$ + (0,D.$JSCompiler_StaticMethods__createBraces$$)($cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$.split(";")), 
        this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$24$$)
      }
    }
    if($cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$61$$, "DvtNBoxDrawer")) {
      $component$$16_r$$54_values$$10$$ = "dialog";
      if($displayable$$61$$ instanceof D.$DvtNBoxDrawer$$) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$24$$)
      }
      if($displayable$$61$$ instanceof D.$DvtButton$$) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, "closeButton")
      }
      if($displayable$$61$$ instanceof D.$DvtNBoxNode$$) {
        for(var $c$$35_index$$218_indices$$10$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nBox$$, $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$.getData().id).nodeIndices, $i$$716$$ = 0;$i$$716$$ < $c$$35_index$$218_indices$$10$$.length;$i$$716$$++) {
          if($cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $c$$35_index$$218_indices$$10$$[$i$$716$$]), $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nBox$$, $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$), $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ == $displayable$$61$$) {
            return $action$$24$$ = "node" + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$i$$716$$]), this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$24$$)
          }
        }
      }
    }
    if($displayable$$61$$ instanceof D.$DvtNBoxCategoryNode$$) {
      return $cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$ = $displayable$$61$$.getData().id, $component$$16_r$$54_values$$10$$ = "groupNode", $component$$16_r$$54_values$$10$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$61$$.getData().nodeIndices[0]).groupCategory ? $component$$16_r$$54_values$$10$$ + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$]) : $component$$16_r$$54_values$$10$$ + (0,D.$JSCompiler_StaticMethods__createBraces$$)($cell$$33_container$$140_data$$74_drawer$$2_id$$225_node$$251$$.split(";")), 
      this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$24$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$_createSubId$ = function $$DvtNBoxAutomation$$$$$_createSubId$$($component$$17$$, $action$$25$$) {
  var $subId$$21$$ = $component$$17$$;
  $action$$25$$ && ($subId$$21$$ += "#" + $action$$25$$);
  return $subId$$21$$
};
D.$DvtNBoxAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtNBoxAutomation$$$$$getDomElementForSubId$$($displayable$$62_nodeIndex$$7_parsedId_subId$$22$$) {
  var $id$$226_nBox$$1$$ = this.$getComponent$();
  if("tooltip" == $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)($id$$226_nBox$$1$$)
  }
  $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = this.$_parseSubId$($displayable$$62_nodeIndex$$7_parsedId_subId$$22$$);
  var $component$$18_node$$252_rowIndex$$inline_7374$$ = $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$.component, $action$$26_nodeIdx$$1$$ = $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$.action, $j$$96_values$$11$$ = D.$JSCompiler_alias_NULL$$, $cell$$34_colCount$$inline_7373_container$$141_data$$75$$ = D.$JSCompiler_alias_NULL$$;
  $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = D.$JSCompiler_alias_NULL$$;
  if(0 === $component$$18_node$$252_rowIndex$$inline_7374$$.lastIndexOf("cell", 0)) {
    var $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ = $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($component$$18_node$$252_rowIndex$$inline_7374$$), $nBox$$inline_7372$$ = this.$getComponent$(), $cell$$34_colCount$$inline_7373_container$$141_data$$75$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nBox$$inline_7372$$), $component$$18_node$$252_rowIndex$$inline_7374$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nBox$$inline_7372$$, $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$[0]), 
    $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nBox$$inline_7372$$, $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$[1]), $cell$$34_colCount$$inline_7373_container$$141_data$$75$$ = D.$DvtNBoxDataUtils$$.$getCell$($id$$226_nBox$$1$$, $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ != D.$JSCompiler_alias_NULL$$ && $component$$18_node$$252_rowIndex$$inline_7374$$ != D.$JSCompiler_alias_NULL$$ ? $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ + 
    $cell$$34_colCount$$inline_7373_container$$141_data$$75$$ * $component$$18_node$$252_rowIndex$$inline_7374$$ : D.$JSCompiler_alias_NULL$$);
    if(!$cell$$34_colCount$$inline_7373_container$$141_data$$75$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $cell$$34_colCount$$inline_7373_container$$141_data$$75$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$226_nBox$$1$$, $cell$$34_colCount$$inline_7373_container$$141_data$$75$$);
    if($action$$26_nodeIdx$$1$$) {
      $cell$$34_colCount$$inline_7373_container$$141_data$$75$$ = $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getChildContainer$();
      if("overflow" == $action$$26_nodeIdx$$1$$) {
        for($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ = $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getNumChildren$();0 < $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$;$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$--) {
          if($cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getChildAt$($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ - 1) instanceof D.$DvtNBoxNodeOverflow$$) {
            $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getChildAt$($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ - 1).$_button$;
            break
          }
        }
      }
      if(0 === $action$$26_nodeIdx$$1$$.lastIndexOf("node", 0)) {
        $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($action$$26_nodeIdx$$1$$, D.$JSCompiler_alias_TRUE$$);
        $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $j$$96_values$$11$$[0];
        if(0 > $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$) {
          return D.$JSCompiler_alias_NULL$$
        }
        $component$$18_node$$252_rowIndex$$inline_7374$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$($id$$226_nBox$$1$$, $cell$$34_colCount$$inline_7373_container$$141_data$$75$$);
        for($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ = 0;$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ < $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$;) {
          if($component$$18_node$$252_rowIndex$$inline_7374$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$226_nBox$$1$$, $component$$18_node$$252_rowIndex$$inline_7374$$.getData().__next), $colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ += 1, "DvtNBoxNode" != $component$$18_node$$252_rowIndex$$inline_7374$$.$getTypeName$()) {
            return D.$JSCompiler_alias_NULL$$
          }
        }
        $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$252_rowIndex$$inline_7374$$
      }
      if(0 === $action$$26_nodeIdx$$1$$.lastIndexOf("groupNode", 0)) {
        var $categoryNode$$1_dialog_value$$179$$;
        -1 < $action$$26_nodeIdx$$1$$.indexOf("{") ? $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBraces$$)($action$$26_nodeIdx$$1$$) : $categoryNode$$1_dialog_value$$179$$ = $action$$26_nodeIdx$$1$$.substring($action$$26_nodeIdx$$1$$.indexOf("[") + 1, $action$$26_nodeIdx$$1$$.indexOf("]"));
        for($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ = 0;$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ < $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getNumChildren$();$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$++) {
          if($component$$18_node$$252_rowIndex$$inline_7374$$ = $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getChildAt$($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$), $component$$18_node$$252_rowIndex$$inline_7374$$ instanceof D.$DvtNBoxCategoryNode$$) {
            if($id$$226_nBox$$1$$ = $component$$18_node$$252_rowIndex$$inline_7374$$.getData().id, $j$$96_values$$11$$ && (0,D.$JSCompiler_StaticMethods__compareCategories$$)($j$$96_values$$11$$, $id$$226_nBox$$1$$.split(";"))) {
              $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$252_rowIndex$$inline_7374$$;
              break
            }else {
              if($categoryNode$$1_dialog_value$$179$$ && $categoryNode$$1_dialog_value$$179$$ == $id$$226_nBox$$1$$) {
                $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$252_rowIndex$$inline_7374$$;
                break
              }
            }
          }
        }
      }
    }else {
      $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $cell$$34_colCount$$inline_7373_container$$141_data$$75$$
    }
  }else {
    if(0 === $component$$18_node$$252_rowIndex$$inline_7374$$.lastIndexOf("groupNode", 0)) {
      $cell$$34_colCount$$inline_7373_container$$141_data$$75$$ = $id$$226_nBox$$1$$.$getChildContainer$();
      -1 < $component$$18_node$$252_rowIndex$$inline_7374$$.indexOf("{") ? $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBraces$$)($component$$18_node$$252_rowIndex$$inline_7374$$) : $categoryNode$$1_dialog_value$$179$$ = $component$$18_node$$252_rowIndex$$inline_7374$$.substring($component$$18_node$$252_rowIndex$$inline_7374$$.indexOf("[") + 1, $component$$18_node$$252_rowIndex$$inline_7374$$.indexOf("]"));
      for($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ = 0;$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ < $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getNumChildren$();$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$++) {
        if($component$$18_node$$252_rowIndex$$inline_7374$$ = $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getChildAt$($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$), $component$$18_node$$252_rowIndex$$inline_7374$$ instanceof D.$DvtNBoxCategoryNode$$) {
          if($id$$226_nBox$$1$$ = $component$$18_node$$252_rowIndex$$inline_7374$$.getData().id, $j$$96_values$$11$$ && (0,D.$JSCompiler_StaticMethods__compareCategories$$)($j$$96_values$$11$$, $id$$226_nBox$$1$$.split(";"))) {
            $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$252_rowIndex$$inline_7374$$;
            break
          }else {
            if($categoryNode$$1_dialog_value$$179$$ && $categoryNode$$1_dialog_value$$179$$ == $id$$226_nBox$$1$$) {
              $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$252_rowIndex$$inline_7374$$;
              break
            }
          }
        }
      }
    }else {
      if("dialog" === $component$$18_node$$252_rowIndex$$inline_7374$$ && ($cell$$34_colCount$$inline_7373_container$$141_data$$75$$ = $id$$226_nBox$$1$$.$getChildContainer$())) {
        for($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ = 0;$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$ < $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getNumChildren$();$colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$++) {
          if($cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getChildAt$($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$) instanceof D.$DvtNBoxDrawer$$) {
            $categoryNode$$1_dialog_value$$179$$ = $cell$$34_colCount$$inline_7373_container$$141_data$$75$$.$getChildAt$($colIndex$$inline_7375_count$$18_i$$717_values$$inline_7371$$);
            if($action$$26_nodeIdx$$1$$) {
              if("closeButton" == $action$$26_nodeIdx$$1$$) {
                for($j$$96_values$$11$$ = 0;$j$$96_values$$11$$ < $categoryNode$$1_dialog_value$$179$$.$getNumChildren$();$j$$96_values$$11$$++) {
                  $categoryNode$$1_dialog_value$$179$$.$getChildAt$($j$$96_values$$11$$) instanceof D.$DvtButton$$ && ($displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $categoryNode$$1_dialog_value$$179$$.$getChildAt$($j$$96_values$$11$$))
                }
              }
              if(0 === $action$$26_nodeIdx$$1$$.lastIndexOf("node", 0) && ($j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($action$$26_nodeIdx$$1$$, D.$JSCompiler_alias_TRUE$$), $action$$26_nodeIdx$$1$$ = $j$$96_values$$11$$[0], $categoryNode$$1_dialog_value$$179$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($id$$226_nBox$$1$$, $categoryNode$$1_dialog_value$$179$$.getData().id))) {
                $component$$18_node$$252_rowIndex$$inline_7374$$ = D.$DvtNBoxDataUtils$$.$getNode$($id$$226_nBox$$1$$, $categoryNode$$1_dialog_value$$179$$.nodeIndices[$action$$26_nodeIdx$$1$$]);
                if(!$component$$18_node$$252_rowIndex$$inline_7374$$) {
                  return D.$JSCompiler_alias_NULL$$
                }
                $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$226_nBox$$1$$, $component$$18_node$$252_rowIndex$$inline_7374$$)
              }
            }else {
              $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ = $categoryNode$$1_dialog_value$$179$$
            }
            break
          }
        }
      }
    }
  }
  return $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$ ? $displayable$$62_nodeIndex$$7_parsedId_subId$$22$$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getDomElementForSubId = D.$DvtNBoxAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtNBoxAutomation$$.prototype.$_parseSubId$ = function $$DvtNBoxAutomation$$$$$_parseSubId$$($subId$$23$$) {
  var $component$$19$$ = D.$JSCompiler_alias_NULL$$, $action$$27$$ = D.$JSCompiler_alias_NULL$$, $hashIndex$$ = $subId$$23$$.indexOf("#");
  -1 !== $hashIndex$$ ? ($component$$19$$ = $subId$$23$$.substring(0, $hashIndex$$), $action$$27$$ = $subId$$23$$.substring($hashIndex$$ + 1)) : $component$$19$$ = $subId$$23$$;
  return{component:$component$$19$$, action:$action$$27$$}
};
D.$DvtNBoxAutomation$$.prototype.$getComponent$ = (0,D.$JSCompiler_get$$)("$_nBox$");
D.$JSCompiler_StaticMethods__parseBrackets$$ = function $$JSCompiler_StaticMethods__parseBrackets$$$($str$$17$$, $bParseInt$$) {
  var $values$$12$$ = $str$$17$$.substring($str$$17$$.indexOf("[") + 1, $str$$17$$.indexOf("]")).split(",");
  if($bParseInt$$) {
    for(var $i$$718$$ = 0;$i$$718$$ < $values$$12$$.length;$i$$718$$++) {
      $values$$12$$[$i$$718$$] = (0,window.parseInt)($values$$12$$[$i$$718$$])
    }
  }
  return 0 < $values$$12$$.length ? $values$$12$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__createBrackets$$ = function $$JSCompiler_StaticMethods__createBrackets$$$($values$$13$$) {
  return 0 < $values$$13$$.length ? "[" + $values$$13$$.join(",") + "]" : ""
};
D.$JSCompiler_StaticMethods__parseBraces$$ = function $$JSCompiler_StaticMethods__parseBraces$$$($str$$18$$) {
  return $str$$18$$.substring($str$$18$$.indexOf("{") + 1, $str$$18$$.lastIndexOf("}")).split(",")
};
D.$JSCompiler_StaticMethods__createBraces$$ = function $$JSCompiler_StaticMethods__createBraces$$$($values$$14$$) {
  for(var $str$$19$$ = "{", $i$$719$$ = 0;$i$$719$$ < $values$$14$$.length;$i$$719$$++) {
    $str$$19$$ += $values$$14$$[$i$$719$$].trim() + ","
  }
  return $str$$19$$.substring(0, $str$$19$$.length - 1) + "}"
};
D.$JSCompiler_StaticMethods__compareCategories$$ = function $$JSCompiler_StaticMethods__compareCategories$$$($arr1$$, $arr2$$) {
  if($arr1$$.length != $arr2$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $arr1$$.sort();
  $arr2$$.sort();
  for(var $i$$720$$ = 0;$i$$720$$ < $arr1$$.length;$i$$720$$++) {
    if($arr1$$[$i$$720$$].trim() != $arr2$$[$i$$720$$].trim()) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__getParentObject$$ = function $$JSCompiler_StaticMethods__getParentObject$$$($displayable$$63$$, $type$$239$$) {
  for(var $ancestor$$2$$ = D.$JSCompiler_alias_NULL$$, $parent$$73$$ = $displayable$$63$$;$parent$$73$$;) {
    if($parent$$73$$.$getTypeName$() == $type$$239$$) {
      $ancestor$$2$$ = $parent$$73$$;
      break
    }else {
      $parent$$73$$ = $parent$$73$$.getParent()
    }
  }
  return $ancestor$$2$$
};
D.$DvtNBoxAutomation$$.prototype.getData = function $$DvtNBoxAutomation$$$$getData$($key$$117$$, $attribute$$2$$) {
  if(this.$_nBox$) {
    if("rowsTitle" == $key$$117$$) {
      if(this.$_nBox$.$getOptions$().rowsTitle) {
        return this.$_nBox$.$getOptions$().rowsTitle
      }
    }else {
      if("rowCount" == $key$$117$$) {
        var $cols$$3_data$$76_rows$$13$$ = this.$_nBox$.$getOptions$().rows;
        if($cols$$3_data$$76_rows$$13$$) {
          return $cols$$3_data$$76_rows$$13$$.length
        }
      }else {
        if("row" == $key$$117$$) {
          if(0 <= D.$DvtNBoxDataUtils$$.$getRowIndex$(this.$_nBox$, $attribute$$2$$)) {
            return $cols$$3_data$$76_rows$$13$$ = {}, $cols$$3_data$$76_rows$$13$$.label = D.$DvtNBoxDataUtils$$.$getRowLabel$(this.$_nBox$, $attribute$$2$$), $cols$$3_data$$76_rows$$13$$
          }
        }else {
          if("columnsTitle" == $key$$117$$) {
            if(this.$_nBox$.$getOptions$().columnsTitle) {
              return this.$_nBox$.$getOptions$().columnsTitle
            }
          }else {
            if("columnCount" == $key$$117$$) {
              if($cols$$3_data$$76_rows$$13$$ = this.$_nBox$.$getOptions$().columns) {
                return $cols$$3_data$$76_rows$$13$$.length
              }
            }else {
              if("column" == $key$$117$$) {
                if(0 <= D.$DvtNBoxDataUtils$$.$getColumnIndex$(this.$_nBox$, $attribute$$2$$)) {
                  return $cols$$3_data$$76_rows$$13$$ = {}, $cols$$3_data$$76_rows$$13$$.label = D.$DvtNBoxDataUtils$$.$getColumnLabel$(this.$_nBox$, $attribute$$2$$), $cols$$3_data$$76_rows$$13$$
                }
              }else {
                if("groupBehavior" == $key$$117$$) {
                  return D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$)
                }
              }
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getData = D.$DvtNBoxAutomation$$.prototype.getData;
D.$DvtNBoxAutomation$$.prototype.$getGroupNode$ = function $$DvtNBoxAutomation$$$$$getGroupNode$$($groupInfo$$1$$) {
  if($groupInfo$$1$$ && D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    if("string" === typeof $groupInfo$$1$$) {
      return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupInfo$$1$$)
    }
    var $groupData$$ = "", $key$$118$$;
    for($key$$118$$ in $groupInfo$$1$$) {
      $groupData$$ = $groupInfo$$1$$[$key$$118$$] ? $groupData$$ + ($key$$118$$ + ":" + $groupInfo$$1$$[$key$$118$$] + ";") : $groupData$$ + ($key$$118$$ + ";")
    }
    return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupData$$.substring(0, $groupData$$.length - 1))
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getGroupNode = D.$DvtNBoxAutomation$$.prototype.$getGroupNode$;
D.$JSCompiler_StaticMethods__getGroupNodeData$$ = function $$JSCompiler_StaticMethods__getGroupNodeData$$$($JSCompiler_StaticMethods__getGroupNodeData$self$$, $groupData$$1$$) {
  var $categoryData_indicatorIcon$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $groupData$$1$$);
  if($categoryData_indicatorIcon$$) {
    var $categoryNode$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
    if($categoryNode$$2$$) {
      var $data$$77$$ = {};
      $data$$77$$.selected = $categoryNode$$2$$.$isSelected$();
      $data$$77$$.color = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$77$$.indicatorColor = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$77$$.tooltip = $categoryNode$$2$$.$getShortDesc$();
      $data$$77$$.size = $categoryData_indicatorIcon$$.nodeIndices ? $categoryData_indicatorIcon$$.nodeIndices.length : -1;
      $categoryData_indicatorIcon$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$, "indicatorIcon");
      $data$$77$$.indicatorIcon = $JSCompiler_StaticMethods__getGroupNodeData$self$$.$_getMarkerData$($categoryData_indicatorIcon$$);
      return $data$$77$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$getCell$ = function $$DvtNBoxAutomation$$$$$getCell$$($rowValue$$, $columnValue$$) {
  var $cellObj$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $rowValue$$, $columnValue$$);
  if($cellObj$$) {
    var $cellIndex$$1$$ = $cellObj$$.$getCellIndex$(), $data$$78$$ = {};
    $data$$78$$.label = $cellObj$$.$getLabel$();
    var $colorFill$$inline_7392_style$$inline_7390$$ = D.$DvtNBoxStyleUtils$$.$getCellStyle$($cellObj$$.$_nbox$, $cellObj$$.$getCellIndex$()), $bgFill$$inline_7391$$ = $colorFill$$inline_7392_style$$inline_7390$$.$getStyle$("background"), $colorFill$$inline_7392_style$$inline_7390$$ = $colorFill$$inline_7392_style$$inline_7390$$.$getStyle$("background-color");
    $data$$78$$.background = $bgFill$$inline_7391$$ ? $bgFill$$inline_7391$$ : $colorFill$$inline_7392_style$$inline_7390$$;
    $data$$78$$.getNodeCount = function $$data$$78$$$getNodeCount$() {
      return $cellObj$$.$getNodeCount$()
    };
    $data$$78$$.rowValue = $rowValue$$;
    $data$$78$$.columnValue = $columnValue$$;
    $data$$78$$.cellIndex = $cellIndex$$1$$;
    return $data$$78$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getCell = D.$DvtNBoxAutomation$$.prototype.$getCell$;
D.$DvtNBoxAutomation$$.prototype.$getCellNode$ = function $$DvtNBoxAutomation$$$$$getCellNode$$($cellData$$2$$, $nodeIndex$$8$$) {
  if(this.$_nBox$ && !D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$)) {
    var $nodeData$$39$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $cellData$$2$$.rowValue, $cellData$$2$$.columnValue).$getNode$($nodeIndex$$8$$);
    return this.$_getNode$($nodeData$$39$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getCellNode = D.$DvtNBoxAutomation$$.prototype.$getCellNode$;
D.$DvtNBoxAutomation$$.prototype.$_getNode$ = function $$DvtNBoxAutomation$$$$$_getNode$$($indicatorIcon$$1_nodeData$$40$$) {
  if($indicatorIcon$$1_nodeData$$40$$) {
    var $icon$$42_node$$253$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
    if($icon$$42_node$$253$$) {
      var $data$$79$$ = {};
      $data$$79$$.selected = $icon$$42_node$$253$$.$isSelected$();
      $data$$79$$.tooltip = $icon$$42_node$$253$$.$getShortDesc$();
      $data$$79$$.color = D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $data$$79$$.indicatorColor = D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $indicatorIcon$$1_nodeData$$40$$.label && ($data$$79$$.label = $indicatorIcon$$1_nodeData$$40$$.label);
      $indicatorIcon$$1_nodeData$$40$$.secondaryLabel && ($data$$79$$.secondaryLabel = $indicatorIcon$$1_nodeData$$40$$.secondaryLabel);
      $icon$$42_node$$253$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "icon");
      $data$$79$$.icon = this.$_getMarkerData$($icon$$42_node$$253$$);
      $indicatorIcon$$1_nodeData$$40$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "indicatorIcon");
      $data$$79$$.indicatorIcon = this.$_getMarkerData$($indicatorIcon$$1_nodeData$$40$$);
      return $data$$79$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$getCellGroupNode$ = function $$DvtNBoxAutomation$$$$$getCellGroupNode$$($cellData$$3$$, $groupInfo$$2$$) {
  if($groupInfo$$2$$ && D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    if("string" === typeof $groupInfo$$2$$) {
      return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $cellData$$3$$.cellIndex + ":" + $groupInfo$$2$$)
    }
    var $groupData$$2$$ = $cellData$$3$$.cellIndex + ":", $key$$119$$;
    for($key$$119$$ in $groupInfo$$2$$) {
      $groupData$$2$$ = $groupInfo$$2$$[$key$$119$$] ? $groupData$$2$$ + ($key$$119$$ + ":" + $groupInfo$$2$$[$key$$119$$] + ";") : $groupData$$2$$ + ($key$$119$$ + ";")
    }
    return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupData$$2$$.substring(0, $groupData$$2$$.length - 1))
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getCellGroupNode = D.$DvtNBoxAutomation$$.prototype.$getCellGroupNode$;
D.$DvtNBoxAutomation$$.prototype.$_getMarkerData$ = function $$DvtNBoxAutomation$$$$$_getMarkerData$$($marker$$16$$) {
  if($marker$$16$$) {
    var $data$$80$$ = {};
    $data$$80$$.shape = $marker$$16$$ instanceof D.$DvtSimpleMarker$$ ? $marker$$16$$.$getType$() : "none";
    $marker$$16$$.$getFill$() && ($data$$80$$.color = $marker$$16$$.$getFill$().$getColor$());
    return $data$$80$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$getDialog$ = function $$DvtNBoxAutomation$$$$$getDialog$$() {
  var $data$$81_drawer$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  if($data$$81_drawer$$3$$) {
    var $categoryData$$1$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $data$$81_drawer$$3$$.id);
    if($categoryData$$1$$) {
      var $categoryNode$$3_groupInfo$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $categoryData$$1$$), $data$$81_drawer$$3$$ = {};
      $data$$81_drawer$$3$$.label = $categoryNode$$3_groupInfo$$3$$.$getLabel$();
      $data$$81_drawer$$3$$.getNodeCount = function $$data$$81_drawer$$3$$$getNodeCount$() {
        return $categoryData$$1$$.nodeIndices ? $categoryData$$1$$.nodeIndices.length : -1
      };
      for(var $categoryNode$$3_groupInfo$$3$$ = {}, $categories$$19$$ = $categoryData$$1$$.id.split(";"), $idx$$32$$ = 0;$idx$$32$$ < $categories$$19$$.length;$idx$$32$$++) {
        var $row$$48$$ = $categories$$19$$[$idx$$32$$].split(":");
        $row$$48$$ && 2 == $row$$48$$.length && ($categoryNode$$3_groupInfo$$3$$[$row$$48$$[0]] = $row$$48$$[1])
      }
      $data$$81_drawer$$3$$.groupInfo = $categoryNode$$3_groupInfo$$3$$;
      return $data$$81_drawer$$3$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getDialog = D.$DvtNBoxAutomation$$.prototype.$getDialog$;
D.$DvtNBoxAutomation$$.prototype.$getDialogNode$ = function $$DvtNBoxAutomation$$$$$getDialogNode$$($nodeData$$41_nodeIndex$$9$$) {
  var $categoryData$$2_drawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  return $categoryData$$2_drawer$$4$$ && ($categoryData$$2_drawer$$4$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $categoryData$$2_drawer$$4$$.id)) && $categoryData$$2_drawer$$4$$.nodeIndices && $categoryData$$2_drawer$$4$$.nodeIndices[$nodeData$$41_nodeIndex$$9$$] != D.$JSCompiler_alias_NULL$$ ? ($nodeData$$41_nodeIndex$$9$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $categoryData$$2_drawer$$4$$.nodeIndices[$nodeData$$41_nodeIndex$$9$$]), this.$_getNode$($nodeData$$41_nodeIndex$$9$$)) : 
  D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getDialogNode = D.$DvtNBoxAutomation$$.prototype.$getDialogNode$;
D.$DvtNBoxRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxRenderer$$, D.$DvtObj$$, "DvtNBoxRenderer");
D.$DvtNBoxRenderer$$.$render$ = function $$DvtNBoxRenderer$$$$render$$($nbox$$45$$, $container$$156$$, $availSpace$$101$$) {
  D.$DvtNBoxRenderer$$.$_renderBackground$($nbox$$45$$, $container$$156$$, $availSpace$$101$$);
  D.$DvtNBoxRenderer$$.$_renderLegend$($nbox$$45$$, $container$$156$$, $availSpace$$101$$);
  D.$DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$101$$);
  var $cellCounts$$7$$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$($nbox$$45$$), $cellLayout$$8$$ = D.$DvtNBoxCellRenderer$$.$calculateCellLayout$($nbox$$45$$, $cellCounts$$7$$);
  D.$DvtNBoxRenderer$$.$_renderTitles$($nbox$$45$$, $container$$156$$, $cellLayout$$8$$, $availSpace$$101$$);
  D.$DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$101$$);
  D.$DvtNBoxRenderer$$.$_renderCells$($nbox$$45$$, $container$$156$$, $cellCounts$$7$$, $cellLayout$$8$$, $availSpace$$101$$);
  D.$DvtNBoxRenderer$$.$_renderNodes$($nbox$$45$$, $container$$156$$, $cellCounts$$7$$, $availSpace$$101$$);
  D.$DvtNBoxRenderer$$.$_renderInitialSelection$($nbox$$45$$);
  D.$DvtNBoxRenderer$$.$_fixZOrder$($nbox$$45$$)
};
D.$DvtNBoxRenderer$$.$_renderBackground$ = function $$DvtNBoxRenderer$$$$_renderBackground$$($clipPath$$11_nbox$$46_rect$$39$$, $container$$157$$, $availSpace$$102$$) {
  $clipPath$$11_nbox$$46_rect$$39$$ = new D.$DvtRect$$($clipPath$$11_nbox$$46_rect$$39$$.$getCtx$(), $availSpace$$102$$.x, $availSpace$$102$$.y, $availSpace$$102$$.$w$, $availSpace$$102$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($clipPath$$11_nbox$$46_rect$$39$$);
  $container$$157$$.$addChild$($clipPath$$11_nbox$$46_rect$$39$$);
  $clipPath$$11_nbox$$46_rect$$39$$ = new D.$DvtClipPath$$;
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$11_nbox$$46_rect$$39$$, $availSpace$$102$$.x, $availSpace$$102$$.y, $availSpace$$102$$.$w$, $availSpace$$102$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$157$$, $clipPath$$11_nbox$$46_rect$$39$$)
};
D.$DvtNBoxRenderer$$.$_renderLegend$ = function $$DvtNBoxRenderer$$$$_renderLegend$$($nbox$$47$$, $container$$158_legendDwn_legendDwnImg$$, $availSpace$$103$$) {
  var $legendData$$4$$ = D.$DvtNBoxDataUtils$$.$getLegend$($nbox$$47$$);
  if($legendData$$4$$ && $legendData$$4$$.sections) {
    var $dims$$58_options$$216$$ = $nbox$$47$$.$getOptions$(), $rtl$$26$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$47$$.$getCtx$()), $panelDrawer$$3$$ = new D.$DvtPanelDrawer$$($nbox$$47$$.$getCtx$(), $nbox$$47$$.$processEvent$, $nbox$$47$$, "pd1");
    $panelDrawer$$3$$.$addEvtListener$("dvtPanelDrawerEvent", $nbox$$47$$.$processEvent$, D.$JSCompiler_alias_FALSE$$, $nbox$$47$$);
    $panelDrawer$$3$$.$_dockSide$ = "top";
    $panelDrawer$$3$$.$setMaxHeight$($availSpace$$103$$.$h$ - $dims$$58_options$$216$$.__layout.legendBottomGap);
    $panelDrawer$$3$$.$setMaxWidth$($availSpace$$103$$.$w$ / 3);
    $container$$158_legendDwn_legendDwnImg$$.$addChild$($panelDrawer$$3$$);
    var $legend$$28$$ = (0,D.$DvtLegend$newInstance$$)($nbox$$47$$.$getCtx$(), $nbox$$47$$.$processEvent$, $nbox$$47$$);
    $container$$158_legendDwn_legendDwnImg$$.$addChild$($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$5$$ = $legend$$28$$.$getPreferredSize$($legendData$$4$$, $panelDrawer$$3$$.$getMaxContentWidth$(), $panelDrawer$$3$$.$getMaxContentHeight$());
    $legend$$28$$.$render$($legendData$$4$$, $legendEna_legendEnaImg_preferredSize$$5$$.$w$, $legendEna_legendEnaImg_preferredSize$$5$$.$h$);
    $container$$158_legendDwn_legendDwnImg$$.removeChild($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$5$$ = $dims$$58_options$$216$$._resources.legend_ena, $legendOvr_legendOvrImg$$ = $dims$$58_options$$216$$._resources.legend_ovr;
    $container$$158_legendDwn_legendDwnImg$$ = $dims$$58_options$$216$$._resources.legend_dwn;
    $legendEna_legendEnaImg_preferredSize$$5$$ = new D.$DvtImage$$($nbox$$47$$.$getCtx$(), $legendEna_legendEnaImg_preferredSize$$5$$.src, 0, 0, $legendEna_legendEnaImg_preferredSize$$5$$.width, $legendEna_legendEnaImg_preferredSize$$5$$.height);
    $legendOvr_legendOvrImg$$ = new D.$DvtImage$$($nbox$$47$$.$getCtx$(), $legendOvr_legendOvrImg$$.src, 0, 0, $legendOvr_legendOvrImg$$.width, $legendOvr_legendOvrImg$$.height);
    $container$$158_legendDwn_legendDwnImg$$ = new D.$DvtImage$$($nbox$$47$$.$getCtx$(), $container$$158_legendDwn_legendDwnImg$$.src, 0, 0, $container$$158_legendDwn_legendDwnImg$$.width, $container$$158_legendDwn_legendDwnImg$$.height);
    (0,D.$JSCompiler_StaticMethods_addPanel$$)($panelDrawer$$3$$, $legend$$28$$, $legendEna_legendEnaImg_preferredSize$$5$$, $legendOvr_legendOvrImg$$, $container$$158_legendDwn_legendDwnImg$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND"), "legend");
    $rtl$$26$$ && ($panelDrawer$$3$$.$_discloseDirection$ = "right");
    $panelDrawer$$3$$.$renderComponent$();
    "disclosed" == $dims$$58_options$$216$$[D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$] && ((0,D.$JSCompiler_StaticMethods_setDisplayedPanelId$$)($panelDrawer$$3$$, "legend"), $panelDrawer$$3$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$));
    $dims$$58_options$$216$$ = $panelDrawer$$3$$.$getDimensions$();
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelDrawer$$3$$, $rtl$$26$$ ? 0 : $availSpace$$103$$.$w$, 0);
    $rtl$$26$$ && ($availSpace$$103$$.x += $dims$$58_options$$216$$.$w$);
    $availSpace$$103$$.$w$ -= $dims$$58_options$$216$$.$w$;
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$47$$, $legendData$$4$$, $legend$$28$$, "legend");
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$47$$, $legendData$$4$$, $panelDrawer$$3$$, "panelDrawer")
  }
};
D.$DvtNBoxRenderer$$.$_renderTitles$ = function $$DvtNBoxRenderer$$$$_renderTitles$$($nbox$$48$$, $container$$159$$, $cellLayout$$9$$, $availSpace$$104$$) {
  var $i$$732_options$$217$$ = $nbox$$48$$.$getOptions$(), $columnCount$$7$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$48$$), $rowCount$$12$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$48$$), $componentGap_maximizedColumnIndex$$2$$ = $i$$732_options$$217$$.__layout.componentGap, $rowHeaderWidth$$4_titleGap$$3$$ = $i$$732_options$$217$$.__layout.titleGap, $columnHeaderHeight_titleComponentGap$$ = $i$$732_options$$217$$.__layout.titleComponentGap, $rtl$$27$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$48$$.$getCtx$());
  $availSpace$$104$$.x += $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$104$$.y += $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$104$$.$w$ -= 2 * $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$104$$.$h$ -= 2 * $componentGap_maximizedColumnIndex$$2$$;
  var $maximizedColumn$$7_row$$49$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$48$$), $componentGap_maximizedColumnIndex$$2$$ = $maximizedColumn$$7_row$$49$$ ? D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$48$$, $maximizedColumn$$7_row$$49$$) : -1, $maximizedRow$$7$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$48$$), $maximizedRowIndex$$2$$ = $maximizedRow$$7$$ ? D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$48$$, $maximizedRow$$7$$) : -1, $cellDims$$2_columnsTitle$$ = D.$JSCompiler_alias_NULL$$, 
  $rowsTitle$$ = D.$JSCompiler_alias_NULL$$, $columnLabels$$ = [], $rowLabels$$ = [], $columnsTitleHeight$$ = 0, $rowsTitleWidth$$ = 0, $rowTitleGap$$ = 0, $columnTitleGap$$ = 0, $columnLabelsHeight$$ = 0, $rowLabelsWidth$$ = 0, $rowTitleComponentGap$$ = 0, $columnTitleComponentGap$$ = 0;
  $i$$732_options$$217$$[D.$DvtNBoxConstants$$.$COLUMNS_TITLE$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $i$$732_options$$217$$[D.$DvtNBoxConstants$$.$COLUMNS_TITLE$], $i$$732_options$$217$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLUMNS_TITLE_STYLE$], "center", "middle"), $container$$159$$.$addChild$($cellDims$$2_columnsTitle$$), $columnsTitleHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellDims$$2_columnsTitle$$).$h$);
  $i$$732_options$$217$$[D.$DvtNBoxConstants$$.$ROWS_TITLE$] && ($rowsTitle$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $i$$732_options$$217$$[D.$DvtNBoxConstants$$.$ROWS_TITLE$], $i$$732_options$$217$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ROWS_TITLE_STYLE$], "center", "middle"), $container$$159$$.$addChild$($rowsTitle$$), $rowsTitleWidth$$ = D.$DvtTextUtils$$.$guessTextDimensions$($rowsTitle$$).$h$);
  for($i$$732_options$$217$$ = 0;$i$$732_options$$217$$ < $columnCount$$7$$;$i$$732_options$$217$$++) {
    var $column$$9_rowLabel$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$48$$, $i$$732_options$$217$$);
    if($column$$9_rowLabel$$[D.$DvtNBoxConstants$$.$LABEL$]) {
      var $columnLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $column$$9_rowLabel$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getColumnLabelStyle$($nbox$$48$$, $i$$732_options$$217$$), "center", "middle"), $columnLabelsHeight$$ = window.Math.max($columnLabelsHeight$$, D.$DvtTextUtils$$.$guessTextDimensions$($columnLabel$$).$h$);
      if(!$maximizedColumn$$7_row$$49$$ || $maximizedColumn$$7_row$$49$$ == $column$$9_rowLabel$$[D.$DvtNBoxConstants$$.ID]) {
        $columnLabels$$[$i$$732_options$$217$$] = $columnLabel$$, $container$$159$$.$addChild$($columnLabels$$[$i$$732_options$$217$$])
      }
    }
  }
  for($i$$732_options$$217$$ = 0;$i$$732_options$$217$$ < $rowCount$$12$$;$i$$732_options$$217$$++) {
    if($maximizedColumn$$7_row$$49$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$48$$, $i$$732_options$$217$$), $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.$LABEL$] && ($column$$9_rowLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getRowLabelStyle$($nbox$$48$$, $i$$732_options$$217$$), "center", "middle"), $rowLabelsWidth$$ = window.Math.max($rowLabelsWidth$$, D.$DvtTextUtils$$.$guessTextDimensions$($column$$9_rowLabel$$).$h$), 
    !$maximizedRow$$7$$ || $maximizedRow$$7$$ == $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.ID])) {
      $rowLabels$$[$i$$732_options$$217$$] = $column$$9_rowLabel$$, $container$$159$$.$addChild$($rowLabels$$[$i$$732_options$$217$$])
    }
  }
  if($rowsTitleWidth$$ || $rowLabelsWidth$$) {
    $rowTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $rowsTitleWidth$$ && $rowLabelsWidth$$ && ($rowTitleGap$$ = $rowHeaderWidth$$4_titleGap$$3$$)
  }
  if($columnsTitleHeight$$ || $columnLabelsHeight$$) {
    $columnTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $columnsTitleHeight$$ && $columnLabelsHeight$$ && ($columnTitleGap$$ = $rowHeaderWidth$$4_titleGap$$3$$)
  }
  $rowHeaderWidth$$4_titleGap$$3$$ = $rowsTitleWidth$$ + $rowTitleGap$$ + $rowLabelsWidth$$ + $rowTitleComponentGap$$;
  $columnHeaderHeight_titleComponentGap$$ = $columnsTitleHeight$$ + $columnTitleGap$$ + $columnLabelsHeight$$ + $columnTitleComponentGap$$;
  $availSpace$$104$$.x += $rtl$$27$$ ? 0 : $rowHeaderWidth$$4_titleGap$$3$$;
  $availSpace$$104$$.$w$ -= $rowHeaderWidth$$4_titleGap$$3$$;
  $availSpace$$104$$.$h$ -= $columnHeaderHeight_titleComponentGap$$;
  $cellDims$$2_columnsTitle$$ && D.$DvtTextUtils$$.$fitText$($cellDims$$2_columnsTitle$$, $availSpace$$104$$.$w$, $columnsTitleHeight$$, $container$$159$$) && (D.$DvtNBoxRenderer$$.$positionText$($cellDims$$2_columnsTitle$$, $availSpace$$104$$.x + $availSpace$$104$$.$w$ / 2, $availSpace$$104$$.y + $availSpace$$104$$.$h$ + $columnHeaderHeight_titleComponentGap$$ - $columnsTitleHeight$$ / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, $nbox$$48$$.$getOptions$(), $cellDims$$2_columnsTitle$$, 
  D.$DvtNBoxConstants$$.$COLUMNS_TITLE$));
  $rowsTitle$$ && D.$DvtTextUtils$$.$fitText$($rowsTitle$$, $availSpace$$104$$.$h$, $rowsTitleWidth$$, $container$$159$$) && (D.$DvtNBoxRenderer$$.$positionText$($rowsTitle$$, $availSpace$$104$$.x + ($rtl$$27$$ ? $availSpace$$104$$.$w$ : 0) + ($rtl$$27$$ ? 1 : -1) * ($rowHeaderWidth$$4_titleGap$$3$$ - $rowsTitleWidth$$ / 2), $availSpace$$104$$.y + $availSpace$$104$$.$h$ / 2, $rtl$$27$$ ? window.Math.PI / 2 : -window.Math.PI / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, $nbox$$48$$.$getOptions$(), 
  $rowsTitle$$, D.$DvtNBoxConstants$$.$ROWS_TITLE$));
  for($i$$732_options$$217$$ = 0;$i$$732_options$$217$$ < $columnCount$$7$$;$i$$732_options$$217$$++) {
    $columnLabels$$[$i$$732_options$$217$$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$48$$, -1 == $maximizedRowIndex$$2$$ ? 0 : $maximizedRowIndex$$2$$, $i$$732_options$$217$$, $cellLayout$$9$$, $availSpace$$104$$), D.$DvtTextUtils$$.$fitText$($columnLabels$$[$i$$732_options$$217$$], $cellDims$$2_columnsTitle$$.$w$, $columnLabelsHeight$$, $container$$159$$) && (D.$DvtNBoxRenderer$$.$positionText$($columnLabels$$[$i$$732_options$$217$$], $cellDims$$2_columnsTitle$$.x + 
    $cellDims$$2_columnsTitle$$.$w$ / 2, $availSpace$$104$$.y + $availSpace$$104$$.$h$ + $columnTitleComponentGap$$ + $columnLabelsHeight$$ / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$48$$, $i$$732_options$$217$$), $columnLabels$$[$i$$732_options$$217$$], D.$DvtNBoxConstants$$.$LABEL$)))
  }
  for($i$$732_options$$217$$ = 0;$i$$732_options$$217$$ < $rowCount$$12$$;$i$$732_options$$217$$++) {
    $rowLabels$$[$i$$732_options$$217$$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$48$$, $i$$732_options$$217$$, -1 == $componentGap_maximizedColumnIndex$$2$$ ? 0 : $componentGap_maximizedColumnIndex$$2$$, $cellLayout$$9$$, $availSpace$$104$$), D.$DvtTextUtils$$.$fitText$($rowLabels$$[$i$$732_options$$217$$], $cellDims$$2_columnsTitle$$.$h$, $rowLabelsWidth$$, $container$$159$$) && (D.$DvtNBoxRenderer$$.$positionText$($rowLabels$$[$i$$732_options$$217$$], 
    $availSpace$$104$$.x + ($rtl$$27$$ ? $availSpace$$104$$.$w$ : 0) + ($rtl$$27$$ ? 1 : -1) * ($rowTitleComponentGap$$ + $rowLabelsWidth$$ / 2), $cellDims$$2_columnsTitle$$.y + $cellDims$$2_columnsTitle$$.$h$ / 2, $rtl$$27$$ ? window.Math.PI / 2 : -window.Math.PI / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, D.$DvtNBoxDataUtils$$.$getRow$($nbox$$48$$, $i$$732_options$$217$$), $rowLabels$$[$i$$732_options$$217$$], D.$DvtNBoxConstants$$.$LABEL$)))
  }
};
D.$DvtNBoxRenderer$$.$createText$ = function $$DvtNBoxRenderer$$$$createText$$($ctx$$5_text$$97$$, $strText$$3$$, $style$$98$$, $halign$$11$$, $valign$$4$$) {
  $ctx$$5_text$$97$$ = new D.$DvtOutputText$$($ctx$$5_text$$97$$, $strText$$3$$, 0, 0);
  $ctx$$5_text$$97$$.$setCSSStyle$($style$$98$$);
  $ctx$$5_text$$97$$.$setHorizAlignment$($halign$$11$$);
  $ctx$$5_text$$97$$.$setVertAlignment$($valign$$4$$);
  return $ctx$$5_text$$97$$
};
D.$DvtNBoxRenderer$$.$_renderCells$ = function $$DvtNBoxRenderer$$$$_renderCells$$($nbox$$49$$, $container$$160$$, $cellCounts$$8$$, $cellLayout$$10$$, $availSpace$$105$$) {
  for(var $rowCount$$13$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$49$$), $columnCount$$8$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$49$$), $r$$60$$ = 0;$r$$60$$ < $rowCount$$13$$;$r$$60$$++) {
    for(var $c$$41$$ = 0;$c$$41$$ < $columnCount$$8$$;$c$$41$$++) {
      var $cell$$44$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$49$$, $r$$60$$ * $columnCount$$8$$ + $c$$41$$);
      D.$DvtNBoxCell$$.newInstance($nbox$$49$$, $cell$$44$$).$render$($container$$160$$, $cellLayout$$10$$, $cellCounts$$8$$, $availSpace$$105$$)
    }
  }
};
D.$DvtNBoxRenderer$$.$_calculateCellCounts$ = function $$DvtNBoxRenderer$$$$_calculateCellCounts$$($nbox$$50_retVal$$4$$) {
  var $rowCount$$14_total$$6$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$50_retVal$$4$$), $columnCount$$9_highlighted$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$50_retVal$$4$$), $cellCount$$4_nodeCount$$9$$ = $rowCount$$14_total$$6$$ * $columnCount$$9_highlighted$$1$$, $rowCount$$14_total$$6$$ = [], $columnCount$$9_highlighted$$1$$ = D.$JSCompiler_alias_NULL$$, $highlightedItems$$3_node$$267$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$50_retVal$$4$$), $highlightedMap$$2$$ = 
  {};
  if($highlightedItems$$3_node$$267$$) {
    for(var $columnCount$$9_highlighted$$1$$ = [], $i$$733$$ = 0;$i$$733$$ < $highlightedItems$$3_node$$267$$.length;$i$$733$$++) {
      $highlightedMap$$2$$[$highlightedItems$$3_node$$267$$[$i$$733$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
  }
  for($i$$733$$ = 0;$i$$733$$ < $cellCount$$4_nodeCount$$9$$;$i$$733$$++) {
    $rowCount$$14_total$$6$$[$i$$733$$] = 0, $columnCount$$9_highlighted$$1$$ && ($columnCount$$9_highlighted$$1$$[$i$$733$$] = 0)
  }
  $cellCount$$4_nodeCount$$9$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$50_retVal$$4$$);
  for($i$$733$$ = 0;$i$$733$$ < $cellCount$$4_nodeCount$$9$$;$i$$733$$++) {
    if($highlightedItems$$3_node$$267$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$50_retVal$$4$$, $i$$733$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$50_retVal$$4$$, $highlightedItems$$3_node$$267$$)) {
      var $cellIndex$$9$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$50_retVal$$4$$, $highlightedItems$$3_node$$267$$);
      $rowCount$$14_total$$6$$[$cellIndex$$9$$]++;
      $columnCount$$9_highlighted$$1$$ && $highlightedMap$$2$$[$highlightedItems$$3_node$$267$$[D.$DvtNBoxConstants$$.ID]] && $columnCount$$9_highlighted$$1$$[$cellIndex$$9$$]++
    }
  }
  $nbox$$50_retVal$$4$$ = {};
  $nbox$$50_retVal$$4$$.total = $rowCount$$14_total$$6$$;
  $columnCount$$9_highlighted$$1$$ && ($nbox$$50_retVal$$4$$.highlighted = $columnCount$$9_highlighted$$1$$);
  return $nbox$$50_retVal$$4$$
};
D.$DvtNBoxRenderer$$.$_renderNodes$ = function $$DvtNBoxRenderer$$$$_renderNodes$$($nbox$$51$$, $container$$161_rowCount$$15$$, $cellCounts$$9$$, $availSpace$$106_columnCount$$10$$) {
  if(0 < D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$51$$)) {
    if("counts" == D.$DvtNBoxDataUtils$$.$getCellContent$($nbox$$51$$)) {
      $container$$161_rowCount$$15$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$51$$);
      $availSpace$$106_columnCount$$10$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$51$$);
      for(var $bodyCountLabels$$ = [], $r$$61$$ = 0;$r$$61$$ < $container$$161_rowCount$$15$$;$r$$61$$++) {
        for(var $c$$42$$ = 0;$c$$42$$ < $availSpace$$106_columnCount$$10$$;$c$$42$$++) {
          $bodyCountLabels$$.push($r$$61$$ * $availSpace$$106_columnCount$$10$$ + $c$$42$$)
        }
      }
      D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$51$$, $cellCounts$$9$$, $bodyCountLabels$$)
    }else {
      D.$DvtNBoxDataUtils$$.$getGrouping$($nbox$$51$$) ? (D.$DvtNBoxRenderer$$.$_renderCategoryNodes$($nbox$$51$$, $container$$161_rowCount$$15$$, $availSpace$$106_columnCount$$10$$), D.$DvtNBoxRenderer$$.$_renderDrawer$($nbox$$51$$, $container$$161_rowCount$$15$$, $availSpace$$106_columnCount$$10$$)) : D.$DvtNBoxRenderer$$.$_renderIndividualNodes$($nbox$$51$$, $cellCounts$$9$$)
    }
  }
};
D.$DvtNBoxRenderer$$.$_renderIndividualNodes$ = function $$DvtNBoxRenderer$$$$_renderIndividualNodes$$($nbox$$52$$, $cellCounts$$10$$) {
  var $gridGap$$4$$ = $nbox$$52$$.$getOptions$().__layout.gridGap, $rtl$$28$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$52$$.$getCtx$()), $nodeLayout$$11$$ = D.$DvtNBoxNodeRenderer$$.$calculateNodeLayout$($nbox$$52$$), $hGridSize$$1$$ = $nodeLayout$$11$$.indicatorSectionWidth + $nodeLayout$$11$$.iconSectionWidth + $nodeLayout$$11$$.labelSectionWidth + $gridGap$$4$$, $vGridSize$$1$$ = $nodeLayout$$11$$.nodeHeight + $gridGap$$4$$, $nodeCount$$10_rowCount$$16$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$52$$), 
  $gridPos$$1$$ = [], $r$$62_renderPasses$$1$$ = ["normal"], $alphaFade$$2_columnCount$$11$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$52$$), $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$52$$), $bodyCountLabels$$1_highlightedMap$$3$$ = {};
  if($cell$$45_highlightedItems$$4_prevNodeCellIndex$$) {
    for(var $cellLayout$$11_gridRow$$1_i$$734$$ = 0;$cellLayout$$11_gridRow$$1_i$$734$$ < $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.length;$cellLayout$$11_gridRow$$1_i$$734$$++) {
      $bodyCountLabels$$1_highlightedMap$$3$$[$cell$$45_highlightedItems$$4_prevNodeCellIndex$$[$cellLayout$$11_gridRow$$1_i$$734$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
    $r$$62_renderPasses$$1$$ = ["highlighted", "unhighlighted"]
  }
  for(var $c$$43_p$$28$$ = 0;$c$$43_p$$28$$ < $r$$62_renderPasses$$1$$.length;$c$$43_p$$28$$++) {
    for(var $n$$23_overflowContainer$$ = 0;$n$$23_overflowContainer$$ < $nodeCount$$10_rowCount$$16$$;$n$$23_overflowContainer$$++) {
      var $node$$268$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$52$$, $n$$23_overflowContainer$$);
      if(!D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$52$$, $node$$268$$) && ("normal" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] || "highlighted" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] && $bodyCountLabels$$1_highlightedMap$$3$$[$node$$268$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] && !$bodyCountLabels$$1_highlightedMap$$3$$[$node$$268$$[D.$DvtNBoxConstants$$.ID]])) {
        var $cellIndex$$10$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$52$$, $node$$268$$);
        if(!D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$52$$, $cellIndex$$10$$)) {
          $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$52$$, $cellIndex$$10$$);
          (0,window.isNaN)($gridPos$$1$$[$cellIndex$$10$$]) && ($gridPos$$1$$[$cellIndex$$10$$] = 0);
          var $cellLayout$$11_gridRow$$1_i$$734$$ = $nodeLayout$$11$$.cellLayouts[$cellIndex$$10$$], $cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellLayout$$11_gridRow$$1_i$$734$$.cellRows, $cellColumns$$1_prevNode$$1$$ = $cellLayout$$11_gridRow$$1_i$$734$$.cellColumns;
          if(!(0 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ || 0 == $cellColumns$$1_prevNode$$1$$ || 1 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ && 1 == $cellColumns$$1_prevNode$$1$$ && $cellLayout$$11_gridRow$$1_i$$734$$.overflow)) {
            if($cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellRows$$1_gridXOrigin$$1_maxNodes$$ * $cellColumns$$1_prevNode$$1$$ - ($cellLayout$$11_gridRow$$1_i$$734$$.overflow ? 1 : 0), 0 > $cellRows$$1_gridXOrigin$$1_maxNodes$$ || $gridPos$$1$$[$cellIndex$$10$$] < $cellRows$$1_gridXOrigin$$1_maxNodes$$) {
              var $cellContainer$$5_ci$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$52$$, $cell$$45_highlightedItems$$4_prevNodeCellIndex$$).$getChildContainer$(), $scrolling$$ = $cellContainer$$5_ci$$3$$ instanceof D.$DvtSimpleScrollableContainer$$, $nodeContainer$$10$$ = D.$DvtNBoxNode$$.newInstance($nbox$$52$$, $node$$268$$), $cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.__childArea.x + ($cell$$45_highlightedItems$$4_prevNodeCellIndex$$.__childArea.$w$ - 
              $cellLayout$$11_gridRow$$1_i$$734$$.cellColumns * $hGridSize$$1$$ + $gridGap$$4$$) / 2, $cellData$$15_gridYOrigin$$1$$ = $scrolling$$ ? $gridGap$$4$$ : $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.__childArea.y, $gridColumn$$1$$ = $gridPos$$1$$[$cellIndex$$10$$] % $cellColumns$$1_prevNode$$1$$;
              $rtl$$28$$ && ($gridColumn$$1$$ = $cellColumns$$1_prevNode$$1$$ - $gridColumn$$1$$ - 1);
              $cellLayout$$11_gridRow$$1_i$$734$$ = window.Math.floor($gridPos$$1$$[$cellIndex$$10$$] / $cellColumns$$1_prevNode$$1$$);
              (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$10$$, $cellRows$$1_gridXOrigin$$1_maxNodes$$ + $hGridSize$$1$$ * $gridColumn$$1$$, $cellData$$15_gridYOrigin$$1$$ + $vGridSize$$1$$ * $cellLayout$$11_gridRow$$1_i$$734$$);
              $gridPos$$1$$[$cellIndex$$10$$]++;
              $nodeContainer$$10$$.$render$($scrolling$$ ? $cellContainer$$5_ci$$3$$.$_container$ : $cellContainer$$5_ci$$3$$, $nodeLayout$$11$$);
              "unhighlighted" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] && $nodeContainer$$10$$.$setAlpha$($alphaFade$$2_columnCount$$11$$);
              $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = ($cellColumns$$1_prevNode$$1$$ = 0 < $n$$23_overflowContainer$$ ? D.$DvtNBoxDataUtils$$.$getNode$($nbox$$52$$, $n$$23_overflowContainer$$ - 1) : D.$JSCompiler_alias_NULL$$) ? D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$52$$, $cellColumns$$1_prevNode$$1$$) : -1;
              $cellColumns$$1_prevNode$$1$$ && $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ == $cellIndex$$10$$ && ($node$$268$$.__prev = $cellColumns$$1_prevNode$$1$$, $cellColumns$$1_prevNode$$1$$.__next = $node$$268$$)
            }
          }
        }
      }
    }
  }
  $nodeCount$$10_rowCount$$16$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$52$$);
  $alphaFade$$2_columnCount$$11$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$52$$);
  $bodyCountLabels$$1_highlightedMap$$3$$ = [];
  for($r$$62_renderPasses$$1$$ = 0;$r$$62_renderPasses$$1$$ < $nodeCount$$10_rowCount$$16$$;$r$$62_renderPasses$$1$$++) {
    for($c$$43_p$$28$$ = 0;$c$$43_p$$28$$ < $alphaFade$$2_columnCount$$11$$;$c$$43_p$$28$$++) {
      $cellContainer$$5_ci$$3$$ = $r$$62_renderPasses$$1$$ * $alphaFade$$2_columnCount$$11$$ + $c$$43_p$$28$$;
      if(!D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$52$$, $cellContainer$$5_ci$$3$$) && ($cellData$$15_gridYOrigin$$1$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$52$$, $cellContainer$$5_ci$$3$$), $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$52$$, $cellData$$15_gridYOrigin$$1$$), $cellLayout$$11_gridRow$$1_i$$734$$ = $nodeLayout$$11$$.cellLayouts[$cellContainer$$5_ci$$3$$], $cellLayout$$11_gridRow$$1_i$$734$$.overflow)) {
        if($cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellLayout$$11_gridRow$$1_i$$734$$.cellRows, $cellColumns$$1_prevNode$$1$$ = $cellLayout$$11_gridRow$$1_i$$734$$.cellColumns, 0 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ || 0 == $cellColumns$$1_prevNode$$1$$ || 1 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ && 1 == $cellColumns$$1_prevNode$$1$$ && $cellLayout$$11_gridRow$$1_i$$734$$.overflow) {
          $bodyCountLabels$$1_highlightedMap$$3$$.push($cellContainer$$5_ci$$3$$)
        }else {
          $n$$23_overflowContainer$$ = D.$DvtNBoxNodeOverflow$$.newInstance($nbox$$52$$, $cell$$45_highlightedItems$$4_prevNodeCellIndex$$);
          if(($cellColumns$$1_prevNode$$1$$ = D.$DvtNBoxDataUtils$$.$getLastNavigableNode$($nbox$$52$$, $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.$getChildContainer$())) && $cellColumns$$1_prevNode$$1$$ instanceof D.$DvtNBoxNode$$) {
            $n$$23_overflowContainer$$.__prev = $cellColumns$$1_prevNode$$1$$.getData(), $cellColumns$$1_prevNode$$1$$.getData().__next = $n$$23_overflowContainer$$
          }
          D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$52$$, $n$$23_overflowContainer$$, $n$$23_overflowContainer$$);
          D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$52$$, $cellData$$15_gridYOrigin$$1$$, $n$$23_overflowContainer$$, "overflow");
          $cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellData$$15_gridYOrigin$$1$$.__childArea.x + ($cellData$$15_gridYOrigin$$1$$.__childArea.$w$ - $cellLayout$$11_gridRow$$1_i$$734$$.cellColumns * $hGridSize$$1$$ + $gridGap$$4$$) / 2;
          $cellData$$15_gridYOrigin$$1$$ = $cellData$$15_gridYOrigin$$1$$.__childArea.y;
          $gridColumn$$1$$ = $gridPos$$1$$[$cellContainer$$5_ci$$3$$] % $cellLayout$$11_gridRow$$1_i$$734$$.cellColumns;
          $rtl$$28$$ && ($gridColumn$$1$$ = $cellLayout$$11_gridRow$$1_i$$734$$.cellColumns - $gridColumn$$1$$ - 1);
          $cellLayout$$11_gridRow$$1_i$$734$$ = window.Math.floor($gridPos$$1$$[$cellContainer$$5_ci$$3$$] / $cellLayout$$11_gridRow$$1_i$$734$$.cellColumns);
          (0,D.$JSCompiler_StaticMethods_setTranslate$$)($n$$23_overflowContainer$$, $cellRows$$1_gridXOrigin$$1_maxNodes$$ + $hGridSize$$1$$ * $gridColumn$$1$$, $cellData$$15_gridYOrigin$$1$$ + $vGridSize$$1$$ * $cellLayout$$11_gridRow$$1_i$$734$$);
          $n$$23_overflowContainer$$.$render$($cell$$45_highlightedItems$$4_prevNodeCellIndex$$.$getChildContainer$(), $hGridSize$$1$$ - $gridGap$$4$$, $vGridSize$$1$$ - $gridGap$$4$$)
        }
      }
      D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$52$$, $cellContainer$$5_ci$$3$$) && ($cellContainer$$5_ci$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$52$$, D.$DvtNBoxDataUtils$$.$getCell$($nbox$$52$$, $cellContainer$$5_ci$$3$$)).$getChildContainer$(), (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($cellContainer$$5_ci$$3$$))
    }
  }
  0 < $bodyCountLabels$$1_highlightedMap$$3$$.length && D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$52$$, $cellCounts$$10$$, $bodyCountLabels$$1_highlightedMap$$3$$)
};
D.$DvtNBoxRenderer$$.$_renderCategoryNodes$ = function $$DvtNBoxRenderer$$$$_renderCategoryNodes$$($nbox$$53$$, $cellCount$$5_columnCount$$12_container$$163$$, $availSpace$$108_layouts$$) {
  var $groups$$9$$ = {}, $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$53$$), $groupBehavior$$4_scale$$62$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$53$$), $cell$$46_rtl$$29$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$53$$.$getCtx$()), $highlightedItems$$5_node$$269_positions$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$53$$), $childContainer$$4_highlightedMap$$4_xPos$$2$$ = {};
  if($highlightedItems$$5_node$$269_positions$$) {
    for(var $i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = 0;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$ < $highlightedItems$$5_node$$269_positions$$.length;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$++) {
      $childContainer$$4_highlightedMap$$4_xPos$$2$$[$highlightedItems$$5_node$$269_positions$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
  }
  for($i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = 0;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$ < $nodeContainer$$11_nodeCount$$11$$;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$++) {
    if($highlightedItems$$5_node$$269_positions$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$53$$, $i$$735_n$$24_otherGroups$$1_rowCount$$17$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$53$$, $highlightedItems$$5_node$$269_positions$$)) {
      var $groupContainer_scrolling$$1_yPos$$2$$ = $groups$$9$$;
      if($groupBehavior$$4_scale$$62$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        var $groupId$$22_j$$97$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$53$$, $highlightedItems$$5_node$$269_positions$$) + "", $groupContainer_scrolling$$1_yPos$$2$$ = $groups$$9$$[$groupId$$22_j$$97$$];
        $groupContainer_scrolling$$1_yPos$$2$$ || ($groupContainer_scrolling$$1_yPos$$2$$ = {}, $groups$$9$$[$groupId$$22_j$$97$$] = $groupContainer_scrolling$$1_yPos$$2$$)
      }
      var $groupId$$22_j$$97$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$($highlightedItems$$5_node$$269_positions$$), $group$$32$$ = $groupContainer_scrolling$$1_yPos$$2$$[$groupId$$22_j$$97$$];
      $group$$32$$ || ($group$$32$$ = {}, $group$$32$$[D.$DvtNBoxConstants$$.ID] = $groupId$$22_j$$97$$, $groupBehavior$$4_scale$$62$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($group$$32$$[D.$DvtNBoxConstants$$.$CELL$] = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$53$$, $highlightedItems$$5_node$$269_positions$$)), $group$$32$$.nodeIndices = [], $group$$32$$.highlightedCount = 0, $groupContainer_scrolling$$1_yPos$$2$$[$groupId$$22_j$$97$$] = $group$$32$$);
      $group$$32$$.nodeIndices.push($i$$735_n$$24_otherGroups$$1_rowCount$$17$$);
      $childContainer$$4_highlightedMap$$4_xPos$$2$$[D.$DvtNBoxDataUtils$$.$getNode$($nbox$$53$$, $i$$735_n$$24_otherGroups$$1_rowCount$$17$$)[D.$DvtNBoxConstants$$.ID]] && $group$$32$$.highlightedCount++
    }
  }
  if($groupBehavior$$4_scale$$62$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    var $i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = {}, $cellId_center$$10_sortedGroups$$;
    for($cellId_center$$10_sortedGroups$$ in $groups$$9$$) {
      $i$$735_n$$24_otherGroups$$1_rowCount$$17$$[$cellId_center$$10_sortedGroups$$] = D.$DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$53$$, $groups$$9$$[$cellId_center$$10_sortedGroups$$])
    }
  }else {
    $i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = D.$DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$53$$, $groups$$9$$)
  }
  $groups$$9$$ = $i$$735_n$$24_otherGroups$$1_rowCount$$17$$;
  $nbox$$53$$.$getOptions$().__groups = $groups$$9$$;
  if($groupBehavior$$4_scale$$62$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    $cellId_center$$10_sortedGroups$$ = [];
    for($group$$32$$ in $groups$$9$$) {
      $cellId_center$$10_sortedGroups$$.push($group$$32$$)
    }
    $cellId_center$$10_sortedGroups$$.sort(function($nbox$$53$$, $cellCount$$5_columnCount$$12_container$$163$$) {
      return D.$DvtNBoxCategoryNode$$.$compareSize$($groups$$9$$[$nbox$$53$$], $groups$$9$$[$cellCount$$5_columnCount$$12_container$$163$$])
    });
    $groupBehavior$$4_scale$$62$$ = window.Math.sqrt(0.15 * $availSpace$$108_layouts$$.$w$ * $availSpace$$108_layouts$$.$h$ / $nodeContainer$$11_nodeCount$$11$$);
    for($i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = 0;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$ < $cellId_center$$10_sortedGroups$$.length;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$++) {
      $group$$32$$ = $cellId_center$$10_sortedGroups$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$];
      $groupContainer_scrolling$$1_yPos$$2$$ = $childContainer$$4_highlightedMap$$4_xPos$$2$$ = 0;
      $nodeContainer$$11_nodeCount$$11$$ = $groups$$9$$[$group$$32$$].nodeIndices.length;
      for($groupId$$22_j$$97$$ = 0;$groupId$$22_j$$97$$ < $nodeContainer$$11_nodeCount$$11$$;$groupId$$22_j$$97$$++) {
        $highlightedItems$$5_node$$269_positions$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$53$$, $groups$$9$$[$group$$32$$].nodeIndices[$groupId$$22_j$$97$$]), $childContainer$$4_highlightedMap$$4_xPos$$2$$ += D.$DvtNBoxDataUtils$$.$getXPercentage$($nbox$$53$$, $highlightedItems$$5_node$$269_positions$$), $groupContainer_scrolling$$1_yPos$$2$$ += D.$DvtNBoxDataUtils$$.$getYPercentage$($nbox$$53$$, $highlightedItems$$5_node$$269_positions$$)
      }
      $childContainer$$4_highlightedMap$$4_xPos$$2$$ /= $nodeContainer$$11_nodeCount$$11$$;
      $groupContainer_scrolling$$1_yPos$$2$$ /= $nodeContainer$$11_nodeCount$$11$$;
      $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxCategoryNode$$.newInstance($nbox$$53$$, $groups$$9$$[$group$$32$$]);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$11_nodeCount$$11$$, $availSpace$$108_layouts$$.x + ($cell$$46_rtl$$29$$ ? 1 - $childContainer$$4_highlightedMap$$4_xPos$$2$$ : $childContainer$$4_highlightedMap$$4_xPos$$2$$) * $availSpace$$108_layouts$$.$w$, $availSpace$$108_layouts$$.y + (1 - $groupContainer_scrolling$$1_yPos$$2$$) * $availSpace$$108_layouts$$.$h$);
      $nodeContainer$$11_nodeCount$$11$$.$render$($cellCount$$5_columnCount$$12_container$$163$$, $groupBehavior$$4_scale$$62$$, 0);
      $nodeContainer$$11_nodeCount$$11$$.$setMaxAlpha$(0.8)
    }
  }else {
    if($groupBehavior$$4_scale$$62$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      $i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$53$$);
      $cellCount$$5_columnCount$$12_container$$163$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$53$$);
      $cellCount$$5_columnCount$$12_container$$163$$ *= $i$$735_n$$24_otherGroups$$1_rowCount$$17$$;
      $availSpace$$108_layouts$$ = [];
      for($i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = 0;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$163$$;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$++) {
        $groups$$9$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $i$$735_n$$24_otherGroups$$1_rowCount$$17$$) && ($cell$$46_rtl$$29$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$53$$, $i$$735_n$$24_otherGroups$$1_rowCount$$17$$), $availSpace$$108_layouts$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$] = D.$DvtNBoxRenderer$$.$_forceLayoutGroups$($groups$$9$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$], $cell$$46_rtl$$29$$.__childArea.$w$, $cell$$46_rtl$$29$$.__childArea.$h$))
      }
      $groupBehavior$$4_scale$$62$$ = 40;
      for($i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = 0;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$163$$;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$++) {
        $groups$$9$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $i$$735_n$$24_otherGroups$$1_rowCount$$17$$) && ($groupBehavior$$4_scale$$62$$ = window.Math.min($groupBehavior$$4_scale$$62$$, $availSpace$$108_layouts$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$].scale))
      }
      for($i$$735_n$$24_otherGroups$$1_rowCount$$17$$ = 0;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$163$$;$i$$735_n$$24_otherGroups$$1_rowCount$$17$$++) {
        if($groups$$9$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $i$$735_n$$24_otherGroups$$1_rowCount$$17$$)) {
          for($group$$32$$ in $highlightedItems$$5_node$$269_positions$$ = $availSpace$$108_layouts$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$].positions, $cellId_center$$10_sortedGroups$$ = $availSpace$$108_layouts$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$].center, $cell$$46_rtl$$29$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$53$$, $i$$735_n$$24_otherGroups$$1_rowCount$$17$$), $childContainer$$4_highlightedMap$$4_xPos$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$53$$, $cell$$46_rtl$$29$$).$getChildContainer$(), 
          $groupContainer_scrolling$$1_yPos$$2$$ = $childContainer$$4_highlightedMap$$4_xPos$$2$$ instanceof D.$DvtSimpleScrollableContainer$$, $highlightedItems$$5_node$$269_positions$$) {
            $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxCategoryNode$$.newInstance($nbox$$53$$, $groups$$9$$[$i$$735_n$$24_otherGroups$$1_rowCount$$17$$][$group$$32$$]), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$11_nodeCount$$11$$, $cell$$46_rtl$$29$$.__childArea.x + $cell$$46_rtl$$29$$.__childArea.$w$ / 2 + $groupBehavior$$4_scale$$62$$ * ($highlightedItems$$5_node$$269_positions$$[$group$$32$$].x - $cellId_center$$10_sortedGroups$$.x), ($groupContainer_scrolling$$1_yPos$$2$$ ? 
            0 : $cell$$46_rtl$$29$$.__childArea.y) + $cell$$46_rtl$$29$$.__childArea.$h$ / 2 + $groupBehavior$$4_scale$$62$$ * ($highlightedItems$$5_node$$269_positions$$[$group$$32$$].y - $cellId_center$$10_sortedGroups$$.y)), $nodeContainer$$11_nodeCount$$11$$.$render$($groupContainer_scrolling$$1_yPos$$2$$ ? $childContainer$$4_highlightedMap$$4_xPos$$2$$.$_container$ : $childContainer$$4_highlightedMap$$4_xPos$$2$$, $groupBehavior$$4_scale$$62$$, 3)
          }
        }
      }
    }
  }
};
D.$DvtNBoxRenderer$$.$getRowDimensions$ = function $$DvtNBoxRenderer$$$$getRowDimensions$$($nbox$$54_rowCount$$18$$, $rowIndex$$17$$, $availSpace$$109$$) {
  $nbox$$54_rowCount$$18$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$54_rowCount$$18$$);
  var $rowHeight$$10$$ = $availSpace$$109$$.$h$ / $nbox$$54_rowCount$$18$$;
  return new D.$DvtRectangle$$($availSpace$$109$$.x, $availSpace$$109$$.y + ($nbox$$54_rowCount$$18$$ - $rowIndex$$17$$ - 1) * $rowHeight$$10$$, $availSpace$$109$$.$w$, $rowHeight$$10$$)
};
D.$DvtNBoxRenderer$$.$getColumnDimensions$ = function $$DvtNBoxRenderer$$$$getColumnDimensions$$($nbox$$55_rtl$$30$$, $columnIndex$$5$$, $availSpace$$110$$) {
  var $columnCount$$13_columnWidth$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$55_rtl$$30$$), $columnCount$$13_columnWidth$$1$$ = $availSpace$$110$$.$w$ / $columnCount$$13_columnWidth$$1$$;
  $nbox$$55_rtl$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$55_rtl$$30$$.$getCtx$());
  return new D.$DvtRectangle$$($availSpace$$110$$.x + ($nbox$$55_rtl$$30$$ ? $availSpace$$110$$.$w$ - $columnCount$$13_columnWidth$$1$$ : 0) + ($nbox$$55_rtl$$30$$ ? -1 : 1) * $columnIndex$$5$$ * $columnCount$$13_columnWidth$$1$$, $availSpace$$110$$.y, $columnCount$$13_columnWidth$$1$$, $availSpace$$110$$.$h$)
};
D.$DvtNBoxRenderer$$.$_adjustAvailSpace$ = function $$DvtNBoxRenderer$$$$_adjustAvailSpace$$($availSpace$$111$$) {
  $availSpace$$111$$.x = window.Math.round($availSpace$$111$$.x);
  $availSpace$$111$$.y = window.Math.round($availSpace$$111$$.y);
  $availSpace$$111$$.$w$ = window.Math.round($availSpace$$111$$.$w$);
  $availSpace$$111$$.$h$ = window.Math.round($availSpace$$111$$.$h$)
};
D.$DvtNBoxRenderer$$.$positionText$ = function $$DvtNBoxRenderer$$$$positionText$$($text$$98$$, $x$$243$$, $y$$217$$, $angle$$51$$) {
  $text$$98$$.$setX$($x$$243$$);
  $text$$98$$.$setY$($y$$217$$);
  if($angle$$51$$) {
    var $matrix$$18$$ = $text$$98$$.$getMatrix$();
    $matrix$$18$$.translate(-$x$$243$$, -$y$$217$$);
    $matrix$$18$$.rotate($angle$$51$$);
    $matrix$$18$$.translate($x$$243$$, $y$$217$$);
    $text$$98$$.$setMatrix$($matrix$$18$$)
  }
};
D.$DvtNBoxRenderer$$.$_renderInitialSelection$ = function $$DvtNBoxRenderer$$$$_renderInitialSelection$$($nbox$$56$$) {
  if($nbox$$56$$.$isSelectionSupported$()) {
    var $selectedMap$$1$$ = {}, $selectedIds$$8$$ = [], $nodeIndices$$3_selectedItems$$1$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$56$$);
    if($nodeIndices$$3_selectedItems$$1$$) {
      for(var $i$$736$$ = 0;$i$$736$$ < $nodeIndices$$3_selectedItems$$1$$.length;$i$$736$$++) {
        $selectedIds$$8$$.push($nodeIndices$$3_selectedItems$$1$$[$i$$736$$]), $selectedMap$$1$$[$nodeIndices$$3_selectedItems$$1$$[$i$$736$$]] = D.$JSCompiler_alias_TRUE$$
      }
      var $objects$$4$$ = $nbox$$56$$.$getObjects$();
      if(D.$DvtNBoxDataUtils$$.$getGrouping$($nbox$$56$$)) {
        for($i$$736$$ = 0;$i$$736$$ < $objects$$4$$.length;$i$$736$$++) {
          if($objects$$4$$[$i$$736$$] instanceof D.$DvtNBoxCategoryNode$$) {
            for(var $nodeIndices$$3_selectedItems$$1$$ = $objects$$4$$[$i$$736$$].getData().nodeIndices, $selected$$38$$ = D.$JSCompiler_alias_TRUE$$, $j$$98$$ = 0;$j$$98$$ < $nodeIndices$$3_selectedItems$$1$$.length;$j$$98$$++) {
              var $node$$270$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$56$$, $nodeIndices$$3_selectedItems$$1$$[$j$$98$$]);
              if(!$selectedMap$$1$$[$node$$270$$[D.$DvtNBoxConstants$$.ID]]) {
                $selected$$38$$ = D.$JSCompiler_alias_FALSE$$;
                break
              }
            }
            $selected$$38$$ && $selectedIds$$8$$.push($objects$$4$$[$i$$736$$].getId())
          }
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($nbox$$56$$.$getSelectionHandler$(), $selectedIds$$8$$, $objects$$4$$)
  }
};
D.$DvtNBoxRenderer$$.$_forceLayoutGroups$ = function $$DvtNBoxRenderer$$$$_forceLayoutGroups$$($groups$$10$$, $width$$121$$, $height$$112$$) {
  var $sortedGroups$$1$$ = [], $group$$33_iPos_position$$60$$;
  for($group$$33_iPos_position$$60$$ in $groups$$10$$) {
    $sortedGroups$$1$$.push($group$$33_iPos_position$$60$$)
  }
  $sortedGroups$$1$$.sort(function($width$$121$$, $height$$112$$) {
    return D.$DvtNBoxCategoryNode$$.$compareSize$($groups$$10$$[$width$$121$$], $groups$$10$$[$height$$112$$])
  });
  for(var $positions$$1$$ = {}, $alpha$$45_left$$17_thetaStep$$ = 2 * window.Math.PI / $sortedGroups$$1$$.length, $i$$737$$ = 0;$i$$737$$ < $sortedGroups$$1$$.length;$i$$737$$++) {
    $positions$$1$$[$sortedGroups$$1$$[$i$$737$$]] = D.$DvtVectorUtils$$.$createVector$($i$$737$$ * window.Math.cos($alpha$$45_left$$17_thetaStep$$ * $i$$737$$), $i$$737$$ * window.Math.sin($alpha$$45_left$$17_thetaStep$$ * $i$$737$$))
  }
  for(var $alpha$$45_left$$17_thetaStep$$ = 1, $right$$12_xGravity$$ = -0.25 * $height$$112$$ / window.Math.max($width$$121$$, $height$$112$$), $top$$16_yGravity$$ = -0.25 * $width$$121$$ / window.Math.max($width$$121$$, $height$$112$$);0.005 < $alpha$$45_left$$17_thetaStep$$;) {
    for(var $bottom$$11_displacement$$3$$ = {}, $i$$737$$ = 0;$i$$737$$ < $sortedGroups$$1$$.length;$i$$737$$++) {
      var $iGroup_side$$25$$ = $sortedGroups$$1$$[$i$$737$$];
      $group$$33_iPos_position$$60$$ = $positions$$1$$[$iGroup_side$$25$$];
      var $iSize$$ = $groups$$10$$[$iGroup_side$$25$$].nodeIndices.length;
      $bottom$$11_displacement$$3$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$createVector$($alpha$$45_left$$17_thetaStep$$ * $right$$12_xGravity$$ * $group$$33_iPos_position$$60$$.x, $alpha$$45_left$$17_thetaStep$$ * $top$$16_yGravity$$ * $group$$33_iPos_position$$60$$.y);
      for(var $j$$99$$ = 0;$j$$99$$ < $sortedGroups$$1$$.length;$j$$99$$++) {
        if($i$$737$$ != $j$$99$$) {
          for(var $difference$$1_jGroup$$ = $sortedGroups$$1$$[$j$$99$$], $jSize$$ = $groups$$10$$[$difference$$1_jGroup$$].nodeIndices.length, $difference$$1_jGroup$$ = D.$DvtVectorUtils$$.$subtractVectors$($group$$33_iPos_position$$60$$, $positions$$1$$[$difference$$1_jGroup$$]), $distance$$9$$ = D.$DvtVectorUtils$$.$getMagnitude$($difference$$1_jGroup$$), $angle$$52_minimumDistance$$ = window.Math.atan2($difference$$1_jGroup$$.y, $difference$$1_jGroup$$.x);0 > $angle$$52_minimumDistance$$;) {
            $angle$$52_minimumDistance$$ += window.Math.PI / 2
          }
          for(;$angle$$52_minimumDistance$$ >= window.Math.PI / 2;) {
            $angle$$52_minimumDistance$$ -= window.Math.PI / 2
          }
          $angle$$52_minimumDistance$$ = $angle$$52_minimumDistance$$ < window.Math.PI / 4 ? 0.5 * (window.Math.sqrt($iSize$$) + window.Math.sqrt($jSize$$)) / window.Math.cos($angle$$52_minimumDistance$$) : 0.5 * (window.Math.sqrt($iSize$$) + window.Math.sqrt($jSize$$)) / window.Math.sin($angle$$52_minimumDistance$$);
          $distance$$9$$ < $angle$$52_minimumDistance$$ && ($bottom$$11_displacement$$3$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$addVectors$($bottom$$11_displacement$$3$$[$iGroup_side$$25$$], D.$DvtVectorUtils$$.$scaleVector$($difference$$1_jGroup$$, (1 - $alpha$$45_left$$17_thetaStep$$) * $jSize$$ / ($iSize$$ + $jSize$$) * (($angle$$52_minimumDistance$$ - $distance$$9$$) / $distance$$9$$))))
        }
      }
    }
    for($i$$737$$ = 0;$i$$737$$ < $sortedGroups$$1$$.length;$i$$737$$++) {
      $iGroup_side$$25$$ = $sortedGroups$$1$$[$i$$737$$], $positions$$1$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$addVectors$($positions$$1$$[$iGroup_side$$25$$], $bottom$$11_displacement$$3$$[$iGroup_side$$25$$])
    }
    $alpha$$45_left$$17_thetaStep$$ *= 0.98
  }
  $alpha$$45_left$$17_thetaStep$$ = window.Number.MAX_VALUE;
  $right$$12_xGravity$$ = -window.Number.MAX_VALUE;
  $top$$16_yGravity$$ = window.Number.MAX_VALUE;
  $bottom$$11_displacement$$3$$ = -window.Number.MAX_VALUE;
  for($i$$737$$ = 0;$i$$737$$ < $sortedGroups$$1$$.length;$i$$737$$++) {
    $group$$33_iPos_position$$60$$ = $sortedGroups$$1$$[$i$$737$$], $iGroup_side$$25$$ = window.Math.sqrt($groups$$10$$[$group$$33_iPos_position$$60$$].nodeIndices.length), $group$$33_iPos_position$$60$$ = $positions$$1$$[$group$$33_iPos_position$$60$$], $alpha$$45_left$$17_thetaStep$$ = window.Math.min($alpha$$45_left$$17_thetaStep$$, $group$$33_iPos_position$$60$$.x - $iGroup_side$$25$$ / 2), $right$$12_xGravity$$ = window.Math.max($right$$12_xGravity$$, $group$$33_iPos_position$$60$$.x + $iGroup_side$$25$$ / 
    2), $top$$16_yGravity$$ = window.Math.min($top$$16_yGravity$$, $group$$33_iPos_position$$60$$.y - $iGroup_side$$25$$ / 2), $bottom$$11_displacement$$3$$ = window.Math.max($bottom$$11_displacement$$3$$, $group$$33_iPos_position$$60$$.y + $iGroup_side$$25$$ / 2)
  }
  return{scale:window.Math.min($width$$121$$ / ($right$$12_xGravity$$ - $alpha$$45_left$$17_thetaStep$$), $height$$112$$ / ($bottom$$11_displacement$$3$$ - $top$$16_yGravity$$)), center:new D.$DvtPoint$$(($alpha$$45_left$$17_thetaStep$$ + $right$$12_xGravity$$) / 2, ($top$$16_yGravity$$ + $bottom$$11_displacement$$3$$) / 2), positions:$positions$$1$$}
};
D.$DvtNBoxRenderer$$.$_processOtherThreshold$ = function $$DvtNBoxRenderer$$$$_processOtherThreshold$$($nbox$$57$$, $groups$$11$$) {
  var $nodeCount$$12_otherCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$57$$), $nodeCount$$12_otherCount$$ = D.$DvtNBoxDataUtils$$.$getOtherThreshold$($nbox$$57$$) * $nodeCount$$12_otherCount$$;
  if(1 >= $nodeCount$$12_otherCount$$) {
    return $groups$$11$$
  }
  var $processedGroups$$ = {}, $otherGroup$$ = {};
  if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$57$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    for(var $groupId$$23$$ in $groups$$11$$) {
      var $group$$34$$ = $groups$$11$$[$groupId$$23$$];
      $otherGroup$$.cell = $group$$34$$.cell;
      break
    }
  }
  $otherGroup$$.id = "other";
  $otherGroup$$.nodeIndices = [];
  $otherGroup$$.otherNode = D.$JSCompiler_alias_TRUE$$;
  for($groupId$$23$$ in $groups$$11$$) {
    if($group$$34$$ = $groups$$11$$[$groupId$$23$$], $group$$34$$.nodeIndices.length < $nodeCount$$12_otherCount$$) {
      for(var $i$$738$$ = 0;$i$$738$$ < $group$$34$$.nodeIndices.length;$i$$738$$++) {
        $otherGroup$$.nodeIndices.push($group$$34$$.nodeIndices[$i$$738$$])
      }
    }else {
      $processedGroups$$[$groupId$$23$$] = $group$$34$$
    }
  }
  0 < $otherGroup$$.nodeIndices.length && ($processedGroups$$.other = $otherGroup$$);
  return $processedGroups$$
};
D.$DvtNBoxRenderer$$.$_renderDrawer$ = function $$DvtNBoxRenderer$$$$_renderDrawer$$($nbox$$58$$, $container$$164_event$$593$$, $availSpace$$112$$) {
  var $drawerData$$5$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($nbox$$58$$);
  $drawerData$$5$$ && (D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$58$$, $drawerData$$5$$.id) ? D.$DvtNBoxDrawer$$.newInstance($nbox$$58$$, $drawerData$$5$$).$render$($container$$164_event$$593$$, $availSpace$$112$$) : ($nbox$$58$$.$getOptions$()[D.$DvtNBoxConstants$$.$DRAWER$] = D.$JSCompiler_alias_NULL$$, $container$$164_event$$593$$ = new D.$DvtSetPropertyEvent$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($container$$164_event$$593$$, D.$DvtNBoxConstants$$.$DRAWER$, D.$JSCompiler_alias_NULL$$), 
  $nbox$$58$$.$processEvent$($container$$164_event$$593$$)))
};
D.$DvtNBoxRenderer$$.$getGlobalMatrix$ = function $$DvtNBoxRenderer$$$$getGlobalMatrix$$($current$$7_displayable$$69$$) {
  var $matrix$$19$$ = $current$$7_displayable$$69$$.$getMatrix$().$clone$();
  for($current$$7_displayable$$69$$ = $current$$7_displayable$$69$$.getParent();$current$$7_displayable$$69$$;) {
    var $currentMatrix$$ = $current$$7_displayable$$69$$.$getMatrix$();
    $matrix$$19$$.translate($currentMatrix$$.$_tx$, $currentMatrix$$.$_ty$);
    $current$$7_displayable$$69$$ = $current$$7_displayable$$69$$.getParent()
  }
  return $matrix$$19$$
};
D.$DvtNBoxRenderer$$.$animateUpdate$ = function $$DvtNBoxRenderer$$$$animateUpdate$$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$) {
  D.$DvtNBoxRenderer$$.$_animateCells$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$);
  var $oldDrawer$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($oldNBox$$14$$), $oldDrawer$$3$$ = $oldDrawer$$3$$ ? $oldDrawer$$3$$.id : D.$JSCompiler_alias_NULL$$, $newDrawer$$2$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newNBox$$14$$), $newDrawer$$2$$ = $newDrawer$$2$$ ? $newDrawer$$2$$.id : D.$JSCompiler_alias_NULL$$;
  $oldDrawer$$3$$ == $newDrawer$$2$$ ? D.$DvtNBoxRenderer$$.$_animateNodes$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$) : D.$DvtNBoxRenderer$$.$_animateDrawer$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$)
};
D.$DvtNBoxRenderer$$.$_animateCells$ = function $$DvtNBoxRenderer$$$$_animateCells$$($animationHandler$$34$$, $oldNBox$$15$$, $newNBox$$15$$) {
  for(var $identical$$1_oldRowCount$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($oldNBox$$15$$), $newRowCount_oldColumnValue$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($newNBox$$15$$), $newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($oldNBox$$15$$), $newColumnCount$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($newNBox$$15$$), $newRowValue_oldCellCount$$ = $identical$$1_oldRowCount$$ * $newColumnValue_oldColumnCount_oldRowValue$$, $newCellCount$$ = $newRowCount_oldColumnValue$$ * 
  $newColumnCount$$, $oldCells$$ = [], $newCells$$ = [], $i$$739$$ = 0;$i$$739$$ < $newRowValue_oldCellCount$$;$i$$739$$++) {
    $oldCells$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$15$$, D.$DvtNBoxDataUtils$$.$getCell$($oldNBox$$15$$, $i$$739$$)))
  }
  for($i$$739$$ = 0;$i$$739$$ < $newCellCount$$;$i$$739$$++) {
    $newCells$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$15$$, D.$DvtNBoxDataUtils$$.$getCell$($newNBox$$15$$, $i$$739$$)))
  }
  if($identical$$1_oldRowCount$$ == $newRowCount_oldColumnValue$$ && $newColumnValue_oldColumnCount_oldRowValue$$ == $newColumnCount$$) {
    $identical$$1_oldRowCount$$ = D.$JSCompiler_alias_TRUE$$;
    for($i$$739$$ = 0;$i$$739$$ < $newRowCount_oldColumnValue$$;$i$$739$$++) {
      if($newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getRow$($oldNBox$$15$$, $i$$739$$)[D.$DvtNBoxConstants$$.ID], $newRowValue_oldCellCount$$ = D.$DvtNBoxDataUtils$$.$getRow$($newNBox$$15$$, $i$$739$$)[D.$DvtNBoxConstants$$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ != $newRowValue_oldCellCount$$) {
        $identical$$1_oldRowCount$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
    if($identical$$1_oldRowCount$$) {
      for($i$$739$$ = 0;$i$$739$$ < $newColumnCount$$;$i$$739$$++) {
        if($newRowCount_oldColumnValue$$ = D.$DvtNBoxDataUtils$$.$getColumn$($oldNBox$$15$$, $i$$739$$)[D.$DvtNBoxConstants$$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getColumn$($newNBox$$15$$, $i$$739$$)[D.$DvtNBoxConstants$$.ID], $newRowCount_oldColumnValue$$ != $newColumnValue_oldColumnCount_oldRowValue$$) {
          $identical$$1_oldRowCount$$ = D.$JSCompiler_alias_FALSE$$;
          break
        }
      }
    }
    if($identical$$1_oldRowCount$$) {
      (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, $oldCells$$, $newCells$$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, $oldCells$$, []);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, [], $newCells$$)
};
D.$DvtNBoxRenderer$$.$_animateNodes$ = function $$DvtNBoxRenderer$$$$_animateNodes$$($animationHandler$$35$$, $oldGroupNodes_oldNBox$$16$$, $newGroupNodes_newNBox$$16$$) {
  for(var $oldNodeCount$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($oldGroupNodes_oldNBox$$16$$), $newNodeCount$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($newGroupNodes_newNBox$$16$$), $oldNodes$$4$$ = [], $newNodes$$4$$ = [], $i$$740$$ = 0;$i$$740$$ < $oldNodeCount$$1$$;$i$$740$$++) {
    $oldNodes$$4$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($oldGroupNodes_oldNBox$$16$$, D.$DvtNBoxDataUtils$$.$getNode$($oldGroupNodes_oldNBox$$16$$, $i$$740$$)))
  }
  for($i$$740$$ = 0;$i$$740$$ < $newNodeCount$$1$$;$i$$740$$++) {
    $newNodes$$4$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($newGroupNodes_newNBox$$16$$, D.$DvtNBoxDataUtils$$.$getNode$($newGroupNodes_newNBox$$16$$, $i$$740$$)))
  }
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$35$$, $oldNodes$$4$$, $newNodes$$4$$);
  D.$DvtNBoxDataUtils$$.$getDrawer$($newGroupNodes_newNBox$$16$$) || ($oldGroupNodes_oldNBox$$16$$ = D.$DvtNBoxRenderer$$.$_getSortedGroups$($oldGroupNodes_oldNBox$$16$$), $newGroupNodes_newNBox$$16$$ = D.$DvtNBoxRenderer$$.$_getSortedGroups$($newGroupNodes_newNBox$$16$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$35$$, $oldGroupNodes_oldNBox$$16$$, $newGroupNodes_newNBox$$16$$))
};
D.$DvtNBoxRenderer$$.$_getSortedGroups$ = function $$DvtNBoxRenderer$$$$_getSortedGroups$$($nbox$$59$$) {
  var $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$59$$), $groupInfo$$4$$ = $nbox$$59$$.$getOptions$().__groups, $groupNodes$$2$$ = [];
  if($groupInfo$$4$$) {
    if($cellCount$$6_groupBehavior$$6_rowCount$$19$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$59$$), $columnCount$$14_i$$741$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$59$$), $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = $cellCount$$6_groupBehavior$$6_rowCount$$19$$ * $columnCount$$14_i$$741$$, $columnCount$$14_i$$741$$ = 0;$columnCount$$14_i$$741$$ < $cellCount$$6_groupBehavior$$6_rowCount$$19$$;$columnCount$$14_i$$741$$++) {
        for(var $cellGroupNodes$$ = D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$59$$, $groupInfo$$4$$[$columnCount$$14_i$$741$$ + ""]), $j$$100$$ = 0;$j$$100$$ < $cellGroupNodes$$.length;$j$$100$$++) {
          $groupNodes$$2$$.push($cellGroupNodes$$[$j$$100$$])
        }
      }
    }else {
      $groupNodes$$2$$ = D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$59$$, $groupInfo$$4$$)
    }
  }
  return $groupNodes$$2$$
};
D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$ = function $$DvtNBoxRenderer$$$$_getSortedGroupsFromContainer$$($nbox$$60$$, $container$$165$$) {
  var $groupNodes$$3$$ = [], $id$$233$$;
  for($id$$233$$ in $container$$165$$) {
    var $displayable$$70$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$60$$, $container$$165$$[$id$$233$$]);
    $displayable$$70$$ && $groupNodes$$3$$.push($displayable$$70$$)
  }
  $groupNodes$$3$$.sort(function($nbox$$60$$, $container$$165$$) {
    var $groupNodes$$3$$ = $nbox$$60$$.getId(), $id$$233$$ = $container$$165$$.getId();
    return $groupNodes$$3$$ == $id$$233$$ ? 0 : $groupNodes$$3$$ < $id$$233$$ ? -1 : 1
  });
  return $groupNodes$$3$$
};
D.$DvtNBoxRenderer$$.$_animateDrawer$ = function $$DvtNBoxRenderer$$$$_animateDrawer$$($animationHandler$$36$$, $newDrawer$$4_oldNBox$$17$$, $newNBox$$17$$) {
  var $oldDrawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newDrawer$$4_oldNBox$$17$$), $oldDrawer$$4$$ = $oldDrawer$$4$$ ? [D.$DvtNBoxDataUtils$$.$getDisplayable$($newDrawer$$4_oldNBox$$17$$, $oldDrawer$$4$$)] : D.$JSCompiler_alias_NULL$$;
  $newDrawer$$4_oldNBox$$17$$ = ($newDrawer$$4_oldNBox$$17$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newNBox$$17$$)) ? [D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$17$$, $newDrawer$$4_oldNBox$$17$$)] : [];
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$36$$, $oldDrawer$$4$$, $newDrawer$$4_oldNBox$$17$$)
};
D.$DvtNBoxRenderer$$.$setFill$ = function $$DvtNBoxRenderer$$$$setFill$$($displayable$$71$$, $fillString$$) {
  if(0 == $fillString$$.indexOf("linear-gradient")) {
    var $linearGradient$$3$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($fillString$$);
    $linearGradient$$3$$ && $displayable$$71$$.$setFill$(new D.$DvtLinearGradientFill$$($linearGradient$$3$$.$getAngle$(), $linearGradient$$3$$.$_arColors$, $linearGradient$$3$$.$_arAlphas$, $linearGradient$$3$$.$_arRatios$))
  }else {
    $displayable$$71$$.$setSolidFill$($fillString$$)
  }
};
D.$DvtNBoxRenderer$$.$_fixZOrder$ = function $$DvtNBoxRenderer$$$$_fixZOrder$$($nbox$$61_panelDrawer$$4$$) {
  var $legendData$$5$$ = D.$DvtNBoxDataUtils$$.$getLegend$($nbox$$61_panelDrawer$$4$$);
  $legendData$$5$$ && $legendData$$5$$.sections && ($nbox$$61_panelDrawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$61_panelDrawer$$4$$, $legendData$$5$$, "panelDrawer")) && $nbox$$61_panelDrawer$$4$$.getParent().$addChild$($nbox$$61_panelDrawer$$4$$)
};
D.$DvtNBoxCellRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCellRenderer$$, D.$DvtObj$$, "DvtNBoxCellRenderer");
D.$DvtNBoxCellRenderer$$.$render$ = function $$DvtNBoxCellRenderer$$$$render$$($nbox$$19$$, $cellData$$8$$, $cellContainer_childArea$$, $cellLayout$$2$$, $addedHeader_cellCounts$$2$$, $availSpace$$97_cellIndex$$4_childContainer$$) {
  var $cellBottomGap_options$$205$$ = $nbox$$19$$.$getOptions$(), $cellGap_cellRect$$ = $cellBottomGap_options$$205$$.__layout.cellGap, $cellStartGap$$ = $cellBottomGap_options$$205$$.__layout.cellStartGap, $cellEndGap$$ = $cellBottomGap_options$$205$$.__layout.cellEndGap, $cellTopGap$$ = $cellBottomGap_options$$205$$.__layout.cellTopGap, $cellBottomGap_options$$205$$ = $cellBottomGap_options$$205$$.__layout.cellBottomGap, $keyboardFocusEffect$$1_r$$56_style$$95$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$19$$, 
  $cellData$$8$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$37$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$19$$, $cellData$$8$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellDims$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$19$$, $keyboardFocusEffect$$1_r$$56_style$$95$$, $c$$37$$, $cellLayout$$2$$, $availSpace$$97_cellIndex$$4_childContainer$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($cellContainer_childArea$$, $cellDims$$.x + $cellGap_cellRect$$ / 2, $cellDims$$.y + $cellGap_cellRect$$ / 2);
  $availSpace$$97_cellIndex$$4_childContainer$$ = $keyboardFocusEffect$$1_r$$56_style$$95$$ * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$19$$) + $c$$37$$;
  $cellGap_cellRect$$ = new D.$DvtRect$$($nbox$$19$$.$getCtx$(), 0, 0, window.Math.max($cellDims$$.$w$ - $cellGap_cellRect$$, 0), window.Math.max($cellDims$$.$h$ - $cellGap_cellRect$$, 0));
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cellGap_cellRect$$);
  $keyboardFocusEffect$$1_r$$56_style$$95$$ = D.$DvtNBoxStyleUtils$$.$getCellStyle$($nbox$$19$$, $availSpace$$97_cellIndex$$4_childContainer$$);
  D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$($cellGap_cellRect$$, $keyboardFocusEffect$$1_r$$56_style$$95$$);
  $cellContainer_childArea$$.$addChild$($cellGap_cellRect$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$19$$, $cellData$$8$$, $cellGap_cellRect$$, "background");
  $keyboardFocusEffect$$1_r$$56_style$$95$$ = new D.$DvtKeyboardFocusEffect$$($nbox$$19$$.$getCtx$(), $cellContainer_childArea$$, new D.$DvtRectangle$$(-1, -1, $cellGap_cellRect$$.getWidth() + 2, $cellGap_cellRect$$.getHeight() + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$19$$, $cellData$$8$$, $keyboardFocusEffect$$1_r$$56_style$$95$$, "focusEffect");
  $addedHeader_cellCounts$$2$$ = D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$19$$, $cellData$$8$$, $cellContainer_childArea$$, $addedHeader_cellCounts$$2$$, D.$JSCompiler_alias_FALSE$$);
  $availSpace$$97_cellIndex$$4_childContainer$$ = D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$19$$, $availSpace$$97_cellIndex$$4_childContainer$$) ? new D.$DvtSimpleScrollableContainer$$($nbox$$19$$.$getCtx$(), $cellGap_cellRect$$.getWidth(), $cellGap_cellRect$$.getHeight() - ($addedHeader_cellCounts$$2$$ ? $cellLayout$$2$$.headerSize : 0)) : new D.$DvtContainer$$($nbox$$19$$.$getCtx$());
  $cellContainer_childArea$$.$addChild$($availSpace$$97_cellIndex$$4_childContainer$$);
  $cellContainer_childArea$$.$setChildContainer$($availSpace$$97_cellIndex$$4_childContainer$$);
  $cellContainer_childArea$$ = D.$JSCompiler_alias_NULL$$;
  $addedHeader_cellCounts$$2$$ ? ($cellContainer_childArea$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$19$$, $cellData$$8$$) ? new D.$DvtRectangle$$($cellLayout$$2$$.headerSize, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellLayout$$2$$.headerSize - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - $cellBottomGap_options$$205$$) : new D.$DvtRectangle$$($cellStartGap$$, $cellLayout$$2$$.headerSize, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - 
  $cellLayout$$2$$.headerSize - $cellBottomGap_options$$205$$), $availSpace$$97_cellIndex$$4_childContainer$$ instanceof D.$DvtSimpleScrollableContainer$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($availSpace$$97_cellIndex$$4_childContainer$$, 0, $cellLayout$$2$$.headerSize)) : $cellContainer_childArea$$ = new D.$DvtRectangle$$($cellStartGap$$, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - $cellBottomGap_options$$205$$);
  $cellContainer_childArea$$.$w$ = window.Math.max($cellContainer_childArea$$.$w$, 0);
  $cellContainer_childArea$$.$h$ = window.Math.max($cellContainer_childArea$$.$h$, 0);
  $cellData$$8$$.__childArea = $cellContainer_childArea$$
};
D.$DvtNBoxCellRenderer$$.$renderHeader$ = function $$DvtNBoxCellRenderer$$$$renderHeader$$($nbox$$20$$, $cellData$$9$$, $cellContainer$$1$$, $cellCounts$$3_countLabelOffset_labelWidth$$6$$, $label$$64_noCount$$) {
  var $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$9$$, D.$DvtNBoxConstants$$.$LABEL$);
  $addedHeader$$1_oldCountLabel_oldLabel$$ && ($addedHeader$$1_oldCountLabel_oldLabel$$.getParent().removeChild($addedHeader$$1_oldCountLabel_oldLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$9$$, D.$JSCompiler_alias_NULL$$, D.$DvtNBoxConstants$$.$LABEL$));
  if($addedHeader$$1_oldCountLabel_oldLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$9$$, "countLabel")) {
    $addedHeader$$1_oldCountLabel_oldLabel$$.getParent().removeChild($addedHeader$$1_oldCountLabel_oldLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$9$$, D.$JSCompiler_alias_NULL$$, "countLabel")
  }
  $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_FALSE$$;
  if($cellData$$9$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $options$$206_r$$57_rtl$$19$$ = $nbox$$20$$.$getOptions$(), $countLabelGap$$ = $options$$206_r$$57_rtl$$19$$.__layout.countLabelGap, $cellStartGap$$1_labelX$$2$$ = $options$$206_r$$57_rtl$$19$$.__layout.cellStartGap, $cellEndGap$$1$$ = $options$$206_r$$57_rtl$$19$$.__layout.cellEndGap, $cellTopGap$$1$$ = $options$$206_r$$57_rtl$$19$$.__layout.cellTopGap, $cellLayout$$3_labelHeight$$4$$ = $options$$206_r$$57_rtl$$19$$.__layout.__cellLayout, $options$$206_r$$57_rtl$$19$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$20$$, 
    $cellData$$9$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$38_cellRect$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$20$$, $cellData$$9$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellIndex$$5$$ = $options$$206_r$$57_rtl$$19$$ * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$20$$) + $c$$38_cellRect$$1$$, $c$$38_cellRect$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$9$$, "background"), $options$$206_r$$57_rtl$$19$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$20$$.$getCtx$()), $cellLayout$$3_labelHeight$$4$$ = 
    $cellLayout$$3_labelHeight$$4$$.labelHeight, $skipLabel$$ = D.$JSCompiler_alias_FALSE$$, $halign$$7$$ = D.$DvtNBoxStyleUtils$$.$getLabelHalign$($nbox$$20$$, $cellData$$9$$), $countLabelWidth_countLabelX$$ = 0, $countLabelWidthWithGap$$ = 0, $countLabel$$ = D.$JSCompiler_alias_NULL$$, $countLabelY$$ = $countLabelWidth_countLabelX$$ = 0, $countText$$ = D.$JSCompiler_alias_NULL$$;
    !$label$$64_noCount$$ && "on" == D.$DvtNBoxStyleUtils$$.$getCellShowCount$($nbox$$20$$, $cellData$$9$$) && ($countText$$ = "" + $cellCounts$$3_countLabelOffset_labelWidth$$6$$.total[$cellIndex$$5$$], $cellCounts$$3_countLabelOffset_labelWidth$$6$$.highlighted && ($countText$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "HIGHLIGHTED_COUNT", [$cellCounts$$3_countLabelOffset_labelWidth$$6$$.highlighted[$cellIndex$$5$$], $countText$$])));
    D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$20$$, $cellData$$9$$) ? ($countText$$ && ($countLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $countText$$, D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$20$$), "center", "middle"), D.$DvtTextUtils$$.$fitText$($countLabel$$, $c$$38_cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$, $c$$38_cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) ? (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, 
    $cellData$$9$$, $countLabel$$, "countLabel"), $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, $countLabelWidth_countLabelX$$ = $countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $countLabelWidth_countLabelX$$ + $countLabelGap$$, $countLabelY$$ = $c$$38_cellRect$$1$$.getHeight() / 2, $countLabelWidth_countLabelX$$ = $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2) : $skipLabel$$ = D.$JSCompiler_alias_TRUE$$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 
    0, $skipLabel$$ || ($label$$64_noCount$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $cellData$$9$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$20$$, $cellIndex$$5$$), "center", "middle"), D.$DvtTextUtils$$.$fitText$($label$$64_noCount$$, $c$$38_cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ - $countLabelWidthWithGap$$, $c$$38_cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) && (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, 
    $cellData$$9$$, $label$$64_noCount$$, D.$DvtNBoxConstants$$.$LABEL$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = $label$$64_noCount$$.$getDimensions$().$w$, $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, D.$DvtNBoxRenderer$$.$positionText$($label$$64_noCount$$, $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2, ($c$$38_cellRect$$1$$.getHeight() + $countLabelWidthWithGap$$) / 2, $options$$206_r$$57_rtl$$19$$ ? window.Math.PI / 2 : -window.Math.PI / 2), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 
    ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$) / 2)), $countLabel$$ && D.$DvtNBoxRenderer$$.$positionText$($countLabel$$, $countLabelWidth_countLabelX$$, $countLabelY$$ - $cellCounts$$3_countLabelOffset_labelWidth$$6$$, $options$$206_r$$57_rtl$$19$$ ? window.Math.PI / 2 : -window.Math.PI / 2)) : ($countText$$ && ($countLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $countText$$, D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$20$$), $halign$$7$$, 
    "middle"), D.$DvtTextUtils$$.$fitText$($countLabel$$, $c$$38_cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$, $c$$38_cellRect$$1$$.getHeight() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) ? (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$9$$, $countLabel$$, "countLabel"), $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, $countLabelWidth_countLabelX$$ = $countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $countLabelWidth_countLabelX$$ + 
    $countLabelGap$$, $countLabelWidth_countLabelX$$ = "center" == $halign$$7$$ ? $c$$38_cellRect$$1$$.getWidth() / 2 : "right" == $halign$$7$$ ? $c$$38_cellRect$$1$$.getWidth() - $cellEndGap$$1$$ : $cellStartGap$$1_labelX$$2$$, $countLabelY$$ = $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2, D.$DvtNBoxRenderer$$.$positionText$($countLabel$$, $countLabelWidth_countLabelX$$, $countLabelY$$)) : $skipLabel$$ = D.$JSCompiler_alias_TRUE$$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 0, 
    $skipLabel$$ || ($label$$64_noCount$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $cellData$$9$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$20$$, $cellIndex$$5$$), $halign$$7$$, "middle"), D.$DvtTextUtils$$.$fitText$($label$$64_noCount$$, $c$$38_cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ - $countLabelWidthWithGap$$, $c$$38_cellRect$$1$$.getHeight() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) && (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, 
    $cellData$$9$$, $label$$64_noCount$$, D.$DvtNBoxConstants$$.$LABEL$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = $label$$64_noCount$$.$getDimensions$().$w$, $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, "center" == $halign$$7$$ ? ($cellStartGap$$1_labelX$$2$$ = ($c$$38_cellRect$$1$$.getWidth() - ($options$$206_r$$57_rtl$$19$$ ? -1 : 1) * $countLabelWidthWithGap$$) / 2, $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($options$$206_r$$57_rtl$$19$$ ? -1 : 1) * 
    ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$) / 2) : "right" == $halign$$7$$ ? ($cellStartGap$$1_labelX$$2$$ = $c$$38_cellRect$$1$$.getWidth() - $cellEndGap$$1$$ - ($options$$206_r$$57_rtl$$19$$ ? 0 : 1) * $countLabelWidthWithGap$$, $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($options$$206_r$$57_rtl$$19$$ ? -1 : 0) * ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$)) : ($cellStartGap$$1_labelX$$2$$ += ($options$$206_r$$57_rtl$$19$$ ? 1 : 0) * $countLabelWidthWithGap$$, 
    $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($options$$206_r$$57_rtl$$19$$ ? 0 : 1) * ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$)), D.$DvtNBoxRenderer$$.$positionText$($label$$64_noCount$$, $cellStartGap$$1_labelX$$2$$, $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2))), $countLabel$$ && $cellCounts$$3_countLabelOffset_labelWidth$$6$$ && D.$DvtNBoxRenderer$$.$positionText$($countLabel$$, $countLabelWidth_countLabelX$$ + $cellCounts$$3_countLabelOffset_labelWidth$$6$$, 
    $countLabelY$$))
  }
  D.$DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$($nbox$$20$$, $cellData$$9$$, $cellContainer$$1$$);
  return $addedHeader$$1_oldCountLabel_oldLabel$$
};
D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$ = function $$DvtNBoxCellRenderer$$$$renderBodyCountLabels$$($nbox$$21$$, $cellCounts$$4$$, $cellContainer$$2_cellIndices$$) {
  var $cellLayout$$4$$ = D.$DvtNBoxCellRenderer$$.$calculateCellLayout$($nbox$$21$$, $cellCounts$$4$$), $cellTopGap$$2$$ = $nbox$$21$$.$getOptions$().__layout.cellTopGap, $cellStartGap$$2$$ = $nbox$$21$$.$getOptions$().__layout.cellStartGap, $childArea$$1_headerFontSize$$ = window.Number.MAX_VALUE, $removeHeaders$$ = D.$JSCompiler_alias_FALSE$$, $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellContainer$$2_cellIndices$$[0]), $headerLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, 
  $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxConstants$$.$LABEL$), $headerCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, "countLabel"), $headerLabelSize_maximizedCellIndices$$ = $headerLabel$$ && $headerLabel$$.$getCSSStyle$() ? $headerLabel$$.$getCSSStyle$().$getFontSize$() : D.$JSCompiler_alias_NULL$$, $headerCountSize_minimizedCellIndices$$ = $headerCount$$5$$ && $headerCount$$5$$.$getCSSStyle$() ? $headerCount$$5$$.$getCSSStyle$().$getFontSize$() : 
  D.$JSCompiler_alias_NULL$$, $headerLabelSize_maximizedCellIndices$$ = (0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) ? (0,window.parseFloat)($headerLabelSize_maximizedCellIndices$$) : $headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$ = (0,window.isNaN)($headerCountSize_minimizedCellIndices$$) ? (0,window.parseFloat)($headerCountSize_minimizedCellIndices$$) : $headerCountSize_minimizedCellIndices$$;
  if(!(0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) || !(0,window.isNaN)($headerCountSize_minimizedCellIndices$$)) {
    $childArea$$1_headerFontSize$$ = (0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) ? $headerCountSize_minimizedCellIndices$$ : (0,window.isNaN)($headerCountSize_minimizedCellIndices$$) ? $headerLabelSize_maximizedCellIndices$$ : window.Math.max($headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$)
  }
  for(var $headerLabelSize_maximizedCellIndices$$ = [], $headerCountSize_minimizedCellIndices$$ = [], $i$$728$$ = 0;$i$$728$$ < $cellContainer$$2_cellIndices$$.length;$i$$728$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $cellContainer$$2_cellIndices$$[$i$$728$$], D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$) ? $headerCountSize_minimizedCellIndices$$.push($cellData$$10_cellIndex$$6_count$$20$$) : $headerLabelSize_maximizedCellIndices$$.push($cellData$$10_cellIndex$$6_count$$20$$)
  }
  for(var $maximizedLabels$$ = [], $minimizedLabels$$ = [], $i$$728$$ = 0;$i$$728$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$728$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerLabelSize_maximizedCellIndices$$[$i$$728$$], $cellData$$10_cellIndex$$6_count$$20$$ = $cellCounts$$4$$.total[$cellData$$10_cellIndex$$6_count$$20$$], $maximizedLabels$$[$i$$728$$] = D.$DvtNBoxRenderer$$.$createText$($nbox$$21$$.$getCtx$(), "" + $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$21$$), "center", "middle")
  }
  for($i$$728$$ = 0;$i$$728$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$728$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerCountSize_minimizedCellIndices$$[$i$$728$$], $cellData$$10_cellIndex$$6_count$$20$$ = $cellCounts$$4$$.total[$cellData$$10_cellIndex$$6_count$$20$$], $minimizedLabels$$[$i$$728$$] = D.$DvtNBoxRenderer$$.$createText$($nbox$$21$$.$getCtx$(), "" + $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$21$$), "center", "middle")
  }
  var $headerRemoved_maximizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
  if($headerRemoved_maximizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$5$$ && !$headerLabel$$) {
    $removeHeaders$$ = D.$JSCompiler_alias_TRUE$$
  }
  var $minimizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$);
  if($minimizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$5$$ && !$headerLabel$$) {
    $removeHeaders$$ = D.$JSCompiler_alias_TRUE$$
  }
  if($removeHeaders$$) {
    for($i$$728$$ = 0;$i$$728$$ < $cellContainer$$2_cellIndices$$.length;$i$$728$$++) {
      $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellContainer$$2_cellIndices$$[$i$$728$$]), $headerLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxConstants$$.$LABEL$), $headerCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, "countLabel"), $childArea$$1_headerFontSize$$ = $cellData$$10_cellIndex$$6_count$$20$$.__childArea, $headerRemoved_maximizedFontSize$$ = 
      D.$JSCompiler_alias_FALSE$$, $headerLabel$$ && ($headerLabel$$.getParent().removeChild($headerLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, D.$JSCompiler_alias_NULL$$, D.$DvtNBoxConstants$$.$LABEL$), $headerRemoved_maximizedFontSize$$ = D.$JSCompiler_alias_TRUE$$), $headerCount$$5$$ && ($headerCount$$5$$.getParent().removeChild($headerCount$$5$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, 
      D.$JSCompiler_alias_NULL$$, "countLabel"), $headerRemoved_maximizedFontSize$$ = D.$JSCompiler_alias_TRUE$$), $headerRemoved_maximizedFontSize$$ && (D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$) ? ($childArea$$1_headerFontSize$$.x -= $cellLayout$$4$$.headerSize - $cellStartGap$$2$$, $childArea$$1_headerFontSize$$.$w$ += $cellLayout$$4$$.headerSize - $cellStartGap$$2$$) : ($childArea$$1_headerFontSize$$.y -= $cellLayout$$4$$.headerSize - $cellTopGap$$2$$, 
      $childArea$$1_headerFontSize$$.$h$ += $cellLayout$$4$$.headerSize - $cellTopGap$$2$$), $cellData$$10_cellIndex$$6_count$$20$$.__childArea = $childArea$$1_headerFontSize$$)
    }
    $headerRemoved_maximizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
    $minimizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$)
  }
  for($i$$728$$ = 0;$i$$728$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$728$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerLabelSize_maximizedCellIndices$$[$i$$728$$], $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $cellContainer$$2_cellIndices$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $childArea$$1_headerFontSize$$ = $cellData$$10_cellIndex$$6_count$$20$$.__childArea, $maximizedLabels$$[$i$$728$$].$setFontSize$($headerRemoved_maximizedFontSize$$), 
    D.$DvtTextUtils$$.$fitText$($maximizedLabels$$[$i$$728$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$2_cellIndices$$) && ($removeHeaders$$ || D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, $cellContainer$$2_cellIndices$$, $cellCounts$$4$$, D.$JSCompiler_alias_TRUE$$), D.$DvtNBoxRenderer$$.$positionText$($maximizedLabels$$[$i$$728$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 
    2, $childArea$$1_headerFontSize$$.y + $childArea$$1_headerFontSize$$.$h$ / 2))
  }
  for($i$$728$$ = 0;$i$$728$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$728$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerCountSize_minimizedCellIndices$$[$i$$728$$], $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $cellContainer$$2_cellIndices$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $childArea$$1_headerFontSize$$ = $cellData$$10_cellIndex$$6_count$$20$$.__childArea, $minimizedLabels$$[$i$$728$$].$setFontSize$($minimizedFontSize$$), 
    D.$DvtTextUtils$$.$fitText$($minimizedLabels$$[$i$$728$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$2_cellIndices$$) && ($removeHeaders$$ || D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, $cellContainer$$2_cellIndices$$, $cellCounts$$4$$, D.$JSCompiler_alias_TRUE$$), D.$DvtNBoxRenderer$$.$positionText$($minimizedLabels$$[$i$$728$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 
    2, $childArea$$1_headerFontSize$$.y + $childArea$$1_headerFontSize$$.$h$ / 2))
  }
};
D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$ = function $$DvtNBoxCellRenderer$$$$getBodyCountLabelsFontSize$$($nbox$$22$$, $cellIndices$$1$$, $labels$$20$$) {
  for(var $fontSize$$14$$ = window.Number.MAX_VALUE, $i$$729$$ = 0;$i$$729$$ < $cellIndices$$1$$.length;$i$$729$$++) {
    var $childArea$$2$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$22$$, $cellIndices$$1$$[$i$$729$$]).__childArea, $fontSize$$14$$ = window.Math.min($fontSize$$14$$, $labels$$20$$[$i$$729$$].$getOptimalFontSize$($childArea$$2$$))
  }
  return $fontSize$$14$$
};
D.$DvtNBoxCellRenderer$$.$_isLabelVertical$ = function $$DvtNBoxCellRenderer$$$$_isLabelVertical$$($nbox$$23$$, $cellData$$11$$) {
  var $maximizedColumn$$4$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$23$$), $maximizedRow$$4$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$23$$);
  return $maximizedColumn$$4$$ && $maximizedColumn$$4$$ != $cellData$$11$$[D.$DvtNBoxConstants$$.$COLUMN$] && (!$maximizedRow$$4$$ || $maximizedRow$$4$$ == $cellData$$11$$[D.$DvtNBoxConstants$$.$ROW$]) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtNBoxCellRenderer$$.$getCellDimensions$ = function $$DvtNBoxCellRenderer$$$$getCellDimensions$$($maximizedColumnIndex_nbox$$24$$, $minimizedColumnSize_rowIndex$$16$$, $columnIndex$$4$$, $cellLayout$$5_columnCount$$5$$, $availSpace$$98$$) {
  var $cellGap$$1_minimizedSize$$ = $maximizedColumnIndex_nbox$$24$$.$getOptions$().__layout.cellGap, $rtl$$20$$ = (0,D.$DvtAgent$isRightToLeft$$)($maximizedColumnIndex_nbox$$24$$.$getCtx$()), $cellGap$$1_minimizedSize$$ = $cellGap$$1_minimizedSize$$ + $cellLayout$$5_columnCount$$5$$.minimumCellSize, $rowCount$$10$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($maximizedColumnIndex_nbox$$24$$);
  $cellLayout$$5_columnCount$$5$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($maximizedColumnIndex_nbox$$24$$);
  var $defaultRowDimensions_rowH$$ = D.$DvtNBoxRenderer$$.$getRowDimensions$($maximizedColumnIndex_nbox$$24$$, $minimizedColumnSize_rowIndex$$16$$, $availSpace$$98$$), $columnW_defaultColumnDimensions$$ = D.$DvtNBoxRenderer$$.$getColumnDimensions$($maximizedColumnIndex_nbox$$24$$, $columnIndex$$4$$, $availSpace$$98$$), $maximizedRow$$5_minimizedRowSize$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($maximizedColumnIndex_nbox$$24$$), $maximizedColumn$$5$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($maximizedColumnIndex_nbox$$24$$), 
  $columnX$$ = $columnW_defaultColumnDimensions$$.x, $maximizedRowIndex_rowY$$ = $defaultRowDimensions_rowH$$.y, $columnW_defaultColumnDimensions$$ = $columnW_defaultColumnDimensions$$.$w$, $defaultRowDimensions_rowH$$ = $defaultRowDimensions_rowH$$.$h$, $processColumn$$ = D.$JSCompiler_alias_TRUE$$;
  $maximizedRow$$5_minimizedRowSize$$ && ($maximizedRowIndex_rowY$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($maximizedColumnIndex_nbox$$24$$, $maximizedRow$$5_minimizedRowSize$$), $maximizedRow$$5_minimizedRowSize$$ = window.Math.min($availSpace$$98$$.$h$ / (3 * ($rowCount$$10$$ - 1)), $cellGap$$1_minimizedSize$$), $minimizedColumnSize_rowIndex$$16$$ < $maximizedRowIndex_rowY$$ ? ($maximizedRowIndex_rowY$$ = $availSpace$$98$$.y + $availSpace$$98$$.$h$ - ($minimizedColumnSize_rowIndex$$16$$ + 1) * $maximizedRow$$5_minimizedRowSize$$, 
  $defaultRowDimensions_rowH$$ = $maximizedRow$$5_minimizedRowSize$$, $processColumn$$ = D.$JSCompiler_alias_FALSE$$) : $minimizedColumnSize_rowIndex$$16$$ == $maximizedRowIndex_rowY$$ ? ($maximizedRowIndex_rowY$$ = $availSpace$$98$$.y + ($rowCount$$10$$ - $minimizedColumnSize_rowIndex$$16$$ - 1) * $maximizedRow$$5_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $availSpace$$98$$.$h$ - ($rowCount$$10$$ - 1) * $maximizedRow$$5_minimizedRowSize$$) : ($maximizedRowIndex_rowY$$ = $availSpace$$98$$.y + 
  ($rowCount$$10$$ - $minimizedColumnSize_rowIndex$$16$$ - 1) * $maximizedRow$$5_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $maximizedRow$$5_minimizedRowSize$$, $processColumn$$ = D.$JSCompiler_alias_FALSE$$));
  $maximizedColumn$$5$$ && $processColumn$$ && ($maximizedColumnIndex_nbox$$24$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($maximizedColumnIndex_nbox$$24$$, $maximizedColumn$$5$$), $minimizedColumnSize_rowIndex$$16$$ = window.Math.min($availSpace$$98$$.$w$ / (3 * ($cellLayout$$5_columnCount$$5$$ - 1)), $cellGap$$1_minimizedSize$$), $columnIndex$$4$$ < $maximizedColumnIndex_nbox$$24$$ ? ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$16$$, $columnX$$ = $availSpace$$98$$.x + ($rtl$$20$$ ? 
  $availSpace$$98$$.$w$ - $minimizedColumnSize_rowIndex$$16$$ : 0) + ($rtl$$20$$ ? -1 : 1) * $columnIndex$$4$$ * $minimizedColumnSize_rowIndex$$16$$) : $columnIndex$$4$$ == $maximizedColumnIndex_nbox$$24$$ ? ($columnW_defaultColumnDimensions$$ = $availSpace$$98$$.$w$ - ($cellLayout$$5_columnCount$$5$$ - 1) * $minimizedColumnSize_rowIndex$$16$$, $columnX$$ = $availSpace$$98$$.x + ($rtl$$20$$ ? $availSpace$$98$$.$w$ - $columnW_defaultColumnDimensions$$ : 0) + ($rtl$$20$$ ? -1 : 1) * $columnIndex$$4$$ * 
  $minimizedColumnSize_rowIndex$$16$$) : ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$16$$, $columnX$$ = $availSpace$$98$$.x + ($rtl$$20$$ ? -$minimizedColumnSize_rowIndex$$16$$ : $availSpace$$98$$.$w$) + ($rtl$$20$$ ? 1 : -1) * ($cellLayout$$5_columnCount$$5$$ - $columnIndex$$4$$) * $minimizedColumnSize_rowIndex$$16$$));
  return new D.$DvtRectangle$$($columnX$$, $maximizedRowIndex_rowY$$, $columnW_defaultColumnDimensions$$, $defaultRowDimensions_rowH$$)
};
D.$DvtNBoxCellRenderer$$.$calculateCellLayout$ = function $$DvtNBoxCellRenderer$$$$calculateCellLayout$$($nbox$$25$$, $cellCounts$$6$$) {
  var $options$$208$$ = $nbox$$25$$.$getOptions$(), $cellTopGap$$3_headerSize$$ = $options$$208$$.__layout.cellTopGap, $cellBottomGap$$1_minimizedHeaderSize$$ = $options$$208$$.__layout.cellBottomGap, $cellLabelGap$$ = $options$$208$$.__layout.cellLabelGap, $cellLayout$$6_minimumCellSize$$ = $options$$208$$.__layout.minimumCellSize, $label$$65_labelHeight$$5$$ = 0, $cellData$$12_count$$21_countLabelHeight$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$25$$, 0);
  if($cellData$$12_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $halign$$8$$ = $cellData$$12_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL_HALIGN$], $label$$65_labelHeight$$5$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$25$$.$getCtx$(), $cellData$$12_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$25$$, 0), $halign$$8$$, "middle"), $label$$65_labelHeight$$5$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$65_labelHeight$$5$$).$h$;
    "on" == D.$DvtNBoxStyleUtils$$.$getCellShowCount$($nbox$$25$$, $cellData$$12_count$$21_countLabelHeight$$) && ($cellData$$12_count$$21_countLabelHeight$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$25$$.$getCtx$(), $cellCounts$$6$$.total[0], D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$25$$), $halign$$8$$, "middle"), $cellData$$12_count$$21_countLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellData$$12_count$$21_countLabelHeight$$).$h$, $label$$65_labelHeight$$5$$ = window.Math.max($label$$65_labelHeight$$5$$, 
    $cellData$$12_count$$21_countLabelHeight$$))
  }
  $cellBottomGap$$1_minimizedHeaderSize$$ = $label$$65_labelHeight$$5$$ + $cellTopGap$$3_headerSize$$ + $cellBottomGap$$1_minimizedHeaderSize$$;
  $cellTopGap$$3_headerSize$$ = $label$$65_labelHeight$$5$$ + $cellTopGap$$3_headerSize$$ + $cellLabelGap$$;
  $cellLayout$$6_minimumCellSize$$ = window.Math.max($cellBottomGap$$1_minimizedHeaderSize$$, $cellLayout$$6_minimumCellSize$$);
  $cellLayout$$6_minimumCellSize$$ = {labelHeight:$label$$65_labelHeight$$5$$, headerSize:$cellTopGap$$3_headerSize$$, minimizedHeaderSize:$cellBottomGap$$1_minimizedHeaderSize$$, minimumCellSize:$cellLayout$$6_minimumCellSize$$};
  return $options$$208$$.__layout.__cellLayout = $cellLayout$$6_minimumCellSize$$
};
D.$DvtNBoxCellRenderer$$.$animateUpdate$ = function $$DvtNBoxCellRenderer$$$$animateUpdate$$($animationHandler$$23$$, $oldCell$$1$$, $newCell$$) {
  var $oldBackground_oldNBox$$8$$ = $animationHandler$$23$$.$_oldNBox$, $effect$$14_newNBox$$6$$ = $animationHandler$$23$$.$_newNBox$, $playable$$40$$ = new D.$DvtCustomAnimation$$($effect$$14_newNBox$$6$$.$getCtx$(), $newCell$$, $animationHandler$$23$$.$getAnimationDuration$()), $childContainer$$1$$ = $newCell$$.$getChildContainer$(), $childMatrix$$ = $childContainer$$1$$.$getMatrix$();
  $childContainer$$1$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$1$$));
  var $cellParent_newBackground$$ = $newCell$$.getParent();
  $cellParent_newBackground$$.$addChildAt$($childContainer$$1$$, $cellParent_newBackground$$.$getChildIndex$($newCell$$) + 1);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeMatrix", $newCell$$, $newCell$$.$getMatrix$, $newCell$$.$setMatrix$, $newCell$$.$getMatrix$());
  $newCell$$.$setMatrix$($oldCell$$1$$.$getMatrix$());
  $oldBackground_oldNBox$$8$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($oldBackground_oldNBox$$8$$, $oldCell$$1$$.getData(), "background");
  $cellParent_newBackground$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($effect$$14_newNBox$$6$$, $newCell$$.getData(), "background");
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeFill", $cellParent_newBackground$$, $cellParent_newBackground$$.$getFill$, $cellParent_newBackground$$.$setFill$, $cellParent_newBackground$$.$getFill$());
  $cellParent_newBackground$$.$setFill$($oldBackground_oldNBox$$8$$.$getFill$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $cellParent_newBackground$$, $cellParent_newBackground$$.getWidth, $cellParent_newBackground$$.$setWidth$, $cellParent_newBackground$$.getWidth());
  $cellParent_newBackground$$.$setWidth$($oldBackground_oldNBox$$8$$.getWidth());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $cellParent_newBackground$$, $cellParent_newBackground$$.getHeight, $cellParent_newBackground$$.$setHeight$, $cellParent_newBackground$$.getHeight());
  $cellParent_newBackground$$.$setHeight$($oldBackground_oldNBox$$8$$.getHeight());
  if($newCell$$.$isShowingKeyboardFocusEffect$() && ($effect$$14_newNBox$$6$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($effect$$14_newNBox$$6$$, $newCell$$.getData(), "focusEffect").$getEffect$())) {
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newNBox$$6$$, $effect$$14_newNBox$$6$$.getWidth, $effect$$14_newNBox$$6$$.$setWidth$, $effect$$14_newNBox$$6$$.getWidth()), $effect$$14_newNBox$$6$$.$setWidth$($oldBackground_oldNBox$$8$$.getWidth() + 2), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newNBox$$6$$, $effect$$14_newNBox$$6$$.getHeight, $effect$$14_newNBox$$6$$.$setHeight$, $effect$$14_newNBox$$6$$.getHeight()), 
    $effect$$14_newNBox$$6$$.$setHeight$($oldBackground_oldNBox$$8$$.getHeight() + 2)
  }
  D.$DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$23$$, $oldCell$$1$$, $newCell$$, "countLabel");
  D.$DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$23$$, $oldCell$$1$$, $newCell$$, D.$DvtNBoxConstants$$.$LABEL$);
  (0,D.$DvtPlayable$appendOnEnd$$)($playable$$40$$, function() {
    $newCell$$.$addChild$($childContainer$$1$$);
    $childContainer$$1$$.$setMatrix$($childMatrix$$)
  });
  $animationHandler$$23$$.add($playable$$40$$, 1)
};
D.$DvtNBoxCellRenderer$$.$_animateLabels$ = function $$DvtNBoxCellRenderer$$$$_animateLabels$$($animationHandler$$24$$, $oldCell$$2_oldVerticalLabel_playable$$41$$, $fadeOutAnim_newCell$$1$$, $labelKey$$) {
  var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $animationHandler$$24$$.$_oldNBox$, $newNBox$$7$$ = $animationHandler$$24$$.$_newNBox$, $oldLabel$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$41$$.getData(), $labelKey$$), $fadeInAnim_newLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData(), $labelKey$$);
  $oldCell$$2_oldVerticalLabel_playable$$41$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$41$$.getData());
  $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData());
  if($oldLabel$$1$$ || $fadeInAnim_newLabel$$) {
    if($oldLabel$$1$$ && $fadeInAnim_newLabel$$ && $oldCell$$2_oldVerticalLabel_playable$$41$$ == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$) {
      $oldCell$$2_oldVerticalLabel_playable$$41$$ = new D.$DvtCustomAnimation$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$());
      var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $oldLabel$$1$$.$getHorizAlignment$(), $newAlign$$ = $fadeInAnim_newLabel$$.$getHorizAlignment$(), $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = (("left" == $newAlign$$ ? -1 : "center" == $newAlign$$ ? 0 : 1) - ("left" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? -1 : "center" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? 0 : 1)) * $fadeInAnim_newLabel$$.$measureDimensions$().$w$ / 2;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeNumber", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getX$, $fadeInAnim_newLabel$$.$setX$, $fadeInAnim_newLabel$$.$getX$());
      $fadeInAnim_newLabel$$.$setX$($oldLabel$$1$$.$getX$() + $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$);
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeNumber", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getY$, $fadeInAnim_newLabel$$.$setY$, $fadeInAnim_newLabel$$.$getY$());
      $fadeInAnim_newLabel$$.$setY$($oldLabel$$1$$.$getY$());
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeMatrix", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getMatrix$, $fadeInAnim_newLabel$$.$setMatrix$, $fadeInAnim_newLabel$$.$getMatrix$());
      $fadeInAnim_newLabel$$.$setMatrix$($oldLabel$$1$$.$getMatrix$());
      $animationHandler$$24$$.add($oldCell$$2_oldVerticalLabel_playable$$41$$, 1);
      "countLabel" == $labelKey$$ && $oldLabel$$1$$.$getTextString$() != $fadeInAnim_newLabel$$.$getTextString$() && ($fadeInAnim_newLabel$$.$setAlpha$(0), $fadeOutAnim_newCell$$1$$.$addChild$($oldLabel$$1$$), $fadeOutAnim_newCell$$1$$ = new D.$DvtAnimFadeOut$$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$24$$.$getAnimationDuration$()), $fadeInAnim_newLabel$$ = new D.$DvtAnimFadeIn$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$()), 
      $animationHandler$$24$$.add($fadeOutAnim_newCell$$1$$, 1), $animationHandler$$24$$.add($fadeInAnim_newLabel$$, 2), (0,D.$DvtPlayable$appendOnEnd$$)($fadeOutAnim_newCell$$1$$, function() {
        $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$)
      }))
    }else {
      $oldLabel$$1$$ && ($oldLabel$$1$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldLabel$$1$$)), $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$), $animationHandler$$24$$.add(new D.$DvtAnimFadeOut$$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$24$$.$getAnimationDuration$()), 1)), $fadeInAnim_newLabel$$ && ($fadeInAnim_newLabel$$.$setAlpha$(0), $animationHandler$$24$$.add(new D.$DvtAnimFadeIn$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$()), 
      1))
    }
  }
};
D.$DvtNBoxCellRenderer$$.$animateDelete$ = function $$DvtNBoxCellRenderer$$$$animateDelete$$($animationHandler$$25$$, $oldCell$$3$$) {
  var $nbox$$26$$ = $animationHandler$$25$$.$_newNBox$, $childContainer$$2$$ = $oldCell$$3$$.$getChildContainer$();
  if($childContainer$$2$$) {
    var $globalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$2$$), $cellParent$$1$$ = $oldCell$$3$$.getParent();
    $cellParent$$1$$.$addChildAt$($childContainer$$2$$, $cellParent$$1$$.$getChildIndex$($oldCell$$3$$) + 1);
    $childContainer$$2$$.$setMatrix$($globalMatrix$$)
  }
  $nbox$$26$$.$_deleteContainer$.$addChild$($oldCell$$3$$);
  $animationHandler$$25$$.add(new D.$DvtAnimFadeOut$$($nbox$$26$$.$getCtx$(), $oldCell$$3$$, $animationHandler$$25$$.$getAnimationDuration$()), 1)
};
D.$DvtNBoxCellRenderer$$.$animateInsert$ = function $$DvtNBoxCellRenderer$$$$animateInsert$$($animationHandler$$26$$, $newCell$$2$$) {
  var $nbox$$27_playable$$42$$ = $animationHandler$$26$$.$_newNBox$, $childContainer$$3$$ = $newCell$$2$$.$getChildContainer$(), $childMatrix$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($childContainer$$3$$) {
    var $childMatrix$$1$$ = $childContainer$$3$$.$getMatrix$(), $globalMatrix$$1$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$2$$), $cellParent$$2$$ = $newCell$$2$$.getParent();
    $cellParent$$2$$.$addChildAt$($childContainer$$3$$, $cellParent$$2$$.$getChildIndex$($newCell$$2$$) + 1);
    $childContainer$$3$$.$setMatrix$($globalMatrix$$1$$)
  }
  $newCell$$2$$.$setAlpha$(0);
  $nbox$$27_playable$$42$$ = new D.$DvtAnimFadeIn$$($nbox$$27_playable$$42$$.$getCtx$(), $newCell$$2$$, $animationHandler$$26$$.$getAnimationDuration$());
  $childContainer$$3$$ && (0,D.$DvtPlayable$appendOnEnd$$)($nbox$$27_playable$$42$$, function() {
    $newCell$$2$$.$addChild$($childContainer$$3$$);
    $childContainer$$3$$.$setMatrix$($childMatrix$$1$$)
  });
  $animationHandler$$26$$.add($nbox$$27_playable$$42$$, 1)
};
D.$DvtNBoxCellRenderer$$.$renderDropSiteFeedback$ = function $$DvtNBoxCellRenderer$$$$renderDropSiteFeedback$$($nbox$$28$$, $cell$$41$$) {
  var $background$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$28$$, $cell$$41$$.getData(), "background"), $dropSiteFeedback$$ = new D.$DvtRect$$($nbox$$28$$.$getCtx$(), $background$$11$$.$getX$(), $background$$11$$.$getY$(), $background$$11$$.getWidth(), $background$$11$$.getHeight());
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($dropSiteFeedback$$);
  var $style$$96$$ = D.$DvtNBoxStyleUtils$$.$getCellDropTargetStyle$($nbox$$28$$);
  D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$($dropSiteFeedback$$, $style$$96$$);
  $cell$$41$$.$addChildAt$($dropSiteFeedback$$, $cell$$41$$.$getChildIndex$($background$$11$$) + 1);
  return $dropSiteFeedback$$
};
D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$ = function $$DvtNBoxCellRenderer$$$$_applyStyleToRect$$($rect$$36$$, $style$$97$$) {
  var $bgFill$$1_borderColor$$51_fill$$64$$ = $style$$97$$.$getStyle$("background"), $borderWidth$$14_colorFill$$1$$ = $style$$97$$.$getStyle$("background-color");
  ($bgFill$$1_borderColor$$51_fill$$64$$ = $bgFill$$1_borderColor$$51_fill$$64$$ ? $bgFill$$1_borderColor$$51_fill$$64$$ : $borderWidth$$14_colorFill$$1$$) && D.$DvtNBoxRenderer$$.$setFill$($rect$$36$$, $bgFill$$1_borderColor$$51_fill$$64$$);
  "solid" == $style$$97$$.$getStyle$("border-style") && ($bgFill$$1_borderColor$$51_fill$$64$$ = ($bgFill$$1_borderColor$$51_fill$$64$$ = $style$$97$$.$getStyle$("border-color")) ? $bgFill$$1_borderColor$$51_fill$$64$$ : "#000000", $borderWidth$$14_colorFill$$1$$ = $style$$97$$.$getStyle$("border-width"), $borderWidth$$14_colorFill$$1$$ = $borderWidth$$14_colorFill$$1$$ == D.$JSCompiler_alias_NULL$$ ? 1 : (0,window.parseFloat)($borderWidth$$14_colorFill$$1$$), $rect$$36$$.$setSolidStroke$($bgFill$$1_borderColor$$51_fill$$64$$, 
  D.$JSCompiler_alias_NULL$$, $borderWidth$$14_colorFill$$1$$))
};
D.$DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCellRenderer$$$$_addAccessibilityAttributes$$($nbox$$29_object$$13$$, $cellData$$13$$, $cellContainer$$3_desc$$23$$) {
  $nbox$$29_object$$13$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$29_object$$13$$, $cellData$$13$$, "background") : $cellContainer$$3_desc$$23$$;
  $nbox$$29_object$$13$$.$setAriaRole$("img");
  (0,D.$DvtAgent$deferAriaCreation$$)() || ($cellContainer$$3_desc$$23$$ = $cellContainer$$3_desc$$23$$.$getAriaLabel$()) && $nbox$$29_object$$13$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $cellContainer$$3_desc$$23$$)
};
D.$DvtNBoxNodeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNodeRenderer$$, D.$DvtObj$$, "DvtNBoxNodeRenderer");
D.$DvtNBoxNodeRenderer$$.$render$ = function $$DvtNBoxNodeRenderer$$$$render$$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$) {
  D.$DvtNBoxNodeRenderer$$.$_renderNodeBackground$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeIndicator$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeIcon$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeLabels$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$35$$, $nodeContainer$$5$$)
};
D.$DvtNBoxNodeRenderer$$.$calculateNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeLayout$$($cell$$43_maxRows_nbox$$36$$) {
  for(var $options$$212$$ = $cell$$43_maxRows_nbox$$36$$.$getOptions$(), $container$$154_gridGap$$2$$ = $options$$212$$.__layout.gridGap, $cellLayouts_nodeStartLabelGap$$ = $options$$212$$.__layout.nodeStartLabelGap, $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = $options$$212$$.__layout.nodeLabelOnlyStartLabelGap, $cellIndex$$8_nodeEndLabelGap$$ = $options$$212$$.__layout.nodeEndLabelGap, $cellIndices$$2_nodeSwatchSize$$ = $options$$212$$.__layout.nodeSwatchSize, $labelVisible_maxCellIndex_simpleLayout$$ = 
  D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($cell$$43_maxRows_nbox$$36$$), $nodeHeight$$3_nodeLayout$$3$$ = $labelVisible_maxCellIndex_simpleLayout$$.nodeHeight, $indicatorSectionWidth$$ = $labelVisible_maxCellIndex_simpleLayout$$.indicatorSectionWidth, $iconSectionWidth$$ = $labelVisible_maxCellIndex_simpleLayout$$.iconSectionWidth, $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = $indicatorSectionWidth$$ || $iconSectionWidth$$ ? $cellLayouts_nodeStartLabelGap$$ : $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$, 
  $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ = D.$DvtNBoxDataUtils$$.$getNode$($cell$$43_maxRows_nbox$$36$$, 0), $indicatorIcon$$4$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$), $icon$$43$$ = D.$DvtNBoxDataUtils$$.$getIcon$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$), $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 
  0, $cellLayouts_nodeStartLabelGap$$ = [], $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ = 0, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = 0, $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($cell$$43_maxRows_nbox$$36$$), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($cell$$43_maxRows_nbox$$36$$), $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 
  D.$DvtNBoxDataUtils$$.$getRowCount$($cell$$43_maxRows_nbox$$36$$), $cellArea_columnCount$$6$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($cell$$43_maxRows_nbox$$36$$), $nodeCount$$8_r$$59$$ = 0;$nodeCount$$8_r$$59$$ < $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$;$nodeCount$$8_r$$59$$++) {
    for(var $c$$40_n$$22$$ = 0;$c$$40_n$$22$$ < $cellArea_columnCount$$6$$;$c$$40_n$$22$$++) {
      $cellLayouts_nodeStartLabelGap$$.push({cellRows:0, cellColumns:0, overflow:D.$JSCompiler_alias_FALSE$$})
    }
  }
  for(var $maximizedCellIndex$$1_nodeCounts$$ = [], $nodeCount$$8_r$$59$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($cell$$43_maxRows_nbox$$36$$), $c$$40_n$$22$$ = 0;$c$$40_n$$22$$ < $nodeCount$$8_r$$59$$;$c$$40_n$$22$$++) {
    if($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ = D.$DvtNBoxDataUtils$$.$getNode$($cell$$43_maxRows_nbox$$36$$, $c$$40_n$$22$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$)) {
      var $nodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$);
      (0,window.isNaN)($maximizedCellIndex$$1_nodeCounts$$[$nodeCellIndex$$]) && ($maximizedCellIndex$$1_nodeCounts$$[$nodeCellIndex$$] = 0);
      $maximizedCellIndex$$1_nodeCounts$$[$nodeCellIndex$$]++
    }
  }
  if($cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ && $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$) {
    $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth != D.$JSCompiler_alias_NULL$$ ? $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth : $options$$212$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$;
    $maximizedCellIndex$$1_nodeCounts$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($cell$$43_maxRows_nbox$$36$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$) + $cellArea_columnCount$$6$$ * D.$DvtNBoxDataUtils$$.$getRowIndex$($cell$$43_maxRows_nbox$$36$$, $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$);
    $cellArea_columnCount$$6$$ = D.$DvtNBoxDataUtils$$.$getCell$($cell$$43_maxRows_nbox$$36$$, $maximizedCellIndex$$1_nodeCounts$$).__childArea;
    $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = window.Math.floor(($cellArea_columnCount$$6$$.$w$ + $container$$154_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ + $container$$154_gridGap$$2$$));
    if(0 == $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ && $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth == D.$JSCompiler_alias_NULL$$) {
      $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.max(0, $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$);
      if($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$[D.$DvtNBoxConstants$$.$LABEL$] && ($container$$154_gridGap$$2$$ = new D.$DvtContainer$$, $labelVisible_maxCellIndex_simpleLayout$$ = D.$JSCompiler_alias_FALSE$$, $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ = D.$DvtNBoxRenderer$$.$createText$($cell$$43_maxRows_nbox$$36$$.$getCtx$(), $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($cell$$43_maxRows_nbox$$36$$), 
      "left", "middle"), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellRows_label$$66_maximizedRow$$6_secondaryLabel$$).$h$, D.$DvtTextUtils$$.$fitText$($cellRows_label$$66_maximizedRow$$6_secondaryLabel$$, $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ - $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ - $cellIndex$$8_nodeEndLabelGap$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, 
      $container$$154_gridGap$$2$$) && ($labelVisible_maxCellIndex_simpleLayout$$ = D.$JSCompiler_alias_TRUE$$), $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ = D.$DvtNBoxRenderer$$.$createText$($cell$$43_maxRows_nbox$$36$$.$getCtx$(), $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($cell$$43_maxRows_nbox$$36$$), 
      "left", "middle"), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellRows_label$$66_maximizedRow$$6_secondaryLabel$$).$h$, D.$DvtTextUtils$$.$fitText$($cellRows_label$$66_maximizedRow$$6_secondaryLabel$$, $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ - $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ - $cellIndex$$8_nodeEndLabelGap$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, 
      $container$$154_gridGap$$2$$) && ($labelVisible_maxCellIndex_simpleLayout$$ = D.$JSCompiler_alias_TRUE$$)), !$labelVisible_maxCellIndex_simpleLayout$$ && ($i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 0, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$4$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$)) && (!$icon$$43$$ || 
      $icon$$43$$[D.$DvtNBoxConstants$$.$SOURCE$])))) {
        $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.max(0, window.Math.min($cellIndices$$2_nodeSwatchSize$$, $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$))
      }
      $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = 1
    }
    if(0 > $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$) {
      var $iconWidth$$9$$ = $iconSectionWidth$$, $iconSectionWidth$$ = window.Math.max(0, $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$)
    }
    0 > $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ && ($indicatorSectionWidth$$ = $cellArea_columnCount$$6$$.$w$);
    $cellLayouts_nodeStartLabelGap$$[$maximizedCellIndex$$1_nodeCounts$$] = {cellRows:-1, cellColumns:$cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, overflow:D.$JSCompiler_alias_FALSE$$}
  }else {
    $cellIndices$$2_nodeSwatchSize$$ = [];
    if($cellRows_label$$66_maximizedRow$$6_secondaryLabel$$) {
      $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($cell$$43_maxRows_nbox$$36$$, $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$);
      for($c$$40_n$$22$$ = 0;$c$$40_n$$22$$ < $cellArea_columnCount$$6$$;$c$$40_n$$22$$++) {
        $cellIndices$$2_nodeSwatchSize$$.push($c$$40_n$$22$$ + $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ * $cellArea_columnCount$$6$$)
      }
    }else {
      if($cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$) {
        $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($cell$$43_maxRows_nbox$$36$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$);
        for($nodeCount$$8_r$$59$$ = 0;$nodeCount$$8_r$$59$$ < $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$;$nodeCount$$8_r$$59$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ + $nodeCount$$8_r$$59$$ * $cellArea_columnCount$$6$$)
        }
      }else {
        for($i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 0;$i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ < $cellLayouts_nodeStartLabelGap$$.length;$i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$)
        }
      }
    }
    if($labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth != D.$JSCompiler_alias_NULL$$) {
      $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth, $cell$$43_maxRows_nbox$$36$$ = D.$DvtNBoxDataUtils$$.$getCell$($cell$$43_maxRows_nbox$$36$$, $cellIndices$$2_nodeSwatchSize$$[0]), $cellArea_columnCount$$6$$ = $cell$$43_maxRows_nbox$$36$$.__childArea, $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ = window.Math.floor(($cellArea_columnCount$$6$$.$h$ + $container$$154_gridGap$$2$$) / ($nodeHeight$$3_nodeLayout$$3$$ + 
      $container$$154_gridGap$$2$$)), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = window.Math.floor(($cellArea_columnCount$$6$$.$w$ + $container$$154_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ + $container$$154_gridGap$$2$$))
    }else {
      for($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ = $labelVisible_maxCellIndex_simpleLayout$$ = 0;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ < $cellIndices$$2_nodeSwatchSize$$.length;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$++) {
        !(0,window.isNaN)($maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$]]) && $maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$]] > $maximizedCellIndex$$1_nodeCounts$$[$labelVisible_maxCellIndex_simpleLayout$$] && ($labelVisible_maxCellIndex_simpleLayout$$ = $cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$])
      }
      $cell$$43_maxRows_nbox$$36$$ = D.$DvtNBoxDataUtils$$.$getCell$($cell$$43_maxRows_nbox$$36$$, $labelVisible_maxCellIndex_simpleLayout$$);
      $cellArea_columnCount$$6$$ = $cell$$43_maxRows_nbox$$36$$.__childArea;
      $cell$$43_maxRows_nbox$$36$$ = window.Math.floor(($cellArea_columnCount$$6$$.$h$ + $container$$154_gridGap$$2$$) / ($nodeHeight$$3_nodeLayout$$3$$ + $container$$154_gridGap$$2$$));
      $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ = window.Math.floor(($cellArea_columnCount$$6$$.$w$ + $container$$154_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $options$$212$$.__layout.minimumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$ + $container$$154_gridGap$$2$$));
      if($cell$$43_maxRows_nbox$$36$$ * $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ < $maximizedCellIndex$$1_nodeCounts$$[$labelVisible_maxCellIndex_simpleLayout$$]) {
        $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$212$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$, ($cellArea_columnCount$$6$$.$w$ + $container$$154_gridGap$$2$$) / $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$)))
      }else {
        for($i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$212$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$, ($cellArea_columnCount$$6$$.$w$ + $container$$154_gridGap$$2$$) / $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$)));$i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ < 
        $options$$212$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$;) {
          if(($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ - 1) * $cell$$43_maxRows_nbox$$36$$ >= $maximizedCellIndex$$1_nodeCounts$$[$labelVisible_maxCellIndex_simpleLayout$$]) {
            $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$--, $i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$212$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$, ($cellArea_columnCount$$6$$.$w$ + $container$$154_gridGap$$2$$) / $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$)))
          }else {
            break
          }
        }
      }
      $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ = $cell$$43_maxRows_nbox$$36$$;
      $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$
    }
    for($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ = 0;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$ < $cellIndices$$2_nodeSwatchSize$$.length;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$++) {
      $cellIndex$$8_nodeEndLabelGap$$ = $cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$260$$], $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = D.$JSCompiler_alias_FALSE$$, $maximizedCellIndex$$1_nodeCounts$$[$cellIndex$$8_nodeEndLabelGap$$] > $cellRows_label$$66_maximizedRow$$6_secondaryLabel$$ * $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ && ($nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = D.$JSCompiler_alias_TRUE$$), 
      $cellLayouts_nodeStartLabelGap$$[$cellIndex$$8_nodeEndLabelGap$$] = {cellRows:$cellRows_label$$66_maximizedRow$$6_secondaryLabel$$, cellColumns:$cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, overflow:$nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$}
    }
  }
  $nodeHeight$$3_nodeLayout$$3$$ = {nodeHeight:$nodeHeight$$3_nodeLayout$$3$$, indicatorSectionWidth:$indicatorSectionWidth$$, iconSectionWidth:$iconSectionWidth$$, iconWidth:$iconWidth$$9$$, labelSectionWidth:$i$$731_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$, cellLayouts:$cellLayouts_nodeStartLabelGap$$};
  return $options$$212$$.__layout.__nodeLayout = $nodeHeight$$3_nodeLayout$$3$$
};
D.$DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeDrawerLayout$$($nbox$$37$$, $data$$96$$) {
  var $options$$213$$ = $nbox$$37$$.$getOptions$(), $container$$155_gridGap$$3$$ = $options$$213$$.__layout.gridGap, $nodeStartLabelGap$$1_startLabelGap$$1$$ = $options$$213$$.__layout.nodeStartLabelGap, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = $options$$213$$.__layout.nodeLabelOnlyStartLabelGap, $nodeDrawerLayout_nodeEndLabelGap$$1$$ = $options$$213$$.__layout.nodeEndLabelGap, $nodeSwatchSize$$1$$ = $options$$213$$.__layout.nodeSwatchSize, $node$$261$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$37$$, 
  0), $indicatorIcon$$5$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$37$$, $node$$261$$), $icon$$44$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$37$$, $node$$261$$), $labelVisible$$1_simpleLayout$$1$$ = D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($nbox$$37$$), $nodeHeight$$4$$ = $labelVisible$$1_simpleLayout$$1$$.nodeHeight, $indicatorSectionWidth$$1$$ = $labelVisible$$1_simpleLayout$$1$$.indicatorSectionWidth, $iconSectionWidth$$1$$ = $labelVisible$$1_simpleLayout$$1$$.iconSectionWidth, 
  $nodeStartLabelGap$$1_startLabelGap$$1$$ = $indicatorSectionWidth$$1$$ || $iconSectionWidth$$1$$ ? $nodeStartLabelGap$$1_startLabelGap$$1$$ : $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth != D.$JSCompiler_alias_NULL$$ ? $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth : $options$$213$$.__layout.maximumLabelWidth + $nodeStartLabelGap$$1_startLabelGap$$1$$ + $nodeDrawerLayout_nodeEndLabelGap$$1$$, 
  $childArea$$3$$ = $data$$96$$.__childArea, $columns$$3_label$$67_secondaryLabel$$1$$ = window.Math.floor(($childArea$$3$$.$w$ + $container$$155_gridGap$$3$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ + $container$$155_gridGap$$3$$));
  if(0 == $columns$$3_label$$67_secondaryLabel$$1$$ && $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth == D.$JSCompiler_alias_NULL$$) {
    var $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ = $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$;
    $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ >= $options$$213$$.__layout.minimumLabelWidth && ($labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$, $columns$$3_label$$67_secondaryLabel$$1$$ = window.Math.floor(($childArea$$3$$.$w$ + $container$$155_gridGap$$3$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ + $container$$155_gridGap$$3$$)))
  }
  if(0 == $columns$$3_label$$67_secondaryLabel$$1$$ && $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth == D.$JSCompiler_alias_NULL$$) {
    $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = window.Math.max(0, $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$);
    if($node$$261$$[D.$DvtNBoxConstants$$.$LABEL$] && ($container$$155_gridGap$$3$$ = new D.$DvtContainer$$, $labelVisible$$1_simpleLayout$$1$$ = D.$JSCompiler_alias_FALSE$$, $columns$$3_label$$67_secondaryLabel$$1$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$37$$.$getCtx$(), $node$$261$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$37$$), "left", "middle"), $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($columns$$3_label$$67_secondaryLabel$$1$$).$h$, 
    D.$DvtTextUtils$$.$fitText$($columns$$3_label$$67_secondaryLabel$$1$$, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - $nodeDrawerLayout_nodeEndLabelGap$$1$$, $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$, $container$$155_gridGap$$3$$) && ($labelVisible$$1_simpleLayout$$1$$ = D.$JSCompiler_alias_TRUE$$), $node$$261$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($columns$$3_label$$67_secondaryLabel$$1$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$37$$.$getCtx$(), 
    $node$$261$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$37$$), "left", "middle"), $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($columns$$3_label$$67_secondaryLabel$$1$$).$h$, D.$DvtTextUtils$$.$fitText$($columns$$3_label$$67_secondaryLabel$$1$$, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - $nodeDrawerLayout_nodeEndLabelGap$$1$$, $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$, 
    $container$$155_gridGap$$3$$) && ($labelVisible$$1_simpleLayout$$1$$ = D.$JSCompiler_alias_TRUE$$)), !$labelVisible$$1_simpleLayout$$1$$ && ($labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = 0, $node$$261$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$5$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$37$$, $node$$261$$)) && (!$icon$$44$$ || $icon$$44$$[D.$DvtNBoxConstants$$.$SOURCE$])))) {
      $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = window.Math.max(0, window.Math.min($nodeSwatchSize$$1$$, $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$))
    }
    $columns$$3_label$$67_secondaryLabel$$1$$ = 1
  }
  if(0 > $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$) {
    var $iconWidth$$10$$ = $iconSectionWidth$$1$$, $iconSectionWidth$$1$$ = window.Math.max(0, $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$)
  }
  0 > $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ && ($indicatorSectionWidth$$1$$ = $childArea$$3$$.$w$);
  $nodeDrawerLayout_nodeEndLabelGap$$1$$ = {nodeHeight:$nodeHeight$$4$$, indicatorSectionWidth:$indicatorSectionWidth$$1$$, iconSectionWidth:$iconSectionWidth$$1$$, iconWidth:$iconWidth$$10$$, labelSectionWidth:$labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$, drawerLayout:{rows:-1, columns:$columns$$3_label$$67_secondaryLabel$$1$$}};
  return $options$$213$$.__layout.__nodeDrawerLayout = $nodeDrawerLayout_nodeEndLabelGap$$1$$
};
D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$_calculateSimpleNodeLayout$$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$) {
  var $nodeHeight$$5_options$$214$$ = $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getOptions$(), $label$$68_labelHeight$$8_nodeIndicatorGap$$ = $nodeHeight$$5_options$$214$$.__layout.nodeIndicatorGap, $nodeSingleLabelGap$$ = $nodeHeight$$5_options$$214$$.__layout.nodeSingleLabelGap, $nodeDualLabelGap_padding$$26$$ = $nodeHeight$$5_options$$214$$.__layout.nodeDualLabelGap, $iconHeight$$9_nodeInterLabelGap$$ = $nodeHeight$$5_options$$214$$.__layout.nodeInterLabelGap, $nodeSwatchSize$$2$$ = 
  $nodeHeight$$5_options$$214$$.__layout.nodeSwatchSize, $node$$262$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, 0), $indicatorSectionWidth$$2$$ = $nodeHeight$$5_options$$214$$ = 0, $iconSectionWidth$$2_preferredSize$$4$$ = 0, $labelSectionWidth$$2$$ = D.$JSCompiler_alias_NULL$$, $indicatorIcon$$6$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$262$$), $indicatorColor$$2_indicatorIconHeight$$1$$ = 
  D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$262$$), $icon$$45$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$262$$);
  $indicatorIcon$$6$$ ? ($indicatorColor$$2_indicatorIconHeight$$1$$ = $indicatorIcon$$6$$[D.$DvtNBoxConstants$$.$HEIGHT$], $indicatorSectionWidth$$2$$ = $indicatorIcon$$6$$[D.$DvtNBoxConstants$$.$WIDTH$] + 2 * $label$$68_labelHeight$$8_nodeIndicatorGap$$, $nodeHeight$$5_options$$214$$ = window.Math.max($nodeHeight$$5_options$$214$$, $indicatorColor$$2_indicatorIconHeight$$1$$ + 2 * $label$$68_labelHeight$$8_nodeIndicatorGap$$)) : $indicatorColor$$2_indicatorIconHeight$$1$$ && ($indicatorSectionWidth$$2$$ = 
  $nodeSwatchSize$$2$$);
  if($node$$262$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    $label$$68_labelHeight$$8_nodeIndicatorGap$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getCtx$(), $node$$262$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$), "left", "middle"), $label$$68_labelHeight$$8_nodeIndicatorGap$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$68_labelHeight$$8_nodeIndicatorGap$$).$h$, $nodeHeight$$5_options$$214$$ = window.Math.max($nodeHeight$$5_options$$214$$, 
    $label$$68_labelHeight$$8_nodeIndicatorGap$$ + 2 * $nodeSingleLabelGap$$), $node$$262$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getCtx$(), $node$$262$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$), "left", "middle"), $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ = 
    D.$DvtTextUtils$$.$guessTextDimensions$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$).$h$, $nodeHeight$$5_options$$214$$ = window.Math.max($nodeHeight$$5_options$$214$$, $label$$68_labelHeight$$8_nodeIndicatorGap$$ + $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ + 2 * $nodeDualLabelGap_padding$$26$$ + $iconHeight$$9_nodeInterLabelGap$$))
  }else {
    if($labelSectionWidth$$2$$ = 0, $node$$262$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$6$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$262$$)) && (!$icon$$45$$ || $icon$$45$$[D.$DvtNBoxConstants$$.$SOURCE$])) {
      $labelSectionWidth$$2$$ = $indicatorSectionWidth$$2$$ ? $indicatorSectionWidth$$2$$ : $nodeSwatchSize$$2$$
    }
  }
  $icon$$45$$ && ($iconSectionWidth$$2_preferredSize$$4$$ = window.Math.max($nodeHeight$$5_options$$214$$, (0,D.$DvtAgent$isTouchDevice$$)() ? $icon$$45$$.preferredSizeTouch : $icon$$45$$.preferredSize), $nodeDualLabelGap_padding$$26$$ = ($icon$$45$$[D.$DvtNBoxConstants$$.$SOURCE$] ? $icon$$45$$.sourcePaddingRatio : $icon$$45$$.shapePaddingRatio) * $iconSectionWidth$$2_preferredSize$$4$$, $iconHeight$$9_nodeInterLabelGap$$ = $icon$$45$$[D.$DvtNBoxConstants$$.$HEIGHT$] ? $icon$$45$$[D.$DvtNBoxConstants$$.$HEIGHT$] : 
  $iconSectionWidth$$2_preferredSize$$4$$ - 2 * $nodeDualLabelGap_padding$$26$$, $iconSectionWidth$$2_preferredSize$$4$$ = ($icon$$45$$[D.$DvtNBoxConstants$$.$WIDTH$] ? $icon$$45$$[D.$DvtNBoxConstants$$.$WIDTH$] : $iconSectionWidth$$2_preferredSize$$4$$ - 2 * $nodeDualLabelGap_padding$$26$$) + 2 * $nodeDualLabelGap_padding$$26$$, $nodeHeight$$5_options$$214$$ = window.Math.max($nodeHeight$$5_options$$214$$, $iconHeight$$9_nodeInterLabelGap$$ + 2 * $nodeDualLabelGap_padding$$26$$));
  return{nodeHeight:$nodeHeight$$5_options$$214$$, indicatorSectionWidth:$indicatorSectionWidth$$2$$, iconSectionWidth:$iconSectionWidth$$2_preferredSize$$4$$, labelSectionWidth:$labelSectionWidth$$2$$}
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeBackground$$($nbox$$39$$, $node$$263$$, $nodeContainer$$6$$, $borderRadius$$9_color$$70_nodeLayout$$4$$) {
  var $nodeRect$$1_width$$120$$ = $borderRadius$$9_color$$70_nodeLayout$$4$$.indicatorSectionWidth + $borderRadius$$9_color$$70_nodeLayout$$4$$.iconSectionWidth + $borderRadius$$9_color$$70_nodeLayout$$4$$.labelSectionWidth, $height$$111$$ = $borderRadius$$9_color$$70_nodeLayout$$4$$.nodeHeight;
  $borderRadius$$9_color$$70_nodeLayout$$4$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($nbox$$39$$);
  var $hoverColor$$6$$ = D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$($nbox$$39$$), $selectionColor$$2$$ = D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$($nbox$$39$$), $selectionRect$$1$$ = new D.$DvtRect$$($nbox$$39$$.$getCtx$(), 0, 0, $nodeRect$$1_width$$120$$, $height$$111$$);
  $selectionRect$$1$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  $borderRadius$$9_color$$70_nodeLayout$$4$$ && ($selectionRect$$1$$.$setRx$($borderRadius$$9_color$$70_nodeLayout$$4$$), $selectionRect$$1$$.$setRy$($borderRadius$$9_color$$70_nodeLayout$$4$$));
  $selectionRect$$1$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$6$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$2$$, D.$JSCompiler_alias_NULL$$, 4));
  $selectionRect$$1$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectionColor$$2$$, D.$JSCompiler_alias_NULL$$, 4), D.$JSCompiler_alias_NULL$$);
  $selectionRect$$1$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$6$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$2$$, D.$JSCompiler_alias_NULL$$, 6));
  $nodeContainer$$6$$.$addChild$($selectionRect$$1$$);
  $nodeContainer$$6$$.$setSelectionShape$($selectionRect$$1$$);
  $nodeRect$$1_width$$120$$ = new D.$DvtRect$$($nbox$$39$$.$getCtx$(), 0, 0, $nodeRect$$1_width$$120$$, $height$$111$$);
  $borderRadius$$9_color$$70_nodeLayout$$4$$ && ($nodeRect$$1_width$$120$$.$setRx$($borderRadius$$9_color$$70_nodeLayout$$4$$), $nodeRect$$1_width$$120$$.$setRy$($borderRadius$$9_color$$70_nodeLayout$$4$$));
  $borderRadius$$9_color$$70_nodeLayout$$4$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$39$$, $node$$263$$);
  $nodeRect$$1_width$$120$$.$setSolidFill$($borderRadius$$9_color$$70_nodeLayout$$4$$);
  D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$39$$, $node$$263$$) && D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$39$$, $node$$263$$) && $nodeRect$$1_width$$120$$.$setSolidStroke$(D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$39$$, $node$$263$$), D.$JSCompiler_alias_NULL$$, D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$39$$, $node$$263$$));
  $nodeContainer$$6$$.$addChild$($nodeRect$$1_width$$120$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$39$$, $node$$263$$, $nodeRect$$1_width$$120$$, "background")
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIndicator$$($nbox$$40$$, $node$$264$$, $nodeContainer$$7$$, $nodeLayout$$5$$) {
  var $color$$71$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$40$$, $node$$264$$), $contrastColor$$3_indicatorIconColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$71$$), $indicatorMarker$$2_indicatorX$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$40$$.$getCtx$()) ? $nodeLayout$$5$$.labelSectionWidth + $nodeLayout$$5$$.iconSectionWidth : 0, $indicatorColor$$3_indicatorIcon$$7$$ = D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$40$$, $node$$264$$);
  if($indicatorColor$$3_indicatorIcon$$7$$) {
    var $contrastColor$$3_indicatorIconColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($indicatorColor$$3_indicatorIcon$$7$$), $bgRect$$4$$ = new D.$DvtRect$$($nbox$$40$$.$getCtx$(), $indicatorMarker$$2_indicatorX$$2$$, 0, $nodeLayout$$5$$.indicatorSectionWidth, $nodeLayout$$5$$.nodeHeight);
    $bgRect$$4$$.$setSolidFill$($indicatorColor$$3_indicatorIcon$$7$$);
    D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$40$$, $bgRect$$4$$, $nodeLayout$$5$$);
    $nodeContainer$$7$$.$addChild$($bgRect$$4$$);
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$40$$, $node$$264$$, $bgRect$$4$$, D.$DvtNBoxConstants$$.$INDICATOR$)
  }
  if($indicatorColor$$3_indicatorIcon$$7$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$40$$, $node$$264$$)) {
    $contrastColor$$3_indicatorIconColor$$2$$ = $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$COLOR$] ? $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$COLOR$] : $contrastColor$$3_indicatorIconColor$$2$$, $indicatorMarker$$2_indicatorX$$2$$ = $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SOURCE$] ? new D.$DvtImageMarker$$($nbox$$40$$.$getCtx$(), $indicatorMarker$$2_indicatorX$$2$$ + $nodeLayout$$5$$.indicatorSectionWidth / 2, $nodeLayout$$5$$.nodeHeight / 
    2, $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$], $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$HEIGHT$], $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SOURCE$]) : new D.$DvtSimpleMarker$$($nbox$$40$$.$getCtx$(), $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $indicatorMarker$$2_indicatorX$$2$$ + $nodeLayout$$5$$.indicatorSectionWidth / 2, $nodeLayout$$5$$.nodeHeight / 2, $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$], 
    $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$HEIGHT$]), "none" != $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker$$2_indicatorX$$2$$.$setFill$(new D.$DvtPatternFill$$($indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$PATTERN$], $contrastColor$$3_indicatorIconColor$$2$$, $color$$71$$)) : $indicatorMarker$$2_indicatorX$$2$$.$setSolidFill$($contrastColor$$3_indicatorIconColor$$2$$), $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$] > 
    $nodeLayout$$5$$.indicatorSectionWidth && D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$40$$, $indicatorMarker$$2_indicatorX$$2$$, $nodeLayout$$5$$), $nodeContainer$$7$$.$addChild$($indicatorMarker$$2_indicatorX$$2$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$40$$, $node$$264$$, $indicatorMarker$$2_indicatorX$$2$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$)
  }
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeIcon$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIcon$$($nbox$$41$$, $node$$265$$, $nodeContainer$$8$$, $nodeLayout$$6$$) {
  var $color$$72$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$41$$, $node$$265$$), $contrastColor$$4_iconColor$$1$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$72$$), $iconX$$2_rtl$$24$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$41$$.$getCtx$()), $icon$$46$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$41$$, $node$$265$$);
  if($icon$$46$$) {
    var $iconHeight$$10_padding$$27$$ = ($icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$] ? $icon$$46$$.sourcePaddingRatio : $icon$$46$$.shapePaddingRatio) * $nodeLayout$$6$$.nodeHeight, $iconMarker$$1_iconWidth$$12$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$WIDTH$] ? $icon$$46$$[D.$DvtNBoxConstants$$.$WIDTH$] : $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth : $nodeLayout$$6$$.iconSectionWidth - 2 * $iconHeight$$10_padding$$27$$, $iconHeight$$10_padding$$27$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$HEIGHT$] ? 
    $icon$$46$$[D.$DvtNBoxConstants$$.$HEIGHT$] : $nodeLayout$$6$$.nodeHeight - 2 * $iconHeight$$10_padding$$27$$, $iconX$$2_rtl$$24$$ = $nodeLayout$$6$$[$iconX$$2_rtl$$24$$ ? "labelSectionWidth" : "indicatorSectionWidth"] + window.Math.max($nodeLayout$$6$$.iconSectionWidth / 2, $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth / 2 : 0), $iconY$$2$$ = $nodeLayout$$6$$.nodeHeight / 2, $contrastColor$$4_iconColor$$1$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$COLOR$] ? $icon$$46$$[D.$DvtNBoxConstants$$.$COLOR$] : 
    $contrastColor$$4_iconColor$$1$$, $iconMarker$$1_iconWidth$$12$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$] ? new D.$DvtImageMarker$$($nbox$$41$$.$getCtx$(), $iconX$$2_rtl$$24$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$, $iconHeight$$10_padding$$27$$, $icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$]) : new D.$DvtSimpleMarker$$($nbox$$41$$.$getCtx$(), $icon$$46$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $iconX$$2_rtl$$24$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$, $iconHeight$$10_padding$$27$$);
    "none" != $icon$$46$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $iconMarker$$1_iconWidth$$12$$.$setFill$(new D.$DvtPatternFill$$($icon$$46$$[D.$DvtNBoxConstants$$.$PATTERN$], $contrastColor$$4_iconColor$$1$$, $color$$72$$)) : $iconMarker$$1_iconWidth$$12$$.$setSolidFill$($contrastColor$$4_iconColor$$1$$);
    (0 == $nodeLayout$$6$$.indicatorSectionWidth || 0 == $nodeLayout$$6$$.labelSectionWidth) && D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$41$$, $iconMarker$$1_iconWidth$$12$$, $nodeLayout$$6$$);
    $nodeContainer$$8$$.$addChild$($iconMarker$$1_iconWidth$$12$$)
  }
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$41$$, $node$$265$$, $iconMarker$$1_iconWidth$$12$$, D.$DvtNBoxConstants$$.$ICON$)
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeLabels$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeLabels$$($nbox$$42$$, $node$$266$$, $nodeContainer$$9_yOffset$$7$$, $nodeLayout$$7$$) {
  var $nodeEndLabelGap$$2_options$$215$$ = $nbox$$42$$.$getOptions$(), $nodeInterLabelGap$$1$$ = $nodeEndLabelGap$$2_options$$215$$.__layout.nodeInterLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$215$$.__layout.nodeLabelOnlyStartLabelGap, $color$$73_contrastColor$$5_nodeStartLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$215$$.__layout.nodeStartLabelGap, $nodeEndLabelGap$$2_options$$215$$ = $nodeEndLabelGap$$2_options$$215$$.__layout.nodeEndLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = 
  $nodeLayout$$7$$.indicatorSectionWidth || $nodeLayout$$7$$.iconSectionWidth ? $color$$73_contrastColor$$5_nodeStartLabelGap$$2$$ : $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$, $color$$73_contrastColor$$5_nodeStartLabelGap$$2$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$42$$, $node$$266$$), $color$$73_contrastColor$$5_nodeStartLabelGap$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$73_contrastColor$$5_nodeStartLabelGap$$2$$), $labelX$$4_rtl$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$42$$.$getCtx$()), 
  $halign$$10_secondaryLabel$$3$$ = $labelX$$4_rtl$$25$$ ? "right" : "left", $labelX$$4_rtl$$25$$ = $labelX$$4_rtl$$25$$ ? $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ : $nodeLayout$$7$$.indicatorSectionWidth + $nodeLayout$$7$$.iconSectionWidth + $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$;
  if($node$$266$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $label$$69$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$42$$.$getCtx$(), $node$$266$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$42$$), $halign$$10_secondaryLabel$$3$$, "middle"), $labelHeight$$9$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$69$$).$h$;
    D.$DvtTextUtils$$.$fitText$($label$$69$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$215$$, $labelHeight$$9$$, $nodeContainer$$9_yOffset$$7$$) && (D.$DvtNBoxRenderer$$.$positionText$($label$$69$$, $labelX$$4_rtl$$25$$, $nodeLayout$$7$$.nodeHeight / 2), $label$$69$$.$getCSSStyle$() && $label$$69$$.$getCSSStyle$().$getStyle$("color") ? $label$$69$$.$setSolidFill$($label$$69$$.$getCSSStyle$().$getStyle$("color")) : $label$$69$$.$setSolidFill$($color$$73_contrastColor$$5_nodeStartLabelGap$$2$$), 
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$42$$, $node$$266$$, $label$$69$$, D.$DvtNBoxConstants$$.$LABEL$));
    if($node$$266$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$]) {
      var $halign$$10_secondaryLabel$$3$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$42$$.$getCtx$(), $node$$266$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$42$$), $halign$$10_secondaryLabel$$3$$, "middle"), $secondaryLabelHeight$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$($halign$$10_secondaryLabel$$3$$).$h$;
      D.$DvtTextUtils$$.$fitText$($halign$$10_secondaryLabel$$3$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$215$$, $secondaryLabelHeight$$3$$, $nodeContainer$$9_yOffset$$7$$) && ($nodeContainer$$9_yOffset$$7$$ = ($nodeLayout$$7$$.nodeHeight - $labelHeight$$9$$ - $secondaryLabelHeight$$3$$ - $nodeInterLabelGap$$1$$) / 2, D.$DvtNBoxRenderer$$.$positionText$($label$$69$$, $labelX$$4_rtl$$25$$, $nodeContainer$$9_yOffset$$7$$ + 
      $labelHeight$$9$$ / 2), D.$DvtNBoxRenderer$$.$positionText$($halign$$10_secondaryLabel$$3$$, $labelX$$4_rtl$$25$$, $nodeContainer$$9_yOffset$$7$$ + $labelHeight$$9$$ + $nodeInterLabelGap$$1$$ + $secondaryLabelHeight$$3$$ / 2), $halign$$10_secondaryLabel$$3$$.$getCSSStyle$() && $halign$$10_secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color") ? $halign$$10_secondaryLabel$$3$$.$setSolidFill$($halign$$10_secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color")) : $halign$$10_secondaryLabel$$3$$.$setSolidFill$($color$$73_contrastColor$$5_nodeStartLabelGap$$2$$), 
      D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$42$$, $node$$266$$, $halign$$10_secondaryLabel$$3$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$))
    }
  }
};
D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$ = function $$DvtNBoxNodeRenderer$$$$_clipIfNecessary$$($borderRadius$$10_nbox$$43$$, $displayable$$68$$, $nodeHeight$$6_nodeLayout$$8$$) {
  if($borderRadius$$10_nbox$$43$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($borderRadius$$10_nbox$$43$$)) {
    var $nodeWidth$$3$$ = $nodeHeight$$6_nodeLayout$$8$$.indicatorSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.iconSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.labelSectionWidth;
    $nodeHeight$$6_nodeLayout$$8$$ = $nodeHeight$$6_nodeLayout$$8$$.nodeHeight;
    var $clipPath$$8$$ = new D.$DvtClipPath$$;
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$8$$, 0, 0, $nodeWidth$$3$$, $nodeHeight$$6_nodeLayout$$8$$, $borderRadius$$10_nbox$$43$$, $borderRadius$$10_nbox$$43$$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($displayable$$68$$, $clipPath$$8$$)
  }
};
D.$DvtNBoxNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxNodeRenderer$$$$animateUpdate$$($animationHandler$$30$$, $oldNode$$14$$, $newNode$$11$$) {
  var $oldNBox$$10$$ = $animationHandler$$30$$.$_oldNBox$, $newNBox$$10$$ = $animationHandler$$30$$.$_newNBox$, $clipPath$$9_oldGlobalMatrix$$1$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$14$$), $movePlayable_newGlobalMatrix$$1_playable$$45$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$11$$), $newMatrix$$3$$ = $newNode$$11$$.$getMatrix$(), $parent$$76$$ = $newNode$$11$$.getParent();
  $oldNode$$14$$.$setAlpha$(0);
  $animationHandler$$30$$.$_newNBox$.$addChild$($newNode$$11$$);
  $newNode$$11$$.$setMatrix$($clipPath$$9_oldGlobalMatrix$$1$$);
  var $newScrollMatrix_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($oldNBox$$10$$, $oldNode$$14$$), $newRect_newScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($newNBox$$10$$, $newNode$$11$$);
  if($newScrollMatrix_oldScrollContainer$$ || $newRect_newScrollContainer$$) {
    var $clipPath$$9_oldGlobalMatrix$$1$$ = new D.$DvtClipPath$$, $oldScrollMatrix_rect$$37$$;
    $newScrollMatrix_oldScrollContainer$$ && ($oldScrollMatrix_rect$$37$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newScrollMatrix_oldScrollContainer$$), $oldScrollMatrix_rect$$37$$ = new D.$DvtRectangle$$($oldScrollMatrix_rect$$37$$.$_tx$, $oldScrollMatrix_rect$$37$$.$_ty$, $newScrollMatrix_oldScrollContainer$$.getWidth(), $newScrollMatrix_oldScrollContainer$$.getHeight()));
    $newRect_newScrollContainer$$ && ($newScrollMatrix_oldScrollContainer$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newRect_newScrollContainer$$), $newRect_newScrollContainer$$ = new D.$DvtRectangle$$($newScrollMatrix_oldScrollContainer$$.$_tx$, $newScrollMatrix_oldScrollContainer$$.$_ty$, $newRect_newScrollContainer$$.getWidth(), $newRect_newScrollContainer$$.getHeight()), $oldScrollMatrix_rect$$37$$ = $oldScrollMatrix_rect$$37$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($oldScrollMatrix_rect$$37$$, 
    $newRect_newScrollContainer$$) : $newRect_newScrollContainer$$);
    $oldScrollMatrix_rect$$37$$ && ((0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$9_oldGlobalMatrix$$1$$, $oldScrollMatrix_rect$$37$$.x, $oldScrollMatrix_rect$$37$$.y, $oldScrollMatrix_rect$$37$$.$w$, $oldScrollMatrix_rect$$37$$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($newNode$$11$$, $clipPath$$9_oldGlobalMatrix$$1$$))
  }
  $movePlayable_newGlobalMatrix$$1_playable$$45$$ = new D.$DvtAnimMoveTo$$($newNode$$11$$.$getCtx$(), $newNode$$11$$, new D.$DvtPoint$$($movePlayable_newGlobalMatrix$$1_playable$$45$$.$_tx$, $movePlayable_newGlobalMatrix$$1_playable$$45$$.$_ty$), $animationHandler$$30$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($movePlayable_newGlobalMatrix$$1_playable$$45$$, function() {
    $parent$$76$$.$addChild$($newNode$$11$$);
    $newNode$$11$$.$setMatrix$($newMatrix$$3$$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($newNode$$11$$, D.$JSCompiler_alias_NULL$$)
  });
  $animationHandler$$30$$.add($movePlayable_newGlobalMatrix$$1_playable$$45$$, 1);
  $movePlayable_newGlobalMatrix$$1_playable$$45$$ = new D.$DvtCustomAnimation$$($newNBox$$10$$.$getCtx$(), $newNode$$11$$, $animationHandler$$30$$.$getAnimationDuration$());
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, "background");
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$LABEL$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$INDICATOR$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$ICON$);
  $animationHandler$$30$$.add($movePlayable_newGlobalMatrix$$1_playable$$45$$, 1)
};
D.$DvtNBoxNodeRenderer$$.$_animateFill$ = function $$DvtNBoxNodeRenderer$$$$_animateFill$$($playable$$46$$, $oldDisplayable$$1_oldNBox$$11$$, $newDisplayable$$1_newNBox$$11$$, $oldNode$$15$$, $newNode$$12$$, $displayableKey$$) {
  $oldDisplayable$$1_oldNBox$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($oldDisplayable$$1_oldNBox$$11$$, $oldNode$$15$$.getData(), $displayableKey$$);
  $newDisplayable$$1_newNBox$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newDisplayable$$1_newNBox$$11$$, $newNode$$12$$.getData(), $displayableKey$$);
  $oldDisplayable$$1_oldNBox$$11$$ && $newDisplayable$$1_newNBox$$11$$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$46$$.$_animator$, "typeFill", $newDisplayable$$1_newNBox$$11$$, $newDisplayable$$1_newNBox$$11$$.$getFill$, $newDisplayable$$1_newNBox$$11$$.$setFill$, $newDisplayable$$1_newNBox$$11$$.$getFill$()), $newDisplayable$$1_newNBox$$11$$.$setFill$($oldDisplayable$$1_oldNBox$$11$$.$getFill$()))
};
D.$DvtNBoxNodeRenderer$$.$animateDelete$ = function $$DvtNBoxNodeRenderer$$$$animateDelete$$($animationHandler$$31$$, $oldNode$$16$$) {
  var $animationPhase$$4_oldDims$$2$$ = 0, $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = $animationHandler$$31$$.$_oldNBox$, $newNBox$$12$$ = $animationHandler$$31$$.$_newNBox$, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $oldNode$$16$$.getData(), $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNodeIndex$($newNBox$$12$$, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxConstants$$.ID]);
  if(!(0,window.isNaN)($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$) && ($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNode$($newNBox$$12$$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($newNBox$$12$$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$))) {
    if($animationPhase$$4_oldDims$$2$$ = 1, D.$DvtNBoxDataUtils$$.$getGrouping$($newNBox$$12$$)) {
      if($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $newNBox$$12$$.$getOptions$().__groups, D.$DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$12$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxDataUtils$$.$getCellIndex$($newNBox$$12$$, 
      $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$)]), $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$ = $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$)]) {
        if($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$12$$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$)) {
          $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$), $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$getOptions$().__layout.__nodeLayout, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = 
          new D.$DvtPoint$$(($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.indicatorSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.iconSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.labelSectionWidth) / 2, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.nodeHeight / 2), $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), 
          $oldNode$$16$$, new D.$DvtPoint$$($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.$_tx$ - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.x, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.$_ty$ - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.y), $animationHandler$$31$$.$getAnimationDuration$()), $animationPhase$$4_oldDims$$2$$)
        }
      }
    }else {
      if($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxConstants$$.$ROW$] != $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$ROW$] || $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxConstants$$.$COLUMN$] != $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$COLUMN$]) {
        $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$16$$);
        $animationPhase$$4_oldDims$$2$$ = $oldNode$$16$$.$getDimensions$();
        $animationHandler$$31$$.$_newNBox$.$addChild$($oldNode$$16$$);
        $oldNode$$16$$.$setMatrix$($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$);
        var $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$($newNBox$$12$$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$ROW$], $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellMatrix_overflow$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$12$$, 
        $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.getData(), "overflow");
        if($cellMatrix_overflow$$5$$) {
          $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($cellMatrix_overflow$$5$$), $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_tx$, $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_ty$), $animationHandler$$31$$.$getAnimationDuration$()), 1)
        }else {
          var $cellMatrix_overflow$$5$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$), $cellDimensions$$ = $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.$getDimensions$(), $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$getOptions$().__layout.__nodeLayout, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = 
          new D.$DvtPoint$$(($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.indicatorSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.iconSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.labelSectionWidth) / 2, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.nodeHeight / 2);
          $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($cellMatrix_overflow$$5$$.$_tx$ + $cellDimensions$$.$w$ / 2 - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.x, $cellMatrix_overflow$$5$$.$_ty$ + $cellDimensions$$.$h$ / 2 - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.y), $animationHandler$$31$$.$getAnimationDuration$()), 1)
        }
        $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = new D.$DvtCustomAnimation$$($newNBox$$12$$.$getCtx$(), $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$, $animationHandler$$31$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_animator$, "typeNumber", $oldNode$$16$$, $oldNode$$16$$.$getScaleX$, $oldNode$$16$$.$setScaleX$, 0.01);
        (0,D.$JSCompiler_StaticMethods_addProp$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_animator$, "typeNumber", $oldNode$$16$$, $oldNode$$16$$.$getScaleY$, $oldNode$$16$$.$setScaleY$, 0.01);
        (0,D.$DvtPlayable$appendOnEnd$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, function() {
          $newNBox$$12$$.$_deleteContainer$.$addChild$($oldNode$$16$$)
        });
        $animationHandler$$31$$.add($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, 2);
        $animationHandler$$31$$.add(new D.$DvtAnimMoveBy$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($animationPhase$$4_oldDims$$2$$.$w$ / 2, $animationPhase$$4_oldDims$$2$$.$h$ / 2), $animationHandler$$31$$.$getAnimationDuration$()), 2);
        $animationHandler$$31$$.add(new D.$DvtAnimFadeOut$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, $animationHandler$$31$$.$getAnimationDuration$()), 2);
        return
      }
    }
  }
  $oldNode$$16$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$16$$));
  if($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, $oldNode$$16$$)) {
    $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = new D.$DvtClipPath$$, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$), $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$ = new D.$DvtRectangle$$($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.$_tx$, 
    $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.$_ty$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.$_width$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.$_height$), (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.x, 
    $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.y, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.$w$, $centerMatrix$$2_group$$30_groupNode$$14_newNode$$13_newNodeIndex_rect$$38_scrollContainer$$2$$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($oldNode$$16$$, $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$)
  }
  $animationHandler$$31$$.add(new D.$DvtAnimFadeOut$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, $animationHandler$$31$$.$getAnimationDuration$()), $animationPhase$$4_oldDims$$2$$);
  $newNBox$$12$$.$_deleteContainer$.$addChild$($oldNode$$16$$)
};
D.$DvtNBoxNodeRenderer$$.$animateInsert$ = function $$DvtNBoxNodeRenderer$$$$animateInsert$$($animationHandler$$32$$, $newNode$$14$$) {
  var $animationPhase$$5$$ = 2, $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$ = $animationHandler$$32$$.$_oldNBox$, $newNBox$$13_playable$$47$$ = $animationHandler$$32$$.$_newNBox$, $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$ = $newNode$$14$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getNodeIndex$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$);
  if(!(0,window.isNaN)($centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$) && ($centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getNode$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$) && 
  ($animationPhase$$5$$ = 1, D.$DvtNBoxDataUtils$$.$getGrouping$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$)))) {
    var $centerOffset$$1_groups$$8_nodeLayout$$10$$ = $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$.$getOptions$().__groups;
    D.$DvtNBoxDataUtils$$.$getGroupBehavior$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($centerOffset$$1_groups$$8_nodeLayout$$10$$ = $centerOffset$$1_groups$$8_nodeLayout$$10$$[D.$DvtNBoxDataUtils$$.$getCellIndex$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$)]);
    if($centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$ = $centerOffset$$1_groups$$8_nodeLayout$$10$$[D.$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$)]) {
      if($centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$)) {
        var $childMatrix$$2$$ = $newNode$$14$$.$getMatrix$(), $parent$$77$$ = $newNode$$14$$.getParent(), $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$14$$), $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$), $centerOffset$$1_groups$$8_nodeLayout$$10$$ = $newNBox$$13_playable$$47$$.$getOptions$().__layout.__nodeLayout, 
        $centerOffset$$1_groups$$8_nodeLayout$$10$$ = new D.$DvtPoint$$(($centerOffset$$1_groups$$8_nodeLayout$$10$$.indicatorSectionWidth + $centerOffset$$1_groups$$8_nodeLayout$$10$$.iconSectionWidth + $centerOffset$$1_groups$$8_nodeLayout$$10$$.labelSectionWidth) / 2, $centerOffset$$1_groups$$8_nodeLayout$$10$$.nodeHeight / 2);
        $centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$.translate(-$centerOffset$$1_groups$$8_nodeLayout$$10$$.x, -$centerOffset$$1_groups$$8_nodeLayout$$10$$.y);
        $newNBox$$13_playable$$47$$.$addChild$($newNode$$14$$);
        $newNode$$14$$.$setMatrix$($centerMatrix$$3_group$$31_groupNode$$15_id$$232_oldNode$$17_oldNodeIndex$$);
        $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$ = new D.$DvtAnimMoveTo$$($newNBox$$13_playable$$47$$.$getCtx$(), $newNode$$14$$, new D.$DvtPoint$$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$.$_tx$, $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$.$_ty$), $animationHandler$$32$$.$getAnimationDuration$());
        (0,D.$DvtPlayable$appendOnEnd$$)($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, function() {
          $newNode$$14$$.$setMatrix$($childMatrix$$2$$);
          $parent$$77$$.$addChild$($newNode$$14$$)
        });
        $animationHandler$$32$$.add($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $animationPhase$$5$$)
      }
    }
  }
  $newNode$$14$$.$setAlpha$(0);
  $newNBox$$13_playable$$47$$ = new D.$DvtAnimFadeIn$$($newNBox$$13_playable$$47$$.$getCtx$(), $newNode$$14$$, $animationHandler$$32$$.$getAnimationDuration$());
  $animationHandler$$32$$.add($newNBox$$13_playable$$47$$, $animationPhase$$5$$)
};
D.$DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$44$$, $object$$15$$) {
  $object$$15$$.$setAriaRole$("img");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$25$$ = $object$$15$$.$getAriaLabel$();
    $desc$$25$$ && $object$$15$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$25$$)
  }
};
D.$DvtNBoxCategoryNodeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryNodeRenderer$$, D.$DvtObj$$, "DvtNBoxCategoryNodeRenderer");
D.$DvtNBoxCategoryNodeRenderer$$.$render$ = function $$DvtNBoxCategoryNodeRenderer$$$$render$$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$57$$, $gap$$22$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$57$$, $gap$$22$$);
  var $rendered$$5$$ = D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$57$$, $gap$$22$$);
  D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$57$$, $rendered$$5$$, $gap$$22$$);
  D.$DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$14$$, $nodeContainer$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeBackground$$($color$$67_nbox$$15$$, $node$$255$$, $nodeContainer$$1$$, $borderRadius$$6_scale$$58$$, $gap$$23_nodeRect_side$$22$$) {
  $node$$255$$.__scale = $borderRadius$$6_scale$$58$$;
  $node$$255$$.__gap = $gap$$23_nodeRect_side$$22$$;
  $gap$$23_nodeRect_side$$22$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($node$$255$$);
  $borderRadius$$6_scale$$58$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($color$$67_nbox$$15$$);
  var $hoverColor$$5$$ = D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$($color$$67_nbox$$15$$), $selectionColor$$1$$ = D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$($color$$67_nbox$$15$$), $selectionRect$$ = new D.$DvtRect$$($color$$67_nbox$$15$$.$getCtx$(), -$gap$$23_nodeRect_side$$22$$ / 2, -$gap$$23_nodeRect_side$$22$$ / 2, $gap$$23_nodeRect_side$$22$$, $gap$$23_nodeRect_side$$22$$);
  $selectionRect$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  $borderRadius$$6_scale$$58$$ && ($selectionRect$$.$setRx$($borderRadius$$6_scale$$58$$), $selectionRect$$.$setRy$($borderRadius$$6_scale$$58$$));
  $selectionRect$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$1$$, D.$JSCompiler_alias_NULL$$, 4));
  $selectionRect$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectionColor$$1$$, D.$JSCompiler_alias_NULL$$, 4), D.$JSCompiler_alias_NULL$$);
  $selectionRect$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$1$$, D.$JSCompiler_alias_NULL$$, 6));
  $nodeContainer$$1$$.$addChild$($selectionRect$$);
  $nodeContainer$$1$$.$setSelectionShape$($selectionRect$$);
  $gap$$23_nodeRect_side$$22$$ = new D.$DvtRect$$($color$$67_nbox$$15$$.$getCtx$(), -$gap$$23_nodeRect_side$$22$$ / 2, -$gap$$23_nodeRect_side$$22$$ / 2, $gap$$23_nodeRect_side$$22$$, $gap$$23_nodeRect_side$$22$$);
  $borderRadius$$6_scale$$58$$ && ($gap$$23_nodeRect_side$$22$$.$setRx$($borderRadius$$6_scale$$58$$), $gap$$23_nodeRect_side$$22$$.$setRy$($borderRadius$$6_scale$$58$$));
  $color$$67_nbox$$15$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($color$$67_nbox$$15$$, $node$$255$$);
  $gap$$23_nodeRect_side$$22$$.$setSolidFill$($color$$67_nbox$$15$$);
  $nodeContainer$$1$$.$addChild$($gap$$23_nodeRect_side$$22$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$ = function $$DvtNBoxCategoryNodeRenderer$$$$getSideLength$$($node$$256$$) {
  return $node$$256$$.__scale * window.Math.sqrt($node$$256$$.nodeIndices.length) - $node$$256$$.__gap
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeIndicator$$($nbox$$16$$, $node$$257$$, $nodeContainer$$2$$, $color$$68_scale$$59$$, $gap$$24_indicatorIcon$$2$$) {
  var $bgRect$$3_indicatorIconColor_retVal$$3$$ = D.$JSCompiler_alias_FALSE$$, $indicatorColor_markerGap$$ = $nbox$$16$$.$getOptions$().__layout.markerGap, $indicatorMarker_rtl$$17$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$16$$.$getCtx$()), $side$$23$$ = $color$$68_scale$$59$$ * window.Math.sqrt($node$$257$$.nodeIndices.length) - $gap$$24_indicatorIcon$$2$$;
  $color$$68_scale$$59$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($nbox$$16$$, $node$$257$$);
  var $contrastColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$68_scale$$59$$), $indicatorWidth$$ = $side$$23$$ / 4, $indicatorIconScale$$ = 1, $indicatorX$$ = $indicatorMarker_rtl$$17$$ ? $side$$23$$ / 2 - $indicatorWidth$$ : -$side$$23$$ / 2;
  ($gap$$24_indicatorIcon$$2$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($nbox$$16$$, $node$$257$$)) && ($indicatorIconScale$$ = window.Math.min($indicatorWidth$$ / ($gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$WIDTH$] + 2 * $indicatorColor_markerGap$$), $side$$23$$ / ($gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$HEIGHT$] + 2 * $indicatorColor_markerGap$$)));
  if($indicatorColor_markerGap$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($nbox$$16$$, $node$$257$$)) {
    $contrastColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($indicatorColor_markerGap$$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = new D.$DvtRect$$($nbox$$16$$.$getCtx$(), $indicatorX$$, -$side$$23$$ / 2, $indicatorWidth$$, $side$$23$$), $bgRect$$3_indicatorIconColor_retVal$$3$$.$setSolidFill$($indicatorColor_markerGap$$), $nodeContainer$$2$$.$addChild$($bgRect$$3_indicatorIconColor_retVal$$3$$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = D.$JSCompiler_alias_TRUE$$
  }
  $gap$$24_indicatorIcon$$2$$ && ($bgRect$$3_indicatorIconColor_retVal$$3$$ = $gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$COLOR$] ? $gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$COLOR$] : $contrastColor$$, $indicatorMarker_rtl$$17$$ = new D.$DvtSimpleMarker$$($nbox$$16$$.$getCtx$(), $gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", ($indicatorMarker_rtl$$17$$ ? 1 : -1) * ($side$$23$$ - $indicatorWidth$$) / 2, 0, $gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$WIDTH$] * 
  $indicatorIconScale$$, $gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$HEIGHT$] * $indicatorIconScale$$, D.$JSCompiler_alias_NULL$$), $gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$] && "none" != $gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker_rtl$$17$$.$setFill$(new D.$DvtPatternFill$$($gap$$24_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$], $bgRect$$3_indicatorIconColor_retVal$$3$$, $color$$68_scale$$59$$)) : $indicatorMarker_rtl$$17$$.$setSolidFill$($bgRect$$3_indicatorIconColor_retVal$$3$$), 
  $nodeContainer$$2$$.$addChild$($indicatorMarker_rtl$$17$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$16$$, $node$$257$$, $indicatorMarker_rtl$$17$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = D.$JSCompiler_alias_TRUE$$);
  return $bgRect$$3_indicatorIconColor_retVal$$3$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeCount$$($fontSize$$13_nbox$$17$$, $node$$258$$, $nodeContainer$$3$$, $scale$$60_side$$24$$, $bIndicator$$1_width$$119$$, $color$$69_contrastColor$$1_gap$$25$$) {
  var $labelGap$$1$$ = $fontSize$$13_nbox$$17$$.$getOptions$().__layout.categoryNodeLabelGap, $countX_rtl$$18$$ = (0,D.$DvtAgent$isRightToLeft$$)($fontSize$$13_nbox$$17$$.$getCtx$()), $alphaFade_labelBounds$$12$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($fontSize$$13_nbox$$17$$), $count$$19_highlightedItems$$1$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($fontSize$$13_nbox$$17$$), $label$$63$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fontSize$$13_nbox$$17$$, $node$$258$$, "label");
  if($count$$19_highlightedItems$$1$$) {
    if($count$$19_highlightedItems$$1$$ = $node$$258$$.highlightedCount, 0 == $count$$19_highlightedItems$$1$$) {
      $label$$63$$ && $label$$63$$.$setTextString$("");
      $nodeContainer$$3$$.$setAlpha$($alphaFade_labelBounds$$12$$);
      return
    }
  }else {
    $count$$19_highlightedItems$$1$$ = $node$$258$$.nodeIndices.length
  }
  $scale$$60_side$$24$$ = $scale$$60_side$$24$$ * window.Math.sqrt($node$$258$$.nodeIndices.length) - $color$$69_contrastColor$$1_gap$$25$$;
  $bIndicator$$1_width$$119$$ = $bIndicator$$1_width$$119$$ ? 0.75 * $scale$$60_side$$24$$ : $scale$$60_side$$24$$;
  $countX_rtl$$18$$ = ($countX_rtl$$18$$ ? -1 : 1) * ($scale$$60_side$$24$$ - $bIndicator$$1_width$$119$$) / 2;
  $color$$69_contrastColor$$1_gap$$25$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($fontSize$$13_nbox$$17$$, $node$$258$$);
  $color$$69_contrastColor$$1_gap$$25$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$69_contrastColor$$1_gap$$25$$);
  $alphaFade_labelBounds$$12$$ = new D.$DvtRectangle$$(0, 0, $bIndicator$$1_width$$119$$ - 2 * $labelGap$$1$$, $scale$$60_side$$24$$ - 2 * $labelGap$$1$$);
  $label$$63$$ ? $label$$63$$.$setTextString$("" + $count$$19_highlightedItems$$1$$) : ($label$$63$$ = D.$DvtNBoxRenderer$$.$createText$($fontSize$$13_nbox$$17$$.$getCtx$(), "" + $count$$19_highlightedItems$$1$$, D.$DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$($fontSize$$13_nbox$$17$$), "center", "middle"), D.$DvtNBoxDataUtils$$.$setDisplayable$($fontSize$$13_nbox$$17$$, $node$$258$$, $label$$63$$, "label"));
  $fontSize$$13_nbox$$17$$ = $label$$63$$.$getOptimalFontSize$($alphaFade_labelBounds$$12$$);
  $label$$63$$.$setFontSize$($fontSize$$13_nbox$$17$$);
  D.$DvtTextUtils$$.$fitText$($label$$63$$, $bIndicator$$1_width$$119$$ - 2 * $labelGap$$1$$, $scale$$60_side$$24$$ - 2 * $labelGap$$1$$, $nodeContainer$$3$$) && (D.$DvtNBoxRenderer$$.$positionText$($label$$63$$, $countX_rtl$$18$$, 0), $label$$63$$.$setSolidFill$($color$$69_contrastColor$$1_gap$$25$$))
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateUpdate$$($animationHandler$$20$$, $oldNode$$12_playable$$39$$, $newNode$$9$$) {
  var $oldGlobalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$12_playable$$39$$), $newGlobalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$9$$), $newMatrix$$2$$ = $newNode$$9$$.$getMatrix$(), $parent$$74$$ = $newNode$$9$$.getParent();
  $oldNode$$12_playable$$39$$.$setAlpha$(0);
  $animationHandler$$20$$.$_newNBox$.$addChild$($newNode$$9$$);
  $newNode$$9$$.$setMatrix$($oldGlobalMatrix$$);
  $oldNode$$12_playable$$39$$ = new D.$DvtAnimMoveTo$$($newNode$$9$$.$getCtx$(), $newNode$$9$$, new D.$DvtPoint$$($newGlobalMatrix$$.$_tx$, $newGlobalMatrix$$.$_ty$), $animationHandler$$20$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($oldNode$$12_playable$$39$$, function() {
    $parent$$74$$.$addChild$($newNode$$9$$);
    $newNode$$9$$.$setMatrix$($newMatrix$$2$$)
  });
  $animationHandler$$20$$.add($oldNode$$12_playable$$39$$, 1)
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateDelete$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateDelete$$($animationHandler$$21$$, $oldNode$$13$$) {
  var $animationPhase$$ = 1, $fadePlayable_oldNBox$$4_scalePlayable$$ = $animationHandler$$21$$.$_oldNBox$, $newNBox$$2$$ = $animationHandler$$21$$.$_newNBox$;
  D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($fadePlayable_oldNBox$$4_scalePlayable$$, $newNBox$$2$$) && D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($fadePlayable_oldNBox$$4_scalePlayable$$, $newNBox$$2$$) && ($animationPhase$$ = 0);
  $fadePlayable_oldNBox$$4_scalePlayable$$ = new D.$DvtAnimScaleTo$$($newNBox$$2$$.$getCtx$(), $oldNode$$13$$, new D.$DvtPoint$$(0.01, 0.01), $animationHandler$$21$$.$getAnimationDuration$());
  $animationHandler$$21$$.add($fadePlayable_oldNBox$$4_scalePlayable$$, $animationPhase$$);
  $fadePlayable_oldNBox$$4_scalePlayable$$ = new D.$DvtAnimFadeOut$$($newNBox$$2$$.$getCtx$(), $oldNode$$13$$, $animationHandler$$21$$.$getAnimationDuration$());
  $animationHandler$$21$$.add($fadePlayable_oldNBox$$4_scalePlayable$$, $animationPhase$$);
  $oldNode$$13$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$13$$));
  $newNBox$$2$$.$_deleteContainer$.$addChild$($oldNode$$13$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateInsert$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateInsert$$($animationHandler$$22$$, $newNode$$10$$) {
  var $animationPhase$$1$$ = 1, $oldNBox$$5_scalePlayable$$1$$ = $animationHandler$$22$$.$_oldNBox$, $fadePlayable$$1_newNBox$$3$$ = $animationHandler$$22$$.$_newNBox$;
  D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($oldNBox$$5_scalePlayable$$1$$, $fadePlayable$$1_newNBox$$3$$) && D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($oldNBox$$5_scalePlayable$$1$$, $fadePlayable$$1_newNBox$$3$$) && ($animationPhase$$1$$ = 2);
  $newNode$$10$$.$setScaleX$(0.01);
  $newNode$$10$$.$setScaleY$(0.01);
  $oldNBox$$5_scalePlayable$$1$$ = new D.$DvtAnimScaleTo$$($fadePlayable$$1_newNBox$$3$$.$getCtx$(), $newNode$$10$$, new D.$DvtPoint$$(1, 1), $animationHandler$$22$$.$getAnimationDuration$());
  $animationHandler$$22$$.add($oldNBox$$5_scalePlayable$$1$$, $animationPhase$$1$$);
  $newNode$$10$$.$setAlpha$(0);
  $fadePlayable$$1_newNBox$$3$$ = new D.$DvtAnimFadeIn$$($fadePlayable$$1_newNBox$$3$$.$getCtx$(), $newNode$$10$$, $animationHandler$$22$$.$getAnimationDuration$());
  $animationHandler$$22$$.add($fadePlayable$$1_newNBox$$3$$, $animationPhase$$1$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isGroupingEqual$$($oldNBox$$6$$, $newNBox$$4$$) {
  var $i$$727_oldGroupBehavior$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($oldNBox$$6$$), $newGroupBehavior_oldCategory$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$4$$), $oldNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($oldNBox$$6$$), $newCategory_newNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($newNBox$$4$$), $identical$$ = D.$JSCompiler_alias_FALSE$$;
  if($i$$727_oldGroupBehavior$$ == $newGroupBehavior_oldCategory$$ && $oldNodeCount$$ == $newCategory_newNodeCount$$) {
    $identical$$ = D.$JSCompiler_alias_TRUE$$;
    for($i$$727_oldGroupBehavior$$ = 0;$i$$727_oldGroupBehavior$$ < $oldNodeCount$$;$i$$727_oldGroupBehavior$$++) {
      if($newGroupBehavior_oldCategory$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$(D.$DvtNBoxDataUtils$$.$getNode$($oldNBox$$6$$, $i$$727_oldGroupBehavior$$)), $newCategory_newNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$(D.$DvtNBoxDataUtils$$.$getNode$($newNBox$$4$$, $i$$727_oldGroupBehavior$$)), $newGroupBehavior_oldCategory$$ != $newCategory_newNodeCount$$) {
        $identical$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
  }
  return $identical$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isMaximizeEqual$$($oldNBox$$7$$, $newNBox$$5$$) {
  var $oldMaximizedRow$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($oldNBox$$7$$), $oldMaximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($oldNBox$$7$$), $newMaximizedRow$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($newNBox$$5$$), $newMaximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($newNBox$$5$$);
  return $oldMaximizedRow$$ == $newMaximizedRow$$ && $oldMaximizedColumn$$ == $newMaximizedColumn$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCategoryNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$18$$, $object$$12$$) {
  $object$$12$$.$setAriaRole$("img");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$22$$ = $object$$12$$.$getAriaLabel$();
    $desc$$22$$ && $object$$12$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$22$$)
  }
};
D.$DvtNBoxDrawerRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDrawerRenderer$$, D.$DvtObj$$, "DvtNBoxDrawerRenderer");
D.$DvtNBoxDrawerRenderer$$.$render$ = function $$DvtNBoxDrawerRenderer$$$$render$$($nbox$$30$$, $data$$91$$, $drawerContainer$$, $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$) {
  $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$ = D.$DvtNBoxDrawerRenderer$$.$getDrawerBounds$($nbox$$30$$, $data$$91$$, $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$);
  $data$$91$$.__drawerBounds = $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($drawerContainer$$, $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$.x, $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$.y);
  $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$ = new D.$DvtKeyboardFocusEffect$$($nbox$$30$$.$getCtx$(), $drawerContainer$$, new D.$DvtRectangle$$(-1, -1, $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$.$w$ + 2, $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$.$h$ + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$30$$, $data$$91$$, $availSpace$$99_drawerBounds_keyboardFocusEffect$$2$$, "focusEffect");
  D.$DvtNBoxDrawerRenderer$$.$_renderHeader$($nbox$$30$$, $data$$91$$, $drawerContainer$$);
  D.$DvtNBoxDrawerRenderer$$.$_renderBody$($nbox$$30$$, $data$$91$$, $drawerContainer$$);
  D.$DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$($nbox$$30$$, $data$$91$$, $drawerContainer$$)
};
D.$DvtNBoxDrawerRenderer$$.$_renderHeader$ = function $$DvtNBoxDrawerRenderer$$$$_renderHeader$$($categoryLabel_nbox$$31$$, $data$$92_drawerBounds$$1$$, $drawerContainer$$1$$) {
  var $closeHeight_countColor_options$$209$$ = $categoryLabel_nbox$$31$$.$getOptions$(), $drawerButtonGap$$ = $closeHeight_countColor_options$$209$$.__layout.drawerButtonGap, $drawerStartGap$$ = $closeHeight_countColor_options$$209$$.__layout.drawerStartGap, $drawerLabelGap$$ = $closeHeight_countColor_options$$209$$.__layout.drawerLabelGap, $categoryText_drawerCountHGap_labelOffset$$ = $closeHeight_countColor_options$$209$$.__layout.drawerCountHorizontalGap, $countIndicatorHeight_drawerCountVGap$$ = 
  $closeHeight_countColor_options$$209$$.__layout.drawerCountVerticalGap, $drawerHeaderHeight$$ = $closeHeight_countColor_options$$209$$.__layout.drawerHeaderHeight, $countIndicatorWidth_indicatorGap$$ = $closeHeight_countColor_options$$209$$.__layout.nodeIndicatorGap, $countIndicatorSectionWidth_swatchSize$$ = $closeHeight_countColor_options$$209$$.__layout.nodeSwatchSize, $rtl$$21$$ = (0,D.$DvtAgent$isRightToLeft$$)($categoryLabel_nbox$$31$$.$getCtx$()), $categoryNode$$5$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($categoryLabel_nbox$$31$$, 
  $data$$92_drawerBounds$$1$$[D.$DvtNBoxConstants$$.ID]), $countLabel$$1_nodeCount$$6$$ = $categoryNode$$5$$.nodeIndices.length;
  $data$$92_drawerBounds$$1$$ = $data$$92_drawerBounds$$1$$.__drawerBounds;
  var $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($categoryLabel_nbox$$31$$), $borderColor$$52_closeWidth_headerBackground$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$($categoryLabel_nbox$$31$$), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, 0, $data$$92_drawerBounds$$1$$.$w$, $drawerHeaderHeight$$, $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$, 
  $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$, 0, 0), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$);
  $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$.$setSolidStroke$($borderColor$$52_closeWidth_headerBackground$$);
  $borderColor$$52_closeWidth_headerBackground$$ = D.$DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$($categoryLabel_nbox$$31$$);
  D.$DvtNBoxRenderer$$.$setFill$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$, $borderColor$$52_closeWidth_headerBackground$$);
  $drawerContainer$$1$$.$addChild$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$);
  var $closeEna_closeEnaImg_indicatorIconColor$$1$$ = $closeHeight_countColor_options$$209$$._resources.close_ena, $borderColor$$52_closeWidth_headerBackground$$ = $closeEna_closeEnaImg_indicatorIconColor$$1$$.width;
  if($data$$92_drawerBounds$$1$$.$w$ > $borderColor$$52_closeWidth_headerBackground$$) {
    var $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$ = $closeHeight_countColor_options$$209$$._resources.close_ovr, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = $closeHeight_countColor_options$$209$$._resources.close_dwn, $closeHeight_countColor_options$$209$$ = $closeEna_closeEnaImg_indicatorIconColor$$1$$.height, $closeEna_closeEnaImg_indicatorIconColor$$1$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeEna_closeEnaImg_indicatorIconColor$$1$$.src, 
    0, 0, $closeEna_closeEnaImg_indicatorIconColor$$1$$.width, $closeEna_closeEnaImg_indicatorIconColor$$1$$.height), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$.src, 0, 0, $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$.width, $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$.height), 
    $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$.src, 0, 0, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$.width, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$.height), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$ = new D.$DvtButton$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeEna_closeEnaImg_indicatorIconColor$$1$$, 
    $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $drawerContainer$$1$$.$closeDrawer$, $drawerContainer$$1$$), $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = $rtl$$21$$ ? window.Math.min(($data$$92_drawerBounds$$1$$.$w$ - $borderColor$$52_closeWidth_headerBackground$$) / 2, $drawerButtonGap$$) : window.Math.max(($data$$92_drawerBounds$$1$$.$w$ - 
    $borderColor$$52_closeWidth_headerBackground$$) / 2, $data$$92_drawerBounds$$1$$.$w$ - $drawerButtonGap$$ - $borderColor$$52_closeWidth_headerBackground$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$, $drawerHeaderHeight$$ / 2 - $closeHeight_countColor_options$$209$$ / 2);
    $drawerContainer$$1$$.$addChild$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$)
  }
  var $closeHeight_countColor_options$$209$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($categoryLabel_nbox$$31$$, $categoryNode$$5$$), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($closeHeight_countColor_options$$209$$), $closeEna_closeEnaImg_indicatorIconColor$$1$$ = ($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($categoryLabel_nbox$$31$$, 
  $categoryNode$$5$$)) ? D.$DvtColorUtils$$.$getContrastingTextColor$($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$) : $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$, $indicatorIcon$$3$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($categoryLabel_nbox$$31$$, $categoryNode$$5$$), $countLabelSectionWidth_indicatorIconWidth$$1$$ = $countIndicatorSectionWidth_swatchSize$$, $indicatorMarker$$1_scale$$61$$ = 1;
  if($indicatorIcon$$3$$) {
    var $halign$$9_indicatorIconW$$ = $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$WIDTH$], $indicatorMarker$$1_scale$$61$$ = $countIndicatorSectionWidth_swatchSize$$ / $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$HEIGHT$], $countLabelSectionWidth_indicatorIconWidth$$1$$ = $indicatorMarker$$1_scale$$61$$ * $halign$$9_indicatorIconW$$, $closeEna_closeEnaImg_indicatorIconColor$$1$$ = $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$COLOR$] ? $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$COLOR$] : $closeEna_closeEnaImg_indicatorIconColor$$1$$
  }
  var $countBorderRadius_indicatorSection_indicatorSectionPath$$ = D.$DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$ = $rtl$$21$$ ? "right" : "left", $countLabel$$1_nodeCount$$6$$ = D.$DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$31$$.$getCtx$(), "" + $countLabel$$1_nodeCount$$6$$, D.$DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$, "middle"), $countLabelDims_indicatorX$$1$$ = $countLabel$$1_nodeCount$$6$$.$measureDimensions$(), 
  $countIndicatorHeight_drawerCountVGap$$ = $countLabelDims_indicatorX$$1$$.$h$ + 2 * $countIndicatorHeight_drawerCountVGap$$, $countIndicatorSectionWidth_swatchSize$$ = $indicatorIcon$$3$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ + 2 * $countIndicatorWidth_indicatorGap$$ : $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ ? $countIndicatorSectionWidth_swatchSize$$ : 0, $countLabelSectionWidth_indicatorIconWidth$$1$$ = $countLabelDims_indicatorX$$1$$.$w$ + 2 * $categoryText_drawerCountHGap_labelOffset$$, 
  $countIndicatorWidth_indicatorGap$$ = $countIndicatorSectionWidth_swatchSize$$ + $countLabelSectionWidth_indicatorIconWidth$$1$$, $countIndicatorPath_countIndicatorShape$$;
  $data$$92_drawerBounds$$1$$.$w$ - $borderColor$$52_closeWidth_headerBackground$$ - 2 * $drawerButtonGap$$ > $countIndicatorWidth_indicatorGap$$ && ($countIndicatorPath_countIndicatorShape$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, 0, $countIndicatorWidth_indicatorGap$$, $countIndicatorHeight_drawerCountVGap$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countIndicatorPath_countIndicatorShape$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $countIndicatorPath_countIndicatorShape$$), $countIndicatorPath_countIndicatorShape$$.$setSolidFill$($closeHeight_countColor_options$$209$$), $drawerContainer$$1$$.$addChild$($countIndicatorPath_countIndicatorShape$$), $countLabelDims_indicatorX$$1$$ = $rtl$$21$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ : 0, 0 < $countIndicatorSectionWidth_swatchSize$$ && ($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ && 
  ($countBorderRadius_indicatorSection_indicatorSectionPath$$ = D.$DvtPathUtils$$.$roundedRectangle$($countLabelDims_indicatorX$$1$$, 0, $countIndicatorSectionWidth_swatchSize$$, $countIndicatorHeight_drawerCountVGap$$, $rtl$$21$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$, $rtl$$21$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$21$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$21$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countBorderRadius_indicatorSection_indicatorSectionPath$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $countBorderRadius_indicatorSection_indicatorSectionPath$$), $countBorderRadius_indicatorSection_indicatorSectionPath$$.$setSolidFill$($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($countBorderRadius_indicatorSection_indicatorSectionPath$$)), $indicatorIcon$$3$$ && ($indicatorMarker$$1_scale$$61$$ = new D.$DvtSimpleMarker$$($categoryLabel_nbox$$31$$.$getCtx$(), 
  $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $countLabelDims_indicatorX$$1$$ + $countIndicatorSectionWidth_swatchSize$$ / 2, $countIndicatorHeight_drawerCountVGap$$ / 2, $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$WIDTH$] * $indicatorMarker$$1_scale$$61$$, $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$HEIGHT$] * $indicatorMarker$$1_scale$$61$$, D.$JSCompiler_alias_NULL$$), $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$] && "none" != $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$] ? 
  $indicatorMarker$$1_scale$$61$$.$setFill$(new D.$DvtPatternFill$$($indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$], $closeEna_closeEnaImg_indicatorIconColor$$1$$, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ ? $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ : $closeHeight_countColor_options$$209$$)) : $indicatorMarker$$1_scale$$61$$.$setSolidFill$($closeEna_closeEnaImg_indicatorIconColor$$1$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($indicatorMarker$$1_scale$$61$$))), 
  $countIndicatorPath_countIndicatorShape$$.$addChild$($countLabel$$1_nodeCount$$6$$), $countLabel$$1_nodeCount$$6$$.$setSolidFill$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$32_headerPath$$), D.$DvtNBoxRenderer$$.$positionText$($countLabel$$1_nodeCount$$6$$, $rtl$$21$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ - $categoryText_drawerCountHGap_labelOffset$$ : $countIndicatorSectionWidth_swatchSize$$ + $categoryText_drawerCountHGap_labelOffset$$, $countIndicatorHeight_drawerCountVGap$$ / 
  2));
  $categoryText_drawerCountHGap_labelOffset$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($categoryLabel_nbox$$31$$, $categoryNode$$5$$).$getLabel$();
  $categoryLabel_nbox$$31$$ = D.$DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$31$$.$getCtx$(), $categoryText_drawerCountHGap_labelOffset$$, D.$DvtNBoxStyleUtils$$.$getDrawerLabelStyle$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$, "middle");
  $categoryText_drawerCountHGap_labelOffset$$ = 0;
  D.$DvtTextUtils$$.$fitText$($categoryLabel_nbox$$31$$, $data$$92_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $drawerLabelGap$$ - $countIndicatorWidth_indicatorGap$$ - $drawerButtonGap$$ - $borderColor$$52_closeWidth_headerBackground$$, $drawerHeaderHeight$$, $drawerContainer$$1$$) && (D.$DvtNBoxRenderer$$.$positionText$($categoryLabel_nbox$$31$$, $rtl$$21$$ ? $data$$92_drawerBounds$$1$$.$w$ - $drawerStartGap$$ : $drawerStartGap$$, $drawerHeaderHeight$$ / 2), $categoryText_drawerCountHGap_labelOffset$$ = 
  $categoryLabel_nbox$$31$$.$measureDimensions$().$w$ + $drawerLabelGap$$);
  $countIndicatorPath_countIndicatorShape$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($countIndicatorPath_countIndicatorShape$$, $rtl$$21$$ ? $data$$92_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $countIndicatorWidth_indicatorGap$$ - $categoryText_drawerCountHGap_labelOffset$$ : $drawerStartGap$$ + $categoryText_drawerCountHGap_labelOffset$$, ($drawerHeaderHeight$$ - $countIndicatorHeight_drawerCountVGap$$) / 2)
};
D.$DvtNBoxDrawerRenderer$$.$_renderBody$ = function $$DvtNBoxDrawerRenderer$$$$_renderBody$$($nbox$$32$$, $data$$93$$, $drawerContainer$$2_nodeLayout$$1$$) {
  var $options$$210_rtl$$22$$ = $nbox$$32$$.$getOptions$(), $gridGap$$ = $options$$210_rtl$$22$$.__layout.gridGap, $drawerHeaderHeight$$1_hGridSize$$ = $options$$210_rtl$$22$$.__layout.drawerHeaderHeight, $drawerBounds$$2_scrollContainer$$1_vGridSize$$ = $data$$93$$.__drawerBounds, $options$$210_rtl$$22$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$32$$.$getCtx$()), $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($nbox$$32$$), $borderColor$$53_gridPos$$ = 
  D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$($nbox$$32$$), $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, $drawerHeaderHeight$$1_hGridSize$$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$w$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$h$ - $drawerHeaderHeight$$1_hGridSize$$, 0, 0, $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$, $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$), $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = new D.$DvtPath$$($nbox$$32$$.$getCtx$(), 
  $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$);
  D.$DvtNBoxRenderer$$.$setFill$($alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$, D.$DvtNBoxStyleUtils$$.$getDrawerBackground$($nbox$$32$$));
  $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$.$setSolidStroke$($borderColor$$53_gridPos$$);
  $drawerContainer$$2_nodeLayout$$1$$.$addChild$($alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$32$$, $data$$93$$, $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$, "background");
  $data$$93$$.__childArea = new D.$DvtRectangle$$($gridGap$$, $drawerHeaderHeight$$1_hGridSize$$ + $gridGap$$, window.Math.max($drawerBounds$$2_scrollContainer$$1_vGridSize$$.$w$ - 2 * $gridGap$$, 0), window.Math.max($drawerBounds$$2_scrollContainer$$1_vGridSize$$.$h$ - $drawerHeaderHeight$$1_hGridSize$$ - 2 * $gridGap$$, 0));
  $drawerBounds$$2_scrollContainer$$1_vGridSize$$ = new D.$DvtSimpleScrollableContainer$$($nbox$$32$$.$getCtx$(), $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$w$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$h$ - $drawerHeaderHeight$$1_hGridSize$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($drawerBounds$$2_scrollContainer$$1_vGridSize$$, 0, $drawerHeaderHeight$$1_hGridSize$$);
  $drawerContainer$$2_nodeLayout$$1$$.$addChild$($drawerBounds$$2_scrollContainer$$1_vGridSize$$);
  $drawerContainer$$2_nodeLayout$$1$$.$setChildContainer$($drawerBounds$$2_scrollContainer$$1_vGridSize$$);
  $drawerContainer$$2_nodeLayout$$1$$ = D.$DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$($nbox$$32$$, $data$$93$$);
  var $drawerHeaderHeight$$1_hGridSize$$ = $drawerContainer$$2_nodeLayout$$1$$.indicatorSectionWidth + $drawerContainer$$2_nodeLayout$$1$$.iconSectionWidth + $drawerContainer$$2_nodeLayout$$1$$.labelSectionWidth + $gridGap$$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$ = $drawerContainer$$2_nodeLayout$$1$$.nodeHeight + $gridGap$$, $borderColor$$53_gridPos$$ = 0, $i$$730_renderPasses$$ = ["normal"], $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$32$$), 
  $container$$153_highlightedItems$$2$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$32$$), $highlightedMap$$1$$ = {};
  if($container$$153_highlightedItems$$2$$) {
    for($i$$730_renderPasses$$ = 0;$i$$730_renderPasses$$ < $container$$153_highlightedItems$$2$$.length;$i$$730_renderPasses$$++) {
      $highlightedMap$$1$$[$container$$153_highlightedItems$$2$$[$i$$730_renderPasses$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
    $i$$730_renderPasses$$ = ["highlighted", "unhighlighted"]
  }
  for(var $container$$153_highlightedItems$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$32$$, $data$$93$$).$getChildContainer$(), $categoryNode$$6$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$32$$, $data$$93$$[D.$DvtNBoxConstants$$.ID]), $nodeCount$$7$$ = $categoryNode$$6$$.nodeIndices.length, $p$$27$$ = 0;$p$$27$$ < $i$$730_renderPasses$$.length;$p$$27$$++) {
    for(var $n$$21$$ = 0;$n$$21$$ < $nodeCount$$7$$;$n$$21$$++) {
      var $node$$259$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$32$$, $categoryNode$$6$$.nodeIndices[$n$$21$$]);
      if(("normal" == $i$$730_renderPasses$$[$p$$27$$] || "highlighted" == $i$$730_renderPasses$$[$p$$27$$] && $highlightedMap$$1$$[$node$$259$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted" == $i$$730_renderPasses$$[$p$$27$$] && !$highlightedMap$$1$$[$node$$259$$[D.$DvtNBoxConstants$$.ID]]) && 0 != $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] && 0 != $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$ROWS$]) {
        var $nodeContainer$$4_prevNode$$ = D.$DvtNBoxNode$$.newInstance($nbox$$32$$, $node$$259$$), $gridXOrigin$$ = $data$$93$$.__childArea.x + ($data$$93$$.__childArea.$w$ - $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] * $drawerHeaderHeight$$1_hGridSize$$ + $gridGap$$) / 2, $gridYOrigin$$ = $gridGap$$, $gridColumn$$ = $borderColor$$53_gridPos$$ % $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$];
        $options$$210_rtl$$22$$ && ($gridColumn$$ = $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] - $gridColumn$$ - 1);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$4_prevNode$$, $gridXOrigin$$ + $drawerHeaderHeight$$1_hGridSize$$ * $gridColumn$$, $gridYOrigin$$ + $drawerBounds$$2_scrollContainer$$1_vGridSize$$ * window.Math.floor($borderColor$$53_gridPos$$ / $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$]));
        $borderColor$$53_gridPos$$++;
        $nodeContainer$$4_prevNode$$.$render$($container$$153_highlightedItems$$2$$.$_container$, $drawerContainer$$2_nodeLayout$$1$$);
        "unhighlighted" == $i$$730_renderPasses$$[$p$$27$$] && $nodeContainer$$4_prevNode$$.$setAlpha$($alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$);
        if($nodeContainer$$4_prevNode$$ = 0 < $n$$21$$ ? D.$DvtNBoxDataUtils$$.$getNode$($nbox$$32$$, $categoryNode$$6$$.nodeIndices[$n$$21$$ - 1]) : D.$JSCompiler_alias_NULL$$) {
          $node$$259$$.__prev = $nodeContainer$$4_prevNode$$, $nodeContainer$$4_prevNode$$.__next = $node$$259$$
        }
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($container$$153_highlightedItems$$2$$)
};
D.$DvtNBoxDrawerRenderer$$.$getDrawerBounds$ = function $$DvtNBoxDrawerRenderer$$$$getDrawerBounds$$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$94_r$$58$$, $availSpace$$100$$) {
  var $cellLayout$$7_options$$211$$ = $cellDims$$1_nbox$$33$$.$getOptions$(), $gridGap$$1$$ = $cellLayout$$7_options$$211$$.__layout.gridGap, $cellLayout$$7_options$$211$$ = $cellLayout$$7_options$$211$$.__layout.__cellLayout, $c$$39_cell$$42_drawerBounds$$3$$ = new D.$DvtRectangle$$($availSpace$$100$$.x + $gridGap$$1$$ / 2, $availSpace$$100$$.y + $gridGap$$1$$ / 2, window.Math.max($availSpace$$100$$.$w$ - $gridGap$$1$$, 0), window.Math.max($availSpace$$100$$.$h$ - $gridGap$$1$$, 0));
  D.$DvtNBoxDataUtils$$.$getGroupBehavior$($cellDims$$1_nbox$$33$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cellIndex$$7_data$$94_r$$58$$ = (0,window.parseInt)($cellIndex$$7_data$$94_r$$58$$.id.substring(0, $cellIndex$$7_data$$94_r$$58$$[D.$DvtNBoxConstants$$.ID].indexOf(":"))), D.$DvtNBoxDataUtils$$.$isCellMaximized$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$94_r$$58$$) && ($c$$39_cell$$42_drawerBounds$$3$$ = D.$DvtNBoxDataUtils$$.$getCell$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$94_r$$58$$), 
  $cellIndex$$7_data$$94_r$$58$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($cellDims$$1_nbox$$33$$, $c$$39_cell$$42_drawerBounds$$3$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$39_cell$$42_drawerBounds$$3$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($cellDims$$1_nbox$$33$$, $c$$39_cell$$42_drawerBounds$$3$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellDims$$1_nbox$$33$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$94_r$$58$$, $c$$39_cell$$42_drawerBounds$$3$$, $cellLayout$$7_options$$211$$, 
  $availSpace$$100$$), $c$$39_cell$$42_drawerBounds$$3$$ = new D.$DvtRectangle$$($cellDims$$1_nbox$$33$$.x + $gridGap$$1$$ / 2, $cellDims$$1_nbox$$33$$.y + $gridGap$$1$$ / 2 + $cellLayout$$7_options$$211$$.headerSize, window.Math.max($cellDims$$1_nbox$$33$$.$w$ - $gridGap$$1$$, 0), window.Math.max($cellDims$$1_nbox$$33$$.$h$ - $cellLayout$$7_options$$211$$.headerSize - $gridGap$$1$$, 0))));
  return $c$$39_cell$$42_drawerBounds$$3$$
};
D.$DvtNBoxDrawerRenderer$$.$animateUpdate$ = function $$DvtNBoxDrawerRenderer$$$$animateUpdate$$() {
  window.console.log("********************* DvtNBoxDrawerRenderer.animateUpdate *********************")
};
D.$DvtNBoxDrawerRenderer$$.$animateDelete$ = function $$DvtNBoxDrawerRenderer$$$$animateDelete$$($animationHandler$$28$$, $oldDrawer$$2$$) {
  var $fadePlayable$$2_newNBox$$8$$ = $animationHandler$$28$$.$_newNBox$, $drawerBounds$$4_scaleY$$5$$ = $oldDrawer$$2$$.getData().__drawerBounds, $finalMatrix_id$$229_sideLength$$ = $oldDrawer$$2$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix_group$$28_groupNode$$12$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$2_newNBox$$8$$, $finalMatrix_id$$229_sideLength$$);
  if($centerMatrix_group$$28_groupNode$$12$$) {
    var $finalMatrix_id$$229_sideLength$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix_group$$28_groupNode$$12$$), $playable$$43_scaleX$$5$$ = $finalMatrix_id$$229_sideLength$$ / $drawerBounds$$4_scaleY$$5$$.$w$, $drawerBounds$$4_scaleY$$5$$ = $finalMatrix_id$$229_sideLength$$ / $drawerBounds$$4_scaleY$$5$$.$h$;
    if($centerMatrix_group$$28_groupNode$$12$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$2_newNBox$$8$$, $centerMatrix_group$$28_groupNode$$12$$)) {
      $centerMatrix_group$$28_groupNode$$12$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix_group$$28_groupNode$$12$$), $finalMatrix_id$$229_sideLength$$ = new D.$DvtMatrix$$($playable$$43_scaleX$$5$$, 0, 0, $drawerBounds$$4_scaleY$$5$$, $centerMatrix_group$$28_groupNode$$12$$.$_tx$ - $finalMatrix_id$$229_sideLength$$ / 2, $centerMatrix_group$$28_groupNode$$12$$.$_ty$ - $finalMatrix_id$$229_sideLength$$ / 2), $playable$$43_scaleX$$5$$ = new D.$DvtCustomAnimation$$($fadePlayable$$2_newNBox$$8$$.$getCtx$(), 
      $oldDrawer$$2$$, $animationHandler$$28$$.$getAnimationDuration$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$43_scaleX$$5$$.$_animator$, "typeMatrix", $oldDrawer$$2$$, $oldDrawer$$2$$.$getMatrix$, $oldDrawer$$2$$.$setMatrix$, $finalMatrix_id$$229_sideLength$$), $animationHandler$$28$$.add($playable$$43_scaleX$$5$$, 1)
    }
  }
  $fadePlayable$$2_newNBox$$8$$.$_deleteContainer$.$addChild$($oldDrawer$$2$$);
  $fadePlayable$$2_newNBox$$8$$ = new D.$DvtAnimFadeOut$$($fadePlayable$$2_newNBox$$8$$.$getCtx$(), $oldDrawer$$2$$, $animationHandler$$28$$.$getAnimationDuration$());
  $animationHandler$$28$$.add($fadePlayable$$2_newNBox$$8$$, 1)
};
D.$DvtNBoxDrawerRenderer$$.$animateInsert$ = function $$DvtNBoxDrawerRenderer$$$$animateInsert$$($animationHandler$$29$$, $newDrawer$$1$$) {
  var $fadePlayable$$3_newNBox$$9$$ = $animationHandler$$29$$.$_newNBox$, $drawerBounds$$5_scaleY$$6$$ = $newDrawer$$1$$.getData().__drawerBounds, $id$$230_initMatrix_sideLength$$1$$ = $newDrawer$$1$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix$$1_group$$29_groupNode$$13$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$3_newNBox$$9$$, $id$$230_initMatrix_sideLength$$1$$);
  if($centerMatrix$$1_group$$29_groupNode$$13$$) {
    var $id$$230_initMatrix_sideLength$$1$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix$$1_group$$29_groupNode$$13$$), $playable$$44_scaleX$$6$$ = $id$$230_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$6$$.$w$, $drawerBounds$$5_scaleY$$6$$ = $id$$230_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$6$$.$h$;
    if($centerMatrix$$1_group$$29_groupNode$$13$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$3_newNBox$$9$$, $centerMatrix$$1_group$$29_groupNode$$13$$)) {
      $centerMatrix$$1_group$$29_groupNode$$13$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$1_group$$29_groupNode$$13$$);
      $id$$230_initMatrix_sideLength$$1$$ = new D.$DvtMatrix$$($playable$$44_scaleX$$6$$, 0, 0, $drawerBounds$$5_scaleY$$6$$, $centerMatrix$$1_group$$29_groupNode$$13$$.$_tx$ - $id$$230_initMatrix_sideLength$$1$$ / 2, $centerMatrix$$1_group$$29_groupNode$$13$$.$_ty$ - $id$$230_initMatrix_sideLength$$1$$ / 2);
      $playable$$44_scaleX$$6$$ = new D.$DvtCustomAnimation$$($fadePlayable$$3_newNBox$$9$$.$getCtx$(), $newDrawer$$1$$, $animationHandler$$29$$.$getAnimationDuration$());
      (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$44_scaleX$$6$$.$_animator$, "typeMatrix", $newDrawer$$1$$, $newDrawer$$1$$.$getMatrix$, $newDrawer$$1$$.$setMatrix$, $newDrawer$$1$$.$getMatrix$());
      var $parent$$75$$ = $newDrawer$$1$$.getParent();
      $fadePlayable$$3_newNBox$$9$$.$addChild$($newDrawer$$1$$);
      (0,D.$DvtPlayable$appendOnEnd$$)($playable$$44_scaleX$$6$$, function() {
        $parent$$75$$.$addChild$($newDrawer$$1$$)
      });
      $newDrawer$$1$$.$setMatrix$($id$$230_initMatrix_sideLength$$1$$);
      $animationHandler$$29$$.add($playable$$44_scaleX$$6$$, 1)
    }
  }
  $newDrawer$$1$$.$setAlpha$(0);
  $fadePlayable$$3_newNBox$$9$$ = new D.$DvtAnimFadeIn$$($fadePlayable$$3_newNBox$$9$$.$getCtx$(), $newDrawer$$1$$, $animationHandler$$29$$.$getAnimationDuration$());
  $animationHandler$$29$$.add($fadePlayable$$3_newNBox$$9$$, 1)
};
D.$DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxDrawerRenderer$$$$_addAccessibilityAttributes$$($nbox$$34_object$$14$$, $data$$95$$, $desc$$24_drawerContainer$$3$$) {
  $nbox$$34_object$$14$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$34_object$$14$$, $data$$95$$, "background") : $desc$$24_drawerContainer$$3$$;
  $nbox$$34_object$$14$$.$setAriaRole$("img");
  (0,D.$DvtAgent$deferAriaCreation$$)() || ($desc$$24_drawerContainer$$3$$ = $desc$$24_drawerContainer$$3$$.$getAriaLabel$()) && $nbox$$34_object$$14$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$24_drawerContainer$$3$$)
};
D.$DvtNBoxDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDataUtils$$, D.$DvtObj$$, "DvtNBoxDataUtils");
D.$DvtNBoxDataUtils$$.$processDataObject$ = function $$DvtNBoxDataUtils$$$$processDataObject$$($legend$$29_nbox$$62$$) {
  var $options$$220$$ = $legend$$29_nbox$$62$$.$getOptions$(), $cells$$2_columnMap_hiddenCategories$$11$$ = $options$$220$$[D.$DvtNBoxConstants$$.$CELLS$], $cellMap_nodeMap$$6_section$$10$$ = {};
  if($cells$$2_columnMap_hiddenCategories$$11$$) {
    for(var $i$$742_rowMap$$ = 0;$i$$742_rowMap$$ < $cells$$2_columnMap_hiddenCategories$$11$$.length;$i$$742_rowMap$$++) {
      var $cell$$47_newCells$$1_nodeObj$$ = $cells$$2_columnMap_hiddenCategories$$11$$[$i$$742_rowMap$$], $grouping$$4_j$$101_row$$50_rowObj$$ = $cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$ROW$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$] || ($cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$] = {});
      var $column$$10_columnObj_item$$44_n$$25$$ = $cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$COLUMN$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$][$column$$10_columnObj_item$$44_n$$25$$] = $cell$$47_newCells$$1_nodeObj$$
    }
  }
  for(var $cell$$47_newCells$$1_nodeObj$$ = [], $i$$742_rowMap$$ = {}, $cells$$2_columnMap_hiddenCategories$$11$$ = {}, $r$$63$$ = 0;$r$$63$$ < D.$DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$62$$);$r$$63$$++) {
    $grouping$$4_j$$101_row$$50_rowObj$$ = D.$DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$62$$, $r$$63$$), $i$$742_rowMap$$[$grouping$$4_j$$101_row$$50_rowObj$$[D.$DvtNBoxConstants$$.ID]] = $r$$63$$
  }
  $options$$220$$.__rowMap = $i$$742_rowMap$$;
  for(var $c$$44$$ = 0;$c$$44$$ < D.$DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$62$$);$c$$44$$++) {
    $column$$10_columnObj_item$$44_n$$25$$ = D.$DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$62$$, $c$$44$$), $cells$$2_columnMap_hiddenCategories$$11$$[$column$$10_columnObj_item$$44_n$$25$$[D.$DvtNBoxConstants$$.ID]] = $c$$44$$
  }
  $options$$220$$.__columnMap = $cells$$2_columnMap_hiddenCategories$$11$$;
  for($r$$63$$ = 0;$r$$63$$ < D.$DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$62$$);$r$$63$$++) {
    $grouping$$4_j$$101_row$$50_rowObj$$ = D.$DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$62$$, $r$$63$$);
    $grouping$$4_j$$101_row$$50_rowObj$$ = $grouping$$4_j$$101_row$$50_rowObj$$[D.$DvtNBoxConstants$$.ID];
    for($c$$44$$ = 0;$c$$44$$ < D.$DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$62$$);$c$$44$$++) {
      $column$$10_columnObj_item$$44_n$$25$$ = D.$DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$62$$, $c$$44$$), $column$$10_columnObj_item$$44_n$$25$$ = $column$$10_columnObj_item$$44_n$$25$$[D.$DvtNBoxConstants$$.ID], $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$] && $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$][$column$$10_columnObj_item$$44_n$$25$$] ? $cell$$47_newCells$$1_nodeObj$$.push($cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$][$column$$10_columnObj_item$$44_n$$25$$]) : 
      $cell$$47_newCells$$1_nodeObj$$.push({row:$grouping$$4_j$$101_row$$50_rowObj$$, column:$column$$10_columnObj_item$$44_n$$25$$})
    }
  }
  $options$$220$$[D.$DvtNBoxConstants$$.$CELLS$] = $cell$$47_newCells$$1_nodeObj$$;
  $cellMap_nodeMap$$6_section$$10$$ = {};
  $grouping$$4_j$$101_row$$50_rowObj$$ = D.$JSCompiler_alias_FALSE$$;
  for($column$$10_columnObj_item$$44_n$$25$$ = 0;$column$$10_columnObj_item$$44_n$$25$$ < D.$DvtNBoxDataUtils$$.$getNodeCount$($legend$$29_nbox$$62$$);$column$$10_columnObj_item$$44_n$$25$$++) {
    if($cell$$47_newCells$$1_nodeObj$$ = D.$DvtNBoxDataUtils$$.$getNode$($legend$$29_nbox$$62$$, $column$$10_columnObj_item$$44_n$$25$$), $cellMap_nodeMap$$6_section$$10$$[$cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.ID]] = $column$$10_columnObj_item$$44_n$$25$$, !$grouping$$4_j$$101_row$$50_rowObj$$ && ($cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] || $cell$$47_newCells$$1_nodeObj$$._groupCategories || $cell$$47_newCells$$1_nodeObj$$._groupLabels)) {
      $grouping$$4_j$$101_row$$50_rowObj$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $options$$220$$.__nodeMap = $cellMap_nodeMap$$6_section$$10$$;
  $options$$220$$.__grouping = "none" != $options$$220$$[D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$] ? $grouping$$4_j$$101_row$$50_rowObj$$ : D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getGrouping$($legend$$29_nbox$$62$$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$($legend$$29_nbox$$62$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$), $options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, 
  D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$));
  if($options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] && (0,window.isNaN)($i$$742_rowMap$$[$options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$]]) || $options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] && (0,window.isNaN)($cells$$2_columnMap_hiddenCategories$$11$$[$options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$]])) {
    $options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$), $options$$220$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$)
  }
  if(($legend$$29_nbox$$62$$ = $options$$220$$[D.$DvtNBoxConstants$$.$LEGEND$]) && $legend$$29_nbox$$62$$.sections) {
    var $legendPrecedence$$ = "color iconFill iconShape iconPattern indicatorColor indicatorIconColor indicatorIconShape indicatorIconPattern".split(" ");
    $legend$$29_nbox$$62$$.sections = $legend$$29_nbox$$62$$.sections.slice(0);
    $legend$$29_nbox$$62$$.sections.sort(function($legend$$29_nbox$$62$$, $options$$220$$) {
      return D.$DvtArrayUtils$$.$getIndex$($legendPrecedence$$, $legend$$29_nbox$$62$$.type) - D.$DvtArrayUtils$$.$getIndex$($legendPrecedence$$, $options$$220$$.type)
    });
    $cells$$2_columnMap_hiddenCategories$$11$$ = $options$$220$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$];
    $legend$$29_nbox$$62$$.hideAndShowBehavior = "on";
    $legend$$29_nbox$$62$$.textStyle = $options$$220$$.styleDefaults.__legendDefaults.itemStyle;
    $legend$$29_nbox$$62$$.layout = {rowGap:2};
    $legend$$29_nbox$$62$$.symbolWidth = 16;
    $legend$$29_nbox$$62$$.symbolHeight = 16;
    for($i$$742_rowMap$$ = 0;$i$$742_rowMap$$ < $legend$$29_nbox$$62$$.sections.length;$i$$742_rowMap$$++) {
      $cellMap_nodeMap$$6_section$$10$$ = $legend$$29_nbox$$62$$.sections[$i$$742_rowMap$$];
      $cellMap_nodeMap$$6_section$$10$$.titleStyle = $options$$220$$.styleDefaults.__legendDefaults.sectionStyle;
      for($grouping$$4_j$$101_row$$50_rowObj$$ = 0;$grouping$$4_j$$101_row$$50_rowObj$$ < $cellMap_nodeMap$$6_section$$10$$.items.length;$grouping$$4_j$$101_row$$50_rowObj$$++) {
        $column$$10_columnObj_item$$44_n$$25$$ = $cellMap_nodeMap$$6_section$$10$$.items[$grouping$$4_j$$101_row$$50_rowObj$$], $column$$10_columnObj_item$$44_n$$25$$.categoryVisibility = -1 != D.$DvtArrayUtils$$.$getIndex$($cells$$2_columnMap_hiddenCategories$$11$$, $column$$10_columnObj_item$$44_n$$25$$.categories && 0 < $column$$10_columnObj_item$$44_n$$25$$.categories.length ? $column$$10_columnObj_item$$44_n$$25$$.categories[0] : $column$$10_columnObj_item$$44_n$$25$$.id) ? "hidden" : D.$JSCompiler_alias_NULL$$, 
        $column$$10_columnObj_item$$44_n$$25$$.indicatorColor && ($column$$10_columnObj_item$$44_n$$25$$.color = $column$$10_columnObj_item$$44_n$$25$$.indicatorColor), $column$$10_columnObj_item$$44_n$$25$$.color || ($column$$10_columnObj_item$$44_n$$25$$.color = $options$$220$$.styleDefaults.__legendDefaults.markerColor), $column$$10_columnObj_item$$44_n$$25$$.shape && ($column$$10_columnObj_item$$44_n$$25$$.markerShape = $column$$10_columnObj_item$$44_n$$25$$.shape)
      }
    }
  }
};
D.$DvtNBoxDataUtils$$.$getColumnCount$ = function $$DvtNBoxDataUtils$$$$getColumnCount$$($nbox$$63$$) {
  return $nbox$$63$$.$getOptions$()[D.$DvtNBoxConstants$$.$COLUMNS$].length
};
D.$DvtNBoxDataUtils$$.$getRowCount$ = function $$DvtNBoxDataUtils$$$$getRowCount$$($nbox$$64$$) {
  return $nbox$$64$$.$getOptions$()[D.$DvtNBoxConstants$$.$ROWS$].length
};
D.$DvtNBoxDataUtils$$.$getColumnLabel$ = function $$DvtNBoxDataUtils$$$$getColumnLabel$$($nbox$$65$$, $colValue$$) {
  var $col$$4$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$65$$, D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$65$$, $colValue$$));
  return $col$$4$$ && $col$$4$$[D.$DvtNBoxConstants$$.$LABEL$] ? $col$$4$$[D.$DvtNBoxConstants$$.$LABEL$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getRowLabel$ = function $$DvtNBoxDataUtils$$$$getRowLabel$$($nbox$$66$$, $rowValue$$1$$) {
  var $row$$51$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$66$$, D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$66$$, $rowValue$$1$$));
  return $row$$51$$ && $row$$51$$[D.$DvtNBoxConstants$$.$LABEL$] ? $row$$51$$[D.$DvtNBoxConstants$$.$LABEL$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getCellByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellByRowColumn$$($nbox$$67$$, $cell$$48_rowValue$$2$$, $columnValue$$1$$) {
  return($cell$$48_rowValue$$2$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$67$$, D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$($nbox$$67$$, $cell$$48_rowValue$$2$$, $columnValue$$1$$))) ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$67$$, $cell$$48_rowValue$$2$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellIndexByRowColumn$$($nbox$$68$$, $rowValue$$3$$, $columnValue$$2$$) {
  return D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$68$$, $columnValue$$2$$) + D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$68$$, $rowValue$$3$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$68$$)
};
D.$DvtNBoxDataUtils$$.$getColumn$ = function $$DvtNBoxDataUtils$$$$getColumn$$($nbox$$69$$, $columnIndex$$6$$) {
  return $nbox$$69$$.$getOptions$()[D.$DvtNBoxConstants$$.$COLUMNS$][$columnIndex$$6$$]
};
D.$DvtNBoxDataUtils$$.$getRow$ = function $$DvtNBoxDataUtils$$$$getRow$$($nbox$$70$$, $rowIndex$$18$$) {
  return $nbox$$70$$.$getOptions$()[D.$DvtNBoxConstants$$.$ROWS$][$rowIndex$$18$$]
};
D.$DvtNBoxDataUtils$$.$getMaximizedRow$ = function $$DvtNBoxDataUtils$$$$getMaximizedRow$$($nbox$$71$$) {
  return $nbox$$71$$.$getOptions$()[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$]
};
D.$DvtNBoxDataUtils$$.$getMaximizedColumn$ = function $$DvtNBoxDataUtils$$$$getMaximizedColumn$$($nbox$$72$$) {
  return $nbox$$72$$.$getOptions$()[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$]
};
D.$DvtNBoxDataUtils$$.$getRowIndex$ = function $$DvtNBoxDataUtils$$$$getRowIndex$$($nbox$$73$$, $row$$52$$) {
  return $nbox$$73$$.$getOptions$().__rowMap[$row$$52$$]
};
D.$DvtNBoxDataUtils$$.$getColumnIndex$ = function $$DvtNBoxDataUtils$$$$getColumnIndex$$($nbox$$74$$, $column$$11$$) {
  return $nbox$$74$$.$getOptions$().__columnMap[$column$$11$$]
};
D.$DvtNBoxDataUtils$$.$getCell$ = function $$DvtNBoxDataUtils$$$$getCell$$($nbox$$75$$, $cellIndex$$11$$) {
  return $nbox$$75$$.$getOptions$()[D.$DvtNBoxConstants$$.$CELLS$][$cellIndex$$11$$]
};
D.$DvtNBoxDataUtils$$.$getNodeCount$ = function $$DvtNBoxDataUtils$$$$getNodeCount$$($nbox$$76$$) {
  return $nbox$$76$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$] ? $nbox$$76$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$].length : 0
};
D.$DvtNBoxDataUtils$$.$getNode$ = function $$DvtNBoxDataUtils$$$$getNode$$($nbox$$77$$, $nodeIndex$$11$$) {
  return $nbox$$77$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$][$nodeIndex$$11$$]
};
D.$DvtNBoxDataUtils$$.$getNodeIndex$ = function $$DvtNBoxDataUtils$$$$getNodeIndex$$($nbox$$78$$, $id$$234$$) {
  return $nbox$$78$$.$getOptions$().__nodeMap[$id$$234$$]
};
D.$DvtNBoxDataUtils$$.$getCellIndex$ = function $$DvtNBoxDataUtils$$$$getCellIndex$$($nbox$$79$$, $node$$271$$) {
  var $nodeRowIndex$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$79$$, $node$$271$$[D.$DvtNBoxConstants$$.$ROW$]), $nodeColumnIndex$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$79$$, $node$$271$$[D.$DvtNBoxConstants$$.$COLUMN$]), $columnCount$$15$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$79$$);
  return $nodeColumnIndex$$ + $nodeRowIndex$$ * $columnCount$$15$$
};
D.$DvtNBoxDataUtils$$.$getIcon$ = function $$DvtNBoxDataUtils$$$$getIcon$$($nbox$$80$$, $node$$272$$) {
  return $node$$272$$[D.$DvtNBoxConstants$$.$ICON$] ? D.$DvtNBoxStyleUtils$$.$getStyledIcon$($nbox$$80$$, $node$$272$$[D.$DvtNBoxConstants$$.$ICON$]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getIndicatorIcon$ = function $$DvtNBoxDataUtils$$$$getIndicatorIcon$$($nbox$$81$$, $node$$273$$) {
  return $node$$273$$[D.$DvtNBoxConstants$$.$INDICATOR_ICON$] ? D.$DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$($nbox$$81$$, $node$$273$$[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getSelectedItems$ = function $$DvtNBoxDataUtils$$$$getSelectedItems$$($nbox$$82$$) {
  return $nbox$$82$$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION$]
};
D.$DvtNBoxDataUtils$$.$setSelectedItems$ = function $$DvtNBoxDataUtils$$$$setSelectedItems$$($nbox$$83$$, $selectedItems$$2$$) {
  $nbox$$83$$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION$] = $selectedItems$$2$$
};
D.$DvtNBoxDataUtils$$.$getHighlightedItems$ = function $$DvtNBoxDataUtils$$$$getHighlightedItems$$($nbox$$84$$) {
  var $items$$28$$, $categories$$22_n$$26$$ = $nbox$$84$$.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$];
  if($categories$$22_n$$26$$ && 0 < $categories$$22_n$$26$$.length) {
    $items$$28$$ = [];
    for($categories$$22_n$$26$$ = 0;$categories$$22_n$$26$$ < D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$84$$);$categories$$22_n$$26$$++) {
      var $node$$274$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$84$$, $categories$$22_n$$26$$);
      D.$DvtNBoxDataUtils$$.$isNodeHighlighted$($nbox$$84$$, $node$$274$$) && $items$$28$$.push($node$$274$$)
    }
  }
  return $items$$28$$
};
D.$DvtNBoxDataUtils$$.$getGrouping$ = function $$DvtNBoxDataUtils$$$$getGrouping$$($nbox$$85$$) {
  return $nbox$$85$$.$getOptions$().__grouping
};
D.$DvtNBoxDataUtils$$.$getGroupAttributes$ = function $$DvtNBoxDataUtils$$$$getGroupAttributes$$($nbox$$86$$) {
  return $nbox$$86$$.$getOptions$()[D.$DvtNBoxConstants$$.$GROUP_ATTRIBUTES$]
};
D.$DvtNBoxDataUtils$$.$getGroupBehavior$ = function $$DvtNBoxDataUtils$$$$getGroupBehavior$$($nbox$$87$$) {
  return $nbox$$87$$.$getOptions$()[D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$]
};
D.$DvtNBoxDataUtils$$.$getNodeGroupId$ = function $$DvtNBoxDataUtils$$$$getNodeGroupId$$($categories$$23_node$$275$$) {
  return $categories$$23_node$$275$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] ? $categories$$23_node$$275$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] : ($categories$$23_node$$275$$ = $categories$$23_node$$275$$._groupCategories) && 0 < $categories$$23_node$$275$$.length ? $categories$$23_node$$275$$.join(";") : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getXPercentage$ = function $$DvtNBoxDataUtils$$$$getXPercentage$$($nbox$$88$$, $node$$276$$) {
  if(!(0,window.isNaN)($node$$276$$[D.$DvtNBoxConstants$$.$X_PERCENTAGE$])) {
    return $node$$276$$[D.$DvtNBoxConstants$$.$X_PERCENTAGE$]
  }
  var $columnCount$$16$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$88$$);
  return(D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$88$$, $node$$276$$[D.$DvtNBoxConstants$$.$COLUMN$]) + 0.5) / $columnCount$$16$$
};
D.$DvtNBoxDataUtils$$.$getYPercentage$ = function $$DvtNBoxDataUtils$$$$getYPercentage$$($nbox$$89$$, $node$$277$$) {
  if(!(0,window.isNaN)($node$$277$$[D.$DvtNBoxConstants$$.$Y_PERCENTAGE$])) {
    return $node$$277$$[D.$DvtNBoxConstants$$.$Y_PERCENTAGE$]
  }
  var $rowCount$$20$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$89$$);
  return(D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$89$$, $node$$277$$[D.$DvtNBoxConstants$$.$ROW$]) + 0.5) / $rowCount$$20$$
};
D.$DvtNBoxDataUtils$$.$getOtherThreshold$ = function $$DvtNBoxDataUtils$$$$getOtherThreshold$$($nbox$$90$$) {
  return $nbox$$90$$.$getOptions$()[D.$DvtNBoxConstants$$.$OTHER_THRESHOLD$]
};
D.$DvtNBoxDataUtils$$.$getOtherColor$ = function $$DvtNBoxDataUtils$$$$getOtherColor$$($nbox$$91$$) {
  return $nbox$$91$$.$getOptions$()[D.$DvtNBoxConstants$$.$OTHER_COLOR$]
};
D.$DvtNBoxDataUtils$$.$getDrawer$ = function $$DvtNBoxDataUtils$$$$getDrawer$$($nbox$$92$$) {
  return $nbox$$92$$.$getOptions$()[D.$DvtNBoxConstants$$.$DRAWER$]
};
D.$DvtNBoxDataUtils$$.$getCategoryNode$ = function $$DvtNBoxDataUtils$$$$getCategoryNode$$($nbox$$93$$, $id$$235$$) {
  var $cell$$49_groupBehavior$$7$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$93$$), $groups$$12$$ = $nbox$$93$$.$getOptions$().__groups, $groupId$$24$$ = $id$$235$$;
  $cell$$49_groupBehavior$$7$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cell$$49_groupBehavior$$7$$ = $id$$235$$.substring(0, $id$$235$$.indexOf(":")), $groupId$$24$$ = $id$$235$$.substring($id$$235$$.indexOf(":") + 1), $groups$$12$$ = $groups$$12$$[$cell$$49_groupBehavior$$7$$]);
  return $groups$$12$$ ? $groups$$12$$[$groupId$$24$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$ = function $$DvtNBoxDataUtils$$$$getCategoryNodeLabels$$($nbox$$94$$, $categoryNode$$8$$) {
  if($categoryNode$$8$$.__labels) {
    return $categoryNode$$8$$.__labels
  }
  var $node$$278$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$94$$, $categoryNode$$8$$.nodeIndices[0]);
  if($node$$278$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$]) {
    return $categoryNode$$8$$.__labels = [$node$$278$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$]]
  }
  $categoryNode$$8$$.__labels = [];
  if($node$$278$$._groupCategories) {
    for(var $labelMap$$ = $nbox$$94$$.$getOptions$()._groupLabels, $i$$743$$ = 0;$i$$743$$ < $node$$278$$._groupCategories.length;$i$$743$$++) {
      $categoryNode$$8$$.__labels[$i$$743$$] = $labelMap$$ && $labelMap$$[$node$$278$$._groupCategories[$i$$743$$]] ? $labelMap$$[$node$$278$$._groupCategories[$i$$743$$]] : $node$$278$$._groupCategories[$i$$743$$]
    }
  }
  return $categoryNode$$8$$.__labels
};
D.$DvtNBoxDataUtils$$.$setDisplayable$ = function $$DvtNBoxDataUtils$$$$setDisplayable$$($displayables$$26_nbox$$95$$, $dataObject$$, $displayable$$72$$, $fullKey$$2_key$$120$$) {
  $displayables$$26_nbox$$95$$ = $displayables$$26_nbox$$95$$.$getDisplayables$();
  $fullKey$$2_key$$120$$ = $fullKey$$2_key$$120$$ ? "__displayable:" + $fullKey$$2_key$$120$$ : "__displayable";
  $dataObject$$[$fullKey$$2_key$$120$$] ? $displayables$$26_nbox$$95$$[$dataObject$$[$fullKey$$2_key$$120$$]] = $displayable$$72$$ : ($dataObject$$[$fullKey$$2_key$$120$$] = $displayables$$26_nbox$$95$$.length, $displayables$$26_nbox$$95$$.push($displayable$$72$$))
};
D.$DvtNBoxDataUtils$$.$getDisplayable$ = function $$DvtNBoxDataUtils$$$$getDisplayable$$($displayables$$27_nbox$$96$$, $dataObject$$1_index$$224$$, $key$$121$$) {
  $dataObject$$1_index$$224$$ = $dataObject$$1_index$$224$$[$key$$121$$ ? "__displayable:" + $key$$121$$ : "__displayable"];
  $displayables$$27_nbox$$96$$ = $displayables$$27_nbox$$96$$.$getDisplayables$();
  return $dataObject$$1_index$$224$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $displayables$$27_nbox$$96$$[$dataObject$$1_index$$224$$]
};
D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$ = function $$DvtNBoxDataUtils$$$$isMaximizeEnabled$$($nbox$$97$$) {
  return"off" != $nbox$$97$$.$getOptions$().cellMaximize
};
D.$DvtNBoxDataUtils$$.$getCellContent$ = function $$DvtNBoxDataUtils$$$$getCellContent$$($nbox$$98$$) {
  return"counts" == $nbox$$98$$.$getOptions$().cellContent ? "counts" : "auto"
};
D.$DvtNBoxDataUtils$$.$isCellMinimized$ = function $$DvtNBoxDataUtils$$$$isCellMinimized$$($nbox$$99$$, $cellIndex$$12$$) {
  var $maximizedRow$$8$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$99$$), $maximizedColumn$$8$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$99$$);
  if(!$maximizedRow$$8$$ && !$maximizedColumn$$8$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $cell$$50_cellColumn$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$99$$, $cellIndex$$12$$), $cellRow$$ = $cell$$50_cellColumn$$[D.$DvtNBoxConstants$$.$ROW$], $cell$$50_cellColumn$$ = $cell$$50_cellColumn$$[D.$DvtNBoxConstants$$.$COLUMN$];
  return $maximizedRow$$8$$ && $maximizedColumn$$8$$ ? $maximizedRow$$8$$ != $cellRow$$ || $maximizedColumn$$8$$ != $cell$$50_cellColumn$$ : $maximizedRow$$8$$ != $cellRow$$ && $maximizedColumn$$8$$ != $cell$$50_cellColumn$$
};
D.$DvtNBoxDataUtils$$.$isCellMaximized$ = function $$DvtNBoxDataUtils$$$$isCellMaximized$$($nbox$$100$$, $cellIndex$$13$$) {
  var $maximizedRow$$9$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$100$$), $maximizedColumn$$9$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$100$$), $cell$$51$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$100$$, $cellIndex$$13$$), $cellColumn$$1$$ = $cell$$51$$[D.$DvtNBoxConstants$$.$COLUMN$];
  return $maximizedRow$$9$$ == $cell$$51$$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$9$$ == $cellColumn$$1$$
};
D.$DvtNBoxDataUtils$$.$getLegend$ = function $$DvtNBoxDataUtils$$$$getLegend$$($nbox$$101$$) {
  return $nbox$$101$$.$getOptions$()._legend
};
D.$DvtNBoxDataUtils$$.$isNodeHidden$ = function $$DvtNBoxDataUtils$$$$isNodeHidden$$($nbox$$102$$, $node$$279$$) {
  var $options$$221$$ = $nbox$$102$$.$getOptions$();
  $options$$221$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$] && !$options$$221$$.__hiddenMap && ($options$$221$$.__hiddenMap = D.$DvtArrayUtils$$.$createBooleanMap$($options$$221$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$]));
  return D.$DvtArrayUtils$$.$hasAnyMapItem$($options$$221$$.__hiddenMap, $node$$279$$[D.$DvtNBoxConstants$$.$CATEGORIES$])
};
D.$DvtNBoxDataUtils$$.$isNodeHighlighted$ = function $$DvtNBoxDataUtils$$$$isNodeHighlighted$$($nbox$$103$$, $node$$280$$) {
  var $options$$222$$ = $nbox$$103$$.$getOptions$();
  $options$$222$$[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$] && !$options$$222$$.__highlightedMap && ($options$$222$$.__highlightedMap = D.$DvtArrayUtils$$.$createBooleanMap$($options$$222$$[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$]));
  return"all" == $options$$222$$[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllMapItems$($options$$222$$.__highlightedMap, $node$$280$$[D.$DvtNBoxConstants$$.$CATEGORIES$]) : D.$DvtArrayUtils$$.$hasAnyMapItem$($options$$222$$.__highlightedMap, $node$$280$$[D.$DvtNBoxConstants$$.$CATEGORIES$])
};
D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$ = function $$DvtNBoxDataUtils$$$$getNodeScrollableContainer$$($nbox$$104$$, $node$$281$$) {
  if(!$node$$281$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($nbox$$104$$);
  if($cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ && ($cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$))) {
    return $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$.$getChildContainer$()
  }
  $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$104$$, $node$$281$$.getData());
  return D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$) ? ($cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$), D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$).$getChildContainer$()) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$ = function $$DvtNBoxDataUtils$$$$fireSetPropertyEvent$$($nbox$$105$$, $key$$122$$) {
  var $event$$594$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$594$$, $key$$122$$, D.$JSCompiler_alias_NULL$$);
  $nbox$$105$$.$processEvent$($event$$594$$)
};
D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$ = function $$DvtNBoxDataUtils$$$$getMaximizedCellIndex$$($nbox$$106$$) {
  var $columnCount$$17_maximizedCellIndex$$2$$ = D.$JSCompiler_alias_NULL$$, $maximizedRow$$10$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$106$$), $maximizedColumn$$10$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$106$$);
  $maximizedRow$$10$$ && $maximizedColumn$$10$$ && ($columnCount$$17_maximizedCellIndex$$2$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$106$$), $columnCount$$17_maximizedCellIndex$$2$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$106$$, $maximizedColumn$$10$$) + $columnCount$$17_maximizedCellIndex$$2$$ * D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$106$$, $maximizedRow$$10$$));
  return $columnCount$$17_maximizedCellIndex$$2$$
};
D.$DvtNBoxDataUtils$$.$isDrawerSelected$ = function $$DvtNBoxDataUtils$$$$isDrawerSelected$$($nbox$$107$$, $categoryNode$$9$$) {
  var $i$$744_selected$$39$$ = D.$JSCompiler_alias_FALSE$$, $nodeIndices$$4_selectedItems$$3$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$107$$);
  if($nodeIndices$$4_selectedItems$$3$$) {
    for(var $selectedMap$$2$$ = {}, $i$$744_selected$$39$$ = 0;$i$$744_selected$$39$$ < $nodeIndices$$4_selectedItems$$3$$.length;$i$$744_selected$$39$$++) {
      $selectedMap$$2$$[$nodeIndices$$4_selectedItems$$3$$[$i$$744_selected$$39$$]] = D.$JSCompiler_alias_TRUE$$
    }
    for(var $nodeIndices$$4_selectedItems$$3$$ = $categoryNode$$9$$.getData().nodeIndices, $i$$744_selected$$39$$ = D.$JSCompiler_alias_TRUE$$, $j$$102$$ = 0;$j$$102$$ < $nodeIndices$$4_selectedItems$$3$$.length;$j$$102$$++) {
      var $node$$282$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$107$$, $nodeIndices$$4_selectedItems$$3$$[$j$$102$$]);
      if(!$selectedMap$$2$$[$node$$282$$[D.$DvtNBoxConstants$$.ID]]) {
        $i$$744_selected$$39$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
  }
  return $i$$744_selected$$39$$
};
D.$DvtNBoxDataUtils$$.$buildAriaDesc$ = function $$DvtNBoxDataUtils$$$$buildAriaDesc$$($nbox$$108_nodeCount$$13$$, $object$$16$$, $baseDesc_datatip$$19$$, $selected$$40$$) {
  $baseDesc_datatip$$19$$ = $object$$16$$ instanceof D.$DvtNBoxCategoryNode$$ || $object$$16$$ instanceof D.$DvtNBoxDrawer$$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "GROUP_NODE"), $baseDesc_datatip$$19$$]) : $baseDesc_datatip$$19$$;
  var $states$$13$$ = [];
  $selected$$40$$ ? $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_SELECTED")) : $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_UNSELECTED"));
  $object$$16$$ instanceof D.$DvtNBoxCategoryNode$$ ? ($nbox$$108_nodeCount$$13$$ = $object$$16$$.getData().nodeIndices.length, $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_COLLAPSED")), $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), $nbox$$108_nodeCount$$13$$]))) : $object$$16$$ instanceof D.$DvtNBoxDrawer$$ && ($nbox$$108_nodeCount$$13$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$108_nodeCount$$13$$, 
  $object$$16$$.getData()[D.$DvtNBoxConstants$$.ID]).nodeIndices.length, $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_EXPANDED")), $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), $nbox$$108_nodeCount$$13$$])));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($baseDesc_datatip$$19$$, $states$$13$$)
};
D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$ = function $$DvtNBoxDataUtils$$$$getFirstNavigableNode$$($nbox$$109$$, $container$$166$$) {
  var $navigable$$17$$ = D.$JSCompiler_alias_NULL$$;
  if(0 < $container$$166$$.$getNumChildren$()) {
    var $navigable$$17$$ = $container$$166$$.$getChildAt$(0), $prevData$$;
    do {
      $navigable$$17$$ instanceof D.$DvtNBoxNode$$ ? $prevData$$ = $navigable$$17$$.getData().__prev : $navigable$$17$$ instanceof D.$DvtNBoxNodeOverflow$$ && ($prevData$$ = $navigable$$17$$.__prev), $navigable$$17$$ = $prevData$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$109$$, $prevData$$) : $navigable$$17$$
    }while($prevData$$)
  }
  return $navigable$$17$$
};
D.$DvtNBoxDataUtils$$.$getLastNavigableNode$ = function $$DvtNBoxDataUtils$$$$getLastNavigableNode$$($nbox$$110$$, $container$$167$$) {
  var $navigable$$18$$ = D.$JSCompiler_alias_NULL$$, $childCnt$$2_nextData$$ = $container$$167$$.$getNumChildren$();
  if(0 < $childCnt$$2_nextData$$) {
    $navigable$$18$$ = $container$$167$$.$getChildAt$($childCnt$$2_nextData$$ - 1);
    do {
      $navigable$$18$$ = ($childCnt$$2_nextData$$ = $navigable$$18$$ instanceof D.$DvtNBoxNode$$ ? $navigable$$18$$.getData().__next : D.$JSCompiler_alias_NULL$$) ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$110$$, $childCnt$$2_nextData$$) : $navigable$$18$$
    }while($childCnt$$2_nextData$$)
  }
  return $navigable$$18$$
};
D.$DvtNBoxDataUtils$$.$getNextNavigableNode$ = function $$DvtNBoxDataUtils$$$$getNextNavigableNode$$($nbox$$111$$, $object$$17$$, $bNext$$7_event$$595$$) {
  $bNext$$7_event$$595$$ = 39 == $bNext$$7_event$$595$$.keyCode || 40 == $bNext$$7_event$$595$$.keyCode ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  var $nextData$$1$$;
  $object$$17$$ instanceof D.$DvtNBoxNode$$ ? $nextData$$1$$ = $bNext$$7_event$$595$$ ? $object$$17$$.getData().__next : $object$$17$$.getData().__prev : $object$$17$$ instanceof D.$DvtNBoxNodeOverflow$$ && ($nextData$$1$$ = $bNext$$7_event$$595$$ ? D.$JSCompiler_alias_NULL$$ : $object$$17$$.__prev);
  return $nextData$$1$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$111$$, $nextData$$1$$) : $object$$17$$
};
D.$DvtNBoxStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxStyleUtils$$, D.$DvtObj$$, "DvtNBoxStyleUtils");
D.$DvtNBoxStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDisplay$$($animationOnDisplay$$4_nbox$$112$$) {
  $animationOnDisplay$$4_nbox$$112$$ = $animationOnDisplay$$4_nbox$$112$$.$getOptions$()[D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$];
  "auto" == $animationOnDisplay$$4_nbox$$112$$ && ($animationOnDisplay$$4_nbox$$112$$ = D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$);
  return $animationOnDisplay$$4_nbox$$112$$
};
D.$DvtNBoxStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDataChange$$($nbox$$113$$) {
  return $nbox$$113$$.$getOptions$()[D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$]
};
D.$DvtNBoxStyleUtils$$.$getAnimationDuration$ = function $$DvtNBoxStyleUtils$$$$getAnimationDuration$$($nbox$$114$$) {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)($nbox$$114$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ANIMATION_DURATION$]) / 1E3
};
D.$DvtNBoxStyleUtils$$.$getColumnLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getColumnLabelStyle$$($nbox$$115$$, $columnIndex$$8$$) {
  var $defaults$$2$$ = $nbox$$115$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLUMN_LABEL_STYLE$], $column$$12$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$115$$, $columnIndex$$8$$);
  return $column$$12$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($column$$12$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$2$$) : $defaults$$2$$
};
D.$DvtNBoxStyleUtils$$.$getRowLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getRowLabelStyle$$($nbox$$116$$, $rowIndex$$20$$) {
  var $defaults$$3$$ = $nbox$$116$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ROW_LABEL_STYLE$], $row$$53$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$116$$, $rowIndex$$20$$);
  return $row$$53$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($row$$53$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$3$$) : $defaults$$3$$
};
D.$DvtNBoxStyleUtils$$.$getCellStyle$ = function $$DvtNBoxStyleUtils$$$$getCellStyle$$($nbox$$117$$, $cellIndex$$15$$) {
  var $defaults$$4_options$$225$$ = $nbox$$117$$.$getOptions$(), $styleKey$$ = D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$117$$, $cellIndex$$15$$) ? "minimizedStyle" : D.$DvtNBoxConstants$$.$STYLE$, $defaults$$4_options$$225$$ = $defaults$$4_options$$225$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][$styleKey$$], $cell$$53$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$117$$, $cellIndex$$15$$);
  return $cell$$53$$[$styleKey$$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($cell$$53$$[$styleKey$$]), $defaults$$4_options$$225$$) : $defaults$$4_options$$225$$
};
D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellLabelStyle$$($nbox$$118$$, $cellIndex$$16$$) {
  var $defaults$$5$$ = $nbox$$118$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_STYLE$], $cell$$54$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$118$$, $cellIndex$$16$$);
  return $cell$$54$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($cell$$54$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$5$$) : $defaults$$5$$
};
D.$DvtNBoxStyleUtils$$.$getCellShowCount$ = function $$DvtNBoxStyleUtils$$$$getCellShowCount$$($nbox$$119$$, $cell$$55$$) {
  return $cell$$55$$[D.$DvtNBoxConstants$$.$SHOW_COUNT$] ? $cell$$55$$[D.$DvtNBoxConstants$$.$SHOW_COUNT$] : $nbox$$119$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$SHOW_COUNT$]
};
D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellCountLabelStyle$$($nbox$$120$$) {
  return $nbox$$120$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].countLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellBodyCountLabelStyle$$($nbox$$121$$) {
  return $nbox$$121$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].bodyCountLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getCellDropTargetStyle$ = function $$DvtNBoxStyleUtils$$$$getCellDropTargetStyle$$($nbox$$122$$) {
  return $nbox$$122$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].dropTargetStyle
};
D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeLabelStyle$$($nbox$$123$$) {
  return $nbox$$123$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeSecondaryLabelStyle$$($nbox$$124$$) {
  return $nbox$$124$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$SECONDARY_LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getNodeColor$ = function $$DvtNBoxStyleUtils$$$$getNodeColor$$($nbox$$125$$, $node$$285$$) {
  return $node$$285$$[D.$DvtNBoxConstants$$.$COLOR$] ? $node$$285$$[D.$DvtNBoxConstants$$.$COLOR$] : $nbox$$125$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderColor$$($nbox$$126$$, $node$$286$$) {
  var $color$$74$$ = $node$$286$$[D.$DvtNBoxConstants$$.$BORDER_COLOR$] ? $node$$286$$[D.$DvtNBoxConstants$$.$BORDER_COLOR$] : $nbox$$126$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_COLOR$];
  return $color$$74$$ ? $color$$74$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderWidth$$($nbox$$127$$, $node$$287$$) {
  var $width$$122$$ = $node$$287$$[D.$DvtNBoxConstants$$.$BORDER_WIDTH$] ? $node$$287$$[D.$DvtNBoxConstants$$.$BORDER_WIDTH$] : $nbox$$127$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_WIDTH$];
  return $width$$122$$ ? $width$$122$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getNodeIndicatorColor$$($nbox$$128$$, $node$$288$$) {
  return $node$$288$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$] ? $node$$288$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$] : $nbox$$128$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getStyledIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIcon$$($nbox$$129$$, $icon$$47$$) {
  return D.$DvtJSONUtils$$.$merge$($icon$$47$$, $nbox$$129$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIndicatorIcon$$($nbox$$130$$, $indicatorIcon$$8$$) {
  return D.$DvtJSONUtils$$.$merge$($indicatorIcon$$8$$, $nbox$$130$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$ = function $$DvtNBoxStyleUtils$$$$getFadedNodeAlpha$$($nbox$$131$$) {
  return $nbox$$131$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].alphaFade
};
D.$DvtNBoxStyleUtils$$.$getScrollbarStyleMap$ = function $$DvtNBoxStyleUtils$$$$getScrollbarStyleMap$$($nbox$$132$$) {
  return $nbox$$132$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__scrollbar
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeColor$$($nbox$$133$$, $categoryNode$$10$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$133$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$133$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$133$$).indexOf("color")) {
    return $nbox$$133$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  if($categoryNode$$10$$.otherNode) {
    return D.$DvtNBoxDataUtils$$.$getOtherColor$($nbox$$133$$)
  }
  var $nodeIndices$$5$$ = $categoryNode$$10$$.nodeIndices, $color$$75$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$133$$, $nodeIndices$$5$$[0])[D.$DvtNBoxConstants$$.$COLOR$];
  if(!$color$$75$$) {
    return $nbox$$133$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  for(var $i$$745$$ = 1;$i$$745$$ < $nodeIndices$$5$$.length;$i$$745$$++) {
    var $node$$289$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$133$$, $nodeIndices$$5$$[$i$$745$$]);
    if($color$$75$$ != $node$$289$$[D.$DvtNBoxConstants$$.$COLOR$]) {
      return $nbox$$133$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
    }
  }
  return $color$$75$$
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeIndicatorColor$$($nbox$$134$$, $categoryNode$$11$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$134$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$134$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$134$$).indexOf("indicatorColor")) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $nodeIndices$$6$$ = $categoryNode$$11$$.nodeIndices, $color$$76$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$134$$, $nodeIndices$$6$$[0])[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$];
  if(!$color$$76$$) {
    return $nbox$$134$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
  }
  for(var $i$$746$$ = 1;$i$$746$$ < $nodeIndices$$6$$.length;$i$$746$$++) {
    var $node$$290$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$134$$, $nodeIndices$$6$$[$i$$746$$]);
    if($color$$76$$ != $node$$290$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]) {
      return $nbox$$134$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
    }
  }
  return $color$$76$$
};
D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledCategoryIndicatorIcon$$($nbox$$135$$, $categoryNode$$12$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$135$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconShape") && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconColor") && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconPattern")) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $indicatorIcon$$9$$ = {}, $nodeIndices$$7$$ = $categoryNode$$12$$.nodeIndices, $baseIcon_pattern$$13$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[0])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$];
  if(!$baseIcon_pattern$$13$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $match$$7$$ = D.$JSCompiler_alias_TRUE$$;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconShape")) {
    for(var $color$$77_k$$9_shape$$69$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$SHAPE$], $i$$747_j$$103$$ = 1;$i$$747_j$$103$$ < $nodeIndices$$7$$.length;$i$$747_j$$103$$++) {
      var $nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[$i$$747_j$$103$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$];
      $nodeIcon$$ && $color$$77_k$$9_shape$$69$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$SHAPE$] && ($match$$7$$ = D.$JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$SHAPE$] = $match$$7$$ ? $color$$77_k$$9_shape$$69$$ : $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$SHAPE$]
  }
  $match$$7$$ = D.$JSCompiler_alias_TRUE$$;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconColor")) {
    $color$$77_k$$9_shape$$69$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$COLOR$];
    for($i$$747_j$$103$$ = 1;$i$$747_j$$103$$ < $nodeIndices$$7$$.length;$i$$747_j$$103$$++) {
      ($nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[$i$$747_j$$103$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) && $color$$77_k$$9_shape$$69$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$COLOR$] && ($match$$7$$ = D.$JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$COLOR$] = $match$$7$$ ? $color$$77_k$$9_shape$$69$$ : $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  $match$$7$$ = D.$JSCompiler_alias_TRUE$$;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconPattern")) {
    $baseIcon_pattern$$13$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$PATTERN$];
    for($color$$77_k$$9_shape$$69$$ = 1;$color$$77_k$$9_shape$$69$$ < $nodeIndices$$7$$.length;$color$$77_k$$9_shape$$69$$++) {
      ($nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[$color$$77_k$$9_shape$$69$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) && $baseIcon_pattern$$13$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$PATTERN$] && ($match$$7$$ = D.$JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$PATTERN$] = $match$$7$$ ? $baseIcon_pattern$$13$$ : $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$PATTERN$]
  }
  return D.$DvtJSONUtils$$.$merge$($indicatorIcon$$9$$, $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getDrawerBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerBackground$$($nbox$$136$$) {
  return $nbox$$136$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.background
};
D.$DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerHeaderBackground$$($nbox$$137$$) {
  return $nbox$$137$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.headerBackground
};
D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderColor$$($nbox$$138$$) {
  return $nbox$$138$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$BORDER_COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderRadius$$($nbox$$139$$) {
  return $nbox$$139$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$BORDER_RADIUS$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerLabelStyle$$($nbox$$140$$) {
  return $nbox$$140$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountLabelStyle$$($nbox$$141$$) {
  return $nbox$$141$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.countLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountBorderRadius$$($nbox$$142$$) {
  return $nbox$$142$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.countBorderRadius
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeLabelStyle$$($nbox$$143$$) {
  return $nbox$$143$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__categoryNodeDefaults.labelStyle
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderRadius$$($nbox$$144$$) {
  return $nbox$$144$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_RADIUS$]
};
D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$ = function $$DvtNBoxStyleUtils$$$$getNodeHoverColor$$($nbox$$145$$) {
  return $nbox$$145$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].hoverColor
};
D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$ = function $$DvtNBoxStyleUtils$$$$getNodeSelectionColor$$($nbox$$146$$) {
  return $nbox$$146$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].selectionColor
};
D.$DvtNBoxStyleUtils$$.$getLabelHalign$ = function $$DvtNBoxStyleUtils$$$$getLabelHalign$$($nbox$$147$$, $data$$98$$) {
  var $halign$$12$$ = $data$$98$$[D.$DvtNBoxConstants$$.$LABEL_HALIGN$];
  $halign$$12$$ || ($halign$$12$$ = $nbox$$147$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_HALIGN$]);
  var $rtl$$31$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$147$$.$getCtx$());
  return"end" == $halign$$12$$ ? $rtl$$31$$ ? "left" : "right" : "center" == $halign$$12$$ ? "center" : $rtl$$31$$ ? "right" : "left"
};
  return D;
});