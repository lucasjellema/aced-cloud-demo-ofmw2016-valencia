/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation", "ojs/internal-deps/dvt/DvtToolkit"], function($oj$$15$$, $$$$15$$, $comp$$4$$, $val$$40$$, $dvt$$1$$) {
  function $DvtJsonPath$$($object$$5$$, $path$$7$$) {
    this.$_path$ = $path$$7$$;
    this.$_root$ = $object$$5$$;
    this.$_delimiter$ = "/";
  }
  $oj$$15$$.$AttributeGroupHandler$ = function $$oj$$15$$$$AttributeGroupHandler$$($matchRules$$) {
    this.Init($matchRules$$);
  };
  $goog$exportPath_$$("AttributeGroupHandler", $oj$$15$$.$AttributeGroupHandler$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$AttributeGroupHandler$, $oj$$15$$.$Object$, "oj.AttributeGroupHandler");
  $oj$$15$$.$AttributeGroupHandler$.prototype.Init = function $$oj$$15$$$$AttributeGroupHandler$$$Init$($idx$$11_matchRules$$1$$) {
    $oj$$15$$.$AttributeGroupHandler$.$superclass$.Init.call(this);
    this.$_matchRules$ = $idx$$11_matchRules$$1$$ ? $idx$$11_matchRules$$1$$ : {};
    this.$_assignments$ = {};
    this.$_valueIndex$ = 0;
    this.$Values$ = this.$getValueRamp$();
    for (var $key$$79$$ in this.$_matchRules$) {
      $idx$$11_matchRules$$1$$ = this.$Values$.indexOf(this.$_matchRules$[$key$$79$$]), -1 !== $idx$$11_matchRules$$1$$ && this.$Values$.splice($idx$$11_matchRules$$1$$, 1);
    }
  };
  $oj$$15$$.$AttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$15$$$$AttributeGroupHandler$$$$getValueRamp$$() {
    return[];
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValueRamp", {$getValueRamp$:$oj$$15$$.$AttributeGroupHandler$.prototype.$getValueRamp$});
  $oj$$15$$.$AttributeGroupHandler$.prototype.$getValue$ = function $$oj$$15$$$$AttributeGroupHandler$$$$getValue$$($category$$1$$) {
    if (this.$_matchRules$[$category$$1$$]) {
      return this.$_matchRules$[$category$$1$$];
    }
    this.$_assignments$[$category$$1$$] || (this.$_assignments$[$category$$1$$] = this.$Values$[this.$_valueIndex$], this.$_valueIndex$ == this.$Values$.length - 1 ? this.$_valueIndex$ = 0 : this.$_valueIndex$++);
    return this.$_assignments$[$category$$1$$];
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValue", {$getValue$:$oj$$15$$.$AttributeGroupHandler$.prototype.$getValue$});
  $oj$$15$$.$AttributeGroupHandler$.prototype.$getCategoryAssignments$ = function $$oj$$15$$$$AttributeGroupHandler$$$$getCategoryAssignments$$() {
    var $assignments$$ = [], $i$$259$$;
    for ($i$$259$$ in this.$_assignments$) {
      $assignments$$.push({category:$i$$259$$, value:this.$_assignments$[$i$$259$$]});
    }
    return $assignments$$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getCategoryAssignments", {$getCategoryAssignments$:$oj$$15$$.$AttributeGroupHandler$.prototype.$getCategoryAssignments$});
  $oj$$15$$.$AttributeGroupHandler$.prototype.$addMatchRule$ = function $$oj$$15$$$$AttributeGroupHandler$$$$addMatchRule$$($category$$2$$, $attributeValue$$) {
    this.$_matchRules$[$category$$2$$] = $attributeValue$$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.addMatchRule", {$addMatchRule$:$oj$$15$$.$AttributeGroupHandler$.prototype.$addMatchRule$});
  $oj$$15$$.$ColorAttributeGroupHandler$ = function $$oj$$15$$$$ColorAttributeGroupHandler$$($matchRules$$2$$) {
    this.$_attributeValues$ = [];
    if ($$$$15$$(document.body).hasClass("oj-hicontrast")) {
      this.$_attributeValues$ = $oj$$15$$.$ColorAttributeGroupHandler$.$_DEFAULT_COLORS$.slice();
    } else {
      if (!$oj$$15$$.$ColorAttributeGroupHandler$.$_colors$) {
        $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$ = [];
        var $attrGpsDiv$$ = $$$$15$$(document.createElement("div"));
        $attrGpsDiv$$.attr("style", "display:none;");
        $attrGpsDiv$$.attr("id", "attrGps");
        $$$$15$$(document.body).append($attrGpsDiv$$);
        for (var $i$$260$$ = 0;$i$$260$$ < $oj$$15$$.$ColorAttributeGroupHandler$.$_STYLE_CLASSES$.length;$i$$260$$++) {
          var $childDiv_color$$2$$ = $$$$15$$(document.createElement("div"));
          $childDiv_color$$2$$.addClass($oj$$15$$.$ColorAttributeGroupHandler$.$_STYLE_CLASSES$[$i$$260$$]);
          $attrGpsDiv$$.append($childDiv_color$$2$$);
          ($childDiv_color$$2$$ = $childDiv_color$$2$$.css("color")) && $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$.push($childDiv_color$$2$$);
        }
        $attrGpsDiv$$.remove();
      }
      this.$_attributeValues$ = 0 < $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$.length ? $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$.slice() : $oj$$15$$.$ColorAttributeGroupHandler$.$_DEFAULT_COLORS$.slice();
    }
    this.Init($matchRules$$2$$);
  };
  $goog$exportPath_$$("ColorAttributeGroupHandler", $oj$$15$$.$ColorAttributeGroupHandler$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$ColorAttributeGroupHandler$, $oj$$15$$.$AttributeGroupHandler$, "oj.ColorAttributeGroupHandler");
  $oj$$15$$.$ColorAttributeGroupHandler$.$_DEFAULT_COLORS$ = "#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");
  $oj$$15$$.$ColorAttributeGroupHandler$.$_STYLE_CLASSES$ = "oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");
  $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$ = null;
  $oj$$15$$.$ColorAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$15$$$$ColorAttributeGroupHandler$$$$getValueRamp$$() {
    return this.$_attributeValues$.slice();
  };
  $DvtJsonPath$$.prototype.$_resolveLeafObjectAndProperty$ = function $$DvtJsonPath$$$$$_resolveLeafObjectAndProperty$$($root$$2$$, $path$$8$$, $delimiter$$, $createIfMissing$$) {
    for (var $result$$49$$ = {};$root$$2$$ && -1 < $path$$8$$.indexOf($delimiter$$);) {
      var $subProperty$$ = $path$$8$$.substring(0, $path$$8$$.indexOf($delimiter$$));
      $createIfMissing$$ && void 0 === $root$$2$$[$subProperty$$] && ($root$$2$$[$subProperty$$] = {});
      $root$$2$$ = $root$$2$$[$subProperty$$];
      $path$$8$$ = $path$$8$$.substring($path$$8$$.indexOf($delimiter$$) + 1, $path$$8$$.length);
    }
    $root$$2$$ && ($result$$49$$.object = $root$$2$$, $result$$49$$.parameter = $path$$8$$);
    return $result$$49$$;
  };
  $DvtJsonPath$$.prototype.$_resolvePath$ = function $$DvtJsonPath$$$$$_resolvePath$$($createIfMissing$$1_result$$50$$) {
    void 0 === this.$_leaf$ && ($createIfMissing$$1_result$$50$$ = this.$_resolveLeafObjectAndProperty$(this.$_root$, this.$_path$, this.$_delimiter$, $createIfMissing$$1_result$$50$$), this.$_leaf$ = $createIfMissing$$1_result$$50$$.object, this.$_param$ = $createIfMissing$$1_result$$50$$.parameter);
  };
  $DvtJsonPath$$.prototype.$getValue$ = function $$DvtJsonPath$$$$$getValue$$() {
    this.$_resolvePath$(!1);
    return void 0 === this.$_leaf$ ? void 0 : this.$_leaf$[this.$_param$];
  };
  $DvtJsonPath$$.prototype.$setValue$ = function $$DvtJsonPath$$$$$setValue$$($value$$199$$, $bOverride$$) {
    this.$_resolvePath$(!0);
    if ($bOverride$$ || !this.$_leaf$[this.$_param$]) {
      this.$_leaf$[this.$_param$] = $value$$199$$;
    }
  };
  var $DvtStyleProcessor$$ = {CSS_TEXT_PROPERTIES:function($cssDiv$$) {
    var $ignoreProperties$$ = {};
    $cssDiv$$ && ($cssDiv$$.hasClass("oj-gaugeMetricLabel") && $cssDiv$$.hasClass($cssDiv$$.parentNode, "oj-ledGauge") ? ($ignoreProperties$$["font-size"] = !0, $ignoreProperties$$.color = !0) : $cssDiv$$.hasClass($cssDiv$$, "oj-chartSliceLabel") ? $ignoreProperties$$.color = !0 : $cssDiv$$.hasClass("oj-treemap-node-header") && ($ignoreProperties$$["font-weight"] = !0));
    return $DvtStyleProcessor$$.$_buildTextCssPropertiesObject$($cssDiv$$, $ignoreProperties$$);
  }, CSS_BACKGROUND_PROPERTIES:function($cssDiv$$1$$) {
    return $DvtStyleProcessor$$.$_buildCssBackgroundPropertiesObject$($cssDiv$$1$$);
  }, CSS_URL:function($cssDiv$$2$$) {
    return $DvtStyleProcessor$$.$_parseUrl$($cssDiv$$2$$);
  }, $_INHERITED_FONT_COLOR$:"rgb(254, 0, 254)", $_INHERITED_FONT_FAMILY$:"Times", $_INHERITED_FONT_SIZE$:"1px", $_INHERITED_FONT_WEIGHT$:"1", $_INHERITED_FONT_STYLE$:"normal", $_FONT_SIZE_BUFFER$:4, $_styleCache$:{}, $defaultStyleProcessor$:function($cssDiv$$3$$, $property$$24$$) {
    return $cssDiv$$3$$.css($property$$24$$);
  }, $_parseUrl$:function($cssDiv$$4_url$$21$$) {
    return($cssDiv$$4_url$$21$$ = $cssDiv$$4_url$$21$$.css("background-image")) && -1 !== $cssDiv$$4_url$$21$$.indexOf("url(") ? $cssDiv$$4_url$$21$$.slice($cssDiv$$4_url$$21$$.indexOf("url(") + 4, $cssDiv$$4_url$$21$$.length - 1).replace(/"/g, "") : $cssDiv$$4_url$$21$$;
  }, $_buildCssBackgroundPropertiesObject$:function($cssDiv$$5$$) {
    var $cssObj$$ = {};
    $cssDiv$$5$$.css("border-top-color") && ($cssObj$$["border-color"] = $cssDiv$$5$$.css("border-top-color"));
    $cssDiv$$5$$.css("border-width") && $cssDiv$$5$$.css("border-style") && "none" != $cssDiv$$5$$.css("border-style") && ($cssObj$$["border-width"] = $cssDiv$$5$$.css("border-width"));
    $cssDiv$$5$$.css("background-color") && ($cssObj$$["background-color"] = $cssDiv$$5$$.css("background-color"));
    return $cssObj$$;
  }, $_buildTextCssPropertiesObject$:function($cssDiv$$6$$, $ignoreProperties$$1$$) {
    var $cssObj$$1$$ = {}, $value$$200$$ = $cssDiv$$6$$.css("font-family");
    $value$$200$$ && $value$$200$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$ && ($cssObj$$1$$["font-family"] = $value$$200$$.replace(/"/g, "'"));
    $value$$200$$ = $cssDiv$$6$$.css("font-size");
    !$value$$200$$ || -1 < $value$$200$$.indexOf("px") && parseFloat($value$$200$$) < $DvtStyleProcessor$$.$_FONT_SIZE_BUFFER$ || $ignoreProperties$$1$$["font-size"] || ($cssObj$$1$$["font-size"] = $value$$200$$);
    ($value$$200$$ = $cssDiv$$6$$.css("font-weight")) && $value$$200$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$ && !$ignoreProperties$$1$$["font-weight"] && ($cssObj$$1$$["font-weight"] = $value$$200$$);
    ($value$$200$$ = $cssDiv$$6$$.css("color")) && $value$$200$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$ && !$ignoreProperties$$1$$.color && ($cssObj$$1$$.color = $value$$200$$);
    ($value$$200$$ = $cssDiv$$6$$.css("font-style")) && $value$$200$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$ && ($cssObj$$1$$["font-style"] = $value$$200$$);
    return $cssObj$$1$$;
  }, $processStyles$:function($definitions_element$$93_styleClasses$$, $options$$293$$, $componentClasses_innerDummyDiv$$, $childClasses$$) {
    var $outerDummyDiv$$ = $$$$15$$(document.createElement("div"));
    $outerDummyDiv$$.attr("style", "display:none;");
    $definitions_element$$93_styleClasses$$.append($outerDummyDiv$$);
    $definitions_element$$93_styleClasses$$ = "";
    for (var $i$$261$$ = 0;$i$$261$$ < $componentClasses_innerDummyDiv$$.length;$i$$261$$++) {
      $definitions_element$$93_styleClasses$$ = $definitions_element$$93_styleClasses$$ + $componentClasses_innerDummyDiv$$[$i$$261$$] + " ";
    }
    $outerDummyDiv$$.attr("class", $definitions_element$$93_styleClasses$$);
    $$$$15$$(document.body).append($outerDummyDiv$$);
    $componentClasses_innerDummyDiv$$ = $$$$15$$(document.createElement("div"));
    $componentClasses_innerDummyDiv$$.css("font-size", $DvtStyleProcessor$$.$_INHERITED_FONT_SIZE$);
    $componentClasses_innerDummyDiv$$.css("color", $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$);
    $componentClasses_innerDummyDiv$$.css("font-weight", $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$);
    $componentClasses_innerDummyDiv$$.css("font-style", $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$);
    $outerDummyDiv$$.append($componentClasses_innerDummyDiv$$);
    for (var $styleClass$$3$$ in $childClasses$$) {
      $definitions_element$$93_styleClasses$$ = $childClasses$$[$styleClass$$3$$], $definitions_element$$93_styleClasses$$ instanceof Array || ($definitions_element$$93_styleClasses$$ = [$definitions_element$$93_styleClasses$$]), $DvtStyleProcessor$$.$_processStyle$($componentClasses_innerDummyDiv$$, $options$$293$$, $styleClass$$3$$, $definitions_element$$93_styleClasses$$);
    }
    $outerDummyDiv$$.remove();
  }, $_processStyle$:function($element$$94$$, $options$$294$$, $styleClass$$4$$, $definitions$$1$$) {
    $DvtStyleProcessor$$.$_styleCache$[$styleClass$$4$$] || ($DvtStyleProcessor$$.$_styleCache$[$styleClass$$4$$] = {});
    for (var $cssDiv$$7$$ = null, $i$$262$$ = 0;$i$$262$$ < $definitions$$1$$.length;$i$$262$$++) {
      var $definition_path$$10$$ = $definitions$$1$$[$i$$262$$], $property$$25_strValue$$ = $definition_path$$10$$.property;
      if ($property$$25_strValue$$) {
        var $value$$201$$ = $DvtStyleProcessor$$.$_styleCache$[$styleClass$$4$$][$property$$25_strValue$$];
        "undefined" == typeof $value$$201$$ && ($cssDiv$$7$$ || ($cssDiv$$7$$ = $$$$15$$(document.createElement("div")), $cssDiv$$7$$.addClass($styleClass$$4$$), $element$$94$$.append($cssDiv$$7$$)), $value$$201$$ = $DvtStyleProcessor$$.$_resolveStyle$($cssDiv$$7$$, $property$$25_strValue$$), $DvtStyleProcessor$$.$_styleCache$[$styleClass$$4$$][$property$$25_strValue$$] = $value$$201$$);
        if (null != $value$$201$$) {
          var $definition_path$$10$$ = new $DvtJsonPath$$($options$$294$$, $definition_path$$10$$.path), $handler$$48$$ = $DvtStyleProcessor$$[$property$$25_strValue$$];
          if (null != $handler$$48$$) {
            var $optionsValue$$ = $definition_path$$10$$.$getValue$();
            if ("CSS_URL" !== $property$$25_strValue$$) {
              $property$$25_strValue$$ = "";
              if (null != $optionsValue$$) {
                for (var $attr$$17$$ in $value$$201$$) {
                  -1 === $optionsValue$$.indexOf($attr$$17$$) && ($property$$25_strValue$$ += $attr$$17$$ + ":" + $value$$201$$[$attr$$17$$] + ";");
                }
                $property$$25_strValue$$ += $optionsValue$$;
              } else {
                for ($attr$$17$$ in $value$$201$$) {
                  $property$$25_strValue$$ += $attr$$17$$ + ":" + $value$$201$$[$attr$$17$$] + ";";
                }
              }
              $value$$201$$ = $property$$25_strValue$$;
            }
          }
          $definition_path$$10$$.$setValue$($value$$201$$, null != $handler$$48$$);
        }
      }
    }
  }, $_resolveStyle$:function($cssDiv$$8$$, $property$$26$$) {
    var $handler$$49_value$$202$$ = $DvtStyleProcessor$$[$property$$26$$], $handler$$49_value$$202$$ = $handler$$49_value$$202$$ ? $handler$$49_value$$202$$($cssDiv$$8$$) : $DvtStyleProcessor$$.$defaultStyleProcessor$($cssDiv$$8$$, $property$$26$$);
    return null == $handler$$49_value$$202$$ || "string" == typeof $handler$$49_value$$202$$ && "" == $handler$$49_value$$202$$.replace(/^\s+/g, "") ? null : $handler$$49_value$$202$$;
  }};
  $oj$$15$$.$__registerWidget$("oj.dvtBaseComponent", $$$$15$$.oj.baseComponent, {_ComponentCreate:function() {
    this._super();
    this.$_referenceDiv$ = $$$$15$$(document.createElement("div"));
    this.$_referenceDiv$.attr("style", "visibility:hidden;");
    this.element.append(this.$_referenceDiv$);
    var $parentElement$$4$$ = this.element[0].parentElement;
    this.$_context$ = $parentElement$$4$$ && $parentElement$$4$$.$_dvtcontext$ ? $parentElement$$4$$.$_dvtcontext$ : new $dvt$$1$$.DvtContext(this.element[0], null, this.$_referenceDiv$[0]);
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.$_context$.setTooltipAttachedCallback($oj$$15$$.Components.$subtreeAttached$);
    this.$_context$.setTooltipStyleClass("oj-dvt-tooltip");
    this.$_context$.setDatatipStyleClass("oj-dvt-datatip");
    $$$$15$$(document.body).hasClass("oj-hicontrast") && $dvt$$1$$.DvtAgent.setHighContrast(!0);
    this.$_component$ = this.$_CreateDvtComponent$(this.$_context$, this.$_HandleEvent$, this);
    this.$_context$.getStage().addChild(this.$_component$);
    this.$_setLocaleHelpers$();
    this.$_processTranslations$();
    this.$_LoadResources$();
  }, $_AfterCreate$:function() {
    this._super();
    this.element.attr("tabIndex", 0);
    this.$_Render$();
    this.$_resizeListener$ = this.$_handleResize$.bind(this);
    $oj$$15$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeListener$, 250);
  }, refresh:function() {
    this._super();
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.$_processTranslations$();
    this.$_Render$();
  }, getNodeBySubId:function($locator$$18$$) {
    var $automation$$ = this.$_component$ && this.$_component$.getAutomation ? this.$_component$.getAutomation() : null;
    if ($automation$$) {
      return $automation$$.getDomElementForSubId(this.$_ConvertLocatorToSubId$($locator$$18$$));
    }
  }, getSubIdByNode:function($node$$41_subId$$16$$) {
    var $automation$$1$$ = this.$_component$ && this.$_component$.getAutomation ? this.$_component$.getAutomation() : null;
    if ($automation$$1$$) {
      return($node$$41_subId$$16$$ = $automation$$1$$.getSubIdForDomElement($node$$41_subId$$16$$)) ? this.$_ConvertSubIdToLocator$($node$$41_subId$$16$$) : null;
    }
  }, $_ConvertLocatorToSubId$:function() {
    return null;
  }, $_ConvertSubIdToLocator$:function() {
    return null;
  }, $_ProcessStyles$:function() {
    for (var $componentStyles$$ = this.$_GetComponentStyleClasses$(), $i$$263$$ = 0;$i$$263$$ < $componentStyles$$.length;$i$$263$$++) {
      this.element.addClass($componentStyles$$[$i$$263$$]);
    }
    $DvtStyleProcessor$$.$processStyles$(this.element, this.options, this.$_GetComponentStyleClasses$(), this.$_GetChildStyleClasses$());
  }, $_GetComponentStyleClasses$:function() {
    return["oj-dvtbase"];
  }, $_GetChildStyleClasses$:function() {
    return{};
  }, $_GetEventTypes$:function() {
    return[];
  }, $_GetTranslationMap$:function() {
    var $ret$$28_translations$$10$$ = this.options.translations, $ret$$28_translations$$10$$ = {"DvtUtilBundle.CLEAR_SELECTION":$ret$$28_translations$$10$$.labelClearSelection, "DvtUtilBundle.COLON_SEP_LIST":$ret$$28_translations$$10$$.labelAndValue, "DvtUtilBundle.INVALID_DATA":$ret$$28_translations$$10$$.labelInvalidData, "DvtUtilBundle.NO_DATA":$ret$$28_translations$$10$$.labelNoData, "DvtUtilBundle.DATA_VISUALIZATION":$ret$$28_translations$$10$$.labelDataVisualization, "DvtUtilBundle.STATE_SELECTED":$ret$$28_translations$$10$$.stateSelected, 
    "DvtUtilBundle.STATE_UNSELECTED":$ret$$28_translations$$10$$.stateUnselected, "DvtUtilBundle.STATE_MAXIMIZED":$ret$$28_translations$$10$$.stateMaximized, "DvtUtilBundle.STATE_MINIMIZED":$ret$$28_translations$$10$$.stateMinimized, "DvtUtilBundle.STATE_EXPANDED":$ret$$28_translations$$10$$.stateExpanded, "DvtUtilBundle.STATE_COLLAPSED":$ret$$28_translations$$10$$.stateCollapsed, "DvtUtilBundle.STATE_ISOLATED":$ret$$28_translations$$10$$.stateIsolated, "DvtUtilBundle.STATE_HIDDEN":$ret$$28_translations$$10$$.stateHidden, 
    "DvtUtilBundle.STATE_VISIBLE":$ret$$28_translations$$10$$.stateVisible, "DvtUtilBundle.SCALING_SUFFIX_THOUSAND":$ret$$28_translations$$10$$.labelScalingSuffixThousand, "DvtUtilBundle.SCALING_SUFFIX_MILLION":$ret$$28_translations$$10$$.labelScalingSuffixMillion, "DvtUtilBundle.SCALING_SUFFIX_BILLION":$ret$$28_translations$$10$$.labelScalingSuffixBillion, "DvtUtilBundle.SCALING_SUFFIX_TRILLION":$ret$$28_translations$$10$$.labelScalingSuffixTrillion, "DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":$ret$$28_translations$$10$$.labelScalingSuffixQuadrillion}, 
    $monthNames$$2$$ = $oj$$15$$.$LocaleData$.$getMonthNames$("abbreviated");
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_JANUARY"] = $monthNames$$2$$[0];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_FEBRUARY"] = $monthNames$$2$$[1];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_MARCH"] = $monthNames$$2$$[2];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_APRIL"] = $monthNames$$2$$[3];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_MAY"] = $monthNames$$2$$[4];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_JUNE"] = $monthNames$$2$$[5];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_JULY"] = $monthNames$$2$$[6];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_AUGUST"] = $monthNames$$2$$[7];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"] = $monthNames$$2$$[8];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_OCTOBER"] = $monthNames$$2$$[9];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_NOVEMBER"] = $monthNames$$2$$[10];
    $ret$$28_translations$$10$$["DvtUtilBundle.MONTH_SHORT_DECEMBER"] = $monthNames$$2$$[11];
    return $ret$$28_translations$$10$$;
  }, $_GetTranslatedResource$:function($key$$80$$, $params$$17$$) {
    var $translatedResource$$ = this.options.translations[$key$$80$$];
    if ($params$$17$$) {
      for (var $paramMap$$ = {}, $i$$264$$ = 0;$i$$264$$ < $params$$17$$.length;$i$$264$$++) {
        $paramMap$$[$params$$17$$[$i$$264$$]] = "{" + $i$$264$$ + "}";
      }
      $translatedResource$$ = $oj$$15$$.$Translations$.$applyParameters$($translatedResource$$, $paramMap$$);
    }
    return $translatedResource$$;
  }, $_processTranslations$:function() {
    var $translationMap$$ = this.$_GetTranslationMap$();
    $dvt$$1$$.DvtBundle.addLocalizedStrings($translationMap$$);
  }, $_setLocaleHelpers$:function() {
    var $helpers$$ = {};
    $helpers$$.numberConverterFactory = $oj$$15$$.$Validation$.$getDefaultConverterFactory$("number");
    $helpers$$.dateToIsoConverter = function $$helpers$$$dateToIsoConverter$($input$$4$$) {
      return $input$$4$$ instanceof Date ? $oj$$15$$.$IntlConverterUtils$.dateToLocalIso($input$$4$$) : $input$$4$$;
    };
    $helpers$$.isoToDateConverter = function $$helpers$$$isoToDateConverter$($input$$5$$) {
      return "string" == typeof $input$$5$$ ? $oj$$15$$.$IntlConverterUtils$.isoToLocalDate($input$$5$$) : $input$$5$$;
    };
    this.$_context$.setLocaleHelpers($helpers$$);
  }, _destroy:function() {
    this.$_context$.hideTooltips();
    this.$_component$.destroy && this.$_component$.destroy();
    $oj$$15$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeListener$);
    this.element.children().remove();
    this.element.removeAttr("role").removeAttr("tabIndex");
    for (var $componentStyles$$1$$ = this.$_GetComponentStyleClasses$(), $i$$265$$ = 0;$i$$265$$ < $componentStyles$$1$$.length;$i$$265$$++) {
      this.element.removeClass($componentStyles$$1$$[$i$$265$$]);
    }
    this._super();
  }, _setOptions:function($options$$295$$, $flags$$22$$) {
    this._superApply(arguments);
    if (!this.$_bUserDrivenChange$) {
      var $bRenderNeeded$$ = !1, $eventTypes$$ = this.$_GetEventTypes$(), $optimizedOptions$$ = ["highlightedCategories", "selection", "dataCursorPosition"];
      $$$$15$$.each($options$$295$$, function($key$$81$$) {
        if (0 > $eventTypes$$.indexOf($key$$81$$) && 0 > $optimizedOptions$$.indexOf($key$$81$$)) {
          return $bRenderNeeded$$ = !0, !1;
        }
      });
      $bRenderNeeded$$ ? this.$_Render$() : (void 0 !== $options$$295$$.highlightedCategories && this.$_component$.highlight($options$$295$$.highlightedCategories), void 0 !== $options$$295$$.selection && this.$_component$.select($options$$295$$.selection), void 0 !== $options$$295$$.dataCursorPosition && this.$_component$.positionDataCursor && this.$_component$.positionDataCursor($options$$295$$.dataCursorPosition));
    }
  }, $_CreateDvtComponent$:function() {
    return null;
  }, $_HandleEvent$:function($event$$213$$) {
    var $type$$79$$ = $event$$213$$ && $event$$213$$.getType ? $event$$213$$.getType() : null;
    $type$$79$$ === $dvt$$1$$.DvtCategoryHideShowEvent.TYPE_HIDE || $type$$79$$ === $dvt$$1$$.DvtCategoryHideShowEvent.TYPE_SHOW ? this.$_UserOptionChange$("hiddenCategories", $event$$213$$.hiddenCategories) : $type$$79$$ === $dvt$$1$$.DvtCategoryRolloverEvent.TYPE_OVER || $type$$79$$ === $dvt$$1$$.DvtCategoryRolloverEvent.TYPE_OUT ? this.$_UserOptionChange$("highlightedCategories", $event$$213$$.categories) : $type$$79$$ === $dvt$$1$$.DvtOptionChangeEvent.TYPE ? this.$_UserOptionChange$($event$$213$$.key, 
    $event$$213$$.value, $event$$213$$.optionMetadata) : this.options.contextMenu && $type$$79$$ === $dvt$$1$$.DvtComponentTouchEvent.TOUCH_HOVER_END_TYPE && this.$_OpenContextMenu$($$$$15$$.Event($event$$213$$.getNativeEvent()), "touch");
  }, $_handleResize$:function() {
    var $newWidth$$2$$ = this.element.width(), $newHeight$$2$$ = this.element.height();
    (null == this.$_width$ || null == this.$_height$ || 5 <= Math.abs($newWidth$$2$$ - this.$_width$) + Math.abs($newHeight$$2$$ - this.$_height$)) && this.$_Render$(!0);
  }, $_LoadResources$:function() {
  }, $_Render$:function($isResize$$) {
    this.$_context$.isReadyToRender() ? (this.$_width$ = this.element.width(), this.$_height$ = this.element.height(), this.options._width = this.$_width$, this.options._height = this.$_height$, this.options._locale = $oj$$15$$.$Config$.$getLocale$(), this.$_ProcessStyles$(), this.$_component$.render($isResize$$ ? null : this.options, this.$_width$, this.$_height$), this.$_renderNeeded$ = !1) : ($oj$$15$$.$Logger$.info(this.options.translations.messageNotReadyToRender.summary), this.$_renderNeeded$ = 
    !0);
  }, $_NotifyShown$:function() {
    this._super();
    this.$_renderNeeded$ && this.$_Render$();
  }, $_NotifyAttached$:function() {
    this._super();
    this.$_renderNeeded$ && this.$_Render$();
  }, $_NotifyDetached$:function() {
    this._super();
    this.$_context$.hideTooltips();
  }, $_NotifyHidden$:function() {
    this._super();
    this.$_context$.hideTooltips();
  }, $_UserOptionChange$:function($key$$82$$, $value$$204$$, $optionMetadata$$1$$) {
    this.$_bUserDrivenChange$ = !0;
    this.option($key$$82$$, $value$$204$$, {_context:{$writeback$:!0, $optionMetadata$:$optionMetadata$$1$$, $internalSet$:!0}});
    this.$_bUserDrivenChange$ = !1;
  }, $_NotifyContextMenuGesture$:function($menu$$5$$, $event$$214$$, $eventType$$38$$) {
    "touch" !== $eventType$$38$$ && ("keyboard" === $eventType$$38$$ ? this.$_OpenContextMenu$($event$$214$$, $eventType$$38$$, {position:{of:this.$_component$.getKeyboardFocus()}}) : this._super($menu$$5$$, $event$$214$$, $eventType$$38$$));
  }, $_GetDvtComponent$:function($element$$95_widget$$4$$) {
    return($element$$95_widget$$4$$ = $oj$$15$$.Components.$getWidgetConstructor$($element$$95_widget$$4$$)("instance")) ? $element$$95_widget$$4$$.$_component$ : null;
  }, $_AddAutomationGetters$:function($map$$2$$) {
    if ($map$$2$$) {
      var $props$$11$$ = {}, $key$$83$$;
      for ($key$$83$$ in $map$$2$$) {
        this.$_addGetter$($map$$2$$, $key$$83$$, $props$$11$$);
      }
      Object.defineProperties($map$$2$$, $props$$11$$);
    }
  }, $_addGetter$:function($map$$3$$, $key$$84$$, $props$$12$$) {
    var $getterName$$ = ("selected" == $key$$84$$ ? "is" : "get") + $key$$84$$.charAt(0).toUpperCase() + $key$$84$$.slice(1);
    $props$$12$$[$getterName$$] = {value:function $$props$$12$$$$getterName$$$value$() {
      return $map$$3$$[$key$$84$$];
    }};
  }, $_GetStringFromIndexPath$:function($indexPath$$) {
    for (var $ret$$29$$ = "", $i$$266$$ = 0;$i$$266$$ < $indexPath$$.length;$i$$266$$++) {
      $ret$$29$$ += "[" + $indexPath$$[$i$$266$$] + "]";
    }
    return $ret$$29$$;
  }, $_GetIndexPath$:function($subId$$18$$) {
    for (var $indexPath$$1$$ = [], $currentIndex_end$$11$$ = 0;0 < $subId$$18$$.indexOf("[", $currentIndex_end$$11$$);) {
      var $start$$31$$ = $subId$$18$$.indexOf("[", $currentIndex_end$$11$$) + 1, $currentIndex_end$$11$$ = $subId$$18$$.indexOf("]", $currentIndex_end$$11$$);
      $indexPath$$1$$.push(Number($subId$$18$$.substring($start$$31$$, $currentIndex_end$$11$$)));
      $currentIndex_end$$11$$ += 1;
    }
    return $indexPath$$1$$;
  }, $_GetFirstIndex$:function($subId$$19$$) {
    return Number(this.$_GetFirstBracketedString$($subId$$19$$));
  }, $_GetFirstBracketedString$:function($subId$$20$$) {
    var $start$$32$$ = $subId$$20$$.indexOf("[") + 1, $end$$12$$ = $subId$$20$$.indexOf("]");
    return $subId$$20$$.substring($start$$32$$, $end$$12$$);
  }}, !0);
  $oj$$15$$.$ShapeAttributeGroupHandler$ = function $$oj$$15$$$$ShapeAttributeGroupHandler$$($matchRules$$3$$) {
    this.Init($matchRules$$3$$);
  };
  $goog$exportPath_$$("ShapeAttributeGroupHandler", $oj$$15$$.$ShapeAttributeGroupHandler$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$ShapeAttributeGroupHandler$, $oj$$15$$.$AttributeGroupHandler$, "oj.ShapeAttributeGroupHandler");
  $oj$$15$$.$ShapeAttributeGroupHandler$.$_attributeValues$ = "square circle diamond plus triangleDown triangleUp human".split(" ");
  $oj$$15$$.$ShapeAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$15$$$$ShapeAttributeGroupHandler$$$$getValueRamp$$() {
    return $oj$$15$$.$ShapeAttributeGroupHandler$.$_attributeValues$.slice();
  };
});
