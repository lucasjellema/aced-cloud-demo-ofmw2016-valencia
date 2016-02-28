/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(a,f){(function(){a.Da("oj.ojCheckboxset",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,value:void 0},refresh:function(){this._super();this.za()},widget:function(){return this.Kha},ae:function(b,c){var d=[],g;this._super(b,c);a.Be.vl([{X:"disabled",ra:!1,rc:!0},{X:"title",ra:""},{X:"placeholder",ra:""},{X:"required",ra:!1,je:!0,rc:!0}],c,this);this.Ng=this.qF();
void 0===c.value&&(g=this.Ng.filter(":checked"),0<g.length&&(g.each(function(){d.push(f(this).val())}),this.option("value",d,{_context:{ed:!0,mb:!0}})),void 0===this.options.value&&(this.options.value=[]))},_ComponentCreate:function(){this._super();if(this.element.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");this.Ng._ojRadioCheckbox();this.Kha=this.element.addClass("oj-checkboxset oj-component").attr("role","group");this._on(this.Ik);this.za()},uD:function(){this.Ng=
this.qF();this.Ng.filter(".oj-checkbox").each(function(){var a=void 0!==f(this).attr("disabled")?!!f(this).prop("disabled"):!1;f(this)._ojRadioCheckbox("option","disabled",a)});this.Ng.not(".oj-checkbox")._ojRadioCheckbox()},Focus:function(){this.Ff().first().focus();return!0},xD:function(){},qF:function(){var b=this.element.find("input[type\x3dcheckbox]:first");0===b.length&&a.u.warn("Could not find any input type\x3dcheckbox within this element");b=b.attr("name");return void 0===b?(b=this.element.find("input[type\x3dcheckbox]"),
b.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+b+"]")},Xe:function(a,c,d){a=this.element.find("input[type\x3dcheckbox]:tabbable").first();this.Ye(c,d,{launcher:a})},za:function(){this.Om(this.options.disabled)},Ik:{change:function(a){this.ux(a)}},ux:function(a){var c=this.og();this.tc(c,a,d)},og:function(){return this.fq()},tj:function(a){var c;this.Ng._ojRadioCheckbox("option","checked",!1);if(null!=a)for(var d=0;d<a.length;d++)c=a[d],c="[value\x3d'"+c+"']",c=this.Ng.filter(c),
void 0!==c&&0<c.length&&(c.prop("checked")||c._ojRadioCheckbox("option","checked",!0))},fq:function(){var a=[],c=this.Ng.filter(":checked");if(0===c.length)return[];c.each(function(){a.push(f(this).val())});return a},_GetDefaultStyleClass:function(){return"oj-checkboxset"},Ff:function(){return this.qF()},tD:function(){},kx:function(){return!0},Om:function(a){a=!!a;this.Ng.each(function(){f(this).data("oj-_ojRadioCheckbox").Ct(a)});this.Ng._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,
c,d){this._super(a,c,d);"disabled"===a&&this.Om(c)},getNodeBySubId:function(a){var c=this._super(a);return c||(a=a.subId,"oj-checkboxset-inputs"!==a)?c||null:this.Ng.get()},_destroy:function(){var a=this._super();this.Ng&&this.Ng._ojRadioCheckbox("destroy");return a}});var d={np:!1}})()});