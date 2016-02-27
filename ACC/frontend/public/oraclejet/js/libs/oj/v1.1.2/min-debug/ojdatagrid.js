/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/internal-deps/datagrid/DvtDataGrid", "ojs/ojcomponentcore", "ojs/ojdatacollection-common", "ojs/ojinputnumber", "ojs/ojmenu", "ojs/ojdialog", "ojs/ojpagingcontrol"], function($oj$$11$$, $$$$11$$, $DvtDataGrid$$1$$) {
  $oj$$11$$.$ArrayDataGridDataSource$ = function $$oj$$11$$$$ArrayDataGridDataSource$$($data$$81$$, $options$$257$$) {
    if (!($data$$81$$ instanceof Array) && "function" != typeof $data$$81$$ && "function" != typeof $data$$81$$.$subscribe$) {
      throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");
    }
    null != $options$$257$$ && (this.$rowHeaderKey$ = $options$$257$$.rowHeader, this.columns = $options$$257$$.columns);
    $oj$$11$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$81$$);
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$11$$.$ArrayDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$ArrayDataGridDataSource$, $oj$$11$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$11$$$$ArrayDataGridDataSource$$$Init$() {
    null == this.columns && (this.columns = this.$_getColumnsForScaffolding$(this.$getDataArray$()));
    this.$_initializeRowKeys$();
    "function" == typeof this.data && this.data.subscribe(this.$_subscribe$.bind(this), null, "arrayChange");
    $oj$$11$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $data$$82$$;
    $data$$82$$ = this.$getDataArray$();
    for (this.$lastKey$ = 0;this.$lastKey$ < $data$$82$$.length;this.$lastKey$ += 1) {
      $data$$82$$[this.$lastKey$].ojKey = this.$lastKey$.toString();
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$83$$) {
    var $propertyName$$8$$, $columns$$;
    if ("number" !== typeof $data$$83$$.length || 0 === $data$$83$$.length) {
      return[];
    }
    $columns$$ = [];
    for ($propertyName$$8$$ in $data$$83$$[0]) {
      $data$$83$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$.push($propertyName$$8$$));
    }
    return $columns$$;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getCount$$($axis$$2$$) {
    return "row" === $axis$$2$$ ? this.$_size$() : "column" === $axis$$2$$ ? this.columns.length : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getHeaderData$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getHeaderData$$($axis$$3$$, $index$$110$$) {
    var $data$$84$$;
    if ("row" === $axis$$3$$) {
      return $data$$84$$ = this.$getDataArray$(), void 0 != this.$rowHeaderKey$ ? $data$$84$$[$index$$110$$][this.$rowHeaderKey$] : 0 < $data$$84$$.length && $data$$84$$[0] instanceof Array ? void 0 === this.$_getRowKeyByIndex$($index$$110$$) ? $index$$110$$.toString() : this.$_getRowKeyByIndex$($index$$110$$) : null;
    }
    if ("column" === $axis$$3$$) {
      return this.columns[$index$$110$$];
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getHeaderMetadata$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getHeaderMetadata$$($axis$$4$$, $index$$111$$) {
    return "row" === $axis$$4$$ && void 0 != this.$rowHeaderKey$ ? {key:this.$_getRowKeyByIndex$($index$$111$$)} : {key:this.$_getHeaderData$($axis$$4$$, $index$$111$$)};
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$fetchHeaders$$($headerRange$$1$$, $callbacks$$16$$, $callbackObjects$$4$$) {
    var $axis$$5_headerSet$$, $start$$27$$, $count$$28_end$$8$$, $data$$85$$;
    $axis$$5_headerSet$$ = $headerRange$$1$$.axis;
    $start$$27$$ = $headerRange$$1$$.start;
    $count$$28_end$$8$$ = $headerRange$$1$$.count;
    $oj$$11$$.$Assert$.assert("row" === $axis$$5_headerSet$$ || "column" === $axis$$5_headerSet$$);
    $oj$$11$$.$Assert$.assert($start$$27$$ < this.$getCount$($axis$$5_headerSet$$));
    $oj$$11$$.$Assert$.assert(0 < $count$$28_end$$8$$);
    $start$$27$$ = Math.max(0, $start$$27$$);
    "column" === $axis$$5_headerSet$$ ? $count$$28_end$$8$$ = Math.min(this.columns.length, $start$$27$$ + $count$$28_end$$8$$) : ($data$$85$$ = this.$getDataArray$(), $count$$28_end$$8$$ = void 0 !== this.$rowHeaderKey$ || 0 < $data$$85$$.length && $data$$85$$[0] instanceof Array ? Math.min($data$$85$$.length, $start$$27$$ + $count$$28_end$$8$$) : $start$$27$$);
    $axis$$5_headerSet$$ = new $oj$$11$$.$ArrayHeaderSet$($start$$27$$, $count$$28_end$$8$$, $axis$$5_headerSet$$, this);
    null != $callbacks$$16$$ && null != $callbacks$$16$$.success && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$16$$.success.call($callbackObjects$$4$$.success, $axis$$5_headerSet$$, $headerRange$$1$$));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getCellData$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getCellData$$($row$$13$$, $column$$4$$) {
    var $col$$ = this.columns[$column$$4$$];
    return this.$getDataArray$()[$row$$13$$][$col$$];
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getCellMetadata$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getCellMetadata$$($row$$14$$, $column$$5$$) {
    return{keys:{row:this.$_getRowKeyByIndex$($row$$14$$), column:this.columns[$column$$5$$]}};
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$fetchCells$$($cellRanges$$, $callbacks$$17$$, $callbackObjects$$5$$) {
    var $cellSet_i$$166$$, $cellRange$$1$$, $rowStart$$, $rowEnd$$, $colStart$$, $colEnd$$;
    for ($cellSet_i$$166$$ = 0;$cellSet_i$$166$$ < $cellRanges$$.length;$cellSet_i$$166$$ += 1) {
      $cellRange$$1$$ = $cellRanges$$[$cellSet_i$$166$$], $oj$$11$$.$Assert$.assert("row" === $cellRange$$1$$.axis || "column" === $cellRange$$1$$.axis), $oj$$11$$.$Assert$.assert($cellRange$$1$$.start < this.$getCount$($cellRange$$1$$.axis)), $oj$$11$$.$Assert$.assert(0 < $cellRange$$1$$.count), "row" === $cellRange$$1$$.axis ? ($rowStart$$ = $cellRange$$1$$.start, $rowEnd$$ = Math.min(this.$_size$(), $rowStart$$ + $cellRange$$1$$.count)) : "column" === $cellRange$$1$$.axis && ($colStart$$ = $cellRange$$1$$.start, 
      $colEnd$$ = Math.min(this.columns.length, $colStart$$ + $cellRange$$1$$.count));
    }
    void 0 === $rowEnd$$ || void 0 === $colEnd$$ ? null != $callbacks$$17$$ && null != $callbacks$$17$$.error && (null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {}), $callbacks$$17$$.error.call($callbackObjects$$5$$.error)) : ($cellSet_i$$166$$ = new $oj$$11$$.$ArrayCellSet$($rowStart$$, $rowEnd$$, $colStart$$, $colEnd$$, this), null != $callbacks$$17$$ && null != $callbacks$$17$$.success && (null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {}), $callbacks$$17$$.success.call($callbackObjects$$5$$.success, 
    $cellSet_i$$166$$, $cellRanges$$)));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$11$$$$ArrayDataGridDataSource$$$keys$($indexes$$1$$) {
    var $rowIndex$$ = $indexes$$1$$.row, $columnIndex$$ = $indexes$$1$$.column;
    return new Promise(function($resolve$$36$$) {
      $resolve$$36$$({row:this.$_getRowKeyByIndex$($rowIndex$$), column:this.columns[$columnIndex$$]});
    }.bind(this));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$indexes$$($keys$$9$$) {
    var $rowKey$$ = $keys$$9$$.row, $columnKey$$ = $keys$$9$$.column;
    return new Promise(function($resolve$$37$$) {
      $resolve$$37$$({row:this.$_getRowIndexByKey$($rowKey$$), column:this.columns.indexOf($columnKey$$)});
    }.bind(this));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$11$$$$ArrayDataGridDataSource$$$sort$($criteria$$9_direction$$7$$, $callbacks$$18$$, $callbackObjects$$6$$) {
    var $sortArray$$ = [], $newColumns$$ = [], $axis$$6_i$$167$$, $headerIndex_headerKey$$;
    null != $callbacks$$18$$ && null == $callbackObjects$$6$$ && ($callbackObjects$$6$$ = {});
    if (null == $criteria$$9_direction$$7$$) {
      this.$_resetSortOrder$($callbacks$$18$$, $callbackObjects$$6$$);
    } else {
      if ($axis$$6_i$$167$$ = $criteria$$9_direction$$7$$.axis, $headerIndex_headerKey$$ = $criteria$$9_direction$$7$$.key, $criteria$$9_direction$$7$$ = $criteria$$9_direction$$7$$.direction, "column" === $axis$$6_i$$167$$) {
        void 0 == this.$origData$ && (this.$origData$ = this.data.slice()), this.$getDataArray$().sort(this.$_naturalSort$($criteria$$9_direction$$7$$, $headerIndex_headerKey$$)), null != $callbacks$$18$$ && null != $callbacks$$18$$.success && $callbacks$$18$$.success.call($callbackObjects$$6$$.success);
      } else {
        if ("row" === $axis$$6_i$$167$$) {
          $headerIndex_headerKey$$ = this.$_getRowIndexByKey$($headerIndex_headerKey$$);
          for ($axis$$6_i$$167$$ = 0;$axis$$6_i$$167$$ < this.columns.length;$axis$$6_i$$167$$ += 1) {
            $sortArray$$[$axis$$6_i$$167$$] = this.$getDataArray$()[$headerIndex_headerKey$$][this.columns[$axis$$6_i$$167$$]];
          }
          $sortArray$$.sort(this.$_naturalSort$($criteria$$9_direction$$7$$));
          for ($axis$$6_i$$167$$ = 0;$axis$$6_i$$167$$ < this.columns.length;$axis$$6_i$$167$$ += 1) {
            $newColumns$$[$axis$$6_i$$167$$] = this.columns[$sortArray$$.indexOf(this.$getDataArray$()[$headerIndex_headerKey$$][this.columns[$axis$$6_i$$167$$]])];
          }
          this.$origColumns$ = this.columns;
          this.columns = $newColumns$$;
          null != $callbacks$$18$$ && null != $callbacks$$18$$.success && $callbacks$$18$$.success.call($callbackObjects$$6$$.success);
        } else {
          null !== $callbacks$$18$$ && null != $callbacks$$18$$.error && $callbacks$$18$$.error.call($callbackObjects$$6$$.error, "Invalid axis value");
        }
      }
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_resetSortOrder$$($callbacks$$19$$, $callbackObjects$$7$$) {
    null != this.$origData$ && (this.data = this.$origData$);
    null != this.$origColumns$ && (this.columns = this.$origColumns$);
    null != $callbacks$$19$$ && null != $callbacks$$19$$.success && $callbacks$$19$$.success.call($callbackObjects$$7$$.success);
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$ArrayDataGridDataSource$$$getCapability$($feature$$11$$) {
    return "sort" === $feature$$11$$ ? "column" : "move" === $feature$$11$$ ? "row" : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_naturalSort$$($direction$$8$$, $key$$56$$) {
    if ("ascending" === $direction$$8$$) {
      return function($a$$100$$, $b$$65$$) {
        var $as$$, $bs$$;
        void 0 != $key$$56$$ && ($a$$100$$ instanceof Array ? ($a$$100$$ = $a$$100$$[parseInt($key$$56$$, 10)], $b$$65$$ = $b$$65$$[parseInt($key$$56$$, 10)]) : ($a$$100$$ = $a$$100$$[$key$$56$$], $b$$65$$ = $b$$65$$[$key$$56$$]));
        $as$$ = isNaN($a$$100$$);
        $bs$$ = isNaN($b$$65$$);
        $a$$100$$ instanceof Date && ($a$$100$$ = $a$$100$$.toISOString(), $as$$ = !0);
        $b$$65$$ instanceof Date && ($b$$65$$ = $b$$65$$.toISOString(), $bs$$ = !0);
        return $as$$ && $bs$$ ? $a$$100$$ < $b$$65$$ ? -1 : $a$$100$$ === $b$$65$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$100$$ - $b$$65$$;
      };
    }
    if ("descending" === $direction$$8$$) {
      return function($a$$101$$, $b$$66$$) {
        var $as$$1$$, $bs$$1$$;
        void 0 != $key$$56$$ && ($a$$101$$ instanceof Array ? ($a$$101$$ = $a$$101$$[parseInt($key$$56$$, 10)], $b$$66$$ = $b$$66$$[parseInt($key$$56$$, 10)]) : ($a$$101$$ = $a$$101$$[$key$$56$$], $b$$66$$ = $b$$66$$[$key$$56$$]));
        $as$$1$$ = isNaN($a$$101$$);
        $bs$$1$$ = isNaN($b$$66$$);
        $a$$101$$ instanceof Date && ($a$$101$$ = $a$$101$$.toISOString(), $as$$1$$ = !0);
        $b$$66$$ instanceof Date && ($b$$66$$ = $b$$66$$.toISOString(), $bs$$1$$ = !0);
        return $as$$1$$ && $bs$$1$$ ? $a$$101$$ > $b$$66$$ ? -1 : $a$$101$$ === $b$$66$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$66$$ - $a$$101$$;
      };
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$11$$$$ArrayDataGridDataSource$$$move$($moveKey$$, $atKey$$) {
    var $event$$116_moveKeyIndex$$, $moveData$$, $atKeyIndex$$;
    $event$$116_moveKeyIndex$$ = this.$_getRowIndexByKey$($moveKey$$);
    $moveData$$ = this.data.splice($event$$116_moveKeyIndex$$, 1)[0];
    this.data instanceof Array && ($event$$116_moveKeyIndex$$ = this.$_getModelEvent$("delete", $moveKey$$, null, $event$$116_moveKeyIndex$$, -1, !0), this.handleEvent("change", $event$$116_moveKeyIndex$$));
    null === $atKey$$ ? this.data.push($moveData$$) : ($atKeyIndex$$ = this.$_getRowIndexByKey$($atKey$$), this.data.splice($atKeyIndex$$, 0, $moveData$$));
    this.data instanceof Array && ($event$$116_moveKeyIndex$$ = this.$_getModelEvent$("insert", $moveKey$$, null, $atKeyIndex$$, -1), this.handleEvent("change", $event$$116_moveKeyIndex$$));
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$11$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getDataArray$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getDataArray$$() {
    return "function" === typeof this.data ? this.data() : this.data;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getRowIndexByKey$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getRowIndexByKey$$($key$$57$$) {
    var $i$$168$$, $data$$87$$ = this.$getDataArray$();
    for ($i$$168$$ = 0;$i$$168$$ < $data$$87$$.length;$i$$168$$++) {
      if ($data$$87$$[$i$$168$$].ojKey === $key$$57$$) {
        return $i$$168$$;
      }
    }
    return-1;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getRowKeyByIndex$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getRowKeyByIndex$$($index$$112$$) {
    var $data$$88$$ = this.$getDataArray$();
    return $data$$88$$[$index$$112$$] ? $data$$88$$[$index$$112$$].ojKey : null;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getModelEvent$$($operation$$3$$, $rowKey$$1$$, $columnKey$$1$$, $rowIndex$$1$$, $columnIndex$$1$$, $silent$$26$$) {
    var $event$$117$$ = {source:this};
    $event$$117$$.operation = $operation$$3$$;
    $event$$117$$.keys = {row:$rowKey$$1$$, column:$columnKey$$1$$};
    $event$$117$$.indexes = {row:$rowIndex$$1$$, column:$columnIndex$$1$$};
    $event$$117$$.silent = $silent$$26$$;
    return $event$$117$$;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_subscribe$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_subscribe$$($changes$$4$$) {
    var $i$$169$$, $move_rowData_rowKey$$2$$, $change_event$$118_rowIndex$$2$$, $added$$1$$ = !1;
    $move_rowData_rowKey$$2$$ = !1;
    var $keys$$10$$ = [], $indexes$$2$$ = [];
    for ($i$$169$$ = 0;$i$$169$$ < $changes$$4$$.length;$i$$169$$++) {
      $change_event$$118_rowIndex$$2$$ = $changes$$4$$[$i$$169$$];
      if (void 0 !== $change_event$$118_rowIndex$$2$$.moved) {
        $move_rowData_rowKey$$2$$ = !0;
        $change_event$$118_rowIndex$$2$$ = this.$_getModelEvent$("refresh", null, null);
        this.handleEvent("change", $change_event$$118_rowIndex$$2$$);
        break;
      }
      "added" === $change_event$$118_rowIndex$$2$$.status && ($added$$1$$ = !0);
    }
    if (!$move_rowData_rowKey$$2$$) {
      for ($i$$169$$ = 0;$i$$169$$ < $changes$$4$$.length;$i$$169$$++) {
        $change_event$$118_rowIndex$$2$$ = $changes$$4$$[$i$$169$$], "deleted" === $change_event$$118_rowIndex$$2$$.status && ($move_rowData_rowKey$$2$$ = $change_event$$118_rowIndex$$2$$.value, $change_event$$118_rowIndex$$2$$ = $change_event$$118_rowIndex$$2$$.index, $move_rowData_rowKey$$2$$ = $move_rowData_rowKey$$2$$.ojKey, $keys$$10$$.push({row:$move_rowData_rowKey$$2$$, column:-1}), $indexes$$2$$.push({row:$change_event$$118_rowIndex$$2$$, column:-1}));
      }
      0 < $keys$$10$$.length && ($change_event$$118_rowIndex$$2$$ = {source:this, operation:"delete", keys:$keys$$10$$, indexes:$indexes$$2$$, silent:$added$$1$$}, this.handleEvent("change", $change_event$$118_rowIndex$$2$$));
      for ($i$$169$$ = 0;$i$$169$$ < $changes$$4$$.length;$i$$169$$++) {
        $change_event$$118_rowIndex$$2$$ = $changes$$4$$[$i$$169$$], "added" === $change_event$$118_rowIndex$$2$$.status && ($move_rowData_rowKey$$2$$ = $change_event$$118_rowIndex$$2$$.value, $change_event$$118_rowIndex$$2$$ = $change_event$$118_rowIndex$$2$$.index, null == $move_rowData_rowKey$$2$$.ojKey && ($move_rowData_rowKey$$2$$.ojKey = this.$lastKey$.toString(), this.$lastKey$++), $move_rowData_rowKey$$2$$ = $move_rowData_rowKey$$2$$.ojKey, $change_event$$118_rowIndex$$2$$ = this.$_getModelEvent$("insert", 
        $move_rowData_rowKey$$2$$, null, $change_event$$118_rowIndex$$2$$, -1), this.handleEvent("change", $change_event$$118_rowIndex$$2$$));
      }
    }
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_size$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_size$$() {
    return this.$getDataArray$().length;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getRowHeaderKey$$() {
    return this.$rowHeaderKey$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.getData = function $$oj$$11$$$$ArrayDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$11$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$11$$.$DataGridResources$ = function $$oj$$11$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
    this.$rtlMode$ = $rtlMode$$;
    this.$translationFunction$ = $translationFunction$$;
    this.$styles$ = {};
    this.$styles$.datagrid = "oj-datagrid";
    this.$styles$.cell = "oj-datagrid-cell";
    this.$styles$.cellcontent = "oj-datagrid-cell-content";
    this.$styles$.celltext = "oj-datagrid-cell-text";
    this.$styles$.banded = "oj-datagrid-banded";
    this.$styles$.row = "oj-datagrid-row";
    this.$styles$.databody = "oj-datagrid-databody";
    this.$styles$.topcorner = "oj-datagrid-top-corner";
    this.$styles$.bottomcorner = "oj-datagrid-bottom-corner";
    this.$styles$.rowheaderspacer = "oj-datagrid-row-header-spacer";
    this.$styles$.colheaderspacer = "oj-datagrid-column-header-spacer";
    this.$styles$.status = "oj-datagrid-status";
    this.$styles$.emptytext = "oj-datagrid-empty-text";
    this.$styles$.header = "oj-datagrid-header";
    this.$styles$.groupingcontainer = "oj-datagrid-header-grouping";
    this.$styles$.headercell = "oj-datagrid-header-cell";
    this.$styles$.headercelltext = "oj-datagrid-header-cell-text";
    this.$styles$.headercellcontent = "oj-datagrid-header-cell-content";
    this.$styles$.rowheader = "oj-datagrid-row-header";
    this.$styles$.colheader = "oj-datagrid-column-header";
    this.$styles$.colheadercell = "oj-datagrid-column-header-cell";
    this.$styles$.rowheadercell = "oj-datagrid-row-header-cell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-touch";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.focus = "oj-focus";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-selected";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.enabled = "oj-enabled";
    this.$styles$["default"] = "oj-default";
    this.$styles$.sortcontainer = "oj-datagrid-sort-icon-container";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-component-icon";
    this.$styles$.clickableicon = "oj-clickable-icon-nocontext";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.selectaffordancetop = "oj-datagrid-touch-selection-affordance-top";
    this.$styles$.selectaffordancebottom = "oj-datagrid-touch-selection-affordance-bottom";
    this.$styles$.toucharea = "oj-datagrid-touch-area";
    this.$styles$.draggable = "oj-draggable";
    this.$styles$.drag = "oj-drag";
    this.$styles$.drop = "oj-drop";
    this.$styles$.activedrop = "oj-active-drop";
    this.$styles$.validdrop = "oj-valid-drop";
    this.$styles$.invaliddrop = "oj-invalid-drop";
    this.$commands$ = {};
    this.$commands$.sortCol = "oj-datagrid-sortCol";
    this.$commands$.sortColAsc = "oj-datagrid-sortColAsc";
    this.$commands$.sortColDsc = "oj-datagrid-sortColDsc";
    this.$commands$.sortRow = "oj-datagrid-sortRow";
    this.$commands$.sortRowAsc = "oj-datagrid-sortRowAsc";
    this.$commands$.sortRowDsc = "oj-datagrid-sortRowDsc";
    this.$commands$.resize = "oj-datagrid-resize";
    this.$commands$.resizeWidth = "oj-datagrid-resizeWidth";
    this.$commands$.resizeHeight = "oj-datagrid-resizeHeight";
    this.$commands$.cut = "oj-datagrid-cut";
    this.$commands$.paste = "oj-datagrid-paste";
    this.$commands$.discontiguousSelection = "oj-datagrid-discontiguousSelection";
    this.attributes = {};
    this.attributes.key = "data-oj-key";
    this.attributes.resizable = "data-oj-resizable";
    this.attributes.sortable = "data-oj-sortable";
    this.attributes.sortDir = "data-oj-sortdir";
    this.attributes.expander = "data-oj-expander";
    this.attributes.expanderIndex = "data-oj-expander-index";
    this.attributes.container = $oj$$11$$.Components.$_OJ_CONTAINER_ATTR$;
    this.attributes.extent = "data-oj-extent";
    this.attributes.start = "data-oj-start";
    this.attributes.depth = "data-oj-depth";
    this.attributes.level = "data-oj-level";
  };
  $goog$exportPath_$$("DataGridResources", $oj$$11$$.$DataGridResources$, $oj$$11$$);
  $oj$$11$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$11$$$$DataGridResources$$$$isRTLMode$$() {
    return "rtl" === this.$rtlMode$ ? !0 : !1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$11$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$11$$$$DataGridResources$$$$getTranslatedText$$($key$$58$$, $args$$17$$) {
    return this.$translationFunction$($key$$58$$, $args$$17$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$11$$$$DataGridResources$$$$getMappedStyle$$($key$$59$$) {
    return null != $key$$59$$ ? this.$styles$[$key$$59$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$11$$$$DataGridResources$$$$getMappedCommand$$($key$$60$$) {
    return null != $key$$60$$ ? this.$commands$[$key$$60$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$11$$$$DataGridResources$$$$getMappedAttribute$$($key$$61$$) {
    return null != $key$$61$$ ? this.attributes[$key$$61$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $oj$$11$$.$__registerWidget$("oj.ojDataGrid", $$$$11$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPosition:null, selectionMode:null, dnd:{reorder:{row:"disable"}}, scrollPolicy:"auto", selection:[], header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null}, column:{className:null, renderer:null, resizable:{width:"disable", 
  height:"disable"}, sortable:"auto", style:null}}, cell:{className:null, renderer:null, style:null}, resize:null, sort:null, optionChange:null}, _ComponentCreate:function() {
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.grid = new $DvtDataGrid$$1$$;
    this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_RENDER);
    $$$$11$$(this.root).addClass("oj-datagrid oj-component");
    this.$redrawSet$ = {data:"all", header:["className", "renderer", "style", "template"]};
  }, $_AfterCreate$:function() {
    var $self$$68$$ = this;
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$11$$.$DataGridResources$(this.$_GetReadingDirection$(), this.$_getTranslation$.bind($self$$68$$));
    this.$_setDataSource$();
    this.$_setSelection$();
    null != this.$datasource$ && (this.$_addContextMenu$(), this.grid.SetDataSource(this.$datasource$));
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.SetCreateContextCallback(this.$_modifyContext$.bind($self$$68$$));
    this.grid.SetRemoveCallback(this.$_remove$.bind($self$$68$$));
    this.grid.addListener("resize", function($details$$) {
      $self$$68$$._trigger("resize", $details$$.event, $details$$.ui);
    });
    this.grid.addListener("select", function($details$$1$$) {
      $self$$68$$.option("selection", $details$$1$$.ui.selection, {_context:{originalEvent:$details$$1$$.event, $internalSet$:!0}, changed:!0});
    });
    this.grid.addListener("sort", function($details$$2$$) {
      $self$$68$$._trigger("sort", $details$$2$$.event, $details$$2$$.ui);
    });
    this.grid.addListener("keydown", function($details$$3$$) {
      $self$$68$$._trigger("keydown", $details$$3$$.event, $details$$3$$.ui);
    });
    this.grid.addListener("active", function($details$$4$$) {
      $self$$68$$._trigger("active", $details$$4$$.event, $details$$4$$.ui);
    });
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, refresh:function() {
    this._super();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    !0 === this.$_useDefaultContextMenu$ && (this.options.contextMenu = null);
    this.$_setDataSource$();
    null != this.$datasource$ && (this.$datasource$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ && (this.$datasource$.$Destroy$(), this.$datasource$.Init()), this.$_addContextMenu$(), this.grid.SetDataSource(this.$datasource$));
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.getVisibility() != $DvtDataGrid$$1$$.VISIBILITY_STATE_RENDER && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_REFRESH);
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, _destroy:function() {
    null != this.$datasource$ && this.$datasource$.$Destroy$ && this.$datasource$.$Destroy$();
    this.grid.destroy();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
  }, _setOptions:function($options$$258$$, $flags$$16$$) {
    var $isRefresh$$;
    this.$datasource$ ? ($isRefresh$$ = this.$_shouldRefresh$($options$$258$$), this._super($options$$258$$, $flags$$16$$), $isRefresh$$ ? this.refresh() : this.grid.UpdateOptions($options$$258$$)) : (this._super($options$$258$$, $flags$$16$$), null != $options$$258$$.data && this.refresh());
  }, $_NotifyShown$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyHidden$:function() {
    this._super();
    this.grid.getVisibility() === $DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_HIDDEN);
  }, $_NotifyAttached$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyDetached$:function() {
    this._super();
    this.grid.getVisibility() === $DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_HIDDEN);
  }, $_shouldRefresh$:function($options$$259$$) {
    var $i$$170$$, $key$$62$$, $isRefresh$$1$$, $elm$$, $itm$$, $opt$$19$$;
    $isRefresh$$1$$ = !1;
    for ($key$$62$$ in $options$$259$$) {
      if ($key$$62$$ in this.$redrawSet$) {
        if ("data" === $key$$62$$) {
          $isRefresh$$1$$ = !0;
          break;
        } else {
          if ("header" == $key$$62$$) {
            for ($elm$$ in $options$$259$$.header) {
              if ("column" == $elm$$ || "row" == $elm$$ || "cell" == $elm$$) {
                for ($itm$$ in $options$$259$$.header[$elm$$]) {
                  for ($i$$170$$ = 0;$i$$170$$ < this.$redrawSet$.header.length;$i$$170$$++) {
                    if ($itm$$ == this.$redrawSet$.header[$i$$170$$]) {
                      for ($opt$$19$$ in this.options.header[$elm$$]) {
                        if ($opt$$19$$ == $itm$$ && $options$$259$$.header[$elm$$][$itm$$] != this.options.header[$elm$$][$itm$$]) {
                          $isRefresh$$1$$ = !0;
                          break;
                        }
                      }
                    }
                  }
                  if ($isRefresh$$1$$) {
                    break;
                  }
                }
              }
              if ($isRefresh$$1$$) {
                break;
              }
            }
          } else {
            for ($opt$$19$$ in this.options) {
              if ($opt$$19$$ == $key$$62$$ && !$oj$$11$$.$Object$.$compareValues$($options$$259$$[$key$$62$$], this.options[$opt$$19$$])) {
                $isRefresh$$1$$ = !0;
                break;
              }
            }
          }
        }
      }
    }
    return $isRefresh$$1$$;
  }, $_isResizeEnabled$:function($axis$$7$$, $direction$$9$$) {
    return this.options.header[$axis$$7$$] && this.options.header[$axis$$7$$].resizable ? "disable" !== this.options.header[$axis$$7$$].resizable[$direction$$9$$] : !1;
  }, $_isSortEnabled$:function($axis$$8$$) {
    return this.options.header[$axis$$8$$] ? "disable" !== this.options.header[$axis$$8$$].sortable : !1;
  }, $_addContextMenu$:function() {
    var $self$$69$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu$$ = null, $selectMenu$$ = null, $moveMenu$$ = null, $sortCapability$$, $menuItemsSetByGrid$$;
    $self$$69$$ = this;
    if (null == this.options.contextMenu) {
      if (null != this.$datasource$) {
        $menuContainer$$ = $$$$11$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$11$$(this.root).append($menuContainer$$);
        if (this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = this.$_buildContextMenuItem$("resize");
        }
        $sortCapability$$ = this.$datasource$.getCapability("sort");
        !this.$_isSortEnabled$("column") || "column" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = this.$_buildContextMenuItem$("sortCol"));
        !this.$_isSortEnabled$("row") || "row" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = null != $sortMenu$$ ? $sortMenu$$.add(this.$_buildContextMenuItem$("sortRow")) : this.$_buildContextMenuItem$("sortRow"));
        if ("enable" === this.options.dnd.reorder.row) {
          switch(this.$datasource$.getCapability("move")) {
            case "none":
              break;
            default:
              $moveMenu$$ = this.$_buildContextMenuListItem$("cut").add(this.$_buildContextMenuListItem$("paste"));
          }
        }
        this.$_isMultipleSelection$() && $oj$$11$$.$DomUtils$.$isTouchSupported$() && (this.$_discontiguousSelection$ = !1, $selectMenu$$ = this.$_buildContextMenuListItem$("discontiguousSelection"));
        if (null != $listItems_resizeMenu$$ || null != $sortMenu$$ || null != $moveMenu$$ || null != $selectMenu$$) {
          $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu$$).append($moveMenu$$).append($selectMenu$$), $menuContainer$$.ojMenu(), this.$_useDefaultContextMenu$ = !0, this._setOption("contextMenu", "#" + $menuContainer$$.attr("id")), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
        }
      }
    } else {
      null == this.$_menuItemsSetByGrid$ && (this.$_menuItemsSetByGrid$ = []), $menuContainer$$ = $$$$11$$(this.options.contextMenu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $menuItemsSetByGrid$$ = [], $listItems_resizeMenu$$.each(function() {
        var $anchor_command_newListItem$$;
        $anchor_command_newListItem$$ = $$$$11$$(this).children("a");
        if (0 === $anchor_command_newListItem$$.length || -1 != $self$$69$$.$_menuItemsSetByGrid$.indexOf($anchor_command_newListItem$$.get(0))) {
          $anchor_command_newListItem$$ = $$$$11$$(this).attr("data-oj-command").split("-"), $anchor_command_newListItem$$ = $self$$69$$.$_buildContextMenuItem$($anchor_command_newListItem$$[$anchor_command_newListItem$$.length - 1]), $$$$11$$(this).replaceWith($anchor_command_newListItem$$), $menuItemsSetByGrid$$.push($anchor_command_newListItem$$.children("a").get(0));
        }
      }), this.$_menuItemsSetByGrid$ = $menuItemsSetByGrid$$, $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
    }
  }, $_buildContextMenuItem$:function($command$$1$$) {
    if ("resize" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("resize").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("resizeWidth")).append(this.$_buildContextMenuListItem$("resizeHeight")));
    }
    if ("sortCol" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortCol").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortColAsc")).append(this.$_buildContextMenuListItem$("sortColDsc")));
    }
    if ("sortRow" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortRow").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortRowAsc")).append(this.$_buildContextMenuListItem$("sortRowDsc")));
    }
    if (-1 != Object.keys(this.$resources$.$commands$).indexOf($command$$1$$)) {
      return $$$$11$$(this.$_buildContextMenuListItem$($command$$1$$));
    }
  }, $_buildContextMenuListItem$:function($command$$2$$) {
    var $listItem$$ = $$$$11$$("\x3cli\x3e\x3c/li\x3e");
    $listItem$$.attr("data-oj-command", this.$_getMappedCommand$($command$$2$$));
    $listItem$$.append(this.$_buildContextMenuLabel$($command$$2$$));
    return $listItem$$;
  }, $_buildContextMenuLabel$:function($command$$3$$) {
    var $key$$63$$ = "label" + $command$$3$$.charAt(0).toUpperCase() + $command$$3$$.slice(1);
    "discontiguousSelection" === $command$$3$$ && ($key$$63$$ = "labelEnableNonContiguous");
    return $$$$11$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.$_getTranslation$($key$$63$$));
  }, $_getDataGridContextMenu$:function() {
    return $$$$11$$(this.options.contextMenu).get(0);
  }, $_getTranslation$:function($key$$64$$, $args$$18$$) {
    return this.$getTranslatedString$($key$$64$$, $args$$18$$);
  }, $_handleResizeDialog$:function() {
    var $value$$173$$ = $$$$11$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("close");
    this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$173$$);
    this.$contextMenuEvent$.target.focus();
  }, $_buildResizeDialog$:function($title$$9$$, $initialSize$$) {
    var $dialog$$, $dialogBody$$, $spinner$$, $dialogFooter$$, $dialogOKButton$$;
    $dialog$$ = $$$$11$$("#" + this.$rootId$ + "dialog");
    $spinner$$ = $$$$11$$("#" + this.$rootId$ + "spinner");
    0 === $dialog$$.length || 0 === $spinner$$.length ? ($dialog$$ = $$$$11$$("\x3cdiv\x3e"), $dialog$$.attr("id", this.$rootId$ + "dialog"), $dialog$$.attr("title", $title$$9$$), $dialogBody$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'), $dialogFooter$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'), $dialog$$.append($dialogBody$$).append($dialogFooter$$), $spinner$$ = $$$$11$$('\x3cinput id\x3d"' + this.$rootId$ + 'spinner"/\x3e'), $dialogOKButton$$ = $$$$11$$('\x3cbutton id\x3d"' + 
    this.$rootId$ + 'dialogsubmit"/\x3e'), $dialogBody$$.append($spinner$$), $dialogFooter$$.append($dialogOKButton$$), $$$$11$$(this.root).append($dialog$$), $dialogOKButton$$.ojButton({$component$:"ojButton", label:"OK"}), $dialogOKButton$$.on("click", this.$_handleResizeDialog$.bind(this)), $spinner$$.ojInputNumber({$component$:"ojInputNumber", max:1E3, min:20, step:1, value:$initialSize$$}), $dialog$$.ojDialog({initialVisibility:"show", position:{my:"center center", at:"center center", collision:"none", 
    of:$$$$11$$(this.root)}})) : ($spinner$$.ojInputNumber("option", "value", $initialSize$$), $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("open"));
  }, $_handleContextMenuSelect$:function($event$$120$$, $ui$$3$$) {
    var $initialSize$$1_key$$65_parent$$18$$;
    this.$menuItemFunction$ = $ui$$3$$.item.attr("data-oj-command");
    this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste") ? this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, null) : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight") ? 
    ($initialSize$$1_key$$65_parent$$18$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("cell")), 0 == $initialSize$$1_key$$65_parent$$18$$.length && ($initialSize$$1_key$$65_parent$$18$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("headercell"))), 0 < $initialSize$$1_key$$65_parent$$18$$.length && ($initialSize$$1_key$$65_parent$$18$$ = this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $initialSize$$1_key$$65_parent$$18$$.outerWidth() : 
    $initialSize$$1_key$$65_parent$$18$$.outerHeight(), this.$_buildResizeDialog$($ui$$3$$.item.text(), $initialSize$$1_key$$65_parent$$18$$))) : this.$menuItemFunction$ === this.$_getMappedCommand$("discontiguousSelection") && (this.$_discontiguousSelection$ = !this.$_discontiguousSelection$, this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, this.$_discontiguousSelection$), $initialSize$$1_key$$65_parent$$18$$ = this.$_discontiguousSelection$ ? "labelDisableNonContiguous" : 
    "labelEnableNonContiguous", $ui$$3$$.item.children().first().text(this.$_getTranslation$($initialSize$$1_key$$65_parent$$18$$)));
  }, $_NotifyContextMenuGesture$:function($menu$$4$$, $event$$121$$, $eventType$$33$$) {
    this.grid.handleContextMenuGesture($event$$121$$, $eventType$$33$$, this.$_contextMenuGestureCallback$.bind(this));
  }, $_contextMenuGestureCallback$:function($capabilities_returnVal$$1$$, $event$$122$$, $eventType$$34$$) {
    var $launcher$$7_openOptions$$2$$;
    null != $capabilities_returnVal$$1$$ && (this.$contextMenuEvent$ = $event$$122$$.originalEvent, $launcher$$7_openOptions$$2$$ = $capabilities_returnVal$$1$$.launcher, $capabilities_returnVal$$1$$ = $capabilities_returnVal$$1$$.capabilities, this.$_manageContextMenu$($capabilities_returnVal$$1$$), $launcher$$7_openOptions$$2$$ = "keyboard" === $eventType$$34$$ ? {position:{of:$launcher$$7_openOptions$$2$$}, launcher:$$$$11$$($launcher$$7_openOptions$$2$$)} : {launcher:$$$$11$$($launcher$$7_openOptions$$2$$)}, 
    this.$_OpenContextMenu$($event$$122$$, $eventType$$34$$, $launcher$$7_openOptions$$2$$));
  }, $_addContextMenuCapability$:function($command$$4$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$11$$(this.$_getDataGridContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").addClass("oj-disabled");
  }, $_removeContextMenuCapability$:function($command$$5$$) {
    $$$$11$$(this.$_getDataGridContextMenu$()).find("[data-oj-command\x3d" + $command$$5$$ + "]").removeClass("oj-disabled");
  }, $_manageContextMenu$:function($capabilities$$1$$) {
    var $property$$22$$, $command$$6$$;
    for ($property$$22$$ in $capabilities$$1$$) {
      $capabilities$$1$$.hasOwnProperty($property$$22$$) && ($command$$6$$ = this.$resources$.$getMappedCommand$($property$$22$$), "disable" === $capabilities$$1$$[$property$$22$$] ? this.$_addContextMenuCapability$($command$$6$$) : this.$_removeContextMenuCapability$($command$$6$$));
    }
  }, $_findCellIndex$:function($columnIndex$$2_element$$63$$) {
    var $row$$15$$;
    $row$$15$$ = $columnIndex$$2_element$$63$$.parent();
    $columnIndex$$2_element$$63$$ = $columnIndex$$2_element$$63$$.index();
    return{rowIndex:$row$$15$$.index() - 1, columnIndex:$columnIndex$$2_element$$63$$};
  }, $_findHeadersByCellIndex$:function($columnHeader_index$$113$$) {
    var $rowHeader$$;
    $rowHeader$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader_index$$113$$.rowIndex + 1);
    $columnHeader_index$$113$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader_index$$113$$.columnIndex);
    return{rowHeader:$rowHeader$$, columnHeader:$columnHeader_index$$113$$};
  }, $_getGrid$:function() {
    return $$$$11$$(this.root);
  }, $_getColumnHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:columnHeader");
  }, $_getRowHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:rowHeader");
  }, $_getDatabodyRows$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"));
  }, $_setDataSource$:function() {
    this.$datasource$ = null != this.options.data ? this.options.data : null;
  }, $_setSelection$:function() {
    var $selection$$ = this.options.selection;
    null != $selection$$ && this.grid.SetSelection($selection$$);
  }, $_modifyContext$:function($context$$48$$) {
    $context$$48$$.component = this;
  }, $_setAccessibleContext$:function($context$$49$$) {
    this.grid.SetAccessibleContext($context$$49$$);
  }, $_unregisterResizeListener$:function($element$$64$$) {
    $element$$64$$ && this.$_resizeHandler$ && $oj$$11$$.$DomUtils$.$removeResizeListener$($element$$64$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$65$$) {
    $element$$65$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$11$$.$DomUtils$.$addResizeListener$($element$$65$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$14$$, $height$$13$$) {
    0 < $width$$14$$ && 0 < $height$$13$$ && (this.$_possiblyRenderOrRefresh$(), this.grid.HandleResize($width$$14$$, $height$$13$$));
  }, getNodeBySubId:function($columnIndex$$3_level$$9_locator$$11$$) {
    var $rowIndex$$4_subId$$5$$, $header$$4$$, $index$$114$$, $axis$$9$$;
    if (null == $columnIndex$$3_level$$9_locator$$11$$) {
      return this.element ? this.element[0] : null;
    }
    $rowIndex$$4_subId$$5$$ = $columnIndex$$3_level$$9_locator$$11$$.subId;
    return "oj-datagrid-cell" === $rowIndex$$4_subId$$5$$ ? ($rowIndex$$4_subId$$5$$ = $columnIndex$$3_level$$9_locator$$11$$.rowIndex - this.grid.getStartRow(), $columnIndex$$3_level$$9_locator$$11$$ = $columnIndex$$3_level$$9_locator$$11$$.columnIndex - this.grid.getStartColumn(), this.$_getDatabodyRows$().eq($rowIndex$$4_subId$$5$$).children().eq($columnIndex$$3_level$$9_locator$$11$$).get(0)) : "oj-datagrid-sort-icon" === $rowIndex$$4_subId$$5$$ || "oj-datagrid-header" === $rowIndex$$4_subId$$5$$ ? 
    ($axis$$9$$ = $columnIndex$$3_level$$9_locator$$11$$.axis, $index$$114$$ = $columnIndex$$3_level$$9_locator$$11$$.index, $columnIndex$$3_level$$9_locator$$11$$ = null == $columnIndex$$3_level$$9_locator$$11$$.level ? 0 : $columnIndex$$3_level$$9_locator$$11$$.level, "column" === $axis$$9$$ ? $header$$4$$ = this.$_getHeaderByIndex$($index$$114$$, $columnIndex$$3_level$$9_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:columnHeader"), this.grid.getStartColumnHeader()) : "row" === $axis$$9$$ && 
    ($header$$4$$ = this.$_getHeaderByIndex$($index$$114$$, $columnIndex$$3_level$$9_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:rowHeader"), this.grid.getStartRowHeader())), null == $header$$4$$ ? null : "oj-datagrid-sort-icon" === $rowIndex$$4_subId$$5$$ ? $header$$4$$.children("." + this.$_getMappedStyle$("sortcontainer")).children().get(0) : $header$$4$$.get(0)) : null;
  }, getSubIdByNode:function($indexes$$3_node$$26_subId$$6$$) {
    var $cell_index$$115$$, $header$$5_level$$10$$, $axis$$10$$;
    $cell_index$$115$$ = $$$$11$$($indexes$$3_node$$26_subId$$6$$).closest("." + this.$_getMappedStyle$("cell"));
    if (0 < $cell_index$$115$$.length) {
      return $indexes$$3_node$$26_subId$$6$$ = this.$_findCellIndex$($cell_index$$115$$), {subId:"oj-datagrid-cell", rowIndex:$indexes$$3_node$$26_subId$$6$$.rowIndex + this.grid.getStartRow(), columnIndex:$indexes$$3_node$$26_subId$$6$$.columnIndex + this.grid.getStartColumn()};
    }
    $header$$5_level$$10$$ = $$$$11$$($indexes$$3_node$$26_subId$$6$$).closest("." + this.$_getMappedStyle$("headercell"));
    return 0 < $header$$5_level$$10$$.length ? ($axis$$10$$ = $header$$5_level$$10$$.hasClass(this.$_getMappedStyle$("colheadercell")) ? "column" : "row", $cell_index$$115$$ = this.$_getHeaderIndex$($header$$5_level$$10$$), $header$$5_level$$10$$ = this.$_getHeaderLevel$($header$$5_level$$10$$), $indexes$$3_node$$26_subId$$6$$ = $$$$11$$($indexes$$3_node$$26_subId$$6$$).hasClass(this.$_getMappedStyle$("sortascending")) || $$$$11$$($indexes$$3_node$$26_subId$$6$$).hasClass(this.$_getMappedStyle$("sortdescending")) ? 
    "oj-datagrid-sort-icon" : "oj-datagrid-header", {subId:$indexes$$3_node$$26_subId$$6$$, index:$cell_index$$115$$, axis:$axis$$10$$, level:$header$$5_level$$10$$}) : null;
  }, $_getMappedStyle$:function($key$$66$$) {
    return this.$resources$.$getMappedStyle$($key$$66$$);
  }, $_getMappedAttribute$:function($key$$67$$) {
    return this.$resources$.$getMappedAttribute$($key$$67$$);
  }, $_getMappedCommand$:function($key$$68$$) {
    return this.$resources$.$getMappedCommand$($key$$68$$);
  }, $_isDataGridSizingAvailable$:function() {
    return null != this.root.offsetParent ? !0 : !1;
  }, $_possiblyRenderOrRefresh$:function() {
    var $visibility$$ = this.grid.getVisibility();
    this.$_isDataGridSizingAvailable$() ? ($visibility$$ === $DvtDataGrid$$1$$.VISIBILITY_STATE_RENDER ? this.grid.render(this.root) : $visibility$$ === $DvtDataGrid$$1$$.VISIBILITY_STATE_REFRESH && this.grid.refresh(this.root), this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE)) : $visibility$$ === $DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_HIDDEN);
  }, $_getHeaderByIndex$:function($index$$116_relativeIndex$$, $level$$11$$, $grouping_headerContainer$$, $start$$28$$) {
    if (0 > $level$$11$$) {
      return null;
    }
    if ($grouping_headerContainer$$.children().first().children().last().hasClass(this.$_getMappedStyle$("headercell"))) {
      return $grouping_headerContainer$$.children().first().children("." + this.$_getMappedStyle$("headercell")).eq($index$$116_relativeIndex$$ - $start$$28$$);
    }
    $grouping_headerContainer$$ = this.$_getGroupingContainer$($index$$116_relativeIndex$$, $level$$11$$, 0, $grouping_headerContainer$$.children().first().children());
    return null == $grouping_headerContainer$$ ? null : $level$$11$$ != parseInt($grouping_headerContainer$$.attr(this.$_getMappedAttribute$("level")), 10) ? ($start$$28$$ = parseInt($grouping_headerContainer$$.attr(this.$_getMappedAttribute$("start")), 10), $index$$116_relativeIndex$$ = $index$$116_relativeIndex$$ - $start$$28$$ + 1, $grouping_headerContainer$$.children().eq($index$$116_relativeIndex$$)) : $grouping_headerContainer$$.children().eq(0);
  }, $_getGroupingContainer$:function($index$$117$$, $level$$12$$, $currentLevel$$1$$, $headers$$2$$) {
    var $headerIndex$$1$$, $headerExtent$$, $i$$171$$;
    if (null == $headers$$2$$.eq(1) || $headers$$2$$.eq(1).hasClass(this.$_getMappedStyle$("headercell"))) {
      return $level$$12$$ === $currentLevel$$1$$ ? $headers$$2$$.eq(0).parent() : null;
    }
    for ($i$$171$$ = $headers$$2$$.parent().parent().hasClass(this.$_getMappedStyle$("colheader")) ? 0 : 1;$i$$171$$ < $headers$$2$$.length;$i$$171$$++) {
      if ($headerIndex$$1$$ = parseInt($headers$$2$$.eq($i$$171$$).attr(this.$_getMappedAttribute$("start")), 10), $headerExtent$$ = parseInt($headers$$2$$.eq($i$$171$$).attr(this.$_getMappedAttribute$("extent")), 10), $index$$117$$ >= $headerIndex$$1$$ && $index$$117$$ < $headerIndex$$1$$ + $headerExtent$$) {
        return $level$$12$$ === $currentLevel$$1$$ ? $headers$$2$$.eq($i$$171$$) : this.$_getGroupingContainer$($index$$117$$, $level$$12$$, $currentLevel$$1$$ + 1, $headers$$2$$.eq($i$$171$$).children());
      }
    }
    return null;
  }, $_getHeaderIndex$:function($header$$6$$) {
    var $index$$118$$;
    if ($header$$6$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer"))) {
      $index$$118$$ = parseInt($header$$6$$.parent().attr(this.$_getMappedAttribute$("start")), 10);
      if ($header$$6$$.get(0) === $header$$6$$.parent().children(":first").get(0)) {
        return $index$$118$$;
      }
      $index$$118$$--;
    } else {
      $index$$118$$ = $header$$6$$.hasClass(this.$_getMappedStyle$("rowheadercell")) ? this.grid.getStartRowHeader() - 1 : this.grid.getStartColumnHeader();
    }
    return $index$$118$$ += $header$$6$$.index();
  }, $_getHeaderLevel$:function($header$$7$$) {
    var $level$$13$$;
    return $header$$7$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer")) ? ($level$$13$$ = parseInt($header$$7$$.parent().attr(this.$_getMappedAttribute$("level")), 10), $header$$7$$.get(0) === $header$$7$$.parent().children(":first").get(0) ? $level$$13$$ : $level$$13$$ + 1) : 0;
  }, $_isMultipleSelection$:function() {
    return null == this.options.selectionMode || "multiple" !== this.options.selectionMode.row && "multiple" !== this.options.selectionMode.cell ? !1 : !0;
  }, $_remove$:function($element$$66$$) {
    $$$$11$$($element$$66$$).remove();
  }});
  $oj$$11$$.$ArrayCellSet$ = function $$oj$$11$$$$ArrayCellSet$$($startRow$$, $endRow$$, $startColumn$$, $endColumn$$, $callback$$86$$) {
    $oj$$11$$.$Assert$.$assertNumber$($startRow$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endRow$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($startColumn$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endColumn$$, null);
    this.$m_startRow$ = $startRow$$;
    this.$m_endRow$ = $endRow$$;
    this.$m_startColumn$ = $startColumn$$;
    this.$m_endColumn$ = $endColumn$$;
    this.$m_callback$ = $callback$$86$$;
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$11$$.$ArrayCellSet$, $oj$$11$$);
  $oj$$11$$.$ArrayCellSet$.prototype.getData = function $$oj$$11$$$$ArrayCellSet$$$getData$($indexes$$4$$) {
    return this.$m_callback$.$_getCellData$($indexes$$4$$.row, $indexes$$4$$.column);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$11$$.$ArrayCellSet$.prototype.getData});
  $oj$$11$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$11$$$$ArrayCellSet$$$getMetadata$($indexes$$5$$) {
    return this.$m_callback$.$_getCellMetadata$($indexes$$5$$.row, $indexes$$5$$.column);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$11$$.$ArrayCellSet$.prototype.$getStart$ = function $$oj$$11$$$$ArrayCellSet$$$$getStart$$($axis$$11$$) {
    return "row" == $axis$$11$$ ? this.$m_startRow$ : "column" == $axis$$11$$ ? this.$m_startColumn$ : -1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {$getStart$:$oj$$11$$.$ArrayCellSet$.prototype.$getStart$});
  $oj$$11$$.$ArrayCellSet$.prototype.$getCount$ = function $$oj$$11$$$$ArrayCellSet$$$$getCount$$($axis$$12$$) {
    return "row" === $axis$$12$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$12$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayCellSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayCellSet$.prototype.getStartRow = function $$oj$$11$$$$ArrayCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {getStartRow:$oj$$11$$.$ArrayCellSet$.prototype.getStartRow});
  $oj$$11$$.$ArrayCellSet$.prototype.getStartColumn = function $$oj$$11$$$$ArrayCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {getStartColumn:$oj$$11$$.$ArrayCellSet$.prototype.getStartColumn});
  $oj$$11$$.$ArrayHeaderSet$ = function $$oj$$11$$$$ArrayHeaderSet$$($start$$29$$, $end$$9$$, $axis$$13$$, $callback$$87$$) {
    $oj$$11$$.$Assert$.$assertNumber$($start$$29$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($end$$9$$, null);
    this.$m_start$ = $start$$29$$;
    this.$m_end$ = $end$$9$$;
    this.$m_axis$ = $axis$$13$$;
    this.$m_callback$ = $callback$$87$$;
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$11$$.$ArrayHeaderSet$, $oj$$11$$);
  $oj$$11$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$11$$$$ArrayHeaderSet$$$getData$($index$$119$$, $level$$14$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$11$$.$Assert$.assert($index$$119$$ <= this.$m_end$ && $index$$119$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$14$$ || 0 == $level$$14$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderData$(this.$m_axis$, $index$$119$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$11$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$11$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$11$$$$ArrayHeaderSet$$$getMetadata$($index$$120$$, $level$$15$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$11$$.$Assert$.assert($index$$120$$ <= this.$m_end$ && $index$$120$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$15$$ || 0 == $level$$15$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderMetadata$(this.$m_axis$, $index$$120$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getLevelCount$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getLevelCount$});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getExtent$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getExtent$$($index$$121$$, $level$$16$$) {
    $oj$$11$$.$Assert$.assert($index$$121$$ <= this.$m_end$ && $index$$121$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$16$$ || 0 == $level$$16$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getExtent", {$getExtent$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getExtent$});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getDepth$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getDepth$$($index$$122$$, $level$$17$$) {
    $oj$$11$$.$Assert$.assert($index$$122$$ <= this.$m_end$ && $index$$122$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$17$$ || 0 == $level$$17$$, "level out of bounds");
    return 1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getDepth", {$getDepth$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getDepth$});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getCount$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getCount$$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getStart$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {$getStart$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getStart$});
  $oj$$11$$.$FlattenedTreeCellSet$ = function $$oj$$11$$$$FlattenedTreeCellSet$$($startRow$$1$$, $endRow$$1$$, $startColumn$$1$$, $endColumn$$1$$, $nodeSet$$2$$, $columns$$1$$) {
    $oj$$11$$.$Assert$.$assertNumber$($startRow$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endRow$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($startColumn$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endColumn$$1$$, null);
    $oj$$11$$.$Assert$.$assertArrayOrNull$($columns$$1$$);
    this.$m_startRow$ = $startRow$$1$$;
    this.$m_endRow$ = $endRow$$1$$;
    this.$m_startColumn$ = $startColumn$$1$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_nodeSet$ = $nodeSet$$2$$;
    this.$m_columns$ = $columns$$1$$;
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$11$$.$FlattenedTreeCellSet$, $oj$$11$$);
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$11$$$$FlattenedTreeCellSet$$$getData$($indexes$$6_row$$16_rowData$$1$$) {
    var $column$$6_columnKey$$2_relIndex$$;
    $column$$6_columnKey$$2_relIndex$$ = this.$_getRelIndexes$($indexes$$6_row$$16_rowData$$1$$);
    if (null == $column$$6_columnKey$$2_relIndex$$) {
      return null;
    }
    $indexes$$6_row$$16_rowData$$1$$ = $column$$6_columnKey$$2_relIndex$$[0];
    $column$$6_columnKey$$2_relIndex$$ = $column$$6_columnKey$$2_relIndex$$[1];
    $oj$$11$$.$Assert$.assert($indexes$$6_row$$16_rowData$$1$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$6_columnKey$$2_relIndex$$ < this.$m_columns$.length);
    $column$$6_columnKey$$2_relIndex$$ = this.$m_columns$[$column$$6_columnKey$$2_relIndex$$];
    $indexes$$6_row$$16_rowData$$1$$ = this.$m_nodeSet$.getData($indexes$$6_row$$16_rowData$$1$$);
    return null != $indexes$$6_row$$16_rowData$$1$$ ? $indexes$$6_row$$16_rowData$$1$$.get ? $indexes$$6_row$$16_rowData$$1$$.get($column$$6_columnKey$$2_relIndex$$) : $indexes$$6_row$$16_rowData$$1$$[$column$$6_columnKey$$2_relIndex$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$11$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$11$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$7_metadata$$2_row$$17$$) {
    var $column$$7_columnKey$$3_relIndex$$1$$;
    $column$$7_columnKey$$3_relIndex$$1$$ = this.$_getRelIndexes$($indexes$$7_metadata$$2_row$$17$$);
    if (null == $column$$7_columnKey$$3_relIndex$$1$$) {
      return null;
    }
    $indexes$$7_metadata$$2_row$$17$$ = $column$$7_columnKey$$3_relIndex$$1$$[0];
    $column$$7_columnKey$$3_relIndex$$1$$ = $column$$7_columnKey$$3_relIndex$$1$$[1];
    $oj$$11$$.$Assert$.assert($indexes$$7_metadata$$2_row$$17$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$7_columnKey$$3_relIndex$$1$$ < this.$m_columns$.length);
    $column$$7_columnKey$$3_relIndex$$1$$ = this.$m_columns$[$column$$7_columnKey$$3_relIndex$$1$$];
    $indexes$$7_metadata$$2_row$$17$$ = this.$m_nodeSet$.getMetadata($indexes$$7_metadata$$2_row$$17$$);
    $indexes$$7_metadata$$2_row$$17$$.keys = {row:$indexes$$7_metadata$$2_row$$17$$.key, column:$column$$7_columnKey$$3_relIndex$$1$$};
    return $indexes$$7_metadata$$2_row$$17$$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$8_indexes$$8$$) {
    var $row$$18$$;
    $oj$$11$$.$Assert$.$assertObject$($column$$8_indexes$$8$$);
    if (null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null;
    }
    $row$$18$$ = $column$$8_indexes$$8$$.row - this.$m_startRow$ + this.$m_nodeSet$.$getStart$();
    $column$$8_indexes$$8$$ = $column$$8_indexes$$8$$.column;
    $oj$$11$$.$Assert$.$assertNumber$($row$$18$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($column$$8_indexes$$8$$, null);
    $oj$$11$$.$Assert$.assert(0 <= $row$$18$$ && 0 <= $column$$8_indexes$$8$$);
    return[$row$$18$$, $column$$8_indexes$$8$$];
  };
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$getStart$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$getStart$$($axis$$14$$) {
    return "row" === $axis$$14$$ ? this.$m_startRow$ : "column" === $axis$$14$$ ? this.$m_startColumn$ : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {$getStart$:$oj$$11$$.$FlattenedTreeCellSet$.prototype.$getStart$});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$getCount$$($axis$$15$$) {
    return "row" === $axis$$15$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.$getCount$()) : "column" === $axis$$15$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeCellSet$.prototype.$getCount$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$($treeDataSource$$, $options$$260$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $treeDataSource$$, $options$$260$$);
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$11$$.$FlattenedTreeDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$FlattenedTreeDataGridDataSource$, $oj$$11$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.Init = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$Init$() {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.Init.call(this);
    this.$m_columns$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader");
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.Init});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$getCountPrecision$$($axis$$16$$) {
    return "row" === $axis$$16$$ ? "estimate" : "actual";
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$getCount$$($axis$$17$$) {
    return "row" === $axis$$17$$ ? -1 : "column" === $axis$$17$$ ? this.$m_columns$.length : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$fetchHeaders$$($headerRange$$2$$, $callbacks$$21$$, $callbackObjects$$9$$) {
    var $axis$$18_columnCount$$, $headerSet$$1$$;
    $axis$$18_columnCount$$ = $headerRange$$2$$.axis;
    if ("column" === $axis$$18_columnCount$$) {
      $axis$$18_columnCount$$ = $headerRange$$2$$.start + $headerRange$$2$$.count, $axis$$18_columnCount$$ > this.$getCount$("column") && ($axis$$18_columnCount$$ = this.$getCount$("column") - $headerRange$$2$$.start), $headerSet$$1$$ = new $oj$$11$$.$FlattenedTreeHeaderSet$($headerRange$$2$$.start, $axis$$18_columnCount$$, this.$m_columns$);
    } else {
      if ("row" === $axis$$18_columnCount$$) {
        if (null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$2$$, callbacks:$callbacks$$21$$, callbackObjects:$callbackObjects$$9$$};
          return;
        }
        $headerSet$$1$$ = new $oj$$11$$.$ArrayHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start, $axis$$18_columnCount$$, null);
      }
    }
    null != $headerSet$$1$$ && null != $callbacks$$21$$ && null != $callbacks$$21$$.success && (null == $callbackObjects$$9$$ && ($callbackObjects$$9$$ = {}), $callbacks$$21$$.success.call($callbackObjects$$9$$.success, $headerSet$$1$$, $headerRange$$2$$));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$fetchCells$$($cellRanges$$1$$, $callbacks$$22$$, $callbackObjects$$10$$) {
    var $i$$172$$, $cellRange$$2$$, $rowStart$$1$$, $rowCount$$2$$;
    for ($i$$172$$ = 0;$i$$172$$ < $cellRanges$$1$$.length;$i$$172$$++) {
      if ($cellRange$$2$$ = $cellRanges$$1$$[$i$$172$$], "row" == $cellRange$$2$$.axis) {
        $rowStart$$1$$ = $cellRange$$2$$.start;
        $rowCount$$2$$ = $cellRange$$2$$.count;
        break;
      }
    }
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$1$$, count:$rowCount$$2$$}, {success:function($nodeSet$$3$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$3$$, $cellRanges$$1$$, $callbacks$$22$$, $callbackObjects$$10$$, 0);
    }.bind(this), error:function($status$$15$$) {
      this.$_handleFetchRowsError$($status$$15$$, {start:$rowStart$$1$$, count:$rowCount$$2$$}, $callbacks$$22$$, $callbackObjects$$10$$);
    }.bind(this)});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$keys$($indexes$$9$$) {
    var $rowIndex$$5$$, $colIndex$$;
    $rowIndex$$5$$ = $indexes$$9$$.row;
    $colIndex$$ = $indexes$$9$$.column;
    return new Promise(function($resolve$$38$$) {
      $rowIndex$$5$$ > $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex$$ > this.$m_columns$.length ? $resolve$$38$$(null) : $resolve$$38$$({row:$oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$5$$), column:this.$m_columns$[$colIndex$$]});
    }.bind(this));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$indexes$$($keys$$11$$) {
    var $rowIndex$$6$$, $colIndex$$1$$, $rowKey$$4$$, $colKey$$, $i$$173$$;
    $rowKey$$4$$ = $keys$$11$$.row;
    $colKey$$ = $keys$$11$$.column;
    return new Promise(function($resolve$$39$$) {
      $rowIndex$$6$$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowKey$$4$$);
      for ($i$$173$$ = 0;$i$$173$$ < this.$m_columns$.length;$i$$173$$++) {
        if (this.$m_columns$[$i$$173$$] === $colKey$$) {
          $colIndex$$1$$ = $i$$173$$;
          break;
        }
      }
      0 <= $rowIndex$$6$$ || 0 <= $colIndex$$1$$ ? $resolve$$39$$({row:$rowIndex$$6$$, column:$colIndex$$1$$}) : $resolve$$39$$(null);
    }.bind(this));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$10$$, $callbacks$$23$$, $callbackObjects$$11$$) {
    return $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).sort($criteria$$10$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$23$$, $callbackObjects$$11$$);
    }.bind(this), error:$callbacks$$23$$.error});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$24$$, $callbackObjects$$12$$) {
    this.refresh();
    $callbacks$$24$$.success && (null == $callbackObjects$$12$$ && ($callbackObjects$$12$$ = {}), $callbacks$$24$$.success.call($callbackObjects$$12$$.success));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.move = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$move$($rowToMove$$4$$, $referenceRow$$4$$, $position$$10$$, $callbacks$$25$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).move($rowToMove$$4$$, $referenceRow$$4$$, $position$$10$$, $callbacks$$25$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.move", {move:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.move});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$getCapability$($feature$$12$$) {
    return "default" === $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).getCapability($feature$$12$$) ? "column" : "none";
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$69$$, $metadata$$3$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$69$$, $metadata$$3$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$1_nodeSet$$4$$, $cellRanges$$2$$, $callbacks$$26$$, $callbackObjects$$13$$) {
    var $headerRange$$3_i$$174$$, $cellRange$$3$$, $rowStart$$2$$, $rowCount$$3$$, $columnStart$$, $columnCount$$1$$;
    for ($headerRange$$3_i$$174$$ = 0;$headerRange$$3_i$$174$$ < $cellRanges$$2$$.length;$headerRange$$3_i$$174$$++) {
      $cellRange$$3$$ = $cellRanges$$2$$[$headerRange$$3_i$$174$$], "row" == $cellRange$$3$$.axis ? ($rowStart$$2$$ = $cellRange$$3$$.start, $rowCount$$3$$ = $cellRange$$3$$.count) : "column" == $cellRange$$3$$.axis && ($columnStart$$ = $cellRange$$3$$.start, $columnCount$$1$$ = $cellRange$$3$$.count, $columnStart$$ + $columnCount$$1$$ > this.$getCount$("column") && ($columnCount$$1$$ = this.$getCount$("column") - $columnStart$$));
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$3_i$$174$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$3_i$$174$$.start == $rowStart$$2$$ && $headerRange$$3_i$$174$$.count == $rowCount$$3$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$1_nodeSet$$4$$, $headerRange$$3_i$$174$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$1_nodeSet$$4$$ = new $oj$$11$$.$FlattenedTreeCellSet$($rowStart$$2$$, $rowStart$$2$$ + $rowCount$$3$$, $columnStart$$, $columnStart$$ + $columnCount$$1$$, $cellSet$$1_nodeSet$$4$$, this.$m_columns$);
    $callbacks$$26$$.success && (null == $callbackObjects$$13$$ && ($callbackObjects$$13$$ = {}), $callbacks$$26$$.success.call($callbackObjects$$13$$.success, $cellSet$$1_nodeSet$$4$$, $cellRanges$$2$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$16$$, $headerCallbacks_range$$8$$, $callbacks$$27$$, $callbackObjects$$14$$) {
    var $headerCallbackObjects_headerRange$$4$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$4$$.start == $headerCallbacks_range$$8$$.start && $headerCallbackObjects_headerRange$$4$$.count == $headerCallbacks_range$$8$$.count && ($headerCallbacks_range$$8$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$8$$.error && (null == $headerCallbackObjects_headerRange$$4$$ && 
    ($headerCallbackObjects_headerRange$$4$$ = {}), $headerCallbacks_range$$8$$.error.call($headerCallbackObjects_headerRange$$4$$.error, $status$$16$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$27$$.error && (null == $callbackObjects$$14$$ && ($callbackObjects$$14$$ = {}), $callbacks$$27$$.success.call($callbackObjects$$14$$.error, $status$$16$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$2_nodeSet$$5$$, $headerRange$$5$$, $callbacks$$28$$, $callbackObjects$$15$$) {
    $headerSet$$2_nodeSet$$5$$ = new $oj$$11$$.$FlattenedTreeHeaderSet$($headerRange$$5$$.start, $headerRange$$5$$.start + $headerRange$$5$$.count, this.$m_columns$, $headerSet$$2_nodeSet$$5$$, this.$m_rowHeader$);
    $callbacks$$28$$.success && (null == $callbackObjects$$15$$ && ($callbackObjects$$15$$ = {}), $callbacks$$28$$.success.call($callbackObjects$$15$$.success, $headerSet$$2_nodeSet$$5$$, $headerRange$$5$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($event$$123_insertAtIndex$$, $cellSet$$2_insertAtRowKey$$, $nodeSet$$6$$) {
    var $headerSet$$3$$, $i$$175$$, $keys$$12$$, $indexes$$10$$;
    $headerSet$$3$$ = null;
    this.$m_rowHeader$ && ($headerSet$$3$$ = new $oj$$11$$.$FlattenedTreeHeaderSet$($event$$123_insertAtIndex$$, $event$$123_insertAtIndex$$ + $nodeSet$$6$$.$getCount$(), this.$m_columns$, $nodeSet$$6$$, this.$m_rowHeader$));
    $cellSet$$2_insertAtRowKey$$ = new $oj$$11$$.$FlattenedTreeCellSet$($event$$123_insertAtIndex$$, $event$$123_insertAtIndex$$ + $nodeSet$$6$$.$getCount$(), 0, this.$m_columns$.length, $nodeSet$$6$$, this.$m_columns$);
    $keys$$12$$ = [];
    $indexes$$10$$ = [];
    for ($i$$175$$ = 0;$i$$175$$ < $nodeSet$$6$$.$getCount$();$i$$175$$++) {
      $keys$$12$$.push({row:this.$_getEntry$($event$$123_insertAtIndex$$ + $i$$175$$).key}), $indexes$$10$$.push({row:$event$$123_insertAtIndex$$ + $i$$175$$, column:-1});
    }
    $event$$123_insertAtIndex$$ = {source:this, operation:"insert"};
    $event$$123_insertAtIndex$$.result = $cellSet$$2_insertAtRowKey$$;
    $headerSet$$3$$ && ($event$$123_insertAtIndex$$.header = $headerSet$$3$$);
    $event$$123_insertAtIndex$$.keys = $keys$$12$$;
    $event$$123_insertAtIndex$$.indexes = $indexes$$10$$;
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$123_insertAtIndex$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($event$$124_rowKeys$$) {
    var $keys$$13$$, $i$$176$$, $indexes$$11$$;
    $keys$$13$$ = [];
    $indexes$$11$$ = [];
    for ($i$$176$$ = 0;$i$$176$$ < $event$$124_rowKeys$$.length;$i$$176$$++) {
      $keys$$13$$.push({row:$event$$124_rowKeys$$[$i$$176$$].key}), $indexes$$11$$.push({row:$event$$124_rowKeys$$[$i$$176$$].index, column:-1});
    }
    $event$$124_rowKeys$$ = {source:this, operation:"delete"};
    $event$$124_rowKeys$$.keys = $keys$$13$$;
    $event$$124_rowKeys$$.indexes = $indexes$$11$$;
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$124_rowKeys$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$9$$, $callbacks$$29$$) {
    $callbacks$$29$$.success.call(null, new $oj$$11$$.$EmptyNodeSet$(null, $range$$9$$.start));
  };
  $oj$$11$$.$FlattenedTreeHeaderSet$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$($start$$30$$, $end$$10$$, $headers$$3$$, $nodeSet$$7$$, $rowHeader$$1$$) {
    $oj$$11$$.$Assert$.$assertNumber$($start$$30$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($end$$10$$, null);
    $oj$$11$$.$Assert$.$assertArrayOrNull$($headers$$3$$);
    this.$m_start$ = $start$$30$$;
    this.$m_end$ = $end$$10$$;
    this.$m_headers$ = $headers$$3$$;
    this.$m_nodeSet$ = $nodeSet$$7$$;
    this.$m_rowHeader$ = $rowHeader$$1$$;
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$11$$.$FlattenedTreeHeaderSet$, $oj$$11$$);
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$getData$($index$$123$$, $level$$18$$) {
    var $rowData$$2$$;
    $oj$$11$$.$Assert$.assert($index$$123$$ <= this.$m_end$ && $index$$123$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$18$$ || 0 == $level$$18$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($rowData$$2$$ = this.$m_nodeSet$.getData($index$$123$$), null != $rowData$$2$$ ? $rowData$$2$$.get ? $rowData$$2$$.get(this.$m_rowHeader$) : $rowData$$2$$[this.$m_rowHeader$] : null) : this.$m_headers$[$index$$123$$];
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$124$$, $level$$19$$) {
    $oj$$11$$.$Assert$.assert($index$$124$$ <= this.$m_end$ && $index$$124$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$19$$ || 0 == $level$$19$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$124$$) : {key:this.getData($index$$124$$)};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$$getCount$$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.$getCount$(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getCount$});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getLevelCount$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getLevelCount$});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getExtent$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$$getExtent$$($index$$125$$, $level$$20$$) {
    $oj$$11$$.$Assert$.assert($index$$125$$ <= this.$m_end$ && $index$$125$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$20$$ || 0 == $level$$20$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getExtent", {$getExtent$:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getExtent$});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getDepth$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$$getDepth$$($index$$126$$, $level$$21$$) {
    $oj$$11$$.$Assert$.assert($index$$126$$ <= this.$m_end$ && $index$$126$$ >= this.$m_start$, "index out of bounds");
    $oj$$11$$.$Assert$.assert(null == $level$$21$$ || 0 == $level$$21$$, "level out of bounds");
    return 1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getDepth", {$getDepth$:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getDepth$});
  $oj$$11$$.$PagingCellSet$ = function $$oj$$11$$$$PagingCellSet$$($cellSet$$3$$, $startIndex$$13$$) {
    this.$m_cellSet$ = $cellSet$$3$$;
    this.$m_startIndex$ = $startIndex$$13$$;
  };
  $goog$exportPath_$$("PagingCellSet", $oj$$11$$.$PagingCellSet$, $oj$$11$$);
  $oj$$11$$.$PagingCellSet$.prototype.getData = function $$oj$$11$$$$PagingCellSet$$$getData$($indexes$$12$$) {
    return this.$m_cellSet$.getData({column:$indexes$$12$$.column, row:$indexes$$12$$.row + this.$m_startIndex$});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getData", {getData:$oj$$11$$.$PagingCellSet$.prototype.getData});
  $oj$$11$$.$PagingCellSet$.prototype.getMetadata = function $$oj$$11$$$$PagingCellSet$$$getMetadata$($indexes$$13$$) {
    return this.$m_cellSet$.getMetadata({column:$indexes$$13$$.column, row:$indexes$$13$$.row + this.$m_startIndex$});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$PagingCellSet$.prototype.getMetadata});
  $oj$$11$$.$PagingCellSet$.prototype.$getCount$ = function $$oj$$11$$$$PagingCellSet$$$$getCount$$($axis$$19$$) {
    return this.$m_cellSet$.$getCount$($axis$$19$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCount", {$getCount$:$oj$$11$$.$PagingCellSet$.prototype.$getCount$});
  $oj$$11$$.$PagingCellSet$.prototype.$getCellSet$ = function $$oj$$11$$$$PagingCellSet$$$$getCellSet$$() {
    return this.$m_cellSet$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCellSet", {$getCellSet$:$oj$$11$$.$PagingCellSet$.prototype.$getCellSet$});
  $oj$$11$$.$PagingCellSet$.prototype.$getStartIndex$ = function $$oj$$11$$$$PagingCellSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getStartIndex", {$getStartIndex$:$oj$$11$$.$PagingCellSet$.prototype.$getStartIndex$});
  $oj$$11$$.$PagingDataGridDataSource$ = function $$oj$$11$$$$PagingDataGridDataSource$$($dataSource$$6$$) {
    if (!($dataSource$$6$$ instanceof $oj$$11$$.$DataGridDataSource$)) {
      throw new $oj$$11$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$6$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$11$$.$PagingDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$PagingDataGridDataSource$, $oj$$11$$.$DataGridDataSource$, "oj.PagingDataGridDataSource");
  $oj$$11$$.$PagingDataGridDataSource$.prototype.Init = function $$oj$$11$$$$PagingDataGridDataSource$$$Init$() {
    $oj$$11$$.$PagingDataGridDataSource$.$superclass$.Init.call(this);
    this.$_registerEventListeners$();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$PagingDataGridDataSource$.prototype.Init});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$_registerEventListeners$$() {
    this.$dataSource$.on("change", this.$_handleChange$.bind(this));
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.getPage = function $$oj$$11$$$$PagingDataGridDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPage", {getPage:$oj$$11$$.$PagingDataGridDataSource$.prototype.getPage});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.setPage = function $$oj$$11$$$$PagingDataGridDataSource$$$setPage$($value$$174$$, $options$$262$$) {
    $options$$262$$ = $options$$262$$ || {};
    $value$$174$$ = parseInt($value$$174$$, 10);
    try {
      $oj$$11$$.$PagingDataGridDataSource$.$superclass$.handleEvent.call(this, $oj$$11$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$174$$, previousPage:this.$_page$});
    } catch ($err$$10$$) {
      return Promise.reject(null);
    }
    this.$_pageSize$ = null != $options$$262$$.pageSize ? $options$$262$$.pageSize : this.$_pageSize$;
    $options$$262$$.startIndex = $value$$174$$ * this.$_pageSize$;
    var $previousPage$$2$$ = this.$_page$;
    this.$_page$ = $value$$174$$;
    this.$_startIndex$ = $options$$262$$.startIndex;
    var $self$$70$$ = this;
    return new Promise(function($resolve$$40$$, $reject$$40$$) {
      $self$$70$$.$_fetchInternal$($options$$262$$).then(function() {
        $resolve$$40$$(null);
      }, function() {
        $self$$70$$.$_page$ = $previousPage$$2$$;
        $self$$70$$.$_startIndex$ = $self$$70$$.$_page$ * $self$$70$$.$_pageSize$;
        $reject$$40$$(null);
      });
    });
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.setPage", {setPage:$oj$$11$$.$PagingDataGridDataSource$.prototype.setPage});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$_fetchInternal$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$_fetchInternal$$($options$$263$$) {
    this.$_initialized$ = !0;
    this.$_startIndex$ = $options$$263$$.startIndex;
    var $self$$71$$ = this;
    return new Promise(function($resolve$$41$$) {
      $self$$71$$.handleEvent("change", {operation:"sync", pageSize:$self$$71$$.$_pageSize$});
      $resolve$$41$$(void 0);
    });
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$11$$$$PagingDataGridDataSource$$$fetch$($options$$264$$) {
    this.$_pageSize$ = $options$$264$$.pageSize + $options$$264$$.startIndex;
    $options$$264$$.startIndex = 0;
    return this.$_fetchInternal$($options$$264$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$11$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.getStartItemIndex = function $$oj$$11$$$$PagingDataGridDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$11$$.$PagingDataGridDataSource$.prototype.getStartItemIndex});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.getEndItemIndex = function $$oj$$11$$$$PagingDataGridDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$11$$.$PagingDataGridDataSource$.prototype.getEndItemIndex});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.getPageCount = function $$oj$$11$$$$PagingDataGridDataSource$$$getPageCount$() {
    var $totalSize$$3$$ = this.totalSize();
    return-1 == $totalSize$$3$$ ? -1 : Math.ceil($totalSize$$3$$ / this.$_pageSize$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPageCount", {getPageCount:$oj$$11$$.$PagingDataGridDataSource$.prototype.getPageCount});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$_handleChange$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$_handleChange$$($options$$265$$) {
    switch($options$$265$$.operation) {
      case "refresh":
        this.$_startIndex$ = 0;
        this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$});
        this.handleEvent($oj$$11$$.$PagingTableDataSource$.$EventType$.REFRESH, null);
        break;
      case "reset":
        this.handleEvent($oj$$11$$.$PagingTableDataSource$.$EventType$.RESET, null);
        break;
      case "insert":
        this.handleEvent($oj$$11$$.$PagingTableDataSource$.$EventType$.ADD, {index:$options$$265$$.indexes.row});
        break;
      case "delete":
        this.handleEvent($oj$$11$$.$PagingTableDataSource$.$EventType$.REMOVE, null);
        break;
      case "update":
        $options$$265$$.indexes.row = 0 <= $options$$265$$.indexes.row - this.$_startIndex$ ? $options$$265$$.indexes.row - this.$_startIndex$ : -1;
        this.handleEvent("change", $options$$265$$);
        break;
      default:
        this.handleEvent("change", $options$$265$$), this.handleEvent($oj$$11$$.$PagingTableDataSource$.$EventType$.SYNC, null);
    }
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$getCount$$($axis$$20$$) {
    return this.$dataSource$.$getCount$($axis$$20$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$getCountPrecision$$($axis$$21$$) {
    return this.$dataSource$.$getCountPrecision$($axis$$21$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$fetchHeaders$$($headerRange$$6$$, $callbacks$$30$$, $callbackObjects$$16$$) {
    var $headerSet$$4$$;
    null == this.$_initialized$ ? ($headerSet$$4$$ = new $oj$$11$$.$ArrayHeaderSet$(0, 0, $headerRange$$6$$.axis, null), null != $callbacks$$30$$ && $callbacks$$30$$.success && $callbacks$$30$$.success.call($callbackObjects$$16$$.success, $headerSet$$4$$, $headerRange$$6$$)) : "row" === $headerRange$$6$$.axis ? ($headerRange$$6$$.start += this.$_startIndex$, $headerRange$$6$$.start + $headerRange$$6$$.count > this.$_startIndex$ + this.$_pageSize$ && ($headerRange$$6$$.count = this.$_pageSize$ - $headerRange$$6$$.start), 
    this.$_pendingRowHeaderCallback$ = {callbacks:$callbacks$$30$$, callbackObjects:$callbackObjects$$16$$}, this.$dataSource$.$fetchHeaders$($headerRange$$6$$, {success:this.$_handleRowHeaderFetchSuccess$.bind(this), error:this.$_handleRowHeaderFetchError$.bind(this)}, $callbackObjects$$16$$)) : this.$dataSource$.$fetchHeaders$($headerRange$$6$$, $callbacks$$30$$, $callbackObjects$$16$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$5$$, $headerRange$$7$$) {
    $headerRange$$7$$.start -= this.$_startIndex$;
    this.$_pendingRowHeaderCallback$.callbacks.success.call(this.$_pendingRowHeaderCallback$.callbackObjects.success, new $oj$$11$$.$PagingHeaderSet$($headerSet$$5$$, this.$_startIndex$), $headerRange$$7$$);
    this.$_pendingRowHeaderCallback$ = null;
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchError$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchError$$($error$$33$$) {
    this.$_pendingRowHeaderCallback$.callbacks.error.call(this.$_pendingRowHeaderCallback$.callbackObjects.error, $error$$33$$);
    this.$_pendingRowHeaderCallback$ = null;
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$fetchCells$$($cellRanges$$3$$, $callbacks$$31$$, $callbackObjects$$17$$) {
    var $cellSet$$4_i$$177$$;
    if (null == this.$_initialized$) {
      $cellSet$$4_i$$177$$ = new $oj$$11$$.$ArrayCellSet$(0, 0, 0, 0, null), null != $callbacks$$31$$ && $callbacks$$31$$.success && $callbacks$$31$$.success.call($callbackObjects$$17$$.success, $cellSet$$4_i$$177$$, $cellRanges$$3$$);
    } else {
      for ($cellSet$$4_i$$177$$ = 0;$cellSet$$4_i$$177$$ < $cellRanges$$3$$.length;$cellSet$$4_i$$177$$ += 1) {
        "row" === $cellRanges$$3$$[$cellSet$$4_i$$177$$].axis && ($cellRanges$$3$$[$cellSet$$4_i$$177$$].start += this.$_startIndex$, $cellRanges$$3$$[$cellSet$$4_i$$177$$].start + $cellRanges$$3$$[$cellSet$$4_i$$177$$].count > this.$_startIndex$ + this.$_pageSize$ && ($cellRanges$$3$$[$cellSet$$4_i$$177$$].count = this.$_pageSize$ - $cellRanges$$3$$[$cellSet$$4_i$$177$$].start));
      }
      this.$_pendingCellCallback$ = {callbacks:$callbacks$$31$$, callbackObjects:$callbackObjects$$17$$};
      this.$dataSource$.$fetchCells$($cellRanges$$3$$, {success:this.$_handleCellsFetchSuccess$.bind(this), error:this.$_handleCellsFetchError$.bind(this)}, $callbackObjects$$17$$);
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchSuccess$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$_handleCellsFetchSuccess$$($cellSet$$5$$, $cellRanges$$4$$) {
    var $i$$178$$;
    for ($i$$178$$ = 0;$i$$178$$ < $cellRanges$$4$$.length;$i$$178$$ += 1) {
      "row" === $cellRanges$$4$$[$i$$178$$].axis && ($cellRanges$$4$$[$i$$178$$].start -= this.$_startIndex$);
    }
    this.$_pendingCellCallback$.callbacks.success.call(this.$_pendingCellCallback$.callbackObjects.success, new $oj$$11$$.$PagingCellSet$($cellSet$$5$$, this.$_startIndex$), $cellRanges$$4$$);
    this.$_pendingCellCallback$ = null;
    this.$_endIndex$ = this.$_startIndex$ + $cellSet$$5$$.$getCount$("row") - 1;
    this.handleEvent("sync", {data:Array($cellSet$$5$$.$getCount$("row")), startIndex:this.$_startIndex$});
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchError$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$_handleCellsFetchError$$($error$$34$$) {
    this.$_pendingCellCallback$.callbacks.error.call(this.$_pendingCellCallback$.callbackObjects.error, $error$$34$$);
    this.$_pendingCellCallback$ = null;
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$11$$$$PagingDataGridDataSource$$$keys$($indexes$$14$$) {
    return this.$dataSource$.keys({column:$indexes$$14$$.column, row:$indexes$$14$$.row + this.$_startIndex$});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$indexes$$($indexes$$15_keys$$14$$) {
    $indexes$$15_keys$$14$$ = this.$dataSource$.$indexes$($indexes$$15_keys$$14$$);
    -1 != $indexes$$15_keys$$14$$.row && ($indexes$$15_keys$$14$$.row -= this.$_startIndex$);
    return $indexes$$15_keys$$14$$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$PagingDataGridDataSource$$$getCapability$($feature$$13$$) {
    return this.$dataSource$.getCapability($feature$$13$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$PagingDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$11$$$$PagingDataGridDataSource$$$size$() {
    var $count$$29$$;
    if (null == this.$_initialized$) {
      return-1;
    }
    $count$$29$$ = this.$dataSource$.$getCount$("row");
    return this.$dataSource$.$getCount$("row") > this.$_pageSize$ ? this.$_pageSize$ : $count$$29$$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$11$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$11$$$$PagingDataGridDataSource$$$sort$($criteria$$11$$, $callbacks$$32$$, $callbackObjects$$18$$) {
    this.$dataSource$.sort($criteria$$11$$, $callbacks$$32$$, $callbackObjects$$18$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$11$$$$PagingDataGridDataSource$$$totalSize$() {
    return null == this.$_initialized$ ? -1 : this.$dataSource$.$getCount$("row");
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$11$$$$PagingDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$, $position$$11$$, $callbacks$$33$$, $callbackObjects$$19$$) {
    this.$dataSource$.move($moveKey$$1$$, $atKey$$1$$, $position$$11$$, $callbacks$$33$$, $callbackObjects$$19$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.move", {move:$oj$$11$$.$PagingDataGridDataSource$.prototype.move});
  $oj$$11$$.$PagingHeaderSet$ = function $$oj$$11$$$$PagingHeaderSet$$($headerSet$$6$$, $startIndex$$14$$) {
    this.$m_headerSet$ = $headerSet$$6$$;
    this.$m_startIndex$ = $startIndex$$14$$;
  };
  $goog$exportPath_$$("PagingHeaderSet", $oj$$11$$.$PagingHeaderSet$, $oj$$11$$);
  $oj$$11$$.$PagingHeaderSet$.prototype.getData = function $$oj$$11$$$$PagingHeaderSet$$$getData$($index$$127$$, $level$$22$$) {
    return this.$m_headerSet$.getData($index$$127$$ + this.$m_startIndex$, $level$$22$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getData", {getData:$oj$$11$$.$PagingHeaderSet$.prototype.getData});
  $oj$$11$$.$PagingHeaderSet$.prototype.getMetadata = function $$oj$$11$$$$PagingHeaderSet$$$getMetadata$($index$$128$$, $level$$23$$) {
    return this.$m_headerSet$.getMetadata($index$$128$$ + this.$m_startIndex$, $level$$23$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$PagingHeaderSet$.prototype.getMetadata});
  $oj$$11$$.$PagingHeaderSet$.prototype.$getCount$ = function $$oj$$11$$$$PagingHeaderSet$$$$getCount$$() {
    return this.$m_headerSet$.$getCount$();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getCount", {$getCount$:$oj$$11$$.$PagingHeaderSet$.prototype.$getCount$});
  $oj$$11$$.$PagingHeaderSet$.prototype.$getLevelCount$ = function $$oj$$11$$$$PagingHeaderSet$$$$getLevelCount$$() {
    return this.$m_headerSet$.$getLevelCount$();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$11$$.$PagingHeaderSet$.prototype.$getLevelCount$});
  $oj$$11$$.$PagingHeaderSet$.prototype.$getExtent$ = function $$oj$$11$$$$PagingHeaderSet$$$$getExtent$$($index$$129$$, $level$$24$$) {
    return this.$m_headerSet$.$getExtent$($index$$129$$, $level$$24$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getExtent", {$getExtent$:$oj$$11$$.$PagingHeaderSet$.prototype.$getExtent$});
  $oj$$11$$.$PagingHeaderSet$.prototype.$getDepth$ = function $$oj$$11$$$$PagingHeaderSet$$$$getDepth$$($index$$130$$, $level$$25$$) {
    return this.$m_headerSet$.$getDepth$($index$$130$$, $level$$25$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getDepth", {$getDepth$:$oj$$11$$.$PagingHeaderSet$.prototype.$getDepth$});
  $oj$$11$$.$PagingHeaderSet$.prototype.$getHeaderSet$ = function $$oj$$11$$$$PagingHeaderSet$$$$getHeaderSet$$() {
    return this.$m_headerSet$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getHeaderSet", {$getHeaderSet$:$oj$$11$$.$PagingHeaderSet$.prototype.$getHeaderSet$});
  $oj$$11$$.$PagingHeaderSet$.prototype.$getStartIndex$ = function $$oj$$11$$$$PagingHeaderSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getStartIndex", {$getStartIndex$:$oj$$11$$.$PagingHeaderSet$.prototype.$getStartIndex$});
});
