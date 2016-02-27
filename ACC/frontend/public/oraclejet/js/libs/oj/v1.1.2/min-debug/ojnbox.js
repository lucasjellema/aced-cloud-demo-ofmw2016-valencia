/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtNBox"], function($oj$$41$$, $$$$37$$, $comp$$12$$, $base$$9$$, $dvt$$6$$) {
  $oj$$41$$.$__registerWidget$("oj.ojNBox", $$$$37$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$92$$, $callback$$106$$, $callbackObj$$9$$) {
    return $dvt$$6$$.DvtNBox.newInstance($context$$92$$, $callback$$106$$, $callbackObj$$9$$);
  }, $_ConvertLocatorToSubId$:function($locator$$44$$) {
    var $subId$$43$$ = $locator$$44$$.subId;
    "oj-nbox-cell" == $subId$$43$$ ? $subId$$43$$ = "cell[" + $locator$$44$$.row + "," + $locator$$44$$.column + "]" : "oj-nbox-dialog" == $subId$$43$$ ? $subId$$43$$ = "dialog" : "oj-nbox-dialog-close-button" == $subId$$43$$ ? $subId$$43$$ = "dialog#closeButton" : "oj-nbox-dialog-node" == $subId$$43$$ ? $subId$$43$$ = "dialog#node[" + $locator$$44$$.index + "]" : "oj-nbox-group-node" == $subId$$43$$ ? ($subId$$43$$ = $locator$$44$$.row && $locator$$44$$.column ? "cell[" + $locator$$44$$.row + "," + 
    $locator$$44$$.column + "]#groupNode[" : "groupNode[", $subId$$43$$ += $locator$$44$$.groupCategory + "]") : "oj-nbox-node" == $subId$$43$$ ? $subId$$43$$ = "cell[" + $locator$$44$$.row + "," + $locator$$44$$.column + "]#node[" + $locator$$44$$.index + "]" : "oj-nbox-overflow" == $subId$$43$$ ? $subId$$43$$ = "cell[" + $locator$$44$$.row + "," + $locator$$44$$.column + "]#overflow" : "oj-nbox-tooltip" == $subId$$43$$ && ($subId$$43$$ = "tooltip");
    return $subId$$43$$;
  }, $_ConvertSubIdToLocator$:function($subId$$44$$) {
    var $locator$$45$$ = {};
    if (0 == $subId$$44$$.indexOf("cell")) {
      var $cellIds_poundIndex$$ = this.$_GetFirstBracketedString$($subId$$44$$), $commaIndex$$ = $cellIds_poundIndex$$.indexOf(",");
      $locator$$45$$.row = $cellIds_poundIndex$$.substring(0, $commaIndex$$);
      $locator$$45$$.column = $cellIds_poundIndex$$.substring($commaIndex$$ + 1);
      $cellIds_poundIndex$$ = $subId$$44$$.indexOf("#");
      0 < $subId$$44$$.indexOf("#groupNode") ? ($locator$$45$$.subId = "oj-nbox-group-node", $locator$$45$$.groupCategory = this.$_GetFirstBracketedString$($subId$$44$$.substring($cellIds_poundIndex$$))) : 0 < $subId$$44$$.indexOf("#node") ? ($locator$$45$$.subId = "oj-nbox-node", $locator$$45$$.index = this.$_GetFirstIndex$($subId$$44$$.substring($cellIds_poundIndex$$))) : 0 < $subId$$44$$.indexOf("#overflow") ? $locator$$45$$.subId = "oj-nbox-overflow" : $locator$$45$$.subId = "oj-nbox-cell";
    } else {
      0 == $subId$$44$$.indexOf("dialog") ? 0 < $subId$$44$$.indexOf("#closeButton") ? $locator$$45$$.subId = "oj-nbox-dialog-close-button" : 0 < $subId$$44$$.indexOf("#node") ? ($locator$$45$$.subId = "oj-nbox-dialog-node", $locator$$45$$.index = this.$_GetFirstIndex$($subId$$44$$)) : $locator$$45$$.subId = "oj-nbox-dialog" : 0 == $subId$$44$$.indexOf("groupNode") ? ($locator$$45$$.subId = "oj-nbox-group-node", $locator$$45$$.groupCategory = this.$_GetFirstBracketedString$($subId$$44$$)) : "tooltip" == 
      $subId$$44$$ && ($locator$$45$$.subId = "oj-nbox-tooltip");
    }
    return $locator$$45$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$.push("oj-nbox");
    return $styleClasses$$13$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$["oj-nbox-columns-title"] = {path:"styleDefaults/columnsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-rows-title"] = {path:"styleDefaults/rowsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-column-label"] = {path:"styleDefaults/columnLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-row-label"] = {path:"styleDefaults/rowLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-cell"] = {path:"styleDefaults/cellDefaults/style", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-cell oj-minimized"] = {path:"styleDefaults/cellDefaults/minimizedStyle", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-cell-label"] = {path:"styleDefaults/cellDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-cell-countlabel"] = {path:"styleDefaults/cellDefaults/bodyCountLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-cell-countlabel oj-nbox-cell-header"] = {path:"styleDefaults/cellDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-node"] = {path:"styleDefaults/nodeDefaults/color", property:"background-color"};
    $styleClasses$$14$$["oj-nbox-node oj-hover"] = {path:"styleDefaults/nodeDefaults/hoverColor", property:"border-color"};
    $styleClasses$$14$$["oj-nbox-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$14$$["oj-nbox-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-node-secondarylabel"] = {path:"styleDefaults/nodeDefaults/secondaryLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-node-categorylabel"] = {path:"styleDefaults/__categoryNodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-dialog"] = [{path:"styleDefaults/__drawerDefaults/background", property:"background-color"}, {path:"styleDefaults/__drawerDefaults/borderColor", property:"border-color"}];
    $styleClasses$$14$$["oj-nbox-dialog-label"] = {path:"styleDefaults/__drawerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$14$$["oj-nbox-dialog-countlabel"] = {path:"styleDefaults/__drawerDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$14$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$17$$ = this.options.translations, $ret$$50$$ = this._super();
    $ret$$50$$["DvtUtilBundle.NBOX"] = $translations$$17$$.componentName;
    $ret$$50$$["DvtNBoxBundle.HIGHLIGHTED_COUNT"] = $translations$$17$$.highlightedCount;
    $ret$$50$$["DvtNBoxBundle.OTHER"] = $translations$$17$$.labelOther;
    $ret$$50$$["DvtNBoxBundle.GROUP_NODE"] = $translations$$17$$.labelGroup;
    $ret$$50$$["DvtNBoxBundle.SIZE"] = $translations$$17$$.labelSize;
    $ret$$50$$["DvtNBoxBundle.ADDITIONAL_DATA"] = $translations$$17$$.labelAdditionalData;
    return $ret$$50$$;
  }, $_HandleEvent$:function($event$$491$$) {
    var $keys$$41_type$$95$$ = $event$$491$$ && $event$$491$$.getType ? $event$$491$$.getType() : null;
    if ($keys$$41_type$$95$$ === $dvt$$6$$.DvtSelectionEvent.TYPE) {
      this.$_UserOptionChange$("selection", $event$$491$$.getSelection());
    } else {
      if ($keys$$41_type$$95$$ === $dvt$$6$$.DvtSetPropertyEvent.TYPE) {
        for (var $keys$$41_type$$95$$ = $event$$491$$.getParamKeys(), $i$$378$$ = 0;$i$$378$$ < $keys$$41_type$$95$$.length;$i$$378$$++) {
          var $key$$150$$ = $keys$$41_type$$95$$[$i$$378$$], $value$$262$$ = $event$$491$$.getParamValue($key$$150$$);
          "_drawer" == $key$$150$$ ? ($value$$262$$ && ($value$$262$$ = {id:$value$$262$$}), this.options[$key$$150$$] = $value$$262$$) : "maximizedRow" != $key$$150$$ && "maximizedColumn" != $key$$150$$ || this.$_UserOptionChange$($key$$150$$, $value$$262$$);
        }
      } else {
        this._super($event$$491$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$2$$ = this.options._resources;
    $resources$$2$$.overflow_dwn = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dwn.png"), width:34, height:9};
    $resources$$2$$.overflow_ovr = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ovr.png"), width:34, height:9};
    $resources$$2$$.overflow_ena = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ena.png"), width:34, height:9};
    $resources$$2$$.overflow_dis = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dis.png"), width:34, height:9};
    $resources$$2$$.close_dwn = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_dwn.png"), width:16, height:16};
    $resources$$2$$.close_ovr = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ovr.png"), width:16, height:16};
    $resources$$2$$.close_ena = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ena.png"), width:16, height:16};
  }, getNodeBySubId:function($locator$$46$$) {
    return this._super($locator$$46$$);
  }, getSubIdByNode:function($node$$68$$) {
    return this._super($node$$68$$);
  }, getRowsTitle:function() {
    var $auto$$14$$ = this.$_component$.getAutomation();
    return $auto$$14$$ ? $auto$$14$$.getData("rowsTitle") : null;
  }, getRowCount:function() {
    var $auto$$15$$ = this.$_component$.getAutomation();
    return $auto$$15$$ ? $auto$$15$$.getData("rowCount") : null;
  }, getRow:function($rowValue$$) {
    var $auto$$16$$ = this.$_component$.getAutomation();
    return $auto$$16$$ ? $auto$$16$$.getData("row", $rowValue$$) : null;
  }, getColumnsTitle:function() {
    var $auto$$17$$ = this.$_component$.getAutomation();
    return $auto$$17$$ ? $auto$$17$$.getData("columnsTitle") : null;
  }, getColumnCount:function() {
    var $auto$$18$$ = this.$_component$.getAutomation();
    return $auto$$18$$ ? $auto$$18$$.getData("columnCount") : -1;
  }, getColumn:function($columnValue$$) {
    var $auto$$19$$ = this.$_component$.getAutomation();
    return $auto$$19$$ ? $auto$$19$$.getData("column", $columnValue$$) : null;
  }, getCell:function($rowValue$$1$$, $columnValue$$1$$) {
    var $auto$$20$$ = this.$_component$.getAutomation(), $ret$$51$$ = $auto$$20$$ ? $auto$$20$$.getCell($rowValue$$1$$, $columnValue$$1$$) : null;
    $ret$$51$$ && ($ret$$51$$.getGroupNode = function $$ret$$51$$$getGroupNode$($groupMap$$) {
      return $auto$$20$$.getCellGroupNode($ret$$51$$, $groupMap$$);
    }, $ret$$51$$.getNode = function $$ret$$51$$$getNode$($nodeIndex$$1$$) {
      return $auto$$20$$.getCellNode($ret$$51$$, $nodeIndex$$1$$);
    });
    return $ret$$51$$;
  }, getGroupBehavior:function() {
    var $auto$$21$$ = this.$_component$.getAutomation();
    return $auto$$21$$ ? $auto$$21$$.getData("groupBehavior") : null;
  }, getGroupNode:function($groupCategory$$) {
    return this.$_component$.getAutomation().getGroupNode($groupCategory$$);
  }, getDialog:function() {
    var $auto$$23$$ = this.$_component$.getAutomation(), $ret$$52$$ = $auto$$23$$ ? $auto$$23$$.getDialog() : null;
    $ret$$52$$ && ($ret$$52$$.getNode = function $$ret$$52$$$getNode$($nodeIndex$$2$$) {
      return $auto$$23$$.getDialogNode($nodeIndex$$2$$);
    });
    return $ret$$52$$;
  }, getContextByNode:function($context$$93_node$$69$$) {
    return($context$$93_node$$69$$ = this.getSubIdByNode($context$$93_node$$69$$)) && "oj-nbox-tooltip" !== $context$$93_node$$69$$.subId ? $context$$93_node$$69$$ : null;
  }});
});
