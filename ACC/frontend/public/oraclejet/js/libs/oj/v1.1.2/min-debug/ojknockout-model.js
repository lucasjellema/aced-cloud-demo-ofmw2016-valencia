/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$36$$, $ko$$4$$) {
  $oj$$36$$.$KnockoutUtils$ = function $$oj$$36$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$36$$.$KnockoutUtils$, $oj$$36$$);
  $oj$$36$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$36$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$36$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$36$$.$KnockoutUtils$.$subscriptionProp$ = "oj.collectionSubscription";
  $oj$$36$$.$KnockoutUtils$.$updatingCollectionFunc$ = "oj.collectionUpdatingFunc";
  $oj$$36$$.$KnockoutUtils$.map = function $$oj$$36$$$$KnockoutUtils$$map$($m$$23$$, $callback$$104$$, $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$256$$) {
        $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] || $m$$23$$.set($argProp$$, $value$$256$$);
      };
    }
    var $koObject$$, $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$, $converted_index$$222_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$23$$ instanceof $oj$$36$$.$Collection$) {
      $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ = Array($m$$23$$.$_getLength$());
      $koObject$$ = $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$ ? $ko$$4$$.observableArray($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$) : $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$;
      $oj$$36$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$23$$);
      if ($array$$15_data$$154_updateObservable_updateObservableArrayRemove$$) {
        for ($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ = 0;$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ < $m$$23$$.$_modelIndices$.length;$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$222_updateObservableArrayReset$$ = $m$$23$$.$_modelIndices$[$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$], $koObject$$()[$converted_index$$222_updateObservableArrayReset$$] = $oj$$36$$.$KnockoutUtils$.map($m$$23$$.$_atInternal$($converted_index$$222_updateObservableArrayReset$$, null, !0, !1), $callback$$104$$);
        }
      } else {
        for ($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ = 0;$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ < $m$$23$$.$_modelIndices$.length;$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$222_updateObservableArrayReset$$ = $m$$23$$.$_modelIndices$[$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$], $koObject$$[$converted_index$$222_updateObservableArrayReset$$] = $oj$$36$$.$KnockoutUtils$.map($m$$23$$.$_atInternal$($converted_index$$222_updateObservableArrayReset$$, null, !0, !1), $callback$$104$$);
        }
      }
      $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ = function $$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$$($changes$$7$$) {
        var $i$$349$$;
        try {
          if (!$koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$36$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$349$$ = 0;$i$$349$$ < $changes$$7$$.length;$i$$349$$++) {
              var $index$$223$$ = $changes$$7$$[$i$$349$$].index, $model$$70$$ = $oj$$36$$.$KnockoutUtils$.$_getModel$($changes$$7$$[$i$$349$$].value), $status$$29$$ = $changes$$7$$[$i$$349$$].status;
              "added" === $status$$29$$ ? $index$$223$$ >= $m$$23$$.length - 1 ? $m$$23$$.add($model$$70$$) : $m$$23$$.add($model$$70$$, {at:$index$$223$$}) : "deleted" === $status$$29$$ && $m$$23$$.$_removeInternal$($model$$70$$, $index$$223$$);
            }
            $m$$23$$.comparator && ($koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$113$$, $b$$72$$) {
              return $oj$$36$$.$KnockoutUtils$.$_callSort$($a$$113$$, $b$$72$$, $m$$23$$.comparator, $m$$23$$, this);
            }), $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$99$$) {
          throw $e$$99$$;
        } finally {
          $koObject$$[$oj$$36$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && ($koObject$$[$oj$$36$$.$KnockoutUtils$.$updatingCollectionFunc$] = $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$, $koObject$$[$oj$$36$$.$KnockoutUtils$.$subscriptionProp$] = $koObject$$.subscribe($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$, null, "arrayChange"));
      $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$154_updateObservable_updateObservableArrayRemove$$$($model$$71$$, $collection$$38$$, $options$$340$$) {
        var $index$$224$$;
        try {
          !$koObject$$[$oj$$36$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$38$$ instanceof $oj$$36$$.$Collection$ && ($koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$224$$ = $options$$340$$.index, $koObject$$.splice($index$$224$$, 1));
        } catch ($e$$100$$) {
          throw $e$$100$$;
        } finally {
          $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ = function $$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$$($model$$72$$, $collection$$39$$, $options$$341$$) {
        var $index$$225$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$36$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$39$$ instanceof $oj$$36$$.$Collection$ && ($koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$225$$ = $collection$$39$$.$_localIndexOf$($model$$72$$), void 0 !== $index$$225$$ && -1 < $index$$225$$)) {
            if ($newObservable$$ = $oj$$36$$.$KnockoutUtils$.map($model$$72$$, $callback$$104$$), $options$$341$$.fillIn) {
              for (var $i$$350$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$350$$ < $index$$225$$;$i$$350$$++) {
                $koObject$$.splice($i$$350$$, 0, $oj$$36$$.$KnockoutUtils$.map($collection$$39$$.$_atInternal$($i$$350$$, null, !0, !1), $callback$$104$$));
              }
              $koObject$$.splice($index$$225$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$225$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$101$$) {
          throw $e$$101$$;
        } finally {
          $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_index$$222_updateObservableArrayReset$$ = function $$converted_index$$222_updateObservableArrayReset$$$($collection$$40$$) {
        try {
          !$koObject$$[$oj$$36$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$40$$ instanceof $oj$$36$$.$Collection$ && ($koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$4$$.isObservable($koObject$$) ? ($koObject$$[$oj$$36$$.$KnockoutUtils$.$subscriptionProp$] && $koObject$$[$oj$$36$$.$KnockoutUtils$.$subscriptionProp$].dispose(), $koObject$$.removeAll(), $koObject$$[$oj$$36$$.$KnockoutUtils$.$updatingCollectionFunc$] && $koObject$$.subscribe($koObject$$[$oj$$36$$.$KnockoutUtils$.$updatingCollectionFunc$], 
          null, "arrayChange")) : $koObject$$ = []);
        } catch ($e$$102$$) {
          throw $e$$102$$;
        } finally {
          $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$41$$) {
        try {
          !$koObject$$[$oj$$36$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$41$$ instanceof $oj$$36$$.$Collection$ && ($koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$114$$, $b$$73$$) {
            return $oj$$36$$.$KnockoutUtils$.$_callSort$($a$$114$$, $b$$73$$, $m$$23$$.comparator, $collection$$41$$, this);
          }));
        } catch ($e$$103$$) {
          throw $e$$103$$;
        } finally {
          $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$23$$.$OnInternal$($oj$$36$$.$Events$.$EventType$.ADD, $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$23$$.$OnInternal$($oj$$36$$.$Events$.$EventType$.REMOVE, $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$23$$.$OnInternal$($oj$$36$$.$Events$.$EventType$.RESET, $converted_index$$222_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$23$$.$OnInternal$($oj$$36$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$23$$) {
        return;
      }
      $koObject$$ = {};
      $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$ = $m$$23$$.attributes;
      $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$ in $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$) {
        $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$) && ($converted_index$$222_updateObservableArrayReset$$ = $ko$$4$$.observable($m$$23$$.get($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$] = $converted_index$$222_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = 
        $_makeUpdateModel$$($i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$), $updateModel_updateObservableArraySort$$.$_prop$ = $i$$348_prealloc_prop$$66_updateCollection_updateObservableArrayAdd$$, $converted_index$$222_updateObservableArrayReset$$.subscribe && $converted_index$$222_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$154_updateObservable_updateObservableArrayRemove$$$($model$$73$$) {
        var $attrs$$23$$, $prop$$67$$;
        try {
          for ($prop$$67$$ in $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$23$$ = $model$$73$$.$changedAttributes$(), $attrs$$23$$) {
            if ($attrs$$23$$.hasOwnProperty($prop$$67$$)) {
              $koObject$$[$prop$$67$$]($model$$73$$.get($prop$$67$$));
            }
          }
        } catch ($e$$104$$) {
          throw $e$$104$$;
        } finally {
          $koObject$$[$oj$$36$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$23$$.$OnInternal$($oj$$36$$.$Events$.$EventType$.CHANGE, $array$$15_data$$154_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$36$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$23$$);
      $callback$$104$$ && $callback$$104$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$36$$.$KnockoutUtils$.map, $oj$$36$$);
  $oj$$36$$.$KnockoutUtils$.$_getModel$ = function $$oj$$36$$$$KnockoutUtils$$$_getModel$$($val$$52$$) {
    return $val$$52$$ instanceof $oj$$36$$.$Model$ ? $val$$52$$ : $val$$52$$.hasOwnProperty($oj$$36$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$52$$[$oj$$36$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$52$$;
  };
  $oj$$36$$.$KnockoutUtils$.$_callSort$ = function $$oj$$36$$$$KnockoutUtils$$$_callSort$$($a$$115$$, $b$$74$$, $comparator$$15$$, $collection$$42$$, $caller$$8$$) {
    return $oj$$36$$.$Collection$.$SortFunc$($oj$$36$$.$KnockoutUtils$.$_getModel$($a$$115$$), $oj$$36$$.$KnockoutUtils$.$_getModel$($b$$74$$), $comparator$$15$$, $collection$$42$$, $caller$$8$$);
  };
  $oj$$36$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$36$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$6$$, $value$$257$$) {
    Object.defineProperty($object$$6$$, $oj$$36$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$257$$, enumerable:!1});
  };
});
