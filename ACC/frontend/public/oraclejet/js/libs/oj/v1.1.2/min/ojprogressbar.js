/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,f){(function(){a.Da("oj.ojProgressbar",f.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{max:100,value:0,disabled:!1},min:0,jr:!1,_ComponentCreate:function(){this._super();this.oldValue=this.options.value=this.xP();this.element.addClass("oj-progressbar").attr({role:"progressbar","aria-valuemin":this.min});this.tL=f("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
this.Zk()},ae:function(a,b){var c=this.element;this._super(a,b);void 0===b.max&&(c=c.attr("max")||void 0,null!=c&&(this.options.max=c))},xP:function(a){void 0===a&&(a=this.options.value);this.jr=-1==a;"number"!==typeof a&&(a=isNaN(a)?0:Number(a));return this.jr?-1:Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a,b){var c=a.value;delete a.value;this._super(a,b);this.options.disabled||(this.options.value=this.xP(c),this.Zk())},_setOption:function(a,b,c){"max"===a&&(b=Math.max(this.min,
b));this._super(a,b,c)},yba:function(){return this.jr?100:100*(this.options.value-this.min)/(this.options.max-this.min)},Zk:function(){var a=this.options.value,b=this.yba();this.tL.toggle(this.jr||a>this.min).width(b.toFixed(0)+"%");this.element.toggleClass("oj-progressbar-indeterminate",this.jr);this.jr?(this.element.attr({"aria-valuetext":"In Progress"}),this.element.removeAttr("aria-valuenow"),this.element.removeAttr("aria-valuemin"),this.element.removeAttr("aria-valuemax"),this.Lw||(this.Lw=f("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.tL),
this.Lw.addClass("oj-indeterminate"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":a}),this.Lw&&(this.Lw.remove(),this.Lw=null))},_destroy:function(){this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.tL.remove()}})})()});