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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$58$$, $$$$53$$) {
  (function() {
    $oj$$58$$.$__registerWidget$("oj.ojTrain", $$$$53$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      this.$_setupTrain$();
    }, $_setupTrain$:function() {
      var $i$$412_options$$384$$ = this.options, $stepTag_steps$$4$$ = $i$$412_options$$384$$.steps;
      this.$_stepNum$ = $stepTag_steps$$4$$.length;
      this.$_wrapper$ = $$$$53$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$53$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      var $styleClass$$9$$ = this.element.attr("class");
      (this.$_stretch$ = null != $styleClass$$9$$ && 0 <= $styleClass$$9$$.indexOf("oj-train-stretch")) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$53$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$53$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$53$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$412_options$$384$$.selected);
      -1 === this.$_selectedIndex$ && $stepTag_steps$$4$$[0] && $stepTag_steps$$4$$[0].id && (this.$_selectedIndex$ = 0, $i$$412_options$$384$$.selected = $stepTag_steps$$4$$[0].id);
      for ($i$$412_options$$384$$ = 0;$i$$412_options$$384$$ < this.$_stepNum$;$i$$412_options$$384$$++) {
        $stepTag_steps$$4$$ = $$$$53$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$412_options$$384$$][1]}), $stepTag_steps$$4$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$412_options$$384$$), this.$_drawStepFill$($i$$412_options$$384$$), this.$_drawButton$($i$$412_options$$384$$), this.$_drawMessageType$($i$$412_options$$384$$), this.$_stretch$ && $stepTag_steps$$4$$.css("width", 100 / this.$_stepNum$ + "%");
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$385$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$413$$ = 0;$i$$413$$ < this.$_stepNum$;$i$$413$$++) {
        var $step$$4$$ = $options$$385$$.steps[$i$$413$$];
        this.$_stepArray$[$i$$413$$] = Array(5);
        this.$_stepArray$[$i$$413$$][0] = $step$$4$$.label ? $step$$4$$.label : null;
        this.$_stepArray$[$i$$413$$][1] = $step$$4$$.id ? $step$$4$$.id : null;
        this.$_stepArray$[$i$$413$$][2] = $step$$4$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$413$$][3] = $step$$4$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$413$$][4] = $step$$4$$.messageType ? $step$$4$$.messageType : null;
      }
    }, $_drawButton$:function($index$$275$$) {
      var $button$$2$$ = $$$$53$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$53$$("\x3cspan/\x3e"), $self$$185$$ = this, $desc$$1$$ = "";
      if (this.$_stepArray$[$index$$275$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$275$$][3], $disabled$$9$$ = this.$_stepArray$[$index$$275$$][2];
        this.$_selectedIndex$ === $index$$275$$ ? ($button$$2$$.addClass("oj-selected"), $desc$$1$$ = " current ") : $stepBackground_visited$$ && !$disabled$$9$$ ? ($button$$2$$.addClass("oj-visited"), $desc$$1$$ = " visited ") : $stepBackground_visited$$ || $disabled$$9$$ ? $button$$2$$.addClass("oj-disabled") : ($button$$2$$.addClass("oj-default"), $desc$$1$$ = " not visited ");
        this.$_stepArray$[$index$$275$$][2] || this.$_selectedIndex$ === $index$$275$$ || (this._hoverable($button$$2$$), $button$$2$$.on("click" + this.eventNamespace, function() {
          $self$$185$$.$_fireOptionChange$("selected", $self$$185$$.options.selected, this.parentNode.parentNode.id, !0);
          $self$$185$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$275$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$2$$);
        $scrnRead$$.text($desc$$1$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$275$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$276$$) {
      var $icon$$7$$ = $$$$53$$("\x3cdiv/\x3e").addClass("oj-train-icon"), $scrnRead$$1$$ = $$$$53$$("\x3cspan/\x3e"), $desc$$2$$ = "", $self$$186$$ = this;
      if (this.$_stepArray$[$index$$276$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$276$$][4];
        "confirmation" === $messageType$$ ? ($icon$$7$$.addClass("oj-confirmation"), $desc$$2$$ = " Confirmation ") : "info" === $messageType$$ ? ($icon$$7$$.addClass("oj-info"), $desc$$2$$ = " Info ") : "error" === $messageType$$ ? ($icon$$7$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "fatal" === $messageType$$ ? ($icon$$7$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "warning" === $messageType$$ && ($icon$$7$$.addClass("oj-warning"), $desc$$2$$ = " Warning ");
        var $button$$3$$ = this.$_stepList$.children().eq($index$$276$$).find(".oj-train-button");
        1 <= $button$$3$$.children().length && $button$$3$$.children().remove();
        this.$_stepArray$[$index$$276$$][2] || this.$_selectedIndex$ === $index$$276$$ || (this._hoverable($icon$$7$$), $icon$$7$$.on("click" + this.eventNamespace, function() {
          $self$$186$$.$_fireOptionChange$("selected", $self$$186$$.options.selected, this.parentNode.parentNode.parentNode.id, !0);
          $self$$186$$.refresh();
        }));
        null != $messageType$$ && ($scrnRead$$1$$.text($desc$$2$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$276$$).find("a").append($scrnRead$$1$$), $button$$3$$.append($icon$$7$$));
      }
    }, $_fireOptionChange$:function($eventData$$29_key$$161$$, $previousValue$$2_stepIndex$$, $value$$280$$, $originalEvent$$12$$) {
      $eventData$$29_key$$161$$ = {option:$eventData$$29_key$$161$$, fromStep:this.getStep($previousValue$$2_stepIndex$$), toStep:this.getStep($value$$280$$), optionMetadata:{writeback:$originalEvent$$12$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", null, $eventData$$29_key$$161$$) && !1 !== this._trigger("beforeSelect", null, $eventData$$29_key$$161$$) && ($previousValue$$2_stepIndex$$ = this.$_getStepIndex$($previousValue$$2_stepIndex$$), -1 !== $previousValue$$2_stepIndex$$ && (this.options.steps[$previousValue$$2_stepIndex$$].visited = !0), this._trigger("deselect", null, $eventData$$29_key$$161$$), this.option("selected", $value$$280$$, {_context:{originalEvent:$originalEvent$$12$$, $internalSet$:!0}}), 
      this._trigger("select", null, $eventData$$29_key$$161$$));
    }, $_drawStepFill$:function($index$$277_stepLi$$) {
      var $stepFill$$ = $$$$53$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$277_stepLi$$] && ($index$$277_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$277_stepLi$$ = this.$_stepList$.children().eq($index$$277_stepLi$$).children(), $stepFill$$.insertBefore($index$$277_stepLi$$));
    }, $_drawLabel$:function($index$$278$$) {
      var $self$$187$$ = this;
      if (this.$_stepArray$[$index$$278$$]) {
        var $labelWrapper$$ = $$$$53$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$14_stepLi$$1$$ = $$$$53$$("\x3ca\x3e");
        $label$$14_stepLi$$1$$.text(this.$_stepArray$[$index$$278$$][0]);
        var $disabled$$10$$ = this.$_stepArray$[$index$$278$$][2];
        $labelWrapper$$.append($label$$14_stepLi$$1$$);
        $label$$14_stepLi$$1$$.addClass("oj-train-label");
        $index$$278$$ === this.$_selectedIndex$ ? $label$$14_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$278$$][3] && !$disabled$$10$$ ? $label$$14_stepLi$$1$$.addClass("oj-visited") : $disabled$$10$$ && $label$$14_stepLi$$1$$.addClass("oj-disabled");
        $disabled$$10$$ || ($label$$14_stepLi$$1$$.attr("href", "#"), this._hoverable($label$$14_stepLi$$1$$), $label$$14_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$553$$) {
          if ($event$$553$$.keyCode === $$$$53$$.ui.keyCode.ENTER || "click" === $event$$553$$.type) {
            $event$$553$$.preventDefault(), $self$$187$$.$_fireOptionChange$("selected", $self$$187$$.options.selected, this.parentNode.parentNode.id, !0), $self$$187$$.refresh(), $event$$553$$.keyCode === $$$$53$$.ui.keyCode.ENTER && $self$$187$$.$_setFocus$(this.parentNode.parentNode.id);
          }
        }));
        $label$$14_stepLi$$1$$ = this.$_stepList$.children().eq($index$$278$$).children();
        1 <= $label$$14_stepLi$$1$$.length && $label$$14_stepLi$$1$$[0].remove();
        this.$_stepList$.children().eq($index$$278$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$57$$) {
      for (var $i$$414$$ = 0;$i$$414$$ < this.$_stepNum$;$i$$414$$++) {
        if (this.$_stepArray$[$i$$414$$] && this.$_stepArray$[$i$$414$$][1] === $id$$57$$) {
          return $i$$414$$;
        }
      }
      return-1;
    }, getStep:function($id$$58$$) {
      for (var $i$$415$$ = 0;$i$$415$$ < this.$_stepNum$;$i$$415$$++) {
        if (this.$_stepArray$[$i$$415$$] && this.$_stepArray$[$i$$415$$][1] === $id$$58$$) {
          return jQuery.extend({}, this.options.steps[$i$$415$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$416$$ = this.$_getStepIndex$(this.options.selected);$i$$416$$ < this.$_stepNum$;$i$$416$$++) {
        if ($i$$416$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$416$$ + 1] && !this.$_stepArray$[$i$$416$$ + 1][2]) {
          return this.$_stepArray$[$i$$416$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$417$$ = this.$_getStepIndex$(this.options.selected);0 <= $i$$417$$;$i$$417$$--) {
        if (this.$_stepArray$[$i$$417$$ - 1] && !this.$_stepArray$[$i$$417$$ - 1][2]) {
          return this.$_stepArray$[$i$$417$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
        this.refresh();
      }
    }, _setOptions:function($options$$386$$) {
      this._super($options$$386$$);
      this.refresh();
    }, refresh:function() {
      this._super();
      this._destroy();
      this.$_setupTrain$();
    }, _destroy:function() {
      this.$_stepList$.children().each(function() {
        $$$$53$$(this).remove();
      });
      this.element.removeClass("oj-train");
      this.element.find(".oj-train-wrapper").remove();
      this.element.find(".oj-train-connector-wrapper").remove();
      this.element.find(".oj-train-step-list").remove();
      this.element.find(".oj-train-step-list").remove();
      this._super();
    }, $_setFocus$:function($id$$59_index$$279$$) {
      $id$$59_index$$279$$ = this.$_getStepIndex$($id$$59_index$$279$$);
      for (var $i$$418$$ = 0;$i$$418$$ < this.$_stepNum$;$i$$418$$++) {
        if (this.$_stepArray$[($id$$59_index$$279$$ + $i$$418$$ + 1) % this.$_stepNum$] && !this.$_stepArray$[($id$$59_index$$279$$ + $i$$418$$ + 1) % this.$_stepNum$][2]) {
          this.$_stepList$.children().eq(($id$$59_index$$279$$ + $i$$418$$ + 1) % this.$_stepNum$).find(".oj-train-label").focus();
          break;
        }
      }
    }, getNodeBySubId:function($locator$$60$$) {
      if (null === $locator$$60$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$280$$ = $locator$$60$$.index;
      if ("number" !== typeof $index$$280$$ || 0 > $index$$280$$ || $index$$280$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$60$$.subId) {
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$280$$).find(".oj-train-button")[0];
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$280$$).find(".oj-train-button-connector")[0];
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$280$$).find(".oj-train-icon")[0];
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$280$$).find(".oj-train-label")[0];
      }
      return null;
    }});
  })();
});
