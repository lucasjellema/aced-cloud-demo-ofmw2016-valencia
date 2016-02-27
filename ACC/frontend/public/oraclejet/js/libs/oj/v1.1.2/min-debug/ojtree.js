/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$59$$, $$$$54$$) {
  (function() {
    function $_addKeyFilter$$($obj$$59$$) {
      $_aKeyHandlerStack$$.push($obj$$59$$);
      $$$$54$$($obj$$59$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$113$$) {
      var $s$$10$$ = "";
      $oj$$59$$.$DomUtils$.$isMetaKeyPressed$($e$$113$$) ? $s$$10$$ += "ctrl+" : $e$$113$$.shiftKey && ($s$$10$$ += "shift+");
      var $key$$162$$ = $e$$113$$.which;
      switch($key$$162$$) {
        case 32:
          $s$$10$$ += "space";
          break;
        case 37:
          $s$$10$$ += "left";
          break;
        case 38:
          $s$$10$$ += "up";
          break;
        case 39:
          $s$$10$$ += "right";
          break;
        case 40:
          $s$$10$$ += "down";
          break;
        case 46:
          $s$$10$$ += "del";
          break;
        case 33:
          $s$$10$$ += "pgup";
          break;
        case 34:
          $s$$10$$ += "pgdn";
          break;
        case 35:
          $s$$10$$ += "end";
          break;
        case 36:
          $s$$10$$ += "home";
          break;
        case 56:
          $s$$10$$ = "*";
          break;
        case 113:
        ;
        case 121:
          $s$$10$$ += "f" + (1 - (112 - $key$$162$$));
      }
      if (0 !== $s$$10$$.length && "shift+" != $s$$10$$ && "ctrl+" != $s$$10$$) {
        var $retHandler$$ = null;
        $$$$54$$.each($_aKeyHandlerStack$$, function($i$$419$$, $obj$$60$$) {
          if ($obj$$60$$.$_this$.$_data$.ui.$focused$) {
            return $obj$$60$$.$_this$.$_data$.ui.$touchEvent$ = !1, "shift+f10" == $s$$10$$ ? $obj$$60$$.$_this$.$_data$.menu.$activenode$ = $obj$$60$$.$_this$.$_data$.ui.$hovered$ : $obj$$60$$.$_handler$[$s$$10$$] && ($e$$113$$.preventDefault(), $retHandler$$ = $obj$$60$$.$_handler$[$s$$10$$].call($obj$$60$$.$_this$, $e$$113$$)), !1;
          }
        });
        if (null != $retHandler$$) {
          return $retHandler$$;
        }
      }
    }
    function $_removeKeyFilter$$($selector$$40$$) {
      $$$$54$$.each($_aKeyHandlerStack$$, function($i$$420$$) {
        if ($_aKeyHandlerStack$$[$i$$420$$].$_selector$ === $selector$$40$$) {
          return $$$$54$$($selector$$40$$).off("keydown"), $_aKeyHandlerStack$$[$i$$420$$] = null, $_aKeyHandlerStack$$.splice($i$$420$$, 1), !1;
        }
      });
    }
    function $_addSheet$$($opts$$38$$) {
      var $tmp$$3$$ = !1, $isNew$$8$$ = !0;
      $opts$$38$$.$str$ && ($opts$$38$$.title && ($tmp$$3$$ = $$$$54$$("style[id\x3d'" + $opts$$38$$.title + "-stylesheet']")[0]), $tmp$$3$$ ? $isNew$$8$$ = !1 : ($tmp$$3$$ = document.createElement("style"), $tmp$$3$$.setAttribute("type", "text/css"), $opts$$38$$.title && $tmp$$3$$.setAttribute("id", $opts$$38$$.title + "-stylesheet")), $tmp$$3$$.styleSheet ? $isNew$$8$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$3$$), $tmp$$3$$.styleSheet.cssText = $opts$$38$$.$str$) : $tmp$$3$$.styleSheet.cssText = 
      $tmp$$3$$.styleSheet.cssText + " " + $opts$$38$$.$str$ : ($tmp$$3$$.appendChild(document.createTextNode($opts$$38$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$3$$)));
    }
    var $_arMenuCmdMap$$1$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_arMenuKeyMap$$1$$ = {cut:"labelCut", copy:"labelCopy", paste:"labelPaste", remove:"labelRemove", rename:"labelRename"}, $scrollbar_width$$, $e1$$2$$, $e2$$2$$;
    $$$$54$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$2$$ = $$$$54$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$2$$ = $$$$54$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$2$$.width() - $e2$$2$$.width(), $e1$$2$$.add($e2$$2$$).remove()) : ($e1$$2$$ = $$$$54$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$2$$.width(), $e1$$2$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1;
    $oj$$59$$.$__registerWidget$("oj.ojTree", $$$$54$$.oj.baseComponent, {widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{dnd:{reorder:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selection:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, destroy:null, expand:null, 
    expandAll:null, hover:null, loaded:null, move:null, optionChange:null, paste:null, refresh:null, rename:null}, collapse:function($node$$80$$, $skipAnim$$) {
      var $dur$$ = ($skipAnim$$ = $skipAnim$$ || !1) ? 0 : this.$_animDuration$;
      $node$$80$$ = this.$_getNode$($node$$80$$);
      if (!$node$$80$$.length || -1 === $node$$80$$ || !$node$$80$$.hasClass("oj-expanded") || this.$_data$.$core$.locked || $node$$80$$.hasClass("oj-disabled")) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$80$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        $node$$80$$.removeClass("oj-expanded").addClass("oj-collapsed").attr("aria-expanded", "false"), $$$$54$$($node$$80$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), !$skipAnim$$ && $dur$$ ? this.$_slide$($node$$80$$, !0) : this.$_transitionEnd$($$$$54$$($node$$80$$.children("UL")[0]), $node$$80$$);
      }
    }, $_slide$:function($node$$81$$, $bSlideUp$$) {
      var $$ul$$, $hNow$$, $hFinal$$;
      $$ul$$ = $$$$54$$($node$$81$$.children("ul"));
      this.$_isSafari$ ? $$ul$$[0].addEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$[0].addEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $bSlideUp$$ ? ($hNow$$ = $$ul$$[0].offsetHeight, $hFinal$$ = 0) : ($hNow$$ = 0, $hFinal$$ = this.$_getElemHeight$($$ul$$[0]));
      $$ul$$.css("max-height", $hNow$$ + "px");
      $$ul$$.css("overflow", "hidden");
      $bSlideUp$$ || ($$ul$$[0].style.display = "block");
      setTimeout(function() {
        $$ul$$.addClass("oj-tree-transition");
        $$ul$$.css("max-height", $hFinal$$ + "px");
      }, 20);
    }, $_getElemHeight$:function($el$$18$$) {
      var $parent$$40$$, $nextSib$$, $h$$8$$, $disp$$, $div$$10$$ = $$$$54$$("\x3cdiv style\x3d'position: absolute'\x3e");
      $parent$$40$$ = $el$$18$$.parentNode;
      $nextSib$$ = $el$$18$$.nextSibling;
      $parent$$40$$.removeChild($el$$18$$);
      $disp$$ = $el$$18$$.style.display;
      $el$$18$$.style.display = "block";
      $div$$10$$.append($el$$18$$);
      this.$_$container$[0].appendChild($div$$10$$[0]);
      $h$$8$$ = $el$$18$$.offsetHeight || $el$$18$$.scrollHeight;
      $el$$18$$.style.display = $disp$$;
      this.$_$container$[0].removeChild($div$$10$$[0]);
      $div$$10$$[0].removeChild($el$$18$$);
      $nextSib$$ ? $parent$$40$$.insertBefore($el$$18$$, $nextSib$$) : $parent$$40$$.appendChild($el$$18$$);
      return $h$$8$$ + 10;
    }, $_transitionEndHandler$:function($$ul$$1_e$$114$$) {
      $$ul$$1_e$$114$$ = $$$$54$$($$ul$$1_e$$114$$.target);
      var $node$$82$$ = $$ul$$1_e$$114$$.closest("li");
      this.$_isSafari$ ? $$ul$$1_e$$114$$[0].removeEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$1_e$$114$$[0].removeEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $$ul$$1_e$$114$$.removeClass("oj-tree-transition");
      this.$_transitionEnd$($$ul$$1_e$$114$$, $node$$82$$);
    }, $_transitionEnd$:function($$ul$$2$$, $node$$83$$) {
      $node$$83$$.hasClass("oj-collapsed") ? ($$ul$$2$$[0].style.display = "none", $$ul$$2$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$83$$}, "collapse"), this.after_close($node$$83$$)) : ($$ul$$2$$[0].style.display = "block", $$ul$$2$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$83$$}, "expand"), this.after_open($node$$83$$));
    }, collapseAll:function($node$$84$$, $anim$$) {
      var $origTarg$$ = $node$$84$$ ? $node$$84$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$84$$ = $node$$84$$ ? this.$_getNode$($node$$84$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$84$$), $node$$84$$ && -1 !== $origTarg$$ || ($node$$84$$ = this.$_$container_ul$), !$node$$84$$.hasClass("oj-disabled"))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$84$$) && ($subject$$ = $node$$84$$[0]);
        var $objs$$ = $node$$84$$.find("li.oj-expanded");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$85$$, $skipAnim$$1$$) {
      this.$_expand$($node$$85$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$3$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$3$$ && "array" === $$$$54$$.type($nodes$$3$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$3$$.length;
        $$$$54$$.each($nodes$$3$$, function($i$$421$$, $val$$62$$) {
          $_this$$2$$.$_expand$($val$$62$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$3$$ = this.$_$container_ul$.find("li.oj-expanded");
      $exlen$$ = $nodes$$3$$.length;
      $exlr$$ = [];
      for (var $n$$27$$ = 0;$n$$27$$ < $exlen$$;$n$$27$$++) {
        $exlr$$.push($nodes$$3$$[$n$$27$$]);
      }
      return $$$$54$$($exlr$$);
    }, expandAll:function($node$$86$$, $anim$$1$$) {
      this.$_expandAll$($node$$86$$, $anim$$1$$);
    }, toggleExpand:function($node$$87$$, $skipAnim$$3$$) {
      if (($node$$87$$ = this.$_getNode$($node$$87$$)) && $node$$87$$.length && -1 !== $node$$87$$ && !$node$$87$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if ($node$$87$$.hasClass("oj-collapsed")) {
          return this.expand($node$$87$$, $skipAnim$$3$$);
        }
        if ($node$$87$$.hasClass("oj-expanded")) {
          return this.collapse($node$$87$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$88$$) {
      var $prevSelections$$ = this.options.selection.slice(0);
      this.$_deselect$($node$$88$$);
      this.$_fireOptionChangeEvent$("selection", $prevSelections$$, null, null);
    }, deselectAll:function($context$$120$$) {
      if (!this.$_data$.$core$.locked) {
        var $prevSelections$$1$$ = this.options.selection.slice(0);
        this.$_deselectAll$($context$$120$$);
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$1$$, null, null);
      }
    }, select:function($node$$89$$) {
      this.$_select$($node$$89$$, !0);
    }, toggleSelect:function($node$$90$$) {
      $node$$90$$ = this.$_getNode$($node$$90$$);
      if (!$node$$90$$.length || $node$$90$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      this.isSelected($node$$90$$) ? this.deselect($node$$90$$) : this.$_select$($node$$90$$, !0);
      return!0;
    }, isCollapsed:function($node$$91$$) {
      return($node$$91$$ = this.$_getNode$($node$$91$$)) && -1 !== $node$$91$$ && $node$$91$$.hasClass("oj-collapsed");
    }, isExpanded:function($node$$92$$) {
      return($node$$92$$ = this.$_getNode$($node$$92$$)) && -1 !== $node$$92$$ && $node$$92$$.hasClass("oj-expanded");
    }, isLeaf:function($node$$93$$) {
      return this.$_isLeaf$($node$$93$$);
    }, isSelected:function($n$$28_node$$94$$) {
      $n$$28_node$$94$$ = this.$_getNode$($n$$28_node$$94$$);
      var $r$$4$$ = !1;
      $n$$28_node$$94$$ && $n$$28_node$$94$$.length && this.$_data$.ui.selected && ($r$$4$$ = 0 <= this.$_data$.ui.selected.index($n$$28_node$$94$$));
      return $r$$4$$;
    }, create:function($refnode$$, $position$$39$$, $data$$162$$) {
      return this.$_createNode$($refnode$$, $position$$39$$, $data$$162$$);
    }, remove:function($node$$95$$) {
      $node$$95$$ = this.$_getNode$($node$$95$$);
      if (!$node$$95$$.length || $node$$95$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$8_rslt$$1$$ = this.$_emitEvent$({obj:$node$$95$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$8_rslt$$1$$ && !$p$$8_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$8_rslt$$1$$ = this.$_getParent$($node$$95$$), $prev$$3$$ = $$$$54$$([]), $t$$3$$ = this, $sib$$ = this.$_getPrev$($node$$95$$);
      $node$$95$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$3$$.$_getPrev$(this));
      });
      $node$$95$$ = $node$$95$$.detach();
      -1 !== $p$$8_rslt$$1$$ && 0 === $p$$8_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$8_rslt$$1$$.removeClass("oj-expanded oj-collapsed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_cleanNode$($p$$8_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$95$$, prev:$sib$$, parent:$p$$8_rslt$$1$$}, "remove");
      return $node$$95$$;
    }, getText:function($node$$96$$) {
      $node$$96$$ = this.$_getNode$($node$$96$$);
      if (!$node$$96$$.length) {
        return!1;
      }
      $node$$96$$ = $node$$96$$.children("a:eq(0)");
      $node$$96$$ = $node$$96$$.find("span:eq(0)");
      return $node$$96$$[0].textContent;
    }, rename:function($node$$97$$, $text$$17$$) {
      this.$_rename_node$($node$$97$$, $text$$17$$);
    }, hover:function($node$$98$$) {
      if (!this.$_data$.menu.$activenode$ && ($node$$98$$ = this.$_getNode$($node$$98$$), $node$$98$$.length && !$node$$98$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked && !$node$$98$$.hasClass("oj-hover"))) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$98$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$98$$.hasClass("oj-hover") || this.dehover(), this.$_data$.ui.$hovered$ = $node$$98$$.children("a").addClass("oj-hover").parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$98$$), this.$_emitEvent$({obj:$node$$98$$}, "hover");
        }
      }
    }, dehover:function() {
      if (!this.$_data$.menu.$activenode$) {
        var $obj$$61$$ = this.$_data$.ui.$hovered$, $p$$9$$;
        if ($obj$$61$$ && $obj$$61$$.length && !$obj$$61$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
          $p$$9$$ = $obj$$61$$.find("a.oj-hover");
          if (!$p$$9$$.length && ($p$$9$$ = this.$_$container_ul$.find("a.oj-hover"), !$p$$9$$.length)) {
            return;
          }
          $p$$9$$.removeClass("oj-hover").parent();
          this.$_$container_ul$.removeAttr("aria-activedescendant");
          this.$_data$.ui.$hovered$ = null;
          void 0 != $obj$$61$$.attr("id") && this.$_emitEvent$({obj:$obj$$61$$}, "dehover");
        }
      }
    }, getPath:function($node$$99$$, $idMode$$) {
      var $p$$10$$ = [], $_this$$3$$ = this;
      $node$$99$$ = this.$_getNode$($node$$99$$);
      if (-1 === $node$$99$$ || !$node$$99$$ || !$node$$99$$.length) {
        return!1;
      }
      $node$$99$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$10$$.push($idMode$$ ? this.id : $_this$$3$$.getText(this));
      });
      $p$$10$$.reverse();
      $p$$10$$.push($idMode$$ ? $node$$99$$.attr("id") : this.getText($node$$99$$));
      return $p$$10$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$100$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$100$$ ? $node$$100$$ : -1);
    }, move:function($node$$101$$, $refnode$$1$$, $position$$40$$, $iscopy$$) {
      this.$_moveNode$($node$$101$$, $refnode$$1$$, $position$$40$$, $iscopy$$);
    }, getType:function($node$$102$$) {
      return this.$_getType$($node$$102$$);
    }, setType:function($node$$103$$, $str$$23$$) {
      return this.$_setType$($node$$103$$, $str$$23$$);
    }, getNodeBySubId:function($locator$$61$$) {
      return $locator$$61$$ ? this.$_processSubId$($locator$$61$$) : this.element ? this.element[0] : null;
    }, getParent:function($l$$11_node$$104$$) {
      return($l$$11_node$$104$$ = this.$_getParent$($l$$11_node$$104$$)) && 0 < $l$$11_node$$104$$.length ? $l$$11_node$$104$$ : null;
    }, getPrevSibling:function($l$$12_node$$105$$) {
      return($l$$12_node$$105$$ = this.$_getPrev$($l$$12_node$$105$$, !0)) && 0 < $l$$12_node$$105$$.length ? $l$$12_node$$105$$ : null;
    }, getNextSibling:function($l$$13_node$$106$$) {
      return($l$$13_node$$106$$ = this.$_getNext$($l$$13_node$$106$$, !0)) && 0 < $l$$13_node$$106$$.length ? $l$$13_node$$106$$ : null;
    }, getChildren:function($l$$14_node$$107$$) {
      return($l$$14_node$$107$$ = this.$_getChildren$($l$$14_node$$107$$ ? $l$$14_node$$107$$ : -1)) && 0 < $l$$14_node$$107$$.length ? $l$$14_node$$107$$ : null;
    }, _ComponentCreate:function() {
      this._super();
      this.$_index$ = this.$_newIndex$();
      this.$_elemId$ = this.element.attr("id");
      void 0 === this.$_elemId$ && (this.$_elemId$ = "oj-tree-" + this.$_getIndex$(), this.element.attr("id", this.$_elemId$));
      this.$_elemId$ = "#" + this.$_elemId$;
      this.$_$container$ = this.element;
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_isTouch$ = $oj$$59$$.$DomUtils$.$isTouchSupported$();
      this.$_initTree$();
      if (this.$_animDuration$ = this.$_getAnimDuration$()) {
        this.$_isSafari$ = "safari" == $oj$$59$$.$AgentUtils$.$getAgentInfo$().browser, this.$_proxyTransitionEndHandler$ = $$$$54$$.proxy(this.$_transitionEndHandler$, this);
      }
      this.$_start$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$163$$, $newval$$, $flags$$47$$) {
      var $val$$63$$;
      if ("selection" === $key$$163$$) {
        $newval$$ = "string" == typeof $newval$$ ? [$newval$$] : $newval$$ && $newval$$.length ? $newval$$ : [], this.$_data$.$core$.$suppressSelectEvent$ = !0, this.$_handleSelectionOptionChange$($newval$$), this.$_data$.$core$.$suppressSelectEvent$ = !1, $newval$$ = this.$_getSelected$();
      } else {
        if ("selectionMode" === $key$$163$$) {
          "none" === $newval$$ ? $val$$63$$ = 0 : "single" === $newval$$ ? $val$$63$$ = 1 : "multiple" === $newval$$ ? $val$$63$$ = -1 : ($val$$63$$ = 0, $newval$$ = "none"), $val$$63$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$63$$);
        } else {
          if ("icons" === $key$$163$$) {
            "boolean" == $$$$54$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$) ? this.$_showIcons$() : this.$_hideIcons$());
          } else {
            if ("contextMenu" === $key$$163$$) {
              this.$_clearMenu$(), $newval$$ && this.$_initMenu$($newval$$);
            } else {
              if ("disabled" === $key$$163$$) {
                this.$_handleDisabledChanged$($newval$$);
              } else {
                if ("data" === $key$$163$$) {
                  this._super($key$$163$$, $newval$$, $flags$$47$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_initExpandedOpts$();
                  this.$_loadNodes$();
                  return;
                }
                if ("dnd" === $key$$163$$) {
                  this._super($key$$163$$, $newval$$, $flags$$47$$);
                  this.$_initDnDOpts$();
                  return;
                }
                "emptyText" == $key$$163$$ && ($newval$$ = this.$_escapeHtml$($newval$$));
              }
            }
          }
        }
      }
      this._super($key$$163$$, $newval$$, $flags$$47$$);
    }, $_CompareOptionValues$:function($option$$34$$, $value1$$10$$, $value2$$9$$) {
      return "selection" === $option$$34$$ ? this.$_compareSelectionValues$($value1$$10$$, $value2$$9$$) : this._superApply(arguments);
    }, $_compareSelectionValues$:function($value1$$11$$, $value2$$10$$) {
      var $i$$422$$, $j$$42$$, $id$$60$$, $len$$21$$, $len2$$, $bDiff$$ = !1, $bInList$$ = !1;
      $len$$21$$ = $value1$$11$$ && $value1$$11$$.length ? $value1$$11$$.length : 0;
      $len2$$ = $value2$$10$$ && $value2$$10$$.length ? $value2$$10$$.length : 0;
      if ($len$$21$$ !== $len2$$) {
        $bDiff$$ = !0;
      } else {
        if (0 == $len$$21$$ && 0 === $len2$$) {
          $bDiff$$ = !1;
        } else {
          for ($i$$422$$ = 0;$i$$422$$ < $len$$21$$;$i$$422$$++) {
            $id$$60$$ = $$$$54$$($value1$$11$$[$i$$422$$]).attr("id");
            $bInList$$ = !1;
            for ($j$$42$$ = 0;$j$$42$$ < $len2$$;$j$$42$$++) {
              if ($id$$60$$ == $$$$54$$($value2$$10$$[$j$$42$$]).attr("id")) {
                $bInList$$ = !0;
                break;
              }
            }
            if (!$bInList$$) {
              $bDiff$$ = !0;
              break;
            }
          }
        }
      }
      return!$bDiff$$;
    }, $_clearTree$:function() {
      var $n$$29$$ = this.$_getIndex$();
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$54$$(document).unbind(".oj-tree-" + $n$$29$$).undelegate(".oj-tree-" + $n$$29$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNode$:function($obj$$62$$, $allow_multiple$$) {
      if ("undefined" === typeof $obj$$62$$ || null === $obj$$62$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$lastSelected$;
      }
      var $$obj$$ = $$$$54$$($obj$$62$$, this.$_$container$);
      if ($$obj$$.is(".oj-tree") || -1 === $obj$$62$$) {
        return-1;
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1;
    }, $_getPrev$:function($obj$$63$$, $strict$$) {
      $obj$$63$$ = this.$_getNode$($obj$$63$$);
      if (-1 === $obj$$63$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$63$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$63$$.prevAll("li").length ? $obj$$63$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$63$$.prev("li").length) {
        for ($obj$$63$$ = $obj$$63$$.prev("li").eq(0);$obj$$63$$.hasClass("oj-expanded");) {
          $obj$$63$$ = $obj$$63$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$63$$;
      }
      var $o$$12$$ = $obj$$63$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$12$$.length ? $o$$12$$ : !1;
    }, $_getNext$:function($obj$$64$$, $strict$$1$$) {
      $obj$$64$$ = this.$_getNode$($obj$$64$$);
      return-1 === $obj$$64$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$64$$.length ? $strict$$1$$ ? 0 < $obj$$64$$.nextAll("li").size() ? $obj$$64$$.nextAll("li:eq(0)") : !1 : $obj$$64$$.hasClass("oj-expanded") ? $obj$$64$$.find("li:eq(0)") : 0 < $obj$$64$$.nextAll("li").size() ? $obj$$64$$.nextAll("li:eq(0)") : $obj$$64$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$13_obj$$65$$) {
      $o$$13_obj$$65$$ = this.$_getNode$($o$$13_obj$$65$$);
      if (-1 == $o$$13_obj$$65$$ || !$o$$13_obj$$65$$.length) {
        return!1;
      }
      $o$$13_obj$$65$$ = $o$$13_obj$$65$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$13_obj$$65$$.length ? $o$$13_obj$$65$$ : -1;
    }, $_getChildren$:function($obj$$66$$) {
      $obj$$66$$ = this.$_getNode$($obj$$66$$);
      return-1 === $obj$$66$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$66$$.length ? $obj$$66$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$108$$) {
      return($node$$108$$ = this.$_getNode$($node$$108$$)) && -1 !== $node$$108$$ && $node$$108$$.hasClass("oj-tree-leaf");
    }, $_getNodeElem$:function($el$$19_node$$109$$) {
      $el$$19_node$$109$$ = this.$_$container_ul$.find($el$$19_node$$109$$);
      var $ret$$62$$ = !1;
      $el$$19_node$$109$$ && $el$$19_node$$109$$.length && 0 < $el$$19_node$$109$$.length && $$$$54$$($el$$19_node$$109$$).is("li") && ($ret$$62$$ = $el$$19_node$$109$$);
      return $ret$$62$$;
    }, $_reference$:function($node$$110$$, $o$$14$$) {
      var $ctor$$2_div$$11$$ = $node$$110$$.parents("div").eq(0);
      ($ctor$$2_div$$11$$ = $oj$$59$$.Components.$getWidgetConstructor$($ctor$$2_div$$11$$)) && $o$$14$$ && $ctor$$2_div$$11$$("getCI", $o$$14$$);
      return this;
    }, getCI:function($o$$15$$) {
      $o$$15$$.$ot$ = this;
    }, $_applyDefaults$:function($to$$3$$, $from$$3$$) {
      void 0 != $to$$3$$ && void 0 != $from$$3$$ && $$$$54$$.each($from$$3$$, function($prop$$68$$, $val$$64$$) {
        void 0 == $to$$3$$[$prop$$68$$] && ($to$$3$$[$prop$$68$$] = $val$$64$$);
      });
    }, $_handleDisabledChanged$:function($newval$$1$$) {
      var $curState$$;
      "undefined" !== typeof $newval$$1$$ && (($curState$$ = this.$_$container_ul$.hasClass("oj-disabled")) || ($curState$$ = !1), $curState$$ != $newval$$1$$ && ($newval$$1$$ ? (this.$_$container_ul$.addClass("oj-disabled"), this.$_$container_ul$.prop("disabled", !0)) : (this.$_$container_ul$.removeClass("oj-disabled"), this.$_$container_ul$.prop("disabled", !1)), this.$_treeDisable$($newval$$1$$)));
    }, $_treeDisable$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass("oj-disabled").css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass("oj-disabled").css("opacity", this.$_data$.ui.opacity));
    }, $_handleSelectionOptionChange$:function($aSelected_newSels$$) {
      var $sels$$ = $aSelected_newSels$$.slice(0), $cur$$2$$ = [], $_this$$5$$ = this, $$elem$$, $id$$61$$, $inList$$, $len$$22$$;
      $$$$54$$.grep($sels$$, function($node$$111$$, $i$$423$$) {
        if ($$elem$$ = $_this$$5$$.$_getNodeElem$($node$$111$$)) {
          $cur$$2$$.push($$elem$$), $sels$$[$i$$423$$] = $$elem$$[0];
        } else {
          return!1;
        }
        return!0;
      });
      $aSelected_newSels$$ = this.$_getSelected$();
      $$$$54$$.each($aSelected_newSels$$, function($i$$424$$, $node$$112$$) {
        $len$$22$$ = $cur$$2$$.length;
        $id$$61$$ = $$$$54$$($node$$112$$).attr("id");
        $inList$$ = !1;
        for ($i$$424$$ = 0;$i$$424$$ < $len$$22$$;$i$$424$$++) {
          if ($id$$61$$ == $cur$$2$$[$i$$424$$].attr("id")) {
            $inList$$ = !0;
            break;
          }
        }
        $inList$$ || $_this$$5$$.$_deselect$($node$$112$$);
      });
      this.$_setSelected$($cur$$2$$, null);
    }, $_prepare_move$:function($o$$16$$, $r$$5$$, $pos$$14$$, $cb$$1$$, $is_cb$$) {
      var $p$$11$$ = {};
      $r$$5$$ = -1 !== $r$$5$$ && $r$$5$$ ? this.$_getNode$($r$$5$$) : -1;
      this.$_reference$($o$$16$$, $p$$11$$);
      $p$$11$$.$rt$ = this;
      $p$$11$$.$o$ = $p$$11$$.$ot$.$_getNode$($o$$16$$);
      $p$$11$$.$r$ = $r$$5$$;
      $p$$11$$.$p$ = "undefined" === typeof $pos$$14$$ || !1 === $pos$$14$$ ? "last" : $pos$$14$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$11$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$11$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$11$$.$p$) {
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$);
      } else {
        if (-1 !== $p$$11$$.$r$ && $p$$11$$.$r$) {
          if (!/^(before|after)$/.test($p$$11$$.$p$) && !this.$_is_loaded$($p$$11$$.$r$)) {
            return this.$_load_node$($p$$11$$.$r$, function() {
              this.$_prepare_move$($o$$16$$, $r$$5$$, $pos$$14$$, $cb$$1$$, !0);
            });
          }
          switch($p$$11$$.$p$) {
            case "before":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index();
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "after":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index() + 1;
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$11$$.$cp$ = 0;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$, $p$$11$$.$cr$ = $p$$11$$.$r$;
          }
        } else {
          switch($p$$11$$.$cr$ = -1, $p$$11$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$11$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$;
          }
        }
        $p$$11$$.$np$ = -1 == $p$$11$$.$cr$ ? $p$$11$$.$rt$.$_$container$ : $p$$11$$.$cr$;
        $p$$11$$.$op$ = $p$$11$$.$ot$.$_getParent$($p$$11$$.$o$);
        $p$$11$$.$cop$ = $p$$11$$.$o$.index();
        -1 === $p$$11$$.$op$ && ($p$$11$$.$op$ = $p$$11$$.$ot$ ? $p$$11$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$11$$.$p$) && $p$$11$$.$op$ && $p$$11$$.$np$ && $p$$11$$.$op$[0] === $p$$11$$.$np$[0] && $p$$11$$.$o$.index() < $p$$11$$.$cp$ && $p$$11$$.$cp$++;
        $p$$11$$.$or$ = $p$$11$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$11$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepared_move$ = $p$$11$$;
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$, "prepare_move");
      }
    }, check_move:function() {
      var $obj$$67$$ = this.$_data$.$core$.$prepared_move$, $ret$$63$$ = !0, $r$$6$$;
      $r$$6$$ = -1 === $obj$$67$$.$r$ ? this.$_$container$ : $obj$$67$$.$r$;
      if (!$obj$$67$$ || !$obj$$67$$.$o$ || $obj$$67$$.$or$[0] === $obj$$67$$.$o$[0] || !$obj$$67$$.$r$) {
        return!1;
      }
      if (!$obj$$67$$.$cy$) {
        if ($obj$$67$$.$op$ && $obj$$67$$.$np$ && $obj$$67$$.$op$[0] === $obj$$67$$.$np$[0] && $obj$$67$$.$cp$ - 1 === $obj$$67$$.$o$.index()) {
          return!1;
        }
        $obj$$67$$.$o$.each(function() {
          if (-1 !== $r$$6$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$63$$ = !1;
          }
        });
      }
      return $ret$$63$$;
    }, $_rename_node$:function($node$$113$$, $text$$18$$) {
      var $t$$4$$;
      $node$$113$$ = this.$_getNode$($node$$113$$);
      this.$__rollback$();
      $t$$4$$ = this.getText($node$$113$$);
      if ($node$$113$$ && $node$$113$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$113$$, func:"rename", title:$text$$18$$, prevTitle:$t$$4$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$113$$ && $node$$113$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$113$$, title:$text$$18$$, prevTitle:$t$$4$$}, "rename");
    }, $_moveNode$:function($obj$$68$$, $d$$8_o$$17_ref$$3$$, $position$$41$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      $is_prepared$$ || ($obj$$68$$ = this.$_getNode$($obj$$68$$));
      if (!($obj$$68$$.hasClass && $obj$$68$$.hasClass("oj-disabled") || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$68$$, $d$$8_o$$17_ref$$3$$, $position$$41$$, function($p$$12$$) {
            $p$$12$$.$ot$ === $p$$12$$.$rt$ || $p$$12$$.$cy$ || $p$$12$$.$ot$.deselect($p$$12$$.$o$);
            this.$_moveNode$($p$$12$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
        if (!$skip_check$$ && !this.check_move()) {
          return!1;
        }
        this.$__rollback$();
        $d$$8_o$$17_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$8_o$$17_ref$$3$$ = $obj$$68$$.$o$.clone(!0), $d$$8_o$$17_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$8_o$$17_ref$$3$$ = $obj$$68$$.$o$;
        $obj$$68$$.$or$.length ? $obj$$68$$.$or$.before($d$$8_o$$17_ref$$3$$) : ($obj$$68$$.$np$.children("ul").length || $$$$54$$("\x3cul /\x3e").appendTo($obj$$68$$.$np$), $obj$$68$$.$np$.children("ul:eq(0)").append($d$$8_o$$17_ref$$3$$));
        try {
          $obj$$68$$.$ot$.$_cleanNode$($obj$$68$$.$op$), $obj$$68$$.$rt$.$_cleanNode$($obj$$68$$.$np$), $obj$$68$$.$op$.find("\x3e ul \x3e li").length || $obj$$68$$.$op$.removeClass("oj-expanded oj-collapsed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$115$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$8_o$$17_ref$$3$$);
        $d$$8_o$$17_ref$$3$$ = $$$$54$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
        $d$$8_o$$17_ref$$3$$.obj = $obj$$68$$.$o$;
        this.$_emitEvent$($d$$8_o$$17_ref$$3$$, "move");
        return this.$_data$.$core$.$prepared_move$;
      }
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$;
    }, $_getType$:function($node$$114$$) {
      var $n$$30$$ = null;
      this.options.types && ($n$$30$$ = this.$_getNode$($node$$114$$));
      return $n$$30$$ && $n$$30$$.length ? $n$$30$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($node$$115$$, $str$$24$$) {
      var $s$$11$$ = this.options.types, $tattr$$, $ret$$64$$ = !1;
      $node$$115$$ = this.$_getNode$($node$$115$$);
      $s$$11$$ && $node$$115$$ && -1 != $node$$115$$ && $node$$115$$.length && $str$$24$$ && ($tattr$$ = $s$$11$$.attr) && $s$$11$$[$str$$24$$] && ($node$$115$$.attr($tattr$$, $str$$24$$), $node$$115$$.addClass("oj-tree-type"), $ret$$64$$ = !0);
      return $ret$$64$$;
    }, $_check$:function($rule$$3$$, $obj$$69$$, $opts$$39$$) {
      $obj$$69$$ = this.$_getNode$($obj$$69$$);
      var $v$$3$$ = !1, $ty$$ = this.$_getType$($obj$$69$$), $d$$9$$ = 0, $_this$$6$$ = this, $s$$12$$ = this.$_getOptions$().types, $data$$163$$ = !1;
      if (-1 === $obj$$69$$) {
        if ($s$$12$$[$rule$$3$$]) {
          $v$$3$$ = $s$$12$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$163$$ = this.$_data$.types.$defaults$.useData ? $obj$$69$$.data("oj-tree") : !1) && $data$$163$$.types && "undefined" !== typeof $data$$163$$.types[$rule$$3$$] ? $v$$3$$ = $data$$163$$.types[$rule$$3$$] : $s$$12$$.types[$ty$$] && "undefined" !== typeof $s$$12$$.types[$ty$$][$rule$$3$$] ? $v$$3$$ = $s$$12$$.types[$ty$$][$rule$$3$$] : $s$$12$$.types["default"] && "undefined" !== typeof $s$$12$$.types["default"][$rule$$3$$] && ($v$$3$$ = $s$$12$$.types["default"][$rule$$3$$]);
      }
      $$$$54$$.isFunction($v$$3$$) && ($v$$3$$ = $v$$3$$.call(this, $obj$$69$$));
      var $md$$ = this.$_data$.types.$defaults$.maxDepth;
      "maxDepth" === $rule$$3$$ && -1 !== $obj$$69$$ && !1 !== $opts$$39$$ && -2 !== this.$_data$.types.$defaults$.maxDepth && 0 !== $v$$3$$ && $obj$$69$$.children("a:eq(0)").parentsUntil(".oj-tree", "li").each(function($i$$425$$) {
        if (-1 !== $md$$ && 0 >= $md$$ - ($i$$425$$ + 1)) {
          return $v$$3$$ = 0, !1;
        }
        $d$$9$$ = 0 === $i$$425$$ ? $v$$3$$ : $_this$$6$$.$_check$($rule$$3$$, this, !1);
        if (-1 !== $d$$9$$ && 0 >= $d$$9$$ - ($i$$425$$ + 1)) {
          return $v$$3$$ = 0, !1;
        }
        0 <= $d$$9$$ && ($d$$9$$ - ($i$$425$$ + 1) < $v$$3$$ || 0 > $v$$3$$) && ($v$$3$$ = $d$$9$$ - ($i$$425$$ + 1));
        0 <= $md$$ && ($md$$ - ($i$$425$$ + 1) < $v$$3$$ || 0 > $v$$3$$) && ($v$$3$$ = $md$$ - ($i$$425$$ + 1));
      });
      return $v$$3$$;
    }, $_cleanNode$:function($obj$$70$$) {
      $obj$$70$$ = $obj$$70$$ && -1 != $obj$$70$$ ? $$$$54$$($obj$$70$$) : this.$_$container_ul$;
      $obj$$70$$ = $obj$$70$$.is("li") ? $obj$$70$$.find("li").addBack() : $obj$$70$$.find("li");
      $obj$$70$$.removeClass("oj-tree-last").addClass("oj-tree-node").addClass("oj-draggable").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-expanded").removeClass("oj-tree-leaf").addClass("oj-collapsed").attr("aria-expanded", "false");
      $obj$$70$$.not(".oj-expanded, .oj-collapsed").addClass("oj-tree-leaf").children("ul").remove();
      var $typeAttr$$ = this.options.types ? this.options.types.attr : !1;
      $obj$$70$$.find("li");
      var $disc$$, $t$$6$$;
      $$$$54$$.each($obj$$70$$, function() {
        $t$$6$$ = $$$$54$$(this);
        $disc$$ = $t$$6$$.find("\x3e ins");
        1 < $disc$$.length && ($disc$$ = $$$$54$$($disc$$[0]));
        $t$$6$$.hasClass("oj-tree-leaf") ? ($disc$$.removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.addClass("oj-tree-icon")) : ($disc$$.addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.removeClass("oj-tree-node-icon"));
        $typeAttr$$ && $t$$6$$.attr($typeAttr$$) && $t$$6$$.addClass("oj-tree-type");
      });
    }, $_createNode$:function($obj$$71$$, $position$$42$$, $js$$, $callback$$119$$, $is_loaded$$) {
      $obj$$71$$ = $obj$$71$$ || -1;
      $obj$$71$$ = this.$_getNode$($obj$$71$$);
      if (-1 !== $obj$$71$$ && !$obj$$71$$.length) {
        return!1;
      }
      $position$$42$$ = "undefined" === typeof $position$$42$$ ? "last" : $position$$42$$;
      var $d$$10$$ = $$$$54$$("\x3cli /\x3e"), $tmp$$4$$;
      if (!$is_loaded$$ && !this.$_is_loaded$($obj$$71$$)) {
        return this.$_load_node$($obj$$71$$, function() {
          this.$_createNode$($obj$$71$$, $position$$42$$, $js$$, $callback$$119$$, !0);
        }), !1;
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$10$$.attr($js$$.attr);
      $js$$.metadata && $d$$10$$.data($js$$.metadata);
      $js$$.state && $d$$10$$.addClass("expanded" === $js$$.state ? "oj-expanded" : "oj-collapsed");
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$_getString$("labelNewNode"));
      $$$$54$$.isArray($js$$.data) || ($tmp$$4$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$4$$));
      var $sp$$2$$;
      $$$$54$$.each($js$$.data, function($i$$427$$, $m$$24$$) {
        $tmp$$4$$ = $$$$54$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$54$$.isFunction($m$$24$$) && ($m$$24$$ = $m$$24$$.call(this, $js$$));
        $sp$$2$$ = $$$$54$$("\x3cspan class\x3d'oj-tree-title'\x3e");
        "string" == typeof $m$$24$$ ? ($sp$$2$$[0].textContent = $m$$24$$, $tmp$$4$$.attr("href", "#")) : ($m$$24$$.attr || ($m$$24$$.attr = {}), $m$$24$$.attr.href || ($m$$24$$.attr.href = "#"), $sp$$2$$[0].textContent = $m$$24$$, $m$$24$$.language && $tmp$$4$$.addClass($m$$24$$.language));
        $tmp$$4$$.append($sp$$2$$);
        $tmp$$4$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$24$$.icon && $js$$.icon && ($m$$24$$.icon = $js$$.icon);
        $m$$24$$.icon && (-1 === $m$$24$$.icon.indexOf("/") ? $tmp$$4$$.children("ins").addClass($m$$24$$.icon) : $tmp$$4$$.children("ins").css("background", "url('" + $m$$24$$.icon + "') center center no-repeat"));
        $d$$10$$.append($tmp$$4$$);
      });
      $d$$10$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$71$$ && ($obj$$71$$ = this.$_$container$, "before" === $position$$42$$ && ($position$$42$$ = "first"), "after" === $position$$42$$ && ($position$$42$$ = "last"));
      switch($position$$42$$) {
        case "before":
          $obj$$71$$.before($d$$10$$);
          $tmp$$4$$ = this.$_getParent$($obj$$71$$);
          break;
        case "after":
          $obj$$71$$.after($d$$10$$);
          $tmp$$4$$ = this.$_getParent$($obj$$71$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$71$$.children("ul").length || $obj$$71$$.append("\x3cul /\x3e");
          $obj$$71$$.children("ul").prepend($d$$10$$);
          $tmp$$4$$ = $obj$$71$$;
          break;
        case "last":
          $obj$$71$$.children("ul").length || $obj$$71$$.append("\x3cul /\x3e");
          $obj$$71$$.children("ul").append($d$$10$$);
          $tmp$$4$$ = $obj$$71$$;
          break;
        default:
          $obj$$71$$.children("ul").length || $obj$$71$$.append("\x3cul /\x3e"), $position$$42$$ || ($position$$42$$ = 0), $tmp$$4$$ = $obj$$71$$.children("ul").children("li").eq($position$$42$$), $tmp$$4$$.length ? $tmp$$4$$.before($d$$10$$) : $obj$$71$$.children("ul").append($d$$10$$), $tmp$$4$$ = $obj$$71$$;
      }
      if (-1 === $tmp$$4$$ || $tmp$$4$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$4$$ = -1;
      }
      this.$_cleanNode$($tmp$$4$$);
      this.$_emitEvent$({obj:$d$$10$$, parent:$tmp$$4$$}, "create");
      $callback$$119$$ && $callback$$119$$.call(this, $d$$10$$);
      return $d$$10$$;
    }, $_expand$:function($obj$$72$$, $callback$$120$$, $skipAnim$$4$$) {
      $obj$$72$$ = this.$_getNode$($obj$$72$$);
      if (!$obj$$72$$ || !$obj$$72$$.length) {
        return!1;
      }
      $skipAnim$$4$$ = $skipAnim$$4$$ || !1;
      if (!$obj$$72$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if (!$obj$$72$$.hasClass("oj-collapsed")) {
          return $callback$$120$$ && $callback$$120$$.call(), !1;
        }
        var $dur$$1_rslt$$4$$ = this.$_emitEvent$({obj:$obj$$72$$, func:"expand"}, "before");
        if ("boolean" != typeof $dur$$1_rslt$$4$$ || $dur$$1_rslt$$4$$) {
          var $dur$$1_rslt$$4$$ = $skipAnim$$4$$ ? 0 : this.$_animDuration$, $t$$7$$ = this;
          this.$_is_loaded$($obj$$72$$) ? (this.options.expandParents && $obj$$72$$.parentsUntil(".oj-tree", ".oj-collapsed").each(function() {
            $t$$7$$.$_expand$(this, !1, !0);
          }), $obj$$72$$.removeClass("oj-collapsed").addClass("oj-expanded").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $$$$54$$($obj$$72$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), !$skipAnim$$4$$ && $dur$$1_rslt$$4$$ ? this.$_slide$($obj$$72$$, !1) : this.$_transitionEnd$($$$$54$$($obj$$72$$.children("UL")[0]), $obj$$72$$), $callback$$120$$ && $callback$$120$$.call()) : ($obj$$72$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$72$$, 
          function() {
            $t$$7$$.$_expand$($obj$$72$$, $callback$$120$$, $skipAnim$$4$$);
          }, $callback$$120$$));
        }
      }
    }, $_expandAll$:function($obj$$73$$, $animate$$13$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$73$$ ? $obj$$73$$ : -1;
      ($obj$$73$$ = $obj$$73$$ ? this.$_getNode$($obj$$73$$) : -1) && -1 !== $obj$$73$$ ? $origTarg$$1$$ = $obj$$73$$ : $obj$$73$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$73$$ = $obj$$73$$.find("li.oj-collapsed") : ($original_obj$$ = $obj$$73$$, $obj$$73$$ = $obj$$73$$.is(".oj-collapsed") ? $obj$$73$$.find("li.oj-collapsed").addBack() : $obj$$73$$.find("li.oj-collapsed"));
      var $_this$$8$$ = this;
      $obj$$73$$.each(function() {
        var $__this$$ = this;
        $_this$$8$$.$_is_loaded$(this) ? $_this$$8$$.$_expand$(this, !1, !$animate$$13$$) : $_this$$8$$.expand(this, function() {
          $_this$$8$$.$_expandAll$($__this$$, $animate$$13$$, $original_obj$$);
        }, !$animate$$13$$);
      });
      0 === $original_obj$$.find("li.oj-collapsed").length && this.$_emitEvent$({obj:$obj$$73$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$116$$, $bRet_check$$, $e$$116$$) {
      var $selectMode$$ = this.$_data$.$core$.$selectMode$;
      if (0 == $selectMode$$) {
        return!1;
      }
      $node$$116$$ = this.$_getNode$($node$$116$$);
      if (-1 == $node$$116$$ || !$node$$116$$ || !$node$$116$$.length || $node$$116$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      $e$$116$$ && "touchend" == $e$$116$$.type || (this.$_data$.ui.$touchEvent$ = !1);
      var $isSelected$$ = this.isSelected($node$$116$$);
      if (!$isSelected$$) {
        var $prevSelections$$2_rslt$$5$$ = this.$_emitEvent$({obj:$node$$116$$, func:"select"}, "before");
        if ("boolean" == typeof $prevSelections$$2_rslt$$5$$ && !$prevSelections$$2_rslt$$5$$) {
          return!1;
        }
      }
      var $prevSelections$$2_rslt$$5$$ = this.options.selection.slice(0), $s$$14$$ = this.options, $isMultiple_selMultMod$$ = this.$_data$.ui.$defaults$.selectMultipleModifier, $isRange_selRangeMod$$ = this.$_data$.ui.$defaults$.selectRangeModifier, $disSelChildren$$ = this.$_data$.ui.$defaults$.disableSelectingChildren, $isMultiple_selMultMod$$ = "on" == $isMultiple_selMultMod$$ || !1 !== $isMultiple_selMultMod$$ && $e$$116$$ && $oj$$59$$.$DomUtils$.$isMetaKeyPressed$($e$$116$$), $isRange_selRangeMod$$ = 
      !1 !== $isRange_selRangeMod$$ && $e$$116$$ && $e$$116$$[$isRange_selRangeMod$$ + "Key"] && this.$_data$.ui.$lastSelected$ && this.$_data$.ui.$lastSelected$[0] !== $node$$116$$[0] && this.$_data$.ui.$lastSelected$.parent()[0] === $node$$116$$.parent()[0], $proceed$$ = !0, $t$$8$$ = this;
      if ($bRet_check$$) {
        if ($disSelChildren$$ && $isMultiple_selMultMod$$ && ($node$$116$$.parentsUntil(".oj-tree", "li").children("a.oj-selected").length || $node$$116$$.children("ul").find("a.oj-selected:eq(0)").length)) {
          return!1;
        }
        $proceed$$ = !1;
        switch(!0) {
          case $isRange_selRangeMod$$:
            this.$_data$.ui.$lastSelected$.addClass("oj-tree-last-selected");
            $node$$116$$ = $node$$116$$[$node$$116$$.index() < this.$_data$.ui.$lastSelected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
            -1 == $selectMode$$ || $node$$116$$.length < $selectMode$$ ? (this.$_data$.ui.$lastSelected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.selected.each(function() {
              this !== $t$$8$$.$_data$.ui.$lastSelected$[0] && $t$$8$$.$_deselect$(this);
            }), $isSelected$$ = !1, $proceed$$ = !0) : $proceed$$ = !1;
            break;
          case this.$_data$.ui.$touchEvent$ && -1 == $selectMode$$:
            this.$_data$.ui.$touchEvent$ = !1;
            this.toggleSelect($node$$116$$);
            $proceed$$ = !1;
            break;
          case $isSelected$$ && !$isMultiple_selMultMod$$:
            if (!$e$$116$$) {
              break;
            }
            this.$_deselectAll$();
            this.$_data$.ui.$spacebar$ || ($isSelected$$ = !1);
            $proceed$$ = !0;
            break;
          case !$isSelected$$ && !$isMultiple_selMultMod$$:
            $e$$116$$ ? this.$_data$.ui.selected && 1 == this.$_data$.ui.selected.length ? this.$_deselect$(this.$_data$.ui.selected) : this.$_deselectAll$(this.$_data$.ui.selected) : 1 === $selectMode$$ ? this.$_deselect$(this.$_data$.ui.selected) : 1 < $selectMode$$ && this.$_deselectAll$();
            $proceed$$ = !0;
            break;
          case $isSelected$$ && $isMultiple_selMultMod$$:
            this.deselect($node$$116$$);
            break;
          case !$isSelected$$ && $isMultiple_selMultMod$$:
            if (-1 == $selectMode$$ || this.$_data$.ui.selected.length + 1 <= $selectMode$$) {
              $proceed$$ = !0;
            }
          ;
        }
      }
      $bRet_check$$ = !1;
      $proceed$$ && !$isSelected$$ && ($isRange_selRangeMod$$ || (this.$_data$.ui.$lastSelected$ = $node$$116$$), $node$$116$$.children("a").addClass("oj-selected"), $node$$116$$.attr("aria-selected", "true"), $bRet_check$$ = !0, $s$$14$$.selectedParentExpand && $node$$116$$.parents(".oj-collapsed").each(function() {
        $t$$8$$.$_expand$(this, !1, !0);
      }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$116$$), this.$_fix_scroll$($node$$116$$.eq(0)), this.$_data$.$core$.$suppressSelectEvent$ || this.$_fireOptionChangeEvent$("selection", $prevSelections$$2_rslt$$5$$, null, $e$$116$$));
      return $bRet_check$$;
    }, $_deselect$:function($node$$117$$) {
      $node$$117$$ = this.$_getNode$($node$$117$$);
      if (!$node$$117$$.length) {
        return!1;
      }
      $node$$117$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || !this.isSelected($node$$117$$) || ($node$$117$$.children("a").removeClass("oj-selected"), $node$$117$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$117$$), this.$_data$.ui.$lastSelected$ && this.$_data$.ui.$lastSelected$.length && this.$_data$.ui.$lastSelected$.get(0) === $node$$117$$.get(0) && (this.$_data$.ui.$lastSelected$ = this.$_data$.ui.selected.eq(0)));
    }, $_deselectAll$:function($context$$121_ret$$65$$) {
      if (!this.$_data$.$core$.locked && ($context$$121_ret$$65$$ = $context$$121_ret$$65$$ ? $$$$54$$($context$$121_ret$$65$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent(), $context$$121_ret$$65$$.not(".oj-disabled"), 0 !== $context$$121_ret$$65$$.length)) {
        var $_this$$9$$ = this;
        $$$$54$$.each($context$$121_ret$$65$$, function() {
          $_this$$9$$.$_deselect$(this);
        });
      }
    }, $_setSelected$:function($nodes$$5$$, $e$$117$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if ($nodes$$5$$ && 0 < $nodes$$5$$.length) {
        var $_this$$10$$ = this;
        $$$$54$$.each($nodes$$5$$, function($i$$428$$, $val$$66$$) {
          $val$$66$$ && $_this$$10$$.$_select$($val$$66$$, !0, $e$$117$$);
        });
      }
    }, $_handleNodeTapClick$:function($event$$554$$) {
      $event$$554$$.preventDefault();
      $event$$554$$.currentTarget.blur();
      $$$$54$$($event$$554$$.currentTarget).hasClass("oj-tree-loading") || (this.$_setFocus$(), this.$_select$($event$$554$$.currentTarget, !0, $event$$554$$) && this.$_$container_ul$.focus());
      this.$_data$.ui.$touchEvent$ = !1;
    }, $_disclosureHover$:function($elem$$153$$, $bHover$$) {
      $elem$$153$$ = $$$$54$$($elem$$153$$);
      if (!$elem$$153$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $par$$ = $elem$$153$$.parent(), $bClosed$$ = $par$$.hasClass("oj-collapsed");
        if ($par$$.hasClass("oj-expanded") || $bClosed$$) {
          $bHover$$ ? ($elem$$153$$.addClass("oj-hover"), $elem$$153$$.removeClass("oj-default"), $elem$$153$$.removeClass("oj-selected")) : ($elem$$153$$.removeClass("oj-hover"), $elem$$153$$.addClass("oj-default"));
        }
      }
    }, $_refresh$:function($node$$118$$) {
      this.$_refresh_core$($node$$118$$);
    }, $_refresh_core$:function($node$$119$$) {
      var $origTarg$$3$$ = $node$$119$$ ? $node$$119$$ : -1, $_this$$11$$ = this;
      this.$_save_opened$();
      $node$$119$$ || ($node$$119$$ = -1);
      ($node$$119$$ = this.$_getNode$($node$$119$$)) ? $origTarg$$3$$ = $node$$119$$ : $node$$119$$ = -1;
      -1 !== $node$$119$$ ? $node$$119$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$119$$, function() {
        $_this$$11$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$11$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$74$$) {
      this.saveSelected();
      this.$_refresh_core$($obj$$74$$);
    }, after_open:function($obj$$75$$) {
      this.$_emitEvent$({obj:$obj$$75$$}, "after_open", !0);
    }, after_close:function($obj$$76$$) {
      this.$_emitEvent$({obj:$obj$$76$$}, "after_close", !0);
    }, $_reopen$:function() {
      var $_this$$12$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$54$$.each(this.$_data$.$core$.$toExpand$, function($i$$429$$, $val$$67$$) {
        $_this$$12$$.$_expand$($val$$67$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen", !0);
    }, $_getSelected$:function($context$$122_sel$$2$$) {
      var $ar$$1$$, $i$$430$$, $len$$23$$;
      $context$$122_sel$$2$$ = $context$$122_sel$$2$$ ? $$$$54$$($context$$122_sel$$2$$).find("a.oj-selected").parent() : this.$_data$.ui.selected;
      $ar$$1$$ = [];
      $len$$23$$ = $context$$122_sel$$2$$.length;
      for ($i$$430$$ = 0;$i$$430$$ < $len$$23$$;$i$$430$$++) {
        $ar$$1$$.push($context$$122_sel$$2$$[$i$$430$$]);
      }
      return $ar$$1$$;
    }, $_set_text$:function($obj$$77$$, $val$$68$$) {
      $obj$$77$$ = this.$_getNode$($obj$$77$$);
      if (!$obj$$77$$.length) {
        return!1;
      }
      $obj$$77$$ = $obj$$77$$.children("a:eq(0)");
      $obj$$77$$ = $obj$$77$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$77$$, name:$val$$68$$}, "set_text", !0);
      return $obj$$77$$[0].textContent = $val$$68$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$78$$) {
      this.$_emitEvent$({obj:$obj$$78$$}, "load_node", !0);
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$80$$, $s_call$$, $e_call$$) {
      var $_this$$13$$ = this;
      this.$_load_node_tree$($obj$$80$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$80$$)}, "load_node", !0);
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$81$$) {
      $obj$$81$$ = this.$_getNode$($obj$$81$$);
      return-1 === $obj$$81$$ || !$obj$$81$$ || $obj$$81$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$81$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$82$$) {
      ($obj$$82$$ = this.$_getNode$($obj$$82$$)) && -1 !== $obj$$82$$ && $obj$$82$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$82$$);
    }, $_load_node_J$:function($obj$$83$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$14$$ = this;
      this.$_load_node_json$($obj$$83$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$83$$)}, "load_node", !0);
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$84$$) {
      var $s$$15$$ = this.options.data;
      $obj$$84$$ = this.$_getNode$($obj$$84$$);
      return-1 == $obj$$84$$ || !$obj$$84$$ || !$s$$15$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$54$$.isFunction($s$$15$$.data) || $obj$$84$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$84$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$85$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$15$$ = this;
      this.$_load_node_html$($obj$$85$$, function() {
        $_this$$15$$.$_emitEvent$({obj:$_this$$15$$.$_getNode$($obj$$85$$)}, "load_node", !0);
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$86$$) {
      var $s$$16$$ = this.options.data, $data$$164$$ = null, $ajax$$ = null;
      $s$$16$$ && ($data$$164$$ = $s$$16$$.data || null, $ajax$$ = $s$$16$$.ajax || null);
      $obj$$86$$ = this.$_getNode$($obj$$86$$);
      return-1 == $obj$$86$$ || !$obj$$86$$ || !$ajax$$ && !$$$$54$$.isFunction($data$$164$$) || $obj$$86$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$86$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$16$$ = this, $s$$17$$ = this.$_data$.ui.$to_select$, $s$$17$$ = $$$$54$$.map($$$$54$$.makeArray($s$$17$$), function($n$$31$$) {
        return "#" + $n$$31$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$54$$.each($s$$17$$, function($i$$431$$, $val$$69$$) {
        $val$$69$$ && "#" !== $val$$69$$ && $_this$$16$$.select($val$$69$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect", !0);
    }, saveSelected:function() {
      var $_this$$17$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$17$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "savedselected", !0);
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && $$$$54$$.isArray($rb$$1$$);
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback", !0);
      return{$i$:this.$_getIndex$(), $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, $_load_node_tree$:function($obj$$87$$, $s_call$$3$$) {
      var $d$$11_rslt$$6$$ = this.$_JsonDSToJson$($obj$$87$$ && -1 != $obj$$87$$ ? $obj$$87$$[0].id : $obj$$87$$ ? $obj$$87$$ : -1, $obj$$87$$);
      if ($d$$11_rslt$$6$$.success && $d$$11_rslt$$6$$.$js$) {
        var $$u_bTree$$ = !$obj$$87$$ || -1 === $obj$$87$$, $s$$18$$ = this.options.data;
        if ($s$$18$$.data && !$s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && $$u_bTree$$) {
          $$u_bTree$$ && (($d$$11_rslt$$6$$ = this.$_parseJson$($d$$11_rslt$$6$$.$js$, $obj$$87$$)) ? (this.$_$container_ul$.empty().append($d$$11_rslt$$6$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$18$$.data && $s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && !$$u_bTree$$) {
            ($d$$11_rslt$$6$$ = this.$_parseJson$($d$$11_rslt$$6$$.$js$, $obj$$87$$)) ? ($$u_bTree$$ ? ($$u_bTree$$ = this.$_$container_ul$, $$u_bTree$$.empty().append($d$$11_rslt$$6$$.children()), $$u_bTree$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$.attr("aria-multiselectable", !0)) : ($obj$$87$$.append($d$$11_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading")), 
            this.$_cleanNode$($obj$$87$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), $s$$18$$.correct_state && (this.$_correct_state$($obj$$87$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$12$$, $node$$120$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$22$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$12$$ && ($parentKey$$12$$ = null, $range$$22$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$12$$);
      0 < $cc$$ && ($range$$22$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$12$$, $range$$22$$, {success:$$$$54$$.proxy(function($jns$$) {
        for (var $c$$49$$ = $jns$$.$getCount$(), $attr$$18_n$$32_r$$7$$, $i$$432$$ = 0;$i$$432$$ < $c$$49$$;$i$$432$$++) {
          $node$$120$$ = {};
          ($attr$$18_n$$32_r$$7$$ = $jns$$.getData($i$$432$$)) && ($node$$120$$.attr = $attr$$18_n$$32_r$$7$$);
          $node$$120$$.title = $jns$$.$m_nodes$[$i$$432$$].title;
          $attr$$18_n$$32_r$$7$$.$metadata$ && ($node$$120$$.metadata = $jns$$.$m_nodes$[$i$$432$$].metadata);
          var $key$$164$$ = $node$$120$$.attr.id;
          $attr$$18_n$$32_r$$7$$ = $ds$$.$getChildCount$($key$$164$$);
          0 < $attr$$18_n$$32_r$$7$$ && ($attr$$18_n$$32_r$$7$$ = this.$_JsonDSToJson$($key$$164$$, $node$$120$$), $node$$120$$.children = $attr$$18_n$$32_r$$7$$.$js$);
          $arJson$$.push($node$$120$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$88$$) {
      $obj$$88$$ = this.$_getNode$($obj$$88$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$1$$ = !$obj$$88$$ || -1 !== $obj$$88$$ || !$obj$$88$$.length;
        if ($bTree$$1$$ || !$obj$$88$$.hasClass("oj-disabled")) {
          var $s$$19$$ = this.options.data.json;
          !$bTree$$1$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$54$$.isFunction($s$$19$$.data) || $s$$19$$.ajax) && $obj$$88$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$88$$);
        }
      }
    }, $_load_node_json$:function($obj$$89$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$12_s$$20$$ = this.$_getOptions$().data, $data$$165$$ = $d$$12_s$$20$$ && $d$$12_s$$20$$.data || null, $ajax$$1$$ = $d$$12_s$$20$$ && $d$$12_s$$20$$.ajax || null;
      !$d$$12_s$$20$$ || $data$$165$$ || $ajax$$1$$ || ($data$$165$$ = $d$$12_s$$20$$);
      if (($obj$$89$$ = this.$_getNode$($obj$$89$$)) && -1 !== $obj$$89$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$89$$.is(".oj-expanded, .oj-tree-leaf") && 0 === $obj$$89$$.children("ul").children("li").length && $obj$$89$$.data("oj-tree-children")) {
        if ($d$$12_s$$20$$ = this.$_parseJson$($obj$$89$$.data("oj-tree-children"), $obj$$89$$)) {
          $obj$$89$$.append($d$$12_s$$20$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$89$$.removeData("oj-tree-children");
        }
        this.$_cleanNode$($obj$$89$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$89$$ && -1 !== $obj$$89$$) {
          if ($obj$$89$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$89$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$165$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$54$$.isFunction($data$$165$$):
            $data$$165$$.call(this, $obj$$89$$, $$$$54$$.proxy(function($d$$13$$) {
              ($d$$13$$ = this.$_parseJson$($d$$13$$, $obj$$89$$)) ? (-1 !== $obj$$89$$ && $obj$$89$$ ? ($obj$$89$$.append($d$$13$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$89$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$13$$.children()), this.$_cleanNode$($obj$$89$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$89$$ && $obj$$89$$ ? ($obj$$89$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$89$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$89$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$165$$ && !$ajax$$1$$ || !!$data$$165$$ && !!$ajax$$1$$ && (!$obj$$89$$ || -1 === $obj$$89$$):
            $obj$$89$$ && -1 != $obj$$89$$ || (($d$$12_s$$20$$ = this.$_parseJson$($data$$165$$, $obj$$89$$)) ? (this.$_$container_ul$.empty().append($d$$12_s$$20$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$165$$ && !!$ajax$$1$$ || !!$data$$165$$ && !!$ajax$$1$$ && $obj$$89$$ && -1 !== $obj$$89$$:
            $error_func$$ = function $$error_func$$$($x$$55$$, $status$$31$$, $e$$118$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $status$$31$$, $e$$118$$, $x$$55$$);
              -1 != $obj$$89$$ && $obj$$89$$.length ? ($obj$$89$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$89$$.removeData("oj-tree-is-loading"), "success" === $status$$31$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$89$$)) : ("error" == $status$$31$$ || "success" === $status$$31$$ && this.$_data$.$ds$.$correctState$) && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$14$$, $status$$32_tempd$$, $$u$$1_x$$56$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$14$$ = $sf$$.call(this, $d$$14$$, $status$$32_tempd$$, $$u$$1_x$$56$$) || $d$$14$$);
              if ("string" == typeof $d$$14$$) {
                $status$$32_tempd$$ = $d$$14$$.replace(/^[\s\n]+$/, "");
                try {
                  $status$$32_tempd$$ = $$$$54$$.parseJSON($status$$32_tempd$$);
                } catch ($err$$19$$) {
                  $status$$32_tempd$$ = null;
                }
                if (!$status$$32_tempd$$) {
                  return $error_func$$.call(this, $$u$$1_x$$56$$, "Bad JSON", "");
                }
              }
              ($d$$14$$ = this.$_parseJson$($d$$14$$, $obj$$89$$)) ? (-1 !== $obj$$89$$ && $obj$$89$$ ? ($obj$$89$$.append($d$$14$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$89$$.removeData("oj-tree-is-loading")) : ($$u$$1_x$$56$$ = this.$_$container_ul$, $$u$$1_x$$56$$.empty().append($d$$14$$.children()), $$u$$1_x$$56$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_x$$56$$.attr("aria-multiselectable", 
              !0)), this.$_cleanNode$($obj$$89$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$89$$ && $obj$$89$$ ? ($obj$$89$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$89$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$89$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$12_s$$20$$.ajax.context = this, $d$$12_s$$20$$.ajax.error = $error_func$$, $d$$12_s$$20$$.ajax.success = $success_func$$, $d$$12_s$$20$$.dataType || ($d$$12_s$$20$$.ajax.dataType = "json"), $$$$54$$.isFunction($d$$12_s$$20$$.ajax.url) && ($d$$12_s$$20$$.ajax.url = $d$$12_s$$20$$.ajax.url.call(this, $obj$$89$$)), $$$$54$$.isFunction($d$$12_s$$20$$.ajax.data) && ($d$$12_s$$20$$.ajax.data = $d$$12_s$$20$$.ajax.data.call(this, $obj$$89$$)), $$$$54$$.ajax($d$$12_s$$20$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$90_ul2$$, $isRecurse_ul1$$) {
      var $d$$15$$ = !1, $tmp$$5$$, $i$$433$$, $j$$43$$, $title$$11$$;
      if (!$js$$1$$) {
        return $d$$15$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$90_ul2$$ && -1 !== $obj$$90_ul2$$ && $obj$$90_ul2$$.data("oj-tree-children", $d$$15$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$54$$.parseJSON($js$$1$$);
        } catch ($err$$20$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$54$$.isArray($js$$1$$)) {
        $d$$15$$ = $$$$54$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$433$$ = 0;
        for ($j$$43$$ = $js$$1$$.length;$i$$433$$ < $j$$43$$;$i$$433$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$433$$], $obj$$90_ul2$$, !0), $tmp$$5$$.length && ($d$$15$$ = $d$$15$$.append($tmp$$5$$));
        }
        $d$$15$$ = $d$$15$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$11$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$15$$ = $$$$54$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype", $d$$15$$.addClass("oj-tree-type")), $d$$15$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$15$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$15$$.addClass("expanded" === $js$$1$$.state ? "oj-expanded" : "oj-collapsed");
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $bIns$$ = !1, $sp$$3$$;
        $tmp$$5$$ = $$$$54$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$54$$.each($js$$1$$.data, function($i$$434$$, $m$$25$$) {
          $$$$54$$.isFunction($m$$25$$) && ($m$$25$$ = $m$$25$$.call(this, $js$$1$$));
          "string" != typeof $m$$25$$ && ("attr" == $i$$434$$ ? $tmp$$5$$.attr($m$$25$$) : "style" == $i$$434$$ && $tmp$$5$$.css($m$$25$$), "language" == $i$$434$$ && $tmp$$5$$.addClass($m$$25$$));
          $bIns$$ || ($sp$$3$$ = $$$$54$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$3$$[0].textContent = $title$$11$$, $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$3$$), $bIns$$ = !0);
          !$m$$25$$.icon && $js$$1$$.icon && ($m$$25$$.icon = $js$$1$$.icon);
          $m$$25$$.icon && (-1 === $m$$25$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$25$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$25$$.icon + "') center center no-repeat"));
        });
        $d$$15$$.append($tmp$$5$$);
        $d$$15$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$15$$.addClass("oj-collapsed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$15$$.data("oj-tree-children", $js$$1$$.children), $$$$54$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$90_ul2$$, !0), $tmp$$5$$.length && ($obj$$90_ul2$$ = $$$$54$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$90_ul2$$.append($tmp$$5$$), $d$$15$$.append($obj$$90_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$54$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$15$$), $d$$15$$ = $isRecurse_ul1$$);
      return $d$$15$$;
    }, $_correct_state$:function($obj$$91$$) {
      $obj$$91$$ = this.$_getNode$($obj$$91$$);
      if (!$obj$$91$$ || -1 === $obj$$91$$) {
        return!1;
      }
      $obj$$91$$.removeClass("oj-collapsed oj-expanded").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$91$$.find("ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").addClass("oj-tree-icon");
      this.$_emitEvent$({obj:$obj$$91$$}, "correct_state", !0);
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_load_node_html$:function($obj$$92$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$16_s$$21$$ = this.$_getOptions$().data, $data$$166$$ = $d$$16_s$$21$$ && $d$$16_s$$21$$.data || null, $ajax$$2$$ = $d$$16_s$$21$$ && $d$$16_s$$21$$.ajax || null;
      if (($obj$$92$$ = this.$_getNode$($obj$$92$$)) && -1 !== $obj$$92$$) {
        if ($obj$$92$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$92$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$166$$ && !$ajax$$2$$ && $d$$16_s$$21$$ && "string" === typeof $d$$16_s$$21$$:
          this.$_loadHtmlString$($d$$16_s$$21$$, $obj$$92$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$54$$.isFunction($data$$166$$):
          $data$$166$$.call(this, $obj$$92$$, $$$$54$$.proxy(function($d$$17$$) {
            this.$_loadHtmlString$($d$$17$$, $obj$$92$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$166$$ && !$ajax$$2$$:
          $obj$$92$$ && -1 != $obj$$92$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon' \x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li").children("ins:first-child").addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), 
          this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$166$$ && !$ajax$$2$$ || !!$data$$166$$ && !!$ajax$$2$$ && (!$obj$$92$$ || -1 === $obj$$92$$):
          $obj$$92$$ && -1 != $obj$$92$$ || ($d$$16_s$$21$$ = $$$$54$$($data$$166$$), $d$$16_s$$21$$.is("ul") || ($d$$16_s$$21$$ = $$$$54$$("\x3cul /\x3e").append($d$$16_s$$21$$)), this.$_$container_ul$.empty().append($d$$16_s$$21$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && 
          this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$166$$ && !!$ajax$$2$$ || !!$data$$166$$ && !!$ajax$$2$$ && $obj$$92$$ && -1 !== $obj$$92$$:
          $obj$$92$$ = this.$_getNode$($obj$$92$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$57$$, $t$$9$$, $e$$119$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$57$$, $t$$9$$, $e$$119$$);
            -1 != $obj$$92$$ && $obj$$92$$.length ? ($obj$$92$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$92$$.removeData("oj-tree-is-loading"), "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$92$$)) : "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$18_parent$$41$$, $nodes$$6_t$$10$$, $x$$58$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$18_parent$$41$$ = $sf$$1$$.call(this, $d$$18_parent$$41$$, $nodes$$6_t$$10$$, $x$$58$$) || $d$$18_parent$$41$$);
            if ("" === $d$$18_parent$$41$$ || $d$$18_parent$$41$$ && $d$$18_parent$$41$$.toString && "" === $d$$18_parent$$41$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$58$$, $nodes$$6_t$$10$$, "");
            }
            if ($d$$18_parent$$41$$) {
              $d$$18_parent$$41$$ = $$$$54$$($d$$18_parent$$41$$);
              $d$$18_parent$$41$$.is("ul") || ($d$$18_parent$$41$$ = $$$$54$$("\x3cul /\x3e").append($d$$18_parent$$41$$));
              -1 != $obj$$92$$ && $obj$$92$$ ? ($obj$$92$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$92$$), $obj$$92$$.append($d$$18_parent$$41$$).children("ul").find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$92$$.removeData("oj-tree-is-loading"), $obj$$92$$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$18_parent$$41$$ = $obj$$92$$) : 
              (this.$_$container_ul$.empty().append($d$$18_parent$$41$$.children()).find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$18_parent$$41$$ = this.$_$container_ul$);
              this.$_handleHtmlParentNoChildren$($d$$18_parent$$41$$);
              this.$_insertHtmlTextSpan$($d$$18_parent$$41$$);
              $nodes$$6_t$$10$$ = $d$$18_parent$$41$$.children("UL");
              if (1 <= $nodes$$6_t$$10$$.length) {
                $nodes$$6_t$$10$$ = $nodes$$6_t$$10$$.first().find("span.oj-tree-title");
                var $_this$$18$$ = this;
                $$$$54$$.each($nodes$$6_t$$10$$, function() {
                  this.textContent = $_this$$18$$.$_escapeHtml$(this.textContent);
                });
              }
              this.$_data$.types.$defType$ && $d$$18_parent$$41$$ && this.$_addDefType$(this.$_$container_ul$);
              this.$_cleanNode$($obj$$92$$);
              $s_call$$5$$ && $s_call$$5$$.call(this);
            } else {
              $obj$$92$$ && -1 !== $obj$$92$$ ? ($obj$$92$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$92$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$92$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem")
              ;
            }
          }, $d$$16_s$$21$$.ajax.context = this, $d$$16_s$$21$$.ajax.error = $error_func$$1$$, $d$$16_s$$21$$.ajax.success = $success_func$$1$$, $d$$16_s$$21$$.ajax.dataType || ($d$$16_s$$21$$.ajax.dataType = "html"), $$$$54$$.isFunction($d$$16_s$$21$$.ajax.url) && ($d$$16_s$$21$$.ajax.url = $d$$16_s$$21$$.ajax.url.call(this, $obj$$92$$)), $$$$54$$.isFunction($d$$16_s$$21$$.ajax.data) && ($d$$16_s$$21$$.ajax.data = $d$$16_s$$21$$.ajax.data.call(this, $obj$$92$$)), $$$$54$$.ajax($d$$16_s$$21$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$42$$) {
      $lazy$$1_parent$$42$$ = $lazy$$1_parent$$42$$.find($lazy$$1_parent$$42$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$54$$.each($lazy$$1_parent$$42$$, function() {
        $$$$54$$(this).closest("li").addClass("oj-collapsed");
      });
    }, $_removeEmptyUL$:function($l$$15_parent$$43$$) {
      $l$$15_parent$$43$$ = $l$$15_parent$$43$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$15_parent$$43$$.length && $l$$15_parent$$43$$.remove();
    }, $_loadHtmlString$:function($nodes$$7_parent$$44_s$$22$$, $obj$$93$$, $s_call$$6$$) {
      if ($nodes$$7_parent$$44_s$$22$$ && "" !== $nodes$$7_parent$$44_s$$22$$ && $nodes$$7_parent$$44_s$$22$$.toString && "" !== $nodes$$7_parent$$44_s$$22$$.toString().replace(/^[\s\n]+$/, "")) {
        $nodes$$7_parent$$44_s$$22$$ = $$$$54$$($nodes$$7_parent$$44_s$$22$$);
        $nodes$$7_parent$$44_s$$22$$.is("ul") || ($nodes$$7_parent$$44_s$$22$$ = $$$$54$$("\x3cul /\x3e").append($nodes$$7_parent$$44_s$$22$$));
        -1 != $obj$$93$$ && $obj$$93$$ ? ($obj$$93$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$93$$.append($nodes$$7_parent$$44_s$$22$$).children("ul").find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$93$$.removeData("oj-tree-is-loading"), $nodes$$7_parent$$44_s$$22$$ = $obj$$93$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($nodes$$7_parent$$44_s$$22$$.children()).find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $nodes$$7_parent$$44_s$$22$$ = this.$_$container_ul$, 
        this.$_addDefType$(this.$_$container_ul$));
        $nodes$$7_parent$$44_s$$22$$ && this.$_insertHtmlTextSpan$($nodes$$7_parent$$44_s$$22$$);
        $nodes$$7_parent$$44_s$$22$$ = $nodes$$7_parent$$44_s$$22$$.children("UL");
        if (1 <= $nodes$$7_parent$$44_s$$22$$.length) {
          $nodes$$7_parent$$44_s$$22$$ = $nodes$$7_parent$$44_s$$22$$.first().find("span.oj-tree-title");
          var $_this$$19$$ = this;
          $$$$54$$.each($nodes$$7_parent$$44_s$$22$$, function() {
            this.textContent = $_this$$19$$.$_escapeHtml$(this.textContent);
          });
        }
        this.$_cleanNode$($obj$$93$$);
        $s_call$$6$$ && $s_call$$6$$.call(this);
      } else {
        $obj$$93$$ && -1 !== $obj$$93$$ ? ($obj$$93$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$93$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$93$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this));
      }
    }, $_insertHtmlTextSpan$:function($elem$$154$$) {
      $$$$54$$.each($elem$$154$$.find("li a"), function($i$$435$$, $val$$70$$) {
        var $ih$$ = $val$$70$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$70$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$94$$) {
      var $s$$23$$, $typeAttr$$1$$;
      this.$_data$.types.$defType$ && ($typeAttr$$1$$ = ($s$$23$$ = this.options.types) ? $s$$23$$.attr : this.$_data$.types.$defaults$.attr, $$$$54$$.each($obj$$94$$.find("li"), function($i$$436$$, $val$$71$$) {
        $val$$71$$ = $$$$54$$($val$$71$$);
        $val$$71$$.attr($typeAttr$$1$$) || $val$$71$$.attr($typeAttr$$1$$, "oj-tree-deftype").addClass("oj-tree-type");
      }));
    }, $_dnd_prepare$:function() {
      var $a$$116_vars$$ = this.$_data$.dnd.$vars$;
      if ($a$$116_vars$$.$r$ && $a$$116_vars$$.$r$.length) {
        this.$_data$.dnd.off = $a$$116_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.dnd.off.right = this.$_data$.dnd.off.left + $a$$116_vars$$.$r$.width() - $a$$116_vars$$.$r$.find("\x3ea").width() - 14);
        this.$_data$.dnd.$targ_ml_width$ = $a$$116_vars$$.$r$.find("a").width();
        if (this.$_data$.dnd.$foreign$) {
          return $a$$116_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$116_vars$$.$o$, r:$a$$116_vars$$.$r$}), this.$_data$.dnd.after = $a$$116_vars$$.after, this.$_data$.dnd.before = $a$$116_vars$$.before, this.$_data$.dnd.inside = $a$$116_vars$$.inside, this.$_data$.dnd.$prepared$ = !0, this.$_dnd_show$();
        }
        this.$_prepare_move$($a$$116_vars$$.$o$, $a$$116_vars$$.$r$, "before");
        this.$_data$.dnd.before = this.check_move();
        this.$_prepare_move$($a$$116_vars$$.$o$, $a$$116_vars$$.$r$, "after");
        this.$_data$.dnd.after = this.check_move();
        this.$_is_loaded$($a$$116_vars$$.$r$) ? (this.$_prepare_move$($a$$116_vars$$.$o$, $a$$116_vars$$.$r$, "inside"), this.$_data$.dnd.inside = this.check_move()) : this.$_data$.dnd.inside = !1;
        this.$_data$.dnd.$prepared$ = !0;
        return this.$_dnd_show$();
      }
    }, $_dnd_show$:function() {
      var $dnd_mLeft$$ = this.$_data$.dnd, $isParent$$1_lineTop_o$$18$$ = !1, $mlLeft_pos$$15$$;
      if ($dnd_mLeft$$.$prepared$) {
        var $isParent$$1_lineTop_o$$18$$ = ["before", "inside", "after"], $r$$8$$ = !1, $ctl$$ = $dnd_mLeft$$.$ctl$, $vars$$1$$ = $dnd_mLeft$$.$vars$, $isParent$$1_lineTop_o$$18$$ = $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_mLeft$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$54$$.each($isParent$$1_lineTop_o$$18$$, $$$$54$$.proxy(function($i$$437$$, $val$$72$$) {
          if (this.$_data$.dnd[$val$$72$$]) {
            return $ctl$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $r$$8$$ = $val$$72$$, !1;
          }
        }, this));
        !1 === $r$$8$$ ? ($ctl$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), $vars$$1$$.$r$.addClass("oj-invalid-drop")) : $vars$$1$$.$r$.removeClass("oj-invalid-drop").addClass("oj-valid-drop");
        $mlLeft_pos$$15$$ = this.$_isRtl$ ? this.$_data$.dnd.off.right - 18 : this.$_data$.dnd.off.left + 5;
        $isParent$$1_lineTop_o$$18$$ = !this.isLeaf($vars$$1$$.$r$);
        $dnd_mLeft$$ = this.$_isRtl$ ? $mlLeft_pos$$15$$ + this.$_data$.dnd.$targ_ml_width$ + 18 : $mlLeft_pos$$15$$;
        $mlLeft_pos$$15$$ = this.$_isRtl$ ? $dnd_mLeft$$ - this.$_data$.dnd.$ml_width$ : $mlLeft_pos$$15$$ + 8;
        switch($r$$8$$) {
          case "before":
            $isParent$$1_lineTop_o$$18$$ = this.$_data$.dnd.off.top - 3;
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:$isParent$$1_lineTop_o$$18$$ - 7 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$15$$ + "px", top:$isParent$$1_lineTop_o$$18$$ + "px"}).show();
            break;
          case "after":
            $isParent$$1_lineTop_o$$18$$ = this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 3;
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:$isParent$$1_lineTop_o$$18$$ - 2 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$15$$ + "px", top:$isParent$$1_lineTop_o$$18$$ + 6 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + (this.$_isRtl$ ? $isParent$$1_lineTop_o$$18$$ ? -4 : 0 : 4) + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ / 2 - 8 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
        }
        return $vars$$1$$.$last_pos$ = $r$$8$$;
      }
    }, $_dnd_enter$:function($obj$$95_openTimeout_s$$24$$) {
      var $dnd$$1$$ = this.$_data$.dnd, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$95_openTimeout_s$$24$$);
      $obj$$95_openTimeout_s$$24$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$95_openTimeout_s$$24$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$54$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$95_openTimeout_s$$24$$ = $obj$$95_openTimeout_s$$24$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && ($dnd$$1$$.$to2$ = setTimeout($$$$54$$.proxy(this.$_dnd_open$, this), $obj$$95_openTimeout_s$$24$$))) : $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && this.$_dnd_open$();
    }, $_dnd_leave$:function($e$$120$$) {
      var $dnd$$2$$ = this.$_data$.dnd, $vars$$3$$ = this.$_data$.dnd.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
      this.$_$container$.addClass("oj-invalid-drop");
      $vars$$3$$.$o$ && $vars$$3$$.$o$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop");
      $vars$$3$$.$r$ && $vars$$3$$.$r$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$120$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1));
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.dnd.$vars$;
      this.$_data$.dnd.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$54$$.proxy(this.$_dnd_prepare$, this), !0);
    }, $_dnd_finish$:function($e$$121$$) {
      var $dnd$$3$$ = this.$_data$.dnd, $vars$$5$$ = this.$_data$.dnd.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_moveNode$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$121$$[this.options.dnd.copy_modifier + "Key"]));
      $vars$$5$$.$o$ && $vars$$5$$.$o$.removeClass("oj-drag").removeClass("oj-invalid-drop").removeClass("oj-valid-drop");
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide();
    }, $_start_drag$:function($obj$$96$$, $e$$122$$) {
      var $dnd$$4$$ = this.$_data$.dnd, $vars$$6$$ = this.$_data$.dnd.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$96$$);
      if (!$vars$$6$$.$o$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
        var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$_getString$("labelMultiSelection") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$, $dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;");
        $vars$$6$$.$o$.addClass("oj-drag");
        this.$_drag_start$($e$$122$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cspan\x3e" + $dt$$ + "\x3c/span\x3e");
        this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
        $dnd$$4$$.$cof$ = $cnt$$.offset();
        $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
        $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
        $dnd$$4$$.$active$ = !0;
      }
    }, $_drag_start$:function($e$$123$$, $data$$167$$, $html$$3$$) {
      var $ctl$$1$$ = this.$_data$.dnd.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$123$$.currentTarget.unselectable = "on", $e$$123$$.currentTarget.onselectstart = function $$e$$123$$$currentTarget$onselectstart$() {
          return!1;
        }, $e$$123$$.currentTarget.style && ($e$$123$$.currentTarget.style.MozUserSelect = "none");
      } catch ($err$$21$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$123$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$123$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$167$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.helper = $$$$54$$("\x3cdiv class\x3d'oj-tree-title oj-drag' style\x3d'top:-2000px' /\x3e").html($html$$3$$);
      $$$$54$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$54$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1;
    }, $_drag$:function($e$$124$$) {
      var $ctl$$2$$ = this.$_data$.dnd.$ctl$, $$title_vars$$7$$ = this.$_data$.dnd.$vars$;
      if ($ctl$$2$$.$is_down$) {
        if (!$ctl$$2$$.$is_drag$) {
          if (5 < Math.abs($e$$124$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$124$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.helper.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$54$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$124$$, data:$ctl$$2$$.$user_data$}]);
          } else {
            return;
          }
        }
        if ("mousemove" === $e$$124$$.type) {
          var $d$$19_l$$16$$ = $$$$54$$(document), $horizDisp_t$$11$$ = $d$$19_l$$16$$.scrollTop(), $d$$19_l$$16$$ = $d$$19_l$$16$$.scrollLeft();
          20 > $e$$124$$.pageY - $horizDisp_t$$11$$ ? ($$title_vars$$7$$.$sti$ && "down" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0), $$title_vars$$7$$.$sti$ || ($$title_vars$$7$$.$dir1$ = "up", $$title_vars$$7$$.$sti$ = setInterval(function() {
            $$$$54$$(document).scrollTop($$$$54$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sti$ && "up" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0);
          20 > $$$$54$$(window).height() - ($e$$124$$.pageY - $horizDisp_t$$11$$) ? ($$title_vars$$7$$.$sti$ && "up" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0), $$title_vars$$7$$.$sti$ || ($$title_vars$$7$$.$dir1$ = "down", $$title_vars$$7$$.$sti$ = setInterval(function() {
            $$$$54$$(document).scrollTop(Number($$$$54$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sti$ && "down" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0);
          20 > $e$$124$$.pageX - $d$$19_l$$16$$ ? ($$title_vars$$7$$.$sli$ && "right" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0), $$title_vars$$7$$.$sli$ || ($$title_vars$$7$$.$dir2$ = "left", $$title_vars$$7$$.$sli$ = setInterval(function() {
            $$$$54$$(document).scrollLeft($$$$54$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sli$ && "left" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0);
          20 > $$$$54$$(window).width() - ($e$$124$$.pageX - $d$$19_l$$16$$) ? ($$title_vars$$7$$.$sli$ && "left" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0), $$title_vars$$7$$.$sli$ || ($$title_vars$$7$$.$dir2$ = "right", $$title_vars$$7$$.$sli$ = setInterval(function() {
            $$$$54$$(document).scrollLeft(Number($$$$54$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sli$ && "right" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0);
        }
        $horizDisp_t$$11$$ = $ctl$$2$$.$helper_horiz$;
        this.$_isRtl$ && $$title_vars$$7$$.$o$ && ($$title_vars$$7$$ = $$title_vars$$7$$.$o$.find("span.oj-tree-title:first")) && 0 < $$title_vars$$7$$.length && ($horizDisp_t$$11$$ = -$horizDisp_t$$11$$ - $$title_vars$$7$$[0].offsetWidth);
        $ctl$$2$$.helper.css({left:$e$$124$$.pageX + $horizDisp_t$$11$$ + "px", top:$e$$124$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$54$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$124$$, data:$ctl$$2$$.$user_data$}]);
      }
    }, $_drag_stop$:function($e$$125$$) {
      var $vars$$8$$ = this.$_data$.dnd.$vars$, $ctl$$3$$ = this.$_data$.dnd.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $vars$$8$$.$o$ && $vars$$8$$.$o$.removeClass("oj-drag").removeClass("oj-invalid-drop").removeClass("oj-valid-drop");
      $$$$54$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$54$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$54$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$125$$ ? $e$$125$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.helper.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1;
      this.$_$container$.removeClass("oj-invalid-drop");
    }, $_save_opened$:function() {
      var $_this$$20$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-expanded").each(function() {
        this.id && $_this$$20$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
    }, $_reload_nodes$:function($bIsCallback$$) {
      var $_this$$21$$ = this, $bDone$$ = !0, $current$$24$$ = [], $remaining$$1$$ = [], $n$$33$$, $id$$62$$;
      $bIsCallback$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0);
      this.$_isOptExpandAll$() && (this.$_data$.$core$.$toExpand$ = [], this.$_$container_ul$.find("li.oj-collapsed").each(function() {
        $id$$62$$ = "#" + $$$$54$$(this).attr("id");
        $_this$$21$$.isExpanded($id$$62$$) || $_this$$21$$.$_data$.$core$.$toExpand$.push($id$$62$$);
      }));
      this.$_data$.$core$.$toExpand$ = $$$$54$$.map($$$$54$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$34$$) {
        return "#" + $n$$34$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toLoad$ = $$$$54$$.map($$$$54$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$35$$) {
        return "#" + $n$$35$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$), this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.reduce(function($a$$117$$, $b$$75$$) {
        0 > $a$$117$$.indexOf($b$$75$$) && $a$$117$$.push($b$$75$$);
        return $a$$117$$;
      }, []));
      this.$_data$.$core$.$toLoad$.length && ($$$$54$$.each(this.$_data$.$core$.$toLoad$, function($i$$438$$, $val$$73$$) {
        if ("#" == $val$$73$$) {
          return!0;
        }
        $n$$33$$ = $_this$$21$$.$_$container$.find($val$$73$$);
        $n$$33$$.length ? $_this$$21$$.isExpanded($val$$73$$) || $current$$24$$.push($val$$73$$) : $remaining$$1$$.push($val$$73$$);
      }), $current$$24$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$1$$, $$$$54$$.each($current$$24$$, function($i$$439$$, $val$$74$$) {
        $_this$$21$$.$_is_loaded$($val$$74$$) || ($_this$$21$$.$_load_node$($val$$74$$, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }), $bDone$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$54$$.each(this.$_data$.$core$.$toExpand$, function($i$$440$$, $val$$75$$) {
        $_this$$21$$.isExpanded($val$$75$$) || $_this$$21$$.$_expand$($val$$75$$, !1, !0);
      });
      $bDone$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$21$$.$_emitEvent$({}, "reload_nodes", !0);
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, setTheme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$54$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initMenu$();
    }, $_emitEvent$:function($data$$168$$, $evname$$, $bInternal$$) {
      if ($evname$$ && "string" === $$$$54$$.type($evname$$) && (!0 !== this.$_data$.$core$.locked || "unlock" === $evname$$ || "isLocked" === $evname$$ || "lock" === $evname$$)) {
        var $func$$9_inst$$, $args$$22_bContinue$$ = Array.prototype.slice.call(arguments);
        $func$$9_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $evname$$, $isPublic$$ = $bInternal$$ ? !1 : !0;
        $isPublic$$ || ($evname$$ = "_tree" + $evname$$);
        var $eventdata$$ = {};
        $eventdata$$.item = $data$$168$$ ? $data$$168$$.obj : void 0;
        $eventdata$$.inst = $func$$9_inst$$;
        $isBefore$$ ? ($func$$9_inst$$ = $data$$168$$.func, $eventdata$$.func = $func$$9_inst$$, $eventdata$$.args = $args$$22_bContinue$$, "rename" === $func$$9_inst$$ && ($eventdata$$.title = $data$$168$$.title, $eventdata$$.prevTitle = $data$$168$$.prevTitle)) : $isPublic$$ && ("move" == $evname$$ ? ($eventdata$$.position = $data$$168$$.$p$, $eventdata$$.reference = $data$$168$$.$r$, $eventdata$$.data = $data$$168$$) : "rename" == $evname$$ ? ($eventdata$$.title = $data$$168$$.title, $eventdata$$.prevTitle = 
        $data$$168$$.prevTitle) : "remove" == $evname$$ ? ($eventdata$$.parent = $data$$168$$.parent, $eventdata$$.prev = $data$$168$$.prev) : "delete" == $evname$$ ? ($eventdata$$.prev = $data$$168$$.prev, $eventdata$$.parent = $data$$168$$.parent) : "expandAll" === $evname$$ || "collapseAll" === $evname$$ || "deselectAll" === $evname$$ ? $eventdata$$.targ = $data$$168$$.targ : "loaded" === $evname$$ && ($eventdata$$.item = -1));
        if ($isPublic$$) {
          if ($args$$22_bContinue$$ = this._trigger($evname$$, new $$$$54$$.Event("oj" + $evname$$), $eventdata$$), $isBefore$$) {
            return "undefined" != typeof $args$$22_bContinue$$ && ($args$$22_bContinue$$ = $args$$22_bContinue$$ ? !0 : !1), $args$$22_bContinue$$;
          }
        } else {
          this.$_$container$.trigger($evname$$, $eventdata$$);
        }
      }
    }, $_fireOptionChangeEvent$:function($key$$165$$, $prevVal$$, $newVal$$4$$, $origEvent$$) {
      "selection" === $key$$165$$ && (null == $newVal$$4$$ && ($newVal$$4$$ = this.$_getSelected$()), this.$_compareSelectionValues$($prevVal$$, $newVal$$4$$) || this.option($key$$165$$, $newVal$$4$$, {_context:{originalEvent:$origEvent$$, $internalSet$:!0}, changed:!0}));
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $_start$:function() {
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$_getString$("stateLoading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_getIndex$());
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-collapsed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "touchend.ojtree", $$$$54$$.proxy(function($event$$555_trgt$$) {
        $event$$555_trgt$$.preventDefault();
        $event$$555_trgt$$ = $$$$54$$($event$$555_trgt$$.target);
        this.toggleExpand($event$$555_trgt$$);
      }, this));
      this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "click.ojtree", $$$$54$$.proxy(function($event$$556_trgt$$1$$) {
        $event$$556_trgt$$1$$ = $$$$54$$($event$$556_trgt$$1$$.target);
        this.toggleExpand($event$$556_trgt$$1$$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mousedown", $$$$54$$.proxy(function($event$$557$$) {
        this.$_data$.ui.$disclosureClick$ = !0;
        $$$$54$$($event$$557$$.target).removeClass("oj-default").removeClass("oj-hover").addClass("oj-selected");
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mouseup", $$$$54$$.proxy(function($event$$558$$) {
        $$$$54$$($event$$558$$.target).removeClass("oj-selected").addClass("oj-default");
      }, this)).bind("mousedown.ojtree", $$$$54$$.proxy(function() {
        this.$_setFocus$();
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$3$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$3$$ = window.getSelection();
            try {
              $sel$$3$$.removeAllRanges(), $sel$$3$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$22$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$54$$.proxy(function() {
        if (this.$_data$.ui.$disclosureClick$) {
          this.$_data$.ui.$disclosureClick$ = !1;
        } else {
          this.$_data$.ui.$focused$ = !0;
          var $n$$36$$;
          this.$_data$.ui.$lastHovered$ ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastHovered$, $n$$36$$ = this.$_data$.ui.$hovered$) : this.$_data$.ui.$lastSelected$ && 0 < this.$_data$.ui.$lastSelected$.length ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastSelected$, $n$$36$$ = this.$_data$.ui.$hovered$) : $n$$36$$ = this.$_$container_ul$.find("li:first");
          $n$$36$$ && (this.hover($n$$36$$), this.$_data$.ui.$lastHovered$ = null, this.$_$container_ul$.find("a.oj-selected").removeClass("oj-tree-inactive"));
        }
      }, this)).blur($$$$54$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
        this.$_data$.ui.$lastHovered$ = this.$_data$.ui.$hovered$;
        this.$_data$.ui.$lastHovered$ && this.dehover(this.$_data$.ui.$hovered$);
        this.$_$container_ul$.find("a.oj-selected").addClass("oj-tree-inactive");
      }, this));
      this.$_emitEvent$({}, "init", !0);
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_getIndex$());
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$54$$();
      this.$_data$.ui.$lastSelected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      var $a$$118$$ = this.options.selection;
      $a$$118$$ && "array" === $$$$54$$.type($a$$118$$) && 0 < $a$$118$$.length && (this.$_data$.ui.$to_select$ = $a$$118$$, this.options.selection = []);
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list a", "touchend.ojtree", $$$$54$$.proxy(function($event$$560$$) {
        this.$_data$.ui.$touchEvent$ = !0;
        this.$_handleNodeTapClick$($event$$560$$);
        $$$$54$$($event$$560$$.currentTarget).hasClass("oj-tree-loading") || this.dehover();
      }, this));
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$54$$.proxy(function($event$$561$$) {
        this.$_data$.ui.$touchEvent$ = !1;
        this.$_handleNodeTapClick$($event$$561$$);
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$54$$.proxy(function($event$$562$$) {
        $$$$54$$($event$$562$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$562$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$54$$.proxy(function($event$$563$$) {
        $$$$54$$($event$$563$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$563$$.target);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseenter.ojtree", $$$$54$$.proxy(function($event$$564$$) {
        $$$$54$$($event$$564$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$564$$.target, !0);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseleave.ojtree", $$$$54$$.proxy(function($event$$565$$) {
        $$$$54$$($event$$565$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$565$$.target, !1);
      }, this)).bind("_treereopen", $$$$54$$.proxy(function() {
        this.reselect();
      }, this)).bind("_treeget_rollback", $$$$54$$.proxy(function() {
        this.dehover();
        this.saveSelected();
      }, this)).bind("ojcollapse", $$$$54$$.proxy(function($event$$566$$, $ui$$35$$) {
        var $obj$$97$$ = this.$_getNode$($ui$$35$$.item), $clk$$ = $obj$$97$$ && $obj$$97$$.length ? $obj$$97$$.children("ul").find("a.oj-selected") : $$$$54$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$97$$);
        });
      }, this)).bind("ojremove", $$$$54$$.proxy(function($event$$567$$, $ui$$36$$) {
        var $s$$25$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$98$$ = this.$_getNode$($ui$$36$$.item), $clk$$1_obj$$98$$ = $clk$$1_obj$$98$$ && $clk$$1_obj$$98$$.length ? $clk$$1_obj$$98$$.find("a.oj-selected") : [], $_this$$23$$ = this, $n$$37$$;
        $clk$$1_obj$$98$$.each(function() {
          $_this$$23$$.deselect(this);
          $_this$$23$$.$_data$.ui.$lastHovered$ && ($n$$37$$ = $_this$$23$$.$_getNode$(this)) && $_this$$23$$.$_data$.ui.$lastHovered$.attr("id") == $n$$37$$.attr("id") && ($_this$$23$$.$_data$.ui.$lastHovered$ = null);
        });
        $s$$25$$ && $clk$$1_obj$$98$$.length && $ui$$36$$.prev && $ui$$36$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$23$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$54$$.proxy(function($event$$568$$, $ui$$37$$) {
        var $data$$169$$ = $ui$$37$$.data, $copy$$1_p$$13$$ = $data$$169$$.$cy$;
        $copy$$1_p$$13$$ && $data$$169$$.$oc$ && ($data$$169$$.$oc$.find("a.oj-selected").removeClass("oj-selected"), $data$$169$$.$oc$.removeAttr("aria-selected"));
        $data$$169$$.$ot$ === $data$$169$$.$rt$ || $copy$$1_p$$13$$ || ($copy$$1_p$$13$$ = $data$$169$$.$ot$.$_data$.ui, $copy$$1_p$$13$$.$lastHovered$ && ($data$$169$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastHovered$.attr("id") && ($copy$$1_p$$13$$.$lastHovered$ = null), $copy$$1_p$$13$$.$lastSelected$ && $data$$169$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastSelected$.attr("id") && ($copy$$1_p$$13$$.$lastSelected$ = null)));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("_treeafter_close", function($e$$128$$, $ui$$38$$) {
        $ui$$38$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$54$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_getIndex$() + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$54$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("_treeinit", $$$$54$$.proxy(function() {
        var $s$$26$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$26$$.dots;
        this.$_data$.$themes$.icons = $s$$26$$.icons;
        this.setTheme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$54$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$27$$ = this.options.types;
      $s$$27$$ && this.$_$container$.bind("_treeinit", $$$$54$$.proxy(function() {
        var $types$$ = $$$$54$$.extend(!0, {}, $s$$27$$.types), $attr$$19$$ = $s$$27$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$24$$ = this;
        $$$$54$$.each($types$$, function($i$$441$$, $tp$$) {
          $$$$54$$.each($tp$$, function($k$$11$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$11$$) || $_this$$24$$.$_data$.types.$attachTo$.push($k$$11$$);
          });
          var $ot$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$441$$ ? ($_this$$24$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li.oj-tree-type a \x3e .oj-tree-node-icon { ", $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"oj-tree-deftype"].oj-tree-type \x3e a ins.oj-tree-node-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + 
            $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"' + $i$$441$$ + '"].oj-tree-type \x3e a \x3e ins.oj-tree-node-icon { '), $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$54$$.proxy(function($e$$129$$, $data$$170$$) {
        var $d$$20_o$$19_s$$28$$, $ty$$1$$, $func$$10$$ = $data$$170$$.func, $item$$96$$ = $data$$170$$.item;
        if (($d$$20_o$$19_s$$28$$ = ($d$$20_o$$19_s$$28$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$96$$) : !1) && -1 !== $d$$20_o$$19_s$$28$$ && $d$$20_o$$19_s$$28$$.length ? $d$$20_o$$19_s$$28$$.data("oj-tree") : !1) && $d$$20_o$$19_s$$28$$.types && !1 === $d$$20_o$$19_s$$28$$[$func$$10$$] || -1 !== $$$$54$$.inArray($func$$10$$, this.$_data$.types.$attachTo$) && $data$$170$$.item && ($data$$170$$.item.tagName || $data$$170$$.item.jquery) && ($d$$20_o$$19_s$$28$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$96$$), ($d$$20_o$$19_s$$28$$[$ty$$1$$] && "undefined" !== typeof $d$$20_o$$19_s$$28$$[$ty$$1$$][$func$$10$$] || $d$$20_o$$19_s$$28$$["default"] && "undefined" !== typeof $d$$20_o$$19_s$$28$$["default"][$func$$10$$]) && !1 === this.$_check$($func$$10$$, $item$$96$$))) {
          return $e$$129$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$1$$ = "", $css$$1$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$1$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$1$$ + " background-image:none; ";
      return $css$$1$$ = $tp$$1$$.icon.position ? $css$$1$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$1$$ + " background-position:0 0; ";
    }, $_initDnD$:function() {
      if (this.$_data$.dnd.reorder) {
        var $s$$29_vars$$9$$ = this.$_data$.dnd.$vars$;
        $s$$29_vars$$9$$.$m$ = $$$$54$$("\x3cdiv class\x3d'oj-tree-drop-marker'\x3e\x3cspan class\x3d'oj-tree-drop-ptr oj-component-icon'\x3e\x26#160;\x3c/span\x3e\x3c/div\x3e").hide().bind("mouseleave mouseenter", $$$$54$$.proxy(function($e$$130$$) {
          var $vars$$10$$ = this.$_data$.dnd.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$130$$.preventDefault();
          $e$$130$$.stopImmediatePropagation();
          return!1;
        }, this)).appendTo("body");
        $s$$29_vars$$9$$.$ml$ = $$$$54$$("\x3cdiv /\x3e").addClass("oj-tree-drop-marker-line").hide().bind("mouseup", function($e$$131$$) {
          var $vars$$11$$ = this.$_data$.dnd.$vars$;
          if ($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$131$$), $e$$131$$.preventDefault(), $e$$131$$.stopImmediatePropagation(), !1;
          }
        }).bind("mouseleave", $$$$54$$.proxy(function($e$$132$$) {
          var $vars$$12$$ = this.$_data$.dnd.$vars$, $rt$$ = $$$$54$$($e$$132$$.relatedTarget);
          if (($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$132$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$132$$.preventDefault(), $e$$132$$.stopImmediatePropagation(), !1;
          }
        }, this)).appendTo("body");
        this.$_data$.dnd.$ml_width$ = $s$$29_vars$$9$$.$ml$.width();
        $$$$54$$(document).bind("drag_start.ojtreeu", $$$$54$$.proxy(function($e$$133$$, $data$$171$$) {
          var $vars$$13$$ = this.$_data$.dnd.$vars$;
          $data$$171$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show());
        }, this));
        $$$$54$$(document).bind("drag_stop.ojtreeu", $$$$54$$.proxy(function($e$$134$$, $data$$172$$) {
          var $vars$$14$$ = this.$_data$.dnd.$vars$;
          $data$$172$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide());
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$54$$.proxy(function($dc_e$$135_tr$$1$$) {
          var $ctl$$4$$ = this.$_data$.dnd.$ctl$, $vars$$15$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($vars$$15$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$15$$.$ml$ && $vars$$15$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $dc_e$$135_tr$$1$$.currentTarget === $dc_e$$135_tr$$1$$.target && $ctl$$4$$.$user_data$.$obj$ && $$$$54$$($ctl$$4$$.$user_data$.$obj$).length && $$$$54$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== 
          $dc_e$$135_tr$$1$$.target)) {
            if ($dc_e$$135_tr$$1$$ = this.$_reference$($dc_e$$135_tr$$1$$.target), $dc_e$$135_tr$$1$$.data.dnd.$foreign$) {
              if ($dc_e$$135_tr$$1$$ = $dc_e$$135_tr$$1$$.options.dnd.drag_check.call(this, {o:$vars$$15$$.$o$, r:$dc_e$$135_tr$$1$$.$_$container$, is_root:!0}), !0 === $dc_e$$135_tr$$1$$ || !0 === $dc_e$$135_tr$$1$$.inside || !0 === $dc_e$$135_tr$$1$$.before || !0 === $dc_e$$135_tr$$1$$.after) {
                $ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop");
              }
            } else {
              $dc_e$$135_tr$$1$$.$_prepare_move$($vars$$15$$.$o$, $dc_e$$135_tr$$1$$.$_$container$, "last"), $dc_e$$135_tr$$1$$.check_move() && ($ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
            }
          }
        }, this)).bind("mouseup.ojtree", $$$$54$$.proxy(function($dc$$1_e$$136$$) {
          var $vars$$16$$ = this.$_data$.dnd.$vars$, $ctl$$5_tr$$2$$ = this.$_data$.dnd.$ctl$;
          $ctl$$5_tr$$2$$.$is_drag$ && $ctl$$5_tr$$2$$.$user_data$.$jstree$ && $dc$$1_e$$136$$.currentTarget === $dc$$1_e$$136$$.target && $ctl$$5_tr$$2$$.$user_data$.$obj$ && $$$$54$$($ctl$$5_tr$$2$$.$user_data$.$obj$).length && $$$$54$$($ctl$$5_tr$$2$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$136$$.target && ($ctl$$5_tr$$2$$ = this.$_reference$($dc$$1_e$$136$$.currentTarget), $ctl$$5_tr$$2$$.data.dnd.foreign ? ($dc$$1_e$$136$$ = $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$136$$ && !0 !== $dc$$1_e$$136$$.inside && !0 !== $dc$$1_e$$136$$.before && !0 !== $dc$$1_e$$136$$.after || $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$2$$.$_moveNode$($vars$$16$$.$o$, $ctl$$5_tr$$2$$.$_$container$, "last", $dc$$1_e$$136$$[$ctl$$5_tr$$2$$.options.dnd.copy_modifier + "Key"]));
        }, this)).bind("mouseleave.ojtree", $$$$54$$.proxy(function($e$$137$$) {
          var $ctl$$6$$ = this.$_data$.dnd.$ctl$;
          if ($e$$137$$.relatedTarget && $$$$54$$($e$$137$$.relatedTarget).hasClass("oj-tree-drop-marker-line")) {
            return!1;
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$to1$ && clearTimeout(this.$_data$.dnd.$to1$), this.$_data$.dnd.$to2$ && clearTimeout(this.$_data$.dnd.$to2$), $ctl$$6$$.helper.children("ins").hasClass("oj-tree-drop-ok") && ($ctl$$6$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), this.$_$container$.addClass("oj-invalid-drop"), 
          this.$_data$.dnd.$vars$.$o$ && this.$_data$.dnd.$vars$.$o$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop")));
        }, this)).bind("mousemove.ojtree", $$$$54$$.proxy(function($e$$138$$) {
          var $ctl$$7$$ = this.$_data$.dnd.$ctl$;
          if ($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$138$$.pageX + 24 > this.$_data$.dnd.$cof$.left + this.$_data$.dnd.$cw$ ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$54$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$138$$.pageX - 24 < this.$_data$.dnd.$cof$.left ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$54$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$);
            $e$$138$$.pageY + 24 > this.$_data$.dnd.$cof$.top + this.$_data$.dnd.ch ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$54$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$138$$.pageY - 24 < this.$_data$.dnd.$cof$.top ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$54$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$);
          }
        }, this)).bind("scroll.ojtree", $$$$54$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.dnd.$ctl$, $vars$$17$$ = this.$_data$.dnd.$vars$;
          $ctl$$8$$.$is_drag$ && $ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$ && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide());
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$54$$.proxy(function($e$$140$$) {
          if (1 === $e$$140$$.which) {
            return this.$_start_drag$($e$$140$$.currentTarget, $e$$140$$), !1;
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$54$$.proxy(function($e$$141$$) {
          var $ctl$$9$$ = this.$_data$.dnd.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$141$$.currentTarget);
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$54$$.proxy(function($e$$142$$) {
          var $ctl$$10$$ = this.$_data$.dnd.$ctl$, $vars$$18$$ = this.$_data$.dnd.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$142$$.currentTarget || this.$_dnd_enter$($e$$142$$.currentTarget), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$54$$($e$$142$$.target).offset()), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$54$$($e$$142$$.target).offset()), this.$_data$.dnd.$w$ = ($e$$142$$.pageY - (this.$_data$.dnd.off.top || 
          0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.dnd.$w$ && (this.$_data$.dnd.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$());
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$54$$.proxy(function($e$$143$$) {
          var $ctl$$11$$ = this.$_data$.dnd.$ctl$, $vars$$19$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if ($e$$143$$.relatedTarget && $$$$54$$($e$$143$$.relatedTarget).hasClass("oj-tree-drop-marker-line")) {
              return!1;
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.dnd.$mto$ = setTimeout(function($t$$12$$) {
              return function() {
                $t$$12$$.$_dnd_leave$($e$$143$$);
              };
            }(this), 0);
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$54$$.proxy(function($e$$144$$) {
          var $ctl$$12$$ = this.$_data$.dnd.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$144$$);
        }, this));
        $$$$54$$(document).bind("drag_stop.ojtreeu", $$$$54$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.dnd, $vars$$20$$ = this.$_data$.dnd.$vars$;
          $dnd$$5$$.$to1$ && clearTimeout($dnd$$5$$.$to1$);
          $dnd$$5$$.$to2$ && clearTimeout($dnd$$5$$.$to2$);
          $dnd$$5$$.$i1$ && clearInterval($dnd$$5$$.$i1$);
          $dnd$$5$$.$i2$ && clearInterval($dnd$$5$$.$i2$);
          $dnd$$5$$.after = !1;
          $dnd$$5$$.before = !1;
          $dnd$$5$$.inside = !1;
          $dnd$$5$$.off = !1;
          $dnd$$5$$.$prepared$ = !1;
          $dnd$$5$$.$w$ = !1;
          $dnd$$5$$.$to1$ = !1;
          $dnd$$5$$.$to2$ = !1;
          $dnd$$5$$.$i1$ = !1;
          $dnd$$5$$.$i2$ = !1;
          $dnd$$5$$.$active$ = !1;
          $dnd$$5$$.$foreign$ = !1;
          $vars$$20$$.$m$ && $vars$$20$$.$m$.css({top:"-2000px"});
          $vars$$20$$.$ml$ && $vars$$20$$.$ml$.css({top:"-2000px"});
        }, this)).bind("drag_start.ojtreeu", $$$$54$$.proxy(function($e$$145$$, $data$$173$$) {
          if ($data$$173$$.data.$jstree$) {
            var $et$$ = $$$$54$$($data$$173$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_getIndex$()) && this.$_dnd_enter$($et$$);
          }
        }, this));
        $s$$29_vars$$9$$ = this.options.dnd;
        $s$$29_vars$$9$$.drag_target && $$$$54$$(document).delegate($s$$29_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_getIndex$(), $$$$54$$.proxy(function($e$$146$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.dnd.$ctl$, $dnd$$6$$ = this.$_data$.dnd, $vars$$21$$ = this.$_data$.dnd.$vars$;
          $vars$$21$$.$o$ = $e$$146$$.target;
          this.$_drag_start$($e$$146$$, {$jstree$:!0, $obj$:$e$$146$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$54$$($e$$146$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
          this.$_$container$.addClass("oj-invalid-drop");
          $vars$$21$$.$o$ && $vars$$21$$.$o$.removeClass("oj-valid-drop").addClass("oj-invalid-drop");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$146$$.preventDefault();
        }, this));
        $s$$29_vars$$9$$.drop_target && $$$$54$$(document).delegate($s$$29_vars$$9$$.drop_target, "mouseenter.ojtree-" + this.$_getIndex$(), $$$$54$$.proxy(function($e$$147$$) {
          var $dnd$$7$$ = this.$_data$.dnd, $vars$$22$$ = this.$_data$.dnd.$vars$;
          $dnd$$7$$.$active$ && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$54$$($e$$147$$.target), e:$e$$147$$}) && ($dnd$$7$$.$ctl$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$22$$.$o$ && $vars$$22$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
        }, this)).delegate($s$$29_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_getIndex$(), $$$$54$$.proxy(function() {
          this.$_data$.dnd.$active$ && (this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), this.$_$container$.addClass("oj-invalid-drop"));
        }, this)).delegate($s$$29_vars$$9$$.drop_target, "mouseup.ojtree-" + this.$_getIndex$(), $$$$54$$.proxy(function($e$$149$$) {
          var $vars$$23$$ = this.$_data$.dnd.$vars$;
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").hasClass("oj-tree-drop-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$54$$($e$$149$$.target), e:$e$$149$$});
        }, this));
      }
    }, $_initDnDOpts$:function() {
      this.$_data$.dnd.reorder = !1;
      var $opts$$40$$ = this.options.dnd, $bFixup$$ = !0;
      "object" === typeof $opts$$40$$ && ($opts$$40$$ = $opts$$40$$.reorder, "string" === typeof $opts$$40$$ && ("enable" === $opts$$40$$ ? (this.$_data$.dnd.reorder = !0, $bFixup$$ = !1) : "disable" == $opts$$40$$ && ($bFixup$$ = !1)));
      this.$_data$.dnd.reorder ? (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.dnd.$defaults$), this.options.dnd.reorder = "enable") : $bFixup$$ && (this.options.dnd = {reorder:"disable"});
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$5$$) {
      var $$m$$2_menu$$27$$, $dm$$2_t$$13$$;
      $newVal$$5$$ || this.options.contextMenu || ($$m$$2_menu$$27$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$2_menu$$27$$);
      if ($newVal$$5$$ || this.options.contextMenu) {
        $$m$$2_menu$$27$$ = $newVal$$5$$ || this.options.contextMenu;
        $dm$$2_t$$13$$ = $$$$54$$.type($$m$$2_menu$$27$$);
        if ("function" == $dm$$2_t$$13$$) {
          try {
            $$m$$2_menu$$27$$ = $$m$$2_menu$$27$$();
          } catch ($e$$150$$) {
            $$m$$2_menu$$27$$ = null;
          }
          $dm$$2_t$$13$$ = $$$$54$$.type($$m$$2_menu$$27$$);
        }
        if ("string" === $dm$$2_t$$13$$) {
          if ($$m$$2_menu$$27$$ = $$$$54$$($$m$$2_menu$$27$$)) {
            $$m$$2_menu$$27$$.css("display", "none"), $dm$$2_t$$13$$ = this.$_data$.menu, $dm$$2_t$$13$$.$$container$ = $$m$$2_menu$$27$$, $dm$$2_t$$13$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$5$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuSelect$:function($ev$$6$$, $ui$$39$$) {
      if (!$ui$$39$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$.substr(1)) {
        var $id$$63$$ = $ui$$39$$ ? $ui$$39$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$63$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$63$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$63$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$63$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$63$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$63$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, $_NotifyContextMenuGesture$:function($menu$$28_openOptions$$7$$, $event$$569$$, $eventType$$57$$) {
      var $disabledState$$1_keyboard$$1$$ = "keyboard" === $eventType$$57$$;
      if ("contextmenu" == $event$$569$$.type || $disabledState$$1_keyboard$$1$$ || "touch" == $eventType$$57$$) {
        this.$_data$.menu.$node$ = $disabledState$$1_keyboard$$1$$ ? this.$_data$.ui.$hovered$ : $$$$54$$($event$$569$$.target);
        var $textElem$$ = this.$_data$.menu.$node$.find(".oj-tree-title")[0];
        this.$_data$.menu.$activenode$ = null;
        this.$_data$.menu.$node$ ? (this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id"), $menu$$28_openOptions$$7$$ = {launcher:this.$_$container_ul$}, $disabledState$$1_keyboard$$1$$ && ($menu$$28_openOptions$$7$$.position = {of:$textElem$$}), this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$ && ($disabledState$$1_keyboard$$1$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$, !!this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled") != 
        $disabledState$$1_keyboard$$1$$ && ($disabledState$$1_keyboard$$1$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"))), this.$_OpenContextMenu$($event$$569$$, $eventType$$57$$, $menu$$28_openOptions$$7$$)) : $event$$569$$.preventDefault();
      }
    }, $_initCoreOpts$:function() {
      var $val$$76$$ = this.options.selectionMode, $val$$76$$ = void 0 == $val$$76$$ ? "single" : $val$$76$$;
      "none" === $val$$76$$ ? $val$$76$$ = 0 : "single" === $val$$76$$ ? $val$$76$$ = 1 : "multiple" === $val$$76$$ && ($val$$76$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$76$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_initExpandedOpts$();
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$2$$) {
      var $s$$30$$ = this.options.data, $dt$$1_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$30$$) {
        if ($dt$$1_ot$$2$$ = $$$$54$$.type($s$$30$$), "string" === $dt$$1_ot$$2$$) {
          this.$_isHtml$($s$$30$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt$$1_ot$$2$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt$$1_ot$$2$$) {
              try {
                $s$$30$$ instanceof $oj$$59$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$151$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$30$$ instanceof $oj$$59$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$152$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$30$$.data || $s$$30$$.ajax) && (($dt$$1_ot$$2$$ = $s$$30$$.dataType) ? "json" === $dt$$1_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$1_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$30$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$2$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$20$$ = this.options.types;
      "object" === typeof $o$$20$$ && this.$_applyDefaults$($o$$20$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initExpandedOpts$:function() {
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
    }, $_initData$:function() {
      var $data$$174$$ = this.$_data$;
      $data$$174$$.$core$ = {$initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!1, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}, $suppressSelectEvent$:!1, $strings$:{}};
      $data$$174$$.ui = {selected:$$$$54$$(), $lastSelected$:!1, $hovered$:null, $lastHovered$:null, $disclosureClick$:!1, $to_select$:null, opacity:1, $spacebar$:!1, $focused$:!1, $animDurDiv$:null, $touchEvent$:!1};
      $data$$174$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$174$$.$crrm$ = {};
      $data$$174$$.$crrm$.$cp_nodes$ = !1;
      $data$$174$$.$crrm$.$ct_nodes$ = !1;
      $data$$174$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$174$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$174$$.$crrm$.$prepared_move$ = {};
      $data$$174$$.$ds$ = {};
      $data$$174$$.$ds$.$progressiveRender$ = !1;
      $data$$174$$.$ds$.$progressiveUnload$ = !1;
      $data$$174$$.$ds$.$correctState$ = !0;
      $data$$174$$.$ds$.type = 0;
      $data$$174$$.$json$ = {};
      $data$$174$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$174$$.html = {};
      $data$$174$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$174$$.html.$useExistingMarkup$ = !1;
      $data$$174$$.html.$markup_ul$ = !1;
      $data$$174$$.html.$markup_div$ = !1;
      $data$$174$$.html.$markup$ = !1;
      $data$$174$$.html.$cloneMarkup$ = !1;
      $data$$174$$.$themes$ = {};
      $data$$174$$.$themes$.icons = !0;
      $data$$174$$.$themes$.$dots$ = !1;
      $data$$174$$.$themes$.$theme$ = "default";
      $data$$174$$.$themes$.url = !1;
      $data$$174$$.$themes$.$themes_loaded$ = [];
      $data$$174$$.$themes$.$_themes$ = !1;
      $data$$174$$.types = {};
      $data$$174$$.types.$attachTo$ = [];
      $data$$174$$.types.$defType$ = !1;
      $data$$174$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$174$$.menu = {};
      $data$$174$$.menu.$usermenu$ = !1;
      $data$$174$$.menu.$$container$ = !1;
      $data$$174$$.menu.$$elemPaste$ = !1;
      $data$$174$$.menu.$node$ = !1;
      $data$$174$$.menu.$activenode$ = !1;
      $data$$174$$.keys = {};
      $data$$174$$.keys.$enabled$ = !0;
      $data$$174$$.keys.bound = [];
      $data$$174$$.dnd = {};
      $data$$174$$.dnd.reorder = !1;
      $data$$174$$.dnd.$active$ = !1;
      $data$$174$$.dnd.after = !1;
      $data$$174$$.dnd.inside = !1;
      $data$$174$$.dnd.before = !1;
      $data$$174$$.dnd.off = !1;
      $data$$174$$.dnd.$prepared$ = !1;
      $data$$174$$.dnd.$w$ = 0;
      $data$$174$$.dnd.$to1$ = !1;
      $data$$174$$.dnd.$to2$ = !1;
      $data$$174$$.dnd.$cof$ = !1;
      $data$$174$$.dnd.$cw$ = !1;
      $data$$174$$.dnd.ch = !1;
      $data$$174$$.dnd.$i1$ = !1;
      $data$$174$$.dnd.$i2$ = !1;
      $data$$174$$.dnd.$mto$ = !1;
      $data$$174$$.dnd.$ml_width$ = 100;
      $data$$174$$.dnd.$targ_ml_width$ = 100;
      $data$$174$$.dnd.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:function $$data$$174$$$dnd$$defaults$$drop_check$() {
        return!0;
      }, drop_finish:$$$$54$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$54$$.noop, drag_check:function $$data$$174$$$dnd$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0};
      }};
      $data$$174$$.dnd.$vars$ = {};
      $data$$174$$.dnd.$vars$.$o$ = !1;
      $data$$174$$.dnd.$vars$.$r$ = !1;
      $data$$174$$.dnd.$vars$.$m$ = !1;
      $data$$174$$.dnd.$vars$.$ml$ = !1;
      $data$$174$$.dnd.$vars$.$sli$ = void 0;
      $data$$174$$.dnd.$vars$.$sti$ = void 0;
      $data$$174$$.dnd.$vars$.$dir1$ = !1;
      $data$$174$$.dnd.$vars$.$dir2$ = !1;
      $data$$174$$.dnd.$vars$.$last_pos$ = !1;
      $data$$174$$.dnd.$ctl$ = {};
      $data$$174$$.dnd.$ctl$.$is_down$ = !1;
      $data$$174$$.dnd.$ctl$.$is_drag$ = !1;
      $data$$174$$.dnd.$ctl$.helper = !1;
      $data$$174$$.dnd.$ctl$.$scroll_spd$ = 10;
      $data$$174$$.dnd.$ctl$.$init_x$ = 0;
      $data$$174$$.dnd.$ctl$.$init_y$ = 0;
      $data$$174$$.dnd.$ctl$.$threshold$ = 5;
      $data$$174$$.dnd.$ctl$.$helper_horiz$ = 15;
      $data$$174$$.dnd.$ctl$.$helper_top$ = 5;
      $data$$174$$.dnd.$ctl$.$user_data$ = {};
    }, $_fix_scroll$:function($obj$$99_t$$14$$) {
      var $c$$50$$ = this.$_$container$[0];
      $c$$50$$.scrollHeight > $c$$50$$.offsetHeight && ($obj$$99_t$$14$$ = this.$_getNode$($obj$$99_t$$14$$)) && -1 !== $obj$$99_t$$14$$ && $obj$$99_t$$14$$.length && $obj$$99_t$$14$$.is(":visible") && ($obj$$99_t$$14$$ = $obj$$99_t$$14$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$99_t$$14$$ && ($c$$50$$.scrollTop = $c$$50$$.scrollTop + $obj$$99_t$$14$$ - 1), $obj$$99_t$$14$$ + this.$_data$.$core$.$li_height$ + ($c$$50$$.scrollWidth > $c$$50$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$50$$.offsetHeight && ($c$$50$$.scrollTop += $obj$$99_t$$14$$ - $c$$50$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$50$$.scrollWidth > $c$$50$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $_setFocus$:function() {
    }, $_unsetFocus$:function() {
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$54$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$27$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$27$$ && ($o$$27$$.hasClass("oj-expanded") ? this.collapse($o$$27$$) : this.hover(this.$_getPrev$($o$$27$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$28$$ && ($o$$28$$.hasClass("oj-expanded") ? this.collapse($o$$28$$) : this.hover(this.$_getPrev$($o$$28$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$29$$ && ($o$$29$$.hasClass("oj-expanded") ? this.collapse($o$$29$$) : this.hover(this.$_getPrev$($o$$29$$)));
      return!1;
    }, right:function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$30$$ && $o$$30$$.length && ($o$$30$$.hasClass("oj-collapsed") ? this.expand($o$$30$$) : this.hover(this.$_getNext$($o$$30$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$31$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$31$$ && $o$$31$$.length && ($o$$31$$.hasClass("oj-collapsed") ? this.expand($o$$31$$) : this.hover(this.$_getNext$($o$$31$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$32$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$32$$ && $o$$32$$.length && ($o$$32$$.hasClass("oj-collapsed") ? this.expand($o$$32$$) : this.hover(this.$_getNext$($o$$32$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$119$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      $a$$119$$ && $a$$119$$.length && this.hover($a$$119$$[$a$$119$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$7$$ = $$$$54$$.Event("click");
        $ev$$7$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$7$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$8$$ = $$$$54$$.Event("click");
        $ev$$8$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$8$$);
      }
      return!1;
    }, "shift+home":function($event$$572$$) {
      var $prevSelections$$3$$, $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$1$$ = !0, $_this$$25$$ = this, $nodes$$8$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$3$$ = this.options.selection.slice(0);
        $hover$$1$$ = $hover$$1$$[0];
        $$$$54$$.each($nodes$$8$$, function($i$$442$$, $node$$121$$) {
          $node$$121$$ == $hover$$1$$ && ($bContinue$$1$$ = !1);
          $_this$$25$$.$_select$($node$$121$$, !0);
          return $bContinue$$1$$;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$3$$, null, $event$$572$$);
      }
      return!1;
    }, "shift+pgdn":function($event$$573$$) {
      var $prevSelections$$4$$, $hover$$2$$ = this.$_data$.ui.$lastSelected$ || this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$26$$ = this, $l$$18$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$4$$ = this.options.selection.slice(0);
        $hover$$2$$ = $hover$$2$$[0];
        $$$$54$$.each($l$$18$$, function($i$$443$$, $node$$122$$) {
          $bFound$$ || ($bFound$$ = $node$$122$$ == $hover$$2$$);
          $bFound$$ && !$_this$$26$$.isSelected($node$$122$$) && $_this$$26$$.$_select$($node$$122$$, !0);
          return!0;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$4$$, null, $event$$573$$);
      }
      return!1;
    }, f2:function() {
      this.$_crrm_rename$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$2$$ = this.$_data$.menu.$$container$, $_this$$27$$ = this;
        $$menuContainer$$2$$.on("ojselect", $$$$54$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$2$$ = !1;
        $$menuContainer$$2$$.find("[data-oj-command]").each(function() {
          var $cmd$$2$$;
          0 === $$$$54$$(this).children("a").length && ($cmd$$2$$ = $$$$54$$(this).attr("data-oj-command").split("oj-tree-"), $$$$54$$(this).replaceWith($_this$$27$$.$_buildContextMenuItem$($cmd$$2$$[$cmd$$2$$.length - 1])), $$$$54$$(this).hasClass("oj-menu-divider") && $$$$54$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$2$$ = !0);
        });
        $bChanged$$2$$ && $$menuContainer$$2$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$2$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$3$$) {
      return $$$$54$$(this.$_buildContextMenuListItem$($cmd$$3$$));
    }, $_buildContextMenuListItem$:function($cmd$$4$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$1$$[$cmd$$4$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$4$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$5$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$_getString$($_arMenuKeyMap$$1$$[$cmd$$5$$]) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$100$$) {
      $obj$$100$$ = this.$_getNode$($obj$$100$$, !0);
      if (!$obj$$100$$ || !$obj$$100$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$100$$;
      this.$_emitEvent$({obj:$obj$$100$$}, "cut");
    }, $_crrm_copy$:function($obj$$101$$) {
      $obj$$101$$ = this.$_getNode$($obj$$101$$, !0);
      if (!$obj$$101$$ || !$obj$$101$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$101$$;
      this.$_emitEvent$({obj:$obj$$101$$}, "copy");
    }, $_crrm_paste$:function($obj$$102$$) {
      $obj$$102$$ = this.$_getNode$($obj$$102$$);
      if (!$obj$$102$$ || !$obj$$102$$.length) {
        return!1;
      }
      var $nodes$$9$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$102$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$102$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$102$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$102$$, nodes:$nodes$$9$$}, "paste");
    }, $_crrm_move_node$:function($obj$$103$$, $ref$$4$$, $position$$43$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$31$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$43$$ && ($position$$43$$ = $s$$31$$.defaultPosition), "inside" !== $position$$43$$ || $s$$31$$.defaultPosition.match(/^(before|after)$/) || ($position$$43$$ = $s$$31$$.defaultPosition), this.$_moveNode$($obj$$103$$, $ref$$4$$, $position$$43$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$31$$.alwaysCopy || "multitree" === $s$$31$$.alwaysCopy && $obj$$103$$.$rt$.$_getIndex$() !== $obj$$103$$.$ot$.$_getIndex$()) {
        $is_copy$$1$$ = !0;
      }
      this.$_moveNode$($obj$$103$$, $ref$$4$$, $position$$43$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$104$$) {
      $obj$$104$$ = this.$_getNode$($obj$$104$$, !0);
      this.$__rollback$();
      this.remove($obj$$104$$);
    }, $_crrm_rename$:function($obj$$105$$) {
      $obj$$105$$ = this.$_getNode$($obj$$105$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$105$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$107$$, $callback$$121$$) {
      $obj$$107$$ = this.$_getNode$($obj$$107$$);
      var $rtl$$4$$ = this.$_isRtl$, $w$$9$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$107$$.children("ins").width(), $w2$$ = $obj$$107$$.find("\x3e a:visible \x3e ins").width() * $obj$$107$$.find("\x3e a:visible \x3e ins").length, $t$$16$$ = this.getText($obj$$107$$), $_this$$28$$ = this, $h1$$ = $$$$54$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$4$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$107$$.css("position", 
      "relative").append($$$$54$$("\x3cinput /\x3e", {value:$t$$16$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$4$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$4$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$54$$.proxy(function() {
        var $i$$444$$ = $obj$$107$$.children(".oj-tree-rename-input"), $v$$5$$ = $i$$444$$.val();
        "" === $v$$5$$ && ($v$$5$$ = $t$$16$$);
        $h1$$.remove();
        $i$$444$$.remove();
        this.$_set_text$($obj$$107$$, $t$$16$$);
        this.$_rename_node$($obj$$107$$, $v$$5$$);
        $callback$$121$$.call(this, $obj$$107$$, $v$$5$$, $t$$16$$);
        $obj$$107$$.css("position", "");
      }, this), keyup:function($event$$574_key$$167$$) {
        $event$$574_key$$167$$ = $event$$574_key$$167$$.keyCode || $event$$574_key$$167$$.which;
        if (!$_this$$28$$.$_done$) {
          return $_this$$28$$.$_done$ = !0, !1;
        }
        27 == $event$$574_key$$167$$ ? ($_this$$28$$.$_done$ = !1, this.value = $t$$16$$, this.blur()) : 13 == $event$$574_key$$167$$ ? ($_this$$28$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$9$$));
      }, keypress:function($event$$575$$) {
        if (13 == ($event$$575$$.keyCode || $event$$575$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$107$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$9$$))[0].select();
    }, $_crrm_create$:function($obj$$108$$, $position$$44$$, $js$$2$$, $callback$$122$$, $skip_rename$$) {
      var $_this$$29$$ = this;
      ($obj$$108$$ = this.$_getNode$($obj$$108$$)) || ($obj$$108$$ = -1);
      this.$__rollback$();
      return this.$_createNode$($obj$$108$$, $position$$44$$, $js$$2$$, function($t$$18$$) {
        var $p$$14$$ = this.$_getParent$($t$$18$$), $pos$$16$$ = $$$$54$$($t$$18$$).index();
        $callback$$122$$ && $callback$$122$$.call(this, $t$$18$$);
        $p$$14$$.length && $p$$14$$.hasClass("oj-collapsed") && this.expand($p$$14$$, !1, !0);
        $skip_rename$$ ? $_this$$29$$.$_emitEvent$({obj:$t$$18$$, name:this.getText($t$$18$$), parent:$p$$14$$, position:$pos$$16$$}) : this.$_crrm_showInput$($t$$18$$, function($obj$$109$$, $new_name$$1$$) {
          $_this$$29$$.$_emitEvent$({obj:$obj$$109$$, name:$new_name$$1$$, parent:$p$$14$$, position:$pos$$16$$});
        });
      });
    }, $_isHtml$:function($s$$32$$) {
      if (!$s$$32$$ || 3 > $s$$32$$.length) {
        return!1;
      }
      $s$$32$$ = $s$$32$$.trim();
      return "\x3c" === $s$$32$$.charAt(0);
    }, $_applyEmptyText$:function() {
      var $txt$$ = this.options.emptyText;
      "string" !== typeof $txt$$ && ($txt$$ = this.$_getString$("labelNoData"));
      if ($txt$$ && 0 < $txt$$.length) {
        var $$u$$2$$ = this.$_$container_ul$, $$d$$ = $$$$54$$("\x3cli class\x3d'oj-tree-empty'\x3e\x3c/li\x3e");
        $$d$$[0].textContent = $txt$$;
        $$u$$2$$.empty().append($$d$$);
      }
    }, $_processSubId$:function($locator$$62_sNode$$) {
      var $c$$51_i$$445_subId$$59$$, $node$$123$$, $a$$120_sKey$$;
      $a$$120_sKey$$ = null;
      var $ret$$66$$;
      $locator$$62_sNode$$ && ($c$$51_i$$445_subId$$59$$ = $locator$$62_sNode$$.subId);
      if (!$c$$51_i$$445_subId$$59$$) {
        return null;
      }
      $a$$120_sKey$$ = $c$$51_i$$445_subId$$59$$.split("[");
      if (3 === $a$$120_sKey$$.length && ($a$$120_sKey$$[0] = $a$$120_sKey$$[0].trim(), "oj-tree-node" === $a$$120_sKey$$[0] && ($a$$120_sKey$$[1] = $a$$120_sKey$$[1].trim(), $c$$51_i$$445_subId$$59$$ = $a$$120_sKey$$[1].charAt(0), $c$$51_i$$445_subId$$59$$ = $a$$120_sKey$$[1].indexOf($c$$51_i$$445_subId$$59$$, 1), 0 <= $c$$51_i$$445_subId$$59$$ && ($locator$$62_sNode$$ = $a$$120_sKey$$[1].substring(1, $c$$51_i$$445_subId$$59$$).trim(), $a$$120_sKey$$[2] = $a$$120_sKey$$[2].trim(), $c$$51_i$$445_subId$$59$$ = 
      $a$$120_sKey$$[2].charAt(0), $c$$51_i$$445_subId$$59$$ = $a$$120_sKey$$[2].indexOf($c$$51_i$$445_subId$$59$$, 1), 0 <= $c$$51_i$$445_subId$$59$$)))) {
        $a$$120_sKey$$ = $a$$120_sKey$$[2].substring(1, $c$$51_i$$445_subId$$59$$).trim();
        try {
          $node$$123$$ = this.$_getNode$($locator$$62_sNode$$);
        } catch ($e$$153$$) {
          $node$$123$$ = null;
        }
        if ($a$$120_sKey$$ && $node$$123$$ && -1 !== $node$$123$$) {
          switch($a$$120_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$66$$ = $node$$123$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$66$$ = $node$$123$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$123$$) || ($ret$$66$$ = $node$$123$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$66$$ = $node$$123$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$66$$ ? $ret$$66$$.length ? $ret$$66$$[0] : null : null;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }, $_isOptExpandAll$:function() {
      var $s$$33$$ = this.options.initExpanded;
      return $s$$33$$ && "all" == $s$$33$$ || $$$$54$$.isArray($s$$33$$) && $s$$33$$.length && "all" == $s$$33$$[0];
    }, $_getString$:function($key$$169$$) {
      var $oStrings$$ = this.$_data$.$core$.$strings$, $s$$34$$;
      $s$$34$$ = $oStrings$$[$key$$169$$];
      $s$$34$$ || ($s$$34$$ = this.$getTranslatedString$($key$$169$$), $s$$34$$ = this.$_escapeHtml$($s$$34$$), $oStrings$$[$key$$169$$] = $s$$34$$);
      return $s$$34$$;
    }, $_escapeHtml$:function($text$$19$$) {
      var $div$$12$$ = document.createElement("div");
      $$$$54$$($div$$12$$).text($text$$19$$);
      return $div$$12$$.textContent;
    }, $_getAnimDuration$:function() {
      var $ret$$67$$ = 0, $span$$2_val$$77$$, $$div_c$$52_s$$35$$;
      window.getComputedStyle && ($$div_c$$52_s$$35$$ = this.$_data$.ui.$animDurDiv$, $$div_c$$52_s$$35$$ || ($$div_c$$52_s$$35$$ = $$$$54$$("\x3cdiv id\x3d'ojtree-comp-animduration'\x3e\x3cspan class\x3d'oj-tree-transition'\x3edummy\x3c/span\x3e\x3c/div\x3e"), this.$_data$.ui.$animDurDiv$ = $$div_c$$52_s$$35$$, $$$$54$$("body").append($$div_c$$52_s$$35$$)), $span$$2_val$$77$$ = $$div_c$$52_s$$35$$[0].childNodes[0], $span$$2_val$$77$$ = window.getComputedStyle($span$$2_val$$77$$), $span$$2_val$$77$$ = 
      $span$$2_val$$77$$.transitionDuration ? $span$$2_val$$77$$.transitionDuration : $span$$2_val$$77$$["-webkit-transition-duration"] ? $span$$2_val$$77$$["-webkit-transition-duration"] : 0, $$div_c$$52_s$$35$$.detach(), "string" == typeof $span$$2_val$$77$$ && 1 < $span$$2_val$$77$$.length && ($$div_c$$52_s$$35$$ = $span$$2_val$$77$$.charAt($span$$2_val$$77$$.length - 1).toLowerCase(), "s" == $$div_c$$52_s$$35$$ ? ($span$$2_val$$77$$ = $span$$2_val$$77$$.substring(0, $span$$2_val$$77$$.length - 
      1), $span$$2_val$$77$$ = parseFloat($span$$2_val$$77$$), isNaN($span$$2_val$$77$$) || ($ret$$67$$ = 1E3 * $span$$2_val$$77$$)) : 2 < $span$$2_val$$77$$.length && ($$div_c$$52_s$$35$$ = $span$$2_val$$77$$.substring($span$$2_val$$77$$.length - 2).toLowerCase(), "ms" == $$div_c$$52_s$$35$$ && ($span$$2_val$$77$$ = parseFloat($span$$2_val$$77$$), isNaN($span$$2_val$$77$$) || ($ret$$67$$ = $span$$2_val$$77$$)))));
      return $ret$$67$$;
    }, $_varCopy$:function($obj$$110$$, $s$$36$$) {
      var $o$$33$$ = {};
      $o$$33$$[$s$$36$$] = $obj$$110$$[$s$$36$$];
      return $$$$54$$.extend(!0, {}, $o$$33$$)[$s$$36$$];
    }});
  })();
});
