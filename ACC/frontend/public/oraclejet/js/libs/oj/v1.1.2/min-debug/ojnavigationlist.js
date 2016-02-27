/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojbutton", "ojs/ojmenu", "ojs/ojlistview"], function($oj$$20$$, $$$$19$$) {
  $oj$$20$$.$DefaultNavListHandler$ = function $$oj$$20$$$$DefaultNavListHandler$$($widget$$9$$, $root$$9$$, $component$$17$$) {
    this.$m_widget$ = $widget$$9$$;
    this.$m_root$ = $root$$9$$;
    this.$m_component$ = $component$$17$$;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Expand$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Collapse$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleExpandAndCollapseKeys$$() {
    return!1;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ModifyListItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$45$$, $highlight$$1$$) {
    $elem$$45$$.attr("aria-selected", $highlight$$1$$ ? "true" : "false");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$BeforeRenderComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleArrowKeys$$($keyCode$$9$$, $isExtend$$1$$, $event$$265$$) {
    return $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsArrowKey$$($keyCode$$10$$) {
    return $_ojNavigationListView$$.$superclass$.$IsArrowKey$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$GetState$$($item$$58$$) {
    return $_ojNavigationListView$$.$superclass$.$GetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$SetState$$($item$$59$$, $state$$10$$) {
    $_ojNavigationListView$$.$superclass$.$SetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$UpdateActiveDescendant$ = function $$oj$$20$$$$DefaultNavListHandler$$$$UpdateActiveDescendant$$($elem$$46$$) {
    $_ojNavigationListView$$.$superclass$.$UpdateActiveDescendant$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.Init = function $$oj$$20$$$$DefaultNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsSelectable$$($item$$60$$) {
    return $$$$19$$($item$$60$$)[0].hasAttribute("aria-selected");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$DefaultNavListHandler$$$$CollapseCurrentList$$() {
  };
  $oj$$20$$.$HorizontalNavListHandler$ = function $$oj$$20$$$$HorizontalNavListHandler$$($widget$$10$$, $root$$10$$, $component$$18$$) {
    $oj$$20$$.$HorizontalNavListHandler$.$superclass$.constructor.call(this, $widget$$10$$, $root$$10$$, $component$$18$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$HorizontalNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.HorizontalNavListHandler");
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$47$$, $highlight$$2$$) {
    $elem$$47$$.attr("aria-pressed", $highlight$$2$$ ? "true" : "false");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$HandleArrowKeys$$($keyCode$$11_processed$$3$$, $isExtend$$2$$, $event$$266$$) {
    $keyCode$$11_processed$$3$$ === $$$$19$$.ui.keyCode.LEFT ? $keyCode$$11_processed$$3$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.DOWN : $$$$19$$.ui.keyCode.UP : $keyCode$$11_processed$$3$$ === $$$$19$$.ui.keyCode.RIGHT && ($keyCode$$11_processed$$3$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.UP : $$$$19$$.ui.keyCode.DOWN);
    $keyCode$$11_processed$$3$$ = $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.call(this.$m_widget$, $keyCode$$11_processed$$3$$, $isExtend$$2$$, $event$$266$$);
    "top" === this.$m_widget$.$ojContext$.options.edge && this.$m_widget$.$m_active$.elem[0].scrollIntoView(!1);
    return $keyCode$$11_processed$$3$$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsArrowKey$$($keyCode$$12$$) {
    return $keyCode$$12$$ === this.$m_widget$.$UP_KEY$ || $keyCode$$12$$ === this.$m_widget$.$DOWN_KEY$ || $keyCode$$12$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$12$$ === this.$m_widget$.$RIGHT_KEY$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ModifyListItem$$($$item$$1$$) {
    $$item$$1$$.attr("role", "button");
    $$item$$1$$.attr("aria-pressed", "false");
    $$item$$1$$.removeAttr("aria-selected");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$BeforeRenderComplete$$() {
    var $self$$122$$ = this;
    this.$m_widget$.element.attr("role", "toolbar");
    this.$m_widget$.element.find("." + this.$m_widget$.$getItemElementStyleClass$()).each(function($index$$172$$) {
      0 < $index$$172$$ && $$$$19$$(this).before('\x3cli role\x3d"separator" class\x3d"' + $self$$122$$.$m_widget$.$DIVIDER_STYLE_CLASS$ + '"\x3e\x3c/li\x3e');
    });
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsSelectable$$($item$$62$$) {
    return $$$$19$$($item$$62$$)[0].hasAttribute("aria-pressed");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.Init = function $$oj$$20$$$$HorizontalNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$CollapsibleNavListHandler$ = function $$oj$$20$$$$CollapsibleNavListHandler$$($widget$$11$$, $root$$11$$, $component$$19$$) {
    $oj$$20$$.$CollapsibleNavListHandler$.$superclass$.constructor.call(this, $widget$$11$$, $root$$11$$, $component$$19$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$CollapsibleNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.CollapsibleNavListHandler");
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.Init = function $$oj$$20$$$$CollapsibleNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Expand$$($groupItem$$14$$, $animate$$7$$) {
    $_ojNavigationListView$$.$superclass$.$AnimateExpand$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Collapse$$($item$$64$$, $animate$$8$$) {
    $_ojNavigationListView$$.$superclass$.$AnimateCollapse$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$HandleExpandAndCollapseKeys$$($event$$267$$, $keyCode$$13$$, $current$$12$$, $currentItemKey$$1$$) {
    var $isGroupItem$$ = 0 < $current$$12$$.children("." + this.$m_widget$.$getGroupStyleClass$()).length;
    if ($keyCode$$13$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$13$$ === this.$m_widget$.$RIGHT_KEY$) {
      return $keyCode$$13$$ === this.$m_widget$.$LEFT_KEY$ && !this.$m_widget$.$isRtl$() || $keyCode$$13$$ === this.$m_widget$.$RIGHT_KEY$ && this.$m_widget$.$isRtl$() ? this.$m_widget$.$GetState$($current$$12$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$12$$, $event$$267$$, !0, $currentItemKey$$1$$, !0, !0) : this.$m_widget$.$GetState$($current$$12$$) === this.$m_widget$.$STATE_COLLAPSED$ && this.$m_widget$.$ExpandItem$($current$$12$$, $event$$267$$, !0, $currentItemKey$$1$$, 
      !0, !0, !0), !0;
    }
    if ($isGroupItem$$ && ($keyCode$$13$$ === $$$$19$$.ui.keyCode.ENTER || $keyCode$$13$$ === $$$$19$$.ui.keyCode.SPACE)) {
      if (0 >= $current$$12$$.length) {
        return;
      }
      this.$m_widget$.$GetState$($current$$12$$) === this.$m_widget$.$STATE_COLLAPSED$ ? this.$m_widget$.$ExpandItem$($current$$12$$, null, !0, $currentItemKey$$1$$, !0, !0, !0) : this.$m_widget$.$GetState$($current$$12$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$12$$, null, !0, $currentItemKey$$1$$, !0, !0);
      return!0;
    }
    return!1;
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$SlidingNavListHandler$ = function $$oj$$20$$$$SlidingNavListHandler$$($widget$$12$$, $root$$12$$, $component$$20$$) {
    $oj$$20$$.$SlidingNavListHandler$.$superclass$.constructor.call(this, $widget$$12$$, $root$$12$$, $component$$20$$);
    this.$m_expanded$ = [];
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$SlidingNavListHandler$, $oj$$20$$.$CollapsibleNavListHandler$, "oj.SlidingNavListHandler");
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-slider oj-navigationlist-vertical");
    this.$_toolbar$.remove();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimation$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimation$$($item$$66$$, $isMovingNext$$, $focusableElement$$) {
    var $self$$123$$ = this, $list_root$$ = this.$m_widget$.$getRootElement$(), $contentWidth$$ = $list_root$$.outerWidth() / 2, $isRtl$$1$$ = this.$m_widget$.$isRtl$();
    $isMovingNext$$ || ($contentWidth$$ *= -1);
    $isRtl$$1$$ ? ($list_root$$.css({"margin-right":$contentWidth$$}), $list_root$$.animate({"margin-right":"0px"}, 400, "swing", function() {
      $self$$123$$.$_slideAnimationComplete$($item$$66$$, $isMovingNext$$, $focusableElement$$);
    })) : ($list_root$$.css({"margin-left":$contentWidth$$}), $list_root$$.animate({"margin-left":"0px"}, 400, "swing", function() {
      $self$$123$$.$_slideAnimationComplete$($item$$66$$, $isMovingNext$$, $focusableElement$$);
    }));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimationComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimationComplete$$($item$$67$$, $isMovingNext$$1$$, $focusableElement$$1_key$$114$$) {
    null !== this.$m_widget$.$m_contentHandler$ && ($focusableElement$$1_key$$114$$ && ($focusableElement$$1_key$$114$$ = this.$m_widget$.$GetKey$($focusableElement$$1_key$$114$$[0]), this.$m_widget$.$SetOption$("currentItem", $focusableElement$$1_key$$114$$)), $isMovingNext$$1$$ ? this.$m_widget$.$AnimateExpandComplete$($item$$67$$.children("." + this.$m_widget$.$getGroupStyleClass$())) : this.$m_widget$.$AnimateCollapseComplete$($item$$67$$.children("." + this.$m_widget$.$getGroupStyleClass$())));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Expand$$($groupItem$$15$$, $animate$$9$$) {
    var $target$$82$$ = $$$$19$$($groupItem$$15$$).parents(".oj-navigationlist-item-element:first"), $sublist$$3$$ = $target$$82$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentLabel$$, $nextFocusableItem$$ = null, $currentListRoot$$ = $target$$82$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    if (0 < $currentListRoot$$.length) {
      $currentListRoot$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      $target$$82$$.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      var $nextFocusableItem$$ = $sublist$$3$$.find("." + this.$m_widget$.$getItemElementStyleClass$() + ":eq(0)"), $listOfParents$$ = $target$$82$$.parentsUntil($currentListRoot$$, "ul"), $listOfParents$$ = $currentListRoot$$.is(this.$m_widget$.element) ? $listOfParents$$.get().concat($currentListRoot$$.get()) : $listOfParents$$.get(), $self$$124$$ = this, $itemNode$$, $listOfParents$$ = $$$$19$$($listOfParents$$.reverse());
      $listOfParents$$.each(function($i$$305$$, $parentList$$) {
        $parentLabel$$ = $$$$19$$($parentList$$).is($self$$124$$.$m_widget$.element) ? $self$$124$$.$m_widget$.$getRootLabel$() : $self$$124$$.$m_widget$.$getItemLabel$($$$$19$$($parentList$$).parent());
        $itemNode$$ = $i$$305$$ === $listOfParents$$.length - 1 ? $target$$82$$ : $$$$19$$($listOfParents$$.get($i$$305$$ + 1)).parent();
        $self$$124$$.$_addItemToHviewMenu$($self$$124$$.$m_widget$.$GetKey$($itemNode$$[0]), $self$$124$$.$m_widget$.$getItemLabel$($itemNode$$), $parentLabel$$);
        $self$$124$$.$m_expanded$.push($itemNode$$);
      });
    }
    $animate$$9$$ ? this.$_slideAnimation$($target$$82$$, !0, $nextFocusableItem$$) : this.$_slideAnimationComplete$($target$$82$$, !0, $nextFocusableItem$$);
    this.$m_widget$.element.focus();
    $target$$82$$.siblings().attr("aria-hidden", "true");
    $target$$82$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).attr("aria-hidden", "true");
    $sublist$$3$$.removeAttr("aria-hidden");
    $groupItem$$15$$.css("display", "");
    $target$$82$$.addClass("oj-skipfocus");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Collapse$$($target$$83$$, $animate$$10$$) {
    var $currentList$$ = $target$$83$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentlist$$ = $target$$83$$.parent();
    $target$$83$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).removeAttr("aria-hidden");
    $currentList$$.attr("aria-hidden", "true");
    $target$$83$$.siblings().removeAttr("aria-hidden");
    $target$$83$$.removeClass("oj-skipfocus");
    $target$$83$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    0 === $target$$83$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$).length && ($parentlist$$.closest("." + this.$m_widget$.$getItemElementStyleClass$()).addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$), this.$m_widget$.element.is($parentlist$$) && this.$m_widget$.element.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$));
    $animate$$10$$ ? this.$_slideAnimation$($target$$83$$, !1, $currentList$$.parent()) : this.$_slideAnimationComplete$($target$$83$$, !1, $currentList$$.parent());
    $target$$83$$.siblings().attr("role", "menuitem");
    this.$_removeItemFromHviewMenu$();
    this.$m_widget$.element.focus();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$48$$, $highlight$$3$$) {
    var $itemContent$$5$$ = this.$m_widget$.$getItemContentElement$($elem$$48$$);
    $highlight$$3$$ ? $itemContent$$5$$.attr("aria-describedby", "selectedLabel") : $itemContent$$5$$.removeAttr("aria-describedby");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$GetState$$($expanded$$8_item$$68$$) {
    $expanded$$8_item$$68$$ = $expanded$$8_item$$68$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).attr("aria-expanded");
    return "true" === $expanded$$8_item$$68$$ ? this.$m_widget$.$STATE_EXPANDED$ : "false" === $expanded$$8_item$$68$$ ? this.$m_widget$.$STATE_COLLAPSED$ : this.$m_widget$.$STATE_NONE$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$SetState$$($item$$69$$, $state$$11$$) {
    $state$$11$$ === this.$m_widget$.$STATE_EXPANDED$ ? ($item$$69$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).attr("aria-expanded", "true"), $item$$69$$.removeClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$).addClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$)) : $state$$11$$ === this.$m_widget$.$STATE_COLLAPSED$ && ($item$$69$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).attr("aria-expanded", 
    "false"), $item$$69$$.removeClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$).addClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$UpdateActiveDescendant$ = function $$oj$$20$$$$SlidingNavListHandler$$$$UpdateActiveDescendant$$($elem$$49$$) {
    this.$m_widget$.element.attr("aria-activedescendant", this.$m_widget$.$getItemContentElement$($elem$$49$$).attr("id"));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$ModifyListItem$$($$item$$2$$, $itemContent$$6$$) {
    $itemContent$$6$$.attr("role", "menuitem");
    $itemContent$$6$$.attr("id") || $itemContent$$6$$.uniqueId();
    $$item$$2$$.attr("role", "presentation");
    var $groupItems$$2$$ = $$item$$2$$.children("." + this.$m_widget$.$getGroupStyleClass$());
    0 < $groupItems$$2$$.length && ($itemContent$$6$$.attr("aria-haspopup", "true"), $groupItems$$2$$.attr("role", "menu"), $groupItems$$2$$.css("display", ""));
    $$item$$2$$.removeAttr("aria-expanded");
    $itemContent$$6$$.attr("aria-expanded", "false");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$BeforeRenderComplete$$() {
    this.$m_widget$.element.attr("role", "menu");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.Init = function $$oj$$20$$$$SlidingNavListHandler$$$Init$($opts$$25$$) {
    this.$m_root$.addClass("oj-navigationlist-slider oj-navigationlist-vertical");
    $opts$$25$$.element.addClass("oj-navigationlist-current");
    this.$_buildSlidingNavListHeader$();
    this.$_initializeHierarchicalView$();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_buildSlidingNavListHeader$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_buildSlidingNavListHeader$$() {
    var $vSeparator$$, $selectedLabel$$;
    this.$_toolbar$ = $$$$19$$(document.createElement("div"));
    this.$_toolbar$.addClass("oj-navigationlist-toolbar");
    this.$_previousLink$ = $$$$19$$(document.createElement("a"));
    this.$_prevIcon$ = $$$$19$$(document.createElement("span"));
    this.$_prevIcon$.addClass("oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext").attr("role", "img").attr("alt", this.$m_component$.$getTranslatedString$("previousIcon"));
    this.$_prevIcon$.hide();
    this.$_previousLink$.addClass("oj-navigationlist-previous-link").attr("tabindex", "-1").append(this.$_prevIcon$);
    this.$_headerLabel$ = $$$$19$$(document.createElement("label"));
    this.$_headerLabel$.addClass("oj-navigationlist-current-header").text(this.$m_widget$.$getRootLabel$());
    $vSeparator$$ = $$$$19$$(document.createElement("span"));
    $vSeparator$$.attr("role", "separator").attr("aria-orientation", "vertical").addClass("oj-navigationlist-toolbar-separator");
    this.$_hviewBtn$ = $$$$19$$(document.createElement("button"));
    this.$_hviewBtn$.addClass("oj-button-half-chrome oj-navigationlist-hierarchical-button");
    this.$_hviewMenu$ = $$$$19$$(document.createElement("ul"));
    this.$_hviewMenu$.addClass("oj-navigationlist-hierarchical-menu").hide();
    $selectedLabel$$ = $$$$19$$(document.createElement("label"));
    $selectedLabel$$.addClass("oj-helper-hidden-accessible").attr("aria-hidden", "true").attr("id", "selectedLabel");
    $selectedLabel$$.text(this.$m_component$.$getTranslatedString$("selectedLabel"));
    this.$_previousLink$.append(this.$_headerLabel$);
    this.$_toolbar$.append(this.$_previousLink$).append($vSeparator$$).append(this.$_hviewBtn$).append(this.$_hviewMenu$).append($selectedLabel$$);
    this.$m_root$.prepend(this.$_toolbar$);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$SlidingNavListHandler$$$$CollapseCurrentList$$() {
    var $current$$13$$ = this.$m_expanded$.pop();
    $current$$13$$ && this.$m_widget$.$CollapseItem$($current$$13$$, null, !0, null, !0, !0);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_initializeHierarchicalView$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_initializeHierarchicalView$$() {
    var $self$$126$$ = this, $menuid$$ = this.$_hviewMenu$.uniqueId().attr("id");
    this.$_hviewMenu$.ojMenu({openOptions:{position:{my:"end top", at:"end bottom"}}, select:function($event$$268$$, $ui$$12$$) {
      for (var $itemsToRemove$$ = $ui$$12$$.item.nextAll(), $currentKey$$, $item$$70$$, $expandedItems$$ = $self$$126$$.$m_expanded$, $targetItemKey$$ = $ui$$12$$.item.data("key"), $i$$306$$ = $expandedItems$$.length - 1;0 <= $i$$306$$ && ($item$$70$$ = $expandedItems$$[$i$$306$$], $currentKey$$ = $self$$126$$.$m_widget$.$GetKey$($item$$70$$[0]), $self$$126$$.$m_widget$.$CollapseItem$($$$$19$$($item$$70$$), null, !0, $currentKey$$, !0, !0), $targetItemKey$$ !== $currentKey$$);$i$$306$$--) {
      }
      $itemsToRemove$$.remove();
      $ui$$12$$.item.remove();
      $self$$126$$.$_hviewMenu$.ojMenu("refresh");
    }});
    this.$_hviewBtn$.ojButton({label:this.$m_component$.$getTranslatedString$("hierMenuBtnLabel"), display:"icons", icons:{start:"oj-fwk-icon oj-hier-icon"}, menu:"#" + $menuid$$});
    this.$_hviewBtn$.ojButton("option", "disabled", !0);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_addItemToHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_addItemToHviewMenu$$($itemKey$$, $label$$8$$, $parentLabel$$1$$) {
    if (this.$_hviewBtn$) {
      var $itemsinTree_menuItemLabel$$ = this.$_hviewMenu$.find("li").length, $menuListItem$$ = $$$$19$$(document.createElement("li")), $menuItem$$ = $$$$19$$(document.createElement("a"));
      $menuItem$$.attr("href", "#");
      $menuListItem$$.append($menuItem$$);
      if (0 < $itemsinTree_menuItemLabel$$) {
        for (var $i$$307$$ = 0;$i$$307$$ < $itemsinTree_menuItemLabel$$;$i$$307$$++) {
          0 < $i$$307$$ && $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));
        }
        $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"));
      }
      $itemsinTree_menuItemLabel$$ = $$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");
      $itemsinTree_menuItemLabel$$.text($parentLabel$$1$$);
      $menuItem$$.append($itemsinTree_menuItemLabel$$);
      $menuListItem$$.data("key", $itemKey$$);
      this.$_hviewMenu$.append($menuListItem$$);
      this.$_hviewMenu$.ojMenu("refresh");
      this.$_hviewBtn$.ojButton("option", "disabled", !1);
      this.$_prevIcon$.show();
      this.$_previousLink$.attr("tabindex", "0");
      this.$_headerLabel$.text($label$$8$$);
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_removeItemFromHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_removeItemFromHviewMenu$$() {
    if (this.$_hviewBtn$) {
      var $removed$$2$$ = this.$_hviewMenu$.find("li").last().remove();
      this.$_hviewMenu$.ojMenu("refresh");
      0 === this.$_hviewMenu$.children("li").length ? (this.$_hviewBtn$.ojButton("option", "disabled", !0), this.$_prevIcon$.hide(), this.$_previousLink$.attr("tabindex", "-1"), this.$_headerLabel$.text(this.$m_widget$.$getRootLabel$())) : this.$_headerLabel$.text($removed$$2$$.children("a").text());
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$RestoreItem$$($item$$71$$, $itemContent$$7$$) {
    $item$$71$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    $itemContent$$7$$.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden");
  };
  var $_ojNavigationListView$$ = function($SuperClass$$2$$, $methods$$3$$) {
    function $constructor$$3$$() {
    }
    $oj$$20$$.$Object$.$createSubclass$($constructor$$3$$, $SuperClass$$2$$, "");
    $$$$19$$.extend($constructor$$3$$.prototype, $methods$$3$$);
    return $constructor$$3$$;
  }($oj$$20$$.$_ojListView$, {$ITEM_CONTENT_STYLE_CLASS$:"oj-navigationlist-item-content", $EXPANDED_STYLE_CLASS$:"oj-expanded", $COLLAPSED_STYLE_CLASS$:"oj-collapsed", $SLIDING_NAVLIST_CURRENT_STYLE_CLASS$:"oj-navigationlist-current", $DIVIDER_STYLE_CLASS$:"oj-navigationlist-divider", $_CATEGORY_DIVIDER_STYLE_CLASS$:"oj-navigationlist-category-divider", $_ITEM_LABEL_STYLE_CLASS$:"oj-navigationlist-item-label", $_ICON_ONLY_STYLE_CLASS$:"oj-navigationlist-icon-only", $_ITEM_ICON_STYLE_CLASS$:"oj-navigationlist-item-icon", 
  $_HORIZONTAL_NAVLIST_STYLE_CLASS$:"oj-navigationlist-horizontal", $_NAVLIST_HAS_ICONS$:"oj-navigationlist-has-icons", $_NAVLIST_ITEM_HAS_NO_ICON$:"oj-navigationlist-item-no-icon", $_NAVLIST_ITEM_TITLE$:"oj-navigationlist-item-title", $_NAVLIST_STYLE_CLASS$:"oj-navigationlist", $_NAVLIST_TOUCH_STYLE_CLASS$:"oj-navigationlist-touch", $_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$:"oj-navigationlist-listview-container", $getItemLabel$:function($itemContent$$8_target$$84$$) {
    $itemContent$$8_target$$84$$ = this.$getItemContentElement$($itemContent$$8_target$$84$$);
    return $itemContent$$8_target$$84$$.is("a") ? $$$$19$$.trim($itemContent$$8_target$$84$$.text()) : $$$$19$$.trim($itemContent$$8_target$$84$$.find("." + this.$_NAVLIST_ITEM_TITLE$).text());
  }, $getItemContentElement$:function($item$$72$$) {
    var $itemContent$$9$$ = $item$$72$$.children("." + this.$ITEM_CONTENT_STYLE_CLASS$);
    0 === $itemContent$$9$$.length && ($itemContent$$9$$ = $item$$72$$.children("." + this.$getGroupItemStyleClass$()).children("." + this.$ITEM_CONTENT_STYLE_CLASS$), 0 === $itemContent$$9$$.length && ($itemContent$$9$$ = $item$$72$$.children("." + this.$getGroupItemStyleClass$()).children(":not(." + this.$getExpandIconStyleClass$() + "):not(." + this.$getCollapseIconStyleClass$() + ")")));
    return $itemContent$$9$$;
  }, $isRtl$:function() {
    return "rtl" === this.$ojContext$.$_GetReadingDirection$();
  }, $renderComplete$:function() {
    this.$m_listHandler$.$BeforeRenderComplete$();
    $_ojNavigationListView$$.$superclass$.$renderComplete$.apply(this, arguments);
  }, $_restoreContent$:function($items$$7_list$$2$$) {
    $items$$7_list$$2$$ = $items$$7_list$$2$$.children();
    for (var $i$$308$$ = 0;$i$$308$$ < $items$$7_list$$2$$.length;$i$$308$$++) {
      var $item$$73$$ = $items$$7_list$$2$$[$i$$308$$], $item$$73$$ = $$$$19$$($item$$73$$);
      if ($item$$73$$.hasClass(this.$DIVIDER_STYLE_CLASS$)) {
        $item$$73$$.remove();
        break;
      }
      $item$$73$$.removeAttr("role");
      $item$$73$$.removeAttr("aria-disabled");
      var $itemContent$$10$$ = this.$getItemContentElement$($item$$73$$);
      $itemContent$$10$$.removeClass(this.$ITEM_CONTENT_STYLE_CLASS$).removeClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$).removeAttr("aria-haspopup");
      $item$$73$$.removeAttr("role").removeClass("oj-default").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed");
      $itemContent$$10$$.children("." + this.$_ITEM_LABEL_STYLE_CLASS$).contents().unwrap();
      var $sublist$$5$$ = $item$$73$$.children("ul");
      0 < $sublist$$5$$.length ? ($sublist$$5$$.removeAttr("style").removeClass(this.$_NAVLIST_HAS_ICONS$).removeAttr("aria-hidden"), this.$m_listHandler$.$RestoreItem$($item$$73$$, $itemContent$$10$$, $sublist$$5$$), this.$_restoreContent$($sublist$$5$$)) : this.$m_listHandler$.$RestoreItem$($item$$73$$, $itemContent$$10$$);
    }
  }, $IsNodeEditableOrClickable$:function($node$$52$$) {
    return $node$$52$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$52$$.hasClass(this.$getExpandIconStyleClass$()) || $node$$52$$.hasClass(this.$getCollapseIconStyleClass$()) ? !1 : $_ojNavigationListView$$.$superclass$.$IsNodeEditableOrClickable$.apply(this, arguments);
  }, $IsElementEditableOrClickable$:function($node$$53$$) {
    return $node$$53$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && !$node$$53$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$53$$.hasClass("oj-component");
  }, $_prepareListViewOptions$:function($navlistOptions$$) {
    var $opts$$26$$ = {drillMode:"none" !== $navlistOptions$$.drillMode ? "collapsible" : "none", selection:null !== $navlistOptions$$.selection ? [$navlistOptions$$.selection] : [], item:$navlistOptions$$.item, data:$navlistOptions$$.data, selectionMode:"single"};
    $opts$$26$$.element = this.$_list$;
    $opts$$26$$.item.focusable = function $$opts$$26$$$item$focusable$($context$$75$$) {
      return $$$$19$$($context$$75$$.data).is("li") ? !$$$$19$$($context$$75$$.data).hasClass("oj-disabled") : !$$$$19$$($context$$75$$.parentElement).hasClass("oj-disabled");
    };
    return $opts$$26$$ = $$$$19$$.extend($$$$19$$.extend({}, $navlistOptions$$), $opts$$26$$);
  }, $getRootLabel$:function() {
    return this.$ojContext$.options.rootLabel ? this.$ojContext$.options.rootLabel : this.$ojContext$.$getTranslatedString$("defaultRootLabel");
  }, $SetAriaProperties$:function() {
    var $ariaLabelId$$ = this.$ojContext$.element.attr("aria-labelledby");
    $ariaLabelId$$ ? (this.element.attr("aria-labelledby", $ariaLabelId$$), this.$ojContext$.element.removeAttr("aria-labelledby")) : this.element.attr("aria-label", this.$getRootLabel$());
    $_ojNavigationListView$$.$superclass$.$SetAriaProperties$.apply(this, arguments);
  }, $UnsetAriaProperties$:function() {
    this.element.attr("aria-labelledby") && (this.$ojContext$.element.attr("aria-labelledby", this.element.attr("aria-labelledby")), this.element.removeAttr("aria-labelledby"));
    this.element.attr("aria-label") && this.element.removeAttr("aria-label");
    $_ojNavigationListView$$.$superclass$.$UnsetAriaProperties$.apply(this, arguments);
  }, $init$:function($navlistopts_opts$$28$$) {
    var $self$$127$$ = this, $element$$102_listViewContainer$$ = $navlistopts_opts$$28$$.$ojContext$.element;
    $element$$102_listViewContainer$$.addClass(this.$_NAVLIST_STYLE_CLASS$);
    $oj$$20$$.$DomUtils$.$isTouchSupported$() && $element$$102_listViewContainer$$.addClass(this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$_list$ = $element$$102_listViewContainer$$.children("ul:first");
    0 === this.$_list$.length && (this.$_list$ = $$$$19$$(document.createElement("ul")), $element$$102_listViewContainer$$.append(this.$_list$));
    $element$$102_listViewContainer$$ = $$$$19$$(document.createElement("div"));
    $element$$102_listViewContainer$$.addClass(this.$_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$);
    this.$_list$.wrap($element$$102_listViewContainer$$);
    $navlistopts_opts$$28$$ = this.$_prepareListViewOptions$($navlistopts_opts$$28$$);
    $_ojNavigationListView$$.$superclass$.$init$.call(this, $navlistopts_opts$$28$$);
    this.element.removeClass("oj-component-initnode");
    this.$ojContext$._on(this.$ojContext$.element, {"click .oj-navigationlist-previous-link":function() {
      $self$$127$$.$_collapseCurrentList$();
    }, "keydown .oj-navigationlist-previous-link":function($event$$270$$) {
      $event$$270$$.keyCode === $$$$19$$.ui.keyCode.ENTER && $self$$127$$.$_collapseCurrentList$();
    }, "keydown .oj-navigationlist-element":function($event$$271$$) {
      $event$$271$$.keyCode !== $$$$19$$.ui.keyCode.ESCAPE || $event$$271$$.isDefaultPrevented() || $self$$127$$.$_collapseCurrentList$();
    }});
  }, $_collapseCurrentList$:function() {
    this.$m_listHandler$.$CollapseCurrentList$();
  }, $_initListHandler$:function() {
    var $drillMode$$ = this.$ojContext$.options.drillMode, $edge$$ = this.$ojContext$.options.edge;
    this.$m_listHandler$ = "sliding" === $drillMode$$ ? new $oj$$20$$.$SlidingNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "collapsible" === $drillMode$$ ? new $oj$$20$$.$CollapsibleNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "none" === $drillMode$$ && "top" === $edge$$ ? new $oj$$20$$.$HorizontalNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : new $oj$$20$$.$DefaultNavListHandler$(this, this.$ojContext$.element, this.$ojContext$);
    this.$m_listHandler$.Init(this.options);
  }, $afterCreate$:function() {
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.$afterCreate$.apply(this, arguments);
  }, $GetContainerStyleClass$:function() {
    return "oj-navigationlist-listview";
  }, $GetStyleClass$:function() {
    return "oj-navigationlist-element";
  }, $getItemStyleClass$:function() {
    return "oj-navigationlist-item";
  }, $getItemElementStyleClass$:function() {
    return "oj-navigationlist-item-element";
  }, $getCollapseIconStyleClass$:function() {
    return "oj-navigationlist-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-navigationlist-expand-icon";
  }, $getDepthStyleClass$:function($depth$$12$$) {
    return "oj-navigationlist-depth-" + $depth$$12$$;
  }, $getGroupItemStyleClass$:function() {
    return "oj-navigationlist-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-navigationlist-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-navigationlist-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $AnimateExpand$:function($groupItem$$16$$, $animate$$11$$) {
    this.$m_listHandler$.$Expand$($groupItem$$16$$, $animate$$11$$);
  }, $AnimateCollapse$:function($item$$74$$, $animate$$12$$) {
    this.$m_listHandler$.$Collapse$($item$$74$$, $animate$$12$$);
  }, $HandleArrowKeys$:function($keyCode$$14$$, $isExtend$$3$$, $event$$272$$) {
    return this.$m_listHandler$.$HandleArrowKeys$($keyCode$$14$$, $isExtend$$3$$, $event$$272$$);
  }, $IsArrowKey$:function($keyCode$$15$$) {
    return this.$m_listHandler$.$IsArrowKey$($keyCode$$15$$);
  }, $GetState$:function($item$$75$$) {
    return this.$m_listHandler$.$GetState$($item$$75$$);
  }, $SetState$:function($item$$76$$, $state$$12$$) {
    this.$m_listHandler$.$SetState$($item$$76$$, $state$$12$$);
  }, $UpdateActiveDescendant$:function($elem$$50$$) {
    this.$m_listHandler$.$UpdateActiveDescendant$($elem$$50$$);
  }, $HandleFocus$:function($event$$273$$) {
    $_ojNavigationListView$$.$superclass$.$HandleFocus$.apply(this, arguments);
    this.$HighlightActive$();
  }, $HandleBlur$:function($event$$274$$) {
    $_ojNavigationListView$$.$superclass$.$HandleBlur$.apply(this, arguments);
    this.$UnhighlightActive$();
  }, $HighlightActive$:function() {
    this.element.is(":focus") && $_ojNavigationListView$$.$superclass$.$HighlightActive$.apply(this, arguments);
  }, $HandleMouseClick$:function($event$$275$$) {
    var $item$$77$$ = this.$FindItem$($$$$19$$($event$$275$$.target));
    null == $item$$77$$ || 0 === $item$$77$$.length || this.$SkipFocus$($item$$77$$) || (this.$GetKey$($item$$77$$[0]), this.$IsNodeEditableOrClickable$($$$$19$$($event$$275$$.target)) || $item$$77$$.hasClass("oj-disabled") || ($_ojNavigationListView$$.$superclass$.$HandleMouseClick$.apply(this, arguments), $event$$275$$.preventDefault(), this.element.focus()));
  }, $HandleKeyDown$:function($event$$276$$) {
    var $item$$78_key$$115_keyCode$$16$$;
    $item$$78_key$$115_keyCode$$16$$ = $event$$276$$.keyCode;
    this.$m_listHandler$.$HandleExpandAndCollapseKeys$($event$$276$$, $item$$78_key$$115_keyCode$$16$$, this.$m_active$.elem, this.$m_active$.key);
    $item$$78_key$$115_keyCode$$16$$ === $$$$19$$.ui.keyCode.HOME || $item$$78_key$$115_keyCode$$16$$ === $$$$19$$.ui.keyCode.END ? ($item$$78_key$$115_keyCode$$16$$ = $item$$78_key$$115_keyCode$$16$$ === $$$$19$$.ui.keyCode.HOME ? this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").first().closest("." + this.$getItemElementStyleClass$()) : this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").last().closest("." + this.$getItemElementStyleClass$()), $item$$78_key$$115_keyCode$$16$$ = 
    this.$GetKey$($item$$78_key$$115_keyCode$$16$$[0]), this.$SetOption$("currentItem", $item$$78_key$$115_keyCode$$16$$), $event$$276$$.preventDefault()) : !0 === this.$HandleSelectionOrActiveKeyDown$($event$$276$$) && $event$$276$$.preventDefault();
  }, $ToggleSelection$:function($event$$277$$, $keepCurrentSelection$$1$$, $skipIfNotSelected$$1$$) {
    var $item$$79$$ = this.$m_active$.elem;
    this.$IsSelectable$($item$$79$$[0]) && (this.$_isSelected$($item$$79$$) || this.$_fireBeforeSelectEvent$($event$$277$$, $item$$79$$) && $_ojNavigationListView$$.$superclass$.$ToggleSelection$.apply(this, arguments));
  }, $HighlightUnhighlightElem$:function($elem$$51$$, $style$$6$$, $highlight$$4$$) {
    var $group$$4$$;
    $elem$$51$$ = $$$$19$$($elem$$51$$);
    "oj-selected" === $style$$6$$ && this.$m_listHandler$.$UpdateAriaPropertiesOnSelectedItem$($elem$$51$$, $highlight$$4$$);
    $group$$4$$ = $elem$$51$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$4$$.length && ($elem$$51$$ = $$$$19$$($group$$4$$[0]));
    $highlight$$4$$ ? $elem$$51$$.addClass($style$$6$$) : $elem$$51$$.removeClass($style$$6$$);
    $elem$$51$$.hasClass("oj-selected") || $elem$$51$$.hasClass("oj-hover") || $elem$$51$$.hasClass("oj-disabled") ? $elem$$51$$.removeClass("oj-default") : $elem$$51$$.addClass("oj-default");
  }, $IsSelectable$:function($item$$80$$) {
    return!$$$$19$$($item$$80$$).hasClass("oj-disabled") && this.$m_listHandler$.$IsSelectable$($item$$80$$);
  }, $Trigger$:function($type$$83$$, $event$$278$$, $ui$$13$$) {
    return "ready" !== $type$$83$$ ? this.$ojContext$._trigger($type$$83$$, $event$$278$$, $ui$$13$$) : !0;
  }, $SetOption$:function($key$$116$$, $value$$228$$, $flags$$26$$) {
    "selection" === $key$$116$$ ? $value$$228$$ && 0 < $value$$228$$.length ? this.$ojContext$.option($key$$116$$, $value$$228$$[0], $flags$$26$$) : this.$ojContext$.option($key$$116$$, null, $flags$$26$$) : this.$ojContext$.option($key$$116$$, $value$$228$$, $flags$$26$$);
    this.options[$key$$116$$] = $value$$228$$;
  }, $ShouldRefresh$:function($options$$301$$) {
    return null != $options$$301$$.data || null != $options$$301$$.drillMode || null != $options$$301$$.item || null != $options$$301$$.display || null != $options$$301$$.edge;
  }, $setOptions$:function($options$$302$$, $flags$$27$$) {
    if (void 0 !== $options$$302$$.selection) {
      var $value$$229$$ = $options$$302$$.selection;
      if ($value$$229$$) {
        var $item$$81_selection$$12$$ = this.$GetOption$("selection");
        if (!$item$$81_selection$$12$$ || 0 === $item$$81_selection$$12$$.length || $item$$81_selection$$12$$[0] !== $value$$229$$) {
          if ($item$$81_selection$$12$$ = this.$FindElementByKey$($value$$229$$), this.$IsSelectable$($item$$81_selection$$12$$) && this.$_fireBeforeSelectEvent$(null, $$$$19$$($item$$81_selection$$12$$))) {
            return $_ojNavigationListView$$.$superclass$.$setOptions$.call(this, {selection:[$value$$229$$]}, $flags$$27$$);
          }
        }
      } else {
        return $_ojNavigationListView$$.$superclass$.$setOptions$.call(this, {selection:[]}, $flags$$27$$);
      }
    } else {
      return $_ojNavigationListView$$.$superclass$.$setOptions$.call(this, $options$$302$$, $flags$$27$$);
    }
    return!1;
  }, $GetOption$:function($key$$117$$) {
    var $optionValue$$1$$ = this.$ojContext$.option($key$$117$$);
    return "selection" === $key$$117$$ ? $optionValue$$1$$ ? [$optionValue$$1$$] : [] : null === $optionValue$$1$$ ? this.options[$key$$117$$] : $optionValue$$1$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$20$$.Components.$getWidgetConstructor$(this.$ojContext$.element);
  }, $SelectAndFocus$:function($item$$82$$, $event$$279$$) {
    if (!$item$$82$$.hasClass("oj-disabled") && this.$IsSelectable$($item$$82$$[0])) {
      var $key$$118$$ = this.$GetKey$($item$$82$$[0]);
      this.$SetOption$("currentItem", $key$$118$$);
      this.$_isSelected$($item$$82$$) || this.$_fireBeforeSelectEvent$($event$$279$$, $item$$82$$) && $_ojNavigationListView$$.$superclass$.$SelectAndFocus$.apply(this, arguments);
    }
  }, $_fireBeforeSelectEvent$:function($event$$280$$, $item$$83$$) {
    var $key$$119$$ = this.$GetKey$($item$$83$$[0]);
    return this.$Trigger$("beforeSelect", $event$$280$$, {item:$item$$83$$, key:$key$$119$$});
  }, $_isSelected$:function($item$$84_key$$120$$) {
    var $selection$$13$$;
    $selection$$13$$ = this.$GetOption$("selection");
    $item$$84_key$$120$$ = this.$GetKey$($item$$84_key$$120$$[0]);
    return-1 < $selection$$13$$.indexOf($item$$84_key$$120$$) ? !0 : !1;
  }, $itemRenderComplete$:function($elem$$52$$, $context$$76$$) {
    var $$item$$3$$ = $$$$19$$($elem$$52$$);
    if ($$item$$3$$.hasClass(this.$_CATEGORY_DIVIDER_STYLE_CLASS$)) {
      $$item$$3$$.removeClass(this.$getItemElementStyleClass$()), $$item$$3$$.children().remove(), $$item$$3$$.attr("role", "separator");
    } else {
      var $collapseIconClass$$1_icon$$2$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$1_groupIcon$$ = this.$getExpandIconStyleClass$(), $itemIconClass$$ = this.$_ITEM_ICON_STYLE_CLASS$, $groupItem$$17$$ = $$item$$3$$.children("." + this.$getGroupItemStyleClass$()), $itemContent$$11$$;
      0 < $groupItem$$17$$.length ? ($itemContent$$11$$ = $groupItem$$17$$.children(":not(." + $expandIconClass$$1_groupIcon$$ + "):not(." + $collapseIconClass$$1_icon$$2$$ + ")"), $expandIconClass$$1_groupIcon$$ = $groupItem$$17$$.children("." + $expandIconClass$$1_groupIcon$$), 0 === $expandIconClass$$1_groupIcon$$.length && ($expandIconClass$$1_groupIcon$$ = $groupItem$$17$$.children("." + $collapseIconClass$$1_icon$$2$$)), $expandIconClass$$1_groupIcon$$.insertAfter($groupItem$$17$$.children("." + 
      this.$_ITEM_LABEL_STYLE_CLASS$)), $expandIconClass$$1_groupIcon$$.attr("aria-hidden", "true"), $$item$$3$$.hasClass("oj-disabled") && $groupItem$$17$$.addClass("oj-disabled")) : $itemContent$$11$$ = $$item$$3$$.children().first();
      $itemContent$$11$$.addClass(this.$ITEM_CONTENT_STYLE_CLASS$);
      $collapseIconClass$$1_icon$$2$$ = $itemContent$$11$$.wrapInner('\x3cspan class\x3d"' + this.$_ITEM_LABEL_STYLE_CLASS$ + '"\x3e\x3c/span\x3e').find("." + $itemIconClass$$);
      0 < $collapseIconClass$$1_icon$$2$$.length ? ($collapseIconClass$$1_icon$$2$$.insertBefore($collapseIconClass$$1_icon$$2$$.parent()), "icons" === this.$ojContext$.options.display && (this.$ojContext$.element.addClass(this.$_ICON_ONLY_STYLE_CLASS$), $collapseIconClass$$1_icon$$2$$.attr("title") || $collapseIconClass$$1_icon$$2$$.attr("title", this.$getItemLabel$($$item$$3$$))), $$item$$3$$.closest("ul").addClass(this.$_NAVLIST_HAS_ICONS$)) : $itemContent$$11$$.addClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$);
      $$item$$3$$.hasClass("oj-disabled") ? $$item$$3$$.attr("aria-disabled", "true") : 0 < $groupItem$$17$$.length ? $groupItem$$17$$.addClass("oj-default") : $$item$$3$$.addClass("oj-default");
      this.$m_listHandler$.$ModifyListItem$($$item$$3$$, $itemContent$$11$$);
      $_ojNavigationListView$$.$superclass$.$itemRenderComplete$.apply(this, arguments);
    }
  }, getNodeBySubId:function($item$$85_key$$121_locator$$27$$) {
    var $subId$$28$$;
    if (null === $item$$85_key$$121_locator$$27$$) {
      return this.element ? this.element[0] : null;
    }
    $subId$$28$$ = $item$$85_key$$121_locator$$27$$.subId;
    return "oj-navigationlist-item" === $subId$$28$$ ? ($item$$85_key$$121_locator$$27$$ = $item$$85_key$$121_locator$$27$$.key, $item$$85_key$$121_locator$$27$$ = this.$FindElementByKey$($item$$85_key$$121_locator$$27$$)) : "oj-navigationlist-previous-link" === $subId$$28$$ ? this.$m_listHandler$.$_previousLink$ ? this.$m_listHandler$.$_previousLink$[0] : null : "oj-navigationlist-hierarchical-button" === $subId$$28$$ ? this.$m_listHandler$.$_hviewBtn$ ? this.$m_listHandler$.$_hviewBtn$[0] : null : 
    "oj-navigationlist-hierarchical-menu" === $subId$$28$$ ? this.$m_listHandler$.$_hviewMenu$ ? this.$m_listHandler$.$_hviewMenu$[0] : null : null;
  }, refresh:function() {
    this.$_resetNavlist$();
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.refresh.apply(this, arguments);
  }, $_resetNavlist$:function() {
    this.$ojContext$.element.removeClass(this.$_ICON_ONLY_STYLE_CLASS$);
    this.$_restoreContent$(this.element);
    this.$m_listHandler$.$Destroy$();
  }, destroy:function() {
    this.$_resetNavlist$();
    $_ojNavigationListView$$.$superclass$.destroy.apply(this, arguments);
    this.$_list$.unwrap();
    this.$_list$.is(":empty") && this.$_list$.remove();
    this.$ojContext$.element.removeClass(this.$_NAVLIST_STYLE_CLASS$ + " " + this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$ojContext$._off(this.element, "click");
    this.$ojContext$._off(this.element, "focus");
    this.$ojContext$._off(this.element, "blur");
    this.$ojContext$._off(this.element, "mouseover");
    this.$ojContext$._off(this.element, "mousein");
    this.$ojContext$._off(this.element, "mouseout");
    this.$ojContext$._off(this.element, "keydown");
  }});
  (function() {
    $oj$$20$$.$__registerWidget$("oj.ojNavigationList", $$$$19$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, drillMode:"none", edge:"start", rootLabel:null, selection:null, expanded:"auto", data:null, display:"all", item:{renderer:null, selectable:!0}, beforeSelect:null, beforeCollapse:null, beforeCurrentItem:null, collapse:null, beforeExpand:null, expand:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$navlist$.$afterCreate$();
    }, $_NotifyContextMenuGesture$:function($menu$$8$$, $event$$281$$, $eventType$$41$$) {
      this.$navlist$.$notifyContextMenuGesture$($menu$$8$$, $event$$281$$, $eventType$$41$$);
    }, $_setup$:function() {
      for (var $key$$122_opts$$29$$ in this.options) {
        this.$_validateOptionValues$($key$$122_opts$$29$$, this.options[$key$$122_opts$$29$$]);
      }
      this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, this.options.edge);
      this.$navlist$ = new $_ojNavigationListView$$;
      $key$$122_opts$$29$$ = {$ojContext$:this};
      $key$$122_opts$$29$$ = $$$$19$$.extend(this.options, $key$$122_opts$$29$$);
      this.$navlist$.$init$($key$$122_opts$$29$$);
    }, getNodeBySubId:function($locator$$28$$) {
      return this.$navlist$.getNodeBySubId($locator$$28$$);
    }, expand:function($key$$123$$, $vetoable$$2$$) {
      this.$navlist$.$expandKey$($key$$123$$, $vetoable$$2$$, !0);
    }, collapse:function($key$$124$$, $vetoable$$3$$) {
      this.$navlist$.$collapseKey$($key$$124$$, $vetoable$$3$$, !0);
    }, getExpanded:function() {
      return this.$navlist$.getExpanded();
    }, $_validateOptionsForIconsOnlyAndHorizontalList$:function($drillMode$$1$$, $display$$1$$, $edge$$1$$) {
      if ("none" !== $drillMode$$1$$) {
        if ("icons" === $display$$1$$) {
          throw "Icon only navigation list should have drillMode set to 'none'.";
        }
        if ("top" === $edge$$1$$) {
          throw "Horizontal navigation list should have drillMode set to 'none'.";
        }
      }
    }, $_validateOptionValues$:function($key$$125$$, $value$$230$$) {
      var $valid$$9$$ = !0;
      "drillMode" === $key$$125$$ ? $valid$$9$$ = "none" === $value$$230$$ || "collapsible" === $value$$230$$ || "sliding" === $value$$230$$ : "display" === $key$$125$$ ? $valid$$9$$ = "all" === $value$$230$$ || "icons" === $value$$230$$ : "edge" === $key$$125$$ && ($valid$$9$$ = "top" === $value$$230$$ || "start" === $value$$230$$);
      if (!$valid$$9$$) {
        throw "Invalid value: " + $value$$230$$ + " for key: " + $key$$125$$;
      }
    }, _setOption:function($key$$126$$, $value$$231$$) {
      this.$_validateOptionValues$($key$$126$$, $value$$231$$);
      switch($key$$126$$) {
        case "drillMode":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$($value$$231$$, this.options.display, this.options.edge);
          break;
        case "display":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, $value$$231$$, this.options.edge);
          break;
        case "edge":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, $value$$231$$);
      }
      this._super($key$$126$$, $value$$231$$);
    }, _setOptions:function($options$$303$$, $flags$$28$$) {
      var $needRefresh$$1$$ = this.$navlist$.$setOptions$($options$$303$$, $flags$$28$$);
      this._super($options$$303$$, $flags$$28$$);
      $needRefresh$$1$$ && this.$navlist$.refresh();
    }, $_NotifyDetached$:function() {
      this.$navlist$.$notifyDetached$();
    }, $_NotifyShown$:function() {
    }, refresh:function() {
      this._super();
      this.$navlist$.refresh();
    }, _destroy:function() {
      this.$navlist$.destroy();
      this._super();
      delete this.$navlist$;
    }});
  })();
});
