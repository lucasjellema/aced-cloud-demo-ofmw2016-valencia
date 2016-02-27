/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$16$$, $$$$16$$, $comp$$5$$, $base$$4$$, $dvt$$2$$) {
  $oj$$16$$.$__registerWidget$("oj.dvtBaseGauge", $$$$16$$.oj.dvtBaseComponent, {$_ProcessStyles$:function() {
    this._super();
    this.options._thresholdColors = [this.options._threshold1, this.options._threshold2, this.options._threshold3];
    this.options._threshold1 = null;
    this.options._threshold2 = null;
    this.options._threshold3 = null;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$1$$ = this._super();
    $styleClasses$$1$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$1$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$1$$["oj-gauge-threshold1"] = {path:"_threshold1", property:"color"};
    $styleClasses$$1$$["oj-gauge-threshold2"] = {path:"_threshold2", property:"color"};
    $styleClasses$$1$$["oj-gauge-threshold3"] = {path:"_threshold3", property:"color"};
    return $styleClasses$$1$$;
  }, $_GetEventTypes$:function() {
    return["input", "optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$11$$ = this.options.translations, $ret$$30$$ = this._super();
    $ret$$30$$["DvtGaugeBundle.EMPTY_TEXT"] = this.$_GetTranslatedResource$("labelNoData");
    $ret$$30$$["DvtUtilBundle.GAUGE"] = $translations$$11$$.componentName;
    return $ret$$30$$;
  }, $_HandleEvent$:function($event$$215$$) {
    var $type$$80$$ = $event$$215$$ && $event$$215$$.getType ? $event$$215$$.getType() : null;
    $type$$80$$ === $dvt$$2$$.DvtValueChangeEvent.TYPE ? this.$_UserOptionChange$("value", $event$$215$$.getNewValue()) : $type$$80$$ === $dvt$$2$$.DvtValueChangeEvent.TYPE_INPUT ? this._trigger("input", null, {value:$event$$215$$.getNewValue()}) : this._super($event$$215$$);
  }, $_ConvertLocatorToSubId$:function($locator$$20_subId$$21$$) {
    $locator$$20_subId$$21$$ = $locator$$20_subId$$21$$.subId;
    if ("oj-dialgauge-tooltip" == $locator$$20_subId$$21$$ || "oj-ledgauge-tooltip" == $locator$$20_subId$$21$$ || "oj-ratinggauge-tooltip" == $locator$$20_subId$$21$$ || "oj-statusmetergauge-tooltip" == $locator$$20_subId$$21$$) {
      $locator$$20_subId$$21$$ = "tooltip";
    }
    return $locator$$20_subId$$21$$;
  }}, !0);
  $oj$$16$$.$__registerWidget$("oj.ojDialGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$55$$, $callback$$93$$, $callbackObj$$1$$) {
    return $dvt$$2$$.DvtDialGauge.newInstance($context$$55$$, $callback$$93$$, $callbackObj$$1$$);
  }, $_ConvertSubIdToLocator$:function($subId$$22$$) {
    var $locator$$21$$ = {};
    "tooltip" == $subId$$22$$ && ($locator$$21$$.subId = "oj-dialgauge-tooltip");
    return $locator$$21$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$2$$ = this._super();
    $styleClasses$$2$$.push("oj-dialgauge");
    return $styleClasses$$2$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this.$_setImages$();
    this._super();
  }, $_setImages$:function() {
    var $backgroundImages$$ = this.options.background, $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"), width:400, height:400}], $indicatorImages$$ = this.options.indicator, $indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"), 
    width:374, height:575}];
    "string" === typeof $backgroundImages$$ && ("rectangleAlta" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"), width:400, height:309}] : "domeAlta" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"), 
    width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"), width:400, height:309}] : "circleAntique" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"), width:400, height:400}] : "rectangleAntique" === 
    $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"), width:200, height:168}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"), width:400, height:335}] : "domeAntique" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"), width:200, height:176}, 
    {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"), width:400, height:352}] : "circleLight" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-400x400.png"), width:400, height:400}] : "rectangleLight" === $backgroundImages$$ ? $backgroundInfo$$ = 
    [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"), width:400, height:307}] : "domeLight" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-200x200.png"), width:200, height:138}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-400x400.png"), 
    width:400, height:276}] : "circleDark" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"), width:400, height:400}] : "rectangleDark" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"), 
    width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"), width:400, height:307}] : "domeDark" === $backgroundImages$$ && ($backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"), width:200, height:138}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"), width:400, height:276}]), this.options._backgroundImages = 
    $backgroundInfo$$);
    "string" === typeof $indicatorImages$$ && ("needleAntique" === $indicatorImages$$ ? $indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"), width:81, height:734}] : "needleDark" === $indicatorImages$$ ? $indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"), width:454, height:652}] : "needleLight" === $indicatorImages$$ && ($indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"), 
    width:454, height:652}]), this.options._indicatorImages = $indicatorInfo$$);
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$16$$.$__registerWidget$("oj.ojLedGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$56$$, $callback$$94$$, $callbackObj$$2$$) {
    return $dvt$$2$$.DvtLedGauge.newInstance($context$$56$$, $callback$$94$$, $callbackObj$$2$$);
  }, $_ConvertSubIdToLocator$:function($subId$$23$$) {
    var $locator$$22$$ = {};
    "tooltip" == $subId$$23$$ && ($locator$$22$$.subId = "oj-ledgauge-tooltip");
    return $locator$$22$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$3$$ = this._super();
    $styleClasses$$3$$.push("oj-ledgauge");
    return $styleClasses$$3$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$16$$.$__registerWidget$("oj.ojRatingGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$57$$, $callback$$95$$, $callbackObj$$3$$) {
    return $dvt$$2$$.DvtRatingGauge.newInstance($context$$57$$, $callback$$95$$, $callbackObj$$3$$);
  }, $_ConvertSubIdToLocator$:function($subId$$24$$) {
    var $locator$$23$$ = {};
    "tooltip" == $subId$$24$$ && ($locator$$23$$.subId = "oj-ratinggauge-tooltip");
    return $locator$$23$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$4$$ = this._super();
    $styleClasses$$4$$.push("oj-ratinggauge");
    return $styleClasses$$4$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, $_UserOptionChange$:function($key$$85$$, $value$$205$$) {
    this._superApply(arguments);
    "value" == $key$$85$$ && this.$_UserOptionChange$("changed", !0);
  }});
  $oj$$16$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$58$$, $callback$$96$$, $callbackObj$$4$$) {
    return $dvt$$2$$.DvtStatusMeterGauge.newInstance($context$$58$$, $callback$$96$$, $callbackObj$$4$$);
  }, $_ConvertSubIdToLocator$:function($subId$$25$$) {
    var $locator$$24$$ = {};
    "tooltip" == $subId$$25$$ && ($locator$$24$$.subId = "oj-statusmetergauge-tooltip");
    return $locator$$24$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$5$$ = this._super();
    $styleClasses$$5$$.push("oj-statusmetergauge");
    return $styleClasses$$5$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
});
