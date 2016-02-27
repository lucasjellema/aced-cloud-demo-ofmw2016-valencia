/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$37$$, $$$$34$$, $comp$$11$$, $base$$8$$, $dvt$$5$$) {
  $oj$$37$$.$__registerWidget$("oj.ojLegend", $$$$34$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, drill:null}, $_CreateDvtComponent$:function($context$$90$$, $callback$$105$$, $callbackObj$$8$$) {
    return $dvt$$5$$.DvtLegend.newInstance($context$$90$$, $callback$$105$$, $callbackObj$$8$$);
  }, $_ConvertLocatorToSubId$:function($locator$$41$$) {
    var $subId$$41$$ = $locator$$41$$.subId;
    "oj-legend-section" == $subId$$41$$ ? $subId$$41$$ = "section" + this.$_GetStringFromIndexPath$($locator$$41$$.indexPath) : "oj-legend-item" == $subId$$41$$ ? ($subId$$41$$ = "section" + this.$_GetStringFromIndexPath$($locator$$41$$.sectionIndexPath), $subId$$41$$ += ":item[" + $locator$$41$$.itemIndex + "]") : "oj-legend-tooltip" == $subId$$41$$ && ($subId$$41$$ = "tooltip");
    return $subId$$41$$;
  }, $_ConvertSubIdToLocator$:function($itemSubstr$$1_subId$$42$$) {
    var $locator$$42$$ = {};
    if (0 < $itemSubstr$$1_subId$$42$$.indexOf(":item")) {
      var $itemStartIndex$$1$$ = $itemSubstr$$1_subId$$42$$.indexOf(":item"), $sectionSubstr$$1$$ = $itemSubstr$$1_subId$$42$$.substring(0, $itemStartIndex$$1$$);
      $itemSubstr$$1_subId$$42$$ = $itemSubstr$$1_subId$$42$$.substring($itemStartIndex$$1$$);
      $locator$$42$$.subId = "oj-legend-item";
      $locator$$42$$.sectionIndexPath = this.$_GetIndexPath$($sectionSubstr$$1$$);
      $locator$$42$$.itemIndex = this.$_GetFirstIndex$($itemSubstr$$1_subId$$42$$);
    } else {
      0 == $itemSubstr$$1_subId$$42$$.indexOf("section") ? ($locator$$42$$.subId = "oj-legend-section", $locator$$42$$.indexPath = this.$_GetIndexPath$($itemSubstr$$1_subId$$42$$)) : "tooltip" == $itemSubstr$$1_subId$$42$$ && ($locator$$42$$.subId = "oj-legend-tooltip");
    }
    return $locator$$42$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$.push("oj-legend");
    return $styleClasses$$11$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-legend-title"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-legend-section-title"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-legend-section-close-icon"] = {path:"_resources/closedEnabled", property:"CSS_URL"};
    $styleClasses$$12$$["oj-legend-section-close-icon oj-hover"] = {path:"_resources/closedOver", property:"CSS_URL"};
    $styleClasses$$12$$["oj-legend-section-close-icon oj-active"] = {path:"_resources/closedDown", property:"CSS_URL"};
    $styleClasses$$12$$["oj-legend-section-open-icon"] = {path:"_resources/openEnabled", property:"CSS_URL"};
    $styleClasses$$12$$["oj-legend-section-open-icon oj-hover"] = {path:"_resources/openOver", property:"CSS_URL"};
    $styleClasses$$12$$["oj-legend-section-open-icon oj-active"] = {path:"_resources/openDown", property:"CSS_URL"};
    return $styleClasses$$12$$;
  }, $_GetTranslationMap$:function() {
    var $translations$$16$$ = this.options.translations, $ret$$43$$ = this._super();
    $ret$$43$$["DvtUtilBundle.LEGEND"] = $translations$$16$$.componentName;
    return $ret$$43$$;
  }, $_GetEventTypes$:function() {
    return["categoryFilter", "categoryHighlight", "drill"];
  }, $_HandleEvent$:function($event$$439$$) {
    var $filterType$$1_highlightType$$1_type$$90$$ = $event$$439$$ && $event$$439$$.getType ? $event$$439$$.getType() : null;
    $filterType$$1_highlightType$$1_type$$90$$ === $dvt$$5$$.DvtCategoryHideShowEvent.TYPE_HIDE || $filterType$$1_highlightType$$1_type$$90$$ === $dvt$$5$$.DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType$$1_highlightType$$1_type$$90$$ = $filterType$$1_highlightType$$1_type$$90$$ === $dvt$$5$$.DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$439$$.getCategory(), type:$filterType$$1_highlightType$$1_type$$90$$}), this.$_UserOptionChange$("hiddenCategories", 
    $event$$439$$.hiddenCategories)) : $filterType$$1_highlightType$$1_type$$90$$ === $dvt$$5$$.DvtCategoryRolloverEvent.TYPE_OVER || $filterType$$1_highlightType$$1_type$$90$$ === $dvt$$5$$.DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType$$1_highlightType$$1_type$$90$$ = $filterType$$1_highlightType$$1_type$$90$$ === $dvt$$5$$.DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:$event$$439$$.categories, type:$filterType$$1_highlightType$$1_type$$90$$}), 
    this.$_UserOptionChange$("highlightedCategories", $event$$439$$.categories)) : $filterType$$1_highlightType$$1_type$$90$$ === $dvt$$5$$.DvtDrillEvent.TYPE ? this._trigger("drill", null, {id:$event$$439$$.getId()}) : this._super($event$$439$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.overviewGrippy = $oj$$37$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
  }, $_Render$:function() {
    this._super();
    this.element.attr("role") || this.element.attr("tabIndex", null);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getSection:function($subIdPath$$) {
    var $ret$$44$$ = this.$_component$.getAutomation().getSection($subIdPath$$);
    if ($ret$$44$$) {
      var $ojComponent$$ = this;
      this.$_AddAutomationGetters$($ret$$44$$);
      $ret$$44$$.getSection = function $$ret$$44$$$getSection$($section$$1_sectionIndex$$) {
        ($section$$1_sectionIndex$$ = $ret$$44$$.sections ? $ret$$44$$.sections[$section$$1_sectionIndex$$] : null) && $ojComponent$$.$_AddAutomationGetters$($section$$1_sectionIndex$$);
        return $section$$1_sectionIndex$$;
      };
      $ret$$44$$.getItem = function $$ret$$44$$$getItem$($item$$88_itemIndex$$4$$) {
        ($item$$88_itemIndex$$4$$ = $ret$$44$$.items ? $ret$$44$$.items[$item$$88_itemIndex$$4$$] : null) && $ojComponent$$.$_AddAutomationGetters$($item$$88_itemIndex$$4$$);
        return $item$$88_itemIndex$$4$$;
      };
    }
    return $ret$$44$$;
  }, getItem:function($ret$$45_subIdPath$$1$$) {
    $ret$$45_subIdPath$$1$$ = this.$_component$.getAutomation().getItem($ret$$45_subIdPath$$1$$);
    this.$_AddAutomationGetters$($ret$$45_subIdPath$$1$$);
    return $ret$$45_subIdPath$$1$$;
  }, getPreferredSize:function($width$$29$$, $height$$27$$) {
    var $dims$$ = this.$_component$.getPreferredSize(this.options, $width$$29$$, $height$$27$$);
    return{width:$dims$$.getWidth(), height:$dims$$.getHeight()};
  }, getContextByNode:function($context$$91_node$$63$$) {
    return($context$$91_node$$63$$ = this.getSubIdByNode($context$$91_node$$63$$)) && "oj-legend-tooltip" !== $context$$91_node$$63$$.subId ? $context$$91_node$$63$$ : null;
  }});
});
