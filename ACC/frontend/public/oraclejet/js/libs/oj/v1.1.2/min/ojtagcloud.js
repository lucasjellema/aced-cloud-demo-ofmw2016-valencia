/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTagCloud"],function(a,f,d,b,c){a.Da("oj.ojTagCloud",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null},Ef:function(a,b,d){return c.DvtTagCloud.newInstance(a,b,d)},si:function(a){var b=a.subId;"oj-tagcloud-item"==b?b="item["+a.index+"]":"oj-tagcloud-tooltip"==b&&(b="tooltip");return b},ng:function(a){var b={};0==a.indexOf("item")?(b.subId="oj-tagcloud-item",b.index=this.wi(a)):"tooltip"==
a&&(b.subId="oj-tagcloud-tooltip");return b},He:function(){var a=this._super();a.push("oj-tagcloud");return a},ti:function(){var a=this._super();a["oj-tagcloud"]={path:"styleDefaults/style",property:"CSS_TEXT_PROPERTIES"};return a},vi:function(){return["optionChange"]},Jh:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.TAG_CLOUD"]=a.componentName;return b},xi:function(a){(a&&a.getType?a.getType():null)===c.DvtSelectionEvent.TYPE?this.Cc("selection",a.getSelection()):this._super(a)},
getItem:function(a){return this.oa.getAutomation().getItem(a)},getItemCount:function(){return this.oa.getAutomation().getItemCount()},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-tagcloud-tooltip"!==a.subId?a:null}})});