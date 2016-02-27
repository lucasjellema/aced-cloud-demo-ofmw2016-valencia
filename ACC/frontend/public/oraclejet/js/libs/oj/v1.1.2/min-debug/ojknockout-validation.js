/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojknockout", "ojs/ojmessaging"], function($oj$$8$$, $$$$8$$, $ko$$2$$) {
  $oj$$8$$.$InvalidComponentTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$() {
    this.Init();
  };
  $goog$exportPath_$$("InvalidComponentTracker", $oj$$8$$.$InvalidComponentTracker$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$InvalidComponentTracker$, $oj$$8$$.$Object$, "oj.InvalidComponentTracker");
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$ = "messagesShown";
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$ = "messagesHidden";
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_DISABLED$ = "disabled";
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_READONLY$ = "readOnly";
  $oj$$8$$.$InvalidComponentTracker$.prototype.Init = function $$oj$$8$$$$InvalidComponentTracker$$$Init$() {
    $oj$$8$$.$InvalidComponentTracker$.$superclass$.Init.call(this);
    this.$_tracked$ = [];
    this.$_invalid$ = [];
    this.$_invalidHidden$ = [];
    this.invalidHidden = this.invalidShown = !1;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$ = function $$oj$$8$$$$InvalidComponentTracker$$$$focusOnFirstInvalid$$() {
    var $firstInvalid$$ = null, $self$$43$$ = this, $updateCounter$$ = this.$_updateCounter$;
    this.invalidShown && ($firstInvalid$$ = this.$_getFirstInvalidComponent$());
    setTimeout(function() {
      ($firstInvalid$$ = $updateCounter$$ === $self$$43$$.$_updateCounter$ ? $firstInvalid$$ || $self$$43$$.$_getFirstInvalidComponent$() : $self$$43$$.$_getFirstInvalidComponent$()) && $firstInvalid$$.call($firstInvalid$$, "Focus");
    }, 1);
    return $firstInvalid$$ ? !0 : !1;
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.focusOnFirstInvalid", {$focusOnFirstInvalid$:$oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$});
  $oj$$8$$.$InvalidComponentTracker$.prototype.showMessages = function $$oj$$8$$$$InvalidComponentTracker$$$showMessages$() {
    var $tr$$, $len$$13$$, $index$$94$$;
    if (this.invalidHidden) {
      for ($len$$13$$ = this.$_invalidHidden$.length, $index$$94$$ = 0;$index$$94$$ < $len$$13$$;$index$$94$$++) {
        this.$_invalidHidden$[$index$$94$$] && ($tr$$ = this.$_tracked$[$index$$94$$].call($tr$$, "showMessages"));
      }
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.showMessages", {showMessages:$oj$$8$$.$InvalidComponentTracker$.prototype.showMessages});
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_getFirstInvalidComponent$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_getFirstInvalidComponent$$() {
    for (var $firstInvalid$$1$$, $idx$$10$$ = 0, $len$$14$$ = this.$_invalid$.length, $idx$$10$$ = 0;$idx$$10$$ < $len$$14$$;$idx$$10$$++) {
      if ($firstInvalid$$1$$ = this.$_invalid$[$idx$$10$$]) {
        return this.$_tracked$[$idx$$10$$];
      }
    }
    return null;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_remove$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_remove$$($component$$8$$) {
    var $trackedIndex$$ = -1, $mutated$$1$$ = !1;
    $$$$8$$.each(this.$_tracked$, function($index$$95$$, $item$$3$$) {
      0 > $trackedIndex$$ && $item$$3$$ === $component$$8$$ && ($trackedIndex$$ = $index$$95$$);
    });
    0 <= $trackedIndex$$ && (this.$_tracked$.splice($trackedIndex$$, 1), this.$_invalid$.splice($trackedIndex$$, 1), this.$_invalidHidden$.splice($trackedIndex$$, 1), this.$_updateInvalidProperties$(), $mutated$$1$$ = !0);
    return $mutated$$1$$;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_update$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_update$$($component$$9$$, $option$$22$$, $isDisabled$$1_value$$166$$) {
    var $compValid_isReadOnly$$1$$ = $component$$9$$.call($component$$9$$, "isValid"), $trackedIndex$$1$$ = -1, $mutated$$2$$ = !0, $result$$17$$;
    $$$$8$$.each(this.$_tracked$, function($index$$96$$, $item$$5$$) {
      0 > $trackedIndex$$1$$ && $item$$5$$ === $component$$9$$ && ($trackedIndex$$1$$ = $index$$96$$);
    });
    switch($option$$22$$) {
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$:
      ;
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$:
        $result$$17$$ = !1;
        $isDisabled$$1_value$$166$$ && (0 > $trackedIndex$$1$$ && ($trackedIndex$$1$$ = this.$_tracked$.push($component$$9$$) - 1, this.$_initializeInvalidTrackers$($trackedIndex$$1$$, $result$$17$$)), !$compValid_isReadOnly$$1$$ && $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$($isDisabled$$1_value$$166$$) && ($result$$17$$ = !0, $option$$22$$ === $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$ && ($isDisabled$$1_value$$166$$ = $component$$9$$.call($component$$9$$, "option", 
        $oj$$8$$.$InvalidComponentTracker$.$_OPTION_DISABLED$), $compValid_isReadOnly$$1$$ = $component$$9$$.call($component$$9$$, "option", $oj$$8$$.$InvalidComponentTracker$.$_OPTION_READONLY$), $result$$17$$ = $isDisabled$$1_value$$166$$ || $compValid_isReadOnly$$1$$ ? !1 : !0)), $mutated$$2$$ = this.$_updateInvalidTracker$($option$$22$$, $trackedIndex$$1$$ || 0, $result$$17$$), this.$_updateInvalidProperties$(), $mutated$$2$$ && (void 0 === this.$_updateCounter$ && (this.$_updateCounter$ = 0), 
        this.$_updateCounter$++));
        break;
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_DISABLED$:
      ;
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_READONLY$:
        $mutated$$2$$ = !1, $isDisabled$$1_value$$166$$ && ($mutated$$2$$ = this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$, $trackedIndex$$1$$ || 0, !1), $mutated$$2$$ = this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$, $trackedIndex$$1$$ || 0, !1) || $mutated$$2$$, this.$_updateInvalidProperties$());
    }
    return $mutated$$2$$;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_initializeInvalidTrackers$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_initializeInvalidTrackers$$($trackedIndex$$2$$, $result$$18$$) {
    void 0 === this.$_invalid$[$trackedIndex$$2$$] && this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$, $trackedIndex$$2$$, $result$$18$$);
    void 0 === this.$_invalidHidden$[$trackedIndex$$2$$] && this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$, $trackedIndex$$2$$, $result$$18$$);
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_updateInvalidProperties$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_updateInvalidProperties$$() {
    this.invalidShown = 0 <= this.$_invalid$.indexOf(!0);
    this.invalidHidden = 0 <= this.$_invalidHidden$.indexOf(!0);
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_updateInvalidTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_updateInvalidTracker$$($arr$$20_option$$23$$, $trackedIndex$$3$$, $value$$167$$) {
    var $mutated$$3$$ = !1;
    $arr$$20_option$$23$$ = $arr$$20_option$$23$$ === $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$ ? this.$_invalid$ : $arr$$20_option$$23$$ === $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$ ? this.$_invalidHidden$ : [];
    0 <= $trackedIndex$$3$$ && void 0 !== $arr$$20_option$$23$$[$trackedIndex$$3$$] ? ($mutated$$3$$ = $arr$$20_option$$23$$[$trackedIndex$$3$$] !== $value$$167$$ ? !0 : !1) && $arr$$20_option$$23$$.splice($trackedIndex$$3$$, 1, $value$$167$$) : ($arr$$20_option$$23$$.push($value$$167$$), $mutated$$3$$ = !0);
    return $mutated$$3$$;
  };
  $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_hasInvalidMessages$$($messages$$13$$) {
    return!$oj$$8$$.$Message$.isValid($messages$$13$$);
  };
  $oj$$8$$.$ValueBinding$ = function $$oj$$8$$$$ValueBinding$$() {
  };
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$ = "ojoptionchange";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ = "messagesShown";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$ = "messagesHidden";
  $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$ = "disabled";
  $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$ = "readOnly";
  $oj$$8$$.$ValueBinding$.$_update$ = function $$oj$$8$$$$ValueBinding$$$_update$$($name$$99$$, $value$$168$$, $element$$56_updateProps$$1$$, $component$$10$$, $ictObs_valueAccessor$$15$$) {
    $element$$56_updateProps$$1$$ = {};
    $ictObs_valueAccessor$$15$$ = $ictObs_valueAccessor$$15$$.call()[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$];
    var $icTracker$$;
    if ($name$$99$$ === $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$ || $name$$99$$ === $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$) {
      return $icTracker$$ = $ictObs_valueAccessor$$15$$ && $ictObs_valueAccessor$$15$$.peek() || null, null !== $icTracker$$ && $ko$$2$$.isWriteableObservable($ictObs_valueAccessor$$15$$) && $icTracker$$.$_update$.call($icTracker$$, $component$$10$$, $name$$99$$, $value$$168$$) && $ictObs_valueAccessor$$15$$.valueHasMutated(), $element$$56_updateProps$$1$$[$name$$99$$] = $value$$168$$, $element$$56_updateProps$$1$$;
    }
  };
  $oj$$8$$.$ValueBinding$._init = function $$oj$$8$$$$ValueBinding$$_init$($name$$100$$, $value$$169$$) {
    var $initProps$$1$$ = {};
    $initProps$$1$$[$name$$100$$] = $value$$169$$;
    return $initProps$$1$$;
  };
  $oj$$8$$.$ValueBinding$.$_afterCreate$ = function $$oj$$8$$$$ValueBinding$$$_afterCreate$$($property$$19$$, $element$$57$$, $component$$11$$, $optionsSet_valueAccessor$$16$$) {
    $optionsSet_valueAccessor$$16$$ = $optionsSet_valueAccessor$$16$$.call();
    var $isICTOptionSet$$;
    $property$$19$$ === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ && ($isICTOptionSet$$ = $optionsSet_valueAccessor$$16$$[$property$$19$$] ? !0 : !1) && $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($property$$19$$, $optionsSet_valueAccessor$$16$$, $element$$57$$, $component$$11$$);
    return{};
  };
  $oj$$8$$.$ValueBinding$.$_beforeDestroy$ = function $$oj$$8$$$$ValueBinding$$$_beforeDestroy$$($icTracker$$1_property$$20$$, $element$$58_jelem$$8$$, $component$$12$$, $ictObs$$1_valueAccessor$$17$$) {
    $element$$58_jelem$$8$$ = $$$$8$$($element$$58_jelem$$8$$);
    $ictObs$$1_valueAccessor$$17$$ = $ictObs$$1_valueAccessor$$17$$.call()[$icTracker$$1_property$$20$$];
    $icTracker$$1_property$$20$$ === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ && $element$$58_jelem$$8$$ && ($element$$58_jelem$$8$$.off($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$), $ictObs$$1_valueAccessor$$17$$ && $ko$$2$$.isWriteableObservable($ictObs$$1_valueAccessor$$17$$) && ($icTracker$$1_property$$20$$ = $ictObs$$1_valueAccessor$$17$$.peek(), $icTracker$$1_property$$20$$.$_remove$.call($icTracker$$1_property$$20$$, 
    $component$$12$$) && $ictObs$$1_valueAccessor$$17$$.valueHasMutated()));
  };
  $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$ = function $$oj$$8$$$$ValueBinding$$$_updateInvalidComponentTracker$$($event$$66$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
    var $ictObs$$2$$ = $event$$66$$.data.$tracker$, $icTracker$$2$$, $component$$13$$ = $event$$66$$.data.$component$, $option$$24$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.option, $msgs$$6$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.value;
    ($option$$24$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ || $option$$24$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$) && $ictObs$$2$$ && $ko$$2$$.isWriteableObservable($ictObs$$2$$) && ($icTracker$$2$$ = $ictObs$$2$$.peek()) && $icTracker$$2$$.$_update$.call($icTracker$$2$$, $component$$13$$, $option$$24$$, $msgs$$6$$) && $ictObs$$2$$.valueHasMutated();
  };
  $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$8$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($ictObs$$3_property$$21$$, $messagesShown_options$$216$$, $element$$59_jElem$$, $component$$14_eventData$$3$$) {
    $ictObs$$3_property$$21$$ = $messagesShown_options$$216$$[$ictObs$$3_property$$21$$];
    var $messagesHidden$$, $icTracker$$3$$;
    $element$$59_jElem$$ = $$$$8$$($element$$59_jElem$$);
    if ($ko$$2$$.isObservable($ictObs$$3_property$$21$$)) {
      $icTracker$$3$$ = $ictObs$$3_property$$21$$.peek(), null == $icTracker$$3$$ && ($icTracker$$3$$ = new $oj$$8$$.$InvalidComponentTracker$, $ictObs$$3_property$$21$$($icTracker$$3$$));
    } else {
      throw Error("Binding attribute " + $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ + " should be bound to a ko observable.");
    }
    null !== $icTracker$$3$$ && ($ko$$2$$.isWriteableObservable($ictObs$$3_property$$21$$) && ($messagesShown_options$$216$$ = $component$$14_eventData$$3$$.call($component$$14_eventData$$3$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$), $messagesHidden$$ = $component$$14_eventData$$3$$.call($component$$14_eventData$$3$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$), $icTracker$$3$$.$_update$.call($icTracker$$3$$, $component$$14_eventData$$3$$, $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$, 
    $messagesShown_options$$216$$), $icTracker$$3$$.$_update$.call($icTracker$$3$$, $component$$14_eventData$$3$$, $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$, $messagesHidden$$), $ictObs$$3_property$$21$$.valueHasMutated()), $component$$14_eventData$$3$$ = {$tracker$:$ictObs$$3_property$$21$$, $component$:$component$$14_eventData$$3$$}, $element$$59_jElem$$.on($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $component$$14_eventData$$3$$, $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$));
  };
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"editableValue", attributes:[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$, $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$], init:$oj$$8$$.$ValueBinding$._init, update:$oj$$8$$.$ValueBinding$.$_update$, afterCreate:$oj$$8$$.$ValueBinding$.$_afterCreate$, beforeDestroy:$oj$$8$$.$ValueBinding$.$_beforeDestroy$});
});
