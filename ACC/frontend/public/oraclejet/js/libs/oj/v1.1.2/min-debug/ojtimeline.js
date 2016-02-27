/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTimeline"], function($oj$$56$$, $$$$51$$, $comp$$16$$, $base$$13$$, $dvt$$10$$) {
  $oj$$56$$.$__registerWidget$("oj.ojTimeline", $$$$51$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{viewportChange:null}, $_CreateDvtComponent$:function($context$$119$$, $callback$$118$$, $callbackObj$$13$$) {
    return $dvt$$10$$.DvtTimeline.newInstance($context$$119$$, $callback$$118$$, $callbackObj$$13$$);
  }, $_ConvertLocatorToSubId$:function($locator$$58$$) {
    var $subId$$56$$ = $locator$$58$$.subId;
    "oj-timeline-item" == $subId$$56$$ && ($subId$$56$$ = "timelineItem[" + $locator$$58$$.seriesIndex + "][" + $locator$$58$$.itemIndex + "]");
    return $subId$$56$$;
  }, $_ConvertSubIdToLocator$:function($indexPath$$3_subId$$57$$) {
    var $locator$$59$$ = {};
    0 == $indexPath$$3_subId$$57$$.indexOf("timelineItem") && ($indexPath$$3_subId$$57$$ = this.$_GetIndexPath$($indexPath$$3_subId$$57$$), $locator$$59$$.subId = "oj-timeline-item", $locator$$59$$.seriesIndex = $indexPath$$3_subId$$57$$[0], $locator$$59$$.itemIndex = $indexPath$$3_subId$$57$$[1]);
    return $locator$$59$$;
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    this.options.styleDefaults.series || (this.options.styleDefaults.series = {});
    if (!this.options.styleDefaults.series.colors) {
      var $handler$$53$$ = new $oj$$56$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.series.colors = $handler$$53$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$21$$ = this._super();
    $styleClasses$$21$$.push("oj-timeline");
    return $styleClasses$$21$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$22$$ = this._super();
    $styleClasses$$22$$["oj-timeline"] = {path:"styleDefaults/borderColor", property:"border-color"};
    $styleClasses$$22$$["oj-timeline-item"] = [{path:"styleDefaults/item/borderColor", property:"border-color"}, {path:"styleDefaults/item/backgroundColor", property:"background-color"}];
    $styleClasses$$22$$["oj-timeline-item oj-hover"] = [{path:"styleDefaults/item/hoverBorderColor", property:"border-color"}, {path:"styleDefaults/item/hoverBackgroundColor", property:"background-color"}];
    $styleClasses$$22$$["oj-timeline-item oj-selected"] = [{path:"styleDefaults/item/selectedBorderColor", property:"border-color"}, {path:"styleDefaults/item/selectedBackgroundColor", property:"background-color"}];
    $styleClasses$$22$$["oj-timeline-item-description"] = {path:"styleDefaults/item/descriptionStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-timeline-item-title"] = {path:"styleDefaults/item/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-timeline-major-axis-label"] = {path:"styleDefaults/majorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-timeline-major-axis-separator"] = {path:"styleDefaults/majorAxis/separatorColor", property:"color"};
    $styleClasses$$22$$["oj-timeline-minor-axis"] = [{path:"styleDefaults/minorAxis/backgroundColor", property:"background-color"}, {path:"styleDefaults/minorAxis/borderColor", property:"border-color"}];
    $styleClasses$$22$$["oj-timeline-minor-axis-label"] = {path:"styleDefaults/minorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-timeline-minor-axis-separator"] = {path:"styleDefaults/minorAxis/separatorColor", property:"color"};
    $styleClasses$$22$$["oj-timeline-overview"] = {path:"styleDefaults/overview/backgroundColor", property:"background-color"};
    $styleClasses$$22$$["oj-timeline-overview-label"] = {path:"styleDefaults/overview/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-timeline-overview-window"] = [{path:"styleDefaults/overview/window/backgroundColor", property:"background-color"}, {path:"styleDefaults/overview/window/borderColor", property:"border-color"}];
    $styleClasses$$22$$["oj-timeline-reference-object"] = {path:"styleDefaults/referenceObject/color", property:"color"};
    $styleClasses$$22$$["oj-timeline-series"] = {path:"styleDefaults/series/backgroundColor", property:"background-color"};
    $styleClasses$$22$$["oj-timeline-series-empty-text"] = {path:"styleDefaults/series/emptyTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-timeline-series-label"] = {path:"styleDefaults/series/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-timeline-zoomin-icon"] = {path:"_resources/zoomIn", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-zoomin-icon oj-hover"] = {path:"_resources/zoomIn_h", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-zoomin-icon oj-active"] = {path:"_resources/zoomIn_a", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-zoomin-icon oj-disabled"] = {path:"_resources/zoomIn_d", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-zoomout-icon"] = {path:"_resources/zoomOut", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-zoomout-icon oj-hover"] = {path:"_resources/zoomOut_h", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-zoomout-icon oj-active"] = {path:"_resources/zoomOut_a", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-zoomout-icon oj-disabled"] = {path:"_resources/zoomOut_d", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-scroll-indicator-back"] = {path:"_resources/scrollLeft", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-scroll-indicator-forward"] = {path:"_resources/scrollRight", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-scroll-indicator-up"] = {path:"_resources/scrollUp", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-scroll-indicator-down"] = {path:"_resources/scrollDown", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-overview-window-handle-horizontal"] = {path:"_resources/overviewHandleHor", property:"CSS_URL"};
    $styleClasses$$22$$["oj-timeline-overview-window-handle-vertical"] = {path:"_resources/overviewHandleVert", property:"CSS_URL"};
    return $styleClasses$$22$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "viewportChange"];
  }, $_GetTranslationMap$:function() {
    var $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = this.options.translations, $ret$$61$$ = this._super();
    $ret$$61$$["DvtUtilBundle.TIMELINE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.componentName;
    $ret$$61$$["DvtUtilBundle.TIMELINE_SERIES"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.labelSeries;
    $ret$$61$$["DvtUtilBundle.ZOOM_IN"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.tooltipZoomIn;
    $ret$$61$$["DvtUtilBundle.ZOOM_OUT"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.tooltipZoomOut;
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = $oj$$56$$.$LocaleData$.$getMonthNames$("wide");
    $ret$$61$$["DvtUtilBundle.MONTH_JANUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[0];
    $ret$$61$$["DvtUtilBundle.MONTH_FEBRUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[1];
    $ret$$61$$["DvtUtilBundle.MONTH_MARCH"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[2];
    $ret$$61$$["DvtUtilBundle.MONTH_APRIL"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[3];
    $ret$$61$$["DvtUtilBundle.MONTH_MAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[4];
    $ret$$61$$["DvtUtilBundle.MONTH_JUNE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[5];
    $ret$$61$$["DvtUtilBundle.MONTH_JULY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[6];
    $ret$$61$$["DvtUtilBundle.MONTH_AUGUST"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[7];
    $ret$$61$$["DvtUtilBundle.MONTH_SEPTEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[8];
    $ret$$61$$["DvtUtilBundle.MONTH_OCTOBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[9];
    $ret$$61$$["DvtUtilBundle.MONTH_NOVEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[10];
    $ret$$61$$["DvtUtilBundle.MONTH_DECEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[11];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = $oj$$56$$.$LocaleData$.$getDayNames$("wide");
    $ret$$61$$["DvtUtilBundle.DAY_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[0];
    $ret$$61$$["DvtUtilBundle.DAY_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[1];
    $ret$$61$$["DvtUtilBundle.DAY_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[2];
    $ret$$61$$["DvtUtilBundle.DAY_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[3];
    $ret$$61$$["DvtUtilBundle.DAY_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[4];
    $ret$$61$$["DvtUtilBundle.DAY_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[5];
    $ret$$61$$["DvtUtilBundle.DAY_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[6];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = $oj$$56$$.$LocaleData$.$getDayNames$("abbreviated");
    $ret$$61$$["DvtUtilBundle.DAY_SHORT_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[0];
    $ret$$61$$["DvtUtilBundle.DAY_SHORT_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[1];
    $ret$$61$$["DvtUtilBundle.DAY_SHORT_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[2];
    $ret$$61$$["DvtUtilBundle.DAY_SHORT_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[3];
    $ret$$61$$["DvtUtilBundle.DAY_SHORT_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[4];
    $ret$$61$$["DvtUtilBundle.DAY_SHORT_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[5];
    $ret$$61$$["DvtUtilBundle.DAY_SHORT_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[6];
    return $ret$$61$$;
  }, $_HandleEvent$:function($event$$547_minorAxisScale$$) {
    var $type$$101_viewportStart$$ = $event$$547_minorAxisScale$$ && $event$$547_minorAxisScale$$.getType ? $event$$547_minorAxisScale$$.getType() : null;
    if ($type$$101_viewportStart$$ === $dvt$$10$$.DvtSelectionEvent.TYPE) {
      this.$_UserOptionChange$("selection", $event$$547_minorAxisScale$$.getSelection());
    } else {
      if ($type$$101_viewportStart$$ === $dvt$$10$$.DvtTimelineViewportChangeEvent.TYPE) {
        var $type$$101_viewportStart$$ = (new Date($event$$547_minorAxisScale$$.getViewportStart())).toISOString(), $viewportEnd$$ = (new Date($event$$547_minorAxisScale$$.getViewportEnd())).toISOString();
        $event$$547_minorAxisScale$$ = $event$$547_minorAxisScale$$.getMinorAxisScale();
        var $viewportChangePayload$$1$$ = {viewportStart:$type$$101_viewportStart$$, viewportEnd:$viewportEnd$$, minorAxisScale:$event$$547_minorAxisScale$$};
        this.$_UserOptionChange$("viewportStart", $type$$101_viewportStart$$);
        this.$_UserOptionChange$("viewportEnd", $viewportEnd$$);
        this.$_UserOptionChange$("minorAxis.scale", $event$$547_minorAxisScale$$);
        this._trigger("viewportChange", null, $viewportChangePayload$$1$$);
      } else {
        this._super($event$$547_minorAxisScale$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$4$$ = this.options._resources, $converterFactory_yearsConverterVert$$ = $oj$$56$$.$Validation$.$converterFactory$("datetime"), $secondsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit", second:"2-digit"}), $minutesConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit"}), $hoursConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric"}), $daysConverter$$ = 
    $converterFactory_yearsConverterVert$$.createConverter({month:"numeric", day:"2-digit"}), $monthsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"long"}), $yearsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"numeric"}), $converterVert_monthsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"short"}), $converterFactory_yearsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"2-digit"}), 
    $converterVert_monthsConverterVert$$ = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$converterVert_monthsConverterVert$$, quarters:$converterVert_monthsConverterVert$$, years:$converterFactory_yearsConverterVert$$};
    $resources$$4$$.converter = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$monthsConverter$$, quarters:$monthsConverter$$, years:$yearsConverter$$};
    $resources$$4$$.converterVert = $converterVert_monthsConverterVert$$;
  }, getContextByNode:function($node$$79$$) {
    return this.getSubIdByNode($node$$79$$);
  }});
});
