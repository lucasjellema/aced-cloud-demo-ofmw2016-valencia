/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "hammerjs", "ojs/ojdatacollection-common", "ojs/ojinputtext", "ojs/ojjquery-hammer"], function($oj$$10$$, $$$$10$$, $compCore$$, $Hammer$$2$$) {
  (function() {
    $oj$$10$$.$__registerWidget$("oj.ojPagingControl", $$$$10$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{data:null, overflow:"fit", pageSize:25, pageOptions:{layout:["auto"], type:"numbers", maxPageLinks:6, orientation:"horizontal"}, loadMoreOptions:{maxCount:500}, mode:"page", ready:null, translations:{}}, $_BUNDLE_KEY$:{$_LABEL_ACC_PAGING$:"labelAccPaging", $_LABEL_ACC_NAV_FIRST_PAGE$:"labelAccNavFirstPage", $_LABEL_ACC_NAV_LAST_PAGE$:"labelAccNavLastPage", 
    $_LABEL_ACC_NAV_NEXT_PAGE$:"labelAccNavNextPage", $_LABEL_ACC_NAV_PREVIOUS_PAGE$:"labelAccNavPreviousPage", $_LABEL_ACC_NAV_PAGE$:"labelAccNavPage", $_LABEL_LOAD_MORE$:"labelLoadMore", $_LABEL_LOAD_MORE_MAX_ROWS$:"labelLoadMoreMaxRows", $_LABEL_NAV_INPUT_PAGE$:"labelNavInputPage", $_LABEL_NAV_INPUT_PAGE_MAX$:"labelNavInputPageMax", $_LABEL_NAV_INPUT_PAGE_SUMMARY$:"labelNavInputPageSummary", $_MSG_ITEM_RANGE_CURRENT$:"msgItemRangeCurrent", $_MSG_ITEM_RANGE_ITEMS$:"msgItemRangeItems", $_MSG_ITEM_RANGE_OF$:"msgItemRangeOf", 
    $_TIP_NAV_INPUT_PAGE$:"tipNavInputPage", $_TIP_NAV_PAGE_LINK$:"tipNavPageLink", $_TIP_NAV_NEXT_PAGE$:"tipNavNextPage", $_TIP_NAV_PREVIOUS_PAGE$:"tipNavPreviousPage", $_TIP_NAV_FIRST_PAGE$:"tipNavFirstPage", $_TIP_NAV_LAST_PAGE$:"tipNavLastPage", $_ERR_PAGE_INVALID_SUMMARY$:"pageInvalid.summary", $_ERR_PAGE_INVALID_DETAIL$:"pageInvalid.detail", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"dataInvalidType.summary", $_ERR_DATA_INVALID_TYPE_DETAIL$:"dataInvalidType.detail", $_ERR_MAXPAGELINKS_INVALID_SUMMARY$:"maxPageLinksInvalid.summary", 
    $_ERR_MAXPAGELINKS_INVALID_DETAIL$:"maxPageLinksInvalid.detail"}, $_MARKER_STYLE_CLASSES$:{$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon-nocontext", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected"}, $_CSS_CLASSES$:{$_PAGING_CONTROL_CLASS$:"oj-pagingcontrol", $_PAGING_CONTROL_ACC_LABEL_CLASS$:"oj-pagingcontrol-acc-label", $_PAGING_CONTROL_CONTENT_CLASS$:"oj-pagingcontrol-content", $_PAGING_CONTROL_LOAD_MORE_CLASS$:"oj-pagingcontrol-loadmore", 
    $_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$:"oj-pagingcontrol-loadmore-link", $_PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS$:"oj-pagingcontrol-loadmore-max-rows", $_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$:"oj-pagingcontrol-loadmore-range", $_PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS$:"oj-pagingcontrol-loadmore-range-current", $_PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS$:"oj-pagingcontrol-loadmore-range-max", $_PAGING_CONTROL_NAV_CLASS$:"oj-pagingcontrol-nav", $_PAGING_CONTROL_NAV_ARROW_CLASS$:"oj-pagingcontrol-nav-arrow", 
    $_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$:"oj-pagingcontrol-nav-arrow-section", $_PAGING_CONTROL_NAV_PAGE_CLASS$:"oj-pagingcontrol-nav-page", $_PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS$:"oj-pagingcontrol-nav-page-ellipsis", $_PAGING_CONTROL_NAV_DOT_CLASS$:"oj-pagingcontrol-nav-dot", $_PAGING_CONTROL_NAV_DOT_BULLET_CLASS$:"oj-pagingcontrol-nav-dot-bullet", $_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-page-acc-label", $_PAGING_CONTROL_NAV_LABEL_CLASS$:"oj-pagingcontrol-nav-label", 
    $_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$:"oj-pagingcontrol-nav-input-section", $_PAGING_CONTROL_NAV_INPUT_CLASS$:"oj-pagingcontrol-nav-input", $_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$:"oj-pagingcontrol-nav-input-max", $_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$:"oj-pagingcontrol-nav-input-summary", $_PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS$:"oj-pagingcontrol-nav-input-summary-current", $_PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS$:"oj-pagingcontrol-nav-input-summary-max", $_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$:"oj-pagingcontrol-nav-pages-section", 
    $_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$:"oj-pagingcontrol-nav-pages-links", $_PAGING_CONTROL_NAV_FIRST_CLASS$:"oj-pagingcontrol-nav-first", $_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-first-acc-label", $_PAGING_CONTROL_NAV_PREVIOUS_CLASS$:"oj-pagingcontrol-nav-previous", $_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-previous-acc-label", $_PAGING_CONTROL_NAV_NEXT_CLASS$:"oj-pagingcontrol-nav-next", $_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-next-acc-label", 
    $_PAGING_CONTROL_NAV_LAST_CLASS$:"oj-pagingcontrol-nav-last", $_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-last-acc-label", $_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$:"oj-pagingcontrol-nav-first-icon", $_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$:"oj-pagingcontrol-nav-previous-icon", $_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$:"oj-pagingcontrol-nav-next-icon", $_PAGING_CONTROL_NAV_LAST_ICON_CLASS$:"oj-pagingcontrol-nav-last-icon", $_PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-first-vertical-icon", 
    $_PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-previous-vertical-icon", $_PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-next-vertical-icon", $_PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-last-vertical-icon", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"}, $_DATA_ATTR_PAGE_NUM$:"data-oj-pagenum", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_TAB_INDEX$:"tabindex", 
    $_MODE$:{$_LOAD_MORE$:"loadMore", $_PAGE$:"page"}, $_PAGE_OPTION_LAYOUT$:{$_AUTO$:"auto", $_ALL$:"all", $_INPUT$:"input", $_RANGE_TEXT$:"rangeText", $_PAGES$:"pages", $_NAV$:"nav"}, $_PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS$:6, $_TYPE$:{$_NUMBERS$:"numbers", $_DOTS$:"dots"}, firstPage:function() {
      return null != this.$_getData$() ? this.$_invokeDataPage$(0, !1) : this.$_getRejectPromise$();
    }, previousPage:function() {
      if (null != this.$_getData$()) {
        var $page$$ = this.$_getCurrentPage$();
        if (0 < $page$$) {
          return this.$_invokeDataPage$($page$$ - 1, !1);
        }
      }
      return this.$_getRejectPromise$();
    }, nextPage:function() {
      if (null != this.$_getData$()) {
        var $page$$1$$ = this.$_getCurrentPage$();
        if ($page$$1$$ + 1 <= this.$_getTotalPages$() - 1 || 0 > this.$_getTotalPages$()) {
          return this.$_invokeDataPage$($page$$1$$ + 1, !1);
        }
      }
      return this.$_getRejectPromise$();
    }, lastPage:function() {
      return null != this.$_getData$() && 0 < this.$_getTotalPages$() ? this.$_invokeDataPage$(this.$_getTotalPages$() - 1, !1) : this.$_getRejectPromise$();
    }, page:function($page$$2$$) {
      return null != this.$_getData$() && ($page$$2$$ <= this.$_getTotalPages$() || 0 > this.$_getTotalPages$()) ? this.$_invokeDataPage$($page$$2$$, !1) : this.$_getRejectPromise$();
    }, loadNext:function() {
      return null != this.$_getData$() ? this.$_invokeDataFetchNext$() : this.$_getRejectPromise$();
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, getNodeBySubId:function($index$$109_locator$$10$$) {
      if (null == $index$$109_locator$$10$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$4$$ = $index$$109_locator$$10$$.subId, $retval$$ = null;
      "oj-pagingcontrol-nav-input" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$)[0] : "oj-pagingcontrol-nav-input-max" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$)[0] : "oj-pagingcontrol-nav-input-summary" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$)[0] : 
      "oj-pagingcontrol-nav-input-summary-current" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS$)[0] : "oj-pagingcontrol-nav-input-summary-max" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS$)[0] : "oj-pagingcontrol-nav-first" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$)[0] : 
      "oj-pagingcontrol-nav-next" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$)[0] : "oj-pagingcontrol-nav-previous" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$)[0] : "oj-pagingcontrol-nav-last" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$)[0] : 
      "oj-pagingcontrol-nav-page" === $subId$$4$$ ? ($index$$109_locator$$10$$ = $index$$109_locator$$10$$.index, $retval$$ = this.$_getPagingControlContainer$().find("[" + this.$_DATA_ATTR_PAGE_NUM$ + "\x3d" + $index$$109_locator$$10$$ + "]")[0]) : "oj-pagingcontrol-load-more-link" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$)[0] : "oj-pagingcontrol-load-more-range" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + 
      this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$)[0] : "oj-pagingcontrol-load-more-range-current" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS$)[0] : "oj-pagingcontrol-load-more-range-max" === $subId$$4$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS$)[0] : "oj-pagingcontrol-load-more-max-rows" === $subId$$4$$ && 
      ($retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS$)[0]);
      void 0 === $retval$$ && ($retval$$ = null);
      return $retval$$;
    }, _ComponentCreate:function() {
      this._super();
      this.$_registerDataSourceEventListeners$();
      this.$_draw$();
      this.$_registerResizeListener$(this.$_getPagingControlContainer$());
      this._on(this.$_events$);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_registerSwipeHandler$();
      this.$_invokeDataPage$(0, !0);
    }, _destroy:function() {
      this.$_unregisterDataSourceEventListeners$();
      this.$_unregisterSwipeHandler$();
    }, $_draw$:function() {
      var $options$$254$$ = this.options;
      this.element.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CLASS$);
      this.element.addClass(this.$_MARKER_STYLE_CLASSES$.$_WIDGET$);
      this.$_createPagingControlAccLabel$();
      this.$_createPagingControlContent$();
      this.$_mode$ = $options$$254$$.mode;
      $options$$254$$.mode == this.$_MODE$.$_LOAD_MORE$ ? (this.$_createPagingControlLoadMore$(), this.$_createPagingControlLoadMoreLink$(), this.$_createPagingControlLoadMoreRange$()) : this.$_createPagingControlNav$();
    }, $_events$:{"click .oj-pagingcontrol-loadmore-link":function($event$$83$$) {
      this.loadNext();
      $event$$83$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-dot":function($event$$84$$) {
      var $pageNum$$ = $$$$10$$($event$$84$$.currentTarget).attr("data-oj-pagenum");
      this.page($pageNum$$);
      $event$$84$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-page":function($event$$85$$) {
      var $pageNum$$1$$ = $$$$10$$($event$$85$$.currentTarget).attr("data-oj-pagenum");
      this.page($pageNum$$1$$);
      $event$$85$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-first":function($event$$86$$) {
      $$$$10$$($event$$86$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || this.firstPage();
      $event$$86$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-previous":function($event$$87$$) {
      $$$$10$$($event$$87$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || this.previousPage();
      $event$$87$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-next":function($event$$88$$) {
      $$$$10$$($event$$88$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || this.nextPage();
      $event$$88$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-last":function($event$$89$$) {
      $$$$10$$($event$$89$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || this.lastPage();
      $event$$89$$.preventDefault();
    }, "keypress .oj-pagingcontrol-nav-input":function($event$$90$$) {
      13 == $event$$90$$.which && $event$$90$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-first":function($event$$91$$) {
      $$$$10$$($event$$91$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$91$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$91$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-previous":function($event$$92$$) {
      $$$$10$$($event$$92$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$92$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$92$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-next":function($event$$93$$) {
      $$$$10$$($event$$93$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$93$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$93$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-last":function($event$$94$$) {
      $$$$10$$($event$$94$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$94$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$94$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-first":function($event$$95$$) {
      $$$$10$$($event$$95$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$95$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-previous":function($event$$96$$) {
      $$$$10$$($event$$96$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$96$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-next":function($event$$97$$) {
      $$$$10$$($event$$97$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$97$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-last":function($event$$98$$) {
      $$$$10$$($event$$98$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$98$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-first":function($event$$99$$) {
      $$$$10$$($event$$99$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$99$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-previous":function($event$$100$$) {
      $$$$10$$($event$$100$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$100$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-next":function($event$$101$$) {
      $$$$10$$($event$$101$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$101$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-last":function($event$$102$$) {
      $$$$10$$($event$$102$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$102$$.preventDefault();
    }}, $_refresh$:function() {
      this.$_data$ != this.options.data && (this.$_clearCachedDataMetadata$(), this.$_invokeDataPage$(0, !0));
      var $size$$12$$ = 0, $startIndex$$4$$ = 0;
      null != this.$_data$ && ($startIndex$$4$$ = this.$_data$.getStartItemIndex());
      null != this.$_data$ && 0 != this.$_data$.totalSize() && ($size$$12$$ = this.$_data$.getEndItemIndex() - $startIndex$$4$$ + 1);
      if (this.$_mode$ != this.options.mode) {
        this.$_mode$ = this.options.mode, this.options.mode == this.$_MODE$.$_LOAD_MORE$ ? this.$_refreshPagingControlLoadMore$($size$$12$$, $startIndex$$4$$) : this.$_refreshPagingControlNav$($size$$12$$, $startIndex$$4$$);
      } else {
        if (this.options.mode == this.$_MODE$.$_LOAD_MORE$) {
          var $data$$70$$ = this.$_getData$(), $pagingControlLoadMore$$ = this.$_getPagingControlLoadMore$();
          null != $data$$70$$ && $startIndex$$4$$ + $size$$12$$ == $data$$70$$.totalSize() ? $pagingControlLoadMore$$.css("display", "none") : this.$_refreshPagingControlLoadMore$($size$$12$$, $startIndex$$4$$);
        } else {
          this.$_refreshPagingControlNav$($size$$12$$, $startIndex$$4$$);
        }
      }
    }, _setOption:function($key$$55$$, $value$$172$$) {
      this._superApply(arguments);
      this.$_invokeDataPage$(0, !0);
      this.$_refresh$();
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearCachedDomLoadMore$:function() {
      this.$_cachedDomPagingControlLoadMoreRange$ = this.$_cachedDomPagingControlLoadMoreLink$ = this.$_cachedDomPagingControlLoadMore$ = null;
    }, $_clearCachedDomPagingControlNav$:function() {
      this.$_cachedDomPagingControlNavInputSummary$ = this.$_cachedDomPagingControlNavInput$ = this.$_cachedDomPagingControlNav$ = null;
    }, $_getCurrentPage$:function() {
      var $data$$71$$ = this.$_getData$(), $page$$3$$ = 0;
      null != $data$$71$$ && ($page$$3$$ = $data$$71$$.getPage());
      return $page$$3$$;
    }, $_getData$:function() {
      this.$_data$ || null == this.options.data || (this.$_data$ = this.options.data, this.$_registerDataSourceEventListeners$());
      return this.$_data$;
    }, $_getItemRange$:function($size$$13$$, $startIndex$$5$$) {
      var $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = $startIndex$$5$$, $itemRangeSpan$$ = $$$$10$$(document.createElement("span")), $itemRangeCurrentSpan$$ = $$$$10$$(document.createElement("span"));
      this.options.mode == this.$_MODE$.$_LOAD_MORE$ ? $itemRangeCurrentSpan$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS$) : $itemRangeCurrentSpan$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS$);
      var $itemRangeCurrentText_pageTo$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT$, {pageFrom:$itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$, pageTo:0});
      $itemRangeSpan$$.append($itemRangeCurrentSpan$$);
      if (null != $size$$13$$) {
        var $itemRangeCurrentText_pageTo$$ = parseInt($startIndex$$5$$, 10) + parseInt($size$$13$$, 10), $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = 0 < $itemRangeCurrentText_pageTo$$ ? $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ + 1 : 0, $data$$72_itemRangeItemsText$$ = this.$_getData$();
        if (null != $data$$72_itemRangeItemsText$$ && -1 != $data$$72_itemRangeItemsText$$.totalSize()) {
          var $itemRangeCurrentText_pageTo$$ = $itemRangeCurrentText_pageTo$$ > $data$$72_itemRangeItemsText$$.totalSize() ? $data$$72_itemRangeItemsText$$.totalSize() : $itemRangeCurrentText_pageTo$$, $itemRangeCurrentText_pageTo$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT$, {pageFrom:$itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$, pageTo:$itemRangeCurrentText_pageTo$$}), $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_OF$), 
          $itemRangeOfSpan$$ = $$$$10$$(document.createElement("span"));
          $itemRangeOfSpan$$.text(" " + $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ + " ");
          $itemRangeSpan$$.append($itemRangeOfSpan$$);
          $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = $$$$10$$(document.createElement("span"));
          this.options.mode == this.$_MODE$.$_LOAD_MORE$ ? $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS$) : $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS$);
          $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.text($data$$72_itemRangeItemsText$$.totalSize());
          $itemRangeSpan$$.append($itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$);
        } else {
          $itemRangeCurrentText_pageTo$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT$, {pageFrom:$itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$, pageTo:$itemRangeCurrentText_pageTo$$});
        }
        $data$$72_itemRangeItemsText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_ITEMS$);
        $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = $$$$10$$(document.createElement("span"));
        $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.text(" " + $data$$72_itemRangeItemsText$$);
        $itemRangeSpan$$.append($itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$);
      }
      $itemRangeCurrentSpan$$.text($itemRangeCurrentText_pageTo$$);
      return $itemRangeSpan$$;
    }, $_getMaxPageLinks$:function() {
      var $maxPageLinks$$ = this.options.pageOptions.maxPageLinks;
      this.options.pageOptions.type == this.$_TYPE$.$_DOTS$ ? $maxPageLinks$$ = Number.MAX_VALUE : $maxPageLinks$$ || ($maxPageLinks$$ = this.$_PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS$);
      return $maxPageLinks$$;
    }, $_getRejectPromise$:function() {
      return Promise.reject();
    }, $_getTotalPages$:function() {
      var $data$$73$$ = this.$_getData$(), $pageCount$$ = 0;
      null != $data$$73$$ && ($pageCount$$ = $data$$73$$.getPageCount());
      return $pageCount$$;
    }, $_handleDataFetchEnd$:function() {
      var $activeElement$$ = $$$$10$$(document.activeElement);
      if ($activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$)) {
        var $pageNum$$2$$ = $activeElement$$.attr("data-oj-pagenum"), $self$$60$$ = this;
        setTimeout(function() {
          0 <= $pageNum$$2$$ && $self$$60$$.$_getPagingControlContent$().find("div[data-oj-pagenum\x3d" + $pageNum$$2$$ + "]").focus();
        }, 100);
      } else {
        $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$) ? ($self$$60$$ = this, setTimeout(function() {
          $self$$60$$.$_getPagingControlContent$().find("." + $self$$60$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$) ? ($self$$60$$ = this, setTimeout(function() {
          $self$$60$$.$_getPagingControlContent$().find("." + $self$$60$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$) ? ($self$$60$$ = this, setTimeout(function() {
          $self$$60$$.$_getPagingControlContent$().find("." + $self$$60$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$) ? ($self$$60$$ = this, setTimeout(function() {
          $self$$60$$.$_getPagingControlContent$().find("." + $self$$60$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$) && ($self$$60$$ = this, setTimeout(function() {
          $self$$60$$.$_getPagingControlContent$().find("." + $self$$60$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$).focus();
        }, 100));
      }
      this.$_queueRefresh$();
    }, $_handleDataPage$:function($event$$104$$) {
      $event$$104$$.page != $event$$104$$.previousPage && this.$_queueRefresh$();
    }, $_handleDataReset$:function() {
      this.$_invokeDataPage$(0, !1);
    }, $_handleDataRefresh$:function() {
      this.$_queueRefresh$();
    }, $_handleDataSort$:function($event$$107$$) {
      this.options.mode == this.$_MODE$.$_LOAD_MORE$ && this.$_handleDataReset$($event$$107$$);
    }, $_handleDataRowAdd$:function($event$$108$$) {
      this.options.mode == this.$_MODE$.$_PAGE$ && this.$_isOperationOnCurrentPage$($event$$108$$) ? this.$_invokeDataPage$(this.$_getCurrentPage$(), !0) : this.$_queueRefresh$();
    }, $_handleDataRowRemove$:function($event$$109$$) {
      0 < this.$_getTotalPages$() && this.$_getCurrentPage$() > this.$_getTotalPages$() - 1 ? this.$_invokeDataPage$(this.$_getTotalPages$() - 1, !0) : this.$_isOperationOnCurrentPage$($event$$109$$) ? this.$_invokeDataPage$(this.$_getCurrentPage$(), !0) : this.$_queueRefresh$();
    }, $_handlePageChange$:function($event$$110$$, $data$$74$$) {
      try {
        var $errSummary$$4_page$$5$$ = $data$$74$$.value;
        $errSummary$$4_page$$5$$ != this.$_getCurrentPage$() + 1 && !isNaN($errSummary$$4_page$$5$$) && 0 < $errSummary$$4_page$$5$$ && ($errSummary$$4_page$$5$$ = Math.round($errSummary$$4_page$$5$$), this.page($errSummary$$4_page$$5$$ - 1));
      } catch ($err$$9$$) {
        var $errSummary$$4_page$$5$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$), $errDetail$$4$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_DETAIL$);
        $oj$$10$$.$Logger$.error($errSummary$$4_page$$5$$ + "\n" + $errDetail$$4$$);
      }
    }, $_invokeDataPage$:function($page$$6$$, $async$$) {
      try {
        $page$$6$$ = parseInt($page$$6$$, 10);
      } catch ($e$$55$$) {
        return Promise.reject($e$$55$$);
      }
      this.$_currentStartIndex$ = 0;
      if ($async$$) {
        return this.$_queuePageFetch$($page$$6$$), Promise.resolve();
      }
      var $data$$75$$ = this.$_getData$(), $self$$61$$ = this;
      return new Promise(function($resolve$$34$$, $reject$$34$$) {
        null != $data$$75$$ ? $data$$75$$.setPage($page$$6$$, {pageSize:$self$$61$$.options.pageSize}).then(function() {
          $resolve$$34$$(null);
        }, function($error$$28$$) {
          $reject$$34$$($error$$28$$);
        }) : $resolve$$34$$(null);
      });
    }, $_invokeDataFetchNext$:function() {
      var $data$$76$$ = this.$_getData$(), $pageSize$$6$$ = this.options.pageSize;
      this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$6$$ : $pageSize$$6$$;
      if (-1 == $data$$76$$.totalSize() || $data$$76$$.totalSize() > this.$_currentStartIndex$) {
        var $self$$62$$ = this;
        return new Promise(function($resolve$$35$$, $reject$$35$$) {
          $data$$76$$.fetch({startIndex:$self$$62$$.$_currentStartIndex$, pageSize:$pageSize$$6$$}).then(function($result$$37$$) {
            $resolve$$35$$($result$$37$$);
          }, function() {
            $reject$$35$$(null);
          });
        });
      }
      return Promise.resolve();
    }, $_isOperationOnCurrentPage$:function($event$$111$$) {
      var $data$$77$$ = this.$_getData$(), $pageSize$$7$$ = this.options.pageSize, $i$$162$$;
      for ($i$$162$$ = 0;$i$$162$$ < $event$$111$$.indexes.length;$i$$162$$++) {
        var $rowIdx$$1$$ = $event$$111$$.indexes[$i$$162$$], $startIndex$$6$$ = $data$$77$$.getStartItemIndex();
        if ($rowIdx$$1$$ >= $startIndex$$6$$ && $rowIdx$$1$$ < $startIndex$$6$$ + $pageSize$$7$$) {
          return!0;
        }
      }
      return!1;
    }, $_queuePageFetch$:function($page$$7$$) {
      var $self$$63$$ = this;
      this.$_pendingPageFetch$ || (this.$_pageFetchCount$ = 0, this.$_pendingPageFetch$ = Promise.resolve());
      this.$_pageFetchCount$++;
      this.$_pageFetchLatestPage$ = $page$$7$$;
      this.$_pendingPageFetch$ = this.$_pendingPageFetch$.then(function() {
        $self$$63$$.$_pageFetchCount$--;
        if (0 == $self$$63$$.$_pageFetchCount$) {
          $self$$63$$.$_pendingPageFetch$ = void 0;
          var $data$$78$$ = $self$$63$$.$_getData$();
          null != $data$$78$$ && $data$$78$$.setPage($self$$63$$.$_pageFetchLatestPage$, {pageSize:$self$$63$$.options.pageSize});
        }
      }, function($error$$30$$) {
        $self$$63$$.$_pageFetchCount$--;
        0 == $self$$63$$.$_pageFetchCount$ && ($self$$63$$.$_pendingPageFetch$ = void 0, $oj$$10$$.$Logger$.error($error$$30$$));
      });
    }, $_queueRefresh$:function() {
      var $self$$64$$ = this;
      this.$_pendingRefreshes$ || (this.$_refreshCount$ = 0, this.$_pendingRefreshes$ = Promise.resolve());
      this.$_refreshCount$++;
      this.$_pendingRefreshes$ = this.$_pendingRefreshes$.then(function() {
        $self$$64$$.$_refreshCount$--;
        0 == $self$$64$$.$_refreshCount$ && ($self$$64$$.$_pendingRefreshes$ = void 0, $self$$64$$.$_refresh$(), $self$$64$$._trigger("ready"));
      }, function($error$$31$$) {
        $self$$64$$.$_refreshCount$--;
        0 == $self$$64$$.$_refreshCount$ && ($self$$64$$.$_pendingRefreshes$ = void 0, $oj$$10$$.$Logger$.error($error$$31$$));
      });
    }, $_refreshPagingControlLoadMore$:function($size$$14$$, $startIndex$$7$$) {
      var $pagingControlContent_rowCount$$1$$ = this.$_getPagingControlContent$();
      null != $pagingControlContent_rowCount$$1$$ && $pagingControlContent_rowCount$$1$$.empty();
      this.$_clearCachedDomLoadMore$();
      this.$_createPagingControlLoadMore$();
      $pagingControlContent_rowCount$$1$$ = -1;
      null != $size$$14$$ && ($pagingControlContent_rowCount$$1$$ = $startIndex$$7$$ + $size$$14$$);
      0 > $pagingControlContent_rowCount$$1$$ || $pagingControlContent_rowCount$$1$$ < this.options.loadMoreOptions.maxCount ? (this.$_createPagingControlLoadMoreLink$(), this.$_createPagingControlLoadMoreRange$($size$$14$$, $startIndex$$7$$)) : this.$_createPagingControlLoadMoreMaxRows$();
    }, $_refreshPagingControlNav$:function($size$$15$$, $startIndex$$8$$) {
      var $elementWidth_overflowOption$$ = this.options.overflow, $pagingControlContent$$1_pagingControlNavArrowSection$$ = this.$_getPagingControlContent$();
      null != $pagingControlContent$$1_pagingControlNavArrowSection$$ && (this.$_unregisterChildStateListeners$($pagingControlContent$$1_pagingControlNavArrowSection$$), this.$_unregisterSwipeHandler$(), $pagingControlContent$$1_pagingControlNavArrowSection$$.empty());
      this.$_clearCachedDomPagingControlNav$();
      this.$_createPagingControlNav$($size$$15$$, $startIndex$$8$$);
      this.$_registerSwipeHandler$();
      this.$_refreshPagingControlNavArrows$($size$$15$$, $startIndex$$8$$);
      if ("fit" == $elementWidth_overflowOption$$) {
        var $elementWidth_overflowOption$$ = this.element.width(), $pagingControlContent$$1_pagingControlNavArrowSection$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ = this.$_getPagingControlNavInputSection$(), $pagingControlNavPageLinks$$ = this.$_getPagingControlNavPageLinks$(), $pagingControlNavInputSummary$$ = this.$_getPagingControlNavInputSummary$(), $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ = null != $pagingControlContent$$1_pagingControlNavArrowSection$$ ? 
        $pagingControlContent$$1_pagingControlNavArrowSection$$[0].offsetWidth : 0, $pagingControlNavInputSectionWidth$$ = null != $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ ? $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$[0].offsetWidth : 0, $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ = null != $pagingControlNavPageLinks$$ ? $pagingControlNavPageLinks$$.width() : 0, $pagingControlNavInputSummaryWidth$$ = null != $pagingControlNavInputSummary$$ ? 
        $pagingControlNavInputSummary$$.width() : 0, $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ = $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ + $pagingControlNavInputSectionWidth$$ + $pagingControlNavInputSummaryWidth$$;
        $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ > $elementWidth_overflowOption$$ ? $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ - $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ <= $elementWidth_overflowOption$$ ? $pagingControlNavPageLinks$$.css("display", "none") : $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ - $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ - $pagingControlNavInputSummaryWidth$$ <= $elementWidth_overflowOption$$ ? 
        (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", "none"), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", "none")) : (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", "none"), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", "none"), null != $pagingControlContent$$1_pagingControlNavArrowSection$$ && $pagingControlContent$$1_pagingControlNavArrowSection$$.css("display", 
        "none")) : 0 < $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ && (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", ""), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", ""), null != $pagingControlContent$$1_pagingControlNavArrowSection$$ && $pagingControlContent$$1_pagingControlNavArrowSection$$.css("display", ""));
      }
    }, $_refreshPagingControlNavArrows$:function($size$$16$$) {
      var $pagingControlNavArrowSection$$1_pagingControlNavNext$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$);
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 0 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "0")));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 0 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, 
      "0")));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() - 
      1 || 0 >= this.$_getTotalPages$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "0")));
      ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$)) && 0 < $pagingControlNavArrowSection$$1_pagingControlNavNext$$.length && ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $$$$10$$($pagingControlNavArrowSection$$1_pagingControlNavNext$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() - 1 || 0 === this.$_getTotalPages$() || 0 > this.$_getTotalPages$() && 
      0 === $size$$16$$ ? ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr(this.$_TAB_INDEX$, "-1")) : ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr(this.$_TAB_INDEX$, "0")));
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$79$$ = this.$_getData$();
      if (null != $data$$79$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingModel$.$EventType$.PAGE, eventHandler:this.$_handleDataPage$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingModel$.$EventType$.PAGECOUNT, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        var $i$$163$$, $ev$$2$$;
        for ($i$$163$$ = 0;$i$$163$$ < this.$_dataSourceEventHandlers$.length;$i$$163$$++) {
          ($ev$$2$$ = $data$$79$$.on(this.$_dataSourceEventHandlers$[$i$$163$$].eventType, this.$_dataSourceEventHandlers$[$i$$163$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$163$$].eventHandler = $ev$$2$$);
        }
      }
    }, $_registerResizeListener$:function($element$$62$$) {
      if (!this.$_isResizeListenerAdded$) {
        var $self$$65$$ = this;
        $oj$$10$$.$DomUtils$.$addResizeListener$($element$$62$$[0], function() {
          $self$$65$$.$_queueRefresh$();
        }, 50);
        this.$_isResizeListenerAdded$ = !0;
      }
    }, $_registerSwipeHandler$:function() {
      if ($oj$$10$$.$DomUtils$.$isTouchSupported$() && this.options.mode == this.$_MODE$.$_PAGE$) {
        var $pagingControlNavArrowSection$$2$$ = this.$_getPagingControlNavArrowSection$();
        if (null != $pagingControlNavArrowSection$$2$$) {
          var $self$$66$$ = this;
          if ("vertical" == this.options.pageOptions.orientation) {
            var $options$$255$$ = {recognizers:[[$Hammer$$2$$.Swipe, {direction:$Hammer$$2$$.DIRECTION_VERTICAL}]]};
            this.$_hammerSwipeUp$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$255$$).on("swipeup", function($event$$112$$) {
              $event$$112$$.preventDefault();
              $self$$66$$.nextPage();
            });
            this.$_hammerSwipeDown$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$255$$).on("swipedown", function($event$$113$$) {
              $event$$113$$.preventDefault();
              $self$$66$$.previousPage();
            });
          } else {
            $options$$255$$ = {recognizers:[[$Hammer$$2$$.Swipe, {direction:$Hammer$$2$$.DIRECTION_HORIZONTAL}]]}, this.$_hammerSwipeLeft$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$255$$).on("swipeleft", function($event$$114$$) {
              $event$$114$$.preventDefault();
              $self$$66$$.nextPage();
            }), this.$_hammerSwipeRight$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$255$$).on("swiperight", function($event$$115$$) {
              $event$$115$$.preventDefault();
              $self$$66$$.previousPage();
            });
          }
        }
      }
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$80$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$80$$) {
        var $i$$164$$;
        for ($i$$164$$ = 0;$i$$164$$ < this.$_dataSourceEventHandlers$.length;$i$$164$$++) {
          $data$$80$$.off(this.$_dataSourceEventHandlers$[$i$$164$$].eventType, this.$_dataSourceEventHandlers$[$i$$164$$].eventHandler);
        }
      }
    }, $_unregisterChildStateListeners$:function($parent$$17$$) {
      var $self$$67$$ = this;
      $parent$$17$$.find("*").each(function() {
        $self$$67$$.$_UnregisterChildNode$(this);
      });
    }, $_unregisterSwipeHandler$:function() {
      $oj$$10$$.$DomUtils$.$isTouchSupported$() && ("vertical" == this.options.pageOptions.orientation ? (null != this.$_hammerSwipeUp$ && (this.$_hammerSwipeUp$.off("swipeup"), this.$_hammerSwipeUp$ = null), null != this.$_hammerSwipeDown$ && (this.$_hammerSwipeDown$.off("swipedown"), this.$_hammerSwipeDown$ = null)) : (null != this.$_hammerSwipeLeft$ && (this.$_hammerSwipeLeft$.off("swipeleft"), this.$_hammerSwipeLeft$ = null), null != this.$_hammerSwipeRight$ && (this.$_hammerSwipeRight$.off("swiperight"), 
      this.$_hammerSwipeRight$ = null)));
    }, $_createAccLabelSpan$:function($text$$8$$, $className$$5$$) {
      var $accLabel$$ = $$$$10$$(document.createElement("span"));
      $accLabel$$.addClass($className$$5$$);
      $accLabel$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accLabel$$.text($text$$8$$);
      return $accLabel$$;
    }, $_createPagingControlAccLabel$:function() {
      var $pagingControlContainer$$ = this.$_getPagingControlContainer$(), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_PAGING$), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$_createAccLabelSpan$($pagingControlAccLabel_pagingControlAccLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$), $pagingControlAccLabelId$$ = this.element.attr("id") + "_oj_pgCtrl_acc_label";
      $pagingControlAccLabel_pagingControlAccLabelText$$.attr("id", $pagingControlAccLabelId$$);
      $pagingControlContainer$$.append($pagingControlAccLabel_pagingControlAccLabelText$$);
      return $pagingControlAccLabel_pagingControlAccLabelText$$;
    }, $_createPagingControlAccNavPageLabel$:function() {
      var $pagingControlAccNavPageLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPageLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavFirstLabel$:function() {
      var $pagingControlAccNavFirstLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_FIRST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavFirstLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavLastLabel$:function() {
      var $pagingControlAccNavLastLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_LAST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavLastLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavNextLabel$:function() {
      var $pagingControlAccNavNextLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_NEXT_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavNextLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavPreviousLabel$:function() {
      var $pagingControlAccNavPreviousLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PREVIOUS_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPreviousLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$);
    }, $_createPagingControlContent$:function() {
      var $pagingControlContainer$$1$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$2$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$2$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$);
      var $pagingControlAccLabelId$$1$$ = this.$_getPagingControlAccLabel$().attr("id");
      $pagingControlContent$$2$$.attr("role", "navigation");
      $pagingControlContent$$2$$.attr("aria-labelledby", $pagingControlAccLabelId$$1$$);
      $pagingControlContainer$$1$$.append($pagingControlContent$$2$$);
      return $pagingControlContent$$2$$;
    }, $_createPagingControlLoadMore$:function() {
      var $pagingControlContent$$3$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlLoadMore$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$);
      $pagingControlContent$$3$$.append($pagingControlLoadMore$$1$$);
      return $pagingControlLoadMore$$1$$;
    }, $_createPagingControlLoadMoreLink$:function() {
      var $pagingControlLoadMore$$2$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$ = $$$$10$$(document.createElement("a"));
      $pagingControlLoadMoreLink$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$);
      var $loadMoreText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_LOAD_MORE$);
      $pagingControlLoadMoreLink$$.text($loadMoreText$$);
      $pagingControlLoadMoreLink$$.attr(this.$_TAB_INDEX$, "0");
      $pagingControlLoadMoreLink$$.attr("href", "#");
      $pagingControlLoadMore$$2$$.append($pagingControlLoadMoreLink$$);
      return $pagingControlLoadMoreLink$$;
    }, $_createPagingControlLoadMoreMaxRows$:function() {
      var $pagingControlLoadMore$$3$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreMaxRows$$ = $$$$10$$(document.createElement("span"));
      $pagingControlLoadMoreMaxRows$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS$);
      var $maxRowsText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_LOAD_MORE_MAX_ROWS$, {maxRows:this.options.loadMoreOptions.maxCount});
      $pagingControlLoadMoreMaxRows$$.text($maxRowsText$$);
      $pagingControlLoadMore$$3$$.append($pagingControlLoadMoreMaxRows$$);
      return $pagingControlLoadMoreMaxRows$$;
    }, $_createPagingControlLoadMoreRange$:function($size$$17$$, $startIndex$$10$$) {
      var $pagingControlLoadMore$$4$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$ = $$$$10$$(document.createElement("span"));
      $pagingControlLoadMoreRange$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$);
      var $loadMoreRange$$ = this.$_getItemRange$($size$$17$$, $startIndex$$10$$);
      $pagingControlLoadMoreRange$$.append($loadMoreRange$$);
      $pagingControlLoadMore$$4$$.append($pagingControlLoadMoreRange$$);
      return $pagingControlLoadMoreRange$$;
    }, $_createPagingControlNav$:function($size$$18$$, $startIndex$$11$$) {
      var $isVertical$$2$$ = "vertical" == this.options.pageOptions.orientation ? !0 : !1, $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = "dots" == this.options.pageOptions.type ? !0 : !1, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = this.options.pageOptions.layout;
      null == $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ && ($navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = [this.$_PAGE_OPTION_LAYOUT$.$_AUTO$]);
      var $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$ = this.$_getPagingControlContent$(), $pagingControlNav$$ = $$$$10$$(document.createElement("div"));
      $pagingControlNav$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$);
      $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($pagingControlNav$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_INPUT$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("div"));
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$);
        $pagingControlNav$$.append($pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$);
        var $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = $$$$10$$(document.createElement("label"));
        $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LABEL_CLASS$);
        var $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE$);
        $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$.text($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$);
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$);
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$ = $$$$10$$(document.createElement("input"));
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$);
        var $navInputPageTip_pagingControlNavMaxLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_INPUT_PAGE$);
        this._focusable(this.element);
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr("title", $navInputPageTip_pagingControlNavMaxLabel$$);
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr(this.$_TAB_INDEX$, "0");
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.val(this.$_getCurrentPage$() + 1);
        $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$.append($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$);
        $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = 0;
        if (0 < this.$_getTotalPages$()) {
          $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_getTotalPages$();
          $navInputPageTip_pagingControlNavMaxLabel$$ = $$$$10$$(document.createElement("span"));
          $navInputPageTip_pagingControlNavMaxLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$);
          var $navInputPageMaxLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_MAX$, {pageMax:$maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$});
          $navInputPageTip_pagingControlNavMaxLabel$$.text($navInputPageMaxLabel$$);
          $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($navInputPageTip_pagingControlNavMaxLabel$$);
        } else {
          $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = 0 < $size$$18$$ ? this.$_getCurrentPage$() + 2 : this.$_getCurrentPage$() + 1;
        }
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.ojInputText({rootAttributes:{style:"width: auto; min-width: 0;"}, optionChange:this.$_handlePageChange$.bind(this), validators:[{type:"numberRange", options:{min:1, max:$maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$}}]});
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_RANGE_TEXT$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("span")), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$ = 
        this.$_getItemRange$($size$$18$$, $startIndex$$11$$), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append("("), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append(")"), 
        $pagingControlNav$$.append($pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$);
      }
      $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$);
      $pagingControlNav$$.append($pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$ = $$$$10$$(document.createElement("a")), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$), 
        $isVertical$$2$$ ? $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS$) : $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_FIRST_PAGE$), this._hoverable($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$), this._focusable($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr("title", 
        $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr(this.$_TAB_INDEX$, "0"), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr("href", "#"), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr("oncontextmenu", 
        "return false;"), $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavFirstLabel$(), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.append($maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), $isVertical$$2$$ && 
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.css("display", "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$ = 
        $$$$10$$(document.createElement("a")), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$), $isVertical$$2$$ ? $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS$) : 
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), 
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PREVIOUS_PAGE$), this._hoverable($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$), 
        this._focusable($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr("title", $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr(this.$_TAB_INDEX$, 
        "0"), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr("href", "#"), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.attr("oncontextmenu", "return false;"), $maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavPreviousLabel$(), 
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.append($maxPageVal_navFirstPageTip_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), $isVertical$$2$$ && $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.css("display", "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$)
        ;
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_PAGES$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$ = $$$$10$$(document.createElement("div")), $itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$), 
        this.$_createPagingControlNavPages$($itemRange_navInputPageLabel_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavPagesSection_pagingControlNavPrevious$$1$$, this.$_getMaxPageLinks$(), $size$$18$$, $startIndex$$11$$);
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$), $isVertical$$2$$ ? $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS$) : 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_NEXT_PAGE$), this._hoverable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr(this.$_TAB_INDEX$, "0"), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", 
        "#"), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("oncontextmenu", "return false;"), $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = this.$_createPagingControlAccNavNextLabel$(), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), $isVertical$$2$$ && $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.css("display", 
        "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$), 
        $isVertical$$2$$ ? $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS$) : $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ICON_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_LAST_PAGE$), this._hoverable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", 
        $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr(this.$_TAB_INDEX$, "0"), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("oncontextmenu", "return false;"), $navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = this.$_createPagingControlAccNavLastLabel$(), 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip_navNextPageTip_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), $isVertical$$2$$ && $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.css("display", "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$1_pagingControlNavSummaryLabel$$.append($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$);
      }
      return $pagingControlNav$$;
    }, $_createPagingControlNavPages$:function($errDetail$$5_parentDiv_totalPages$$, $numLinks_pageList$$, $i$$165_size$$19$$) {
      if (5 > $numLinks_pageList$$) {
        var $errSummary$$5_pagingControlNavPagesLinks$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_SUMMARY$);
        $errDetail$$5_parentDiv_totalPages$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_DETAIL$);
        throw Error($errSummary$$5_pagingControlNavPagesLinks$$ + "\n" + $errDetail$$5_parentDiv_totalPages$$);
      }
      $errSummary$$5_pagingControlNavPagesLinks$$ = $$$$10$$(document.createElement("div"));
      $errSummary$$5_pagingControlNavPagesLinks$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$);
      $errDetail$$5_parentDiv_totalPages$$.append($errSummary$$5_pagingControlNavPagesLinks$$);
      $errDetail$$5_parentDiv_totalPages$$ = this.$_getTotalPages$();
      var $currentPage_pageAfterCurrent_pageNum$$3$$ = this.$_getCurrentPage$(), $numPagesToAdd$$ = $numLinks_pageList$$;
      $numLinks_pageList$$ = [];
      if (0 <= $currentPage_pageAfterCurrent_pageNum$$3$$) {
        if (-1 != $errDetail$$5_parentDiv_totalPages$$ && $errDetail$$5_parentDiv_totalPages$$ <= $numPagesToAdd$$) {
          for ($numLinks_pageList$$[0] = 0, $i$$165_size$$19$$ = 1;$i$$165_size$$19$$ < $errDetail$$5_parentDiv_totalPages$$;$i$$165_size$$19$$++) {
            $numLinks_pageList$$[$i$$165_size$$19$$] = $i$$165_size$$19$$;
          }
        } else {
          $numLinks_pageList$$.push(0);
          0 != $currentPage_pageAfterCurrent_pageNum$$3$$ && $numLinks_pageList$$.push($currentPage_pageAfterCurrent_pageNum$$3$$);
          $currentPage_pageAfterCurrent_pageNum$$3$$ != $errDetail$$5_parentDiv_totalPages$$ - 1 && -1 != $errDetail$$5_parentDiv_totalPages$$ && $numLinks_pageList$$.push($errDetail$$5_parentDiv_totalPages$$ - 1);
          var $numPagesToAdd$$ = $numPagesToAdd$$ - $numLinks_pageList$$.length, $pageBeforeCurrent$$ = $currentPage_pageAfterCurrent_pageNum$$3$$ - 1, $numPagesAfterCurrent$$ = 1;
          if ($currentPage_pageAfterCurrent_pageNum$$3$$ == $errDetail$$5_parentDiv_totalPages$$ - 1 || $currentPage_pageAfterCurrent_pageNum$$3$$ == $errDetail$$5_parentDiv_totalPages$$ - 2) {
            $numPagesAfterCurrent$$ = 0;
          }
          for (;$numPagesToAdd$$ > $numPagesAfterCurrent$$ && 1 < $pageBeforeCurrent$$;) {
            $numLinks_pageList$$.push($pageBeforeCurrent$$), $pageBeforeCurrent$$--, $numPagesToAdd$$--;
          }
          $currentPage_pageAfterCurrent_pageNum$$3$$ += 1;
          for (-1 == $errDetail$$5_parentDiv_totalPages$$ && ($numPagesToAdd$$ = 0 < $i$$165_size$$19$$ ? 1 : 0);0 < $numPagesToAdd$$ && ($currentPage_pageAfterCurrent_pageNum$$3$$ <= $errDetail$$5_parentDiv_totalPages$$ || -1 == $errDetail$$5_parentDiv_totalPages$$);) {
            $numLinks_pageList$$.push($currentPage_pageAfterCurrent_pageNum$$3$$), $currentPage_pageAfterCurrent_pageNum$$3$$++, $numPagesToAdd$$--;
          }
        }
        $numLinks_pageList$$.sort(function($a$$99$$, $b$$64$$) {
          return $a$$99$$ - $b$$64$$;
        });
        for ($i$$165_size$$19$$ = 0;$i$$165_size$$19$$ < $numLinks_pageList$$.length;$i$$165_size$$19$$++) {
          $currentPage_pageAfterCurrent_pageNum$$3$$ = $numLinks_pageList$$[$i$$165_size$$19$$], this.$_createPagingControlNavPage$($errSummary$$5_pagingControlNavPagesLinks$$, $currentPage_pageAfterCurrent_pageNum$$3$$), $i$$165_size$$19$$ != $numLinks_pageList$$.length - 1 && $currentPage_pageAfterCurrent_pageNum$$3$$ != $numLinks_pageList$$[$i$$165_size$$19$$ + 1] - 1 && this.$_createPagingControlNavPage$($errSummary$$5_pagingControlNavPagesLinks$$, -1);
        }
        -1 == $errDetail$$5_parentDiv_totalPages$$ && this.$_createPagingControlNavPage$($errSummary$$5_pagingControlNavPagesLinks$$, -1);
      }
      return $errSummary$$5_pagingControlNavPagesLinks$$;
    }, $_createPagingControlNavPage$:function($parentDiv$$1$$, $pageNum$$4$$) {
      var $currentPage$$1$$ = this.$_getCurrentPage$(), $pagingControlNavPage$$ = null, $isRTL$$ = "rtl" === this.$_GetReadingDirection$(), $isVertical$$3$$ = "vertical" == this.options.pageOptions.orientation ? !0 : !1, $isDot$$1$$ = "dots" == this.options.pageOptions.type ? !0 : !1;
      if (-1 == $pageNum$$4$$) {
        $pagingControlNavPage$$ = $$$$10$$(document.createElement("span")), $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS$), $pagingControlNavPage$$.text("...");
      } else {
        $currentPage$$1$$ == $pageNum$$4$$ ? ($pagingControlNavPage$$ = $$$$10$$(document.createElement("div")), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : ($pagingControlNavPage$$ = $$$$10$$(document.createElement("a")), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), 
        $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$));
        $pagingControlNavPage$$.attr("data-oj-pagenum", $pageNum$$4$$);
        $isDot$$1$$ ? $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_DOT_CLASS$) : $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$);
        var $accPageLabel_pageTitle_pagingControlNavPageSpan$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PAGE_LINK$, {pageNum:($pageNum$$4$$ + 1).toString()});
        this._hoverable($pagingControlNavPage$$);
        this._focusable($pagingControlNavPage$$);
        $pagingControlNavPage$$.attr("title", $accPageLabel_pageTitle_pagingControlNavPageSpan$$);
        $pagingControlNavPage$$.attr(this.$_TAB_INDEX$, "0");
        $pagingControlNavPage$$.attr("href", "#");
        $pagingControlNavPage$$.attr("oncontextmenu", "return false;");
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$ = this.$_createPagingControlAccNavPageLabel$();
        $pagingControlNavPage$$.append($accPageLabel_pageTitle_pagingControlNavPageSpan$$);
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$ = $$$$10$$(document.createElement("span"));
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$.append(($pageNum$$4$$ + 1).toString());
        $isDot$$1$$ && ($accPageLabel_pageTitle_pagingControlNavPageSpan$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_DOT_BULLET_CLASS$), this._hoverable($accPageLabel_pageTitle_pagingControlNavPageSpan$$), $currentPage$$1$$ == $pageNum$$4$$ && ($accPageLabel_pageTitle_pagingControlNavPageSpan$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $accPageLabel_pageTitle_pagingControlNavPageSpan$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$)));
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$.attr("dir", $isRTL$$ ? "rtl" : "ltr");
        $pagingControlNavPage$$.append($accPageLabel_pageTitle_pagingControlNavPageSpan$$);
        this._hoverable($pagingControlNavPage$$);
        $isVertical$$3$$ && $pagingControlNavPage$$.css("display", "block");
      }
      $parentDiv$$1$$.append($pagingControlNavPage$$);
      return $pagingControlNavPage$$;
    }, $_getPagingControlAccLabel$:function() {
      var $pagingControlContainer$$2$$ = this.$_getPagingControlContainer$(), $pagingControlContentAccLabel$$ = null;
      $pagingControlContainer$$2$$ && ($pagingControlContentAccLabel$$ = $pagingControlContainer$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$)) && 0 < $pagingControlContentAccLabel$$.length && ($pagingControlContentAccLabel$$ = $$$$10$$($pagingControlContentAccLabel$$.get(0)));
      return $pagingControlContentAccLabel$$;
    }, $_getPagingControlContainer$:function() {
      return $$$$10$$(this.element);
    }, $_getPagingControlContent$:function() {
      if (!this.$_cachedDomPagingControlContent$) {
        var $pagingControlContainer$$3$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$5$$ = null;
        $pagingControlContainer$$3$$ && ($pagingControlContent$$5$$ = $pagingControlContainer$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$)) && 0 < $pagingControlContent$$5$$.length && (this.$_cachedDomPagingControlContent$ = $$$$10$$($pagingControlContent$$5$$.get(0)));
      }
      return this.$_cachedDomPagingControlContent$;
    }, $_getPagingControlLoadMore$:function() {
      if (!this.$_cachedDomPagingControlLoadMore$) {
        var $pagingControlContent$$6$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$5$$ = null;
        $pagingControlContent$$6$$ && ($pagingControlLoadMore$$5$$ = $pagingControlContent$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$)) && 0 < $pagingControlLoadMore$$5$$.length && (this.$_cachedDomPagingControlLoadMore$ = $$$$10$$($pagingControlLoadMore$$5$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMore$;
    }, $_getPagingControlLoadMoreLink$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreLink$) {
        var $pagingControlLoadMore$$6$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$1$$ = null;
        $pagingControlLoadMore$$6$$ && ($pagingControlLoadMoreLink$$1$$ = $pagingControlLoadMore$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$)) && 0 < $pagingControlLoadMoreLink$$1$$.length && (this.$_cachedDomPagingControlLoadMoreLink$ = $$$$10$$($pagingControlLoadMoreLink$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreLink$;
    }, $_getPagingControlLoadMoreRange$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreRange$) {
        var $pagingControlLoadMore$$7$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$1$$ = null;
        $pagingControlLoadMore$$7$$ && ($pagingControlLoadMoreRange$$1$$ = $pagingControlLoadMore$$7$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$)) && 0 < $pagingControlLoadMoreRange$$1$$.length && (this.$_cachedDomPagingControlLoadMoreRange$ = $$$$10$$($pagingControlLoadMoreRange$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreRange$;
    }, $_getPagingControlNav$:function() {
      if (!this.$_cachedDomPagingControlNav$) {
        var $pagingControlContent$$7$$ = this.$_getPagingControlContent$(), $pagingControlNav$$1$$ = null;
        $pagingControlContent$$7$$ && ($pagingControlNav$$1$$ = $pagingControlContent$$7$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$)) && 0 < $pagingControlNav$$1$$.length && (this.$_cachedDomPagingControlNav$ = $$$$10$$($pagingControlNav$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNav$;
    }, $_getPagingControlNavInput$:function() {
      if (!this.$_cachedDomPagingControlNavInput$) {
        var $pagingControlNav$$2$$ = this.$_getPagingControlNav$(), $pagingControlNavInput$$1$$ = null;
        $pagingControlNav$$2$$ && ($pagingControlNavInput$$1$$ = $pagingControlNav$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$)) && 0 < $pagingControlNavInput$$1$$.length && (this.$_cachedDomPagingControlNavInput$ = $$$$10$$($pagingControlNavInput$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInput$;
    }, $_getPagingControlNavInputSummary$:function() {
      if (!this.$_cachedDomPagingControlNavInputSummary$) {
        var $pagingControlNav$$3$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSummary$$1$$ = null;
        $pagingControlNav$$3$$ && ($pagingControlNavInputSummary$$1$$ = $pagingControlNav$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$)) && 0 < $pagingControlNavInputSummary$$1$$.length && (this.$_cachedDomPagingControlNavInputSummary$ = $$$$10$$($pagingControlNavInputSummary$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInputSummary$;
    }, $_getPagingControlNavPageLinks$:function() {
      var $pagingControlNav$$4$$ = this.$_getPagingControlNav$(), $pagingControlNavPageLinks$$1$$ = null;
      $pagingControlNav$$4$$ && ($pagingControlNavPageLinks$$1$$ = $pagingControlNav$$4$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$)) && 0 < $pagingControlNavPageLinks$$1$$.length && ($pagingControlNavPageLinks$$1$$ = $$$$10$$($pagingControlNavPageLinks$$1$$.get(0)));
      return $pagingControlNavPageLinks$$1$$;
    }, $_getPagingControlNavArrowSection$:function() {
      var $pagingControlNav$$5$$ = this.$_getPagingControlNav$(), $pagingControlNavArrowSection$$4$$ = null;
      if ($pagingControlNav$$5$$) {
        if (($pagingControlNavArrowSection$$4$$ = $pagingControlNav$$5$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$)) && 0 < $pagingControlNavArrowSection$$4$$.length) {
          $pagingControlNavArrowSection$$4$$ = $$$$10$$($pagingControlNavArrowSection$$4$$.get(0));
        } else {
          return null;
        }
      }
      return $pagingControlNavArrowSection$$4$$;
    }, $_getPagingControlNavInputSection$:function() {
      var $pagingControlNav$$6$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSection$$2$$ = null;
      if ($pagingControlNav$$6$$) {
        if (($pagingControlNavInputSection$$2$$ = $pagingControlNav$$6$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$)) && 0 < $pagingControlNavInputSection$$2$$.length) {
          $pagingControlNavInputSection$$2$$ = $$$$10$$($pagingControlNavInputSection$$2$$.get(0));
        } else {
          return null;
        }
      }
      return $pagingControlNavInputSection$$2$$;
    }});
  })();
});
