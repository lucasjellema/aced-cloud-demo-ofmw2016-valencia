/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTagCloud"], function($oj$$54$$, $$$$49$$, $comp$$14$$, $base$$11$$, $dvt$$8$$) {
  $oj$$54$$.$__registerWidget$("oj.ojTagCloud", $$$$49$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$110$$, $callback$$116$$, $callbackObj$$11$$) {
    return $dvt$$8$$.DvtTagCloud.newInstance($context$$110$$, $callback$$116$$, $callbackObj$$11$$);
  }, $_ConvertLocatorToSubId$:function($locator$$54$$) {
    var $subId$$52$$ = $locator$$54$$.subId;
    "oj-tagcloud-item" == $subId$$52$$ ? $subId$$52$$ = "item[" + $locator$$54$$.index + "]" : "oj-tagcloud-tooltip" == $subId$$52$$ && ($subId$$52$$ = "tooltip");
    return $subId$$52$$;
  }, $_ConvertSubIdToLocator$:function($subId$$53$$) {
    var $locator$$55$$ = {};
    0 == $subId$$53$$.indexOf("item") ? ($locator$$55$$.subId = "oj-tagcloud-item", $locator$$55$$.index = this.$_GetFirstIndex$($subId$$53$$)) : "tooltip" == $subId$$53$$ && ($locator$$55$$.subId = "oj-tagcloud-tooltip");
    return $locator$$55$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$17$$ = this._super();
    $styleClasses$$17$$.push("oj-tagcloud");
    return $styleClasses$$17$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$18$$ = this._super();
    $styleClasses$$18$$["oj-tagcloud"] = {path:"styleDefaults/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$18$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$19$$ = this.options.translations, $ret$$57$$ = this._super();
    $ret$$57$$["DvtUtilBundle.TAG_CLOUD"] = $translations$$19$$.componentName;
    return $ret$$57$$;
  }, $_HandleEvent$:function($event$$545$$) {
    ($event$$545$$ && $event$$545$$.getType ? $event$$545$$.getType() : null) === $dvt$$8$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$545$$.getSelection()) : this._super($event$$545$$);
  }, getItem:function($index$$270$$) {
    return this.$_component$.getAutomation().getItem($index$$270$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$111_node$$77$$) {
    return($context$$111_node$$77$$ = this.getSubIdByNode($context$$111_node$$77$$)) && "oj-tagcloud-tooltip" !== $context$$111_node$$77$$.subId ? $context$$111_node$$77$$ : null;
  }});
});
