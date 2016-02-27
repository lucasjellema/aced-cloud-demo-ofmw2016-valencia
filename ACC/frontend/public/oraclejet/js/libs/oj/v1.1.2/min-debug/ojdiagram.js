/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$31$$, $$$$29$$, $comp$$7$$, $base$$7$$, $dvt$$4$$) {
  $oj$$31$$.$__registerWidget$("oj.ojDiagram", $$$$29$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$31$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$ = this;
    return function($context$$83_elem$$82$$) {
      var $dummyDiv$$ = document.createElement("div");
      $dummyDiv$$.style.display = "none";
      $dummyDiv$$.$_dvtcontext$ = $thisRef$$.$_context$;
      $thisRef$$.element.append($dummyDiv$$);
      $templateFunction$$({parentElement:$dummyDiv$$, data:$context$$83_elem$$82$$.data});
      return($context$$83_elem$$82$$ = $dummyDiv$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$83_elem$$82$$.namespaceURI ? ($$$$29$$($dummyDiv$$).remove(), $context$$83_elem$$82$$) : $context$$83_elem$$82$$ ? $thisRef$$.$_GetDvtComponent$($context$$83_elem$$82$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$1$$ = this;
    return function($parentElement$$6$$, $rootElement$$, $data$$148$$, $state$$15$$, $previousState$$) {
      return{component:$oj$$31$$.Components.$getWidgetConstructor$($thisRef$$1$$.element), parentElement:$parentElement$$6$$, rootElement:$rootElement$$, data:$data$$148$$, state:$state$$15$$, previousState:$previousState$$, id:$data$$148$$.id, type:"node", label:$data$$148$$.label};
    };
  }, renderDefaultHover:function($context$$85$$) {
    $context$$85$$.previousState && $context$$85$$.state.hovered == $context$$85$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$85$$.id, $context$$85$$.state.hovered);
  }, renderDefaultSelection:function($context$$86$$) {
    $context$$86$$.previousState && $context$$86$$.state.selected == $context$$86$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$86$$.id, $context$$86$$.state.selected);
  }, renderDefaultFocus:function($context$$87$$) {
    $context$$87$$.previousState && $context$$87$$.state.focused == $context$$87$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$87$$.id, $context$$87$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$88$$, $callback$$103$$, $callbackObj$$7$$) {
    return $dvt$$4$$.DvtDiagram.newInstance($context$$88$$, $callback$$103$$, $callbackObj$$7$$);
  }, $_ConvertLocatorToSubId$:function($locator$$36$$) {
    var $subId$$36$$ = $locator$$36$$.subId;
    "oj-diagram-link" == $subId$$36$$ ? $subId$$36$$ = "link[" + $locator$$36$$.index + "]" : "oj-diagram-node" == $subId$$36$$ ? $subId$$36$$ = "node[" + $locator$$36$$.index + "]" : "oj-diagram-tooltip" == $subId$$36$$ && ($subId$$36$$ = "tooltip");
    return $subId$$36$$;
  }, $_ConvertSubIdToLocator$:function($subId$$37$$) {
    var $locator$$37$$ = {};
    0 == $subId$$37$$.indexOf("link") ? ($locator$$37$$.subId = "oj-diagram-link", $locator$$37$$.index = this.$_GetFirstIndex$($subId$$37$$)) : 0 == $subId$$37$$.indexOf("node") ? ($locator$$37$$.subId = "oj-diagram-node", $locator$$37$$.index = this.$_GetFirstIndex$($subId$$37$$)) : "tooltip" == $subId$$37$$ && ($locator$$37$$.subId = "oj-diagram-tooltip");
    return $locator$$37$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$.push("oj-diagram");
    return $styleClasses$$9$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$10$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$10$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$10$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$10$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$10$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$14$$ = this.options.translations, $ret$$40$$ = this._super();
    $ret$$40$$["DvtUtilBundle.DIAGRAM"] = $translations$$14$$.componentName;
    return $ret$$40$$;
  }, $_HandleEvent$:function($event$$364$$) {
    ($event$$364$$ && $event$$364$$.getType ? $event$$364$$.getType() : null) === $dvt$$4$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$364$$.getSelection()) : this._super($event$$364$$);
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }, getContextByNode:function($context$$89_node$$60$$) {
    return($context$$89_node$$60$$ = this.getSubIdByNode($context$$89_node$$60$$)) && "oj-diagram-tooltip" !== $context$$89_node$$60$$.subId ? $context$$89_node$$60$$ : null;
  }});
});
