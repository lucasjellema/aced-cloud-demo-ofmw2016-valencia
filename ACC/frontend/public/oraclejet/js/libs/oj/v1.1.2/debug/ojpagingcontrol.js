/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'hammerjs', 'ojs/ojdatacollection-common', 'ojs/ojinputtext', 'ojs/ojjquery-hammer'], 
/*
        * @param {Object} oj 
        * @param {jQuery} $
        * @param {Object} compCore
        * @param {Object} Hammer
        */
       function(oj, $, compCore, Hammer)
{

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/**
 * The ojPagingControl component provides paging functionality.
 * 
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * {@ojinclude "name":"keyboardDoc"}
 * 
 * <h3 id="touch-section">
 *   Touch End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#touch-section"></a>
 * </h3>
 *
 * {@ojinclude "name":"touchDoc"}
 *  
 * @example  <caption>Initialize the paging control via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="paging" data-bind="ojComponent: {component: 'ojPagingControl', data: pagingModel, pageSize: 10}"&gt;
 *     
 * 
 * @ojcomponent oj.ojPagingControl
 * @augments oj.baseComponent
 */
(function() {
  oj.__registerWidget("oj.ojPagingControl", $['oj']['baseComponent'],
    {
      version: '1.0.0',
      defaultElement: '<div>',
      widgetEventPrefix: 'oj',
      options:
        {
          /** 
           * The data to bind to the component.
           * <p>
           * Must implement the oj.PagingModel interface {@link oj.PagingModel} 
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {oj.PagingModel}
           * @default <code class="prettyprint">null</code>
           */
          data: null,
          /** 
           * Options for when the component width is too narrow to accommodate the controls in the paging control
           * <p>
           * Valid values are:
           * <ul>
           *   <li>fit: Display as many controls as can fit in the component width</li>
           *   <li>none: Display all controls. Controls which cannot fit will be truncated.</li>
           * </ul>
           * <p>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {string}
           * @default <code class="prettyprint">fit</code>
           */
          overflow: 'fit',
          /** 
           * Page size.
           * <p>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {number}
           * @default <code class="prettyprint">25</code>
           */
          pageSize: 25,
          /** 
           * Options for page mode. 
           * <p>
           * Supported options are:
           * <ul>
           *   <li>layout: Array of paging navigation controls to be displayed (only applicable for numbers type).
           *   <ul>Valid array values are:
           *     <li>auto: Component decides which controls to display</li>
           *     <li>all: Display all controls</li>
           *     <li>input: Display the page input control</li>
           *     <li>rangeText: Display the page range text control</li>
           *     <li>pages: Display the page links</li>
           *     <li>nav: Display the navigation arrows</li>
           *   </ul>
           *   </li>
           *   <li>type: The type of page links. Specifying 'numbers' will render
           *   numeric page links whereas specifying 'dots' will render dots.</li>
           *   <li>orientation: The orientation of the page links. Can be either horizontal
           *   or vertical.</li>
           *   <li>maxPageLinks: The maximum number of page links to display (only applicable for numbers type). 
           *   An ellipsis '...' will be displayed for pages which exceed the maximum.
           *   maxPageLinks must be greater than 4.</li>
           * </ul>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {Object.<string, Array|number>}
           * @property {Array} layout Array of paging navigation controls to be displayed (only applicable for numbers type)
           * @property {string} orientation Horizontal or vertical
           * @property {string} type Numbers or dots
           * @property {number} maxPageLinks The maximum number of page links to display (only applicable for numbers type)
           * @default <code class="prettyprint">{layout: ['auto'], 'type': 'numbers', 'orientation': 'horizontal', maxPageLinks: 6}</code>
           * @example <caption>Initialize the paging control with the <code class="prettyprint">pageOptions</code> option specified:</caption>
           * &lt;div id="paging" data-bind="ojComponent: {component: 'ojPagingControl', data: pagingModel, pageSize: 10, pageOptions: {layout: ['auto', 'input', 'rangeText'], maxPageLinks: 8}}"&gt;
           */
          pageOptions: {'layout': ['auto'], 'type': 'numbers', 'maxPageLinks': 6, 'orientation': 'horizontal'},
          /** 
           * Options for loadMore mode. 
           * <p>
           * Supported options are:
           * <ul>
           *   <li>maxCount: Integer</li>
           * </ul> 
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {Object.<string, number>}
           * @property {number} maxCount The maximum number items to display
           * @default <code class="prettyprint">{maxCount: 500}</code>
           */
          loadMoreOptions: {'maxCount': 500},
          /** 
           * Paging mode. 
           * <p>
           * Valid values are:
           * <ul>
           *   <li>page: Display paging control in pagination mode</li>
           *   <li>loadMore: Display paging control in high watermark mode</li>
           * </ul>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {string}
           * @default <code class="prettyprint">page</code>
           */
          mode: 'page',
          /**
            * Triggered when the paging control has finished rendering
            *
            * @expose 
            * @event 
            * @memberof! oj.ojPagingControl
            * @instance
            * 
            * @example <caption>Initialize the paging control with the <code class="prettyprint">ready</code> callback specified:</caption>
            * $( ".selector" ).ojPagingControl({
            *     "ready": function() {}
            * });
            *
            * @example <caption>Bind an event listener to the <code class="prettyprint">ojready</code> event:</caption>
            * $( ".selector" ).on( "ojready", function() {} );
            */
          ready: null,
          /** 
           * Translations for the component
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {Object.<string, string>}
           * @property {string} labelAccPaging Paging control label for screen readers
           * @property {string} labelAccNavFirstPage First page label for screen readers
           * @property {string} labelAccNavLastPage Last page label for screen readers
           * @property {string} labelAccNavNextPage Next page label for screen readers
           * @property {string} labelAccNavPreviousPage Previous page label for screen readers
           * @property {string} labelAccNavPage Current page label for screen readers
           * @property {string} labelLoadMore Load more link text
           * @property {string} labelNavInputPage Current page label
           * @property {string} labelNavInputPageMax Maximum page label
           * @property {string} labelNavInputPageSummary Page item summary
           * @property {string} msgItemRange Item range text for known row count
           * @property {string} msgItemRangeUnknown Item range text for unknown row count
           * @property {string} tipNavInputPage Current page tip
           * @property {string} tipNavPageLink Current page link tip 
           * @property {string} tipNavNextPage Next page button tip
           * @property {string} tipNavPreviousPage Previous page button tip
           * @property {string} tipNavFirstPage First page button tip
           * @property {string} tipNavLastPage Last page button tip
           */
          translations: {}
        },
      /**
       * @private
       * @const
       */
      _BUNDLE_KEY:
        {
          _LABEL_ACC_PAGING:                              'labelAccPaging',
          _LABEL_ACC_NAV_FIRST_PAGE:                      'labelAccNavFirstPage',
          _LABEL_ACC_NAV_LAST_PAGE:                       'labelAccNavLastPage',
          _LABEL_ACC_NAV_NEXT_PAGE:                       'labelAccNavNextPage',
          _LABEL_ACC_NAV_PREVIOUS_PAGE:                   'labelAccNavPreviousPage',
          _LABEL_ACC_NAV_PAGE:                            'labelAccNavPage',
          _LABEL_LOAD_MORE:                               'labelLoadMore',
          _LABEL_LOAD_MORE_MAX_ROWS:                      'labelLoadMoreMaxRows',
          _LABEL_NAV_INPUT_PAGE:                          'labelNavInputPage',
          _LABEL_NAV_INPUT_PAGE_MAX:                      'labelNavInputPageMax',
          _LABEL_NAV_INPUT_PAGE_SUMMARY:                  'labelNavInputPageSummary',
          _MSG_ITEM_RANGE_CURRENT:                        'msgItemRangeCurrent',
          _MSG_ITEM_RANGE_ITEMS:                          'msgItemRangeItems',
          _MSG_ITEM_RANGE_OF:                             'msgItemRangeOf',
          _TIP_NAV_INPUT_PAGE:                            'tipNavInputPage',
          _TIP_NAV_PAGE_LINK:                             'tipNavPageLink',
          _TIP_NAV_NEXT_PAGE:                             'tipNavNextPage',
          _TIP_NAV_PREVIOUS_PAGE:                         'tipNavPreviousPage',
          _TIP_NAV_FIRST_PAGE:                            'tipNavFirstPage',
          _TIP_NAV_LAST_PAGE:                             'tipNavLastPage',
          _ERR_PAGE_INVALID_SUMMARY:                      'pageInvalid.summary',
          _ERR_PAGE_INVALID_DETAIL:                       'pageInvalid.detail',
          _ERR_DATA_INVALID_TYPE_SUMMARY:                 'dataInvalidType.summary',
          _ERR_DATA_INVALID_TYPE_DETAIL:                  'dataInvalidType.detail',
          _ERR_MAXPAGELINKS_INVALID_SUMMARY:              'maxPageLinksInvalid.summary',
          _ERR_MAXPAGELINKS_INVALID_DETAIL:               'maxPageLinksInvalid.detail'
        },
      /**
       * @private
       * @const
       */
      _MARKER_STYLE_CLASSES:
        {
          _WIDGET:                                        'oj-component',
          _ACTIVE:                                        'oj-active',
          _CLICKABLE_ICON:                                'oj-clickable-icon-nocontext',
          _DISABLED:                                      'oj-disabled',
          _ENABLED:                                       'oj-enabled',
          _FOCUS:                                         'oj-focus',
          _HOVER:                                         'oj-hover',
          _SELECTED:                                      'oj-selected'
        },
      /**
       * @private
       * @const
       */
      _CSS_CLASSES:
        {
          _PAGING_CONTROL_CLASS:                          'oj-pagingcontrol',
          _PAGING_CONTROL_ACC_LABEL_CLASS:                'oj-pagingcontrol-acc-label',
          _PAGING_CONTROL_CONTENT_CLASS:                  'oj-pagingcontrol-content',
          _PAGING_CONTROL_LOAD_MORE_CLASS:                'oj-pagingcontrol-loadmore',
          _PAGING_CONTROL_LOAD_MORE_LINK_CLASS:           'oj-pagingcontrol-loadmore-link',
          _PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS:       'oj-pagingcontrol-loadmore-max-rows',
          _PAGING_CONTROL_LOAD_MORE_RANGE_CLASS:          'oj-pagingcontrol-loadmore-range',
          _PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS:  'oj-pagingcontrol-loadmore-range-current',
          _PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS:      'oj-pagingcontrol-loadmore-range-max',
          _PAGING_CONTROL_NAV_CLASS:                      'oj-pagingcontrol-nav',
          _PAGING_CONTROL_NAV_ARROW_CLASS:                'oj-pagingcontrol-nav-arrow',
          _PAGING_CONTROL_NAV_ARROW_SECTION_CLASS:        'oj-pagingcontrol-nav-arrow-section',
          _PAGING_CONTROL_NAV_PAGE_CLASS:                 'oj-pagingcontrol-nav-page',
          _PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS:        'oj-pagingcontrol-nav-page-ellipsis',
          _PAGING_CONTROL_NAV_DOT_CLASS:                  'oj-pagingcontrol-nav-dot',
          _PAGING_CONTROL_NAV_DOT_BULLET_CLASS:           'oj-pagingcontrol-nav-dot-bullet',
          _PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS:       'oj-pagingcontrol-nav-page-acc-label',
          _PAGING_CONTROL_NAV_LABEL_CLASS:                'oj-pagingcontrol-nav-label',
          _PAGING_CONTROL_NAV_INPUT_SECTION_CLASS:        'oj-pagingcontrol-nav-input-section',
          _PAGING_CONTROL_NAV_INPUT_CLASS:                'oj-pagingcontrol-nav-input',
          _PAGING_CONTROL_NAV_INPUT_MAX_CLASS:            'oj-pagingcontrol-nav-input-max',
          _PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS:        'oj-pagingcontrol-nav-input-summary',
          _PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS:'oj-pagingcontrol-nav-input-summary-current',
          _PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS:    'oj-pagingcontrol-nav-input-summary-max',
          _PAGING_CONTROL_NAV_PAGES_SECTION_CLASS:        'oj-pagingcontrol-nav-pages-section',
          _PAGING_CONTROL_NAV_PAGES_LINKS_CLASS:          'oj-pagingcontrol-nav-pages-links',
          _PAGING_CONTROL_NAV_FIRST_CLASS:                'oj-pagingcontrol-nav-first',
          _PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS:      'oj-pagingcontrol-nav-first-acc-label',
          _PAGING_CONTROL_NAV_PREVIOUS_CLASS:             'oj-pagingcontrol-nav-previous',
          _PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS:   'oj-pagingcontrol-nav-previous-acc-label',
          _PAGING_CONTROL_NAV_NEXT_CLASS:                 'oj-pagingcontrol-nav-next',
          _PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS:       'oj-pagingcontrol-nav-next-acc-label',
          _PAGING_CONTROL_NAV_LAST_CLASS:                 'oj-pagingcontrol-nav-last',
          _PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS:       'oj-pagingcontrol-nav-last-acc-label',
          _PAGING_CONTROL_NAV_FIRST_ICON_CLASS:           'oj-pagingcontrol-nav-first-icon',
          _PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS:        'oj-pagingcontrol-nav-previous-icon',
          _PAGING_CONTROL_NAV_NEXT_ICON_CLASS:            'oj-pagingcontrol-nav-next-icon',
          _PAGING_CONTROL_NAV_LAST_ICON_CLASS:            'oj-pagingcontrol-nav-last-icon',
          _PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS:  'oj-pagingcontrol-nav-first-vertical-icon',
          _PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS:'oj-pagingcontrol-nav-previous-vertical-icon',
          _PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS:   'oj-pagingcontrol-nav-next-vertical-icon',
          _PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS:   'oj-pagingcontrol-nav-last-vertical-icon',
          _WIDGET_ICON_CLASS:                             'oj-component-icon',
          _HIDDEN_CONTENT_ACC_CLASS:                      'oj-helper-hidden-accessible'
        },
      /**
       * @private
       * @const
       * @type {string}
       */
      _DATA_ATTR_PAGE_NUM: 'data-oj-pagenum',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_ENABLED: 'enabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_DISABLED: 'disabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _TAB_INDEX: 'tabindex',
      /**
       * @private
       * @const
       */
      _MODE:
        {
          _LOAD_MORE:   'loadMore',
          _PAGE:        'page'
        },
      /**
       * @private
       * @const
       */
      _PAGE_OPTION_LAYOUT:
        {
          _AUTO:  'auto',
          _ALL: 'all',
          _INPUT: 'input',
          _RANGE_TEXT: 'rangeText',
          _PAGES: 'pages',
          _NAV:   'nav'
        },
      /**
       * @private
       * @const
       */
      _PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS: 6,
      /**
       * @private
       * @const
       */
      _TYPE:
        {
          _NUMBERS:   'numbers',
          _DOTS:      'dots'
        },
      /**** start Public APIs ****/

      /**
       * Load the first page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">firstPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "firstPage" );
       */
      'firstPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          return this._invokeDataPage(0, false);
        }
        return this._getRejectPromise();
      },
      /**
       * Load the previous page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">previousPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "previousPage" );
       */
      'previousPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          var page = this._getCurrentPage();
          // can only go to previous page if on 2nd page or greater
          if (page > 0)
          {
            return this._invokeDataPage(page - 1, false);
          }
        }
        return this._getRejectPromise();
      },
      /**
       * Load the next page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">nextPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "nextPage" );
       */
      'nextPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          var page = this._getCurrentPage();
          if (page + 1 <= this._getTotalPages() - 1|| this._getTotalPages() < 0) 
          {
            return this._invokeDataPage(page + 1, false);
          }
        }
        return this._getRejectPromise();
      },
      /**
       * Load the last page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">lastPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "lastPage" );
       */
      'lastPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          if (this._getTotalPages() > 0)
          {
            return this._invokeDataPage(this._getTotalPages() - 1, false);
          }
        }
        return this._getRejectPromise();
      },
      /**
       * Load the specified page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @param {number} page  Page number. 
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">page</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "page", 5 );
       */
      'page': function(page)
      {
        var data = this._getData();
        if (data != null)
        {
          if (page <= this._getTotalPages() || this._getTotalPages() < 0) 
          {
            return this._invokeDataPage(page, false);
          }
        }
        return this._getRejectPromise();
      },
      /**
       * Load the next set of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">loadNext</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "loadNext" );
       */
      'loadNext': function()
      {
        var data = this._getData();
        if (data != null)
        {
          return this._invokeDataFetchNext();
        }
        return this._getRejectPromise();
      },
      /**
       * Refresh the paging control.
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @export
       * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "refresh" );
       */
      'refresh': function()
      {
        this._super();
        this._refresh();
      },
      /**
       * Return the subcomponent node represented by the documented locator attribute values.
       * Test authors should target sub elements using the following <b>subIds</b>:
       * <ul>
       * <li><b>oj-pagingcontrol-nav-input</b>: page number navigation input text </li>
       * <li><b>oj-pagingcontrol-nav-input-max</b>: current maximum page text </li>
       * <li><b>oj-pagingcontrol-nav-input-summary</b>: summary items text </li>
       * <li><b>oj-pagingcontrol-nav-input-summary-current</b>: summary current items text </li>
       * <li><b>oj-pagingcontrol-nav-input-summary-max</b>: summary max items text </li>
       * <li><b>oj-pagingcontrol-nav-first</b>: first button </li>
       * <li><b>oj-pagingcontrol-nav-next</b>: next button </li>
       * <li><b>oj-pagingcontrol-nav-previous</b>: previous button </li>
       * <li><b>oj-pagingcontrol-nav-last</b>: last button </li>
       * <li><b>oj-pagingcontrol-nav-page</b>: page buttons
       * <ul><li> <b>index</b>: zero-based index of page number node</li></ul></li>
       * <li><b>oj-pagingcontrol-load-more-link</b>: load more link </li>
       * <li><b>oj-pagingcontrol-load-more-range</b>: load more range </li>
       * <li><b>oj-pagingcontrol-load-more-range-current</b>: load more range current items text </li>
       * <li><b>oj-pagingcontrol-load-more-range-max</b>: load more range max items text </li>
       * <li><b>oj-pagingcontrol-load-more-max-rows</b>: load more max message </li>
       * </ul>
       *          
       * @override
       * @param {Object} locator An Object containing at minimum a subId property whose value is a string 
       * @param {string=} locator.subId - One of the subIds list above.
       * @param {number=} locator.index - A zero-based index as documented above.
       * @return {Element|null} the subcomponent located by the subId string passed in locator, if found.
       * @export
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * 
       */
      'getNodeBySubId': function(locator)
      {
        if (locator == null)
        {
          return this.element ? this.element[0] : null;
        }

        var subId = locator['subId'];
        var retval = null;

        if (subId === 'oj-pagingcontrol-nav-input')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-input-max')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-input-summary')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-input-summary-current')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-input-summary-max')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-first')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-next')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-previous')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-last')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-nav-page')
        {
          var index = locator['index'];
          retval = this._getPagingControlContainer().find("[" + this._DATA_ATTR_PAGE_NUM + "=" + index +"]")[0];
        }
        else if (subId === 'oj-pagingcontrol-load-more-link')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-load-more-range')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-load-more-range-current')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-load-more-range-max')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS)[0];
        }
        else if (subId === 'oj-pagingcontrol-load-more-max-rows')
        {
          retval = this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS)[0];
        }

        // Non-null locators have to be handled by the component subclasses
        if (retval === undefined)
          retval = null;

        return retval;
      },              
      
      /**** end Public APIs ****/

      /**** start internal widget functions ****/
      
      /**
       * @override
       * @protected
       * @instance
       * @memberof! oj.ojPagingControl
       */
      _ComponentCreate : function ()
      {
        this._super();
        this._registerDataSourceEventListeners();
        this._draw();
        this._registerResizeListener(this._getPagingControlContainer());
        this._on(this._events);
      },
      /**
       * Initialize the paging control after creation
       * @protected
       * @override
       * @memberof! oj.ojPagingControl
       */        
      _AfterCreate: function () 
      {  
        this._super();
        this._registerSwipeHandler();
        this._invokeDataPage(0, true);
      },
      /**
       * @override
       * @private
       */
      _destroy: function()
      {
        this._unregisterDataSourceEventListeners();
        this._unregisterSwipeHandler();
      },
      /**
       * @override
       * @private
       */
      _draw: function()
      {
        var options = this.options;
        // add main css class to element
        this.element.addClass(this._CSS_CLASSES._PAGING_CONTROL_CLASS);
        this.element.addClass(this._MARKER_STYLE_CLASSES._WIDGET);

        this._createPagingControlAccLabel();
        this._createPagingControlContent();
        this._mode = options['mode'];
        
        if (options['mode'] == this._MODE._LOAD_MORE)
        {
          this._createPagingControlLoadMore();
          this._createPagingControlLoadMoreLink();
          this._createPagingControlLoadMoreRange();
        }
        else
        {
          this._createPagingControlNav();
        }
      },
      /**
       * @override
       * @private
       */
      _events:
        {
          /**
           * invoke loading next page of data
           */
          'click .oj-pagingcontrol-loadmore-link': function(event)
          {
            this['loadNext']();
            event.preventDefault();
          },
          /**
           * invoke loading page of data
           */
          'click .oj-pagingcontrol-nav-dot': function(event)
          {
            var pageNum = $(event.currentTarget).attr('data-oj-pagenum');
            this['page'](pageNum);  
            event.preventDefault();
          },
          /**
           * invoke loading page of data
           */
          'click .oj-pagingcontrol-nav-page': function(event)
          {
            var pageNum = $(event.currentTarget).attr('data-oj-pagenum');
            this['page'](pageNum);  
            event.preventDefault();
          },
          /**
           * invoke loading first page of data
           */
          'click .oj-pagingcontrol-nav-first': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              this['firstPage']();
            }
            event.preventDefault();
          },
          /**
           * invoke loading previous page of data
           */
          'click .oj-pagingcontrol-nav-previous': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              this['previousPage']();
            }
            event.preventDefault();
          },
          /**
           * invoke loading next page of data
           */
          'click .oj-pagingcontrol-nav-next': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              this['nextPage']();
            }
            event.preventDefault();
          },
          /**
           * invoke loading last page of data
           */
          'click .oj-pagingcontrol-nav-last': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              this['lastPage']();
            }
            event.preventDefault();
          },
          /**
           * prevent submission of form on enter
           */
          'keypress .oj-pagingcontrol-nav-input': function(event)
          {
            var keyCode = event.which;
            
            if (keyCode == 13)
            {
              event.preventDefault();
            }
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-first': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            }
            event.preventDefault();
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-previous': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            }
            event.preventDefault();
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-next': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            }
            event.preventDefault();
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-last': function(event)
          {
            if (!$(event.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED))
            {
              $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            }
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-first': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-previous': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-next': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-last': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-first': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-previous': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-next': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-last': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          }
        },
      /**
       * @private
       */
      _refresh: function()
      {
        if (this._data != this.options['data'])
        {
          this._clearCachedDataMetadata();
          this._invokeDataPage(0, true);
        }
        
        var size = 0;
        var startIndex = 0;
        
        if (this._data != null)
        {
          startIndex = this._data.getStartItemIndex();
        }

        // if totalSize == 0 then size is just 0. If totalSize < 0 then
        // we have unknown row count, if totalSize > 0 then we have a known row count.
        // For non-zero unknown row count and non-zero known row count
        // we need to calculate the rows on the page.
        if (this._data != null && this._data.totalSize() != 0)
        {
          // startIndex = 0 for loadMore mode
          size = this._data.getEndItemIndex() - startIndex + 1;
        }

        if (this._mode != this.options['mode'])
        {
          this._mode = this.options['mode'];
          
          if (this.options['mode'] == this._MODE._LOAD_MORE)
          {
            this._refreshPagingControlLoadMore(size, startIndex);
          }
          else
          {
            this._refreshPagingControlNav(size, startIndex);
          }
        }
        else if (this.options['mode'] == this._MODE._LOAD_MORE)
        {
          // hide loadMore if there are no more rows to fetch
          var data = this._getData();
          var pagingControlLoadMore = this._getPagingControlLoadMore();
          var rowCount = startIndex + size;
          if (data != null && rowCount == data.totalSize())
          {
            pagingControlLoadMore.css('display', 'none');
          }
          else
          {
            this._refreshPagingControlLoadMore(size, startIndex);
          }
        }
        else
        {
          this._refreshPagingControlNav(size, startIndex);
        }
      },
      /**
       * @override
       * @private
       */
      _setOption: function(key, value)
      {
        this._superApply(arguments);
        this._invokeDataPage(0, true);
        this._refresh();
      },
      /**** end internal widget functions ****/

      /**** start internal functions ****/
      /**
       * Clear any cached data metadata
       * @private
       */
      _clearCachedDataMetadata: function()
      {
        if (this._data != null)
        {
          this._unregisterDataSourceEventListeners();
        }
        this._data = null;
      },
      /**
       * Clear cached range text DOM
       * @private
       */
      _clearCachedDomLoadMore: function()
      {
        this._cachedDomPagingControlLoadMore = null;
        this._cachedDomPagingControlLoadMoreLink = null;
        this._cachedDomPagingControlLoadMoreRange = null;
      },
      /**
       * Clear any cached DOM nav elements
       * @private
       */
      _clearCachedDomPagingControlNav: function()
      {
        this._cachedDomPagingControlNav = null;
        this._cachedDomPagingControlNavInput = null;
        this._cachedDomPagingControlNavInputSummary = null;
      },
      /**
       * Return the current page
       * @return {number} Current page.
       * @throws {Error}
       * @private
       */
      _getCurrentPage: function()
      {
        var data = this._getData();
        var page = 0;
        if (data != null)
        {
          page = data.getPage();
        }
        return page;
      },
      /**
       * Return the datasource object defined for this paging control
       * @return {Object} Datasource object.
       * @throws {Error}
       * @private
       */
      _getData: function()
      {
        if (!this._data && this.options['data'] != null)
        {
          this._data = this.options['data'];
          this._dataMetadata = this.options['data'];
          // In case we get a delayed setting of the data property--check to rebind the listeners
          this._registerDataSourceEventListeners();
        }
        return this._data;
      },
      /**
       * Return the item range text span
       * @param {number} size Number of rows
       * @param {number} startIndex Start index
       * @return {Object} Item range text span element.
       * @throws {Error}
       * @private
       */
      _getItemRange: function(size, startIndex)
      {
        var pageFrom = startIndex;
        var itemRangeSpan = $(document.createElement('span'));
        var itemRangeCurrentSpan = $(document.createElement('span'));
        if (this.options['mode'] == this._MODE._LOAD_MORE)
        {
          itemRangeCurrentSpan.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS); 
        }
        else
        {
          itemRangeCurrentSpan.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS); 
        }
        var itemRangeCurrentText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_CURRENT, {'pageFrom': pageFrom, 'pageTo': 0});
        itemRangeSpan.append(itemRangeCurrentSpan); //@HTMLUpdateOK
        
        if (size != null)
        {
          var pageTo = parseInt(startIndex, 10) + parseInt(size, 10);
          pageFrom = pageTo > 0 ? pageFrom + 1 : 0;
          var data = this._getData();
          if (data != null && data.totalSize() != -1)
          {
            pageTo = pageTo > data.totalSize() ? data.totalSize() : pageTo;
            itemRangeCurrentText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_CURRENT, {'pageFrom': pageFrom, 'pageTo': pageTo});
            var itemRangeOfText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_OF);
            var itemRangeOfSpan = $(document.createElement('span'));
            itemRangeOfSpan.text(" " + itemRangeOfText + " ");
            itemRangeSpan.append(itemRangeOfSpan); //@HTMLUpdateOK
            var itemRangeMaxSpan = $(document.createElement('span'));
            if (this.options['mode'] == this._MODE._LOAD_MORE)
            {
              itemRangeMaxSpan.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS); 
            }
            else
            {
              itemRangeMaxSpan.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS); 
            }
            itemRangeMaxSpan.text(data.totalSize());
            itemRangeSpan.append(itemRangeMaxSpan); //@HTMLUpdateOK
            var itemRangeItemsText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_ITEMS);
            var itemRangeItemsSpan = $(document.createElement('span'));
            itemRangeItemsSpan.text(" " + itemRangeItemsText);
            itemRangeSpan.append(itemRangeItemsSpan); //@HTMLUpdateOK
          }
          else
          {
            itemRangeCurrentText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_CURRENT, {'pageFrom': pageFrom, 'pageTo': pageTo});
            var itemRangeItemsText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_ITEMS);
            var itemRangeItemsSpan = $(document.createElement('span'));
            itemRangeItemsSpan.text(" " + itemRangeItemsText);
            itemRangeSpan.append(itemRangeItemsSpan); //@HTMLUpdateOK
          }
        }
        itemRangeCurrentSpan.text(itemRangeCurrentText);
        return itemRangeSpan;
      },
      /**
       * Return maximum number of page links
       * @return {number} Max page links.
       * @private
       */
      _getMaxPageLinks: function()
      {
        var maxPageLinks = this.options['pageOptions']['maxPageLinks'];
        
        if (this.options['pageOptions']['type'] == this._TYPE._DOTS)
        {
          maxPageLinks = Number.MAX_VALUE;
        }
        else if (!maxPageLinks)
        {
          maxPageLinks = this._PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS;
        }
        
        return maxPageLinks;
      },
      /**
       * Return reject Promise
       * @return {Promise} promise object reject.
       * @private
       */
      _getRejectPromise: function()
      {
        return Promise.reject();
      },
      /**
       * Return the total number of pages
       * @return {number} Total pages.
       * @throws {Error}
       * @private
       */
      _getTotalPages: function()
      {
        var data = this._getData();
        var pageCount = 0;
        if (data != null)
        {
          pageCount = data.getPageCount();
        }
        return pageCount;
      },
      /**
       * Callback handler for fetch completed in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataFetchEnd: function(event)
      {
        // restore focus
        var activeElement = $(document.activeElement);

        if (activeElement.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_CLASS))
        {
          var pageNum = activeElement.attr('data-oj-pagenum');
          var self = this;
          setTimeout(function() 
          {
            if (pageNum >= 0)
            {
              var navPage = self._getPagingControlContent().find('div[data-oj-pagenum=' + pageNum + ']');
              navPage.focus();
            }
          }, 100);
        }
        else if (activeElement.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS))
        {
          var self = this;
          setTimeout(function() 
          {
            var firstArrow = self._getPagingControlContent().find('.' + self._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS);
            firstArrow.focus();
          }, 100);
        }
        else if (activeElement.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS))
        {
          var self = this;
          setTimeout(function() 
          {
            var previousArrow = self._getPagingControlContent().find('.' + self._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
            previousArrow.focus();
          }, 100);
        }
        else if (activeElement.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS))
        {
          var self = this;
          setTimeout(function() 
          {
            var nextArrow = self._getPagingControlContent().find('.' + self._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
            nextArrow.focus();
          }, 100);
        }
        else if (activeElement.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS))
        {
          var self = this;
          setTimeout(function() 
          {
            var lastArrow = self._getPagingControlContent().find('.' + self._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS);
            lastArrow.focus();
          }, 100);
        }
        else if (activeElement.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS))
        {
          var self = this;
          setTimeout(function() 
          {
            var navInput = self._getPagingControlContent().find('.' + self._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS);
            navInput.focus();
          }, 100);
        }
        this._queueRefresh();
      },
      /**
       * Callback handler for page event in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataPage: function(event)
      {
        var page = event['page'];
        var previousPage = event['previousPage'];
        
        if (page != previousPage)
        {
          // only refresh if page has changed
          this._queueRefresh();
        }
      },
      /**
       * Callback handler for reset in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataReset: function(event)
      {
        this._invokeDataPage(0, false);    
      },
      /**
       * Callback handler for refresh in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataRefresh: function(event)
      {
        this._queueRefresh();       
      },
      /**
       * Callback handler for sort in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataSort: function(event)
      {
        // Do a reset if the paging mode is loadmore, otherwise just refresh
        if (this.options['mode'] == this._MODE._LOAD_MORE) {
            this._handleDataReset(event);
        }
      },
      /**
       * Callback handler for row added into the datasource.
       * status message.
       * @param {Object} event
       * @private
       */
      _handleDataRowAdd: function(event)
      {
        if (this.options['mode'] == this._MODE._PAGE)
        {
          if (this._isOperationOnCurrentPage(event))
          {
            // this means that the add caused the pages to shift or
            // the row was added to the current page and the first page is full already
            // so we need to re-fetch the current page
            this._invokeDataPage(this._getCurrentPage(), true);
            return;
          }
        }
        this._queueRefresh();
      },
      /**
       * Callback handler for row removed in the datasource.
       * status message.
       * @param {Object} event
       * @private
       */
      _handleDataRowRemove: function(event)
      {
        if (this._getTotalPages() > 0 && this._getCurrentPage() > this._getTotalPages() - 1)
        {
          // if the number of pages decreased due to the removal, then
          // reset the page
          this._invokeDataPage(this._getTotalPages() - 1, true);
        }
        else if (this._isOperationOnCurrentPage(event))
        {
          // this means that the remove caused the pages to shift or
          // the row was deleted from the current page
          // so we need to re-fetch the current page
          this._invokeDataPage(this._getCurrentPage(), true);
          return;
        }
        else
        {
          this._queueRefresh();
        }
      },
      /**
       * Callback handler for page change.
       * @param {Object} event
       * @private
       */
      _handlePageChange: function(event, data)
      {
        try
        {
          var page = data.value;
          if (page != this._getCurrentPage() + 1 && !isNaN(page) && page > 0)
          {
            page = Math.round(page);
            this['page'](page - 1);
          }
        }
        catch (err)
        {
          var errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_PAGE_INVALID_SUMMARY);
          var errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_PAGE_INVALID_DETAIL);
          oj.Logger.error(errSummary + '\n' + errDetail);
        }
      },
      /**
       * Set page
       * @param {number} page Page
       * @param {boolean} async Asynchronous
       * @return (Promise} Page Promise 
       * @private
       */
      _invokeDataPage: function(page, async)
      {
        try
        {
          page = parseInt(page, 10);
        }
        catch (e)
        {
          return Promise.reject(e);
        }
        
        this._currentStartIndex = 0;
        
        if (async)
        {
          this._queuePageFetch(page);
          return Promise.resolve();
        }
        else
        {
          var data = this._getData();
          var self = this;
          return new Promise(function(resolve, reject)
          {
            if (data != null)
            {
              data.setPage(page, {'pageSize' : self.options['pageSize']}).then(function(result)
              {
                resolve(null);
              }, function(error)
              {
                reject(error);
              });
            }
            else
            {
              resolve(null);
            }
          });
        }
      },
      /**
       * Fetch the next set of rows
       * @return (Promise} Promise 
       * @private
       */
      _invokeDataFetchNext: function()
      {
        var data = this._getData();
        var pageSize = this.options['pageSize'];
        
        if (!this._currentStartIndex)
        {
          this._currentStartIndex = pageSize;
        }
        else
        {
          this._currentStartIndex = this._currentStartIndex + pageSize;
        }

        if (data.totalSize() == -1 || data.totalSize() > this._currentStartIndex)
        {
          var self = this;
          return new Promise(function(resolve, reject)
          {
            data.fetch({'startIndex': self._currentStartIndex, 'pageSize': pageSize}).then(function(result)
            {
              resolve(result);
            }, function (error)
            {
              reject(null);  
            });
          });
        }
        return Promise.resolve();
      },
      /**
       * Check if the rowIdx is for the current page
       * @return {boolean} true or false
       * @private
       */
      _isOperationOnCurrentPage: function(event)
      {
        var data = this._getData();
        var pageSize = this.options['pageSize'];
        var i;
        for (i = 0; i < event['indexes'].length; i++)
        {
          var rowIdx = event['indexes'][i];
          var startIndex = data.getStartItemIndex();

          if (rowIdx >= startIndex && rowIdx < startIndex + pageSize)
          {
            return true;
          }
        }
        return false;
      },
      _queuePageFetch: function(page)
      {
        var self = this;
        if (!this._pendingPageFetch)
        {
          this._pageFetchCount = 0;
          this._pendingPageFetch = Promise.resolve();
        }
        this._pageFetchCount++;
        // keep track of the latest page. We only do a fetch on the latest page.
        this._pageFetchLatestPage = page;
        this._pendingPageFetch = this._pendingPageFetch
        .then(function()
        {
          self._pageFetchCount--;
          if (self._pageFetchCount == 0)
          {
            self._pendingPageFetch = undefined;
            var data = self._getData();
            if (data != null)
            {
              data.setPage(self._pageFetchLatestPage, {'pageSize' : self.options['pageSize']});
            }
          }
        },
        function(error)
        {
          self._pageFetchCount--;
          if (self._pageFetchCount == 0)
          {
            self._pendingPageFetch = undefined;
            oj.Logger.error(error);
          }
        });
      },
      _queueRefresh: function()
      {
        var self = this;
        if (!this._pendingRefreshes)
        {
          this._refreshCount = 0;
          this._pendingRefreshes = Promise.resolve();
        }
        this._refreshCount++;
        this._pendingRefreshes = this._pendingRefreshes
        .then(function()
        {
          self._refreshCount--;
          if (self._refreshCount == 0)
          {
            self._pendingRefreshes = undefined;
            self._refresh();
            self._trigger('ready');
          }
        },
        function(error)
        {
          self._refreshCount--;
          if (self._refreshCount == 0)
          {
            self._pendingRefreshes = undefined;
            oj.Logger.error(error);
          }
        });
      },
      /**
       * @param {number} size Number of rows
       * @param {number} startIndex Start index
       * @private
       */
      _refreshPagingControlLoadMore: function(size, startIndex)
      {
        var pagingControlContent = this._getPagingControlContent();
        if (pagingControlContent != null)
        {
          pagingControlContent.empty();
        }
        this._clearCachedDomLoadMore();
        this._createPagingControlLoadMore();
        var rowCount = -1;
        
        if (size != null)
        {
          rowCount = startIndex + size;
        }
        
        if (rowCount < 0 || rowCount < this.options['loadMoreOptions']['maxCount'])
        {
          this._createPagingControlLoadMoreLink();
          this._createPagingControlLoadMoreRange(size, startIndex);
        }
        else
        {
          this._createPagingControlLoadMoreMaxRows();
        }
      },
      /**
       * @param {number} size Number of rows
       * @param {number} startIndex Start index
       * @private
       */
      _refreshPagingControlNav: function(size, startIndex)
      {
        var overflowOption = this.options['overflow'];
        var pagingControlContent = this._getPagingControlContent();
        if (pagingControlContent != null)
        {
          this._unregisterChildStateListeners(pagingControlContent);
          this._unregisterSwipeHandler();
          pagingControlContent.empty();
        }
        this._clearCachedDomPagingControlNav();
        this._createPagingControlNav(size, startIndex);
        this._registerSwipeHandler();
        this._refreshPagingControlNavArrows(size, startIndex);
        
        if (overflowOption == 'fit')
        {
          // dynamically hide controls based on available width
          var elementWidth = this.element.width();
          var pagingControlNavArrowSection = this._getPagingControlNavArrowSection();
          var pagingControlNavInputSection = this._getPagingControlNavInputSection();
          var pagingControlNavPageLinks = this._getPagingControlNavPageLinks();
          var pagingControlNavInputSummary = this._getPagingControlNavInputSummary();
          var pagingControlNavArrowSectionWidth = pagingControlNavArrowSection != null ? pagingControlNavArrowSection[0].offsetWidth:0;
          var pagingControlNavInputSectionWidth = pagingControlNavInputSection != null ? pagingControlNavInputSection[0].offsetWidth:0;
          var pagingControlNavPageLinksWidth = pagingControlNavPageLinks != null ? pagingControlNavPageLinks.width():0;
          var pagingControlNavInputSummaryWidth = pagingControlNavInputSummary != null ? pagingControlNavInputSummary.width():0;
          var pagingControlNavWidth = pagingControlNavArrowSectionWidth + pagingControlNavInputSectionWidth + pagingControlNavInputSummaryWidth;
          
          if (pagingControlNavWidth > elementWidth)
          {
            if (pagingControlNavWidth 
                - pagingControlNavPageLinksWidth <= elementWidth)
            {
              // hide only the page links
              pagingControlNavPageLinks.css('display', 'none'); 
            }
            else if (pagingControlNavWidth 
                     - pagingControlNavPageLinksWidth 
                     - pagingControlNavInputSummaryWidth <= elementWidth)
            {
              // hide the range text too
              if (pagingControlNavPageLinks != null)
              {
                pagingControlNavPageLinks.css('display', 'none');
              }
              if (pagingControlNavInputSummary != null)
              {
                pagingControlNavInputSummary.css('display', 'none');
              }
            }
            else
            {
              // hide the arrows too
              if (pagingControlNavPageLinks != null)
              {
                pagingControlNavPageLinks.css('display', 'none');
              }
              if (pagingControlNavInputSummary != null)
              {
                pagingControlNavInputSummary.css('display', 'none');
              }
              if (pagingControlNavArrowSection != null)
              {
                pagingControlNavArrowSection.css('display', 'none'); 
              }
            }
          }
          else if (pagingControlNavWidth > 0)
          {
            if (pagingControlNavPageLinks != null)
            {
              pagingControlNavPageLinks.css('display', '');
            }
            if (pagingControlNavInputSummary != null)
            {
              pagingControlNavInputSummary.css('display', '');
            }
            if (pagingControlNavArrowSection != null)
            {
              pagingControlNavArrowSection.css('display', '');
            }
          }
        }
      },
      /**
       * @param {number} size Number of rows
       * @param {number} startIndex Start index
       * @private
       */
      _refreshPagingControlNavArrows: function(size, startIndex)
      {
        var pagingControlNavArrowSection = this._getPagingControlNavArrowSection();
        var pagingControlNavFirst = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS);
        if (pagingControlNavFirst && pagingControlNavFirst.length > 0)
        {
          pagingControlNavFirst = $(pagingControlNavFirst[0]);
          
          if (this._getCurrentPage() == 0)
          {
            pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavFirst.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavFirst.attr('tabindex', '-1');
          }
          else
          {
            pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavFirst.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavFirst.attr(this._TAB_INDEX, '0');
          }
        }
        var pagingControlNavPrevious = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
        if (pagingControlNavPrevious && pagingControlNavPrevious.length > 0)
        {
          pagingControlNavPrevious = $(pagingControlNavPrevious[0]);
          
          if (this._getCurrentPage() == 0)
          {
            pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavPrevious.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavPrevious.attr(this._TAB_INDEX, '-1');
          }
          else
          {
            pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavPrevious.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavPrevious.attr(this._TAB_INDEX, '0');
          }
        }
        var pagingControlNavLast = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS);
        if (pagingControlNavLast && pagingControlNavLast.length > 0)
        {
          pagingControlNavLast = $(pagingControlNavLast[0]);
          
          if (this._getCurrentPage() == this._getTotalPages() - 1 || this._getTotalPages() <= 0)
          {
            pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavLast.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavLast.attr(this._TAB_INDEX, '-1');
          }
          else
          {
            pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavLast.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavLast.attr(this._TAB_INDEX, '0');
          }
        }
        var pagingControlNavNext = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
        if (pagingControlNavNext && pagingControlNavNext.length > 0)
        {
          pagingControlNavNext = $(pagingControlNavNext[0]);
          
          if (this._getCurrentPage() == this._getTotalPages() - 1 || this._getTotalPages() === 0 ||
              (this._getTotalPages() < 0 && size === 0))
          {
            pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavNext.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavNext.attr(this._TAB_INDEX, '-1');
          }
          else
          {
            pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavNext.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavNext.attr(this._TAB_INDEX, '0');
          }
        }
      },
      /**
       * Register event listeners which need to be registered datasource. 
       * @private
       */
      _registerDataSourceEventListeners: function()
      {
        // register the listeners on the datasource
        var data = this._getData();
        if (data != null)
        {
          this._unregisterDataSourceEventListeners();
          
          this._dataSourceEventHandlers = [];
          this._dataSourceEventHandlers.push({'eventType': oj.PagingModel.EventType['PAGE'], 'eventHandler': this._handleDataPage.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingModel.EventType['PAGECOUNT'], 'eventHandler': this._handleDataRefresh.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingTableDataSource.EventType['ADD'], 'eventHandler': this._handleDataRowAdd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingTableDataSource.EventType['REMOVE'], 'eventHandler': this._handleDataRowRemove.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingTableDataSource.EventType['RESET'], 'eventHandler': this._handleDataReset.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingTableDataSource.EventType['REFRESH'], 'eventHandler': this._handleDataRefresh.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingTableDataSource.EventType['SYNC'], 'eventHandler': this._handleDataFetchEnd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingTableDataSource.EventType['SORT'], 'eventHandler': this._handleDataSort.bind(this)});

          var i, ev;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++) {
            ev = data.on(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
            if (ev) {
                this._dataSourceEventHandlers[i]['eventHandler'] = ev;
            }
            
        }
        }
      },
      /**
       * Register event listeners for resize the container DOM element.
       * @param {jQuery} element  DOM element
       * @private
       */
      _registerResizeListener: function(element)
      {         
        if (!this._isResizeListenerAdded)
        {
          var self = this;
          oj.DomUtils.addResizeListener(element[0], function(width, height)
                                                    {
                                                      self._queueRefresh();
                                                    }, 50);
          this._isResizeListenerAdded = true;
        }
      },
      /**
       * Register swipe handler for DOM element.
       * @private
       */
      _registerSwipeHandler: function()
      {
        if (oj.DomUtils.isTouchSupported())
        {
          if (this.options['mode'] == this._MODE._PAGE)
          {
            var pagingControlNavArrowSection = this._getPagingControlNavArrowSection();

            if (pagingControlNavArrowSection != null)
            {
              var isVertical = this.options['pageOptions']['orientation'] == 'vertical' ? true : false;
              var self = this;

              if (isVertical)
              {
                var options = {
                  'recognizers': [
                    [Hammer.Swipe, {'direction': Hammer['DIRECTION_VERTICAL']}]
                ]};

                this._hammerSwipeUp = pagingControlNavArrowSection.ojHammer(options).on('swipeup', function(event)
                {
                  event.preventDefault();
                  self['nextPage']();
                });

                this._hammerSwipeDown = pagingControlNavArrowSection.ojHammer(options).on('swipedown', function(event)
                {
                  event.preventDefault();
                  self['previousPage']();
                });
              }
              else
              {
                var options = {
                  'recognizers': [
                    [Hammer.Swipe, {'direction': Hammer['DIRECTION_HORIZONTAL']}]
                ]};

                this._hammerSwipeLeft = pagingControlNavArrowSection.ojHammer(options).on('swipeleft', function(event)
                {
                  event.preventDefault();
                  self['nextPage']();
                });

                this._hammerSwipeRight = pagingControlNavArrowSection.ojHammer(options).on('swiperight', function(event)
                {
                  event.preventDefault();
                  self['previousPage']();
                });
              }
            }
          }
        }
      },
      /**
       * Unregister event listeners which are registered on datasource. 
       * @private
       */
      _unregisterDataSourceEventListeners: function()
      {
        var data = this._getData();
        // unregister the listeners on the datasource
        if (this._dataSourceEventHandlers != null && data != null)
        {
          var i;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++)
            data.off(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
        }
      },
      /**
       * Unregister _focusable(), etc, which were added to the child elements
       * @param {jQuery} parent jQuery div DOM element
       * @private
       */
      _unregisterChildStateListeners: function(parent)
      {
        var self = this;
        parent.find('*').each(function()
        {
          self._UnregisterChildNode(this);
        });
      },
      /**
       * Unregister swipe handler for DOM element.
       * @private
       */
      _unregisterSwipeHandler: function()
      {
        if (oj.DomUtils.isTouchSupported())
        {
          var isVertical = this.options['pageOptions']['orientation'] == 'vertical' ? true : false;
 
          if (isVertical)
          {
            if (this._hammerSwipeUp != null)
            {
              this._hammerSwipeUp.off('swipeup');
              this._hammerSwipeUp = null;
            }
            if (this._hammerSwipeDown != null)
            {
              this._hammerSwipeDown.off('swipedown');
              this._hammerSwipeDown = null;
            }
          }
          else
          {
            if (this._hammerSwipeLeft != null)
            {
              this._hammerSwipeLeft.off('swipeleft');
              this._hammerSwipeLeft = null;
            }
            if (this._hammerSwipeRight != null)
            {
              this._hammerSwipeRight.off('swiperight');
              this._hammerSwipeRight = null;
            }
          }
        }
      },
      /**** end internal functions ****/
      /**
       * Create a span element for acc purposes
       * @param {string} text span text
       * @param {string} className css class
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createAccLabelSpan: function(text, className)
      {
        var accLabel = $(document.createElement('span'));
        accLabel.addClass(className);
        accLabel.addClass(this._CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
        accLabel.text(text);

        return accLabel;
      },
      /**** start internal DOM functions ****/
      /**
       * Create the acc paging control label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccLabel: function()
      {
        var pagingControlContainer = this._getPagingControlContainer();
        var pagingControlAccLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_PAGING);
        var pagingControlAccLabel = this._createAccLabelSpan(pagingControlAccLabelText, this._CSS_CLASSES._PAGING_CONTROL_ACC_LABEL_CLASS);
        var pagingControlAccLabelId = this.element.attr('id') + '_oj_pgCtrl_acc_label';
        pagingControlAccLabel.attr('id', pagingControlAccLabelId);
        pagingControlContainer.append(pagingControlAccLabel); //@HTMLUpdateOK

        return pagingControlAccLabel;
      },
      /**
       * Create the acc page link label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavPageLabel: function()
      {
        var pagingControlAccNavPageLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_PAGE);
        var pagingControlAccNavPageLabel = this._createAccLabelSpan(pagingControlAccNavPageLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS);

        return pagingControlAccNavPageLabel;
      },
      /**
       * Create the acc first page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavFirstLabel: function()
      {
        var pagingControlAccNavFirstLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_FIRST_PAGE);
        var pagingControlAccNavFirstLabel = this._createAccLabelSpan(pagingControlAccNavFirstLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS);

        return pagingControlAccNavFirstLabel;
      },
      /**
       * Create the acc last page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavLastLabel: function()
      {
        var pagingControlAccNavLastLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_LAST_PAGE);
        var pagingControlAccNavLastLabel = this._createAccLabelSpan(pagingControlAccNavLastLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS);

        return pagingControlAccNavLastLabel;
      },
      /**
       * Create the acc next page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavNextLabel: function()
      {
        var pagingControlAccNavNextLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_NEXT_PAGE);
        var pagingControlAccNavNextLabel = this._createAccLabelSpan(pagingControlAccNavNextLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS);

        return pagingControlAccNavNextLabel;
      },
      /**
       * Create the acc previous page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavPreviousLabel: function()
      {
        var pagingControlAccNavPreviousLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_PREVIOUS_PAGE);
        var pagingControlAccNavPreviousLabel = this._createAccLabelSpan(pagingControlAccNavPreviousLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS);

        return pagingControlAccNavPreviousLabel;
      },
      /**
       * Create an paging content div
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlContent: function()
      {
        var pagingControlContainer = this._getPagingControlContainer();
        var pagingControlContent = $(document.createElement('div'));
        pagingControlContent.addClass(this._CSS_CLASSES._PAGING_CONTROL_CONTENT_CLASS);
        var pagingControlAccLabelId = this._getPagingControlAccLabel().attr('id');
        pagingControlContent.attr('role', 'navigation');
        pagingControlContent.attr('aria-labelledby', pagingControlAccLabelId);
        pagingControlContainer.append(pagingControlContent); //@HTMLUpdateOK

        return pagingControlContent;
      },
      /**
       * Create an paging load more div
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlLoadMore: function()
      {
        var pagingControlContent = this._getPagingControlContent();
        var pagingControlLoadMore = $(document.createElement('div'));
        pagingControlLoadMore.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_CLASS);
        pagingControlContent.append(pagingControlLoadMore); //@HTMLUpdateOK

        return pagingControlLoadMore;
      },
      /**
       * Create an paging load more link
       * @return {jQuery} jQuery a DOM element
       * @private
       */
      _createPagingControlLoadMoreLink: function()
      {
        var pagingControlLoadMore = this._getPagingControlLoadMore();
        var pagingControlLoadMoreLink = $(document.createElement('a'));
        pagingControlLoadMoreLink.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS);
        var loadMoreText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_LOAD_MORE);
        pagingControlLoadMoreLink.text(loadMoreText);
        pagingControlLoadMoreLink.attr(this._TAB_INDEX, '0');
        pagingControlLoadMoreLink.attr('href', '#');
        pagingControlLoadMore.append(pagingControlLoadMoreLink); //@HTMLUpdateOK

        return pagingControlLoadMoreLink;
      },
      /**
       * Create an paging load more max page message
       * @return {jQuery} jQuery a DOM element
       * @private
       */
      _createPagingControlLoadMoreMaxRows: function()
      {
        var pagingControlLoadMore = this._getPagingControlLoadMore();
        var pagingControlLoadMoreMaxRows = $(document.createElement('span'));
        pagingControlLoadMoreMaxRows.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS);
        var maxRowsText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_LOAD_MORE_MAX_ROWS, {'maxRows': this.options['loadMoreOptions']['maxCount']});
        pagingControlLoadMoreMaxRows.text(maxRowsText);
        pagingControlLoadMore.append(pagingControlLoadMoreMaxRows); //@HTMLUpdateOK

        return pagingControlLoadMoreMaxRows;
      },
      /**
       * Create an paging load more link
       * @param {number} size Number of rows
       * @param {number} startIndex Start index
       * @return {jQuery} jQuery a DOM element
       * @private
       */
      _createPagingControlLoadMoreRange: function(size, startIndex)
      {
        var pagingControlLoadMore = this._getPagingControlLoadMore();
        var pagingControlLoadMoreRange = $(document.createElement('span'));
        pagingControlLoadMoreRange.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS);
        var loadMoreRange = this._getItemRange(size, startIndex);
        pagingControlLoadMoreRange.append(loadMoreRange); //@HTMLUpdateOK
        pagingControlLoadMore.append(pagingControlLoadMoreRange); //@HTMLUpdateOK

        return pagingControlLoadMoreRange;
      },
      /**
       * Create the paging nav bar div
       * @param {number} size Number of rows
       * @param {number} startIndex Start index
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlNav: function(size, startIndex)
      {
        var options = this.options;
        var isVertical = this.options['pageOptions']['orientation'] == 'vertical' ? true : false;
        var isDot = this.options['pageOptions']['type'] == 'dots' ? true : false;
        var pageOptionLayout = options['pageOptions']['layout'];
        if (pageOptionLayout == null)
        {
          pageOptionLayout = [this._PAGE_OPTION_LAYOUT._AUTO];
        }
        var pagingControlContent = this._getPagingControlContent();
        var pagingControlNav = $(document.createElement('div'));
        pagingControlNav.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_CLASS);
        pagingControlContent.append(pagingControlNav); //@HTMLUpdateOK

        // page input section
        if (($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 && !isDot)||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._INPUT, pageOptionLayout) != -1)
        {
          var pagingControlNavInputSection = $(document.createElement('div'));
          pagingControlNavInputSection.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SECTION_CLASS);
          pagingControlNav.append(pagingControlNavInputSection); //@HTMLUpdateOK
          var pagingControlNavLabel = $(document.createElement('label'));
          pagingControlNavLabel.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LABEL_CLASS);
          var navInputPageLabel = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE);
          pagingControlNavLabel.text(navInputPageLabel);
          pagingControlNavInputSection.append(pagingControlNavLabel); //@HTMLUpdateOK

          var pagingControlNavInput = $(document.createElement('input'));
          pagingControlNavInput.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS);
          var navInputPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_INPUT_PAGE);
          this._focusable(this.element);
          pagingControlNavInput.attr('title', navInputPageTip);
          pagingControlNavInput.attr(this._TAB_INDEX, '0');
          pagingControlNavInput.val(this._getCurrentPage() + 1);
          pagingControlNavLabel.append(pagingControlNavInput); //@HTMLUpdateOK
          var maxPageVal = 0;
          
          if (this._getTotalPages() > 0)
          {
            maxPageVal = this._getTotalPages();
            var pagingControlNavMaxLabel = $(document.createElement('span'));
            pagingControlNavMaxLabel.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS);
            var navInputPageMaxLabel = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE_MAX, {'pageMax': maxPageVal});
            pagingControlNavMaxLabel.text(navInputPageMaxLabel);
            pagingControlNavInputSection.append(pagingControlNavMaxLabel); //@HTMLUpdateOK
          }
          else
          {
            if (size > 0)
            {
              maxPageVal = this._getCurrentPage() + 2;
            }
            else
            {
              maxPageVal = this._getCurrentPage() + 1;
            }
          }
          pagingControlNavInput.ojInputText({'rootAttributes': {'style':"width: auto; min-width: 0;"}, 'optionChange': this._handlePageChange.bind(this), 'validators': [{'type': 'numberRange', 'options': {'min': 1, max: maxPageVal}}]});
        }
        
        if (($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 && !isDot) ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._RANGE_TEXT, pageOptionLayout) != -1)
        {
          var pagingControlNavSummaryLabel = $(document.createElement('span'));
          pagingControlNavSummaryLabel.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS);
          var itemRange = this._getItemRange(size, startIndex);
          pagingControlNavSummaryLabel.append("("); //@HTMLUpdateOK
          pagingControlNavSummaryLabel.append(itemRange); //@HTMLUpdateOK
          pagingControlNavSummaryLabel.append(")"); //@HTMLUpdateOK
          pagingControlNav.append(pagingControlNavSummaryLabel); //@HTMLUpdateOK
        }

        // nav arrow section
        var pagingControlNavArrowSection = $(document.createElement('div'));
        pagingControlNavArrowSection.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_SECTION_CLASS);
        pagingControlNav.append(pagingControlNavArrowSection); //@HTMLUpdateOK
        
        if (($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 && !isDot) ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._NAV, pageOptionLayout) != -1)
        {
          var pagingControlNavFirst = $(document.createElement('a'));
          pagingControlNavFirst.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavFirst.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS);
          if (!isVertical)
          {
            pagingControlNavFirst.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_ICON_CLASS);
          }
          else
          {
            pagingControlNavFirst.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS);
          }
          pagingControlNavFirst.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navFirstPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_FIRST_PAGE);
          this._hoverable(pagingControlNavFirst);
          this._focusable(pagingControlNavFirst);
          pagingControlNavFirst.attr('title', navFirstPageTip);
          pagingControlNavFirst.attr(this._TAB_INDEX, '0');
          pagingControlNavFirst.attr('href', '#');
          pagingControlNavFirst.attr('oncontextmenu', 'return false;');
          var pagingControlNavFirstAccLabel = this._createPagingControlAccNavFirstLabel();
          pagingControlNavFirst.append(pagingControlNavFirstAccLabel); //@HTMLUpdateOK
          if (isVertical)
          {
            pagingControlNavFirst.css('display', 'block');
          }
          pagingControlNavArrowSection.append(pagingControlNavFirst); //@HTMLUpdateOK

          var pagingControlNavPrevious = $(document.createElement('a'));
          pagingControlNavPrevious.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavPrevious.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
          if (!isVertical)
          {
            pagingControlNavPrevious.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS);
          }
          else
          {
            pagingControlNavPrevious.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS);
          }
          pagingControlNavPrevious.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navPreviousPageTip= this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_PREVIOUS_PAGE);
          this._hoverable(pagingControlNavPrevious);
          this._focusable(pagingControlNavPrevious);
          pagingControlNavPrevious.attr('title', navPreviousPageTip);
          pagingControlNavPrevious.attr(this._TAB_INDEX, '0');
          pagingControlNavPrevious.attr('href', '#');
          pagingControlNavPrevious.attr('oncontextmenu', 'return false;');
          var pagingControlNavPreviousAccLabel = this._createPagingControlAccNavPreviousLabel();
          pagingControlNavPrevious.append(pagingControlNavPreviousAccLabel); //@HTMLUpdateOK
          if (isVertical)
          {
            pagingControlNavPrevious.css('display', 'block');
          }
          pagingControlNavArrowSection.append(pagingControlNavPrevious); //@HTMLUpdateOK
        }

        // nav pages section
        if ($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._PAGES, pageOptionLayout) != -1)
        {
          var pagingControlNavPagesSection = $(document.createElement('div'));
          pagingControlNavPagesSection.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_SECTION_CLASS);
          pagingControlNavArrowSection.append(pagingControlNavPagesSection); //@HTMLUpdateOK
          this._createPagingControlNavPages(pagingControlNavPagesSection, this._getMaxPageLinks(), size, startIndex);
        }

        if (($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 && !isDot) ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._NAV, pageOptionLayout) != -1)
        {
          var pagingControlNavNext = $(document.createElement('a'));
          pagingControlNavNext.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavNext.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
          if (!isVertical)
          {
            pagingControlNavNext.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_ICON_CLASS);
          }
          else
          {
            pagingControlNavNext.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS);
          }
          pagingControlNavNext.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navNextPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_NEXT_PAGE);
          this._hoverable(pagingControlNavNext);
          this._focusable(pagingControlNavNext);
          pagingControlNavNext.attr('title', navNextPageTip);
          pagingControlNavNext.attr(this._TAB_INDEX, '0');
          pagingControlNavNext.attr('href', '#');
          pagingControlNavNext.attr('oncontextmenu', 'return false;');
          var pagingControlNavNextAccLabel = this._createPagingControlAccNavNextLabel();
          pagingControlNavNext.append(pagingControlNavNextAccLabel); //@HTMLUpdateOK
          if (isVertical)
          {
            pagingControlNavNext.css('display', 'block');
          }
          pagingControlNavArrowSection.append(pagingControlNavNext); //@HTMLUpdateOK

          var pagingControlNavLast = $(document.createElement('a'));
          pagingControlNavLast.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavLast.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS);
          if (!isVertical)
          {
            pagingControlNavLast.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_ICON_CLASS);
          }
          else
          {
            pagingControlNavLast.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS); 
          }
          pagingControlNavLast.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navLastPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_LAST_PAGE);
          this._hoverable(pagingControlNavLast);
          this._focusable(pagingControlNavLast);
          pagingControlNavLast.attr('title', navLastPageTip);
          pagingControlNavLast.attr(this._TAB_INDEX, '0');
          pagingControlNavLast.attr('href', '#');
          pagingControlNavLast.attr('oncontextmenu', 'return false;');
          var pagingControlNavLastAccLabel = this._createPagingControlAccNavLastLabel();
          pagingControlNavLast.append(pagingControlNavLastAccLabel); //@HTMLUpdateOK
          if (isVertical)
          {
            pagingControlNavLast.css('display', 'block');
          }
          pagingControlNavArrowSection.append(pagingControlNavLast); //@HTMLUpdateOK
        }

        return pagingControlNav;
      },
      /**
       * Create the page links
       * @param {jQuery} parentDiv parent element
       * @param {number} numLinks number of page links
       * @param {number} size Number of rows
       * @param {number} startIndex Start index
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlNavPages: function(parentDiv, numLinks, size, startIndex)
      {
        if (numLinks < 5)
        {
          var errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_MAXPAGELINKS_INVALID_SUMMARY);
          var errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_MAXPAGELINKS_INVALID_DETAIL);
          throw new Error(errSummary + '\n' + errDetail);
        }
        var pagingControlNavPagesLinks = $(document.createElement('div'));
        pagingControlNavPagesLinks.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_LINKS_CLASS);
        parentDiv.append(pagingControlNavPagesLinks); //@HTMLUpdateOK
        var totalPages = this._getTotalPages();
        var currentPage = this._getCurrentPage();
        
        var numPagesToAdd = numLinks;
        // this will hold our page list
        var pageList = [];

        if (currentPage >= 0)
        {
          var i;
          if (totalPages != -1 && totalPages <= numPagesToAdd)
          {
            // always add the first page
            pageList[0] = 0;
            
            // just enumerate the pages
            for (i = 1; i < totalPages; i++)
            {
              pageList[i] = i;
            }
          }
          else
          {
            // add the first, current, and last page
            pageList.push(0);
            if (currentPage != 0)
            {
              pageList.push(currentPage);
            }
            // add last page if known row count
            if (currentPage != totalPages - 1 && totalPages != -1)
            {
              pageList.push(totalPages - 1);
            }
            numPagesToAdd = numPagesToAdd - pageList.length;
            // keep adding before the current page till we get to the
            // first page or we've added numPagesToAdd - 1.
            // If the last page or 2nd to last page then add until numPagesToAdd
            var pageBeforeCurrent = currentPage - 1;
            // number of pages to add after current
            var numPagesAfterCurrent = 1;
            // if at last page or second to last page then don't add any pages
            // after current
            if (currentPage == totalPages - 1 || currentPage == totalPages - 2)
            {
              numPagesAfterCurrent = 0;
            }
            while (numPagesToAdd > numPagesAfterCurrent && pageBeforeCurrent > 1)
            {
              pageList.push(pageBeforeCurrent);
              pageBeforeCurrent--;
              numPagesToAdd--;
            }
            // keep adding after the current page
            var pageAfterCurrent = currentPage + 1;
            // if unknown row count, only add one page after current if there is data
            if (totalPages == -1)
            {
              if (size > 0)
              {
                numPagesToAdd = 1;
              }
              else
              {
                numPagesToAdd = 0;
              }
            }
            while (numPagesToAdd > 0 && (pageAfterCurrent <= totalPages || totalPages == -1))
            {
              pageList.push(pageAfterCurrent);
              pageAfterCurrent++;
              numPagesToAdd--;
            }
          }

          // sort the pageList array
          var compareNumbers = function (a, b) {
            return a - b;
          };
          
          pageList.sort(compareNumbers);

          for (i = 0; i < pageList.length; i++)
          {
            var pageNum = pageList[i];
            this._createPagingControlNavPage(pagingControlNavPagesLinks, pageNum);
            // check if we have a gap
            if (i != pageList.length - 1)
            {
              if (pageNum != pageList[i + 1] - 1)
              {
                this._createPagingControlNavPage(pagingControlNavPagesLinks, -1);
              }
            }
          }
          if (totalPages == -1)
          {
            this._createPagingControlNavPage(pagingControlNavPagesLinks, -1);
          }
        }
        return pagingControlNavPagesLinks;
      },
      /**
       * Create the page link or page gap
       * @param {jQuery} parentDiv parent element
       * @param {number} pageNum page number
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlNavPage: function(parentDiv, pageNum)
      {
        var currentPage = this._getCurrentPage();
        var pagingControlNavPage = null;
        var isRTL = (this._GetReadingDirection() === "rtl");
        var isVertical = this.options['pageOptions']['orientation'] == 'vertical' ? true : false;
        var isDot = this.options['pageOptions']['type'] == 'dots' ? true : false;
        if (pageNum == -1)
        {
          pagingControlNavPage = $(document.createElement('span'));
          pagingControlNavPage.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS);
          pagingControlNavPage.text("...");
          parentDiv.append(pagingControlNavPage); //@HTMLUpdateOK
        }
        else
        {          
          if (currentPage == pageNum)
          {
             pagingControlNavPage = $(document.createElement('div'));
             pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._SELECTED);
             pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
             pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
             pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
          }
          else
          {
            pagingControlNavPage = $(document.createElement('a'));
            pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
            pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
          }
          pagingControlNavPage.attr('data-oj-pagenum', pageNum);
          if (!isDot)
          {
            pagingControlNavPage.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_CLASS);
          }
          else
          {
            pagingControlNavPage.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_DOT_CLASS);
          }
          var pageTitle = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_PAGE_LINK, {'pageNum': (pageNum + 1).toString()});
          this._hoverable(pagingControlNavPage);
          this._focusable(pagingControlNavPage);
          pagingControlNavPage.attr('title', pageTitle);
          pagingControlNavPage.attr(this._TAB_INDEX, '0');
          pagingControlNavPage.attr('href', '#');
          pagingControlNavPage.attr('oncontextmenu', 'return false;');
          // create the acc label for the page link
          var accPageLabel = this._createPagingControlAccNavPageLabel();
          pagingControlNavPage.append(accPageLabel); //@HTMLUpdateOK
          var pagingControlNavPageSpan = $(document.createElement('span'));
          pagingControlNavPageSpan.append((pageNum + 1).toString()); //@HTMLUpdateOK
          
          if (isDot)
          {
            pagingControlNavPageSpan.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_DOT_BULLET_CLASS);
            this._hoverable(pagingControlNavPageSpan);
            
            if (currentPage == pageNum)
            {
               pagingControlNavPageSpan.addClass(this._MARKER_STYLE_CLASSES._SELECTED);
               pagingControlNavPageSpan.addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            }
          }
          var dirAttrVal = isRTL ? 'rtl' : 'ltr';
          pagingControlNavPageSpan.attr('dir', dirAttrVal);
          pagingControlNavPage.append(pagingControlNavPageSpan); //@HTMLUpdateOK
          this._hoverable(pagingControlNavPage);
          if (isVertical)
          {
            pagingControlNavPage.css('display', 'block');
          }
          parentDiv.append(pagingControlNavPage); //@HTMLUpdateOK
        }
        return pagingControlNavPage;
      },
      /**
       * Return the paging content acc label
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getPagingControlAccLabel: function()
      {
        var pagingControlContainer = this._getPagingControlContainer();
        var pagingControlContentAccLabel = null;
        
        if (pagingControlContainer)
        {
          pagingControlContentAccLabel = pagingControlContainer.find('.' + this._CSS_CLASSES._PAGING_CONTROL_ACC_LABEL_CLASS);
          if (pagingControlContentAccLabel && pagingControlContentAccLabel.length > 0)
          {
            pagingControlContentAccLabel = $(pagingControlContentAccLabel.get(0));
          }
        }
        
        return pagingControlContentAccLabel;
      },
      /**
       * Return the paging container
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getPagingControlContainer: function()
      {
        return $(this.element);
      },
      /**
       * Return the paging content
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getPagingControlContent: function()
      {
        if (!this._cachedDomPagingControlContent)
        {
          var pagingControlContainer = this._getPagingControlContainer();
          var pagingControlContent = null;
          if (pagingControlContainer)
          {
            pagingControlContent = pagingControlContainer.find('.' + this._CSS_CLASSES._PAGING_CONTROL_CONTENT_CLASS);
            if (pagingControlContent && pagingControlContent.length > 0)
            {
              this._cachedDomPagingControlContent = $(pagingControlContent.get(0));
            }
          }
        }

        return this._cachedDomPagingControlContent;
      },
      /**
       * Return the Load More div
       * @return {jQuery|null} jQuery a DOM element
       * @private
       */
      _getPagingControlLoadMore: function()
      {
        if (!this._cachedDomPagingControlLoadMore)
        {
          var pagingControlContent = this._getPagingControlContent();
          var pagingControlLoadMore = null;
          if (pagingControlContent)
          {
            pagingControlLoadMore = pagingControlContent.children('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_CLASS);
            if (pagingControlLoadMore && pagingControlLoadMore.length > 0)
            {
              this._cachedDomPagingControlLoadMore = $(pagingControlLoadMore.get(0));
            }
          }
        }

        return this._cachedDomPagingControlLoadMore;
      },
      /**
       * Return the Load More link
       * @return {jQuery|null} jQuery a DOM element
       * @private
       */
      _getPagingControlLoadMoreLink: function()
      {
        if (!this._cachedDomPagingControlLoadMoreLink)
        {
          var pagingControlLoadMore = this._getPagingControlLoadMore();
          var pagingControlLoadMoreLink = null;
          if (pagingControlLoadMore)
          {
            pagingControlLoadMoreLink = pagingControlLoadMore.children('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS);
            if (pagingControlLoadMoreLink && pagingControlLoadMoreLink.length > 0)
            {
              this._cachedDomPagingControlLoadMoreLink = $(pagingControlLoadMoreLink.get(0));
            }
          }
        }

        return this._cachedDomPagingControlLoadMoreLink;
      },
      /**
       * Return the Load More Range
       * @return {jQuery|null} jQuery span DOM element
       * @private
       */
      _getPagingControlLoadMoreRange: function()
      {
        if (!this._cachedDomPagingControlLoadMoreRange)
        {
          var pagingControlLoadMore = this._getPagingControlLoadMore();
          var pagingControlLoadMoreRange = null;
          if (pagingControlLoadMore)
          {
            pagingControlLoadMoreRange = pagingControlLoadMore.children('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS);
            if (pagingControlLoadMoreRange && pagingControlLoadMoreRange.length > 0)
            {
              this._cachedDomPagingControlLoadMoreRange = $(pagingControlLoadMoreRange.get(0));
            }
          }
        }

        return this._cachedDomPagingControlLoadMoreRange;
      },
      /**
       * Return the paging nav bar
       * @return {jQuery|null} jQuery a DOM element
       * @private
       */
      _getPagingControlNav: function()
      {
        if (!this._cachedDomPagingControlNav)
        {
          var pagingControlContent = this._getPagingControlContent();
          var pagingControlNav = null;
          if (pagingControlContent)
          {
            pagingControlNav = pagingControlContent.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_CLASS);
            if (pagingControlNav && pagingControlNav.length > 0)
            {
              this._cachedDomPagingControlNav = $(pagingControlNav.get(0));
            }
          }
        }

        return this._cachedDomPagingControlNav;
      },
      /**
       * Return the paging nav input
       * @return {jQuery|null} jQuery input DOM element
       * @private
       */
      _getPagingControlNavInput: function()
      {
        if (!this._cachedDomPagingControlNavInput)
        {
          var pagingControlNav = this._getPagingControlNav();
          var pagingControlNavInput = null;
          if (pagingControlNav)
          {
            pagingControlNavInput = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS);
            if (pagingControlNavInput && pagingControlNavInput.length > 0)
            {
              this._cachedDomPagingControlNavInput = $(pagingControlNavInput.get(0));
            }
          }
        }

        return this._cachedDomPagingControlNavInput;
      },
      /**
       * Return the paging nav input summary
       * @return {jQuery|null} jQuery input DOM element
       * @private
       */
      _getPagingControlNavInputSummary: function()
      {
        if (!this._cachedDomPagingControlNavInputSummary)
        {
          var pagingControlNav = this._getPagingControlNav();
          var pagingControlNavInputSummary = null;
          if (pagingControlNav)
          {
            pagingControlNavInputSummary = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS);
            if (pagingControlNavInputSummary && pagingControlNavInputSummary.length > 0)
            {
              this._cachedDomPagingControlNavInputSummary = $(pagingControlNavInputSummary.get(0));
            }
          }
        }

        return this._cachedDomPagingControlNavInputSummary;
      },
      /**
       * Return the page links
       * @private
       */
      _getPagingControlNavPageLinks: function()
      {
        var pagingControlNav = this._getPagingControlNav();
        var pagingControlNavPageLinks = null;
        if (pagingControlNav)
        {
          pagingControlNavPageLinks = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_LINKS_CLASS);
          if (pagingControlNavPageLinks && pagingControlNavPageLinks.length > 0)
          {
            pagingControlNavPageLinks = $(pagingControlNavPageLinks.get(0));
          }
        }

        return pagingControlNavPageLinks;
      },
      /**
       * Return the nav arrows
       * @private
       */
      _getPagingControlNavArrowSection: function()
      {
        var pagingControlNav = this._getPagingControlNav();
        var pagingControlNavArrowSection = null;
        if (pagingControlNav)
        {
          pagingControlNavArrowSection = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_SECTION_CLASS);
          if (pagingControlNavArrowSection && pagingControlNavArrowSection.length > 0)
          {
            pagingControlNavArrowSection = $(pagingControlNavArrowSection.get(0));
          }
          else
          {
            return null;
          }
        }

        return pagingControlNavArrowSection;
      }
      ,
      /**
       * Return the nav input section
       * @private
       */
      _getPagingControlNavInputSection: function()
      {
        var pagingControlNav = this._getPagingControlNav();
        var pagingControlNavInputSection = null;
        if (pagingControlNav)
        {
          pagingControlNavInputSection = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SECTION_CLASS);
          if (pagingControlNavInputSection && pagingControlNavInputSection.length > 0)
          {
            pagingControlNavInputSection = $(pagingControlNavInputSection.get(0));
          }
          else
          {
            return null;
          }
        }

        return pagingControlNavInputSection;
      }
      /**** end internal DOM functions ****/
    })
    //////////////////     FRAGMENTS    //////////////////
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
     *       <td rowspan="2">Page Navigation Bar</td>
     *       <td><kbd>Swipe</kbd></td>
     *       <td>When mode='page', swiping left or right on the page navigation bar will either increment or decrement the page respectively.</td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment touchDoc - Used in touch section of classdesc, and standalone gesture doc
     * @memberof oj.ojPagingControl
     */  
    
    /**
     * <p>This component has no keyboard interaction.  
     * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
     * @memberof oj.ojPagingControl
     */
}());

});
