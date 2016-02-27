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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$39$$, $$$$36$$) {
  (function() {
    $oj$$39$$.$__registerWidget$("oj.ojMenu", $$$$36$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom"}}, submenuOpenOptions:{position:{my:"start top", at:"end top"}}, beforeOpen:null, select:null}, _ComponentCreate:function() {
      this._super();
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$459$$) {
        this.options.disabled && $event$$459$$.preventDefault();
      }, click:function($event$$460$$) {
        this.options.disabled && $event$$460$$.preventDefault();
      }, keydown:function($event$$461$$) {
        !this.options.disabled || $event$$461$$.keyCode !== $$$$36$$.ui.keyCode.ESCAPE && $event$$461$$.keyCode !== $$$$36$$.ui.keyCode.TAB || ($event$$461$$.keyCode === $$$$36$$.ui.keyCode.TAB && $event$$461$$.preventDefault(), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$461$$));
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      var $handleMouseEnterMenuItem$$ = function($event$$462$$) {
        var $target$$89$$ = $$$$36$$($event$$462$$.currentTarget);
        $target$$89$$.siblings().children(".oj-focus-ancestor").removeClass("oj-focus-ancestor");
        this.$_focus$($event$$462$$, $target$$89$$);
      }.bind(this);
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$463$$) {
        $event$$463$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$464$$) {
        $event$$464$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, touchstart:function() {
        this.$touchHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$467$$) {
        var $target$$90$$ = $$$$36$$($event$$467$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$90$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$467$$.preventDefault(), this.$active$ && this.$active$.closest($target$$90$$).length && this.$active$.get(0) != $target$$90$$.get(0) || ($target$$90$$.has(".oj-menu").length ? this.$_expand$($event$$467$$) : (this.$_select$($event$$467$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":$handleMouseEnterMenuItem$$, "touchstart .oj-menu-item":function($event$$468$$) {
        this.$touchHandled$ || (this.$touchHandled$ = !0, $handleMouseEnterMenuItem$$($event$$468$$));
      }, mouseleave:function($event$$469$$) {
        this.$_collapse$($event$$469$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$470$$) {
        this.$_collapse$($event$$470$$, "eventSubtree");
      }, focus:function($event$$471$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$90$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$471$$, $item$$90$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$472$$) {
        if ($event$$472$$.keyCode == $$$$36$$.ui.keyCode.ENTER || $event$$472$$.keyCode == $$$$36$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_usingCallback$ = $$$$36$$.proxy(this.$_usingHandler$, this);
      this.$_setup$();
    }, $__contextMenuPressHoldJustEnded$:function($val$$53$$) {
      if (arguments.length) {
        $_contextMenuPressHoldJustEnded$$ = $val$$53$$;
      } else {
        return $_contextMenuPressHoldJustEnded$$;
      }
    }, $_clickAwayHandler$:function($event$$473$$) {
      if (("focus" === $event$$473$$.type || "mousedown" === $event$$473$$.type || "touchstart" === $event$$473$$.type || 93 == $event$$473$$.which || 121 == $event$$473$$.which && $event$$473$$.shiftKey || 93 == $event$$473$$.keyCode) && ("mousedown" !== $event$$473$$.type || !$_contextMenuPressHoldJustEnded$$)) {
        var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
        $$$$36$$.each($openPopupMenus$$, function($index$$233$$, $menu$$18$$) {
          !$$$$36$$($event$$473$$.target).closest($menu$$18$$.element).length && ("keydown" === $event$$473$$.type || "mousedown" === $event$$473$$.type && 3 === $event$$473$$.which || !$$$$36$$($event$$473$$.target).closest($menu$$18$$.$_launcher$).length || $menu$$18$$.$_launcherClickShouldDismiss$ && ("mousedown" === $event$$473$$.type && 3 !== $event$$473$$.which || "touchstart" === $event$$473$$.type)) && ($menu$$18$$.$_collapse$($event$$473$$, "eventSubtree"), $menu$$18$$.$_launcher$ && $menu$$18$$.$__dismiss$($event$$473$$));
        });
      }
    }, _setOption:function($key$$148$$, $value$$259$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$148$$ ? this.$_submenuPosition$ = $oj$$39$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$259$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$148$$ && (this.$_submenuPosition$ = $oj$$39$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$259$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.is(":visible") && this.$__dismiss$();
      clearTimeout(this.$timer$);
      delete this.$timer$;
      this.element.removeAttr("aria-activedescendant").removeClass("oj-component oj-menu-icons").find(".oj-menu").addBack().removeClass("oj-menu").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$147$$ = $$$$36$$(this);
        $elem$$147$$.data("oj-ojMenu-submenu-icon") && $elem$$147$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
      delete this.$_popupServiceEvents$;
      delete this.$_usingCallback$;
      var $closeDelayTimer$$1$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$1$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$1$$));
      this._super();
    }, $_keydown$:function($event$$474$$) {
      function $escape$$1$$($value$$260$$) {
        return $value$$260$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$19_prev$$2$$, $activeItemId_character$$1$$, $skip$$1_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$474$$.keyCode) {
        case $$$$36$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$474$$);
          break;
        case $$$$36$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$474$$);
          break;
        case $$$$36$$.ui.keyCode.UP:
          this.$_previous$($event$$474$$);
          break;
        case $$$$36$$.ui.keyCode.DOWN:
          this.$_next$($event$$474$$);
          break;
        case $$$$36$$.ui.keyCode.LEFT:
        ;
        case $$$$36$$.ui.keyCode.RIGHT:
          $event$$474$$.keyCode === $$$$36$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$474$$) : this.$_collapse$($event$$474$$, "active");
          break;
        case $$$$36$$.ui.keyCode.ENTER:
        ;
        case $$$$36$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$474$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$159$$ = this;
          setTimeout(function() {
            $self$$159$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$36$$.ui.keyCode.TAB:
          $event$$474$$.preventDefault();
          this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$474$$);
          break;
        case $$$$36$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$1$$ = this.element.attr("aria-activedescendant"), $skip$$1_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$1$$ && !$$$$36$$("#" + $activeItemId_character$$1$$).is($skip$$1_topLevelAnchorSelector$$) ? this.$_collapse$($event$$474$$, "active") : this.$_focusLauncherAndDismiss$($event$$474$$)) : this.$_collapse$($event$$474$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$19_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$1$$ = String.fromCharCode($event$$474$$.keyCode), $skip$$1_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$1$$ === $match$$19_prev$$2$$ ? $skip$$1_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$1$$ = $match$$19_prev$$2$$ + $activeItemId_character$$1$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$19_prev$$2$$ = 
          this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$36$$(this).children("a").text());
          }), $match$$19_prev$$2$$ = $skip$$1_topLevelAnchorSelector$$ && -1 !== $match$$19_prev$$2$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$19_prev$$2$$, $match$$19_prev$$2$$.length || ($activeItemId_character$$1$$ = String.fromCharCode($event$$474$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$19_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$36$$(this).children("a").text());
          })), $match$$19_prev$$2$$.length ? (this.$_focus$($event$$474$$, $match$$19_prev$$2$$), 1 < $match$$19_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$1$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$474$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$475$$) {
      this.$active$ && !this.$active$.is(".oj-disabled") && (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$475$$) : this.$_select$($event$$475$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
      var $element$$111$$ = this.element;
      if ($element$$111$$.is(":visible")) {
        var $position$$22$$ = $element$$111$$.data("oj-menu-position");
        $position$$22$$ && $element$$111$$.position($position$$22$$);
        $element$$111$$.find(".oj-menu").each(function() {
          var $menu$$19$$ = $$$$36$$(this);
          $menu$$19$$.is(":visible") && ($position$$22$$ = $menu$$19$$.data("oj-menu-position")) && $menu$$19$$.position($position$$22$$);
        });
      }
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$39$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$160$$ = this, $children$$21_submenus$$ = this.element.find(this.options.menuSelector);
      this.element.toggleClass("oj-menu-icons", !!this.element.find(".oj-menu-item-icon").length);
      $children$$21_submenus$$.filter(":not(.oj-menu)").addClass("oj-menu").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$20$$ = $$$$36$$(this), $item$$91_itemId$$1$$ = $self$$160$$.$_getSubmenuAnchor$($menu$$20$$), $submenuIcon$$ = $$$$36$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$91_itemId$$1$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").prepend($submenuIcon$$);
        $item$$91_itemId$$1$$ = $item$$91_itemId$$1$$.attr("id");
        $menu$$20$$.attr("aria-labelledby", $item$$91_itemId$$1$$);
      });
      $children$$21_submenus$$ = $children$$21_submenus$$.add(this.element).children();
      $children$$21_submenus$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$21_submenus$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$21_submenus$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$92$$ = $$$$36$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$92$$.text()) || $item$$92$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$21_submenus$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$21_submenus$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      this.$active$ && !$$$$36$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuAnchor$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_focus$:function($event$$476$$, $item$$93$$) {
      $event$$476$$ && "focus" === $event$$476$$.type || clearTimeout(this.$timer$);
      $item$$93$$ = $item$$93$$.first();
      this.$_makeActive$($item$$93$$, $event$$476$$);
      $item$$93$$.parent().closest(".oj-menu-item").children("a:first").addClass("oj-focus-ancestor");
      $event$$476$$ && "keydown" === $event$$476$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
      }, this.delay);
      var $nested$$1$$ = $item$$93$$.children(".oj-menu");
      $nested$$1$$.length && $event$$476$$ && /^mouse/.test($event$$476$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($nested$$1$$);
      this.$activeMenu$ = $item$$93$$.parent();
    }, $_makeActive$:function($item$$94$$, $event$$477$$) {
      if (!$item$$94$$.is(this.$active$)) {
        var $previousItem$$ = this.$active$ ? this.$active$ : $$$$36$$(), $anchor$$2$$ = $item$$94$$.children("a");
        this.$active$ = $item$$94$$;
        this.element.attr("aria-activedescendant", $anchor$$2$$.attr("id"));
        $previousItem$$.children("a").removeClass("oj-focus");
        $anchor$$2$$.addClass("oj-focus");
        this._trigger("_activeItem", $event$$477$$, {previousItem:$previousItem$$, item:$item$$94$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$478$$) {
      if (this.$active$) {
        var $previousItem$$1$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        $previousItem$$1$$.children("a").removeClass("oj-focus");
        this._trigger("_activeItem", $event$$478$$, {previousItem:$previousItem$$1$$, item:$$$$36$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$479$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$479$$);
    }, $_focusLauncherAndDismiss$:function($event$$480$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$480$$);
    }, $__dismiss$:function($event$$481$$) {
      var $psOptions$$5$$ = {};
      $psOptions$$5$$[$oj$$39$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
      $oj$$39$$.$PopupService$.$getInstance$().close($psOptions$$5$$);
      this.element.removeData("oj-menu-position");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$481$$, {});
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_normalizeEventForPosition$:function($event$$482$$) {
      $$$$36$$.each(["pageX", "pageY"], function($index$$234$$, $pagePos$$) {
        if ($event$$482$$ && void 0 === $event$$482$$[$pagePos$$] && $event$$482$$.originalEvent) {
          var $firstTouch$$4_originalEvent$$11$$ = $event$$482$$.originalEvent, $touchList_type$$93$$ = $firstTouch$$4_originalEvent$$11$$.type;
          ($touchList_type$$93$$ = "touchstart" === $touchList_type$$93$$ || "touchmove" === $touchList_type$$93$$ ? "touches" : "touchend" === $touchList_type$$93$$ ? "changedTouches" : null) && ($firstTouch$$4_originalEvent$$11$$ = $firstTouch$$4_originalEvent$$11$$[$touchList_type$$93$$][0]) && ($event$$482$$[$pagePos$$] = $firstTouch$$4_originalEvent$$11$$[$pagePos$$]);
        }
      });
    }, open:function($event$$483$$, $initialFocus_openOptions$$5$$, $psOptions$$6_submenuOpenOptions$$1_usingCallback$$) {
      this.element.is(":visible") && this.$__dismiss$();
      $initialFocus_openOptions$$5$$ = $$$$36$$.extend({}, this.options.openOptions, $initialFocus_openOptions$$5$$);
      $initialFocus_openOptions$$5$$.position = $$$$36$$.extend({}, $initialFocus_openOptions$$5$$.position);
      $psOptions$$6_submenuOpenOptions$$1_usingCallback$$ = $$$$36$$.extend({}, this.options.submenuOpenOptions, $psOptions$$6_submenuOpenOptions$$1_usingCallback$$);
      this.$_normalizeEventForPosition$($event$$483$$);
      this.$_launcherClickShouldDismiss$ = this.$__openingContextMenu$;
      if (this._trigger("beforeOpen", $event$$483$$, {openOptions:$initialFocus_openOptions$$5$$})) {
        var $launcher$$9$$ = $initialFocus_openOptions$$5$$.launcher;
        if (($launcher$$9$$ = "string" === $$$$36$$.type($launcher$$9$$) ? $$$$36$$($launcher$$9$$) : $launcher$$9$$) && $launcher$$9$$.length) {
          var $focusFirstItem_position$$23$$ = $oj$$39$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus_openOptions$$5$$.position, this.$isRtl$);
          $focusFirstItem_position$$23$$.of = $oj$$39$$.$PositionUtils$.$normalizePositionOf$($focusFirstItem_position$$23$$.of, $launcher$$9$$, $event$$483$$);
          if (null == $focusFirstItem_position$$23$$.of) {
            $oj$$39$$.$Logger$.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call.");
          } else {
            var $currentMenu$$ = this.element[0], $openPopupMenus$$1$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
            $$$$36$$.each($openPopupMenus$$1$$, function($index$$235$$, $menu$$21$$) {
              $menu$$21$$.element[0] !== $currentMenu$$ && ($menu$$21$$.$_collapse$($event$$483$$, "eventSubtree"), $menu$$21$$.$_launcher$ && $menu$$21$$.$__dismiss$($event$$483$$));
            });
            this.$_submenuPosition$ = $oj$$39$$.$PositionUtils$.$normalizeHorizontalAlignment$($psOptions$$6_submenuOpenOptions$$1_usingCallback$$.position, this.$isRtl$);
            $psOptions$$6_submenuOpenOptions$$1_usingCallback$$ = this.$_usingCallback$;
            $$$$36$$.isFunction($focusFirstItem_position$$23$$.using) && $focusFirstItem_position$$23$$.using !== $psOptions$$6_submenuOpenOptions$$1_usingCallback$$ && ($focusFirstItem_position$$23$$.origUsing = $focusFirstItem_position$$23$$.using);
            $focusFirstItem_position$$23$$.using = $psOptions$$6_submenuOpenOptions$$1_usingCallback$$;
            $psOptions$$6_submenuOpenOptions$$1_usingCallback$$ = {};
            $psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$39$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
            $psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$39$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$9$$;
            $psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$39$$.$PopupService$.$OPTION$.$POSITION$] = $focusFirstItem_position$$23$$;
            $psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$39$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
            $psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$39$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-menu-layer";
            $oj$$39$$.$PopupService$.$getInstance$().open($psOptions$$6_submenuOpenOptions$$1_usingCallback$$);
            this.element.data("oj-menu-position", $focusFirstItem_position$$23$$);
            $initialFocus_openOptions$$5$$ = $initialFocus_openOptions$$5$$.initialFocus;
            (($focusFirstItem_position$$23$$ = "firstItem" === $initialFocus_openOptions$$5$$) || "menu" === $initialFocus_openOptions$$5$$) && this.element.focus();
            $focusFirstItem_position$$23$$ ? this.$_focus$($event$$483$$, this.element.children().first()) : this.$_blur$($event$$483$$);
            this.$_launcher$ = $launcher$$9$$;
            $_openPopupMenus$$.push(this);
          }
        } else {
          $oj$$39$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call.");
        }
      }
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$24$$ = $$$$36$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$24$$).data("oj-menu-position", $position$$24$$);
      this.$_getSubmenuAnchor$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$484$$, $all$$1$$, $delay$$3$$) {
      function $collapseMenu$$() {
        delete $self$$161$$.$timer$;
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$161$$.element : $$$$36$$($event$$484$$ && $event$$484$$.target).closest($self$$161$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$161$$.element);
        $self$$161$$.$_close$($currentMenu$$1$$);
        $self$$161$$.$_blur$($event$$484$$);
        $self$$161$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$161$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      this.$_getSubmenuAnchor$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("a.oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$485$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$485$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$485$$, "all" === $which$$, this.delay) : $oj$$39$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$486$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_focus$($event$$486$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$487$$) {
      this.$_move$("next", "first", $event$$487$$);
    }, $_previous$:function($event$$488$$) {
      this.$_move$("prev", "last", $event$$488$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$11$$, $filter$$5$$, $event$$489$$) {
      var $next$$5$$;
      this.$active$ && ($next$$5$$ = "first" === $direction$$11$$ || "last" === $direction$$11$$ ? this.$active$["first" === $direction$$11$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$11$$ + "All"](".oj-menu-item").eq(0));
      $next$$5$$ && $next$$5$$.length && this.$active$ || ($next$$5$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$489$$, $next$$5$$);
    }, $_select$:function($event$$490$$) {
      if (!this.$active$ && $event$$490$$ && $event$$490$$.target) {
        var $menuItem$$1_ui$$29$$ = $$$$36$$($event$$490$$.target).closest(".oj-menu-item");
        $menuItem$$1_ui$$29$$.closest(this.element).length && this.$_makeActive$($menuItem$$1_ui$$29$$, $event$$490$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$39$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem$$1_ui$$29$$ = {item:this.$active$}, this.$__collapseAll$($event$$490$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$490$$), this._trigger("select", $event$$490$$, $menuItem$$1_ui$$29$$)) : $oj$$39$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$5$$ = this.$_popupServiceEvents$ = {};
        $events$$5$$[$oj$$39$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$36$$.proxy(this.$_closeAll$, this);
        $events$$5$$[$oj$$39$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$36$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$5$$[$oj$$39$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$36$$.proxy(this.refresh, this);
        $events$$5$$[$oj$$39$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$36$$.proxy(this.$_clickAwayHandler$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeAll$:function() {
      this.$_close$(this.element);
      this.$__dismiss$(null);
    }, $_usingHandler$:function($pos$$11$$, $props$$19$$) {
      var $origUsing_position$$25_rootMenu$$ = $props$$19$$.element.element;
      $origUsing_position$$25_rootMenu$$.css($pos$$11$$);
      ($origUsing_position$$25_rootMenu$$ = $origUsing_position$$25_rootMenu$$.data("oj-menu-position")) && ($origUsing_position$$25_rootMenu$$ = $origUsing_position$$25_rootMenu$$.origUsing) && $origUsing_position$$25_rootMenu$$($pos$$11$$, $props$$19$$);
    }});
    var $_openPopupMenus$$ = [], $_contextMenuPressHoldJustEnded$$ = !1;
  })();
});
