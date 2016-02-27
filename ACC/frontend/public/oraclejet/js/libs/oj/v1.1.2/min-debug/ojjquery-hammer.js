/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs"], function($oj$$35$$, $$$$33$$, $Hammer$$3$$) {
  $Hammer$$3$$ ? ($$$$33$$.fn.$ojHammer$ = function $$$$$33$$$fn$$ojHammer$$($options$$339$$) {
    return "instance" == $options$$339$$ ? this.data("ojHammer") : this.each(function() {
      var $$el$$1$$ = $$$$33$$(this);
      $$el$$1$$.data("ojHammer") || $$el$$1$$.data("ojHammer", new $Hammer$$3$$.Manager($$el$$1$$[0], $options$$339$$));
    });
  }, $goog$exportPath_$$("$.fn.ojHammer", $$$$33$$.fn.$ojHammer$, void 0), $Hammer$$3$$.Manager.prototype.emit = function($originalEmit$$) {
    return function($type$$89$$, $data$$153$$) {
      $originalEmit$$.call(this, $type$$89$$, $data$$153$$);
      $$$$33$$(this.element).trigger({type:$type$$89$$, gesture:$data$$153$$});
    };
  }($Hammer$$3$$.Manager.prototype.emit)) : $oj$$35$$.$Logger$.warn("Hammer jQuery extension loaded without Hammer.");
});
