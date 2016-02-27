/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$55$$, $$$$50$$, $comp$$15$$, $base$$12$$, $dvt$$9$$) {
  $oj$$55$$.$__registerWidget$("oj.ojThematicMap", $$$$50$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
    this._super();
  }, $_CreateDvtComponent$:function($context$$112$$, $callback$$117$$, $callbackObj$$12$$) {
    return $dvt$$9$$.DvtThematicMap.newInstance($context$$112$$, $callback$$117$$, $callbackObj$$12$$);
  }, $_ConvertLocatorToSubId$:function($locator$$56$$) {
    var $subId$$54$$ = $locator$$56$$.subId;
    "oj-thematicmap-area" == $subId$$54$$ ? $subId$$54$$ = $locator$$56$$.dataLayer + ":area[" + $locator$$56$$.index + "]" : "oj-thematicmap-marker" == $subId$$54$$ ? $subId$$54$$ = $locator$$56$$.dataLayer + ":marker[" + $locator$$56$$.index + "]" : "oj-thematicmap-tooltip" == $subId$$54$$ && ($subId$$54$$ = "tooltip");
    return $subId$$54$$;
  }, $_ConvertSubIdToLocator$:function($subId$$55$$) {
    var $locator$$57$$ = {};
    0 < $subId$$55$$.indexOf(":area") ? ($locator$$57$$.subId = "oj-thematicmap-area", $locator$$57$$.dataLayer = $subId$$55$$.substring(0, $subId$$55$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$55$$)) : 0 < $subId$$55$$.indexOf(":marker") ? ($locator$$57$$.subId = "oj-thematicmap-marker", $locator$$57$$.dataLayer = $subId$$55$$.substring(0, $subId$$55$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$55$$)) : "tooltip" == $subId$$55$$ && ($locator$$57$$.subId = 
    "oj-thematicmap-tooltip");
    return $locator$$57$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$19$$ = this._super();
    $styleClasses$$19$$.push("oj-thematicmap");
    return $styleClasses$$19$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$20$$ = this._super();
    $styleClasses$$20$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$20$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$20$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$20$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$20$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$20$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    return $styleClasses$$20$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$383$$, $flags$$46$$) {
    var $i$$407_numUpdates$$ = Object.keys($options$$383$$).length, $newAreaLayers$$ = $options$$383$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$383$$.pointDataLayers;
    if (1 == $i$$407_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$407_numUpdates$$ = 0;$i$$407_numUpdates$$ < $newAreaLayers$$.length;$i$$407_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$407_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$407_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$55$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$407_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$407_numUpdates$$ = 0;$i$$407_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$407_numUpdates$$++) {
          $oj$$55$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$407_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$407_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$407_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$407_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$383$$, $flags$$46$$);
  }, $_Render$:function() {
    this.$_loadBasemap$();
    for (var $i$$408$$ = 0;$i$$408$$ < this.$_checkBasemaps$.length;$i$$408$$++) {
      if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$408$$]]) {
        return;
      }
    }
    this.$_checkBasemaps$ = [];
    this.$_updateDataLayerSelection$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if ($areaLayers_pointDataLayers$$1$$) {
      for ($i$$408$$ = 0;$i$$408$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$408$$++) {
        var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$408$$].areaDataLayer;
        if ($areaDataLayer$$1_pointDataLayer$$) {
          var $dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer;
          $dl_renderer$$2$$ && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
        }
      }
    }
    if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
      for ($i$$408$$ = 0;$i$$408$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$408$$++) {
        ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$408$$]) && ($dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer) && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
      }
    }
    this.options._contextHandler = this.$_getContextHandler$();
    if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
      if (this.$_context$.isReadyToRender()) {
        for ($i$$408$$ = 0;$i$$408$$ < this.$_dataLayersToUpdate$.length;$i$$408$$++) {
          $dl_renderer$$2$$ = this.$_dataLayersToUpdate$[$i$$408$$], this.$_component$.updateLayer($dl_renderer$$2$$.options, $dl_renderer$$2$$.parentLayer, $dl_renderer$$2$$.isADL);
        }
        this.$_dataLayersToUpdate$ = [];
      } else {
        $oj$$55$$.$Logger$.error(this.$getResource$("messageNotReadyToRender").summary);
      }
    } else {
      this._super(), this.$_initiallyRendered$ = !0;
    }
    this._trigger("load", null, null);
  }, $_getTemplateRenderer$:function($templateFunction$$1$$) {
    var $thisRef$$2$$ = this;
    return function($context$$113_elem$$151$$) {
      var $dummyDiv$$1$$ = document.createElement("div");
      $dummyDiv$$1$$.style.display = "none";
      $dummyDiv$$1$$.$_dvtcontext$ = $thisRef$$2$$.$_context$;
      $thisRef$$2$$.element.append($dummyDiv$$1$$);
      $templateFunction$$1$$({parentElement:$dummyDiv$$1$$, data:$context$$113_elem$$151$$.data});
      return($context$$113_elem$$151$$ = $dummyDiv$$1$$.children[0]) ? "http://www.w3.org/2000/svg" === $context$$113_elem$$151$$.namespaceURI ? ($$$$50$$($dummyDiv$$1$$).remove(), $context$$113_elem$$151$$) : $thisRef$$2$$.$_GetDvtComponent$($context$$113_elem$$151$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$3$$ = this;
    return function($parentElement$$7$$, $rootElement$$19$$, $data$$160$$, $state$$17$$, $previousState$$1$$) {
      return{component:$oj$$55$$.Components.$getWidgetConstructor$($thisRef$$3$$.element), parentElement:$parentElement$$7$$, rootElement:$rootElement$$19$$, data:$data$$160$$, state:$state$$17$$, previousState:$previousState$$1$$, id:$data$$160$$.id, label:$data$$160$$.label, color:$data$$160$$.color, location:$data$$160$$.location, x:$data$$160$$.x, y:$data$$160$$.y};
    };
  }, renderDefaultHover:function($context$$115$$) {
    $context$$115$$.previousState && $context$$115$$.state.hovered == $context$$115$$.previousState.hovered || this.$_component$.processDefaultHoverEffect($context$$115$$.id, $context$$115$$.state.hovered);
  }, renderDefaultSelection:function($context$$116$$) {
    $context$$116$$.previousState && $context$$116$$.state.selected == $context$$116$$.previousState.selected || this.$_component$.processDefaultSelectionEffect($context$$116$$.id, $context$$116$$.state.selected);
  }, renderDefaultFocus:function($context$$117$$) {
    $context$$117$$.previousState && $context$$117$$.state.focused == $context$$117$$.previousState.focused || this.$_component$.processDefaultFocusEffect($context$$117$$.id, $context$$117$$.state.focused);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$55$$.$Config$.$getLocale$();
      $locale$$22$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$22$$, this.$_loadedBasemaps$ = []);
      var $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$409$$ = 0;$i$$409$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$409$$++) {
          var $layer$$21$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$409$$].layer;
          $layer$$21$$ && ($layer$$21$$ = $layer$$21$$.charAt(0).toUpperCase() + $layer$$21$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$21$$, $locale$$22$$));
        }
      }
      ($areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers) && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$34$$) {
    if (!this.$_loadedBasemaps$[$url$$34$$]) {
      var $resolvedUrl$$ = $oj$$55$$.$Config$.$getResourceUrl$($url$$34$$), $thisRef$$4$$ = this, $loadedBundles$$ = this.$_loadedBasemaps$;
      $$$$50$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$34$$] = !0;
        $thisRef$$4$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName_bundleUrl$$, $i$$410_layer$$22$$, $locale$$23_localeList$$) {
    var $relativeUrl_splitLocale$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1_bundleName_bundleUrl$$ + $i$$410_layer$$22$$ + ".js";
    -1 == this.$_checkBasemaps$.indexOf($relativeUrl_splitLocale$$) && (this.$_checkBasemaps$.push($relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($relativeUrl_splitLocale$$));
    if (-1 === $locale$$23_localeList$$.indexOf("en")) {
      for ($relativeUrl_splitLocale$$ = $locale$$23_localeList$$.toLowerCase().split("-"), $locale$$23_localeList$$ = [$relativeUrl_splitLocale$$[0]], 1 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1]), 2 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[2], $relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1] + 
      "-" + $relativeUrl_splitLocale$$[2]), $basemap$$1_bundleName_bundleUrl$$ = "resources/internal-deps/dvt/thematicMap/resourceBundles/" + $basemap$$1_bundleName_bundleUrl$$ + $i$$410_layer$$22$$ + "Bundle", $i$$410_layer$$22$$ = 0;$i$$410_layer$$22$$ < $locale$$23_localeList$$.length;$i$$410_layer$$22$$++) {
        if (this.$_supportedLocales$[$locale$$23_localeList$$[$i$$410_layer$$22$$]]) {
          $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$ + "_" + this.$_supportedLocales$[$locale$$23_localeList$$[$i$$410_layer$$22$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$1_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$1_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$1_bundleName_bundleUrl$$));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$546$$) {
    var $selection$$15$$, $id$$56$$;
    if (($event$$546$$ && $event$$546$$.getType ? $event$$546$$.getType() : null) === $dvt$$9$$.DvtSelectionEvent.TYPE) {
      $selection$$15$$ = {};
      $id$$56$$ = $event$$546$$.getParamValue("clientId");
      $selection$$15$$[$id$$56$$] = $event$$546$$.getSelection();
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$56$$ !== $dataLayerId$$ && ($selection$$15$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$15$$);
    } else {
      this._super($event$$546$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$20$$ = this.options.translations, $ret$$58$$ = this._super();
    $ret$$58$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$20$$.componentName;
    return $ret$$58$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$16$$ = this.options.selection;
    if ($selection$$16$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$411$$ = 0;$i$$411$$ < $als_pdls$$.length;$i$$411$$++) {
          $selection$$16$$[$als_pdls$$[$i$$411$$].id] && ($als_pdls$$[$i$$411$$].selection = $selection$$16$$[$als_pdls$$[$i$$411$$].id]);
        }
      }
      if ($als_pdls$$ = this.options.areaLayers) {
        for ($i$$411$$ = 0;$i$$411$$ < $als_pdls$$.length;$i$$411$$++) {
          var $adl$$ = $als_pdls$$[$i$$411$$].areaDataLayer;
          $adl$$ && $selection$$16$$[$adl$$.id] && ($adl$$.selection = $selection$$16$$[$adl$$.id]);
        }
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$271$$) {
    var $ret$$59$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$271$$);
    this.$_AddAutomationGetters$($ret$$59$$);
    return $ret$$59$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$272$$) {
    var $ret$$60$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$272$$);
    this.$_AddAutomationGetters$($ret$$60$$);
    return $ret$$60$$;
  }, getContextByNode:function($context$$118_node$$78$$) {
    return($context$$118_node$$78$$ = this.getSubIdByNode($context$$118_node$$78$$)) && "oj-thematicmap-tooltip" !== $context$$118_node$$78$$.subId ? $context$$118_node$$78$$ : null;
  }});
});
