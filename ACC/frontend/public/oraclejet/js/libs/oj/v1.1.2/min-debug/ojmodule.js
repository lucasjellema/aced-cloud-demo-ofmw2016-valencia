/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$40$$, $ko$$5$$) {
  $oj$$40$$.$ModuleBinding$ = {};
  $oj$$40$$.$ModuleBinding$.$defaults$ = {viewPath:"text!views/", viewSuffix:".html", modelPath:"viewModels/", initializeMethod:"initialize", disposeMethod:"dispose", activatedHandler:"handleActivated", attachedHandler:"handleAttached", detachedHandler:"handleDetached", bindingsAppliedHandler:"handleBindingsApplied", deactivatedHandler:"handleDeactivated"};
  $goog$exportPath_$$("ModuleBinding.defaults", $oj$$40$$.$ModuleBinding$.$defaults$, $oj$$40$$);
  (function() {
    function $_invokeLifecycleListener$$($listener$$40$$, $method$$7$$, $params$$25$$) {
      if ($listener$$40$$ && $listener$$40$$[$method$$7$$]) {
        var $data$$155$$ = {element:$params$$25$$[0], valueAccessor:$params$$25$$[1]};
        2 < $params$$25$$.length && ($data$$155$$.viewModel = $params$$25$$[2], 3 < $params$$25$$.length && ($data$$155$$["boolean" === typeof $params$$25$$[3] ? "fromCache" : "cachedNodes"] = $params$$25$$[3]));
        return $ko$$5$$.ignoreDependencies($listener$$40$$[$method$$7$$], $listener$$40$$, [$data$$155$$]);
      }
    }
    function $_invokeViewModelMethod$$($model$$74$$, $handler$$51_key$$149_name$$112$$, $params$$26$$) {
      if (null != $model$$74$$ && ($handler$$51_key$$149_name$$112$$ = $oj$$40$$.$ModuleBinding$.$defaults$[$handler$$51_key$$149_name$$112$$], null != $handler$$51_key$$149_name$$112$$ && $model$$74$$ && ($handler$$51_key$$149_name$$112$$ = $model$$74$$[$handler$$51_key$$149_name$$112$$], "function" === typeof $handler$$51_key$$149_name$$112$$))) {
        var $data$$156$$ = void 0;
        $params$$26$$ && ($data$$156$$ = {element:$params$$26$$[0], valueAccessor:$params$$26$$[1]}, 2 < $params$$26$$.length && ($data$$156$$["boolean" === typeof $params$$26$$[2] ? "fromCache" : "cachedNodes"] = $params$$26$$[2]));
        return $ko$$5$$.ignoreDependencies($handler$$51_key$$149_name$$112$$, $model$$74$$, [$data$$156$$]);
      }
    }
    function $_removeAndPossiblyCacheChildren$$($node$$66$$, $cacheArray$$, $cacheHolder$$, $needsClean$$) {
      for (var $child$$20$$ = $node$$66$$.firstChild;$child$$20$$;) {
        var $next$$6$$ = $child$$20$$.nextSibling;
        $child$$20$$ !== $cacheHolder$$ && ($needsClean$$ && $ko$$5$$.cleanNode($child$$20$$), $cacheArray$$ ? ($cacheArray$$.push($child$$20$$), $cacheHolder$$.appendChild($child$$20$$)) : $node$$66$$.removeChild($child$$20$$));
        $child$$20$$ = $next$$6$$;
      }
    }
    function $_propagateSubtreeVisibilityToComponents$$($nodeArray$$, $visible$$) {
      if (null != $oj$$40$$.Components) {
        for (var $i$$375$$ = 0;$i$$375$$ < $nodeArray$$.length;$i$$375$$++) {
          $visible$$ ? $oj$$40$$.Components.$subtreeShown$($nodeArray$$[$i$$375$$]) : $oj$$40$$.Components.$subtreeHidden$($nodeArray$$[$i$$375$$]);
        }
      }
    }
    function $_getDomNodes$$($content$$23$$) {
      return $content$$23$$ = "string" === typeof $content$$23$$ ? $ko$$5$$.utils.parseHtmlFragment($content$$23$$) : (window.DocumentFragment ? $content$$23$$ instanceof DocumentFragment : $content$$23$$ && 11 === $content$$23$$.nodeType) ? $ko$$5$$.utils.arrayPushAll([], $content$$23$$.childNodes) : $ko$$5$$.utils.arrayPushAll([], $content$$23$$);
    }
    function $_getRequirePromise$$($module$$1$$) {
      return new Promise(function($resolve$$50$$) {
        require([$module$$1$$], function($loaded$$) {
          $resolve$$50$$($loaded$$);
        }, function() {
          throw Error("ojModule failed to load " + $module$$1$$);
        });
      });
    }
    $ko$$5$$.bindingHandlers.ojModule = {init:function $$ko$$5$$$bindingHandlers$ojModule$init$($element$$113$$, $valueAccessor$$18$$, $allBindingsAccessor$$14$$, $viewModel$$4$$, $bindingContext$$29$$) {
      function $checkPeningId$$($id$$39$$) {
        if ($id$$39$$ != $pendingViewId$$) {
          throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");
        }
      }
      function $invokeModelDispose$$($model$$75$$) {
        $_invokeViewModelMethod$$($model$$75$$, "disposeMethod", [$element$$113$$, $valueAccessor$$18$$]);
      }
      var $currentViewModel$$, $cache$$1$$ = {}, $currentCacheKey$$, $pendingViewId$$ = -1, $cacheHolder$$1$$;
      $ko$$5$$.utils.domNodeDisposal.addDisposeCallback($element$$113$$, function() {
        $invokeModelDispose$$($currentViewModel$$);
        for (var $keys$$40$$ = Object.keys($cache$$1$$), $i$$376$$ = 0;$i$$376$$ < $keys$$40$$.length;$i$$376$$++) {
          $invokeModelDispose$$($cache$$1$$[$keys$$40$$[$i$$376$$]].$model$);
        }
      });
      $ko$$5$$.computed(function() {
        $pendingViewId$$++;
        var $attachPromise_value$$261$$ = $ko$$5$$.utils.unwrapObservable($valueAccessor$$18$$()), $moduleName$$, $viewName$$, $params$$27$$, $modelFactory$$, $viewFunction$$, $cacheKey$$, $lifecycleListener$$;
        "string" === typeof $attachPromise_value$$261$$ ? $moduleName$$ = $attachPromise_value$$261$$ : ($moduleName$$ = $ko$$5$$.utils.unwrapObservable($attachPromise_value$$261$$.name), $viewName$$ = $ko$$5$$.utils.unwrapObservable($attachPromise_value$$261$$.viewName), $params$$27$$ = $ko$$5$$.utils.unwrapObservable($attachPromise_value$$261$$.params), $modelFactory$$ = $ko$$5$$.utils.unwrapObservable($attachPromise_value$$261$$.viewModelFactory), $viewFunction$$ = $ko$$5$$.utils.unwrapObservable($attachPromise_value$$261$$.createViewFunction), 
        $cacheKey$$ = $ko$$5$$.utils.unwrapObservable($attachPromise_value$$261$$.cacheKey), $lifecycleListener$$ = $ko$$5$$.utils.unwrapObservable($attachPromise_value$$261$$.lifecycleListener));
        var $attachPromise_value$$261$$ = $_invokeLifecycleListener$$($lifecycleListener$$, "activated", [$element$$113$$, $valueAccessor$$18$$]), $viewPromise$$, $modelPromise$$, $cached$$ = null == $cacheKey$$ ? null : $cache$$1$$[$cacheKey$$];
        if (null != $cached$$) {
          delete $cache$$1$$[$cacheKey$$], $viewPromise$$ = Promise.resolve($cached$$.view), $modelPromise$$ = Promise.resolve($cached$$.$model$);
        } else {
          if (null != $modelFactory$$ && ($modelPromise$$ = $ko$$5$$.ignoreDependencies($modelFactory$$.createViewModel, $modelFactory$$, [$params$$27$$, $valueAccessor$$18$$])), null == $modelPromise$$ && null != $moduleName$$ && ($modelPromise$$ = $_getRequirePromise$$($oj$$40$$.$ModuleBinding$.$defaults$.modelPath + $moduleName$$)), null != $modelPromise$$ && ($modelPromise$$ = $modelPromise$$.then(function($id$$40$$, $viewModel$$5$$) {
            $checkPeningId$$($id$$40$$);
            return $viewModel$$5$$ = "function" === typeof $viewModel$$5$$ ? new $viewModel$$5$$($params$$27$$) : $_invokeViewModelMethod$$($viewModel$$5$$, "initializeMethod", [$element$$113$$, $valueAccessor$$18$$]) || $viewModel$$5$$;
          }.bind(null, $pendingViewId$$)), null != $viewFunction$$ && ($viewPromise$$ = $modelPromise$$.then(function($id$$41$$, $model$$77$$) {
            $checkPeningId$$($id$$41$$);
            var $viewMethod$$ = null == $model$$77$$ ? null : $model$$77$$[$viewFunction$$];
            return null == $viewMethod$$ ? null : $viewMethod$$();
          }.bind(null, $pendingViewId$$)))), null == $viewPromise$$) {
            if ($viewName$$ = null == $viewName$$ ? $moduleName$$ : $viewName$$, null != $viewName$$) {
              $viewPromise$$ = $_getRequirePromise$$($oj$$40$$.$ModuleBinding$.$defaults$.viewPath + $viewName$$ + $oj$$40$$.$ModuleBinding$.$defaults$.viewSuffix);
            } else {
              throw Error("View name must be specified");
            }
          }
        }
        if (null == $viewPromise$$) {
          throw Error("ojModule is missing a View");
        }
        var $modelAttachPromise$$;
        null != $modelPromise$$ && ($modelAttachPromise$$ = $modelPromise$$.then(function($id$$42$$, $viewModel$$6$$) {
          $checkPeningId$$($id$$42$$);
          return $_invokeViewModelMethod$$($viewModel$$6$$, "activatedHandler", [$element$$113$$, $valueAccessor$$18$$]);
        }.bind(null, $pendingViewId$$)));
        Promise.all([$viewPromise$$, $modelPromise$$, $attachPromise_value$$261$$, $modelAttachPromise$$]).then(function($id$$43$$, $values$$13$$) {
          if ($id$$43$$ == $pendingViewId$$) {
            var $nodes$$ = $_getDomNodes$$($values$$13$$[0]), $model$$78$$ = $values$$13$$[1], $childBindingContext_fromCache_i$$377_saveInCache$$ = !1, $cachedNodeArray_j$$41_n$$24$$;
            null != $currentCacheKey$$ && ($childBindingContext_fromCache_i$$377_saveInCache$$ = !0, $cachedNodeArray_j$$41_n$$24$$ = [], $cacheHolder$$1$$ || ($cacheHolder$$1$$ = document.createElement("div"), $cacheHolder$$1$$.className = "oj-helper-module-cache", $element$$113$$.appendChild($cacheHolder$$1$$)));
            $_removeAndPossiblyCacheChildren$$($element$$113$$, $cachedNodeArray_j$$41_n$$24$$, $cacheHolder$$1$$, !$childBindingContext_fromCache_i$$377_saveInCache$$);
            0 < $pendingViewId$$ && ($_invokeLifecycleListener$$($lifecycleListener$$, "detached", [$element$$113$$, $valueAccessor$$18$$, $currentViewModel$$, $cachedNodeArray_j$$41_n$$24$$]), $_invokeViewModelMethod$$($currentViewModel$$, "detachedHandler", [$element$$113$$, $valueAccessor$$18$$, $cachedNodeArray_j$$41_n$$24$$]), $_invokeLifecycleListener$$($lifecycleListener$$, "deactivated", [$element$$113$$, $valueAccessor$$18$$, $currentViewModel$$]), $_invokeViewModelMethod$$($currentViewModel$$, 
            "deactivatedHandler", [$element$$113$$, $valueAccessor$$18$$]));
            $childBindingContext_fromCache_i$$377_saveInCache$$ ? ($_propagateSubtreeVisibilityToComponents$$($cachedNodeArray_j$$41_n$$24$$, !1), $cache$$1$$[$currentCacheKey$$] = {$model$:$currentViewModel$$, view:$cachedNodeArray_j$$41_n$$24$$}) : $invokeModelDispose$$($currentViewModel$$);
            $currentViewModel$$ = $model$$78$$;
            $currentCacheKey$$ = $cacheKey$$;
            $childBindingContext_fromCache_i$$377_saveInCache$$ = 0;
            for ($cachedNodeArray_j$$41_n$$24$$ = $nodes$$.length;$childBindingContext_fromCache_i$$377_saveInCache$$ < $cachedNodeArray_j$$41_n$$24$$;$childBindingContext_fromCache_i$$377_saveInCache$$++) {
              $cacheHolder$$1$$ ? $element$$113$$.insertBefore($nodes$$[$childBindingContext_fromCache_i$$377_saveInCache$$], $cacheHolder$$1$$) : $element$$113$$.appendChild($nodes$$[$childBindingContext_fromCache_i$$377_saveInCache$$]);
            }
            ($childBindingContext_fromCache_i$$377_saveInCache$$ = null != $cached$$) && $_propagateSubtreeVisibilityToComponents$$($nodes$$, !0);
            $_invokeLifecycleListener$$($lifecycleListener$$, "attached", [$element$$113$$, $valueAccessor$$18$$, $currentViewModel$$, $childBindingContext_fromCache_i$$377_saveInCache$$]);
            $_invokeViewModelMethod$$($currentViewModel$$, "attachedHandler", [$element$$113$$, $valueAccessor$$18$$, $childBindingContext_fromCache_i$$377_saveInCache$$]);
            if (!$childBindingContext_fromCache_i$$377_saveInCache$$) {
              $childBindingContext_fromCache_i$$377_saveInCache$$ = $bindingContext$$29$$.createChildContext($model$$78$$, void 0, function($ctx$$) {
                $ctx$$.$module = $model$$78$$;
              });
              $cachedNodeArray_j$$41_n$$24$$ = 0;
              for (var $l$$10$$ = $nodes$$.length;$cachedNodeArray_j$$41_n$$24$$ < $l$$10$$;$cachedNodeArray_j$$41_n$$24$$++) {
                var $node$$67$$ = $nodes$$[$cachedNodeArray_j$$41_n$$24$$], $type$$94$$ = $node$$67$$.nodeType;
                1 != $type$$94$$ && 8 != $type$$94$$ || $ko$$5$$.applyBindings($childBindingContext_fromCache_i$$377_saveInCache$$, $node$$67$$);
              }
              $_invokeLifecycleListener$$($lifecycleListener$$, "bindingsApplied", [$element$$113$$, $valueAccessor$$18$$, $model$$78$$]);
              $_invokeViewModelMethod$$($model$$78$$, "bindingsAppliedHandler", [$element$$113$$, $valueAccessor$$18$$]);
            }
          }
        }.bind(null, $pendingViewId$$), function($id$$44$$, $reason$$5$$) {
          $id$$44$$ == $pendingViewId$$ && $oj$$40$$.$Logger$.error($reason$$5$$);
        }.bind(null, $pendingViewId$$));
      }, null, {$disposeWhenNodeIsRemoved$:$element$$113$$});
      return{controlsDescendantBindings:!0};
    }};
  })();
});
