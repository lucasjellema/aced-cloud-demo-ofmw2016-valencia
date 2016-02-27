define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  var D={};D.$JSCompiler_alias_VOID$$ = void 0;
D.$JSCompiler_alias_TRUE$$ = !0;
D.$JSCompiler_alias_NULL$$ = null;
D.$JSCompiler_alias_FALSE$$ = !1;
D.$JSCompiler_identityFn$$ = function() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
};
D.$JSCompiler_emptyFn$$ = function() {
  return function() {
  }
};
D.$JSCompiler_set$$ = function($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
};
D.$JSCompiler_get$$ = function($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
};
D.$JSCompiler_returnArg$$ = function($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
};
D.$goog$exportPath_$$ = function $$goog$exportPath_$$$($name$$56$$, $opt_object$$) {
  var $parts$$ = $name$$56$$.split("."), $cur$$ = eval("D");
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $opt_object$$ !== D.$JSCompiler_alias_VOID$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
};
window.Math.floor(2147483648 * window.Math.random()).toString(36);
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$DvtDataGridUtils$$ = function $$DvtDataGridUtils$$$($dataGrid_userAgent$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$;
  $dataGrid_userAgent$$ = window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : D.$JSCompiler_alias_NULL$$;
  this.$os$ = (0,D.$JSCompiler_StaticMethods__determineOS$$)($dataGrid_userAgent$$);
  this.platform = (0,D.$JSCompiler_StaticMethods__determinePlatform$$)($dataGrid_userAgent$$)
};
D.$JSCompiler_StaticMethods_getScrollbarSize$$ = function $$JSCompiler_StaticMethods_getScrollbarSize$$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if(-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_1141$$ = window.document.createElement("div");
    $scrollDiv$$inline_1141$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_1141$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_1141$$.offsetWidth - $scrollDiv$$inline_1141$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_1141$$)
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$
};
D.$JSCompiler_StaticMethods_isTouchDevice$$ = function $$JSCompiler_StaticMethods_isTouchDevice$$$($JSCompiler_StaticMethods_isTouchDevice$self$$) {
  if($JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ == D.$JSCompiler_alias_VOID$$) {
    var $agentName$$ = window.navigator.userAgent.toLowerCase();
    $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$
};
D.$JSCompiler_StaticMethods_addCSSClassName$$ = function $$JSCompiler_StaticMethods_addCSSClassName$$$($domElement$$, $className$$16$$) {
  var $currentClassName$$, $classNameIndex$$;
  $className$$16$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$ != D.$JSCompiler_alias_NULL$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($currentClassName$$, $className$$16$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$16$$ + " " + $currentClassName$$ : $className$$16$$))
};
D.$JSCompiler_StaticMethods_removeCSSClassName$$ = function $$JSCompiler_StaticMethods_removeCSSClassName$$$($domElement$$1$$, $className$$17$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  $className$$17$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$1$$ != D.$JSCompiler_alias_NULL$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($afterstring_currentClassName$$1$$, $className$$17$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$17$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? 
  D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring(0, $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = $beforestring_classNameIndex$$1$$ == D.$JSCompiler_alias_NULL$$ ? $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? "" : $afterstring_currentClassName$$1$$ : 
  $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$))
};
D.$JSCompiler_StaticMethods_containsCSSClassName$$ = function $$JSCompiler_StaticMethods_containsCSSClassName$$$($domElement$$2$$, $className$$18$$) {
  return $className$$18$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$2$$ != D.$JSCompiler_alias_NULL$$ ? -1 != (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($domElement$$2$$.className, $className$$18$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGridUtils$_getCSSClassNameIndex$$ = function $$DvtDataGridUtils$_getCSSClassNameIndex$$$($currentClassName$$2$$, $className$$19$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$11_hasEnd$$, $lastNameIndex$$;
  if(!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
    return-1
  }
  if($className$$19$$ === $currentClassName$$2$$) {
    return 0
  }
  $classNameLength$$ = $className$$19$$.length;
  $currentClassNameLength$$ = $currentClassName$$2$$.length;
  $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$19$$);
  if(0 <= $nameIndex$$) {
    $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
    $endIndex$$11_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex$$11_hasEnd$$ = $endIndex$$11_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$11_hasEnd$$);
    if($hasStart$$ && $endIndex$$11_hasEnd$$) {
      return $nameIndex$$
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$19$$);
    if($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$11_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$11_hasEnd$$ = $endIndex$$11_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$11_hasEnd$$), $hasStart$$ && $endIndex$$11_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$19$$ + " ")
    }
  }
  return-1
};
D.$JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$83$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$83$$.metaKey : $event$$83$$.ctrlKey
};
D.$JSCompiler_StaticMethods_setElementScrollLeft$$ = function $$JSCompiler_StaticMethods_setElementScrollLeft$$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$26$$, $element$$24$$, $scrollLeft$$9$$) {
  var $elemWidth$$1$$;
  $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$26$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$26$$.platform ? $element$$24$$.scrollLeft = -$scrollLeft$$9$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$26$$.platform ? $element$$24$$.scrollLeft = $scrollLeft$$9$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$26$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$26$$.$dataGrid$.$m_scroller$.firstChild), 
  $elemWidth$$1$$ = (0,window.parseInt)($element$$24$$.style.width, 10), $element$$24$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$26$$ - $elemWidth$$1$$ - $scrollLeft$$9$$) : $element$$24$$.scrollLeft = $scrollLeft$$9$$
};
D.$JSCompiler_StaticMethods__determineOS$$ = function $$JSCompiler_StaticMethods__determineOS$$$($userAgent$$1$$) {
  if($userAgent$$1$$) {
    if(-1 != $userAgent$$1$$.indexOf("win")) {
      return"Windows"
    }
    if(-1 != $userAgent$$1$$.indexOf("mac")) {
      return"Mac"
    }
    if(-1 != $userAgent$$1$$.indexOf("sunos")) {
      return"Solaris"
    }
  }
  return"Unknown"
};
D.$JSCompiler_StaticMethods__determinePlatform$$ = function $$JSCompiler_StaticMethods__determinePlatform$$$($userAgent$$2$$) {
  if($userAgent$$2$$ && -1 == $userAgent$$2$$.indexOf("opera")) {
    if(-1 != $userAgent$$2$$.indexOf("trident") || -1 != $userAgent$$2$$.indexOf("msie")) {
      return"ie"
    }
    if(-1 != $userAgent$$2$$.indexOf("applewebkit") || -1 != $userAgent$$2$$.indexOf("safari")) {
      return"webkit"
    }
    if(-1 != $userAgent$$2$$.indexOf("gecko/")) {
      return"gecko"
    }
  }
  return"unknown"
};
D.$DvtDataGridUtils$$.prototype.empty = function $$DvtDataGridUtils$$$$empty$($elem$$30$$) {
  for(;$elem$$30$$.firstChild;) {
    this.$dataGrid$.$_remove$($elem$$30$$.firstChild)
  }
};
D.$JSCompiler_StaticMethods_supportsTransitions$$ = function $$JSCompiler_StaticMethods_supportsTransitions$$$() {
  var $s$$3$$ = (window.document.body || window.document.documentElement).style, $p$$ = "transition";
  if(/MSIE \d/.test(window.navigator.userAgent) && (window.document.documentMode == D.$JSCompiler_alias_NULL$$ || 11 > window.document.documentMode)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  if("string" == typeof $s$$3$$[$p$$]) {
    return D.$JSCompiler_alias_TRUE$$
  }
  for(var $v$$3$$ = "Moz webkit Webkit Khtml O ms".split(" "), $p$$ = $p$$.charAt(0).toUpperCase() + $p$$.substr(1), $i$$53$$ = 0;$i$$53$$ < $v$$3$$.length;$i$$53$$++) {
    if("string" == typeof $s$$3$$[$v$$3$$[$i$$53$$] + $p$$]) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGridOptions$$ = (0,D.$JSCompiler_set$$)("options");
D.$JSCompiler_StaticMethods_extract$$ = function $$JSCompiler_StaticMethods_extract$$$($JSCompiler_StaticMethods_extract$self_val1$$, $arg1$$, $arg2_val2$$, $arg3_val3$$, $arg4$$) {
  return $arg1$$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$ = $JSCompiler_StaticMethods_extract$self_val1$$.options[$arg1$$], $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_extract$self_val1$$ != D.$JSCompiler_alias_NULL$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$[$arg2_val2$$], $arg3_val3$$ != D.$JSCompiler_alias_NULL$$ && $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ ? ($arg3_val3$$ = $arg2_val2$$[$arg3_val3$$], $arg4$$ != 
  D.$JSCompiler_alias_NULL$$ && $arg3_val3$$ != D.$JSCompiler_alias_NULL$$ ? $arg3_val3$$[$arg4$$] : $arg3_val3$$) : $arg2_val2$$) : $JSCompiler_StaticMethods_extract$self_val1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$49$$, $obj$$31$$) {
  return"function" == typeof $value$$49$$ ? $value$$49$$.call(this, $obj$$31$$) : $value$$49$$
};
D.$JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$7$$, $axis$$27$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$27$$ || "column" == $axis$$27$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$27$$, $arg3$$1$$ = $prop$$7$$) : "cell" == $axis$$27$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$7$$);
  return(0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
};
D.$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$8$$, $axis$$28$$, $obj$$32$$) {
  return $obj$$32$$ === D.$JSCompiler_alias_VOID$$ ? (0,D.$JSCompiler_StaticMethods_extract$$)(this, $prop$$8$$, $axis$$28$$) : this.evaluate((0,D.$JSCompiler_StaticMethods_getRawProperty$$)(this, $prop$$8$$, $axis$$28$$), $obj$$32$$)
};
D.$JSCompiler_StaticMethods_getRowBandingInterval$$ = function $$JSCompiler_StaticMethods_getRowBandingInterval$$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$.$getProperty$("bandingInterval", "row");
  return $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0
};
D.$JSCompiler_StaticMethods_getColumnBandingInterval$$ = function $$JSCompiler_StaticMethods_getColumnBandingInterval$$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$.$getProperty$("bandingInterval", "column");
  return $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0
};
D.$DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
  return this.$getProperty$("emptyText")
};
D.$JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$, "gridlines", "horizontal");
  return $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$, "gridlines", "vertical");
  return $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$39$$) {
  var $mode$$8_val$$13$$;
  $mode$$8_val$$13$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$39$$.$getProperty$("selectionMode");
  if($mode$$8_val$$13$$ == D.$JSCompiler_alias_VOID$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$39$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$39$$.$getSelectionMode$();
  $mode$$8_val$$13$$ = $mode$$8_val$$13$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$39$$];
  return $mode$$8_val$$13$$ != D.$JSCompiler_alias_NULL$$ ? $mode$$8_val$$13$$ : "none"
};
D.$DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
  var $cardinality_mode$$9$$;
  $cardinality_mode$$9$$ = this.$getProperty$("selectionMode");
  if($cardinality_mode$$9$$ == D.$JSCompiler_alias_VOID$$) {
    return"cell"
  }
  $cardinality_mode$$9$$ = $cardinality_mode$$9$$.row;
  return $cardinality_mode$$9$$ != D.$JSCompiler_alias_NULL$$ && "none" != $cardinality_mode$$9$$ ? "row" : "cell"
};
D.$DvtDataGridOptions$$.prototype.getSelection = function $$DvtDataGridOptions$$$$getSelection$() {
  return this.$getProperty$("selection")
};
D.$JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self$$, $axis$$30_v$$, $dir$$13$$, $obj$$34$$) {
  $axis$$30_v$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_isResizable$self$$, "header", $axis$$30_v$$, "resizable", $dir$$13$$);
  return $obj$$34$$ != D.$JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods_isResizable$self$$.evaluate($axis$$30_v$$, $obj$$34$$) : $axis$$30_v$$
};
D.$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$32$$, $obj$$35$$) {
  return this.$getProperty$("style", $axis$$32$$, $obj$$35$$)
};
D.$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$33$$, $obj$$36$$) {
  return this.$getProperty$("className", $axis$$33$$, $obj$$36$$)
};
D.$JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$34$$) {
  return(0,D.$JSCompiler_StaticMethods_getRawProperty$$)($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$34$$)
};
D.$JSCompiler_StaticMethods_getScrollPolicy$$ = function $$JSCompiler_StaticMethods_getScrollPolicy$$$($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$) {
  $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$.$getProperty$("scrollPolicy");
  $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = "auto");
  return $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$
};
D.$DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$40$$, $headerKey$$, $size$$11$$) {
  this.$sizes$[$axis$$40$$][$headerKey$$] = $size$$11$$
};
D.$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$41$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$41$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$41$$][$headerKey$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGrid$$ = function $$DvtDataGrid$$$() {
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_utils$ = new D.$DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_sizingManager$ = new D.$DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  this.$callbacks$ = {}
};
(0,D.$goog$exportPath_$$)("DvtDataGrid", D.$DvtDataGrid$$);
D.$DvtDataGrid$$.VISIBILITY_STATE_HIDDEN = "hidden";
D.$DvtDataGrid$$.VISIBILITY_STATE_REFRESH = "refresh";
D.$DvtDataGrid$$.VISIBILITY_STATE_RENDER = "render";
D.$DvtDataGrid$$.VISIBILITY_STATE_VISIBLE = "visible";
D.$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$3$$) {
  this.$m_options$ = new D.$DvtDataGridOptions$$($options$$3$$)
};
D.$DvtDataGrid$$.prototype.SetOptions = D.$DvtDataGrid$$.prototype.$SetOptions$;
D.$DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) {
  for(var $candidate$$ in $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) {
    $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$[$candidate$$])
  }
  for($candidate$$ in $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) {
    a: {
      $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = D.$JSCompiler_alias_VOID$$;
      switch($candidate$$) {
        case "bandingInterval":
          var $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ = D.$JSCompiler_alias_VOID$$, $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ = 
          D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = this.$m_databody$.firstChild.childNodes;
          $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ = this.getMappedStyle("banded");
          for($i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ = 1;$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ < $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$.length;$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$++) {
            (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$[$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$], $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$[$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$], 
            $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$);
            $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$[$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$].childNodes;
            for($headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = 0;$headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ < $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$.length;$headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$[$headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$], $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$[$headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$], 
              $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$)
            }
          }
          var $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ = $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ = $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ = $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = 
          D.$JSCompiler_alias_VOID$$, $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$ = D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
          if(0 < $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) {
            $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = this.$m_databody$.firstChild.childNodes;
            $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ = this.getMappedStyle("banded");
            for($i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ = 1;$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ < $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$.length;$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ += 1) {
              $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$ = $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$[$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$].childNodes;
              for($j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ = 0;$j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ < $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$.length;$j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ += 1) {
                $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = this.$m_startCol$ + $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$, 1 === window.Math.floor($headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ / $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$[$j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$], 
                $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$[$j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$], $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$[$j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$], 
                $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$[$j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$], $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$)
              }
            }
          }
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
          break;
        case "gridlines":
          var $dir$$inline_9445_value$$inline_11753$$ = $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$ = $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ = $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ = $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ = $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = 
          $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$), $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$), 
          $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$ = this.$m_databody$.firstChild.childNodes, $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$.length, $dir$$inline_9445_value$$inline_11753$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
          for($JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = 1;$JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ < $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$;$JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ += 
          1) {
            $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ = $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$[$JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$].childNodes;
            for($colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = 0;$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ < $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$.length;$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ += 1) {
              "hidden" === $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)(this, $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ + this.$m_startCol$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)(this) + (0,D.$JSCompiler_StaticMethods_getElementDir$$)($i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$[$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$], 
              $dir$$inline_9445_value$$inline_11753$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)(this, $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$[$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$]) >= this.getWidth() ? "left" === $dir$$inline_9445_value$$inline_11753$$ ? $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$[$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$].style.borderRightStyle = "none" : 
              $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$[$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$].style.borderLeftStyle = "none" : "left" === $dir$$inline_9445_value$$inline_11753$$ ? $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$[$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$].style.borderRightStyle = "" : $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$[$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$].style.borderLeftStyle = 
              "", $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$[$colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$].style.borderBottomStyle = "hidden" === $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)(this, $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ + 
              this.$m_startRow$ - 1) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)(this, $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$[$JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$], D.$JSCompiler_alias_NULL$$) >= this.getHeight() ? "none" : ""
            }
          }
          break;
        case "scrollPosition":
          (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this);
          break;
        case "selectionMode":
          break;
        case "emptyText":
          break;
        case "header":
          $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = this.$m_options$.options.header;
          $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ = $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ = $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = $i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ = $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = D.$JSCompiler_alias_VOID$$;
          $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ = D.$JSCompiler_alias_FALSE$$;
          for($bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ in $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) {
            if("column" == $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ || "row" == $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$) {
              if($j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$) {
                break
              }
              "column" == $bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$ ? this.$m_colHeader$ && ($headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && 1 < this.$m_rowHeader$.firstChild.childElementCount && ($headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$ = this.$m_rowHeader$.firstChild.childNodes);
              if($headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$) {
                for($i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$ in $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$ = $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$[$bandingClass$$inline_9426_bandingClass$$inline_9433_element$$inline_9452_horizontalGridlines$$inline_9442$$], $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$) {
                  b: {
                    var $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$ = $headers$$inline_9451_index$$inline_9432_j$$inline_9425_rowCount$$inline_9441$$, $dir$$inline_9445_value$$inline_11753$$ = $colObj$$inline_9449_j$$inline_9439_row$$inline_9423_rows$$inline_9430$$[$i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$], $i$$inline_11754$$ = D.$JSCompiler_alias_VOID$$, $attribute$$inline_11755$$ = D.$JSCompiler_alias_VOID$$, $val$$inline_11756$$ = 
                    D.$JSCompiler_alias_VOID$$, $attribute$$inline_11755$$ = this.$m_resources$.getMappedAttribute($i$$inline_9424_i$$inline_9431_opt$$inline_9450_row$$inline_9440$$), $val$$inline_11756$$ = $dir$$inline_9445_value$$inline_11753$$;
                    $dir$$inline_9445_value$$inline_11753$$.width ? $val$$inline_11756$$ = $dir$$inline_9445_value$$inline_11753$$.width : $dir$$inline_9445_value$$inline_11753$$.height && ($val$$inline_11756$$ = $dir$$inline_9445_value$$inline_11753$$.height);
                    for($i$$inline_11754$$ = 0;$i$$inline_11754$$ < $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$.length;$i$$inline_11754$$++) {
                      if("disable" == $val$$inline_11756$$) {
                        $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$[$i$$inline_11754$$].setAttribute($attribute$$inline_11755$$, "false")
                      }else {
                        if("enable" == $val$$inline_11756$$) {
                          $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$[$i$$inline_11754$$].setAttribute($attribute$$inline_11755$$, "true")
                        }else {
                          $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$ = D.$JSCompiler_alias_FALSE$$;
                          break b
                        }
                      }
                    }
                    $JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$ = D.$JSCompiler_alias_TRUE$$
                  }
                  if(!$JSCompiler_inline_result$$11749_headers$$inline_11751_row$$inline_9435_rows$$inline_9444$$) {
                    $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ = D.$JSCompiler_alias_TRUE$$;
                    break
                  }
                }
              }
            }
          }
          $j$$inline_9434_refresh$$inline_9453_verticalGridlines$$inline_9443$$ && this.refresh(this.$m_root$);
          break;
        case "selection":
          $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = this.$m_options$.getSelection();
          $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$SetSelection$($JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) : $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$.length = 
          0);
          break;
        default:
          $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = D.$JSCompiler_alias_FALSE$$;
          break a
      }
      $JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$ = D.$JSCompiler_alias_TRUE$$
    }
    if(!$JSCompiler_inline_result$$315_columnBandingInterval$$inline_9429_i$$inline_9438_obj$$inline_535_obj$$inline_9448_options$$4_rows$$inline_9422_selection$$inline_9456$$) {
      this.refresh(this.$m_root$);
      break
    }
  }
};
D.$DvtDataGrid$$.prototype.UpdateOptions = D.$DvtDataGrid$$.prototype.$UpdateOptions$;
D.$DvtDataGrid$$.prototype.$SetResources$ = (0,D.$JSCompiler_set$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.SetResources = D.$DvtDataGrid$$.prototype.$SetResources$;
D.$DvtDataGrid$$.prototype.$getResources$ = (0,D.$JSCompiler_get$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.getResources = D.$DvtDataGrid$$.prototype.$getResources$;
D.$DvtDataGrid$$.prototype.$getStartRow$ = (0,D.$JSCompiler_get$$)("$m_startRow$");
D.$DvtDataGrid$$.prototype.getStartRow = D.$DvtDataGrid$$.prototype.$getStartRow$;
D.$DvtDataGrid$$.prototype.$getStartRowHeader$ = (0,D.$JSCompiler_get$$)("$m_startRowHeader$");
D.$DvtDataGrid$$.prototype.getStartRowHeader = D.$DvtDataGrid$$.prototype.$getStartRowHeader$;
D.$DvtDataGrid$$.prototype.$getStartColumn$ = (0,D.$JSCompiler_get$$)("$m_startCol$");
D.$DvtDataGrid$$.prototype.getStartColumn = D.$DvtDataGrid$$.prototype.$getStartColumn$;
D.$DvtDataGrid$$.prototype.$getStartColumnHeader$ = (0,D.$JSCompiler_get$$)("$m_startColHeader$");
D.$DvtDataGrid$$.prototype.getStartColumnHeader = D.$DvtDataGrid$$.prototype.$getStartColumnHeader$;
D.$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$22$$) {
  return this.$m_resources$.getMappedStyle($key$$22$$)
};
D.$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  (0,D.$JSCompiler_StaticMethods__removeDataSourceEventListeners$$)(this);
  $dataSource$$ != D.$JSCompiler_alias_NULL$$ && (this.$m_handleModelEventListener$ = this.$handleModelEvent$.bind(this), this.$m_handleExpandEventListener$ = this.$handleExpandEvent$.bind(this), this.$m_handleCollapseEventListener$ = this.$handleCollapseEvent$.bind(this), $dataSource$$.on("change", this.$m_handleModelEventListener$, this), $dataSource$$.on("expand", this.$m_handleExpandEventListener$, this), $dataSource$$.on("collapse", this.$m_handleCollapseEventListener$, this));
  this.$m_dataSource$ = $dataSource$$
};
D.$DvtDataGrid$$.prototype.SetDataSource = D.$DvtDataGrid$$.prototype.$SetDataSource$;
D.$DvtDataGrid$$.prototype.$getDataSource$ = (0,D.$JSCompiler_get$$)("$m_dataSource$");
D.$DvtDataGrid$$.prototype.getDataSource = D.$DvtDataGrid$$.prototype.$getDataSource$;
D.$DvtDataGrid$$.prototype.$setVisibility$ = (0,D.$JSCompiler_set$$)("$m_visibility$");
D.$DvtDataGrid$$.prototype.setVisibility = D.$DvtDataGrid$$.prototype.$setVisibility$;
D.$DvtDataGrid$$.prototype.$getVisibility$ = function $$DvtDataGrid$$$$$getVisibility$$() {
  this.$m_visibility$ == D.$JSCompiler_alias_NULL$$ && (this.$m_root$.offsetParent != D.$JSCompiler_alias_NULL$$ ? this.$setVisibility$("visible") : this.$setVisibility$("hidden"));
  return this.$m_visibility$
};
D.$DvtDataGrid$$.prototype.getVisibility = D.$DvtDataGrid$$.prototype.$getVisibility$;
D.$DvtDataGrid$$.prototype.$SetRemoveCallback$ = (0,D.$JSCompiler_set$$)("$m_removeCallback$");
D.$DvtDataGrid$$.prototype.SetRemoveCallback = D.$DvtDataGrid$$.prototype.$SetRemoveCallback$;
D.$DvtDataGrid$$.prototype.$_remove$ = function $$DvtDataGrid$$$$$_remove$$($element$$6$$) {
  this.$m_removeCallback$ != D.$JSCompiler_alias_NULL$$ ? this.$m_removeCallback$.call(D.$JSCompiler_alias_NULL$$, $element$$6$$) : $element$$6$$.parentNode.removeChild($element$$6$$)
};
D.$DvtDataGrid$$.prototype._remove = D.$DvtDataGrid$$.prototype.$_remove$;
D.$JSCompiler_StaticMethods__indexes$$ = function $$JSCompiler_StaticMethods__indexes$$$($JSCompiler_StaticMethods__indexes$self$$, $keys$$1$$, $callback$$24$$) {
  var $indexes$$3$$;
  $indexes$$3$$ = $JSCompiler_StaticMethods__indexes$self$$.$m_dataSource$.indexes($keys$$1$$);
  "function" === typeof $indexes$$3$$.then ? $indexes$$3$$.then(function($indexes$$3$$) {
    $callback$$24$$.call($JSCompiler_StaticMethods__indexes$self$$, $indexes$$3$$, $keys$$1$$)
  }, function() {
    $callback$$24$$.call($JSCompiler_StaticMethods__indexes$self$$, {row:-1, column:-1}, $keys$$1$$)
  }) : $callback$$24$$.call($JSCompiler_StaticMethods__indexes$self$$, $indexes$$3$$, $keys$$1$$)
};
D.$JSCompiler_StaticMethods__keys$$ = function $$JSCompiler_StaticMethods__keys$$$($JSCompiler_StaticMethods__keys$self$$, $indexes$$4$$, $callback$$25$$) {
  var $keys$$2$$;
  $keys$$2$$ = $JSCompiler_StaticMethods__keys$self$$.$m_dataSource$.keys($indexes$$4$$);
  "function" === typeof $keys$$2$$.then ? $keys$$2$$.then(function($keys$$2$$) {
    $callback$$25$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$)
  }, function() {
    $callback$$25$$.call($JSCompiler_StaticMethods__keys$self$$, {row:D.$JSCompiler_alias_NULL$$, column:D.$JSCompiler_alias_NULL$$}, $indexes$$4$$)
  }) : $callback$$25$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$)
};
D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = (0,D.$JSCompiler_set$$)("$m_createContextCallback$");
D.$DvtDataGrid$$.prototype.SetCreateContextCallback = D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$;
D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$) {
  return"scroll" != (0,D.$JSCompiler_StaticMethods_getScrollPolicy$$)($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$.$m_options$)
};
D.$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  (0,D.$JSCompiler_StaticMethods__removeDataSourceEventListeners$$)(this);
  (0,D.$JSCompiler_StaticMethods__removeDomEventListeners$$)(this);
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {}
};
D.$DvtDataGrid$$.prototype.destroy = D.$DvtDataGrid$$.prototype.$destroy$;
D.$JSCompiler_StaticMethods__removeDataSourceEventListeners$$ = function $$JSCompiler_StaticMethods__removeDataSourceEventListeners$$$($JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$) {
  $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("change", $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleModelEventListener$), $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("expand", $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleExpandEventListener$), $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("collapse", 
  $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleCollapseEventListener$))
};
D.$JSCompiler_StaticMethods__removeDomEventListeners$$ = function $$JSCompiler_StaticMethods__removeDomEventListeners$$$($JSCompiler_StaticMethods__removeDomEventListeners$self$$) {
  window.document.removeEventListener("mousemove", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$);
  window.document.removeEventListener("mouseup", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleDatabodyKeyDown$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("keydown", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootFocus$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("focus", 
  $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootFocus$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootBlur$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("blur", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootBlur$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  this.$m_width$ == D.$JSCompiler_alias_NULL$$ && (this.$m_width$ = this.$m_root$.clientWidth);
  return this.$m_width$
};
D.$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  this.$m_height$ == D.$JSCompiler_alias_NULL$$ && (this.$m_height$ = this.$m_root$.clientHeight);
  return this.$m_height$
};
D.$JSCompiler_StaticMethods_getViewportWidth$$ = function $$JSCompiler_StaticMethods_getViewportWidth$$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$.getWidth();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$)
};
D.$JSCompiler_StaticMethods_getViewportHeight$$ = function $$JSCompiler_StaticMethods_getViewportHeight$$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$.getHeight();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$)
};
D.$JSCompiler_StaticMethods_getFetchSize$$ = function $$JSCompiler_StaticMethods_getFetchSize$$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$4$$) {
  return"row" == $axis$$4$$ ? ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$4$$ ? 
  ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0
};
D.$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText_resources$$1$$;
  $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
  $emptyText_resources$$1$$ == D.$JSCompiler_alias_NULL$$ && ($emptyText_resources$$1$$ = this.$m_resources$, $emptyText_resources$$1$$ = $emptyText_resources$$1$$.getTranslatedText("msgNoData"));
  return $emptyText_resources$$1$$
};
D.$JSCompiler_StaticMethods__buildEmptyText$$ = function $$JSCompiler_StaticMethods__buildEmptyText$$$($JSCompiler_StaticMethods__buildEmptyText$self$$) {
  var $emptyText$$1$$, $empty$$;
  $emptyText$$1$$ = $JSCompiler_StaticMethods__buildEmptyText$self$$.$getEmptyText$();
  $empty$$ = window.document.createElement("div");
  $empty$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__buildEmptyText$self$$, "empty");
  $empty$$.className = $JSCompiler_StaticMethods__buildEmptyText$self$$.getMappedStyle("emptytext");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($empty$$, 0 <= $JSCompiler_StaticMethods__buildEmptyText$self$$.$m_endColHeader$ ? (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods__buildEmptyText$self$$) : 0, "top");
  $empty$$.textContent = $emptyText$$1$$;
  return $JSCompiler_StaticMethods__buildEmptyText$self$$.$m_empty$ = $empty$$
};
D.$JSCompiler_StaticMethods_setDefaultDimensions$$ = function $$JSCompiler_StaticMethods_setDefaultDimensions$$$($JSCompiler_StaticMethods_setDefaultDimensions$self$$) {
  var $div$$, $resources$$2$$;
  $div$$ = window.document.createElement("div");
  $div$$.style.visibilty = "hidden";
  $resources$$2$$ = $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_resources$;
  $div$$.className = $resources$$2$$.getMappedStyle("colheadercell") + " " + $resources$$2$$.getMappedStyle("headercell");
  window.document.body.appendChild($div$$);
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultColumnWidth$ = window.Math.round($div$$.getBoundingClientRect().width);
  $div$$.className = $resources$$2$$.getMappedStyle("row");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultRowHeight$ = window.Math.round($div$$.getBoundingClientRect().height);
  window.document.body.removeChild($div$$)
};
D.$JSCompiler_StaticMethods_getDefaultRowHeight$$ = function $$JSCompiler_StaticMethods_getDefaultRowHeight$$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultRowHeight$self$$);
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$
};
D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$ = function $$JSCompiler_StaticMethods_getDefaultColumnWidth$$$($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$) {
  $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$);
  return $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$
};
D.$DvtDataGrid$$.prototype.$getRowHeight$ = function $$DvtDataGrid$$$$$getRowHeight$$($elem$$1$$, $key$$23$$) {
  var $rowHeight$$, $className$$5$$;
  $rowHeight$$ = this.$m_sizingManager$.$getSize$("row", $key$$23$$);
  if($rowHeight$$ != D.$JSCompiler_alias_NULL$$) {
    return $rowHeight$$
  }
  if("" != $elem$$1$$.style.height) {
    return $rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$1$$), this.$m_sizingManager$.$setSize$("row", $key$$23$$, $rowHeight$$), $rowHeight$$
  }
  $className$$5$$ = $elem$$1$$.className;
  $rowHeight$$ = this.$m_styleClassDimensionMap$[$className$$5$$];
  $rowHeight$$ == D.$JSCompiler_alias_NULL$$ && ($rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$1$$));
  $rowHeight$$ != (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this) && this.$m_sizingManager$.$setSize$("row", $key$$23$$, $rowHeight$$);
  return this.$m_styleClassDimensionMap$[$className$$5$$] = $rowHeight$$
};
D.$DvtDataGrid$$.prototype.$getColumnWidth$ = function $$DvtDataGrid$$$$$getColumnWidth$$($elem$$2$$, $key$$24$$) {
  var $columnWidth$$, $className$$6$$;
  $columnWidth$$ = this.$m_sizingManager$.$getSize$("column", $key$$24$$);
  if($columnWidth$$ != D.$JSCompiler_alias_NULL$$) {
    return $columnWidth$$
  }
  if("" != $elem$$2$$.style.width) {
    return $columnWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$2$$), this.$m_sizingManager$.$setSize$("column", $key$$24$$, $columnWidth$$), $columnWidth$$
  }
  $className$$6$$ = $elem$$2$$.className;
  $columnWidth$$ = this.$m_styleClassDimensionMap$[$className$$6$$];
  $columnWidth$$ == D.$JSCompiler_alias_NULL$$ && ($columnWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$2$$));
  $columnWidth$$ != (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)(this) && this.$m_sizingManager$.$setSize$("column", $key$$24$$, $columnWidth$$);
  return this.$m_styleClassDimensionMap$[$className$$6$$] = $columnWidth$$
};
D.$JSCompiler_StaticMethods_createSubId$$ = function $$JSCompiler_StaticMethods_createSubId$$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$) {
  var $id$$2$$ = $JSCompiler_StaticMethods_createSubId$self$$.$m_root$.id;
  $id$$2$$ == D.$JSCompiler_alias_NULL$$ && ($id$$2$$ = "");
  return[$id$$2$$, $subId$$].join(":")
};
D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$ = function $$JSCompiler_StaticMethods_isHeaderFetchComplete$$$($JSCompiler_StaticMethods_isHeaderFetchComplete$self$$) {
  return $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.row === D.$JSCompiler_alias_FALSE$$ && $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.column === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isFetchComplete$$ = function $$JSCompiler_StaticMethods_isFetchComplete$$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return(0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)($JSCompiler_StaticMethods_isFetchComplete$self$$) && $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isLastRow$$ = function $$JSCompiler_StaticMethods__isLastRow$$$($JSCompiler_StaticMethods__isLastRow$self$$, $index$$49$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastRow$self$$, "row") ? $index$$49$$ === $JSCompiler_StaticMethods__isLastRow$self$$.$m_endRow$ && $JSCompiler_StaticMethods__isLastRow$self$$.$m_stopRowFetch$ : $index$$49$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_dataSource$.getCount("row")
};
D.$JSCompiler_StaticMethods__isLastColumn$$ = function $$JSCompiler_StaticMethods__isLastColumn$$$($JSCompiler_StaticMethods__isLastColumn$self$$, $index$$50$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastColumn$self$$, "column") ? $index$$50$$ === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_endCol$ && $JSCompiler_StaticMethods__isLastColumn$self$$.$m_stopColumnFetch$ : $index$$50$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_dataSource$.getCount("column")
};
D.$DvtDataGrid$$.prototype.empty = function $$DvtDataGrid$$$$empty$() {
  this.$m_empty$ && this.$m_root$.removeChild(this.$m_empty$);
  this.$m_corner$ && this.$m_root$.removeChild(this.$m_corner$);
  this.$m_bottomCorner$ && this.$m_root$.removeChild(this.$m_bottomCorner$);
  this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$);
  this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$);
  this.$m_root$.removeChild(this.$m_placeHolder$);
  this.$m_root$.removeChild(this.$m_status$);
  this.$m_root$.removeChild(this.$m_accSummary$);
  this.$m_root$.removeChild(this.$m_accInfo$);
  this.$m_root$.removeChild(this.$m_stateInfo$);
  this.$m_root$.removeChild(this.$m_contextInfo$);
  this.$m_root$.removeChild(this.$m_scroller$);
  this.$_remove$(this.$m_colHeader$);
  this.$_remove$(this.$m_rowHeader$);
  this.$_remove$(this.$m_databody$)
};
D.$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$) {
  (0,D.$JSCompiler_StaticMethods__removeDomEventListeners$$)(this);
  (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this);
  this.$render$($root$$)
};
D.$DvtDataGrid$$.prototype.refresh = D.$DvtDataGrid$$.prototype.refresh;
D.$JSCompiler_StaticMethods_resetInternal$$ = function $$JSCompiler_StaticMethods_resetInternal$$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cursor$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databody$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scroller$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_empty$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_accInfo$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_accSummary$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_contextInfo$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_placeHolder$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stateInfo$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_status$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateColumnCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowFetchSize$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnFetchSize$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_fetching$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sizingManager$.clear();
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_styleClassDimensionMap$ = {};
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_height$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_width$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scrollHeight$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scrollWidth$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColWidth$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColHeaderWidth$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultColumnWidth$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultRowHeight$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeaderHeight$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderLevelWidths$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderLevelHeights$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_active$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActive$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActiveHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_moveRow$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_moveRowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_dropTarget$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_dropTargetHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_docMouseMoveListener$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_docMouseUpListener$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleDatabodyKeyDown$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleRootFocus$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleRootBlur$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_modelEvents$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_hasHorizontalScroller$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_hasVerticalScroller$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_currentScrollLeft$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_currentScrollTop$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_resizing$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRow$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startCol$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRow$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endCol$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowHeaderPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColHeaderPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowHeaderPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColHeaderPixel$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderLevelCount$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderLevelCount$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sortInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($empty$$inline_612_i$$inline_613_root$$1$$) {
  this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (this.$destroy$(), (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this));
  this.$m_timingStart$ = new window.Date;
  this.$m_fetching$ = {};
  this.$m_startCol$ = this.$m_startRow$ = 0;
  this.$m_endCol$ = this.$m_endRow$ = -1;
  this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = 0;
  this.$m_endColHeader$ = this.$m_endRowHeader$ = -1;
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = 0;
  var $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$, $colHeader$$inline_608$$, $rowHeader$$inline_609$$;
  this.$m_root$ = $empty$$inline_612_i$$inline_613_root$$1$$;
  this.$m_root$.setAttribute("role", "application");
  this.$m_root$.setAttribute("aria-describedby", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary"));
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  $empty$$inline_612_i$$inline_613_root$$1$$.tabIndex = 0;
  var $root$$inline_9459$$ = window.document.createElement("div");
  $root$$inline_9459$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "status");
  $root$$inline_9459$$.className = this.getMappedStyle("status");
  $root$$inline_9459$$.setAttribute("role", "status");
  $empty$$inline_612_i$$inline_613_root$$1$$.appendChild($root$$inline_9459$$);
  this.$m_status$ = $root$$inline_9459$$;
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$ = window.document.createElement("div");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.className = this.getMappedStyle("info");
  $empty$$inline_612_i$$inline_613_root$$1$$.appendChild($root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$);
  this.$m_accSummary$ = $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$;
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$ = window.document.createElement("div");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.className = this.getMappedStyle("info");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.setAttribute("role", "status");
  $empty$$inline_612_i$$inline_613_root$$1$$.appendChild($root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$);
  this.$m_accInfo$ = $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$;
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$ = window.document.createElement("div");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "state");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.className = this.getMappedStyle("info");
  $empty$$inline_612_i$$inline_613_root$$1$$.appendChild($root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$);
  this.$m_stateInfo$ = $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$;
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$ = window.document.createElement("div");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "context");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.className = this.getMappedStyle("info");
  $empty$$inline_612_i$$inline_613_root$$1$$.appendChild($root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$);
  this.$m_contextInfo$ = $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$;
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$ = window.document.createElement("div");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "placeHolder");
  $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$.className = this.getMappedStyle("info");
  $empty$$inline_612_i$$inline_613_root$$1$$.appendChild($root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$);
  this.$m_placeHolder$ = $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$;
  if(this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$) {
    this.$m_empty$ = D.$JSCompiler_alias_NULL$$;
    $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$ = this.$m_resources$.isRTLMode();
    $colHeader$$inline_608$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_609$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_9477$$ = window.document.createElement("div");
    $root$$inline_9477$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "scroller");
    $root$$inline_9477$$.className = this.getMappedStyle("scrollers");
    $root$$inline_9477$$.tabIndex = "-1";
    $root$$inline_9477$$.addEventListener ? $root$$inline_9477$$.addEventListener("scroll", this.$handleScroll$.bind(this), D.$JSCompiler_alias_FALSE$$) : $root$$inline_9477$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    var $root$$inline_9481$$ = window.document.createElement("div");
    $root$$inline_9481$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "databody");
    $root$$inline_9481$$.className = this.getMappedStyle("databody");
    this.fetchCells($root$$inline_9481$$, $root$$inline_9477$$, 0, 0);
    $root$$inline_9462_root$$inline_9465_root$$inline_9468_root$$inline_9471_root$$inline_9474_rtl$$inline_607$$ && ($colHeader$$inline_608$$.style.direction = "rtl", $root$$inline_9481$$.style.direction = "rtl", $root$$inline_9477$$.style.direction = "rtl");
    $empty$$inline_612_i$$inline_613_root$$1$$.insertBefore($colHeader$$inline_608$$, $root$$inline_9459$$);
    $empty$$inline_612_i$$inline_613_root$$1$$.insertBefore($rowHeader$$inline_609$$, $root$$inline_9459$$);
    $empty$$inline_612_i$$inline_613_root$$1$$.insertBefore($root$$inline_9477$$, $root$$inline_9459$$);
    $empty$$inline_612_i$$inline_613_root$$1$$.insertBefore($root$$inline_9481$$, $root$$inline_9459$$);
    this.$m_colHeader$ = $colHeader$$inline_608$$;
    this.$m_rowHeader$ = $rowHeader$$inline_609$$;
    this.$m_databody$ = $root$$inline_9481$$;
    this.$m_scroller$ = $root$$inline_9477$$;
    this.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$;
    this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this);
    this.$m_handleRootFocus$ = this.$handleRootFocus$.bind(this);
    this.$m_handleRootBlur$ = this.$handleRootBlur$.bind(this);
    this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this);
    this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this);
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? ($root$$inline_9481$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $empty$$inline_612_i$$inline_613_root$$1$$.addEventListener("focus", this.$m_handleRootFocus$, D.$JSCompiler_alias_TRUE$$), $empty$$inline_612_i$$inline_613_root$$1$$.addEventListener("blur", this.$m_handleRootBlur$, D.$JSCompiler_alias_TRUE$$)) : (window.document.addEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$), window.document.addEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$), $empty$$inline_612_i$$inline_613_root$$1$$.addEventListener("keydown", 
    this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), $empty$$inline_612_i$$inline_613_root$$1$$.addEventListener("focus", this.$m_handleRootFocus$, D.$JSCompiler_alias_TRUE$$), $empty$$inline_612_i$$inline_613_root$$1$$.addEventListener("blur", this.$m_handleRootBlur$, D.$JSCompiler_alias_TRUE$$), $root$$inline_9481$$.addEventListener("gecko" === this.$m_utils$.platform ? "DOMMouseScroll" : "mousewheel", this.$handleDatabodyMouseWheel$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("mousedown", 
    this.$handleDatabodyMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9481$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_609$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_608$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9477$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9477$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$));
    if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && !this.$m_initialized$) {
      if((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this), this.$m_modelEvents$ != D.$JSCompiler_alias_NULL$$) {
        for($empty$$inline_612_i$$inline_613_root$$1$$ = 0;$empty$$inline_612_i$$inline_613_root$$1$$ < this.$m_modelEvents$.length;$empty$$inline_612_i$$inline_613_root$$1$$++) {
          this.$handleModelEvent$(this.$m_modelEvents$[$empty$$inline_612_i$$inline_613_root$$1$$])
        }
        this.$m_modelEvents$.length = 0
      }
    }else {
      (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && !this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this)
    }
  }else {
    $empty$$inline_612_i$$inline_613_root$$1$$ = (0,D.$JSCompiler_StaticMethods__buildEmptyText$$)(this), this.$m_root$.appendChild($empty$$inline_612_i$$inline_613_root$$1$$)
  }
};
D.$DvtDataGrid$$.prototype.render = D.$DvtDataGrid$$.prototype.$render$;
D.$JSCompiler_StaticMethods_resizeHeaders$$ = function $$JSCompiler_StaticMethods_resizeHeaders$$$($JSCompiler_StaticMethods_resizeHeaders$self$$) {
  var $width$$13$$, $height$$13$$, $colHeader$$1$$, $rowHeader$$1$$, $colHeaderHeight$$, $rowHeaderWidth$$, $dir$$2$$;
  $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$ || ($width$$13$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getWidth(), $height$$13$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getHeight(), $colHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$, $rowHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$, 
  $colHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_resizeHeaders$self$$), $rowHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeHeaders$self$$), $dir$$2$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, 0, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, $colHeaderHeight$$, 
  "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$1$$, $height$$13$$ - $colHeaderHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$1$$, $rowHeaderWidth$$, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$1$$, $width$$13$$ - $rowHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeHeaders$self$$.$m_utils$) || (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeHeaders$self$$))
};
D.$DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$14$$, $height$$14$$) {
  $width$$14$$ = this.$m_root$.clientWidth;
  $height$$14$$ = this.$m_root$.clientHeight;
  if($width$$14$$ != this.$m_width$ || $height$$14$$ != this.$m_height$) {
    this.$m_width$ = $width$$14$$, this.$m_height$ = $height$$14$$, this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$))
  }
};
D.$DvtDataGrid$$.prototype.HandleResize = D.$DvtDataGrid$$.prototype.$HandleResize$;
D.$JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth_width$$15$$, $height$$15_scrollerHeight$$, $borderStyle$$inline_626_colHeader$$2_empty$$2$$, $lastHeader$$inline_627_rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods_resizeGrid$self$$) ? $JSCompiler_StaticMethods_resizeGrid$self$$.$m_empty$ == D.$JSCompiler_alias_NULL$$ && ($borderStyle$$inline_626_colHeader$$2_empty$$2$$ = (0,D.$JSCompiler_StaticMethods__buildEmptyText$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderStyle$$inline_626_colHeader$$2_empty$$2$$), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$) : ($databodyWidth_width$$15$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth(), $height$$15_scrollerHeight$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight(), $borderStyle$$inline_626_colHeader$$2_empty$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $lastHeader$$inline_627_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, $scroller$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, 
  $databody$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $rowHeaderWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $databodyContentWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$1$$.firstChild), $databodyContentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$1$$.firstChild), 
  $height$$15_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$15$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$15$$ = window.Math.min($databodyContentWidth$$, $scrollerWidth$$), $databodyHeight$$ = window.Math.min($databodyContentHeight$$, $height$$15_scrollerHeight$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), $scrollbarSize$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), 
  ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$15_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $height$$15_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$ - $scrollbarSize$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && 
  $height$$15_scrollerHeight$$ - $scrollbarSize$$ < $databodyHeight$$ && ($databodyHeight$$ = $height$$15_scrollerHeight$$ - $scrollbarSize$$), $isDatabodyVerticalScrollbarRequired$$ && $scrollerWidth$$ - $scrollbarSize$$ < $databodyWidth_width$$15$$ && ($databodyWidth_width$$15$$ = $scrollerWidth$$ - $scrollbarSize$$), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($lastHeader$$inline_627_rowHeader$$2$$, 
  0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($lastHeader$$inline_627_rowHeader$$2$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($lastHeader$$inline_627_rowHeader$$2$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_626_colHeader$$2_empty$$2$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderStyle$$inline_626_colHeader$$2_empty$$2$$, 
  $databodyWidth_width$$15$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$1$$, $databodyWidth_width$$15$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$1$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, 
  $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$1$$, $scrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$1$$, $height$$15_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$15$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = 
  $databodyContentHeight$$ - $databodyHeight$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && 0 <= $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$ && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$) + $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeaderPixel$ >= $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() && ($borderStyle$$inline_626_colHeader$$2_empty$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? 
  "borderLeftStyle" : "borderRightStyle", $lastHeader$$inline_627_rowHeader$$2$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_columnHeaderLevelCount$ - 1), $lastHeader$$inline_627_rowHeader$$2$$.style[$borderStyle$$inline_626_colHeader$$2_empty$$2$$] = "none"), (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeGrid$self$$), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner$$, $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
  (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $colHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $rowHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$4$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner")), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ && $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$);
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), 
  $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$));
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), 
  $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, "top"), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ == 
  D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ ? $bottomCorner$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ : ($bottomCorner$$ = window.document.createElement("div"), $bottomCorner$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), 
  $bottomCorner$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner$$, 
  $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ && $bottomCorner$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $scrollMode_scrollPosition$$inline_630$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_632_columnScrollPosition$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$;
  $scrollMode_scrollPosition$$inline_630$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$.$getProperty$("scrollPosition");
  $scrollMode_scrollPosition$$inline_630$$ = $scrollMode_scrollPosition$$inline_630$$ == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_NULL$$ : $scrollMode_scrollPosition$$inline_630$$.key != D.$JSCompiler_alias_VOID$$ ? "key" : $scrollMode_scrollPosition$$inline_630$$.index != D.$JSCompiler_alias_VOID$$ ? "index" : D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ != D.$JSCompiler_alias_VOID$$ && $scrollMode_scrollPosition$$inline_630$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_632_columnScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_632_columnScrollPosition$$, "scrollPosition", "key", "column");
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_632_columnScrollPosition$$ = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_632_columnScrollPosition$$, "scrollPosition", 
    "index", "column");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    var $rowScrollPosition$$inline_636$$;
    $rowScrollPosition$$inline_636$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$, "scrollPosition", "key", "row");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$ = $rowScrollPosition$$inline_636$$ != D.$JSCompiler_alias_NULL$$ ? $rowScrollPosition$$inline_636$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$, "scrollPosition", "index", "row");
    "key" === $scrollMode_scrollPosition$$inline_630$$ ? (0,D.$JSCompiler_StaticMethods__indexes$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, {row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_632_columnScrollPosition$$}, $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$) : $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_635_columnScrollPosition$$inline_633_rowScrollPosition$$, 
    column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_632_columnScrollPosition$$})
  }
};
D.$DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$6_rowScrollPosition$$1$$) {
  var $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$ = 0;
  $columnScrollPosition$$1_initialScrollLeft$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.column ? 0 : $indexes$$6_rowScrollPosition$$1$$.column;
  $indexes$$6_rowScrollPosition$$1$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.row ? 0 : $indexes$$6_rowScrollPosition$$1$$.row;
  $columnScrollPosition$$1_initialScrollLeft$$ *= this.$m_avgColWidth$;
  $initialScrollTop$$ = $indexes$$6_rowScrollPosition$$1$$ * this.$m_avgRowHeight$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)(this.$m_utils$, this.$m_scroller$, $columnScrollPosition$$1_initialScrollLeft$$);
  this.$m_scroller$.scrollTop = $initialScrollTop$$
};
D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$2$$, $expected$$;
  $databody$$2$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  $expected$$ = $expectedWidth$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$) : $expectedWidth$$;
  return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$.firstChild) > $expected$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$3$$, $expected$$1$$;
  $databody$$3$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  $expected$$1$$ = $expectedHeight$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$) : $expectedHeight$$;
  return(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$.firstChild) > $expected$$1$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($ancestors_context$$2$$) {
  var $label$$2$$, $col$$, $i$$8$$, $parent$$2$$, $cell_row$$1_text$$10$$;
  if($ancestors_context$$2$$ != D.$JSCompiler_alias_NULL$$ && ($ancestors_context$$2$$.context != D.$JSCompiler_alias_NULL$$ && (this.$m_accessibleContext$ = $ancestors_context$$2$$.context), $ancestors_context$$2$$.state != D.$JSCompiler_alias_NULL$$ && (this.$m_stateInfo$.textContent = $ancestors_context$$2$$.state), $ancestors_context$$2$$.ancestors != D.$JSCompiler_alias_NULL$$ && this.$m_active$ != D.$JSCompiler_alias_NULL$$)) {
    $label$$2$$ = "";
    $ancestors_context$$2$$ = $ancestors_context$$2$$.ancestors;
    $col$$ = this.$m_active$.column;
    if($col$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $col$$) {
      for($i$$8$$ = 0;$i$$8$$ < $ancestors_context$$2$$.length;$i$$8$$++) {
        0 < $i$$8$$ && ($label$$2$$ = $label$$2$$.concat(", ")), $parent$$2$$ = $ancestors_context$$2$$[$i$$8$$], $cell_row$$1_text$$10$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $parent$$2$$.key), $cell_row$$1_text$$10$$ != D.$JSCompiler_alias_NULL$$ && ($cell_row$$1_text$$10$$ = $cell_row$$1_text$$10$$.childNodes[$col$$ - this.$m_startCol$], $cell_row$$1_text$$10$$ = $cell_row$$1_text$$10$$.textContent, $cell_row$$1_text$$10$$ = $cell_row$$1_text$$10$$ != D.$JSCompiler_alias_NULL$$ ? 
        $cell_row$$1_text$$10$$.replace(/\n|<br\s*\/?>/gi, "").trim() : "", $label$$2$$ = $label$$2$$.concat($parent$$2$$.label).concat(" ").concat($cell_row$$1_text$$10$$))
      }
    }
    this.$m_accessibleContext$ = $label$$2$$.concat(", ").concat(this.$m_accessibleContext$)
  }
};
D.$DvtDataGrid$$.prototype.SetAccessibleContext = D.$DvtDataGrid$$.prototype.$SetAccessibleContext$;
D.$JSCompiler_StaticMethods__updateStateInfo$$ = function $$JSCompiler_StaticMethods__updateStateInfo$$$($JSCompiler_StaticMethods__updateStateInfo$self$$, $key$$25_text$$11$$, $args$$2$$) {
  $key$$25_text$$11$$ = $JSCompiler_StaticMethods__updateStateInfo$self$$.$m_resources$.getTranslatedText($key$$25_text$$11$$, $args$$2$$);
  $key$$25_text$$11$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__updateStateInfo$self$$.$m_stateInfo$.textContent = $key$$25_text$$11$$)
};
D.$JSCompiler_StaticMethods__updateContextInfo$$ = function $$JSCompiler_StaticMethods__updateContextInfo$$$($JSCompiler_StaticMethods__updateContextInfo$self$$, $context$$3_info$$, $skip$$) {
  var $row$$2_text$$12$$, $column$$, $level$$11$$, $rowHeader$$3$$, $columnHeader$$;
  $row$$2_text$$12$$ = $context$$3_info$$.row;
  $column$$ = $context$$3_info$$.column;
  $level$$11$$ = $context$$3_info$$.level;
  $rowHeader$$3$$ = $context$$3_info$$.rowHeader;
  $columnHeader$$ = $context$$3_info$$.columnHeader;
  $context$$3_info$$ = "";
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ == D.$JSCompiler_alias_NULL$$ && (!(0,window.isNaN)($row$$2_text$$12$$) && "row" != $skip$$) && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowContext", {index:$row$$2_text$$12$$ + 1}), $row$$2_text$$12$$ != D.$JSCompiler_alias_NULL$$ && ($context$$3_info$$ = $row$$2_text$$12$$));
  !(0,window.isNaN)($column$$) && "column" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnContext", {index:$column$$ + 1}), $row$$2_text$$12$$ != D.$JSCompiler_alias_NULL$$ && ($context$$3_info$$ = 0 === $context$$3_info$$.length ? $row$$2_text$$12$$ : $context$$3_info$$ + " " + $row$$2_text$$12$$));
  !(0,window.isNaN)($rowHeader$$3$$) && "rowHeader" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowHeaderContext", {index:$rowHeader$$3$$ + 1}), $row$$2_text$$12$$ != D.$JSCompiler_alias_NULL$$ && ($context$$3_info$$ = 0 === $context$$3_info$$.length ? $row$$2_text$$12$$ : $context$$3_info$$ + " " + $row$$2_text$$12$$));
  !(0,window.isNaN)($columnHeader$$) && "columnHeader" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnHeaderContext", {index:$columnHeader$$ + 1}), $row$$2_text$$12$$ != D.$JSCompiler_alias_NULL$$ && ($context$$3_info$$ = 0 === $context$$3_info$$.length ? $row$$2_text$$12$$ : $context$$3_info$$ + " " + $row$$2_text$$12$$));
  !(0,window.isNaN)($level$$11$$) && "level" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleLevelContext", {level:$level$$11$$ + 1}), $row$$2_text$$12$$ != D.$JSCompiler_alias_NULL$$ && ($context$$3_info$$ = 0 === $context$$3_info$$.length ? $row$$2_text$$12$$ : $context$$3_info$$ + " " + $row$$2_text$$12$$));
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ != D.$JSCompiler_alias_NULL$$ && ($context$$3_info$$ = $context$$3_info$$ + ", " + $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$, $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_contextInfo$.textContent = $context$$3_info$$
};
D.$JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$5$$) {
  var $colCount_datasource_rowCount$$1$$, $colPrecision_rowPrecision$$;
  $colCount_datasource_rowCount$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("row"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$) : "column" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("column"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ = 
  "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$)
};
D.$JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$, $styleClass$$) {
  var $root$$9$$ = window.document.createElement("div");
  $root$$9$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$ + "Header");
  $root$$9$$.className = $styleClass$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$7$$, 0, $root$$9$$);
  return $root$$9$$
};
D.$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$8_headerRange$$1$$, $start$$9$$, $header$$2$$, $fetchSize$$, $callbacks$$3_successCallback$$26$$) {
  this.$m_fetching$[$axis$$8_headerRange$$1$$] || (this.$m_fetching$[$axis$$8_headerRange$$1$$] = {start:$start$$9$$}, $fetchSize$$ == D.$JSCompiler_alias_VOID$$ && ($fetchSize$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, $axis$$8_headerRange$$1$$)), $axis$$8_headerRange$$1$$ = {axis:$axis$$8_headerRange$$1$$, start:$start$$9$$, count:$fetchSize$$, header:$header$$2$$}, $callbacks$$3_successCallback$$26$$ = $callbacks$$3_successCallback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$3_successCallback$$26$$.success != 
  D.$JSCompiler_alias_NULL$$ ? $callbacks$$3_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchHeaders($axis$$8_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($results$$, $headerRange$$3$$, $rowInsert$$) {
  var $axis$$10_scroller$$inline_647$$, $avgWidth$$inline_657_root$$10$$, $start$$10$$, $count$$6$$;
  if($headerRange$$3$$.start == this.$m_fetching$[$headerRange$$3$$.axis].start) {
    $axis$$10_scroller$$inline_647$$ = $headerRange$$3$$.axis;
    this.$m_fetching$[$axis$$10_scroller$$inline_647$$] = D.$JSCompiler_alias_FALSE$$;
    $avgWidth$$inline_657_root$$10$$ = $headerRange$$3$$.header;
    $start$$10$$ = $headerRange$$3$$.start;
    $count$$6$$ = this.$m_dataSource$.getCount($axis$$10_scroller$$inline_647$$);
    if("column" === $axis$$10_scroller$$inline_647$$) {
      a: {
        var $renderer$$inline_648$$, $totalColumnWidth$$inline_649$$, $left$$inline_650$$, $headerCount$$inline_651$$, $c$$inline_652$$, $index$$inline_653_returnVal$$inline_656$$, $isAppend$$inline_654$$, $fragment$$inline_655$$, $className$$inline_658$$;
        this.$m_columnHeaderLevelCount$ == D.$JSCompiler_alias_NULL$$ && (this.$m_columnHeaderLevelCount$ = $results$$.getLevelCount());
        $headerCount$$inline_651$$ = $results$$.getCount();
        if($avgWidth$$inline_657_root$$10$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_651$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
          $axis$$10_scroller$$inline_647$$ = $avgWidth$$inline_657_root$$10$$.firstChild;
          -1 == this.$m_endColHeader$ && "" == $avgWidth$$inline_657_root$$10$$.className && ($avgWidth$$inline_657_root$$10$$.className = this.getMappedStyle("colheader") + " " + this.getMappedStyle("header"), $avgWidth$$inline_657_root$$10$$.style.height = "", $axis$$10_scroller$$inline_647$$.style.height = "")
        }else {
          $axis$$10_scroller$$inline_647$$ = window.document.createElement("div"), $axis$$10_scroller$$inline_647$$.className = this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$inline_651$$ && ($avgWidth$$inline_657_root$$10$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_657_root$$10$$, 0), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($axis$$10_scroller$$inline_647$$, 
          0), this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
        }
        $renderer$$inline_648$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "column");
        $totalColumnWidth$$inline_649$$ = 0;
        $left$$inline_650$$ = ($isAppend$$inline_654$$ = $start$$10$$ > this.$m_endColHeader$) ? this.$m_endColHeaderPixel$ : this.$m_startColHeaderPixel$;
        $fragment$$inline_655$$ = window.document.createDocumentFragment();
        $c$$inline_652$$ = 0;
        for($className$$inline_658$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");0 < $headerCount$$inline_651$$ - $c$$inline_652$$;) {
          $index$$inline_653_returnVal$$inline_656$$ = $isAppend$$inline_654$$ ? $start$$10$$ + $c$$inline_652$$ : $start$$10$$ + ($headerCount$$inline_651$$ - 1 - $c$$inline_652$$), $index$$inline_653_returnVal$$inline_656$$ = (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)(this, $fragment$$inline_655$$, $index$$inline_653_returnVal$$inline_656$$, 0, $isAppend$$inline_654$$ ? $left$$inline_650$$ + $totalColumnWidth$$inline_649$$ : $left$$inline_650$$ - $totalColumnWidth$$inline_649$$, 0, $isAppend$$inline_654$$, 
          D.$JSCompiler_alias_FALSE$$, $renderer$$inline_648$$, $results$$, "column", $className$$inline_658$$, this.$m_columnHeaderLevelCount$), $c$$inline_652$$ += $index$$inline_653_returnVal$$inline_656$$.count, $totalColumnWidth$$inline_649$$ += $index$$inline_653_returnVal$$inline_656$$.totalWidth, this.$m_colHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && (this.$m_colHeaderHeight$ = $index$$inline_653_returnVal$$inline_656$$.totalHeight, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_657_root$$10$$, 
          this.$m_colHeaderHeight$))
        }
        $isAppend$$inline_654$$ ? $axis$$10_scroller$$inline_647$$.appendChild($fragment$$inline_655$$) : $axis$$10_scroller$$inline_647$$.insertBefore($fragment$$inline_655$$, $axis$$10_scroller$$inline_647$$.firstChild);
        $isAppend$$inline_654$$ ? (this.$m_endColHeader$ = $start$$10$$ + $headerCount$$inline_651$$ - 1, this.$m_endColHeaderPixel$ += $totalColumnWidth$$inline_649$$) : (this.$m_startColHeader$ -= $headerCount$$inline_651$$, this.$m_startColHeaderPixel$ -= $totalColumnWidth$$inline_649$$);
        $avgWidth$$inline_657_root$$10$$.hasChildNodes() || $avgWidth$$inline_657_root$$10$$.appendChild($axis$$10_scroller$$inline_647$$);
        if(0 < $headerCount$$inline_651$$ && ($avgWidth$$inline_657_root$$10$$ = $totalColumnWidth$$inline_649$$ / $headerCount$$inline_651$$, 0 == this.$m_avgColHeaderWidth$ || $avgWidth$$inline_657_root$$10$$ != this.$m_avgColHeaderWidth$)) {
          this.$m_avgColHeaderWidth$ = $avgWidth$$inline_657_root$$10$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($axis$$10_scroller$$inline_647$$, $count$$6$$ * $avgWidth$$inline_657_root$$10$$)
        }
        !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endColHeader$ + 1 >= $count$$6$$) && (this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
      }
      $results$$.getCount() < $headerRange$$3$$.count && (this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
    }else {
      "row" === $axis$$10_scroller$$inline_647$$ && ((0,D.$JSCompiler_StaticMethods_buildRowHeaders$$)(this, $avgWidth$$inline_657_root$$10$$, $results$$, $start$$10$$, $count$$6$$, $rowInsert$$), $results$$.getCount() < $headerRange$$3$$.count && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$))
    }
    (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) ? ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), !this.$m_initialized$ && !$rowInsert$$ && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))) : (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && (this.$m_initialized$ || (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this));
    this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this)
  }
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$3$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$12_key$$26$$, $index$$51$$, $data$$21$$, $metadata$$, $elem$$3$$, $level$$12$$, $extent$$, $depth$$1$$) {
  var $headerContext$$, $prop$$4$$;
  $headerContext$$ = {};
  $headerContext$$.axis = $axis$$12_key$$26$$;
  $headerContext$$.index = $index$$51$$;
  $headerContext$$.data = $data$$21$$;
  $headerContext$$.component = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $headerContext$$.datasource = $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_dataSource$;
  $headerContext$$.level = $level$$12$$;
  $headerContext$$.depth = $depth$$1$$;
  $headerContext$$.extent = $extent$$;
  $elem$$3$$ != D.$JSCompiler_alias_NULL$$ && ($headerContext$$.parentElement = $elem$$3$$.firstChild);
  $axis$$12_key$$26$$ = $metadata$$.key;
  $axis$$12_key$$26$$ != D.$JSCompiler_alias_NULL$$ && $elem$$3$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__setKey$$)($JSCompiler_StaticMethods_createHeaderContext$self$$, $elem$$3$$, $axis$$12_key$$26$$);
  for($prop$$4$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$4$$) && ($headerContext$$[$prop$$4$$] = $metadata$$[$prop$$4$$])
  }
  $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$
};
D.$JSCompiler_StaticMethods_buildLevelHeaders$$ = function $$JSCompiler_StaticMethods_buildLevelHeaders$$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $fragment$$1$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$, $level$$13$$, $left$$4_totalLevelDimension$$, $top$$2_totalHeaderDimension$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, 
$headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) {
  var $getLevelDimension_levelDimensionValue$$, $getHeaderDimension_i$$9$$, $levelDimension$$, $headerDimension$$, $dimensionToAdjust$$, $dimensionToAdjustValue$$, $dimensionSecond$$, $dimensionSecondValue$$, $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$, $end$$3_headerContent$$, $getGrouping_header$$3$$, $extentInfo_inlineStyle_patchAfter$$, $headerExtent$$, $headerData_patchBefore$$, $groupingContainer$$, $returnVal$$1$$, $headerDimensionValue$$, $totalHeaderDimensionValue$$, 
  $headerCount$$1$$, $headerDepth_nextIndex_totalLevelDimensionValue$$, $styleClass$$1$$;
  $headerCount$$1$$ = $totalHeaderDimensionValue$$ = $headerDepth_nextIndex_totalLevelDimensionValue$$ = 0;
  "row" === $axis$$13_sortIcon$$inline_673$$ ? ($getLevelDimension_levelDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getRowHeaderLevelWidth$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getHeaderDimension_i$$9$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$getRowHeight$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getGrouping_header$$3$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getRowHeaderContainer$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), 
  $levelDimension$$ = "width", $headerDimension$$ = "height", $dimensionToAdjust$$ = "top", $dimensionToAdjustValue$$ = $top$$2_totalHeaderDimension$$, $dimensionSecond$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.isRTLMode() ? "right" : "left", $dimensionSecondValue$$ = $left$$4_totalLevelDimension$$, $left$$4_totalLevelDimension$$ = "totalWidth", $top$$2_totalHeaderDimension$$ = "totalHeight", $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ = 
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_startRowHeader$, $end$$3_headerContent$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_endRowHeader$) : ($getLevelDimension_levelDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getColumnHeaderLevelHeight$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getHeaderDimension_i$$9$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$getColumnWidth$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), 
  $getGrouping_header$$3$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getColumnHeaderContainer$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $levelDimension$$ = "height", $headerDimension$$ = "width", $dimensionToAdjust$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.isRTLMode() ? "right" : "left", $dimensionToAdjustValue$$ = $left$$4_totalLevelDimension$$, $dimensionSecond$$ = "top", $dimensionSecondValue$$ = $top$$2_totalHeaderDimension$$, 
  $left$$4_totalLevelDimension$$ = "totalHeight", $top$$2_totalHeaderDimension$$ = "totalWidth", $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_startColHeader$, $end$$3_headerContent$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_endColHeader$);
  $extentInfo_inlineStyle_patchAfter$$ = $headerSet$$1$$.getExtent($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$, $level$$13$$);
  $headerExtent$$ = $extentInfo_inlineStyle_patchAfter$$.extent;
  $headerData_patchBefore$$ = $extentInfo_inlineStyle_patchAfter$$.more.before;
  $extentInfo_inlineStyle_patchAfter$$ = $extentInfo_inlineStyle_patchAfter$$.more.after;
  if($headerData_patchBefore$$ && $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ === $end$$3_headerContent$$ + 1) {
    $groupingContainer$$ = $getGrouping_header$$3$$($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ - 1, $level$$13$$, 0);
    (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent") + $headerExtent$$);
    $getGrouping_header$$3$$ = $groupingContainer$$.firstChild;
    $getLevelDimension_levelDimensionValue$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $levelDimension$$);
    for($getHeaderDimension_i$$9$$ = 0;$getHeaderDimension_i$$9$$ < $headerExtent$$;$getHeaderDimension_i$$9$$) {
      $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + $getHeaderDimension_i$$9$$, $level$$13$$ + 1, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $getLevelDimension_levelDimensionValue$$, $isAppend$$1$$, 
      $insert$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) : (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + $getHeaderDimension_i$$9$$, 
      $level$$13$$ + 1, $dimensionSecondValue$$ + $getLevelDimension_levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$), $dimensionToAdjustValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += 
      $returnVal$$1$$.count, $getHeaderDimension_i$$9$$ += $returnVal$$1$$.count
    }
    (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$)
  }else {
    if($extentInfo_inlineStyle_patchAfter$$ && $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ === $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ - 1) {
      $groupingContainer$$ = $getGrouping_header$$3$$($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + 1, $level$$13$$, 0);
      (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent") + $headerExtent$$);
      (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start") - $headerExtent$$);
      $getGrouping_header$$3$$ = $groupingContainer$$.firstChild;
      $getLevelDimension_levelDimensionValue$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $levelDimension$$);
      for($getHeaderDimension_i$$9$$ = 0;$getHeaderDimension_i$$9$$ < $headerExtent$$;$getHeaderDimension_i$$9$$) {
        $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + $getHeaderDimension_i$$9$$, $level$$13$$ + 1, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $getLevelDimension_levelDimensionValue$$, $isAppend$$1$$, 
        $insert$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) : (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + $getHeaderDimension_i$$9$$, 
        $level$$13$$ + 1, $dimensionSecondValue$$ + $getLevelDimension_levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$), $dimensionToAdjustValue$$ -= $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += 
        $returnVal$$1$$.count, $getHeaderDimension_i$$9$$ += $returnVal$$1$$.count
      }
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$)
    }else {
      $headerData_patchBefore$$ = $headerSet$$1$$.getData($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$, $level$$13$$);
      $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ = $headerSet$$1$$.getMetadata($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$, $level$$13$$);
      $headerDepth_nextIndex_totalLevelDimensionValue$$ = $headerSet$$1$$.getDepth($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$, $level$$13$$);
      $end$$3_headerContent$$ = window.document.createElement("div");
      $end$$3_headerContent$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercellcontent");
      $getGrouping_header$$3$$ = window.document.createElement("div");
      $getGrouping_header$$3$$.appendChild($end$$3_headerContent$$);
      $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $axis$$13_sortIcon$$inline_673$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$, $headerData_patchBefore$$, $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$, $getGrouping_header$$3$$, $level$$13$$, 
      $headerExtent$$, $headerDepth_nextIndex_totalLevelDimensionValue$$);
      $getGrouping_header$$3$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $axis$$13_sortIcon$$inline_673$$.charAt(0) + $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$.key);
      $extentInfo_inlineStyle_patchAfter$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getInlineStyle$($axis$$13_sortIcon$$inline_673$$, $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$);
      $styleClass$$1$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getStyleClass$($axis$$13_sortIcon$$inline_673$$, $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$);
      $extentInfo_inlineStyle_patchAfter$$ != D.$JSCompiler_alias_NULL$$ && ($getGrouping_header$$3$$.style.cssText = $extentInfo_inlineStyle_patchAfter$$);
      $getGrouping_header$$3$$.className = $className$$8$$;
      $styleClass$$1$$ != D.$JSCompiler_alias_NULL$$ && ($getGrouping_header$$3$$.className += " " + $styleClass$$1$$);
      $getLevelDimension_levelDimensionValue$$ = $getLevelDimension_levelDimensionValue$$($level$$13$$, $getGrouping_header$$3$$);
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionSecondValue$$, $dimensionSecond$$);
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $getLevelDimension_levelDimensionValue$$, $levelDimension$$);
      $level$$13$$ != $totalLevels$$ - 1 && ($groupingContainer$$ = window.document.createElement("div"), $groupingContainer$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer"), $groupingContainer$$.appendChild($getGrouping_header$$3$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start", $isAppend$$1$$ ? $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ : 
      $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ - $headerExtent$$ + 1), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", $headerExtent$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "level", $level$$13$$));
      if($level$$13$$ + $headerDepth_nextIndex_totalLevelDimensionValue$$ == $totalLevels$$) {
        $headerDimensionValue$$ = $getHeaderDimension_i$$9$$($getGrouping_header$$3$$, $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$.key), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $headerDimensionValue$$, $headerDimension$$), $totalHeaderDimensionValue$$ += $headerDimensionValue$$, $headerCount$$1$$++, $headerDepth_nextIndex_totalLevelDimensionValue$$ = $getLevelDimension_levelDimensionValue$$, !$isAppend$$1$$ && !$insert$$ && ($dimensionToAdjustValue$$ -= 
        $headerDimensionValue$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$))
      }else {
        for($getHeaderDimension_i$$9$$ = 0;$getHeaderDimension_i$$9$$ < $headerExtent$$;$getHeaderDimension_i$$9$$++) {
          $headerDepth_nextIndex_totalLevelDimensionValue$$ = $isAppend$$1$$ ? $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + $getHeaderDimension_i$$9$$ : $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ - $getHeaderDimension_i$$9$$, $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
          $groupingContainer$$, $headerDepth_nextIndex_totalLevelDimensionValue$$, $level$$13$$ + 1, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $getLevelDimension_levelDimensionValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) : (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
          $groupingContainer$$, $headerDepth_nextIndex_totalLevelDimensionValue$$, $level$$13$$ + 1, $dimensionSecondValue$$ + $getLevelDimension_levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$), $headerDimensionValue$$ = $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $dimensionToAdjustValue$$ = 
          $isAppend$$1$$ ? $dimensionToAdjustValue$$ + $headerDimensionValue$$ : $dimensionToAdjustValue$$ - $headerDimensionValue$$, $totalHeaderDimensionValue$$ += $headerDimensionValue$$, $headerCount$$1$$ += $returnVal$$1$$.count, $getHeaderDimension_i$$9$$ += $returnVal$$1$$.count - 1
        }
        $headerDepth_nextIndex_totalLevelDimensionValue$$ = $getLevelDimension_levelDimensionValue$$ + $returnVal$$1$$[$left$$4_totalLevelDimension$$];
        !$isAppend$$1$$ && !$insert$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
        (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $totalHeaderDimensionValue$$, $headerDimension$$)
      }
      "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + $headerExtent$$ - 1) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$) + $dimensionToAdjustValue$$ + $headerDimensionValue$$ >= 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getWidth() && ("left" === $dimensionToAdjust$$ ? $getGrouping_header$$3$$.style.borderRightStyle = "none" : $getGrouping_header$$3$$.style.borderLeftStyle = "none") : (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ + $headerExtent$$ - 
      1) && (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$) + $dimensionToAdjustValue$$ + $headerDimensionValue$$ >= $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getHeight() && ($getGrouping_header$$3$$.style.borderBottomStyle = "none");
      "column" == $axis$$13_sortIcon$$inline_673$$ ? ($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$, $axis$$13_sortIcon$$inline_673$$, "width", $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$), $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = 
      "enable" == $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) : "row" == $axis$$13_sortIcon$$inline_673$$ ? ($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$, 
      $axis$$13_sortIcon$$inline_673$$, "height", $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$), $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = "enable" == $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) : $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = 
      D.$JSCompiler_alias_FALSE$$;
      $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ && (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $getGrouping_header$$3$$, "resizable", "true");
      $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.call($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$), 
      $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $end$$3_headerContent$$.appendChild($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$) : 
      $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$.parentNode == D.$JSCompiler_alias_NULL$$ && $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$.toString && ($JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = window.document.createElement("span"), $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.className = 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercelltext"), $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.appendChild(window.document.createTextNode($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$.toString())), $end$$3_headerContent$$.appendChild($JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$)))) : 
      ($JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = window.document.createElement("span"), $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercelltext"), $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.appendChild(window.document.createTextNode($headerData_patchBefore$$.toString())), 
      $end$$3_headerContent$$.appendChild($JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$));
      if($JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = "column" === $axis$$13_sortIcon$$inline_673$$) {
        $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_dataSource$.getCapability("sort"), $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getProperty$("sortable", $axis$$13_sortIcon$$inline_673$$, $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$), 
        $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ : D.$JSCompiler_alias_FALSE$$, $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = 
        ("enable" === $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ || "auto" === $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$) && ("full" === $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ || $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ === 
        $axis$$13_sortIcon$$inline_673$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
      }
      $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ && ($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$ = window.document.createElement("div"), $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortcontainer"), 
      $axis$$13_sortIcon$$inline_673$$ = window.document.createElement("div"), $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("icon") + " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("clickableicon"), $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$.key === ($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ != 
      D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.key : D.$JSCompiler_alias_NULL$$) ? ($direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.direction : D.$JSCompiler_alias_NULL$$, "ascending" === $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ ? 
      $axis$$13_sortIcon$$inline_673$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortascending") + " " + $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ + " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("default") : "descending" === $direction$$inline_675_headerContext$$1_headerMetadata_start$$12$$ && ($axis$$13_sortIcon$$inline_673$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortdescending") + 
      " " + $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ + " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("default"))) : ($JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ += " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("disabled"), $axis$$13_sortIcon$$inline_673$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortascending") + 
      " " + $JSCompiler_temp$$15_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$), $JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$.appendChild($axis$$13_sortIcon$$inline_673$$), $getGrouping_header$$3$$.appendChild($JSCompiler_inline_result$$175_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11758$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
      $getGrouping_header$$3$$, "sortable", "true"));
      $isAppend$$1$$ ? $groupingContainer$$ != D.$JSCompiler_alias_NULL$$ ? $fragment$$1$$.appendChild($groupingContainer$$) : $fragment$$1$$.appendChild($getGrouping_header$$3$$) : $groupingContainer$$ != D.$JSCompiler_alias_NULL$$ ? $fragment$$1$$.firstChild ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($fragment$$1$$.firstChild, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer")) ? $fragment$$1$$.insertBefore($groupingContainer$$, $fragment$$1$$.firstChild) : 
      (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($fragment$$1$$.firstChild, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercell")) && $fragment$$1$$.insertBefore($groupingContainer$$, $fragment$$1$$.firstChild.nextSibling) : $fragment$$1$$.appendChild($groupingContainer$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($fragment$$1$$, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer")) ? $fragment$$1$$.insertBefore($getGrouping_header$$3$$, 
      $fragment$$1$$.firstChild.nextSibling) : $fragment$$1$$.insertBefore($getGrouping_header$$3$$, $fragment$$1$$.firstChild)
    }
  }
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$ = {};
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$[$left$$4_totalLevelDimension$$] = $headerDepth_nextIndex_totalLevelDimensionValue$$;
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$[$top$$2_totalHeaderDimension$$] = $totalHeaderDimensionValue$$;
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.count = $headerCount$$1$$;
  return $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$
};
D.$JSCompiler_StaticMethods_buildRowHeaders$$ = function $$JSCompiler_StaticMethods_buildRowHeaders$$$($JSCompiler_StaticMethods_buildRowHeaders$self$$, $headerRoot$$1$$, $headerSet$$2_prev$$, $rowHeader$$inline_679_start$$13$$, $totalCount$$1$$, $rowInsert$$1$$, $animation$$) {
  var $headerCount$$2$$, $scroller$$5$$, $resizer$$, $renderer$$2$$, $isAppend$$2$$, $top$$3$$, $adjustment$$inline_680_totalRowHeight$$, $className$$9$$, $fragment$$2$$, $index$$54_returnVal$$2$$, $rowHeaderContent$$, $referenceRow$$, $c$$1$$;
  $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$ = $headerSet$$2_prev$$.getLevelCount());
  $headerCount$$2$$ = $headerSet$$2_prev$$.getCount();
  if(!$animation$$) {
    if($headerRoot$$1$$.hasChildNodes()) {
      if(0 == $headerCount$$2$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$, "row")) {
        $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
        return
      }
      $scroller$$5$$ = $headerRoot$$1$$.firstChild;
      -1 == $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ && "" == $headerRoot$$1$$.className && ($headerRoot$$1$$.className = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("rowheader") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("header"), $headerRoot$$1$$.style.width = "", $scroller$$5$$.style.width = "");
      $resizer$$ = $scroller$$5$$.firstChild
    }else {
      $scroller$$5$$ = window.document.createElement("div"), $scroller$$5$$.className = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_utils$) ? " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$2$$ && ($headerRoot$$1$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($headerRoot$$1$$, 
      0), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$5$$, 0), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$), $resizer$$ = window.document.createElement("div"), $resizer$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($resizer$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$, 0), $scroller$$5$$.appendChild($resizer$$)
    }
  }
  $renderer$$2$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_options$, "row");
  ($isAppend$$2$$ = $rowHeader$$inline_679_start$$13$$ >= $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $top$$3$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ : $rowInsert$$1$$ ? ($rowHeaderContent$$ = $headerRoot$$1$$.firstChild, $referenceRow$$ = $rowHeaderContent$$.childNodes[$rowHeader$$inline_679_start$$13$$ - $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ + 1], 
  $top$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($referenceRow$$, "top")) : $top$$3$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$;
  -1 == $totalCount$$1$$ && ($totalCount$$1$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ + $headerCount$$2$$);
  $adjustment$$inline_680_totalRowHeight$$ = 0;
  $fragment$$2$$ = window.document.createDocumentFragment();
  $c$$1$$ = 0;
  for($className$$9$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("headercell") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("rowheadercell");0 < $headerCount$$2$$ - $c$$1$$;) {
    $index$$54_returnVal$$2$$ = $isAppend$$2$$ ? $rowHeader$$inline_679_start$$13$$ + $c$$1$$ : $rowHeader$$inline_679_start$$13$$ + ($headerCount$$2$$ - 1 - $c$$1$$), $index$$54_returnVal$$2$$ = (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$, $fragment$$2$$, $index$$54_returnVal$$2$$, 0, 0, $isAppend$$2$$ ? $top$$3$$ + $adjustment$$inline_680_totalRowHeight$$ : $top$$3$$ - $adjustment$$inline_680_totalRowHeight$$, $isAppend$$2$$, $rowInsert$$1$$, 
    $renderer$$2$$, $headerSet$$2_prev$$, "row", $className$$9$$, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$), $c$$1$$ += $index$$54_returnVal$$2$$.count, $adjustment$$inline_680_totalRowHeight$$ += $index$$54_returnVal$$2$$.totalHeight, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$ = $index$$54_returnVal$$2$$.totalWidth, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($headerRoot$$1$$, 
    $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$))
  }
  if($animation$$) {
    return $fragment$$2$$
  }
  if($isAppend$$2$$ && 0 != $headerCount$$2$$) {
    $scroller$$5$$.appendChild($fragment$$2$$), -1 != $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ && 0 != $headerCount$$2$$ && ($headerSet$$2_prev$$ = $scroller$$5$$.childNodes[$JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ + 1], $headerSet$$2_prev$$ != D.$JSCompiler_alias_NULL$$ && ($headerSet$$2_prev$$.firstChild.style.borderBottomStyle = "")), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ = 
    $rowHeader$$inline_679_start$$13$$ + $headerCount$$2$$ - 1, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ += $adjustment$$inline_680_totalRowHeight$$
  }else {
    if($rowInsert$$1$$) {
      $rowHeaderContent$$.insertBefore($fragment$$2$$, $referenceRow$$);
      $rowHeader$$inline_679_start$$13$$ < $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ = $rowHeader$$inline_679_start$$13$$, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ - $adjustment$$inline_680_totalRowHeight$$));
      $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ += $headerCount$$2$$;
      $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ + $adjustment$$inline_680_totalRowHeight$$);
      for($rowHeader$$inline_679_start$$13$$ = $referenceRow$$;$rowHeader$$inline_679_start$$13$$;) {
        $rowHeader$$inline_679_start$$13$$.style.top = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$inline_679_start$$13$$, "top") + $adjustment$$inline_680_totalRowHeight$$ + "px", $rowHeader$$inline_679_start$$13$$ = $rowHeader$$inline_679_start$$13$$.nextSibling
      }
    }else {
      $scroller$$5$$.insertBefore($fragment$$2$$, $resizer$$.nextSibling), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ - $headerCount$$2$$), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ - $adjustment$$inline_680_totalRowHeight$$)
    }
  }
  $rowInsert$$1$$ || $headerRoot$$1$$.appendChild($scroller$$5$$);
  !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$, "row") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$) && $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ + 1 >= $totalCount$$1$$) && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
};
D.$DvtDataGrid$$.prototype.$_getRowHeaderContainer$ = function $$DvtDataGrid$$$$$_getRowHeaderContainer$$($index$$55$$, $level$$14$$, $currentLevel$$, $rowHeaders$$) {
  var $headerIndex$$, $headerExtent$$1$$, $i$$10$$;
  $rowHeaders$$ == D.$JSCompiler_alias_NULL$$ && ($rowHeaders$$ = this.$m_rowHeader$.firstChild.childNodes);
  if($currentLevel$$ === this.$m_rowHeaderLevelCount$ - 1) {
    return $rowHeaders$$[0].parentNode
  }
  for($i$$10$$ = 1;$i$$10$$ < $rowHeaders$$.length;$i$$10$$++) {
    if($headerIndex$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $rowHeaders$$[$i$$10$$], "start"), $headerExtent$$1$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $rowHeaders$$[$i$$10$$], "extent"), $index$$55$$ >= $headerIndex$$ && $index$$55$$ < $headerIndex$$ + $headerExtent$$1$$) {
      return $level$$14$$ === $currentLevel$$ ? $rowHeaders$$[$i$$10$$] : this.$_getRowHeaderContainer$($index$$55$$, $level$$14$$, $currentLevel$$ + 1, $rowHeaders$$[$i$$10$$].childNodes)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$ = function $$JSCompiler_StaticMethods__getRowHeaderByIndex$$$($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $index$$56_relativeIndex$$, $level$$15$$) {
  var $rowHeaderContainer_rowHeaderContent$$1$$;
  if(0 > $level$$15$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(1 === $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_rowHeaderLevelCount$) {
    return $rowHeaderContainer_rowHeaderContent$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_rowHeader$.firstChild.childNodes, $index$$56_relativeIndex$$ = $index$$56_relativeIndex$$ - $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_startRowHeader$ + 1, $rowHeaderContainer_rowHeaderContent$$1$$[$index$$56_relativeIndex$$]
  }
  $rowHeaderContainer_rowHeaderContent$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$_getRowHeaderContainer$($index$$56_relativeIndex$$, $level$$15$$, 0);
  return $rowHeaderContainer_rowHeaderContent$$1$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $level$$15$$ === $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_rowHeaderLevelCount$ - 1 ? ($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $rowHeaderContainer_rowHeaderContent$$1$$, "start"), $rowHeaderContainer_rowHeaderContent$$1$$.childNodes[$index$$56_relativeIndex$$ - 
  $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$ + 1]) : $rowHeaderContainer_rowHeaderContent$$1$$.firstChild
};
D.$DvtDataGrid$$.prototype.$_getRowHeaderLevelWidth$ = function $$DvtDataGrid$$$$$_getRowHeaderLevelWidth$$($level$$16$$, $element$$7$$) {
  var $width$$16$$;
  this.$m_rowHeaderLevelWidths$ == D.$JSCompiler_alias_NULL$$ && (this.$m_rowHeaderLevelWidths$ = []);
  $width$$16$$ = this.$m_rowHeaderLevelWidths$[$level$$16$$];
  if($width$$16$$ != D.$JSCompiler_alias_NULL$$) {
    return $width$$16$$
  }
  $width$$16$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($element$$7$$);
  return this.$m_rowHeaderLevelWidths$[$level$$16$$] = $width$$16$$
};
D.$DvtDataGrid$$.prototype.$_getColumnHeaderContainer$ = function $$DvtDataGrid$$$$$_getColumnHeaderContainer$$($index$$57$$, $level$$17$$, $currentLevel$$1$$, $columnHeaders$$) {
  var $headerIndex$$1$$, $headerExtent$$2$$, $i$$11$$;
  $columnHeaders$$ == D.$JSCompiler_alias_NULL$$ ? ($columnHeaders$$ = this.$m_colHeader$.firstChild.childNodes, $i$$11$$ = 0) : $i$$11$$ = 1;
  if($currentLevel$$1$$ === this.$m_columnHeaderLevelCount$ - 1) {
    return $columnHeaders$$[0].parentNode
  }
  for($i$$11$$;$i$$11$$ < $columnHeaders$$.length;$i$$11$$++) {
    if($headerIndex$$1$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $columnHeaders$$[$i$$11$$], "start"), $headerExtent$$2$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $columnHeaders$$[$i$$11$$], "extent"), $index$$57$$ >= $headerIndex$$1$$ && $index$$57$$ < $headerIndex$$1$$ + $headerExtent$$2$$) {
      return $level$$17$$ === $currentLevel$$1$$ ? $columnHeaders$$[$i$$11$$] : this.$_getColumnHeaderContainer$($index$$57$$, $level$$17$$, $currentLevel$$1$$ + 1, $columnHeaders$$[$i$$11$$].childNodes)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$ = function $$JSCompiler_StaticMethods__getColumnHeaderByIndex$$$($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $index$$58_relativeIndex$$1$$, $level$$18$$) {
  var $columnHeaderContainer_columnHeaderContent$$;
  if(0 > $level$$18$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(1 === $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_columnHeaderLevelCount$) {
    return $columnHeaderContainer_columnHeaderContent$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_colHeader$.firstChild.childNodes, $index$$58_relativeIndex$$1$$ -= $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_startColHeader$, $columnHeaderContainer_columnHeaderContent$$[$index$$58_relativeIndex$$1$$]
  }
  $columnHeaderContainer_columnHeaderContent$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$_getColumnHeaderContainer$($index$$58_relativeIndex$$1$$, $level$$18$$, 0);
  return $columnHeaderContainer_columnHeaderContent$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $level$$18$$ === $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_columnHeaderLevelCount$ - 1 ? ($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $columnHeaderContainer_columnHeaderContent$$, "start"), $columnHeaderContainer_columnHeaderContent$$.childNodes[$index$$58_relativeIndex$$1$$ - 
  $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$ + 1]) : $columnHeaderContainer_columnHeaderContent$$.firstChild
};
D.$DvtDataGrid$$.prototype.$_getColumnHeaderLevelHeight$ = function $$DvtDataGrid$$$$$_getColumnHeaderLevelHeight$$($level$$19$$, $element$$8$$) {
  var $height$$16$$;
  this.$m_columnHeaderLevelHeights$ == D.$JSCompiler_alias_NULL$$ && (this.$m_columnHeaderLevelHeights$ = []);
  $height$$16$$ = this.$m_columnHeaderLevelHeights$[$level$$19$$];
  if($height$$16$$ != D.$JSCompiler_alias_NULL$$) {
    return $height$$16$$
  }
  $height$$16$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($element$$8$$);
  return this.$m_columnHeaderLevelHeights$[$level$$19$$] = $height$$16$$
};
D.$JSCompiler_StaticMethods__getAttribute$$ = function $$JSCompiler_StaticMethods__getAttribute$$$($JSCompiler_StaticMethods__getAttribute$self_value$$45$$, $element$$9$$, $attributeKey$$) {
  $JSCompiler_StaticMethods__getAttribute$self_value$$45$$ = $element$$9$$.getAttribute($JSCompiler_StaticMethods__getAttribute$self_value$$45$$.$m_resources$.getMappedAttribute($attributeKey$$));
  return(0,window.parseInt)($JSCompiler_StaticMethods__getAttribute$self_value$$45$$, 10)
};
D.$JSCompiler_StaticMethods__setAttribute$$ = function $$JSCompiler_StaticMethods__setAttribute$$$($JSCompiler_StaticMethods__setAttribute$self$$, $element$$10$$, $attributeKey$$1$$, $value$$46$$) {
  $element$$10$$.setAttribute($JSCompiler_StaticMethods__setAttribute$self$$.$m_resources$.getMappedAttribute($attributeKey$$1$$), $value$$46$$)
};
D.$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$4$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$2$$, $colCount$$1$$, $callbacks$$4_successCallback$$27$$) {
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, $rowCount$$2$$ == D.$JSCompiler_alias_NULL$$ && ($rowCount$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "row")), $colCount$$1$$ == D.$JSCompiler_alias_NULL$$ && ($colCount$$1$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "column")), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$2$$}, $columnRange_databody$$4$$ = {axis:"column", start:$colStart$$, 
  count:$colCount$$1$$, databody:$columnRange_databody$$4$$, scroller:$scroller$$7$$}, $callbacks$$4_successCallback$$27$$ = $callbacks$$4_successCallback$$27$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$4_successCallback$$27$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$4_successCallback$$27$$.success : this.$handleCellsFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$4$$], {success:$callbacks$$4_successCallback$$27$$, 
  error:this.$handleCellsFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$isDraggable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$, $cellRange$$3_databody$$5$$, $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$, $headerSet$$3_rows$$1$$, $i$$12_i$$inline_720_obj$$28_topHotspot$$) {
  var $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$, $scrollerContentHeight$$inline_727_totalColumnCount$$, $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$, $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$, 
  $columnRange$$3_inner_viewportTop$$inline_701$$, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$, $columnCount$$1_columnStartPixel$$inline_699$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$, $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$, $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$, $resizer$$1_viewportBottom$$inline_702$$, 
  $referenceRowHeader$$, $avgWidth$$inline_719_isAppend$$3$$, $headerFragment_renderer$$inline_714$$, $j$$2_rowheaders_viewportLeft$$inline_703$$, $avgWidth$$1_columnBandingInterval$$inline_715$$, $horizontalGridlines$$inline_716_rowheadersContent$$, $rowHeaderCount_verticalGridlines$$inline_717$$;
  $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerContentHeight$$inline_727_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if($JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ === D.$JSCompiler_alias_VOID$$) {
    $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ = D.$JSCompiler_alias_FALSE$$;
    $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ = $cellRange$$3_databody$$5$$[0].start;
    $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ = $cellRange$$3_databody$$5$$[1].start;
    $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = this.$m_fetching$.cells;
    $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ = $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$.row;
    $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$.column;
    if(!($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ == $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ && $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ == $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$)) {
      return
    }
    if($JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ = D.$JSCompiler_alias_TRUE$$ : ($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ = $cellRange$$3_databody$$5$$[0].start, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ = 
      $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("row"), $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ + $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = 
      $cellRange$$3_databody$$5$$[1].start, $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ = $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("column"), $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ *= this.$m_avgRowHeight$, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ *= this.$m_avgRowHeight$, $columnCount$$1_columnStartPixel$$inline_699$$ = 
      this.$m_avgColWidth$ * $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ + $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$), $columnRange$$3_inner_viewportTop$$inline_701$$ = this.$m_currentScrollTop$, $resizer$$1_viewportBottom$$inline_702$$ = this.$m_currentScrollTop$ + 
      (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $j$$2_rowheaders_viewportLeft$$inline_703$$ = this.$m_currentScrollLeft$, $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$ = this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && (this.$m_dataSource$.getCount("row") == $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ && 
      $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ < $resizer$$1_viewportBottom$$inline_702$$) && ($columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $resizer$$1_viewportBottom$$inline_702$$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && (this.$m_dataSource$.getCount("column") == $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ && 
      $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ < $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$) && ($columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$), $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ = $columnRange$$3_inner_viewportTop$$inline_701$$ >= $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ && 
      $resizer$$1_viewportBottom$$inline_702$$ <= $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ && $j$$2_rowheaders_viewportLeft$$inline_703$$ >= $columnCount$$1_columnStartPixel$$inline_699$$ && $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$ <= $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$), $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ = 
      !$JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$
    }
    if($JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$) {
      this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
      this.$m_captureScrolling$ || (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ = $cellRange$$3_databody$$5$$[0];
  $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.start;
  $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ = $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("row");
  $headerSet$$3_rows$$1$$ && ($rowHeaderCount_verticalGridlines$$inline_717$$ = $headerSet$$3_rows$$1$$.getCount("row"));
  $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$ = 0 < $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ && ($JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ > this.$m_endRow$ || $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ + $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ <= this.$m_startRow$);
  if(0 == $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && 0 < $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.count || $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRow$ + $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ + 
  1 >= $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ || $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ < $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.count) {
    this.$m_stopRowFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $columnRange$$3_inner_viewportTop$$inline_701$$ = $cellRange$$3_databody$$5$$[1];
  $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $columnRange$$3_inner_viewportTop$$inline_701$$.start;
  $columnCount$$1_columnStartPixel$$inline_699$$ = $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("column");
  $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = 0 < $columnCount$$1_columnStartPixel$$inline_699$$ && ($columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ > this.$m_endCol$ || $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ + $columnCount$$1_columnStartPixel$$inline_699$$ == this.$m_startCol$);
  if(0 == $columnCount$$1_columnStartPixel$$inline_699$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && 0 < $columnRange$$3_inner_viewportTop$$inline_701$$.count || $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endCol$ + $columnCount$$1_columnStartPixel$$inline_699$$ + 1 >= $scrollerContentHeight$$inline_727_totalColumnCount$$ || 
  $columnCount$$1_columnStartPixel$$inline_699$$ < $columnRange$$3_inner_viewportTop$$inline_701$$.count) {
    this.$m_stopColumnFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $cellRange$$3_databody$$5$$ = this.$m_databody$;
  $j$$2_rowheaders_viewportLeft$$inline_703$$ = this.$m_rowHeader$;
  $cellRange$$3_databody$$5$$ == D.$JSCompiler_alias_NULL$$ && ($cellRange$$3_databody$$5$$ = $columnRange$$3_inner_viewportTop$$inline_701$$.databody);
  $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ = this.$m_scroller$;
  $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ == D.$JSCompiler_alias_NULL$$ && ($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ = $columnRange$$3_inner_viewportTop$$inline_701$$.scroller);
  $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.hasChildNodes() ? $columnRange$$3_inner_viewportTop$$inline_701$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.firstChild : ($columnRange$$3_inner_viewportTop$$inline_701$$ = window.document.createElement("div"), $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.appendChild($columnRange$$3_inner_viewportTop$$inline_701$$));
  $cellRange$$3_databody$$5$$.hasChildNodes() ? ($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ = $cellRange$$3_databody$$5$$.firstChild, $resizer$$1_viewportBottom$$inline_702$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.firstChild) : ($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$ = 
  window.document.createElement("div"), $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.className = this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), $resizer$$1_viewportBottom$$inline_702$$ = window.document.createElement("div"), $resizer$$1_viewportBottom$$inline_702$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($resizer$$1_viewportBottom$$inline_702$$, 
  1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$1_viewportBottom$$inline_702$$, 0), $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.appendChild($resizer$$1_viewportBottom$$inline_702$$));
  if($fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$ || $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$) {
    ($avgWidth$$inline_719_isAppend$$3$$ = !$JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ && $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ >= this.$m_startRow$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? ($bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.childNodes[$JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ - 
    this.$m_startRow$], $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ = this.$m_endRowPixel$) : $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ ? ($bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.childNodes[$JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ - 
    this.$m_startRow$ + 1], $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$, "top")) : $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ = this.$m_startRowPixel$;
    $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$ = window.document.createDocumentFragment();
    $headerSet$$3_rows$$1$$ && ($horizontalGridlines$$inline_716_rowheadersContent$$ = $j$$2_rowheaders_viewportLeft$$inline_703$$.firstChild, $referenceRowHeader$$ = $horizontalGridlines$$inline_716_rowheadersContent$$.childNodes[$JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ - this.$m_startRow$ + 1], $headerFragment_renderer$$inline_714$$ = (0,D.$JSCompiler_StaticMethods_buildRowHeaders$$)(this, D.$JSCompiler_alias_NULL$$, $headerSet$$3_rows$$1$$, 
    0, -1, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$));
    $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$, $avgWidth$$inline_719_isAppend$$3$$ || $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$, $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, 
    $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$);
    $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$.totalRowHeight;
    $avgWidth$$1_columnBandingInterval$$inline_715$$ = $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$.avgWidth;
    $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ = $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$ / $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$;
    if($headerSet$$3_rows$$1$$) {
      for($j$$2_rowheaders_viewportLeft$$inline_703$$ = 0;$j$$2_rowheaders_viewportLeft$$inline_703$$ < $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$.childNodes.length;$j$$2_rowheaders_viewportLeft$$inline_703$$++) {
        $headerFragment_renderer$$inline_714$$.childNodes[$j$$2_rowheaders_viewportLeft$$inline_703$$].style.top = $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$.childNodes[$j$$2_rowheaders_viewportLeft$$inline_703$$].style.top
      }
    }
    if($avgWidth$$inline_719_isAppend$$3$$) {
      if($i$$12_i$$inline_720_obj$$28_topHotspot$$ && $i$$12_i$$inline_720_obj$$28_topHotspot$$ == D.$JSCompiler_alias_TRUE$$ && (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)()) {
        (0,D.$JSCompiler_StaticMethods__insertRowsWithAnimation$$)(this, $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$, $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$, $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$, 
        $horizontalGridlines$$inline_716_rowheadersContent$$, $headerFragment_renderer$$inline_714$$, $referenceRowHeader$$, $avgWidth$$inline_719_isAppend$$3$$)
      }else {
        if($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.appendChild($fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$), -1 != this.$m_endRow$ && 0 != $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ && ($bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.childNodes[this.$m_endRow$ - 
        this.$m_startRow$ + 1], $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ != D.$JSCompiler_alias_NULL$$)) {
          $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ = $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$.childNodes;
          for($i$$12_i$$inline_720_obj$$28_topHotspot$$ = 0;$i$$12_i$$inline_720_obj$$28_topHotspot$$ < $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$.length;$i$$12_i$$inline_720_obj$$28_topHotspot$$ += 1) {
            $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$[$i$$12_i$$inline_720_obj$$28_topHotspot$$].style.borderBottomStyle = ""
          }
        }
      }
      this.$m_endRow$ = $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ + $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ - 1;
      this.$m_endRowPixel$ += $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$;
      $cellRange$$3_databody$$5$$.hasChildNodes() || ($cellRange$$3_databody$$5$$.appendChild($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$), this.$isDraggable$() && ($i$$12_i$$inline_720_obj$$28_topHotspot$$ = window.document.createElement("div"), $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ = window.document.createElement("div"), $cellRange$$3_databody$$5$$.appendChild($i$$12_i$$inline_720_obj$$28_topHotspot$$), 
      $cellRange$$3_databody$$5$$.appendChild($bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$)));
      $headerSet$$3_rows$$1$$ && ($horizontalGridlines$$inline_716_rowheadersContent$$.appendChild($headerFragment_renderer$$inline_714$$), this.$m_endRowHeader$ = $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ + $rowHeaderCount_verticalGridlines$$inline_717$$ - 1, this.$m_endRowHeaderPixel$ += $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)
    }else {
      $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ ? ($i$$12_i$$inline_720_obj$$28_topHotspot$$ && $i$$12_i$$inline_720_obj$$28_topHotspot$$ == D.$JSCompiler_alias_TRUE$$ && (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)() ? (0,D.$JSCompiler_StaticMethods__insertRowsWithAnimation$$)(this, $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$, $fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$, 
      $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$, $horizontalGridlines$$inline_716_rowheadersContent$$, $headerFragment_renderer$$inline_714$$, $referenceRowHeader$$) : ($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.insertBefore($fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$, 
      $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$), $headerSet$$3_rows$$1$$ && $horizontalGridlines$$inline_716_rowheadersContent$$.insertBefore($headerFragment_renderer$$inline_714$$, $referenceRowHeader$$)), $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, 
      this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)), this.$m_endRow$ += $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$, this.$m_endRowPixel$ += $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$, $headerSet$$3_rows$$1$$ && ($JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ < this.$m_startRowHeader$ && (this.$m_startRowHeader$ = $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, 
      this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)), this.$m_endRowHeader$ += $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$, this.$m_endRowHeaderPixel$ += $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$), !$i$$12_i$$inline_720_obj$$28_topHotspot$$ || !(0,D.$JSCompiler_StaticMethods_supportsTransitions$$)() ? ((0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$, 
      $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$), $headerSet$$3_rows$$1$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRowHeader$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)) : (-1 != $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ * 
      $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$), $headerSet$$3_rows$$1$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_rowHeader$, $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$)) : ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, this.$m_endRowPixel$), $headerSet$$3_rows$$1$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_rowHeader$, 
      this.$m_endRowPixel$)), (0,D.$JSCompiler_StaticMethods_pushRowsDownWithAnimation$$)($bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_pushRowsDownWithAnimation$$)($referenceRowHeader$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$))) : ($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.insertBefore($fragment$$3_rowRangeNeedsUpdate_viewportRight$$inline_704$$, 
      $resizer$$1_viewportBottom$$inline_702$$.nextSibling), this.$m_startRow$ -= $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$))
    }
  }else {
    if($columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ && ($headerSet$$3_rows$$1$$ = $databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$.childNodes, $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ == $headerSet$$3_rows$$1$$.length - 1)) {
      $headerFragment_renderer$$inline_714$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
      $avgWidth$$1_columnBandingInterval$$inline_715$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
      $horizontalGridlines$$inline_716_rowheadersContent$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$);
      $rowHeaderCount_verticalGridlines$$inline_717$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$);
      for($i$$12_i$$inline_720_obj$$28_topHotspot$$ = 0;$i$$12_i$$inline_720_obj$$28_topHotspot$$ < $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$;$i$$12_i$$inline_720_obj$$28_topHotspot$$ += 1) {
        $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ = $headerSet$$3_rows$$1$$[$i$$12_i$$inline_720_obj$$28_topHotspot$$ + 1], $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$, $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ + 
        $i$$12_i$$inline_720_obj$$28_topHotspot$$, $headerFragment_renderer$$inline_714$$, D.$JSCompiler_alias_FALSE$$, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$, $i$$12_i$$inline_720_obj$$28_topHotspot$$ == $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$ - 1, $avgWidth$$1_columnBandingInterval$$inline_715$$, $horizontalGridlines$$inline_716_rowheadersContent$$, $rowHeaderCount_verticalGridlines$$inline_717$$), 
        $avgWidth$$inline_719_isAppend$$3$$ = $bottomHotspot_prev$$1_referenceRow$$1_returnVal$$inline_721_row$$inline_718$$.avgWidth
      }
      $avgWidth$$1_columnBandingInterval$$inline_715$$ = $avgWidth$$inline_719_isAppend$$3$$
    }
  }
  $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$ = -1 != $scrollerContentHeight$$inline_727_totalColumnCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerContentHeight$$inline_727_totalColumnCount$$ * $avgWidth$$1_columnBandingInterval$$inline_715$$ : this.$m_endColPixel$;
  if($avgWidth$$1_columnBandingInterval$$inline_715$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgColWidth$ || this.$m_avgColWidth$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_columnBandingInterval$$inline_715$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnRange$$3_inner_viewportTop$$inline_701$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerContentHeight$$inline_727_totalColumnCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnRange$$3_inner_viewportTop$$inline_701$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)
    }
  }
  $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ : this.$m_endRowPixel$;
  if($addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgRowHeight$ || this.$m_avgRowHeight$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$3_inner_viewportTop$$inline_701$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$) || $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ != 
    (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$3_inner_viewportTop$$inline_701$$, $cellSet$$1_totalColumnWidth$$1_totalRowHeight$$1$$)
    }
  }
  $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ && ($columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_columnStartPixel$$inline_699$$ : this.$m_endCol$ = $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ + $columnCount$$1_columnStartPixel$$inline_699$$ - 1);
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), this.$m_initialized$ ? (this.$m_scroller$ == D.$JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$), $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$), $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ = this.$m_scroller$.firstChild, $scrollerContentHeight$$inline_727_totalColumnCount$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$), $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$), 
  $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ && $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ == $addResult_avgHeight_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_top$$4$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ && $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ == 
  $scrollerContentHeight$$inline_727_totalColumnCount$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ || this.$m_endRowHeaderPixel$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$5$$) && (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$) > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$5$$) ? (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this) : 
  (this.$m_scrollWidth$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cellRange$$3_databody$$5$$), this.$m_scrollHeight$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent_requestRowStart$$inline_687_rowRange$$3_rowStart$$inline_693_rowStartPixel$$inline_697_scroller$$8$$) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$5$$))) : 
  ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ || (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)), this.$m_scrollIndexAfterFetch$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, this.$m_scrollIndexAfterFetch$) : this.$m_scrollHeaderAfterFetch$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)(this, this.$m_scrollHeaderAfterFetch$) : 
  (this.$highlightActive$(), (0,D.$JSCompiler_StaticMethods__highlightActiveHeader$$)(this)), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (this.$m_databody$ == D.$JSCompiler_alias_NULL$$ && (this.$m_databody$ = $cellRange$$3_databody$$5$$), (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$, $JSCompiler_inline_result$$296_JSCompiler_temp$$295_responseRowStart$$inline_684_rowCount$$inline_705_rowStart$$2$$ + 
  $columnCount$$inline_706_responseColumnStart$$inline_685_rowCount$$4$$)), $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ = this.$m_resources$.getTranslatedText("accessibleSummaryExact", {rownum:this.$m_endRow$ + 1, colnum:this.$m_endCol$ + 1}), this.$m_dataSource$.getExpandedKeys && ($scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$ = this.$m_resources$.getTranslatedText("accessibleSummaryExpanded", {num:this.$m_dataSource$.getExpandedKeys().length}), 
  $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ = $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ + ". " + $scrollerWidth$$inline_725_summaryExpanded$$inline_732_totalRowCount$$), $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ = $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$ + ". " + this.$m_resources$.getTranslatedText("accessibleInitialFocus"), 
  this.$m_accSummary$.textContent = $JSCompiler_inline_result$$173_rowInsert$$2_scrollerHeight$$inline_724_summary$$inline_731$$, (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") && ($cellRange$$3_databody$$5$$.style.webkitTransform = "translate3d(0, 0, 0)", this.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && (this.$m_rowHeader$.style.webkitTransform = "translate3d(0, 0, 0)"), this.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && (this.$m_colHeader$.style.webkitTransform = 
  "translate3d(0, 0, 0)")))
};
D.$JSCompiler_StaticMethods__insertRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__insertRowsWithAnimation$$$($JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$, $databodyContent$$1$$, $fragment$$4$$, $referenceRow$$2$$, $rowStart$$3_tops$$, $avgHeight$$1$$, $rowheadersContent$$1$$, $headerFragment$$1$$, $referenceRowHeader$$1$$, $isAppend$$4$$) {
  var $i$$13$$, $j$$3$$, $shift$$, $beforeCount$$, $startRowIdx$$, $z_index$$, $isRowHeader$$ = D.$JSCompiler_alias_FALSE$$;
  $startRowIdx$$ = $rowStart$$3_tops$$ - $JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$.$m_startRow$;
  $beforeCount$$ = $startRowIdx$$ + $fragment$$4$$.childNodes.length;
  $shift$$ = $avgHeight$$1$$ * $fragment$$4$$.childNodes.length;
  $rowStart$$3_tops$$ = [];
  -1 != $JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$.$m_endRowHeader$ && ($isRowHeader$$ = D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$1$$.childNodes[$startRowIdx$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E3);
  $isRowHeader$$ && (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($rowheadersContent$$1$$.childNodes[$startRowIdx$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E3);
  for($j$$3$$ = 0;$j$$3$$ < $fragment$$4$$.childNodes.length;$j$$3$$++) {
    $rowStart$$3_tops$$.push($fragment$$4$$.childNodes[$j$$3$$].style.top.split("px")[0] - ($startRowIdx$$ - 1) * $avgHeight$$1$$)
  }
  for($JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$ = 0;$JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$ < $fragment$$4$$.childNodes.length;$JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$++) {
    (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($fragment$$4$$.childNodes[$JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$], 0, 0, "linear", 0, "-" + $rowStart$$3_tops$$[$JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$]), $isRowHeader$$ && (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($headerFragment$$1$$.childNodes[$JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$], 0, 0, "linear", 0, "-" + $rowStart$$3_tops$$[$JSCompiler_StaticMethods__insertRowsWithAnimation$self_jk$$])
  }
  $isAppend$$4$$ ? ($databodyContent$$1$$.appendChild($fragment$$4$$), $isRowHeader$$ && $rowheadersContent$$1$$.appendChild($headerFragment$$1$$)) : ($databodyContent$$1$$.insertBefore($fragment$$4$$, $referenceRow$$2$$), $isRowHeader$$ && $rowheadersContent$$1$$.insertBefore($headerFragment$$1$$, $referenceRowHeader$$1$$));
  (0,window.setTimeout)(function() {
    for($j$$3$$ = $startRowIdx$$;$j$$3$$ <= $beforeCount$$;$j$$3$$++) {
      (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($databodyContent$$1$$.childNodes[$j$$3$$], "500ms", 0, "ease-out", 0, 0), $isRowHeader$$ && (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($rowheadersContent$$1$$.childNodes[$j$$3$$], "500ms", 0, "ease-out", 0, 0)
    }
    $databodyContent$$1$$.childNodes[$beforeCount$$].addEventListener("transitionend", function() {
      (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
      $z_index$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index");
      (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
      (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
      for($i$$13$$ = 1;$i$$13$$ < $databodyContent$$1$$.childElementCount;$i$$13$$++) {
        $databodyContent$$1$$.children[$i$$13$$].style[(0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform")] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$1$$.childNodes[$startRowIdx$$], $z_index$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($databodyContent$$1$$.childNodes[$i$$13$$]), this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$))
      }
      if($isRowHeader$$) {
        for($i$$13$$ = 1;$i$$13$$ < $rowheadersContent$$1$$.childElementCount;$i$$13$$++) {
          $rowheadersContent$$1$$.children[$i$$13$$].style[(0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform")] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($rowheadersContent$$1$$.childNodes[$startRowIdx$$], $z_index$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($rowheadersContent$$1$$.childNodes[$i$$13$$]))
        }
      }
      $isAppend$$4$$ || ((0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$2$$, $shift$$), $isRowHeader$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRowHeader$$1$$, $shift$$))
    }, D.$JSCompiler_alias_FALSE$$)
  }, 0)
};
D.$JSCompiler_StaticMethods_pushRowsDownWithAnimation$$ = function $$JSCompiler_StaticMethods_pushRowsDownWithAnimation$$$($row$$3$$, $adjustment$$) {
  for(;$row$$3$$;) {
    (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$3$$, "530ms", "0ms", "ease-out", 0, $adjustment$$), $row$$3$$ = $row$$3$$.nextSibling
  }
};
D.$JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$5$$, $isAppendOrInsert$$, $top$$5$$, $rowStart$$5$$, $rowCount$$6$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
  var $renderer$$4$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$5$$, $avgWidth$$3_index$$59$$, $totalRowHeight$$2$$, $height$$17_returnVal$$4$$, $i$$15$$;
  $renderer$$4$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for($i$$15$$ = $totalRowHeight$$2$$ = 0;$i$$15$$ < $rowCount$$6$$;$i$$15$$ += 1) {
    $avgWidth$$3_index$$59$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + $i$$15$$ : $rowStart$$5$$ + ($rowCount$$6$$ - 1 - $i$$15$$), $row$$5$$ = window.document.createElement("div"), $row$$5$$.className = $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), 1 === window.Math.floor($avgWidth$$3_index$$59$$ / $rowBandingInterval$$) % 2 && ($row$$5$$.className += " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded")), $JSCompiler_StaticMethods__addRows$self$$.$m_root$.appendChild($row$$5$$), 
    $height$$17_returnVal$$4$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$3$$, $row$$5$$, $avgWidth$$3_index$$59$$, $renderer$$4$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$3$$, $i$$15$$ == $rowCount$$6$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $top$$5$$), $avgWidth$$3_index$$59$$ = $height$$17_returnVal$$4$$.avgWidth, $height$$17_returnVal$$4$$ = $height$$17_returnVal$$4$$.height, 
    $totalRowHeight$$2$$ += $height$$17_returnVal$$4$$, $isAppendOrInsert$$ ? ($row$$5$$.style.top = $top$$5$$ + "px", $top$$5$$ += $height$$17_returnVal$$4$$, $fragment$$5$$.appendChild($row$$5$$)) : ($top$$5$$ -= $height$$17_returnVal$$4$$, $row$$5$$.style.top = $top$$5$$ + "px", $fragment$$5$$.insertBefore($row$$5$$, $fragment$$5$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3_index$$59$$, totalRowHeight:$totalRowHeight$$2$$, top:$top$$5$$}
};
D.$JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$6$$, $adjustment$$1$$) {
  for(;$row$$6$$;) {
    $row$$6$$.style.top = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$6$$, "top") + $adjustment$$1$$ + "px", $row$$6$$ = $row$$6$$.nextSibling
  }
};
D.$JSCompiler_StaticMethods_getRowHeaderWidth$$ = function $$JSCompiler_StaticMethods_getRowHeaderWidth$$$($JSCompiler_StaticMethods_getRowHeaderWidth$self$$) {
  return-1 === $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_endRowHeader$ ? 0 : $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$
};
D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$ = function $$JSCompiler_StaticMethods_getColumnHeaderHeight$$$($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$) {
  return-1 === $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_endColHeader$ ? 0 : $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_colHeaderHeight$
};
D.$JSCompiler_StaticMethods_getRowBottom$$ = function $$JSCompiler_StaticMethods_getRowBottom$$$($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$, $row$$8$$, $bottom$$1_top$$8$$) {
  var $colHeaderHeight$$3$$;
  $colHeaderHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$);
  if($bottom$$1_top$$8$$ != D.$JSCompiler_alias_NULL$$) {
    return $colHeaderHeight$$3$$ + $bottom$$1_top$$8$$
  }
  $bottom$$1_top$$8$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$8$$, "top");
  $JSCompiler_StaticMethods_getRowBottom$self_height$$18$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$, $row$$8$$);
  return!(0,window.isNaN)($bottom$$1_top$$8$$) && !(0,window.isNaN)($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$) ? $colHeaderHeight$$3$$ + $bottom$$1_top$$8$$ + $JSCompiler_StaticMethods_getRowBottom$self_height$$18$$ : $colHeaderHeight$$3$$
};
D.$JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$4$$, $row$$9$$, $rowIndex$$, $renderer$$5$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $bottom$$2$$) {
  var $isAppend$$5$$, $cellContent$$, $firstColumn$$, $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$, $currentLeft$$, $dir$$5$$, $totalWidth$$, $columnCount$$2$$, $cellData_content$$1$$, $cellMetadata_metadata$$inline_737_shimHeader$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$, $j$$4$$, $cell$$1$$, $columnIndex_textWrapper$$1$$, $selectionAffordanceAppend$$, $height$$19_rowKey$$;
  $isAppend$$5$$ = $columnStart$$4$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$9$$.firstChild;
  $currentLeft$$ = $isRowFetch$$ || !$isAppend$$5$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_addCellsToRow$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$9$$.lastChild, $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) && ($selectionAffordanceAppend$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$9$$.children[$row$$9$$.children.length - 2], $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) ? $row$$9$$.children[$row$$9$$.children.length - 
  2] : $row$$9$$.lastChild);
  $dir$$5$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  $totalWidth$$ = 0;
  $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
  for($j$$4$$ = 0;$j$$4$$ < $columnCount$$2$$;$j$$4$$ += 1) {
    $columnIndex_textWrapper$$1$$ = $isAppend$$5$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$4$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$4$$);
    $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ = {row:$rowIndex$$, column:$columnIndex_textWrapper$$1$$};
    $cellData_content$$1$$ = $cellSet$$4$$.getData($indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$);
    $cellMetadata_metadata$$inline_737_shimHeader$$ = $cellSet$$4$$.getMetadata($indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$);
    $cell$$1$$ = window.document.createElement("div");
    $cell$$1$$.setAttribute("tabIndex", -1);
    $cellContent$$ = window.document.createElement("div");
    $cellContent$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cellcontent");
    $cell$$1$$.appendChild($cellContent$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$ = $cellData_content$$1$$;
    var $cellContext$$inline_739$$ = D.$JSCompiler_alias_VOID$$, $prop$$inline_740$$ = D.$JSCompiler_alias_VOID$$, $cellContext$$inline_739$$ = {};
    $cellContext$$inline_739$$.parentElement = $cell$$1$$.firstChild;
    $cellContext$$inline_739$$.indexes = $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$;
    $cellContext$$inline_739$$.data = $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$;
    $cellContext$$inline_739$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$;
    $cellContext$$inline_739$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.$m_dataSource$;
    for($prop$$inline_740$$ in $cellMetadata_metadata$$inline_737_shimHeader$$) {
      $cellMetadata_metadata$$inline_737_shimHeader$$.hasOwnProperty($prop$$inline_740$$) && ($cellContext$$inline_739$$[$prop$$inline_740$$] = $cellMetadata_metadata$$inline_737_shimHeader$$[$prop$$inline_740$$])
    }
    $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$, $cellContext$$inline_739$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$ = $cellContext$$inline_739$$;
    $cell$$1$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, "r" + $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.keys.row + "c" + $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.keys.column);
    (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$) == D.$JSCompiler_alias_NULL$$ && ($height$$19_rowKey$$ = $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.keys.row, (0,D.$JSCompiler_StaticMethods__setKey$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$, $height$$19_rowKey$$), -1 == $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endRowHeader$ ? ($cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$ = 
    (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, "row", $rowIndex$$, D.$JSCompiler_alias_NULL$$, {key:$height$$19_rowKey$$}, D.$JSCompiler_alias_NULL$$, 0, 0, 1), $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("row", $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$), $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$ = 
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("row", $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$), $cellMetadata_metadata$$inline_737_shimHeader$$ = window.document.createElement("div"), $cellMetadata_metadata$$inline_737_shimHeader$$.style.cssText = $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellMetadata_metadata$$inline_737_shimHeader$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("row") + 
    " " + $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$, $height$$19_rowKey$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getRowHeight$($cellMetadata_metadata$$inline_737_shimHeader$$, $height$$19_rowKey$$)) : $height$$19_rowKey$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getRowHeight$($row$$9$$, $height$$19_rowKey$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($row$$9$$, $height$$19_rowKey$$));
    $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$);
    $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$1$$.style.cssText = $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$);
    "" != $cell$$1$$.style.height && ($cell$$1$$.style.height = "");
    "" != $cell$$1$$.style.width && ($cell$$1$$.style.width = "");
    $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$ = 1 === window.Math.floor($columnIndex_textWrapper$$1$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$);
    $cell$$1$$.className = $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ != D.$JSCompiler_alias_NULL$$ ? $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$ + " " + $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ : $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$;
    -1 == $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColHeader$ && 0 == $rowIndex$$ && !$JSCompiler_StaticMethods_addCellsToRow$self$$.$m_initialized$ ? ($cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, "column", $columnIndex_textWrapper$$1$$, D.$JSCompiler_alias_NULL$$, {key:$JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.keys.column}, 
    D.$JSCompiler_alias_NULL$$, 0, 0, 1), $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("column", $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$), $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("column", $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$), $cellMetadata_metadata$$inline_737_shimHeader$$ = 
    window.document.createElement("div"), $cellMetadata_metadata$$inline_737_shimHeader$$.style.cssText = $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellMetadata_metadata$$inline_737_shimHeader$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("colheadercell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("headercell") + " " + $cellStyleClass_data$$inline_736_shimHeaderContext_styleClass$$2$$, $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ = 
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$getColumnWidth$($cellMetadata_metadata$$inline_737_shimHeader$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.keys.column)) : $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getColumnWidth$($cell$$1$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$.keys.column);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($cell$$1$$, $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$);
    if("hidden" === $verticalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $columnIndex_textWrapper$$1$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$) + $currentLeft$$ + $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getWidth()) {
      "left" === $dir$$5$$ ? $cell$$1$$.style.borderRightStyle = "none" : $cell$$1$$.style.borderLeftStyle = "none"
    }
    "hidden" === $horizontalGridlines$$3$$ ? $cell$$1$$.style.borderBottomStyle = "none" : (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $rowIndex$$) && ($bottom$$2$$ != D.$JSCompiler_alias_NULL$$ && $columnIndex_textWrapper$$1$$ == $columnStart$$4$$ && ($bottom$$2$$ += (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$9$$)), (0,D.$JSCompiler_StaticMethods_getRowBottom$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$, $bottom$$2$$) >= 
    $JSCompiler_StaticMethods_addCellsToRow$self$$.getHeight() && ($cell$$1$$.style.borderBottomStyle = "none"));
    $isAppend$$5$$ || $isRowFetch$$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$1$$, $currentLeft$$, $dir$$5$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$1$$, $currentLeft$$ - $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$, $dir$$5$$);
    $isAppend$$5$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$9$$.insertBefore($cell$$1$$, $selectionAffordanceAppend$$) : $row$$9$$.appendChild($cell$$1$$), $currentLeft$$ += $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$) : ($row$$9$$.insertBefore($cell$$1$$, $firstColumn$$), $firstColumn$$ = $cell$$1$$, $currentLeft$$ -= $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$);
    $renderer$$5$$ != D.$JSCompiler_alias_NULL$$ ? ($cellData_content$$1$$ = $renderer$$5$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_734_cellContext$$1$$), $cellData_content$$1$$ != D.$JSCompiler_alias_NULL$$ && ($cellData_content$$1$$.parentNode === D.$JSCompiler_alias_NULL$$ || $cellData_content$$1$$.parentNode instanceof window.DocumentFragment ? $cellContent$$.appendChild($cellData_content$$1$$) : $cellData_content$$1$$.parentNode == 
    D.$JSCompiler_alias_NULL$$ && $cellData_content$$1$$.toString && ($columnIndex_textWrapper$$1$$ = window.document.createElement("span"), $columnIndex_textWrapper$$1$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$1$$.appendChild(window.document.createTextNode($cellData_content$$1$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$1$$))), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($cell$$1$$)) : 
    ($cellData_content$$1$$ == D.$JSCompiler_alias_NULL$$ && ($cellData_content$$1$$ = ""), $columnIndex_textWrapper$$1$$ = window.document.createElement("span"), $columnIndex_textWrapper$$1$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$1$$.appendChild(window.document.createTextNode($cellData_content$$1$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$1$$));
    $updateColumnRangeInfo$$ && ($isAppend$$5$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$, $totalWidth$$ += $indexes$$8_indexes$$inline_735_inlineStyle$$1_inlineStyleClass_width$$17$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? {avgWidth:$totalWidth$$ / $columnCount$$2$$, height:$height$$19_rowKey$$} : {avgWidth:D.$JSCompiler_alias_NULL$$, height:$height$$19_rowKey$$}
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$($errorStatus$$, $cellRange$$4$$) {
  var $rowRange$$4$$, $columnRange$$4$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  this.$m_databody$.firstChild == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this) : ($rowRange$$4$$ = $cellRange$$4$$[0], $columnRange$$4$$ = $cellRange$$4$$[1], $columnRange$$4$$.start + $columnRange$$4$$.count - 1 > this.$m_endCol$ && (this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = D.$JSCompiler_alias_TRUE$$), $rowRange$$4$$.start + $rowRange$$4$$.count - 1 > this.$m_endRow$ && (this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$5_msg$$;
  $left$$5_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$m_resources$.getTranslatedText("msgFetchingData");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.textContent = $left$$5_msg$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$5_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$5_msg$$ + 
  "px")
};
D.$JSCompiler_StaticMethods_hideStatusText$$ = function $$JSCompiler_StaticMethods_hideStatusText$$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none"
};
D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($node$$3$$, $skipTabIndexCheck$$) {
  var $inputElems$$, $nodes$$, $elem$$5$$, $nodeCount$$, $inputRegExp$$, $i$$16$$;
  $inputElems$$ = [];
  if(window.document.evaluate) {
    $nodes$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$3$$, D.$JSCompiler_alias_NULL$$, window.XPathResult.ANY_TYPE, D.$JSCompiler_alias_NULL$$);
    for($elem$$5$$ = $nodes$$.iterateNext();$elem$$5$$;) {
      !$elem$$5$$.disabled && ($skipTabIndexCheck$$ || !$elem$$5$$.tabIndex || 0 < $elem$$5$$.tabIndex) && $inputElems$$.push($elem$$5$$), $elem$$5$$ = $nodes$$.iterateNext()
    }
  }else {
    $nodes$$ = $node$$3$$.getElementsByTagName("*");
    $nodeCount$$ = $nodes$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$16$$ = 0;$i$$16$$ < $nodeCount$$;$i$$16$$ += 1) {
      $elem$$5$$ = $nodes$$[$i$$16$$], $elem$$5$$.tagName.match($inputRegExp$$) && (!$elem$$5$$.disabled && ($skipTabIndexCheck$$ || !$elem$$5$$.tabIndex || 0 < $elem$$5$$.tabIndex)) && $inputElems$$.push($elem$$5$$)
    }
  }
  return $inputElems$$
};
D.$JSCompiler_StaticMethods__disableAllFocusableElements$$ = function $$JSCompiler_StaticMethods__disableAllFocusableElements$$$($cell$$2_focusElems$$) {
  var $i$$17$$;
  $cell$$2_focusElems$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($cell$$2_focusElems$$);
  for($i$$17$$ = 0;$i$$17$$ < $cell$$2_focusElems$$.length;$i$$17$$++) {
    $cell$$2_focusElems$$[$i$$17$$].setAttribute("tabIndex", -1)
  }
};
D.$JSCompiler_StaticMethods__enableAllFocusableElements$$ = function $$JSCompiler_StaticMethods__enableAllFocusableElements$$$($cell$$3_focusElems$$1$$) {
  var $i$$18$$;
  $cell$$3_focusElems$$1$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($cell$$3_focusElems$$1$$, D.$JSCompiler_alias_TRUE$$);
  for($i$$18$$ = 0;$i$$18$$ < $cell$$3_focusElems$$1$$.length;$i$$18$$++) {
    -1 == $cell$$3_focusElems$$1$$[$i$$18$$].getAttribute("tabIndex") && $cell$$3_focusElems$$1$$[$i$$18$$].removeAttribute("tabIndex")
  }
};
D.$JSCompiler_StaticMethods__setFocusToFirstFocusableElement$$ = function $$JSCompiler_StaticMethods__setFocusToFirstFocusableElement$$$($elem$$8_elems$$) {
  $elem$$8_elems$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($elem$$8_elems$$, D.$JSCompiler_alias_TRUE$$);
  return 0 < $elem$$8_elems$$.length ? ($elem$$8_elems$$[0].focus(), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isActionableMode$$ = function $$JSCompiler_StaticMethods_isActionableMode$$$($JSCompiler_StaticMethods_isActionableMode$self$$) {
  return"actionable" == $JSCompiler_StaticMethods_isActionableMode$self$$.$m_keyMode$
};
D.$JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$1$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$1$$ ? "actionable" : "navigation";
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setActionableMode$self$$, "actionable" === $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode")
};
D.$DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$4_scroller$$9$$) {
  if(!(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$)) {
    var $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$;
    $event$$4_scroller$$9$$ || ($event$$4_scroller$$9$$ = window.event);
    $event$$4_scroller$$9$$ = $event$$4_scroller$$9$$.target ? $event$$4_scroller$$9$$.target : $event$$4_scroller$$9$$.srcElement;
    $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$ = this.$m_utils$;
    var $elemWidth$$inline_745$$;
    $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$.platform ? $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$ = window.Math.abs($event$$4_scroller$$9$$.scrollLeft) : 
    ($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$.$dataGrid$.$m_scroller$.firstChild), $elemWidth$$inline_745$$ = $event$$4_scroller$$9$$.clientWidth, $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$ = window.Math.max(0, $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$ - 
    $elemWidth$$inline_745$$ - $event$$4_scroller$$9$$.scrollLeft)) : $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$ = $event$$4_scroller$$9$$.scrollLeft;
    this.scrollTo($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_742_scrollLeft_width$$inline_744$$, $event$$4_scroller$$9$$.scrollTop)
  }
};
D.$JSCompiler_StaticMethods_scrollDelta$$ = function $$JSCompiler_StaticMethods_scrollDelta$$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX_scrollLeft$$1$$, $deltaY_scrollTop$$1$$) {
  0 != $deltaX_scrollLeft$$1$$ && 0 != $deltaY_scrollTop$$1$$ && (window.Math.abs($deltaX_scrollLeft$$1$$) > window.Math.abs($deltaY_scrollTop$$1$$) ? ($deltaY_scrollTop$$1$$ = 0, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverY$ = D.$JSCompiler_alias_NULL$$) : ($deltaX_scrollLeft$$1$$ = 0, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverX$ = D.$JSCompiler_alias_NULL$$));
  $deltaX_scrollLeft$$1$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX_scrollLeft$$1$$;
  $deltaY_scrollTop$$1$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY_scrollTop$$1$$;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$) ? ($deltaX_scrollLeft$$1$$ = window.Math.max(0, window.Math.min($JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $deltaX_scrollLeft$$1$$)), $deltaY_scrollTop$$1$$ = window.Math.max(0, window.Math.min($JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollHeight$, $deltaY_scrollTop$$1$$)), $JSCompiler_StaticMethods_scrollDelta$self$$.scrollTo($deltaX_scrollLeft$$1$$, $deltaY_scrollTop$$1$$)) : 
  ((0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$, window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "column") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $deltaX_scrollLeft$$1$$))), $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop = 
  window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "row") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollHeight$, $deltaY_scrollTop$$1$$)))
};
D.$DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$3$$, $scrollTop$$3$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$3$$;
  this.$m_currentScrollTop$ = $scrollTop$$3$$;
  if(!(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$)) {
    $scrollLeft$$3$$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || $scrollLeft$$3$$ > this.$m_endColPixel$ || $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || $scrollTop$$3$$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, $scrollLeft$$3$$, $scrollTop$$3$$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, $scrollLeft$$3$$, $scrollTop$$3$$);
    var $scrollerContent$$inline_754_viewportRight$$inline_750$$, $scrollerContentHeight$$inline_755_viewportBottom$$inline_751$$;
    $scrollerContent$$inline_754_viewportRight$$inline_750$$ = $scrollLeft$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$);
    $scrollerContentHeight$$inline_755_viewportBottom$$inline_751$$ = $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$);
    if(this.$m_endRowPixel$ < $scrollerContentHeight$$inline_755_viewportBottom$$inline_751$$ || this.$m_startRowPixel$ > $scrollTop$$3$$ || this.$m_endColPixel$ < $scrollerContent$$inline_754_viewportRight$$inline_750$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$3$$) {
      this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_TRUE$$;
      return
    }
  }
  this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  var $scrollerContentWidth$$inline_756$$, $databodyContent$$inline_757$$;
  $scrollerContent$$inline_754_viewportRight$$inline_750$$ = this.$m_scroller$.firstChild;
  $scrollerContentHeight$$inline_755_viewportBottom$$inline_751$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scrollerContent$$inline_754_viewportRight$$inline_750$$);
  $scrollerContentWidth$$inline_756$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scrollerContent$$inline_754_viewportRight$$inline_750$$);
  $databodyContent$$inline_757$$ = this.$m_databody$.firstChild;
  if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_755_viewportBottom$$inline_751$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ + 1 && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_755_viewportBottom$$inline_751$$) {
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_754_viewportRight$$inline_750$$, this.$m_endRowPixel$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_757$$, this.$m_endRowPixel$)
  }
  if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_756$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ + 1 && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_756$$) {
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scrollerContent$$inline_754_viewportRight$$inline_750$$, this.$m_endColPixel$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$inline_757$$, this.$m_endColPixel$)
  }
  this.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = D.$JSCompiler_alias_NULL$$);
  this.$m_scrollIndexAfterFetch$ != D.$JSCompiler_alias_NULL$$ && 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, this.$m_scrollIndexAfterFetch$) && ((0,D.$JSCompiler_StaticMethods__highlightActiveHeader$$)(this) || this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_scrollIndexAfterFetch$.row == this.$m_active$.row && this.$m_scrollIndexAfterFetch$.column == this.$m_active$.column) && this.$highlightActive$(), this.$m_scrollIndexAfterFetch$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtDataGrid$$.prototype.$_scrollTransitionEnd$ = function $$DvtDataGrid$$$$$_scrollTransitionEnd$$() {
  var $databody$$6$$;
  this.$m_scrollTransitionEnd$ != D.$JSCompiler_alias_NULL$$ && ($databody$$6$$ = this.$m_databody$.firstChild, $databody$$6$$.removeEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$));
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this);
  this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || this.$m_currentScrollLeft$ > this.$m_endColPixel$ || this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || this.$m_currentScrollTop$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, 
  this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
  var $scrollLeft$$4$$, $scrollTop$$4$$, $databody$$7$$, $colHeader$$3$$, $rowHeader$$7$$;
  $scrollLeft$$4$$ = this.$m_currentScrollLeft$;
  $scrollTop$$4$$ = this.$m_currentScrollTop$;
  $databody$$7$$ = this.$m_databody$.firstChild;
  $colHeader$$3$$ = this.$m_colHeader$.firstChild;
  $rowHeader$$7$$ = this.$m_rowHeader$.firstChild;
  $databody$$7$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
  $databody$$7$$.style.webkitTransitionDuration = "500ms";
  $colHeader$$3$$.style.webkitTransitionDuration = "500ms";
  $rowHeader$$7$$.style.webkitTransitionDuration = "500ms";
  this.$m_scrollTransitionEnd$ == D.$JSCompiler_alias_NULL$$ && (this.$m_scrollTransitionEnd$ = this.$_scrollTransitionEnd$.bind(this));
  $databody$$7$$.addEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$);
  this.$m_resources$.isRTLMode() ? ($databody$$7$$.style.webkitTransform = "translate3d(" + $scrollLeft$$4$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$4$$ + "px, 0, 0)") : ($databody$$7$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$4$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$4$$ + "px, 0, 0)");
  $rowHeader$$7$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$4$$ + "px, 0)";
  this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$) {
  var $scrollLeft$$5$$, $scrollTop$$5$$, $databody$$8$$, $colHeader$$4$$, $rowHeader$$8$$;
  $scrollLeft$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_currentScrollLeft$;
  $scrollTop$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_currentScrollTop$;
  $databody$$8$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_databody$.firstChild;
  $colHeader$$4$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_colHeader$.firstChild;
  $rowHeader$$8$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_rowHeader$.firstChild;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") ? ($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverY$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ ? $scrollLeft$$5$$ += 
  $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverX$ : $scrollTop$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverY$, $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_bounceBack$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$)), $databody$$8$$.addEventListener("webkitTransitionEnd", 
  $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_bounceBack$)) : "0ms" == $databody$$8$$.style.webkitTransitionDuration ? $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$_scrollTransitionEnd$() : ($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_scrollTransitionEnd$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_scrollTransitionEnd$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$_scrollTransitionEnd$.bind($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$)), 
  $databody$$8$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_scrollTransitionEnd$)), $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_resources$.isRTLMode() ? ($databody$$8$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, 0, 0)") : ($databody$$8$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + 
  "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, 0, 0)"), $rowHeader$$8$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$5$$ + "px, 0)") : ($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$8$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$8$$, -$scrollTop$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$4$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$8$$, -$scrollTop$$5$$, "top"))
};
D.$JSCompiler_StaticMethods_handleLongScroll$$ = function $$JSCompiler_StaticMethods_handleLongScroll$$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $scrollTop$$6_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$6_startRow$$ = window.Math.round(window.Math.max(0, $scrollTop$$6_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$6_startCol$$ = window.Math.round(window.Math.max(0, $scrollLeft$$6_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$6_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$6_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$6_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $startRowPixel$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$6_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    this.$m_utils$.empty(this.$m_colHeader$.firstChild);
    this.$handleHeadersFetchSuccess$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$6_startRow$$, $scrollLeft$$6_startCol$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $startRowPixel$$)
  }})
};
D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$6$$, $headerRange$$7$$, $startRowPixel$$1$$) {
  var $headerResizer$$, $headerContent$$1$$;
  $headerContent$$1$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  $headerContent$$1$$ != D.$JSCompiler_alias_NULL$$ && ($headerResizer$$ = $headerContent$$1$$.firstChild.cloneNode(), $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_utils$.empty($headerContent$$1$$), $headerContent$$1$$.appendChild($headerResizer$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($headerResizer$$, $startRowPixel$$1$$));
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRange$$7$$)
};
D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$6$$, $cellRange$$6$$, $startRowPixel$$2$$) {
  var $databodyContent$$3$$, $databodyResizer$$;
  $databodyContent$$3$$ = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  $databodyContent$$3$$ != D.$JSCompiler_alias_NULL$$ && ($databodyResizer$$ = $databodyContent$$3$$.firstChild.cloneNode(), $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_utils$.empty($databodyContent$$3$$), $databodyContent$$3$$.appendChild($databodyResizer$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyResizer$$, $startRowPixel$$2$$));
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$6$$)
};
D.$JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$, $fetchSize$$inline_797_scrollTop$$7$$) {
  var $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$, $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$, $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$;
  $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = D.$JSCompiler_alias_FALSE$$;
  $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ = $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column")) ? 
  ($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && 
  ($colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ >= $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0 || ($colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = 
  (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$)($JSCompiler_StaticMethods_fillViewport$self$$, $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$, 0), $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ += $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$.widthChange, 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$.extentChange)), $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = D.$JSCompiler_alias_TRUE$$) : $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ < 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column")), $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = 
  window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$), 
  !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, 
  $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ || ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && 
  ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$)($JSCompiler_StaticMethods_fillViewport$self$$, $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$, $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$))), $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = 
  D.$JSCompiler_alias_TRUE$$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ && ($columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 1);
    if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $i$$inline_777_j$$inline_791_k$$inline_782$$, $column$$inline_778_row$$inline_792$$, $prevLeft$$inline_779$$;
      $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes;
      $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ = 0;
      if(!(2 > $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$.length)) {
        $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$[1].childNodes;
        for($i$$inline_777_j$$inline_791_k$$inline_782$$ = 0;$i$$inline_777_j$$inline_791_k$$inline_782$$ < $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$.length;$i$$inline_777_j$$inline_791_k$$inline_782$$ += 1) {
          if($column$$inline_778_row$$inline_792$$ = $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$[$i$$inline_777_j$$inline_791_k$$inline_782$$], $prevLeft$$inline_779$$ = $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$, $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = 
          (0,D.$JSCompiler_StaticMethods_getElementDir$$)($column$$inline_778_row$$inline_792$$, "left"), $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
            $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ = $i$$inline_777_j$$inline_791_k$$inline_782$$ - 1;
            $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$;
            $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $prevLeft$$inline_779$$;
            break
          }
        }
        for($colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = 1;$colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ < $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$.length;$colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ += 
        1) {
          $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$[$colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$];
          for($i$$inline_777_j$$inline_791_k$$inline_782$$ = 0;$i$$inline_777_j$$inline_791_k$$inline_782$$ < $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$;$i$$inline_777_j$$inline_791_k$$inline_782$$ += 1) {
            $JSCompiler_StaticMethods_fillViewport$self$$.$_remove$($column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$.firstChild)
          }
        }
      }
    }
    $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    if($fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$) {
      $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"));
      $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 1, $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$);
      if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, 
      $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$))) {
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ && ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ = D.$JSCompiler_alias_FALSE$$);
        $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ = $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$[1];
        $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$.lastChild;
        for($column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ - $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ > $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$;) {
          for($i$$inline_777_j$$inline_791_k$$inline_782$$ = 1;$i$$inline_777_j$$inline_791_k$$inline_782$$ < $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$.length;$i$$inline_777_j$$inline_791_k$$inline_782$$ += 1) {
            $column$$inline_778_row$$inline_792$$ = $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$[$i$$inline_777_j$$inline_791_k$$inline_782$$], $JSCompiler_StaticMethods_fillViewport$self$$.$_remove$($column$$inline_778_row$$inline_792$$.lastChild)
          }
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
          $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$.lastChild;
          $column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($column$$inline_788_columns$$inline_776_fetchStartCol_row$$inline_781_threshold$$inline_768_width$$inline_789$$)
        }
      }
      $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ = $fetchSize$$inline_797_scrollTop$$7$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$ && ($fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    if(window.Math.max(0, $fetchSize$$inline_797_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_787_fetchStartRow_indexToRemove$$inline_773_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$);
      !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$);
      $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ && ($fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 1), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$), $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = 
    D.$JSCompiler_alias_TRUE$$
  }else {
    if(window.Math.max(0, $fetchSize$$inline_797_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$) {
        return
      }
      $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $fetchSize$$inline_797_scrollTop$$7$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_798_rows$$inline_772_scrollLeft$$7_threshold$$inline_786_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_797_scrollTop$$7$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 
      1);
      !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
      $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $colHeaderContent$$inline_761_colHeaderContent$$inline_767_fetchSize$$1_initFlag_j$$inline_780_left$$inline_774_returnVal$$inline_763_rows$$inline_790$$ || ($JSCompiler_StaticMethods_fillViewport$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$ = function $$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $columnHeadersContainer_returnVal$$6$$, $firstChild$$, $resizerWidth$$, $colThreshold$$1$$) {
  var $element$$11$$, $isColumnHeader$$, $columnHeader$$1$$, $width$$18$$, $removedColumnsWidth$$ = 0, $removedColumns$$ = 0;
  $element$$11$$ = $firstChild$$ == D.$JSCompiler_alias_NULL$$ ? $columnHeadersContainer_returnVal$$6$$.firstChild : $firstChild$$.nextSibling;
  $columnHeader$$1$$ = ($isColumnHeader$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$11$$, $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$11$$ : $element$$11$$.firstChild;
  for($width$$18$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$1$$);$resizerWidth$$ + $width$$18$$ < $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.$m_currentScrollLeft$ - $colThreshold$$1$$;) {
    $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.$_remove$($element$$11$$);
    $removedColumnsWidth$$ += $width$$18$$;
    $removedColumns$$ += $isColumnHeader$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent");
    $resizerWidth$$ += $width$$18$$;
    $element$$11$$ = $firstChild$$ == D.$JSCompiler_alias_NULL$$ ? $columnHeadersContainer_returnVal$$6$$.firstChild : $firstChild$$.nextSibling;
    if($element$$11$$ == D.$JSCompiler_alias_NULL$$) {
      return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$}
    }
    $columnHeader$$1$$ = ($isColumnHeader$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$11$$, $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$11$$ : $element$$11$$.firstChild;
    $width$$18$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$1$$)
  }
  $isColumnHeader$$ || ($columnHeadersContainer_returnVal$$6$$ = (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, $element$$11$$.firstChild, $resizerWidth$$, $colThreshold$$1$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "start", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, 
  $element$$11$$, "start") + $columnHeadersContainer_returnVal$$6$$.extentChange), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent") - $columnHeadersContainer_returnVal$$6$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeader$$1$$, 
  (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$1$$, "left") + $columnHeadersContainer_returnVal$$6$$.widthChange, "left"), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeader$$1$$, (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$1$$) - $columnHeadersContainer_returnVal$$6$$.widthChange), $removedColumns$$ += $columnHeadersContainer_returnVal$$6$$.extentChange, $removedColumnsWidth$$ += $columnHeadersContainer_returnVal$$6$$.widthChange);
  return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$}
};
D.$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$ = function $$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $columnHeadersContainer$$1_returnVal$$7$$, $threshold$$1$$) {
  var $element$$12$$, $columnHeader$$2$$, $isColumnHeader$$1$$, $width$$19$$, $removedColumns$$1$$ = 0, $removedColumnsWidth$$1$$ = 0;
  $element$$12$$ = $columnHeadersContainer$$1_returnVal$$7$$.lastChild;
  $columnHeader$$2$$ = ($isColumnHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$12$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$12$$ : $element$$12$$.firstChild;
  for($width$$19$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$2$$);$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeaderPixel$ - $width$$19$$ > $threshold$$1$$;) {
    $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$_remove$($element$$12$$), $removedColumnsWidth$$1$$ += $width$$19$$, $removedColumns$$1$$ += $isColumnHeader$$1$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent"), $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeaderPixel$ -= $width$$19$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeader$ -= 
    $isColumnHeader$$1$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent"), $element$$12$$ = $columnHeadersContainer$$1_returnVal$$7$$.lastChild, $columnHeader$$2$$ = ($isColumnHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$12$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$12$$ : $element$$12$$.firstChild, 
    $width$$19$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$2$$)
  }
  $isColumnHeader$$1$$ || ($columnHeadersContainer$$1_returnVal$$7$$ = (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, $threshold$$1$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, 
  $element$$12$$, "extent") - $columnHeadersContainer$$1_returnVal$$7$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeader$$2$$, (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$2$$) - $columnHeadersContainer$$1_returnVal$$7$$.widthChange), $removedColumns$$1$$ += $columnHeadersContainer$$1_returnVal$$7$$.extentChange, $removedColumnsWidth$$1$$ += $columnHeadersContainer$$1_returnVal$$7$$.widthChange);
  return{extentChange:$removedColumns$$1$$, widthChange:$removedColumnsWidth$$1$$}
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromTop$$$($JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$, $rowHeader$$9$$) {
  var $resizer$$2$$, $resizerHeight$$, $returnVal$$8$$;
  $resizer$$2$$ = $rowHeader$$9$$.firstChild.firstChild;
  $resizerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$2$$);
  $resizerHeight$$ >= $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_currentScrollTop$ - 0 || ($returnVal$$8$$ = (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$, $resizer$$2$$, $resizerHeight$$, 0), $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$ += $returnVal$$8$$.heightChange, $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeader$ += $returnVal$$8$$.extentChange, 
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$2$$, $resizerHeight$$ + $returnVal$$8$$.heightChange))
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $resizer$$3_returnVal$$9$$, $resizerHeight$$1$$, $rowThreshold$$1$$) {
  var $element$$13$$, $rowHeader$$10$$, $isRowHeader$$1$$, $height$$20$$, $removedRows$$ = 0, $removedRowsHeight$$ = 0;
  $element$$13$$ = $resizer$$3_returnVal$$9$$.nextSibling;
  $rowHeader$$10$$ = ($isRowHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$13$$ : $element$$13$$.firstChild;
  for($height$$20$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$10$$);$resizerHeight$$1$$ + $height$$20$$ < $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.$m_currentScrollTop$ - $rowThreshold$$1$$;) {
    $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.$_remove$($element$$13$$);
    $removedRowsHeight$$ += $height$$20$$;
    $removedRows$$ += $isRowHeader$$1$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent");
    $resizerHeight$$1$$ += $height$$20$$;
    $element$$13$$ = $resizer$$3_returnVal$$9$$.nextSibling;
    if($element$$13$$ == D.$JSCompiler_alias_NULL$$) {
      return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$}
    }
    $rowHeader$$10$$ = ($isRowHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$13$$ : $element$$13$$.firstChild;
    $height$$20$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$10$$)
  }
  $isRowHeader$$1$$ || ($resizer$$3_returnVal$$9$$ = (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$.firstChild, $resizerHeight$$1$$, $rowThreshold$$1$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "start", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, 
  $element$$13$$, "start") + $resizer$$3_returnVal$$9$$.extentChange), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent") - $resizer$$3_returnVal$$9$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$10$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$10$$, 
  "top") + $resizer$$3_returnVal$$9$$.heightChange, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$10$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$10$$) - $resizer$$3_returnVal$$9$$.heightChange), $removedRows$$ += $resizer$$3_returnVal$$9$$.extentChange, $removedRowsHeight$$ += $resizer$$3_returnVal$$9$$.heightChange);
  return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$}
};
D.$JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$11$$) {
  var $resizer$$4$$, $resizerHeight$$2$$, $row$$12$$, $height$$21$$;
  $resizer$$4$$ = $databody$$11$$.firstChild.firstChild;
  $resizerHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$4$$);
  if(!($resizerHeight$$2$$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$12$$ = $resizer$$4$$.nextSibling;
    for($height$$21$$ = $row$$12$$.offsetHeight;$resizerHeight$$2$$ + $height$$21$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$_remove$($row$$12$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$21$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $resizerHeight$$2$$ += $height$$21$$;
      $row$$12$$ = $resizer$$4$$.nextSibling;
      if($row$$12$$ == D.$JSCompiler_alias_NULL$$) {
        break
      }
      $height$$21$$ = $row$$12$$.offsetHeight
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$4$$, $resizerHeight$$2$$)
  }
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$$($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$, $rowHeader$$11$$) {
  var $rowHeaderContent$$3$$, $threshold$$3$$;
  $rowHeaderContent$$3$$ = $rowHeader$$11$$.firstChild;
  $threshold$$3$$ = $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$) + 0;
  $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_endRowHeaderPixel$ <= $threshold$$3$$ || ($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_stopRowHeaderFetch$ && ($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$, $rowHeaderContent$$3$$, $threshold$$3$$))
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $returnVal$$10_rowHeadersContainer$$1$$, $threshold$$4$$) {
  var $element$$14$$, $rowHeader$$12$$, $isRowHeader$$2$$, $height$$22$$, $removedRows$$1$$ = 0, $removedRowsHeight$$1$$ = 0;
  $element$$14$$ = $returnVal$$10_rowHeadersContainer$$1$$.lastChild;
  $rowHeader$$12$$ = ($isRowHeader$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$14$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$14$$ : $element$$14$$.firstChild;
  for($height$$22$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$12$$);$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeaderPixel$ - $height$$22$$ > $threshold$$4$$;) {
    $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$_remove$($element$$14$$), $removedRowsHeight$$1$$ += $height$$22$$, $removedRows$$1$$ += $isRowHeader$$2$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent"), $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeaderPixel$ -= $height$$22$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeader$ -= 
    $isRowHeader$$2$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent"), $element$$14$$ = $returnVal$$10_rowHeadersContainer$$1$$.lastChild, $rowHeader$$12$$ = ($isRowHeader$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$14$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$14$$ : $element$$14$$.firstChild, 
    $height$$22$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$12$$)
  }
  $isRowHeader$$2$$ || ($returnVal$$10_rowHeadersContainer$$1$$ = (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, $threshold$$4$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, 
  $element$$14$$, "extent") - $returnVal$$10_rowHeadersContainer$$1$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$12$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$12$$) - $returnVal$$10_rowHeadersContainer$$1$$.heightChange), $removedRows$$1$$ += $returnVal$$10_rowHeadersContainer$$1$$.extentChange, $removedRowsHeight$$1$$ += $returnVal$$10_rowHeadersContainer$$1$$.heightChange);
  return{extentChange:$removedRows$$1$$, heightChange:$removedRowsHeight$$1$$}
};
D.$JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$12$$) {
  var $databodyContent$$8$$, $threshold$$5$$, $row$$13$$, $height$$23$$;
  $databodyContent$$8$$ = $databody$$12$$.firstChild;
  $threshold$$5$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ <= $threshold$$5$$)) {
    $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_stopRowFetch$ && ($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$);
    $row$$13$$ = $databodyContent$$8$$.lastChild;
    for($height$$23$$ = $row$$13$$.offsetHeight;$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ - $height$$23$$ > $threshold$$5$$;) {
      $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$_remove$($row$$13$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$23$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$13$$ = $databodyContent$$8$$.lastChild, $height$$23$$ = $row$$13$$.offsetHeight
    }
  }
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && this.$m_stopDatabodyScroll$ && (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$handleContextMenuGesture$ = function $$DvtDataGrid$$$$$handleContextMenuGesture$$($event$$7$$, $eventType$$4$$, $callback$$27$$) {
  var $cell$$4_index$$60$$;
  $cell$$4_index$$60$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$7$$.originalEvent.target);
  "touch" === $eventType$$4$$ && $cell$$4_index$$60$$ != D.$JSCompiler_alias_NULL$$ ? ($cell$$4_index$$60$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$7$$.originalEvent.target), $cell$$4_index$$60$$ = {row:this.$getRowIndex$($cell$$4_index$$60$$.parentNode), column:this.$getCellIndex$($cell$$4_index$$60$$)}, (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (0,D.$JSCompiler_StaticMethods__isContainSelection$$)(this, $cell$$4_index$$60$$) || this.$m_active$ != D.$JSCompiler_alias_NULL$$ && 
  $cell$$4_index$$60$$.row == this.$m_active$.row && $cell$$4_index$$60$$.column == this.$m_active$.column ? this.$_openContextMenu$($event$$7$$, $eventType$$4$$, $callback$$27$$) : (this.$m_contextMenuCallback$ = this.$_openContextMenu$.bind(this, $event$$7$$, $eventType$$4$$, $callback$$27$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$7$$.originalEvent) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, 
  $event$$7$$.originalEvent))) : this.$_openContextMenu$($event$$7$$, $eventType$$4$$, $callback$$27$$)
};
D.$DvtDataGrid$$.prototype.handleContextMenuGesture = D.$DvtDataGrid$$.prototype.$handleContextMenuGesture$;
D.$DvtDataGrid$$.prototype.$_openContextMenu$ = function $$DvtDataGrid$$$$$_openContextMenu$$($event$$8$$, $eventType$$5$$, $callback$$28$$) {
  var $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$, $capabilities_target$$40$$, $launcher_node$$inline_805$$;
  $capabilities_target$$40$$ = $event$$8$$.originalEvent.target;
  a: {
    $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ = this.$m_utils$;
    $launcher_node$$inline_805$$ = $capabilities_target$$40$$;
    for(var $databody$$inline_806$$ = this.$m_databody$, $nodeName$$inline_807$$, $tabIndex$$inline_808$$, $origTabIndex$$inline_809$$;D.$JSCompiler_alias_NULL$$ != $launcher_node$$inline_805$$ && $launcher_node$$inline_805$$ != $databody$$inline_806$$;) {
      $nodeName$$inline_807$$ = $launcher_node$$inline_805$$.nodeName;
      if(3 != $launcher_node$$inline_805$$.nodeType) {
        if($tabIndex$$inline_808$$ = (0,window.parseInt)($launcher_node$$inline_805$$.getAttribute("tabIndex"), 10), $origTabIndex$$inline_809$$ = (0,window.parseInt)($launcher_node$$inline_805$$.getAttribute($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$.$dataGrid$.$m_resources$.getMappedAttribute("tabindex")), 10), $tabIndex$$inline_808$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $tabIndex$$inline_808$$) {
          if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($launcher_node$$inline_805$$, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$.$dataGrid$.$m_resources$.getMappedStyle("cell")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($launcher_node$$inline_805$$, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$.$dataGrid$.$m_resources$.getMappedStyle("headercell"))) {
            break
          }else {
            $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
        }else {
          if($nodeName$$inline_807$$.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && (-1 != $tabIndex$$inline_808$$ || -1 != $origTabIndex$$inline_809$$)) {
            $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
        }
      }
      $launcher_node$$inline_805$$ = $launcher_node$$inline_805$$.parentNode
    }
    $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ = D.$JSCompiler_alias_FALSE$$
  }
  if(!$JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$) {
    $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $capabilities_target$$40$$);
    if($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ != D.$JSCompiler_alias_NULL$$) {
      (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (0,D.$JSCompiler_StaticMethods__isContainSelection$$)(this, this.$getCellIndex$($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$)) ? this.$m_active$ != D.$JSCompiler_alias_NULL$$ ? ($launcher_node$$inline_805$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_active$))[0], $capabilities_target$$40$$ = "keyboard" === $eventType$$5$$ ? 
      (0,D.$JSCompiler_StaticMethods__getCellCapability$$)(this, $launcher_node$$inline_805$$) : (0,D.$JSCompiler_StaticMethods__getCellCapability$$)(this, $launcher_node$$inline_805$$, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$)) : ($launcher_node$$inline_805$$ = (0,D.$JSCompiler_StaticMethods__getActiveHeaderElement$$)(this), $capabilities_target$$40$$ = (0,D.$JSCompiler_StaticMethods__getHeaderCapability$$)(this, $launcher_node$$inline_805$$, 
      $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$)) : ($launcher_node$$inline_805$$ = $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$, $capabilities_target$$40$$ = (0,D.$JSCompiler_StaticMethods__getCellCapability$$)(this, $launcher_node$$inline_805$$))
    }else {
      $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $capabilities_target$$40$$);
      if($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$ == D.$JSCompiler_alias_NULL$$) {
        return
      }
      $capabilities_target$$40$$ = (0,D.$JSCompiler_StaticMethods__getHeaderCapability$$)(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$);
      $launcher_node$$inline_805$$ = $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_804_JSCompiler_inline_result$$30_element$$15$$
    }
    $callback$$28$$.call(D.$JSCompiler_alias_NULL$$, {capabilities:$capabilities_target$$40$$, launcher:$launcher_node$$inline_805$$}, $event$$8$$, $eventType$$5$$)
  }
};
D.$JSCompiler_StaticMethods__getCellCapability$$ = function $$JSCompiler_StaticMethods__getCellCapability$$$($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$5_columnHeader$$3$$, $actualCell_rowHeader$$13$$) {
  var $capabilities$$1$$, $resizable$$, $sortable$$, $sameColumn$$ = D.$JSCompiler_alias_TRUE$$, $sameRow$$ = D.$JSCompiler_alias_TRUE$$;
  $capabilities$$1$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable"};
  if($actualCell_rowHeader$$13$$ != D.$JSCompiler_alias_NULL$$ && ($sameColumn$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$getCellIndex$($cell$$5_columnHeader$$3$$) === $JSCompiler_StaticMethods__getCellCapability$self$$.$getCellIndex$($actualCell_rowHeader$$13$$), $sameRow$$ = $cell$$5_columnHeader$$3$$.parentNode === $actualCell_rowHeader$$13$$.parentNode, $sameRow$$ === D.$JSCompiler_alias_FALSE$$ && $sameColumn$$ === D.$JSCompiler_alias_FALSE$$)) {
    return $capabilities$$1$$
  }
  $actualCell_rowHeader$$13$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$5_columnHeader$$3$$, "row");
  $cell$$5_columnHeader$$3$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$5_columnHeader$$3$$, "column");
  $resizable$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("resizable");
  $sortable$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("sortable");
  $cell$$5_columnHeader$$3$$ != D.$JSCompiler_alias_NULL$$ && $sameColumn$$ && ("true" === $cell$$5_columnHeader$$3$$.getAttribute($resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeWidth = "enable"), "true" === $cell$$5_columnHeader$$3$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortCol = "enable"));
  $sameRow$$ && ((0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)($JSCompiler_StaticMethods__getCellCapability$self$$) && ($capabilities$$1$$.cut = "enable", $capabilities$$1$$.paste = "enable"), $actualCell_rowHeader$$13$$ != D.$JSCompiler_alias_NULL$$ && ("true" === $actualCell_rowHeader$$13$$.getAttribute($resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeHeight = "enable"), "true" === $actualCell_rowHeader$$13$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortRow = 
  "enable")));
  return $capabilities$$1$$
};
D.$JSCompiler_StaticMethods__getHeaderCapability$$ = function $$JSCompiler_StaticMethods__getHeaderCapability$$$($JSCompiler_StaticMethods__getHeaderCapability$self$$, $header$$4$$, $actualCell$$1_resizable$$1$$) {
  var $capabilities$$2$$, $sortable$$1$$, $sameColumn$$1$$ = D.$JSCompiler_alias_TRUE$$, $sameRow$$1$$ = D.$JSCompiler_alias_TRUE$$;
  $capabilities$$2$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable"};
  if($actualCell$$1_resizable$$1$$ != D.$JSCompiler_alias_NULL$$ && ($sameColumn$$1$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__getHeaderCapability$self$$, $header$$4$$) === $JSCompiler_StaticMethods__getHeaderCapability$self$$.$getCellIndex$($actualCell$$1_resizable$$1$$), $sameRow$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getHeaderCapability$self$$, $header$$4$$) === (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getHeaderCapability$self$$, 
  $actualCell$$1_resizable$$1$$.parentNode), $sameRow$$1$$ === D.$JSCompiler_alias_FALSE$$ && $sameColumn$$1$$ === D.$JSCompiler_alias_FALSE$$)) {
    return $capabilities$$2$$
  }
  $actualCell$$1_resizable$$1$$ = $JSCompiler_StaticMethods__getHeaderCapability$self$$.$m_resources$.getMappedAttribute("resizable");
  $sortable$$1$$ = $JSCompiler_StaticMethods__getHeaderCapability$self$$.$m_resources$.getMappedAttribute("sortable");
  $header$$4$$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$4$$, $JSCompiler_StaticMethods__getHeaderCapability$self$$.getMappedStyle("colheadercell")) && $sameColumn$$1$$ ? ("true" === $header$$4$$.getAttribute($actualCell$$1_resizable$$1$$) && ($capabilities$$2$$.resizeWidth = "enable", $capabilities$$2$$.resize = "enable"), $capabilities$$2$$.resizeHeight = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__getHeaderCapability$self$$.$m_options$, 
  "column", "height"), "true" === $header$$4$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortCol = "enable")) : $sameRow$$1$$ && ((0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)($JSCompiler_StaticMethods__getHeaderCapability$self$$) && ($capabilities$$2$$.cut = "enable", $capabilities$$2$$.paste = "enable"), "true" === $header$$4$$.getAttribute($actualCell$$1_resizable$$1$$) && ($capabilities$$2$$.resize = "enable", $capabilities$$2$$.resizeHeight = "enable"), $capabilities$$2$$.resizeWidth = 
  (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__getHeaderCapability$self$$.$m_options$, "row", "width"), "true" === $header$$4$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortRow = "enable")));
  $capabilities$$2$$.resize = "enable" === $capabilities$$2$$.resizeHeight || "enable" === $capabilities$$2$$.resizeWidth ? "enable" : "disable";
  return $capabilities$$2$$
};
D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($details$$inline_818_event$$9$$, $direction$$4_id$$3_initialValue$$inline_816$$, $value$$47_value$$inline_817$$) {
  var $target$$41_target$$inline_815$$;
  $target$$41_target$$inline_815$$ = this.$m_active$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_active$))[0] : (0,D.$JSCompiler_StaticMethods__getActiveHeaderElement$$)(this);
  $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("resizeHeight") || $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($value$$47_value$$inline_817$$ = (0,window.parseInt)($value$$47_value$$inline_817$$, 10), (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($target$$41_target$$inline_815$$, this.getMappedStyle("cell")) && ($target$$41_target$$inline_815$$ = 
  $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $target$$41_target$$inline_815$$, "row") : (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $target$$41_target$$inline_815$$, "column")), this.$m_resizingElement$ = $target$$41_target$$inline_815$$, $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? ($direction$$4_id$$3_initialValue$$inline_816$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($target$$41_target$$inline_815$$), $direction$$4_id$$3_initialValue$$inline_816$$ !== $value$$47_value$$inline_817$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.$m_resizingElement$, this.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)(this, this.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)(this, $direction$$4_id$$3_initialValue$$inline_816$$, $value$$47_value$$inline_817$$) : 
  (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)(this, $value$$47_value$$inline_817$$, $value$$47_value$$inline_817$$ - $direction$$4_id$$3_initialValue$$inline_816$$))) : $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("resizeHeight") && ($direction$$4_id$$3_initialValue$$inline_816$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($target$$41_target$$inline_815$$), $direction$$4_id$$3_initialValue$$inline_816$$ !== $value$$47_value$$inline_817$$ && 
  ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.$m_resizingElement$, this.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)(this, $value$$47_value$$inline_817$$, $value$$47_value$$inline_817$$ - $direction$$4_id$$3_initialValue$$inline_816$$) : (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)(this, this.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)(this, $direction$$4_id$$3_initialValue$$inline_816$$, $value$$47_value$$inline_817$$))), 
  $details$$inline_818_event$$9$$ = {event:$details$$inline_818_event$$9$$, ui:{header:(0,D.$JSCompiler_StaticMethods__getKey$$)(this, this.$m_resizingElement$), size:$value$$47_value$$inline_817$$}}, this.fireEvent("resize", $details$$inline_818_event$$9$$), this.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_buildCorners$$)(this), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) && (0,D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$)(this)) : 
  $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? ($direction$$4_id$$3_initialValue$$inline_816$$ = $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($target$$41_target$$inline_815$$, this.getMappedStyle("cell")) && 
  ($target$$41_target$$inline_815$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $target$$41_target$$inline_815$$, "column")), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41_target$$inline_815$$) && $target$$41_target$$inline_815$$ != D.$JSCompiler_alias_NULL$$ && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $details$$inline_818_event$$9$$, $target$$41_target$$inline_815$$, $direction$$4_id$$3_initialValue$$inline_816$$)) : 
  $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$4_id$$3_initialValue$$inline_816$$ = $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($target$$41_target$$inline_815$$, this.getMappedStyle("cell")) && 
  ($target$$41_target$$inline_815$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $target$$41_target$$inline_815$$, "row")), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41_target$$inline_815$$) && $target$$41_target$$inline_815$$ != D.$JSCompiler_alias_NULL$$ && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $details$$inline_818_event$$9$$, $target$$41_target$$inline_815$$, $direction$$4_id$$3_initialValue$$inline_816$$)) : 
  $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("cut") ? (0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $details$$inline_818_event$$9$$) : $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("paste") ? (0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, $details$$inline_818_event$$9$$) : $direction$$4_id$$3_initialValue$$inline_816$$ === this.$m_resources$.getMappedCommand("discontiguousSelection") && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, 
  $value$$47_value$$inline_817$$)
};
D.$DvtDataGrid$$.prototype.handleContextMenuReturn = D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$;
D.$JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$16$$) {
  var $header$$5$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$16$$);
  return $header$$5$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : "true" == $header$$5$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$m_resources$.getMappedAttribute("sortable"))
};
D.$JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$) {
  var $row$$14$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "column");
  return"disable" !== $row$$14$$.width || "disable" !== $row$$14$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.height
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$10$$) {
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && this.$m_databodyDragState$ == D.$JSCompiler_alias_FALSE$$ && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$11$$) {
  this.$m_databodyMove$ && (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$12$$) {
  var $header$$inline_840_row$$15$$, $processed$$;
  if(0 === $event$$12$$.button) {
    if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$12$$.target)) {
      $event$$12$$.preventDefault();
      (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$12$$.target, this.getMappedStyle("selected"));
      return
    }
    (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($processed$$ = (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$12$$));
    $header$$inline_840_row$$15$$ = this.find($event$$12$$.target, "row");
    !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $header$$inline_840_row$$15$$) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$12$$.pageX, this.$m_currentY$ = $event$$12$$.pageY, $processed$$ = D.$JSCompiler_alias_TRUE$$)
  }
  if(!this.$m_isResizing$) {
    var $index$$inline_839$$, $axis$$inline_841$$, $level$$inline_842$$;
    $header$$inline_840_row$$15$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$12$$.target);
    $header$$inline_840_row$$15$$ != D.$JSCompiler_alias_NULL$$ && ($index$$inline_839$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$inline_840_row$$15$$), $axis$$inline_841$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$inline_840_row$$15$$), $level$$inline_842$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)(this, $header$$inline_840_row$$15$$));
    $index$$inline_839$$ != D.$JSCompiler_alias_NULL$$ && $index$$inline_839$$ != D.$JSCompiler_alias_VOID$$ && ("row" === $axis$$inline_841$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $index$$inline_839$$, $level$$inline_842$$) : "column" === $axis$$inline_841$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $index$$inline_839$$, $level$$inline_842$$))
  }
  $processed$$ === D.$JSCompiler_alias_TRUE$$ && $event$$12$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($event$$13$$) {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$) : (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$13$$);
  this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$14$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$14$$.target) && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this)) {
    var $header$$inline_846$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$14$$.target);
    $header$$inline_846$$ && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_846$$, D.$JSCompiler_alias_FALSE$$);
    ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$14$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$14$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$14$$.target, this.getMappedStyle("hover"))
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$15$$) {
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$15$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$15$$.target) && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this)) {
    var $header$$inline_850$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$15$$.target);
    ($header$$inline_850$$ == D.$JSCompiler_alias_NULL$$ || $event$$15$$.relatedTarget == D.$JSCompiler_alias_NULL$$ || $header$$inline_850$$ !== (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$15$$.relatedTarget)) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_850$$, D.$JSCompiler_alias_TRUE$$);
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortdescending"))) {
      (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$15$$.target, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$15$$.target, this.getMappedStyle("selected"))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$() {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$17$$) {
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$17$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$17$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$17$$.target)) {
    (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$17$$), $event$$17$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($event$$18$$) {
  0 === $event$$18$$.button && ((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$18$$.target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$18$$.pageX, this.$m_currentY$ = $event$$18$$.pageY), (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$));
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$18$$), (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && 0 === $event$$18$$.button && (this.$m_databodyDragState$ = D.$JSCompiler_alias_TRUE$$)) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$19$$) {
  var $row$$16$$, $selectionMode$$;
  this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $row$$16$$ = this.find($event$$19$$.target, "row"), "cell" === $selectionMode$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$19$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($row$$16$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$20$$) {
  var $row$$17$$, $selectionMode$$1$$;
  this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $row$$17$$ = this.find($event$$20$$.target, "row"), "cell" === $selectionMode$$1$$ ? (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$20$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$1$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$17$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$21$$) {
  this.$m_databodyMove$ ? (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$21$$) : this.$m_databodyDragState$ && (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $event$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$() {
  this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($event$$23$$) {
  var $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$;
  if(!$event$$23$$.defaultPrevented) {
    if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ && this.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$) {
      9 === $event$$23$$.keyCode && ($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = this.createIndex(0, 0), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$), 
      (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $event$$23$$) : this.$activeAndFocus$($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$), 
      $event$$23$$.preventDefault())
    }else {
      if(!(9 === $event$$23$$.keyCode && (!(0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) || !(0,D.$JSCompiler_StaticMethods_isActionableMode$$)(this)))) {
        if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
          (0,D.$JSCompiler_StaticMethods__fireKeyDownEvent$$)(this, $event$$23$$);
          var $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$, $keyCode$$inline_857_keyCode$$inline_9488$$, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = D.$JSCompiler_alias_FALSE$$, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, $ctrlKey$$inline_860$$;
          if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
            $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = this.$m_activeHeader$.axis;
            $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = this.$m_activeHeader$.index;
            $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = this.$m_activeHeader$.level;
            $keyCode$$inline_857_keyCode$$inline_9488$$ = $event$$23$$.keyCode;
            $ctrlKey$$inline_860$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$);
            if((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($keyCode$$inline_857_keyCode$$inline_9488$$) && !$ctrlKey$$inline_860$$) {
              if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this)) {
                switch(this.$m_resources$.isRTLMode() && (37 == $keyCode$$inline_857_keyCode$$inline_9488$$ ? $keyCode$$inline_857_keyCode$$inline_9488$$ = 39 : 39 == $keyCode$$inline_857_keyCode$$inline_9488$$ && ($keyCode$$inline_857_keyCode$$inline_9488$$ = 37)), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = this.$m_activeHeader$.axis, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = 
                this.$m_activeHeader$.index, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = this.$m_activeHeader$.level, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getActiveHeaderElement$$)(this), $keyCode$$inline_857_keyCode$$inline_9488$$) {
                  case 37:
                    if("column" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ && 0 < $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$) {
                      if(1 === this.$m_columnHeaderLevelCount$) {
                        $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ -= 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.previousSibling
                      }else {
                        if($direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === this.$m_columnHeaderLevelCount$ - 1 ? ($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ -= 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, 
                        $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$)) : ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)(this, (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "start") - 1, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$), 
                        $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "start") : $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ - 
                        1), 0 > $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$) {
                          break
                        }
                      }
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                      $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$)
                    }else {
                      "row" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ && 0 < $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ && ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === 
                      this.$m_rowHeaderLevelCount$ - 1 ? $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode.firstChild : $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode.parentNode.firstChild, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, 
                      "start"), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                      $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ - 1))
                    }
                    break;
                  case 39:
                    "row" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ ? $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === this.$m_rowHeaderLevelCount$ - 1 ? ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = 
                    this.createIndex($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, 0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $event$$23$$) : this.$activeAndFocus$($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                    $event$$23$$)) : ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ + 1), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, 
                    (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ + 1)) : (1 === this.$m_columnHeaderLevelCount$ ? 
                    ($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ += 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.nextSibling) : ($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === 
                    this.$m_columnHeaderLevelCount$ - 1 ? $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ + 1 : $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "start") + (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, 
                    $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "extent") : $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ + 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, 
                    $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$)), !($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ > this.$m_endColHeader$ && this.$m_stopColumnHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ < this.$m_dataSource$.getCount("column")) && 
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                    $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$));
                    break;
                  case 38:
                    if("row" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ && 0 < $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$) {
                      if(1 === this.$m_rowHeaderLevelCount$) {
                        $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ -= 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.previousSibling
                      }else {
                        if($direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === this.$m_rowHeaderLevelCount$ - 1 ? ($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ -= 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, 
                        $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$)) : ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "start") - 1, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$), 
                        $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "start") : $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ - 
                        1), 0 > $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$) {
                          break
                        }
                      }
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                      $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$)
                    }else {
                      "column" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ && 0 < $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ && ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === 
                      this.$m_columnHeaderLevelCount$ - 1 ? $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode.firstChild : $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode.parentNode.firstChild, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, 
                      "start"), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                      $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ - 1))
                    }
                    break;
                  case 40:
                    "column" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ ? $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === this.$m_columnHeaderLevelCount$ - 1 ? ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = 
                    this.createIndex(0, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $event$$23$$) : this.$activeAndFocus$($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                    $event$$23$$)) : ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ + 1), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, 
                    (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ + 1)) : (1 === this.$m_rowHeaderLevelCount$ ? 
                    ($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ += 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.nextSibling) : ($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ === 
                    this.$m_rowHeaderLevelCount$ - 1 ? $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ + 1 : $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "start") + (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, 
                    $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.parentNode, "extent") : $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ + 1, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, 
                    $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$)), !($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ > this.$m_endRowHeader$ && this.$m_stopRowHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ < this.$m_dataSource$.getCount("row")) && 
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                    $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$))
                }
              }
              $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = D.$JSCompiler_alias_TRUE$$
            }else {
              32 == $keyCode$$inline_857_keyCode$$inline_9488$$ ? (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ("row" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ ? ((0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$, 
              $event$$23$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", {row:$elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ + 1}), $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = D.$JSCompiler_alias_TRUE$$) : "column" === $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ && 
              "cell" == this.$m_options$.$getSelectionMode$() && ((0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$, $event$$23$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleColumnSelected", {column:$elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ + 1}), $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = 
              D.$JSCompiler_alias_TRUE$$)) : 13 == $keyCode$$inline_857_keyCode$$inline_9488$$ ? ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getActiveHeaderElement$$)(this), "true" == $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$.getAttribute(this.$m_resources$.getMappedAttribute("sortable")) && ($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = 
              $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$, (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) || ($direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$.getAttribute(this.$m_resources$.getMappedAttribute("sortDir")), 
              (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$23$$, $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ == D.$JSCompiler_alias_NULL$$ || "descending" === $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ ? 
              "ascending" : "descending")), $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = D.$JSCompiler_alias_TRUE$$)) : 33 == $keyCode$$inline_857_keyCode$$inline_9488$$ ? "row" === this.$m_activeHeader$.axis && ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, this.$m_startRowHeader$, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), 
              (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, this.$m_startRowHeader$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), 
              $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = D.$JSCompiler_alias_TRUE$$) : 34 == $keyCode$$inline_857_keyCode$$inline_9488$$ ? "row" === this.$m_activeHeader$.axis && ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, this.$m_endRowHeader$, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), 
              (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, this.$m_endRowHeader$, (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), 
              $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_isReadCurrentContent$$)(this, $event$$23$$) ? (0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this) : $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$23$$)
            }
            $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$
          }else {
            $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = D.$JSCompiler_alias_VOID$$
          }
        }else {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && this.$m_selectionFrontier$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_selectionFrontier$)), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ == 
          D.$JSCompiler_alias_NULL$$)) {
            return
          }
          (0,D.$JSCompiler_StaticMethods__fireKeyDownEvent$$)(this, $event$$23$$);
          $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$23$$);
          if(!$JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$) {
            if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
              $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = D.$JSCompiler_alias_FALSE$$;
              $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = $event$$23$$.keyCode;
              $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$23$$.target);
              if((0,D.$JSCompiler_StaticMethods_isActionableMode$$)(this)) {
                27 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), this.$highlightActive$(), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = 
                D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$) && !(0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$).length) ? ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), 
                $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$), $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $event$$23$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ || 
                ($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this), 
                $event$$23$$))) : 9 === $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ && ($direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$), 0 < $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$.length && 
                $event$$23$$.target == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$[$direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$.length - 1] && ($direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$[0].focus(), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = 
                D.$JSCompiler_alias_TRUE$$))
              }else {
                if(113 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ || 13 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$) {
                  (0,D.$JSCompiler_StaticMethods__setFocusToFirstFocusableElement$$)($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$) && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods__enableAllFocusableElements$$)($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$))
                }else {
                  if(27 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$) {
                    this.$m_discontiguousSelection$ && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, D.$JSCompiler_alias_FALSE$$)
                  }else {
                    if((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$) || 36 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ || 35 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ || 33 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ || 
                    34 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$) {
                      $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$), $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $event$$23$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ || 
                      ($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$, $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)))
                    }else {
                      if($event$$23$$.shiftKey && 119 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$) {
                        (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, !this.$m_discontiguousSelection$), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = D.$JSCompiler_alias_TRUE$$
                      }else {
                        if(32 == $direction$$inline_9501_focusElems$$inline_871_keyCode$$inline_864_level$$inline_9492_processed$$inline_858$$ && ($cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$), $elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ = $event$$23$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && 
                        (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($elem$$inline_856_elem$$inline_9493_index$$inline_855_newElement$$inline_9495_shiftKey$$inline_867$$ && !$cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ || $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$))) {
                          $cell$$inline_865_ctrlKey$$inline_866_index$$inline_9491_level$$inline_859_newIndex$$inline_9496$$ ? ($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = this.$m_active$.column, (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                          $event$$23$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleColumnSelected", {column:this.$m_active$.columnKey})) : ($JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = this.$m_active$.row, (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$, 
                          $event$$23$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", {row:this.$m_active$.rowKey})), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = D.$JSCompiler_alias_TRUE$$
                        }
                      }
                    }
                  }
                }
              }
              (0,D.$JSCompiler_StaticMethods_isReadCurrentContent$$)(this, $event$$23$$) && ((0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this), $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = D.$JSCompiler_alias_TRUE$$)
            }else {
              $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ = (0,D.$JSCompiler_StaticMethods_handleActiveKeyDown$$)(this, $event$$23$$)
            }
          }
        }
        $JSCompiler_temp$$410_axis$$inline_854_axis$$inline_9490_cell$$6_column$$inline_868_header$$inline_9499_newCellIndex_newCellIndex$$inline_9494_processed$$1_processed$$inline_870_row$$inline_869$$ === D.$JSCompiler_alias_TRUE$$ && $event$$23$$.preventDefault()
      }
    }
  }
};
D.$JSCompiler_StaticMethods__fireKeyDownEvent$$ = function $$JSCompiler_StaticMethods__fireKeyDownEvent$$$($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$24$$) {
  var $cell$$7_header$$6_rowKey$$1$$;
  $cell$$7_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$24$$.target);
  if($cell$$7_header$$6_rowKey$$1$$ == D.$JSCompiler_alias_NULL$$) {
    $cell$$7_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$24$$.target);
    if($cell$$7_header$$6_rowKey$$1$$ == D.$JSCompiler_alias_NULL$$) {
      return
    }
    $cell$$7_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $cell$$7_header$$6_rowKey$$1$$)
  }else {
    $cell$$7_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $cell$$7_header$$6_rowKey$$1$$.parentNode)
  }
  $JSCompiler_StaticMethods__fireKeyDownEvent$self$$.fireEvent("keydown", {event:$event$$24$$, ui:{rowKey:$cell$$7_header$$6_rowKey$$1$$}})
};
D.$JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$17$$) {
  var $parentPos$$, $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$;
  if($element$$17$$) {
    $parentPos$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_findPos$self$$, $element$$17$$.offsetParent);
    $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$ = $element$$17$$.parentNode;
    var $matrixArray$$inline_876_transformZ$$inline_879$$, $transformY$$inline_878$$;
    $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$ ? ($cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$ = window.document.defaultView.getComputedStyle($cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$, D.$JSCompiler_alias_NULL$$), $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$ = $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$.getPropertyValue("-moz-transform") || $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$.getPropertyValue("-ms-transform") || $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$.getPropertyValue("-o-transform") || $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$.getPropertyValue("transform"), 
    $matrixArray$$inline_876_transformZ$$inline_879$$ = $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$.substr(7, $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$.length - 8).split(", "), $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_876_transformZ$$inline_879$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_876_transformZ$$inline_879$$[4], 
    10), $transformY$$inline_878$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_876_transformZ$$inline_879$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_876_transformZ$$inline_879$$[5], 10), $matrixArray$$inline_876_transformZ$$inline_879$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_876_transformZ$$inline_879$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_876_transformZ$$inline_879$$[6], 10), $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$ = 
    [$cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$, $transformY$$inline_878$$, $matrixArray$$inline_876_transformZ$$inline_879$$]) : $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$[0], 10) + (0,window.parseInt)($element$$17$$.offsetLeft, 10) + $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$[0], (0,window.parseInt)($parentPos$$[1], 10) + (0,window.parseInt)($element$$17$$.offsetTop, 10) + $cs$$inline_874_element$$inline_873_transform$$1_transform$$inline_875_transformX$$inline_877$$[1]]
  }
  return[0, 0]
};
D.$DvtDataGrid$$.prototype.$handleDatabodyMouseWheel$ = function $$DvtDataGrid$$$$$handleDatabodyMouseWheel$$($deltaY$$inline_883_event$$25$$) {
  var $delta$$1_deltaX$$inline_882$$;
  $deltaY$$inline_883_event$$25$$.preventDefault();
  $deltaY$$inline_883_event$$25$$.wheelDeltaX ? ($delta$$1_deltaX$$inline_882$$ = $deltaY$$inline_883_event$$25$$.wheelDeltaX, $deltaY$$inline_883_event$$25$$ = $deltaY$$inline_883_event$$25$$.wheelDeltaY) : ($delta$$1_deltaX$$inline_882$$ = 0, $deltaY$$inline_883_event$$25$$ = $deltaY$$inline_883_event$$25$$.detail ? -40 * $deltaY$$inline_883_event$$25$$.detail : $deltaY$$inline_883_event$$25$$.wheelDelta);
  $delta$$1_deltaX$$inline_882$$ = {deltaX:$delta$$1_deltaX$$inline_882$$, deltaY:$deltaY$$inline_883_event$$25$$};
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $delta$$1_deltaX$$inline_882$$.deltaX, $delta$$1_deltaX$$inline_882$$.deltaY)
};
D.$DvtDataGrid$$.prototype.$handleTouchStart$ = function $$DvtDataGrid$$$$$handleTouchStart$$($event$$26$$) {
  var $dir$$8_target$$42$$, $selection$$1$$;
  if(1 == $event$$26$$.touches.length) {
    this.$m_startX$ = $event$$26$$.touches[0].pageX;
    this.$m_startY$ = $event$$26$$.touches[0].pageY;
    this.$m_currentX$ = this.$m_startX$;
    this.$m_currentY$ = this.$m_startY$;
    this.$m_prevX$ = this.$m_startX$;
    this.$m_prevY$ = this.$m_startY$;
    this.$m_startTime$ = (new window.Date).getTime();
    this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$;
    $dir$$8_target$$42$$ = $event$$26$$.touches[0].target;
    if((0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)) {
      if($dir$$8_target$$42$$.className === this.getMappedStyle("selectaffordancetop") || $dir$$8_target$$42$$.className === this.getMappedStyle("selectaffordancebottom")) {
        $dir$$8_target$$42$$ = $dir$$8_target$$42$$.parentNode
      }
      if($dir$$8_target$$42$$ = $dir$$8_target$$42$$ === this.$m_topSelectIconContainer$ ? "top" : $dir$$8_target$$42$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : D.$JSCompiler_alias_NULL$$) {
        this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_TRUE$$, $selection$$1$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$8_target$$42$$ ? $selection$$1$$[$selection$$1$$.length - 1].endIndex : $selection$$1$$[$selection$$1$$.length - 1].startIndex
      }
    }
    !this.$m_touchMultipleSelect$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$26$$.touches[0].target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$handleTouchCancel$()
  }
};
D.$DvtDataGrid$$.prototype.$handleTouchMove$ = function $$DvtDataGrid$$$$$handleTouchMove$$($event$$27$$) {
  var $diffX$$, $diffY$$, $time$$;
  this.$m_touchActive$ ? ($event$$27$$.preventDefault(), this.$m_currentX$ = $event$$27$$.touches[0].pageX, this.$m_currentY$ = $event$$27$$.touches[0].pageY, $diffX$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_resources$.isRTLMode() && ($diffX$$ *= -1), $time$$ = (new window.Date).getTime(), this.$m_touchMultipleSelect$ ? (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $event$$27$$) : this.$m_databodyMove$ ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), 
  (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$27$$)) : (this.$m_databody$.firstChild.style.webkitTransitionDuration = "0ms", this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = "0ms", this.$m_colHeader$.firstChild.style.webkitTransitionDuration = "0ms", (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $diffX$$, $diffY$$), 300 < $time$$ - this.$m_startTime$ && (this.$m_startX$ = this.$m_currentX$, this.$m_startY$ = this.$m_currentY$, this.$m_startTime$ = (new window.Date).getTime())), 
  this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$DvtDataGrid$$.prototype.$handleTouchEnd$ = function $$DvtDataGrid$$$$$handleTouchEnd$$($event$$28_momentumX$$) {
  var $duration$$3_momentumY$$, $diffX$$1$$, $diffY$$1$$, $rtl$$1_transitionDuration$$;
  if(this.$m_touchActive$ && !$event$$28_momentumX$$.defaultPrevented) {
    if(this.$m_touchMultipleSelect$) {
      $event$$28_momentumX$$.preventDefault(), this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$
    }else {
      $duration$$3_momentumY$$ = (new window.Date).getTime() - this.$m_startTime$;
      if(this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
        this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$;
        (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && 750 > $duration$$3_momentumY$$ ? (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$28_momentumX$$) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$28_momentumX$$);
        return
      }
      if(this.$m_databodyMove$) {
        $event$$28_momentumX$$.preventDefault();
        this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$;
        (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$);
        return
      }
      $rtl$$1_transitionDuration$$ = this.$m_resources$.isRTLMode();
      $diffX$$1$$ = this.$m_currentX$ - this.$m_startX$;
      $diffY$$1$$ = this.$m_currentY$ - this.$m_startY$;
      $rtl$$1_transitionDuration$$ && ($diffX$$1$$ *= -1);
      if(10 > window.Math.abs($diffX$$1$$) && 10 > window.Math.abs($diffY$$1$$) && 200 > $duration$$3_momentumY$$) {
        $event$$28_momentumX$$.preventDefault();
        this.$handleTouchCancel$();
        (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this);
        return
      }
      if(400 > $duration$$3_momentumY$$) {
        $event$$28_momentumX$$.preventDefault();
        $event$$28_momentumX$$ = (0,D.$JSCompiler_StaticMethods__calculateMomentum$$)(this.$m_currentX$, this.$m_startX$, $duration$$3_momentumY$$, this.$m_currentScrollLeft$, this.$m_scrollWidth$, $rtl$$1_transitionDuration$$);
        if(!(0,window.isNaN)($event$$28_momentumX$$.$overScroll$) && (0 < $event$$28_momentumX$$.$overScroll$ || this.$m_stopColumnFetch$)) {
          this.$m_extraScrollOverX$ = -1 * $event$$28_momentumX$$.$overScroll$
        }
        $duration$$3_momentumY$$ = (0,D.$JSCompiler_StaticMethods__calculateMomentum$$)(this.$m_currentY$, this.$m_startY$, $duration$$3_momentumY$$, this.$m_currentScrollTop$, this.$m_scrollHeight$);
        if(!(0,window.isNaN)($duration$$3_momentumY$$.$overScroll$) && (0 < $duration$$3_momentumY$$.$overScroll$ || this.$m_stopRowFetch$)) {
          this.$m_extraScrollOverY$ = -1 * $duration$$3_momentumY$$.$overScroll$
        }
        $rtl$$1_transitionDuration$$ = window.Math.max($event$$28_momentumX$$.duration, $duration$$3_momentumY$$.duration);
        this.$m_databody$.firstChild.style.webkitTransitionDuration = $rtl$$1_transitionDuration$$ + "ms";
        this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = $rtl$$1_transitionDuration$$ + "ms";
        this.$m_colHeader$.firstChild.style.webkitTransitionDuration = $rtl$$1_transitionDuration$$ + "ms";
        (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $diffX$$1$$ + $event$$28_momentumX$$.$destination$, $diffY$$1$$ + $duration$$3_momentumY$$.$destination$)
      }
    }
  }
  this.$handleTouchCancel$()
};
D.$JSCompiler_StaticMethods__calculateMomentum$$ = function $$JSCompiler_StaticMethods__calculateMomentum$$$($current_destination_distance$$, $duration$$4_start$$16$$, $speed_time$$1$$, $currentScroll$$, $maxScroll$$, $rtl$$2$$) {
  var $overScroll$$;
  $current_destination_distance$$ -= $duration$$4_start$$16$$;
  $speed_time$$1$$ = window.Math.abs($current_destination_distance$$) / $speed_time$$1$$;
  $current_destination_distance$$ = $speed_time$$1$$ * $speed_time$$1$$ / 0.0012 * (0 > $current_destination_distance$$ ? -1 : 1);
  $duration$$4_start$$16$$ = $speed_time$$1$$ / 6E-4;
  $rtl$$2$$ && ($current_destination_distance$$ *= -1);
  $currentScroll$$ - $current_destination_distance$$ > $maxScroll$$ ? ($overScroll$$ = window.Math.max(-50, $current_destination_distance$$), $current_destination_distance$$ = $currentScroll$$ - $maxScroll$$, $duration$$4_start$$16$$ = ($maxScroll$$ - $currentScroll$$) / $speed_time$$1$$) : 0 > $currentScroll$$ - $current_destination_distance$$ && ($overScroll$$ = window.Math.min(50, $current_destination_distance$$), $current_destination_distance$$ = $currentScroll$$, $duration$$4_start$$16$$ = $currentScroll$$ / 
  $speed_time$$1$$);
  return{$destination$:window.Math.round($current_destination_distance$$), duration:window.Math.max(100, $duration$$4_start$$16$$), $overScroll$:$overScroll$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_databodyMove$ && ((0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$);
  this.$m_touchSelectAnchor$ = D.$JSCompiler_alias_NULL$$;
  this.$m_touchActive$ = this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_startTime$ = this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$30$$) {
  var $header$$7$$;
  this.$m_touchStart$ = (new window.Date).getTime();
  1 == $event$$30$$.touches.length ? (this.$m_startX$ = $event$$30$$.touches[0].pageX, this.$m_startY$ = $event$$30$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$, $header$$7$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$30$$.target), (0,window.setTimeout)(function() {
    var $event$$30$$, $headerAxis$$, $headerLevel$$;
    this.$m_touchActive$ && (!this.$m_isResizing$ && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) && ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), $event$$30$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$7$$), $headerAxis$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$7$$), $headerLevel$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)(this, $header$$7$$), "row" === $headerAxis$$ ? 
    (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $event$$30$$, $headerLevel$$) : "column" === $headerAxis$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $event$$30$$, $headerLevel$$))
  }.bind(this), 300), (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ((0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$30$$), (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$30$$)), !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$30$$.target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$)) : this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$31_time$$2$$) {
  var $diffX$$2$$, $diffY$$2$$;
  this.$m_touchActive$ ? ($event$$31_time$$2$$.preventDefault(), this.$m_currentX$ = $event$$31_time$$2$$.touches[0].pageX, this.$m_currentY$ = $event$$31_time$$2$$.touches[0].pageY, $diffX$$2$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$2$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$31_time$$2$$) : this.$m_databodyMove$ ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), 
  (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$31_time$$2$$)) : ($event$$31_time$$2$$ = (new window.Date).getTime(), this.$m_databody$.firstChild.style.webkitTransitionDuration = "0ms", this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = "0ms", this.$m_colHeader$.firstChild.style.webkitTransitionDuration = "0ms", (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $diffX$$2$$, $diffY$$2$$), 300 < $event$$31_time$$2$$ - this.$m_startTime$ && (this.$m_startX$ = this.$m_currentX$, 
  this.$m_startY$ = this.$m_currentY$, this.$m_startTime$ = (new window.Date).getTime())), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$32_momentumX$$1$$) {
  var $diffX$$3_touchLength$$, $duration$$5_momentumY$$1$$, $rtl$$3_transitionDuration$$1$$, $diffY$$3$$;
  $diffX$$3_touchLength$$ = (new window.Date).getTime() - this.$m_touchStart$;
  if(this.$m_touchActive$ && !$event$$32_momentumX$$1$$.defaultPrevented) {
    if(this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && 300 > $diffX$$3_touchLength$$) {
      (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$32_momentumX$$1$$.target) && ($event$$32_momentumX$$1$$.preventDefault(), (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$32_momentumX$$1$$), (0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this))
    }else {
      if(this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this)) {
        (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$32_momentumX$$1$$), this.$m_currentX$ != this.$m_startX$ && this.$m_currentY$ != this.$m_startY$ && $event$$32_momentumX$$1$$.preventDefault()
      }else {
        if(this.$m_databodyMove$) {
          $event$$32_momentumX$$1$$.preventDefault(), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
        }else {
          if($duration$$5_momentumY$$1$$ = (new window.Date).getTime() - this.$m_startTime$, $rtl$$3_transitionDuration$$1$$ = this.$m_resources$.isRTLMode(), $diffX$$3_touchLength$$ = this.$m_currentX$ - this.$m_startX$, $diffY$$3$$ = this.$m_currentY$ - this.$m_startY$, $rtl$$3_transitionDuration$$1$$ && ($diffX$$3_touchLength$$ *= -1), 10 > window.Math.abs($diffX$$3_touchLength$$) && 10 > window.Math.abs($diffY$$3$$) && 200 > $duration$$5_momentumY$$1$$) {
            $event$$32_momentumX$$1$$.preventDefault(), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this)
          }else {
            if(400 > $duration$$5_momentumY$$1$$) {
              $event$$32_momentumX$$1$$.preventDefault();
              $event$$32_momentumX$$1$$ = (0,D.$JSCompiler_StaticMethods__calculateMomentum$$)(this.$m_currentX$, this.$m_startX$, $duration$$5_momentumY$$1$$, this.$m_currentScrollLeft$, this.$m_scrollWidth$, $rtl$$3_transitionDuration$$1$$);
              if(!(0,window.isNaN)($event$$32_momentumX$$1$$.$overScroll$) && (0 < $event$$32_momentumX$$1$$.$overScroll$ || this.$m_stopColumnFetch$)) {
                this.$m_extraScrollOverX$ = -1 * $event$$32_momentumX$$1$$.$overScroll$
              }
              $duration$$5_momentumY$$1$$ = (0,D.$JSCompiler_StaticMethods__calculateMomentum$$)(this.$m_currentY$, this.$m_startY$, $duration$$5_momentumY$$1$$, this.$m_currentScrollTop$, this.$m_scrollHeight$);
              if(!(0,window.isNaN)($duration$$5_momentumY$$1$$.$overScroll$) && (0 < $duration$$5_momentumY$$1$$.$overScroll$ || this.$m_stopRowFetch$)) {
                this.$m_extraScrollOverY$ = -1 * $duration$$5_momentumY$$1$$.$overScroll$
              }
              $rtl$$3_transitionDuration$$1$$ = window.Math.max($event$$32_momentumX$$1$$.duration, $duration$$5_momentumY$$1$$.duration);
              this.$m_databody$.firstChild.style.webkitTransitionDuration = $rtl$$3_transitionDuration$$1$$ + "ms";
              this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = $rtl$$3_transitionDuration$$1$$ + "ms";
              this.$m_colHeader$.firstChild.style.webkitTransitionDuration = $rtl$$3_transitionDuration$$1$$ + "ms";
              (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $diffX$$3_touchLength$$ + $event$$32_momentumX$$1$$.$destination$, $diffY$$3$$ + $duration$$5_momentumY$$1$$.$destination$)
            }
          }
        }
      }
    }
  }
  this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_databodyMove$ && ((0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$);
  this.$m_touchActive$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0
};
D.$JSCompiler_prototypeAlias$$.fireEvent = function $$JSCompiler_prototypeAlias$$$fireEvent$($functionName$$, $details$$3$$) {
  var $callback$$29$$;
  $functionName$$ == D.$JSCompiler_alias_NULL$$ || $details$$3$$ == D.$JSCompiler_alias_NULL$$ || ($callback$$29$$ = this.$callbacks$[$functionName$$], $callback$$29$$ != D.$JSCompiler_alias_NULL$$ && $callback$$29$$($details$$3$$))
};
D.$JSCompiler_prototypeAlias$$.addListener = function $$JSCompiler_prototypeAlias$$$addListener$($functionName$$1$$, $handler$$3$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$3$$
};
D.$JSCompiler_StaticMethods_setElementHeight$$ = function $$JSCompiler_StaticMethods_setElementHeight$$$($elem$$9$$, $height$$24$$) {
  $elem$$9$$.style.height = $height$$24$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementHeight$$ = function $$JSCompiler_StaticMethods_getElementHeight$$$($elem$$10$$) {
  var $height$$25$$;
  if(-1 < $elem$$10$$.style.height.indexOf("px")) {
    return(0,window.parseInt)($elem$$10$$.style.height, 10)
  }
  window.document.body.contains($elem$$10$$) ? $height$$25$$ = $elem$$10$$.offsetHeight : ($elem$$10$$.style.visibility = "hidden", window.document.body.appendChild($elem$$10$$), $height$$25$$ = window.Math.round($elem$$10$$.getBoundingClientRect().height), window.document.body.removeChild($elem$$10$$), $elem$$10$$.style.visibility = "");
  return $height$$25$$
};
D.$JSCompiler_StaticMethods_setElementWidth$$ = function $$JSCompiler_StaticMethods_setElementWidth$$$($elem$$11$$, $width$$21$$) {
  $elem$$11$$.style.width = $width$$21$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementWidth$$ = function $$JSCompiler_StaticMethods_getElementWidth$$$($elem$$12$$) {
  var $width$$22$$;
  if(-1 < $elem$$12$$.style.width.indexOf("px")) {
    return(0,window.parseInt)($elem$$12$$.style.width, 10)
  }
  window.document.body.contains($elem$$12$$) ? $width$$22$$ = $elem$$12$$.offsetWidth : ($elem$$12$$.style.visibility = "hidden", window.document.body.appendChild($elem$$12$$), $width$$22$$ = window.Math.round($elem$$12$$.getBoundingClientRect().width), window.document.body.removeChild($elem$$12$$), $elem$$12$$.style.visibility = "");
  return $width$$22$$
};
D.$JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$13$$, $pix$$, $dir$$9$$) {
  $elem$$13$$.style[$dir$$9$$] = $pix$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$14$$, $dir$$10$$) {
  return(0,window.parseInt)($elem$$14$$.style[$dir$$10$$], 10)
};
D.$JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$9$$) {
  var $rowIndex$$1$$, $columnIndex$$1$$;
  $rowIndex$$1$$ = $indexes$$9$$.row;
  $columnIndex$$1$$ = $indexes$$9$$.column;
  return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$1$$ ? $rowIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
};
D.$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($event$$34_i$$inline_908_transition_timing_function$$inline_9522$$) {
  var $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$, $keys$$5$$, $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$, $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$, $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$, 
  $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$;
  if(this.$m_initialized$) {
    if($afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.operation, $keys$$5$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.keys, $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.header && ($adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.header), 
    $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.indices, $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.source, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.indexes, 
    $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.silent, "insert" === $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$) {
      $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.result, (0,D.$JSCompiler_StaticMethods__adjustActive$$)(this, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$), (0,D.$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$)(this, 
      $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$, $keys$$5$$, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$), $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ != D.$JSCompiler_alias_NULL$$ ? $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ && $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ instanceof 
      window.oj.FlattenedTreeDataGridDataSource ? (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$, $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$) : 
      ($cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$), 3 === $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ || 2 === $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ && 
      $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$.row == this.$m_endRow$ + 1 ? $keys$$5$$.row != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) ? (this.empty(), this.refresh(this.$m_root$)) : (this.fetchHeaders("row", $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 
      $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$.row, this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellInsertsFetchSuccess$}))) : (1 === $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ && (this.$m_startRow$++, this.$m_startRowHeader$++, this.$m_endRow$++, this.$m_endRowHeader$++, this.$m_startRowPixel$ += this.$m_avgRowHeight$, 
      this.$m_startRowHeaderPixel$ += this.$m_avgRowHeight$, this.$m_endRowPixel$ += this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ += this.$m_avgRowHeight$, $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = this.$m_databody$.firstChild.childNodes[1], $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ != 
      D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$, this.$m_avgRowHeight$), $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = this.$m_rowHeader$.firstChild.childNodes[1], $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ != 
      D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$, this.$m_avgRowHeight$)), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$)))
    }else {
      if("update" === $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$) {
        3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$) && (-1 != this.$m_endRowHeader$ && this.fetchHeaders("row", $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderUpdatesFetchSuccess$, error:this.$handleHeadersFetchError$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$.row, 
        this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellUpdatesFetchSuccess$, error:this.$handleCellsFetchError$}))
      }else {
        if("delete" === $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$) {
          if((0,D.$JSCompiler_StaticMethods__adjustActive$$)(this, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$), (0,D.$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$)(this, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$, $keys$$5$$, $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$), $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ && 
          $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ instanceof window.oj.FlattenedTreeDataGridDataSource && (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)()) {
            (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$5$$)
          }else {
            if($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ && (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)()) {
              if($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$) {
                var $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$ = this, $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$, $j$$inline_9508$$, $k$$inline_9509$$, $row$$inline_9511$$, $totalHeight$$inline_9512$$, $height$$inline_9513$$, $databodyContent$$inline_9515$$, $lastTopRow$$inline_9517$$, $start$$inline_9518$$, $firstRowCase$$inline_9519$$, $height$$inline_911_opacity$$inline_9523$$;
                $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ = [];
                $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = [];
                for($i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ = 0;$i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ < $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$.length - 1;$i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$++) {
                  1 == $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$[$i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ + 1] - $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$[$i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$] ? $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$.push($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$[$i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$]) : 
                  ($afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$.push($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$[$i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$]), $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$.push($afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$), 
                  $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ = [])
                }
                $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$.push($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$[$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$.length - 1]);
                $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$.push($afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$);
                $row$$inline_9511$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$[$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$.length - 1]);
                $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ = $row$$inline_9511$$.nextSibling;
                $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ = 0;
                $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
                $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
                $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
                $height$$inline_911_opacity$$inline_9523$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("opacity");
                (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
                $firstRowCase$$inline_9519$$ = D.$JSCompiler_alias_TRUE$$;
                $databodyContent$$inline_9515$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_databody$.firstChild;
                $lastTopRow$$inline_9517$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$[0]);
                0 != $lastTopRow$$inline_9517$$.previousSibling.childElementCount && ($lastTopRow$$inline_9517$$ = $lastTopRow$$inline_9517$$.previousSibling, $firstRowCase$$inline_9519$$ = D.$JSCompiler_alias_FALSE$$);
                for($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ = 0;$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ < $keys$$5$$.length;$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$++) {
                  $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$ = $keys$$5$$[$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$], $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$.row && ($beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$ = $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$.row, 
                  $row$$inline_9511$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$), $row$$inline_9511$$ != D.$JSCompiler_alias_NULL$$ ? ($height$$inline_9513$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $row$$inline_9511$$), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9511$$, 
                  $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$, "400ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9511$$, $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$, "0ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9511$$, $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$, "Cubic-bezier(0.70,0.00,0.51,1.29)"), 
                  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9511$$, $height$$inline_911_opacity$$inline_9523$$, 0)) : $height$$inline_9513$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_avgRowHeight$, $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$), 
                  $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_9513$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$), $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ = $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$.nextSibling, 
                  (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$, -$height$$inline_9513$$), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$_remove$($beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$), $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$.style.display = "none", $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_endRowHeader$ -= 
                  1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_endRowHeaderPixel$ -= $height$$inline_9513$$), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_endRowPixel$ -= $height$$inline_9513$$, $totalHeight$$inline_9512$$ += $height$$inline_9513$$)
                }
                if(1 < $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$.length) {
                  for($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ = 0;$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ < $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$.length - 1;$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$++) {
                    $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ += $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$[$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$].length;
                    $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$ = $height$$inline_9513$$ * $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$;
                    for($j$$inline_9508$$ = $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$[$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$][$cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$[$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$].length - 
                    1] + 1;$j$$inline_9508$$ < $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$[$beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ + 1][0];$j$$inline_9508$$++) {
                      $row$$inline_9511$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $j$$inline_9508$$), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$inline_9511$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$)
                    }
                  }
                }
                $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$;
                for($adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$ = $height$$inline_9513$$ * $keys$$5$$.length;$cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$;) {
                  $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ = $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$.previousSibling, (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$, 
                  "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$), ($cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$.nextSibling) || 
                  $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$.addEventListener("transitionend", function() {
                    for($j$$inline_9508$$ = 0;$j$$inline_9508$$ < $keys$$5$$.length;$j$$inline_9508$$++) {
                      $keys$$5$$[$j$$inline_9508$$].row && ($row$$inline_9511$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $keys$$5$$[$j$$inline_9508$$].row), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$_remove$($row$$inline_9511$$), $row$$inline_9511$$.style.display = "none")
                    }
                    $start$$inline_9518$$ = -1;
                    for($k$$inline_9509$$ = 1;$k$$inline_9509$$ < $databodyContent$$inline_9515$$.childElementCount;$k$$inline_9509$$++) {
                      $row$$inline_9511$$ = $databodyContent$$inline_9515$$.childNodes[$k$$inline_9509$$], (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $lastTopRow$$inline_9517$$) && (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $lastTopRow$$inline_9517$$) == (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, 
                      $databodyContent$$inline_9515$$.childNodes[$k$$inline_9509$$]) && ($start$$inline_9518$$ = $k$$inline_9509$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9511$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($row$$inline_9511$$), 0 < $start$$inline_9518$$ ? $databodyContent$$inline_9515$$.childNodes[$k$$inline_9509$$].style.top = $lastTopRow$$inline_9517$$.offsetTop + 
                      $height$$inline_9513$$ * ($k$$inline_9509$$ - $start$$inline_9518$$ + 1) + "px" : $firstRowCase$$inline_9519$$ && ($databodyContent$$inline_9515$$.childNodes[$k$$inline_9509$$].style.top = $lastTopRow$$inline_9517$$.offsetTop + $height$$inline_9513$$ * ($k$$inline_9509$$ - 1) + "px")
                    }
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_9515$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_9515$$) - $totalHeight$$inline_9512$$);
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_scroller$.firstChild, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_9515$$) - $totalHeight$$inline_9512$$);
                    (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$);
                    $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
                    (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$.$m_currentScrollTop$);
                    (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9503$$);
                    this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
                  }, D.$JSCompiler_alias_FALSE$$)
                }
              }else {
                (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$5$$)
              }
            }else {
              $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$ = $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$;
              $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ = $keys$$5$$;
              var $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$, $row$$inline_910$$, $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$, $insideRowsDeleted$$inline_922$$;
              window.Array.isArray($keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$) || ($keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ = (0,window.Array)($keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$), $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$ = (0,window.Array)($adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$));
              for($event$$34_i$$inline_908_transition_timing_function$$inline_9522$$ = $insideRowsDeleted$$inline_922$$ = $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$ = $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ = $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ = $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ = 0;$event$$34_i$$inline_908_transition_timing_function$$inline_9522$$ < 
              $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$.length;$event$$34_i$$inline_908_transition_timing_function$$inline_9522$$++) {
                $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$ = $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$[$event$$34_i$$inline_908_transition_timing_function$$inline_9522$$], $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$ = $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$[$event$$34_i$$inline_908_transition_timing_function$$inline_9522$$], $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$.row != 
                D.$JSCompiler_alias_NULL$$ && ($height$$inline_911_opacity$$inline_9523$$ = 0, $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$ = $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$.row, $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$ = (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$), 1 === $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$ ? ($beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$++, 
                $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ += this.$m_avgRowHeight$, this.$m_startRowPixel$ -= this.$m_avgRowHeight$, this.$m_endRowPixel$ -= this.$m_avgRowHeight$, -1 != this.$m_endRowHeader$ && (this.$m_startRowHeaderPixel$ -= this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ -= this.$m_avgRowHeight$), $row$$inline_910$$ = this.$m_databody$.firstChild.childNodes[1], $row$$inline_910$$ != D.$JSCompiler_alias_NULL$$ && 
                (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($row$$inline_910$$, -this.$m_avgRowHeight$), $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$ = this.$m_rowHeader$.firstChild.childNodes[1], $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$, -this.$m_avgRowHeight$)) : 3 === $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$ ? 
                ($insideRowsDeleted$$inline_922$$++, $row$$inline_910$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$), $row$$inline_910$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_911_opacity$$inline_9523$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)(this, $row$$inline_910$$), $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$ = $row$$inline_910$$.nextSibling, this.$_remove$($row$$inline_910$$), 
                (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$, -$height$$inline_911_opacity$$inline_9523$$), this.$m_endRowPixel$ -= $height$$inline_911_opacity$$inline_9523$$), $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$), $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$ != D.$JSCompiler_alias_NULL$$ && 
                ($height$$inline_911_opacity$$inline_9523$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)(this, $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$), $flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$ = $key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$.nextSibling, this.$_remove$($key$$inline_907_rowHeader$$inline_918_rowKey$$inline_909$$), (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($flag$$inline_919_index$$inline_920_referenceRow$$inline_912$$, 
                -$height$$inline_911_opacity$$inline_9523$$), this.$m_endRowHeaderPixel$ -= $height$$inline_911_opacity$$inline_9523$$), $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ += $height$$inline_911_opacity$$inline_9523$$) : "scroll" === (0,D.$JSCompiler_StaticMethods_getScrollPolicy$$)(this.$m_options$) && ($afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ += this.$m_avgRowHeight$))
              }
              this.$m_startRow$ -= $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$;
              this.$m_endRow$ = this.$m_endRow$ - $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$ - $insideRowsDeleted$$inline_922$$;
              -1 != this.$m_endRowHeader$ && (this.$m_startRowHeader$ -= $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$, this.$m_endRowHeader$ = this.$m_endRowHeader$ - $beforeRowsDeleted$$inline_921_key$$inline_9506_rowHeader$$inline_9516_rowKey$$inline_9510$$ - $insideRowsDeleted$$inline_922$$);
              $adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$ = this.$m_databody$.firstChild;
              $keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$ = this.$m_scroller$.firstChild;
              $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$) - ($beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$ + $i$$inline_9528_indexes$$10_insideRowsHeight$$inline_915_referenceRow$$inline_9514$$ + $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$);
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($adjustment$$inline_9525_databodyContent$$inline_913_headerSet$$8_indexes$$inline_904_transition_duration$$inline_9520$$, $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$);
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($keys$$inline_905_scrollerContent$$inline_924_source$$2_transition_delay$$inline_9521$$, $beforeRowsHeight$$inline_914_databodyContentHeight$$inline_917_i$$inline_9507_indices_rwp$$inline_9526$$);
              (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this);
              !$cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ && this.$m_moveActive$ != D.$JSCompiler_alias_TRUE$$ && (this.$m_stopRowFetch$ = this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$, -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
              (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
            }
          }
        }else {
          "refresh" === $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ || "reset" === $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ ? ($cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = this.$getVisibility$(), "visible" === $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ ? 
          (this.empty(), this.$m_root$.offsetParent != D.$JSCompiler_alias_NULL$$ ? this.refresh(this.$m_root$) : this.$setVisibility$("refresh")) : "hidden" === $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ && (this.empty(), this.$setVisibility$("refresh"))) : "sync" === $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$ && ($cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$ = 
          $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$.pageSize, this.$m_fetching$ = {}, this.$m_startRow$ = 0, this.$m_endRow$ = -1, this.$m_startRowHeader$ = 0, this.$m_endRowHeader$ = -1, this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = 0, this.$m_endCol$ = -1, this.$m_startColHeader$ = 0, this.$m_endColHeader$ = -1, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = 
          this.$m_startColPixel$ = 0, this.$m_columnHeaderLevelCount$ = this.$m_rowHeaderLevelCount$ = D.$JSCompiler_alias_VOID$$, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$, this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$, this.$m_prevActive$ = 
          this.$m_active$ = this.$m_selection$ = D.$JSCompiler_alias_NULL$$, this.$m_empty$ != D.$JSCompiler_alias_NULL$$ && (this.$m_root$.removeChild(this.$m_empty$), this.$m_empty$ = D.$JSCompiler_alias_NULL$$), this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$, this.fetchHeaders("row", 0, this.$m_rowHeader$, $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$, {success:function($event$$34_i$$inline_908_transition_timing_function$$inline_9522$$, 
          $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$, 0)
          }}), this.fetchHeaders("column", 0, this.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($event$$34_i$$inline_908_transition_timing_function$$inline_9522$$, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$) {
            this.$m_utils$.empty(this.$m_colHeader$.firstChild);
            this.$handleHeadersFetchSuccess$($event$$34_i$$inline_908_transition_timing_function$$inline_9522$$, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$)
          }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $cellSet$$7_flag$$inline_888_idxs$$inline_9530_pageSize$$inline_931_row$$inline_889_rowHeader$$inline_890_rwn$$inline_9524_silent_visibility$$inline_927$$, D.$JSCompiler_alias_NULL$$, {success:function($event$$34_i$$inline_908_transition_timing_function$$inline_9522$$, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $event$$34_i$$inline_908_transition_timing_function$$inline_9522$$, $afterRowsHeight$$inline_916_gap_size$$inline_9527_idx$$inline_9529_operation$$1$$)
          }}), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))
        }
      }
    }
  }else {
    this.$m_modelEvents$ == D.$JSCompiler_alias_VOID$$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($event$$34_i$$inline_908_transition_timing_function$$inline_9522$$)
  }
};
D.$JSCompiler_StaticMethods__adjustActive$$ = function $$JSCompiler_StaticMethods__adjustActive$$$($JSCompiler_StaticMethods__adjustActive$self$$, $operation$$2$$, $indexes$$11$$) {
  var $activeRowIndex$$, $i$$20$$, $rowIndex$$2$$, $activeHeader$$, $adjustment$$5$$ = 0;
  if($JSCompiler_StaticMethods__adjustActive$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$) {
    $activeHeader$$ = D.$JSCompiler_alias_FALSE$$, $activeRowIndex$$ = $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.row
  }else {
    if($JSCompiler_StaticMethods__adjustActive$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__adjustActive$self$$.$m_activeHeader$.axis) {
      $activeHeader$$ = D.$JSCompiler_alias_TRUE$$, $activeRowIndex$$ = $JSCompiler_StaticMethods__adjustActive$self$$.$m_activeHeader$.index
    }else {
      return
    }
  }
  window.Array.isArray($indexes$$11$$) || ($indexes$$11$$ = (0,window.Array)($indexes$$11$$));
  if($JSCompiler_StaticMethods__adjustActive$self$$.$m_moveActive$ === D.$JSCompiler_alias_TRUE$$) {
    if("insert" === $operation$$2$$) {
      $activeHeader$$ ? $JSCompiler_StaticMethods__adjustActive$self$$.$m_activeHeader$.index = $indexes$$11$$[0].row : $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.row = $indexes$$11$$[0].row;
      return
    }
    if("delete" === $operation$$2$$ && $indexes$$11$$[0].row === $activeRowIndex$$) {
      return
    }
  }
  $adjustment$$5$$ = "insert" === $operation$$2$$ ? 1 : -1;
  for($i$$20$$ = 0;$i$$20$$ < $indexes$$11$$.length;$i$$20$$++) {
    $rowIndex$$2$$ = $indexes$$11$$[$i$$20$$].row, $rowIndex$$2$$ < $activeRowIndex$$ ? $activeHeader$$ ? $JSCompiler_StaticMethods__adjustActive$self$$.$m_activeHeader$.index += $adjustment$$5$$ : $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.row += $adjustment$$5$$ : $rowIndex$$2$$ === $activeRowIndex$$ && "delete" === $operation$$2$$ && ($activeHeader$$ ? (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__adjustActive$self$$, -1) : $JSCompiler_StaticMethods__adjustActive$self$$.setActive(D.$JSCompiler_alias_NULL$$))
  }
};
D.$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$ = function $$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$$($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, $movedRow_operation$$3$$, $keys$$6$$, $indexes$$12$$) {
  var $selection$$2$$, $i$$21$$, $rowKey$$2$$, $rowIndex$$3$$, $j$$7$$, $range$$5$$, $newRowKey_startRowKey$$, $endRowKey$$, $startRowIndex$$, $endRowIndex$$, $adjustment$$6$$;
  window.Array.isArray($keys$$6$$) || ($keys$$6$$ = (0,window.Array)($keys$$6$$));
  window.Array.isArray($indexes$$12$$) || ($indexes$$12$$ = (0,window.Array)($indexes$$12$$));
  $selection$$2$$ = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$GetSelection$();
  if($keys$$6$$ == D.$JSCompiler_alias_NULL$$ || $indexes$$12$$ == D.$JSCompiler_alias_NULL$$ || $keys$$6$$.length != $indexes$$12$$.length || 0 == $selection$$2$$.length) {
    $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_moveActive$ && "insert" == $movedRow_operation$$3$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$) && $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ("cell" == $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_options$.$getSelectionMode$() && ($indexes$$12$$[0].column = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.column, 
    $keys$$6$$[0].column = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.columnKey), $movedRow_operation$$3$$ = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.createRange($indexes$$12$$[0], $indexes$$12$$[0], $keys$$6$$[0], $keys$$6$$[0]), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_selectionFrontier$ = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$, $selection$$2$$.push($movedRow_operation$$3$$)), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_moveActive$ = 
    D.$JSCompiler_alias_FALSE$$)
  }else {
    $adjustment$$6$$ = "insert" === $movedRow_operation$$3$$ ? 1 : -1;
    for($i$$21$$ = 0;$i$$21$$ < $keys$$6$$.length;$i$$21$$++) {
      $rowKey$$2$$ = $keys$$6$$[$i$$21$$].row;
      $rowIndex$$3$$ = $indexes$$12$$[$i$$21$$].row;
      for($j$$7$$ = $selection$$2$$.length;$j$$7$$--;) {
        $range$$5$$ = $selection$$2$$[$j$$7$$], $newRowKey_startRowKey$$ = $range$$5$$.startKey.row, $endRowKey$$ = $range$$5$$.endKey.row, $startRowIndex$$ = $range$$5$$.startIndex.row, $endRowIndex$$ = $range$$5$$.endIndex.row, $newRowKey_startRowKey$$ == $rowKey$$2$$ ? $endRowKey$$ == $rowKey$$2$$ && "delete" == $movedRow_operation$$3$$ ? $selection$$2$$.splice($j$$7$$, 1) : ($newRowKey_startRowKey$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, 
        $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_databody$.firstChild.childNodes[$range$$5$$.startIndex.row + 1 - $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_startRow$ + 1]), $range$$5$$.startKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$6$$) : $endRowKey$$ == $rowKey$$2$$ ? ($newRowKey_startRowKey$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_databody$.firstChild.childNodes[$range$$5$$.endIndex.row - 
        1 - $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_startRow$ + 1]), $range$$5$$.endKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$6$$) : $rowIndex$$3$$ < $startRowIndex$$ ? ($range$$5$$.startIndex.row += $adjustment$$6$$, $range$$5$$.endIndex.row += $adjustment$$6$$) : $rowIndex$$3$$ < $endRowIndex$$ && ($range$$5$$.endIndex.row += $adjustment$$6$$)
      }
    }
  }
};
D.$DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8_viewportBottom$$inline_943_viewportTop$$inline_948$$, $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$, $headerSet$$9_row$$inline_941_rowTop$$inline_944$$, $obj$$29$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleCellsFetchSuccess$($cellSet$$8_viewportBottom$$inline_943_viewportTop$$inline_948$$, $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$, this.$m_endRow$ >= $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$[0].start, $headerSet$$9_row$$inline_941_rowTop$$inline_944$$, $obj$$29$$);
  $headerSet$$9_row$$inline_941_rowTop$$inline_944$$ = this.$m_databody$.firstChild.childNodes[$cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$[0].start - this.$m_startRow$ + 1];
  $headerSet$$9_row$$inline_941_rowTop$$inline_944$$ != D.$JSCompiler_alias_NULL$$ && ($cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ = this.$m_currentScrollTop$, $cellSet$$8_viewportBottom$$inline_943_viewportTop$$inline_948$$ = this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $headerSet$$9_row$$inline_941_rowTop$$inline_944$$ = $headerSet$$9_row$$inline_941_rowTop$$inline_944$$.offsetTop, $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ -= 
  $headerSet$$9_row$$inline_941_rowTop$$inline_944$$, 0 < $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$) : ($cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ = $cellSet$$8_viewportBottom$$inline_943_viewportTop$$inline_948$$ - $headerSet$$9_row$$inline_941_rowTop$$inline_944$$, 0 > $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ && 
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$)));
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || ($cellSet$$8_viewportBottom$$inline_943_viewportTop$$inline_948$$ = this.$m_currentScrollTop$, $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ = this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $cellSet$$8_viewportBottom$$inline_943_viewportTop$$inline_948$$ > this.$m_startRowPixel$ ? this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && 
  (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)(this, this.$m_databody$) : $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ < this.$m_endRowPixel$ && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)(this, this.$m_databody$), $cellSet$$8_viewportBottom$$inline_943_viewportTop$$inline_948$$ > this.$m_startRowHeaderPixel$ ? this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && 
  (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$)(this, this.$m_rowHeader$) : $cellRanges_diff$$inline_945_viewportBottom$$inline_949_viewportTop$$inline_942$$ < this.$m_endRowPixel$ && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$)(this, this.$m_rowHeader$));
  (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
  this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$10$$, $headerRanges$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleHeadersFetchSuccess$($headerSet$$10$$, $headerRanges$$, this.$m_endRowHeader$ >= $headerRanges$$.start)
};
D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$ = function $$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $cellSet$$9$$, $headerSet$$11$$, $obj$$30$$) {
  var $rowRange$$5$$, $columnRange$$5$$;
  $rowRange$$5$$ = {axis:"row", start:$cellSet$$9$$.getStart("row"), count:$cellSet$$9$$.getCount("row")};
  $columnRange$$5$$ = {axis:"column", start:$cellSet$$9$$.getStart("column"), count:$cellSet$$9$$.getCount("column")};
  $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleCellInsertsFetchSuccess$($cellSet$$9$$, [$rowRange$$5$$, $columnRange$$5$$], $headerSet$$11$$, $obj$$30$$)
};
D.$DvtDataGrid$$.prototype.$_handleHeaderUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderUpdatesFetchSuccess$$($headerSet$$12$$, $headerRange$$9$$) {
  var $row$$20_rowStart$$7$$, $rowHeaderContent$$4$$, $fragment$$7_rowIndex$$4$$;
  this.$m_fetching$[$headerRange$$9$$.axis] = D.$JSCompiler_alias_FALSE$$;
  $row$$20_rowStart$$7$$ = $headerRange$$9$$.start;
  $rowHeaderContent$$4$$ = this.$m_rowHeader$.firstChild;
  $fragment$$7_rowIndex$$4$$ = $row$$20_rowStart$$7$$ - this.$m_startRowHeader$;
  $row$$20_rowStart$$7$$ = $rowHeaderContent$$4$$.childNodes[$fragment$$7_rowIndex$$4$$ + 1];
  $fragment$$7_rowIndex$$4$$ = (0,D.$JSCompiler_StaticMethods_buildRowHeaders$$)(this, this.$m_rowHeader$, $headerSet$$12$$, $fragment$$7_rowIndex$$4$$, 1, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
  $rowHeaderContent$$4$$.replaceChild($fragment$$7_rowIndex$$4$$, $row$$20_rowStart$$7$$);
  this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && ("row" === this.$m_activeHeader$.axis && (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $row$$20_rowStart$$7$$) === this.$m_activeHeader$.key) && (0,D.$JSCompiler_StaticMethods__highlightActiveHeader$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$7$$) {
  var $rowIndex$$5_rowStart$$8$$, $columnStart$$inline_956_databodyContent$$10$$, $renderer$$6$$, $columnBandingInterval$$3$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  $rowIndex$$5_rowStart$$8$$ = $cellRange$$7$$[0].start;
  $columnStart$$inline_956_databodyContent$$10$$ = this.$m_databody$.firstChild;
  $renderer$$6$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
  (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)(this.$m_options$);
  $rowIndex$$5_rowStart$$8$$ -= this.$m_startRow$;
  var $row$$inline_953$$ = $columnStart$$inline_956_databodyContent$$10$$.childNodes[$rowIndex$$5_rowStart$$8$$ + 1];
  $columnStart$$inline_956_databodyContent$$10$$ = this.$m_startCol$;
  var $width$$inline_960$$;
  (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)() ? ($row$$inline_953$$.addEventListener("transitionend", function() {
    $row$$inline_953$$.style.left = "";
    (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($row$$inline_953$$);
    $row$$inline_953$$.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
  }), $width$$inline_960$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($row$$inline_953$$, $width$$inline_960$$, "left"), this.$m_utils$.empty($row$$inline_953$$), (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_953$$, $rowIndex$$5_rowStart$$8$$, $renderer$$6$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$inline_956_databodyContent$$10$$, D.$JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$), 
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this), this.$highlightActive$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$inline_953$$, "250ms", 0, "linear", -1 * $width$$inline_960$$, 0)) : (this.$m_utils$.empty($row$$inline_953$$), (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_953$$, $rowIndex$$5_rowStart$$8$$, 
  $renderer$$6$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$inline_956_databodyContent$$10$$, D.$JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this), this.$highlightActive$(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__getRowByLocalPosition$$ = function $$JSCompiler_StaticMethods__getRowByLocalPosition$$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $pos$$4$$) {
  var $indexes$$inline_963$$ = {row:$pos$$4$$}, $keys$$inline_964$$ = {row:D.$JSCompiler_alias_NULL$$, column:D.$JSCompiler_alias_NULL$$};
  $indexes$$inline_963$$.row != D.$JSCompiler_alias_NULL$$ && ($keys$$inline_964$$.row = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_databody$.firstChild.childNodes[$indexes$$inline_963$$.row - $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_startRow$ + 1]));
  $indexes$$inline_963$$.column != D.$JSCompiler_alias_NULL$$ && ($keys$$inline_964$$.column = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $indexes$$inline_963$$.column, $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_ColumnHeaderLevelCount$ - 1)));
  return(0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $keys$$inline_964$$.$row$)
};
D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__collapseRowsWithAnimation$$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$) {
  var $key$$30_rowHeader$$17_rowKey$$6$$, $i$$25$$, $j$$9$$, $k$$2$$, $row$$25$$, $height$$28$$, $referenceRow$$5$$, $referenceRowHeader$$2$$, $databodyContent$$13$$, $clickedRow$$, $start$$18$$, $rowHeaderContent$$5$$, $transform$$4$$, $rowHdr$$, $parent$$3$$, $headerParent$$;
  (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
  (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
  (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
  $transform$$4$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
  $databodyContent$$13$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_databody$.firstChild;
  $clickedRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row).previousSibling;
  $parent$$3$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row).parentNode;
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($parent$$3$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 10);
  (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row) && ($headerParent$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row).parentNode, (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($headerParent$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 10));
  for($i$$25$$ = $keys$$12$$.length - 1;0 <= $i$$25$$;$i$$25$$--) {
    $key$$30_rowHeader$$17_rowKey$$6$$ = $keys$$12$$[$i$$25$$], $key$$30_rowHeader$$17_rowKey$$6$$.row && ($key$$30_rowHeader$$17_rowKey$$6$$ = $key$$30_rowHeader$$17_rowKey$$6$$.row, $row$$25$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $key$$30_rowHeader$$17_rowKey$$6$$), $row$$25$$ != D.$JSCompiler_alias_NULL$$ ? ($height$$28$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, 
    $row$$25$$), $referenceRow$$5$$ = $row$$25$$.nextSibling, (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$25$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), "-1" + ($i$$25$$ + 1)), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$25$$, "300ms", 0, "ease-out", 0, "-" + $row$$25$$.offsetTop), $i$$25$$ == $keys$$12$$.length - 1 && $row$$25$$.addEventListener("transitionend", function() {
      for($j$$9$$ = 0;$j$$9$$ < $keys$$12$$.length;$j$$9$$++) {
        $keys$$12$$[$j$$9$$].row && ($row$$25$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[$j$$9$$].row), $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$_remove$($row$$25$$), $row$$25$$.style.display = "none")
      }
      (0,window.setTimeout)(function() {
        $start$$18$$ = -1;
        for($k$$2$$ = 1;$k$$2$$ < $databodyContent$$13$$.childElementCount;$k$$2$$++) {
          (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $clickedRow$$) && (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $clickedRow$$) == (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $databodyContent$$13$$.childNodes[$k$$2$$]) && ($start$$18$$ = $k$$2$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$13$$.childNodes[$k$$2$$], 
          (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), $databodyContent$$13$$.children[$k$$2$$].style[$transform$$4$$] && (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($databodyContent$$13$$.childNodes[$k$$2$$]), 0 < $start$$18$$ && ($databodyContent$$13$$.childNodes[$k$$2$$].style.top = $clickedRow$$.offsetTop + $height$$28$$ * ($k$$2$$ - $start$$18$$ + 1) + "px")
        }
        (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($parent$$3$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove");
        $headerParent$$ && (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($headerParent$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove")
      }, 0);
      (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
      (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);
      (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
    }, D.$JSCompiler_alias_FALSE$$)) : $height$$28$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_avgRowHeight$, $key$$30_rowHeader$$17_rowKey$$6$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $key$$30_rowHeader$$17_rowKey$$6$$), $key$$30_rowHeader$$17_rowKey$$6$$ != D.$JSCompiler_alias_NULL$$ && ($rowHeaderContent$$5$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_rowHeader$.firstChild, 
    $referenceRowHeader$$2$$ = $key$$30_rowHeader$$17_rowKey$$6$$.nextSibling, (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($key$$30_rowHeader$$17_rowKey$$6$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), "-1" + ($i$$25$$ + 1)), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($key$$30_rowHeader$$17_rowKey$$6$$, "300ms", 0, "ease-out", 0, "-" + $row$$25$$.offsetTop), $i$$25$$ == $keys$$12$$.length - 1 && $key$$30_rowHeader$$17_rowKey$$6$$.addEventListener("transitionend", 
    function() {
      for(var $key$$30_rowHeader$$17_rowKey$$6$$ = 0;$key$$30_rowHeader$$17_rowKey$$6$$ < $keys$$12$$.length;$key$$30_rowHeader$$17_rowKey$$6$$++) {
        if($keys$$12$$[$key$$30_rowHeader$$17_rowKey$$6$$].row && ($rowHdr$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[$key$$30_rowHeader$$17_rowKey$$6$$].row))) {
          $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$_remove$($rowHdr$$), $rowHdr$$.style.display = "none"
        }
      }
      (0,window.setTimeout)(function() {
        $start$$18$$ = -1;
        for(var $keys$$12$$ = 1;$keys$$12$$ < $rowHeaderContent$$5$$.childElementCount;$keys$$12$$++) {
          (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $clickedRow$$) && (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $clickedRow$$) == (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $rowHeaderContent$$5$$.childNodes[$keys$$12$$]) && ($start$$18$$ = $keys$$12$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($rowHeaderContent$$5$$.childNodes[$keys$$12$$], 
          (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), $rowHeaderContent$$5$$.children[$keys$$12$$].style[$transform$$4$$] && (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($rowHeaderContent$$5$$.childNodes[$keys$$12$$]), 0 < $start$$18$$ && ($rowHeaderContent$$5$$.childNodes[$keys$$12$$].style.top = $clickedRow$$.offsetTop + $height$$28$$ * ($keys$$12$$ - $start$$18$$ + 1) + "px")
        }
      }, 0);
      this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
    }), $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeader$ -= 1, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeaderPixel$ -= $height$$28$$), $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ -= $height$$28$$)
  }
  (0,D.$JSCompiler_StaticMethods_pushRowsUpWithAnimation$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $referenceRow$$5$$, $databodyContent$$13$$, $height$$28$$ * $keys$$12$$.length, D.$JSCompiler_alias_FALSE$$);
  $referenceRowHeader$$2$$ && (0,D.$JSCompiler_StaticMethods_pushRowsUpWithAnimation$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $referenceRowHeader$$2$$, $rowHeaderContent$$5$$, $height$$28$$ * $keys$$12$$.length, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_pushRowsUpWithAnimation$$ = function $$JSCompiler_StaticMethods_pushRowsUpWithAnimation$$$($JSCompiler_StaticMethods_pushRowsUpWithAnimation$self$$, $self$$8$$, $row$$26$$, $content$$2$$, $adjustment$$8$$, $isRowHeader$$3$$) {
  var $i$$26$$, $scrollerContent$$4$$, $contentHeight$$;
  for($contentHeight$$ = 0;$row$$26$$;) {
    (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$26$$, "300ms", "0ms", "linear", 0, "-" + $adjustment$$8$$);
    if(!$row$$26$$.nextSibling) {
      $scrollerContent$$4$$ = $self$$8$$.$m_scroller$.firstChild;
      for($i$$26$$ = 1;$i$$26$$ < $content$$2$$.childElementCount;$i$$26$$++) {
        $contentHeight$$ += $content$$2$$.childNodes[$i$$26$$].clientHeight
      }
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($content$$2$$, $contentHeight$$);
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$4$$, $contentHeight$$);
      $isRowHeader$$3$$ ? ((0,D.$JSCompiler_StaticMethods_resizeHeaders$$)($self$$8$$), $JSCompiler_StaticMethods_pushRowsUpWithAnimation$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$) : ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)($self$$8$$), $self$$8$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods_fillViewport$$)($self$$8$$, $self$$8$$.$m_currentScrollLeft$, $self$$8$$.$m_currentScrollTop$), (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($self$$8$$))
    }
    $row$$26$$ = $row$$26$$.nextSibling
  }
};
D.$JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$31$$) {
  var $rows$$5$$, $row$$27$$, $i$$27$$, $rowKey$$7$$;
  if($JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$5$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  for($i$$27$$ = 1;$i$$27$$ < $rows$$5$$.length;$i$$27$$++) {
    if($row$$27$$ = $rows$$5$$[$i$$27$$], $rowKey$$7$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__findRowByKey$self$$, $row$$27$$), $rowKey$$7$$ == $key$$31$$) {
      return $row$$27$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$32$$) {
  var $rowHeaders$$2$$, $rowHeader$$18$$, $i$$28$$, $rowKey$$8$$;
  if($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rowHeaders$$2$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.getElementsByClassName($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.getMappedStyle("rowheadercell"));
  for($i$$28$$ = 0;$i$$28$$ < $rowHeaders$$2$$.length;$i$$28$$++) {
    if($rowHeader$$18$$ = $rowHeaders$$2$$[$i$$28$$], $rowKey$$8$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $rowHeader$$18$$), $rowKey$$8$$ == $key$$32$$) {
      return $rowHeader$$18$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$33$$) {
  var $columnHeaders$$2$$, $columnHeader$$4$$, $i$$29$$, $columnKey$$;
  if($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $columnHeaders$$2$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.getElementsByClassName($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.getMappedStyle("colheadercell"));
  for($i$$29$$ = 0;$i$$29$$ < $columnHeaders$$2$$.length;$i$$29$$++) {
    if($columnHeader$$4$$ = $columnHeaders$$2$$[$i$$29$$], $columnKey$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $columnHeader$$4$$), $columnKey$$ == $key$$33$$) {
      return $columnHeader$$4$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.setActive = function $$DvtDataGrid$$$$setActive$($active$$, $event$$36$$, $callback$$30$$) {
  $active$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, {row:$active$$.row, column:$active$$.column}, this.$_setActiveCallback$.bind(this, $event$$36$$, $callback$$30$$)) : (this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $active$$, (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this))
};
D.$DvtDataGrid$$.prototype.$_setActiveCallback$ = function $$DvtDataGrid$$$$$_setActiveCallback$$($event$$37$$, $callback$$31$$, $keys$$13$$, $indexes$$16$$) {
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ || $keys$$13$$.row != this.$m_active$.rowKey || $keys$$13$$.column != this.$m_active$.columnKey || $indexes$$16$$.column != this.$m_active$.columnIndex || $indexes$$16$$.row != this.$m_active$.rowIndex) {
    $indexes$$16$$.rowKey = $keys$$13$$.row, $indexes$$16$$.columnKey = $keys$$13$$.column, this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $indexes$$16$$, (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this), this.fireEvent("active", {event:$event$$37$$, ui:{previousActiveKey:this.$m_prevActive$, activeKey:this.$m_active$}})
  }
  $callback$$31$$.call(this)
};
D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickActive$$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$39$$) {
  var $cell$$8$$, $index$$63$$;
  $cell$$8$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$39$$.target);
  $cell$$8$$ != D.$JSCompiler_alias_NULL$$ && ($index$$63$$ = $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.createIndex($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getRowIndex$($cell$$8$$.parentNode), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getCellIndex$($cell$$8$$)));
  $index$$63$$ != D.$JSCompiler_alias_NULL$$ && $index$$63$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, -1), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $index$$63$$), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$activeAndFocus$($index$$63$$, 
  $event$$39$$))
};
D.$DvtDataGrid$$.prototype.$activeAndFocus$ = function $$DvtDataGrid$$$$$activeAndFocus$$($index$$64$$, $event$$40$$) {
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this);
  this.setActive($index$$64$$, $event$$40$$, this.$highlightActive$.bind(this, D.$JSCompiler_alias_VOID$$))
};
D.$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$28$$) {
  for(var $index$$65$$ = this.$m_startRow$;$row$$28$$.previousSibling;) {
    $index$$65$$ += 1, $row$$28$$ = $row$$28$$.previousSibling
  }
  return $index$$65$$ - 1
};
D.$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$9$$) {
  for(var $index$$66$$ = this.$m_startCol$;$cell$$9$$.previousSibling;) {
    $index$$66$$ += 1, $cell$$9$$ = $cell$$9$$.previousSibling
  }
  return $index$$66$$
};
D.$JSCompiler_StaticMethods_getHeaderCellIndex$$ = function $$JSCompiler_StaticMethods_getHeaderCellIndex$$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$) {
  var $axis$$18$$, $index$$67$$;
  $axis$$18$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$);
  if("row" === $axis$$18$$) {
    if(1 < $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_rowHeaderLevelCount$) {
      $index$$67$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$.parentNode, "start");
      if($header$$8$$ === $header$$8$$.parentNode.firstChild) {
        return $index$$67$$
      }
      $index$$67$$--
    }else {
      $index$$67$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startRowHeader$ - 1
    }
  }else {
    if("column" === $axis$$18$$) {
      if(1 < $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_columnHeaderLevelCount$) {
        $index$$67$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$.parentNode, "start");
        if($header$$8$$ === $header$$8$$.parentNode.firstChild) {
          return $index$$67$$
        }
        $index$$67$$--
      }else {
        $index$$67$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startColHeader$
      }
    }
  }
  for(;$header$$8$$.previousSibling;) {
    $index$$67$$ += 1, $header$$8$$ = $header$$8$$.previousSibling
  }
  return $index$$67$$
};
D.$JSCompiler_StaticMethods_getHeaderCellAxis$$ = function $$JSCompiler_StaticMethods_getHeaderCellAxis$$$($JSCompiler_StaticMethods_getHeaderCellAxis$self$$, $header$$9$$) {
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$9$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("colheadercell")) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$9$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("rowheadercell")) ? "row" : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getHeaderCellLevel$$ = function $$JSCompiler_StaticMethods_getHeaderCellLevel$$$($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$10$$) {
  var $level$$20$$;
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$10$$, $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.getMappedStyle("colheadercell"))) {
    if(1 === $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.$m_columnHeaderLevelCount$) {
      return 0
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$10$$, $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.getMappedStyle("rowheadercell"))) {
      if(1 === $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.$m_rowHeaderLevelCount$) {
        return 0
      }
    }else {
      return D.$JSCompiler_alias_NULL$$
    }
  }
  $level$$20$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$10$$.parentNode, "level");
  return $header$$10$$ === $header$$10$$.parentNode.firstChild ? $level$$20$$ : $level$$20$$ + 1
};
D.$JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$15$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$15$$, "cell")
};
D.$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$16$$, $key$$34$$, $className$$10$$) {
  if($elem$$16$$ == D.$JSCompiler_alias_NULL$$ || $elem$$16$$ == this.$m_root$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $className$$10$$ == D.$JSCompiler_alias_VOID$$ && ($className$$10$$ = this.getMappedStyle($key$$34$$));
  return $className$$10$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$16$$, $className$$10$$) ? $elem$$16$$ : this.find($elem$$16$$.parentNode, $key$$34$$, $className$$10$$)
};
D.$DvtDataGrid$$.prototype.$highlightActive$ = function $$DvtDataGrid$$$$$highlightActive$$($focus$$) {
  var $cell$$10$$, $skip$$1$$;
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($cell$$10$$ = (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, this.$m_active$, "focus"));
  $cell$$10$$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$.row === this.$m_active$.row ? $skip$$1$$ = "row" : this.$m_prevActive$.column === this.$m_active$.column && ($skip$$1$$ = "column")), (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)(this, this.$m_active$, $skip$$1$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)(this, $cell$$10$$, $focus$$ === D.$JSCompiler_alias_VOID$$ || 
  $focus$$ === D.$JSCompiler_alias_TRUE$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_VOID$$, $skip$$1$$));
  this.$m_contextMenuCallback$ != D.$JSCompiler_alias_NULL$$ && (this.$m_contextMenuCallback$.call(), this.$m_contextMenuCallback$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_unhighlightActive$$ = function $$JSCompiler_StaticMethods_unhighlightActive$$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $selectActive$$) {
  var $cell$$11$$, $selectedClassName$$;
  $cell$$11$$ = (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, D.$JSCompiler_alias_TRUE$$);
  $selectActive$$ && ($selectedClassName$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.getMappedStyle("selected"), $selectedClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, $selectedClassName$$));
  $cell$$11$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$11$$)
};
D.$JSCompiler_StaticMethods_highlightIndex$$ = function $$JSCompiler_StaticMethods_highlightIndex$$$($JSCompiler_StaticMethods_highlightIndex$self$$, $index$$68$$, $className$$11_style$$1$$) {
  var $cell$$12_range$$6_singleCell$$;
  $cell$$12_range$$6_singleCell$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.createRange($index$$68$$);
  $cell$$12_range$$6_singleCell$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$12_range$$6_singleCell$$);
  if(!($cell$$12_range$$6_singleCell$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$12_range$$6_singleCell$$.length)) {
    return $className$$11_style$$1$$ == D.$JSCompiler_alias_VOID$$ && ($className$$11_style$$1$$ = "selected"), $cell$$12_range$$6_singleCell$$ = $cell$$12_range$$6_singleCell$$[0], $className$$11_style$$1$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.getMappedStyle($className$$11_style$$1$$), $className$$11_style$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($cell$$12_range$$6_singleCell$$, $className$$11_style$$1$$), $index$$68$$.row && $index$$68$$.column && 
    (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$12_range$$6_singleCell$$)), $cell$$12_range$$6_singleCell$$
  }
};
D.$JSCompiler_StaticMethods_unhighlightIndex$$ = function $$JSCompiler_StaticMethods_unhighlightIndex$$$($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$13_index$$69_range$$7_singleCell$$1$$, $activeOnly$$) {
  var $activeClassName$$;
  $cell$$13_index$$69_range$$7_singleCell$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.createRange($cell$$13_index$$69_range$$7_singleCell$$1$$);
  $cell$$13_index$$69_range$$7_singleCell$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$13_index$$69_range$$7_singleCell$$1$$);
  if(!($cell$$13_index$$69_range$$7_singleCell$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$13_index$$69_range$$7_singleCell$$1$$.length)) {
    $cell$$13_index$$69_range$$7_singleCell$$1$$ = $cell$$13_index$$69_range$$7_singleCell$$1$$[0];
    $activeClassName$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("focus");
    $activeClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$13_index$$69_range$$7_singleCell$$1$$, $activeClassName$$);
    if($activeOnly$$ == D.$JSCompiler_alias_VOID$$ || !$activeOnly$$) {
      $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("selected"), $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$13_index$$69_range$$7_singleCell$$1$$, $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$13_index$$69_range$$7_singleCell$$1$$))
    }
    return $cell$$13_index$$69_range$$7_singleCell$$1$$
  }
};
D.$JSCompiler_StaticMethods_setAriaProperties$$ = function $$JSCompiler_StaticMethods_setAriaProperties$$$($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$14$$, $focus$$1$$, $skip$$2$$) {
  $cell$$14$$.setAttribute("tabIndex", 0);
  $cell$$14$$.setAttribute("aria-labelledby", (0,D.$JSCompiler_StaticMethods_getLabelledBy$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$14$$, $skip$$2$$));
  $focus$$1$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ != $cell$$14$$) && $cell$$14$$.focus()
};
D.$JSCompiler_StaticMethods_unsetAriaProperties$$ = function $$JSCompiler_StaticMethods_unsetAriaProperties$$$($cell$$15$$) {
  $cell$$15$$.setAttribute("tabIndex", -1);
  $cell$$15$$.removeAttribute("aria-labelledby")
};
D.$JSCompiler_StaticMethods_getLabelledBy$$ = function $$JSCompiler_StaticMethods_getLabelledBy$$$($JSCompiler_StaticMethods_getLabelledBy$self$$, $cell$$16$$, $columnHeader$$5_skip$$3$$) {
  var $label$$3_rowHeader$$19$$, $previousActiveRowHeader$$, $previousActiveColumnHeader$$;
  $label$$3_rowHeader$$19$$ = "";
  -1 != $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_endRowHeader$ && "row" != $columnHeader$$5_skip$$3$$ && ($label$$3_rowHeader$$19$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, $cell$$16$$, "row"), $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && ($previousActiveRowHeader$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_prevActive$.row, 
  $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_rowHeaderLevelCount$ - 1)), $label$$3_rowHeader$$19$$ = (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, $label$$3_rowHeader$$19$$, $previousActiveRowHeader$$));
  -1 != $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_endColHeader$ && "column" != $columnHeader$$5_skip$$3$$ && ($columnHeader$$5_skip$$3$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, $cell$$16$$, "column"), $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && ($previousActiveColumnHeader$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, 
  $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_prevActive$.column, $JSCompiler_StaticMethods_getLabelledBy$self$$.$m_columnHeaderLevelCount$ - 1)), $label$$3_rowHeader$$19$$ = "" == $label$$3_rowHeader$$19$$ ? (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, $columnHeader$$5_skip$$3$$, $previousActiveColumnHeader$$) : [$label$$3_rowHeader$$19$$, (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, 
  $columnHeader$$5_skip$$3$$, $previousActiveColumnHeader$$)].join(" "));
  $label$$3_rowHeader$$19$$ = "" == $label$$3_rowHeader$$19$$ ? $cell$$16$$.id : [$label$$3_rowHeader$$19$$, $cell$$16$$.id].join(" ");
  return $label$$3_rowHeader$$19$$ = [(0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, "context"), $label$$3_rowHeader$$19$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_getLabelledBy$self$$, "state")].join(" ")
};
D.$JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$17_colIndex_row$$29_rowIndex$$7$$, $axis$$19$$) {
  if("row" === $axis$$19$$) {
    if($JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$17_colIndex_row$$29_rowIndex$$7$$ = $cell$$17_colIndex_row$$29_rowIndex$$7$$.parentNode, $cell$$17_colIndex_row$$29_rowIndex$$7$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$17_colIndex_row$$29_rowIndex$$7$$) - 1 + $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_startRow$, -1 < $cell$$17_colIndex_row$$29_rowIndex$$7$$)) {
      return(0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$17_colIndex_row$$29_rowIndex$$7$$, $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_rowHeaderLevelCount$ - 1)
    }
  }else {
    if("column" === $axis$$19$$ && $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$17_colIndex_row$$29_rowIndex$$7$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$17_colIndex_row$$29_rowIndex$$7$$) + $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_startCol$, -1 < $cell$$17_colIndex_row$$29_rowIndex$$7$$)) {
      return(0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$17_colIndex_row$$29_rowIndex$$7$$, $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_columnHeaderLevelCount$ - 1)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$17$$) {
  var $child$$1$$, $children$$, $index$$70$$, $i$$30$$;
  $children$$ = $elem$$17$$.parentNode.childNodes;
  $index$$70$$ = -1;
  for($i$$30$$ = 0;$i$$30$$ < $children$$.length;$i$$30$$ += 1) {
    $child$$1$$ = $children$$[$i$$30$$];
    if($child$$1$$ === $elem$$17$$) {
      return $index$$70$$ + 1
    }
    "DIV" == $child$$1$$.nodeName && $index$$70$$++
  }
  return $index$$70$$
};
D.$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$, $endColumn_endIndex$$, $startKey$$, $endKey$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$1$$, $endRowKey$$1$$, $startColumnKey$$, $endColumnKey$$;
  $endColumn_endIndex$$ && ($startIndex$$.row < $endColumn_endIndex$$.row || -1 == $endColumn_endIndex$$.row ? ($startRow$$3$$ = $startIndex$$.row, $endRow$$ = $endColumn_endIndex$$.row, $startKey$$ && ($startRowKey$$1$$ = $startKey$$.row, $endRowKey$$1$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$.row, $endRow$$ = $startIndex$$.row, $startKey$$ && ($startRowKey$$1$$ = $endKey$$.row, $endRowKey$$1$$ = $startKey$$.row)), !(0,window.isNaN)($startIndex$$.column) && !(0,window.isNaN)($endColumn_endIndex$$.column) ? 
  ($startIndex$$.column < $endColumn_endIndex$$.column || -1 == $endColumn_endIndex$$.column ? ($startColumn$$ = $startIndex$$.column, $endColumn_endIndex$$ = $endColumn_endIndex$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$.column, $endColumn_endIndex$$ = $startIndex$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column)), $startIndex$$ = {row:$startRow$$3$$, 
  column:$startColumn$$}, $endColumn_endIndex$$ = {row:$endRow$$, column:$endColumn_endIndex$$}) : ($startIndex$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$ = {row:$endRow$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$1$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$1$$, column:$endColumnKey$$}));
  return $startKey$$ ? {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$}
};
D.$DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$2$$, $callback$$33$$, $startKey$$1$$, $startIndex$$2$$) {
  $endIndex$$2$$ === $startIndex$$2$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$2$$, $callback$$33$$, $startKey$$1$$, $startIndex$$2$$) : $endIndex$$2$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, $endIndex$$2$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$2$$, $callback$$33$$)) : $callback$$33$$.call(this, {startIndex:$startIndex$$2$$, endIndex:$startIndex$$2$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$})
};
D.$DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$3$$, $callback$$34$$, $endKey$$1$$, $endIndex$$3$$) {
  $callback$$34$$.call(this, this.createRange($startIndex$$3$$, $endIndex$$3$$, $startKey$$2$$, $endKey$$1$$))
};
D.$DvtDataGrid$$.prototype.$getEndIndex$ = function $$DvtDataGrid$$$$$getEndIndex$$($range$$8$$) {
  return $range$$8$$.endIndex == D.$JSCompiler_alias_NULL$$ ? $range$$8$$.startIndex : $range$$8$$.endIndex
};
D.$JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$, $range$$9_rangeEndRow$$, $nodes$$1_startRow$$4$$, $endRow$$1_rows$$6$$) {
  var $j$$10_startIndex$$4$$, $cell$$18_endIndex$$4$$, $columns$$2_rangeStartRow$$, $rangeStartColumn_row$$30$$, $rangeEndColumn$$;
  $nodes$$1_startRow$$4$$ == D.$JSCompiler_alias_VOID$$ && ($nodes$$1_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_startRow$);
  $endRow$$1_rows$$6$$ == D.$JSCompiler_alias_VOID$$ && ($endRow$$1_rows$$6$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_endRow$ + 1);
  $j$$10_startIndex$$4$$ = $range$$9_rangeEndRow$$.startIndex;
  $cell$$18_endIndex$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$getEndIndex$($range$$9_rangeEndRow$$);
  $columns$$2_rangeStartRow$$ = $j$$10_startIndex$$4$$.row;
  $range$$9_rangeEndRow$$ = $cell$$18_endIndex$$4$$.row;
  -1 == $range$$9_rangeEndRow$$ && ($range$$9_rangeEndRow$$ = window.Number.MAX_VALUE);
  if($endRow$$1_rows$$6$$ < $columns$$2_rangeStartRow$$ || $range$$9_rangeEndRow$$ < $nodes$$1_startRow$$4$$ || !(0,window.isNaN)($j$$10_startIndex$$4$$.column) && !(0,window.isNaN)($cell$$18_endIndex$$4$$.column) && ($rangeStartColumn_row$$30$$ = $j$$10_startIndex$$4$$.column, $rangeEndColumn$$ = $cell$$18_endIndex$$4$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = window.Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_endCol$ + 1 < $rangeStartColumn_row$$30$$ || 
  $rangeEndColumn$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_startCol$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $nodes$$1_startRow$$4$$ = [];
  $endRow$$1_rows$$6$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_databody$.firstChild.childNodes;
  $columns$$2_rangeStartRow$$ = window.Math.max(0, $columns$$2_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_startRow$);
  $range$$9_rangeEndRow$$ = window.Math.min($endRow$$1_rows$$6$$.length - 1, $range$$9_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_startRow$ + 1);
  if(!(0,window.isNaN)($rangeStartColumn_row$$30$$) && !(0,window.isNaN)($rangeEndColumn$$)) {
    $rangeStartColumn_row$$30$$ = window.Math.max(0, $rangeStartColumn_row$$30$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_startCol$);
    $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ = $columns$$2_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ < $range$$9_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ += 1) {
      $columns$$2_rangeStartRow$$ = $endRow$$1_rows$$6$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ + 1].childNodes;
      for($j$$10_startIndex$$4$$ = $rangeStartColumn_row$$30$$;$j$$10_startIndex$$4$$ < window.Math.min($columns$$2_rangeStartRow$$.length, $rangeEndColumn$$);$j$$10_startIndex$$4$$ += 1) {
        $cell$$18_endIndex$$4$$ = $columns$$2_rangeStartRow$$[$j$$10_startIndex$$4$$], $nodes$$1_startRow$$4$$.push($cell$$18_endIndex$$4$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ = $columns$$2_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ < $range$$9_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ += 1) {
      $rangeStartColumn_row$$30$$ = $endRow$$1_rows$$6$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$31$$ + 1], $nodes$$1_startRow$$4$$.push($rangeStartColumn_row$$30$$)
    }
  }
  return $nodes$$1_startRow$$4$$
};
D.$JSCompiler_StaticMethods_isReadCurrentContent$$ = function $$JSCompiler_StaticMethods_isReadCurrentContent$$$($JSCompiler_StaticMethods_isReadCurrentContent$self$$, $event$$41$$) {
  return $event$$41$$.altKey && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_isReadCurrentContent$self$$.$m_utils$, $event$$41$$) && 53 === $event$$41$$.keyCode
};
D.$JSCompiler_StaticMethods_readCurrentContent$$ = function $$JSCompiler_StaticMethods_readCurrentContent$$$($JSCompiler_StaticMethods_readCurrentContent$self$$) {
  var $current$$1_subid$$, $cell$$19_currentCell_range$$10$$, $needToModify$$, $labelledBy$$;
  if($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$ == D.$JSCompiler_alias_NULL$$) {
    if($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$) {
      return
    }
    $current$$1_subid$$ = {};
    "row" === $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_activeHeader$.axis ? (1 < $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_rowHeaderLevelCount$ && ($current$$1_subid$$.level = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_activeHeader$.level), $current$$1_subid$$.rowHeader = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_activeHeader$.index) : (1 < $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_columnHeaderLevelCount$ && ($current$$1_subid$$.level = 
    $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_activeHeader$.level), $current$$1_subid$$.columnHeader = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_activeHeader$.index);
    $cell$$19_currentCell_range$$10$$ = (0,D.$JSCompiler_StaticMethods__getActiveHeaderElement$$)($JSCompiler_StaticMethods_readCurrentContent$self$$)
  }else {
    $current$$1_subid$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$;
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$ != D.$JSCompiler_alias_NULL$$ && ($current$$1_subid$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$);
    if($current$$1_subid$$ == D.$JSCompiler_alias_NULL$$) {
      return
    }
    $cell$$19_currentCell_range$$10$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.createRange($current$$1_subid$$);
    $cell$$19_currentCell_range$$10$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$19_currentCell_range$$10$$);
    if($cell$$19_currentCell_range$$10$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$19_currentCell_range$$10$$.length) {
      return
    }
    $cell$$19_currentCell_range$$10$$ = $cell$$19_currentCell_range$$10$$[0];
    (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$19_currentCell_range$$10$$, D.$JSCompiler_alias_FALSE$$)
  }
  (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $current$$1_subid$$);
  $current$$1_subid$$ = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, "placeHolder");
  $needToModify$$ = D.$JSCompiler_alias_TRUE$$;
  $labelledBy$$ = $cell$$19_currentCell_range$$10$$.getAttribute("aria-labelledby");
  $labelledBy$$ != D.$JSCompiler_alias_NULL$$ && -1 != $labelledBy$$.indexOf($current$$1_subid$$) && ($needToModify$$ = D.$JSCompiler_alias_FALSE$$);
  $needToModify$$ ? ($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$.textContent = "\x26nbsp", $labelledBy$$ = $cell$$19_currentCell_range$$10$$.getAttribute("aria-labelledby"), $cell$$19_currentCell_range$$10$$.setAttribute("aria-labelledby", $labelledBy$$ + " " + $current$$1_subid$$)) : $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_utils$.empty($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$);
  $cell$$19_currentCell_range$$10$$.focus()
};
D.$JSCompiler_StaticMethods_handleActiveKeyDown$$ = function $$JSCompiler_StaticMethods_handleActiveKeyDown$$$($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, $event$$42$$) {
  var $focusElems$$2_keyCode$$, $target$$43$$, $cell$$20$$;
  $focusElems$$2_keyCode$$ = $event$$42$$.keyCode;
  $target$$43$$ = $event$$42$$.target;
  $cell$$20$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, $target$$43$$);
  if(((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($focusElems$$2_keyCode$$) || 36 == $focusElems$$2_keyCode$$ || 35 == $focusElems$$2_keyCode$$ || 33 == $focusElems$$2_keyCode$$ || 34 == $focusElems$$2_keyCode$$) && !(0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$.$m_utils$, $event$$42$$)) {
    if((0,D.$JSCompiler_StaticMethods_isActionableMode$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$)) {
      var $tagName$$inline_976$$ = $target$$43$$.tagName;
      if("INPUT" === $tagName$$inline_976$$ || "TEXTAREA" === $tagName$$inline_976$$ || "SELECT" === $tagName$$inline_976$$ || "BUTTON" === $tagName$$inline_976$$ || "A" === $tagName$$inline_976$$ || $target$$43$$.getAttribute("tabIndex") != D.$JSCompiler_alias_NULL$$ && 0 <= (0,window.parseInt)($target$$43$$.getAttribute("tabIndex"), 10) && (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, $target$$43$$) != $target$$43$$) {
        return D.$JSCompiler_alias_FALSE$$
      }
      0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($cell$$20$$).length || ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($cell$$20$$))
    }
    return(0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, $focusElems$$2_keyCode$$, D.$JSCompiler_alias_FALSE$$, $event$$42$$)
  }
  if((0,D.$JSCompiler_StaticMethods_isActionableMode$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$)) {
    if(27 == $focusElems$$2_keyCode$$) {
      return(0,D.$JSCompiler_StaticMethods_setActionableMode$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($cell$$20$$), $JSCompiler_StaticMethods_handleActiveKeyDown$self$$.$highlightActive$(), D.$JSCompiler_alias_TRUE$$
    }
    if(9 == $focusElems$$2_keyCode$$ && ($focusElems$$2_keyCode$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($cell$$20$$), 0 < $focusElems$$2_keyCode$$.length && $target$$43$$ == $focusElems$$2_keyCode$$[$focusElems$$2_keyCode$$.length - 1])) {
      return $focusElems$$2_keyCode$$[0].focus(), D.$JSCompiler_alias_TRUE$$
    }
  }else {
    if((113 == $focusElems$$2_keyCode$$ || 13 == $focusElems$$2_keyCode$$) && (0,D.$JSCompiler_StaticMethods__setFocusToFirstFocusableElement$$)($cell$$20$$)) {
      (0,D.$JSCompiler_StaticMethods_setActionableMode$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods__enableAllFocusableElements$$)($cell$$20$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_isReadCurrentContent$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$, $event$$42$$) && (0,D.$JSCompiler_StaticMethods_readCurrentContent$$)($JSCompiler_StaticMethods_handleActiveKeyDown$self$$);
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isArrowKey$$ = function $$JSCompiler_StaticMethods_isArrowKey$$$($keyCode$$2$$) {
  return 38 == $keyCode$$2$$ || 40 == $keyCode$$2$$ || 37 == $keyCode$$2$$ || 39 == $keyCode$$2$$
};
D.$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$31$$, $column$$4$$) {
  return $row$$31$$ != D.$JSCompiler_alias_NULL$$ ? $column$$4$$ != D.$JSCompiler_alias_NULL$$ ? {row:$row$$31$$, column:$column$$4$$} : {row:$row$$31$$} : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$ = function $$JSCompiler_StaticMethods_setHeaderAriaProperties$$$($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $header$$11$$, $focus$$2$$) {
  var $labelledBy$$1_previousHeader$$, $key$$35$$, $direction$$5$$;
  $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_prevActiveHeader$ != D.$JSCompiler_alias_NULL$$ && ("row" === $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_prevActiveHeader$.axis && 1 < $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_rowHeaderLevelCount$ ? $labelledBy$$1_previousHeader$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_prevActiveHeader$.index, 
  $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_prevActiveHeader$.level) : "column" === $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_prevActiveHeader$.axis && 1 < $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_columnHeaderLevelCount$ && ($labelledBy$$1_previousHeader$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_prevActiveHeader$.index, 
  $JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_prevActiveHeader$.level)));
  $labelledBy$$1_previousHeader$$ = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "context") + (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $header$$11$$, $labelledBy$$1_previousHeader$$);
  $direction$$5$$ = $header$$11$$.getAttribute($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_resources$.getMappedAttribute("sortDir"));
  "ascending" === $direction$$5$$ ? ($key$$35$$ = "accessibleSortAscending", $labelledBy$$1_previousHeader$$ = $labelledBy$$1_previousHeader$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "state")) : "descending" === $direction$$5$$ && ($key$$35$$ = "accessibleSortDescending", $labelledBy$$1_previousHeader$$ = $labelledBy$$1_previousHeader$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, 
  "state"));
  $key$$35$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $key$$35$$, {id:""});
  $header$$11$$.setAttribute("tabIndex", 0);
  $header$$11$$.setAttribute("aria-labelledby", $labelledBy$$1_previousHeader$$);
  $focus$$2$$ == D.$JSCompiler_alias_NULL$$ && $header$$11$$.focus()
};
D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$ = function $$JSCompiler_StaticMethods__getHeaderAndParentIds$$$($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$, $header$$12_parents$$, $previousHeader$$1$$) {
  var $idString$$ = "", $previousParents$$ = [];
  if($header$$12_parents$$ == D.$JSCompiler_alias_NULL$$) {
    return""
  }
  $header$$12_parents$$ = (0,D.$JSCompiler_StaticMethods__getHeaderAndParents$$)($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$, $header$$12_parents$$);
  $previousHeader$$1$$ != D.$JSCompiler_alias_NULL$$ && ($previousParents$$ = (0,D.$JSCompiler_StaticMethods__getHeaderAndParents$$)($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$, $previousHeader$$1$$));
  for($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$ = 0;$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$ < $header$$12_parents$$.length;$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$++) {
    if($previousParents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$] != $header$$12_parents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$] || $JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$ === $header$$12_parents$$.length - 1) {
      $idString$$ += " " + $header$$12_parents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$32$$].id
    }
  }
  return $idString$$
};
D.$JSCompiler_StaticMethods__getHeaderAndParents$$ = function $$JSCompiler_StaticMethods__getHeaderAndParents$$$($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$13$$) {
  var $axis$$22_headerLevels$$, $level$$23$$, $headers$$2$$ = [$header$$13$$];
  $axis$$22_headerLevels$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$13$$);
  $level$$23$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$13$$);
  $axis$$22_headerLevels$$ = "row" === $axis$$22_headerLevels$$ ? $JSCompiler_StaticMethods__getHeaderAndParents$self$$.$m_rowHeaderLevelCount$ : $JSCompiler_StaticMethods__getHeaderAndParents$self$$.$m_columnHeaderLevelCount$;
  if(1 === $axis$$22_headerLevels$$) {
    return $headers$$2$$
  }
  $level$$23$$ === $axis$$22_headerLevels$$ - 1 && ($header$$13$$ = $header$$13$$.parentNode.firstChild, $headers$$2$$.unshift($header$$13$$), $level$$23$$ -= 1);
  for(;0 < $level$$23$$;) {
    $header$$13$$ = $header$$13$$.parentNode.parentNode.firstChild, $headers$$2$$.unshift($header$$13$$), $level$$23$$ -= 1
  }
  return $headers$$2$$
};
D.$JSCompiler_StaticMethods__setActiveHeader$$ = function $$JSCompiler_StaticMethods__setActiveHeader$$$($JSCompiler_StaticMethods__setActiveHeader$self$$, $elem$$inline_981_index$$73$$, $contextObj_key$$36$$, $activeClassName$$inline_982_axis$$23$$, $level$$24$$) {
  var $activeClassName$$1$$, $elem$$20$$;
  $activeClassName$$1$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.getMappedStyle("focus");
  $elem$$20$$ = (0,D.$JSCompiler_StaticMethods__getActiveHeaderElement$$)($JSCompiler_StaticMethods__setActiveHeader$self$$);
  $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && $elem$$20$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$20$$, $activeClassName$$1$$), $elem$$20$$.setAttribute("tabIndex", -1), $elem$$20$$.removeAttribute("aria-labelledby"));
  $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ = {}), $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.axis = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.index = 
  $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.key = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.key, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.level = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.level);
  if(-1 != $elem$$inline_981_index$$73$$) {
    $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = {});
    $activeClassName$$inline_982_axis$$23$$ == D.$JSCompiler_alias_VOID$$ && ($activeClassName$$inline_982_axis$$23$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis);
    $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis = $activeClassName$$inline_982_axis$$23$$;
    $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index = $elem$$inline_981_index$$73$$;
    $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.key = $contextObj_key$$36$$;
    $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.level = $level$$24$$;
    $contextObj_key$$36$$ = {};
    if("row" === $activeClassName$$inline_982_axis$$23$$) {
      if(1 < $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_rowHeaderLevelCount$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ == D.$JSCompiler_alias_NULL$$ || !($level$$24$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.level && $activeClassName$$inline_982_axis$$23$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.axis))) {
        $contextObj_key$$36$$.level = $level$$24$$
      }
      if($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ == D.$JSCompiler_alias_NULL$$ || !($elem$$inline_981_index$$73$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.index && $activeClassName$$inline_982_axis$$23$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.axis)) {
        $contextObj_key$$36$$.rowHeader = $elem$$inline_981_index$$73$$
      }
    }else {
      if(1 < $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_columnHeaderLevelCount$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ == D.$JSCompiler_alias_NULL$$ || !($level$$24$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.level && $activeClassName$$inline_982_axis$$23$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.axis))) {
        $contextObj_key$$36$$.level = $level$$24$$
      }
      if($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ == D.$JSCompiler_alias_NULL$$ || !($elem$$inline_981_index$$73$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.index && $activeClassName$$inline_982_axis$$23$$ === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.axis)) {
        $contextObj_key$$36$$.columnHeader = $elem$$inline_981_index$$73$$
      }
    }
    (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)($JSCompiler_StaticMethods__setActiveHeader$self$$, $contextObj_key$$36$$);
    $activeClassName$$inline_982_axis$$23$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.getMappedStyle("focus");
    (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods__setActiveHeader$self$$, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$);
    $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_cellToFocus$.setAttribute("tabIndex", 0), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_cellToFocus$, $activeClassName$$inline_982_axis$$23$$), (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__setActiveHeader$self$$, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_cellToFocus$, 
    D.$JSCompiler_alias_FALSE$$)) : ($elem$$inline_981_index$$73$$ = (0,D.$JSCompiler_StaticMethods__getActiveHeaderElement$$)($JSCompiler_StaticMethods__setActiveHeader$self$$), $elem$$inline_981_index$$73$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__setActiveHeader$self$$, $elem$$inline_981_index$$73$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($elem$$inline_981_index$$73$$, $activeClassName$$inline_982_axis$$23$$), 
    "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis && (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)($JSCompiler_StaticMethods__setActiveHeader$self$$)))
  }else {
    $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$, $event$$45$$) {
  var $currentCellIndex$$, $row$$32$$, $column$$5$$, $focusFunc$$;
  if(!(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$)) {
    return D.$JSCompiler_alias_TRUE$$
  }
  $currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$;
  if($currentCellIndex$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$5_newCellIndex$$2$$ ? $keyCode$$5_newCellIndex$$2$$ = 39 : 39 == $keyCode$$5_newCellIndex$$2$$ && ($keyCode$$5_newCellIndex$$2$$ = 37));
    $focusFunc$$ = (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $row$$32$$ = $currentCellIndex$$.row;
    $column$$5$$ = $currentCellIndex$$.column;
    switch($keyCode$$5_newCellIndex$$2$$) {
      case 37:
        0 < $column$$5$$ ? "row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$5$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$, 
        $event$$45$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, $column$$5$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$45$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, 
        $event$$45$$), 0 === $column$$5$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstColumn")) : $isExtend$$ || (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1);
        break;
      case 39:
        (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$45$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$)) : "row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, 
        $column$$5$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$, $event$$45$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, $column$$5$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$45$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$45$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$ + 1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        "accessibleLastColumn"));
        break;
      case 38:
        0 < $row$$32$$ ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ - 1, $column$$5$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$45$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, 
        $event$$45$$), 0 === $row$$32$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstRow")) : $isExtend$$ || (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_columnHeaderLevelCount$ - 1);
        break;
      case 40:
        (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$45$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ + 1, $column$$5$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$45$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$45$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$ + 1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastRow"));
        break;
      case 36:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, 0);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$45$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        break;
      case 35:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 
        1));
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$45$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        break;
      case 33:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(0, $column$$5$$);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$45$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        break;
      case 34:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endRow$), $column$$5$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") - 1), $column$$5$$), 
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$45$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_StaticMethods__highlightActiveHeader$$ = function $$JSCompiler_StaticMethods__highlightActiveHeader$$$($JSCompiler_StaticMethods__highlightActiveHeader$self$$) {
  return $JSCompiler_StaticMethods__highlightActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ ? ("row" === $JSCompiler_StaticMethods__highlightActiveHeader$self$$.$m_activeHeader$.axis ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)($JSCompiler_StaticMethods__highlightActiveHeader$self$$, $JSCompiler_StaticMethods__highlightActiveHeader$self$$.$m_activeHeader$.index, $JSCompiler_StaticMethods__highlightActiveHeader$self$$.$m_activeHeader$.level) : "column" === $JSCompiler_StaticMethods__highlightActiveHeader$self$$.$m_activeHeader$.axis && 
  (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)($JSCompiler_StaticMethods__highlightActiveHeader$self$$, $JSCompiler_StaticMethods__highlightActiveHeader$self$$.$m_activeHeader$.index, $JSCompiler_StaticMethods__highlightActiveHeader$self$$.$m_activeHeader$.level), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__focusColumnHeader$$ = function $$JSCompiler_StaticMethods__focusColumnHeader$$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$, $level$$25$$) {
  var $column$$6_columnKey$$1$$;
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild && ($column$$6_columnKey$$1$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$, $level$$25$$), $column$$6_columnKey$$1$$ != D.$JSCompiler_alias_NULL$$ && ($column$$6_columnKey$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, 
  $column$$6_columnKey$$1$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$)), 
  (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$, $column$$6_columnKey$$1$$, "column", $level$$25$$)))
};
D.$JSCompiler_StaticMethods__focusRowHeader$$ = function $$JSCompiler_StaticMethods__focusRowHeader$$$($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$8$$, $level$$26$$) {
  var $row$$33_rowKey$$9$$;
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild && ($row$$33_rowKey$$9$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$8$$, $level$$26$$), $row$$33_rowKey$$9$$ != D.$JSCompiler_alias_NULL$$ && ($row$$33_rowKey$$9$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, 
  $row$$33_rowKey$$9$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusRowHeader$self$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusRowHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusRowHeader$self$$)), 
  (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$8$$, $row$$33_rowKey$$9$$, "row", $level$$26$$)))
};
D.$JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $cellLeft_index$$75$$, $isExtend$$1$$) {
  var $cellWidth_row$$34$$, $column$$7_viewportLeft$$2$$, $deltaX$$2_scrollLeft$$8$$, $deltaY$$2_scrollTop$$8$$, $databodyContent$$16_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$21$$, $scrollRows_viewportRight$$3$$;
  $cellWidth_row$$34$$ = $cellLeft_index$$75$$.row;
  $column$$7_viewportLeft$$2$$ = $cellLeft_index$$75$$.column;
  $deltaY$$2_scrollTop$$8$$ = $deltaX$$2_scrollLeft$$8$$ = 0;
  $cellWidth_row$$34$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellWidth_row$$34$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$2_scrollTop$$8$$ = $cellWidth_row$$34$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellWidth_row$$34$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellWidth_row$$34$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$2_scrollTop$$8$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$2_scrollTop$$8$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$75$$, $scrollRows_viewportRight$$3$$ = D.$JSCompiler_alias_TRUE$$) : ($databodyContent$$16_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$16_viewportTop$$4$$.childNodes[$cellWidth_row$$34$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 
  1], $databodyContent$$16_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowElem_rowHeight$$1$$, "top"), $rowElem_rowHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, 
  $rowElem_rowHeight$$1$$), $rowTop$$1$$ + $rowElem_rowHeight$$1$$ > $viewportBottom$$5$$ ? $deltaY$$2_scrollTop$$8$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$16_viewportTop$$4$$ && ($deltaY$$2_scrollTop$$8$$ = $databodyContent$$16_viewportTop$$4$$ - $rowTop$$1$$));
  !(0,window.isNaN)($column$$7_viewportLeft$$2$$) && $scrollRows_viewportRight$$3$$ != D.$JSCompiler_alias_TRUE$$ && ($column$$7_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $column$$7_viewportLeft$$2$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$2_scrollLeft$$8$$ = $column$$7_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * $column$$7_viewportLeft$$2$$ : 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * ($column$$7_viewportLeft$$2$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$2_scrollLeft$$8$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$2_scrollLeft$$8$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$75$$) : ($databodyContent$$16_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, 
  $rowElem_rowHeight$$1$$ = $databodyContent$$16_viewportTop$$4$$.childNodes[$cellWidth_row$$34$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 1], $cell$$21$$ = $rowElem_rowHeight$$1$$.childNodes[$column$$7_viewportLeft$$2$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_index$$75$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$21$$, "left"), $cellWidth_row$$34$$ = $cell$$21$$.offsetWidth, $column$$7_viewportLeft$$2$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, 
  $scrollRows_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_index$$75$$ < $column$$7_viewportLeft$$2$$ ? $deltaX$$2_scrollLeft$$8$$ = $column$$7_viewportLeft$$2$$ - $cellLeft_index$$75$$ : $cellLeft_index$$75$$ + $cellWidth_row$$34$$ > $scrollRows_viewportRight$$3$$ && ($deltaX$$2_scrollLeft$$8$$ = $scrollRows_viewportRight$$3$$ - 
  ($cellLeft_index$$75$$ + $cellWidth_row$$34$$))));
  0 != $deltaX$$2_scrollLeft$$8$$ || 0 != $deltaY$$2_scrollTop$$8$$ ? ($cell$$21$$ != D.$JSCompiler_alias_NULL$$ && $isExtend$$1$$ !== D.$JSCompiler_alias_TRUE$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$21$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$2_scrollLeft$$8$$, $deltaY$$2_scrollTop$$8$$)) : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ != D.$JSCompiler_alias_NULL$$ && 
  ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_scrollToIndex$self$$.$highlightActive$())
};
D.$JSCompiler_StaticMethods_scrollToHeader$$ = function $$JSCompiler_StaticMethods_scrollToHeader$$$($JSCompiler_StaticMethods_scrollToHeader$self$$, $headerInfo$$) {
  var $delta$$2$$, $startIndex$$5$$, $endIndex$$5$$, $averageDiff$$, $diff$$1$$, $currentScroll$$1$$, $headerMin$$, $headerDiff$$, $header$$16$$, $viewportMin$$, $viewportMax$$, $viewportDiff$$, $axis$$25$$, $index$$76$$, $level$$28$$;
  $axis$$25$$ = $headerInfo$$.axis;
  $index$$76$$ = $headerInfo$$.index;
  $level$$28$$ = $headerInfo$$.level;
  $delta$$2$$ = 0;
  "row" === $axis$$25$$ ? ($startIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_startRowHeader$, $endIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_endRowHeader$, $averageDiff$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_avgRowHeight$, $diff$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $currentScroll$$1$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$) : 
  "column" === $axis$$25$$ && ($startIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_startColHeader$, $endIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_endColHeader$, $averageDiff$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_avgColWidth$, $diff$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $currentScroll$$1$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$);
  $index$$76$$ < $startIndex$$5$$ || $index$$76$$ > $endIndex$$5$$ ? ($delta$$2$$ = $currentScroll$$1$$ - ($index$$76$$ < $startIndex$$5$$ ? $averageDiff$$ * $index$$76$$ : $averageDiff$$ * ($index$$76$$ + 1) - $diff$$1$$), $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ = $headerInfo$$) : ("row" === $axis$$25$$ ? ($header$$16$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, $index$$76$$, $level$$28$$), $viewportMin$$ = 
  $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$, $viewportMax$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$16$$, "top"), $headerDiff$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($header$$16$$)) : "column" === 
  $axis$$25$$ && ($header$$16$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, $index$$76$$, $level$$28$$), $viewportMin$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$, $viewportMax$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, 
  $headerMin$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$16$$, "left"), $headerDiff$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($header$$16$$)), $viewportDiff$$ > $headerDiff$$ ? $headerMin$$ + $headerDiff$$ > $viewportMax$$ ? $delta$$2$$ = $viewportMax$$ - ($headerMin$$ + $headerDiff$$) : $headerMin$$ < $viewportMin$$ && ($delta$$2$$ = $viewportMin$$ - $headerMin$$) : $delta$$2$$ = $viewportMin$$ - $headerMin$$);
  0 != $delta$$2$$ && ($header$$16$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_cellToFocus$ = $header$$16$$), "row" === $axis$$25$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, 0, $delta$$2$$) : (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, $delta$$2$$, 0));
  $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ != D.$JSCompiler_alias_NULL$$ && $header$$16$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__highlightActiveHeader$$)($JSCompiler_StaticMethods_scrollToHeader$self$$))
};
D.$JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$22$$, $headerCellClassName$$) {
  $headerCellClassName$$ == D.$JSCompiler_alias_VOID$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if($headerCellClassName$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$22$$, $headerCellClassName$$)) {
      return $elem$$22$$
    }
    if($elem$$22$$.parentNode) {
      return(0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_findHeader$self$$, $elem$$22$$.parentNode, $headerCellClassName$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$2$$, $rows$$7$$, $i$$33$$, $index$$77$$, $bandingClass$$;
  $rowBandingInterval$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if(0 < $rowBandingInterval$$2$$) {
    $rows$$7$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes;
    $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded");
    for($i$$33$$ = 1;$i$$33$$ < $rows$$7$$.length;$i$$33$$++) {
      $index$$77$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$33$$ - 1, 1 === window.Math.floor($index$$77$$ / $rowBandingInterval$$2$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$7$$[$i$$33$$], $bandingClass$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($rows$$7$$[$i$$33$$], $bandingClass$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$7$$[$i$$33$$], $bandingClass$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($rows$$7$$[$i$$33$$], 
      $bandingClass$$)
    }
  }
};
D.$JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$37_text$$13$$, $args$$3$$) {
  $key$$37_text$$13$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$m_resources$.getTranslatedText($key$$37_text$$13$$, $args$$3$$);
  $key$$37_text$$13$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.textContent = $key$$37_text$$13$$)
};
D.$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$47$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$47$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowExpanded")
};
D.$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$48$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$48$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowCollapsed")
};
D.$JSCompiler_StaticMethods__setKey$$ = function $$JSCompiler_StaticMethods__setKey$$$($JSCompiler_StaticMethods__setKey$self$$, $element$$19$$, $key$$38$$) {
  $element$$19$$ != D.$JSCompiler_alias_NULL$$ && ($element$$19$$[$JSCompiler_StaticMethods__setKey$self$$.$m_resources$.getMappedAttribute("key")] = $key$$38$$)
};
D.$JSCompiler_StaticMethods__getKey$$ = function $$JSCompiler_StaticMethods__getKey$$$($JSCompiler_StaticMethods__getKey$self$$, $element$$20$$) {
  return $element$$20$$ != D.$JSCompiler_alias_NULL$$ ? $element$$20$$[$JSCompiler_StaticMethods__getKey$self$$.$m_resources$.getMappedAttribute("key")] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getActiveRowKey$$ = function $$JSCompiler_StaticMethods__getActiveRowKey$$$($JSCompiler_StaticMethods__getActiveRowKey$self$$, $prev$$2$$) {
  if($prev$$2$$) {
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$.key
    }
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$ != D.$JSCompiler_alias_NULL$$) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.rowKey
    }
  }else {
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$.key
    }
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.rowKey
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getActiveHeaderElement$$ = function $$JSCompiler_StaticMethods__getActiveHeaderElement$$$($JSCompiler_StaticMethods__getActiveHeaderElement$self$$) {
  if($JSCompiler_StaticMethods__getActiveHeaderElement$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
    if("row" === $JSCompiler_StaticMethods__getActiveHeaderElement$self$$.$m_activeHeader$.axis) {
      return(0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__getActiveHeaderElement$self$$, $JSCompiler_StaticMethods__getActiveHeaderElement$self$$.$m_activeHeader$.key)
    }
    if("column" === $JSCompiler_StaticMethods__getActiveHeaderElement$self$$.$m_activeHeader$.axis) {
      return(0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__getActiveHeaderElement$self$$, $JSCompiler_StaticMethods__getActiveHeaderElement$self$$.$m_activeHeader$.key)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$ = function $$JSCompiler_StaticMethods__handleCutPasteKeydown$$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$49$$) {
  if((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.find($event$$49$$.target, "row"))) {
    if(88 == $event$$49$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$49$$)) {
      return(0,D.$JSCompiler_StaticMethods__handleCut$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$49$$)
    }
    if(86 == $event$$49$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$49$$)) {
      return(0,D.$JSCompiler_StaticMethods__handlePaste$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$49$$)
    }
    if(27 == $event$$49$$.keyCode && $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$) {
      return(0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$, 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ = D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$50$$) {
  var $rowKey$$12$$;
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $rowKey$$12$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $JSCompiler_StaticMethods__handleCut$self$$.find($event$$50$$.target, "row"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$12$$);
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$12$$);
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$51$$) {
  var $row$$39$$;
  return $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), 
  $row$$39$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($event$$51$$.target, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $row$$39$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handlePaste$self$$) ? (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$) : $JSCompiler_StaticMethods__handlePaste$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__handlePaste$self$$), 
  $JSCompiler_StaticMethods__handlePaste$self$$.$m_moveActive$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move((0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handlePaste$self$$, $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handlePaste$self$$, $row$$39$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$) : 
  D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$52$$) {
  var $deltaY$$3_rowKey$$13$$, $height$$29$$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && ($deltaY$$3_rowKey$$13$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.find($event$$52$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$3_rowKey$$13$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = 
  (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$3_rowKey$$13$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.style.height != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), 
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$.style.height != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_utils$) || ($JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$52$$.pageY);
  $deltaY$$3_rowKey$$13$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$29$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$3_rowKey$$13$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$3_rowKey$$13$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling, "top") < (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $height$$29$$ / 2 ? 
  (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, "nextSibling") : $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling, "top") > (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") - $height$$29$$ / 2 && (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  "previousSibling")
};
D.$JSCompiler_StaticMethods__moveDropRows$$ = function $$JSCompiler_StaticMethods__moveDropRows$$$($JSCompiler_StaticMethods__moveDropRows$self$$, $sibling$$) {
  var $newTop$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
  $databodyScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.parentNode;
  "nextSibling" == $sibling$$ ? ($newTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$) : ($newTop$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], 
  "top"), $newSiblingTop$$ = $newTop$$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTarget$, $newTop$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($headerScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$.parentNode, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTargetHeader$, $newTop$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ = $newTop$$;
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"));
  "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$][$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$][$sibling$$])) : 
  ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$]));
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"))
};
D.$JSCompiler_StaticMethods__isMoveEnabled$$ = function $$JSCompiler_StaticMethods__isMoveEnabled$$$($JSCompiler_StaticMethods__isMoveEnabled$self$$) {
  var $capability$$1$$;
  $capability$$1$$ = $JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_dataSource$.getCapability("move");
  return"enable" === ((0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_options$, "dnd", "reorder", "row") != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_options$, "dnd", "reorder", "row") : D.$JSCompiler_alias_FALSE$$) && ("full" === $capability$$1$$ || "row" === $capability$$1$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  if($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_remove$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$);
    $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = "";
    $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_remove$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = "");
    if($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_activeHeader$.axis) {
      $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveActive$ = D.$JSCompiler_alias_TRUE$$
    }
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$);
    $validUp$$ == D.$JSCompiler_alias_TRUE$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move((0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, 
    $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move((0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$));
    $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
  }
};
D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$40$$) {
  return $row$$40$$ == D.$JSCompiler_alias_NULL$$ || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$40$$.parentNode, $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.getMappedStyle("colheader")) ? D.$JSCompiler_alias_FALSE$$ : (0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) && (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) === (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, 
  $row$$40$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__manageMoveCursor$$ = function $$JSCompiler_StaticMethods__manageMoveCursor$$$($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$) {
  var $className$$12$$, $activeKey$$, $prevActiveKey_prevActiveRowHeader$$, $activeRow$$, $prevActiveRow$$;
  $className$$12$$ = $JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$.getMappedStyle("draggable");
  $activeKey$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$);
  $prevActiveKey_prevActiveRowHeader$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, D.$JSCompiler_alias_TRUE$$);
  $activeRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeKey$$);
  $prevActiveRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$);
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveRow$$, $className$$12$$) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveRow$$, $className$$12$$), $prevActiveKey_prevActiveRowHeader$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$), (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveKey_prevActiveRowHeader$$, $className$$12$$) && 
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveKey_prevActiveRowHeader$$, $className$$12$$));
  (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeRow$$) && ($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeKey$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($activeRow$$, $className$$12$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, 
  $className$$12$$))
};
D.$DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$() {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
  this.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$JSCompiler_StaticMethods_calculateRowHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeight$$$($JSCompiler_StaticMethods_calculateRowHeight$self$$, $row$$41$$) {
  return"" != $row$$41$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$41$$) : $row$$41$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$41$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$41$$, "top") : $JSCompiler_StaticMethods_calculateRowHeight$self$$.$m_endRowPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$41$$, "top")
};
D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeaderHeight$$$($JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$, $rowHeader$$20$$) {
  return"" != $rowHeader$$20$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$20$$) : $rowHeader$$20$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$20$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$20$$, "top") : $JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$.$m_endRowHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$20$$, "top")
};
D.$JSCompiler_StaticMethods_calculateColumnWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnWidth$$$($JSCompiler_StaticMethods_calculateColumnWidth$self$$, $cell$$22$$) {
  if("" != $cell$$22$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cell$$22$$)
  }
  var $dir$$11$$ = $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return $cell$$22$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$22$$.nextSibling, $dir$$11$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$22$$, $dir$$11$$) : $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_endColPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$22$$, $dir$$11$$)
};
D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$$($JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$, $columnHeader$$6$$) {
  if("" != $columnHeader$$6$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$6$$)
  }
  var $dir$$12$$ = $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return $columnHeader$$6$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$6$$.nextSibling, $dir$$12$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$6$$, $dir$$12$$) : $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_endColHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$6$$, $dir$$12$$)
};
D.$JSCompiler_StaticMethods__databodyEmpty$$ = function $$JSCompiler_StaticMethods__databodyEmpty$$$($JSCompiler_StaticMethods__databodyEmpty$self$$) {
  return $JSCompiler_StaticMethods__databodyEmpty$self$$.$m_databody$.firstChild == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$44$$, $prop$$6$$, $value$$48$$, $action$$) {
  "undefined" != typeof $prop$$6$$ && ($target$$44$$.style[$prop$$6$$] = "remove" == $action$$ ? "" : $value$$48$$)
};
D.$JSCompiler_StaticMethods_addTransformMoveStyle$$ = function $$JSCompiler_StaticMethods_addTransformMoveStyle$$$($target$$45$$, $duration$$9$$, $delay$$5$$, $timing$$1$$, $x$$56$$, $y$$37$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), $delay$$5$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), $timing$$1$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), $duration$$9$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), "translate3d(" + $x$$56$$ + "px," + $y$$37$$ + "px,0px)")
};
D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$ = function $$JSCompiler_StaticMethods_removeTransformMoveStyle$$$($target$$46$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), D.$JSCompiler_alias_NULL$$, "remove");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), D.$JSCompiler_alias_NULL$$, "remove");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), D.$JSCompiler_alias_NULL$$, "remove");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), D.$JSCompiler_alias_NULL$$, "remove")
};
D.$JSCompiler_StaticMethods_getCssSupport$$ = function $$JSCompiler_StaticMethods_getCssSupport$$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase()
    })
  }
  var $vendors$$, $root$$13$$, $i$$36$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$13$$ = window.document.documentElement;
  for($i$$36$$ = 0;$i$$36$$ < $vendors$$.length;$i$$36$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$36$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$13$$.style) {
      return $css3mc$$
    }
  }
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$41$$, $ranges$$;
  $ranges$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for($i$$41$$ = 0;$i$$41$$ < $ranges$$.length;$i$$41$$ += 1) {
    var $JSCompiler_StaticMethods_unhighlightRange$self$$inline_1033$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$, $elems$$inline_1035$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1033$$, $ranges$$[$i$$41$$]);
    (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1033$$, $elems$$inline_1035$$)
  }
  $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$)
};
D.$JSCompiler_StaticMethods_highlightRange$$ = function $$JSCompiler_StaticMethods_highlightRange$$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$12_selection$$inline_1039$$, $JSCompiler_temp$$43_total$$inline_1038_updateAccInfo$$) {
  $elems$$3_range$$12_selection$$inline_1039$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$12_selection$$inline_1039$$);
  (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$12_selection$$inline_1039$$);
  if($JSCompiler_temp$$43_total$$inline_1038_updateAccInfo$$) {
    if(1 == $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$().length) {
      $JSCompiler_temp$$43_total$$inline_1038_updateAccInfo$$ = $elems$$3_range$$12_selection$$inline_1039$$.length
    }else {
      var $elems$$inline_1040$$, $i$$inline_1041$$;
      $JSCompiler_temp$$43_total$$inline_1038_updateAccInfo$$ = 0;
      $elems$$3_range$$12_selection$$inline_1039$$ = $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$();
      for($i$$inline_1041$$ = 0;$i$$inline_1041$$ < $elems$$3_range$$12_selection$$inline_1039$$.length;$i$$inline_1041$$++) {
        $elems$$inline_1040$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$12_selection$$inline_1039$$[$i$$inline_1041$$]), $JSCompiler_temp$$43_total$$inline_1038_updateAccInfo$$ += $elems$$inline_1040$$.length
      }
    }
    (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_highlightRange$self$$, "accessibleMultiCellSelected", {num:$JSCompiler_temp$$43_total$$inline_1038_updateAccInfo$$})
  }
};
D.$JSCompiler_StaticMethods_unhighlightElems$$ = function $$JSCompiler_StaticMethods_unhighlightElems$$$($JSCompiler_StaticMethods_unhighlightElems$self$$, $elems$$5$$) {
  var $i$$43$$, $selectedClassName$$2$$, $activeClassName$$3$$, $elem$$27$$;
  if(!($elems$$5$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$5$$.length)) {
    if($selectedClassName$$2$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("selected"), $activeClassName$$3$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("focus"), $selectedClassName$$2$$ != D.$JSCompiler_alias_NULL$$ && $activeClassName$$3$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$43$$ = 0;$i$$43$$ < $elems$$5$$.length;$i$$43$$ += 1) {
        $elem$$27$$ = $elems$$5$$[$i$$43$$], (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$27$$, $activeClassName$$3$$), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$27$$, $selectedClassName$$2$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$6$$) {
  var $selectedClassName$$3$$, $i$$44$$, $elem$$28$$;
  if(!($elems$$6$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$6$$.length)) {
    if($selectedClassName$$3$$ = $JSCompiler_StaticMethods_highlightElems$self$$.getMappedStyle("selected"), $selectedClassName$$3$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$44$$ = 0;$i$$44$$ < $elems$$6$$.length;$i$$44$$ += 1) {
        $elem$$28$$ = $elems$$6$$[$i$$44$$], (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($elem$$28$$, $selectedClassName$$3$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$45$$, $ranges$$1$$, $elems$$7$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$45$$ = 0;$i$$45$$ < $ranges$$1$$.length;$i$$45$$ += 1) {
    $elems$$7$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$45$$], $startRow$$5$$, $endRow$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_applySelection$self$$, $elems$$7$$)
  }
};
D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$ = function $$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$62$$) {
  var $cell$$24_index$$84$$;
  $cell$$24_index$$84$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$m_utils$) ? (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, window.document.elementFromPoint($event$$62$$.touches[0].clientX, $event$$62$$.touches[0].clientY)) : (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$62$$.target);
  $cell$$24_index$$84$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$24_index$$84$$ = {row:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getRowIndex$($cell$$24_index$$84$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getCellIndex$($cell$$24_index$$84$$)}, (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $cell$$24_index$$84$$, $event$$62$$))
};
D.$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$25$$) {
  var $selectedClassName$$4$$ = this.getMappedStyle("selected");
  return"row" == this.$m_options$.$getSelectionMode$() && $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.find($cell$$25$$, "row"), $selectedClassName$$4$$) : $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$25$$, $selectedClassName$$4$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$63$$) {
  var $index$$86$$, $cell$$26_ctrlKey$$3$$, $shiftKey$$2$$;
  $cell$$26_ctrlKey$$3$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$63$$.target);
  $cell$$26_ctrlKey$$3$$ != D.$JSCompiler_alias_NULL$$ && ($index$$86$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$26_ctrlKey$$3$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$26_ctrlKey$$3$$)});
  if($index$$86$$ != D.$JSCompiler_alias_NULL$$ && $index$$86$$ != D.$JSCompiler_alias_VOID$$ && (!(0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) || !(2 === $event$$63$$.button && (0,D.$JSCompiler_StaticMethods__isContainSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$86$$)))) {
    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, -1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$86$$), $cell$$26_ctrlKey$$3$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, $event$$63$$), $shiftKey$$2$$ = $event$$63$$.shiftKey, (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) ? 
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$) ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$86$$, 
    $event$$63$$, D.$JSCompiler_alias_FALSE$$)) : !$cell$$26_ctrlKey$$3$$ && !$shiftKey$$2$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$86$$, $event$$63$$, D.$JSCompiler_alias_FALSE$$) : !$cell$$26_ctrlKey$$3$$ && $shiftKey$$2$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$86$$, $event$$63$$) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$86$$, 
    $event$$63$$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$86$$, $event$$63$$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods__isContainSelection$$ = function $$JSCompiler_StaticMethods__isContainSelection$$$($JSCompiler_StaticMethods__isContainSelection$self$$, $index$$87$$, $ranges$$3$$) {
  var $endIndex$$7_range$$14_rangeEndColumn$$2$$, $rangeStartColumn$$2_startIndex$$7$$, $rangeStartRow$$2$$, $rangeEndRow$$2$$, $i$$47$$;
  $ranges$$3$$ == D.$JSCompiler_alias_NULL$$ && ($ranges$$3$$ = $JSCompiler_StaticMethods__isContainSelection$self$$.$GetSelection$());
  for($i$$47$$ = 0;$i$$47$$ < $ranges$$3$$.length;$i$$47$$ += 1) {
    if($endIndex$$7_range$$14_rangeEndColumn$$2$$ = $ranges$$3$$[$i$$47$$], $rangeStartColumn$$2_startIndex$$7$$ = $endIndex$$7_range$$14_rangeEndColumn$$2$$.startIndex, $endIndex$$7_range$$14_rangeEndColumn$$2$$ = $JSCompiler_StaticMethods__isContainSelection$self$$.$getEndIndex$($endIndex$$7_range$$14_rangeEndColumn$$2$$), $rangeStartRow$$2$$ = $rangeStartColumn$$2_startIndex$$7$$.row, $rangeEndRow$$2$$ = $endIndex$$7_range$$14_rangeEndColumn$$2$$.row, !($index$$87$$.row < $rangeStartRow$$2$$ || 
    -1 != $rangeEndRow$$2$$ && $index$$87$$.row > $rangeEndRow$$2$$)) {
      if(!(0,window.isNaN)($rangeStartColumn$$2_startIndex$$7$$.column) && !(0,window.isNaN)($endIndex$$7_range$$14_rangeEndColumn$$2$$.column)) {
        if($rangeStartColumn$$2_startIndex$$7$$ = $rangeStartColumn$$2_startIndex$$7$$.column, $endIndex$$7_range$$14_rangeEndColumn$$2$$ = $endIndex$$7_range$$14_rangeEndColumn$$2$$.column, !($index$$87$$.column < $rangeStartColumn$$2_startIndex$$7$$ || -1 != $endIndex$$7_range$$14_rangeEndColumn$$2$$ && $index$$87$$.column > $endIndex$$7_range$$14_rangeEndColumn$$2$$)) {
          return D.$JSCompiler_alias_TRUE$$
        }
      }else {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  var $previous$$;
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  (0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  $previous$$ = $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$();
  $JSCompiler_StaticMethods__clearSelection$self$$.$m_selection$ = [];
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)($JSCompiler_StaticMethods__clearSelection$self$$, D.$JSCompiler_alias_NULL$$, $previous$$)
};
D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$ = function $$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$$($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$) {
  $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$.$m_discontiguousSelection$ = $flag$$5$$;
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$ ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff")
};
D.$JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1045_row$$44$$, $event$$65$$) {
  var $startIndex$$8$$;
  $startIndex$$8$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1045_row$$44$$, 0);
  $endIndex$$inline_1045_row$$44$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1045_row$$44$$, -1);
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__selectEntireRow$self$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireRow$self$$, $startIndex$$8$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1045_row$$44$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $event$$65$$)))
};
D.$JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$9_endIndex$$inline_1050$$, $event$$66$$) {
  var $startIndex$$9$$;
  $startIndex$$9$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $column$$9_endIndex$$inline_1050$$);
  $column$$9_endIndex$$inline_1050$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $column$$9_endIndex$$inline_1050$$);
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$, $startIndex$$9$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$9_endIndex$$inline_1050$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $event$$66$$)))
};
D.$DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$68$$, $newRange$$) {
  var $selection$$4$$, $previous$$1$$;
  $previous$$1$$ = this.$GetSelection$();
  $selection$$4$$ = [];
  $selection$$4$$.push($newRange$$);
  this.$m_selection$ = $selection$$4$$;
  (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$);
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_selectionFrontier$ = this.$m_active$, this.$highlightActive$());
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$68$$, $previous$$1$$)
};
D.$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  this.$m_selection$ == D.$JSCompiler_alias_NULL$$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
D.$DvtDataGrid$$.prototype.GetSelection = D.$DvtDataGrid$$.prototype.$GetSelection$;
D.$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$5$$) {
  $selection$$5$$ != D.$JSCompiler_alias_VOID$$ && ($selection$$5$$ == D.$JSCompiler_alias_NULL$$ && ($selection$$5$$ = []), (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)(this), this.$GetSelection$(), this.$m_selection$ = $selection$$5$$, this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, this.$m_startRow$, this.$m_endRow$))
};
D.$DvtDataGrid$$.prototype.SetSelection = D.$DvtDataGrid$$.prototype.$SetSelection$;
D.$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($event$$69$$, $previousSelection$$) {
  var $details$$7$$ = {event:$event$$69$$, ui:{selection:this.$GetSelection$(), previousSelection:$previousSelection$$}};
  this.fireEvent("select", $details$$7$$)
};
D.$JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$88$$, $event$$70$$) {
  var $anchor$$;
  $anchor$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_extendSelection$self$$.$m_utils$) ? $JSCompiler_StaticMethods_extendSelection$self$$.$m_touchSelectAnchor$ : $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$;
  $anchor$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)($JSCompiler_StaticMethods_extendSelection$self$$), $JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$88$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$88$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$88$$.row)), (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods_extendSelection$self$$, 
  $anchor$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $index$$88$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_extendSelectionCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $event$$70$$))))
};
D.$DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$71$$, $newRange$$1$$) {
  var $selection$$6_startIndexesMatch$$, $previous$$3$$, $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$, $endIndexesMatch$$;
  $previous$$3$$ = this.$GetSelection$();
  $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ = $previous$$3$$[$previous$$3$$.length - 1];
  $selection$$6_startIndexesMatch$$ = $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.startIndex.row == $newRange$$1$$.startIndex.row;
  $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && ($selection$$6_startIndexesMatch$$ = $selection$$6_startIndexesMatch$$ && $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.startIndex.column == $newRange$$1$$.startIndex.column);
  $endIndexesMatch$$ = $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.endIndex.row == $newRange$$1$$.endIndex.row;
  $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && ($endIndexesMatch$$ = $endIndexesMatch$$ && $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.endIndex.column == $newRange$$1$$.endIndex.column);
  if(!$selection$$6_startIndexesMatch$$ || !$endIndexesMatch$$) {
    $selection$$6_startIndexesMatch$$ = $previous$$3$$.slice(0), $selection$$6_startIndexesMatch$$.pop(), $selection$$6_startIndexesMatch$$.push($newRange$$1$$), this.$m_selection$ = $selection$$6_startIndexesMatch$$, $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$), (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)(this, $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$), 
    (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$1$$, D.$JSCompiler_alias_TRUE$$), this.$highlightActive$(), this.$m_selectionFrontier$ == D.$JSCompiler_alias_NULL$$ || this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$.row == this.$m_active$.row && this.$m_selectionFrontier$.column == this.$m_active$.column || (this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ = this.createRange(this.$m_active$), 
    $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$), $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ != D.$JSCompiler_alias_NULL$$ && 0 < $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.length && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$[0])), 
    $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ = this.createRange(this.$m_selectionFrontier$), $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$), $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$.length || 
    ((0,D.$JSCompiler_StaticMethods__updateContextInfo$$)(this, this.$m_selectionFrontier$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)(this, $cell$$inline_1067_currentRange_elems$$inline_1063_range$$inline_1066$$[0], D.$JSCompiler_alias_TRUE$$))), (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$71$$, $previous$$3$$), this.$m_discontiguousSelection$ && !(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, 
    D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$ = function $$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$) {
  var $range$$15$$;
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.$m_selectionFrontier$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.$m_selectionFrontier$.row == $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.$m_active$.row && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.$m_selectionFrontier$.column == 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.$m_active$.column || ($range$$15$$ = $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.createRange($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.$m_selectionFrontier$), $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$, $range$$15$$), 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$ != D.$JSCompiler_alias_NULL$$ && 0 < $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$.length && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$28$$[0]))
};
D.$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$89$$, $event$$72$$, $augment$$) {
  $augment$$ == D.$JSCompiler_alias_NULL$$ && ($augment$$ = D.$JSCompiler_alias_FALSE$$);
  0 < this.$GetSelection$().length && this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this, !this.$m_discontiguousSelection$);
  (0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)(this);
  this.setActive($index$$89$$, $event$$72$$, this.$_selectAndFocusActiveCallback$.bind(this, $index$$89$$, $event$$72$$, $augment$$))
};
D.$DvtDataGrid$$.prototype.$_selectAndFocusActiveCallback$ = function $$DvtDataGrid$$$$$_selectAndFocusActiveCallback$$($index$$90$$, $event$$73$$, $augment$$1$$) {
  "row" == this.$m_options$.$getSelectionMode$() && ($index$$90$$ = this.createIndex($index$$90$$.row));
  (0,D.$JSCompiler_StaticMethods__keys$$)(this, $index$$90$$, this.$_createRangeStartKeyCallback$.bind(this, $index$$90$$, this.$_selectAndFocusRangeCallback$.bind(this, $index$$90$$, $event$$73$$, $augment$$1$$)))
};
D.$DvtDataGrid$$.prototype.$_selectAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_selectAndFocusRangeCallback$$($index$$91$$, $event$$74$$, $augment$$2$$, $range$$17$$) {
  var $selection$$8$$, $previous$$4$$;
  $previous$$4$$ = this.$GetSelection$();
  $selection$$8$$ = $previous$$4$$.slice(0);
  $augment$$2$$ || (this.$m_discontiguousSelection$ ? this.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && (this.$m_selectionFrontier$.row == this.$m_prevActive$.row && this.$m_selectionFrontier$.column == this.$m_prevActive$.column && !(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$)) && ($selection$$8$$.pop(), (0,D.$JSCompiler_StaticMethods__isContainSelection$$)(this, this.$m_prevActive$, $selection$$8$$) || (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)(this, this.$m_prevActive$)) : 
  ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)(this), $selection$$8$$ = []));
  this.$m_selectionFrontier$ = $index$$91$$;
  $selection$$8$$.push($range$$17$$);
  this.$m_selection$ = $selection$$8$$;
  this.$highlightActive$();
  (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, $index$$91$$, "selected");
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$74$$, $previous$$4$$)
};
D.$JSCompiler_StaticMethods__compareSelectionAndFire$$ = function $$JSCompiler_StaticMethods__compareSelectionAndFire$$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$75$$, $clone$$1$$) {
  var $JSCompiler_inline_result$$216_selection$$9$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$();
  if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) && 0 < $JSCompiler_inline_result$$216_selection$$9$$.length) {
    var $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$, $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$, $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$;
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ == D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ == D.$JSCompiler_alias_NULL$$ && ($dir$$inline_1078_i$$inline_1082_row$$inline_1075$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ = (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$), 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, -$iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ / 
    2, "top"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ = window.document.createElement("div"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancetop"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$.setAttribute("role", 
    "button"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$.setAttribute("aria-label", $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.getTranslatedText("accessibleSelectionAffordanceTop")), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.appendChild($bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$), 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, -1 * $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ / 
    2, "bottom"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ = window.document.createElement("div"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancebottom"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$.setAttribute("role", 
    "button"), $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$.setAttribute("aria-label", $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.getTranslatedText("accessibleSelectionAffordanceBottom")), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.appendChild($bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$), 
    $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$(), "row" === $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ ? ($iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_databody$) / 
    2 + $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_currentScrollLeft$ - $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$, $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
    $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$, $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$)) : ($bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$75$$.target), $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$, 
    $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$) - $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$, $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
    $iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$), $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$)), $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.createRange($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_active$))[0].parentNode, $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $dir$$inline_1078_i$$inline_1082_row$$inline_1075$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$));
    (0,D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$)
  }
  a: {
    if($JSCompiler_inline_result$$216_selection$$9$$.length !== $clone$$1$$.length) {
      $JSCompiler_inline_result$$216_selection$$9$$ = D.$JSCompiler_alias_FALSE$$
    }else {
      for($dir$$inline_1078_i$$inline_1082_row$$inline_1075$$ = 0;$dir$$inline_1078_i$$inline_1082_row$$inline_1075$$ < $JSCompiler_inline_result$$216_selection$$9$$.length;$dir$$inline_1078_i$$inline_1082_row$$inline_1075$$ += 1) {
        $bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ = D.$JSCompiler_alias_FALSE$$;
        for($iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ = 0;$iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ < $clone$$1$$.length;$iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$ += 1) {
          $JSCompiler_inline_result$$216_selection$$9$$[$dir$$inline_1078_i$$inline_1082_row$$inline_1075$$].startIndex.row === $clone$$1$$[$iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$].startIndex.row && ($JSCompiler_inline_result$$216_selection$$9$$[$dir$$inline_1078_i$$inline_1082_row$$inline_1075$$].startIndex.column === $clone$$1$$[$iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$].startIndex.column && $JSCompiler_inline_result$$216_selection$$9$$[$dir$$inline_1078_i$$inline_1082_row$$inline_1075$$].endIndex.row === 
          $clone$$1$$[$iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$].endIndex.row && $JSCompiler_inline_result$$216_selection$$9$$[$dir$$inline_1078_i$$inline_1082_row$$inline_1075$$].endIndex.column === $clone$$1$$[$iconSize$$inline_1072_j$$inline_1083_left$$inline_1077$$].endIndex.column) && ($bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ = D.$JSCompiler_alias_TRUE$$)
        }
        if($bottomIcon$$inline_1074_cell$$inline_1071_foundMatch$$inline_1084_selectionMode$$inline_1076_topIcon$$inline_1073$$ === D.$JSCompiler_alias_FALSE$$) {
          $JSCompiler_inline_result$$216_selection$$9$$ = D.$JSCompiler_alias_FALSE$$;
          break a
        }
      }
      $JSCompiler_inline_result$$216_selection$$9$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $JSCompiler_inline_result$$216_selection$$9$$ || $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$fireSelectionEvent$($event$$75$$, $clone$$1$$)
};
D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$$($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) {
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode) && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), 
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$))
};
D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) {
  var $selection$$10_topIconCell$$, $topRow$$, $bottomRow$$, $dir$$20_selectionMode$$3$$, $bottomIconCell_elementsInRange$$;
  $selection$$10_topIconCell$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$GetSelection$();
  0 < $selection$$10_topIconCell$$.length && ($dir$$20_selectionMode$$3$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$(), $topRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $selection$$10_topIconCell$$[$selection$$10_topIconCell$$.length - 1].startKey.row), $bottomRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, 
  $selection$$10_topIconCell$$[$selection$$10_topIconCell$$.length - 1].endKey.row), $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ("row" === $dir$$20_selectionMode$$3$$ ? ($topRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), $bottomRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$)) : 
  ($dir$$20_selectionMode$$3$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomIconCell_elementsInRange$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $selection$$10_topIconCell$$[$selection$$10_topIconCell$$.length - 1]), $selection$$10_topIconCell$$ = $bottomIconCell_elementsInRange$$[0], $bottomIconCell_elementsInRange$$ = $bottomIconCell_elementsInRange$$[$bottomIconCell_elementsInRange$$.length - 
  1], $topRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), $bottomRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($selection$$10_topIconCell$$, $dir$$20_selectionMode$$3$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) / 
  2, $dir$$20_selectionMode$$3$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIconCell_elementsInRange$$, $dir$$20_selectionMode$$3$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $bottomIconCell_elementsInRange$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) / 
  2, $dir$$20_selectionMode$$3$$))))
};
D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$) {
  var $newLeft$$, $dir$$21$$;
  "row" === $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$() && $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ($dir$$21$$ = $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $newLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_databody$) / 
  2 + $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_currentScrollLeft$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, $newLeft$$, $dir$$21$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, $newLeft$$, $dir$$21$$))
};
D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$ = function $$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$$($JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$) {
  var $div$$1$$, $divWidth$$;
  $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ == D.$JSCompiler_alias_NULL$$ && ($div$$1$$ = window.document.createElement("div"), $div$$1$$.className = $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.getMappedStyle("toucharea"), $div$$1$$.style.visibilty = "hidden", $div$$1$$.style.top = "0px", $div$$1$$.style.visibilty = "0px", $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.appendChild($div$$1$$), 
  $divWidth$$ = $div$$1$$.offsetWidth, $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.removeChild($div$$1$$), $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ = $divWidth$$);
  return $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_handleResize$$ = function $$JSCompiler_StaticMethods_handleResize$$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$56$$) {
  var $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$;
  if($JSCompiler_StaticMethods_handleResize$self$$.$m_isResizing$ === D.$JSCompiler_alias_FALSE$$) {
    if($header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ = $JSCompiler_StaticMethods_handleResize$self$$.find($event$$56$$.target, "header"), $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ != D.$JSCompiler_alias_NULL$$ && ($header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ == $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$ || $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ == 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$)) {
      $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ = (0,D.$JSCompiler_StaticMethods_manageHeaderCursor$$)($JSCompiler_StaticMethods_handleResize$self$$, $event$$56$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$ != D.$JSCompiler_alias_NULL$$ && ("default" == $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = "", $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$ != 
      D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$.style.cursor = "")) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$.style.cursor = $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$)))
    }
  }else {
    var $newElementHeight$$inline_993_newElementWidth$$inline_991$$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$56$$.pageX;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$56$$.pageY;
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$56$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$56$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$56$$.pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$56$$.pageY);
    $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleResize$self$$.getMappedStyle("colheadercell")) ? "column" : "row";
    "col-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "column" === $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ ? ($header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_993_newElementWidth$$inline_991$$ = 
    (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$), (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$, $newElementHeight$$inline_993_newElementWidth$$inline_991$$)) : "row" === $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ && 
    ($header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_993_newElementWidth$$inline_991$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$), (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $newElementHeight$$inline_993_newElementWidth$$inline_991$$, $newElementHeight$$inline_993_newElementWidth$$inline_991$$ - $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$)) : "row-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ && ("row" === $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ ? ($header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ = 
    (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_993_newElementWidth$$inline_991$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$), (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$, $newElementHeight$$inline_993_newElementWidth$$inline_991$$)) : "column" === $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ && ($header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), 
    $newElementHeight$$inline_993_newElementWidth$$inline_991$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$), (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $newElementHeight$$inline_993_newElementWidth$$inline_991$$, $newElementHeight$$inline_993_newElementWidth$$inline_991$$ - $header$$17_oldElementHeight$$inline_992_oldElementWidth$$inline_990_resizeHeaderMode$$inline_989$$)));
    (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleResize$self$$);
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$)($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseX$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseY$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseDown$$ = function $$JSCompiler_StaticMethods_handleResizeMouseDown$$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$, $event$$57$$) {
  return"col-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ || "row-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_isResizing$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$57$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = 
  $event$$57$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$57$$.pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$57$$.pageY), $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinTop$ = 
  0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeRight$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeBottom$ = 0, D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_handleResizeMouseUp$$ = function $$JSCompiler_StaticMethods_handleResizeMouseUp$$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $event$$58$$) {
  var $details$$5_size$$10$$;
  $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ === D.$JSCompiler_alias_TRUE$$ && ($details$$5_size$$10$$ = "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.width : $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.height, $details$$5_size$$10$$ = {event:$event$$58$$, ui:{header:(0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, 
  $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), size:$details$$5_size$$10$$}}, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.fireEvent("resize", $details$$5_size$$10$$), $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ = "default", $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.cursor = "", $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$ != 
  D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$.style.cursor = ""), $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$21$$) {
  return $element$$21$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : "true" === $element$$21$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
};
D.$JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$59$$) {
  var $elem$$23$$ = $event$$59$$.target, $resizeHeaderMode$$, $edges_targetWidth$$inline_1000$$, $cursorX_rightEdgeCheck$$, $bottomEdgeCheck_cursorY_index$$79$$, $level$$29_offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $leftEdge$$inline_998_rtl$$4$$, $sibling$$1$$, $parent$$4$$, $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$, $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$;
  ($elem$$23$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$59$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$23$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$59$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
  if(!$elem$$23$$) {
    return"default"
  }
  $bottomEdgeCheck_cursorY_index$$79$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$23$$);
  $level$$29_offsetPixel$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$23$$);
  "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $widthResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$23$$), $sibling$$1$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $bottomEdgeCheck_cursorY_index$$79$$ - 1, $level$$29_offsetPixel$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $sibling$$1$$), $parent$$4$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$79$$, $level$$29_offsetPixel$$ - 1)) : "row" === $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, 
  $resizeHeaderMode$$).width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $heightResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$23$$), $sibling$$1$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$79$$ - 1, $level$$29_offsetPixel$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $sibling$$1$$), $parent$$4$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$79$$, $level$$29_offsetPixel$$ - 1));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_utils$) ? ($cursorX_rightEdgeCheck$$ = $event$$59$$.touches[0].pageX, $bottomEdgeCheck_cursorY_index$$79$$ = $event$$59$$.touches[0].pageY, $level$$29_offsetPixel$$ = 12) : ($cursorX_rightEdgeCheck$$ = $event$$59$$.pageX, $bottomEdgeCheck_cursorY_index$$79$$ = $event$$59$$.pageY, $level$$29_offsetPixel$$ = 5);
  $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$ = $elem$$23$$;
  $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$);
  $leftEdge$$inline_998_rtl$$4$$ = $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$[0];
  $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$ = $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$[1];
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($edges_targetWidth$$inline_1000$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$), $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$)) : 
  ($edges_targetWidth$$inline_1000$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$), $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$));
  $edges_targetWidth$$inline_1000$$ = [$leftEdge$$inline_998_rtl$$4$$, $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$, $leftEdge$$inline_998_rtl$$4$$ + $edges_targetWidth$$inline_1000$$, $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$ + $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$];
  $leftEdge$$inline_998_rtl$$4$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resources$.isRTLMode();
  $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$ = $cursorX_rightEdgeCheck$$ < $edges_targetWidth$$inline_1000$$[0] + $level$$29_offsetPixel$$;
  $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$ = $bottomEdgeCheck_cursorY_index$$79$$ < $edges_targetWidth$$inline_1000$$[1] + $level$$29_offsetPixel$$;
  $cursorX_rightEdgeCheck$$ = $cursorX_rightEdgeCheck$$ > $edges_targetWidth$$inline_1000$$[2] - $level$$29_offsetPixel$$;
  $bottomEdgeCheck_cursorY_index$$79$$ = $bottomEdgeCheck_cursorY_index$$79$$ > $edges_targetWidth$$inline_1000$$[3] - $level$$29_offsetPixel$$;
  if("column" === $resizeHeaderMode$$) {
    if($widthResizable$$ && ($leftEdge$$inline_998_rtl$$4$$ ? $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$ : $cursorX_rightEdgeCheck$$)) {
      return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$23$$, "col-resize"
    }
    if($siblingResizable$$ && ($leftEdge$$inline_998_rtl$$4$$ ? $cursorX_rightEdgeCheck$$ : $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$)) {
      if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $sibling$$1$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$23$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$) {
        return"col-resize"
      }
    }else {
      if($heightResizable$$) {
        if($bottomEdgeCheck_cursorY_index$$79$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$23$$, "row-resize"
        }
        if($elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $parent$$4$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$23$$, "row-resize"
        }
      }
    }
  }else {
    if("row" === $resizeHeaderMode$$) {
      if($heightResizable$$ && $bottomEdgeCheck_cursorY_index$$79$$) {
        return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$23$$, "row-resize"
      }
      if($siblingResizable$$ && $elementXY$$inline_997_topEdge$$inline_999_topEdgeCheck$$ && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $sibling$$1$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$23$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$)) {
        return"row-resize"
      }
      if($widthResizable$$) {
        if($leftEdge$$inline_998_rtl$$4$$ ? $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$ : $cursorX_rightEdgeCheck$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$23$$, "col-resize"
        }
        if($leftEdge$$inline_998_rtl$$4$$ ? $cursorX_rightEdgeCheck$$ : $elem$$inline_996_leftEdgeCheck_targetHeight$$inline_1001$$) {
          if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $parent$$4$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$23$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$) {
            return"col-resize"
          }
        }
      }
    }
  }
  return"default"
};
D.$JSCompiler_StaticMethods_resizeColWidth$$ = function $$JSCompiler_StaticMethods_resizeColWidth$$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$) {
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ - $oldElementWidth$$1_widthChange$$;
  if(0 != $oldElementWidth$$1_widthChange$$) {
    $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild);
    $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ += $oldElementWidth$$1_widthChange$$;
    (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$);
    (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods_resizeColWidth$self$$) || ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$));
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColWidth$self$$);
    var $dir$$inline_1005$$, $databodyRows$$inline_1006$$, $i$$inline_1007$$, $newStart$$inline_1008$$, $j$$inline_1009$$, $index$$inline_1010$$, $cells$$inline_1011$$, $cell$$inline_1012$$, $newWidth$$inline_1013$$;
    $dir$$inline_1005$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
    $index$$inline_1010$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$);
    1 < $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_columnHeaderLevelCount$ && $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.firstChild && ($index$$inline_1010$$ += (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode, "extent") - 1);
    (0,D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$)($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $index$$inline_1010$$, $oldElementWidth$$1_widthChange$$, $dir$$inline_1005$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.getMappedStyle("colheadercell"), "column");
    if($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild != D.$JSCompiler_alias_NULL$$) {
      $databodyRows$$inline_1006$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
      for($i$$inline_1007$$ = 1;$i$$inline_1007$$ < $databodyRows$$inline_1006$$.length;$i$$inline_1007$$++) {
        $cells$$inline_1011$$ = $databodyRows$$inline_1006$$[$i$$inline_1007$$].childNodes;
        $cell$$inline_1012$$ = $cells$$inline_1011$$[$index$$inline_1010$$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$];
        $newWidth$$inline_1013$$ == D.$JSCompiler_alias_NULL$$ && ($newWidth$$inline_1013$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cell$$inline_1012$$) + $oldElementWidth$$1_widthChange$$);
        (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($cell$$inline_1012$$, $newWidth$$inline_1013$$);
        for($j$$inline_1009$$ = $index$$inline_1010$$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$ + 1;$j$$inline_1009$$ < $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endCol$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$ + 1;$j$$inline_1009$$ += 1) {
          $cell$$inline_1012$$ = $cells$$inline_1011$$[$j$$inline_1009$$], $newStart$$inline_1008$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$inline_1012$$, $dir$$inline_1005$$) + $oldElementWidth$$1_widthChange$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$inline_1012$$, $newStart$$inline_1008$$, $dir$$inline_1005$$)
        }
      }
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column")
  }
};
D.$JSCompiler_StaticMethods_resizeRowHeight$$ = function $$JSCompiler_StaticMethods_resizeRowHeight$$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$) {
  var $databodyRows$$inline_1017_newParentHeight$$;
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ - $heightChange_oldElementHeight$$1$$;
  if(0 != $heightChange_oldElementHeight$$1$$) {
    $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild);
    $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ += $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$);
    $databodyRows$$inline_1017_newParentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild) + $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $databodyRows$$inline_1017_newParentHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$);
    var $i$$inline_1018_index$$inline_1020$$, $newHeight$$inline_1022_newStart$$inline_1019$$, $row$$inline_1021$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
    $i$$inline_1018_index$$inline_1020$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$);
    0 < $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeaderLevelCount$ && $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.firstChild && ($i$$inline_1018_index$$inline_1020$$ += (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, "extent") - 1);
    (0,D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $i$$inline_1018_index$$inline_1020$$, $heightChange_oldElementHeight$$1$$, "top", $JSCompiler_StaticMethods_resizeRowHeight$self$$.getMappedStyle("rowheadercell"), "row");
    if($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild != D.$JSCompiler_alias_NULL$$) {
      $databodyRows$$inline_1017_newParentHeight$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
      $row$$inline_1021$$ = $databodyRows$$inline_1017_newParentHeight$$[$i$$inline_1018_index$$inline_1020$$ - $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_startRow$ + 1];
      $newHeight$$inline_1022_newStart$$inline_1019$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$inline_1021$$) + $heightChange_oldElementHeight$$1$$;
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($row$$inline_1021$$, $newHeight$$inline_1022_newStart$$inline_1019$$);
      for($i$$inline_1018_index$$inline_1020$$ = $i$$inline_1018_index$$inline_1020$$ - $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_startRow$ + 2;$i$$inline_1018_index$$inline_1020$$ < $databodyRows$$inline_1017_newParentHeight$$.length;$i$$inline_1018_index$$inline_1020$$++) {
        $row$$inline_1021$$ = $databodyRows$$inline_1017_newParentHeight$$[$i$$inline_1018_index$$inline_1020$$], $newHeight$$inline_1022_newStart$$inline_1019$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$inline_1021$$, "top") + $heightChange_oldElementHeight$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($row$$inline_1021$$, $newHeight$$inline_1022_newStart$$inline_1019$$, "top")
      }
    }
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "";
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$);
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row")
  }
};
D.$JSCompiler_StaticMethods_resizeColHeight$$ = function $$JSCompiler_StaticMethods_resizeColHeight$$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $newElementHeight$$2$$, $heightChange$$1$$) {
  if(0 != $heightChange$$1$$) {
    var $level$$30$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_resizingElement$);
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_columnHeaderLevelHeights$[$level$$30$$] = $newElementHeight$$2$$;
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.style.display = "none";
    (0,D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$)($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.firstChild, $heightChange$$1$$, $level$$30$$, "top", $JSCompiler_StaticMethods_resizeColHeight$self$$.getMappedStyle("colheadercell"), "column");
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$ += $heightChange$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColHeight$self$$)
  }
};
D.$JSCompiler_StaticMethods_resizeRowWidth$$ = function $$JSCompiler_StaticMethods_resizeRowWidth$$$($JSCompiler_StaticMethods_resizeRowWidth$self$$, $dir$$inline_1031_newElementWidth$$2$$, $widthChange$$1$$) {
  if(0 != $widthChange$$1$$) {
    var $level$$31$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resizingElement$);
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderLevelWidths$[$level$$31$$] = $dir$$inline_1031_newElementWidth$$2$$;
    $dir$$inline_1031_newElementWidth$$2$$ = $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.style.display = "none";
    (0,D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.firstChild, $widthChange$$1$$, $level$$31$$, $dir$$inline_1031_newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.getMappedStyle("rowheadercell"), "row");
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderWidth$ += $widthChange$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderWidth$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$)
  }
};
D.$JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$35$$, $oldElementWidth$$2$$) {
  var $minWidth$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
  $minWidth$$ = (0,D.$JSCompiler_StaticMethods__getMinValue$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$, "width", $axis$$35$$);
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_databody$);
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_resources$.isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$2$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_scroller$.firstChild);
  $halfGridWidth$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementWidth$self$$.getWidth() / 2);
  $newElementWidth$$3$$ < $minWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $minWidth$$) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$35$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
};
D.$JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$36$$, $oldElementHeight$$2$$) {
  var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
  $minHeight$$ = (0,D.$JSCompiler_StaticMethods__getMinValue$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$, "height", $axis$$36$$);
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_databody$);
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$2$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_scroller$.firstChild);
  $halfGridHeight$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementHeight$self$$.getHeight() / 2);
  $newElementHeight$$3$$ < $minHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $minHeight$$) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$36$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$
};
D.$JSCompiler_StaticMethods__getMinValue$$ = function $$JSCompiler_StaticMethods__getMinValue$$$($JSCompiler_StaticMethods__getMinValue$self$$, $dimension$$, $axis$$37$$) {
  var $index$$80_level$$32$$, $currentDimensionValue_elem$$24$$, $minValue$$, $extent$$1$$, $inner$$1$$;
  $currentDimensionValue_elem$$24$$ = $JSCompiler_StaticMethods__getMinValue$self$$.$m_resizingElement$;
  $index$$80_level$$32$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods__getMinValue$self$$, $currentDimensionValue_elem$$24$$);
  $minValue$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__getMinValue$self$$.$m_utils$) ? 24 : 10;
  if("column" === $axis$$37$$ && ($JSCompiler_StaticMethods__getMinValue$self$$.$m_columnHeaderLevelCount$ - 1 === $index$$80_level$$32$$ || "height" === $dimension$$) || "row" === $axis$$37$$ && ($JSCompiler_StaticMethods__getMinValue$self$$.$m_rowHeaderLevelCount$ - 1 === $index$$80_level$$32$$ || "width" === $dimension$$)) {
    return $minValue$$
  }
  $index$$80_level$$32$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__getMinValue$self$$, $currentDimensionValue_elem$$24$$);
  $extent$$1$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getMinValue$self$$, $JSCompiler_StaticMethods__getMinValue$self$$.$m_resizingElement$.parentNode, "extent");
  $currentDimensionValue_elem$$24$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($currentDimensionValue_elem$$24$$, $dimension$$);
  "column" === $axis$$37$$ ? $inner$$1$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__getMinValue$self$$, $index$$80_level$$32$$ + $extent$$1$$ - 1, $JSCompiler_StaticMethods__getMinValue$self$$.$m_columnHeaderLevelCount$ - 1) : "row" === $axis$$37$$ && ($inner$$1$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods__getMinValue$self$$, $index$$80_level$$32$$ + $extent$$1$$ - 1, $JSCompiler_StaticMethods__getMinValue$self$$.$m_rowHeaderLevelCount$ - 
  1));
  return $currentDimensionValue_elem$$24$$ - ((0,D.$JSCompiler_StaticMethods_getElementDir$$)($inner$$1$$, $dimension$$) - $minValue$$)
};
D.$JSCompiler_StaticMethods_manageResizeScrollbars$$ = function $$JSCompiler_StaticMethods_manageResizeScrollbars$$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databodyContentWidth$$1_width$$24$$, $height$$30_scrollerHeight$$3$$, $colHeader$$7$$, $rowHeader$$21$$, $scroller$$10$$, $databody$$13$$, $colHeaderHeight$$4$$, $rowHeaderWidth$$3$$, $databodyWidth$$3$$, $databodyContentHeight$$2$$, $databodyHeight$$3$$, $isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$2$$, $dir$$14$$, $scrollerWidth$$3$$;
  $databodyContentWidth$$1_width$$24$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getWidth();
  $height$$30_scrollerHeight$$3$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getHeight();
  $colHeader$$7$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$21$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $scroller$$10$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $databody$$13$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $colHeaderHeight$$4$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $rowHeaderWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $height$$30_scrollerHeight$$3$$ -= $colHeaderHeight$$4$$;
  $scrollerWidth$$3$$ = $databodyContentWidth$$1_width$$24$$ - $rowHeaderWidth$$3$$;
  $dir$$14$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  if(!(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$)) {
    $databodyContentWidth$$1_width$$24$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$13$$.firstChild);
    $databodyContentHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$13$$.firstChild);
    $databodyWidth$$3$$ = window.Math.min($databodyContentWidth$$1_width$$24$$, $scrollerWidth$$3$$);
    $databodyHeight$$3$$ = window.Math.min($databodyContentHeight$$2$$, $height$$30_scrollerHeight$$3$$);
    $scrollbarSize$$2$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
    ($isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $height$$30_scrollerHeight$$3$$ - $scrollbarSize$$2$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, 
    $height$$30_scrollerHeight$$3$$)) && ($isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$ - $scrollbarSize$$2$$));
    !$isDatabodyVerticalScrollbarRequired$$1$$ && (!$isDatabodyHorizontalScrollbarRequired$$1$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$) && ($scroller$$10$$.style.overflow = "visible");
    if($isDatabodyVerticalScrollbarRequired$$1$$ && $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyVerticalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$) {
      $scroller$$10$$.style.overflow = "auto"
    }
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$1$$;
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$;
    $isDatabodyHorizontalScrollbarRequired$$1$$ && $height$$30_scrollerHeight$$3$$ - $scrollbarSize$$2$$ < $databodyHeight$$3$$ && ($databodyHeight$$3$$ = $height$$30_scrollerHeight$$3$$ - $scrollbarSize$$2$$);
    $isDatabodyVerticalScrollbarRequired$$1$$ && $scrollerWidth$$3$$ - $scrollbarSize$$2$$ < $databodyWidth$$3$$ && ($databodyWidth$$3$$ = $scrollerWidth$$3$$ - $scrollbarSize$$2$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$21$$, $databodyHeight$$3$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$7$$, $databodyWidth$$3$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$13$$, $databodyWidth$$3$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$13$$, $databodyHeight$$3$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$10$$, $scrollerWidth$$3$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$10$$, $height$$30_scrollerHeight$$3$$);
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ = $databodyContentWidth$$1_width$$24$$ - $databodyWidth$$3$$;
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ = $databodyContentHeight$$2$$ - $databodyHeight$$3$$
  }
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$, $colHeaderHeight$$4$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$, $rowHeaderWidth$$3$$, $dir$$14$$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$21$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$7$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$13$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$13$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$)
};
D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$ = function $$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $element$$22_headersContainer$$, $index$$83$$, $dimensionChange$$, $dir$$16$$, $className$$13$$, $axis$$38$$) {
  var $header$$18_headers$$3$$, $isHeader_newStart$$2$$, $groupingContainer$$1_i$$39_newVal$$, $headerStart$$;
  $element$$22_headersContainer$$ = $element$$22_headersContainer$$.lastChild;
  ($isHeader_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$22_headersContainer$$, $className$$13$$)) ? ($groupingContainer$$1_i$$39_newVal$$ = $element$$22_headersContainer$$.parentNode, $header$$18_headers$$3$$ = $element$$22_headersContainer$$, $headerStart$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$18_headers$$3$$)) : ($groupingContainer$$1_i$$39_newVal$$ = $element$$22_headersContainer$$, 
  $header$$18_headers$$3$$ = $element$$22_headersContainer$$.firstChild, $headerStart$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $groupingContainer$$1_i$$39_newVal$$, "start"));
  for(;$index$$83$$ < $headerStart$$;) {
    if($isHeader_newStart$$2$$) {
      $isHeader_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$18_headers$$3$$, $dir$$16$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($header$$18_headers$$3$$, $isHeader_newStart$$2$$, $dir$$16$$), $element$$22_headersContainer$$ = $element$$22_headersContainer$$.previousSibling, $isHeader_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$22_headersContainer$$, $className$$13$$), $groupingContainer$$1_i$$39_newVal$$ = 
      $element$$22_headersContainer$$.parentNode, $header$$18_headers$$3$$ = $element$$22_headersContainer$$, $headerStart$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$18_headers$$3$$)
    }else {
      $header$$18_headers$$3$$ = $groupingContainer$$1_i$$39_newVal$$.getElementsByClassName($className$$13$$);
      for($groupingContainer$$1_i$$39_newVal$$ = 0;$groupingContainer$$1_i$$39_newVal$$ < $header$$18_headers$$3$$.length;$groupingContainer$$1_i$$39_newVal$$++) {
        $isHeader_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$18_headers$$3$$[$groupingContainer$$1_i$$39_newVal$$], $dir$$16$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($header$$18_headers$$3$$[$groupingContainer$$1_i$$39_newVal$$], $isHeader_newStart$$2$$, $dir$$16$$)
      }
      $element$$22_headersContainer$$ = $element$$22_headersContainer$$.previousSibling;
      $isHeader_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$22_headersContainer$$, $className$$13$$);
      $groupingContainer$$1_i$$39_newVal$$ = $element$$22_headersContainer$$;
      $header$$18_headers$$3$$ = $element$$22_headersContainer$$.firstChild;
      $headerStart$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $groupingContainer$$1_i$$39_newVal$$, "start")
    }
  }
  "column" == $axis$$38$$ ? ($groupingContainer$$1_i$$39_newVal$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($header$$18_headers$$3$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($header$$18_headers$$3$$, $groupingContainer$$1_i$$39_newVal$$)) : ($groupingContainer$$1_i$$39_newVal$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($header$$18_headers$$3$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($header$$18_headers$$3$$, $groupingContainer$$1_i$$39_newVal$$));
  $isHeader_newStart$$2$$ ? $JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$.$m_sizingManager$.$setSize$($axis$$38$$, (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$18_headers$$3$$), $groupingContainer$$1_i$$39_newVal$$) : (0,D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $element$$22_headersContainer$$, $index$$83$$, $dimensionChange$$, 
  $dir$$16$$, $className$$13$$, $axis$$38$$)
};
D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$ = function $$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$$($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $groupings_headersContainer$$1$$, $dimensionChange$$1$$, $level$$35$$, $dir$$18$$, $className$$14$$, $axis$$39$$) {
  var $i$$40$$, $grouping_headers$$4$$, $headerLevel$$1_isHeader$$1_newDir$$, $j$$14$$;
  $groupings_headersContainer$$1$$ = $groupings_headersContainer$$1$$.childNodes;
  for($i$$40$$ = 0;$i$$40$$ < $groupings_headersContainer$$1$$.length;$i$$40$$++) {
    if($grouping_headers$$4$$ = $groupings_headersContainer$$1$$[$i$$40$$], $headerLevel$$1_isHeader$$1_newDir$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($grouping_headers$$4$$, $className$$14$$)) {
      $headerLevel$$1_isHeader$$1_newDir$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$), $headerLevel$$1_isHeader$$1_newDir$$ === $level$$35$$ ? "column" === $axis$$39$$ ? (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($grouping_headers$$4$$, $JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$.$_getColumnHeaderLevelHeight$($level$$35$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($grouping_headers$$4$$, 
      $JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$.$_getRowHeaderLevelWidth$($level$$35$$, D.$JSCompiler_alias_NULL$$)) : $headerLevel$$1_isHeader$$1_newDir$$ > $level$$35$$ && ($headerLevel$$1_isHeader$$1_newDir$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($grouping_headers$$4$$, $dir$$18$$) + $dimensionChange$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($grouping_headers$$4$$, $headerLevel$$1_isHeader$$1_newDir$$, $dir$$18$$))
    }else {
      if($headerLevel$$1_isHeader$$1_newDir$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, "level"), $headerLevel$$1_isHeader$$1_newDir$$ <= $level$$35$$) {
        (0,D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$)($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, $dimensionChange$$1$$, $level$$35$$, $dir$$18$$, $className$$14$$, $axis$$39$$)
      }else {
        $grouping_headers$$4$$ = $grouping_headers$$4$$.getElementsByClassName($className$$14$$);
        for($j$$14$$ = 0;$j$$14$$ < $grouping_headers$$4$$.length;$j$$14$$++) {
          $headerLevel$$1_isHeader$$1_newDir$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($grouping_headers$$4$$[$j$$14$$], $dir$$18$$) + $dimensionChange$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($grouping_headers$$4$$[$j$$14$$], $headerLevel$$1_isHeader$$1_newDir$$, $dir$$18$$)
        }
      }
    }
  }
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods__toggleSortIconDirection$$ = function $$JSCompiler_StaticMethods__toggleSortIconDirection$$$($JSCompiler_StaticMethods__toggleSortIconDirection$self$$, $header$$21_icon$$1$$, $direction$$6$$) {
  $header$$21_icon$$1$$ != D.$JSCompiler_alias_NULL$$ && ($header$$21_icon$$1$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$21_icon$$1$$), "descending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$21_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")) ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$21_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$21_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending"))) : "ascending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$21_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$21_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$21_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending"))))
};
D.$JSCompiler_StaticMethods__showOrHideSortIcon$$ = function $$JSCompiler_StaticMethods__showOrHideSortIcon$$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$22$$, $hide$$) {
  var $icon$$2$$, $sorted$$ = D.$JSCompiler_alias_FALSE$$;
  $header$$22$$ != D.$JSCompiler_alias_NULL$$ && ($icon$$2$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$22$$), $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($sorted$$ = $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$.key === (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$22$$)), $hide$$ === D.$JSCompiler_alias_FALSE$$ && !$sorted$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, 
  $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default"))) : $hide$$ === D.$JSCompiler_alias_TRUE$$ && !$sorted$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled"))))
};
D.$JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$80$$) {
  var $direction$$9$$, $header$$24_target$$49$$;
  (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$) || ($header$$24_target$$49$$ = $event$$80$$.target, $header$$24_target$$49$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $header$$24_target$$49$$), $header$$24_target$$49$$ != D.$JSCompiler_alias_NULL$$ && ($direction$$9$$ == D.$JSCompiler_alias_NULL$$ && ($direction$$9$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && 
  $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $header$$24_target$$49$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$80$$, $header$$24_target$$49$$, $direction$$9$$)))
};
D.$JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $event$$82_sortedHeader$$inline_1091$$, $header$$26_sortIcon$$inline_1092$$, $direction$$11$$) {
  var $key$$41$$, $axis$$42_criteria$$1$$;
  if($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_isSorting$ != D.$JSCompiler_alias_TRUE$$) {
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_delayedSort$ = D.$JSCompiler_alias_NULL$$;
    $header$$26_sortIcon$$inline_1092$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir"), $direction$$11$$);
    $key$$41$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $header$$26_sortIcon$$inline_1092$$);
    $axis$$42_criteria$$1$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getAxis$($header$$26_sortIcon$$inline_1092$$);
    var $oldSortedHeader$$inline_1087$$, $oldsortIcon$$inline_1088$$;
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($oldSortedHeader$$inline_1087$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldsortIcon$$inline_1088$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($oldSortedHeader$$inline_1087$$), (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, 
    $oldSortedHeader$$inline_1087$$, "ascending"), "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1088$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1088$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1088$$, 
    $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1088$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1087$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {event:$event$$82_sortedHeader$$inline_1091$$, key:$key$$41$$, axis:$axis$$42_criteria$$1$$, direction:$direction$$11$$};
    (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $header$$26_sortIcon$$inline_1092$$, $direction$$11$$);
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($event$$82_sortedHeader$$inline_1091$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $header$$26_sortIcon$$inline_1092$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($event$$82_sortedHeader$$inline_1091$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$26_sortIcon$$inline_1092$$, 
    $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$26_sortIcon$$inline_1092$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$26_sortIcon$$inline_1092$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$82_sortedHeader$$inline_1091$$.lastChild, 
    $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
    $direction$$11$$ != D.$JSCompiler_alias_NULL$$ && ($key$$41$$ != D.$JSCompiler_alias_NULL$$ && $axis$$42_criteria$$1$$ != D.$JSCompiler_alias_NULL$$) && ($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_isSorting$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$), $axis$$42_criteria$$1$$ = {axis:$axis$$42_criteria$$1$$, key:$key$$41$$, direction:$direction$$11$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($axis$$42_criteria$$1$$, 
    {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}));
    (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, "ascending" === $direction$$11$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$41$$})
  }else {
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_delayedSort$ = {event:$event$$82_sortedHeader$$inline_1091$$, header:$header$$26_sortIcon$$inline_1092$$, direction:$direction$$11$$}
  }
};
D.$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this)
};
D.$DvtDataGrid$$.prototype.$_getAxis$ = function $$DvtDataGrid$$$$$_getAxis$$($header$$27$$) {
  var $columnHeaderCellClassName$$, $rowHeaderCellClassName$$;
  $columnHeaderCellClassName$$ = this.getMappedStyle("colheadercell");
  $rowHeaderCellClassName$$ = this.getMappedStyle("rowheadercell");
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$27$$, $columnHeaderCellClassName$$) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$27$$, $rowHeaderCellClassName$$) ? "row" : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  var $newRowHeaderElements$$ = window.document.createElement("div");
  $newRowHeaderElements$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "rowHeader");
  $newRowHeaderElements$$.className = this.$m_resources$.getMappedStyle("rowheader") + " " + this.$m_resources$.getMappedStyle("header");
  this.fetchHeaders("row", this.$m_startRow$, $newRowHeaderElements$$, this.$m_endRow$ - this.$m_startRow$ + 1);
  this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_startCol$, this.$m_endRow$ - this.$m_startRow$ + 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$handleCellsFetchSuccessForSort$.bind(this, $newRowHeaderElements$$), error:this.$handleCellsFetchError$})
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($databodyContent$$17_i$$49_newRowHeaderElements$$1$$, $cellSet$$13_headerContent$$3$$, $cellRange$$9_columnStart$$6$$) {
  var $rowStart$$9$$, $rowCount$$7$$, $newRowElements$$, $oldRowElements$$, $oldRowHeaderElements$$, $newRowHeaderElementsFragment$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  $rowStart$$9$$ = $cellRange$$9_columnStart$$6$$[0].start;
  $rowCount$$7$$ = $cellSet$$13_headerContent$$3$$.getCount("row");
  $cellRange$$9_columnStart$$6$$ = $cellRange$$9_columnStart$$6$$[1].start;
  $cellSet$$13_headerContent$$3$$.getCount("column");
  $newRowElements$$ = window.document.createDocumentFragment();
  $newRowElements$$.appendChild(window.document.createElement("div"));
  $newRowHeaderElementsFragment$$ = window.document.createDocumentFragment();
  (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $newRowElements$$, D.$JSCompiler_alias_TRUE$$, this.$m_startRowPixel$, $rowStart$$9$$, $rowCount$$7$$, $cellRange$$9_columnStart$$6$$, D.$JSCompiler_alias_FALSE$$, $cellSet$$13_headerContent$$3$$);
  $oldRowElements$$ = this.$m_databody$.firstChild;
  $oldRowHeaderElements$$ = this.$m_rowHeader$.firstChild;
  if($databodyContent$$17_i$$49_newRowHeaderElements$$1$$ && $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.firstChild) {
    for(;$databodyContent$$17_i$$49_newRowHeaderElements$$1$$.firstChild.firstChild;) {
      $newRowHeaderElementsFragment$$.appendChild($databodyContent$$17_i$$49_newRowHeaderElements$$1$$.firstChild.firstChild)
    }
  }
  if(!(0,D.$JSCompiler_StaticMethods_supportsTransitions$$)() || 1 === $rowCount$$7$$ || 1 < this.$m_rowHeaderLevelCount$ && this.$m_rowHeaderLevelCount$ != D.$JSCompiler_alias_NULL$$) {
    if(1 < $newRowHeaderElementsFragment$$.childNodes.length) {
      $cellSet$$13_headerContent$$3$$ = this.$m_rowHeader$.firstChild;
      this.$m_utils$.empty($cellSet$$13_headerContent$$3$$);
      for($databodyContent$$17_i$$49_newRowHeaderElements$$1$$ = 1;$databodyContent$$17_i$$49_newRowHeaderElements$$1$$ < $newRowHeaderElementsFragment$$.childNodes.length;$databodyContent$$17_i$$49_newRowHeaderElements$$1$$++) {
        $newRowHeaderElementsFragment$$.childNodes[$databodyContent$$17_i$$49_newRowHeaderElements$$1$$].style.top = $oldRowElements$$.childNodes[$databodyContent$$17_i$$49_newRowHeaderElements$$1$$].style.top
      }
      $cellSet$$13_headerContent$$3$$.appendChild($newRowHeaderElementsFragment$$)
    }
    $databodyContent$$17_i$$49_newRowHeaderElements$$1$$ = this.$m_databody$.firstChild;
    this.$m_utils$.empty($databodyContent$$17_i$$49_newRowHeaderElements$$1$$);
    $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.appendChild($newRowElements$$);
    (0,D.$JSCompiler_StaticMethods__restoreActive$$)(this);
    this.$m_isSorting$ = D.$JSCompiler_alias_FALSE$$;
    (0,D.$JSCompiler_StaticMethods__fireSortEvent$$)(this);
    (0,D.$JSCompiler_StaticMethods__doDelayedSort$$)(this)
  }else {
    (0,window.setTimeout)(function() {
      var $databodyContent$$17_i$$49_newRowHeaderElements$$1$$ = $oldRowHeaderElements$$, $cellSet$$13_headerContent$$3$$, $cellRange$$9_columnStart$$6$$, $rowStart$$9$$, $rowCount$$7$$, $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$, $animOrder$$inline_1107$$, $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$, $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$, $rowHeight$$inline_1111$$, $limitRangeInPixels$$inline_1114_offset$$inline_1112$$, 
      $l$$inline_1125_rowsForAppend$$inline_1116$$, $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$, $dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$, $j$$inline_1121_rowPos$$inline_1132$$, $k$$inline_1123_key$$inline_1122$$, $rowHeaderSupport$$inline_1134$$, $newElementSetClone$$inline_1135$$, $newRowHeaderElementsClone$$inline_1136$$;
      $rowHeaderSupport$$inline_1134$$ = D.$JSCompiler_alias_FALSE$$;
      $cellSet$$13_headerContent$$3$$ = this;
      $cellRange$$9_columnStart$$6$$ = 0;
      $newElementSetClone$$inline_1135$$ = $newRowElements$$.cloneNode(D.$JSCompiler_alias_TRUE$$);
      $newRowHeaderElementsClone$$inline_1136$$ = $newRowHeaderElementsFragment$$ ? $newRowHeaderElementsFragment$$.cloneNode(D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_NULL$$;
      $rowStart$$9$$ = $oldRowElements$$.childElementCount;
      $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $newRowElements$$);
      $rowCount$$7$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $oldRowElements$$);
      for($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = 0;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ < $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$.length;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$++) {
        (0,D.$JSCompiler_StaticMethods__setKey$$)(this, $newElementSetClone$$inline_1135$$.childNodes[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ + 1], $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$]), (0,D.$JSCompiler_StaticMethods__setKey$$)(this, $newRowHeaderElementsClone$$inline_1136$$.childNodes[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ + 
        1], $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$])
      }
      $animOrder$$inline_1107$$ = [];
      $cellRange$$9_columnStart$$6$$ = [];
      $l$$inline_1125_rowsForAppend$$inline_1116$$ = [];
      $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$ = [];
      $dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$ = 0;
      $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$ = this.getHeight() - (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)(this);
      $rowHeight$$inline_1111$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)(this, (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $rowCount$$7$$[0]));
      if(!$rowHeight$$inline_1111$$ || 0 >= $rowHeight$$inline_1111$$) {
        $rowHeight$$inline_1111$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this)
      }
      ($limitRangeInPixels$$inline_1114_offset$$inline_1112$$ = (0,window.parseInt)($oldRowElements$$.childNodes[1].style.top.split("px")[0], 10)) || ($limitRangeInPixels$$inline_1114_offset$$inline_1112$$ = 0);
      $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = this.$m_currentScrollTop$ - $limitRangeInPixels$$inline_1114_offset$$inline_1112$$;
      $limitRangeInPixels$$inline_1114_offset$$inline_1112$$ = [$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$, $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ + $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$];
      $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$ = [window.Math.ceil($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ / $rowHeight$$inline_1111$$), window.Math.floor(($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ + $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$) / $rowHeight$$inline_1111$$)];
      $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childElementCount != $rowStart$$9$$ && $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.firstChild.children.length == $rowStart$$9$$ + 1 && ($databodyContent$$17_i$$49_newRowHeaderElements$$1$$ = $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.firstChild);
      if($databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childElementCount == $rowStart$$9$$ && $newRowHeaderElementsClone$$inline_1136$$) {
        $rowHeaderSupport$$inline_1134$$ = D.$JSCompiler_alias_TRUE$$;
        for($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = 1;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ < $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childElementCount;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$++) {
          $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childNodes[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$].id += "_old"
        }
      }
      if($rowHeaderSupport$$inline_1134$$) {
        for($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = 0;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ < $newRowHeaderElementsFragment$$.childNodes.length;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$++) {
          $newRowHeaderElementsFragment$$.childNodes[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$].style.top = $oldRowElements$$.children[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$].style.top
        }
      }
      for($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = 0;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ < $rowCount$$7$$.length;$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$++) {
        $animOrder$$inline_1107$$[$rowCount$$7$$[$dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$]] = $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$
      }
      for($j$$inline_1121_rowPos$$inline_1132$$ = 0;$j$$inline_1121_rowPos$$inline_1132$$ < $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$.length;$j$$inline_1121_rowPos$$inline_1132$$++) {
        if($animOrder$$inline_1107$$.hasOwnProperty($idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$])) {
          if($animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] - 1 && $j$$inline_1121_rowPos$$inline_1132$$ < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] - 1 || $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] > 
          $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] + 1 && $j$$inline_1121_rowPos$$inline_1132$$ > $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] + 1 || $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] - 
          1 && $j$$inline_1121_rowPos$$inline_1132$$ > $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] + 1 || $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] > $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] + 1 && $j$$inline_1121_rowPos$$inline_1132$$ < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] - 
          1) {
            $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] = "no_0"
          }
          (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]]) && ($animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] > $j$$inline_1121_rowPos$$inline_1132$$ ? ($j$$inline_1121_rowPos$$inline_1132$$ < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] && $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] > 
          $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] ? $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] - ($bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] + 1) : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]]) && 
          $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] > $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] && ($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] - $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] - 
          1, (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($oldRowElements$$.childNodes[$animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] + 1], 0, 0, "linear", 0, $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ * $rowHeight$$inline_1111$$), $rowHeaderSupport$$inline_1134$$ && (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childNodes[$animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] + 
          1], 0, 0, "linear", 0, ($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ + 1) * $rowHeight$$inline_1111$$)), $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] - $j$$inline_1121_rowPos$$inline_1132$$), $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] = 
          "up_-" + $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$) : $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] < $j$$inline_1121_rowPos$$inline_1132$$ ? ($j$$inline_1121_rowPos$$inline_1132$$ > $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] && $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] < 
          $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] ? $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] + 1 - $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]]) && 
          $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] && ($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] - $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] - 
          1, (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($oldRowElements$$.childNodes[$animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] + 1], 0, 0, "linear", 0, $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ * $rowHeight$$inline_1111$$), $rowHeaderSupport$$inline_1134$$ && (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childNodes[$animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] + 
          1], 0, 0, "linear", 0, $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ * $rowHeight$$inline_1111$$)), $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $j$$inline_1121_rowPos$$inline_1132$$ - $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]]), $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] = 
          "down_" + $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$) : $animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] == $j$$inline_1121_rowPos$$inline_1132$$ && ($animOrder$$inline_1107$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] = "no_0"))
        }else {
          $cellRange$$9_columnStart$$6$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$[$j$$inline_1121_rowPos$$inline_1132$$]] = $j$$inline_1121_rowPos$$inline_1132$$
        }
      }
      for($idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$ = 0;$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$ < $rowCount$$7$$.length;$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$++) {
        $animOrder$$inline_1107$$.hasOwnProperty($rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]) && (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]]) && ($animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] && ($animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] = 
        "no_0"), $animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] > $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] && ($animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] = "no_0"), $animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] >= $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[0] && 
        $animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] <= $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] && ($dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$[1] - $animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] + 
        2, $animOrder$$inline_1107$$[$rowCount$$7$$[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$]] = "down_" + $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$))
      }
      for($k$$inline_1123_key$$inline_1122$$ in $cellRange$$9_columnStart$$6$$) {
        $cellRange$$9_columnStart$$6$$.hasOwnProperty($k$$inline_1123_key$$inline_1122$$) && ($dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$++, $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$ = $cellRange$$9_columnStart$$6$$[$k$$inline_1123_key$$inline_1122$$], $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$ = $limitRangeInPixels$$inline_1114_offset$$inline_1112$$[1] + $oldRowElements$$.childNodes[1].clientHeight, 
        $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ = $limitRangeInPixels$$inline_1114_offset$$inline_1112$$[0] - $oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1121_rowPos$$inline_1132$$ = $idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$ * $oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1121_rowPos$$inline_1132$$ < $bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$ && 
        $j$$inline_1121_rowPos$$inline_1132$$ > $dv$$inline_1119_i$$inline_1120_scrollTop$$inline_1113_topLimit$$inline_1131_v$$inline_1109$$ && ($bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$ = $newElementSetClone$$inline_1135$$.childNodes[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$ + 1], $l$$inline_1125_rowsForAppend$$inline_1116$$.push($bottomLimit$$inline_1130_child$$inline_1133_gridBodyHeight$$inline_1110_limitRangeInRows$$inline_1115$$), 
        $rowHeaderSupport$$inline_1134$$ && $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$.push($newRowHeaderElementsClone$$inline_1136$$.childNodes[$idx$$inline_1129_kk$$inline_1124_newSet$$inline_1106$$ + 1])))
      }
      for($k$$inline_1123_key$$inline_1122$$ = 0;$k$$inline_1123_key$$inline_1122$$ < $l$$inline_1125_rowsForAppend$$inline_1116$$.length;$k$$inline_1123_key$$inline_1122$$++) {
        $dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $l$$inline_1125_rowsForAppend$$inline_1116$$[$k$$inline_1123_key$$inline_1122$$]), $cellRange$$9_columnStart$$6$$.hasOwnProperty($dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$) && ($dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$ = $cellRange$$9_columnStart$$6$$[$dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$], (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($l$$inline_1125_rowsForAppend$$inline_1116$$[$k$$inline_1123_key$$inline_1122$$], 
        0, 0, "linear", 0, $limitRangeInPixels$$inline_1114_offset$$inline_1112$$[1] - $dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$ * $rowHeight$$inline_1111$$), $rowHeaderSupport$$inline_1134$$ && ($delay$$inline_1127_rowHeadersForAppend$$inline_1117$$[$k$$inline_1123_key$$inline_1122$$].style.top = $l$$inline_1125_rowsForAppend$$inline_1116$$[$k$$inline_1123_key$$inline_1122$$].style.top, (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($delay$$inline_1127_rowHeadersForAppend$$inline_1117$$[$k$$inline_1123_key$$inline_1122$$], 
        0, 0, "linear", 0, $limitRangeInPixels$$inline_1114_offset$$inline_1112$$[1] - $dkey$$inline_1126_order$$inline_1128_restSetLength$$inline_1118$$ * $rowHeight$$inline_1111$$))), $oldRowElements$$.appendChild($l$$inline_1125_rowsForAppend$$inline_1116$$[$k$$inline_1123_key$$inline_1122$$]), $rowHeaderSupport$$inline_1134$$ && $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.appendChild($delay$$inline_1127_rowHeadersForAppend$$inline_1117$$[$k$$inline_1123_key$$inline_1122$$])
      }
      $oldRowElements$$.childNodes[$oldRowElements$$.childElementCount - 1].addEventListener("transitionend", function() {
        (0,window.setTimeout)(function() {
          if($rowHeaderSupport$$inline_1134$$) {
            var $databodyContent$$17_i$$49_newRowHeaderElements$$1$$ = $cellSet$$13_headerContent$$3$$.$m_rowHeader$.firstChild;
            $cellSet$$13_headerContent$$3$$.$m_rowHeader$.firstChild = D.$JSCompiler_alias_NULL$$;
            $cellSet$$13_headerContent$$3$$.$m_utils$.empty($databodyContent$$17_i$$49_newRowHeaderElements$$1$$);
            $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.appendChild($newRowHeaderElementsFragment$$);
            $cellSet$$13_headerContent$$3$$.$m_startRowHeader$ = 0
          }
          $databodyContent$$17_i$$49_newRowHeaderElements$$1$$ = $cellSet$$13_headerContent$$3$$.$m_databody$.firstChild;
          $cellSet$$13_headerContent$$3$$.$m_utils$.empty($databodyContent$$17_i$$49_newRowHeaderElements$$1$$);
          $databodyContent$$17_i$$49_newRowHeaderElements$$1$$.appendChild($newRowElements$$);
          (0,D.$JSCompiler_StaticMethods__restoreActive$$)($cellSet$$13_headerContent$$3$$);
          $cellSet$$13_headerContent$$3$$.$m_isSorting$ = D.$JSCompiler_alias_FALSE$$;
          (0,D.$JSCompiler_StaticMethods__fireSortEvent$$)($cellSet$$13_headerContent$$3$$);
          (0,D.$JSCompiler_StaticMethods__doDelayedSort$$)($cellSet$$13_headerContent$$3$$)
        }, 100)
      }, D.$JSCompiler_alias_FALSE$$);
      for($l$$inline_1125_rowsForAppend$$inline_1116$$ = 1;$l$$inline_1125_rowsForAppend$$inline_1116$$ < $oldRowElements$$.childElementCount;$l$$inline_1125_rowsForAppend$$inline_1116$$++) {
        $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$ = 0 * $l$$inline_1125_rowsForAppend$$inline_1116$$ + "ms", $l$$inline_1125_rowsForAppend$$inline_1116$$ < $rowStart$$9$$ ? ($cellRange$$9_columnStart$$6$$ = (0,window.parseInt)($animOrder$$inline_1107$$[$rowCount$$7$$[$l$$inline_1125_rowsForAppend$$inline_1116$$ - 1]].split("_")[1], 10) * $rowHeight$$inline_1111$$, $cellRange$$9_columnStart$$6$$ < $limitRangeInPixels$$inline_1114_offset$$inline_1112$$[1] - ($l$$inline_1125_rowsForAppend$$inline_1116$$ - 
        1) * $rowHeight$$inline_1111$$ || ($cellRange$$9_columnStart$$6$$ = $limitRangeInPixels$$inline_1114_offset$$inline_1112$$[1] - ($l$$inline_1125_rowsForAppend$$inline_1116$$ - 2) * $oldRowElements$$.childNodes[1].clientHeight), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($oldRowElements$$.childNodes[$l$$inline_1125_rowsForAppend$$inline_1116$$], "400ms", $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$, "ease-in", 0, $cellRange$$9_columnStart$$6$$), $rowHeaderSupport$$inline_1134$$ && 
        (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childNodes[$l$$inline_1125_rowsForAppend$$inline_1116$$], "400ms", $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$, "ease-in", 0, $cellRange$$9_columnStart$$6$$)) : ((0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($oldRowElements$$.childNodes[$l$$inline_1125_rowsForAppend$$inline_1116$$], "400ms", $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$, "ease-in", 0, 
        0), $rowHeaderSupport$$inline_1134$$ && (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($databodyContent$$17_i$$49_newRowHeaderElements$$1$$.childNodes[$l$$inline_1125_rowsForAppend$$inline_1116$$], "400ms", $delay$$inline_1127_rowHeadersForAppend$$inline_1117$$, "ease-in", 0, 0))
      }
    }.bind(this), 0)
  }
};
D.$JSCompiler_StaticMethods_isNumeric$$ = function $$JSCompiler_StaticMethods_isNumeric$$$($v$$1$$) {
  return/^-{0,1}\d*\.{0,1}\d+$/.test($v$$1$$)
};
D.$JSCompiler_StaticMethods_getDataKeySet$$ = function $$JSCompiler_StaticMethods_getDataKeySet$$$($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$) {
  var $dataKeySet$$, $i$$50$$, $key$$42$$;
  $dataKeySet$$ = [];
  for($i$$50$$ = 0;$i$$50$$ < $initialData$$.childNodes.length;$i$$50$$++) {
    $key$$42$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$.childNodes[$i$$50$$]), $key$$42$$ != D.$JSCompiler_alias_NULL$$ && $dataKeySet$$.push($key$$42$$)
  }
  return $dataKeySet$$
};
D.$JSCompiler_StaticMethods__restoreActive$$ = function $$JSCompiler_StaticMethods__restoreActive$$$($JSCompiler_StaticMethods__restoreActive$self$$) {
  $JSCompiler_StaticMethods__restoreActive$self$$.$m_active$ && (0,D.$JSCompiler_StaticMethods__indexes$$)($JSCompiler_StaticMethods__restoreActive$self$$, {row:$JSCompiler_StaticMethods__restoreActive$self$$.$m_active$.rowKey, column:$JSCompiler_StaticMethods__restoreActive$self$$.$m_active$.columnKey}, $JSCompiler_StaticMethods__restoreActive$self$$.$_restoreActiveCallback$)
};
D.$DvtDataGrid$$.prototype.$_restoreActiveCallback$ = function $$DvtDataGrid$$$$$_restoreActiveCallback$$($cellIndex_indexes$$17$$) {
  $cellIndex_indexes$$17$$ = this.createIndex(-1 === $cellIndex_indexes$$17$$.row ? 0 : $cellIndex_indexes$$17$$.row, -1 === $cellIndex_indexes$$17$$.column ? 0 : $cellIndex_indexes$$17$$.column);
  !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || -1 != (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $cellIndex_indexes$$17$$) ? ((0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $cellIndex_indexes$$17$$), this.$activeAndFocus$($cellIndex_indexes$$17$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && this.$selectAndFocus$($cellIndex_indexes$$17$$)) : (this.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && 
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this))
};
D.$JSCompiler_StaticMethods__getSortIcon$$ = function $$JSCompiler_StaticMethods__getSortIcon$$$($header$$28$$) {
  return $header$$28$$.lastChild.firstChild
};
D.$JSCompiler_StaticMethods__fireSortEvent$$ = function $$JSCompiler_StaticMethods__fireSortEvent$$$($JSCompiler_StaticMethods__fireSortEvent$self$$) {
  $JSCompiler_StaticMethods__fireSortEvent$self$$.fireEvent("sort", {event:$JSCompiler_StaticMethods__fireSortEvent$self$$.$m_sortInfo$.event, ui:{header:$JSCompiler_StaticMethods__fireSortEvent$self$$.$m_sortInfo$.key, direction:$JSCompiler_StaticMethods__fireSortEvent$self$$.$m_sortInfo$.direction}})
};
D.$JSCompiler_StaticMethods__doDelayedSort$$ = function $$JSCompiler_StaticMethods__doDelayedSort$$$($JSCompiler_StaticMethods__doDelayedSort$self$$) {
  $JSCompiler_StaticMethods__doDelayedSort$self$$.$m_delayedSort$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__doDelayedSort$self$$, $JSCompiler_StaticMethods__doDelayedSort$self$$.$m_delayedSort$.event, $JSCompiler_StaticMethods__doDelayedSort$self$$.$m_delayedSort$.header, $JSCompiler_StaticMethods__doDelayedSort$self$$.$m_delayedSort$.direction)
};
return D.DvtDataGrid;
});