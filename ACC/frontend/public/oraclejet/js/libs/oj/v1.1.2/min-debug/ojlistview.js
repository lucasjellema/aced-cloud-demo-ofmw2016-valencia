/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$19$$, $$$$18$$) {
  $oj$$19$$.$DataSourceContentHandler$ = function $$oj$$19$$$$DataSourceContentHandler$$($widget$$5$$, $root$$3$$, $data$$135$$) {
    this.$m_root$ = $root$$3$$;
    this.$m_widget$ = $widget$$5$$;
    this.$m_fetching$ = !1;
    this.$setDataSource$($data$$135$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$DataSourceContentHandler$, $oj$$19$$.$Object$, "oj.DataSourceContentHandler");
  $oj$$19$$.$DataSourceContentHandler$.prototype.HandleResize = function $$oj$$19$$$$DataSourceContentHandler$$$HandleResize$() {
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$DataSourceContentHandler$$$$Destroy$$() {
    $$$$18$$(this.$m_root$).empty();
    this.$m_root$ = this.$m_widget$ = null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$DataSourceContentHandler$$$$IsReady$$() {
    return!this.$m_fetching$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$DataSourceContentHandler$$$$RenderContent$$() {
    this.$fetchRows$(!1);
    this.$setRootAriaProperties$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$GetKey$$($element$$96$$) {
    return $element$$96$$.key;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$FindElementByKey$$($key$$93$$) {
    var $children$$5$$, $i$$293$$, $elem$$20$$;
    $children$$5$$ = $$$$18$$(this.$m_root$).find("." + this.$m_widget$.$getItemElementStyleClass$());
    for ($i$$293$$ = 0;$i$$293$$ < $children$$5$$.length;$i$$293$$++) {
      if ($elem$$20$$ = $children$$5$$[$i$$293$$], $key$$93$$ == this.$GetKey$($elem$$20$$)) {
        return $elem$$20$$;
      }
    }
    return null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.getDataSource = function $$oj$$19$$$$DataSourceContentHandler$$$getDataSource$() {
    return this.$m_dataSource$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setDataSource$$($dataSource$$8$$) {
    this.$m_dataSource$ = $dataSource$$8$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$DataSourceContentHandler$$$$fetchRows$$() {
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$addItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$addItem$$($parentElement$$5$$, $context$$59_index$$156$$, $content$$15_data$$136$$, $metadata$$4_renderer_textWrapper$$, $callback$$99$$) {
    var $item$$9$$;
    $item$$9$$ = document.createElement("li");
    $$$$18$$($item$$9$$).uniqueId();
    $parentElement$$5$$.appendChild($item$$9$$);
    void 0 == $callback$$99$$ && ($callback$$99$$ = this.$afterRenderItem$.bind(this));
    $context$$59_index$$156$$ = this.$createContext$($context$$59_index$$156$$, $content$$15_data$$136$$, $metadata$$4_renderer_textWrapper$$, $item$$9$$);
    $metadata$$4_renderer_textWrapper$$ = this.$m_widget$.$_getItemRenderer$();
    null != $metadata$$4_renderer_textWrapper$$ ? ($content$$15_data$$136$$ = $metadata$$4_renderer_textWrapper$$.call(this, $context$$59_index$$156$$), null != $content$$15_data$$136$$ && (null === $content$$15_data$$136$$.parentNode || $content$$15_data$$136$$.parentNode instanceof DocumentFragment ? $item$$9$$.appendChild($content$$15_data$$136$$) : null == $content$$15_data$$136$$.parentNode && $content$$15_data$$136$$.toString && ($metadata$$4_renderer_textWrapper$$ = document.createElement("span"), 
    $metadata$$4_renderer_textWrapper$$.appendChild(document.createTextNode($content$$15_data$$136$$.toString())), $item$$9$$.appendChild($metadata$$4_renderer_textWrapper$$)))) : ($metadata$$4_renderer_textWrapper$$ = document.createElement("span"), $metadata$$4_renderer_textWrapper$$.appendChild(document.createTextNode(null == $content$$15_data$$136$$ ? "" : $content$$15_data$$136$$.toString())), $item$$9$$.appendChild($metadata$$4_renderer_textWrapper$$));
    $item$$9$$ = $parentElement$$5$$.lastElementChild;
    $context$$59_index$$156$$.parentElement = $item$$9$$;
    $callback$$99$$($item$$9$$, $context$$59_index$$156$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$afterRenderItem$$($item$$10$$, $context$$60$$) {
    $item$$10$$.key = $context$$60$$.key;
    $item$$10$$ = $$$$18$$($item$$10$$);
    $item$$10$$.uniqueId();
    this.$IsHierarchical$() ? $item$$10$$.attr("role", "treeitem") : $item$$10$$.attr("role", "option");
    this.$isFocusable$($context$$60$$) || $item$$10$$.addClass("oj-skipfocus");
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$60$$) && $item$$10$$.attr("aria-selected", "false");
    $item$$10$$.addClass(this.$m_widget$.$getItemElementStyleClass$());
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$DataSourceContentHandler$$$$createContext$$($index$$157$$, $data$$137$$, $metadata$$5$$, $elem$$21$$) {
    var $context$$61$$, $prop$$64$$;
    $context$$61$$ = {};
    $context$$61$$.parentElement = $elem$$21$$;
    $context$$61$$.index = $index$$157$$;
    $context$$61$$.data = $data$$137$$;
    $context$$61$$.component = this.$m_widget$.$getWidgetConstructor$();
    $context$$61$$.datasource = this.getDataSource();
    for ($prop$$64$$ in $metadata$$5$$) {
      $metadata$$5$$.hasOwnProperty($prop$$64$$) && ($context$$61$$[$prop$$64$$] = $metadata$$5$$[$prop$$64$$]);
    }
    return $context$$61$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isFocusable$$($context$$62$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$62$$, !0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isSelectable$$($context$$63$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$63$$, !0);
  };
  $oj$$19$$.$TableDataSourceContentHandler$ = function $$oj$$19$$$$TableDataSourceContentHandler$$($widget$$6$$, $root$$4$$, $data$$138$$) {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$6$$, $root$$4$$, $data$$138$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TableDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TableDataSourceContentHandler");
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$IsHierarchical$$() {
    return!1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$Destroy$$() {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$Destroy$.call(this);
    this.$_removeDataSourceEventListeners$();
    null != this.$m_domScroller$ && (this.$m_domScroller$.destroy(), this.$m_domScrollerMaxCountFunc$ = this.$m_domScroller$ = null);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.HandleResize = function $$oj$$19$$$$TableDataSourceContentHandler$$$HandleResize$($width$$23$$, $height$$19$$) {
    this.$_isLoadMoreOnScroll$() && void 0 != this.$m_height$ && this.$m_height$ != $height$$19$$ && (this.$m_height$ = $height$$19$$, this.checkViewport());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_isLoadMoreOnScroll$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_isLoadMoreOnScroll$$() {
    return "loadMoreOnScroll" == this.$m_widget$.options.scrollPolicy ? !0 : !1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getFetchSize$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getFetchSize$$() {
    return Math.max(0, this.$m_widget$.options.scrollPolicyOptions.fetchSize);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getMaxCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getMaxCount$$() {
    return this.$m_widget$.options.scrollPolicyOptions.maxCount;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$setDataSource$$($dataSource$$9$$) {
    var $self$$112$$;
    this.$_removeDataSourceEventListeners$();
    this.$m_initFetch$ = !1;
    if (null != $dataSource$$9$$) {
      $dataSource$$9$$ instanceof $oj$$19$$.$PagingTableDataSource$ || (this.$m_initFetch$ = !0, this.$_isLoadMoreOnScroll$() && ($self$$112$$ = this, this.$m_domScrollerMaxCountFunc$ = function $this$$m_domScrollerMaxCountFunc$$($result$$55$$) {
        null != $result$$55$$ && ($result$$55$$.maxCountLimit ? $self$$112$$.$_handleScrollerMaxRowCount$() : $self$$112$$.$_handleFetchedData$($result$$55$$));
      }, this.$m_domScroller$ = new $oj$$19$$.$DomScroller$(this.$m_widget$.$getRootElement$(), $dataSource$$9$$, {fetchSize:this.$_getFetchSize$(), maxCount:this.$_getMaxCount$(), success:this.$m_domScrollerMaxCountFunc$})));
      this.$m_handleModelSyncEventListener$ = this.$handleModelSyncEvent$.bind(this);
      this.$m_handleModelSortEventListener$ = this.$handleModelSortEvent$.bind(this);
      this.$m_handleModelAddEventListener$ = this.$handleModelAddEvent$.bind(this);
      this.$m_handleModelRemoveEventListener$ = this.$handleModelRemoveEvent$.bind(this);
      this.$m_handleModelResetEventListener$ = this.$handleModelResetEvent$.bind(this);
      if ($dataSource$$9$$ instanceof $oj$$19$$.$PagingTableDataSource$) {
        $dataSource$$9$$.on("sync", this.$m_handleModelSyncEventListener$);
      }
      $dataSource$$9$$.on("sort", this.$m_handleModelSortEventListener$);
      $dataSource$$9$$.on("add", this.$m_handleModelAddEventListener$);
      $dataSource$$9$$.on("remove", this.$m_handleModelRemoveEventListener$);
      $dataSource$$9$$.on("reset", this.$m_handleModelResetEventListener$);
    }
    this.$m_dataSource$ = $dataSource$$9$$;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItem$$($item$$11$$, $context$$64$$) {
    var $size$$20$$;
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$11$$, $context$$64$$);
    $$$$18$$($item$$11$$).addClass(this.$m_widget$.$getItemStyleClass$());
    this.$_isLoadMoreOnScroll$() && ($size$$20$$ = Math.min(this.$m_dataSource$.totalSize(), this.$_getMaxCount$()), -1 === $size$$20$$ && ($size$$20$$ = this.$_getMaxCount$()), 0 < $size$$20$$ && $$$$18$$($item$$11$$).attr("aria-setsize", $size$$20$$).attr("aria-posinset", $context$$64$$.index + 1));
    this.$m_widget$.$itemRenderComplete$($item$$11$$, $context$$64$$);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItemForInsertEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItemForInsertEvent$$($item$$12$$, $context$$65$$) {
    var $elem$$22$$, $height$$20$$, $itemStyleClass$$;
    this.$afterRenderItem$($item$$12$$, $context$$65$$);
    $elem$$22$$ = $$$$18$$($item$$12$$);
    $height$$20$$ = $elem$$22$$.outerHeight();
    $elem$$22$$.css("opacity", "0");
    $elem$$22$$.css("maxHeight", "0");
    $itemStyleClass$$ = this.$m_widget$.$getItemStyleClass$();
    $elem$$22$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");
    $elem$$22$$.removeClass($itemStyleClass$$).addClass("oj-listview-item-add-remove-transition");
    $elem$$22$$.children().first().addClass($itemStyleClass$$);
    null == this.$m_addTransitionEndListener$ && (this.$m_addTransitionEndListener$ = this.$_handleAddTransitionEnd$.bind(this));
    $elem$$22$$.on("transitionend", this.$m_addTransitionEndListener$);
    requestAnimationFrame(function() {
      $elem$$22$$.css("opacity", "1");
      $elem$$22$$.css("maxHeight", $height$$20$$ + "px");
    });
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleScrollerMaxRowCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleScrollerMaxRowCount$$() {
    $oj$$19$$.$Logger$.error("max count reached");
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeDataSourceEventListeners$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeDataSourceEventListeners$$() {
    null != this.$m_dataSource$ && (this.$m_dataSource$.off("sync", this.$m_handleModelSyncEventListener$), this.$m_dataSource$.off("sort", this.$m_handleModelSortEventListener$), this.$m_dataSource$.off("add", this.$m_handleModelAddEventListener$), this.$m_dataSource$.off("remove", this.$m_handleModelRemoveEventListener$), this.$m_dataSource$.off("reset", this.$m_handleModelResetEventListener$));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchRows$$($forceFetch$$1_options$$297_promise$$2$$) {
    var $self$$113$$;
    if (this.$IsReady$() && (this.$m_fetching$ = !0, this.$m_initFetch$ || $forceFetch$$1_options$$297_promise$$2$$)) {
      $forceFetch$$1_options$$297_promise$$2$$ = {fetchType:"init", startIndex:0};
      this.$_isLoadMoreOnScroll$() && ($forceFetch$$1_options$$297_promise$$2$$.pageSize = this.$_getFetchSize$());
      $self$$113$$ = this;
      $forceFetch$$1_options$$297_promise$$2$$ = this.$m_dataSource$.fetch($forceFetch$$1_options$$297_promise$$2$$);
      $forceFetch$$1_options$$297_promise$$2$$.then(function($value$$221$$) {
        $self$$113$$.$m_initFetch$ && $self$$113$$.$_handleFetchedData$($value$$221$$);
      }, function($reason$$4$$) {
        $self$$113$$.$_handleFetchError$($reason$$4$$);
      });
      return;
    }
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchError$$($msg$$22$$) {
    $oj$$19$$.$Logger$.error($msg$$22$$);
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchSuccess$$($data$$139$$, $keys$$31$$) {
    var $index$$158$$, $i$$294$$, $row$$47$$;
    $index$$158$$ = this.$m_root$.childElementCount;
    for ($i$$294$$ = 0;$i$$294$$ < $data$$139$$.length;$i$$294$$++) {
      $row$$47$$ = $data$$139$$[$i$$294$$], this.$addItem$(this.$m_root$, $index$$158$$, $row$$47$$, this.getMetadata($index$$158$$, $keys$$31$$[$i$$294$$], $row$$47$$)), $index$$158$$ += 1;
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelAddEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelAddEvent$$($event$$218_keys$$32$$) {
    var $data$$140$$, $index$$159$$, $i$$295$$;
    if (null != this.$m_root$ && ($data$$140$$ = $event$$218_keys$$32$$.data, $event$$218_keys$$32$$ = $event$$218_keys$$32$$.keys, null != $data$$140$$ && null != $event$$218_keys$$32$$ && 0 < $event$$218_keys$$32$$.length && 0 < $data$$140$$.length && $event$$218_keys$$32$$.length == $data$$140$$.length)) {
      $index$$159$$ = this.$m_root$.childElementCount;
      for ($i$$295$$ = 0;$i$$295$$ < $data$$140$$.length;$i$$295$$++) {
        this.$addItem$(this.$m_root$, $index$$159$$, $data$$140$$[$i$$295$$], this.getMetadata($index$$159$$, $event$$218_keys$$32$$[$i$$295$$], $data$$140$$[$i$$295$$]), this.$afterRenderItemForInsertEvent$.bind(this)), $index$$159$$++;
      }
      this.$fetchEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleAddTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleAddTransitionEnd$$($event$$219$$) {
    $$$$18$$($event$$219$$.target).removeClass("oj-listview-item-add-remove-transition").addClass(this.$m_widget$.$getItemStyleClass$()).off("transitionend", this.$m_addTransitionEndListener$).children().children().unwrap();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelRemoveEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelRemoveEvent$$($event$$220_keys$$33$$) {
    var $i$$296$$, $elem$$24$$;
    $event$$220_keys$$33$$ = $event$$220_keys$$33$$.keys;
    if (null != this.$m_root$ && null != $event$$220_keys$$33$$ && 0 != $event$$220_keys$$33$$.length) {
      for ($i$$296$$ = 0;$i$$296$$ < $event$$220_keys$$33$$.length;$i$$296$$++) {
        $elem$$24$$ = this.$FindElementByKey$($event$$220_keys$$33$$[$i$$296$$]), null != $elem$$24$$ && this.$_removeItem$($elem$$24$$);
      }
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeItem$$($elem$$25$$) {
    var $itemStyleClass$$2$$;
    null == this.$m_removeTransitionEndListener$ && (this.$m_removeTransitionEndListener$ = this.$_handleRemoveTransitionEnd$.bind(this));
    $itemStyleClass$$2$$ = this.$m_widget$.$getItemStyleClass$();
    $elem$$25$$ = $$$$18$$($elem$$25$$);
    $elem$$25$$.children().wrapAll("\x3cdiv class\x3d'" + $itemStyleClass$$2$$ + "'\x3e\x3c/div\x3e");
    $elem$$25$$.removeClass($itemStyleClass$$2$$).css("maxHeight", $elem$$25$$.outerHeight() + "px").addClass("oj-listview-item-add-remove-transition").on("transitionend", this.$m_removeTransitionEndListener$);
    setTimeout(function() {
      $elem$$25$$.css("opacity", "0");
      $elem$$25$$.css("maxHeight", "0px");
    }, 10);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleRemoveTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleRemoveTransitionEnd$$($elem$$26_event$$221$$) {
    var $parent$$21$$;
    $elem$$26_event$$221$$ = $$$$18$$($elem$$26_event$$221$$.target);
    $parent$$21$$ = $elem$$26_event$$221$$.parent();
    $elem$$26_event$$221$$.off("transitionend", this.$m_removeTransitionEndListener$);
    $elem$$26_event$$221$$.remove();
    0 == $parent$$21$$.get(0).childElementCount && this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelResetEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelResetEvent$$() {
    var $self$$114$$ = this;
    $$$$18$$(this.$m_root$).children("." + this.$m_widget$.$getItemStyleClass$()).each(function($index$$160$$, $elem$$27$$) {
      $self$$114$$.$_removeItem$($elem$$27$$);
    });
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchedData$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchedData$$($dataObj_keys$$34$$) {
    var $data$$141$$;
    null != this.$m_root$ && ($data$$141$$ = $dataObj_keys$$34$$.data, $dataObj_keys$$34$$ = $dataObj_keys$$34$$.keys, Array.isArray($data$$141$$) && Array.isArray($dataObj_keys$$34$$) && $data$$141$$.length == $dataObj_keys$$34$$.length && (this.$_handleFetchSuccess$($data$$141$$, $dataObj_keys$$34$$), this.$fetchEnd$()));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSyncEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSyncEvent$$($event$$223$$) {
    null != this.$m_root$ && ($$$$18$$(this.$m_root$).empty(), this.$m_widget$.$ClearCache$(), this.$_handleFetchedData$($event$$223$$));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSortEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSortEvent$$() {
    null != this.$m_root$ && ($$$$18$$(this.$m_root$).empty(), this.$m_widget$.$ClearCache$(), this.$m_widget$.$_isMultipleSelection$() && this.$m_widget$.$_clearSelection$(!0), this.$fetchRows$(!0));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchEnd$$() {
    this.$m_fetching$ = !1;
    this.$m_widget$.$renderComplete$();
    this.checkViewport();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.checkViewport = function $$oj$$19$$$$TableDataSourceContentHandler$$$checkViewport$() {
    var $fetchPromise$$2$$;
    null != this.$m_domScroller$ && 0 < this.$m_dataSource$.totalSize() && this.$IsReady$() && ($fetchPromise$$2$$ = this.$m_domScroller$.checkViewport(), null != $fetchPromise$$2$$ && $fetchPromise$$2$$.then(this.$m_domScrollerMaxCountFunc$, null));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.getMetadata = function $$oj$$19$$$$TableDataSourceContentHandler$$$getMetadata$($index$$161$$, $key$$94$$, $context$$66_data$$142$$) {
    $context$$66_data$$142$$ = $context$$66_data$$142$$.context;
    null == $context$$66_data$$142$$ && ($context$$66_data$$142$$ = {});
    null == $context$$66_data$$142$$.index && ($context$$66_data$$142$$.index = $index$$161$$);
    null == $context$$66_data$$142$$.key && ($context$$66_data$$142$$.key = $key$$94$$);
    return $context$$66_data$$142$$;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$($widget$$7$$, $root$$5$$, $data$$143$$) {
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$7$$, $root$$5$$, $data$$143$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TreeDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TreeDataSourceContentHandler");
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$IsHierarchical$$() {
    return!0;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchRows$$() {
    this.$fetchChildren$(0, null, this.$m_root$, null);
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchChildren$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchChildren$$($range$$13_start$$40$$, $parent$$22$$, $parentElem$$, $successCallback$$25$$) {
    this.$m_fetching$ = !0;
    $range$$13_start$$40$$ = {start:$range$$13_start$$40$$, count:this.$m_dataSource$.$getChildCount$($parent$$22$$)};
    this.$m_dataSource$.$fetchChildren$($parent$$22$$, $range$$13_start$$40$$, {success:function($nodeSet$$13$$) {
      this.$_handleFetchSuccess$($nodeSet$$13$$, $parent$$22$$, $parentElem$$, $successCallback$$25$$);
    }.bind(this), error:function($status$$18$$) {
      this.$_handleFetchError$($status$$18$$);
    }.bind(this)});
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchSuccess$$($nodeSet$$14$$, $parent$$23_start$$41$$, $parentElem$$1$$, $successCallback$$26$$) {
    var $count$$35$$, $i$$297$$, $data$$144$$, $metadata$$6$$;
    $parent$$23_start$$41$$ = $nodeSet$$14$$.$getStart$();
    $count$$35$$ = $nodeSet$$14$$.$getCount$();
    for ($i$$297$$ = 0;$i$$297$$ < $count$$35$$;$i$$297$$++) {
      $data$$144$$ = $nodeSet$$14$$.getData($parent$$23_start$$41$$ + $i$$297$$), $metadata$$6$$ = $nodeSet$$14$$.getMetadata($parent$$23_start$$41$$ + $i$$297$$), this.$addItem$($parentElem$$1$$, $parent$$23_start$$41$$ + $i$$297$$, $data$$144$$, $metadata$$6$$);
    }
    this.$m_fetching$ = !1;
    null != $successCallback$$26$$ && $successCallback$$26$$.call(null, $parentElem$$1$$);
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$afterRenderItem$$($item$$14$$, $context$$67$$) {
    var $groupStyleClass$$, $icon_itemStyleClass$$3$$, $groupItemStyleClass$$, $groupCollapseStyleClass$$, $collapseClass_groupItem$$, $content$$18$$;
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$14$$, $context$$67$$);
    $groupStyleClass$$ = this.$m_widget$.$getGroupStyleClass$();
    $icon_itemStyleClass$$3$$ = this.$m_widget$.$getItemStyleClass$();
    $groupItemStyleClass$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass_groupItem$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $item$$14$$ = $$$$18$$($item$$14$$);
    !1 == $context$$67$$.leaf ? ($item$$14$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $item$$14$$.attr("aria-expanded", "false"), $content$$18$$ = $item$$14$$.children().first(), $content$$18$$.uniqueId().addClass($icon_itemStyleClass$$3$$).addClass($groupItemStyleClass$$), this.$m_widget$.$isExpandable$() && ($item$$14$$.addClass("oj-collapsed"), $icon_itemStyleClass$$3$$ = document.createElement("a"), $$$$18$$($icon_itemStyleClass$$3$$).attr("href", "#").attr("aria-labelledby", $content$$18$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass_groupItem$$), 
    $content$$18$$.prepend($icon_itemStyleClass$$3$$)), $collapseClass_groupItem$$ = document.createElement("ul"), $$$$18$$($collapseClass_groupItem$$).addClass($groupStyleClass$$).addClass($groupCollapseStyleClass$$).attr("role", "group"), $item$$14$$.append($collapseClass_groupItem$$)) : !0 == $context$$67$$.leaf && $item$$14$$.addClass($icon_itemStyleClass$$3$$);
    this.$m_widget$.$itemRenderComplete$($item$$14$$[0], $context$$67$$);
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchError$$($status$$19$$) {
    $oj$$19$$.$Logger$.error($status$$19$$);
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Expand$$($item$$15$$, $successCallback$$27$$) {
    var $parentKey$$5$$, $parentElem$$2$$;
    $parentKey$$5$$ = this.$GetKey$($item$$15$$[0]);
    $parentElem$$2$$ = $item$$15$$.children("ul")[0];
    this.$fetchChildren$(0, $parentKey$$5$$, $parentElem$$2$$, $successCallback$$27$$);
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Collapse$$($item$$16$$) {
    $item$$16$$.empty();
  };
  $oj$$19$$.$StaticContentHandler$ = function $$oj$$19$$$$StaticContentHandler$$($widget$$8$$, $root$$6$$) {
    this.$m_widget$ = $widget$$8$$;
    this.$m_root$ = $root$$6$$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$StaticContentHandler$$$$Destroy$$() {
    this.$restoreContent$(this.$m_root$, 0);
    this.$unsetRootAriaProperties$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$StaticContentHandler$$$$IsReady$$() {
    return!0;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.HandleResize = function $$oj$$19$$$$StaticContentHandler$$$HandleResize$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$StaticContentHandler$$$$RenderContent$$() {
    this.$modifyContent$(this.$m_root$, 0);
    this.$setRootAriaProperties$();
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$StaticContentHandler$$$$Expand$$($item$$17$$, $successCallback$$28$$) {
    var $groupItem$$1_selector$$20$$;
    $groupItem$$1_selector$$20$$ = "." + this.$m_widget$.$getGroupStyleClass$();
    $groupItem$$1_selector$$20$$ = $$$$18$$($item$$17$$).children($groupItem$$1_selector$$20$$)[0];
    $$$$18$$($groupItem$$1_selector$$20$$).css("display", "block");
    $successCallback$$28$$.call(null, $groupItem$$1_selector$$20$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$StaticContentHandler$$$$Collapse$$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$StaticContentHandler$$$$IsHierarchical$$() {
    null == this.$m_hier$ && (this.$m_hier$ = 0 < $$$$18$$(this.$m_root$).children("li").children("ul").length);
    return this.$m_hier$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$restoreContent$ = function $$oj$$19$$$$StaticContentHandler$$$$restoreContent$$($elem$$28$$, $depth$$9$$) {
    var $groupStyleClass$$1$$, $groupCollapseStyleClass$$1$$, $groupExpandStyleClass$$, $itemStyleClass$$4$$, $itemElementStyleClass$$, $items$$, $i$$298$$, $groupItem$$2_item$$19$$, $groupItems$$;
    $groupStyleClass$$1$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupCollapseStyleClass$$1$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $groupExpandStyleClass$$ = this.$m_widget$.$getGroupExpandStyleClass$();
    $itemStyleClass$$4$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$ = this.$m_widget$.$getItemElementStyleClass$();
    $items$$ = $elem$$28$$.children;
    for ($i$$298$$ = 0;$i$$298$$ < $items$$.length;$i$$298$$++) {
      $groupItem$$2_item$$19$$ = $items$$[$i$$298$$], this.$unsetAriaProperties$($groupItem$$2_item$$19$$), $groupItem$$2_item$$19$$ = $$$$18$$($groupItem$$2_item$$19$$), $groupItem$$2_item$$19$$.removeClass($itemElementStyleClass$$).removeClass($itemStyleClass$$4$$).removeClass(this.$m_widget$.$getDepthStyleClass$($depth$$9$$)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"), $groupItems$$ = 
      $groupItem$$2_item$$19$$.children("ul"), 0 < $groupItems$$.length && ($groupItem$$2_item$$19$$.children("." + $itemStyleClass$$4$$).children().unwrap(), $groupItem$$2_item$$19$$.children(".oj-component-icon").remove(), $groupItem$$2_item$$19$$ = $$$$18$$($groupItems$$[0]), $groupItem$$2_item$$19$$.removeClass($groupStyleClass$$1$$).removeClass($groupExpandStyleClass$$).removeClass($groupCollapseStyleClass$$1$$).removeAttr("role"), this.$restoreContent$($groupItem$$2_item$$19$$[0], $depth$$9$$ + 
      1));
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$modifyContent$ = function $$oj$$19$$$$StaticContentHandler$$$$modifyContent$$($elem$$29$$, $depth$$10$$) {
    var $itemStyleClass$$5$$, $itemElementStyleClass$$1$$, $groupStyleClass$$2$$, $groupItemStyleClass$$1$$, $groupCollapseStyleClass$$2$$, $collapseClass$$1$$, $items$$1$$, $expandable$$, $i$$299$$, $item$$20$$, $context$$68$$, $groupItem$$3_groupItems$$1$$, $content$$19$$, $icon$$1$$;
    $itemStyleClass$$5$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$1$$ = this.$m_widget$.$getItemElementStyleClass$();
    $groupStyleClass$$2$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupItemStyleClass$$1$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$2$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass$$1$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $items$$1$$ = $elem$$29$$.children;
    $expandable$$ = this.$m_widget$.$isExpandable$();
    for ($i$$299$$ = 0;$i$$299$$ < $items$$1$$.length;$i$$299$$++) {
      $item$$20$$ = $$$$18$$($items$$1$$[$i$$299$$]), $context$$68$$ = this.$createContext$($item$$20$$), this.$setAriaProperties$($item$$20$$, $context$$68$$), $item$$20$$.uniqueId().addClass($itemElementStyleClass$$1$$), 0 < $depth$$10$$ && $item$$20$$.addClass(this.$m_widget$.$getDepthStyleClass$($depth$$10$$)), this.$isFocusable$($context$$68$$) || $item$$20$$.addClass("oj-skipfocus"), $groupItem$$3_groupItems$$1$$ = $item$$20$$.children("ul"), 0 < $groupItem$$3_groupItems$$1$$.length ? (this.$m_hier$ = 
      !0, $item$$20$$.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $content$$19$$ = $item$$20$$.children().first(), $content$$19$$.addClass($itemStyleClass$$5$$).addClass($groupItemStyleClass$$1$$), this.$hasChildren$($groupItem$$3_groupItems$$1$$[0]) && ($item$$20$$.attr("aria-expanded", "false"), $expandable$$ && ($item$$20$$.addClass("oj-collapsed"), $content$$19$$.uniqueId(), $icon$$1$$ = document.createElement("a"), $$$$18$$($icon$$1$$).attr("href", "#").attr("role", "button").attr("aria-labelledby", 
      $content$$19$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass$$1$$), $content$$19$$.prepend($icon$$1$$))), $groupItem$$3_groupItems$$1$$ = $$$$18$$($groupItem$$3_groupItems$$1$$[0]), $groupItem$$3_groupItems$$1$$.addClass($groupStyleClass$$2$$).addClass($groupCollapseStyleClass$$2$$).attr("role", "group").css("display", "none"), this.$modifyContent$($groupItem$$3_groupItems$$1$$[0], $depth$$10$$ + 1)) : $item$$20$$.addClass($itemStyleClass$$5$$), 
      this.$m_widget$.$itemRenderComplete$($item$$20$$[0], $context$$68$$);
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetRootAriaProperties$$() {
    this.$m_root$.removeAttribute("role");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$hasChildren$ = function $$oj$$19$$$$StaticContentHandler$$$$hasChildren$$($item$$21$$) {
    return 0 < $$$$18$$($item$$21$$).children("li").length;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$StaticContentHandler$$$$createContext$$($item$$22_parents$$3$$) {
    var $context$$69$$;
    $context$$69$$ = {};
    $context$$69$$.key = $item$$22_parents$$3$$.attr("id");
    $context$$69$$.parentElement = $item$$22_parents$$3$$.children().first()[0];
    $context$$69$$.index = $item$$22_parents$$3$$.index();
    $context$$69$$.data = $item$$22_parents$$3$$[0];
    $context$$69$$.component = this.$m_widget$.$getWidgetConstructor$();
    this.$IsHierarchical$() && ($context$$69$$.leaf = 0 == $item$$22_parents$$3$$.children("ul").length, $item$$22_parents$$3$$ = $item$$22_parents$$3$$.parents("li." + this.$m_widget$.$getItemElementStyleClass$()), $context$$69$$.depth = $item$$22_parents$$3$$.length, $context$$69$$.parentKey = 0 == $item$$22_parents$$3$$.length ? null : $item$$22_parents$$3$$.first().attr("id"));
    return $context$$69$$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setAriaProperties$$($item$$23$$, $context$$70$$) {
    $item$$23$$.attr("role", this.$IsHierarchical$() ? "treeitem" : "option");
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$70$$) && $item$$23$$.attr("aria-selected", !1);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetAriaProperties$$($item$$24$$) {
    $item$$24$$.removeAttribute("role");
    $item$$24$$.removeAttribute("aria-selected");
    $item$$24$$.removeAttribute("aria-expanded");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$StaticContentHandler$$$$GetKey$$($element$$97$$) {
    return $$$$18$$($element$$97$$).attr("id");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$StaticContentHandler$$$$FindElementByKey$$($key$$95$$) {
    return document.getElementById($key$$95$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$StaticContentHandler$$$$isFocusable$$($context$$71$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$71$$, !0);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$StaticContentHandler$$$$isSelectable$$($context$$72$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$72$$, !0);
  };
  $oj$$19$$.$_ojListView$ = function($SuperClass$$1$$, $methods$$2$$) {
    function $constructor$$2$$() {
    }
    $oj$$19$$.$Object$.$createSubclass$($constructor$$2$$, $SuperClass$$1$$, "");
    $constructor$$2$$.prototype = $$$$18$$.extend($constructor$$2$$.prototype, $methods$$2$$);
    return $constructor$$2$$;
  }(Object, {$LEFT_KEY$:37, $RIGHT_KEY$:39, $DOWN_KEY$:40, $UP_KEY$:38, $TAB_KEY$:9, $ENTER_KEY$:13, $ESC_KEY$:27, $F2_KEY$:113, $SPACE_KEY$:32, $STATE_EXPANDED$:0, $STATE_COLLAPSED$:1, $STATE_NONE$:2, $init$:function($opts$$20$$) {
    var $self$$115$$ = this;
    this.$ojContext$ = $opts$$20$$.$ojContext$;
    this.element = $opts$$20$$.element;
    this.options = $opts$$20$$;
    this.element.uniqueId().addClass(this.$GetStyleClass$() + " oj-component-initnode").attr("tabIndex", 0);
    this.$ojContext$._on(this.element, {click:function($event$$225$$) {
      $self$$115$$.$HandleMouseClick$($event$$225$$);
      $self$$115$$.$m_preActive$ = !1;
    }, mousedown:function() {
      $self$$115$$.$m_preActive$ = !0;
    }, mouseout:function($event$$227$$) {
      $self$$115$$.$_handleMouseOut$($event$$227$$);
    }, mouseover:function($event$$228$$) {
      $self$$115$$.$_handleMouseOver$($event$$228$$);
    }, keydown:function($event$$229$$) {
      $self$$115$$.$HandleKeyDown$($event$$229$$);
    }, focus:function($event$$230$$) {
      $self$$115$$.$HandleFocus$($event$$230$$);
    }, blur:function($event$$231$$) {
      $self$$115$$.$HandleBlur$($event$$231$$);
    }});
    $oj$$19$$.$AgentUtils$.$getAgentInfo$().browser === $oj$$19$$.$AgentUtils$.$BROWSER$.$FIREFOX$ && this.$ojContext$._on(this.$_getListContainer$(), {focus:function() {
      this.element.focus();
    }});
  }, $afterCreate$:function() {
    var $container$$12$$;
    this.$_buildList$();
    this.$_initContentHandler$();
    $container$$12$$ = this.$_getListContainer$();
    this.$_registerResizeListener$($container$$12$$[0]);
  }, refresh:function() {
    this.$_resetInternal$();
    this.$SetAriaProperties$();
    this.$_initContentHandler$();
  }, destroy:function() {
    this.element.removeClass(this.$GetStyleClass$() + " oj-component-initnode");
    this.$_unregisterResizeListener$(this.$_getListContainer$());
    this.$_resetInternal$();
    $oj$$19$$.$DomUtils$.unwrap(this.element, this.$_getListContainer$());
  }, $_resetInternal$:function() {
    this.$UnsetAriaProperties$();
    this.$_cleanupTabbableElementProperties$(this.element);
    null != this.$m_contentHandler$ && (this.$m_contentHandler$.$Destroy$(), this.$m_contentHandler$ = null);
    this.$m_active$ = null;
    this.$ClearCache$();
  }, $notifyDetached$:function() {
    this.$_getListContainer$().removeClass("oj-focus-ancestor");
    null != this.$m_active$ && $$$$18$$(this.$m_active$.elem).removeClass("oj-focus");
    null != this.$m_hoverItem$ && this.$_unhighlightElem$(this.$m_hoverItem$, "oj-hover");
  }, $notifyShown$:function() {
  }, getNodeBySubId:function($anchor$$1_item$$25_key$$96_locator$$25$$) {
    return null == $anchor$$1_item$$25_key$$96_locator$$25$$ ? this.element ? this.element[0] : null : "oj-listview-icon" === $anchor$$1_item$$25_key$$96_locator$$25$$.subId && ($anchor$$1_item$$25_key$$96_locator$$25$$ = $anchor$$1_item$$25_key$$96_locator$$25$$.key, $anchor$$1_item$$25_key$$96_locator$$25$$ = this.$FindElementByKey$($anchor$$1_item$$25_key$$96_locator$$25$$), null != $anchor$$1_item$$25_key$$96_locator$$25$$ && $anchor$$1_item$$25_key$$96_locator$$25$$.firstElementChild && ($anchor$$1_item$$25_key$$96_locator$$25$$ = 
    $anchor$$1_item$$25_key$$96_locator$$25$$.firstElementChild.firstElementChild, null != $anchor$$1_item$$25_key$$96_locator$$25$$ && ($$$$18$$($anchor$$1_item$$25_key$$96_locator$$25$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($anchor$$1_item$$25_key$$96_locator$$25$$).hasClass(this.$getCollapseIconStyleClass$())))) ? $anchor$$1_item$$25_key$$96_locator$$25$$ : null;
  }, getSubIdByNode:function($item$$26_key$$97_node$$48$$) {
    if (null != $item$$26_key$$97_node$$48$$ && $$$$18$$($item$$26_key$$97_node$$48$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($item$$26_key$$97_node$$48$$).hasClass(this.$getCollapseIconStyleClass$())) {
      if ($item$$26_key$$97_node$$48$$ = this.$FindItem$($item$$26_key$$97_node$$48$$), null != $item$$26_key$$97_node$$48$$ && 0 < $item$$26_key$$97_node$$48$$.length && ($item$$26_key$$97_node$$48$$ = this.$GetKey$($item$$26_key$$97_node$$48$$[0]), null != $item$$26_key$$97_node$$48$$)) {
        return{subId:"oj-listview-icon", key:$item$$26_key$$97_node$$48$$};
      }
    }
    return null;
  }, $_unregisterResizeListener$:function($element$$98$$) {
    $element$$98$$ && this.$_resizeHandler$ && $oj$$19$$.$DomUtils$.$removeResizeListener$($element$$98$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$99$$) {
    $element$$99$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$19$$.$DomUtils$.$addResizeListener$($element$$99$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$25$$, $height$$22$$) {
    0 < $width$$25$$ && 0 < $height$$22$$ && null != this.$m_contentHandler$ && this.$m_contentHandler$.HandleResize($width$$25$$, $height$$22$$);
  }, $ShouldRefresh$:function($options$$298$$) {
    return null != $options$$298$$.data || null != $options$$298$$.drillMode || null != $options$$298$$.item || null != $options$$298$$.scrollPolicy || null != $options$$298$$.scrollPolicyOptions;
  }, $setOptions$:function($elem$$30_expanded$$1_options$$299$$) {
    var $self$$116$$, $selection$$6$$, $i$$300$$;
    if (this.$ShouldRefresh$($elem$$30_expanded$$1_options$$299$$)) {
      return null != $elem$$30_expanded$$1_options$$299$$.data && (null == $elem$$30_expanded$$1_options$$299$$.currentItem && this.$SetOption$("currentItem", null), null == $elem$$30_expanded$$1_options$$299$$.selection && this.$_clearSelection$(!0)), !0;
    }
    if (null != $elem$$30_expanded$$1_options$$299$$.currentItem) {
      $elem$$30_expanded$$1_options$$299$$ = this.$FindElementByKey$($elem$$30_expanded$$1_options$$299$$.currentItem), null != $elem$$30_expanded$$1_options$$299$$ && ($elem$$30_expanded$$1_options$$299$$ = $$$$18$$($elem$$30_expanded$$1_options$$299$$), this.$SkipFocus$($elem$$30_expanded$$1_options$$299$$) || this.$_activeAndFocus$($elem$$30_expanded$$1_options$$299$$, null));
    } else {
      if (null != $elem$$30_expanded$$1_options$$299$$.expanded) {
        this.$m_contentHandler$.$IsHierarchical$() && ($elem$$30_expanded$$1_options$$299$$ = $elem$$30_expanded$$1_options$$299$$.expanded, Array.isArray($elem$$30_expanded$$1_options$$299$$) && (this.$_collapseAll$(), $self$$116$$ = this, $$$$18$$.each($elem$$30_expanded$$1_options$$299$$, function($index$$162$$, $value$$222$$) {
          $self$$116$$.$expandKey$($value$$222$$, !1, !1);
        })));
      } else {
        if (null != $elem$$30_expanded$$1_options$$299$$.selection) {
          if (this.$_isSelectionEnabled$()) {
            for ($elem$$30_expanded$$1_options$$299$$.selection = this.$_filterSelection$($elem$$30_expanded$$1_options$$299$$.selection), $selection$$6$$ = $elem$$30_expanded$$1_options$$299$$.selection, this.$_clearSelection$(!1), $i$$300$$ = 0;$i$$300$$ < $selection$$6$$.length;$i$$300$$++) {
              $elem$$30_expanded$$1_options$$299$$ = this.$FindElementByKey$($selection$$6$$[$i$$300$$]), null != $elem$$30_expanded$$1_options$$299$$ && this.$_applySelection$($elem$$30_expanded$$1_options$$299$$, $selection$$6$$[$i$$300$$]);
            }
          }
        } else {
          null != $elem$$30_expanded$$1_options$$299$$.selectionMode && (this.$_clearSelection$(!0), this.$SetAriaProperties$());
        }
      }
    }
    return!1;
  }, $Trigger$:function($type$$82$$, $event$$233$$, $ui$$5$$) {
    return this.$ojContext$._trigger($type$$82$$, $event$$233$$, $ui$$5$$);
  }, $SetOption$:function($key$$98$$, $value$$223$$, $flags$$24$$) {
    this.$ojContext$.option($key$$98$$, $value$$223$$, $flags$$24$$);
  }, $GetOption$:function($key$$99$$) {
    return this.$ojContext$.option($key$$99$$);
  }, $_initContentHandler$:function() {
    var $data$$145$$;
    $data$$145$$ = this.$GetOption$("data");
    if (null != $data$$145$$) {
      if ($data$$145$$ instanceof $oj$$19$$.$TableDataSource$) {
        this.$m_contentHandler$ = new $oj$$19$$.$TableDataSourceContentHandler$(this, this.element[0], $data$$145$$);
      } else {
        if ($data$$145$$ instanceof $oj$$19$$.$TreeDataSource$) {
          this.$m_contentHandler$ = new $oj$$19$$.$TreeDataSourceContentHandler$(this, this.element[0], $data$$145$$);
        } else {
          throw "Invalid data";
        }
      }
    } else {
      this.$m_contentHandler$ = new $oj$$19$$.$StaticContentHandler$(this, this.element[0]);
    }
    this.$_showStatusText$();
    this.$m_contentHandler$.$RenderContent$();
  }, $UpdateActiveDescendant$:function($elem$$31$$) {
    this.element.attr("aria-activedescendant", $elem$$31$$.attr("id"));
  }, $SetAriaProperties$:function() {
    this.element.attr("aria-activedescendant", "");
    this.$_isMultipleSelection$() ? this.element.attr("aria-multiselectable", !0) : this.$_isSelectionEnabled$() && this.element.attr("aria-multiselectable", !1);
  }, $UnsetAriaProperties$:function() {
    this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable");
  }, $_buildList$:function() {
    var $container$$13$$, $status$$20$$;
    $container$$13$$ = this.$_getListContainer$();
    this.$SetAriaProperties$();
    $status$$20$$ = this.$_buildStatus$();
    $container$$13$$.append($status$$20$$);
    this.$m_status$ = $status$$20$$;
  }, $_buildStatus$:function() {
    var $root$$8$$ = $$$$18$$(document.createElement("div"));
    $root$$8$$.addClass("oj-listview-status").attr({id:this.$_createSubId$("status"), role:"status"});
    return $root$$8$$;
  }, $_showStatusText$:function() {
    var $msg$$23$$ = this.$ojContext$.$getTranslatedString$("msgFetchingData");
    this.$m_status$.text($msg$$23$$).show();
  }, $_hideStatusText$:function() {
    this.$m_status$.hide();
  }, $getRootElement$:function() {
    return this.$_getListContainer$();
  }, $_getListContainer$:function() {
    null == this.$m_container$ && (this.$m_container$ = this.$_createListContainer$());
    return this.$m_container$;
  }, $_createListContainer$:function() {
    var $listContainer$$ = $$$$18$$(document.createElement("div"));
    $listContainer$$.addClass(this.$GetContainerStyleClass$()).addClass("oj-component");
    this.element.parent()[0].replaceChild($listContainer$$[0], this.element[0]);
    $listContainer$$.prepend(this.element);
    return $listContainer$$;
  }, $_getEmptyText$:function() {
    return this.$ojContext$.$getTranslatedString$("msgNoData");
  }, $_buildEmptyText$:function() {
    var $emptyText$$, $empty$$1$$;
    $emptyText$$ = this.$_getEmptyText$();
    $empty$$1$$ = document.createElement("li");
    $empty$$1$$.id = this.$_createSubId$("empty");
    $empty$$1$$.className = "oj-listview-empty-text";
    $empty$$1$$.textContent = $emptyText$$;
    return $empty$$1$$;
  }, $GetState$:function($expanded$$2_item$$27$$) {
    $expanded$$2_item$$27$$ = $expanded$$2_item$$27$$.attr("aria-expanded");
    return "true" == $expanded$$2_item$$27$$ ? this.$STATE_EXPANDED$ : "false" == $expanded$$2_item$$27$$ ? this.$STATE_COLLAPSED$ : this.$STATE_NONE$;
  }, $SetState$:function($item$$28$$, $state$$9$$) {
    var $expandable$$1$$ = this.$isExpandable$();
    $state$$9$$ == this.$STATE_EXPANDED$ ? ($item$$28$$.attr("aria-expanded", "true"), $expandable$$1$$ && $item$$28$$.removeClass("oj-collapsed").addClass("oj-expanded")) : $state$$9$$ == this.$STATE_COLLAPSED$ && ($item$$28$$.attr("aria-expanded", "false"), $expandable$$1$$ && $item$$28$$.removeClass("oj-expanded").addClass("oj-collapsed"));
  }, $_getItemOption$:function($name$$105_value$$224$$, $context$$73$$, $resolve$$46$$) {
    $name$$105_value$$224$$ = this.options.item[$name$$105_value$$224$$];
    return "function" == typeof $name$$105_value$$224$$ && $resolve$$46$$ ? $name$$105_value$$224$$.call(this, $context$$73$$) : $name$$105_value$$224$$;
  }, $_getItemRenderer$:function() {
    var $renderer$$1$$ = this.$_getItemOption$("renderer", null, !1);
    return "function" != typeof $renderer$$1$$ ? null : $renderer$$1$$;
  }, $itemRenderComplete$:function($elem$$32$$, $context$$74$$) {
    var $clone$$2_expanded$$3_selection$$7$$, $i$$301_index$$163$$, $self$$118$$;
    this.$_disableAllTabbableElements$($elem$$32$$);
    if (this.$_isSelectionEnabled$()) {
      if ($clone$$2_expanded$$3_selection$$7$$ = this.$GetOption$("selection"), this.$IsSelectable$($elem$$32$$)) {
        for ($i$$301_index$$163$$ = 0;$i$$301_index$$163$$ < $clone$$2_expanded$$3_selection$$7$$.length;$i$$301_index$$163$$++) {
          if ($clone$$2_expanded$$3_selection$$7$$[$i$$301_index$$163$$] == $context$$74$$.key && (this.$_applySelection$($elem$$32$$, $clone$$2_expanded$$3_selection$$7$$[$i$$301_index$$163$$]), !this.$_isMultipleSelection$())) {
            1 < $clone$$2_expanded$$3_selection$$7$$.length && this.$SetOption$("selection", [$context$$74$$.key], {_context:{originalEvent:null, $internalSet$:!0}, changed:!0});
            break;
          }
        }
      } else {
        $i$$301_index$$163$$ = $clone$$2_expanded$$3_selection$$7$$.indexOf($context$$74$$.key), -1 < $i$$301_index$$163$$ && ($clone$$2_expanded$$3_selection$$7$$ = $clone$$2_expanded$$3_selection$$7$$.slice(0), $clone$$2_expanded$$3_selection$$7$$.splice($i$$301_index$$163$$, 1), this.$SetOption$("selection", $clone$$2_expanded$$3_selection$$7$$, {_context:{originalEvent:null, $internalSet$:!0}, changed:!0}));
      }
    }
    this.$m_contentHandler$.$IsHierarchical$() && this.$GetState$($$$$18$$($elem$$32$$)) == this.$STATE_COLLAPSED$ && ($clone$$2_expanded$$3_selection$$7$$ = this.$GetOption$("expanded"), this.$_isExpandAll$() ? this.$ExpandItem$($$$$18$$($elem$$32$$), null, !1, null, !1, !1, !1) : Array.isArray($clone$$2_expanded$$3_selection$$7$$) && ($self$$118$$ = this, $$$$18$$.each($clone$$2_expanded$$3_selection$$7$$, function($index$$164$$, $value$$225$$) {
      $value$$225$$ == $context$$74$$.key && $self$$118$$.$ExpandItem$($$$$18$$($elem$$32$$), null, !1, null, !1, !1, !1);
    })));
    null != this.$m_active$ && $context$$74$$.key == this.$m_active$.key && null != this.$m_active$.elem && $elem$$32$$ != this.$m_active$.elem.get(0) && (this.$m_active$.elem = $$$$18$$($elem$$32$$));
  }, $renderComplete$:function() {
    var $current$$5_elem$$33_empty$$2$$;
    this.$_hideStatusText$();
    $$$$18$$(document.getElementById(this.$_createSubId$("empty"))).remove();
    0 == this.element[0].childElementCount ? ($current$$5_elem$$33_empty$$2$$ = this.$_buildEmptyText$(), this.element.append($current$$5_elem$$33_empty$$2$$)) : (this.$m_items$ = null, $current$$5_elem$$33_empty$$2$$ = this.$GetOption$("currentItem"), null == this.$m_active$ && null != $current$$5_elem$$33_empty$$2$$ && ($current$$5_elem$$33_empty$$2$$ = this.$FindElementByKey$($current$$5_elem$$33_empty$$2$$), null == $current$$5_elem$$33_empty$$2$$ || this.$SkipFocus$($$$$18$$($current$$5_elem$$33_empty$$2$$)) || 
    this.$_activeAndFocus$($$$$18$$($current$$5_elem$$33_empty$$2$$), null)), this.$_getListContainer$().hasClass("oj-focus-ancestor") && null == this.$m_active$ && this.$_initFocus$());
    this.$Trigger$("ready", null, {});
  }, $ClearCache$:function() {
    this.$m_keyElemMap$ = this.$m_items$ = null;
  }, $notifyContextMenuGesture$:function($menu$$6_openOptions$$4_parent$$24$$, $event$$234$$, $eventType$$39$$) {
    if (this.$IsNodeEditableOrClickable$($$$$18$$($event$$234$$.target))) {
      return!1;
    }
    $menu$$6_openOptions$$4_parent$$24$$ = $$$$18$$($event$$234$$.target).closest("." + this.$getItemElementStyleClass$());
    0 < $menu$$6_openOptions$$4_parent$$24$$.length && !this.$SkipFocus$($$$$18$$($menu$$6_openOptions$$4_parent$$24$$[0])) && this.$_activeAndFocus$($$$$18$$($menu$$6_openOptions$$4_parent$$24$$[0]), null);
    $menu$$6_openOptions$$4_parent$$24$$ = {launcher:this.element, initialFocus:"menu"};
    "keyboard" === $eventType$$39$$ && ($menu$$6_openOptions$$4_parent$$24$$.position = {my:"start top", at:"start bottom", of:this.$m_active$.elem});
    this.$ojContext$.$_OpenContextMenu$($event$$234$$, $eventType$$39$$, $menu$$6_openOptions$$4_parent$$24$$);
  }, $IsElementEditableOrClickable$:function($node$$49$$) {
    return null != $node$$49$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/);
  }, $IsNodeEditableOrClickable$:function($node$$50$$) {
    for (;null != $node$$50$$ && $node$$50$$[0] != this.element[0] && "LI" != $node$$50$$.prop("nodeName");) {
      if (3 != $node$$50$$[0].nodeType) {
        var $tabIndex$$1$$ = $node$$50$$.attr("tabIndex"), $origTabIndex$$ = $node$$50$$.attr("data-oj-tabindex");
        if (null != $tabIndex$$1$$ && 0 <= $tabIndex$$1$$ || this.$IsElementEditableOrClickable$($node$$50$$) && (-1 != $tabIndex$$1$$ || -1 != $origTabIndex$$)) {
          return!0;
        }
      }
      $node$$50$$ = $node$$50$$.parent();
    }
    return!1;
  }, $_disableAllTabbableElements$:function($element$$100$$) {
    var $tabIndex$$2$$;
    $$$$18$$($element$$100$$).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function() {
      $$$$18$$(this).removeAttr("data-first").removeAttr("data-last");
      $tabIndex$$2$$ = parseInt($$$$18$$(this).attr("tabIndex"), 10);
      (isNaN($tabIndex$$2$$) || 0 <= $tabIndex$$2$$) && $$$$18$$(this).attr("tabIndex", -1).attr("data-tabmod", isNaN($tabIndex$$2$$) ? -1 : $tabIndex$$2$$);
    });
  }, $_enableAllTabbableElements$:function($elem$$34_elems$$) {
    var $tabIndex$$3$$;
    $elem$$34_elems$$ = $$$$18$$($elem$$34_elems$$).find("[data-tabmod]").each(function() {
      $tabIndex$$3$$ = parseInt($$$$18$$(this).attr("data-tabmod"), 10);
      $$$$18$$(this).removeAttr("data-tabmod");
      -1 == $tabIndex$$3$$ ? $$$$18$$(this).removeAttr("tabIndex") : $$$$18$$(this).attr("tabIndex", $tabIndex$$3$$);
    });
    $elem$$34_elems$$.first().attr("data-first", "true");
    $elem$$34_elems$$.last().attr("data-last", "true");
  }, $_cleanupTabbableElementProperties$:function($elem$$35$$) {
    $$$$18$$($elem$$35$$).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last");
  }, $SkipFocus$:function($item$$29$$) {
    return $item$$29$$.hasClass("oj-skipfocus");
  }, $HandleFocus$:function($event$$235$$) {
    this.$_getListContainer$().addClass("oj-focus-ancestor");
    null == this.$m_active$ ? this.$_isTouchSupport$() || this.$m_preActive$ || this.$_initFocus$($event$$235$$) : $$$$18$$(this.$m_active$.elem).addClass("oj-focus");
  }, $_initFocus$:function($event$$236$$) {
    var $items$$2$$, $i$$302$$, $item$$31$$;
    $items$$2$$ = this.$_getItemsCache$();
    for ($i$$302$$ = 0;$i$$302$$ < $items$$2$$.length;$i$$302$$++) {
      if ($item$$31$$ = $$$$18$$($items$$2$$[$i$$302$$]), !this.$SkipFocus$($item$$31$$)) {
        this.$_activeAndFocus$($item$$31$$, $event$$236$$);
        break;
      }
    }
  }, $HandleBlur$:function() {
    this.$_getListContainer$().removeClass("oj-focus-ancestor");
    null != this.$m_active$ && $$$$18$$(this.$m_active$.elem).removeClass("oj-focus");
  }, $_handleMouseOut$:function($event$$238_item$$32$$) {
    $event$$238_item$$32$$ = this.$FindItem$($event$$238_item$$32$$.target);
    null != $event$$238_item$$32$$ && (this.$m_hoverItem$ = null, this.$_unhighlightElem$($event$$238_item$$32$$, "oj-hover"));
  }, $_handleMouseOver$:function($event$$239_item$$33$$) {
    $event$$239_item$$33$$ = this.$FindItem$($event$$239_item$$33$$.target);
    null == $event$$239_item$$33$$ || this.$SkipFocus$($event$$239_item$$33$$) || (this.$m_hoverItem$ = $event$$239_item$$33$$, this.$_highlightElem$($event$$239_item$$33$$, "oj-hover"));
  }, $HandleKeyDown$:function($event$$240$$) {
    var $keyCode$$4$$, $current$$6$$;
    if (this.$isExpandable$() && ($keyCode$$4$$ = $event$$240$$.keyCode, $keyCode$$4$$ === this.$LEFT_KEY$ || $keyCode$$4$$ === this.$RIGHT_KEY$)) {
      if ($current$$6$$ = this.$m_active$.elem, $keyCode$$4$$ === this.$LEFT_KEY$) {
        if (this.$GetState$($current$$6$$) == this.$STATE_EXPANDED$) {
          this.$CollapseItem$($current$$6$$, $event$$240$$, !0, this.$m_active$.key, !0, !0);
          return;
        }
      } else {
        if (this.$GetState$($current$$6$$) == this.$STATE_COLLAPSED$) {
          this.$ExpandItem$($current$$6$$, $event$$240$$, !0, this.$m_active$.key, !0, !0, !0);
          return;
        }
      }
    }
    !0 === this.$HandleSelectionOrActiveKeyDown$($event$$240$$) && $event$$240$$.preventDefault();
  }, $HandleMouseClick$:function($event$$241$$) {
    var $collapseIconClass_item$$34$$, $expandIconClass$$, $groupItemClass$$, $target$$81$$;
    0 === $event$$241$$.button && ($collapseIconClass_item$$34$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$ = this.$getExpandIconStyleClass$(), $groupItemClass$$ = this.$getGroupItemStyleClass$(), $target$$81$$ = $$$$18$$($event$$241$$.target), $target$$81$$.hasClass($expandIconClass$$) ? (this.$_collapse$($event$$241$$), $event$$241$$.preventDefault()) : $target$$81$$.hasClass($collapseIconClass_item$$34$$) ? (this.$_expand$($event$$241$$), $event$$241$$.preventDefault()) : ($collapseIconClass_item$$34$$ = 
    this.$FindItem$($target$$81$$), null == $collapseIconClass_item$$34$$ || 0 == $collapseIconClass_item$$34$$.length || this.$SkipFocus$($collapseIconClass_item$$34$$) || (this.$_isSelectionEnabled$() && this.$IsSelectable$($collapseIconClass_item$$34$$[0]) ? this.$_isTouchSupport$() ? this.$_handleTouchSelection$($collapseIconClass_item$$34$$, $event$$241$$) : this.$HandleClickSelection$($collapseIconClass_item$$34$$, $event$$241$$) : this.$_handleClickActive$($collapseIconClass_item$$34$$, $event$$241$$), 
    this.$isExpandable$() && $target$$81$$.closest("." + $groupItemClass$$) && (this.$GetState$($collapseIconClass_item$$34$$) == this.$STATE_COLLAPSED$ ? this.$_expand$($event$$241$$) : this.$GetState$($collapseIconClass_item$$34$$) == this.$STATE_EXPANDED$ && this.$_collapse$($event$$241$$)))));
  }, $_isTouchSupport$:function() {
    return $oj$$19$$.$DomUtils$.$isTouchSupported$();
  }, $_ctrlEquivalent$:function($event$$242$$) {
    return $oj$$19$$.$DomUtils$.$isMetaKeyPressed$($event$$242$$);
  }, $_createSubId$:function($subId$$27$$) {
    return[this.element.attr("id"), $subId$$27$$].join(":");
  }, $FindItem$:function($elem$$36$$) {
    return $$$$18$$($elem$$36$$).closest("." + this.$getItemElementStyleClass$());
  }, $_getListContainerBorderWidth$:function() {
    null == this.$m_borderWidth$ && (this.$m_borderWidth$ = parseInt(this.$_getListContainer$().css("border-top-width"), 10) + parseInt(this.$_getListContainer$().css("border-bottom-width"), 10));
    return this.$m_borderWidth$;
  }, $_scrollToVisible$:function($container$$14_elem$$37$$) {
    var $scrollTop$$3_top$$2$$, $height$$23$$, $containerScrollTop$$, $containerHeight$$;
    $scrollTop$$3_top$$2$$ = $container$$14_elem$$37$$.offsetTop;
    $height$$23$$ = $container$$14_elem$$37$$.offsetHeight;
    $container$$14_elem$$37$$ = this.$_getListContainer$()[0];
    $containerScrollTop$$ = $container$$14_elem$$37$$.scrollTop;
    $containerHeight$$ = $container$$14_elem$$37$$.offsetHeight;
    $scrollTop$$3_top$$2$$ >= $containerScrollTop$$ && $scrollTop$$3_top$$2$$ + $height$$23$$ <= $containerScrollTop$$ + $containerHeight$$ || ($scrollTop$$3_top$$2$$ = Math.max(0, Math.min($scrollTop$$3_top$$2$$, Math.abs($scrollTop$$3_top$$2$$ + $height$$23$$ - $containerHeight$$))), $scrollTop$$3_top$$2$$ > $containerScrollTop$$ && ($scrollTop$$3_top$$2$$ += this.$_getListContainerBorderWidth$()), $container$$14_elem$$37$$.scrollTop = $scrollTop$$3_top$$2$$);
  }, $GetKey$:function($elem$$38$$) {
    return this.$m_contentHandler$.$GetKey$($elem$$38$$);
  }, $FindElementByKey$:function($key$$100$$) {
    var $id$$34$$;
    return null != this.$m_keyElemMap$ && ($id$$34$$ = this.$m_keyElemMap$[$key$$100$$], null != $id$$34$$) ? document.getElementById($id$$34$$) : this.$m_contentHandler$.$FindElementByKey$($key$$100$$);
  }, $IsArrowKey$:function($keyCode$$5$$) {
    return $keyCode$$5$$ == this.$UP_KEY$ || $keyCode$$5$$ == this.$DOWN_KEY$;
  }, $_getItemsCache$:function() {
    var $disclosureStyleClass$$, $selector$$22$$, $isGroup$$1$$;
    null == this.$m_items$ && ($disclosureStyleClass$$ = this.$getGroupCollapseStyleClass$(), $selector$$22$$ = "." + this.$getItemElementStyleClass$() + ":visible", this.$m_items$ = this.element.find($selector$$22$$).filter(function() {
      return($isGroup$$1$$ = $$$$18$$(this).parent().hasClass($disclosureStyleClass$$)) ? "false" != $$$$18$$(this).parent().parent().attr("aria-expanded") : !0;
    }));
    return this.$m_items$;
  }, $HandleArrowKeys$:function($keyCode$$6_next$$3$$, $isExtend$$, $event$$243$$) {
    var $current$$7_currentIndex$$1$$, $processed$$1$$, $items$$3$$;
    if (!this.$m_contentHandler$.$IsReady$()) {
      return!0;
    }
    $current$$7_currentIndex$$1$$ = !$isExtend$$ || this.$m_isNavigate$ ? this.$m_active$.elem : this.$m_selectionFrontier$;
    $processed$$1$$ = !1;
    $items$$3$$ = this.$_getItemsCache$();
    $current$$7_currentIndex$$1$$ = $items$$3$$.index($current$$7_currentIndex$$1$$);
    switch($keyCode$$6_next$$3$$) {
      case this.$UP_KEY$:
        $current$$7_currentIndex$$1$$--;
        if (0 <= $current$$7_currentIndex$$1$$) {
          for ($keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$7_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$6_next$$3$$);) {
            $current$$7_currentIndex$$1$$--;
            if (0 > $current$$7_currentIndex$$1$$) {
              return!1;
            }
            $keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$7_currentIndex$$1$$]);
          }
          $isExtend$$ ? (this.$_extendSelection$($keyCode$$6_next$$3$$, $event$$243$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$6_next$$3$$, $event$$243$$), this.$m_isNavigate$ = !0);
        }
        $processed$$1$$ = !0;
        break;
      case this.$DOWN_KEY$:
        $current$$7_currentIndex$$1$$++;
        if ($current$$7_currentIndex$$1$$ < $items$$3$$.length) {
          for ($keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$7_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$6_next$$3$$);) {
            $current$$7_currentIndex$$1$$++;
            if ($current$$7_currentIndex$$1$$ == $items$$3$$.length) {
              return!1;
            }
            $keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$7_currentIndex$$1$$]);
          }
          $isExtend$$ ? (this.$_extendSelection$($keyCode$$6_next$$3$$, $event$$243$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$6_next$$3$$, $event$$243$$), this.$m_isNavigate$ = !0);
        }
        $processed$$1$$ = !0;
    }
    return $processed$$1$$;
  }, $_isActionableMode$:function() {
    return "actionable" == this.$m_keyMode$;
  }, $_setActionableMode$:function($flag$$2$$) {
    this.$m_keyMode$ = $flag$$2$$ ? "actionable" : "navigation";
    $flag$$2$$ || this.element[0].focus();
  }, $_setActive$:function($item$$35$$, $event$$244$$) {
    var $elem$$39_key$$101$$, $active_cancelled_ui$$7$$;
    if (null != $item$$35$$) {
      if ($elem$$39_key$$101$$ = $item$$35$$[0], $elem$$39_key$$101$$ = this.$GetKey$($elem$$39_key$$101$$), null == this.$m_active$ || $elem$$39_key$$101$$ != this.$m_active$.key) {
        $active_cancelled_ui$$7$$ = {key:$elem$$39_key$$101$$, item:$item$$35$$}, null != this.$m_active$ && ($active_cancelled_ui$$7$$.previousKey = this.$m_active$.key, $active_cancelled_ui$$7$$.previousItem = this.$m_active$.elem), $active_cancelled_ui$$7$$ = !this.$Trigger$("beforeCurrentItem", $event$$244$$, $active_cancelled_ui$$7$$), $active_cancelled_ui$$7$$ || (this.$m_active$ = $active_cancelled_ui$$7$$ = {key:$elem$$39_key$$101$$, elem:$item$$35$$}, this.$UpdateActiveDescendant$($item$$35$$), 
        this.$SetOption$("currentItem", $elem$$39_key$$101$$));
      }
    } else {
      this.$m_active$ = null;
    }
  }, $HighlightActive$:function() {
    null != this.$m_active$ && this.$_highlightElem$(this.$m_active$.elem, "oj-focus");
  }, $UnhighlightActive$:function() {
    null != this.$m_active$ && this.$_unhighlightElem$(this.$m_active$.elem, "oj-focus");
  }, $_handleClickActive$:function($item$$36$$, $event$$245$$) {
    this.$_activeAndFocus$($item$$36$$, $event$$245$$);
  }, $_activeAndFocus$:function($item$$37$$, $event$$246$$) {
    this.$_scrollToVisible$($item$$37$$[0]);
    this.$UnhighlightActive$();
    this.$_setActive$($item$$37$$, $event$$246$$);
    this.$HighlightActive$();
  }, $_isSelectionEnabled$:function() {
    return "none" != this.$GetOption$("selectionMode");
  }, $_isMultipleSelection$:function() {
    return "multiple" == this.$GetOption$("selectionMode");
  }, $IsSelectable$:function($item$$38$$) {
    return $item$$38$$.hasAttribute("aria-selected");
  }, $_filterSelection$:function($selection$$8$$) {
    var $filtered$$2$$, $i$$303$$, $elem$$40$$;
    $filtered$$2$$ = [];
    for ($i$$303$$ = 0;$i$$303$$ < $selection$$8$$.length && ($elem$$40$$ = this.$FindElementByKey$($selection$$8$$[$i$$303$$]), null == $elem$$40$$ || !this.$IsSelectable$($elem$$40$$) || ($filtered$$2$$.push($selection$$8$$[$i$$303$$]), this.$_isMultipleSelection$()));$i$$303$$++) {
    }
    return $filtered$$2$$;
  }, $_unhighlightSelection$:function() {
    var $self$$119$$, $elem$$41$$;
    null != this.$m_keyElemMap$ && ($self$$119$$ = this, $$$$18$$.each(this.$GetOption$("selection"), function($index$$168$$, $value$$226$$) {
      $elem$$41$$ = $self$$119$$.$FindElementByKey$($value$$226$$);
      null != $elem$$41$$ && $self$$119$$.$_unhighlightElem$($elem$$41$$, "oj-selected");
    }));
  }, $_highlightElem$:function($elem$$42$$, $style$$3$$) {
    this.$HighlightUnhighlightElem$($elem$$42$$, $style$$3$$, !0);
  }, $_unhighlightElem$:function($elem$$43$$, $style$$4$$) {
    this.$HighlightUnhighlightElem$($elem$$43$$, $style$$4$$, !1);
  }, $HighlightUnhighlightElem$:function($elem$$44$$, $style$$5$$, $highlight$$) {
    var $group$$3$$;
    $elem$$44$$ = $$$$18$$($elem$$44$$);
    "oj-selected" == $style$$5$$ && $elem$$44$$.attr("aria-selected", $highlight$$ ? "true" : "false");
    $group$$3$$ = $elem$$44$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$3$$.length && ($elem$$44$$ = $$$$18$$($group$$3$$[0]));
    $highlight$$ ? $elem$$44$$.addClass($style$$5$$) : $elem$$44$$.removeClass($style$$5$$);
  }, $HandleClickSelection$:function($item$$39$$, $event$$247$$) {
    var $ctrlKey$$2$$, $shiftKey$$2$$;
    this.$_scrollToVisible$($item$$39$$[0]);
    $ctrlKey$$2$$ = this.$_ctrlEquivalent$($event$$247$$);
    $shiftKey$$2$$ = $event$$247$$.shiftKey;
    this.$_isMultipleSelection$() ? $ctrlKey$$2$$ || $shiftKey$$2$$ ? !$ctrlKey$$2$$ && $shiftKey$$2$$ ? this.$_extendSelection$($item$$39$$, $event$$247$$) : this.$_augmentSelectionAndFocus$($item$$39$$, $event$$247$$) : this.$SelectAndFocus$($item$$39$$, $event$$247$$) : this.$SelectAndFocus$($item$$39$$, $event$$247$$);
  }, $_handleTouchSelection$:function($item$$40$$, $event$$248$$) {
    this.$_isMultipleSelection$() ? this.$_augmentSelectionAndFocus$($item$$40$$, $event$$248$$) : this.$SelectAndFocus$($item$$40$$, $event$$248$$);
  }, $_clearSelection$:function($updateOption$$) {
    this.$_unhighlightSelection$();
    $updateOption$$ && this.$SetOption$("selection", [], {_context:{originalEvent:null, $internalSet$:!0}, changed:!0});
    this.$m_selectionFrontier$ = null;
  }, $SelectAndFocus$:function($item$$41$$, $event$$249$$) {
    this.$_clearSelection$(!1);
    this.$_augmentSelectionAndFocus$($item$$41$$, $event$$249$$, []);
  }, $_extendSelection$:function($item$$42$$, $event$$250$$) {
    var $current$$8$$;
    null != this.$m_active$ && ($current$$8$$ = this.$m_selectionFrontier$, $current$$8$$ != $item$$42$$ && this.$_extendSelectionRange$(this.$m_active$.elem, $item$$42$$, $event$$250$$));
  }, $_extendSelectionRange$:function($from$$1$$, $to$$1$$, $event$$251$$) {
    this.$_clearSelection$(!1);
    this.$m_selectionFrontier$ = $to$$1$$;
    this.$_highlightRange$($from$$1$$, $to$$1$$, $event$$251$$);
    this.$HighlightActive$();
  }, $_highlightRange$:function($start$$42_startIndex$$30_to$$2$$, $end$$15_from$$2_i$$304$$, $event$$252$$) {
    var $selection$$9$$, $items$$4$$, $endIndex$$10_item$$43$$, $key$$102$$;
    $selection$$9$$ = [];
    $items$$4$$ = this.$_getItemsCache$();
    $start$$42_startIndex$$30_to$$2$$ = $items$$4$$.index($start$$42_startIndex$$30_to$$2$$);
    $endIndex$$10_item$$43$$ = $items$$4$$.index($end$$15_from$$2_i$$304$$);
    $start$$42_startIndex$$30_to$$2$$ > $endIndex$$10_item$$43$$ ? $end$$15_from$$2_i$$304$$ = $endIndex$$10_item$$43$$ : ($end$$15_from$$2_i$$304$$ = $start$$42_startIndex$$30_to$$2$$, $start$$42_startIndex$$30_to$$2$$ = $endIndex$$10_item$$43$$);
    for (;$end$$15_from$$2_i$$304$$ <= $start$$42_startIndex$$30_to$$2$$;$end$$15_from$$2_i$$304$$++) {
      $endIndex$$10_item$$43$$ = $items$$4$$[$end$$15_from$$2_i$$304$$], this.$IsSelectable$($endIndex$$10_item$$43$$) && ($key$$102$$ = this.$m_contentHandler$.$GetKey$($endIndex$$10_item$$43$$), this.$_applySelection$($endIndex$$10_item$$43$$, $key$$102$$), $selection$$9$$.push($key$$102$$));
    }
    this.$SetOption$("selection", $selection$$9$$, {_context:{originalEvent:$event$$252$$, $internalSet$:!0}, changed:!0});
  }, $_applySelection$:function($element$$101$$, $key$$103$$) {
    null == this.$m_keyElemMap$ && (this.$m_keyElemMap$ = {});
    this.$m_keyElemMap$[$key$$103$$] = $$$$18$$($element$$101$$).attr("id");
    this.$_highlightElem$($element$$101$$, "oj-selected");
  }, $_augmentSelectionAndFocus$:function($item$$44$$, $event$$253$$, $selection$$10$$) {
    var $key$$104$$, $index$$169$$;
    $key$$104$$ = this.$GetKey$($item$$44$$[0]);
    void 0 == $selection$$10$$ && ($selection$$10$$ = this.$GetOption$("selection").slice(0));
    this.$UnhighlightActive$();
    $index$$169$$ = $selection$$10$$.indexOf($key$$104$$);
    -1 < $index$$169$$ ? (this.$_unhighlightElem$($item$$44$$, "oj-selected"), $selection$$10$$.splice($index$$169$$, 1)) : (this.$m_selectionFrontier$ = $item$$44$$, this.$_applySelection$($item$$44$$, $key$$104$$), $selection$$10$$.push($key$$104$$));
    this.$_setActive$($item$$44$$, $event$$253$$);
    this.$HighlightActive$();
    this.$SetOption$("selection", $selection$$10$$, {_context:{originalEvent:$event$$253$$, $internalSet$:!0}, changed:!0});
  }, $ToggleSelection$:function($event$$254$$, $keepCurrentSelection$$, $skipIfNotSelected$$) {
    var $selection$$11$$, $item$$45$$, $key$$105$$, $index$$170$$;
    $selection$$11$$ = this.$GetOption$("selection").slice(0);
    $item$$45$$ = this.$m_active$.elem;
    $key$$105$$ = this.$m_active$.key;
    $index$$170$$ = $selection$$11$$.indexOf($key$$105$$);
    if (-1 < $index$$170$$) {
      if ($skipIfNotSelected$$) {
        return;
      }
      this.$_unhighlightElem$($item$$45$$, "oj-selected");
      $selection$$11$$.splice($index$$170$$, 1);
      0 == $selection$$11$$.length && (this.$m_selectionFrontier$ = null);
    } else {
      this.$IsSelectable$($item$$45$$[0]) && ($keepCurrentSelection$$ || (this.$_clearSelection$(!1), $selection$$11$$.length = 0), this.$m_selectionFrontier$ = $item$$45$$, this.$_applySelection$($item$$45$$, $key$$105$$), $selection$$11$$.push($key$$105$$));
    }
    this.$SetOption$("selection", $selection$$11$$, {_context:{originalEvent:$event$$254$$, $internalSet$:!0}, changed:!0});
  }, $HandleSelectionOrActiveKeyDown$:function($event$$255$$) {
    var $first$$6_keyCode$$7$$, $ctrlKey$$3_current$$9_last$$, $shiftKey$$3$$, $processed$$2$$ = !1;
    if (null == this.$m_active$) {
      return!1;
    }
    $first$$6_keyCode$$7$$ = $event$$255$$.keyCode;
    $ctrlKey$$3_current$$9_last$$ = this.$m_active$.elem;
    this.$_isActionableMode$() ? $first$$6_keyCode$$7$$ == this.$ESC_KEY$ ? (this.$_setActionableMode$(!1), this.$_disableAllTabbableElements$($ctrlKey$$3_current$$9_last$$), this.$HighlightActive$(), $processed$$2$$ = !0) : $first$$6_keyCode$$7$$ === this.$TAB_KEY$ && ($first$$6_keyCode$$7$$ = $ctrlKey$$3_current$$9_last$$.find("[data-first]"), $ctrlKey$$3_current$$9_last$$ = $ctrlKey$$3_current$$9_last$$.find("[data-last]"), $event$$255$$.shiftKey ? 0 < $first$$6_keyCode$$7$$.length && 0 < $ctrlKey$$3_current$$9_last$$.length && 
    $first$$6_keyCode$$7$$ != $ctrlKey$$3_current$$9_last$$ && $event$$255$$.target == $first$$6_keyCode$$7$$[0] && ($ctrlKey$$3_current$$9_last$$[0].focus(), $processed$$2$$ = !0) : 0 < $first$$6_keyCode$$7$$.length && 0 < $ctrlKey$$3_current$$9_last$$.length && $first$$6_keyCode$$7$$ != $ctrlKey$$3_current$$9_last$$ && $event$$255$$.target == $ctrlKey$$3_current$$9_last$$[0] && ($first$$6_keyCode$$7$$[0].focus(), $processed$$2$$ = !0)) : $first$$6_keyCode$$7$$ == this.$F2_KEY$ ? (this.$_enableAllTabbableElements$($ctrlKey$$3_current$$9_last$$), 
    $first$$6_keyCode$$7$$ = $ctrlKey$$3_current$$9_last$$.find("[data-first]"), 0 < $first$$6_keyCode$$7$$.length && ($first$$6_keyCode$$7$$[0].focus(), this.$_setActionableMode$(!0))) : $first$$6_keyCode$$7$$ == this.$SPACE_KEY$ && this.$_isSelectionEnabled$() ? ($ctrlKey$$3_current$$9_last$$ = this.$_ctrlEquivalent$($event$$255$$), ($shiftKey$$3$$ = $event$$255$$.shiftKey) && !$ctrlKey$$3_current$$9_last$$ && null != this.$m_selectionFrontier$ && this.$_isMultipleSelection$() ? this.$_extendSelectionRange$(this.$m_selectionFrontier$, 
    this.$m_active$.elem, $event$$255$$) : this.$ToggleSelection$($event$$255$$, $ctrlKey$$3_current$$9_last$$ && !$shiftKey$$3$$ && this.$_isMultipleSelection$(), !1), $processed$$2$$ = !0) : $first$$6_keyCode$$7$$ == this.$ENTER_KEY$ && this.$_isSelectionEnabled$() ? this.$ToggleSelection$($event$$255$$, !1, !0) : this.$IsArrowKey$($first$$6_keyCode$$7$$) && ($ctrlKey$$3_current$$9_last$$ = this.$_ctrlEquivalent$($event$$255$$), $shiftKey$$3$$ = $event$$255$$.shiftKey, $ctrlKey$$3_current$$9_last$$ || 
    ($processed$$2$$ = this.$HandleArrowKeys$($first$$6_keyCode$$7$$, $shiftKey$$3$$ && this.$_isSelectionEnabled$() && this.$_isMultipleSelection$(), $event$$255$$)));
    return $processed$$2$$;
  }, $isExpandable$:function() {
    return "none" != this.$GetOption$("drillMode");
  }, $_isExpandAll$:function() {
    var $expanded$$4$$ = this.$GetOption$("expanded");
    if ("auto" === $expanded$$4$$) {
      if (!this.$isExpandable$()) {
        return!0;
      }
    } else {
      if ("all" === $expanded$$4$$) {
        return!0;
      }
    }
    return!1;
  }, $expandKey$:function($key$$106$$, $fireBefore$$, $fireAfter$$) {
    var $item$$46$$ = this.$FindElementByKey$($key$$106$$);
    null != $item$$46$$ && this.$ExpandItem$($$$$18$$($item$$46$$), null, !1, $key$$106$$, $fireBefore$$, $fireAfter$$, $fireBefore$$);
  }, $_expand$:function($event$$256$$) {
    var $item$$47$$ = this.$FindItem$($event$$256$$.target);
    null != $item$$47$$ && 0 < $item$$47$$.length && this.$ExpandItem$($item$$47$$, $event$$256$$, !0, null, !0, !0, !0);
  }, $ExpandItem$:function($item$$48$$, $event$$257$$, $animate$$, $cancelled$$1_key$$107$$, $beforeVetoable$$, $fireEvent$$1$$, $fireBeforeEvent$$) {
    var $ui$$9$$;
    if (this.$GetState$($item$$48$$) == this.$STATE_COLLAPSED$) {
      null == $cancelled$$1_key$$107$$ && ($cancelled$$1_key$$107$$ = this.$GetKey$($item$$48$$[0]));
      $ui$$9$$ = {item:$item$$48$$, key:$cancelled$$1_key$$107$$};
      if ($fireBeforeEvent$$ && ($cancelled$$1_key$$107$$ = !this.$Trigger$("beforeExpand", $event$$257$$, $ui$$9$$)) && $beforeVetoable$$) {
        return;
      }
      this.$m_contentHandler$.$Expand$($item$$48$$, function($groupItem$$4$$) {
        this.$_expandSuccess$($groupItem$$4$$, $animate$$, $event$$257$$, $ui$$9$$, $fireEvent$$1$$);
      }.bind(this));
      this.$m_items$ = null;
      null != $event$$257$$ && $event$$257$$.stopPropagation();
    }
  }, $_expandSuccess$:function($groupItem$$5_item$$49$$, $animate$$1_collapseClass$$2$$, $event$$258$$, $ui$$10$$, $fireEvent$$2$$) {
    var $expandClass$$;
    this.$AnimateExpand$($$$$18$$($groupItem$$5_item$$49$$), $animate$$1_collapseClass$$2$$);
    $groupItem$$5_item$$49$$ = $groupItem$$5_item$$49$$.parentNode;
    $groupItem$$5_item$$49$$ = $$$$18$$($groupItem$$5_item$$49$$);
    this.$SetState$($groupItem$$5_item$$49$$, this.$STATE_EXPANDED$);
    $animate$$1_collapseClass$$2$$ = this.$getCollapseIconStyleClass$();
    $expandClass$$ = this.$getExpandIconStyleClass$();
    $groupItem$$5_item$$49$$.children("." + this.$getGroupItemStyleClass$()).find("." + $animate$$1_collapseClass$$2$$).removeClass($animate$$1_collapseClass$$2$$).addClass($expandClass$$);
    $fireEvent$$2$$ && this.$Trigger$("expand", $event$$258$$, $ui$$10$$);
  }, $_adjustAncestorsMaxHeight$:function($groupItem$$6$$, $delta$$4$$) {
    var $maxHeight$$;
    $groupItem$$6$$.parentsUntil("ul.oj-component-initnode", "ul." + this.$getGroupStyleClass$()).each(function() {
      $maxHeight$$ = parseInt($$$$18$$(this).css("maxHeight"), 10);
      0 < $maxHeight$$ && $$$$18$$(this).css("maxHeight", $maxHeight$$ + $delta$$4$$ + "px");
    });
  }, $AnimateExpand$:function($groupItem$$7$$, $animate$$2$$) {
    var $totalHeight$$ = 0;
    $animate$$2$$ ? ($groupItem$$7$$.children().each(function() {
      $totalHeight$$ += $$$$18$$(this).outerHeight();
    }), this.$_isTouchSupport$() && this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$), null == this.$m_expandTransitionEndListener$ && (this.$m_expandTransitionEndListener$ = this.$_handleExpandTransitionEnd$.bind(this)), $groupItem$$7$$.css("maxHeight", "0px"), $groupItem$$7$$.on("transitionend", this.$m_expandTransitionEndListener$), requestAnimationFrame(function() {
      $groupItem$$7$$.css("maxHeight", $totalHeight$$ + "px");
    })) : (this.$_isTouchSupport$() ? ($groupItem$$7$$.children().each(function() {
      $totalHeight$$ += $$$$18$$(this).outerHeight();
    }), $groupItem$$7$$.css("maxHeight", $totalHeight$$ + "px"), this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$)) : $groupItem$$7$$.css("maxHeight", ""), this.$AnimateExpandComplete$($groupItem$$7$$));
  }, $_handleExpandTransitionEnd$:function($event$$259_groupItem$$8$$) {
    $event$$259_groupItem$$8$$ = $$$$18$$($event$$259_groupItem$$8$$.target);
    $event$$259_groupItem$$8$$.off("transitionend", this.$m_expandTransitionEndListener$);
    this.$_isTouchSupport$() || $event$$259_groupItem$$8$$.css("maxHeight", "");
    this.$AnimateExpandComplete$($event$$259_groupItem$$8$$);
  }, $AnimateExpandComplete$:function($groupItem$$9$$) {
    $groupItem$$9$$.removeClass(this.$getGroupCollapseStyleClass$()).addClass(this.$getGroupExpandStyleClass$());
  }, $collapseKey$:function($key$$109$$, $fireBefore$$1$$, $fireAfter$$1$$) {
    var $item$$51$$ = this.$FindElementByKey$($key$$109$$);
    null != $item$$51$$ && this.$CollapseItem$($$$$18$$($item$$51$$), null, !1, $key$$109$$, $fireBefore$$1$$, $fireAfter$$1$$);
  }, $_collapse$:function($event$$260$$) {
    var $item$$52$$ = this.$FindItem$($event$$260$$.target);
    null != $item$$52$$ && 0 < $item$$52$$.length && this.$CollapseItem$($item$$52$$, $event$$260$$, !0, null, !0, !0);
  }, $CollapseItem$:function($item$$53$$, $event$$261$$, $animate$$3_collapseClass$$3$$, $key$$110_ui$$11$$, $beforeVetoable$$1_expandClass$$1$$, $fireEvent$$3$$) {
    var $cancelled$$2$$;
    this.$GetState$($item$$53$$) == this.$STATE_EXPANDED$ && (null == $key$$110_ui$$11$$ && ($key$$110_ui$$11$$ = this.$GetKey$($item$$53$$[0])), $key$$110_ui$$11$$ = {item:$item$$53$$, key:$key$$110_ui$$11$$}, $cancelled$$2$$ = !this.$Trigger$("beforeCollapse", $event$$261$$, $key$$110_ui$$11$$), $cancelled$$2$$ && $beforeVetoable$$1_expandClass$$1$$ || (this.$AnimateCollapse$($item$$53$$, $animate$$3_collapseClass$$3$$), this.$SetState$($item$$53$$, this.$STATE_COLLAPSED$), $animate$$3_collapseClass$$3$$ = 
    this.$getCollapseIconStyleClass$(), $beforeVetoable$$1_expandClass$$1$$ = this.$getExpandIconStyleClass$(), $item$$53$$.find("." + $beforeVetoable$$1_expandClass$$1$$).first().removeClass($beforeVetoable$$1_expandClass$$1$$).addClass($animate$$3_collapseClass$$3$$), this.$m_items$ = null, null != $event$$261$$ && $event$$261$$.stopPropagation(), $fireEvent$$3$$ && this.$Trigger$("collapse", $event$$261$$, $key$$110_ui$$11$$)));
  }, $AnimateCollapse$:function($item$$54$$, $animate$$4$$) {
    var $totalHeight$$1$$ = 0, $groupItem$$10$$;
    $groupItem$$10$$ = $item$$54$$.children("ul").first();
    $animate$$4$$ ? (null == this.$m_collapseTransitionEndListener$ && (this.$m_collapseTransitionEndListener$ = this.$_handleCollapseTransitionEnd$.bind(this)), $groupItem$$10$$.children().each(function() {
      $totalHeight$$1$$ += $$$$18$$(this).outerHeight();
    }), $groupItem$$10$$.css("transition-property", "none"), $groupItem$$10$$.css("maxHeight", $totalHeight$$1$$ + "px"), $groupItem$$10$$.css("transition-property", ""), $groupItem$$10$$.on("transitionend", this.$m_collapseTransitionEndListener$), setTimeout(function() {
      $groupItem$$10$$.css("maxHeight", "0px");
    }, 100)) : ($groupItem$$10$$.css("maxHeight", "0px"), this.$AnimateCollapseComplete$($item$$54$$));
  }, $_handleCollapseTransitionEnd$:function($event$$262_groupItem$$11$$) {
    $event$$262_groupItem$$11$$ = $$$$18$$($event$$262_groupItem$$11$$.target);
    $event$$262_groupItem$$11$$.off("transitionend", this.$m_collapseTransitionEndListener$);
    this.$AnimateCollapseComplete$($event$$262_groupItem$$11$$);
  }, $AnimateCollapseComplete$:function($groupItem$$12$$) {
    $groupItem$$12$$.removeClass(this.$getGroupExpandStyleClass$()).addClass(this.$getGroupCollapseStyleClass$());
    null != this.$m_contentHandler$ && this.$m_contentHandler$.$Collapse$($groupItem$$12$$);
  }, $_collapseAll$:function() {
    var $self$$120$$;
    $self$$120$$ = this;
    this.$_getItemsCache$().each(function() {
      $self$$120$$.$CollapseItem$($$$$18$$(this), null, !1, null, !1, !1);
    });
  }, getExpanded:function() {
    var $expanded$$7$$, $self$$121$$, $item$$56$$;
    $expanded$$7$$ = [];
    $self$$121$$ = this;
    this.$_getItemsCache$().each(function() {
      $item$$56$$ = $$$$18$$(this);
      $self$$121$$.$GetState$($item$$56$$) == $self$$121$$.$STATE_EXPANDED$ && $expanded$$7$$.push($self$$121$$.$GetKey$($item$$56$$[0]));
    });
    return $expanded$$7$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$19$$.Components.$getWidgetConstructor$(this.element);
  }, $GetContainerStyleClass$:function() {
    return this.$_isTouchSupport$() ? "oj-listview oj-listview-container-touch" : "oj-listview oj-listview-container";
  }, $GetStyleClass$:function() {
    return "oj-listview-element";
  }, $getItemStyleClass$:function() {
    return "oj-listview-item";
  }, $getItemElementStyleClass$:function() {
    return "oj-listview-item-element";
  }, $getGroupItemStyleClass$:function() {
    return "oj-listview-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-listview-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-listview-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $getCollapseIconStyleClass$:function() {
    return "oj-listview-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-listview-expand-icon";
  }, $getDepthStyleClass$:function() {
    return "";
  }});
  $goog$exportPath_$$("_ojListView", $oj$$19$$.$_ojListView$, $oj$$19$$);
  $oj$$19$$.$__registerWidget$("oj.ojListView", $$$$18$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, data:null, drillMode:"collapsible", expanded:"auto", item:{focusable:!0, renderer:null, selectable:!0}, scrollPolicy:"auto", scrollPolicyOptions:{fetchSize:25, maxCount:500}, selection:[], selectionMode:"none", beforeCurrentItem:null, beforeExpand:null, beforeCollapse:null, collapse:null, expand:null, optionChange:null, ready:null}, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    var $opts$$21$$ = {};
    $opts$$21$$.element = this.element;
    $opts$$21$$.$ojContext$ = this;
    $opts$$21$$ = $$$$18$$.extend(this.options, $opts$$21$$);
    this.$listview$ = new $oj$$19$$.$_ojListView$;
    this.$listview$.$init$($opts$$21$$);
  }, $_AfterCreate$:function() {
    this._super();
    this.$listview$.$afterCreate$();
  }, _destroy:function() {
    this.$listview$.destroy();
    this._super();
  }, $_NotifyContextMenuGesture$:function($menu$$7$$, $event$$263$$, $eventType$$40$$) {
    this.$listview$.$notifyContextMenuGesture$($menu$$7$$, $event$$263$$, $eventType$$40$$);
  }, _setOptions:function($options$$300$$, $flags$$25$$) {
    var $needRefresh$$ = this.$listview$.$setOptions$($options$$300$$, $flags$$25$$);
    this._super($options$$300$$, $flags$$25$$);
    $needRefresh$$ && this.$listview$.refresh();
  }, _setOption:function($key$$111$$, $value$$227$$) {
    var $valid$$8$$ = !0;
    "selectionMode" == $key$$111$$ ? $valid$$8$$ = "none" == $value$$227$$ || "single" == $value$$227$$ || "multiple" == $value$$227$$ : "drillMode" == $key$$111$$ ? $valid$$8$$ = "collapsible" == $value$$227$$ || "none" == $value$$227$$ : "scrollPolicy" == $key$$111$$ && ($valid$$8$$ = "auto" == $value$$227$$ || "loadMoreOnScroll" == $value$$227$$);
    if ($valid$$8$$) {
      this._super($key$$111$$, $value$$227$$);
    } else {
      throw "Invalid value: " + $value$$227$$ + " for key: " + $key$$111$$;
    }
  }, $_NotifyDetached$:function() {
    this.$listview$.$notifyDetached$();
  }, $_NotifyShown$:function() {
  }, widget:function() {
    return this.$listview$.$getRootElement$();
  }, refresh:function() {
    this._super();
    this.$listview$.refresh();
  }, getNodeBySubId:function($locator$$26$$) {
    return this.$listview$.getNodeBySubId($locator$$26$$);
  }, getSubIdByNode:function($node$$51$$) {
    return this.$listview$.getSubIdByNode($node$$51$$);
  }, expand:function($key$$112$$, $vetoable$$) {
    this.$listview$.$expandKey$($key$$112$$, $vetoable$$, !0);
  }, collapse:function($key$$113$$, $vetoable$$1$$) {
    this.$listview$.$collapseKey$($key$$113$$, $vetoable$$1$$, !0);
  }, getExpanded:function() {
    return this.$listview$.getExpanded();
  }});
});
