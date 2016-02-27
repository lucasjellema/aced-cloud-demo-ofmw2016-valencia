/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$50$$, $$$$46$$, $comp$$13$$, $base$$10$$, $dvt$$7$$) {
  $oj$$50$$.$__registerWidget$("oj.ojSunburst", $$$$46$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, rotateInput:null}, $_CreateDvtComponent$:function($context$$107$$, $callback$$115$$, $callbackObj$$10$$) {
    return $dvt$$7$$.DvtSunburst.newInstance($context$$107$$, $callback$$115$$, $callbackObj$$10$$);
  }, $_ConvertLocatorToSubId$:function($locator$$50$$) {
    var $subId$$48$$ = $locator$$50$$.subId;
    "oj-sunburst-node" == $subId$$48$$ ? $subId$$48$$ = "node" + this.$_GetStringFromIndexPath$($locator$$50$$.indexPath) : "oj-sunburst-tooltip" == $subId$$48$$ && ($subId$$48$$ = "tooltip");
    return $subId$$48$$;
  }, $_ConvertSubIdToLocator$:function($subId$$49$$) {
    var $locator$$51$$ = {};
    0 == $subId$$49$$.indexOf("node") ? ($locator$$51$$.subId = "oj-sunburst-node", $locator$$51$$.indexPath = this.$_GetIndexPath$($subId$$49$$)) : "tooltip" == $subId$$49$$ && ($locator$$51$$.subId = "oj-sunburst-tooltip");
    return $locator$$51$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$.push("oj-sunburst");
    return $styleClasses$$15$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$16$$ = this._super();
    $styleClasses$$16$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$16$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$16$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotateInput"];
  }, $_GetTranslationMap$:function() {
    var $translations$$18$$ = this.options.translations, $ret$$55$$ = this._super();
    $ret$$55$$["DvtSunburstBundle.COLOR"] = $translations$$18$$.labelColor;
    $ret$$55$$["DvtSunburstBundle.SIZE"] = $translations$$18$$.labelSize;
    $ret$$55$$["DvtUtilBundle.SUNBURST"] = $translations$$18$$.componentName;
    return $ret$$55$$;
  }, $_HandleEvent$:function($event$$528$$) {
    var $type$$98$$ = $event$$528$$ && $event$$528$$.getType ? $event$$528$$.getType() : null;
    $type$$98$$ === $dvt$$7$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$528$$.getSelection()) : $type$$98$$ === $dvt$$7$$.DvtSunburstRotationEvent.TYPE ? this.$_UserOptionChange$("startAngle", $event$$528$$.getStartAngle()) : $type$$98$$ === $dvt$$7$$.DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$528$$.getStartAngle()}) : this._super($event$$528$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$50$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, getNode:function($ret$$56_subIdPath$$2$$) {
    $ret$$56_subIdPath$$2$$ = this.$_component$.getAutomation().getNode($ret$$56_subIdPath$$2$$);
    this.$_AddAutomationGetters$($ret$$56_subIdPath$$2$$);
    return $ret$$56_subIdPath$$2$$;
  }, getContextByNode:function($context$$108_node$$75$$) {
    return($context$$108_node$$75$$ = this.getSubIdByNode($context$$108_node$$75$$)) && "oj-sunburst-tooltip" !== $context$$108_node$$75$$.subId ? $context$$108_node$$75$$ : null;
  }});
});
