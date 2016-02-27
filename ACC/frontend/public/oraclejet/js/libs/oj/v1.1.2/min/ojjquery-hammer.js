/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs"],function(a,f,d){d?(f.fn.wn=function(a){return"instance"==a?this.data("ojHammer"):this.each(function(){var c=f(this);c.data("ojHammer")||c.data("ojHammer",new d.Manager(c[0],a))})},o_("$.fn.ojHammer",f.fn.wn,void 0),d.Manager.prototype.emit=function(a){return function(c,d){a.call(this,c,d);f(this.element).trigger({type:c,gesture:d})}}(d.Manager.prototype.emit)):a.u.warn("Hammer jQuery extension loaded without Hammer.")});