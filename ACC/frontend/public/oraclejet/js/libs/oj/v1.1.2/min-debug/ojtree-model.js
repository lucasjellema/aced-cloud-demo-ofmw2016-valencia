/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$60$$) {
  $oj$$60$$.$CollectionNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$($parentKey$$13$$, $collection$$44$$, $treeDataSource$$2$$, $start$$53$$, $count$$51$$) {
    this.$parentKey$ = $parentKey$$13$$;
    this.$collection$ = $collection$$44$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$2$$;
    this.start = $start$$53$$ < $collection$$44$$.length ? $start$$53$$ : $collection$$44$$.length - 1;
    this.count = -1 === $count$$51$$ ? $collection$$44$$.length : Math.min($collection$$44$$.length, $count$$51$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$60$$.$CollectionNodeSet$, $oj$$60$$);
  $oj$$60$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$60$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$59$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$59$$.success && $callbacks$$59$$.success();
    });
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$60$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$35$$) {
    return new Promise(function($resolve$$56$$) {
      function $nextNode$$($index$$281$$) {
        $index$$281$$ < $count$$52$$ ? $nodeSet$$35$$.$FetchChildNodeSet$($index$$281$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$35$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$281$$ + 1);
          }) : $nextNode$$($index$$281$$ + 1);
        }}) : $resolve$$56$$(void 0);
      }
      var $count$$52$$ = $nodeSet$$35$$.$getCount$();
      $nextNode$$(0);
    });
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$282$$, $callbacks$$60$$) {
    var $model$$79_parentKey$$14$$ = this.$collection$.at($index$$282$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$79_parentKey$$14$$).leaf) {
      this.$childNodeSet$[$index$$282$$] = null, $callbacks$$60$$.success(null);
    } else {
      var $collection$$45$$ = this.$treeDataSource$.$GetChildCollection$($model$$79_parentKey$$14$$), $model$$79_parentKey$$14$$ = this.$treeDataSource$.$parseMetadata$($model$$79_parentKey$$14$$).key, $self$$188$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$45$$, 0, -1, {success:function($nodeSet$$36$$) {
        $self$$188$$.$childNodeSet$[$index$$282$$] = $nodeSet$$36$$;
        $callbacks$$60$$.success($nodeSet$$36$$);
      }}, $model$$79_parentKey$$14$$);
    }
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$60$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$60$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$60$$.$CollectionNodeSet$.prototype.$getStart$ = function $$oj$$60$$$$CollectionNodeSet$$$$getStart$$() {
    return this.start;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$60$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$60$$.$CollectionNodeSet$.prototype.$getCount$ = function $$oj$$60$$$$CollectionNodeSet$$$$getCount$$() {
    return this.count;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$60$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$60$$.$CollectionNodeSet$.prototype.getData = function $$oj$$60$$$$CollectionNodeSet$$$getData$($index$$283$$) {
    this.$_checkRange$($index$$283$$);
    return this.$collection$.at($index$$283$$).attributes;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$60$$.$CollectionNodeSet$.prototype.getData});
  $oj$$60$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$60$$$$CollectionNodeSet$$$$_checkRange$$($index$$284$$) {
    if ($index$$284$$ < this.start || $index$$284$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$60$$$$CollectionNodeSet$$$getMetadata$($index$$285_model$$80_parse$$6$$) {
    this.$_checkRange$($index$$285_model$$80_parse$$6$$);
    var $metadata$$14$$ = {};
    $index$$285_model$$80_parse$$6$$ = this.$collection$.at($index$$285_model$$80_parse$$6$$);
    $index$$285_model$$80_parse$$6$$ = this.$treeDataSource$.$parseMetadata$($index$$285_model$$80_parse$$6$$);
    $metadata$$14$$.key = $index$$285_model$$80_parse$$6$$.key;
    $metadata$$14$$.leaf = $index$$285_model$$80_parse$$6$$.leaf;
    $metadata$$14$$.depth = $index$$285_model$$80_parse$$6$$.depth;
    return $metadata$$14$$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$60$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$60$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$286$$) {
    this.$_checkRange$($index$$286$$);
    return this.$childNodeSet$[$index$$286$$];
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$60$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
  $oj$$60$$.$CollectionTreeDataSource$ = function $$oj$$60$$$$CollectionTreeDataSource$$($options$$387$$) {
    $options$$387$$ = $options$$387$$ || {};
    this.$rootCollection$ = $options$$387$$.root;
    this.$childCollectionCallback$ = $options$$387$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$387$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$60$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$60$$.$CollectionTreeDataSource$, $oj$$60$$);
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$81$$) {
    return{key:$model$$81$$.idAttribute + "\x3d" + $model$$81$$.id};
  };
  $oj$$60$$.$Object$.$createSubclass$($oj$$60$$.$CollectionTreeDataSource$, $oj$$60$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$60$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$60$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$60$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$60$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$45$$) {
    var $childColl$$ = this.$cache$[$parent$$45$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$45$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$170$$, $callbacks$$61$$) {
    this.$fetchChildren$($key$$170$$, null, {success:function($nodeSet$$37$$) {
      $callbacks$$61$$.success($nodeSet$$37$$.$collection$);
    }, error:$callbacks$$61$$.error});
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$46$$, $range$$23$$, $callbacks$$62$$) {
    $range$$23$$ = $range$$23$$ || {};
    var $start$$54$$ = $range$$23$$.start ? $range$$23$$.start : 0, $count$$53$$ = $range$$23$$.count ? $range$$23$$.count : -1;
    if (null === $parent$$46$$) {
      this.$FetchCollection$(null, $start$$54$$, $count$$53$$, $callbacks$$62$$, null);
    } else {
      var $self$$189$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$46$$, 0).then(function($collection$$46_parentModel$$) {
        if ($collection$$46_parentModel$$) {
          $collection$$46_parentModel$$ = $self$$189$$.$GetChildCollection$($collection$$46_parentModel$$.$model$);
          try {
            $self$$189$$.$FetchCollection$($collection$$46_parentModel$$, $start$$54$$, $count$$53$$, $callbacks$$62$$, $parent$$46$$);
          } catch ($error$$47$$) {
            $callbacks$$62$$ && $callbacks$$62$$.error && $callbacks$$62$$.error({status:$error$$47$$.message});
          }
        } else {
          $callbacks$$62$$ && $callbacks$$62$$.error && $callbacks$$62$$.error($parent$$46$$);
        }
      });
    }
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$576_model$$82$$, $collection$$47_parents$$5$$, $options$$389$$) {
    var $index$$287$$ = 0;
    $options$$389$$ && $options$$389$$.at && ($index$$287$$ = $options$$389$$.at);
    $collection$$47_parents$$5$$ = this.$_getParentChain$($collection$$47_parents$$5$$);
    $event$$576_model$$82$$ = this.$_createEvent$(this, "insert", $index$$287$$, $collection$$47_parents$$5$$, this.$_putModelInNodeSet$(null != $collection$$47_parents$$5$$ && 0 < $collection$$47_parents$$5$$.length ? $collection$$47_parents$$5$$[$collection$$47_parents$$5$$.length - 1] : null, $event$$576_model$$82$$));
    this.handleEvent("change", $event$$576_model$$82$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$577_model$$83$$, $collection$$48$$, $options$$390$$) {
    var $index$$288$$ = 0;
    $options$$390$$ && $options$$390$$.index && ($index$$288$$ = $options$$390$$.index);
    this.$_removeCollectionFromCache$($event$$577_model$$83$$);
    $event$$577_model$$83$$ = this.$_createEvent$(this, "delete", $index$$288$$, this.$_getParentChain$($collection$$48$$), null);
    this.handleEvent("change", $event$$577_model$$83$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$578_model$$84$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$578_model$$84$$), $index$$289$$ = null, $parents$$6$$ = null;
    $collectionForModel$$ && ($index$$289$$ = $collectionForModel$$.index, $parents$$6$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$578_model$$84$$ = this.$_createEvent$(this, "update", $index$$289$$, $parents$$6$$, this.$_putModelInNodeSet$(null != $parents$$6$$ && 0 < $parents$$6$$.length ? $parents$$6$$[$parents$$6$$.length - 1] : null, $event$$578_model$$84$$));
    this.handleEvent("change", $event$$578_model$$84$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$49_event$$579$$) {
    $collection$$49_event$$579$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$49_event$$579$$), null);
    this.handleEvent("refresh", $collection$$49_event$$579$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_putModelInNodeSet$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_putModelInNodeSet$$($parent$$49$$, $model$$85$$) {
    var $collection$$50$$ = new $oj$$60$$.$Collection$;
    $collection$$50$$.add($model$$85$$);
    return this.$_getNodeSet$($collection$$50$$, $parent$$49$$, 0, 1);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$51$$) {
    var $parents$$7$$ = [], $parent$$50$$ = null;
    do {
      $parent$$50$$ = this.$_getParentOfCollection$($coll$$4_collection$$51$$), null !== $parent$$50$$ && ($parent$$50$$ !== $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$7$$.unshift($parent$$50$$), $coll$$4_collection$$51$$ = this.$_getCollectionOfKey$($parent$$50$$));
    } while (null != $parent$$50$$);
    return $parents$$7$$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$86$$) {
    var $key$$171$$ = $model$$86$$ instanceof $oj$$60$$.$Model$ ? this.$parseMetadata$($model$$86$$).key : $model$$86$$;
    return $model$$86$$ ? $key$$171$$ : $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$87$$) {
    return this.$cache$[this.$_getCacheKey$($model$$87$$)];
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$88$$, $collection$$52$$) {
    $collection$$52$$.on($oj$$60$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$52$$.on($oj$$60$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$52$$.on($oj$$60$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$52$$.on($oj$$60$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$88$$)] = $collection$$52$$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$172_model$$89$$) {
    $key$$172_model$$89$$ = this.$_getCacheKey$($key$$172_model$$89$$);
    for (var $prop$$69$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$69$$) && $prop$$69$$ === $key$$172_model$$89$$) {
        this.$cache$[$key$$172_model$$89$$].off(null, null, this);
        delete this.$cache$[$key$$172_model$$89$$];
        break;
      }
    }
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$173$$, $collection$$53$$) {
    for (var $count$$54$$ = $collection$$53$$.length, $i$$446$$ = 0;$i$$446$$ < $count$$54$$;$i$$446$$++) {
      var $currKey$$1$$ = this.$_getCacheKey$($collection$$53$$.at($i$$446$$));
      if ($key$$173$$ === $currKey$$1$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$90$$) {
    for (var $prop$$70$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$70$$)) {
        for (var $collection$$54$$ = this.$cache$[$prop$$70$$], $i$$447$$ = 0;$i$$447$$ < $collection$$54$$.length;$i$$447$$++) {
          if ($collection$$54$$.at($i$$447$$) === $model$$90$$) {
            return{index:$i$$447$$, $collection$:$collection$$54$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$174$$) {
    for (var $prop$$71$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$71$$)) {
        var $collection$$55$$ = this.$cache$[$prop$$71$$];
        if (this.$_keyInCollection$($key$$174$$, $collection$$55$$)) {
          return $collection$$55$$;
        }
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$56$$) {
    for (var $prop$$72$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$72$$) && this.$cache$[$prop$$72$$] === $collection$$56$$) {
        return $prop$$72$$;
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$1$$ = !0, $collection$$57$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$57$$ || ($cached$$1$$ = !1, $collection$$57$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$57$$ && (this.$_applySortToCollection$($collection$$57$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$57$$)));
    return{$collection$:$collection$$57$$, $cached$:$cached$$1$$};
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$12$$, $operation$$7$$, $index$$290$$, $parent$$51$$, $data$$177$$) {
    return{source:$source$$12$$, operation:$operation$$7$$, index:$index$$290$$, parent:$parent$$51$$, data:$data$$177$$};
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$58$$, $start$$55$$, $count$$55$$, $callbacks$$63$$, $parent$$52$$) {
    var $self$$190$$ = this;
    null === $collection$$58$$ && (($collection$$58$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$58$$ = {$collection$:$collection$$58$$, $cached$:!0} : ($collection$$58$$ = {$collection$:$self$$190$$.$rootCollection$, $cached$:!1}, $self$$190$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$58$$ && $self$$190$$.$_fetch$($collection$$58$$, function($coll$$5$$) {
      $callbacks$$63$$.success && $callbacks$$63$$.success($self$$190$$.$_getNodeSet$($coll$$5$$, $parent$$52$$, $start$$55$$, $count$$55$$));
    }, $callbacks$$63$$.error);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$59$$, $parent$$53$$, $start$$56$$, $count$$56$$) {
    return new $oj$$60$$.$CollectionNodeSet$($parent$$53$$, $collection$$59$$, this, $start$$56$$, $count$$56$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$60$$, $key$$175$$) {
    var $self$$191$$ = this;
    return new Promise(function($resolve$$57$$) {
      function $checkNext$$($index$$291$$, $collection$$61$$, $key$$176$$) {
        $index$$291$$ < $collection$$61$$.length ? $collection$$61$$.at($index$$291$$, {deferred:!0}).then(function($model$$91$$) {
          if ($model$$91$$) {
            var $parse$$7$$ = $self$$191$$.$parseMetadata$($model$$91$$);
            if ($key$$176$$ === $parse$$7$$.key) {
              $resolve$$57$$($model$$91$$);
              return;
            }
          }
          $index$$291$$++;
          $checkNext$$($index$$291$$, $collection$$61$$, $key$$176$$);
        }) : $resolve$$57$$(null);
      }
      $checkNext$$(0, $collection$$60$$, $key$$175$$);
    });
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$62$$, $key$$177$$, $depth$$25$$) {
    var $self$$192$$ = this;
    return new Promise(function($resolve$$58$$) {
      $self$$192$$.$_scanForKey$($collection$$62$$, $key$$177$$).then(function($model$$92$$) {
        function $getNextCollection$$($index$$292$$, $tds$$) {
          if ($index$$292$$ < $max$$8$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$62$$.at($index$$292$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$177$$, $depth$$25$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$58$$($childModel$$) : ($index$$292$$++, $getNextCollection$$($index$$292$$, $tds$$));
              });
            }, null) : ($index$$292$$++, $getNextCollection$$($index$$292$$, $tds$$));
          } else {
            $resolve$$58$$(null);
          }
        }
        if ($model$$92$$) {
          $resolve$$58$$({$model$:$model$$92$$, depth:$depth$$25$$});
        } else {
          var $max$$8$$ = $collection$$62$$.length;
          $getNextCollection$$(0, $self$$192$$);
        }
      });
    });
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$48$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length || !$collectionCacheObj$$.$collection$.$IsUrlBased$() ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$);
    }, error:$error$$48$$}));
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$54$$, $callbacks$$64$$) {
    var $self$$193$$ = this;
    null === $parent$$54$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$38$$) {
      $nodeSet$$38$$.$FetchDescendants$({success:function() {
        $callbacks$$64$$.success && $callbacks$$64$$.success($nodeSet$$38$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$54$$, 0).then(function($collection$$63_parentModel$$2$$) {
      $collection$$63_parentModel$$2$$ && ($collection$$63_parentModel$$2$$ = $self$$193$$.$GetChildCollection$($collection$$63_parentModel$$2$$.$model$), $self$$193$$.$FetchCollection$($collection$$63_parentModel$$2$$, 0, -1, {success:function($nodeSet$$39$$) {
        $nodeSet$$39$$.$FetchDescendants$({success:function() {
          $callbacks$$64$$.success && $callbacks$$64$$.success($nodeSet$$39$$);
        }});
      }}, $parent$$54$$));
    });
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$60$$$$CollectionTreeDataSource$$$sort$($criteria$$15$$, $callbacks$$65$$) {
    var $key$$178$$ = $criteria$$15$$.key, $dir$$1$$ = $criteria$$15$$.direction, $needSort$$2$$ = !1;
    $key$$178$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$178$$, $needSort$$2$$ = !0);
    $dir$$1$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$1$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$73$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$73$$) && this.$_applySortToCollection$(this.$cache$[$prop$$73$$]);
      }
    }
    $callbacks$$65$$ && $callbacks$$65$$.success && $callbacks$$65$$.success();
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$60$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$65$$) {
    $collection$$65$$.comparator = this.$sortkey$;
    $collection$$65$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$65$$.sort();
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$60$$$$CollectionTreeDataSource$$$move$() {
    $oj$$60$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$60$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$moveOK$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$60$$$$CollectionTreeDataSource$$$getCapability$($feature$$17$$) {
    return "sort" === $feature$$17$$ ? "default" : "move" === $feature$$17$$ ? "none" : "batchFetch" === $feature$$17$$ || "fetchDescendants" === $feature$$17$$ ? "disable" : null;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$60$$.$CollectionTreeDataSource$.prototype.getCapability});
});
