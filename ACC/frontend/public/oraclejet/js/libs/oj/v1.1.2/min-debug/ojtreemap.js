/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$61$$, $$$$56$$, $comp$$17$$, $base$$14$$, $dvt$$11$$) {
  $oj$$61$$.$__registerWidget$("oj.ojTreemap", $$$$56$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$123$$, $callback$$123$$, $callbackObj$$14$$) {
    return $dvt$$11$$.DvtTreemap.newInstance($context$$123$$, $callback$$123$$, $callbackObj$$14$$);
  }, $_ConvertLocatorToSubId$:function($locator$$63$$) {
    var $subId$$60$$ = $locator$$63$$.subId;
    "oj-treemap-node" == $subId$$60$$ ? $subId$$60$$ = "node" + this.$_GetStringFromIndexPath$($locator$$63$$.indexPath) : "oj-treemap-tooltip" == $subId$$60$$ && ($subId$$60$$ = "tooltip");
    return $subId$$60$$;
  }, $_ConvertSubIdToLocator$:function($subId$$61$$) {
    var $locator$$64$$ = {};
    0 == $subId$$61$$.indexOf("node") ? ($locator$$64$$.subId = "oj-treemap-node", $locator$$64$$.indexPath = this.$_GetIndexPath$($subId$$61$$)) : "tooltip" == $subId$$61$$ && ($locator$$64$$.subId = "oj-treemap-tooltip");
    return $locator$$64$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$.push("oj-treemap");
    return $styleClasses$$23$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$24$$ = this._super();
    $styleClasses$$24$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$24$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$24$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$24$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$24$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$24$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$24$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$24$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$24$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$24$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$24$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$24$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$24$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$24$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$24$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$22$$ = this.options.translations, $ret$$68$$ = this._super();
    $ret$$68$$["DvtTreemapBundle.COLOR"] = $translations$$22$$.labelColor;
    $ret$$68$$["DvtTreemapBundle.ISOLATE"] = $translations$$22$$.tooltipIsolate;
    $ret$$68$$["DvtTreemapBundle.RESTORE"] = $translations$$22$$.tooltipRestore;
    $ret$$68$$["DvtTreemapBundle.SIZE"] = $translations$$22$$.labelSize;
    $ret$$68$$["DvtUtilBundle.TREEMAP"] = $translations$$22$$.componentName;
    return $ret$$68$$;
  }, $_HandleEvent$:function($event$$580_isolatedNode$$) {
    var $isolatedNodes_type$$102$$ = $event$$580_isolatedNode$$ && $event$$580_isolatedNode$$.getType ? $event$$580_isolatedNode$$.getType() : null;
    $isolatedNodes_type$$102$$ === $dvt$$11$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$580_isolatedNode$$.getSelection()) : $isolatedNodes_type$$102$$ === $dvt$$11$$.DvtTreemapIsolateEvent.TYPE ? ($isolatedNodes_type$$102$$ = this.options.$_isolatedNodes$, $isolatedNodes_type$$102$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes_type$$102$$ = this.options.$_isolatedNodes$), ($event$$580_isolatedNode$$ = $event$$580_isolatedNode$$.getId()) ? ($isolatedNodes_type$$102$$.push($event$$580_isolatedNode$$), 
    this.$_UserOptionChange$("isolatedNode", $event$$580_isolatedNode$$)) : ($isolatedNodes_type$$102$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes_type$$102$$.length ? $isolatedNodes_type$$102$$[$isolatedNodes_type$$102$$.length] : null))) : this._super($event$$580_isolatedNode$$);
  }, getNode:function($ret$$69_subIdPath$$3$$) {
    $ret$$69_subIdPath$$3$$ = this.$_component$.getAutomation().getNode($ret$$69_subIdPath$$3$$);
    this.$_AddAutomationGetters$($ret$$69_subIdPath$$3$$);
    return $ret$$69_subIdPath$$3$$;
  }, getContextByNode:function($context$$124_node$$124$$) {
    return($context$$124_node$$124$$ = this.getSubIdByNode($context$$124_node$$124$$)) && "oj-treemap-tooltip" !== $context$$124_node$$124$$.subId ? $context$$124_node$$124$$ : null;
  }});
});
