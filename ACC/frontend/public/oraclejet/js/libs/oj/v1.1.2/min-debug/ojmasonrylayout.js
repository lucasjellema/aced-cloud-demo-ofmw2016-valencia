/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$38$$, $$$$35$$) {
  function $MasonryLayoutCommon$$($elem$$104$$, $rtl$$2_sizeDivWrapper$$, $automationEnabled_style$$19$$, $selectors$$8_sizeDiv$$, $styles$$1$$, $callbackInfo$$2$$) {
    null == $MasonryLayoutCommon$$.$_agentTypeAndVersion$ && ($MasonryLayoutCommon$$.$_agentTypeAndVersion$ = $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$());
    this.$_elem$ = $elem$$104$$;
    this.$_rtl$ = $rtl$$2_sizeDivWrapper$$;
    this.$_automationEnabled$ = $automationEnabled_style$$19$$;
    $selectors$$8_sizeDiv$$ && $selectors$$8_sizeDiv$$.$tiles$ && (this.$_tilesSelector$ = $selectors$$8_sizeDiv$$.$tiles$);
    $styles$$1$$ && ($styles$$1$$.$transitionComponentResizeToStyleClass$ && (this.$_transitionComponentResizeToStyleClass$ = $styles$$1$$.$transitionComponentResizeToStyleClass$), $styles$$1$$.$transitionComponentResizeToFastStyleClass$ && (this.$_transitionComponentResizeToFastStyleClass$ = $styles$$1$$.$transitionComponentResizeToFastStyleClass$), $styles$$1$$.$transitionMoveToStyleClass$ && (this.$_transitionMoveToStyleClass$ = $styles$$1$$.$transitionMoveToStyleClass$), $styles$$1$$.$transitionMoveToFastStyleClass$ && 
    (this.$_transitionMoveToFastStyleClass$ = $styles$$1$$.$transitionMoveToFastStyleClass$), $styles$$1$$.$transitionHideFromStyleClass$ && (this.$_transitionHideFromStyleClass$ = $styles$$1$$.$transitionHideFromStyleClass$), $styles$$1$$.$transitionHideToStyleClass$ && (this.$_transitionHideToStyleClass$ = $styles$$1$$.$transitionHideToStyleClass$), $styles$$1$$.$transitionShowFromStyleClass$ && (this.$_transitionShowFromStyleClass$ = $styles$$1$$.$transitionShowFromStyleClass$), $styles$$1$$.$transitionShowToStyleClass$ && 
    (this.$_transitionShowToStyleClass$ = $styles$$1$$.$transitionShowToStyleClass$), $styles$$1$$.$transitionResizeToStyleClass$ && (this.$_transitionResizeToStyleClass$ = $styles$$1$$.$transitionResizeToStyleClass$));
    $callbackInfo$$2$$ && ($callbackInfo$$2$$.$addStyleClassName$ && (this.$_addStyleClassNameFunc$ = $callbackInfo$$2$$.$addStyleClassName$), $callbackInfo$$2$$.$removeStyleClassName$ && (this.$_removeStyleClassNameFunc$ = $callbackInfo$$2$$.$removeStyleClassName$), $callbackInfo$$2$$.$getSizeStyleClassName$ && (this.$_getSizeStyleClassNameFunc$ = $callbackInfo$$2$$.$getSizeStyleClassName$), $callbackInfo$$2$$.$getTileSpan$ && (this.$_getTileSpanFunc$ = $callbackInfo$$2$$.$getTileSpan$), $callbackInfo$$2$$.$showTileOnEndFunc$ && 
    (this.$_showTileOnEndFunc$ = $callbackInfo$$2$$.$showTileOnEndFunc$), $callbackInfo$$2$$.$hideTileOnEndFunc$ && (this.$_hideTileOnEndFunc$ = $callbackInfo$$2$$.$hideTileOnEndFunc$), $callbackInfo$$2$$.$layoutOnEndFunc$ && (this.$_layoutOnEndFunc$ = $callbackInfo$$2$$.$layoutOnEndFunc$), $callbackInfo$$2$$.$layoutCycleOnStartFunc$ && (this.$_layoutCycleOnStartFunc$ = $callbackInfo$$2$$.$layoutCycleOnStartFunc$), $callbackInfo$$2$$.$layoutCycleOnEndFunc$ && (this.$_layoutCycleOnEndFunc$ = $callbackInfo$$2$$.$layoutCycleOnEndFunc$), 
    $callbackInfo$$2$$.$sortTilesOriginalOrderFunc$ && (this.$_sortTilesOriginalOrderFunc$ = $callbackInfo$$2$$.$sortTilesOriginalOrderFunc$), $callbackInfo$$2$$.$subtreeAttached$ && (this.$_subtreeAttachedFunc$ = $callbackInfo$$2$$.$subtreeAttached$), $callbackInfo$$2$$.$subtreeDetached$ && (this.$_subtreeDetachedFunc$ = $callbackInfo$$2$$.$subtreeDetached$));
    $rtl$$2_sizeDivWrapper$$ = document.createElement("div");
    $automationEnabled_style$$19$$ = $rtl$$2_sizeDivWrapper$$.style;
    $automationEnabled_style$$19$$.display = "inline-block";
    $automationEnabled_style$$19$$.overflow = "hidden";
    $automationEnabled_style$$19$$.visibility = "hidden";
    $selectors$$8_sizeDiv$$ = document.createElement("div");
    $automationEnabled_style$$19$$ = $selectors$$8_sizeDiv$$.style;
    $automationEnabled_style$$19$$.display = "inline-block";
    $rtl$$2_sizeDivWrapper$$.appendChild($selectors$$8_sizeDiv$$);
    $elem$$104$$.insertBefore($rtl$$2_sizeDivWrapper$$, $elem$$104$$.firstChild);
    this.$_sizeDivWrapper$ = $rtl$$2_sizeDivWrapper$$;
    this.$_sizeDiv$ = $selectors$$8_sizeDiv$$;
    var $self$$153$$ = this;
    this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$($event$$440$$) {
      $self$$153$$.$_handleTransitionEnd$($event$$440$$);
    };
    this.$_hideTilesFunc$ = function $this$$_hideTilesFunc$$() {
      $self$$153$$.$_hideTiles$();
    };
    this.$_handleHideTransitionEndFunc$ = function $this$$_handleHideTransitionEndFunc$$($event$$441$$) {
      $self$$153$$.$_handleHideTransitionEnd$($event$$441$$);
    };
    this.$_handleShowTransitionEndFunc$ = function $this$$_handleShowTransitionEndFunc$$($event$$442$$) {
      $self$$153$$.$_handleShowTransitionEnd$($event$$442$$);
    };
  }
  $MasonryLayoutCommon$$.prototype.$setup$ = function $$MasonryLayoutCommon$$$$$setup$$($init$$, $reorder$$) {
    var $ret$$46$$ = !1;
    $init$$ ? ($ret$$46$$ = this.$_layout$() ? !0 : !1, this.$_reorderTilesForLayout$()) : (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$($reorder$$), $ret$$46$$ = this.$_transitionLayout$());
    return $ret$$46$$;
  };
  $MasonryLayoutCommon$$.prototype.destroy = function $$MasonryLayoutCommon$$$$destroy$() {
    for (var $elem$$105$$ = this.$_elem$, $children$$9$$ = this.$_getTileChildren$(), $i$$351$$ = 0;$i$$351$$ < $children$$9$$.length;$i$$351$$++) {
      var $style$$20$$ = $children$$9$$[$i$$351$$].style;
      this.$_rtl$ ? $style$$20$$.right = "" : $style$$20$$.left = "";
      $style$$20$$.top = "";
    }
    $elem$$105$$.removeChild(this.$_sizeDivWrapper$);
    this.$_subtreeDetachedFunc$ = this.$_subtreeAttachedFunc$ = this.$_sortTilesOriginalOrderFunc$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_getTileSpanFunc$ = this.$_getSizeStyleClassNameFunc$ = this.$_removeStyleClassNameFunc$ = this.$_addStyleClassNameFunc$ = this.$_elem$ = this.$_arFireHideOnEnd$ = this.$_arInfoletsToHide$ = this.$_arInfoletsToShow$ = this.$_arInfoletsToResize$ = this.$_arMovedInfolets$ = 
    this.$_handleShowTransitionEndFunc$ = this.$_handleHideTransitionEndFunc$ = this.$_hideTilesFunc$ = this.$_handleTransitionEndFunc$ = this.$_sizeDiv$ = this.$_sizeDivWrapper$ = null;
  };
  $MasonryLayoutCommon$$.prototype.resizeTile = function $$MasonryLayoutCommon$$$$resizeTile$($selector$$25$$, $sizeStyleClass$$) {
    var $infolet$$ = this.$_elem$.querySelector($selector$$25$$);
    if ($infolet$$) {
      this.$_arInfoletsToResize$ || (this.$_arInfoletsToResize$ = []);
      var $arInfoletsToResize$$ = this.$_arInfoletsToResize$;
      $arInfoletsToResize$$.push($infolet$$);
      $arInfoletsToResize$$.push($sizeStyleClass$$);
      this.$_resizingInfolet$ = !0;
      this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$insertTileDomElem$ = function $$MasonryLayoutCommon$$$$$insertTileDomElem$$($tileDomElem$$, $index$$226$$) {
    var $arChildren$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($arChildren$$);
    var $currChildAtIndex$$ = null;
    0 <= $index$$226$$ && $index$$226$$ < $arChildren$$.length && ($currChildAtIndex$$ = $arChildren$$[$index$$226$$]);
    this.$_elem$.insertBefore($tileDomElem$$, $currChildAtIndex$$);
    this.$_queueRelayout$();
  };
  $MasonryLayoutCommon$$.prototype.$showTile$ = function $$MasonryLayoutCommon$$$$$showTile$$($infolet$$1_selector$$26$$) {
    if ($infolet$$1_selector$$26$$ = this.$_elem$.querySelector($infolet$$1_selector$$26$$)) {
      this.$_arInfoletsToShow$ || (this.$_arInfoletsToShow$ = []), this.$_arInfoletsToShow$.push($infolet$$1_selector$$26$$), this.$_showingInfolets$ = !0, this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_HIDE$ && this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ ? this.$_queueRelayout$() : this.$_showingInfolets$ = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$hideTile$ = function $$MasonryLayoutCommon$$$$$hideTile$$($infolet$$2_selector$$27$$) {
    if ($infolet$$2_selector$$27$$ = this.$_elem$.querySelector($infolet$$2_selector$$27$$)) {
      this.$_arInfoletsToHide$ || (this.$_arInfoletsToHide$ = []), this.$_arInfoletsToHide$.push($infolet$$2_selector$$27$$), this.$_hidingInfolets$ = !0, this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$resizeNotify$ = function $$MasonryLayoutCommon$$$$$resizeNotify$$() {
    this.$_resizingInfolet$ || this.$_hidingInfolets$ || this.$_showingInfolets$ || (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$(!1), this.$_transitionLayout$());
  };
  $MasonryLayoutCommon$$.prototype.$isAnimationEnabled$ = function $$MasonryLayoutCommon$$$$$isAnimationEnabled$$() {
    if (this.$_temporarilyDisableAnimation$) {
      return!1;
    }
    this.$_cachedAnimationEnabled$ || (this.$_animationEnabled$ = this.$_automationEnabled$ ? !1 : $MasonryLayoutCommon$$.$_isMinimumAgentMet$($MasonryLayoutCommon$$.$_agentTypeAndVersion$[0], $MasonryLayoutCommon$$.$_agentTypeAndVersion$[1]), this.$_cachedAnimationEnabled$ = !0);
    return this.$_animationEnabled$;
  };
  $MasonryLayoutCommon$$.prototype.$isInLayoutCycle$ = function $$MasonryLayoutCommon$$$$$isInLayoutCycle$$() {
    return null != this.$_layoutPhase$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length;
  };
  $MasonryLayoutCommon$$.prototype.$finishLayoutCycle$ = function $$MasonryLayoutCommon$$$$$finishLayoutCycle$$() {
    this.$_temporarilyDisableAnimation$ = !0;
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$);
    for (var $tileChildren$$ = this.$_getTileChildren$(), $i$$352$$ = 0;$i$$352$$ < $tileChildren$$.length;$i$$352$$++) {
      var $child$$11$$ = $tileChildren$$[$i$$352$$];
      $child$$11$$.$_afrOldSizeStyleClass$ && delete $child$$11$$.$_afrOldSizeStyleClass$;
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$11$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$11$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$11$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$11$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
    }
    this.$_hideTilesInternalTimeout$ ? (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null, this.$_handleHideTransitionEnd$(null)) : this.$_showTilesTimeout$ ? (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null, this.$_showTiles$()) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length ? this.$_handleTransitionEnd$(null) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_SHOW$ && 
    this.$_handleShowTransitionEnd$(null);
    this.$_temporarilyDisableAnimation$ = !1;
  };
  $MasonryLayoutCommon$$.$_getElemSize$ = function $$MasonryLayoutCommon$$$$_getElemSize$$($elem$$110$$) {
    var $computedStyle$$3$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($elem$$110$$);
    return{$w$:$elem$$110$$.offsetWidth + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginLeft) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginRight)), $h$:$elem$$110$$.offsetHeight + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginTop) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginBottom))};
  };
  $MasonryLayoutCommon$$.$_getElemInsets$ = function $$MasonryLayoutCommon$$$$_getElemInsets$$($computedStyle$$4_elem$$111$$) {
    $computedStyle$$4_elem$$111$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($computedStyle$$4_elem$$111$$);
    return{paddingLeft:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.paddingLeft), paddingRight:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.paddingRight), paddingTop:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.paddingTop), paddingBottom:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.paddingBottom), borderLeftWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.borderLeftWidth), 
    borderRightWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.borderRightWidth), borderTopWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.borderTopWidth), borderBottomWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$111$$.borderBottomWidth)};
  };
  $MasonryLayoutCommon$$.$_getComputedStyle$ = function $$MasonryLayoutCommon$$$$_getComputedStyle$$($elem$$112$$) {
    var $defView$$1$$ = $elem$$112$$.ownerDocument.defaultView, $computedStyle$$5$$ = null;
    return $computedStyle$$5$$ = $defView$$1$$ ? $defView$$1$$.getComputedStyle($elem$$112$$, null) : $elem$$112$$.currentStyle;
  };
  $MasonryLayoutCommon$$.$_getCSSLengthAsInt$ = function $$MasonryLayoutCommon$$$$_getCSSLengthAsInt$$($cssLength$$3_intLength$$2$$) {
    return 0 < $cssLength$$3_intLength$$2$$.length && "auto" != $cssLength$$3_intLength$$2$$ ? ($cssLength$$3_intLength$$2$$ = parseInt($cssLength$$3_intLength$$2$$, 10), isNaN($cssLength$$3_intLength$$2$$) && ($cssLength$$3_intLength$$2$$ = 0), $cssLength$$3_intLength$$2$$) : 0;
  };
  $MasonryLayoutCommon$$.$_addBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_addBubbleEventListener$$($node$$64$$, $type$$91$$, $listener$$38$$) {
    $node$$64$$.addEventListener ? $node$$64$$.addEventListener($type$$91$$, $listener$$38$$, !1) : $node$$64$$.attachEvent && $node$$64$$.attachEvent("on" + $type$$91$$, $listener$$38$$);
  };
  $MasonryLayoutCommon$$.$_removeBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_removeBubbleEventListener$$($node$$65$$, $type$$92$$, $listener$$39$$) {
    $node$$65$$.removeEventListener ? $node$$65$$.removeEventListener($type$$92$$, $listener$$39$$, !1) : $node$$65$$.detachEvent && $node$$65$$.detachEvent("on" + $type$$92$$, $listener$$39$$);
  };
  $MasonryLayoutCommon$$.$_arrayIndexOf$ = function $$MasonryLayoutCommon$$$$_arrayIndexOf$$($array$$16$$, $item$$89$$) {
    if ($array$$16$$) {
      for (var $i$$353$$ = 0;$i$$353$$ < $array$$16$$.length;$i$$353$$++) {
        if ($array$$16$$[$i$$353$$] == $item$$89$$) {
          return $i$$353$$;
        }
      }
    }
    return-1;
  };
  $MasonryLayoutCommon$$.$_isMinimumAgentMet$ = function $$MasonryLayoutCommon$$$$_isMinimumAgentMet$$($actualAgentType$$, $actualAgentVersion$$) {
    var $agentRequirements$$ = ["gecko", 16, "trident", 6, "webkit", 533.1], $argCount$$ = $agentRequirements$$.length;
    if (0 == $argCount$$ % 2) {
      for (var $i$$354$$ = 0;$i$$354$$ <= $argCount$$ - 2;$i$$354$$ += 2) {
        if ($actualAgentType$$ == $agentRequirements$$[$i$$354$$]) {
          if ($actualAgentVersion$$ >= $agentRequirements$$[1 + $i$$354$$]) {
            return!0;
          }
          break;
        }
      }
    }
    return!1;
  };
  $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$ = function $$MasonryLayoutCommon$$$$_getAgentTypeAndVersion$$() {
    var $versionParser$$ = $MasonryLayoutCommon$$.$_parseFloatVersion$, $agentType$$1$$ = null, $agentVersion$$1_possibleVersion$$ = -1, $userAgent$$3$$ = navigator.userAgent.toLowerCase();
    -1 != $userAgent$$3$$.indexOf("msie") || -1 != $userAgent$$3$$.indexOf("trident") ? ($agentType$$1$$ = "trident", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /trident\/(\d+[.]\d+)/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+);/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+)b;/)), $agentVersion$$1_possibleVersion$$ -= 
    4), null != document.documentMode && ($agentVersion$$1_possibleVersion$$ = Math.min($agentVersion$$1_possibleVersion$$, document.documentMode - 4))) : -1 != $userAgent$$3$$.indexOf("applewebkit") ? ($agentType$$1$$ = "webkit", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /applewebkit\/(\d+([.]\d+)*)/)) : -1 != $userAgent$$3$$.indexOf("gecko/") && ($agentType$$1$$ = "gecko", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /rv:(\d+[.]\d+)/));
    return[$agentType$$1$$, $agentVersion$$1_possibleVersion$$];
  };
  $MasonryLayoutCommon$$.$_parseFloatVersion$ = function $$MasonryLayoutCommon$$$$_parseFloatVersion$$($userAgent$$4$$, $versionNumberPattern$$1$$) {
    var $matches$$4_versionString$$1$$ = $userAgent$$4$$.match($versionNumberPattern$$1$$);
    return $matches$$4_versionString$$1$$ && ($matches$$4_versionString$$1$$ = $matches$$4_versionString$$1$$[1]) ? parseFloat($matches$$4_versionString$$1$$) : -1;
  };
  $MasonryLayoutCommon$$.$_compareTilePositions$ = function $$MasonryLayoutCommon$$$$_compareTilePositions$$($pos1$$, $pos2$$) {
    return $pos1$$.$startRow$ > $pos2$$.$startRow$ ? 1 : $pos1$$.$startRow$ < $pos2$$.$startRow$ ? -1 : $pos1$$.$startCol$ > $pos2$$.$startCol$ ? 1 : $pos1$$.$startCol$ < $pos2$$.$startCol$ ? -1 : 0;
  };
  $MasonryLayoutCommon$$.prototype.$_queueRelayout$ = function $$MasonryLayoutCommon$$$$$_queueRelayout$$() {
    this.$_hideTilesTimeout$ || (this.$_layoutPhase$ ? this.$_queuedRelayout$ || (this.$_queuedRelayout$ = !0) : this.$_hideTilesTimeout$ = setTimeout(this.$_hideTilesFunc$, 0));
  };
  $MasonryLayoutCommon$$.prototype.$_getTileChildren$ = function $$MasonryLayoutCommon$$$$$_getTileChildren$$() {
    for (var $children$$10$$ = this.$_elem$.querySelectorAll(this.$_tilesSelector$), $arChildren$$1$$ = [], $i$$355$$ = 0;$i$$355$$ < $children$$10$$.length;$i$$355$$++) {
      var $child$$12$$ = $children$$10$$[$i$$355$$], $childStyle$$ = $child$$12$$.style;
      0 < $child$$12$$.offsetWidth && 0 < $child$$12$$.offsetHeight && "hidden" != $childStyle$$.visibility && $arChildren$$1$$.push($child$$12$$);
    }
    return $arChildren$$1$$;
  };
  $MasonryLayoutCommon$$.prototype.$_transitionLayout$ = function $$MasonryLayoutCommon$$$$$_transitionLayout$$() {
    var $oldMovedInfolets_ret$$47$$ = this.$_arMovedInfolets$, $newMovedInfolets$$ = this.$_layout$();
    if (this.$_arInfoletsToResize$) {
      var $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = this.$_arInfoletsToResize$;
      $newMovedInfolets$$ || ($newMovedInfolets$$ = []);
      for (var $i$$356$$ = 0;$i$$356$$ < $arInfoletsToResize$$1_calledHandleTransitionEnd$$.length;$i$$356$$ += 2) {
        var $resizedInfolet$$ = $arInfoletsToResize$$1_calledHandleTransitionEnd$$[$i$$356$$];
        0 > $MasonryLayoutCommon$$.$_arrayIndexOf$($newMovedInfolets$$, $resizedInfolet$$) && $newMovedInfolets$$.push($resizedInfolet$$);
      }
    }
    $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !1;
    if (!$newMovedInfolets$$ || 1 > $newMovedInfolets$$.length) {
      if (!$oldMovedInfolets_ret$$47$$ || 1 > $oldMovedInfolets_ret$$47$$.length) {
        this.$_arMovedInfolets$ = null, this.$_handleTransitionEnd$(null), $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !0;
      }
    } else {
      this.$_arMovedInfolets$ = $newMovedInfolets$$;
    }
    $oldMovedInfolets_ret$$47$$ = null != $newMovedInfolets$$ && 0 < $newMovedInfolets$$.length;
    this.$isAnimationEnabled$() || $arInfoletsToResize$$1_calledHandleTransitionEnd$$ || this.$_handleTransitionEnd$(null);
    return $oldMovedInfolets_ret$$47$$;
  };
  $MasonryLayoutCommon$$.prototype.$_layout$ = function $$MasonryLayoutCommon$$$$$_layout$$() {
    var $elem$$114_style$$21$$ = this.$_elem$, $children$$11$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($children$$11$$);
    var $cellSize_oldSizeStyleClass$$ = this.$_cellSize$ = null;
    this.$_cols$ = 0;
    this.$_rows$ = 1;
    this.$_occupancyMap$ = null;
    var $arMovedInfolets$$ = [], $arOldPositions$$ = [], $arCols$$ = [], $rtl$$3$$ = this.$_rtl$, $insets$$ = $MasonryLayoutCommon$$.$_getElemInsets$($elem$$114_style$$21$$), $maxColSpan$$ = 0, $arTilePositions$$ = [];
    this.$_arTilePositions$ = $arTilePositions$$;
    for (var $i$$357$$ = 0;$i$$357$$ < $children$$11$$.length;$i$$357$$++) {
      var $child$$13$$ = $children$$11$$[$i$$357$$], $childSpan$$ = this.$_getTileSpanFunc$($child$$13$$);
      ($cellSize_oldSizeStyleClass$$ = $child$$13$$.$_afrOldSizeStyleClass$) && delete $child$$13$$.$_afrOldSizeStyleClass$;
      if (!this.$_cellSize$) {
        var $r$$1_spanForCellSize_tmpDiv$$ = $childSpan$$;
        $cellSize_oldSizeStyleClass$$ && ($r$$1_spanForCellSize_tmpDiv$$ = document.createElement("div"), $r$$1_spanForCellSize_tmpDiv$$.className = $cellSize_oldSizeStyleClass$$, $r$$1_spanForCellSize_tmpDiv$$ = this.$_getTileSpanFunc$($r$$1_spanForCellSize_tmpDiv$$));
        this.$_cellSize$ = this.$_calcCellSize$($child$$13$$, $r$$1_spanForCellSize_tmpDiv$$);
      }
      $cellSize_oldSizeStyleClass$$ = this.$_cellSize$;
      this.$_occupancyMap$ || (this.$_cols$ = Math.max(Math.floor(($elem$$114_style$$21$$.offsetWidth - $insets$$.paddingLeft - $insets$$.paddingRight - $insets$$.borderLeftWidth - $insets$$.borderRightWidth) / $cellSize_oldSizeStyleClass$$.$w$), 1), this.$_initOccupancyMap$(this.$_cols$, this.$_rows$), $maxColSpan$$ = this.$_cols$);
      $childSpan$$.colSpan > $maxColSpan$$ && ($maxColSpan$$ = $childSpan$$.colSpan);
      $childSpan$$.colSpan > this.$_cols$ && ($childSpan$$.colSpan = this.$_cols$);
      for (var $childStyle$$1_next$$4$$ = !1, $r$$1_spanForCellSize_tmpDiv$$ = 0;$r$$1_spanForCellSize_tmpDiv$$ < this.$_rows$;$r$$1_spanForCellSize_tmpDiv$$++) {
        for (var $c$$44$$ = 0;$c$$44$$ < this.$_cols$;$c$$44$$++) {
          if (this.$_fits$($c$$44$$, $r$$1_spanForCellSize_tmpDiv$$, $childSpan$$)) {
            var $childStyle$$1_next$$4$$ = $child$$13$$.style, $oldPosition$$ = {top:$childStyle$$1_next$$4$$.top};
            $rtl$$3$$ ? $oldPosition$$.right = $childStyle$$1_next$$4$$.right : $oldPosition$$.left = $childStyle$$1_next$$4$$.left;
            $arOldPositions$$.push($oldPosition$$);
            this.$_position$($child$$13$$, $c$$44$$, $r$$1_spanForCellSize_tmpDiv$$, $childSpan$$, $cellSize_oldSizeStyleClass$$, $insets$$);
            $rtl$$3$$ && $arCols$$.push($c$$44$$);
            $childStyle$$1_next$$4$$ = !0;
            $arTilePositions$$.push({$startCol$:$c$$44$$, $startRow$:$r$$1_spanForCellSize_tmpDiv$$, tile:$child$$13$$});
            break;
          }
        }
        if ($childStyle$$1_next$$4$$) {
          break;
        }
        $r$$1_spanForCellSize_tmpDiv$$ === this.$_rows$ - 1 && this.$_addRow$();
      }
    }
    $cellSize_oldSizeStyleClass$$ && ($elem$$114_style$$21$$ = this.$_sizeDiv$.style, $elem$$114_style$$21$$.width = $maxColSpan$$ * $cellSize_oldSizeStyleClass$$.$w$ + "px", $elem$$114_style$$21$$.height = this.$_rows$ * $cellSize_oldSizeStyleClass$$.$h$ + "px");
    for ($i$$357$$ = 0;$i$$357$$ < $children$$11$$.length;$i$$357$$++) {
      $child$$13$$ = $children$$11$$[$i$$357$$], $childStyle$$1_next$$4$$ = $child$$13$$.style, $oldPosition$$ = $arOldPositions$$[$i$$357$$], ($rtl$$3$$ && parseInt($childStyle$$1_next$$4$$.right, 10) !== parseInt($oldPosition$$.right, 10) || !$rtl$$3$$ && parseInt($childStyle$$1_next$$4$$.left, 10) !== parseInt($oldPosition$$.left, 10) || parseInt($childStyle$$1_next$$4$$.top, 10) !== parseInt($oldPosition$$.top, 10)) && $arMovedInfolets$$.push($child$$13$$);
    }
    1 > $arMovedInfolets$$.length && ($arMovedInfolets$$ = null);
    return $arMovedInfolets$$;
  };
  $MasonryLayoutCommon$$.prototype.$_reorderTilesForLayout$ = function $$MasonryLayoutCommon$$$$$_reorderTilesForLayout$$() {
    var $arTilePositions$$1$$ = this.$_arTilePositions$;
    this.$_arTilePositions$ = null;
    for (var $arTilePositions$$1$$ = $arTilePositions$$1$$.sort($MasonryLayoutCommon$$.$_compareTilePositions$), $children$$12$$ = this.$_getTileChildren$(), $i$$358$$ = 0;$i$$358$$ < $children$$12$$.length;$i$$358$$++) {
      var $child$$14_posTileIndex$$ = $children$$12$$[$i$$358$$], $posTile$$ = $arTilePositions$$1$$[$i$$358$$].tile;
      $child$$14_posTileIndex$$ != $posTile$$ && (this.$_subtreeDetachedFunc$($posTile$$), $child$$14_posTileIndex$$.parentNode.insertBefore($posTile$$, $child$$14_posTileIndex$$), this.$_subtreeAttachedFunc$($posTile$$), $child$$14_posTileIndex$$ = $MasonryLayoutCommon$$.$_arrayIndexOf$($children$$12$$, $posTile$$), $child$$14_posTileIndex$$ > $i$$358$$ && ($children$$12$$.splice($child$$14_posTileIndex$$, 1), $children$$12$$.splice($i$$358$$, 0, $posTile$$)));
    }
  };
  $MasonryLayoutCommon$$.prototype.$_initOccupancyMap$ = function $$MasonryLayoutCommon$$$$$_initOccupancyMap$$($cols$$1$$, $rows$$10$$) {
    for (var $occupancyMap$$ = this.$_occupancyMap$ = [], $row$$49$$ = 0;$row$$49$$ < $rows$$10$$;$row$$49$$++) {
      var $arCols$$1$$ = [];
      $occupancyMap$$.push($arCols$$1$$);
      for (var $col$$3$$ = 0;$col$$3$$ < $cols$$1$$;$col$$3$$++) {
        $arCols$$1$$[$col$$3$$] = !1;
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_addRow$ = function $$MasonryLayoutCommon$$$$$_addRow$$() {
    this.$_rows$++;
    var $arCols$$2$$ = [];
    this.$_occupancyMap$.push($arCols$$2$$);
    for (var $col$$4$$ = 0;$col$$4$$ < this.$_cols$;$col$$4$$++) {
      $arCols$$2$$[$col$$4$$] = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$_fits$ = function $$MasonryLayoutCommon$$$$$_fits$$($col$$5$$, $row$$50$$, $childSpan$$1_rowSpan$$) {
    var $colSpan$$ = $childSpan$$1_rowSpan$$.colSpan;
    $childSpan$$1_rowSpan$$ = $childSpan$$1_rowSpan$$.rowSpan;
    for (var $r$$2$$ = $row$$50$$;$r$$2$$ < $row$$50$$ + $childSpan$$1_rowSpan$$;$r$$2$$++) {
      $r$$2$$ >= this.$_rows$ && this.$_addRow$();
      for (var $c$$45$$ = $col$$5$$;$c$$45$$ < $col$$5$$ + $colSpan$$;$c$$45$$++) {
        if ($c$$45$$ >= this.$_cols$ || this.$_occupancyMap$[$r$$2$$][$c$$45$$]) {
          return!1;
        }
      }
    }
    return!0;
  };
  $MasonryLayoutCommon$$.prototype.$_position$ = function $$MasonryLayoutCommon$$$$$_position$$($child$$15_style$$22$$, $col$$6$$, $row$$51$$, $childSpan$$2_rowSpan$$1$$, $cellSize$$1$$, $insets$$1$$) {
    var $colSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.colSpan;
    $childSpan$$2_rowSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.rowSpan;
    for (var $occupancyMap$$2$$ = this.$_occupancyMap$, $r$$3$$ = $row$$51$$;$r$$3$$ < $row$$51$$ + $childSpan$$2_rowSpan$$1$$;$r$$3$$++) {
      for (var $c$$46$$ = $col$$6$$;$c$$46$$ < $col$$6$$ + $colSpan$$1$$;$c$$46$$++) {
        $occupancyMap$$2$$[$r$$3$$][$c$$46$$] = !0;
      }
    }
    $child$$15_style$$22$$ = $child$$15_style$$22$$.style;
    $child$$15_style$$22$$.top = $insets$$1$$.paddingTop + $row$$51$$ * $cellSize$$1$$.$h$ + "px";
    this.$_rtl$ ? $child$$15_style$$22$$.right = $insets$$1$$.paddingRight + $col$$6$$ * $cellSize$$1$$.$w$ + "px" : $child$$15_style$$22$$.left = $insets$$1$$.paddingLeft + $col$$6$$ * $cellSize$$1$$.$w$ + "px";
  };
  $MasonryLayoutCommon$$.prototype.$_addStyleClassToTiles$ = function $$MasonryLayoutCommon$$$$$_addStyleClassToTiles$$($styleClassName$$) {
    for (var $children$$13$$ = this.$_getTileChildren$(), $i$$359$$ = 0;$i$$359$$ < $children$$13$$.length;$i$$359$$++) {
      this.$_addStyleClassNameFunc$($children$$13$$[$i$$359$$], $styleClassName$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_removeStyleClassFromTiles$ = function $$MasonryLayoutCommon$$$$$_removeStyleClassFromTiles$$($styleClassName$$1$$) {
    for (var $children$$14$$ = this.$_getTileChildren$(), $i$$360$$ = 0;$i$$360$$ < $children$$14$$.length;$i$$360$$++) {
      this.$_removeStyleClassNameFunc$($children$$14$$[$i$$360$$], $styleClassName$$1$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_transitionStart$ = function $$MasonryLayoutCommon$$$$$_transitionStart$$($reorder$$1$$) {
    this.$_layoutTransition$ || (this.$_reorderTransitionStarted$ = $reorder$$1$$, this.$isAnimationEnabled$() && (this.$_addStyleClassToTiles$($reorder$$1$$ ? this.$_transitionMoveToFastStyleClass$ : this.$_transitionMoveToStyleClass$), this.$_addStyleClassNameFunc$(this.$_sizeDiv$, $reorder$$1$$ ? this.$_transitionComponentResizeToFastStyleClass$ : this.$_transitionComponentResizeToStyleClass$), $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), 
    $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$)), this.$_layoutTransition$ = !0);
  };
  $MasonryLayoutCommon$$.prototype.$_handleTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleTransitionEnd$$($event$$443_i$$361$$) {
    var $arInfoletsToResize$$2_doneTransitioning$$ = !0;
    if (this.$_arMovedInfolets$) {
      var $arMovedInfolets$$1$$ = this.$_arMovedInfolets$;
      if ($event$$443_i$$361$$) {
        var $target$$87$$ = $event$$443_i$$361$$.target;
        for ($event$$443_i$$361$$ = 0;$event$$443_i$$361$$ < $arMovedInfolets$$1$$.length;$event$$443_i$$361$$++) {
          if ($target$$87$$ === $arMovedInfolets$$1$$[$event$$443_i$$361$$]) {
            $arMovedInfolets$$1$$.splice($event$$443_i$$361$$, 1);
            break;
          }
        }
      } else {
        this.$isAnimationEnabled$() || ($arMovedInfolets$$1$$ = this.$_arMovedInfolets$ = []);
      }
      0 < $arMovedInfolets$$1$$.length && ($arInfoletsToResize$$2_doneTransitioning$$ = !1);
    }
    if ($arInfoletsToResize$$2_doneTransitioning$$) {
      if (this.$_arInfoletsToResize$ && ($arInfoletsToResize$$2_doneTransitioning$$ = this.$_arInfoletsToResize$, this.$_arInfoletsToResize$ = null, this.$isAnimationEnabled$())) {
        for ($event$$443_i$$361$$ = 0;$event$$443_i$$361$$ < $arInfoletsToResize$$2_doneTransitioning$$.length;$event$$443_i$$361$$ += 2) {
          this.$_removeStyleClassNameFunc$($arInfoletsToResize$$2_doneTransitioning$$[$event$$443_i$$361$$], this.$_transitionResizeToStyleClass$);
        }
      }
      this.$_reorderTransitionStarted$ ? (this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$)), this.$_reorderTransitionStarted$ = !1) : this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$));
      this.$isAnimationEnabled$() && ($MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$));
      this.$_showingInfolets$ = this.$_hidingInfolets$ = this.$_resizingInfolet$ = this.$_layoutTransition$ = !1;
      this.$_reorderTilesForLayout$();
      this.$_layoutOnEndFunc$ && this.$_layoutOnEndFunc$();
      if (this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$) {
        if (this.$isAnimationEnabled$()) {
          var $self$$154$$ = this;
          this.$_showTilesTimeout$ = setTimeout(function() {
            $self$$154$$.$_showTiles$();
          }, 0);
        } else {
          this.$_showTiles$();
        }
      } else {
        this.$_layoutPhase$ || this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$();
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_calcCellSize$ = function $$MasonryLayoutCommon$$$$$_calcCellSize$$($child$$16$$, $childSpan$$3$$) {
    var $childSize$$ = $MasonryLayoutCommon$$.$_getElemSize$($child$$16$$);
    return{$w$:$childSize$$.$w$ / $childSpan$$3$$.colSpan, $h$:$childSize$$.$h$ / $childSpan$$3$$.rowSpan};
  };
  $MasonryLayoutCommon$$.prototype.$_hideTiles$ = function $$MasonryLayoutCommon$$$$$_hideTiles$$() {
    this.$_hideTilesTimeout$ && (clearTimeout(this.$_hideTilesTimeout$), this.$_hideTilesTimeout$ = null);
    this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$();
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_HIDE$;
    if (this.$_arInfoletsToHide$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToHide$$1$$ = this.$_arInfoletsToHide$, $i$$362$$ = 0;$i$$362$$ < $arInfoletsToHide$$1$$.length;$i$$362$$++) {
        var $infolet$$4$$ = $arInfoletsToHide$$1$$[$i$$362$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$4$$, "transitionend", this.$_handleHideTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$4$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$4$$, this.$_transitionHideFromStyleClass$);
      }
      var $self$$155$$ = this;
      this.$_hideTilesInternalTimeout$ = setTimeout(function() {
        for (var $i$$363$$ = 0;$i$$363$$ < $arInfoletsToHide$$1$$.length;$i$$363$$++) {
          var $infolet$$5$$ = $arInfoletsToHide$$1$$[$i$$363$$];
          $self$$155$$.$_removeStyleClassNameFunc$($infolet$$5$$, $self$$155$$.$_transitionHideFromStyleClass$);
          $self$$155$$.$_addStyleClassNameFunc$($infolet$$5$$, $self$$155$$.$_transitionHideToStyleClass$);
        }
      }, 0);
    } else {
      this.$_handleHideTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleHideTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleHideTransitionEnd$$($event$$444_infolet$$6$$) {
    this.$_hideTilesInternalTimeout$ && (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null);
    if ($event$$444_infolet$$6$$) {
      $event$$444_infolet$$6$$.preventDefault();
      $event$$444_infolet$$6$$.stopPropagation();
      $event$$444_infolet$$6$$ = $event$$444_infolet$$6$$.target;
      this.$_removeStyleClassNameFunc$($event$$444_infolet$$6$$, this.$_transitionHideToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$444_infolet$$6$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$444_infolet$$6$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      var $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = this.$_arInfoletsToHide$;
      if ($arInfoletsToHide$$2_newSizeStyleClass_style$$23$$) {
        for (var $i$$364$$ = 0;$i$$364$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.length;$i$$364$$++) {
          var $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$[$i$$364$$];
          if ($oldSizeStyleClass$$1_tmpInfolet$$ === $event$$444_infolet$$6$$) {
            $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.splice($i$$364$$, 1);
            this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []);
            var $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
            $arFireHideOnEnd_arInfoletsToResize$$3$$.push($event$$444_infolet$$6$$);
            break;
          }
        }
        1 > $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.length && (this.$_arInfoletsToHide$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = this.$_arInfoletsToHide$)) {
        for ($i$$364$$ = 0;$i$$364$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.length;$i$$364$$++) {
          $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$[$i$$364$$], this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []), $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$, $arFireHideOnEnd_arInfoletsToResize$$3$$.push($oldSizeStyleClass$$1_tmpInfolet$$);
        }
        this.$_arInfoletsToHide$ = null;
      }
    }
    if (!this.$_arInfoletsToHide$) {
      if (this.$_arFireHideOnEnd$) {
        $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
        for ($i$$364$$ = 0;$i$$364$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$364$$++) {
          $event$$444_infolet$$6$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$364$$], this.$isAnimationEnabled$() && this.$_removeStyleClassNameFunc$($event$$444_infolet$$6$$, this.$_transitionHideToStyleClass$), $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = $event$$444_infolet$$6$$.style, this.$_rtl$ ? $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.right = "" : $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.left = "", $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.top = "", 
          this.$_hideTileOnEndFunc$ && this.$_hideTileOnEndFunc$($event$$444_infolet$$6$$);
        }
        this.$_arFireHideOnEnd$ = null;
      }
      this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_LAYOUT$;
      this.$_transitionStart$(!1);
      if (this.$_arInfoletsToResize$) {
        for ($arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arInfoletsToResize$, $i$$364$$ = 0;$i$$364$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$364$$ += 2) {
          $event$$444_infolet$$6$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$364$$], $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$364$$ + 1], $oldSizeStyleClass$$1_tmpInfolet$$ = this.$_getSizeStyleClassNameFunc$($event$$444_infolet$$6$$), this.$_removeStyleClassNameFunc$($event$$444_infolet$$6$$, $oldSizeStyleClass$$1_tmpInfolet$$), this.$_addStyleClassNameFunc$($event$$444_infolet$$6$$, $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$), 
          this.$isAnimationEnabled$() && (this.$_addStyleClassNameFunc$($event$$444_infolet$$6$$, this.$_transitionResizeToStyleClass$), $event$$444_infolet$$6$$.$_afrOldSizeStyleClass$ = $oldSizeStyleClass$$1_tmpInfolet$$);
        }
      }
      this.$_transitionLayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$_showTiles$ = function $$MasonryLayoutCommon$$$$$_showTiles$$() {
    this.$_showTilesTimeout$ && (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null);
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_SHOW$;
    if (this.$_arInfoletsToShow$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$365$$ = 0;$i$$365$$ < $arInfoletsToShow$$1$$.length;$i$$365$$++) {
        var $infolet$$7$$ = $arInfoletsToShow$$1$$[$i$$365$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$7$$, "transitionend", this.$_handleShowTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$7$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$7$$, this.$_transitionShowToStyleClass$);
        this.$_removeStyleClassNameFunc$($infolet$$7$$, this.$_transitionShowFromStyleClass$);
      }
    } else {
      if (this.$_arInfoletsToShow$) {
        for ($arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$365$$ = 0;$i$$365$$ < $arInfoletsToShow$$1$$.length;$i$$365$$++) {
          $infolet$$7$$ = $arInfoletsToShow$$1$$[$i$$365$$], this.$_removeStyleClassNameFunc$($infolet$$7$$, this.$_transitionShowFromStyleClass$);
        }
      }
      this.$_handleShowTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleShowTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleShowTransitionEnd$$($event$$445_infolet$$8$$) {
    if ($event$$445_infolet$$8$$) {
      $event$$445_infolet$$8$$.preventDefault();
      $event$$445_infolet$$8$$.stopPropagation();
      $event$$445_infolet$$8$$ = $event$$445_infolet$$8$$.target;
      this.$_removeStyleClassNameFunc$($event$$445_infolet$$8$$, this.$_transitionShowToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$445_infolet$$8$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$445_infolet$$8$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
      var $arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$;
      if ($arInfoletsToShow$$2$$) {
        for (var $i$$366$$ = 0;$i$$366$$ < $arInfoletsToShow$$2$$.length;$i$$366$$++) {
          var $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$366$$];
          if ($tmpInfolet$$1$$ === $event$$445_infolet$$8$$) {
            $arInfoletsToShow$$2$$.splice($i$$366$$, 1);
            this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($event$$445_infolet$$8$$);
            break;
          }
        }
        1 > $arInfoletsToShow$$2$$.length && (this.$_arInfoletsToShow$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$)) {
        for ($i$$366$$ = 0;$i$$366$$ < $arInfoletsToShow$$2$$.length;$i$$366$$++) {
          $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$366$$], this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($tmpInfolet$$1$$);
        }
        this.$_arInfoletsToShow$ = null;
      }
    }
    this.$_arInfoletsToShow$ || (this.$_layoutPhase$ = null, this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$(), this.$_queuedRelayout$ && (this.$_queuedRelayout$ = !1, this.$_queueRelayout$()));
  };
  $MasonryLayoutCommon$$.$_PHASE_HIDE$ = 1;
  $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ = 2;
  $MasonryLayoutCommon$$.$_PHASE_SHOW$ = 3;
  (function() {
    function $_getNextElement$$($currElem$$1_elem$$146_nextElem$$2$$) {
      for (;$currElem$$1_elem$$146_nextElem$$2$$;) {
        $currElem$$1_elem$$146_nextElem$$2$$ = $currElem$$1_elem$$146_nextElem$$2$$.nextSibling;
        var $bVisible$$ = !0;
        if ($currElem$$1_elem$$146_nextElem$$2$$) {
          var $style$$30$$ = $currElem$$1_elem$$146_nextElem$$2$$.style;
          !$style$$30$$ || $style$$30$$.visibility !== $_HIDDEN$$1$$ && $style$$30$$.display !== $_NONE$$1$$ || ($bVisible$$ = !1);
        }
        if ($currElem$$1_elem$$146_nextElem$$2$$ && 1 === $currElem$$1_elem$$146_nextElem$$2$$.nodeType && $bVisible$$) {
          return $currElem$$1_elem$$146_nextElem$$2$$;
        }
      }
      return null;
    }
    function $_findContainingTile$$($elem$$145$$, $rootElem$$) {
      for (var $currElem$$ = $elem$$145$$;$currElem$$;) {
        var $parentElem$$5_style$$29$$ = $currElem$$.style;
        if ($parentElem$$5_style$$29$$ && ($parentElem$$5_style$$29$$.visibility === $_HIDDEN$$1$$ || $parentElem$$5_style$$29$$.display === $_NONE$$1$$)) {
          break;
        }
        $parentElem$$5_style$$29$$ = $currElem$$.parentNode;
        if ($parentElem$$5_style$$29$$ === $rootElem$$) {
          return $currElem$$;
        }
        $currElem$$ = $parentElem$$5_style$$29$$;
      }
      return null;
    }
    function $_compareTilesOriginalOrder$$($tile1$$, $tile2$$) {
      return $tile2$$.$_jetDataMasonryOriginalOrder$ < $tile1$$.$_jetDataMasonryOriginalOrder$ ? 1 : $tile1$$.$_jetDataMasonryOriginalOrder$ < $tile2$$.$_jetDataMasonryOriginalOrder$ ? -1 : 0;
    }
    function $_sortTilesOriginalOrder$$($arTiles$$3$$) {
      $arTiles$$3$$ && $arTiles$$3$$.sort($_compareTilesOriginalOrder$$);
      return $arTiles$$3$$;
    }
    function $_getTileSpan$$($elem$$144_tile$$11$$) {
      var $span$$1$$ = null;
      $elem$$144_tile$$11$$ = $$$$35$$($elem$$144_tile$$11$$);
      $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-1x1") ? $span$$1$$ = {colSpan:1, rowSpan:1} : $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-2x1") ? $span$$1$$ = {colSpan:2, rowSpan:1} : $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-3x1") ? $span$$1$$ = {colSpan:3, rowSpan:1} : $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-1x2") ? $span$$1$$ = {colSpan:1, rowSpan:2} : $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-1x3") ? $span$$1$$ = {colSpan:1, rowSpan:3} : 
      $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-2x2") ? $span$$1$$ = {colSpan:2, rowSpan:2} : $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-2x3") ? $span$$1$$ = {colSpan:2, rowSpan:3} : $elem$$144_tile$$11$$.hasClass("oj-masonrylayout-tile-3x2") && ($span$$1$$ = {colSpan:3, rowSpan:2});
      return $span$$1$$;
    }
    function $_getSizeStyleClassName$$($elem$$143_tile$$10$$) {
      var $str$$22$$ = null;
      $elem$$143_tile$$10$$ = $$$$35$$($elem$$143_tile$$10$$);
      $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-1x1") ? $str$$22$$ = "oj-masonrylayout-tile-1x1" : $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-2x1") ? $str$$22$$ = "oj-masonrylayout-tile-2x1" : $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-3x1") ? $str$$22$$ = "oj-masonrylayout-tile-3x1" : $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-1x2") ? $str$$22$$ = "oj-masonrylayout-tile-1x2" : $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-1x3") ? $str$$22$$ = 
      "oj-masonrylayout-tile-1x3" : $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-2x2") ? $str$$22$$ = "oj-masonrylayout-tile-2x2" : $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-2x3") ? $str$$22$$ = "oj-masonrylayout-tile-2x3" : $elem$$143_tile$$10$$.hasClass("oj-masonrylayout-tile-3x2") && ($str$$22$$ = "oj-masonrylayout-tile-3x2");
      return $str$$22$$;
    }
    function $_removeStyleClassName$$($elem$$142$$, $styleClass$$8$$) {
      $$$$35$$($elem$$142$$).removeClass($styleClass$$8$$);
    }
    function $_addStyleClassName$$($elem$$141$$, $styleClass$$7$$) {
      $$$$35$$($elem$$141$$).addClass($styleClass$$7$$);
    }
    $oj$$38$$.$__registerWidget$("oj.ojMasonryLayout", $$$$35$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{reorderHandle:null, beforeInsert:null, insert:null, beforeRemove:null, remove:null, beforeResize:null, resize:null, beforeReorder:null, reorder:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-masonrylayout oj-component");
      this.options.disabled && $oj$$38$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$2$$);
      this.$reorderHandleEventNamespace$ = this.eventNamespace + "ReorderHandle";
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemCut$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$2$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$2$$ && this.$_destroyMLCommon$();
      this.$_setup$($bRecreate$$2$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyContextMenuGesture$:function($menu$$15$$, $event$$446$$, $eventType$$48$$) {
      this.$_prepareContextMenuBeforeOpen$($event$$446$$);
      this.$_OpenContextMenu$($event$$446$$, $eventType$$48$$, {launcher:$$$$35$$($event$$446$$.target).closest(":tabbable")});
    }, $_setup$:function($isInit$$2$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$38$$.$DomUtils$.$isTouchSupported$();
        var $elem$$116_oldIsInit$$2$$ = this.element, $options$$346$$ = this.options;
        if ($isInit$$2$$) {
          var $self$$156$$ = this;
          this.$_showTileOnEndFunc$ = function $this$$_showTileOnEndFunc$$($elem$$117$$) {
            $self$$156$$.$_showTileOnEnd$($elem$$117$$);
          };
          this.$_hideTileOnEndFunc$ = function $this$$_hideTileOnEndFunc$$($elem$$118$$) {
            $self$$156$$.$_hideTileOnEnd$($elem$$118$$);
          };
          this.$_layoutOnEndFunc$ = function $this$$_layoutOnEndFunc$$() {
            $self$$156$$.$_layoutOnEnd$();
          };
          this.$_layoutCycleOnStartFunc$ = function $this$$_layoutCycleOnStartFunc$$() {
            $self$$156$$.$_layoutCycleOnStart$();
          };
          this.$_layoutCycleOnEndFunc$ = function $this$$_layoutCycleOnEndFunc$$() {
            $self$$156$$.$_layoutCycleOnEnd$();
          };
          if (!this.$_mlCommon$) {
            var $selectors$$9$$ = {};
            $selectors$$9$$.$tiles$ = $_TILE_SELECTOR$$;
            var $styles$$2$$ = {$transitionComponentResizeToStyleClass$:"oj-masonrylayout-transition-resize-to", $transitionComponentResizeToFastStyleClass$:"oj-masonrylayout-transition-resize-to-fast", $transitionMoveToStyleClass$:"oj-masonrylayout-tile-transition-move-to", $transitionMoveToFastStyleClass$:"oj-masonrylayout-tile-transition-move-to-fast", $transitionHideFromStyleClass$:"oj-masonrylayout-tile-transition-hide-from", $transitionHideToStyleClass$:"oj-masonrylayout-tile-transition-hide-to"};
            $styles$$2$$.$transitionShowFromStyleClass$ = $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$;
            $styles$$2$$.$transitionShowToStyleClass$ = "oj-masonrylayout-tile-transition-show-to";
            $styles$$2$$.$transitionResizeToStyleClass$ = "oj-masonrylayout-tile-transition-resize-to";
            var $callbackInfo$$3$$ = {};
            $callbackInfo$$3$$.$addStyleClassName$ = $_addStyleClassName$$;
            $callbackInfo$$3$$.$removeStyleClassName$ = $_removeStyleClassName$$;
            $callbackInfo$$3$$.$getSizeStyleClassName$ = $_getSizeStyleClassName$$;
            $callbackInfo$$3$$.$getTileSpan$ = $_getTileSpan$$;
            $callbackInfo$$3$$.$showTileOnEndFunc$ = this.$_showTileOnEndFunc$;
            $callbackInfo$$3$$.$hideTileOnEndFunc$ = this.$_hideTileOnEndFunc$;
            $callbackInfo$$3$$.$layoutOnEndFunc$ = this.$_layoutOnEndFunc$;
            $callbackInfo$$3$$.$layoutCycleOnStartFunc$ = this.$_layoutCycleOnStartFunc$;
            $callbackInfo$$3$$.$layoutCycleOnEndFunc$ = this.$_layoutCycleOnEndFunc$;
            $callbackInfo$$3$$.$sortTilesOriginalOrderFunc$ = $_sortTilesOriginalOrder$$;
            $callbackInfo$$3$$.$subtreeAttached$ = $oj$$38$$.Components.$subtreeAttached$;
            $callbackInfo$$3$$.$subtreeDetached$ = $oj$$38$$.Components.$subtreeDetached$;
            this.$_saveTilesOriginalOrder$();
            this.$_mlCommon$ = new $MasonryLayoutCommon$$($elem$$116_oldIsInit$$2$$[0], this.$_bRTL$, "enabled" === $oj$$38$$.$Config$.$getAutomationMode$(), $selectors$$9$$, $styles$$2$$, $callbackInfo$$3$$);
          }
          this.$_handleDragStartFunc$ = function $this$$_handleDragStartFunc$$($event$$447$$) {
            $self$$156$$.$_handleDragStart$($event$$447$$);
          };
          this.$_handleDragEnterFunc$ = function $this$$_handleDragEnterFunc$$($event$$448$$) {
            $self$$156$$.$_handleDragEnter$($event$$448$$);
          };
          this.$_handleDragOverFunc$ = function $this$$_handleDragOverFunc$$($event$$449$$) {
            $self$$156$$.$_handleDragOver$($event$$449$$);
          };
          this.$_handleDragLeaveFunc$ = function $this$$_handleDragLeaveFunc$$($event$$450$$) {
            $self$$156$$.$_handleDragLeave$($event$$450$$);
          };
          this.$_handleDragEndFunc$ = function $this$$_handleDragEndFunc$$($event$$451$$) {
            $self$$156$$.$_handleDragEnd$($event$$451$$);
          };
          this.$_handleDropFunc$ = function $this$$_handleDropFunc$$($event$$452$$) {
            $self$$156$$.$_handleDrop$($event$$452$$);
          };
          $options$$346$$.reorderHandle && this.$_setupReorderHandles$();
        }
        this.$_mlCommon$.$setup$($isInit$$2$$);
        $isInit$$2$$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$156$$.$_handleResize$();
        }, $oj$$38$$.$DomUtils$.$addResizeListener$($elem$$116_oldIsInit$$2$$[0], this.$_handleResizeFunc$));
      } else {
        $elem$$116_oldIsInit$$2$$ = !1, this.$_needsSetup$ && ($elem$$116_oldIsInit$$2$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit$$2$$ || $elem$$116_oldIsInit$$2$$];
      }
    }, _destroy:function() {
      this.$_clearMenu$();
      var $elem$$119$$ = this.element;
      $oj$$38$$.$DomUtils$.$removeResizeListener$($elem$$119$$[0], this.$_handleResizeFunc$);
      this.$_handleResizeFunc$ = null;
      this.$_restoreTilesOriginalOrder$();
      for (var $children$$15$$ = this.$_getTileElements$(), $numChildren$$ = $children$$15$$.length, $i$$367$$ = 0;$i$$367$$ < $numChildren$$;$i$$367$$++) {
        delete $children$$15$$[$i$$367$$].$_jetDataMasonryOriginalOrder$;
      }
      this.$_destroyMLCommon$();
      $elem$$119$$.removeClass("oj-masonrylayout oj-component");
      this.options.reorderHandle && this.$_tearDownReorderHandles$();
      this.$_arTilesToInsert$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_handleDropFunc$ = this.$_handleDragEndFunc$ = this.$_handleDragLeaveFunc$ = this.$_handleDragOverFunc$ = this.$_handleDragEnterFunc$ = this.$_handleDragStartFunc$ = null;
      this._super();
    }, _setOption:function($key$$147$$, $value$$258$$, $flags$$40$$) {
      var $bReorderHandle$$ = !1;
      switch($key$$147$$) {
        case "reorderHandle":
          this.$_tearDownReorderHandles$();
          $bReorderHandle$$ = !0;
          break;
        case "disabled":
          $oj$$38$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$2$$);
          break;
        case "contextMenu":
          $oj$$38$$.$DomUtils$.$isTouchSupported$() || (this.$_clearMenu$(), $value$$258$$ && this.$_initMenu$($value$$258$$));
      }
      this._super($key$$147$$, $value$$258$$, $flags$$40$$);
      $bReorderHandle$$ && $value$$258$$ && this.$_setupReorderHandles$();
    }, resizeTile:function($selector$$28$$, $sizeStyleClass$$1$$) {
      var $mlCommon$$1$$ = this.$_mlCommon$;
      $mlCommon$$1$$.$isInLayoutCycle$() && $mlCommon$$1$$.$finishLayoutCycle$();
      var $jqElem$$1$$ = $$$$35$$($selector$$28$$), $elem$$121$$ = $jqElem$$1$$[0], $prevSizeStyleClass$$ = $_getSizeStyleClassName$$($elem$$121$$);
      if ($sizeStyleClass$$1$$ == $prevSizeStyleClass$$) {
        throw Error("JET MasonryLayout: Unable to resize child " + $selector$$28$$ + " to style class " + $sizeStyleClass$$1$$ + " because " + $sizeStyleClass$$1$$ + " is already applied.");
      }
      !1 !== this._trigger("beforeResize", null, {tile:$jqElem$$1$$, previousSizeStyleClass:$prevSizeStyleClass$$, sizeStyleClass:$sizeStyleClass$$1$$}) && (this.$_arResizingTiles$ || (this.$_arResizingTiles$ = []), this.$_arResizingTiles$.push($elem$$121$$, $prevSizeStyleClass$$, $sizeStyleClass$$1$$), $mlCommon$$1$$.resizeTile($selector$$28$$, $sizeStyleClass$$1$$));
    }, insertTile:function($selector$$29$$, $index$$227$$) {
      var $mlCommon$$2$$ = this.$_mlCommon$;
      $mlCommon$$2$$.$isInLayoutCycle$() && $mlCommon$$2$$.$finishLayoutCycle$();
      isNaN($index$$227$$) && ($index$$227$$ = -1);
      var $jqElem$$2_style$$24$$ = $$$$35$$($selector$$29$$), $elem$$122$$ = $jqElem$$2_style$$24$$[0];
      !1 !== this._trigger("beforeInsert", null, {tile:$jqElem$$2_style$$24$$, index:$index$$227$$}) && ($elem$$122$$.$_jetDataTileInsertIndex$ = $index$$227$$, $mlCommon$$2$$.$isAnimationEnabled$() && $jqElem$$2_style$$24$$.addClass($_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$), $jqElem$$2_style$$24$$ = $elem$$122$$.style, $jqElem$$2_style$$24$$.top = "-1px", this.$_bRTL$ ? $jqElem$$2_style$$24$$.right = "-1px" : $jqElem$$2_style$$24$$.left = "-1px", this.$_insertTileOriginalOrder$($elem$$122$$, 
      $index$$227$$), $mlCommon$$2$$.$insertTileDomElem$($elem$$122$$, $index$$227$$), $oj$$38$$.Components.$subtreeAttached$($elem$$122$$), this.$_arTilesToInsert$ || (this.$_arTilesToInsert$ = []), this.$_arTilesToInsert$.push($selector$$29$$));
    }, removeTile:function($selector$$30$$) {
      var $mlCommon$$3$$ = this.$_mlCommon$;
      $mlCommon$$3$$.$isInLayoutCycle$() && $mlCommon$$3$$.$finishLayoutCycle$();
      var $jqInfolet$$ = $$$$35$$($selector$$30$$), $index$$228_infolet$$9$$ = $jqInfolet$$[0];
      if ($oj$$38$$.$FocusUtils$.$containsFocus$($index$$228_infolet$$9$$)) {
        var $children$$16$$ = this.$_getTileElements$(!0), $index$$228_infolet$$9$$ = $children$$16$$.indexOf($index$$228_infolet$$9$$);
        0 < $index$$228_infolet$$9$$ && (this.$_deletingTileWithFocusPrev$ = $children$$16$$[$index$$228_infolet$$9$$ - 1]);
      }
      !1 !== this._trigger("beforeRemove", null, {tile:$jqInfolet$$}) && $mlCommon$$3$$.$hideTile$($selector$$30$$);
    }, $_handleResize$:function() {
      this.$_bDragging$ || this.$_inLayoutCycle$ || this.$_mlCommon$.$resizeNotify$();
    }, $_showTileOnEnd$:function($elem$$123_eventData$$19$$) {
      var $index$$229$$ = $elem$$123_eventData$$19$$.$_jetDataTileInsertIndex$;
      delete $elem$$123_eventData$$19$$.$_jetDataTileInsertIndex$;
      $elem$$123_eventData$$19$$ = {tile:$$$$35$$($elem$$123_eventData$$19$$), index:$index$$229$$};
      this._trigger("insert", null, $elem$$123_eventData$$19$$);
    }, $_hideTileOnEnd$:function($elem$$124_eventData$$20$$) {
      $oj$$38$$.Components.$subtreeDetached$($elem$$124_eventData$$20$$);
      $elem$$124_eventData$$20$$.parentNode.removeChild($elem$$124_eventData$$20$$);
      this.$_removeTileOriginalOrder$($elem$$124_eventData$$20$$);
      $elem$$124_eventData$$20$$ = {tile:$$$$35$$($elem$$124_eventData$$20$$)};
      this._trigger("remove", null, $elem$$124_eventData$$20$$);
    }, $_layoutOnEnd$:function() {
      if (this.$_arTilesToInsert$) {
        for (var $arResizingTiles$$1_mlCommon$$5$$ = this.$_mlCommon$, $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$ = this.$_arTilesToInsert$, $i$$368$$ = 0;$i$$368$$ < $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$.length;$i$$368$$++) {
          $arResizingTiles$$1_mlCommon$$5$$.$showTile$($arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$[$i$$368$$]);
        }
        this.$_arTilesToInsert$ = null;
      }
      if (this.$_arResizingTiles$) {
        $arResizingTiles$$1_mlCommon$$5$$ = this.$_arResizingTiles$;
        for ($i$$368$$ = 0;$i$$368$$ < $arResizingTiles$$1_mlCommon$$5$$.length;$i$$368$$ += 3) {
          var $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$368$$ + 1], $sizeStyleClass$$2$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$368$$ + 2], $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$ = {tile:$$$$35$$($arResizingTiles$$1_mlCommon$$5$$[$i$$368$$]), previousSizeStyleClass:$arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$, sizeStyleClass:$sizeStyleClass$$2$$};
          this._trigger("resize", null, $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$);
        }
        this.$_arResizingTiles$ = null;
      }
      this.$_bDragging$ && (this.$_bDragMoveTransition$ ? this.$_handleDragMoveTransitionEnd$() : this.$_bDragEndTransition$ && this.$_handleDragEndTransitionEnd$());
    }, $_layoutCycleOnStart$:function() {
      this.$_inLayoutCycle$ = !0;
      this.$_layoutStartActiveDomElem$ = null;
      var $activeDomElem$$ = document.activeElement;
      $activeDomElem$$ && $oj$$38$$.$DomUtils$.$isAncestor$(this.element[0], $activeDomElem$$) && (this.$_layoutStartActiveDomElem$ = $activeDomElem$$);
    }, $_layoutCycleOnEnd$:function() {
      this.$_inLayoutCycle$ = !1;
      var $children$$17_elem$$126$$ = this.element[0];
      if (this.$_layoutStartActiveDomElem$) {
        var $layoutStartActiveDomElem_tile$$ = this.$_layoutStartActiveDomElem$;
        this.$_layoutStartActiveDomElem$ = null;
        if (this.$_deletingTileWithFocusPrev$) {
          if ($layoutStartActiveDomElem_tile$$ = this.$_deletingTileWithFocusPrev$, this.$_deletingTileWithFocusPrev$ = null, $layoutStartActiveDomElem_tile$$ && $oj$$38$$.$DomUtils$.$isAncestor$($children$$17_elem$$126$$, $layoutStartActiveDomElem_tile$$)) {
            var $children$$17_elem$$126$$ = this.$_getTileElements$($children$$17_elem$$126$$, !0), $index$$230$$ = $children$$17_elem$$126$$.indexOf($layoutStartActiveDomElem_tile$$);
            0 <= $index$$230$$ && $index$$230$$ < $children$$17_elem$$126$$.length - 1 ? $oj$$38$$.$FocusUtils$.$focusFirstTabStop$($children$$17_elem$$126$$[$index$$230$$ + 1]) : $oj$$38$$.$FocusUtils$.$focusFirstTabStop$($layoutStartActiveDomElem_tile$$);
          }
        } else {
          $oj$$38$$.$DomUtils$.$isAncestor$($children$$17_elem$$126$$, $layoutStartActiveDomElem_tile$$) ? $oj$$38$$.$FocusUtils$.$focusElement$($layoutStartActiveDomElem_tile$$) : $oj$$38$$.$FocusUtils$.$focusFirstTabStop$($children$$17_elem$$126$$);
        }
      }
    }, $_destroyMLCommon$:function() {
      var $mlCommon$$6$$ = this.$_mlCommon$;
      $mlCommon$$6$$ && $mlCommon$$6$$.destroy();
      this.$_mlCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$5$$ = document.createElement("div"), $elem$$127_style$$25$$ = $div$$5$$.style;
      $elem$$127_style$$25$$.width = "10px";
      $elem$$127_style$$25$$.height = "10px";
      $elem$$127_style$$25$$ = this.element[0];
      $elem$$127_style$$25$$.appendChild($div$$5$$);
      var $bCanCalcSizes$$2$$ = !1;
      try {
        $bCanCalcSizes$$2$$ = 0 < $div$$5$$.offsetWidth && 0 < $div$$5$$.offsetHeight;
      } catch ($e$$105$$) {
      }
      $elem$$127_style$$25$$.removeChild($div$$5$$);
      return $bCanCalcSizes$$2$$;
    }, $_getTileElements$:function($excludeDropSite$$) {
      for (var $children$$18$$ = this.element.children($_TILE_SELECTOR$$), $numChildren$$1$$ = $children$$18$$.length, $arChildren$$2$$ = [], $i$$369$$ = 0;$i$$369$$ < $numChildren$$1$$;$i$$369$$++) {
        var $child$$18$$ = $children$$18$$[$i$$369$$];
        if (!$excludeDropSite$$ || $excludeDropSite$$ && $child$$18$$ !== this.$_dropSite$) {
          var $style$$26$$ = $child$$18$$.style;
          $style$$26$$.visibility !== $_HIDDEN$$1$$ && $style$$26$$.display !== $_NONE$$1$$ && $arChildren$$2$$.push($child$$18$$);
        }
      }
      return $arChildren$$2$$;
    }, $_saveTilesOriginalOrder$:function() {
      var $arTiles$$ = this.$_getTileElements$();
      if ($arTiles$$) {
        for (var $i$$370$$ = 0;$i$$370$$ < $arTiles$$.length;$i$$370$$++) {
          var $tile$$1$$ = $arTiles$$[$i$$370$$];
          $tile$$1$$.$_jetDataMasonryOriginalOrder$ || ($tile$$1$$.$_jetDataMasonryOriginalOrder$ = $i$$370$$ + 1);
        }
      }
    }, $_restoreTilesOriginalOrder$:function() {
      var $children$$19$$ = this.$_getTileElements$(), $sortedChildren$$ = this.$_getTileElements$();
      $_sortTilesOriginalOrder$$($sortedChildren$$);
      for (var $i$$371$$ = 0;$i$$371$$ < $children$$19$$.length;$i$$371$$++) {
        var $child$$19_sortedChildIndex$$ = $children$$19$$[$i$$371$$], $sortedChild$$ = $sortedChildren$$[$i$$371$$];
        $child$$19_sortedChildIndex$$ != $sortedChild$$ && ($oj$$38$$.Components.$subtreeDetached$($sortedChild$$), $child$$19_sortedChildIndex$$.parentNode.insertBefore($sortedChild$$, $child$$19_sortedChildIndex$$), $oj$$38$$.Components.$subtreeAttached$($sortedChild$$), $child$$19_sortedChildIndex$$ = $children$$19$$.indexOf($sortedChild$$), $child$$19_sortedChildIndex$$ > $i$$371$$ && ($children$$19$$.splice($child$$19_sortedChildIndex$$, 1), $children$$19$$.splice($i$$371$$, 0, $sortedChild$$)));
      }
    }, $_insertTileOriginalOrder$:function($insertedTile$$, $index$$231$$) {
      var $arTiles$$1$$ = this.$_getTileElements$();
      0 > $index$$231$$ && ($index$$231$$ = $arTiles$$1$$.length);
      if ($arTiles$$1$$) {
        for (var $i$$372$$ = 0;$i$$372$$ < $arTiles$$1$$.length;$i$$372$$++) {
          var $tile$$2$$ = $arTiles$$1$$[$i$$372$$];
          $tile$$2$$.$_jetDataMasonryOriginalOrder$ && $tile$$2$$.$_jetDataMasonryOriginalOrder$ >= $index$$231$$ + 1 && $tile$$2$$.$_jetDataMasonryOriginalOrder$++;
        }
      }
      $insertedTile$$.$_jetDataMasonryOriginalOrder$ = $index$$231$$ + 1;
    }, $_removeTileOriginalOrder$:function($removedTile$$) {
      if ($removedTile$$.$_jetDataMasonryOriginalOrder$) {
        var $arTiles$$2$$ = this.$_getTileElements$();
        if ($arTiles$$2$$) {
          for (var $i$$373$$ = 0;$i$$373$$ < $arTiles$$2$$.length;$i$$373$$++) {
            var $tile$$3$$ = $arTiles$$2$$[$i$$373$$];
            $tile$$3$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$ > $removedTile$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$--;
          }
        }
        delete $removedTile$$.$_jetDataMasonryOriginalOrder$;
      }
    }, $_initMenu$:function($newVal$$) {
      var $$m_menu$$16$$ = null, $dm_t$$1$$ = null;
      $newVal$$ || this.options.contextMenu || ($$m_menu$$16$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m_menu$$16$$);
      if ($newVal$$ || this.options.contextMenu) {
        $$m_menu$$16$$ = $newVal$$ || this.options.contextMenu;
        $dm_t$$1$$ = $$$$35$$.type($$m_menu$$16$$);
        if ("function" == $dm_t$$1$$) {
          try {
            $$m_menu$$16$$ = $$m_menu$$16$$();
          } catch ($e$$106$$) {
            $$m_menu$$16$$ = null;
          }
          $dm_t$$1$$ = $$$$35$$.type($$m_menu$$16$$);
        }
        if ("string" === $dm_t$$1$$) {
          if ($$m_menu$$16$$ = $$$$35$$($$m_menu$$16$$)) {
            $$m_menu$$16$$.css("display", $_NONE$$1$$);
            $dm_t$$1$$ = this.$_menu$;
            if (!$dm_t$$1$$) {
              return;
            }
            $dm_t$$1$$.$$container$ = $$m_menu$$16$$;
            $dm_t$$1$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderHandle) {
        var $$menuContainer$$ = this.$_menu$.$$container$, $self$$157$$ = this;
        $$menuContainer$$.on("ojselect", $$$$35$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$35$$(this).children("a").length) {
            var $command$$12$$ = $$$$35$$(this).attr("data-oj-command").slice(17);
            $$$$35$$(this).replaceWith($self$$157$$.$_buildContextMenuItem$($command$$12$$));
            $$$$35$$(this).addClass("oj-menu-item");
            $bChanged$$ = !0;
          }
        });
        $bChanged$$ && $$menuContainer$$.ojMenu("refresh");
        this.$_menu$.$$elemCut$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTCUT$$);
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTPASTEBEFORE$$);
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTPASTEAFTER$$);
      }
    }, $_clearMenu$:function() {
      var $menu$$17$$ = this.$_menu$;
      $menu$$17$$ && $menu$$17$$.$usermenu$ && ($menu$$17$$.$usermenu$ = !1, $menu$$17$$.$$container$.off("ojselect"), $menu$$17$$.$$container$ = null);
    }, $_prepareContextMenuBeforeOpen$:function($e$$107_tile$$4$$) {
      $e$$107_tile$$4$$ = $_findContainingTile$$($e$$107_tile$$4$$.originalEvent.target, this.element[0]);
      this.$_menu$.tile = $e$$107_tile$$4$$;
      if (this.$_menu$.$usermenu$) {
        var $cutTile$$ = this.$_menu$.$cutTile$, $bRefreshMenu$$ = !1, $elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemCut$;
        if ($elemCut_elemPasteAfter_elemPasteBefore$$) {
          var $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1;
          $cutTile$$ && $e$$107_tile$$4$$ === $cutTile$$ && ($bDisable$$ = !0);
          $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteBefore$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $e$$107_tile$$4$$ !== $cutTile$$ && $e$$107_tile$$4$$ !== $_getNextElement$$($cutTile$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteAfter$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $cutTile$$ !== $e$$107_tile$$4$$ && $cutTile$$ !== $_getNextElement$$($e$$107_tile$$4$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        $bRefreshMenu$$ && this.$_menu$.$$container$.ojMenu("refresh");
      }
    }, $_buildContextMenuItem$:function($cmd_transKey$$) {
      var $id$$37$$ = $_MENU_CMD_MAP$$[$cmd_transKey$$];
      $cmd_transKey$$ = $_MENU_TRANSLATION_MAP$$[$cmd_transKey$$];
      var $label$$12$$ = $$$$35$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e');
      $label$$12$$.text(this.$getTranslatedString$($cmd_transKey$$));
      $label$$12$$.wrap("\x3cli id\x3d" + $id$$37$$ + "\x3e\x3c/li\x3e");
      return $label$$12$$.parent();
    }, $_menuCut$:function($obj$$55$$) {
      $obj$$55$$ && (this.$_menu$.$cutTile$ = $obj$$55$$);
    }, $_menuPaste$:function($obj$$56$$, $pasteBefore$$) {
      if ($obj$$56$$ && this.$_menu$.$cutTile$) {
        var $cutTile$$1$$ = this.$_menu$.$cutTile$;
        this.$_menu$.$cutTile$ = !1;
        this.$_doPaste$($cutTile$$1$$, $obj$$56$$, $pasteBefore$$);
      }
    }, $_doPaste$:function($cutTile$$2$$, $nextElem_pasteTile$$, $pasteBefore$$1$$) {
      var $fromIndex$$3$$ = $cutTile$$2$$.$_jetDataMasonryOriginalOrder$ - 1, $jqCutTile$$ = $$$$35$$($cutTile$$2$$);
      if (!1 !== this._trigger("beforeReorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$})) {
        this.$_removeTileOriginalOrder$($cutTile$$2$$);
        var $toIndex$$ = $nextElem_pasteTile$$.$_jetDataMasonryOriginalOrder$ - 1;
        $pasteBefore$$1$$ || $toIndex$$++;
        var $elem$$130$$ = this.element[0];
        $pasteBefore$$1$$ || ($nextElem_pasteTile$$ = $_getNextElement$$($nextElem_pasteTile$$));
        this.$_insertTileOriginalOrder$($cutTile$$2$$, $toIndex$$);
        $elem$$130$$.insertBefore($cutTile$$2$$, $nextElem_pasteTile$$);
        this.$_mlCommon$.$setup$(!0);
        this._trigger("reorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$, toIndex:$toIndex$$});
      }
    }, $_handleContextMenuSelect$:function($ev$$4$$, $ui$$28$$) {
      var $id$$38$$ = $ui$$28$$ ? $ui$$28$$.item.attr("id") : void 0;
      $id$$38$$ === $_OJMASONRYLAYOUTCUT$$ ? this.$_menuCut$(this.$_menu$.tile) : $id$$38$$ === $_OJMASONRYLAYOUTPASTEBEFORE$$ ? this.$_menuPaste$(this.$_menu$.tile, !0) : $id$$38$$ === $_OJMASONRYLAYOUTPASTEAFTER$$ && this.$_menuPaste$(this.$_menu$.tile, !1);
    }, $_getTileIndex$:function($tile$$5$$) {
      var $children$$20$$ = this.$_getTileElements$(!0);
      $_sortTilesOriginalOrder$$($children$$20$$);
      for (var $numChildren$$2$$ = $children$$20$$.length, $i$$374$$ = 0;$i$$374$$ < $numChildren$$2$$;$i$$374$$++) {
        if ($children$$20$$[$i$$374$$] === $tile$$5$$) {
          return $i$$374$$;
        }
      }
      return-1;
    }, $_setupReorderHandles$:function() {
      var $elem$$131$$ = this.element;
      $elem$$131$$.find(this.options.reorderHandle).attr("draggable", "true").addClass("oj-draggable");
      $elem$$131$$.on("dragstart" + this.$reorderHandleEventNamespace$, this.$_handleDragStartFunc$).on("dragenter" + this.$reorderHandleEventNamespace$, this.$_handleDragEnterFunc$).on("dragover" + this.$reorderHandleEventNamespace$, this.$_handleDragOverFunc$).on("dragleave" + this.$reorderHandleEventNamespace$, this.$_handleDragLeaveFunc$).on("dragend" + this.$reorderHandleEventNamespace$, this.$_handleDragEndFunc$).on("drop" + this.$reorderHandleEventNamespace$, this.$_handleDropFunc$);
    }, $_tearDownReorderHandles$:function() {
      var $elem$$132$$ = this.element;
      $elem$$132$$.find(this.options.reorderHandle).removeAttr("draggable").removeClass("oj-draggable");
      $elem$$132$$.off(this.$reorderHandleEventNamespace$);
    }, $_handleDragStart$:function($event$$453_originalEvent$$6$$) {
      if (this.options.reorderHandle && !this.$_bDragging$) {
        var $tile$$6$$ = $_findContainingTile$$($event$$453_originalEvent$$6$$.target, this.element[0]);
        if ($tile$$6$$) {
          var $eventData$$23_index$$232$$ = this.$_getTileIndex$($tile$$6$$);
          $tile$$6$$.$_jetDataMasonryDragSourceIndex$ = $eventData$$23_index$$232$$;
          $eventData$$23_index$$232$$ = {tile:$$$$35$$($tile$$6$$), fromIndex:$eventData$$23_index$$232$$};
          !1 !== this._trigger("beforeReorder", null, $eventData$$23_index$$232$$) && ($event$$453_originalEvent$$6$$ = $event$$453_originalEvent$$6$$.originalEvent, this.$_dragStart$($tile$$6$$, $event$$453_originalEvent$$6$$.pageX, $event$$453_originalEvent$$6$$.pageY, $event$$453_originalEvent$$6$$.dataTransfer));
        }
      }
    }, $_handleDragEnter$:function($event$$454_originalEvent$$7$$) {
      $event$$454_originalEvent$$7$$ = $event$$454_originalEvent$$7$$.originalEvent;
      var $elemUnderPoint_relatedTarget$$ = $event$$454_originalEvent$$7$$.relatedTarget, $elem$$134$$ = this.element[0], $enteringMasonryLayout$$ = !1;
      $elemUnderPoint_relatedTarget$$ ? $enteringMasonryLayout$$ = $elem$$134$$ != $elemUnderPoint_relatedTarget$$ && !$oj$$38$$.$DomUtils$.$isAncestor$($elem$$134$$, $elemUnderPoint_relatedTarget$$) : this.$_dragLeftMasonryLayout$ && ($enteringMasonryLayout$$ = ($elemUnderPoint_relatedTarget$$ = document.elementFromPoint($event$$454_originalEvent$$7$$.clientX, $event$$454_originalEvent$$7$$.clientY)) && ($elemUnderPoint_relatedTarget$$ == $elem$$134$$ || $oj$$38$$.$DomUtils$.$isAncestor$($elem$$134$$, 
      $elemUnderPoint_relatedTarget$$)));
      $enteringMasonryLayout$$ && ((this.$_dragLeftMasonryLayout$ = !1, this.$_draggedTile$) ? this.$_dropSite$ && ($$$$35$$(this.$_dropSite$).css("display", ""), this.$_mlCommon$.$setup$(!1, !0)) : $event$$454_originalEvent$$7$$.dataTransfer.dropEffect = "none");
    }, $_handleDragOver$:function($event$$455$$) {
      var $originalEvent$$8$$ = $event$$455$$.originalEvent;
      $originalEvent$$8$$.dataTransfer.dropEffect = "move";
      this.$_dragMove$($originalEvent$$8$$.pageX, $originalEvent$$8$$.clientX, $originalEvent$$8$$.clientY);
      $event$$455$$.preventDefault();
      return!1;
    }, $_handleDragLeave$:function($elem$$135_event$$456$$) {
      var $elemUnderPoint$$1_originalEvent$$9$$ = $elem$$135_event$$456$$.originalEvent, $relatedTarget$$1$$ = $elemUnderPoint$$1_originalEvent$$9$$.relatedTarget;
      $elem$$135_event$$456$$ = this.element[0];
      var $leavingMasonryLayout$$ = !1;
      $leavingMasonryLayout$$ = $relatedTarget$$1$$ ? $elem$$135_event$$456$$ != $relatedTarget$$1$$ && !$oj$$38$$.$DomUtils$.$isAncestor$($elem$$135_event$$456$$, $relatedTarget$$1$$) : ($elemUnderPoint$$1_originalEvent$$9$$ = document.elementFromPoint($elemUnderPoint$$1_originalEvent$$9$$.clientX, $elemUnderPoint$$1_originalEvent$$9$$.clientY)) && $elemUnderPoint$$1_originalEvent$$9$$ != $elem$$135_event$$456$$ && !$oj$$38$$.$DomUtils$.$isAncestor$($elem$$135_event$$456$$, $elemUnderPoint$$1_originalEvent$$9$$);
      $leavingMasonryLayout$$ && (this.$_dragLeftMasonryLayout$ = !0, this.$_dropSite$ && ($$$$35$$(this.$_dropSite$).css("display", $_NONE$$1$$), this.$_mlCommon$.$setup$(!1, !0)));
    }, $_handleDragEnd$:function() {
      if (!this.$_bDropping$) {
        if (this.$_draggedTile$ && this.$_dropSite$) {
          var $draggedTile$$ = this.$_draggedTile$, $dropSite$$ = this.$_dropSite$;
          $oj$$38$$.$DomUtils$.$isAncestor$(this.element[0], $draggedTile$$) && ($$$$35$$($dropSite$$).css("display", ""), this.$_removeTileOriginalOrder$($dropSite$$), $dropSite$$.parentNode.removeChild($dropSite$$), $$$$35$$($draggedTile$$).css("display", ""), this.$_insertTileOriginalOrder$($draggedTile$$, $draggedTile$$.$_jetDataMasonryOriginalOrder$ - 1), this.$_mlCommon$.$setup$(!1, !0));
          delete $draggedTile$$.$_jetDataMasonryDragSourceIndex$;
        }
        this.$_dropSite$ = this.$_draggedTile$ = null;
        this.$_bMouseMoved$ = this.$_bDragMoveTransition$ = !1;
        this.$_dragOffset$ = null;
        this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      }
    }, $_handleDrop$:function($event$$458$$) {
      var $mlCommon$$11_originalEvent$$10$$ = this.$_mlCommon$;
      $mlCommon$$11_originalEvent$$10$$.$isInLayoutCycle$() && $mlCommon$$11_originalEvent$$10$$.$finishLayoutCycle$();
      $mlCommon$$11_originalEvent$$10$$ = $event$$458$$.originalEvent;
      this.$_drop$(this.$_draggedTile$, $mlCommon$$11_originalEvent$$10$$.pageX, $mlCommon$$11_originalEvent$$10$$.pageY);
      $event$$458$$.stopPropagation();
      return!1;
    }, $_dragStart$:function($tile$$7$$, $dragOffset_pageX$$1$$, $pageY$$1$$, $dataTransfer$$2$$) {
      this.$_bDragging$ = !0;
      this.$_bMouseMoved$ = this.$_bDropping$ = !1;
      this.$_draggedTile$ = $tile$$7$$;
      var $elem$$137$$ = this.element[0], $offset$$25_sizeClass_style$$27$$ = $_getSizeStyleClassName$$($tile$$7$$), $dropSite$$1$$ = this.$_dropSite$ = document.createElement("div");
      $dropSite$$1$$.$_jetDataMasonryOriginalOrder$ = $tile$$7$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$1$$.className = $offset$$25_sizeClass_style$$27$$ + " oj-drop";
      var $offset$$25_sizeClass_style$$27$$ = $dropSite$$1$$.style, $tileStyle$$ = $tile$$7$$.style;
      $offset$$25_sizeClass_style$$27$$.top = $tileStyle$$.top;
      this.$_bRTL$ ? $offset$$25_sizeClass_style$$27$$.right = $tileStyle$$.right : $offset$$25_sizeClass_style$$27$$.left = $tileStyle$$.left;
      $offset$$25_sizeClass_style$$27$$ = $$$$35$$($tile$$7$$).offset();
      $elem$$137$$.insertBefore($dropSite$$1$$, $tile$$7$$);
      this.$_dragOffset$ = $dragOffset_pageX$$1$$ = {left:$dragOffset_pageX$$1$$ - $offset$$25_sizeClass_style$$27$$.left, top:$pageY$$1$$ - $offset$$25_sizeClass_style$$27$$.top};
      $$$$35$$($tile$$7$$).addClass("oj-drag");
      $dataTransfer$$2$$.effectAllowed = "move";
      $dataTransfer$$2$$.setData("text/html", $tile$$7$$.outerHTML);
      $dataTransfer$$2$$.setDragImage($tile$$7$$, $dragOffset_pageX$$1$$.left, $dragOffset_pageX$$1$$.top);
      var $self$$158$$ = this;
      this.$_dragStartHideTileTimeout$ = setTimeout(function() {
        $tileStyle$$.display = $_NONE$$1$$;
        $$$$35$$($tile$$7$$).removeClass("oj-drag");
        $self$$158$$.$_dragStartHideTileTimeout$ = null;
        $oj$$38$$.Components.$subtreeHidden$($tile$$7$$);
      }, 0);
    }, $_dragMove$:function($bRightSide_nextElem$$1_pageX$$2$$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$) {
      this.$_bMouseMoved$ = !0;
      if (!this.$_bDragMoveTransition$) {
        var $elem$$138$$ = this.element[0];
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = document.elementFromPoint($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$);
        if (($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = $_findContainingTile$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $elem$$138$$)) && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_dropSite$ && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_draggedTile$) {
          var $offset$$26$$ = $$$$35$$($elem$$138$$).offset();
          $clientY$$2_oldNextSibling$$ = $_getNextElement$$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ = $bRightSide_nextElem$$1_pageX$$2$$ - $offset$$26$$.left >= $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetLeft + .5 * $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetWidth;
          this.$_removeTileOriginalOrder$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ && !this.$_bRTL$ || !$bRightSide_nextElem$$1_pageX$$2$$ && this.$_bRTL$ ? ($bRightSide_nextElem$$1_pageX$$2$$ = $_getNextElement$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$)) ? (this.$_insertTileOriginalOrder$(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$138$$.insertBefore(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$), 
          $elem$$138$$.appendChild(this.$_dropSite$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$138$$.insertBefore(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$));
          $clientY$$2_oldNextSibling$$ !== $_getNextElement$$(this.$_dropSite$) && (this.$_bDragMoveTransition$ = this.$_mlCommon$.$setup$(!1, !0));
        }
      }
    }, $_handleDragMoveTransitionEnd$:function() {
      this.$_bDragMoveTransition$ = !1;
    }, $_drop$:function($tile$$8$$, $newLeft$$1_pageX$$3$$, $pageY$$2$$) {
      this.$_bDropping$ = !0;
      var $elem$$139$$ = this.element[0], $dropSite$$2_style$$28$$ = this.$_dropSite$;
      this.$_dropSite$ = null;
      $oj$$38$$.Components.$subtreeDetached$($tile$$8$$);
      $elem$$139$$.replaceChild($tile$$8$$, $dropSite$$2_style$$28$$);
      $oj$$38$$.Components.$subtreeAttached$($tile$$8$$);
      $tile$$8$$.$_jetDataMasonryOriginalOrder$ = $dropSite$$2_style$$28$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$2_style$$28$$ = $tile$$8$$.style;
      $dropSite$$2_style$$28$$.display = "";
      $oj$$38$$.Components.$subtreeShown$($tile$$8$$);
      var $offset$$27$$ = $$$$35$$($elem$$139$$).offset(), $dragOffset$$1$$ = this.$_dragOffset$;
      $dropSite$$2_style$$28$$.top = $pageY$$2$$ - $dragOffset$$1$$.top - $offset$$27$$.top + $_PX$$1$$;
      $newLeft$$1_pageX$$3$$ = $newLeft$$1_pageX$$3$$ - $dragOffset$$1$$.left - $offset$$27$$.left;
      this.$_bRTL$ ? ($dropSite$$2_style$$28$$.right = $elem$$139$$.offsetWidth - ($newLeft$$1_pageX$$3$$ + $$$$35$$($tile$$8$$).outerWidth(!0)) + $_PX$$1$$, $dropSite$$2_style$$28$$.left = "") : $dropSite$$2_style$$28$$.left = $newLeft$$1_pageX$$3$$ + $_PX$$1$$;
      this.$_dragOffset$ = null;
      this.$_bMouseMoved$ ? this.$_bDragEndTransition$ = this.$_mlCommon$.$setup$(!1, !0) : this.$_handleDragEndTransitionEnd$();
    }, $_handleDragEndTransitionEnd$:function() {
      this.$_bMouseMoved$ = this.$_bDropping$ = this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      var $eventData$$24_tile$$9$$ = this.$_draggedTile$;
      this.$_draggedTile$ = null;
      var $fromIndex$$4$$ = $eventData$$24_tile$$9$$.$_jetDataMasonryDragSourceIndex$;
      delete $eventData$$24_tile$$9$$.$_jetDataMasonryDragSourceIndex$;
      var $toIndex$$1$$ = this.$_getTileIndex$($eventData$$24_tile$$9$$), $eventData$$24_tile$$9$$ = {tile:$$$$35$$($eventData$$24_tile$$9$$), fromIndex:$fromIndex$$4$$, toIndex:$toIndex$$1$$};
      this._trigger("reorder", null, $eventData$$24_tile$$9$$);
    }, getNodeBySubId:function($locator$$43$$) {
      return this._super($locator$$43$$);
    }});
    var $_PX$$1$$ = "px", $_HIDDEN$$1$$ = "hidden", $_NONE$$1$$ = "none", $_OJ_DISABLED$$ = "oj-disabled", $_TILE_SELECTOR$$ = ".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2", $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$ = "oj-masonrylayout-tile-transition-show-from", $_WARNING_DISABLED_OPTION$$2$$ = "JET MasonryLayout: 'disabled' option not supported", 
    $_OJMASONRYLAYOUTCUT$$ = "ojmasonrylayoutcut", $_OJMASONRYLAYOUTPASTEBEFORE$$ = "ojmasonrylayoutpastebefore", $_OJMASONRYLAYOUTPASTEAFTER$$ = "ojmasonrylayoutpasteafter", $_MENU_CMD_MAP$$ = {cut:$_OJMASONRYLAYOUTCUT$$, "paste-before":$_OJMASONRYLAYOUTPASTEBEFORE$$, "paste-after":$_OJMASONRYLAYOUTPASTEAFTER$$}, $_MENU_TRANSLATION_MAP$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter"};
  })();
});
