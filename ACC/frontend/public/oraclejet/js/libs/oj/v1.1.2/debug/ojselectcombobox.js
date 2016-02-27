/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
       
       function(oj, $, compCore, validation)
{

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 *
 * You may obtain a copy of the Apache License and the GPL License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
/**
 * @private
 */
  var _ComboUtils = {
    KEY:
    {
      TAB : 9,
      ENTER : 13,
      ESC : 27,
      SPACE : 32,
      LEFT : 37,
      UP : 38,
      RIGHT : 39,
      DOWN : 40,
      SHIFT : 16,
      CTRL : 17,
      ALT : 18,
      PAGE_UP : 33,
      PAGE_DOWN : 34,
      HOME : 36,
      END : 35,
      BACKSPACE : 8,
      DELETE : 46,

      isControl : function (e)
      {
        var k = e.which;
        switch (k)
        {
        case _ComboUtils.KEY.SHIFT:
        case _ComboUtils.KEY.CTRL:
        case _ComboUtils.KEY.ALT:
          return true;
        }
        if (e.metaKey || e.ctrlKey)
          return true;
        return false;
      },

      isFunctionKey : function (k)
      {
        k = k.which ? k.which : k;
        return k >= 112 && k <= 123;
      }
    },

    lastMousePosition: {x : 0, y : 0},
    nextUid: (function () {var counter = 1; return function () { return counter++; };}()),

    //TODO:
    scrollBarDimensions: null,

    //_ComboUtils
    /*
     * 4-10 times faster .each replacement
     * it overrides jQuery context of element on each iteration
     */
    each2: function(list, c)
    {
      var j = $.isFunction(list[0]) ? $(list[0]()): $(list[0]),
      i = -1,
      l = list.length;
      while (
        ++i < l
          && (j.context = j[0] = ($.isFunction(list[0]) ? list[i]():list[i]))
          && c.call(j[0], i, j) !== false //i=index, j=jQuery object
      )
      {};
      return list;
    },

    //_ComboUtils
    measureScrollbar: function()
    {
      var $template = $("<div class='oj-listbox-measure-scrollbar'></div>");
      // @HTMLUpdateOK
      $template.appendTo('body');
      var dim =
        {
          width : $template.width() - $template[0].clientWidth,
          height : $template.height() - $template[0].clientHeight
        };
      $template.remove();
      return dim;
    },

    //_ComboUtils
    /*
     * Splits the string into an array of values, trimming each value.
     * An empty array is returned for nulls or empty
     */
    splitVal: function(string, separator)
    {
      var val,
      i,
      l;
      if (string === null || string.length < 1)
        return [];
      val = string.split(separator);
      for (i = 0, l = val.length; i < l; i = i + 1)
        val[i] = $.trim(val[i]);
      return val;
    },

    //_ComboUtils
    getSideBorderPadding: function(element)
    {
      return element.outerWidth(false) - element.width();
    },

    //_ComboUtils
    installKeyUpChangeEvent: function(element)
    {
      var key = "keyup-change-value";
      element.on("keydown", function ()
        {
          if ($.data(element, key) === undefined)
          {
            $.data(element, key, element.val());
          }
        });

      element.on("keyup", function (e)
        {
          if (e.which === _ComboUtils.KEY.ENTER)
          {
            e.stopPropagation();
            return;
          }
          var val = $.data(element, key);
          if (val !== undefined && element.val() !== val)
          {
            $.removeData(element, key);
            element.trigger("keyup-change");
          }
        });
    },

    //_ComboUtils
    /*
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    installFilteredMouseMove: function(element)
    {
      element.on("mousemove", function (e)
        {
          var lastpos = _ComboUtils.lastMousePosition;
          if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY)
          {
            $(e.target).trigger("mousemove-filtered", e);
            _ComboUtils.lastMousePosition.x = e.pageX;
            _ComboUtils.lastMousePosition.y = e.pageY;
          }
        });
    },

    //_ComboUtils
    thunk: function(formula)
    {
      var evaluated = false,
      value;
      return function ()
        {
          if (evaluated === false)
          {
            value = formula();
            evaluated = true;
          }
          return value;
        };
    },

    //_ComboUtils
    _focus: function($el)
    {
      if ($el[0] === document.activeElement)
        return;

      /* set the focus in a 0 timeout - that way the focus is set after the processing
         of the current event has finished - which seems like the only reliable way
         to set focus */
      window.setTimeout(function ()
        {
          var el = $el[0],
          pos = $el.val().length,
          range;
          $el.focus();

          /* make sure el received focus so we do not error out when trying to manipulate the caret.
             sometimes modals or others listeners may steal it after its set */
          if ($el.is(":visible") && el === document.activeElement)
          {
            /* after the focus is set move the caret to the end, necessary when we val()
               just before setting focus */
            if (el.setSelectionRange)
              el.setSelectionRange(pos, pos);
            else if (el.createTextRange)
            {
              range = el.createTextRange();
              range.collapse(false);
              range.select();
            }
          }
        }, 0);
    },

    //_ComboUtils
    getCursorInfo: function (el)
    {
      el = $(el)[0];
      var offset = 0;
      var length = 0;
      if ('selectionStart' in el)
      {
        offset = el.selectionStart;
        length = el.selectionEnd - offset;
      }
      else if ('selection' in document)
      {
        el.focus(); //Fixed???
        var sel = document.selection.createRange();
        length = document.selection.createRange().text.length;
        sel.moveStart('character', -el.value.length);
        offset = sel.text.length - length;
      }
      return {offset : offset, length : length};
    },

    //_ComboUtils
    killEvent: function(event)
    {
      event.preventDefault();
      event.stopPropagation();
    },

    //_ComboUtils
    killEventImmediately: function(event)
    {
      event.preventDefault();
      event.stopImmediatePropagation();
    },

    //_ComboUtils
    defaultEscapeMarkup: function(markup)
    {
      var replace_map =
      {
        '\\' : '&#92;',
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&#39;'
      };
      //@HTMLUpdateOK
      return String(markup).replace(/[&<>"'\\]/g, function (match)
        {
          return replace_map[match];
        });
    },

    //_ComboUtils
    /*
     * Produces a query function that works with a local array
     */
    local: function(options, optKeys)
    {
      var data = options, // data elements
          dataText,
          tmp,
          // function used to retrieve the text portion of a data item that is matched against the search
          text = function (item)
            {
              return "" + item['label'];
            };

      if ($.isArray(data))
      {
        tmp = data;
        data =
          {
            results : tmp
          };
      }
      if ($.isFunction(data) === false)
      {
        tmp = data;
        data = function ()
          {
            return tmp;
          };
      }
      var dataItem = data();
      //select with no options
      if (dataItem && dataItem.text)
      {
        text = dataItem.text;
        // if text is not a function we assume it to be a key name
        if (!$.isFunction(text))
        {
          // we need to store this in a separate variable because in the next step data gets reset
          // and data.text is no longer available
          dataText = dataItem.text;
          text = function (item)
            {
              return item[dataText];
            };
        }
      }
      return function (query)
        {
          var t = query.term,
          filtered =
            {
              results : []
            },
          process;
          
          // if optionsKeys is set, we need to do the key mapping, don't return
          if (t === "" && !optKeys)
          {
            query.callback(data());
            return;
          }
          process = function (datum, collection, keys)
            {
              var group,
              attr;
              datum = datum[0];

              // key mappings
              if (!datum['label'] &&(keys && keys['label'])) {
                datum['label'] = datum[keys['label']];
                delete datum[keys['label']];
              }
              if (!datum['value'] && (keys && keys['value'])) {
                datum['value'] = datum[keys['value']];
                delete datum[keys['value']];
              }
              if (!datum['children'] && (keys && keys['children'])) {
                datum['children'] = datum[keys['children']];
                delete datum[keys['children']];
              }

              if (datum['children'])
              {
                group = {};
                for (attr in datum)
                {
                  if (datum.hasOwnProperty(attr))
                    group[attr] = datum[attr];
                }
                group.children = [];
                _ComboUtils.each2($(datum['children']), function (i, childDatum)
                 {
                   process(childDatum, group.children, (keys && keys['childKeys']) ? keys['childKeys'] : null);
                 });

                //Bug 18903692 - group labels participate in the filtering
                //Reverted. In the nested data case, group may be selectable. Without putting the
                //group data in the collection, we will find no match and new entry may be created for combobox
                if (group.children.length || query.matcher(t, text(group), datum))
                {
                  collection.push(group);
                }
              }
              else
              {
                if (query.matcher(t, text(datum), datum))
                {
                  collection.push(datum);
                }
              }
            };
          if(data()){
            _ComboUtils.each2($(data().results), function (i, datum)
              {
                process(datum, filtered.results, optKeys);
              });
          }
          query.callback(filtered);
        };
    },

    //_ComboUtils
    checkFormatter: function (ojContext, formatter, formatterName)
    {
      if ($.isFunction(formatter))
        return true;
      if (!formatter)
        return false;

      throw new Error(formatterName + " must be a function or a false value");
    },

    //_ComboUtils
    /*
     * Creates a new class
     */
    clazz: function(SuperClass, methods)
    {
      var constructor = function ()  {};
      oj.Object.createSubclass(constructor, SuperClass, '');
      constructor.prototype = $.extend(constructor.prototype, methods);
      return constructor;
    }

  };


  var _AbstractOjChoice = _ComboUtils.clazz(Object,
    {
      //_AbstractOjChoice
      _bind : function (func)
      {
        var self = this;
        return function ()
        {
          func.apply(self, arguments);
        };
      },

      //_AbstractOjChoice
      _init : function (opts)
      {
        var results,
        search,
        className = this._classNm,
        elemName = this._elemNm,
        resultsSelector = ".oj-listbox-results";

        this.ojContext = opts.ojContext;
        this.opts = opts = this._prepareOpts(opts);
        this.id = opts.id;

        // destroy if called on an existing component
        if (opts.element.data(elemName) !== undefined &&
          opts.element.data(elemName) !== null)
        {
          opts.element.data(elemName)._destroy();
        }
        this.container = this._createContainer();

        //Bug 18871897 - ojselect - rootAttributes are not propagated to generated jet component
        var rootAttr = this.opts.rootAttributes;
        this.containerId = (rootAttr && rootAttr.id) ?
          rootAttr.id :
          "ojChoiceId_" + (opts.element.attr("id") || "autogen" + _ComboUtils.nextUid());
        //@HTMLUpdateOK
        this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
        this.container.attr("id", this.containerId);
        // cache the body so future lookups are cheap
        this.body = _ComboUtils.thunk(function ()
          {
            return opts.element.closest("body");
          }
          );
        this.container.attr("style", opts.element.attr("style"));
        this.elementTabIndex = this.opts.element.attr("tabindex");

        // swap container for the element
        this.opts.element
        .data(elemName, this)
        .attr("tabindex", "-1")
        .before(this.container);
        this.container.data(elemName, this);
        this.dropdown = this.container.find(".oj-listbox-drop");
        this.dropdown.data('ojlistbox', this);
        this.dropdown.on("click", _ComboUtils.killEvent);

        // link the shared dropdown dom to the target component instance
        var containerId = this.containerId;
        this.dropdown.attr("data-oj-containerid", containerId);

        this.results = results = this.container.find(resultsSelector);
        // if html ul element is provided, use it instead
        if (opts['list'] && $('#' + opts['list']).is("ul"))
        {
          var dropdownList = $('#' + opts['list']);
          this.dropdownListParent = dropdownList.parent();
          dropdownList.addClass("oj-listbox-results").attr("role", "listbox");
          this.results.replaceWith(dropdownList); //@HTMLUpdateOK
          this.results = results = this.container.find(resultsSelector);
          this.results.css("display", '');
        }

        //TODO: should combobox use .oj-listbox-search .oj-listbox-input
        //this.search = search = this.container.find("input." + className + "-input");
        if (className == "oj-select")
          search = this.container.find("input." + "oj-listbox-input");
        else
          search = this.container.find("input." + className + "-input");
        this.search = search;

        this.queryCount = 0;
        this.resultsPage = 0;
        this.context = null;

        // initialize the container
        this._initContainer();
        this.container.on("click", _ComboUtils.killEvent);
        _ComboUtils.installFilteredMouseMove(this.results);
        this.dropdown.on("mousemove-filtered touchstart touchmove touchend", resultsSelector, this._bind(this._highlightUnderEvent));
        // do not propagate change event from the search field out of the component
        $(this.container).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        $(this.dropdown).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        _ComboUtils.installKeyUpChangeEvent(search);
        search.on("keyup-change input paste", this._bind(this._updateResults));
        search.on("focus", function ()
        {
          search.addClass(className + "-focused");
        }
        );
        search.on("blur", function ()
        {
          search.removeClass(className + "-focused");
        }
        );
        this.dropdown.on("mouseup", resultsSelector, this._bind(function (e)
          {
            if ($(e.target).closest(".oj-listbox-result-selectable").length > 0)
            {
              this._highlightUnderEvent(e);
              this._selectHighlighted(null, e);
            }
          }
          ));
        // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
        // for mouse events outside of itself so it can close itself. since the dropdown is now outside the combobox's
        // dom it will trigger the popup close, which is not what we want
        this.dropdown.on("click mouseup mousedown", function (e)
        {
          e.stopPropagation();
        }
        );
        if ($.isFunction(this.opts.initSelection))
        {
          ///support ko options-binding
          this._initSelection();
        }
        var disabled = opts.element.prop("disabled");
        if (disabled === undefined)
          disabled = false;
        this._enable(!disabled);
        var readonly = opts.element.prop("readonly");
        if (readonly === undefined)
          readonly = false;
        this._readonly(readonly);
        // Calculate size of scrollbar
        _ComboUtils.scrollBarDimensions = _ComboUtils.scrollBarDimensions ||
                                          _ComboUtils.measureScrollbar();
        this.autofocus = opts.element.prop("autofocus");
        opts.element.prop("autofocus", false);
        if (this.autofocus)
          this._focus();
      },

      //_AbstractOjChoice
      _clickAwayHandler: function(event)
      {

        var dropdown = this.dropdown,
            self;

        if ($(event.target).closest(dropdown).length ||
            $(event.target).closest("#"+dropdown.attr("data-oj-containerid")).length)
                    return;

                if (dropdown.length > 0) {
                    self = dropdown.data('ojlistbox');
                    self.close(event);
                }
      },

      //_AbstractOjChoice
      _surrogateRemoveHandler: function()
      {
        if (this.dropdown)
          this.dropdown.remove();
      },
      //_AbstractOjChoice
      _destroy : function ()
      {
        var closeDelayTimer = this._closeDelayTimer;
        if (!isNaN(closeDelayTimer))
        {
          delete this._closeDelayTimer;
          window.clearTimeout(closeDelayTimer);
        }

        var element = this.opts.element,
            ojcomp = element.data(this._elemNm);

        this.close();
        if (this.propertyObserver)
        {
          delete this.propertyObserver;
          this.propertyObserver = null;
        }
        
        // clean up the ul list
        if (this.opts['list'] && this.results) {
          this._cleanupList(this.results);
          // Move to original parent
          if (this.dropdownListParent)
            this.dropdownListParent.append(this.results);
        }
        
        if (ojcomp !== undefined)
        {
          ojcomp.container.remove();
          ojcomp.dropdown.remove();
          element
          .removeAttr("aria-hidden")
          .removeData(this._elemNm)
          .off("." + this._classNm)
          .prop("autofocus", this.autofocus || false);
          if (this.elementTabIndex)
          {
            element.attr(
            {
              tabindex : this.elementTabIndex
            }
            );
          }
          else
          {
            element.removeAttr("tabindex");
          }
          element.show();
        }
      },
      
      //_AbstractOjChoice
      /*
       * Clean up the html list provided by app
       */
      _cleanupList : function (list)
      {
        if (list && list.is("ul"))
        {
          list.removeClass("oj-listbox-results oj-listbox-result-sub");
          list.removeAttr("role");
          for (var i = list.children().length - 1; i>=0; i--) {
            this._cleanupList($(list.children()[i]));
          }
        } else if (list.is("li"))
        {
          if (list.hasClass("oj-listbox-placeholder") ||
              list.hasClass("oj-listbox-no-results"))
            list.remove();
              
          // remove added li classes starts with oj-listbox-
          if (list.attr('class'))
            list.attr('class',list.attr('class').replace(/\oj-listbox-\S+/g, '')); 
            
          // remove wrapping div
          var wrappingDiv = list.children(".oj-listbox-result-label");
          if (wrappingDiv)
            wrappingDiv.contents().unwrap();
            
          if (list.css('display') == 'none')
            list.css('display', '');
            
          this._cleanupList(list.children("ul"));
        }
      },

      //_AbstractOjChoice
      /*
       * Processes option/optgroup/li element and return data object
       */
      _optionToData : function (element)
      {
        if (element.is("option"))
        {
          return {
            value : element.prop("value"),
            label : element.text(),
            element : element.get(),
            css : element.attr("class"),
            disabled : element.prop("disabled"),
            locked : (element.attr("locked") === "locked") || (element.data("locked") === true)
          };
        }
        else if (element.is("optgroup"))
        {
          return {
            label : element.attr("label"),
            children : [],
            element : element.get(),
            css : element.attr("class")
          };
        }
        else if (element.is("li"))
        {
          var itemLabel,
              groupData = null,
              elemChildren = element.children();
          if (elemChildren && elemChildren.length > 0 && elemChildren.is("ul"))
          {
            itemLabel = element.attr("oj-data-label") ? element.attr("oj-data-label") : 
                        element.clone().children().remove().end().text().trim();
            groupData = [];
          } else
          {
            itemLabel = element.attr("oj-data-label") ? element.attr("oj-data-label") : 
                        element.text().trim();
          }
          
          return {
            value: element.attr("oj-data-value"),
            label: itemLabel,
            element: element.get(),
            css: element.attr("class"),
            children: groupData
          };
        }
      },

      //_AbstractOjChoice
      /*
       * Prepares the option items to display in the drop down
       */
      _prepareOpts : function (opts)
      {
        var element,
        datalist,
        self = this;
       
        // clone the options array if optionsKeys is specified
        if (opts['options'] && Array.isArray(opts['options']) && opts['optionsKeys']) 
          opts['options'] = $.extend(true,[],opts['options']);

        element = opts.element;
        var tagName = element.get(0).tagName.toLowerCase();
        if (tagName === "input" && element.attr("list"))
        {
          this.datalist = datalist = $('#' + element.attr("list"));
        }
        ///ojselect
        else if (tagName === "select" && element.children().length > 0)
        {
          this.datalist = datalist = element;
        }
        // if html ul list is provided
        else if (opts['list']) 
        {
          this.datalist = datalist = $('#' + opts['list']);
        }

        opts = $.extend({},
          {
            populateResults : function (container, results, query, showPlaceholder)
            {
              var populate,
              id = this.opts.id;

              populate = function (results, container, depth, showPlaceholder)
              {
                var i,
                l,
                result,
                selectable,
                disabled,
                node,
                label,
                innerContainer,
                formatted;
                
                var processChildren = function (node, result)
                {
                  if (result.children && result.children.length > 0)
                  {
                    var nestedList = result.element && $(result.element[0]).is("li") && 
                        $(result.element[0]).children("ul");
                        
                    var innerContainer = nestedList ? $(result.element[0]).children("ul") :
                        $("<ul></ul>");
                   
                    if (!innerContainer.hasClass("oj-listbox-result-sub"))
                      innerContainer.addClass("oj-listbox-result-sub");
         
                    populate(result.children, innerContainer, depth + 1, false);
                    // @HTMLUpdateOK
                    if (!nestedList)
                      node.append(innerContainer);
                  }
                }


                //Bug 18827605 - ojselect does not show placeholder text when data option is specified
                ///ojselect only add placeholder to dropdown if there is no search filter
                var placeholder = self._getPlaceholder();
                if (showPlaceholder && placeholder !== null && ! query.term && container.find(".oj-listbox-placeholder").length <= 0)
                {
                  //create placeholder item
                  result = {
                    value: '',
                    label: placeholder
                  };

                  node = $("<li></li>");
                  node.addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable");
                  node.attr("role", "presentation");

                  label = $(document.createElement("div"));
                  label.addClass("oj-listbox-result-label");
                  label.attr("id", "oj-listbox-result-label-" + _ComboUtils.nextUid());
                  label.attr("role", "option");

                  formatted = opts.formatResult(result);
                  if (formatted !== undefined)
                    label.text(formatted);

                  // @HTMLUpdateOK
                  node.append(label);

                  node.data(self._elemNm, result);
                  // @HTMLUpdateOK
                  container.prepend(node);
                }

                for (i = 0, l = results.length; i < l; i = i + 1)
                {
                  result = results[i];
                  disabled = (result.disabled === true);
                  selectable = (!disabled) && (id(result) !== undefined);
                  
                  var isList = result.element && $(result.element[0]).is("li");
                  node = isList ? $(result.element[0]) : $("<li></li>");
                  
                  if (node.hasClass("oj-listbox-result")) 
                  {
                    if (result.children && result.children.length > 0)
                      processChildren(node, result);
                    
                    $(result.element[0]).css('display', '');
                  } 
                  else
                  { 
                    node.addClass("oj-listbox-results-depth-" + depth);
                    node.addClass("oj-listbox-result");
                    node.addClass(selectable ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable");
                    if (disabled)
                    {
                      node.addClass("oj-disabled");
                    }
                    if (result.children)
                    {
                      node.addClass("oj-listbox-result-with-children");
                    }
                    node.attr("role", "presentation");

                    label = $(document.createElement("div"));
                    label.addClass("oj-listbox-result-label");
                    label.attr("id", "oj-listbox-result-label-" + _ComboUtils.nextUid());
                    label.attr("role", "option");
                    if (disabled)
                      label.attr("aria-disabled", "true");
                      
                    // append label to node
                    if (!isList) {
                      formatted = opts.formatResult(result);
                      if (formatted !== undefined)
                      {
                        label.text(formatted);
                      }
                      // @HTMLUpdateOK
                      node.append(label);
                    }
                    
                    // process children
                    if (result.children && result.children.length > 0)
                      processChildren(node, result);
                 
                    node.data(self._elemNm, result);
                    if (!isList) {
                      // @HTMLUpdateOK
                      container.append(node);
                    } 
                    else 
                    {
                      // wrap the li contents except the nested ul with wrapping div
                      $(result.element[0]).contents().filter(function(){return this.tagName !== "UL";}).wrapAll(label);
                      $(result.element[0]).css('display', '');
                    }
                  }
                }
              };

              ///ojselect placehholder
              populate(results, container, 0, showPlaceholder);
            }
          }, _ojChoice_defaults, opts);

        opts.id = function (e)
        {
          return e['value'];
        };

        opts.formatResult = function (result)
        {
          return (!isNaN(result['label']) ? this.ojContext._formatValue(result['label']) : result['label']);
        };

        opts.formatSelection = function (data)
        {
          return (data && data['label']) ? (!isNaN(data['label']) ? this.ojContext._formatValue(data['label']) : data['label']) : undefined;
        };

        if (tagName !== "select" && opts["manageNewEntry"] !== null)
        {
          opts["manageNewEntry"] = function (term)
          {
            var entry = {};
            entry['value'] = entry['label'] = $.trim(term);
            return entry;
          }
        }

        if (datalist)
        {
          opts.query = this._bind(function (query)
            {
              var data =
              {
                results : [],
                more : false
              },
              term = query.term,
              children,
              process;

              process = function (element, collection)
              {
                var group;
                var nestedLi = element.children() && element.children().length > 0
                      && element.children().is("ul");
                if (element.is("option") || (element.is("li") && !nestedLi))
                {
                  if (query.matcher(term, element.text(), element))
                  {
                    collection.push(self._optionToData(element));
                  }
                }
                else if (element.is("optgroup") || (element.is("li") && nestedLi))
                {
                  group = self._optionToData(element);
                  _ComboUtils.each2(element.is("optgroup") ? element.children() : element.children("ul").children(), function (i, elm)
                  {
                    process(elm, group.children);
                  }
                  );
                  if (group.children.length > 0)
                  {
                    collection.push(group);
                  }
                }
              };

              children = datalist.children();

              ///ojselect remove existing placeholder item
              if (this._getPlaceholder() !== undefined && children.length > 0 &&
                  children.first().attr("value") == "")
              {
                children = children.slice(1);
              }

              _ComboUtils.each2(children, function (i, elm)
              {
                process(elm, data.results);
              }
              );
              query.callback(data);
            }
            );
        }
        else if ("options" in opts)
        {
          opts.query = _ComboUtils.local(opts.options, opts.optionsKeys ? opts.optionsKeys : null);
        }

        return opts;
      },

      //_AbstractOjChoice
      _triggerSelect : function (data)
      {
        var evt = $.Event(this._elemNm + "-selecting",
          {
            val : this.id(data),
            object : data
          }
          );
        this.opts.element.trigger(evt);
        return !evt.isDefaultPrevented();
      },

      //_AbstractOjChoice
      _isInterfaceEnabled : function ()
      {
        return this.enabledInterface === true;
      },

      //_AbstractOjChoice
      _enableInterface : function ()
      {
        var enabled = this._enabled && !this._readonly,
        disabled = !enabled;

        if (enabled === this.enabledInterface)
          return false;

        this.container.toggleClass("oj-disabled", disabled);
        this.close();
        this.enabledInterface = enabled;

        return true;
      },

      //_AbstractOjChoice
      _enable : function (enabled)
      {
        if (enabled === undefined)
          enabled = true;
        if (this._enabled === enabled)
          return;
        this._enabled = enabled;

        this.opts.element.prop("disabled", !enabled);
        this._enableInterface();
      },

      //_AbstractOjChoice
      _disable : function ()
      {
        this._enable(false);
      },

      //_AbstractOjChoice
      _readonly : function (enabled)
      {
        if (enabled === undefined)
          enabled = false;
        if (this._readonly === enabled)
          return false;
        this._readonly = enabled;

        this.opts.element.prop("readonly", enabled);
        this._enableInterface();
        return true;
      },

      //_AbstractOjChoice
      _opened : function ()
      {
        return this.container.hasClass("oj-listbox-dropdown-open");
      },

      // return the element one which we want to position the listbox-dropdown. We don't
      // want it to be the container because we add the inline messages to the container
      // and if we line up to the container when it has inline messages, the dropdown
      // appears after the inline messages. We want it to always appear next to the input,
      // which is the first child of the container.
      //_AbstractOjChoice
      _getDropdownPositionElement : function ()
      {
        return this.container.children().first();
      },

      //_AbstractOjChoice
      _usingHandler : function (pos, props)
      {

        // if the input part of the component is clipped in overflow, implicitly close the dropdown popup.
        if (oj.PositionUtils.isAligningPositionClipped(props))
        {
          this._closeDelayTimer = window.setTimeout($.proxy(this.close, this), 1);
          return;
        }

        var container = this.container;
        var dropdown = props["element"]["element"];
        dropdown.css(pos);

        if ("bottom" === props["vertical"])
        {
          container.addClass("oj-listbox-drop-above");
          dropdown.addClass("oj-listbox-drop-above");
          }
        else
        {
          container.removeClass("oj-listbox-drop-above");
          dropdown.removeClass("oj-listbox-drop-above");
        }
      },

      //_AbstractOjChoice
      _getDropdownPosition: function ()
        {
        var position = {
                        'my': 'start top',
                        'at': 'start bottom',
                        'of': this._getDropdownPositionElement(),
                        'collision': 'flip',
                        'using': $.proxy(this._usingHandler, this)
        };
        var isRtl = oj.DomUtils.getReadingDirection() === "rtl";
        return oj.PositionUtils.normalizeHorizontalAlignment(position, isRtl);
      },

      //_AbstractOjChoice
      _positionDropdown : function ()
        {
        var dropdown = this.dropdown;
        var position = this._getDropdownPosition();
        var container = this.container;

        dropdown.css('width', container.outerWidth());
        dropdown.position(position);
      },

      //_AbstractOjChoice
      _shouldOpen : function (e)
      {
        var event;

        if (this._opened())
          return false;
        if (this._enabled === false || this._readonly === true)
          return false;

        event = $.Event(this._elemNm + "-opening");
        this.opts.element.trigger(event);
        return !event.isDefaultPrevented();
      },

      //_AbstractOjChoice
      _clearDropdownAlignmentPreference : function ()
      {
        // clear the classes used to figure out the preference of where the dropdown should be opened
        this.container.removeClass("oj-listbox-drop-above");
        this.dropdown.removeClass("oj-listbox-drop-above");
      },

      //_AbstractOjChoice
      /**
       * Opens the dropdown
       *
       * @return {boolean} whether or not dropdown was opened. This method will return false if, for example,
       * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
       * @ignore
       */
      open : function (e)
      {
        if (!this._shouldOpen(e))
          return false;
        this._opening(e);
        return true;
      },

      //_AbstractOjChoice
      _opening : function ()
      {
        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid;

        //this._clearPlaceholder();
        this.container.addClass("oj-listbox-dropdown-open");

        this._clearDropdownAlignmentPreference();

        if (this.dropdown[0] !== this.body().children().last()[0])
        {
          // @HTMLUpdateOK
          this.dropdown.detach().appendTo(this.body());
        }

        // @HTMLUpdateOK
        this.dropdown.appendTo(this.body());

        var psEvents = {};
        psEvents[oj.PopupService.EVENT.POPUP_CLOSE] = $.proxy(this.close, this);
        psEvents[oj.PopupService.EVENT.POPUP_REMOVE] = $.proxy(this._surrogateRemoveHandler, this);
        psEvents[oj.PopupService.EVENT.POPUP_AUTODISMISS] = $.proxy(this._clickAwayHandler, this);
        psEvents[oj.PopupService.EVENT.POPUP_REFRESH] = $.proxy(this._positionDropdown, this);

        /** @type {!Object.<oj.PopupService.OPTION, ?>} */
        var psOptions = {};
        psOptions[oj.PopupService.OPTION.POPUP] = this.dropdown;
        psOptions[oj.PopupService.OPTION.LAUNCHER] = this.opts.element;
        psOptions[oj.PopupService.OPTION.EVENTS] = psEvents;
        psOptions[oj.PopupService.OPTION.POSITION] = this._getDropdownPosition();
        psOptions[oj.PopupService.OPTION.LAYER_SELECTORS] = "oj-listbox-drop-layer";
        oj.PopupService.getInstance().open(psOptions);

        // move the global id to the correct dropdown
        $("#oj-listbox-drop").removeAttr("id");
        this.dropdown.attr("id", "oj-listbox-drop");

        var containerId = this.containerId;
        this.dropdown.attr("data-oj-containerid", containerId);

        // show the elements

        this._positionDropdown();

        ///select: accessibility
        this._getActiveContainer().attr("aria-expanded", true);
      },

      //_AbstractOjChoice
      close : function (event)
      {
        if (!this._opened())
          return;

        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid;

        // unbind event listeners
        this.container.parents().add(window).each(function ()
        {
          $(this).off(scroll).off(resize).off(orient);
        }
        );

        this._clearDropdownAlignmentPreference();

        /** @type {!Object.<oj.PopupService.OPTION, ?>} */
        var psOptions = {};
        psOptions[oj.PopupService.OPTION.POPUP] = this.dropdown;
        oj.PopupService.getInstance().close(psOptions);

        this.dropdown.removeAttr("data-oj-containerid");
        this.dropdown.removeAttr("id");
        this.container.removeClass("oj-listbox-dropdown-open");
        if (!this.opts["list"])
        {
          this.dropdown.detach();
          this.results.empty();
        }
        else
          this.results.find("li").removeClass("oj-hover");
          
        ///select: accessibility
        this._getActiveContainer().attr("aria-expanded", false);
      },

      //_AbstractOjChoice
      _clearSearch : function ()  {},

      //_AbstractOjChoice
      _ensureHighlightVisible : function ()
      {
        var results = this.results,
        children,
        index,
        child,
        hb,
        rb,
        y,
        more;

        index = this._highlight();

        if (index < 0)
          return;

        if (index == 0)
        {
          // if the first element is highlighted scroll all the way to the top,
          // that way any unselectable headers above it will also be scrolled
          // into view
          results.scrollTop(0);
          return;
        }

        children = this._findHighlightableChoices().find(".oj-listbox-result-label");
        child = $(children[index]);
        hb = child.offset().top + child.outerHeight(true);

        // if this is the last child lets also make sure oj-combobox-more-results is visible
        if (index === children.length - 1)
        {
          more = results.find("li.oj-listbox-more-results");
          if (more.length > 0)
          {
            hb = more.offset().top + more.outerHeight(true);
          }
        }

        rb = results.offset().top + results.outerHeight(true);
        if (hb > rb)
        {
          results.scrollTop(results.scrollTop() + (hb - rb));
        }
        y = child.offset().top - results.offset().top;

        // make sure the top of the element is visible
        if (y < 0 && child.css('display') != 'none')
        {
          results.scrollTop(results.scrollTop() + y); // y is negative
        }
      },

      //_AbstractOjChoice
      _findHighlightableChoices : function ()
      {
        return this.results.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)")
                           .filter(function(){
                              return $(this).css('display') != 'none';
                            });
      },

      //_AbstractOjChoice
      _moveHighlight : function (delta)
      {
        var choices = this._findHighlightableChoices(),
        index = this._highlight();
        while (index >= -1 && index < choices.length)
        {
          index += delta;

          // support cycling through the first/last item
          if (index == choices.length)
            index = 0;
          else if (index == -1)
            index = choices.length - 1;

          var choice = $(choices[index]);
          if (choice.hasClass("oj-listbox-result-selectable") && !choice.hasClass("oj-disabled") &&
              !choice.hasClass("oj-selected"))
          {
            this._highlight(index);
            break;
          }
        }
      },

      //_AbstractOjChoice
      _highlight : function (index)
      {
        var choices = this._findHighlightableChoices(),
        choice,
        data;

        if (arguments.length === 0)
        {
          return choices.get().indexOf(choices.filter(".oj-hover")[0]);
        }

        if (index >= choices.length)
          index = choices.length - 1;
        if (index < 0)
          index = 0;

        this._removeHighlight();

        choice = $(choices[index]);
        choice.addClass("oj-hover");

        // ensure assistive technology can determine the active choice
        ///select: accessibility
        this._getActiveContainer().attr("aria-activedescendant",
                                        choice.find(".oj-listbox-result-label").attr("id"));

        this._ensureHighlightVisible();
      },

      //_AbstractOjChoice
      _removeHighlight : function ()
      {
        this.results.find(".oj-hover").removeClass("oj-hover");
      },

      //_AbstractOjChoice
      _highlightUnderEvent : function (event)
      {
        var el = $(event.target).closest(".oj-listbox-result-selectable");
        if (el.length > 0 && !el.is(".oj-hover"))
        {
          var choices = this._findHighlightableChoices();
          this._highlight(choices.index(el));
        }
        else if (el.length == 0)
        {
          // if we are over an unselectable item remove all highlights
          this._removeHighlight();
        }
      },

      //_AbstractOjChoice
      _updateResults : function (initial)
      {
        var search = this.search,
        results = this.results,
        opts = this.opts,
        data,
        self = this,
        input,
        term = search.val(),
        lastTerm = $.data(this.container, this._classNm + "-last-term"),
        // sequence number used to drop out-of-order responses
        queryNumber;

        // prevent duplicate queries against the same term
        if (initial !== true && lastTerm && (term === lastTerm))
          return;

        $.data(this.container, this._classNm + "-last-term", term);

        function postRender()
        {
          self._positionDropdown();
        }

/*
        function render(html)
        {
          //@HTMLUpdateOK
          results.html(html);
          postRender();
        }
 */
        queryNumber = ++this.queryCount;

        this._removeHighlight();
        input = this.search.val();
        if (input !== undefined && input != null && initial !== true)
        {
          term = input;
        }
        else
        {
          term = "";
        }

        this.resultsPage = 1;

        opts.query(
        {
          element : opts.element,
          term : term,
          page : this.resultsPage,
          context : null,
          matcher : opts.matcher,
          callback : this._bind(function (data)
          {
            var def; // default choice

            // ignore old responses
            if (queryNumber != this.queryCount)
            {
              return;
            }

            // ignore a response if the oj-combobox has been closed before it was received
            if (!this._opened())
            {
              return;
            }

            // save context, if any
            this.context = (!data || data.context === undefined) ? null : data.context;
            // create a default choice and prepend it to the list

            if ((!data || data.results.length === 0) && _ComboUtils.checkFormatter(self.ojContext, opts.formatNoMatches, "formatNoMatches"))
            {
              if (this._classNm == "oj-select" && this.opts['multiple'] !== true)
              {
                //security review
//                render("<li class='" + "oj-listbox-no-results'>" + opts.formatNoMatches(self.ojContext, search.val()) + "</li>");
                var li = $("<li>");
                li.addClass("oj-listbox-no-results");
                li.text(opts.formatNoMatches(self.ojContext, search.val()));
                this._preprocessResults(results);
                results.append(li); //@HTMLUpdateOK
                postRender();
              }
              else
                this.close();
              return;
            }

            this._preprocessResults(results);

            self.opts.populateResults.call(this, results, data.results,
              {
                term : search.val(),
                page : this.resultsPage,
                context : null
              },
              this._showPlaceholder()
            );
            this._postprocessResults(data, initial);
            postRender();
          }
          )
        }
        );
      },
      
      //_AbstractOjChoice
      _preprocessResults: function (results)
      {
        if (!this.opts["list"])
          results.empty();
        else 
        {
          var resultList = results.children();
          // hide the list items
          this._hideResultList(resultList);
        }
      },
      
      //_AbstractOjChoice
      _hideResultList : function (resultList)
      {
        for (var i = 0; i<resultList.length; i++) {
          if ($(resultList[i]).is("LI")) {
            if ($(resultList[i]).hasClass("oj-listbox-no-results") ||
                $(resultList[i]).hasClass("oj-listbox-placeholder"))
              $(resultList[i]).remove();
              
            $(resultList[i]).css('display', 'none');
            if ($(resultList[i]).hasClass("oj-selected"))
              $(resultList[i]).removeClass("oj-selected")
          }
          var nested = $(resultList[i]).children("ul");
          if (nested && nested.children())
            this._hideResultList(nested.children());   
        }
      },

      //_AbstractOjChoice
      _cancel : function (event)
      {
        this.close(event);
      },

      //_AbstractOjChoice
      _focusSearch : function ()
      {
        _ComboUtils._focus(this.search);
      },

      //_AbstractOjChoice
      _selectHighlighted : function (options, event)
      {
        var index = this._highlight(),
        highlighted = this.results.find(".oj-hover"),
        data = highlighted.closest(".oj-listbox-result").data(this._elemNm);

        if (data)
        {
          this._highlight(index);
          this._onSelect(data, options, event);
        }
        else if (options && options.noFocus)
        {
          this.close(event);
        }
      },

      //_AbstractOjChoice
      _getPlaceholder : function ()
      {
        return this.opts.element.attr("placeholder") ||
        this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
        this.opts.element.data("placeholder") ||
        this.opts.placeholder;
      },

      //_AbstractOjChoice
      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (!placeholder)
          return;
        this.search.attr("placeholder", placeholder);
        this.container.removeClass(this._classNm + "-allowclear");
      },

      //_AbstractOjChoice
      _initContainerWidth : function ()
      {
        function resolveContainerWidth()
        {
          var style,
          attrs,
          matches,
          i,
          l,
          attr;

          // check if there is inline style on the element that contains width
          style = this.opts.element.attr('style');
          if (style !== undefined)
          {
            attrs = style.split(';');
            for (i = 0, l = attrs.length; i < l; i = i + 1)
            {
              //@HTMLUpdateOK
              attr = attrs[i].replace(/\s/g, '');
              matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
              if (matches !== null && matches.length >= 1)
                return matches[1];
            }
          }
        };

        var width = resolveContainerWidth.call(this);
        if (width !== null)
        {
          this.container.css("width", width);
        }
      },

      //_AbstractOjChoice
      getVal: function () {
        return this.ojContext.option("value");
      },


      //_AbstractOjChoice
      ///pass original event
      setVal: function (val, event) {
        if (typeof val === "string")
        {
          //Bug 19231311 - select needs implementation fixes...
          // 1. _SetValue() compares the value passed in to the last saved display value. This is
          // from ADF and is useful for comapring display values for inputs but since combo sets an
          // array, this check is not needed.
          // 2. To bypass the check call this method when the value has changed and with the
          // additional parameter.
          this.ojContext._SetValue([val], event, {doValueChangeCheck: false});
        }
        else
        {
          //Bug 19231311 - select needs implementation fixes...
          this.ojContext._SetValue(val, event, {doValueChangeCheck: false});
        }
        // also set on the input element
        this.opts.element.val(val);
      },

      //_AbstractOjChoice
      ///ojselect placeholder
      _showPlaceholder : function ()
      {
        return false;
      },

      //_AbstractOjChoice
      ///select: accessibility
      _getActiveContainer : function ()
      {
        return this.search;
      },

      //_AbstractOjChoice
      _hasSearchBox : function ()
      {
        return (this.opts.minimumResultsForSearch !== undefined &&
          this.container._hasSearchBox !== undefined);
      }

    }
    );

  var _ojChoice_defaults =
  {
    closeOnSelect : true,
    openOnEnter : true,
    formatNoMatches : function (ojContext, val)
    {
      return ojContext.getTranslatedString("noMatchesFound");
    },
    id : function (e)
    {
      return e.id;
    },
    matcher : function (term, text)
    {
      return ('' + text).toUpperCase().indexOf(('' + term).toUpperCase()) >= 0;
    },

    separator : ","
  };

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 *
 * You may obtain a copy of the Apache License and the GPL License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
  /**
   * @private
   */
  var _AbstractSingleChoice = _ComboUtils.clazz(_AbstractOjChoice,
    {
      //_AbstractSingleChoice
      _enableInterface : function ()
      {
        if (_AbstractSingleChoice.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },

      //_AbstractSingleChoice
      _focus : function ()
      {
        if (this._opened())
        {
          this.close();
        }
      },

      //_AbstractSingleChoice
      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _AbstractSingleChoice.superclass._destroy.apply(this, arguments);
      },

      //_AbstractSingleChoice
      _clear : function (event)
      {
        var data = this.selection.data(this._elemNm);
        if (data)
        {
        // guard against queued quick consecutive clicks

          //This method will be invoked with or without event but 'data' will be null when it is invoked without event.
          //This logic is intended to clear the existing value when user manualy removes text in placeholder input box(which only happens for Combobox).
          //Ideally we should pass event, when we invoke _SetValue() if it is invoked on a UI action. So adding a warning message if event is null.
          if(!event)
             oj.Logger.warn("Event should not be null when user modified the value in UI");
          this.setVal([], event);
          this.search.val("");
          this.selection.removeData(this._elemNm);
        }
        this._setPlaceholder();
      },

      //_AbstractSingleChoice
      _initSelection : function ()
      {
        var selected,
        element,
        self = this;


        ///support ko options-binding
//        if (this.datalist || this.getVal())
//        {
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, this._bind(this._updateSelectedOption));
//        }
      },

      //_AbstractSingleChoice
      _containerKeydownHandler : function (e)
      {
        if (!this._isInterfaceEnabled())
          return;

        if (e.which === _ComboUtils.KEY.PAGE_UP || e.which === _ComboUtils.KEY.PAGE_DOWN)
        {
          // prevent the page from scrolling
          _ComboUtils.killEvent(e);
          return;
        }

        switch (e.which)
        {
        case _ComboUtils.KEY.UP:
        case _ComboUtils.KEY.DOWN:
          if (this._opened())
          {
            this._moveHighlight((e.which === _ComboUtils.KEY.UP) ? -1 : 1);
          }
          else
          {
            this.open(e);
          }
          _ComboUtils.killEvent(e);
          return;

        case _ComboUtils.KEY.ENTER:
          this._selectHighlighted(null, e);
          _ComboUtils.killEvent(e);
          return;

        case _ComboUtils.KEY.TAB:
          this.close(e);
          return;

        case _ComboUtils.KEY.ESC:
          this._cancel(e);
          return;
        }

        ///ojselect: used by select
        this._userTyping = true;

        if (!this._opened())
          this.open(e);
      },

      //_AbstractSingleChoice
      _containerKeyupHandler : function (e)
      {
        if (this._isInterfaceEnabled())
        {
          if (!this._opened())
            this.open(e);
        }
      },

      //_AbstractSingleChoice
      _initContainer : function ()
      {
        var selection,
        container = this.container,
        dropdown = this.dropdown,
        elementLabel;

        //Bug 19652099 - ojselect id attribute on oj-select-choice div is not meaningful
        var rootAttr = this.opts.rootAttributes;
        var idSuffix = (rootAttr && rootAttr.id) ?
          rootAttr.id :
          (this.opts.element.attr("id") || _ComboUtils.nextUid());

        this.selection = selection = container.find("." + this._classNm + "-choice");
        //Bug 19335259 - ojselect missing id attribute on oj-select-choice div
        selection.attr("id", this._classNm + "-choice-" + idSuffix);

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
        if (!elementLabel.attr("id"))
          elementLabel.attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        selection.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + idSuffix);
        if (!this.results.attr("id"))
          this.results.attr("id", "oj-listbox-results-" + idSuffix);
          
        this.search.attr("aria-owns", this.results.attr("id"));
        this.search.attr("aria-labelledby", elementLabel.attr("id")); 
        this.opts.element.attr("aria-labelledby", elementLabel.attr("id"));
        
        if (this.search.attr('id'))
          elementLabel.attr('for', this.search.attr('id'));
          
        if (this.opts.element.attr("aria-label"))
          this.search.attr("aria-label", this.opts.element.attr("aria-label"));
          
        if (this.opts.element.attr("aria-controls"))
          this.search.attr("aria-controls", this.opts.element.attr("aria-controls"));

        selection.on("keydown", this._bind(this._containerKeydownHandler));
        //selection.on("keyup-change input", this._bind(this._containerKeyupHandler));

        selection.on("mousedown", "abbr", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            this._clear(e);
            _ComboUtils.killEventImmediately(e);
            this.close(e);
            this.selection.focus();
          }
          ));

        selection.on("mousedown", this._bind(function (e)
          {
            ///prevent user from focusing on disabled select
            if (this.opts.element.prop("disabled"))
              _ComboUtils.killEvent(e);

            if (this._opened())
            {
              this.close(e);
            }
            else if (this._isInterfaceEnabled())
            {
              this.open(e);
            }
            this.search.focus();
          }
          ));

        selection.on("focus", this._bind(function (e)
          {
            _ComboUtils.killEvent(e);
          }
          ));

        this.search.on("blur keyup", this._bind(function (e)
          {
            if(e.type === 'keyup' && e.keyCode !== 10 && e.keyCode !== 13) return;
            
            if (this.search.val() !== undefined && this.results.find(".oj-hover").length <= 0) {
              // Call _onSelect if no previous data and there is typed in text
              // or the previous data is different from typed in text
              if (this.opts["manageNewEntry"]) {
                if ((!this.selection.data("ojcombobox") && this.search.val() !== "")
                    || (this.selection.data("ojcombobox") && this.selection.data("ojcombobox").label !== this.search.val())) {
                  var data = this.opts["manageNewEntry"](this.search.val());
                  this._onSelect(data, null, e);
                }
              } else if (this.opts["manageNewEntry"] == null) {
                var data = this.selection.data(this._elemNm);
                if (this.search.val() == "")
                  this._clear(e);
                else if (!data && this.search.val() !== "") 
                  this._clearSearch();
                else {
                  var formatted = this.opts.formatSelection(data);
                  if (formatted !== undefined) 
                  {
                    this.search.val(formatted);
                  }
                }
              }
            }
            this.search.removeClass(this._classNm + "-focused");
          }
          ));

        this._initContainerWidth();

        this.opts.element.hide()
            .attr("aria-hidden", true);

        this._setPlaceholder();

      },

      //_AbstractSingleChoice
      _prepareOpts : function ()
      {
        var opts = _AbstractSingleChoice.superclass._prepareOpts.apply(this, arguments),
        self = this;

        ///ojselect set initial selected value
        var tagName = opts.element.get(0).tagName.toLowerCase();
        if ((tagName === "input" && opts.element.attr("list")) ||
          (tagName === "select" && opts.element.children().length > 0) ||
          opts['list'])
        {
          var eleName = opts['list'] ? "li" : "option";
          
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var selected;
            var value = self.getVal();
            if (Array.isArray(value))
              value = value[0];

            if (value !== undefined && value !== null)
            {
              selected = self._optionToData(element.find(eleName).filter(function ()
                  {
                    if (eleName == "li")
                      return this.getAttribute("oj-data-value") === value;
                    else if (eleName == "option")
                      return this.value === value;
                  }
                  ));
            }
            else
            {
              selected = self._optionToData(element.find(eleName).filter(function ()
                  {
                    if (eleName == "li")
                      return this.getAttribute("oj-data-selected") === true;
                    else if (eleName == "option")
                      return this.selected;
                  }
                  ));
            }
            callback(selected);
          };

          //Bug 19074312 - ojselect should ignore the invalid value set programmatically
          opts.validate = function (element, value)
          {
            var selected;

            if (value !== undefined && value !== null)
            {
              selected = self._optionToData(element.find(eleName).filter(function ()
                  {
                    if (eleName == "li")
                      return this.getAttribute("oj-data-value") === value;
                    else if (eleName == "option")
                      return this.value === value;
                  }
                  ));
            }

            return !! selected;
          };
        }
        else if ("options" in opts || (this.getVal() && this.getVal().length > 0))
        {
          // install default initSelection when applied to hidden input and data is local
          //Bug 20224185 - ojselect does not display selected value
          opts.initSelection = function (element, callback)
          {
            var id = "";
            if (self.getVal() && self.getVal().length)
              id = self.getVal()[0];

            //search in data by id, storing the actual matching item
//            var first = null;
            //Bug 19941308 - ojselect - validator error message is not shown
            //initialize first = placeholder if we have a placeholder and select value is not required
            var usePlaceholder = (tagName == "select") && 
                                 self.ojContext._HasPlaceholderSet() && 
                                 ! self.ojContext._IsRequired();
            var first = usePlaceholder ? self._getPlaceholder() : null;

            var match = null;
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = (id === opts.id(el));
                if (is_match)
                {
                  match = el;
                }
                ///ojselect save the 1st option
                if (first == null)
                {
                  first = el;
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                ///ojselect if no match, pick the 1st option
                if (!match && tagName === "select")
                {
                  match = first;
                }
                callback(match);
              }
            }
            );
          };

          //Bug 19074312 - ojselect should ignore the invalid value set programmatically
          opts.validate = function (element, value)
          {
            var id = value;

            //search in data by id, storing the actual matching item
            var match = null;
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = (id === opts.id(el));
                if (is_match)
                {
                  match = el;
                }
                return is_match;
              },
              callback : $.noop
            }
            );

            return !! match;
          };


        }
        return opts;
      },

      //_AbstractSingleChoice
      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var selected = -1,
        self = this,
        highlightableChoices;

        highlightableChoices = this._findHighlightableChoices();
        _ComboUtils.each2(highlightableChoices, function (i, elm)
        {
          if (self.getVal() && self.getVal()[0] === self.id(elm.data(self._elemNm)))
          {
            selected = i;
            return false;
          }
        }
        );

        // and highlight it
        if (noHighlightUpdate !== false)
        {
          if (initial === true && selected >= 0)
          {
            this._highlight(selected);
          }
        }
      },

      //_AbstractSingleChoice
      ///pass original event
      _onSelect : function (data, options, event)
      {
        if (!this._triggerSelect(data))
          return;

        var old = this.getVal()? this.getVal()[0] : null;
        //selection will be updated after _SetValue is called
        //this._updateSelection(data);
        this.close(event);
        // When there is validation error, the value option may retain the previous value
        // although the display value is different. In that case, user should be able to still
        // select the previous valid value to get rid off the invalid style and message.
        /*if (!(old === this.id(data)))*/
        this.setVal(this.id(data).length === 0 ? [] : this.id(data), event);
        this._focusSearch();
      },

      //_AbstractSingleChoice
      ///beforeExpand
      _shouldOpen : function (e)
      {
        if (this._opened())
          return false;
        if (this._enabled === false || this._readonly === true)
          return false;

        var eventData = {
          'component' : this.opts.element
        };

        return this.ojContext._trigger("beforeExpand", e, eventData);
      },

      //_AbstractSingleChoice
      _clearSearch : function ()
      {
        this.search.val("");
      }

    }
    );


/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 * 
 * You may obtain a copy of the Apache License and the GPL License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
/**
 * @private
 */
  var _OjSingleCombobox = _ComboUtils.clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-component"
          }
          ).html([ //@HTMLUpdateOK
              "<div class='oj-combobox-choice' tabindex='-1' role='presentation'>",
              "   <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "       spellcheck='false' class='oj-combobox-input' role='combobox' aria-expanded='false' aria-autocomplete='list' />",
              "   <abbr class='oj-combobox-clear-entry' role='presentation'></abbr>",
              "   <a class='oj-combobox-arrow oj-combobox-icon oj-component-icon oj-clickable-icon-nocontext oj-combobox-open-icon' role='presentation'></a>",
              "</div>",
              "<div class='oj-listbox-drop' style='display:none' role='presentation'>",
              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      },
      
      _enable : function (enabled)
      {
        _OjSingleCombobox.superclass._enable.apply(this, arguments);

        if (this._enabled) 
          this.container.find(".oj-combobox-arrow").removeClass("oj-disabled");
        else 
          this.container.find(".oj-combobox-arrow").addClass("oj-disabled");
      },
      
      close : function (event)
      {
        if (!this._opened())
          return;
        _OjSingleCombobox.superclass.close.apply(this, arguments);
      },

      _opening : function (event)
      {
        var el,
        range,
        len;
        
        //if beforeExpand is not cancelled
        _OjSingleCombobox.superclass._opening.apply(this, arguments);
        this._updateResults(true);
      },
      
      _containerKeydownHandler : function (e)
      {
        ///ignore control key and function key
        if (_ComboUtils.KEY.isControl(e) || _ComboUtils.KEY.isFunctionKey(e))
          return;
          
        _OjSingleCombobox.superclass._containerKeydownHandler.apply(this, arguments);
      },
      
      _updateSelection : function (data)
      {
        var formatted;
        
        this.selection.data(this._elemNm, data);
        if (data !== null && data.length != 0)
        {
          formatted = this.opts.formatSelection(data);
          if (formatted !== undefined && this.search.val() !== formatted) 
          {
              this.search.val(formatted);
          }
          this.search.removeClass(this._classNm + "-default");
        }else{
          //data will be null only when user set it programmatically.
          this.search.val("");
          this._setPlaceholder();
        }
        
        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      },
      
      _updateSelectedOption : function(selected)
      {
        if (selected !== undefined && selected !== null) {
          this._updateSelection(selected);
        }else{
          // if we found no match, update the selection with the value
          var value = this.getVal();
          var data = !value ? null : !Array.isArray(value) ? {'label':value}: (Array.isArray(value) && value.length ) ? { 'label': value[0] } : null ;
          this._updateSelection(data);
        } 
      }
    }
    );


/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 *
 * You may obtain a copy of the Apache License and the GPL License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
  /**
 * @private
 */
var _OjSingleSelect = _ComboUtils.clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojselect",
      _classNm : "oj-select",
      _userTyping : false,


      //_OjSingleSelect
      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-select oj-component"
          }
          ).html([
              "<div class='oj-select-choice' tabindex='0' role='combobox' ",
              "     aria-autocomplete='none' aria-expanded='false' aria-ready='true'>",
              "  <span class='oj-select-chosen'></span>",
              "  <abbr class='oj-select-search-choice-close' role='presentation'></abbr>",
              "  <a class='oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role='presentation'>",
              "</a></div>",

              "<div class='oj-listbox-drop' style='display:none' role='presentation'>",

              "  <div class='oj-listbox-search-wrapper'>",

              "  <div class='oj-listbox-search'>",
              "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "           spellcheck='false' class='oj-listbox-input' title='Search field' ",
              "           role='combobox' aria-expanded='false' aria-autocomplete='list' />",

              "    <span class='oj-listbox-spyglass-box'>",
              "      <span class='oj-component-icon oj-clickable-icon-nocontext oj-listbox-search-icon' role='presentation'>",
              "       <b role='presentation'></b></span>",
              "    </span>",
              "  </div>",

              "  </div>",

              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"

            ].join("")); //@HTMLUpdateOK

        return container;
      },

      //_OjSingleSelect
      _enable : function (enabled)
      {
        _OjSingleSelect.superclass._enable.apply(this, arguments);

        //Bug 18714295 - dropdown icon is in disabled state after enabling ojselect
        if (this._enabled) {
          this.container.find(".oj-select-choice").attr("tabindex", "0");
          this.container.find(".oj-select-arrow").removeClass("oj-disabled");
        }
        else {
          //Don't allow focus on a disabled "select"
          this.container.find(".oj-select-choice").attr("tabindex", "-1");
          //Bug 18697446 - disabled select icon hover still shows changes
          this.container.find(".oj-select-arrow").addClass("oj-disabled");
        }
      },

      //_OjSingleSelect
      close : function (event)
      {
        if (!this._opened())
          return;
        _OjSingleSelect.superclass.close.apply(this, arguments);

        this.container.find(".oj-select-choice")
          .attr("aria-expanded", false);

        //Bug 18763700 - required validation err is not displayed when user tabs out
        //always clear search text when dropdown close
        if (! this._testClear(event))
          this._clearSearch();

        //Bug 19790207 - ojselect input field grabs focus on paste
        //don't set focus on the select box if event target is not select element
        if (! (event instanceof MouseEvent) ||
            event.target == this.selection || event.target == this.search) {
          _ComboUtils._focus(this.selection);
        }

        ///remove "mouse click" listeners on spyglass
        this.container.find(".oj-listbox-spyglass-box").off("mouseup click");
      },

      //_OjSingleSelect
      _opening : function (event)
      {
        var el,
            range,
            len;

        _OjSingleSelect.superclass._opening.apply(this, arguments);

        this.container.find(".oj-select-choice")
          .attr("aria-expanded", true);

        var searchText;
        //Bug 19728016 - start typing 1 letter on select box, but 2 letters displayed on searchbox
        //In case of chrome/IE, typed key is added on search element as we move focus from select element to search
        //But this is not happening on firefox and hence we need to set it as part of select element's event
        //and kill the event to avoid duplicate charecters on search field later in IE/chrome.
        //Dropdown popup will be opened on up/down/left/right arrows so excluding those as search text.
        if(event && event.type == "keydown" &&
            !(event.which == _ComboUtils.KEY.UP || event.which == _ComboUtils.KEY.DOWN ||
             event.which == _ComboUtils.KEY.LEFT || event.which == _ComboUtils.KEY.RIGHT))
        {
          searchText = String.fromCharCode(event.which);
          _ComboUtils.killEvent(event); // kill event to prevent duplicate keys in search field.
        }

        //select: focus still stay on the selectBox if open dropdown by mouse click
        this._showSearchBox(searchText);

        //James: tab out of an expanded poplist, focus is going all the way to the top of the page.
        if (this._hasSearchBox())
        {
          el = this.search.get(0);
          if (el.createTextRange)
          {
            range = el.createTextRange();
            range.collapse(false);
            range.select();
          }
          else if (el.setSelectionRange)
          {
            len = this.search.val().length;
            el.setSelectionRange(len, len);
          }
        }

        if(searchText)
          this._updateResults();
        else
          this._updateResults(true);
      },

      //_OjSingleSelect
      _initContainer : function ()
      {
        ///ojselect placeholder
        var selectedId = this.containerId + "_selected";
        this.text = this.container.find(".oj-select-chosen").attr("id", selectedId);

        _OjSingleSelect.superclass._initContainer.apply(this, arguments);

        ///select: accessibility
        this.container.find(".oj-select-choice")
          .attr({
            "aria-owns": this.search.attr("aria-owns"),
            "aria-labelledby": this.search.attr("aria-labelledby"),
            "aria-describedby": selectedId
          });


        //Bug 21079249 - missing select label
        var label = this.opts.element.attr("aria-label");
        if (label)
          this.selection.attr("aria-label", label);

        this.search.on("keydown", this._bind(this._containerKeydownHandler));
        this.search.on("keyup-change input", this._bind(this._containerKeyupHandler));

        //Bug 20091414 - nls: hardcoded string 'search field' in select component
        this.search.attr("title", this.ojContext.getTranslatedString("seachField"));

        //Bug 18763700 - required validation err is not displayed when user tabs out
        var self = this;
        this.selection.on("blur", function(e) {
          self._testClear(e);
        });

      },

      //_OjSingleSelect
      _initSelection : function ()
      {
        if (this._isPlaceholderOptionSelected())
        {
          this._updateSelection(null);
          this.close();
          this._setPlaceholder();
        }
        else
        {
          _OjSingleSelect.superclass._initSelection.apply(this, arguments);
        }

      },

      //_OjSingleSelect
      _updateSelectedOption : function(selected)
      {
        if (selected !== undefined && selected !== null)
        {
          //ojSelect by default use first option if user set a value which is not listed in original option items.
          //So need to update options to reflect the correct value in component state.
          var selectedVal,
          value = this.getVal();
          value = Array.isArray(value)? value[0]: value;
          selectedVal = this.opts.id(selected);

          if(value !== selectedVal)
          {
            //no previous value
            if (value === undefined || value === null) {
              this.ojContext.options['value'] = Array.isArray(selectedVal)? selectedVal : [selectedVal];
            }
            //fire optionChange event
            else {
              this.setVal(Array.isArray(selectedVal)? selectedVal : [selectedVal]);
            }
          }
          this._updateSelection(selected);
          this.close();
        }

      },

      //_OjSingleSelect
      _updateSelection : function (data)
      {
        this.selection.data(this._elemNm, data);
        //Bug 18326121 - ojet select displaying values incorrectly
        if (data !== null)
        {
          this.text.text(data['label']);
        }
        ///ojselect placeholder
        ///reduce number of call to setVal
        ///this.setVal(data? this.opts.id(data) : data);

        //make sure placeholder text has "oj-select-default" class
        if (data && data.id != "")
          this.text.removeClass(this._classNm + "-default");

        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      },

      //_OjSingleSelect
      _getActiveContainer : function ()
      {
        var expanded = this.search.attr("aria-expanded");
        return (expanded && this._hasSearchBox()) ? this.search : this.selection;
      },

      //_OjSingleSelect
      _isPlaceholderOptionSelected : function ()
      {
        var placeholderOption;
        ///ojselect allow placeholder to be an empty string
        if (this._getPlaceholder() === null)
          return false; // no placeholder specified so no option should be considered

        var cval = this.getVal();
        cval = Array.isArray(cval)? cval[0]: cval;
        //This method is used to check whether placeholder text need to be displayed in ui or not and hence checking current value should be fine.
        return (cval === "")
         || (cval === undefined)
         || (cval === null);
      },

      //_OjSingleSelect
      ///ojselect placeholder this method should be in AbstractOjChoice
      _getPlaceholder : function ()
      {
        return this.opts.placeholder;
      },

      //_OjSingleSelect
      ///ojselect placeholder
      _showPlaceholder : function ()
      {
        return true;
      },

      //_OjSingleSelect
      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (this._isPlaceholderOptionSelected() && placeholder !== undefined)
        {
          if (placeholder === undefined)
            placeholder = "";
          this.text.text(placeholder).addClass(this._classNm + "-default");
          this.container.removeClass(this._classNm + "-allowclear");
        }
      },

      //_OjSingleSelect
      setVal: function (val, event)
      {
        ///pass original event
        _OjSingleSelect.superclass.setVal.call(this, val, event);
        this.selection.data("selectVal", val);
      },

      //_OjSingleSelect
      _containerKeydownHandler : function (e)
      {
        ///ignore shift key
        if (_ComboUtils.KEY.isControl(e) || _ComboUtils.KEY.isFunctionKey(e))
        {
          return;
        }

        switch (e.which)
        {
        case _ComboUtils.KEY.TAB:
          /*
          this._selectHighlighted(
            {
              noFocus : true
            }, e   ///pass original event
          );
          */
          this.close(e);
          //James: tab out of an expanded poplist, focus is going all the way to the top of the page.
          this.selection.focus();

          //Bug 18763700 - required validation err is not displayed when user tabs out
          this._testClear(e);
          return;

        // open dropdown on Enter
        case _ComboUtils.KEY.ENTER:
          if (e.target === this.selection[0] && ! this._opened())
          {
            this.open(e);
            _ComboUtils.killEvent(e);
            return;
          }
          break;
        }

        var hasSearchBoxAlready = this._hasSearchBox();
        _OjSingleSelect.superclass._containerKeydownHandler.apply(this, arguments);
        // 19556686 show searchbox when it is not already shown  in dropdown and user starts typing text
        if (!hasSearchBoxAlready && this._userTyping) {
            var c;
            if(e.which != _ComboUtils.KEY.LEFT && e.which != _ComboUtils.KEY.RIGHT)
            {
              c = String.fromCharCode(e.which);
            }
            this._showSearchBox(c);
            this._updateResults();
            //Bug 19728016 - start typing 1 letter on select box, but 2 letters displayed on searchbox
            // Need to kill event to prevent duplicate characters on ie/chrome.
            _ComboUtils.killEvent(e);
        }

      },

      //_OjSingleSelect
      //Bug 18763700 - required validation err is not displayed when user tabs out
      _testClear : function (event)
      {
        if (this.text.text() == "")
        {
          this._clear(event);
          return true;
        }
        return false;
      },

      //_OjSingleSelect
      _showSearchBox : function (searchText)
      {
        var focusOnSearchBox = false;
        var searchBox = this.dropdown.find(".oj-listbox-search");
        if (searchBox)
        {
          //hide and show the search box
          if (this._hasSearchBox())
          {
            this.dropdown.find(".oj-listbox-search-wrapper")
              .removeClass("oj-helper-hidden-accessible");

            $(searchBox).removeAttr("aria-hidden");
            this.search.val(searchText);
            focusOnSearchBox = true;

          }
          else
          {
            this.dropdown.find(".oj-listbox-search-wrapper")
              .addClass("oj-helper-hidden-accessible");

            $(searchBox).attr("aria-hidden", "true");

          }
        }

        //if search box is being displayed, focus on the search box otherwise focus on the select box
        _ComboUtils._focus(focusOnSearchBox ? this.search : this.selection);

        ///disable "click" on spyglass
        if (focusOnSearchBox)
        {
          var self = this;
          searchBox.find(".oj-listbox-spyglass-box").on("mouseup click", function (e)
          {
            self.search.focus();
            e.stopPropagation();
          });
        }

      },

      //_OjSingleSelect
      _hasSearchBox : function ()
      {
        var threshold = this.opts.minimumResultsForSearch;
        var len;
        if (this.opts['list'])
          len = $("#"+this.opts['list']).find("li").length;
        else
          len = this.datalist ? this.datalist[0].length : (this.opts.options ? this.opts.options.length: 0);
          
        return (len > threshold || this._userTyping);
      }

    }
    );


/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 *
 * You may obtain a copy of the Apache License and the GPL License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
/**
 * @private
 */
  var _AbstractMultiChoice = _ComboUtils.clazz(_AbstractOjChoice,
    {
      _prepareOpts : function ()
      {
        var opts = _AbstractMultiChoice.superclass._prepareOpts.apply(this, arguments),
        self = this;

        var tagName = opts.element.get(0).tagName.toLowerCase();
        if ((tagName === "input" && opts.element.attr("list")) ||
             (tagName === "select" && opts.element.children().length > 0) ||
             opts["list"])
        {
          var eleName = opts['list'] ? "li" : "option";
          
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var data = [];
            if (self.getVal())
            {
              var selected;
              var ids = self.getVal();
              for (var i = 0; i < ids.length; i++)
              {
                var id = ids[i];
                selected = element.find(eleName).filter(function ()
                  {
                    if (eleName === "option")
                      return this.value === id;
                    else if (eleName === "li")
                      return this.getAttribute("oj-data-value") === id;
                  }
                  );
                if(selected && selected.length)
                {
                    data.push(self._optionToData(selected));
                }else{
                   // If user entered value which is not listed in predefiend options
                  data.push({'value':id,'label':id});
                }

              }
            }
            // don't do this for select since it returns the first option as selected by default
            else if (tagName !== "select") 
            {
              var selected;
              selected = element.find(eleName).filter(function ()
                {
                  if (eleName === "option")
                    return this.selected;
                  else if (eleName === "li")
                    return this.getAttribute("oj-data-selected") === true;
                }
                );
              _ComboUtils.each2(selected, function (i, elm)
              {
                data.push(self._optionToData(elm));
              }
              );
            }
            callback(data);
          };
        }
        else if ("options" in opts)
        {
          // install default initSelection when applied to hidden input and data is local
          opts.initSelection = opts.initSelection || function (element, callback)
          {
            var ids = self.getVal();
            //search in data by array of ids, storing matching items in a list
            var matches = [];
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = $.grep(ids, function (id)
                  {
                    return id === opts.id(el);
                  }
                  ).length;
                if (is_match)
                {
                  matches.push(el);
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                // reorder matches based on the order they appear in the ids array because right now
                // they are in the order in which they appear in data array
                var ordered = [];
                for (var i = 0; i < ids.length; i++)
                {
                  var id = ids[i];
                  var found = false;
                  for (var j = 0; j < matches.length; j++)
                  {
                    var match = matches[j];
                    if (id === opts.id(match))
                    {
                      ordered.push(match);
                      matches.splice(j, 1);
                      found = true;
                      break;
                    }
                  }
                  if(!found){
                    //If user entered value which is not listed in predefiend options
                    ordered.push({'value':id,'label':id});
                  }
                }
                callback(ordered);
              }
            }
            );
          };
        }
        return opts;
      },

      _selectChoice : function (choice)
      {
        var selected = this.container.find("." + this._classNm + "-selected-choice.oj-focus");
        if (selected.length && choice && choice[0] == selected[0])
        {}

        else
        {
          if (selected.length)
          {
            this.opts.element.trigger("choice-deselected", selected);
          }
          selected.removeClass("oj-focus");
          if (choice && choice.length)
          {
            this.close();
            choice.addClass("oj-focus");
            this.container.find("." +this._classNm + "-description").text(choice.attr("valueText") + ". Press back space to delete.")
            .attr("aria-live", "assertive");
            this.opts.element.trigger("choice-selected", choice);
          }
        }
      },

      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _AbstractMultiChoice.superclass._destroy.apply(this, arguments);
      },

      _initContainer : function ()
      {
        var selector = "." + this._classNm + "-choices",
        selection,
        idSuffix = _ComboUtils.nextUid(),
        elementLabel;

        this.searchContainer = this.container.find("." + this._classNm + "-search-field");
        this.selection = selection = this.container.find(selector);

        var _this = this;
        this.selection.on("click", "." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)", function (e)
        {
          _this.search[0].focus(); //Fixed??
          _this._selectChoice($(this));
        }
        );

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
        if (!elementLabel.attr("id"))
          elementLabel.attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        selection.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + idSuffix);
        if (!this.results.attr("id"))
          this.results.attr("id", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-owns", this.results.attr("id"));
        this.search.attr("aria-labelledby", elementLabel.attr("id"));
        this.opts.element.attr("aria-labelledby", elementLabel.attr("id"));

        if (this.search.attr('id'))
          elementLabel.attr('for', this.search.attr('id'));
          
        if (this.opts.element.attr("aria-label"))
          this.search.attr("aria-label", this.opts.element.attr("aria-label"));
          
        if (this.opts.element.attr("aria-controls"))
          this.search.attr("aria-controls", this.opts.element.attr("aria-controls"));

        this.search.attr("tabindex", this.elementTabIndex);
        this.keydowns = 0;
        this.search.on("keydown", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;

            ++this.keydowns;
            var selected = selection.find("." + this._classNm + "-selected-choice.oj-focus");
            var prev = selected.prev("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)");
            var next = selected.next("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)");
            var pos = _ComboUtils.getCursorInfo(this.search);

            if (selected.length &&
              (e.which == _ComboUtils.KEY.LEFT || e.which == _ComboUtils.KEY.RIGHT || e.which == _ComboUtils.KEY.BACKSPACE || e.which == _ComboUtils.KEY.DELETE || e.which == _ComboUtils.KEY.ENTER))
            {
              var selectedChoice = selected;
              if (e.which == _ComboUtils.KEY.LEFT && prev.length)
              {
                selectedChoice = prev;
              }
              else if (e.which == _ComboUtils.KEY.RIGHT)
              {
                selectedChoice = next.length ? next : null;
              }
              else if (e.which === _ComboUtils.KEY.BACKSPACE)
              {
                this._unselect(selected.first(), e);
                this.search.width(10);
                selectedChoice = prev.length ? prev : next;
              }
              else if (e.which == _ComboUtils.KEY.DELETE)
              {
                this._unselect(selected.first(), e);
                this.search.width(10);
                selectedChoice = next.length ? next : null;
              }
              else if (e.which == _ComboUtils.KEY.ENTER)
              {
                selectedChoice = null;
              }

              this._selectChoice(selectedChoice);
              _ComboUtils.killEvent(e);
              if (!selectedChoice || !selectedChoice.length)
              {
                this.open();
              }
              return;
            }
            else if (((e.which === _ComboUtils.KEY.BACKSPACE && this.keydowns == 1)
                 || e.which == _ComboUtils.KEY.LEFT) && (pos.offset == 0 && !pos.length))
            {
              this._selectChoice(selection.find("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)").last());
              _ComboUtils.killEvent(e);
              return;
            }
            else
            {
              this._selectChoice(null);
            }

            if (this._opened())
            {
              switch (e.which)
              {
              case _ComboUtils.KEY.UP:
              case _ComboUtils.KEY.DOWN:
                this._moveHighlight((e.which === _ComboUtils.KEY.UP) ? -1 : 1);
                _ComboUtils.killEvent(e);
                return;
              case _ComboUtils.KEY.ENTER:
                this._selectHighlighted(null, e);
                _ComboUtils.killEvent(e);
                return;
              case _ComboUtils.KEY.TAB:
                this.close(e);
                return;
              case _ComboUtils.KEY.ESC:
                this._cancel(e);
                return;
              }
            }

            if (e.which === _ComboUtils.KEY.TAB || _ComboUtils.KEY.isControl(e) || _ComboUtils.KEY.isFunctionKey(e)
               || e.which === _ComboUtils.KEY.ESC)
            {
              return;
            }
            
            // when user typed in text and hit enter, we don't want to open drop down
            if (e.which === _ComboUtils.KEY.ENTER && this.search.val() && this._elemNm === "ojcombobox")
              return;

            this.open();

            if (e.which === _ComboUtils.KEY.PAGE_UP || e.which === _ComboUtils.KEY.PAGE_DOWN)
            {
              // prevent the page from scrolling
              _ComboUtils.killEvent(e);
            }
            
            if (e.which === _ComboUtils.KEY.ENTER)
            {
              // prevent form from being submitted
              _ComboUtils.killEvent(e);
            }

          }
          ));

        this.search.on("keyup", this._bind(function (e)
          {
            this.keydowns = 0;
          }
          ));

        this.search.on("blur keyup", this._bind(function (e)
          {
            if(e.type === 'keyup' && e.keyCode !== 10 && e.keyCode !== 13) return;
            
            if (this.opts["manageNewEntry"] && this.search.val() && this.results.find(".oj-hover").length <= 0) {
              var data = this.opts["manageNewEntry"](this.search.val());
              this._onSelect(data, null, e);
            }
            this.search.removeClass(this._classNm + "-focused");
            this._selectChoice(null);
            if (!this._opened())
              this._clearSearch();
            e.stopImmediatePropagation();
          }
          ));

        this.container.on("click", selector, this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            if ($(e.target).closest("." + this._classNm + "-selected-choice").length > 0)
            {
              // clicked inside a selected choice, do not open
              return;
            }
            this._selectChoice(null);
            if (this._opened())
            {
              this.close(e);
            } else {
              this.open();
              this._focusSearch();
            }
            e.preventDefault();
          }
          ));

        this.container.on("focus", selector, this._bind(function ()
          {
            if (!this._isInterfaceEnabled())
              return;
          }
          ));

        this._initContainerWidth();
        this.opts.element.hide()
                  .attr("aria-hidden", true);

        // set the placeholder if necessary
        this._clearSearch();
      },

      _enableInterface : function ()
      {
        if (_AbstractMultiChoice.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },

      _initSelection : function ()
      {
        var data;
        if ((this.getVal() === null || this.getVal().length === 0) && (this._classNm === "oj-select" || this.opts.element.text() === ""))
        {
          this._updateSelection([]);
          this.close();
          // set the placeholder if necessary
          this._clearSearch();
        }
        if (this.datalist || (this.getVal() !== null && this.getVal().length))
        {
          var self = this,
          element;
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, function (data)
          {
            if (data !== undefined && data !== null && data.length !== 0)
            {
              self._updateSelection(data);
              self.close();
              // set the placeholder if necessary
              self._clearSearch();
            }
          }
          );
        }
      },

      _clearSearch : function ()
      {
        var placeholder = this._getPlaceholder(),
        maxWidth = this._getMaxSearchWidth();

        if (placeholder !== undefined && (!this.getVal() || this.getVal().length === 0))
        {
          this.search.attr("placeholder", placeholder);
          // stretch the search box to full width of the container so as much of the placeholder is visible as possible
          // we could call this._resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
          this.search.val("").width(maxWidth > 0 ? maxWidth : this.container.css("width"));

          // bug 19715478 when the component is pre-created, the input box would get the default size
          this.searchContainer.width("100%");
        }
        else
        {
          this.search.attr("placeholder", "");
          this.search.val("").width(10);

          // reset the search container, so the input doesn't go to the next line if there is still room
          this.searchContainer.width("auto");
        }
      },

      _opening : function (event)
      {
        //if beforeExpand is not cancelled
        if (this.ojContext._trigger("beforeExpand", event))
        {
          this._resizeSearch();
          _AbstractMultiChoice.superclass._opening.apply(this, arguments);
          this._focusSearch();
          this._updateResults(true);
          this.search.focus();
        }
      },

      close : function (event)
      {
        if (!this._opened())
          return;
        _AbstractMultiChoice.superclass.close.apply(this, arguments);
      },

      _focus : function ()
      {
        this.close();
        this.search.focus();
      },

      _updateSelection : function (data)
      {
        var ids = [],
        filtered = [],
        self = this;

        // filter out duplicates
        $(data).each(function ()
        {
          if (ids.indexOf(self.id(this)) < 0)
          {
            ids.push(self.id(this));
            filtered.push(this);
          }
        }
        );
        data = filtered;
        this.selection.find("." + this._classNm + "-selected-choice").remove();
        $(data).each(function ()
        {
          self._addSelectedChoice(this);
        }
        );
        this.opts.element.val(data.length === 0 ? "" : data.join(this.opts.separator));
        self._postprocessResults();
      },

      _onSelect : function (data, options, event)
      {
        if (!this._triggerSelect(data))
        {
          return;
        }
        //selection will be added when _SetValue is called
        //this._addSelectedChoice(data);
        var id = this.id(data);
        //Clone the value before invoking setVal(), otherwise it will not trigger change event.
        var val = this.getVal() ? this.getVal().slice(0) : [];

        // If the component is invalid, we will not get all the values matching the displayed value
        if (!this.ojContext.isValid())
          val = _ComboUtils.splitVal(this.opts.element.val(), this.opts.separator);

        $(data).each(function() {
            if (val.indexOf(id) < 0) {
                val.push(id);
            }
        });
        this.setVal(val, event);
        if (this.select || !this.opts.closeOnSelect)
          this._postprocessResults(data, false, this.opts.closeOnSelect === true);
        if (this.opts.closeOnSelect)
        {
          this.close(event);
          this.search.width(10);
        }

        if (!options || !options.noFocus)
          this._focusSearch();
      },

      _cancel : function (event)
      {
        this.close(event);
        this._focusSearch();
      },

      _addSelectedChoice : function (data)
      {
        var enableChoice = !data.locked,
        enabledItem = $(
            "<li class='" + this._classNm + "-selected-choice'>" +
            "    <div></div>" +
            "    <a href='#' onclick='return false;' class='" + this._classNm + "-clear-entry " +
            "      oj-component-icon oj-clickable-icon-nocontext " + this._classNm + "-clear-entry-icon' tabindex='-1'>" +
            "    </a>" +
            "</li>"),
        disabledItem = $(
            //"<li class='oj-combobox-selected-choice oj-combobox-locked'>" +
            "<li class='" + this._classNm + "-selected-choice " + this._classNm + "-locked'>" +
            "<div></div>" +
            "</li>");
        var choice = enableChoice ? enabledItem : disabledItem,
        id = this.id(data),
        formatted;

        formatted = this.opts.formatSelection(data);
        if (formatted !== undefined)
        {
          choice.find("div").addClass(this._classNm+"-selected-choice-label").text(formatted);
          choice.attr("valueText", formatted);
        }
        if (enableChoice)
        {
          choice.find("." + this._classNm + "-clear-entry")
          .on("mousedown", _ComboUtils.killEvent)
          .on("click dblclick", this._bind(function (e)
            {
              if (!this._isInterfaceEnabled())
                return;

              $(e.target).closest("." + this._classNm + "-selected-choice").fadeOut('fast', this._bind(function ()
                {
                  this._unselect($(e.target), e);
                  this.selection.find("." + this._classNm + "-selected-choice.oj-focus").removeClass("oj-focus");
                  this.close(e);
                  this._focusSearch();
                }
                )).dequeue();
              _ComboUtils.killEvent(e);
            }
            ));
        }
        choice.data(this._elemNm, data);
        choice.insertBefore(this.searchContainer);

      },

      _unselect : function (selected, event)
      {
        var val = this.getVal() ? this.getVal().slice(0) : [],
        data,
        index;
        selected = selected.closest("." + this._classNm + "-selected-choice");

        if (selected.length === 0)
        {
          //TODO: translation string
          throw "Invalid argument: " + selected + ". Must be ." + this._classNm + "-selected-choice";
        }
        data = selected.data(this._elemNm);
        if (!data)
        {
          // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
          // and invoked on an element already removed
          return;
        }

        // If the component is invalid, we will not get all the values matching the displayed value
        if (!this.ojContext.isValid())
          val = _ComboUtils.splitVal(this.opts.element.val(), this.opts.separator);

        while ((index = val.indexOf(this.id(data))) >= 0)
        {
          val.splice(index, 1);
          this.setVal(val, event);
          if (this.select)
            this._postprocessResults();
        }
        selected.remove();
      },

      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var val = (this.getVal() &&  (this.opts.element.val() || this.ojContext.isValid())) ? this.getVal() : [],
        choices = this.results.find(".oj-listbox-result"),
        compound = this.results.find(".oj-listbox-result-with-children"),
        self = this;

        _ComboUtils.each2(choices, function (i, choice)
        {
          var id = self.id(choice.data(self._elemNm));
          if (val && val.indexOf(id) >= 0)
          {
            choice.addClass("oj-selected");
            // mark all children of the selected parent as selected
            choice.find(".oj-listbox-result-selectable").addClass("oj-selected");
          }
        }
        );
        _ComboUtils.each2(compound, function (i, choice)
        {
          // hide an optgroup if it doesnt have any selectable children
          if (!choice.is(".oj-listbox-result-selectable")
             && choice.find(".oj-listbox-result-selectable:not(.oj-selected)").length === 0)
          {
            choice.addClass("oj-selected");
          }
        }
        );

        if (!choices.filter('.oj-listbox-result:not(.oj-selected)').length > 0)
          this.close();
      },

      _getMaxSearchWidth : function ()
      {
        return this.selection.width() - _ComboUtils.getSideBorderPadding(this.search);
      },

      _textWidth : function (text) {
        var textSpan = document.createElement("span"),
            textNode = document.createTextNode(text);

        textSpan.style.display = "none";
        textSpan.appendChild(textNode); //@HTMLUpdateOK
        $('body').append(textSpan); //@HTMLUpdateOK
        var width = $('body').find('span:last').width();
        $('body').find('span:last').remove();
        return width;
      },

      _resizeSearch : function ()
      {
        var minimumWidth,
        left,
        maxWidth,
        containerLeft,
        searchWidth,
        sideBorderPadding = _ComboUtils.getSideBorderPadding(this.search);

        minimumWidth = this._textWidth(this.search.val()) + 10;
        left = this.search.offset().left;
        maxWidth = this.selection.width();
        containerLeft = this.selection.offset().left;
        searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
        if (searchWidth < minimumWidth)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth < 40)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth <= 0)
        {
          searchWidth = minimumWidth;
        }
        this.search.width(Math.floor(searchWidth));
      },

      setVal : function (val, event)
      {
        var unique;
        unique = [];

        if (typeof val === "string")
          val = _ComboUtils.splitVal(val, this.opts.separator);
        // filter out duplicates
        for(var i =0; i < val.length; i++)
        {
          if (unique.indexOf(val[i]) < 0)
            unique.push(val[i]);
        }

        this.ojContext._SetValue(unique, event, {doValueChangeCheck: false});
        this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));

        this.search.attr("aria-activedescendant", this.opts.element.attr("id"));
      }
    }
    );


/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 *
 * You may obtain a copy of the Apache License and the GPL License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
/**
 * @private
 */
  var _OjMultiCombobox = _ComboUtils.clazz(_AbstractMultiChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-combobox-multi oj-component"
          }
          ).html([
              "<ul class='oj-combobox-choices'>",
              "  <li class='oj-combobox-search-field'>",
              "    <input type='text' role='combobox' aria-expanded='false' aria-autocomplete='list' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='oj-combobox-input'>",
              "  </li>",
              "</ul>",
              "<div class='oj-combobox-description oj-helper-hidden-accessible'/>",
              "<div class='oj-listbox-drop oj-listbox-drop-multi' style='display:none'>",
              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join("")); //@HTMLUpdateOK
        return container;
      }
    }
  );


/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 * 
 * You may obtain a copy of the Apache License and the GPL License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
  /**
 * @private
 */
  var _OjMultiSelect = _ComboUtils.clazz(_AbstractMultiChoice,
    {
      _elemNm : "ojselect",
      _classNm : "oj-select",

      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-select oj-select-multi oj-component"
          }
          ).html([ //@HTMLUpdateOK
              "<ul class='oj-select-choices'>",
              "  <li class='oj-select-search-field'>",
              "    <input type='text' role='combobox' aria-expanded='false' aria-autocomplete='list' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='oj-listbox-input'>",
              "  </li>",
              "</ul>",
              "<div class='oj-select-description oj-helper-hidden-accessible'/>",
              "<div class='oj-listbox-drop oj-listbox-drop-multi' style='display:none'>",
              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      }      
    }
  );
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

  /**
   * @ojcomponent oj.ojCombobox
   * @augments oj.editableValue
   * @since 0.6
   *
   * @classdesc
   * <h3 id="comboboxOverview-section">
   *   JET Combobox Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#comboboxOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Combobox enhances a html input and datalist element into a Combobox that supports
   * single-select, multi-select, free text input, and search filtering.</p>
   *
   * <p>A JET Combobox can be created with the following markup. By default, it creates a single-select
   * Combobox. The 'multiple' option can be specified to change it to a multi-select Combobox.</p>
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;input list="items" data-bind="ojComponent: {component: 'ojCombobox', multiple: true}"/>
   * &lt;datalist id="items">
   *   &lt;option value="option 1">option 1&lt;/option>
   *   &lt;option value="option 2">option 2&lt;/option>
   *   &lt;option value="option 3">option 3&lt;/option>
   *   &lt;option value="option 4">option 4&lt;/option>
   * &lt;/datalist>
   * </code></pre>
   *
   * <p>Please note that datalist is not supported in IE 9. To create a JET Combobox that works across browsers
   * including IE 9, please use the <code class="prettyprint">options</code> array to provide the option items.</p>
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;input data-bind="ojComponent: {component: 'ojCombobox', options: 
   *                                     [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}]}"/>
   * </code></pre>
   *
   * 
   * <h3 id="touch-section">
   *   Touch End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#touch-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"touchDoc"}
   *
   * <h3 id="keyboard-section">
   *   Keyboard End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   * 
   * {@ojinclude "name":"keyboardDoc"}
   *
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Combobox must be <code class="prettyprint">refresh()</code>ed.</p>
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-combobox</code> pseudo-selector can be used in jQuery expressions to select JET Combobox.  For example:</p>
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-combobox" ) // selects all JET Combobox on the page
   * $myEventTarget.closest( ":oj-combobox" ) // selects the closest ancestor that is a JET Combobox
   * </code></pre>
   *
   * <h3 id="a11y-section">
   *   Accessibility
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
   * </h3>
   * <p>
   * It is up to the application developer to associate the label to the input component.
   * For combobox, you should put an <code>id</code> on the input, and then set 
   * the <code>for</code> attribute on the label to be the input's id.
   * </p>
   * <h3 id="label-section">
   *   Label and Combobox
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
   * </h3>
   * <p>
   * For accessibility, you should associate a label element with the input
   * by putting an <code>id</code> on the input, and then setting the 
   * <code>for</code> attribute on the label to be the input's id.
   * </p>
   * <p>
   * The component will decorate its associated label with required and help 
   * information, if the <code>required</code> and <code>help</code> options are set. 
   * </p>
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Combobox".</p>
   *
   * @desc Creates a JET Combobox.
   * @example <caption>Initialize the Combobox with no options specified:</caption>
   * $( ".selector" ).ojCombobox();
   *
   * @example <caption>Initialize the Combobox with some options:</caption>
   * $( ".selector" ).ojCombobox( { "multiple": true, "placeholder": "Select multiple values." } );
   *
   * @example <caption>Initialize the Combobox via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="combobox" data-bind="ojComponent: { component: 'ojCombobox',
   *                                                    multiple: true}">
   */
  oj.__registerWidget("oj.ojCombobox", $['oj']['editableValue'],
  {
    defaultElement : "<input>",
    widgetEventPrefix : "oj",
    options :
    {
      /** 
       * A converter instance that duck types {@link oj.Converter}. Or an object literal containing 
       * the following properties. 
       * <p>
       * When <code class="prettyprint">converter</code> option changes due to programmatic 
       * intervention, the component performs various tasks based on the current state it is in. </br>
       * 
       * <h4>Steps Performed Always</h4>
       * <ul>
       * <li>Any cached converter instance is cleared and new converter created. The converter hint is 
       * pushed to messaging. E.g., notewindow displays the new hint(s).
       * </li>
       * </ul>
       * 
       * <h4>Running Validation</h4>
       * <ul>
       * <li>if component is valid when <code class="prettyprint">converter</code> option changes, the 
       * display value is refreshed.</li>
       * <li>if component is invalid and is showing messages -
       * <code class="prettyprint">messagesShown</code> option is non-empty, when 
       * <code class="prettyprint">converter</code> option changes, then all messages generated by the 
       * component are cleared and full validation run using its current display value. 
       * <ul>
       *   <li>if there are validation errors, then <code class="prettyprint">value</code> 
       *   option is not updated, and the errors pushed to <code class="prettyprint">messagesShown</code>
       *   option. The display value is not refreshed in this case. </li>
       *   <li>if no errors result from the validation, <code class="prettyprint">value</code> 
       *   option is updated; page author can listen to the <code class="prettyprint">optionChange</code> 
       *   event on the <code class="prettyprint">value</code> option to clear custom errors. The 
       *   display value is refreshed with the formatted value provided by converter.</li>
       * </ul>
       * </li>
       * <li>if component is invalid and has deferred messages -  
       * <code class="prettyprint">messagesHidden</code> option is non-empty, when 
       * <code class="prettyprint">converter</code> option changes, then the display value is 
       * refreshed with the formatted value provided by converter.</li>
       * </ul>
       * </p>
       * 
       * <h4>Clearing Messages</h4>
       * <ul>
       * <li>When component messages are cleared in the cases described above, messages created by 
       * the component that are present in both <code class="prettyprint">messagesHidden</code> and 
       * <code class="prettyprint">messagesShown</code> options are cleared.</li>
       * <li><code class="prettyprint">messagesCustom</code> option is not cleared. Page authors can 
       * choose to clear it explicitly when setting the converter option.</li>
       * </ul>
       * </p>
       * 
       * @property {string} type - the conveter type registered with the oj.ConverterFactory. 
       * Supported type is 'number'. See {@link oj.ConverterFactory} for details. <br/>
       * E.g., <code class="prettyprint">{converter: {type: 'number'}</code>
       * @property {Object=} options - optional Object literal of options that the converter expects. 
       * See {@link oj.IntlNumberConverter} for options supported by the number converter. 
       * E.g., <code class="prettyprint">{converter: {type: 'number', options: {style: 'decimal'}}</code>
       * 
       * @expose 
       * @access public
       * @instance
       * @memberof! oj.ojCombobox
       * @type {Object|undefined}
       */    
      converter: undefined,

    
      /**
       * The placeholder text to set on the element. Though it is possible to set placeholder 
       * attribute on the element itself, the component will only read the value when the component
       * is created. Subsequent changes to the element's placeholder attribute will not be picked up 
       * and page authors should update the option directly.
       * 
       *
       * @example <caption>Initialize the combobox with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "placeholder": "Please select ..." } );
       * 
       * @default when the option is not set, the element's placeholder attribute is used if it exists. 
       * 
       * @expose 
       * @access public
       * @instance
       * @memberof! oj.ojCombobox
       * @type {string|null|undefined}
       */    
      placeholder: undefined,
      
      /**
       * The id of the html list for the Combobox.
       *
       * @example <caption>Initialize the combobox with the <code class="prettyprint">list</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "list": "list" } );
       *
       * @example <caption>The <code class="prettyprint">list</code> points to a html <code class="prettyprint">ul</code> element.
       * The value for the list item should be specified with <code class="prettyprint">oj-data-value</code> field. By default, we use the first text node for search filtering. An optional <code class="prettyprint">oj-data-label</code> field can be added to the list item, in which case it will take precedence over the text node.</caption>
       * &lt;ul id="list"&gt;
       * &lt;li oj-data-value="li1"&gt;Item 1&lt;/li&gt;
       * &lt;li oj-data-value="li2"&gt;Item 2&lt;/li&gt;
       * &lt;/ul&gt;
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {string|null|undefined}
       */
      list: undefined,
      
      /**
       * If multi-select is enabled for the combobox.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "multiple": true } );
       */
      multiple : false,
      
      /**
       * The option items for the Combobox. Instead of providing the option items in a datalist, they can be specified as an array of objects containing value and label.
       * The value is used as the value of the option item and label as the label. Both should be of string type. Group data can be provided with label and a children 
       * array containing the option items. Option item can be set as disabled.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">options</code> specified:</caption>
       * $( ".selector" ).ojCombobox( { "options": [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2', disabled: true}, {value: 'option3', label: 'option3'}] } );
       * @example <caption>Initialize the Combobox with group data:</caption>
       * $( ".selector" ).ojCombobox( { "options": [{label : 'group1', children: [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}]}, {label: 'group2', children: [{value: 'option3', label: 'option3'}]} ] } );
       */
      options : null,
      
      /**
       * Specify the key names to use in the options array.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {Object}
       *
       * @example <caption>Initialize the Combobox with <code class="prettyprint">optionsKeys</code> specified. This allows the key names to be redefined in the options array.</caption>
       * $( ".selector" ).ojCombobox( { "optionsKeys": {value : "state_abbr", label : "state_name"} } );
       * @example <caption>Redefine keys for data with subgroups.</caption>
       * $( ".selector" ).ojCombobox( { "optionsKeys": {label : "regions", children : "states", childKeys : {value : "state_abbr", label : "state_name"}} } );
       */
      optionsKeys : null,
      
      /**
       * Triggered immediately before the combobox drop down is expanded. 
       *
       * @expose
       * @event
       * @memberof! oj.ojCombobox
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">beforeExpand</code> callback specified:</caption>
       * $( ".selector" ).ojCombobox({
       *     "beforeExpand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
       */
      beforeExpand : null

      /** 
       * The type of value is an array, and an array will always be returned from the component.
       * For single-select the first element of the array will be used as the value. 
       * As a convenience we allow a string to be passed into the setter, 
       * but note that the value option can only be bound to a knockout observableArray.
       * 
       * @example <caption>Initialize the combobox with the <code class="prettyprint">value</code> option specified:</caption>
       * $(".selector").ojCombobox({'value': "option1,option2"});<br/>
       * 
       * @example <caption>Initialize the combobox with the <code class="prettyprint">value</code> option specified as Array for selecting multiple items:</caption>
       * $(".selector").ojCombobox({'value': ["option1", "option2"]});<br/>
       * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
       * // Getter: returns value
       * $(".selector").ojCombobox("option", "value");
       * // Setter: sets value with array containing "option1"
       * $(".selector").ojCombobox("option", "value", ["option1"]);
       * // Setter: sets value with array containing "option1" and "option2"
       * $(".selector").ojCombobox("option", "value", ["option1", "option2"]);
       * // Setter: sets value with string "option1"
       * $(".selector").ojCombobox("option", "value", "option1"); 
       * 
       * @member 
       * @name  value
       * @access public
       * @instance
       * @default When the option is not set, the element's value property is used as its initial value 
       * if it exists. 
       * @memberof! oj.ojCombobox
       * @type {string|Array}
       */

    },

    /**
     * Returns a jQuery object containing the element visually representing the combobox.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     * @return {jQuery} the combobox
     */
    widget : function ()
    {
      return this.combobox.container;
    },

    /**
     * @override
     * @private
     */
    _ComponentCreate : function ()
    {
      this._super();
      this._setup();
    },

    _InitOptions : function (originalDefaults, constructorOptions)
    {
      var props = [{attribute: "disabled", defaultOptionValue: null, validateOption: true},
                   {attribute: "placeholder", defaultOptionValue: ""},
                   {attribute: "required", defaultOptionValue: false, 
                    coerceDomValue: true, validateOption: true},
                   {attribute: "title", defaultOptionValue: ""}
                   // {attribute: "value", defaultOptionValue: null}
                 ]; 
    
      this._super(originalDefaults, constructorOptions);
      oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);  

      // TODO: PAVI - Let's discuss
      if (this.options['value'] === undefined) {
          this.options['value'] = (this.element.attr('value') !== undefined) ? _ComboUtils.splitVal(this.element.val(), ",") : null;
      } else {
          //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
          //TODO: Need to revisit this once 18724975 is fixed.
          var value = this.options['value'];
          if (Array.isArray(value)) {
            value = value.slice(0);
          } else if(typeof value === "string") {
            if (this.options['multiple'] === true)
              value = _ComboUtils.splitVal(value, ","); 
            else
              value = [value];
          }
          this.options['value'] = value;
      }
    },

    _setup : function ()
    {
      var opts = {},
      multiple = this.options.multiple;
      
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.combobox = multiple ? new _OjMultiCombobox() : new _OjSingleCombobox();

      this.combobox._init(opts);
    },

    /**
     * @override
     * @private
     */
    _destroy : function ()
    {
      this.combobox._destroy();
      this._super();
    },
    
    /**
     * Refreshes the combobox.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojCombobox
     * @instance
     */
    refresh : function ()
    {
      this._super();

      this.combobox._destroy();
      this._setup();
      this._SetRootAttributes();
      // re-apply oj-required on container
      this._Refresh("required", this.options['required']);
    },

    /**
     * Handles options specific to combobox.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _setOption : function (key, value, flags)
    {
      if (key === "value") {
          //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
          //TODO: Need to revisit this once 18724975 is fixed.
          if (Array.isArray(value)) {
              value = value.slice(0);
          } 
          else if(typeof value === "string") {
            if (this.options['multiple'] === true)
              value = _ComboUtils.splitVal(value, ",");
            else
              value = [value];
          }
      }
      this._super(key, value, flags);  
      
      if (key === "options") 
      {
        this.combobox.opts.options = value;
        this.combobox.opts = this.combobox._prepareOpts(this.combobox.opts);
      }
        
      if (key === "disabled")
      {
        if (value)
          this.combobox._disable();
        else
          this.combobox._enable();
      }
    },

    //19670748, dropdown popup should be closed on subtreeDetached notification.  
    _NotifyDetached : function() {
      this.combobox.close();
    },
    
    //19670748, dropdown popup should be closed on subtreeHidden notification.
    _NotifyHidden : function() {
      this.combobox.close(); 
    },

    /**
     * Updates display value of combobox.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _SetDisplayValue: function(displayValue)
    {
      this.combobox._initSelection();
    },
    
    /**
     * Set the placeholder.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _SetPlaceholder : function(value)
    {
      if (this.combobox) 
      {
        this.combobox.opts.placeholder = value;
        // TODO: pavitra - noticed that some combobox tests fail because the _setPlaceholder is 
        // undefined, when this method is called from _AfterCreate().
        if (this.combobox._setPlaceholder) 
        {
          this.combobox._setPlaceholder();
        }
      }
    },
    
    /**
     * Validates the component's value using the converter and all validators registered on 
     * the component. 
     * 
     * @example <caption>Validate component using its current value.</caption>
     * // validate display value. 
     * $(.selector).ojCombobox('validate');
     *
     * @expose 
     * @override
     * @memberof! oj.ojCombobox
     * @instance
     */
    validate : function ()
    {
      var displayValue = this.combobox.search.val();
      var newValue = null;
           
      if (this.options['multiple'] !== true) {
        if (displayValue === undefined || displayValue === null || displayValue === "")
          newValue = [];
        else
          newValue = [displayValue];
      } else {
        var existingValue = this.combobox.getVal();
        if (displayValue === undefined || displayValue === null || displayValue === "")
          newValue = existingValue;
        else
          newValue = existingValue.push(displayValue);
      }
     
      return this._SetValue(newValue, null, this._VALIDATE_METHOD_OPTIONS);
    },
    
    /**
     * Parses the value using the converter set and returns the parsed value. If parsing fails the 
     * error is written into the element 
     * 
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     * @instance
     */
    _parseValue: function(submittedValue) 
    {
      var parsedVal = [];
      
      if (typeof submittedValue === "string") {
        if (this.options['multiple'] === true)
          submittedValue = _ComboUtils.splitVal(submittedValue, ",");
        else
          submittedValue = [submittedValue];
      }
      if (Array.isArray(submittedValue)) {
        for (var i = 0; i<submittedValue.length; i++) {
          var parsed = this._super(submittedValue[i]);
          parsedVal.push(parsed.toString());
        }   
      }   
      return parsedVal;      
    },
    
    /**
     * Returns the messaging launcher element  i.e., where user sets focus that triggers the popup. 
     * Usually this is the element input or select that will receive focus and on which the popup 
     * for messaging is initialized. 
     *
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     * @return {Object} jquery element which represents the messaging launcher component
     */
    _GetMessagingLauncherElement : function ()
    {
      return this.combobox.search;
    }, 
    
    /**
     * Returns the jquery element that represents the content part of the component.
     * This is usually the component that user sets focus on (tabindex is set 0) and 
     * where aria attributes like aria-required, aria-labeledby etc. are set. This is
     * also the element where the new value is updated. Usually this is the same as
     * the _GetMessagingLauncherElement.
     *
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     * @return {Object} jquery element which represents the content.
     */
    _GetContentElement : function ()
    {
      return this.combobox.search;
    },      
    
    /**
     * Returns the default styleclass for the component.
     * 
     * @return {string}
     * @expose
     * @memberof! oj.ojCombobox
     * @override
     * @protected
     */
    _GetDefaultStyleClass : function ()
    {
    return "oj-combobox";
    },
    
    _getDropdown : function ()
    {
      if (this.combobox && this.combobox._opened())
      {
        var dropdown = $(".oj-listbox-drop");
        for (var i=0; i<dropdown.length; i++)
        {
          if ($(dropdown[i]).attr("id") == "oj-listbox-drop" &&
            $(dropdown[i]).attr("data-oj-containerid") == this.combobox.containerId)
          return $(dropdown[i]);
        }
      }
      return null;
    },

    //////////////////     SUB-IDS     //////////////////

    /**
     * <p>Sub-ID for the input field
     * 
     * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
     * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
     * 
     * @ojsubid
     * @member
     * @name oj-combobox-input
     * @memberof oj.ojCombobox
     * @instance
     * 
     * @example <caption>Get the input field element</caption>
     * var node = $( ".selector" ).ojCombobox( "getNodeBySubId", {'subId': 'oj-combobox-input'} );
     */
 
    /**
     * <p>Sub-ID for the drop down arrow of single-select combobox. 
     * 
     * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
     * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
     * 
     * @ojsubid
     * @member
     * @name oj-combobox-arrow
     * @memberof oj.ojCombobox
     * @instance
     * 
     * @example <caption>Get the drop down arrow of the single-select combobox</caption>
     * var node = $( ".selector" ).ojCombobox( "getNodeBySubId", {'subId': 'oj-combobox-arrow'} );
     */

    /**
     * <p>Sub-ID for the dropdown box.
     * 
     * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
     * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
     * 
     * @ojsubid
     * @member
     * @name oj-combobox-drop
     * @memberof oj.ojCombobox
     * @instance
     * 
     * @example <caption>Get the dropdown box</caption>
     * var node = $( ".selector" ).ojCombobox( "getNodeBySubId", {'subId': 'oj-combobox-drop'} );
     */

    /**
     * <p>Sub-ID for the filtered result list.
     *
     * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
     * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
     * 
     * @ojsubid
     * @member
     * @name oj-combobox-results
     * @memberof oj.ojCombobox
     * @instance
     * 
     * @example <caption>Get the filtered result list</caption>
     * var node = $( ".selector" ).ojCombobox( "getNodeBySubId", {'subId': 'oj-combobox-results'} );
     */

    /**
     * <p>Sub-ID for the selected items of multi-select combobox. 
     * <p>This returns a list of the selected items.
     * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
     * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
     * 
     * @ojsubid
     * @member
     * @name oj-combobox-selection
     * @memberof oj.ojCombobox
     * @instance
     * 
     * @example <caption>Get the list of selected items</caption>
     * var node = $( ".selector" ).ojCombobox( "getNodeBySubId", {'subId': 'oj-combobox-selection'} );
     */
    
    getNodeBySubId: function(locator)
    {
      var node = null, subId;
	    if (locator == null)
	    {
        return this.combobox.container ? this.combobox.container[0] : null;
	    }
      else
      {
        node = this._super(locator);
      }
	    
      if (!node)
      {
        subId = locator['subId'];
        if (subId === "oj-combobox-drop")
          subId = "oj-listbox-drop";

        if (subId === "oj-combobox-results")
          subId = "oj-listbox-results";
          
        if (subId === "oj-combobox-selection")
          subId = "oj-combobox-selected-choice";

        var dropdown = this._getDropdown();
        
        switch (subId)
        {
          case "oj-combobox-input":
          case "oj-combobox-arrow":
            node = this.widget().find("." + subId)[0];
            break;
          case "oj-listbox-drop":
            if (dropdown) {
              node = dropdown[0];
            }
            break;
          case "oj-listbox-results":
            if (dropdown) {
              node = dropdown.find("." + subId)[0];
            }
            break;
          case "oj-combobox-selected-choice":
            node = this.widget().find("." + subId).toArray();
            break;
        }    
	    }

	    // Non-null locators have to be handled by the component subclasses
	    return node || null;
    }
    // Fragments:

	/**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
	 *       <th>Target</th>
	 *       <th>Gesture</th>
	 *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
	 *       <td>Input Field</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td> If the drop down is not open, expand the drop down list. Otherwise, close the drop down list.</td>
     *     </tr>
     *     <tr>
	 *       <td>Arrow Button</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td> If the drop down is not open, expand the drop down list. Otherwise, close the drop down list.</td>
     *     </tr>
     *     <tr>
	 *       <td>Option Item</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Tap on a option item in the drop down list to select/add a new item.</td>
     *     </tr>
	 *     <tr>
	 *       <td>Selected Item with Clear Entry Button</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Remove item from the selected items list by taping on the clear button next to the data item.</td>
     *     </tr>
     *
     *   </tbody>
     *  </table>
     *
     * <p>Disabled option items receive no highlight and are not selectable.</p>
	 *
	 *
	 * @ojfragment touchDoc - Used in touch gesture section of classdesc, and standalone gesture doc
	 * @memberof oj.ojCombobox
	 */

	/**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Key</th>
     *       <th>Use</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td><kbd>Enter</kbd></td>
     *       <td> Select the highlighted choice from the drop down. 
     *         If it's a new entry, add to existing selections.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>UpArrow or DownArrow</kbd></td>
     *       <td> Highlight the option item on the drop down list in the direction of the arrow.
     *         If the drop down is not open, expand the drop down list.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>LeftArrow or RightArrow</kbd></td>
     *       <td> Move focus to the previous or next selected item in Multi-select Combobox.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Esc</kbd></td>
     *       <td> Collapse the drop down list. If the drop down is already closed, do nothing.</td>
     *     </tr>
     *
     *   </tbody>
     *  </table>
     *
     * <p>Disabled option items receive no highlight and are not selectable.</p>
	 *
	 * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
	 * @memberof oj.ojCombobox
	 */
  });
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

  /**
   * @ojcomponent oj.ojSelect
   * @augments oj.editableValue
   * @since 0.6
   *
   * @classdesc
   * <h3 id="selectOverview-section">
   *   JET Select Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#selectOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Select enhances a html select and option elements into a Select that supports
   * single-select and search filtering. Note: Muliple selection is not supported in V1.
   *
   * <p>A JET Select can be created with the following markup. By default, it creates a single-select
   * Select. 
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;select data-bind="ojComponent: {component: 'ojSelect'}">
   *     &lt;option value="option 1">option 1&lt;/option>
   *     &lt;option value="option 2">option 2&lt;/option>
   *     &lt;option value="option 3">option 3&lt;/option>
   *     &lt;option value="option 4">option 4&lt;/option>
   * &lt;/select>
   * </code></pre>
   *
   * <h3 id="touch-section">
   *   Touch End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#touch-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"touchDoc"}
   *
   * <h3 id="keyboard-section">
   *   Keyboard End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   * 
   * {@ojinclude "name":"keyboardDoc"}
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Select must be <code class="prettyprint">refresh()</code>ed.
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-select</code> pseudo-selector can be used in jQuery expressions to select JET Select.  For example:
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-select" ) // selects all JET Select on the page
   * $myEventTarget.closest( ":oj-select" ) // selects the closest ancestor that is a JET Select
   * </code></pre>
   *
   * <h3 id="a11y-section">
   *   Accessibility
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
   * </h3>
   * <p>
   * It is up to the application developer to associate the label to the select component.
   * For select, you should put an <code>id</code> on the select, and then set 
   * the <code>for</code> attribute on the label to be the select's id.
   * </p>
   * <h3 id="label-section">
   *   Label and Select
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
   * </h3>
   * <p>
   * For accessibility, you should associate a label element with the select
   * by putting an <code>id</code> on the select, and then setting the 
   * <code>for</code> attribute on the label to be the select's id.
   * </p>
   * <p>
   * The component will decorate its associated label with required and help 
   * information, if the <code>required</code> and <code>help</code> options are set. 
   * </p>
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Select".
   *
   * @desc Creates a JET Select.
   * @example <caption>Initialize the Select with no options specified:</caption>
   * $( ".selector" ).ojSelect();
   *
   * @example <caption>Initialize the Select with some options:</caption>
   * $( ".selector" ).ojSelect( { "placeholder": "Select a value." } );
   *
   * @example <caption>Initialize the Select via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="select" data-bind="ojComponent: { component: 'ojSelect' }">
   */
  oj.__registerWidget("oj.ojSelect", $['oj']['editableValue'],
  {
    defaultElement : "<select>",
    widgetEventPrefix : "oj",
    options :
    {
      /**
       * The threshold for showing the search box in the dropdown when it's expanded.
       * The search box is always displayed when the results size is greater than
       * the threshold, otherwise the search box is initially turned off.
       * However, the search box is displayed as soon as the user starts typing.
       * This property only applies to single-select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {number}
       * @default <code class="prettyprint">10</code>
       */
      minimumResultsForSearch : 10,
      
    
      /**
       * The placeholder text to set on the element.<p>
       * If the <code class="prettyprint">placeholder</code> option is specified to a string, ojselect will adds a placeholder item at the beginning of the dropdown list with
       *<ul>
       *<li>displayValue: placeholder text</li>
       *<li>value: an empty string</li>
       *</ul>
       * The placeholder item in the dropdown is selectable. However, it's not a valid choice, i.e. validation will fail if the select component is a required field.<p>
       * The placeholder item doesn't participate in the filtering, so it will not appear in the result list with a filter specified.<p>
       * Placeholder text can be an empty string, please see the select placeholder cookbook demo.
       * 
       * @example <caption>Initialize the select with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "placeholder": "Please select ..." } );
       * 
       * @default <code class="prettyprint">undefined</code>
       * 
       * @expose 
       * @access public
       * @instance
       * @memberof! oj.ojSelect
       * @type {string|null|undefined}
       */    
      placeholder: undefined,
      
      /**
       * The id of the html list for the select.
       *
       * @example <caption>Initialize the select with the <code class="prettyprint">list</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "list": "list" } );
       *
       * @example <caption>The <code class="prettyprint">list</code> points to a html <code class="prettyprint">ul</code> element.
       * The value for the list item should be specified with <code class="prettyprint">oj-data-value</code> field. By default, we use the first text node for search filtering. An optional <code class="prettyprint">oj-data-label</code> field can be added to the list item, in which case it will take precedence over the text node.</caption></caption>
       * &lt;ul id="list"&gt;
       * &lt;li oj-data-value="li1"&gt;Item 1&lt;/li&gt;
       * &lt;li oj-data-value="li2"&gt;Item 2&lt;/li&gt;
       * &lt;/ul&gt;
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {string|null|undefined}
       */
      list: undefined,
      
      /**
       * If multi-select is enabled for the select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "multiple": true } );
       */
      multiple: false,
       

      /**
       * The option items for the Select. Instead of providing a list of option items, they can be specified as an array of objects containing value and label.
       * The value is used as the value of the option item and label as the label.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">options</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "options": [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}, {value: 'option3', label: 'option3'},] } );
        * @example <caption>Initialize the Select with group data:</caption>
       * $( ".selector" ).ojSelect( { "options": [{label : 'group1', children: [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}]}, {label: 'group2', children: [{value: 'option3', label: 'option3'}]} ] } );
       */
      options : null,
      
      /**
       * Specify the key names to use in the options array.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {Object}
       *
       * @example <caption>Initialize the Select with <code class="prettyprint">optionsKeys</code> specified. This allows the key names to be redefined in the options array.</caption>
       * $( ".selector" ).ojSelect( { "optionsKeys": {value : "state_abbr", label : "state_name"} } );
       * @example <caption>Redefine keys for data with subgroups.</caption>
       * $( ".selector" ).ojSelect( { "optionsKeys": {label : "regions", children : "states", childKeys : {value : "state_abbr", label : "state_name"}} } );
       */
      optionsKeys : null,

      /**
       * Triggered immediately before the Select drop down is expanded. 
       *
       * @expose
       * @event
       * @memberof! oj.ojSelect
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">beforeExpand</code> callback specified:</caption>
       * $( ".selector" ).ojSelect({
       *     "beforeExpand": function( event ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
       */
      beforeExpand : null

      /** 
       * The value of the select component. The data type of value is array. Only the first element of the array is used.
       * 
       * Note:  <code class="prettyprint">value</code> option can only be bind to a knockout observableArray. 
       * 
       * @example <caption>Initialize the select with the <code class="prettyprint">value</code> option specified:</caption>
       * $(".selector").ojSelect({"value": ["option1"]});<br/>
       * 
       * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
       * // Getter: returns value
       * $(".selector").ojSelect("option", "value");
       * // Setter: sets value with array containing "option1"
       * $(".selector").ojSelect("option", "value", ["option1"]);
       * 
       * @member 
       * @name  value
       * @access public
       * @instance
       * @default When the value option is not set, the first option is used as its initial value if it exists. 
       * @memberof! oj.ojSelect
       * @type {Array}
       */
    },

    /**
     * Returns a jQuery object containing the element visually representing the select.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @return {jQuery} the select
     */
    widget : function ()
    {
      return this.select.container;
    },

    /**
     * @override
     * @private
     * @memberof! oj.ojSelect
     */
    _ComponentCreate : function ()
    {
      this._super();
      this._setup();
    },

    //ojselect
    _setup : function ()
    {
      var opts = {},
          multiple = this.options.multiple;
          
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.select = multiple ? new _OjMultiSelect() : new _OjSingleSelect();
      this.select._init(opts);
    },

    /**
     * Refreshes the visual state of the select. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is programmatically changed underneath the component.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojSelect
     * @instance
     */
    refresh : function ()
    {
      this._super();

      this.select._destroy();
      this._setup();
      //TODO: apply value in options for the selected value

      //re apply root attributes settings
      this._SetRootAttributes();

      // re-apply oj-required on container
      this._Refresh("required", this.options['required']);
    },

    /**
     * @override
     * @private
     * @memberof! oj.ojSelect
     */
    _destroy : function ()
    {
      //Bug 20020271 - select destroy issue 
      this.select._destroy();
      this._super();
    },
    
    //19670760, dropdown popup should be closed on subtreeDetached notification.  
    _NotifyDetached : function() {
      this.select.close();
    },

    //19670760, dropdown popup should be closed on subtreeHidden notification.
    _NotifyHidden : function() {
      this.select.close(); 
    },

    /**
     * Set the placeholder.
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _SetPlaceholder : function(value)
    {
      /*
       * Commented out the content to fix the side effect from 
       * the change made in EditableValue._initComponentMessaging (Revision: 9016).
       * EditableValue called SetPlaceholder with an empty string which made
       * every ojselect to have an empty placeholder in the dropdown.
       * Note: don't remove the method because there is more calls from EditableValue
       * to ojselect before this.select is initialized.
       * ex: _GetContentElement

      if (this.select) 
      {
        this.select.opts.placeholder = value;
        this.select._setPlaceholder();
      }
      */
    },

    /**
     * whether the placeholder option is set
     * 
     * @memberof! oj.ojSelect
     * @instance
     * @protected
     */
    _HasPlaceholderSet : function()
    {
      //Bug 18926010 - an empty placeholder shows up if data changed after first binding 
      return typeof this.options['placeholder'] === 'string';
    },

    /**
     * Clear the placeholder option
     * 
     * @memberof! oj.ojSelect
     * @instance
     * @protected
     */
    _ClearPlaceholder : function()
    {
      //Bug 18926010 - an empty placeholder shows up if data changed after first binding 
      this._SetPlaceholderOption(null);
      this._SetPlaceholder(null);
    },

    //ojselect
    _InitOptions : function (originalDefaults, constructorOptions)
    {
      var props = [{attribute: "disabled", defaultOptionValue: null, validateOption: true},
                   {attribute: "placeholder", defaultOptionValue: null},
                   {attribute: "required", defaultOptionValue: false, 
                    coerceDomValue: true, validateOption: true},
                   {attribute: "title", defaultOptionValue: ""}
                   // {attribute: "value", defaultOptionValue: null}
                 ]; 
    
      this._super(originalDefaults, constructorOptions);
      oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);  

      // TODO: PAVI - Let's discuss
      if (this.options['value'] === undefined) {
        this.options['value'] = (this.element.attr('value') !== undefined) ? _ComboUtils.splitVal(this.element.val(), ",") : null;
      }
      else {
        //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
        //TODO: Need to revisit this once 18724975 is fixed.
        var value = this.options['value'];
        if (Array.isArray(value)) {
          value = value.slice(0);
        }
/*
        else if(typeof value ==='string') {
          value = [value];
        }
*/
        this.options['value'] = value;
      }
    },
    
    /**
     * Validates the component's value using the converter and all validators registered on 
     * the component. 
     * 
     * @expose 
     * @override
     * @memberof! oj.ojSelect
     * @instance
     * @returns {boolean} true if component passed validation, false if there were validation errors.
     */
    validate : function ()
    {
      //Bug 19231311 - select needs implementation fixes...
      if (this.select)
        return this._SetValue(this.select.getVal(), null, this._VALIDATE_METHOD_OPTIONS);

      return true;
    },
  
     /**
     * Updates display value.
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _SetDisplayValue: function(displayValue)
    {
      this.select._initSelection();
    },

    /**
     * Handles options specific to select.
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _setOption : function (key, value, flags)
    {
      if (key === "value") {
        //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
        //TODO: Need to revisit this once 18724975 is fixed.

        //placeholder
        if (this._HasPlaceholderSet() && value && value.length == 0) {
          this._super(key, value, flags);
          return;
        }

        var strVal = value;
        if (Array.isArray(value)) {
          value = value.slice(0);

          //Bug 20957774 - ojselect doesn't update when bound value is modified
          if (this.options['multiple'] !== true)
            strVal = value[0];
        }

        //Bug 19074312 - ojselect should ignore the invalid value set programmatically
        var element = this.select.datalist;
        if (! element)
          element = this.select.opts.element;

        //return if validation failed
        if ((this.options['multiple'] !== true && this.select.opts.validate(element, strVal))
            || this.options['multiple'])  
          this._super(key, value, flags);
        
        return;
      }
      else if (key === "placeholder")
      {
        this.select.opts.placeholder = value;
        this.select._setPlaceholder();
      }

      else if (key === "minimumResultsForSearch")
      {
        this.select.opts.minimumResultsForSearch = value;
      }

      this._super(key, value, flags);

      if (key === "disabled")
      {
        if (value)
          this.select._disable();
        else
          this.select._enable();
      }
      else if (key === "options")
      {
        //Bug 18926010 - an empty placeholder shows up if data changed after first binding
        //Bug 19941308 - ojselect - validator error message is not shown
        //Bug 19977578 - ojselect tooltip no longer appears once options and value observables change
        this.select.opts.options = value;
        this.select.opts = this.select._prepareOpts(this.select.opts);

        //make sure the value still valid
        this._super("value", this.select.getVal());
      }

    },

    _getDropdown : function ()
    {
      if (this.select && this.select._opened())
      {
        //Bug 20747359 - certain subids does not work inside a popup or dialog
        var dropdown = this.select.dropdown;
        if (dropdown && 
            dropdown.attr("data-oj-containerid") === this.select.containerId)
          return dropdown;
      }
      return null;
    },


//////////////////     SUB-IDS     //////////////////

/**
 * <p>Sub-ID for the selected text in the select box
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-select-chosen
 * @memberof oj.ojSelect
 * @instance
 * 
 * @example <caption>Get the selected text</caption>
 * var node = $( ".selector" ).ojSelect( "getNodeBySubId", {'subId': 'oj-select-chosen'} );
 */

/**
 * <p>Sub-ID for the dropdown box.
 * <p>See the <a href="#minimumResultsForSearch">minimumResultsForSearch</a> option for details.
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-select-drop
 * @memberof oj.ojSelect
 * @instance
 * 
 * @example <caption>Get the dropdown box</caption>
 * var node = $( ".selector" ).ojSelect( "getNodeBySubId", {'subId': 'oj-select-drop'} );
 */

/**
 * <p>Sub-ID for the search box. Note: the search box is not always visible.
 * <p>See the <a href="#minimumResultsForSearch">minimumResultsForSearch</a> option for details.
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-select-search
 * @memberof oj.ojSelect
 * @instance
 * 
 * @example <caption>Get the search box</caption>
 * var node = $( ".selector" ).ojSelect( "getNodeBySubId", {'subId': 'oj-select-search'} );
 */

/**
 * <p>Sub-ID for the search input element. Note that the search input is not always visible.
 * <p>See the <a href="#minimumResultsForSearch">minimumResultsForSearch</a> option for details.
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-listbox-input
 * @memberof oj.ojSelect
 * @instance
 * 
 * @example <caption>Get the search input element</caption>
 * var node = $( ".selector" ).ojSelect( "getNodeBySubId", {'subId': 'oj-listbox-input'} );
 */

/**
 * <p>Sub-ID for the filtered result list.
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-select-results
 * @memberof oj.ojSelect
 * @instance
 * 
 * @example <caption>Get the filtered result list</caption>
 * var node = $( ".selector" ).ojSelect( "getNodeBySubId", {'subId': 'oj-select-results'} );
 */

/**
 * <p>Sub-ID for the filtered result item. 
 * <p>Note: To lookup a filtered result item, the dropdown must be open and
 *       the locator object should have the following:<p>
 *          subId: 'oj-listbox-result-label' and 
 *          index: number
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-listbox-result-label
 * @memberof oj.ojSelect
 * @instance
 * 
 * @example <caption>Get the filtered result item</caption>
 * var node = $( ".selector" ).ojSelect( "getNodeBySubId", {'subId': 'oj-listbox-result-label'} );
 */
    getNodeBySubId: function(locator)
    {
      var node = null, subId;
      if (locator == null)
      {
        return this.select.container ? this.select.container[0] : null;
      }
      else
      {
        node = this._super(locator);
      }
	    
      if (!node)
      {
        subId = locator['subId'];
        if (subId === "oj-select-drop")
          subId = "oj-listbox-drop";

        if (subId === "oj-select-results")
          subId = "oj-listbox-results";

        if (subId === "oj-select-search")
          subId = "oj-listbox-search";

        switch (subId) {
          case "oj-select-choice":
          case "oj-select-chosen":
            node =  this.widget().find("." + subId)[0];
            break;

          case "oj-listbox-drop":
            var dropdown = this._getDropdown();
            if (dropdown) {
              node = dropdown[0];
            }
            break;

          case "oj-listbox-input":
          case "oj-listbox-search":
          case "oj-listbox-results":
            var dropdown = this._getDropdown();
            if (dropdown) {
              node = dropdown.find("." + subId)[0];
            }
            break;

          //Bug 18872085 - ojselect - not able to attach id for generated jet component
          case "oj-listbox-result-label":
            if (this._getDropdown())
            {
              //list of 'li'
              var ddlist =  $("#" + this.select.results.attr("id")).children();
              var index = locator['index'];

              if (ddlist.length && index < ddlist.length) {
                node = ddlist.eq(index).find("." + subId)[0];
              }
            }
            break;
        }
      }
      // Non-null locators have to be handled by the component subclasses
      return node || null;
    },

    /**
     * Returns the default styleclass for the component. Currently this is 
     * used to pass to the _ojLabel component, which will append -label and 
     * add the style class onto the label. This way we can style the label
     * specific to the input component. For example, for inline labels, the
     * radioset/checkboxset components need to have margin-top:0, whereas all the
     * other inputs need it to be .5em. So we'll have a special margin-top style 
     * for .oj-label-inline.oj-radioset-label
     * All input components must override
     * 
     * @return {string}
     * @expose
     * @memberof! oj.ojSelect
     * @override
     * @protected
     */
    _GetDefaultStyleClass : function ()
    {
      return "oj-select";
    },

    /**
     * Returns the messaging launcher element i.e., where user sets focus that triggers the popup. 
     * Usually this is the element input or select that will receive focus and on which the popup 
     * for messaging is initialized. 
     *
     * @override
     * @protected
     * @memberof! oj.ojSelect
     * @return {Object} jquery element which represents the messaging launcher component
     */
    _GetMessagingLauncherElement : function ()
    {
      return this.select.selection;
    },
    
    /**
     * Returns the jquery element that represents the content part of the component.
     * This is usually the component that user sets focus on (tabindex is set 0) and 
     * where aria attributes like aria-required, aria-labeledby etc. are set. This is
     * also the element where the new value is updated. Usually this is the same as
     * the _GetMessagingLauncherElement.
     *
     * @override
     * @protected
     * @memberof! oj.ojSelect
     * @return {Object} jquery element which represents the content.
     */
    _GetContentElement : function ()
    {
      return this.select.selection;
    }

    // Fragments:

    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Gesture</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td>Select box or Arrow button</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>If the drop down is not open, expand the drop down list. Otherwise, close the drop down list.</td>
     *     </tr>
     *     <tr>
     *       <td>Option item</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Tap on a option item in the drop down list to select.</td>
     *     </tr>
     *     <tr>
     *       <td>Selected Item with Clear Entry Button</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Remove item from the selected items list by taping on the clear button next to the data item.</td>
     *     </tr>
     *     <tr>
     *       <td>Drop down</td>
     *       <td><kbd>swipe up/down</kbd></td>
     *       <td>Scroll the drop down list vertically</td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment touchDoc - Used in touch gesture section of classdesc, and standalone gesture doc
     * @memberof oj.ojSelect
     */
        
    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Key</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td>Option item</td>
     *       <td><kbd>Enter</kbd></td>
     *       <td>Select the highlighted choice from the drop down list.</tr>
     *     </tr>
     *     <tr>
     *       <td>Drop down</td>
     *       <td><kbd>UpArrow or DownArrow</kbd></td>
     *       <td>Highlight the option item in the direction of the arrow. If the drop down is not open, expand the drop down list.</tr>
     *     </tr>
     *     <tr>
     *       <td>Drop down</td>
     *       <td><kbd>Esc</kbd></td>
     *       <td>Collapse the drop down list. If the drop down is already closed, do nothing.</tr>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * <p>Disabled option items receive no highlight and are not selectable.
     *
     * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
     * @memberof oj.ojSelect
     */

  }
  );

oj.Components.setDefaultOptions(
  {
    // converterHint is defaulted to placeholder and notewindow in EditableValue. 
    // For ojselect, we don't want a converterHint. 
    // We used to use oj.Components.createDynamicPropertyGetter, but we don't need the 'context' yet,
    // so we switched it to this simplest code so that overriding displayOptions 
    // for defaultOptions is easier. We only need to define what we want to override, not
    // re-define all the sub-options of displayOptions.
    // See Bug 20441549 - allow multiple setdefaultoptions calls on properties with dynamic getter.
    'ojSelect': // properties for all ojSelect components 
    {
      'displayOptions':
        {
          'converterHint': ['none']
        }
    }
  }
);
});
