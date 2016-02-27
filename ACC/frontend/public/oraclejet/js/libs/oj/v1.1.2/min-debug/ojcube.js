/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "promise", "ojs/ojdatacollection-common"], function($oj$$18$$, $$$$17$$) {
  $oj$$18$$.$Cube$ = function $$oj$$18$$$$Cube$$($rowset$$, $layout$$) {
    this.Init();
    this.$_rows$ = $rowset$$;
    this.$_layout$ = $layout$$;
    this.$BuildCube$();
  };
  $goog$exportPath_$$("Cube", $oj$$18$$.$Cube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$Cube$, $oj$$18$$.$Object$, "oj.Cube");
  $oj$$18$$.$Cube$.prototype.Init = function $$oj$$18$$$$Cube$$$Init$() {
    $oj$$18$$.$Cube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Cube$.prototype.$getAxes$ = function $$oj$$18$$$$Cube$$$$getAxes$$() {
    var $cube_i$$282$$ = this.$_getPinnedCube$(), $axes$$ = [];
    Array.prototype.push.apply($axes$$, $cube_i$$282$$ ? $cube_i$$282$$.$getAxes$() : this.$_axes$);
    for ($cube_i$$282$$ = 2;$cube_i$$282$$ < this.$_axes$.length;$cube_i$$282$$++) {
      $axes$$.push(this.$_axes$[$cube_i$$282$$]);
    }
    return $axes$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getAxes", {$getAxes$:$oj$$18$$.$Cube$.prototype.$getAxes$});
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    return this.$_axes$;
  };
  $oj$$18$$.$Cube$.prototype.$getValues$ = function $$oj$$18$$$$Cube$$$$getValues$$($ind_indices$$1_val$$41$$) {
    var $cube$$1_origRet$$ = this.$_getPinnedCube$();
    $ind_indices$$1_val$$41$$ = $cube$$1_origRet$$.$_normalizeIndices$($ind_indices$$1_val$$41$$);
    for ($ind_indices$$1_val$$41$$ = $cube$$1_origRet$$ = $cube$$1_origRet$$.$_walkIndex$($ind_indices$$1_val$$41$$, 0, []);Array.isArray($ind_indices$$1_val$$41$$) && 1 === $ind_indices$$1_val$$41$$.length;) {
      if ($ind_indices$$1_val$$41$$ = $ind_indices$$1_val$$41$$[0], !Array.isArray($ind_indices$$1_val$$41$$)) {
        return $ind_indices$$1_val$$41$$;
      }
    }
    return $cube$$1_origRet$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getValues", {$getValues$:$oj$$18$$.$Cube$.prototype.$getValues$});
  $oj$$18$$.$Cube$.prototype.setPage = function $$oj$$18$$$$Cube$$$setPage$($pin$$) {
    this.$_pin$ = $pin$$ instanceof Array ? $pin$$ : [$pin$$];
  };
  $oj$$18$$.$Cube$.prototype.$pivot$ = function $$oj$$18$$$$Cube$$$$pivot$$($axisFrom_axisToObj_levelFromObj$$, $levelFrom$$, $axisTo_levelsFrom$$, $levelTo$$, $type$$81$$) {
    var $layout$$1_levelsTo$$ = this.$_layout$, $axisFromObj$$ = this.$_findAxisInLayout$($axisFrom_axisToObj_levelFromObj$$);
    if (!$axisFromObj$$) {
      return!1;
    }
    $axisFrom_axisToObj_levelFromObj$$ = null;
    $axisTo_levelsFrom$$ < $layout$$1_levelsTo$$.length ? $axisFrom_axisToObj_levelFromObj$$ = this.$_findAxisInLayout$($axisTo_levelsFrom$$) : ($axisFrom_axisToObj_levelFromObj$$ = {axis:$axisTo_levelsFrom$$, levels:[]}, $layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$));
    $axisTo_levelsFrom$$ = $axisFromObj$$.levels;
    $layout$$1_levelsTo$$ = $axisFrom_axisToObj_levelFromObj$$.levels;
    $axisFrom_axisToObj_levelFromObj$$ = $levelFrom$$ < $axisTo_levelsFrom$$.length ? $axisTo_levelsFrom$$[$levelFrom$$] : null;
    if (!$axisFrom_axisToObj_levelFromObj$$) {
      return!1;
    }
    $levelTo$$ >= $layout$$1_levelsTo$$.length ? ($layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$), $axisTo_levelsFrom$$.splice($levelFrom$$, 1)) : $type$$81$$ === $oj$$18$$.$Cube$.$PivotType$.SWAP ? ($axisTo_levelsFrom$$[$levelFrom$$] = $layout$$1_levelsTo$$[$levelTo$$], $layout$$1_levelsTo$$[$levelTo$$] = $axisFrom_axisToObj_levelFromObj$$) : ($type$$81$$ === $oj$$18$$.$Cube$.$PivotType$.AFTER && $levelTo$$++, $layout$$1_levelsTo$$.splice($levelTo$$, 0, $axisFrom_axisToObj_levelFromObj$$), 
    $layout$$1_levelsTo$$ === $axisTo_levelsFrom$$ && $levelTo$$ < $levelFrom$$ && $levelFrom$$++, $axisTo_levelsFrom$$.splice($levelFrom$$, 1));
    this.$BuildCube$();
    return!0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.pivot", {$pivot$:$oj$$18$$.$Cube$.prototype.$pivot$});
  $oj$$18$$.$Cube$.prototype.$_findAxisInLayout$ = function $$oj$$18$$$$Cube$$$$_findAxisInLayout$$($axis$$22$$) {
    for (var $i$$283$$ = 0;$i$$283$$ < this.$_layout$.length;$i$$283$$++) {
      if (this.$_layout$[$i$$283$$].axis === $axis$$22$$) {
        return this.$_layout$[$i$$283$$];
      }
    }
    return null;
  };
  $oj$$18$$.$Cube$.prototype.$getLayout$ = function $$oj$$18$$$$Cube$$$$getLayout$$() {
    return this.$_layout$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getLayout", {$getLayout$:$oj$$18$$.$Cube$.prototype.$getLayout$});
  $oj$$18$$.$Cube$.$PivotType$ = {BEFORE:"before", AFTER:"after", SWAP:"swap"};
  $goog$exportPath_$$("Cube.PivotType", $oj$$18$$.$Cube$.$PivotType$, $oj$$18$$);
  $oj$$18$$.$Cube$.prototype.$_walkIndex$ = function $$oj$$18$$$$Cube$$$$_walkIndex$$($count$$30_indices$$2$$, $depth$$8_loc$$3$$, $location$$24$$) {
    var $returnValue$$1$$ = [];
    if (0 === $count$$30_indices$$2$$.length) {
      return $depth$$8_loc$$3$$ = $location$$24$$.slice(0), this.$_getValue$($depth$$8_loc$$3$$);
    }
    var $remaining$$ = $count$$30_indices$$2$$.slice(1), $start$$33$$ = $count$$30_indices$$2$$[0].start;
    $count$$30_indices$$2$$ = $count$$30_indices$$2$$[0].count;
    for ($location$$24$$[$depth$$8_loc$$3$$] = $start$$33$$;$location$$24$$[$depth$$8_loc$$3$$] < $start$$33$$ + $count$$30_indices$$2$$;$location$$24$$[$depth$$8_loc$$3$$]++) {
      $returnValue$$1$$.push(this.$_walkIndex$($remaining$$, $depth$$8_loc$$3$$ + 1, $location$$24$$));
    }
    return $returnValue$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$_normalizeIndices$ = function $$oj$$18$$$$Cube$$$$_normalizeIndices$$($indices$$3$$) {
    var $ind$$1$$ = [];
    if (!$indices$$3$$) {
      return $ind$$1$$;
    }
    for (var $numAxes$$ = Math.min($indices$$3$$.length, this.$_axes$.length), $a$$104$$ = 0;$a$$104$$ < $numAxes$$;$a$$104$$++) {
      var $index$$144$$ = $indices$$3$$[$a$$104$$];
      $index$$144$$ instanceof Object && ($index$$144$$.hasOwnProperty("start") || $index$$144$$.hasOwnProperty("count")) ? $index$$144$$.hasOwnProperty("start") ? $index$$144$$.hasOwnProperty("count") ? $ind$$1$$.push(this.$_generateIndex$($index$$144$$.start, $index$$144$$.count, $a$$104$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$144$$.start, 1, $a$$104$$)) : $ind$$1$$.push(this.$_generateIndex$(0, $index$$144$$.count, $a$$104$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$144$$, 1, 
      $a$$104$$));
    }
    return $ind$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$_generateIndex$ = function $$oj$$18$$$$Cube$$$$_generateIndex$$($start$$34$$, $count$$31$$, $axis$$23_trueCount$$) {
    $axis$$23_trueCount$$ = this.$getAxes$()[$axis$$23_trueCount$$].$getExtent$();
    if ($start$$34$$ >= $axis$$23_trueCount$$ || 0 > $start$$34$$) {
      $start$$34$$ = 0;
    }
    $count$$31$$ = Math.min($count$$31$$, $axis$$23_trueCount$$ - $start$$34$$);
    return{start:$start$$34$$, index:$start$$34$$, count:$count$$31$$};
  };
  $oj$$18$$.$Cube$.prototype.$_getValue$ = function $$oj$$18$$$$Cube$$$$_getValue$$($indices$$4$$) {
    var $hash$$2_key$$89_obj$$51$$ = this.$_createCubeKeys$($indices$$4$$);
    return $hash$$2_key$$89_obj$$51$$ && ($hash$$2_key$$89_obj$$51$$ = $hash$$2_key$$89_obj$$51$$.$GetHashCodes$(), 0 < $hash$$2_key$$89_obj$$51$$.length && ($hash$$2_key$$89_obj$$51$$ = this.$_data$[$hash$$2_key$$89_obj$$51$$[0].key])) ? new $oj$$18$$.$CubeDataValue$($hash$$2_key$$89_obj$$51$$.value, $indices$$4$$, $hash$$2_key$$89_obj$$51$$.$aggType$, $hash$$2_key$$89_obj$$51$$.rows, $hash$$2_key$$89_obj$$51$$.$square$) : new $oj$$18$$.$CubeDataValue$(null, $indices$$4$$, void 0, []);
  };
  $oj$$18$$.$Cube$.prototype.$GenerateAxes$ = function $$oj$$18$$$$Cube$$$$GenerateAxes$$() {
    var $nonPageLayout_pageLayout$$ = this.$_getPageLayout$();
    this.$_pin$ = [];
    for (var $i$$284$$ = 0;$i$$284$$ < $nonPageLayout_pageLayout$$.length;$i$$284$$++) {
      this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$284$$].axis, $nonPageLayout_pageLayout$$[$i$$284$$].levels), this.$_pin$.push({axis:$nonPageLayout_pageLayout$$[$i$$284$$].axis, index:0});
    }
    if (0 === $nonPageLayout_pageLayout$$.length) {
      for ($nonPageLayout_pageLayout$$ = this.$_getNonPageLayout$(), $i$$284$$ = 0;$i$$284$$ < $nonPageLayout_pageLayout$$.length;$i$$284$$++) {
        this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$284$$].axis, $nonPageLayout_pageLayout$$[$i$$284$$].levels);
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPageLayout$ = function $$oj$$18$$$$Cube$$$$_getPageLayout$$() {
    for (var $pageOnlyLayout$$ = [], $i$$285$$ = 0;$i$$285$$ < this.$_layout$.length;$i$$285$$++) {
      1 < this.$_layout$[$i$$285$$].axis && $pageOnlyLayout$$.push(this.$_layout$[$i$$285$$]);
    }
    return $pageOnlyLayout$$;
  };
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    for (var $nonPageLayout$$1$$ = [], $i$$286$$ = 0;$i$$286$$ < this.$_layout$.length;$i$$286$$++) {
      2 > this.$_layout$[$i$$286$$].axis && $nonPageLayout$$1$$.push(this.$_layout$[$i$$286$$]);
    }
    return $nonPageLayout$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$BuildCube$ = function $$oj$$18$$$$Cube$$$$BuildCube$$() {
    this.$_axes$ = [];
    this.$_data$ = [];
    this.$_cubes$ = [];
    this.$GenerateAxes$();
    if (null !== this.$_rows$) {
      for (var $row$$37$$ = 0;$row$$37$$ < this.$_rows$.length;$row$$37$$++) {
        for (var $pageHashObj_pageKey$$ = new $oj$$18$$.$CubeKeys$, $axis$$26_hash$$3_pageHash$$ = 2;$axis$$26_hash$$3_pageHash$$ < this.$_axes$.length;$axis$$26_hash$$3_pageHash$$++) {
          $pageHashObj_pageKey$$ = this.$_axes$[$axis$$26_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$37$$], $pageHashObj_pageKey$$);
        }
        for (var $pageHashObj_pageKey$$ = $pageHashObj_pageKey$$.$GetHashCodes$(), $ph$$ = 0;$ph$$ < $pageHashObj_pageKey$$.length;$ph$$++) {
          var $axis$$26_hash$$3_pageHash$$ = $pageHashObj_pageKey$$[$ph$$].key, $cube$$2$$ = this.$_cubes$[$axis$$26_hash$$3_pageHash$$];
          $cube$$2$$ || ($cube$$2$$ = this.$_cubes$[$axis$$26_hash$$3_pageHash$$] = this.$GenerateCube$(this.$_getNonPageLayout$()));
          for (var $dataHash_keys$$16$$ = new $oj$$18$$.$CubeKeys$, $h$$5_maxAxes$$ = $cube$$2$$.$_axes$.length, $axis$$26_hash$$3_pageHash$$ = 0;$axis$$26_hash$$3_pageHash$$ < $h$$5_maxAxes$$;$axis$$26_hash$$3_pageHash$$++) {
            $dataHash_keys$$16$$ = $cube$$2$$.$_axes$[$axis$$26_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$37$$], $dataHash_keys$$16$$);
          }
          $dataHash_keys$$16$$ = $axis$$26_hash$$3_pageHash$$ = $dataHash_keys$$16$$.$GetHashCodes$();
          if (void 0 !== $pageHashObj_pageKey$$[$ph$$].$dataValue$) {
            for ($dataHash_keys$$16$$ = [], $h$$5_maxAxes$$ = 0;$h$$5_maxAxes$$ < $axis$$26_hash$$3_pageHash$$.length;$h$$5_maxAxes$$++) {
              $dataHash_keys$$16$$.push($pageHashObj_pageKey$$[$ph$$]);
            }
          }
          $cube$$2$$.$_storeData$($axis$$26_hash$$3_pageHash$$, $dataHash_keys$$16$$, this.$_rows$[$row$$37$$]);
        }
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_storeData$ = function $$oj$$18$$$$Cube$$$$_storeData$$($hash$$4$$, $dataHash$$1$$, $row$$38$$) {
    for (var $i$$287$$ = 0;$i$$287$$ < $hash$$4$$.length;$i$$287$$++) {
      this.$_data$[$hash$$4$$[$i$$287$$].key] = this.$_aggregate$($dataHash$$1$$[$i$$287$$], this.$_data$[$hash$$4$$[$i$$287$$].key], $row$$38$$);
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPinnedCube$ = function $$oj$$18$$$$Cube$$$$_getPinnedCube$$() {
    return this.$_cubes$[this.$_getHashFromPin$(this.$_pin$)];
  };
  $oj$$18$$.$Cube$.prototype.$_getHashFromPin$ = function $$oj$$18$$$$Cube$$$$_getHashFromPin$$($pin$$1$$) {
    var $keys$$17$$ = new $oj$$18$$.$CubeKeys$;
    if ($pin$$1$$ && 0 < $pin$$1$$.length) {
      $pin$$1$$.sort(function($a$$105$$, $b$$68$$) {
        return $a$$105$$.axis - $b$$68$$.axis;
      });
      for (var $axes$$1$$ = this.$_axes$, $i$$288$$ = 0;$i$$288$$ < $pin$$1$$.length;$i$$288$$++) {
        $keys$$17$$ = $axes$$1$$[$pin$$1$$[$i$$288$$].axis].$GetCubeKeys$($pin$$1$$[$i$$288$$].index, $keys$$17$$);
      }
    }
    return $keys$$17$$.$GetHashCodes$()[0].key;
  };
  $oj$$18$$.$Cube$.$_isValid$ = function $$oj$$18$$$$Cube$$$_isValid$$($value$$211$$) {
    return $value$$211$$ ? void 0 !== $value$$211$$.value && null !== $value$$211$$.value : !1;
  };
  $oj$$18$$.$Cube$.prototype.$_createAggValue$ = function $$oj$$18$$$$Cube$$$$_createAggValue$$($value$$212$$, $aggType$$, $rows$$8$$, $retObj$$12_row$$39$$, $props$$13$$) {
    $rows$$8$$.push($retObj$$12_row$$39$$);
    $retObj$$12_row$$39$$ = {};
    for (var $p$$5$$ in $props$$13$$) {
      $props$$13$$.hasOwnProperty($p$$5$$) && ($retObj$$12_row$$39$$[$p$$5$$] = $props$$13$$[$p$$5$$]);
    }
    $retObj$$12_row$$39$$.value = $value$$212$$;
    $retObj$$12_row$$39$$.$aggType$ = $aggType$$;
    $retObj$$12_row$$39$$.rows = $rows$$8$$;
    return $retObj$$12_row$$39$$;
  };
  $oj$$18$$.$Cube$.$_isNumber$ = function $$oj$$18$$$$Cube$$$_isNumber$$($value$$213$$) {
    return $oj$$18$$.$StringUtils$.$isString$($value$$213$$.value) ? !1 : !isNaN($value$$213$$.value);
  };
  $oj$$18$$.$Cube$.prototype.$_aggregate$ = function $$oj$$18$$$$Cube$$$$_aggregate$$($hash$$5_val$$42$$, $currValue$$2$$, $row$$40$$) {
    var $aggObj$$ = this.$GetAggType$($hash$$5_val$$42$$.$dataValue$), $aggType$$1$$ = $aggObj$$.$aggregation$, $avg_validCurr$$ = $oj$$18$$.$Cube$.$_isValid$($currValue$$2$$), $validHash$$ = $oj$$18$$.$Cube$.$_isValid$($hash$$5_val$$42$$), $isNumCurr$$ = $avg_validCurr$$ && $oj$$18$$.$Cube$.$_isNumber$($currValue$$2$$), $isNumHash$$ = $validHash$$ && $oj$$18$$.$Cube$.$_isNumber$($hash$$5_val$$42$$);
    switch($aggType$$1$$) {
      case $oj$$18$$.$CubeAggType$.SUM:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$($currValue$$2$$.value + $hash$$5_val$$42$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$42$$.value, $aggType$$1$$, [], $row$$40$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$40$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.AVERAGE:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(($currValue$$2$$.$sum$ + $hash$$5_val$$42$$.value) / ($currValue$$2$$.rows.length + 1), $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {$sum$:$currValue$$2$$.$sum$ + $hash$$5_val$$42$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {$sum$:$currValue$$2$$.$sum$}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$42$$.value, 
        $aggType$$1$$, [], $row$$40$$, {$sum$:$hash$$5_val$$42$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$40$$, {$sum$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.VARIANCE:
      ;
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? ($avg_validCurr$$ = $currValue$$2$$.value + ($hash$$5_val$$42$$.value - $currValue$$2$$.value) / ($currValue$$2$$.rows.length + 1), this.$_createAggValue$($avg_validCurr$$, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {$square$:$currValue$$2$$.$square$ + ($hash$$5_val$$42$$.value - $currValue$$2$$.value) * ($hash$$5_val$$42$$.value - $avg_validCurr$$)})) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, 
        $row$$40$$, {$square$:NaN}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$42$$.value, $aggType$$1$$, [], $row$$40$$, {$square$:0}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$40$$, {$square$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.NONE:
        return this.$_createAggValue$(null, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$40$$, {});
      case $oj$$18$$.$CubeAggType$.FIRST:
        return $avg_validCurr$$ ? this.$_createAggValue$($currValue$$2$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : $validHash$$ ? this.$_createAggValue$($hash$$5_val$$42$$.value, $aggType$$1$$, [], $row$$40$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MIN:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.min($currValue$$2$$.value, $hash$$5_val$$42$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$42$$.value, $aggType$$1$$, [], $row$$40$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$40$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MAX:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.max($currValue$$2$$.value, $hash$$5_val$$42$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$42$$.value, $aggType$$1$$, [], $row$$40$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$40$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.COUNT:
        return $avg_validCurr$$ && $validHash$$ ? this.$_createAggValue$($currValue$$2$$.value + 1, $aggType$$1$$, $currValue$$2$$.rows, $row$$40$$, {}) : $validHash$$ && !$avg_validCurr$$ ? this.$_createAggValue$(1, $aggType$$1$$, [], $row$$40$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.CUSTOM:
        return $hash$$5_val$$42$$ = $aggObj$$.$callback$.call(this, $avg_validCurr$$ ? $currValue$$2$$.value : void 0, $validHash$$ ? $hash$$5_val$$42$$.value : void 0), this.$_createAggValue$($hash$$5_val$$42$$, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$40$$, {});
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getAxis$ = function $$oj$$18$$$$Cube$$$$_getAxis$$($axis$$27$$, $levels$$) {
    $axis$$27$$ >= this.$_axes$.length && Array.prototype.push.apply(this.$_axes$, Array($axis$$27$$ - this.$_axes$.length + 1));
    this.$_axes$[$axis$$27$$] || (this.$_axes$[$axis$$27$$] = new $oj$$18$$.$CubeAxis$($levels$$, $axis$$27$$, this));
    return this.$_axes$[$axis$$27$$];
  };
  $oj$$18$$.$Cube$.prototype.$_createCubeKeys$ = function $$oj$$18$$$$Cube$$$$_createCubeKeys$$($indices$$5$$) {
    for (var $axes$$2$$ = this.$getAxes$(), $keys$$18$$ = new $oj$$18$$.$CubeKeys$, $a$$106$$ = 0;$a$$106$$ < $indices$$5$$.length;$a$$106$$++) {
      $keys$$18$$ = $axes$$2$$[$a$$106$$].$GetCubeKeys$($indices$$5$$[$a$$106$$], $keys$$18$$);
    }
    return $keys$$18$$;
  };
  $oj$$18$$.$Cube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$Cube$$$$ProcessLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateCube$ = function $$oj$$18$$$$Cube$$$$GenerateCube$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$Cube$$$$GenerateLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GetAggType$ = function $$oj$$18$$$$Cube$$$$GetAggType$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
    return{};
  };
  $oj$$18$$.$CubeAggType$ = {SUM:"sum", AVERAGE:"avg", STDDEV:"stddev", VARIANCE:"variance", NONE:"none", FIRST:"first", MIN:"min", MAX:"max", COUNT:"count", CUSTOM:"custom"};
  $goog$exportPath_$$("CubeAggType", $oj$$18$$.$CubeAggType$, $oj$$18$$);
  $oj$$18$$.$CubeAxisValue$ = function $$oj$$18$$$$CubeAxisValue$$($value$$214$$, $label$$6$$, $level$$28$$, $parent$$19$$) {
    this.Init();
    this.$_children$ = [];
    this.$_parent$ = $parent$$19$$;
    this.$_cubeLevel$ = $level$$28$$;
    this.$_data$ = {};
    this.$_data$.value = $value$$214$$;
    this.$_data$.label = $label$$6$$;
  };
  $goog$exportPath_$$("CubeAxisValue", $oj$$18$$.$CubeAxisValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxisValue$, $oj$$18$$.$Object$, "oj.CubeAxisValue");
  $oj$$18$$.$CubeAxisValue$.prototype.Init = function $$oj$$18$$$$CubeAxisValue$$$Init$() {
    $oj$$18$$.$CubeAxisValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$getLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLevel$$() {
    return this.$_cubeLevel$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLevel", {$getLevel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLevel$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getDepth$ = function $$oj$$18$$$$CubeAxisValue$$$$getDepth$$() {
    return 1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getDepth", {$getDepth$:$oj$$18$$.$CubeAxisValue$.prototype.$getDepth$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getParents$ = function $$oj$$18$$$$CubeAxisValue$$$$getParents$$() {
    for (var $parents$$2$$ = [], $parent$$20$$ = this.$_parent$;$parent$$20$$ && $parent$$20$$.$_parent$;) {
      $parents$$2$$.unshift($parent$$20$$), $parent$$20$$ = $parent$$20$$.$_parent$;
    }
    return $parents$$2$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getParents", {$getParents$:$oj$$18$$.$CubeAxisValue$.prototype.$getParents$});
  $oj$$18$$.$CubeAxisValue$.prototype.getChildren = function $$oj$$18$$$$CubeAxisValue$$$getChildren$() {
    return this.$_children$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getChildren", {getChildren:$oj$$18$$.$CubeAxisValue$.prototype.getChildren});
  $oj$$18$$.$CubeAxisValue$.prototype.$getExtent$ = function $$oj$$18$$$$CubeAxisValue$$$$getExtent$$() {
    if (-1 < this.$_extent$) {
      return this.$_extent$;
    }
    if (this.$_children$ && 0 !== this.$_children$.length) {
      for (var $c$$37$$ = this.$_extent$ = 0;$c$$37$$ < this.getChildren().length;$c$$37$$++) {
        this.$_extent$ += this.getChildren()[$c$$37$$].$getExtent$();
      }
    } else {
      this.$_extent$ = 1;
    }
    return this.$_extent$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getExtent", {$getExtent$:$oj$$18$$.$CubeAxisValue$.prototype.$getExtent$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getStart$ = function $$oj$$18$$$$CubeAxisValue$$$$getStart$$() {
    if (-1 < this.$_start$) {
      return this.$_start$;
    }
    if (!this.$_parent$) {
      return 0;
    }
    for (var $start$$35$$ = this.$_parent$.$getStart$(), $currChild$$4$$ = this.$_parent$.$_getPrevChild$(this);$currChild$$4$$;) {
      $start$$35$$ += $currChild$$4$$.$getExtent$(), $currChild$$4$$ = this.$_parent$.$_getPrevChild$($currChild$$4$$);
    }
    return this.$_start$ = $start$$35$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getStart", {$getStart$:$oj$$18$$.$CubeAxisValue$.prototype.$getStart$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeAxisValue$$$$getValue$$() {
    return this.$_data$.value;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeAxisValue$.prototype.$getValue$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getLabel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLabel$$() {
    return this.$_data$.label ? this.$_data$.label : this.$getValue$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLabel", {$getLabel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLabel$});
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChild$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChild$$($key$$90_val$$43$$) {
    var $c$$38_childLevel$$ = this.$_getChildLevel$();
    if (null === $c$$38_childLevel$$) {
      return null;
    }
    if ($c$$38_childLevel$$.$isDataValue$()) {
      return this.$_getDataValueChild$($key$$90_val$$43$$);
    }
    if ($key$$90_val$$43$$ = $key$$90_val$$43$$[$c$$38_childLevel$$.attribute]) {
      for ($c$$38_childLevel$$ = 0;$c$$38_childLevel$$ < this.$_children$.length;$c$$38_childLevel$$++) {
        if (this.$_children$[$c$$38_childLevel$$].$getValue$() === $key$$90_val$$43$$) {
          return this.$_children$[$c$$38_childLevel$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getDataValueChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getDataValueChild$$($key$$91$$) {
    for (var $c$$39$$ = 0;$c$$39$$ < this.$_children$.length;$c$$39$$++) {
      var $val$$44$$ = this.$_children$[$c$$39$$].$getValue$();
      if ($key$$91$$.hasOwnProperty($val$$44$$) && $key$$91$$[$val$$44$$] === $val$$44$$) {
        return this.$_children$[$c$$39$$];
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getChildLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$_getChildLevel$$() {
    return this.$_children$ && 0 < this.$_children$.length ? this.$_children$[0].$getLevel$() : null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChildAt$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChildAt$$($index$$145$$) {
    return this.$_findChild$($index$$145$$, 0, this.$_children$.length - 1);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_findChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_findChild$$($index$$146$$, $start$$36$$, $end$$13$$) {
    if ($start$$36$$ > $end$$13$$) {
      return null;
    }
    var $mid$$1$$ = Math.floor(($start$$36$$ + $end$$13$$) / 2), $value$$215$$ = this.$_children$[$mid$$1$$], $valStart$$ = $value$$215$$.$getStart$();
    return $valStart$$ > $index$$146$$ ? this.$_findChild$($index$$146$$, $start$$36$$, $mid$$1$$ - 1) : $valStart$$ + $value$$215$$.$getExtent$() - 1 < $index$$146$$ ? this.$_findChild$($index$$146$$, $mid$$1$$ + 1, $end$$13$$) : $value$$215$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$AddNode$ = function $$oj$$18$$$$CubeAxisValue$$$$AddNode$$($newValue$$12_value$$216$$, $label$$7$$, $level$$29$$) {
    for (var $c$$40$$ = 0;$c$$40$$ < this.$_children$.length;$c$$40$$++) {
      if (this.$_children$[$c$$40$$].$getValue$() === $newValue$$12_value$$216$$) {
        return this.$_children$[$c$$40$$];
      }
    }
    $newValue$$12_value$$216$$ = new $oj$$18$$.$CubeAxisValue$($newValue$$12_value$$216$$, $label$$7$$, $level$$29$$, this);
    this.$_children$.push($newValue$$12_value$$216$$);
    return $newValue$$12_value$$216$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetHashCode$ = function $$oj$$18$$$$CubeAxisValue$$$$GetHashCode$$() {
    var $obj$$52$$ = {};
    $obj$$52$$[this.$getLevel$().attribute] = this.$getValue$();
    return $obj$$52$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getPrevChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getPrevChild$$($currChild$$5$$) {
    for (var $c$$41$$ = 0;$c$$41$$ < this.$_children$.length;$c$$41$$++) {
      if (this.$_children$[$c$$41$$] === $currChild$$5$$) {
        if (0 < $c$$41$$) {
          return this.$_children$[$c$$41$$ - 1];
        }
        break;
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxis$ = function $$oj$$18$$$$CubeAxis$$($levels$$2$$, $axis$$29_i$$289$$, $cube$$3$$) {
    this.Init();
    this.axis = $axis$$29_i$$289$$;
    this.$_levels$ = [];
    for ($axis$$29_i$$289$$ = 0;$axis$$29_i$$289$$ < $levels$$2$$.length;$axis$$29_i$$289$$++) {
      this.$_levels$.push($cube$$3$$.$GenerateLevel$($levels$$2$$[$axis$$29_i$$289$$], this));
    }
    this.$_cube$ = $cube$$3$$;
    this.$_values$ = new $oj$$18$$.$CubeAxisValue$(null, null, null, null);
  };
  $goog$exportPath_$$("CubeAxis", $oj$$18$$.$CubeAxis$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxis$, $oj$$18$$.$Object$, "oj.CubeAxis");
  $oj$$18$$.$CubeAxis$.prototype.Init = function $$oj$$18$$$$CubeAxis$$$Init$() {
    $oj$$18$$.$CubeAxis$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxis$.prototype.$getLevels$ = function $$oj$$18$$$$CubeAxis$$$$getLevels$$() {
    return this.$_levels$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getLevels", {$getLevels$:$oj$$18$$.$CubeAxis$.prototype.$getLevels$});
  $oj$$18$$.$CubeAxis$.prototype.$getExtent$ = function $$oj$$18$$$$CubeAxis$$$$getExtent$$() {
    return this.$_values$.$getExtent$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getExtent", {$getExtent$:$oj$$18$$.$CubeAxis$.prototype.$getExtent$});
  $oj$$18$$.$CubeAxis$.prototype.$getValues$ = function $$oj$$18$$$$CubeAxis$$$$getValues$$($index$$147$$) {
    for (var $values$$9$$ = [], $node$$42$$ = this.$_values$;$node$$42$$;) {
      ($node$$42$$ = $node$$42$$.$GetChildAt$($index$$147$$)) && $values$$9$$.push($node$$42$$);
    }
    return $values$$9$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getValues", {$getValues$:$oj$$18$$.$CubeAxis$.prototype.$getValues$});
  $oj$$18$$.$CubeAxis$.prototype.$getIndex$ = function $$oj$$18$$$$CubeAxis$$$$getIndex$$($key$$92_keyVal$$) {
    $key$$92_keyVal$$ = $key$$92_keyVal$$ ? JSON.parse($key$$92_keyVal$$) : {};
    for (var $node$$43$$ = this.$_values$, $lastNode$$ = null;$node$$43$$;) {
      $lastNode$$ = $node$$43$$, $node$$43$$ = $node$$43$$.$GetChild$($key$$92_keyVal$$);
    }
    return $lastNode$$ ? $lastNode$$.$getStart$() : -1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getIndex", {$getIndex$:$oj$$18$$.$CubeAxis$.prototype.$getIndex$});
  $oj$$18$$.$CubeAxis$.prototype.$GetCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetCubeKeys$$($index$$148$$, $keys$$20$$) {
    return this.$GetPartialCubeKeys$($index$$148$$, this.$getLevels$().length - 1, $keys$$20$$);
  };
  $oj$$18$$.$CubeAxis$.prototype.$GetPartialCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetPartialCubeKeys$$($index$$149_values$$10$$, $level$$30_stopLevel$$, $keys$$21$$) {
    $index$$149_values$$10$$ = this.$getValues$($index$$149_values$$10$$);
    $level$$30_stopLevel$$ = this.$getLevels$()[$level$$30_stopLevel$$];
    for (var $v$$1$$ = 0;$v$$1$$ < $index$$149_values$$10$$.length;$v$$1$$++) {
      var $val$$45$$ = $index$$149_values$$10$$[$v$$1$$];
      $val$$45$$.$getLevel$().$isDataValue$() ? $keys$$21$$.$AddDataValue$($val$$45$$.$getValue$()) : $keys$$21$$.$UpdateKeys$($val$$45$$);
      if ($val$$45$$.$getLevel$() === $level$$30_stopLevel$$) {
        break;
      }
    }
    return $keys$$21$$;
  };
  $oj$$18$$.$CubeAxis$.prototype.$ProcessRow$ = function $$oj$$18$$$$CubeAxis$$$$ProcessRow$$($row$$42$$, $keys$$22$$) {
    return this.$_cube$.$ProcessLevel$(this, 0, this.$_values$, $row$$42$$, $keys$$22$$, !0);
  };
  $oj$$18$$.$CubeCellSet$ = function $$oj$$18$$$$CubeCellSet$$($cube$$4$$, $cellRange$$4$$) {
    var $startRow$$2$$ = $cellRange$$4$$.row ? $cellRange$$4$$.row.start : 0, $rowCount$$6$$ = $cellRange$$4$$.row ? $cellRange$$4$$.row.count : 0, $startColumn$$2$$ = $cellRange$$4$$.column ? $cellRange$$4$$.column.start : 0, $colCount$$ = $cellRange$$4$$.column ? $cellRange$$4$$.column.count : 0;
    $oj$$18$$.$Assert$.$assertNumber$($startRow$$2$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($rowCount$$6$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($startColumn$$2$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($colCount$$, null);
    this.$_cube$ = $cube$$4$$;
    this.$_starts$ = {row:$startRow$$2$$, column:$startColumn$$2$$};
    this.$_values$ = this.$_cube$.$getValues$([{start:$startColumn$$2$$, count:$colCount$$}, {start:$startRow$$2$$, count:$rowCount$$6$$}]);
    $colCount$$ = this.$_values$.length;
    0 < $colCount$$ && ($rowCount$$6$$ = this.$_values$[0].length);
    this.$_counts$ = {row:$rowCount$$6$$, column:$colCount$$};
  };
  $goog$exportPath_$$("CubeCellSet", $oj$$18$$.$CubeCellSet$, $oj$$18$$);
  $oj$$18$$.$CubeCellSet$.prototype.getData = function $$oj$$18$$$$CubeCellSet$$$getData$($cell$$1_indexes$$16$$) {
    return($cell$$1_indexes$$16$$ = this.$_values$[$cell$$1_indexes$$16$$.column - this.$_starts$.column][$cell$$1_indexes$$16$$.row - this.$_starts$.row]) ? $cell$$1_indexes$$16$$.$getValue$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getData", {getData:$oj$$18$$.$CubeCellSet$.prototype.getData});
  $oj$$18$$.$CubeCellSet$.prototype.getMetadata = function $$oj$$18$$$$CubeCellSet$$$getMetadata$($indexes$$17$$) {
    var $obj$$53$$ = {keys:{}};
    $obj$$53$$.keys.row = this.$_getAxisMetadata$($indexes$$17$$, "row", 2);
    $obj$$53$$.keys.column = this.$_getAxisMetadata$($indexes$$17$$, "column", 1);
    return $obj$$53$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeCellSet$.prototype.getMetadata});
  $oj$$18$$.$CubeCellSet$.prototype.$_getAxisMetadata$ = function $$oj$$18$$$$CubeCellSet$$$$_getAxisMetadata$$($indexes$$18$$, $axis$$30$$, $keys$$23_len$$18$$) {
    var $axes$$3$$ = this.$_cube$.$getAxes$();
    return void 0 !== $indexes$$18$$[$axis$$30$$] && $axes$$3$$.length >= $keys$$23_len$$18$$ ? ($keys$$23_len$$18$$ = new $oj$$18$$.$CubeKeys$, $keys$$23_len$$18$$ = $axes$$3$$[$oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$30$$)].$GetCubeKeys$($indexes$$18$$[$axis$$30$$], $keys$$23_len$$18$$), $keys$$23_len$$18$$.$GetHashCodes$()[0].key) : null;
  };
  $oj$$18$$.$CubeCellSet$.prototype.$getStart$ = function $$oj$$18$$$$CubeCellSet$$$$getStart$$($axis$$31$$) {
    return this.$_starts$[$axis$$31$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getStart", {$getStart$:$oj$$18$$.$CubeCellSet$.prototype.$getStart$});
  $oj$$18$$.$CubeCellSet$.prototype.$getCount$ = function $$oj$$18$$$$CubeCellSet$$$$getCount$$($axis$$32$$) {
    return this.$_counts$[$axis$$32$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getCount", {$getCount$:$oj$$18$$.$CubeCellSet$.prototype.$getCount$});
  $oj$$18$$.$CubeDataGridDataSource$ = function $$oj$$18$$$$CubeDataGridDataSource$$($cube$$5$$) {
    $oj$$18$$.$CubeDataGridDataSource$.$superclass$.constructor.call(this, $cube$$5$$);
  };
  $goog$exportPath_$$("CubeDataGridDataSource", $oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$.$DataGridDataSource$, "oj.CubeDataGridDataSource");
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$setCube$$($cube$$6$$) {
    this.data = $cube$$6$$;
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setCube", {$setCube$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.setPage = function $$oj$$18$$$$CubeDataGridDataSource$$$setPage$($indices$$6$$) {
    this.data.setPage($indices$$6$$);
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setPage", {setPage:$oj$$18$$.$CubeDataGridDataSource$.prototype.setPage});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_fireRefresh$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_fireRefresh$$() {
    this.handleEvent("change", {source:this, operation:"refresh"});
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$getCount$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$getCount$$($axis$$33_axisObj$$) {
    return($axis$$33_axisObj$$ = this.$_getAxis$($axis$$33_axisObj$$)) ? $axis$$33_axisObj$$.$getExtent$() : 0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$getCount$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$getCountPrecision$$() {
    return "exact";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$fetchHeaders$$($headerRange$$8$$, $callbacks$$34$$, $callbackObjects$$20$$) {
    var $cubeheaders$$ = new $oj$$18$$.$CubeHeaderSet$(this.$_getAxis$($headerRange$$8$$.axis), this.data, $headerRange$$8$$.start, $headerRange$$8$$.count);
    $callbacks$$34$$.success.call($callbackObjects$$20$$ ? $callbackObjects$$20$$.success : void 0, $cubeheaders$$, $headerRange$$8$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$fetchCells$$($cellRange$$5$$, $callbacks$$35$$, $callbackObjects$$21$$) {
    for (var $cubecells_obj$$54$$ = {}, $i$$290$$ = 0;$i$$290$$ < $cellRange$$5$$.length;$i$$290$$++) {
      var $start$$37$$ = void 0 === $cellRange$$5$$[$i$$290$$].start ? 0 : $cellRange$$5$$[$i$$290$$].start;
      if ("row" === $cellRange$$5$$[$i$$290$$].axis) {
        var $count$$32$$ = void 0 === $cellRange$$5$$[$i$$290$$].count ? this.data.$getAxes$()[1].$getExtent$() : $cellRange$$5$$[$i$$290$$].count;
        $cubecells_obj$$54$$.row = {start:$start$$37$$, count:$count$$32$$};
      }
      "column" === $cellRange$$5$$[$i$$290$$].axis && ($count$$32$$ = void 0 === $cellRange$$5$$[$i$$290$$].count ? this.data.$getAxes$()[0].$getExtent$() : $cellRange$$5$$[$i$$290$$].count, $cubecells_obj$$54$$.column = {start:$start$$37$$, count:$count$$32$$});
    }
    $cubecells_obj$$54$$ = new $oj$$18$$.$CubeCellSet$(this.data, $cubecells_obj$$54$$);
    $callbacks$$35$$.success.call($callbackObjects$$21$$ ? $callbackObjects$$21$$.success : void 0, $cubecells_obj$$54$$, $cellRange$$5$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.keys = function $$oj$$18$$$$CubeDataGridDataSource$$$keys$($indexes$$19$$) {
    var $retObj$$13$$ = {}, $retObj$$13$$ = this.$_getKey$($indexes$$19$$, "row", $retObj$$13$$), $retObj$$13$$ = this.$_getKey$($indexes$$19$$, "column", $retObj$$13$$);
    return Promise.resolve($retObj$$13$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.keys", {keys:$oj$$18$$.$CubeDataGridDataSource$.prototype.keys});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getKey$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getKey$$($indexes$$20_item$$8$$, $axis$$35$$, $retObj$$14$$) {
    var $axisObj$$1$$ = this.$_getAxis$($axis$$35$$);
    $indexes$$20_item$$8$$ = $indexes$$20_item$$8$$[$axis$$35$$];
    var $keys$$24$$ = new $oj$$18$$.$CubeKeys$, $keys$$24$$ = $axisObj$$1$$ ? $axisObj$$1$$.$GetCubeKeys$($indexes$$20_item$$8$$, $keys$$24$$) : "";
    $retObj$$14$$[$axis$$35$$] = $keys$$24$$.$GetHashCodes$()[0].key;
    return $retObj$$14$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$indexes$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$indexes$$($keys$$25$$) {
    var $retObj$$15$$ = {}, $retObj$$15$$ = this.$_getIndex$($keys$$25$$, "row", $retObj$$15$$), $retObj$$15$$ = this.$_getIndex$($keys$$25$$, "column", $retObj$$15$$);
    return Promise.resolve($retObj$$15$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$indexes$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getIndex$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getIndex$$($keys$$26$$, $axis$$36$$, $retObj$$16$$) {
    $retObj$$16$$[$axis$$36$$] = this.$_getAxis$($axis$$36$$).$getIndex$($keys$$26$$[$axis$$36$$]);
    return $retObj$$16$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.sort = function $$oj$$18$$$$CubeDataGridDataSource$$$sort$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.sort", {sort:$oj$$18$$.$CubeDataGridDataSource$.prototype.sort});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.move = function $$oj$$18$$$$CubeDataGridDataSource$$$move$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.move", {move:$oj$$18$$.$CubeDataGridDataSource$.prototype.move});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$moveOK$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$moveOK$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability = function $$oj$$18$$$$CubeDataGridDataSource$$$getCapability$($feature$$15$$) {
    switch($feature$$15$$) {
      case "sort":
        return "none";
      case "move":
        return "none";
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability});
  $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$ = function $$oj$$18$$$$CubeDataGridDataSource$$$_convertAxes$$($axis$$37$$) {
    return "row" === $axis$$37$$ ? 1 : 0;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getAxis$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getAxis$$($axis$$38_axisNum$$) {
    $axis$$38_axisNum$$ = $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$38_axisNum$$);
    var $axes$$4$$ = this.data.$getAxes$();
    return $axes$$4$$.length > $axis$$38_axisNum$$ ? $axes$$4$$[$axis$$38_axisNum$$] : null;
  };
  $oj$$18$$.$CubeDataValue$ = function $$oj$$18$$$$CubeDataValue$$($value$$217$$, $indices$$7$$, $aggType$$2$$, $rows$$9$$, $square$$) {
    this.Init();
    this.$_data$ = {};
    this.$_data$.value = $value$$217$$;
    this.$_data$.$indices$ = $indices$$7$$;
    this.$_data$.$aggType$ = $aggType$$2$$;
    this.$_data$.rows = $rows$$9$$;
    this.$_data$.$square$ = $square$$;
  };
  $goog$exportPath_$$("CubeDataValue", $oj$$18$$.$CubeDataValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataValue$, $oj$$18$$.$Object$, "oj.CubeDataValue");
  $oj$$18$$.$CubeDataValue$.prototype.Init = function $$oj$$18$$$$CubeDataValue$$$Init$() {
    $oj$$18$$.$CubeDataValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeDataValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeDataValue$$$$getValue$$() {
    switch(this.$_data$.$aggType$) {
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return Math.sqrt(this.$_getVariance$());
      case $oj$$18$$.$CubeAggType$.VARIANCE:
        return this.$_getVariance$();
      default:
        return this.$_data$.value;
    }
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeDataValue$.prototype.$getValue$});
  $oj$$18$$.$CubeDataValue$.prototype.$getIndices$ = function $$oj$$18$$$$CubeDataValue$$$$getIndices$$() {
    return this.$_data$.$indices$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getIndices", {$getIndices$:$oj$$18$$.$CubeDataValue$.prototype.$getIndices$});
  $oj$$18$$.$CubeDataValue$.prototype.$getRows$ = function $$oj$$18$$$$CubeDataValue$$$$getRows$$() {
    return this.$_data$.rows;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getRows", {$getRows$:$oj$$18$$.$CubeDataValue$.prototype.$getRows$});
  $oj$$18$$.$CubeDataValue$.prototype.$getAggregation$ = function $$oj$$18$$$$CubeDataValue$$$$getAggregation$$() {
    return this.$_data$.$aggType$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getAggregation", {$getAggregation$:$oj$$18$$.$CubeDataValue$.prototype.$getAggregation$});
  $oj$$18$$.$CubeDataValue$.prototype.$_getVariance$ = function $$oj$$18$$$$CubeDataValue$$$$_getVariance$$() {
    if (isNaN(this.$_data$.$square$)) {
      return NaN;
    }
    var $count$$33$$ = this.$_data$.rows.length;
    return 1 < $count$$33$$ ? this.$_data$.$square$ / ($count$$33$$ - 1) : 0;
  };
  $oj$$18$$.$CubeHeaderSet$ = function $$oj$$18$$$$CubeHeaderSet$$($axis$$39$$, $cube$$7$$, $start$$38$$, $count$$34$$) {
    this.$_cube$ = $cube$$7$$;
    this.$_axis$ = $axis$$39$$;
    this.$_start$ = void 0 === $start$$38$$ ? 0 : $start$$38$$;
    this.$_count$ = void 0 === $count$$34$$ ? this.$_axis$.$getExtent$() : Math.min($count$$34$$, this.$_axis$.$getExtent$() - $start$$38$$);
    this.$_end$ = $start$$38$$ + $count$$34$$ - 1;
  };
  $goog$exportPath_$$("CubeHeaderSet", $oj$$18$$.$CubeHeaderSet$, $oj$$18$$);
  $oj$$18$$.$CubeHeaderSet$.prototype.getData = function $$oj$$18$$$$CubeHeaderSet$$$getData$($index$$150$$, $level$$31$$) {
    var $val$$46$$ = this.$_getValue$($index$$150$$, $level$$31$$);
    return $val$$46$$ ? $val$$46$$.$getLabel$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getData", {getData:$oj$$18$$.$CubeHeaderSet$.prototype.getData});
  $oj$$18$$.$CubeHeaderSet$.prototype.getMetadata = function $$oj$$18$$$$CubeHeaderSet$$$getMetadata$($index$$151$$, $level$$32$$) {
    var $hash$$6_keys$$27$$ = new $oj$$18$$.$CubeKeys$, $hash$$6_keys$$27$$ = this.$_axis$.$GetPartialCubeKeys$($index$$151$$, $level$$32$$, $hash$$6_keys$$27$$);
    return($hash$$6_keys$$27$$ = $hash$$6_keys$$27$$.$GetHashCodes$()) && 0 < $hash$$6_keys$$27$$.length ? {key:$hash$$6_keys$$27$$[0].key} : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeHeaderSet$.prototype.getMetadata});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getLevelCount$ = function $$oj$$18$$$$CubeHeaderSet$$$$getLevelCount$$() {
    return this.$_axis$.$getLevels$().length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$18$$.$CubeHeaderSet$.prototype.$getLevelCount$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getExtent$ = function $$oj$$18$$$$CubeHeaderSet$$$$getExtent$$($index$$152$$, $level$$33$$) {
    var $start$$39_val$$47$$ = this.$_getValue$($index$$152$$, $level$$33$$), $extent$$ = $start$$39_val$$47$$.$getExtent$(), $start$$39_val$$47$$ = $start$$39_val$$47$$.$getStart$(), $end$$14$$ = $start$$39_val$$47$$ + $extent$$ - 1, $after$$ = $index$$152$$ < $start$$39_val$$47$$ + $extent$$ - 1;
    $start$$39_val$$47$$ < this.$_start$ && ($extent$$ -= this.$_start$ - $start$$39_val$$47$$);
    $end$$14$$ > this.$_end$ && ($extent$$ -= $end$$14$$ - this.$_end$);
    return{extent:$extent$$, more:{before:$index$$152$$ > $start$$39_val$$47$$, after:$after$$}};
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getExtent", {$getExtent$:$oj$$18$$.$CubeHeaderSet$.prototype.$getExtent$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getDepth$ = function $$oj$$18$$$$CubeHeaderSet$$$$getDepth$$($index$$153$$, $level$$34$$) {
    return this.$_getValue$($index$$153$$, $level$$34$$).$getDepth$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getDepth", {$getDepth$:$oj$$18$$.$CubeHeaderSet$.prototype.$getDepth$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getCount$ = function $$oj$$18$$$$CubeHeaderSet$$$$getCount$$() {
    return this.$_count$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getCount", {$getCount$:$oj$$18$$.$CubeHeaderSet$.prototype.$getCount$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getStart$ = function $$oj$$18$$$$CubeHeaderSet$$$$getStart$$() {
    return this.$_start$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getStart", {$getStart$:$oj$$18$$.$CubeHeaderSet$.prototype.$getStart$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$_getValue$ = function $$oj$$18$$$$CubeHeaderSet$$$$_getValue$$($index$$154$$, $level$$35$$) {
    void 0 === $level$$35$$ && ($level$$35$$ = 0);
    var $values$$11$$ = this.$_axis$.$getValues$($index$$154$$);
    return $values$$11$$ && $values$$11$$.length > $level$$35$$ ? $values$$11$$[$level$$35$$] : null;
  };
  $oj$$18$$.$CubeKeys$ = function $$oj$$18$$$$CubeKeys$$() {
    this.$_key$ = [];
    this.$_data$ = [];
  };
  $oj$$18$$.$CubeKeys$.prototype.$UpdateKeys$ = function $$oj$$18$$$$CubeKeys$$$$UpdateKeys$$($node$$44$$) {
    this.$_key$.push($node$$44$$);
  };
  $oj$$18$$.$CubeKeys$.prototype.$AddDataValue$ = function $$oj$$18$$$$CubeKeys$$$$AddDataValue$$($name$$104$$, $value$$218$$) {
    this.$_data$.push({name:$name$$104$$, value:$value$$218$$});
  };
  $oj$$18$$.$CubeKeys$.prototype.$GetHashCodes$ = function $$oj$$18$$$$CubeKeys$$$$GetHashCodes$$() {
    var $codes$$ = [], $keyHash$$ = this.$_buildKeyHash$();
    if (0 === this.$_data$.length) {
      $codes$$.push({key:JSON.stringify($keyHash$$)});
    } else {
      for (var $d$$6$$ = 0;$d$$6$$ < this.$_data$.length;$d$$6$$++) {
        var $copy$$ = $$$$17$$.extend(!0, {}, $keyHash$$);
        $copy$$[this.$_data$[$d$$6$$].name] = this.$_data$[$d$$6$$].name;
        $codes$$.push({key:JSON.stringify($copy$$), $dataValue$:this.$_data$[$d$$6$$].name, value:this.$_data$[$d$$6$$].value});
      }
    }
    return $codes$$;
  };
  $oj$$18$$.$CubeKeys$.prototype.$_buildKeyHash$ = function $$oj$$18$$$$CubeKeys$$$$_buildKeyHash$$() {
    for (var $keyHash$$1$$ = {}, $k$$10$$ = 0;$k$$10$$ < this.$_key$.length;$k$$10$$++) {
      var $hc$$ = this.$_key$[$k$$10$$].$GetHashCode$(), $p$$6$$;
      for ($p$$6$$ in $hc$$) {
        $hc$$.hasOwnProperty($p$$6$$) && ($keyHash$$1$$[$p$$6$$] = $hc$$[$p$$6$$]);
      }
    }
    return $keyHash$$1$$;
  };
  $oj$$18$$.$CubeLevel$ = function $$oj$$18$$$$CubeLevel$$($attribute$$4$$, $axis$$40$$, $dataValue$$1$$) {
    this.Init();
    this.attribute = $attribute$$4$$;
    this.$_axisObj$ = $axis$$40$$;
    this.axis = $axis$$40$$.axis;
    this.$_dataValue$ = $dataValue$$1$$;
  };
  $goog$exportPath_$$("CubeLevel", $oj$$18$$.$CubeLevel$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeLevel$, $oj$$18$$.$Object$, "oj.CubeLevel");
  $oj$$18$$.$CubeLevel$.prototype.Init = function $$oj$$18$$$$CubeLevel$$$Init$() {
    $oj$$18$$.$CubeLevel$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeLevel$.prototype.$getValue$ = function $$oj$$18$$$$CubeLevel$$$$getValue$$($index$$155_values$$12$$) {
    if ($index$$155_values$$12$$ = this.$_axisObj$.$getValues$($index$$155_values$$12$$)) {
      for (var $v$$2$$ = 0;$v$$2$$ < $index$$155_values$$12$$.length;$v$$2$$++) {
        if ($index$$155_values$$12$$[$v$$2$$].$getLevel$() === this) {
          return $index$$155_values$$12$$[$v$$2$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.getValue", {$getValue$:$oj$$18$$.$CubeLevel$.prototype.$getValue$});
  $oj$$18$$.$CubeLevel$.prototype.$isDataValue$ = function $$oj$$18$$$$CubeLevel$$$$isDataValue$$() {
    return this.$_dataValue$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.isDataValue", {$isDataValue$:$oj$$18$$.$CubeLevel$.prototype.$isDataValue$});
  $oj$$18$$.$CubeLevel$.prototype.$_dataValue$ = !1;
  $oj$$18$$.$CubeLevel$.prototype.$_axisObj$ = null;
  $oj$$18$$.$DataColumnCube$ = function $$oj$$18$$$$DataColumnCube$$($rowset$$1$$, $layout$$3$$, $dataValues$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$;
    this.$_valueAttr$ = $dataValues$$.valueAttr;
    this.$_labelAttr$ = $dataValues$$.labelAttr;
    var $defAgg$$ = $dataValues$$.defaultAggregation;
    this.$_defaultAggregation$ = $defAgg$$ ? $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$($defAgg$$) : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM};
    this.$_aggregation$ = $dataValues$$.aggregation;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataColumnCube$.$superclass$.constructor.call(this, $rowset$$1$$, $layout$$3$$);
  };
  $goog$exportPath_$$("DataColumnCube", $oj$$18$$.$DataColumnCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataColumnCube$, $oj$$18$$.$Cube$, "oj.DataColumnCube");
  $oj$$18$$.$DataColumnCube$.prototype.Init = function $$oj$$18$$$$DataColumnCube$$$Init$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataColumnCube$$$$BuildCube$$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataColumnCube$$$$GetAggType$$($dataValue$$2$$) {
    return this.$_dataValueAggType$[$dataValue$$2$$] ? this.$_dataValueAggType$[$dataValue$$2$$] : this.$_defaultAggregation$;
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateCube$$($layout$$4$$) {
    return new $oj$$18$$.$DataColumnCube$(null, $layout$$4$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateLevel$$($level$$36$$, $axis$$41$$) {
    return $level$$36$$.attribute === this.$_labelAttr$ ? new $oj$$18$$.$CubeLevel$($level$$36$$.attribute, $axis$$41$$, !0) : new $oj$$18$$.$CubeLevel$($level$$36$$.attribute, $axis$$41$$, !1);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataColumnCube$$$$ProcessLevel$$($axis$$42$$, $levelNum$$1$$, $currNode$$2_node$$45$$, $row$$44$$, $keys$$28$$, $addKeys$$1$$) {
    if ($levelNum$$1$$ >= $axis$$42$$.$getLevels$().length) {
      return $keys$$28$$;
    }
    var $level$$37$$ = $axis$$42$$.$getLevels$()[$levelNum$$1$$], $value$$219$$ = $row$$44$$[$level$$37$$.attribute];
    $currNode$$2_node$$45$$ = $currNode$$2_node$$45$$.$AddNode$($value$$219$$, null, $level$$37$$);
    $level$$37$$.$isDataValue$() ? $keys$$28$$.$AddDataValue$($value$$219$$, $row$$44$$[this.$_valueAttr$]) : $keys$$28$$.$UpdateKeys$($currNode$$2_node$$45$$);
    return this.$ProcessLevel$($axis$$42$$, $levelNum$$1$$ + 1, $currNode$$2_node$$45$$, $row$$44$$, $keys$$28$$, $addKeys$$1$$);
  };
  $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$ = function $$oj$$18$$$$DataColumnCube$$$_getDefaultAgg$$($agg$$) {
    return $oj$$18$$.$StringUtils$.$isString$($agg$$) ? {$aggregation$:$agg$$} : {$aggregation$:$agg$$.aggregation, $callback$:$agg$$.callback};
  };
  $oj$$18$$.$DataColumnCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataColumnCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    if (this.$_aggregation$) {
      for (var $i$$291$$ = 0;$i$$291$$ < this.$_aggregation$.length;$i$$291$$++) {
        var $dv$$ = this.$_aggregation$[$i$$291$$], $agg$$1$$ = $dv$$.aggregation;
        this.$_dataValueAggType$[$dv$$.value] = $agg$$1$$ ? {$aggregation$:$agg$$1$$, $callback$:$dv$$.callback} : this.$_defaultAggregation$;
      }
    }
  };
  $oj$$18$$.$DataValueAttributeCube$ = function $$oj$$18$$$$DataValueAttributeCube$$($rowset$$2$$, $layout$$5$$, $dataValues$$1$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$1$$;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.constructor.call(this, $rowset$$2$$, $layout$$5$$);
  };
  $goog$exportPath_$$("DataValueAttributeCube", $oj$$18$$.$DataValueAttributeCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataValueAttributeCube$, $oj$$18$$.$Cube$, "oj.DataValueAttributeCube");
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_rows$ = null;
  $oj$$18$$.$DataValueAttributeCube$.prototype.Init = function $$oj$$18$$$$DataValueAttributeCube$$$Init$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$BuildCube$$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GetAggType$$($dataValue$$3$$) {
    return this.$_dataValueAggType$[$dataValue$$3$$];
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateLevel$$($level$$38$$, $axis$$43$$) {
    return $level$$38$$.dataValue ? new $oj$$18$$.$CubeLevel$(null, $axis$$43$$, !0) : new $oj$$18$$.$CubeLevel$($level$$38$$.attribute, $axis$$43$$, !1);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateCube$$($layout$$6$$) {
    return new $oj$$18$$.$DataValueAttributeCube$(null, $layout$$6$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$ProcessLevel$$($axis$$44$$, $levelNum$$2$$, $currNode$$3_node$$46$$, $row$$45$$, $keys$$29$$, $addKeys$$2$$) {
    if ($levelNum$$2$$ >= $axis$$44$$.$getLevels$().length) {
      return $keys$$29$$;
    }
    var $level$$39$$ = $axis$$44$$.$getLevels$()[$levelNum$$2$$];
    if ($level$$39$$.$isDataValue$()) {
      return this.$_processDataValue$($axis$$44$$, $currNode$$3_node$$46$$, $row$$45$$, $levelNum$$2$$, $keys$$29$$);
    }
    $currNode$$3_node$$46$$ = $currNode$$3_node$$46$$.$AddNode$($row$$45$$[$level$$39$$.attribute], null, $level$$39$$);
    $addKeys$$2$$ && $keys$$29$$.$UpdateKeys$($currNode$$3_node$$46$$);
    return this.$ProcessLevel$($axis$$44$$, $levelNum$$2$$ + 1, $currNode$$3_node$$46$$, $row$$45$$, $keys$$29$$, $addKeys$$2$$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_processDataValue$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_processDataValue$$($axis$$45$$, $node$$47$$, $row$$46$$, $levelNum$$3$$, $keys$$30$$) {
    for (var $dsKeysAdded$$ = !0, $d$$7$$ = 0;$d$$7$$ < this.$_dataValues$.length;$d$$7$$++) {
      var $dvAttr$$ = this.$_dataValues$[$d$$7$$].attribute, $currNode$$4_dvLabel$$ = this.$_dataValues$[$d$$7$$].label;
      $row$$46$$.hasOwnProperty($dvAttr$$) && ($currNode$$4_dvLabel$$ = $node$$47$$.$AddNode$($dvAttr$$, $currNode$$4_dvLabel$$, $axis$$45$$.$getLevels$()[$levelNum$$3$$]), $keys$$30$$.$AddDataValue$($dvAttr$$, $row$$46$$[$dvAttr$$]), this.$ProcessLevel$($axis$$45$$, $levelNum$$3$$ + 1, $currNode$$4_dvLabel$$, $row$$46$$, $keys$$30$$, $dsKeysAdded$$), $dsKeysAdded$$ = !1);
    }
    return $keys$$30$$;
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    for (var $i$$292$$ = 0;$i$$292$$ < this.$_dataValues$.length;$i$$292$$++) {
      var $dv$$1$$ = this.$_dataValues$[$i$$292$$];
      this.$_dataValueAggType$[$dv$$1$$.attribute] = $dv$$1$$.aggregation ? {$aggregation$:$dv$$1$$.aggregation, $callback$:$dv$$1$$.callback} : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM, $callback$:$dv$$1$$.callback};
    }
  };
});
