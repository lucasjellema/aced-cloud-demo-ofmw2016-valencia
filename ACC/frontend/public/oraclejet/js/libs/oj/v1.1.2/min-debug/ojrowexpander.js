/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmodel", "ojs/ojdatacollection-common"], function($oj$$21$$, $$$$20$$) {
  $oj$$21$$.$EmptyNodeSet$ = function $$oj$$21$$$$EmptyNodeSet$$($parent$$25$$, $start$$43$$) {
    this.$m_parent$ = $parent$$25$$;
    this.$m_start$ = $start$$43$$;
  };
  $goog$exportPath_$$("EmptyNodeSet", $oj$$21$$.$EmptyNodeSet$, $oj$$21$$);
  $oj$$21$$.$EmptyNodeSet$.prototype.getParent = function $$oj$$21$$$$EmptyNodeSet$$$getParent$() {
    return this.$m_parent$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getParent", {getParent:$oj$$21$$.$EmptyNodeSet$.prototype.getParent});
  $oj$$21$$.$EmptyNodeSet$.prototype.$getStart$ = function $$oj$$21$$$$EmptyNodeSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getStart", {$getStart$:$oj$$21$$.$EmptyNodeSet$.prototype.$getStart$});
  $oj$$21$$.$EmptyNodeSet$.prototype.$getCount$ = function $$oj$$21$$$$EmptyNodeSet$$$$getCount$$() {
    return 0;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getCount", {$getCount$:$oj$$21$$.$EmptyNodeSet$.prototype.$getCount$});
  $oj$$21$$.$EmptyNodeSet$.prototype.getData = function $$oj$$21$$$$EmptyNodeSet$$$getData$() {
    return null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getData", {getData:$oj$$21$$.$EmptyNodeSet$.prototype.getData});
  $oj$$21$$.$EmptyNodeSet$.prototype.getMetadata = function $$oj$$21$$$$EmptyNodeSet$$$getMetadata$() {
    return null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$EmptyNodeSet$.prototype.getMetadata});
  $oj$$21$$.$FlattenedNodeSet$ = function $$oj$$21$$$$FlattenedNodeSet$$($nodeSet$$15$$, $actualStart$$) {
    this.$m_nodeSet$ = $nodeSet$$15$$;
    this.$m_start$ = $actualStart$$;
  };
  $goog$exportPath_$$("FlattenedNodeSet", $oj$$21$$.$FlattenedNodeSet$, $oj$$21$$);
  $oj$$21$$.$FlattenedNodeSet$.prototype.getParent = function $$oj$$21$$$$FlattenedNodeSet$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getParent", {getParent:$oj$$21$$.$FlattenedNodeSet$.prototype.getParent});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$getStart$ = function $$oj$$21$$$$FlattenedNodeSet$$$$getStart$$() {
    return void 0 != this.$m_start$ ? this.$m_start$ : this.$m_nodeSet$.$getStart$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getStart", {$getStart$:$oj$$21$$.$FlattenedNodeSet$.prototype.$getStart$});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$getCount$ = function $$oj$$21$$$$FlattenedNodeSet$$$$getCount$$() {
    void 0 === this.$m_count$ && (this.$m_count$ = this.$_getCount$(this.$m_nodeSet$, 0), void 0 != this.$m_start$ && (this.$m_count$ -= this.$m_start$));
    return this.$m_count$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getCount", {$getCount$:$oj$$21$$.$FlattenedNodeSet$.prototype.$getCount$});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getCount$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getCount$$($nodeSet$$16$$, $total$$) {
    var $start$$44$$, $count$$36$$, $i$$309$$, $child$$4$$;
    $start$$44$$ = $nodeSet$$16$$.$getStart$();
    $count$$36$$ = $nodeSet$$16$$.$getCount$();
    $total$$ += $count$$36$$;
    if ($nodeSet$$16$$.$getChildNodeSet$) {
      for ($i$$309$$ = 0;$i$$309$$ < $count$$36$$;$i$$309$$++) {
        $child$$4$$ = $nodeSet$$16$$.$getChildNodeSet$($i$$309$$ + $start$$44$$), null != $child$$4$$ && ($total$$ = this.$_getCount$($child$$4$$, $total$$));
      }
    }
    return $total$$;
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.getData = function $$oj$$21$$$$FlattenedNodeSet$$$getData$($index$$176$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$176$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getData$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getData", {getData:$oj$$21$$.$FlattenedNodeSet$.prototype.getData});
  $oj$$21$$.$FlattenedNodeSet$.prototype.getMetadata = function $$oj$$21$$$$FlattenedNodeSet$$$getMetadata$($index$$177$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$177$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getMetadata$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$FlattenedNodeSet$.prototype.getMetadata});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getMetadata$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getMetadata$$($nodeSet$$17$$, $index$$178$$) {
    return $nodeSet$$17$$.getMetadata($index$$178$$);
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getData$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getData$$($nodeSet$$18$$, $index$$179$$) {
    return $nodeSet$$18$$.getData($index$$179$$);
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getDataOrMetadata$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getDataOrMetadata$$($nodeSet$$19$$, $index$$180$$, $current$$15$$, $func$$8$$) {
    var $start$$45$$, $count$$37$$, $i$$310$$, $child$$5_currIndex_result$$56$$;
    $start$$45$$ = $nodeSet$$19$$.$getStart$();
    $count$$37$$ = $nodeSet$$19$$.$getCount$();
    for ($i$$310$$ = 0;$i$$310$$ < $count$$37$$;$i$$310$$++) {
      $child$$5_currIndex_result$$56$$ = $current$$15$$.index;
      if ($child$$5_currIndex_result$$56$$ === $index$$180$$) {
        return $func$$8$$.call(this, $nodeSet$$19$$, $i$$310$$ + $start$$45$$);
      }
      $current$$15$$.index = $child$$5_currIndex_result$$56$$ + 1;
      if ($nodeSet$$19$$.$getChildNodeSet$ && ($child$$5_currIndex_result$$56$$ = $nodeSet$$19$$.$getChildNodeSet$($i$$310$$ + $start$$45$$), null != $child$$5_currIndex_result$$56$$ && ($child$$5_currIndex_result$$56$$ = this.$_getDataOrMetadata$($child$$5_currIndex_result$$56$$, $index$$180$$, $current$$15$$, $func$$8$$), null != $child$$5_currIndex_result$$56$$))) {
        return $child$$5_currIndex_result$$56$$;
      }
    }
    return null;
  };
  $oj$$21$$.$MergedNodeSet$ = function $$oj$$21$$$$MergedNodeSet$$($nodeSet1$$, $nodeSet2$$, $mergeAt$$) {
    this.$m_nodeSet1$ = $nodeSet1$$;
    this.$m_nodeSet2$ = $nodeSet2$$;
    this.$m_mergeAt$ = this.$_findIndex$($mergeAt$$);
  };
  $goog$exportPath_$$("MergedNodeSet", $oj$$21$$.$MergedNodeSet$, $oj$$21$$);
  $oj$$21$$.$MergedNodeSet$.prototype.$_findIndex$ = function $$oj$$21$$$$MergedNodeSet$$$$_findIndex$$($key$$127$$) {
    var $i$$311_start$$46$$, $end$$16$$, $rowKey$$19$$;
    $i$$311_start$$46$$ = this.$m_nodeSet1$.$getStart$();
    for ($end$$16$$ = $i$$311_start$$46$$ + this.$m_nodeSet1$.$getCount$();$i$$311_start$$46$$ < $end$$16$$;$i$$311_start$$46$$++) {
      if ($rowKey$$19$$ = this.$m_nodeSet1$.getMetadata($i$$311_start$$46$$).key, $key$$127$$ === $rowKey$$19$$) {
        return $i$$311_start$$46$$;
      }
    }
    return $end$$16$$ - 1;
  };
  $oj$$21$$.$MergedNodeSet$.prototype.getParent = function $$oj$$21$$$$MergedNodeSet$$$getParent$() {
    return this.$m_nodeSet1$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getParent", {getParent:$oj$$21$$.$MergedNodeSet$.prototype.getParent});
  $oj$$21$$.$MergedNodeSet$.prototype.$getStart$ = function $$oj$$21$$$$MergedNodeSet$$$$getStart$$() {
    return this.$m_nodeSet1$.$getStart$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getStart", {$getStart$:$oj$$21$$.$MergedNodeSet$.prototype.$getStart$});
  $oj$$21$$.$MergedNodeSet$.prototype.$getCount$ = function $$oj$$21$$$$MergedNodeSet$$$$getCount$$() {
    return this.$m_nodeSet1$.$getCount$() + this.$m_nodeSet2$.$getCount$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getCount", {$getCount$:$oj$$21$$.$MergedNodeSet$.prototype.$getCount$});
  $oj$$21$$.$MergedNodeSet$.prototype.getData = function $$oj$$21$$$$MergedNodeSet$$$getData$($index$$181_result$$57$$) {
    $index$$181_result$$57$$ = this.$_getRelativeIndex$($index$$181_result$$57$$);
    return $index$$181_result$$57$$.set.getData($index$$181_result$$57$$.index);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getData", {getData:$oj$$21$$.$MergedNodeSet$.prototype.getData});
  $oj$$21$$.$MergedNodeSet$.prototype.getMetadata = function $$oj$$21$$$$MergedNodeSet$$$getMetadata$($index$$182_result$$58$$) {
    $index$$182_result$$58$$ = this.$_getRelativeIndex$($index$$182_result$$58$$);
    return $index$$182_result$$58$$.set.getMetadata($index$$182_result$$58$$.index);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$MergedNodeSet$.prototype.getMetadata});
  $oj$$21$$.$MergedNodeSet$.prototype.$_getRelativeIndex$ = function $$oj$$21$$$$MergedNodeSet$$$$_getRelativeIndex$$($index$$183$$) {
    if ($index$$183$$ <= this.$m_mergeAt$) {
      return{set:this.$m_nodeSet1$, index:$index$$183$$};
    }
    var $count$$38$$ = this.$m_nodeSet2$.$getCount$();
    return $index$$183$$ > this.$m_mergeAt$ + $count$$38$$ ? {set:this.$m_nodeSet1$, index:$index$$183$$ - $count$$38$$} : {set:this.$m_nodeSet2$, index:$index$$183$$ - (this.$m_mergeAt$ + 1)};
  };
  $oj$$21$$.$NodeSetWrapper$ = function $$oj$$21$$$$NodeSetWrapper$$($nodeSet$$20$$, $metadataCallback$$, $range$$14$$, $collapsedKeys$$) {
    this.$m_nodeSet$ = $nodeSet$$20$$;
    this.$m_callback$ = $metadataCallback$$;
    this.$m_range$ = $range$$14$$;
    this.$m_collapsedKeys$ = $collapsedKeys$$;
  };
  $goog$exportPath_$$("NodeSetWrapper", $oj$$21$$.$NodeSetWrapper$, $oj$$21$$);
  $oj$$21$$.$NodeSetWrapper$.prototype.getParent = function $$oj$$21$$$$NodeSetWrapper$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getParent", {getParent:$oj$$21$$.$NodeSetWrapper$.prototype.getParent});
  $oj$$21$$.$NodeSetWrapper$.prototype.$getStart$ = function $$oj$$21$$$$NodeSetWrapper$$$$getStart$$() {
    return null != this.$m_range$ ? this.$m_range$.start : this.$m_nodeSet$.$getStart$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getStart", {$getStart$:$oj$$21$$.$NodeSetWrapper$.prototype.$getStart$});
  $oj$$21$$.$NodeSetWrapper$.prototype.$getCount$ = function $$oj$$21$$$$NodeSetWrapper$$$$getCount$$() {
    var $nodeStart$$, $nodeCount$$;
    $nodeStart$$ = this.$m_nodeSet$.$getStart$();
    $nodeCount$$ = this.$m_nodeSet$.$getCount$();
    null != this.$m_range$ && (this.$m_range$.start > $nodeStart$$ ? $nodeCount$$ = Math.min(0, $nodeCount$$ - (this.$m_range$.start - $nodeStart$$)) : this.$m_range$.start < $nodeStart$$ && ($nodeCount$$ = 0));
    return $nodeCount$$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getCount", {$getCount$:$oj$$21$$.$NodeSetWrapper$.prototype.$getCount$});
  $oj$$21$$.$NodeSetWrapper$.prototype.getData = function $$oj$$21$$$$NodeSetWrapper$$$getData$($index$$184$$) {
    return this.$m_nodeSet$.getData($index$$184$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getData", {getData:$oj$$21$$.$NodeSetWrapper$.prototype.getData});
  $oj$$21$$.$NodeSetWrapper$.prototype.getMetadata = function $$oj$$21$$$$NodeSetWrapper$$$getMetadata$($index$$185$$) {
    var $metadata$$7$$;
    $metadata$$7$$ = this.$m_nodeSet$.getMetadata($index$$185$$);
    $metadata$$7$$.index = $index$$185$$;
    $metadata$$7$$.parentKey = this.getParent();
    this.$m_callback$.call(null, $metadata$$7$$.key, $metadata$$7$$);
    return $metadata$$7$$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getMetadata", {getMetadata:$oj$$21$$.$NodeSetWrapper$.prototype.getMetadata});
  $oj$$21$$.$NodeSetWrapper$.prototype.$getChildNodeSet$ = function $$oj$$21$$$$NodeSetWrapper$$$$getChildNodeSet$$($index$$186_result$$59$$) {
    return null != this.$m_collapsedKeys$ && -1 != this.$m_collapsedKeys$.indexOf(this.$m_nodeSet$.getMetadata($index$$186_result$$59$$).key) || !this.$m_nodeSet$.$getChildNodeSet$ || ($index$$186_result$$59$$ = this.$m_nodeSet$.$getChildNodeSet$($index$$186_result$$59$$), null == $index$$186_result$$59$$) ? null : new $oj$$21$$.$NodeSetWrapper$($index$$186_result$$59$$, this.$m_callback$, null, this.$m_collapsedKeys$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$21$$.$NodeSetWrapper$.prototype.$getChildNodeSet$});
  $oj$$21$$.$FlattenedTreeDataSource$ = function $$oj$$21$$$$FlattenedTreeDataSource$$($treeDataSource$$1$$, $options$$304$$) {
    this.$m_wrapped$ = $treeDataSource$$1$$;
    this.$m_options$ = $options$$304$$ || {};
    $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("FlattenedTreeDataSource", $oj$$21$$.$FlattenedTreeDataSource$, $oj$$21$$);
  $oj$$21$$.$Object$.$createSubclass$($oj$$21$$.$FlattenedTreeDataSource$, $oj$$21$$.$DataSource$, "oj.FlattenedTreeDataSource");
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.Init = function $$oj$$21$$$$FlattenedTreeDataSource$$$Init$() {
    var $expanded$$9$$;
    $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.Init.call(this);
    this.$m_wrapped$.on("change", this.$_handleModelEvent$.bind(this));
    this.$m_fetchSize$ = parseInt(this.$m_options$.fetchSize, 10);
    isNaN(this.$m_fetchSize$) && (this.$m_fetchSize$ = 25);
    this.$m_maxCount$ = parseInt(this.$m_options$.maxCount, 10);
    isNaN(this.$m_maxCount$) && (this.$m_maxCount$ = 500);
    $expanded$$9$$ = this.$m_options$.expanded;
    Array.isArray($expanded$$9$$) ? this.$m_expandedKeys$ = $expanded$$9$$ : ("all" === $expanded$$9$$ && (this.$m_collapsedKeys$ = []), this.$m_expandedKeys$ = []);
    this.$m_cache$ = [];
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Init", {Init:$oj$$21$$.$FlattenedTreeDataSource$.prototype.Init});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.handleEvent = function $$oj$$21$$$$FlattenedTreeDataSource$$$handleEvent$($eventType$$42$$, $event$$282$$) {
    return $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.handleEvent.call(this, $eventType$$42$$, $event$$282$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.handleEvent", {handleEvent:$oj$$21$$.$FlattenedTreeDataSource$.prototype.handleEvent});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$Destroy$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$Destroy$$() {
    delete this.$m_cache$;
    delete this.$m_expandedKeys$;
    delete this.$m_collapsedKeys$;
    this.$m_wrapped$.off("change");
    this.$m_wrapped$.$Destroy$ && this.$m_wrapped$.$Destroy$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Destroy", {$Destroy$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$Destroy$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getFetchSize$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getFetchSize$$() {
    return this.$m_fetchSize$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getExpandedKeys$$() {
    return this.$m_expandedKeys$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getExpandedKeys", {$getExpandedKeys$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getOption$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getOption$$($option$$27$$) {
    return null != this.$m_options$ ? this.$m_options$[$option$$27$$] : null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getOption", {$getOption$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getOption$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource = function $$oj$$21$$$$FlattenedTreeDataSource$$$getWrappedDataSource$() {
    return this.$m_wrapped$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$21$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getFetchSizeToUse$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getFetchSizeToUse$$($count$$39$$) {
    var $fetchSize$$1$$, $maxCount$$1$$;
    $fetchSize$$1$$ = this.$getFetchSize$();
    $maxCount$$1$$ = this.$m_maxCount$;
    return-1 === $fetchSize$$1$$ ? -1 === $count$$39$$ ? $maxCount$$1$$ : $count$$39$$ : -1 === $count$$39$$ ? Math.min($fetchSize$$1$$, $count$$39$$) : $fetchSize$$1$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$fetchRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$fetchRows$$($range$$15$$, $callbacks$$38$$) {
    this.$_isExpandAll$() ? this.$_fetchRowsFromDescendants$($range$$15$$, $callbacks$$38$$) : this.$_fetchRowsFromChildren$($range$$15$$, $callbacks$$38$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromChildren$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchRowsFromChildren$$($range$$16$$, $callbacks$$39$$) {
    var $maxFetchSize_nodeSet$$21_processed$$5$$, $fetchSize$$2_lastEntry$$, $parent$$26$$, $count$$40$$, $index$$187$$, $depth$$13$$;
    if ($range$$16$$.start > this.$_getLastIndex$()) {
      $maxFetchSize_nodeSet$$21_processed$$5$$ = this.$_getMaxFetchSize$();
      if (0 > this.$_getLastIndex$()) {
        $range$$16$$.count = Math.min($maxFetchSize_nodeSet$$21_processed$$5$$, $range$$16$$.count);
        this.$m_wrapped$.$fetchChildren$(null, $range$$16$$, {success:function($nodeSet$$22$$) {
          this.$_handleFetchSuccess$($nodeSet$$22$$, null, 0, $range$$16$$, 0, $callbacks$$39$$);
        }.bind(this), error:function($status$$21$$) {
          this.$_handleFetchError$($status$$21$$, $callbacks$$39$$);
        }.bind(this)});
        return;
      }
      if (0 < $maxFetchSize_nodeSet$$21_processed$$5$$) {
        $fetchSize$$2_lastEntry$$ = this.$_getLastEntry$();
        $parent$$26$$ = $fetchSize$$2_lastEntry$$.parent;
        $count$$40$$ = this.$m_wrapped$.$getChildCount$($parent$$26$$);
        $index$$187$$ = $fetchSize$$2_lastEntry$$.index;
        $depth$$13$$ = $fetchSize$$2_lastEntry$$.depth;
        -1 === $count$$40$$ || $index$$187$$ < $count$$40$$ - 1 ? ($fetchSize$$2_lastEntry$$ = this.$_getFetchSizeToUse$($count$$40$$), $range$$16$$.start = $index$$187$$ + 1, $range$$16$$.count = -1 === $count$$40$$ ? $fetchSize$$2_lastEntry$$ : Math.min($maxFetchSize_nodeSet$$21_processed$$5$$, Math.min($fetchSize$$2_lastEntry$$, $count$$40$$ - $range$$16$$.start)), this.$m_wrapped$.$fetchChildren$($parent$$26$$, $range$$16$$, {success:function($nodeSet$$23$$) {
          this.$_handleFetchSuccess$($nodeSet$$23$$, $parent$$26$$, $depth$$13$$, $range$$16$$, $count$$40$$, $callbacks$$39$$);
        }.bind(this), error:function($status$$22$$) {
          this.$_handleFetchError$($status$$22$$, $callbacks$$39$$);
        }.bind(this)})) : $index$$187$$ === $count$$40$$ - 1 ? ($maxFetchSize_nodeSet$$21_processed$$5$$ = new $oj$$21$$.$EmptyNodeSet$(null, $range$$16$$.start), null != $callbacks$$39$$ && null != $callbacks$$39$$.success && $callbacks$$39$$.success.call(null, $maxFetchSize_nodeSet$$21_processed$$5$$)) : ($maxFetchSize_nodeSet$$21_processed$$5$$ = this.$_fetchFromAncestors$($parent$$26$$, $depth$$13$$, $callbacks$$39$$, $maxFetchSize_nodeSet$$21_processed$$5$$), $maxFetchSize_nodeSet$$21_processed$$5$$ || 
        ($maxFetchSize_nodeSet$$21_processed$$5$$ = new $oj$$21$$.$EmptyNodeSet$(null, $range$$16$$.start), null != $callbacks$$39$$ && null != $callbacks$$39$$.success && $callbacks$$39$$.success.call(null, $maxFetchSize_nodeSet$$21_processed$$5$$)));
        return;
      }
    }
    this.$handleMaxCountReached$($range$$16$$, $callbacks$$39$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getMaxFetchSize$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getMaxFetchSize$$() {
    return this.$m_maxCount$ - (this.$_getLastIndex$() + 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchError$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchError$$($status$$23$$, $callbacks$$40$$) {
    null != $callbacks$$40$$ && null != $callbacks$$40$$.error && $callbacks$$40$$.error.call(null, $status$$23$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchSuccess$$($nodeSet$$24$$, $parent$$27_queue$$2$$, $depth$$14$$, $range$$17$$, $count$$41$$, $callbacks$$41$$) {
    var $prevNodeSetInfo_processed$$6_toExpand$$;
    $prevNodeSetInfo_processed$$6_toExpand$$ = [];
    $nodeSet$$24$$ = new $oj$$21$$.$NodeSetWrapper$($nodeSet$$24$$, this.$insertMetadata$.bind(this), $range$$17$$);
    this.$_processNodeSet$($nodeSet$$24$$, $parent$$27_queue$$2$$, $depth$$14$$, $prevNodeSetInfo_processed$$6_toExpand$$);
    -1 === $count$$41$$ && 0 === $nodeSet$$24$$.$getCount$() && null != $parent$$27_queue$$2$$ && 0 < $depth$$14$$ ? ($prevNodeSetInfo_processed$$6_toExpand$$ = this.$_fetchFromAncestors$($parent$$27_queue$$2$$, $depth$$14$$, $callbacks$$41$$)) || null != $callbacks$$41$$ && null != $callbacks$$41$$.success && $callbacks$$41$$.success.call(null, $nodeSet$$24$$) : 0 === $prevNodeSetInfo_processed$$6_toExpand$$.length ? null != $callbacks$$41$$ && null != $callbacks$$41$$.success && $callbacks$$41$$.success.call(null, 
    $nodeSet$$24$$) : ($parent$$27_queue$$2$$ = [], $parent$$27_queue$$2$$.push($prevNodeSetInfo_processed$$6_toExpand$$), $prevNodeSetInfo_processed$$6_toExpand$$ = {}, $prevNodeSetInfo_processed$$6_toExpand$$.callbacks = $callbacks$$41$$, $prevNodeSetInfo_processed$$6_toExpand$$.nodeSet = $nodeSet$$24$$, $prevNodeSetInfo_processed$$6_toExpand$$.keys = [], this.$_syncExpandRows$($parent$$27_queue$$2$$, $prevNodeSetInfo_processed$$6_toExpand$$));
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchFromAncestors$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchFromAncestors$$($parent$$28$$, $depth$$15$$, $callbacks$$42$$, $maxFetchSize$$1$$) {
    var $options$$305$$, $remainToFetch$$, $i$$312$$, $currEntry_index$$188$$, $currDepth$$, $count$$42$$, $countUnknown$$, $range$$18$$, $fetchSize$$3$$;
    void 0 === $maxFetchSize$$1$$ && ($maxFetchSize$$1$$ = this.$_getMaxFetchSize$());
    this.$_isBatchFetching$() && ($options$$305$$ = {queueOnly:!0});
    $remainToFetch$$ = $fetchSize$$3$$ = this.$_getFetchSizeToUse$(-1);
    for ($i$$312$$ = this.$_getLastIndex$() - 1;0 <= $i$$312$$;$i$$312$$--) {
      if ($currEntry_index$$188$$ = this.$_getEntry$($i$$312$$), $currDepth$$ = $currEntry_index$$188$$.depth, $currDepth$$ < $depth$$15$$ && ($parent$$28$$ = $currEntry_index$$188$$.parent, $count$$42$$ = this.$m_wrapped$.$getChildCount$($parent$$28$$), $currEntry_index$$188$$ = $currEntry_index$$188$$.index, ($countUnknown$$ = -1 === $count$$42$$) || $currEntry_index$$188$$ < $count$$42$$ - 1)) {
        $range$$18$$ = {};
        $range$$18$$.start = $currEntry_index$$188$$ + 1;
        $countUnknown$$ ? ($range$$18$$.count = Math.min($maxFetchSize$$1$$, Math.max(0, $remainToFetch$$)), $options$$305$$ = void 0) : $range$$18$$.count = Math.min($maxFetchSize$$1$$, Math.min($remainToFetch$$, $count$$42$$ - $range$$18$$.start));
        if (0 == $range$$18$$.count) {
          break;
        }
        this.$m_wrapped$.$fetchChildren$($parent$$28$$, $range$$18$$, {success:function($nodeSet$$25$$) {
          this.$_handleFetchSuccess$($nodeSet$$25$$, $parent$$28$$, $currDepth$$, $range$$18$$, $count$$42$$, $callbacks$$42$$);
        }.bind(this), error:function($status$$24$$) {
          this.$_handleFetchError$($status$$24$$, $callbacks$$42$$);
        }.bind(this)}, $options$$305$$);
        $depth$$15$$ = $currDepth$$;
        $remainToFetch$$ = Math.max(0, $remainToFetch$$ - $range$$18$$.count);
        if ($countUnknown$$ || 0 === $currDepth$$ || 0 === $remainToFetch$$) {
          break;
        }
      }
    }
    void 0 != $options$$305$$ && this.$m_wrapped$.$fetchChildren$($parent$$28$$, {start:$range$$18$$.count, count:0}, {success:function($nodeSet$$26$$) {
      this.$_handleFetchSuccess$($nodeSet$$26$$, $parent$$28$$, $currDepth$$, $range$$18$$, $count$$42$$, $callbacks$$42$$);
    }.bind(this), error:function($status$$25$$) {
      this.$_handleFetchError$($status$$25$$, $callbacks$$42$$);
    }.bind(this)});
    return $remainToFetch$$ != $fetchSize$$3$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_processNodeSet$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_processNodeSet$$($nodeSet$$27$$, $parent$$29$$, $depth$$16$$, $toExpand$$1$$) {
    var $nodeStart$$1$$, $nodeCount$$1$$, $i$$313$$, $key$$128_metadata$$8$$;
    $nodeStart$$1$$ = $nodeSet$$27$$.$getStart$();
    $nodeCount$$1$$ = $nodeSet$$27$$.$getCount$();
    for ($i$$313$$ = 0;$i$$313$$ < $nodeCount$$1$$;$i$$313$$++) {
      $key$$128_metadata$$8$$ = $nodeSet$$27$$.getMetadata($nodeStart$$1$$ + $i$$313$$), $key$$128_metadata$$8$$ = $key$$128_metadata$$8$$.key, this.$_addEntry$($key$$128_metadata$$8$$, $depth$$16$$, $nodeStart$$1$$ + $i$$313$$, $parent$$29$$), this.$_isExpanded$($key$$128_metadata$$8$$) && $toExpand$$1$$.push($key$$128_metadata$$8$$);
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$insertMetadata$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$insertMetadata$$($key$$129$$, $metadata$$9$$) {
    this.$_isExpanded$($key$$129$$) && !$metadata$$9$$.leaf ? $metadata$$9$$.state = "expanded" : $metadata$$9$$.state = $metadata$$9$$.leaf ? "leaf" : "collapsed";
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromDescendants$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchRowsFromDescendants$$($range$$19$$, $callbacks$$43$$) {
    var $options$$306$$ = {maxCount:this.$m_maxCount$};
    0 <= this.$_getLastIndex$() && ($options$$306$$.start = this.$_getEntry$(this.$_getLastIndex$()).key);
    this.$m_wrapped$.$fetchDescendants$(null, {success:function($nodeSet$$28$$) {
      this.$_handleFetchDescendantsSuccess$($nodeSet$$28$$, $range$$19$$, $callbacks$$43$$);
    }.bind(this), error:function($status$$26$$) {
      this.$_handleFetchError$($status$$26$$, $callbacks$$43$$);
    }.bind(this)}, $options$$306$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchDescendantsSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchDescendantsSuccess$$($nodeSet$$29$$, $range$$20$$, $callbacks$$44$$) {
    var $maxFetchSize$$2_options$$307$$, $actualStart$$1_count$$43$$, $lastEntry$$1$$;
    $range$$20$$.start > this.$_getLastIndex$() ? ($maxFetchSize$$2_options$$307$$ = this.$_getMaxFetchSize$(), $actualStart$$1_count$$43$$ = Math.min($maxFetchSize$$2_options$$307$$, $range$$20$$.count), $nodeSet$$29$$ = new $oj$$21$$.$NodeSetWrapper$($nodeSet$$29$$, this.$insertMetadata$.bind(this), null, this.$m_collapsedKeys$), 0 <= this.$_getLastIndex$() ? ($lastEntry$$1$$ = this.$_getLastEntry$(), $maxFetchSize$$2_options$$307$$ = {index:0, found:!1, count:0}, this.$_processDescendantsNodeSet$($nodeSet$$29$$, 
    null, 0, $lastEntry$$1$$, $actualStart$$1_count$$43$$, $maxFetchSize$$2_options$$307$$), $actualStart$$1_count$$43$$ = $maxFetchSize$$2_options$$307$$.index + 1) : ($maxFetchSize$$2_options$$307$$ = {count:0}, this.$_processDescendantsNodeSet$($nodeSet$$29$$, null, 0, null, $actualStart$$1_count$$43$$, $maxFetchSize$$2_options$$307$$), $actualStart$$1_count$$43$$ = 0), null != $callbacks$$44$$ && null != $callbacks$$44$$.success && ($nodeSet$$29$$ = null != $maxFetchSize$$2_options$$307$$ ? 0 === 
    $maxFetchSize$$2_options$$307$$.count ? new $oj$$21$$.$EmptyNodeSet$(null, $range$$20$$.start) : new $oj$$21$$.$FlattenedNodeSet$($nodeSet$$29$$, $actualStart$$1_count$$43$$) : new $oj$$21$$.$FlattenedNodeSet$($nodeSet$$29$$), $callbacks$$44$$.success.call(null, $nodeSet$$29$$))) : this.$handleMaxCountReached$($range$$20$$, $callbacks$$44$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_processDescendantsNodeSet$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_processDescendantsNodeSet$$($nodeSet$$30$$, $parent$$30$$, $depth$$17$$, $lastEntry$$2$$, $maxCount$$2$$, $options$$308$$) {
    var $nodeStart$$2$$, $nodeCount$$2$$, $i$$314$$, $childNodeSet_metadata$$10$$, $key$$130$$;
    $nodeStart$$2$$ = $nodeSet$$30$$.$getStart$();
    $nodeCount$$2$$ = $nodeSet$$30$$.$getCount$();
    for ($i$$314$$ = 0;$i$$314$$ < $nodeCount$$2$$ && $options$$308$$.count != $maxCount$$2$$;$i$$314$$++) {
      $childNodeSet_metadata$$10$$ = $nodeSet$$30$$.getMetadata($nodeStart$$2$$ + $i$$314$$);
      $key$$130$$ = $childNodeSet_metadata$$10$$.key;
      $options$$308$$.checkDepth && $lastEntry$$2$$.depth === $depth$$17$$ && ($options$$308$$.found = !0, $options$$308$$.checkDepth = !1);
      if (null == $lastEntry$$2$$ || $options$$308$$.found) {
        this.$_addEntry$($key$$130$$, $depth$$17$$, $nodeStart$$2$$ + $i$$314$$, $parent$$30$$), $options$$308$$.count += 1, $childNodeSet_metadata$$10$$.state = $childNodeSet_metadata$$10$$.leaf ? "leaf" : "expanded";
      }
      null == $lastEntry$$2$$ || $options$$308$$.found || ($key$$130$$ === $lastEntry$$2$$.key ? $childNodeSet_metadata$$10$$.leaf || this.$_isExpanded$($key$$130$$) ? $options$$308$$.found = !0 : $options$$308$$.checkDepth = !0 : $options$$308$$.index += 1);
      $nodeSet$$30$$.$getChildNodeSet$ && this.$_isExpanded$($key$$130$$) && ($childNodeSet_metadata$$10$$ = $nodeSet$$30$$.$getChildNodeSet$($i$$314$$), null != $childNodeSet_metadata$$10$$ && this.$_processDescendantsNodeSet$($childNodeSet_metadata$$10$$, $key$$130$$, $depth$$17$$ + 1, $lastEntry$$2$$, $maxCount$$2$$, $options$$308$$));
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.expand = function $$oj$$21$$$$FlattenedTreeDataSource$$$expand$($rowKey$$21$$) {
    this.$_expand$($rowKey$$21$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.expand", {expand:$oj$$21$$.$FlattenedTreeDataSource$.prototype.expand});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_expand$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_expand$$($rowKey$$22$$, $options$$309$$) {
    var $count$$44$$, $fetchSize$$4$$, $maxCount$$3$$, $refIndex$$;
    $count$$44$$ = this.$m_wrapped$.$getChildCount$($rowKey$$22$$);
    $fetchSize$$4$$ = this.$_getFetchSizeToUse$($count$$44$$);
    $maxCount$$3$$ = this.$m_maxCount$;
    if (this.$_getLastIndex$() + 1 === $maxCount$$3$$ && ($refIndex$$ = this.$getIndex$($rowKey$$22$$), $refIndex$$ == $maxCount$$3$$ - 1)) {
      this.$handleExpandSuccess$($rowKey$$22$$, new $oj$$21$$.$EmptyNodeSet$($rowKey$$22$$, 0), 0, $options$$309$$);
      return;
    }
    0 == $fetchSize$$4$$ ? this.$handleExpandSuccess$($rowKey$$22$$, new $oj$$21$$.$EmptyNodeSet$($rowKey$$22$$, 0), 0, $options$$309$$) : this.$m_wrapped$.$fetchChildren$($rowKey$$22$$, {start:0, count:$fetchSize$$4$$}, {success:function($nodeSet$$31$$) {
      this.$handleExpandSuccess$($rowKey$$22$$, $nodeSet$$31$$, $count$$44$$, $options$$309$$);
    }.bind(this), error:function() {
      this.$handleExpandError$($rowKey$$22$$);
    }.bind(this)});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.collapse = function $$oj$$21$$$$FlattenedTreeDataSource$$$collapse$($rowKey$$23$$) {
    var $rowIndex$$9$$, $depth$$18_i$$315_parent$$31$$, $count$$45$$, $keys$$35_lastIndex$$, $j$$38$$;
    $rowIndex$$9$$ = this.$getIndex$($rowKey$$23$$) + 1;
    $depth$$18_i$$315_parent$$31$$ = this.$_getEntry$($rowIndex$$9$$ - 1);
    $count$$45$$ = 0;
    $depth$$18_i$$315_parent$$31$$ = $depth$$18_i$$315_parent$$31$$.depth;
    $keys$$35_lastIndex$$ = this.$_getLastIndex$();
    for ($j$$38$$ = $rowIndex$$9$$;$j$$38$$ < $keys$$35_lastIndex$$ + 1;$j$$38$$++) {
      var $rowDepth$$ = this.$_getEntry$($j$$38$$).depth;
      if ($rowDepth$$ > $depth$$18_i$$315_parent$$31$$) {
        $count$$45$$ += 1;
      } else {
        if ($rowDepth$$ == $depth$$18_i$$315_parent$$31$$) {
          break;
        }
      }
    }
    if (0 != $count$$45$$) {
      this.$_isExpandAll$() ? this.$m_collapsedKeys$.push($rowKey$$23$$) : this.$_removeExpanded$($rowKey$$23$$);
      $keys$$35_lastIndex$$ = [];
      for ($depth$$18_i$$315_parent$$31$$ = 0;$depth$$18_i$$315_parent$$31$$ < $count$$45$$;$depth$$18_i$$315_parent$$31$$++) {
        $keys$$35_lastIndex$$.push({key:this.$_getEntry$($rowIndex$$9$$ + $depth$$18_i$$315_parent$$31$$).key, index:$rowIndex$$9$$ + $depth$$18_i$$315_parent$$31$$});
      }
      this.$_removeEntry$($rowIndex$$9$$, $count$$45$$);
      this.$removeRows$($keys$$35_lastIndex$$);
    }
    this.handleEvent("collapse", {rowKey:$rowKey$$23$$});
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.collapse", {collapse:$oj$$21$$.$FlattenedTreeDataSource$.prototype.collapse});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isExpanded$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isExpanded$$($rowKey$$24$$) {
    return this.$_isExpandAll$() ? this.$m_collapsedKeys$ && 0 < this.$m_collapsedKeys$.length ? -1 === this.$_getCollapsedKeyIndex$($rowKey$$24$$) : !0 : this.$m_expandedKeys$ && 0 < this.$m_expandedKeys$.length ? -1 < this.$_getExpandedKeyIndex$($rowKey$$24$$) : !1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getCollapsedKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getCollapsedKeyIndex$$($rowKey$$25$$) {
    return this.$_getKeyIndex$(this.$m_collapsedKeys$, $rowKey$$25$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getExpandedKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getExpandedKeyIndex$$($rowKey$$26$$) {
    return this.$_getKeyIndex$(this.$m_expandedKeys$, $rowKey$$26$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getKeyIndex$$($arr$$21$$, $rowKey$$27$$) {
    var $i$$316$$, $index$$189$$;
    $index$$189$$ = -1;
    for ($i$$316$$ = 0;$i$$316$$ < $arr$$21$$.length;$i$$316$$++) {
      $arr$$21$$[$i$$316$$] === $rowKey$$27$$ && ($index$$189$$ = $i$$316$$);
    }
    return $index$$189$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeExpanded$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeExpanded$$($index$$190_rowKey$$28$$) {
    $index$$190_rowKey$$28$$ = this.$_getExpandedKeyIndex$($index$$190_rowKey$$28$$);
    -1 < $index$$190_rowKey$$28$$ && this.$m_expandedKeys$.splice($index$$190_rowKey$$28$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeCollapsed$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeCollapsed$$($index$$191_rowKey$$29$$) {
    $index$$191_rowKey$$29$$ = this.$_getCollapsedKeyIndex$($index$$191_rowKey$$29$$);
    -1 < $index$$191_rowKey$$29$$ && this.$m_collapsedKeys$.splice($index$$191_rowKey$$29$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleExpandError$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleExpandError$$($rowKey$$30$$) {
    this.handleEvent("expand", {rowKey:$rowKey$$30$$});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleExpandSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleExpandSuccess$$($rowKey$$31$$, $maxCount$$4_nodeSet$$32$$, $childCount_j$$39$$, $callbacks$$45_options$$310$$) {
    var $refIndex$$1$$, $rangeStart$$, $metadata$$11_rowStart$$3$$, $rowCount$$7$$, $parent$$32$$, $depth$$19$$, $key$$131$$, $toExpand$$2$$, $i$$317$$, $queue$$4$$, $prevNodeSetInfo$$2$$;
    $maxCount$$4_nodeSet$$32$$ = new $oj$$21$$.$NodeSetWrapper$($maxCount$$4_nodeSet$$32$$, this.$insertMetadata$.bind(this));
    $rangeStart$$ = $refIndex$$1$$ = this.$getIndex$($rowKey$$31$$) + 1;
    $metadata$$11_rowStart$$3$$ = $maxCount$$4_nodeSet$$32$$.$getStart$();
    $rowCount$$7$$ = $maxCount$$4_nodeSet$$32$$.$getCount$();
    $parent$$32$$ = this.$_getEntry$($refIndex$$1$$ - 1);
    $depth$$19$$ = $parent$$32$$.depth + 1;
    $toExpand$$2$$ = [];
    for ($i$$317$$ = $metadata$$11_rowStart$$3$$;$i$$317$$ < $rowCount$$7$$;$i$$317$$++) {
      $metadata$$11_rowStart$$3$$ = $maxCount$$4_nodeSet$$32$$.getMetadata($i$$317$$), $key$$131$$ = $metadata$$11_rowStart$$3$$.key, this.$_isExpanded$($key$$131$$) && $toExpand$$2$$.push($key$$131$$), this.$_insertRow$($refIndex$$1$$, $metadata$$11_rowStart$$3$$, $parent$$32$$.key, $i$$317$$, $depth$$19$$), $refIndex$$1$$++;
    }
    this.$_isExpandAll$() ? this.$_removeCollapsed$($rowKey$$31$$) : -1 === this.$m_expandedKeys$.indexOf($rowKey$$31$$) && this.$m_expandedKeys$.push($rowKey$$31$$);
    void 0 != $callbacks$$45_options$$310$$ && ($queue$$4$$ = $callbacks$$45_options$$310$$.queue, $prevNodeSetInfo$$2$$ = $callbacks$$45_options$$310$$.prevNodeSetInfo);
    void 0 != $prevNodeSetInfo$$2$$ && ($maxCount$$4_nodeSet$$32$$ = new $oj$$21$$.$MergedNodeSet$($prevNodeSetInfo$$2$$.nodeSet, $maxCount$$4_nodeSet$$32$$, $rowKey$$31$$));
    if (0 != $toExpand$$2$$.length || void 0 !== $queue$$4$$ && 0 != $queue$$4$$.length) {
      void 0 === $queue$$4$$ && ($queue$$4$$ = []), 0 < $toExpand$$2$$.length && $queue$$4$$.push($toExpand$$2$$), void 0 === $prevNodeSetInfo$$2$$ && ($prevNodeSetInfo$$2$$ = {}, $prevNodeSetInfo$$2$$.firstIndex = $rangeStart$$, $prevNodeSetInfo$$2$$.firstKey = $rowKey$$31$$, $prevNodeSetInfo$$2$$.keys = []), $prevNodeSetInfo$$2$$.nodeSet = $maxCount$$4_nodeSet$$32$$, $prevNodeSetInfo$$2$$.keys.push($rowKey$$31$$), this.$_syncExpandRows$($queue$$4$$, $prevNodeSetInfo$$2$$);
    } else {
      if (void 0 != $prevNodeSetInfo$$2$$) {
        $callbacks$$45_options$$310$$ = $prevNodeSetInfo$$2$$.callbacks;
        if (null != $callbacks$$45_options$$310$$) {
          $callbacks$$45_options$$310$$.success.call(null, $maxCount$$4_nodeSet$$32$$);
          return;
        }
        this.$insertRows$($prevNodeSetInfo$$2$$.firstIndex, $prevNodeSetInfo$$2$$.firstKey, $maxCount$$4_nodeSet$$32$$);
      } else {
        this.$insertRows$($rangeStart$$, $rowKey$$31$$, $maxCount$$4_nodeSet$$32$$);
      }
      $maxCount$$4_nodeSet$$32$$ = this.$m_maxCount$;
      -1 === $childCount_j$$39$$ && $rowCount$$7$$ === this.$getFetchSize$() || $childCount_j$$39$$ > $rowCount$$7$$ || $refIndex$$1$$ == $maxCount$$4_nodeSet$$32$$ ? this.$_deleteAllRowsBelow$($refIndex$$1$$) : this.$_getLastIndex$() >= $maxCount$$4_nodeSet$$32$$ && this.$_deleteAllRowsBelow$($maxCount$$4_nodeSet$$32$$);
      if (void 0 != $prevNodeSetInfo$$2$$) {
        for ($childCount_j$$39$$ = 0;$childCount_j$$39$$ < $prevNodeSetInfo$$2$$.keys.length;$childCount_j$$39$$++) {
          this.handleEvent("expand", {rowKey:$prevNodeSetInfo$$2$$.keys[$childCount_j$$39$$]});
        }
      }
      this.handleEvent("expand", {rowKey:$rowKey$$31$$});
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_syncExpandRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_syncExpandRows$$($queue$$5$$, $prevNodeSetInfo$$3$$) {
    var $last$$1$$, $key$$132$$;
    $last$$1$$ = $queue$$5$$[$queue$$5$$.length - 1];
    $key$$132$$ = $last$$1$$.shift();
    0 === $last$$1$$.length && $queue$$5$$.pop();
    this.$_expand$($key$$132$$, {prevNodeSetInfo:$prevNodeSetInfo$$3$$, queue:$queue$$5$$});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_insertRow$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_insertRow$$($index$$192$$, $key$$133_metadata$$12$$, $parentKey$$6$$, $childIndex$$, $depth$$20$$) {
    $key$$133_metadata$$12$$ = $key$$133_metadata$$12$$.key;
    $index$$192$$ <= this.$_getLastIndex$() ? this.$_addEntry$($key$$133_metadata$$12$$, $depth$$20$$, $childIndex$$, $parentKey$$6$$, $index$$192$$) : this.$_addEntry$($key$$133_metadata$$12$$, $depth$$20$$, $childIndex$$, $parentKey$$6$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_deleteAllRowsBelow$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_deleteAllRowsBelow$$($index$$193$$, $count$$46$$) {
    var $keys$$37$$;
    void 0 == $count$$46$$ && ($count$$46$$ = this.$_getLastIndex$() + 1 - $index$$193$$);
    $keys$$37$$ = [];
    for (var $i$$319$$ = 0;$i$$319$$ < $count$$46$$;$i$$319$$++) {
      $keys$$37$$.push({row:this.$_getEntry$($index$$193$$ + $i$$319$$).key, index:$index$$193$$ + $i$$319$$});
    }
    this.$_removeEntry$($index$$193$$, $count$$46$$);
    this.$removeRows$($keys$$37$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleModelEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleModelEvent$$($event$$284$$) {
    var $operation$$5$$, $ancestors_parentKey$$7$$, $index$$194$$;
    $operation$$5$$ = $event$$284$$.operation;
    $ancestors_parentKey$$7$$ = $event$$284$$.parent;
    $ancestors_parentKey$$7$$ = Array.isArray($ancestors_parentKey$$7$$) ? $ancestors_parentKey$$7$$[$ancestors_parentKey$$7$$.length - 1] : $ancestors_parentKey$$7$$;
    $index$$194$$ = $event$$284$$.index;
    "insert" === $operation$$5$$ ? this.$_handleInsertEvent$($ancestors_parentKey$$7$$, $index$$194$$, $event$$284$$.data) : "delete" === $operation$$5$$ ? this.$_handleDeleteEvent$($ancestors_parentKey$$7$$, $index$$194$$) : "refresh" === $operation$$5$$ && this.$_handleRefreshEvent$($ancestors_parentKey$$7$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleInsertEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleInsertEvent$$($parentKey$$8$$, $index$$195$$, $metadata$$13_nodeSet$$33$$) {
    var $insertIndex_parentIndex$$, $depth$$21$$;
    $insertIndex_parentIndex$$ = this.$getIndex$($parentKey$$8$$);
    $depth$$21$$ = this.$_getEntry$($insertIndex_parentIndex$$).depth + 1;
    $insertIndex_parentIndex$$ = $insertIndex_parentIndex$$ + $index$$195$$ + 1;
    $metadata$$13_nodeSet$$33$$ = $metadata$$13_nodeSet$$33$$.getMetadata($metadata$$13_nodeSet$$33$$.$getStart$());
    this.$_insertRow$($insertIndex_parentIndex$$, $metadata$$13_nodeSet$$33$$, $parentKey$$8$$, $index$$195$$, $depth$$21$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleDeleteEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleDeleteEvent$$($parentKey$$9$$, $index$$196$$) {
    var $parentIndex$$1_startIndex$$31$$, $currentIndex$$2_parent$$34$$, $start$$47$$, $lastIndex$$1$$, $current$$17$$;
    $parentIndex$$1_startIndex$$31$$ = this.$getIndex$($parentKey$$9$$);
    $currentIndex$$2_parent$$34$$ = this.$_getEntry$($parentIndex$$1_startIndex$$31$$);
    $parentIndex$$1_startIndex$$31$$ += $index$$196$$;
    $start$$47$$ = this.$_getEntry$($parentIndex$$1_startIndex$$31$$);
    $oj$$21$$.$Assert$.assert($start$$47$$.parent === $currentIndex$$2_parent$$34$$ && $start$$47$$.depth === $currentIndex$$2_parent$$34$$.depth + 1);
    $currentIndex$$2_parent$$34$$ = $parentIndex$$1_startIndex$$31$$ + 1;
    for ($lastIndex$$1$$ = this.$_getLastIndex$();$currentIndex$$2_parent$$34$$ <= $lastIndex$$1$$;) {
      $current$$17$$ = this.$_getEntry$($currentIndex$$2_parent$$34$$);
      if ($current$$17$$.depth != $start$$47$$.depth) {
        break;
      }
      $currentIndex$$2_parent$$34$$++;
    }
    this.$_deleteAllRowsBelow$($parentIndex$$1_startIndex$$31$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleRefreshEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleRefreshEvent$$($parentKey$$10$$) {
    null == $parentKey$$10$$ && this.refresh();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isExpandAll$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isExpandAll$$() {
    var $capability$$ = this.$m_wrapped$.getCapability("fetchDescendants");
    return void 0 != this.$m_collapsedKeys$ && null != $capability$$ && "disable" != $capability$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isBatchFetching$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isBatchFetching$$() {
    return "enable" === this.$m_wrapped$.getCapability("batchFetch");
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.refresh = function $$oj$$21$$$$FlattenedTreeDataSource$$$refresh$() {
    this.$_clearAll$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getIndex$$($rowKey$$32$$) {
    var $lastIndex$$2$$, $i$$320$$, $rowData$$5$$;
    $lastIndex$$2$$ = this.$_getLastIndex$();
    for ($i$$320$$ = 0;$i$$320$$ <= $lastIndex$$2$$;$i$$320$$++) {
      if ($rowData$$5$$ = this.$_getEntry$($i$$320$$), $rowData$$5$$.key == $rowKey$$32$$) {
        return $i$$320$$;
      }
    }
    return-1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getKey = function $$oj$$21$$$$FlattenedTreeDataSource$$$getKey$($index$$197$$) {
    return 0 > $index$$197$$ || $index$$197$$ > this.$_getLastIndex$() ? null : this.$_getEntry$($index$$197$$).key;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getFetchedRange$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getFetchedRange$$() {
    return{start:0, end:this.$_getLastIndex$() + 1};
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getAncestors$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getAncestors$$($index$$198_parent$$35_rowKey$$33$$) {
    var $ancestors$$1$$;
    $ancestors$$1$$ = [];
    $index$$198_parent$$35_rowKey$$33$$ = this.$getIndex$($index$$198_parent$$35_rowKey$$33$$);
    for ($index$$198_parent$$35_rowKey$$33$$ = this.$_getParent$($index$$198_parent$$35_rowKey$$33$$);null != $index$$198_parent$$35_rowKey$$33$$;) {
      $ancestors$$1$$.push($index$$198_parent$$35_rowKey$$33$$), $index$$198_parent$$35_rowKey$$33$$ = this.$getIndex$($index$$198_parent$$35_rowKey$$33$$), $index$$198_parent$$35_rowKey$$33$$ = this.$_getParent$($index$$198_parent$$35_rowKey$$33$$);
    }
    return $ancestors$$1$$.reverse();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleMaxCountReached$$($range$$21$$, $callbacks$$46$$) {
    null != $callbacks$$46$$ && null != $callbacks$$46$$.error && $callbacks$$46$$.error.call(null);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$insertRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$insertRows$$() {
    $oj$$21$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$removeRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$removeRows$$() {
    $oj$$21$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getLastIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getLastIndex$$() {
    return this.$m_cache$.length - 1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getLastEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getLastEntry$$() {
    return this.$m_cache$[this.$_getLastIndex$()];
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getEntry$$($index$$199$$) {
    return this.$m_cache$[$index$$199$$];
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getParent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getParent$$($entry$$4_index$$200$$) {
    $entry$$4_index$$200$$ = this.$m_cache$[$entry$$4_index$$200$$];
    return null != $entry$$4_index$$200$$ ? $entry$$4_index$$200$$.parent : null;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_addEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_addEntry$$($key$$134$$, $depth$$22$$, $index$$201$$, $parent$$36$$, $insertAt$$) {
    var $rowData$$6$$ = {};
    $rowData$$6$$.key = $key$$134$$;
    $rowData$$6$$.depth = $depth$$22$$;
    $rowData$$6$$.index = $index$$201$$;
    $rowData$$6$$.parent = $parent$$36$$;
    void 0 === $insertAt$$ ? this.$m_cache$.push($rowData$$6$$) : this.$m_cache$.splice($insertAt$$, 0, $rowData$$6$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeEntry$$($index$$202$$, $count$$48$$) {
    this.$m_cache$.splice($index$$202$$, $count$$48$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_clearAll$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_clearAll$$() {
    this.$m_cache$.length = 0;
  };
  $oj$$21$$.$__registerWidget$("oj.ojRowExpander", $$$$20$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-component-icon", clickable:"oj-clickable-icon-nocontext", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon", toucharea:"oj-rowexpander-touch-area", indent:"oj-rowexpander-indent", iconspacer:"oj-rowexpander-icon-spacer", 
  depth0:"oj-rowexpander-depth-0", depth1:"oj-rowexpander-depth-1", depth2:"oj-rowexpander-depth-2", depth3:"oj-rowexpander-depth-3", depth4:"oj-rowexpander-depth-4", depth5:"oj-rowexpander-depth-5", depth6:"oj-rowexpander-depth-6", depth7:"oj-rowexpander-depth-7"}, $constants$:{$MAX_STYLE_DEPTH$:7, $NUM5_KEY$:53}, _ComponentCreate:function() {
    this._super();
    this.element.addClass(this.$classNames$.root);
    this.$_initContent$();
  }, $_initContent$:function() {
    var $self$$128$$ = this, $context$$77$$;
    $context$$77$$ = this.options.context;
    this.$component$ = $context$$77$$.component;
    this.$datasource$ = $context$$77$$.datasource;
    this.depth = $context$$77$$.depth;
    this.$iconState$ = $context$$77$$.state;
    this.$rowKey$ = $context$$77$$.key;
    this.index = $context$$77$$.index;
    this.$parentKey$ = $context$$77$$.parentKey;
    this.$_addIndentation$();
    this.$_addIcon$();
    this.$_setIconStateClass$();
    "expanded" === this.$iconState$ || "collapsed" === this.$iconState$ ? ($$$$20$$(this.$toucharea$).on("touchend", function($event$$285$$) {
      $event$$285$$.preventDefault();
      $self$$128$$.$_fireExpandCollapse$();
    }), $$$$20$$(this.$toucharea$).on("click", function($event$$286$$) {
      $event$$286$$.preventDefault();
      $self$$128$$.$_fireExpandCollapse$();
    }), $$$$20$$(this.element).on("keypress", function($event$$287$$) {
      var $code$$7$$ = $event$$287$$.keyCode || $event$$287$$.which;
      if ($code$$7$$ === $$$$20$$.ui.keyCode.ENTER || $code$$7$$ === $$$$20$$.ui.keyCode.SPACE) {
        $self$$128$$.$_fireExpandCollapse$(), $event$$287$$.preventDefault(), $event$$287$$.target.focus();
      }
    }), this.$handleKeyDownCallback$ = this.$_handleKeyDownEvent$.bind(this), $$$$20$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$), this.$handleExpandCallback$ = this.$_handleExpandEvent$.bind(this), this.$handleCollapseCallback$ = this.$_handleCollapseEvent$.bind(this), this.$datasource$.on("expand", this.$handleExpandCallback$, this), this.$datasource$.on("collapse", this.$handleCollapseCallback$, this)) : "leaf" === this.$iconState$ && (this.$handleKeyDownCallback$ = 
    this.$_handleKeyDownEvent$.bind(this), $$$$20$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$), $$$$20$$(this.icon).attr("tabindex", -1));
    this.$handleActiveKeyChangeCallback$ = this.$_handleActiveKeyChangeEvent$.bind(this);
    $$$$20$$(this.$component$.element).on("ojactive", this.$handleActiveKeyChangeCallback$);
  }, refresh:function() {
    this.element.empty();
    this.$_initContent$();
  }, _destroy:function() {
    $$$$20$$(this.$component$.element).off("ojkeydown", this.$handleKeyDownCallback$);
    $$$$20$$(this.$component$.element).off("ojactive", this.$handleActiveKeyChangeCallback$);
    this.$datasource$.off("expand", this.$handleExpandCallback$, this);
    this.$datasource$.off("collapse", this.$handleCollapseCallback$, this);
    this.element.removeClass(this.$classNames$.root);
    this.element.empty();
  }, _setOption:function($key$$135$$, $value$$232$$, $flags$$29$$) {
    this._super($key$$135$$, $value$$232$$, $flags$$29$$);
    "context" == $key$$135$$ && this.refresh();
  }, $_addIndentation$:function() {
    var $i$$321_remainder$$, $depth$$23$$;
    $depth$$23$$ = this.depth - 1;
    if ($depth$$23$$ < this.$constants$.$MAX_STYLE_DEPTH$) {
      this.$_appendSpacer$($depth$$23$$);
    } else {
      for ($i$$321_remainder$$ = 1;$i$$321_remainder$$ <= $depth$$23$$ / this.$constants$.$MAX_STYLE_DEPTH$;$i$$321_remainder$$++) {
        this.$_appendSpacer$(this.$constants$.$MAX_STYLE_DEPTH$);
      }
      $i$$321_remainder$$ = $depth$$23$$ % this.$constants$.$MAX_STYLE_DEPTH$;
      $i$$321_remainder$$ < this.$constants$.$MAX_STYLE_DEPTH$ && this.$_appendSpacer$($i$$321_remainder$$);
    }
  }, $_appendSpacer$:function($depth$$24_spacer$$) {
    $depth$$24_spacer$$ = $$$$20$$(document.createElement("span")).addClass(this.$classNames$.indent).addClass(this.$classNames$["depth" + $depth$$24_spacer$$]);
    this.element.append($depth$$24_spacer$$);
  }, $_addIcon$:function() {
    var $iconSpacer$$ = $$$$20$$(document.createElement("div")).addClass(this.$classNames$.iconspacer);
    this.$toucharea$ = $$$$20$$(document.createElement("div")).addClass(this.$classNames$.toucharea);
    this.icon = $$$$20$$(document.createElement("a")).attr("href", "#").attr("aria-labelledby", this.$_getLabelledBy$()).addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
    this.element.append($iconSpacer$$.append(this.$toucharea$.append(this.icon)));
  }, $_addIconClass$:function($classKey$$) {
    this.icon.addClass(this.$classNames$[$classKey$$]);
  }, $_removeIconClass$:function($classKey$$1$$) {
    this.icon.removeClass(this.$classNames$[$classKey$$1$$]);
  }, $_setIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("icon");
        this.$_removeIconClass$("clickable");
        this.$_addIconClass$("leaf");
        break;
      case "collapsed":
        this.$_addIconClass$("expand");
        this.$_ariaExpanded$(!1);
        break;
      case "expanded":
        this.$_addIconClass$("collapse");
        this.$_ariaExpanded$(!0);
        break;
      case "loading":
        this.$_removeIconClass$("clickable"), this.$_addIconClass$("lazyload");
    }
  }, $_removeIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("leaf");
        this.$_addIconClass$("icon");
        this.$_addIconClass$("clickable");
        break;
      case "collapsed":
        this.$_removeIconClass$("expand");
        break;
      case "expanded":
        this.$_removeIconClass$("collapse");
        break;
      case "loading":
        this.$_removeIconClass$("lazyload"), this.$_addIconClass$("clickable");
    }
  }, $_handleActiveKeyChangeEvent$:function($event$$288$$, $ui$$14$$) {
    var $context$$78_rowKey$$34$$, $state$$13$$;
    null != $ui$$14$$.activeKey && ($context$$78_rowKey$$34$$ = $ui$$14$$.activeKey.rowKey, this.$rowKey$ !== $context$$78_rowKey$$34$$ || null != $ui$$14$$.previousActiveKey && $ui$$14$$.previousActiveKey.row == $ui$$14$$.activeKey.row || !this.$component$.$_setAccessibleContext$ || ($context$$78_rowKey$$34$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)}), $state$$13$$ = 
    "collapsed" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateCollapsed") : "expanded" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateExpanded") : "", this.$component$.$_setAccessibleContext$({context:$context$$78_rowKey$$34$$, state:$state$$13$$})));
  }, $_handleKeyDownEvent$:function($event$$289$$, $ui$$15$$) {
    var $ancestors$$2_code$$8_context$$79$$, $ancestorInfo$$, $i$$322$$;
    if (this.$rowKey$ === $ui$$15$$.rowKey && ($event$$289$$ = $event$$289$$.originalEvent, $ancestors$$2_code$$8_context$$79$$ = $event$$289$$.keyCode || $event$$289$$.which, $oj$$21$$.$DomUtils$.$isMetaKeyPressed$($event$$289$$))) {
      if ($ancestors$$2_code$$8_context$$79$$ == $$$$20$$.ui.keyCode.RIGHT && "collapsed" === this.$iconState$) {
        this.$_loading$(), this.$datasource$.expand(this.$rowKey$), $event$$289$$.preventDefault();
      } else {
        if ($ancestors$$2_code$$8_context$$79$$ == $$$$20$$.ui.keyCode.LEFT && "expanded" === this.$iconState$) {
          this.$_loading$(), this.$datasource$.collapse(this.$rowKey$), $event$$289$$.preventDefault();
        } else {
          if ($event$$289$$.altKey && $ancestors$$2_code$$8_context$$79$$ == this.$constants$.$NUM5_KEY$ && this.$component$.$_setAccessibleContext$) {
            $ancestors$$2_code$$8_context$$79$$ = this.$datasource$.$getAncestors$(this.$rowKey$);
            if (null != $ancestors$$2_code$$8_context$$79$$ && 0 < $ancestors$$2_code$$8_context$$79$$.length) {
              for ($ancestorInfo$$ = [], $i$$322$$ = 0;$i$$322$$ < $ancestors$$2_code$$8_context$$79$$.length;$i$$322$$++) {
                $ancestorInfo$$.push({key:$ancestors$$2_code$$8_context$$79$$[$i$$322$$], label:this.$getTranslatedString$("accessibleLevelDescription", {level:$i$$322$$ + 1})});
              }
            }
            $ancestors$$2_code$$8_context$$79$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)});
            this.$component$.$_setAccessibleContext$({context:$ancestors$$2_code$$8_context$$79$$, state:"", ancestors:$ancestorInfo$$});
            $event$$289$$.preventDefault();
          }
        }
      }
    }
  }, $_loading$:function() {
    this.$_removeIconStateClass$();
    this.$iconState$ = "loading";
    this.$_setIconStateClass$();
  }, $_handleExpandEvent$:function($event$$290_rowKey$$36$$) {
    $event$$290_rowKey$$36$$ = $event$$290_rowKey$$36$$.rowKey;
    $event$$290_rowKey$$36$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "expanded", this.$_setIconStateClass$(), this.$_ariaExpanded$(!0), this._trigger("expand", null, {rowKey:$event$$290_rowKey$$36$$}));
  }, $_handleCollapseEvent$:function($event$$291_rowKey$$37$$) {
    $event$$291_rowKey$$37$$ = $event$$291_rowKey$$37$$.rowKey;
    $event$$291_rowKey$$37$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "collapsed", this.$_setIconStateClass$(), this.$_ariaExpanded$(!1), this._trigger("collapse", null, {rowKey:$event$$291_rowKey$$37$$}));
  }, $_fireExpandCollapse$:function() {
    var $state$$14$$ = this.$iconState$;
    this.$_loading$();
    "collapsed" === $state$$14$$ ? this.$datasource$.expand(this.$rowKey$) : "expanded" === $state$$14$$ && this.$datasource$.collapse(this.$rowKey$);
  }, $_ariaExpanded$:function($bool$$) {
    this.icon.attr("aria-expanded", $bool$$);
  }, getNodeBySubId:function($locator$$29$$) {
    return null == $locator$$29$$ ? this.element ? this.element[0] : null : "oj-rowexpander-icon" === $locator$$29$$.subId && null != this.icon ? this.icon.get(0) : null;
  }, getSubIdByNode:function($node$$54$$) {
    return $node$$54$$ === this.icon.get(0) ? {$subId$:"oj-rowexpander-icon"} : null;
  }, $_NotifyAttached$:function() {
    this._super();
    this.icon.attr("aria-labelledby", this.$_getLabelledBy$());
  }, $_getLabelledBy$:function() {
    return this.element.parent().closest("[id]").attr("id");
  }});
});
