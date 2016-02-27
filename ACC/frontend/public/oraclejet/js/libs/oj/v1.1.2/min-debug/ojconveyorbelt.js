/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$29$$, $$$$27$$) {
  function $ConveyorBeltCommon$$($agentName_elem$$60$$, $orientation$$, $contentParent$$, $bRtl$$, $buttonInfo$$, $callbackInfo$$) {
    this.$_elem$ = $agentName_elem$$60$$;
    this.$_orientation$ = $orientation$$;
    this.$_contentParent$ = $contentParent$$;
    this.$_bRtl$ = $bRtl$$;
    $buttonInfo$$ && ($buttonInfo$$.$prevButtonId$ && (this.$_prevButtonId$ = $buttonInfo$$.$prevButtonId$), $buttonInfo$$.$nextButtonId$ && (this.$_nextButtonId$ = $buttonInfo$$.$nextButtonId$), $buttonInfo$$.$prevButtonStyleClass$ && (this.$_prevButtonStyleClass$ = $buttonInfo$$.$prevButtonStyleClass$), $buttonInfo$$.$nextButtonStyleClass$ && (this.$_nextButtonStyleClass$ = $buttonInfo$$.$nextButtonStyleClass$), $buttonInfo$$.$prevButtonIcon$ && (this.$_prevButtonIcon$ = $buttonInfo$$.$prevButtonIcon$), 
    $buttonInfo$$.$nextButtonIcon$ && (this.$_nextButtonIcon$ = $buttonInfo$$.$nextButtonIcon$));
    $callbackInfo$$ && ($callbackInfo$$.$scrollFunc$ && (this.$_scrollFunc$ = $callbackInfo$$.$scrollFunc$), $callbackInfo$$.$firstVisibleItemChangedFunc$ && (this.$_firstVisibleItemChangedFunc$ = $callbackInfo$$.$firstVisibleItemChangedFunc$), $callbackInfo$$.$callbackObj$ && (this.$_callbackObj$ = $callbackInfo$$.$callbackObj$), $callbackInfo$$.$addResizeListener$ && (this.$_addResizeListenerFunc$ = $callbackInfo$$.$addResizeListener$), $callbackInfo$$.$removeResizeListener$ && (this.$_removeResizeListenerFunc$ = 
    $callbackInfo$$.$removeResizeListener$));
    this.$_bExternalScroll$ = !0;
    this.$_firstVisibleItemIndex$ = 0;
    $agentName_elem$$60$$ = navigator.userAgent.toLowerCase();
    if (-1 !== $agentName_elem$$60$$.indexOf("gecko/")) {
      this.$_bAgentGecko$ = !0;
    } else {
      if (-1 !== $agentName_elem$$60$$.indexOf("opera")) {
        this.$_bAgentOpera$ = !0;
      } else {
        if (-1 !== $agentName_elem$$60$$.indexOf("applewebkit") || -1 !== $agentName_elem$$60$$.indexOf("safari")) {
          this.$_bAgentWebkit$ = !0;
        }
      }
    }
  }
  $ConveyorBeltCommon$$.prototype.$setup$ = function $$ConveyorBeltCommon$$$$$setup$$($bInit$$) {
    var $self$$138$$ = this;
    if ($bInit$$) {
      this.$_createInnerContainers$();
      this.$_createPrevButton$(this.$_prevButtonId$, this.$_prevButtonStyleClass$, this.$_prevButtonIcon$);
      this.$_createNextButton$(this.$_nextButtonId$, this.$_nextButtonStyleClass$, this.$_nextButtonIcon$);
      var $nextButton$$ = this.$_nextButton$, $tableCellDivNextButton_vertDivNextButton$$ = this.$_tableCellDivNextButton$;
      $tableCellDivNextButton_vertDivNextButton$$ ? (this.$_buttonWidth$ = $tableCellDivNextButton_vertDivNextButton$$.offsetWidth, this.$_buttonHeight$ = $nextButton$$.offsetHeight) : ($tableCellDivNextButton_vertDivNextButton$$ = this.$_vertDivNextButton$, this.$_buttonWidth$ = $nextButton$$.offsetWidth, this.$_buttonHeight$ = $tableCellDivNextButton_vertDivNextButton$$.offsetHeight);
      this.$_hidePrevButton$();
      this.$_hideNextButton$();
      this.$_mouseWheelListener$ = function $this$$_mouseWheelListener$$($event$$341$$) {
        $self$$138$$.$_handleMouseWheel$($event$$341$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_elem$, "mousewheel", this.$_mouseWheelListener$);
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_elem$, "wheel", this.$_mouseWheelListener$);
      this.$_touchStartListener$ = function $this$$_touchStartListener$$($event$$342$$) {
        $self$$138$$.$_handleTouchStart$($event$$342$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
      this.$_touchMoveListener$ = function $this$$_touchMoveListener$$($event$$343$$) {
        $self$$138$$.$_handleTouchMove$($event$$343$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
      this.$_touchEndListener$ = function $this$$_touchEndListener$$($event$$344$$) {
        $self$$138$$.$_handleTouchEnd$($event$$344$$);
      };
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
      $ConveyorBeltCommon$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
      this.$_origScroll$ = 0;
    } else {
      this.$_reinitializeInnerDom$();
    }
    this.$_clearCachedSizes$();
    this.$_adjustOverflowSize$($bInit$$);
    this.$_handleResize$(!0);
    $bInit$$ && this.$_addResizeListenerFunc$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
      $self$$138$$.$_handleResize$(!1);
    }, this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_elem$, this.$_handleResizeFunc$), this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$));
  };
  $ConveyorBeltCommon$$.prototype.destroy = function $$ConveyorBeltCommon$$$$destroy$() {
    var $elem$$61$$ = this.$_elem$;
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$($elem$$61$$, "mousewheel", this.$_mouseWheelListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$($elem$$61$$, "wheel", this.$_mouseWheelListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
    $ConveyorBeltCommon$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
    this.$_touchEndListener$ = this.$_touchMoveListener$ = this.$_touchStartListener$ = this.$_mouseWheelListener$ = null;
    this.$_removeResizeListenerFunc$ && this.$_handleResizeFunc$ && (this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, $elem$$61$$, this.$_handleResizeFunc$), this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$));
    this.$_handleResizeFunc$ = null;
    $ConveyorBeltCommon$$.$_reparentChildrenFromTable$(this.$_contentTableDiv$, $elem$$61$$);
    this.$_arContentElements$ = null;
    this.$_tableDiv$ ? $elem$$61$$.removeChild(this.$_tableDiv$) : ($elem$$61$$.removeChild(this.$_overflowContainer$), $elem$$61$$.removeChild(this.$_vertDivNextButton$), $elem$$61$$.removeChild(this.$_vertDivPrevButton$));
    this.$_vertDivNextButton$ = this.$_vertDivPrevButton$ = this.$_nextButtonWrapper$ = this.$_prevButtonWrapper$ = this.$_tableCellDivNextButton$ = this.$_tableCellDivPrevButton$ = this.$_tableDiv$ = this.$_contentTableDiv$ = this.$_overflowContainer$ = this.$_contentContainer$ = this.$_prevButton$ = this.$_nextButton$ = null;
    this.$_clearCachedSizes$();
    this.$_contentParent$ = this.$_callbackObj$ = this.$_removeResizeListenerFunc$ = this.$_addResizeListenerFunc$ = this.$_firstVisibleItemChangedFunc$ = this.$_scrollFunc$ = this.$_elem$ = null;
  };
  $ConveyorBeltCommon$$.$_reparentChildrenToTable$ = function $$ConveyorBeltCommon$$$$_reparentChildrenToTable$$($fromNode_fromNodeChildren$$, $toTable$$, $bHoriz$$) {
    var $tableRow$$ = null;
    $bHoriz$$ && ($tableRow$$ = $ConveyorBeltCommon$$.$_createTableRowDiv$(), $toTable$$.appendChild($tableRow$$));
    var $arElements$$ = null;
    for ($fromNode_fromNodeChildren$$ = $fromNode_fromNodeChildren$$.childNodes;0 < $fromNode_fromNodeChildren$$.length;) {
      $arElements$$ || ($arElements$$ = []);
      var $child$$7$$ = $fromNode_fromNodeChildren$$[0];
      if (1 === $child$$7$$.nodeType) {
        $bHoriz$$ || ($tableRow$$ = $ConveyorBeltCommon$$.$_createTableRowDiv$(), $toTable$$.appendChild($tableRow$$));
        var $tableCell$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$();
        $tableCell$$.appendChild($child$$7$$);
        $tableRow$$.appendChild($tableCell$$);
        $arElements$$.push($child$$7$$);
      } else {
        $bHoriz$$ ? $tableRow$$.appendChild($child$$7$$) : $toTable$$.appendChild($child$$7$$);
      }
    }
    return $arElements$$;
  };
  $ConveyorBeltCommon$$.$_reparentChildrenFromTable$ = function $$ConveyorBeltCommon$$$$_reparentChildrenFromTable$$($fromTable$$, $toNode$$) {
    if ($fromTable$$) {
      for (var $tableRows$$ = $fromTable$$.childNodes;0 < $tableRows$$.length;) {
        var $tableRow$$1$$ = $tableRows$$[0];
        if (1 === $tableRow$$1$$.nodeType) {
          for (var $tableCells$$ = $tableRow$$1$$.childNodes;0 < $tableCells$$.length;) {
            var $tableCell$$1$$ = $tableCells$$[0];
            1 === $tableCell$$1$$.nodeType ? ($toNode$$.appendChild($tableCell$$1$$.firstChild), $tableRow$$1$$.removeChild($tableCell$$1$$)) : $toNode$$.appendChild($tableCell$$1$$);
          }
          $fromTable$$.removeChild($tableRow$$1$$);
        } else {
          $toNode$$.appendChild($tableRow$$1$$);
        }
      }
    }
  };
  $ConveyorBeltCommon$$.$_getComputedStyle$ = function $$ConveyorBeltCommon$$$$_getComputedStyle$$($elem$$62$$) {
    var $defView$$ = $elem$$62$$.ownerDocument.defaultView, $computedStyle$$ = null;
    return $computedStyle$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$62$$, null) : $elem$$62$$.currentStyle;
  };
  $ConveyorBeltCommon$$.$_getElemInnerWidth$ = function $$ConveyorBeltCommon$$$$_getElemInnerWidth$$($computedStyle$$1_elem$$63$$) {
    $computedStyle$$1_elem$$63$$ = $ConveyorBeltCommon$$.$_getComputedStyle$($computedStyle$$1_elem$$63$$);
    return $ConveyorBeltCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$63$$.width);
  };
  $ConveyorBeltCommon$$.$_getElemInnerHeight$ = function $$ConveyorBeltCommon$$$$_getElemInnerHeight$$($computedStyle$$2_elem$$64$$) {
    $computedStyle$$2_elem$$64$$ = $ConveyorBeltCommon$$.$_getComputedStyle$($computedStyle$$2_elem$$64$$);
    return $ConveyorBeltCommon$$.$_getCSSLengthAsInt$($computedStyle$$2_elem$$64$$.height);
  };
  $ConveyorBeltCommon$$.$_getCSSLengthAsInt$ = function $$ConveyorBeltCommon$$$$_getCSSLengthAsInt$$($cssLength$$2_intLength$$1$$) {
    return 0 < $cssLength$$2_intLength$$1$$.length && "auto" != $cssLength$$2_intLength$$1$$ ? ($cssLength$$2_intLength$$1$$ = parseInt($cssLength$$2_intLength$$1$$, 10), isNaN($cssLength$$2_intLength$$1$$) && ($cssLength$$2_intLength$$1$$ = 0), $cssLength$$2_intLength$$1$$) : 0;
  };
  $ConveyorBeltCommon$$.$_addBubbleEventListener$ = function $$ConveyorBeltCommon$$$$_addBubbleEventListener$$($node$$58$$, $type$$86$$, $listener$$36$$) {
    $node$$58$$.addEventListener ? $node$$58$$.addEventListener($type$$86$$, $listener$$36$$, !1) : $node$$58$$.attachEvent && $node$$58$$.attachEvent("on" + $type$$86$$, $listener$$36$$);
  };
  $ConveyorBeltCommon$$.$_removeBubbleEventListener$ = function $$ConveyorBeltCommon$$$$_removeBubbleEventListener$$($node$$59$$, $type$$87$$, $listener$$37$$) {
    $node$$59$$.removeEventListener ? $node$$59$$.removeEventListener($type$$87$$, $listener$$37$$, !1) : $node$$59$$.detachEvent && $node$$59$$.detachEvent("on" + $type$$87$$, $listener$$37$$);
  };
  $ConveyorBeltCommon$$.$_getWheelDelta$ = function $$ConveyorBeltCommon$$$$_getWheelDelta$$($event$$345$$) {
    var $wheelDelta$$ = 0;
    return $wheelDelta$$ = null != $event$$345$$.wheelDelta ? $event$$345$$.wheelDelta : null != $event$$345$$.deltaY ? -$event$$345$$.deltaY : -$event$$345$$.detail;
  };
  $ConveyorBeltCommon$$.$_createTableDiv$ = function $$ConveyorBeltCommon$$$$_createTableDiv$$() {
    var $tableDiv$$ = document.createElement("div");
    $tableDiv$$.style.display = "table";
    return $tableDiv$$;
  };
  $ConveyorBeltCommon$$.$_createTableRowDiv$ = function $$ConveyorBeltCommon$$$$_createTableRowDiv$$() {
    var $tableRowDiv$$ = document.createElement("div");
    $tableRowDiv$$.style.display = "table-row";
    return $tableRowDiv$$;
  };
  $ConveyorBeltCommon$$.$_createTableCellDiv$ = function $$ConveyorBeltCommon$$$$_createTableCellDiv$$() {
    var $tableCellDiv$$ = document.createElement("div");
    $tableCellDiv$$.style.display = "table-cell";
    return $tableCellDiv$$;
  };
  $ConveyorBeltCommon$$.$_wrapAndRestrictSize$ = function $$ConveyorBeltCommon$$$$_wrapAndRestrictSize$$($elem$$65$$, $parentElem$$3$$, $bWidth$$, $bHeight$$) {
    var $wrapperDiv$$ = document.createElement("div"), $wrapperDivStyle$$ = $wrapperDiv$$.style;
    $wrapperDivStyle$$.display = "inline-block";
    $wrapperDiv$$.appendChild($elem$$65$$);
    $parentElem$$3$$.appendChild($wrapperDiv$$);
    $bWidth$$ && ($wrapperDivStyle$$.maxWidth = $wrapperDiv$$.offsetWidth + "px");
    $bHeight$$ && ($wrapperDivStyle$$.maxHeight = $wrapperDiv$$.offsetHeight + "px");
    return $wrapperDiv$$;
  };
  $ConveyorBeltCommon$$.prototype.$_isHorizontal$ = function $$ConveyorBeltCommon$$$$$_isHorizontal$$() {
    return "horizontal" === this.$_orientation$;
  };
  $ConveyorBeltCommon$$.prototype.$_isEmpty$ = function $$ConveyorBeltCommon$$$$$_isEmpty$$() {
    return!this.$_getContentParent$().hasChildNodes();
  };
  $ConveyorBeltCommon$$.prototype.$_reinitializeInnerDom$ = function $$ConveyorBeltCommon$$$$$_reinitializeInnerDom$$() {
    this.$_origScroll$ = this.$_getCurrScroll$();
    this.$_clearOverflowMaxSize$();
    this.$_setOverflowScroll$(0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$();
  };
  $ConveyorBeltCommon$$.prototype.$_clearCachedSizes$ = function $$ConveyorBeltCommon$$$$$_clearCachedSizes$$() {
    this.$_sizes$ = this.$_totalSize$ = null;
  };
  $ConveyorBeltCommon$$.prototype.$_handleResize$ = function $$ConveyorBeltCommon$$$$$_handleResize$$($bSetup_totalSize$$4$$) {
    $bSetup_totalSize$$4$$ || this.$_reinitializeInnerDom$();
    this.$_clearCachedSizes$();
    this.$_totalSize$ && this.$_sizes$ || (this.$_totalSize$ = this.$_measureContents$());
    $bSetup_totalSize$$4$$ || this.$_adjustOverflowSize$(!1);
    $bSetup_totalSize$$4$$ = this.$_totalSize$;
    this.$_alignButtons$($bSetup_totalSize$$4$$.$w$, $bSetup_totalSize$$4$$.$h$);
  };
  $ConveyorBeltCommon$$.prototype.$_alignButtons$ = function $$ConveyorBeltCommon$$$$$_alignButtons$$($w$$6$$, $h$$6$$) {
    var $nextButtonStyle$$ = this.$_nextButton$.style, $prevButtonStyle$$ = this.$_prevButton$.style;
    if (this.$_isHorizontal$()) {
      var $hOffset_vOffset$$ = .5 * ($h$$6$$ - this.$_buttonHeight$);
      $nextButtonStyle$$.top = $hOffset_vOffset$$ + "px";
      $prevButtonStyle$$.top = $hOffset_vOffset$$ + "px";
    } else {
      $hOffset_vOffset$$ = .5 * ($w$$6$$ - this.$_buttonWidth$), this.$_bRtl$ ? ($nextButtonStyle$$.left = -$hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = -$hOffset_vOffset$$ + "px") : ($nextButtonStyle$$.left = $hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = $hOffset_vOffset$$ + "px");
    }
  };
  $ConveyorBeltCommon$$.prototype.$_adjustOverflowSize$ = function $$ConveyorBeltCommon$$$$$_adjustOverflowSize$$($bInit$$1$$) {
    var $contentContainer$$1$$ = this.$_contentContainer$, $bHoriz$$2$$ = this.$_isHorizontal$(), $elemInnerSize$$ = $bHoriz$$2$$ ? $ConveyorBeltCommon$$.$_getElemInnerWidth$(this.$_elem$) : $ConveyorBeltCommon$$.$_getElemInnerHeight$(this.$_elem$);
    ($bHoriz$$2$$ ? $contentContainer$$1$$.offsetWidth : $contentContainer$$1$$.offsetHeight) > $elemInnerSize$$ && this.$_setOverflowMaxSize$($elemInnerSize$$);
    this.$_minScroll$ = 0;
    this.$_maxScroll$ = $bHoriz$$2$$ ? $contentContainer$$1$$.offsetWidth - $elemInnerSize$$ + this.$_buttonWidth$ : $contentContainer$$1$$.offsetHeight - $elemInnerSize$$ + this.$_buttonHeight$;
    0 > this.$_maxScroll$ && (this.$_maxScroll$ = 0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$();
    this.$_setCurrScroll$($bInit$$1$$ ? this.$_minScroll$ : this.$_origScroll$, !0);
    this.$_origScroll$ = 0;
  };
  $ConveyorBeltCommon$$.prototype.$_createInnerContainers$ = function $$ConveyorBeltCommon$$$$$_createInnerContainers$$() {
    var $self$$139$$ = this, $bHoriz$$3_overflowHeight$$ = this.$_isHorizontal$(), $overflowContainer$$ = document.createElement("div");
    this.$_overflowContainer$ = $overflowContainer$$;
    var $overflowContainerStyle$$ = $overflowContainer$$.style;
    $overflowContainerStyle$$.overflow = "hidden";
    $overflowContainerStyle$$.display = this.$_getCssDisplay$();
    $overflowContainerStyle$$.position = "relative";
    $bHoriz$$3_overflowHeight$$ && ($overflowContainerStyle$$.verticalAlign = "top");
    var $elem$$66$$ = this.$_elem$, $contentContainer$$2_contentHeight$$ = document.createElement("div");
    this.$_contentContainer$ = $contentContainer$$2_contentHeight$$;
    var $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = $contentContainer$$2_contentHeight$$.style;
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.position = "relative";
    $bHoriz$$3_overflowHeight$$ && ($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.display = "inline-block");
    $overflowContainer$$.appendChild($contentContainer$$2_contentHeight$$);
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = null;
    if ($bHoriz$$3_overflowHeight$$) {
      this.$_tableDiv$ = $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = $ConveyorBeltCommon$$.$_createTableDiv$();
      var $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = $ConveyorBeltCommon$$.$_createTableRowDiv$(), $arContentElements_tableCellDivPrevButton$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$();
      this.$_tableCellDivPrevButton$ = $arContentElements_tableCellDivPrevButton$$;
      var $contentChildren_tableCellDivOverflow$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$(), $numContentChildren_tableCellDivNextButton$$1$$ = $ConveyorBeltCommon$$.$_createTableCellDiv$();
      this.$_tableCellDivNextButton$ = $numContentChildren_tableCellDivNextButton$$1$$;
      var $i$$326_tableCellDivNextButtonStyle$$ = $numContentChildren_tableCellDivNextButton$$1$$.style;
      $arContentElements_tableCellDivPrevButton$$.style.verticalAlign = "top";
      $i$$326_tableCellDivNextButtonStyle$$.verticalAlign = "top";
      $contentChildren_tableCellDivOverflow$$.appendChild($overflowContainer$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($arContentElements_tableCellDivPrevButton$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($contentChildren_tableCellDivOverflow$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($numContentChildren_tableCellDivNextButton$$1$$);
      $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$);
    }
    $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = $ConveyorBeltCommon$$.$_createTableDiv$();
    $arContentElements_tableCellDivPrevButton$$ = $ConveyorBeltCommon$$.$_reparentChildrenToTable$($elem$$66$$, $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$, $bHoriz$$3_overflowHeight$$);
    if (this.$_contentParent$) {
      for ($arContentElements_tableCellDivPrevButton$$ = [], $contentChildren_tableCellDivOverflow$$ = this.$_contentParent$.children, $numContentChildren_tableCellDivNextButton$$1$$ = $contentChildren_tableCellDivOverflow$$.length, $i$$326_tableCellDivNextButtonStyle$$ = 0;$i$$326_tableCellDivNextButtonStyle$$ < $numContentChildren_tableCellDivNextButton$$1$$;$i$$326_tableCellDivNextButtonStyle$$++) {
        var $child$$8$$ = $contentChildren_tableCellDivOverflow$$[$i$$326_tableCellDivNextButtonStyle$$];
        1 === $child$$8$$.nodeType && $arContentElements_tableCellDivPrevButton$$.push($child$$8$$);
      }
    }
    (this.$_arContentElements$ = $arContentElements_tableCellDivPrevButton$$) && 0 < $arContentElements_tableCellDivPrevButton$$.length && (this.$_contentTableDiv$ = $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$, $contentContainer$$2_contentHeight$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$));
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ ? $elem$$66$$.appendChild($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$) : (this.$_vertDivPrevButton$ = $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = document.createElement("div"), this.$_vertDivNextButton$ = $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = document.createElement("div"), $elem$$66$$.appendChild($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$), $elem$$66$$.appendChild($overflowContainer$$), 
    $elem$$66$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$));
    $bHoriz$$3_overflowHeight$$ && ($bHoriz$$3_overflowHeight$$ = $overflowContainer$$.offsetHeight, $contentContainer$$2_contentHeight$$ = $contentContainer$$2_contentHeight$$.offsetHeight, $bHoriz$$3_overflowHeight$$ > $contentContainer$$2_contentHeight$$ && ($overflowContainerStyle$$.marginBottom = $contentContainer$$2_contentHeight$$ - $bHoriz$$3_overflowHeight$$ + "px"));
    $ConveyorBeltCommon$$.$_addBubbleEventListener$($overflowContainer$$, "scroll", function() {
      $self$$139$$.$_handleScroll$();
    });
  };
  $ConveyorBeltCommon$$.prototype.$_getCssDisplay$ = function $$ConveyorBeltCommon$$$$$_getCssDisplay$$() {
    return this.$_isHorizontal$() ? "inline-block" : "block";
  };
  $ConveyorBeltCommon$$.prototype.$_createPrevButton$ = function $$ConveyorBeltCommon$$$$$_createPrevButton$$($buttonId_prevButtonStyle$$1$$, $bHoriz$$4_buttonStyleClass$$, $icon$$4$$) {
    var $self$$140$$ = this, $prevButton$$1$$ = document.createElement("div");
    this.$_prevButton$ = $prevButton$$1$$;
    $buttonId_prevButtonStyle$$1$$ && $prevButton$$1$$.setAttribute("id", $buttonId_prevButtonStyle$$1$$);
    $prevButton$$1$$.setAttribute("class", $bHoriz$$4_buttonStyleClass$$);
    $prevButton$$1$$.setAttribute("aria-hidden", "true");
    $buttonId_prevButtonStyle$$1$$ = $prevButton$$1$$.style;
    $buttonId_prevButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId_prevButtonStyle$$1$$.position = "relative";
    if ($bHoriz$$4_buttonStyleClass$$ = this.$_isHorizontal$()) {
      $buttonId_prevButtonStyle$$1$$.verticalAlign = "top";
    }
    $ConveyorBeltCommon$$.$_addBubbleEventListener$($prevButton$$1$$, "click", function() {
      $self$$140$$.$_scrollPrev$();
    });
    this.$_tableCellDivPrevButton$ ? this.$_prevButtonWrapper$ = $ConveyorBeltCommon$$.$_wrapAndRestrictSize$($prevButton$$1$$, this.$_tableCellDivPrevButton$, $bHoriz$$4_buttonStyleClass$$, !$bHoriz$$4_buttonStyleClass$$) : this.$_vertDivPrevButton$.appendChild($prevButton$$1$$);
    $icon$$4$$ && $prevButton$$1$$.appendChild($icon$$4$$);
  };
  $ConveyorBeltCommon$$.prototype.$_createNextButton$ = function $$ConveyorBeltCommon$$$$$_createNextButton$$($buttonId$$1_nextButtonStyle$$1$$, $bHoriz$$5_buttonStyleClass$$1$$, $icon$$5$$) {
    var $self$$141$$ = this, $nextButton$$2$$ = document.createElement("div");
    this.$_nextButton$ = $nextButton$$2$$;
    $buttonId$$1_nextButtonStyle$$1$$ && $nextButton$$2$$.setAttribute("id", $buttonId$$1_nextButtonStyle$$1$$);
    $nextButton$$2$$.setAttribute("class", $bHoriz$$5_buttonStyleClass$$1$$);
    $nextButton$$2$$.setAttribute("aria-hidden", "true");
    $buttonId$$1_nextButtonStyle$$1$$ = $nextButton$$2$$.style;
    $buttonId$$1_nextButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonId$$1_nextButtonStyle$$1$$.position = "relative";
    if ($bHoriz$$5_buttonStyleClass$$1$$ = this.$_isHorizontal$()) {
      $buttonId$$1_nextButtonStyle$$1$$.verticalAlign = "top";
    }
    $ConveyorBeltCommon$$.$_addBubbleEventListener$($nextButton$$2$$, "click", function() {
      $self$$141$$.$_scrollNext$();
    });
    this.$_tableCellDivNextButton$ ? this.$_nextButtonWrapper$ = $ConveyorBeltCommon$$.$_wrapAndRestrictSize$($nextButton$$2$$, this.$_tableCellDivNextButton$, $bHoriz$$5_buttonStyleClass$$1$$, !$bHoriz$$5_buttonStyleClass$$1$$) : this.$_vertDivNextButton$.appendChild($nextButton$$2$$);
    $icon$$5$$ && $nextButton$$2$$.appendChild($icon$$5$$);
  };
  $ConveyorBeltCommon$$.prototype.$_getContentParent$ = function $$ConveyorBeltCommon$$$$$_getContentParent$$() {
    var $contentParent$$3$$ = this.$_contentParent$;
    $contentParent$$3$$ || ($contentParent$$3$$ = this.$_contentContainer$);
    return $contentParent$$3$$;
  };
  $ConveyorBeltCommon$$.prototype.$_measureContents$ = function $$ConveyorBeltCommon$$$$$_measureContents$$() {
    var $bHoriz$$6_contentTableDiv$$1$$ = this.$_contentTableDiv$, $arContentElements$$1$$ = this.$_arContentElements$, $totalSize$$5$$ = {$w$:0, $h$:0}, $sizes$$1$$ = [];
    if (this.$_getContentParent$().hasChildNodes() && $bHoriz$$6_contentTableDiv$$1$$ && $arContentElements$$1$$ && 0 < $arContentElements$$1$$.length) {
      for (var $bHoriz$$6_contentTableDiv$$1$$ = this.$_isHorizontal$(), $contentWidth$$1$$ = 0, $contentWidth$$1$$ = this.$_contentContainer$.offsetWidth, $startOffset$$ = 0, $prevSizeObj$$ = null, $i$$327$$ = 0;$i$$327$$ < $arContentElements$$1$$.length;$i$$327$$++) {
        var $child$$9_childParent$$ = $arContentElements$$1$$[$i$$327$$];
        if (1 === $child$$9_childParent$$.nodeType) {
          var $overlap_ww$$ = $child$$9_childParent$$.offsetWidth, $hh$$ = $child$$9_childParent$$.offsetHeight, $sizeObj$$1$$ = {$w$:$overlap_ww$$, $h$:$hh$$, id:$child$$9_childParent$$.id};
          if ($bHoriz$$6_contentTableDiv$$1$$) {
            var $offLeft_offTop$$ = $child$$9_childParent$$.offsetLeft;
            this.$_contentParent$ || 0 !== $offLeft_offTop$$ || ($child$$9_childParent$$ = $child$$9_childParent$$.parentNode, $offLeft_offTop$$ = $child$$9_childParent$$.offsetLeft);
            $sizeObj$$1$$.start = this.$_bRtl$ ? $contentWidth$$1$$ - ($offLeft_offTop$$ + $overlap_ww$$) : $offLeft_offTop$$;
            0 === $i$$327$$ && ($startOffset$$ = $sizeObj$$1$$.start);
            $sizeObj$$1$$.start -= $startOffset$$;
            $totalSize$$5$$.$w$ = $sizeObj$$1$$.start + $overlap_ww$$;
            $totalSize$$5$$.$h$ = Math.max($totalSize$$5$$.$h$, $hh$$);
            $sizeObj$$1$$.end = $totalSize$$5$$.$w$ - 1;
          } else {
            $offLeft_offTop$$ = $child$$9_childParent$$.offsetTop, this.$_contentParent$ || 0 !== $offLeft_offTop$$ || ($child$$9_childParent$$ = $child$$9_childParent$$.parentNode, $offLeft_offTop$$ = $child$$9_childParent$$.offsetTop), $sizeObj$$1$$.start = $offLeft_offTop$$, $totalSize$$5$$.$w$ = Math.max($totalSize$$5$$.$w$, $overlap_ww$$), $totalSize$$5$$.$h$ = $sizeObj$$1$$.start + $hh$$, $sizeObj$$1$$.end = $totalSize$$5$$.$h$ - 1;
          }
          $prevSizeObj$$ && $prevSizeObj$$.end >= $sizeObj$$1$$.start && ($overlap_ww$$ = $prevSizeObj$$.end - ($sizeObj$$1$$.start - 1), $prevSizeObj$$.end -= $overlap_ww$$, $bHoriz$$6_contentTableDiv$$1$$ ? $prevSizeObj$$.$w$ -= $overlap_ww$$ : $prevSizeObj$$.$h$ -= $overlap_ww$$);
          $sizes$$1$$.push($sizeObj$$1$$);
          $prevSizeObj$$ = $sizeObj$$1$$;
        }
      }
    }
    this.$_sizes$ = $sizes$$1$$;
    return $totalSize$$5$$;
  };
  $ConveyorBeltCommon$$.prototype.$_getSizes$ = function $$ConveyorBeltCommon$$$$$_getSizes$$() {
    if (!this.$_sizes$) {
      var $totalSize$$6$$ = this.$_measureContents$();
      this.$_totalSize$ || (this.$_totalSize$ = $totalSize$$6$$);
    }
    return this.$_sizes$;
  };
  $ConveyorBeltCommon$$.prototype.$_getNextButtonDisplayElem$ = function $$ConveyorBeltCommon$$$$$_getNextButtonDisplayElem$$() {
    return this.$_nextButtonWrapper$ ? this.$_nextButtonWrapper$ : this.$_nextButton$;
  };
  $ConveyorBeltCommon$$.prototype.$_getPrevButtonDisplayElem$ = function $$ConveyorBeltCommon$$$$$_getPrevButtonDisplayElem$$() {
    return this.$_prevButtonWrapper$ ? this.$_prevButtonWrapper$ : this.$_prevButton$;
  };
  $ConveyorBeltCommon$$.prototype.$_showNextButton$ = function $$ConveyorBeltCommon$$$$$_showNextButton$$() {
    this.$_getNextButtonDisplayElem$().style.display = this.$_getCssDisplay$();
  };
  $ConveyorBeltCommon$$.prototype.$_showPrevButton$ = function $$ConveyorBeltCommon$$$$$_showPrevButton$$() {
    this.$_getPrevButtonDisplayElem$().style.display = this.$_getCssDisplay$();
  };
  $ConveyorBeltCommon$$.prototype.$_hideNextButton$ = function $$ConveyorBeltCommon$$$$$_hideNextButton$$() {
    this.$_getNextButtonDisplayElem$().style.display = "none";
  };
  $ConveyorBeltCommon$$.prototype.$_hidePrevButton$ = function $$ConveyorBeltCommon$$$$$_hidePrevButton$$() {
    this.$_getPrevButtonDisplayElem$().style.display = "none";
  };
  $ConveyorBeltCommon$$.prototype.$_isNextButtonShown$ = function $$ConveyorBeltCommon$$$$$_isNextButtonShown$$() {
    return "none" !== this.$_getNextButtonDisplayElem$().style.display;
  };
  $ConveyorBeltCommon$$.prototype.$_isPrevButtonShown$ = function $$ConveyorBeltCommon$$$$$_isPrevButtonShown$$() {
    return "none" !== this.$_getPrevButtonDisplayElem$().style.display;
  };
  $ConveyorBeltCommon$$.prototype.$_getButtonSize$ = function $$ConveyorBeltCommon$$$$$_getButtonSize$$() {
    return this.$_isHorizontal$() ? this.$_buttonWidth$ : this.$_buttonHeight$;
  };
  $ConveyorBeltCommon$$.prototype.$_updateButtonVisibility$ = function $$ConveyorBeltCommon$$$$$_updateButtonVisibility$$($scroll$$2$$) {
    var $buttonSize$$ = this.$_getButtonSize$(), $ovScroll$$ = this.$_getCurrScroll$(), $ovSize$$ = this.$_getCurrViewportSize$(), $bNeedsScroll$$ = this.$_needsScroll$();
    $scroll$$2$$ <= this.$_minScroll$ ? (this.$_isPrevButtonShown$() && ($ovSize$$ += $buttonSize$$, $ovScroll$$ -= $buttonSize$$), this.$_hidePrevButton$()) : $bNeedsScroll$$ && (this.$_isPrevButtonShown$() || ($ovSize$$ -= $buttonSize$$, $ovScroll$$ += $buttonSize$$), this.$_showPrevButton$());
    $scroll$$2$$ >= this.$_maxScroll$ ? (this.$_isNextButtonShown$() && ($ovSize$$ += $buttonSize$$), this.$_hideNextButton$()) : $bNeedsScroll$$ && (this.$_isNextButtonShown$() || ($ovSize$$ -= $buttonSize$$), this.$_showNextButton$());
    this.$_setOverflowScroll$($ovScroll$$);
    $bNeedsScroll$$ ? this.$_setOverflowMaxSize$($ovSize$$) : this.$_clearOverflowMaxSize$();
  };
  $ConveyorBeltCommon$$.prototype.$_setOverflowMaxSize$ = function $$ConveyorBeltCommon$$$$$_setOverflowMaxSize$$($s$$8_size$$21$$) {
    var $overflowContainerStyle$$1$$ = this.$_overflowContainer$.style;
    $s$$8_size$$21$$ += "px";
    this.$_isHorizontal$() ? $overflowContainerStyle$$1$$.maxWidth = $s$$8_size$$21$$ : $overflowContainerStyle$$1$$.maxHeight = $s$$8_size$$21$$;
  };
  $ConveyorBeltCommon$$.prototype.$_clearOverflowMaxSize$ = function $$ConveyorBeltCommon$$$$$_clearOverflowMaxSize$$() {
    var $overflowContainerStyle$$2$$ = this.$_overflowContainer$.style;
    this.$_isHorizontal$() ? $overflowContainerStyle$$2$$.maxWidth = "" : $overflowContainerStyle$$2$$.maxHeight = "";
  };
  $ConveyorBeltCommon$$.prototype.$_setOverflowScroll$ = function $$ConveyorBeltCommon$$$$$_setOverflowScroll$$($scroll$$3$$) {
    var $overflowContainer$$3$$ = this.$_overflowContainer$;
    this.$_isHorizontal$() ? $overflowContainer$$3$$.scrollLeft = this.$_convertScrollLogicalToBrowser$($scroll$$3$$) : $overflowContainer$$3$$.scrollTop = $scroll$$3$$;
  };
  $ConveyorBeltCommon$$.prototype.$_getCurrViewportSize$ = function $$ConveyorBeltCommon$$$$$_getCurrViewportSize$$() {
    var $overflowContainer$$4$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $overflowContainer$$4$$.offsetWidth : $overflowContainer$$4$$.offsetHeight;
  };
  $ConveyorBeltCommon$$.prototype.$_setCurrScroll$ = function $$ConveyorBeltCommon$$$$$_setCurrScroll$$($scroll$$4$$, $bImmediate$$) {
    this.$_bScrolling$ || (this.$_bExternalScroll$ = !1, this.$_setCurrScrollHelper$($scroll$$4$$, $bImmediate$$));
  };
  $ConveyorBeltCommon$$.prototype.$_setCurrScrollHelper$ = function $$ConveyorBeltCommon$$$$$_setCurrScrollHelper$$($scroll$$5$$, $bImmediate$$1$$) {
    if (!this.$_isEmpty$()) {
      this.$_bScrolling$ = !0;
      $scroll$$5$$ = this.$_constrainScroll$($scroll$$5$$);
      this.$_updateButtonVisibility$($scroll$$5$$);
      var $scrollFunc$$ = this.$_scrollFunc$;
      if ($bImmediate$$1$$ || !$scrollFunc$$ || $scroll$$5$$ === this.$_getCurrScroll$()) {
        this.$_onScrollAnimEnd$(this.$_bExternalScroll$ ? this.$_getCurrScroll$() : $scroll$$5$$);
      } else {
        var $self$$142$$ = this;
        $scrollFunc$$.call(this.$_callbackObj$, this.$_overflowContainer$, this.$_convertScrollLogicalToBrowser$($scroll$$5$$), Math.abs(this.$_getCurrScroll$() - $scroll$$5$$) / $ConveyorBeltCommon$$.$_SCROLL_SPEED$, function() {
          $self$$142$$.$_onScrollAnimEnd$($scroll$$5$$);
        });
      }
    }
  };
  $ConveyorBeltCommon$$.prototype.$_getCurrScroll$ = function $$ConveyorBeltCommon$$$$$_getCurrScroll$$() {
    var $overflowContainer$$5$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? this.$_convertScrollBrowserToLogical$($overflowContainer$$5$$.scrollLeft) : $overflowContainer$$5$$.scrollTop;
  };
  $ConveyorBeltCommon$$.prototype.$_needsScroll$ = function $$ConveyorBeltCommon$$$$$_needsScroll$$() {
    var $contentContainer$$4$$ = this.$_contentContainer$, $overflowContainer$$6$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $contentContainer$$4$$.offsetWidth > $overflowContainer$$6$$.offsetWidth : $contentContainer$$4$$.offsetHeight > $overflowContainer$$6$$.offsetHeight;
  };
  $ConveyorBeltCommon$$.prototype.$_constrainScroll$ = function $$ConveyorBeltCommon$$$$$_constrainScroll$$($scroll$$6$$) {
    !this.$_needsScroll$() || $scroll$$6$$ < this.$_minScroll$ ? $scroll$$6$$ = this.$_minScroll$ : $scroll$$6$$ > this.$_maxScroll$ && ($scroll$$6$$ = this.$_maxScroll$);
    return $scroll$$6$$;
  };
  $ConveyorBeltCommon$$.prototype.$_handleMouseWheel$ = function $$ConveyorBeltCommon$$$$$_handleMouseWheel$$($event$$349$$) {
    var $bConsumeEvent$$ = this.$_bScrolling$;
    if (this.$_needsScroll$() && !this.$_bScrolling$) {
      var $wheelDelta$$1$$ = $ConveyorBeltCommon$$.$_getWheelDelta$($event$$349$$);
      0 > $wheelDelta$$1$$ && this.$_isNextButtonShown$() ? ($bConsumeEvent$$ = !0, this.$_scrollNext$()) : 0 < $wheelDelta$$1$$ && this.$_isPrevButtonShown$() && ($bConsumeEvent$$ = !0, this.$_scrollPrev$());
    }
    $bConsumeEvent$$ && ($event$$349$$.preventDefault(), $event$$349$$.stopPropagation());
  };
  $ConveyorBeltCommon$$.prototype.$_handleTouchStart$ = function $$ConveyorBeltCommon$$$$$_handleTouchStart$$($event$$350_eventTouches_firstTouch$$) {
    $event$$350_eventTouches_firstTouch$$ = $event$$350_eventTouches_firstTouch$$.touches;
    this.$_needsScroll$() && !this.$_bScrolling$ && 1 === $event$$350_eventTouches_firstTouch$$.length && (this.$_bTouch$ = !0, $event$$350_eventTouches_firstTouch$$ = $event$$350_eventTouches_firstTouch$$[0], this.$_touchStartCoord$ = this.$_isHorizontal$() ? $event$$350_eventTouches_firstTouch$$.pageX : $event$$350_eventTouches_firstTouch$$.pageY, this.$_touchStartScroll$ = this.$_getCurrScroll$(), this.$_touchStartNextScroll$ = this.$_calcNextScroll$(), this.$_touchStartPrevScroll$ = this.$_calcPrevScroll$(), 
    this.$_touchStartNextButtonShown$ = this.$_isNextButtonShown$(), this.$_touchStartPrevButtonShown$ = this.$_isPrevButtonShown$());
  };
  $ConveyorBeltCommon$$.prototype.$_handleTouchMove$ = function $$ConveyorBeltCommon$$$$$_handleTouchMove$$($event$$351$$) {
    var $bHoriz$$7$$ = this.$_isHorizontal$(), $diff_firstTouch$$1$$ = $event$$351$$.touches[0], $diff_firstTouch$$1$$ = ($bHoriz$$7$$ ? $diff_firstTouch$$1$$.pageX : $diff_firstTouch$$1$$.pageY) - this.$_touchStartCoord$, $bNext$$ = $bHoriz$$7$$ && this.$_bRtl$ ? 0 < $diff_firstTouch$$1$$ : 0 > $diff_firstTouch$$1$$, $canScrollInSwipeDirection_overflowContainer$$7$$ = $bNext$$ && this.$_touchStartNextButtonShown$ || !$bNext$$ && this.$_touchStartPrevButtonShown$;
    if (this.$_bTouch$ && $canScrollInSwipeDirection_overflowContainer$$7$$) {
      $canScrollInSwipeDirection_overflowContainer$$7$$ = this.$_overflowContainer$;
      if (Math.abs($diff_firstTouch$$1$$) < $ConveyorBeltCommon$$.$_SWIPE_THRESHOLD$ * ($bHoriz$$7$$ ? $canScrollInSwipeDirection_overflowContainer$$7$$.offsetWidth : $canScrollInSwipeDirection_overflowContainer$$7$$.offsetHeight)) {
        if (this.$_setCurrScroll$(this.$_touchStartScroll$ - $diff_firstTouch$$1$$, !0), this.$_touchStartNextButtonShown$ && !this.$_isNextButtonShown$() || this.$_touchStartPrevButtonShown$ && !this.$_isPrevButtonShown$()) {
          this.$_bTouch$ = !1;
        }
      } else {
        this.$_setCurrScroll$($bNext$$ ? this.$_touchStartNextScroll$ : this.$_touchStartPrevScroll$, !1), this.$_bTouch$ = !1;
      }
      this.$_scrolledForThisTouch$ = !0;
    }
    this.$_scrolledForThisTouch$ && ($event$$351$$.preventDefault(), $event$$351$$.stopPropagation());
  };
  $ConveyorBeltCommon$$.prototype.$_handleTouchEnd$ = function $$ConveyorBeltCommon$$$$$_handleTouchEnd$$() {
    this.$_bTouch$ && this.$_setCurrScroll$(this.$_touchStartScroll$, !1);
    this.$_scrolledForThisTouch$ = this.$_bTouch$ = !1;
  };
  $ConveyorBeltCommon$$.prototype.$_handleScroll$ = function $$ConveyorBeltCommon$$$$$_handleScroll$$() {
    this.$_bExternalScroll$ && !this.$_bScrolling$ && this.$_setCurrScrollHelper$(this.$_getCurrScroll$(), !0);
  };
  $ConveyorBeltCommon$$.prototype.$_onScrollAnimEnd$ = function $$ConveyorBeltCommon$$$$$_onScrollAnimEnd$$($lastVisIndex_scroll$$7$$) {
    this.$_setOverflowScroll$($lastVisIndex_scroll$$7$$);
    this.$_setExternalScrollTimeout$();
    this.$_bScrolling$ = !1;
    if (this.$_firstVisibleItemChangedFunc$) {
      this.$_firstVisibleItemIndex$ = this.$_calcFirstVisibleItemIndex$();
      $lastVisIndex_scroll$$7$$ = this.$_calcLastVisibleItemIndex$();
      var $sizes$$2$$ = this.$_getSizes$(), $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$];
      this.$_firstVisibleItemIndex$ !== $lastVisIndex_scroll$$7$$ && this.$_getCurrScroll$() > $sizeObj$$2$$.start && this.$_firstVisibleItemIndex$ < $sizes$$2$$.length - 2 && (this.$_firstVisibleItemIndex$++, $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$]);
      this.$_firstVisibleItemId$ = $sizeObj$$2$$.id;
      this.$_firstVisibleItemChangedFunc$.call(this.$_callbackObj$, this.$_firstVisibleItemId$);
    }
  };
  $ConveyorBeltCommon$$.prototype.$_setExternalScrollTimeout$ = function $$ConveyorBeltCommon$$$$$_setExternalScrollTimeout$$() {
    var $self$$143$$ = this;
    window.setTimeout(function() {
      $self$$143$$ && ($self$$143$$.$_bExternalScroll$ = !0);
    }, 0);
  };
  $ConveyorBeltCommon$$.prototype.$_scrollNext$ = function $$ConveyorBeltCommon$$$$$_scrollNext$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcNextScroll$(), !1);
  };
  $ConveyorBeltCommon$$.prototype.$_scrollPrev$ = function $$ConveyorBeltCommon$$$$$_scrollPrev$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcPrevScroll$(), !1);
  };
  $ConveyorBeltCommon$$.prototype.$_calcNextScroll$ = function $$ConveyorBeltCommon$$$$$_calcNextScroll$$() {
    var $nextIndex$$ = this.$_calcNextVisibleItemIndex$(), $scroll$$8$$ = 0;
    return $scroll$$8$$ = $nextIndex$$ === this.$_calcFirstVisibleItemIndex$() ? this.$_getCurrScroll$() + this.$_getCurrViewportSize$() : this.$_calcStartScroll$($nextIndex$$);
  };
  $ConveyorBeltCommon$$.prototype.$_calcPrevScroll$ = function $$ConveyorBeltCommon$$$$$_calcPrevScroll$$() {
    var $prevIndex$$ = this.$_calcPrevVisibleItemIndex$(), $scroll$$9$$ = 0, $scroll$$9$$ = $prevIndex$$ === this.$_calcLastVisibleItemIndex$() ? this.$_getCurrScroll$() - this.$_getCurrViewportSize$() : this.$_calcEndScroll$($prevIndex$$);
    this.$_isNextButtonShown$() || ($scroll$$9$$ += this.$_getButtonSize$());
    $scroll$$9$$ < this.$_getButtonSize$() && ($scroll$$9$$ = this.$_minScroll$);
    return $scroll$$9$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcStartScroll$ = function $$ConveyorBeltCommon$$$$$_calcStartScroll$$($index$$212$$) {
    return this.$_getSizes$()[$index$$212$$].start;
  };
  $ConveyorBeltCommon$$.prototype.$_calcEndScroll$ = function $$ConveyorBeltCommon$$$$$_calcEndScroll$$($index$$213$$) {
    return this.$_getSizes$()[$index$$213$$].end - this.$_getCurrViewportSize$() + 1;
  };
  $ConveyorBeltCommon$$.prototype.$_calcFirstVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcFirstVisibleItemIndex$$() {
    var $i$$328$$ = this.$_calcItemIndex$(this.$_getCurrScroll$());
    return 0 > $i$$328$$ ? 0 : $i$$328$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcLastVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcLastVisibleItemIndex$$() {
    var $i$$329$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$() - 1), $sizes$$5$$ = this.$_getSizes$();
    return 0 > $i$$329$$ ? $sizes$$5$$.length - 1 : $i$$329$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcPrevVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcPrevVisibleItemIndex$$() {
    var $i$$330$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() - 1);
    return 0 > $i$$330$$ ? 0 : $i$$330$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcNextVisibleItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcNextVisibleItemIndex$$() {
    var $i$$331$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$()), $sizes$$6$$ = this.$_getSizes$();
    return 0 > $i$$331$$ ? $sizes$$6$$.length - 1 : $i$$331$$;
  };
  $ConveyorBeltCommon$$.prototype.$_calcItemIndex$ = function $$ConveyorBeltCommon$$$$$_calcItemIndex$$($scroll$$10$$) {
    for (var $sizes$$7$$ = this.$_getSizes$(), $i$$332$$ = 0;$i$$332$$ < $sizes$$7$$.length;$i$$332$$++) {
      if ($scroll$$10$$ <= $sizes$$7$$[$i$$332$$].end) {
        return $i$$332$$;
      }
    }
    return-1;
  };
  $ConveyorBeltCommon$$.prototype.$_convertScrollLogicalToBrowser$ = function $$ConveyorBeltCommon$$$$$_convertScrollLogicalToBrowser$$($scroll$$11$$) {
    var $newScroll$$ = $scroll$$11$$;
    if (this.$_bRtl$ && this.$_isHorizontal$()) {
      if (this.$_bAgentGecko$) {
        $newScroll$$ = -$scroll$$11$$;
      } else {
        if (this.$_bAgentWebkit$ || this.$_bAgentOpera$) {
          $newScroll$$ = this.$_contentContainer$.offsetWidth - this.$_overflowContainer$.offsetWidth - $scroll$$11$$;
        }
      }
    }
    return $newScroll$$;
  };
  $ConveyorBeltCommon$$.prototype.$_convertScrollBrowserToLogical$ = function $$ConveyorBeltCommon$$$$$_convertScrollBrowserToLogical$$($scroll$$12$$) {
    return this.$_convertScrollLogicalToBrowser$($scroll$$12$$);
  };
  $ConveyorBeltCommon$$.$_SCROLL_SPEED$ = 1.1;
  $ConveyorBeltCommon$$.$_SWIPE_THRESHOLD$ = .33;
  (function() {
    $oj$$29$$.$__registerWidget$("oj.ojConveyorBelt", $$$$27$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{orientation:"horizontal", contentParent:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-conveyorbelt oj-component");
      this.options.disabled && $oj$$29$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$ && this.$_destroyCBCommon$();
      this.$_setup$($bRecreate$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_setup$:function($children$$7_isInit$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        var $elem$$76_oldIsInit$$ = this.element, $options$$318$$ = this.options;
        if ($children$$7_isInit$$ && !this.$_cbCommon$) {
          var $orientation$$1$$ = $options$$318$$.orientation, $callbackInfo$$1_prevStyleClass$$ = null, $nextStyleClass$$ = null, $prevIcon$$ = null, $nextIcon$$ = null, $animateScrollFunc_contentParentElem$$ = null;
          "vertical" !== $orientation$$1$$ ? ($callbackInfo$$1_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-start"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-end"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollLeft$) : ($callbackInfo$$1_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default", 
          $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-top"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-bottom"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollTop$);
          var $buttonInfo$$1$$ = {};
          $buttonInfo$$1$$.$prevButtonStyleClass$ = $callbackInfo$$1_prevStyleClass$$;
          $buttonInfo$$1$$.$nextButtonStyleClass$ = $nextStyleClass$$;
          $buttonInfo$$1$$.$prevButtonIcon$ = $prevIcon$$;
          $buttonInfo$$1$$.$nextButtonIcon$ = $nextIcon$$;
          $callbackInfo$$1_prevStyleClass$$ = {};
          $callbackInfo$$1_prevStyleClass$$.$addResizeListener$ = $oj$$29$$.$DomUtils$.$addResizeListener$;
          $callbackInfo$$1_prevStyleClass$$.$removeResizeListener$ = $oj$$29$$.$DomUtils$.$removeResizeListener$;
          "enabled" !== $oj$$29$$.$Config$.$getAutomationMode$() && ($callbackInfo$$1_prevStyleClass$$.$scrollFunc$ = $animateScrollFunc_contentParentElem$$);
          $animateScrollFunc_contentParentElem$$ = null;
          $options$$318$$.contentParent && ($animateScrollFunc_contentParentElem$$ = $$$$27$$($options$$318$$.contentParent)[0]);
          this.$_cbCommon$ = new $ConveyorBeltCommon$$($elem$$76_oldIsInit$$[0], $orientation$$1$$, $animateScrollFunc_contentParentElem$$, this.$_bRTL$, $buttonInfo$$1$$, $callbackInfo$$1_prevStyleClass$$);
        }
        this.$_cbCommon$.$setup$($children$$7_isInit$$);
        $children$$7_isInit$$ && ($children$$7_isInit$$ = $elem$$76_oldIsInit$$.find(".oj-conveyorbelt-overflow-indicator"), this.$_setupButtonMouseStyles$($children$$7_isInit$$));
      } else {
        $elem$$76_oldIsInit$$ = !1, this.$_needsSetup$ && ($elem$$76_oldIsInit$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$children$$7_isInit$$ || $elem$$76_oldIsInit$$];
      }
    }, _destroy:function() {
      this.$_destroyCBCommon$();
      this.element.removeClass("oj-conveyorbelt oj-component");
      this._super();
    }, _setOption:function($key$$141$$, $value$$241$$, $flags$$35$$) {
      var $bRecreate$$1$$ = !1;
      switch($key$$141$$) {
        case "containerParent":
        ;
        case "orientation":
          $bRecreate$$1$$ = !0;
          break;
        case "disabled":
          $oj$$29$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
      }
      $bRecreate$$1$$ && this.$_destroyCBCommon$();
      this._super($key$$141$$, $value$$241$$, $flags$$35$$);
      $bRecreate$$1$$ && this.$_setup$(!0);
    }, $_destroyCBCommon$:function() {
      var $cbCommon$$1$$ = this.$_cbCommon$;
      $cbCommon$$1$$ && (this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace), $cbCommon$$1$$.destroy());
      this.$_cbCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$3$$ = document.createElement("div"), $elem$$79_style$$16$$ = $div$$3$$.style;
      $elem$$79_style$$16$$.width = "10px";
      $elem$$79_style$$16$$.height = "10px";
      $elem$$79_style$$16$$ = this.element[0];
      $elem$$79_style$$16$$.appendChild($div$$3$$);
      var $bCanCalcSizes$$ = !1;
      try {
        $bCanCalcSizes$$ = 0 < $div$$3$$.offsetWidth && 0 < $div$$3$$.offsetHeight;
      } catch ($e$$94$$) {
      }
      $elem$$79_style$$16$$.removeChild($div$$3$$);
      return $bCanCalcSizes$$;
    }, $_setupButtonMouseStyles$:function($element$$105$$) {
      $element$$105$$.on("mousedown" + this.eventNamespace, function($event$$354$$) {
        $$$$27$$($event$$354$$.currentTarget).addClass("oj-active");
      }).on("mouseup" + this.eventNamespace, function($event$$355$$) {
        $$$$27$$($event$$355$$.currentTarget).removeClass("oj-active");
      }).on("mouseenter" + this.eventNamespace, function($currTarget$$2_event$$356$$) {
        $currTarget$$2_event$$356$$ = $currTarget$$2_event$$356$$.currentTarget;
        $$$$27$$($currTarget$$2_event$$356$$).addClass("oj-hover");
        $$$$27$$($currTarget$$2_event$$356$$).removeClass("oj-default");
      }).on("mouseleave" + this.eventNamespace, function($currTarget$$3_event$$357$$) {
        $currTarget$$3_event$$357$$ = $currTarget$$3_event$$357$$.currentTarget;
        $$$$27$$($currTarget$$3_event$$357$$).removeClass("oj-hover");
        $$$$27$$($currTarget$$3_event$$357$$).removeClass("oj-active");
        $$$$27$$($currTarget$$3_event$$357$$).addClass("oj-default");
      });
    }, $_createIcon$:function($iconStyleClass$$) {
      var $span$$ = document.createElement("span");
      $span$$.setAttribute("class", "oj-component-icon " + $iconStyleClass$$);
      return $span$$;
    }, $_animateScrollLeft$:function($elem$$80$$, $value$$242$$, $duration$$11$$, $onEndFunc$$1$$) {
      var $props$$15$$ = {};
      $props$$15$$.scrollLeft = $value$$242$$;
      $$$$27$$($elem$$80$$).animate($props$$15$$, $duration$$11$$, "swing", $onEndFunc$$1$$);
    }, $_animateScrollTop$:function($elem$$81$$, $value$$243$$, $duration$$12$$, $onEndFunc$$2$$) {
      var $props$$16$$ = {};
      $props$$16$$.scrollTop = $value$$243$$;
      $$$$27$$($elem$$81$$).animate($props$$16$$, $duration$$12$$, "swing", $onEndFunc$$2$$);
    }, getNodeBySubId:function($locator$$35_subId$$35$$) {
      if (null == $locator$$35_subId$$35$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$35_subId$$35$$ = $locator$$35_subId$$35$$.subId;
      return "oj-conveyorbelt-start-overflow-indicator" === $locator$$35_subId$$35$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0] : "oj-conveyorbelt-end-overflow-indicator" === $locator$$35_subId$$35$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0] : "oj-conveyorbelt-top-overflow-indicator" === $locator$$35_subId$$35$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0] : "oj-conveyorbelt-bottom-overflow-indicator" === $locator$$35_subId$$35$$ ? 
      this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0] : null;
    }});
    var $_WARNING_DISABLED_OPTION$$ = "JET ConveyorBelt: 'disabled' option not supported";
  })();
});
