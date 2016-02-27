/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery"], function($oj$$9$$, $$$$9$$) {
  $oj$$9$$.$DataSource$ = function $$oj$$9$$$$DataSource$$($data$$53$$) {
    this.data = $data$$53$$;
    this.Init();
  };
  $goog$exportPath_$$("DataSource", $oj$$9$$.$DataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$DataSource$, $oj$$9$$.$EventSource$, "oj.DataSource");
  $oj$$9$$.$DataSource$.prototype.Init = function $$oj$$9$$$$DataSource$$$Init$() {
    $oj$$9$$.$DataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.Init", {Init:$oj$$9$$.$DataSource$.prototype.Init});
  $oj$$9$$.$DataSource$.prototype.getCapability = function $$oj$$9$$$$DataSource$$$getCapability$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.getCapability", {getCapability:$oj$$9$$.$DataSource$.prototype.getCapability});
  $oj$$9$$.$TreeDataSource$ = function $$oj$$9$$$$TreeDataSource$$($data$$54$$) {
    $oj$$9$$.$TreeDataSource$.$superclass$.constructor.call(this, $data$$54$$);
  };
  $goog$exportPath_$$("TreeDataSource", $oj$$9$$.$TreeDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$TreeDataSource$, $oj$$9$$.$DataSource$, "oj.TreeDataSource");
  $oj$$9$$.$TreeDataSource$.prototype.$getChildCount$ = function $$oj$$9$$$$TreeDataSource$$$$getChildCount$$() {
    return-1;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$9$$.$TreeDataSource$.prototype.$getChildCount$});
  $oj$$9$$.$TreeDataSource$.prototype.$fetchChildren$ = function $$oj$$9$$$$TreeDataSource$$$$fetchChildren$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$9$$.$TreeDataSource$.prototype.$fetchChildren$});
  $oj$$9$$.$TreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$9$$$$TreeDataSource$$$$fetchDescendants$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$9$$.$TreeDataSource$.prototype.$fetchDescendants$});
  $oj$$9$$.$TreeDataSource$.prototype.sort = function $$oj$$9$$$$TreeDataSource$$$sort$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.sort", {sort:$oj$$9$$.$TreeDataSource$.prototype.sort});
  $oj$$9$$.$TreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$9$$$$TreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"};
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$9$$.$TreeDataSource$.prototype.$getSortCriteria$});
  $oj$$9$$.$TreeDataSource$.prototype.move = function $$oj$$9$$$$TreeDataSource$$$move$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.move", {move:$oj$$9$$.$TreeDataSource$.prototype.move});
  $oj$$9$$.$TreeDataSource$.prototype.$moveOK$ = function $$oj$$9$$$$TreeDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.moveOK", {$moveOK$:$oj$$9$$.$TreeDataSource$.prototype.$moveOK$});
  $oj$$9$$.$TreeDataSource$.prototype.getCapability = function $$oj$$9$$$$TreeDataSource$$$getCapability$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$TreeDataSource$.prototype.getCapability});
  $oj$$9$$.$_JsonTreeNodeDataSource$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null;
  };
  $oj$$9$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$44$$) {
    return function($a$$91$$, $b$$56$$) {
      return $a$$91$$.attr && $b$$56$$.attr && $a$$91$$.attr[$key$$44$$] && $b$$56$$.attr[$key$$44$$] ? $a$$91$$.attr[$key$$44$$] < $b$$56$$.attr[$key$$44$$] ? -1 : $a$$91$$.attr[$key$$44$$] === $b$$56$$.attr[$key$$44$$] ? 0 : 1 : $a$$91$$[$key$$44$$] < $b$$56$$[$key$$44$$] ? -1 : $a$$91$$[$key$$44$$] === $b$$56$$[$key$$44$$] ? 0 : 1;
    };
  };
  $oj$$9$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$45$$) {
    return function($a$$92$$, $b$$57$$) {
      return $a$$92$$.attr && $b$$57$$.attr && $a$$92$$.attr[$key$$45$$] && $b$$57$$.attr[$key$$45$$] ? $a$$92$$.attr[$key$$45$$] < $b$$57$$.attr[$key$$45$$] ? 1 : $a$$92$$.attr[$key$$45$$] === $b$$57$$.attr[$key$$45$$] ? 0 : -1 : $a$$92$$[$key$$45$$] < $b$$57$$[$key$$45$$] ? 1 : $a$$92$$[$key$$45$$] === $b$$57$$[$key$$45$$] ? 0 : -1;
    };
  };
  $oj$$9$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$1$$) {
    var $i$$134_key$$46$$ = $criteria$$1$$.key;
    "ascending" === $criteria$$1$$.direction ? this.children.sort(this.$_ascending$($i$$134_key$$46$$)) : "descending" === $criteria$$1$$.direction && this.children.sort(this.$_descending$($i$$134_key$$46$$));
    for (var $i$$134_key$$46$$ = 0, $l$$4$$ = this.children.length;$i$$134_key$$46$$ < $l$$4$$;$i$$134_key$$46$$++) {
      this.children[$i$$134_key$$46$$].$_sortRecursive$($criteria$$1$$);
    }
  };
  $oj$$9$$.$JsonTreeDataSource$ = function $$oj$$9$$$$JsonTreeDataSource$$($data$$55$$) {
    var $tree$$;
    $tree$$ = new $oj$$9$$.$_JsonTreeNodeDataSource$;
    $data$$55$$.id || ($tree$$.id = "root");
    this.data = this.$_createTreeDataSource$({count:0}, $tree$$, $data$$55$$);
    $oj$$9$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$);
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$9$$.$JsonTreeDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$JsonTreeDataSource$, $oj$$9$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$9$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$9$$$$JsonTreeDataSource$$$Init$() {
    $oj$$9$$.$JsonTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$9$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$33$$, $target$$79$$, $source$$9$$, $depth$$4$$) {
    var $children$$1$$, $node$$24$$, $child$$2$$, $prop$$60$$, $propr$$, $prp$$, $j$$19$$;
    $depth$$4$$ || ($depth$$4$$ = 0);
    for ($prop$$60$$ in $source$$9$$) {
      if ("children" == $prop$$60$$ || 0 == $depth$$4$$ && $source$$9$$ instanceof Array) {
        for ($children$$1$$ = 0 == $depth$$4$$ && $source$$9$$ instanceof Array ? $source$$9$$ : $source$$9$$[$prop$$60$$], $depth$$4$$++, $j$$19$$ = 0;$j$$19$$ < $children$$1$$.length;$j$$19$$++) {
          $child$$2$$ = $children$$1$$[$j$$19$$];
          $node$$24$$ = new $oj$$9$$.$_JsonTreeNodeDataSource$;
          $child$$2$$.id || ($c$$33$$.count++, $child$$2$$.attr ? $child$$2$$.attr.id || ($child$$2$$.attr.id = "rid_" + $c$$33$$.count) : $node$$24$$.id = "rid_" + $c$$33$$.count);
          for ($propr$$ in $child$$2$$) {
            for ($prp$$ in $node$$24$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$24$$[$prp$$] = $child$$2$$[$propr$$]), "depth" == $prp$$ && ($node$$24$$[$prp$$] = $depth$$4$$);
            }
          }
          $target$$79$$.children.push($node$$24$$);
          for ($prp$$ in $child$$2$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$33$$, $target$$79$$.children[$j$$19$$], $child$$2$$, $depth$$4$$);
          }
        }
      }
    }
    return $target$$79$$;
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$9$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$10_parentKey$$) {
    $parent$$10_parentKey$$ || ($parent$$10_parentKey$$ = this.data.id);
    $parent$$10_parentKey$$ = this.$_searchTreeById$(this.data, $parent$$10_parentKey$$);
    return $parent$$10_parentKey$$.children ? $parent$$10_parentKey$$.children.length : 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$9$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$9$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet_parentKey$$1$$, $i$$135_range$$6$$, $callbacks$$8$$) {
    var $childStart$$, $childEnd$$, $results$$, $parent$$11$$, $node$$25$$;
    $results$$ = [];
    $nodeSet_parentKey$$1$$ || ($nodeSet_parentKey$$1$$ = this.data.id);
    $parent$$11$$ = this.$_searchTreeById$(this.data, $nodeSet_parentKey$$1$$);
    $i$$135_range$$6$$ || ($i$$135_range$$6$$ = [], $i$$135_range$$6$$.start = 0, $i$$135_range$$6$$.count = $parent$$11$$.children.length);
    $i$$135_range$$6$$.count || ($i$$135_range$$6$$.count = $parent$$11$$.children.length);
    $i$$135_range$$6$$.start || ($i$$135_range$$6$$.start = 0);
    $childStart$$ = $i$$135_range$$6$$.start;
    $childEnd$$ = Math.min($parent$$11$$.children.length, $childStart$$ + $i$$135_range$$6$$.count);
    for ($i$$135_range$$6$$ = $childStart$$;$i$$135_range$$6$$ < $childEnd$$;$i$$135_range$$6$$ += 1) {
      $node$$25$$ = new $oj$$9$$.$_JsonTreeNodeDataSource$, $parent$$11$$.children[$i$$135_range$$6$$].attr && ($node$$25$$.attr = $parent$$11$$.children[$i$$135_range$$6$$].attr), $parent$$11$$.children[$i$$135_range$$6$$].id && ($node$$25$$.id = $parent$$11$$.children[$i$$135_range$$6$$].id), $parent$$11$$.children[$i$$135_range$$6$$].depth && ($node$$25$$.depth = $parent$$11$$.children[$i$$135_range$$6$$].depth), $parent$$11$$.children[$i$$135_range$$6$$].title && ($node$$25$$.title = $parent$$11$$.children[$i$$135_range$$6$$].title), 
      $parent$$11$$.children[$i$$135_range$$6$$].parent && ($node$$25$$.parent = $parent$$11$$.children[$i$$135_range$$6$$].parent), $node$$25$$.$leaf$ = 0 < $parent$$11$$.children[$i$$135_range$$6$$].children.length ? !1 : !0, $results$$.push($node$$25$$);
    }
    $nodeSet_parentKey$$1$$ = new $oj$$9$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$, $nodeSet_parentKey$$1$$);
    null != $callbacks$$8$$ && null != $callbacks$$8$$.success && $callbacks$$8$$.success.call(null, $nodeSet_parentKey$$1$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$9$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$9$$$$JsonTreeDataSource$$$$fetchDescendants$$($parentKey$$2$$, $callbacks$$9$$) {
    var $childEnd$$1_range$$7$$, $childStart$$1_i$$136$$, $nodeSet$$1_results$$1$$, $parent$$12$$;
    $nodeSet$$1_results$$1$$ = [];
    $parentKey$$2$$ || ($parentKey$$2$$ = this.data.id);
    $parent$$12$$ = this.$_searchTreeById$(this.data, $parentKey$$2$$);
    $childEnd$$1_range$$7$$ = [];
    $childEnd$$1_range$$7$$.start = 0;
    $childEnd$$1_range$$7$$.count = $parent$$12$$.children.length;
    $childStart$$1_i$$136$$ = $childEnd$$1_range$$7$$.start;
    for ($childEnd$$1_range$$7$$ = Math.min($parent$$12$$.children.length, $childStart$$1_i$$136$$ + $childEnd$$1_range$$7$$.count);$childStart$$1_i$$136$$ < $childEnd$$1_range$$7$$;$childStart$$1_i$$136$$ += 1) {
      $parent$$12$$.children[$childStart$$1_i$$136$$].$leaf$ = 0 < $parent$$12$$.children[$childStart$$1_i$$136$$].children.length ? !1 : !0, $nodeSet$$1_results$$1$$.push($parent$$12$$.children[$childStart$$1_i$$136$$]);
    }
    $nodeSet$$1_results$$1$$ = new $oj$$9$$.$JsonNodeSet$(0, $nodeSet$$1_results$$1$$.length, $nodeSet$$1_results$$1$$, $parentKey$$2$$);
    null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $nodeSet$$1_results$$1$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$9$$.$JsonTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$9$$.$JsonTreeDataSource$.prototype.move = function $$oj$$9$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$, $index$$97_position$$6$$, $callbacks$$10$$) {
    var $parent$$13_refNodeKey$$;
    $parent$$13_refNodeKey$$ = $refNode$$8_referenceNode$$;
    if (!$parent$$13_refNodeKey$$ || $parent$$13_refNodeKey$$ == this.data.id) {
      if ("inside" != $index$$97_position$$6$$) {
        $oj$$9$$.$Logger$.log("Error: root can not be the reference node if position equals to " + $index$$97_position$$6$$);
        return;
      }
      $parent$$13_refNodeKey$$ || ($parent$$13_refNodeKey$$ = this.data.id);
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$13_refNodeKey$$) ? $oj$$9$$.$Logger$.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$ = this.$_searchTreeById$(null, $parent$$13_refNodeKey$$), $parent$$13_refNodeKey$$ = this.$_getParentById$($parent$$13_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$97_position$$6$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - 
    ($refNode$$8_referenceNode$$.depth + 1)), $refNode$$8_referenceNode$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$97_position$$6$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$97_position$$6$$ = $parent$$13_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$97_position$$6$$ && (0 != $index$$97_position$$6$$ ? $parent$$13_refNodeKey$$.children.splice($index$$97_position$$6$$ - 1, 
    0, $moveNode_nodeToMove$$) : $parent$$13_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : "after" == $index$$97_position$$6$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$97_position$$6$$ = $parent$$13_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$97_position$$6$$ && $parent$$13_refNodeKey$$.children.splice($index$$97_position$$6$$, 0, $moveNode_nodeToMove$$)) : "first" == $index$$97_position$$6$$ ? 
    (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $parent$$13_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$97_position$$6$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $parent$$13_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, this.data));
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$9$$.$JsonTreeDataSource$.prototype.move});
  $oj$$9$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$9$$$$JsonTreeDataSource$$$sort$($criteria$$2$$, $callbacks$$11$$) {
    var $parent$$14$$;
    $parent$$14$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$14$$.$_sortRecursive$($criteria$$2$$);
    null != $callbacks$$11$$ && null != $callbacks$$11$$.success && $callbacks$$11$$.success.call(null, $parent$$14$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$9$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$) {
    var $i$$137$$, $parent$$15$$ = null;
    if ($refNodeKey$$1$$ == this.data.id) {
      return null;
    }
    $currNode$$ || ($currNode$$ = this.data);
    if ($currNode$$.children && 0 < $currNode$$.children.length) {
      for ($i$$137$$ = 0;$i$$137$$ < $currNode$$.children.length;$i$$137$$++) {
        if ($currNode$$.children[$i$$137$$].id && $currNode$$.children[$i$$137$$].id == $refNodeKey$$1$$ || $currNode$$.children[$i$$137$$].attr && $currNode$$.children[$i$$137$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$;
        }
      }
      for ($i$$137$$ = 0;$i$$137$$ < $currNode$$.children.length && !($parent$$15$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$.children[$i$$137$$]));$i$$137$$++) {
      }
    }
    return $parent$$15$$;
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$, $parentKey$$4$$) {
    var $i$$138$$, $result$$19$$ = null;
    $currChild$$ || ($currChild$$ = this.data);
    if ($currChild$$.id && $currChild$$.id == $parentKey$$4$$ || $currChild$$.attr && $currChild$$.attr.id == $parentKey$$4$$) {
      return $currChild$$;
    }
    if (null != $currChild$$.children) {
      for ($i$$138$$ = 0;$i$$138$$ < $currChild$$.children.length && !$result$$19$$;$i$$138$$++) {
        $result$$19$$ = $currChild$$.children[$i$$138$$].id && $currChild$$.children[$i$$138$$].id == $parentKey$$4$$ || $currChild$$.children[$i$$138$$].attr && $currChild$$.children[$i$$138$$].attr.id == $parentKey$$4$$ ? $currChild$$.children[$i$$138$$] : this.$_searchTreeById$($currChild$$.children[$i$$138$$], $parentKey$$4$$);
      }
    }
    return $result$$19$$;
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$1$$, $offset$$16$$) {
    var $i$$139$$;
    $currChild$$1$$.depth -= $offset$$16$$;
    if ($currChild$$1$$.children && 0 != $currChild$$1$$.children.length) {
      for ($i$$139$$ = 0;$i$$139$$ < $currChild$$1$$.children.length;$i$$139$$++) {
        this.$_updateDepth$($currChild$$1$$.children[$i$$139$$], $offset$$16$$);
      }
    }
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$2_index$$98$$) {
    var $key$$47_parent$$16$$;
    $currChild$$2_index$$98$$.id ? $key$$47_parent$$16$$ = $currChild$$2_index$$98$$.id : $currChild$$2_index$$98$$.attr && ($key$$47_parent$$16$$ = $currChild$$2_index$$98$$.attr.id);
    ($key$$47_parent$$16$$ = this.$_getParentById$($key$$47_parent$$16$$)) || ($key$$47_parent$$16$$ = this.data);
    $currChild$$2_index$$98$$ = $key$$47_parent$$16$$.children.indexOf($currChild$$2_index$$98$$);
    -1 < $currChild$$2_index$$98$$ && $key$$47_parent$$16$$.children.splice($currChild$$2_index$$98$$, 1);
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$9$$$$JsonTreeDataSource$$$getCapability$($feature$$6$$) {
    return "fetchDescendants" === $feature$$6$$ ? "enable" : "sort" === $feature$$6$$ ? "default" : "batchFetch" === $feature$$6$$ ? "disable" : "move" === $feature$$6$$ ? "full" : null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$JsonTreeDataSource$.prototype.getCapability});
  $oj$$9$$.$TableDataSource$ = function $$oj$$9$$$$TableDataSource$$($data$$56$$, $options$$220$$) {
    if (this.constructor == $oj$$9$$.$TableDataSource$) {
      throw Error($oj$$9$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY$ + "\n" + $oj$$9$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL$);
    }
    this.data = $data$$56$$;
    this.options = $options$$220$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("TableDataSource", $oj$$9$$.$TableDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$TableDataSource$, $oj$$9$$.$DataSource$, "oj.TableDataSource");
  $oj$$9$$.$TableDataSource$.prototype.Init = function $$oj$$9$$$$TableDataSource$$$Init$() {
    $oj$$9$$.$TableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.Init", {Init:$oj$$9$$.$TableDataSource$.prototype.Init});
  $oj$$9$$.$TableDataSource$.prototype.at = function $$oj$$9$$$$TableDataSource$$$at$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return Promise.reject();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.at", {at:$oj$$9$$.$TableDataSource$.prototype.at});
  $oj$$9$$.$TableDataSource$.prototype.fetch = function $$oj$$9$$$$TableDataSource$$$fetch$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return Promise.reject();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.fetch", {fetch:$oj$$9$$.$TableDataSource$.prototype.fetch});
  $oj$$9$$.$TableDataSource$.prototype.get = function $$oj$$9$$$$TableDataSource$$$get$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return Promise.reject();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.get", {get:$oj$$9$$.$TableDataSource$.prototype.get});
  $oj$$9$$.$TableDataSource$.prototype.getCapability = function $$oj$$9$$$$TableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$TableDataSource$.prototype.getCapability});
  $oj$$9$$.$TableDataSource$.prototype.sort = function $$oj$$9$$$$TableDataSource$$$sort$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return Promise.reject();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.sort", {sort:$oj$$9$$.$TableDataSource$.prototype.sort});
  $oj$$9$$.$TableDataSource$.prototype.totalSize = function $$oj$$9$$$$TableDataSource$$$totalSize$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.totalSize", {totalSize:$oj$$9$$.$TableDataSource$.prototype.totalSize});
  $oj$$9$$.$TableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", REQUEST:"request", SYNC:"sync", ERROR:"error"};
  $goog$exportPath_$$("TableDataSource.EventType", $oj$$9$$.$TableDataSource$.$EventType$, $oj$$9$$);
  $oj$$9$$.$TableDataSource$.$_LOGGER_MSG$ = {_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.", _ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.", _ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.", _ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};
  $oj$$9$$.$ArrayTableDataSource$ = function $$oj$$9$$$$ArrayTableDataSource$$($data$$57$$, $options$$224$$) {
    this.data = {};
    if (!($data$$57$$ instanceof Array) && "function" != typeof $data$$57$$ && "function" != typeof $data$$57$$.$subscribe$) {
      throw Error($oj$$9$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$9$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    null != $options$$224$$ && null != $options$$224$$.idAttribute || $oj$$9$$.$Logger$.info($oj$$9$$.$ArrayTableDataSource$.$_LOGGER_MSG$._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);
    $oj$$9$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$57$$, $options$$224$$);
    this.$_eventHandlers$ = [];
    this.$_rows$ = [];
    if (null != $data$$57$$ && void 0 !== $data$$57$$ && (this.$_idAttribute$ = null, null != $options$$224$$ && null != $options$$224$$.idAttribute && (this.$_idAttribute$ = $options$$224$$.idAttribute), this.$_data$ = $data$$57$$ instanceof Array ? $data$$57$$ : $data$$57$$(), this.$_rows$ = this.$_getRowArray$(this.$_data$), this.$_totalSize$ = this.$_data$.length, !($data$$57$$ instanceof Array))) {
      var $self$$44$$ = this;
      $data$$57$$.subscribe(function($changes$$3$$) {
        var $i$$140$$, $rowArray$$ = [], $indexArray$$ = [];
        for ($i$$140$$ = 0;$i$$140$$ < $changes$$3$$.length;$i$$140$$++) {
          "deleted" === $changes$$3$$[$i$$140$$].status && $rowArray$$.push($changes$$3$$[$i$$140$$].value);
        }
        $self$$44$$.$_removeInternal$($rowArray$$, null);
        $rowArray$$ = [];
        $indexArray$$ = [];
        for ($i$$140$$ = 0;$i$$140$$ < $changes$$3$$.length;$i$$140$$++) {
          "added" === $changes$$3$$[$i$$140$$].status && ($rowArray$$.push($changes$$3$$[$i$$140$$].value), $indexArray$$.push($changes$$3$$[$i$$140$$].index));
        }
        $self$$44$$.add($rowArray$$, {at:$indexArray$$});
      }, null, "arrayChange");
    }
    if (null != $options$$224$$ && ("enabled" == $options$$224$$.startFetch || null == $options$$224$$.startFetch) || null == $options$$224$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$9$$.$ArrayTableDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$ArrayTableDataSource$, $oj$$9$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$9$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$9$$$$ArrayTableDataSource$$$Init$() {
    $oj$$9$$.$ArrayTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$9$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$9$$.$ArrayTableDataSource$.prototype.add = function $$oj$$9$$$$ArrayTableDataSource$$$add$($m$$18$$, $options$$225$$) {
    $options$$225$$ = $options$$225$$ || {};
    return this.$_addToRowSet$($m$$18$$, $options$$225$$.at, $options$$225$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$9$$.$ArrayTableDataSource$.prototype.add});
  $oj$$9$$.$ArrayTableDataSource$.prototype.at = function $$oj$$9$$$$ArrayTableDataSource$$$at$($index$$101$$) {
    var $row$$2$$;
    $row$$2$$ = 0 > $index$$101$$ || $index$$101$$ >= this.$_rows$.length ? null : {data:this.$_rows$.data[$index$$101$$], index:$index$$101$$, key:this.$_rows$.keys[$index$$101$$]};
    return new Promise(function($resolve$$24$$) {
      $resolve$$24$$($row$$2$$);
    });
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$9$$.$ArrayTableDataSource$.prototype.at});
  $oj$$9$$.$ArrayTableDataSource$.prototype.change = function $$oj$$9$$$$ArrayTableDataSource$$$change$($m$$19$$, $options$$227$$) {
    $options$$227$$ = $options$$227$$ || {};
    var $silent$$22$$ = $options$$227$$.silent, $i$$141$$, $row$$3$$, $changedRow_key$$48$$, $rowArray$$1$$ = {data:[], keys:[], indexes:[]};
    $m$$19$$ instanceof Array || ($m$$19$$ = [$m$$19$$]);
    for ($i$$141$$ = 0;$i$$141$$ < $m$$19$$.length;$i$$141$$++) {
      $row$$3$$ = $m$$19$$[$i$$141$$], null != $row$$3$$ && ($changedRow_key$$48$$ = this.$_getId$($row$$3$$), $changedRow_key$$48$$ = this.$_getInternal$($changedRow_key$$48$$, null), $rowArray$$1$$.data.push($row$$3$$), $rowArray$$1$$.keys.push($changedRow_key$$48$$.key), $rowArray$$1$$.indexes.push($changedRow_key$$48$$.index), this.$_rows$.data[$changedRow_key$$48$$.index] = $row$$3$$);
    }
    !$silent$$22$$ && 0 < $rowArray$$1$$.data.length && $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.CHANGE, $rowArray$$1$$);
    return Promise.resolve($rowArray$$1$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.change", {change:$oj$$9$$.$ArrayTableDataSource$.prototype.change});
  $oj$$9$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$9$$$$ArrayTableDataSource$$$fetch$($options$$228$$) {
    $options$$228$$ = $options$$228$$ || {};
    return "init" != $options$$228$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$228$$) : Promise.resolve();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$9$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$9$$.$ArrayTableDataSource$.prototype.get = function $$oj$$9$$$$ArrayTableDataSource$$$get$($id$$17$$, $options$$229$$) {
    return Promise.resolve(this.$_getInternal$($id$$17$$, $options$$229$$));
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$9$$.$ArrayTableDataSource$.prototype.get});
  $oj$$9$$.$ArrayTableDataSource$.prototype.getCapability = function $$oj$$9$$$$ArrayTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$9$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$9$$$$ArrayTableDataSource$$$remove$($m$$20$$, $options$$230$$) {
    $options$$230$$ = $options$$230$$ || {};
    return this.$_removeInternal$($m$$20$$, $options$$230$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$9$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$9$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$9$$$$ArrayTableDataSource$$$reset$($data$$58$$, $options$$231$$) {
    $options$$231$$ = $options$$231$$ || {};
    $options$$231$$.previousRows = this.$_rows$;
    var $silent$$23$$ = $options$$231$$.silent;
    this.$_rows$.data = [];
    this.$_rows$.keys = [];
    this.$_rows$.indexes = [];
    this.$_totalSize$ = 0;
    null != $data$$58$$ && this.add($data$$58$$, {silent:!0});
    $silent$$23$$ || $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.RESET, null);
    return Promise.resolve();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$9$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$9$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$9$$$$ArrayTableDataSource$$$sort$($criteria$$4$$) {
    if (null == $criteria$$4$$) {
      return this.comparator = null, Promise.resolve();
    }
    var $key$$49$$ = $criteria$$4$$.key, $direction$$4$$ = $criteria$$4$$.direction, $comparator$$9$$ = null;
    "ascending" == $direction$$4$$ ? $comparator$$9$$ = function $$comparator$$9$$$($row$$4$$) {
      return $$$$9$$.isFunction($row$$4$$[$key$$49$$]) ? $row$$4$$[$key$$49$$]() : $row$$4$$[$key$$49$$];
    } : "descending" == $direction$$4$$ && ($comparator$$9$$ = function $$comparator$$9$$$($rowA$$, $rowB$$) {
      var $a$$93$$, $b$$58$$;
      $$$$9$$.isFunction($rowA$$[$key$$49$$]) ? ($a$$93$$ = $rowA$$[$key$$49$$](), $b$$58$$ = $rowB$$[$key$$49$$]()) : ($a$$93$$ = $rowA$$[$key$$49$$], $b$$58$$ = $rowB$$[$key$$49$$]);
      return $a$$93$$ === $b$$58$$ ? 0 : $a$$93$$ > $b$$58$$ ? -1 : 1;
    });
    this.comparator = $comparator$$9$$;
    this.direction = $direction$$4$$;
    var $self$$45$$ = this;
    return new Promise(function($resolve$$25$$) {
      $criteria$$4$$ = $criteria$$4$$ || {};
      if ($self$$45$$.$_hasComparator$()) {
        var $comparator$$10$$ = $self$$45$$.comparator;
        $self$$45$$.$_rows$.data.sort(function($a$$94$$, $b$$59$$) {
          return $oj$$9$$.$ArrayTableDataSource$.$_sortFunc$($a$$94$$, $b$$59$$, $comparator$$10$$, $self$$45$$);
        });
        $self$$45$$.$_recreateKeyArray$($self$$45$$.$_rows$);
        $self$$45$$.$_sorted$ = !0;
        var $result$$20$$ = {header:$criteria$$4$$.key, direction:$criteria$$4$$.direction};
        $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$45$$, $oj$$9$$.$TableDataSource$.$EventType$.SORT, $result$$20$$);
        $resolve$$25$$($result$$20$$);
      }
    });
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$9$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$9$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$9$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$9$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_addToRowSet$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_addToRowSet$$($m$$21$$, $index$$102$$, $i$$143_options$$232$$) {
    var $j$$21$$, $row$$5$$, $key$$50$$;
    $i$$143_options$$232$$ = $i$$143_options$$232$$ || {};
    var $silent$$24$$ = $i$$143_options$$232$$.silent, $rowArray$$2$$ = {data:[], keys:[], indexes:[]};
    $m$$21$$ instanceof Array || ($m$$21$$ = [$m$$21$$]);
    null == $index$$102$$ || $index$$102$$ instanceof Array || ($index$$102$$ = [$index$$102$$]);
    for ($i$$143_options$$232$$ = 0;$i$$143_options$$232$$ < $m$$21$$.length;$i$$143_options$$232$$++) {
      if ($row$$5$$ = $m$$21$$[$i$$143_options$$232$$], null != $row$$5$$) {
        $key$$50$$ = this.$_getId$($row$$5$$);
        $rowArray$$2$$.data.push($row$$5$$);
        $rowArray$$2$$.keys.push($key$$50$$);
        if (!0 == this.$_sorted$ && 0 < this.$_rows$.data.length) {
          for ($j$$21$$ = 0;$j$$21$$ < this.$_rows$.data.length;$j$$21$$++) {
            if (0 > $oj$$9$$.$ArrayTableDataSource$.$_sortFunc$($row$$5$$, this.$_rows$.data[$j$$21$$], this.comparator, this)) {
              this.$_rows$.data.splice($j$$21$$, 0, $row$$5$$);
              this.$_rows$.keys.splice($j$$21$$, 0, $key$$50$$);
              $rowArray$$2$$.indexes.push($j$$21$$);
              break;
            } else {
              if ($j$$21$$ == this.$_rows$.data.length - 1) {
                this.$_rows$.data.push($row$$5$$);
                this.$_rows$.keys.push($key$$50$$);
                $rowArray$$2$$.indexes.push($j$$21$$ + 1);
                break;
              }
            }
          }
        } else {
          null == $index$$102$$ ? (this.$_rows$.data.push($row$$5$$), this.$_rows$.keys.push($key$$50$$), $rowArray$$2$$.indexes.push(this.$_rows$.data.length - 1)) : (this.$_rows$.data.splice($index$$102$$[$i$$143_options$$232$$], 0, $row$$5$$), this.$_rows$.keys.splice($index$$102$$[$i$$143_options$$232$$], 0, $key$$50$$), $rowArray$$2$$.indexes.push($index$$102$$[$i$$143_options$$232$$]));
        }
        this.$_totalSize$++;
        this.$_realignRowIndices$();
      }
    }
    !$silent$$24$$ && 0 < $rowArray$$2$$.data.length && $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.ADD, $rowArray$$2$$);
    return Promise.resolve($rowArray$$2$$);
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_fetchInternal$$($options$$233$$) {
    $options$$233$$ = $options$$233$$ || {};
    this.$_startFetch$($options$$233$$);
    var $pageSize_result$$21$$;
    try {
      $pageSize_result$$21$$ = 0 < $options$$233$$.pageSize ? $options$$233$$.pageSize : -1;
      this.$_startIndex$ || (this.$_startIndex$ = 0);
      if (null == this.$_rows$ || 0 == this.$_rows$.length) {
        this.$_rows$ = this.$_getRowArray$(this.$_data$), this.$_totalSize$ = this.$_data$.length;
      }
      this.$_startIndex$ = null == $options$$233$$.startIndex ? this.$_startIndex$ : $options$$233$$.startIndex;
      var $endIndex$$ = $oj$$9$$.$ArrayTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, $pageSize_result$$21$$), $rowArray$$3$$ = [], $keyArray$$ = [], $i$$144$$;
      for ($i$$144$$ = this.$_startIndex$;$i$$144$$ <= $endIndex$$;$i$$144$$++) {
        $rowArray$$3$$[$i$$144$$ - this.$_startIndex$] = this.$_rows$.data[$i$$144$$], $keyArray$$[$i$$144$$ - this.$_startIndex$] = this.$_rows$.keys[$i$$144$$];
      }
    } catch ($err$$7$$) {
      return this.$_endFetch$($options$$233$$, null, $err$$7$$), Promise.reject($err$$7$$);
    }
    $endIndex$$ < this.$_startIndex$ && (this.$_startIndex$ = $endIndex$$ + 1);
    $options$$233$$.pageSize = $pageSize_result$$21$$;
    $options$$233$$.startIndex = this.$_startIndex$;
    $options$$233$$.refresh = !0;
    $pageSize_result$$21$$ = {data:$rowArray$$3$$, keys:$keyArray$$, startIndex:this.$_startIndex$};
    this.$_endFetch$($options$$233$$, $pageSize_result$$21$$, null);
    return Promise.resolve($pageSize_result$$21$$);
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_getInternal$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_getInternal$$($id$$18$$) {
    var $i$$145$$, $j$$22$$, $row$$6$$, $key$$51$$, $result$$22$$ = null;
    for ($i$$145$$ = 0;$i$$145$$ < this.$_rows$.data.length;$i$$145$$++) {
      if ($row$$6$$ = this.$_rows$.data[$i$$145$$], void 0 !== $row$$6$$) {
        if ($key$$51$$ = this.$_rows$.keys[$i$$145$$], $$$$9$$.isArray($key$$51$$) && $$$$9$$.isArray($id$$18$$)) {
          if ($key$$51$$.length == $id$$18$$.length) {
            var $equal$$ = !0;
            for ($j$$22$$ = 0;$j$$22$$ < $id$$18$$.length;$j$$22$$++) {
              if ($key$$51$$[$j$$22$$] != $id$$18$$[$j$$22$$]) {
                $equal$$ = !1;
                break;
              }
            }
            $equal$$ && ($result$$22$$ = {data:$row$$6$$, key:$key$$51$$, index:this.$_rows$.indexes[$i$$145$$]});
          }
        } else {
          $key$$51$$ == $id$$18$$ && ($result$$22$$ = {data:$row$$6$$, key:$key$$51$$, index:this.$_rows$.indexes[$i$$145$$]});
        }
      }
    }
    return $result$$22$$;
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_hasComparator$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_hasComparator$$() {
    var $comparator$$11$$ = this.comparator;
    return void 0 !== $comparator$$11$$ && null !== $comparator$$11$$;
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$146$$ = 0;$i$$146$$ < this.$_rows$.data.length;$i$$146$$++) {
      this.$_rows$.indexes[$i$$146$$] = $i$$146$$;
    }
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_recreateKeyArray$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_recreateKeyArray$$($rows$$) {
    var $i$$147$$;
    for ($i$$147$$ = 0;$i$$147$$ < $rows$$.data.length;$i$$147$$++) {
      $rows$$.keys[$i$$147$$] = this.$_getId$($rows$$.data[$i$$147$$]);
    }
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_removeInternal$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_removeInternal$$($m$$22$$, $options$$235$$) {
    var $i$$148$$, $deletedRow_key$$52_row$$7$$;
    $options$$235$$ = $options$$235$$ || {};
    var $silent$$25$$ = $options$$235$$.silent, $rowArray$$4$$ = [];
    $rowArray$$4$$.data = [];
    $rowArray$$4$$.keys = [];
    $rowArray$$4$$.indexes = [];
    $m$$22$$ instanceof Array || ($m$$22$$ = [$m$$22$$]);
    var $sortedRowArray$$ = [];
    for ($i$$148$$ = 0;$i$$148$$ < $m$$22$$.length;$i$$148$$++) {
      $deletedRow_key$$52_row$$7$$ = $m$$22$$[$i$$148$$], null != $deletedRow_key$$52_row$$7$$ && ($deletedRow_key$$52_row$$7$$ = this.$_getId$($deletedRow_key$$52_row$$7$$), $deletedRow_key$$52_row$$7$$ = this.$_getInternal$($deletedRow_key$$52_row$$7$$, null), $sortedRowArray$$.push({data:$deletedRow_key$$52_row$$7$$.data, key:$deletedRow_key$$52_row$$7$$.key, index:$deletedRow_key$$52_row$$7$$.index}));
    }
    $sortedRowArray$$.sort(function($a$$95$$, $b$$60$$) {
      return $a$$95$$.index - $b$$60$$.index;
    });
    for ($i$$148$$ = 0;$i$$148$$ < $sortedRowArray$$.length;$i$$148$$++) {
      $rowArray$$4$$.data.push($sortedRowArray$$[$i$$148$$].data), $rowArray$$4$$.keys.push($sortedRowArray$$[$i$$148$$].key), $rowArray$$4$$.indexes.push($sortedRowArray$$[$i$$148$$].index);
    }
    for ($i$$148$$ = $rowArray$$4$$.indexes.length - 1;0 <= $i$$148$$;$i$$148$$--) {
      this.$_rows$.data.splice($rowArray$$4$$.indexes[$i$$148$$], 1), this.$_rows$.keys.splice($rowArray$$4$$.indexes[$i$$148$$], 1), this.$_rows$.indexes.splice($rowArray$$4$$.indexes[$i$$148$$], 1), this.$_totalSize$--, this.$_realignRowIndices$();
    }
    !$silent$$25$$ && 0 < $rowArray$$4$$.data.length && $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.REMOVE, $rowArray$$4$$);
    return Promise.resolve($rowArray$$4$$);
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_startFetch$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_startFetch$$($options$$236$$) {
    $options$$236$$.silent || $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$236$$.startIndex});
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_endFetch$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_endFetch$$($options$$237$$, $result$$23$$, $error$$24$$) {
    null != $error$$24$$ ? $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.ERROR, $error$$24$$) : $options$$237$$.silent || $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.SYNC, $result$$23$$);
  };
  $oj$$9$$.$ArrayTableDataSource$.$_compareKeys$ = function $$oj$$9$$$$ArrayTableDataSource$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $direction$$5$$) {
    if ("descending" == $direction$$5$$) {
      if ($keyA$$4$$ < $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ < $keyA$$4$$) {
        return-1;
      }
    } else {
      if ($keyA$$4$$ > $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ > $keyA$$4$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$9$$.$ArrayTableDataSource$.$_getEndIndex$ = function $$oj$$9$$$$ArrayTableDataSource$$$_getEndIndex$$($rows$$1$$, $startIndex$$2$$, $pageSize$$1$$) {
    var $endIndex$$1$$ = $rows$$1$$.data.length - 1;
    0 < $pageSize$$1$$ && ($endIndex$$1$$ = $startIndex$$2$$ + $pageSize$$1$$ - 1, $endIndex$$1$$ = $endIndex$$1$$ > $rows$$1$$.data.length - 1 ? $rows$$1$$.data.length - 1 : $endIndex$$1$$);
    return $endIndex$$1$$;
  };
  $oj$$9$$.$ArrayTableDataSource$.$_getKey$ = function $$oj$$9$$$$ArrayTableDataSource$$$_getKey$$($val$$28$$, $attr$$14$$) {
    return $$$$9$$.isFunction($val$$28$$[$attr$$14$$]) ? $val$$28$$[$attr$$14$$]() : $val$$28$$[$attr$$14$$];
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_getRowArray$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_getRowArray$$($values$$8$$) {
    var $endIndex$$2$$ = $values$$8$$.length - 1, $rowArray$$5$$ = {}, $i$$149$$, $prop$$61$$;
    $rowArray$$5$$.data = [];
    $rowArray$$5$$.keys = [];
    $rowArray$$5$$.indexes = [];
    this.$_attributes$ = null;
    for ($i$$149$$ = 0;$i$$149$$ <= $endIndex$$2$$;$i$$149$$++) {
      var $clonedRowValues$$ = {}, $rowValues$$ = $values$$8$$[$i$$149$$];
      for ($prop$$61$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$61$$) && ($clonedRowValues$$[$prop$$61$$] = $rowValues$$[$prop$$61$$], 0 == $i$$149$$ && (null == this.$_attributes$ && (this.$_attributes$ = []), this.$_attributes$.push($prop$$61$$)));
      }
      $rowArray$$5$$.data[$i$$149$$] = $clonedRowValues$$;
      $rowArray$$5$$.keys[$i$$149$$] = this.$_getId$($clonedRowValues$$);
      $rowArray$$5$$.indexes[$i$$149$$] = $i$$149$$;
    }
    return $rowArray$$5$$;
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_getId$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_getId$$($row$$9$$) {
    var $id$$19$$, $idAttribute$$ = this.$_getIdAttr$();
    if ("string" === $$$$9$$.type($idAttribute$$)) {
      $id$$19$$ = $row$$9$$[$idAttribute$$];
    } else {
      if ($$$$9$$.isArray($idAttribute$$)) {
        var $i$$150$$;
        $id$$19$$ = [];
        for ($i$$150$$ = 0;$i$$150$$ < $idAttribute$$.length;$i$$150$$++) {
          $id$$19$$[$i$$150$$] = $row$$9$$[$idAttribute$$[$i$$150$$]];
        }
      }
    }
    return $id$$19$$;
  };
  $oj$$9$$.$ArrayTableDataSource$.prototype.$_getIdAttr$ = function $$oj$$9$$$$ArrayTableDataSource$$$$_getIdAttr$$() {
    return null != this.$_idAttribute$ ? this.$_idAttribute$ : this.$_attributes$.hasOwnProperty("id") ? "id" : this.$_attributes$;
  };
  $oj$$9$$.$ArrayTableDataSource$.$_sortFunc$ = function $$oj$$9$$$$ArrayTableDataSource$$$_sortFunc$$($a$$96_attrs1$$2$$, $attrs2$$2_b$$61$$, $comparator$$12_i$$151$$, $self$$48$$) {
    var $keyA$$5_retVal$$7$$, $keyB$$5$$;
    if ($$$$9$$.isFunction($comparator$$12_i$$151$$)) {
      if (1 === $comparator$$12_i$$151$$.length) {
        $keyA$$5_retVal$$7$$ = $comparator$$12_i$$151$$.call($self$$48$$, $a$$96_attrs1$$2$$);
        $keyB$$5$$ = $comparator$$12_i$$151$$.call($self$$48$$, $attrs2$$2_b$$61$$);
        $a$$96_attrs1$$2$$ = $oj$$9$$.$StringUtils$.$isString$($keyA$$5_retVal$$7$$) ? $keyA$$5_retVal$$7$$.split(",") : [$keyA$$5_retVal$$7$$];
        $attrs2$$2_b$$61$$ = $oj$$9$$.$StringUtils$.$isString$($keyB$$5$$) ? $keyB$$5$$.split(",") : [$keyB$$5$$];
        for ($comparator$$12_i$$151$$ = 0;$comparator$$12_i$$151$$ < $a$$96_attrs1$$2$$.length;$comparator$$12_i$$151$$++) {
          if ($keyA$$5_retVal$$7$$ = $oj$$9$$.$ArrayTableDataSource$.$_compareKeys$($a$$96_attrs1$$2$$[$comparator$$12_i$$151$$], $attrs2$$2_b$$61$$[$comparator$$12_i$$151$$], $self$$48$$.direction), 0 !== $keyA$$5_retVal$$7$$) {
            return $keyA$$5_retVal$$7$$;
          }
        }
        return 0;
      }
      return $comparator$$12_i$$151$$.call($self$$48$$, $a$$96_attrs1$$2$$, $attrs2$$2_b$$61$$);
    }
    if ($oj$$9$$.$StringUtils$.$isString$($comparator$$12_i$$151$$)) {
      var $attrs$$21$$ = $comparator$$12_i$$151$$.split(",");
      for ($comparator$$12_i$$151$$ = 0;$comparator$$12_i$$151$$ < $attrs$$21$$.length;$comparator$$12_i$$151$$++) {
        if ($keyA$$5_retVal$$7$$ = $oj$$9$$.$ArrayTableDataSource$.$_getKey$($a$$96_attrs1$$2$$, $attrs$$21$$[$comparator$$12_i$$151$$]), $keyB$$5$$ = $oj$$9$$.$ArrayTableDataSource$.$_getKey$($attrs2$$2_b$$61$$, $attrs$$21$$[$comparator$$12_i$$151$$]), $keyA$$5_retVal$$7$$ = $oj$$9$$.$ArrayTableDataSource$.$_compareKeys$($keyA$$5_retVal$$7$$, $keyB$$5$$, $self$$48$$.direction), 0 !== $keyA$$5_retVal$$7$$) {
          return $keyA$$5_retVal$$7$$;
        }
      }
    }
    return 0;
  };
  $oj$$9$$.$ArrayTableDataSource$.$_LOGGER_MSG$ = {_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields."};
  $oj$$9$$.$CollectionTableDataSource$ = function $$oj$$9$$$$CollectionTableDataSource$$($data$$59$$, $options$$238$$) {
    this.data = {};
    if (!($data$$59$$ instanceof $oj$$9$$.$Collection$)) {
      throw Error($oj$$9$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$9$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$9$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$59$$, $options$$238$$);
    this.$_collection$ = $data$$59$$;
    this.$_addCollectionEventListeners$();
    this.Init();
    if (null != $options$$238$$ && ("enabled" == $options$$238$$.startFetch || null == $options$$238$$.startFetch) || null == $options$$238$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$9$$.$CollectionTableDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$CollectionTableDataSource$, $oj$$9$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$9$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$9$$$$CollectionTableDataSource$$$Init$() {
    $oj$$9$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$9$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$9$$.$CollectionTableDataSource$.prototype.at = function $$oj$$9$$$$CollectionTableDataSource$$$at$($index$$104$$, $options$$239$$) {
    $options$$239$$ = $options$$239$$ || {};
    $options$$239$$.deferred = !0;
    var $model$$57$$ = this.$_collection$.at($index$$104$$, $options$$239$$), $self$$49$$ = this;
    $self$$49$$.$_isFetchingForAt$ = !0;
    var $row$$10$$;
    return new Promise(function($resolve$$26$$, $reject$$26$$) {
      null != $model$$57$$ ? $model$$57$$.then(function($resolvedModel$$) {
        $self$$49$$.$_isFetchingForAt$ = !1;
        $row$$10$$ = {data:$resolvedModel$$.attributes, index:$index$$104$$, key:$resolvedModel$$.id};
        $resolve$$26$$($row$$10$$);
      }, function($e$$50$$) {
        $self$$49$$.$_isFetchingForAt$ = !1;
        $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$49$$, $oj$$9$$.$TableDataSource$.$EventType$.ERROR, $e$$50$$);
        $reject$$26$$($e$$50$$);
      }) : $resolve$$26$$(null);
    });
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$9$$.$CollectionTableDataSource$.prototype.at});
  $oj$$9$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$9$$$$CollectionTableDataSource$$$fetch$($options$$240$$) {
    $options$$240$$ = $options$$240$$ || {};
    return "init" != $options$$240$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$240$$) : Promise.resolve();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$9$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$9$$.$CollectionTableDataSource$.prototype.get = function $$oj$$9$$$$CollectionTableDataSource$$$get$($id$$20$$, $options$$241$$) {
    $options$$241$$ = $options$$241$$ || {};
    $options$$241$$.deferred = !0;
    var $model$$58$$ = this.$_collection$.get($id$$20$$, $options$$241$$), $self$$50$$ = this, $row$$11$$;
    return new Promise(function($resolve$$27$$, $reject$$27$$) {
      null != $model$$58$$ ? $model$$58$$.then(function($resolvedModel$$1$$) {
        $row$$11$$ = {data:$resolvedModel$$1$$.attributes, index:$resolvedModel$$1$$.index, key:$resolvedModel$$1$$.id};
        $resolve$$27$$($row$$11$$);
      }, function($e$$51$$) {
        $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$50$$, $oj$$9$$.$TableDataSource$.$EventType$.ERROR, $e$$51$$);
        $reject$$27$$($e$$51$$);
      }) : $resolve$$27$$(null);
    });
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$9$$.$CollectionTableDataSource$.prototype.get});
  $oj$$9$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$9$$$$CollectionTableDataSource$$$sort$($criteria$$5$$) {
    if (null == $criteria$$5$$) {
      return Promise.resolve();
    }
    var $self$$51$$ = this;
    return new Promise(function($resolve$$28$$) {
      $self$$51$$.$_setComparator$($criteria$$5$$);
      $self$$51$$.$_collection$.sort(null);
      $resolve$$28$$({header:$criteria$$5$$.key, direction:$criteria$$5$$.direction});
    });
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$9$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$9$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$9$$$$CollectionTableDataSource$$$totalSize$() {
    var $totalSize$$ = 0 <= this.$_collection$.totalResults ? this.$_collection$.totalResults : -1;
    if (-1 < $totalSize$$) {
      var $size$$11$$ = this.$_collection$.size();
      return $size$$11$$ > $totalSize$$ ? $size$$11$$ : $totalSize$$;
    }
    0 < this.$_fetchResultSize$ && ($totalSize$$ = this.$_fetchResultSize$);
    return $totalSize$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$9$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$9$$.$CollectionTableDataSource$.prototype.$_addCollectionEventListeners$ = function $$oj$$9$$$$CollectionTableDataSource$$$$_addCollectionEventListeners$$() {
    var $self$$52$$ = this;
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.SYNC, function($event$$68_result$$25$$) {
      if ($event$$68_result$$25$$ instanceof $oj$$9$$.$Collection$ && !$self$$52$$.$_isFetchingForAt$ && !$self$$52$$.$_isFetching$) {
        var $startIndex$$3$$ = $event$$68_result$$25$$.offset, $pageSize$$2$$ = $event$$68_result$$25$$.lastFetchCount;
        0 < $pageSize$$2$$ ? ($self$$52$$.$_startIndex$ = $startIndex$$3$$, $self$$52$$.$_pageSize$ = $pageSize$$2$$, $self$$52$$.$_isFetchingForAt$ = !0, $event$$68_result$$25$$.$IterativeAt$($startIndex$$3$$, $startIndex$$3$$ + $pageSize$$2$$).then(function($modelArray$$2$$) {
          $self$$52$$.$_isFetchingForAt$ = !1;
          var $rowArray$$6$$ = [], $keyArray$$1$$ = [], $i$$152$$;
          for ($i$$152$$ = 0;$i$$152$$ < $modelArray$$2$$.length;$i$$152$$++) {
            null != $modelArray$$2$$[$i$$152$$] && ($rowArray$$6$$.push($modelArray$$2$$[$i$$152$$].attributes), $keyArray$$1$$.push($modelArray$$2$$[$i$$152$$].id));
          }
          $self$$52$$.$_endFetch$.call($self$$52$$, {silent:!1}, {data:$rowArray$$6$$, keys:$keyArray$$1$$, startIndex:$startIndex$$3$$}, null);
        })) : ($event$$68_result$$25$$ = $self$$52$$.$_getRowArray$(), $self$$52$$.$_endFetch$.call($self$$52$$, {silent:!1}, $event$$68_result$$25$$, null));
      }
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.ALLADDED, function($event$$69$$, $modelArray$$3$$) {
      var $rowArray$$7$$ = [], $keyArray$$2$$ = [], $indexArray$$1$$ = [], $i$$153$$;
      for ($i$$153$$ = 0;$i$$153$$ < $modelArray$$3$$.length;$i$$153$$++) {
        $rowArray$$7$$.push($modelArray$$3$$[$i$$153$$].attributes), $keyArray$$2$$.push($modelArray$$3$$[$i$$153$$].id), $indexArray$$1$$.push($modelArray$$3$$[$i$$153$$].index);
      }
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$7$$, keys:$keyArray$$2$$, indexes:$indexArray$$1$$});
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.ALLREMOVED, function($event$$70$$, $modelArray$$4$$) {
      var $rowArray$$8$$ = [], $keyArray$$3$$ = [], $indexArray$$2$$ = [], $i$$154$$;
      for ($i$$154$$ = 0;$i$$154$$ < $modelArray$$4$$.length;$i$$154$$++) {
        $rowArray$$8$$.push($modelArray$$4$$[$i$$154$$].attributes), $keyArray$$3$$.push($modelArray$$4$$[$i$$154$$].id), $indexArray$$2$$.push($modelArray$$4$$[$i$$154$$].index);
      }
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$8$$, keys:$keyArray$$3$$, indexes:$indexArray$$2$$});
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.RESET, function($event$$71$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.RESET, $event$$71$$);
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.SORT, function($event$$72$$, $eventOpts$$2$$) {
      null != $eventOpts$$2$$ && $eventOpts$$2$$.add || $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.SORT, $event$$72$$);
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.CHANGE, function($event$$73$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.CHANGE, {data:[$event$$73$$.attributes], keys:[$event$$73$$.id], indexes:[$event$$73$$.index]});
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.DESTROY, function($event$$74$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.DESTROY, $event$$74$$);
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.REFRESH, function($event$$75$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.REFRESH, $event$$75$$);
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.ERROR, function($collection$$29$$, $xhr$$20$$, $options$$242$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$52$$, $oj$$9$$.$TableDataSource$.$EventType$.ERROR, $collection$$29$$, $xhr$$20$$, $options$$242$$);
    });
  };
  $oj$$9$$.$CollectionTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$9$$$$CollectionTableDataSource$$$$_fetchInternal$$($options$$243$$) {
    this.$_startFetch$($options$$243$$);
    $options$$243$$ = $options$$243$$ || {};
    var $self$$53$$ = this;
    this.$_isPaged$ = 0 < $options$$243$$.pageSize ? !0 : !1;
    this.$_startIndex$ = null == $options$$243$$.startIndex ? this.$_startIndex$ : $options$$243$$.startIndex;
    this.$_initFetch$ = !0;
    this.$_pageSize$ = 0 < $options$$243$$.pageSize ? $options$$243$$.pageSize : -1;
    $options$$243$$.pageSize = this.$_pageSize$;
    $options$$243$$.startIndex = this.$_startIndex$;
    $options$$243$$.refresh = !0;
    return new Promise(function($resolve$$29$$, $reject$$29$$) {
      if ($self$$53$$.$_isPaged$) {
        $self$$53$$.$_collection$.$setRangeLocal$($self$$53$$.$_startIndex$, $self$$53$$.$_pageSize$).then(function($actual$$5$$) {
          var $result$$28_rowArray$$9$$ = [], $keyArray$$4$$ = [], $i$$155$$;
          for ($i$$155$$ = 0;$i$$155$$ < $actual$$5$$.models.length;$i$$155$$++) {
            $result$$28_rowArray$$9$$[$i$$155$$] = $actual$$5$$.models[$i$$155$$].attributes, $keyArray$$4$$[$i$$155$$] = $actual$$5$$.models[$i$$155$$].id;
          }
          $result$$28_rowArray$$9$$ = {data:$result$$28_rowArray$$9$$, keys:$keyArray$$4$$, startIndex:$self$$53$$.$_startIndex$};
          $actual$$5$$.models.length < $self$$53$$.$_pageSize$ ? 0 > $self$$53$$.totalSize() && ($self$$53$$.$_fetchResultSize$ = $self$$53$$.$_startIndex$ + $actual$$5$$.models.length) : $self$$53$$.$_fetchResultSize$ = null;
          $self$$53$$.$_endFetch$.call($self$$53$$, $options$$243$$, $result$$28_rowArray$$9$$, null);
          $resolve$$29$$($result$$28_rowArray$$9$$);
        }, function($error$$25$$) {
          $self$$53$$.$_endFetch$.call($self$$53$$, $options$$243$$, null, $error$$25$$);
          $reject$$29$$($error$$25$$);
        });
      } else {
        if (0 < $self$$53$$.$_collection$.size()) {
          var $result$$27$$ = $self$$53$$.$_getRowArray$();
          $self$$53$$.$_endFetch$.call($self$$53$$, $options$$243$$, $result$$27$$, null);
          $resolve$$29$$($result$$27$$);
        } else {
          $self$$53$$.$_collection$.fetch({success:function($collection$$30_result$$29$$) {
            $self$$53$$.$_collection$ = $collection$$30_result$$29$$;
            $collection$$30_result$$29$$ = $self$$53$$.$_getRowArray$();
            $self$$53$$.$_endFetch$.call($self$$53$$, $options$$243$$, $collection$$30_result$$29$$, null);
            $resolve$$29$$($collection$$30_result$$29$$);
          }, error:function($collection$$31$$, $e$$52$$) {
            $self$$53$$.$_collection$ = $collection$$31$$;
            $self$$53$$.$_endFetch$.call($self$$53$$, $options$$243$$, null, $e$$52$$);
            $reject$$29$$($e$$52$$);
          }});
        }
      }
    });
  };
  $oj$$9$$.$CollectionTableDataSource$.prototype.$_startFetch$ = function $$oj$$9$$$$CollectionTableDataSource$$$$_startFetch$$($options$$244$$) {
    this.$_isFetching$ = !0;
    $options$$244$$.silent || $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$244$$.startIndex});
  };
  $oj$$9$$.$CollectionTableDataSource$.prototype.$_endFetch$ = function $$oj$$9$$$$CollectionTableDataSource$$$$_endFetch$$($options$$245$$, $result$$30$$, $error$$26$$) {
    this.$_isFetching$ = !1;
    null != $error$$26$$ ? $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.ERROR, $error$$26$$) : $options$$245$$.silent || $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$TableDataSource$.$EventType$.SYNC, $result$$30$$);
  };
  $oj$$9$$.$CollectionTableDataSource$.prototype.$_setComparator$ = function $$oj$$9$$$$CollectionTableDataSource$$$$_setComparator$$($criteria$$6_direction$$6$$) {
    if (null == $criteria$$6_direction$$6$$) {
      this.$_collection$.comparator = null;
    } else {
      var $key$$53$$ = $criteria$$6_direction$$6$$.key;
      $criteria$$6_direction$$6$$ = $criteria$$6_direction$$6$$.direction;
      var $comparator$$13$$ = null;
      this.$_collection$.$IsVirtual$() ? (this.$_collection$.comparator = $key$$53$$, this.$_collection$.sortDirection = "ascending" === $criteria$$6_direction$$6$$ ? 1 : -1) : ("ascending" == $criteria$$6_direction$$6$$ ? $comparator$$13$$ = function $$comparator$$13$$$($row$$12$$) {
        return $$$$9$$.isFunction($row$$12$$.get) ? $row$$12$$.get($key$$53$$) : $row$$12$$[$key$$53$$]();
      } : "descending" == $criteria$$6_direction$$6$$ && ($comparator$$13$$ = function $$comparator$$13$$$($rowA$$1$$, $rowB$$1$$) {
        var $a$$97$$, $b$$62$$;
        $$$$9$$.isFunction($rowA$$1$$.get) ? ($a$$97$$ = $rowA$$1$$.get($key$$53$$), $b$$62$$ = $rowB$$1$$.get($key$$53$$)) : ($a$$97$$ = $rowA$$1$$[$key$$53$$](), $b$$62$$ = $rowB$$1$$[$key$$53$$]());
        return $a$$97$$ === $b$$62$$ ? 0 : $a$$97$$ > $b$$62$$ ? -1 : 1;
      }), this.$_collection$.comparator = $comparator$$13$$);
    }
  };
  $oj$$9$$.$CollectionTableDataSource$.prototype.$_getRowArray$ = function $$oj$$9$$$$CollectionTableDataSource$$$$_getRowArray$$() {
    var $endIndex$$3$$ = this.$_collection$.size() - 1, $rowArray$$10$$ = [], $keyArray$$5$$ = [], $i$$156$$;
    for ($i$$156$$ = 0;$i$$156$$ <= $endIndex$$3$$;$i$$156$$++) {
      $rowArray$$10$$[$i$$156$$] = this.$_collection$.at($i$$156$$).attributes, $keyArray$$5$$[$i$$156$$] = this.$_collection$.at($i$$156$$).id;
    }
    return{data:$rowArray$$10$$, keys:$keyArray$$5$$, startIndex:this.$_startIndex$};
  };
  $oj$$9$$.$DomScroller$ = function $$oj$$9$$$$DomScroller$$($element$$60$$, $datasource$$, $options$$246$$) {
    $options$$246$$ = $options$$246$$ || {};
    this.$_data$ = $datasource$$;
    this.$_element$ = $element$$60$$;
    this.$_fetchSize$ = $options$$246$$.fetchSize;
    this.$_fetchSize$ = 0 < this.$_fetchSize$ ? this.$_fetchSize$ : 25;
    this.$_maxCount$ = $options$$246$$.maxCount;
    this.$_maxCount$ = 0 < this.$_maxCount$ ? this.$_maxCount$ : 500;
    this.$_rowCount$ = 0;
    this.$_successCallback$ = $options$$246$$.success;
    this.$_errorCallback$ = $options$$246$$.error;
    this.$_registerDataSourceEventListeners$();
    $$$$9$$(this.$_element$).on("scroll.domscroller", function($event$$76_maxScrollTop$$) {
      var $scrollTop$$ = $$$$9$$($event$$76_maxScrollTop$$.target).scrollTop();
      $event$$76_maxScrollTop$$ = $$$$9$$($event$$76_maxScrollTop$$.target)[0].scrollHeight - $$$$9$$($event$$76_maxScrollTop$$.target)[0].clientHeight;
      0 < $event$$76_maxScrollTop$$ && this.$_handleScrollerScrollTop$($scrollTop$$, $event$$76_maxScrollTop$$);
    }.bind(this));
  };
  $oj$$9$$.$DomScroller$.prototype.destroy = function $$oj$$9$$$$DomScroller$$$destroy$() {
    this.$_unregisterDataSourceEventListeners$();
    $$$$9$$(this.$_element$).off("scroll.domscroller");
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.destroy", {destroy:$oj$$9$$.$DomScroller$.prototype.destroy});
  $oj$$9$$.$DomScroller$.prototype.checkViewport = function $$oj$$9$$$$DomScroller$$$checkViewport$() {
    return 0 < this.$_element$[0].clientHeight && !this.$_checkOverflow$() ? this.$_fetchMoreRows$() : Promise.resolve(null);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.checkViewport", {checkViewport:$oj$$9$$.$DomScroller$.prototype.checkViewport});
  $oj$$9$$.$DomScroller$.prototype.$_handleScrollerScrollTop$ = function $$oj$$9$$$$DomScroller$$$$_handleScrollerScrollTop$$($scrollTop$$1$$, $maxScrollTop$$1$$) {
    if (1 >= $maxScrollTop$$1$$ - $scrollTop$$1$$) {
      var $self$$54$$ = this;
      this.$_fetchMoreRows$().then(function($result$$31$$) {
        null != $self$$54$$.$_successCallback$ && $self$$54$$.$_successCallback$($result$$31$$);
      }, this.$_errorCallback$);
    }
  };
  $oj$$9$$.$DomScroller$.prototype.$_checkOverflow$ = function $$oj$$9$$$$DomScroller$$$$_checkOverflow$$() {
    var $element$$61$$ = this.$_element$;
    return $element$$61$$[0].scrollHeight > $element$$61$$[0].clientHeight ? !0 : !1;
  };
  $oj$$9$$.$DomScroller$.prototype.$_fetchMoreRows$ = function $$oj$$9$$$$DomScroller$$$$_fetchMoreRows$$() {
    if (this.$_fetchPromise$) {
      return this.$_fetchPromise$;
    }
    var $remainingCount$$ = this.$_maxCount$ - this.$_rowCount$;
    if (0 < $remainingCount$$) {
      var $pageSize$$3$$ = this.$_fetchSize$, $self$$55$$ = this;
      $remainingCount$$ < this.$_fetchSize$ && ($pageSize$$3$$ = $remainingCount$$);
      var $fetchPromise$$ = this.$_fetchNext$({pageSize:$pageSize$$3$$});
      return this.$_fetchPromise$ = new Promise(function($resolve$$30$$) {
        $fetchPromise$$.then(function($result$$32$$) {
          $self$$55$$.$_fetchPromise$ = null;
          null != $result$$32$$ && ($self$$55$$.$_rowCount$ = $result$$32$$.data.length + $result$$32$$.startIndex, $remainingCount$$ < $self$$55$$.$_fetchSize$ && ($result$$32$$.maxCount = $self$$55$$.$_maxCount$, $result$$32$$.maxCountLimit = !0));
          $resolve$$30$$($result$$32$$);
        });
      });
    }
    return Promise.resolve({maxCount:this.$_maxCount$, maxCountLimit:!0});
  };
  $oj$$9$$.$DomScroller$.prototype.$_fetchNext$ = function $$oj$$9$$$$DomScroller$$$$_fetchNext$$($options$$247$$) {
    $options$$247$$ = $options$$247$$ || {};
    var $pageSize$$4$$ = $options$$247$$.pageSize;
    this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$4$$ : $pageSize$$4$$;
    if (-1 == this.$_data$.totalSize() || this.$_data$.totalSize() > this.$_currentStartIndex$) {
      var $self$$56$$ = this;
      return new Promise(function($resolve$$31$$, $reject$$31$$) {
        $self$$56$$.$_data$.fetch({startIndex:$self$$56$$.$_currentStartIndex$, pageSize:$pageSize$$4$$}).then(function($result$$33$$) {
          $resolve$$31$$($result$$33$$);
        }, function() {
          $reject$$31$$(null);
        });
      });
    }
    return Promise.resolve();
  };
  $oj$$9$$.$DomScroller$.prototype.$_handleDataReset$ = function $$oj$$9$$$$DomScroller$$$$_handleDataReset$$() {
    this.$_currentStartIndex$ = null;
    this.$_rowCount$ = 0;
  };
  $oj$$9$$.$DomScroller$.prototype.$_handleDataSync$ = function $$oj$$9$$$$DomScroller$$$$_handleDataSync$$($event$$77$$) {
    this.$_currentStartIndex$ = $event$$77$$.startIndex;
    this.$_rowCount$ = $event$$77$$.data.length + this.$_currentStartIndex$;
  };
  $oj$$9$$.$DomScroller$.prototype.$_registerDataSourceEventListeners$ = function $$oj$$9$$$$DomScroller$$$$_registerDataSourceEventListeners$$() {
    var $data$$60$$ = this.$_data$;
    if (null != $data$$60$$) {
      this.$_unregisterDataSourceEventListeners$();
      this.$_dataSourceEventHandlers$ = [];
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$9$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$9$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$9$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$9$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataSync$.bind(this)});
      var $i$$157$$, $ev$$;
      for ($i$$157$$ = 0;$i$$157$$ < this.$_dataSourceEventHandlers$.length;$i$$157$$++) {
        ($ev$$ = $data$$60$$.on(this.$_dataSourceEventHandlers$[$i$$157$$].eventType, this.$_dataSourceEventHandlers$[$i$$157$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$157$$].eventHandler = $ev$$);
      }
    }
  };
  $oj$$9$$.$DomScroller$.prototype.$_unregisterDataSourceEventListeners$ = function $$oj$$9$$$$DomScroller$$$$_unregisterDataSourceEventListeners$$() {
    var $data$$61$$ = this.$_data$;
    if (null != this.$_dataSourceEventHandlers$ && null != $data$$61$$) {
      var $i$$158$$;
      for ($i$$158$$ = 0;$i$$158$$ < this.$_dataSourceEventHandlers$.length;$i$$158$$++) {
        $data$$61$$.off(this.$_dataSourceEventHandlers$[$i$$158$$].eventType, this.$_dataSourceEventHandlers$[$i$$158$$].eventHandler);
      }
    }
  };
  $oj$$9$$.$PagingModel$ = function $$oj$$9$$$$PagingModel$$() {
  };
  $goog$exportPath_$$("PagingModel", $oj$$9$$.$PagingModel$, $oj$$9$$);
  $oj$$9$$.$PagingModel$.prototype.getPage = function $$oj$$9$$$$PagingModel$$$getPage$() {
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPage", {getPage:$oj$$9$$.$PagingModel$.prototype.getPage});
  $oj$$9$$.$PagingModel$.prototype.setPage = function $$oj$$9$$$$PagingModel$$$setPage$() {
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.setPage", {setPage:$oj$$9$$.$PagingModel$.prototype.setPage});
  $oj$$9$$.$PagingModel$.prototype.getStartItemIndex = function $$oj$$9$$$$PagingModel$$$getStartItemIndex$() {
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$9$$.$PagingModel$.prototype.getStartItemIndex});
  $oj$$9$$.$PagingModel$.prototype.getEndItemIndex = function $$oj$$9$$$$PagingModel$$$getEndItemIndex$() {
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$9$$.$PagingModel$.prototype.getEndItemIndex});
  $oj$$9$$.$PagingModel$.prototype.getPageCount = function $$oj$$9$$$$PagingModel$$$getPageCount$() {
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPageCount", {getPageCount:$oj$$9$$.$PagingModel$.prototype.getPageCount});
  $oj$$9$$.$PagingModel$.prototype.totalSize = function $$oj$$9$$$$PagingModel$$$totalSize$() {
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSize", {totalSize:$oj$$9$$.$PagingModel$.prototype.totalSize});
  $oj$$9$$.$PagingModel$.$EventType$ = {BEFOREPAGE:"beforePage", PAGE:"page", PAGECOUNT:"pageCount"};
  $goog$exportPath_$$("PagingModel.EventType", $oj$$9$$.$PagingModel$.$EventType$, $oj$$9$$);
  $oj$$9$$.$PagingTableDataSource$ = function $$oj$$9$$$$PagingTableDataSource$$($dataSource$$) {
    if (!($dataSource$$ instanceof $oj$$9$$.$TableDataSource$)) {
      throw Error($oj$$9$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$9$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$;
    this.$_endIndex$ = this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$9$$.$PagingTableDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$PagingTableDataSource$, $oj$$9$$.$TableDataSource$, "oj.PagingTableDataSource");
  $oj$$9$$.$PagingTableDataSource$.prototype.Init = function $$oj$$9$$$$PagingTableDataSource$$$Init$() {
    $oj$$9$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$9$$.$PagingTableDataSource$.prototype.Init});
  $oj$$9$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$9$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$9$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$9$$.$PagingTableDataSource$.prototype.getPage = function $$oj$$9$$$$PagingTableDataSource$$$getPage$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_getPageFromStartIndex$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPage", {getPage:$oj$$9$$.$PagingTableDataSource$.prototype.getPage});
  $oj$$9$$.$PagingTableDataSource$.prototype.setPage = function $$oj$$9$$$$PagingTableDataSource$$$setPage$($value$$171$$, $options$$250$$) {
    $options$$250$$ = $options$$250$$ || {};
    $value$$171$$ = parseInt($value$$171$$, 10);
    try {
      $oj$$9$$.$PagingTableDataSource$.$superclass$.handleEvent.call(this, $oj$$9$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$171$$, previousPage:this.$_getPageFromStartIndex$()});
    } catch ($err$$8$$) {
      return Promise.reject(null);
    }
    var $previousPage$$ = this.$_getPageFromStartIndex$();
    this.$_pageSize$ = null != $options$$250$$.pageSize ? $options$$250$$.pageSize : this.$_pageSize$;
    $options$$250$$.pageSize = this.$_pageSize$;
    $options$$250$$.startIndex = $value$$171$$ * this.$_pageSize$;
    this.$_startIndex$ = null == $options$$250$$.startIndex ? this.$_startIndex$ : $options$$250$$.startIndex;
    this.$_fetchType$ = "page";
    var $self$$57$$ = this;
    return new Promise(function($resolve$$32$$, $reject$$32$$) {
      0 < $self$$57$$.$_pageSize$ ? $self$$57$$.$dataSource$.fetch($options$$250$$).then(function($result$$34$$) {
        $result$$34$$.startIndex = 0;
        $self$$57$$.$_updateEndIndex$();
        $oj$$9$$.$PagingTableDataSource$.$superclass$.handleEvent.call($self$$57$$, $oj$$9$$.$PagingModel$.$EventType$.PAGE, {page:$self$$57$$.$_getPageFromStartIndex$(), previousPage:$previousPage$$});
        $resolve$$32$$(null);
      }, function() {
        $self$$57$$.$_startIndex$ = $previousPage$$ * $self$$57$$.$_pageSize$;
        $reject$$32$$(null);
      }) : $resolve$$32$$(null);
    });
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPage", {setPage:$oj$$9$$.$PagingTableDataSource$.prototype.setPage});
  $oj$$9$$.$PagingTableDataSource$.prototype.getStartItemIndex = function $$oj$$9$$$$PagingTableDataSource$$$getStartItemIndex$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_startIndex$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$9$$.$PagingTableDataSource$.prototype.getStartItemIndex});
  $oj$$9$$.$PagingTableDataSource$.prototype.getEndItemIndex = function $$oj$$9$$$$PagingTableDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$9$$.$PagingTableDataSource$.prototype.getEndItemIndex});
  $oj$$9$$.$PagingTableDataSource$.prototype.getPageCount = function $$oj$$9$$$$PagingTableDataSource$$$getPageCount$() {
    var $totalSize$$1$$ = this.totalSize();
    return-1 == $totalSize$$1$$ ? -1 : Math.ceil($totalSize$$1$$ / this.$_pageSize$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPageCount", {getPageCount:$oj$$9$$.$PagingTableDataSource$.prototype.getPageCount});
  $oj$$9$$.$PagingTableDataSource$.prototype.at = function $$oj$$9$$$$PagingTableDataSource$$$at$($index$$105$$, $options$$251$$) {
    return this.$dataSource$.at($index$$105$$, $options$$251$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$9$$.$PagingTableDataSource$.prototype.at});
  $oj$$9$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$9$$$$PagingTableDataSource$$$fetch$($options$$252$$) {
    $options$$252$$ = $options$$252$$ || {};
    if (null == $options$$252$$.startIndex) {
      return this.setPage(this.getPage());
    }
    this.$_fetchType$ = "loadMore";
    this.$_startIndex$ = null == $options$$252$$.startIndex ? this.$_startIndex$ : $options$$252$$.startIndex;
    var $pageSize$$5$$ = null != $options$$252$$.pageSize ? $options$$252$$.pageSize : this.$_pageSize$;
    $options$$252$$.pageSize = $pageSize$$5$$;
    $options$$252$$.startIndex = this.$_startIndex$;
    var $self$$58$$ = this;
    return new Promise(function($resolve$$33$$, $reject$$33$$) {
      0 < $pageSize$$5$$ ? $self$$58$$.$dataSource$.fetch($options$$252$$).then(function($result$$35$$) {
        $self$$58$$.$_updateEndIndex$();
        $resolve$$33$$($result$$35$$);
      }, function($e$$54$$) {
        $reject$$33$$($e$$54$$);
      }) : $resolve$$33$$(null);
    });
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$9$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$9$$.$PagingTableDataSource$.prototype.get = function $$oj$$9$$$$PagingTableDataSource$$$get$($id$$21$$, $options$$253$$) {
    return this.$dataSource$.get($id$$21$$, $options$$253$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$9$$.$PagingTableDataSource$.prototype.get});
  $oj$$9$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$9$$$$PagingTableDataSource$$$getCapability$($feature$$9$$) {
    return this.$dataSource$.getCapability($feature$$9$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$9$$.$PagingTableDataSource$.prototype.on = function $$oj$$9$$$$PagingTableDataSource$$$on$($eventType$$31$$, $eventHandler$$3$$) {
    var $self$$59$$ = this, $dataSource$$1$$ = this.$dataSource$;
    if ($eventType$$31$$ == $oj$$9$$.$TableDataSource$.$EventType$.SYNC) {
      var $ev$$1$$ = function $$ev$$1$$$($event$$78$$) {
        $self$$59$$.$_handleSyncEvent$($event$$78$$, $eventHandler$$3$$);
      };
      $dataSource$$1$$.on($eventType$$31$$, $ev$$1$$);
      return $ev$$1$$;
    }
    if ($eventType$$31$$ == $oj$$9$$.$TableDataSource$.$EventType$.ADD || $eventType$$31$$ == $oj$$9$$.$TableDataSource$.$EventType$.REMOVE || $eventType$$31$$ == $oj$$9$$.$TableDataSource$.$EventType$.CHANGE) {
      return $ev$$1$$ = function $$ev$$1$$$($event$$79$$) {
        $self$$59$$.$_handleRowEvent$($event$$79$$, $eventHandler$$3$$);
      }, $dataSource$$1$$.on($eventType$$31$$, $ev$$1$$), $ev$$1$$;
    }
    if ($eventType$$31$$ == $oj$$9$$.$TableDataSource$.$EventType$.REFRESH || $eventType$$31$$ == $oj$$9$$.$TableDataSource$.$EventType$.RESET) {
      return $ev$$1$$ = function $$ev$$1$$$($event$$80$$) {
        $self$$59$$.$_startIndex$ = 0;
        $eventHandler$$3$$($event$$80$$);
      }, $dataSource$$1$$.on($eventType$$31$$, $ev$$1$$), $ev$$1$$;
    }
    if ($eventType$$31$$ == $oj$$9$$.$PagingModel$.$EventType$.PAGE || $eventType$$31$$ == $oj$$9$$.$PagingModel$.$EventType$.PAGECOUNT) {
      $oj$$9$$.$PagingTableDataSource$.$superclass$.on.call(this, $eventType$$31$$, $eventHandler$$3$$);
    } else {
      $dataSource$$1$$.on($eventType$$31$$, $eventHandler$$3$$);
    }
    return $eventHandler$$3$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$9$$.$PagingTableDataSource$.prototype.on});
  $oj$$9$$.$PagingTableDataSource$.prototype.off = function $$oj$$9$$$$PagingTableDataSource$$$off$($eventType$$32$$, $eventHandler$$4$$) {
    return $eventType$$32$$ == $oj$$9$$.$PagingModel$.$EventType$.PAGE || $eventType$$32$$ == $oj$$9$$.$PagingModel$.$EventType$.PAGECOUNT ? ($oj$$9$$.$PagingTableDataSource$.$superclass$.off.call(this, $eventType$$32$$, $eventHandler$$4$$), $eventHandler$$4$$) : this.$dataSource$.off($eventType$$32$$, $eventHandler$$4$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$9$$.$PagingTableDataSource$.prototype.off});
  $oj$$9$$.$PagingTableDataSource$.prototype.sort = function $$oj$$9$$$$PagingTableDataSource$$$sort$($criteria$$7$$) {
    return this.$dataSource$.sort($criteria$$7$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$9$$.$PagingTableDataSource$.prototype.sort});
  $oj$$9$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$9$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$9$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$9$$.$PagingTableDataSource$.prototype.$_getPageFromStartIndex$ = function $$oj$$9$$$$PagingTableDataSource$$$$_getPageFromStartIndex$$() {
    return 0 < this.$_pageSize$ ? Math.floor(this.$_startIndex$ / this.$_pageSize$) : 0;
  };
  $oj$$9$$.$PagingTableDataSource$.prototype.$_handleRowEvent$ = function $$oj$$9$$$$PagingTableDataSource$$$$_handleRowEvent$$($event$$81$$, $eventHandler$$5$$) {
    var $ignoreRows$$ = [], $i$$159$$;
    for ($i$$159$$ = 0;$i$$159$$ < $event$$81$$.indexes.length;$i$$159$$++) {
      var $rowIdx$$ = $event$$81$$.indexes[$i$$159$$];
      void 0 !== $rowIdx$$ && ($rowIdx$$ -= this.$_startIndex$, (0 > $rowIdx$$ || $rowIdx$$ >= this.$_startIndex$ + this.$_pageSize$) && $ignoreRows$$.push($i$$159$$));
    }
    if (0 < $ignoreRows$$.length) {
      for ($ignoreRows$$.sort(function($a$$98$$, $b$$63$$) {
        return $a$$98$$ - $b$$63$$;
      }), $i$$159$$ = $ignoreRows$$.length - 1;0 <= $i$$159$$;$i$$159$$--) {
        $event$$81$$.data.splice($ignoreRows$$[$i$$159$$], 1), $event$$81$$.indexes.splice($ignoreRows$$[$i$$159$$], 1), $event$$81$$.keys.splice($ignoreRows$$[$i$$159$$], 1);
      }
    }
    this.$_updateEndIndex$();
    $event$$81$$.startIndex = this.$_startIndex$;
    $eventHandler$$5$$($event$$81$$);
  };
  $oj$$9$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$9$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$82$$, $eventHandler$$6$$) {
    $event$$82$$.startIndex != this.$_startIndex$ && (this.$_startIndex$ = $event$$82$$.startIndex);
    this.$_updateEndIndex$();
    if ("page" == this.$_fetchType$) {
      var $clonedEvent$$ = {};
      $oj$$9$$.$CollectionUtils$.$copyInto$($clonedEvent$$, $event$$82$$);
      $clonedEvent$$.startIndex = 0;
      $eventHandler$$6$$($clonedEvent$$);
    } else {
      $eventHandler$$6$$($event$$82$$);
    }
  };
  $oj$$9$$.$PagingTableDataSource$.prototype.$_updateEndIndex$ = function $$oj$$9$$$$PagingTableDataSource$$$$_updateEndIndex$$() {
    var $totalSize$$2$$ = this.totalSize();
    this.$_endIndex$ = this.$_startIndex$ + this.$_pageSize$ - 1;
    0 < $totalSize$$2$$ && (this.$_endIndex$ = this.$_endIndex$ > $totalSize$$2$$ - 1 ? $totalSize$$2$$ - 1 : this.$_endIndex$);
  };
  $oj$$9$$.$PagingTableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh", SORT:"sort"};
  $goog$exportPath_$$("PagingTableDataSource.EventType", $oj$$9$$.$PagingTableDataSource$.$EventType$, $oj$$9$$);
  $oj$$9$$.$DataGridDataSource$ = function $$oj$$9$$$$DataGridDataSource$$($data$$62$$) {
    $oj$$9$$.$DataGridDataSource$.$superclass$.constructor.call(this, $data$$62$$);
  };
  $goog$exportPath_$$("DataGridDataSource", $oj$$9$$.$DataGridDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$DataGridDataSource$, $oj$$9$$.$DataSource$, "oj.DataGridDataSource");
  $oj$$9$$.$DataGridDataSource$.prototype.$getCount$ = function $$oj$$9$$$$DataGridDataSource$$$$getCount$$() {
    return 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCount", {$getCount$:$oj$$9$$.$DataGridDataSource$.prototype.$getCount$});
  $oj$$9$$.$DataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$9$$$$DataGridDataSource$$$$getCountPrecision$$() {
    return "exact";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$9$$.$DataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$9$$.$DataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$9$$$$DataGridDataSource$$$$fetchHeaders$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$9$$.$DataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$9$$.$DataGridDataSource$.prototype.$fetchCells$ = function $$oj$$9$$$$DataGridDataSource$$$$fetchCells$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$9$$.$DataGridDataSource$.prototype.$fetchCells$});
  $oj$$9$$.$DataGridDataSource$.prototype.keys = function $$oj$$9$$$$DataGridDataSource$$$keys$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.keys", {keys:$oj$$9$$.$DataGridDataSource$.prototype.keys});
  $oj$$9$$.$DataGridDataSource$.prototype.$indexes$ = function $$oj$$9$$$$DataGridDataSource$$$$indexes$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.indexes", {$indexes$:$oj$$9$$.$DataGridDataSource$.prototype.$indexes$});
  $oj$$9$$.$DataGridDataSource$.prototype.sort = function $$oj$$9$$$$DataGridDataSource$$$sort$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.sort", {sort:$oj$$9$$.$DataGridDataSource$.prototype.sort});
  $oj$$9$$.$DataGridDataSource$.prototype.move = function $$oj$$9$$$$DataGridDataSource$$$move$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.move", {move:$oj$$9$$.$DataGridDataSource$.prototype.move});
  $oj$$9$$.$DataGridDataSource$.prototype.$moveOK$ = function $$oj$$9$$$$DataGridDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$9$$.$DataGridDataSource$.prototype.$moveOK$});
  $oj$$9$$.$DataGridDataSource$.prototype.getCapability = function $$oj$$9$$$$DataGridDataSource$$$getCapability$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$DataGridDataSource$.prototype.getCapability});
  $oj$$9$$.$JsonNodeSet$ = function $$oj$$9$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$63$$, $currKey$$) {
    $oj$$9$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$9$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_key$ = $currKey$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$63$$;
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$9$$.$JsonNodeSet$, $oj$$9$$);
  $oj$$9$$.$JsonNodeSet$.prototype.getParent = function $$oj$$9$$$$JsonNodeSet$$$getParent$() {
    return this.$m_key$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$9$$.$JsonNodeSet$.prototype.getParent});
  $oj$$9$$.$JsonNodeSet$.prototype.$getStart$ = function $$oj$$9$$$$JsonNodeSet$$$$getStart$$() {
    return this.$m_startNode$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {$getStart$:$oj$$9$$.$JsonNodeSet$.prototype.$getStart$});
  $oj$$9$$.$JsonNodeSet$.prototype.$getCount$ = function $$oj$$9$$$$JsonNodeSet$$$$getCount$$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {$getCount$:$oj$$9$$.$JsonNodeSet$.prototype.$getCount$});
  $oj$$9$$.$JsonNodeSet$.prototype.getData = function $$oj$$9$$$$JsonNodeSet$$$getData$($index$$106$$) {
    $oj$$9$$.$Assert$.assert($index$$106$$ <= this.$m_endNode$ && $index$$106$$ >= this.$m_startNode$);
    $index$$106$$ -= this.$m_startNode$;
    return this.$m_nodes$[$index$$106$$] ? this.$m_nodes$[$index$$106$$].attr : null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$9$$.$JsonNodeSet$.prototype.getData});
  $oj$$9$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$9$$$$JsonNodeSet$$$getMetadata$($index$$107$$) {
    var $metadata$$1$$ = [];
    $oj$$9$$.$Assert$.assert($index$$107$$ <= this.$m_endNode$ && $index$$107$$ >= this.$m_startNode$);
    $index$$107$$ -= this.$m_startNode$;
    $metadata$$1$$.key = this.$m_nodes$[$index$$107$$].id ? this.$m_nodes$[$index$$107$$].id : this.$m_nodes$[$index$$107$$].attr.id;
    $metadata$$1$$.leaf = this.$m_nodes$[$index$$107$$].$leaf$;
    $metadata$$1$$.depth = this.$m_nodes$[$index$$107$$].depth;
    null == $metadata$$1$$.leaf && ($metadata$$1$$.leaf = this.$m_nodes$[$index$$107$$].children && 0 < this.$m_nodes$[$index$$107$$].children.length ? !1 : !0);
    return $metadata$$1$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$9$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$9$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$9$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$3$$, $offset$$17$$) {
    var $i$$160$$;
    $offset$$17$$++;
    $currChild$$3$$.depth = $offset$$17$$;
    if ($currChild$$3$$.children && 0 != $currChild$$3$$.children.length) {
      for ($i$$160$$ = 0;$i$$160$$ < $currChild$$3$$.children.length;$i$$160$$++) {
        this.$_updateDepth$($currChild$$3$$.children[$i$$160$$], $offset$$17$$);
      }
    }
  };
  $oj$$9$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$9$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$108_key$$54$$) {
    var $results$$2$$, $depth$$6$$, $i$$161$$;
    $oj$$9$$.$Assert$.assert($index$$108_key$$54$$ <= this.$m_endNode$ && $index$$108_key$$54$$ >= this.$m_startNode$);
    $index$$108_key$$54$$ -= this.$m_startNode$;
    $depth$$6$$ = this.$m_nodes$[$index$$108_key$$54$$].depth;
    $results$$2$$ = this.$m_nodes$[$index$$108_key$$54$$].children;
    if (0 == $results$$2$$.length) {
      return null;
    }
    $index$$108_key$$54$$ = this.$m_nodes$[$index$$108_key$$54$$].id ? this.$m_nodes$[$index$$108_key$$54$$].id : this.$m_nodes$[$index$$108_key$$54$$].attr.id;
    for ($i$$161$$ = 0;$i$$161$$ < $results$$2$$.length;$i$$161$$++) {
      this.$_updateDepth$($results$$2$$[$i$$161$$], $depth$$6$$);
    }
    return new $oj$$9$$.$JsonNodeSet$(0, $results$$2$$.length, $results$$2$$, $index$$108_key$$54$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$9$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
});
