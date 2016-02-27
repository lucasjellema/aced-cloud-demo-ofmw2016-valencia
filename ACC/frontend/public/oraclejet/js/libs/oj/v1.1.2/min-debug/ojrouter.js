/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "knockout", "signals", "promise"], function($oj$$17$$, $ko$$3$$, $signals$$1$$) {
  (function() {
    function $_updateAll$$($allChanges$$3$$) {
      $oj$$17$$.$Logger$.info("Entering _updateAll.");
      for (var $change$$3_hasChanged$$1$$ = !1, $i$$278$$ = 0;$i$$278$$ < $allChanges$$3$$.length && ($change$$3_hasChanged$$1$$ = $allChanges$$3$$[$i$$278$$], $change$$3_hasChanged$$1$$ = $change$$3_hasChanged$$1$$.$router$.$_update$($change$$3_hasChanged$$1$$.value), $change$$3_hasChanged$$1$$);$i$$278$$++) {
      }
      $oj$$17$$.$Logger$.info("_updateAll returns " + ($change$$3_hasChanged$$1$$ ? "true" : "false"));
      return{hasChanged:$change$$3_hasChanged$$1$$};
    }
    function $_canEnter$$($allChanges$$2$$) {
      $oj$$17$$.$Logger$.info("Start _canEnter.");
      for (var $canEnter$$ = !0, $promise$$1$$ = Promise.resolve(!0), $allPromises$$1$$ = [], $i$$276$$ = 0;$i$$276$$ < $allChanges$$2$$.length;$i$$276$$++) {
        var $canEnterCallback_change$$2$$ = $allChanges$$2$$[$i$$276$$], $newState$$ = $canEnterCallback_change$$2$$.$router$.$stateFromIdCallback$($canEnterCallback_change$$2$$.value);
        if ($newState$$ && ($canEnterCallback_change$$2$$ = $newState$$.canEnter, "function" === typeof $canEnterCallback_change$$2$$)) {
          var $result$$54$$;
          try {
            $result$$54$$ = $canEnterCallback_change$$2$$();
          } catch ($err$$14$$) {
            return $oj$$17$$.$Logger$.error("Error when executing canEnter callback: " + $err$$14$$.message), Promise.resolve([]);
          }
          if ($result$$54$$ && $result$$54$$.then) {
            $promise$$1$$ = $result$$54$$;
          } else {
            if ($canEnter$$ = $result$$54$$, !$canEnter$$) {
              $oj$$17$$.$Logger$.info("canEnter is false for state: " + $newState$$.id);
              break;
            }
          }
        }
        $allPromises$$1$$.push($promise$$1$$);
      }
      return $canEnter$$ ? Promise.all($allPromises$$1$$).then(function($results$$10$$) {
        for (var $i$$277$$ = 0;$i$$277$$ < $results$$10$$.length;$i$$277$$++) {
          if (!$results$$10$$[$i$$277$$]) {
            return $oj$$17$$.$Logger$.info("CanEnter promise at position " + $i$$277$$ + " returned false."), [];
          }
        }
        return $allChanges$$2$$;
      }) : Promise.resolve([]);
    }
    function $removeLastSegment$$($url$$23$$) {
      return $url$$23$$.substring(0, $url$$23$$.lastIndexOf("/"));
    }
    function $parseQueryParam$$($key$$86_queryString$$2$$) {
      var $params$$18$$ = {};
      if ($key$$86_queryString$$2$$) {
        var $keyValPairs$$ = [], $keyValPairs$$ = $key$$86_queryString$$2$$.split("\x26"), $pairNum$$;
        for ($pairNum$$ in $keyValPairs$$) {
          var $parts$$4_value$$206$$ = $keyValPairs$$[$pairNum$$].split(/=(.+)?/);
          $key$$86_queryString$$2$$ = $parts$$4_value$$206$$[0];
          $key$$86_queryString$$2$$.length && ("undefined" === typeof $params$$18$$[$key$$86_queryString$$2$$] && ($params$$18$$[$key$$86_queryString$$2$$] = []), $parts$$4_value$$206$$ = $parts$$4_value$$206$$[1] && decodeURIComponent($parts$$4_value$$206$$[1].replace(/\+/g, " ")), $params$$18$$[$key$$86_queryString$$2$$].push($parts$$4_value$$206$$));
        }
      }
      return $params$$18$$;
    }
    function $getShortUrl$$() {
      var $shortUrl$$;
      window.location.hash && 0 < window.location.hash.length ? ($shortUrl$$ = window.location.hash.replace(/[^#]*#/, ""), $shortUrl$$ = $shortUrl$$.replace($_basePathName$$ + "/", "")) : $shortUrl$$ = window.location.href.replace($_ojBaseUrl$$ + "/", "");
      return $shortUrl$$;
    }
    function $getRouterFullName$$($router$$1$$) {
      return $router$$1$$.parent ? $getRouterFullName$$($router$$1$$.parent) + "." + $router$$1$$.name : $router$$1$$.name;
    }
    function $getChildRouter$$($router$$2$$, $value$$207$$) {
      for (var $subRouter$$, $i$$268$$ = 0;$i$$268$$ < $router$$2$$.$_childRouters$.length;$i$$268$$++) {
        var $sr$$ = $router$$2$$.$_childRouters$[$i$$268$$].$router$;
        if (!$sr$$.$_parentState$ || $sr$$.$_parentState$ === $value$$207$$) {
          $subRouter$$ = $sr$$;
          break;
        }
      }
      return $subRouter$$;
    }
    function $addStateParam$$($url$$24$$, $extraState$$1$$) {
      if ($extraState$$1$$ && 0 < Object.getOwnPropertyNames($extraState$$1$$).length) {
        var $sep$$1$$;
        $sep$$1$$ = -1 == $url$$24$$.indexOf("?") ? "?" : "\x26";
        var $JSCompiler_temp_const$$10$$ = $url$$24$$, $compressedState$$inline_784_jsonState$$inline_782$$ = JSON.stringify($extraState$$1$$), $encodedState$$inline_783$$ = encodeURIComponent($compressedState$$inline_784_jsonState$$inline_782$$), $compressedState$$inline_784_jsonState$$inline_782$$ = $LZString$$.$compressToEncodedURIComponent$($compressedState$$inline_784_jsonState$$inline_782$$), $useCompressed$$inline_785$$ = !1, $param$$inline_786$$ = "oj_Router\x3d";
        $compressedState$$inline_784_jsonState$$inline_782$$.length <= $encodedState$$inline_783$$.length && ($useCompressed$$inline_785$$ = !0);
        $param$$inline_786$$ = $useCompressed$$inline_785$$ ? $param$$inline_786$$ + ("1" + $compressedState$$inline_784_jsonState$$inline_782$$) : $param$$inline_786$$ + ("0" + $encodedState$$inline_783$$);
        if (1024 < $param$$inline_786$$.length) {
          throw Error("Size of bookmarkable data is too big.");
        }
        $url$$24$$ = $JSCompiler_temp_const$$10$$ + ($sep$$1$$ + $param$$inline_786$$);
      }
      return $url$$24$$;
    }
    function $handlePopState$$() {
      $oj$$17$$.$Logger$.info("Handling popState event with URL: " + window.location.href);
      for (var $subRouter$$1$$ = null, $i$$269$$ = 0;$i$$269$$ < $rootRouter$$.$_childRouters$.length;$i$$269$$++) {
        var $sr$$1$$ = $rootRouter$$.$_childRouters$[$i$$269$$].$router$;
        if ($rootRouter$$.$_stateId$() && $rootRouter$$.$_stateId$() === $sr$$1$$.$_parentState$) {
          $subRouter$$1$$ = $sr$$1$$;
          break;
        }
      }
      $_canExit$$($subRouter$$1$$).then(function($canExit$$) {
        if ($canExit$$) {
          return $parseAndUpdate$$($getShortUrl$$()).then(function($params$$19$$) {
            $dispatchTransitionedToState$$($params$$19$$.hasChanged);
          });
        }
        $dispatchTransitionedToState$$(!1);
        return Promise.resolve({hasChanged:!1});
      }).then(null, function($error$$40$$) {
        $oj$$17$$.$Logger$.error("Error while changing state in handlePopState: " + $error$$40$$.message);
      });
    }
    function $dispatchTransitionedToState$$($hasChanged$$) {
      $oj$$17$$.$Router$.transitionedToState.dispatch({hasChanged:$hasChanged$$});
    }
    function $_buildState$$($router$$3$$, $level$$26$$, $st_state$$5$$) {
      var $newStates$$ = [];
      $router$$3$$.parent && ($newStates$$ = $_buildState$$($router$$3$$.parent, $level$$26$$ + 1));
      var $sId$$;
      "undefined" === typeof $st_state$$5$$ ? ($st_state$$5$$ = $router$$3$$.$_currentState$()) && ($sId$$ = $st_state$$5$$.id) : $sId$$ = $st_state$$5$$.id;
      $sId$$ === $router$$3$$.$_defaultStateId$ && 0 === $level$$26$$ && ($sId$$ = null);
      $newStates$$.push({$router$:$router$$3$$, $stateId$:$sId$$});
      return $newStates$$;
    }
    function $_buildAllCanExitPromises$$($router$$5$$, $promisesArray$$) {
      var $canExit$$1$$ = !0, $promise$$ = Promise.resolve(!0), $currentState$$ = $router$$5$$.$stateFromIdCallback$($router$$5$$.$_stateId$());
      if ($currentState$$) {
        for (var $canExitCallback_i$$270$$ = 0;$canExitCallback_i$$270$$ < $router$$5$$.$_childRouters$.length;$canExitCallback_i$$270$$++) {
          if ($canExit$$1$$ = $_buildAllCanExitPromises$$($router$$5$$.$_childRouters$[$canExitCallback_i$$270$$].$router$, $promisesArray$$), !$canExit$$1$$) {
            return!1;
          }
        }
        $canExitCallback_i$$270$$ = $currentState$$.$viewModel$ && $currentState$$.$viewModel$.canExit ? $currentState$$.$viewModel$.canExit : $currentState$$.canExit;
        if ("function" === typeof $canExitCallback_i$$270$$) {
          var $result$$52$$;
          try {
            $result$$52$$ = $canExitCallback_i$$270$$();
          } catch ($err$$13$$) {
            return $oj$$17$$.$Logger$.error("Error when executing canExit callback: " + $err$$13$$.message), !1;
          }
          $result$$52$$ && $result$$52$$.then ? $promise$$ = $result$$52$$ : ($result$$52$$ || $oj$$17$$.$Logger$.info("canExit is false for state " + $currentState$$.id), $canExit$$1$$ = $result$$52$$);
        }
      }
      $promisesArray$$.push($promise$$);
      return $canExit$$1$$;
    }
    function $_canExit$$($canExit$$2_router$$6$$) {
      if (!$canExit$$2_router$$6$$) {
        return Promise.resolve(!0);
      }
      var $allPromises$$ = [];
      return($canExit$$2_router$$6$$ = $_buildAllCanExitPromises$$($canExit$$2_router$$6$$, $allPromises$$)) ? Promise.all($allPromises$$).then(function($results$$9$$) {
        for (var $i$$271$$ = 0;$i$$271$$ < $results$$9$$.length;$i$$271$$++) {
          if (!$results$$9$$[$i$$271$$]) {
            return $oj$$17$$.$Logger$.info("CanExit promise at position " + $i$$271$$ + " returned false."), !1;
          }
        }
        return!0;
      }) : Promise.resolve($canExit$$2_router$$6$$);
    }
    function $parseAndUpdate$$($extra$$inline_789_url$$26$$) {
      var $allChanges$$1$$;
      try {
        var $index$$inline_795_url$$inline_788$$ = $extra$$inline_789_url$$26$$;
        $extra$$inline_789_url$$26$$ = {};
        var $param$$inline_997_search$$inline_790$$ = $index$$inline_795_url$$inline_788$$.split("?")[1] || "";
        $oj$$17$$.$Logger$.info("Parsing: " + $index$$inline_795_url$$inline_788$$);
        var $index$$inline_795_url$$inline_788$$ = $_urlAdapter$$.$cleanUrl$($index$$inline_795_url$$inline_788$$), $stateStr$$inline_791$$ = $param$$inline_997_search$$inline_790$$.split("oj_Router\x3d")[1];
        if ($stateStr$$inline_791$$) {
          var $param$$inline_997_search$$inline_790$$ = $stateStr$$inline_791$$ = $stateStr$$inline_791$$.split("\x26")[0], $compressionType$$inline_998_reducedChanges$$inline_794$$ = $param$$inline_997_search$$inline_790$$.charAt(0), $param$$inline_997_search$$inline_790$$ = $param$$inline_997_search$$inline_790$$.slice(1);
          if ("0" === $compressionType$$inline_998_reducedChanges$$inline_794$$) {
            $param$$inline_997_search$$inline_790$$ = decodeURIComponent($param$$inline_997_search$$inline_790$$);
          } else {
            if ("1" === $compressionType$$inline_998_reducedChanges$$inline_794$$) {
              $param$$inline_997_search$$inline_790$$ = $LZString$$.$decompressFromEncodedURIComponent$($param$$inline_997_search$$inline_790$$);
            } else {
              throw Error("Error retrieving bookmarkable data. Format is invalid");
            }
          }
          $extra$$inline_789_url$$26$$ = JSON.parse($param$$inline_997_search$$inline_790$$);
        }
        if ($oj$$17$$.$Logger$.option("level") === $oj$$17$$.$Logger$.$LEVEL_INFO$) {
          $oj$$17$$.$Logger$.info("Bookmarkable data: ");
          for (var $allChanges$$inline_793_name$$inline_792$$ in $extra$$inline_789_url$$26$$) {
            $oj$$17$$.$Logger$.info("   { router: " + $allChanges$$inline_793_name$$inline_792$$ + ", value: " + $extra$$inline_789_url$$26$$[$allChanges$$inline_793_name$$inline_792$$]);
          }
        }
        $allChanges$$inline_793_name$$inline_792$$ = [];
        $compressionType$$inline_998_reducedChanges$$inline_794$$ = [];
        $allChanges$$inline_793_name$$inline_792$$ = $_urlAdapter$$.parse($index$$inline_795_url$$inline_788$$);
        for ($index$$inline_795_url$$inline_788$$ = 0;$index$$inline_795_url$$inline_788$$ < $allChanges$$inline_793_name$$inline_792$$.length;$index$$inline_795_url$$inline_788$$++) {
          var $change$$inline_796_i$$inline_798$$ = $allChanges$$inline_793_name$$inline_792$$[$index$$inline_795_url$$inline_788$$], $ex$$inline_797$$ = $extra$$inline_789_url$$26$$[$change$$inline_796_i$$inline_798$$.$router$.name];
          $ex$$inline_797$$ && ($change$$inline_796_i$$inline_798$$.$router$.$_extra$ = $ex$$inline_797$$);
          $change$$inline_796_i$$inline_798$$.value !== $change$$inline_796_i$$inline_798$$.$router$.$_stateId$() && $compressionType$$inline_998_reducedChanges$$inline_794$$.push($change$$inline_796_i$$inline_798$$);
        }
        if ($oj$$17$$.$Logger$.option("level") === $oj$$17$$.$Logger$.$LEVEL_INFO$) {
          for ($oj$$17$$.$Logger$.info("Potential changes are: "), $change$$inline_796_i$$inline_798$$ = 0;$change$$inline_796_i$$inline_798$$ < $compressionType$$inline_998_reducedChanges$$inline_794$$.length;$change$$inline_796_i$$inline_798$$++) {
            $oj$$17$$.$Logger$.info("   { router: " + $getRouterFullName$$($compressionType$$inline_998_reducedChanges$$inline_794$$[$change$$inline_796_i$$inline_798$$].$router$) + ", value: " + $compressionType$$inline_998_reducedChanges$$inline_794$$[$change$$inline_796_i$$inline_798$$].value + "}");
          }
        }
        $allChanges$$1$$ = $compressionType$$inline_998_reducedChanges$$inline_794$$;
      } catch ($error$$41$$) {
        return Promise.reject($error$$41$$);
      }
      return $_canEnter$$($allChanges$$1$$).then($_updateAll$$);
    }
    var $_ojBaseUrl$$, $_basePathName$$, $_thisPage$$ = function getThisPage() {
      var $result$$51$$ = "", $url$$22$$ = window.location.pathname;
      -1 !== $url$$22$$.indexOf(".html", $url$$22$$.length - 5) && ($result$$51$$ = $url$$22$$.split("/").pop());
      return $result$$51$$;
    }(), $_urlAdapter$$, $LZString$$ = {$_f$:String.fromCharCode, $_keyStrUriSafe$:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", $_getBaseValue$:function($alphabet$$, $character$$) {
      var $i$$273$$;
      $LZString$$.$_baseReverseDic$ || ($LZString$$.$_baseReverseDic$ = {});
      if (!$LZString$$.$_baseReverseDic$[$alphabet$$]) {
        for ($LZString$$.$_baseReverseDic$[$alphabet$$] = {}, $i$$273$$ = 0;$i$$273$$ < $alphabet$$.length;$i$$273$$++) {
          $LZString$$.$_baseReverseDic$[$alphabet$$][$alphabet$$[$i$$273$$]] = $i$$273$$;
        }
      }
      return $LZString$$.$_baseReverseDic$[$alphabet$$][$character$$];
    }, $compressToEncodedURIComponent$:function($input$$6$$) {
      return null == $input$$6$$ ? "" : $LZString$$.$_compress$($input$$6$$, 6, function($a$$103$$) {
        return $LZString$$.$_keyStrUriSafe$.charAt($a$$103$$);
      });
    }, $decompressFromEncodedURIComponent$:function($input$$7$$) {
      return null == $input$$7$$ ? "" : "" == $input$$7$$ ? null : $LZString$$.$_decompress$($input$$7$$.length, 32, function($index$$141$$) {
        return $LZString$$.$_getBaseValue$($LZString$$.$_keyStrUriSafe$, $input$$7$$.charAt($index$$141$$));
      });
    }, $_compress$:function($uncompressed$$, $bitsPerChar$$, $getCharFromInt$$) {
      if (null == $uncompressed$$) {
        return "";
      }
      var $i$$274$$, $value$$208$$, $context_dictionary$$ = {}, $context_dictionaryToCreate$$ = {}, $context_c$$ = "", $context_wc$$ = "", $context_w$$ = "", $context_enlargeIn$$ = 2, $context_dictSize$$ = 3, $context_numBits$$ = 2, $context_data_string$$ = "", $context_data_val$$ = 0, $context_data_position$$ = 0, $ii$$;
      for ($ii$$ = 0;$ii$$ < $uncompressed$$.length;$ii$$ += 1) {
        if ($context_c$$ = $uncompressed$$[$ii$$], Object.prototype.hasOwnProperty.call($context_dictionary$$, $context_c$$) || ($context_dictionary$$[$context_c$$] = $context_dictSize$$++, $context_dictionaryToCreate$$[$context_c$$] = !0), $context_wc$$ = $context_w$$ + $context_c$$, Object.prototype.hasOwnProperty.call($context_dictionary$$, $context_wc$$)) {
          $context_w$$ = $context_wc$$;
        } else {
          if (Object.prototype.hasOwnProperty.call($context_dictionaryToCreate$$, $context_w$$)) {
            if (256 > $context_w$$.charCodeAt(0)) {
              for ($i$$274$$ = 0;$i$$274$$ < $context_numBits$$;$i$$274$$++) {
                $context_data_val$$ <<= 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++;
              }
              $value$$208$$ = $context_w$$.charCodeAt(0);
              for ($i$$274$$ = 0;8 > $i$$274$$;$i$$274$$++) {
                $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$ & 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ >>= 1;
              }
            } else {
              $value$$208$$ = 1;
              for ($i$$274$$ = 0;$i$$274$$ < $context_numBits$$;$i$$274$$++) {
                $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ = 0;
              }
              $value$$208$$ = $context_w$$.charCodeAt(0);
              for ($i$$274$$ = 0;16 > $i$$274$$;$i$$274$$++) {
                $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$ & 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ >>= 1;
              }
            }
            $context_enlargeIn$$--;
            0 == $context_enlargeIn$$ && ($context_enlargeIn$$ = Math.pow(2, $context_numBits$$), $context_numBits$$++);
            delete $context_dictionaryToCreate$$[$context_w$$];
          } else {
            for ($value$$208$$ = $context_dictionary$$[$context_w$$], $i$$274$$ = 0;$i$$274$$ < $context_numBits$$;$i$$274$$++) {
              $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$ & 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ >>= 1;
            }
          }
          $context_enlargeIn$$--;
          0 == $context_enlargeIn$$ && ($context_enlargeIn$$ = Math.pow(2, $context_numBits$$), $context_numBits$$++);
          $context_dictionary$$[$context_wc$$] = $context_dictSize$$++;
          $context_w$$ = String($context_c$$);
        }
      }
      if ("" !== $context_w$$) {
        if (Object.prototype.hasOwnProperty.call($context_dictionaryToCreate$$, $context_w$$)) {
          if (256 > $context_w$$.charCodeAt(0)) {
            for ($i$$274$$ = 0;$i$$274$$ < $context_numBits$$;$i$$274$$++) {
              $context_data_val$$ <<= 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++;
            }
            $value$$208$$ = $context_w$$.charCodeAt(0);
            for ($i$$274$$ = 0;8 > $i$$274$$;$i$$274$$++) {
              $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$ & 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ >>= 1;
            }
          } else {
            $value$$208$$ = 1;
            for ($i$$274$$ = 0;$i$$274$$ < $context_numBits$$;$i$$274$$++) {
              $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ = 0;
            }
            $value$$208$$ = $context_w$$.charCodeAt(0);
            for ($i$$274$$ = 0;16 > $i$$274$$;$i$$274$$++) {
              $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$ & 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ >>= 1;
            }
          }
          $context_enlargeIn$$--;
          0 == $context_enlargeIn$$ && ($context_enlargeIn$$ = Math.pow(2, $context_numBits$$), $context_numBits$$++);
          delete $context_dictionaryToCreate$$[$context_w$$];
        } else {
          for ($value$$208$$ = $context_dictionary$$[$context_w$$], $i$$274$$ = 0;$i$$274$$ < $context_numBits$$;$i$$274$$++) {
            $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$ & 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ >>= 1;
          }
        }
        $context_enlargeIn$$--;
        0 == $context_enlargeIn$$ && $context_numBits$$++;
      }
      $value$$208$$ = 2;
      for ($i$$274$$ = 0;$i$$274$$ < $context_numBits$$;$i$$274$$++) {
        $context_data_val$$ = $context_data_val$$ << 1 | $value$$208$$ & 1, $context_data_position$$ == $bitsPerChar$$ - 1 ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$208$$ >>= 1;
      }
      for (;;) {
        if ($context_data_val$$ <<= 1, $context_data_position$$ == $bitsPerChar$$ - 1) {
          $context_data_string$$ += $getCharFromInt$$($context_data_val$$);
          break;
        } else {
          $context_data_position$$++;
        }
      }
      return $context_data_string$$;
    }, $_decompress$:function($length$$14$$, $resetValue$$, $getNextValue$$) {
      for (var $dictionary$$ = [], $enlargeIn$$ = 4, $dictSize$$ = 4, $numBits$$ = 3, $bits_entry$$3$$ = "", $i$$275_result$$53$$ = "", $w$$5$$, $resb$$, $maxpower$$, $power$$, $c$$36$$, $f$$3$$ = $LZString$$.$_f$, $data$$133$$ = {val:$getNextValue$$(0), position:$resetValue$$, index:1}, $i$$275_result$$53$$ = 0;3 > $i$$275_result$$53$$;$i$$275_result$$53$$ += 1) {
        $dictionary$$[$i$$275_result$$53$$] = $i$$275_result$$53$$;
      }
      $bits_entry$$3$$ = 0;
      $maxpower$$ = Math.pow(2, 2);
      for ($power$$ = 1;$power$$ != $maxpower$$;) {
        $resb$$ = $data$$133$$.val & $data$$133$$.position, $data$$133$$.position >>= 1, 0 == $data$$133$$.position && ($data$$133$$.position = $resetValue$$, $data$$133$$.val = $getNextValue$$($data$$133$$.index++)), $bits_entry$$3$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
      }
      switch($bits_entry$$3$$) {
        case 0:
          $bits_entry$$3$$ = 0;
          $maxpower$$ = Math.pow(2, 8);
          for ($power$$ = 1;$power$$ != $maxpower$$;) {
            $resb$$ = $data$$133$$.val & $data$$133$$.position, $data$$133$$.position >>= 1, 0 == $data$$133$$.position && ($data$$133$$.position = $resetValue$$, $data$$133$$.val = $getNextValue$$($data$$133$$.index++)), $bits_entry$$3$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
          }
          $c$$36$$ = $f$$3$$($bits_entry$$3$$);
          break;
        case 1:
          $bits_entry$$3$$ = 0;
          $maxpower$$ = Math.pow(2, 16);
          for ($power$$ = 1;$power$$ != $maxpower$$;) {
            $resb$$ = $data$$133$$.val & $data$$133$$.position, $data$$133$$.position >>= 1, 0 == $data$$133$$.position && ($data$$133$$.position = $resetValue$$, $data$$133$$.val = $getNextValue$$($data$$133$$.index++)), $bits_entry$$3$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
          }
          $c$$36$$ = $f$$3$$($bits_entry$$3$$);
          break;
        case 2:
          return "";
      }
      for ($w$$5$$ = $i$$275_result$$53$$ = $dictionary$$[3] = $c$$36$$;;) {
        if ($data$$133$$.index > $length$$14$$) {
          return "";
        }
        $bits_entry$$3$$ = 0;
        $maxpower$$ = Math.pow(2, $numBits$$);
        for ($power$$ = 1;$power$$ != $maxpower$$;) {
          $resb$$ = $data$$133$$.val & $data$$133$$.position, $data$$133$$.position >>= 1, 0 == $data$$133$$.position && ($data$$133$$.position = $resetValue$$, $data$$133$$.val = $getNextValue$$($data$$133$$.index++)), $bits_entry$$3$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
        }
        switch($c$$36$$ = $bits_entry$$3$$) {
          case 0:
            $bits_entry$$3$$ = 0;
            $maxpower$$ = Math.pow(2, 8);
            for ($power$$ = 1;$power$$ != $maxpower$$;) {
              $resb$$ = $data$$133$$.val & $data$$133$$.position, $data$$133$$.position >>= 1, 0 == $data$$133$$.position && ($data$$133$$.position = $resetValue$$, $data$$133$$.val = $getNextValue$$($data$$133$$.index++)), $bits_entry$$3$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
            }
            $dictionary$$[$dictSize$$++] = $f$$3$$($bits_entry$$3$$);
            $c$$36$$ = $dictSize$$ - 1;
            $enlargeIn$$--;
            break;
          case 1:
            $bits_entry$$3$$ = 0;
            $maxpower$$ = Math.pow(2, 16);
            for ($power$$ = 1;$power$$ != $maxpower$$;) {
              $resb$$ = $data$$133$$.val & $data$$133$$.position, $data$$133$$.position >>= 1, 0 == $data$$133$$.position && ($data$$133$$.position = $resetValue$$, $data$$133$$.val = $getNextValue$$($data$$133$$.index++)), $bits_entry$$3$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
            }
            $dictionary$$[$dictSize$$++] = $f$$3$$($bits_entry$$3$$);
            $c$$36$$ = $dictSize$$ - 1;
            $enlargeIn$$--;
            break;
          case 2:
            return $i$$275_result$$53$$;
        }
        0 == $enlargeIn$$ && ($enlargeIn$$ = Math.pow(2, $numBits$$), $numBits$$++);
        if ($dictionary$$[$c$$36$$]) {
          $bits_entry$$3$$ = $dictionary$$[$c$$36$$];
        } else {
          if ($c$$36$$ === $dictSize$$) {
            $bits_entry$$3$$ = $w$$5$$ + $w$$5$$[0];
          } else {
            return null;
          }
        }
        $i$$275_result$$53$$ += $bits_entry$$3$$;
        $dictionary$$[$dictSize$$++] = $w$$5$$ + $bits_entry$$3$$[0];
        $enlargeIn$$--;
        $w$$5$$ = $bits_entry$$3$$;
        0 == $enlargeIn$$ && ($enlargeIn$$ = Math.pow(2, $numBits$$), $numBits$$++);
      }
    }};
    $oj$$17$$.$Router$ = function $$oj$$17$$$$Router$$($key$$87$$, $parentRouter$$) {
      var $router$$7$$ = this;
      this.$_parentState$ = $parentRouter$$ ? $parentRouter$$.$_stateId$() : void 0;
      this.$_childRouters$ = [];
      this.$_extra$ = void 0;
      this.$_stateId$ = $ko$$3$$.observable();
      this.$_states$ = null;
      this.$_defaultStateId$ = void 0;
      this.$_currentState$ = $ko$$3$$.pureComputed(function() {
        return $ko$$3$$.ignoreDependencies($router$$7$$.$stateFromIdCallback$, $router$$7$$, [$router$$7$$.$_stateId$()]);
      });
      this.$_currentValue$ = $ko$$3$$.pureComputed(function() {
        var $retValue$$2$$, $currentState$$1$$ = $ko$$3$$.ignoreDependencies($router$$7$$.$stateFromIdCallback$, $router$$7$$, [$router$$7$$.$_stateId$()]);
        $currentState$$1$$ && ($retValue$$2$$ = $currentState$$1$$.value);
        return $retValue$$2$$;
      });
      this.$_moduleConfig$ = Object.create(null, {name:{value:$ko$$3$$.pureComputed(function() {
        var $retValue$$3$$, $currentState$$2$$ = this.$stateFromIdCallback$(this.$_stateId$());
        $currentState$$2$$ && (($retValue$$3$$ = $currentState$$2$$.value) && "string" === typeof $retValue$$3$$ || ($retValue$$3$$ = $currentState$$2$$.id));
        return $retValue$$3$$;
      }, $router$$7$$)}, params:{value:$router$$7$$}, lifecycleListener:{value:Object.create(null, {attached:{value:function($params$$20$$) {
        var $state$$7$$ = $params$$20$$.valueAccessor().params.currentState();
        $state$$7$$ && ($state$$7$$.$viewModel$ = $params$$20$$.viewModel);
      }}})}});
      Object.defineProperties(this, {parent:{value:$parentRouter$$, enumerable:!0}, name:{value:$key$$87$$, enumerable:!0}});
    };
    $goog$exportPath_$$("Router", $oj$$17$$.$Router$, $oj$$17$$);
    Object.defineProperties($oj$$17$$.$Router$.prototype, {states:{get:function() {
      return this.$_states$;
    }, enumerable:!0}, stateId:{get:function() {
      return this.$_stateId$;
    }, enumerable:!0}, currentState:{get:function() {
      return this.$_currentState$;
    }, enumerable:!0}, currentValue:{get:function() {
      return this.$_currentValue$;
    }, enumerable:!0}, defaultStateId:{get:function() {
      return this.$_defaultStateId$;
    }, set:function($newValue$$10$$) {
      this.$_defaultStateId$ = $newValue$$10$$;
    }, enumerable:!0}, moduleConfig:{get:function() {
      return this.$_moduleConfig$;
    }, enumerable:!0}});
    $oj$$17$$.$Router$.prototype.$createChildRouter$ = function $$oj$$17$$$$Router$$$$createChildRouter$$($name$$103$$) {
      $oj$$17$$.$Assert$.$assertString$($name$$103$$);
      $name$$103$$ = $name$$103$$.replace($oj$$17$$.$StringUtils$.$_TRIM_ALL_RE$, "");
      for (var $childRouter_i$$279$$ = 0;$childRouter_i$$279$$ < this.$_childRouters$.length;$childRouter_i$$279$$++) {
        var $sr$$2$$ = this.$_childRouters$[$childRouter_i$$279$$].$router$;
        if ($sr$$2$$.name === $name$$103$$) {
          throw Error('Invalid router name "' + $name$$103$$ + '", it already exists.');
        }
        if ($sr$$2$$.$_parentState$ === this.$_stateId$()) {
          throw Error('Cannot create more than one child router for parent state id "' + $sr$$2$$.$_parentState$ + '".');
        }
      }
      $childRouter_i$$279$$ = new $oj$$17$$.$Router$($name$$103$$, this);
      this.$_childRouters$.push({name:$name$$103$$, $router$:$childRouter_i$$279$$});
      return $childRouter_i$$279$$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.createChildRouter", {$createChildRouter$:$oj$$17$$.$Router$.prototype.$createChildRouter$});
    $oj$$17$$.$Router$.prototype.$stateFromIdCallback$ = function $$oj$$17$$$$Router$$$$stateFromIdCallback$$($stateId$$1$$) {
      var $state$$inline_806$$;
      if ($stateId$$1$$ && this.$_states$) {
        $oj$$17$$.$Assert$.$assertString$($stateId$$1$$);
        for (var $i$$inline_807$$ = 0;$i$$inline_807$$ < this.$_states$.length;$i$$inline_807$$++) {
          var $stateAt$$inline_808$$ = this.$_states$[$i$$inline_807$$];
          if ($stateAt$$inline_808$$.id === $stateId$$1$$) {
            $state$$inline_806$$ = $stateAt$$inline_808$$;
            break;
          }
        }
      }
      return $state$$inline_806$$;
    };
    $oj$$17$$.$Router$.prototype.$_update$ = function $$oj$$17$$$$Router$$$$_update$$($callback$$inline_818_newValue$$11_state$$inline_817$$) {
      var $callback$$inline_813_hasChanged$$2_state$$inline_812$$ = !1;
      $callback$$inline_818_newValue$$11_state$$inline_817$$ && !this.$stateFromIdCallback$($callback$$inline_818_newValue$$11_state$$inline_817$$) ? $oj$$17$$.$Logger$.error('State id: "' + $callback$$inline_818_newValue$$11_state$$inline_817$$ + '" is not a valid state for ' + $getRouterFullName$$(this)) : ($oj$$17$$.$Logger$.info("Updating state of " + $getRouterFullName$$(this) + " to " + $callback$$inline_818_newValue$$11_state$$inline_817$$), ($callback$$inline_813_hasChanged$$2_state$$inline_812$$ = 
      this.$stateFromIdCallback$(this.$_stateId$())) && ($callback$$inline_813_hasChanged$$2_state$$inline_812$$ = $callback$$inline_813_hasChanged$$2_state$$inline_812$$.exit) && $callback$$inline_813_hasChanged$$2_state$$inline_812$$.call(this), this.$_stateId$($callback$$inline_818_newValue$$11_state$$inline_817$$), $callback$$inline_813_hasChanged$$2_state$$inline_812$$ = !0, $callback$$inline_818_newValue$$11_state$$inline_817$$ && ($callback$$inline_818_newValue$$11_state$$inline_817$$ = this.$stateFromIdCallback$($callback$$inline_818_newValue$$11_state$$inline_817$$)) && 
      ($callback$$inline_818_newValue$$11_state$$inline_817$$ = $callback$$inline_818_newValue$$11_state$$inline_817$$.enter) && $callback$$inline_818_newValue$$11_state$$inline_817$$.call(this));
      return $callback$$inline_813_hasChanged$$2_state$$inline_812$$;
    };
    $oj$$17$$.$Router$.prototype.$configure$ = function $$oj$$17$$$$Router$$$$configure$$($option$$25$$) {
      this.$_stateId$(void 0);
      delete this.$_defaultStateId$;
      "function" === typeof $option$$25$$ ? (this.$_states$ = null, this.$stateFromIdCallback$ = $option$$25$$) : (this.$_states$ = [], delete this.$stateFromIdCallback$, Object.keys($option$$25$$).forEach(function($key$$88$$) {
        var $rsOptions$$ = $option$$25$$[$key$$88$$];
        this.$_states$.push(new $oj$$17$$.$RouterState$($key$$88$$, $rsOptions$$, this));
        "boolean" === typeof $rsOptions$$.isDefault && $rsOptions$$.isDefault && (this.$_defaultStateId$ = $key$$88$$);
      }, this));
      return this;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.configure", {$configure$:$oj$$17$$.$Router$.prototype.$configure$});
    $oj$$17$$.$Router$.prototype.$getState$ = function $$oj$$17$$$$Router$$$$getState$$($stateId$$2$$) {
      return this.$stateFromIdCallback$($stateId$$2$$);
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.getState", {$getState$:$oj$$17$$.$Router$.prototype.$getState$});
    $oj$$17$$.$Router$.prototype.go = function $$oj$$17$$$$Router$$$go$($allStates_shortUrl$$1_stateId$$3$$) {
      function $_changeState$$($canExit$$3$$) {
        if ($canExit$$3$$) {
          return $parseAndUpdate$$($newUrl$$.replace(/^\//, "")).then(function($params$$21$$) {
            if ($params$$21$$.hasChanged) {
              var $fullUrl$$ = $_ojBaseUrl$$ + $newUrl$$;
              $oj$$17$$.$Logger$.info("Changing URL to " + $fullUrl$$);
              history.pushState(null, "", $fullUrl$$);
            }
            $dispatchTransitionedToState$$($params$$21$$.hasChanged);
            return $params$$21$$;
          });
        }
        $dispatchTransitionedToState$$(!1);
        return Promise.resolve({hasChanged:!1});
      }
      var $state$$8$$, $useDefault$$ = !0;
      if ($allStates_shortUrl$$1_stateId$$3$$) {
        if ("string" === typeof $allStates_shortUrl$$1_stateId$$3$$) {
          if (0 < $allStates_shortUrl$$1_stateId$$3$$.length) {
            $state$$8$$ = this.$stateFromIdCallback$($allStates_shortUrl$$1_stateId$$3$$);
            if (!$state$$8$$) {
              return $dispatchTransitionedToState$$(!1), Promise.reject(Error('State id "' + $allStates_shortUrl$$1_stateId$$3$$ + '" does not exist.'));
            }
            $useDefault$$ = !1;
            $oj$$17$$.$Logger$.info("Going to state " + $allStates_shortUrl$$1_stateId$$3$$ + " on router " + $getRouterFullName$$(this));
          }
        } else {
          return $dispatchTransitionedToState$$(!1), Promise.reject(Error("Invalid object type for state id."));
        }
      }
      if ($useDefault$$) {
        if (this.$_defaultStateId$) {
          $state$$8$$ = this.$stateFromIdCallback$(this.$_defaultStateId$), $oj$$17$$.$Logger$.info("Going to default state " + $state$$8$$.id + " on router " + $getRouterFullName$$(this));
        } else {
          return $oj$$17$$.$Logger$.info("Undefined state id with no default id on router " + $getRouterFullName$$(this)), $dispatchTransitionedToState$$(!1), Promise.resolve({hasChanged:!1});
        }
      }
      $allStates_shortUrl$$1_stateId$$3$$ = $_buildState$$(this, 0, $state$$8$$);
      var $newUrl$$ = $_urlAdapter$$.$buildUrlFromStates$($allStates_shortUrl$$1_stateId$$3$$);
      $allStates_shortUrl$$1_stateId$$3$$ = "/" + $_urlAdapter$$.$cleanUrl$($getShortUrl$$()).replace($_thisPage$$, "");
      if ($_urlAdapter$$.$cleanUrl$($newUrl$$) !== $allStates_shortUrl$$1_stateId$$3$$) {
        return $oj$$17$$.$Logger$.info("New URL is different."), $_canExit$$(this).then($_changeState$$);
      }
      $dispatchTransitionedToState$$(!1);
      return Promise.resolve({hasChanged:!1});
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.go", {go:$oj$$17$$.$Router$.prototype.go});
    $oj$$17$$.$Router$.prototype.$store$ = function $$oj$$17$$$$Router$$$$store$$($data$$134_extraState$$2$$) {
      this.$_extra$ = $data$$134_extraState$$2$$;
      $data$$134_extraState$$2$$ = {};
      for (var $router$$8$$ = this;$router$$8$$;) {
        $router$$8$$.$_extra$ && ($data$$134_extraState$$2$$[$router$$8$$.name] = $router$$8$$.$_extra$), $router$$8$$ = $router$$8$$.parent;
      }
      for (var $router$$8$$ = this, $nextLevel_url$$27$$;$router$$8$$;) {
        for (var $i$$280$$ = 0;$i$$280$$ < $router$$8$$.$_childRouters$.length;$i$$280$$++) {
          var $sr$$3$$ = $router$$8$$.$_childRouters$[$i$$280$$].$router$;
          if ($router$$8$$.$_stateId$() && $router$$8$$.$_stateId$() === $sr$$3$$.$_parentState$) {
            $sr$$3$$.$_extra$ && ($data$$134_extraState$$2$$[$sr$$3$$.name] = $sr$$3$$.$_extra$);
            $nextLevel_url$$27$$ = $sr$$3$$;
            break;
          }
        }
        $router$$8$$ = $nextLevel_url$$27$$;
        $nextLevel_url$$27$$ = void 0;
      }
      $nextLevel_url$$27$$ = $_ojBaseUrl$$ + "/" + $_urlAdapter$$.$cleanUrl$($getShortUrl$$());
      $nextLevel_url$$27$$ = $addStateParam$$($nextLevel_url$$27$$, $data$$134_extraState$$2$$);
      history.replaceState(null, "", $nextLevel_url$$27$$);
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.store", {$store$:$oj$$17$$.$Router$.prototype.$store$});
    $oj$$17$$.$Router$.prototype.$retrieve$ = function $$oj$$17$$$$Router$$$$retrieve$$() {
      return this.$_extra$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.retrieve", {$retrieve$:$oj$$17$$.$Router$.prototype.$retrieve$});
    $oj$$17$$.$Router$.prototype.$dispose$ = function $$oj$$17$$$$Router$$$$dispose$$() {
      for (;0 < this.$_childRouters$.length;) {
        this.$_childRouters$[0].$router$.$dispose$();
      }
      if (this.parent) {
        for (var $parentChildren$$ = this.parent.$_childRouters$, $i$$281$$ = 0;$i$$281$$ < $parentChildren$$.length;$i$$281$$++) {
          if ($parentChildren$$[$i$$281$$].$router$.name === this.name) {
            $parentChildren$$.splice($i$$281$$, 1);
            break;
          }
        }
        delete this.$_parentState$;
      } else {
        $_basePathName$$ = $_ojBaseUrl$$ = "", $_urlAdapter$$ = {}, window.removeEventListener("popstate", $handlePopState$$), $oj$$17$$.$Router$.transitionedToState.removeAll(), $oj$$17$$.$Router$.$initialized$ = !1;
      }
      this.$_states$ = null;
      delete this.$_defaultStateId$;
      delete this.$_extra$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.dispose", {$dispose$:$oj$$17$$.$Router$.prototype.$dispose$});
    var $rootRouter$$ = new $oj$$17$$.$Router$("root", void 0);
    Object.defineProperties($oj$$17$$.$Router$, {rootInstance:{value:$rootRouter$$, enumerable:!0}, transitionedToState:{value:new $signals$$1$$.Signal, enumerable:!0}});
    $oj$$17$$.$Router$.$defaults$ = {};
    $goog$exportPath_$$("Router.defaults", $oj$$17$$.$Router$.$defaults$, $oj$$17$$);
    Object.defineProperties($oj$$17$$.$Router$.$defaults$, {urlAdapter:{get:function() {
      $_urlAdapter$$ || ($_urlAdapter$$ = new $oj$$17$$.$Router$.$urlPathAdapter$);
      return $_urlAdapter$$;
    }, set:function($urlAdapter$$) {
      if ($oj$$17$$.$Router$.$initialized$) {
        throw Error("Incorrect operation. Cannot change URL adapter after calling sync().");
      }
      $_urlAdapter$$ = $urlAdapter$$;
    }, enumerable:!0, $readonly$:!1}, baseUrl:{get:function() {
      $_ojBaseUrl$$ || ($_ojBaseUrl$$ = $removeLastSegment$$(window.location.href.split("#")[0]), $_basePathName$$ = $removeLastSegment$$(window.location.pathname));
      return $_ojBaseUrl$$;
    }, set:function($baseUrl$$1$$) {
      if ($oj$$17$$.$Router$.$initialized$) {
        throw Error("Incorrect operation. Cannot change base URL after calling sync().");
      }
      $_ojBaseUrl$$ = $baseUrl$$1$$.replace(/\/$/, "");
      $_basePathName$$ = $_ojBaseUrl$$.replace(window.location.protocol + "//" + window.location.host, "");
    }, enumerable:!0, $readonly$:!1}});
    $oj$$17$$.$Router$.$sync$ = function $$oj$$17$$$$Router$$$sync$$() {
      $oj$$17$$.$Router$.$initialized$ || ($_urlAdapter$$ || ($_urlAdapter$$ = new $oj$$17$$.$Router$.$urlPathAdapter$), $_ojBaseUrl$$ || ($_ojBaseUrl$$ = $removeLastSegment$$(window.location.href.split("#")[0]), $_basePathName$$ = $removeLastSegment$$(window.location.pathname)), window.addEventListener("popstate", $handlePopState$$, !1), $oj$$17$$.$Logger$.info("Initializing rootInstance."), $oj$$17$$.$Logger$.info("Base URL is " + $_ojBaseUrl$$), $oj$$17$$.$Logger$.info("This page is " + $_thisPage$$), 
      $oj$$17$$.$Logger$.info("Current URL is " + window.location.href), $oj$$17$$.$Router$.$initialized$ = !0);
      return $parseAndUpdate$$($getShortUrl$$()).then(function($params$$22$$) {
        $dispatchTransitionedToState$$($params$$22$$.hasChanged);
        return $params$$22$$;
      });
    };
    $goog$exportPath_$$("Router.sync", $oj$$17$$.$Router$.$sync$, $oj$$17$$);
    $oj$$17$$.$Router$.$urlPathAdapter$ = function $$oj$$17$$$$Router$$$urlPathAdapter$$() {
      this.parse = function $this$parse$($segments_url$$28$$) {
        var $index$$142$$ = 0, $router$$9$$ = $rootRouter$$;
        $segments_url$$28$$ = $segments_url$$28$$.split("/");
        var $changes$$5$$ = [];
        do {
          var $value$$209$$ = $segments_url$$28$$[$index$$142$$++];
          $value$$209$$ && (0 === $value$$209$$.length || /\.html$/i.test($value$$209$$)) && ($value$$209$$ = void 0);
          $value$$209$$ = $value$$209$$ || $router$$9$$.$_defaultStateId$;
          $changes$$5$$.push({value:$value$$209$$, $router$:$router$$9$$});
          $router$$9$$ = $getChildRouter$$($router$$9$$, $value$$209$$);
        } while ($router$$9$$);
        return $changes$$5$$;
      };
      this.$buildUrlFromStates$ = function $this$$buildUrlFromStates$$($newStates$$1$$) {
        var $newUrl$$1$$ = "", $extraState$$3$$ = {};
        $newStates$$1$$.forEach(function($ns$$) {
          $ns$$.$stateId$ && ($newUrl$$1$$ += "/" + $ns$$.$stateId$);
          $ns$$.$router$.$extra$ && ($extraState$$3$$[$ns$$.$router$.name] = $ns$$.$router$.$_extra$);
        });
        "" === $newUrl$$1$$ && ($newUrl$$1$$ = "/" + $_thisPage$$);
        try {
          $newUrl$$1$$ = $addStateParam$$($newUrl$$1$$, $extraState$$3$$);
        } catch ($err$$15$$) {
          $oj$$17$$.$Logger$.error("Error while building URL: " + $err$$15$$);
        }
        return $newUrl$$1$$;
      };
      this.$cleanUrl$ = function $this$$cleanUrl$$($url$$29$$) {
        return $url$$29$$.split("?")[0];
      };
      this.$getQueryParam$ = function $this$$getQueryParam$$($url$$30$$) {
        var $queryIndex$$ = $url$$30$$.indexOf("?"), $queryString$$3$$ = null;
        -1 != $queryIndex$$ && ($queryString$$3$$ = $url$$30$$.substr($queryIndex$$ + 1));
        return $parseQueryParam$$($queryString$$3$$);
      };
    };
    $goog$exportPath_$$("Router.urlPathAdapter", $oj$$17$$.$Router$.$urlPathAdapter$, $oj$$17$$);
    $oj$$17$$.$Router$.$urlParamAdapter$ = function $$oj$$17$$$$Router$$$urlParamAdapter$$() {
      this.parse = function $this$parse$($params$$23_url$$31$$) {
        $params$$23_url$$31$$ = this.$getQueryParam$($params$$23_url$$31$$);
        var $router$$10$$ = $rootRouter$$, $changes$$6$$ = [];
        do {
          var $value$$210$$ = $params$$23_url$$31$$[$router$$10$$.name];
          $value$$210$$ && ($value$$210$$ = $value$$210$$[0], delete $params$$23_url$$31$$[$router$$10$$.name]);
          $value$$210$$ = $value$$210$$ || $router$$10$$.$_defaultStateId$;
          $changes$$6$$.push({value:$value$$210$$, $router$:$router$$10$$});
          $router$$10$$ = $getChildRouter$$($router$$10$$, $value$$210$$);
        } while ($router$$10$$);
        return $changes$$6$$;
      };
      this.$buildUrlFromStates$ = function $this$$buildUrlFromStates$$($newStates$$2$$) {
        var $newUrl$$2$$ = "/" + $_thisPage$$, $extraState$$4$$ = {}, $sep$$3$$ = "?";
        $newStates$$2$$.forEach(function($ns$$1$$) {
          $ns$$1$$.$stateId$ && ($newUrl$$2$$ += $sep$$3$$ + $ns$$1$$.$router$.name + "\x3d" + $ns$$1$$.$stateId$, $sep$$3$$ = "\x26");
          $ns$$1$$.$router$.$_extra$ && ($extraState$$4$$[$ns$$1$$.$router$.name] = $ns$$1$$.$router$.$_extra$);
        });
        try {
          $newUrl$$2$$ = $addStateParam$$($newUrl$$2$$, $extraState$$4$$);
        } catch ($err$$16$$) {
          $oj$$17$$.$Logger$.error("Error while building URL: " + $err$$16$$);
        }
        return $newUrl$$2$$;
      };
      this.$cleanUrl$ = function $this$$cleanUrl$$($url$$32$$) {
        var $index$$143$$ = $url$$32$$.indexOf("oj_Router\x3d");
        return-1 != $index$$143$$ ? $url$$32$$.substr(0, $index$$143$$ - 1) : $url$$32$$;
      };
      this.$getQueryParam$ = function $this$$getQueryParam$$($url$$33$$) {
        var $queryIndex$$1$$ = $url$$33$$.indexOf("?"), $params$$24_queryString$$4$$ = null, $params$$24_queryString$$4$$ = {};
        -1 != $queryIndex$$1$$ && ($params$$24_queryString$$4$$ = $url$$33$$.substr($queryIndex$$1$$ + 1), $params$$24_queryString$$4$$ = $parseQueryParam$$($params$$24_queryString$$4$$));
        return $params$$24_queryString$$4$$;
      };
    };
    $goog$exportPath_$$("Router.urlParamAdapter", $oj$$17$$.$Router$.$urlParamAdapter$, $oj$$17$$);
    return $rootRouter$$;
  })();
  (function() {
    $oj$$17$$.$RouterState$ = function $$oj$$17$$$$RouterState$$($id$$32$$, $options$$296$$, $router$$11$$) {
      $options$$296$$ = $options$$296$$ || {};
      $oj$$17$$.$Assert$.$assertString$($id$$32$$);
      $id$$32$$ = encodeURIComponent($id$$32$$.replace($oj$$17$$.$StringUtils$.$_TRIM_ALL_RE$, ""));
      $options$$296$$.canEnter && $oj$$17$$.$Assert$.$assertFunctionOrNull$($options$$296$$.canEnter);
      $options$$296$$.enter && $oj$$17$$.$Assert$.$assertFunctionOrNull$($options$$296$$.enter);
      $options$$296$$.canExit && $oj$$17$$.$Assert$.$assertFunctionOrNull$($options$$296$$.canExit);
      $options$$296$$.exit && $oj$$17$$.$Assert$.$assertFunctionOrNull$($options$$296$$.exit);
      this.$_router$ = $router$$11$$;
      this.$viewModel$ = void 0;
      Object.defineProperties(this, {id:{value:$id$$32$$, enumerable:!0}, value:{value:$options$$296$$.value, writable:!0, enumerable:!0}, label:{value:$options$$296$$.label, writable:!0, enumerable:!0}, canEnter:{value:$options$$296$$.canEnter, writable:!0, enumerable:!0}, enter:{value:$options$$296$$.enter, writable:!0, enumerable:!0}, canExit:{value:$options$$296$$.canExit, writable:!0, enumerable:!0}, exit:{value:$options$$296$$.exit, writable:!0, enumerable:!0}});
    };
    $goog$exportPath_$$("RouterState", $oj$$17$$.$RouterState$, $oj$$17$$);
    $oj$$17$$.$RouterState$.prototype.go = function $$oj$$17$$$$RouterState$$$go$() {
      return this.$_router$ ? this.$_router$.go(this.id) : ($oj$$17$$.$Router$.transitionedToState.dispatch({hasChanged:!1}), Promise.reject(Error("Router is not defined for this RouterState object.")));
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("RouterState.prototype.go", {go:$oj$$17$$.$RouterState$.prototype.go});
    $oj$$17$$.$RouterState$.prototype.$isCurrent$ = function $$oj$$17$$$$RouterState$$$$isCurrent$$() {
      if (!this.$_router$) {
        throw Error("Router is not defined for this RouterState object.");
      }
      return this.$_router$.$_stateId$() === this.id;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("RouterState.prototype.isCurrent", {$isCurrent$:$oj$$17$$.$RouterState$.prototype.$isCurrent$});
  })();
});
