/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore","jquery"],function(a,f){a.be=function(a){this._init(a)};a.be.prototype._init=function(a){this.oc=a;this.NA=this.Nv=!1;this.QA=f.proxy(this.oea,this);this.Lv=f.proxy(this.mea,this);this.DI=f.proxy(this.nea,this);this.oc.on({touchstart:this.QA,touchend:this.Lv,touchmove:this.DI,touchcancel:this.Lv})};a.be.prototype._destroy=function(){this.oc&&this.QA&&(this.oc.off({touchstart:this.QA,touchmove:this.DI,touchend:this.Lv,touchcancel:this.Lv}),this.DI=this.Lv=this.QA=void 0)};a.be.prototype.gp=
function(a,b){if(!(1<a.originalEvent.touches.length)){"touchstart"!=a.type&&"touchend"!=a.type&&a.preventDefault();var c=a.originalEvent.changedTouches[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null);c.target.dispatchEvent(e)}};a.be.prototype.oea=function(a){this.Nv||(this.Nv=!0,this.NA=!1,this.gp(a,"mouseover"),this.gp(a,"mousemove"),this.gp(a,"mousedown"))};a.be.prototype.nea=function(a){this.Nv&&(this.NA=!0,this.gp(a,
"mousemove"))};a.be.prototype.mea=function(a){this.Nv&&(this.gp(a,"mouseup"),this.gp(a,"mouseout"),this.NA||"touchend"!=a.type||this.gp(a,"click"),this.Nv=!1)};a.be.Rx="_ojTouchProxy";a.be.pX=function(d){d=f(d);var b=d.data(a.be.Rx);b||(b=new a.be(d),d.data(a.be.Rx,b));return b};a.be.j_=function(d){d=f(d);var b=d.data(a.be.Rx);b&&(b._destroy(),d.removeData(a.be.Rx))}});