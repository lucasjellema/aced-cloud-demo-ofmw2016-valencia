/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout"], function($oj$$7$$, $$$$7$$, $ko$$1$$) {
  function $_extractValueFromChangeEvent$$($event$$56$$, $eventData$$1$$) {
    var $nameVal$$ = {};
    $nameVal$$.value = $eventData$$1$$.value;
    return $nameVal$$;
  }
  function $_extractOptionChange$$($event$$57$$, $eventData$$2$$) {
    var $nameVal$$1$$ = {}, $metadata$$ = $eventData$$2$$.optionMetadata;
    $metadata$$ && "shouldWrite" === $metadata$$.writeback && ($nameVal$$1$$[$eventData$$2$$.option] = $eventData$$2$$.value);
    return $nameVal$$1$$;
  }
  function $GlobalChangeQueue$$() {
    this.Init();
  }
  function $ComponentChangeTracker$$($component$$6$$, $element$$39$$, $queue$$) {
    this.Init($component$$6$$, $element$$39$$, $queue$$);
  }
  function $_getDataGridHeaderRenderer$$($bindingContext$$, $template$$) {
    return function($context$$43$$) {
      var $parent$$4$$, $childContext$$;
      $parent$$4$$ = $context$$43$$.parentElement;
      $childContext$$ = $bindingContext$$.createChildContext($context$$43$$.data, null, function($binding$$) {
        $binding$$.$key = $context$$43$$.key;
        $binding$$.$metadata = $context$$43$$.metadata;
        $binding$$.$headerContext = $context$$43$$;
      });
      $ko$$1$$.renderTemplate($template$$, $childContext$$, null, $parent$$4$$);
      return null;
    };
  }
  function $_getDataGridCellRenderer$$($bindingContext$$1$$, $template$$1$$) {
    return function($context$$44$$) {
      var $parent$$5$$, $childContext$$1$$;
      $parent$$5$$ = $context$$44$$.parentElement;
      $childContext$$1$$ = $bindingContext$$1$$.createChildContext($context$$44$$.data, null, function($binding$$1$$) {
        $binding$$1$$.$keys = $context$$44$$.keys;
        $binding$$1$$.$metadata = $context$$44$$.metadata;
        $binding$$1$$.$cellContext = $context$$44$$;
      });
      $ko$$1$$.renderTemplate($template$$1$$, $childContext$$1$$, null, $parent$$5$$);
      return null;
    };
  }
  function $_getDiagramNodeRenderer$$($bindingContext$$2$$, $template$$2$$) {
    return function($context$$45$$) {
      var $model$$55$$ = $bindingContext$$2$$.createChildContext($context$$45$$.data);
      $ko$$1$$.renderTemplate($template$$2$$, $model$$55$$, null, $context$$45$$.parentElement);
      return null;
    };
  }
  function $_getListViewItemRenderer$$($bindingContext$$4$$, $template$$3$$) {
    return function($context$$46$$) {
      var $parent$$6$$, $childContext$$2$$;
      $parent$$6$$ = $context$$46$$.parentElement;
      $childContext$$2$$ = $bindingContext$$4$$.createChildContext($context$$46$$.data, null, function($binding$$2$$) {
        $binding$$2$$.$itemContext = $context$$46$$;
      });
      $ko$$1$$.renderTemplate($template$$3$$, $childContext$$2$$, null, $parent$$6$$, "replaceNode");
      return null;
    };
  }
  function $_handleListViewManagedAttributes$$($name$$81_template$$4$$, $value$$149$$, $bindingContext$$5$$) {
    return "item" == $name$$81_template$$4$$ ? ($name$$81_template$$4$$ = $value$$149$$.template, null != $name$$81_template$$4$$ && ($value$$149$$.renderer = $_getListViewItemRenderer$$($bindingContext$$5$$, $name$$81_template$$4$$)), {item:$value$$149$$}) : null;
  }
  function $_getTableColumnTemplateRenderer$$($bindingContext$$6$$, $type$$76$$, $template$$5$$) {
    var $rendererOption$$ = {};
    (function($template$$6$$, $type$$77$$) {
      $rendererOption$$ = function $$rendererOption$$$($params$$13$$) {
        var $childContext$$3$$ = null, $parentElement$$ = null;
        "header" == $type$$77$$ ? ($childContext$$3$$ = $bindingContext$$6$$.extend({$columnIndex:$params$$13$$.columnIndex, $headerContext:$params$$13$$.headerContext, $data:$params$$13$$.data}), $parentElement$$ = $params$$13$$.headerContext.parentElement) : "cell" == $type$$77$$ && ($childContext$$3$$ = $bindingContext$$6$$.createChildContext($params$$13$$.row, null, function($binding$$3$$) {
          $binding$$3$$.$columnIndex = $params$$13$$.columnIndex;
          $binding$$3$$.$cellContext = $params$$13$$.cellContext;
        }), $parentElement$$ = $params$$13$$.cellContext.parentElement);
        "footer" == $type$$77$$ && ($childContext$$3$$ = $bindingContext$$6$$.extend({$columnIndex:$params$$13$$.columnIndex, $footerContext:$params$$13$$.footerContext}), $parentElement$$ = $params$$13$$.footerContext.parentElement);
        $ko$$1$$.renderTemplate($template$$6$$, $childContext$$3$$, null, $parentElement$$, "replaceNode");
      };
    })($template$$5$$, $type$$76$$);
    return $rendererOption$$;
  }
  function $_getTableRowTemplateRenderer$$($bindingContext$$7$$, $template$$7$$) {
    return function($params$$14$$) {
      var $childContext$$4$$ = $bindingContext$$7$$.createChildContext($params$$14$$.row, null, function($binding$$4$$) {
        $binding$$4$$.$rowContext = $params$$14$$.rowContext;
      });
      $ko$$1$$.renderTemplate($template$$7$$, $childContext$$4$$, null, $params$$14$$.rowContext.parentElement, "replaceNode");
    };
  }
  function $_getDataLayerRenderer$$($bindingContext$$8$$, $template$$8$$) {
    return function($context$$47$$) {
      var $model$$56$$ = $bindingContext$$8$$.createChildContext($context$$47$$.data);
      $ko$$1$$.renderTemplate($template$$8$$, $model$$56$$, null, $context$$47$$.parentElement);
      return null;
    };
  }
  function $_handleManagedAttributes$$($i$$125_name$$82$$, $value$$150$$, $bindingContext$$9$$) {
    if ("areaLayers" === $i$$125_name$$82$$) {
      for ($i$$125_name$$82$$ = 0;$i$$125_name$$82$$ < $value$$150$$.length;$i$$125_name$$82$$++) {
        var $areaDataLayer$$ = $value$$150$$[$i$$125_name$$82$$].areaDataLayer;
        if ($areaDataLayer$$) {
          var $template$$9$$ = $areaDataLayer$$.template;
          null != $template$$9$$ && ($areaDataLayer$$._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$9$$, $template$$9$$));
        }
      }
      return{areaLayers:$value$$150$$};
    }
    if ("pointDataLayers" === $i$$125_name$$82$$) {
      for ($i$$125_name$$82$$ = 0;$i$$125_name$$82$$ < $value$$150$$.length;$i$$125_name$$82$$++) {
        $template$$9$$ = $value$$150$$[$i$$125_name$$82$$].template, null != $template$$9$$ && ($value$$150$$[$i$$125_name$$82$$]._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$9$$, $template$$9$$));
      }
      return{pointDataLayers:$value$$150$$};
    }
    return null;
  }
  $oj$$7$$.$ComponentBinding$ = function $$oj$$7$$$$ComponentBinding$$($name$$83$$, $options$$209$$) {
    this.Init($name$$83$$, $options$$209$$);
  };
  $goog$exportPath_$$("ComponentBinding", $oj$$7$$.$ComponentBinding$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ComponentBinding$, $oj$$7$$.$Object$, "oj.ComponentBinding");
  $oj$$7$$.$ComponentBinding$.create = function $$oj$$7$$$$ComponentBinding$$create$($name$$84$$, $options$$210$$) {
    if (null == $name$$84$$) {
      throw "Binding name is required!";
    }
    var $instance$$14$$ = new $oj$$7$$.$ComponentBinding$($name$$84$$, $options$$210$$), $handlers$$5$$ = $ko$$1$$.bindingHandlers, $i$$126$$, $names$$1$$ = Array.isArray($name$$84$$) ? $name$$84$$ : [$name$$84$$];
    for ($i$$126$$ = 0;$i$$126$$ < $names$$1$$.length;$i$$126$$++) {
      $handlers$$5$$[$names$$1$$[$i$$126$$]] = $instance$$14$$;
    }
    return $instance$$14$$;
  };
  $goog$exportPath_$$("ComponentBinding.create", $oj$$7$$.$ComponentBinding$.create, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$ = function $$oj$$7$$$$ComponentBinding$$$getDefaultInstance$$() {
    return $oj$$7$$.$ComponentBinding$.$_INSTANCE$;
  };
  $goog$exportPath_$$("ComponentBinding.getDefaultInstance", $oj$$7$$.$ComponentBinding$.$getDefaultInstance$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$setupManagedAttributes$$($opts$$9$$) {
    var $forName$$ = $opts$$9$$["for"], $forName$$ = null == $forName$$ ? "@global" : $forName$$, $managers$$ = this.$_managedAttrOptions$[$forName$$] || [];
    $managers$$.push($opts$$9$$);
    this.$_managedAttrOptions$[$forName$$] = $managers$$;
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ComponentBinding.prototype.setupManagedAttributes", {$setupManagedAttributes$:$oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$});
  $oj$$7$$.$ComponentBinding$.$deliverChanges$ = function $$oj$$7$$$$ComponentBinding$$$deliverChanges$$() {
    $oj$$7$$.$ComponentBinding$.$_changeQueue$.$deliverChanges$();
  };
  $goog$exportPath_$$("ComponentBinding.deliverChanges", $oj$$7$$.$ComponentBinding$.$deliverChanges$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.Init = function $$oj$$7$$$$ComponentBinding$$$Init$($names$$2$$, $options$$211$$) {
    $oj$$7$$.$ComponentBinding$.$superclass$.Init.call(this);
    "string" === typeof $options$$211$$ && ($options$$211$$ = {componentName:$options$$211$$});
    this.$_bindingOptions$ = $options$$211$$ || {};
    this.$_bindingNames$ = Array.isArray($names$$2$$) ? $names$$2$$ : [$names$$2$$];
    this.init = $oj$$7$$.$Object$.$createCallback$(this, this._init);
    this.update = $oj$$7$$.$Object$.$createCallback$(this, this.$_update$);
    this.$_managedAttrOptions$ = {};
  };
  $oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$ = "_ojNeedsJUIBInit";
  $oj$$7$$.$ComponentBinding$.prototype._init = function $$oj$$7$$$$ComponentBinding$$$_init$($element$$40$$, $valueAccessor$$, $allBindingsAccessor$$, $viewModel$$1$$, $bindingContext$$10$$) {
    $ko$$1$$.applyBindingsToDescendants($bindingContext$$10$$, $element$$40$$);
    $$$$7$$($element$$40$$).data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$, !0);
    return{controlsDescendantBindings:!0};
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_update$ = function $$oj$$7$$$$ComponentBinding$$$$_update$$($element$$41$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $jelem$$4_viewModel$$2$$, $bindingContext$$11$$) {
    $jelem$$4_viewModel$$2$$ = $$$$7$$($element$$41$$);
    $jelem$$4_viewModel$$2$$.data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$) && ($jelem$$4_viewModel$$2$$.removeData($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$), this.$_initComponent$($element$$41$$, $jelem$$4_viewModel$$2$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $bindingContext$$11$$));
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_initComponent$ = function $$oj$$7$$$$ComponentBinding$$$$_initComponent$$($element$$42$$, $jelem$$5$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$) {
    var $options$$212$$ = $valueAccessor$$2$$(), $roleAttrName$$ = null, $disposed$$ = !1, $registeredListers$$ = [], $tracker$$3$$ = null, $comp$$2$$ = null, $roleListener$$ = null, $bindingMap$$ = $oj$$7$$.$ComponentBinding$.$_getBindingValueMap$(this.$_bindingNames$, $element$$42$$, $bindingContext$$12$$), $managedAttrMap$$ = {}, $specifiedManagedAttrs$$ = {}, $binding$$5$$ = this, $stage$$ = 0, $attributeEvaluatorCache$$ = {}, $componentName$$1$$ = this.$_bindingOptions$.componentName;
    if (null == $componentName$$1$$) {
      $roleAttrName$$ = "component";
      if (!$bindingMap$$[$roleAttrName$$] && ($roleAttrName$$ = "role", !$bindingMap$$[$roleAttrName$$])) {
        $oj$$7$$.$Logger$.error("component attribute is required for the ojComponent binding");
        return;
      }
      var $role$$ = $options$$212$$[$roleAttrName$$];
      if (null == $role$$) {
        $oj$$7$$.$Logger$.error("non-null component attribute is required for the ojComponent binding");
        return;
      }
      $roleListener$$ = $ko$$1$$.computed(function() {
        $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($bindingMap$$[$roleAttrName$$], $roleAttrName$$, $attributeEvaluatorCache$$, $bindingContext$$12$$, !1);
        0 == $stage$$ ? $componentName$$1$$ = $ko$$1$$.utils.unwrapObservable($role$$) : ($bindingMap$$ = null, $comp$$2$$ ? $comp$$2$$("destroy") : ($roleListener$$.dispose(), $roleListener$$ = null), this.$_initComponent$($element$$42$$, $jelem$$5$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$));
        return null;
      }, this, {disposeWhenNodeIsRemoved:$element$$42$$});
    }
    if (null != $componentName$$1$$) {
      if ($comp$$2$$ = $jelem$$5$$[$componentName$$1$$], "function" === typeof $comp$$2$$) {
        $comp$$2$$ = $comp$$2$$.bind($jelem$$5$$);
        $jelem$$5$$.on("ojdestroy" + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, function($destroyCallback_evt$$18_l$$2$$) {
          if ($destroyCallback_evt$$18_l$$2$$.target && $destroyCallback_evt$$18_l$$2$$.target == $element$$42$$) {
            ($destroyCallback_evt$$18_l$$2$$ = $binding$$5$$.$_bindingOptions$.beforeDestroy) && $destroyCallback_evt$$18_l$$2$$($element$$42$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$);
            $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!1, $specifiedManagedAttrs$$, $element$$42$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$);
            $disposed$$ = !0;
            $binding$$5$$ = $bindingMap$$ = null;
            $tracker$$3$$.$dispose$();
            $specifiedManagedAttrs$$ = $managedAttrMap$$ = $attributeEvaluatorCache$$ = $tracker$$3$$ = null;
            $oj$$7$$.$ComponentBinding$.$_unregisterEventListeners$($jelem$$5$$);
            $comp$$2$$ = null;
            for ($destroyCallback_evt$$18_l$$2$$ = 0;$destroyCallback_evt$$18_l$$2$$ < $registeredListers$$.length;$destroyCallback_evt$$18_l$$2$$++) {
              $registeredListers$$[$destroyCallback_evt$$18_l$$2$$].dispose();
            }
            $registeredListers$$ = null;
          }
          null != $roleListener$$ && ($roleListener$$.dispose(), $roleListener$$ = null);
        });
        var $managedAttrMap$$ = $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$, $componentName$$1$$), $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = $oj$$7$$.$ComponentBinding$.$getDefaultInstance$();
        this !== $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ && ($defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$.$_getManagedAttributes$($bindingMap$$, $componentName$$1$$), $oj$$7$$.$CollectionUtils$.$copyInto$($defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$, $managedAttrMap$$), $managedAttrMap$$ = $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$);
        for (var $propertyMap$$ = {}, $tracker$$3$$ = new $ComponentChangeTracker$$($comp$$2$$, $element$$42$$, $oj$$7$$.$ComponentBinding$.$_changeQueue$), $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = {"^slider$":[{event:"slidechange", getter:$_extractValueFromChangeEvent$$}], "^oj*":[{event:"ojoptionchange", getter:$_extractOptionChange$$}]}, $handler$$46$$ = function $$handler$$46$$$() {
          var $initProps_prop$$57_updateProps$$ = this.$_property$, $currentVal_exp$$1_updateKeys_v_value$$151$$ = $bindingMap$$[$initProps_prop$$57_updateProps$$];
          if (!$currentVal_exp$$1_updateKeys_v_value$$151$$) {
            throw "Binding expression for property " + $initProps_prop$$57_updateProps$$ + " is not found";
          }
          $currentVal_exp$$1_updateKeys_v_value$$151$$ = $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($currentVal_exp$$1_updateKeys_v_value$$151$$, $initProps_prop$$57_updateProps$$, $attributeEvaluatorCache$$, $bindingContext$$12$$, 0 !== $stage$$ && !$disposed$$);
          if (0 === $stage$$) {
            var $currentVal_exp$$1_updateKeys_v_value$$151$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($options$$212$$[$initProps_prop$$57_updateProps$$]), $initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$];
            null != $initFunc_k$$5_managedPropEntry_updateFunc$$ ? ($specifiedManagedAttrs$$[$initProps_prop$$57_updateProps$$] = $initFunc_k$$5_managedPropEntry_updateFunc$$, $initFunc_k$$5_managedPropEntry_updateFunc$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$.$init$, null != $initFunc_k$$5_managedPropEntry_updateFunc$$ && ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $currentVal_exp$$1_updateKeys_v_value$$151$$, $element$$42$$, 
            $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$) || {}, $oj$$7$$.$CollectionUtils$.$copyInto$($propertyMap$$, $initProps_prop$$57_updateProps$$))) : $propertyMap$$[$initProps_prop$$57_updateProps$$] = $currentVal_exp$$1_updateKeys_v_value$$151$$;
          } else {
            if (!$disposed$$) {
              if ($currentVal_exp$$1_updateKeys_v_value$$151$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($currentVal_exp$$1_updateKeys_v_value$$151$$), null != $managedAttrMap$$[$initProps_prop$$57_updateProps$$]) {
                if ($initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$].update, null != $initFunc_k$$5_managedPropEntry_updateFunc$$) {
                  for ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $currentVal_exp$$1_updateKeys_v_value$$151$$, $element$$42$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$) || {}, $currentVal_exp$$1_updateKeys_v_value$$151$$ = Object.keys($initProps_prop$$57_updateProps$$), $initFunc_k$$5_managedPropEntry_updateFunc$$ = 0;$initFunc_k$$5_managedPropEntry_updateFunc$$ < $currentVal_exp$$1_updateKeys_v_value$$151$$.length;$initFunc_k$$5_managedPropEntry_updateFunc$$++) {
                    var $p$$4$$ = $currentVal_exp$$1_updateKeys_v_value$$151$$[$initFunc_k$$5_managedPropEntry_updateFunc$$];
                    $tracker$$3$$.$addChange$($p$$4$$, $initProps_prop$$57_updateProps$$[$p$$4$$]);
                  }
                }
              } else {
                $tracker$$3$$.$addChange$($initProps_prop$$57_updateProps$$, $currentVal_exp$$1_updateKeys_v_value$$151$$);
              }
            }
          }
          return null;
        }, $p$$3$$, $optionKeys$$ = Object.keys($options$$212$$), $k$$4$$ = 0;$k$$4$$ < $optionKeys$$.length;$k$$4$$++) {
          $p$$3$$ = $optionKeys$$[$k$$4$$], $p$$3$$ !== $roleAttrName$$ && $registeredListers$$.push($ko$$1$$.computed($handler$$46$$, {$_property$:$p$$3$$}, {disposeWhenNodeIsRemoved:$element$$42$$}));
        }
        $oj$$7$$.$ComponentBinding$.$_registerWritebacks$($jelem$$5$$, $componentName$$1$$, $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$, $bindingMap$$, $tracker$$3$$, $bindingContext$$12$$, $attributeEvaluatorCache$$);
        $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($propertyMap$$);
        $comp$$2$$($propertyMap$$);
        for (var $createCallback_mo$$ in $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$) {
          $comp$$2$$("option", $createCallback_mo$$, $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$[$createCallback_mo$$]);
        }
        ($createCallback_mo$$ = this.$_bindingOptions$.afterCreate) && $createCallback_mo$$($element$$42$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$);
        $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!0, $specifiedManagedAttrs$$, $element$$42$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$12$$);
        $propertyMap$$ = null;
      } else {
        $oj$$7$$.$Logger$.error("Component %s is not found", $componentName$$1$$);
      }
    }
    $stage$$ = 1;
  };
  $oj$$7$$.$ComponentBinding$.$_getBindingValueMap$ = function $$oj$$7$$$$ComponentBinding$$$_getBindingValueMap$$($n$$20_names$$3$$, $elem$$18_keyValueArray$$, $bindingContext$$13_i$$127_key$$41$$) {
    function $trim$$($str$$18$$) {
      return null == $str$$18$$ ? null : $str$$18$$.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
    }
    var $map$$ = {}, $bindingValue_keyValueEntry_provider$$ = null, $bindingValue_keyValueEntry_provider$$ = $ko$$1$$.bindingProvider.instance, $e$$49_selfVal$$;
    $e$$49_selfVal$$ = null;
    $bindingValue_keyValueEntry_provider$$ = $bindingValue_keyValueEntry_provider$$.$getBindingsString$ ? $bindingValue_keyValueEntry_provider$$.$getBindingsString$($elem$$18_keyValueArray$$, $bindingContext$$13_i$$127_key$$41$$) : $elem$$18_keyValueArray$$.getAttribute("data-bind");
    if (!$bindingValue_keyValueEntry_provider$$) {
      return $map$$;
    }
    $elem$$18_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($bindingValue_keyValueEntry_provider$$);
    for ($bindingContext$$13_i$$127_key$$41$$ = 0;$bindingContext$$13_i$$127_key$$41$$ < $elem$$18_keyValueArray$$.length;$bindingContext$$13_i$$127_key$$41$$++) {
      var $bindingValue_keyValueEntry_provider$$ = $elem$$18_keyValueArray$$[$bindingContext$$13_i$$127_key$$41$$], $bindingKey$$ = $trim$$($bindingValue_keyValueEntry_provider$$.key);
      if (0 <= $n$$20_names$$3$$.indexOf($bindingKey$$)) {
        $e$$49_selfVal$$ = $bindingValue_keyValueEntry_provider$$.value;
        break;
      }
    }
    if (!$e$$49_selfVal$$) {
      return $map$$;
    }
    $elem$$18_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($e$$49_selfVal$$);
    for ($n$$20_names$$3$$ = 0;$n$$20_names$$3$$ < $elem$$18_keyValueArray$$.length;$n$$20_names$$3$$++) {
      $e$$49_selfVal$$ = $elem$$18_keyValueArray$$[$n$$20_names$$3$$], $bindingContext$$13_i$$127_key$$41$$ = $e$$49_selfVal$$.key, null != $bindingContext$$13_i$$127_key$$41$$ && ($map$$[$trim$$($bindingContext$$13_i$$127_key$$41$$)] = $trim$$($e$$49_selfVal$$.value));
    }
    return $map$$;
  };
  $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$ = function $$oj$$7$$$$ComponentBinding$$$_evaluatePropertyExpression$$($expOrCallback$$1_expOrCallback$$inline_633$$, $key$$42$$, $cache$$, $bindingContext$$14$$, $evalSimpleExpr$$1$$) {
    var $evaluator$$inline_636_info$$1$$ = $cache$$[$key$$42$$], $first$$inline_638_isNew$$1$$ = void 0 === $evaluator$$inline_636_info$$1$$;
    if ($first$$inline_638_isNew$$1$$ || null === $evaluator$$inline_636_info$$1$$.$evaluator$ && $evaluator$$inline_636_info$$1$$.$simple$ && $evalSimpleExpr$$1$$) {
      "string" !== typeof $expOrCallback$$1_expOrCallback$$inline_633$$ && ($expOrCallback$$1_expOrCallback$$inline_633$$ = $expOrCallback$$1_expOrCallback$$inline_633$$());
      var $evaluator$$inline_636_info$$1$$ = null, $isSimple$$inline_637$$ = !1;
      if (null !== $expOrCallback$$1_expOrCallback$$inline_633$$) {
        if ($first$$inline_638_isNew$$1$$) {
          if ($first$$inline_638_isNew$$1$$ = $expOrCallback$$1_expOrCallback$$inline_633$$.charAt(0), "'" === $first$$inline_638_isNew$$1$$ || '"' === $first$$inline_638_isNew$$1$$ || 0 >= $expOrCallback$$1_expOrCallback$$inline_633$$.indexOf("(")) {
            $isSimple$$inline_637$$ = !0;
          }
        } else {
          $isSimple$$inline_637$$ = !0;
        }
        if (!$isSimple$$inline_637$$ || $evalSimpleExpr$$1$$) {
          $evaluator$$inline_636_info$$1$$ = new Function("$context", "with($context){with($data||{}){return " + $expOrCallback$$1_expOrCallback$$inline_633$$ + ";}}");
        }
      }
      $evaluator$$inline_636_info$$1$$ = {$evaluator$:$evaluator$$inline_636_info$$1$$, $simple$:$isSimple$$inline_637$$};
      $cache$$[$key$$42$$] = $evaluator$$inline_636_info$$1$$;
    }
    return!$evaluator$$inline_636_info$$1$$.$evaluator$ || !$evalSimpleExpr$$1$$ && $evaluator$$inline_636_info$$1$$.$simple$ ? null : $evaluator$$inline_636_info$$1$$.$evaluator$($bindingContext$$14$$);
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_getManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$_getManagedAttributes$$($bindingMap$$1$$, $componentName$$2$$) {
    return $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$1$$, $componentName$$2$$);
  };
  $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$_resolveManagedAttributes$$($optionMap$$, $attrs$$20_bindingMap$$2$$, $componentName$$3_k$$6_proto$$4_widgetClass$$) {
    function $traverseOptions$$($name$$85$$, $followLinks$$) {
      var $managers$$1$$ = $optionMap$$[$name$$85$$];
      if (null != $managers$$1$$) {
        for (var $n$$21$$ = $managers$$1$$.length - 1;0 <= $n$$21$$;$n$$21$$--) {
          var $opt$$17_parents$$ = $managers$$1$$[$n$$21$$];
          null != $opt$$17_parents$$.attributes && $applicableOptions$$.push($opt$$17_parents$$);
          if ($followLinks$$ && ($opt$$17_parents$$ = $opt$$17_parents$$.use, null != $opt$$17_parents$$)) {
            for (var $opt$$17_parents$$ = Array.isArray($opt$$17_parents$$) ? $opt$$17_parents$$ : [$opt$$17_parents$$], $i$$128$$ = 0;$i$$128$$ < $opt$$17_parents$$.length;$i$$128$$++) {
              $traverseOptions$$($opt$$17_parents$$[$i$$128$$], !0);
            }
          }
        }
      }
    }
    var $managedAttrMap$$1$$ = {}, $applicableOptions$$ = [];
    $traverseOptions$$($componentName$$3_k$$6_proto$$4_widgetClass$$, !0);
    $componentName$$3_k$$6_proto$$4_widgetClass$$ = $$$$7$$.oj[$componentName$$3_k$$6_proto$$4_widgetClass$$];
    if (null != $componentName$$3_k$$6_proto$$4_widgetClass$$) {
      for ($componentName$$3_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$3_k$$6_proto$$4_widgetClass$$.prototype);null != $componentName$$3_k$$6_proto$$4_widgetClass$$ && "oj" === $componentName$$3_k$$6_proto$$4_widgetClass$$.namespace;) {
        $traverseOptions$$($componentName$$3_k$$6_proto$$4_widgetClass$$.widgetName, !0), $componentName$$3_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$3_k$$6_proto$$4_widgetClass$$);
      }
    }
    $traverseOptions$$("@global", !1);
    if (0 < $applicableOptions$$.length) {
      for ($attrs$$20_bindingMap$$2$$ = Object.keys($attrs$$20_bindingMap$$2$$), $componentName$$3_k$$6_proto$$4_widgetClass$$ = 0;$componentName$$3_k$$6_proto$$4_widgetClass$$ < $attrs$$20_bindingMap$$2$$.length;$componentName$$3_k$$6_proto$$4_widgetClass$$++) {
        for (var $attr$$13$$ = $attrs$$20_bindingMap$$2$$[$componentName$$3_k$$6_proto$$4_widgetClass$$], $l$$3$$ = 0;$l$$3$$ < $applicableOptions$$.length;$l$$3$$++) {
          var $opts$$10$$ = $applicableOptions$$[$l$$3$$];
          if (0 <= $opts$$10$$.attributes.indexOf($attr$$13$$)) {
            $managedAttrMap$$1$$[$attr$$13$$] = {$init$:$opts$$10$$.init, update:$opts$$10$$.update, $afterCreate$:$opts$$10$$.afterCreate, $beforeDestroy$:$opts$$10$$.beforeDestroy};
            break;
          }
        }
      }
    }
    return $managedAttrMap$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$ = ".oj_ko";
  $oj$$7$$.$ComponentBinding$.$_unregisterEventListeners$ = function $$oj$$7$$$$ComponentBinding$$$_unregisterEventListeners$$($jelem$$6$$) {
    $jelem$$6$$ && $jelem$$6$$.off($oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$);
  };
  $oj$$7$$.$ComponentBinding$.$_registerWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_registerWritebacks$$($jelem$$7$$, $componentName$$4_eventInfos$$, $i$$129_writablePropMap$$1$$, $bindingMap$$3$$, $tracker$$4$$, $bindingContext$$15$$, $attributeEvaluatorCache$$1$$) {
    var $cachedPropertyExpressionWriters$$ = {}, $info$$2_pattern$$13$$;
    for ($info$$2_pattern$$13$$ in $i$$129_writablePropMap$$1$$) {
      if ($componentName$$4_eventInfos$$.match($info$$2_pattern$$13$$)) {
        $componentName$$4_eventInfos$$ = $i$$129_writablePropMap$$1$$[$info$$2_pattern$$13$$];
        for ($i$$129_writablePropMap$$1$$ = 0;$i$$129_writablePropMap$$1$$ < $componentName$$4_eventInfos$$.length;$i$$129_writablePropMap$$1$$++) {
          $info$$2_pattern$$13$$ = $componentName$$4_eventInfos$$[$i$$129_writablePropMap$$1$$], $jelem$$7$$.on($info$$2_pattern$$13$$.event + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, {$getter$:$info$$2_pattern$$13$$.getter}, function($evt$$19$$, $data$$52$$) {
            $evt$$19$$.stopPropagation();
            var $nameValues$$ = $evt$$19$$.data.$getter$($evt$$19$$, $data$$52$$);
            $tracker$$4$$.$suspend$();
            try {
              for (var $name$$86$$ in $nameValues$$) {
                if ($bindingMap$$3$$[$name$$86$$]) {
                  var $target$$77$$ = $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($bindingMap$$3$$[$name$$86$$], $name$$86$$, $attributeEvaluatorCache$$1$$, $bindingContext$$15$$, !0);
                  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$($name$$86$$, $target$$77$$, $nameValues$$[$name$$86$$], $bindingMap$$3$$[$name$$86$$], $bindingContext$$15$$, $cachedPropertyExpressionWriters$$);
                }
              }
            } finally {
              $tracker$$4$$.$resume$();
            }
          });
        }
        break;
      }
    }
  };
  $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$ = function $$oj$$7$$$$ComponentBinding$$$_getPropertyWriterExpression$$($expression$$3$$) {
    var $match$$14_reserveddWords$$ = ["true", "false", "null", "undefined"];
    if (null == $expression$$3$$ || 0 <= $match$$14_reserveddWords$$.indexOf($expression$$3$$)) {
      return null;
    }
    $match$$14_reserveddWords$$ = $expression$$3$$.match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);
    return null === $match$$14_reserveddWords$$ ? null : "function(v){" + ($match$$14_reserveddWords$$[1] ? "Object(" + $match$$14_reserveddWords$$[1] + ")" + $match$$14_reserveddWords$$[2] : $expression$$3$$) + "\x3dv;}";
  };
  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$ = function $$oj$$7$$$$ComponentBinding$$$_writeValueToProperty$$($func$$6_name$$87$$, $property$$17$$, $value$$152$$, $propertyExpression$$, $bindingContext$$16$$, $cachedPropertyExpressionWriters$$1$$) {
    null != $property$$17$$ && $ko$$1$$.isObservable($property$$17$$) ? $ko$$1$$.isWriteableObservable($property$$17$$) && $property$$17$$($value$$152$$) : ($func$$6_name$$87$$ = $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$(function() {
      return $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$($propertyExpression$$);
    }, $func$$6_name$$87$$, $cachedPropertyExpressionWriters$$1$$, $bindingContext$$16$$, !0)) && $func$$6_name$$87$$($value$$152$$);
  };
  $oj$$7$$.$ComponentBinding$.$_toJS$ = function $$oj$$7$$$$ComponentBinding$$$_toJS$$($prop$$58$$) {
    $prop$$58$$ = $ko$$1$$.utils.unwrapObservable($prop$$58$$);
    (Array.isArray($prop$$58$$) || $oj$$7$$.$CollectionUtils$.isPlainObject($prop$$58$$)) && $prop$$58$$.ojConvertToJS && ($prop$$58$$ = $ko$$1$$.toJS($prop$$58$$));
    return $prop$$58$$;
  };
  $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$ = function $$oj$$7$$$$ComponentBinding$$$_extractDotNotationOptions$$($options$$213$$) {
    var $mutationOptions$$1$$ = {}, $opt$$18$$;
    for ($opt$$18$$ in $options$$213$$) {
      0 <= $opt$$18$$.indexOf(".") && ($mutationOptions$$1$$[$opt$$18$$] = $options$$213$$[$opt$$18$$]);
    }
    for (var $mo$$1$$ in $mutationOptions$$1$$) {
      delete $options$$213$$[$mo$$1$$];
    }
    return $mutationOptions$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$ = function $$oj$$7$$$$ComponentBinding$$$_deliverCreateDestroyEventToManagedProps$$($isCreate$$, $managedAttrMap$$2$$, $element$$43$$, $comp$$3$$, $valueAccessor$$3$$, $allBindingsAccessor$$3$$, $bindingContext$$17$$) {
    for (var $props$$7$$ = Object.keys($managedAttrMap$$2$$), $i$$130$$ = 0;$i$$130$$ < $props$$7$$.length;$i$$130$$++) {
      var $prop$$59$$ = $props$$7$$[$i$$130$$], $callback$$85_entry$$ = $managedAttrMap$$2$$[$prop$$59$$];
      ($callback$$85_entry$$ = $isCreate$$ ? $callback$$85_entry$$.$afterCreate$ : $callback$$85_entry$$.$beforeDestroy$) && $callback$$85_entry$$($prop$$59$$, $element$$43$$, $comp$$3$$, $valueAccessor$$3$$, $allBindingsAccessor$$3$$, $bindingContext$$17$$);
    }
  };
  $oj$$7$$.$ComponentBinding$.$__getKnockoutVersion$ = function $$oj$$7$$$$ComponentBinding$$$__getKnockoutVersion$$() {
    return $oj$$7$$.$__isAmdLoaderPresent$() && $ko$$1$$ ? $ko$$1$$.version : "";
  };
  $oj$$7$$.$Object$.$createSubclass$($GlobalChangeQueue$$, $oj$$7$$.$Object$, "ComponentBinding.GlobalChangeQueue");
  $GlobalChangeQueue$$.prototype.Init = function $$GlobalChangeQueue$$$$Init$() {
    $GlobalChangeQueue$$.$superclass$.Init.call(this);
    this.$_trackers$ = [];
    this.$_queue$ = [];
  };
  $GlobalChangeQueue$$.prototype.$registerComponentChanges$ = function $$GlobalChangeQueue$$$$$registerComponentChanges$$($tracker$$5$$) {
    -1 === this.$_trackers$.indexOf($tracker$$5$$) && (this.$_trackers$.push($tracker$$5$$), this.$_delayTimer$ || (this.$_delayTimer$ = setTimeout($oj$$7$$.$Object$.$createCallback$(this, this.$_deliverChangesImpl$), 1)));
  };
  $GlobalChangeQueue$$.prototype.$removeComponentChanges$ = function $$GlobalChangeQueue$$$$$removeComponentChanges$$($index$$93_tracker$$6$$) {
    $index$$93_tracker$$6$$ = this.$_trackers$.indexOf($index$$93_tracker$$6$$);
    0 <= $index$$93_tracker$$6$$ && this.$_trackers$.splice($index$$93_tracker$$6$$, 1);
  };
  $GlobalChangeQueue$$.prototype.$deliverChanges$ = function $$GlobalChangeQueue$$$$$deliverChanges$$() {
    this.$_delayTimer$ && clearTimeout(this.$_delayTimer$);
    this.$_deliverChangesImpl$();
  };
  $GlobalChangeQueue$$.prototype.$_deliverChangesImpl$ = function $$GlobalChangeQueue$$$$$_deliverChangesImpl$$() {
    var $i$$131_record$$3$$;
    this.$_delayTimer$ = null;
    var $trackers$$ = this.$_trackers$;
    this.$_trackers$ = [];
    for ($i$$131_record$$3$$ = 0;$i$$131_record$$3$$ < $trackers$$.length;$i$$131_record$$3$$++) {
      var $tracker$$7$$ = $trackers$$[$i$$131_record$$3$$];
      this.$_queue$.push({$tracker$:$tracker$$7$$, $changes$:$tracker$$7$$.$flushChanges$()});
    }
    for (;0 < this.$_queue$.length;) {
      $i$$131_record$$3$$ = this.$_queue$.shift(), $i$$131_record$$3$$.$tracker$.$applyChanges$($i$$131_record$$3$$.$changes$);
    }
  };
  $oj$$7$$.$Object$.$createSubclass$($ComponentChangeTracker$$, $oj$$7$$.$Object$, "ComponentBinding.ComponentChangeTracker");
  $ComponentChangeTracker$$.prototype.Init = function $$ComponentChangeTracker$$$$Init$($component$$7$$, $element$$44$$, $queue$$1$$) {
    $ComponentChangeTracker$$.$superclass$.Init.call(this);
    this.$_component$ = $component$$7$$;
    this.$_element$ = $element$$44$$;
    this.$_queue$ = $queue$$1$$;
    this.$_changes$ = {};
    this.$_suspendCount$ = 0;
  };
  $ComponentChangeTracker$$.prototype.$addChange$ = function $$ComponentChangeTracker$$$$$addChange$$($property$$18$$, $value$$153$$) {
    this.$_isSuspended$() || this.$_disposed$ || (this.$_changes$[$property$$18$$] = $value$$153$$, this.$_queue$.$registerComponentChanges$(this));
  };
  $ComponentChangeTracker$$.prototype.$dispose$ = function $$ComponentChangeTracker$$$$$dispose$$() {
    this.$_queue$.$removeComponentChanges$(this);
    this.$_disposed$ = !0;
  };
  $ComponentChangeTracker$$.prototype.$resume$ = function $$ComponentChangeTracker$$$$$resume$$() {
    $oj$$7$$.$Assert$.assert(0 < this.$_suspendCount$, "ComponentChangeTracker._suspendCount underflow");
    this.$_suspendCount$ -= 1;
  };
  $ComponentChangeTracker$$.prototype.$suspend$ = function $$ComponentChangeTracker$$$$$suspend$$() {
    this.$_suspendCount$ += 1;
  };
  $ComponentChangeTracker$$.prototype.$applyChanges$ = function $$ComponentChangeTracker$$$$$applyChanges$$($changes$$1$$) {
    if (null != $oj$$7$$.Components.$getWidgetConstructor$(this.$_element$)) {
      var $mutationOptions$$2$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($changes$$1$$), $flags$$15$$ = {changed:!0};
      this.$_component$("option", $changes$$1$$, $flags$$15$$);
      for (var $mo$$2$$ in $mutationOptions$$2$$) {
        this.$_component$("option", $mo$$2$$, $mutationOptions$$2$$[$mo$$2$$], $flags$$15$$);
      }
    }
  };
  $ComponentChangeTracker$$.prototype.$flushChanges$ = function $$ComponentChangeTracker$$$$$flushChanges$$() {
    var $changes$$2$$ = this.$_changes$;
    this.$_changes$ = {};
    return $changes$$2$$;
  };
  $ComponentChangeTracker$$.prototype.$_isSuspended$ = function $$ComponentChangeTracker$$$$$_isSuspended$$() {
    return 1 <= this.$_suspendCount$;
  };
  $oj$$7$$.$ComponentBinding$.$_changeQueue$ = new $GlobalChangeQueue$$;
  $oj$$7$$.$ComponentBinding$.$_INSTANCE$ = $oj$$7$$.$ComponentBinding$.create(["ojComponent", "jqueryUI"]);
  (function() {
    var $wrapped$$ = $ko$$1$$.removeNode;
    $ko$$1$$.removeNode = function $$ko$$1$$$removeNode$($node$$23$$) {
      var $ojComponents$$ = $oj$$7$$.Components;
      $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$($node$$23$$);
      try {
        $wrapped$$($node$$23$$);
      } finally {
        $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$(null);
      }
    };
  })();
  $ko$$1$$.bindingHandlers.ojContextMenu = {update:function $$ko$$1$$$bindingHandlers$ojContextMenu$update$($element$$45$$, $valueAccessor$$4$$) {
    function $launch$$1$$($event$$60$$, $eventType$$29_openOptions$$1$$, $pressHold$$1$$) {
      $isPressHold$$1$$ = $pressHold$$1$$;
      var $menu$$3$$ = $getContextMenu$$();
      if ($isPressHold$$1$$) {
        $$element$$.one("touchend.ojContextMenu", function() {
          $menu$$3$$.$__contextMenuPressHoldJustEnded$(!0);
          setTimeout(function() {
            $menu$$3$$.$__contextMenuPressHoldJustEnded$(!1);
          }, 50);
        });
      }
      "touchstart" === $doubleOpenType$$1$$ && "contextmenu" === $event$$60$$.type || "contextmenu" === $doubleOpenType$$1$$ && "touchstart" === $event$$60$$.type ? ($doubleOpenType$$1$$ = null, clearTimeout($doubleOpenTimer$$1$$)) : !$event$$60$$.isDefaultPrevented() && ($eventType$$29_openOptions$$1$$ = {launcher:$$element$$, initialFocus:"menu", position:{mouse:{my:"start top", at:"start bottom", of:$event$$60$$}, touch:{my:"start\x3e40 center", at:"start bottom", of:$event$$60$$, collision:"flipfit"}, 
      keyboard:{my:"start top", at:"start bottom", of:"launcher"}}[$eventType$$29_openOptions$$1$$]}, $menu$$3$$.$__openingContextMenu$ = !0, $menu$$3$$.open($event$$60$$, $eventType$$29_openOptions$$1$$), $menu$$3$$.$__openingContextMenu$ = !1, $getContextMenuNode$$().is(":visible") && ($event$$60$$.preventDefault(), document.addEventListener("keyup", $preventKeyUpEventIfMenuOpen$$), "touchstart" === $event$$60$$.type || "contextmenu" === $event$$60$$.type)) && ($doubleOpenType$$1$$ = $event$$60$$.type, 
      $doubleOpenTimer$$1$$ = setTimeout(function() {
        $doubleOpenType$$1$$ = null;
      }, 300));
    }
    function $preventKeyUpEventIfMenuOpen$$($event$$59$$) {
      121 == $event$$59$$.which && $event$$59$$.shiftKey && $getContextMenuNode$$().is(":visible") && $event$$59$$.preventDefault();
    }
    function $getContextMenuNode$$() {
      $$menu$$ || $setContextMenuIvars$$();
      return $$menu$$;
    }
    function $getContextMenu$$() {
      $_menu$$ || $setContextMenuIvars$$();
      return $_menu$$;
    }
    function $setContextMenuIvars$$() {
      $$menu$$ = $$$$7$$($menuSelector$$).first();
      $_menu$$ = $$menu$$.data("oj-ojMenu");
      if (!$_menu$$) {
        throw Error('"contextMenu" set to "' + $menuSelector$$ + '", which does not reference a valid JET Menu.');
      }
      $$menu$$.on("oj__dismiss.ojContextMenu", function() {
        document.removeEventListener("keyup", $preventKeyUpEventIfMenuOpen$$);
      });
    }
    var $$element$$ = $$$$7$$($element$$45$$), $$menu$$, $_menu$$, $pressHoldTimer$$, $isPressHold$$1$$ = !1, $touchInProgress$$1$$ = !1, $doubleOpenTimer$$1$$, $doubleOpenType$$1$$ = null, $clickListener$$;
    $$element$$.off(".ojContextMenu").removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", $clickListener$$, !0);
    $$menu$$ && $$menu$$.off(".ojContextMenu");
    clearTimeout($pressHoldTimer$$);
    $$menu$$ = $_menu$$ = void 0;
    var $menuSelector$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$4$$());
    "string" !== $$$$7$$.type($menuSelector$$) && ($menuSelector$$ = $element$$45$$.getAttribute("contextmenu")) && ($menuSelector$$ = "#" + $menuSelector$$);
    $clickListener$$ = function $$clickListener$$$($event$$62$$) {
      if ($isPressHold$$1$$) {
        return $event$$62$$.preventDefault(), $event$$62$$.stopPropagation(), $isPressHold$$1$$ = !1;
      }
    };
    $element$$45$$.addEventListener("click", $clickListener$$, !0);
    $$element$$.on("touchstart.ojContextMenu mousedown.ojContextMenu keydown.ojContextMenu ", function($event$$63$$) {
      if ("mousedown" !== $event$$63$$.type || !$getContextMenu$$().$__contextMenuPressHoldJustEnded$()) {
        return $isPressHold$$1$$ = !1, "touchstart" === $event$$63$$.type && ($touchInProgress$$1$$ = !0, $pressHoldTimer$$ = setTimeout($launch$$1$$.bind(void 0, $event$$63$$, "touch", !0), 750)), !0;
      }
    }).on("touchend.ojContextMenu touchcancel.ojContextMenu", function() {
      $touchInProgress$$1$$ = !1;
      clearTimeout($pressHoldTimer$$);
      return!0;
    }).on("keydown.ojContextMenu contextmenu.ojContextMenu", function($event$$65$$) {
      ("contextmenu" === $event$$65$$.type || 121 == $event$$65$$.which && $event$$65$$.shiftKey) && $launch$$1$$($event$$65$$, $touchInProgress$$1$$ ? "touch" : "keydown" === $event$$65$$.type ? "keyboard" : "mouse", !1);
      return!0;
    }).addClass("oj-menu-context-menu-launcher");
  }};
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["header", "cell"], init:function($cellTemplate_column_name$$89_row$$, $value$$154$$, $columnTemplate_element$$46_rowTemplate$$, $widgetConstructor$$, $valueAccessor$$5$$, $allBindingsAccessor$$4$$, $bindingContext$$19$$) {
    if ("header" === $cellTemplate_column_name$$89_row$$) {
      return $cellTemplate_column_name$$89_row$$ = $value$$154$$.row, null != $cellTemplate_column_name$$89_row$$ && ($columnTemplate_element$$46_rowTemplate$$ = $cellTemplate_column_name$$89_row$$.template, null != $columnTemplate_element$$46_rowTemplate$$ && ($cellTemplate_column_name$$89_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$19$$, $columnTemplate_element$$46_rowTemplate$$))), $cellTemplate_column_name$$89_row$$ = $value$$154$$.column, null != $cellTemplate_column_name$$89_row$$ && 
      ($columnTemplate_element$$46_rowTemplate$$ = $cellTemplate_column_name$$89_row$$.template, null != $columnTemplate_element$$46_rowTemplate$$ && ($cellTemplate_column_name$$89_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$19$$, $columnTemplate_element$$46_rowTemplate$$))), {header:$value$$154$$};
    }
    if ("cell" === $cellTemplate_column_name$$89_row$$) {
      return $cellTemplate_column_name$$89_row$$ = $value$$154$$.template, null != $cellTemplate_column_name$$89_row$$ && ($value$$154$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$19$$, $cellTemplate_column_name$$89_row$$)), {cell:$value$$154$$};
    }
  }, update:function($cellTemplate$$1_column$$1_name$$90_row$$1$$, $value$$155$$, $columnTemplate$$1_element$$47_rowTemplate$$1$$, $widgetConstructor$$1$$, $valueAccessor$$6$$, $allBindingsAccessor$$5$$, $bindingContext$$20$$) {
    return "header" === $cellTemplate$$1_column$$1_name$$90_row$$1$$ ? ($cellTemplate$$1_column$$1_name$$90_row$$1$$ = $value$$155$$.row, null != $cellTemplate$$1_column$$1_name$$90_row$$1$$ && ($columnTemplate$$1_element$$47_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$90_row$$1$$.template, null != $columnTemplate$$1_element$$47_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$90_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$20$$, $columnTemplate$$1_element$$47_rowTemplate$$1$$))), 
    $cellTemplate$$1_column$$1_name$$90_row$$1$$ = $value$$155$$.column, null != $cellTemplate$$1_column$$1_name$$90_row$$1$$ && ($columnTemplate$$1_element$$47_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$90_row$$1$$.template, null != $columnTemplate$$1_element$$47_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$90_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$20$$, $columnTemplate$$1_element$$47_rowTemplate$$1$$))), {header:$value$$155$$}) : "cell" === $cellTemplate$$1_column$$1_name$$90_row$$1$$ ? 
    ($cellTemplate$$1_column$$1_name$$90_row$$1$$ = $value$$155$$.template, null != $cellTemplate$$1_column$$1_name$$90_row$$1$$ && ($value$$155$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$20$$, $cellTemplate$$1_column$$1_name$$90_row$$1$$)), {cell:$value$$155$$}) : null;
  }, "for":"ojDataGrid"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["template"], init:function($name$$91$$, $value$$156$$, $element$$48$$, $widgetConstructor$$2$$, $valueAccessor$$7$$, $allBindingsAccessor$$6$$, $bindingContext$$21$$) {
    return "template" === $name$$91$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$21$$, $value$$156$$)} : null;
  }, update:function($name$$92$$, $value$$157$$, $element$$49$$, $widgetConstructor$$3$$, $valueAccessor$$8$$, $allBindingsAccessor$$7$$, $bindingContext$$22$$) {
    return "template" === $name$$92$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$22$$, $value$$157$$)} : null;
  }, "for":"ojDiagram"});
  $oj$$7$$.$koStringTemplateEngine$ = {};
  $goog$exportPath_$$("koStringTemplateEngine", $oj$$7$$.$koStringTemplateEngine$, $oj$$7$$);
  $oj$$7$$.$koStringTemplateEngine$.$install$ = function $$oj$$7$$$$koStringTemplateEngine$$$install$$() {
    if (!$ko$$1$$.templates) {
      var $_templateText$$ = {}, $_templateData$$ = {}, $_engine$$ = new $ko$$1$$.nativeTemplateEngine, $StringTemplate$$ = function $$StringTemplate$$$($template$$10$$) {
        this.$_templateName$ = $template$$10$$;
        this.text = function $this$text$($value$$158$$) {
          if (!$value$$158$$) {
            return $_templateText$$[this.$_templateName$];
          }
          $_templateText$$[this.$_templateName$] = $value$$158$$;
        };
        this.data = function $this$data$($key$$43$$, $value$$159$$) {
          $_templateData$$[this.$_templateName$] || ($_templateData$$[this.$_templateName$] = {});
          if (1 === arguments.length) {
            return $_templateData$$[this.$_templateName$][$key$$43$$];
          }
          $_templateData$$[this.$_templateName$][$key$$43$$] = $value$$159$$;
        };
      };
      $_engine$$.makeTemplateSource = function $$_engine$$$makeTemplateSource$($template$$11$$, $templateDocument$$) {
        if ("string" == typeof $template$$11$$) {
          $templateDocument$$ = $templateDocument$$ || document;
          var $elem$$19$$ = $templateDocument$$.getElementById($template$$11$$);
          return $elem$$19$$ ? new $ko$$1$$.templateSources.domElement($elem$$19$$) : new $StringTemplate$$($template$$11$$);
        }
        if ($template$$11$$ && 1 == $template$$11$$.nodeType || 8 == $template$$11$$.nodeType) {
          return new $ko$$1$$.templateSources.anonymousTemplate($template$$11$$);
        }
      };
      $ko$$1$$.templates = $_templateText$$;
      $ko$$1$$.setTemplateEngine($_engine$$);
    }
  };
  $goog$exportPath_$$("koStringTemplateEngine.install", $oj$$7$$.$koStringTemplateEngine$.$install$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["item"], init:function($name$$93_result$$16$$, $value$$160$$, $element$$50$$, $widgetConstructor$$4$$, $valueAccessor$$9$$, $allBindingsAccessor$$8$$, $bindingContext$$23$$) {
    $name$$93_result$$16$$ = $_handleListViewManagedAttributes$$($name$$93_result$$16$$, $value$$160$$, $bindingContext$$23$$);
    if (null != $name$$93_result$$16$$) {
      return $name$$93_result$$16$$;
    }
  }, update:function($name$$94$$, $value$$161$$, $element$$51$$, $widgetConstructor$$5$$, $valueAccessor$$10$$, $allBindingsAccessor$$9$$, $bindingContext$$24$$) {
    return $_handleListViewManagedAttributes$$($name$$94$$, $value$$161$$, $bindingContext$$24$$);
  }, "for":"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojListView", use:"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojNavigationList", use:"ojListViewRenderer"});
  $oj$$7$$.ResponsiveKnockoutUtils = {};
  $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createMediaQueryObservable$($query$$4_queryString$$1$$) {
    if (null == $query$$4_queryString$$1$$) {
      throw Error("oj.ResponsiveKnockoutUtils.createMediaQueryObservable: aborting, queryString is null");
    }
    $query$$4_queryString$$1$$ = window.matchMedia($query$$4_queryString$$1$$);
    var $observable$$ = $ko$$1$$.observable($query$$4_queryString$$1$$.matches);
    $query$$4_queryString$$1$$.addListener(function($query$$5$$) {
      $observable$$($query$$5$$.matches);
    });
    -1 != navigator.userAgent.indexOf("WebKit") && -1 == navigator.userAgent.indexOf("Chrome") && $$$$7$$(window).resize(function() {
      0 === $$$$7$$("body").has(".oj-webkit-bug-123293").length && $$$$7$$("body").append('\x3cdiv aria-hidden\x3d"true" class\x3d"oj-helper-hidden-accessible oj-webkit-bug-123293"\x3e');
      $$$$7$$(".oj-webkit-bug-123293").text((new Date).getMilliseconds().toString());
    });
    return $observable$$;
  };
  $oj$$7$$.ResponsiveKnockoutUtils.createScreenRangeObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createScreenRangeObservable$() {
    var $xxlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XXL_UP), $xlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XL_UP), $lgQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP), $mdQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP), $smQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_UP), 
    $xxlObservable$$ = null == $xxlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xxlQuery$$), $xlObservable$$ = null == $xlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xlQuery$$), $lgObservable$$ = null == $lgQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($lgQuery$$), $mdObservable$$ = null == $mdQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($mdQuery$$), $smObservable$$ = 
    null == $smQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($smQuery$$);
    return $ko$$1$$.computed(function() {
      if ($xxlObservable$$ && $xxlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XXL;
      }
      if ($xlObservable$$ && $xlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XL;
      }
      if ($lgObservable$$ && $lgObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.LG;
      }
      if ($mdObservable$$ && $mdObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.MD;
      }
      if ($smObservable$$ && $smObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.SM;
      }
      throw Error(" NO MATCH in oj.ResponsiveKnockoutUtils.createScreenRangeObservable");
    });
  };
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["columns", "columnsDefault", "rowTemplate"], init:function($name$$95$$, $value$$162$$, $element$$52_i$$132$$, $template$$12_widgetConstructor$$6$$, $footerTemplate_valueAccessor$$11$$, $allBindingsAccessor$$10_headerTemplate$$, $bindingContext$$25$$) {
    if ("columns" == $name$$95$$ || "columnsDefault" == $name$$95$$) {
      for ($element$$52_i$$132$$ = 0;$element$$52_i$$132$$ < $value$$162$$.length;$element$$52_i$$132$$++) {
        var $column$$2$$ = $value$$162$$[$element$$52_i$$132$$];
        $template$$12_widgetConstructor$$6$$ = $column$$2$$.template;
        $footerTemplate_valueAccessor$$11$$ = $column$$2$$.footerTemplate;
        $allBindingsAccessor$$10_headerTemplate$$ = $column$$2$$.headerTemplate;
        null != $template$$12_widgetConstructor$$6$$ && ($column$$2$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$25$$, "cell", $template$$12_widgetConstructor$$6$$));
        null != $footerTemplate_valueAccessor$$11$$ && ($column$$2$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$25$$, "footer", $footerTemplate_valueAccessor$$11$$));
        null != $allBindingsAccessor$$10_headerTemplate$$ && ($column$$2$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$25$$, "header", $allBindingsAccessor$$10_headerTemplate$$));
      }
      return "columns" == $name$$95$$ ? {columns:$value$$162$$} : {columnsDefault:$value$$162$$};
    }
    if ("rowTemplate" == $name$$95$$) {
      return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$25$$, $value$$162$$)};
    }
  }, update:function($name$$96$$, $value$$163$$, $element$$53_i$$133$$, $widgetConstructor$$7$$, $template$$13_valueAccessor$$12$$, $allBindingsAccessor$$11_footerTemplate$$1$$, $bindingContext$$26$$) {
    if ("columns" == $name$$96$$ || "columnsDefault" == $name$$96$$) {
      var $headerTemplate$$1$$;
      for ($element$$53_i$$133$$ = 0;$element$$53_i$$133$$ < $value$$163$$.length;$element$$53_i$$133$$++) {
        var $column$$3$$ = $value$$163$$[$element$$53_i$$133$$];
        $template$$13_valueAccessor$$12$$ = $column$$3$$.template;
        $allBindingsAccessor$$11_footerTemplate$$1$$ = $column$$3$$.footerTemplate;
        $headerTemplate$$1$$ = $column$$3$$.headerTemplate;
        null != $template$$13_valueAccessor$$12$$ && ($column$$3$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$26$$, "cell", $template$$13_valueAccessor$$12$$));
        null != $allBindingsAccessor$$11_footerTemplate$$1$$ && ($column$$3$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$26$$, "footer", $allBindingsAccessor$$11_footerTemplate$$1$$));
        null != $headerTemplate$$1$$ && ($column$$3$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$26$$, "header", $headerTemplate$$1$$));
      }
      "columns" == $name$$96$$ ? $widgetConstructor$$7$$({columns:$value$$163$$}) : $widgetConstructor$$7$$({columnsDefault:$value$$163$$});
    } else {
      if ("rowTemplate" == $name$$96$$) {
        return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$26$$, $value$$163$$)};
      }
    }
    return null;
  }, "for":"ojTable"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["areaLayers", "pointDataLayers"], init:function($name$$97$$, $value$$164$$, $element$$54$$, $widgetConstructor$$8$$, $valueAccessor$$13$$, $allBindingsAccessor$$12$$, $bindingContext$$27$$) {
    return $_handleManagedAttributes$$($name$$97$$, $value$$164$$, $bindingContext$$27$$);
  }, update:function($name$$98$$, $value$$165$$, $element$$55$$, $widgetConstructor$$9$$, $valueAccessor$$14$$, $allBindingsAccessor$$13$$, $bindingContext$$28$$) {
    return $_handleManagedAttributes$$($name$$98$$, $value$$165$$, $bindingContext$$28$$);
  }, "for":"ojThematicMap"});
});
