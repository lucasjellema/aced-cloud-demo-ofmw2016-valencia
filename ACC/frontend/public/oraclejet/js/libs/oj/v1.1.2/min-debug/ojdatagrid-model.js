/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$30$$) {
  $oj$$30$$.$CollectionCellSet$ = function $$oj$$30$$$$CollectionCellSet$$($startRow$$3$$, $endRow$$2$$, $startColumn$$3$$, $endColumn$$2$$, $columns$$19$$) {
    $oj$$30$$.$Assert$.$assertNumber$($startRow$$3$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($endRow$$2$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($startColumn$$3$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($endColumn$$2$$, null);
    $oj$$30$$.$Assert$.$assertArrayOrNull$($columns$$19$$);
    this.$m_startRow$ = $startRow$$3$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$3$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_columns$ = $columns$$19$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$30$$.$CollectionCellSet$, $oj$$30$$);
  $oj$$30$$.$CollectionCellSet$.prototype.$setModels$ = function $$oj$$30$$$$CollectionCellSet$$$$setModels$$($models$$15$$) {
    $oj$$30$$.$Assert$.$assertArray$($models$$15$$);
    null != $models$$15$$ && $models$$15$$.length === this.$getCount$("row") && (this.$m_models$ = $models$$15$$);
  };
  $oj$$30$$.$CollectionCellSet$.prototype.getData = function $$oj$$30$$$$CollectionCellSet$$$getData$($indexes$$21$$) {
    var $model$$59$$;
    $model$$59$$ = this.$_getModel$($indexes$$21$$);
    return null == $model$$59$$ ? null : $model$$59$$.get(this.$m_columns$[$indexes$$21$$.column]);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$30$$.$CollectionCellSet$.prototype.getData});
  $oj$$30$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionCellSet$$$getMetadata$($indexes$$22$$) {
    var $model$$60$$;
    $model$$60$$ = this.$_getModel$($indexes$$22$$);
    return null == $model$$60$$ ? null : {keys:{row:$oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$60$$), column:this.$m_columns$[$indexes$$22$$.column]}};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$30$$$$CollectionCellSet$$$$_getModel$$($column$$27_indexes$$23$$) {
    var $row$$48$$;
    if (null == this.$m_models$) {
      return null;
    }
    $oj$$30$$.$Assert$.$assertObject$($column$$27_indexes$$23$$);
    $row$$48$$ = $column$$27_indexes$$23$$.row;
    $column$$27_indexes$$23$$ = $column$$27_indexes$$23$$.column;
    $oj$$30$$.$Assert$.assert($row$$48$$ >= this.$m_startRow$ && $row$$48$$ <= this.$m_endRow$ && $column$$27_indexes$$23$$ >= this.$m_startColumn$ && $column$$27_indexes$$23$$ <= this.$m_endColumn$);
    return this.$m_models$[$row$$48$$ - this.$m_startRow$];
  };
  $oj$$30$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionCellSet$$$$getCount$$($axis$$46$$) {
    return "row" === $axis$$46$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$46$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionCellSet$.prototype.getStartRow = function $$oj$$30$$$$CollectionCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {getStartRow:$oj$$30$$.$CollectionCellSet$.prototype.getStartRow});
  $oj$$30$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$30$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$30$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$30$$.$CollectionCellSet$.prototype.getStartColumn = function $$oj$$30$$$$CollectionCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {getStartColumn:$oj$$30$$.$CollectionCellSet$.prototype.getStartColumn});
  $oj$$30$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$30$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$30$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$30$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$30$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$30$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$30$$.$CollectionDataGridDataSource$ = function $$oj$$30$$$$CollectionDataGridDataSource$$($collection$$34$$, $options$$319$$) {
    this.$collection$ = $collection$$34$$;
    null != $options$$319$$ && (this.$rowHeader$ = $options$$319$$.rowHeader, this.columns = $options$$319$$.columns);
    $oj$$30$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$30$$.$CollectionDataGridDataSource$, $oj$$30$$);
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$CollectionDataGridDataSource$, $oj$$30$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$30$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$30$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_registerEventListeners$();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$30$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
    this.$collection$.on("reset", this.$_handleCollectionReset$.bind(this));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return null != this.data;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$47$$) {
    var $totalSize$$7$$;
    void 0 == this.precision && (this.precision = {});
    if ("row" == $axis$$47$$) {
      $totalSize$$7$$ = this.$_totalSize$();
      if (-1 === $totalSize$$7$$ || 0 === $totalSize$$7$$ && (!this.$_isDataAvailable$() || 0 < this.$_size$())) {
        return this.precision[$axis$$47$$] = "estimate", -1;
      }
      this.precision[$axis$$47$$] = "exact";
      return this.$_size$();
    }
    if ("column" == $axis$$47$$) {
      if (null != this.columns) {
        return this.precision[$axis$$47$$] = "exact", this.columns.length;
      }
      this.precision[$axis$$47$$] = "estimate";
      return-1;
    }
    return 0;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$48$$) {
    null != this.precision && null != this.precision[$axis$$48$$] || this.$getCount$($axis$$48$$);
    return this.precision[$axis$$48$$];
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$9$$, $callbacks$$47$$, $callbackObjects$$24$$) {
    var $axis$$49$$, $callback$$102$$;
    null != $callbacks$$47$$ && ($axis$$49$$ = $headerRange$$9$$.axis, $callback$$102$$ = {}, $callback$$102$$.$headerRange$ = $headerRange$$9$$, $callback$$102$$.callbacks = $callbacks$$47$$, $callback$$102$$.$callbackObjects$ = $callbackObjects$$24$$, this.$pendingHeaderCallback$[$axis$$49$$] = $callback$$102$$);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$10$$, $callbacks$$48$$, $callbackObjects$$25$$, $actualRange_end$$18$$) {
    var $axis$$50$$, $start$$49$$, $count$$49$$, $headerSet$$7$$;
    $axis$$50$$ = $headerRange$$10$$.axis;
    $start$$49$$ = $headerRange$$10$$.start;
    $count$$49$$ = $headerRange$$10$$.count;
    $oj$$30$$.$Assert$.assert("row" === $axis$$50$$ || "column" === $axis$$50$$);
    $oj$$30$$.$Assert$.assert(0 < $count$$49$$);
    if ("column" === $axis$$50$$) {
      null != this.columns ? ($actualRange_end$$18$$ = Math.min(this.columns.length, $start$$49$$ + $count$$49$$), $headerSet$$7$$ = new $oj$$30$$.$CollectionHeaderSet$($start$$49$$, $actualRange_end$$18$$, this.columns)) : $headerSet$$7$$ = new $oj$$30$$.$ArrayHeaderSet$($start$$49$$, $start$$49$$, $axis$$50$$, null);
    } else {
      if ("row" === $axis$$50$$) {
        if (null != this.$rowHeader$) {
          null != $actualRange_end$$18$$ && ($count$$49$$ = $actualRange_end$$18$$.count);
          $actualRange_end$$18$$ = Math.min(this.$_size$(), $start$$49$$ + $count$$49$$);
          $headerSet$$7$$ = new $oj$$30$$.$CollectionHeaderSet$($start$$49$$, $actualRange_end$$18$$, this.columns, this.$rowHeader$);
          this.$_resolveModels$($start$$49$$, $actualRange_end$$18$$, $headerSet$$7$$, $headerRange$$10$$, $callbacks$$48$$, $callbackObjects$$25$$);
          return;
        }
        $headerSet$$7$$ = new $oj$$30$$.$ArrayHeaderSet$($start$$49$$, $start$$49$$, $axis$$50$$, null);
      }
    }
    null != $callbacks$$48$$ && $callbacks$$48$$.success && $callbacks$$48$$.success.call($callbackObjects$$25$$.success, $headerSet$$7$$, $headerRange$$10$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$5$$) {
    var $i$$333$$, $cellRange$$6$$, $rowStart$$4$$, $rowCount$$8$$, $colStart$$1$$, $colCount$$1$$;
    for ($i$$333$$ = 0;$i$$333$$ < $cellRanges$$5$$.length;$i$$333$$ += 1) {
      $cellRange$$6$$ = $cellRanges$$5$$[$i$$333$$], $oj$$30$$.$Assert$.assert("row" === $cellRange$$6$$.axis || "column" === $cellRange$$6$$.axis), $oj$$30$$.$Assert$.assert(0 < $cellRange$$6$$.count), "row" === $cellRange$$6$$.axis ? ($rowStart$$4$$ = $cellRange$$6$$.start, $rowCount$$8$$ = $cellRange$$6$$.count) : "column" === $cellRange$$6$$.axis && ($colStart$$1$$ = $cellRange$$6$$.start, $colCount$$1$$ = $cellRange$$6$$.count);
    }
    return{rowStart:$rowStart$$4$$, rowCount:$rowCount$$8$$, colStart:$colStart$$1$$, colCount:$colCount$$1$$};
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$6$$, $callbacks$$49$$, $callbackObjects$$26$$, $actualRange$$1_rowEnd$$1$$) {
    var $cellSet$$6_colEnd$$1_ranges$$, $rowStart$$5$$, $colStart$$2$$;
    $cellSet$$6_colEnd$$1_ranges$$ = this.$_getRanges$($cellRanges$$6$$);
    $rowStart$$5$$ = $cellSet$$6_colEnd$$1_ranges$$.rowStart;
    $actualRange$$1_rowEnd$$1$$ = null != $actualRange$$1_rowEnd$$1$$ ? Math.min(this.$_size$(), $rowStart$$5$$ + $actualRange$$1_rowEnd$$1$$.count) : Math.min(this.$_size$(), $rowStart$$5$$ + $cellSet$$6_colEnd$$1_ranges$$.rowCount);
    $colStart$$2$$ = $cellSet$$6_colEnd$$1_ranges$$.colStart;
    $cellSet$$6_colEnd$$1_ranges$$ = Math.min(null == this.columns ? 0 : this.columns.length, $colStart$$2$$ + $cellSet$$6_colEnd$$1_ranges$$.colCount);
    $cellSet$$6_colEnd$$1_ranges$$ = new $oj$$30$$.$CollectionCellSet$($rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $colStart$$2$$, $cellSet$$6_colEnd$$1_ranges$$, this.columns);
    this.$_resolveModels$($rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $cellSet$$6_colEnd$$1_ranges$$, $cellRanges$$6$$, $callbacks$$49$$, $callbackObjects$$26$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_resolveModels$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_resolveModels$$($i$$334_rowStart$$6$$, $rowEnd$$2$$, $set$$4$$, $ranges$$1$$, $callbacks$$50$$, $callbackObjects$$27$$) {
    var $promises$$;
    for ($promises$$ = [];$i$$334_rowStart$$6$$ < $rowEnd$$2$$;$i$$334_rowStart$$6$$++) {
      $promises$$.push(this.$collection$.at($i$$334_rowStart$$6$$, {deferred:!0}));
    }
    Promise.all($promises$$).then(function($models$$16$$) {
      $set$$4$$.$setModels$($models$$16$$);
      $callbacks$$50$$.success.call($callbackObjects$$27$$.success, $set$$4$$, $ranges$$1$$);
    });
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$7$$, $callbacks$$51$$, $callbackObjects$$28$$) {
    null != $callbacks$$51$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$7$$, this.$pendingCellCallback$.callbacks = $callbacks$$51$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$28$$);
    this.$_fetchCells$($cellRanges$$7$$);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$51$$) {
    var $pendingCallback$$, $headerRange$$11$$, $callbacks$$52$$, $callbackObjects$$29$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$51$$];
    null != $pendingCallback$$ && ($headerRange$$11$$ = $pendingCallback$$.$headerRange$, $callbacks$$52$$ = $pendingCallback$$.callbacks, $callbackObjects$$29$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$51$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$11$$, $callbacks$$52$$, $callbackObjects$$29$$, $actualRange$$2$$), this.$pendingHeaderCallback$[$axis$$51$$] = null);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$9_ranges$$2$$) {
    var $rowStart$$7$$;
    $cellRanges$$9_ranges$$2$$ = this.$_getRanges$($cellRanges$$9_ranges$$2$$);
    $rowStart$$7$$ = $cellRanges$$9_ranges$$2$$.rowStart;
    this.$collection$.$setRangeLocal$($rowStart$$7$$, $cellRanges$$9_ranges$$2$$.rowCount).then(function($actual$$6$$) {
      this.data = !0;
      var $first$$8$$ = this.$collection$.at($rowStart$$7$$, {deferred:!0});
      this.$_setActualCallbackRanges$($actual$$6$$.start, $actual$$6$$.count);
      null != $first$$8$$ && void 0 === this.columns ? $first$$8$$.then(function($model$$61$$) {
        this.$_setupColumns$($model$$61$$);
        this.$_fetchCellsComplete$();
      }.bind(this)) : this.$_fetchCellsComplete$();
    }.bind(this), function($e$$95$$) {
      this.$_fetchCellsError$($e$$95$$);
    }.bind(this));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsError$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_fetchCellsError$$($error$$42$$) {
    $oj$$30$$.$Logger$.error($error$$42$$);
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderErrorCallbacks$("column", $error$$42$$), this.$_processPendingHeaderErrorCallbacks$("row", $error$$42$$));
    null != this.$pendingCellCallback$ && this.$_processPendingCellErrorCallbacks$($error$$42$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderErrorCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingHeaderErrorCallbacks$$($axis$$52$$, $error$$43$$) {
    var $headerRange$$12_pendingCallback$$1$$, $callbacks$$54$$, $callbackObjects$$31$$;
    $headerRange$$12_pendingCallback$$1$$ = this.$pendingHeaderCallback$[$axis$$52$$];
    null != $headerRange$$12_pendingCallback$$1$$ && ($callbacks$$54$$ = $headerRange$$12_pendingCallback$$1$$.callbacks, $callbackObjects$$31$$ = $headerRange$$12_pendingCallback$$1$$.$callbackObjects$, $headerRange$$12_pendingCallback$$1$$ = $headerRange$$12_pendingCallback$$1$$.$headerRange$, $callbacks$$54$$.error && $callbacks$$54$$.error.call($callbackObjects$$31$$.error, $error$$43$$, $headerRange$$12_pendingCallback$$1$$), this.$pendingHeaderCallback$[$axis$$52$$] = null);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellErrorCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingCellErrorCallbacks$$($error$$44$$) {
    var $callbacks$$55$$, $callbackObjects$$32$$, $cellRanges$$10$$;
    $callbacks$$55$$ = this.$pendingCellCallback$.callbacks;
    $callbackObjects$$32$$ = this.$pendingCellCallback$.$callbackObjects$;
    $cellRanges$$10$$ = this.$pendingCellCallback$.$cellRanges$;
    $callbacks$$55$$.error && $callbacks$$55$$.error.call($callbackObjects$$32$$.error, $error$$44$$, $cellRanges$$10$$);
    this.$pendingCellCallback$ = null;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsComplete$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_fetchCellsComplete$$() {
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
    null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$50$$, $count$$50$$) {
    var $actualRange$$4$$ = {start:$start$$50$$, count:$count$$50$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$62$$) {
    this.columns = $model$$62$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$30$$$$CollectionDataGridDataSource$$$keys$($indexes$$24$$) {
    var $rowIndex$$10$$, $columnIndex$$4$$, $rowKey$$38$$, $columnKey$$5$$, $atPromise$$, $self$$144$$;
    $rowIndex$$10$$ = $indexes$$24$$.row;
    $columnIndex$$4$$ = $indexes$$24$$.column;
    $self$$144$$ = this;
    return new Promise(function($resolve$$47$$) {
      $atPromise$$ = $self$$144$$.$collection$.at($rowIndex$$10$$, {deferred:!0});
      null != $atPromise$$ ? $atPromise$$.then(function($rowModel$$) {
        $rowKey$$38$$ = $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$);
        null == $self$$144$$.columns && $self$$144$$.$_setupColumns$($rowModel$$);
        $columnKey$$5$$ = $self$$144$$.columns[$columnIndex$$4$$];
        $resolve$$47$$({row:null == $rowKey$$38$$ ? null : $rowKey$$38$$, column:null == $columnKey$$5$$ ? null : $columnKey$$5$$});
      }.bind($self$$144$$)) : $resolve$$47$$({row:null, column:null});
    });
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$30$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$39$$) {
    var $rowKey$$39$$, $columnKey$$6$$, $columnIndex$$5$$, $self$$145$$;
    $rowKey$$39$$ = $keys$$39$$.row;
    $columnKey$$6$$ = $keys$$39$$.column;
    $self$$145$$ = this;
    return new Promise(function($resolve$$48$$) {
      $self$$145$$.$collection$.indexOf($rowKey$$39$$, {deferred:!0}).then(function($rowIndex$$11$$) {
        null == $self$$145$$.columns ? $self$$145$$.$collection$.first(1, {deferred:!0}).then(function($model$$63$$) {
          $self$$145$$.$_setupColumns$($model$$63$$);
          $columnIndex$$5$$ = $self$$145$$.columns.indexOf($columnKey$$6$$);
          $resolve$$48$$({row:$rowIndex$$11$$, column:$columnIndex$$5$$});
        }.bind($self$$145$$)) : ($columnIndex$$5$$ = $self$$145$$.columns.indexOf($columnKey$$6$$), $resolve$$48$$({row:$rowIndex$$11$$, column:$columnIndex$$5$$}));
      }.bind($self$$145$$));
    });
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$30$$$$CollectionDataGridDataSource$$$getCapability$($feature$$16$$) {
    return "sort" === $feature$$16$$ ? "column" : "move" === $feature$$16$$ ? "row" : null;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$30$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$30$$$$CollectionDataGridDataSource$$$sort$($axis$$53_criteria$$14$$, $callbacks$$56$$, $callbackObjects$$33$$) {
    var $comparator$$14$$, $direction$$10$$, $key$$142$$;
    null == $callbackObjects$$33$$ && ($callbackObjects$$33$$ = {});
    null == $axis$$53_criteria$$14$$ ? this.$_resetSortOrder$($callbacks$$56$$, $callbackObjects$$33$$) : ($direction$$10$$ = $axis$$53_criteria$$14$$.direction, $key$$142$$ = $axis$$53_criteria$$14$$.key, $axis$$53_criteria$$14$$ = $axis$$53_criteria$$14$$.axis, "column" === $axis$$53_criteria$$14$$ ? (this.$collection$.$IsVirtual$() ? (this.$collection$.comparator = $key$$142$$, this.$collection$.sortDirection = "ascending" === $direction$$10$$ ? 1 : -1) : ("ascending" === $direction$$10$$ && ($comparator$$14$$ = 
    function $$comparator$$14$$$($a$$107$$, $b$$69$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$107$$ = $a$$107$$.get($key$$142$$);
      $b$$69$$ = $b$$69$$.get($key$$142$$);
      $as$$2$$ = isNaN($a$$107$$);
      $bs$$2$$ = isNaN($b$$69$$);
      $a$$107$$ instanceof Date && ($a$$107$$ = $a$$107$$.toISOString(), $as$$2$$ = !0);
      $b$$69$$ instanceof Date && ($b$$69$$ = $b$$69$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$107$$ < $b$$69$$ ? -1 : $a$$107$$ === $b$$69$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$107$$ - $b$$69$$;
    }), "descending" === $direction$$10$$ && ($comparator$$14$$ = function $$comparator$$14$$$($a$$108$$, $b$$70$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$108$$ = $a$$108$$.get($key$$142$$);
      $b$$70$$ = $b$$70$$.get($key$$142$$);
      $as$$3$$ = isNaN($a$$108$$);
      $bs$$3$$ = isNaN($b$$70$$);
      $a$$108$$ instanceof Date && ($a$$108$$ = $a$$108$$.toISOString());
      $b$$70$$ instanceof Date && ($b$$70$$ = $b$$70$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$108$$ > $b$$70$$ ? -1 : $a$$108$$ === $b$$70$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$70$$ - $a$$108$$;
    }), this.$collection$.comparator = $comparator$$14$$), this.$collection$.sort(), null != $callbacks$$56$$ && null != $callbacks$$56$$.success && $callbacks$$56$$.success.call($callbackObjects$$33$$.success)) : null != $callbacks$$56$$ && null != $callbacks$$56$$.error && $callbacks$$56$$.error.call($callbackObjects$$33$$.error, "Axis value not supported"));
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$30$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_resetSortOrder$$($callbacks$$57$$, $callbackObjects$$34$$) {
    this.$collection$.comparator = null;
    this.$collection$.reset();
    null != $callbacks$$57$$ && null != $callbacks$$57$$.success && $callbacks$$57$$.success.call($callbackObjects$$34$$.success);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$30$$$$CollectionDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$, $position$$19$$, $callbacks$$58$$, $callbackObjects$$35$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$2$$, {deferred:!0}).then(function($moveModel$$) {
      null == $atKey$$2$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$), null != $callbacks$$58$$ && null != $callbacks$$58$$.success && $callbacks$$58$$.success.call($callbackObjects$$35$$.success)) : ($moveKey$$2$$ === $atKey$$2$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0})), $indexPromise$$.then(function($newIndex$$2$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$2$$, $force$:!0});
        null != $callbacks$$58$$ && null != $callbacks$$58$$.success && $callbacks$$58$$.success.call($callbackObjects$$35$$.success);
      }.bind(this)));
    }.bind(this));
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$30$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$6$$, $rowKey$$40$$, $columnKey$$7$$, $rowIndex$$12$$, $columnIndex$$6$$) {
    var $event$$358$$ = {source:this};
    $event$$358$$.operation = $operation$$6$$;
    $event$$358$$.keys = {row:$rowKey$$40$$, column:$columnKey$$7$$};
    $event$$358$$.indexes = {row:$rowIndex$$12$$, column:$columnIndex$$6$$};
    return $event$$358$$;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$64$$) {
    var $event$$359$$, $rowKey$$41$$;
    this.$collection$.indexOf($model$$64$$, {deferred:!0}).then(function($index$$214$$) {
      $rowKey$$41$$ = $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$64$$);
      $event$$359$$ = this.$_getModelEvent$("insert", $rowKey$$41$$, null, $index$$214$$, -1);
      this.handleEvent("change", $event$$359$$);
    }.bind(this));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$65$$, $collection$$36$$, $args$$20$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$65$$), null, $args$$20$$.index, -1));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$66$$) {
    var $event$$361$$, $rowKey$$43$$;
    this.$collection$.indexOf($model$$66$$, {deferred:!0}).then(function($index$$215$$) {
      $rowKey$$43$$ = $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$66$$);
      $event$$361$$ = this.$_getModelEvent$("update", $rowKey$$43$$, null, $index$$215$$, -1);
      this.handleEvent("change", $event$$361$$);
    }.bind(this));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("refresh", null, null));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionReset$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCollectionReset$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("reset", null, null));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_size$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_size$$() {
    return this.$collection$.size();
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_totalSize$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_totalSize$$() {
    return void 0 === this.$collection$.totalResults ? -1 : this.$collection$.totalResults;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCollection$$() {
    return this.$collection$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$30$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$30$$.$CollectionDataGridDataSource$.prototype.getData});
  $oj$$30$$.$CollectionDataGridUtils$ = function $$oj$$30$$$$CollectionDataGridUtils$$() {
  };
  $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$30$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$67$$) {
    var $key$$143$$;
    $key$$143$$ = $model$$67$$.$GetId$();
    null == $key$$143$$ && ($key$$143$$ = $model$$67$$.$GetCid$());
    return $key$$143$$;
  };
  $oj$$30$$.$CollectionHeaderSet$ = function $$oj$$30$$$$CollectionHeaderSet$$($start$$51$$, $end$$19$$, $headers$$5$$, $rowHeader$$2$$) {
    $oj$$30$$.$Assert$.$assertNumber$($start$$51$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($end$$19$$, null);
    $oj$$30$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$51$$;
    this.$m_end$ = $end$$19$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_rowHeader$ = $rowHeader$$2$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$30$$.$CollectionHeaderSet$, $oj$$30$$);
  $oj$$30$$.$CollectionHeaderSet$.prototype.$setModels$ = function $$oj$$30$$$$CollectionHeaderSet$$$$setModels$$($models$$17$$) {
    $oj$$30$$.$Assert$.$assertArray$($models$$17$$);
    null != $models$$17$$ && $models$$17$$.length === this.$getCount$() && (this.$m_models$ = $models$$17$$);
  };
  $oj$$30$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$30$$$$CollectionHeaderSet$$$getData$($index$$216$$, $level$$40$$) {
    var $model$$68$$;
    $oj$$30$$.$Assert$.assert($index$$216$$ <= this.$m_end$ && $index$$216$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$40$$ || 0 == $level$$40$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$68$$ = this.$m_models$[$index$$216$$ - this.$m_start$];
      return $model$$68$$.get(this.$m_rowHeader$);
    }
    return this.$m_headers$[$index$$216$$];
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$30$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$30$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionHeaderSet$$$getMetadata$($index$$217$$, $level$$41$$) {
    var $model$$69$$;
    $oj$$30$$.$Assert$.assert($index$$217$$ <= this.$m_end$ && $index$$217$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$41$$ || 0 == $level$$41$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$69$$ = this.$m_models$[$index$$217$$ - this.$m_start$];
      return{key:$oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$69$$)};
    }
    return{key:this.getData($index$$217$$, $level$$41$$)};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getLevelCount$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getLevelCount$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getExtent$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getExtent$$($index$$218$$, $level$$42$$) {
    $oj$$30$$.$Assert$.assert($index$$218$$ <= this.$m_end$ && $index$$218$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$42$$ || 0 == $level$$42$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getExtent", {$getExtent$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getExtent$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getDepth$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getDepth$$($index$$219$$, $level$$43$$) {
    $oj$$30$$.$Assert$.assert($index$$219$$ <= this.$m_end$ && $index$$219$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$43$$ || 0 == $level$$43$$, "level out of bounds");
    return 1;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getDepth", {$getDepth$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getDepth$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getStart$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
});
