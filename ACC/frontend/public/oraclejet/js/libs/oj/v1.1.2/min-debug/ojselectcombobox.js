/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$12$$, $$$$12$$) {
  var $_ComboUtils$$ = {$KEY$:{TAB:9, ENTER:13, $ESC$:27, SPACE:32, LEFT:37, UP:38, RIGHT:39, DOWN:40, $SHIFT$:16, $CTRL$:17, $ALT$:18, PAGE_UP:33, PAGE_DOWN:34, HOME:36, END:35, $BACKSPACE$:8, $DELETE$:46, $isControl$:function($e$$56$$) {
    switch($e$$56$$.which) {
      case $_ComboUtils$$.$KEY$.$SHIFT$:
      ;
      case $_ComboUtils$$.$KEY$.$CTRL$:
      ;
      case $_ComboUtils$$.$KEY$.$ALT$:
        return!0;
    }
    return $e$$56$$.metaKey || $e$$56$$.ctrlKey ? !0 : !1;
  }, $isFunctionKey$:function($k$$8$$) {
    $k$$8$$ = $k$$8$$.which ? $k$$8$$.which : $k$$8$$;
    return 112 <= $k$$8$$ && 123 >= $k$$8$$;
  }}, $lastMousePosition$:{x:0, y:0}, $nextUid$:function() {
    var $counter$$ = 1;
    return function() {
      return $counter$$++;
    };
  }(), $scrollBarDimensions$:null, $each2$:function($list$$, $c$$34$$) {
    for (var $j$$24$$ = $$$$12$$.isFunction($list$$[0]) ? $$$$12$$($list$$[0]()) : $$$$12$$($list$$[0]), $i$$179$$ = -1, $l$$5$$ = $list$$.length;++$i$$179$$ < $l$$5$$ && ($j$$24$$.context = $j$$24$$[0] = $$$$12$$.isFunction($list$$[0]) ? $list$$[$i$$179$$]() : $list$$[$i$$179$$]) && !1 !== $c$$34$$.call($j$$24$$[0], $i$$179$$, $j$$24$$);) {
    }
    return $list$$;
  }, $measureScrollbar$:function() {
    var $$template$$ = $$$$12$$("\x3cdiv class\x3d'oj-listbox-measure-scrollbar'\x3e\x3c/div\x3e");
    $$template$$.appendTo("body");
    var $dim$$ = {width:$$template$$.width() - $$template$$[0].clientWidth, height:$$template$$.height() - $$template$$[0].clientHeight};
    $$template$$.remove();
    return $dim$$;
  }, $splitVal$:function($string$$3$$, $separator$$) {
    var $val$$29$$, $i$$180$$, $l$$6$$;
    if (null === $string$$3$$ || 1 > $string$$3$$.length) {
      return[];
    }
    $val$$29$$ = $string$$3$$.split($separator$$);
    $i$$180$$ = 0;
    for ($l$$6$$ = $val$$29$$.length;$i$$180$$ < $l$$6$$;$i$$180$$ += 1) {
      $val$$29$$[$i$$180$$] = $$$$12$$.trim($val$$29$$[$i$$180$$]);
    }
    return $val$$29$$;
  }, $getSideBorderPadding$:function($element$$67$$) {
    return $element$$67$$.outerWidth(!1) - $element$$67$$.width();
  }, $installKeyUpChangeEvent$:function($element$$68$$) {
    $element$$68$$.on("keydown", function() {
      void 0 === $$$$12$$.data($element$$68$$, "keyup-change-value") && $$$$12$$.data($element$$68$$, "keyup-change-value", $element$$68$$.val());
    });
    $element$$68$$.on("keyup", function($e$$57_val$$30$$) {
      $e$$57_val$$30$$.which === $_ComboUtils$$.$KEY$.ENTER ? $e$$57_val$$30$$.stopPropagation() : ($e$$57_val$$30$$ = $$$$12$$.data($element$$68$$, "keyup-change-value"), void 0 !== $e$$57_val$$30$$ && $element$$68$$.val() !== $e$$57_val$$30$$ && ($$$$12$$.removeData($element$$68$$, "keyup-change-value"), $element$$68$$.trigger("keyup-change")));
    });
  }, $installFilteredMouseMove$:function($element$$69$$) {
    $element$$69$$.on("mousemove", function($e$$58$$) {
      var $lastpos$$ = $_ComboUtils$$.$lastMousePosition$;
      if (void 0 === $lastpos$$ || $lastpos$$.x !== $e$$58$$.pageX || $lastpos$$.y !== $e$$58$$.pageY) {
        $$$$12$$($e$$58$$.target).trigger("mousemove-filtered", $e$$58$$), $_ComboUtils$$.$lastMousePosition$.x = $e$$58$$.pageX, $_ComboUtils$$.$lastMousePosition$.y = $e$$58$$.pageY;
      }
    });
  }, $thunk$:function($formula$$) {
    var $evaluated$$ = !1, $value$$175$$;
    return function() {
      !1 === $evaluated$$ && ($value$$175$$ = $formula$$(), $evaluated$$ = !0);
      return $value$$175$$;
    };
  }, $_focus$:function($$el$$) {
    $$el$$[0] !== document.activeElement && window.setTimeout(function() {
      var $el$$3_range$$10$$ = $$el$$[0], $pos$$6$$ = $$el$$.val().length;
      $$el$$.focus();
      $$el$$.is(":visible") && $el$$3_range$$10$$ === document.activeElement && ($el$$3_range$$10$$.setSelectionRange ? $el$$3_range$$10$$.setSelectionRange($pos$$6$$, $pos$$6$$) : $el$$3_range$$10$$.createTextRange && ($el$$3_range$$10$$ = $el$$3_range$$10$$.createTextRange(), $el$$3_range$$10$$.collapse(!1), $el$$3_range$$10$$.select()));
    }, 0);
  }, $getCursorInfo$:function($el$$4$$) {
    $el$$4$$ = $$$$12$$($el$$4$$)[0];
    var $offset$$18_sel$$ = 0, $length$$13$$ = 0;
    "selectionStart" in $el$$4$$ ? ($offset$$18_sel$$ = $el$$4$$.selectionStart, $length$$13$$ = $el$$4$$.selectionEnd - $offset$$18_sel$$) : "selection" in document && ($el$$4$$.focus(), $offset$$18_sel$$ = document.selection.createRange(), $length$$13$$ = document.selection.createRange().text.length, $offset$$18_sel$$.moveStart("character", -$el$$4$$.value.length), $offset$$18_sel$$ = $offset$$18_sel$$.text.length - $length$$13$$);
    return{offset:$offset$$18_sel$$, length:$length$$13$$};
  }, $killEvent$:function($event$$125$$) {
    $event$$125$$.preventDefault();
    $event$$125$$.stopPropagation();
  }, $killEventImmediately$:function($event$$126$$) {
    $event$$126$$.preventDefault();
    $event$$126$$.stopImmediatePropagation();
  }, $defaultEscapeMarkup$:function($markup$$) {
    var $replace_map$$ = {"\\":"\x26#92;", "\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#39;"};
    return String($markup$$).replace(/[&<>"'\\]/g, function($match$$15$$) {
      return $replace_map$$[$match$$15$$];
    });
  }, $local$:function($options$$266$$, $optKeys$$) {
    function $text$$9$$($item$$6$$) {
      return "" + $item$$6$$.label;
    }
    var $data$$90$$ = $options$$266$$, $dataText$$, $tmp$$1$$;
    $$$$12$$.isArray($data$$90$$) && ($tmp$$1$$ = $data$$90$$, $data$$90$$ = {$results$:$tmp$$1$$});
    !1 === $$$$12$$.isFunction($data$$90$$) && ($tmp$$1$$ = $data$$90$$, $data$$90$$ = function $$data$$90$$$() {
      return $tmp$$1$$;
    });
    var $dataItem$$ = $data$$90$$();
    $dataItem$$ && $dataItem$$.text && ($text$$9$$ = $dataItem$$.text, $$$$12$$.isFunction($text$$9$$) || ($dataText$$ = $dataItem$$.text, $text$$9$$ = function $$text$$9$$$($item$$7$$) {
      return $item$$7$$[$dataText$$];
    }));
    return function($query$$6$$) {
      var $t$$ = $query$$6$$.$term$, $filtered$$ = {$results$:[]}, $process$$;
      "" !== $t$$ || $optKeys$$ ? ($process$$ = function $$process$$$($datum$$, $collection$$32$$, $keys$$15$$) {
        var $group$$, $attr$$15$$;
        $datum$$ = $datum$$[0];
        !$datum$$.label && $keys$$15$$ && $keys$$15$$.label && ($datum$$.label = $datum$$[$keys$$15$$.label], delete $datum$$[$keys$$15$$.label]);
        !$datum$$.value && $keys$$15$$ && $keys$$15$$.value && ($datum$$.value = $datum$$[$keys$$15$$.value], delete $datum$$[$keys$$15$$.value]);
        !$datum$$.children && $keys$$15$$ && $keys$$15$$.children && ($datum$$.children = $datum$$[$keys$$15$$.children], delete $datum$$[$keys$$15$$.children]);
        if ($datum$$.children) {
          $group$$ = {};
          for ($attr$$15$$ in $datum$$) {
            $datum$$.hasOwnProperty($attr$$15$$) && ($group$$[$attr$$15$$] = $datum$$[$attr$$15$$]);
          }
          $group$$.children = [];
          $_ComboUtils$$.$each2$($$$$12$$($datum$$.children), function($i$$181$$, $childDatum$$) {
            $process$$($childDatum$$, $group$$.children, $keys$$15$$ && $keys$$15$$.childKeys ? $keys$$15$$.childKeys : null);
          });
          ($group$$.children.length || $query$$6$$.$matcher$($t$$, $text$$9$$($group$$), $datum$$)) && $collection$$32$$.push($group$$);
        } else {
          $query$$6$$.$matcher$($t$$, $text$$9$$($datum$$), $datum$$) && $collection$$32$$.push($datum$$);
        }
      }, $data$$90$$() && $_ComboUtils$$.$each2$($$$$12$$($data$$90$$().$results$), function($i$$182$$, $datum$$1$$) {
        $process$$($datum$$1$$, $filtered$$.$results$, $optKeys$$);
      }), $query$$6$$.$callback$($filtered$$)) : $query$$6$$.$callback$($data$$90$$());
    };
  }, $checkFormatter$:function($ojContext$$, $formatter$$, $formatterName$$) {
    if ($$$$12$$.isFunction($formatter$$)) {
      return!0;
    }
    if (!$formatter$$) {
      return!1;
    }
    throw Error($formatterName$$ + " must be a function or a false value");
  }, $clazz$:function($SuperClass$$, $methods$$1$$) {
    function $constructor$$1$$() {
    }
    $oj$$12$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
    $constructor$$1$$.prototype = $$$$12$$.extend($constructor$$1$$.prototype, $methods$$1$$);
    return $constructor$$1$$;
  }}, $_AbstractOjChoice$$ = $_ComboUtils$$.$clazz$(Object, {$_bind$:function($func$$7$$) {
    var $self$$72$$ = this;
    return function() {
      $func$$7$$.apply($self$$72$$, arguments);
    };
  }, _init:function($opts$$13$$) {
    var $search$$1$$, $className$$6$$ = this.$_classNm$, $disabled$$2_dropdownList_elemName_readonly$$ = this.$_elemNm$;
    this.$ojContext$ = $opts$$13$$.$ojContext$;
    this.$opts$ = $opts$$13$$ = this.$_prepareOpts$($opts$$13$$);
    this.id = $opts$$13$$.id;
    void 0 !== $opts$$13$$.element.data($disabled$$2_dropdownList_elemName_readonly$$) && null !== $opts$$13$$.element.data($disabled$$2_dropdownList_elemName_readonly$$) && $opts$$13$$.element.data($disabled$$2_dropdownList_elemName_readonly$$)._destroy();
    this.$container$ = this.$_createContainer$();
    var $rootAttr$$ = this.$opts$.rootAttributes;
    this.$containerId$ = $rootAttr$$ && $rootAttr$$.id ? $rootAttr$$.id : "ojChoiceId_" + ($opts$$13$$.element.attr("id") || "autogen" + $_ComboUtils$$.$nextUid$());
    this.$containerId$.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
    this.$container$.attr("id", this.$containerId$);
    this.body = $_ComboUtils$$.$thunk$(function() {
      return $opts$$13$$.element.closest("body");
    });
    this.$container$.attr("style", $opts$$13$$.element.attr("style"));
    this.$elementTabIndex$ = this.$opts$.element.attr("tabindex");
    this.$opts$.element.data($disabled$$2_dropdownList_elemName_readonly$$, this).attr("tabindex", "-1").before(this.$container$);
    this.$container$.data($disabled$$2_dropdownList_elemName_readonly$$, this);
    this.$dropdown$ = this.$container$.find(".oj-listbox-drop");
    this.$dropdown$.data("ojlistbox", this);
    this.$dropdown$.on("click", $_ComboUtils$$.$killEvent$);
    this.$dropdown$.attr("data-oj-containerid", this.$containerId$);
    this.$results$ = this.$container$.find(".oj-listbox-results");
    $opts$$13$$.list && $$$$12$$("#" + $opts$$13$$.list).is("ul") && ($disabled$$2_dropdownList_elemName_readonly$$ = $$$$12$$("#" + $opts$$13$$.list), this.$dropdownListParent$ = $disabled$$2_dropdownList_elemName_readonly$$.parent(), $disabled$$2_dropdownList_elemName_readonly$$.addClass("oj-listbox-results").attr("role", "listbox"), this.$results$.replaceWith($disabled$$2_dropdownList_elemName_readonly$$), this.$results$ = this.$container$.find(".oj-listbox-results"), this.$results$.css("display", 
    ""));
    this.search = $search$$1$$ = "oj-select" == $className$$6$$ ? this.$container$.find("input.oj-listbox-input") : this.$container$.find("input." + $className$$6$$ + "-input");
    this.$resultsPage$ = this.$queryCount$ = 0;
    this.context = null;
    this.$_initContainer$();
    this.$container$.on("click", $_ComboUtils$$.$killEvent$);
    $_ComboUtils$$.$installFilteredMouseMove$(this.$results$);
    this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this.$_bind$(this.$_highlightUnderEvent$));
    $$$$12$$(this.$container$).on("change", "." + $className$$6$$ + "-input", function($e$$59$$) {
      $e$$59$$.stopPropagation();
    });
    $$$$12$$(this.$dropdown$).on("change", "." + $className$$6$$ + "-input", function($e$$60$$) {
      $e$$60$$.stopPropagation();
    });
    $_ComboUtils$$.$installKeyUpChangeEvent$($search$$1$$);
    $search$$1$$.on("keyup-change input paste", this.$_bind$(this.$_updateResults$));
    $search$$1$$.on("focus", function() {
      $search$$1$$.addClass($className$$6$$ + "-focused");
    });
    $search$$1$$.on("blur", function() {
      $search$$1$$.removeClass($className$$6$$ + "-focused");
    });
    this.$dropdown$.on("mouseup", ".oj-listbox-results", this.$_bind$(function($e$$61$$) {
      0 < $$$$12$$($e$$61$$.target).closest(".oj-listbox-result-selectable").length && (this.$_highlightUnderEvent$($e$$61$$), this.$_selectHighlighted$(null, $e$$61$$));
    }));
    this.$dropdown$.on("click mouseup mousedown", function($e$$62$$) {
      $e$$62$$.stopPropagation();
    });
    $$$$12$$.isFunction(this.$opts$.$initSelection$) && this.$_initSelection$();
    $disabled$$2_dropdownList_elemName_readonly$$ = $opts$$13$$.element.prop("disabled");
    void 0 === $disabled$$2_dropdownList_elemName_readonly$$ && ($disabled$$2_dropdownList_elemName_readonly$$ = !1);
    this.$_enable$(!$disabled$$2_dropdownList_elemName_readonly$$);
    $disabled$$2_dropdownList_elemName_readonly$$ = $opts$$13$$.element.prop("readonly");
    void 0 === $disabled$$2_dropdownList_elemName_readonly$$ && ($disabled$$2_dropdownList_elemName_readonly$$ = !1);
    this.$_readonly$($disabled$$2_dropdownList_elemName_readonly$$);
    $_ComboUtils$$.$scrollBarDimensions$ = $_ComboUtils$$.$scrollBarDimensions$ || $_ComboUtils$$.$measureScrollbar$();
    this.autofocus = $opts$$13$$.element.prop("autofocus");
    $opts$$13$$.element.prop("autofocus", !1);
    this.autofocus && this.$_focus$();
  }, $_clickAwayHandler$:function($event$$127$$) {
    var $dropdown_self$$73$$ = this.$dropdown$;
    !$$$$12$$($event$$127$$.target).closest($dropdown_self$$73$$).length && !$$$$12$$($event$$127$$.target).closest("#" + $dropdown_self$$73$$.attr("data-oj-containerid")).length && 0 < $dropdown_self$$73$$.length && ($dropdown_self$$73$$ = $dropdown_self$$73$$.data("ojlistbox"), $dropdown_self$$73$$.close($event$$127$$));
  }, $_surrogateRemoveHandler$:function() {
    this.$dropdown$ && this.$dropdown$.remove();
  }, _destroy:function() {
    var $closeDelayTimer_element$$70$$ = this.$_closeDelayTimer$;
    isNaN($closeDelayTimer_element$$70$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer_element$$70$$));
    var $closeDelayTimer_element$$70$$ = this.$opts$.element, $ojcomp$$ = $closeDelayTimer_element$$70$$.data(this.$_elemNm$);
    this.close();
    this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
    this.$opts$.list && this.$results$ && (this.$_cleanupList$(this.$results$), this.$dropdownListParent$ && this.$dropdownListParent$.append(this.$results$));
    void 0 !== $ojcomp$$ && ($ojcomp$$.$container$.remove(), $ojcomp$$.$dropdown$.remove(), $closeDelayTimer_element$$70$$.removeAttr("aria-hidden").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $closeDelayTimer_element$$70$$.attr({$tabindex$:this.$elementTabIndex$}) : $closeDelayTimer_element$$70$$.removeAttr("tabindex"), $closeDelayTimer_element$$70$$.show());
  }, $_cleanupList$:function($list$$1$$) {
    if ($list$$1$$ && $list$$1$$.is("ul")) {
      $list$$1$$.removeClass("oj-listbox-results oj-listbox-result-sub");
      $list$$1$$.removeAttr("role");
      for (var $i$$183_wrappingDiv$$ = $list$$1$$.children().length - 1;0 <= $i$$183_wrappingDiv$$;$i$$183_wrappingDiv$$--) {
        this.$_cleanupList$($$$$12$$($list$$1$$.children()[$i$$183_wrappingDiv$$]));
      }
    } else {
      $list$$1$$.is("li") && (($list$$1$$.hasClass("oj-listbox-placeholder") || $list$$1$$.hasClass("oj-listbox-no-results")) && $list$$1$$.remove(), $list$$1$$.attr("class") && $list$$1$$.attr("class", $list$$1$$.attr("class").replace(/\oj-listbox-\S+/g, "")), ($i$$183_wrappingDiv$$ = $list$$1$$.children(".oj-listbox-result-label")) && $i$$183_wrappingDiv$$.contents().unwrap(), "none" == $list$$1$$.css("display") && $list$$1$$.css("display", ""), this.$_cleanupList$($list$$1$$.children("ul")));
    }
  }, $_optionToData$:function($element$$71$$) {
    if ($element$$71$$.is("option")) {
      return{value:$element$$71$$.prop("value"), label:$element$$71$$.text(), element:$element$$71$$.get(), css:$element$$71$$.attr("class"), disabled:$element$$71$$.prop("disabled"), locked:"locked" === $element$$71$$.attr("locked") || !0 === $element$$71$$.data("locked")};
    }
    if ($element$$71$$.is("optgroup")) {
      return{label:$element$$71$$.attr("label"), children:[], element:$element$$71$$.get(), css:$element$$71$$.attr("class")};
    }
    if ($element$$71$$.is("li")) {
      var $elemChildren_itemLabel$$, $groupData$$ = null;
      ($elemChildren_itemLabel$$ = $element$$71$$.children()) && 0 < $elemChildren_itemLabel$$.length && $elemChildren_itemLabel$$.is("ul") ? ($elemChildren_itemLabel$$ = $element$$71$$.attr("oj-data-label") ? $element$$71$$.attr("oj-data-label") : $element$$71$$.clone().children().remove().end().text().trim(), $groupData$$ = []) : $elemChildren_itemLabel$$ = $element$$71$$.attr("oj-data-label") ? $element$$71$$.attr("oj-data-label") : $element$$71$$.text().trim();
      return{value:$element$$71$$.attr("oj-data-value"), label:$elemChildren_itemLabel$$, element:$element$$71$$.get(), css:$element$$71$$.attr("class"), children:$groupData$$};
    }
  }, $_prepareOpts$:function($opts$$14$$) {
    var $element$$72$$, $datalist$$, $self$$74$$ = this;
    $opts$$14$$.options && Array.isArray($opts$$14$$.options) && $opts$$14$$.optionsKeys && ($opts$$14$$.options = $$$$12$$.extend(!0, [], $opts$$14$$.options));
    $element$$72$$ = $opts$$14$$.element;
    var $tagName$$2$$ = $element$$72$$.get(0).tagName.toLowerCase();
    "input" === $tagName$$2$$ && $element$$72$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$12$$("#" + $element$$72$$.attr("list")) : "select" === $tagName$$2$$ && 0 < $element$$72$$.children().length ? this.$datalist$ = $datalist$$ = $element$$72$$ : $opts$$14$$.list && (this.$datalist$ = $datalist$$ = $$$$12$$("#" + $opts$$14$$.list));
    $opts$$14$$ = $$$$12$$.extend({}, {$populateResults$:function($container$$2$$, $results$$4$$, $query$$7$$, $showPlaceholder$$) {
      var $populate$$, $id$$22$$ = this.$opts$.id;
      $populate$$ = function $$populate$$$($results$$5$$, $container$$3$$, $depth$$7$$, $i$$184_showPlaceholder$$1$$) {
        function $processChildren$$($node$$28$$, $result$$40$$) {
          if ($result$$40$$.children && 0 < $result$$40$$.children.length) {
            var $nestedList$$ = $result$$40$$.element && $$$$12$$($result$$40$$.element[0]).is("li") && $$$$12$$($result$$40$$.element[0]).children("ul"), $innerContainer$$1$$ = $nestedList$$ ? $$$$12$$($result$$40$$.element[0]).children("ul") : $$$$12$$("\x3cul\x3e\x3c/ul\x3e");
            $innerContainer$$1$$.hasClass("oj-listbox-result-sub") || $innerContainer$$1$$.addClass("oj-listbox-result-sub");
            $populate$$($result$$40$$.children, $innerContainer$$1$$, $depth$$7$$ + 1, !1);
            $nestedList$$ || $node$$28$$.append($innerContainer$$1$$);
          }
        }
        var $l$$7_placeholder$$, $result$$39$$, $label$$4_selectable$$, $disabled$$3_formatted$$, $node$$27$$;
        $l$$7_placeholder$$ = $self$$74$$.$_getPlaceholder$();
        $i$$184_showPlaceholder$$1$$ && null !== $l$$7_placeholder$$ && !$query$$7$$.$term$ && 0 >= $container$$3$$.find(".oj-listbox-placeholder").length && ($result$$39$$ = {value:"", label:$l$$7_placeholder$$}, $node$$27$$ = $$$$12$$("\x3cli\x3e\x3c/li\x3e"), $node$$27$$.addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable"), $node$$27$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$12$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), 
        $label$$4_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$4_selectable$$.attr("role", "option"), $disabled$$3_formatted$$ = $opts$$14$$.$formatResult$($result$$39$$), void 0 !== $disabled$$3_formatted$$ && $label$$4_selectable$$.text($disabled$$3_formatted$$), $node$$27$$.append($label$$4_selectable$$), $node$$27$$.data($self$$74$$.$_elemNm$, $result$$39$$), $container$$3$$.prepend($node$$27$$));
        $i$$184_showPlaceholder$$1$$ = 0;
        for ($l$$7_placeholder$$ = $results$$5$$.length;$i$$184_showPlaceholder$$1$$ < $l$$7_placeholder$$;$i$$184_showPlaceholder$$1$$ += 1) {
          $result$$39$$ = $results$$5$$[$i$$184_showPlaceholder$$1$$];
          $disabled$$3_formatted$$ = !0 === $result$$39$$.disabled;
          $label$$4_selectable$$ = !$disabled$$3_formatted$$ && void 0 !== $id$$22$$($result$$39$$);
          var $isList$$ = $result$$39$$.element && $$$$12$$($result$$39$$.element[0]).is("li");
          $node$$27$$ = $isList$$ ? $$$$12$$($result$$39$$.element[0]) : $$$$12$$("\x3cli\x3e\x3c/li\x3e");
          $node$$27$$.hasClass("oj-listbox-result") ? ($result$$39$$.children && 0 < $result$$39$$.children.length && $processChildren$$($node$$27$$, $result$$39$$), $$$$12$$($result$$39$$.element[0]).css("display", "")) : ($node$$27$$.addClass("oj-listbox-results-depth-" + $depth$$7$$), $node$$27$$.addClass("oj-listbox-result"), $node$$27$$.addClass($label$$4_selectable$$ ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), $disabled$$3_formatted$$ && $node$$27$$.addClass("oj-disabled"), 
          $result$$39$$.children && $node$$27$$.addClass("oj-listbox-result-with-children"), $node$$27$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$12$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), $label$$4_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$4_selectable$$.attr("role", "option"), $disabled$$3_formatted$$ && $label$$4_selectable$$.attr("aria-disabled", "true"), $isList$$ || ($disabled$$3_formatted$$ = 
          $opts$$14$$.$formatResult$($result$$39$$), void 0 !== $disabled$$3_formatted$$ && $label$$4_selectable$$.text($disabled$$3_formatted$$), $node$$27$$.append($label$$4_selectable$$)), $result$$39$$.children && 0 < $result$$39$$.children.length && $processChildren$$($node$$27$$, $result$$39$$), $node$$27$$.data($self$$74$$.$_elemNm$, $result$$39$$), $isList$$ ? ($$$$12$$($result$$39$$.element[0]).contents().filter(function() {
            return "UL" !== this.tagName;
          }).wrapAll($label$$4_selectable$$), $$$$12$$($result$$39$$.element[0]).css("display", "")) : $container$$3$$.append($node$$27$$));
        }
      };
      $populate$$($results$$4$$, $container$$2$$, 0, $showPlaceholder$$);
    }}, $_ojChoice_defaults$$, $opts$$14$$);
    $opts$$14$$.id = function $$opts$$14$$$id$($e$$63$$) {
      return $e$$63$$.value;
    };
    $opts$$14$$.$formatResult$ = function $$opts$$14$$$$formatResult$$($result$$41$$) {
      return isNaN($result$$41$$.label) ? $result$$41$$.label : this.$ojContext$.$_formatValue$($result$$41$$.label);
    };
    $opts$$14$$.$formatSelection$ = function $$opts$$14$$$$formatSelection$$($data$$91$$) {
      return $data$$91$$ && $data$$91$$.label ? isNaN($data$$91$$.label) ? $data$$91$$.label : this.$ojContext$.$_formatValue$($data$$91$$.label) : void 0;
    };
    "select" !== $tagName$$2$$ && null !== $opts$$14$$.manageNewEntry && ($opts$$14$$.manageNewEntry = function $$opts$$14$$$manageNewEntry$($term$$) {
      var $entry$$1$$ = {};
      $entry$$1$$.value = $entry$$1$$.label = $$$$12$$.trim($term$$);
      return $entry$$1$$;
    });
    $datalist$$ ? $opts$$14$$.$query$ = this.$_bind$(function($query$$8$$) {
      var $data$$92$$ = {$results$:[], $more$:!1}, $term$$1$$ = $query$$8$$.$term$, $children$$2$$, $process$$1$$;
      $process$$1$$ = function $$process$$1$$$($element$$73$$, $collection$$33$$) {
        var $group$$1$$, $nestedLi$$ = $element$$73$$.children() && 0 < $element$$73$$.children().length && $element$$73$$.children().is("ul");
        if ($element$$73$$.is("option") || $element$$73$$.is("li") && !$nestedLi$$) {
          $query$$8$$.$matcher$($term$$1$$, $element$$73$$.text(), $element$$73$$) && $collection$$33$$.push($self$$74$$.$_optionToData$($element$$73$$));
        } else {
          if ($element$$73$$.is("optgroup") || $element$$73$$.is("li") && $nestedLi$$) {
            $group$$1$$ = $self$$74$$.$_optionToData$($element$$73$$), $_ComboUtils$$.$each2$($element$$73$$.is("optgroup") ? $element$$73$$.children() : $element$$73$$.children("ul").children(), function($i$$185$$, $elm$$1$$) {
              $process$$1$$($elm$$1$$, $group$$1$$.children);
            }), 0 < $group$$1$$.children.length && $collection$$33$$.push($group$$1$$);
          }
        }
      };
      $children$$2$$ = $datalist$$.children();
      void 0 !== this.$_getPlaceholder$() && 0 < $children$$2$$.length && "" == $children$$2$$.first().attr("value") && ($children$$2$$ = $children$$2$$.slice(1));
      $_ComboUtils$$.$each2$($children$$2$$, function($i$$186$$, $elm$$2$$) {
        $process$$1$$($elm$$2$$, $data$$92$$.$results$);
      });
      $query$$8$$.$callback$($data$$92$$);
    }) : "options" in $opts$$14$$ && ($opts$$14$$.$query$ = $_ComboUtils$$.$local$($opts$$14$$.options, $opts$$14$$.optionsKeys ? $opts$$14$$.optionsKeys : null));
    return $opts$$14$$;
  }, $_triggerSelect$:function($data$$93_evt$$20$$) {
    $data$$93_evt$$20$$ = $$$$12$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$93_evt$$20$$), object:$data$$93_evt$$20$$});
    this.$opts$.element.trigger($data$$93_evt$$20$$);
    return!$data$$93_evt$$20$$.isDefaultPrevented();
  }, $_isInterfaceEnabled$:function() {
    return!0 === this.$enabledInterface$;
  }, $_enableInterface$:function() {
    var $enabled$$ = this.$_enabled$ && !this.$_readonly$;
    if ($enabled$$ === this.$enabledInterface$) {
      return!1;
    }
    this.$container$.toggleClass("oj-disabled", !$enabled$$);
    this.close();
    this.$enabledInterface$ = $enabled$$;
    return!0;
  }, $_enable$:function($enabled$$1$$) {
    void 0 === $enabled$$1$$ && ($enabled$$1$$ = !0);
    this.$_enabled$ !== $enabled$$1$$ && (this.$_enabled$ = $enabled$$1$$, this.$opts$.element.prop("disabled", !$enabled$$1$$), this.$_enableInterface$());
  }, $_disable$:function() {
    this.$_enable$(!1);
  }, $_readonly$:function($enabled$$2$$) {
    void 0 === $enabled$$2$$ && ($enabled$$2$$ = !1);
    if (this.$_readonly$ === $enabled$$2$$) {
      return!1;
    }
    this.$_readonly$ = $enabled$$2$$;
    this.$opts$.element.prop("readonly", $enabled$$2$$);
    this.$_enableInterface$();
    return!0;
  }, $_opened$:function() {
    return this.$container$.hasClass("oj-listbox-dropdown-open");
  }, $_getDropdownPositionElement$:function() {
    return this.$container$.children().first();
  }, $_usingHandler$:function($pos$$7$$, $props$$8$$) {
    var $container$$4$$ = this.$container$, $dropdown$$1$$ = $props$$8$$.element.element;
    $dropdown$$1$$.css($pos$$7$$);
    "bottom" === $props$$8$$.vertical ? ($container$$4$$.addClass("oj-listbox-drop-above"), $dropdown$$1$$.addClass("oj-listbox-drop-above")) : ($container$$4$$.removeClass("oj-listbox-drop-above"), $dropdown$$1$$.removeClass("oj-listbox-drop-above"));
  }, $_getDropdownPosition$:function() {
    var $position$$12$$ = {my:"start top", at:"start bottom", of:this.$_getDropdownPositionElement$(), collision:"flip", using:$$$$12$$.proxy(this.$_usingHandler$, this)}, $isRtl$$ = "rtl" === $oj$$12$$.$DomUtils$.$getReadingDirection$();
    return $oj$$12$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$12$$, $isRtl$$);
  }, $_positionDropdown$:function() {
    var $dropdown$$2$$ = this.$dropdown$, $position$$13$$ = this.$_getDropdownPosition$();
    $dropdown$$2$$.css("width", this.$container$.outerWidth());
    $dropdown$$2$$.position($position$$13$$);
  }, $_shouldOpen$:function() {
    var $event$$128$$;
    if (this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$) {
      return!1;
    }
    $event$$128$$ = $$$$12$$.Event(this.$_elemNm$ + "-opening");
    this.$opts$.element.trigger($event$$128$$);
    return!$event$$128$$.isDefaultPrevented();
  }, $_clearDropdownAlignmentPreference$:function() {
    this.$container$.removeClass("oj-listbox-drop-above");
    this.$dropdown$.removeClass("oj-listbox-drop-above");
  }, open:function($e$$65$$) {
    if (!this.$_shouldOpen$($e$$65$$)) {
      return!1;
    }
    this.$_opening$($e$$65$$);
    return!0;
  }, $_opening$:function() {
    this.$container$.addClass("oj-listbox-dropdown-open");
    this.$_clearDropdownAlignmentPreference$();
    this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
    this.$dropdown$.appendTo(this.body());
    var $psEvents$$ = {};
    $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$12$$.proxy(this.close, this);
    $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$12$$.proxy(this.$_surrogateRemoveHandler$, this);
    $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$12$$.proxy(this.$_clickAwayHandler$, this);
    $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$12$$.proxy(this.$_positionDropdown$, this);
    var $psOptions$$ = {};
    $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$POPUP$] = this.$dropdown$;
    $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$LAUNCHER$] = this.$opts$.element;
    $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$EVENTS$] = $psEvents$$;
    $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$POSITION$] = this.$_getDropdownPosition$();
    $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-listbox-drop-layer";
    $oj$$12$$.$PopupService$.$getInstance$().open($psOptions$$);
    $$$$12$$("#oj-listbox-drop").removeAttr("id");
    this.$dropdown$.attr("id", "oj-listbox-drop");
    this.$dropdown$.attr("data-oj-containerid", this.$containerId$);
    this.$_positionDropdown$();
    this.$_getActiveContainer$().attr("aria-expanded", !0);
  }, close:function() {
    if (this.$_opened$()) {
      var $cid$$8_psOptions$$1$$ = this.$containerId$, $scroll$$1$$ = "scroll." + $cid$$8_psOptions$$1$$, $resize$$1$$ = "resize." + $cid$$8_psOptions$$1$$, $orient$$1$$ = "orientationchange." + $cid$$8_psOptions$$1$$;
      this.$container$.parents().add(window).each(function() {
        $$$$12$$(this).off($scroll$$1$$).off($resize$$1$$).off($orient$$1$$);
      });
      this.$_clearDropdownAlignmentPreference$();
      $cid$$8_psOptions$$1$$ = {};
      $cid$$8_psOptions$$1$$[$oj$$12$$.$PopupService$.$OPTION$.$POPUP$] = this.$dropdown$;
      $oj$$12$$.$PopupService$.$getInstance$().close($cid$$8_psOptions$$1$$);
      this.$dropdown$.removeAttr("data-oj-containerid");
      this.$dropdown$.removeAttr("id");
      this.$container$.removeClass("oj-listbox-dropdown-open");
      this.$opts$.list ? this.$results$.find("li").removeClass("oj-hover") : (this.$dropdown$.detach(), this.$results$.empty());
      this.$_getActiveContainer$().attr("aria-expanded", !1);
    }
  }, $_clearSearch$:function() {
  }, $_ensureHighlightVisible$:function() {
    var $results$$6$$ = this.$results$, $children$$3_more_rb$$, $index$$131$$, $child$$3$$, $hb_y$$37$$;
    $index$$131$$ = this.$_highlight$();
    0 > $index$$131$$ || (0 == $index$$131$$ ? $results$$6$$.scrollTop(0) : ($children$$3_more_rb$$ = this.$_findHighlightableChoices$().find(".oj-listbox-result-label"), $child$$3$$ = $$$$12$$($children$$3_more_rb$$[$index$$131$$]), $hb_y$$37$$ = $child$$3$$.offset().top + $child$$3$$.outerHeight(!0), $index$$131$$ === $children$$3_more_rb$$.length - 1 && ($children$$3_more_rb$$ = $results$$6$$.find("li.oj-listbox-more-results"), 0 < $children$$3_more_rb$$.length && ($hb_y$$37$$ = $children$$3_more_rb$$.offset().top + 
    $children$$3_more_rb$$.outerHeight(!0))), $children$$3_more_rb$$ = $results$$6$$.offset().top + $results$$6$$.outerHeight(!0), $hb_y$$37$$ > $children$$3_more_rb$$ && $results$$6$$.scrollTop($results$$6$$.scrollTop() + ($hb_y$$37$$ - $children$$3_more_rb$$)), $hb_y$$37$$ = $child$$3$$.offset().top - $results$$6$$.offset().top, 0 > $hb_y$$37$$ && "none" != $child$$3$$.css("display") && $results$$6$$.scrollTop($results$$6$$.scrollTop() + $hb_y$$37$$)));
  }, $_findHighlightableChoices$:function() {
    return this.$results$.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)").filter(function() {
      return "none" != $$$$12$$(this).css("display");
    });
  }, $_moveHighlight$:function($delta$$3$$) {
    for (var $choices$$ = this.$_findHighlightableChoices$(), $index$$132$$ = this.$_highlight$();-1 <= $index$$132$$ && $index$$132$$ < $choices$$.length;) {
      $index$$132$$ += $delta$$3$$;
      $index$$132$$ == $choices$$.length ? $index$$132$$ = 0 : -1 == $index$$132$$ && ($index$$132$$ = $choices$$.length - 1);
      var $choice$$ = $$$$12$$($choices$$[$index$$132$$]);
      if ($choice$$.hasClass("oj-listbox-result-selectable") && !$choice$$.hasClass("oj-disabled") && !$choice$$.hasClass("oj-selected")) {
        this.$_highlight$($index$$132$$);
        break;
      }
    }
  }, $_highlight$:function($index$$133$$) {
    var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
    if (0 === arguments.length) {
      return $choice$$1_choices$$1$$.get().indexOf($choice$$1_choices$$1$$.filter(".oj-hover")[0]);
    }
    $index$$133$$ >= $choice$$1_choices$$1$$.length && ($index$$133$$ = $choice$$1_choices$$1$$.length - 1);
    0 > $index$$133$$ && ($index$$133$$ = 0);
    this.$_removeHighlight$();
    $choice$$1_choices$$1$$ = $$$$12$$($choice$$1_choices$$1$$[$index$$133$$]);
    $choice$$1_choices$$1$$.addClass("oj-hover");
    this.$_getActiveContainer$().attr("aria-activedescendant", $choice$$1_choices$$1$$.find(".oj-listbox-result-label").attr("id"));
    this.$_ensureHighlightVisible$();
  }, $_removeHighlight$:function() {
    this.$results$.find(".oj-hover").removeClass("oj-hover");
  }, $_highlightUnderEvent$:function($el$$5_event$$130$$) {
    $el$$5_event$$130$$ = $$$$12$$($el$$5_event$$130$$.target).closest(".oj-listbox-result-selectable");
    if (0 < $el$$5_event$$130$$.length && !$el$$5_event$$130$$.is(".oj-hover")) {
      var $choices$$2$$ = this.$_findHighlightableChoices$();
      this.$_highlight$($choices$$2$$.index($el$$5_event$$130$$));
    } else {
      0 == $el$$5_event$$130$$.length && this.$_removeHighlight$();
    }
  }, $_updateResults$:function($initial$$) {
    var $search$$2$$ = this.search, $results$$7$$ = this.$results$, $opts$$15$$ = this.$opts$, $self$$75$$ = this, $input$$2_term$$2$$;
    $input$$2_term$$2$$ = $search$$2$$.val();
    var $lastTerm$$ = $$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term"), $queryNumber$$;
    !0 !== $initial$$ && $lastTerm$$ && $input$$2_term$$2$$ === $lastTerm$$ || ($$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term", $input$$2_term$$2$$), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input$$2_term$$2$$ = this.search.val(), this.$resultsPage$ = 1, $opts$$15$$.$query$({element:$opts$$15$$.element, $term$:void 0 !== $input$$2_term$$2$$ && null != $input$$2_term$$2$$ && !0 !== $initial$$ ? $input$$2_term$$2$$ : "", page:this.$resultsPage$, context:null, 
    $matcher$:$opts$$15$$.$matcher$, $callback$:this.$_bind$(function($data$$96_li$$) {
      $queryNumber$$ == this.$queryCount$ && this.$_opened$() && (this.context = $data$$96_li$$ && void 0 !== $data$$96_li$$.context ? $data$$96_li$$.context : null, $data$$96_li$$ && 0 !== $data$$96_li$$.$results$.length || !$_ComboUtils$$.$checkFormatter$($self$$75$$.$ojContext$, $opts$$15$$.$formatNoMatches$, "formatNoMatches") ? (this.$_preprocessResults$($results$$7$$), $self$$75$$.$opts$.$populateResults$.call(this, $results$$7$$, $data$$96_li$$.$results$, {$term$:$search$$2$$.val(), page:this.$resultsPage$, 
      context:null}, this.$_showPlaceholder$()), this.$_postprocessResults$($data$$96_li$$, $initial$$), $self$$75$$.$_positionDropdown$()) : "oj-select" == this.$_classNm$ && !0 !== this.$opts$.multiple ? ($data$$96_li$$ = $$$$12$$("\x3cli\x3e"), $data$$96_li$$.addClass("oj-listbox-no-results"), $data$$96_li$$.text($opts$$15$$.$formatNoMatches$($self$$75$$.$ojContext$, $search$$2$$.val())), this.$_preprocessResults$($results$$7$$), $results$$7$$.append($data$$96_li$$), $self$$75$$.$_positionDropdown$()) : 
      this.close());
    })}));
  }, $_preprocessResults$:function($resultList_results$$8$$) {
    this.$opts$.list ? ($resultList_results$$8$$ = $resultList_results$$8$$.children(), this.$_hideResultList$($resultList_results$$8$$)) : $resultList_results$$8$$.empty();
  }, $_hideResultList$:function($resultList$$1$$) {
    for (var $i$$187$$ = 0;$i$$187$$ < $resultList$$1$$.length;$i$$187$$++) {
      $$$$12$$($resultList$$1$$[$i$$187$$]).is("LI") && (($$$$12$$($resultList$$1$$[$i$$187$$]).hasClass("oj-listbox-no-results") || $$$$12$$($resultList$$1$$[$i$$187$$]).hasClass("oj-listbox-placeholder")) && $$$$12$$($resultList$$1$$[$i$$187$$]).remove(), $$$$12$$($resultList$$1$$[$i$$187$$]).css("display", "none"), $$$$12$$($resultList$$1$$[$i$$187$$]).hasClass("oj-selected") && $$$$12$$($resultList$$1$$[$i$$187$$]).removeClass("oj-selected"));
      var $nested$$ = $$$$12$$($resultList$$1$$[$i$$187$$]).children("ul");
      $nested$$ && $nested$$.children() && this.$_hideResultList$($nested$$.children());
    }
  }, $_cancel$:function($event$$131$$) {
    this.close($event$$131$$);
  }, $_focusSearch$:function() {
    $_ComboUtils$$.$_focus$(this.search);
  }, $_selectHighlighted$:function($options$$267$$, $event$$132$$) {
    var $index$$134$$ = this.$_highlight$(), $data$$97$$ = this.$results$.find(".oj-hover").closest(".oj-listbox-result").data(this.$_elemNm$);
    $data$$97$$ ? (this.$_highlight$($index$$134$$), this.$_onSelect$($data$$97$$, $options$$267$$, $event$$132$$)) : $options$$267$$ && $options$$267$$.$noFocus$ && this.close($event$$132$$);
  }, $_getPlaceholder$:function() {
    return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder;
  }, $_setPlaceholder$:function() {
    var $placeholder$$1$$ = this.$_getPlaceholder$();
    $placeholder$$1$$ && (this.search.attr("placeholder", $placeholder$$1$$), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $_initContainerWidth$:function() {
    var $attrs$$inline_747_style$$inline_746_width$$15$$;
    a: {
      var $attr$$inline_751_matches$$inline_748$$, $i$$inline_749$$, $l$$inline_750$$;
      $attrs$$inline_747_style$$inline_746_width$$15$$ = this.$opts$.element.attr("style");
      if (void 0 !== $attrs$$inline_747_style$$inline_746_width$$15$$) {
        for ($attrs$$inline_747_style$$inline_746_width$$15$$ = $attrs$$inline_747_style$$inline_746_width$$15$$.split(";"), $i$$inline_749$$ = 0, $l$$inline_750$$ = $attrs$$inline_747_style$$inline_746_width$$15$$.length;$i$$inline_749$$ < $l$$inline_750$$;$i$$inline_749$$ += 1) {
          if ($attr$$inline_751_matches$$inline_748$$ = $attrs$$inline_747_style$$inline_746_width$$15$$[$i$$inline_749$$].replace(/\s/g, ""), $attr$$inline_751_matches$$inline_748$$ = $attr$$inline_751_matches$$inline_748$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_751_matches$$inline_748$$ && 1 <= $attr$$inline_751_matches$$inline_748$$.length) {
            $attrs$$inline_747_style$$inline_746_width$$15$$ = $attr$$inline_751_matches$$inline_748$$[1];
            break a;
          }
        }
      }
      $attrs$$inline_747_style$$inline_746_width$$15$$ = void 0;
    }
    null !== $attrs$$inline_747_style$$inline_746_width$$15$$ && this.$container$.css("width", $attrs$$inline_747_style$$inline_746_width$$15$$);
  }, $getVal$:function() {
    return this.$ojContext$.option("value");
  }, $setVal$:function($val$$31$$, $event$$133$$) {
    "string" === typeof $val$$31$$ ? this.$ojContext$.$_SetValue$([$val$$31$$], $event$$133$$, {$doValueChangeCheck$:!1}) : this.$ojContext$.$_SetValue$($val$$31$$, $event$$133$$, {$doValueChangeCheck$:!1});
    this.$opts$.element.val($val$$31$$);
  }, $_showPlaceholder$:function() {
    return!1;
  }, $_getActiveContainer$:function() {
    return this.search;
  }, $_hasSearchBox$:function() {
    return void 0 !== this.$opts$.minimumResultsForSearch && void 0 !== this.$container$.$_hasSearchBox$;
  }}), $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatNoMatches$:function($ojContext$$1$$) {
    return $ojContext$$1$$.$getTranslatedString$("noMatchesFound");
  }, id:function($e$$66$$) {
    return $e$$66$$.id;
  }, $matcher$:function($term$$3$$, $text$$10$$) {
    return 0 <= ("" + $text$$10$$).toUpperCase().indexOf(("" + $term$$3$$).toUpperCase());
  }, separator:","}, $_AbstractSingleChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_enableInterface$:function() {
    $_AbstractSingleChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_focus$:function() {
    this.$_opened$() && this.close();
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_clear$:function($event$$134$$) {
    this.selection.data(this.$_elemNm$) && ($event$$134$$ || $oj$$12$$.$Logger$.warn("Event should not be null when user modified the value in UI"), this.$setVal$([], $event$$134$$), this.search.val(""), this.selection.removeData(this.$_elemNm$));
    this.$_setPlaceholder$();
  }, $_initSelection$:function() {
    this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, this.$_bind$(this.$_updateSelectedOption$));
  }, $_containerKeydownHandler$:function($e$$67$$) {
    if (this.$_isInterfaceEnabled$()) {
      if ($e$$67$$.which === $_ComboUtils$$.$KEY$.PAGE_UP || $e$$67$$.which === $_ComboUtils$$.$KEY$.PAGE_DOWN) {
        $_ComboUtils$$.$killEvent$($e$$67$$);
      } else {
        switch($e$$67$$.which) {
          case $_ComboUtils$$.$KEY$.UP:
          ;
          case $_ComboUtils$$.$KEY$.DOWN:
            this.$_opened$() ? this.$_moveHighlight$($e$$67$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1) : this.open($e$$67$$);
            $_ComboUtils$$.$killEvent$($e$$67$$);
            return;
          case $_ComboUtils$$.$KEY$.ENTER:
            this.$_selectHighlighted$(null, $e$$67$$);
            $_ComboUtils$$.$killEvent$($e$$67$$);
            return;
          case $_ComboUtils$$.$KEY$.TAB:
            this.close($e$$67$$);
            return;
          case $_ComboUtils$$.$KEY$.$ESC$:
            this.$_cancel$($e$$67$$);
            return;
        }
        this.$_userTyping$ = !0;
        this.$_opened$() || this.open($e$$67$$);
      }
    }
  }, $_containerKeyupHandler$:function($e$$68$$) {
    this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open($e$$68$$);
  }, $_initContainer$:function() {
    var $container$$6_selection$$1$$;
    $container$$6_selection$$1$$ = this.$container$;
    var $elementLabel$$, $idSuffix_rootAttr$$1$$ = this.$opts$.rootAttributes, $idSuffix_rootAttr$$1$$ = $idSuffix_rootAttr$$1$$ && $idSuffix_rootAttr$$1$$.id ? $idSuffix_rootAttr$$1$$.id : this.$opts$.element.attr("id") || $_ComboUtils$$.$nextUid$();
    this.selection = $container$$6_selection$$1$$ = $container$$6_selection$$1$$.find("." + this.$_classNm$ + "-choice");
    $container$$6_selection$$1$$.attr("id", this.$_classNm$ + "-choice-" + $idSuffix_rootAttr$$1$$);
    $elementLabel$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$.attr("id") || $elementLabel$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix_rootAttr$$1$$);
    $container$$6_selection$$1$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix_rootAttr$$1$$);
    this.$results$.attr("id") || this.$results$.attr("id", "oj-listbox-results-" + $idSuffix_rootAttr$$1$$);
    this.search.attr("aria-owns", this.$results$.attr("id"));
    this.search.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.$opts$.element.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.search.attr("id") && $elementLabel$$.attr("for", this.search.attr("id"));
    this.$opts$.element.attr("aria-label") && this.search.attr("aria-label", this.$opts$.element.attr("aria-label"));
    this.$opts$.element.attr("aria-controls") && this.search.attr("aria-controls", this.$opts$.element.attr("aria-controls"));
    $container$$6_selection$$1$$.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    $container$$6_selection$$1$$.on("mousedown", "abbr", this.$_bind$(function($e$$69$$) {
      this.$_isInterfaceEnabled$() && (this.$_clear$($e$$69$$), $_ComboUtils$$.$killEventImmediately$($e$$69$$), this.close($e$$69$$), this.selection.focus());
    }));
    $container$$6_selection$$1$$.on("mousedown", this.$_bind$(function($e$$70$$) {
      this.$opts$.element.prop("disabled") && $_ComboUtils$$.$killEvent$($e$$70$$);
      this.$_opened$() ? this.close($e$$70$$) : this.$_isInterfaceEnabled$() && this.open($e$$70$$);
      this.search.focus();
    }));
    $container$$6_selection$$1$$.on("focus", this.$_bind$(function($e$$71$$) {
      $_ComboUtils$$.$killEvent$($e$$71$$);
    }));
    this.search.on("blur keyup", this.$_bind$(function($e$$72_formatted$$1$$) {
      if ("keyup" !== $e$$72_formatted$$1$$.type || 10 === $e$$72_formatted$$1$$.keyCode || 13 === $e$$72_formatted$$1$$.keyCode) {
        if (void 0 !== this.search.val() && 0 >= this.$results$.find(".oj-hover").length) {
          if (this.$opts$.manageNewEntry) {
            if (!this.selection.data("ojcombobox") && "" !== this.search.val() || this.selection.data("ojcombobox") && this.selection.data("ojcombobox").label !== this.search.val()) {
              var $data$$99$$ = this.$opts$.manageNewEntry(this.search.val());
              this.$_onSelect$($data$$99$$, null, $e$$72_formatted$$1$$);
            }
          } else {
            null == this.$opts$.manageNewEntry && ($data$$99$$ = this.selection.data(this.$_elemNm$), "" == this.search.val() ? this.$_clear$($e$$72_formatted$$1$$) : $data$$99$$ || "" === this.search.val() ? ($e$$72_formatted$$1$$ = this.$opts$.$formatSelection$($data$$99$$), void 0 !== $e$$72_formatted$$1$$ && this.search.val($e$$72_formatted$$1$$)) : this.$_clearSearch$());
          }
        }
        this.search.removeClass(this.$_classNm$ + "-focused");
      }
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_setPlaceholder$();
  }, $_prepareOpts$:function() {
    var $opts$$16$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$77$$ = this, $tagName$$3$$ = $opts$$16$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$3$$ && $opts$$16$$.element.attr("list") || "select" === $tagName$$3$$ && 0 < $opts$$16$$.element.children().length || $opts$$16$$.list) {
      var $eleName$$ = $opts$$16$$.list ? "li" : "option";
      $opts$$16$$.$initSelection$ = function $$opts$$16$$$$initSelection$$($element$$75$$, $callback$$88$$) {
        var $selected$$1$$, $value$$176$$ = $self$$77$$.$getVal$();
        Array.isArray($value$$176$$) && ($value$$176$$ = $value$$176$$[0]);
        $selected$$1$$ = void 0 !== $value$$176$$ && null !== $value$$176$$ ? $self$$77$$.$_optionToData$($element$$75$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return this.getAttribute("oj-data-value") === $value$$176$$;
          }
          if ("option" == $eleName$$) {
            return this.value === $value$$176$$;
          }
        })) : $self$$77$$.$_optionToData$($element$$75$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return!0 === this.getAttribute("oj-data-selected");
          }
          if ("option" == $eleName$$) {
            return this.selected;
          }
        }));
        $callback$$88$$($selected$$1$$);
      };
      $opts$$16$$.validate = function $$opts$$16$$$validate$($element$$76$$, $value$$177$$) {
        var $selected$$2$$;
        void 0 !== $value$$177$$ && null !== $value$$177$$ && ($selected$$2$$ = $self$$77$$.$_optionToData$($element$$76$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return this.getAttribute("oj-data-value") === $value$$177$$;
          }
          if ("option" == $eleName$$) {
            return this.value === $value$$177$$;
          }
        })));
        return!!$selected$$2$$;
      };
    } else {
      if ("options" in $opts$$16$$ || this.$getVal$() && 0 < this.$getVal$().length) {
        $opts$$16$$.$initSelection$ = function $$opts$$16$$$$initSelection$$($element$$77$$, $callback$$89$$) {
          var $id$$23$$ = "";
          $self$$77$$.$getVal$() && $self$$77$$.$getVal$().length && ($id$$23$$ = $self$$77$$.$getVal$()[0]);
          var $first$$5$$ = "select" == $tagName$$3$$ && $self$$77$$.$ojContext$.$_HasPlaceholderSet$() && !$self$$77$$.$ojContext$.$_IsRequired$() ? $self$$77$$.$_getPlaceholder$() : null, $match$$16$$ = null;
          $opts$$16$$.$query$({$matcher$:function($is_match_term$$4$$, $text$$11$$, $el$$6$$) {
            ($is_match_term$$4$$ = $id$$23$$ === $opts$$16$$.id($el$$6$$)) && ($match$$16$$ = $el$$6$$);
            null == $first$$5$$ && ($first$$5$$ = $el$$6$$);
            return $is_match_term$$4$$;
          }, $callback$:$$$$12$$.isFunction($callback$$89$$) ? function() {
            $match$$16$$ || "select" !== $tagName$$3$$ || ($match$$16$$ = $first$$5$$);
            $callback$$89$$($match$$16$$);
          } : $$$$12$$.noop});
        }, $opts$$16$$.validate = function $$opts$$16$$$validate$($element$$78$$, $value$$178$$) {
          var $match$$17$$ = null;
          $opts$$16$$.$query$({$matcher$:function($is_match$$1_term$$5$$, $text$$12$$, $el$$7$$) {
            ($is_match$$1_term$$5$$ = $value$$178$$ === $opts$$16$$.id($el$$7$$)) && ($match$$17$$ = $el$$7$$);
            return $is_match$$1_term$$5$$;
          }, $callback$:$$$$12$$.noop});
          return!!$match$$17$$;
        };
      }
    }
    return $opts$$16$$;
  }, $_postprocessResults$:function($data$$100_highlightableChoices$$, $initial$$1$$, $noHighlightUpdate$$) {
    var $selected$$3$$ = -1, $self$$78$$ = this;
    $data$$100_highlightableChoices$$ = this.$_findHighlightableChoices$();
    $_ComboUtils$$.$each2$($data$$100_highlightableChoices$$, function($i$$189$$, $elm$$3$$) {
      if ($self$$78$$.$getVal$() && $self$$78$$.$getVal$()[0] === $self$$78$$.id($elm$$3$$.data($self$$78$$.$_elemNm$))) {
        return $selected$$3$$ = $i$$189$$, !1;
      }
    });
    !1 !== $noHighlightUpdate$$ && !0 === $initial$$1$$ && 0 <= $selected$$3$$ && this.$_highlight$($selected$$3$$);
  }, $_onSelect$:function($data$$101$$, $options$$268$$, $event$$135$$) {
    this.$_triggerSelect$($data$$101$$) && (this.$getVal$() && this.$getVal$(), this.close($event$$135$$), this.$setVal$(0 === this.id($data$$101$$).length ? [] : this.id($data$$101$$), $event$$135$$), this.$_focusSearch$());
  }, $_shouldOpen$:function($e$$73$$) {
    return this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$ ? !1 : this.$ojContext$._trigger("beforeExpand", $e$$73$$, {component:this.$opts$.element});
  }, $_clearSearch$:function() {
    this.search.val("");
  }}), $_OjSingleCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-component"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3cabbr class\x3d'oj-combobox-clear-entry' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow oj-combobox-icon oj-component-icon oj-clickable-icon-nocontext oj-combobox-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$3$$) {
    $_OjSingleCombobox$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? this.$container$.find(".oj-combobox-arrow").removeClass("oj-disabled") : this.$container$.find(".oj-combobox-arrow").addClass("oj-disabled");
  }, close:function($event$$136$$) {
    this.$_opened$() && $_OjSingleCombobox$$.$superclass$.close.apply(this, arguments);
  }, $_opening$:function($event$$137$$) {
    $_OjSingleCombobox$$.$superclass$.$_opening$.apply(this, arguments);
    this.$_updateResults$(!0);
  }, $_containerKeydownHandler$:function($e$$74$$) {
    $_ComboUtils$$.$KEY$.$isControl$($e$$74$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$74$$) || $_OjSingleCombobox$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
  }, $_updateSelection$:function($data$$102_formatted$$2$$) {
    this.selection.data(this.$_elemNm$, $data$$102_formatted$$2$$);
    null !== $data$$102_formatted$$2$$ && 0 != $data$$102_formatted$$2$$.length ? ($data$$102_formatted$$2$$ = this.$opts$.$formatSelection$($data$$102_formatted$$2$$), void 0 !== $data$$102_formatted$$2$$ && this.search.val() !== $data$$102_formatted$$2$$ && this.search.val($data$$102_formatted$$2$$), this.search.removeClass(this.$_classNm$ + "-default")) : (this.search.val(""), this.$_setPlaceholder$());
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_updateSelectedOption$:function($data$$103_selected$$4_value$$179$$) {
    if (void 0 === $data$$103_selected$$4_value$$179$$ || null === $data$$103_selected$$4_value$$179$$) {
      $data$$103_selected$$4_value$$179$$ = ($data$$103_selected$$4_value$$179$$ = this.$getVal$()) ? Array.isArray($data$$103_selected$$4_value$$179$$) ? Array.isArray($data$$103_selected$$4_value$$179$$) && $data$$103_selected$$4_value$$179$$.length ? {label:$data$$103_selected$$4_value$$179$$[0]} : null : {label:$data$$103_selected$$4_value$$179$$} : null;
    }
    this.$_updateSelection$($data$$103_selected$$4_value$$179$$);
  }}), $_OjSingleSelect$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-component"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'combobox'      aria-autocomplete\x3d'none' aria-expanded\x3d'false' aria-ready\x3d'true'\x3e  \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e  \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e  \x3ca class\x3d'oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-listbox-search-wrapper'\x3e  \x3cdiv class\x3d'oj-listbox-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-listbox-input' title\x3d'Search field'            role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-listbox-spyglass-box'\x3e      \x3cspan class\x3d'oj-component-icon oj-clickable-icon-nocontext oj-listbox-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$4$$) {
    $_OjSingleSelect$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? (this.$container$.find(".oj-select-choice").attr("tabindex", "0"), this.$container$.find(".oj-select-arrow").removeClass("oj-disabled")) : (this.$container$.find(".oj-select-choice").attr("tabindex", "-1"), this.$container$.find(".oj-select-arrow").addClass("oj-disabled"));
  }, close:function($event$$138$$) {
    this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), this.$container$.find(".oj-select-choice").attr("aria-expanded", !1), this.$_testClear$($event$$138$$) || this.$_clearSearch$(), $event$$138$$ instanceof MouseEvent && $event$$138$$.target != this.selection && $event$$138$$.target != this.search || $_ComboUtils$$.$_focus$(this.selection), this.$container$.find(".oj-listbox-spyglass-box").off("mouseup click"));
  }, $_opening$:function($event$$139$$) {
    var $el$$9_range$$12$$, $len$$16$$;
    $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
    this.$container$.find(".oj-select-choice").attr("aria-expanded", !0);
    var $searchText$$;
    $event$$139$$ && "keydown" == $event$$139$$.type && $event$$139$$.which != $_ComboUtils$$.$KEY$.UP && $event$$139$$.which != $_ComboUtils$$.$KEY$.DOWN && $event$$139$$.which != $_ComboUtils$$.$KEY$.LEFT && $event$$139$$.which != $_ComboUtils$$.$KEY$.RIGHT && ($searchText$$ = String.fromCharCode($event$$139$$.which), $_ComboUtils$$.$killEvent$($event$$139$$));
    this.$_showSearchBox$($searchText$$);
    this.$_hasSearchBox$() && ($el$$9_range$$12$$ = this.search.get(0), $el$$9_range$$12$$.createTextRange ? ($el$$9_range$$12$$ = $el$$9_range$$12$$.createTextRange(), $el$$9_range$$12$$.collapse(!1), $el$$9_range$$12$$.select()) : $el$$9_range$$12$$.setSelectionRange && ($len$$16$$ = this.search.val().length, $el$$9_range$$12$$.setSelectionRange($len$$16$$, $len$$16$$)));
    $searchText$$ ? this.$_updateResults$() : this.$_updateResults$(!0);
  }, $_initContainer$:function() {
    var $label$$5_selectedId$$ = this.$containerId$ + "_selected";
    this.text = this.$container$.find(".oj-select-chosen").attr("id", $label$$5_selectedId$$);
    $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
    this.$container$.find(".oj-select-choice").attr({"aria-owns":this.search.attr("aria-owns"), "aria-labelledby":this.search.attr("aria-labelledby"), "aria-describedby":$label$$5_selectedId$$});
    ($label$$5_selectedId$$ = this.$opts$.element.attr("aria-label")) && this.selection.attr("aria-label", $label$$5_selectedId$$);
    this.search.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.search.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
    this.search.attr("title", this.$ojContext$.$getTranslatedString$("seachField"));
    var $self$$79$$ = this;
    this.selection.on("blur", function($e$$75$$) {
      $self$$79$$.$_testClear$($e$$75$$);
    });
  }, $_initSelection$:function() {
    this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments);
  }, $_updateSelectedOption$:function($selected$$5$$) {
    if (void 0 !== $selected$$5$$ && null !== $selected$$5$$) {
      var $selectedVal$$, $value$$180$$ = this.$getVal$(), $value$$180$$ = Array.isArray($value$$180$$) ? $value$$180$$[0] : $value$$180$$;
      $selectedVal$$ = this.$opts$.id($selected$$5$$);
      $value$$180$$ !== $selectedVal$$ && (void 0 === $value$$180$$ || null === $value$$180$$ ? this.$ojContext$.options.value = Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$] : this.$setVal$(Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$]));
      this.$_updateSelection$($selected$$5$$);
      this.close();
    }
  }, $_updateSelection$:function($data$$104$$) {
    this.selection.data(this.$_elemNm$, $data$$104$$);
    null !== $data$$104$$ && this.text.text($data$$104$$.label);
    $data$$104$$ && "" != $data$$104$$.id && this.text.removeClass(this.$_classNm$ + "-default");
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_getActiveContainer$:function() {
    return this.search.attr("aria-expanded") && this.$_hasSearchBox$() ? this.search : this.selection;
  }, $_isPlaceholderOptionSelected$:function() {
    if (null === this.$_getPlaceholder$()) {
      return!1;
    }
    var $cval$$ = this.$getVal$(), $cval$$ = Array.isArray($cval$$) ? $cval$$[0] : $cval$$;
    return "" === $cval$$ || void 0 === $cval$$ || null === $cval$$;
  }, $_getPlaceholder$:function() {
    return this.$opts$.placeholder;
  }, $_showPlaceholder$:function() {
    return!0;
  }, $_setPlaceholder$:function() {
    var $placeholder$$2$$ = this.$_getPlaceholder$();
    this.$_isPlaceholderOptionSelected$() && void 0 !== $placeholder$$2$$ && (void 0 === $placeholder$$2$$ && ($placeholder$$2$$ = ""), this.text.text($placeholder$$2$$).addClass(this.$_classNm$ + "-default"), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $setVal$:function($val$$33$$, $event$$140$$) {
    $_OjSingleSelect$$.$superclass$.$setVal$.call(this, $val$$33$$, $event$$140$$);
    this.selection.data("selectVal", $val$$33$$);
  }, $_containerKeydownHandler$:function($e$$76$$) {
    if (!$_ComboUtils$$.$KEY$.$isControl$($e$$76$$) && !$_ComboUtils$$.$KEY$.$isFunctionKey$($e$$76$$)) {
      switch($e$$76$$.which) {
        case $_ComboUtils$$.$KEY$.TAB:
          this.close($e$$76$$);
          this.selection.focus();
          this.$_testClear$($e$$76$$);
          return;
        case $_ComboUtils$$.$KEY$.ENTER:
          if ($e$$76$$.target === this.selection[0] && !this.$_opened$()) {
            this.open($e$$76$$);
            $_ComboUtils$$.$killEvent$($e$$76$$);
            return;
          }
        ;
      }
      var $hasSearchBoxAlready$$ = this.$_hasSearchBox$();
      $_OjSingleSelect$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
      if (!$hasSearchBoxAlready$$ && this.$_userTyping$) {
        var $c$$35$$;
        $e$$76$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$76$$.which != $_ComboUtils$$.$KEY$.RIGHT && ($c$$35$$ = String.fromCharCode($e$$76$$.which));
        this.$_showSearchBox$($c$$35$$);
        this.$_updateResults$();
        $_ComboUtils$$.$killEvent$($e$$76$$);
      }
    }
  }, $_testClear$:function($event$$141$$) {
    return "" == this.text.text() ? (this.$_clear$($event$$141$$), !0) : !1;
  }, $_showSearchBox$:function($searchText$$1$$) {
    var $focusOnSearchBox$$ = !1, $searchBox$$ = this.$dropdown$.find(".oj-listbox-search");
    $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-listbox-search-wrapper").removeClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).removeAttr("aria-hidden"), this.search.val($searchText$$1$$), $focusOnSearchBox$$ = !0) : (this.$dropdown$.find(".oj-listbox-search-wrapper").addClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).attr("aria-hidden", "true")));
    $_ComboUtils$$.$_focus$($focusOnSearchBox$$ ? this.search : this.selection);
    if ($focusOnSearchBox$$) {
      var $self$$80$$ = this;
      $searchBox$$.find(".oj-listbox-spyglass-box").on("mouseup click", function($e$$77$$) {
        $self$$80$$.search.focus();
        $e$$77$$.stopPropagation();
      });
    }
  }, $_hasSearchBox$:function() {
    var $threshold$$ = this.$opts$.minimumResultsForSearch;
    return(this.$opts$.list ? $$$$12$$("#" + this.$opts$.list).find("li").length : this.$datalist$ ? this.$datalist$[0].length : this.$opts$.options ? this.$opts$.options.length : 0) > $threshold$$ || this.$_userTyping$;
  }}), $_AbstractMultiChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_prepareOpts$:function() {
    var $opts$$17$$ = $_AbstractMultiChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$81$$ = this, $tagName$$4$$ = $opts$$17$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$4$$ && $opts$$17$$.element.attr("list") || "select" === $tagName$$4$$ && 0 < $opts$$17$$.element.children().length || $opts$$17$$.list) {
      var $eleName$$1$$ = $opts$$17$$.list ? "li" : "option";
      $opts$$17$$.$initSelection$ = function $$opts$$17$$$$initSelection$$($element$$79$$, $callback$$90$$) {
        var $data$$105$$ = [];
        if ($self$$81$$.$getVal$()) {
          for (var $selected$$6$$, $ids$$ = $self$$81$$.$getVal$(), $i$$190$$ = 0;$i$$190$$ < $ids$$.length;$i$$190$$++) {
            var $id$$25$$ = $ids$$[$i$$190$$];
            ($selected$$6$$ = $element$$79$$.find($eleName$$1$$).filter(function() {
              if ("option" === $eleName$$1$$) {
                return this.value === $id$$25$$;
              }
              if ("li" === $eleName$$1$$) {
                return this.getAttribute("oj-data-value") === $id$$25$$;
              }
            })) && $selected$$6$$.length ? $data$$105$$.push($self$$81$$.$_optionToData$($selected$$6$$)) : $data$$105$$.push({value:$id$$25$$, label:$id$$25$$});
          }
        } else {
          "select" !== $tagName$$4$$ && ($selected$$6$$ = $element$$79$$.find($eleName$$1$$).filter(function() {
            if ("option" === $eleName$$1$$) {
              return this.selected;
            }
            if ("li" === $eleName$$1$$) {
              return!0 === this.getAttribute("oj-data-selected");
            }
          }), $_ComboUtils$$.$each2$($selected$$6$$, function($i$$191$$, $elm$$4$$) {
            $data$$105$$.push($self$$81$$.$_optionToData$($elm$$4$$));
          }));
        }
        $callback$$90$$($data$$105$$);
      };
    } else {
      "options" in $opts$$17$$ && ($opts$$17$$.$initSelection$ = $opts$$17$$.$initSelection$ || function($element$$80$$, $callback$$91$$) {
        var $ids$$1$$ = $self$$81$$.$getVal$(), $matches$$3$$ = [];
        $opts$$17$$.$query$({$matcher$:function($is_match$$2_term$$6$$, $text$$13$$, $el$$10$$) {
          ($is_match$$2_term$$6$$ = $$$$12$$.grep($ids$$1$$, function($id$$26$$) {
            return $id$$26$$ === $opts$$17$$.id($el$$10$$);
          }).length) && $matches$$3$$.push($el$$10$$);
          return $is_match$$2_term$$6$$;
        }, $callback$:$$$$12$$.isFunction($callback$$91$$) ? function() {
          for (var $ordered$$ = [], $i$$192$$ = 0;$i$$192$$ < $ids$$1$$.length;$i$$192$$++) {
            for (var $id$$27$$ = $ids$$1$$[$i$$192$$], $found$$4$$ = !1, $j$$25$$ = 0;$j$$25$$ < $matches$$3$$.length;$j$$25$$++) {
              var $match$$18$$ = $matches$$3$$[$j$$25$$];
              if ($id$$27$$ === $opts$$17$$.id($match$$18$$)) {
                $ordered$$.push($match$$18$$);
                $matches$$3$$.splice($j$$25$$, 1);
                $found$$4$$ = !0;
                break;
              }
            }
            $found$$4$$ || $ordered$$.push({value:$id$$27$$, label:$id$$27$$});
          }
          $callback$$91$$($ordered$$);
        } : $$$$12$$.noop});
      });
    }
    return $opts$$17$$;
  }, $_selectChoice$:function($choice$$2$$) {
    var $selected$$7$$ = this.$container$.find("." + this.$_classNm$ + "-selected-choice.oj-focus");
    $selected$$7$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$7$$[0] || ($selected$$7$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$7$$), $selected$$7$$.removeClass("oj-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass("oj-focus"), this.$container$.find("." + this.$_classNm$ + "-description").text($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", "assertive"), this.$opts$.element.trigger("choice-selected", 
    $choice$$2$$)));
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractMultiChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_initContainer$:function() {
    var $selector$$18$$ = "." + this.$_classNm$ + "-choices", $selection$$2$$, $idSuffix$$1$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$1$$;
    this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
    this.selection = $selection$$2$$ = this.$container$.find($selector$$18$$);
    var $_this$$ = this;
    this.selection.on("click", "." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)", function() {
      $_this$$.search[0].focus();
      $_this$$.$_selectChoice$($$$$12$$(this));
    });
    $elementLabel$$1$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$1$$.attr("id") || $elementLabel$$1$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
    $selection$$2$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$1$$);
    this.$results$.attr("id") || this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-owns", this.$results$.attr("id"));
    this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.$opts$.element.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.search.attr("id") && $elementLabel$$1$$.attr("for", this.search.attr("id"));
    this.$opts$.element.attr("aria-label") && this.search.attr("aria-label", this.$opts$.element.attr("aria-label"));
    this.$opts$.element.attr("aria-controls") && this.search.attr("aria-controls", this.$opts$.element.attr("aria-controls"));
    this.search.attr("tabindex", this.$elementTabIndex$);
    this.$keydowns$ = 0;
    this.search.on("keydown", this.$_bind$(function($e$$79$$) {
      if (this.$_isInterfaceEnabled$()) {
        ++this.$keydowns$;
        var $selected$$8$$ = $selection$$2$$.find("." + this.$_classNm$ + "-selected-choice.oj-focus"), $prev$$ = $selected$$8$$.prev("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $next$$ = $selected$$8$$.next("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $pos$$8_selectedChoice$$ = $_ComboUtils$$.$getCursorInfo$(this.search);
        if (!$selected$$8$$.length || $e$$79$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$79$$.which != $_ComboUtils$$.$KEY$.RIGHT && $e$$79$$.which != $_ComboUtils$$.$KEY$.$BACKSPACE$ && $e$$79$$.which != $_ComboUtils$$.$KEY$.$DELETE$ && $e$$79$$.which != $_ComboUtils$$.$KEY$.ENTER) {
          if (($e$$79$$.which !== $_ComboUtils$$.$KEY$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$79$$.which != $_ComboUtils$$.$KEY$.LEFT || 0 != $pos$$8_selectedChoice$$.offset || $pos$$8_selectedChoice$$.length) {
            this.$_selectChoice$(null);
            if (this.$_opened$()) {
              switch($e$$79$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.$_moveHighlight$($e$$79$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1);
                  $_ComboUtils$$.$killEvent$($e$$79$$);
                  return;
                case $_ComboUtils$$.$KEY$.ENTER:
                  this.$_selectHighlighted$(null, $e$$79$$);
                  $_ComboUtils$$.$killEvent$($e$$79$$);
                  return;
                case $_ComboUtils$$.$KEY$.TAB:
                  this.close($e$$79$$);
                  return;
                case $_ComboUtils$$.$KEY$.$ESC$:
                  this.$_cancel$($e$$79$$);
                  return;
              }
            }
            $e$$79$$.which === $_ComboUtils$$.$KEY$.TAB || $_ComboUtils$$.$KEY$.$isControl$($e$$79$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$79$$) || $e$$79$$.which === $_ComboUtils$$.$KEY$.$ESC$ || $e$$79$$.which === $_ComboUtils$$.$KEY$.ENTER && this.search.val() && "ojcombobox" === this.$_elemNm$ || (this.open(), $e$$79$$.which !== $_ComboUtils$$.$KEY$.PAGE_UP && $e$$79$$.which !== $_ComboUtils$$.$KEY$.PAGE_DOWN || $_ComboUtils$$.$killEvent$($e$$79$$), $e$$79$$.which === $_ComboUtils$$.$KEY$.ENTER && 
            $_ComboUtils$$.$killEvent$($e$$79$$));
          } else {
            this.$_selectChoice$($selection$$2$$.find("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)").last()), $_ComboUtils$$.$killEvent$($e$$79$$);
          }
        } else {
          $pos$$8_selectedChoice$$ = $selected$$8$$, $e$$79$$.which == $_ComboUtils$$.$KEY$.LEFT && $prev$$.length ? $pos$$8_selectedChoice$$ = $prev$$ : $e$$79$$.which == $_ComboUtils$$.$KEY$.RIGHT ? $pos$$8_selectedChoice$$ = $next$$.length ? $next$$ : null : $e$$79$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ ? (this.$_unselect$($selected$$8$$.first(), $e$$79$$), this.search.width(10), $pos$$8_selectedChoice$$ = $prev$$.length ? $prev$$ : $next$$) : $e$$79$$.which == $_ComboUtils$$.$KEY$.$DELETE$ ? 
          (this.$_unselect$($selected$$8$$.first(), $e$$79$$), this.search.width(10), $pos$$8_selectedChoice$$ = $next$$.length ? $next$$ : null) : $e$$79$$.which == $_ComboUtils$$.$KEY$.ENTER && ($pos$$8_selectedChoice$$ = null), this.$_selectChoice$($pos$$8_selectedChoice$$), $_ComboUtils$$.$killEvent$($e$$79$$), $pos$$8_selectedChoice$$ && $pos$$8_selectedChoice$$.length || this.open();
        }
      }
    }));
    this.search.on("keyup", this.$_bind$(function() {
      this.$keydowns$ = 0;
    }));
    this.search.on("blur keyup", this.$_bind$(function($e$$81$$) {
      if ("keyup" !== $e$$81$$.type || 10 === $e$$81$$.keyCode || 13 === $e$$81$$.keyCode) {
        if (this.$opts$.manageNewEntry && this.search.val() && 0 >= this.$results$.find(".oj-hover").length) {
          var $data$$106$$ = this.$opts$.manageNewEntry(this.search.val());
          this.$_onSelect$($data$$106$$, null, $e$$81$$);
        }
        this.search.removeClass(this.$_classNm$ + "-focused");
        this.$_selectChoice$(null);
        this.$_opened$() || this.$_clearSearch$();
        $e$$81$$.stopImmediatePropagation();
      }
    }));
    this.$container$.on("click", $selector$$18$$, this.$_bind$(function($e$$82$$) {
      !this.$_isInterfaceEnabled$() || 0 < $$$$12$$($e$$82$$.target).closest("." + this.$_classNm$ + "-selected-choice").length || (this.$_selectChoice$(null), this.$_opened$() ? this.close($e$$82$$) : (this.open(), this.$_focusSearch$()), $e$$82$$.preventDefault());
    }));
    this.$container$.on("focus", $selector$$18$$, this.$_bind$(function() {
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_clearSearch$();
  }, $_enableInterface$:function() {
    $_AbstractMultiChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_initSelection$:function() {
    null !== this.$getVal$() && 0 !== this.$getVal$().length || "oj-select" !== this.$_classNm$ && "" !== this.$opts$.element.text() || (this.$_updateSelection$([]), this.close(), this.$_clearSearch$());
    if (this.$datalist$ || null !== this.$getVal$() && this.$getVal$().length) {
      var $self$$82$$ = this;
      this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$108$$) {
        void 0 !== $data$$108$$ && null !== $data$$108$$ && 0 !== $data$$108$$.length && ($self$$82$$.$_updateSelection$($data$$108$$), $self$$82$$.close(), $self$$82$$.$_clearSearch$());
      });
    }
  }, $_clearSearch$:function() {
    var $placeholder$$3$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
    void 0 === $placeholder$$3$$ || this.$getVal$() && 0 !== this.$getVal$().length ? (this.search.attr("placeholder", ""), this.search.val("").width(10), this.$searchContainer$.width("auto")) : (this.search.attr("placeholder", $placeholder$$3$$), this.search.val("").width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width")), this.$searchContainer$.width("100%"));
  }, $_opening$:function($event$$142$$) {
    this.$ojContext$._trigger("beforeExpand", $event$$142$$) && (this.$_resizeSearch$(), $_AbstractMultiChoice$$.$superclass$.$_opening$.apply(this, arguments), this.$_focusSearch$(), this.$_updateResults$(!0), this.search.focus());
  }, close:function($event$$143$$) {
    this.$_opened$() && $_AbstractMultiChoice$$.$superclass$.close.apply(this, arguments);
  }, $_focus$:function() {
    this.close();
    this.search.focus();
  }, $_updateSelection$:function($data$$109$$) {
    var $ids$$2$$ = [], $filtered$$1$$ = [], $self$$83$$ = this;
    $$$$12$$($data$$109$$).each(function() {
      0 > $ids$$2$$.indexOf($self$$83$$.id(this)) && ($ids$$2$$.push($self$$83$$.id(this)), $filtered$$1$$.push(this));
    });
    $data$$109$$ = $filtered$$1$$;
    this.selection.find("." + this.$_classNm$ + "-selected-choice").remove();
    $$$$12$$($data$$109$$).each(function() {
      $self$$83$$.$_addSelectedChoice$(this);
    });
    this.$opts$.element.val(0 === $data$$109$$.length ? "" : $data$$109$$.join(this.$opts$.separator));
    $self$$83$$.$_postprocessResults$();
  }, $_onSelect$:function($data$$110$$, $options$$269$$, $event$$144$$) {
    if (this.$_triggerSelect$($data$$110$$)) {
      var $id$$28$$ = this.id($data$$110$$), $val$$34$$ = this.$getVal$() ? this.$getVal$().slice(0) : [];
      this.$ojContext$.isValid() || ($val$$34$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));
      $$$$12$$($data$$110$$).each(function() {
        0 > $val$$34$$.indexOf($id$$28$$) && $val$$34$$.push($id$$28$$);
      });
      this.$setVal$($val$$34$$, $event$$144$$);
      !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$110$$, !1, !0 === this.$opts$.$closeOnSelect$);
      this.$opts$.$closeOnSelect$ && (this.close($event$$144$$), this.search.width(10));
      $options$$269$$ && $options$$269$$.$noFocus$ || this.$_focusSearch$();
    }
  }, $_cancel$:function($event$$145$$) {
    this.close($event$$145$$);
    this.$_focusSearch$();
  }, $_addSelectedChoice$:function($data$$111$$) {
    var $enableChoice$$ = !$data$$111$$.locked, $choice$$3_enabledItem$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + "-selected-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' class\x3d'" + this.$_classNm$ + "-clear-entry       oj-component-icon oj-clickable-icon-nocontext " + this.$_classNm$ + "-clear-entry-icon' tabindex\x3d'-1'\x3e    \x3c/a\x3e\x3c/li\x3e"), $disabledItem_formatted$$3$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + "-selected-choice " + 
    this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_formatted$$3$$;
    this.id($data$$111$$);
    $disabledItem_formatted$$3$$ = this.$opts$.$formatSelection$($data$$111$$);
    void 0 !== $disabledItem_formatted$$3$$ && ($choice$$3_enabledItem$$.find("div").addClass(this.$_classNm$ + "-selected-choice-label").text($disabledItem_formatted$$3$$), $choice$$3_enabledItem$$.attr("valueText", $disabledItem_formatted$$3$$));
    if ($enableChoice$$) {
      $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-clear-entry").on("mousedown", $_ComboUtils$$.$killEvent$).on("click dblclick", this.$_bind$(function($e$$83$$) {
        this.$_isInterfaceEnabled$() && ($$$$12$$($e$$83$$.target).closest("." + this.$_classNm$ + "-selected-choice").fadeOut("fast", this.$_bind$(function() {
          this.$_unselect$($$$$12$$($e$$83$$.target), $e$$83$$);
          this.selection.find("." + this.$_classNm$ + "-selected-choice.oj-focus").removeClass("oj-focus");
          this.close($e$$83$$);
          this.$_focusSearch$();
        })).dequeue(), $_ComboUtils$$.$killEvent$($e$$83$$));
      }));
    }
    $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$111$$);
    $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
  }, $_unselect$:function($selected$$9$$, $event$$146$$) {
    var $val$$35$$ = this.$getVal$() ? this.$getVal$().slice(0) : [], $data$$112$$, $index$$135$$;
    $selected$$9$$ = $selected$$9$$.closest("." + this.$_classNm$ + "-selected-choice");
    if (0 === $selected$$9$$.length) {
      throw "Invalid argument: " + $selected$$9$$ + ". Must be ." + this.$_classNm$ + "-selected-choice";
    }
    if ($data$$112$$ = $selected$$9$$.data(this.$_elemNm$)) {
      for (this.$ojContext$.isValid() || ($val$$35$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));0 <= ($index$$135$$ = $val$$35$$.indexOf(this.id($data$$112$$)));) {
        $val$$35$$.splice($index$$135$$, 1), this.$setVal$($val$$35$$, $event$$146$$), this.select && this.$_postprocessResults$();
      }
      $selected$$9$$.remove();
    }
  }, $_postprocessResults$:function() {
    var $val$$36$$ = this.$getVal$() && (this.$opts$.element.val() || this.$ojContext$.isValid()) ? this.$getVal$() : [], $choices$$3$$ = this.$results$.find(".oj-listbox-result"), $compound$$ = this.$results$.find(".oj-listbox-result-with-children"), $self$$84$$ = this;
    $_ComboUtils$$.$each2$($choices$$3$$, function($i$$193$$, $choice$$4$$) {
      var $id$$30$$ = $self$$84$$.id($choice$$4$$.data($self$$84$$.$_elemNm$));
      $val$$36$$ && 0 <= $val$$36$$.indexOf($id$$30$$) && ($choice$$4$$.addClass("oj-selected"), $choice$$4$$.find(".oj-listbox-result-selectable").addClass("oj-selected"));
    });
    $_ComboUtils$$.$each2$($compound$$, function($i$$194$$, $choice$$5$$) {
      $choice$$5$$.is(".oj-listbox-result-selectable") || 0 !== $choice$$5$$.find(".oj-listbox-result-selectable:not(.oj-selected)").length || $choice$$5$$.addClass("oj-selected");
    });
    0 < !$choices$$3$$.filter(".oj-listbox-result:not(.oj-selected)").length && this.close();
  }, $_getMaxSearchWidth$:function() {
    return this.selection.width() - $_ComboUtils$$.$getSideBorderPadding$(this.search);
  }, $_textWidth$:function($text$$14_textNode$$) {
    var $textSpan_width$$16$$ = document.createElement("span");
    $text$$14_textNode$$ = document.createTextNode($text$$14_textNode$$);
    $textSpan_width$$16$$.style.display = "none";
    $textSpan_width$$16$$.appendChild($text$$14_textNode$$);
    $$$$12$$("body").append($textSpan_width$$16$$);
    $textSpan_width$$16$$ = $$$$12$$("body").find("span:last").width();
    $$$$12$$("body").find("span:last").remove();
    return $textSpan_width$$16$$;
  }, $_resizeSearch$:function() {
    var $minimumWidth$$, $left$$5_searchWidth$$, $maxWidth$$1$$, $containerLeft$$, $sideBorderPadding$$ = $_ComboUtils$$.$getSideBorderPadding$(this.search);
    $minimumWidth$$ = this.$_textWidth$(this.search.val()) + 10;
    $left$$5_searchWidth$$ = this.search.offset().left;
    $maxWidth$$1$$ = this.selection.width();
    $containerLeft$$ = this.selection.offset().left;
    $left$$5_searchWidth$$ = $maxWidth$$1$$ - ($left$$5_searchWidth$$ - $containerLeft$$) - $sideBorderPadding$$;
    $left$$5_searchWidth$$ < $minimumWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    40 > $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    0 >= $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $minimumWidth$$);
    this.search.width(Math.floor($left$$5_searchWidth$$));
  }, $setVal$:function($val$$37$$, $event$$147$$) {
    var $unique$$;
    $unique$$ = [];
    "string" === typeof $val$$37$$ && ($val$$37$$ = $_ComboUtils$$.$splitVal$($val$$37$$, this.$opts$.separator));
    for (var $i$$195$$ = 0;$i$$195$$ < $val$$37$$.length;$i$$195$$++) {
      0 > $unique$$.indexOf($val$$37$$[$i$$195$$]) && $unique$$.push($val$$37$$[$i$$195$$]);
    }
    this.$ojContext$.$_SetValue$($unique$$, $event$$147$$, {$doValueChangeCheck$:!1});
    this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
    this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"));
  }}), $_OjMultiCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractMultiChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-component"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi' style\x3d'display:none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }}), $_OjMultiSelect$$ = $_ComboUtils$$.$clazz$($_AbstractMultiChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-select-multi oj-component"}).html("\x3cul class\x3d'oj-select-choices'\x3e  \x3cli class\x3d'oj-select-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-listbox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-select-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi' style\x3d'display:none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }});
  $oj$$12$$.$__registerWidget$("oj.ojCombobox", $$$$12$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:void 0, placeholder:void 0, list:void 0, multiple:!1, options:null, optionsKeys:null, beforeExpand:null}, widget:function() {
    return this.$combobox$.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_InitOptions$:function($originalDefaults$$6$$, $constructorOptions$$8$$) {
    this._super($originalDefaults$$6$$, $constructorOptions$$8$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:null, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}], $constructorOptions$$8$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$181$$ = this.options.value;
      Array.isArray($value$$181$$) ? $value$$181$$ = $value$$181$$.slice(0) : "string" === typeof $value$$181$$ && ($value$$181$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($value$$181$$, ",") : [$value$$181$$]);
      this.options.value = $value$$181$$;
    }
  }, $_setup$:function() {
    var $opts$$18$$ = {}, $multiple$$ = this.options.multiple;
    $opts$$18$$.element = this.element;
    $opts$$18$$.$ojContext$ = this;
    $opts$$18$$ = $$$$12$$.extend(this.options, $opts$$18$$);
    this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
    this.$combobox$._init($opts$$18$$);
  }, _destroy:function() {
    this.$combobox$._destroy();
    this._super();
  }, refresh:function() {
    this._super();
    this.$combobox$._destroy();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _setOption:function($key$$71$$, $value$$182$$, $flags$$17$$) {
    "value" === $key$$71$$ && (Array.isArray($value$$182$$) ? $value$$182$$ = $value$$182$$.slice(0) : "string" === typeof $value$$182$$ && ($value$$182$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($value$$182$$, ",") : [$value$$182$$]));
    this._super($key$$71$$, $value$$182$$, $flags$$17$$);
    "options" === $key$$71$$ && (this.$combobox$.$opts$.options = $value$$182$$, this.$combobox$.$opts$ = this.$combobox$.$_prepareOpts$(this.$combobox$.$opts$));
    "disabled" === $key$$71$$ && ($value$$182$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$());
  }, $_NotifyDetached$:function() {
    this.$combobox$.close();
  }, $_NotifyHidden$:function() {
    this.$combobox$.close();
  }, $_SetDisplayValue$:function() {
    this.$combobox$.$_initSelection$();
  }, $_SetPlaceholder$:function($value$$183$$) {
    this.$combobox$ && (this.$combobox$.$opts$.placeholder = $value$$183$$, this.$combobox$.$_setPlaceholder$ && this.$combobox$.$_setPlaceholder$());
  }, validate:function() {
    var $displayValue$$4$$ = this.$combobox$.search.val(), $existingValue_newValue$$6$$ = null;
    !0 !== this.options.multiple ? $existingValue_newValue$$6$$ = void 0 === $displayValue$$4$$ || null === $displayValue$$4$$ || "" === $displayValue$$4$$ ? [] : [$displayValue$$4$$] : ($existingValue_newValue$$6$$ = this.$combobox$.$getVal$(), $existingValue_newValue$$6$$ = void 0 === $displayValue$$4$$ || null === $displayValue$$4$$ || "" === $displayValue$$4$$ ? $existingValue_newValue$$6$$ : $existingValue_newValue$$6$$.push($displayValue$$4$$));
    return this.$_SetValue$($existingValue_newValue$$6$$, null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_parseValue$:function($submittedValue$$2$$) {
    var $parsedVal$$ = [];
    "string" === typeof $submittedValue$$2$$ && ($submittedValue$$2$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($submittedValue$$2$$, ",") : [$submittedValue$$2$$]);
    if (Array.isArray($submittedValue$$2$$)) {
      for (var $i$$196$$ = 0;$i$$196$$ < $submittedValue$$2$$.length;$i$$196$$++) {
        var $parsed$$2$$ = this._super($submittedValue$$2$$[$i$$196$$]);
        $parsedVal$$.push($parsed$$2$$.toString());
      }
    }
    return $parsedVal$$;
  }, _GetMessagingLauncherElement:function() {
    return this.$combobox$.search;
  }, $_GetContentElement$:function() {
    return this.$combobox$.search;
  }, _GetDefaultStyleClass:function() {
    return "oj-combobox";
  }, $_getDropdown$:function() {
    if (this.$combobox$ && this.$combobox$.$_opened$()) {
      for (var $dropdown$$4$$ = $$$$12$$(".oj-listbox-drop"), $i$$197$$ = 0;$i$$197$$ < $dropdown$$4$$.length;$i$$197$$++) {
        if ("oj-listbox-drop" == $$$$12$$($dropdown$$4$$[$i$$197$$]).attr("id") && $$$$12$$($dropdown$$4$$[$i$$197$$]).attr("data-oj-containerid") == this.$combobox$.$containerId$) {
          return $$$$12$$($dropdown$$4$$[$i$$197$$]);
        }
      }
    }
    return null;
  }, getNodeBySubId:function($locator$$12_subId$$7$$) {
    var $node$$29$$ = null;
    if (null == $locator$$12_subId$$7$$) {
      return this.$combobox$.$container$ ? this.$combobox$.$container$[0] : null;
    }
    $node$$29$$ = this._super($locator$$12_subId$$7$$);
    if (!$node$$29$$) {
      $locator$$12_subId$$7$$ = $locator$$12_subId$$7$$.subId;
      "oj-combobox-drop" === $locator$$12_subId$$7$$ && ($locator$$12_subId$$7$$ = "oj-listbox-drop");
      "oj-combobox-results" === $locator$$12_subId$$7$$ && ($locator$$12_subId$$7$$ = "oj-listbox-results");
      "oj-combobox-selection" === $locator$$12_subId$$7$$ && ($locator$$12_subId$$7$$ = "oj-combobox-selected-choice");
      var $dropdown$$5$$ = this.$_getDropdown$();
      switch($locator$$12_subId$$7$$) {
        case "oj-combobox-input":
        ;
        case "oj-combobox-arrow":
          $node$$29$$ = this.widget().find("." + $locator$$12_subId$$7$$)[0];
          break;
        case "oj-listbox-drop":
          $dropdown$$5$$ && ($node$$29$$ = $dropdown$$5$$[0]);
          break;
        case "oj-listbox-results":
          $dropdown$$5$$ && ($node$$29$$ = $dropdown$$5$$.find("." + $locator$$12_subId$$7$$)[0]);
          break;
        case "oj-combobox-selected-choice":
          $node$$29$$ = this.widget().find("." + $locator$$12_subId$$7$$).toArray();
      }
    }
    return $node$$29$$ || null;
  }});
  $oj$$12$$.$__registerWidget$("oj.ojSelect", $$$$12$$.oj.editableValue, {defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:void 0, list:void 0, multiple:!1, options:null, optionsKeys:null, beforeExpand:null}, widget:function() {
    return this.select.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    var $opts$$19$$ = {}, $multiple$$1$$ = this.options.multiple;
    $opts$$19$$.element = this.element;
    $opts$$19$$.$ojContext$ = this;
    $opts$$19$$ = $$$$12$$.extend(this.options, $opts$$19$$);
    this.select = $multiple$$1$$ ? new $_OjMultiSelect$$ : new $_OjSingleSelect$$;
    this.select._init($opts$$19$$);
  }, refresh:function() {
    this._super();
    this.select._destroy();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _destroy:function() {
    this.select._destroy();
    this._super();
  }, $_NotifyDetached$:function() {
    this.select.close();
  }, $_NotifyHidden$:function() {
    this.select.close();
  }, $_SetPlaceholder$:function() {
  }, $_HasPlaceholderSet$:function() {
    return "string" === typeof this.options.placeholder;
  }, $_ClearPlaceholder$:function() {
    this.$_SetPlaceholderOption$(null);
    this.$_SetPlaceholder$(null);
  }, $_InitOptions$:function($originalDefaults$$7$$, $constructorOptions$$9$$) {
    this._super($originalDefaults$$7$$, $constructorOptions$$9$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:null, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:null}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}], $constructorOptions$$9$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$185$$ = this.options.value;
      Array.isArray($value$$185$$) && ($value$$185$$ = $value$$185$$.slice(0));
      this.options.value = $value$$185$$;
    }
  }, validate:function() {
    return this.select ? this.$_SetValue$(this.select.$getVal$(), null, this.$_VALIDATE_METHOD_OPTIONS$) : !0;
  }, $_SetDisplayValue$:function() {
    this.select.$_initSelection$();
  }, _setOption:function($key$$72$$, $value$$186$$, $flags$$18$$) {
    if ("value" === $key$$72$$) {
      if (this.$_HasPlaceholderSet$() && $value$$186$$ && 0 == $value$$186$$.length) {
        this._super($key$$72$$, $value$$186$$, $flags$$18$$);
      } else {
        var $strVal$$ = $value$$186$$;
        Array.isArray($value$$186$$) && ($value$$186$$ = $value$$186$$.slice(0), !0 !== this.options.multiple && ($strVal$$ = $value$$186$$[0]));
        var $element$$82$$ = this.select.$datalist$;
        $element$$82$$ || ($element$$82$$ = this.select.$opts$.element);
        (!0 !== this.options.multiple && this.select.$opts$.validate($element$$82$$, $strVal$$) || this.options.multiple) && this._super($key$$72$$, $value$$186$$, $flags$$18$$);
      }
    } else {
      "placeholder" === $key$$72$$ ? (this.select.$opts$.placeholder = $value$$186$$, this.select.$_setPlaceholder$()) : "minimumResultsForSearch" === $key$$72$$ && (this.select.$opts$.minimumResultsForSearch = $value$$186$$), this._super($key$$72$$, $value$$186$$, $flags$$18$$), "disabled" === $key$$72$$ ? $value$$186$$ ? this.select.$_disable$() : this.select.$_enable$() : "options" === $key$$72$$ && (this.select.$opts$.options = $value$$186$$, this.select.$opts$ = this.select.$_prepareOpts$(this.select.$opts$), 
      this._super("value", this.select.$getVal$()));
    }
  }, $_getDropdown$:function() {
    if (this.select && this.select.$_opened$()) {
      var $dropdown$$6$$ = this.select.$dropdown$;
      if ($dropdown$$6$$ && $dropdown$$6$$.attr("data-oj-containerid") === this.select.$containerId$) {
        return $dropdown$$6$$;
      }
    }
    return null;
  }, getNodeBySubId:function($index$$136_locator$$13$$) {
    var $node$$30$$ = null, $subId$$8$$;
    if (null == $index$$136_locator$$13$$) {
      return this.select.$container$ ? this.select.$container$[0] : null;
    }
    $node$$30$$ = this._super($index$$136_locator$$13$$);
    if (!$node$$30$$) {
      switch($subId$$8$$ = $index$$136_locator$$13$$.subId, "oj-select-drop" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-drop"), "oj-select-results" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-results"), "oj-select-search" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-search"), $subId$$8$$) {
        case "oj-select-choice":
        ;
        case "oj-select-chosen":
          $node$$30$$ = this.widget().find("." + $subId$$8$$)[0];
          break;
        case "oj-listbox-drop":
          var $ddlist_dropdown$$7$$ = this.$_getDropdown$();
          $ddlist_dropdown$$7$$ && ($node$$30$$ = $ddlist_dropdown$$7$$[0]);
          break;
        case "oj-listbox-input":
        ;
        case "oj-listbox-search":
        ;
        case "oj-listbox-results":
          ($ddlist_dropdown$$7$$ = this.$_getDropdown$()) && ($node$$30$$ = $ddlist_dropdown$$7$$.find("." + $subId$$8$$)[0]);
          break;
        case "oj-listbox-result-label":
          this.$_getDropdown$() && ($ddlist_dropdown$$7$$ = $$$$12$$("#" + this.select.$results$.attr("id")).children(), $index$$136_locator$$13$$ = $index$$136_locator$$13$$.index, $ddlist_dropdown$$7$$.length && $index$$136_locator$$13$$ < $ddlist_dropdown$$7$$.length && ($node$$30$$ = $ddlist_dropdown$$7$$.eq($index$$136_locator$$13$$).find("." + $subId$$8$$)[0]));
      }
    }
    return $node$$30$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-select";
  }, _GetMessagingLauncherElement:function() {
    return this.select.selection;
  }, $_GetContentElement$:function() {
    return this.select.selection;
  }});
  $oj$$12$$.Components.$setDefaultOptions$({ojSelect:{displayOptions:{converterHint:["none"]}}});
});
